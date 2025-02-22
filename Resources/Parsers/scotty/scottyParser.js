// Generated from ./scotty/scotty.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import scottyListener from './scottyListener.js';
const serializedATN = [4,1,12,90,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,
28,8,1,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,
4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,63,
8,4,1,5,1,5,1,5,3,5,68,8,5,1,6,1,6,1,6,1,6,1,6,1,6,3,6,76,8,6,1,7,1,7,1,
7,3,7,81,8,7,1,8,1,8,1,8,1,8,1,8,3,8,88,8,8,1,8,0,0,9,0,2,4,6,8,10,12,14,
16,0,0,95,0,18,1,0,0,0,2,27,1,0,0,0,4,29,1,0,0,0,6,33,1,0,0,0,8,62,1,0,0,
0,10,67,1,0,0,0,12,75,1,0,0,0,14,80,1,0,0,0,16,87,1,0,0,0,18,19,3,2,1,0,
19,1,1,0,0,0,20,28,3,8,4,0,21,22,3,6,3,0,22,23,3,2,1,0,23,28,1,0,0,0,24,
25,3,4,2,0,25,26,3,2,1,0,26,28,1,0,0,0,27,20,1,0,0,0,27,21,1,0,0,0,27,24,
1,0,0,0,28,3,1,0,0,0,29,30,3,10,5,0,30,31,5,1,0,0,31,32,3,8,4,0,32,5,1,0,
0,0,33,34,5,2,0,0,34,35,3,10,5,0,35,36,3,10,5,0,36,37,5,1,0,0,37,38,3,8,
4,0,38,7,1,0,0,0,39,40,5,3,0,0,40,41,3,8,4,0,41,42,3,8,4,0,42,63,1,0,0,0,
43,44,5,4,0,0,44,45,3,8,4,0,45,46,3,8,4,0,46,63,1,0,0,0,47,48,5,5,0,0,48,
49,3,8,4,0,49,50,3,8,4,0,50,63,1,0,0,0,51,52,5,6,0,0,52,53,3,8,4,0,53,54,
3,8,4,0,54,63,1,0,0,0,55,56,5,7,0,0,56,57,3,10,5,0,57,58,3,8,4,0,58,59,5,
8,0,0,59,63,1,0,0,0,60,63,3,10,5,0,61,63,3,14,7,0,62,39,1,0,0,0,62,43,1,
0,0,0,62,47,1,0,0,0,62,51,1,0,0,0,62,55,1,0,0,0,62,60,1,0,0,0,62,61,1,0,
0,0,63,9,1,0,0,0,64,65,5,11,0,0,65,68,3,12,6,0,66,68,5,11,0,0,67,64,1,0,
0,0,67,66,1,0,0,0,68,11,1,0,0,0,69,70,5,11,0,0,70,76,3,12,6,0,71,72,5,10,
0,0,72,76,3,12,6,0,73,76,5,11,0,0,74,76,5,10,0,0,75,69,1,0,0,0,75,71,1,0,
0,0,75,73,1,0,0,0,75,74,1,0,0,0,76,13,1,0,0,0,77,78,5,4,0,0,78,81,3,16,8,
0,79,81,3,16,8,0,80,77,1,0,0,0,80,79,1,0,0,0,81,15,1,0,0,0,82,83,5,10,0,
0,83,88,3,16,8,0,84,85,5,9,0,0,85,88,3,16,8,0,86,88,5,10,0,0,87,82,1,0,0,
0,87,84,1,0,0,0,87,86,1,0,0,0,88,17,1,0,0,0,6,27,62,67,75,80,87];


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

    get atn() {
        return atn;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, scottyParser.RULE_prog);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.program_lines();
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
	        this.state = 27;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 20;
	            this.prefix_exp();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 21;
	            this.fn_def();
	            this.state = 22;
	            this.program_lines();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 24;
	            this.var_assign();
	            this.state = 25;
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
	        this.state = 29;
	        this.identifier();
	        this.state = 30;
	        this.match(scottyParser.T__0);
	        this.state = 31;
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
	        this.state = 33;
	        this.match(scottyParser.T__1);
	        this.state = 34;
	        this.identifier();
	        this.state = 35;
	        this.identifier();
	        this.state = 36;
	        this.match(scottyParser.T__0);
	        this.state = 37;
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
	        this.state = 62;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 39;
	            this.match(scottyParser.T__2);
	            this.state = 40;
	            this.prefix_exp();
	            this.state = 41;
	            this.prefix_exp();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 43;
	            this.match(scottyParser.T__3);
	            this.state = 44;
	            this.prefix_exp();
	            this.state = 45;
	            this.prefix_exp();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 47;
	            this.match(scottyParser.T__4);
	            this.state = 48;
	            this.prefix_exp();
	            this.state = 49;
	            this.prefix_exp();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 51;
	            this.match(scottyParser.T__5);
	            this.state = 52;
	            this.prefix_exp();
	            this.state = 53;
	            this.prefix_exp();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 55;
	            this.match(scottyParser.T__6);
	            this.state = 56;
	            this.identifier();
	            this.state = 57;
	            this.prefix_exp();
	            this.state = 58;
	            this.match(scottyParser.T__7);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 60;
	            this.identifier();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 61;
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
	        this.state = 67;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 64;
	            this.match(scottyParser.LETTER);
	            this.state = 65;
	            this.id_tail();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 66;
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
	        this.state = 75;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 69;
	            this.match(scottyParser.LETTER);
	            this.state = 70;
	            this.id_tail();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 71;
	            this.match(scottyParser.DIGIT);
	            this.state = 72;
	            this.id_tail();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 73;
	            this.match(scottyParser.LETTER);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 74;
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
	        this.state = 80;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case scottyParser.T__3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 77;
	            this.match(scottyParser.T__3);
	            this.state = 78;
	            this.digits();
	            break;
	        case scottyParser.T__8:
	        case scottyParser.DIGIT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 79;
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
	        this.state = 87;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 82;
	            this.match(scottyParser.DIGIT);
	            this.state = 83;
	            this.digits();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 84;
	            this.match(scottyParser.T__8);
	            this.state = 85;
	            this.digits();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 86;
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
