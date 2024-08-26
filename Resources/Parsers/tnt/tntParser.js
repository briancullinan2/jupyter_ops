// Generated from Resources/Parsers/tnt/tnt.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import tntListener from './tntListener.js';
const serializedATN = [4,1,18,79,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,1,0,1,0,1,0,1,1,1,1,3,1,21,8,1,1,2,5,2,24,8,2,10,2,12,
2,27,9,2,1,2,1,2,1,3,5,3,32,8,3,10,3,12,3,35,9,3,1,3,1,3,5,3,39,8,3,10,3,
12,3,42,9,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,
58,8,4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,66,8,4,10,4,12,4,69,9,4,1,5,1,5,1,5,1,
5,1,6,1,6,1,6,1,6,1,6,0,1,8,7,0,2,4,6,8,10,12,0,1,1,0,10,14,81,0,14,1,0,
0,0,2,20,1,0,0,0,4,25,1,0,0,0,6,33,1,0,0,0,8,57,1,0,0,0,10,70,1,0,0,0,12,
74,1,0,0,0,14,15,3,8,4,0,15,16,5,1,0,0,16,17,3,8,4,0,17,1,1,0,0,0,18,21,
3,4,2,0,19,21,3,6,3,0,20,18,1,0,0,0,20,19,1,0,0,0,21,3,1,0,0,0,22,24,5,9,
0,0,23,22,1,0,0,0,24,27,1,0,0,0,25,23,1,0,0,0,25,26,1,0,0,0,26,28,1,0,0,
0,27,25,1,0,0,0,28,29,5,8,0,0,29,5,1,0,0,0,30,32,5,9,0,0,31,30,1,0,0,0,32,
35,1,0,0,0,33,31,1,0,0,0,33,34,1,0,0,0,34,36,1,0,0,0,35,33,1,0,0,0,36,40,
7,0,0,0,37,39,5,15,0,0,38,37,1,0,0,0,39,42,1,0,0,0,40,38,1,0,0,0,40,41,1,
0,0,0,41,7,1,0,0,0,42,40,1,0,0,0,43,44,6,4,-1,0,44,58,3,2,1,0,45,46,5,4,
0,0,46,47,3,8,4,0,47,48,5,5,0,0,48,58,1,0,0,0,49,50,5,6,0,0,50,58,3,8,4,
3,51,52,3,10,5,0,52,53,3,8,4,2,53,58,1,0,0,0,54,55,3,12,6,0,55,56,3,8,4,
1,56,58,1,0,0,0,57,43,1,0,0,0,57,45,1,0,0,0,57,49,1,0,0,0,57,51,1,0,0,0,
57,54,1,0,0,0,58,67,1,0,0,0,59,60,10,6,0,0,60,61,5,2,0,0,61,66,3,8,4,7,62,
63,10,5,0,0,63,64,5,3,0,0,64,66,3,8,4,6,65,59,1,0,0,0,65,62,1,0,0,0,66,69,
1,0,0,0,67,65,1,0,0,0,67,68,1,0,0,0,68,9,1,0,0,0,69,67,1,0,0,0,70,71,5,16,
0,0,71,72,3,6,3,0,72,73,5,7,0,0,73,11,1,0,0,0,74,75,5,17,0,0,75,76,3,6,3,
0,76,77,5,7,0,0,77,13,1,0,0,0,7,20,25,33,40,57,65,67];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

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

    get atn() {
        return atn;
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
	        this.state = 20;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 18;
	            this.number();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 19;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===tntParser.SUCCESSOR) {
	            this.state = 22;
	            this.match(tntParser.SUCCESSOR);
	            this.state = 27;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 28;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===tntParser.SUCCESSOR) {
	            this.state = 30;
	            this.match(tntParser.SUCCESSOR);
	            this.state = 35;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 36;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tntParser.A) | (1 << tntParser.B) | (1 << tntParser.C) | (1 << tntParser.D) | (1 << tntParser.E))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 40;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 37;
	                this.match(tntParser.PRIME); 
	            }
	            this.state = 42;
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
	        this.state = 57;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case tntParser.ZERO:
	        case tntParser.SUCCESSOR:
	        case tntParser.A:
	        case tntParser.B:
	        case tntParser.C:
	        case tntParser.D:
	        case tntParser.E:
	            this.state = 44;
	            this.atom();
	            break;
	        case tntParser.T__3:
	            this.state = 45;
	            this.match(tntParser.T__3);
	            this.state = 46;
	            this.expression(0);
	            this.state = 47;
	            this.match(tntParser.T__4);
	            break;
	        case tntParser.T__5:
	            this.state = 49;
	            this.match(tntParser.T__5);
	            this.state = 50;
	            this.expression(3);
	            break;
	        case tntParser.FOREVERY:
	            this.state = 51;
	            this.forevery();
	            this.state = 52;
	            this.expression(2);
	            break;
	        case tntParser.EXISTS:
	            this.state = 54;
	            this.exists();
	            this.state = 55;
	            this.expression(1);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 67;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 65;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, tntParser.RULE_expression);
	                    this.state = 59;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 60;
	                    this.match(tntParser.T__1);
	                    this.state = 61;
	                    this.expression(7);
	                    break;

	                case 2:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, tntParser.RULE_expression);
	                    this.state = 62;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 63;
	                    this.match(tntParser.T__2);
	                    this.state = 64;
	                    this.expression(6);
	                    break;

	                } 
	            }
	            this.state = 69;
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
	        this.state = 70;
	        this.match(tntParser.FOREVERY);
	        this.state = 71;
	        this.variable();
	        this.state = 72;
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
	        this.state = 74;
	        this.match(tntParser.EXISTS);
	        this.state = 75;
	        this.variable();
	        this.state = 76;
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
