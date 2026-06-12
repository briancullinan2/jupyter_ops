# UM, WEIRD, find platform specific grammars
#Java
#C# (and an alternate C# target)
#Python (2 and 3)
#JavaScript
#Go
#C++
#Swift
#PHP
#DART
ANTLR_LSOURCE   := .
ANTLR_LANGS     := $(dir $(wildcard $(ANTLR_LSOURCE)/*/))

ANTLR_LANGTRIM  := $(subst /,,$(subst $(ANTLR_LSOURCE)/,,$(ANTLR_LANGS)))

# WTF HAPPENED!? WHAT AM I DOING WRONG WITH THIS BUILD SYSTEM?
#ANTLR_EXCLUDE   := asl aspectj

ANTLR_LANGUAGES := $(filter-out $(ANTLR_EXCLUDE),$(ANTLR_LANGTRIM))

# split all this stuff up so paths don't get confused searching for the right grammar
ANTLR_TARGETS   := PHP CSharp JavaScript Go Python CSharpSharwell TypeScript Cpp Java Swift Dart

# only build this for now
ANTLR_RUNTIMES := JavaScript
#ANTLR_RUNTIMES  := $(ANTLR_TARGETS)

# ANTLR Special/Buriable Runtimes Mapping Setup
RUNTIME_TARGETS := $(addsuffix /*.g4,$(filter $(ANTLR_RUNTIMES),$(ANTLR_TARGETS)))
RUNTIMES_BURIED := $(addprefix $(ANTLR_LSOURCE)/*/**/,$(RUNTIME_TARGETS))
SPECIAL_GFILES  := $(wildcard $(RUNTIMES_BURIED))
TRIM_GFILES     := $(subst $(ANTLR_LSOURCE)/,,$(SPECIAL_GFILES))

# filter out special language files we have to reduce work
REPLACE_LANGS    = $(patsubst $1/%,$1,$(filter $1/%,$(TRIM_GFILES)))
SPECIAL_LANGS   := $(foreach L,$(ANTLR_LANGUAGES),$(call REPLACE_LANGS,$L))
SPECIAL_UNIQUE  := $(filter $(SPECIAL_LANGS),$(ANTLR_LANGUAGES))

# =====================================================================
# SAFE MULTIPLATFORM RECURSIVE FILE TRAVERSAL (PURE GNU MAKE)
# =====================================================================

# Manually unroll the directory layers to mimic a deep recursive search.
# This prevents breaking on Mac BSD find, Windows CMD find, and MinGW environments.
ALL_BURIED_G4   := $(wildcard $(ANTLR_LSOURCE)/*.g4) \
                   $(wildcard $(ANTLR_LSOURCE)/*/*.g4) \
                   $(wildcard $(ANTLR_LSOURCE)/*/*/*.g4) \
                   $(wildcard $(ANTLR_LSOURCE)/*/*/*/*.g4)

# Safely compute REGULAR_GFILES by filtering out the explicit special runtimes 
# from your comprehensive cross-platform wildcard tree.
REGULAR_GFILES  := $(filter-out $(SPECIAL_GFILES),$(ALL_BURIED_G4))

# Ensure total structural integration into downstream assignments
BUILD_GFILES    := $(REGULAR_GFILES) $(SPECIAL_GFILES)

# Correctly boost the downstream build asset locator dynamically by evaluating
# inside the exact source directory of every dynamic grammar match.
ANTLR_BUILD     := $(foreach gfile,$(BUILD_GFILES),$(wildcard $(dir $(gfile))*.js))

# =====================================================================
# Downstream variables and runtime assets tracking
# =====================================================================
ANTLR_RUNTIME   := node_modules/antlr4/src/antlr4
ANTLR_JSFILES   := $(wildcard $(ANTLR_RUNTIME)/*.js) \
                   $(wildcard $(ANTLR_RUNTIME)/*/*.js) \
                   $(wildcard $(ANTLR_RUNTIME)/*/*/*.js) \
                   $(wildcard $(ANTLR_RUNTIME)/*/*/*/*.js)

# I THINK THE MAKEFILE RULE SYSTEM IS WHAT IS MAKING MAKEFILE WORSE
#   THIS IS STUPID, REPLACE THE PATHS WITH TARGETS, JUST TO EXTRACT IT DOWN BELOW
#   IF MAKEFILE WAS MORE LIKE LISP, WE'D JUST CALL `DO_IT:` OURSELVES
# ADDING IN SHIT LIKE .DEFAULTACTION THAT I HAVE TO GO LOOK UP IS WORSE FOR 
#   PROLOG. NEED TO MAKE A BETTER PROLOG (LOOSEY GOOSEY SYNTAX), NOT A WORSE ONE.
ANTLR_OBJS      := $(subst $(ANTLR_RUNTIME)/,build/antlr4/,$(ANTLR_JSFILES))
ANTLR_LOBJS     := $(subst $(ANTLR_LSOURCE)/,build/antlr4-languages/,$(ANTLR_BUILD))
ANTLR_FILTERED  := $(filter build/antlr4-languages/javascript/%,$(ANTLR_LOBJS))

# =====================================================================
# RECIPES & COMPILATION TARGET RULES
# =====================================================================


build:
	@if [ ! -d "./$@" ]; \
		then $(MKDIR) "./$@";fi;


build/%.mkdir: build
	@if [ ! -d "./$(subst .mkdir,,$@)" ]; \
		then mkdir "./$(subst .mkdir,,$@)";fi;


build/antlr4/%:
	npx babel --plugins @babel/plugin-transform-modules-umd \
		$(subst build/antlr4/,$(ANTLR_RUNTIME)/,$@) --out-file $@


antlr.js: build/antlr4.mkdir $(ANTLR_JSFILES) $(ANTLR_OBJS) \
		  build/antlr4-languages.mkdir $(ANTLR_BUILD) $(ANTLR_FILTERED)
	@echo "MADE $(ANTLR_LOBJS)"

#parser/%: 
#	@echo "MAKE $(RUNTIME) PARSER $@"
#	-java -jar $(ANTLR_LSOURCE)/antlr-*.jar \
#		-Dlanguage=$(RUNTIME) $(subst parser/$(RUNTIME)/,,$@)

parser/%: 
	@echo "MAKE $(RUNTIME) PARSER $@"
#	-java -jar $(ANTLR_LSOURCE)/antlr-*.jar \
#		-Dlanguage=$(RUNTIME) -XexportMacro "" $(subst parser/$(RUNTIME)/,,$@)
build/antlr4/%:
	npx babel --presets @babel/preset-env \
		--plugins @babel/plugin-transform-modules-umd \
		$(subst build/antlr4/,$(ANTLR_RUNTIME)/,$@) --out-file $@

build/antlr4-languages/%:
	-npx babel --presets @babel/preset-env \
		--plugins [@babel/plugin-transform-modules-umd,{"globals":{"antlr4":"antlr4"}}] \
		$(subst build/antlr4-languages/,$(ANTLR_LSOURCE)/,$@) --out-file $@

#build/antlr4-languages/%:
#	-npx babel --plugins @babel/plugin-transform-modules-umd \
#		$(subst build/antlr4-languages/,$(ANTLR_LSOURCE)/,$@) --out-file $@

target/%:
	@echo "MAKE TARGET $@"
	$(MAKE) RUNTIME="$(subst target/,,$@)"  \
		$(addprefix $(subst target/,parser/,$@)/,$(BUILD_GFILES))

antlr: $(BUILD_GFILES) $(addprefix target/,$(ANTLR_RUNTIMES))
	@echo "MAKE ALL $(BUILD_GFILES)"