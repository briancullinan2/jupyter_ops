// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/lisp/lisp.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import lispListener from './lispListener.js';
const serializedATN = [4,1,5,32,2,0,7,0,2,1,7,1,2,2,7,2,1,0,4,0,8,8,0,11,
0,12,0,9,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,22,8,1,1,2,1,2,4,2,
26,8,2,11,2,12,2,27,1,2,1,2,1,2,0,0,3,0,2,4,0,0,32,0,7,1,0,0,0,2,21,1,0,
0,0,4,23,1,0,0,0,6,8,3,2,1,0,7,6,1,0,0,0,8,9,1,0,0,0,9,7,1,0,0,0,9,10,1,
0,0,0,10,11,1,0,0,0,11,12,5,0,0,1,12,1,1,0,0,0,13,22,5,4,0,0,14,15,5,1,0,
0,15,16,3,2,1,0,16,17,5,2,0,0,17,18,3,2,1,0,18,19,5,3,0,0,19,22,1,0,0,0,
20,22,3,4,2,0,21,13,1,0,0,0,21,14,1,0,0,0,21,20,1,0,0,0,22,3,1,0,0,0,23,
25,5,1,0,0,24,26,3,2,1,0,25,24,1,0,0,0,26,27,1,0,0,0,27,25,1,0,0,0,27,28,
1,0,0,0,28,29,1,0,0,0,29,30,5,3,0,0,30,5,1,0,0,0,3,9,21,27];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class lispParser extends antlr4.Parser {

    static grammarFileName = "lisp.g4";
    static literalNames = [ null, "'('", "'.'", "')'" ];
    static symbolicNames = [ null, null, null, null, "ATOMIC_SYMBOL", "WS" ];
    static ruleNames = [ "lisp_", "s_expression", "list" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = lispParser.ruleNames;
        this.literalNames = lispParser.literalNames;
        this.symbolicNames = lispParser.symbolicNames;
    }



	lisp_() {
	    let localctx = new Lisp_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, lispParser.RULE_lisp_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 7; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 6;
	            this.s_expression();
	            this.state = 9; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1 || _la===4);
	        this.state = 11;
	        this.match(lispParser.EOF);
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



	s_expression() {
	    let localctx = new S_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, lispParser.RULE_s_expression);
	    try {
	        this.state = 21;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 13;
	            this.match(lispParser.ATOMIC_SYMBOL);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 14;
	            this.match(lispParser.T__0);
	            this.state = 15;
	            this.s_expression();
	            this.state = 16;
	            this.match(lispParser.T__1);
	            this.state = 17;
	            this.s_expression();
	            this.state = 18;
	            this.match(lispParser.T__2);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 20;
	            this.list();
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



	list() {
	    let localctx = new ListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, lispParser.RULE_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this.match(lispParser.T__0);
	        this.state = 25; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 24;
	            this.s_expression();
	            this.state = 27; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1 || _la===4);
	        this.state = 29;
	        this.match(lispParser.T__2);
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

lispParser.EOF = antlr4.Token.EOF;
lispParser.T__0 = 1;
lispParser.T__1 = 2;
lispParser.T__2 = 3;
lispParser.ATOMIC_SYMBOL = 4;
lispParser.WS = 5;

lispParser.RULE_lisp_ = 0;
lispParser.RULE_s_expression = 1;
lispParser.RULE_list = 2;

class Lisp_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lispParser.RULE_lisp_;
    }

	EOF() {
	    return this.getToken(lispParser.EOF, 0);
	};

	s_expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(S_expressionContext);
	    } else {
	        return this.getTypedRuleContext(S_expressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof lispListener ) {
	        listener.enterLisp_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lispListener ) {
	        listener.exitLisp_(this);
		}
	}


}



class S_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lispParser.RULE_s_expression;
    }

	ATOMIC_SYMBOL() {
	    return this.getToken(lispParser.ATOMIC_SYMBOL, 0);
	};

	s_expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(S_expressionContext);
	    } else {
	        return this.getTypedRuleContext(S_expressionContext,i);
	    }
	};

	list() {
	    return this.getTypedRuleContext(ListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof lispListener ) {
	        listener.enterS_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lispListener ) {
	        listener.exitS_expression(this);
		}
	}


}



class ListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lispParser.RULE_list;
    }

	s_expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(S_expressionContext);
	    } else {
	        return this.getTypedRuleContext(S_expressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof lispListener ) {
	        listener.enterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lispListener ) {
	        listener.exitList(this);
		}
	}


}




lispParser.Lisp_Context = Lisp_Context; 
lispParser.S_expressionContext = S_expressionContext; 
lispParser.ListContext = ListContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
