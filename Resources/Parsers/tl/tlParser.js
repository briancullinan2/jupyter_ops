// Generated from Resources/Parsers/tl/tl.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import tlListener from './tlListener.js';
const serializedATN = [4,1,9,24,2,0,7,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,
1,0,1,0,1,0,3,0,14,8,0,1,0,1,0,1,0,5,0,19,8,0,10,0,12,0,22,9,0,1,0,0,1,0,
1,0,0,1,1,0,4,5,28,0,13,1,0,0,0,2,14,6,0,-1,0,3,14,5,7,0,0,4,14,5,3,0,0,
5,6,5,8,0,0,6,14,3,0,0,4,7,8,7,0,0,0,8,14,3,0,0,2,9,10,5,1,0,0,10,11,3,0,
0,0,11,12,5,2,0,0,12,14,1,0,0,0,13,2,1,0,0,0,13,3,1,0,0,0,13,4,1,0,0,0,13,
5,1,0,0,0,13,7,1,0,0,0,13,9,1,0,0,0,14,20,1,0,0,0,15,16,10,3,0,0,16,17,5,
6,0,0,17,19,3,0,0,4,18,15,1,0,0,0,19,22,1,0,0,0,20,18,1,0,0,0,20,21,1,0,
0,0,21,1,1,0,0,0,22,20,1,0,0,0,2,13,20];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class tlParser extends antlr4.Parser {

    static grammarFileName = "tl.g4";
    static literalNames = [ null, "'('", "')'", null, "'G'", "'H'", "'\\u2228'", 
                            "'\\u22A5'", "'\\u2310'" ];
    static symbolicNames = [ null, null, null, "ATOMIC", "TL_ALWAYS", "TL_WAS", 
                             "TL_OR", "TL_UPTACK", "TL_NOT", "WS" ];
    static ruleNames = [ "proposition" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = tlParser.ruleNames;
        this.literalNames = tlParser.literalNames;
        this.symbolicNames = tlParser.symbolicNames;
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
    			return this.precpred(this._ctx, 3);
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
	    this.enterRecursionRule(localctx, 0, tlParser.RULE_proposition, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 13;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            break;

	        case 2:
	            this.state = 3;
	            this.match(tlParser.TL_UPTACK);
	            break;

	        case 3:
	            this.state = 4;
	            this.match(tlParser.ATOMIC);
	            break;

	        case 4:
	            this.state = 5;
	            this.match(tlParser.TL_NOT);
	            this.state = 6;
	            this.proposition(4);
	            break;

	        case 5:
	            this.state = 7;
	            _la = this._input.LA(1);
	            if(!(_la===tlParser.TL_ALWAYS || _la===tlParser.TL_WAS)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 8;
	            this.proposition(2);
	            break;

	        case 6:
	            this.state = 9;
	            this.match(tlParser.T__0);
	            this.state = 10;
	            this.proposition(0);
	            this.state = 11;
	            this.match(tlParser.T__1);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 20;
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
	                this.state = 15;
	                if (!( this.precpred(this._ctx, 3))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                }
	                this.state = 16;
	                this.match(tlParser.TL_OR);
	                this.state = 17;
	                this.proposition(4); 
	            }
	            this.state = 22;
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

tlParser.RULE_proposition = 0;

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




tlParser.PropositionContext = PropositionContext; 
