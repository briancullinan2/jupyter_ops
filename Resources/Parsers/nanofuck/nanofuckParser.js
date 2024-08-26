// Generated from Resources/Parsers/nanofuck/nanofuck.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import nanofuckListener from './nanofuckListener.js';
const serializedATN = [4,1,4,19,2,0,7,0,1,0,1,0,1,0,1,0,3,0,7,8,0,1,0,3,
0,10,8,0,1,0,1,0,5,0,14,8,0,10,0,12,0,17,9,0,1,0,0,1,0,1,0,0,0,20,0,9,1,
0,0,0,2,3,6,0,-1,0,3,10,5,1,0,0,4,6,5,2,0,0,5,7,3,0,0,0,6,5,1,0,0,0,6,7,
1,0,0,0,7,8,1,0,0,0,8,10,5,3,0,0,9,2,1,0,0,0,9,4,1,0,0,0,10,15,1,0,0,0,11,
12,10,1,0,0,12,14,3,0,0,2,13,11,1,0,0,0,14,17,1,0,0,0,15,13,1,0,0,0,15,16,
1,0,0,0,16,1,1,0,0,0,17,15,1,0,0,0,3,6,9,15];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class nanofuckParser extends antlr4.Parser {

    static grammarFileName = "nanofuck.g4";
    static literalNames = [ null, "'*'", "'{'", "'}'" ];
    static symbolicNames = [ null, null, null, null, "WS" ];
    static ruleNames = [ "exp" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = nanofuckParser.ruleNames;
        this.literalNames = nanofuckParser.literalNames;
        this.symbolicNames = nanofuckParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 0:
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



	exp(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 0;
	    this.enterRecursionRule(localctx, 0, nanofuckParser.RULE_exp, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 9;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case nanofuckParser.T__0:
	            this.state = 3;
	            this.match(nanofuckParser.T__0);
	            break;
	        case nanofuckParser.T__1:
	            this.state = 4;
	            this.match(nanofuckParser.T__1);
	            this.state = 6;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===nanofuckParser.T__0 || _la===nanofuckParser.T__1) {
	                this.state = 5;
	                this.exp(0);
	            }

	            this.state = 8;
	            this.match(nanofuckParser.T__2);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 15;
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
	                this.state = 11;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 12;
	                this.exp(2); 
	            }
	            this.state = 17;
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

nanofuckParser.RULE_exp = 0;

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




nanofuckParser.ExpContext = ExpContext; 
