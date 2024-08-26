// Generated from Resources/Parsers/ltl/ltl.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ltlListener from './ltlListener.js';
const serializedATN = [4,1,16,28,2,0,7,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,
1,0,1,0,1,0,1,0,3,0,15,8,0,1,0,1,0,1,0,1,0,1,0,1,0,5,0,23,8,0,10,0,12,0,
26,9,0,1,0,0,1,0,1,0,0,3,1,0,7,9,1,0,12,14,2,0,6,6,10,11,33,0,14,1,0,0,0,
2,3,6,0,-1,0,3,15,5,1,0,0,4,15,5,2,0,0,5,15,5,5,0,0,6,7,5,3,0,0,7,8,3,0,
0,0,8,9,5,4,0,0,9,15,1,0,0,0,10,11,5,15,0,0,11,15,3,0,0,3,12,13,7,0,0,0,
13,15,3,0,0,2,14,2,1,0,0,0,14,4,1,0,0,0,14,5,1,0,0,0,14,6,1,0,0,0,14,10,
1,0,0,0,14,12,1,0,0,0,15,24,1,0,0,0,16,17,10,4,0,0,17,18,7,1,0,0,18,23,3,
0,0,5,19,20,10,1,0,0,20,21,7,2,0,0,21,23,3,0,0,2,22,16,1,0,0,0,22,19,1,0,
0,0,23,26,1,0,0,0,24,22,1,0,0,0,24,25,1,0,0,0,25,1,1,0,0,0,26,24,1,0,0,0,
3,14,22,24];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class ltlParser extends antlr4.Parser {

    static grammarFileName = "ltl.g4";
    static literalNames = [ null, "'true'", "'false'", "'('", "')'", null, 
                            "'U'", "'G'", "'F'", "'X'", "'W'", "'R'", "'\\u2192'", 
                            "'\\u2227'", "'\\u2228'", "'\\u2310'" ];
    static symbolicNames = [ null, null, null, null, null, "ATOMIC", "LTL_UNTIL", 
                             "LTL_GLOBALLY", "LTL_FINALLY", "LTL_NEXT", 
                             "LTL_WEAK", "LTL_RELEASE", "LTL_RIGHTWARDS_SINGLE_ARROW", 
                             "LTL_AND", "LTL_OR", "LTL_NOT", "WS" ];
    static ruleNames = [ "proposition" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ltlParser.ruleNames;
        this.literalNames = ltlParser.literalNames;
        this.symbolicNames = ltlParser.symbolicNames;
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
    			return this.precpred(this._ctx, 4);
    		case 1:
    			return this.precpred(this._ctx, 1);
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
	    this.enterRecursionRule(localctx, 0, ltlParser.RULE_proposition, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ltlParser.T__0:
	            this.state = 3;
	            this.match(ltlParser.T__0);
	            break;
	        case ltlParser.T__1:
	            this.state = 4;
	            this.match(ltlParser.T__1);
	            break;
	        case ltlParser.ATOMIC:
	            this.state = 5;
	            this.match(ltlParser.ATOMIC);
	            break;
	        case ltlParser.T__2:
	            this.state = 6;
	            this.match(ltlParser.T__2);
	            this.state = 7;
	            this.proposition(0);
	            this.state = 8;
	            this.match(ltlParser.T__3);
	            break;
	        case ltlParser.LTL_NOT:
	            this.state = 10;
	            this.match(ltlParser.LTL_NOT);
	            this.state = 11;
	            this.proposition(3);
	            break;
	        case ltlParser.LTL_GLOBALLY:
	        case ltlParser.LTL_FINALLY:
	        case ltlParser.LTL_NEXT:
	            this.state = 12;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ltlParser.LTL_GLOBALLY) | (1 << ltlParser.LTL_FINALLY) | (1 << ltlParser.LTL_NEXT))) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 13;
	            this.proposition(2);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 24;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 22;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new PropositionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ltlParser.RULE_proposition);
	                    this.state = 16;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 17;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ltlParser.LTL_RIGHTWARDS_SINGLE_ARROW) | (1 << ltlParser.LTL_AND) | (1 << ltlParser.LTL_OR))) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 18;
	                    this.proposition(5);
	                    break;

	                case 2:
	                    localctx = new PropositionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ltlParser.RULE_proposition);
	                    this.state = 19;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 20;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ltlParser.LTL_UNTIL) | (1 << ltlParser.LTL_WEAK) | (1 << ltlParser.LTL_RELEASE))) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 21;
	                    this.proposition(2);
	                    break;

	                } 
	            }
	            this.state = 26;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
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

ltlParser.EOF = antlr4.Token.EOF;
ltlParser.T__0 = 1;
ltlParser.T__1 = 2;
ltlParser.T__2 = 3;
ltlParser.T__3 = 4;
ltlParser.ATOMIC = 5;
ltlParser.LTL_UNTIL = 6;
ltlParser.LTL_GLOBALLY = 7;
ltlParser.LTL_FINALLY = 8;
ltlParser.LTL_NEXT = 9;
ltlParser.LTL_WEAK = 10;
ltlParser.LTL_RELEASE = 11;
ltlParser.LTL_RIGHTWARDS_SINGLE_ARROW = 12;
ltlParser.LTL_AND = 13;
ltlParser.LTL_OR = 14;
ltlParser.LTL_NOT = 15;
ltlParser.WS = 16;

ltlParser.RULE_proposition = 0;

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
        this.ruleIndex = ltlParser.RULE_proposition;
    }

	ATOMIC() {
	    return this.getToken(ltlParser.ATOMIC, 0);
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

	LTL_NOT() {
	    return this.getToken(ltlParser.LTL_NOT, 0);
	};

	LTL_GLOBALLY() {
	    return this.getToken(ltlParser.LTL_GLOBALLY, 0);
	};

	LTL_FINALLY() {
	    return this.getToken(ltlParser.LTL_FINALLY, 0);
	};

	LTL_NEXT() {
	    return this.getToken(ltlParser.LTL_NEXT, 0);
	};

	LTL_AND() {
	    return this.getToken(ltlParser.LTL_AND, 0);
	};

	LTL_OR() {
	    return this.getToken(ltlParser.LTL_OR, 0);
	};

	LTL_RIGHTWARDS_SINGLE_ARROW() {
	    return this.getToken(ltlParser.LTL_RIGHTWARDS_SINGLE_ARROW, 0);
	};

	LTL_UNTIL() {
	    return this.getToken(ltlParser.LTL_UNTIL, 0);
	};

	LTL_WEAK() {
	    return this.getToken(ltlParser.LTL_WEAK, 0);
	};

	LTL_RELEASE() {
	    return this.getToken(ltlParser.LTL_RELEASE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ltlListener ) {
	        listener.enterProposition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ltlListener ) {
	        listener.exitProposition(this);
		}
	}


}




ltlParser.PropositionContext = PropositionContext; 
