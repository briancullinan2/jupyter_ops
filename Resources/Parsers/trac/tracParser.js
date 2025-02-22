// Generated from ./trac/trac.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import tracListener from './tracListener.js';
const serializedATN = [4,1,7,68,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,5,0,18,8,0,10,0,12,0,21,9,0,1,0,3,0,24,8,0,1,
1,1,1,3,1,28,8,1,1,2,1,2,1,2,1,2,1,2,3,2,35,8,2,1,2,1,2,1,3,1,3,1,3,1,3,
1,3,3,3,44,8,3,1,3,1,3,1,4,1,4,1,4,5,4,51,8,4,10,4,12,4,54,9,4,1,5,1,5,1,
5,1,5,1,5,1,5,3,5,62,8,5,1,6,1,6,1,7,1,7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,
0,67,0,19,1,0,0,0,2,27,1,0,0,0,4,29,1,0,0,0,6,38,1,0,0,0,8,47,1,0,0,0,10,
61,1,0,0,0,12,63,1,0,0,0,14,65,1,0,0,0,16,18,3,2,1,0,17,16,1,0,0,0,18,21,
1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,23,1,0,0,0,21,19,1,0,0,0,22,24,5,
0,0,1,23,22,1,0,0,0,23,24,1,0,0,0,24,1,1,0,0,0,25,28,3,4,2,0,26,28,3,6,3,
0,27,25,1,0,0,0,27,26,1,0,0,0,28,3,1,0,0,0,29,30,5,1,0,0,30,31,5,2,0,0,31,
34,3,12,6,0,32,33,5,3,0,0,33,35,3,8,4,0,34,32,1,0,0,0,34,35,1,0,0,0,35,36,
1,0,0,0,36,37,5,4,0,0,37,5,1,0,0,0,38,39,5,5,0,0,39,40,5,2,0,0,40,43,3,12,
6,0,41,42,5,3,0,0,42,44,3,8,4,0,43,41,1,0,0,0,43,44,1,0,0,0,44,45,1,0,0,
0,45,46,5,4,0,0,46,7,1,0,0,0,47,52,3,10,5,0,48,49,5,3,0,0,49,51,3,10,5,0,
50,48,1,0,0,0,51,54,1,0,0,0,52,50,1,0,0,0,52,53,1,0,0,0,53,9,1,0,0,0,54,
52,1,0,0,0,55,62,3,2,1,0,56,57,5,2,0,0,57,58,3,2,1,0,58,59,5,4,0,0,59,62,
1,0,0,0,60,62,3,14,7,0,61,55,1,0,0,0,61,56,1,0,0,0,61,60,1,0,0,0,62,11,1,
0,0,0,63,64,3,14,7,0,64,13,1,0,0,0,65,66,5,6,0,0,66,15,1,0,0,0,7,19,23,27,
34,43,52,61];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class tracParser extends antlr4.Parser {

    static grammarFileName = "trac.g4";
    static literalNames = [ null, "'#'", "'('", "','", "')'", "'##'" ];
    static symbolicNames = [ null, null, null, null, null, null, "STRING", 
                             "WS" ];
    static ruleNames = [ "program", "macro", "active", "neutral", "arglist", 
                         "arg", "name", "string" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = tracParser.ruleNames;
        this.literalNames = tracParser.literalNames;
        this.symbolicNames = tracParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, tracParser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===tracParser.T__0 || _la===tracParser.T__4) {
	            this.state = 16;
	            this.macro();
	            this.state = 21;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 23;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        if(la_===1) {
	            this.state = 22;
	            this.match(tracParser.EOF);

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



	macro() {
	    let localctx = new MacroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, tracParser.RULE_macro);
	    try {
	        this.state = 27;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case tracParser.T__0:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 25;
	            this.active();
	            break;
	        case tracParser.T__4:
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
	    this.enterRule(localctx, 4, tracParser.RULE_active);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.match(tracParser.T__0);
	        this.state = 30;
	        this.match(tracParser.T__1);
	        this.state = 31;
	        this.name();
	        this.state = 34;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===tracParser.T__2) {
	            this.state = 32;
	            this.match(tracParser.T__2);
	            this.state = 33;
	            this.arglist();
	        }

	        this.state = 36;
	        this.match(tracParser.T__3);
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
	    this.enterRule(localctx, 6, tracParser.RULE_neutral);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.match(tracParser.T__4);
	        this.state = 39;
	        this.match(tracParser.T__1);
	        this.state = 40;
	        this.name();
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===tracParser.T__2) {
	            this.state = 41;
	            this.match(tracParser.T__2);
	            this.state = 42;
	            this.arglist();
	        }

	        this.state = 45;
	        this.match(tracParser.T__3);
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
	    this.enterRule(localctx, 8, tracParser.RULE_arglist);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.arg();
	        this.state = 52;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===tracParser.T__2) {
	            this.state = 48;
	            this.match(tracParser.T__2);
	            this.state = 49;
	            this.arg();
	            this.state = 54;
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
	    this.enterRule(localctx, 10, tracParser.RULE_arg);
	    try {
	        this.state = 61;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case tracParser.T__0:
	        case tracParser.T__4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 55;
	            this.macro();
	            break;
	        case tracParser.T__1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 56;
	            this.match(tracParser.T__1);
	            this.state = 57;
	            this.macro();
	            this.state = 58;
	            this.match(tracParser.T__3);
	            break;
	        case tracParser.STRING:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 60;
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



	name() {
	    let localctx = new NameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, tracParser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
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
	    this.enterRule(localctx, 14, tracParser.RULE_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(tracParser.STRING);
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

tracParser.EOF = antlr4.Token.EOF;
tracParser.T__0 = 1;
tracParser.T__1 = 2;
tracParser.T__2 = 3;
tracParser.T__3 = 4;
tracParser.T__4 = 5;
tracParser.STRING = 6;
tracParser.WS = 7;

tracParser.RULE_program = 0;
tracParser.RULE_macro = 1;
tracParser.RULE_active = 2;
tracParser.RULE_neutral = 3;
tracParser.RULE_arglist = 4;
tracParser.RULE_arg = 5;
tracParser.RULE_name = 6;
tracParser.RULE_string = 7;

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
        this.ruleIndex = tracParser.RULE_program;
    }

	macro = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MacroContext);
	    } else {
	        return this.getTypedRuleContext(MacroContext,i);
	    }
	};

	EOF() {
	    return this.getToken(tracParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tracListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tracListener ) {
	        listener.exitProgram(this);
		}
	}


}



class MacroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tracParser.RULE_macro;
    }

	active() {
	    return this.getTypedRuleContext(ActiveContext,0);
	};

	neutral() {
	    return this.getTypedRuleContext(NeutralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tracListener ) {
	        listener.enterMacro(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tracListener ) {
	        listener.exitMacro(this);
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
        this.ruleIndex = tracParser.RULE_active;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	arglist() {
	    return this.getTypedRuleContext(ArglistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tracListener ) {
	        listener.enterActive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tracListener ) {
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
        this.ruleIndex = tracParser.RULE_neutral;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	arglist() {
	    return this.getTypedRuleContext(ArglistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tracListener ) {
	        listener.enterNeutral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tracListener ) {
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
        this.ruleIndex = tracParser.RULE_arglist;
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
	    if(listener instanceof tracListener ) {
	        listener.enterArglist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tracListener ) {
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
        this.ruleIndex = tracParser.RULE_arg;
    }

	macro() {
	    return this.getTypedRuleContext(MacroContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tracListener ) {
	        listener.enterArg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tracListener ) {
	        listener.exitArg(this);
		}
	}


}



class NameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tracParser.RULE_name;
    }

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tracListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tracListener ) {
	        listener.exitName(this);
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
        this.ruleIndex = tracParser.RULE_string;
    }

	STRING() {
	    return this.getToken(tracParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tracListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tracListener ) {
	        listener.exitString(this);
		}
	}


}




tracParser.ProgramContext = ProgramContext; 
tracParser.MacroContext = MacroContext; 
tracParser.ActiveContext = ActiveContext; 
tracParser.NeutralContext = NeutralContext; 
tracParser.ArglistContext = ArglistContext; 
tracParser.ArgContext = ArgContext; 
tracParser.NameContext = NameContext; 
tracParser.StringContext = StringContext; 
