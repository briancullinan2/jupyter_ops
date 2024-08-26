// Generated from Resources/Parsers/focal/focal.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import focalListener from './focalListener.js';
const serializedATN = [4,1,41,245,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,1,0,4,0,50,8,0,11,0,12,0,51,1,1,1,
1,1,1,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,
4,3,4,74,8,4,1,5,1,5,1,5,1,5,5,5,80,8,5,10,5,12,5,83,9,5,1,6,1,6,1,6,1,6,
1,6,5,6,90,8,6,10,6,12,6,93,9,6,1,7,1,7,1,7,1,7,3,7,99,8,7,1,8,1,8,1,8,1,
8,1,8,1,8,1,8,1,8,3,8,109,8,8,1,8,1,8,1,8,1,9,1,9,1,10,1,10,1,10,1,10,1,
10,1,10,3,10,122,8,10,1,11,1,11,3,11,126,8,11,1,12,1,12,1,12,1,12,1,12,1,
12,1,12,1,12,1,12,1,12,1,12,3,12,139,8,12,1,13,1,13,1,13,1,13,5,13,145,8,
13,10,13,12,13,148,9,13,1,13,1,13,3,13,152,8,13,1,14,1,14,4,14,156,8,14,
11,14,12,14,157,1,14,4,14,161,8,14,11,14,12,14,162,1,14,1,14,1,14,1,14,1,
14,3,14,170,8,14,1,15,1,15,1,16,1,16,1,16,3,16,177,8,16,1,17,1,17,1,18,1,
18,1,18,5,18,184,8,18,10,18,12,18,187,9,18,1,19,1,19,1,19,5,19,192,8,19,
10,19,12,19,195,9,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,
20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,3,20,
221,8,20,1,21,1,21,1,21,3,21,226,8,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,
1,22,1,22,1,22,3,22,238,8,22,1,23,3,23,241,8,23,1,23,1,23,1,23,0,0,24,0,
2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,0,6,1,0,
2,3,1,0,5,6,1,0,8,9,1,0,13,14,1,0,15,16,1,0,18,19,262,0,49,1,0,0,0,2,53,
1,0,0,0,4,56,1,0,0,0,6,58,1,0,0,0,8,73,1,0,0,0,10,75,1,0,0,0,12,84,1,0,0,
0,14,94,1,0,0,0,16,100,1,0,0,0,18,113,1,0,0,0,20,115,1,0,0,0,22,123,1,0,
0,0,24,127,1,0,0,0,26,140,1,0,0,0,28,169,1,0,0,0,30,171,1,0,0,0,32,173,1,
0,0,0,34,178,1,0,0,0,36,180,1,0,0,0,38,188,1,0,0,0,40,220,1,0,0,0,42,222,
1,0,0,0,44,237,1,0,0,0,46,240,1,0,0,0,48,50,3,2,1,0,49,48,1,0,0,0,50,51,
1,0,0,0,51,49,1,0,0,0,51,52,1,0,0,0,52,1,1,0,0,0,53,54,3,6,3,0,54,55,3,8,
4,0,55,3,1,0,0,0,56,57,5,35,0,0,57,5,1,0,0,0,58,59,3,4,2,0,59,60,5,1,0,0,
60,61,5,35,0,0,61,7,1,0,0,0,62,74,3,10,5,0,63,74,3,14,7,0,64,74,3,16,8,0,
65,74,3,20,10,0,66,74,3,18,9,0,67,74,3,22,11,0,68,74,3,24,12,0,69,74,3,26,
13,0,70,74,3,30,15,0,71,74,3,32,16,0,72,74,3,34,17,0,73,62,1,0,0,0,73,63,
1,0,0,0,73,64,1,0,0,0,73,65,1,0,0,0,73,66,1,0,0,0,73,67,1,0,0,0,73,68,1,
0,0,0,73,69,1,0,0,0,73,70,1,0,0,0,73,71,1,0,0,0,73,72,1,0,0,0,74,9,1,0,0,
0,75,76,7,0,0,0,76,81,3,12,6,0,77,78,5,4,0,0,78,80,3,12,6,0,79,77,1,0,0,
0,80,83,1,0,0,0,81,79,1,0,0,0,81,82,1,0,0,0,82,11,1,0,0,0,83,81,1,0,0,0,
84,85,5,39,0,0,85,86,5,4,0,0,86,91,5,34,0,0,87,88,5,4,0,0,88,90,5,34,0,0,
89,87,1,0,0,0,90,93,1,0,0,0,91,89,1,0,0,0,91,92,1,0,0,0,92,13,1,0,0,0,93,
91,1,0,0,0,94,98,7,1,0,0,95,99,5,7,0,0,96,99,3,4,2,0,97,99,3,6,3,0,98,95,
1,0,0,0,98,96,1,0,0,0,98,97,1,0,0,0,99,15,1,0,0,0,100,101,7,2,0,0,101,102,
5,34,0,0,102,103,5,10,0,0,103,104,3,36,18,0,104,105,5,4,0,0,105,108,3,36,
18,0,106,107,5,4,0,0,107,109,3,36,18,0,108,106,1,0,0,0,108,109,1,0,0,0,109,
110,1,0,0,0,110,111,5,11,0,0,111,112,3,8,4,0,112,17,1,0,0,0,113,114,5,12,
0,0,114,19,1,0,0,0,115,116,7,3,0,0,116,117,5,34,0,0,117,118,5,10,0,0,118,
121,3,36,18,0,119,120,5,11,0,0,120,122,3,8,4,0,121,119,1,0,0,0,121,122,1,
0,0,0,122,21,1,0,0,0,123,125,7,4,0,0,124,126,3,6,3,0,125,124,1,0,0,0,125,
126,1,0,0,0,126,23,1,0,0,0,127,128,5,17,0,0,128,129,3,36,18,0,129,130,3,
6,3,0,130,131,5,4,0,0,131,132,3,6,3,0,132,133,1,0,0,0,133,134,5,4,0,0,134,
135,3,6,3,0,135,138,1,0,0,0,136,137,5,11,0,0,137,139,3,8,4,0,138,136,1,0,
0,0,138,139,1,0,0,0,139,25,1,0,0,0,140,141,7,5,0,0,141,146,3,28,14,0,142,
143,5,4,0,0,143,145,3,28,14,0,144,142,1,0,0,0,145,148,1,0,0,0,146,144,1,
0,0,0,146,147,1,0,0,0,147,151,1,0,0,0,148,146,1,0,0,0,149,150,5,11,0,0,150,
152,3,8,4,0,151,149,1,0,0,0,151,152,1,0,0,0,152,27,1,0,0,0,153,170,3,36,
18,0,154,156,5,20,0,0,155,154,1,0,0,0,156,157,1,0,0,0,157,155,1,0,0,0,157,
158,1,0,0,0,158,170,1,0,0,0,159,161,5,21,0,0,160,159,1,0,0,0,161,162,1,0,
0,0,162,160,1,0,0,0,162,163,1,0,0,0,163,170,1,0,0,0,164,170,5,39,0,0,165,
166,5,22,0,0,166,167,5,35,0,0,167,168,5,1,0,0,168,170,5,35,0,0,169,153,1,
0,0,0,169,155,1,0,0,0,169,160,1,0,0,0,169,164,1,0,0,0,169,165,1,0,0,0,170,
29,1,0,0,0,171,172,5,23,0,0,172,31,1,0,0,0,173,176,5,24,0,0,174,177,3,4,
2,0,175,177,3,6,3,0,176,174,1,0,0,0,176,175,1,0,0,0,176,177,1,0,0,0,177,
33,1,0,0,0,178,179,5,40,0,0,179,35,1,0,0,0,180,185,3,38,19,0,181,182,5,32,
0,0,182,184,3,38,19,0,183,181,1,0,0,0,184,187,1,0,0,0,185,183,1,0,0,0,185,
186,1,0,0,0,186,37,1,0,0,0,187,185,1,0,0,0,188,193,3,40,20,0,189,190,5,33,
0,0,190,192,3,40,20,0,191,189,1,0,0,0,192,195,1,0,0,0,193,191,1,0,0,0,193,
194,1,0,0,0,194,39,1,0,0,0,195,193,1,0,0,0,196,197,5,25,0,0,197,198,3,36,
18,0,198,199,5,26,0,0,199,221,1,0,0,0,200,201,5,27,0,0,201,202,3,36,18,0,
202,203,5,28,0,0,203,221,1,0,0,0,204,205,5,29,0,0,205,206,3,36,18,0,206,
207,5,30,0,0,207,221,1,0,0,0,208,221,3,42,21,0,209,221,5,34,0,0,210,211,
5,34,0,0,211,212,5,25,0,0,212,213,3,36,18,0,213,214,5,26,0,0,214,221,1,0,
0,0,215,216,5,38,0,0,216,217,5,25,0,0,217,218,3,36,18,0,218,219,5,26,0,0,
219,221,1,0,0,0,220,196,1,0,0,0,220,200,1,0,0,0,220,204,1,0,0,0,220,208,
1,0,0,0,220,209,1,0,0,0,220,210,1,0,0,0,220,215,1,0,0,0,221,41,1,0,0,0,222,
225,3,44,22,0,223,224,5,31,0,0,224,226,3,46,23,0,225,223,1,0,0,0,225,226,
1,0,0,0,226,43,1,0,0,0,227,238,3,46,23,0,228,229,3,46,23,0,229,230,5,1,0,
0,230,238,1,0,0,0,231,232,5,1,0,0,232,238,3,46,23,0,233,234,3,46,23,0,234,
235,5,1,0,0,235,236,3,46,23,0,236,238,1,0,0,0,237,227,1,0,0,0,237,228,1,
0,0,0,237,231,1,0,0,0,237,233,1,0,0,0,238,45,1,0,0,0,239,241,5,32,0,0,240,
239,1,0,0,0,240,241,1,0,0,0,241,242,1,0,0,0,242,243,5,35,0,0,243,47,1,0,
0,0,21,51,73,81,91,98,108,121,125,138,146,151,157,162,169,176,185,193,220,
225,237,240];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class focalParser extends antlr4.Parser {

    static grammarFileName = "focal.g4";
    static literalNames = [ null, "'.'", "'ASK'", "'A'", "','", "'DO'", 
                            "'D'", "'all'", "'FOR'", "'F'", "'='", "';'", 
                            "'QUIT'", "'SET'", "'S'", "'GOTO'", "'G'", "'IF'", 
                            "'TYPE'", "'T'", "'!'", "'#'", "'%'", "'RETURN'", 
                            "'WRITE'", "'('", "')'", "'['", "']'", "'<'", 
                            "'>'", "'e'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "PLUSMIN", "MULOP", "VARIABLE", "INTEGER", 
                             "ALPHA", "DIGIT", "BUILTIN", "STRING_LITERAL", 
                             "COMMENT", "WS" ];
    static ruleNames = [ "prog", "statement", "grpnum", "linenum", "command", 
                         "ask", "askpair", "do_", "for_", "quit", "set_", 
                         "goto_", "if_", "type_", "typeexpression", "return_", 
                         "write_", "comment", "expression", "primary", "term", 
                         "number", "mantissa", "signed_" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = focalParser.ruleNames;
        this.literalNames = focalParser.literalNames;
        this.symbolicNames = focalParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, focalParser.RULE_prog);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 48;
	            this.statement();
	            this.state = 51; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===focalParser.INTEGER);
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
	    this.enterRule(localctx, 2, focalParser.RULE_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.linenum();
	        this.state = 54;
	        this.command();
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



	grpnum() {
	    let localctx = new GrpnumContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, focalParser.RULE_grpnum);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.match(focalParser.INTEGER);
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



	linenum() {
	    let localctx = new LinenumContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, focalParser.RULE_linenum);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.grpnum();
	        this.state = 59;
	        this.match(focalParser.T__0);
	        this.state = 60;
	        this.match(focalParser.INTEGER);
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



	command() {
	    let localctx = new CommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, focalParser.RULE_command);
	    try {
	        this.state = 73;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case focalParser.T__1:
	        case focalParser.T__2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 62;
	            this.ask();
	            break;
	        case focalParser.T__4:
	        case focalParser.T__5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 63;
	            this.do_();
	            break;
	        case focalParser.T__7:
	        case focalParser.T__8:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 64;
	            this.for_();
	            break;
	        case focalParser.T__12:
	        case focalParser.T__13:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 65;
	            this.set_();
	            break;
	        case focalParser.T__11:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 66;
	            this.quit();
	            break;
	        case focalParser.T__14:
	        case focalParser.T__15:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 67;
	            this.goto_();
	            break;
	        case focalParser.T__16:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 68;
	            this.if_();
	            break;
	        case focalParser.T__17:
	        case focalParser.T__18:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 69;
	            this.type_();
	            break;
	        case focalParser.T__22:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 70;
	            this.return_();
	            break;
	        case focalParser.T__23:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 71;
	            this.write_();
	            break;
	        case focalParser.COMMENT:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 72;
	            this.comment();
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



	ask() {
	    let localctx = new AskContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, focalParser.RULE_ask);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        _la = this._input.LA(1);
	        if(!(_la===focalParser.T__1 || _la===focalParser.T__2)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 76;
	        this.askpair();
	        this.state = 81;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===focalParser.T__3) {
	            this.state = 77;
	            this.match(focalParser.T__3);
	            this.state = 78;
	            this.askpair();
	            this.state = 83;
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



	askpair() {
	    let localctx = new AskpairContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, focalParser.RULE_askpair);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.match(focalParser.STRING_LITERAL);
	        this.state = 85;
	        this.match(focalParser.T__3);
	        this.state = 86;
	        this.match(focalParser.VARIABLE);
	        this.state = 91;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 87;
	                this.match(focalParser.T__3);
	                this.state = 88;
	                this.match(focalParser.VARIABLE); 
	            }
	            this.state = 93;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
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



	do_() {
	    let localctx = new Do_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, focalParser.RULE_do_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        _la = this._input.LA(1);
	        if(!(_la===focalParser.T__4 || _la===focalParser.T__5)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 98;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 95;
	            this.match(focalParser.T__6);
	            break;

	        case 2:
	            this.state = 96;
	            this.grpnum();
	            break;

	        case 3:
	            this.state = 97;
	            this.linenum();
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



	for_() {
	    let localctx = new For_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, focalParser.RULE_for_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        _la = this._input.LA(1);
	        if(!(_la===focalParser.T__7 || _la===focalParser.T__8)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 101;
	        this.match(focalParser.VARIABLE);
	        this.state = 102;
	        this.match(focalParser.T__9);
	        this.state = 103;
	        this.expression();
	        this.state = 104;
	        this.match(focalParser.T__3);
	        this.state = 105;
	        this.expression();
	        this.state = 108;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===focalParser.T__3) {
	            this.state = 106;
	            this.match(focalParser.T__3);
	            this.state = 107;
	            this.expression();
	        }

	        this.state = 110;
	        this.match(focalParser.T__10);
	        this.state = 111;
	        this.command();
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



	quit() {
	    let localctx = new QuitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, focalParser.RULE_quit);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        this.match(focalParser.T__11);
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



	set_() {
	    let localctx = new Set_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, focalParser.RULE_set_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        _la = this._input.LA(1);
	        if(!(_la===focalParser.T__12 || _la===focalParser.T__13)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 116;
	        this.match(focalParser.VARIABLE);
	        this.state = 117;
	        this.match(focalParser.T__9);
	        this.state = 118;
	        this.expression();
	        this.state = 121;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===focalParser.T__10) {
	            this.state = 119;
	            this.match(focalParser.T__10);
	            this.state = 120;
	            this.command();
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



	goto_() {
	    let localctx = new Goto_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, focalParser.RULE_goto_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        _la = this._input.LA(1);
	        if(!(_la===focalParser.T__14 || _la===focalParser.T__15)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 125;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        if(la_===1) {
	            this.state = 124;
	            this.linenum();

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



	if_() {
	    let localctx = new If_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, focalParser.RULE_if_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        this.match(focalParser.T__16);
	        this.state = 128;
	        this.expression();
	        this.state = 129;
	        this.linenum();

	        this.state = 130;
	        this.match(focalParser.T__3);
	        this.state = 131;
	        this.linenum();

	        this.state = 133;
	        this.match(focalParser.T__3);
	        this.state = 134;
	        this.linenum();
	        this.state = 138;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===focalParser.T__10) {
	            this.state = 136;
	            this.match(focalParser.T__10);
	            this.state = 137;
	            this.command();
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



	type_() {
	    let localctx = new Type_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, focalParser.RULE_type_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        _la = this._input.LA(1);
	        if(!(_la===focalParser.T__17 || _la===focalParser.T__18)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 141;
	        this.typeexpression();
	        this.state = 146;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===focalParser.T__3) {
	            this.state = 142;
	            this.match(focalParser.T__3);
	            this.state = 143;
	            this.typeexpression();
	            this.state = 148;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 151;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===focalParser.T__10) {
	            this.state = 149;
	            this.match(focalParser.T__10);
	            this.state = 150;
	            this.command();
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



	typeexpression() {
	    let localctx = new TypeexpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, focalParser.RULE_typeexpression);
	    var _la = 0; // Token type
	    try {
	        this.state = 169;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case focalParser.T__0:
	        case focalParser.T__24:
	        case focalParser.T__26:
	        case focalParser.T__28:
	        case focalParser.PLUSMIN:
	        case focalParser.VARIABLE:
	        case focalParser.INTEGER:
	        case focalParser.BUILTIN:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 153;
	            this.expression();
	            break;
	        case focalParser.T__19:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 155; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 154;
	                this.match(focalParser.T__19);
	                this.state = 157; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===focalParser.T__19);
	            break;
	        case focalParser.T__20:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 160; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 159;
	                this.match(focalParser.T__20);
	                this.state = 162; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===focalParser.T__20);
	            break;
	        case focalParser.STRING_LITERAL:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 164;
	            this.match(focalParser.STRING_LITERAL);
	            break;
	        case focalParser.T__21:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 165;
	            this.match(focalParser.T__21);
	            this.state = 166;
	            this.match(focalParser.INTEGER);
	            this.state = 167;
	            this.match(focalParser.T__0);
	            this.state = 168;
	            this.match(focalParser.INTEGER);
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



	return_() {
	    let localctx = new Return_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, focalParser.RULE_return_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 171;
	        this.match(focalParser.T__22);
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



	write_() {
	    let localctx = new Write_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, focalParser.RULE_write_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 173;
	        this.match(focalParser.T__23);
	        this.state = 176;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        if(la_===1) {
	            this.state = 174;
	            this.grpnum();

	        } else if(la_===2) {
	            this.state = 175;
	            this.linenum();

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



	comment() {
	    let localctx = new CommentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, focalParser.RULE_comment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        this.match(focalParser.COMMENT);
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
	    this.enterRule(localctx, 36, focalParser.RULE_expression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 180;
	        this.primary();
	        this.state = 185;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===focalParser.PLUSMIN) {
	            this.state = 181;
	            this.match(focalParser.PLUSMIN);
	            this.state = 182;
	            this.primary();
	            this.state = 187;
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



	primary() {
	    let localctx = new PrimaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, focalParser.RULE_primary);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 188;
	        this.term();
	        this.state = 193;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===focalParser.MULOP) {
	            this.state = 189;
	            this.match(focalParser.MULOP);
	            this.state = 190;
	            this.term();
	            this.state = 195;
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
	    this.enterRule(localctx, 40, focalParser.RULE_term);
	    try {
	        this.state = 220;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 196;
	            this.match(focalParser.T__24);
	            this.state = 197;
	            this.expression();
	            this.state = 198;
	            this.match(focalParser.T__25);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 200;
	            this.match(focalParser.T__26);
	            this.state = 201;
	            this.expression();
	            this.state = 202;
	            this.match(focalParser.T__27);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 204;
	            this.match(focalParser.T__28);
	            this.state = 205;
	            this.expression();
	            this.state = 206;
	            this.match(focalParser.T__29);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 208;
	            this.number();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 209;
	            this.match(focalParser.VARIABLE);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 210;
	            this.match(focalParser.VARIABLE);
	            this.state = 211;
	            this.match(focalParser.T__24);
	            this.state = 212;
	            this.expression();
	            this.state = 213;
	            this.match(focalParser.T__25);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 215;
	            this.match(focalParser.BUILTIN);
	            this.state = 216;
	            this.match(focalParser.T__24);
	            this.state = 217;
	            this.expression();
	            this.state = 218;
	            this.match(focalParser.T__25);
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



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, focalParser.RULE_number);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 222;
	        this.mantissa();
	        this.state = 225;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===focalParser.T__30) {
	            this.state = 223;
	            this.match(focalParser.T__30);
	            this.state = 224;
	            this.signed_();
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



	mantissa() {
	    let localctx = new MantissaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, focalParser.RULE_mantissa);
	    try {
	        this.state = 237;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 227;
	            this.signed_();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 228;
	            this.signed_();
	            this.state = 229;
	            this.match(focalParser.T__0);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 231;
	            this.match(focalParser.T__0);
	            this.state = 232;
	            this.signed_();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 233;
	            this.signed_();
	            this.state = 234;
	            this.match(focalParser.T__0);
	            this.state = 235;
	            this.signed_();
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



	signed_() {
	    let localctx = new Signed_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, focalParser.RULE_signed_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 240;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===focalParser.PLUSMIN) {
	            this.state = 239;
	            this.match(focalParser.PLUSMIN);
	        }

	        this.state = 242;
	        this.match(focalParser.INTEGER);
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

focalParser.EOF = antlr4.Token.EOF;
focalParser.T__0 = 1;
focalParser.T__1 = 2;
focalParser.T__2 = 3;
focalParser.T__3 = 4;
focalParser.T__4 = 5;
focalParser.T__5 = 6;
focalParser.T__6 = 7;
focalParser.T__7 = 8;
focalParser.T__8 = 9;
focalParser.T__9 = 10;
focalParser.T__10 = 11;
focalParser.T__11 = 12;
focalParser.T__12 = 13;
focalParser.T__13 = 14;
focalParser.T__14 = 15;
focalParser.T__15 = 16;
focalParser.T__16 = 17;
focalParser.T__17 = 18;
focalParser.T__18 = 19;
focalParser.T__19 = 20;
focalParser.T__20 = 21;
focalParser.T__21 = 22;
focalParser.T__22 = 23;
focalParser.T__23 = 24;
focalParser.T__24 = 25;
focalParser.T__25 = 26;
focalParser.T__26 = 27;
focalParser.T__27 = 28;
focalParser.T__28 = 29;
focalParser.T__29 = 30;
focalParser.T__30 = 31;
focalParser.PLUSMIN = 32;
focalParser.MULOP = 33;
focalParser.VARIABLE = 34;
focalParser.INTEGER = 35;
focalParser.ALPHA = 36;
focalParser.DIGIT = 37;
focalParser.BUILTIN = 38;
focalParser.STRING_LITERAL = 39;
focalParser.COMMENT = 40;
focalParser.WS = 41;

focalParser.RULE_prog = 0;
focalParser.RULE_statement = 1;
focalParser.RULE_grpnum = 2;
focalParser.RULE_linenum = 3;
focalParser.RULE_command = 4;
focalParser.RULE_ask = 5;
focalParser.RULE_askpair = 6;
focalParser.RULE_do_ = 7;
focalParser.RULE_for_ = 8;
focalParser.RULE_quit = 9;
focalParser.RULE_set_ = 10;
focalParser.RULE_goto_ = 11;
focalParser.RULE_if_ = 12;
focalParser.RULE_type_ = 13;
focalParser.RULE_typeexpression = 14;
focalParser.RULE_return_ = 15;
focalParser.RULE_write_ = 16;
focalParser.RULE_comment = 17;
focalParser.RULE_expression = 18;
focalParser.RULE_primary = 19;
focalParser.RULE_term = 20;
focalParser.RULE_number = 21;
focalParser.RULE_mantissa = 22;
focalParser.RULE_signed_ = 23;

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
        this.ruleIndex = focalParser.RULE_prog;
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
	    if(listener instanceof focalListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.exitProg(this);
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
        this.ruleIndex = focalParser.RULE_statement;
    }

	linenum() {
	    return this.getTypedRuleContext(LinenumContext,0);
	};

	command() {
	    return this.getTypedRuleContext(CommandContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.exitStatement(this);
		}
	}


}



class GrpnumContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = focalParser.RULE_grpnum;
    }

	INTEGER() {
	    return this.getToken(focalParser.INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.enterGrpnum(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.exitGrpnum(this);
		}
	}


}



class LinenumContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = focalParser.RULE_linenum;
    }

	grpnum() {
	    return this.getTypedRuleContext(GrpnumContext,0);
	};

	INTEGER() {
	    return this.getToken(focalParser.INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.enterLinenum(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.exitLinenum(this);
		}
	}


}



class CommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = focalParser.RULE_command;
    }

	ask() {
	    return this.getTypedRuleContext(AskContext,0);
	};

	do_() {
	    return this.getTypedRuleContext(Do_Context,0);
	};

	for_() {
	    return this.getTypedRuleContext(For_Context,0);
	};

	set_() {
	    return this.getTypedRuleContext(Set_Context,0);
	};

	quit() {
	    return this.getTypedRuleContext(QuitContext,0);
	};

	goto_() {
	    return this.getTypedRuleContext(Goto_Context,0);
	};

	if_() {
	    return this.getTypedRuleContext(If_Context,0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	return_() {
	    return this.getTypedRuleContext(Return_Context,0);
	};

	write_() {
	    return this.getTypedRuleContext(Write_Context,0);
	};

	comment() {
	    return this.getTypedRuleContext(CommentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.enterCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.exitCommand(this);
		}
	}


}



class AskContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = focalParser.RULE_ask;
    }

	askpair = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AskpairContext);
	    } else {
	        return this.getTypedRuleContext(AskpairContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.enterAsk(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.exitAsk(this);
		}
	}


}



class AskpairContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = focalParser.RULE_askpair;
    }

	STRING_LITERAL() {
	    return this.getToken(focalParser.STRING_LITERAL, 0);
	};

	VARIABLE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(focalParser.VARIABLE);
	    } else {
	        return this.getToken(focalParser.VARIABLE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.enterAskpair(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.exitAskpair(this);
		}
	}


}



class Do_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = focalParser.RULE_do_;
    }

	grpnum() {
	    return this.getTypedRuleContext(GrpnumContext,0);
	};

	linenum() {
	    return this.getTypedRuleContext(LinenumContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.enterDo_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.exitDo_(this);
		}
	}


}



class For_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = focalParser.RULE_for_;
    }

	VARIABLE() {
	    return this.getToken(focalParser.VARIABLE, 0);
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

	command() {
	    return this.getTypedRuleContext(CommandContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.enterFor_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.exitFor_(this);
		}
	}


}



class QuitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = focalParser.RULE_quit;
    }


	enterRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.enterQuit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.exitQuit(this);
		}
	}


}



class Set_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = focalParser.RULE_set_;
    }

	VARIABLE() {
	    return this.getToken(focalParser.VARIABLE, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	command() {
	    return this.getTypedRuleContext(CommandContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.enterSet_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.exitSet_(this);
		}
	}


}



class Goto_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = focalParser.RULE_goto_;
    }

	linenum() {
	    return this.getTypedRuleContext(LinenumContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.enterGoto_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.exitGoto_(this);
		}
	}


}



class If_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = focalParser.RULE_if_;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	linenum = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LinenumContext);
	    } else {
	        return this.getTypedRuleContext(LinenumContext,i);
	    }
	};

	command() {
	    return this.getTypedRuleContext(CommandContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.enterIf_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.exitIf_(this);
		}
	}


}



class Type_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = focalParser.RULE_type_;
    }

	typeexpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeexpressionContext);
	    } else {
	        return this.getTypedRuleContext(TypeexpressionContext,i);
	    }
	};

	command() {
	    return this.getTypedRuleContext(CommandContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.enterType_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.exitType_(this);
		}
	}


}



class TypeexpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = focalParser.RULE_typeexpression;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	STRING_LITERAL() {
	    return this.getToken(focalParser.STRING_LITERAL, 0);
	};

	INTEGER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(focalParser.INTEGER);
	    } else {
	        return this.getToken(focalParser.INTEGER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.enterTypeexpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.exitTypeexpression(this);
		}
	}


}



class Return_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = focalParser.RULE_return_;
    }


	enterRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.enterReturn_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.exitReturn_(this);
		}
	}


}



class Write_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = focalParser.RULE_write_;
    }

	grpnum() {
	    return this.getTypedRuleContext(GrpnumContext,0);
	};

	linenum() {
	    return this.getTypedRuleContext(LinenumContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.enterWrite_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.exitWrite_(this);
		}
	}


}



class CommentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = focalParser.RULE_comment;
    }

	COMMENT() {
	    return this.getToken(focalParser.COMMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.enterComment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.exitComment(this);
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
        this.ruleIndex = focalParser.RULE_expression;
    }

	primary = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PrimaryContext);
	    } else {
	        return this.getTypedRuleContext(PrimaryContext,i);
	    }
	};

	PLUSMIN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(focalParser.PLUSMIN);
	    } else {
	        return this.getToken(focalParser.PLUSMIN, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.exitExpression(this);
		}
	}


}



class PrimaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = focalParser.RULE_primary;
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

	MULOP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(focalParser.MULOP);
	    } else {
	        return this.getToken(focalParser.MULOP, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.enterPrimary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.exitPrimary(this);
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
        this.ruleIndex = focalParser.RULE_term;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	VARIABLE() {
	    return this.getToken(focalParser.VARIABLE, 0);
	};

	BUILTIN() {
	    return this.getToken(focalParser.BUILTIN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.exitTerm(this);
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
        this.ruleIndex = focalParser.RULE_number;
    }

	mantissa() {
	    return this.getTypedRuleContext(MantissaContext,0);
	};

	signed_() {
	    return this.getTypedRuleContext(Signed_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.exitNumber(this);
		}
	}


}



class MantissaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = focalParser.RULE_mantissa;
    }

	signed_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Signed_Context);
	    } else {
	        return this.getTypedRuleContext(Signed_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.enterMantissa(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.exitMantissa(this);
		}
	}


}



class Signed_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = focalParser.RULE_signed_;
    }

	INTEGER() {
	    return this.getToken(focalParser.INTEGER, 0);
	};

	PLUSMIN() {
	    return this.getToken(focalParser.PLUSMIN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.enterSigned_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof focalListener ) {
	        listener.exitSigned_(this);
		}
	}


}




focalParser.ProgContext = ProgContext; 
focalParser.StatementContext = StatementContext; 
focalParser.GrpnumContext = GrpnumContext; 
focalParser.LinenumContext = LinenumContext; 
focalParser.CommandContext = CommandContext; 
focalParser.AskContext = AskContext; 
focalParser.AskpairContext = AskpairContext; 
focalParser.Do_Context = Do_Context; 
focalParser.For_Context = For_Context; 
focalParser.QuitContext = QuitContext; 
focalParser.Set_Context = Set_Context; 
focalParser.Goto_Context = Goto_Context; 
focalParser.If_Context = If_Context; 
focalParser.Type_Context = Type_Context; 
focalParser.TypeexpressionContext = TypeexpressionContext; 
focalParser.Return_Context = Return_Context; 
focalParser.Write_Context = Write_Context; 
focalParser.CommentContext = CommentContext; 
focalParser.ExpressionContext = ExpressionContext; 
focalParser.PrimaryContext = PrimaryContext; 
focalParser.TermContext = TermContext; 
focalParser.NumberContext = NumberContext; 
focalParser.MantissaContext = MantissaContext; 
focalParser.Signed_Context = Signed_Context; 
