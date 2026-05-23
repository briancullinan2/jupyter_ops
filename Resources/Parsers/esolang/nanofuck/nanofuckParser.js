// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/esolang/nanofuck/nanofuck.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import nanofuckListener from './nanofuckListener.js';
const serializedATN = [4,1,4,24,2,0,7,0,2,1,7,1,1,0,1,0,1,0,1,1,1,1,1,1,
1,1,3,1,12,8,1,1,1,3,1,15,8,1,1,1,1,1,5,1,19,8,1,10,1,12,1,22,9,1,1,1,0,
1,2,2,0,2,0,0,24,0,4,1,0,0,0,2,14,1,0,0,0,4,5,3,2,1,0,5,6,5,0,0,1,6,1,1,
0,0,0,7,8,6,1,-1,0,8,15,5,1,0,0,9,11,5,2,0,0,10,12,3,2,1,0,11,10,1,0,0,0,
11,12,1,0,0,0,12,13,1,0,0,0,13,15,5,3,0,0,14,7,1,0,0,0,14,9,1,0,0,0,15,20,
1,0,0,0,16,17,10,1,0,0,17,19,3,2,1,2,18,16,1,0,0,0,19,22,1,0,0,0,20,18,1,
0,0,0,20,21,1,0,0,0,21,3,1,0,0,0,22,20,1,0,0,0,3,11,14,20];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class nanofuckParser extends antlr4.Parser {

    static grammarFileName = "nanofuck.g4";
    static literalNames = [ null, "'*'", "'{'", "'}'" ];
    static symbolicNames = [ null, null, null, null, "WS" ];
    static ruleNames = [ "file_", "exp" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = nanofuckParser.ruleNames;
        this.literalNames = nanofuckParser.literalNames;
        this.symbolicNames = nanofuckParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.exp_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    exp_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	file_() {
	    let localctx = new File_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, nanofuckParser.RULE_file_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 4;
	        this.exp(0);
	        this.state = 5;
	        this.match(nanofuckParser.EOF);
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


	exp(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, nanofuckParser.RULE_exp, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.state = 8;
	            this.match(nanofuckParser.T__0);
	            break;
	        case 2:
	            this.state = 9;
	            this.match(nanofuckParser.T__1);
	            this.state = 11;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===1 || _la===2) {
	                this.state = 10;
	                this.exp(0);
	            }

	            this.state = 13;
	            this.match(nanofuckParser.T__2);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 20;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ExpContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, nanofuckParser.RULE_exp);
	                this.state = 16;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 17;
	                this.exp(2); 
	            }
	            this.state = 22;
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

nanofuckParser.EOF = antlr4.Token.EOF;
nanofuckParser.T__0 = 1;
nanofuckParser.T__1 = 2;
nanofuckParser.T__2 = 3;
nanofuckParser.WS = 4;

nanofuckParser.RULE_file_ = 0;
nanofuckParser.RULE_exp = 1;

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
        this.ruleIndex = nanofuckParser.RULE_file_;
    }

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	EOF() {
	    return this.getToken(nanofuckParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof nanofuckListener ) {
	        listener.enterFile_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof nanofuckListener ) {
	        listener.exitFile_(this);
		}
	}


}



class ExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = nanofuckParser.RULE_exp;
    }

	exp = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpContext);
	    } else {
	        return this.getTypedRuleContext(ExpContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof nanofuckListener ) {
	        listener.enterExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof nanofuckListener ) {
	        listener.exitExp(this);
		}
	}


}




nanofuckParser.File_Context = File_Context; 
nanofuckParser.ExpContext = ExpContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
