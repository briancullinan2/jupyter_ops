// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/esolang/whenever/whenever.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import wheneverListener from './wheneverListener.js';
const serializedATN = [4,1,20,182,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,1,0,5,0,46,8,0,10,0,12,0,49,9,0,1,0,3,0,52,8,0,1,0,1,0,
1,1,1,1,5,1,58,8,1,10,1,12,1,61,9,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,3,2,70,8,
2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,
7,1,7,1,7,1,7,1,8,1,8,1,8,5,8,96,8,8,10,8,12,8,99,9,8,1,9,1,9,1,9,5,9,104,
8,9,10,9,12,9,107,9,9,1,10,3,10,110,8,10,1,10,1,10,1,10,3,10,115,8,10,1,
11,1,11,1,11,5,11,120,8,11,10,11,12,11,123,9,11,1,12,1,12,1,12,1,12,1,12,
1,13,1,13,1,13,1,13,1,14,1,14,1,14,5,14,137,8,14,10,14,12,14,140,9,14,1,
15,3,15,143,8,15,1,15,1,15,1,16,1,16,1,16,5,16,150,8,16,10,16,12,16,153,
9,16,1,17,1,17,1,17,5,17,158,8,17,10,17,12,17,161,9,17,1,18,1,18,1,18,3,
18,166,8,18,1,19,1,19,3,19,170,8,19,1,20,1,20,1,20,1,20,1,20,1,21,1,21,1,
21,1,21,1,21,1,21,0,0,22,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,
36,38,40,42,0,0,178,0,47,1,0,0,0,2,55,1,0,0,0,4,69,1,0,0,0,6,71,1,0,0,0,
8,76,1,0,0,0,10,81,1,0,0,0,12,86,1,0,0,0,14,88,1,0,0,0,16,92,1,0,0,0,18,
100,1,0,0,0,20,109,1,0,0,0,22,116,1,0,0,0,24,124,1,0,0,0,26,129,1,0,0,0,
28,133,1,0,0,0,30,142,1,0,0,0,32,146,1,0,0,0,34,154,1,0,0,0,36,165,1,0,0,
0,38,169,1,0,0,0,40,171,1,0,0,0,42,176,1,0,0,0,44,46,3,2,1,0,45,44,1,0,0,
0,46,49,1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,
50,52,5,19,0,0,51,50,1,0,0,0,51,52,1,0,0,0,52,53,1,0,0,0,53,54,5,0,0,1,54,
1,1,0,0,0,55,59,3,12,6,0,56,58,3,4,2,0,57,56,1,0,0,0,58,61,1,0,0,0,59,57,
1,0,0,0,59,60,1,0,0,0,60,62,1,0,0,0,61,59,1,0,0,0,62,63,3,18,9,0,63,64,5,
1,0,0,64,65,5,19,0,0,65,3,1,0,0,0,66,70,3,8,4,0,67,70,3,6,3,0,68,70,3,10,
5,0,69,66,1,0,0,0,69,67,1,0,0,0,69,68,1,0,0,0,70,5,1,0,0,0,71,72,5,2,0,0,
72,73,5,3,0,0,73,74,3,28,14,0,74,75,5,4,0,0,75,7,1,0,0,0,76,77,5,5,0,0,77,
78,5,3,0,0,78,79,3,28,14,0,79,80,5,4,0,0,80,9,1,0,0,0,81,82,5,6,0,0,82,83,
5,3,0,0,83,84,3,28,14,0,84,85,5,4,0,0,85,11,1,0,0,0,86,87,3,30,15,0,87,13,
1,0,0,0,88,89,3,16,8,0,89,90,5,7,0,0,90,91,3,16,8,0,91,15,1,0,0,0,92,97,
3,30,15,0,93,94,5,8,0,0,94,96,3,30,15,0,95,93,1,0,0,0,96,99,1,0,0,0,97,95,
1,0,0,0,97,98,1,0,0,0,98,17,1,0,0,0,99,97,1,0,0,0,100,105,3,20,10,0,101,
102,5,8,0,0,102,104,3,20,10,0,103,101,1,0,0,0,104,107,1,0,0,0,105,103,1,
0,0,0,105,106,1,0,0,0,106,19,1,0,0,0,107,105,1,0,0,0,108,110,3,14,7,0,109,
108,1,0,0,0,109,110,1,0,0,0,110,114,1,0,0,0,111,115,3,24,12,0,112,115,3,
26,13,0,113,115,3,22,11,0,114,111,1,0,0,0,114,112,1,0,0,0,114,113,1,0,0,
0,114,115,1,0,0,0,115,21,1,0,0,0,116,121,3,30,15,0,117,118,5,8,0,0,118,120,
3,30,15,0,119,117,1,0,0,0,120,123,1,0,0,0,121,119,1,0,0,0,121,122,1,0,0,
0,122,23,1,0,0,0,123,121,1,0,0,0,124,125,5,9,0,0,125,126,5,3,0,0,126,127,
3,30,15,0,127,128,5,4,0,0,128,25,1,0,0,0,129,130,5,10,0,0,130,131,5,3,0,
0,131,132,5,4,0,0,132,27,1,0,0,0,133,138,3,30,15,0,134,135,5,13,0,0,135,
137,3,30,15,0,136,134,1,0,0,0,137,140,1,0,0,0,138,136,1,0,0,0,138,139,1,
0,0,0,139,29,1,0,0,0,140,138,1,0,0,0,141,143,5,14,0,0,142,141,1,0,0,0,142,
143,1,0,0,0,143,144,1,0,0,0,144,145,3,32,16,0,145,31,1,0,0,0,146,151,3,34,
17,0,147,148,5,15,0,0,148,150,3,34,17,0,149,147,1,0,0,0,150,153,1,0,0,0,
151,149,1,0,0,0,151,152,1,0,0,0,152,33,1,0,0,0,153,151,1,0,0,0,154,159,3,
36,18,0,155,156,5,16,0,0,156,158,3,36,18,0,157,155,1,0,0,0,158,161,1,0,0,
0,159,157,1,0,0,0,159,160,1,0,0,0,160,35,1,0,0,0,161,159,1,0,0,0,162,166,
5,18,0,0,163,166,3,38,19,0,164,166,5,17,0,0,165,162,1,0,0,0,165,163,1,0,
0,0,165,164,1,0,0,0,166,37,1,0,0,0,167,170,3,40,20,0,168,170,3,42,21,0,169,
167,1,0,0,0,169,168,1,0,0,0,170,39,1,0,0,0,171,172,5,11,0,0,172,173,5,3,
0,0,173,174,3,30,15,0,174,175,5,4,0,0,175,41,1,0,0,0,176,177,5,12,0,0,177,
178,5,3,0,0,178,179,3,30,15,0,179,180,5,4,0,0,180,43,1,0,0,0,15,47,51,59,
69,97,105,109,114,121,138,142,151,159,165,169];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class wheneverParser extends antlr4.Parser {

    static grammarFileName = "whenever.g4";
    static literalNames = [ null, "';'", "'defer'", "'('", "')'", "'again'", 
                            "'forget'", "'#'", "','", "'print'", "'read'", 
                            "'N'", "'U'", null, "'!'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "COMPARE", "NOT", 
                             "MULT_OP", "ADD_OP", "QUOTED_STRING", "NUMBER", 
                             "EOL", "WHITESPACE" ];
    static ruleNames = [ "program_", "line_", "when_", "defer_", "again_", 
                         "forget_", "linenumber_", "addremove_", "termlist_", 
                         "statement_list_", "statement_", "decl_statement_", 
                         "print_statement_", "read_statement_", "expression_", 
                         "term_", "mult_term_", "add_term_", "value_", "func_", 
                         "func_n_", "func_u_" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = wheneverParser.ruleNames;
        this.literalNames = wheneverParser.literalNames;
        this.symbolicNames = wheneverParser.symbolicNames;
    }



	program_() {
	    let localctx = new Program_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, wheneverParser.RULE_program_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 415744) !== 0)) {
	            this.state = 44;
	            this.line_();
	            this.state = 49;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===19) {
	            this.state = 50;
	            this.match(wheneverParser.EOL);
	        }

	        this.state = 53;
	        this.match(wheneverParser.EOF);
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



	line_() {
	    let localctx = new Line_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, wheneverParser.RULE_line_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.linenumber_();
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 100) !== 0)) {
	            this.state = 56;
	            this.when_();
	            this.state = 61;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 62;
	        this.statement_list_();
	        this.state = 63;
	        this.match(wheneverParser.T__0);
	        this.state = 64;
	        this.match(wheneverParser.EOL);
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



	when_() {
	    let localctx = new When_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, wheneverParser.RULE_when_);
	    try {
	        this.state = 69;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 66;
	            this.again_();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 67;
	            this.defer_();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 68;
	            this.forget_();
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



	defer_() {
	    let localctx = new Defer_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, wheneverParser.RULE_defer_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(wheneverParser.T__1);
	        this.state = 72;
	        this.match(wheneverParser.T__2);
	        this.state = 73;
	        this.expression_();
	        this.state = 74;
	        this.match(wheneverParser.T__3);
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



	again_() {
	    let localctx = new Again_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, wheneverParser.RULE_again_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.match(wheneverParser.T__4);
	        this.state = 77;
	        this.match(wheneverParser.T__2);
	        this.state = 78;
	        this.expression_();
	        this.state = 79;
	        this.match(wheneverParser.T__3);
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



	forget_() {
	    let localctx = new Forget_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, wheneverParser.RULE_forget_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.match(wheneverParser.T__5);
	        this.state = 82;
	        this.match(wheneverParser.T__2);
	        this.state = 83;
	        this.expression_();
	        this.state = 84;
	        this.match(wheneverParser.T__3);
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



	linenumber_() {
	    let localctx = new Linenumber_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, wheneverParser.RULE_linenumber_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.term_();
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



	addremove_() {
	    let localctx = new Addremove_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, wheneverParser.RULE_addremove_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.termlist_();
	        this.state = 89;
	        this.match(wheneverParser.T__6);
	        this.state = 90;
	        this.termlist_();
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



	termlist_() {
	    let localctx = new Termlist_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, wheneverParser.RULE_termlist_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this.term_();
	        this.state = 97;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 93;
	                this.match(wheneverParser.T__7);
	                this.state = 94;
	                this.term_(); 
	            }
	            this.state = 99;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
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



	statement_list_() {
	    let localctx = new Statement_list_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, wheneverParser.RULE_statement_list_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this.statement_();
	        this.state = 105;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 101;
	            this.match(wheneverParser.T__7);
	            this.state = 102;
	            this.statement_();
	            this.state = 107;
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



	statement_() {
	    let localctx = new Statement_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, wheneverParser.RULE_statement_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        if(la_===1) {
	            this.state = 108;
	            this.addremove_();

	        }
	        this.state = 114;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case 9:
	        	this.state = 111;
	        	this.print_statement_();
	        	break;
	        case 10:
	        	this.state = 112;
	        	this.read_statement_();
	        	break;
	        case 11:
	        case 12:
	        case 14:
	        case 17:
	        case 18:
	        	this.state = 113;
	        	this.decl_statement_();
	        	break;
	        case 1:
	        case 8:
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



	decl_statement_() {
	    let localctx = new Decl_statement_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, wheneverParser.RULE_decl_statement_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        this.term_();
	        this.state = 121;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 117;
	                this.match(wheneverParser.T__7);
	                this.state = 118;
	                this.term_(); 
	            }
	            this.state = 123;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
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



	print_statement_() {
	    let localctx = new Print_statement_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, wheneverParser.RULE_print_statement_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124;
	        this.match(wheneverParser.T__8);
	        this.state = 125;
	        this.match(wheneverParser.T__2);
	        this.state = 126;
	        this.term_();
	        this.state = 127;
	        this.match(wheneverParser.T__3);
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



	read_statement_() {
	    let localctx = new Read_statement_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, wheneverParser.RULE_read_statement_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this.match(wheneverParser.T__9);
	        this.state = 130;
	        this.match(wheneverParser.T__2);
	        this.state = 131;
	        this.match(wheneverParser.T__3);
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



	expression_() {
	    let localctx = new Expression_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, wheneverParser.RULE_expression_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 133;
	        this.term_();
	        this.state = 138;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===13) {
	            this.state = 134;
	            this.match(wheneverParser.COMPARE);
	            this.state = 135;
	            this.term_();
	            this.state = 140;
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



	term_() {
	    let localctx = new Term_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, wheneverParser.RULE_term_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 142;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14) {
	            this.state = 141;
	            this.match(wheneverParser.NOT);
	        }

	        this.state = 144;
	        this.mult_term_();
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



	mult_term_() {
	    let localctx = new Mult_term_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, wheneverParser.RULE_mult_term_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        this.add_term_();
	        this.state = 151;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===15) {
	            this.state = 147;
	            this.match(wheneverParser.MULT_OP);
	            this.state = 148;
	            this.add_term_();
	            this.state = 153;
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



	add_term_() {
	    let localctx = new Add_term_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, wheneverParser.RULE_add_term_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this.value_();
	        this.state = 159;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===16) {
	            this.state = 155;
	            this.match(wheneverParser.ADD_OP);
	            this.state = 156;
	            this.value_();
	            this.state = 161;
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



	value_() {
	    let localctx = new Value_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, wheneverParser.RULE_value_);
	    try {
	        this.state = 165;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 162;
	            this.match(wheneverParser.NUMBER);
	            break;
	        case 11:
	        case 12:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 163;
	            this.func_();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 164;
	            this.match(wheneverParser.QUOTED_STRING);
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



	func_() {
	    let localctx = new Func_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, wheneverParser.RULE_func_);
	    try {
	        this.state = 169;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 167;
	            this.func_n_();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 168;
	            this.func_u_();
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



	func_n_() {
	    let localctx = new Func_n_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, wheneverParser.RULE_func_n_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 171;
	        this.match(wheneverParser.T__10);
	        this.state = 172;
	        this.match(wheneverParser.T__2);
	        this.state = 173;
	        this.term_();
	        this.state = 174;
	        this.match(wheneverParser.T__3);
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



	func_u_() {
	    let localctx = new Func_u_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, wheneverParser.RULE_func_u_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 176;
	        this.match(wheneverParser.T__11);
	        this.state = 177;
	        this.match(wheneverParser.T__2);
	        this.state = 178;
	        this.term_();
	        this.state = 179;
	        this.match(wheneverParser.T__3);
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

wheneverParser.EOF = antlr4.Token.EOF;
wheneverParser.T__0 = 1;
wheneverParser.T__1 = 2;
wheneverParser.T__2 = 3;
wheneverParser.T__3 = 4;
wheneverParser.T__4 = 5;
wheneverParser.T__5 = 6;
wheneverParser.T__6 = 7;
wheneverParser.T__7 = 8;
wheneverParser.T__8 = 9;
wheneverParser.T__9 = 10;
wheneverParser.T__10 = 11;
wheneverParser.T__11 = 12;
wheneverParser.COMPARE = 13;
wheneverParser.NOT = 14;
wheneverParser.MULT_OP = 15;
wheneverParser.ADD_OP = 16;
wheneverParser.QUOTED_STRING = 17;
wheneverParser.NUMBER = 18;
wheneverParser.EOL = 19;
wheneverParser.WHITESPACE = 20;

wheneverParser.RULE_program_ = 0;
wheneverParser.RULE_line_ = 1;
wheneverParser.RULE_when_ = 2;
wheneverParser.RULE_defer_ = 3;
wheneverParser.RULE_again_ = 4;
wheneverParser.RULE_forget_ = 5;
wheneverParser.RULE_linenumber_ = 6;
wheneverParser.RULE_addremove_ = 7;
wheneverParser.RULE_termlist_ = 8;
wheneverParser.RULE_statement_list_ = 9;
wheneverParser.RULE_statement_ = 10;
wheneverParser.RULE_decl_statement_ = 11;
wheneverParser.RULE_print_statement_ = 12;
wheneverParser.RULE_read_statement_ = 13;
wheneverParser.RULE_expression_ = 14;
wheneverParser.RULE_term_ = 15;
wheneverParser.RULE_mult_term_ = 16;
wheneverParser.RULE_add_term_ = 17;
wheneverParser.RULE_value_ = 18;
wheneverParser.RULE_func_ = 19;
wheneverParser.RULE_func_n_ = 20;
wheneverParser.RULE_func_u_ = 21;

class Program_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wheneverParser.RULE_program_;
    }

	EOF() {
	    return this.getToken(wheneverParser.EOF, 0);
	};

	line_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Line_Context);
	    } else {
	        return this.getTypedRuleContext(Line_Context,i);
	    }
	};

	EOL() {
	    return this.getToken(wheneverParser.EOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.enterProgram_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.exitProgram_(this);
		}
	}


}



class Line_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wheneverParser.RULE_line_;
    }

	linenumber_() {
	    return this.getTypedRuleContext(Linenumber_Context,0);
	};

	statement_list_() {
	    return this.getTypedRuleContext(Statement_list_Context,0);
	};

	EOL() {
	    return this.getToken(wheneverParser.EOL, 0);
	};

	when_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(When_Context);
	    } else {
	        return this.getTypedRuleContext(When_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.enterLine_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.exitLine_(this);
		}
	}


}



class When_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wheneverParser.RULE_when_;
    }

	again_() {
	    return this.getTypedRuleContext(Again_Context,0);
	};

	defer_() {
	    return this.getTypedRuleContext(Defer_Context,0);
	};

	forget_() {
	    return this.getTypedRuleContext(Forget_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.enterWhen_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.exitWhen_(this);
		}
	}


}



class Defer_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wheneverParser.RULE_defer_;
    }

	expression_() {
	    return this.getTypedRuleContext(Expression_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.enterDefer_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.exitDefer_(this);
		}
	}


}



class Again_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wheneverParser.RULE_again_;
    }

	expression_() {
	    return this.getTypedRuleContext(Expression_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.enterAgain_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.exitAgain_(this);
		}
	}


}



class Forget_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wheneverParser.RULE_forget_;
    }

	expression_() {
	    return this.getTypedRuleContext(Expression_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.enterForget_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.exitForget_(this);
		}
	}


}



class Linenumber_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wheneverParser.RULE_linenumber_;
    }

	term_() {
	    return this.getTypedRuleContext(Term_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.enterLinenumber_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.exitLinenumber_(this);
		}
	}


}



class Addremove_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wheneverParser.RULE_addremove_;
    }

	termlist_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Termlist_Context);
	    } else {
	        return this.getTypedRuleContext(Termlist_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.enterAddremove_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.exitAddremove_(this);
		}
	}


}



class Termlist_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wheneverParser.RULE_termlist_;
    }

	term_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Term_Context);
	    } else {
	        return this.getTypedRuleContext(Term_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.enterTermlist_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.exitTermlist_(this);
		}
	}


}



class Statement_list_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wheneverParser.RULE_statement_list_;
    }

	statement_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Statement_Context);
	    } else {
	        return this.getTypedRuleContext(Statement_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.enterStatement_list_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.exitStatement_list_(this);
		}
	}


}



class Statement_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wheneverParser.RULE_statement_;
    }

	addremove_() {
	    return this.getTypedRuleContext(Addremove_Context,0);
	};

	print_statement_() {
	    return this.getTypedRuleContext(Print_statement_Context,0);
	};

	read_statement_() {
	    return this.getTypedRuleContext(Read_statement_Context,0);
	};

	decl_statement_() {
	    return this.getTypedRuleContext(Decl_statement_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.enterStatement_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.exitStatement_(this);
		}
	}


}



class Decl_statement_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wheneverParser.RULE_decl_statement_;
    }

	term_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Term_Context);
	    } else {
	        return this.getTypedRuleContext(Term_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.enterDecl_statement_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.exitDecl_statement_(this);
		}
	}


}



class Print_statement_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wheneverParser.RULE_print_statement_;
    }

	term_() {
	    return this.getTypedRuleContext(Term_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.enterPrint_statement_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.exitPrint_statement_(this);
		}
	}


}



class Read_statement_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wheneverParser.RULE_read_statement_;
    }


	enterRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.enterRead_statement_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.exitRead_statement_(this);
		}
	}


}



class Expression_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wheneverParser.RULE_expression_;
    }

	term_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Term_Context);
	    } else {
	        return this.getTypedRuleContext(Term_Context,i);
	    }
	};

	COMPARE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wheneverParser.COMPARE);
	    } else {
	        return this.getToken(wheneverParser.COMPARE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.enterExpression_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.exitExpression_(this);
		}
	}


}



class Term_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wheneverParser.RULE_term_;
    }

	mult_term_() {
	    return this.getTypedRuleContext(Mult_term_Context,0);
	};

	NOT() {
	    return this.getToken(wheneverParser.NOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.enterTerm_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.exitTerm_(this);
		}
	}


}



class Mult_term_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wheneverParser.RULE_mult_term_;
    }

	add_term_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Add_term_Context);
	    } else {
	        return this.getTypedRuleContext(Add_term_Context,i);
	    }
	};

	MULT_OP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wheneverParser.MULT_OP);
	    } else {
	        return this.getToken(wheneverParser.MULT_OP, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.enterMult_term_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.exitMult_term_(this);
		}
	}


}



class Add_term_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wheneverParser.RULE_add_term_;
    }

	value_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Value_Context);
	    } else {
	        return this.getTypedRuleContext(Value_Context,i);
	    }
	};

	ADD_OP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wheneverParser.ADD_OP);
	    } else {
	        return this.getToken(wheneverParser.ADD_OP, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.enterAdd_term_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.exitAdd_term_(this);
		}
	}


}



class Value_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wheneverParser.RULE_value_;
    }

	NUMBER() {
	    return this.getToken(wheneverParser.NUMBER, 0);
	};

	func_() {
	    return this.getTypedRuleContext(Func_Context,0);
	};

	QUOTED_STRING() {
	    return this.getToken(wheneverParser.QUOTED_STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.enterValue_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.exitValue_(this);
		}
	}


}



class Func_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wheneverParser.RULE_func_;
    }

	func_n_() {
	    return this.getTypedRuleContext(Func_n_Context,0);
	};

	func_u_() {
	    return this.getTypedRuleContext(Func_u_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.enterFunc_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.exitFunc_(this);
		}
	}


}



class Func_n_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wheneverParser.RULE_func_n_;
    }

	term_() {
	    return this.getTypedRuleContext(Term_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.enterFunc_n_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.exitFunc_n_(this);
		}
	}


}



class Func_u_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wheneverParser.RULE_func_u_;
    }

	term_() {
	    return this.getTypedRuleContext(Term_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.enterFunc_u_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wheneverListener ) {
	        listener.exitFunc_u_(this);
		}
	}


}




wheneverParser.Program_Context = Program_Context; 
wheneverParser.Line_Context = Line_Context; 
wheneverParser.When_Context = When_Context; 
wheneverParser.Defer_Context = Defer_Context; 
wheneverParser.Again_Context = Again_Context; 
wheneverParser.Forget_Context = Forget_Context; 
wheneverParser.Linenumber_Context = Linenumber_Context; 
wheneverParser.Addremove_Context = Addremove_Context; 
wheneverParser.Termlist_Context = Termlist_Context; 
wheneverParser.Statement_list_Context = Statement_list_Context; 
wheneverParser.Statement_Context = Statement_Context; 
wheneverParser.Decl_statement_Context = Decl_statement_Context; 
wheneverParser.Print_statement_Context = Print_statement_Context; 
wheneverParser.Read_statement_Context = Read_statement_Context; 
wheneverParser.Expression_Context = Expression_Context; 
wheneverParser.Term_Context = Term_Context; 
wheneverParser.Mult_term_Context = Mult_term_Context; 
wheneverParser.Add_term_Context = Add_term_Context; 
wheneverParser.Value_Context = Value_Context; 
wheneverParser.Func_Context = Func_Context; 
wheneverParser.Func_n_Context = Func_n_Context; 
wheneverParser.Func_u_Context = Func_u_Context; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
