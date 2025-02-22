// Generated from ./ctl/ctl.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ctlListener from './ctlListener.js';
const serializedATN = [4,1,20,43,2,0,7,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,
1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,
1,0,1,0,1,0,1,0,3,0,33,8,0,1,0,1,0,1,0,5,0,38,8,0,10,0,12,0,41,9,0,1,0,0,
1,0,1,0,0,2,1,0,7,9,1,0,13,16,50,0,32,1,0,0,0,2,3,6,0,-1,0,3,33,5,17,0,0,
4,33,5,18,0,0,5,33,5,5,0,0,6,7,5,10,0,0,7,8,7,0,0,0,8,33,3,0,0,7,9,10,5,
11,0,0,10,11,7,0,0,0,11,33,3,0,0,6,12,13,5,10,0,0,13,14,5,1,0,0,14,15,3,
0,0,0,15,16,5,6,0,0,16,17,3,0,0,0,17,18,5,2,0,0,18,33,1,0,0,0,19,20,5,11,
0,0,20,21,5,1,0,0,21,22,3,0,0,0,22,23,5,6,0,0,23,24,3,0,0,0,24,25,5,2,0,
0,25,33,1,0,0,0,26,27,5,3,0,0,27,28,3,0,0,0,28,29,5,4,0,0,29,33,1,0,0,0,
30,31,5,19,0,0,31,33,3,0,0,1,32,2,1,0,0,0,32,4,1,0,0,0,32,5,1,0,0,0,32,6,
1,0,0,0,32,9,1,0,0,0,32,12,1,0,0,0,32,19,1,0,0,0,32,26,1,0,0,0,32,30,1,0,
0,0,33,39,1,0,0,0,34,35,10,2,0,0,35,36,7,1,0,0,36,38,3,0,0,3,37,34,1,0,0,
0,38,41,1,0,0,0,39,37,1,0,0,0,39,40,1,0,0,0,40,1,1,0,0,0,41,39,1,0,0,0,2,
32,39];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ctlParser extends antlr4.Parser {

    static grammarFileName = "ctl.g4";
    static literalNames = [ null, "'['", "']'", "'('", "')'", null, "'U'", 
                            "'G'", "'F'", "'X'", "'A'", "'E'", "'\\u2205'", 
                            "'\\u21D4'", "'\\u21D2'", "'\\u2227'", "'\\u2228'", 
                            "'\\u22A4'", "'\\u22A5'", "'\\u2310'" ];
    static symbolicNames = [ null, null, null, null, null, "ATOMIC", "CTL_UNTIL", 
                             "CTL_GLOBALLY", "CTL_FINALLY", "CTL_NEXT", 
                             "CTL_INEVITABLE", "CTL_EXISTS", "CTL_PROPOSITION", 
                             "CTL_LEFT_RIGHT_DOUBLE_ARROW", "CTL_RIGHTWARDS_DOUBLE_ARROW", 
                             "CTL_AND", "CTL_OR", "CTL_DOWNTACK", "CTL_UPTACK", 
                             "CTL_NOT", "WS" ];
    static ruleNames = [ "proposition" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ctlParser.ruleNames;
        this.literalNames = ctlParser.literalNames;
        this.symbolicNames = ctlParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 0:
    	    		return this.proposition_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    proposition_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };



	proposition(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new PropositionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 0;
	    this.enterRecursionRule(localctx, 0, ctlParser.RULE_proposition, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 3;
	            this.match(ctlParser.CTL_DOWNTACK);
	            break;

	        case 2:
	            this.state = 4;
	            this.match(ctlParser.CTL_UPTACK);
	            break;

	        case 3:
	            this.state = 5;
	            this.match(ctlParser.ATOMIC);
	            break;

	        case 4:
	            this.state = 6;
	            this.match(ctlParser.CTL_INEVITABLE);
	            this.state = 7;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ctlParser.CTL_GLOBALLY) | (1 << ctlParser.CTL_FINALLY) | (1 << ctlParser.CTL_NEXT))) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 8;
	            this.proposition(7);
	            break;

	        case 5:
	            this.state = 9;
	            this.match(ctlParser.CTL_EXISTS);
	            this.state = 10;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ctlParser.CTL_GLOBALLY) | (1 << ctlParser.CTL_FINALLY) | (1 << ctlParser.CTL_NEXT))) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 11;
	            this.proposition(6);
	            break;

	        case 6:
	            this.state = 12;
	            this.match(ctlParser.CTL_INEVITABLE);
	            this.state = 13;
	            this.match(ctlParser.T__0);
	            this.state = 14;
	            this.proposition(0);
	            this.state = 15;
	            this.match(ctlParser.CTL_UNTIL);
	            this.state = 16;
	            this.proposition(0);
	            this.state = 17;
	            this.match(ctlParser.T__1);
	            break;

	        case 7:
	            this.state = 19;
	            this.match(ctlParser.CTL_EXISTS);
	            this.state = 20;
	            this.match(ctlParser.T__0);
	            this.state = 21;
	            this.proposition(0);
	            this.state = 22;
	            this.match(ctlParser.CTL_UNTIL);
	            this.state = 23;
	            this.proposition(0);
	            this.state = 24;
	            this.match(ctlParser.T__1);
	            break;

	        case 8:
	            this.state = 26;
	            this.match(ctlParser.T__2);
	            this.state = 27;
	            this.proposition(0);
	            this.state = 28;
	            this.match(ctlParser.T__3);
	            break;

	        case 9:
	            this.state = 30;
	            this.match(ctlParser.CTL_NOT);
	            this.state = 31;
	            this.proposition(1);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 39;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new PropositionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, ctlParser.RULE_proposition);
	                this.state = 34;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 35;
	                _la = this._input.LA(1);
	                if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ctlParser.CTL_LEFT_RIGHT_DOUBLE_ARROW) | (1 << ctlParser.CTL_RIGHTWARDS_DOUBLE_ARROW) | (1 << ctlParser.CTL_AND) | (1 << ctlParser.CTL_OR))) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 36;
	                this.proposition(3); 
	            }
	            this.state = 41;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
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

ctlParser.EOF = antlr4.Token.EOF;
ctlParser.T__0 = 1;
ctlParser.T__1 = 2;
ctlParser.T__2 = 3;
ctlParser.T__3 = 4;
ctlParser.ATOMIC = 5;
ctlParser.CTL_UNTIL = 6;
ctlParser.CTL_GLOBALLY = 7;
ctlParser.CTL_FINALLY = 8;
ctlParser.CTL_NEXT = 9;
ctlParser.CTL_INEVITABLE = 10;
ctlParser.CTL_EXISTS = 11;
ctlParser.CTL_PROPOSITION = 12;
ctlParser.CTL_LEFT_RIGHT_DOUBLE_ARROW = 13;
ctlParser.CTL_RIGHTWARDS_DOUBLE_ARROW = 14;
ctlParser.CTL_AND = 15;
ctlParser.CTL_OR = 16;
ctlParser.CTL_DOWNTACK = 17;
ctlParser.CTL_UPTACK = 18;
ctlParser.CTL_NOT = 19;
ctlParser.WS = 20;

ctlParser.RULE_proposition = 0;

class PropositionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ctlParser.RULE_proposition;
    }

	CTL_DOWNTACK() {
	    return this.getToken(ctlParser.CTL_DOWNTACK, 0);
	};

	CTL_UPTACK() {
	    return this.getToken(ctlParser.CTL_UPTACK, 0);
	};

	ATOMIC() {
	    return this.getToken(ctlParser.ATOMIC, 0);
	};

	CTL_INEVITABLE() {
	    return this.getToken(ctlParser.CTL_INEVITABLE, 0);
	};

	proposition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PropositionContext);
	    } else {
	        return this.getTypedRuleContext(PropositionContext,i);
	    }
	};

	CTL_NEXT() {
	    return this.getToken(ctlParser.CTL_NEXT, 0);
	};

	CTL_FINALLY() {
	    return this.getToken(ctlParser.CTL_FINALLY, 0);
	};

	CTL_GLOBALLY() {
	    return this.getToken(ctlParser.CTL_GLOBALLY, 0);
	};

	CTL_EXISTS() {
	    return this.getToken(ctlParser.CTL_EXISTS, 0);
	};

	CTL_UNTIL() {
	    return this.getToken(ctlParser.CTL_UNTIL, 0);
	};

	CTL_NOT() {
	    return this.getToken(ctlParser.CTL_NOT, 0);
	};

	CTL_AND() {
	    return this.getToken(ctlParser.CTL_AND, 0);
	};

	CTL_OR() {
	    return this.getToken(ctlParser.CTL_OR, 0);
	};

	CTL_RIGHTWARDS_DOUBLE_ARROW() {
	    return this.getToken(ctlParser.CTL_RIGHTWARDS_DOUBLE_ARROW, 0);
	};

	CTL_LEFT_RIGHT_DOUBLE_ARROW() {
	    return this.getToken(ctlParser.CTL_LEFT_RIGHT_DOUBLE_ARROW, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ctlListener ) {
	        listener.enterProposition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ctlListener ) {
	        listener.exitProposition(this);
		}
	}


}




ctlParser.PropositionContext = PropositionContext; 
