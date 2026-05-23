// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/focal/focal.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import focalListener from './focalListener.js';
const serializedATN = [4,1,41,247,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,1,0,4,0,50,8,0,11,0,12,0,51,1,0,1,
0,1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,
4,1,4,1,4,3,4,76,8,4,1,5,1,5,1,5,1,5,5,5,82,8,5,10,5,12,5,85,9,5,1,6,1,6,
1,6,1,6,1,6,5,6,92,8,6,10,6,12,6,95,9,6,1,7,1,7,1,7,1,7,3,7,101,8,7,1,8,
1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,111,8,8,1,8,1,8,1,8,1,9,1,9,1,10,1,10,1,
10,1,10,1,10,1,10,3,10,124,8,10,1,11,1,11,3,11,128,8,11,1,12,1,12,1,12,1,
12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,141,8,12,1,13,1,13,1,13,1,13,
5,13,147,8,13,10,13,12,13,150,9,13,1,13,1,13,3,13,154,8,13,1,14,1,14,4,14,
158,8,14,11,14,12,14,159,1,14,4,14,163,8,14,11,14,12,14,164,1,14,1,14,1,
14,1,14,1,14,3,14,172,8,14,1,15,1,15,1,16,1,16,1,16,3,16,179,8,16,1,17,1,
17,1,18,1,18,1,18,5,18,186,8,18,10,18,12,18,189,9,18,1,19,1,19,1,19,5,19,
194,8,19,10,19,12,19,197,9,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,
20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,
1,20,3,20,223,8,20,1,21,1,21,1,21,3,21,228,8,21,1,22,1,22,1,22,1,22,1,22,
1,22,1,22,1,22,1,22,1,22,3,22,240,8,22,1,23,3,23,243,8,23,1,23,1,23,1,23,
0,0,24,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,
0,6,1,0,2,3,1,0,5,6,1,0,8,9,1,0,13,14,1,0,15,16,1,0,18,19,264,0,49,1,0,0,
0,2,55,1,0,0,0,4,58,1,0,0,0,6,60,1,0,0,0,8,75,1,0,0,0,10,77,1,0,0,0,12,86,
1,0,0,0,14,96,1,0,0,0,16,102,1,0,0,0,18,115,1,0,0,0,20,117,1,0,0,0,22,125,
1,0,0,0,24,129,1,0,0,0,26,142,1,0,0,0,28,171,1,0,0,0,30,173,1,0,0,0,32,175,
1,0,0,0,34,180,1,0,0,0,36,182,1,0,0,0,38,190,1,0,0,0,40,222,1,0,0,0,42,224,
1,0,0,0,44,239,1,0,0,0,46,242,1,0,0,0,48,50,3,2,1,0,49,48,1,0,0,0,50,51,
1,0,0,0,51,49,1,0,0,0,51,52,1,0,0,0,52,53,1,0,0,0,53,54,5,0,0,1,54,1,1,0,
0,0,55,56,3,6,3,0,56,57,3,8,4,0,57,3,1,0,0,0,58,59,5,35,0,0,59,5,1,0,0,0,
60,61,3,4,2,0,61,62,5,1,0,0,62,63,5,35,0,0,63,7,1,0,0,0,64,76,3,10,5,0,65,
76,3,14,7,0,66,76,3,16,8,0,67,76,3,20,10,0,68,76,3,18,9,0,69,76,3,22,11,
0,70,76,3,24,12,0,71,76,3,26,13,0,72,76,3,30,15,0,73,76,3,32,16,0,74,76,
3,34,17,0,75,64,1,0,0,0,75,65,1,0,0,0,75,66,1,0,0,0,75,67,1,0,0,0,75,68,
1,0,0,0,75,69,1,0,0,0,75,70,1,0,0,0,75,71,1,0,0,0,75,72,1,0,0,0,75,73,1,
0,0,0,75,74,1,0,0,0,76,9,1,0,0,0,77,78,7,0,0,0,78,83,3,12,6,0,79,80,5,4,
0,0,80,82,3,12,6,0,81,79,1,0,0,0,82,85,1,0,0,0,83,81,1,0,0,0,83,84,1,0,0,
0,84,11,1,0,0,0,85,83,1,0,0,0,86,87,5,39,0,0,87,88,5,4,0,0,88,93,5,34,0,
0,89,90,5,4,0,0,90,92,5,34,0,0,91,89,1,0,0,0,92,95,1,0,0,0,93,91,1,0,0,0,
93,94,1,0,0,0,94,13,1,0,0,0,95,93,1,0,0,0,96,100,7,1,0,0,97,101,5,7,0,0,
98,101,3,4,2,0,99,101,3,6,3,0,100,97,1,0,0,0,100,98,1,0,0,0,100,99,1,0,0,
0,101,15,1,0,0,0,102,103,7,2,0,0,103,104,5,34,0,0,104,105,5,10,0,0,105,106,
3,36,18,0,106,107,5,4,0,0,107,110,3,36,18,0,108,109,5,4,0,0,109,111,3,36,
18,0,110,108,1,0,0,0,110,111,1,0,0,0,111,112,1,0,0,0,112,113,5,11,0,0,113,
114,3,8,4,0,114,17,1,0,0,0,115,116,5,12,0,0,116,19,1,0,0,0,117,118,7,3,0,
0,118,119,5,34,0,0,119,120,5,10,0,0,120,123,3,36,18,0,121,122,5,11,0,0,122,
124,3,8,4,0,123,121,1,0,0,0,123,124,1,0,0,0,124,21,1,0,0,0,125,127,7,4,0,
0,126,128,3,6,3,0,127,126,1,0,0,0,127,128,1,0,0,0,128,23,1,0,0,0,129,130,
5,17,0,0,130,131,3,36,18,0,131,132,3,6,3,0,132,133,5,4,0,0,133,134,3,6,3,
0,134,135,1,0,0,0,135,136,5,4,0,0,136,137,3,6,3,0,137,140,1,0,0,0,138,139,
5,11,0,0,139,141,3,8,4,0,140,138,1,0,0,0,140,141,1,0,0,0,141,25,1,0,0,0,
142,143,7,5,0,0,143,148,3,28,14,0,144,145,5,4,0,0,145,147,3,28,14,0,146,
144,1,0,0,0,147,150,1,0,0,0,148,146,1,0,0,0,148,149,1,0,0,0,149,153,1,0,
0,0,150,148,1,0,0,0,151,152,5,11,0,0,152,154,3,8,4,0,153,151,1,0,0,0,153,
154,1,0,0,0,154,27,1,0,0,0,155,172,3,36,18,0,156,158,5,20,0,0,157,156,1,
0,0,0,158,159,1,0,0,0,159,157,1,0,0,0,159,160,1,0,0,0,160,172,1,0,0,0,161,
163,5,21,0,0,162,161,1,0,0,0,163,164,1,0,0,0,164,162,1,0,0,0,164,165,1,0,
0,0,165,172,1,0,0,0,166,172,5,39,0,0,167,168,5,22,0,0,168,169,5,35,0,0,169,
170,5,1,0,0,170,172,5,35,0,0,171,155,1,0,0,0,171,157,1,0,0,0,171,162,1,0,
0,0,171,166,1,0,0,0,171,167,1,0,0,0,172,29,1,0,0,0,173,174,5,23,0,0,174,
31,1,0,0,0,175,178,5,24,0,0,176,179,3,4,2,0,177,179,3,6,3,0,178,176,1,0,
0,0,178,177,1,0,0,0,178,179,1,0,0,0,179,33,1,0,0,0,180,181,5,40,0,0,181,
35,1,0,0,0,182,187,3,38,19,0,183,184,5,32,0,0,184,186,3,38,19,0,185,183,
1,0,0,0,186,189,1,0,0,0,187,185,1,0,0,0,187,188,1,0,0,0,188,37,1,0,0,0,189,
187,1,0,0,0,190,195,3,40,20,0,191,192,5,33,0,0,192,194,3,40,20,0,193,191,
1,0,0,0,194,197,1,0,0,0,195,193,1,0,0,0,195,196,1,0,0,0,196,39,1,0,0,0,197,
195,1,0,0,0,198,199,5,25,0,0,199,200,3,36,18,0,200,201,5,26,0,0,201,223,
1,0,0,0,202,203,5,27,0,0,203,204,3,36,18,0,204,205,5,28,0,0,205,223,1,0,
0,0,206,207,5,29,0,0,207,208,3,36,18,0,208,209,5,30,0,0,209,223,1,0,0,0,
210,223,3,42,21,0,211,223,5,34,0,0,212,213,5,34,0,0,213,214,5,25,0,0,214,
215,3,36,18,0,215,216,5,26,0,0,216,223,1,0,0,0,217,218,5,38,0,0,218,219,
5,25,0,0,219,220,3,36,18,0,220,221,5,26,0,0,221,223,1,0,0,0,222,198,1,0,
0,0,222,202,1,0,0,0,222,206,1,0,0,0,222,210,1,0,0,0,222,211,1,0,0,0,222,
212,1,0,0,0,222,217,1,0,0,0,223,41,1,0,0,0,224,227,3,44,22,0,225,226,5,31,
0,0,226,228,3,46,23,0,227,225,1,0,0,0,227,228,1,0,0,0,228,43,1,0,0,0,229,
240,3,46,23,0,230,231,3,46,23,0,231,232,5,1,0,0,232,240,1,0,0,0,233,234,
5,1,0,0,234,240,3,46,23,0,235,236,3,46,23,0,236,237,5,1,0,0,237,238,3,46,
23,0,238,240,1,0,0,0,239,229,1,0,0,0,239,230,1,0,0,0,239,233,1,0,0,0,239,
235,1,0,0,0,240,45,1,0,0,0,241,243,5,32,0,0,242,241,1,0,0,0,242,243,1,0,
0,0,243,244,1,0,0,0,244,245,5,35,0,0,245,47,1,0,0,0,21,51,75,83,93,100,110,
123,127,140,148,153,159,164,171,178,187,195,222,227,239,242];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

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



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, focalParser.RULE_prog);
	    var _la = 0;
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
	        } while(_la===35);
	        this.state = 53;
	        this.match(focalParser.EOF);
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
	        this.state = 55;
	        this.linenum();
	        this.state = 56;
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
	        this.state = 58;
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
	        this.state = 60;
	        this.grpnum();
	        this.state = 61;
	        this.match(focalParser.T__0);
	        this.state = 62;
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
	        this.state = 75;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 64;
	            this.ask();
	            break;
	        case 5:
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 65;
	            this.do_();
	            break;
	        case 8:
	        case 9:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 66;
	            this.for_();
	            break;
	        case 13:
	        case 14:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 67;
	            this.set_();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 68;
	            this.quit();
	            break;
	        case 15:
	        case 16:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 69;
	            this.goto_();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 70;
	            this.if_();
	            break;
	        case 18:
	        case 19:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 71;
	            this.type_();
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 72;
	            this.return_();
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 73;
	            this.write_();
	            break;
	        case 40:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 74;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        _la = this._input.LA(1);
	        if(!(_la===2 || _la===3)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 78;
	        this.askpair();
	        this.state = 83;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 79;
	            this.match(focalParser.T__3);
	            this.state = 80;
	            this.askpair();
	            this.state = 85;
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
	        this.state = 86;
	        this.match(focalParser.STRING_LITERAL);
	        this.state = 87;
	        this.match(focalParser.T__3);
	        this.state = 88;
	        this.match(focalParser.VARIABLE);
	        this.state = 93;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 89;
	                this.match(focalParser.T__3);
	                this.state = 90;
	                this.match(focalParser.VARIABLE); 
	            }
	            this.state = 95;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        _la = this._input.LA(1);
	        if(!(_la===5 || _la===6)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 100;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 97;
	            this.match(focalParser.T__6);
	            break;

	        case 2:
	            this.state = 98;
	            this.grpnum();
	            break;

	        case 3:
	            this.state = 99;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        _la = this._input.LA(1);
	        if(!(_la===8 || _la===9)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 103;
	        this.match(focalParser.VARIABLE);
	        this.state = 104;
	        this.match(focalParser.T__9);
	        this.state = 105;
	        this.expression();
	        this.state = 106;
	        this.match(focalParser.T__3);
	        this.state = 107;
	        this.expression();
	        this.state = 110;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 108;
	            this.match(focalParser.T__3);
	            this.state = 109;
	            this.expression();
	        }

	        this.state = 112;
	        this.match(focalParser.T__10);
	        this.state = 113;
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
	        this.state = 115;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        _la = this._input.LA(1);
	        if(!(_la===13 || _la===14)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 118;
	        this.match(focalParser.VARIABLE);
	        this.state = 119;
	        this.match(focalParser.T__9);
	        this.state = 120;
	        this.expression();
	        this.state = 123;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 121;
	            this.match(focalParser.T__10);
	            this.state = 122;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        _la = this._input.LA(1);
	        if(!(_la===15 || _la===16)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 127;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        if(la_===1) {
	            this.state = 126;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this.match(focalParser.T__16);
	        this.state = 130;
	        this.expression();
	        this.state = 131;
	        this.linenum();

	        this.state = 132;
	        this.match(focalParser.T__3);
	        this.state = 133;
	        this.linenum();

	        this.state = 135;
	        this.match(focalParser.T__3);
	        this.state = 136;
	        this.linenum();
	        this.state = 140;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 138;
	            this.match(focalParser.T__10);
	            this.state = 139;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 142;
	        _la = this._input.LA(1);
	        if(!(_la===18 || _la===19)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 143;
	        this.typeexpression();
	        this.state = 148;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 144;
	            this.match(focalParser.T__3);
	            this.state = 145;
	            this.typeexpression();
	            this.state = 150;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 153;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 151;
	            this.match(focalParser.T__10);
	            this.state = 152;
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
	    var _la = 0;
	    try {
	        this.state = 171;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 25:
	        case 27:
	        case 29:
	        case 32:
	        case 34:
	        case 35:
	        case 38:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 155;
	            this.expression();
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 157; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 156;
	                this.match(focalParser.T__19);
	                this.state = 159; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===20);
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 162; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 161;
	                this.match(focalParser.T__20);
	                this.state = 164; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===21);
	            break;
	        case 39:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 166;
	            this.match(focalParser.STRING_LITERAL);
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 167;
	            this.match(focalParser.T__21);
	            this.state = 168;
	            this.match(focalParser.INTEGER);
	            this.state = 169;
	            this.match(focalParser.T__0);
	            this.state = 170;
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
	        this.state = 173;
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
	        this.state = 175;
	        this.match(focalParser.T__23);
	        this.state = 178;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        if(la_===1) {
	            this.state = 176;
	            this.grpnum();

	        } else if(la_===2) {
	            this.state = 177;
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
	        this.state = 180;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 182;
	        this.primary();
	        this.state = 187;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===32) {
	            this.state = 183;
	            this.match(focalParser.PLUSMIN);
	            this.state = 184;
	            this.primary();
	            this.state = 189;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 190;
	        this.term();
	        this.state = 195;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===33) {
	            this.state = 191;
	            this.match(focalParser.MULOP);
	            this.state = 192;
	            this.term();
	            this.state = 197;
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
	        this.state = 222;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 198;
	            this.match(focalParser.T__24);
	            this.state = 199;
	            this.expression();
	            this.state = 200;
	            this.match(focalParser.T__25);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 202;
	            this.match(focalParser.T__26);
	            this.state = 203;
	            this.expression();
	            this.state = 204;
	            this.match(focalParser.T__27);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 206;
	            this.match(focalParser.T__28);
	            this.state = 207;
	            this.expression();
	            this.state = 208;
	            this.match(focalParser.T__29);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 210;
	            this.number();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 211;
	            this.match(focalParser.VARIABLE);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 212;
	            this.match(focalParser.VARIABLE);
	            this.state = 213;
	            this.match(focalParser.T__24);
	            this.state = 214;
	            this.expression();
	            this.state = 215;
	            this.match(focalParser.T__25);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 217;
	            this.match(focalParser.BUILTIN);
	            this.state = 218;
	            this.match(focalParser.T__24);
	            this.state = 219;
	            this.expression();
	            this.state = 220;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 224;
	        this.mantissa();
	        this.state = 227;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===31) {
	            this.state = 225;
	            this.match(focalParser.T__30);
	            this.state = 226;
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
	        this.state = 239;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 229;
	            this.signed_();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 230;
	            this.signed_();
	            this.state = 231;
	            this.match(focalParser.T__0);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 233;
	            this.match(focalParser.T__0);
	            this.state = 234;
	            this.signed_();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 235;
	            this.signed_();
	            this.state = 236;
	            this.match(focalParser.T__0);
	            this.state = 237;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 242;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===32) {
	            this.state = 241;
	            this.match(focalParser.PLUSMIN);
	        }

	        this.state = 244;
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

	EOF() {
	    return this.getToken(focalParser.EOF, 0);
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

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
