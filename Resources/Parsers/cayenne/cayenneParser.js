// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/cayenne/cayenne.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import cayenneListener from './cayenneListener.js';
const serializedATN = [4,1,22,164,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,0,1,
0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,5,1,49,8,1,10,1,12,1,52,9,1,1,1,1,1,5,1,56,8,1,10,1,12,1,59,
9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,69,8,1,10,1,12,1,72,9,1,1,1,1,1,
1,1,1,1,1,1,5,1,79,8,1,10,1,12,1,82,9,1,1,1,1,1,5,1,86,8,1,10,1,12,1,89,
9,1,1,1,1,1,3,1,93,8,1,1,1,1,1,1,1,1,1,1,1,5,1,100,8,1,10,1,12,1,103,9,1,
1,2,1,2,1,2,5,2,108,8,2,10,2,12,2,111,9,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
2,1,2,1,2,3,2,123,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,
3,137,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,3,5,150,8,5,1,6,1,
6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,11,0,1,2,12,0,2,4,6,8,10,
12,14,16,18,20,22,0,1,1,0,19,20,170,0,24,1,0,0,0,2,92,1,0,0,0,4,122,1,0,
0,0,6,136,1,0,0,0,8,138,1,0,0,0,10,149,1,0,0,0,12,151,1,0,0,0,14,153,1,0,
0,0,16,155,1,0,0,0,18,157,1,0,0,0,20,159,1,0,0,0,22,161,1,0,0,0,24,25,3,
2,1,0,25,26,5,0,0,1,26,1,1,0,0,0,27,28,6,1,-1,0,28,29,5,1,0,0,29,30,3,16,
8,0,30,31,5,2,0,0,31,32,3,14,7,0,32,33,5,3,0,0,33,34,5,4,0,0,34,35,3,2,1,
11,35,93,1,0,0,0,36,37,5,5,0,0,37,38,5,1,0,0,38,39,3,16,8,0,39,40,5,2,0,
0,40,41,3,14,7,0,41,42,5,3,0,0,42,43,5,4,0,0,43,44,3,2,1,10,44,93,1,0,0,
0,45,57,5,6,0,0,46,50,3,18,9,0,47,49,3,14,7,0,48,47,1,0,0,0,49,52,1,0,0,
0,50,48,1,0,0,0,50,51,1,0,0,0,51,53,1,0,0,0,52,50,1,0,0,0,53,54,5,7,0,0,
54,56,1,0,0,0,55,46,1,0,0,0,56,59,1,0,0,0,57,55,1,0,0,0,57,58,1,0,0,0,58,
93,1,0,0,0,59,57,1,0,0,0,60,61,3,18,9,0,61,62,5,8,0,0,62,63,3,14,7,0,63,
93,1,0,0,0,64,65,5,9,0,0,65,66,3,16,8,0,66,70,5,10,0,0,67,69,3,4,2,0,68,
67,1,0,0,0,69,72,1,0,0,0,70,68,1,0,0,0,70,71,1,0,0,0,71,73,1,0,0,0,72,70,
1,0,0,0,73,74,5,2,0,0,74,75,3,14,7,0,75,93,1,0,0,0,76,80,5,11,0,0,77,79,
3,6,3,0,78,77,1,0,0,0,79,82,1,0,0,0,80,78,1,0,0,0,80,81,1,0,0,0,81,93,1,
0,0,0,82,80,1,0,0,0,83,87,5,12,0,0,84,86,3,8,4,0,85,84,1,0,0,0,86,89,1,0,
0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,93,1,0,0,0,89,87,1,0,0,0,90,93,3,22,11,
0,91,93,5,14,0,0,92,27,1,0,0,0,92,36,1,0,0,0,92,45,1,0,0,0,92,60,1,0,0,0,
92,64,1,0,0,0,92,76,1,0,0,0,92,83,1,0,0,0,92,90,1,0,0,0,92,91,1,0,0,0,93,
101,1,0,0,0,94,95,10,9,0,0,95,100,3,2,1,10,96,97,10,3,0,0,97,98,5,13,0,0,
98,100,3,20,10,0,99,94,1,0,0,0,99,96,1,0,0,0,100,103,1,0,0,0,101,99,1,0,
0,0,101,102,1,0,0,0,102,3,1,0,0,0,103,101,1,0,0,0,104,105,5,1,0,0,105,109,
3,18,9,0,106,108,3,16,8,0,107,106,1,0,0,0,108,111,1,0,0,0,109,107,1,0,0,
0,109,110,1,0,0,0,110,112,1,0,0,0,111,109,1,0,0,0,112,113,5,3,0,0,113,114,
5,4,0,0,114,115,3,2,1,0,115,116,5,15,0,0,116,123,1,0,0,0,117,118,3,16,8,
0,118,119,5,4,0,0,119,120,3,2,1,0,120,121,5,15,0,0,121,123,1,0,0,0,122,104,
1,0,0,0,122,117,1,0,0,0,123,5,1,0,0,0,124,125,3,20,10,0,125,126,5,2,0,0,
126,127,3,14,7,0,127,128,5,15,0,0,128,137,1,0,0,0,129,130,3,20,10,0,130,
131,5,2,0,0,131,132,3,14,7,0,132,133,5,16,0,0,133,134,3,2,1,0,134,135,5,
15,0,0,135,137,1,0,0,0,136,124,1,0,0,0,136,129,1,0,0,0,137,7,1,0,0,0,138,
139,3,10,5,0,139,140,3,20,10,0,140,141,5,2,0,0,141,142,3,14,7,0,142,143,
5,16,0,0,143,144,3,2,1,0,144,145,5,15,0,0,145,9,1,0,0,0,146,150,5,17,0,0,
147,148,5,18,0,0,148,150,3,12,6,0,149,146,1,0,0,0,149,147,1,0,0,0,150,11,
1,0,0,0,151,152,7,0,0,0,152,13,1,0,0,0,153,154,3,2,1,0,154,15,1,0,0,0,155,
156,3,22,11,0,156,17,1,0,0,0,157,158,3,22,11,0,158,19,1,0,0,0,159,160,3,
22,11,0,160,21,1,0,0,0,161,162,5,21,0,0,162,23,1,0,0,0,12,50,57,70,80,87,
92,99,101,109,122,136,149];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class cayenneParser extends antlr4.Parser {

    static grammarFileName = "cayenne.g4";
    static literalNames = [ null, "'('", "'::'", "')'", "'->'", "'\\'", 
                            "'data'", "'|'", "'@'", "'case'", "'of'", "'sig'", 
                            "'struct'", "'.'", "'#'", "';'", "'='", "'private'", 
                            "'public'", "'abstract'", "'concrete'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "ID", "WS" ];
    static ruleNames = [ "file_", "expr", "arm", "sign", "defn", "vis", 
                         "abs_", "type_", "varid", "conid", "lblid", "id_" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = cayenneParser.ruleNames;
        this.literalNames = cayenneParser.literalNames;
        this.symbolicNames = cayenneParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
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




	file_() {
	    let localctx = new File_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, cayenneParser.RULE_file_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.expr(0);
	        this.state = 25;
	        this.match(cayenneParser.EOF);
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


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, cayenneParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 28;
	            this.match(cayenneParser.T__0);
	            this.state = 29;
	            this.varid();
	            this.state = 30;
	            this.match(cayenneParser.T__1);
	            this.state = 31;
	            this.type_();
	            this.state = 32;
	            this.match(cayenneParser.T__2);
	            this.state = 33;
	            this.match(cayenneParser.T__3);
	            this.state = 34;
	            this.expr(11);
	            break;

	        case 2:
	            this.state = 36;
	            this.match(cayenneParser.T__4);
	            this.state = 37;
	            this.match(cayenneParser.T__0);
	            this.state = 38;
	            this.varid();
	            this.state = 39;
	            this.match(cayenneParser.T__1);
	            this.state = 40;
	            this.type_();
	            this.state = 41;
	            this.match(cayenneParser.T__2);
	            this.state = 42;
	            this.match(cayenneParser.T__3);
	            this.state = 43;
	            this.expr(10);
	            break;

	        case 3:
	            this.state = 45;
	            this.match(cayenneParser.T__5);
	            this.state = 57;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 46;
	                    this.conid();
	                    this.state = 50;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2120290) !== 0)) {
	                        this.state = 47;
	                        this.type_();
	                        this.state = 52;
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    }
	                    this.state = 53;
	                    this.match(cayenneParser.T__6); 
	                }
	                this.state = 59;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	            }

	            break;

	        case 4:
	            this.state = 60;
	            this.conid();
	            this.state = 61;
	            this.match(cayenneParser.T__7);
	            this.state = 62;
	            this.type_();
	            break;

	        case 5:
	            this.state = 64;
	            this.match(cayenneParser.T__8);
	            this.state = 65;
	            this.varid();
	            this.state = 66;
	            this.match(cayenneParser.T__9);
	            this.state = 70;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===1 || _la===21) {
	                this.state = 67;
	                this.arm();
	                this.state = 72;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 73;
	            this.match(cayenneParser.T__1);
	            this.state = 74;
	            this.type_();
	            break;

	        case 6:
	            this.state = 76;
	            this.match(cayenneParser.T__10);
	            this.state = 80;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 77;
	                    this.sign(); 
	                }
	                this.state = 82;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	            }

	            break;

	        case 7:
	            this.state = 83;
	            this.match(cayenneParser.T__11);
	            this.state = 87;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 84;
	                    this.defn(); 
	                }
	                this.state = 89;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	            }

	            break;

	        case 8:
	            this.state = 90;
	            this.id_();
	            break;

	        case 9:
	            this.state = 91;
	            this.match(cayenneParser.T__13);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 101;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 99;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, cayenneParser.RULE_expr);
	                    this.state = 94;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 95;
	                    this.expr(10);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, cayenneParser.RULE_expr);
	                    this.state = 96;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 97;
	                    this.match(cayenneParser.T__12);
	                    this.state = 98;
	                    this.lblid();
	                    break;

	                } 
	            }
	            this.state = 103;
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
	    this.enterRule(localctx, 4, cayenneParser.RULE_arm);
	    var _la = 0;
	    try {
	        this.state = 122;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 104;
	            this.match(cayenneParser.T__0);
	            this.state = 105;
	            this.conid();
	            this.state = 109;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===21) {
	                this.state = 106;
	                this.varid();
	                this.state = 111;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 112;
	            this.match(cayenneParser.T__2);
	            this.state = 113;
	            this.match(cayenneParser.T__3);
	            this.state = 114;
	            this.expr(0);
	            this.state = 115;
	            this.match(cayenneParser.T__14);
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 117;
	            this.varid();
	            this.state = 118;
	            this.match(cayenneParser.T__3);
	            this.state = 119;
	            this.expr(0);
	            this.state = 120;
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
	    this.enterRule(localctx, 6, cayenneParser.RULE_sign);
	    try {
	        this.state = 136;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 124;
	            this.lblid();
	            this.state = 125;
	            this.match(cayenneParser.T__1);
	            this.state = 126;
	            this.type_();
	            this.state = 127;
	            this.match(cayenneParser.T__14);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 129;
	            this.lblid();
	            this.state = 130;
	            this.match(cayenneParser.T__1);
	            this.state = 131;
	            this.type_();
	            this.state = 132;
	            this.match(cayenneParser.T__15);
	            this.state = 133;
	            this.expr(0);
	            this.state = 134;
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
	    this.enterRule(localctx, 8, cayenneParser.RULE_defn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        this.vis();
	        this.state = 139;
	        this.lblid();
	        this.state = 140;
	        this.match(cayenneParser.T__1);
	        this.state = 141;
	        this.type_();
	        this.state = 142;
	        this.match(cayenneParser.T__15);
	        this.state = 143;
	        this.expr(0);
	        this.state = 144;
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
	    this.enterRule(localctx, 10, cayenneParser.RULE_vis);
	    try {
	        this.state = 149;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 146;
	            this.match(cayenneParser.T__16);
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 147;
	            this.match(cayenneParser.T__17);
	            this.state = 148;
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
	    this.enterRule(localctx, 12, cayenneParser.RULE_abs_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        _la = this._input.LA(1);
	        if(!(_la===19 || _la===20)) {
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
	    this.enterRule(localctx, 14, cayenneParser.RULE_type_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
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
	    this.enterRule(localctx, 16, cayenneParser.RULE_varid);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
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
	    this.enterRule(localctx, 18, cayenneParser.RULE_conid);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
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
	    this.enterRule(localctx, 20, cayenneParser.RULE_lblid);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 159;
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
	    this.enterRule(localctx, 22, cayenneParser.RULE_id_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 161;
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

cayenneParser.RULE_file_ = 0;
cayenneParser.RULE_expr = 1;
cayenneParser.RULE_arm = 2;
cayenneParser.RULE_sign = 3;
cayenneParser.RULE_defn = 4;
cayenneParser.RULE_vis = 5;
cayenneParser.RULE_abs_ = 6;
cayenneParser.RULE_type_ = 7;
cayenneParser.RULE_varid = 8;
cayenneParser.RULE_conid = 9;
cayenneParser.RULE_lblid = 10;
cayenneParser.RULE_id_ = 11;

class File_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cayenneParser.RULE_file_;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	EOF() {
	    return this.getToken(cayenneParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof cayenneListener ) {
	        listener.enterFile_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cayenneListener ) {
	        listener.exitFile_(this);
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




cayenneParser.File_Context = File_Context; 
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

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
