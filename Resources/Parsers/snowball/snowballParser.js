// Generated from Resources/Parsers/snowball/snowball.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import snowballListener from './snowballListener.js';
const serializedATN = [4,1,77,347,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,1,0,5,0,34,8,0,10,0,12,0,37,9,0,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,3,1,47,8,1,1,2,1,2,1,2,5,2,52,8,2,10,2,12,2,55,9,2,
1,2,1,2,1,2,1,2,5,2,61,8,2,10,2,12,2,64,9,2,1,2,1,2,1,2,1,2,5,2,70,8,2,10,
2,12,2,73,9,2,1,2,1,2,1,2,1,2,5,2,79,8,2,10,2,12,2,82,9,2,1,2,1,2,1,2,1,
2,5,2,88,8,2,10,2,12,2,91,9,2,1,2,1,2,1,2,1,2,5,2,97,8,2,10,2,12,2,100,9,
2,1,2,3,2,103,8,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,5,4,115,8,4,10,
4,12,4,118,9,4,1,5,1,5,1,5,5,5,123,8,5,10,5,12,5,126,9,5,1,5,1,5,1,5,1,5,
1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,196,8,5,1,5,5,5,199,8,5,10,5,
12,5,202,9,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,214,8,5,1,5,1,5,
1,5,1,5,3,5,220,8,5,1,5,1,5,1,5,1,5,1,5,1,5,5,5,228,8,5,10,5,12,5,231,9,
5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,
6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,
6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,
6,1,6,3,6,288,8,6,1,7,1,7,1,7,1,7,1,8,1,8,3,8,296,8,8,1,9,1,9,3,9,300,8,
9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,15,1,15,
1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,3,15,328,8,15,
1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,5,15,342,8,15,
10,15,12,15,345,9,15,1,15,0,2,10,30,16,0,2,4,6,8,10,12,14,16,18,20,22,24,
26,28,30,0,0,421,0,35,1,0,0,0,2,46,1,0,0,0,4,102,1,0,0,0,6,104,1,0,0,0,8,
109,1,0,0,0,10,219,1,0,0,0,12,287,1,0,0,0,14,289,1,0,0,0,16,295,1,0,0,0,
18,299,1,0,0,0,20,301,1,0,0,0,22,303,1,0,0,0,24,305,1,0,0,0,26,307,1,0,0,
0,28,309,1,0,0,0,30,327,1,0,0,0,32,34,3,2,1,0,33,32,1,0,0,0,34,37,1,0,0,
0,35,33,1,0,0,0,35,36,1,0,0,0,36,1,1,0,0,0,37,35,1,0,0,0,38,47,3,4,2,0,39,
47,3,6,3,0,40,47,3,8,4,0,41,42,5,1,0,0,42,43,5,2,0,0,43,44,3,2,1,0,44,45,
5,3,0,0,45,47,1,0,0,0,46,38,1,0,0,0,46,39,1,0,0,0,46,40,1,0,0,0,46,41,1,
0,0,0,47,3,1,0,0,0,48,49,5,4,0,0,49,53,5,2,0,0,50,52,3,20,10,0,51,50,1,0,
0,0,52,55,1,0,0,0,53,51,1,0,0,0,53,54,1,0,0,0,54,56,1,0,0,0,55,53,1,0,0,
0,56,103,5,3,0,0,57,58,5,5,0,0,58,62,5,2,0,0,59,61,3,22,11,0,60,59,1,0,0,
0,61,64,1,0,0,0,62,60,1,0,0,0,62,63,1,0,0,0,63,65,1,0,0,0,64,62,1,0,0,0,
65,103,5,3,0,0,66,67,5,6,0,0,67,71,5,2,0,0,68,70,3,24,12,0,69,68,1,0,0,0,
70,73,1,0,0,0,71,69,1,0,0,0,71,72,1,0,0,0,72,74,1,0,0,0,73,71,1,0,0,0,74,
103,5,3,0,0,75,76,5,7,0,0,76,80,5,2,0,0,77,79,3,26,13,0,78,77,1,0,0,0,79,
82,1,0,0,0,80,78,1,0,0,0,80,81,1,0,0,0,81,83,1,0,0,0,82,80,1,0,0,0,83,103,
5,3,0,0,84,85,5,8,0,0,85,89,5,2,0,0,86,88,3,26,13,0,87,86,1,0,0,0,88,91,
1,0,0,0,89,87,1,0,0,0,89,90,1,0,0,0,90,92,1,0,0,0,91,89,1,0,0,0,92,103,5,
3,0,0,93,94,5,9,0,0,94,98,5,2,0,0,95,97,3,28,14,0,96,95,1,0,0,0,97,100,1,
0,0,0,98,96,1,0,0,0,98,99,1,0,0,0,99,101,1,0,0,0,100,98,1,0,0,0,101,103,
5,3,0,0,102,48,1,0,0,0,102,57,1,0,0,0,102,66,1,0,0,0,102,75,1,0,0,0,102,
84,1,0,0,0,102,93,1,0,0,0,103,5,1,0,0,0,104,105,5,10,0,0,105,106,3,26,13,
0,106,107,5,11,0,0,107,108,3,10,5,0,108,7,1,0,0,0,109,110,5,10,0,0,110,111,
3,28,14,0,111,116,3,18,9,0,112,113,5,75,0,0,113,115,3,18,9,0,114,112,1,0,
0,0,115,118,1,0,0,0,116,114,1,0,0,0,116,117,1,0,0,0,117,9,1,0,0,0,118,116,
1,0,0,0,119,120,6,5,-1,0,120,124,5,2,0,0,121,123,3,10,5,0,122,121,1,0,0,
0,123,126,1,0,0,0,124,122,1,0,0,0,124,125,1,0,0,0,125,127,1,0,0,0,126,124,
1,0,0,0,127,220,5,3,0,0,128,220,3,12,6,0,129,220,3,14,7,0,130,131,5,14,0,
0,131,220,3,10,5,41,132,133,5,15,0,0,133,220,3,10,5,40,134,135,5,16,0,0,
135,220,3,10,5,39,136,137,5,17,0,0,137,220,3,10,5,38,138,139,5,18,0,0,139,
220,3,10,5,37,140,141,5,19,0,0,141,220,3,10,5,36,142,143,5,20,0,0,143,220,
3,10,5,35,144,145,5,21,0,0,145,220,3,10,5,34,146,147,5,22,0,0,147,148,3,
30,15,0,148,149,3,10,5,33,149,220,1,0,0,0,150,151,5,23,0,0,151,152,3,30,
15,0,152,153,3,10,5,32,153,220,1,0,0,0,154,220,3,16,8,0,155,156,5,24,0,0,
156,220,3,16,8,0,157,158,5,25,0,0,158,220,3,16,8,0,159,160,5,26,0,0,160,
220,3,16,8,0,161,162,5,27,0,0,162,220,3,16,8,0,163,220,5,28,0,0,164,165,
5,29,0,0,165,220,3,30,15,0,166,220,5,30,0,0,167,168,5,31,0,0,168,220,3,20,
10,0,169,220,5,32,0,0,170,220,5,33,0,0,171,172,5,34,0,0,172,220,3,20,10,
0,173,174,5,35,0,0,174,220,3,22,11,0,175,176,5,36,0,0,176,220,3,30,15,0,
177,178,5,37,0,0,178,220,3,30,15,0,179,220,5,38,0,0,180,220,5,39,0,0,181,
182,5,40,0,0,182,183,3,10,5,0,183,184,5,41,0,0,184,185,3,10,5,14,185,220,
1,0,0,0,186,187,5,42,0,0,187,220,3,10,5,13,188,189,5,43,0,0,189,220,3,10,
5,12,190,220,5,44,0,0,191,192,5,45,0,0,192,200,5,2,0,0,193,195,5,73,0,0,
194,196,3,26,13,0,195,194,1,0,0,0,195,196,1,0,0,0,196,199,1,0,0,0,197,199,
3,10,5,0,198,193,1,0,0,0,198,197,1,0,0,0,199,202,1,0,0,0,200,198,1,0,0,0,
200,201,1,0,0,0,201,203,1,0,0,0,202,200,1,0,0,0,203,220,5,3,0,0,204,205,
5,46,0,0,205,220,3,24,12,0,206,207,5,47,0,0,207,220,3,24,12,0,208,220,3,
24,12,0,209,220,3,26,13,0,210,220,3,28,14,0,211,213,5,48,0,0,212,214,5,49,
0,0,213,212,1,0,0,0,213,214,1,0,0,0,214,215,1,0,0,0,215,220,3,28,14,0,216,
220,5,50,0,0,217,220,5,51,0,0,218,220,5,52,0,0,219,119,1,0,0,0,219,128,1,
0,0,0,219,129,1,0,0,0,219,130,1,0,0,0,219,132,1,0,0,0,219,134,1,0,0,0,219,
136,1,0,0,0,219,138,1,0,0,0,219,140,1,0,0,0,219,142,1,0,0,0,219,144,1,0,
0,0,219,146,1,0,0,0,219,150,1,0,0,0,219,154,1,0,0,0,219,155,1,0,0,0,219,
157,1,0,0,0,219,159,1,0,0,0,219,161,1,0,0,0,219,163,1,0,0,0,219,164,1,0,
0,0,219,166,1,0,0,0,219,167,1,0,0,0,219,169,1,0,0,0,219,170,1,0,0,0,219,
171,1,0,0,0,219,173,1,0,0,0,219,175,1,0,0,0,219,177,1,0,0,0,219,179,1,0,
0,0,219,180,1,0,0,0,219,181,1,0,0,0,219,186,1,0,0,0,219,188,1,0,0,0,219,
190,1,0,0,0,219,191,1,0,0,0,219,204,1,0,0,0,219,206,1,0,0,0,219,208,1,0,
0,0,219,209,1,0,0,0,219,210,1,0,0,0,219,211,1,0,0,0,219,216,1,0,0,0,219,
217,1,0,0,0,219,218,1,0,0,0,220,229,1,0,0,0,221,222,10,43,0,0,222,223,5,
12,0,0,223,228,3,10,5,44,224,225,10,42,0,0,225,226,5,13,0,0,226,228,3,10,
5,43,227,221,1,0,0,0,227,224,1,0,0,0,228,231,1,0,0,0,229,227,1,0,0,0,229,
230,1,0,0,0,230,11,1,0,0,0,231,229,1,0,0,0,232,233,5,53,0,0,233,234,3,22,
11,0,234,235,5,24,0,0,235,236,3,30,15,0,236,288,1,0,0,0,237,238,5,53,0,0,
238,239,3,22,11,0,239,240,5,54,0,0,240,241,3,30,15,0,241,288,1,0,0,0,242,
243,5,53,0,0,243,244,3,22,11,0,244,245,5,55,0,0,245,246,3,30,15,0,246,288,
1,0,0,0,247,248,5,53,0,0,248,249,3,22,11,0,249,250,5,56,0,0,250,251,3,30,
15,0,251,288,1,0,0,0,252,253,5,53,0,0,253,254,3,22,11,0,254,255,5,57,0,0,
255,256,3,30,15,0,256,288,1,0,0,0,257,258,5,53,0,0,258,259,3,22,11,0,259,
260,5,58,0,0,260,261,3,30,15,0,261,288,1,0,0,0,262,263,5,53,0,0,263,264,
3,22,11,0,264,265,5,59,0,0,265,266,3,30,15,0,266,288,1,0,0,0,267,268,5,53,
0,0,268,269,3,22,11,0,269,270,5,60,0,0,270,271,3,30,15,0,271,288,1,0,0,0,
272,273,5,53,0,0,273,274,3,22,11,0,274,275,5,61,0,0,275,276,3,30,15,0,276,
288,1,0,0,0,277,278,5,53,0,0,278,279,3,22,11,0,279,280,5,62,0,0,280,281,
3,30,15,0,281,288,1,0,0,0,282,283,5,53,0,0,283,284,3,22,11,0,284,285,5,63,
0,0,285,286,3,30,15,0,286,288,1,0,0,0,287,232,1,0,0,0,287,237,1,0,0,0,287,
242,1,0,0,0,287,247,1,0,0,0,287,252,1,0,0,0,287,257,1,0,0,0,287,262,1,0,
0,0,287,267,1,0,0,0,287,272,1,0,0,0,287,277,1,0,0,0,287,282,1,0,0,0,288,
13,1,0,0,0,289,290,5,53,0,0,290,291,3,20,10,0,291,292,3,10,5,0,292,15,1,
0,0,0,293,296,3,20,10,0,294,296,5,73,0,0,295,293,1,0,0,0,295,294,1,0,0,0,
296,17,1,0,0,0,297,300,3,28,14,0,298,300,5,73,0,0,299,297,1,0,0,0,299,298,
1,0,0,0,300,19,1,0,0,0,301,302,5,76,0,0,302,21,1,0,0,0,303,304,5,76,0,0,
304,23,1,0,0,0,305,306,5,76,0,0,306,25,1,0,0,0,307,308,5,76,0,0,308,27,1,
0,0,0,309,310,5,76,0,0,310,29,1,0,0,0,311,312,6,15,-1,0,312,313,5,2,0,0,
313,314,3,30,15,0,314,315,5,3,0,0,315,328,1,0,0,0,316,317,5,49,0,0,317,328,
3,30,15,9,318,328,5,67,0,0,319,328,5,68,0,0,320,328,5,69,0,0,321,328,5,70,
0,0,322,328,5,71,0,0,323,324,5,72,0,0,324,328,3,20,10,0,325,328,3,22,11,
0,326,328,5,74,0,0,327,311,1,0,0,0,327,316,1,0,0,0,327,318,1,0,0,0,327,319,
1,0,0,0,327,320,1,0,0,0,327,321,1,0,0,0,327,322,1,0,0,0,327,323,1,0,0,0,
327,325,1,0,0,0,327,326,1,0,0,0,328,343,1,0,0,0,329,330,10,13,0,0,330,331,
5,64,0,0,331,342,3,30,15,14,332,333,10,12,0,0,333,334,5,49,0,0,334,342,3,
30,15,13,335,336,10,11,0,0,336,337,5,65,0,0,337,342,3,30,15,12,338,339,10,
10,0,0,339,340,5,66,0,0,340,342,3,30,15,11,341,329,1,0,0,0,341,332,1,0,0,
0,341,335,1,0,0,0,341,338,1,0,0,0,342,345,1,0,0,0,343,341,1,0,0,0,343,344,
1,0,0,0,344,31,1,0,0,0,345,343,1,0,0,0,24,35,46,53,62,71,80,89,98,102,116,
124,195,198,200,213,219,227,229,287,295,299,327,341,343];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class snowballParser extends antlr4.Parser {

    static grammarFileName = "snowball.g4";
    static literalNames = [ null, "'backwardmode'", "'('", "')'", "'strings'", 
                            "'integers'", "'booleans'", "'routines'", "'externals'", 
                            "'groupings'", "'define'", "'as'", "'or'", "'and'", 
                            "'not'", "'test'", "'try'", "'do'", "'fail'", 
                            "'goto'", "'gopast'", "'repeat'", "'loop'", 
                            "'atleast'", "'='", "'insert'", "'attach'", 
                            "'<-'", "'delete'", "'hop'", "'next'", "'=>'", 
                            "'['", "']'", "'->'", "'setmark'", "'tomark'", 
                            "'atmark'", "'tolimit'", "'atlimit'", "'setlimit'", 
                            "'for'", "'backwards'", "'reverse'", "'substring'", 
                            "'among'", "'set'", "'unset'", "'non'", "'-'", 
                            "'true'", "'false'", "'?'", "'$'", "'+='", "'-='", 
                            "'*='", "'/='", "'=='", "'!='", "'>'", "'>='", 
                            "'<'", "'<='", "'+'", "'*'", "'/'", "'maxint'", 
                            "'minint'", "'cursor'", "'limit'", "'size'", 
                            "'sizeof'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, "LITERAL_STRING", "NUMBER", "PLUS_OR_MINUS", 
                             "NAME", "WS" ];
    static ruleNames = [ "program", "p", "declaration", "r_definition", 
                         "g_definition", "c", "i_command", "s_command", 
                         "s", "g", "s_name", "i_name", "b_name", "r_name", 
                         "g_name", "ae" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = snowballParser.ruleNames;
        this.literalNames = snowballParser.literalNames;
        this.symbolicNames = snowballParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 5:
    	    		return this.c_sempred(localctx, predIndex);
    	case 15:
    	    		return this.ae_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    c_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 43);
    		case 1:
    			return this.precpred(this._ctx, 42);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    ae_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 13);
    		case 3:
    			return this.precpred(this._ctx, 12);
    		case 4:
    			return this.precpred(this._ctx, 11);
    		case 5:
    			return this.precpred(this._ctx, 10);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, snowballParser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << snowballParser.T__0) | (1 << snowballParser.T__3) | (1 << snowballParser.T__4) | (1 << snowballParser.T__5) | (1 << snowballParser.T__6) | (1 << snowballParser.T__7) | (1 << snowballParser.T__8) | (1 << snowballParser.T__9))) !== 0)) {
	            this.state = 32;
	            this.p();
	            this.state = 37;
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



	p() {
	    let localctx = new PContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, snowballParser.RULE_p);
	    try {
	        this.state = 46;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 38;
	            this.declaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 39;
	            this.r_definition();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 40;
	            this.g_definition();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 41;
	            this.match(snowballParser.T__0);
	            this.state = 42;
	            this.match(snowballParser.T__1);
	            this.state = 43;
	            this.p();
	            this.state = 44;
	            this.match(snowballParser.T__2);
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



	declaration() {
	    let localctx = new DeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, snowballParser.RULE_declaration);
	    var _la = 0; // Token type
	    try {
	        this.state = 102;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case snowballParser.T__3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 48;
	            this.match(snowballParser.T__3);
	            this.state = 49;
	            this.match(snowballParser.T__1);
	            this.state = 53;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===snowballParser.NAME) {
	                this.state = 50;
	                this.s_name();
	                this.state = 55;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 56;
	            this.match(snowballParser.T__2);
	            break;
	        case snowballParser.T__4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 57;
	            this.match(snowballParser.T__4);
	            this.state = 58;
	            this.match(snowballParser.T__1);
	            this.state = 62;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===snowballParser.NAME) {
	                this.state = 59;
	                this.i_name();
	                this.state = 64;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 65;
	            this.match(snowballParser.T__2);
	            break;
	        case snowballParser.T__5:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 66;
	            this.match(snowballParser.T__5);
	            this.state = 67;
	            this.match(snowballParser.T__1);
	            this.state = 71;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===snowballParser.NAME) {
	                this.state = 68;
	                this.b_name();
	                this.state = 73;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 74;
	            this.match(snowballParser.T__2);
	            break;
	        case snowballParser.T__6:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 75;
	            this.match(snowballParser.T__6);
	            this.state = 76;
	            this.match(snowballParser.T__1);
	            this.state = 80;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===snowballParser.NAME) {
	                this.state = 77;
	                this.r_name();
	                this.state = 82;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 83;
	            this.match(snowballParser.T__2);
	            break;
	        case snowballParser.T__7:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 84;
	            this.match(snowballParser.T__7);
	            this.state = 85;
	            this.match(snowballParser.T__1);
	            this.state = 89;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===snowballParser.NAME) {
	                this.state = 86;
	                this.r_name();
	                this.state = 91;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 92;
	            this.match(snowballParser.T__2);
	            break;
	        case snowballParser.T__8:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 93;
	            this.match(snowballParser.T__8);
	            this.state = 94;
	            this.match(snowballParser.T__1);
	            this.state = 98;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===snowballParser.NAME) {
	                this.state = 95;
	                this.g_name();
	                this.state = 100;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 101;
	            this.match(snowballParser.T__2);
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



	r_definition() {
	    let localctx = new R_definitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, snowballParser.RULE_r_definition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.match(snowballParser.T__9);
	        this.state = 105;
	        this.r_name();
	        this.state = 106;
	        this.match(snowballParser.T__10);
	        this.state = 107;
	        this.c(0);
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



	g_definition() {
	    let localctx = new G_definitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, snowballParser.RULE_g_definition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        this.match(snowballParser.T__9);
	        this.state = 110;
	        this.g_name();
	        this.state = 111;
	        this.g();
	        this.state = 116;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===snowballParser.PLUS_OR_MINUS) {
	            this.state = 112;
	            this.match(snowballParser.PLUS_OR_MINUS);
	            this.state = 113;
	            this.g();
	            this.state = 118;
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


	c(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new CContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 10;
	    this.enterRecursionRule(localctx, 10, snowballParser.RULE_c, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 219;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 120;
	            this.match(snowballParser.T__1);
	            this.state = 124;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << snowballParser.T__1) | (1 << snowballParser.T__13) | (1 << snowballParser.T__14) | (1 << snowballParser.T__15) | (1 << snowballParser.T__16) | (1 << snowballParser.T__17) | (1 << snowballParser.T__18) | (1 << snowballParser.T__19) | (1 << snowballParser.T__20) | (1 << snowballParser.T__21) | (1 << snowballParser.T__22) | (1 << snowballParser.T__23) | (1 << snowballParser.T__24) | (1 << snowballParser.T__25) | (1 << snowballParser.T__26) | (1 << snowballParser.T__27) | (1 << snowballParser.T__28) | (1 << snowballParser.T__29) | (1 << snowballParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (snowballParser.T__31 - 32)) | (1 << (snowballParser.T__32 - 32)) | (1 << (snowballParser.T__33 - 32)) | (1 << (snowballParser.T__34 - 32)) | (1 << (snowballParser.T__35 - 32)) | (1 << (snowballParser.T__36 - 32)) | (1 << (snowballParser.T__37 - 32)) | (1 << (snowballParser.T__38 - 32)) | (1 << (snowballParser.T__39 - 32)) | (1 << (snowballParser.T__41 - 32)) | (1 << (snowballParser.T__42 - 32)) | (1 << (snowballParser.T__43 - 32)) | (1 << (snowballParser.T__44 - 32)) | (1 << (snowballParser.T__45 - 32)) | (1 << (snowballParser.T__46 - 32)) | (1 << (snowballParser.T__47 - 32)) | (1 << (snowballParser.T__49 - 32)) | (1 << (snowballParser.T__50 - 32)) | (1 << (snowballParser.T__51 - 32)) | (1 << (snowballParser.T__52 - 32)))) !== 0) || _la===snowballParser.LITERAL_STRING || _la===snowballParser.NAME) {
	                this.state = 121;
	                this.c(0);
	                this.state = 126;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 127;
	            this.match(snowballParser.T__2);
	            break;

	        case 2:
	            this.state = 128;
	            this.i_command();
	            break;

	        case 3:
	            this.state = 129;
	            this.s_command();
	            break;

	        case 4:
	            this.state = 130;
	            this.match(snowballParser.T__13);
	            this.state = 131;
	            this.c(41);
	            break;

	        case 5:
	            this.state = 132;
	            this.match(snowballParser.T__14);
	            this.state = 133;
	            this.c(40);
	            break;

	        case 6:
	            this.state = 134;
	            this.match(snowballParser.T__15);
	            this.state = 135;
	            this.c(39);
	            break;

	        case 7:
	            this.state = 136;
	            this.match(snowballParser.T__16);
	            this.state = 137;
	            this.c(38);
	            break;

	        case 8:
	            this.state = 138;
	            this.match(snowballParser.T__17);
	            this.state = 139;
	            this.c(37);
	            break;

	        case 9:
	            this.state = 140;
	            this.match(snowballParser.T__18);
	            this.state = 141;
	            this.c(36);
	            break;

	        case 10:
	            this.state = 142;
	            this.match(snowballParser.T__19);
	            this.state = 143;
	            this.c(35);
	            break;

	        case 11:
	            this.state = 144;
	            this.match(snowballParser.T__20);
	            this.state = 145;
	            this.c(34);
	            break;

	        case 12:
	            this.state = 146;
	            this.match(snowballParser.T__21);
	            this.state = 147;
	            this.ae(0);
	            this.state = 148;
	            this.c(33);
	            break;

	        case 13:
	            this.state = 150;
	            this.match(snowballParser.T__22);
	            this.state = 151;
	            this.ae(0);
	            this.state = 152;
	            this.c(32);
	            break;

	        case 14:
	            this.state = 154;
	            this.s();
	            break;

	        case 15:
	            this.state = 155;
	            this.match(snowballParser.T__23);
	            this.state = 156;
	            this.s();
	            break;

	        case 16:
	            this.state = 157;
	            this.match(snowballParser.T__24);
	            this.state = 158;
	            this.s();
	            break;

	        case 17:
	            this.state = 159;
	            this.match(snowballParser.T__25);
	            this.state = 160;
	            this.s();
	            break;

	        case 18:
	            this.state = 161;
	            this.match(snowballParser.T__26);
	            this.state = 162;
	            this.s();
	            break;

	        case 19:
	            this.state = 163;
	            this.match(snowballParser.T__27);
	            break;

	        case 20:
	            this.state = 164;
	            this.match(snowballParser.T__28);
	            this.state = 165;
	            this.ae(0);
	            break;

	        case 21:
	            this.state = 166;
	            this.match(snowballParser.T__29);
	            break;

	        case 22:
	            this.state = 167;
	            this.match(snowballParser.T__30);
	            this.state = 168;
	            this.s_name();
	            break;

	        case 23:
	            this.state = 169;
	            this.match(snowballParser.T__31);
	            break;

	        case 24:
	            this.state = 170;
	            this.match(snowballParser.T__32);
	            break;

	        case 25:
	            this.state = 171;
	            this.match(snowballParser.T__33);
	            this.state = 172;
	            this.s_name();
	            break;

	        case 26:
	            this.state = 173;
	            this.match(snowballParser.T__34);
	            this.state = 174;
	            this.i_name();
	            break;

	        case 27:
	            this.state = 175;
	            this.match(snowballParser.T__35);
	            this.state = 176;
	            this.ae(0);
	            break;

	        case 28:
	            this.state = 177;
	            this.match(snowballParser.T__36);
	            this.state = 178;
	            this.ae(0);
	            break;

	        case 29:
	            this.state = 179;
	            this.match(snowballParser.T__37);
	            break;

	        case 30:
	            this.state = 180;
	            this.match(snowballParser.T__38);
	            break;

	        case 31:
	            this.state = 181;
	            this.match(snowballParser.T__39);
	            this.state = 182;
	            this.c(0);
	            this.state = 183;
	            this.match(snowballParser.T__40);
	            this.state = 184;
	            this.c(14);
	            break;

	        case 32:
	            this.state = 186;
	            this.match(snowballParser.T__41);
	            this.state = 187;
	            this.c(13);
	            break;

	        case 33:
	            this.state = 188;
	            this.match(snowballParser.T__42);
	            this.state = 189;
	            this.c(12);
	            break;

	        case 34:
	            this.state = 190;
	            this.match(snowballParser.T__43);
	            break;

	        case 35:
	            this.state = 191;
	            this.match(snowballParser.T__44);
	            this.state = 192;
	            this.match(snowballParser.T__1);
	            this.state = 200;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << snowballParser.T__1) | (1 << snowballParser.T__13) | (1 << snowballParser.T__14) | (1 << snowballParser.T__15) | (1 << snowballParser.T__16) | (1 << snowballParser.T__17) | (1 << snowballParser.T__18) | (1 << snowballParser.T__19) | (1 << snowballParser.T__20) | (1 << snowballParser.T__21) | (1 << snowballParser.T__22) | (1 << snowballParser.T__23) | (1 << snowballParser.T__24) | (1 << snowballParser.T__25) | (1 << snowballParser.T__26) | (1 << snowballParser.T__27) | (1 << snowballParser.T__28) | (1 << snowballParser.T__29) | (1 << snowballParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (snowballParser.T__31 - 32)) | (1 << (snowballParser.T__32 - 32)) | (1 << (snowballParser.T__33 - 32)) | (1 << (snowballParser.T__34 - 32)) | (1 << (snowballParser.T__35 - 32)) | (1 << (snowballParser.T__36 - 32)) | (1 << (snowballParser.T__37 - 32)) | (1 << (snowballParser.T__38 - 32)) | (1 << (snowballParser.T__39 - 32)) | (1 << (snowballParser.T__41 - 32)) | (1 << (snowballParser.T__42 - 32)) | (1 << (snowballParser.T__43 - 32)) | (1 << (snowballParser.T__44 - 32)) | (1 << (snowballParser.T__45 - 32)) | (1 << (snowballParser.T__46 - 32)) | (1 << (snowballParser.T__47 - 32)) | (1 << (snowballParser.T__49 - 32)) | (1 << (snowballParser.T__50 - 32)) | (1 << (snowballParser.T__51 - 32)) | (1 << (snowballParser.T__52 - 32)))) !== 0) || _la===snowballParser.LITERAL_STRING || _la===snowballParser.NAME) {
	                this.state = 198;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 193;
	                    this.match(snowballParser.LITERAL_STRING);
	                    this.state = 195;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	                    if(la_===1) {
	                        this.state = 194;
	                        this.r_name();

	                    }
	                    break;

	                case 2:
	                    this.state = 197;
	                    this.c(0);
	                    break;

	                }
	                this.state = 202;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 203;
	            this.match(snowballParser.T__2);
	            break;

	        case 36:
	            this.state = 204;
	            this.match(snowballParser.T__45);
	            this.state = 205;
	            this.b_name();
	            break;

	        case 37:
	            this.state = 206;
	            this.match(snowballParser.T__46);
	            this.state = 207;
	            this.b_name();
	            break;

	        case 38:
	            this.state = 208;
	            this.b_name();
	            break;

	        case 39:
	            this.state = 209;
	            this.r_name();
	            break;

	        case 40:
	            this.state = 210;
	            this.g_name();
	            break;

	        case 41:
	            this.state = 211;
	            this.match(snowballParser.T__47);
	            this.state = 213;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===snowballParser.T__48) {
	                this.state = 212;
	                this.match(snowballParser.T__48);
	            }

	            this.state = 215;
	            this.g_name();
	            break;

	        case 42:
	            this.state = 216;
	            this.match(snowballParser.T__49);
	            break;

	        case 43:
	            this.state = 217;
	            this.match(snowballParser.T__50);
	            break;

	        case 44:
	            this.state = 218;
	            this.match(snowballParser.T__51);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 229;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 227;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new CContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, snowballParser.RULE_c);
	                    this.state = 221;
	                    if (!( this.precpred(this._ctx, 43))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 43)");
	                    }
	                    this.state = 222;
	                    this.match(snowballParser.T__11);
	                    this.state = 223;
	                    this.c(44);
	                    break;

	                case 2:
	                    localctx = new CContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, snowballParser.RULE_c);
	                    this.state = 224;
	                    if (!( this.precpred(this._ctx, 42))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 42)");
	                    }
	                    this.state = 225;
	                    this.match(snowballParser.T__12);
	                    this.state = 226;
	                    this.c(43);
	                    break;

	                } 
	            }
	            this.state = 231;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
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



	i_command() {
	    let localctx = new I_commandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, snowballParser.RULE_i_command);
	    try {
	        this.state = 287;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 232;
	            this.match(snowballParser.T__52);
	            this.state = 233;
	            this.i_name();
	            this.state = 234;
	            this.match(snowballParser.T__23);
	            this.state = 235;
	            this.ae(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 237;
	            this.match(snowballParser.T__52);
	            this.state = 238;
	            this.i_name();
	            this.state = 239;
	            this.match(snowballParser.T__53);
	            this.state = 240;
	            this.ae(0);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 242;
	            this.match(snowballParser.T__52);
	            this.state = 243;
	            this.i_name();
	            this.state = 244;
	            this.match(snowballParser.T__54);
	            this.state = 245;
	            this.ae(0);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 247;
	            this.match(snowballParser.T__52);
	            this.state = 248;
	            this.i_name();
	            this.state = 249;
	            this.match(snowballParser.T__55);
	            this.state = 250;
	            this.ae(0);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 252;
	            this.match(snowballParser.T__52);
	            this.state = 253;
	            this.i_name();
	            this.state = 254;
	            this.match(snowballParser.T__56);
	            this.state = 255;
	            this.ae(0);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 257;
	            this.match(snowballParser.T__52);
	            this.state = 258;
	            this.i_name();
	            this.state = 259;
	            this.match(snowballParser.T__57);
	            this.state = 260;
	            this.ae(0);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 262;
	            this.match(snowballParser.T__52);
	            this.state = 263;
	            this.i_name();
	            this.state = 264;
	            this.match(snowballParser.T__58);
	            this.state = 265;
	            this.ae(0);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 267;
	            this.match(snowballParser.T__52);
	            this.state = 268;
	            this.i_name();
	            this.state = 269;
	            this.match(snowballParser.T__59);
	            this.state = 270;
	            this.ae(0);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 272;
	            this.match(snowballParser.T__52);
	            this.state = 273;
	            this.i_name();
	            this.state = 274;
	            this.match(snowballParser.T__60);
	            this.state = 275;
	            this.ae(0);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 277;
	            this.match(snowballParser.T__52);
	            this.state = 278;
	            this.i_name();
	            this.state = 279;
	            this.match(snowballParser.T__61);
	            this.state = 280;
	            this.ae(0);
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 282;
	            this.match(snowballParser.T__52);
	            this.state = 283;
	            this.i_name();
	            this.state = 284;
	            this.match(snowballParser.T__62);
	            this.state = 285;
	            this.ae(0);
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



	s_command() {
	    let localctx = new S_commandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, snowballParser.RULE_s_command);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 289;
	        this.match(snowballParser.T__52);
	        this.state = 290;
	        this.s_name();
	        this.state = 291;
	        this.c(0);
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



	s() {
	    let localctx = new SContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, snowballParser.RULE_s);
	    try {
	        this.state = 295;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case snowballParser.NAME:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 293;
	            this.s_name();
	            break;
	        case snowballParser.LITERAL_STRING:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 294;
	            this.match(snowballParser.LITERAL_STRING);
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



	g() {
	    let localctx = new GContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, snowballParser.RULE_g);
	    try {
	        this.state = 299;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case snowballParser.NAME:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 297;
	            this.g_name();
	            break;
	        case snowballParser.LITERAL_STRING:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 298;
	            this.match(snowballParser.LITERAL_STRING);
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



	s_name() {
	    let localctx = new S_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, snowballParser.RULE_s_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 301;
	        this.match(snowballParser.NAME);
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



	i_name() {
	    let localctx = new I_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, snowballParser.RULE_i_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 303;
	        this.match(snowballParser.NAME);
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



	b_name() {
	    let localctx = new B_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, snowballParser.RULE_b_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 305;
	        this.match(snowballParser.NAME);
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



	r_name() {
	    let localctx = new R_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, snowballParser.RULE_r_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 307;
	        this.match(snowballParser.NAME);
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



	g_name() {
	    let localctx = new G_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, snowballParser.RULE_g_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 309;
	        this.match(snowballParser.NAME);
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


	ae(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new AeContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 30;
	    this.enterRecursionRule(localctx, 30, snowballParser.RULE_ae, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 327;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case snowballParser.T__1:
	            this.state = 312;
	            this.match(snowballParser.T__1);
	            this.state = 313;
	            this.ae(0);
	            this.state = 314;
	            this.match(snowballParser.T__2);
	            break;
	        case snowballParser.T__48:
	            this.state = 316;
	            this.match(snowballParser.T__48);
	            this.state = 317;
	            this.ae(9);
	            break;
	        case snowballParser.T__66:
	            this.state = 318;
	            this.match(snowballParser.T__66);
	            break;
	        case snowballParser.T__67:
	            this.state = 319;
	            this.match(snowballParser.T__67);
	            break;
	        case snowballParser.T__68:
	            this.state = 320;
	            this.match(snowballParser.T__68);
	            break;
	        case snowballParser.T__69:
	            this.state = 321;
	            this.match(snowballParser.T__69);
	            break;
	        case snowballParser.T__70:
	            this.state = 322;
	            this.match(snowballParser.T__70);
	            break;
	        case snowballParser.T__71:
	            this.state = 323;
	            this.match(snowballParser.T__71);
	            this.state = 324;
	            this.s_name();
	            break;
	        case snowballParser.NAME:
	            this.state = 325;
	            this.i_name();
	            break;
	        case snowballParser.NUMBER:
	            this.state = 326;
	            this.match(snowballParser.NUMBER);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 343;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,23,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 341;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new AeContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, snowballParser.RULE_ae);
	                    this.state = 329;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 330;
	                    this.match(snowballParser.T__63);
	                    this.state = 331;
	                    this.ae(14);
	                    break;

	                case 2:
	                    localctx = new AeContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, snowballParser.RULE_ae);
	                    this.state = 332;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 333;
	                    this.match(snowballParser.T__48);
	                    this.state = 334;
	                    this.ae(13);
	                    break;

	                case 3:
	                    localctx = new AeContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, snowballParser.RULE_ae);
	                    this.state = 335;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 336;
	                    this.match(snowballParser.T__64);
	                    this.state = 337;
	                    this.ae(12);
	                    break;

	                case 4:
	                    localctx = new AeContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, snowballParser.RULE_ae);
	                    this.state = 338;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 339;
	                    this.match(snowballParser.T__65);
	                    this.state = 340;
	                    this.ae(11);
	                    break;

	                } 
	            }
	            this.state = 345;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,23,this._ctx);
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


}

snowballParser.EOF = antlr4.Token.EOF;
snowballParser.T__0 = 1;
snowballParser.T__1 = 2;
snowballParser.T__2 = 3;
snowballParser.T__3 = 4;
snowballParser.T__4 = 5;
snowballParser.T__5 = 6;
snowballParser.T__6 = 7;
snowballParser.T__7 = 8;
snowballParser.T__8 = 9;
snowballParser.T__9 = 10;
snowballParser.T__10 = 11;
snowballParser.T__11 = 12;
snowballParser.T__12 = 13;
snowballParser.T__13 = 14;
snowballParser.T__14 = 15;
snowballParser.T__15 = 16;
snowballParser.T__16 = 17;
snowballParser.T__17 = 18;
snowballParser.T__18 = 19;
snowballParser.T__19 = 20;
snowballParser.T__20 = 21;
snowballParser.T__21 = 22;
snowballParser.T__22 = 23;
snowballParser.T__23 = 24;
snowballParser.T__24 = 25;
snowballParser.T__25 = 26;
snowballParser.T__26 = 27;
snowballParser.T__27 = 28;
snowballParser.T__28 = 29;
snowballParser.T__29 = 30;
snowballParser.T__30 = 31;
snowballParser.T__31 = 32;
snowballParser.T__32 = 33;
snowballParser.T__33 = 34;
snowballParser.T__34 = 35;
snowballParser.T__35 = 36;
snowballParser.T__36 = 37;
snowballParser.T__37 = 38;
snowballParser.T__38 = 39;
snowballParser.T__39 = 40;
snowballParser.T__40 = 41;
snowballParser.T__41 = 42;
snowballParser.T__42 = 43;
snowballParser.T__43 = 44;
snowballParser.T__44 = 45;
snowballParser.T__45 = 46;
snowballParser.T__46 = 47;
snowballParser.T__47 = 48;
snowballParser.T__48 = 49;
snowballParser.T__49 = 50;
snowballParser.T__50 = 51;
snowballParser.T__51 = 52;
snowballParser.T__52 = 53;
snowballParser.T__53 = 54;
snowballParser.T__54 = 55;
snowballParser.T__55 = 56;
snowballParser.T__56 = 57;
snowballParser.T__57 = 58;
snowballParser.T__58 = 59;
snowballParser.T__59 = 60;
snowballParser.T__60 = 61;
snowballParser.T__61 = 62;
snowballParser.T__62 = 63;
snowballParser.T__63 = 64;
snowballParser.T__64 = 65;
snowballParser.T__65 = 66;
snowballParser.T__66 = 67;
snowballParser.T__67 = 68;
snowballParser.T__68 = 69;
snowballParser.T__69 = 70;
snowballParser.T__70 = 71;
snowballParser.T__71 = 72;
snowballParser.LITERAL_STRING = 73;
snowballParser.NUMBER = 74;
snowballParser.PLUS_OR_MINUS = 75;
snowballParser.NAME = 76;
snowballParser.WS = 77;

snowballParser.RULE_program = 0;
snowballParser.RULE_p = 1;
snowballParser.RULE_declaration = 2;
snowballParser.RULE_r_definition = 3;
snowballParser.RULE_g_definition = 4;
snowballParser.RULE_c = 5;
snowballParser.RULE_i_command = 6;
snowballParser.RULE_s_command = 7;
snowballParser.RULE_s = 8;
snowballParser.RULE_g = 9;
snowballParser.RULE_s_name = 10;
snowballParser.RULE_i_name = 11;
snowballParser.RULE_b_name = 12;
snowballParser.RULE_r_name = 13;
snowballParser.RULE_g_name = 14;
snowballParser.RULE_ae = 15;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snowballParser.RULE_program;
    }

	p = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PContext);
	    } else {
	        return this.getTypedRuleContext(PContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof snowballListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snowballListener ) {
	        listener.exitProgram(this);
		}
	}


}



class PContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snowballParser.RULE_p;
    }

	declaration() {
	    return this.getTypedRuleContext(DeclarationContext,0);
	};

	r_definition() {
	    return this.getTypedRuleContext(R_definitionContext,0);
	};

	g_definition() {
	    return this.getTypedRuleContext(G_definitionContext,0);
	};

	p() {
	    return this.getTypedRuleContext(PContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof snowballListener ) {
	        listener.enterP(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snowballListener ) {
	        listener.exitP(this);
		}
	}


}



class DeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snowballParser.RULE_declaration;
    }

	s_name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(S_nameContext);
	    } else {
	        return this.getTypedRuleContext(S_nameContext,i);
	    }
	};

	i_name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(I_nameContext);
	    } else {
	        return this.getTypedRuleContext(I_nameContext,i);
	    }
	};

	b_name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(B_nameContext);
	    } else {
	        return this.getTypedRuleContext(B_nameContext,i);
	    }
	};

	r_name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(R_nameContext);
	    } else {
	        return this.getTypedRuleContext(R_nameContext,i);
	    }
	};

	g_name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(G_nameContext);
	    } else {
	        return this.getTypedRuleContext(G_nameContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof snowballListener ) {
	        listener.enterDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snowballListener ) {
	        listener.exitDeclaration(this);
		}
	}


}



class R_definitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snowballParser.RULE_r_definition;
    }

	r_name() {
	    return this.getTypedRuleContext(R_nameContext,0);
	};

	c() {
	    return this.getTypedRuleContext(CContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof snowballListener ) {
	        listener.enterR_definition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snowballListener ) {
	        listener.exitR_definition(this);
		}
	}


}



class G_definitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snowballParser.RULE_g_definition;
    }

	g_name() {
	    return this.getTypedRuleContext(G_nameContext,0);
	};

	g = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(GContext);
	    } else {
	        return this.getTypedRuleContext(GContext,i);
	    }
	};

	PLUS_OR_MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(snowballParser.PLUS_OR_MINUS);
	    } else {
	        return this.getToken(snowballParser.PLUS_OR_MINUS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof snowballListener ) {
	        listener.enterG_definition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snowballListener ) {
	        listener.exitG_definition(this);
		}
	}


}



class CContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snowballParser.RULE_c;
    }

	c = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CContext);
	    } else {
	        return this.getTypedRuleContext(CContext,i);
	    }
	};

	i_command() {
	    return this.getTypedRuleContext(I_commandContext,0);
	};

	s_command() {
	    return this.getTypedRuleContext(S_commandContext,0);
	};

	ae() {
	    return this.getTypedRuleContext(AeContext,0);
	};

	s() {
	    return this.getTypedRuleContext(SContext,0);
	};

	s_name() {
	    return this.getTypedRuleContext(S_nameContext,0);
	};

	i_name() {
	    return this.getTypedRuleContext(I_nameContext,0);
	};

	LITERAL_STRING = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(snowballParser.LITERAL_STRING);
	    } else {
	        return this.getToken(snowballParser.LITERAL_STRING, i);
	    }
	};


	r_name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(R_nameContext);
	    } else {
	        return this.getTypedRuleContext(R_nameContext,i);
	    }
	};

	b_name() {
	    return this.getTypedRuleContext(B_nameContext,0);
	};

	g_name() {
	    return this.getTypedRuleContext(G_nameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof snowballListener ) {
	        listener.enterC(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snowballListener ) {
	        listener.exitC(this);
		}
	}


}



class I_commandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snowballParser.RULE_i_command;
    }

	i_name() {
	    return this.getTypedRuleContext(I_nameContext,0);
	};

	ae() {
	    return this.getTypedRuleContext(AeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof snowballListener ) {
	        listener.enterI_command(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snowballListener ) {
	        listener.exitI_command(this);
		}
	}


}



class S_commandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snowballParser.RULE_s_command;
    }

	s_name() {
	    return this.getTypedRuleContext(S_nameContext,0);
	};

	c() {
	    return this.getTypedRuleContext(CContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof snowballListener ) {
	        listener.enterS_command(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snowballListener ) {
	        listener.exitS_command(this);
		}
	}


}



class SContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snowballParser.RULE_s;
    }

	s_name() {
	    return this.getTypedRuleContext(S_nameContext,0);
	};

	LITERAL_STRING() {
	    return this.getToken(snowballParser.LITERAL_STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snowballListener ) {
	        listener.enterS(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snowballListener ) {
	        listener.exitS(this);
		}
	}


}



class GContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snowballParser.RULE_g;
    }

	g_name() {
	    return this.getTypedRuleContext(G_nameContext,0);
	};

	LITERAL_STRING() {
	    return this.getToken(snowballParser.LITERAL_STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snowballListener ) {
	        listener.enterG(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snowballListener ) {
	        listener.exitG(this);
		}
	}


}



class S_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snowballParser.RULE_s_name;
    }

	NAME() {
	    return this.getToken(snowballParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snowballListener ) {
	        listener.enterS_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snowballListener ) {
	        listener.exitS_name(this);
		}
	}


}



class I_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snowballParser.RULE_i_name;
    }

	NAME() {
	    return this.getToken(snowballParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snowballListener ) {
	        listener.enterI_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snowballListener ) {
	        listener.exitI_name(this);
		}
	}


}



class B_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snowballParser.RULE_b_name;
    }

	NAME() {
	    return this.getToken(snowballParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snowballListener ) {
	        listener.enterB_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snowballListener ) {
	        listener.exitB_name(this);
		}
	}


}



class R_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snowballParser.RULE_r_name;
    }

	NAME() {
	    return this.getToken(snowballParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snowballListener ) {
	        listener.enterR_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snowballListener ) {
	        listener.exitR_name(this);
		}
	}


}



class G_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snowballParser.RULE_g_name;
    }

	NAME() {
	    return this.getToken(snowballParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snowballListener ) {
	        listener.enterG_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snowballListener ) {
	        listener.exitG_name(this);
		}
	}


}



class AeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = snowballParser.RULE_ae;
    }

	ae = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AeContext);
	    } else {
	        return this.getTypedRuleContext(AeContext,i);
	    }
	};

	s_name() {
	    return this.getTypedRuleContext(S_nameContext,0);
	};

	i_name() {
	    return this.getTypedRuleContext(I_nameContext,0);
	};

	NUMBER() {
	    return this.getToken(snowballParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof snowballListener ) {
	        listener.enterAe(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof snowballListener ) {
	        listener.exitAe(this);
		}
	}


}




snowballParser.ProgramContext = ProgramContext; 
snowballParser.PContext = PContext; 
snowballParser.DeclarationContext = DeclarationContext; 
snowballParser.R_definitionContext = R_definitionContext; 
snowballParser.G_definitionContext = G_definitionContext; 
snowballParser.CContext = CContext; 
snowballParser.I_commandContext = I_commandContext; 
snowballParser.S_commandContext = S_commandContext; 
snowballParser.SContext = SContext; 
snowballParser.GContext = GContext; 
snowballParser.S_nameContext = S_nameContext; 
snowballParser.I_nameContext = I_nameContext; 
snowballParser.B_nameContext = B_nameContext; 
snowballParser.R_nameContext = R_nameContext; 
snowballParser.G_nameContext = G_nameContext; 
snowballParser.AeContext = AeContext; 
