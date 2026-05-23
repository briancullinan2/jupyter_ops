# =====================================================================
# CONFIGURATION & RUNTIME CONFIG
# =====================================================================
$AntlrSource   = "."
$AntlrRuntimes = @("JavaScript") 
$AntlrJar = Get-ChildItem -Path $AntlrSource -Filter "antlr-*.jar" |
    Sort-Object {
        # Extract just the version number digits (e.g., "4.13.2") from the filename
        if ($_.BaseName -match 'antlr-([\d\.]+)') {
            [version]$Matches[1]
        } else {
            [version]'0.0.0'
        }
    } | 
    Select-Object -Last 1 -ExpandProperty FullName

# JUPYTER CELL FALLBACK: Inject the universal module descriptor directly into files
$JupyterFooter = @"

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
"@

if (-not $AntlrJar) {
    Write-Error "CRITICAL: Could not find any antlr-*.jar in the root directory!"
    exit 1
}

# Ensure destination outputs exist cleanly up front
$Null = New-Item -ItemType Directory -Force -Path "build"

# =====================================================================
# STEP 1: DYNAMIC FILE DISCOVERY & FILTERING (WITH EXCLUSIONS)
# =====================================================================
Write-Host "Scanning directory for grammars..." -ForegroundColor Cyan
$AllGrammars = Get-ChildItem -Path $AntlrSource -Filter "*.g4" -Recurse | 
    Where-Object { $_.FullName -notmatch '\\examples\\' } |
    Select-Object -ExpandProperty FullName

$BuildGFiles = @()

foreach ($gfile in $AllGrammars) {
    if ($gfile -match "\\antlr\\" -or $gfile -match "\\examples\\" -or $gfile -match "\\test\\") { continue }
    $BuildGFiles += $gfile
}

# =====================================================================
# STEP 2: COMPILE GRAMMARS VIA ANTLR JAR (WITH AUTOMATED IMPORTS RESOLUTION)
# =====================================================================
Write-Host "`n--- Starting ANTLR Parser Generation ---" -ForegroundColor Green

foreach ($runtime in $AntlrRuntimes) {
    foreach ($gfile in $BuildGFiles) {
        $RelativePath = Resolve-Path -Relative $gfile
        $GrammarDir   = Split-Path $gfile
        $BaseName     = [System.IO.Path]::GetFileNameWithoutExtension($gfile)
        
        $StandardJs   = Join-Path $GrammarDir "$BaseName.js"
        $LexerJs      = Join-Path $GrammarDir "$BaseName`Lexer.js"
        $ParserJs     = Join-Path $GrammarDir "$BaseName`Parser.js"
        
        $ExistingJsFile = $null
        if (Test-Path $StandardJs) { $ExistingJsFile = $StandardJs }
        elseif (Test-Path $LexerJs)  { $ExistingJsFile = $LexerJs }
        elseif (Test-Path $ParserJs) { $ExistingJsFile = $ParserJs }
        
        if ($ExistingJsFile) {
            $gfileTime  = (Get-Item $gfile).LastWriteTime
            $jsFileTime = (Get-Item $ExistingJsFile).LastWriteTime
            if ($gfileTime -le $jsFileTime) {
                Write-Host "Skipping Up-To-Date Grammar: $RelativePath" -ForegroundColor DarkGray
                continue
            }
        }
        
        # --- SMART SANITIZED DEPENDENCY SCANNING ---
        $FileContent = Get-Content $gfile -Raw
        $ImportMatches = [regex]::Matches($FileContent, '(?i)\bimport\s+([^;]+);')
        $VocabMatches  = [regex]::Matches($FileContent, '(?i)\btokenVocab\s*=\s*([a-zA-Z0-9_]+)')
        $IsSubGrammar  = $FileContent -match '(?i)\b(parser|lexer)\s+grammar\b'
        
        $NeededDirs = @((Resolve-Path $GrammarDir).Path)
        
        if ($IsSubGrammar) {
            Get-ChildItem -Path $GrammarDir -Filter "*.g4" | ForEach-Object {
                $FileContentNeighbor = Get-Content $_.FullName -Raw
                $NeighborVocab = [regex]::Match($FileContentNeighbor, '(?i)\btokenVocab\s*=\s*([a-zA-Z0-9_]+)')
                if ($NeighborVocab.Success) {
                    $dep = ($NeighborVocab.Groups[1].Value -replace "[\r\n]", "").Trim()
                    $FoundDep = Get-ChildItem -Path $AntlrSource -Filter "$dep.g4" -Recurse -ErrorAction SilentlyContinue | Select-Object -First 1
                    if ($FoundDep) { $NeededDirs += (Resolve-Path (Split-Path $FoundDep.FullName)).Path }
                }
            }
        }
        
        $TargetDependencies = @()
        foreach ($m in $ImportMatches) {
            $CleanedImports = $m.Groups[1].Value -replace "[\r\n]", ""
            $TargetDependencies += $CleanedImports.Split(',') | ForEach-Object { $_.Trim() }
        }
        foreach ($m in $VocabMatches) {
            $TargetDependencies += ($m.Groups[1].Value -replace "[\r\n]", "").Trim()
        }
        
        if ($TargetDependencies.Count -gt 0) {
            foreach ($dep in $TargetDependencies) {
                if ([string]::IsNullOrWhiteSpace($dep)) { continue }
                $FoundDep = Get-ChildItem -Path $AntlrSource -Filter "$dep.g4" -Recurse -ErrorAction SilentlyContinue | Select-Object -First 1
                if ($FoundDep) { $NeededDirs += (Resolve-Path (Split-Path $FoundDep.FullName)).Path }
            }
        }
        
        $UniqueDirs = $NeededDirs | Select-Object -Unique
        $LibArguments = @()
        foreach ($dir in $UniqueDirs) {
            $LibArguments += "-lib"; $LibArguments += $dir
        }
        
        Write-Host "Compiling [$runtime] Parser for: $RelativePath (Modified)" -ForegroundColor Yellow
        & java -jar $AntlrJar "-Dlanguage=$runtime" @LibArguments $gfile
        
        # Patch footers
        $OutputsToPatch = @($StandardJs, $LexerJs, $ParserJs) | Where-Object { Test-Path $_ }
        foreach ($targetOut in $OutputsToPatch) {
            $Content = Get-Content $targetOut -Raw
            if ($Content -notlike "*Dynamic Universal Module Wrapper*") {
                Add-Content -Path $targetOut -Value $JupyterFooter
            }
        }
    }
}


# =====================================================================
# STEP 3: DYNAMIC WEBPACK ENTRY POINT GENERATION (WITH BUNDLE FILTERING)
# =====================================================================
Write-Host "`n--- Generating Dynamic Languages Index File ---" -ForegroundColor Green

$WebpackIncludeTargets = @(
    # Core System & Engine Stack (Quake 3 Dev / WASM Native)
    "c", "cpp", "angelscript", "unreal_angelscript", "lua", "wat", "asm",
    "quake3", "quakemap",

    # Modern Web Core & Heavy Servers
    "javascript", "typescript", "html", "css3", "json", "webidl", "graphql",
    "php", "csharp", "python", "golang", "rust", "java",

    # Regular Expressions Engines
    "xsd-regex", "pcre",

    # DevOps Tooling, Build Pipelines & Structural Data
    "cmake", "protobuf3", "toml", "xml", "csv", "properties", "terraform", "sql"
)

# 2. Grab every compiled JS file across the entire workspace architecture
$GeneratedJsFiles = $BuildGFiles | ForEach-Object { Get-ChildItem -Path (Split-Path $_) -Filter "*.js" } | Select-Object -ExpandProperty FullName -Unique

$IndexLines = @("import antlr4 from 'antlr4';")
$ExportLines = @("export { antlr4 };")

$Counter = 1
foreach ($jsFile in $GeneratedJsFiles) {
    if ($jsFile -match '\.(bundle|umd)\.js$') { continue }
    
    # Isolate structural components
    $FullDir        = Split-Path $jsFile
    $ParentDir      = Split-Path $FullDir -Leaf
    $GrandparentDir = Split-Path (Split-Path $FullDir) -Leaf
    $GreatGrandDir  = Split-Path (Split-Path (Split-Path $FullDir)) -Leaf
    
    # -----------------------------------------------------------------
    # THE LANGUAGE FIXER-UPPER: PLATFORM ANOMALY DETECTION GATES
    # -----------------------------------------------------------------
    # Check if this file lives inside an asset example matrix folder
    if ($FullDir -match '\\examples\\' -or $FullDir -match '\\_scripts\\') {
        continue
    }

    # Isolate the core root target domain (e.g., "python" or "javascript")
    $RootLanguageDomain = $ParentDir
    if ($WebpackIncludeTargets -contains $GrandparentDir) { $RootLanguageDomain = $GrandparentDir }
    if ($WebpackIncludeTargets -contains $GreatGrandDir)  { $RootLanguageDomain = $GreatGrandDir }

    # MATCH FILTER GUARD: Skip if the language domain isn't in our curated target bundle array
    if ($WebpackIncludeTargets -notcontains $ParentDir -and $WebpackIncludeTargets -notcontains $GrandparentDir -and $WebpackIncludeTargets -notcontains $GreatGrandDir) {
        continue
    }

    # SURGICAL BASE RUNTIME VALIDATION:
    # If the file belongs to an alternative host target implementation variant, 
    # look to see if a native JavaScript base class engine companion exists right next to it.
    $IsAlternativeRuntimeFolder = ($ParentDir -match '-(cpp|ts|py|formal|without-actions|alt)$') -or 
                                  ($ParentDir -match '^(CSharp|CSharpSharwell|Go|Cpp|Dart)$')

    if ($IsAlternativeRuntimeFolder) {
        $HasLexerBase  = Get-ChildItem -Path $FullDir -Filter "*LexerBase.js" -Recurse -ErrorAction SilentlyContinue
        $HasParserBase = Get-ChildItem -Path $FullDir -Filter "*ParserBase.js" -Recurse -ErrorAction SilentlyContinue
        
        # Also check one folder up if nested in a sub-runtime folder
        if (-not $HasLexerBase) { $HasLexerBase = Get-ChildItem -Path $FullDir\.. -Filter "*LexerBase.js" -ErrorAction SilentlyContinue }
        if (-not $HasParserBase) { $HasParserBase = Get-ChildItem -Path $FullDir\.. -Filter "*ParserBase.js" -ErrorAction SilentlyContinue }

        if (-not $HasLexerBase -and -not $HasParserBase) {
            Write-Host "⚠️  Skipping cross-compiled runtime variant structure: [.$($jsFile.Substring((Resolve-Path $AntlrSource).Path.Length))] -> Reason: JavaScript Target Base Classes Missing." -ForegroundColor Yellow
            continue
        }
    }

    # -----------------------------------------------------------------
    # REGISTRY EMISSION GENERATION
    # -----------------------------------------------------------------
    $CleanPath = (Resolve-Path -Relative $jsFile) -replace '\\', '/'
    if ($CleanPath -notlike "./*") { $CleanPath = "./" + $CleanPath }
    
    $FileName   = [System.IO.Path]::GetFileNameWithoutExtension($jsFile)
    
    # Flatten namespacing to prevent collisions across similar subfolders
    $SafeParent = $ParentDir -replace '[^a-zA-Z0-9_]', ''
    $ExportName = "${SafeParent}_${FileName}"
    
    $IndexLines += "import LangModule$Counter from '$CleanPath';"
    $ExportLines += "export { LangModule$Counter as $ExportName };"
    $Counter++
}

$IndexContent = ($IndexLines + $ExportLines) -join "`n"
Set-Content -Path "./languages-index.js" -Value $IndexContent

Write-Host "`nSuccessfully packaged ($($Counter - 1)) fully verified, JS-compatible language target modules." -ForegroundColor Cyan







# =====================================================================
# STEP 4: COMPILING UNIFIED MINIMIZED PACKAGED ENGINE VIA WEBPACK
# =====================================================================
Write-Host "`n--- Executing Webpack Production Optimization ---" -ForegroundColor Green

#npx webpack

# Clean up temporary registry entry hook file
#if (Test-Path "./languages-index.js") { Remove-Item "./languages-index.js" -Force }

Write-Host "`n=====================================================================" -ForegroundColor Green
Write-Host "BUILD COMPLETE: All languages and antlr4 compiled into build/antlr-languages.bundle.js" -ForegroundColor Green
Write-Host "=====================================================================" -ForegroundColor Green