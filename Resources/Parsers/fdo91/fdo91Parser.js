// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/fdo91/fdo91.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import fdo91Listener from './fdo91Listener.js';
const serializedATN = [4,1,10,59,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,5,0,16,8,0,10,0,12,0,19,9,0,1,0,1,0,1,1,3,1,24,8,1,1,
1,1,1,1,1,3,1,29,8,1,1,2,1,2,1,2,1,2,5,2,35,8,2,10,2,12,2,38,9,2,1,2,1,2,
1,3,1,3,4,3,44,8,3,11,3,12,3,45,3,3,48,8,3,1,4,4,4,51,8,4,11,4,12,4,52,1,
5,1,5,1,6,1,6,1,6,0,0,7,0,2,4,6,8,10,12,0,1,1,0,5,8,59,0,17,1,0,0,0,2,23,
1,0,0,0,4,30,1,0,0,0,6,47,1,0,0,0,8,50,1,0,0,0,10,54,1,0,0,0,12,56,1,0,0,
0,14,16,3,2,1,0,15,14,1,0,0,0,16,19,1,0,0,0,17,15,1,0,0,0,17,18,1,0,0,0,
18,20,1,0,0,0,19,17,1,0,0,0,20,21,5,0,0,1,21,1,1,0,0,0,22,24,5,1,0,0,23,
22,1,0,0,0,23,24,1,0,0,0,24,25,1,0,0,0,25,28,3,12,6,0,26,29,3,8,4,0,27,29,
3,4,2,0,28,26,1,0,0,0,28,27,1,0,0,0,28,29,1,0,0,0,29,3,1,0,0,0,30,31,5,2,
0,0,31,36,3,6,3,0,32,33,5,3,0,0,33,35,3,6,3,0,34,32,1,0,0,0,35,38,1,0,0,
0,36,34,1,0,0,0,36,37,1,0,0,0,37,39,1,0,0,0,38,36,1,0,0,0,39,40,5,4,0,0,
40,5,1,0,0,0,41,48,3,10,5,0,42,44,3,2,1,0,43,42,1,0,0,0,44,45,1,0,0,0,45,
43,1,0,0,0,45,46,1,0,0,0,46,48,1,0,0,0,47,41,1,0,0,0,47,43,1,0,0,0,48,7,
1,0,0,0,49,51,3,10,5,0,50,49,1,0,0,0,51,52,1,0,0,0,52,50,1,0,0,0,52,53,1,
0,0,0,53,9,1,0,0,0,54,55,7,0,0,0,55,11,1,0,0,0,56,57,5,5,0,0,57,13,1,0,0,
0,7,17,23,28,36,45,47,52];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class fdo91Parser extends antlr4.Parser {

    static grammarFileName = "fdo91.g4";
    static literalNames = [ null, "'atom$'", "'<'", "','", "'>'" ];
    static symbolicNames = [ null, null, null, null, null, "ID", "GID", 
                             "NUMBER", "STRING", "COMMENT", "WS" ];
    static ruleNames = [ "file_", "atom", "arglist", "arg", "literal_args", 
                         "literal", "command" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = fdo91Parser.ruleNames;
        this.literalNames = fdo91Parser.literalNames;
        this.symbolicNames = fdo91Parser.symbolicNames;
    }



	file_() {
	    let localctx = new File_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, fdo91Parser.RULE_file_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===5) {
	            this.state = 14;
	            this.atom();
	            this.state = 19;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 20;
	        this.match(fdo91Parser.EOF);
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
	    this.enterRule(localctx, 2, fdo91Parser.RULE_atom);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 22;
	            this.match(fdo91Parser.T__0);
	        }

	        this.state = 25;
	        this.command();
	        this.state = 28;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 26;
	            this.literal_args();

	        } else if(la_===2) {
	            this.state = 27;
	            this.arglist();

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



	arglist() {
	    let localctx = new ArglistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, fdo91Parser.RULE_arglist);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.match(fdo91Parser.T__1);
	        this.state = 31;
	        this.arg();
	        this.state = 36;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 32;
	            this.match(fdo91Parser.T__2);
	            this.state = 33;
	            this.arg();
	            this.state = 38;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 39;
	        this.match(fdo91Parser.T__3);
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
	    this.enterRule(localctx, 6, fdo91Parser.RULE_arg);
	    var _la = 0;
	    try {
	        this.state = 47;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 41;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 43; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 42;
	                this.atom();
	                this.state = 45; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===1 || _la===5);
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



	literal_args() {
	    let localctx = new Literal_argsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, fdo91Parser.RULE_literal_args);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 49;
	        		this.literal();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 52; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,6, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, fdo91Parser.RULE_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 480) !== 0))) {
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



	command() {
	    let localctx = new CommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, fdo91Parser.RULE_command);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.match(fdo91Parser.ID);
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

fdo91Parser.EOF = antlr4.Token.EOF;
fdo91Parser.T__0 = 1;
fdo91Parser.T__1 = 2;
fdo91Parser.T__2 = 3;
fdo91Parser.T__3 = 4;
fdo91Parser.ID = 5;
fdo91Parser.GID = 6;
fdo91Parser.NUMBER = 7;
fdo91Parser.STRING = 8;
fdo91Parser.COMMENT = 9;
fdo91Parser.WS = 10;

fdo91Parser.RULE_file_ = 0;
fdo91Parser.RULE_atom = 1;
fdo91Parser.RULE_arglist = 2;
fdo91Parser.RULE_arg = 3;
fdo91Parser.RULE_literal_args = 4;
fdo91Parser.RULE_literal = 5;
fdo91Parser.RULE_command = 6;

class File_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = fdo91Parser.RULE_file_;
    }

	EOF() {
	    return this.getToken(fdo91Parser.EOF, 0);
	};

	atom = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AtomContext);
	    } else {
	        return this.getTypedRuleContext(AtomContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof fdo91Listener ) {
	        listener.enterFile_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof fdo91Listener ) {
	        listener.exitFile_(this);
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
        this.ruleIndex = fdo91Parser.RULE_atom;
    }

	command() {
	    return this.getTypedRuleContext(CommandContext,0);
	};

	literal_args() {
	    return this.getTypedRuleContext(Literal_argsContext,0);
	};

	arglist() {
	    return this.getTypedRuleContext(ArglistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof fdo91Listener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof fdo91Listener ) {
	        listener.exitAtom(this);
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
        this.ruleIndex = fdo91Parser.RULE_arglist;
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
	    if(listener instanceof fdo91Listener ) {
	        listener.enterArglist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof fdo91Listener ) {
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
        this.ruleIndex = fdo91Parser.RULE_arg;
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	atom = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AtomContext);
	    } else {
	        return this.getTypedRuleContext(AtomContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof fdo91Listener ) {
	        listener.enterArg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof fdo91Listener ) {
	        listener.exitArg(this);
		}
	}


}



class Literal_argsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = fdo91Parser.RULE_literal_args;
    }

	literal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LiteralContext);
	    } else {
	        return this.getTypedRuleContext(LiteralContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof fdo91Listener ) {
	        listener.enterLiteral_args(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof fdo91Listener ) {
	        listener.exitLiteral_args(this);
		}
	}


}



class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = fdo91Parser.RULE_literal;
    }

	ID() {
	    return this.getToken(fdo91Parser.ID, 0);
	};

	NUMBER() {
	    return this.getToken(fdo91Parser.NUMBER, 0);
	};

	STRING() {
	    return this.getToken(fdo91Parser.STRING, 0);
	};

	GID() {
	    return this.getToken(fdo91Parser.GID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof fdo91Listener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof fdo91Listener ) {
	        listener.exitLiteral(this);
		}
	}


}



class CommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = fdo91Parser.RULE_command;
    }

	ID() {
	    return this.getToken(fdo91Parser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof fdo91Listener ) {
	        listener.enterCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof fdo91Listener ) {
	        listener.exitCommand(this);
		}
	}


}




fdo91Parser.File_Context = File_Context; 
fdo91Parser.AtomContext = AtomContext; 
fdo91Parser.ArglistContext = ArglistContext; 
fdo91Parser.ArgContext = ArgContext; 
fdo91Parser.Literal_argsContext = Literal_argsContext; 
fdo91Parser.LiteralContext = LiteralContext; 
fdo91Parser.CommandContext = CommandContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
