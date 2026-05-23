// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/calculator/calculator.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import calculatorListener from './calculatorListener.js';
const serializedATN = [4,1,27,93,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,0,1,0,
1,0,1,0,1,1,1,1,1,1,5,1,33,8,1,10,1,12,1,36,9,1,1,2,1,2,1,2,5,2,41,8,2,10,
2,12,2,44,9,2,1,3,1,3,1,3,5,3,49,8,3,10,3,12,3,52,9,3,1,4,1,4,1,4,1,4,1,
4,1,4,3,4,60,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,69,8,5,1,6,1,6,1,7,1,7,
1,8,1,8,1,9,1,9,1,9,1,9,1,9,5,9,82,8,9,10,9,12,9,85,9,9,1,9,1,9,1,10,1,10,
1,11,1,11,1,11,0,0,12,0,2,4,6,8,10,12,14,16,18,20,22,0,5,1,0,12,13,1,0,14,
15,1,0,22,24,1,0,1,9,1,0,16,18,90,0,24,1,0,0,0,2,29,1,0,0,0,4,37,1,0,0,0,
6,45,1,0,0,0,8,59,1,0,0,0,10,68,1,0,0,0,12,70,1,0,0,0,14,72,1,0,0,0,16,74,
1,0,0,0,18,76,1,0,0,0,20,88,1,0,0,0,22,90,1,0,0,0,24,25,3,2,1,0,25,26,3,
22,11,0,26,27,3,2,1,0,27,28,5,0,0,1,28,1,1,0,0,0,29,34,3,4,2,0,30,31,7,0,
0,0,31,33,3,4,2,0,32,30,1,0,0,0,33,36,1,0,0,0,34,32,1,0,0,0,34,35,1,0,0,
0,35,3,1,0,0,0,36,34,1,0,0,0,37,42,3,6,3,0,38,39,7,1,0,0,39,41,3,6,3,0,40,
38,1,0,0,0,41,44,1,0,0,0,42,40,1,0,0,0,42,43,1,0,0,0,43,5,1,0,0,0,44,42,
1,0,0,0,45,50,3,8,4,0,46,47,5,21,0,0,47,49,3,8,4,0,48,46,1,0,0,0,49,52,1,
0,0,0,50,48,1,0,0,0,50,51,1,0,0,0,51,7,1,0,0,0,52,50,1,0,0,0,53,54,5,12,
0,0,54,60,3,8,4,0,55,56,5,13,0,0,56,60,3,8,4,0,57,60,3,18,9,0,58,60,3,10,
5,0,59,53,1,0,0,0,59,55,1,0,0,0,59,57,1,0,0,0,59,58,1,0,0,0,60,9,1,0,0,0,
61,69,3,12,6,0,62,69,3,16,8,0,63,69,3,14,7,0,64,65,5,10,0,0,65,66,3,2,1,
0,66,67,5,11,0,0,67,69,1,0,0,0,68,61,1,0,0,0,68,62,1,0,0,0,68,63,1,0,0,0,
68,64,1,0,0,0,69,11,1,0,0,0,70,71,5,26,0,0,71,13,1,0,0,0,72,73,7,2,0,0,73,
15,1,0,0,0,74,75,5,25,0,0,75,17,1,0,0,0,76,77,3,20,10,0,77,78,5,10,0,0,78,
83,3,2,1,0,79,80,5,19,0,0,80,82,3,2,1,0,81,79,1,0,0,0,82,85,1,0,0,0,83,81,
1,0,0,0,83,84,1,0,0,0,84,86,1,0,0,0,85,83,1,0,0,0,86,87,5,11,0,0,87,19,1,
0,0,0,88,89,7,3,0,0,89,21,1,0,0,0,90,91,7,4,0,0,91,23,1,0,0,0,6,34,42,50,
59,68,83];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class calculatorParser extends antlr4.Parser {

    static grammarFileName = "calculator.g4";
    static literalNames = [ null, "'cos'", "'sin'", "'tan'", "'acos'", "'asin'", 
                            "'atan'", "'ln'", "'log'", "'sqrt'", "'('", 
                            "')'", "'+'", "'-'", "'*'", "'/'", "'>'", "'<'", 
                            "'='", "','", "'.'", "'^'", "'pi'", null, "'i'" ];
    static symbolicNames = [ null, "COS", "SIN", "TAN", "ACOS", "ASIN", 
                             "ATAN", "LN", "LOG", "SQRT", "LPAREN", "RPAREN", 
                             "PLUS", "MINUS", "TIMES", "DIV", "GT", "LT", 
                             "EQ", "COMMA", "POINT", "POW", "PI", "EULER", 
                             "I", "VARIABLE", "SCIENTIFIC_NUMBER", "WS" ];
    static ruleNames = [ "equation", "expression", "multiplyingExpression", 
                         "powExpression", "signedAtom", "atom", "scientific", 
                         "constant", "variable", "func_", "funcname", "relop" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = calculatorParser.ruleNames;
        this.literalNames = calculatorParser.literalNames;
        this.symbolicNames = calculatorParser.symbolicNames;
    }



	equation() {
	    let localctx = new EquationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, calculatorParser.RULE_equation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.expression();
	        this.state = 25;
	        this.relop();
	        this.state = 26;
	        this.expression();
	        this.state = 27;
	        this.match(calculatorParser.EOF);
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



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, calculatorParser.RULE_expression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.multiplyingExpression();
	        this.state = 34;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===12 || _la===13) {
	            this.state = 30;
	            _la = this._input.LA(1);
	            if(!(_la===12 || _la===13)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 31;
	            this.multiplyingExpression();
	            this.state = 36;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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



	multiplyingExpression() {
	    let localctx = new MultiplyingExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, calculatorParser.RULE_multiplyingExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.powExpression();
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===14 || _la===15) {
	            this.state = 38;
	            _la = this._input.LA(1);
	            if(!(_la===14 || _la===15)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 39;
	            this.powExpression();
	            this.state = 44;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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



	powExpression() {
	    let localctx = new PowExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, calculatorParser.RULE_powExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.signedAtom();
	        this.state = 50;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===21) {
	            this.state = 46;
	            this.match(calculatorParser.POW);
	            this.state = 47;
	            this.signedAtom();
	            this.state = 52;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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



	signedAtom() {
	    let localctx = new SignedAtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, calculatorParser.RULE_signedAtom);
	    try {
	        this.state = 59;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 53;
	            this.match(calculatorParser.PLUS);
	            this.state = 54;
	            this.signedAtom();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 55;
	            this.match(calculatorParser.MINUS);
	            this.state = 56;
	            this.signedAtom();
	            break;
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 57;
	            this.func_();
	            break;
	        case 10:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 58;
	            this.atom();
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



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, calculatorParser.RULE_atom);
	    try {
	        this.state = 68;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 26:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 61;
	            this.scientific();
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 62;
	            this.variable();
	            break;
	        case 22:
	        case 23:
	        case 24:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 63;
	            this.constant();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 64;
	            this.match(calculatorParser.LPAREN);
	            this.state = 65;
	            this.expression();
	            this.state = 66;
	            this.match(calculatorParser.RPAREN);
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
	    this.enterRule(localctx, 12, calculatorParser.RULE_scientific);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this.match(calculatorParser.SCIENTIFIC_NUMBER);
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



	constant() {
	    let localctx = new ConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, calculatorParser.RULE_constant);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 29360128) !== 0))) {
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



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, calculatorParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.match(calculatorParser.VARIABLE);
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



	func_() {
	    let localctx = new Func_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, calculatorParser.RULE_func_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.funcname();
	        this.state = 77;
	        this.match(calculatorParser.LPAREN);
	        this.state = 78;
	        this.expression();
	        this.state = 83;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===19) {
	            this.state = 79;
	            this.match(calculatorParser.COMMA);
	            this.state = 80;
	            this.expression();
	            this.state = 85;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 86;
	        this.match(calculatorParser.RPAREN);
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



	funcname() {
	    let localctx = new FuncnameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, calculatorParser.RULE_funcname);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1022) !== 0))) {
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



	relop() {
	    let localctx = new RelopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, calculatorParser.RULE_relop);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 458752) !== 0))) {
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

calculatorParser.EOF = antlr4.Token.EOF;
calculatorParser.COS = 1;
calculatorParser.SIN = 2;
calculatorParser.TAN = 3;
calculatorParser.ACOS = 4;
calculatorParser.ASIN = 5;
calculatorParser.ATAN = 6;
calculatorParser.LN = 7;
calculatorParser.LOG = 8;
calculatorParser.SQRT = 9;
calculatorParser.LPAREN = 10;
calculatorParser.RPAREN = 11;
calculatorParser.PLUS = 12;
calculatorParser.MINUS = 13;
calculatorParser.TIMES = 14;
calculatorParser.DIV = 15;
calculatorParser.GT = 16;
calculatorParser.LT = 17;
calculatorParser.EQ = 18;
calculatorParser.COMMA = 19;
calculatorParser.POINT = 20;
calculatorParser.POW = 21;
calculatorParser.PI = 22;
calculatorParser.EULER = 23;
calculatorParser.I = 24;
calculatorParser.VARIABLE = 25;
calculatorParser.SCIENTIFIC_NUMBER = 26;
calculatorParser.WS = 27;

calculatorParser.RULE_equation = 0;
calculatorParser.RULE_expression = 1;
calculatorParser.RULE_multiplyingExpression = 2;
calculatorParser.RULE_powExpression = 3;
calculatorParser.RULE_signedAtom = 4;
calculatorParser.RULE_atom = 5;
calculatorParser.RULE_scientific = 6;
calculatorParser.RULE_constant = 7;
calculatorParser.RULE_variable = 8;
calculatorParser.RULE_func_ = 9;
calculatorParser.RULE_funcname = 10;
calculatorParser.RULE_relop = 11;

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
        this.ruleIndex = calculatorParser.RULE_equation;
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

	EOF() {
	    return this.getToken(calculatorParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.enterEquation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof calculatorListener ) {
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
        this.ruleIndex = calculatorParser.RULE_expression;
    }

	multiplyingExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MultiplyingExpressionContext);
	    } else {
	        return this.getTypedRuleContext(MultiplyingExpressionContext,i);
	    }
	};

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(calculatorParser.PLUS);
	    } else {
	        return this.getToken(calculatorParser.PLUS, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(calculatorParser.MINUS);
	    } else {
	        return this.getToken(calculatorParser.MINUS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.exitExpression(this);
		}
	}


}



class MultiplyingExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = calculatorParser.RULE_multiplyingExpression;
    }

	powExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PowExpressionContext);
	    } else {
	        return this.getTypedRuleContext(PowExpressionContext,i);
	    }
	};

	TIMES = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(calculatorParser.TIMES);
	    } else {
	        return this.getToken(calculatorParser.TIMES, i);
	    }
	};


	DIV = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(calculatorParser.DIV);
	    } else {
	        return this.getToken(calculatorParser.DIV, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.enterMultiplyingExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.exitMultiplyingExpression(this);
		}
	}


}



class PowExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = calculatorParser.RULE_powExpression;
    }

	signedAtom = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SignedAtomContext);
	    } else {
	        return this.getTypedRuleContext(SignedAtomContext,i);
	    }
	};

	POW = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(calculatorParser.POW);
	    } else {
	        return this.getToken(calculatorParser.POW, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.enterPowExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.exitPowExpression(this);
		}
	}


}



class SignedAtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = calculatorParser.RULE_signedAtom;
    }

	PLUS() {
	    return this.getToken(calculatorParser.PLUS, 0);
	};

	signedAtom() {
	    return this.getTypedRuleContext(SignedAtomContext,0);
	};

	MINUS() {
	    return this.getToken(calculatorParser.MINUS, 0);
	};

	func_() {
	    return this.getTypedRuleContext(Func_Context,0);
	};

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.enterSignedAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.exitSignedAtom(this);
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
        this.ruleIndex = calculatorParser.RULE_atom;
    }

	scientific() {
	    return this.getTypedRuleContext(ScientificContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	LPAREN() {
	    return this.getToken(calculatorParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(calculatorParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof calculatorListener ) {
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
        this.ruleIndex = calculatorParser.RULE_scientific;
    }

	SCIENTIFIC_NUMBER() {
	    return this.getToken(calculatorParser.SCIENTIFIC_NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.enterScientific(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.exitScientific(this);
		}
	}


}



class ConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = calculatorParser.RULE_constant;
    }

	PI() {
	    return this.getToken(calculatorParser.PI, 0);
	};

	EULER() {
	    return this.getToken(calculatorParser.EULER, 0);
	};

	I() {
	    return this.getToken(calculatorParser.I, 0);
	};

	enterRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.enterConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.exitConstant(this);
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
        this.ruleIndex = calculatorParser.RULE_variable;
    }

	VARIABLE() {
	    return this.getToken(calculatorParser.VARIABLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.exitVariable(this);
		}
	}


}



class Func_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = calculatorParser.RULE_func_;
    }

	funcname() {
	    return this.getTypedRuleContext(FuncnameContext,0);
	};

	LPAREN() {
	    return this.getToken(calculatorParser.LPAREN, 0);
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
	    return this.getToken(calculatorParser.RPAREN, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(calculatorParser.COMMA);
	    } else {
	        return this.getToken(calculatorParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.enterFunc_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.exitFunc_(this);
		}
	}


}



class FuncnameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = calculatorParser.RULE_funcname;
    }

	COS() {
	    return this.getToken(calculatorParser.COS, 0);
	};

	TAN() {
	    return this.getToken(calculatorParser.TAN, 0);
	};

	SIN() {
	    return this.getToken(calculatorParser.SIN, 0);
	};

	ACOS() {
	    return this.getToken(calculatorParser.ACOS, 0);
	};

	ATAN() {
	    return this.getToken(calculatorParser.ATAN, 0);
	};

	ASIN() {
	    return this.getToken(calculatorParser.ASIN, 0);
	};

	LOG() {
	    return this.getToken(calculatorParser.LOG, 0);
	};

	LN() {
	    return this.getToken(calculatorParser.LN, 0);
	};

	SQRT() {
	    return this.getToken(calculatorParser.SQRT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.enterFuncname(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.exitFuncname(this);
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
        this.ruleIndex = calculatorParser.RULE_relop;
    }

	EQ() {
	    return this.getToken(calculatorParser.EQ, 0);
	};

	GT() {
	    return this.getToken(calculatorParser.GT, 0);
	};

	LT() {
	    return this.getToken(calculatorParser.LT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.enterRelop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.exitRelop(this);
		}
	}


}




calculatorParser.EquationContext = EquationContext; 
calculatorParser.ExpressionContext = ExpressionContext; 
calculatorParser.MultiplyingExpressionContext = MultiplyingExpressionContext; 
calculatorParser.PowExpressionContext = PowExpressionContext; 
calculatorParser.SignedAtomContext = SignedAtomContext; 
calculatorParser.AtomContext = AtomContext; 
calculatorParser.ScientificContext = ScientificContext; 
calculatorParser.ConstantContext = ConstantContext; 
calculatorParser.VariableContext = VariableContext; 
calculatorParser.Func_Context = Func_Context; 
calculatorParser.FuncnameContext = FuncnameContext; 
calculatorParser.RelopContext = RelopContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
