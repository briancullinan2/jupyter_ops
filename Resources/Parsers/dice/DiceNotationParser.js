// Generated from Resources/Parsers/dice/DiceNotationParser.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import DiceNotationParserListener from './DiceNotationParserListener.js';
const serializedATN = [4,1,7,56,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,1,0,1,0,3,0,16,8,0,1,1,1,1,1,1,5,1,21,8,1,10,1,12,1,24,9,1,1,
2,1,2,1,2,5,2,29,8,2,10,2,12,2,32,9,2,1,3,1,3,1,3,1,3,1,3,1,3,3,3,40,8,3,
1,4,3,4,43,8,4,1,4,3,4,46,8,4,1,4,1,4,1,4,1,5,3,5,52,8,5,1,5,1,5,1,5,0,0,
6,0,2,4,6,8,10,0,0,58,0,15,1,0,0,0,2,17,1,0,0,0,4,25,1,0,0,0,6,39,1,0,0,
0,8,42,1,0,0,0,10,51,1,0,0,0,12,16,3,8,4,0,13,16,3,10,5,0,14,16,3,2,1,0,
15,12,1,0,0,0,15,13,1,0,0,0,15,14,1,0,0,0,16,1,1,0,0,0,17,22,3,4,2,0,18,
19,5,3,0,0,19,21,3,4,2,0,20,18,1,0,0,0,21,24,1,0,0,0,22,20,1,0,0,0,22,23,
1,0,0,0,23,3,1,0,0,0,24,22,1,0,0,0,25,30,3,6,3,0,26,27,5,4,0,0,27,29,3,6,
3,0,28,26,1,0,0,0,29,32,1,0,0,0,30,28,1,0,0,0,30,31,1,0,0,0,31,5,1,0,0,0,
32,30,1,0,0,0,33,40,3,8,4,0,34,40,3,10,5,0,35,36,5,5,0,0,36,37,3,0,0,0,37,
38,5,6,0,0,38,40,1,0,0,0,39,33,1,0,0,0,39,34,1,0,0,0,39,35,1,0,0,0,40,7,
1,0,0,0,41,43,5,3,0,0,42,41,1,0,0,0,42,43,1,0,0,0,43,45,1,0,0,0,44,46,5,
2,0,0,45,44,1,0,0,0,45,46,1,0,0,0,46,47,1,0,0,0,47,48,5,1,0,0,48,49,5,2,
0,0,49,9,1,0,0,0,50,52,5,3,0,0,51,50,1,0,0,0,51,52,1,0,0,0,52,53,1,0,0,0,
53,54,5,2,0,0,54,11,1,0,0,0,7,15,22,30,39,42,45,51];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class DiceNotationParser extends antlr4.Parser {

    static grammarFileName = "DiceNotationParser.g4";
    static literalNames = [ null, null, null, null, null, "'('", "')'" ];
    static symbolicNames = [ null, "DSEPARATOR", "DIGIT", "ADDOPERATOR", 
                             "MULTOPERATOR", "LPAREN", "RPAREN", "WS" ];
    static ruleNames = [ "notation", "addOp", "multOp", "operand", "dice", 
                         "number" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = DiceNotationParser.ruleNames;
        this.literalNames = DiceNotationParser.literalNames;
        this.symbolicNames = DiceNotationParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	notation() {
	    let localctx = new NotationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, DiceNotationParser.RULE_notation);
	    try {
	        this.state = 15;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 12;
	            this.dice();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 13;
	            this.number();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 14;
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
	    this.enterRule(localctx, 2, DiceNotationParser.RULE_addOp);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this.multOp();
	        this.state = 22;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DiceNotationParser.ADDOPERATOR) {
	            this.state = 18;
	            this.match(DiceNotationParser.ADDOPERATOR);
	            this.state = 19;
	            this.multOp();
	            this.state = 24;
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
	    this.enterRule(localctx, 4, DiceNotationParser.RULE_multOp);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.operand();
	        this.state = 30;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DiceNotationParser.MULTOPERATOR) {
	            this.state = 26;
	            this.match(DiceNotationParser.MULTOPERATOR);
	            this.state = 27;
	            this.operand();
	            this.state = 32;
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
	    this.enterRule(localctx, 6, DiceNotationParser.RULE_operand);
	    try {
	        this.state = 39;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 33;
	            this.dice();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 34;
	            this.number();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 35;
	            this.match(DiceNotationParser.LPAREN);
	            this.state = 36;
	            this.notation();
	            this.state = 37;
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
	    this.enterRule(localctx, 8, DiceNotationParser.RULE_dice);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DiceNotationParser.ADDOPERATOR) {
	            this.state = 41;
	            this.match(DiceNotationParser.ADDOPERATOR);
	        }

	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DiceNotationParser.DIGIT) {
	            this.state = 44;
	            this.match(DiceNotationParser.DIGIT);
	        }

	        this.state = 47;
	        this.match(DiceNotationParser.DSEPARATOR);
	        this.state = 48;
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
	    this.enterRule(localctx, 10, DiceNotationParser.RULE_number);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DiceNotationParser.ADDOPERATOR) {
	            this.state = 50;
	            this.match(DiceNotationParser.ADDOPERATOR);
	        }

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


}

DiceNotationParser.EOF = antlr4.Token.EOF;
DiceNotationParser.DSEPARATOR = 1;
DiceNotationParser.DIGIT = 2;
DiceNotationParser.ADDOPERATOR = 3;
DiceNotationParser.MULTOPERATOR = 4;
DiceNotationParser.LPAREN = 5;
DiceNotationParser.RPAREN = 6;
DiceNotationParser.WS = 7;

DiceNotationParser.RULE_notation = 0;
DiceNotationParser.RULE_addOp = 1;
DiceNotationParser.RULE_multOp = 2;
DiceNotationParser.RULE_operand = 3;
DiceNotationParser.RULE_dice = 4;
DiceNotationParser.RULE_number = 5;

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




DiceNotationParser.NotationContext = NotationContext; 
DiceNotationParser.AddOpContext = AddOpContext; 
DiceNotationParser.MultOpContext = MultOpContext; 
DiceNotationParser.OperandContext = OperandContext; 
DiceNotationParser.DiceContext = DiceContext; 
DiceNotationParser.NumberContext = NumberContext; 
