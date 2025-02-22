// Generated from ./rpn/rpn.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import rpnListener from './rpnListener.js';
const serializedATN = [4,1,17,38,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,1,0,5,0,15,8,0,10,0,12,0,18,9,0,1,1,1,1,3,1,22,8,1,1,2,1,2,1,
3,1,3,1,3,1,3,1,3,1,3,3,3,32,8,3,1,4,1,4,1,5,1,5,1,5,0,0,6,0,2,4,6,8,10,
0,1,1,0,3,15,36,0,12,1,0,0,0,2,21,1,0,0,0,4,23,1,0,0,0,6,31,1,0,0,0,8,33,
1,0,0,0,10,35,1,0,0,0,12,16,3,6,3,0,13,15,3,2,1,0,14,13,1,0,0,0,15,18,1,
0,0,0,16,14,1,0,0,0,16,17,1,0,0,0,17,1,1,0,0,0,18,16,1,0,0,0,19,22,3,6,3,
0,20,22,3,4,2,0,21,19,1,0,0,0,21,20,1,0,0,0,22,3,1,0,0,0,23,24,7,0,0,0,24,
5,1,0,0,0,25,26,5,4,0,0,26,32,3,6,3,0,27,28,5,5,0,0,28,32,3,6,3,0,29,32,
3,10,5,0,30,32,3,8,4,0,31,25,1,0,0,0,31,27,1,0,0,0,31,29,1,0,0,0,31,30,1,
0,0,0,32,7,1,0,0,0,33,34,5,2,0,0,34,9,1,0,0,0,35,36,5,1,0,0,36,11,1,0,0,
0,3,16,21,31];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class rpnParser extends antlr4.Parser {

    static grammarFileName = "rpn.g4";
    static literalNames = [ null, null, null, "'^'", "'+'", "'-'", "'*'", 
                            "'/'", "'cos'", "'sin'", "'tan'", "'acos'", 
                            "'asin'", "'atan'", "'ln'", "'log'", "'.'" ];
    static symbolicNames = [ null, "SCIENTIFIC_NUMBER", "VARIABLE", "POW", 
                             "PLUS", "MINUS", "TIMES", "DIV", "COS", "SIN", 
                             "TAN", "ACOS", "ASIN", "ATAN", "LN", "LOG", 
                             "POINT", "WS" ];
    static ruleNames = [ "expression", "term", "oper", "signedAtom", "variable", 
                         "scientific" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = rpnParser.ruleNames;
        this.literalNames = rpnParser.literalNames;
        this.symbolicNames = rpnParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, rpnParser.RULE_expression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 12;
	        this.signedAtom();
	        this.state = 16;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rpnParser.SCIENTIFIC_NUMBER) | (1 << rpnParser.VARIABLE) | (1 << rpnParser.POW) | (1 << rpnParser.PLUS) | (1 << rpnParser.MINUS) | (1 << rpnParser.TIMES) | (1 << rpnParser.DIV) | (1 << rpnParser.COS) | (1 << rpnParser.SIN) | (1 << rpnParser.TAN) | (1 << rpnParser.ACOS) | (1 << rpnParser.ASIN) | (1 << rpnParser.ATAN) | (1 << rpnParser.LN) | (1 << rpnParser.LOG))) !== 0)) {
	            this.state = 13;
	            this.term();
	            this.state = 18;
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



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, rpnParser.RULE_term);
	    try {
	        this.state = 21;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 19;
	            this.signedAtom();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 20;
	            this.oper();
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



	oper() {
	    let localctx = new OperContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, rpnParser.RULE_oper);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rpnParser.POW) | (1 << rpnParser.PLUS) | (1 << rpnParser.MINUS) | (1 << rpnParser.TIMES) | (1 << rpnParser.DIV) | (1 << rpnParser.COS) | (1 << rpnParser.SIN) | (1 << rpnParser.TAN) | (1 << rpnParser.ACOS) | (1 << rpnParser.ASIN) | (1 << rpnParser.ATAN) | (1 << rpnParser.LN) | (1 << rpnParser.LOG))) !== 0))) {
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



	signedAtom() {
	    let localctx = new SignedAtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, rpnParser.RULE_signedAtom);
	    try {
	        this.state = 31;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case rpnParser.PLUS:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 25;
	            this.match(rpnParser.PLUS);
	            this.state = 26;
	            this.signedAtom();
	            break;
	        case rpnParser.MINUS:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 27;
	            this.match(rpnParser.MINUS);
	            this.state = 28;
	            this.signedAtom();
	            break;
	        case rpnParser.SCIENTIFIC_NUMBER:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 29;
	            this.scientific();
	            break;
	        case rpnParser.VARIABLE:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 30;
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



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, rpnParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(rpnParser.VARIABLE);
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
	    this.enterRule(localctx, 10, rpnParser.RULE_scientific);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.match(rpnParser.SCIENTIFIC_NUMBER);
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

rpnParser.EOF = antlr4.Token.EOF;
rpnParser.SCIENTIFIC_NUMBER = 1;
rpnParser.VARIABLE = 2;
rpnParser.POW = 3;
rpnParser.PLUS = 4;
rpnParser.MINUS = 5;
rpnParser.TIMES = 6;
rpnParser.DIV = 7;
rpnParser.COS = 8;
rpnParser.SIN = 9;
rpnParser.TAN = 10;
rpnParser.ACOS = 11;
rpnParser.ASIN = 12;
rpnParser.ATAN = 13;
rpnParser.LN = 14;
rpnParser.LOG = 15;
rpnParser.POINT = 16;
rpnParser.WS = 17;

rpnParser.RULE_expression = 0;
rpnParser.RULE_term = 1;
rpnParser.RULE_oper = 2;
rpnParser.RULE_signedAtom = 3;
rpnParser.RULE_variable = 4;
rpnParser.RULE_scientific = 5;

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
        this.ruleIndex = rpnParser.RULE_expression;
    }

	signedAtom() {
	    return this.getTypedRuleContext(SignedAtomContext,0);
	};

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof rpnListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof rpnListener ) {
	        listener.exitExpression(this);
		}
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = rpnParser.RULE_term;
    }

	signedAtom() {
	    return this.getTypedRuleContext(SignedAtomContext,0);
	};

	oper() {
	    return this.getTypedRuleContext(OperContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof rpnListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof rpnListener ) {
	        listener.exitTerm(this);
		}
	}


}



class OperContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = rpnParser.RULE_oper;
    }

	POW() {
	    return this.getToken(rpnParser.POW, 0);
	};

	PLUS() {
	    return this.getToken(rpnParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(rpnParser.MINUS, 0);
	};

	TIMES() {
	    return this.getToken(rpnParser.TIMES, 0);
	};

	DIV() {
	    return this.getToken(rpnParser.DIV, 0);
	};

	COS() {
	    return this.getToken(rpnParser.COS, 0);
	};

	TAN() {
	    return this.getToken(rpnParser.TAN, 0);
	};

	SIN() {
	    return this.getToken(rpnParser.SIN, 0);
	};

	ACOS() {
	    return this.getToken(rpnParser.ACOS, 0);
	};

	ATAN() {
	    return this.getToken(rpnParser.ATAN, 0);
	};

	ASIN() {
	    return this.getToken(rpnParser.ASIN, 0);
	};

	LOG() {
	    return this.getToken(rpnParser.LOG, 0);
	};

	LN() {
	    return this.getToken(rpnParser.LN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof rpnListener ) {
	        listener.enterOper(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof rpnListener ) {
	        listener.exitOper(this);
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
        this.ruleIndex = rpnParser.RULE_signedAtom;
    }

	PLUS() {
	    return this.getToken(rpnParser.PLUS, 0);
	};

	signedAtom() {
	    return this.getTypedRuleContext(SignedAtomContext,0);
	};

	MINUS() {
	    return this.getToken(rpnParser.MINUS, 0);
	};

	scientific() {
	    return this.getTypedRuleContext(ScientificContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof rpnListener ) {
	        listener.enterSignedAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof rpnListener ) {
	        listener.exitSignedAtom(this);
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
        this.ruleIndex = rpnParser.RULE_variable;
    }

	VARIABLE() {
	    return this.getToken(rpnParser.VARIABLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof rpnListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof rpnListener ) {
	        listener.exitVariable(this);
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
        this.ruleIndex = rpnParser.RULE_scientific;
    }

	SCIENTIFIC_NUMBER() {
	    return this.getToken(rpnParser.SCIENTIFIC_NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof rpnListener ) {
	        listener.enterScientific(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof rpnListener ) {
	        listener.exitScientific(this);
		}
	}


}




rpnParser.ExpressionContext = ExpressionContext; 
rpnParser.TermContext = TermContext; 
rpnParser.OperContext = OperContext; 
rpnParser.SignedAtomContext = SignedAtomContext; 
rpnParser.VariableContext = VariableContext; 
rpnParser.ScientificContext = ScientificContext; 
