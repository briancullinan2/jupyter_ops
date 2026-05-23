// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/racket-bsl/BSL.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import BSLListener from './BSLListener.js';
const serializedATN = [4,1,30,246,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,4,0,18,8,0,11,0,12,0,19,1,0,1,0,1,1,1,1,1,
1,1,1,3,1,28,8,1,1,2,1,2,1,2,1,2,1,2,4,2,35,8,2,11,2,12,2,36,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,4,2,56,8,2,11,2,
12,2,57,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,70,8,2,10,2,12,2,73,
9,2,1,2,1,2,1,2,3,2,78,8,2,1,3,1,3,1,3,4,3,83,8,3,11,3,12,3,84,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,1,3,1,3,4,3,96,8,3,11,3,12,3,97,1,3,1,3,1,3,1,3,1,3,1,
3,1,3,1,3,1,3,5,3,109,8,3,10,3,12,3,112,9,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,4,3,131,8,3,11,3,12,3,132,1,3,1,
3,1,3,1,3,1,3,1,3,4,3,141,8,3,11,3,12,3,142,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
1,3,3,3,153,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,4,4,178,8,4,11,4,12,4,179,1,4,1,4,1,
4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,194,8,4,1,4,1,4,3,4,198,8,4,1,
5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,4,5,216,8,
5,11,5,12,5,217,1,5,3,5,221,8,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
1,5,1,5,3,5,235,8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,0,0,8,0,2,4,
6,8,10,12,14,0,1,1,0,21,22,275,0,17,1,0,0,0,2,27,1,0,0,0,4,77,1,0,0,0,6,
152,1,0,0,0,8,197,1,0,0,0,10,234,1,0,0,0,12,236,1,0,0,0,14,243,1,0,0,0,16,
18,3,2,1,0,17,16,1,0,0,0,18,19,1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,21,
1,0,0,0,21,22,5,0,0,1,22,1,1,0,0,0,23,28,3,4,2,0,24,28,3,6,3,0,25,28,3,8,
4,0,26,28,3,10,5,0,27,23,1,0,0,0,27,24,1,0,0,0,27,25,1,0,0,0,27,26,1,0,0,
0,28,3,1,0,0,0,29,30,5,1,0,0,30,31,5,2,0,0,31,32,5,1,0,0,32,34,3,14,7,0,
33,35,5,22,0,0,34,33,1,0,0,0,35,36,1,0,0,0,36,34,1,0,0,0,36,37,1,0,0,0,37,
38,1,0,0,0,38,39,5,3,0,0,39,40,3,6,3,0,40,41,5,3,0,0,41,78,1,0,0,0,42,43,
5,1,0,0,43,44,5,2,0,0,44,45,3,14,7,0,45,46,3,6,3,0,46,47,5,3,0,0,47,78,1,
0,0,0,48,49,5,1,0,0,49,50,5,2,0,0,50,51,3,14,7,0,51,52,5,1,0,0,52,53,5,4,
0,0,53,55,5,1,0,0,54,56,5,22,0,0,55,54,1,0,0,0,56,57,1,0,0,0,57,55,1,0,0,
0,57,58,1,0,0,0,58,59,1,0,0,0,59,60,5,3,0,0,60,61,3,6,3,0,61,62,5,3,0,0,
62,63,5,3,0,0,63,78,1,0,0,0,64,65,5,1,0,0,65,66,5,5,0,0,66,67,3,14,7,0,67,
71,5,1,0,0,68,70,3,14,7,0,69,68,1,0,0,0,70,73,1,0,0,0,71,69,1,0,0,0,71,72,
1,0,0,0,72,74,1,0,0,0,73,71,1,0,0,0,74,75,5,3,0,0,75,76,5,3,0,0,76,78,1,
0,0,0,77,29,1,0,0,0,77,42,1,0,0,0,77,48,1,0,0,0,77,64,1,0,0,0,78,5,1,0,0,
0,79,80,5,1,0,0,80,82,3,14,7,0,81,83,3,6,3,0,82,81,1,0,0,0,83,84,1,0,0,0,
84,82,1,0,0,0,84,85,1,0,0,0,85,86,1,0,0,0,86,87,5,3,0,0,87,153,1,0,0,0,88,
89,5,1,0,0,89,95,5,6,0,0,90,91,5,7,0,0,91,92,3,6,3,0,92,93,3,6,3,0,93,94,
5,8,0,0,94,96,1,0,0,0,95,90,1,0,0,0,96,97,1,0,0,0,97,95,1,0,0,0,97,98,1,
0,0,0,98,99,1,0,0,0,99,100,5,3,0,0,100,153,1,0,0,0,101,102,5,1,0,0,102,110,
5,6,0,0,103,104,5,7,0,0,104,105,3,6,3,0,105,106,3,6,3,0,106,107,5,8,0,0,
107,109,1,0,0,0,108,103,1,0,0,0,109,112,1,0,0,0,110,108,1,0,0,0,110,111,
1,0,0,0,111,113,1,0,0,0,112,110,1,0,0,0,113,114,5,7,0,0,114,115,5,9,0,0,
115,116,3,6,3,0,116,117,5,8,0,0,117,118,5,3,0,0,118,153,1,0,0,0,119,120,
5,1,0,0,120,121,5,10,0,0,121,122,3,6,3,0,122,123,3,6,3,0,123,124,3,6,3,0,
124,125,5,3,0,0,125,153,1,0,0,0,126,127,5,1,0,0,127,128,5,11,0,0,128,130,
3,6,3,0,129,131,3,6,3,0,130,129,1,0,0,0,131,132,1,0,0,0,132,130,1,0,0,0,
132,133,1,0,0,0,133,134,1,0,0,0,134,135,5,3,0,0,135,153,1,0,0,0,136,137,
5,1,0,0,137,138,5,12,0,0,138,140,3,6,3,0,139,141,3,6,3,0,140,139,1,0,0,0,
141,142,1,0,0,0,142,140,1,0,0,0,142,143,1,0,0,0,143,144,1,0,0,0,144,145,
5,3,0,0,145,153,1,0,0,0,146,153,5,13,0,0,147,153,3,14,7,0,148,153,5,23,0,
0,149,153,5,25,0,0,150,153,5,26,0,0,151,153,5,27,0,0,152,79,1,0,0,0,152,
88,1,0,0,0,152,101,1,0,0,0,152,119,1,0,0,0,152,126,1,0,0,0,152,136,1,0,0,
0,152,146,1,0,0,0,152,147,1,0,0,0,152,148,1,0,0,0,152,149,1,0,0,0,152,150,
1,0,0,0,152,151,1,0,0,0,153,7,1,0,0,0,154,155,5,1,0,0,155,156,5,14,0,0,156,
157,3,6,3,0,157,158,3,6,3,0,158,159,5,3,0,0,159,198,1,0,0,0,160,161,5,1,
0,0,161,162,5,15,0,0,162,163,3,6,3,0,163,164,3,6,3,0,164,165,5,3,0,0,165,
198,1,0,0,0,166,167,5,1,0,0,167,168,5,16,0,0,168,169,3,6,3,0,169,170,3,6,
3,0,170,171,3,6,3,0,171,172,5,3,0,0,172,198,1,0,0,0,173,174,5,1,0,0,174,
175,5,17,0,0,175,177,3,6,3,0,176,178,3,6,3,0,177,176,1,0,0,0,178,179,1,0,
0,0,179,177,1,0,0,0,179,180,1,0,0,0,180,181,1,0,0,0,181,182,5,3,0,0,182,
198,1,0,0,0,183,184,5,1,0,0,184,185,5,18,0,0,185,186,3,6,3,0,186,187,3,14,
7,0,187,188,5,3,0,0,188,198,1,0,0,0,189,190,5,1,0,0,190,191,5,19,0,0,191,
193,3,6,3,0,192,194,3,6,3,0,193,192,1,0,0,0,193,194,1,0,0,0,194,195,1,0,
0,0,195,196,5,3,0,0,196,198,1,0,0,0,197,154,1,0,0,0,197,160,1,0,0,0,197,
166,1,0,0,0,197,173,1,0,0,0,197,183,1,0,0,0,197,189,1,0,0,0,198,9,1,0,0,
0,199,200,5,1,0,0,200,201,5,20,0,0,201,202,5,26,0,0,202,235,5,3,0,0,203,
204,5,1,0,0,204,205,5,20,0,0,205,206,3,14,7,0,206,207,5,3,0,0,207,235,1,
0,0,0,208,209,5,1,0,0,209,210,5,20,0,0,210,211,5,1,0,0,211,212,3,14,7,0,
212,220,5,26,0,0,213,215,5,1,0,0,214,216,5,26,0,0,215,214,1,0,0,0,216,217,
1,0,0,0,217,215,1,0,0,0,217,218,1,0,0,0,218,219,1,0,0,0,219,221,5,3,0,0,
220,213,1,0,0,0,220,221,1,0,0,0,221,222,1,0,0,0,222,223,5,3,0,0,223,224,
5,3,0,0,224,235,1,0,0,0,225,226,5,1,0,0,226,227,5,20,0,0,227,228,5,1,0,0,
228,229,3,14,7,0,229,230,5,26,0,0,230,231,3,12,6,0,231,232,5,3,0,0,232,233,
5,3,0,0,233,235,1,0,0,0,234,199,1,0,0,0,234,203,1,0,0,0,234,208,1,0,0,0,
234,225,1,0,0,0,235,11,1,0,0,0,236,237,5,1,0,0,237,238,5,26,0,0,238,239,
5,26,0,0,239,240,5,23,0,0,240,241,5,23,0,0,241,242,5,3,0,0,242,13,1,0,0,
0,243,244,7,0,0,0,244,15,1,0,0,0,18,19,27,36,57,71,77,84,97,110,132,142,
152,179,193,197,217,220,234];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class BSLParser extends antlr4.Parser {

    static grammarFileName = "BSL.g4";
    static literalNames = [ null, "'('", "'define'", "')'", "'lambda'", 
                            "'define-struct'", "'cond'", "'['", "']'", "'else '", 
                            "'if'", "'and'", "'or'", "'\\u2019()'", "'check-expect'", 
                            "'check-random'", "'check-within'", "'check-member-of'", 
                            "'check-satisfied'", "'check-error'", "'require'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "SYMBOL", "NAME", 
                             "NUMBER", "INT", "BOOLEAN", "STRING", "CHARACTER", 
                             "LANG", "COMMENT", "WS" ];
    static ruleNames = [ "program", "defOrExpr", "definition", "expr", "testCase", 
                         "libraryRequire", "pkg", "name" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = BSLParser.ruleNames;
        this.literalNames = BSLParser.literalNames;
        this.symbolicNames = BSLParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, BSLParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 16;
	            this.defOrExpr();
	            this.state = 19; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 249569282) !== 0));
	        this.state = 21;
	        this.match(BSLParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	defOrExpr() {
	    let localctx = new DefOrExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, BSLParser.RULE_defOrExpr);
	    try {
	        this.state = 27;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 23;
	            this.definition();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 24;
	            this.expr();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 25;
	            this.testCase();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 26;
	            this.libraryRequire();
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



	definition() {
	    let localctx = new DefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, BSLParser.RULE_definition);
	    var _la = 0;
	    try {
	        this.state = 77;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 29;
	            this.match(BSLParser.T__0);
	            this.state = 30;
	            this.match(BSLParser.T__1);
	            this.state = 31;
	            this.match(BSLParser.T__0);
	            this.state = 32;
	            this.name();
	            this.state = 34; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 33;
	                this.match(BSLParser.NAME);
	                this.state = 36; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===22);
	            this.state = 38;
	            this.match(BSLParser.T__2);
	            this.state = 39;
	            this.expr();
	            this.state = 40;
	            this.match(BSLParser.T__2);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 42;
	            this.match(BSLParser.T__0);
	            this.state = 43;
	            this.match(BSLParser.T__1);
	            this.state = 44;
	            this.name();
	            this.state = 45;
	            this.expr();
	            this.state = 46;
	            this.match(BSLParser.T__2);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 48;
	            this.match(BSLParser.T__0);
	            this.state = 49;
	            this.match(BSLParser.T__1);
	            this.state = 50;
	            this.name();
	            this.state = 51;
	            this.match(BSLParser.T__0);
	            this.state = 52;
	            this.match(BSLParser.T__3);
	            this.state = 53;
	            this.match(BSLParser.T__0);
	            this.state = 55; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 54;
	                this.match(BSLParser.NAME);
	                this.state = 57; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===22);
	            this.state = 59;
	            this.match(BSLParser.T__2);
	            this.state = 60;
	            this.expr();
	            this.state = 61;
	            this.match(BSLParser.T__2);
	            this.state = 62;
	            this.match(BSLParser.T__2);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 64;
	            this.match(BSLParser.T__0);
	            this.state = 65;
	            this.match(BSLParser.T__4);
	            this.state = 66;
	            this.name();
	            this.state = 67;
	            this.match(BSLParser.T__0);
	            this.state = 71;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===21 || _la===22) {
	                this.state = 68;
	                this.name();
	                this.state = 73;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 74;
	            this.match(BSLParser.T__2);
	            this.state = 75;
	            this.match(BSLParser.T__2);
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



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, BSLParser.RULE_expr);
	    var _la = 0;
	    try {
	        this.state = 152;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 79;
	            this.match(BSLParser.T__0);
	            this.state = 80;
	            this.name();
	            this.state = 82; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 81;
	                this.expr();
	                this.state = 84; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 249569282) !== 0));
	            this.state = 86;
	            this.match(BSLParser.T__2);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 88;
	            this.match(BSLParser.T__0);
	            this.state = 89;
	            this.match(BSLParser.T__5);
	            this.state = 95; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 90;
	                this.match(BSLParser.T__6);
	                this.state = 91;
	                this.expr();
	                this.state = 92;
	                this.expr();
	                this.state = 93;
	                this.match(BSLParser.T__7);
	                this.state = 97; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===7);
	            this.state = 99;
	            this.match(BSLParser.T__2);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 101;
	            this.match(BSLParser.T__0);
	            this.state = 102;
	            this.match(BSLParser.T__5);
	            this.state = 110;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 103;
	                    this.match(BSLParser.T__6);
	                    this.state = 104;
	                    this.expr();
	                    this.state = 105;
	                    this.expr();
	                    this.state = 106;
	                    this.match(BSLParser.T__7); 
	                }
	                this.state = 112;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	            }

	            this.state = 113;
	            this.match(BSLParser.T__6);
	            this.state = 114;
	            this.match(BSLParser.T__8);
	            this.state = 115;
	            this.expr();
	            this.state = 116;
	            this.match(BSLParser.T__7);
	            this.state = 117;
	            this.match(BSLParser.T__2);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 119;
	            this.match(BSLParser.T__0);
	            this.state = 120;
	            this.match(BSLParser.T__9);
	            this.state = 121;
	            this.expr();
	            this.state = 122;
	            this.expr();
	            this.state = 123;
	            this.expr();
	            this.state = 124;
	            this.match(BSLParser.T__2);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 126;
	            this.match(BSLParser.T__0);
	            this.state = 127;
	            this.match(BSLParser.T__10);
	            this.state = 128;
	            this.expr();
	            this.state = 130; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 129;
	                this.expr();
	                this.state = 132; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 249569282) !== 0));
	            this.state = 134;
	            this.match(BSLParser.T__2);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 136;
	            this.match(BSLParser.T__0);
	            this.state = 137;
	            this.match(BSLParser.T__11);
	            this.state = 138;
	            this.expr();
	            this.state = 140; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 139;
	                this.expr();
	                this.state = 142; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 249569282) !== 0));
	            this.state = 144;
	            this.match(BSLParser.T__2);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 146;
	            this.match(BSLParser.T__12);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 147;
	            this.name();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 148;
	            this.match(BSLParser.NUMBER);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 149;
	            this.match(BSLParser.BOOLEAN);
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 150;
	            this.match(BSLParser.STRING);
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 151;
	            this.match(BSLParser.CHARACTER);
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



	testCase() {
	    let localctx = new TestCaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, BSLParser.RULE_testCase);
	    var _la = 0;
	    try {
	        this.state = 197;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 154;
	            this.match(BSLParser.T__0);
	            this.state = 155;
	            this.match(BSLParser.T__13);
	            this.state = 156;
	            this.expr();
	            this.state = 157;
	            this.expr();
	            this.state = 158;
	            this.match(BSLParser.T__2);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 160;
	            this.match(BSLParser.T__0);
	            this.state = 161;
	            this.match(BSLParser.T__14);
	            this.state = 162;
	            this.expr();
	            this.state = 163;
	            this.expr();
	            this.state = 164;
	            this.match(BSLParser.T__2);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 166;
	            this.match(BSLParser.T__0);
	            this.state = 167;
	            this.match(BSLParser.T__15);
	            this.state = 168;
	            this.expr();
	            this.state = 169;
	            this.expr();
	            this.state = 170;
	            this.expr();
	            this.state = 171;
	            this.match(BSLParser.T__2);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 173;
	            this.match(BSLParser.T__0);
	            this.state = 174;
	            this.match(BSLParser.T__16);
	            this.state = 175;
	            this.expr();
	            this.state = 177; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 176;
	                this.expr();
	                this.state = 179; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 249569282) !== 0));
	            this.state = 181;
	            this.match(BSLParser.T__2);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 183;
	            this.match(BSLParser.T__0);
	            this.state = 184;
	            this.match(BSLParser.T__17);
	            this.state = 185;
	            this.expr();
	            this.state = 186;
	            this.name();
	            this.state = 187;
	            this.match(BSLParser.T__2);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 189;
	            this.match(BSLParser.T__0);
	            this.state = 190;
	            this.match(BSLParser.T__18);
	            this.state = 191;
	            this.expr();
	            this.state = 193;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 249569282) !== 0)) {
	                this.state = 192;
	                this.expr();
	            }

	            this.state = 195;
	            this.match(BSLParser.T__2);
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



	libraryRequire() {
	    let localctx = new LibraryRequireContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, BSLParser.RULE_libraryRequire);
	    var _la = 0;
	    try {
	        this.state = 234;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 199;
	            this.match(BSLParser.T__0);
	            this.state = 200;
	            this.match(BSLParser.T__19);
	            this.state = 201;
	            this.match(BSLParser.STRING);
	            this.state = 202;
	            this.match(BSLParser.T__2);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 203;
	            this.match(BSLParser.T__0);
	            this.state = 204;
	            this.match(BSLParser.T__19);
	            this.state = 205;
	            this.name();
	            this.state = 206;
	            this.match(BSLParser.T__2);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 208;
	            this.match(BSLParser.T__0);
	            this.state = 209;
	            this.match(BSLParser.T__19);
	            this.state = 210;
	            this.match(BSLParser.T__0);
	            this.state = 211;
	            this.name();
	            this.state = 212;
	            this.match(BSLParser.STRING);
	            this.state = 220;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===1) {
	                this.state = 213;
	                this.match(BSLParser.T__0);
	                this.state = 215; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                do {
	                    this.state = 214;
	                    this.match(BSLParser.STRING);
	                    this.state = 217; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                } while(_la===26);
	                this.state = 219;
	                this.match(BSLParser.T__2);
	            }

	            this.state = 222;
	            this.match(BSLParser.T__2);
	            this.state = 223;
	            this.match(BSLParser.T__2);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 225;
	            this.match(BSLParser.T__0);
	            this.state = 226;
	            this.match(BSLParser.T__19);
	            this.state = 227;
	            this.match(BSLParser.T__0);
	            this.state = 228;
	            this.name();
	            this.state = 229;
	            this.match(BSLParser.STRING);
	            this.state = 230;
	            this.pkg();
	            this.state = 231;
	            this.match(BSLParser.T__2);
	            this.state = 232;
	            this.match(BSLParser.T__2);
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



	pkg() {
	    let localctx = new PkgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, BSLParser.RULE_pkg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 236;
	        this.match(BSLParser.T__0);
	        this.state = 237;
	        this.match(BSLParser.STRING);
	        this.state = 238;
	        this.match(BSLParser.STRING);
	        this.state = 239;
	        this.match(BSLParser.NUMBER);
	        this.state = 240;
	        this.match(BSLParser.NUMBER);
	        this.state = 241;
	        this.match(BSLParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 14, BSLParser.RULE_name);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 243;
	        _la = this._input.LA(1);
	        if(!(_la===21 || _la===22)) {
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

BSLParser.EOF = antlr4.Token.EOF;
BSLParser.T__0 = 1;
BSLParser.T__1 = 2;
BSLParser.T__2 = 3;
BSLParser.T__3 = 4;
BSLParser.T__4 = 5;
BSLParser.T__5 = 6;
BSLParser.T__6 = 7;
BSLParser.T__7 = 8;
BSLParser.T__8 = 9;
BSLParser.T__9 = 10;
BSLParser.T__10 = 11;
BSLParser.T__11 = 12;
BSLParser.T__12 = 13;
BSLParser.T__13 = 14;
BSLParser.T__14 = 15;
BSLParser.T__15 = 16;
BSLParser.T__16 = 17;
BSLParser.T__17 = 18;
BSLParser.T__18 = 19;
BSLParser.T__19 = 20;
BSLParser.SYMBOL = 21;
BSLParser.NAME = 22;
BSLParser.NUMBER = 23;
BSLParser.INT = 24;
BSLParser.BOOLEAN = 25;
BSLParser.STRING = 26;
BSLParser.CHARACTER = 27;
BSLParser.LANG = 28;
BSLParser.COMMENT = 29;
BSLParser.WS = 30;

BSLParser.RULE_program = 0;
BSLParser.RULE_defOrExpr = 1;
BSLParser.RULE_definition = 2;
BSLParser.RULE_expr = 3;
BSLParser.RULE_testCase = 4;
BSLParser.RULE_libraryRequire = 5;
BSLParser.RULE_pkg = 6;
BSLParser.RULE_name = 7;

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
        this.ruleIndex = BSLParser.RULE_program;
    }

	EOF() {
	    return this.getToken(BSLParser.EOF, 0);
	};

	defOrExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DefOrExprContext);
	    } else {
	        return this.getTypedRuleContext(DefOrExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BSLListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BSLListener ) {
	        listener.exitProgram(this);
		}
	}


}



class DefOrExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BSLParser.RULE_defOrExpr;
    }

	definition() {
	    return this.getTypedRuleContext(DefinitionContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	testCase() {
	    return this.getTypedRuleContext(TestCaseContext,0);
	};

	libraryRequire() {
	    return this.getTypedRuleContext(LibraryRequireContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BSLListener ) {
	        listener.enterDefOrExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BSLListener ) {
	        listener.exitDefOrExpr(this);
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
        this.ruleIndex = BSLParser.RULE_definition;
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

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BSLParser.NAME);
	    } else {
	        return this.getToken(BSLParser.NAME, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof BSLListener ) {
	        listener.enterDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BSLListener ) {
	        listener.exitDefinition(this);
		}
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BSLParser.RULE_expr;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	NUMBER() {
	    return this.getToken(BSLParser.NUMBER, 0);
	};

	BOOLEAN() {
	    return this.getToken(BSLParser.BOOLEAN, 0);
	};

	STRING() {
	    return this.getToken(BSLParser.STRING, 0);
	};

	CHARACTER() {
	    return this.getToken(BSLParser.CHARACTER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BSLListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BSLListener ) {
	        listener.exitExpr(this);
		}
	}


}



class TestCaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BSLParser.RULE_testCase;
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BSLListener ) {
	        listener.enterTestCase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BSLListener ) {
	        listener.exitTestCase(this);
		}
	}


}



class LibraryRequireContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BSLParser.RULE_libraryRequire;
    }

	STRING = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BSLParser.STRING);
	    } else {
	        return this.getToken(BSLParser.STRING, i);
	    }
	};


	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	pkg() {
	    return this.getTypedRuleContext(PkgContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BSLListener ) {
	        listener.enterLibraryRequire(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BSLListener ) {
	        listener.exitLibraryRequire(this);
		}
	}


}



class PkgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BSLParser.RULE_pkg;
    }

	STRING = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BSLParser.STRING);
	    } else {
	        return this.getToken(BSLParser.STRING, i);
	    }
	};


	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BSLParser.NUMBER);
	    } else {
	        return this.getToken(BSLParser.NUMBER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof BSLListener ) {
	        listener.enterPkg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BSLListener ) {
	        listener.exitPkg(this);
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
        this.ruleIndex = BSLParser.RULE_name;
    }

	SYMBOL() {
	    return this.getToken(BSLParser.SYMBOL, 0);
	};

	NAME() {
	    return this.getToken(BSLParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BSLListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BSLListener ) {
	        listener.exitName(this);
		}
	}


}




BSLParser.ProgramContext = ProgramContext; 
BSLParser.DefOrExprContext = DefOrExprContext; 
BSLParser.DefinitionContext = DefinitionContext; 
BSLParser.ExprContext = ExprContext; 
BSLParser.TestCaseContext = TestCaseContext; 
BSLParser.LibraryRequireContext = LibraryRequireContext; 
BSLParser.PkgContext = PkgContext; 
BSLParser.NameContext = NameContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
