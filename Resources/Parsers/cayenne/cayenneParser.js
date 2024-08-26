// Generated from Resources/Parsers/cayenne/cayenne.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import cayenneListener from './cayenneListener.js';
const serializedATN = [4,1,22,159,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,1,0,1,0,1,0,1,0,
1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,5,0,44,8,
0,10,0,12,0,47,9,0,1,0,1,0,5,0,51,8,0,10,0,12,0,54,9,0,1,0,1,0,1,0,1,0,1,
0,1,0,1,0,1,0,5,0,64,8,0,10,0,12,0,67,9,0,1,0,1,0,1,0,1,0,1,0,5,0,74,8,0,
10,0,12,0,77,9,0,1,0,1,0,5,0,81,8,0,10,0,12,0,84,9,0,1,0,1,0,3,0,88,8,0,
1,0,1,0,1,0,1,0,1,0,5,0,95,8,0,10,0,12,0,98,9,0,1,1,1,1,1,1,5,1,103,8,1,
10,1,12,1,106,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,118,8,1,1,
2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,132,8,2,1,3,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,3,4,145,8,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,
8,1,9,1,9,1,10,1,10,1,10,0,1,0,11,0,2,4,6,8,10,12,14,16,18,20,0,1,1,0,19,
20,166,0,87,1,0,0,0,2,117,1,0,0,0,4,131,1,0,0,0,6,133,1,0,0,0,8,144,1,0,
0,0,10,146,1,0,0,0,12,148,1,0,0,0,14,150,1,0,0,0,16,152,1,0,0,0,18,154,1,
0,0,0,20,156,1,0,0,0,22,23,6,0,-1,0,23,24,5,1,0,0,24,25,3,14,7,0,25,26,5,
2,0,0,26,27,3,12,6,0,27,28,5,3,0,0,28,29,5,4,0,0,29,30,3,0,0,11,30,88,1,
0,0,0,31,32,5,5,0,0,32,33,5,1,0,0,33,34,3,14,7,0,34,35,5,2,0,0,35,36,3,12,
6,0,36,37,5,3,0,0,37,38,5,4,0,0,38,39,3,0,0,10,39,88,1,0,0,0,40,52,5,6,0,
0,41,45,3,16,8,0,42,44,3,12,6,0,43,42,1,0,0,0,44,47,1,0,0,0,45,43,1,0,0,
0,45,46,1,0,0,0,46,48,1,0,0,0,47,45,1,0,0,0,48,49,5,7,0,0,49,51,1,0,0,0,
50,41,1,0,0,0,51,54,1,0,0,0,52,50,1,0,0,0,52,53,1,0,0,0,53,88,1,0,0,0,54,
52,1,0,0,0,55,56,3,16,8,0,56,57,5,8,0,0,57,58,3,12,6,0,58,88,1,0,0,0,59,
60,5,9,0,0,60,61,3,14,7,0,61,65,5,10,0,0,62,64,3,2,1,0,63,62,1,0,0,0,64,
67,1,0,0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,68,1,0,0,0,67,65,1,0,0,0,68,69,
5,2,0,0,69,70,3,12,6,0,70,88,1,0,0,0,71,75,5,11,0,0,72,74,3,4,2,0,73,72,
1,0,0,0,74,77,1,0,0,0,75,73,1,0,0,0,75,76,1,0,0,0,76,88,1,0,0,0,77,75,1,
0,0,0,78,82,5,12,0,0,79,81,3,6,3,0,80,79,1,0,0,0,81,84,1,0,0,0,82,80,1,0,
0,0,82,83,1,0,0,0,83,88,1,0,0,0,84,82,1,0,0,0,85,88,3,20,10,0,86,88,5,14,
0,0,87,22,1,0,0,0,87,31,1,0,0,0,87,40,1,0,0,0,87,55,1,0,0,0,87,59,1,0,0,
0,87,71,1,0,0,0,87,78,1,0,0,0,87,85,1,0,0,0,87,86,1,0,0,0,88,96,1,0,0,0,
89,90,10,9,0,0,90,95,3,0,0,10,91,92,10,3,0,0,92,93,5,13,0,0,93,95,3,18,9,
0,94,89,1,0,0,0,94,91,1,0,0,0,95,98,1,0,0,0,96,94,1,0,0,0,96,97,1,0,0,0,
97,1,1,0,0,0,98,96,1,0,0,0,99,100,5,1,0,0,100,104,3,16,8,0,101,103,3,14,
7,0,102,101,1,0,0,0,103,106,1,0,0,0,104,102,1,0,0,0,104,105,1,0,0,0,105,
107,1,0,0,0,106,104,1,0,0,0,107,108,5,3,0,0,108,109,5,4,0,0,109,110,3,0,
0,0,110,111,5,15,0,0,111,118,1,0,0,0,112,113,3,14,7,0,113,114,5,4,0,0,114,
115,3,0,0,0,115,116,5,15,0,0,116,118,1,0,0,0,117,99,1,0,0,0,117,112,1,0,
0,0,118,3,1,0,0,0,119,120,3,18,9,0,120,121,5,2,0,0,121,122,3,12,6,0,122,
123,5,15,0,0,123,132,1,0,0,0,124,125,3,18,9,0,125,126,5,2,0,0,126,127,3,
12,6,0,127,128,5,16,0,0,128,129,3,0,0,0,129,130,5,15,0,0,130,132,1,0,0,0,
131,119,1,0,0,0,131,124,1,0,0,0,132,5,1,0,0,0,133,134,3,8,4,0,134,135,3,
18,9,0,135,136,5,2,0,0,136,137,3,12,6,0,137,138,5,16,0,0,138,139,3,0,0,0,
139,140,5,15,0,0,140,7,1,0,0,0,141,145,5,17,0,0,142,143,5,18,0,0,143,145,
3,10,5,0,144,141,1,0,0,0,144,142,1,0,0,0,145,9,1,0,0,0,146,147,7,0,0,0,147,
11,1,0,0,0,148,149,3,0,0,0,149,13,1,0,0,0,150,151,3,20,10,0,151,15,1,0,0,
0,152,153,3,20,10,0,153,17,1,0,0,0,154,155,3,20,10,0,155,19,1,0,0,0,156,
157,5,21,0,0,157,21,1,0,0,0,12,45,52,65,75,82,87,94,96,104,117,131,144];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class cayenneParser extends antlr4.Parser {

    static grammarFileName = "cayenne.g4";
    static literalNames = [ null, "'('", "'::'", "')'", "'->'", "'\\'", 
                            "'data'", "'|'", "'@'", "'case'", "'of'", "'sig'", 
                            "'struct'", "'.'", "'#'", "';'", "'='", "'private'", 
                            "'public'", "'abstract'", "'concrete'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "ID", "WS" ];
    static ruleNames = [ "expr", "arm", "sign", "defn", "vis", "abs_", "type_", 
                         "varid", "conid", "lblid", "id_" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = cayenneParser.ruleNames;
        this.literalNames = cayenneParser.literalNames;
        this.symbolicNames = cayenneParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 0:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 9);
    		case 1:
    			return this.precpred(this._ctx, 3);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };



	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 0;
	    this.enterRecursionRule(localctx, 0, cayenneParser.RULE_expr, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 23;
	            this.match(cayenneParser.T__0);
	            this.state = 24;
	            this.varid();
	            this.state = 25;
	            this.match(cayenneParser.T__1);
	            this.state = 26;
	            this.type_();
	            this.state = 27;
	            this.match(cayenneParser.T__2);
	            this.state = 28;
	            this.match(cayenneParser.T__3);
	            this.state = 29;
	            this.expr(11);
	            break;

	        case 2:
	            this.state = 31;
	            this.match(cayenneParser.T__4);
	            this.state = 32;
	            this.match(cayenneParser.T__0);
	            this.state = 33;
	            this.varid();
	            this.state = 34;
	            this.match(cayenneParser.T__1);
	            this.state = 35;
	            this.type_();
	            this.state = 36;
	            this.match(cayenneParser.T__2);
	            this.state = 37;
	            this.match(cayenneParser.T__3);
	            this.state = 38;
	            this.expr(10);
	            break;

	        case 3:
	            this.state = 40;
	            this.match(cayenneParser.T__5);
	            this.state = 52;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 41;
	                    this.conid();
	                    this.state = 45;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << cayenneParser.T__0) | (1 << cayenneParser.T__4) | (1 << cayenneParser.T__5) | (1 << cayenneParser.T__8) | (1 << cayenneParser.T__10) | (1 << cayenneParser.T__11) | (1 << cayenneParser.T__13) | (1 << cayenneParser.ID))) !== 0)) {
	                        this.state = 42;
	                        this.type_();
	                        this.state = 47;
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    }
	                    this.state = 48;
	                    this.match(cayenneParser.T__6); 
	                }
	                this.state = 54;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	            }

	            break;

	        case 4:
	            this.state = 55;
	            this.conid();
	            this.state = 56;
	            this.match(cayenneParser.T__7);
	            this.state = 57;
	            this.type_();
	            break;

	        case 5:
	            this.state = 59;
	            this.match(cayenneParser.T__8);
	            this.state = 60;
	            this.varid();
	            this.state = 61;
	            this.match(cayenneParser.T__9);
	            this.state = 65;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===cayenneParser.T__0 || _la===cayenneParser.ID) {
	                this.state = 62;
	                this.arm();
	                this.state = 67;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 68;
	            this.match(cayenneParser.T__1);
	            this.state = 69;
	            this.type_();
	            break;

	        case 6:
	            this.state = 71;
	            this.match(cayenneParser.T__10);
	            this.state = 75;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 72;
	                    this.sign(); 
	                }
	                this.state = 77;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	            }

	            break;

	        case 7:
	            this.state = 78;
	            this.match(cayenneParser.T__11);
	            this.state = 82;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 79;
	                    this.defn(); 
	                }
	                this.state = 84;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	            }

	            break;

	        case 8:
	            this.state = 85;
	            this.id_();
	            break;

	        case 9:
	            this.state = 86;
	            this.match(cayenneParser.T__13);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 96;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 94;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, cayenneParser.RULE_expr);
	                    this.state = 89;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 90;
	                    this.expr(10);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, cayenneParser.RULE_expr);
	                    this.state = 91;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 92;
	                    this.match(cayenneParser.T__12);
	                    this.state = 93;
	                    this.lblid();
	                    break;

	                } 
	            }
	            this.state = 98;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
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



	arm() {
	    let localctx = new ArmContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, cayenneParser.RULE_arm);
	    var _la = 0; // Token type
	    try {
	        this.state = 117;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case cayenneParser.T__0:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 99;
	            this.match(cayenneParser.T__0);
	            this.state = 100;
	            this.conid();
	            this.state = 104;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===cayenneParser.ID) {
	                this.state = 101;
	                this.varid();
	                this.state = 106;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 107;
	            this.match(cayenneParser.T__2);
	            this.state = 108;
	            this.match(cayenneParser.T__3);
	            this.state = 109;
	            this.expr(0);
	            this.state = 110;
	            this.match(cayenneParser.T__14);
	            break;
	        case cayenneParser.ID:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 112;
	            this.varid();
	            this.state = 113;
	            this.match(cayenneParser.T__3);
	            this.state = 114;
	            this.expr(0);
	            this.state = 115;
	            this.match(cayenneParser.T__14);
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



	sign() {
	    let localctx = new SignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, cayenneParser.RULE_sign);
	    try {
	        this.state = 131;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 119;
	            this.lblid();
	            this.state = 120;
	            this.match(cayenneParser.T__1);
	            this.state = 121;
	            this.type_();
	            this.state = 122;
	            this.match(cayenneParser.T__14);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 124;
	            this.lblid();
	            this.state = 125;
	            this.match(cayenneParser.T__1);
	            this.state = 126;
	            this.type_();
	            this.state = 127;
	            this.match(cayenneParser.T__15);
	            this.state = 128;
	            this.expr(0);
	            this.state = 129;
	            this.match(cayenneParser.T__14);
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



	defn() {
	    let localctx = new DefnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, cayenneParser.RULE_defn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 133;
	        this.vis();
	        this.state = 134;
	        this.lblid();
	        this.state = 135;
	        this.match(cayenneParser.T__1);
	        this.state = 136;
	        this.type_();
	        this.state = 137;
	        this.match(cayenneParser.T__15);
	        this.state = 138;
	        this.expr(0);
	        this.state = 139;
	        this.match(cayenneParser.T__14);
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



	vis() {
	    let localctx = new VisContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, cayenneParser.RULE_vis);
	    try {
	        this.state = 144;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case cayenneParser.T__16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 141;
	            this.match(cayenneParser.T__16);
	            break;
	        case cayenneParser.T__17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 142;
	            this.match(cayenneParser.T__17);
	            this.state = 143;
	            this.abs_();
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



	abs_() {
	    let localctx = new Abs_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, cayenneParser.RULE_abs_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        _la = this._input.LA(1);
	        if(!(_la===cayenneParser.T__18 || _la===cayenneParser.T__19)) {
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



	type_() {
	    let localctx = new Type_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, cayenneParser.RULE_type_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 148;
	        this.expr(0);
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



	varid() {
	    let localctx = new VaridContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, cayenneParser.RULE_varid);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 150;
	        this.id_();
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



	conid() {
	    let localctx = new ConidContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, cayenneParser.RULE_conid);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
	        this.id_();
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



	lblid() {
	    let localctx = new LblidContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, cayenneParser.RULE_lblid);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this.id_();
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



	id_() {
	    let localctx = new Id_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, cayenneParser.RULE_id_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
	        this.match(cayenneParser.ID);
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

cayenneParser.EOF = antlr4.Token.EOF;
cayenneParser.T__0 = 1;
cayenneParser.T__1 = 2;
cayenneParser.T__2 = 3;
cayenneParser.T__3 = 4;
cayenneParser.T__4 = 5;
cayenneParser.T__5 = 6;
cayenneParser.T__6 = 7;
cayenneParser.T__7 = 8;
cayenneParser.T__8 = 9;
cayenneParser.T__9 = 10;
cayenneParser.T__10 = 11;
cayenneParser.T__11 = 12;
cayenneParser.T__12 = 13;
cayenneParser.T__13 = 14;
cayenneParser.T__14 = 15;
cayenneParser.T__15 = 16;
cayenneParser.T__16 = 17;
cayenneParser.T__17 = 18;
cayenneParser.T__18 = 19;
cayenneParser.T__19 = 20;
cayenneParser.ID = 21;
cayenneParser.WS = 22;

cayenneParser.RULE_expr = 0;
cayenneParser.RULE_arm = 1;
cayenneParser.RULE_sign = 2;
cayenneParser.RULE_defn = 3;
cayenneParser.RULE_vis = 4;
cayenneParser.RULE_abs_ = 5;
cayenneParser.RULE_type_ = 6;
cayenneParser.RULE_varid = 7;
cayenneParser.RULE_conid = 8;
cayenneParser.RULE_lblid = 9;
cayenneParser.RULE_id_ = 10;

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
        this.ruleIndex = cayenneParser.RULE_expr;
    }

	varid() {
	    return this.getTypedRuleContext(VaridContext,0);
	};

	type_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Type_Context);
	    } else {
	        return this.getTypedRuleContext(Type_Context,i);
	    }
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

	conid = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConidContext);
	    } else {
	        return this.getTypedRuleContext(ConidContext,i);
	    }
	};

	arm = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArmContext);
	    } else {
	        return this.getTypedRuleContext(ArmContext,i);
	    }
	};

	sign = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SignContext);
	    } else {
	        return this.getTypedRuleContext(SignContext,i);
	    }
	};

	defn = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DefnContext);
	    } else {
	        return this.getTypedRuleContext(DefnContext,i);
	    }
	};

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	lblid() {
	    return this.getTypedRuleContext(LblidContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof cayenneListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cayenneListener ) {
	        listener.exitExpr(this);
		}
	}


}



class ArmContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cayenneParser.RULE_arm;
    }

	conid() {
	    return this.getTypedRuleContext(ConidContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	varid = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VaridContext);
	    } else {
	        return this.getTypedRuleContext(VaridContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof cayenneListener ) {
	        listener.enterArm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cayenneListener ) {
	        listener.exitArm(this);
		}
	}


}



class SignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cayenneParser.RULE_sign;
    }

	lblid() {
	    return this.getTypedRuleContext(LblidContext,0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof cayenneListener ) {
	        listener.enterSign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cayenneListener ) {
	        listener.exitSign(this);
		}
	}


}



class DefnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cayenneParser.RULE_defn;
    }

	vis() {
	    return this.getTypedRuleContext(VisContext,0);
	};

	lblid() {
	    return this.getTypedRuleContext(LblidContext,0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof cayenneListener ) {
	        listener.enterDefn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cayenneListener ) {
	        listener.exitDefn(this);
		}
	}


}



class VisContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cayenneParser.RULE_vis;
    }

	abs_() {
	    return this.getTypedRuleContext(Abs_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof cayenneListener ) {
	        listener.enterVis(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cayenneListener ) {
	        listener.exitVis(this);
		}
	}


}



class Abs_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cayenneParser.RULE_abs_;
    }


	enterRule(listener) {
	    if(listener instanceof cayenneListener ) {
	        listener.enterAbs_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cayenneListener ) {
	        listener.exitAbs_(this);
		}
	}


}



class Type_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cayenneParser.RULE_type_;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof cayenneListener ) {
	        listener.enterType_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cayenneListener ) {
	        listener.exitType_(this);
		}
	}


}



class VaridContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cayenneParser.RULE_varid;
    }

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof cayenneListener ) {
	        listener.enterVarid(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cayenneListener ) {
	        listener.exitVarid(this);
		}
	}


}



class ConidContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cayenneParser.RULE_conid;
    }

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof cayenneListener ) {
	        listener.enterConid(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cayenneListener ) {
	        listener.exitConid(this);
		}
	}


}



class LblidContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cayenneParser.RULE_lblid;
    }

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof cayenneListener ) {
	        listener.enterLblid(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cayenneListener ) {
	        listener.exitLblid(this);
		}
	}


}



class Id_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cayenneParser.RULE_id_;
    }

	ID() {
	    return this.getToken(cayenneParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof cayenneListener ) {
	        listener.enterId_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cayenneListener ) {
	        listener.exitId_(this);
		}
	}


}




cayenneParser.ExprContext = ExprContext; 
cayenneParser.ArmContext = ArmContext; 
cayenneParser.SignContext = SignContext; 
cayenneParser.DefnContext = DefnContext; 
cayenneParser.VisContext = VisContext; 
cayenneParser.Abs_Context = Abs_Context; 
cayenneParser.Type_Context = Type_Context; 
cayenneParser.VaridContext = VaridContext; 
cayenneParser.ConidContext = ConidContext; 
cayenneParser.LblidContext = LblidContext; 
cayenneParser.Id_Context = Id_Context; 
