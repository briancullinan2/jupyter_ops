


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
ANTLR_LSOURCE   := ./Resources/Parsers
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

#ANTLR_GRAMMARS := **/*.g4)
RUNTIME_TARGETS := $(addsuffix /*.g4,$(filter $(ANTLR_RUNTIMES),$(ANTLR_TARGETS)))
RUNTIMES_BURIED := $(addprefix $(ANTLR_LSOURCE)/*/**/,$(RUNTIME_TARGETS))
SPECIAL_GFILES  := $(wildcard $(RUNTIMES_BURIED))
TRIM_GFILES     := $(subst $(ANTLR_LSOURCE)/,,$(SPECIAL_GFILES))

# filter out special language files we have to reduce work
REPLACE_LANGS    = $(patsubst $1/%,$1,$(filter $1/%,$(TRIM_GFILES)))
SPECIAL_LANGS   := $(foreach L,$(ANTLR_LANGUAGES),$(call REPLACE_LANGS,$L))
SPECIAL_UNIQUE  := $(filter $(SPECIAL_LANGS),$(ANTLR_LANGUAGES))

# UGH FINALLY, get the rest of the languages that don't have special targets
REGULAR_BURIED  := $(wildcard $(ANTLR_LSOURCE)/**/*.g4)
REGULAR_LANGS   := $(addsuffix /%,$(filter-out $(SPECIAL_UNIQUE),$(ANTLR_LANGUAGES)))
REGULAR_FILTER   = $(filter $(ANTLR_LSOURCE)/$1,$(REGULAR_BURIED))
REGULAR_GFILES  := $(foreach L,$(REGULAR_LANGS),$(call REGULAR_FILTER,$L))

BUILD_GFILES    := $(REGULAR_GFILES) $(SPECIAL_GFILES)



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
ANTLR_BUILD     := $(wildcard $(addsuffix *.js,$(dir $(BUILD_GFILES))))
ANTLR_LOBJS     := $(subst $(ANTLR_LSOURCE)/,build/antlr4-languages/,$(ANTLR_BUILD))
ANTLR_FILTERED  := $(filter build/antlr4-languages/javascript/%,$(ANTLR_LOBJS))
#	@echo "BUILDING $(ANTLR_JSFILES)"

#$(foreach L,$(SPECIAL_LANGS),$(filter $1/%,$(REGULAR_BURIED)))
#java -jar $(ANTLR_LSOURCE)/antlr-*.jar -Dlanguage=JavaScript MyGrammar.g4

build:
	@if [ ! -d "./$@" ]; \
		then $(MKDIR) "./$@";fi;


build/%.mkdir: build
	@if [ ! -d "./$(subst .mkdir,,$@)" ]; \
		then mkdir "./$(subst .mkdir,,$@)";fi;


build/antlr4/%:
	npx babel --plugins @babel/plugin-transform-modules-umd \
		$(subst build/antlr4/,$(ANTLR_RUNTIME)/,$@) --out-file $@


build/antlr4-languages/%:
	-npx babel --plugins @babel/plugin-transform-modules-umd \
		$(subst build/antlr4-languages/,$(ANTLR_LSOURCE)/,$@) --out-file $@


antlr.js: build/antlr4.mkdir $(ANTLR_JSFILES) $(ANTLR_OBJS) \
					build/antlr4-languages.mkdir $(ANTLR_BUILD) $(ANTLR_FILTERED)
	@echo "MADE $(ANTLR_LOBJS)"

parser/%: 
	@echo "MAKE $(RUNTIME) PARSER $@"
	-java -jar $(ANTLR_LSOURCE)/antlr-*.jar \
		-Dlanguage=$(RUNTIME) $(subst parser/$(RUNTIME)/,,$@)

target/%:
	@echo "MAKE TARGET $@"
	$(MAKE) RUNTIME="$(subst target/,,$@)"  \
		$(addprefix $(subst target/,parser/,$@)/,$(BUILD_GFILES))

antlr: $(BUILD_GFILES) $(addprefix target/,$(ANTLR_RUNTIMES))
	@echo "MAKE ALL $(BUILD_GFILES)"


