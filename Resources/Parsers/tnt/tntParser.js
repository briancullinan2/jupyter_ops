// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/tnt/tnt.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import tntListener from './tntListener.js';
const serializedATN = [4,1,18,80,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,1,0,1,0,1,0,1,0,1,1,1,1,3,1,22,8,1,1,2,5,2,25,8,2,10,
2,12,2,28,9,2,1,2,1,2,1,3,5,3,33,8,3,10,3,12,3,36,9,3,1,3,1,3,5,3,40,8,3,
10,3,12,3,43,9,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
3,4,59,8,4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,67,8,4,10,4,12,4,70,9,4,1,5,1,5,1,
5,1,5,1,6,1,6,1,6,1,6,1,6,0,1,8,7,0,2,4,6,8,10,12,0,1,1,0,10,14,82,0,14,
1,0,0,0,2,21,1,0,0,0,4,26,1,0,0,0,6,34,1,0,0,0,8,58,1,0,0,0,10,71,1,0,0,
0,12,75,1,0,0,0,14,15,3,8,4,0,15,16,5,1,0,0,16,17,3,8,4,0,17,18,5,0,0,1,
18,1,1,0,0,0,19,22,3,4,2,0,20,22,3,6,3,0,21,19,1,0,0,0,21,20,1,0,0,0,22,
3,1,0,0,0,23,25,5,9,0,0,24,23,1,0,0,0,25,28,1,0,0,0,26,24,1,0,0,0,26,27,
1,0,0,0,27,29,1,0,0,0,28,26,1,0,0,0,29,30,5,8,0,0,30,5,1,0,0,0,31,33,5,9,
0,0,32,31,1,0,0,0,33,36,1,0,0,0,34,32,1,0,0,0,34,35,1,0,0,0,35,37,1,0,0,
0,36,34,1,0,0,0,37,41,7,0,0,0,38,40,5,15,0,0,39,38,1,0,0,0,40,43,1,0,0,0,
41,39,1,0,0,0,41,42,1,0,0,0,42,7,1,0,0,0,43,41,1,0,0,0,44,45,6,4,-1,0,45,
59,3,2,1,0,46,47,5,4,0,0,47,48,3,8,4,0,48,49,5,5,0,0,49,59,1,0,0,0,50,51,
5,6,0,0,51,59,3,8,4,3,52,53,3,10,5,0,53,54,3,8,4,2,54,59,1,0,0,0,55,56,3,
12,6,0,56,57,3,8,4,1,57,59,1,0,0,0,58,44,1,0,0,0,58,46,1,0,0,0,58,50,1,0,
0,0,58,52,1,0,0,0,58,55,1,0,0,0,59,68,1,0,0,0,60,61,10,6,0,0,61,62,5,2,0,
0,62,67,3,8,4,7,63,64,10,5,0,0,64,65,5,3,0,0,65,67,3,8,4,6,66,60,1,0,0,0,
66,63,1,0,0,0,67,70,1,0,0,0,68,66,1,0,0,0,68,69,1,0,0,0,69,9,1,0,0,0,70,
68,1,0,0,0,71,72,5,16,0,0,72,73,3,6,3,0,73,74,5,7,0,0,74,11,1,0,0,0,75,76,
5,17,0,0,76,77,3,6,3,0,77,78,5,7,0,0,78,13,1,0,0,0,7,21,26,34,41,58,66,68];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class tntParser extends antlr4.Parser {

    static grammarFileName = "tnt.g4";
    static literalNames = [ null, "'='", "'+'", "'*'", "'('", "')'", "'~'", 
                            "':'", "'0'", "'S'", "'a'", "'b'", "'c'", "'d'", 
                            "'e'", "'''", "'A'", "'E'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             "ZERO", "SUCCESSOR", "A", "B", "C", "D", "E", 
                             "PRIME", "FOREVERY", "EXISTS", "WS" ];
    static ruleNames = [ "equation", "atom", "number", "variable", "expression", 
                         "forevery", "exists" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = tntParser.ruleNames;
        this.literalNames = tntParser.literalNames;
        this.symbolicNames = tntParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 4:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 6);
    		case 1:
    			return this.precpred(this._ctx, 5);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	equation() {
	    let localctx = new EquationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, tntParser.RULE_equation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14;
	        this.expression(0);
	        this.state = 15;
	        this.match(tntParser.T__0);
	        this.state = 16;
	        this.expression(0);
	        this.state = 17;
	        this.match(tntParser.EOF);
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



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, tntParser.RULE_atom);
	    try {
	        this.state = 21;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 19;
	            this.number();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 20;
	            this.variable();
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



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, tntParser.RULE_number);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9) {
	            this.state = 23;
	            this.match(tntParser.SUCCESSOR);
	            this.state = 28;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 29;
	        this.match(tntParser.ZERO);
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



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, tntParser.RULE_variable);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9) {
	            this.state = 31;
	            this.match(tntParser.SUCCESSOR);
	            this.state = 36;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 37;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 31744) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 41;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 38;
	                this.match(tntParser.PRIME); 
	            }
	            this.state = 43;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
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


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 8;
	    this.enterRecursionRule(localctx, 8, tntParser.RULE_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	        case 12:
	        case 13:
	        case 14:
	            this.state = 45;
	            this.atom();
	            break;
	        case 4:
	            this.state = 46;
	            this.match(tntParser.T__3);
	            this.state = 47;
	            this.expression(0);
	            this.state = 48;
	            this.match(tntParser.T__4);
	            break;
	        case 6:
	            this.state = 50;
	            this.match(tntParser.T__5);
	            this.state = 51;
	            this.expression(3);
	            break;
	        case 16:
	            this.state = 52;
	            this.forevery();
	            this.state = 53;
	            this.expression(2);
	            break;
	        case 17:
	            this.state = 55;
	            this.exists();
	            this.state = 56;
	            this.expression(1);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 68;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 66;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, tntParser.RULE_expression);
	                    this.state = 60;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 61;
	                    this.match(tntParser.T__1);
	                    this.state = 62;
	                    this.expression(7);
	                    break;

	                case 2:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, tntParser.RULE_expression);
	                    this.state = 63;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 64;
	                    this.match(tntParser.T__2);
	                    this.state = 65;
	                    this.expression(6);
	                    break;

	                } 
	            }
	            this.state = 70;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
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



	forevery() {
	    let localctx = new ForeveryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, tntParser.RULE_forevery);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(tntParser.FOREVERY);
	        this.state = 72;
	        this.variable();
	        this.state = 73;
	        this.match(tntParser.T__6);
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



	exists() {
	    let localctx = new ExistsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, tntParser.RULE_exists);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this.match(tntParser.EXISTS);
	        this.state = 76;
	        this.variable();
	        this.state = 77;
	        this.match(tntParser.T__6);
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

tntParser.EOF = antlr4.Token.EOF;
tntParser.T__0 = 1;
tntParser.T__1 = 2;
tntParser.T__2 = 3;
tntParser.T__3 = 4;
tntParser.T__4 = 5;
tntParser.T__5 = 6;
tntParser.T__6 = 7;
tntParser.ZERO = 8;
tntParser.SUCCESSOR = 9;
tntParser.A = 10;
tntParser.B = 11;
tntParser.C = 12;
tntParser.D = 13;
tntParser.E = 14;
tntParser.PRIME = 15;
tntParser.FOREVERY = 16;
tntParser.EXISTS = 17;
tntParser.WS = 18;

tntParser.RULE_equation = 0;
tntParser.RULE_atom = 1;
tntParser.RULE_number = 2;
tntParser.RULE_variable = 3;
tntParser.RULE_expression = 4;
tntParser.RULE_forevery = 5;
tntParser.RULE_exists = 6;

class EquationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tntParser.RULE_equation;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	EOF() {
	    return this.getToken(tntParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tntListener ) {
	        listener.enterEquation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tntListener ) {
	        listener.exitEquation(this);
		}
	}


}



class AtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tntParser.RULE_atom;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tntListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tntListener ) {
	        listener.exitAtom(this);
		}
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tntParser.RULE_number;
    }

	ZERO() {
	    return this.getToken(tntParser.ZERO, 0);
	};

	SUCCESSOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tntParser.SUCCESSOR);
	    } else {
	        return this.getToken(tntParser.SUCCESSOR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof tntListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tntListener ) {
	        listener.exitNumber(this);
		}
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tntParser.RULE_variable;
    }

	A() {
	    return this.getToken(tntParser.A, 0);
	};

	B() {
	    return this.getToken(tntParser.B, 0);
	};

	C() {
	    return this.getToken(tntParser.C, 0);
	};

	D() {
	    return this.getToken(tntParser.D, 0);
	};

	E() {
	    return this.getToken(tntParser.E, 0);
	};

	SUCCESSOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tntParser.SUCCESSOR);
	    } else {
	        return this.getToken(tntParser.SUCCESSOR, i);
	    }
	};


	PRIME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tntParser.PRIME);
	    } else {
	        return this.getToken(tntParser.PRIME, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof tntListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tntListener ) {
	        listener.exitVariable(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tntParser.RULE_expression;
    }

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	forevery() {
	    return this.getTypedRuleContext(ForeveryContext,0);
	};

	exists() {
	    return this.getTypedRuleContext(ExistsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tntListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tntListener ) {
	        listener.exitExpression(this);
		}
	}


}



class ForeveryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tntParser.RULE_forevery;
    }

	FOREVERY() {
	    return this.getToken(tntParser.FOREVERY, 0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tntListener ) {
	        listener.enterForevery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tntListener ) {
	        listener.exitForevery(this);
		}
	}


}



class ExistsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tntParser.RULE_exists;
    }

	EXISTS() {
	    return this.getToken(tntParser.EXISTS, 0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tntListener ) {
	        listener.enterExists(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tntListener ) {
	        listener.exitExists(this);
		}
	}


}




tntParser.EquationContext = EquationContext; 
tntParser.AtomContext = AtomContext; 
tntParser.NumberContext = NumberContext; 
tntParser.VariableContext = VariableContext; 
tntParser.ExpressionContext = ExpressionContext; 
tntParser.ForeveryContext = ForeveryContext; 
tntParser.ExistsContext = ExistsContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
