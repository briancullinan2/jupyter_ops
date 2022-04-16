// Generated from Resources/Parsers/arithmetic/arithmetic.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import arithmeticListener from './arithmeticListener.js';
const serializedATN = [4,1,14,65,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,5,0,16,8,0,10,0,12,0,19,9,0,1,0,1,0,1,1,1,1,1,1,1,1,
1,2,1,2,1,2,1,2,1,2,1,2,5,2,33,8,2,10,2,12,2,36,9,2,1,2,3,2,39,8,2,1,2,1,
2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,50,8,2,10,2,12,2,53,9,2,1,3,1,3,3,3,57,
8,3,1,4,1,4,1,5,1,5,1,6,1,6,1,6,0,1,4,7,0,2,4,6,8,10,12,0,3,1,0,5,6,1,0,
7,8,1,0,9,11,64,0,17,1,0,0,0,2,22,1,0,0,0,4,38,1,0,0,0,6,56,1,0,0,0,8,58,
1,0,0,0,10,60,1,0,0,0,12,62,1,0,0,0,14,16,3,2,1,0,15,14,1,0,0,0,16,19,1,
0,0,0,17,15,1,0,0,0,17,18,1,0,0,0,18,20,1,0,0,0,19,17,1,0,0,0,20,21,5,0,
0,1,21,1,1,0,0,0,22,23,3,4,2,0,23,24,3,12,6,0,24,25,3,4,2,0,25,3,1,0,0,0,
26,27,6,2,-1,0,27,28,5,3,0,0,28,29,3,4,2,0,29,30,5,4,0,0,30,39,1,0,0,0,31,
33,7,0,0,0,32,31,1,0,0,0,33,36,1,0,0,0,34,32,1,0,0,0,34,35,1,0,0,0,35,37,
1,0,0,0,36,34,1,0,0,0,37,39,3,6,3,0,38,26,1,0,0,0,38,34,1,0,0,0,39,51,1,
0,0,0,40,41,10,5,0,0,41,42,5,13,0,0,42,50,3,4,2,6,43,44,10,4,0,0,44,45,7,
1,0,0,45,50,3,4,2,5,46,47,10,3,0,0,47,48,7,0,0,0,48,50,3,4,2,4,49,40,1,0,
0,0,49,43,1,0,0,0,49,46,1,0,0,0,50,53,1,0,0,0,51,49,1,0,0,0,51,52,1,0,0,
0,52,5,1,0,0,0,53,51,1,0,0,0,54,57,3,8,4,0,55,57,3,10,5,0,56,54,1,0,0,0,
56,55,1,0,0,0,57,7,1,0,0,0,58,59,5,2,0,0,59,9,1,0,0,0,60,61,5,1,0,0,61,11,
1,0,0,0,62,63,7,2,0,0,63,13,1,0,0,0,6,17,34,38,49,51,56];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class arithmeticParser extends antlr4.Parser {

    static grammarFileName = "arithmetic.g4";
    static literalNames = [ null, null, null, "'('", "')'", "'+'", "'-'", 
                            "'*'", "'/'", "'>'", "'<'", "'='", "'.'", "'^'" ];
    static symbolicNames = [ null, "VARIABLE", "SCIENTIFIC_NUMBER", "LPAREN", 
                             "RPAREN", "PLUS", "MINUS", "TIMES", "DIV", 
                             "GT", "LT", "EQ", "POINT", "POW", "WS" ];
    static ruleNames = [ "file_", "equation", "expression", "atom", "scientific", 
                         "variable", "relop" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = arithmeticParser.ruleNames;
        this.literalNames = arithmeticParser.literalNames;
        this.symbolicNames = arithmeticParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 2:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 5);
    		case 1:
    			return this.precpred(this._ctx, 4);
    		case 2:
    			return this.precpred(this._ctx, 3);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	file_() {
	    let localctx = new File_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, arithmeticParser.RULE_file_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << arithmeticParser.VARIABLE) | (1 << arithmeticParser.SCIENTIFIC_NUMBER) | (1 << arithmeticParser.LPAREN) | (1 << arithmeticParser.PLUS) | (1 << arithmeticParser.MINUS))) !== 0)) {
	            this.state = 14;
	            this.equation();
	            this.state = 19;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 20;
	        this.match(arithmeticParser.EOF);
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



	equation() {
	    let localctx = new EquationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, arithmeticParser.RULE_equation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.expression(0);
	        this.state = 23;
	        this.relop();
	        this.state = 24;
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


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 4;
	    this.enterRecursionRule(localctx, 4, arithmeticParser.RULE_expression, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case arithmeticParser.LPAREN:
	            this.state = 27;
	            this.match(arithmeticParser.LPAREN);
	            this.state = 28;
	            this.expression(0);
	            this.state = 29;
	            this.match(arithmeticParser.RPAREN);
	            break;
	        case arithmeticParser.VARIABLE:
	        case arithmeticParser.SCIENTIFIC_NUMBER:
	        case arithmeticParser.PLUS:
	        case arithmeticParser.MINUS:
	            this.state = 34;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===arithmeticParser.PLUS || _la===arithmeticParser.MINUS) {
	                this.state = 31;
	                _la = this._input.LA(1);
	                if(!(_la===arithmeticParser.PLUS || _la===arithmeticParser.MINUS)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 36;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 37;
	            this.atom();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 51;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 49;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, arithmeticParser.RULE_expression);
	                    this.state = 40;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 41;
	                    this.match(arithmeticParser.POW);
	                    this.state = 42;
	                    this.expression(6);
	                    break;

	                case 2:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, arithmeticParser.RULE_expression);
	                    this.state = 43;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 44;
	                    _la = this._input.LA(1);
	                    if(!(_la===arithmeticParser.TIMES || _la===arithmeticParser.DIV)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 45;
	                    this.expression(5);
	                    break;

	                case 3:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, arithmeticParser.RULE_expression);
	                    this.state = 46;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 47;
	                    _la = this._input.LA(1);
	                    if(!(_la===arithmeticParser.PLUS || _la===arithmeticParser.MINUS)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 48;
	                    this.expression(4);
	                    break;

	                } 
	            }
	            this.state = 53;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
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



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, arithmeticParser.RULE_atom);
	    try {
	        this.state = 56;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case arithmeticParser.SCIENTIFIC_NUMBER:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 54;
	            this.scientific();
	            break;
	        case arithmeticParser.VARIABLE:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 55;
	            this.variable();
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



	scientific() {
	    let localctx = new ScientificContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, arithmeticParser.RULE_scientific);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.match(arithmeticParser.SCIENTIFIC_NUMBER);
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
	    this.enterRule(localctx, 10, arithmeticParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.match(arithmeticParser.VARIABLE);
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



	relop() {
	    let localctx = new RelopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, arithmeticParser.RULE_relop);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << arithmeticParser.GT) | (1 << arithmeticParser.LT) | (1 << arithmeticParser.EQ))) !== 0))) {
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


}

arithmeticParser.EOF = antlr4.Token.EOF;
arithmeticParser.VARIABLE = 1;
arithmeticParser.SCIENTIFIC_NUMBER = 2;
arithmeticParser.LPAREN = 3;
arithmeticParser.RPAREN = 4;
arithmeticParser.PLUS = 5;
arithmeticParser.MINUS = 6;
arithmeticParser.TIMES = 7;
arithmeticParser.DIV = 8;
arithmeticParser.GT = 9;
arithmeticParser.LT = 10;
arithmeticParser.EQ = 11;
arithmeticParser.POINT = 12;
arithmeticParser.POW = 13;
arithmeticParser.WS = 14;

arithmeticParser.RULE_file_ = 0;
arithmeticParser.RULE_equation = 1;
arithmeticParser.RULE_expression = 2;
arithmeticParser.RULE_atom = 3;
arithmeticParser.RULE_scientific = 4;
arithmeticParser.RULE_variable = 5;
arithmeticParser.RULE_relop = 6;

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
        this.ruleIndex = arithmeticParser.RULE_file_;
    }

	EOF() {
	    return this.getToken(arithmeticParser.EOF, 0);
	};

	equation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EquationContext);
	    } else {
	        return this.getTypedRuleContext(EquationContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof arithmeticListener ) {
	        listener.enterFile_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof arithmeticListener ) {
	        listener.exitFile_(this);
		}
	}


}



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
        this.ruleIndex = arithmeticParser.RULE_equation;
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

	relop() {
	    return this.getTypedRuleContext(RelopContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof arithmeticListener ) {
	        listener.enterEquation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof arithmeticListener ) {
	        listener.exitEquation(this);
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
        this.ruleIndex = arithmeticParser.RULE_expression;
    }

	LPAREN() {
	    return this.getToken(arithmeticParser.LPAREN, 0);
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

	RPAREN() {
	    return this.getToken(arithmeticParser.RPAREN, 0);
	};

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(arithmeticParser.PLUS);
	    } else {
	        return this.getToken(arithmeticParser.PLUS, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(arithmeticParser.MINUS);
	    } else {
	        return this.getToken(arithmeticParser.MINUS, i);
	    }
	};


	POW() {
	    return this.getToken(arithmeticParser.POW, 0);
	};

	TIMES() {
	    return this.getToken(arithmeticParser.TIMES, 0);
	};

	DIV() {
	    return this.getToken(arithmeticParser.DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof arithmeticListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof arithmeticListener ) {
	        listener.exitExpression(this);
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
        this.ruleIndex = arithmeticParser.RULE_atom;
    }

	scientific() {
	    return this.getTypedRuleContext(ScientificContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof arithmeticListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof arithmeticListener ) {
	        listener.exitAtom(this);
		}
	}


}



class ScientificContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = arithmeticParser.RULE_scientific;
    }

	SCIENTIFIC_NUMBER() {
	    return this.getToken(arithmeticParser.SCIENTIFIC_NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof arithmeticListener ) {
	        listener.enterScientific(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof arithmeticListener ) {
	        listener.exitScientific(this);
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
        this.ruleIndex = arithmeticParser.RULE_variable;
    }

	VARIABLE() {
	    return this.getToken(arithmeticParser.VARIABLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof arithmeticListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof arithmeticListener ) {
	        listener.exitVariable(this);
		}
	}


}



class RelopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = arithmeticParser.RULE_relop;
    }

	EQ() {
	    return this.getToken(arithmeticParser.EQ, 0);
	};

	GT() {
	    return this.getToken(arithmeticParser.GT, 0);
	};

	LT() {
	    return this.getToken(arithmeticParser.LT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof arithmeticListener ) {
	        listener.enterRelop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof arithmeticListener ) {
	        listener.exitRelop(this);
		}
	}


}




arithmeticParser.File_Context = File_Context; 
arithmeticParser.EquationContext = EquationContext; 
arithmeticParser.ExpressionContext = ExpressionContext; 
arithmeticParser.AtomContext = AtomContext; 
arithmeticParser.ScientificContext = ScientificContext; 
arithmeticParser.VariableContext = VariableContext; 
arithmeticParser.RelopContext = RelopContext; 
