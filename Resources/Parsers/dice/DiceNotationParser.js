// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/dice/DiceNotationParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import DiceNotationParserListener from './DiceNotationParserListener.js';
const serializedATN = [4,1,7,61,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,1,0,1,0,1,1,1,1,1,1,3,1,21,8,1,1,2,1,2,1,2,5,2,26,8,
2,10,2,12,2,29,9,2,1,3,1,3,1,3,5,3,34,8,3,10,3,12,3,37,9,3,1,4,1,4,1,4,1,
4,1,4,1,4,3,4,45,8,4,1,5,3,5,48,8,5,1,5,3,5,51,8,5,1,5,1,5,1,5,1,6,3,6,57,
8,6,1,6,1,6,1,6,0,0,7,0,2,4,6,8,10,12,0,0,62,0,14,1,0,0,0,2,20,1,0,0,0,4,
22,1,0,0,0,6,30,1,0,0,0,8,44,1,0,0,0,10,47,1,0,0,0,12,56,1,0,0,0,14,15,3,
2,1,0,15,16,5,0,0,1,16,1,1,0,0,0,17,21,3,10,5,0,18,21,3,12,6,0,19,21,3,4,
2,0,20,17,1,0,0,0,20,18,1,0,0,0,20,19,1,0,0,0,21,3,1,0,0,0,22,27,3,6,3,0,
23,24,5,3,0,0,24,26,3,6,3,0,25,23,1,0,0,0,26,29,1,0,0,0,27,25,1,0,0,0,27,
28,1,0,0,0,28,5,1,0,0,0,29,27,1,0,0,0,30,35,3,8,4,0,31,32,5,4,0,0,32,34,
3,8,4,0,33,31,1,0,0,0,34,37,1,0,0,0,35,33,1,0,0,0,35,36,1,0,0,0,36,7,1,0,
0,0,37,35,1,0,0,0,38,45,3,10,5,0,39,45,3,12,6,0,40,41,5,5,0,0,41,42,3,2,
1,0,42,43,5,6,0,0,43,45,1,0,0,0,44,38,1,0,0,0,44,39,1,0,0,0,44,40,1,0,0,
0,45,9,1,0,0,0,46,48,5,3,0,0,47,46,1,0,0,0,47,48,1,0,0,0,48,50,1,0,0,0,49,
51,5,2,0,0,50,49,1,0,0,0,50,51,1,0,0,0,51,52,1,0,0,0,52,53,5,1,0,0,53,54,
5,2,0,0,54,11,1,0,0,0,55,57,5,3,0,0,56,55,1,0,0,0,56,57,1,0,0,0,57,58,1,
0,0,0,58,59,5,2,0,0,59,13,1,0,0,0,7,20,27,35,44,47,50,56];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class DiceNotationParser extends antlr4.Parser {

    static grammarFileName = "DiceNotationParser.g4";
    static literalNames = [ null, null, null, null, null, "'('", "')'" ];
    static symbolicNames = [ null, "DSEPARATOR", "DIGIT", "ADDOPERATOR", 
                             "MULTOPERATOR", "LPAREN", "RPAREN", "WS" ];
    static ruleNames = [ "file_", "notation", "addOp", "multOp", "operand", 
                         "dice", "number" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = DiceNotationParser.ruleNames;
        this.literalNames = DiceNotationParser.literalNames;
        this.symbolicNames = DiceNotationParser.symbolicNames;
    }



	file_() {
	    let localctx = new File_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, DiceNotationParser.RULE_file_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14;
	        this.notation();
	        this.state = 15;
	        this.match(DiceNotationParser.EOF);
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



	notation() {
	    let localctx = new NotationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, DiceNotationParser.RULE_notation);
	    try {
	        this.state = 20;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 17;
	            this.dice();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 18;
	            this.number();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 19;
	            this.addOp();
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



	addOp() {
	    let localctx = new AddOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, DiceNotationParser.RULE_addOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.multOp();
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 23;
	            this.match(DiceNotationParser.ADDOPERATOR);
	            this.state = 24;
	            this.multOp();
	            this.state = 29;
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



	multOp() {
	    let localctx = new MultOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, DiceNotationParser.RULE_multOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.operand();
	        this.state = 35;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 31;
	            this.match(DiceNotationParser.MULTOPERATOR);
	            this.state = 32;
	            this.operand();
	            this.state = 37;
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



	operand() {
	    let localctx = new OperandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, DiceNotationParser.RULE_operand);
	    try {
	        this.state = 44;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 38;
	            this.dice();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 39;
	            this.number();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 40;
	            this.match(DiceNotationParser.LPAREN);
	            this.state = 41;
	            this.notation();
	            this.state = 42;
	            this.match(DiceNotationParser.RPAREN);
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



	dice() {
	    let localctx = new DiceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, DiceNotationParser.RULE_dice);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 46;
	            this.match(DiceNotationParser.ADDOPERATOR);
	        }

	        this.state = 50;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 49;
	            this.match(DiceNotationParser.DIGIT);
	        }

	        this.state = 52;
	        this.match(DiceNotationParser.DSEPARATOR);
	        this.state = 53;
	        this.match(DiceNotationParser.DIGIT);
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
	    this.enterRule(localctx, 12, DiceNotationParser.RULE_number);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 55;
	            this.match(DiceNotationParser.ADDOPERATOR);
	        }

	        this.state = 58;
	        this.match(DiceNotationParser.DIGIT);
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

DiceNotationParser.EOF = antlr4.Token.EOF;
DiceNotationParser.DSEPARATOR = 1;
DiceNotationParser.DIGIT = 2;
DiceNotationParser.ADDOPERATOR = 3;
DiceNotationParser.MULTOPERATOR = 4;
DiceNotationParser.LPAREN = 5;
DiceNotationParser.RPAREN = 6;
DiceNotationParser.WS = 7;

DiceNotationParser.RULE_file_ = 0;
DiceNotationParser.RULE_notation = 1;
DiceNotationParser.RULE_addOp = 2;
DiceNotationParser.RULE_multOp = 3;
DiceNotationParser.RULE_operand = 4;
DiceNotationParser.RULE_dice = 5;
DiceNotationParser.RULE_number = 6;

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
        this.ruleIndex = DiceNotationParser.RULE_file_;
    }

	notation() {
	    return this.getTypedRuleContext(NotationContext,0);
	};

	EOF() {
	    return this.getToken(DiceNotationParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DiceNotationParserListener ) {
	        listener.enterFile_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiceNotationParserListener ) {
	        listener.exitFile_(this);
		}
	}


}



class NotationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiceNotationParser.RULE_notation;
    }

	dice() {
	    return this.getTypedRuleContext(DiceContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	addOp() {
	    return this.getTypedRuleContext(AddOpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiceNotationParserListener ) {
	        listener.enterNotation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiceNotationParserListener ) {
	        listener.exitNotation(this);
		}
	}


}



class AddOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiceNotationParser.RULE_addOp;
    }

	multOp = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MultOpContext);
	    } else {
	        return this.getTypedRuleContext(MultOpContext,i);
	    }
	};

	ADDOPERATOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DiceNotationParser.ADDOPERATOR);
	    } else {
	        return this.getToken(DiceNotationParser.ADDOPERATOR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DiceNotationParserListener ) {
	        listener.enterAddOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiceNotationParserListener ) {
	        listener.exitAddOp(this);
		}
	}


}



class MultOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiceNotationParser.RULE_multOp;
    }

	operand = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OperandContext);
	    } else {
	        return this.getTypedRuleContext(OperandContext,i);
	    }
	};

	MULTOPERATOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DiceNotationParser.MULTOPERATOR);
	    } else {
	        return this.getToken(DiceNotationParser.MULTOPERATOR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DiceNotationParserListener ) {
	        listener.enterMultOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiceNotationParserListener ) {
	        listener.exitMultOp(this);
		}
	}


}



class OperandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiceNotationParser.RULE_operand;
    }

	dice() {
	    return this.getTypedRuleContext(DiceContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	LPAREN() {
	    return this.getToken(DiceNotationParser.LPAREN, 0);
	};

	notation() {
	    return this.getTypedRuleContext(NotationContext,0);
	};

	RPAREN() {
	    return this.getToken(DiceNotationParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DiceNotationParserListener ) {
	        listener.enterOperand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiceNotationParserListener ) {
	        listener.exitOperand(this);
		}
	}


}



class DiceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiceNotationParser.RULE_dice;
    }

	DSEPARATOR() {
	    return this.getToken(DiceNotationParser.DSEPARATOR, 0);
	};

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DiceNotationParser.DIGIT);
	    } else {
	        return this.getToken(DiceNotationParser.DIGIT, i);
	    }
	};


	ADDOPERATOR() {
	    return this.getToken(DiceNotationParser.ADDOPERATOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DiceNotationParserListener ) {
	        listener.enterDice(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiceNotationParserListener ) {
	        listener.exitDice(this);
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
        this.ruleIndex = DiceNotationParser.RULE_number;
    }

	DIGIT() {
	    return this.getToken(DiceNotationParser.DIGIT, 0);
	};

	ADDOPERATOR() {
	    return this.getToken(DiceNotationParser.ADDOPERATOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DiceNotationParserListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiceNotationParserListener ) {
	        listener.exitNumber(this);
		}
	}


}




DiceNotationParser.File_Context = File_Context; 
DiceNotationParser.NotationContext = NotationContext; 
DiceNotationParser.AddOpContext = AddOpContext; 
DiceNotationParser.MultOpContext = MultOpContext; 
DiceNotationParser.OperandContext = OperandContext; 
DiceNotationParser.DiceContext = DiceContext; 
DiceNotationParser.NumberContext = NumberContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
