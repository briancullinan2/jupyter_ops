// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/b/b.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import bListener from './bListener.js';
const serializedATN = [4,1,44,282,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,1,0,5,0,60,8,0,10,0,12,0,63,9,0,1,0,1,0,1,1,1,1,3,1,69,8,
1,1,1,1,1,1,1,5,1,74,8,1,10,1,12,1,77,9,1,5,1,79,8,1,10,1,12,1,82,9,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,91,8,1,10,1,12,1,94,9,1,3,1,96,8,1,1,1,1,1,
1,1,3,1,101,8,1,1,2,1,2,3,2,105,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,1,3,1,3,1,3,3,3,122,8,3,1,4,1,4,1,5,1,5,1,5,1,6,1,6,5,6,131,
8,6,10,6,12,6,134,9,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,3,7,143,8,7,1,7,1,7,1,
8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,
11,1,11,1,11,1,11,1,11,3,11,168,8,11,1,12,1,12,1,12,1,12,1,12,1,13,1,13,
1,13,1,13,5,13,179,8,13,10,13,12,13,182,9,13,1,13,1,13,1,14,1,14,1,14,3,
14,189,8,14,1,14,1,14,1,14,3,14,194,8,14,5,14,196,8,14,10,14,12,14,199,9,
14,1,14,1,14,1,15,1,15,1,15,1,15,3,15,207,8,15,1,16,1,16,1,16,1,16,1,16,
1,16,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,
19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,241,
8,19,1,20,1,20,1,20,3,20,246,8,20,1,20,1,20,1,21,1,21,1,21,5,21,253,8,21,
10,21,12,21,256,9,21,1,22,1,22,3,22,260,8,22,1,23,1,23,1,24,1,24,1,25,1,
25,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,3,26,276,8,26,1,27,1,27,1,28,
1,28,1,28,0,0,29,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,
40,42,44,46,48,50,52,54,56,0,4,1,0,20,21,1,0,22,23,3,0,18,18,22,22,24,36,
1,0,40,42,293,0,61,1,0,0,0,2,100,1,0,0,0,4,104,1,0,0,0,6,121,1,0,0,0,8,123,
1,0,0,0,10,125,1,0,0,0,12,128,1,0,0,0,14,137,1,0,0,0,16,146,1,0,0,0,18,150,
1,0,0,0,20,154,1,0,0,0,22,160,1,0,0,0,24,169,1,0,0,0,26,174,1,0,0,0,28,185,
1,0,0,0,30,206,1,0,0,0,32,208,1,0,0,0,34,214,1,0,0,0,36,218,1,0,0,0,38,240,
1,0,0,0,40,242,1,0,0,0,42,249,1,0,0,0,44,257,1,0,0,0,46,261,1,0,0,0,48,263,
1,0,0,0,50,265,1,0,0,0,52,275,1,0,0,0,54,277,1,0,0,0,56,279,1,0,0,0,58,60,
3,2,1,0,59,58,1,0,0,0,60,63,1,0,0,0,61,59,1,0,0,0,61,62,1,0,0,0,62,64,1,
0,0,0,63,61,1,0,0,0,64,65,5,0,0,1,65,1,1,0,0,0,66,68,3,56,28,0,67,69,3,54,
27,0,68,67,1,0,0,0,68,69,1,0,0,0,69,80,1,0,0,0,70,75,3,4,2,0,71,72,5,1,0,
0,72,74,3,4,2,0,73,71,1,0,0,0,74,77,1,0,0,0,75,73,1,0,0,0,75,76,1,0,0,0,
76,79,1,0,0,0,77,75,1,0,0,0,78,70,1,0,0,0,79,82,1,0,0,0,80,78,1,0,0,0,80,
81,1,0,0,0,81,83,1,0,0,0,82,80,1,0,0,0,83,84,5,2,0,0,84,101,1,0,0,0,85,86,
3,56,28,0,86,95,5,3,0,0,87,92,3,56,28,0,88,89,5,1,0,0,89,91,3,56,28,0,90,
88,1,0,0,0,91,94,1,0,0,0,92,90,1,0,0,0,92,93,1,0,0,0,93,96,1,0,0,0,94,92,
1,0,0,0,95,87,1,0,0,0,95,96,1,0,0,0,96,97,1,0,0,0,97,98,5,4,0,0,98,99,3,
6,3,0,99,101,1,0,0,0,100,66,1,0,0,0,100,85,1,0,0,0,101,3,1,0,0,0,102,105,
3,54,27,0,103,105,3,56,28,0,104,102,1,0,0,0,104,103,1,0,0,0,105,5,1,0,0,
0,106,122,3,26,13,0,107,122,3,28,14,0,108,109,3,56,28,0,109,110,5,5,0,0,
110,111,3,6,3,0,111,122,1,0,0,0,112,122,3,24,12,0,113,122,3,12,6,0,114,122,
3,22,11,0,115,122,3,20,10,0,116,122,3,18,9,0,117,122,3,16,8,0,118,122,3,
14,7,0,119,122,3,10,5,0,120,122,3,8,4,0,121,106,1,0,0,0,121,107,1,0,0,0,
121,108,1,0,0,0,121,112,1,0,0,0,121,113,1,0,0,0,121,114,1,0,0,0,121,115,
1,0,0,0,121,116,1,0,0,0,121,117,1,0,0,0,121,118,1,0,0,0,121,119,1,0,0,0,
121,120,1,0,0,0,122,7,1,0,0,0,123,124,5,2,0,0,124,9,1,0,0,0,125,126,3,30,
15,0,126,127,5,2,0,0,127,11,1,0,0,0,128,132,5,6,0,0,129,131,3,6,3,0,130,
129,1,0,0,0,131,134,1,0,0,0,132,130,1,0,0,0,132,133,1,0,0,0,133,135,1,0,
0,0,134,132,1,0,0,0,135,136,5,7,0,0,136,13,1,0,0,0,137,142,5,8,0,0,138,139,
5,3,0,0,139,140,3,30,15,0,140,141,5,4,0,0,141,143,1,0,0,0,142,138,1,0,0,
0,142,143,1,0,0,0,143,144,1,0,0,0,144,145,5,2,0,0,145,15,1,0,0,0,146,147,
5,9,0,0,147,148,3,30,15,0,148,149,5,2,0,0,149,17,1,0,0,0,150,151,5,10,0,
0,151,152,3,30,15,0,152,153,3,6,3,0,153,19,1,0,0,0,154,155,5,11,0,0,155,
156,5,3,0,0,156,157,3,30,15,0,157,158,5,4,0,0,158,159,3,6,3,0,159,21,1,0,
0,0,160,161,5,12,0,0,161,162,5,3,0,0,162,163,3,30,15,0,163,164,5,4,0,0,164,
167,3,6,3,0,165,166,5,13,0,0,166,168,3,6,3,0,167,165,1,0,0,0,167,168,1,0,
0,0,168,23,1,0,0,0,169,170,5,14,0,0,170,171,3,54,27,0,171,172,5,5,0,0,172,
173,3,6,3,0,173,25,1,0,0,0,174,175,5,15,0,0,175,180,3,56,28,0,176,177,5,
1,0,0,177,179,3,56,28,0,178,176,1,0,0,0,179,182,1,0,0,0,180,178,1,0,0,0,
180,181,1,0,0,0,181,183,1,0,0,0,182,180,1,0,0,0,183,184,5,2,0,0,184,27,1,
0,0,0,185,186,5,16,0,0,186,188,3,56,28,0,187,189,3,54,27,0,188,187,1,0,0,
0,188,189,1,0,0,0,189,197,1,0,0,0,190,191,5,1,0,0,191,193,3,56,28,0,192,
194,3,54,27,0,193,192,1,0,0,0,193,194,1,0,0,0,194,196,1,0,0,0,195,190,1,
0,0,0,196,199,1,0,0,0,197,195,1,0,0,0,197,198,1,0,0,0,198,200,1,0,0,0,199,
197,1,0,0,0,200,201,5,2,0,0,201,29,1,0,0,0,202,207,3,38,19,0,203,207,3,34,
17,0,204,207,3,32,16,0,205,207,3,36,18,0,206,202,1,0,0,0,206,203,1,0,0,0,
206,204,1,0,0,0,206,205,1,0,0,0,207,31,1,0,0,0,208,209,3,38,19,0,209,210,
5,17,0,0,210,211,3,30,15,0,211,212,5,5,0,0,212,213,3,30,15,0,213,33,1,0,
0,0,214,215,3,38,19,0,215,216,3,50,25,0,216,217,3,30,15,0,217,35,1,0,0,0,
218,219,3,56,28,0,219,220,3,44,22,0,220,221,3,30,15,0,221,37,1,0,0,0,222,
223,5,3,0,0,223,224,3,30,15,0,224,225,5,4,0,0,225,241,1,0,0,0,226,241,3,
56,28,0,227,241,3,54,27,0,228,229,3,46,23,0,229,230,3,56,28,0,230,241,1,
0,0,0,231,232,3,56,28,0,232,233,3,46,23,0,233,241,1,0,0,0,234,235,3,48,24,
0,235,236,3,30,15,0,236,241,1,0,0,0,237,238,5,18,0,0,238,241,3,56,28,0,239,
241,3,40,20,0,240,222,1,0,0,0,240,226,1,0,0,0,240,227,1,0,0,0,240,228,1,
0,0,0,240,231,1,0,0,0,240,234,1,0,0,0,240,237,1,0,0,0,240,239,1,0,0,0,241,
39,1,0,0,0,242,243,3,56,28,0,243,245,5,3,0,0,244,246,3,42,21,0,245,244,1,
0,0,0,245,246,1,0,0,0,246,247,1,0,0,0,247,248,5,4,0,0,248,41,1,0,0,0,249,
254,3,30,15,0,250,251,5,1,0,0,251,253,3,30,15,0,252,250,1,0,0,0,253,256,
1,0,0,0,254,252,1,0,0,0,254,255,1,0,0,0,255,43,1,0,0,0,256,254,1,0,0,0,257,
259,5,19,0,0,258,260,3,50,25,0,259,258,1,0,0,0,259,260,1,0,0,0,260,45,1,
0,0,0,261,262,7,0,0,0,262,47,1,0,0,0,263,264,7,1,0,0,264,49,1,0,0,0,265,
266,7,2,0,0,266,51,1,0,0,0,267,276,3,56,28,0,268,269,5,35,0,0,269,276,3,
30,15,0,270,271,3,30,15,0,271,272,5,37,0,0,272,273,3,30,15,0,273,274,5,38,
0,0,274,276,1,0,0,0,275,267,1,0,0,0,275,268,1,0,0,0,275,270,1,0,0,0,276,
53,1,0,0,0,277,278,7,3,0,0,278,55,1,0,0,0,279,280,5,39,0,0,280,57,1,0,0,
0,22,61,68,75,80,92,95,100,104,121,132,142,167,180,188,193,197,206,240,245,
254,259,275];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class bParser extends antlr4.Parser {

    static grammarFileName = "b.g4";
    static literalNames = [ null, "','", "';'", "'('", "')'", "':'", "'{'", 
                            "'}'", "'return'", "'goto'", "'switch'", "'while'", 
                            "'if'", "'else'", "'case'", "'extrn'", "'auto'", 
                            "'?'", "'&'", "'='", "'++'", "'--'", "'-'", 
                            "'!'", "'|'", "'=='", "'!='", "'<'", "'<='", 
                            "'>'", "'>='", "'<<'", "'>>'", "'+'", "'%'", 
                            "'*'", "'/'", "'['", "']'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "NAME", 
                             "INT", "STRING1", "STRING2", "BLOCKCOMMENT", 
                             "WS" ];
    static ruleNames = [ "program", "definition", "ival", "statement", "nullstmt", 
                         "expressionstmt", "blockstmt", "returnstmt", "gotostmt", 
                         "switchstmt", "whilestmt", "ifstmt", "casestmt", 
                         "externsmt", "autosmt", "rvalue", "ternary", "comparison", 
                         "assignment", "expression", "functioninvocation", 
                         "functionparameters", "assign", "incdec", "unary", 
                         "binary", "lvalue", "constant", "name" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = bParser.ruleNames;
        this.literalNames = bParser.literalNames;
        this.symbolicNames = bParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, bParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===39) {
	            this.state = 58;
	            this.definition();
	            this.state = 63;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 64;
	        this.match(bParser.EOF);
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



	definition() {
	    let localctx = new DefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, bParser.RULE_definition);
	    var _la = 0;
	    try {
	        this.state = 100;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 66;
	            this.name();
	            this.state = 68;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	            if(la_===1) {
	                this.state = 67;
	                this.constant();

	            }
	            this.state = 80;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 39)) & ~0x1f) === 0 && ((1 << (_la - 39)) & 15) !== 0)) {
	                this.state = 70;
	                this.ival();
	                this.state = 75;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===1) {
	                    this.state = 71;
	                    this.match(bParser.T__0);
	                    this.state = 72;
	                    this.ival();
	                    this.state = 77;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 82;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 83;
	            this.match(bParser.T__1);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 85;
	            this.name();
	            this.state = 86;
	            this.match(bParser.T__2);
	            this.state = 95;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===39) {
	                this.state = 87;
	                this.name();
	                this.state = 92;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===1) {
	                    this.state = 88;
	                    this.match(bParser.T__0);
	                    this.state = 89;
	                    this.name();
	                    this.state = 94;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 97;
	            this.match(bParser.T__3);
	            this.state = 98;
	            this.statement();
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



	ival() {
	    let localctx = new IvalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, bParser.RULE_ival);
	    try {
	        this.state = 104;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 40:
	        case 41:
	        case 42:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 102;
	            this.constant();
	            break;
	        case 39:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 103;
	            this.name();
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, bParser.RULE_statement);
	    try {
	        this.state = 121;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 106;
	            this.externsmt();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 107;
	            this.autosmt();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 108;
	            this.name();
	            this.state = 109;
	            this.match(bParser.T__4);
	            this.state = 110;
	            this.statement();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 112;
	            this.casestmt();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 113;
	            this.blockstmt();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 114;
	            this.ifstmt();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 115;
	            this.whilestmt();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 116;
	            this.switchstmt();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 117;
	            this.gotostmt();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 118;
	            this.returnstmt();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 119;
	            this.expressionstmt();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 120;
	            this.nullstmt();
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



	nullstmt() {
	    let localctx = new NullstmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, bParser.RULE_nullstmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        this.match(bParser.T__1);
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



	expressionstmt() {
	    let localctx = new ExpressionstmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, bParser.RULE_expressionstmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        this.rvalue();
	        this.state = 126;
	        this.match(bParser.T__1);
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



	blockstmt() {
	    let localctx = new BlockstmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, bParser.RULE_blockstmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        this.match(bParser.T__5);
	        this.state = 132;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 16113484) !== 0) || ((((_la - 39)) & ~0x1f) === 0 && ((1 << (_la - 39)) & 15) !== 0)) {
	            this.state = 129;
	            this.statement();
	            this.state = 134;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 135;
	        this.match(bParser.T__6);
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



	returnstmt() {
	    let localctx = new ReturnstmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, bParser.RULE_returnstmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this.match(bParser.T__7);
	        this.state = 142;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 138;
	            this.match(bParser.T__2);
	            this.state = 139;
	            this.rvalue();
	            this.state = 140;
	            this.match(bParser.T__3);
	        }

	        this.state = 144;
	        this.match(bParser.T__1);
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



	gotostmt() {
	    let localctx = new GotostmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, bParser.RULE_gotostmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        this.match(bParser.T__8);
	        this.state = 147;
	        this.rvalue();
	        this.state = 148;
	        this.match(bParser.T__1);
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



	switchstmt() {
	    let localctx = new SwitchstmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, bParser.RULE_switchstmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 150;
	        this.match(bParser.T__9);
	        this.state = 151;
	        this.rvalue();
	        this.state = 152;
	        this.statement();
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



	whilestmt() {
	    let localctx = new WhilestmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, bParser.RULE_whilestmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this.match(bParser.T__10);
	        this.state = 155;
	        this.match(bParser.T__2);
	        this.state = 156;
	        this.rvalue();
	        this.state = 157;
	        this.match(bParser.T__3);
	        this.state = 158;
	        this.statement();
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



	ifstmt() {
	    let localctx = new IfstmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, bParser.RULE_ifstmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
	        this.match(bParser.T__11);
	        this.state = 161;
	        this.match(bParser.T__2);
	        this.state = 162;
	        this.rvalue();
	        this.state = 163;
	        this.match(bParser.T__3);
	        this.state = 164;
	        this.statement();
	        this.state = 167;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        if(la_===1) {
	            this.state = 165;
	            this.match(bParser.T__12);
	            this.state = 166;
	            this.statement();

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



	casestmt() {
	    let localctx = new CasestmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, bParser.RULE_casestmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 169;
	        this.match(bParser.T__13);
	        this.state = 170;
	        this.constant();
	        this.state = 171;
	        this.match(bParser.T__4);
	        this.state = 172;
	        this.statement();
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



	externsmt() {
	    let localctx = new ExternsmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, bParser.RULE_externsmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 174;
	        this.match(bParser.T__14);
	        this.state = 175;
	        this.name();
	        this.state = 180;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 176;
	            this.match(bParser.T__0);
	            this.state = 177;
	            this.name();
	            this.state = 182;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 183;
	        this.match(bParser.T__1);
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



	autosmt() {
	    let localctx = new AutosmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, bParser.RULE_autosmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 185;
	        this.match(bParser.T__15);
	        this.state = 186;
	        this.name();
	        this.state = 188;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 40)) & ~0x1f) === 0 && ((1 << (_la - 40)) & 7) !== 0)) {
	            this.state = 187;
	            this.constant();
	        }

	        this.state = 197;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 190;
	            this.match(bParser.T__0);
	            this.state = 191;
	            this.name();
	            this.state = 193;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 40)) & ~0x1f) === 0 && ((1 << (_la - 40)) & 7) !== 0)) {
	                this.state = 192;
	                this.constant();
	            }

	            this.state = 199;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 200;
	        this.match(bParser.T__1);
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



	rvalue() {
	    let localctx = new RvalueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, bParser.RULE_rvalue);
	    try {
	        this.state = 206;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 202;
	            this.expression();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 203;
	            this.comparison();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 204;
	            this.ternary();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 205;
	            this.assignment();
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



	ternary() {
	    let localctx = new TernaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, bParser.RULE_ternary);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 208;
	        this.expression();
	        this.state = 209;
	        this.match(bParser.T__16);
	        this.state = 210;
	        this.rvalue();
	        this.state = 211;
	        this.match(bParser.T__4);
	        this.state = 212;
	        this.rvalue();
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



	comparison() {
	    let localctx = new ComparisonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, bParser.RULE_comparison);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 214;
	        this.expression();
	        this.state = 215;
	        this.binary();
	        this.state = 216;
	        this.rvalue();
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



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, bParser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 218;
	        this.name();
	        this.state = 219;
	        this.assign();
	        this.state = 220;
	        this.rvalue();
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
	    this.enterRule(localctx, 38, bParser.RULE_expression);
	    try {
	        this.state = 240;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 222;
	            this.match(bParser.T__2);
	            this.state = 223;
	            this.rvalue();
	            this.state = 224;
	            this.match(bParser.T__3);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 226;
	            this.name();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 227;
	            this.constant();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 228;
	            this.incdec();
	            this.state = 229;
	            this.name();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 231;
	            this.name();
	            this.state = 232;
	            this.incdec();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 234;
	            this.unary();
	            this.state = 235;
	            this.rvalue();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 237;
	            this.match(bParser.T__17);
	            this.state = 238;
	            this.name();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 239;
	            this.functioninvocation();
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



	functioninvocation() {
	    let localctx = new FunctioninvocationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, bParser.RULE_functioninvocation);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 242;
	        this.name();
	        this.state = 243;
	        this.match(bParser.T__2);
	        this.state = 245;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 15990792) !== 0) || ((((_la - 39)) & ~0x1f) === 0 && ((1 << (_la - 39)) & 15) !== 0)) {
	            this.state = 244;
	            this.functionparameters();
	        }

	        this.state = 247;
	        this.match(bParser.T__3);
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



	functionparameters() {
	    let localctx = new FunctionparametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, bParser.RULE_functionparameters);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 249;
	        this.rvalue();
	        this.state = 254;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 250;
	            this.match(bParser.T__0);
	            this.state = 251;
	            this.rvalue();
	            this.state = 256;
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



	assign() {
	    let localctx = new AssignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, bParser.RULE_assign);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 257;
	        this.match(bParser.T__18);
	        this.state = 259;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        if(la_===1) {
	            this.state = 258;
	            this.binary();

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



	incdec() {
	    let localctx = new IncdecContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, bParser.RULE_incdec);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 261;
	        _la = this._input.LA(1);
	        if(!(_la===20 || _la===21)) {
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



	unary() {
	    let localctx = new UnaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, bParser.RULE_unary);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 263;
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



	binary() {
	    let localctx = new BinaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, bParser.RULE_binary);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 265;
	        _la = this._input.LA(1);
	        if(!(((((_la - 18)) & ~0x1f) === 0 && ((1 << (_la - 18)) & 524241) !== 0))) {
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



	lvalue() {
	    let localctx = new LvalueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, bParser.RULE_lvalue);
	    try {
	        this.state = 275;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 267;
	            this.name();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 268;
	            this.match(bParser.T__34);
	            this.state = 269;
	            this.rvalue();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 270;
	            this.rvalue();
	            this.state = 271;
	            this.match(bParser.T__36);
	            this.state = 272;
	            this.rvalue();
	            this.state = 273;
	            this.match(bParser.T__37);
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



	constant() {
	    let localctx = new ConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, bParser.RULE_constant);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 277;
	        _la = this._input.LA(1);
	        if(!(((((_la - 40)) & ~0x1f) === 0 && ((1 << (_la - 40)) & 7) !== 0))) {
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



	name() {
	    let localctx = new NameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, bParser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 279;
	        this.match(bParser.NAME);
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

bParser.EOF = antlr4.Token.EOF;
bParser.T__0 = 1;
bParser.T__1 = 2;
bParser.T__2 = 3;
bParser.T__3 = 4;
bParser.T__4 = 5;
bParser.T__5 = 6;
bParser.T__6 = 7;
bParser.T__7 = 8;
bParser.T__8 = 9;
bParser.T__9 = 10;
bParser.T__10 = 11;
bParser.T__11 = 12;
bParser.T__12 = 13;
bParser.T__13 = 14;
bParser.T__14 = 15;
bParser.T__15 = 16;
bParser.T__16 = 17;
bParser.T__17 = 18;
bParser.T__18 = 19;
bParser.T__19 = 20;
bParser.T__20 = 21;
bParser.T__21 = 22;
bParser.T__22 = 23;
bParser.T__23 = 24;
bParser.T__24 = 25;
bParser.T__25 = 26;
bParser.T__26 = 27;
bParser.T__27 = 28;
bParser.T__28 = 29;
bParser.T__29 = 30;
bParser.T__30 = 31;
bParser.T__31 = 32;
bParser.T__32 = 33;
bParser.T__33 = 34;
bParser.T__34 = 35;
bParser.T__35 = 36;
bParser.T__36 = 37;
bParser.T__37 = 38;
bParser.NAME = 39;
bParser.INT = 40;
bParser.STRING1 = 41;
bParser.STRING2 = 42;
bParser.BLOCKCOMMENT = 43;
bParser.WS = 44;

bParser.RULE_program = 0;
bParser.RULE_definition = 1;
bParser.RULE_ival = 2;
bParser.RULE_statement = 3;
bParser.RULE_nullstmt = 4;
bParser.RULE_expressionstmt = 5;
bParser.RULE_blockstmt = 6;
bParser.RULE_returnstmt = 7;
bParser.RULE_gotostmt = 8;
bParser.RULE_switchstmt = 9;
bParser.RULE_whilestmt = 10;
bParser.RULE_ifstmt = 11;
bParser.RULE_casestmt = 12;
bParser.RULE_externsmt = 13;
bParser.RULE_autosmt = 14;
bParser.RULE_rvalue = 15;
bParser.RULE_ternary = 16;
bParser.RULE_comparison = 17;
bParser.RULE_assignment = 18;
bParser.RULE_expression = 19;
bParser.RULE_functioninvocation = 20;
bParser.RULE_functionparameters = 21;
bParser.RULE_assign = 22;
bParser.RULE_incdec = 23;
bParser.RULE_unary = 24;
bParser.RULE_binary = 25;
bParser.RULE_lvalue = 26;
bParser.RULE_constant = 27;
bParser.RULE_name = 28;

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
        this.ruleIndex = bParser.RULE_program;
    }

	EOF() {
	    return this.getToken(bParser.EOF, 0);
	};

	definition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DefinitionContext);
	    } else {
	        return this.getTypedRuleContext(DefinitionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.exitProgram(this);
		}
	}


}



class DefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bParser.RULE_definition;
    }

	name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NameContext);
	    } else {
	        return this.getTypedRuleContext(NameContext,i);
	    }
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	ival = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IvalContext);
	    } else {
	        return this.getTypedRuleContext(IvalContext,i);
	    }
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.enterDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.exitDefinition(this);
		}
	}


}



class IvalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bParser.RULE_ival;
    }

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.enterIval(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.exitIval(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bParser.RULE_statement;
    }

	externsmt() {
	    return this.getTypedRuleContext(ExternsmtContext,0);
	};

	autosmt() {
	    return this.getTypedRuleContext(AutosmtContext,0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	casestmt() {
	    return this.getTypedRuleContext(CasestmtContext,0);
	};

	blockstmt() {
	    return this.getTypedRuleContext(BlockstmtContext,0);
	};

	ifstmt() {
	    return this.getTypedRuleContext(IfstmtContext,0);
	};

	whilestmt() {
	    return this.getTypedRuleContext(WhilestmtContext,0);
	};

	switchstmt() {
	    return this.getTypedRuleContext(SwitchstmtContext,0);
	};

	gotostmt() {
	    return this.getTypedRuleContext(GotostmtContext,0);
	};

	returnstmt() {
	    return this.getTypedRuleContext(ReturnstmtContext,0);
	};

	expressionstmt() {
	    return this.getTypedRuleContext(ExpressionstmtContext,0);
	};

	nullstmt() {
	    return this.getTypedRuleContext(NullstmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.exitStatement(this);
		}
	}


}



class NullstmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bParser.RULE_nullstmt;
    }


	enterRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.enterNullstmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.exitNullstmt(this);
		}
	}


}



class ExpressionstmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bParser.RULE_expressionstmt;
    }

	rvalue() {
	    return this.getTypedRuleContext(RvalueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.enterExpressionstmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.exitExpressionstmt(this);
		}
	}


}



class BlockstmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bParser.RULE_blockstmt;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.enterBlockstmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.exitBlockstmt(this);
		}
	}


}



class ReturnstmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bParser.RULE_returnstmt;
    }

	rvalue() {
	    return this.getTypedRuleContext(RvalueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.enterReturnstmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.exitReturnstmt(this);
		}
	}


}



class GotostmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bParser.RULE_gotostmt;
    }

	rvalue() {
	    return this.getTypedRuleContext(RvalueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.enterGotostmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.exitGotostmt(this);
		}
	}


}



class SwitchstmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bParser.RULE_switchstmt;
    }

	rvalue() {
	    return this.getTypedRuleContext(RvalueContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.enterSwitchstmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.exitSwitchstmt(this);
		}
	}


}



class WhilestmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bParser.RULE_whilestmt;
    }

	rvalue() {
	    return this.getTypedRuleContext(RvalueContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.enterWhilestmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.exitWhilestmt(this);
		}
	}


}



class IfstmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bParser.RULE_ifstmt;
    }

	rvalue() {
	    return this.getTypedRuleContext(RvalueContext,0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.enterIfstmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.exitIfstmt(this);
		}
	}


}



class CasestmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bParser.RULE_casestmt;
    }

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.enterCasestmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.exitCasestmt(this);
		}
	}


}



class ExternsmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bParser.RULE_externsmt;
    }

	name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NameContext);
	    } else {
	        return this.getTypedRuleContext(NameContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.enterExternsmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.exitExternsmt(this);
		}
	}


}



class AutosmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bParser.RULE_autosmt;
    }

	name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NameContext);
	    } else {
	        return this.getTypedRuleContext(NameContext,i);
	    }
	};

	constant = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConstantContext);
	    } else {
	        return this.getTypedRuleContext(ConstantContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.enterAutosmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.exitAutosmt(this);
		}
	}


}



class RvalueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bParser.RULE_rvalue;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	comparison() {
	    return this.getTypedRuleContext(ComparisonContext,0);
	};

	ternary() {
	    return this.getTypedRuleContext(TernaryContext,0);
	};

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.enterRvalue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.exitRvalue(this);
		}
	}


}



class TernaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bParser.RULE_ternary;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	rvalue = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RvalueContext);
	    } else {
	        return this.getTypedRuleContext(RvalueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.enterTernary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.exitTernary(this);
		}
	}


}



class ComparisonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bParser.RULE_comparison;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	binary() {
	    return this.getTypedRuleContext(BinaryContext,0);
	};

	rvalue() {
	    return this.getTypedRuleContext(RvalueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.enterComparison(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.exitComparison(this);
		}
	}


}



class AssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bParser.RULE_assignment;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
	};

	rvalue() {
	    return this.getTypedRuleContext(RvalueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.exitAssignment(this);
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
        this.ruleIndex = bParser.RULE_expression;
    }

	rvalue() {
	    return this.getTypedRuleContext(RvalueContext,0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	incdec() {
	    return this.getTypedRuleContext(IncdecContext,0);
	};

	unary() {
	    return this.getTypedRuleContext(UnaryContext,0);
	};

	functioninvocation() {
	    return this.getTypedRuleContext(FunctioninvocationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.exitExpression(this);
		}
	}


}



class FunctioninvocationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bParser.RULE_functioninvocation;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	functionparameters() {
	    return this.getTypedRuleContext(FunctionparametersContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.enterFunctioninvocation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.exitFunctioninvocation(this);
		}
	}


}



class FunctionparametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bParser.RULE_functionparameters;
    }

	rvalue = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RvalueContext);
	    } else {
	        return this.getTypedRuleContext(RvalueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.enterFunctionparameters(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.exitFunctionparameters(this);
		}
	}


}



class AssignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bParser.RULE_assign;
    }

	binary() {
	    return this.getTypedRuleContext(BinaryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.enterAssign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.exitAssign(this);
		}
	}


}



class IncdecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bParser.RULE_incdec;
    }


	enterRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.enterIncdec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.exitIncdec(this);
		}
	}


}



class UnaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bParser.RULE_unary;
    }


	enterRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.enterUnary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.exitUnary(this);
		}
	}


}



class BinaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bParser.RULE_binary;
    }


	enterRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.enterBinary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.exitBinary(this);
		}
	}


}



class LvalueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bParser.RULE_lvalue;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	rvalue = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RvalueContext);
	    } else {
	        return this.getTypedRuleContext(RvalueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.enterLvalue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.exitLvalue(this);
		}
	}


}



class ConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bParser.RULE_constant;
    }

	INT() {
	    return this.getToken(bParser.INT, 0);
	};

	STRING1() {
	    return this.getToken(bParser.STRING1, 0);
	};

	STRING2() {
	    return this.getToken(bParser.STRING2, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.enterConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.exitConstant(this);
		}
	}


}



class NameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bParser.RULE_name;
    }

	NAME() {
	    return this.getToken(bParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bListener ) {
	        listener.exitName(this);
		}
	}


}




bParser.ProgramContext = ProgramContext; 
bParser.DefinitionContext = DefinitionContext; 
bParser.IvalContext = IvalContext; 
bParser.StatementContext = StatementContext; 
bParser.NullstmtContext = NullstmtContext; 
bParser.ExpressionstmtContext = ExpressionstmtContext; 
bParser.BlockstmtContext = BlockstmtContext; 
bParser.ReturnstmtContext = ReturnstmtContext; 
bParser.GotostmtContext = GotostmtContext; 
bParser.SwitchstmtContext = SwitchstmtContext; 
bParser.WhilestmtContext = WhilestmtContext; 
bParser.IfstmtContext = IfstmtContext; 
bParser.CasestmtContext = CasestmtContext; 
bParser.ExternsmtContext = ExternsmtContext; 
bParser.AutosmtContext = AutosmtContext; 
bParser.RvalueContext = RvalueContext; 
bParser.TernaryContext = TernaryContext; 
bParser.ComparisonContext = ComparisonContext; 
bParser.AssignmentContext = AssignmentContext; 
bParser.ExpressionContext = ExpressionContext; 
bParser.FunctioninvocationContext = FunctioninvocationContext; 
bParser.FunctionparametersContext = FunctionparametersContext; 
bParser.AssignContext = AssignContext; 
bParser.IncdecContext = IncdecContext; 
bParser.UnaryContext = UnaryContext; 
bParser.BinaryContext = BinaryContext; 
bParser.LvalueContext = LvalueContext; 
bParser.ConstantContext = ConstantContext; 
bParser.NameContext = NameContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
