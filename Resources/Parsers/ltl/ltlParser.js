// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/ltl/ltl.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ltlListener from './ltlListener.js';
const serializedATN = [4,1,16,33,2,0,7,0,2,1,7,1,1,0,1,0,1,0,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,20,8,1,1,1,1,1,1,1,1,1,1,1,1,1,5,
1,28,8,1,10,1,12,1,31,9,1,1,1,0,1,2,2,0,2,0,3,1,0,7,9,1,0,12,14,2,0,6,6,
10,11,37,0,4,1,0,0,0,2,19,1,0,0,0,4,5,3,2,1,0,5,6,5,0,0,1,6,1,1,0,0,0,7,
8,6,1,-1,0,8,20,5,1,0,0,9,20,5,2,0,0,10,20,5,5,0,0,11,12,5,3,0,0,12,13,3,
2,1,0,13,14,5,4,0,0,14,20,1,0,0,0,15,16,5,15,0,0,16,20,3,2,1,3,17,18,7,0,
0,0,18,20,3,2,1,2,19,7,1,0,0,0,19,9,1,0,0,0,19,10,1,0,0,0,19,11,1,0,0,0,
19,15,1,0,0,0,19,17,1,0,0,0,20,29,1,0,0,0,21,22,10,4,0,0,22,23,7,1,0,0,23,
28,3,2,1,5,24,25,10,1,0,0,25,26,7,2,0,0,26,28,3,2,1,2,27,21,1,0,0,0,27,24,
1,0,0,0,28,31,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,3,1,0,0,0,31,29,1,0,
0,0,3,19,27,29];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ltlParser extends antlr4.Parser {

    static grammarFileName = "ltl.g4";
    static literalNames = [ null, "'true'", "'false'", "'('", "')'", null, 
                            "'U'", "'G'", "'F'", "'X'", "'W'", "'R'", "'\\u2192'", 
                            "'\\u2227'", "'\\u2228'", "'\\u2310'" ];
    static symbolicNames = [ null, null, null, null, null, "ATOMIC", "LTL_UNTIL", 
                             "LTL_GLOBALLY", "LTL_FINALLY", "LTL_NEXT", 
                             "LTL_WEAK", "LTL_RELEASE", "LTL_RIGHTWARDS_SINGLE_ARROW", 
                             "LTL_AND", "LTL_OR", "LTL_NOT", "WS" ];
    static ruleNames = [ "file_", "proposition" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ltlParser.ruleNames;
        this.literalNames = ltlParser.literalNames;
        this.symbolicNames = ltlParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
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




	file_() {
	    let localctx = new File_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ltlParser.RULE_file_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 4;
	        this.proposition(0);
	        this.state = 5;
	        this.match(ltlParser.EOF);
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


	proposition(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new PropositionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, ltlParser.RULE_proposition, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.state = 8;
	            this.match(ltlParser.T__0);
	            break;
	        case 2:
	            this.state = 9;
	            this.match(ltlParser.T__1);
	            break;
	        case 5:
	            this.state = 10;
	            this.match(ltlParser.ATOMIC);
	            break;
	        case 3:
	            this.state = 11;
	            this.match(ltlParser.T__2);
	            this.state = 12;
	            this.proposition(0);
	            this.state = 13;
	            this.match(ltlParser.T__3);
	            break;
	        case 15:
	            this.state = 15;
	            this.match(ltlParser.LTL_NOT);
	            this.state = 16;
	            this.proposition(3);
	            break;
	        case 7:
	        case 8:
	        case 9:
	            this.state = 17;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 896) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 18;
	            this.proposition(2);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 29;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 27;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new PropositionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ltlParser.RULE_proposition);
	                    this.state = 21;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 22;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 28672) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 23;
	                    this.proposition(5);
	                    break;

	                case 2:
	                    localctx = new PropositionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ltlParser.RULE_proposition);
	                    this.state = 24;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 25;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 3136) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 26;
	                    this.proposition(2);
	                    break;

	                } 
	            }
	            this.state = 31;
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

ltlParser.RULE_file_ = 0;
ltlParser.RULE_proposition = 1;

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
        this.ruleIndex = ltlParser.RULE_file_;
    }

	proposition() {
	    return this.getTypedRuleContext(PropositionContext,0);
	};

	EOF() {
	    return this.getToken(ltlParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ltlListener ) {
	        listener.enterFile_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ltlListener ) {
	        listener.exitFile_(this);
		}
	}


}



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




ltlParser.File_Context = File_Context; 
ltlParser.PropositionContext = PropositionContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
