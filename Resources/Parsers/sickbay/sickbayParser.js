// Generated from Resources/Parsers/sickbay/sickbay.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import sickbayListener from './sickbayListener.js';
const serializedATN = [4,1,24,79,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,5,0,12,8,0,10,0,12,0,15,9,0,1,1,1,1,1,1,1,1,5,1,21,8,1,10,1,12,1,24,
9,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,53,8,2,3,2,55,8,2,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,70,8,3,1,4,1,4,1,4,1,4,1,4,
3,4,77,8,4,1,4,0,0,5,0,2,4,6,8,0,1,1,0,7,8,88,0,13,1,0,0,0,2,16,1,0,0,0,
4,54,1,0,0,0,6,69,1,0,0,0,8,71,1,0,0,0,10,12,3,2,1,0,11,10,1,0,0,0,12,15,
1,0,0,0,13,11,1,0,0,0,13,14,1,0,0,0,14,1,1,0,0,0,15,13,1,0,0,0,16,17,3,6,
3,0,17,22,3,4,2,0,18,19,5,1,0,0,19,21,3,4,2,0,20,18,1,0,0,0,21,24,1,0,0,
0,22,20,1,0,0,0,22,23,1,0,0,0,23,25,1,0,0,0,24,22,1,0,0,0,25,26,5,23,0,0,
26,3,1,0,0,0,27,28,5,2,0,0,28,55,5,22,0,0,29,30,5,3,0,0,30,31,3,8,4,0,31,
32,5,4,0,0,32,33,3,6,3,0,33,55,1,0,0,0,34,35,5,5,0,0,35,55,5,20,0,0,36,37,
5,6,0,0,37,55,5,20,0,0,38,55,7,0,0,0,39,40,5,9,0,0,40,55,5,20,0,0,41,55,
5,10,0,0,42,43,5,11,0,0,43,44,5,12,0,0,44,45,5,13,0,0,45,46,3,6,3,0,46,47,
5,14,0,0,47,55,1,0,0,0,48,52,5,15,0,0,49,53,3,8,4,0,50,51,5,16,0,0,51,53,
3,8,4,0,52,49,1,0,0,0,52,50,1,0,0,0,53,55,1,0,0,0,54,27,1,0,0,0,54,29,1,
0,0,0,54,34,1,0,0,0,54,36,1,0,0,0,54,38,1,0,0,0,54,39,1,0,0,0,54,41,1,0,
0,0,54,42,1,0,0,0,54,48,1,0,0,0,55,5,1,0,0,0,56,70,3,8,4,0,57,70,5,20,0,
0,58,59,5,17,0,0,59,60,5,13,0,0,60,61,3,6,3,0,61,62,5,14,0,0,62,70,1,0,0,
0,63,64,5,13,0,0,64,65,3,6,3,0,65,66,5,18,0,0,66,67,3,6,3,0,67,68,5,14,0,
0,68,70,1,0,0,0,69,56,1,0,0,0,69,57,1,0,0,0,69,58,1,0,0,0,69,63,1,0,0,0,
70,7,1,0,0,0,71,76,5,19,0,0,72,73,5,13,0,0,73,74,3,6,3,0,74,75,5,14,0,0,
75,77,1,0,0,0,76,72,1,0,0,0,76,77,1,0,0,0,77,9,1,0,0,0,6,13,22,52,54,69,
76];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class sickbayParser extends antlr4.Parser {

    static grammarFileName = "sickbay.g4";
    static literalNames = [ null, "':'", "'REM'", "'LET'", "'='", "'GOTO'", 
                            "'GOSUB'", "'RETURN'", "'END'", "'PROLONG'", 
                            "'CUTSHORT'", "'DIM'", "'RING'", "'('", "')'", 
                            "'INPUT'", "'CHR$'", "'RND%'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "INTOP", "IINTID", "INTCONST", 
                             "STRCONST", "ARBTEXT", "NL", "WS" ];
    static ruleNames = [ "sickbay", "line", "stmt", "intExpr", "intVar" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = sickbayParser.ruleNames;
        this.literalNames = sickbayParser.literalNames;
        this.symbolicNames = sickbayParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	sickbay() {
	    let localctx = new SickbayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, sickbayParser.RULE_sickbay);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 13;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << sickbayParser.T__12) | (1 << sickbayParser.T__16) | (1 << sickbayParser.IINTID) | (1 << sickbayParser.INTCONST))) !== 0)) {
	            this.state = 10;
	            this.line();
	            this.state = 15;
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
	    this.enterRule(localctx, 2, sickbayParser.RULE_line);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.intExpr();
	        this.state = 17;
	        this.stmt();
	        this.state = 22;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===sickbayParser.T__0) {
	            this.state = 18;
	            this.match(sickbayParser.T__0);
	            this.state = 19;
	            this.stmt();
	            this.state = 24;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 25;
	        this.match(sickbayParser.NL);
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



	stmt() {
	    let localctx = new StmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, sickbayParser.RULE_stmt);
	    var _la = 0; // Token type
	    try {
	        this.state = 54;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case sickbayParser.T__1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 27;
	            this.match(sickbayParser.T__1);
	            this.state = 28;
	            this.match(sickbayParser.ARBTEXT);
	            break;
	        case sickbayParser.T__2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 29;
	            this.match(sickbayParser.T__2);
	            this.state = 30;
	            this.intVar();
	            this.state = 31;
	            this.match(sickbayParser.T__3);
	            this.state = 32;
	            this.intExpr();
	            break;
	        case sickbayParser.T__4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 34;
	            this.match(sickbayParser.T__4);
	            this.state = 35;
	            this.match(sickbayParser.INTCONST);
	            break;
	        case sickbayParser.T__5:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 36;
	            this.match(sickbayParser.T__5);
	            this.state = 37;
	            this.match(sickbayParser.INTCONST);
	            break;
	        case sickbayParser.T__6:
	        case sickbayParser.T__7:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 38;
	            _la = this._input.LA(1);
	            if(!(_la===sickbayParser.T__6 || _la===sickbayParser.T__7)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case sickbayParser.T__8:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 39;
	            this.match(sickbayParser.T__8);
	            this.state = 40;
	            this.match(sickbayParser.INTCONST);
	            break;
	        case sickbayParser.T__9:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 41;
	            this.match(sickbayParser.T__9);
	            break;
	        case sickbayParser.T__10:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 42;
	            this.match(sickbayParser.T__10);
	            this.state = 43;
	            this.match(sickbayParser.T__11);
	            this.state = 44;
	            this.match(sickbayParser.T__12);
	            this.state = 45;
	            this.intExpr();
	            this.state = 46;
	            this.match(sickbayParser.T__13);
	            break;
	        case sickbayParser.T__14:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 48;
	            this.match(sickbayParser.T__14);
	            this.state = 52;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case sickbayParser.IINTID:
	                this.state = 49;
	                this.intVar();
	                break;
	            case sickbayParser.T__15:
	                this.state = 50;
	                this.match(sickbayParser.T__15);
	                this.state = 51;
	                this.intVar();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
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



	intExpr() {
	    let localctx = new IntExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, sickbayParser.RULE_intExpr);
	    try {
	        this.state = 69;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case sickbayParser.IINTID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 56;
	            this.intVar();
	            break;
	        case sickbayParser.INTCONST:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 57;
	            this.match(sickbayParser.INTCONST);
	            break;
	        case sickbayParser.T__16:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 58;
	            this.match(sickbayParser.T__16);
	            this.state = 59;
	            this.match(sickbayParser.T__12);
	            this.state = 60;
	            this.intExpr();
	            this.state = 61;
	            this.match(sickbayParser.T__13);
	            break;
	        case sickbayParser.T__12:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 63;
	            this.match(sickbayParser.T__12);
	            this.state = 64;
	            this.intExpr();
	            this.state = 65;
	            this.match(sickbayParser.INTOP);
	            this.state = 66;
	            this.intExpr();
	            this.state = 67;
	            this.match(sickbayParser.T__13);
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



	intVar() {
	    let localctx = new IntVarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, sickbayParser.RULE_intVar);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(sickbayParser.IINTID);
	        this.state = 76;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===sickbayParser.T__12) {
	            this.state = 72;
	            this.match(sickbayParser.T__12);
	            this.state = 73;
	            this.intExpr();
	            this.state = 74;
	            this.match(sickbayParser.T__13);
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

sickbayParser.EOF = antlr4.Token.EOF;
sickbayParser.T__0 = 1;
sickbayParser.T__1 = 2;
sickbayParser.T__2 = 3;
sickbayParser.T__3 = 4;
sickbayParser.T__4 = 5;
sickbayParser.T__5 = 6;
sickbayParser.T__6 = 7;
sickbayParser.T__7 = 8;
sickbayParser.T__8 = 9;
sickbayParser.T__9 = 10;
sickbayParser.T__10 = 11;
sickbayParser.T__11 = 12;
sickbayParser.T__12 = 13;
sickbayParser.T__13 = 14;
sickbayParser.T__14 = 15;
sickbayParser.T__15 = 16;
sickbayParser.T__16 = 17;
sickbayParser.INTOP = 18;
sickbayParser.IINTID = 19;
sickbayParser.INTCONST = 20;
sickbayParser.STRCONST = 21;
sickbayParser.ARBTEXT = 22;
sickbayParser.NL = 23;
sickbayParser.WS = 24;

sickbayParser.RULE_sickbay = 0;
sickbayParser.RULE_line = 1;
sickbayParser.RULE_stmt = 2;
sickbayParser.RULE_intExpr = 3;
sickbayParser.RULE_intVar = 4;

class SickbayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sickbayParser.RULE_sickbay;
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

	enterRule(listener) {
	    if(listener instanceof sickbayListener ) {
	        listener.enterSickbay(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sickbayListener ) {
	        listener.exitSickbay(this);
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
        this.ruleIndex = sickbayParser.RULE_line;
    }

	intExpr() {
	    return this.getTypedRuleContext(IntExprContext,0);
	};

	stmt = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StmtContext);
	    } else {
	        return this.getTypedRuleContext(StmtContext,i);
	    }
	};

	NL() {
	    return this.getToken(sickbayParser.NL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof sickbayListener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sickbayListener ) {
	        listener.exitLine(this);
		}
	}


}



class StmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sickbayParser.RULE_stmt;
    }

	ARBTEXT() {
	    return this.getToken(sickbayParser.ARBTEXT, 0);
	};

	intVar() {
	    return this.getTypedRuleContext(IntVarContext,0);
	};

	intExpr() {
	    return this.getTypedRuleContext(IntExprContext,0);
	};

	INTCONST() {
	    return this.getToken(sickbayParser.INTCONST, 0);
	};

	enterRule(listener) {
	    if(listener instanceof sickbayListener ) {
	        listener.enterStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sickbayListener ) {
	        listener.exitStmt(this);
		}
	}


}



class IntExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sickbayParser.RULE_intExpr;
    }

	intVar() {
	    return this.getTypedRuleContext(IntVarContext,0);
	};

	INTCONST() {
	    return this.getToken(sickbayParser.INTCONST, 0);
	};

	intExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IntExprContext);
	    } else {
	        return this.getTypedRuleContext(IntExprContext,i);
	    }
	};

	INTOP() {
	    return this.getToken(sickbayParser.INTOP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof sickbayListener ) {
	        listener.enterIntExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sickbayListener ) {
	        listener.exitIntExpr(this);
		}
	}


}



class IntVarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sickbayParser.RULE_intVar;
    }

	IINTID() {
	    return this.getToken(sickbayParser.IINTID, 0);
	};

	intExpr() {
	    return this.getTypedRuleContext(IntExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof sickbayListener ) {
	        listener.enterIntVar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sickbayListener ) {
	        listener.exitIntVar(this);
		}
	}


}




sickbayParser.SickbayContext = SickbayContext; 
sickbayParser.LineContext = LineContext; 
sickbayParser.StmtContext = StmtContext; 
sickbayParser.IntExprContext = IntExprContext; 
sickbayParser.IntVarContext = IntVarContext; 
