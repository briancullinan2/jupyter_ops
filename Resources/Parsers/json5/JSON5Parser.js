// Generated from ./json5/JSON5.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import JSON5Listener from './JSON5Listener.js';
const serializedATN = [4,1,15,74,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,3,0,16,8,0,1,0,1,0,1,1,1,1,1,1,1,1,5,1,24,8,1,10,1,12,
1,27,9,1,1,1,3,1,30,8,1,1,1,1,1,1,1,1,1,3,1,36,8,1,1,2,1,2,1,2,1,2,1,3,1,
3,1,4,1,4,1,4,1,4,1,4,3,4,49,8,4,1,5,1,5,1,5,1,5,5,5,55,8,5,10,5,12,5,58,
9,5,1,5,3,5,61,8,5,1,5,1,5,1,5,1,5,3,5,67,8,5,1,6,3,6,70,8,6,1,6,1,6,1,6,
0,0,7,0,2,4,6,8,10,12,0,2,3,0,9,10,12,12,14,14,1,0,11,12,78,0,15,1,0,0,0,
2,35,1,0,0,0,4,37,1,0,0,0,6,41,1,0,0,0,8,48,1,0,0,0,10,66,1,0,0,0,12,69,
1,0,0,0,14,16,3,8,4,0,15,14,1,0,0,0,15,16,1,0,0,0,16,17,1,0,0,0,17,18,5,
0,0,1,18,1,1,0,0,0,19,20,5,1,0,0,20,25,3,4,2,0,21,22,5,2,0,0,22,24,3,4,2,
0,23,21,1,0,0,0,24,27,1,0,0,0,25,23,1,0,0,0,25,26,1,0,0,0,26,29,1,0,0,0,
27,25,1,0,0,0,28,30,5,2,0,0,29,28,1,0,0,0,29,30,1,0,0,0,30,31,1,0,0,0,31,
32,5,3,0,0,32,36,1,0,0,0,33,34,5,1,0,0,34,36,5,3,0,0,35,19,1,0,0,0,35,33,
1,0,0,0,36,3,1,0,0,0,37,38,3,6,3,0,38,39,5,4,0,0,39,40,3,8,4,0,40,5,1,0,
0,0,41,42,7,0,0,0,42,7,1,0,0,0,43,49,5,10,0,0,44,49,3,12,6,0,45,49,3,2,1,
0,46,49,3,10,5,0,47,49,5,9,0,0,48,43,1,0,0,0,48,44,1,0,0,0,48,45,1,0,0,0,
48,46,1,0,0,0,48,47,1,0,0,0,49,9,1,0,0,0,50,51,5,5,0,0,51,56,3,8,4,0,52,
53,5,2,0,0,53,55,3,8,4,0,54,52,1,0,0,0,55,58,1,0,0,0,56,54,1,0,0,0,56,57,
1,0,0,0,57,60,1,0,0,0,58,56,1,0,0,0,59,61,5,2,0,0,60,59,1,0,0,0,60,61,1,
0,0,0,61,62,1,0,0,0,62,63,5,6,0,0,63,67,1,0,0,0,64,65,5,5,0,0,65,67,5,6,
0,0,66,50,1,0,0,0,66,64,1,0,0,0,67,11,1,0,0,0,68,70,5,13,0,0,69,68,1,0,0,
0,69,70,1,0,0,0,70,71,1,0,0,0,71,72,7,1,0,0,72,13,1,0,0,0,9,15,25,29,35,
48,56,60,66,69];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class JSON5Parser extends antlr4.Parser {

    static grammarFileName = "JSON5.g4";
    static literalNames = [ null, "'{'", "','", "'}'", "':'", "'['", "']'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, "SINGLE_LINE_COMMENT", 
                             "MULTI_LINE_COMMENT", "LITERAL", "STRING", 
                             "NUMBER", "NUMERIC_LITERAL", "SYMBOL", "IDENTIFIER", 
                             "WS" ];
    static ruleNames = [ "json5", "obj", "pair", "key", "value", "arr", 
                         "number" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = JSON5Parser.ruleNames;
        this.literalNames = JSON5Parser.literalNames;
        this.symbolicNames = JSON5Parser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	json5() {
	    let localctx = new Json5Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, JSON5Parser.RULE_json5);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JSON5Parser.T__0) | (1 << JSON5Parser.T__4) | (1 << JSON5Parser.LITERAL) | (1 << JSON5Parser.STRING) | (1 << JSON5Parser.NUMBER) | (1 << JSON5Parser.NUMERIC_LITERAL) | (1 << JSON5Parser.SYMBOL))) !== 0)) {
	            this.state = 14;
	            this.value();
	        }

	        this.state = 17;
	        this.match(JSON5Parser.EOF);
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



	obj() {
	    let localctx = new ObjContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, JSON5Parser.RULE_obj);
	    var _la = 0; // Token type
	    try {
	        this.state = 35;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 19;
	            this.match(JSON5Parser.T__0);
	            this.state = 20;
	            this.pair();
	            this.state = 25;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 21;
	                    this.match(JSON5Parser.T__1);
	                    this.state = 22;
	                    this.pair(); 
	                }
	                this.state = 27;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	            }

	            this.state = 29;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===JSON5Parser.T__1) {
	                this.state = 28;
	                this.match(JSON5Parser.T__1);
	            }

	            this.state = 31;
	            this.match(JSON5Parser.T__2);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 33;
	            this.match(JSON5Parser.T__0);
	            this.state = 34;
	            this.match(JSON5Parser.T__2);
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



	pair() {
	    let localctx = new PairContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, JSON5Parser.RULE_pair);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.key();
	        this.state = 38;
	        this.match(JSON5Parser.T__3);
	        this.state = 39;
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



	key() {
	    let localctx = new KeyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, JSON5Parser.RULE_key);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JSON5Parser.LITERAL) | (1 << JSON5Parser.STRING) | (1 << JSON5Parser.NUMERIC_LITERAL) | (1 << JSON5Parser.IDENTIFIER))) !== 0))) {
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



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, JSON5Parser.RULE_value);
	    try {
	        this.state = 48;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JSON5Parser.STRING:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 43;
	            this.match(JSON5Parser.STRING);
	            break;
	        case JSON5Parser.NUMBER:
	        case JSON5Parser.NUMERIC_LITERAL:
	        case JSON5Parser.SYMBOL:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 44;
	            this.number();
	            break;
	        case JSON5Parser.T__0:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 45;
	            this.obj();
	            break;
	        case JSON5Parser.T__4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 46;
	            this.arr();
	            break;
	        case JSON5Parser.LITERAL:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 47;
	            this.match(JSON5Parser.LITERAL);
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



	arr() {
	    let localctx = new ArrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, JSON5Parser.RULE_arr);
	    var _la = 0; // Token type
	    try {
	        this.state = 66;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 50;
	            this.match(JSON5Parser.T__4);
	            this.state = 51;
	            this.value();
	            this.state = 56;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 52;
	                    this.match(JSON5Parser.T__1);
	                    this.state = 53;
	                    this.value(); 
	                }
	                this.state = 58;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
	            }

	            this.state = 60;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===JSON5Parser.T__1) {
	                this.state = 59;
	                this.match(JSON5Parser.T__1);
	            }

	            this.state = 62;
	            this.match(JSON5Parser.T__5);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 64;
	            this.match(JSON5Parser.T__4);
	            this.state = 65;
	            this.match(JSON5Parser.T__5);
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
	    this.enterRule(localctx, 12, JSON5Parser.RULE_number);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===JSON5Parser.SYMBOL) {
	            this.state = 68;
	            this.match(JSON5Parser.SYMBOL);
	        }

	        this.state = 71;
	        _la = this._input.LA(1);
	        if(!(_la===JSON5Parser.NUMBER || _la===JSON5Parser.NUMERIC_LITERAL)) {
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

JSON5Parser.EOF = antlr4.Token.EOF;
JSON5Parser.T__0 = 1;
JSON5Parser.T__1 = 2;
JSON5Parser.T__2 = 3;
JSON5Parser.T__3 = 4;
JSON5Parser.T__4 = 5;
JSON5Parser.T__5 = 6;
JSON5Parser.SINGLE_LINE_COMMENT = 7;
JSON5Parser.MULTI_LINE_COMMENT = 8;
JSON5Parser.LITERAL = 9;
JSON5Parser.STRING = 10;
JSON5Parser.NUMBER = 11;
JSON5Parser.NUMERIC_LITERAL = 12;
JSON5Parser.SYMBOL = 13;
JSON5Parser.IDENTIFIER = 14;
JSON5Parser.WS = 15;

JSON5Parser.RULE_json5 = 0;
JSON5Parser.RULE_obj = 1;
JSON5Parser.RULE_pair = 2;
JSON5Parser.RULE_key = 3;
JSON5Parser.RULE_value = 4;
JSON5Parser.RULE_arr = 5;
JSON5Parser.RULE_number = 6;

class Json5Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSON5Parser.RULE_json5;
    }

	EOF() {
	    return this.getToken(JSON5Parser.EOF, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSON5Listener ) {
	        listener.enterJson5(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSON5Listener ) {
	        listener.exitJson5(this);
		}
	}


}



class ObjContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSON5Parser.RULE_obj;
    }

	pair = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PairContext);
	    } else {
	        return this.getTypedRuleContext(PairContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JSON5Listener ) {
	        listener.enterObj(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSON5Listener ) {
	        listener.exitObj(this);
		}
	}


}



class PairContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSON5Parser.RULE_pair;
    }

	key() {
	    return this.getTypedRuleContext(KeyContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSON5Listener ) {
	        listener.enterPair(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSON5Listener ) {
	        listener.exitPair(this);
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
        this.ruleIndex = JSON5Parser.RULE_key;
    }

	STRING() {
	    return this.getToken(JSON5Parser.STRING, 0);
	};

	IDENTIFIER() {
	    return this.getToken(JSON5Parser.IDENTIFIER, 0);
	};

	LITERAL() {
	    return this.getToken(JSON5Parser.LITERAL, 0);
	};

	NUMERIC_LITERAL() {
	    return this.getToken(JSON5Parser.NUMERIC_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JSON5Listener ) {
	        listener.enterKey(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSON5Listener ) {
	        listener.exitKey(this);
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
        this.ruleIndex = JSON5Parser.RULE_value;
    }

	STRING() {
	    return this.getToken(JSON5Parser.STRING, 0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	obj() {
	    return this.getTypedRuleContext(ObjContext,0);
	};

	arr() {
	    return this.getTypedRuleContext(ArrContext,0);
	};

	LITERAL() {
	    return this.getToken(JSON5Parser.LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JSON5Listener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSON5Listener ) {
	        listener.exitValue(this);
		}
	}


}



class ArrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSON5Parser.RULE_arr;
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
	    if(listener instanceof JSON5Listener ) {
	        listener.enterArr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSON5Listener ) {
	        listener.exitArr(this);
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
        this.ruleIndex = JSON5Parser.RULE_number;
    }

	NUMERIC_LITERAL() {
	    return this.getToken(JSON5Parser.NUMERIC_LITERAL, 0);
	};

	NUMBER() {
	    return this.getToken(JSON5Parser.NUMBER, 0);
	};

	SYMBOL() {
	    return this.getToken(JSON5Parser.SYMBOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JSON5Listener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSON5Listener ) {
	        listener.exitNumber(this);
		}
	}


}




JSON5Parser.Json5Context = Json5Context; 
JSON5Parser.ObjContext = ObjContext; 
JSON5Parser.PairContext = PairContext; 
JSON5Parser.KeyContext = KeyContext; 
JSON5Parser.ValueContext = ValueContext; 
JSON5Parser.ArrContext = ArrContext; 
JSON5Parser.NumberContext = NumberContext; 
