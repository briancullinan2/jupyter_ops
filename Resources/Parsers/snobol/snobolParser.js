// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/snobol/snobol.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import snobolListener from './snobolListener.js';
const serializedATN = [4,1,55,378,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
1,0,4,0,86,8,0,11,0,12,0,87,1,0,1,0,1,1,3,1,93,8,1,1,1,1,1,1,2,3,2,98,8,
2,1,2,1,2,3,2,102,8,2,1,2,1,2,4,2,106,8,2,11,2,12,2,107,3,2,110,8,2,1,2,
1,2,3,2,114,8,2,1,2,1,2,1,2,3,2,119,8,2,1,3,1,3,1,4,3,4,124,8,4,1,4,1,4,
1,4,1,4,1,4,5,4,131,8,4,10,4,12,4,134,9,4,1,4,3,4,137,8,4,1,5,1,5,1,6,1,
6,1,6,5,6,144,8,6,10,6,12,6,147,9,6,1,7,1,7,1,7,5,7,152,8,7,10,7,12,7,155,
9,7,1,8,1,8,1,8,3,8,160,8,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,169,8,9,10,9,
12,9,172,9,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,180,8,9,1,10,1,10,1,10,1,10,1,10,
1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,
10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,209,8,10,1,11,1,11,1,11,1,11,
1,11,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,
14,1,14,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,
1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,20,1,20,1,
20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,23,1,23,
1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,26,1,
26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,29,
1,29,1,29,1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,
31,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,33,1,33,1,33,1,33,1,33,
1,34,1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,36,1,36,1,
36,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,
1,39,1,39,1,39,1,39,1,39,1,40,3,40,366,8,40,1,40,1,40,1,40,3,40,371,8,40,
1,40,3,40,374,8,40,1,41,1,41,1,41,0,0,42,0,2,4,6,8,10,12,14,16,18,20,22,
24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,
72,74,76,78,80,82,0,6,2,0,47,47,53,53,1,0,48,49,1,0,40,41,1,0,42,43,2,0,
48,49,51,51,1,0,32,35,384,0,85,1,0,0,0,2,92,1,0,0,0,4,118,1,0,0,0,6,120,
1,0,0,0,8,123,1,0,0,0,10,138,1,0,0,0,12,140,1,0,0,0,14,148,1,0,0,0,16,156,
1,0,0,0,18,179,1,0,0,0,20,208,1,0,0,0,22,210,1,0,0,0,24,215,1,0,0,0,26,220,
1,0,0,0,28,225,1,0,0,0,30,230,1,0,0,0,32,235,1,0,0,0,34,240,1,0,0,0,36,245,
1,0,0,0,38,250,1,0,0,0,40,255,1,0,0,0,42,260,1,0,0,0,44,265,1,0,0,0,46,270,
1,0,0,0,48,275,1,0,0,0,50,280,1,0,0,0,52,285,1,0,0,0,54,290,1,0,0,0,56,295,
1,0,0,0,58,300,1,0,0,0,60,307,1,0,0,0,62,312,1,0,0,0,64,316,1,0,0,0,66,325,
1,0,0,0,68,330,1,0,0,0,70,335,1,0,0,0,72,342,1,0,0,0,74,349,1,0,0,0,76,354,
1,0,0,0,78,359,1,0,0,0,80,373,1,0,0,0,82,375,1,0,0,0,84,86,3,2,1,0,85,84,
1,0,0,0,86,87,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,89,1,0,0,0,89,90,5,
0,0,1,90,1,1,0,0,0,91,93,3,4,2,0,92,91,1,0,0,0,92,93,1,0,0,0,93,94,1,0,0,
0,94,95,5,54,0,0,95,3,1,0,0,0,96,98,3,6,3,0,97,96,1,0,0,0,97,98,1,0,0,0,
98,99,1,0,0,0,99,101,3,8,4,0,100,102,3,10,5,0,101,100,1,0,0,0,101,102,1,
0,0,0,102,109,1,0,0,0,103,105,5,45,0,0,104,106,3,12,6,0,105,104,1,0,0,0,
106,107,1,0,0,0,107,105,1,0,0,0,107,108,1,0,0,0,108,110,1,0,0,0,109,103,
1,0,0,0,109,110,1,0,0,0,110,113,1,0,0,0,111,112,5,46,0,0,112,114,3,80,40,
0,113,111,1,0,0,0,113,114,1,0,0,0,114,119,1,0,0,0,115,116,5,46,0,0,116,119,
3,80,40,0,117,119,7,0,0,0,118,97,1,0,0,0,118,115,1,0,0,0,118,117,1,0,0,0,
119,5,1,0,0,0,120,121,5,50,0,0,121,7,1,0,0,0,122,124,5,39,0,0,123,122,1,
0,0,0,123,124,1,0,0,0,124,125,1,0,0,0,125,136,5,50,0,0,126,127,5,1,0,0,127,
132,5,50,0,0,128,129,5,36,0,0,129,131,5,50,0,0,130,128,1,0,0,0,131,134,1,
0,0,0,132,130,1,0,0,0,132,133,1,0,0,0,133,135,1,0,0,0,134,132,1,0,0,0,135,
137,5,2,0,0,136,126,1,0,0,0,136,137,1,0,0,0,137,9,1,0,0,0,138,139,7,1,0,
0,139,11,1,0,0,0,140,145,3,14,7,0,141,142,7,2,0,0,142,144,3,14,7,0,143,141,
1,0,0,0,144,147,1,0,0,0,145,143,1,0,0,0,145,146,1,0,0,0,146,13,1,0,0,0,147,
145,1,0,0,0,148,153,3,16,8,0,149,150,7,3,0,0,150,152,3,16,8,0,151,149,1,
0,0,0,152,155,1,0,0,0,153,151,1,0,0,0,153,154,1,0,0,0,154,15,1,0,0,0,155,
153,1,0,0,0,156,159,3,18,9,0,157,158,5,44,0,0,158,160,3,12,6,0,159,157,1,
0,0,0,159,160,1,0,0,0,160,17,1,0,0,0,161,180,7,4,0,0,162,180,3,8,4,0,163,
180,3,20,10,0,164,165,5,1,0,0,165,170,3,12,6,0,166,167,5,36,0,0,167,169,
3,12,6,0,168,166,1,0,0,0,169,172,1,0,0,0,170,168,1,0,0,0,170,171,1,0,0,0,
171,173,1,0,0,0,172,170,1,0,0,0,173,174,5,2,0,0,174,180,1,0,0,0,175,176,
5,37,0,0,176,177,3,12,6,0,177,178,5,38,0,0,178,180,1,0,0,0,179,161,1,0,0,
0,179,162,1,0,0,0,179,163,1,0,0,0,179,164,1,0,0,0,179,175,1,0,0,0,180,19,
1,0,0,0,181,209,3,22,11,0,182,209,3,24,12,0,183,209,3,26,13,0,184,209,3,
28,14,0,185,209,3,30,15,0,186,209,3,34,17,0,187,209,3,36,18,0,188,209,3,
38,19,0,189,209,3,40,20,0,190,209,3,42,21,0,191,209,3,44,22,0,192,209,3,
46,23,0,193,209,3,48,24,0,194,209,3,50,25,0,195,209,3,52,26,0,196,209,3,
54,27,0,197,209,3,56,28,0,198,209,3,62,31,0,199,209,3,58,29,0,200,209,3,
60,30,0,201,209,3,64,32,0,202,209,3,66,33,0,203,209,3,68,34,0,204,209,3,
70,35,0,205,209,3,76,38,0,206,209,3,74,37,0,207,209,3,78,39,0,208,181,1,
0,0,0,208,182,1,0,0,0,208,183,1,0,0,0,208,184,1,0,0,0,208,185,1,0,0,0,208,
186,1,0,0,0,208,187,1,0,0,0,208,188,1,0,0,0,208,189,1,0,0,0,208,190,1,0,
0,0,208,191,1,0,0,0,208,192,1,0,0,0,208,193,1,0,0,0,208,194,1,0,0,0,208,
195,1,0,0,0,208,196,1,0,0,0,208,197,1,0,0,0,208,198,1,0,0,0,208,199,1,0,
0,0,208,200,1,0,0,0,208,201,1,0,0,0,208,202,1,0,0,0,208,203,1,0,0,0,208,
204,1,0,0,0,208,205,1,0,0,0,208,206,1,0,0,0,208,207,1,0,0,0,209,21,1,0,0,
0,210,211,5,3,0,0,211,212,5,37,0,0,212,213,3,12,6,0,213,214,5,38,0,0,214,
23,1,0,0,0,215,216,5,4,0,0,216,217,5,37,0,0,217,218,3,12,6,0,218,219,5,38,
0,0,219,25,1,0,0,0,220,221,5,5,0,0,221,222,5,37,0,0,222,223,3,12,6,0,223,
224,5,38,0,0,224,27,1,0,0,0,225,226,5,6,0,0,226,227,5,37,0,0,227,228,3,12,
6,0,228,229,5,38,0,0,229,29,1,0,0,0,230,231,5,7,0,0,231,232,5,37,0,0,232,
233,3,12,6,0,233,234,5,38,0,0,234,31,1,0,0,0,235,236,5,8,0,0,236,237,5,37,
0,0,237,238,3,12,6,0,238,239,5,38,0,0,239,33,1,0,0,0,240,241,5,9,0,0,241,
242,5,37,0,0,242,243,3,12,6,0,243,244,5,38,0,0,244,35,1,0,0,0,245,246,5,
10,0,0,246,247,5,37,0,0,247,248,3,12,6,0,248,249,5,38,0,0,249,37,1,0,0,0,
250,251,5,11,0,0,251,252,5,37,0,0,252,253,3,12,6,0,253,254,5,38,0,0,254,
39,1,0,0,0,255,256,5,12,0,0,256,257,5,37,0,0,257,258,3,12,6,0,258,259,5,
38,0,0,259,41,1,0,0,0,260,261,5,13,0,0,261,262,5,37,0,0,262,263,3,12,6,0,
263,264,5,38,0,0,264,43,1,0,0,0,265,266,5,14,0,0,266,267,5,37,0,0,267,268,
3,12,6,0,268,269,5,38,0,0,269,45,1,0,0,0,270,271,5,15,0,0,271,272,5,37,0,
0,272,273,3,12,6,0,273,274,5,38,0,0,274,47,1,0,0,0,275,276,5,16,0,0,276,
277,5,37,0,0,277,278,3,12,6,0,278,279,5,38,0,0,279,49,1,0,0,0,280,281,5,
17,0,0,281,282,5,37,0,0,282,283,3,12,6,0,283,284,5,38,0,0,284,51,1,0,0,0,
285,286,5,18,0,0,286,287,5,37,0,0,287,288,3,12,6,0,288,289,5,38,0,0,289,
53,1,0,0,0,290,291,5,19,0,0,291,292,5,37,0,0,292,293,3,12,6,0,293,294,5,
38,0,0,294,55,1,0,0,0,295,296,5,20,0,0,296,297,5,37,0,0,297,298,3,12,6,0,
298,299,5,38,0,0,299,57,1,0,0,0,300,301,5,21,0,0,301,302,5,37,0,0,302,303,
3,12,6,0,303,304,5,36,0,0,304,305,3,12,6,0,305,306,5,38,0,0,306,59,1,0,0,
0,307,308,5,22,0,0,308,309,5,37,0,0,309,310,3,12,6,0,310,311,5,38,0,0,311,
61,1,0,0,0,312,313,5,23,0,0,313,314,5,37,0,0,314,315,5,38,0,0,315,63,1,0,
0,0,316,317,5,24,0,0,317,318,5,37,0,0,318,319,3,12,6,0,319,320,5,36,0,0,
320,321,3,12,6,0,321,322,5,36,0,0,322,323,3,12,6,0,323,324,5,38,0,0,324,
65,1,0,0,0,325,326,5,25,0,0,326,327,5,37,0,0,327,328,3,12,6,0,328,329,5,
38,0,0,329,67,1,0,0,0,330,331,5,26,0,0,331,332,5,37,0,0,332,333,3,12,6,0,
333,334,5,38,0,0,334,69,1,0,0,0,335,336,5,27,0,0,336,337,5,37,0,0,337,338,
3,12,6,0,338,339,5,36,0,0,339,340,3,12,6,0,340,341,5,38,0,0,341,71,1,0,0,
0,342,343,5,28,0,0,343,344,5,37,0,0,344,345,3,12,6,0,345,346,5,36,0,0,346,
347,3,12,6,0,347,348,5,38,0,0,348,73,1,0,0,0,349,350,5,29,0,0,350,351,5,
37,0,0,351,352,3,12,6,0,352,353,5,38,0,0,353,75,1,0,0,0,354,355,5,30,0,0,
355,356,5,37,0,0,356,357,3,12,6,0,357,358,5,38,0,0,358,77,1,0,0,0,359,360,
5,31,0,0,360,361,5,37,0,0,361,362,3,12,6,0,362,363,5,38,0,0,363,79,1,0,0,
0,364,366,3,82,41,0,365,364,1,0,0,0,365,366,1,0,0,0,366,367,1,0,0,0,367,
370,5,37,0,0,368,371,3,6,3,0,369,371,5,47,0,0,370,368,1,0,0,0,370,369,1,
0,0,0,371,372,1,0,0,0,372,374,5,38,0,0,373,365,1,0,0,0,373,374,1,0,0,0,374,
81,1,0,0,0,375,376,7,5,0,0,376,83,1,0,0,0,20,87,92,97,101,107,109,113,118,
123,132,136,145,153,159,170,179,208,365,370,373];


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



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, snobolParser.RULE_prog);
	    var _la = 0;
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
	        } while(((((_la - 39)) & ~0x1f) === 0 && ((1 << (_la - 39)) & 51585) !== 0));
	        this.state = 89;
	        this.match(snobolParser.EOF);
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 39)) & ~0x1f) === 0 && ((1 << (_la - 39)) & 18817) !== 0)) {
	            this.state = 91;
	            this.line();
	        }

	        this.state = 94;
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
	    var _la = 0;
	    try {
	        this.state = 118;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 39:
	        case 50:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 97;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	            if(la_===1) {
	                this.state = 96;
	                this.label();

	            }
	            this.state = 99;
	            this.subject();
	            this.state = 101;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48 || _la===49) {
	                this.state = 100;
	                this.pattern();
	            }

	            this.state = 109;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===45) {
	                this.state = 103;
	                this.match(snobolParser.EQ);
	                this.state = 105; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                do {
	                    this.state = 104;
	                    this.expression();
	                    this.state = 107; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4026531578) !== 0) || ((((_la - 37)) & ~0x1f) === 0 && ((1 << (_la - 37)) & 30725) !== 0));
	            }

	            this.state = 113;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===46) {
	                this.state = 111;
	                this.match(snobolParser.COLON);
	                this.state = 112;
	                this.transfer();
	            }

	            break;
	        case 46:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 115;
	            this.match(snobolParser.COLON);
	            this.state = 116;
	            this.transfer();
	            break;
	        case 47:
	        case 53:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 117;
	            _la = this._input.LA(1);
	            if(!(_la===47 || _la===53)) {
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
	        this.state = 120;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===39) {
	            this.state = 122;
	            this.match(snobolParser.AMP);
	        }

	        this.state = 125;
	        this.match(snobolParser.STRING);
	        this.state = 136;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 126;
	            this.match(snobolParser.T__0);
	            this.state = 127;
	            this.match(snobolParser.STRING);
	            this.state = 132;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===36) {
	                this.state = 128;
	                this.match(snobolParser.COMMA);
	                this.state = 129;
	                this.match(snobolParser.STRING);
	                this.state = 134;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 135;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        _la = this._input.LA(1);
	        if(!(_la===48 || _la===49)) {
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        this.multiplyingExpression();
	        this.state = 145;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 141;
	                _la = this._input.LA(1);
	                if(!(_la===40 || _la===41)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 142;
	                this.multiplyingExpression(); 
	            }
	            this.state = 147;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 148;
	        this.powExpression();
	        this.state = 153;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 149;
	                _la = this._input.LA(1);
	                if(!(_la===42 || _la===43)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 150;
	                this.powExpression(); 
	            }
	            this.state = 155;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
	        this.atom();
	        this.state = 159;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 157;
	            this.match(snobolParser.POW);
	            this.state = 158;
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
	    var _la = 0;
	    try {
	        this.state = 179;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 48:
	        case 49:
	        case 51:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 161;
	            _la = this._input.LA(1);
	            if(!(((((_la - 48)) & ~0x1f) === 0 && ((1 << (_la - 48)) & 11) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case 39:
	        case 50:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 162;
	            this.subject();
	            break;
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	        case 9:
	        case 10:
	        case 11:
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	        case 16:
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 29:
	        case 30:
	        case 31:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 163;
	            this.command();
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 164;
	            this.match(snobolParser.T__0);
	            this.state = 165;
	            this.expression();
	            this.state = 170;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===36) {
	                this.state = 166;
	                this.match(snobolParser.COMMA);
	                this.state = 167;
	                this.expression();
	                this.state = 172;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 173;
	            this.match(snobolParser.T__1);
	            break;
	        case 37:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 175;
	            this.match(snobolParser.LPAREN);
	            this.state = 176;
	            this.expression();
	            this.state = 177;
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
	        this.state = 208;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 181;
	            this.ident();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 182;
	            this.differ();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 183;
	            this.eq();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 184;
	            this.ne();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 185;
	            this.ge();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 186;
	            this.le();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 187;
	            this.lt();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 188;
	            this.integer();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 189;
	            this.lgt();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 190;
	            this.atan();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 191;
	            this.chop();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 192;
	            this.cos();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 193;
	            this.exp();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 194;
	            this.ln();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 195;
	            this.remdr();
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 196;
	            this.sin();
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 197;
	            this.tan();
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 198;
	            this.date();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 19);
	            this.state = 199;
	            this.dupl();
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 20);
	            this.state = 200;
	            this.reverse();
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 21);
	            this.state = 201;
	            this.replace();
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 22);
	            this.state = 202;
	            this.size();
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 23);
	            this.state = 203;
	            this.trim();
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 24);
	            this.state = 204;
	            this.array_();
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 25);
	            this.state = 205;
	            this.sort();
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 26);
	            this.state = 206;
	            this.table();
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 27);
	            this.state = 207;
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
	        this.state = 210;
	        this.match(snobolParser.T__2);
	        this.state = 211;
	        this.match(snobolParser.LPAREN);
	        this.state = 212;
	        this.expression();
	        this.state = 213;
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
	        this.state = 215;
	        this.match(snobolParser.T__3);
	        this.state = 216;
	        this.match(snobolParser.LPAREN);
	        this.state = 217;
	        this.expression();
	        this.state = 218;
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
	        this.state = 220;
	        this.match(snobolParser.T__4);
	        this.state = 221;
	        this.match(snobolParser.LPAREN);
	        this.state = 222;
	        this.expression();
	        this.state = 223;
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
	        this.state = 225;
	        this.match(snobolParser.T__5);
	        this.state = 226;
	        this.match(snobolParser.LPAREN);
	        this.state = 227;
	        this.expression();
	        this.state = 228;
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
	        this.state = 230;
	        this.match(snobolParser.T__6);
	        this.state = 231;
	        this.match(snobolParser.LPAREN);
	        this.state = 232;
	        this.expression();
	        this.state = 233;
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
	        this.state = 235;
	        this.match(snobolParser.T__7);
	        this.state = 236;
	        this.match(snobolParser.LPAREN);
	        this.state = 237;
	        this.expression();
	        this.state = 238;
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
	        this.state = 240;
	        this.match(snobolParser.T__8);
	        this.state = 241;
	        this.match(snobolParser.LPAREN);
	        this.state = 242;
	        this.expression();
	        this.state = 243;
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
	        this.state = 245;
	        this.match(snobolParser.T__9);
	        this.state = 246;
	        this.match(snobolParser.LPAREN);
	        this.state = 247;
	        this.expression();
	        this.state = 248;
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
	        this.state = 250;
	        this.match(snobolParser.T__10);
	        this.state = 251;
	        this.match(snobolParser.LPAREN);
	        this.state = 252;
	        this.expression();
	        this.state = 253;
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
	        this.state = 255;
	        this.match(snobolParser.T__11);
	        this.state = 256;
	        this.match(snobolParser.LPAREN);
	        this.state = 257;
	        this.expression();
	        this.state = 258;
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
	        this.state = 260;
	        this.match(snobolParser.T__12);
	        this.state = 261;
	        this.match(snobolParser.LPAREN);
	        this.state = 262;
	        this.expression();
	        this.state = 263;
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
	        this.state = 265;
	        this.match(snobolParser.T__13);
	        this.state = 266;
	        this.match(snobolParser.LPAREN);
	        this.state = 267;
	        this.expression();
	        this.state = 268;
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
	        this.state = 270;
	        this.match(snobolParser.T__14);
	        this.state = 271;
	        this.match(snobolParser.LPAREN);
	        this.state = 272;
	        this.expression();
	        this.state = 273;
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
	        this.state = 275;
	        this.match(snobolParser.T__15);
	        this.state = 276;
	        this.match(snobolParser.LPAREN);
	        this.state = 277;
	        this.expression();
	        this.state = 278;
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
	        this.state = 280;
	        this.match(snobolParser.T__16);
	        this.state = 281;
	        this.match(snobolParser.LPAREN);
	        this.state = 282;
	        this.expression();
	        this.state = 283;
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
	        this.state = 285;
	        this.match(snobolParser.T__17);
	        this.state = 286;
	        this.match(snobolParser.LPAREN);
	        this.state = 287;
	        this.expression();
	        this.state = 288;
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
	        this.state = 290;
	        this.match(snobolParser.T__18);
	        this.state = 291;
	        this.match(snobolParser.LPAREN);
	        this.state = 292;
	        this.expression();
	        this.state = 293;
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
	        this.state = 295;
	        this.match(snobolParser.T__19);
	        this.state = 296;
	        this.match(snobolParser.LPAREN);
	        this.state = 297;
	        this.expression();
	        this.state = 298;
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
	        this.state = 300;
	        this.match(snobolParser.T__20);
	        this.state = 301;
	        this.match(snobolParser.LPAREN);
	        this.state = 302;
	        this.expression();
	        this.state = 303;
	        this.match(snobolParser.COMMA);
	        this.state = 304;
	        this.expression();
	        this.state = 305;
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
	        this.state = 307;
	        this.match(snobolParser.T__21);
	        this.state = 308;
	        this.match(snobolParser.LPAREN);
	        this.state = 309;
	        this.expression();
	        this.state = 310;
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
	        this.state = 312;
	        this.match(snobolParser.T__22);
	        this.state = 313;
	        this.match(snobolParser.LPAREN);
	        this.state = 314;
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
	        this.state = 316;
	        this.match(snobolParser.T__23);
	        this.state = 317;
	        this.match(snobolParser.LPAREN);
	        this.state = 318;
	        this.expression();
	        this.state = 319;
	        this.match(snobolParser.COMMA);
	        this.state = 320;
	        this.expression();
	        this.state = 321;
	        this.match(snobolParser.COMMA);
	        this.state = 322;
	        this.expression();
	        this.state = 323;
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
	        this.state = 325;
	        this.match(snobolParser.T__24);
	        this.state = 326;
	        this.match(snobolParser.LPAREN);
	        this.state = 327;
	        this.expression();
	        this.state = 328;
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
	        this.state = 330;
	        this.match(snobolParser.T__25);
	        this.state = 331;
	        this.match(snobolParser.LPAREN);
	        this.state = 332;
	        this.expression();
	        this.state = 333;
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
	        this.state = 335;
	        this.match(snobolParser.T__26);
	        this.state = 336;
	        this.match(snobolParser.LPAREN);
	        this.state = 337;
	        this.expression();
	        this.state = 338;
	        this.match(snobolParser.COMMA);
	        this.state = 339;
	        this.expression();
	        this.state = 340;
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
	        this.state = 342;
	        this.match(snobolParser.T__27);
	        this.state = 343;
	        this.match(snobolParser.LPAREN);
	        this.state = 344;
	        this.expression();
	        this.state = 345;
	        this.match(snobolParser.COMMA);
	        this.state = 346;
	        this.expression();
	        this.state = 347;
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
	        this.state = 349;
	        this.match(snobolParser.T__28);
	        this.state = 350;
	        this.match(snobolParser.LPAREN);
	        this.state = 351;
	        this.expression();
	        this.state = 352;
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
	        this.state = 354;
	        this.match(snobolParser.T__29);
	        this.state = 355;
	        this.match(snobolParser.LPAREN);
	        this.state = 356;
	        this.expression();
	        this.state = 357;
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
	        this.state = 359;
	        this.match(snobolParser.T__30);
	        this.state = 360;
	        this.match(snobolParser.LPAREN);
	        this.state = 361;
	        this.expression();
	        this.state = 362;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 373;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 47) !== 0)) {
	            this.state = 365;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 15) !== 0)) {
	                this.state = 364;
	                this.transferpre();
	            }

	            this.state = 367;
	            this.match(snobolParser.LPAREN);
	            this.state = 370;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 50:
	                this.state = 368;
	                this.label();
	                break;
	            case 47:
	                this.state = 369;
	                this.match(snobolParser.END);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 372;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 375;
	        _la = this._input.LA(1);
	        if(!(((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 15) !== 0))) {
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

	EOF() {
	    return this.getToken(snobolParser.EOF, 0);
	};

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

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
