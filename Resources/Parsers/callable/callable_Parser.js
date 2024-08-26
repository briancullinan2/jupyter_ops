// Generated from Resources/Parsers/callable/callable_.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import callable_Listener from './callable_Listener.js';
const serializedATN = [4,1,9,40,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,1,0,
4,0,11,8,0,11,0,12,0,12,1,0,5,0,16,8,0,10,0,12,0,19,9,0,1,1,1,1,1,1,3,1,
24,8,1,1,1,1,1,1,2,1,2,1,2,5,2,31,8,2,10,2,12,2,34,9,2,1,3,1,3,3,3,38,8,
3,1,3,0,0,4,0,2,4,6,0,0,40,0,8,1,0,0,0,2,20,1,0,0,0,4,27,1,0,0,0,6,37,1,
0,0,0,8,17,3,2,1,0,9,11,5,8,0,0,10,9,1,0,0,0,11,12,1,0,0,0,12,10,1,0,0,0,
12,13,1,0,0,0,13,14,1,0,0,0,14,16,3,2,1,0,15,10,1,0,0,0,16,19,1,0,0,0,17,
15,1,0,0,0,17,18,1,0,0,0,18,1,1,0,0,0,19,17,1,0,0,0,20,21,5,4,0,0,21,23,
5,1,0,0,22,24,3,4,2,0,23,22,1,0,0,0,23,24,1,0,0,0,24,25,1,0,0,0,25,26,5,
2,0,0,26,3,1,0,0,0,27,32,3,6,3,0,28,29,5,3,0,0,29,31,3,6,3,0,30,28,1,0,0,
0,31,34,1,0,0,0,32,30,1,0,0,0,32,33,1,0,0,0,33,5,1,0,0,0,34,32,1,0,0,0,35,
38,3,2,1,0,36,38,5,5,0,0,37,35,1,0,0,0,37,36,1,0,0,0,38,7,1,0,0,0,5,12,17,
23,32,37];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class callable_Parser extends antlr4.Parser {

    static grammarFileName = "callable_.g4";
    static literalNames = [ null, "'('", "')'", "','" ];
    static symbolicNames = [ null, null, null, null, "ID", "STRING", "LETTER_UPPER", 
                             "LETTER_LOWER", "EOL", "WS" ];
    static ruleNames = [ "program", "line", "f_inner", "f_arg" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = callable_Parser.ruleNames;
        this.literalNames = callable_Parser.literalNames;
        this.symbolicNames = callable_Parser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, callable_Parser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 8;
	        this.line();
	        this.state = 17;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===callable_Parser.EOL) {
	            this.state = 10; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 9;
	                this.match(callable_Parser.EOL);
	                this.state = 12; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===callable_Parser.EOL);
	            this.state = 14;
	            this.line();
	            this.state = 19;
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



	line() {
	    let localctx = new LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, callable_Parser.RULE_line);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.match(callable_Parser.ID);
	        this.state = 21;
	        this.match(callable_Parser.T__0);
	        this.state = 23;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===callable_Parser.ID || _la===callable_Parser.STRING) {
	            this.state = 22;
	            this.f_inner();
	        }

	        this.state = 25;
	        this.match(callable_Parser.T__1);
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



	f_inner() {
	    let localctx = new F_innerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, callable_Parser.RULE_f_inner);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this.f_arg();
	        this.state = 32;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===callable_Parser.T__2) {
	            this.state = 28;
	            this.match(callable_Parser.T__2);
	            this.state = 29;
	            this.f_arg();
	            this.state = 34;
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



	f_arg() {
	    let localctx = new F_argContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, callable_Parser.RULE_f_arg);
	    try {
	        this.state = 37;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case callable_Parser.ID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 35;
	            this.line();
	            break;
	        case callable_Parser.STRING:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 36;
	            this.match(callable_Parser.STRING);
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

callable_Parser.EOF = antlr4.Token.EOF;
callable_Parser.T__0 = 1;
callable_Parser.T__1 = 2;
callable_Parser.T__2 = 3;
callable_Parser.ID = 4;
callable_Parser.STRING = 5;
callable_Parser.LETTER_UPPER = 6;
callable_Parser.LETTER_LOWER = 7;
callable_Parser.EOL = 8;
callable_Parser.WS = 9;

callable_Parser.RULE_program = 0;
callable_Parser.RULE_line = 1;
callable_Parser.RULE_f_inner = 2;
callable_Parser.RULE_f_arg = 3;

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
        this.ruleIndex = callable_Parser.RULE_program;
    }

	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	EOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(callable_Parser.EOL);
	    } else {
	        return this.getToken(callable_Parser.EOL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof callable_Listener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof callable_Listener ) {
	        listener.exitProgram(this);
		}
	}


}



class LineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = callable_Parser.RULE_line;
    }

	ID() {
	    return this.getToken(callable_Parser.ID, 0);
	};

	f_inner() {
	    return this.getTypedRuleContext(F_innerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof callable_Listener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof callable_Listener ) {
	        listener.exitLine(this);
		}
	}


}



class F_innerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = callable_Parser.RULE_f_inner;
    }

	f_arg = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(F_argContext);
	    } else {
	        return this.getTypedRuleContext(F_argContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof callable_Listener ) {
	        listener.enterF_inner(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof callable_Listener ) {
	        listener.exitF_inner(this);
		}
	}


}



class F_argContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = callable_Parser.RULE_f_arg;
    }

	line() {
	    return this.getTypedRuleContext(LineContext,0);
	};

	STRING() {
	    return this.getToken(callable_Parser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof callable_Listener ) {
	        listener.enterF_arg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof callable_Listener ) {
	        listener.exitF_arg(this);
		}
	}


}




callable_Parser.ProgramContext = ProgramContext; 
callable_Parser.LineContext = LineContext; 
callable_Parser.F_innerContext = F_innerContext; 
callable_Parser.F_argContext = F_argContext; 
