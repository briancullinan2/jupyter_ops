// Generated from ./json/JSON.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import JSONListener from './JSONListener.js';
const serializedATN = [4,1,12,61,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,1,0,1,0,1,1,1,1,1,1,1,1,5,1,20,8,1,10,1,12,1,23,9,1,1,1,1,1,
1,1,1,1,3,1,29,8,1,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,
4,44,8,4,1,5,1,5,1,5,1,5,5,5,50,8,5,10,5,12,5,53,9,5,1,5,1,5,1,5,1,5,3,5,
59,8,5,1,5,0,0,6,0,2,4,6,8,10,0,0,64,0,12,1,0,0,0,2,28,1,0,0,0,4,30,1,0,
0,0,6,34,1,0,0,0,8,43,1,0,0,0,10,58,1,0,0,0,12,13,3,8,4,0,13,14,5,0,0,1,
14,1,1,0,0,0,15,16,5,1,0,0,16,21,3,4,2,0,17,18,5,2,0,0,18,20,3,4,2,0,19,
17,1,0,0,0,20,23,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,24,1,0,0,0,23,21,
1,0,0,0,24,25,5,3,0,0,25,29,1,0,0,0,26,27,5,1,0,0,27,29,5,3,0,0,28,15,1,
0,0,0,28,26,1,0,0,0,29,3,1,0,0,0,30,31,3,6,3,0,31,32,5,4,0,0,32,33,3,8,4,
0,33,5,1,0,0,0,34,35,5,10,0,0,35,7,1,0,0,0,36,44,5,10,0,0,37,44,5,11,0,0,
38,44,3,2,1,0,39,44,3,10,5,0,40,44,5,5,0,0,41,44,5,6,0,0,42,44,5,7,0,0,43,
36,1,0,0,0,43,37,1,0,0,0,43,38,1,0,0,0,43,39,1,0,0,0,43,40,1,0,0,0,43,41,
1,0,0,0,43,42,1,0,0,0,44,9,1,0,0,0,45,46,5,8,0,0,46,51,3,8,4,0,47,48,5,2,
0,0,48,50,3,8,4,0,49,47,1,0,0,0,50,53,1,0,0,0,51,49,1,0,0,0,51,52,1,0,0,
0,52,54,1,0,0,0,53,51,1,0,0,0,54,55,5,9,0,0,55,59,1,0,0,0,56,57,5,8,0,0,
57,59,5,9,0,0,58,45,1,0,0,0,58,56,1,0,0,0,59,11,1,0,0,0,5,21,28,43,51,58];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class JSONParser extends antlr4.Parser {

    static grammarFileName = "JSON.g4";
    static literalNames = [ null, "'{'", "','", "'}'", "':'", "'true'", 
                            "'false'", "'null'", "'['", "']'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, "STRING", "NUMBER", "WS" ];
    static ruleNames = [ "json", "obj", "pair", "jsonKey", "jsonValue", 
                         "arr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = JSONParser.ruleNames;
        this.literalNames = JSONParser.literalNames;
        this.symbolicNames = JSONParser.symbolicNames;
    }



	json() {
	    let localctx = new JsonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, JSONParser.RULE_json);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 12;
	        this.jsonValue();
	        this.state = 13;
	        this.match(JSONParser.EOF);
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
	    this.enterRule(localctx, 2, JSONParser.RULE_obj);
	    var _la = 0;
	    try {
	        this.state = 28;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 15;
	            this.match(JSONParser.T__0);
	            this.state = 16;
	            this.pair();
	            this.state = 21;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 17;
	                this.match(JSONParser.T__1);
	                this.state = 18;
	                this.pair();
	                this.state = 23;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 24;
	            this.match(JSONParser.T__2);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 26;
	            this.match(JSONParser.T__0);
	            this.state = 27;
	            this.match(JSONParser.T__2);
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
	    this.enterRule(localctx, 4, JSONParser.RULE_pair);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.jsonKey();
	        this.state = 31;
	        this.match(JSONParser.T__3);
	        this.state = 32;
	        this.jsonValue();
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



	jsonKey() {
	    let localctx = new JsonKeyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, JSONParser.RULE_jsonKey);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.match(JSONParser.STRING);
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



	jsonValue() {
	    let localctx = new JsonValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, JSONParser.RULE_jsonValue);
	    try {
	        this.state = 43;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 36;
	            this.match(JSONParser.STRING);
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 37;
	            this.match(JSONParser.NUMBER);
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 38;
	            this.obj();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 39;
	            this.arr();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 40;
	            this.match(JSONParser.T__4);
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 41;
	            this.match(JSONParser.T__5);
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 42;
	            this.match(JSONParser.T__6);
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
	    this.enterRule(localctx, 10, JSONParser.RULE_arr);
	    var _la = 0;
	    try {
	        this.state = 58;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 45;
	            this.match(JSONParser.T__7);
	            this.state = 46;
	            this.jsonValue();
	            this.state = 51;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 47;
	                this.match(JSONParser.T__1);
	                this.state = 48;
	                this.jsonValue();
	                this.state = 53;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 54;
	            this.match(JSONParser.T__8);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 56;
	            this.match(JSONParser.T__7);
	            this.state = 57;
	            this.match(JSONParser.T__8);
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


}

JSONParser.EOF = antlr4.Token.EOF;
JSONParser.T__0 = 1;
JSONParser.T__1 = 2;
JSONParser.T__2 = 3;
JSONParser.T__3 = 4;
JSONParser.T__4 = 5;
JSONParser.T__5 = 6;
JSONParser.T__6 = 7;
JSONParser.T__7 = 8;
JSONParser.T__8 = 9;
JSONParser.STRING = 10;
JSONParser.NUMBER = 11;
JSONParser.WS = 12;

JSONParser.RULE_json = 0;
JSONParser.RULE_obj = 1;
JSONParser.RULE_pair = 2;
JSONParser.RULE_jsonKey = 3;
JSONParser.RULE_jsonValue = 4;
JSONParser.RULE_arr = 5;

class JsonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSONParser.RULE_json;
    }

	jsonValue() {
	    return this.getTypedRuleContext(JsonValueContext,0);
	};

	EOF() {
	    return this.getToken(JSONParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONListener ) {
	        listener.enterJson(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONListener ) {
	        listener.exitJson(this);
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
        this.ruleIndex = JSONParser.RULE_obj;
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
	    if(listener instanceof JSONListener ) {
	        listener.enterObj(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONListener ) {
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
        this.ruleIndex = JSONParser.RULE_pair;
    }

	jsonKey() {
	    return this.getTypedRuleContext(JsonKeyContext,0);
	};

	jsonValue() {
	    return this.getTypedRuleContext(JsonValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONListener ) {
	        listener.enterPair(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONListener ) {
	        listener.exitPair(this);
		}
	}


}



class JsonKeyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSONParser.RULE_jsonKey;
    }

	STRING() {
	    return this.getToken(JSONParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONListener ) {
	        listener.enterJsonKey(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONListener ) {
	        listener.exitJsonKey(this);
		}
	}


}



class JsonValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSONParser.RULE_jsonValue;
    }

	STRING() {
	    return this.getToken(JSONParser.STRING, 0);
	};

	NUMBER() {
	    return this.getToken(JSONParser.NUMBER, 0);
	};

	obj() {
	    return this.getTypedRuleContext(ObjContext,0);
	};

	arr() {
	    return this.getTypedRuleContext(ArrContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONListener ) {
	        listener.enterJsonValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONListener ) {
	        listener.exitJsonValue(this);
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
        this.ruleIndex = JSONParser.RULE_arr;
    }

	jsonValue = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(JsonValueContext);
	    } else {
	        return this.getTypedRuleContext(JsonValueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JSONListener ) {
	        listener.enterArr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONListener ) {
	        listener.exitArr(this);
		}
	}


}




JSONParser.JsonContext = JsonContext; 
JSONParser.ObjContext = ObjContext; 
JSONParser.PairContext = PairContext; 
JSONParser.JsonKeyContext = JsonKeyContext; 
JSONParser.JsonValueContext = JsonValueContext; 
JSONParser.ArrContext = ArrContext; 
