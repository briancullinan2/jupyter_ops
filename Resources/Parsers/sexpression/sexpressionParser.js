// Generated from ./sexpression/sexpression.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import sexpressionListener from './sexpressionListener.js';
const serializedATN = [4,1,7,38,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,5,0,
10,8,0,10,0,12,0,13,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,25,8,
1,1,2,1,2,5,2,29,8,2,10,2,12,2,32,9,2,1,2,1,2,1,3,1,3,1,3,0,0,4,0,2,4,6,
0,1,3,0,1,1,3,4,7,7,37,0,11,1,0,0,0,2,24,1,0,0,0,4,26,1,0,0,0,6,35,1,0,0,
0,8,10,3,2,1,0,9,8,1,0,0,0,10,13,1,0,0,0,11,9,1,0,0,0,11,12,1,0,0,0,12,14,
1,0,0,0,13,11,1,0,0,0,14,15,5,0,0,1,15,1,1,0,0,0,16,25,3,6,3,0,17,25,3,4,
2,0,18,19,5,5,0,0,19,20,3,2,1,0,20,21,5,7,0,0,21,22,3,2,1,0,22,23,5,6,0,
0,23,25,1,0,0,0,24,16,1,0,0,0,24,17,1,0,0,0,24,18,1,0,0,0,25,3,1,0,0,0,26,
30,5,5,0,0,27,29,3,2,1,0,28,27,1,0,0,0,29,32,1,0,0,0,30,28,1,0,0,0,30,31,
1,0,0,0,31,33,1,0,0,0,32,30,1,0,0,0,33,34,5,6,0,0,34,5,1,0,0,0,35,36,7,0,
0,0,36,7,1,0,0,0,3,11,24,30];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class sexpressionParser extends antlr4.Parser {

    static grammarFileName = "sexpression.g4";
    static literalNames = [ null, null, null, null, null, "'('", "')'", 
                            "'.'" ];
    static symbolicNames = [ null, "STRING", "WHITESPACE", "NUMBER", "SYMBOL", 
                             "LPAREN", "RPAREN", "DOT" ];
    static ruleNames = [ "sexpr", "item", "list_", "atom" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = sexpressionParser.ruleNames;
        this.literalNames = sexpressionParser.literalNames;
        this.symbolicNames = sexpressionParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	sexpr() {
	    let localctx = new SexprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, sexpressionParser.RULE_sexpr);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 11;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << sexpressionParser.STRING) | (1 << sexpressionParser.NUMBER) | (1 << sexpressionParser.SYMBOL) | (1 << sexpressionParser.LPAREN) | (1 << sexpressionParser.DOT))) !== 0)) {
	            this.state = 8;
	            this.item();
	            this.state = 13;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 14;
	        this.match(sexpressionParser.EOF);
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



	item() {
	    let localctx = new ItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, sexpressionParser.RULE_item);
	    try {
	        this.state = 24;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 16;
	            this.atom();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 17;
	            this.list_();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 18;
	            this.match(sexpressionParser.LPAREN);
	            this.state = 19;
	            this.item();
	            this.state = 20;
	            this.match(sexpressionParser.DOT);
	            this.state = 21;
	            this.item();
	            this.state = 22;
	            this.match(sexpressionParser.RPAREN);
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



	list_() {
	    let localctx = new List_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, sexpressionParser.RULE_list_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.match(sexpressionParser.LPAREN);
	        this.state = 30;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << sexpressionParser.STRING) | (1 << sexpressionParser.NUMBER) | (1 << sexpressionParser.SYMBOL) | (1 << sexpressionParser.LPAREN) | (1 << sexpressionParser.DOT))) !== 0)) {
	            this.state = 27;
	            this.item();
	            this.state = 32;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 33;
	        this.match(sexpressionParser.RPAREN);
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
	    this.enterRule(localctx, 6, sexpressionParser.RULE_atom);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << sexpressionParser.STRING) | (1 << sexpressionParser.NUMBER) | (1 << sexpressionParser.SYMBOL) | (1 << sexpressionParser.DOT))) !== 0))) {
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

sexpressionParser.EOF = antlr4.Token.EOF;
sexpressionParser.STRING = 1;
sexpressionParser.WHITESPACE = 2;
sexpressionParser.NUMBER = 3;
sexpressionParser.SYMBOL = 4;
sexpressionParser.LPAREN = 5;
sexpressionParser.RPAREN = 6;
sexpressionParser.DOT = 7;

sexpressionParser.RULE_sexpr = 0;
sexpressionParser.RULE_item = 1;
sexpressionParser.RULE_list_ = 2;
sexpressionParser.RULE_atom = 3;

class SexprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sexpressionParser.RULE_sexpr;
    }

	EOF() {
	    return this.getToken(sexpressionParser.EOF, 0);
	};

	item = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ItemContext);
	    } else {
	        return this.getTypedRuleContext(ItemContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof sexpressionListener ) {
	        listener.enterSexpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sexpressionListener ) {
	        listener.exitSexpr(this);
		}
	}


}



class ItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sexpressionParser.RULE_item;
    }

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	list_() {
	    return this.getTypedRuleContext(List_Context,0);
	};

	LPAREN() {
	    return this.getToken(sexpressionParser.LPAREN, 0);
	};

	item = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ItemContext);
	    } else {
	        return this.getTypedRuleContext(ItemContext,i);
	    }
	};

	DOT() {
	    return this.getToken(sexpressionParser.DOT, 0);
	};

	RPAREN() {
	    return this.getToken(sexpressionParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof sexpressionListener ) {
	        listener.enterItem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sexpressionListener ) {
	        listener.exitItem(this);
		}
	}


}



class List_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sexpressionParser.RULE_list_;
    }

	LPAREN() {
	    return this.getToken(sexpressionParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(sexpressionParser.RPAREN, 0);
	};

	item = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ItemContext);
	    } else {
	        return this.getTypedRuleContext(ItemContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof sexpressionListener ) {
	        listener.enterList_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sexpressionListener ) {
	        listener.exitList_(this);
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
        this.ruleIndex = sexpressionParser.RULE_atom;
    }

	STRING() {
	    return this.getToken(sexpressionParser.STRING, 0);
	};

	SYMBOL() {
	    return this.getToken(sexpressionParser.SYMBOL, 0);
	};

	NUMBER() {
	    return this.getToken(sexpressionParser.NUMBER, 0);
	};

	DOT() {
	    return this.getToken(sexpressionParser.DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof sexpressionListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sexpressionListener ) {
	        listener.exitAtom(this);
		}
	}


}




sexpressionParser.SexprContext = SexprContext; 
sexpressionParser.ItemContext = ItemContext; 
sexpressionParser.List_Context = List_Context; 
sexpressionParser.AtomContext = AtomContext; 
