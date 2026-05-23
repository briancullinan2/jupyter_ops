// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/amazon-states-language-intrinsic-functions/ASLIntrinsicParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ASLIntrinsicParserListener from './ASLIntrinsicParserListener.js';
const serializedATN = [4,1,33,45,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,3,5,3,25,8,3,10,3,
12,3,28,9,3,1,3,1,3,1,3,1,3,3,3,34,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,43,
8,4,1,4,0,0,5,0,2,4,6,8,0,2,1,0,11,28,1,0,8,9,47,0,10,1,0,0,0,2,13,1,0,0,
0,4,18,1,0,0,0,6,33,1,0,0,0,8,42,1,0,0,0,10,11,3,2,1,0,11,12,5,0,0,1,12,
1,1,0,0,0,13,14,5,10,0,0,14,15,5,7,0,0,15,16,3,4,2,0,16,17,3,6,3,0,17,3,
1,0,0,0,18,19,7,0,0,0,19,5,1,0,0,0,20,21,5,4,0,0,21,26,3,8,4,0,22,23,5,6,
0,0,23,25,3,8,4,0,24,22,1,0,0,0,25,28,1,0,0,0,26,24,1,0,0,0,26,27,1,0,0,
0,27,29,1,0,0,0,28,26,1,0,0,0,29,30,5,5,0,0,30,34,1,0,0,0,31,32,5,4,0,0,
32,34,5,5,0,0,33,20,1,0,0,0,33,31,1,0,0,0,34,7,1,0,0,0,35,43,5,29,0,0,36,
43,5,30,0,0,37,43,5,31,0,0,38,43,7,1,0,0,39,43,5,1,0,0,40,43,5,2,0,0,41,
43,3,2,1,0,42,35,1,0,0,0,42,36,1,0,0,0,42,37,1,0,0,0,42,38,1,0,0,0,42,39,
1,0,0,0,42,40,1,0,0,0,42,41,1,0,0,0,43,9,1,0,0,0,3,26,33,42];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ASLIntrinsicParser extends antlr4.Parser {

    static grammarFileName = "ASLIntrinsicParser.g4";
    static literalNames = [ null, null, null, "'$'", "'('", "')'", "','", 
                            "'.'", "'true'", "'false'", "'States'", "'Format'", 
                            "'StringToJson'", "'JsonToString'", "'Array'", 
                            "'ArrayPartition'", "'ArrayContains'", "'ArrayRange'", 
                            "'ArrayGetItem'", "'ArrayLength'", "'ArrayUnique'", 
                            "'Base64Encode'", "'Base64Decode'", "'Hash'", 
                            "'JsonMerge'", "'MathRandom'", "'MathAdd'", 
                            "'StringSplit'", "'UUID'" ];
    static symbolicNames = [ null, "CONTEXT_PATH_STRING", "JSON_PATH_STRING", 
                             "DOLLAR", "LPAREN", "RPAREN", "COMMA", "DOT", 
                             "TRUE", "FALSE", "States", "Format", "StringToJson", 
                             "JsonToString", "Array", "ArrayPartition", 
                             "ArrayContains", "ArrayRange", "ArrayGetItem", 
                             "ArrayLength", "ArrayUnique", "Base64Encode", 
                             "Base64Decode", "Hash", "JsonMerge", "MathRandom", 
                             "MathAdd", "StringSplit", "UUID", "STRING", 
                             "INT", "NUMBER", "IDENTIFIER", "WS" ];
    static ruleNames = [ "intrinsic_function", "states_func_decl", "state_fun_name", 
                         "func_arg_list", "func_arg" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ASLIntrinsicParser.ruleNames;
        this.literalNames = ASLIntrinsicParser.literalNames;
        this.symbolicNames = ASLIntrinsicParser.symbolicNames;
    }



	intrinsic_function() {
	    let localctx = new Intrinsic_functionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ASLIntrinsicParser.RULE_intrinsic_function);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 10;
	        this.states_func_decl();
	        this.state = 11;
	        this.match(ASLIntrinsicParser.EOF);
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



	states_func_decl() {
	    let localctx = new States_func_declContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ASLIntrinsicParser.RULE_states_func_decl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 13;
	        this.match(ASLIntrinsicParser.States);
	        this.state = 14;
	        this.match(ASLIntrinsicParser.DOT);
	        this.state = 15;
	        this.state_fun_name();
	        this.state = 16;
	        this.func_arg_list();
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



	state_fun_name() {
	    let localctx = new State_fun_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ASLIntrinsicParser.RULE_state_fun_name);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 536868864) !== 0))) {
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



	func_arg_list() {
	    let localctx = new Func_arg_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ASLIntrinsicParser.RULE_func_arg_list);
	    var _la = 0;
	    try {
	        this.state = 33;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 20;
	            this.match(ASLIntrinsicParser.LPAREN);
	            this.state = 21;
	            this.func_arg();
	            this.state = 26;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6) {
	                this.state = 22;
	                this.match(ASLIntrinsicParser.COMMA);
	                this.state = 23;
	                this.func_arg();
	                this.state = 28;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 29;
	            this.match(ASLIntrinsicParser.RPAREN);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 31;
	            this.match(ASLIntrinsicParser.LPAREN);
	            this.state = 32;
	            this.match(ASLIntrinsicParser.RPAREN);
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



	func_arg() {
	    let localctx = new Func_argContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ASLIntrinsicParser.RULE_func_arg);
	    var _la = 0;
	    try {
	        this.state = 42;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 29:
	            localctx = new Func_arg_stringContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 35;
	            this.match(ASLIntrinsicParser.STRING);
	            break;
	        case 30:
	            localctx = new Func_arg_intContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 36;
	            this.match(ASLIntrinsicParser.INT);
	            break;
	        case 31:
	            localctx = new Func_arg_floatContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 37;
	            this.match(ASLIntrinsicParser.NUMBER);
	            break;
	        case 8:
	        case 9:
	            localctx = new Func_arg_boolContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 38;
	            _la = this._input.LA(1);
	            if(!(_la===8 || _la===9)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case 1:
	            localctx = new Func_arg_context_pathContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 39;
	            this.match(ASLIntrinsicParser.CONTEXT_PATH_STRING);
	            break;
	        case 2:
	            localctx = new Func_arg_json_pathContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 40;
	            this.match(ASLIntrinsicParser.JSON_PATH_STRING);
	            break;
	        case 10:
	            localctx = new Func_arg_func_declContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 41;
	            this.states_func_decl();
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


}

ASLIntrinsicParser.EOF = antlr4.Token.EOF;
ASLIntrinsicParser.CONTEXT_PATH_STRING = 1;
ASLIntrinsicParser.JSON_PATH_STRING = 2;
ASLIntrinsicParser.DOLLAR = 3;
ASLIntrinsicParser.LPAREN = 4;
ASLIntrinsicParser.RPAREN = 5;
ASLIntrinsicParser.COMMA = 6;
ASLIntrinsicParser.DOT = 7;
ASLIntrinsicParser.TRUE = 8;
ASLIntrinsicParser.FALSE = 9;
ASLIntrinsicParser.States = 10;
ASLIntrinsicParser.Format = 11;
ASLIntrinsicParser.StringToJson = 12;
ASLIntrinsicParser.JsonToString = 13;
ASLIntrinsicParser.Array = 14;
ASLIntrinsicParser.ArrayPartition = 15;
ASLIntrinsicParser.ArrayContains = 16;
ASLIntrinsicParser.ArrayRange = 17;
ASLIntrinsicParser.ArrayGetItem = 18;
ASLIntrinsicParser.ArrayLength = 19;
ASLIntrinsicParser.ArrayUnique = 20;
ASLIntrinsicParser.Base64Encode = 21;
ASLIntrinsicParser.Base64Decode = 22;
ASLIntrinsicParser.Hash = 23;
ASLIntrinsicParser.JsonMerge = 24;
ASLIntrinsicParser.MathRandom = 25;
ASLIntrinsicParser.MathAdd = 26;
ASLIntrinsicParser.StringSplit = 27;
ASLIntrinsicParser.UUID = 28;
ASLIntrinsicParser.STRING = 29;
ASLIntrinsicParser.INT = 30;
ASLIntrinsicParser.NUMBER = 31;
ASLIntrinsicParser.IDENTIFIER = 32;
ASLIntrinsicParser.WS = 33;

ASLIntrinsicParser.RULE_intrinsic_function = 0;
ASLIntrinsicParser.RULE_states_func_decl = 1;
ASLIntrinsicParser.RULE_state_fun_name = 2;
ASLIntrinsicParser.RULE_func_arg_list = 3;
ASLIntrinsicParser.RULE_func_arg = 4;

class Intrinsic_functionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASLIntrinsicParser.RULE_intrinsic_function;
    }

	states_func_decl() {
	    return this.getTypedRuleContext(States_func_declContext,0);
	};

	EOF() {
	    return this.getToken(ASLIntrinsicParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ASLIntrinsicParserListener ) {
	        listener.enterIntrinsic_function(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASLIntrinsicParserListener ) {
	        listener.exitIntrinsic_function(this);
		}
	}


}



class States_func_declContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASLIntrinsicParser.RULE_states_func_decl;
    }

	States() {
	    return this.getToken(ASLIntrinsicParser.States, 0);
	};

	DOT() {
	    return this.getToken(ASLIntrinsicParser.DOT, 0);
	};

	state_fun_name() {
	    return this.getTypedRuleContext(State_fun_nameContext,0);
	};

	func_arg_list() {
	    return this.getTypedRuleContext(Func_arg_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ASLIntrinsicParserListener ) {
	        listener.enterStates_func_decl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASLIntrinsicParserListener ) {
	        listener.exitStates_func_decl(this);
		}
	}


}



class State_fun_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASLIntrinsicParser.RULE_state_fun_name;
    }

	Format() {
	    return this.getToken(ASLIntrinsicParser.Format, 0);
	};

	StringToJson() {
	    return this.getToken(ASLIntrinsicParser.StringToJson, 0);
	};

	JsonToString() {
	    return this.getToken(ASLIntrinsicParser.JsonToString, 0);
	};

	Array() {
	    return this.getToken(ASLIntrinsicParser.Array, 0);
	};

	ArrayPartition() {
	    return this.getToken(ASLIntrinsicParser.ArrayPartition, 0);
	};

	ArrayContains() {
	    return this.getToken(ASLIntrinsicParser.ArrayContains, 0);
	};

	ArrayRange() {
	    return this.getToken(ASLIntrinsicParser.ArrayRange, 0);
	};

	ArrayGetItem() {
	    return this.getToken(ASLIntrinsicParser.ArrayGetItem, 0);
	};

	ArrayLength() {
	    return this.getToken(ASLIntrinsicParser.ArrayLength, 0);
	};

	ArrayUnique() {
	    return this.getToken(ASLIntrinsicParser.ArrayUnique, 0);
	};

	Base64Encode() {
	    return this.getToken(ASLIntrinsicParser.Base64Encode, 0);
	};

	Base64Decode() {
	    return this.getToken(ASLIntrinsicParser.Base64Decode, 0);
	};

	Hash() {
	    return this.getToken(ASLIntrinsicParser.Hash, 0);
	};

	JsonMerge() {
	    return this.getToken(ASLIntrinsicParser.JsonMerge, 0);
	};

	MathRandom() {
	    return this.getToken(ASLIntrinsicParser.MathRandom, 0);
	};

	MathAdd() {
	    return this.getToken(ASLIntrinsicParser.MathAdd, 0);
	};

	StringSplit() {
	    return this.getToken(ASLIntrinsicParser.StringSplit, 0);
	};

	UUID() {
	    return this.getToken(ASLIntrinsicParser.UUID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ASLIntrinsicParserListener ) {
	        listener.enterState_fun_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASLIntrinsicParserListener ) {
	        listener.exitState_fun_name(this);
		}
	}


}



class Func_arg_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASLIntrinsicParser.RULE_func_arg_list;
    }

	LPAREN() {
	    return this.getToken(ASLIntrinsicParser.LPAREN, 0);
	};

	func_arg = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Func_argContext);
	    } else {
	        return this.getTypedRuleContext(Func_argContext,i);
	    }
	};

	RPAREN() {
	    return this.getToken(ASLIntrinsicParser.RPAREN, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ASLIntrinsicParser.COMMA);
	    } else {
	        return this.getToken(ASLIntrinsicParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ASLIntrinsicParserListener ) {
	        listener.enterFunc_arg_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASLIntrinsicParserListener ) {
	        listener.exitFunc_arg_list(this);
		}
	}


}



class Func_argContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ASLIntrinsicParser.RULE_func_arg;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class Func_arg_context_pathContext extends Func_argContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	CONTEXT_PATH_STRING() {
	    return this.getToken(ASLIntrinsicParser.CONTEXT_PATH_STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ASLIntrinsicParserListener ) {
	        listener.enterFunc_arg_context_path(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASLIntrinsicParserListener ) {
	        listener.exitFunc_arg_context_path(this);
		}
	}


}

ASLIntrinsicParser.Func_arg_context_pathContext = Func_arg_context_pathContext;

class Func_arg_floatContext extends Func_argContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(ASLIntrinsicParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ASLIntrinsicParserListener ) {
	        listener.enterFunc_arg_float(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASLIntrinsicParserListener ) {
	        listener.exitFunc_arg_float(this);
		}
	}


}

ASLIntrinsicParser.Func_arg_floatContext = Func_arg_floatContext;

class Func_arg_func_declContext extends Func_argContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	states_func_decl() {
	    return this.getTypedRuleContext(States_func_declContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ASLIntrinsicParserListener ) {
	        listener.enterFunc_arg_func_decl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASLIntrinsicParserListener ) {
	        listener.exitFunc_arg_func_decl(this);
		}
	}


}

ASLIntrinsicParser.Func_arg_func_declContext = Func_arg_func_declContext;

class Func_arg_intContext extends Func_argContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INT() {
	    return this.getToken(ASLIntrinsicParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ASLIntrinsicParserListener ) {
	        listener.enterFunc_arg_int(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASLIntrinsicParserListener ) {
	        listener.exitFunc_arg_int(this);
		}
	}


}

ASLIntrinsicParser.Func_arg_intContext = Func_arg_intContext;

class Func_arg_boolContext extends Func_argContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	TRUE() {
	    return this.getToken(ASLIntrinsicParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(ASLIntrinsicParser.FALSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ASLIntrinsicParserListener ) {
	        listener.enterFunc_arg_bool(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASLIntrinsicParserListener ) {
	        listener.exitFunc_arg_bool(this);
		}
	}


}

ASLIntrinsicParser.Func_arg_boolContext = Func_arg_boolContext;

class Func_arg_stringContext extends Func_argContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STRING() {
	    return this.getToken(ASLIntrinsicParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ASLIntrinsicParserListener ) {
	        listener.enterFunc_arg_string(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASLIntrinsicParserListener ) {
	        listener.exitFunc_arg_string(this);
		}
	}


}

ASLIntrinsicParser.Func_arg_stringContext = Func_arg_stringContext;

class Func_arg_json_pathContext extends Func_argContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	JSON_PATH_STRING() {
	    return this.getToken(ASLIntrinsicParser.JSON_PATH_STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ASLIntrinsicParserListener ) {
	        listener.enterFunc_arg_json_path(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ASLIntrinsicParserListener ) {
	        listener.exitFunc_arg_json_path(this);
		}
	}


}

ASLIntrinsicParser.Func_arg_json_pathContext = Func_arg_json_pathContext;


ASLIntrinsicParser.Intrinsic_functionContext = Intrinsic_functionContext; 
ASLIntrinsicParser.States_func_declContext = States_func_declContext; 
ASLIntrinsicParser.State_fun_nameContext = State_fun_nameContext; 
ASLIntrinsicParser.Func_arg_listContext = Func_arg_listContext; 
ASLIntrinsicParser.Func_argContext = Func_argContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
