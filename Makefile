


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
ANTLR_LANGS     := $(dir $(wildcard Resources/Parsers/*/))

ANTLR_LANGTRIM  := $(subst /,,$(subst Resources/Parsers/,,$(ANTLR_LANGS)))

# WTF HAPPENED!? WHAT AM I DOING WRONG WITH THIS BUILD SYSTEM?
ANTLR_EXCLUDE   := asl aspectj

ANTLR_LANGUAGES := $(filter-out $(ANTLR_EXCLUDE),$(ANTLR_LANGTRIM))

# split all this stuff up so paths don't get confused searching for the right grammar
ANTLR_TARGETS   := PHP CSharp JavaScript Go Python CSharpSharwell TypeScript Cpp Java Swift Dart

# only build this for now
ANTLR_RUNTIMES := JavaScript
#ANTLR_RUNTIMES  := $(ANTLR_TARGETS)

#ANTLR_GRAMMARS := **/*.g4)
RUNTIME_TARGETS := $(addsuffix /*.g4,$(filter $(ANTLR_RUNTIMES),$(ANTLR_TARGETS)))
RUNTIMES_BURIED := $(addprefix Resources/Parsers/*/**/,$(RUNTIME_TARGETS))
SPECIAL_GFILES  := $(wildcard $(RUNTIMES_BURIED))
TRIM_GFILES     := $(subst Resources/Parsers/,,$(SPECIAL_GFILES))

# filter out special language files we have to reduce work
REPLACE_LANGS    = $(patsubst $1/%,$1,$(filter $1/%,$(TRIM_GFILES)))
SPECIAL_LANGS   := $(foreach L,$(ANTLR_LANGUAGES),$(call REPLACE_LANGS,$L))
SPECIAL_UNIQUE  := $(filter $(SPECIAL_LANGS),$(ANTLR_LANGUAGES))

# UGH FINALLY, get the rest of the languages that don't have special targets
REGULAR_BURIED  := $(wildcard Resources/Parsers/**/*.g4)
REGULAR_LANGS   := $(addsuffix /%,$(filter-out $(SPECIAL_UNIQUE),$(ANTLR_LANGUAGES)))
REGULAR_FILTER   = $(filter Resources/Parsers/$1,$(REGULAR_BURIED))
REGULAR_GFILES  := $(foreach L,$(REGULAR_LANGS),$(call REGULAR_FILTER,$L))

BUILD_GFILES    := $(REGULAR_GFILES) $(SPECIAL_GFILES)

#$(foreach L,$(SPECIAL_LANGS),$(filter $1/%,$(REGULAR_BURIED)))
#java -jar Resources/Parsers/antlr-*.jar -Dlanguage=JavaScript MyGrammar.g4
parser/%:
	@echo "MAKE $(RUNTIME) PARSER $@"
	java -jar Resources/Parsers/antlr-*.jar \
		-Dlanguage=$(RUNTIME) $(subst parser/$(RUNTIME)/,,$@)

target/%:
	@echo "MAKE TARGET $@"
	$(MAKE) RUNTIME="$(subst target/,,$@)"  \
		$(addprefix $(subst target/,parser/,$@)/,$(BUILD_GFILES))

antlr: $(BUILD_GFILES) $(addprefix target/,$(ANTLR_RUNTIMES))
	@echo "MAKE ALL $(BUILD_GFILES)"


