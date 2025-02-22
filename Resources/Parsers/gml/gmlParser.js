// Generated from ./gml/gml.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import gmlListener from './gmlListener.js';
const serializedATN = [4,1,9,58,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,4,0,20,8,0,11,0,12,0,21,1,1,1,1,4,1,
26,8,1,11,1,12,1,27,1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,3,3,40,8,3,1,
4,1,4,1,5,3,5,45,8,5,1,5,4,5,48,8,5,11,5,12,5,49,1,6,1,6,1,7,1,7,1,8,1,8,
1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,0,56,0,19,1,0,0,0,2,23,1,0,0,0,4,31,1,
0,0,0,6,39,1,0,0,0,8,41,1,0,0,0,10,44,1,0,0,0,12,51,1,0,0,0,14,53,1,0,0,
0,16,55,1,0,0,0,18,20,3,4,2,0,19,18,1,0,0,0,20,21,1,0,0,0,21,19,1,0,0,0,
21,22,1,0,0,0,22,1,1,0,0,0,23,25,5,1,0,0,24,26,3,4,2,0,25,24,1,0,0,0,26,
27,1,0,0,0,27,25,1,0,0,0,27,28,1,0,0,0,28,29,1,0,0,0,29,30,5,2,0,0,30,3,
1,0,0,0,31,32,3,8,4,0,32,33,3,6,3,0,33,5,1,0,0,0,34,40,3,10,5,0,35,40,3,
12,6,0,36,40,3,16,8,0,37,40,3,14,7,0,38,40,3,2,1,0,39,34,1,0,0,0,39,35,1,
0,0,0,39,36,1,0,0,0,39,37,1,0,0,0,39,38,1,0,0,0,40,7,1,0,0,0,41,42,5,8,0,
0,42,9,1,0,0,0,43,45,5,5,0,0,44,43,1,0,0,0,44,45,1,0,0,0,45,47,1,0,0,0,46,
48,5,6,0,0,47,46,1,0,0,0,48,49,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,50,11,
1,0,0,0,51,52,5,4,0,0,52,13,1,0,0,0,53,54,5,8,0,0,54,15,1,0,0,0,55,56,5,
3,0,0,56,17,1,0,0,0,5,21,27,39,44,49];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class gmlParser extends antlr4.Parser {

    static grammarFileName = "gml.g4";
    static literalNames = [ null, "'['", "']'" ];
    static symbolicNames = [ null, null, null, "STRINGLITERAL", "REAL", 
                             "SIGN", "DIGIT", "MANTISSA", "VALUE", "WS" ];
    static ruleNames = [ "graph", "list_", "kv", "value", "key", "integer", 
                         "realnum", "str_", "stringliteral" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = gmlParser.ruleNames;
        this.literalNames = gmlParser.literalNames;
        this.symbolicNames = gmlParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	graph() {
	    let localctx = new GraphContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, gmlParser.RULE_graph);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 18;
	            this.kv();
	            this.state = 21; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===gmlParser.VALUE);
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
	    this.enterRule(localctx, 2, gmlParser.RULE_list_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this.match(gmlParser.T__0);
	        this.state = 25; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 24;
	            this.kv();
	            this.state = 27; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===gmlParser.VALUE);
	        this.state = 29;
	        this.match(gmlParser.T__1);
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



	kv() {
	    let localctx = new KvContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, gmlParser.RULE_kv);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.key();
	        this.state = 32;
	        this.value();
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



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, gmlParser.RULE_value);
	    try {
	        this.state = 39;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case gmlParser.SIGN:
	        case gmlParser.DIGIT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 34;
	            this.integer();
	            break;
	        case gmlParser.REAL:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 35;
	            this.realnum();
	            break;
	        case gmlParser.STRINGLITERAL:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 36;
	            this.stringliteral();
	            break;
	        case gmlParser.VALUE:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 37;
	            this.str_();
	            break;
	        case gmlParser.T__0:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 38;
	            this.list_();
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



	key() {
	    let localctx = new KeyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, gmlParser.RULE_key);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this.match(gmlParser.VALUE);
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



	integer() {
	    let localctx = new IntegerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, gmlParser.RULE_integer);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===gmlParser.SIGN) {
	            this.state = 43;
	            this.match(gmlParser.SIGN);
	        }

	        this.state = 47; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 46;
	            this.match(gmlParser.DIGIT);
	            this.state = 49; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===gmlParser.DIGIT);
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



	realnum() {
	    let localctx = new RealnumContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, gmlParser.RULE_realnum);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(gmlParser.REAL);
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



	str_() {
	    let localctx = new Str_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, gmlParser.RULE_str_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(gmlParser.VALUE);
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



	stringliteral() {
	    let localctx = new StringliteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, gmlParser.RULE_stringliteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(gmlParser.STRINGLITERAL);
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

gmlParser.EOF = antlr4.Token.EOF;
gmlParser.T__0 = 1;
gmlParser.T__1 = 2;
gmlParser.STRINGLITERAL = 3;
gmlParser.REAL = 4;
gmlParser.SIGN = 5;
gmlParser.DIGIT = 6;
gmlParser.MANTISSA = 7;
gmlParser.VALUE = 8;
gmlParser.WS = 9;

gmlParser.RULE_graph = 0;
gmlParser.RULE_list_ = 1;
gmlParser.RULE_kv = 2;
gmlParser.RULE_value = 3;
gmlParser.RULE_key = 4;
gmlParser.RULE_integer = 5;
gmlParser.RULE_realnum = 6;
gmlParser.RULE_str_ = 7;
gmlParser.RULE_stringliteral = 8;

class GraphContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gmlParser.RULE_graph;
    }

	kv = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(KvContext);
	    } else {
	        return this.getTypedRuleContext(KvContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gmlListener ) {
	        listener.enterGraph(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gmlListener ) {
	        listener.exitGraph(this);
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
        this.ruleIndex = gmlParser.RULE_list_;
    }

	kv = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(KvContext);
	    } else {
	        return this.getTypedRuleContext(KvContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gmlListener ) {
	        listener.enterList_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gmlListener ) {
	        listener.exitList_(this);
		}
	}


}



class KvContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gmlParser.RULE_kv;
    }

	key() {
	    return this.getTypedRuleContext(KeyContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gmlListener ) {
	        listener.enterKv(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gmlListener ) {
	        listener.exitKv(this);
		}
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gmlParser.RULE_value;
    }

	integer() {
	    return this.getTypedRuleContext(IntegerContext,0);
	};

	realnum() {
	    return this.getTypedRuleContext(RealnumContext,0);
	};

	stringliteral() {
	    return this.getTypedRuleContext(StringliteralContext,0);
	};

	str_() {
	    return this.getTypedRuleContext(Str_Context,0);
	};

	list_() {
	    return this.getTypedRuleContext(List_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof gmlListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gmlListener ) {
	        listener.exitValue(this);
		}
	}


}



class KeyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gmlParser.RULE_key;
    }

	VALUE() {
	    return this.getToken(gmlParser.VALUE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gmlListener ) {
	        listener.enterKey(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gmlListener ) {
	        listener.exitKey(this);
		}
	}


}



class IntegerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gmlParser.RULE_integer;
    }

	SIGN() {
	    return this.getToken(gmlParser.SIGN, 0);
	};

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(gmlParser.DIGIT);
	    } else {
	        return this.getToken(gmlParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof gmlListener ) {
	        listener.enterInteger(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gmlListener ) {
	        listener.exitInteger(this);
		}
	}


}



class RealnumContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gmlParser.RULE_realnum;
    }

	REAL() {
	    return this.getToken(gmlParser.REAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gmlListener ) {
	        listener.enterRealnum(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gmlListener ) {
	        listener.exitRealnum(this);
		}
	}


}



class Str_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gmlParser.RULE_str_;
    }

	VALUE() {
	    return this.getToken(gmlParser.VALUE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gmlListener ) {
	        listener.enterStr_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gmlListener ) {
	        listener.exitStr_(this);
		}
	}


}



class StringliteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gmlParser.RULE_stringliteral;
    }

	STRINGLITERAL() {
	    return this.getToken(gmlParser.STRINGLITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gmlListener ) {
	        listener.enterStringliteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gmlListener ) {
	        listener.exitStringliteral(this);
		}
	}


}




gmlParser.GraphContext = GraphContext; 
gmlParser.List_Context = List_Context; 
gmlParser.KvContext = KvContext; 
gmlParser.ValueContext = ValueContext; 
gmlParser.KeyContext = KeyContext; 
gmlParser.IntegerContext = IntegerContext; 
gmlParser.RealnumContext = RealnumContext; 
gmlParser.Str_Context = Str_Context; 
gmlParser.StringliteralContext = StringliteralContext; 
