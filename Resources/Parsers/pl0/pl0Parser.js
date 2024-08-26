// Generated from Resources/Parsers/pl0/pl0.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import pl0Listener from './pl0Listener.js';
const serializedATN = [4,1,33,177,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,1,
0,1,0,1,0,1,1,3,1,45,8,1,1,1,3,1,48,8,1,1,1,5,1,51,8,1,10,1,12,1,54,9,1,
1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,67,8,2,10,2,12,2,70,9,2,
1,2,1,2,1,3,1,3,1,3,1,3,5,3,78,8,3,10,3,12,3,81,9,3,1,3,1,3,1,4,1,4,1,4,
1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,99,8,5,1,6,1,6,1,6,1,6,1,
7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,1,11,1,11,1,11,1,11,5,11,
121,8,11,10,11,12,11,124,9,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,13,1,
13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,3,14,144,8,14,1,15,3,15,
147,8,15,1,15,1,15,1,15,5,15,152,8,15,10,15,12,15,155,9,15,1,16,1,16,1,16,
5,16,160,8,16,10,16,12,16,163,9,16,1,17,1,17,1,17,1,17,1,17,1,17,3,17,171,
8,17,1,18,1,18,1,19,1,19,1,19,0,0,20,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
28,30,32,34,36,38,0,3,2,0,2,2,8,12,1,0,13,14,1,0,15,16,176,0,40,1,0,0,0,
2,44,1,0,0,0,4,57,1,0,0,0,6,73,1,0,0,0,8,84,1,0,0,0,10,98,1,0,0,0,12,100,
1,0,0,0,14,104,1,0,0,0,16,107,1,0,0,0,18,110,1,0,0,0,20,113,1,0,0,0,22,116,
1,0,0,0,24,127,1,0,0,0,26,132,1,0,0,0,28,143,1,0,0,0,30,146,1,0,0,0,32,156,
1,0,0,0,34,170,1,0,0,0,36,172,1,0,0,0,38,174,1,0,0,0,40,41,3,2,1,0,41,42,
5,1,0,0,42,1,1,0,0,0,43,45,3,4,2,0,44,43,1,0,0,0,44,45,1,0,0,0,45,47,1,0,
0,0,46,48,3,6,3,0,47,46,1,0,0,0,47,48,1,0,0,0,48,52,1,0,0,0,49,51,3,8,4,
0,50,49,1,0,0,0,51,54,1,0,0,0,52,50,1,0,0,0,52,53,1,0,0,0,53,55,1,0,0,0,
54,52,1,0,0,0,55,56,3,10,5,0,56,3,1,0,0,0,57,58,5,28,0,0,58,59,3,36,18,0,
59,60,5,2,0,0,60,68,3,38,19,0,61,62,5,3,0,0,62,63,3,36,18,0,63,64,5,2,0,
0,64,65,3,38,19,0,65,67,1,0,0,0,66,61,1,0,0,0,67,70,1,0,0,0,68,66,1,0,0,
0,68,69,1,0,0,0,69,71,1,0,0,0,70,68,1,0,0,0,71,72,5,4,0,0,72,5,1,0,0,0,73,
74,5,29,0,0,74,79,3,36,18,0,75,76,5,3,0,0,76,78,3,36,18,0,77,75,1,0,0,0,
78,81,1,0,0,0,79,77,1,0,0,0,79,80,1,0,0,0,80,82,1,0,0,0,81,79,1,0,0,0,82,
83,5,4,0,0,83,7,1,0,0,0,84,85,5,30,0,0,85,86,3,36,18,0,86,87,5,4,0,0,87,
88,3,2,1,0,88,89,5,4,0,0,89,9,1,0,0,0,90,99,3,12,6,0,91,99,3,14,7,0,92,99,
3,16,8,0,93,99,3,18,9,0,94,99,3,20,10,0,95,99,3,22,11,0,96,99,3,24,12,0,
97,99,3,26,13,0,98,90,1,0,0,0,98,91,1,0,0,0,98,92,1,0,0,0,98,93,1,0,0,0,
98,94,1,0,0,0,98,95,1,0,0,0,98,96,1,0,0,0,98,97,1,0,0,0,98,99,1,0,0,0,99,
11,1,0,0,0,100,101,3,36,18,0,101,102,5,5,0,0,102,103,3,30,15,0,103,13,1,
0,0,0,104,105,5,27,0,0,105,106,3,36,18,0,106,15,1,0,0,0,107,108,5,19,0,0,
108,109,3,36,18,0,109,17,1,0,0,0,110,111,5,6,0,0,111,112,3,36,18,0,112,19,
1,0,0,0,113,114,5,7,0,0,114,115,3,30,15,0,115,21,1,0,0,0,116,117,5,25,0,
0,117,122,3,10,5,0,118,119,5,4,0,0,119,121,3,10,5,0,120,118,1,0,0,0,121,
124,1,0,0,0,122,120,1,0,0,0,122,123,1,0,0,0,123,125,1,0,0,0,124,122,1,0,
0,0,125,126,5,26,0,0,126,23,1,0,0,0,127,128,5,22,0,0,128,129,3,28,14,0,129,
130,5,23,0,0,130,131,3,10,5,0,131,25,1,0,0,0,132,133,5,20,0,0,133,134,3,
28,14,0,134,135,5,21,0,0,135,136,3,10,5,0,136,27,1,0,0,0,137,138,5,24,0,
0,138,144,3,30,15,0,139,140,3,30,15,0,140,141,7,0,0,0,141,142,3,30,15,0,
142,144,1,0,0,0,143,137,1,0,0,0,143,139,1,0,0,0,144,29,1,0,0,0,145,147,7,
1,0,0,146,145,1,0,0,0,146,147,1,0,0,0,147,148,1,0,0,0,148,153,3,32,16,0,
149,150,7,1,0,0,150,152,3,32,16,0,151,149,1,0,0,0,152,155,1,0,0,0,153,151,
1,0,0,0,153,154,1,0,0,0,154,31,1,0,0,0,155,153,1,0,0,0,156,161,3,34,17,0,
157,158,7,2,0,0,158,160,3,34,17,0,159,157,1,0,0,0,160,163,1,0,0,0,161,159,
1,0,0,0,161,162,1,0,0,0,162,33,1,0,0,0,163,161,1,0,0,0,164,171,3,36,18,0,
165,171,3,38,19,0,166,167,5,17,0,0,167,168,3,30,15,0,168,169,5,18,0,0,169,
171,1,0,0,0,170,164,1,0,0,0,170,165,1,0,0,0,170,166,1,0,0,0,171,35,1,0,0,
0,172,173,5,31,0,0,173,37,1,0,0,0,174,175,5,32,0,0,175,39,1,0,0,0,12,44,
47,52,68,79,98,122,143,146,153,161,170];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class pl0Parser extends antlr4.Parser {

    static grammarFileName = "pl0.g4";
    static literalNames = [ null, "'.'", "'='", "','", "';'", "':='", "'?'", 
                            "'!'", "'#'", "'<'", "'<='", "'>'", "'>='", 
                            "'+'", "'-'", "'*'", "'/'", "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, "WRITE", "WHILE", "DO", "IF", 
                             "THEN", "ODD", "BEGIN", "END", "CALL", "CONST", 
                             "VAR", "PROCEDURE", "STRING", "NUMBER", "WS" ];
    static ruleNames = [ "program", "block", "consts", "vars_", "procedure", 
                         "statement", "assignstmt", "callstmt", "writestmt", 
                         "qstmt", "bangstmt", "beginstmt", "ifstmt", "whilestmt", 
                         "condition", "expression", "term", "factor", "ident", 
                         "number" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = pl0Parser.ruleNames;
        this.literalNames = pl0Parser.literalNames;
        this.symbolicNames = pl0Parser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, pl0Parser.RULE_program);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.block();
	        this.state = 41;
	        this.match(pl0Parser.T__0);
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



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, pl0Parser.RULE_block);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===pl0Parser.CONST) {
	            this.state = 43;
	            this.consts();
	        }

	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===pl0Parser.VAR) {
	            this.state = 46;
	            this.vars_();
	        }

	        this.state = 52;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===pl0Parser.PROCEDURE) {
	            this.state = 49;
	            this.procedure();
	            this.state = 54;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 55;
	        this.statement();
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



	consts() {
	    let localctx = new ConstsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, pl0Parser.RULE_consts);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(pl0Parser.CONST);
	        this.state = 58;
	        this.ident();
	        this.state = 59;
	        this.match(pl0Parser.T__1);
	        this.state = 60;
	        this.number();
	        this.state = 68;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===pl0Parser.T__2) {
	            this.state = 61;
	            this.match(pl0Parser.T__2);
	            this.state = 62;
	            this.ident();
	            this.state = 63;
	            this.match(pl0Parser.T__1);
	            this.state = 64;
	            this.number();
	            this.state = 70;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 71;
	        this.match(pl0Parser.T__3);
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



	vars_() {
	    let localctx = new Vars_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, pl0Parser.RULE_vars_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(pl0Parser.VAR);
	        this.state = 74;
	        this.ident();
	        this.state = 79;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===pl0Parser.T__2) {
	            this.state = 75;
	            this.match(pl0Parser.T__2);
	            this.state = 76;
	            this.ident();
	            this.state = 81;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 82;
	        this.match(pl0Parser.T__3);
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



	procedure() {
	    let localctx = new ProcedureContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, pl0Parser.RULE_procedure);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.match(pl0Parser.PROCEDURE);
	        this.state = 85;
	        this.ident();
	        this.state = 86;
	        this.match(pl0Parser.T__3);
	        this.state = 87;
	        this.block();
	        this.state = 88;
	        this.match(pl0Parser.T__3);
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
	    this.enterRule(localctx, 10, pl0Parser.RULE_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case pl0Parser.STRING:
	        	this.state = 90;
	        	this.assignstmt();
	        	break;
	        case pl0Parser.CALL:
	        	this.state = 91;
	        	this.callstmt();
	        	break;
	        case pl0Parser.WRITE:
	        	this.state = 92;
	        	this.writestmt();
	        	break;
	        case pl0Parser.T__5:
	        	this.state = 93;
	        	this.qstmt();
	        	break;
	        case pl0Parser.T__6:
	        	this.state = 94;
	        	this.bangstmt();
	        	break;
	        case pl0Parser.BEGIN:
	        	this.state = 95;
	        	this.beginstmt();
	        	break;
	        case pl0Parser.IF:
	        	this.state = 96;
	        	this.ifstmt();
	        	break;
	        case pl0Parser.WHILE:
	        	this.state = 97;
	        	this.whilestmt();
	        	break;
	        case pl0Parser.T__0:
	        case pl0Parser.T__3:
	        case pl0Parser.END:
	        	break;
	        default:
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
	    this.enterRule(localctx, 12, pl0Parser.RULE_assignstmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this.ident();
	        this.state = 101;
	        this.match(pl0Parser.T__4);
	        this.state = 102;
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
	    this.enterRule(localctx, 14, pl0Parser.RULE_callstmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.match(pl0Parser.CALL);
	        this.state = 105;
	        this.ident();
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
	    this.enterRule(localctx, 16, pl0Parser.RULE_writestmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this.match(pl0Parser.WRITE);
	        this.state = 108;
	        this.ident();
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



	qstmt() {
	    let localctx = new QstmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, pl0Parser.RULE_qstmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this.match(pl0Parser.T__5);
	        this.state = 111;
	        this.ident();
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



	bangstmt() {
	    let localctx = new BangstmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, pl0Parser.RULE_bangstmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        this.match(pl0Parser.T__6);
	        this.state = 114;
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



	beginstmt() {
	    let localctx = new BeginstmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, pl0Parser.RULE_beginstmt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        this.match(pl0Parser.BEGIN);
	        this.state = 117;
	        this.statement();
	        this.state = 122;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===pl0Parser.T__3) {
	            this.state = 118;
	            this.match(pl0Parser.T__3);
	            this.state = 119;
	            this.statement();
	            this.state = 124;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 125;
	        this.match(pl0Parser.END);
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
	    this.enterRule(localctx, 24, pl0Parser.RULE_ifstmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        this.match(pl0Parser.IF);
	        this.state = 128;
	        this.condition();
	        this.state = 129;
	        this.match(pl0Parser.THEN);
	        this.state = 130;
	        this.statement();
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



	whilestmt() {
	    let localctx = new WhilestmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, pl0Parser.RULE_whilestmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 132;
	        this.match(pl0Parser.WHILE);
	        this.state = 133;
	        this.condition();
	        this.state = 134;
	        this.match(pl0Parser.DO);
	        this.state = 135;
	        this.statement();
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



	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, pl0Parser.RULE_condition);
	    var _la = 0; // Token type
	    try {
	        this.state = 143;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case pl0Parser.ODD:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 137;
	            this.match(pl0Parser.ODD);
	            this.state = 138;
	            this.expression();
	            break;
	        case pl0Parser.T__12:
	        case pl0Parser.T__13:
	        case pl0Parser.T__16:
	        case pl0Parser.STRING:
	        case pl0Parser.NUMBER:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 139;
	            this.expression();
	            this.state = 140;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << pl0Parser.T__1) | (1 << pl0Parser.T__7) | (1 << pl0Parser.T__8) | (1 << pl0Parser.T__9) | (1 << pl0Parser.T__10) | (1 << pl0Parser.T__11))) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 141;
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



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, pl0Parser.RULE_expression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===pl0Parser.T__12 || _la===pl0Parser.T__13) {
	            this.state = 145;
	            _la = this._input.LA(1);
	            if(!(_la===pl0Parser.T__12 || _la===pl0Parser.T__13)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 148;
	        this.term();
	        this.state = 153;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===pl0Parser.T__12 || _la===pl0Parser.T__13) {
	            this.state = 149;
	            _la = this._input.LA(1);
	            if(!(_la===pl0Parser.T__12 || _la===pl0Parser.T__13)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 150;
	            this.term();
	            this.state = 155;
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



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, pl0Parser.RULE_term);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
	        this.factor();
	        this.state = 161;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===pl0Parser.T__14 || _la===pl0Parser.T__15) {
	            this.state = 157;
	            _la = this._input.LA(1);
	            if(!(_la===pl0Parser.T__14 || _la===pl0Parser.T__15)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 158;
	            this.factor();
	            this.state = 163;
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



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, pl0Parser.RULE_factor);
	    try {
	        this.state = 170;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case pl0Parser.STRING:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 164;
	            this.ident();
	            break;
	        case pl0Parser.NUMBER:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 165;
	            this.number();
	            break;
	        case pl0Parser.T__16:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 166;
	            this.match(pl0Parser.T__16);
	            this.state = 167;
	            this.expression();
	            this.state = 168;
	            this.match(pl0Parser.T__17);
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



	ident() {
	    let localctx = new IdentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, pl0Parser.RULE_ident);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 172;
	        this.match(pl0Parser.STRING);
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
	    this.enterRule(localctx, 38, pl0Parser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 174;
	        this.match(pl0Parser.NUMBER);
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

pl0Parser.EOF = antlr4.Token.EOF;
pl0Parser.T__0 = 1;
pl0Parser.T__1 = 2;
pl0Parser.T__2 = 3;
pl0Parser.T__3 = 4;
pl0Parser.T__4 = 5;
pl0Parser.T__5 = 6;
pl0Parser.T__6 = 7;
pl0Parser.T__7 = 8;
pl0Parser.T__8 = 9;
pl0Parser.T__9 = 10;
pl0Parser.T__10 = 11;
pl0Parser.T__11 = 12;
pl0Parser.T__12 = 13;
pl0Parser.T__13 = 14;
pl0Parser.T__14 = 15;
pl0Parser.T__15 = 16;
pl0Parser.T__16 = 17;
pl0Parser.T__17 = 18;
pl0Parser.WRITE = 19;
pl0Parser.WHILE = 20;
pl0Parser.DO = 21;
pl0Parser.IF = 22;
pl0Parser.THEN = 23;
pl0Parser.ODD = 24;
pl0Parser.BEGIN = 25;
pl0Parser.END = 26;
pl0Parser.CALL = 27;
pl0Parser.CONST = 28;
pl0Parser.VAR = 29;
pl0Parser.PROCEDURE = 30;
pl0Parser.STRING = 31;
pl0Parser.NUMBER = 32;
pl0Parser.WS = 33;

pl0Parser.RULE_program = 0;
pl0Parser.RULE_block = 1;
pl0Parser.RULE_consts = 2;
pl0Parser.RULE_vars_ = 3;
pl0Parser.RULE_procedure = 4;
pl0Parser.RULE_statement = 5;
pl0Parser.RULE_assignstmt = 6;
pl0Parser.RULE_callstmt = 7;
pl0Parser.RULE_writestmt = 8;
pl0Parser.RULE_qstmt = 9;
pl0Parser.RULE_bangstmt = 10;
pl0Parser.RULE_beginstmt = 11;
pl0Parser.RULE_ifstmt = 12;
pl0Parser.RULE_whilestmt = 13;
pl0Parser.RULE_condition = 14;
pl0Parser.RULE_expression = 15;
pl0Parser.RULE_term = 16;
pl0Parser.RULE_factor = 17;
pl0Parser.RULE_ident = 18;
pl0Parser.RULE_number = 19;

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
        this.ruleIndex = pl0Parser.RULE_program;
    }

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.exitProgram(this);
		}
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pl0Parser.RULE_block;
    }

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	consts() {
	    return this.getTypedRuleContext(ConstsContext,0);
	};

	vars_() {
	    return this.getTypedRuleContext(Vars_Context,0);
	};

	procedure = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ProcedureContext);
	    } else {
	        return this.getTypedRuleContext(ProcedureContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.exitBlock(this);
		}
	}


}



class ConstsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pl0Parser.RULE_consts;
    }

	CONST() {
	    return this.getToken(pl0Parser.CONST, 0);
	};

	ident = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentContext);
	    } else {
	        return this.getTypedRuleContext(IdentContext,i);
	    }
	};

	number = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumberContext);
	    } else {
	        return this.getTypedRuleContext(NumberContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.enterConsts(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.exitConsts(this);
		}
	}


}



class Vars_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pl0Parser.RULE_vars_;
    }

	VAR() {
	    return this.getToken(pl0Parser.VAR, 0);
	};

	ident = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentContext);
	    } else {
	        return this.getTypedRuleContext(IdentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.enterVars_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.exitVars_(this);
		}
	}


}



class ProcedureContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pl0Parser.RULE_procedure;
    }

	PROCEDURE() {
	    return this.getToken(pl0Parser.PROCEDURE, 0);
	};

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.enterProcedure(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.exitProcedure(this);
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
        this.ruleIndex = pl0Parser.RULE_statement;
    }

	assignstmt() {
	    return this.getTypedRuleContext(AssignstmtContext,0);
	};

	callstmt() {
	    return this.getTypedRuleContext(CallstmtContext,0);
	};

	writestmt() {
	    return this.getTypedRuleContext(WritestmtContext,0);
	};

	qstmt() {
	    return this.getTypedRuleContext(QstmtContext,0);
	};

	bangstmt() {
	    return this.getTypedRuleContext(BangstmtContext,0);
	};

	beginstmt() {
	    return this.getTypedRuleContext(BeginstmtContext,0);
	};

	ifstmt() {
	    return this.getTypedRuleContext(IfstmtContext,0);
	};

	whilestmt() {
	    return this.getTypedRuleContext(WhilestmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pl0Listener ) {
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
        this.ruleIndex = pl0Parser.RULE_assignstmt;
    }

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.enterAssignstmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.exitAssignstmt(this);
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
        this.ruleIndex = pl0Parser.RULE_callstmt;
    }

	CALL() {
	    return this.getToken(pl0Parser.CALL, 0);
	};

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.enterCallstmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.exitCallstmt(this);
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
        this.ruleIndex = pl0Parser.RULE_writestmt;
    }

	WRITE() {
	    return this.getToken(pl0Parser.WRITE, 0);
	};

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.enterWritestmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.exitWritestmt(this);
		}
	}


}



class QstmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pl0Parser.RULE_qstmt;
    }

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.enterQstmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.exitQstmt(this);
		}
	}


}



class BangstmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pl0Parser.RULE_bangstmt;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.enterBangstmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.exitBangstmt(this);
		}
	}


}



class BeginstmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pl0Parser.RULE_beginstmt;
    }

	BEGIN() {
	    return this.getToken(pl0Parser.BEGIN, 0);
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

	END() {
	    return this.getToken(pl0Parser.END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.enterBeginstmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.exitBeginstmt(this);
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
        this.ruleIndex = pl0Parser.RULE_ifstmt;
    }

	IF() {
	    return this.getToken(pl0Parser.IF, 0);
	};

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	THEN() {
	    return this.getToken(pl0Parser.THEN, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.enterIfstmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.exitIfstmt(this);
		}
	}


}



class WhilestmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pl0Parser.RULE_whilestmt;
    }

	WHILE() {
	    return this.getToken(pl0Parser.WHILE, 0);
	};

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	DO() {
	    return this.getToken(pl0Parser.DO, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.enterWhilestmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.exitWhilestmt(this);
		}
	}


}



class ConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pl0Parser.RULE_condition;
    }

	ODD() {
	    return this.getToken(pl0Parser.ODD, 0);
	};

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

	enterRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.enterCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.exitCondition(this);
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
        this.ruleIndex = pl0Parser.RULE_expression;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.exitExpression(this);
		}
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pl0Parser.RULE_term;
    }

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.exitTerm(this);
		}
	}


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pl0Parser.RULE_factor;
    }

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.exitFactor(this);
		}
	}


}



class IdentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pl0Parser.RULE_ident;
    }

	STRING() {
	    return this.getToken(pl0Parser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.enterIdent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.exitIdent(this);
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
        this.ruleIndex = pl0Parser.RULE_number;
    }

	NUMBER() {
	    return this.getToken(pl0Parser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pl0Listener ) {
	        listener.exitNumber(this);
		}
	}


}




pl0Parser.ProgramContext = ProgramContext; 
pl0Parser.BlockContext = BlockContext; 
pl0Parser.ConstsContext = ConstsContext; 
pl0Parser.Vars_Context = Vars_Context; 
pl0Parser.ProcedureContext = ProcedureContext; 
pl0Parser.StatementContext = StatementContext; 
pl0Parser.AssignstmtContext = AssignstmtContext; 
pl0Parser.CallstmtContext = CallstmtContext; 
pl0Parser.WritestmtContext = WritestmtContext; 
pl0Parser.QstmtContext = QstmtContext; 
pl0Parser.BangstmtContext = BangstmtContext; 
pl0Parser.BeginstmtContext = BeginstmtContext; 
pl0Parser.IfstmtContext = IfstmtContext; 
pl0Parser.WhilestmtContext = WhilestmtContext; 
pl0Parser.ConditionContext = ConditionContext; 
pl0Parser.ExpressionContext = ExpressionContext; 
pl0Parser.TermContext = TermContext; 
pl0Parser.FactorContext = FactorContext; 
pl0Parser.IdentContext = IdentContext; 
pl0Parser.NumberContext = NumberContext; 
