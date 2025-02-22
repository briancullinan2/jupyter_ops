// Generated from ./janus/janus.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import janusListener from './janusListener.js';
const serializedATN = [4,1,29,151,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,1,0,1,0,1,0,1,0,3,0,35,8,0,5,0,37,8,0,10,0,12,0,40,9,
0,1,0,1,0,1,0,5,0,45,8,0,10,0,12,0,48,9,0,1,1,4,1,51,8,1,11,1,12,1,52,1,
2,1,2,1,2,1,2,1,2,1,2,3,2,61,8,2,1,3,1,3,1,3,1,3,3,3,67,8,3,1,3,1,3,3,3,
71,8,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,3,4,80,8,4,1,4,1,4,3,4,84,8,4,1,4,1,4,
1,4,1,5,1,5,1,5,1,5,3,5,93,8,5,1,6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,
8,1,8,3,8,107,8,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,117,8,9,1,10,1,10,
1,10,1,11,1,11,1,11,1,11,1,11,3,11,127,8,11,1,12,1,12,1,12,1,12,1,12,1,12,
1,12,1,12,1,12,1,12,3,12,139,8,12,1,13,1,13,1,13,1,13,1,13,1,13,3,13,147,
8,13,1,14,1,14,1,14,0,0,15,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,0,0,159,
0,38,1,0,0,0,2,50,1,0,0,0,4,60,1,0,0,0,6,62,1,0,0,0,8,75,1,0,0,0,10,92,1,
0,0,0,12,94,1,0,0,0,14,97,1,0,0,0,16,106,1,0,0,0,18,116,1,0,0,0,20,118,1,
0,0,0,22,126,1,0,0,0,24,138,1,0,0,0,26,146,1,0,0,0,28,148,1,0,0,0,30,34,
5,26,0,0,31,32,5,1,0,0,32,33,5,27,0,0,33,35,5,2,0,0,34,31,1,0,0,0,34,35,
1,0,0,0,35,37,1,0,0,0,36,30,1,0,0,0,37,40,1,0,0,0,38,36,1,0,0,0,38,39,1,
0,0,0,39,46,1,0,0,0,40,38,1,0,0,0,41,42,5,3,0,0,42,43,5,26,0,0,43,45,3,2,
1,0,44,41,1,0,0,0,45,48,1,0,0,0,46,44,1,0,0,0,46,47,1,0,0,0,47,1,1,0,0,0,
48,46,1,0,0,0,49,51,3,4,2,0,50,49,1,0,0,0,51,52,1,0,0,0,52,50,1,0,0,0,52,
53,1,0,0,0,53,3,1,0,0,0,54,61,3,6,3,0,55,61,3,8,4,0,56,61,3,10,5,0,57,61,
3,12,6,0,58,61,3,14,7,0,59,61,3,16,8,0,60,54,1,0,0,0,60,55,1,0,0,0,60,56,
1,0,0,0,60,57,1,0,0,0,60,58,1,0,0,0,60,59,1,0,0,0,61,5,1,0,0,0,62,63,5,4,
0,0,63,66,3,22,11,0,64,65,5,5,0,0,65,67,3,2,1,0,66,64,1,0,0,0,66,67,1,0,
0,0,67,70,1,0,0,0,68,69,5,6,0,0,69,71,3,2,1,0,70,68,1,0,0,0,70,71,1,0,0,
0,71,72,1,0,0,0,72,73,5,7,0,0,73,74,3,22,11,0,74,7,1,0,0,0,75,76,5,8,0,0,
76,79,3,22,11,0,77,78,5,9,0,0,78,80,3,2,1,0,79,77,1,0,0,0,79,80,1,0,0,0,
80,83,1,0,0,0,81,82,5,10,0,0,82,84,3,2,1,0,83,81,1,0,0,0,83,84,1,0,0,0,84,
85,1,0,0,0,85,86,5,11,0,0,86,87,3,22,11,0,87,9,1,0,0,0,88,89,5,12,0,0,89,
93,5,26,0,0,90,91,5,13,0,0,91,93,5,26,0,0,92,88,1,0,0,0,92,90,1,0,0,0,93,
11,1,0,0,0,94,95,5,14,0,0,95,96,5,26,0,0,96,13,1,0,0,0,97,98,5,15,0,0,98,
99,5,26,0,0,99,15,1,0,0,0,100,101,3,26,13,0,101,102,3,18,9,0,102,107,1,0,
0,0,103,104,3,26,13,0,104,105,3,20,10,0,105,107,1,0,0,0,106,100,1,0,0,0,
106,103,1,0,0,0,107,17,1,0,0,0,108,109,5,16,0,0,109,117,3,22,11,0,110,111,
5,17,0,0,111,117,3,22,11,0,112,113,5,18,0,0,113,117,3,22,11,0,114,115,5,
19,0,0,115,117,3,22,11,0,116,108,1,0,0,0,116,110,1,0,0,0,116,112,1,0,0,0,
116,114,1,0,0,0,117,19,1,0,0,0,118,119,5,20,0,0,119,120,3,26,13,0,120,21,
1,0,0,0,121,127,3,24,12,0,122,123,3,24,12,0,123,124,5,25,0,0,124,125,3,22,
11,0,125,127,1,0,0,0,126,121,1,0,0,0,126,122,1,0,0,0,127,23,1,0,0,0,128,
129,5,21,0,0,129,130,3,22,11,0,130,131,5,22,0,0,131,139,1,0,0,0,132,133,
5,23,0,0,133,139,3,22,11,0,134,135,5,24,0,0,135,139,3,22,11,0,136,139,3,
26,13,0,137,139,3,28,14,0,138,128,1,0,0,0,138,132,1,0,0,0,138,134,1,0,0,
0,138,136,1,0,0,0,138,137,1,0,0,0,139,25,1,0,0,0,140,147,5,26,0,0,141,142,
5,26,0,0,142,143,5,1,0,0,143,144,3,22,11,0,144,145,5,2,0,0,145,147,1,0,0,
0,146,140,1,0,0,0,146,141,1,0,0,0,147,27,1,0,0,0,148,149,5,27,0,0,149,29,
1,0,0,0,15,34,38,46,52,60,66,70,79,83,92,106,116,126,138,146];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class janusParser extends antlr4.Parser {

    static grammarFileName = "janus.g4";
    static literalNames = [ null, "'['", "']'", "'PROCEDURE'", "'IF'", "'THEN'", 
                            "'ELSE'", "'FI'", "'FROM'", "'DO'", "'LOOP'", 
                            "'UNTIL'", "'CALL'", "'UNCALL'", "'READ'", "'WRITE'", 
                            "'+='", "'-='", "'!='", "'<=>'", "':'", "'('", 
                            "')'", "'-'", "'~'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, "BINOP", "IDENT", "NUM", "COMMENT", "WS" ];
    static ruleNames = [ "program", "statements", "statement", "ifstmt", 
                         "dostmt", "callstmt", "readstmt", "writestmt", 
                         "lvalstmt", "modstmt", "swapstmt", "expression", 
                         "minexp", "lvalue", "constant" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = janusParser.ruleNames;
        this.literalNames = janusParser.literalNames;
        this.symbolicNames = janusParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, janusParser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===janusParser.IDENT) {
	            this.state = 30;
	            this.match(janusParser.IDENT);
	            this.state = 34;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===janusParser.T__0) {
	                this.state = 31;
	                this.match(janusParser.T__0);
	                this.state = 32;
	                this.match(janusParser.NUM);
	                this.state = 33;
	                this.match(janusParser.T__1);
	            }

	            this.state = 40;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 46;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===janusParser.T__2) {
	            this.state = 41;
	            this.match(janusParser.T__2);
	            this.state = 42;
	            this.match(janusParser.IDENT);
	            this.state = 43;
	            this.statements();
	            this.state = 48;
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



	statements() {
	    let localctx = new StatementsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, janusParser.RULE_statements);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 49;
	            this.statement();
	            this.state = 52; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << janusParser.T__3) | (1 << janusParser.T__7) | (1 << janusParser.T__11) | (1 << janusParser.T__12) | (1 << janusParser.T__13) | (1 << janusParser.T__14) | (1 << janusParser.IDENT))) !== 0));
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
	    this.enterRule(localctx, 4, janusParser.RULE_statement);
	    try {
	        this.state = 60;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case janusParser.T__3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 54;
	            this.ifstmt();
	            break;
	        case janusParser.T__7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 55;
	            this.dostmt();
	            break;
	        case janusParser.T__11:
	        case janusParser.T__12:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 56;
	            this.callstmt();
	            break;
	        case janusParser.T__13:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 57;
	            this.readstmt();
	            break;
	        case janusParser.T__14:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 58;
	            this.writestmt();
	            break;
	        case janusParser.IDENT:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 59;
	            this.lvalstmt();
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



	ifstmt() {
	    let localctx = new IfstmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, janusParser.RULE_ifstmt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(janusParser.T__3);
	        this.state = 63;
	        this.expression();
	        this.state = 66;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===janusParser.T__4) {
	            this.state = 64;
	            this.match(janusParser.T__4);
	            this.state = 65;
	            this.statements();
	        }

	        this.state = 70;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===janusParser.T__5) {
	            this.state = 68;
	            this.match(janusParser.T__5);
	            this.state = 69;
	            this.statements();
	        }

	        this.state = 72;
	        this.match(janusParser.T__6);
	        this.state = 73;
	        this.expression();
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



	dostmt() {
	    let localctx = new DostmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, janusParser.RULE_dostmt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this.match(janusParser.T__7);
	        this.state = 76;
	        this.expression();
	        this.state = 79;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===janusParser.T__8) {
	            this.state = 77;
	            this.match(janusParser.T__8);
	            this.state = 78;
	            this.statements();
	        }

	        this.state = 83;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===janusParser.T__9) {
	            this.state = 81;
	            this.match(janusParser.T__9);
	            this.state = 82;
	            this.statements();
	        }

	        this.state = 85;
	        this.match(janusParser.T__10);
	        this.state = 86;
	        this.expression();
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



	callstmt() {
	    let localctx = new CallstmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, janusParser.RULE_callstmt);
	    try {
	        this.state = 92;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case janusParser.T__11:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 88;
	            this.match(janusParser.T__11);
	            this.state = 89;
	            this.match(janusParser.IDENT);
	            break;
	        case janusParser.T__12:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 90;
	            this.match(janusParser.T__12);
	            this.state = 91;
	            this.match(janusParser.IDENT);
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



	readstmt() {
	    let localctx = new ReadstmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, janusParser.RULE_readstmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.match(janusParser.T__13);
	        this.state = 95;
	        this.match(janusParser.IDENT);
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



	writestmt() {
	    let localctx = new WritestmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, janusParser.RULE_writestmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.match(janusParser.T__14);
	        this.state = 98;
	        this.match(janusParser.IDENT);
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



	lvalstmt() {
	    let localctx = new LvalstmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, janusParser.RULE_lvalstmt);
	    try {
	        this.state = 106;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 100;
	            this.lvalue();
	            this.state = 101;
	            this.modstmt();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 103;
	            this.lvalue();
	            this.state = 104;
	            this.swapstmt();
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



	modstmt() {
	    let localctx = new ModstmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, janusParser.RULE_modstmt);
	    try {
	        this.state = 116;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case janusParser.T__15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 108;
	            this.match(janusParser.T__15);
	            this.state = 109;
	            this.expression();
	            break;
	        case janusParser.T__16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 110;
	            this.match(janusParser.T__16);
	            this.state = 111;
	            this.expression();
	            break;
	        case janusParser.T__17:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 112;
	            this.match(janusParser.T__17);
	            this.state = 113;
	            this.expression();
	            break;
	        case janusParser.T__18:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 114;
	            this.match(janusParser.T__18);
	            this.state = 115;
	            this.expression();
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



	swapstmt() {
	    let localctx = new SwapstmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, janusParser.RULE_swapstmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        this.match(janusParser.T__19);
	        this.state = 119;
	        this.lvalue();
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



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, janusParser.RULE_expression);
	    try {
	        this.state = 126;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 121;
	            this.minexp();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 122;
	            this.minexp();
	            this.state = 123;
	            this.match(janusParser.BINOP);
	            this.state = 124;
	            this.expression();
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



	minexp() {
	    let localctx = new MinexpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, janusParser.RULE_minexp);
	    try {
	        this.state = 138;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case janusParser.T__20:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 128;
	            this.match(janusParser.T__20);
	            this.state = 129;
	            this.expression();
	            this.state = 130;
	            this.match(janusParser.T__21);
	            break;
	        case janusParser.T__22:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 132;
	            this.match(janusParser.T__22);
	            this.state = 133;
	            this.expression();
	            break;
	        case janusParser.T__23:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 134;
	            this.match(janusParser.T__23);
	            this.state = 135;
	            this.expression();
	            break;
	        case janusParser.IDENT:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 136;
	            this.lvalue();
	            break;
	        case janusParser.NUM:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 137;
	            this.constant();
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



	lvalue() {
	    let localctx = new LvalueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, janusParser.RULE_lvalue);
	    try {
	        this.state = 146;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 140;
	            this.match(janusParser.IDENT);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 141;
	            this.match(janusParser.IDENT);
	            this.state = 142;
	            this.match(janusParser.T__0);
	            this.state = 143;
	            this.expression();
	            this.state = 144;
	            this.match(janusParser.T__1);
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



	constant() {
	    let localctx = new ConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, janusParser.RULE_constant);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 148;
	        this.match(janusParser.NUM);
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

janusParser.EOF = antlr4.Token.EOF;
janusParser.T__0 = 1;
janusParser.T__1 = 2;
janusParser.T__2 = 3;
janusParser.T__3 = 4;
janusParser.T__4 = 5;
janusParser.T__5 = 6;
janusParser.T__6 = 7;
janusParser.T__7 = 8;
janusParser.T__8 = 9;
janusParser.T__9 = 10;
janusParser.T__10 = 11;
janusParser.T__11 = 12;
janusParser.T__12 = 13;
janusParser.T__13 = 14;
janusParser.T__14 = 15;
janusParser.T__15 = 16;
janusParser.T__16 = 17;
janusParser.T__17 = 18;
janusParser.T__18 = 19;
janusParser.T__19 = 20;
janusParser.T__20 = 21;
janusParser.T__21 = 22;
janusParser.T__22 = 23;
janusParser.T__23 = 24;
janusParser.BINOP = 25;
janusParser.IDENT = 26;
janusParser.NUM = 27;
janusParser.COMMENT = 28;
janusParser.WS = 29;

janusParser.RULE_program = 0;
janusParser.RULE_statements = 1;
janusParser.RULE_statement = 2;
janusParser.RULE_ifstmt = 3;
janusParser.RULE_dostmt = 4;
janusParser.RULE_callstmt = 5;
janusParser.RULE_readstmt = 6;
janusParser.RULE_writestmt = 7;
janusParser.RULE_lvalstmt = 8;
janusParser.RULE_modstmt = 9;
janusParser.RULE_swapstmt = 10;
janusParser.RULE_expression = 11;
janusParser.RULE_minexp = 12;
janusParser.RULE_lvalue = 13;
janusParser.RULE_constant = 14;

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
        this.ruleIndex = janusParser.RULE_program;
    }

	IDENT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(janusParser.IDENT);
	    } else {
	        return this.getToken(janusParser.IDENT, i);
	    }
	};


	statements = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementsContext);
	    } else {
	        return this.getTypedRuleContext(StatementsContext,i);
	    }
	};

	NUM = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(janusParser.NUM);
	    } else {
	        return this.getToken(janusParser.NUM, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof janusListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof janusListener ) {
	        listener.exitProgram(this);
		}
	}


}



class StatementsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = janusParser.RULE_statements;
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
	    if(listener instanceof janusListener ) {
	        listener.enterStatements(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof janusListener ) {
	        listener.exitStatements(this);
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
        this.ruleIndex = janusParser.RULE_statement;
    }

	ifstmt() {
	    return this.getTypedRuleContext(IfstmtContext,0);
	};

	dostmt() {
	    return this.getTypedRuleContext(DostmtContext,0);
	};

	callstmt() {
	    return this.getTypedRuleContext(CallstmtContext,0);
	};

	readstmt() {
	    return this.getTypedRuleContext(ReadstmtContext,0);
	};

	writestmt() {
	    return this.getTypedRuleContext(WritestmtContext,0);
	};

	lvalstmt() {
	    return this.getTypedRuleContext(LvalstmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof janusListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof janusListener ) {
	        listener.exitStatement(this);
		}
	}


}



class IfstmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = janusParser.RULE_ifstmt;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	statements = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementsContext);
	    } else {
	        return this.getTypedRuleContext(StatementsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof janusListener ) {
	        listener.enterIfstmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof janusListener ) {
	        listener.exitIfstmt(this);
		}
	}


}



class DostmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = janusParser.RULE_dostmt;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	statements = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementsContext);
	    } else {
	        return this.getTypedRuleContext(StatementsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof janusListener ) {
	        listener.enterDostmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof janusListener ) {
	        listener.exitDostmt(this);
		}
	}


}



class CallstmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = janusParser.RULE_callstmt;
    }

	IDENT() {
	    return this.getToken(janusParser.IDENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof janusListener ) {
	        listener.enterCallstmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof janusListener ) {
	        listener.exitCallstmt(this);
		}
	}


}



class ReadstmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = janusParser.RULE_readstmt;
    }

	IDENT() {
	    return this.getToken(janusParser.IDENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof janusListener ) {
	        listener.enterReadstmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof janusListener ) {
	        listener.exitReadstmt(this);
		}
	}


}



class WritestmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = janusParser.RULE_writestmt;
    }

	IDENT() {
	    return this.getToken(janusParser.IDENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof janusListener ) {
	        listener.enterWritestmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof janusListener ) {
	        listener.exitWritestmt(this);
		}
	}


}



class LvalstmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = janusParser.RULE_lvalstmt;
    }

	lvalue() {
	    return this.getTypedRuleContext(LvalueContext,0);
	};

	modstmt() {
	    return this.getTypedRuleContext(ModstmtContext,0);
	};

	swapstmt() {
	    return this.getTypedRuleContext(SwapstmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof janusListener ) {
	        listener.enterLvalstmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof janusListener ) {
	        listener.exitLvalstmt(this);
		}
	}


}



class ModstmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = janusParser.RULE_modstmt;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof janusListener ) {
	        listener.enterModstmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof janusListener ) {
	        listener.exitModstmt(this);
		}
	}


}



class SwapstmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = janusParser.RULE_swapstmt;
    }

	lvalue() {
	    return this.getTypedRuleContext(LvalueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof janusListener ) {
	        listener.enterSwapstmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof janusListener ) {
	        listener.exitSwapstmt(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = janusParser.RULE_expression;
    }

	minexp() {
	    return this.getTypedRuleContext(MinexpContext,0);
	};

	BINOP() {
	    return this.getToken(janusParser.BINOP, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof janusListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof janusListener ) {
	        listener.exitExpression(this);
		}
	}


}



class MinexpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = janusParser.RULE_minexp;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	lvalue() {
	    return this.getTypedRuleContext(LvalueContext,0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof janusListener ) {
	        listener.enterMinexp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof janusListener ) {
	        listener.exitMinexp(this);
		}
	}


}



class LvalueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = janusParser.RULE_lvalue;
    }

	IDENT() {
	    return this.getToken(janusParser.IDENT, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof janusListener ) {
	        listener.enterLvalue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof janusListener ) {
	        listener.exitLvalue(this);
		}
	}


}



class ConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = janusParser.RULE_constant;
    }

	NUM() {
	    return this.getToken(janusParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof janusListener ) {
	        listener.enterConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof janusListener ) {
	        listener.exitConstant(this);
		}
	}


}




janusParser.ProgramContext = ProgramContext; 
janusParser.StatementsContext = StatementsContext; 
janusParser.StatementContext = StatementContext; 
janusParser.IfstmtContext = IfstmtContext; 
janusParser.DostmtContext = DostmtContext; 
janusParser.CallstmtContext = CallstmtContext; 
janusParser.ReadstmtContext = ReadstmtContext; 
janusParser.WritestmtContext = WritestmtContext; 
janusParser.LvalstmtContext = LvalstmtContext; 
janusParser.ModstmtContext = ModstmtContext; 
janusParser.SwapstmtContext = SwapstmtContext; 
janusParser.ExpressionContext = ExpressionContext; 
janusParser.MinexpContext = MinexpContext; 
janusParser.LvalueContext = LvalueContext; 
janusParser.ConstantContext = ConstantContext; 
