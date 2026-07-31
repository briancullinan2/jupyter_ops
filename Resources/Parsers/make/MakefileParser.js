// Generated from ./make/MakefileParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MakefileParserListener from './MakefileParserListener.js';
const serializedATN = [4,1,69,352,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,1,0,5,0,66,8,0,10,0,12,0,69,
9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,85,8,1,1,
2,1,2,1,2,3,2,90,8,2,1,2,1,2,1,2,3,2,95,8,2,1,2,1,2,5,2,99,8,2,10,2,12,2,
102,9,2,1,3,1,3,1,3,1,4,4,4,108,8,4,11,4,12,4,109,1,5,1,5,1,5,3,5,115,8,
5,1,6,3,6,118,8,6,1,6,1,6,3,6,122,8,6,1,7,4,7,125,8,7,11,7,12,7,126,1,8,
4,8,130,8,8,11,8,12,8,131,1,9,1,9,1,9,3,9,137,8,9,1,10,1,10,1,10,1,11,4,
11,143,8,11,11,11,12,11,144,1,12,3,12,148,8,12,1,12,1,12,1,12,3,12,153,8,
12,1,12,1,12,1,13,1,13,1,13,3,13,160,8,13,1,13,1,13,5,13,164,8,13,10,13,
12,13,167,9,13,1,13,1,13,1,13,1,14,4,14,173,8,14,11,14,12,14,174,1,15,1,
15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,4,15,189,8,15,11,15,
12,15,190,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,
17,1,17,1,17,1,17,3,17,209,8,17,1,18,1,18,1,18,1,18,3,18,215,8,18,1,18,1,
18,1,18,1,18,1,18,1,18,3,18,223,8,18,1,18,1,18,3,18,227,8,18,1,19,1,19,1,
20,1,20,1,20,5,20,234,8,20,10,20,12,20,237,9,20,1,21,1,21,1,21,1,21,1,21,
1,21,1,21,1,21,1,21,1,21,1,21,4,21,250,8,21,11,21,12,21,251,1,22,1,22,1,
22,4,22,257,8,22,11,22,12,22,258,1,22,1,22,1,23,1,23,5,23,265,8,23,10,23,
12,23,268,9,23,1,23,1,23,5,23,272,8,23,10,23,12,23,275,9,23,3,23,277,8,23,
1,23,1,23,1,24,1,24,1,24,3,24,284,8,24,1,24,1,24,1,24,1,24,3,24,290,8,24,
1,24,1,24,3,24,294,8,24,1,24,1,24,1,24,1,24,4,24,300,8,24,11,24,12,24,301,
1,24,1,24,4,24,306,8,24,11,24,12,24,307,1,24,1,24,1,24,3,24,313,8,24,1,25,
1,25,1,25,1,26,1,26,1,26,1,27,1,27,3,27,323,8,27,1,27,1,27,1,28,1,28,1,28,
1,29,1,29,1,29,1,29,1,30,1,30,5,30,336,8,30,10,30,12,30,339,9,30,1,30,1,
30,1,31,1,31,1,31,3,31,346,8,31,3,31,348,8,31,1,31,1,31,1,31,0,0,32,0,2,
4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,
54,56,58,60,62,0,10,1,0,68,68,2,0,46,46,48,48,2,0,62,62,66,66,1,1,68,68,
1,1,38,38,1,0,1,36,1,0,40,41,1,0,42,43,1,0,46,47,2,0,23,23,66,66,396,0,67,
1,0,0,0,2,84,1,0,0,0,4,86,1,0,0,0,6,103,1,0,0,0,8,107,1,0,0,0,10,114,1,0,
0,0,12,117,1,0,0,0,14,124,1,0,0,0,16,129,1,0,0,0,18,136,1,0,0,0,20,138,1,
0,0,0,22,142,1,0,0,0,24,147,1,0,0,0,26,156,1,0,0,0,28,172,1,0,0,0,30,188,
1,0,0,0,32,192,1,0,0,0,34,208,1,0,0,0,36,226,1,0,0,0,38,228,1,0,0,0,40,230,
1,0,0,0,42,249,1,0,0,0,44,253,1,0,0,0,46,262,1,0,0,0,48,312,1,0,0,0,50,314,
1,0,0,0,52,317,1,0,0,0,54,320,1,0,0,0,56,326,1,0,0,0,58,329,1,0,0,0,60,333,
1,0,0,0,62,342,1,0,0,0,64,66,3,2,1,0,65,64,1,0,0,0,66,69,1,0,0,0,67,65,1,
0,0,0,67,68,1,0,0,0,68,70,1,0,0,0,69,67,1,0,0,0,70,71,5,0,0,1,71,1,1,0,0,
0,72,85,3,4,2,0,73,85,3,24,12,0,74,85,3,26,13,0,75,85,3,32,16,0,76,85,3,
44,22,0,77,85,3,46,23,0,78,85,3,54,27,0,79,85,3,56,28,0,80,85,3,58,29,0,
81,85,3,60,30,0,82,85,3,62,31,0,83,85,5,68,0,0,84,72,1,0,0,0,84,73,1,0,0,
0,84,74,1,0,0,0,84,75,1,0,0,0,84,76,1,0,0,0,84,77,1,0,0,0,84,78,1,0,0,0,
84,79,1,0,0,0,84,80,1,0,0,0,84,81,1,0,0,0,84,82,1,0,0,0,84,83,1,0,0,0,85,
3,1,0,0,0,86,89,3,8,4,0,87,90,5,52,0,0,88,90,3,6,3,0,89,87,1,0,0,0,89,88,
1,0,0,0,90,91,1,0,0,0,91,94,3,12,6,0,92,93,5,53,0,0,93,95,3,22,11,0,94,92,
1,0,0,0,94,95,1,0,0,0,95,96,1,0,0,0,96,100,5,68,0,0,97,99,3,20,10,0,98,97,
1,0,0,0,99,102,1,0,0,0,100,98,1,0,0,0,100,101,1,0,0,0,101,5,1,0,0,0,102,
100,1,0,0,0,103,104,5,52,0,0,104,105,5,52,0,0,105,7,1,0,0,0,106,108,3,10,
5,0,107,106,1,0,0,0,108,109,1,0,0,0,109,107,1,0,0,0,109,110,1,0,0,0,110,
9,1,0,0,0,111,115,5,66,0,0,112,115,3,34,17,0,113,115,5,62,0,0,114,111,1,
0,0,0,114,112,1,0,0,0,114,113,1,0,0,0,115,11,1,0,0,0,116,118,3,14,7,0,117,
116,1,0,0,0,117,118,1,0,0,0,118,121,1,0,0,0,119,120,5,54,0,0,120,122,3,16,
8,0,121,119,1,0,0,0,121,122,1,0,0,0,122,13,1,0,0,0,123,125,3,18,9,0,124,
123,1,0,0,0,125,126,1,0,0,0,126,124,1,0,0,0,126,127,1,0,0,0,127,15,1,0,0,
0,128,130,3,18,9,0,129,128,1,0,0,0,130,131,1,0,0,0,131,129,1,0,0,0,131,132,
1,0,0,0,132,17,1,0,0,0,133,137,5,66,0,0,134,137,3,34,17,0,135,137,5,62,0,
0,136,133,1,0,0,0,136,134,1,0,0,0,136,135,1,0,0,0,137,19,1,0,0,0,138,139,
5,63,0,0,139,140,5,68,0,0,140,21,1,0,0,0,141,143,8,0,0,0,142,141,1,0,0,0,
143,144,1,0,0,0,144,142,1,0,0,0,144,145,1,0,0,0,145,23,1,0,0,0,146,148,7,
1,0,0,147,146,1,0,0,0,147,148,1,0,0,0,148,149,1,0,0,0,149,150,7,2,0,0,150,
152,5,51,0,0,151,153,3,30,15,0,152,151,1,0,0,0,152,153,1,0,0,0,153,154,1,
0,0,0,154,155,7,3,0,0,155,25,1,0,0,0,156,157,5,37,0,0,157,159,7,2,0,0,158,
160,5,51,0,0,159,158,1,0,0,0,159,160,1,0,0,0,160,161,1,0,0,0,161,165,5,68,
0,0,162,164,3,28,14,0,163,162,1,0,0,0,164,167,1,0,0,0,165,163,1,0,0,0,165,
166,1,0,0,0,166,168,1,0,0,0,167,165,1,0,0,0,168,169,5,38,0,0,169,170,5,68,
0,0,170,27,1,0,0,0,171,173,8,4,0,0,172,171,1,0,0,0,173,174,1,0,0,0,174,172,
1,0,0,0,174,175,1,0,0,0,175,29,1,0,0,0,176,189,5,66,0,0,177,189,5,65,0,0,
178,189,3,34,17,0,179,189,3,36,18,0,180,189,5,69,0,0,181,189,5,51,0,0,182,
189,5,52,0,0,183,189,5,54,0,0,184,189,5,62,0,0,185,189,5,61,0,0,186,189,
5,60,0,0,187,189,5,67,0,0,188,176,1,0,0,0,188,177,1,0,0,0,188,178,1,0,0,
0,188,179,1,0,0,0,188,180,1,0,0,0,188,181,1,0,0,0,188,182,1,0,0,0,188,183,
1,0,0,0,188,184,1,0,0,0,188,185,1,0,0,0,188,186,1,0,0,0,188,187,1,0,0,0,
189,190,1,0,0,0,190,188,1,0,0,0,190,191,1,0,0,0,191,31,1,0,0,0,192,193,3,
36,18,0,193,194,5,68,0,0,194,33,1,0,0,0,195,196,5,55,0,0,196,197,5,56,0,
0,197,198,7,2,0,0,198,209,5,57,0,0,199,200,5,55,0,0,200,201,5,58,0,0,201,
202,7,2,0,0,202,209,5,59,0,0,203,204,5,55,0,0,204,209,7,2,0,0,205,206,5,
55,0,0,206,209,5,55,0,0,207,209,3,36,18,0,208,195,1,0,0,0,208,199,1,0,0,
0,208,203,1,0,0,0,208,205,1,0,0,0,208,207,1,0,0,0,209,35,1,0,0,0,210,211,
5,55,0,0,211,212,5,56,0,0,212,214,3,38,19,0,213,215,3,40,20,0,214,213,1,
0,0,0,214,215,1,0,0,0,215,216,1,0,0,0,216,217,5,57,0,0,217,227,1,0,0,0,218,
219,5,55,0,0,219,220,5,58,0,0,220,222,3,38,19,0,221,223,3,40,20,0,222,221,
1,0,0,0,222,223,1,0,0,0,223,224,1,0,0,0,224,225,5,59,0,0,225,227,1,0,0,0,
226,210,1,0,0,0,226,218,1,0,0,0,227,37,1,0,0,0,228,229,7,5,0,0,229,39,1,
0,0,0,230,235,3,42,21,0,231,232,5,60,0,0,232,234,3,42,21,0,233,231,1,0,0,
0,234,237,1,0,0,0,235,233,1,0,0,0,235,236,1,0,0,0,236,41,1,0,0,0,237,235,
1,0,0,0,238,250,5,66,0,0,239,250,5,65,0,0,240,250,3,34,17,0,241,250,3,36,
18,0,242,250,5,69,0,0,243,250,5,51,0,0,244,250,5,52,0,0,245,250,5,54,0,0,
246,250,5,62,0,0,247,250,5,61,0,0,248,250,5,67,0,0,249,238,1,0,0,0,249,239,
1,0,0,0,249,240,1,0,0,0,249,241,1,0,0,0,249,242,1,0,0,0,249,243,1,0,0,0,
249,244,1,0,0,0,249,245,1,0,0,0,249,246,1,0,0,0,249,247,1,0,0,0,249,248,
1,0,0,0,250,251,1,0,0,0,251,249,1,0,0,0,251,252,1,0,0,0,252,43,1,0,0,0,253,
256,5,39,0,0,254,257,5,66,0,0,255,257,3,34,17,0,256,254,1,0,0,0,256,255,
1,0,0,0,257,258,1,0,0,0,258,256,1,0,0,0,258,259,1,0,0,0,259,260,1,0,0,0,
260,261,5,68,0,0,261,45,1,0,0,0,262,266,3,48,24,0,263,265,3,2,1,0,264,263,
1,0,0,0,265,268,1,0,0,0,266,264,1,0,0,0,266,267,1,0,0,0,267,276,1,0,0,0,
268,266,1,0,0,0,269,273,3,50,25,0,270,272,3,2,1,0,271,270,1,0,0,0,272,275,
1,0,0,0,273,271,1,0,0,0,273,274,1,0,0,0,274,277,1,0,0,0,275,273,1,0,0,0,
276,269,1,0,0,0,276,277,1,0,0,0,277,278,1,0,0,0,278,279,3,52,26,0,279,47,
1,0,0,0,280,283,7,6,0,0,281,284,5,66,0,0,282,284,3,34,17,0,283,281,1,0,0,
0,283,282,1,0,0,0,284,285,1,0,0,0,285,313,5,68,0,0,286,287,7,7,0,0,287,289,
5,56,0,0,288,290,3,30,15,0,289,288,1,0,0,0,289,290,1,0,0,0,290,291,1,0,0,
0,291,293,5,60,0,0,292,294,3,30,15,0,293,292,1,0,0,0,293,294,1,0,0,0,294,
295,1,0,0,0,295,296,5,57,0,0,296,313,5,68,0,0,297,299,7,7,0,0,298,300,5,
69,0,0,299,298,1,0,0,0,300,301,1,0,0,0,301,299,1,0,0,0,301,302,1,0,0,0,302,
303,1,0,0,0,303,305,3,30,15,0,304,306,5,69,0,0,305,304,1,0,0,0,306,307,1,
0,0,0,307,305,1,0,0,0,307,308,1,0,0,0,308,309,1,0,0,0,309,310,3,30,15,0,
310,311,5,68,0,0,311,313,1,0,0,0,312,280,1,0,0,0,312,286,1,0,0,0,312,297,
1,0,0,0,313,49,1,0,0,0,314,315,5,44,0,0,315,316,5,68,0,0,316,51,1,0,0,0,
317,318,5,45,0,0,318,319,5,68,0,0,319,53,1,0,0,0,320,322,7,8,0,0,321,323,
5,66,0,0,322,321,1,0,0,0,322,323,1,0,0,0,323,324,1,0,0,0,324,325,5,68,0,
0,325,55,1,0,0,0,326,327,5,48,0,0,327,328,3,24,12,0,328,57,1,0,0,0,329,330,
5,49,0,0,330,331,5,66,0,0,331,332,5,68,0,0,332,59,1,0,0,0,333,337,7,9,0,
0,334,336,8,0,0,0,335,334,1,0,0,0,336,339,1,0,0,0,337,335,1,0,0,0,337,338,
1,0,0,0,338,340,1,0,0,0,339,337,1,0,0,0,340,341,5,68,0,0,341,61,1,0,0,0,
342,347,5,50,0,0,343,345,5,66,0,0,344,346,5,66,0,0,345,344,1,0,0,0,345,346,
1,0,0,0,346,348,1,0,0,0,347,343,1,0,0,0,347,348,1,0,0,0,348,349,1,0,0,0,
349,350,5,68,0,0,350,63,1,0,0,0,42,67,84,89,94,100,109,114,117,121,126,131,
136,144,147,152,159,165,174,188,190,208,214,222,226,235,249,251,256,258,
266,273,276,283,289,293,301,307,312,322,337,345,347];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MakefileParser extends antlr4.Parser {

    static grammarFileName = "MakefileParser.g4";
    static literalNames = [ null, "'subst'", "'patsubst'", "'strip'", "'findstring'", 
                            "'filter'", "'filter-out'", "'sort'", "'word'", 
                            "'words'", "'wordlist'", "'firstword'", "'lastword'", 
                            "'dir'", "'notdir'", "'suffix'", "'basename'", 
                            "'addsuffix'", "'addprefix'", "'join'", "'wildcard'", 
                            "'realpath'", "'abspath'", "'error'", "'warning'", 
                            "'info'", "'shell'", "'foreach'", "'if'", "'or'", 
                            "'and'", "'call'", "'eval'", "'file'", "'value'", 
                            "'origin'", "'flavor'", "'define'", "'endef'", 
                            null, "'ifdef'", "'ifndef'", "'ifeq'", "'ifneq'", 
                            "'else'", "'endif'", "'export'", "'unexport'", 
                            "'override'", "'undefine'", "'vpath'", null, 
                            "':'", "';'", "'|'", "'$'", "'('", "')'", "'{'", 
                            "'}'", "','", "'!'" ];
    static symbolicNames = [ null, "FUNC_SUBST", "FUNC_PATSUBST", "FUNC_STRIP", 
                             "FUNC_FINDSTRING", "FUNC_FILTER", "FUNC_FILTER_OUT", 
                             "FUNC_SORT", "FUNC_WORD", "FUNC_WORDS", "FUNC_WORDLIST", 
                             "FUNC_FIRSTWORD", "FUNC_LASTWORD", "FUNC_DIR", 
                             "FUNC_NOTDIR", "FUNC_SUFFIX", "FUNC_BASELINE", 
                             "FUNC_ADDSUFFIX", "FUNC_ADDPREFIX", "FUNC_JOIN", 
                             "FUNC_WILDCARD", "FUNC_REALPATH", "FUNC_ABSPATH", 
                             "FUNC_ERROR", "FUNC_WARNING", "FUNC_INFO", 
                             "FUNC_SHELL", "FUNC_FOREACH", "FUNC_IF", "FUNC_OR", 
                             "FUNC_AND", "FUNC_CALL", "FUNC_EVAL", "FUNC_FILE", 
                             "FUNC_VALUE", "FUNC_ORIGIN", "FUNC_FLAVOR", 
                             "DEFINE", "ENDEF", "INCLUDE", "IFDEF", "IFNDEF", 
                             "IFEQ", "IFNEQ", "ELSE", "ENDIF", "EXPORT", 
                             "UNEXPORT", "OVERRIDE", "UNDEFINE", "VPATH", 
                             "ASSIGN", "COLON", "SEMICOLON", "PIPE", "DOLLAR", 
                             "LPAREN", "RPAREN", "LBRACE", "RBRACE", "COMMA", 
                             "EXCLAMATION", "SPECIAL_VAR", "COMMAND", "COMMENT", 
                             "STRING", "NAME", "CONTINUATION", "NEWLINE", 
                             "WS" ];
    static ruleNames = [ "makefile", "item", "rule_", "double_colon", "targets", 
                         "target", "prerequisites", "normal_prerequisites", 
                         "order_only_prerequisites", "prerequisite", "recipe", 
                         "recipe_command", "variable_assignment", "define_directive", 
                         "define_body", "value", "standalone_function", 
                         "variable_ref", "function_call", "builtin_function", 
                         "function_args", "arg", "include_directive", "conditional", 
                         "conditional_header", "conditional_else", "conditional_endif", 
                         "export_directive", "override_directive", "undefine_directive", 
                         "error_directive", "vpath_directive" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MakefileParser.ruleNames;
        this.literalNames = MakefileParser.literalNames;
        this.symbolicNames = MakefileParser.symbolicNames;
    }



	makefile() {
	    let localctx = new MakefileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MakefileParser.RULE_makefile);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===23 || ((((_la - 37)) & ~0x1f) === 0 && ((1 << (_la - 37)) & 2718187133) !== 0)) {
	            this.state = 64;
	            this.item();
	            this.state = 69;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 70;
	        this.match(MakefileParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	item() {
	    let localctx = new ItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MakefileParser.RULE_item);
	    try {
	        this.state = 84;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 72;
	            this.rule_();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 73;
	            this.variable_assignment();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 74;
	            this.define_directive();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 75;
	            this.standalone_function();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 76;
	            this.include_directive();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 77;
	            this.conditional();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 78;
	            this.export_directive();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 79;
	            this.override_directive();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 80;
	            this.undefine_directive();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 81;
	            this.error_directive();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 82;
	            this.vpath_directive();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 83;
	            this.match(MakefileParser.NEWLINE);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rule_() {
	    let localctx = new Rule_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MakefileParser.RULE_rule_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.targets();
	        this.state = 89;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 87;
	            this.match(MakefileParser.COLON);
	            break;

	        case 2:
	            this.state = 88;
	            this.double_colon();
	            break;

	        }
	        this.state = 91;
	        this.prerequisites();
	        this.state = 94;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===53) {
	            this.state = 92;
	            this.match(MakefileParser.SEMICOLON);
	            this.state = 93;
	            this.recipe_command();
	        }

	        this.state = 96;
	        this.match(MakefileParser.NEWLINE);
	        this.state = 100;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===63) {
	            this.state = 97;
	            this.recipe();
	            this.state = 102;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	double_colon() {
	    let localctx = new Double_colonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MakefileParser.RULE_double_colon);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        this.match(MakefileParser.COLON);
	        this.state = 104;
	        this.match(MakefileParser.COLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	targets() {
	    let localctx = new TargetsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MakefileParser.RULE_targets);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 106;
	            this.target();
	            this.state = 109; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 55)) & ~0x1f) === 0 && ((1 << (_la - 55)) & 2177) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	target() {
	    let localctx = new TargetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MakefileParser.RULE_target);
	    try {
	        this.state = 114;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 66:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 111;
	            this.match(MakefileParser.NAME);
	            break;
	        case 55:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 112;
	            this.variable_ref();
	            break;
	        case 62:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 113;
	            this.match(MakefileParser.SPECIAL_VAR);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	prerequisites() {
	    let localctx = new PrerequisitesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MakefileParser.RULE_prerequisites);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 55)) & ~0x1f) === 0 && ((1 << (_la - 55)) & 2177) !== 0)) {
	            this.state = 116;
	            this.normal_prerequisites();
	        }

	        this.state = 121;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===54) {
	            this.state = 119;
	            this.match(MakefileParser.PIPE);
	            this.state = 120;
	            this.order_only_prerequisites();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	normal_prerequisites() {
	    let localctx = new Normal_prerequisitesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MakefileParser.RULE_normal_prerequisites);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 123;
	            this.prerequisite();
	            this.state = 126; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 55)) & ~0x1f) === 0 && ((1 << (_la - 55)) & 2177) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	order_only_prerequisites() {
	    let localctx = new Order_only_prerequisitesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MakefileParser.RULE_order_only_prerequisites);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 128;
	            this.prerequisite();
	            this.state = 131; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 55)) & ~0x1f) === 0 && ((1 << (_la - 55)) & 2177) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	prerequisite() {
	    let localctx = new PrerequisiteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, MakefileParser.RULE_prerequisite);
	    try {
	        this.state = 136;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 66:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 133;
	            this.match(MakefileParser.NAME);
	            break;
	        case 55:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 134;
	            this.variable_ref();
	            break;
	        case 62:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 135;
	            this.match(MakefileParser.SPECIAL_VAR);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	recipe() {
	    let localctx = new RecipeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, MakefileParser.RULE_recipe);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        this.match(MakefileParser.COMMAND);
	        this.state = 139;
	        this.match(MakefileParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	recipe_command() {
	    let localctx = new Recipe_commandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, MakefileParser.RULE_recipe_command);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 142; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 141;
	            _la = this._input.LA(1);
	            if(_la<=0 || _la===68) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 144; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 47) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable_assignment() {
	    let localctx = new Variable_assignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, MakefileParser.RULE_variable_assignment);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===46 || _la===48) {
	            this.state = 146;
	            _la = this._input.LA(1);
	            if(!(_la===46 || _la===48)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 149;
	        _la = this._input.LA(1);
	        if(!(_la===62 || _la===66)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 150;
	        this.match(MakefileParser.ASSIGN);
	        this.state = 152;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 51)) & ~0x1f) === 0 && ((1 << (_la - 51)) & 380443) !== 0)) {
	            this.state = 151;
	            this.value();
	        }

	        this.state = 154;
	        _la = this._input.LA(1);
	        if(!(_la===-1 || _la===68)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	define_directive() {
	    let localctx = new Define_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, MakefileParser.RULE_define_directive);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
	        this.match(MakefileParser.DEFINE);
	        this.state = 157;
	        _la = this._input.LA(1);
	        if(!(_la===62 || _la===66)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 159;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===51) {
	            this.state = 158;
	            this.match(MakefileParser.ASSIGN);
	        }

	        this.state = 161;
	        this.match(MakefileParser.NEWLINE);
	        this.state = 165;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4294967231) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 63) !== 0)) {
	            this.state = 162;
	            this.define_body();
	            this.state = 167;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 168;
	        this.match(MakefileParser.ENDEF);
	        this.state = 169;
	        this.match(MakefileParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	define_body() {
	    let localctx = new Define_bodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, MakefileParser.RULE_define_body);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 172; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 171;
	        		_la = this._input.LA(1);
	        		if(_la<=0 || _la===-1 || _la===38) {
	        		this._errHandler.recoverInline(this);
	        		}
	        		else {
	        			this._errHandler.reportMatch(this);
	        		    this.consume();
	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 174; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,17, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, MakefileParser.RULE_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 188; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 188;
	        		this._errHandler.sync(this);
	        		var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        		switch(la_) {
	        		case 1:
	        		    this.state = 176;
	        		    this.match(MakefileParser.NAME);
	        		    break;

	        		case 2:
	        		    this.state = 177;
	        		    this.match(MakefileParser.STRING);
	        		    break;

	        		case 3:
	        		    this.state = 178;
	        		    this.variable_ref();
	        		    break;

	        		case 4:
	        		    this.state = 179;
	        		    this.function_call();
	        		    break;

	        		case 5:
	        		    this.state = 180;
	        		    this.match(MakefileParser.WS);
	        		    break;

	        		case 6:
	        		    this.state = 181;
	        		    this.match(MakefileParser.ASSIGN);
	        		    break;

	        		case 7:
	        		    this.state = 182;
	        		    this.match(MakefileParser.COLON);
	        		    break;

	        		case 8:
	        		    this.state = 183;
	        		    this.match(MakefileParser.PIPE);
	        		    break;

	        		case 9:
	        		    this.state = 184;
	        		    this.match(MakefileParser.SPECIAL_VAR);
	        		    break;

	        		case 10:
	        		    this.state = 185;
	        		    this.match(MakefileParser.EXCLAMATION);
	        		    break;

	        		case 11:
	        		    this.state = 186;
	        		    this.match(MakefileParser.COMMA);
	        		    break;

	        		case 12:
	        		    this.state = 187;
	        		    this.match(MakefileParser.CONTINUATION);
	        		    break;

	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 190; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,19, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	standalone_function() {
	    let localctx = new Standalone_functionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, MakefileParser.RULE_standalone_function);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 192;
	        this.function_call();
	        this.state = 193;
	        this.match(MakefileParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable_ref() {
	    let localctx = new Variable_refContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, MakefileParser.RULE_variable_ref);
	    var _la = 0;
	    try {
	        this.state = 208;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 195;
	            this.match(MakefileParser.DOLLAR);
	            this.state = 196;
	            this.match(MakefileParser.LPAREN);
	            this.state = 197;
	            _la = this._input.LA(1);
	            if(!(_la===62 || _la===66)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 198;
	            this.match(MakefileParser.RPAREN);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 199;
	            this.match(MakefileParser.DOLLAR);
	            this.state = 200;
	            this.match(MakefileParser.LBRACE);
	            this.state = 201;
	            _la = this._input.LA(1);
	            if(!(_la===62 || _la===66)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 202;
	            this.match(MakefileParser.RBRACE);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 203;
	            this.match(MakefileParser.DOLLAR);
	            this.state = 204;
	            _la = this._input.LA(1);
	            if(!(_la===62 || _la===66)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 205;
	            this.match(MakefileParser.DOLLAR);
	            this.state = 206;
	            this.match(MakefileParser.DOLLAR);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 207;
	            this.function_call();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	function_call() {
	    let localctx = new Function_callContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, MakefileParser.RULE_function_call);
	    var _la = 0;
	    try {
	        this.state = 226;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 210;
	            this.match(MakefileParser.DOLLAR);
	            this.state = 211;
	            this.match(MakefileParser.LPAREN);
	            this.state = 212;
	            this.builtin_function();
	            this.state = 214;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 51)) & ~0x1f) === 0 && ((1 << (_la - 51)) & 379931) !== 0)) {
	                this.state = 213;
	                this.function_args();
	            }

	            this.state = 216;
	            this.match(MakefileParser.RPAREN);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 218;
	            this.match(MakefileParser.DOLLAR);
	            this.state = 219;
	            this.match(MakefileParser.LBRACE);
	            this.state = 220;
	            this.builtin_function();
	            this.state = 222;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 51)) & ~0x1f) === 0 && ((1 << (_la - 51)) & 379931) !== 0)) {
	                this.state = 221;
	                this.function_args();
	            }

	            this.state = 224;
	            this.match(MakefileParser.RBRACE);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	builtin_function() {
	    let localctx = new Builtin_functionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, MakefileParser.RULE_builtin_function);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 228;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 31) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	function_args() {
	    let localctx = new Function_argsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, MakefileParser.RULE_function_args);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 230;
	        this.arg();
	        this.state = 235;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===60) {
	            this.state = 231;
	            this.match(MakefileParser.COMMA);
	            this.state = 232;
	            this.arg();
	            this.state = 237;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arg() {
	    let localctx = new ArgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, MakefileParser.RULE_arg);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 249; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 249;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 238;
	                this.match(MakefileParser.NAME);
	                break;

	            case 2:
	                this.state = 239;
	                this.match(MakefileParser.STRING);
	                break;

	            case 3:
	                this.state = 240;
	                this.variable_ref();
	                break;

	            case 4:
	                this.state = 241;
	                this.function_call();
	                break;

	            case 5:
	                this.state = 242;
	                this.match(MakefileParser.WS);
	                break;

	            case 6:
	                this.state = 243;
	                this.match(MakefileParser.ASSIGN);
	                break;

	            case 7:
	                this.state = 244;
	                this.match(MakefileParser.COLON);
	                break;

	            case 8:
	                this.state = 245;
	                this.match(MakefileParser.PIPE);
	                break;

	            case 9:
	                this.state = 246;
	                this.match(MakefileParser.SPECIAL_VAR);
	                break;

	            case 10:
	                this.state = 247;
	                this.match(MakefileParser.EXCLAMATION);
	                break;

	            case 11:
	                this.state = 248;
	                this.match(MakefileParser.CONTINUATION);
	                break;

	            }
	            this.state = 251; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 51)) & ~0x1f) === 0 && ((1 << (_la - 51)) & 379931) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	include_directive() {
	    let localctx = new Include_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, MakefileParser.RULE_include_directive);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 253;
	        this.match(MakefileParser.INCLUDE);
	        this.state = 256; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 256;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 66:
	                this.state = 254;
	                this.match(MakefileParser.NAME);
	                break;
	            case 55:
	                this.state = 255;
	                this.variable_ref();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 258; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===55 || _la===66);
	        this.state = 260;
	        this.match(MakefileParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conditional() {
	    let localctx = new ConditionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, MakefileParser.RULE_conditional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 262;
	        this.conditional_header();
	        this.state = 266;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===23 || ((((_la - 37)) & ~0x1f) === 0 && ((1 << (_la - 37)) & 2718187133) !== 0)) {
	            this.state = 263;
	            this.item();
	            this.state = 268;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 276;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 269;
	            this.conditional_else();
	            this.state = 273;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===23 || ((((_la - 37)) & ~0x1f) === 0 && ((1 << (_la - 37)) & 2718187133) !== 0)) {
	                this.state = 270;
	                this.item();
	                this.state = 275;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 278;
	        this.conditional_endif();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conditional_header() {
	    let localctx = new Conditional_headerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, MakefileParser.RULE_conditional_header);
	    var _la = 0;
	    try {
	        this.state = 312;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 280;
	            _la = this._input.LA(1);
	            if(!(_la===40 || _la===41)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 283;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 66:
	                this.state = 281;
	                this.match(MakefileParser.NAME);
	                break;
	            case 55:
	                this.state = 282;
	                this.variable_ref();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 285;
	            this.match(MakefileParser.NEWLINE);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 286;
	            _la = this._input.LA(1);
	            if(!(_la===42 || _la===43)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 287;
	            this.match(MakefileParser.LPAREN);
	            this.state = 289;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	            if(la_===1) {
	                this.state = 288;
	                this.value();

	            }
	            this.state = 291;
	            this.match(MakefileParser.COMMA);
	            this.state = 293;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 51)) & ~0x1f) === 0 && ((1 << (_la - 51)) & 380443) !== 0)) {
	                this.state = 292;
	                this.value();
	            }

	            this.state = 295;
	            this.match(MakefileParser.RPAREN);
	            this.state = 296;
	            this.match(MakefileParser.NEWLINE);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 297;
	            _la = this._input.LA(1);
	            if(!(_la===42 || _la===43)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 299; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 298;
	            		this.match(MakefileParser.WS);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 301; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,35, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 303;
	            this.value();
	            this.state = 305; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 304;
	            		this.match(MakefileParser.WS);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 307; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,36, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 309;
	            this.value();
	            this.state = 310;
	            this.match(MakefileParser.NEWLINE);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conditional_else() {
	    let localctx = new Conditional_elseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, MakefileParser.RULE_conditional_else);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 314;
	        this.match(MakefileParser.ELSE);
	        this.state = 315;
	        this.match(MakefileParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conditional_endif() {
	    let localctx = new Conditional_endifContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, MakefileParser.RULE_conditional_endif);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 317;
	        this.match(MakefileParser.ENDIF);
	        this.state = 318;
	        this.match(MakefileParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	export_directive() {
	    let localctx = new Export_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, MakefileParser.RULE_export_directive);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 320;
	        _la = this._input.LA(1);
	        if(!(_la===46 || _la===47)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 322;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===66) {
	            this.state = 321;
	            this.match(MakefileParser.NAME);
	        }

	        this.state = 324;
	        this.match(MakefileParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	override_directive() {
	    let localctx = new Override_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, MakefileParser.RULE_override_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 326;
	        this.match(MakefileParser.OVERRIDE);
	        this.state = 327;
	        this.variable_assignment();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	undefine_directive() {
	    let localctx = new Undefine_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, MakefileParser.RULE_undefine_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 329;
	        this.match(MakefileParser.UNDEFINE);
	        this.state = 330;
	        this.match(MakefileParser.NAME);
	        this.state = 331;
	        this.match(MakefileParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	error_directive() {
	    let localctx = new Error_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, MakefileParser.RULE_error_directive);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 333;
	        _la = this._input.LA(1);
	        if(!(_la===23 || _la===66)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 337;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 47) !== 0)) {
	            this.state = 334;
	            _la = this._input.LA(1);
	            if(_la<=0 || _la===68) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 339;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 340;
	        this.match(MakefileParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	vpath_directive() {
	    let localctx = new Vpath_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, MakefileParser.RULE_vpath_directive);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 342;
	        this.match(MakefileParser.VPATH);
	        this.state = 347;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===66) {
	            this.state = 343;
	            this.match(MakefileParser.NAME);
	            this.state = 345;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===66) {
	                this.state = 344;
	                this.match(MakefileParser.NAME);
	            }

	        }

	        this.state = 349;
	        this.match(MakefileParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MakefileParser.EOF = antlr4.Token.EOF;
MakefileParser.FUNC_SUBST = 1;
MakefileParser.FUNC_PATSUBST = 2;
MakefileParser.FUNC_STRIP = 3;
MakefileParser.FUNC_FINDSTRING = 4;
MakefileParser.FUNC_FILTER = 5;
MakefileParser.FUNC_FILTER_OUT = 6;
MakefileParser.FUNC_SORT = 7;
MakefileParser.FUNC_WORD = 8;
MakefileParser.FUNC_WORDS = 9;
MakefileParser.FUNC_WORDLIST = 10;
MakefileParser.FUNC_FIRSTWORD = 11;
MakefileParser.FUNC_LASTWORD = 12;
MakefileParser.FUNC_DIR = 13;
MakefileParser.FUNC_NOTDIR = 14;
MakefileParser.FUNC_SUFFIX = 15;
MakefileParser.FUNC_BASELINE = 16;
MakefileParser.FUNC_ADDSUFFIX = 17;
MakefileParser.FUNC_ADDPREFIX = 18;
MakefileParser.FUNC_JOIN = 19;
MakefileParser.FUNC_WILDCARD = 20;
MakefileParser.FUNC_REALPATH = 21;
MakefileParser.FUNC_ABSPATH = 22;
MakefileParser.FUNC_ERROR = 23;
MakefileParser.FUNC_WARNING = 24;
MakefileParser.FUNC_INFO = 25;
MakefileParser.FUNC_SHELL = 26;
MakefileParser.FUNC_FOREACH = 27;
MakefileParser.FUNC_IF = 28;
MakefileParser.FUNC_OR = 29;
MakefileParser.FUNC_AND = 30;
MakefileParser.FUNC_CALL = 31;
MakefileParser.FUNC_EVAL = 32;
MakefileParser.FUNC_FILE = 33;
MakefileParser.FUNC_VALUE = 34;
MakefileParser.FUNC_ORIGIN = 35;
MakefileParser.FUNC_FLAVOR = 36;
MakefileParser.DEFINE = 37;
MakefileParser.ENDEF = 38;
MakefileParser.INCLUDE = 39;
MakefileParser.IFDEF = 40;
MakefileParser.IFNDEF = 41;
MakefileParser.IFEQ = 42;
MakefileParser.IFNEQ = 43;
MakefileParser.ELSE = 44;
MakefileParser.ENDIF = 45;
MakefileParser.EXPORT = 46;
MakefileParser.UNEXPORT = 47;
MakefileParser.OVERRIDE = 48;
MakefileParser.UNDEFINE = 49;
MakefileParser.VPATH = 50;
MakefileParser.ASSIGN = 51;
MakefileParser.COLON = 52;
MakefileParser.SEMICOLON = 53;
MakefileParser.PIPE = 54;
MakefileParser.DOLLAR = 55;
MakefileParser.LPAREN = 56;
MakefileParser.RPAREN = 57;
MakefileParser.LBRACE = 58;
MakefileParser.RBRACE = 59;
MakefileParser.COMMA = 60;
MakefileParser.EXCLAMATION = 61;
MakefileParser.SPECIAL_VAR = 62;
MakefileParser.COMMAND = 63;
MakefileParser.COMMENT = 64;
MakefileParser.STRING = 65;
MakefileParser.NAME = 66;
MakefileParser.CONTINUATION = 67;
MakefileParser.NEWLINE = 68;
MakefileParser.WS = 69;

MakefileParser.RULE_makefile = 0;
MakefileParser.RULE_item = 1;
MakefileParser.RULE_rule_ = 2;
MakefileParser.RULE_double_colon = 3;
MakefileParser.RULE_targets = 4;
MakefileParser.RULE_target = 5;
MakefileParser.RULE_prerequisites = 6;
MakefileParser.RULE_normal_prerequisites = 7;
MakefileParser.RULE_order_only_prerequisites = 8;
MakefileParser.RULE_prerequisite = 9;
MakefileParser.RULE_recipe = 10;
MakefileParser.RULE_recipe_command = 11;
MakefileParser.RULE_variable_assignment = 12;
MakefileParser.RULE_define_directive = 13;
MakefileParser.RULE_define_body = 14;
MakefileParser.RULE_value = 15;
MakefileParser.RULE_standalone_function = 16;
MakefileParser.RULE_variable_ref = 17;
MakefileParser.RULE_function_call = 18;
MakefileParser.RULE_builtin_function = 19;
MakefileParser.RULE_function_args = 20;
MakefileParser.RULE_arg = 21;
MakefileParser.RULE_include_directive = 22;
MakefileParser.RULE_conditional = 23;
MakefileParser.RULE_conditional_header = 24;
MakefileParser.RULE_conditional_else = 25;
MakefileParser.RULE_conditional_endif = 26;
MakefileParser.RULE_export_directive = 27;
MakefileParser.RULE_override_directive = 28;
MakefileParser.RULE_undefine_directive = 29;
MakefileParser.RULE_error_directive = 30;
MakefileParser.RULE_vpath_directive = 31;

class MakefileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MakefileParser.RULE_makefile;
    }

	EOF() {
	    return this.getToken(MakefileParser.EOF, 0);
	};

	item = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ItemContext);
	    } else {
	        return this.getTypedRuleContext(ItemContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.enterMakefile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.exitMakefile(this);
		}
	}


}



class ItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MakefileParser.RULE_item;
    }

	rule_() {
	    return this.getTypedRuleContext(Rule_Context,0);
	};

	variable_assignment() {
	    return this.getTypedRuleContext(Variable_assignmentContext,0);
	};

	define_directive() {
	    return this.getTypedRuleContext(Define_directiveContext,0);
	};

	standalone_function() {
	    return this.getTypedRuleContext(Standalone_functionContext,0);
	};

	include_directive() {
	    return this.getTypedRuleContext(Include_directiveContext,0);
	};

	conditional() {
	    return this.getTypedRuleContext(ConditionalContext,0);
	};

	export_directive() {
	    return this.getTypedRuleContext(Export_directiveContext,0);
	};

	override_directive() {
	    return this.getTypedRuleContext(Override_directiveContext,0);
	};

	undefine_directive() {
	    return this.getTypedRuleContext(Undefine_directiveContext,0);
	};

	error_directive() {
	    return this.getTypedRuleContext(Error_directiveContext,0);
	};

	vpath_directive() {
	    return this.getTypedRuleContext(Vpath_directiveContext,0);
	};

	NEWLINE() {
	    return this.getToken(MakefileParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.enterItem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.exitItem(this);
		}
	}


}



class Rule_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MakefileParser.RULE_rule_;
    }

	targets() {
	    return this.getTypedRuleContext(TargetsContext,0);
	};

	prerequisites() {
	    return this.getTypedRuleContext(PrerequisitesContext,0);
	};

	NEWLINE() {
	    return this.getToken(MakefileParser.NEWLINE, 0);
	};

	COLON() {
	    return this.getToken(MakefileParser.COLON, 0);
	};

	double_colon() {
	    return this.getTypedRuleContext(Double_colonContext,0);
	};

	SEMICOLON() {
	    return this.getToken(MakefileParser.SEMICOLON, 0);
	};

	recipe_command() {
	    return this.getTypedRuleContext(Recipe_commandContext,0);
	};

	recipe = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RecipeContext);
	    } else {
	        return this.getTypedRuleContext(RecipeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.enterRule_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.exitRule_(this);
		}
	}


}



class Double_colonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MakefileParser.RULE_double_colon;
    }

	COLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MakefileParser.COLON);
	    } else {
	        return this.getToken(MakefileParser.COLON, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.enterDouble_colon(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.exitDouble_colon(this);
		}
	}


}



class TargetsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MakefileParser.RULE_targets;
    }

	target = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TargetContext);
	    } else {
	        return this.getTypedRuleContext(TargetContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.enterTargets(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.exitTargets(this);
		}
	}


}



class TargetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MakefileParser.RULE_target;
    }

	NAME() {
	    return this.getToken(MakefileParser.NAME, 0);
	};

	variable_ref() {
	    return this.getTypedRuleContext(Variable_refContext,0);
	};

	SPECIAL_VAR() {
	    return this.getToken(MakefileParser.SPECIAL_VAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.enterTarget(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.exitTarget(this);
		}
	}


}



class PrerequisitesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MakefileParser.RULE_prerequisites;
    }

	normal_prerequisites() {
	    return this.getTypedRuleContext(Normal_prerequisitesContext,0);
	};

	PIPE() {
	    return this.getToken(MakefileParser.PIPE, 0);
	};

	order_only_prerequisites() {
	    return this.getTypedRuleContext(Order_only_prerequisitesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.enterPrerequisites(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.exitPrerequisites(this);
		}
	}


}



class Normal_prerequisitesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MakefileParser.RULE_normal_prerequisites;
    }

	prerequisite = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PrerequisiteContext);
	    } else {
	        return this.getTypedRuleContext(PrerequisiteContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.enterNormal_prerequisites(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.exitNormal_prerequisites(this);
		}
	}


}



class Order_only_prerequisitesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MakefileParser.RULE_order_only_prerequisites;
    }

	prerequisite = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PrerequisiteContext);
	    } else {
	        return this.getTypedRuleContext(PrerequisiteContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.enterOrder_only_prerequisites(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.exitOrder_only_prerequisites(this);
		}
	}


}



class PrerequisiteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MakefileParser.RULE_prerequisite;
    }

	NAME() {
	    return this.getToken(MakefileParser.NAME, 0);
	};

	variable_ref() {
	    return this.getTypedRuleContext(Variable_refContext,0);
	};

	SPECIAL_VAR() {
	    return this.getToken(MakefileParser.SPECIAL_VAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.enterPrerequisite(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.exitPrerequisite(this);
		}
	}


}



class RecipeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MakefileParser.RULE_recipe;
    }

	COMMAND() {
	    return this.getToken(MakefileParser.COMMAND, 0);
	};

	NEWLINE() {
	    return this.getToken(MakefileParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.enterRecipe(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.exitRecipe(this);
		}
	}


}



class Recipe_commandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MakefileParser.RULE_recipe_command;
    }

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MakefileParser.NEWLINE);
	    } else {
	        return this.getToken(MakefileParser.NEWLINE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.enterRecipe_command(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.exitRecipe_command(this);
		}
	}


}



class Variable_assignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MakefileParser.RULE_variable_assignment;
    }

	ASSIGN() {
	    return this.getToken(MakefileParser.ASSIGN, 0);
	};

	NAME() {
	    return this.getToken(MakefileParser.NAME, 0);
	};

	SPECIAL_VAR() {
	    return this.getToken(MakefileParser.SPECIAL_VAR, 0);
	};

	NEWLINE() {
	    return this.getToken(MakefileParser.NEWLINE, 0);
	};

	EOF() {
	    return this.getToken(MakefileParser.EOF, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	EXPORT() {
	    return this.getToken(MakefileParser.EXPORT, 0);
	};

	OVERRIDE() {
	    return this.getToken(MakefileParser.OVERRIDE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.enterVariable_assignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.exitVariable_assignment(this);
		}
	}


}



class Define_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MakefileParser.RULE_define_directive;
    }

	DEFINE() {
	    return this.getToken(MakefileParser.DEFINE, 0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MakefileParser.NEWLINE);
	    } else {
	        return this.getToken(MakefileParser.NEWLINE, i);
	    }
	};


	ENDEF() {
	    return this.getToken(MakefileParser.ENDEF, 0);
	};

	NAME() {
	    return this.getToken(MakefileParser.NAME, 0);
	};

	SPECIAL_VAR() {
	    return this.getToken(MakefileParser.SPECIAL_VAR, 0);
	};

	ASSIGN() {
	    return this.getToken(MakefileParser.ASSIGN, 0);
	};

	define_body = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Define_bodyContext);
	    } else {
	        return this.getTypedRuleContext(Define_bodyContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.enterDefine_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.exitDefine_directive(this);
		}
	}


}



class Define_bodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MakefileParser.RULE_define_body;
    }

	ENDEF = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MakefileParser.ENDEF);
	    } else {
	        return this.getToken(MakefileParser.ENDEF, i);
	    }
	};


	EOF = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MakefileParser.EOF);
	    } else {
	        return this.getToken(MakefileParser.EOF, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.enterDefine_body(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.exitDefine_body(this);
		}
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MakefileParser.RULE_value;
    }

	NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MakefileParser.NAME);
	    } else {
	        return this.getToken(MakefileParser.NAME, i);
	    }
	};


	STRING = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MakefileParser.STRING);
	    } else {
	        return this.getToken(MakefileParser.STRING, i);
	    }
	};


	variable_ref = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Variable_refContext);
	    } else {
	        return this.getTypedRuleContext(Variable_refContext,i);
	    }
	};

	function_call = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Function_callContext);
	    } else {
	        return this.getTypedRuleContext(Function_callContext,i);
	    }
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MakefileParser.WS);
	    } else {
	        return this.getToken(MakefileParser.WS, i);
	    }
	};


	ASSIGN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MakefileParser.ASSIGN);
	    } else {
	        return this.getToken(MakefileParser.ASSIGN, i);
	    }
	};


	COLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MakefileParser.COLON);
	    } else {
	        return this.getToken(MakefileParser.COLON, i);
	    }
	};


	PIPE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MakefileParser.PIPE);
	    } else {
	        return this.getToken(MakefileParser.PIPE, i);
	    }
	};


	SPECIAL_VAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MakefileParser.SPECIAL_VAR);
	    } else {
	        return this.getToken(MakefileParser.SPECIAL_VAR, i);
	    }
	};


	EXCLAMATION = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MakefileParser.EXCLAMATION);
	    } else {
	        return this.getToken(MakefileParser.EXCLAMATION, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MakefileParser.COMMA);
	    } else {
	        return this.getToken(MakefileParser.COMMA, i);
	    }
	};


	CONTINUATION = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MakefileParser.CONTINUATION);
	    } else {
	        return this.getToken(MakefileParser.CONTINUATION, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.exitValue(this);
		}
	}


}



class Standalone_functionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MakefileParser.RULE_standalone_function;
    }

	function_call() {
	    return this.getTypedRuleContext(Function_callContext,0);
	};

	NEWLINE() {
	    return this.getToken(MakefileParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.enterStandalone_function(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.exitStandalone_function(this);
		}
	}


}



class Variable_refContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MakefileParser.RULE_variable_ref;
    }

	DOLLAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MakefileParser.DOLLAR);
	    } else {
	        return this.getToken(MakefileParser.DOLLAR, i);
	    }
	};


	LPAREN() {
	    return this.getToken(MakefileParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(MakefileParser.RPAREN, 0);
	};

	NAME() {
	    return this.getToken(MakefileParser.NAME, 0);
	};

	SPECIAL_VAR() {
	    return this.getToken(MakefileParser.SPECIAL_VAR, 0);
	};

	LBRACE() {
	    return this.getToken(MakefileParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(MakefileParser.RBRACE, 0);
	};

	function_call() {
	    return this.getTypedRuleContext(Function_callContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.enterVariable_ref(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.exitVariable_ref(this);
		}
	}


}



class Function_callContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MakefileParser.RULE_function_call;
    }

	DOLLAR() {
	    return this.getToken(MakefileParser.DOLLAR, 0);
	};

	LPAREN() {
	    return this.getToken(MakefileParser.LPAREN, 0);
	};

	builtin_function() {
	    return this.getTypedRuleContext(Builtin_functionContext,0);
	};

	RPAREN() {
	    return this.getToken(MakefileParser.RPAREN, 0);
	};

	function_args() {
	    return this.getTypedRuleContext(Function_argsContext,0);
	};

	LBRACE() {
	    return this.getToken(MakefileParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(MakefileParser.RBRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.enterFunction_call(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.exitFunction_call(this);
		}
	}


}



class Builtin_functionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MakefileParser.RULE_builtin_function;
    }

	FUNC_SUBST() {
	    return this.getToken(MakefileParser.FUNC_SUBST, 0);
	};

	FUNC_PATSUBST() {
	    return this.getToken(MakefileParser.FUNC_PATSUBST, 0);
	};

	FUNC_STRIP() {
	    return this.getToken(MakefileParser.FUNC_STRIP, 0);
	};

	FUNC_FINDSTRING() {
	    return this.getToken(MakefileParser.FUNC_FINDSTRING, 0);
	};

	FUNC_FILTER() {
	    return this.getToken(MakefileParser.FUNC_FILTER, 0);
	};

	FUNC_FILTER_OUT() {
	    return this.getToken(MakefileParser.FUNC_FILTER_OUT, 0);
	};

	FUNC_SORT() {
	    return this.getToken(MakefileParser.FUNC_SORT, 0);
	};

	FUNC_WORD() {
	    return this.getToken(MakefileParser.FUNC_WORD, 0);
	};

	FUNC_WORDS() {
	    return this.getToken(MakefileParser.FUNC_WORDS, 0);
	};

	FUNC_WORDLIST() {
	    return this.getToken(MakefileParser.FUNC_WORDLIST, 0);
	};

	FUNC_FIRSTWORD() {
	    return this.getToken(MakefileParser.FUNC_FIRSTWORD, 0);
	};

	FUNC_LASTWORD() {
	    return this.getToken(MakefileParser.FUNC_LASTWORD, 0);
	};

	FUNC_DIR() {
	    return this.getToken(MakefileParser.FUNC_DIR, 0);
	};

	FUNC_NOTDIR() {
	    return this.getToken(MakefileParser.FUNC_NOTDIR, 0);
	};

	FUNC_SUFFIX() {
	    return this.getToken(MakefileParser.FUNC_SUFFIX, 0);
	};

	FUNC_BASELINE() {
	    return this.getToken(MakefileParser.FUNC_BASELINE, 0);
	};

	FUNC_ADDSUFFIX() {
	    return this.getToken(MakefileParser.FUNC_ADDSUFFIX, 0);
	};

	FUNC_ADDPREFIX() {
	    return this.getToken(MakefileParser.FUNC_ADDPREFIX, 0);
	};

	FUNC_JOIN() {
	    return this.getToken(MakefileParser.FUNC_JOIN, 0);
	};

	FUNC_WILDCARD() {
	    return this.getToken(MakefileParser.FUNC_WILDCARD, 0);
	};

	FUNC_REALPATH() {
	    return this.getToken(MakefileParser.FUNC_REALPATH, 0);
	};

	FUNC_ABSPATH() {
	    return this.getToken(MakefileParser.FUNC_ABSPATH, 0);
	};

	FUNC_ERROR() {
	    return this.getToken(MakefileParser.FUNC_ERROR, 0);
	};

	FUNC_WARNING() {
	    return this.getToken(MakefileParser.FUNC_WARNING, 0);
	};

	FUNC_INFO() {
	    return this.getToken(MakefileParser.FUNC_INFO, 0);
	};

	FUNC_SHELL() {
	    return this.getToken(MakefileParser.FUNC_SHELL, 0);
	};

	FUNC_FOREACH() {
	    return this.getToken(MakefileParser.FUNC_FOREACH, 0);
	};

	FUNC_IF() {
	    return this.getToken(MakefileParser.FUNC_IF, 0);
	};

	FUNC_OR() {
	    return this.getToken(MakefileParser.FUNC_OR, 0);
	};

	FUNC_AND() {
	    return this.getToken(MakefileParser.FUNC_AND, 0);
	};

	FUNC_CALL() {
	    return this.getToken(MakefileParser.FUNC_CALL, 0);
	};

	FUNC_EVAL() {
	    return this.getToken(MakefileParser.FUNC_EVAL, 0);
	};

	FUNC_FILE() {
	    return this.getToken(MakefileParser.FUNC_FILE, 0);
	};

	FUNC_VALUE() {
	    return this.getToken(MakefileParser.FUNC_VALUE, 0);
	};

	FUNC_ORIGIN() {
	    return this.getToken(MakefileParser.FUNC_ORIGIN, 0);
	};

	FUNC_FLAVOR() {
	    return this.getToken(MakefileParser.FUNC_FLAVOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.enterBuiltin_function(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.exitBuiltin_function(this);
		}
	}


}



class Function_argsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MakefileParser.RULE_function_args;
    }

	arg = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgContext);
	    } else {
	        return this.getTypedRuleContext(ArgContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MakefileParser.COMMA);
	    } else {
	        return this.getToken(MakefileParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.enterFunction_args(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.exitFunction_args(this);
		}
	}


}



class ArgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MakefileParser.RULE_arg;
    }

	NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MakefileParser.NAME);
	    } else {
	        return this.getToken(MakefileParser.NAME, i);
	    }
	};


	STRING = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MakefileParser.STRING);
	    } else {
	        return this.getToken(MakefileParser.STRING, i);
	    }
	};


	variable_ref = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Variable_refContext);
	    } else {
	        return this.getTypedRuleContext(Variable_refContext,i);
	    }
	};

	function_call = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Function_callContext);
	    } else {
	        return this.getTypedRuleContext(Function_callContext,i);
	    }
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MakefileParser.WS);
	    } else {
	        return this.getToken(MakefileParser.WS, i);
	    }
	};


	ASSIGN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MakefileParser.ASSIGN);
	    } else {
	        return this.getToken(MakefileParser.ASSIGN, i);
	    }
	};


	COLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MakefileParser.COLON);
	    } else {
	        return this.getToken(MakefileParser.COLON, i);
	    }
	};


	PIPE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MakefileParser.PIPE);
	    } else {
	        return this.getToken(MakefileParser.PIPE, i);
	    }
	};


	SPECIAL_VAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MakefileParser.SPECIAL_VAR);
	    } else {
	        return this.getToken(MakefileParser.SPECIAL_VAR, i);
	    }
	};


	EXCLAMATION = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MakefileParser.EXCLAMATION);
	    } else {
	        return this.getToken(MakefileParser.EXCLAMATION, i);
	    }
	};


	CONTINUATION = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MakefileParser.CONTINUATION);
	    } else {
	        return this.getToken(MakefileParser.CONTINUATION, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.enterArg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.exitArg(this);
		}
	}


}



class Include_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MakefileParser.RULE_include_directive;
    }

	INCLUDE() {
	    return this.getToken(MakefileParser.INCLUDE, 0);
	};

	NEWLINE() {
	    return this.getToken(MakefileParser.NEWLINE, 0);
	};

	NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MakefileParser.NAME);
	    } else {
	        return this.getToken(MakefileParser.NAME, i);
	    }
	};


	variable_ref = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Variable_refContext);
	    } else {
	        return this.getTypedRuleContext(Variable_refContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.enterInclude_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.exitInclude_directive(this);
		}
	}


}



class ConditionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MakefileParser.RULE_conditional;
    }

	conditional_header() {
	    return this.getTypedRuleContext(Conditional_headerContext,0);
	};

	conditional_endif() {
	    return this.getTypedRuleContext(Conditional_endifContext,0);
	};

	item = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ItemContext);
	    } else {
	        return this.getTypedRuleContext(ItemContext,i);
	    }
	};

	conditional_else() {
	    return this.getTypedRuleContext(Conditional_elseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.enterConditional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.exitConditional(this);
		}
	}


}



class Conditional_headerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MakefileParser.RULE_conditional_header;
    }

	NEWLINE() {
	    return this.getToken(MakefileParser.NEWLINE, 0);
	};

	IFDEF() {
	    return this.getToken(MakefileParser.IFDEF, 0);
	};

	IFNDEF() {
	    return this.getToken(MakefileParser.IFNDEF, 0);
	};

	NAME() {
	    return this.getToken(MakefileParser.NAME, 0);
	};

	variable_ref() {
	    return this.getTypedRuleContext(Variable_refContext,0);
	};

	LPAREN() {
	    return this.getToken(MakefileParser.LPAREN, 0);
	};

	COMMA() {
	    return this.getToken(MakefileParser.COMMA, 0);
	};

	RPAREN() {
	    return this.getToken(MakefileParser.RPAREN, 0);
	};

	IFEQ() {
	    return this.getToken(MakefileParser.IFEQ, 0);
	};

	IFNEQ() {
	    return this.getToken(MakefileParser.IFNEQ, 0);
	};

	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MakefileParser.WS);
	    } else {
	        return this.getToken(MakefileParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.enterConditional_header(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.exitConditional_header(this);
		}
	}


}



class Conditional_elseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MakefileParser.RULE_conditional_else;
    }

	ELSE() {
	    return this.getToken(MakefileParser.ELSE, 0);
	};

	NEWLINE() {
	    return this.getToken(MakefileParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.enterConditional_else(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.exitConditional_else(this);
		}
	}


}



class Conditional_endifContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MakefileParser.RULE_conditional_endif;
    }

	ENDIF() {
	    return this.getToken(MakefileParser.ENDIF, 0);
	};

	NEWLINE() {
	    return this.getToken(MakefileParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.enterConditional_endif(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.exitConditional_endif(this);
		}
	}


}



class Export_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MakefileParser.RULE_export_directive;
    }

	NEWLINE() {
	    return this.getToken(MakefileParser.NEWLINE, 0);
	};

	EXPORT() {
	    return this.getToken(MakefileParser.EXPORT, 0);
	};

	UNEXPORT() {
	    return this.getToken(MakefileParser.UNEXPORT, 0);
	};

	NAME() {
	    return this.getToken(MakefileParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.enterExport_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.exitExport_directive(this);
		}
	}


}



class Override_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MakefileParser.RULE_override_directive;
    }

	OVERRIDE() {
	    return this.getToken(MakefileParser.OVERRIDE, 0);
	};

	variable_assignment() {
	    return this.getTypedRuleContext(Variable_assignmentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.enterOverride_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.exitOverride_directive(this);
		}
	}


}



class Undefine_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MakefileParser.RULE_undefine_directive;
    }

	UNDEFINE() {
	    return this.getToken(MakefileParser.UNDEFINE, 0);
	};

	NAME() {
	    return this.getToken(MakefileParser.NAME, 0);
	};

	NEWLINE() {
	    return this.getToken(MakefileParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.enterUndefine_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.exitUndefine_directive(this);
		}
	}


}



class Error_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MakefileParser.RULE_error_directive;
    }

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MakefileParser.NEWLINE);
	    } else {
	        return this.getToken(MakefileParser.NEWLINE, i);
	    }
	};


	FUNC_ERROR() {
	    return this.getToken(MakefileParser.FUNC_ERROR, 0);
	};

	NAME() {
	    return this.getToken(MakefileParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.enterError_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.exitError_directive(this);
		}
	}


}



class Vpath_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MakefileParser.RULE_vpath_directive;
    }

	VPATH() {
	    return this.getToken(MakefileParser.VPATH, 0);
	};

	NEWLINE() {
	    return this.getToken(MakefileParser.NEWLINE, 0);
	};

	NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MakefileParser.NAME);
	    } else {
	        return this.getToken(MakefileParser.NAME, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.enterVpath_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MakefileParserListener ) {
	        listener.exitVpath_directive(this);
		}
	}


}




MakefileParser.MakefileContext = MakefileContext; 
MakefileParser.ItemContext = ItemContext; 
MakefileParser.Rule_Context = Rule_Context; 
MakefileParser.Double_colonContext = Double_colonContext; 
MakefileParser.TargetsContext = TargetsContext; 
MakefileParser.TargetContext = TargetContext; 
MakefileParser.PrerequisitesContext = PrerequisitesContext; 
MakefileParser.Normal_prerequisitesContext = Normal_prerequisitesContext; 
MakefileParser.Order_only_prerequisitesContext = Order_only_prerequisitesContext; 
MakefileParser.PrerequisiteContext = PrerequisiteContext; 
MakefileParser.RecipeContext = RecipeContext; 
MakefileParser.Recipe_commandContext = Recipe_commandContext; 
MakefileParser.Variable_assignmentContext = Variable_assignmentContext; 
MakefileParser.Define_directiveContext = Define_directiveContext; 
MakefileParser.Define_bodyContext = Define_bodyContext; 
MakefileParser.ValueContext = ValueContext; 
MakefileParser.Standalone_functionContext = Standalone_functionContext; 
MakefileParser.Variable_refContext = Variable_refContext; 
MakefileParser.Function_callContext = Function_callContext; 
MakefileParser.Builtin_functionContext = Builtin_functionContext; 
MakefileParser.Function_argsContext = Function_argsContext; 
MakefileParser.ArgContext = ArgContext; 
MakefileParser.Include_directiveContext = Include_directiveContext; 
MakefileParser.ConditionalContext = ConditionalContext; 
MakefileParser.Conditional_headerContext = Conditional_headerContext; 
MakefileParser.Conditional_elseContext = Conditional_elseContext; 
MakefileParser.Conditional_endifContext = Conditional_endifContext; 
MakefileParser.Export_directiveContext = Export_directiveContext; 
MakefileParser.Override_directiveContext = Override_directiveContext; 
MakefileParser.Undefine_directiveContext = Undefine_directiveContext; 
MakefileParser.Error_directiveContext = Error_directiveContext; 
MakefileParser.Vpath_directiveContext = Vpath_directiveContext; 
