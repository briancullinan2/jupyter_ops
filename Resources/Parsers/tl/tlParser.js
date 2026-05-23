// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/tl/tl.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import tlListener from './tlListener.js';
const serializedATN = [4,1,9,29,2,0,7,0,2,1,7,1,1,0,1,0,1,0,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,19,8,1,1,1,1,1,1,1,5,1,24,8,1,10,1,12,
1,27,9,1,1,1,0,1,2,2,0,2,0,1,1,0,4,5,32,0,4,1,0,0,0,2,18,1,0,0,0,4,5,3,2,
1,0,5,6,5,0,0,1,6,1,1,0,0,0,7,19,6,1,-1,0,8,19,5,7,0,0,9,19,5,3,0,0,10,11,
5,8,0,0,11,19,3,2,1,4,12,13,7,0,0,0,13,19,3,2,1,2,14,15,5,1,0,0,15,16,3,
2,1,0,16,17,5,2,0,0,17,19,1,0,0,0,18,7,1,0,0,0,18,8,1,0,0,0,18,9,1,0,0,0,
18,10,1,0,0,0,18,12,1,0,0,0,18,14,1,0,0,0,19,25,1,0,0,0,20,21,10,3,0,0,21,
22,5,6,0,0,22,24,3,2,1,4,23,20,1,0,0,0,24,27,1,0,0,0,25,23,1,0,0,0,25,26,
1,0,0,0,26,3,1,0,0,0,27,25,1,0,0,0,2,18,25];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class tlParser extends antlr4.Parser {

    static grammarFileName = "tl.g4";
    static literalNames = [ null, "'('", "')'", null, "'G'", "'H'", "'\\u2228'", 
                            "'\\u22A5'", "'\\u2310'" ];
    static symbolicNames = [ null, null, null, "ATOMIC", "TL_ALWAYS", "TL_WAS", 
                             "TL_OR", "TL_UPTACK", "TL_NOT", "WS" ];
    static ruleNames = [ "file_", "proposition" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = tlParser.ruleNames;
        this.literalNames = tlParser.literalNames;
        this.symbolicNames = tlParser.symbolicNames;
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
    			return this.precpred(this._ctx, 3);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	file_() {
	    let localctx = new File_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, tlParser.RULE_file_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 4;
	        this.proposition(0);
	        this.state = 5;
	        this.match(tlParser.EOF);
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
	    this.enterRecursionRule(localctx, 2, tlParser.RULE_proposition, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            break;

	        case 2:
	            this.state = 8;
	            this.match(tlParser.TL_UPTACK);
	            break;

	        case 3:
	            this.state = 9;
	            this.match(tlParser.ATOMIC);
	            break;

	        case 4:
	            this.state = 10;
	            this.match(tlParser.TL_NOT);
	            this.state = 11;
	            this.proposition(4);
	            break;

	        case 5:
	            this.state = 12;
	            _la = this._input.LA(1);
	            if(!(_la===4 || _la===5)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 13;
	            this.proposition(2);
	            break;

	        case 6:
	            this.state = 14;
	            this.match(tlParser.T__0);
	            this.state = 15;
	            this.proposition(0);
	            this.state = 16;
	            this.match(tlParser.T__1);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 25;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new PropositionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, tlParser.RULE_proposition);
	                this.state = 20;
	                if (!( this.precpred(this._ctx, 3))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                }
	                this.state = 21;
	                this.match(tlParser.TL_OR);
	                this.state = 22;
	                this.proposition(4); 
	            }
	            this.state = 27;
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

tlParser.EOF = antlr4.Token.EOF;
tlParser.T__0 = 1;
tlParser.T__1 = 2;
tlParser.ATOMIC = 3;
tlParser.TL_ALWAYS = 4;
tlParser.TL_WAS = 5;
tlParser.TL_OR = 6;
tlParser.TL_UPTACK = 7;
tlParser.TL_NOT = 8;
tlParser.WS = 9;

tlParser.RULE_file_ = 0;
tlParser.RULE_proposition = 1;

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
        this.ruleIndex = tlParser.RULE_file_;
    }

	proposition() {
	    return this.getTypedRuleContext(PropositionContext,0);
	};

	EOF() {
	    return this.getToken(tlParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tlListener ) {
	        listener.enterFile_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tlListener ) {
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
        this.ruleIndex = tlParser.RULE_proposition;
    }

	TL_UPTACK() {
	    return this.getToken(tlParser.TL_UPTACK, 0);
	};

	ATOMIC() {
	    return this.getToken(tlParser.ATOMIC, 0);
	};

	TL_NOT() {
	    return this.getToken(tlParser.TL_NOT, 0);
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

	TL_ALWAYS() {
	    return this.getToken(tlParser.TL_ALWAYS, 0);
	};

	TL_WAS() {
	    return this.getToken(tlParser.TL_WAS, 0);
	};

	TL_OR() {
	    return this.getToken(tlParser.TL_OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tlListener ) {
	        listener.enterProposition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tlListener ) {
	        listener.exitProposition(this);
		}
	}


}




tlParser.File_Context = File_Context; 
tlParser.PropositionContext = PropositionContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
