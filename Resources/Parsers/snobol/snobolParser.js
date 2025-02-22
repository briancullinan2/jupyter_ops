// Generated from ./snobol/snobol.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import snobolListener from './snobolListener.js';
const serializedATN = [4,1,55,376,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
1,0,4,0,86,8,0,11,0,12,0,87,1,1,3,1,91,8,1,1,1,1,1,1,2,3,2,96,8,2,1,2,1,
2,3,2,100,8,2,1,2,1,2,4,2,104,8,2,11,2,12,2,105,3,2,108,8,2,1,2,1,2,3,2,
112,8,2,1,2,1,2,1,2,3,2,117,8,2,1,3,1,3,1,4,3,4,122,8,4,1,4,1,4,1,4,1,4,
1,4,5,4,129,8,4,10,4,12,4,132,9,4,1,4,3,4,135,8,4,1,5,1,5,1,6,1,6,1,6,5,
6,142,8,6,10,6,12,6,145,9,6,1,7,1,7,1,7,5,7,150,8,7,10,7,12,7,153,9,7,1,
8,1,8,1,8,3,8,158,8,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,167,8,9,10,9,12,9,
170,9,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,178,8,9,1,10,1,10,1,10,1,10,1,10,1,10,
1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,
10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,207,8,10,1,11,1,11,1,11,1,11,1,11,
1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,
14,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,
1,17,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,
20,1,20,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,
1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,
26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,29,1,29,
1,29,1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,
32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,33,1,33,1,33,1,33,1,33,1,34,
1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,36,1,36,1,36,1,
36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,39,
1,39,1,39,1,39,1,39,1,40,3,40,364,8,40,1,40,1,40,1,40,3,40,369,8,40,1,40,
3,40,372,8,40,1,41,1,41,1,41,0,0,42,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,
76,78,80,82,0,6,2,0,47,47,53,53,1,0,48,49,1,0,40,41,1,0,42,43,2,0,48,49,
51,51,1,0,32,35,382,0,85,1,0,0,0,2,90,1,0,0,0,4,116,1,0,0,0,6,118,1,0,0,
0,8,121,1,0,0,0,10,136,1,0,0,0,12,138,1,0,0,0,14,146,1,0,0,0,16,154,1,0,
0,0,18,177,1,0,0,0,20,206,1,0,0,0,22,208,1,0,0,0,24,213,1,0,0,0,26,218,1,
0,0,0,28,223,1,0,0,0,30,228,1,0,0,0,32,233,1,0,0,0,34,238,1,0,0,0,36,243,
1,0,0,0,38,248,1,0,0,0,40,253,1,0,0,0,42,258,1,0,0,0,44,263,1,0,0,0,46,268,
1,0,0,0,48,273,1,0,0,0,50,278,1,0,0,0,52,283,1,0,0,0,54,288,1,0,0,0,56,293,
1,0,0,0,58,298,1,0,0,0,60,305,1,0,0,0,62,310,1,0,0,0,64,314,1,0,0,0,66,323,
1,0,0,0,68,328,1,0,0,0,70,333,1,0,0,0,72,340,1,0,0,0,74,347,1,0,0,0,76,352,
1,0,0,0,78,357,1,0,0,0,80,371,1,0,0,0,82,373,1,0,0,0,84,86,3,2,1,0,85,84,
1,0,0,0,86,87,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,1,1,0,0,0,89,91,3,4,
2,0,90,89,1,0,0,0,90,91,1,0,0,0,91,92,1,0,0,0,92,93,5,54,0,0,93,3,1,0,0,
0,94,96,3,6,3,0,95,94,1,0,0,0,95,96,1,0,0,0,96,97,1,0,0,0,97,99,3,8,4,0,
98,100,3,10,5,0,99,98,1,0,0,0,99,100,1,0,0,0,100,107,1,0,0,0,101,103,5,45,
0,0,102,104,3,12,6,0,103,102,1,0,0,0,104,105,1,0,0,0,105,103,1,0,0,0,105,
106,1,0,0,0,106,108,1,0,0,0,107,101,1,0,0,0,107,108,1,0,0,0,108,111,1,0,
0,0,109,110,5,46,0,0,110,112,3,80,40,0,111,109,1,0,0,0,111,112,1,0,0,0,112,
117,1,0,0,0,113,114,5,46,0,0,114,117,3,80,40,0,115,117,7,0,0,0,116,95,1,
0,0,0,116,113,1,0,0,0,116,115,1,0,0,0,117,5,1,0,0,0,118,119,5,50,0,0,119,
7,1,0,0,0,120,122,5,39,0,0,121,120,1,0,0,0,121,122,1,0,0,0,122,123,1,0,0,
0,123,134,5,50,0,0,124,125,5,1,0,0,125,130,5,50,0,0,126,127,5,36,0,0,127,
129,5,50,0,0,128,126,1,0,0,0,129,132,1,0,0,0,130,128,1,0,0,0,130,131,1,0,
0,0,131,133,1,0,0,0,132,130,1,0,0,0,133,135,5,2,0,0,134,124,1,0,0,0,134,
135,1,0,0,0,135,9,1,0,0,0,136,137,7,1,0,0,137,11,1,0,0,0,138,143,3,14,7,
0,139,140,7,2,0,0,140,142,3,14,7,0,141,139,1,0,0,0,142,145,1,0,0,0,143,141,
1,0,0,0,143,144,1,0,0,0,144,13,1,0,0,0,145,143,1,0,0,0,146,151,3,16,8,0,
147,148,7,3,0,0,148,150,3,16,8,0,149,147,1,0,0,0,150,153,1,0,0,0,151,149,
1,0,0,0,151,152,1,0,0,0,152,15,1,0,0,0,153,151,1,0,0,0,154,157,3,18,9,0,
155,156,5,44,0,0,156,158,3,12,6,0,157,155,1,0,0,0,157,158,1,0,0,0,158,17,
1,0,0,0,159,178,7,4,0,0,160,178,3,8,4,0,161,178,3,20,10,0,162,163,5,1,0,
0,163,168,3,12,6,0,164,165,5,36,0,0,165,167,3,12,6,0,166,164,1,0,0,0,167,
170,1,0,0,0,168,166,1,0,0,0,168,169,1,0,0,0,169,171,1,0,0,0,170,168,1,0,
0,0,171,172,5,2,0,0,172,178,1,0,0,0,173,174,5,37,0,0,174,175,3,12,6,0,175,
176,5,38,0,0,176,178,1,0,0,0,177,159,1,0,0,0,177,160,1,0,0,0,177,161,1,0,
0,0,177,162,1,0,0,0,177,173,1,0,0,0,178,19,1,0,0,0,179,207,3,22,11,0,180,
207,3,24,12,0,181,207,3,26,13,0,182,207,3,28,14,0,183,207,3,30,15,0,184,
207,3,34,17,0,185,207,3,36,18,0,186,207,3,38,19,0,187,207,3,40,20,0,188,
207,3,42,21,0,189,207,3,44,22,0,190,207,3,46,23,0,191,207,3,48,24,0,192,
207,3,50,25,0,193,207,3,52,26,0,194,207,3,54,27,0,195,207,3,56,28,0,196,
207,3,62,31,0,197,207,3,58,29,0,198,207,3,60,30,0,199,207,3,64,32,0,200,
207,3,66,33,0,201,207,3,68,34,0,202,207,3,70,35,0,203,207,3,76,38,0,204,
207,3,74,37,0,205,207,3,78,39,0,206,179,1,0,0,0,206,180,1,0,0,0,206,181,
1,0,0,0,206,182,1,0,0,0,206,183,1,0,0,0,206,184,1,0,0,0,206,185,1,0,0,0,
206,186,1,0,0,0,206,187,1,0,0,0,206,188,1,0,0,0,206,189,1,0,0,0,206,190,
1,0,0,0,206,191,1,0,0,0,206,192,1,0,0,0,206,193,1,0,0,0,206,194,1,0,0,0,
206,195,1,0,0,0,206,196,1,0,0,0,206,197,1,0,0,0,206,198,1,0,0,0,206,199,
1,0,0,0,206,200,1,0,0,0,206,201,1,0,0,0,206,202,1,0,0,0,206,203,1,0,0,0,
206,204,1,0,0,0,206,205,1,0,0,0,207,21,1,0,0,0,208,209,5,3,0,0,209,210,5,
37,0,0,210,211,3,12,6,0,211,212,5,38,0,0,212,23,1,0,0,0,213,214,5,4,0,0,
214,215,5,37,0,0,215,216,3,12,6,0,216,217,5,38,0,0,217,25,1,0,0,0,218,219,
5,5,0,0,219,220,5,37,0,0,220,221,3,12,6,0,221,222,5,38,0,0,222,27,1,0,0,
0,223,224,5,6,0,0,224,225,5,37,0,0,225,226,3,12,6,0,226,227,5,38,0,0,227,
29,1,0,0,0,228,229,5,7,0,0,229,230,5,37,0,0,230,231,3,12,6,0,231,232,5,38,
0,0,232,31,1,0,0,0,233,234,5,8,0,0,234,235,5,37,0,0,235,236,3,12,6,0,236,
237,5,38,0,0,237,33,1,0,0,0,238,239,5,9,0,0,239,240,5,37,0,0,240,241,3,12,
6,0,241,242,5,38,0,0,242,35,1,0,0,0,243,244,5,10,0,0,244,245,5,37,0,0,245,
246,3,12,6,0,246,247,5,38,0,0,247,37,1,0,0,0,248,249,5,11,0,0,249,250,5,
37,0,0,250,251,3,12,6,0,251,252,5,38,0,0,252,39,1,0,0,0,253,254,5,12,0,0,
254,255,5,37,0,0,255,256,3,12,6,0,256,257,5,38,0,0,257,41,1,0,0,0,258,259,
5,13,0,0,259,260,5,37,0,0,260,261,3,12,6,0,261,262,5,38,0,0,262,43,1,0,0,
0,263,264,5,14,0,0,264,265,5,37,0,0,265,266,3,12,6,0,266,267,5,38,0,0,267,
45,1,0,0,0,268,269,5,15,0,0,269,270,5,37,0,0,270,271,3,12,6,0,271,272,5,
38,0,0,272,47,1,0,0,0,273,274,5,16,0,0,274,275,5,37,0,0,275,276,3,12,6,0,
276,277,5,38,0,0,277,49,1,0,0,0,278,279,5,17,0,0,279,280,5,37,0,0,280,281,
3,12,6,0,281,282,5,38,0,0,282,51,1,0,0,0,283,284,5,18,0,0,284,285,5,37,0,
0,285,286,3,12,6,0,286,287,5,38,0,0,287,53,1,0,0,0,288,289,5,19,0,0,289,
290,5,37,0,0,290,291,3,12,6,0,291,292,5,38,0,0,292,55,1,0,0,0,293,294,5,
20,0,0,294,295,5,37,0,0,295,296,3,12,6,0,296,297,5,38,0,0,297,57,1,0,0,0,
298,299,5,21,0,0,299,300,5,37,0,0,300,301,3,12,6,0,301,302,5,36,0,0,302,
303,3,12,6,0,303,304,5,38,0,0,304,59,1,0,0,0,305,306,5,22,0,0,306,307,5,
37,0,0,307,308,3,12,6,0,308,309,5,38,0,0,309,61,1,0,0,0,310,311,5,23,0,0,
311,312,5,37,0,0,312,313,5,38,0,0,313,63,1,0,0,0,314,315,5,24,0,0,315,316,
5,37,0,0,316,317,3,12,6,0,317,318,5,36,0,0,318,319,3,12,6,0,319,320,5,36,
0,0,320,321,3,12,6,0,321,322,5,38,0,0,322,65,1,0,0,0,323,324,5,25,0,0,324,
325,5,37,0,0,325,326,3,12,6,0,326,327,5,38,0,0,327,67,1,0,0,0,328,329,5,
26,0,0,329,330,5,37,0,0,330,331,3,12,6,0,331,332,5,38,0,0,332,69,1,0,0,0,
333,334,5,27,0,0,334,335,5,37,0,0,335,336,3,12,6,0,336,337,5,36,0,0,337,
338,3,12,6,0,338,339,5,38,0,0,339,71,1,0,0,0,340,341,5,28,0,0,341,342,5,
37,0,0,342,343,3,12,6,0,343,344,5,36,0,0,344,345,3,12,6,0,345,346,5,38,0,
0,346,73,1,0,0,0,347,348,5,29,0,0,348,349,5,37,0,0,349,350,3,12,6,0,350,
351,5,38,0,0,351,75,1,0,0,0,352,353,5,30,0,0,353,354,5,37,0,0,354,355,3,
12,6,0,355,356,5,38,0,0,356,77,1,0,0,0,357,358,5,31,0,0,358,359,5,37,0,0,
359,360,3,12,6,0,360,361,5,38,0,0,361,79,1,0,0,0,362,364,3,82,41,0,363,362,
1,0,0,0,363,364,1,0,0,0,364,365,1,0,0,0,365,368,5,37,0,0,366,369,3,6,3,0,
367,369,5,47,0,0,368,366,1,0,0,0,368,367,1,0,0,0,369,370,1,0,0,0,370,372,
5,38,0,0,371,363,1,0,0,0,371,372,1,0,0,0,372,81,1,0,0,0,373,374,7,5,0,0,
374,83,1,0,0,0,20,87,90,95,99,105,107,111,116,121,130,134,143,151,157,168,
177,206,363,368,371];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class snobolParser extends antlr4.Parser {

    static grammarFileName = "snobol.g4";
    static literalNames = [ null, "'['", "']'", "'ident'", "'differ'", "'eq'", 
                            "'ne'", "'ge'", "'gt'", "'le'", "'lt'", "'integer'", 
                            "'lgt'", "'atan'", "'chop'", "'cos'", "'exp'", 
                            "'ln'", "'remdr'", "'sin'", "'tan'", "'dupl'", 
                            "'reverse'", "'date'", "'replace'", "'size'", 
                            "'trim'", "'array'", "'convert'", "'table'", 
                            "'sort'", "'break'", "'f'", "'F'", "'s'", "'S'", 
                            "','", "'('", "')'", "'&'", "'+'", "'-'", "'*'", 
                            "'/'", "'^'", "'='", "':'", "'END'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, "COMMA", "LPAREN", 
                             "RPAREN", "AMP", "PLUS", "MINUS", "TIMES", 
                             "DIV", "POW", "EQ", "COLON", "END", "STRINGLITERAL1", 
                             "STRINGLITERAL2", "STRING", "INTEGER", "REAL", 
                             "COMMENT", "EOL", "WS" ];
    static ruleNames = [ "prog", "lin", "line", "label", "subject", "pattern", 
                         "expression", "multiplyingExpression", "powExpression", 
                         "atom", "command", "ident", "differ", "eq", "ne", 
                         "ge", "gt", "le", "lt", "integer", "lgt", "atan", 
                         "chop", "cos", "exp", "ln", "remdr", "sin", "tan", 
                         "dupl", "reverse", "date", "replace", "size", "trim", 
                         "array_", "convert", "table", "sort", "break_", 
                         "transfer", "transferpre" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = snobolParser.ruleNames;
        this.literalNames = snobolParser.literalNames;
        this.symbolicNames = snobolParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, snobolParser.RULE_prog);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 84;
	            this.lin();
	            this.state = 87; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (snobolParser.AMP - 39)) | (1 << (snobolParser.COLON - 39)) | (1 << (snobolParser.END - 39)) | (1 << (snobolParser.STRING - 39)) | (1 << (snobolParser.COMMENT - 39)) | (1 << (snobolParser.EOL - 39)))) !== 0));
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



	lin() {
	    let localctx = new LinContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, snobolParser.RULE_lin);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (snobolParser.AMP - 39)) | (1 << (snobolParser.COLON - 39)) | (1 << (snobolParser.END - 39)) | (1 << (snobolParser.STRING - 39)) | (1 << (snobolParser.COMMENT - 39)))) !== 0)) {
	            this.state = 89;
	            this.line();
	        }

	        this.state = 92;
	        this.match(snobolParser.EOL);
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



	line() {
	    let localctx = new LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, snobolParser.RULE_line);
	    var _la = 0; // Token type
	    try {
	        this.state = 116;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case snobolParser.AMP:
	        case snobolParser.STRING:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 95;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	            if(la_===1) {
	                this.state = 94;
	                this.label();

	            }
	            this.state = 97;
	            this.subject();
	            this.state = 99;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===snobolParser.STRINGLITERAL1 || _la===snobolParser.STRINGLITERAL2) {
	                this.state = 98;
	                this.pattern();
	            }

	            this.state = 107;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===snobolParser.EQ) {
	                this.state = 101;
	                this.match(snobolParser.EQ);
	                this.state = 103; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                do {
	                    this.state = 102;
	                    this.expression();
	                    this.state = 105; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << snobolParser.T__0) | (1 << snobolParser.T__2) | (1 << snobolParser.T__3) | (1 << snobolParser.T__4) | (1 << snobolParser.T__5) | (1 << snobolParser.T__6) | (1 << snobolParser.T__8) | (1 << snobolParser.T__9) | (1 << snobolParser.T__10) | (1 << snobolParser.T__11) | (1 << snobolParser.T__12) | (1 << snobolParser.T__13) | (1 << snobolParser.T__14) | (1 << snobolParser.T__15) | (1 << snobolParser.T__16) | (1 << snobolParser.T__17) | (1 << snobolParser.T__18) | (1 << snobolParser.T__19) | (1 << snobolParser.T__20) | (1 << snobolParser.T__21) | (1 << snobolParser.T__22) | (1 << snobolParser.T__23) | (1 << snobolParser.T__24) | (1 << snobolParser.T__25) | (1 << snobolParser.T__26) | (1 << snobolParser.T__28) | (1 << snobolParser.T__29) | (1 << snobolParser.T__30))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (snobolParser.LPAREN - 37)) | (1 << (snobolParser.AMP - 37)) | (1 << (snobolParser.STRINGLITERAL1 - 37)) | (1 << (snobolParser.STRINGLITERAL2 - 37)) | (1 << (snobolParser.STRING - 37)) | (1 << (snobolParser.INTEGER - 37)))) !== 0));
	            }

	            this.state = 111;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===snobolParser.COLON) {
	                this.state = 109;
	                this.match(snobolParser.COLON);
	                this.state = 110;
	                this.transfer();
	            }

	            break;
	        case snobolParser.COLON:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 113;
	            this.match(snobolParser.COLON);
	            this.state = 114;
	            this.transfer();
	            break;
	        case snobolParser.END:
	        case snobolParser.COMMENT:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 115;
	            _la = this._input.LA(1);
	            if(!(_la===snobolParser.END || _la===snobolParser.COMMENT)) {
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



	label() {
	    let localctx = new LabelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, snobolParser.RULE_label);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        this.match(snobolParser.STRING);
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



	subject() {
	    let localctx = new SubjectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, snobolParser.RULE_subject);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===snobolParser.AMP) {
	            this.state = 120;
	            this.match(snobolParser.AMP);
	        }

	        this.state = 123;
	        this.match(snobolParser.STRING);
	        this.state = 134;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 124;
	            this.match(snobolParser.T__0);
	            this.state = 125;
	            this.match(snobolParser.STRING);
	            this.state = 130;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===snobolParser.COMMA) {
	                this.state = 126;
	                this.match(snobolParser.COMMA);
	                this.state = 127;
	                this.match(snobolParser.STRING);
	                this.state = 132;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 133;
	            this.match(snobolParser.T__1);

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



	pattern() {
	    let localctx = new PatternContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, snobolParser.RULE_pattern);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        _la = this._input.LA(1);
	        if(!(_la===snobolParser.STRINGLITERAL1 || _la===snobolParser.STRINGLITERAL2)) {
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



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, snobolParser.RULE_expression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        this.multiplyingExpression();
	        this.state = 143;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 139;
	                _la = this._input.LA(1);
	                if(!(_la===snobolParser.PLUS || _la===snobolParser.MINUS)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 140;
	                this.multiplyingExpression(); 
	            }
	            this.state = 145;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
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



	multiplyingExpression() {
	    let localctx = new MultiplyingExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, snobolParser.RULE_multiplyingExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        this.powExpression();
	        this.state = 151;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 147;
	                _la = this._input.LA(1);
	                if(!(_la===snobolParser.TIMES || _la===snobolParser.DIV)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 148;
	                this.powExpression(); 
	            }
	            this.state = 153;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
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



	powExpression() {
	    let localctx = new PowExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, snobolParser.RULE_powExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this.atom();
	        this.state = 157;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===snobolParser.POW) {
	            this.state = 155;
	            this.match(snobolParser.POW);
	            this.state = 156;
	            this.expression();
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
	    this.enterRule(localctx, 18, snobolParser.RULE_atom);
	    var _la = 0; // Token type
	    try {
	        this.state = 177;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case snobolParser.STRINGLITERAL1:
	        case snobolParser.STRINGLITERAL2:
	        case snobolParser.INTEGER:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 159;
	            _la = this._input.LA(1);
	            if(!(((((_la - 48)) & ~0x1f) == 0 && ((1 << (_la - 48)) & ((1 << (snobolParser.STRINGLITERAL1 - 48)) | (1 << (snobolParser.STRINGLITERAL2 - 48)) | (1 << (snobolParser.INTEGER - 48)))) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case snobolParser.AMP:
	        case snobolParser.STRING:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 160;
	            this.subject();
	            break;
	        case snobolParser.T__2:
	        case snobolParser.T__3:
	        case snobolParser.T__4:
	        case snobolParser.T__5:
	        case snobolParser.T__6:
	        case snobolParser.T__8:
	        case snobolParser.T__9:
	        case snobolParser.T__10:
	        case snobolParser.T__11:
	        case snobolParser.T__12:
	        case snobolParser.T__13:
	        case snobolParser.T__14:
	        case snobolParser.T__15:
	        case snobolParser.T__16:
	        case snobolParser.T__17:
	        case snobolParser.T__18:
	        case snobolParser.T__19:
	        case snobolParser.T__20:
	        case snobolParser.T__21:
	        case snobolParser.T__22:
	        case snobolParser.T__23:
	        case snobolParser.T__24:
	        case snobolParser.T__25:
	        case snobolParser.T__26:
	        case snobolParser.T__28:
	        case snobolParser.T__29:
	        case snobolParser.T__30:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 161;
	            this.command();
	            break;
	        case snobolParser.T__0:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 162;
	            this.match(snobolParser.T__0);
	            this.state = 163;
	            this.expression();
	            this.state = 168;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===snobolParser.COMMA) {
	                this.state = 164;
	                this.match(snobolParser.COMMA);
	                this.state = 165;
	                this.expression();
	                this.state = 170;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 171;
	            this.match(snobolParser.T__1);
	            break;
	        case snobolParser.LPAREN:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 173;
	            this.match(snobolParser.LPAREN);
	            this.state = 174;
	            this.expression();
	            this.state = 175;
	            this.match(snobolParser.RPAREN);
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



	command() {
	    let localctx = new CommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, snobolParser.RULE_command);
	    try {
	        this.state = 206;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case snobolParser.T__2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 179;
	            this.ident();
	            break;
	        case snobolParser.T__3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 180;
	            this.differ();
	            break;
	        case snobolParser.T__4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 181;
	            this.eq();
	            break;
	        case snobolParser.T__5:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 182;
	            this.ne();
	            break;
	        case snobolParser.T__6:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 183;
	            this.ge();
	            break;
	        case snobolParser.T__8:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 184;
	            this.le();
	            break;
	        case snobolParser.T__9:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 185;
	            this.lt();
	            break;
	        case snobolParser.T__10:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 186;
	            this.integer();
	            break;
	        case snobolParser.T__11:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 187;
	            this.lgt();
	            break;
	        case snobolParser.T__12:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 188;
	            this.atan();
	            break;
	        case snobolParser.T__13:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 189;
	            this.chop();
	            break;
	        case snobolParser.T__14:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 190;
	            this.cos();
	            break;
	        case snobolParser.T__15:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 191;
	            this.exp();
	            break;
	        case snobolParser.T__16:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 192;
	            this.ln();
	            break;
	        case snobolParser.T__17:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 193;
	            this.remdr();
	            break;
	        case snobolParser.T__18:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 194;
	            this.sin();
	            break;
	        case snobolParser.T__19:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 195;
	            this.tan();
	            break;
	        case snobolParser.T__22:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 196;
	            this.date();
	            break;
	        case snobolParser.T__20:
	            this.enterOuterAlt(localctx, 19);
	            this.state = 197;
	            this.dupl();
	            break;
	        case snobolParser.T__21:
	            this.enterOuterAlt(localctx, 20);
	            this.state = 198;
	            this.reverse();
	            break;
	        case snobolParser.T__23:
	            this.enterOuterAlt(localctx, 21);
	            this.state = 199;
	            this.replace();
	            break;
	        case snobolParser.T__24:
	            this.enterOuterAlt(localctx, 22);
	            this.state = 200;
	            this.size();
	            break;
	        case snobolParser.T__25:
	            this.enterOuterAlt(localctx, 23);
	            this.state = 201;
	            this.trim();
	            break;
	        case snobolParser.T__26:
	            this.enterOuterAlt(localctx, 24);
	            this.state = 202;
	            this.array_();
	            break;
	        case snobolParser.T__29:
	            this.enterOuterAlt(localctx, 25);
	            this.state = 203;
	            this.sort();
	            break;
	        case snobolParser.T__28:
	            this.enterOuterAlt(localctx, 26);
	            this.state = 204;
	            this.table();
	            break;
	        case snobolParser.T__30:
	            this.enterOuterAlt(localctx, 27);
	            this.state = 205;
	            this.break_();
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



	ident() {
	    let localctx = new IdentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, snobolParser.RULE_ident);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 208;
	        this.match(snobolParser.T__2);
	        this.state = 209;
	        this.match(snobolParser.LPAREN);
	        this.state = 210;
	        this.expression();
	        this.state = 211;
	        this.match(snobolParser.RPAREN);
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



	differ() {
	    let localctx = new DifferContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, snobolParser.RULE_differ);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 213;
	        this.match(snobolParser.T__3);
	        this.state = 214;
	        this.match(snobolParser.LPAREN);
	        this.state = 215;
	        this.expression();
	        this.state = 216;
	        this.match(snobolParser.RPAREN);
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



	eq() {
	    let localctx = new EqContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, snobolParser.RULE_eq);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 218;
	        this.match(snobolParser.T__4);
	        this.state = 219;
	        this.match(snobolParser.LPAREN);
	        this.state = 220;
	        this.expression();
	        this.state = 221;
	        this.match(snobolParser.RPAREN);
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



	ne() {
	    let localctx = new NeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, snobolParser.RULE_ne);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 223;
	        this.match(snobolParser.T__5);
	        this.state = 224;
	        this.match(snobolParser.LPAREN);
	        this.state = 225;
	        this.expression();
	        this.state = 226;
	        this.match(snobolParser.RPAREN);
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



	ge() {
	    let localctx = new GeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, snobolParser.RULE_ge);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 228;
	        this.match(snobolParser.T__6);
	        this.state = 229;
	        this.match(snobolParser.LPAREN);
	        this.state = 230;
	        this.expression();
	        this.state = 231;
	        this.match(snobolParser.RPAREN);
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



	gt() {
	    let localctx = new GtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, snobolParser.RULE_gt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 233;
	        this.match(snobolParser.T__7);
	        this.state = 234;
	        this.match(snobolParser.LPAREN);
	        this.state = 235;
	        this.expression();
	        this.state = 236;
	        this.match(snobolParser.RPAREN);
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



	le() {
	    let localctx = new LeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, snobolParser.RULE_le);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        this.match(snobolParser.T__8);
	        this.state = 239;
	        this.match(snobolParser.LPAREN);
	        this.state = 240;
	        this.expression();
	        this.state = 241;
	        this.match(snobolParser.RPAREN);
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



	lt() {
	    let localctx = new LtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, snobolParser.RULE_lt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 243;
	        this.match(snobolParser.T__9);
	        this.state = 244;
	        this.match(snobolParser.LPAREN);
	        this.state = 245;
	        this.expression();
	        this.state = 246;
	        this.match(snobolParser.RPAREN);
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



	integer() {
	    let localctx = new IntegerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, snobolParser.RULE_integer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 248;
	        this.match(snobolParser.T__10);
	        this.state = 249;
	        this.match(snobolParser.LPAREN);
	        this.state = 250;
	        this.expression();
	        this.state = 251;
	        this.match(snobolParser.RPAREN);
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



	lgt() {
	    let localctx = new LgtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, snobolParser.RULE_lgt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 253;
	        this.match(snobolParser.T__11);
	        this.state = 254;
	        this.match(snobolParser.LPAREN);
	        this.state = 255;
	        this.expression();
	        this.state = 256;
	        this.match(snobolParser.RPAREN);
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



	atan() {
	    let localctx = new AtanContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, snobolParser.RULE_atan);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
	        this.match(snobolParser.T__12);
	        this.state = 259;
	        this.match(snobolParser.LPAREN);
	        this.state = 260;
	        this.expression();
	        this.state = 261;
	        this.match(snobolParser.RPAREN);
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



	chop() {
	    let localctx = new ChopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, snobolParser.RULE_chop);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 263;
	        this.match(snobolParser.T__13);
	        this.state = 264;
	        this.match(snobolParser.LPAREN);
	        this.state = 265;
	        this.expression();
	        this.state = 266;
	        this.match(snobolParser.RPAREN);
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



	cos() {
	    let localctx = new CosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, snobolParser.RULE_cos);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 268;
	        this.match(snobolParser.T__14);
	        this.state = 269;
	        this.match(snobolParser.LPAREN);
	        this.state = 270;
	        this.expression();
	        this.state = 271;
	        this.match(snobolParser.RPAREN);
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



	exp() {
	    let localctx = new ExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, snobolParser.RULE_exp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 273;
	        this.match(snobolParser.T__15);
	        this.state = 274;
	        this.match(snobolParser.LPAREN);
	        this.state = 275;
	        this.expression();
	        this.state = 276;
	        this.match(snobolParser.RPAREN);
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



	ln() {
	    let localctx = new LnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, snobolParser.RULE_ln);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 278;
	        this.match(snobolParser.T__16);
	        this.state = 279;
	        this.match(snobolParser.LPAREN);
	        this.state = 280;
	        this.expression();
	        this.state = 281;
	        this.match(snobolParser.RPAREN);
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



	remdr() {
	    let localctx = new RemdrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, snobolParser.RULE_remdr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 283;
	        this.match(snobolParser.T__17);
	        this.state = 284;
	        this.match(snobolParser.LPAREN);
	        this.state = 285;
	        this.expression();
	        this.state = 286;
	        this.match(snobolParser.RPAREN);
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



	sin() {
	    let localctx = new SinContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, snobolParser.RULE_sin);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 288;
	        this.match(snobolParser.T__18);
	        this.state = 289;
	        this.match(snobolParser.LPAREN);
	        this.state = 290;
	        this.expression();
	        this.state = 291;
	        this.match(snobolParser.RPAREN);
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



	tan() {
	    let localctx = new TanContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, snobolParser.RULE_tan);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 293;
	        this.match(snobolParser.T__19);
	        this.state = 294;
	        this.match(snobolParser.LPAREN);
	        this.state = 295;
	        this.expression();
	        this.state = 296;
	        this.match(snobolParser.RPAREN);
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



	dupl() {
	    let localctx = new DuplContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, snobolParser.RULE_dupl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 298;
	        this.match(snobolParser.T__20);
	        this.state = 299;
	        this.match(snobolParser.LPAREN);
	        this.state = 300;
	        this.expression();
	        this.state = 301;
	        this.match(snobolParser.COMMA);
	        this.state = 302;
	        this.expression();
	        this.state = 303;
	        this.match(snobolParser.RPAREN);
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



	reverse() {
	    let localctx = new ReverseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, snobolParser.RULE_reverse);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 305;
	        this.match(snobolParser.T__21);
	        this.state = 306;
	        this.match(snobolParser.LPAREN);
	        this.state = 307;
	        this.expression();
	        this.state = 308;
	        this.match(snobolParser.RPAREN);
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



	date() {
	    let localctx = new DateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, snobolParser.RULE_date);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 310;
	        this.match(snobolParser.T__22);
	        this.state = 311;
	        this.match(snobolParser.LPAREN);
	        this.state = 312;
	        this.match(snobolParser.RPAREN);
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



	replace() {
	    let localctx = new ReplaceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, snobolParser.RULE_replace);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 314;
	        this.match(snobolParser.T__23);
	        this.state = 315;
	        this.match(snobolParser.LPAREN);
	        this.state = 316;
	        this.expression();
	        this.state = 317;
	        this.match(snobolParser.COMMA);
	        this.state = 318;
	        this.expression();
	        this.state = 319;
	        this.match(snobolParser.COMMA);
	        this.state = 320;
	        this.expression();
	        this.state = 321;
	        this.match(snobolParser.RPAREN);
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



	size() {
	    let localctx = new SizeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, snobolParser.RULE_size);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 323;
	        this.match(snobolParser.T__24);
	        this.state = 324;
	        this.match(snobolParser.LPAREN);
	        this.state = 325;
	        this.expression();
	        this.state = 326;
	        this.match(snobolParser.RPAREN);
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



	trim() {
	    let localctx = new TrimContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, snobolParser.RULE_trim);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 328;
	        this.match(snobolParser.T__25);
	        this.state = 329;
	        this.match(snobolParser.LPAREN);
	        this.state = 330;
	        this.expression();
	        this.state = 331;
	        this.match(snobolParser.RPAREN);
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



	array_() {
	    let localctx = new Array_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, snobolParser.RULE_array_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 333;
	        this.match(snobolParser.T__26);
	        this.state = 334;
	        this.match(snobolParser.LPAREN);
	        this.state = 335;
	        this.expression();
	        this.state = 336;
	        this.match(snobolParser.COMMA);
	        this.state = 337;
	        this.expression();
	        this.state = 338;
	        this.match(snobolParser.RPAREN);
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



	convert() {
	    let localctx = new ConvertContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, snobolParser.RULE_convert);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 340;
	        this.match(snobolParser.T__27);
	        this.state = 341;
	        this.match(snobolParser.LPAREN);
	        this.state = 342;
	        this.expression();
	        this.state = 343;
	        this.match(snobolParser.COMMA);
	        this.state = 344;
	        this.expression();
	        this.state = 345;
	        this.match(snobolParser.RPAREN);
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



	table() {
	    let localctx = new TableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, snobolParser.RULE_table);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 347;
	        this.match(snobolParser.T__28);
	        this.state = 348;
	        this.match(snobolParser.LPAREN);
	        this.state = 349;
	        this.expression();
	        this.state = 350;
	        this.match(snobolParser.RPAREN);
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



	sort() {
	    let localctx = new SortContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, snobolParser.RULE_sort);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 352;
	        this.match(snobolParser.T__29);
	        this.state = 353;
	        this.match(snobolParser.LPAREN);
	        this.state = 354;
	        this.expression();
	        this.state = 355;
	        this.match(snobolParser.RPAREN);
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



	break_() {
	    let localctx = new Break_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, snobolParser.RULE_break_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 357;
	        this.match(snobolParser.T__30);
	        this.state = 358;
	        this.match(snobolParser.LPAREN);
	        this.state = 359;
	        this.expression();
	        this.state = 360;
	        this.match(snobolParser.RPAREN);
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



	transfer() {
	    let localctx = new TransferContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, snobolParser.RULE_transfer);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 371;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (snobolParser.T__31 - 32)) | (1 << (snobolParser.T__32 - 32)) | (1 << (snobolParser.T__33 - 32)) | (1 << (snobolParser.T__34 - 32)) | (1 << (snobolParser.LPAREN - 32)))) !== 0)) {
	            this.state = 363;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (snobolParser.T__31 - 32)) | (1 << (snobolParser.T__32 - 32)) | (1 << (snobolParser.T__33 - 32)) | (1 << (snobolParser.T__34 - 32)))) !== 0)) {
	                this.state = 362;
	                this.transferpre();
	            }

	            this.state = 365;
	            this.match(snobolParser.LPAREN);
	            this.state = 368;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case snobolParser.STRING:
	                this.state = 366;
	                this.label();
	                break;
	            case snobolParser.END:
	                this.state = 367;
	                this.match(snobolParser.END);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 370;
	            this.match(snobolParser.RPAREN);
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



	transferpre() {
	    let localctx = new TransferpreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, snobolParser.RULE_transferpre);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 373;
	        _la = this._input.LA(1);
	        if(!(((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (snobolParser.T__31 - 32)) | (1 << (snobolParser.T__32 - 32)) | (1 << (snobolParser.T__33 - 32)) | (1 << (snobolParser.T__34 - 32)))) !== 0))) {
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

snobolParser.EOF = antlr4.Token.EOF;
snobolParser.T__0 = 1;
snobolParser.T__1 = 2;
snobolParser.T__2 = 3;
snobolParser.T__3 = 4;
snobolParser.T__4 = 5;
snobolParser.T__5 = 6;
snobolParser.T__6 = 7;
snobolParser.T__7 = 8;
snobolParser.T__8 = 9;
snobolParser.T__9 = 10;
snobolParser.T__10 = 11;
snobolParser.T__11 = 12;
snobolParser.T__12 = 13;
snobolParser.T__13 = 14;
snobolParser.T__14 = 15;
snobolParser.T__15 = 16;
snobolParser.T__16 = 17;
snobolParser.T__17 = 18;
snobolParser.T__18 = 19;
snobolParser.T__19 = 20;
snobolParser.T__20 = 21;
snobolParser.T__21 = 22;
snobolParser.T__22 = 23;
snobolParser.T__23 = 24;
snobolParser.T__24 = 25;
snobolParser.T__25 = 26;
snobolParser.T__26 = 27;
snobolParser.T__27 = 28;
snobolParser.T__28 = 29;
snobolParser.T__29 = 30;
snobolParser.T__30 = 31;
snobolParser.T__31 = 32;
snobolParser.T__32 = 33;
snobolParser.T__33 = 34;
snobolParser.T__34 = 35;
snobolParser.COMMA = 36;
snobolParser.LPAREN = 37;
snobolParser.RPAREN = 38;
snobolParser.AMP = 39;
snobolParser.PLUS = 40;
snobolParser.MINUS = 41;
snobolParser.TIMES = 42;
snobolParser.DIV = 43;
snobolParser.POW = 44;
snobolParser.EQ = 45;
snobolParser.COLON = 46;
snobolParser.END = 47;
snobolParser.STRINGLITERAL1 = 48;
snobolParser.STRINGLITERAL2 = 49;
snobolParser.STRING = 50;
snobolParser.INTEGER = 51;
snobolParser.REAL = 52;
snobolParser.COMMENT = 53;
snobolParser.EOL = 54;
snobolParser.WS = 55;

snobolParser.RULE_prog = 0;
snobolParser.RULE_lin = 1;
snobolParser.RULE_line = 2;
snobolParser.RULE_label = 3;
snobolParser.RULE_subject = 4;
snobolParser.RULE_pattern = 5;
snobolParser.RULE_expression = 6;
snobolParser.RULE_multiplyingExpression = 7;
snobolParser.RULE_powExpression = 8;
snobolParser.RULE_atom = 9;
snobolParser.RULE_command = 10;
snobolParser.RULE_ident = 11;
snobolParser.RULE_differ = 12;
snobolParser.RULE_eq = 13;
snobolParser.RULE_ne = 14;
snobolParser.RULE_ge = 15;
snobolParser.RULE_gt = 16;
snobolParser.RULE_le = 17;
snobolParser.RULE_lt = 18;
snobolParser.RULE_integer = 19;
snobolParser.RULE_lgt = 20;
snobolParser.RULE_atan = 21;
snobolParser.RULE_chop = 22;
snobolParser.RULE_cos = 23;
snobolParser.RULE_exp = 24;
snobolParser.RULE_ln = 25;
snobolParser.RULE_remdr = 26;
snobolParser.RULE_sin = 27;
snobolParser.RULE_tan = 28;
snobolParser.RULE_dupl = 29;
snobolParser.RULE_reverse = 30;
snobolParser.RULE_date = 31;
snobolParser.RULE_replace = 32;
snobolParser.RULE_size = 33;
snobolParser.RULE_trim = 34;
snobolParser.RULE_array_ = 35;
snobolParser.RULE_convert = 36;
snobolParser.RULE_table = 37;
snobolParser.RULE_sort = 38;
snobolParser.RULE_break_ = 39;
snobolParser.RULE_transfer = 40;
snobolParser.RULE_transferpre = 41;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_prog;
    }

	lin = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LinContext);
	    } else {
	        return this.getTypedRuleContext(LinContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitProg(this);
		}
	}


}



class LinContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_lin;
    }

	EOL() {
	    return this.getToken(snobolParser.EOL, 0);
	};

	line() {
	    return this.getTypedRuleContext(LineContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterLin(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitLin(this);
		}
	}


}



class LineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_line;
    }

	subject() {
	    return this.getTypedRuleContext(SubjectContext,0);
	};

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	pattern() {
	    return this.getTypedRuleContext(PatternContext,0);
	};

	EQ() {
	    return this.getToken(snobolParser.EQ, 0);
	};

	COLON() {
	    return this.getToken(snobolParser.COLON, 0);
	};

	transfer() {
	    return this.getTypedRuleContext(TransferContext,0);
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

	COMMENT() {
	    return this.getToken(snobolParser.COMMENT, 0);
	};

	END() {
	    return this.getToken(snobolParser.END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitLine(this);
		}
	}


}



class LabelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_label;
    }

	STRING() {
	    return this.getToken(snobolParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterLabel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitLabel(this);
		}
	}


}



class SubjectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_subject;
    }

	STRING = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(snobolParser.STRING);
	    } else {
	        return this.getToken(snobolParser.STRING, i);
	    }
	};


	AMP() {
	    return this.getToken(snobolParser.AMP, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(snobolParser.COMMA);
	    } else {
	        return this.getToken(snobolParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterSubject(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitSubject(this);
		}
	}


}



class PatternContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_pattern;
    }

	STRINGLITERAL1() {
	    return this.getToken(snobolParser.STRINGLITERAL1, 0);
	};

	STRINGLITERAL2() {
	    return this.getToken(snobolParser.STRINGLITERAL2, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterPattern(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitPattern(this);
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
        this.ruleIndex = snobolParser.RULE_expression;
    }

	multiplyingExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MultiplyingExpressionContext);
	    } else {
	        return this.getTypedRuleContext(MultiplyingExpressionContext,i);
	    }
	};

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(snobolParser.PLUS);
	    } else {
	        return this.getToken(snobolParser.PLUS, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(snobolParser.MINUS);
	    } else {
	        return this.getToken(snobolParser.MINUS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitExpression(this);
		}
	}


}



class MultiplyingExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_multiplyingExpression;
    }

	powExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PowExpressionContext);
	    } else {
	        return this.getTypedRuleContext(PowExpressionContext,i);
	    }
	};

	TIMES = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(snobolParser.TIMES);
	    } else {
	        return this.getToken(snobolParser.TIMES, i);
	    }
	};


	DIV = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(snobolParser.DIV);
	    } else {
	        return this.getToken(snobolParser.DIV, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterMultiplyingExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitMultiplyingExpression(this);
		}
	}


}



class PowExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_powExpression;
    }

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	POW() {
	    return this.getToken(snobolParser.POW, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterPowExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitPowExpression(this);
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
        this.ruleIndex = snobolParser.RULE_atom;
    }

	STRINGLITERAL1() {
	    return this.getToken(snobolParser.STRINGLITERAL1, 0);
	};

	STRINGLITERAL2() {
	    return this.getToken(snobolParser.STRINGLITERAL2, 0);
	};

	INTEGER() {
	    return this.getToken(snobolParser.INTEGER, 0);
	};

	subject() {
	    return this.getTypedRuleContext(SubjectContext,0);
	};

	command() {
	    return this.getTypedRuleContext(CommandContext,0);
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

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(snobolParser.COMMA);
	    } else {
	        return this.getToken(snobolParser.COMMA, i);
	    }
	};


	LPAREN() {
	    return this.getToken(snobolParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(snobolParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitAtom(this);
		}
	}


}



class CommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_command;
    }

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	differ() {
	    return this.getTypedRuleContext(DifferContext,0);
	};

	eq() {
	    return this.getTypedRuleContext(EqContext,0);
	};

	ne() {
	    return this.getTypedRuleContext(NeContext,0);
	};

	ge() {
	    return this.getTypedRuleContext(GeContext,0);
	};

	le() {
	    return this.getTypedRuleContext(LeContext,0);
	};

	lt() {
	    return this.getTypedRuleContext(LtContext,0);
	};

	integer() {
	    return this.getTypedRuleContext(IntegerContext,0);
	};

	lgt() {
	    return this.getTypedRuleContext(LgtContext,0);
	};

	atan() {
	    return this.getTypedRuleContext(AtanContext,0);
	};

	chop() {
	    return this.getTypedRuleContext(ChopContext,0);
	};

	cos() {
	    return this.getTypedRuleContext(CosContext,0);
	};

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	ln() {
	    return this.getTypedRuleContext(LnContext,0);
	};

	remdr() {
	    return this.getTypedRuleContext(RemdrContext,0);
	};

	sin() {
	    return this.getTypedRuleContext(SinContext,0);
	};

	tan() {
	    return this.getTypedRuleContext(TanContext,0);
	};

	date() {
	    return this.getTypedRuleContext(DateContext,0);
	};

	dupl() {
	    return this.getTypedRuleContext(DuplContext,0);
	};

	reverse() {
	    return this.getTypedRuleContext(ReverseContext,0);
	};

	replace() {
	    return this.getTypedRuleContext(ReplaceContext,0);
	};

	size() {
	    return this.getTypedRuleContext(SizeContext,0);
	};

	trim() {
	    return this.getTypedRuleContext(TrimContext,0);
	};

	array_() {
	    return this.getTypedRuleContext(Array_Context,0);
	};

	sort() {
	    return this.getTypedRuleContext(SortContext,0);
	};

	table() {
	    return this.getTypedRuleContext(TableContext,0);
	};

	break_() {
	    return this.getTypedRuleContext(Break_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitCommand(this);
		}
	}


}



class IdentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_ident;
    }

	LPAREN() {
	    return this.getToken(snobolParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(snobolParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterIdent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitIdent(this);
		}
	}


}



class DifferContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_differ;
    }

	LPAREN() {
	    return this.getToken(snobolParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(snobolParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterDiffer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitDiffer(this);
		}
	}


}



class EqContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_eq;
    }

	LPAREN() {
	    return this.getToken(snobolParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(snobolParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterEq(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitEq(this);
		}
	}


}



class NeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_ne;
    }

	LPAREN() {
	    return this.getToken(snobolParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(snobolParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterNe(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitNe(this);
		}
	}


}



class GeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_ge;
    }

	LPAREN() {
	    return this.getToken(snobolParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(snobolParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterGe(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitGe(this);
		}
	}


}



class GtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_gt;
    }

	LPAREN() {
	    return this.getToken(snobolParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(snobolParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterGt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitGt(this);
		}
	}


}



class LeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_le;
    }

	LPAREN() {
	    return this.getToken(snobolParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(snobolParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterLe(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitLe(this);
		}
	}


}



class LtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_lt;
    }

	LPAREN() {
	    return this.getToken(snobolParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(snobolParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterLt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitLt(this);
		}
	}


}



class IntegerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_integer;
    }

	LPAREN() {
	    return this.getToken(snobolParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(snobolParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterInteger(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitInteger(this);
		}
	}


}



class LgtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_lgt;
    }

	LPAREN() {
	    return this.getToken(snobolParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(snobolParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterLgt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitLgt(this);
		}
	}


}



class AtanContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_atan;
    }

	LPAREN() {
	    return this.getToken(snobolParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(snobolParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterAtan(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitAtan(this);
		}
	}


}



class ChopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_chop;
    }

	LPAREN() {
	    return this.getToken(snobolParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(snobolParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterChop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitChop(this);
		}
	}


}



class CosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_cos;
    }

	LPAREN() {
	    return this.getToken(snobolParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(snobolParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterCos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitCos(this);
		}
	}


}



class ExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_exp;
    }

	LPAREN() {
	    return this.getToken(snobolParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(snobolParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitExp(this);
		}
	}


}



class LnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_ln;
    }

	LPAREN() {
	    return this.getToken(snobolParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(snobolParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterLn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitLn(this);
		}
	}


}



class RemdrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_remdr;
    }

	LPAREN() {
	    return this.getToken(snobolParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(snobolParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterRemdr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitRemdr(this);
		}
	}


}



class SinContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_sin;
    }

	LPAREN() {
	    return this.getToken(snobolParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(snobolParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterSin(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitSin(this);
		}
	}


}



class TanContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_tan;
    }

	LPAREN() {
	    return this.getToken(snobolParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(snobolParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterTan(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitTan(this);
		}
	}


}



class DuplContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_dupl;
    }

	LPAREN() {
	    return this.getToken(snobolParser.LPAREN, 0);
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

	COMMA() {
	    return this.getToken(snobolParser.COMMA, 0);
	};

	RPAREN() {
	    return this.getToken(snobolParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterDupl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitDupl(this);
		}
	}


}



class ReverseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_reverse;
    }

	LPAREN() {
	    return this.getToken(snobolParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(snobolParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterReverse(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitReverse(this);
		}
	}


}



class DateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_date;
    }

	LPAREN() {
	    return this.getToken(snobolParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(snobolParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterDate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitDate(this);
		}
	}


}



class ReplaceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_replace;
    }

	LPAREN() {
	    return this.getToken(snobolParser.LPAREN, 0);
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

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(snobolParser.COMMA);
	    } else {
	        return this.getToken(snobolParser.COMMA, i);
	    }
	};


	RPAREN() {
	    return this.getToken(snobolParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterReplace(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitReplace(this);
		}
	}


}



class SizeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_size;
    }

	LPAREN() {
	    return this.getToken(snobolParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(snobolParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterSize(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitSize(this);
		}
	}


}



class TrimContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_trim;
    }

	LPAREN() {
	    return this.getToken(snobolParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(snobolParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterTrim(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitTrim(this);
		}
	}


}



class Array_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_array_;
    }

	LPAREN() {
	    return this.getToken(snobolParser.LPAREN, 0);
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

	COMMA() {
	    return this.getToken(snobolParser.COMMA, 0);
	};

	RPAREN() {
	    return this.getToken(snobolParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterArray_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitArray_(this);
		}
	}


}



class ConvertContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_convert;
    }

	LPAREN() {
	    return this.getToken(snobolParser.LPAREN, 0);
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

	COMMA() {
	    return this.getToken(snobolParser.COMMA, 0);
	};

	RPAREN() {
	    return this.getToken(snobolParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterConvert(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitConvert(this);
		}
	}


}



class TableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_table;
    }

	LPAREN() {
	    return this.getToken(snobolParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(snobolParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterTable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitTable(this);
		}
	}


}



class SortContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_sort;
    }

	LPAREN() {
	    return this.getToken(snobolParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(snobolParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterSort(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitSort(this);
		}
	}


}



class Break_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_break_;
    }

	LPAREN() {
	    return this.getToken(snobolParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(snobolParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterBreak_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitBreak_(this);
		}
	}


}



class TransferContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_transfer;
    }

	LPAREN() {
	    return this.getToken(snobolParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(snobolParser.RPAREN, 0);
	};

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	END() {
	    return this.getToken(snobolParser.END, 0);
	};

	transferpre() {
	    return this.getTypedRuleContext(TransferpreContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterTransfer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitTransfer(this);
		}
	}


}



class TransferpreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snobolParser.RULE_transferpre;
    }


	enterRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.enterTransferpre(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snobolListener ) {
	        listener.exitTransferpre(this);
		}
	}


}




snobolParser.ProgContext = ProgContext; 
snobolParser.LinContext = LinContext; 
snobolParser.LineContext = LineContext; 
snobolParser.LabelContext = LabelContext; 
snobolParser.SubjectContext = SubjectContext; 
snobolParser.PatternContext = PatternContext; 
snobolParser.ExpressionContext = ExpressionContext; 
snobolParser.MultiplyingExpressionContext = MultiplyingExpressionContext; 
snobolParser.PowExpressionContext = PowExpressionContext; 
snobolParser.AtomContext = AtomContext; 
snobolParser.CommandContext = CommandContext; 
snobolParser.IdentContext = IdentContext; 
snobolParser.DifferContext = DifferContext; 
snobolParser.EqContext = EqContext; 
snobolParser.NeContext = NeContext; 
snobolParser.GeContext = GeContext; 
snobolParser.GtContext = GtContext; 
snobolParser.LeContext = LeContext; 
snobolParser.LtContext = LtContext; 
snobolParser.IntegerContext = IntegerContext; 
snobolParser.LgtContext = LgtContext; 
snobolParser.AtanContext = AtanContext; 
snobolParser.ChopContext = ChopContext; 
snobolParser.CosContext = CosContext; 
snobolParser.ExpContext = ExpContext; 
snobolParser.LnContext = LnContext; 
snobolParser.RemdrContext = RemdrContext; 
snobolParser.SinContext = SinContext; 
snobolParser.TanContext = TanContext; 
snobolParser.DuplContext = DuplContext; 
snobolParser.ReverseContext = ReverseContext; 
snobolParser.DateContext = DateContext; 
snobolParser.ReplaceContext = ReplaceContext; 
snobolParser.SizeContext = SizeContext; 
snobolParser.TrimContext = TrimContext; 
snobolParser.Array_Context = Array_Context; 
snobolParser.ConvertContext = ConvertContext; 
snobolParser.TableContext = TableContext; 
snobolParser.SortContext = SortContext; 
snobolParser.Break_Context = Break_Context; 
snobolParser.TransferContext = TransferContext; 
snobolParser.TransferpreContext = TransferpreContext; 
