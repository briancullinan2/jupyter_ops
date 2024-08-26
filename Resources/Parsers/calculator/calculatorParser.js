// Generated from Resources/Parsers/calculator/calculator.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import calculatorListener from './calculatorListener.js';
const serializedATN = [4,1,27,92,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,0,1,0,
1,0,1,1,1,1,1,1,5,1,32,8,1,10,1,12,1,35,9,1,1,2,1,2,1,2,5,2,40,8,2,10,2,
12,2,43,9,2,1,3,1,3,1,3,5,3,48,8,3,10,3,12,3,51,9,3,1,4,1,4,1,4,1,4,1,4,
1,4,3,4,59,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,68,8,5,1,6,1,6,1,7,1,7,1,
8,1,8,1,9,1,9,1,9,1,9,1,9,5,9,81,8,9,10,9,12,9,84,9,9,1,9,1,9,1,10,1,10,
1,11,1,11,1,11,0,0,12,0,2,4,6,8,10,12,14,16,18,20,22,0,5,1,0,12,13,1,0,14,
15,1,0,22,24,1,0,1,9,1,0,16,18,89,0,24,1,0,0,0,2,28,1,0,0,0,4,36,1,0,0,0,
6,44,1,0,0,0,8,58,1,0,0,0,10,67,1,0,0,0,12,69,1,0,0,0,14,71,1,0,0,0,16,73,
1,0,0,0,18,75,1,0,0,0,20,87,1,0,0,0,22,89,1,0,0,0,24,25,3,2,1,0,25,26,3,
22,11,0,26,27,3,2,1,0,27,1,1,0,0,0,28,33,3,4,2,0,29,30,7,0,0,0,30,32,3,4,
2,0,31,29,1,0,0,0,32,35,1,0,0,0,33,31,1,0,0,0,33,34,1,0,0,0,34,3,1,0,0,0,
35,33,1,0,0,0,36,41,3,6,3,0,37,38,7,1,0,0,38,40,3,6,3,0,39,37,1,0,0,0,40,
43,1,0,0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,5,1,0,0,0,43,41,1,0,0,0,44,49,
3,8,4,0,45,46,5,21,0,0,46,48,3,8,4,0,47,45,1,0,0,0,48,51,1,0,0,0,49,47,1,
0,0,0,49,50,1,0,0,0,50,7,1,0,0,0,51,49,1,0,0,0,52,53,5,12,0,0,53,59,3,8,
4,0,54,55,5,13,0,0,55,59,3,8,4,0,56,59,3,18,9,0,57,59,3,10,5,0,58,52,1,0,
0,0,58,54,1,0,0,0,58,56,1,0,0,0,58,57,1,0,0,0,59,9,1,0,0,0,60,68,3,12,6,
0,61,68,3,16,8,0,62,68,3,14,7,0,63,64,5,10,0,0,64,65,3,2,1,0,65,66,5,11,
0,0,66,68,1,0,0,0,67,60,1,0,0,0,67,61,1,0,0,0,67,62,1,0,0,0,67,63,1,0,0,
0,68,11,1,0,0,0,69,70,5,26,0,0,70,13,1,0,0,0,71,72,7,2,0,0,72,15,1,0,0,0,
73,74,5,25,0,0,74,17,1,0,0,0,75,76,3,20,10,0,76,77,5,10,0,0,77,82,3,2,1,
0,78,79,5,19,0,0,79,81,3,2,1,0,80,78,1,0,0,0,81,84,1,0,0,0,82,80,1,0,0,0,
82,83,1,0,0,0,83,85,1,0,0,0,84,82,1,0,0,0,85,86,5,11,0,0,86,19,1,0,0,0,87,
88,7,3,0,0,88,21,1,0,0,0,89,90,7,4,0,0,90,23,1,0,0,0,6,33,41,49,58,67,82];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

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

    get atn() {
        return atn;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.multiplyingExpression();
	        this.state = 33;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===calculatorParser.PLUS || _la===calculatorParser.MINUS) {
	            this.state = 29;
	            _la = this._input.LA(1);
	            if(!(_la===calculatorParser.PLUS || _la===calculatorParser.MINUS)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 30;
	            this.multiplyingExpression();
	            this.state = 35;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.powExpression();
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===calculatorParser.TIMES || _la===calculatorParser.DIV) {
	            this.state = 37;
	            _la = this._input.LA(1);
	            if(!(_la===calculatorParser.TIMES || _la===calculatorParser.DIV)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 38;
	            this.powExpression();
	            this.state = 43;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.signedAtom();
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===calculatorParser.POW) {
	            this.state = 45;
	            this.match(calculatorParser.POW);
	            this.state = 46;
	            this.signedAtom();
	            this.state = 51;
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
	        this.state = 58;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case calculatorParser.PLUS:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 52;
	            this.match(calculatorParser.PLUS);
	            this.state = 53;
	            this.signedAtom();
	            break;
	        case calculatorParser.MINUS:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 54;
	            this.match(calculatorParser.MINUS);
	            this.state = 55;
	            this.signedAtom();
	            break;
	        case calculatorParser.COS:
	        case calculatorParser.SIN:
	        case calculatorParser.TAN:
	        case calculatorParser.ACOS:
	        case calculatorParser.ASIN:
	        case calculatorParser.ATAN:
	        case calculatorParser.LN:
	        case calculatorParser.LOG:
	        case calculatorParser.SQRT:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 56;
	            this.func_();
	            break;
	        case calculatorParser.LPAREN:
	        case calculatorParser.PI:
	        case calculatorParser.EULER:
	        case calculatorParser.I:
	        case calculatorParser.VARIABLE:
	        case calculatorParser.SCIENTIFIC_NUMBER:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 57;
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
	        this.state = 67;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case calculatorParser.SCIENTIFIC_NUMBER:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 60;
	            this.scientific();
	            break;
	        case calculatorParser.VARIABLE:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 61;
	            this.variable();
	            break;
	        case calculatorParser.PI:
	        case calculatorParser.EULER:
	        case calculatorParser.I:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 62;
	            this.constant();
	            break;
	        case calculatorParser.LPAREN:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 63;
	            this.match(calculatorParser.LPAREN);
	            this.state = 64;
	            this.expression();
	            this.state = 65;
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
	        this.state = 69;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << calculatorParser.PI) | (1 << calculatorParser.EULER) | (1 << calculatorParser.I))) !== 0))) {
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
	        this.state = 73;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this.funcname();
	        this.state = 76;
	        this.match(calculatorParser.LPAREN);
	        this.state = 77;
	        this.expression();
	        this.state = 82;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===calculatorParser.COMMA) {
	            this.state = 78;
	            this.match(calculatorParser.COMMA);
	            this.state = 79;
	            this.expression();
	            this.state = 84;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 85;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << calculatorParser.COS) | (1 << calculatorParser.SIN) | (1 << calculatorParser.TAN) | (1 << calculatorParser.ACOS) | (1 << calculatorParser.ASIN) | (1 << calculatorParser.ATAN) | (1 << calculatorParser.LN) | (1 << calculatorParser.LOG) | (1 << calculatorParser.SQRT))) !== 0))) {
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << calculatorParser.GT) | (1 << calculatorParser.LT) | (1 << calculatorParser.EQ))) !== 0))) {
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
