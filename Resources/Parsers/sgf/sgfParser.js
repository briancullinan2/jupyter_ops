// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/sgf/sgf.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import sgfListener from './sgfListener.js';
const serializedATN = [4,1,78,320,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,4,0,36,8,0,11,0,12,0,37,1,0,
1,0,1,1,1,1,1,1,5,1,45,8,1,10,1,12,1,48,9,1,1,1,1,1,1,2,4,2,53,8,2,11,2,
12,2,54,1,3,1,3,5,3,59,8,3,10,3,12,3,62,9,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
1,4,1,4,1,4,1,4,1,4,3,4,76,8,4,1,5,1,5,1,5,1,5,1,5,1,5,3,5,84,8,5,1,6,1,
6,4,6,88,8,6,11,6,12,6,89,1,6,1,6,4,6,94,8,6,11,6,12,6,95,1,6,1,6,4,6,100,
8,6,11,6,12,6,101,1,6,1,6,3,6,106,8,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,124,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,
8,3,8,134,8,8,1,9,1,9,4,9,138,8,9,11,9,12,9,139,1,9,1,9,4,9,144,8,9,11,9,
12,9,145,1,9,1,9,1,9,4,9,151,8,9,11,9,12,9,152,3,9,155,8,9,1,9,1,9,4,9,159,
8,9,11,9,12,9,160,1,9,1,9,4,9,165,8,9,11,9,12,9,166,1,9,1,9,4,9,171,8,9,
11,9,12,9,172,1,9,1,9,4,9,177,8,9,11,9,12,9,178,1,9,1,9,4,9,183,8,9,11,9,
12,9,184,1,9,1,9,4,9,189,8,9,11,9,12,9,190,3,9,193,8,9,1,10,1,10,1,10,1,
10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,207,8,10,1,11,1,11,1,11,
1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,
11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,3,11,251,8,11,1,12,1,12,
1,12,1,12,1,12,1,12,1,12,1,12,3,12,261,8,12,1,13,1,13,1,13,1,13,1,13,1,13,
4,13,269,8,13,11,13,12,13,270,3,13,273,8,13,1,14,1,14,1,14,1,14,1,14,1,14,
1,14,1,14,1,14,1,14,3,14,285,8,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,4,15,
294,8,15,11,15,12,15,295,3,15,298,8,15,1,15,1,15,1,15,4,15,303,8,15,11,15,
12,15,304,3,15,307,8,15,3,15,309,8,15,1,16,1,16,1,16,4,16,314,8,16,11,16,
12,16,315,3,16,318,8,16,1,16,0,0,17,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
28,30,32,0,1,1,0,76,77,397,0,35,1,0,0,0,2,41,1,0,0,0,4,52,1,0,0,0,6,56,1,
0,0,0,8,75,1,0,0,0,10,83,1,0,0,0,12,105,1,0,0,0,14,123,1,0,0,0,16,133,1,
0,0,0,18,192,1,0,0,0,20,206,1,0,0,0,22,250,1,0,0,0,24,260,1,0,0,0,26,272,
1,0,0,0,28,284,1,0,0,0,30,308,1,0,0,0,32,310,1,0,0,0,34,36,3,2,1,0,35,34,
1,0,0,0,36,37,1,0,0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,39,1,0,0,0,39,40,5,
0,0,1,40,1,1,0,0,0,41,42,5,1,0,0,42,46,3,4,2,0,43,45,3,2,1,0,44,43,1,0,0,
0,45,48,1,0,0,0,46,44,1,0,0,0,46,47,1,0,0,0,47,49,1,0,0,0,48,46,1,0,0,0,
49,50,5,2,0,0,50,3,1,0,0,0,51,53,3,6,3,0,52,51,1,0,0,0,53,54,1,0,0,0,54,
52,1,0,0,0,54,55,1,0,0,0,55,5,1,0,0,0,56,60,5,3,0,0,57,59,3,8,4,0,58,57,
1,0,0,0,59,62,1,0,0,0,60,58,1,0,0,0,60,61,1,0,0,0,61,7,1,0,0,0,62,60,1,0,
0,0,63,76,3,10,5,0,64,76,3,12,6,0,65,76,3,14,7,0,66,76,3,16,8,0,67,76,3,
18,9,0,68,76,3,20,10,0,69,76,3,22,11,0,70,76,3,24,12,0,71,76,3,26,13,0,72,
76,3,28,14,0,73,76,3,30,15,0,74,76,3,32,16,0,75,63,1,0,0,0,75,64,1,0,0,0,
75,65,1,0,0,0,75,66,1,0,0,0,75,67,1,0,0,0,75,68,1,0,0,0,75,69,1,0,0,0,75,
70,1,0,0,0,75,71,1,0,0,0,75,72,1,0,0,0,75,73,1,0,0,0,75,74,1,0,0,0,76,9,
1,0,0,0,77,78,5,74,0,0,78,84,7,0,0,0,79,80,5,4,0,0,80,84,5,76,0,0,81,82,
5,5,0,0,82,84,5,77,0,0,83,77,1,0,0,0,83,79,1,0,0,0,83,81,1,0,0,0,84,11,1,
0,0,0,85,87,5,6,0,0,86,88,5,77,0,0,87,86,1,0,0,0,88,89,1,0,0,0,89,87,1,0,
0,0,89,90,1,0,0,0,90,106,1,0,0,0,91,93,5,7,0,0,92,94,5,77,0,0,93,92,1,0,
0,0,94,95,1,0,0,0,95,93,1,0,0,0,95,96,1,0,0,0,96,106,1,0,0,0,97,99,5,8,0,
0,98,100,5,77,0,0,99,98,1,0,0,0,100,101,1,0,0,0,101,99,1,0,0,0,101,102,1,
0,0,0,102,106,1,0,0,0,103,104,5,9,0,0,104,106,5,77,0,0,105,85,1,0,0,0,105,
91,1,0,0,0,105,97,1,0,0,0,105,103,1,0,0,0,106,13,1,0,0,0,107,108,5,10,0,
0,108,124,5,77,0,0,109,110,5,11,0,0,110,124,5,77,0,0,111,112,5,12,0,0,112,
124,5,77,0,0,113,114,5,13,0,0,114,124,5,77,0,0,115,116,5,14,0,0,116,124,
5,77,0,0,117,118,5,15,0,0,118,124,5,77,0,0,119,120,5,16,0,0,120,124,5,77,
0,0,121,122,5,17,0,0,122,124,5,77,0,0,123,107,1,0,0,0,123,109,1,0,0,0,123,
111,1,0,0,0,123,113,1,0,0,0,123,115,1,0,0,0,123,117,1,0,0,0,123,119,1,0,
0,0,123,121,1,0,0,0,124,15,1,0,0,0,125,126,5,18,0,0,126,134,5,77,0,0,127,
128,5,19,0,0,128,134,5,76,0,0,129,130,5,20,0,0,130,134,5,76,0,0,131,132,
5,21,0,0,132,134,5,77,0,0,133,125,1,0,0,0,133,127,1,0,0,0,133,129,1,0,0,
0,133,131,1,0,0,0,134,17,1,0,0,0,135,137,5,22,0,0,136,138,5,77,0,0,137,136,
1,0,0,0,138,139,1,0,0,0,139,137,1,0,0,0,139,140,1,0,0,0,140,193,1,0,0,0,
141,143,5,23,0,0,142,144,5,77,0,0,143,142,1,0,0,0,144,145,1,0,0,0,145,143,
1,0,0,0,145,146,1,0,0,0,146,193,1,0,0,0,147,154,5,24,0,0,148,155,5,76,0,
0,149,151,5,77,0,0,150,149,1,0,0,0,151,152,1,0,0,0,152,150,1,0,0,0,152,153,
1,0,0,0,153,155,1,0,0,0,154,148,1,0,0,0,154,150,1,0,0,0,155,193,1,0,0,0,
156,158,5,25,0,0,157,159,5,77,0,0,158,157,1,0,0,0,159,160,1,0,0,0,160,158,
1,0,0,0,160,161,1,0,0,0,161,193,1,0,0,0,162,164,5,26,0,0,163,165,5,77,0,
0,164,163,1,0,0,0,165,166,1,0,0,0,166,164,1,0,0,0,166,167,1,0,0,0,167,193,
1,0,0,0,168,170,5,27,0,0,169,171,5,77,0,0,170,169,1,0,0,0,171,172,1,0,0,
0,172,170,1,0,0,0,172,173,1,0,0,0,173,193,1,0,0,0,174,176,5,28,0,0,175,177,
5,77,0,0,176,175,1,0,0,0,177,178,1,0,0,0,178,176,1,0,0,0,178,179,1,0,0,0,
179,193,1,0,0,0,180,182,5,29,0,0,181,183,5,77,0,0,182,181,1,0,0,0,183,184,
1,0,0,0,184,182,1,0,0,0,184,185,1,0,0,0,185,193,1,0,0,0,186,188,5,30,0,0,
187,189,5,77,0,0,188,187,1,0,0,0,189,190,1,0,0,0,190,188,1,0,0,0,190,191,
1,0,0,0,191,193,1,0,0,0,192,135,1,0,0,0,192,141,1,0,0,0,192,147,1,0,0,0,
192,156,1,0,0,0,192,162,1,0,0,0,192,168,1,0,0,0,192,174,1,0,0,0,192,180,
1,0,0,0,192,186,1,0,0,0,193,19,1,0,0,0,194,195,5,31,0,0,195,207,5,77,0,0,
196,197,5,32,0,0,197,207,5,77,0,0,198,199,5,33,0,0,199,207,5,77,0,0,200,
201,5,34,0,0,201,207,5,77,0,0,202,203,5,35,0,0,203,207,5,77,0,0,204,205,
5,36,0,0,205,207,5,77,0,0,206,194,1,0,0,0,206,196,1,0,0,0,206,198,1,0,0,
0,206,200,1,0,0,0,206,202,1,0,0,0,206,204,1,0,0,0,207,21,1,0,0,0,208,209,
5,37,0,0,209,251,5,77,0,0,210,211,5,38,0,0,211,251,5,77,0,0,212,213,5,39,
0,0,213,251,5,77,0,0,214,215,5,40,0,0,215,251,5,77,0,0,216,217,5,41,0,0,
217,251,5,77,0,0,218,219,5,42,0,0,219,251,5,77,0,0,220,221,5,43,0,0,221,
251,5,77,0,0,222,223,5,44,0,0,223,251,5,77,0,0,224,225,5,45,0,0,225,251,
5,77,0,0,226,227,5,46,0,0,227,251,5,77,0,0,228,229,5,47,0,0,229,251,5,77,
0,0,230,231,5,48,0,0,231,251,5,77,0,0,232,233,5,49,0,0,233,251,5,77,0,0,
234,235,5,50,0,0,235,251,5,77,0,0,236,237,5,51,0,0,237,251,5,77,0,0,238,
239,5,52,0,0,239,251,5,77,0,0,240,241,5,53,0,0,241,251,5,77,0,0,242,243,
5,54,0,0,243,251,5,77,0,0,244,245,5,55,0,0,245,251,5,77,0,0,246,247,5,56,
0,0,247,251,5,77,0,0,248,249,5,57,0,0,249,251,5,77,0,0,250,208,1,0,0,0,250,
210,1,0,0,0,250,212,1,0,0,0,250,214,1,0,0,0,250,216,1,0,0,0,250,218,1,0,
0,0,250,220,1,0,0,0,250,222,1,0,0,0,250,224,1,0,0,0,250,226,1,0,0,0,250,
228,1,0,0,0,250,230,1,0,0,0,250,232,1,0,0,0,250,234,1,0,0,0,250,236,1,0,
0,0,250,238,1,0,0,0,250,240,1,0,0,0,250,242,1,0,0,0,250,244,1,0,0,0,250,
246,1,0,0,0,250,248,1,0,0,0,251,23,1,0,0,0,252,253,5,58,0,0,253,261,5,77,
0,0,254,255,5,59,0,0,255,261,5,77,0,0,256,257,5,60,0,0,257,261,5,77,0,0,
258,259,5,61,0,0,259,261,5,77,0,0,260,252,1,0,0,0,260,254,1,0,0,0,260,256,
1,0,0,0,260,258,1,0,0,0,261,25,1,0,0,0,262,263,5,62,0,0,263,273,7,0,0,0,
264,265,5,63,0,0,265,273,5,77,0,0,266,268,5,64,0,0,267,269,5,77,0,0,268,
267,1,0,0,0,269,270,1,0,0,0,270,268,1,0,0,0,270,271,1,0,0,0,271,273,1,0,
0,0,272,262,1,0,0,0,272,264,1,0,0,0,272,266,1,0,0,0,273,27,1,0,0,0,274,275,
5,65,0,0,275,285,5,77,0,0,276,277,5,66,0,0,277,285,5,77,0,0,278,279,5,67,
0,0,279,285,5,77,0,0,280,281,5,68,0,0,281,285,5,77,0,0,282,283,5,69,0,0,
283,285,5,77,0,0,284,274,1,0,0,0,284,276,1,0,0,0,284,278,1,0,0,0,284,280,
1,0,0,0,284,282,1,0,0,0,285,29,1,0,0,0,286,287,5,70,0,0,287,309,5,77,0,0,
288,289,5,71,0,0,289,309,5,77,0,0,290,297,5,72,0,0,291,298,5,76,0,0,292,
294,5,77,0,0,293,292,1,0,0,0,294,295,1,0,0,0,295,293,1,0,0,0,295,296,1,0,
0,0,296,298,1,0,0,0,297,291,1,0,0,0,297,293,1,0,0,0,298,309,1,0,0,0,299,
306,5,73,0,0,300,307,5,76,0,0,301,303,5,77,0,0,302,301,1,0,0,0,303,304,1,
0,0,0,304,302,1,0,0,0,304,305,1,0,0,0,305,307,1,0,0,0,306,300,1,0,0,0,306,
302,1,0,0,0,307,309,1,0,0,0,308,286,1,0,0,0,308,288,1,0,0,0,308,290,1,0,
0,0,308,299,1,0,0,0,309,31,1,0,0,0,310,317,5,75,0,0,311,318,5,76,0,0,312,
314,5,77,0,0,313,312,1,0,0,0,314,315,1,0,0,0,315,313,1,0,0,0,315,316,1,0,
0,0,316,318,1,0,0,0,317,311,1,0,0,0,317,313,1,0,0,0,318,33,1,0,0,0,36,37,
46,54,60,75,83,89,95,101,105,123,133,139,145,152,154,160,166,172,178,184,
190,192,206,250,260,270,272,284,295,297,304,306,308,315,317];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class sgfParser extends antlr4.Parser {

    static grammarFileName = "sgf.g4";
    static literalNames = [ null, "'('", "')'", "';'", "'KO'", "'MN'", "'AB'", 
                            "'AE'", "'AW'", "'PL'", "'C'", "'DM'", "'GB'", 
                            "'GW'", "'HO'", "'N'", "'UC'", "'V'", "'BM'", 
                            "'DO'", "'IT'", "'TE'", "'AR'", "'CR'", "'DD'", 
                            "'LB'", "'LN'", "'MA'", "'SL'", "'SQ'", "'TR'", 
                            "'AP'", "'CA'", "'FF'", "'GM'", "'ST'", "'SZ'", 
                            "'AN'", "'BR'", "'BT'", "'CP'", "'DT'", "'EV'", 
                            "'GN'", "'GC'", "'ON'", "'OT'", "'PB'", "'PC'", 
                            "'PW'", "'RE'", "'RO'", "'RU'", "'SO'", "'TM'", 
                            "'US'", "'WR'", "'WT'", "'BL'", "'OB'", "'OW'", 
                            "'WL'", "'FG'", "'PM'", "'VW'", "'AS'", "'IP'", 
                            "'IY'", "'SE'", "'SU'", "'HA'", "'KM'", "'TB'", 
                            "'TW'", null, null, "'[]'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "COLOR", "UCLETTER", "NONE", "TEXT", 
                             "WS" ];
    static ruleNames = [ "collection", "gameTree", "sequence", "node", "property_", 
                         "move", "setup", "nodeAnnotation", "moveAnnotation", 
                         "markup", "root", "gameInfo", "timing", "misc", 
                         "loa", "go_", "privateProp" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = sgfParser.ruleNames;
        this.literalNames = sgfParser.literalNames;
        this.symbolicNames = sgfParser.symbolicNames;
    }



	collection() {
	    let localctx = new CollectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, sgfParser.RULE_collection);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 34;
	            this.gameTree();
	            this.state = 37; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	        this.state = 39;
	        this.match(sgfParser.EOF);
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



	gameTree() {
	    let localctx = new GameTreeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, sgfParser.RULE_gameTree);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this.match(sgfParser.T__0);
	        this.state = 42;
	        this.sequence();
	        this.state = 46;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 43;
	            this.gameTree();
	            this.state = 48;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 49;
	        this.match(sgfParser.T__1);
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



	sequence() {
	    let localctx = new SequenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, sgfParser.RULE_sequence);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 51;
	            this.node();
	            this.state = 54; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===3);
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



	node() {
	    let localctx = new NodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, sgfParser.RULE_node);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.match(sgfParser.T__2);
	        this.state = 60;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967280) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 4095) !== 0)) {
	            this.state = 57;
	            this.property_();
	            this.state = 62;
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



	property_() {
	    let localctx = new Property_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, sgfParser.RULE_property_);
	    try {
	        this.state = 75;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	        case 5:
	        case 74:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 63;
	            this.move();
	            break;
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 64;
	            this.setup();
	            break;
	        case 10:
	        case 11:
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	        case 16:
	        case 17:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 65;
	            this.nodeAnnotation();
	            break;
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 66;
	            this.moveAnnotation();
	            break;
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 67;
	            this.markup();
	            break;
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	        case 36:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 68;
	            this.root();
	            break;
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	        case 41:
	        case 42:
	        case 43:
	        case 44:
	        case 45:
	        case 46:
	        case 47:
	        case 48:
	        case 49:
	        case 50:
	        case 51:
	        case 52:
	        case 53:
	        case 54:
	        case 55:
	        case 56:
	        case 57:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 69;
	            this.gameInfo();
	            break;
	        case 58:
	        case 59:
	        case 60:
	        case 61:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 70;
	            this.timing();
	            break;
	        case 62:
	        case 63:
	        case 64:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 71;
	            this.misc();
	            break;
	        case 65:
	        case 66:
	        case 67:
	        case 68:
	        case 69:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 72;
	            this.loa();
	            break;
	        case 70:
	        case 71:
	        case 72:
	        case 73:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 73;
	            this.go_();
	            break;
	        case 75:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 74;
	            this.privateProp();
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



	move() {
	    let localctx = new MoveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, sgfParser.RULE_move);
	    var _la = 0;
	    try {
	        this.state = 83;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 74:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 77;
	            this.match(sgfParser.COLOR);
	            this.state = 78;
	            _la = this._input.LA(1);
	            if(!(_la===76 || _la===77)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 79;
	            this.match(sgfParser.T__3);
	            this.state = 80;
	            this.match(sgfParser.NONE);
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 81;
	            this.match(sgfParser.T__4);
	            this.state = 82;
	            this.match(sgfParser.TEXT);
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



	setup() {
	    let localctx = new SetupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, sgfParser.RULE_setup);
	    var _la = 0;
	    try {
	        this.state = 105;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 85;
	            this.match(sgfParser.T__5);
	            this.state = 87; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 86;
	                this.match(sgfParser.TEXT);
	                this.state = 89; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===77);
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 91;
	            this.match(sgfParser.T__6);
	            this.state = 93; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 92;
	                this.match(sgfParser.TEXT);
	                this.state = 95; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===77);
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 97;
	            this.match(sgfParser.T__7);
	            this.state = 99; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 98;
	                this.match(sgfParser.TEXT);
	                this.state = 101; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===77);
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 103;
	            this.match(sgfParser.T__8);
	            this.state = 104;
	            this.match(sgfParser.TEXT);
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



	nodeAnnotation() {
	    let localctx = new NodeAnnotationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, sgfParser.RULE_nodeAnnotation);
	    try {
	        this.state = 123;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 107;
	            this.match(sgfParser.T__9);
	            this.state = 108;
	            this.match(sgfParser.TEXT);
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 109;
	            this.match(sgfParser.T__10);
	            this.state = 110;
	            this.match(sgfParser.TEXT);
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 111;
	            this.match(sgfParser.T__11);
	            this.state = 112;
	            this.match(sgfParser.TEXT);
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 113;
	            this.match(sgfParser.T__12);
	            this.state = 114;
	            this.match(sgfParser.TEXT);
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 115;
	            this.match(sgfParser.T__13);
	            this.state = 116;
	            this.match(sgfParser.TEXT);
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 117;
	            this.match(sgfParser.T__14);
	            this.state = 118;
	            this.match(sgfParser.TEXT);
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 119;
	            this.match(sgfParser.T__15);
	            this.state = 120;
	            this.match(sgfParser.TEXT);
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 121;
	            this.match(sgfParser.T__16);
	            this.state = 122;
	            this.match(sgfParser.TEXT);
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



	moveAnnotation() {
	    let localctx = new MoveAnnotationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, sgfParser.RULE_moveAnnotation);
	    try {
	        this.state = 133;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 125;
	            this.match(sgfParser.T__17);
	            this.state = 126;
	            this.match(sgfParser.TEXT);
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 127;
	            this.match(sgfParser.T__18);
	            this.state = 128;
	            this.match(sgfParser.NONE);
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 129;
	            this.match(sgfParser.T__19);
	            this.state = 130;
	            this.match(sgfParser.NONE);
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 131;
	            this.match(sgfParser.T__20);
	            this.state = 132;
	            this.match(sgfParser.TEXT);
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



	markup() {
	    let localctx = new MarkupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, sgfParser.RULE_markup);
	    var _la = 0;
	    try {
	        this.state = 192;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 22:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 135;
	            this.match(sgfParser.T__21);
	            this.state = 137; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 136;
	                this.match(sgfParser.TEXT);
	                this.state = 139; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===77);
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 141;
	            this.match(sgfParser.T__22);
	            this.state = 143; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 142;
	                this.match(sgfParser.TEXT);
	                this.state = 145; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===77);
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 147;
	            this.match(sgfParser.T__23);
	            this.state = 154;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 76:
	                this.state = 148;
	                this.match(sgfParser.NONE);
	                break;
	            case 77:
	                this.state = 150; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                do {
	                    this.state = 149;
	                    this.match(sgfParser.TEXT);
	                    this.state = 152; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                } while(_la===77);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 156;
	            this.match(sgfParser.T__24);
	            this.state = 158; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 157;
	                this.match(sgfParser.TEXT);
	                this.state = 160; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===77);
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 162;
	            this.match(sgfParser.T__25);
	            this.state = 164; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 163;
	                this.match(sgfParser.TEXT);
	                this.state = 166; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===77);
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 168;
	            this.match(sgfParser.T__26);
	            this.state = 170; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 169;
	                this.match(sgfParser.TEXT);
	                this.state = 172; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===77);
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 174;
	            this.match(sgfParser.T__27);
	            this.state = 176; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 175;
	                this.match(sgfParser.TEXT);
	                this.state = 178; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===77);
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 180;
	            this.match(sgfParser.T__28);
	            this.state = 182; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 181;
	                this.match(sgfParser.TEXT);
	                this.state = 184; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===77);
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 186;
	            this.match(sgfParser.T__29);
	            this.state = 188; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 187;
	                this.match(sgfParser.TEXT);
	                this.state = 190; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===77);
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



	root() {
	    let localctx = new RootContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, sgfParser.RULE_root);
	    try {
	        this.state = 206;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 31:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 194;
	            this.match(sgfParser.T__30);
	            this.state = 195;
	            this.match(sgfParser.TEXT);
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 196;
	            this.match(sgfParser.T__31);
	            this.state = 197;
	            this.match(sgfParser.TEXT);
	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 198;
	            this.match(sgfParser.T__32);
	            this.state = 199;
	            this.match(sgfParser.TEXT);
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 200;
	            this.match(sgfParser.T__33);
	            this.state = 201;
	            this.match(sgfParser.TEXT);
	            break;
	        case 35:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 202;
	            this.match(sgfParser.T__34);
	            this.state = 203;
	            this.match(sgfParser.TEXT);
	            break;
	        case 36:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 204;
	            this.match(sgfParser.T__35);
	            this.state = 205;
	            this.match(sgfParser.TEXT);
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



	gameInfo() {
	    let localctx = new GameInfoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, sgfParser.RULE_gameInfo);
	    try {
	        this.state = 250;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 37:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 208;
	            this.match(sgfParser.T__36);
	            this.state = 209;
	            this.match(sgfParser.TEXT);
	            break;
	        case 38:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 210;
	            this.match(sgfParser.T__37);
	            this.state = 211;
	            this.match(sgfParser.TEXT);
	            break;
	        case 39:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 212;
	            this.match(sgfParser.T__38);
	            this.state = 213;
	            this.match(sgfParser.TEXT);
	            break;
	        case 40:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 214;
	            this.match(sgfParser.T__39);
	            this.state = 215;
	            this.match(sgfParser.TEXT);
	            break;
	        case 41:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 216;
	            this.match(sgfParser.T__40);
	            this.state = 217;
	            this.match(sgfParser.TEXT);
	            break;
	        case 42:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 218;
	            this.match(sgfParser.T__41);
	            this.state = 219;
	            this.match(sgfParser.TEXT);
	            break;
	        case 43:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 220;
	            this.match(sgfParser.T__42);
	            this.state = 221;
	            this.match(sgfParser.TEXT);
	            break;
	        case 44:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 222;
	            this.match(sgfParser.T__43);
	            this.state = 223;
	            this.match(sgfParser.TEXT);
	            break;
	        case 45:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 224;
	            this.match(sgfParser.T__44);
	            this.state = 225;
	            this.match(sgfParser.TEXT);
	            break;
	        case 46:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 226;
	            this.match(sgfParser.T__45);
	            this.state = 227;
	            this.match(sgfParser.TEXT);
	            break;
	        case 47:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 228;
	            this.match(sgfParser.T__46);
	            this.state = 229;
	            this.match(sgfParser.TEXT);
	            break;
	        case 48:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 230;
	            this.match(sgfParser.T__47);
	            this.state = 231;
	            this.match(sgfParser.TEXT);
	            break;
	        case 49:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 232;
	            this.match(sgfParser.T__48);
	            this.state = 233;
	            this.match(sgfParser.TEXT);
	            break;
	        case 50:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 234;
	            this.match(sgfParser.T__49);
	            this.state = 235;
	            this.match(sgfParser.TEXT);
	            break;
	        case 51:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 236;
	            this.match(sgfParser.T__50);
	            this.state = 237;
	            this.match(sgfParser.TEXT);
	            break;
	        case 52:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 238;
	            this.match(sgfParser.T__51);
	            this.state = 239;
	            this.match(sgfParser.TEXT);
	            break;
	        case 53:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 240;
	            this.match(sgfParser.T__52);
	            this.state = 241;
	            this.match(sgfParser.TEXT);
	            break;
	        case 54:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 242;
	            this.match(sgfParser.T__53);
	            this.state = 243;
	            this.match(sgfParser.TEXT);
	            break;
	        case 55:
	            this.enterOuterAlt(localctx, 19);
	            this.state = 244;
	            this.match(sgfParser.T__54);
	            this.state = 245;
	            this.match(sgfParser.TEXT);
	            break;
	        case 56:
	            this.enterOuterAlt(localctx, 20);
	            this.state = 246;
	            this.match(sgfParser.T__55);
	            this.state = 247;
	            this.match(sgfParser.TEXT);
	            break;
	        case 57:
	            this.enterOuterAlt(localctx, 21);
	            this.state = 248;
	            this.match(sgfParser.T__56);
	            this.state = 249;
	            this.match(sgfParser.TEXT);
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



	timing() {
	    let localctx = new TimingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, sgfParser.RULE_timing);
	    try {
	        this.state = 260;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 58:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 252;
	            this.match(sgfParser.T__57);
	            this.state = 253;
	            this.match(sgfParser.TEXT);
	            break;
	        case 59:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 254;
	            this.match(sgfParser.T__58);
	            this.state = 255;
	            this.match(sgfParser.TEXT);
	            break;
	        case 60:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 256;
	            this.match(sgfParser.T__59);
	            this.state = 257;
	            this.match(sgfParser.TEXT);
	            break;
	        case 61:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 258;
	            this.match(sgfParser.T__60);
	            this.state = 259;
	            this.match(sgfParser.TEXT);
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



	misc() {
	    let localctx = new MiscContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, sgfParser.RULE_misc);
	    var _la = 0;
	    try {
	        this.state = 272;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 62:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 262;
	            this.match(sgfParser.T__61);
	            this.state = 263;
	            _la = this._input.LA(1);
	            if(!(_la===76 || _la===77)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case 63:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 264;
	            this.match(sgfParser.T__62);
	            this.state = 265;
	            this.match(sgfParser.TEXT);
	            break;
	        case 64:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 266;
	            this.match(sgfParser.T__63);
	            this.state = 268; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 267;
	                this.match(sgfParser.TEXT);
	                this.state = 270; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===77);
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



	loa() {
	    let localctx = new LoaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, sgfParser.RULE_loa);
	    try {
	        this.state = 284;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 65:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 274;
	            this.match(sgfParser.T__64);
	            this.state = 275;
	            this.match(sgfParser.TEXT);
	            break;
	        case 66:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 276;
	            this.match(sgfParser.T__65);
	            this.state = 277;
	            this.match(sgfParser.TEXT);
	            break;
	        case 67:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 278;
	            this.match(sgfParser.T__66);
	            this.state = 279;
	            this.match(sgfParser.TEXT);
	            break;
	        case 68:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 280;
	            this.match(sgfParser.T__67);
	            this.state = 281;
	            this.match(sgfParser.TEXT);
	            break;
	        case 69:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 282;
	            this.match(sgfParser.T__68);
	            this.state = 283;
	            this.match(sgfParser.TEXT);
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



	go_() {
	    let localctx = new Go_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, sgfParser.RULE_go_);
	    var _la = 0;
	    try {
	        this.state = 308;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 70:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 286;
	            this.match(sgfParser.T__69);
	            this.state = 287;
	            this.match(sgfParser.TEXT);
	            break;
	        case 71:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 288;
	            this.match(sgfParser.T__70);
	            this.state = 289;
	            this.match(sgfParser.TEXT);
	            break;
	        case 72:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 290;
	            this.match(sgfParser.T__71);
	            this.state = 297;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 76:
	                this.state = 291;
	                this.match(sgfParser.NONE);
	                break;
	            case 77:
	                this.state = 293; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                do {
	                    this.state = 292;
	                    this.match(sgfParser.TEXT);
	                    this.state = 295; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                } while(_la===77);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;
	        case 73:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 299;
	            this.match(sgfParser.T__72);
	            this.state = 306;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 76:
	                this.state = 300;
	                this.match(sgfParser.NONE);
	                break;
	            case 77:
	                this.state = 302; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                do {
	                    this.state = 301;
	                    this.match(sgfParser.TEXT);
	                    this.state = 304; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                } while(_la===77);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
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



	privateProp() {
	    let localctx = new PrivatePropContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, sgfParser.RULE_privateProp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 310;
	        this.match(sgfParser.UCLETTER);
	        this.state = 317;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 76:
	            this.state = 311;
	            this.match(sgfParser.NONE);
	            break;
	        case 77:
	            this.state = 313; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 312;
	                this.match(sgfParser.TEXT);
	                this.state = 315; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===77);
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


}

sgfParser.EOF = antlr4.Token.EOF;
sgfParser.T__0 = 1;
sgfParser.T__1 = 2;
sgfParser.T__2 = 3;
sgfParser.T__3 = 4;
sgfParser.T__4 = 5;
sgfParser.T__5 = 6;
sgfParser.T__6 = 7;
sgfParser.T__7 = 8;
sgfParser.T__8 = 9;
sgfParser.T__9 = 10;
sgfParser.T__10 = 11;
sgfParser.T__11 = 12;
sgfParser.T__12 = 13;
sgfParser.T__13 = 14;
sgfParser.T__14 = 15;
sgfParser.T__15 = 16;
sgfParser.T__16 = 17;
sgfParser.T__17 = 18;
sgfParser.T__18 = 19;
sgfParser.T__19 = 20;
sgfParser.T__20 = 21;
sgfParser.T__21 = 22;
sgfParser.T__22 = 23;
sgfParser.T__23 = 24;
sgfParser.T__24 = 25;
sgfParser.T__25 = 26;
sgfParser.T__26 = 27;
sgfParser.T__27 = 28;
sgfParser.T__28 = 29;
sgfParser.T__29 = 30;
sgfParser.T__30 = 31;
sgfParser.T__31 = 32;
sgfParser.T__32 = 33;
sgfParser.T__33 = 34;
sgfParser.T__34 = 35;
sgfParser.T__35 = 36;
sgfParser.T__36 = 37;
sgfParser.T__37 = 38;
sgfParser.T__38 = 39;
sgfParser.T__39 = 40;
sgfParser.T__40 = 41;
sgfParser.T__41 = 42;
sgfParser.T__42 = 43;
sgfParser.T__43 = 44;
sgfParser.T__44 = 45;
sgfParser.T__45 = 46;
sgfParser.T__46 = 47;
sgfParser.T__47 = 48;
sgfParser.T__48 = 49;
sgfParser.T__49 = 50;
sgfParser.T__50 = 51;
sgfParser.T__51 = 52;
sgfParser.T__52 = 53;
sgfParser.T__53 = 54;
sgfParser.T__54 = 55;
sgfParser.T__55 = 56;
sgfParser.T__56 = 57;
sgfParser.T__57 = 58;
sgfParser.T__58 = 59;
sgfParser.T__59 = 60;
sgfParser.T__60 = 61;
sgfParser.T__61 = 62;
sgfParser.T__62 = 63;
sgfParser.T__63 = 64;
sgfParser.T__64 = 65;
sgfParser.T__65 = 66;
sgfParser.T__66 = 67;
sgfParser.T__67 = 68;
sgfParser.T__68 = 69;
sgfParser.T__69 = 70;
sgfParser.T__70 = 71;
sgfParser.T__71 = 72;
sgfParser.T__72 = 73;
sgfParser.COLOR = 74;
sgfParser.UCLETTER = 75;
sgfParser.NONE = 76;
sgfParser.TEXT = 77;
sgfParser.WS = 78;

sgfParser.RULE_collection = 0;
sgfParser.RULE_gameTree = 1;
sgfParser.RULE_sequence = 2;
sgfParser.RULE_node = 3;
sgfParser.RULE_property_ = 4;
sgfParser.RULE_move = 5;
sgfParser.RULE_setup = 6;
sgfParser.RULE_nodeAnnotation = 7;
sgfParser.RULE_moveAnnotation = 8;
sgfParser.RULE_markup = 9;
sgfParser.RULE_root = 10;
sgfParser.RULE_gameInfo = 11;
sgfParser.RULE_timing = 12;
sgfParser.RULE_misc = 13;
sgfParser.RULE_loa = 14;
sgfParser.RULE_go_ = 15;
sgfParser.RULE_privateProp = 16;

class CollectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sgfParser.RULE_collection;
    }

	EOF() {
	    return this.getToken(sgfParser.EOF, 0);
	};

	gameTree = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(GameTreeContext);
	    } else {
	        return this.getTypedRuleContext(GameTreeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof sgfListener ) {
	        listener.enterCollection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sgfListener ) {
	        listener.exitCollection(this);
		}
	}


}



class GameTreeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sgfParser.RULE_gameTree;
    }

	sequence() {
	    return this.getTypedRuleContext(SequenceContext,0);
	};

	gameTree = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(GameTreeContext);
	    } else {
	        return this.getTypedRuleContext(GameTreeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof sgfListener ) {
	        listener.enterGameTree(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sgfListener ) {
	        listener.exitGameTree(this);
		}
	}


}



class SequenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sgfParser.RULE_sequence;
    }

	node = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NodeContext);
	    } else {
	        return this.getTypedRuleContext(NodeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof sgfListener ) {
	        listener.enterSequence(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sgfListener ) {
	        listener.exitSequence(this);
		}
	}


}



class NodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sgfParser.RULE_node;
    }

	property_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Property_Context);
	    } else {
	        return this.getTypedRuleContext(Property_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof sgfListener ) {
	        listener.enterNode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sgfListener ) {
	        listener.exitNode(this);
		}
	}


}



class Property_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sgfParser.RULE_property_;
    }

	move() {
	    return this.getTypedRuleContext(MoveContext,0);
	};

	setup() {
	    return this.getTypedRuleContext(SetupContext,0);
	};

	nodeAnnotation() {
	    return this.getTypedRuleContext(NodeAnnotationContext,0);
	};

	moveAnnotation() {
	    return this.getTypedRuleContext(MoveAnnotationContext,0);
	};

	markup() {
	    return this.getTypedRuleContext(MarkupContext,0);
	};

	root() {
	    return this.getTypedRuleContext(RootContext,0);
	};

	gameInfo() {
	    return this.getTypedRuleContext(GameInfoContext,0);
	};

	timing() {
	    return this.getTypedRuleContext(TimingContext,0);
	};

	misc() {
	    return this.getTypedRuleContext(MiscContext,0);
	};

	loa() {
	    return this.getTypedRuleContext(LoaContext,0);
	};

	go_() {
	    return this.getTypedRuleContext(Go_Context,0);
	};

	privateProp() {
	    return this.getTypedRuleContext(PrivatePropContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof sgfListener ) {
	        listener.enterProperty_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sgfListener ) {
	        listener.exitProperty_(this);
		}
	}


}



class MoveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sgfParser.RULE_move;
    }

	COLOR() {
	    return this.getToken(sgfParser.COLOR, 0);
	};

	NONE() {
	    return this.getToken(sgfParser.NONE, 0);
	};

	TEXT() {
	    return this.getToken(sgfParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof sgfListener ) {
	        listener.enterMove(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sgfListener ) {
	        listener.exitMove(this);
		}
	}


}



class SetupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sgfParser.RULE_setup;
    }

	TEXT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(sgfParser.TEXT);
	    } else {
	        return this.getToken(sgfParser.TEXT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof sgfListener ) {
	        listener.enterSetup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sgfListener ) {
	        listener.exitSetup(this);
		}
	}


}



class NodeAnnotationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sgfParser.RULE_nodeAnnotation;
    }

	TEXT() {
	    return this.getToken(sgfParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof sgfListener ) {
	        listener.enterNodeAnnotation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sgfListener ) {
	        listener.exitNodeAnnotation(this);
		}
	}


}



class MoveAnnotationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sgfParser.RULE_moveAnnotation;
    }

	TEXT() {
	    return this.getToken(sgfParser.TEXT, 0);
	};

	NONE() {
	    return this.getToken(sgfParser.NONE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof sgfListener ) {
	        listener.enterMoveAnnotation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sgfListener ) {
	        listener.exitMoveAnnotation(this);
		}
	}


}



class MarkupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sgfParser.RULE_markup;
    }

	TEXT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(sgfParser.TEXT);
	    } else {
	        return this.getToken(sgfParser.TEXT, i);
	    }
	};


	NONE() {
	    return this.getToken(sgfParser.NONE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof sgfListener ) {
	        listener.enterMarkup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sgfListener ) {
	        listener.exitMarkup(this);
		}
	}


}



class RootContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sgfParser.RULE_root;
    }

	TEXT() {
	    return this.getToken(sgfParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof sgfListener ) {
	        listener.enterRoot(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sgfListener ) {
	        listener.exitRoot(this);
		}
	}


}



class GameInfoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sgfParser.RULE_gameInfo;
    }

	TEXT() {
	    return this.getToken(sgfParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof sgfListener ) {
	        listener.enterGameInfo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sgfListener ) {
	        listener.exitGameInfo(this);
		}
	}


}



class TimingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sgfParser.RULE_timing;
    }

	TEXT() {
	    return this.getToken(sgfParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof sgfListener ) {
	        listener.enterTiming(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sgfListener ) {
	        listener.exitTiming(this);
		}
	}


}



class MiscContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sgfParser.RULE_misc;
    }

	NONE() {
	    return this.getToken(sgfParser.NONE, 0);
	};

	TEXT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(sgfParser.TEXT);
	    } else {
	        return this.getToken(sgfParser.TEXT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof sgfListener ) {
	        listener.enterMisc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sgfListener ) {
	        listener.exitMisc(this);
		}
	}


}



class LoaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sgfParser.RULE_loa;
    }

	TEXT() {
	    return this.getToken(sgfParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof sgfListener ) {
	        listener.enterLoa(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sgfListener ) {
	        listener.exitLoa(this);
		}
	}


}



class Go_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sgfParser.RULE_go_;
    }

	TEXT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(sgfParser.TEXT);
	    } else {
	        return this.getToken(sgfParser.TEXT, i);
	    }
	};


	NONE() {
	    return this.getToken(sgfParser.NONE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof sgfListener ) {
	        listener.enterGo_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sgfListener ) {
	        listener.exitGo_(this);
		}
	}


}



class PrivatePropContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sgfParser.RULE_privateProp;
    }

	UCLETTER() {
	    return this.getToken(sgfParser.UCLETTER, 0);
	};

	NONE() {
	    return this.getToken(sgfParser.NONE, 0);
	};

	TEXT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(sgfParser.TEXT);
	    } else {
	        return this.getToken(sgfParser.TEXT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof sgfListener ) {
	        listener.enterPrivateProp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sgfListener ) {
	        listener.exitPrivateProp(this);
		}
	}


}




sgfParser.CollectionContext = CollectionContext; 
sgfParser.GameTreeContext = GameTreeContext; 
sgfParser.SequenceContext = SequenceContext; 
sgfParser.NodeContext = NodeContext; 
sgfParser.Property_Context = Property_Context; 
sgfParser.MoveContext = MoveContext; 
sgfParser.SetupContext = SetupContext; 
sgfParser.NodeAnnotationContext = NodeAnnotationContext; 
sgfParser.MoveAnnotationContext = MoveAnnotationContext; 
sgfParser.MarkupContext = MarkupContext; 
sgfParser.RootContext = RootContext; 
sgfParser.GameInfoContext = GameInfoContext; 
sgfParser.TimingContext = TimingContext; 
sgfParser.MiscContext = MiscContext; 
sgfParser.LoaContext = LoaContext; 
sgfParser.Go_Context = Go_Context; 
sgfParser.PrivatePropContext = PrivatePropContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
