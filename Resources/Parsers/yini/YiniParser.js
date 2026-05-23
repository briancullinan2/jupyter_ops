// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/yini/YiniParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import YiniParserListener from './YiniParserListener.js';
const serializedATN = [4,1,47,367,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,1,0,3,0,46,8,0,1,0,5,0,49,8,0,10,0,12,0,52,9,0,1,0,5,0,
55,8,0,10,0,12,0,58,9,0,1,0,3,0,61,8,0,1,0,5,0,64,8,0,10,0,12,0,67,9,0,1,
0,5,0,70,8,0,10,0,12,0,73,9,0,1,0,4,0,76,8,0,11,0,12,0,77,1,0,5,0,81,8,0,
10,0,12,0,84,9,0,1,0,3,0,87,8,0,1,0,1,0,1,1,3,1,92,8,1,1,1,1,1,1,2,1,2,4,
2,98,8,2,11,2,12,2,99,1,2,3,2,103,8,2,1,2,5,2,106,8,2,10,2,12,2,109,9,2,
3,2,111,8,2,1,3,4,3,114,8,3,11,3,12,3,115,1,4,1,4,3,4,120,8,4,1,4,1,4,3,
4,124,8,4,1,4,3,4,127,8,4,1,4,4,4,130,8,4,11,4,12,4,131,1,4,1,4,1,4,3,4,
137,8,4,1,4,3,4,140,8,4,1,5,1,5,1,5,3,5,145,8,5,1,5,3,5,148,8,5,1,5,4,5,
151,8,5,11,5,12,5,152,1,6,1,6,1,6,1,6,1,6,1,6,3,6,161,8,6,1,7,1,7,5,7,165,
8,7,10,7,12,7,168,9,7,1,7,1,7,5,7,172,8,7,10,7,12,7,175,9,7,1,7,1,7,5,7,
179,8,7,10,7,12,7,182,9,7,1,7,1,7,5,7,186,8,7,10,7,12,7,189,9,7,3,7,191,
8,7,1,8,1,8,1,8,5,8,196,8,8,10,8,12,8,199,9,8,1,8,5,8,202,8,8,10,8,12,8,
205,9,8,1,8,3,8,208,8,8,1,8,1,8,5,8,212,8,8,10,8,12,8,215,9,8,3,8,217,8,
8,1,9,1,9,3,9,221,8,9,1,9,1,9,5,9,225,8,9,10,9,12,9,228,9,9,1,9,1,9,1,10,
1,10,3,10,234,8,10,1,11,1,11,5,11,238,8,11,10,11,12,11,241,9,11,1,11,1,11,
5,11,245,8,11,10,11,12,11,248,9,11,1,11,1,11,1,11,1,11,5,11,254,8,11,10,
11,12,11,257,9,11,3,11,259,8,11,1,12,1,12,3,12,263,8,12,1,12,1,12,1,12,1,
12,3,12,269,8,12,1,13,5,13,272,8,13,10,13,12,13,275,9,13,1,13,1,13,5,13,
279,8,13,10,13,12,13,282,9,13,1,13,5,13,285,8,13,10,13,12,13,288,9,13,1,
13,1,13,5,13,292,8,13,10,13,12,13,295,9,13,3,13,297,8,13,1,14,1,14,1,15,
1,15,1,16,1,16,5,16,305,8,16,10,16,12,16,308,9,16,1,17,5,17,311,8,17,10,
17,12,17,314,9,17,1,17,1,17,5,17,318,8,17,10,17,12,17,321,9,17,1,17,1,17,
1,18,1,18,1,19,1,19,1,19,5,19,330,8,19,10,19,12,19,333,9,19,1,19,3,19,336,
8,19,1,20,1,20,1,20,5,20,341,8,20,10,20,12,20,344,9,20,1,20,3,20,347,8,20,
1,21,3,21,350,8,21,1,21,1,21,3,21,354,8,21,1,21,3,21,357,8,21,1,21,1,21,
1,21,3,21,362,8,21,1,21,3,21,365,8,21,1,21,0,0,22,0,2,4,6,8,10,12,14,16,
18,20,22,24,26,28,30,32,34,36,38,40,42,0,1,1,0,22,23,412,0,45,1,0,0,0,2,
91,1,0,0,0,4,95,1,0,0,0,6,113,1,0,0,0,8,139,1,0,0,0,10,141,1,0,0,0,12,160,
1,0,0,0,14,190,1,0,0,0,16,216,1,0,0,0,18,218,1,0,0,0,20,233,1,0,0,0,22,258,
1,0,0,0,24,268,1,0,0,0,26,296,1,0,0,0,28,298,1,0,0,0,30,300,1,0,0,0,32,302,
1,0,0,0,34,312,1,0,0,0,36,324,1,0,0,0,38,335,1,0,0,0,40,346,1,0,0,0,42,349,
1,0,0,0,44,46,5,27,0,0,45,44,1,0,0,0,45,46,1,0,0,0,46,50,1,0,0,0,47,49,5,
45,0,0,48,47,1,0,0,0,49,52,1,0,0,0,50,48,1,0,0,0,50,51,1,0,0,0,51,56,1,0,
0,0,52,50,1,0,0,0,53,55,5,39,0,0,54,53,1,0,0,0,55,58,1,0,0,0,56,54,1,0,0,
0,56,57,1,0,0,0,57,60,1,0,0,0,58,56,1,0,0,0,59,61,5,1,0,0,60,59,1,0,0,0,
60,61,1,0,0,0,61,65,1,0,0,0,62,64,5,45,0,0,63,62,1,0,0,0,64,67,1,0,0,0,65,
63,1,0,0,0,65,66,1,0,0,0,66,71,1,0,0,0,67,65,1,0,0,0,68,70,5,39,0,0,69,68,
1,0,0,0,70,73,1,0,0,0,71,69,1,0,0,0,71,72,1,0,0,0,72,75,1,0,0,0,73,71,1,
0,0,0,74,76,3,2,1,0,75,74,1,0,0,0,76,77,1,0,0,0,77,75,1,0,0,0,77,78,1,0,
0,0,78,82,1,0,0,0,79,81,5,39,0,0,80,79,1,0,0,0,81,84,1,0,0,0,82,80,1,0,0,
0,82,83,1,0,0,0,83,86,1,0,0,0,84,82,1,0,0,0,85,87,3,4,2,0,86,85,1,0,0,0,
86,87,1,0,0,0,87,88,1,0,0,0,88,89,5,0,0,1,89,1,1,0,0,0,90,92,5,2,0,0,91,
90,1,0,0,0,91,92,1,0,0,0,92,93,1,0,0,0,93,94,3,6,3,0,94,3,1,0,0,0,95,110,
5,3,0,0,96,98,5,39,0,0,97,96,1,0,0,0,98,99,1,0,0,0,99,97,1,0,0,0,99,100,
1,0,0,0,100,111,1,0,0,0,101,103,5,45,0,0,102,101,1,0,0,0,102,103,1,0,0,0,
103,107,1,0,0,0,104,106,5,39,0,0,105,104,1,0,0,0,106,109,1,0,0,0,107,105,
1,0,0,0,107,108,1,0,0,0,108,111,1,0,0,0,109,107,1,0,0,0,110,97,1,0,0,0,110,
102,1,0,0,0,111,5,1,0,0,0,112,114,3,8,4,0,113,112,1,0,0,0,114,115,1,0,0,
0,115,113,1,0,0,0,115,116,1,0,0,0,116,7,1,0,0,0,117,119,5,29,0,0,118,120,
5,41,0,0,119,118,1,0,0,0,119,120,1,0,0,0,120,121,1,0,0,0,121,123,5,9,0,0,
122,124,5,41,0,0,123,122,1,0,0,0,123,124,1,0,0,0,124,126,1,0,0,0,125,127,
3,12,6,0,126,125,1,0,0,0,126,127,1,0,0,0,127,129,1,0,0,0,128,130,5,39,0,
0,129,128,1,0,0,0,130,131,1,0,0,0,131,129,1,0,0,0,131,132,1,0,0,0,132,140,
1,0,0,0,133,140,3,10,5,0,134,136,5,2,0,0,135,137,3,6,3,0,136,135,1,0,0,0,
136,137,1,0,0,0,137,140,1,0,0,0,138,140,3,42,21,0,139,117,1,0,0,0,139,133,
1,0,0,0,139,134,1,0,0,0,139,138,1,0,0,0,140,9,1,0,0,0,141,142,5,29,0,0,142,
144,5,12,0,0,143,145,5,41,0,0,144,143,1,0,0,0,144,145,1,0,0,0,145,147,1,
0,0,0,146,148,3,24,12,0,147,146,1,0,0,0,147,148,1,0,0,0,148,150,1,0,0,0,
149,151,5,39,0,0,150,149,1,0,0,0,151,152,1,0,0,0,152,150,1,0,0,0,152,153,
1,0,0,0,153,11,1,0,0,0,154,161,3,30,15,0,155,161,3,32,16,0,156,161,3,28,
14,0,157,161,3,36,18,0,158,161,3,22,11,0,159,161,3,14,7,0,160,154,1,0,0,
0,160,155,1,0,0,0,160,156,1,0,0,0,160,157,1,0,0,0,160,158,1,0,0,0,160,159,
1,0,0,0,161,13,1,0,0,0,162,166,5,15,0,0,163,165,5,39,0,0,164,163,1,0,0,0,
165,168,1,0,0,0,166,164,1,0,0,0,166,167,1,0,0,0,167,169,1,0,0,0,168,166,
1,0,0,0,169,173,3,16,8,0,170,172,5,39,0,0,171,170,1,0,0,0,172,175,1,0,0,
0,173,171,1,0,0,0,173,174,1,0,0,0,174,176,1,0,0,0,175,173,1,0,0,0,176,180,
5,16,0,0,177,179,5,39,0,0,178,177,1,0,0,0,179,182,1,0,0,0,180,178,1,0,0,
0,180,181,1,0,0,0,181,191,1,0,0,0,182,180,1,0,0,0,183,187,3,38,19,0,184,
186,5,39,0,0,185,184,1,0,0,0,186,189,1,0,0,0,187,185,1,0,0,0,187,188,1,0,
0,0,188,191,1,0,0,0,189,187,1,0,0,0,190,162,1,0,0,0,190,183,1,0,0,0,191,
15,1,0,0,0,192,203,3,18,9,0,193,197,5,11,0,0,194,196,5,39,0,0,195,194,1,
0,0,0,196,199,1,0,0,0,197,195,1,0,0,0,197,198,1,0,0,0,198,200,1,0,0,0,199,
197,1,0,0,0,200,202,3,18,9,0,201,193,1,0,0,0,202,205,1,0,0,0,203,201,1,0,
0,0,203,204,1,0,0,0,204,207,1,0,0,0,205,203,1,0,0,0,206,208,5,11,0,0,207,
206,1,0,0,0,207,208,1,0,0,0,208,217,1,0,0,0,209,213,3,38,19,0,210,212,5,
39,0,0,211,210,1,0,0,0,212,215,1,0,0,0,213,211,1,0,0,0,213,214,1,0,0,0,214,
217,1,0,0,0,215,213,1,0,0,0,216,192,1,0,0,0,216,209,1,0,0,0,217,17,1,0,0,
0,218,220,5,29,0,0,219,221,5,41,0,0,220,219,1,0,0,0,220,221,1,0,0,0,221,
222,1,0,0,0,222,226,5,12,0,0,223,225,5,39,0,0,224,223,1,0,0,0,225,228,1,
0,0,0,226,224,1,0,0,0,226,227,1,0,0,0,227,229,1,0,0,0,228,226,1,0,0,0,229,
230,3,12,6,0,230,19,1,0,0,0,231,234,3,24,12,0,232,234,3,22,11,0,233,231,
1,0,0,0,233,232,1,0,0,0,234,21,1,0,0,0,235,239,5,13,0,0,236,238,5,39,0,0,
237,236,1,0,0,0,238,241,1,0,0,0,239,237,1,0,0,0,239,240,1,0,0,0,240,242,
1,0,0,0,241,239,1,0,0,0,242,246,3,24,12,0,243,245,5,39,0,0,244,243,1,0,0,
0,245,248,1,0,0,0,246,244,1,0,0,0,246,247,1,0,0,0,247,249,1,0,0,0,248,246,
1,0,0,0,249,250,5,14,0,0,250,259,1,0,0,0,251,255,3,40,20,0,252,254,5,39,
0,0,253,252,1,0,0,0,254,257,1,0,0,0,255,253,1,0,0,0,255,256,1,0,0,0,256,
259,1,0,0,0,257,255,1,0,0,0,258,235,1,0,0,0,258,251,1,0,0,0,259,23,1,0,0,
0,260,262,3,26,13,0,261,263,5,11,0,0,262,261,1,0,0,0,262,263,1,0,0,0,263,
269,1,0,0,0,264,265,3,26,13,0,265,266,5,11,0,0,266,267,3,24,12,0,267,269,
1,0,0,0,268,260,1,0,0,0,268,264,1,0,0,0,269,25,1,0,0,0,270,272,5,39,0,0,
271,270,1,0,0,0,272,275,1,0,0,0,273,271,1,0,0,0,273,274,1,0,0,0,274,276,
1,0,0,0,275,273,1,0,0,0,276,280,3,12,6,0,277,279,5,39,0,0,278,277,1,0,0,
0,279,282,1,0,0,0,280,278,1,0,0,0,280,281,1,0,0,0,281,297,1,0,0,0,282,280,
1,0,0,0,283,285,5,39,0,0,284,283,1,0,0,0,285,288,1,0,0,0,286,284,1,0,0,0,
286,287,1,0,0,0,287,289,1,0,0,0,288,286,1,0,0,0,289,293,3,22,11,0,290,292,
5,39,0,0,291,290,1,0,0,0,292,295,1,0,0,0,293,291,1,0,0,0,293,294,1,0,0,0,
294,297,1,0,0,0,295,293,1,0,0,0,296,273,1,0,0,0,296,286,1,0,0,0,297,27,1,
0,0,0,298,299,5,28,0,0,299,29,1,0,0,0,300,301,5,24,0,0,301,31,1,0,0,0,302,
306,5,32,0,0,303,305,3,34,17,0,304,303,1,0,0,0,305,308,1,0,0,0,306,304,1,
0,0,0,306,307,1,0,0,0,307,33,1,0,0,0,308,306,1,0,0,0,309,311,5,39,0,0,310,
309,1,0,0,0,311,314,1,0,0,0,312,310,1,0,0,0,312,313,1,0,0,0,313,315,1,0,
0,0,314,312,1,0,0,0,315,319,5,17,0,0,316,318,5,39,0,0,317,316,1,0,0,0,318,
321,1,0,0,0,319,317,1,0,0,0,319,320,1,0,0,0,320,322,1,0,0,0,321,319,1,0,
0,0,322,323,5,32,0,0,323,35,1,0,0,0,324,325,7,0,0,0,325,37,1,0,0,0,326,336,
5,25,0,0,327,331,5,15,0,0,328,330,5,39,0,0,329,328,1,0,0,0,330,333,1,0,0,
0,331,329,1,0,0,0,331,332,1,0,0,0,332,334,1,0,0,0,333,331,1,0,0,0,334,336,
5,16,0,0,335,326,1,0,0,0,335,327,1,0,0,0,336,39,1,0,0,0,337,347,5,26,0,0,
338,342,5,13,0,0,339,341,5,39,0,0,340,339,1,0,0,0,341,344,1,0,0,0,342,340,
1,0,0,0,342,343,1,0,0,0,343,345,1,0,0,0,344,342,1,0,0,0,345,347,5,14,0,0,
346,337,1,0,0,0,346,338,1,0,0,0,347,41,1,0,0,0,348,350,5,41,0,0,349,348,
1,0,0,0,349,350,1,0,0,0,350,353,1,0,0,0,351,354,5,47,0,0,352,354,3,12,6,
0,353,351,1,0,0,0,353,352,1,0,0,0,353,354,1,0,0,0,354,356,1,0,0,0,355,357,
5,41,0,0,356,355,1,0,0,0,356,357,1,0,0,0,357,358,1,0,0,0,358,361,5,9,0,0,
359,362,3,12,6,0,360,362,5,47,0,0,361,359,1,0,0,0,361,360,1,0,0,0,362,364,
1,0,0,0,363,365,5,39,0,0,364,363,1,0,0,0,364,365,1,0,0,0,365,43,1,0,0,0,
61,45,50,56,60,65,71,77,82,86,91,99,102,107,110,115,119,123,126,131,136,
139,144,147,152,160,166,173,180,187,190,197,203,207,213,216,220,226,233,
239,246,255,258,262,268,273,280,286,293,296,306,312,319,331,335,342,346,
349,353,356,361,364];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class YiniParser extends antlr4.Parser {

    static grammarFileName = "YiniParser.g4";
    static literalNames = [ null, null, null, null, "'\\u00A7'", "'\\u20AC'", 
                            "'^'", "'>'", "'<'", "'='", "'#'", "','", "':'", 
                            "'['", "']'", "'{'", "'}'", "'+'", "'$'", "'%'", 
                            "'@'", "';'", null, null, null, "'{}'", "'[]'" ];
    static symbolicNames = [ null, "YINI_MARKER", "SECTION_HEAD", "TERMINAL_TOKEN", 
                             "SS", "EUR", "CARET", "GT", "LT", "EQ", "HASH", 
                             "COMMA", "COLON", "OB", "CB", "OC", "CC", "PLUS", 
                             "DOLLAR", "PC", "AT", "SEMICOLON", "BOOLEAN_FALSE", 
                             "BOOLEAN_TRUE", "NULL", "EMPTY_OBJECT", "EMPTY_LIST", 
                             "SHEBANG", "NUMBER", "KEY", "IDENT", "IDENT_BACKTICKED", 
                             "STRING", "TRIPLE_QUOTED_STRING", "SINGLE_OR_DOUBLE", 
                             "R_AND_C_STRING", "HYPER_STRING", "ESC_SEQ", 
                             "ESC_SEQ_BASE", "NL", "SINGLE_NL", "WS", "BLOCK_COMMENT", 
                             "COMMENT", "LINE_COMMENT", "INLINE_COMMENT", 
                             "IDENT_INVALID", "REST" ];
    static ruleNames = [ "yini", "section", "terminal_line", "section_members", 
                         "member", "member_colon_list", "value", "object_literal", 
                         "objectMemberList", "objectMember", "list", "list_in_brackets", 
                         "elements", "element", "number_literal", "null_literal", 
                         "string_literal", "string_concat", "boolean_literal", 
                         "empty_object", "empty_list", "bad_member" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = YiniParser.ruleNames;
        this.literalNames = YiniParser.literalNames;
        this.symbolicNames = YiniParser.symbolicNames;
    }



	yini() {
	    let localctx = new YiniContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, YiniParser.RULE_yini);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===27) {
	            this.state = 44;
	            this.match(YiniParser.SHEBANG);
	        }

	        this.state = 50;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 47;
	                this.match(YiniParser.INLINE_COMMENT); 
	            }
	            this.state = 52;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	        }

	        this.state = 56;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 53;
	                this.match(YiniParser.NL); 
	            }
	            this.state = 58;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	        }

	        this.state = 60;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 59;
	            this.match(YiniParser.YINI_MARKER);
	        }

	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===45) {
	            this.state = 62;
	            this.match(YiniParser.INLINE_COMMENT);
	            this.state = 67;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===39) {
	            this.state = 68;
	            this.match(YiniParser.NL);
	            this.state = 73;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 75; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 74;
	            this.section();
	            this.state = 77; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 935371268) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 33281) !== 0));
	        this.state = 82;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===39) {
	            this.state = 79;
	            this.match(YiniParser.NL);
	            this.state = 84;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 86;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 85;
	            this.terminal_line();
	        }

	        this.state = 88;
	        this.match(YiniParser.EOF);
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



	section() {
	    let localctx = new SectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, YiniParser.RULE_section);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        if(la_===1) {
	            this.state = 90;
	            this.match(YiniParser.SECTION_HEAD);

	        }
	        this.state = 93;
	        this.section_members();
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



	terminal_line() {
	    let localctx = new Terminal_lineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, YiniParser.RULE_terminal_line);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this.match(YiniParser.TERMINAL_TOKEN);
	        this.state = 110;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 97; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 96;
	                this.match(YiniParser.NL);
	                this.state = 99; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===39);
	            break;

	        case 2:
	            this.state = 102;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===45) {
	                this.state = 101;
	                this.match(YiniParser.INLINE_COMMENT);
	            }

	            this.state = 107;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===39) {
	                this.state = 104;
	                this.match(YiniParser.NL);
	                this.state = 109;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
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



	section_members() {
	    let localctx = new Section_membersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, YiniParser.RULE_section_members);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 112;
	        		this.member();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 115; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,14, this._ctx);
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



	member() {
	    let localctx = new MemberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, YiniParser.RULE_member);
	    var _la = 0;
	    try {
	        this.state = 139;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 117;
	            this.match(YiniParser.KEY);
	            this.state = 119;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===41) {
	                this.state = 118;
	                this.match(YiniParser.WS);
	            }

	            this.state = 121;
	            this.match(YiniParser.EQ);
	            this.state = 123;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===41) {
	                this.state = 122;
	                this.match(YiniParser.WS);
	            }

	            this.state = 126;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 13)) & ~0x1f) === 0 && ((1 << (_la - 13)) & 572933) !== 0)) {
	                this.state = 125;
	                this.value();
	            }

	            this.state = 129; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 128;
	            		this.match(YiniParser.NL);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 131; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,18, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 133;
	            this.member_colon_list();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 134;
	            this.match(YiniParser.SECTION_HEAD);
	            this.state = 136;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	            if(la_===1) {
	                this.state = 135;
	                this.section_members();

	            }
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 138;
	            this.bad_member();
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



	member_colon_list() {
	    let localctx = new Member_colon_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, YiniParser.RULE_member_colon_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141;
	        this.match(YiniParser.KEY);
	        this.state = 142;
	        this.match(YiniParser.COLON);
	        this.state = 144;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===41) {
	            this.state = 143;
	            this.match(YiniParser.WS);
	        }

	        this.state = 147;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        if(la_===1) {
	            this.state = 146;
	            this.elements();

	        }
	        this.state = 150; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 149;
	        		this.match(YiniParser.NL);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 152; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,23, this._ctx);
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
	    this.enterRule(localctx, 12, YiniParser.RULE_value);
	    try {
	        this.state = 160;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 24:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 154;
	            this.null_literal();
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 155;
	            this.string_literal();
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 156;
	            this.number_literal();
	            break;
	        case 22:
	        case 23:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 157;
	            this.boolean_literal();
	            break;
	        case 13:
	        case 26:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 158;
	            this.list_in_brackets();
	            break;
	        case 15:
	        case 25:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 159;
	            this.object_literal();
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



	object_literal() {
	    let localctx = new Object_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, YiniParser.RULE_object_literal);
	    var _la = 0;
	    try {
	        this.state = 190;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 162;
	            this.match(YiniParser.OC);
	            this.state = 166;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===39) {
	                this.state = 163;
	                this.match(YiniParser.NL);
	                this.state = 168;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 169;
	            this.objectMemberList();
	            this.state = 173;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===39) {
	                this.state = 170;
	                this.match(YiniParser.NL);
	                this.state = 175;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 176;
	            this.match(YiniParser.CC);
	            this.state = 180;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,27,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 177;
	                    this.match(YiniParser.NL); 
	                }
	                this.state = 182;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,27,this._ctx);
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 183;
	            this.empty_object();
	            this.state = 187;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,28,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 184;
	                    this.match(YiniParser.NL); 
	                }
	                this.state = 189;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,28,this._ctx);
	            }

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



	objectMemberList() {
	    let localctx = new ObjectMemberListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, YiniParser.RULE_objectMemberList);
	    var _la = 0;
	    try {
	        this.state = 216;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 29:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 192;
	            this.objectMember();
	            this.state = 203;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,31,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 193;
	                    this.match(YiniParser.COMMA);
	                    this.state = 197;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    while(_la===39) {
	                        this.state = 194;
	                        this.match(YiniParser.NL);
	                        this.state = 199;
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    }
	                    this.state = 200;
	                    this.objectMember(); 
	                }
	                this.state = 205;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,31,this._ctx);
	            }

	            this.state = 207;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===11) {
	                this.state = 206;
	                this.match(YiniParser.COMMA);
	            }

	            break;
	        case 15:
	        case 25:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 209;
	            this.empty_object();
	            this.state = 213;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,33,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 210;
	                    this.match(YiniParser.NL); 
	                }
	                this.state = 215;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,33,this._ctx);
	            }

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



	objectMember() {
	    let localctx = new ObjectMemberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, YiniParser.RULE_objectMember);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 218;
	        this.match(YiniParser.KEY);
	        this.state = 220;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===41) {
	            this.state = 219;
	            this.match(YiniParser.WS);
	        }

	        this.state = 222;
	        this.match(YiniParser.COLON);
	        this.state = 226;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===39) {
	            this.state = 223;
	            this.match(YiniParser.NL);
	            this.state = 228;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 229;
	        this.value();
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



	list() {
	    let localctx = new ListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, YiniParser.RULE_list);
	    try {
	        this.state = 233;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 231;
	            this.elements();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 232;
	            this.list_in_brackets();
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



	list_in_brackets() {
	    let localctx = new List_in_bracketsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, YiniParser.RULE_list_in_brackets);
	    var _la = 0;
	    try {
	        this.state = 258;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,41,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 235;
	            this.match(YiniParser.OB);
	            this.state = 239;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,38,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 236;
	                    this.match(YiniParser.NL); 
	                }
	                this.state = 241;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,38,this._ctx);
	            }

	            this.state = 242;
	            this.elements();
	            this.state = 246;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===39) {
	                this.state = 243;
	                this.match(YiniParser.NL);
	                this.state = 248;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 249;
	            this.match(YiniParser.CB);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 251;
	            this.empty_list();
	            this.state = 255;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,40,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 252;
	                    this.match(YiniParser.NL); 
	                }
	                this.state = 257;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,40,this._ctx);
	            }

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



	elements() {
	    let localctx = new ElementsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, YiniParser.RULE_elements);
	    var _la = 0;
	    try {
	        this.state = 268;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 260;
	            this.element();
	            this.state = 262;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===11) {
	                this.state = 261;
	                this.match(YiniParser.COMMA);
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 264;
	            this.element();
	            this.state = 265;
	            this.match(YiniParser.COMMA);
	            this.state = 266;
	            this.elements();
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



	element() {
	    let localctx = new ElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, YiniParser.RULE_element);
	    var _la = 0;
	    try {
	        this.state = 296;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 273;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===39) {
	                this.state = 270;
	                this.match(YiniParser.NL);
	                this.state = 275;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 276;
	            this.value();
	            this.state = 280;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,45,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 277;
	                    this.match(YiniParser.NL); 
	                }
	                this.state = 282;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,45,this._ctx);
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 286;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===39) {
	                this.state = 283;
	                this.match(YiniParser.NL);
	                this.state = 288;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 289;
	            this.list_in_brackets();
	            this.state = 293;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,47,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 290;
	                    this.match(YiniParser.NL); 
	                }
	                this.state = 295;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,47,this._ctx);
	            }

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



	number_literal() {
	    let localctx = new Number_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, YiniParser.RULE_number_literal);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 298;
	        this.match(YiniParser.NUMBER);
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



	null_literal() {
	    let localctx = new Null_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, YiniParser.RULE_null_literal);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 300;
	        this.match(YiniParser.NULL);
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



	string_literal() {
	    let localctx = new String_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, YiniParser.RULE_string_literal);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 302;
	        this.match(YiniParser.STRING);
	        this.state = 306;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,49,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 303;
	                this.string_concat(); 
	            }
	            this.state = 308;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,49,this._ctx);
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



	string_concat() {
	    let localctx = new String_concatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, YiniParser.RULE_string_concat);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 312;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===39) {
	            this.state = 309;
	            this.match(YiniParser.NL);
	            this.state = 314;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 315;
	        this.match(YiniParser.PLUS);
	        this.state = 319;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===39) {
	            this.state = 316;
	            this.match(YiniParser.NL);
	            this.state = 321;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 322;
	        this.match(YiniParser.STRING);
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



	boolean_literal() {
	    let localctx = new Boolean_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, YiniParser.RULE_boolean_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 324;
	        _la = this._input.LA(1);
	        if(!(_la===22 || _la===23)) {
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



	empty_object() {
	    let localctx = new Empty_objectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, YiniParser.RULE_empty_object);
	    var _la = 0;
	    try {
	        this.state = 335;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 25:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 326;
	            this.match(YiniParser.EMPTY_OBJECT);
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 327;
	            this.match(YiniParser.OC);
	            this.state = 331;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===39) {
	                this.state = 328;
	                this.match(YiniParser.NL);
	                this.state = 333;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 334;
	            this.match(YiniParser.CC);
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



	empty_list() {
	    let localctx = new Empty_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, YiniParser.RULE_empty_list);
	    var _la = 0;
	    try {
	        this.state = 346;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 26:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 337;
	            this.match(YiniParser.EMPTY_LIST);
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 338;
	            this.match(YiniParser.OB);
	            this.state = 342;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===39) {
	                this.state = 339;
	                this.match(YiniParser.NL);
	                this.state = 344;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 345;
	            this.match(YiniParser.CB);
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



	bad_member() {
	    let localctx = new Bad_memberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, YiniParser.RULE_bad_member);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 349;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,56,this._ctx);
	        if(la_===1) {
	            this.state = 348;
	            this.match(YiniParser.WS);

	        }
	        this.state = 353;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case 47:
	        	this.state = 351;
	        	this.match(YiniParser.REST);
	        	break;
	        case 13:
	        case 15:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 28:
	        case 32:
	        	this.state = 352;
	        	this.value();
	        	break;
	        case 9:
	        case 41:
	        	break;
	        default:
	        	break;
	        }
	        this.state = 356;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===41) {
	            this.state = 355;
	            this.match(YiniParser.WS);
	        }

	        this.state = 358;
	        this.match(YiniParser.EQ);
	        this.state = 361;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	        case 15:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 28:
	        case 32:
	            this.state = 359;
	            this.value();
	            break;
	        case 47:
	            this.state = 360;
	            this.match(YiniParser.REST);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 364;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,60,this._ctx);
	        if(la_===1) {
	            this.state = 363;
	            this.match(YiniParser.NL);

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


}

YiniParser.EOF = antlr4.Token.EOF;
YiniParser.YINI_MARKER = 1;
YiniParser.SECTION_HEAD = 2;
YiniParser.TERMINAL_TOKEN = 3;
YiniParser.SS = 4;
YiniParser.EUR = 5;
YiniParser.CARET = 6;
YiniParser.GT = 7;
YiniParser.LT = 8;
YiniParser.EQ = 9;
YiniParser.HASH = 10;
YiniParser.COMMA = 11;
YiniParser.COLON = 12;
YiniParser.OB = 13;
YiniParser.CB = 14;
YiniParser.OC = 15;
YiniParser.CC = 16;
YiniParser.PLUS = 17;
YiniParser.DOLLAR = 18;
YiniParser.PC = 19;
YiniParser.AT = 20;
YiniParser.SEMICOLON = 21;
YiniParser.BOOLEAN_FALSE = 22;
YiniParser.BOOLEAN_TRUE = 23;
YiniParser.NULL = 24;
YiniParser.EMPTY_OBJECT = 25;
YiniParser.EMPTY_LIST = 26;
YiniParser.SHEBANG = 27;
YiniParser.NUMBER = 28;
YiniParser.KEY = 29;
YiniParser.IDENT = 30;
YiniParser.IDENT_BACKTICKED = 31;
YiniParser.STRING = 32;
YiniParser.TRIPLE_QUOTED_STRING = 33;
YiniParser.SINGLE_OR_DOUBLE = 34;
YiniParser.R_AND_C_STRING = 35;
YiniParser.HYPER_STRING = 36;
YiniParser.ESC_SEQ = 37;
YiniParser.ESC_SEQ_BASE = 38;
YiniParser.NL = 39;
YiniParser.SINGLE_NL = 40;
YiniParser.WS = 41;
YiniParser.BLOCK_COMMENT = 42;
YiniParser.COMMENT = 43;
YiniParser.LINE_COMMENT = 44;
YiniParser.INLINE_COMMENT = 45;
YiniParser.IDENT_INVALID = 46;
YiniParser.REST = 47;

YiniParser.RULE_yini = 0;
YiniParser.RULE_section = 1;
YiniParser.RULE_terminal_line = 2;
YiniParser.RULE_section_members = 3;
YiniParser.RULE_member = 4;
YiniParser.RULE_member_colon_list = 5;
YiniParser.RULE_value = 6;
YiniParser.RULE_object_literal = 7;
YiniParser.RULE_objectMemberList = 8;
YiniParser.RULE_objectMember = 9;
YiniParser.RULE_list = 10;
YiniParser.RULE_list_in_brackets = 11;
YiniParser.RULE_elements = 12;
YiniParser.RULE_element = 13;
YiniParser.RULE_number_literal = 14;
YiniParser.RULE_null_literal = 15;
YiniParser.RULE_string_literal = 16;
YiniParser.RULE_string_concat = 17;
YiniParser.RULE_boolean_literal = 18;
YiniParser.RULE_empty_object = 19;
YiniParser.RULE_empty_list = 20;
YiniParser.RULE_bad_member = 21;

class YiniContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YiniParser.RULE_yini;
    }

	EOF() {
	    return this.getToken(YiniParser.EOF, 0);
	};

	SHEBANG() {
	    return this.getToken(YiniParser.SHEBANG, 0);
	};

	INLINE_COMMENT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(YiniParser.INLINE_COMMENT);
	    } else {
	        return this.getToken(YiniParser.INLINE_COMMENT, i);
	    }
	};


	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(YiniParser.NL);
	    } else {
	        return this.getToken(YiniParser.NL, i);
	    }
	};


	YINI_MARKER() {
	    return this.getToken(YiniParser.YINI_MARKER, 0);
	};

	section = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SectionContext);
	    } else {
	        return this.getTypedRuleContext(SectionContext,i);
	    }
	};

	terminal_line() {
	    return this.getTypedRuleContext(Terminal_lineContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.enterYini(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.exitYini(this);
		}
	}


}



class SectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YiniParser.RULE_section;
    }

	section_members() {
	    return this.getTypedRuleContext(Section_membersContext,0);
	};

	SECTION_HEAD() {
	    return this.getToken(YiniParser.SECTION_HEAD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.enterSection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.exitSection(this);
		}
	}


}



class Terminal_lineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YiniParser.RULE_terminal_line;
    }

	TERMINAL_TOKEN() {
	    return this.getToken(YiniParser.TERMINAL_TOKEN, 0);
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(YiniParser.NL);
	    } else {
	        return this.getToken(YiniParser.NL, i);
	    }
	};


	INLINE_COMMENT() {
	    return this.getToken(YiniParser.INLINE_COMMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.enterTerminal_line(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.exitTerminal_line(this);
		}
	}


}



class Section_membersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YiniParser.RULE_section_members;
    }

	member = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MemberContext);
	    } else {
	        return this.getTypedRuleContext(MemberContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.enterSection_members(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.exitSection_members(this);
		}
	}


}



class MemberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YiniParser.RULE_member;
    }

	KEY() {
	    return this.getToken(YiniParser.KEY, 0);
	};

	EQ() {
	    return this.getToken(YiniParser.EQ, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(YiniParser.WS);
	    } else {
	        return this.getToken(YiniParser.WS, i);
	    }
	};


	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(YiniParser.NL);
	    } else {
	        return this.getToken(YiniParser.NL, i);
	    }
	};


	member_colon_list() {
	    return this.getTypedRuleContext(Member_colon_listContext,0);
	};

	SECTION_HEAD() {
	    return this.getToken(YiniParser.SECTION_HEAD, 0);
	};

	section_members() {
	    return this.getTypedRuleContext(Section_membersContext,0);
	};

	bad_member() {
	    return this.getTypedRuleContext(Bad_memberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.enterMember(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.exitMember(this);
		}
	}


}



class Member_colon_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YiniParser.RULE_member_colon_list;
    }

	KEY() {
	    return this.getToken(YiniParser.KEY, 0);
	};

	COLON() {
	    return this.getToken(YiniParser.COLON, 0);
	};

	WS() {
	    return this.getToken(YiniParser.WS, 0);
	};

	elements() {
	    return this.getTypedRuleContext(ElementsContext,0);
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(YiniParser.NL);
	    } else {
	        return this.getToken(YiniParser.NL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.enterMember_colon_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.exitMember_colon_list(this);
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
        this.ruleIndex = YiniParser.RULE_value;
    }

	null_literal() {
	    return this.getTypedRuleContext(Null_literalContext,0);
	};

	string_literal() {
	    return this.getTypedRuleContext(String_literalContext,0);
	};

	number_literal() {
	    return this.getTypedRuleContext(Number_literalContext,0);
	};

	boolean_literal() {
	    return this.getTypedRuleContext(Boolean_literalContext,0);
	};

	list_in_brackets() {
	    return this.getTypedRuleContext(List_in_bracketsContext,0);
	};

	object_literal() {
	    return this.getTypedRuleContext(Object_literalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.exitValue(this);
		}
	}


}



class Object_literalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YiniParser.RULE_object_literal;
    }

	OC() {
	    return this.getToken(YiniParser.OC, 0);
	};

	objectMemberList() {
	    return this.getTypedRuleContext(ObjectMemberListContext,0);
	};

	CC() {
	    return this.getToken(YiniParser.CC, 0);
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(YiniParser.NL);
	    } else {
	        return this.getToken(YiniParser.NL, i);
	    }
	};


	empty_object() {
	    return this.getTypedRuleContext(Empty_objectContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.enterObject_literal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.exitObject_literal(this);
		}
	}


}



class ObjectMemberListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YiniParser.RULE_objectMemberList;
    }

	objectMember = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ObjectMemberContext);
	    } else {
	        return this.getTypedRuleContext(ObjectMemberContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(YiniParser.COMMA);
	    } else {
	        return this.getToken(YiniParser.COMMA, i);
	    }
	};


	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(YiniParser.NL);
	    } else {
	        return this.getToken(YiniParser.NL, i);
	    }
	};


	empty_object() {
	    return this.getTypedRuleContext(Empty_objectContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.enterObjectMemberList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.exitObjectMemberList(this);
		}
	}


}



class ObjectMemberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YiniParser.RULE_objectMember;
    }

	KEY() {
	    return this.getToken(YiniParser.KEY, 0);
	};

	COLON() {
	    return this.getToken(YiniParser.COLON, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	WS() {
	    return this.getToken(YiniParser.WS, 0);
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(YiniParser.NL);
	    } else {
	        return this.getToken(YiniParser.NL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.enterObjectMember(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.exitObjectMember(this);
		}
	}


}



class ListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YiniParser.RULE_list;
    }

	elements() {
	    return this.getTypedRuleContext(ElementsContext,0);
	};

	list_in_brackets() {
	    return this.getTypedRuleContext(List_in_bracketsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.enterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.exitList(this);
		}
	}


}



class List_in_bracketsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YiniParser.RULE_list_in_brackets;
    }

	OB() {
	    return this.getToken(YiniParser.OB, 0);
	};

	elements() {
	    return this.getTypedRuleContext(ElementsContext,0);
	};

	CB() {
	    return this.getToken(YiniParser.CB, 0);
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(YiniParser.NL);
	    } else {
	        return this.getToken(YiniParser.NL, i);
	    }
	};


	empty_list() {
	    return this.getTypedRuleContext(Empty_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.enterList_in_brackets(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.exitList_in_brackets(this);
		}
	}


}



class ElementsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YiniParser.RULE_elements;
    }

	element() {
	    return this.getTypedRuleContext(ElementContext,0);
	};

	COMMA() {
	    return this.getToken(YiniParser.COMMA, 0);
	};

	elements() {
	    return this.getTypedRuleContext(ElementsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.enterElements(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.exitElements(this);
		}
	}


}



class ElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YiniParser.RULE_element;
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(YiniParser.NL);
	    } else {
	        return this.getToken(YiniParser.NL, i);
	    }
	};


	list_in_brackets() {
	    return this.getTypedRuleContext(List_in_bracketsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.enterElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.exitElement(this);
		}
	}


}



class Number_literalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YiniParser.RULE_number_literal;
    }

	NUMBER() {
	    return this.getToken(YiniParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.enterNumber_literal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.exitNumber_literal(this);
		}
	}


}



class Null_literalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YiniParser.RULE_null_literal;
    }

	NULL() {
	    return this.getToken(YiniParser.NULL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.enterNull_literal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.exitNull_literal(this);
		}
	}


}



class String_literalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YiniParser.RULE_string_literal;
    }

	STRING() {
	    return this.getToken(YiniParser.STRING, 0);
	};

	string_concat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(String_concatContext);
	    } else {
	        return this.getTypedRuleContext(String_concatContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.enterString_literal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.exitString_literal(this);
		}
	}


}



class String_concatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YiniParser.RULE_string_concat;
    }

	PLUS() {
	    return this.getToken(YiniParser.PLUS, 0);
	};

	STRING() {
	    return this.getToken(YiniParser.STRING, 0);
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(YiniParser.NL);
	    } else {
	        return this.getToken(YiniParser.NL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.enterString_concat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.exitString_concat(this);
		}
	}


}



class Boolean_literalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YiniParser.RULE_boolean_literal;
    }

	BOOLEAN_FALSE() {
	    return this.getToken(YiniParser.BOOLEAN_FALSE, 0);
	};

	BOOLEAN_TRUE() {
	    return this.getToken(YiniParser.BOOLEAN_TRUE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.enterBoolean_literal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.exitBoolean_literal(this);
		}
	}


}



class Empty_objectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YiniParser.RULE_empty_object;
    }

	EMPTY_OBJECT() {
	    return this.getToken(YiniParser.EMPTY_OBJECT, 0);
	};

	OC() {
	    return this.getToken(YiniParser.OC, 0);
	};

	CC() {
	    return this.getToken(YiniParser.CC, 0);
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(YiniParser.NL);
	    } else {
	        return this.getToken(YiniParser.NL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.enterEmpty_object(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.exitEmpty_object(this);
		}
	}


}



class Empty_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YiniParser.RULE_empty_list;
    }

	EMPTY_LIST() {
	    return this.getToken(YiniParser.EMPTY_LIST, 0);
	};

	OB() {
	    return this.getToken(YiniParser.OB, 0);
	};

	CB() {
	    return this.getToken(YiniParser.CB, 0);
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(YiniParser.NL);
	    } else {
	        return this.getToken(YiniParser.NL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.enterEmpty_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.exitEmpty_list(this);
		}
	}


}



class Bad_memberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YiniParser.RULE_bad_member;
    }

	EQ() {
	    return this.getToken(YiniParser.EQ, 0);
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

	REST = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(YiniParser.REST);
	    } else {
	        return this.getToken(YiniParser.REST, i);
	    }
	};


	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(YiniParser.WS);
	    } else {
	        return this.getToken(YiniParser.WS, i);
	    }
	};


	NL() {
	    return this.getToken(YiniParser.NL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.enterBad_member(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YiniParserListener ) {
	        listener.exitBad_member(this);
		}
	}


}




YiniParser.YiniContext = YiniContext; 
YiniParser.SectionContext = SectionContext; 
YiniParser.Terminal_lineContext = Terminal_lineContext; 
YiniParser.Section_membersContext = Section_membersContext; 
YiniParser.MemberContext = MemberContext; 
YiniParser.Member_colon_listContext = Member_colon_listContext; 
YiniParser.ValueContext = ValueContext; 
YiniParser.Object_literalContext = Object_literalContext; 
YiniParser.ObjectMemberListContext = ObjectMemberListContext; 
YiniParser.ObjectMemberContext = ObjectMemberContext; 
YiniParser.ListContext = ListContext; 
YiniParser.List_in_bracketsContext = List_in_bracketsContext; 
YiniParser.ElementsContext = ElementsContext; 
YiniParser.ElementContext = ElementContext; 
YiniParser.Number_literalContext = Number_literalContext; 
YiniParser.Null_literalContext = Null_literalContext; 
YiniParser.String_literalContext = String_literalContext; 
YiniParser.String_concatContext = String_concatContext; 
YiniParser.Boolean_literalContext = Boolean_literalContext; 
YiniParser.Empty_objectContext = Empty_objectContext; 
YiniParser.Empty_listContext = Empty_listContext; 
YiniParser.Bad_memberContext = Bad_memberContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
