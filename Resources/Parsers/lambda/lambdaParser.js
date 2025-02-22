// Generated from ./lambda/lambda.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import lambdaListener from './lambdaListener.js';
const serializedATN = [4,1,6,26,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,1,0,
1,0,3,0,12,8,0,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,0,0,4,
0,2,4,6,0,0,23,0,11,1,0,0,0,2,13,1,0,0,0,4,18,1,0,0,0,6,23,1,0,0,0,8,12,
5,5,0,0,9,12,3,2,1,0,10,12,3,4,2,0,11,8,1,0,0,0,11,9,1,0,0,0,11,10,1,0,0,
0,12,1,1,0,0,0,13,14,5,1,0,0,14,15,5,5,0,0,15,16,5,2,0,0,16,17,3,6,3,0,17,
3,1,0,0,0,18,19,5,3,0,0,19,20,3,0,0,0,20,21,3,0,0,0,21,22,5,4,0,0,22,5,1,
0,0,0,23,24,3,0,0,0,24,7,1,0,0,0,1,11];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class lambdaParser extends antlr4.Parser {

    static grammarFileName = "lambda.g4";
    static literalNames = [ null, "'\\u03BB'", "'.'", "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, null, "VARIABLE", "WS" ];
    static ruleNames = [ "expression", "function_", "application", "scope" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = lambdaParser.ruleNames;
        this.literalNames = lambdaParser.literalNames;
        this.symbolicNames = lambdaParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, lambdaParser.RULE_expression);
	    try {
	        this.state = 11;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case lambdaParser.VARIABLE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 8;
	            this.match(lambdaParser.VARIABLE);
	            break;
	        case lambdaParser.T__0:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 9;
	            this.function_();
	            break;
	        case lambdaParser.T__2:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 10;
	            this.application();
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



	function_() {
	    let localctx = new Function_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, lambdaParser.RULE_function_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 13;
	        this.match(lambdaParser.T__0);
	        this.state = 14;
	        this.match(lambdaParser.VARIABLE);
	        this.state = 15;
	        this.match(lambdaParser.T__1);
	        this.state = 16;
	        this.scope();
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



	application() {
	    let localctx = new ApplicationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, lambdaParser.RULE_application);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.match(lambdaParser.T__2);
	        this.state = 19;
	        this.expression();
	        this.state = 20;
	        this.expression();
	        this.state = 21;
	        this.match(lambdaParser.T__3);
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



	scope() {
	    let localctx = new ScopeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, lambdaParser.RULE_scope);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
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


}

lambdaParser.EOF = antlr4.Token.EOF;
lambdaParser.T__0 = 1;
lambdaParser.T__1 = 2;
lambdaParser.T__2 = 3;
lambdaParser.T__3 = 4;
lambdaParser.VARIABLE = 5;
lambdaParser.WS = 6;

lambdaParser.RULE_expression = 0;
lambdaParser.RULE_function_ = 1;
lambdaParser.RULE_application = 2;
lambdaParser.RULE_scope = 3;

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
        this.ruleIndex = lambdaParser.RULE_expression;
    }

	VARIABLE() {
	    return this.getToken(lambdaParser.VARIABLE, 0);
	};

	function_() {
	    return this.getTypedRuleContext(Function_Context,0);
	};

	application() {
	    return this.getTypedRuleContext(ApplicationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof lambdaListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lambdaListener ) {
	        listener.exitExpression(this);
		}
	}


}



class Function_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lambdaParser.RULE_function_;
    }

	VARIABLE() {
	    return this.getToken(lambdaParser.VARIABLE, 0);
	};

	scope() {
	    return this.getTypedRuleContext(ScopeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof lambdaListener ) {
	        listener.enterFunction_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lambdaListener ) {
	        listener.exitFunction_(this);
		}
	}


}



class ApplicationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lambdaParser.RULE_application;
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
	    if(listener instanceof lambdaListener ) {
	        listener.enterApplication(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lambdaListener ) {
	        listener.exitApplication(this);
		}
	}


}



class ScopeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lambdaParser.RULE_scope;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof lambdaListener ) {
	        listener.enterScope(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lambdaListener ) {
	        listener.exitScope(this);
		}
	}


}




lambdaParser.ExpressionContext = ExpressionContext; 
lambdaParser.Function_Context = Function_Context; 
lambdaParser.ApplicationContext = ApplicationContext; 
lambdaParser.ScopeContext = ScopeContext; 
