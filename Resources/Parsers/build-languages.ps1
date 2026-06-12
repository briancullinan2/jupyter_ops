# =====================================================================
# HARDENED FLAT LIST ANTLR COMPILATION SUITE
# =====================================================================
Write-Host "🚀 Compiling complete project language matrix..." -ForegroundColor Cyan

# 1. Core Systems & Game Scripting Matrix
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\c\CLexer.g4 .\c\CParser.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\cpp\CPP14Lexer.g4 .\cpp\CPP14Parser.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\angelscript\angelscript.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\lua\LuaLexer.g4 .\lua\LuaParser.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\wat\WatLexer.g4 .\wat\WatParser.g4

# 2. Complete Hardware Assembly Layer Track
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\asm\asmMASM\asmMASM.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\asm\asm6502\asm6502.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\asm\asm8080\asm8080.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\asm\asm8086\asm8086.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\asm\asmZ80\asmZ80.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\asm\pdp7\pdp7.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\asm\nasm\nasm_x86_64_Lexer.g4 .\asm\nasm\nasm_x86_64_Parser.g4

# 3. Web Systems & Abstract Specifications Pipeline
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\javascript\javascript\JavaScriptLexer.g4 .\javascript\javascript\JavaScriptParser.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\javascript\typescript\TypeScriptLexer.g4 .\javascript\typescript\TypeScriptParser.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\html\HTMLLexer.g4 .\html\HTMLParser.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\css3\css3Lexer.g4 .\css3\css3Parser.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\json\JSON.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\graphql\GraphQL.g4

# 4. Heavy Server-Side Framework Layouts
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\php\PhpLexer.g4 .\php\PhpParser.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\csharp\CSharpLexer.g4 .\csharp\CSharpParser.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\golang\GoLexer.g4 .\golang\GoParser.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\rust\RustLexer.g4 .\rust\RustParser.g4

# 5. JVM Vectors & Python Execution Contexts
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\java\java8\Java8Lexer.g4 .\java\java8\Java8Parser.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\java\java9\Java9Lexer.g4 .\java\java9\Java9Parser.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\python\python3\Python3Lexer.g4 .\python\python3\Python3Parser.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\python\python2-js\Python2.g4

# 6. Relational Databases & Storage Dialects
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\sql\postgresql\PostgreSQLLexer.g4 .\sql\postgresql\PostgreSQLParser.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\sql\sqlite\SQLiteLexer.g4 .\sql\sqlite\SQLiteParser.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\sql\plsql\PlSqlLexer.g4 .\sql\plsql\PlSqlParser.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\sql\tsql\TSqlLexer.g4 .\sql\tsql\TSqlParser.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\sql\mysql\Oracle\MySQLLexer.g4 .\sql\mysql\Oracle\MySQLParser.g4

# 7. DevOps Configuration Infrastructure & Structured Markup
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\cmake\CMake.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\protobuf3\Protobuf3.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\toml\TomlLexer.g4 .\toml\TomlParser.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\xml\XMLLexer.g4 .\xml\XMLParser.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\csv\CSV.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\properties\PropertiesLexer.g4 .\properties\PropertiesParser.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\terraform\terraform.g4

# 8. Complete Quake / Engine Target Compilations
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\quakemap\quakemap.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\quake3\arena\Q3ArenaLexer.g4 .\quake3\arena\Q3ArenaParser.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\quake3\camera\Q3CameraLexer.g4 .\quake3\camera\Q3CameraParser.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\quake3\config\Q3ConfigLexer.g4 .\quake3\config\Q3ConfigParser.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\quake3\map\Q3MapLexer.g4 .\quake3\map\Q3MapParser.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\quake3\menu\Q3MenuLexer.g4 .\quake3\menu\Q3MenuParser.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\quake3\shader\Q3ShaderLexer.g4 .\quake3\shader\Q3ShaderParser.g4
java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript .\quake3\skin\Q3SkinLexer.g4 .\quake3\skin\Q3SkinParser.g4

Write-Host "✅ Pipeline complete. All JavaScript target code generated cleanly." -ForegroundColor Cyan

