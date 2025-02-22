// Generated from ./loop/loop.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import loopListener from './loopListener.js';
const serializedATN = [4,1,11,55,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,4,0,18,8,0,11,0,12,0,19,1,0,1,0,1,1,1,1,1,1,
3,1,27,8,1,1,2,1,2,1,2,3,2,32,8,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,
4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,7,0,0,8,0,2,4,6,8,10,12,
14,0,1,1,0,3,4,50,0,17,1,0,0,0,2,23,1,0,0,0,4,31,1,0,0,0,6,33,1,0,0,0,8,
38,1,0,0,0,10,44,1,0,0,0,12,50,1,0,0,0,14,52,1,0,0,0,16,18,3,2,1,0,17,16,
1,0,0,0,18,19,1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,21,1,0,0,0,21,22,5,
0,0,1,22,1,1,0,0,0,23,26,3,4,2,0,24,25,5,1,0,0,25,27,3,4,2,0,26,24,1,0,0,
0,26,27,1,0,0,0,27,3,1,0,0,0,28,32,3,6,3,0,29,32,3,8,4,0,30,32,3,10,5,0,
31,28,1,0,0,0,31,29,1,0,0,0,31,30,1,0,0,0,32,5,1,0,0,0,33,34,3,12,6,0,34,
35,5,2,0,0,35,36,3,14,7,0,36,37,5,1,0,0,37,7,1,0,0,0,38,39,3,12,6,0,39,40,
5,2,0,0,40,41,3,12,6,0,41,42,7,0,0,0,42,43,3,14,7,0,43,9,1,0,0,0,44,45,5,
5,0,0,45,46,3,12,6,0,46,47,5,6,0,0,47,48,3,2,1,0,48,49,5,7,0,0,49,11,1,0,
0,0,50,51,5,8,0,0,51,13,1,0,0,0,52,53,5,9,0,0,53,15,1,0,0,0,3,19,26,31];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class loopParser extends antlr4.Parser {

    static grammarFileName = "loop.g4";
    static literalNames = [ null, "';'", "':='", "'+'", "'-'", "'LOOP'", 
                            "'DO'", "'END'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             "ID", "NUMBER", "COMMENT", "WS" ];
    static ruleNames = [ "prog", "statementlist", "statement", "assignstmt", 
                         "incrementstmt", "loopstmt", "var_", "number" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = loopParser.ruleNames;
        this.literalNames = loopParser.literalNames;
        this.symbolicNames = loopParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, loopParser.RULE_prog);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 16;
	            this.statementlist();
	            this.state = 19; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===loopParser.T__4 || _la===loopParser.ID);
	        this.state = 21;
	        this.match(loopParser.EOF);
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



	statementlist() {
	    let localctx = new StatementlistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, loopParser.RULE_statementlist);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this.statement();
	        this.state = 26;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===loopParser.T__0) {
	            this.state = 24;
	            this.match(loopParser.T__0);
	            this.state = 25;
	            this.statement();
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, loopParser.RULE_statement);
	    try {
	        this.state = 31;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 28;
	            this.assignstmt();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 29;
	            this.incrementstmt();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 30;
	            this.loopstmt();
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



	assignstmt() {
	    let localctx = new AssignstmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, loopParser.RULE_assignstmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.var_();
	        this.state = 34;
	        this.match(loopParser.T__1);
	        this.state = 35;
	        this.number();
	        this.state = 36;
	        this.match(loopParser.T__0);
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



	incrementstmt() {
	    let localctx = new IncrementstmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, loopParser.RULE_incrementstmt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.var_();
	        this.state = 39;
	        this.match(loopParser.T__1);
	        this.state = 40;
	        this.var_();
	        this.state = 41;
	        _la = this._input.LA(1);
	        if(!(_la===loopParser.T__2 || _la===loopParser.T__3)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 42;
	        this.number();
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



	loopstmt() {
	    let localctx = new LoopstmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, loopParser.RULE_loopstmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(loopParser.T__4);
	        this.state = 45;
	        this.var_();
	        this.state = 46;
	        this.match(loopParser.T__5);
	        this.state = 47;
	        this.statementlist();
	        this.state = 48;
	        this.match(loopParser.T__6);
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



	var_() {
	    let localctx = new Var_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, loopParser.RULE_var_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(loopParser.ID);
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
	    this.enterRule(localctx, 14, loopParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(loopParser.NUMBER);
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

loopParser.EOF = antlr4.Token.EOF;
loopParser.T__0 = 1;
loopParser.T__1 = 2;
loopParser.T__2 = 3;
loopParser.T__3 = 4;
loopParser.T__4 = 5;
loopParser.T__5 = 6;
loopParser.T__6 = 7;
loopParser.ID = 8;
loopParser.NUMBER = 9;
loopParser.COMMENT = 10;
loopParser.WS = 11;

loopParser.RULE_prog = 0;
loopParser.RULE_statementlist = 1;
loopParser.RULE_statement = 2;
loopParser.RULE_assignstmt = 3;
loopParser.RULE_incrementstmt = 4;
loopParser.RULE_loopstmt = 5;
loopParser.RULE_var_ = 6;
loopParser.RULE_number = 7;

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
        this.ruleIndex = loopParser.RULE_prog;
    }

	EOF() {
	    return this.getToken(loopParser.EOF, 0);
	};

	statementlist = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementlistContext);
	    } else {
	        return this.getTypedRuleContext(StatementlistContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof loopListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof loopListener ) {
	        listener.exitProg(this);
		}
	}


}



class StatementlistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = loopParser.RULE_statementlist;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof loopListener ) {
	        listener.enterStatementlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof loopListener ) {
	        listener.exitStatementlist(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = loopParser.RULE_statement;
    }

	assignstmt() {
	    return this.getTypedRuleContext(AssignstmtContext,0);
	};

	incrementstmt() {
	    return this.getTypedRuleContext(IncrementstmtContext,0);
	};

	loopstmt() {
	    return this.getTypedRuleContext(LoopstmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof loopListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof loopListener ) {
	        listener.exitStatement(this);
		}
	}


}



class AssignstmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = loopParser.RULE_assignstmt;
    }

	var_() {
	    return this.getTypedRuleContext(Var_Context,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof loopListener ) {
	        listener.enterAssignstmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof loopListener ) {
	        listener.exitAssignstmt(this);
		}
	}


}



class IncrementstmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = loopParser.RULE_incrementstmt;
    }

	var_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Var_Context);
	    } else {
	        return this.getTypedRuleContext(Var_Context,i);
	    }
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof loopListener ) {
	        listener.enterIncrementstmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof loopListener ) {
	        listener.exitIncrementstmt(this);
		}
	}


}



class LoopstmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = loopParser.RULE_loopstmt;
    }

	var_() {
	    return this.getTypedRuleContext(Var_Context,0);
	};

	statementlist() {
	    return this.getTypedRuleContext(StatementlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof loopListener ) {
	        listener.enterLoopstmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof loopListener ) {
	        listener.exitLoopstmt(this);
		}
	}


}



class Var_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = loopParser.RULE_var_;
    }

	ID() {
	    return this.getToken(loopParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof loopListener ) {
	        listener.enterVar_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof loopListener ) {
	        listener.exitVar_(this);
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
        this.ruleIndex = loopParser.RULE_number;
    }

	NUMBER() {
	    return this.getToken(loopParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof loopListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof loopListener ) {
	        listener.exitNumber(this);
		}
	}


}




loopParser.ProgContext = ProgContext; 
loopParser.StatementlistContext = StatementlistContext; 
loopParser.StatementContext = StatementContext; 
loopParser.AssignstmtContext = AssignstmtContext; 
loopParser.IncrementstmtContext = IncrementstmtContext; 
loopParser.LoopstmtContext = LoopstmtContext; 
loopParser.Var_Context = Var_Context; 
loopParser.NumberContext = NumberContext; 
