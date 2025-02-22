// Generated from ./racket-bsl/BSL.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import BSLListener from './BSLListener.js';
const serializedATN = [4,1,30,244,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,4,0,18,8,0,11,0,12,0,19,1,1,1,1,1,1,1,1,3,
1,26,8,1,1,2,1,2,1,2,1,2,1,2,4,2,33,8,2,11,2,12,2,34,1,2,1,2,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,4,2,54,8,2,11,2,12,2,55,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,68,8,2,10,2,12,2,71,9,2,1,2,
1,2,1,2,3,2,76,8,2,1,3,1,3,1,3,4,3,81,8,3,11,3,12,3,82,1,3,1,3,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,4,3,94,8,3,11,3,12,3,95,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
3,1,3,5,3,107,8,3,10,3,12,3,110,9,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,4,3,129,8,3,11,3,12,3,130,1,3,1,3,1,3,1,
3,1,3,1,3,4,3,139,8,3,11,3,12,3,140,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,
151,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
1,4,1,4,1,4,1,4,1,4,1,4,1,4,4,4,176,8,4,11,4,12,4,177,1,4,1,4,1,4,1,4,1,
4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,192,8,4,1,4,1,4,3,4,196,8,4,1,5,1,5,1,
5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,4,5,214,8,5,11,5,12,
5,215,1,5,3,5,219,8,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,
5,233,8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,0,0,8,0,2,4,6,8,10,12,
14,0,1,1,0,21,22,273,0,17,1,0,0,0,2,25,1,0,0,0,4,75,1,0,0,0,6,150,1,0,0,
0,8,195,1,0,0,0,10,232,1,0,0,0,12,234,1,0,0,0,14,241,1,0,0,0,16,18,3,2,1,
0,17,16,1,0,0,0,18,19,1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,1,1,0,0,0,21,
26,3,4,2,0,22,26,3,6,3,0,23,26,3,8,4,0,24,26,3,10,5,0,25,21,1,0,0,0,25,22,
1,0,0,0,25,23,1,0,0,0,25,24,1,0,0,0,26,3,1,0,0,0,27,28,5,1,0,0,28,29,5,2,
0,0,29,30,5,1,0,0,30,32,3,14,7,0,31,33,5,22,0,0,32,31,1,0,0,0,33,34,1,0,
0,0,34,32,1,0,0,0,34,35,1,0,0,0,35,36,1,0,0,0,36,37,5,3,0,0,37,38,3,6,3,
0,38,39,5,3,0,0,39,76,1,0,0,0,40,41,5,1,0,0,41,42,5,2,0,0,42,43,3,14,7,0,
43,44,3,6,3,0,44,45,5,3,0,0,45,76,1,0,0,0,46,47,5,1,0,0,47,48,5,2,0,0,48,
49,3,14,7,0,49,50,5,1,0,0,50,51,5,4,0,0,51,53,5,1,0,0,52,54,5,22,0,0,53,
52,1,0,0,0,54,55,1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,57,1,0,0,0,57,58,
5,3,0,0,58,59,3,6,3,0,59,60,5,3,0,0,60,61,5,3,0,0,61,76,1,0,0,0,62,63,5,
1,0,0,63,64,5,5,0,0,64,65,3,14,7,0,65,69,5,1,0,0,66,68,3,14,7,0,67,66,1,
0,0,0,68,71,1,0,0,0,69,67,1,0,0,0,69,70,1,0,0,0,70,72,1,0,0,0,71,69,1,0,
0,0,72,73,5,3,0,0,73,74,5,3,0,0,74,76,1,0,0,0,75,27,1,0,0,0,75,40,1,0,0,
0,75,46,1,0,0,0,75,62,1,0,0,0,76,5,1,0,0,0,77,78,5,1,0,0,78,80,3,14,7,0,
79,81,3,6,3,0,80,79,1,0,0,0,81,82,1,0,0,0,82,80,1,0,0,0,82,83,1,0,0,0,83,
84,1,0,0,0,84,85,5,3,0,0,85,151,1,0,0,0,86,87,5,1,0,0,87,93,5,6,0,0,88,89,
5,7,0,0,89,90,3,6,3,0,90,91,3,6,3,0,91,92,5,8,0,0,92,94,1,0,0,0,93,88,1,
0,0,0,94,95,1,0,0,0,95,93,1,0,0,0,95,96,1,0,0,0,96,97,1,0,0,0,97,98,5,3,
0,0,98,151,1,0,0,0,99,100,5,1,0,0,100,108,5,6,0,0,101,102,5,7,0,0,102,103,
3,6,3,0,103,104,3,6,3,0,104,105,5,8,0,0,105,107,1,0,0,0,106,101,1,0,0,0,
107,110,1,0,0,0,108,106,1,0,0,0,108,109,1,0,0,0,109,111,1,0,0,0,110,108,
1,0,0,0,111,112,5,7,0,0,112,113,5,9,0,0,113,114,3,6,3,0,114,115,5,8,0,0,
115,116,5,3,0,0,116,151,1,0,0,0,117,118,5,1,0,0,118,119,5,10,0,0,119,120,
3,6,3,0,120,121,3,6,3,0,121,122,3,6,3,0,122,123,5,3,0,0,123,151,1,0,0,0,
124,125,5,1,0,0,125,126,5,11,0,0,126,128,3,6,3,0,127,129,3,6,3,0,128,127,
1,0,0,0,129,130,1,0,0,0,130,128,1,0,0,0,130,131,1,0,0,0,131,132,1,0,0,0,
132,133,5,3,0,0,133,151,1,0,0,0,134,135,5,1,0,0,135,136,5,12,0,0,136,138,
3,6,3,0,137,139,3,6,3,0,138,137,1,0,0,0,139,140,1,0,0,0,140,138,1,0,0,0,
140,141,1,0,0,0,141,142,1,0,0,0,142,143,5,3,0,0,143,151,1,0,0,0,144,151,
5,13,0,0,145,151,3,14,7,0,146,151,5,23,0,0,147,151,5,25,0,0,148,151,5,26,
0,0,149,151,5,27,0,0,150,77,1,0,0,0,150,86,1,0,0,0,150,99,1,0,0,0,150,117,
1,0,0,0,150,124,1,0,0,0,150,134,1,0,0,0,150,144,1,0,0,0,150,145,1,0,0,0,
150,146,1,0,0,0,150,147,1,0,0,0,150,148,1,0,0,0,150,149,1,0,0,0,151,7,1,
0,0,0,152,153,5,1,0,0,153,154,5,14,0,0,154,155,3,6,3,0,155,156,3,6,3,0,156,
157,5,3,0,0,157,196,1,0,0,0,158,159,5,1,0,0,159,160,5,15,0,0,160,161,3,6,
3,0,161,162,3,6,3,0,162,163,5,3,0,0,163,196,1,0,0,0,164,165,5,1,0,0,165,
166,5,16,0,0,166,167,3,6,3,0,167,168,3,6,3,0,168,169,3,6,3,0,169,170,5,3,
0,0,170,196,1,0,0,0,171,172,5,1,0,0,172,173,5,17,0,0,173,175,3,6,3,0,174,
176,3,6,3,0,175,174,1,0,0,0,176,177,1,0,0,0,177,175,1,0,0,0,177,178,1,0,
0,0,178,179,1,0,0,0,179,180,5,3,0,0,180,196,1,0,0,0,181,182,5,1,0,0,182,
183,5,18,0,0,183,184,3,6,3,0,184,185,3,14,7,0,185,186,5,3,0,0,186,196,1,
0,0,0,187,188,5,1,0,0,188,189,5,19,0,0,189,191,3,6,3,0,190,192,3,6,3,0,191,
190,1,0,0,0,191,192,1,0,0,0,192,193,1,0,0,0,193,194,5,3,0,0,194,196,1,0,
0,0,195,152,1,0,0,0,195,158,1,0,0,0,195,164,1,0,0,0,195,171,1,0,0,0,195,
181,1,0,0,0,195,187,1,0,0,0,196,9,1,0,0,0,197,198,5,1,0,0,198,199,5,20,0,
0,199,200,5,26,0,0,200,233,5,3,0,0,201,202,5,1,0,0,202,203,5,20,0,0,203,
204,3,14,7,0,204,205,5,3,0,0,205,233,1,0,0,0,206,207,5,1,0,0,207,208,5,20,
0,0,208,209,5,1,0,0,209,210,3,14,7,0,210,218,5,26,0,0,211,213,5,1,0,0,212,
214,5,26,0,0,213,212,1,0,0,0,214,215,1,0,0,0,215,213,1,0,0,0,215,216,1,0,
0,0,216,217,1,0,0,0,217,219,5,3,0,0,218,211,1,0,0,0,218,219,1,0,0,0,219,
220,1,0,0,0,220,221,5,3,0,0,221,222,5,3,0,0,222,233,1,0,0,0,223,224,5,1,
0,0,224,225,5,20,0,0,225,226,5,1,0,0,226,227,3,14,7,0,227,228,5,26,0,0,228,
229,3,12,6,0,229,230,5,3,0,0,230,231,5,3,0,0,231,233,1,0,0,0,232,197,1,0,
0,0,232,201,1,0,0,0,232,206,1,0,0,0,232,223,1,0,0,0,233,11,1,0,0,0,234,235,
5,1,0,0,235,236,5,26,0,0,236,237,5,26,0,0,237,238,5,23,0,0,238,239,5,23,
0,0,239,240,5,3,0,0,240,13,1,0,0,0,241,242,7,0,0,0,242,15,1,0,0,0,18,19,
25,34,55,69,75,82,95,108,130,140,150,177,191,195,215,218,232];


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

    get atn() {
        return atn;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, BSLParser.RULE_program);
	    var _la = 0; // Token type
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
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BSLParser.T__0) | (1 << BSLParser.T__12) | (1 << BSLParser.SYMBOL) | (1 << BSLParser.NAME) | (1 << BSLParser.NUMBER) | (1 << BSLParser.BOOLEAN) | (1 << BSLParser.STRING) | (1 << BSLParser.CHARACTER))) !== 0));
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
	        this.state = 25;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 21;
	            this.definition();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 22;
	            this.expr();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 23;
	            this.testCase();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 24;
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
	    var _la = 0; // Token type
	    try {
	        this.state = 75;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 27;
	            this.match(BSLParser.T__0);
	            this.state = 28;
	            this.match(BSLParser.T__1);
	            this.state = 29;
	            this.match(BSLParser.T__0);
	            this.state = 30;
	            this.name();
	            this.state = 32; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 31;
	                this.match(BSLParser.NAME);
	                this.state = 34; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===BSLParser.NAME);
	            this.state = 36;
	            this.match(BSLParser.T__2);
	            this.state = 37;
	            this.expr();
	            this.state = 38;
	            this.match(BSLParser.T__2);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 40;
	            this.match(BSLParser.T__0);
	            this.state = 41;
	            this.match(BSLParser.T__1);
	            this.state = 42;
	            this.name();
	            this.state = 43;
	            this.expr();
	            this.state = 44;
	            this.match(BSLParser.T__2);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 46;
	            this.match(BSLParser.T__0);
	            this.state = 47;
	            this.match(BSLParser.T__1);
	            this.state = 48;
	            this.name();
	            this.state = 49;
	            this.match(BSLParser.T__0);
	            this.state = 50;
	            this.match(BSLParser.T__3);
	            this.state = 51;
	            this.match(BSLParser.T__0);
	            this.state = 53; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 52;
	                this.match(BSLParser.NAME);
	                this.state = 55; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===BSLParser.NAME);
	            this.state = 57;
	            this.match(BSLParser.T__2);
	            this.state = 58;
	            this.expr();
	            this.state = 59;
	            this.match(BSLParser.T__2);
	            this.state = 60;
	            this.match(BSLParser.T__2);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 62;
	            this.match(BSLParser.T__0);
	            this.state = 63;
	            this.match(BSLParser.T__4);
	            this.state = 64;
	            this.name();
	            this.state = 65;
	            this.match(BSLParser.T__0);
	            this.state = 69;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===BSLParser.SYMBOL || _la===BSLParser.NAME) {
	                this.state = 66;
	                this.name();
	                this.state = 71;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 72;
	            this.match(BSLParser.T__2);
	            this.state = 73;
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
	    var _la = 0; // Token type
	    try {
	        this.state = 150;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 77;
	            this.match(BSLParser.T__0);
	            this.state = 78;
	            this.name();
	            this.state = 80; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 79;
	                this.expr();
	                this.state = 82; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BSLParser.T__0) | (1 << BSLParser.T__12) | (1 << BSLParser.SYMBOL) | (1 << BSLParser.NAME) | (1 << BSLParser.NUMBER) | (1 << BSLParser.BOOLEAN) | (1 << BSLParser.STRING) | (1 << BSLParser.CHARACTER))) !== 0));
	            this.state = 84;
	            this.match(BSLParser.T__2);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 86;
	            this.match(BSLParser.T__0);
	            this.state = 87;
	            this.match(BSLParser.T__5);
	            this.state = 93; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 88;
	                this.match(BSLParser.T__6);
	                this.state = 89;
	                this.expr();
	                this.state = 90;
	                this.expr();
	                this.state = 91;
	                this.match(BSLParser.T__7);
	                this.state = 95; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===BSLParser.T__6);
	            this.state = 97;
	            this.match(BSLParser.T__2);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 99;
	            this.match(BSLParser.T__0);
	            this.state = 100;
	            this.match(BSLParser.T__5);
	            this.state = 108;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 101;
	                    this.match(BSLParser.T__6);
	                    this.state = 102;
	                    this.expr();
	                    this.state = 103;
	                    this.expr();
	                    this.state = 104;
	                    this.match(BSLParser.T__7); 
	                }
	                this.state = 110;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	            }

	            this.state = 111;
	            this.match(BSLParser.T__6);
	            this.state = 112;
	            this.match(BSLParser.T__8);
	            this.state = 113;
	            this.expr();
	            this.state = 114;
	            this.match(BSLParser.T__7);
	            this.state = 115;
	            this.match(BSLParser.T__2);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 117;
	            this.match(BSLParser.T__0);
	            this.state = 118;
	            this.match(BSLParser.T__9);
	            this.state = 119;
	            this.expr();
	            this.state = 120;
	            this.expr();
	            this.state = 121;
	            this.expr();
	            this.state = 122;
	            this.match(BSLParser.T__2);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 124;
	            this.match(BSLParser.T__0);
	            this.state = 125;
	            this.match(BSLParser.T__10);
	            this.state = 126;
	            this.expr();
	            this.state = 128; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 127;
	                this.expr();
	                this.state = 130; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BSLParser.T__0) | (1 << BSLParser.T__12) | (1 << BSLParser.SYMBOL) | (1 << BSLParser.NAME) | (1 << BSLParser.NUMBER) | (1 << BSLParser.BOOLEAN) | (1 << BSLParser.STRING) | (1 << BSLParser.CHARACTER))) !== 0));
	            this.state = 132;
	            this.match(BSLParser.T__2);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 134;
	            this.match(BSLParser.T__0);
	            this.state = 135;
	            this.match(BSLParser.T__11);
	            this.state = 136;
	            this.expr();
	            this.state = 138; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 137;
	                this.expr();
	                this.state = 140; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BSLParser.T__0) | (1 << BSLParser.T__12) | (1 << BSLParser.SYMBOL) | (1 << BSLParser.NAME) | (1 << BSLParser.NUMBER) | (1 << BSLParser.BOOLEAN) | (1 << BSLParser.STRING) | (1 << BSLParser.CHARACTER))) !== 0));
	            this.state = 142;
	            this.match(BSLParser.T__2);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 144;
	            this.match(BSLParser.T__12);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 145;
	            this.name();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 146;
	            this.match(BSLParser.NUMBER);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 147;
	            this.match(BSLParser.BOOLEAN);
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 148;
	            this.match(BSLParser.STRING);
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 149;
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
	    var _la = 0; // Token type
	    try {
	        this.state = 195;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 152;
	            this.match(BSLParser.T__0);
	            this.state = 153;
	            this.match(BSLParser.T__13);
	            this.state = 154;
	            this.expr();
	            this.state = 155;
	            this.expr();
	            this.state = 156;
	            this.match(BSLParser.T__2);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 158;
	            this.match(BSLParser.T__0);
	            this.state = 159;
	            this.match(BSLParser.T__14);
	            this.state = 160;
	            this.expr();
	            this.state = 161;
	            this.expr();
	            this.state = 162;
	            this.match(BSLParser.T__2);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 164;
	            this.match(BSLParser.T__0);
	            this.state = 165;
	            this.match(BSLParser.T__15);
	            this.state = 166;
	            this.expr();
	            this.state = 167;
	            this.expr();
	            this.state = 168;
	            this.expr();
	            this.state = 169;
	            this.match(BSLParser.T__2);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 171;
	            this.match(BSLParser.T__0);
	            this.state = 172;
	            this.match(BSLParser.T__16);
	            this.state = 173;
	            this.expr();
	            this.state = 175; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 174;
	                this.expr();
	                this.state = 177; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BSLParser.T__0) | (1 << BSLParser.T__12) | (1 << BSLParser.SYMBOL) | (1 << BSLParser.NAME) | (1 << BSLParser.NUMBER) | (1 << BSLParser.BOOLEAN) | (1 << BSLParser.STRING) | (1 << BSLParser.CHARACTER))) !== 0));
	            this.state = 179;
	            this.match(BSLParser.T__2);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 181;
	            this.match(BSLParser.T__0);
	            this.state = 182;
	            this.match(BSLParser.T__17);
	            this.state = 183;
	            this.expr();
	            this.state = 184;
	            this.name();
	            this.state = 185;
	            this.match(BSLParser.T__2);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 187;
	            this.match(BSLParser.T__0);
	            this.state = 188;
	            this.match(BSLParser.T__18);
	            this.state = 189;
	            this.expr();
	            this.state = 191;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BSLParser.T__0) | (1 << BSLParser.T__12) | (1 << BSLParser.SYMBOL) | (1 << BSLParser.NAME) | (1 << BSLParser.NUMBER) | (1 << BSLParser.BOOLEAN) | (1 << BSLParser.STRING) | (1 << BSLParser.CHARACTER))) !== 0)) {
	                this.state = 190;
	                this.expr();
	            }

	            this.state = 193;
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
	    var _la = 0; // Token type
	    try {
	        this.state = 232;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 197;
	            this.match(BSLParser.T__0);
	            this.state = 198;
	            this.match(BSLParser.T__19);
	            this.state = 199;
	            this.match(BSLParser.STRING);
	            this.state = 200;
	            this.match(BSLParser.T__2);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 201;
	            this.match(BSLParser.T__0);
	            this.state = 202;
	            this.match(BSLParser.T__19);
	            this.state = 203;
	            this.name();
	            this.state = 204;
	            this.match(BSLParser.T__2);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 206;
	            this.match(BSLParser.T__0);
	            this.state = 207;
	            this.match(BSLParser.T__19);
	            this.state = 208;
	            this.match(BSLParser.T__0);
	            this.state = 209;
	            this.name();
	            this.state = 210;
	            this.match(BSLParser.STRING);
	            this.state = 218;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===BSLParser.T__0) {
	                this.state = 211;
	                this.match(BSLParser.T__0);
	                this.state = 213; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                do {
	                    this.state = 212;
	                    this.match(BSLParser.STRING);
	                    this.state = 215; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                } while(_la===BSLParser.STRING);
	                this.state = 217;
	                this.match(BSLParser.T__2);
	            }

	            this.state = 220;
	            this.match(BSLParser.T__2);
	            this.state = 221;
	            this.match(BSLParser.T__2);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 223;
	            this.match(BSLParser.T__0);
	            this.state = 224;
	            this.match(BSLParser.T__19);
	            this.state = 225;
	            this.match(BSLParser.T__0);
	            this.state = 226;
	            this.name();
	            this.state = 227;
	            this.match(BSLParser.STRING);
	            this.state = 228;
	            this.pkg();
	            this.state = 229;
	            this.match(BSLParser.T__2);
	            this.state = 230;
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
	        this.state = 234;
	        this.match(BSLParser.T__0);
	        this.state = 235;
	        this.match(BSLParser.STRING);
	        this.state = 236;
	        this.match(BSLParser.STRING);
	        this.state = 237;
	        this.match(BSLParser.NUMBER);
	        this.state = 238;
	        this.match(BSLParser.NUMBER);
	        this.state = 239;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 241;
	        _la = this._input.LA(1);
	        if(!(_la===BSLParser.SYMBOL || _la===BSLParser.NAME)) {
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
