// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/esolang/snowball/snowball.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import snowballListener from './snowballListener.js';
const serializedATN = [4,1,77,349,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,1,0,5,0,34,8,0,10,0,12,0,37,9,0,1,0,1,0,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,49,8,1,1,2,1,2,1,2,5,2,54,8,2,10,2,12,
2,57,9,2,1,2,1,2,1,2,1,2,5,2,63,8,2,10,2,12,2,66,9,2,1,2,1,2,1,2,1,2,5,2,
72,8,2,10,2,12,2,75,9,2,1,2,1,2,1,2,1,2,5,2,81,8,2,10,2,12,2,84,9,2,1,2,
1,2,1,2,1,2,5,2,90,8,2,10,2,12,2,93,9,2,1,2,1,2,1,2,1,2,5,2,99,8,2,10,2,
12,2,102,9,2,1,2,3,2,105,8,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,5,4,
117,8,4,10,4,12,4,120,9,4,1,5,1,5,1,5,5,5,125,8,5,10,5,12,5,128,9,5,1,5,
1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,198,8,5,1,5,5,5,
201,8,5,10,5,12,5,204,9,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,216,
8,5,1,5,1,5,1,5,1,5,3,5,222,8,5,1,5,1,5,1,5,1,5,1,5,1,5,5,5,230,8,5,10,5,
12,5,233,9,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
1,6,1,6,1,6,1,6,3,6,290,8,6,1,7,1,7,1,7,1,7,1,8,1,8,3,8,298,8,8,1,9,1,9,
3,9,302,8,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,
1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,3,
15,330,8,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
5,15,344,8,15,10,15,12,15,347,9,15,1,15,0,2,10,30,16,0,2,4,6,8,10,12,14,
16,18,20,22,24,26,28,30,0,0,423,0,35,1,0,0,0,2,48,1,0,0,0,4,104,1,0,0,0,
6,106,1,0,0,0,8,111,1,0,0,0,10,221,1,0,0,0,12,289,1,0,0,0,14,291,1,0,0,0,
16,297,1,0,0,0,18,301,1,0,0,0,20,303,1,0,0,0,22,305,1,0,0,0,24,307,1,0,0,
0,26,309,1,0,0,0,28,311,1,0,0,0,30,329,1,0,0,0,32,34,3,2,1,0,33,32,1,0,0,
0,34,37,1,0,0,0,35,33,1,0,0,0,35,36,1,0,0,0,36,38,1,0,0,0,37,35,1,0,0,0,
38,39,5,0,0,1,39,1,1,0,0,0,40,49,3,4,2,0,41,49,3,6,3,0,42,49,3,8,4,0,43,
44,5,1,0,0,44,45,5,2,0,0,45,46,3,2,1,0,46,47,5,3,0,0,47,49,1,0,0,0,48,40,
1,0,0,0,48,41,1,0,0,0,48,42,1,0,0,0,48,43,1,0,0,0,49,3,1,0,0,0,50,51,5,4,
0,0,51,55,5,2,0,0,52,54,3,20,10,0,53,52,1,0,0,0,54,57,1,0,0,0,55,53,1,0,
0,0,55,56,1,0,0,0,56,58,1,0,0,0,57,55,1,0,0,0,58,105,5,3,0,0,59,60,5,5,0,
0,60,64,5,2,0,0,61,63,3,22,11,0,62,61,1,0,0,0,63,66,1,0,0,0,64,62,1,0,0,
0,64,65,1,0,0,0,65,67,1,0,0,0,66,64,1,0,0,0,67,105,5,3,0,0,68,69,5,6,0,0,
69,73,5,2,0,0,70,72,3,24,12,0,71,70,1,0,0,0,72,75,1,0,0,0,73,71,1,0,0,0,
73,74,1,0,0,0,74,76,1,0,0,0,75,73,1,0,0,0,76,105,5,3,0,0,77,78,5,7,0,0,78,
82,5,2,0,0,79,81,3,26,13,0,80,79,1,0,0,0,81,84,1,0,0,0,82,80,1,0,0,0,82,
83,1,0,0,0,83,85,1,0,0,0,84,82,1,0,0,0,85,105,5,3,0,0,86,87,5,8,0,0,87,91,
5,2,0,0,88,90,3,26,13,0,89,88,1,0,0,0,90,93,1,0,0,0,91,89,1,0,0,0,91,92,
1,0,0,0,92,94,1,0,0,0,93,91,1,0,0,0,94,105,5,3,0,0,95,96,5,9,0,0,96,100,
5,2,0,0,97,99,3,28,14,0,98,97,1,0,0,0,99,102,1,0,0,0,100,98,1,0,0,0,100,
101,1,0,0,0,101,103,1,0,0,0,102,100,1,0,0,0,103,105,5,3,0,0,104,50,1,0,0,
0,104,59,1,0,0,0,104,68,1,0,0,0,104,77,1,0,0,0,104,86,1,0,0,0,104,95,1,0,
0,0,105,5,1,0,0,0,106,107,5,10,0,0,107,108,3,26,13,0,108,109,5,11,0,0,109,
110,3,10,5,0,110,7,1,0,0,0,111,112,5,10,0,0,112,113,3,28,14,0,113,118,3,
18,9,0,114,115,5,75,0,0,115,117,3,18,9,0,116,114,1,0,0,0,117,120,1,0,0,0,
118,116,1,0,0,0,118,119,1,0,0,0,119,9,1,0,0,0,120,118,1,0,0,0,121,122,6,
5,-1,0,122,126,5,2,0,0,123,125,3,10,5,0,124,123,1,0,0,0,125,128,1,0,0,0,
126,124,1,0,0,0,126,127,1,0,0,0,127,129,1,0,0,0,128,126,1,0,0,0,129,222,
5,3,0,0,130,222,3,12,6,0,131,222,3,14,7,0,132,133,5,14,0,0,133,222,3,10,
5,41,134,135,5,15,0,0,135,222,3,10,5,40,136,137,5,16,0,0,137,222,3,10,5,
39,138,139,5,17,0,0,139,222,3,10,5,38,140,141,5,18,0,0,141,222,3,10,5,37,
142,143,5,19,0,0,143,222,3,10,5,36,144,145,5,20,0,0,145,222,3,10,5,35,146,
147,5,21,0,0,147,222,3,10,5,34,148,149,5,22,0,0,149,150,3,30,15,0,150,151,
3,10,5,33,151,222,1,0,0,0,152,153,5,23,0,0,153,154,3,30,15,0,154,155,3,10,
5,32,155,222,1,0,0,0,156,222,3,16,8,0,157,158,5,24,0,0,158,222,3,16,8,0,
159,160,5,25,0,0,160,222,3,16,8,0,161,162,5,26,0,0,162,222,3,16,8,0,163,
164,5,27,0,0,164,222,3,16,8,0,165,222,5,28,0,0,166,167,5,29,0,0,167,222,
3,30,15,0,168,222,5,30,0,0,169,170,5,31,0,0,170,222,3,20,10,0,171,222,5,
32,0,0,172,222,5,33,0,0,173,174,5,34,0,0,174,222,3,20,10,0,175,176,5,35,
0,0,176,222,3,22,11,0,177,178,5,36,0,0,178,222,3,30,15,0,179,180,5,37,0,
0,180,222,3,30,15,0,181,222,5,38,0,0,182,222,5,39,0,0,183,184,5,40,0,0,184,
185,3,10,5,0,185,186,5,41,0,0,186,187,3,10,5,14,187,222,1,0,0,0,188,189,
5,42,0,0,189,222,3,10,5,13,190,191,5,43,0,0,191,222,3,10,5,12,192,222,5,
44,0,0,193,194,5,45,0,0,194,202,5,2,0,0,195,197,5,73,0,0,196,198,3,26,13,
0,197,196,1,0,0,0,197,198,1,0,0,0,198,201,1,0,0,0,199,201,3,10,5,0,200,195,
1,0,0,0,200,199,1,0,0,0,201,204,1,0,0,0,202,200,1,0,0,0,202,203,1,0,0,0,
203,205,1,0,0,0,204,202,1,0,0,0,205,222,5,3,0,0,206,207,5,46,0,0,207,222,
3,24,12,0,208,209,5,47,0,0,209,222,3,24,12,0,210,222,3,24,12,0,211,222,3,
26,13,0,212,222,3,28,14,0,213,215,5,48,0,0,214,216,5,49,0,0,215,214,1,0,
0,0,215,216,1,0,0,0,216,217,1,0,0,0,217,222,3,28,14,0,218,222,5,50,0,0,219,
222,5,51,0,0,220,222,5,52,0,0,221,121,1,0,0,0,221,130,1,0,0,0,221,131,1,
0,0,0,221,132,1,0,0,0,221,134,1,0,0,0,221,136,1,0,0,0,221,138,1,0,0,0,221,
140,1,0,0,0,221,142,1,0,0,0,221,144,1,0,0,0,221,146,1,0,0,0,221,148,1,0,
0,0,221,152,1,0,0,0,221,156,1,0,0,0,221,157,1,0,0,0,221,159,1,0,0,0,221,
161,1,0,0,0,221,163,1,0,0,0,221,165,1,0,0,0,221,166,1,0,0,0,221,168,1,0,
0,0,221,169,1,0,0,0,221,171,1,0,0,0,221,172,1,0,0,0,221,173,1,0,0,0,221,
175,1,0,0,0,221,177,1,0,0,0,221,179,1,0,0,0,221,181,1,0,0,0,221,182,1,0,
0,0,221,183,1,0,0,0,221,188,1,0,0,0,221,190,1,0,0,0,221,192,1,0,0,0,221,
193,1,0,0,0,221,206,1,0,0,0,221,208,1,0,0,0,221,210,1,0,0,0,221,211,1,0,
0,0,221,212,1,0,0,0,221,213,1,0,0,0,221,218,1,0,0,0,221,219,1,0,0,0,221,
220,1,0,0,0,222,231,1,0,0,0,223,224,10,43,0,0,224,225,5,12,0,0,225,230,3,
10,5,44,226,227,10,42,0,0,227,228,5,13,0,0,228,230,3,10,5,43,229,223,1,0,
0,0,229,226,1,0,0,0,230,233,1,0,0,0,231,229,1,0,0,0,231,232,1,0,0,0,232,
11,1,0,0,0,233,231,1,0,0,0,234,235,5,53,0,0,235,236,3,22,11,0,236,237,5,
24,0,0,237,238,3,30,15,0,238,290,1,0,0,0,239,240,5,53,0,0,240,241,3,22,11,
0,241,242,5,54,0,0,242,243,3,30,15,0,243,290,1,0,0,0,244,245,5,53,0,0,245,
246,3,22,11,0,246,247,5,55,0,0,247,248,3,30,15,0,248,290,1,0,0,0,249,250,
5,53,0,0,250,251,3,22,11,0,251,252,5,56,0,0,252,253,3,30,15,0,253,290,1,
0,0,0,254,255,5,53,0,0,255,256,3,22,11,0,256,257,5,57,0,0,257,258,3,30,15,
0,258,290,1,0,0,0,259,260,5,53,0,0,260,261,3,22,11,0,261,262,5,58,0,0,262,
263,3,30,15,0,263,290,1,0,0,0,264,265,5,53,0,0,265,266,3,22,11,0,266,267,
5,59,0,0,267,268,3,30,15,0,268,290,1,0,0,0,269,270,5,53,0,0,270,271,3,22,
11,0,271,272,5,60,0,0,272,273,3,30,15,0,273,290,1,0,0,0,274,275,5,53,0,0,
275,276,3,22,11,0,276,277,5,61,0,0,277,278,3,30,15,0,278,290,1,0,0,0,279,
280,5,53,0,0,280,281,3,22,11,0,281,282,5,62,0,0,282,283,3,30,15,0,283,290,
1,0,0,0,284,285,5,53,0,0,285,286,3,22,11,0,286,287,5,63,0,0,287,288,3,30,
15,0,288,290,1,0,0,0,289,234,1,0,0,0,289,239,1,0,0,0,289,244,1,0,0,0,289,
249,1,0,0,0,289,254,1,0,0,0,289,259,1,0,0,0,289,264,1,0,0,0,289,269,1,0,
0,0,289,274,1,0,0,0,289,279,1,0,0,0,289,284,1,0,0,0,290,13,1,0,0,0,291,292,
5,53,0,0,292,293,3,20,10,0,293,294,3,10,5,0,294,15,1,0,0,0,295,298,3,20,
10,0,296,298,5,73,0,0,297,295,1,0,0,0,297,296,1,0,0,0,298,17,1,0,0,0,299,
302,3,28,14,0,300,302,5,73,0,0,301,299,1,0,0,0,301,300,1,0,0,0,302,19,1,
0,0,0,303,304,5,76,0,0,304,21,1,0,0,0,305,306,5,76,0,0,306,23,1,0,0,0,307,
308,5,76,0,0,308,25,1,0,0,0,309,310,5,76,0,0,310,27,1,0,0,0,311,312,5,76,
0,0,312,29,1,0,0,0,313,314,6,15,-1,0,314,315,5,2,0,0,315,316,3,30,15,0,316,
317,5,3,0,0,317,330,1,0,0,0,318,319,5,49,0,0,319,330,3,30,15,9,320,330,5,
67,0,0,321,330,5,68,0,0,322,330,5,69,0,0,323,330,5,70,0,0,324,330,5,71,0,
0,325,326,5,72,0,0,326,330,3,20,10,0,327,330,3,22,11,0,328,330,5,74,0,0,
329,313,1,0,0,0,329,318,1,0,0,0,329,320,1,0,0,0,329,321,1,0,0,0,329,322,
1,0,0,0,329,323,1,0,0,0,329,324,1,0,0,0,329,325,1,0,0,0,329,327,1,0,0,0,
329,328,1,0,0,0,330,345,1,0,0,0,331,332,10,13,0,0,332,333,5,64,0,0,333,344,
3,30,15,14,334,335,10,12,0,0,335,336,5,49,0,0,336,344,3,30,15,13,337,338,
10,11,0,0,338,339,5,65,0,0,339,344,3,30,15,12,340,341,10,10,0,0,341,342,
5,66,0,0,342,344,3,30,15,11,343,331,1,0,0,0,343,334,1,0,0,0,343,337,1,0,
0,0,343,340,1,0,0,0,344,347,1,0,0,0,345,343,1,0,0,0,345,346,1,0,0,0,346,
31,1,0,0,0,347,345,1,0,0,0,24,35,48,55,64,73,82,91,100,104,118,126,197,200,
202,215,221,229,231,289,297,301,329,343,345];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2034) !== 0)) {
	            this.state = 32;
	            this.p();
	            this.state = 37;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 38;
	        this.match(snowballParser.EOF);
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
	        this.state = 48;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 40;
	            this.declaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 41;
	            this.r_definition();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 42;
	            this.g_definition();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 43;
	            this.match(snowballParser.T__0);
	            this.state = 44;
	            this.match(snowballParser.T__1);
	            this.state = 45;
	            this.p();
	            this.state = 46;
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
	    var _la = 0;
	    try {
	        this.state = 104;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 50;
	            this.match(snowballParser.T__3);
	            this.state = 51;
	            this.match(snowballParser.T__1);
	            this.state = 55;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===76) {
	                this.state = 52;
	                this.s_name();
	                this.state = 57;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 58;
	            this.match(snowballParser.T__2);
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 59;
	            this.match(snowballParser.T__4);
	            this.state = 60;
	            this.match(snowballParser.T__1);
	            this.state = 64;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===76) {
	                this.state = 61;
	                this.i_name();
	                this.state = 66;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 67;
	            this.match(snowballParser.T__2);
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 68;
	            this.match(snowballParser.T__5);
	            this.state = 69;
	            this.match(snowballParser.T__1);
	            this.state = 73;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===76) {
	                this.state = 70;
	                this.b_name();
	                this.state = 75;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 76;
	            this.match(snowballParser.T__2);
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 77;
	            this.match(snowballParser.T__6);
	            this.state = 78;
	            this.match(snowballParser.T__1);
	            this.state = 82;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===76) {
	                this.state = 79;
	                this.r_name();
	                this.state = 84;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 85;
	            this.match(snowballParser.T__2);
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 86;
	            this.match(snowballParser.T__7);
	            this.state = 87;
	            this.match(snowballParser.T__1);
	            this.state = 91;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===76) {
	                this.state = 88;
	                this.r_name();
	                this.state = 93;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 94;
	            this.match(snowballParser.T__2);
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 95;
	            this.match(snowballParser.T__8);
	            this.state = 96;
	            this.match(snowballParser.T__1);
	            this.state = 100;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===76) {
	                this.state = 97;
	                this.g_name();
	                this.state = 102;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 103;
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
	        this.state = 106;
	        this.match(snowballParser.T__9);
	        this.state = 107;
	        this.r_name();
	        this.state = 108;
	        this.match(snowballParser.T__10);
	        this.state = 109;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.match(snowballParser.T__9);
	        this.state = 112;
	        this.g_name();
	        this.state = 113;
	        this.g();
	        this.state = 118;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===75) {
	            this.state = 114;
	            this.match(snowballParser.PLUS_OR_MINUS);
	            this.state = 115;
	            this.g();
	            this.state = 120;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 221;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 122;
	            this.match(snowballParser.T__1);
	            this.state = 126;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294950916) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4062719) !== 0) || _la===73 || _la===76) {
	                this.state = 123;
	                this.c(0);
	                this.state = 128;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 129;
	            this.match(snowballParser.T__2);
	            break;

	        case 2:
	            this.state = 130;
	            this.i_command();
	            break;

	        case 3:
	            this.state = 131;
	            this.s_command();
	            break;

	        case 4:
	            this.state = 132;
	            this.match(snowballParser.T__13);
	            this.state = 133;
	            this.c(41);
	            break;

	        case 5:
	            this.state = 134;
	            this.match(snowballParser.T__14);
	            this.state = 135;
	            this.c(40);
	            break;

	        case 6:
	            this.state = 136;
	            this.match(snowballParser.T__15);
	            this.state = 137;
	            this.c(39);
	            break;

	        case 7:
	            this.state = 138;
	            this.match(snowballParser.T__16);
	            this.state = 139;
	            this.c(38);
	            break;

	        case 8:
	            this.state = 140;
	            this.match(snowballParser.T__17);
	            this.state = 141;
	            this.c(37);
	            break;

	        case 9:
	            this.state = 142;
	            this.match(snowballParser.T__18);
	            this.state = 143;
	            this.c(36);
	            break;

	        case 10:
	            this.state = 144;
	            this.match(snowballParser.T__19);
	            this.state = 145;
	            this.c(35);
	            break;

	        case 11:
	            this.state = 146;
	            this.match(snowballParser.T__20);
	            this.state = 147;
	            this.c(34);
	            break;

	        case 12:
	            this.state = 148;
	            this.match(snowballParser.T__21);
	            this.state = 149;
	            this.ae(0);
	            this.state = 150;
	            this.c(33);
	            break;

	        case 13:
	            this.state = 152;
	            this.match(snowballParser.T__22);
	            this.state = 153;
	            this.ae(0);
	            this.state = 154;
	            this.c(32);
	            break;

	        case 14:
	            this.state = 156;
	            this.s();
	            break;

	        case 15:
	            this.state = 157;
	            this.match(snowballParser.T__23);
	            this.state = 158;
	            this.s();
	            break;

	        case 16:
	            this.state = 159;
	            this.match(snowballParser.T__24);
	            this.state = 160;
	            this.s();
	            break;

	        case 17:
	            this.state = 161;
	            this.match(snowballParser.T__25);
	            this.state = 162;
	            this.s();
	            break;

	        case 18:
	            this.state = 163;
	            this.match(snowballParser.T__26);
	            this.state = 164;
	            this.s();
	            break;

	        case 19:
	            this.state = 165;
	            this.match(snowballParser.T__27);
	            break;

	        case 20:
	            this.state = 166;
	            this.match(snowballParser.T__28);
	            this.state = 167;
	            this.ae(0);
	            break;

	        case 21:
	            this.state = 168;
	            this.match(snowballParser.T__29);
	            break;

	        case 22:
	            this.state = 169;
	            this.match(snowballParser.T__30);
	            this.state = 170;
	            this.s_name();
	            break;

	        case 23:
	            this.state = 171;
	            this.match(snowballParser.T__31);
	            break;

	        case 24:
	            this.state = 172;
	            this.match(snowballParser.T__32);
	            break;

	        case 25:
	            this.state = 173;
	            this.match(snowballParser.T__33);
	            this.state = 174;
	            this.s_name();
	            break;

	        case 26:
	            this.state = 175;
	            this.match(snowballParser.T__34);
	            this.state = 176;
	            this.i_name();
	            break;

	        case 27:
	            this.state = 177;
	            this.match(snowballParser.T__35);
	            this.state = 178;
	            this.ae(0);
	            break;

	        case 28:
	            this.state = 179;
	            this.match(snowballParser.T__36);
	            this.state = 180;
	            this.ae(0);
	            break;

	        case 29:
	            this.state = 181;
	            this.match(snowballParser.T__37);
	            break;

	        case 30:
	            this.state = 182;
	            this.match(snowballParser.T__38);
	            break;

	        case 31:
	            this.state = 183;
	            this.match(snowballParser.T__39);
	            this.state = 184;
	            this.c(0);
	            this.state = 185;
	            this.match(snowballParser.T__40);
	            this.state = 186;
	            this.c(14);
	            break;

	        case 32:
	            this.state = 188;
	            this.match(snowballParser.T__41);
	            this.state = 189;
	            this.c(13);
	            break;

	        case 33:
	            this.state = 190;
	            this.match(snowballParser.T__42);
	            this.state = 191;
	            this.c(12);
	            break;

	        case 34:
	            this.state = 192;
	            this.match(snowballParser.T__43);
	            break;

	        case 35:
	            this.state = 193;
	            this.match(snowballParser.T__44);
	            this.state = 194;
	            this.match(snowballParser.T__1);
	            this.state = 202;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294950916) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4062719) !== 0) || _la===73 || _la===76) {
	                this.state = 200;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 195;
	                    this.match(snowballParser.LITERAL_STRING);
	                    this.state = 197;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	                    if(la_===1) {
	                        this.state = 196;
	                        this.r_name();

	                    }
	                    break;

	                case 2:
	                    this.state = 199;
	                    this.c(0);
	                    break;

	                }
	                this.state = 204;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 205;
	            this.match(snowballParser.T__2);
	            break;

	        case 36:
	            this.state = 206;
	            this.match(snowballParser.T__45);
	            this.state = 207;
	            this.b_name();
	            break;

	        case 37:
	            this.state = 208;
	            this.match(snowballParser.T__46);
	            this.state = 209;
	            this.b_name();
	            break;

	        case 38:
	            this.state = 210;
	            this.b_name();
	            break;

	        case 39:
	            this.state = 211;
	            this.r_name();
	            break;

	        case 40:
	            this.state = 212;
	            this.g_name();
	            break;

	        case 41:
	            this.state = 213;
	            this.match(snowballParser.T__47);
	            this.state = 215;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===49) {
	                this.state = 214;
	                this.match(snowballParser.T__48);
	            }

	            this.state = 217;
	            this.g_name();
	            break;

	        case 42:
	            this.state = 218;
	            this.match(snowballParser.T__49);
	            break;

	        case 43:
	            this.state = 219;
	            this.match(snowballParser.T__50);
	            break;

	        case 44:
	            this.state = 220;
	            this.match(snowballParser.T__51);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 231;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 229;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new CContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, snowballParser.RULE_c);
	                    this.state = 223;
	                    if (!( this.precpred(this._ctx, 43))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 43)");
	                    }
	                    this.state = 224;
	                    this.match(snowballParser.T__11);
	                    this.state = 225;
	                    this.c(44);
	                    break;

	                case 2:
	                    localctx = new CContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, snowballParser.RULE_c);
	                    this.state = 226;
	                    if (!( this.precpred(this._ctx, 42))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 42)");
	                    }
	                    this.state = 227;
	                    this.match(snowballParser.T__12);
	                    this.state = 228;
	                    this.c(43);
	                    break;

	                } 
	            }
	            this.state = 233;
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
	        this.state = 289;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 234;
	            this.match(snowballParser.T__52);
	            this.state = 235;
	            this.i_name();
	            this.state = 236;
	            this.match(snowballParser.T__23);
	            this.state = 237;
	            this.ae(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 239;
	            this.match(snowballParser.T__52);
	            this.state = 240;
	            this.i_name();
	            this.state = 241;
	            this.match(snowballParser.T__53);
	            this.state = 242;
	            this.ae(0);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 244;
	            this.match(snowballParser.T__52);
	            this.state = 245;
	            this.i_name();
	            this.state = 246;
	            this.match(snowballParser.T__54);
	            this.state = 247;
	            this.ae(0);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 249;
	            this.match(snowballParser.T__52);
	            this.state = 250;
	            this.i_name();
	            this.state = 251;
	            this.match(snowballParser.T__55);
	            this.state = 252;
	            this.ae(0);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 254;
	            this.match(snowballParser.T__52);
	            this.state = 255;
	            this.i_name();
	            this.state = 256;
	            this.match(snowballParser.T__56);
	            this.state = 257;
	            this.ae(0);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 259;
	            this.match(snowballParser.T__52);
	            this.state = 260;
	            this.i_name();
	            this.state = 261;
	            this.match(snowballParser.T__57);
	            this.state = 262;
	            this.ae(0);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 264;
	            this.match(snowballParser.T__52);
	            this.state = 265;
	            this.i_name();
	            this.state = 266;
	            this.match(snowballParser.T__58);
	            this.state = 267;
	            this.ae(0);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 269;
	            this.match(snowballParser.T__52);
	            this.state = 270;
	            this.i_name();
	            this.state = 271;
	            this.match(snowballParser.T__59);
	            this.state = 272;
	            this.ae(0);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 274;
	            this.match(snowballParser.T__52);
	            this.state = 275;
	            this.i_name();
	            this.state = 276;
	            this.match(snowballParser.T__60);
	            this.state = 277;
	            this.ae(0);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 279;
	            this.match(snowballParser.T__52);
	            this.state = 280;
	            this.i_name();
	            this.state = 281;
	            this.match(snowballParser.T__61);
	            this.state = 282;
	            this.ae(0);
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 284;
	            this.match(snowballParser.T__52);
	            this.state = 285;
	            this.i_name();
	            this.state = 286;
	            this.match(snowballParser.T__62);
	            this.state = 287;
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
	        this.state = 291;
	        this.match(snowballParser.T__52);
	        this.state = 292;
	        this.s_name();
	        this.state = 293;
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
	        this.state = 297;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 76:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 295;
	            this.s_name();
	            break;
	        case 73:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 296;
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
	        this.state = 301;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 76:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 299;
	            this.g_name();
	            break;
	        case 73:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 300;
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



	i_name() {
	    let localctx = new I_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, snowballParser.RULE_i_name);
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



	b_name() {
	    let localctx = new B_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, snowballParser.RULE_b_name);
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



	r_name() {
	    let localctx = new R_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, snowballParser.RULE_r_name);
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



	g_name() {
	    let localctx = new G_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, snowballParser.RULE_g_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 311;
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
	        this.state = 329;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.state = 314;
	            this.match(snowballParser.T__1);
	            this.state = 315;
	            this.ae(0);
	            this.state = 316;
	            this.match(snowballParser.T__2);
	            break;
	        case 49:
	            this.state = 318;
	            this.match(snowballParser.T__48);
	            this.state = 319;
	            this.ae(9);
	            break;
	        case 67:
	            this.state = 320;
	            this.match(snowballParser.T__66);
	            break;
	        case 68:
	            this.state = 321;
	            this.match(snowballParser.T__67);
	            break;
	        case 69:
	            this.state = 322;
	            this.match(snowballParser.T__68);
	            break;
	        case 70:
	            this.state = 323;
	            this.match(snowballParser.T__69);
	            break;
	        case 71:
	            this.state = 324;
	            this.match(snowballParser.T__70);
	            break;
	        case 72:
	            this.state = 325;
	            this.match(snowballParser.T__71);
	            this.state = 326;
	            this.s_name();
	            break;
	        case 76:
	            this.state = 327;
	            this.i_name();
	            break;
	        case 74:
	            this.state = 328;
	            this.match(snowballParser.NUMBER);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 345;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,23,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 343;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new AeContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, snowballParser.RULE_ae);
	                    this.state = 331;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 332;
	                    this.match(snowballParser.T__63);
	                    this.state = 333;
	                    this.ae(14);
	                    break;

	                case 2:
	                    localctx = new AeContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, snowballParser.RULE_ae);
	                    this.state = 334;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 335;
	                    this.match(snowballParser.T__48);
	                    this.state = 336;
	                    this.ae(13);
	                    break;

	                case 3:
	                    localctx = new AeContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, snowballParser.RULE_ae);
	                    this.state = 337;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 338;
	                    this.match(snowballParser.T__64);
	                    this.state = 339;
	                    this.ae(12);
	                    break;

	                case 4:
	                    localctx = new AeContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, snowballParser.RULE_ae);
	                    this.state = 340;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 341;
	                    this.match(snowballParser.T__65);
	                    this.state = 342;
	                    this.ae(11);
	                    break;

	                } 
	            }
	            this.state = 347;
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

	EOF() {
	    return this.getToken(snowballParser.EOF, 0);
	};

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

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
