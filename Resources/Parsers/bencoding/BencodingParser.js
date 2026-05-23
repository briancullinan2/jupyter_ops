// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/bencoding/BencodingParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import BencodingParserListener from './BencodingParserListener.js';
const serializedATN = [4,1,8,50,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,1,0,1,0,1,1,5,1,19,8,1,10,1,12,1,22,9,1,1,2,1,2,1,2,
1,2,3,2,28,8,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,5,5,40,8,5,10,5,12,
5,43,9,5,1,5,1,5,1,6,1,6,1,6,1,6,0,0,7,0,2,4,6,8,10,12,0,0,47,0,14,1,0,0,
0,2,20,1,0,0,0,4,27,1,0,0,0,6,29,1,0,0,0,8,33,1,0,0,0,10,37,1,0,0,0,12,46,
1,0,0,0,14,15,3,2,1,0,15,16,5,0,0,1,16,1,1,0,0,0,17,19,3,4,2,0,18,17,1,0,
0,0,19,22,1,0,0,0,20,18,1,0,0,0,20,21,1,0,0,0,21,3,1,0,0,0,22,20,1,0,0,0,
23,28,3,6,3,0,24,28,5,8,0,0,25,28,3,8,4,0,26,28,3,10,5,0,27,23,1,0,0,0,27,
24,1,0,0,0,27,25,1,0,0,0,27,26,1,0,0,0,28,5,1,0,0,0,29,30,5,1,0,0,30,31,
5,2,0,0,31,32,5,6,0,0,32,7,1,0,0,0,33,34,5,4,0,0,34,35,3,2,1,0,35,36,5,6,
0,0,36,9,1,0,0,0,37,41,5,5,0,0,38,40,3,12,6,0,39,38,1,0,0,0,40,43,1,0,0,
0,41,39,1,0,0,0,41,42,1,0,0,0,42,44,1,0,0,0,43,41,1,0,0,0,44,45,5,6,0,0,
45,11,1,0,0,0,46,47,5,8,0,0,47,48,3,4,2,0,48,13,1,0,0,0,3,20,27,41];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class BencodingParser extends antlr4.Parser {

    static grammarFileName = "BencodingParser.g4";
    static literalNames = [ null, "'i'", null, null, "'l'", "'d'", "'e'" ];
    static symbolicNames = [ null, "INT_START", "INTEGER", "STRING_START", 
                             "LIST_START", "DICT_START", "END", "OTHER", 
                             "STRING" ];
    static ruleNames = [ "data", "values", "value", "integer", "list", "dict", 
                         "key_value" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = BencodingParser.ruleNames;
        this.literalNames = BencodingParser.literalNames;
        this.symbolicNames = BencodingParser.symbolicNames;
    }



	data() {
	    let localctx = new DataContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, BencodingParser.RULE_data);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14;
	        this.values();
	        this.state = 15;
	        this.match(BencodingParser.EOF);
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



	values() {
	    let localctx = new ValuesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, BencodingParser.RULE_values);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 306) !== 0)) {
	            this.state = 17;
	            this.value();
	            this.state = 22;
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



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, BencodingParser.RULE_value);
	    try {
	        this.state = 27;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 23;
	            this.integer();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 24;
	            this.match(BencodingParser.STRING);
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 25;
	            this.list();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 26;
	            this.dict();
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



	integer() {
	    let localctx = new IntegerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, BencodingParser.RULE_integer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.match(BencodingParser.INT_START);
	        this.state = 30;
	        this.match(BencodingParser.INTEGER);
	        this.state = 31;
	        this.match(BencodingParser.END);
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
	    this.enterRule(localctx, 8, BencodingParser.RULE_list);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(BencodingParser.LIST_START);
	        this.state = 34;
	        this.values();
	        this.state = 35;
	        this.match(BencodingParser.END);
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



	dict() {
	    let localctx = new DictContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, BencodingParser.RULE_dict);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(BencodingParser.DICT_START);
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 38;
	            this.key_value();
	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 44;
	        this.match(BencodingParser.END);
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



	key_value() {
	    let localctx = new Key_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, BencodingParser.RULE_key_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.match(BencodingParser.STRING);
	        this.state = 47;
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


}

BencodingParser.EOF = antlr4.Token.EOF;
BencodingParser.INT_START = 1;
BencodingParser.INTEGER = 2;
BencodingParser.STRING_START = 3;
BencodingParser.LIST_START = 4;
BencodingParser.DICT_START = 5;
BencodingParser.END = 6;
BencodingParser.OTHER = 7;
BencodingParser.STRING = 8;

BencodingParser.RULE_data = 0;
BencodingParser.RULE_values = 1;
BencodingParser.RULE_value = 2;
BencodingParser.RULE_integer = 3;
BencodingParser.RULE_list = 4;
BencodingParser.RULE_dict = 5;
BencodingParser.RULE_key_value = 6;

class DataContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BencodingParser.RULE_data;
    }

	values() {
	    return this.getTypedRuleContext(ValuesContext,0);
	};

	EOF() {
	    return this.getToken(BencodingParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BencodingParserListener ) {
	        listener.enterData(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BencodingParserListener ) {
	        listener.exitData(this);
		}
	}


}



class ValuesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BencodingParser.RULE_values;
    }

	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BencodingParserListener ) {
	        listener.enterValues(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BencodingParserListener ) {
	        listener.exitValues(this);
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
        this.ruleIndex = BencodingParser.RULE_value;
    }

	integer() {
	    return this.getTypedRuleContext(IntegerContext,0);
	};

	STRING() {
	    return this.getToken(BencodingParser.STRING, 0);
	};

	list() {
	    return this.getTypedRuleContext(ListContext,0);
	};

	dict() {
	    return this.getTypedRuleContext(DictContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BencodingParserListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BencodingParserListener ) {
	        listener.exitValue(this);
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
        this.ruleIndex = BencodingParser.RULE_integer;
    }

	INT_START() {
	    return this.getToken(BencodingParser.INT_START, 0);
	};

	INTEGER() {
	    return this.getToken(BencodingParser.INTEGER, 0);
	};

	END() {
	    return this.getToken(BencodingParser.END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BencodingParserListener ) {
	        listener.enterInteger(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BencodingParserListener ) {
	        listener.exitInteger(this);
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
        this.ruleIndex = BencodingParser.RULE_list;
    }

	LIST_START() {
	    return this.getToken(BencodingParser.LIST_START, 0);
	};

	values() {
	    return this.getTypedRuleContext(ValuesContext,0);
	};

	END() {
	    return this.getToken(BencodingParser.END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BencodingParserListener ) {
	        listener.enterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BencodingParserListener ) {
	        listener.exitList(this);
		}
	}


}



class DictContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BencodingParser.RULE_dict;
    }

	DICT_START() {
	    return this.getToken(BencodingParser.DICT_START, 0);
	};

	END() {
	    return this.getToken(BencodingParser.END, 0);
	};

	key_value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Key_valueContext);
	    } else {
	        return this.getTypedRuleContext(Key_valueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BencodingParserListener ) {
	        listener.enterDict(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BencodingParserListener ) {
	        listener.exitDict(this);
		}
	}


}



class Key_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BencodingParser.RULE_key_value;
    }

	STRING() {
	    return this.getToken(BencodingParser.STRING, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BencodingParserListener ) {
	        listener.enterKey_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BencodingParserListener ) {
	        listener.exitKey_value(this);
		}
	}


}




BencodingParser.DataContext = DataContext; 
BencodingParser.ValuesContext = ValuesContext; 
BencodingParser.ValueContext = ValueContext; 
BencodingParser.IntegerContext = IntegerContext; 
BencodingParser.ListContext = ListContext; 
BencodingParser.DictContext = DictContext; 
BencodingParser.Key_valueContext = Key_valueContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
