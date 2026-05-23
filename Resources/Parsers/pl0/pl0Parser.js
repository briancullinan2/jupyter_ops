// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/pl0/pl0.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import pl0Listener from './pl0Listener.js';
const serializedATN = [4,1,33,178,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,1,
0,1,0,1,0,1,0,1,1,3,1,46,8,1,1,1,3,1,49,8,1,1,1,5,1,52,8,1,10,1,12,1,55,
9,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,68,8,2,10,2,12,2,71,
9,2,1,2,1,2,1,3,1,3,1,3,1,3,5,3,79,8,3,10,3,12,3,82,9,3,1,3,1,3,1,4,1,4,
1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,100,8,5,1,6,1,6,1,6,
1,6,1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,1,11,1,11,1,11,1,
11,5,11,122,8,11,10,11,12,11,125,9,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,
1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,3,14,145,8,14,1,15,
3,15,148,8,15,1,15,1,15,1,15,5,15,153,8,15,10,15,12,15,156,9,15,1,16,1,16,
1,16,5,16,161,8,16,10,16,12,16,164,9,16,1,17,1,17,1,17,1,17,1,17,1,17,3,
17,172,8,17,1,18,1,18,1,19,1,19,1,19,0,0,20,0,2,4,6,8,10,12,14,16,18,20,
22,24,26,28,30,32,34,36,38,0,3,2,0,2,2,8,12,1,0,13,14,1,0,15,16,177,0,40,
1,0,0,0,2,45,1,0,0,0,4,58,1,0,0,0,6,74,1,0,0,0,8,85,1,0,0,0,10,99,1,0,0,
0,12,101,1,0,0,0,14,105,1,0,0,0,16,108,1,0,0,0,18,111,1,0,0,0,20,114,1,0,
0,0,22,117,1,0,0,0,24,128,1,0,0,0,26,133,1,0,0,0,28,144,1,0,0,0,30,147,1,
0,0,0,32,157,1,0,0,0,34,171,1,0,0,0,36,173,1,0,0,0,38,175,1,0,0,0,40,41,
3,2,1,0,41,42,5,1,0,0,42,43,5,0,0,1,43,1,1,0,0,0,44,46,3,4,2,0,45,44,1,0,
0,0,45,46,1,0,0,0,46,48,1,0,0,0,47,49,3,6,3,0,48,47,1,0,0,0,48,49,1,0,0,
0,49,53,1,0,0,0,50,52,3,8,4,0,51,50,1,0,0,0,52,55,1,0,0,0,53,51,1,0,0,0,
53,54,1,0,0,0,54,56,1,0,0,0,55,53,1,0,0,0,56,57,3,10,5,0,57,3,1,0,0,0,58,
59,5,28,0,0,59,60,3,36,18,0,60,61,5,2,0,0,61,69,3,38,19,0,62,63,5,3,0,0,
63,64,3,36,18,0,64,65,5,2,0,0,65,66,3,38,19,0,66,68,1,0,0,0,67,62,1,0,0,
0,68,71,1,0,0,0,69,67,1,0,0,0,69,70,1,0,0,0,70,72,1,0,0,0,71,69,1,0,0,0,
72,73,5,4,0,0,73,5,1,0,0,0,74,75,5,29,0,0,75,80,3,36,18,0,76,77,5,3,0,0,
77,79,3,36,18,0,78,76,1,0,0,0,79,82,1,0,0,0,80,78,1,0,0,0,80,81,1,0,0,0,
81,83,1,0,0,0,82,80,1,0,0,0,83,84,5,4,0,0,84,7,1,0,0,0,85,86,5,30,0,0,86,
87,3,36,18,0,87,88,5,4,0,0,88,89,3,2,1,0,89,90,5,4,0,0,90,9,1,0,0,0,91,100,
3,12,6,0,92,100,3,14,7,0,93,100,3,16,8,0,94,100,3,18,9,0,95,100,3,20,10,
0,96,100,3,22,11,0,97,100,3,24,12,0,98,100,3,26,13,0,99,91,1,0,0,0,99,92,
1,0,0,0,99,93,1,0,0,0,99,94,1,0,0,0,99,95,1,0,0,0,99,96,1,0,0,0,99,97,1,
0,0,0,99,98,1,0,0,0,99,100,1,0,0,0,100,11,1,0,0,0,101,102,3,36,18,0,102,
103,5,5,0,0,103,104,3,30,15,0,104,13,1,0,0,0,105,106,5,27,0,0,106,107,3,
36,18,0,107,15,1,0,0,0,108,109,5,19,0,0,109,110,3,36,18,0,110,17,1,0,0,0,
111,112,5,6,0,0,112,113,3,36,18,0,113,19,1,0,0,0,114,115,5,7,0,0,115,116,
3,30,15,0,116,21,1,0,0,0,117,118,5,25,0,0,118,123,3,10,5,0,119,120,5,4,0,
0,120,122,3,10,5,0,121,119,1,0,0,0,122,125,1,0,0,0,123,121,1,0,0,0,123,124,
1,0,0,0,124,126,1,0,0,0,125,123,1,0,0,0,126,127,5,26,0,0,127,23,1,0,0,0,
128,129,5,22,0,0,129,130,3,28,14,0,130,131,5,23,0,0,131,132,3,10,5,0,132,
25,1,0,0,0,133,134,5,20,0,0,134,135,3,28,14,0,135,136,5,21,0,0,136,137,3,
10,5,0,137,27,1,0,0,0,138,139,5,24,0,0,139,145,3,30,15,0,140,141,3,30,15,
0,141,142,7,0,0,0,142,143,3,30,15,0,143,145,1,0,0,0,144,138,1,0,0,0,144,
140,1,0,0,0,145,29,1,0,0,0,146,148,7,1,0,0,147,146,1,0,0,0,147,148,1,0,0,
0,148,149,1,0,0,0,149,154,3,32,16,0,150,151,7,1,0,0,151,153,3,32,16,0,152,
150,1,0,0,0,153,156,1,0,0,0,154,152,1,0,0,0,154,155,1,0,0,0,155,31,1,0,0,
0,156,154,1,0,0,0,157,162,3,34,17,0,158,159,7,2,0,0,159,161,3,34,17,0,160,
158,1,0,0,0,161,164,1,0,0,0,162,160,1,0,0,0,162,163,1,0,0,0,163,33,1,0,0,
0,164,162,1,0,0,0,165,172,3,36,18,0,166,172,3,38,19,0,167,168,5,17,0,0,168,
169,3,30,15,0,169,170,5,18,0,0,170,172,1,0,0,0,171,165,1,0,0,0,171,166,1,
0,0,0,171,167,1,0,0,0,172,35,1,0,0,0,173,174,5,31,0,0,174,37,1,0,0,0,175,
176,5,32,0,0,176,39,1,0,0,0,12,45,48,53,69,80,99,123,144,147,154,162,171];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

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



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, pl0Parser.RULE_program);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.block();
	        this.state = 41;
	        this.match(pl0Parser.T__0);
	        this.state = 42;
	        this.match(pl0Parser.EOF);
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===28) {
	            this.state = 44;
	            this.consts();
	        }

	        this.state = 48;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===29) {
	            this.state = 47;
	            this.vars_();
	        }

	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===30) {
	            this.state = 50;
	            this.procedure();
	            this.state = 55;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 56;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.match(pl0Parser.CONST);
	        this.state = 59;
	        this.ident();
	        this.state = 60;
	        this.match(pl0Parser.T__1);
	        this.state = 61;
	        this.number();
	        this.state = 69;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 62;
	            this.match(pl0Parser.T__2);
	            this.state = 63;
	            this.ident();
	            this.state = 64;
	            this.match(pl0Parser.T__1);
	            this.state = 65;
	            this.number();
	            this.state = 71;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 72;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.match(pl0Parser.VAR);
	        this.state = 75;
	        this.ident();
	        this.state = 80;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 76;
	            this.match(pl0Parser.T__2);
	            this.state = 77;
	            this.ident();
	            this.state = 82;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 83;
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
	        this.state = 85;
	        this.match(pl0Parser.PROCEDURE);
	        this.state = 86;
	        this.ident();
	        this.state = 87;
	        this.match(pl0Parser.T__3);
	        this.state = 88;
	        this.block();
	        this.state = 89;
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
	        this.state = 99;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case 31:
	        	this.state = 91;
	        	this.assignstmt();
	        	break;
	        case 27:
	        	this.state = 92;
	        	this.callstmt();
	        	break;
	        case 19:
	        	this.state = 93;
	        	this.writestmt();
	        	break;
	        case 6:
	        	this.state = 94;
	        	this.qstmt();
	        	break;
	        case 7:
	        	this.state = 95;
	        	this.bangstmt();
	        	break;
	        case 25:
	        	this.state = 96;
	        	this.beginstmt();
	        	break;
	        case 22:
	        	this.state = 97;
	        	this.ifstmt();
	        	break;
	        case 20:
	        	this.state = 98;
	        	this.whilestmt();
	        	break;
	        case 1:
	        case 4:
	        case 26:
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
	        this.state = 101;
	        this.ident();
	        this.state = 102;
	        this.match(pl0Parser.T__4);
	        this.state = 103;
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
	        this.state = 105;
	        this.match(pl0Parser.CALL);
	        this.state = 106;
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
	        this.state = 108;
	        this.match(pl0Parser.WRITE);
	        this.state = 109;
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
	        this.state = 111;
	        this.match(pl0Parser.T__5);
	        this.state = 112;
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
	        this.state = 114;
	        this.match(pl0Parser.T__6);
	        this.state = 115;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        this.match(pl0Parser.BEGIN);
	        this.state = 118;
	        this.statement();
	        this.state = 123;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 119;
	            this.match(pl0Parser.T__3);
	            this.state = 120;
	            this.statement();
	            this.state = 125;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 126;
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
	        this.state = 128;
	        this.match(pl0Parser.IF);
	        this.state = 129;
	        this.condition();
	        this.state = 130;
	        this.match(pl0Parser.THEN);
	        this.state = 131;
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
	        this.state = 133;
	        this.match(pl0Parser.WHILE);
	        this.state = 134;
	        this.condition();
	        this.state = 135;
	        this.match(pl0Parser.DO);
	        this.state = 136;
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
	    var _la = 0;
	    try {
	        this.state = 144;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 24:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 138;
	            this.match(pl0Parser.ODD);
	            this.state = 139;
	            this.expression();
	            break;
	        case 13:
	        case 14:
	        case 17:
	        case 31:
	        case 32:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 140;
	            this.expression();
	            this.state = 141;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 7940) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 142;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13 || _la===14) {
	            this.state = 146;
	            _la = this._input.LA(1);
	            if(!(_la===13 || _la===14)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 149;
	        this.term();
	        this.state = 154;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===13 || _la===14) {
	            this.state = 150;
	            _la = this._input.LA(1);
	            if(!(_la===13 || _la===14)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 151;
	            this.term();
	            this.state = 156;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this.factor();
	        this.state = 162;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===15 || _la===16) {
	            this.state = 158;
	            _la = this._input.LA(1);
	            if(!(_la===15 || _la===16)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 159;
	            this.factor();
	            this.state = 164;
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
	        this.state = 171;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 31:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 165;
	            this.ident();
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 166;
	            this.number();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 167;
	            this.match(pl0Parser.T__16);
	            this.state = 168;
	            this.expression();
	            this.state = 169;
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
	        this.state = 173;
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
	        this.state = 175;
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

	EOF() {
	    return this.getToken(pl0Parser.EOF, 0);
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

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
