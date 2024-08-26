// Generated from Resources/Parsers/sgf/sgf.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import sgfListener from './sgfListener.js';
const serializedATN = [4,1,78,318,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,4,0,36,8,0,11,0,12,0,37,1,1,
1,1,1,1,5,1,43,8,1,10,1,12,1,46,9,1,1,1,1,1,1,2,4,2,51,8,2,11,2,12,2,52,
1,3,1,3,5,3,57,8,3,10,3,12,3,60,9,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
1,4,1,4,1,4,3,4,74,8,4,1,5,1,5,1,5,1,5,1,5,1,5,3,5,82,8,5,1,6,1,6,4,6,86,
8,6,11,6,12,6,87,1,6,1,6,4,6,92,8,6,11,6,12,6,93,1,6,1,6,4,6,98,8,6,11,6,
12,6,99,1,6,1,6,3,6,104,8,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
1,7,1,7,1,7,1,7,1,7,3,7,122,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,132,
8,8,1,9,1,9,4,9,136,8,9,11,9,12,9,137,1,9,1,9,4,9,142,8,9,11,9,12,9,143,
1,9,1,9,1,9,4,9,149,8,9,11,9,12,9,150,3,9,153,8,9,1,9,1,9,4,9,157,8,9,11,
9,12,9,158,1,9,1,9,4,9,163,8,9,11,9,12,9,164,1,9,1,9,4,9,169,8,9,11,9,12,
9,170,1,9,1,9,4,9,175,8,9,11,9,12,9,176,1,9,1,9,4,9,181,8,9,11,9,12,9,182,
1,9,1,9,4,9,187,8,9,11,9,12,9,188,3,9,191,8,9,1,10,1,10,1,10,1,10,1,10,1,
10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,205,8,10,1,11,1,11,1,11,1,11,1,11,
1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,
11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,3,11,249,8,11,1,12,1,12,1,12,1,12,
1,12,1,12,1,12,1,12,3,12,259,8,12,1,13,1,13,1,13,1,13,1,13,1,13,4,13,267,
8,13,11,13,12,13,268,3,13,271,8,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,
14,1,14,1,14,3,14,283,8,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,4,15,292,8,
15,11,15,12,15,293,3,15,296,8,15,1,15,1,15,1,15,4,15,301,8,15,11,15,12,15,
302,3,15,305,8,15,3,15,307,8,15,1,16,1,16,1,16,4,16,312,8,16,11,16,12,16,
313,3,16,316,8,16,1,16,0,0,17,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,
32,0,1,1,0,76,77,395,0,35,1,0,0,0,2,39,1,0,0,0,4,50,1,0,0,0,6,54,1,0,0,0,
8,73,1,0,0,0,10,81,1,0,0,0,12,103,1,0,0,0,14,121,1,0,0,0,16,131,1,0,0,0,
18,190,1,0,0,0,20,204,1,0,0,0,22,248,1,0,0,0,24,258,1,0,0,0,26,270,1,0,0,
0,28,282,1,0,0,0,30,306,1,0,0,0,32,308,1,0,0,0,34,36,3,2,1,0,35,34,1,0,0,
0,36,37,1,0,0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,1,1,0,0,0,39,40,5,1,0,0,40,
44,3,4,2,0,41,43,3,2,1,0,42,41,1,0,0,0,43,46,1,0,0,0,44,42,1,0,0,0,44,45,
1,0,0,0,45,47,1,0,0,0,46,44,1,0,0,0,47,48,5,2,0,0,48,3,1,0,0,0,49,51,3,6,
3,0,50,49,1,0,0,0,51,52,1,0,0,0,52,50,1,0,0,0,52,53,1,0,0,0,53,5,1,0,0,0,
54,58,5,3,0,0,55,57,3,8,4,0,56,55,1,0,0,0,57,60,1,0,0,0,58,56,1,0,0,0,58,
59,1,0,0,0,59,7,1,0,0,0,60,58,1,0,0,0,61,74,3,10,5,0,62,74,3,12,6,0,63,74,
3,14,7,0,64,74,3,16,8,0,65,74,3,18,9,0,66,74,3,20,10,0,67,74,3,22,11,0,68,
74,3,24,12,0,69,74,3,26,13,0,70,74,3,28,14,0,71,74,3,30,15,0,72,74,3,32,
16,0,73,61,1,0,0,0,73,62,1,0,0,0,73,63,1,0,0,0,73,64,1,0,0,0,73,65,1,0,0,
0,73,66,1,0,0,0,73,67,1,0,0,0,73,68,1,0,0,0,73,69,1,0,0,0,73,70,1,0,0,0,
73,71,1,0,0,0,73,72,1,0,0,0,74,9,1,0,0,0,75,76,5,74,0,0,76,82,7,0,0,0,77,
78,5,4,0,0,78,82,5,76,0,0,79,80,5,5,0,0,80,82,5,77,0,0,81,75,1,0,0,0,81,
77,1,0,0,0,81,79,1,0,0,0,82,11,1,0,0,0,83,85,5,6,0,0,84,86,5,77,0,0,85,84,
1,0,0,0,86,87,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,104,1,0,0,0,89,91,5,
7,0,0,90,92,5,77,0,0,91,90,1,0,0,0,92,93,1,0,0,0,93,91,1,0,0,0,93,94,1,0,
0,0,94,104,1,0,0,0,95,97,5,8,0,0,96,98,5,77,0,0,97,96,1,0,0,0,98,99,1,0,
0,0,99,97,1,0,0,0,99,100,1,0,0,0,100,104,1,0,0,0,101,102,5,9,0,0,102,104,
5,77,0,0,103,83,1,0,0,0,103,89,1,0,0,0,103,95,1,0,0,0,103,101,1,0,0,0,104,
13,1,0,0,0,105,106,5,10,0,0,106,122,5,77,0,0,107,108,5,11,0,0,108,122,5,
77,0,0,109,110,5,12,0,0,110,122,5,77,0,0,111,112,5,13,0,0,112,122,5,77,0,
0,113,114,5,14,0,0,114,122,5,77,0,0,115,116,5,15,0,0,116,122,5,77,0,0,117,
118,5,16,0,0,118,122,5,77,0,0,119,120,5,17,0,0,120,122,5,77,0,0,121,105,
1,0,0,0,121,107,1,0,0,0,121,109,1,0,0,0,121,111,1,0,0,0,121,113,1,0,0,0,
121,115,1,0,0,0,121,117,1,0,0,0,121,119,1,0,0,0,122,15,1,0,0,0,123,124,5,
18,0,0,124,132,5,77,0,0,125,126,5,19,0,0,126,132,5,76,0,0,127,128,5,20,0,
0,128,132,5,76,0,0,129,130,5,21,0,0,130,132,5,77,0,0,131,123,1,0,0,0,131,
125,1,0,0,0,131,127,1,0,0,0,131,129,1,0,0,0,132,17,1,0,0,0,133,135,5,22,
0,0,134,136,5,77,0,0,135,134,1,0,0,0,136,137,1,0,0,0,137,135,1,0,0,0,137,
138,1,0,0,0,138,191,1,0,0,0,139,141,5,23,0,0,140,142,5,77,0,0,141,140,1,
0,0,0,142,143,1,0,0,0,143,141,1,0,0,0,143,144,1,0,0,0,144,191,1,0,0,0,145,
152,5,24,0,0,146,153,5,76,0,0,147,149,5,77,0,0,148,147,1,0,0,0,149,150,1,
0,0,0,150,148,1,0,0,0,150,151,1,0,0,0,151,153,1,0,0,0,152,146,1,0,0,0,152,
148,1,0,0,0,153,191,1,0,0,0,154,156,5,25,0,0,155,157,5,77,0,0,156,155,1,
0,0,0,157,158,1,0,0,0,158,156,1,0,0,0,158,159,1,0,0,0,159,191,1,0,0,0,160,
162,5,26,0,0,161,163,5,77,0,0,162,161,1,0,0,0,163,164,1,0,0,0,164,162,1,
0,0,0,164,165,1,0,0,0,165,191,1,0,0,0,166,168,5,27,0,0,167,169,5,77,0,0,
168,167,1,0,0,0,169,170,1,0,0,0,170,168,1,0,0,0,170,171,1,0,0,0,171,191,
1,0,0,0,172,174,5,28,0,0,173,175,5,77,0,0,174,173,1,0,0,0,175,176,1,0,0,
0,176,174,1,0,0,0,176,177,1,0,0,0,177,191,1,0,0,0,178,180,5,29,0,0,179,181,
5,77,0,0,180,179,1,0,0,0,181,182,1,0,0,0,182,180,1,0,0,0,182,183,1,0,0,0,
183,191,1,0,0,0,184,186,5,30,0,0,185,187,5,77,0,0,186,185,1,0,0,0,187,188,
1,0,0,0,188,186,1,0,0,0,188,189,1,0,0,0,189,191,1,0,0,0,190,133,1,0,0,0,
190,139,1,0,0,0,190,145,1,0,0,0,190,154,1,0,0,0,190,160,1,0,0,0,190,166,
1,0,0,0,190,172,1,0,0,0,190,178,1,0,0,0,190,184,1,0,0,0,191,19,1,0,0,0,192,
193,5,31,0,0,193,205,5,77,0,0,194,195,5,32,0,0,195,205,5,77,0,0,196,197,
5,33,0,0,197,205,5,77,0,0,198,199,5,34,0,0,199,205,5,77,0,0,200,201,5,35,
0,0,201,205,5,77,0,0,202,203,5,36,0,0,203,205,5,77,0,0,204,192,1,0,0,0,204,
194,1,0,0,0,204,196,1,0,0,0,204,198,1,0,0,0,204,200,1,0,0,0,204,202,1,0,
0,0,205,21,1,0,0,0,206,207,5,37,0,0,207,249,5,77,0,0,208,209,5,38,0,0,209,
249,5,77,0,0,210,211,5,39,0,0,211,249,5,77,0,0,212,213,5,40,0,0,213,249,
5,77,0,0,214,215,5,41,0,0,215,249,5,77,0,0,216,217,5,42,0,0,217,249,5,77,
0,0,218,219,5,43,0,0,219,249,5,77,0,0,220,221,5,44,0,0,221,249,5,77,0,0,
222,223,5,45,0,0,223,249,5,77,0,0,224,225,5,46,0,0,225,249,5,77,0,0,226,
227,5,47,0,0,227,249,5,77,0,0,228,229,5,48,0,0,229,249,5,77,0,0,230,231,
5,49,0,0,231,249,5,77,0,0,232,233,5,50,0,0,233,249,5,77,0,0,234,235,5,51,
0,0,235,249,5,77,0,0,236,237,5,52,0,0,237,249,5,77,0,0,238,239,5,53,0,0,
239,249,5,77,0,0,240,241,5,54,0,0,241,249,5,77,0,0,242,243,5,55,0,0,243,
249,5,77,0,0,244,245,5,56,0,0,245,249,5,77,0,0,246,247,5,57,0,0,247,249,
5,77,0,0,248,206,1,0,0,0,248,208,1,0,0,0,248,210,1,0,0,0,248,212,1,0,0,0,
248,214,1,0,0,0,248,216,1,0,0,0,248,218,1,0,0,0,248,220,1,0,0,0,248,222,
1,0,0,0,248,224,1,0,0,0,248,226,1,0,0,0,248,228,1,0,0,0,248,230,1,0,0,0,
248,232,1,0,0,0,248,234,1,0,0,0,248,236,1,0,0,0,248,238,1,0,0,0,248,240,
1,0,0,0,248,242,1,0,0,0,248,244,1,0,0,0,248,246,1,0,0,0,249,23,1,0,0,0,250,
251,5,58,0,0,251,259,5,77,0,0,252,253,5,59,0,0,253,259,5,77,0,0,254,255,
5,60,0,0,255,259,5,77,0,0,256,257,5,61,0,0,257,259,5,77,0,0,258,250,1,0,
0,0,258,252,1,0,0,0,258,254,1,0,0,0,258,256,1,0,0,0,259,25,1,0,0,0,260,261,
5,62,0,0,261,271,7,0,0,0,262,263,5,63,0,0,263,271,5,77,0,0,264,266,5,64,
0,0,265,267,5,77,0,0,266,265,1,0,0,0,267,268,1,0,0,0,268,266,1,0,0,0,268,
269,1,0,0,0,269,271,1,0,0,0,270,260,1,0,0,0,270,262,1,0,0,0,270,264,1,0,
0,0,271,27,1,0,0,0,272,273,5,65,0,0,273,283,5,77,0,0,274,275,5,66,0,0,275,
283,5,77,0,0,276,277,5,67,0,0,277,283,5,77,0,0,278,279,5,68,0,0,279,283,
5,77,0,0,280,281,5,69,0,0,281,283,5,77,0,0,282,272,1,0,0,0,282,274,1,0,0,
0,282,276,1,0,0,0,282,278,1,0,0,0,282,280,1,0,0,0,283,29,1,0,0,0,284,285,
5,70,0,0,285,307,5,77,0,0,286,287,5,71,0,0,287,307,5,77,0,0,288,295,5,72,
0,0,289,296,5,76,0,0,290,292,5,77,0,0,291,290,1,0,0,0,292,293,1,0,0,0,293,
291,1,0,0,0,293,294,1,0,0,0,294,296,1,0,0,0,295,289,1,0,0,0,295,291,1,0,
0,0,296,307,1,0,0,0,297,304,5,73,0,0,298,305,5,76,0,0,299,301,5,77,0,0,300,
299,1,0,0,0,301,302,1,0,0,0,302,300,1,0,0,0,302,303,1,0,0,0,303,305,1,0,
0,0,304,298,1,0,0,0,304,300,1,0,0,0,305,307,1,0,0,0,306,284,1,0,0,0,306,
286,1,0,0,0,306,288,1,0,0,0,306,297,1,0,0,0,307,31,1,0,0,0,308,315,5,75,
0,0,309,316,5,76,0,0,310,312,5,77,0,0,311,310,1,0,0,0,312,313,1,0,0,0,313,
311,1,0,0,0,313,314,1,0,0,0,314,316,1,0,0,0,315,309,1,0,0,0,315,311,1,0,
0,0,316,33,1,0,0,0,36,37,44,52,58,73,81,87,93,99,103,121,131,137,143,150,
152,158,164,170,176,182,188,190,204,248,258,268,270,282,293,295,302,304,
306,313,315];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

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

    get atn() {
        return atn;
    }



	collection() {
	    let localctx = new CollectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, sgfParser.RULE_collection);
	    var _la = 0; // Token type
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
	        } while(_la===sgfParser.T__0);
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.match(sgfParser.T__0);
	        this.state = 40;
	        this.sequence();
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===sgfParser.T__0) {
	            this.state = 41;
	            this.gameTree();
	            this.state = 46;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 47;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 49;
	            this.node();
	            this.state = 52; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===sgfParser.T__2);
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(sgfParser.T__2);
	        this.state = 58;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << sgfParser.T__3) | (1 << sgfParser.T__4) | (1 << sgfParser.T__5) | (1 << sgfParser.T__6) | (1 << sgfParser.T__7) | (1 << sgfParser.T__8) | (1 << sgfParser.T__9) | (1 << sgfParser.T__10) | (1 << sgfParser.T__11) | (1 << sgfParser.T__12) | (1 << sgfParser.T__13) | (1 << sgfParser.T__14) | (1 << sgfParser.T__15) | (1 << sgfParser.T__16) | (1 << sgfParser.T__17) | (1 << sgfParser.T__18) | (1 << sgfParser.T__19) | (1 << sgfParser.T__20) | (1 << sgfParser.T__21) | (1 << sgfParser.T__22) | (1 << sgfParser.T__23) | (1 << sgfParser.T__24) | (1 << sgfParser.T__25) | (1 << sgfParser.T__26) | (1 << sgfParser.T__27) | (1 << sgfParser.T__28) | (1 << sgfParser.T__29) | (1 << sgfParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (sgfParser.T__31 - 32)) | (1 << (sgfParser.T__32 - 32)) | (1 << (sgfParser.T__33 - 32)) | (1 << (sgfParser.T__34 - 32)) | (1 << (sgfParser.T__35 - 32)) | (1 << (sgfParser.T__36 - 32)) | (1 << (sgfParser.T__37 - 32)) | (1 << (sgfParser.T__38 - 32)) | (1 << (sgfParser.T__39 - 32)) | (1 << (sgfParser.T__40 - 32)) | (1 << (sgfParser.T__41 - 32)) | (1 << (sgfParser.T__42 - 32)) | (1 << (sgfParser.T__43 - 32)) | (1 << (sgfParser.T__44 - 32)) | (1 << (sgfParser.T__45 - 32)) | (1 << (sgfParser.T__46 - 32)) | (1 << (sgfParser.T__47 - 32)) | (1 << (sgfParser.T__48 - 32)) | (1 << (sgfParser.T__49 - 32)) | (1 << (sgfParser.T__50 - 32)) | (1 << (sgfParser.T__51 - 32)) | (1 << (sgfParser.T__52 - 32)) | (1 << (sgfParser.T__53 - 32)) | (1 << (sgfParser.T__54 - 32)) | (1 << (sgfParser.T__55 - 32)) | (1 << (sgfParser.T__56 - 32)) | (1 << (sgfParser.T__57 - 32)) | (1 << (sgfParser.T__58 - 32)) | (1 << (sgfParser.T__59 - 32)) | (1 << (sgfParser.T__60 - 32)) | (1 << (sgfParser.T__61 - 32)) | (1 << (sgfParser.T__62 - 32)))) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & ((1 << (sgfParser.T__63 - 64)) | (1 << (sgfParser.T__64 - 64)) | (1 << (sgfParser.T__65 - 64)) | (1 << (sgfParser.T__66 - 64)) | (1 << (sgfParser.T__67 - 64)) | (1 << (sgfParser.T__68 - 64)) | (1 << (sgfParser.T__69 - 64)) | (1 << (sgfParser.T__70 - 64)) | (1 << (sgfParser.T__71 - 64)) | (1 << (sgfParser.T__72 - 64)) | (1 << (sgfParser.COLOR - 64)) | (1 << (sgfParser.UCLETTER - 64)))) !== 0)) {
	            this.state = 55;
	            this.property_();
	            this.state = 60;
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
	        this.state = 73;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case sgfParser.T__3:
	        case sgfParser.T__4:
	        case sgfParser.COLOR:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 61;
	            this.move();
	            break;
	        case sgfParser.T__5:
	        case sgfParser.T__6:
	        case sgfParser.T__7:
	        case sgfParser.T__8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 62;
	            this.setup();
	            break;
	        case sgfParser.T__9:
	        case sgfParser.T__10:
	        case sgfParser.T__11:
	        case sgfParser.T__12:
	        case sgfParser.T__13:
	        case sgfParser.T__14:
	        case sgfParser.T__15:
	        case sgfParser.T__16:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 63;
	            this.nodeAnnotation();
	            break;
	        case sgfParser.T__17:
	        case sgfParser.T__18:
	        case sgfParser.T__19:
	        case sgfParser.T__20:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 64;
	            this.moveAnnotation();
	            break;
	        case sgfParser.T__21:
	        case sgfParser.T__22:
	        case sgfParser.T__23:
	        case sgfParser.T__24:
	        case sgfParser.T__25:
	        case sgfParser.T__26:
	        case sgfParser.T__27:
	        case sgfParser.T__28:
	        case sgfParser.T__29:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 65;
	            this.markup();
	            break;
	        case sgfParser.T__30:
	        case sgfParser.T__31:
	        case sgfParser.T__32:
	        case sgfParser.T__33:
	        case sgfParser.T__34:
	        case sgfParser.T__35:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 66;
	            this.root();
	            break;
	        case sgfParser.T__36:
	        case sgfParser.T__37:
	        case sgfParser.T__38:
	        case sgfParser.T__39:
	        case sgfParser.T__40:
	        case sgfParser.T__41:
	        case sgfParser.T__42:
	        case sgfParser.T__43:
	        case sgfParser.T__44:
	        case sgfParser.T__45:
	        case sgfParser.T__46:
	        case sgfParser.T__47:
	        case sgfParser.T__48:
	        case sgfParser.T__49:
	        case sgfParser.T__50:
	        case sgfParser.T__51:
	        case sgfParser.T__52:
	        case sgfParser.T__53:
	        case sgfParser.T__54:
	        case sgfParser.T__55:
	        case sgfParser.T__56:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 67;
	            this.gameInfo();
	            break;
	        case sgfParser.T__57:
	        case sgfParser.T__58:
	        case sgfParser.T__59:
	        case sgfParser.T__60:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 68;
	            this.timing();
	            break;
	        case sgfParser.T__61:
	        case sgfParser.T__62:
	        case sgfParser.T__63:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 69;
	            this.misc();
	            break;
	        case sgfParser.T__64:
	        case sgfParser.T__65:
	        case sgfParser.T__66:
	        case sgfParser.T__67:
	        case sgfParser.T__68:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 70;
	            this.loa();
	            break;
	        case sgfParser.T__69:
	        case sgfParser.T__70:
	        case sgfParser.T__71:
	        case sgfParser.T__72:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 71;
	            this.go_();
	            break;
	        case sgfParser.UCLETTER:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 72;
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
	    var _la = 0; // Token type
	    try {
	        this.state = 81;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case sgfParser.COLOR:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 75;
	            this.match(sgfParser.COLOR);
	            this.state = 76;
	            _la = this._input.LA(1);
	            if(!(_la===sgfParser.NONE || _la===sgfParser.TEXT)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case sgfParser.T__3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 77;
	            this.match(sgfParser.T__3);
	            this.state = 78;
	            this.match(sgfParser.NONE);
	            break;
	        case sgfParser.T__4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 79;
	            this.match(sgfParser.T__4);
	            this.state = 80;
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
	    var _la = 0; // Token type
	    try {
	        this.state = 103;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case sgfParser.T__5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 83;
	            this.match(sgfParser.T__5);
	            this.state = 85; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 84;
	                this.match(sgfParser.TEXT);
	                this.state = 87; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===sgfParser.TEXT);
	            break;
	        case sgfParser.T__6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 89;
	            this.match(sgfParser.T__6);
	            this.state = 91; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 90;
	                this.match(sgfParser.TEXT);
	                this.state = 93; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===sgfParser.TEXT);
	            break;
	        case sgfParser.T__7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 95;
	            this.match(sgfParser.T__7);
	            this.state = 97; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 96;
	                this.match(sgfParser.TEXT);
	                this.state = 99; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===sgfParser.TEXT);
	            break;
	        case sgfParser.T__8:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 101;
	            this.match(sgfParser.T__8);
	            this.state = 102;
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
	        this.state = 121;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case sgfParser.T__9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 105;
	            this.match(sgfParser.T__9);
	            this.state = 106;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 107;
	            this.match(sgfParser.T__10);
	            this.state = 108;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__11:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 109;
	            this.match(sgfParser.T__11);
	            this.state = 110;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__12:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 111;
	            this.match(sgfParser.T__12);
	            this.state = 112;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__13:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 113;
	            this.match(sgfParser.T__13);
	            this.state = 114;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__14:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 115;
	            this.match(sgfParser.T__14);
	            this.state = 116;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__15:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 117;
	            this.match(sgfParser.T__15);
	            this.state = 118;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__16:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 119;
	            this.match(sgfParser.T__16);
	            this.state = 120;
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
	        this.state = 131;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case sgfParser.T__17:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 123;
	            this.match(sgfParser.T__17);
	            this.state = 124;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__18:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 125;
	            this.match(sgfParser.T__18);
	            this.state = 126;
	            this.match(sgfParser.NONE);
	            break;
	        case sgfParser.T__19:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 127;
	            this.match(sgfParser.T__19);
	            this.state = 128;
	            this.match(sgfParser.NONE);
	            break;
	        case sgfParser.T__20:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 129;
	            this.match(sgfParser.T__20);
	            this.state = 130;
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
	    var _la = 0; // Token type
	    try {
	        this.state = 190;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case sgfParser.T__21:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 133;
	            this.match(sgfParser.T__21);
	            this.state = 135; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 134;
	                this.match(sgfParser.TEXT);
	                this.state = 137; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===sgfParser.TEXT);
	            break;
	        case sgfParser.T__22:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 139;
	            this.match(sgfParser.T__22);
	            this.state = 141; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 140;
	                this.match(sgfParser.TEXT);
	                this.state = 143; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===sgfParser.TEXT);
	            break;
	        case sgfParser.T__23:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 145;
	            this.match(sgfParser.T__23);
	            this.state = 152;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case sgfParser.NONE:
	                this.state = 146;
	                this.match(sgfParser.NONE);
	                break;
	            case sgfParser.TEXT:
	                this.state = 148; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                do {
	                    this.state = 147;
	                    this.match(sgfParser.TEXT);
	                    this.state = 150; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                } while(_la===sgfParser.TEXT);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;
	        case sgfParser.T__24:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 154;
	            this.match(sgfParser.T__24);
	            this.state = 156; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 155;
	                this.match(sgfParser.TEXT);
	                this.state = 158; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===sgfParser.TEXT);
	            break;
	        case sgfParser.T__25:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 160;
	            this.match(sgfParser.T__25);
	            this.state = 162; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 161;
	                this.match(sgfParser.TEXT);
	                this.state = 164; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===sgfParser.TEXT);
	            break;
	        case sgfParser.T__26:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 166;
	            this.match(sgfParser.T__26);
	            this.state = 168; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 167;
	                this.match(sgfParser.TEXT);
	                this.state = 170; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===sgfParser.TEXT);
	            break;
	        case sgfParser.T__27:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 172;
	            this.match(sgfParser.T__27);
	            this.state = 174; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 173;
	                this.match(sgfParser.TEXT);
	                this.state = 176; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===sgfParser.TEXT);
	            break;
	        case sgfParser.T__28:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 178;
	            this.match(sgfParser.T__28);
	            this.state = 180; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 179;
	                this.match(sgfParser.TEXT);
	                this.state = 182; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===sgfParser.TEXT);
	            break;
	        case sgfParser.T__29:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 184;
	            this.match(sgfParser.T__29);
	            this.state = 186; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 185;
	                this.match(sgfParser.TEXT);
	                this.state = 188; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===sgfParser.TEXT);
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
	        this.state = 204;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case sgfParser.T__30:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 192;
	            this.match(sgfParser.T__30);
	            this.state = 193;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__31:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 194;
	            this.match(sgfParser.T__31);
	            this.state = 195;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__32:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 196;
	            this.match(sgfParser.T__32);
	            this.state = 197;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__33:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 198;
	            this.match(sgfParser.T__33);
	            this.state = 199;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__34:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 200;
	            this.match(sgfParser.T__34);
	            this.state = 201;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__35:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 202;
	            this.match(sgfParser.T__35);
	            this.state = 203;
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
	        this.state = 248;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case sgfParser.T__36:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 206;
	            this.match(sgfParser.T__36);
	            this.state = 207;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__37:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 208;
	            this.match(sgfParser.T__37);
	            this.state = 209;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__38:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 210;
	            this.match(sgfParser.T__38);
	            this.state = 211;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__39:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 212;
	            this.match(sgfParser.T__39);
	            this.state = 213;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__40:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 214;
	            this.match(sgfParser.T__40);
	            this.state = 215;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__41:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 216;
	            this.match(sgfParser.T__41);
	            this.state = 217;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__42:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 218;
	            this.match(sgfParser.T__42);
	            this.state = 219;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__43:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 220;
	            this.match(sgfParser.T__43);
	            this.state = 221;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__44:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 222;
	            this.match(sgfParser.T__44);
	            this.state = 223;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__45:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 224;
	            this.match(sgfParser.T__45);
	            this.state = 225;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__46:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 226;
	            this.match(sgfParser.T__46);
	            this.state = 227;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__47:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 228;
	            this.match(sgfParser.T__47);
	            this.state = 229;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__48:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 230;
	            this.match(sgfParser.T__48);
	            this.state = 231;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__49:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 232;
	            this.match(sgfParser.T__49);
	            this.state = 233;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__50:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 234;
	            this.match(sgfParser.T__50);
	            this.state = 235;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__51:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 236;
	            this.match(sgfParser.T__51);
	            this.state = 237;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__52:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 238;
	            this.match(sgfParser.T__52);
	            this.state = 239;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__53:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 240;
	            this.match(sgfParser.T__53);
	            this.state = 241;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__54:
	            this.enterOuterAlt(localctx, 19);
	            this.state = 242;
	            this.match(sgfParser.T__54);
	            this.state = 243;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__55:
	            this.enterOuterAlt(localctx, 20);
	            this.state = 244;
	            this.match(sgfParser.T__55);
	            this.state = 245;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__56:
	            this.enterOuterAlt(localctx, 21);
	            this.state = 246;
	            this.match(sgfParser.T__56);
	            this.state = 247;
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
	        this.state = 258;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case sgfParser.T__57:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 250;
	            this.match(sgfParser.T__57);
	            this.state = 251;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__58:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 252;
	            this.match(sgfParser.T__58);
	            this.state = 253;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__59:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 254;
	            this.match(sgfParser.T__59);
	            this.state = 255;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__60:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 256;
	            this.match(sgfParser.T__60);
	            this.state = 257;
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
	    var _la = 0; // Token type
	    try {
	        this.state = 270;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case sgfParser.T__61:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 260;
	            this.match(sgfParser.T__61);
	            this.state = 261;
	            _la = this._input.LA(1);
	            if(!(_la===sgfParser.NONE || _la===sgfParser.TEXT)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case sgfParser.T__62:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 262;
	            this.match(sgfParser.T__62);
	            this.state = 263;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__63:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 264;
	            this.match(sgfParser.T__63);
	            this.state = 266; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 265;
	                this.match(sgfParser.TEXT);
	                this.state = 268; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===sgfParser.TEXT);
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
	        this.state = 282;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case sgfParser.T__64:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 272;
	            this.match(sgfParser.T__64);
	            this.state = 273;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__65:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 274;
	            this.match(sgfParser.T__65);
	            this.state = 275;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__66:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 276;
	            this.match(sgfParser.T__66);
	            this.state = 277;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__67:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 278;
	            this.match(sgfParser.T__67);
	            this.state = 279;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__68:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 280;
	            this.match(sgfParser.T__68);
	            this.state = 281;
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
	    var _la = 0; // Token type
	    try {
	        this.state = 306;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case sgfParser.T__69:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 284;
	            this.match(sgfParser.T__69);
	            this.state = 285;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__70:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 286;
	            this.match(sgfParser.T__70);
	            this.state = 287;
	            this.match(sgfParser.TEXT);
	            break;
	        case sgfParser.T__71:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 288;
	            this.match(sgfParser.T__71);
	            this.state = 295;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case sgfParser.NONE:
	                this.state = 289;
	                this.match(sgfParser.NONE);
	                break;
	            case sgfParser.TEXT:
	                this.state = 291; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                do {
	                    this.state = 290;
	                    this.match(sgfParser.TEXT);
	                    this.state = 293; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                } while(_la===sgfParser.TEXT);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;
	        case sgfParser.T__72:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 297;
	            this.match(sgfParser.T__72);
	            this.state = 304;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case sgfParser.NONE:
	                this.state = 298;
	                this.match(sgfParser.NONE);
	                break;
	            case sgfParser.TEXT:
	                this.state = 300; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                do {
	                    this.state = 299;
	                    this.match(sgfParser.TEXT);
	                    this.state = 302; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                } while(_la===sgfParser.TEXT);
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 308;
	        this.match(sgfParser.UCLETTER);
	        this.state = 315;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case sgfParser.NONE:
	            this.state = 309;
	            this.match(sgfParser.NONE);
	            break;
	        case sgfParser.TEXT:
	            this.state = 311; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 310;
	                this.match(sgfParser.TEXT);
	                this.state = 313; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===sgfParser.TEXT);
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
