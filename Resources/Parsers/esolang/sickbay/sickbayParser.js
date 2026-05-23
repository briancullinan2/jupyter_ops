// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/esolang/sickbay/sickbay.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import sickbayListener from './sickbayListener.js';
const serializedATN = [4,1,25,89,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,5,0,12,8,0,10,0,12,0,15,9,0,1,0,1,0,1,1,1,1,1,1,3,1,22,8,1,1,1,1,1,5,
1,26,8,1,10,1,12,1,29,9,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
2,1,2,1,2,1,2,1,2,1,2,3,2,48,8,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
1,2,1,2,1,2,3,2,63,8,2,3,2,65,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
3,1,3,1,3,1,3,3,3,80,8,3,1,4,1,4,1,4,1,4,1,4,3,4,87,8,4,1,4,0,0,5,0,2,4,
6,8,0,1,1,0,7,8,102,0,13,1,0,0,0,2,18,1,0,0,0,4,64,1,0,0,0,6,79,1,0,0,0,
8,81,1,0,0,0,10,12,3,2,1,0,11,10,1,0,0,0,12,15,1,0,0,0,13,11,1,0,0,0,13,
14,1,0,0,0,14,16,1,0,0,0,15,13,1,0,0,0,16,17,5,0,0,1,17,1,1,0,0,0,18,19,
3,6,3,0,19,21,3,4,2,0,20,22,5,1,0,0,21,20,1,0,0,0,21,22,1,0,0,0,22,27,1,
0,0,0,23,24,5,2,0,0,24,26,3,4,2,0,25,23,1,0,0,0,26,29,1,0,0,0,27,25,1,0,
0,0,27,28,1,0,0,0,28,30,1,0,0,0,29,27,1,0,0,0,30,31,5,23,0,0,31,3,1,0,0,
0,32,65,5,25,0,0,33,34,5,3,0,0,34,35,3,8,4,0,35,36,5,4,0,0,36,37,3,6,3,0,
37,65,1,0,0,0,38,39,5,5,0,0,39,65,5,21,0,0,40,41,5,6,0,0,41,65,5,21,0,0,
42,65,7,0,0,0,43,47,5,9,0,0,44,48,5,22,0,0,45,48,3,6,3,0,46,48,3,8,4,0,47,
44,1,0,0,0,47,45,1,0,0,0,47,46,1,0,0,0,48,65,1,0,0,0,49,50,5,10,0,0,50,65,
5,21,0,0,51,65,5,11,0,0,52,53,5,12,0,0,53,54,5,13,0,0,54,55,5,14,0,0,55,
56,3,6,3,0,56,57,5,15,0,0,57,65,1,0,0,0,58,62,5,16,0,0,59,63,3,8,4,0,60,
61,5,17,0,0,61,63,3,8,4,0,62,59,1,0,0,0,62,60,1,0,0,0,63,65,1,0,0,0,64,32,
1,0,0,0,64,33,1,0,0,0,64,38,1,0,0,0,64,40,1,0,0,0,64,42,1,0,0,0,64,43,1,
0,0,0,64,49,1,0,0,0,64,51,1,0,0,0,64,52,1,0,0,0,64,58,1,0,0,0,65,5,1,0,0,
0,66,80,3,8,4,0,67,80,5,21,0,0,68,69,5,18,0,0,69,70,5,14,0,0,70,71,3,6,3,
0,71,72,5,15,0,0,72,80,1,0,0,0,73,74,5,14,0,0,74,75,3,6,3,0,75,76,5,19,0,
0,76,77,3,6,3,0,77,78,5,15,0,0,78,80,1,0,0,0,79,66,1,0,0,0,79,67,1,0,0,0,
79,68,1,0,0,0,79,73,1,0,0,0,80,7,1,0,0,0,81,86,5,20,0,0,82,83,5,14,0,0,83,
84,3,6,3,0,84,85,5,15,0,0,85,87,1,0,0,0,86,82,1,0,0,0,86,87,1,0,0,0,87,9,
1,0,0,0,8,13,21,27,47,62,64,79,86];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class sickbayParser extends antlr4.Parser {

    static grammarFileName = "sickbay.g4";
    static literalNames = [ null, "';'", "':'", "'LET'", "'='", "'GOTO'", 
                            "'GOSUB'", "'RETURN'", "'END'", "'PRINT'", "'PROLONG'", 
                            "'CUTSHORT'", "'DIM'", "'RING'", "'('", "')'", 
                            "'INPUT'", "'CHR$'", "'RND%'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, "INTOP", "IINTID", "INTCONST", 
                             "STRCONST", "NL", "WS", "REM" ];
    static ruleNames = [ "sickbay", "line", "stmt", "intExpr", "intVar" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = sickbayParser.ruleNames;
        this.literalNames = sickbayParser.literalNames;
        this.symbolicNames = sickbayParser.symbolicNames;
    }



	sickbay() {
	    let localctx = new SickbayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, sickbayParser.RULE_sickbay);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 13;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3424256) !== 0)) {
	            this.state = 10;
	            this.line();
	            this.state = 15;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 16;
	        this.match(sickbayParser.EOF);
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.intExpr();
	        this.state = 19;
	        this.stmt();
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 20;
	            this.match(sickbayParser.T__0);
	        }

	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 23;
	            this.match(sickbayParser.T__1);
	            this.state = 24;
	            this.stmt();
	            this.state = 29;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 30;
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
	    var _la = 0;
	    try {
	        this.state = 64;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 25:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 32;
	            this.match(sickbayParser.REM);
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 33;
	            this.match(sickbayParser.T__2);
	            this.state = 34;
	            this.intVar();
	            this.state = 35;
	            this.match(sickbayParser.T__3);
	            this.state = 36;
	            this.intExpr();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 38;
	            this.match(sickbayParser.T__4);
	            this.state = 39;
	            this.match(sickbayParser.INTCONST);
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 40;
	            this.match(sickbayParser.T__5);
	            this.state = 41;
	            this.match(sickbayParser.INTCONST);
	            break;
	        case 7:
	        case 8:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 42;
	            _la = this._input.LA(1);
	            if(!(_la===7 || _la===8)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 43;
	            this.match(sickbayParser.T__8);
	            this.state = 47;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 44;
	                this.match(sickbayParser.STRCONST);
	                break;

	            case 2:
	                this.state = 45;
	                this.intExpr();
	                break;

	            case 3:
	                this.state = 46;
	                this.intVar();
	                break;

	            }
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 49;
	            this.match(sickbayParser.T__9);
	            this.state = 50;
	            this.match(sickbayParser.INTCONST);
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 51;
	            this.match(sickbayParser.T__10);
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 52;
	            this.match(sickbayParser.T__11);
	            this.state = 53;
	            this.match(sickbayParser.T__12);
	            this.state = 54;
	            this.match(sickbayParser.T__13);
	            this.state = 55;
	            this.intExpr();
	            this.state = 56;
	            this.match(sickbayParser.T__14);
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 58;
	            this.match(sickbayParser.T__15);
	            this.state = 62;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 20:
	                this.state = 59;
	                this.intVar();
	                break;
	            case 17:
	                this.state = 60;
	                this.match(sickbayParser.T__16);
	                this.state = 61;
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
	        this.state = 79;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 20:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 66;
	            this.intVar();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 67;
	            this.match(sickbayParser.INTCONST);
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 68;
	            this.match(sickbayParser.T__17);
	            this.state = 69;
	            this.match(sickbayParser.T__13);
	            this.state = 70;
	            this.intExpr();
	            this.state = 71;
	            this.match(sickbayParser.T__14);
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 73;
	            this.match(sickbayParser.T__13);
	            this.state = 74;
	            this.intExpr();
	            this.state = 75;
	            this.match(sickbayParser.INTOP);
	            this.state = 76;
	            this.intExpr();
	            this.state = 77;
	            this.match(sickbayParser.T__14);
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.match(sickbayParser.IINTID);
	        this.state = 86;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14) {
	            this.state = 82;
	            this.match(sickbayParser.T__13);
	            this.state = 83;
	            this.intExpr();
	            this.state = 84;
	            this.match(sickbayParser.T__14);
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
sickbayParser.T__17 = 18;
sickbayParser.INTOP = 19;
sickbayParser.IINTID = 20;
sickbayParser.INTCONST = 21;
sickbayParser.STRCONST = 22;
sickbayParser.NL = 23;
sickbayParser.WS = 24;
sickbayParser.REM = 25;

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

	EOF() {
	    return this.getToken(sickbayParser.EOF, 0);
	};

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

	REM() {
	    return this.getToken(sickbayParser.REM, 0);
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

	STRCONST() {
	    return this.getToken(sickbayParser.STRCONST, 0);
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

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
