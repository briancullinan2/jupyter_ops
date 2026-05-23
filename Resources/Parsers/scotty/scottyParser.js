// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/scotty/scotty.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import scottyListener from './scottyListener.js';
const serializedATN = [4,1,12,91,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
3,1,29,8,1,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,
4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,
4,64,8,4,1,5,1,5,1,5,3,5,69,8,5,1,6,1,6,1,6,1,6,1,6,1,6,3,6,77,8,6,1,7,1,
7,1,7,3,7,82,8,7,1,8,1,8,1,8,1,8,1,8,3,8,89,8,8,1,8,0,0,9,0,2,4,6,8,10,12,
14,16,0,0,96,0,18,1,0,0,0,2,28,1,0,0,0,4,30,1,0,0,0,6,34,1,0,0,0,8,63,1,
0,0,0,10,68,1,0,0,0,12,76,1,0,0,0,14,81,1,0,0,0,16,88,1,0,0,0,18,19,3,2,
1,0,19,20,5,0,0,1,20,1,1,0,0,0,21,29,3,8,4,0,22,23,3,6,3,0,23,24,3,2,1,0,
24,29,1,0,0,0,25,26,3,4,2,0,26,27,3,2,1,0,27,29,1,0,0,0,28,21,1,0,0,0,28,
22,1,0,0,0,28,25,1,0,0,0,29,3,1,0,0,0,30,31,3,10,5,0,31,32,5,1,0,0,32,33,
3,8,4,0,33,5,1,0,0,0,34,35,5,2,0,0,35,36,3,10,5,0,36,37,3,10,5,0,37,38,5,
1,0,0,38,39,3,8,4,0,39,7,1,0,0,0,40,41,5,3,0,0,41,42,3,8,4,0,42,43,3,8,4,
0,43,64,1,0,0,0,44,45,5,4,0,0,45,46,3,8,4,0,46,47,3,8,4,0,47,64,1,0,0,0,
48,49,5,5,0,0,49,50,3,8,4,0,50,51,3,8,4,0,51,64,1,0,0,0,52,53,5,6,0,0,53,
54,3,8,4,0,54,55,3,8,4,0,55,64,1,0,0,0,56,57,5,7,0,0,57,58,3,10,5,0,58,59,
3,8,4,0,59,60,5,8,0,0,60,64,1,0,0,0,61,64,3,10,5,0,62,64,3,14,7,0,63,40,
1,0,0,0,63,44,1,0,0,0,63,48,1,0,0,0,63,52,1,0,0,0,63,56,1,0,0,0,63,61,1,
0,0,0,63,62,1,0,0,0,64,9,1,0,0,0,65,66,5,11,0,0,66,69,3,12,6,0,67,69,5,11,
0,0,68,65,1,0,0,0,68,67,1,0,0,0,69,11,1,0,0,0,70,71,5,11,0,0,71,77,3,12,
6,0,72,73,5,10,0,0,73,77,3,12,6,0,74,77,5,11,0,0,75,77,5,10,0,0,76,70,1,
0,0,0,76,72,1,0,0,0,76,74,1,0,0,0,76,75,1,0,0,0,77,13,1,0,0,0,78,79,5,4,
0,0,79,82,3,16,8,0,80,82,3,16,8,0,81,78,1,0,0,0,81,80,1,0,0,0,82,15,1,0,
0,0,83,84,5,10,0,0,84,89,3,16,8,0,85,86,5,9,0,0,86,89,3,16,8,0,87,89,5,10,
0,0,88,83,1,0,0,0,88,85,1,0,0,0,88,87,1,0,0,0,89,17,1,0,0,0,6,28,63,68,76,
81,88];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class scottyParser extends antlr4.Parser {

    static grammarFileName = "scotty.g4";
    static literalNames = [ null, "'='", "'fun'", "'+'", "'-'", "'*'", "'/'", 
                            "'('", "')'", "'.'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, "DIGIT", "LETTER", "WS" ];
    static ruleNames = [ "prog", "program_lines", "var_assign", "fn_def", 
                         "prefix_exp", "identifier", "id_tail", "number", 
                         "digits" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = scottyParser.ruleNames;
        this.literalNames = scottyParser.literalNames;
        this.symbolicNames = scottyParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, scottyParser.RULE_prog);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.program_lines();
	        this.state = 19;
	        this.match(scottyParser.EOF);
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



	program_lines() {
	    let localctx = new Program_linesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, scottyParser.RULE_program_lines);
	    try {
	        this.state = 28;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 21;
	            this.prefix_exp();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 22;
	            this.fn_def();
	            this.state = 23;
	            this.program_lines();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 25;
	            this.var_assign();
	            this.state = 26;
	            this.program_lines();
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



	var_assign() {
	    let localctx = new Var_assignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, scottyParser.RULE_var_assign);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.identifier();
	        this.state = 31;
	        this.match(scottyParser.T__0);
	        this.state = 32;
	        this.prefix_exp();
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



	fn_def() {
	    let localctx = new Fn_defContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, scottyParser.RULE_fn_def);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.match(scottyParser.T__1);
	        this.state = 35;
	        this.identifier();
	        this.state = 36;
	        this.identifier();
	        this.state = 37;
	        this.match(scottyParser.T__0);
	        this.state = 38;
	        this.prefix_exp();
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



	prefix_exp() {
	    let localctx = new Prefix_expContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, scottyParser.RULE_prefix_exp);
	    try {
	        this.state = 63;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 40;
	            this.match(scottyParser.T__2);
	            this.state = 41;
	            this.prefix_exp();
	            this.state = 42;
	            this.prefix_exp();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 44;
	            this.match(scottyParser.T__3);
	            this.state = 45;
	            this.prefix_exp();
	            this.state = 46;
	            this.prefix_exp();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 48;
	            this.match(scottyParser.T__4);
	            this.state = 49;
	            this.prefix_exp();
	            this.state = 50;
	            this.prefix_exp();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 52;
	            this.match(scottyParser.T__5);
	            this.state = 53;
	            this.prefix_exp();
	            this.state = 54;
	            this.prefix_exp();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 56;
	            this.match(scottyParser.T__6);
	            this.state = 57;
	            this.identifier();
	            this.state = 58;
	            this.prefix_exp();
	            this.state = 59;
	            this.match(scottyParser.T__7);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 61;
	            this.identifier();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 62;
	            this.number();
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



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, scottyParser.RULE_identifier);
	    try {
	        this.state = 68;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 65;
	            this.match(scottyParser.LETTER);
	            this.state = 66;
	            this.id_tail();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 67;
	            this.match(scottyParser.LETTER);
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



	id_tail() {
	    let localctx = new Id_tailContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, scottyParser.RULE_id_tail);
	    try {
	        this.state = 76;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 70;
	            this.match(scottyParser.LETTER);
	            this.state = 71;
	            this.id_tail();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 72;
	            this.match(scottyParser.DIGIT);
	            this.state = 73;
	            this.id_tail();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 74;
	            this.match(scottyParser.LETTER);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 75;
	            this.match(scottyParser.DIGIT);
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
	    this.enterRule(localctx, 14, scottyParser.RULE_number);
	    try {
	        this.state = 81;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 78;
	            this.match(scottyParser.T__3);
	            this.state = 79;
	            this.digits();
	            break;
	        case 9:
	        case 10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 80;
	            this.digits();
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



	digits() {
	    let localctx = new DigitsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, scottyParser.RULE_digits);
	    try {
	        this.state = 88;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 83;
	            this.match(scottyParser.DIGIT);
	            this.state = 84;
	            this.digits();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 85;
	            this.match(scottyParser.T__8);
	            this.state = 86;
	            this.digits();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 87;
	            this.match(scottyParser.DIGIT);
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

scottyParser.EOF = antlr4.Token.EOF;
scottyParser.T__0 = 1;
scottyParser.T__1 = 2;
scottyParser.T__2 = 3;
scottyParser.T__3 = 4;
scottyParser.T__4 = 5;
scottyParser.T__5 = 6;
scottyParser.T__6 = 7;
scottyParser.T__7 = 8;
scottyParser.T__8 = 9;
scottyParser.DIGIT = 10;
scottyParser.LETTER = 11;
scottyParser.WS = 12;

scottyParser.RULE_prog = 0;
scottyParser.RULE_program_lines = 1;
scottyParser.RULE_var_assign = 2;
scottyParser.RULE_fn_def = 3;
scottyParser.RULE_prefix_exp = 4;
scottyParser.RULE_identifier = 5;
scottyParser.RULE_id_tail = 6;
scottyParser.RULE_number = 7;
scottyParser.RULE_digits = 8;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scottyParser.RULE_prog;
    }

	program_lines() {
	    return this.getTypedRuleContext(Program_linesContext,0);
	};

	EOF() {
	    return this.getToken(scottyParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scottyListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scottyListener ) {
	        listener.exitProg(this);
		}
	}


}



class Program_linesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scottyParser.RULE_program_lines;
    }

	prefix_exp() {
	    return this.getTypedRuleContext(Prefix_expContext,0);
	};

	fn_def() {
	    return this.getTypedRuleContext(Fn_defContext,0);
	};

	program_lines() {
	    return this.getTypedRuleContext(Program_linesContext,0);
	};

	var_assign() {
	    return this.getTypedRuleContext(Var_assignContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scottyListener ) {
	        listener.enterProgram_lines(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scottyListener ) {
	        listener.exitProgram_lines(this);
		}
	}


}



class Var_assignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scottyParser.RULE_var_assign;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	prefix_exp() {
	    return this.getTypedRuleContext(Prefix_expContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scottyListener ) {
	        listener.enterVar_assign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scottyListener ) {
	        listener.exitVar_assign(this);
		}
	}


}



class Fn_defContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scottyParser.RULE_fn_def;
    }

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	prefix_exp() {
	    return this.getTypedRuleContext(Prefix_expContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scottyListener ) {
	        listener.enterFn_def(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scottyListener ) {
	        listener.exitFn_def(this);
		}
	}


}



class Prefix_expContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scottyParser.RULE_prefix_exp;
    }

	prefix_exp = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Prefix_expContext);
	    } else {
	        return this.getTypedRuleContext(Prefix_expContext,i);
	    }
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scottyListener ) {
	        listener.enterPrefix_exp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scottyListener ) {
	        listener.exitPrefix_exp(this);
		}
	}


}



class IdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scottyParser.RULE_identifier;
    }

	LETTER() {
	    return this.getToken(scottyParser.LETTER, 0);
	};

	id_tail() {
	    return this.getTypedRuleContext(Id_tailContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scottyListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scottyListener ) {
	        listener.exitIdentifier(this);
		}
	}


}



class Id_tailContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scottyParser.RULE_id_tail;
    }

	LETTER() {
	    return this.getToken(scottyParser.LETTER, 0);
	};

	id_tail() {
	    return this.getTypedRuleContext(Id_tailContext,0);
	};

	DIGIT() {
	    return this.getToken(scottyParser.DIGIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scottyListener ) {
	        listener.enterId_tail(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scottyListener ) {
	        listener.exitId_tail(this);
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
        this.ruleIndex = scottyParser.RULE_number;
    }

	digits() {
	    return this.getTypedRuleContext(DigitsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scottyListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scottyListener ) {
	        listener.exitNumber(this);
		}
	}


}



class DigitsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scottyParser.RULE_digits;
    }

	DIGIT() {
	    return this.getToken(scottyParser.DIGIT, 0);
	};

	digits() {
	    return this.getTypedRuleContext(DigitsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scottyListener ) {
	        listener.enterDigits(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scottyListener ) {
	        listener.exitDigits(this);
		}
	}


}




scottyParser.ProgContext = ProgContext; 
scottyParser.Program_linesContext = Program_linesContext; 
scottyParser.Var_assignContext = Var_assignContext; 
scottyParser.Fn_defContext = Fn_defContext; 
scottyParser.Prefix_expContext = Prefix_expContext; 
scottyParser.IdentifierContext = IdentifierContext; 
scottyParser.Id_tailContext = Id_tailContext; 
scottyParser.NumberContext = NumberContext; 
scottyParser.DigitsContext = DigitsContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
