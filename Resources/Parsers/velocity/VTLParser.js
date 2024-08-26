// Generated from Resources/Parsers/velocity/VTLParser.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import VTLParserListener from './VTLParserListener.js';
const serializedATN = [4,1,107,328,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,1,0,1,0,1,0,1,1,5,1,67,8,1,10,1,12,1,
70,9,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,79,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,97,8,3,1,4,1,4,1,4,3,4,102,8,4,
1,4,1,4,1,4,3,4,107,8,4,1,4,1,4,3,4,111,8,4,3,4,113,8,4,1,5,1,5,4,5,117,
8,5,11,5,12,5,118,1,6,1,6,4,6,123,8,6,11,6,12,6,124,1,7,1,7,1,7,1,7,1,7,
1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,139,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,
3,8,149,8,8,1,8,3,8,152,8,8,1,9,1,9,1,9,5,9,157,8,9,10,9,12,9,160,9,9,1,
10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,5,11,173,8,11,10,11,
12,11,176,9,11,1,11,3,11,179,8,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,13,
1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,16,1,16,1,
17,1,17,5,17,205,8,17,10,17,12,17,208,9,17,1,17,3,17,211,8,17,1,17,1,17,
1,17,3,17,216,8,17,1,18,1,18,5,18,220,8,18,10,18,12,18,223,9,18,1,18,1,18,
1,18,1,18,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,1,21,1,21,1,
21,1,21,1,22,1,22,1,22,1,22,1,23,1,23,5,23,249,8,23,10,23,12,23,252,9,23,
1,23,1,23,1,23,1,23,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,
25,1,25,1,25,1,25,1,25,1,25,3,25,274,8,25,1,25,1,25,1,25,1,25,1,25,1,25,
1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,
25,5,25,297,8,25,10,25,12,25,300,9,25,1,26,1,26,3,26,304,8,26,1,26,1,26,
1,27,1,27,3,27,310,8,27,1,27,1,27,1,28,1,28,1,28,5,28,317,8,28,10,28,12,
28,320,9,28,1,29,1,29,1,29,1,29,1,30,1,30,1,30,0,1,50,31,0,2,4,6,8,10,12,
14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,
0,8,2,0,31,31,42,42,1,0,21,23,1,0,19,20,2,0,14,15,36,37,2,0,27,30,32,35,
2,0,16,16,40,40,2,0,17,17,41,41,3,0,9,9,18,18,32,43,355,0,62,1,0,0,0,2,68,
1,0,0,0,4,78,1,0,0,0,6,96,1,0,0,0,8,112,1,0,0,0,10,114,1,0,0,0,12,120,1,
0,0,0,14,138,1,0,0,0,16,151,1,0,0,0,18,153,1,0,0,0,20,161,1,0,0,0,22,167,
1,0,0,0,24,182,1,0,0,0,26,187,1,0,0,0,28,190,1,0,0,0,30,198,1,0,0,0,32,200,
1,0,0,0,34,202,1,0,0,0,36,217,1,0,0,0,38,228,1,0,0,0,40,232,1,0,0,0,42,238,
1,0,0,0,44,242,1,0,0,0,46,246,1,0,0,0,48,257,1,0,0,0,50,273,1,0,0,0,52,301,
1,0,0,0,54,307,1,0,0,0,56,313,1,0,0,0,58,321,1,0,0,0,60,325,1,0,0,0,62,63,
3,2,1,0,63,64,5,0,0,1,64,1,1,0,0,0,65,67,3,4,2,0,66,65,1,0,0,0,67,70,1,0,
0,0,68,66,1,0,0,0,68,69,1,0,0,0,69,3,1,0,0,0,70,68,1,0,0,0,71,79,5,64,0,
0,72,79,5,58,0,0,73,79,5,65,0,0,74,79,3,8,4,0,75,79,3,6,3,0,76,79,3,10,5,
0,77,79,3,14,7,0,78,71,1,0,0,0,78,72,1,0,0,0,78,73,1,0,0,0,78,74,1,0,0,0,
78,75,1,0,0,0,78,76,1,0,0,0,78,77,1,0,0,0,79,5,1,0,0,0,80,81,5,61,0,0,81,
82,3,12,6,0,82,83,5,6,0,0,83,97,1,0,0,0,84,85,5,60,0,0,85,86,3,12,6,0,86,
87,5,6,0,0,87,97,1,0,0,0,88,89,5,61,0,0,89,90,3,60,30,0,90,91,5,6,0,0,91,
97,1,0,0,0,92,93,5,60,0,0,93,94,3,60,30,0,94,95,5,6,0,0,95,97,1,0,0,0,96,
80,1,0,0,0,96,84,1,0,0,0,96,88,1,0,0,0,96,92,1,0,0,0,97,7,1,0,0,0,98,99,
5,63,0,0,99,101,3,60,30,0,100,102,5,11,0,0,101,100,1,0,0,0,101,102,1,0,0,
0,102,113,1,0,0,0,103,104,5,62,0,0,104,106,3,60,30,0,105,107,5,11,0,0,106,
105,1,0,0,0,106,107,1,0,0,0,107,113,1,0,0,0,108,110,5,10,0,0,109,111,5,11,
0,0,110,109,1,0,0,0,110,111,1,0,0,0,111,113,1,0,0,0,112,98,1,0,0,0,112,103,
1,0,0,0,112,108,1,0,0,0,113,9,1,0,0,0,114,116,3,8,4,0,115,117,3,16,8,0,116,
115,1,0,0,0,117,118,1,0,0,0,118,116,1,0,0,0,118,119,1,0,0,0,119,11,1,0,0,
0,120,122,3,60,30,0,121,123,3,16,8,0,122,121,1,0,0,0,123,124,1,0,0,0,124,
122,1,0,0,0,124,125,1,0,0,0,125,13,1,0,0,0,126,139,3,20,10,0,127,139,3,22,
11,0,128,139,3,28,14,0,129,139,3,30,15,0,130,139,3,32,16,0,131,139,3,36,
18,0,132,139,3,38,19,0,133,139,3,40,20,0,134,139,3,42,21,0,135,139,3,44,
22,0,136,139,3,46,23,0,137,139,3,34,17,0,138,126,1,0,0,0,138,127,1,0,0,0,
138,128,1,0,0,0,138,129,1,0,0,0,138,130,1,0,0,0,138,131,1,0,0,0,138,132,
1,0,0,0,138,133,1,0,0,0,138,134,1,0,0,0,138,135,1,0,0,0,138,136,1,0,0,0,
138,137,1,0,0,0,139,15,1,0,0,0,140,141,5,11,0,0,141,152,5,9,0,0,142,143,
5,3,0,0,143,144,3,50,25,0,144,145,5,4,0,0,145,152,1,0,0,0,146,148,5,1,0,
0,147,149,3,18,9,0,148,147,1,0,0,0,148,149,1,0,0,0,149,150,1,0,0,0,150,152,
5,2,0,0,151,140,1,0,0,0,151,142,1,0,0,0,151,146,1,0,0,0,152,17,1,0,0,0,153,
158,3,50,25,0,154,155,5,12,0,0,155,157,3,50,25,0,156,154,1,0,0,0,157,160,
1,0,0,0,158,156,1,0,0,0,158,159,1,0,0,0,159,19,1,0,0,0,160,158,1,0,0,0,161,
162,5,48,0,0,162,163,3,50,25,0,163,164,5,13,0,0,164,165,3,50,25,0,165,166,
5,2,0,0,166,21,1,0,0,0,167,168,5,44,0,0,168,169,3,50,25,0,169,170,5,2,0,
0,170,174,3,2,1,0,171,173,3,24,12,0,172,171,1,0,0,0,173,176,1,0,0,0,174,
172,1,0,0,0,174,175,1,0,0,0,175,178,1,0,0,0,176,174,1,0,0,0,177,179,3,26,
13,0,178,177,1,0,0,0,178,179,1,0,0,0,179,180,1,0,0,0,180,181,3,48,24,0,181,
23,1,0,0,0,182,183,5,45,0,0,183,184,3,50,25,0,184,185,5,2,0,0,185,186,3,
2,1,0,186,25,1,0,0,0,187,188,5,46,0,0,188,189,3,2,1,0,189,27,1,0,0,0,190,
191,5,47,0,0,191,192,3,8,4,0,192,193,5,43,0,0,193,194,3,50,25,0,194,195,
5,2,0,0,195,196,3,2,1,0,196,197,3,48,24,0,197,29,1,0,0,0,198,199,5,50,0,
0,199,31,1,0,0,0,200,201,5,53,0,0,201,33,1,0,0,0,202,210,5,9,0,0,203,205,
3,50,25,0,204,203,1,0,0,0,205,208,1,0,0,0,206,204,1,0,0,0,206,207,1,0,0,
0,207,209,1,0,0,0,208,206,1,0,0,0,209,211,5,2,0,0,210,206,1,0,0,0,210,211,
1,0,0,0,211,215,1,0,0,0,212,213,3,2,1,0,213,214,3,48,24,0,214,216,1,0,0,
0,215,212,1,0,0,0,215,216,1,0,0,0,216,35,1,0,0,0,217,221,5,52,0,0,218,220,
3,50,25,0,219,218,1,0,0,0,220,223,1,0,0,0,221,219,1,0,0,0,221,222,1,0,0,
0,222,224,1,0,0,0,223,221,1,0,0,0,224,225,5,2,0,0,225,226,3,2,1,0,226,227,
3,48,24,0,227,37,1,0,0,0,228,229,5,56,0,0,229,230,3,50,25,0,230,231,5,2,
0,0,231,39,1,0,0,0,232,233,5,57,0,0,233,234,3,50,25,0,234,235,5,2,0,0,235,
236,3,2,1,0,236,237,3,48,24,0,237,41,1,0,0,0,238,239,5,54,0,0,239,240,3,
18,9,0,240,241,5,2,0,0,241,43,1,0,0,0,242,243,5,55,0,0,243,244,3,50,25,0,
244,245,5,2,0,0,245,45,1,0,0,0,246,250,5,51,0,0,247,249,3,50,25,0,248,247,
1,0,0,0,249,252,1,0,0,0,250,248,1,0,0,0,250,251,1,0,0,0,251,253,1,0,0,0,
252,250,1,0,0,0,253,254,5,2,0,0,254,255,3,2,1,0,255,256,3,48,24,0,256,47,
1,0,0,0,257,258,5,49,0,0,258,49,1,0,0,0,259,260,6,25,-1,0,260,261,7,0,0,
0,261,274,3,50,25,18,262,263,5,20,0,0,263,274,3,50,25,17,264,274,3,52,26,
0,265,274,3,54,27,0,266,274,3,10,5,0,267,274,3,8,4,0,268,274,3,60,30,0,269,
274,5,7,0,0,270,274,5,8,0,0,271,274,5,25,0,0,272,274,5,18,0,0,273,259,1,
0,0,0,273,262,1,0,0,0,273,264,1,0,0,0,273,265,1,0,0,0,273,266,1,0,0,0,273,
267,1,0,0,0,273,268,1,0,0,0,273,269,1,0,0,0,273,270,1,0,0,0,273,271,1,0,
0,0,273,272,1,0,0,0,274,298,1,0,0,0,275,276,10,16,0,0,276,277,7,1,0,0,277,
297,3,50,25,17,278,279,10,15,0,0,279,280,7,2,0,0,280,297,3,50,25,16,281,
282,10,14,0,0,282,283,7,3,0,0,283,297,3,50,25,15,284,285,10,13,0,0,285,286,
7,4,0,0,286,297,3,50,25,14,287,288,10,12,0,0,288,289,7,5,0,0,289,297,3,50,
25,13,290,291,10,11,0,0,291,292,7,6,0,0,292,297,3,50,25,12,293,294,10,10,
0,0,294,295,5,26,0,0,295,297,3,50,25,11,296,275,1,0,0,0,296,278,1,0,0,0,
296,281,1,0,0,0,296,284,1,0,0,0,296,287,1,0,0,0,296,290,1,0,0,0,296,293,
1,0,0,0,297,300,1,0,0,0,298,296,1,0,0,0,298,299,1,0,0,0,299,51,1,0,0,0,300,
298,1,0,0,0,301,303,5,3,0,0,302,304,3,18,9,0,303,302,1,0,0,0,303,304,1,0,
0,0,304,305,1,0,0,0,305,306,5,4,0,0,306,53,1,0,0,0,307,309,5,5,0,0,308,310,
3,56,28,0,309,308,1,0,0,0,309,310,1,0,0,0,310,311,1,0,0,0,311,312,5,6,0,
0,312,55,1,0,0,0,313,318,3,58,29,0,314,315,5,12,0,0,315,317,3,58,29,0,316,
314,1,0,0,0,317,320,1,0,0,0,318,316,1,0,0,0,318,319,1,0,0,0,319,57,1,0,0,
0,320,318,1,0,0,0,321,322,3,50,25,0,322,323,5,24,0,0,323,324,3,50,25,0,324,
59,1,0,0,0,325,326,7,7,0,0,326,61,1,0,0,0,26,68,78,96,101,106,110,112,118,
124,138,148,151,158,174,178,206,210,215,221,250,273,296,298,303,309,318];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class VTLParser extends antlr4.Parser {

    static grammarFileName = "VTLParser.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, "'#'", null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, "'lt'", "'le'", "'gt'", "'ge'", "'eq'", 
                            "'ne'", "'true'", "'false'", "'and'", "'or'", 
                            "'not'", "'null'", "'in'", "'+'", "'-'", "'*'", 
                            "'/'", "'%'", "'!'", "'||'", "'&&'", "'='", 
                            "'=='", "'!='", "'<'", "'<='", "'>'", "'>='", 
                            "')'", "':'", "'..'", "'['", null, "'{'", "','" ];
    static symbolicNames = [ null, "OPAR", "CPAR", "OBRACK", "CBRACK", "OBRACE", 
                             "CBRACE", "STRING", "INTEGER", "ID", "REFERENCE", 
                             "DOT", "COMMA", "ASSIGN", "EQ", "NE", "AND", 
                             "OR", "K_NULL", "ADD", "SUB", "MUL", "DIV", 
                             "MOD", "COLON", "FLOAT", "RANGE", "LT", "LE", 
                             "GT", "GE", "EXCL", "K_LT", "K_LE", "K_GT", 
                             "K_GE", "K_EQ", "K_NE", "K_TRUE", "K_FALSE", 
                             "K_AND", "K_OR", "K_NOT", "K_IN", "IF", "ELSEIF", 
                             "ELSE", "FOREACH", "SET", "END", "BREAK", "MACRO_ID", 
                             "MACRO", "STOP", "INCLUDE", "EVALUATE", "PARSE", 
                             "DEFINE", "ESCAPED_CHAR", "START_DIRECTIVE", 
                             "DOLLAR_EXCL_OBRACE", "DOLLAR_OBRACE", "DOLLAR_EXCL", 
                             "DOLLAR", "TEXT", "ESCAPED_BLOCK", "SNGLE_LINE_COMMENT", 
                             "VTL_COMMENT_BLOCK", "MULTI_LINE_COMMENT", 
                             "VAR_HASH", "CODE_SPACES", "FRM_DOT", "FRM_CBRACE", 
                             "CODE_K_LT", "CODE_K_LE", "CODE_K_GT", "CODE_K_GE", 
                             "CODE_K_EQ", "CODE_K_NE", "CODE_K_TRUE", "CODE_K_FALSE", 
                             "CODE_K_AND", "CODE_K_OR", "CODE_K_NOT", "CODE_K_NULL", 
                             "CODE_K_IN", "CODE_ADD", "CODE_SUB", "CODE_MUL", 
                             "CODE_DIV", "CODE_MOD", "CODE_EXCL", "CODE_OR", 
                             "CODE_AND", "CODE_ASSIGN", "CODE_EQ", "CODE_NEQ", 
                             "CODE_LT", "CODE_LE", "CODE_GT", "CODE_GE", 
                             "CODE_CPAR", "CODE_COLON", "CODE_RANGE", "CODE_OBRACK", 
                             "CODE_CBRACK", "CODE_OBRACE", "CODE_COMMA" ];
    static ruleNames = [ "parse", "block", "atom", "formal", "variable", 
                         "property_or_method", "formal_property_or_method", 
                         "directive", "property_end", "expressions", "set_directive", 
                         "if_directive", "elseif_directive", "else_directive", 
                         "foreach_directive", "break_directive", "stop_directive", 
                         "custom_directive", "macro_directive", "parse_directive", 
                         "define_directive", "include_directive", "evaluate_directive", 
                         "macro_call_directive", "end", "expression", "list", 
                         "map", "map_entries", "map_entry", "id" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = VTLParser.ruleNames;
        this.literalNames = VTLParser.literalNames;
        this.symbolicNames = VTLParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 25:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 16);
    		case 1:
    			return this.precpred(this._ctx, 15);
    		case 2:
    			return this.precpred(this._ctx, 14);
    		case 3:
    			return this.precpred(this._ctx, 13);
    		case 4:
    			return this.precpred(this._ctx, 12);
    		case 5:
    			return this.precpred(this._ctx, 11);
    		case 6:
    			return this.precpred(this._ctx, 10);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	parse() {
	    let localctx = new ParseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, VTLParser.RULE_parse);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.block();
	        this.state = 63;
	        this.match(VTLParser.EOF);
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



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, VTLParser.RULE_block);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===VTLParser.ID || _la===VTLParser.REFERENCE || ((((_la - 44)) & ~0x1f) == 0 && ((1 << (_la - 44)) & ((1 << (VTLParser.IF - 44)) | (1 << (VTLParser.FOREACH - 44)) | (1 << (VTLParser.SET - 44)) | (1 << (VTLParser.BREAK - 44)) | (1 << (VTLParser.MACRO_ID - 44)) | (1 << (VTLParser.MACRO - 44)) | (1 << (VTLParser.STOP - 44)) | (1 << (VTLParser.INCLUDE - 44)) | (1 << (VTLParser.EVALUATE - 44)) | (1 << (VTLParser.PARSE - 44)) | (1 << (VTLParser.DEFINE - 44)) | (1 << (VTLParser.ESCAPED_CHAR - 44)) | (1 << (VTLParser.DOLLAR_EXCL_OBRACE - 44)) | (1 << (VTLParser.DOLLAR_OBRACE - 44)) | (1 << (VTLParser.DOLLAR_EXCL - 44)) | (1 << (VTLParser.DOLLAR - 44)) | (1 << (VTLParser.TEXT - 44)) | (1 << (VTLParser.ESCAPED_BLOCK - 44)))) !== 0)) {
	            this.state = 65;
	            this.atom();
	            this.state = 70;
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



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, VTLParser.RULE_atom);
	    try {
	        this.state = 78;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 71;
	            this.match(VTLParser.TEXT);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 72;
	            this.match(VTLParser.ESCAPED_CHAR);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 73;
	            this.match(VTLParser.ESCAPED_BLOCK);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 74;
	            this.variable();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 75;
	            this.formal();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 76;
	            this.property_or_method();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 77;
	            this.directive();
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



	formal() {
	    let localctx = new FormalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, VTLParser.RULE_formal);
	    try {
	        this.state = 96;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 80;
	            this.match(VTLParser.DOLLAR_OBRACE);
	            this.state = 81;
	            this.formal_property_or_method();
	            this.state = 82;
	            this.match(VTLParser.CBRACE);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 84;
	            this.match(VTLParser.DOLLAR_EXCL_OBRACE);
	            this.state = 85;
	            this.formal_property_or_method();
	            this.state = 86;
	            this.match(VTLParser.CBRACE);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 88;
	            this.match(VTLParser.DOLLAR_OBRACE);
	            this.state = 89;
	            this.id();
	            this.state = 90;
	            this.match(VTLParser.CBRACE);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 92;
	            this.match(VTLParser.DOLLAR_EXCL_OBRACE);
	            this.state = 93;
	            this.id();
	            this.state = 94;
	            this.match(VTLParser.CBRACE);
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



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, VTLParser.RULE_variable);
	    try {
	        this.state = 112;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case VTLParser.DOLLAR:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 98;
	            this.match(VTLParser.DOLLAR);
	            this.state = 99;
	            this.id();
	            this.state = 101;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	            if(la_===1) {
	                this.state = 100;
	                this.match(VTLParser.DOT);

	            }
	            break;
	        case VTLParser.DOLLAR_EXCL:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 103;
	            this.match(VTLParser.DOLLAR_EXCL);
	            this.state = 104;
	            this.id();
	            this.state = 106;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	            if(la_===1) {
	                this.state = 105;
	                this.match(VTLParser.DOT);

	            }
	            break;
	        case VTLParser.REFERENCE:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 108;
	            this.match(VTLParser.REFERENCE);
	            this.state = 110;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	            if(la_===1) {
	                this.state = 109;
	                this.match(VTLParser.DOT);

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



	property_or_method() {
	    let localctx = new Property_or_methodContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, VTLParser.RULE_property_or_method);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.variable();
	        this.state = 116; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 115;
	        		this.property_end();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 118; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,7, this._ctx);
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



	formal_property_or_method() {
	    let localctx = new Formal_property_or_methodContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, VTLParser.RULE_formal_property_or_method);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.id();
	        this.state = 122; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 121;
	            this.property_end();
	            this.state = 124; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VTLParser.OPAR) | (1 << VTLParser.OBRACK) | (1 << VTLParser.DOT))) !== 0));
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



	directive() {
	    let localctx = new DirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, VTLParser.RULE_directive);
	    try {
	        this.state = 138;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case VTLParser.SET:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 126;
	            this.set_directive();
	            break;
	        case VTLParser.IF:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 127;
	            this.if_directive();
	            break;
	        case VTLParser.FOREACH:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 128;
	            this.foreach_directive();
	            break;
	        case VTLParser.BREAK:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 129;
	            this.break_directive();
	            break;
	        case VTLParser.STOP:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 130;
	            this.stop_directive();
	            break;
	        case VTLParser.MACRO:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 131;
	            this.macro_directive();
	            break;
	        case VTLParser.PARSE:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 132;
	            this.parse_directive();
	            break;
	        case VTLParser.DEFINE:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 133;
	            this.define_directive();
	            break;
	        case VTLParser.INCLUDE:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 134;
	            this.include_directive();
	            break;
	        case VTLParser.EVALUATE:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 135;
	            this.evaluate_directive();
	            break;
	        case VTLParser.MACRO_ID:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 136;
	            this.macro_call_directive();
	            break;
	        case VTLParser.ID:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 137;
	            this.custom_directive();
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



	property_end() {
	    let localctx = new Property_endContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, VTLParser.RULE_property_end);
	    var _la = 0; // Token type
	    try {
	        this.state = 151;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case VTLParser.DOT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 140;
	            this.match(VTLParser.DOT);
	            this.state = 141;
	            this.match(VTLParser.ID);
	            break;
	        case VTLParser.OBRACK:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 142;
	            this.match(VTLParser.OBRACK);
	            this.state = 143;
	            this.expression(0);
	            this.state = 144;
	            this.match(VTLParser.CBRACK);
	            break;
	        case VTLParser.OPAR:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 146;
	            this.match(VTLParser.OPAR);
	            this.state = 148;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VTLParser.OBRACK) | (1 << VTLParser.OBRACE) | (1 << VTLParser.STRING) | (1 << VTLParser.INTEGER) | (1 << VTLParser.ID) | (1 << VTLParser.REFERENCE) | (1 << VTLParser.K_NULL) | (1 << VTLParser.SUB) | (1 << VTLParser.FLOAT) | (1 << VTLParser.EXCL))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (VTLParser.K_LT - 32)) | (1 << (VTLParser.K_LE - 32)) | (1 << (VTLParser.K_GT - 32)) | (1 << (VTLParser.K_GE - 32)) | (1 << (VTLParser.K_EQ - 32)) | (1 << (VTLParser.K_NE - 32)) | (1 << (VTLParser.K_TRUE - 32)) | (1 << (VTLParser.K_FALSE - 32)) | (1 << (VTLParser.K_AND - 32)) | (1 << (VTLParser.K_OR - 32)) | (1 << (VTLParser.K_NOT - 32)) | (1 << (VTLParser.K_IN - 32)) | (1 << (VTLParser.DOLLAR_EXCL - 32)) | (1 << (VTLParser.DOLLAR - 32)))) !== 0)) {
	                this.state = 147;
	                this.expressions();
	            }

	            this.state = 150;
	            this.match(VTLParser.CPAR);
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



	expressions() {
	    let localctx = new ExpressionsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, VTLParser.RULE_expressions);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        this.expression(0);
	        this.state = 158;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===VTLParser.COMMA) {
	            this.state = 154;
	            this.match(VTLParser.COMMA);
	            this.state = 155;
	            this.expression(0);
	            this.state = 160;
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



	set_directive() {
	    let localctx = new Set_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, VTLParser.RULE_set_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 161;
	        this.match(VTLParser.SET);
	        this.state = 162;
	        this.expression(0);
	        this.state = 163;
	        this.match(VTLParser.ASSIGN);
	        this.state = 164;
	        this.expression(0);
	        this.state = 165;
	        this.match(VTLParser.CPAR);
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



	if_directive() {
	    let localctx = new If_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, VTLParser.RULE_if_directive);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this.match(VTLParser.IF);
	        this.state = 168;
	        this.expression(0);
	        this.state = 169;
	        this.match(VTLParser.CPAR);
	        this.state = 170;
	        this.block();
	        this.state = 174;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===VTLParser.ELSEIF) {
	            this.state = 171;
	            this.elseif_directive();
	            this.state = 176;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 178;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===VTLParser.ELSE) {
	            this.state = 177;
	            this.else_directive();
	        }

	        this.state = 180;
	        this.end();
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



	elseif_directive() {
	    let localctx = new Elseif_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, VTLParser.RULE_elseif_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 182;
	        this.match(VTLParser.ELSEIF);
	        this.state = 183;
	        this.expression(0);
	        this.state = 184;
	        this.match(VTLParser.CPAR);
	        this.state = 185;
	        this.block();
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



	else_directive() {
	    let localctx = new Else_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, VTLParser.RULE_else_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 187;
	        this.match(VTLParser.ELSE);
	        this.state = 188;
	        this.block();
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



	foreach_directive() {
	    let localctx = new Foreach_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, VTLParser.RULE_foreach_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 190;
	        this.match(VTLParser.FOREACH);
	        this.state = 191;
	        this.variable();
	        this.state = 192;
	        this.match(VTLParser.K_IN);
	        this.state = 193;
	        this.expression(0);
	        this.state = 194;
	        this.match(VTLParser.CPAR);
	        this.state = 195;
	        this.block();
	        this.state = 196;
	        this.end();
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



	break_directive() {
	    let localctx = new Break_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, VTLParser.RULE_break_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 198;
	        this.match(VTLParser.BREAK);
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



	stop_directive() {
	    let localctx = new Stop_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, VTLParser.RULE_stop_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 200;
	        this.match(VTLParser.STOP);
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



	custom_directive() {
	    let localctx = new Custom_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, VTLParser.RULE_custom_directive);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 202;
	        this.match(VTLParser.ID);
	        this.state = 210;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        if(la_===1) {
	            this.state = 206;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VTLParser.OBRACK) | (1 << VTLParser.OBRACE) | (1 << VTLParser.STRING) | (1 << VTLParser.INTEGER) | (1 << VTLParser.ID) | (1 << VTLParser.REFERENCE) | (1 << VTLParser.K_NULL) | (1 << VTLParser.SUB) | (1 << VTLParser.FLOAT) | (1 << VTLParser.EXCL))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (VTLParser.K_LT - 32)) | (1 << (VTLParser.K_LE - 32)) | (1 << (VTLParser.K_GT - 32)) | (1 << (VTLParser.K_GE - 32)) | (1 << (VTLParser.K_EQ - 32)) | (1 << (VTLParser.K_NE - 32)) | (1 << (VTLParser.K_TRUE - 32)) | (1 << (VTLParser.K_FALSE - 32)) | (1 << (VTLParser.K_AND - 32)) | (1 << (VTLParser.K_OR - 32)) | (1 << (VTLParser.K_NOT - 32)) | (1 << (VTLParser.K_IN - 32)) | (1 << (VTLParser.DOLLAR_EXCL - 32)) | (1 << (VTLParser.DOLLAR - 32)))) !== 0)) {
	                this.state = 203;
	                this.expression(0);
	                this.state = 208;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 209;
	            this.match(VTLParser.CPAR);

	        }
	        this.state = 215;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        if(la_===1) {
	            this.state = 212;
	            this.block();
	            this.state = 213;
	            this.end();

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



	macro_directive() {
	    let localctx = new Macro_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, VTLParser.RULE_macro_directive);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
	        this.match(VTLParser.MACRO);
	        this.state = 221;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VTLParser.OBRACK) | (1 << VTLParser.OBRACE) | (1 << VTLParser.STRING) | (1 << VTLParser.INTEGER) | (1 << VTLParser.ID) | (1 << VTLParser.REFERENCE) | (1 << VTLParser.K_NULL) | (1 << VTLParser.SUB) | (1 << VTLParser.FLOAT) | (1 << VTLParser.EXCL))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (VTLParser.K_LT - 32)) | (1 << (VTLParser.K_LE - 32)) | (1 << (VTLParser.K_GT - 32)) | (1 << (VTLParser.K_GE - 32)) | (1 << (VTLParser.K_EQ - 32)) | (1 << (VTLParser.K_NE - 32)) | (1 << (VTLParser.K_TRUE - 32)) | (1 << (VTLParser.K_FALSE - 32)) | (1 << (VTLParser.K_AND - 32)) | (1 << (VTLParser.K_OR - 32)) | (1 << (VTLParser.K_NOT - 32)) | (1 << (VTLParser.K_IN - 32)) | (1 << (VTLParser.DOLLAR_EXCL - 32)) | (1 << (VTLParser.DOLLAR - 32)))) !== 0)) {
	            this.state = 218;
	            this.expression(0);
	            this.state = 223;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 224;
	        this.match(VTLParser.CPAR);
	        this.state = 225;
	        this.block();
	        this.state = 226;
	        this.end();
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



	parse_directive() {
	    let localctx = new Parse_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, VTLParser.RULE_parse_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 228;
	        this.match(VTLParser.PARSE);
	        this.state = 229;
	        this.expression(0);
	        this.state = 230;
	        this.match(VTLParser.CPAR);
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
	    this.enterRule(localctx, 40, VTLParser.RULE_define_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 232;
	        this.match(VTLParser.DEFINE);
	        this.state = 233;
	        this.expression(0);
	        this.state = 234;
	        this.match(VTLParser.CPAR);
	        this.state = 235;
	        this.block();
	        this.state = 236;
	        this.end();
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
	    this.enterRule(localctx, 42, VTLParser.RULE_include_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        this.match(VTLParser.INCLUDE);
	        this.state = 239;
	        this.expressions();
	        this.state = 240;
	        this.match(VTLParser.CPAR);
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



	evaluate_directive() {
	    let localctx = new Evaluate_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, VTLParser.RULE_evaluate_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 242;
	        this.match(VTLParser.EVALUATE);
	        this.state = 243;
	        this.expression(0);
	        this.state = 244;
	        this.match(VTLParser.CPAR);
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



	macro_call_directive() {
	    let localctx = new Macro_call_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, VTLParser.RULE_macro_call_directive);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 246;
	        this.match(VTLParser.MACRO_ID);
	        this.state = 250;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VTLParser.OBRACK) | (1 << VTLParser.OBRACE) | (1 << VTLParser.STRING) | (1 << VTLParser.INTEGER) | (1 << VTLParser.ID) | (1 << VTLParser.REFERENCE) | (1 << VTLParser.K_NULL) | (1 << VTLParser.SUB) | (1 << VTLParser.FLOAT) | (1 << VTLParser.EXCL))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (VTLParser.K_LT - 32)) | (1 << (VTLParser.K_LE - 32)) | (1 << (VTLParser.K_GT - 32)) | (1 << (VTLParser.K_GE - 32)) | (1 << (VTLParser.K_EQ - 32)) | (1 << (VTLParser.K_NE - 32)) | (1 << (VTLParser.K_TRUE - 32)) | (1 << (VTLParser.K_FALSE - 32)) | (1 << (VTLParser.K_AND - 32)) | (1 << (VTLParser.K_OR - 32)) | (1 << (VTLParser.K_NOT - 32)) | (1 << (VTLParser.K_IN - 32)) | (1 << (VTLParser.DOLLAR_EXCL - 32)) | (1 << (VTLParser.DOLLAR - 32)))) !== 0)) {
	            this.state = 247;
	            this.expression(0);
	            this.state = 252;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 253;
	        this.match(VTLParser.CPAR);
	        this.state = 254;
	        this.block();
	        this.state = 255;
	        this.end();
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



	end() {
	    let localctx = new EndContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, VTLParser.RULE_end);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 257;
	        this.match(VTLParser.END);
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


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 50;
	    this.enterRecursionRule(localctx, 50, VTLParser.RULE_expression, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 273;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 260;
	            _la = this._input.LA(1);
	            if(!(_la===VTLParser.EXCL || _la===VTLParser.K_NOT)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 261;
	            this.expression(18);
	            break;

	        case 2:
	            this.state = 262;
	            this.match(VTLParser.SUB);
	            this.state = 263;
	            this.expression(17);
	            break;

	        case 3:
	            this.state = 264;
	            this.list();
	            break;

	        case 4:
	            this.state = 265;
	            this.map();
	            break;

	        case 5:
	            this.state = 266;
	            this.property_or_method();
	            break;

	        case 6:
	            this.state = 267;
	            this.variable();
	            break;

	        case 7:
	            this.state = 268;
	            this.id();
	            break;

	        case 8:
	            this.state = 269;
	            this.match(VTLParser.STRING);
	            break;

	        case 9:
	            this.state = 270;
	            this.match(VTLParser.INTEGER);
	            break;

	        case 10:
	            this.state = 271;
	            this.match(VTLParser.FLOAT);
	            break;

	        case 11:
	            this.state = 272;
	            this.match(VTLParser.K_NULL);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 298;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 296;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, VTLParser.RULE_expression);
	                    this.state = 275;
	                    if (!( this.precpred(this._ctx, 16))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
	                    }
	                    this.state = 276;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VTLParser.MUL) | (1 << VTLParser.DIV) | (1 << VTLParser.MOD))) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 277;
	                    this.expression(17);
	                    break;

	                case 2:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, VTLParser.RULE_expression);
	                    this.state = 278;
	                    if (!( this.precpred(this._ctx, 15))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
	                    }
	                    this.state = 279;
	                    _la = this._input.LA(1);
	                    if(!(_la===VTLParser.ADD || _la===VTLParser.SUB)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 280;
	                    this.expression(16);
	                    break;

	                case 3:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, VTLParser.RULE_expression);
	                    this.state = 281;
	                    if (!( this.precpred(this._ctx, 14))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
	                    }
	                    this.state = 282;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 14)) & ~0x1f) == 0 && ((1 << (_la - 14)) & ((1 << (VTLParser.EQ - 14)) | (1 << (VTLParser.NE - 14)) | (1 << (VTLParser.K_EQ - 14)) | (1 << (VTLParser.K_NE - 14)))) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 283;
	                    this.expression(15);
	                    break;

	                case 4:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, VTLParser.RULE_expression);
	                    this.state = 284;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 285;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 27)) & ~0x1f) == 0 && ((1 << (_la - 27)) & ((1 << (VTLParser.LT - 27)) | (1 << (VTLParser.LE - 27)) | (1 << (VTLParser.GT - 27)) | (1 << (VTLParser.GE - 27)) | (1 << (VTLParser.K_LT - 27)) | (1 << (VTLParser.K_LE - 27)) | (1 << (VTLParser.K_GT - 27)) | (1 << (VTLParser.K_GE - 27)))) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 286;
	                    this.expression(14);
	                    break;

	                case 5:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, VTLParser.RULE_expression);
	                    this.state = 287;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 288;
	                    _la = this._input.LA(1);
	                    if(!(_la===VTLParser.AND || _la===VTLParser.K_AND)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 289;
	                    this.expression(13);
	                    break;

	                case 6:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, VTLParser.RULE_expression);
	                    this.state = 290;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 291;
	                    _la = this._input.LA(1);
	                    if(!(_la===VTLParser.OR || _la===VTLParser.K_OR)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 292;
	                    this.expression(12);
	                    break;

	                case 7:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, VTLParser.RULE_expression);
	                    this.state = 293;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 294;
	                    this.match(VTLParser.RANGE);
	                    this.state = 295;
	                    this.expression(11);
	                    break;

	                } 
	            }
	            this.state = 300;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	list() {
	    let localctx = new ListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, VTLParser.RULE_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 301;
	        this.match(VTLParser.OBRACK);
	        this.state = 303;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VTLParser.OBRACK) | (1 << VTLParser.OBRACE) | (1 << VTLParser.STRING) | (1 << VTLParser.INTEGER) | (1 << VTLParser.ID) | (1 << VTLParser.REFERENCE) | (1 << VTLParser.K_NULL) | (1 << VTLParser.SUB) | (1 << VTLParser.FLOAT) | (1 << VTLParser.EXCL))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (VTLParser.K_LT - 32)) | (1 << (VTLParser.K_LE - 32)) | (1 << (VTLParser.K_GT - 32)) | (1 << (VTLParser.K_GE - 32)) | (1 << (VTLParser.K_EQ - 32)) | (1 << (VTLParser.K_NE - 32)) | (1 << (VTLParser.K_TRUE - 32)) | (1 << (VTLParser.K_FALSE - 32)) | (1 << (VTLParser.K_AND - 32)) | (1 << (VTLParser.K_OR - 32)) | (1 << (VTLParser.K_NOT - 32)) | (1 << (VTLParser.K_IN - 32)) | (1 << (VTLParser.DOLLAR_EXCL - 32)) | (1 << (VTLParser.DOLLAR - 32)))) !== 0)) {
	            this.state = 302;
	            this.expressions();
	        }

	        this.state = 305;
	        this.match(VTLParser.CBRACK);
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



	map() {
	    let localctx = new MapContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, VTLParser.RULE_map);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 307;
	        this.match(VTLParser.OBRACE);
	        this.state = 309;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VTLParser.OBRACK) | (1 << VTLParser.OBRACE) | (1 << VTLParser.STRING) | (1 << VTLParser.INTEGER) | (1 << VTLParser.ID) | (1 << VTLParser.REFERENCE) | (1 << VTLParser.K_NULL) | (1 << VTLParser.SUB) | (1 << VTLParser.FLOAT) | (1 << VTLParser.EXCL))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (VTLParser.K_LT - 32)) | (1 << (VTLParser.K_LE - 32)) | (1 << (VTLParser.K_GT - 32)) | (1 << (VTLParser.K_GE - 32)) | (1 << (VTLParser.K_EQ - 32)) | (1 << (VTLParser.K_NE - 32)) | (1 << (VTLParser.K_TRUE - 32)) | (1 << (VTLParser.K_FALSE - 32)) | (1 << (VTLParser.K_AND - 32)) | (1 << (VTLParser.K_OR - 32)) | (1 << (VTLParser.K_NOT - 32)) | (1 << (VTLParser.K_IN - 32)) | (1 << (VTLParser.DOLLAR_EXCL - 32)) | (1 << (VTLParser.DOLLAR - 32)))) !== 0)) {
	            this.state = 308;
	            this.map_entries();
	        }

	        this.state = 311;
	        this.match(VTLParser.CBRACE);
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



	map_entries() {
	    let localctx = new Map_entriesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, VTLParser.RULE_map_entries);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 313;
	        this.map_entry();
	        this.state = 318;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===VTLParser.COMMA) {
	            this.state = 314;
	            this.match(VTLParser.COMMA);
	            this.state = 315;
	            this.map_entry();
	            this.state = 320;
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



	map_entry() {
	    let localctx = new Map_entryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, VTLParser.RULE_map_entry);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 321;
	        this.expression(0);
	        this.state = 322;
	        this.match(VTLParser.COLON);
	        this.state = 323;
	        this.expression(0);
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



	id() {
	    let localctx = new IdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, VTLParser.RULE_id);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 325;
	        _la = this._input.LA(1);
	        if(!(_la===VTLParser.ID || _la===VTLParser.K_NULL || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (VTLParser.K_LT - 32)) | (1 << (VTLParser.K_LE - 32)) | (1 << (VTLParser.K_GT - 32)) | (1 << (VTLParser.K_GE - 32)) | (1 << (VTLParser.K_EQ - 32)) | (1 << (VTLParser.K_NE - 32)) | (1 << (VTLParser.K_TRUE - 32)) | (1 << (VTLParser.K_FALSE - 32)) | (1 << (VTLParser.K_AND - 32)) | (1 << (VTLParser.K_OR - 32)) | (1 << (VTLParser.K_NOT - 32)) | (1 << (VTLParser.K_IN - 32)))) !== 0))) {
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


}

VTLParser.EOF = antlr4.Token.EOF;
VTLParser.OPAR = 1;
VTLParser.CPAR = 2;
VTLParser.OBRACK = 3;
VTLParser.CBRACK = 4;
VTLParser.OBRACE = 5;
VTLParser.CBRACE = 6;
VTLParser.STRING = 7;
VTLParser.INTEGER = 8;
VTLParser.ID = 9;
VTLParser.REFERENCE = 10;
VTLParser.DOT = 11;
VTLParser.COMMA = 12;
VTLParser.ASSIGN = 13;
VTLParser.EQ = 14;
VTLParser.NE = 15;
VTLParser.AND = 16;
VTLParser.OR = 17;
VTLParser.K_NULL = 18;
VTLParser.ADD = 19;
VTLParser.SUB = 20;
VTLParser.MUL = 21;
VTLParser.DIV = 22;
VTLParser.MOD = 23;
VTLParser.COLON = 24;
VTLParser.FLOAT = 25;
VTLParser.RANGE = 26;
VTLParser.LT = 27;
VTLParser.LE = 28;
VTLParser.GT = 29;
VTLParser.GE = 30;
VTLParser.EXCL = 31;
VTLParser.K_LT = 32;
VTLParser.K_LE = 33;
VTLParser.K_GT = 34;
VTLParser.K_GE = 35;
VTLParser.K_EQ = 36;
VTLParser.K_NE = 37;
VTLParser.K_TRUE = 38;
VTLParser.K_FALSE = 39;
VTLParser.K_AND = 40;
VTLParser.K_OR = 41;
VTLParser.K_NOT = 42;
VTLParser.K_IN = 43;
VTLParser.IF = 44;
VTLParser.ELSEIF = 45;
VTLParser.ELSE = 46;
VTLParser.FOREACH = 47;
VTLParser.SET = 48;
VTLParser.END = 49;
VTLParser.BREAK = 50;
VTLParser.MACRO_ID = 51;
VTLParser.MACRO = 52;
VTLParser.STOP = 53;
VTLParser.INCLUDE = 54;
VTLParser.EVALUATE = 55;
VTLParser.PARSE = 56;
VTLParser.DEFINE = 57;
VTLParser.ESCAPED_CHAR = 58;
VTLParser.START_DIRECTIVE = 59;
VTLParser.DOLLAR_EXCL_OBRACE = 60;
VTLParser.DOLLAR_OBRACE = 61;
VTLParser.DOLLAR_EXCL = 62;
VTLParser.DOLLAR = 63;
VTLParser.TEXT = 64;
VTLParser.ESCAPED_BLOCK = 65;
VTLParser.SNGLE_LINE_COMMENT = 66;
VTLParser.VTL_COMMENT_BLOCK = 67;
VTLParser.MULTI_LINE_COMMENT = 68;
VTLParser.VAR_HASH = 69;
VTLParser.CODE_SPACES = 70;
VTLParser.FRM_DOT = 71;
VTLParser.FRM_CBRACE = 72;
VTLParser.CODE_K_LT = 73;
VTLParser.CODE_K_LE = 74;
VTLParser.CODE_K_GT = 75;
VTLParser.CODE_K_GE = 76;
VTLParser.CODE_K_EQ = 77;
VTLParser.CODE_K_NE = 78;
VTLParser.CODE_K_TRUE = 79;
VTLParser.CODE_K_FALSE = 80;
VTLParser.CODE_K_AND = 81;
VTLParser.CODE_K_OR = 82;
VTLParser.CODE_K_NOT = 83;
VTLParser.CODE_K_NULL = 84;
VTLParser.CODE_K_IN = 85;
VTLParser.CODE_ADD = 86;
VTLParser.CODE_SUB = 87;
VTLParser.CODE_MUL = 88;
VTLParser.CODE_DIV = 89;
VTLParser.CODE_MOD = 90;
VTLParser.CODE_EXCL = 91;
VTLParser.CODE_OR = 92;
VTLParser.CODE_AND = 93;
VTLParser.CODE_ASSIGN = 94;
VTLParser.CODE_EQ = 95;
VTLParser.CODE_NEQ = 96;
VTLParser.CODE_LT = 97;
VTLParser.CODE_LE = 98;
VTLParser.CODE_GT = 99;
VTLParser.CODE_GE = 100;
VTLParser.CODE_CPAR = 101;
VTLParser.CODE_COLON = 102;
VTLParser.CODE_RANGE = 103;
VTLParser.CODE_OBRACK = 104;
VTLParser.CODE_CBRACK = 105;
VTLParser.CODE_OBRACE = 106;
VTLParser.CODE_COMMA = 107;

VTLParser.RULE_parse = 0;
VTLParser.RULE_block = 1;
VTLParser.RULE_atom = 2;
VTLParser.RULE_formal = 3;
VTLParser.RULE_variable = 4;
VTLParser.RULE_property_or_method = 5;
VTLParser.RULE_formal_property_or_method = 6;
VTLParser.RULE_directive = 7;
VTLParser.RULE_property_end = 8;
VTLParser.RULE_expressions = 9;
VTLParser.RULE_set_directive = 10;
VTLParser.RULE_if_directive = 11;
VTLParser.RULE_elseif_directive = 12;
VTLParser.RULE_else_directive = 13;
VTLParser.RULE_foreach_directive = 14;
VTLParser.RULE_break_directive = 15;
VTLParser.RULE_stop_directive = 16;
VTLParser.RULE_custom_directive = 17;
VTLParser.RULE_macro_directive = 18;
VTLParser.RULE_parse_directive = 19;
VTLParser.RULE_define_directive = 20;
VTLParser.RULE_include_directive = 21;
VTLParser.RULE_evaluate_directive = 22;
VTLParser.RULE_macro_call_directive = 23;
VTLParser.RULE_end = 24;
VTLParser.RULE_expression = 25;
VTLParser.RULE_list = 26;
VTLParser.RULE_map = 27;
VTLParser.RULE_map_entries = 28;
VTLParser.RULE_map_entry = 29;
VTLParser.RULE_id = 30;

class ParseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VTLParser.RULE_parse;
    }

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	EOF() {
	    return this.getToken(VTLParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.enterParse(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.exitParse(this);
		}
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VTLParser.RULE_block;
    }

	atom = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AtomContext);
	    } else {
	        return this.getTypedRuleContext(AtomContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.exitBlock(this);
		}
	}


}



class AtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VTLParser.RULE_atom;
    }

	TEXT() {
	    return this.getToken(VTLParser.TEXT, 0);
	};

	ESCAPED_CHAR() {
	    return this.getToken(VTLParser.ESCAPED_CHAR, 0);
	};

	ESCAPED_BLOCK() {
	    return this.getToken(VTLParser.ESCAPED_BLOCK, 0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	formal() {
	    return this.getTypedRuleContext(FormalContext,0);
	};

	property_or_method() {
	    return this.getTypedRuleContext(Property_or_methodContext,0);
	};

	directive() {
	    return this.getTypedRuleContext(DirectiveContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.exitAtom(this);
		}
	}


}



class FormalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VTLParser.RULE_formal;
    }

	DOLLAR_OBRACE() {
	    return this.getToken(VTLParser.DOLLAR_OBRACE, 0);
	};

	formal_property_or_method() {
	    return this.getTypedRuleContext(Formal_property_or_methodContext,0);
	};

	CBRACE() {
	    return this.getToken(VTLParser.CBRACE, 0);
	};

	DOLLAR_EXCL_OBRACE() {
	    return this.getToken(VTLParser.DOLLAR_EXCL_OBRACE, 0);
	};

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.enterFormal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.exitFormal(this);
		}
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VTLParser.RULE_variable;
    }

	DOLLAR() {
	    return this.getToken(VTLParser.DOLLAR, 0);
	};

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	DOT() {
	    return this.getToken(VTLParser.DOT, 0);
	};

	DOLLAR_EXCL() {
	    return this.getToken(VTLParser.DOLLAR_EXCL, 0);
	};

	REFERENCE() {
	    return this.getToken(VTLParser.REFERENCE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.exitVariable(this);
		}
	}


}



class Property_or_methodContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VTLParser.RULE_property_or_method;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	property_end = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Property_endContext);
	    } else {
	        return this.getTypedRuleContext(Property_endContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.enterProperty_or_method(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.exitProperty_or_method(this);
		}
	}


}



class Formal_property_or_methodContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VTLParser.RULE_formal_property_or_method;
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	property_end = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Property_endContext);
	    } else {
	        return this.getTypedRuleContext(Property_endContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.enterFormal_property_or_method(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.exitFormal_property_or_method(this);
		}
	}


}



class DirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VTLParser.RULE_directive;
    }

	set_directive() {
	    return this.getTypedRuleContext(Set_directiveContext,0);
	};

	if_directive() {
	    return this.getTypedRuleContext(If_directiveContext,0);
	};

	foreach_directive() {
	    return this.getTypedRuleContext(Foreach_directiveContext,0);
	};

	break_directive() {
	    return this.getTypedRuleContext(Break_directiveContext,0);
	};

	stop_directive() {
	    return this.getTypedRuleContext(Stop_directiveContext,0);
	};

	macro_directive() {
	    return this.getTypedRuleContext(Macro_directiveContext,0);
	};

	parse_directive() {
	    return this.getTypedRuleContext(Parse_directiveContext,0);
	};

	define_directive() {
	    return this.getTypedRuleContext(Define_directiveContext,0);
	};

	include_directive() {
	    return this.getTypedRuleContext(Include_directiveContext,0);
	};

	evaluate_directive() {
	    return this.getTypedRuleContext(Evaluate_directiveContext,0);
	};

	macro_call_directive() {
	    return this.getTypedRuleContext(Macro_call_directiveContext,0);
	};

	custom_directive() {
	    return this.getTypedRuleContext(Custom_directiveContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.enterDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.exitDirective(this);
		}
	}


}



class Property_endContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VTLParser.RULE_property_end;
    }

	DOT() {
	    return this.getToken(VTLParser.DOT, 0);
	};

	ID() {
	    return this.getToken(VTLParser.ID, 0);
	};

	OBRACK() {
	    return this.getToken(VTLParser.OBRACK, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CBRACK() {
	    return this.getToken(VTLParser.CBRACK, 0);
	};

	OPAR() {
	    return this.getToken(VTLParser.OPAR, 0);
	};

	CPAR() {
	    return this.getToken(VTLParser.CPAR, 0);
	};

	expressions() {
	    return this.getTypedRuleContext(ExpressionsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.enterProperty_end(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.exitProperty_end(this);
		}
	}


}



class ExpressionsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VTLParser.RULE_expressions;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VTLParser.COMMA);
	    } else {
	        return this.getToken(VTLParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.enterExpressions(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.exitExpressions(this);
		}
	}


}



class Set_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VTLParser.RULE_set_directive;
    }

	SET() {
	    return this.getToken(VTLParser.SET, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	ASSIGN() {
	    return this.getToken(VTLParser.ASSIGN, 0);
	};

	CPAR() {
	    return this.getToken(VTLParser.CPAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.enterSet_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.exitSet_directive(this);
		}
	}


}



class If_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VTLParser.RULE_if_directive;
    }

	IF() {
	    return this.getToken(VTLParser.IF, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CPAR() {
	    return this.getToken(VTLParser.CPAR, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	end() {
	    return this.getTypedRuleContext(EndContext,0);
	};

	elseif_directive = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Elseif_directiveContext);
	    } else {
	        return this.getTypedRuleContext(Elseif_directiveContext,i);
	    }
	};

	else_directive() {
	    return this.getTypedRuleContext(Else_directiveContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.enterIf_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.exitIf_directive(this);
		}
	}


}



class Elseif_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VTLParser.RULE_elseif_directive;
    }

	ELSEIF() {
	    return this.getToken(VTLParser.ELSEIF, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CPAR() {
	    return this.getToken(VTLParser.CPAR, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.enterElseif_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.exitElseif_directive(this);
		}
	}


}



class Else_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VTLParser.RULE_else_directive;
    }

	ELSE() {
	    return this.getToken(VTLParser.ELSE, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.enterElse_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.exitElse_directive(this);
		}
	}


}



class Foreach_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VTLParser.RULE_foreach_directive;
    }

	FOREACH() {
	    return this.getToken(VTLParser.FOREACH, 0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	K_IN() {
	    return this.getToken(VTLParser.K_IN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CPAR() {
	    return this.getToken(VTLParser.CPAR, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	end() {
	    return this.getTypedRuleContext(EndContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.enterForeach_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.exitForeach_directive(this);
		}
	}


}



class Break_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VTLParser.RULE_break_directive;
    }

	BREAK() {
	    return this.getToken(VTLParser.BREAK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.enterBreak_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.exitBreak_directive(this);
		}
	}


}



class Stop_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VTLParser.RULE_stop_directive;
    }

	STOP() {
	    return this.getToken(VTLParser.STOP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.enterStop_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.exitStop_directive(this);
		}
	}


}



class Custom_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VTLParser.RULE_custom_directive;
    }

	ID() {
	    return this.getToken(VTLParser.ID, 0);
	};

	CPAR() {
	    return this.getToken(VTLParser.CPAR, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	end() {
	    return this.getTypedRuleContext(EndContext,0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.enterCustom_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.exitCustom_directive(this);
		}
	}


}



class Macro_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VTLParser.RULE_macro_directive;
    }

	MACRO() {
	    return this.getToken(VTLParser.MACRO, 0);
	};

	CPAR() {
	    return this.getToken(VTLParser.CPAR, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	end() {
	    return this.getTypedRuleContext(EndContext,0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.enterMacro_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.exitMacro_directive(this);
		}
	}


}



class Parse_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VTLParser.RULE_parse_directive;
    }

	PARSE() {
	    return this.getToken(VTLParser.PARSE, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CPAR() {
	    return this.getToken(VTLParser.CPAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.enterParse_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.exitParse_directive(this);
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
        this.ruleIndex = VTLParser.RULE_define_directive;
    }

	DEFINE() {
	    return this.getToken(VTLParser.DEFINE, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CPAR() {
	    return this.getToken(VTLParser.CPAR, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	end() {
	    return this.getTypedRuleContext(EndContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.enterDefine_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.exitDefine_directive(this);
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
        this.ruleIndex = VTLParser.RULE_include_directive;
    }

	INCLUDE() {
	    return this.getToken(VTLParser.INCLUDE, 0);
	};

	expressions() {
	    return this.getTypedRuleContext(ExpressionsContext,0);
	};

	CPAR() {
	    return this.getToken(VTLParser.CPAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.enterInclude_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.exitInclude_directive(this);
		}
	}


}



class Evaluate_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VTLParser.RULE_evaluate_directive;
    }

	EVALUATE() {
	    return this.getToken(VTLParser.EVALUATE, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CPAR() {
	    return this.getToken(VTLParser.CPAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.enterEvaluate_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.exitEvaluate_directive(this);
		}
	}


}



class Macro_call_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VTLParser.RULE_macro_call_directive;
    }

	MACRO_ID() {
	    return this.getToken(VTLParser.MACRO_ID, 0);
	};

	CPAR() {
	    return this.getToken(VTLParser.CPAR, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	end() {
	    return this.getTypedRuleContext(EndContext,0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.enterMacro_call_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.exitMacro_call_directive(this);
		}
	}


}



class EndContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VTLParser.RULE_end;
    }

	END() {
	    return this.getToken(VTLParser.END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.enterEnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.exitEnd(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VTLParser.RULE_expression;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	EXCL() {
	    return this.getToken(VTLParser.EXCL, 0);
	};

	K_NOT() {
	    return this.getToken(VTLParser.K_NOT, 0);
	};

	SUB() {
	    return this.getToken(VTLParser.SUB, 0);
	};

	list() {
	    return this.getTypedRuleContext(ListContext,0);
	};

	map() {
	    return this.getTypedRuleContext(MapContext,0);
	};

	property_or_method() {
	    return this.getTypedRuleContext(Property_or_methodContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	STRING() {
	    return this.getToken(VTLParser.STRING, 0);
	};

	INTEGER() {
	    return this.getToken(VTLParser.INTEGER, 0);
	};

	FLOAT() {
	    return this.getToken(VTLParser.FLOAT, 0);
	};

	K_NULL() {
	    return this.getToken(VTLParser.K_NULL, 0);
	};

	MUL() {
	    return this.getToken(VTLParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(VTLParser.DIV, 0);
	};

	MOD() {
	    return this.getToken(VTLParser.MOD, 0);
	};

	ADD() {
	    return this.getToken(VTLParser.ADD, 0);
	};

	EQ() {
	    return this.getToken(VTLParser.EQ, 0);
	};

	NE() {
	    return this.getToken(VTLParser.NE, 0);
	};

	K_EQ() {
	    return this.getToken(VTLParser.K_EQ, 0);
	};

	K_NE() {
	    return this.getToken(VTLParser.K_NE, 0);
	};

	LT() {
	    return this.getToken(VTLParser.LT, 0);
	};

	LE() {
	    return this.getToken(VTLParser.LE, 0);
	};

	GT() {
	    return this.getToken(VTLParser.GT, 0);
	};

	GE() {
	    return this.getToken(VTLParser.GE, 0);
	};

	K_LT() {
	    return this.getToken(VTLParser.K_LT, 0);
	};

	K_LE() {
	    return this.getToken(VTLParser.K_LE, 0);
	};

	K_GT() {
	    return this.getToken(VTLParser.K_GT, 0);
	};

	K_GE() {
	    return this.getToken(VTLParser.K_GE, 0);
	};

	AND() {
	    return this.getToken(VTLParser.AND, 0);
	};

	K_AND() {
	    return this.getToken(VTLParser.K_AND, 0);
	};

	OR() {
	    return this.getToken(VTLParser.OR, 0);
	};

	K_OR() {
	    return this.getToken(VTLParser.K_OR, 0);
	};

	RANGE() {
	    return this.getToken(VTLParser.RANGE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.exitExpression(this);
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
        this.ruleIndex = VTLParser.RULE_list;
    }

	OBRACK() {
	    return this.getToken(VTLParser.OBRACK, 0);
	};

	CBRACK() {
	    return this.getToken(VTLParser.CBRACK, 0);
	};

	expressions() {
	    return this.getTypedRuleContext(ExpressionsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.enterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.exitList(this);
		}
	}


}



class MapContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VTLParser.RULE_map;
    }

	OBRACE() {
	    return this.getToken(VTLParser.OBRACE, 0);
	};

	CBRACE() {
	    return this.getToken(VTLParser.CBRACE, 0);
	};

	map_entries() {
	    return this.getTypedRuleContext(Map_entriesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.enterMap(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.exitMap(this);
		}
	}


}



class Map_entriesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VTLParser.RULE_map_entries;
    }

	map_entry = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Map_entryContext);
	    } else {
	        return this.getTypedRuleContext(Map_entryContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VTLParser.COMMA);
	    } else {
	        return this.getToken(VTLParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.enterMap_entries(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.exitMap_entries(this);
		}
	}


}



class Map_entryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VTLParser.RULE_map_entry;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	COLON() {
	    return this.getToken(VTLParser.COLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.enterMap_entry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.exitMap_entry(this);
		}
	}


}



class IdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VTLParser.RULE_id;
    }

	ID() {
	    return this.getToken(VTLParser.ID, 0);
	};

	K_LT() {
	    return this.getToken(VTLParser.K_LT, 0);
	};

	K_LE() {
	    return this.getToken(VTLParser.K_LE, 0);
	};

	K_GT() {
	    return this.getToken(VTLParser.K_GT, 0);
	};

	K_GE() {
	    return this.getToken(VTLParser.K_GE, 0);
	};

	K_EQ() {
	    return this.getToken(VTLParser.K_EQ, 0);
	};

	K_NE() {
	    return this.getToken(VTLParser.K_NE, 0);
	};

	K_TRUE() {
	    return this.getToken(VTLParser.K_TRUE, 0);
	};

	K_FALSE() {
	    return this.getToken(VTLParser.K_FALSE, 0);
	};

	K_AND() {
	    return this.getToken(VTLParser.K_AND, 0);
	};

	K_OR() {
	    return this.getToken(VTLParser.K_OR, 0);
	};

	K_NOT() {
	    return this.getToken(VTLParser.K_NOT, 0);
	};

	K_NULL() {
	    return this.getToken(VTLParser.K_NULL, 0);
	};

	K_IN() {
	    return this.getToken(VTLParser.K_IN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.enterId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VTLParserListener ) {
	        listener.exitId(this);
		}
	}


}




VTLParser.ParseContext = ParseContext; 
VTLParser.BlockContext = BlockContext; 
VTLParser.AtomContext = AtomContext; 
VTLParser.FormalContext = FormalContext; 
VTLParser.VariableContext = VariableContext; 
VTLParser.Property_or_methodContext = Property_or_methodContext; 
VTLParser.Formal_property_or_methodContext = Formal_property_or_methodContext; 
VTLParser.DirectiveContext = DirectiveContext; 
VTLParser.Property_endContext = Property_endContext; 
VTLParser.ExpressionsContext = ExpressionsContext; 
VTLParser.Set_directiveContext = Set_directiveContext; 
VTLParser.If_directiveContext = If_directiveContext; 
VTLParser.Elseif_directiveContext = Elseif_directiveContext; 
VTLParser.Else_directiveContext = Else_directiveContext; 
VTLParser.Foreach_directiveContext = Foreach_directiveContext; 
VTLParser.Break_directiveContext = Break_directiveContext; 
VTLParser.Stop_directiveContext = Stop_directiveContext; 
VTLParser.Custom_directiveContext = Custom_directiveContext; 
VTLParser.Macro_directiveContext = Macro_directiveContext; 
VTLParser.Parse_directiveContext = Parse_directiveContext; 
VTLParser.Define_directiveContext = Define_directiveContext; 
VTLParser.Include_directiveContext = Include_directiveContext; 
VTLParser.Evaluate_directiveContext = Evaluate_directiveContext; 
VTLParser.Macro_call_directiveContext = Macro_call_directiveContext; 
VTLParser.EndContext = EndContext; 
VTLParser.ExpressionContext = ExpressionContext; 
VTLParser.ListContext = ListContext; 
VTLParser.MapContext = MapContext; 
VTLParser.Map_entriesContext = Map_entriesContext; 
VTLParser.Map_entryContext = Map_entryContext; 
VTLParser.IdContext = IdContext; 
