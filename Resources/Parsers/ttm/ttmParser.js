// Generated from ./ttm/ttm.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ttmListener from './ttmListener.js';
const serializedATN = [4,1,8,66,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,5,0,18,8,0,10,0,12,0,21,9,0,1,0,3,0,24,8,0,1,
1,1,1,3,1,28,8,1,1,2,1,2,1,2,1,2,3,2,34,8,2,1,2,1,2,1,3,1,3,1,3,1,3,3,3,
42,8,3,1,3,1,3,1,4,1,4,1,4,5,4,49,8,4,10,4,12,4,52,9,4,1,5,1,5,1,5,1,5,1,
5,1,5,3,5,60,8,5,1,6,1,6,1,7,1,7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,1,1,0,6,
7,65,0,19,1,0,0,0,2,27,1,0,0,0,4,29,1,0,0,0,6,37,1,0,0,0,8,45,1,0,0,0,10,
59,1,0,0,0,12,61,1,0,0,0,14,63,1,0,0,0,16,18,3,2,1,0,17,16,1,0,0,0,18,21,
1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,23,1,0,0,0,21,19,1,0,0,0,22,24,5,
0,0,1,23,22,1,0,0,0,23,24,1,0,0,0,24,1,1,0,0,0,25,28,3,4,2,0,26,28,3,6,3,
0,27,25,1,0,0,0,27,26,1,0,0,0,28,3,1,0,0,0,29,30,5,4,0,0,30,33,3,12,6,0,
31,32,5,1,0,0,32,34,3,8,4,0,33,31,1,0,0,0,33,34,1,0,0,0,34,35,1,0,0,0,35,
36,5,2,0,0,36,5,1,0,0,0,37,38,5,5,0,0,38,41,3,12,6,0,39,40,5,1,0,0,40,42,
3,8,4,0,41,39,1,0,0,0,41,42,1,0,0,0,42,43,1,0,0,0,43,44,5,2,0,0,44,7,1,0,
0,0,45,50,3,10,5,0,46,47,5,1,0,0,47,49,3,10,5,0,48,46,1,0,0,0,49,52,1,0,
0,0,50,48,1,0,0,0,50,51,1,0,0,0,51,9,1,0,0,0,52,50,1,0,0,0,53,60,3,2,1,0,
54,55,5,3,0,0,55,56,3,2,1,0,56,57,5,2,0,0,57,60,1,0,0,0,58,60,3,14,7,0,59,
53,1,0,0,0,59,54,1,0,0,0,59,58,1,0,0,0,60,11,1,0,0,0,61,62,3,14,7,0,62,13,
1,0,0,0,63,64,7,0,0,0,64,15,1,0,0,0,7,19,23,27,33,41,50,59];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ttmParser extends antlr4.Parser {

    static grammarFileName = "ttm.g4";
    static literalNames = [ null, "';'", "'>'", "'<'", "'#<'", "'##<'" ];
    static symbolicNames = [ null, null, null, null, "ACTIVE", "NEUTRAL", 
                             "ESCSTRING", "STRING", "WS" ];
    static ruleNames = [ "program", "function_", "active", "neutral", "arglist", 
                         "arg", "functionname", "string" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ttmParser.ruleNames;
        this.literalNames = ttmParser.literalNames;
        this.symbolicNames = ttmParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ttmParser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ttmParser.ACTIVE || _la===ttmParser.NEUTRAL) {
	            this.state = 16;
	            this.function_();
	            this.state = 21;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 23;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        if(la_===1) {
	            this.state = 22;
	            this.match(ttmParser.EOF);

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
	    this.enterRule(localctx, 2, ttmParser.RULE_function_);
	    try {
	        this.state = 27;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ttmParser.ACTIVE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 25;
	            this.active();
	            break;
	        case ttmParser.NEUTRAL:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 26;
	            this.neutral();
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



	active() {
	    let localctx = new ActiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ttmParser.RULE_active);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.match(ttmParser.ACTIVE);
	        this.state = 30;
	        this.functionname();
	        this.state = 33;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ttmParser.T__0) {
	            this.state = 31;
	            this.match(ttmParser.T__0);
	            this.state = 32;
	            this.arglist();
	        }

	        this.state = 35;
	        this.match(ttmParser.T__1);
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



	neutral() {
	    let localctx = new NeutralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ttmParser.RULE_neutral);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(ttmParser.NEUTRAL);
	        this.state = 38;
	        this.functionname();
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ttmParser.T__0) {
	            this.state = 39;
	            this.match(ttmParser.T__0);
	            this.state = 40;
	            this.arglist();
	        }

	        this.state = 43;
	        this.match(ttmParser.T__1);
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



	arglist() {
	    let localctx = new ArglistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ttmParser.RULE_arglist);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.arg();
	        this.state = 50;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ttmParser.T__0) {
	            this.state = 46;
	            this.match(ttmParser.T__0);
	            this.state = 47;
	            this.arg();
	            this.state = 52;
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



	arg() {
	    let localctx = new ArgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ttmParser.RULE_arg);
	    try {
	        this.state = 59;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ttmParser.ACTIVE:
	        case ttmParser.NEUTRAL:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 53;
	            this.function_();
	            break;
	        case ttmParser.T__2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 54;
	            this.match(ttmParser.T__2);
	            this.state = 55;
	            this.function_();
	            this.state = 56;
	            this.match(ttmParser.T__1);
	            break;
	        case ttmParser.ESCSTRING:
	        case ttmParser.STRING:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 58;
	            this.string();
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



	functionname() {
	    let localctx = new FunctionnameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ttmParser.RULE_functionname);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.string();
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



	string() {
	    let localctx = new StringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ttmParser.RULE_string);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        _la = this._input.LA(1);
	        if(!(_la===ttmParser.ESCSTRING || _la===ttmParser.STRING)) {
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

ttmParser.EOF = antlr4.Token.EOF;
ttmParser.T__0 = 1;
ttmParser.T__1 = 2;
ttmParser.T__2 = 3;
ttmParser.ACTIVE = 4;
ttmParser.NEUTRAL = 5;
ttmParser.ESCSTRING = 6;
ttmParser.STRING = 7;
ttmParser.WS = 8;

ttmParser.RULE_program = 0;
ttmParser.RULE_function_ = 1;
ttmParser.RULE_active = 2;
ttmParser.RULE_neutral = 3;
ttmParser.RULE_arglist = 4;
ttmParser.RULE_arg = 5;
ttmParser.RULE_functionname = 6;
ttmParser.RULE_string = 7;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ttmParser.RULE_program;
    }

	function_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Function_Context);
	    } else {
	        return this.getTypedRuleContext(Function_Context,i);
	    }
	};

	EOF() {
	    return this.getToken(ttmParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ttmListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ttmListener ) {
	        listener.exitProgram(this);
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
        this.ruleIndex = ttmParser.RULE_function_;
    }

	active() {
	    return this.getTypedRuleContext(ActiveContext,0);
	};

	neutral() {
	    return this.getTypedRuleContext(NeutralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ttmListener ) {
	        listener.enterFunction_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ttmListener ) {
	        listener.exitFunction_(this);
		}
	}


}



class ActiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ttmParser.RULE_active;
    }

	ACTIVE() {
	    return this.getToken(ttmParser.ACTIVE, 0);
	};

	functionname() {
	    return this.getTypedRuleContext(FunctionnameContext,0);
	};

	arglist() {
	    return this.getTypedRuleContext(ArglistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ttmListener ) {
	        listener.enterActive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ttmListener ) {
	        listener.exitActive(this);
		}
	}


}



class NeutralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ttmParser.RULE_neutral;
    }

	NEUTRAL() {
	    return this.getToken(ttmParser.NEUTRAL, 0);
	};

	functionname() {
	    return this.getTypedRuleContext(FunctionnameContext,0);
	};

	arglist() {
	    return this.getTypedRuleContext(ArglistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ttmListener ) {
	        listener.enterNeutral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ttmListener ) {
	        listener.exitNeutral(this);
		}
	}


}



class ArglistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ttmParser.RULE_arglist;
    }

	arg = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgContext);
	    } else {
	        return this.getTypedRuleContext(ArgContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ttmListener ) {
	        listener.enterArglist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ttmListener ) {
	        listener.exitArglist(this);
		}
	}


}



class ArgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ttmParser.RULE_arg;
    }

	function_() {
	    return this.getTypedRuleContext(Function_Context,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ttmListener ) {
	        listener.enterArg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ttmListener ) {
	        listener.exitArg(this);
		}
	}


}



class FunctionnameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ttmParser.RULE_functionname;
    }

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ttmListener ) {
	        listener.enterFunctionname(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ttmListener ) {
	        listener.exitFunctionname(this);
		}
	}


}



class StringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ttmParser.RULE_string;
    }

	STRING() {
	    return this.getToken(ttmParser.STRING, 0);
	};

	ESCSTRING() {
	    return this.getToken(ttmParser.ESCSTRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ttmListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ttmListener ) {
	        listener.exitString(this);
		}
	}


}




ttmParser.ProgramContext = ProgramContext; 
ttmParser.Function_Context = Function_Context; 
ttmParser.ActiveContext = ActiveContext; 
ttmParser.NeutralContext = NeutralContext; 
ttmParser.ArglistContext = ArglistContext; 
ttmParser.ArgContext = ArgContext; 
ttmParser.FunctionnameContext = FunctionnameContext; 
ttmParser.StringContext = StringContext; 
