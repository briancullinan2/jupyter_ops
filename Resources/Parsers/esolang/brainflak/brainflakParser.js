// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/esolang/brainflak/brainflak.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import brainflakListener from './brainflakListener.js';
const serializedATN = [4,1,9,62,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,4,0,14,8,0,11,0,12,0,15,1,0,1,0,1,1,1,1,1,1,1,1,3,1,24,8,1,1,
2,1,2,5,2,28,8,2,10,2,12,2,31,9,2,1,2,1,2,1,3,1,3,5,3,37,8,3,10,3,12,3,40,
9,3,1,3,1,3,1,4,1,4,5,4,46,8,4,10,4,12,4,49,9,4,1,4,1,4,1,5,1,5,5,5,55,8,
5,10,5,12,5,58,9,5,1,5,1,5,1,5,0,0,6,0,2,4,6,8,10,0,0,63,0,13,1,0,0,0,2,
23,1,0,0,0,4,25,1,0,0,0,6,34,1,0,0,0,8,43,1,0,0,0,10,52,1,0,0,0,12,14,3,
2,1,0,13,12,1,0,0,0,14,15,1,0,0,0,15,13,1,0,0,0,15,16,1,0,0,0,16,17,1,0,
0,0,17,18,5,0,0,1,18,1,1,0,0,0,19,24,3,4,2,0,20,24,3,6,3,0,21,24,3,8,4,0,
22,24,3,10,5,0,23,19,1,0,0,0,23,20,1,0,0,0,23,21,1,0,0,0,23,22,1,0,0,0,24,
3,1,0,0,0,25,29,5,1,0,0,26,28,3,2,1,0,27,26,1,0,0,0,28,31,1,0,0,0,29,27,
1,0,0,0,29,30,1,0,0,0,30,32,1,0,0,0,31,29,1,0,0,0,32,33,5,2,0,0,33,5,1,0,
0,0,34,38,5,5,0,0,35,37,3,2,1,0,36,35,1,0,0,0,37,40,1,0,0,0,38,36,1,0,0,
0,38,39,1,0,0,0,39,41,1,0,0,0,40,38,1,0,0,0,41,42,5,6,0,0,42,7,1,0,0,0,43,
47,5,7,0,0,44,46,3,2,1,0,45,44,1,0,0,0,46,49,1,0,0,0,47,45,1,0,0,0,47,48,
1,0,0,0,48,50,1,0,0,0,49,47,1,0,0,0,50,51,5,8,0,0,51,9,1,0,0,0,52,56,5,4,
0,0,53,55,3,2,1,0,54,53,1,0,0,0,55,58,1,0,0,0,56,54,1,0,0,0,56,57,1,0,0,
0,57,59,1,0,0,0,58,56,1,0,0,0,59,60,5,3,0,0,60,11,1,0,0,0,6,15,23,29,38,
47,56];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class brainflakParser extends antlr4.Parser {

    static grammarFileName = "brainflak.g4";
    static literalNames = [ null, "'('", "')'", "'>'", "'<'", "'{'", "'}'", 
                            "'['", "']'" ];
    static symbolicNames = [ null, "LPAREN", "RPAREN", "GT", "LT", "LBRACE", 
                             "RBRACE", "LBRACK", "RBRACK", "WS" ];
    static ruleNames = [ "file_", "statement", "parenstmt", "bracestmt", 
                         "bracketstmt", "gtltstmt" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = brainflakParser.ruleNames;
        this.literalNames = brainflakParser.literalNames;
        this.symbolicNames = brainflakParser.symbolicNames;
    }



	file_() {
	    let localctx = new File_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, brainflakParser.RULE_file_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 13; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 12;
	            this.statement();
	            this.state = 15; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 178) !== 0));
	        this.state = 17;
	        this.match(brainflakParser.EOF);
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
	    this.enterRule(localctx, 2, brainflakParser.RULE_statement);
	    try {
	        this.state = 23;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 19;
	            this.parenstmt();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 20;
	            this.bracestmt();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 21;
	            this.bracketstmt();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 22;
	            this.gtltstmt();
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



	parenstmt() {
	    let localctx = new ParenstmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, brainflakParser.RULE_parenstmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.match(brainflakParser.LPAREN);
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 178) !== 0)) {
	            this.state = 26;
	            this.statement();
	            this.state = 31;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 32;
	        this.match(brainflakParser.RPAREN);
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



	bracestmt() {
	    let localctx = new BracestmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, brainflakParser.RULE_bracestmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.match(brainflakParser.LBRACE);
	        this.state = 38;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 178) !== 0)) {
	            this.state = 35;
	            this.statement();
	            this.state = 40;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 41;
	        this.match(brainflakParser.RBRACE);
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



	bracketstmt() {
	    let localctx = new BracketstmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, brainflakParser.RULE_bracketstmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(brainflakParser.LBRACK);
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 178) !== 0)) {
	            this.state = 44;
	            this.statement();
	            this.state = 49;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 50;
	        this.match(brainflakParser.RBRACK);
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



	gtltstmt() {
	    let localctx = new GtltstmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, brainflakParser.RULE_gtltstmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(brainflakParser.LT);
	        this.state = 56;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 178) !== 0)) {
	            this.state = 53;
	            this.statement();
	            this.state = 58;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 59;
	        this.match(brainflakParser.GT);
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

brainflakParser.EOF = antlr4.Token.EOF;
brainflakParser.LPAREN = 1;
brainflakParser.RPAREN = 2;
brainflakParser.GT = 3;
brainflakParser.LT = 4;
brainflakParser.LBRACE = 5;
brainflakParser.RBRACE = 6;
brainflakParser.LBRACK = 7;
brainflakParser.RBRACK = 8;
brainflakParser.WS = 9;

brainflakParser.RULE_file_ = 0;
brainflakParser.RULE_statement = 1;
brainflakParser.RULE_parenstmt = 2;
brainflakParser.RULE_bracestmt = 3;
brainflakParser.RULE_bracketstmt = 4;
brainflakParser.RULE_gtltstmt = 5;

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
        this.ruleIndex = brainflakParser.RULE_file_;
    }

	EOF() {
	    return this.getToken(brainflakParser.EOF, 0);
	};

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
	    if(listener instanceof brainflakListener ) {
	        listener.enterFile_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof brainflakListener ) {
	        listener.exitFile_(this);
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
        this.ruleIndex = brainflakParser.RULE_statement;
    }

	parenstmt() {
	    return this.getTypedRuleContext(ParenstmtContext,0);
	};

	bracestmt() {
	    return this.getTypedRuleContext(BracestmtContext,0);
	};

	bracketstmt() {
	    return this.getTypedRuleContext(BracketstmtContext,0);
	};

	gtltstmt() {
	    return this.getTypedRuleContext(GtltstmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof brainflakListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof brainflakListener ) {
	        listener.exitStatement(this);
		}
	}


}



class ParenstmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = brainflakParser.RULE_parenstmt;
    }

	LPAREN() {
	    return this.getToken(brainflakParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(brainflakParser.RPAREN, 0);
	};

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
	    if(listener instanceof brainflakListener ) {
	        listener.enterParenstmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof brainflakListener ) {
	        listener.exitParenstmt(this);
		}
	}


}



class BracestmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = brainflakParser.RULE_bracestmt;
    }

	LBRACE() {
	    return this.getToken(brainflakParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(brainflakParser.RBRACE, 0);
	};

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
	    if(listener instanceof brainflakListener ) {
	        listener.enterBracestmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof brainflakListener ) {
	        listener.exitBracestmt(this);
		}
	}


}



class BracketstmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = brainflakParser.RULE_bracketstmt;
    }

	LBRACK() {
	    return this.getToken(brainflakParser.LBRACK, 0);
	};

	RBRACK() {
	    return this.getToken(brainflakParser.RBRACK, 0);
	};

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
	    if(listener instanceof brainflakListener ) {
	        listener.enterBracketstmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof brainflakListener ) {
	        listener.exitBracketstmt(this);
		}
	}


}



class GtltstmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = brainflakParser.RULE_gtltstmt;
    }

	LT() {
	    return this.getToken(brainflakParser.LT, 0);
	};

	GT() {
	    return this.getToken(brainflakParser.GT, 0);
	};

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
	    if(listener instanceof brainflakListener ) {
	        listener.enterGtltstmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof brainflakListener ) {
	        listener.exitGtltstmt(this);
		}
	}


}




brainflakParser.File_Context = File_Context; 
brainflakParser.StatementContext = StatementContext; 
brainflakParser.ParenstmtContext = ParenstmtContext; 
brainflakParser.BracestmtContext = BracestmtContext; 
brainflakParser.BracketstmtContext = BracketstmtContext; 
brainflakParser.GtltstmtContext = GtltstmtContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
