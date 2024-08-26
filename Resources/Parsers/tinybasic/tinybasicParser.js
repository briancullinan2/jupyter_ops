// Generated from Resources/Parsers/tinybasic/tinybasic.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import tinybasicListener from './tinybasicListener.js';
const serializedATN = [4,1,25,132,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,5,0,24,8,0,10,0,
12,0,27,9,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,36,8,1,1,2,1,2,1,2,1,2,1,2,1,
2,1,2,3,2,45,8,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,54,8,2,1,2,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,67,8,2,1,3,1,3,3,3,71,8,3,1,3,1,3,1,3,3,
3,76,8,3,5,3,78,8,3,10,3,12,3,81,9,3,1,4,1,4,1,4,5,4,86,8,4,10,4,12,4,89,
9,4,1,5,3,5,92,8,5,1,5,1,5,1,5,5,5,97,8,5,10,5,12,5,100,9,5,1,6,1,6,1,6,
5,6,105,8,6,10,6,12,6,108,9,6,1,7,1,7,3,7,112,8,7,1,8,1,8,1,9,4,9,117,8,
9,11,9,12,9,118,1,10,1,10,3,10,123,8,10,1,10,1,10,3,10,127,8,10,1,10,3,10,
130,8,10,1,10,0,0,11,0,2,4,6,8,10,12,14,16,18,20,0,5,1,0,15,16,1,0,17,18,
2,0,21,21,23,23,2,0,7,7,20,20,2,0,7,7,19,19,147,0,25,1,0,0,0,2,35,1,0,0,
0,4,66,1,0,0,0,6,70,1,0,0,0,8,82,1,0,0,0,10,91,1,0,0,0,12,101,1,0,0,0,14,
111,1,0,0,0,16,113,1,0,0,0,18,116,1,0,0,0,20,129,1,0,0,0,22,24,3,2,1,0,23,
22,1,0,0,0,24,27,1,0,0,0,25,23,1,0,0,0,25,26,1,0,0,0,26,1,1,0,0,0,27,25,
1,0,0,0,28,29,3,18,9,0,29,30,3,4,2,0,30,31,5,24,0,0,31,36,1,0,0,0,32,33,
3,4,2,0,33,34,5,24,0,0,34,36,1,0,0,0,35,28,1,0,0,0,35,32,1,0,0,0,36,3,1,
0,0,0,37,38,5,1,0,0,38,67,3,6,3,0,39,40,5,2,0,0,40,41,3,10,5,0,41,42,3,20,
10,0,42,44,3,10,5,0,43,45,5,3,0,0,44,43,1,0,0,0,44,45,1,0,0,0,45,46,1,0,
0,0,46,47,3,4,2,0,47,67,1,0,0,0,48,49,5,4,0,0,49,67,3,18,9,0,50,51,5,5,0,
0,51,67,3,8,4,0,52,54,5,6,0,0,53,52,1,0,0,0,53,54,1,0,0,0,54,55,1,0,0,0,
55,56,3,16,8,0,56,57,5,7,0,0,57,58,3,10,5,0,58,67,1,0,0,0,59,60,5,8,0,0,
60,67,3,10,5,0,61,67,5,9,0,0,62,67,5,10,0,0,63,67,5,11,0,0,64,67,5,12,0,
0,65,67,5,13,0,0,66,37,1,0,0,0,66,39,1,0,0,0,66,48,1,0,0,0,66,50,1,0,0,0,
66,53,1,0,0,0,66,59,1,0,0,0,66,61,1,0,0,0,66,62,1,0,0,0,66,63,1,0,0,0,66,
64,1,0,0,0,66,65,1,0,0,0,67,5,1,0,0,0,68,71,5,21,0,0,69,71,3,10,5,0,70,68,
1,0,0,0,70,69,1,0,0,0,71,79,1,0,0,0,72,75,5,14,0,0,73,76,5,21,0,0,74,76,
3,10,5,0,75,73,1,0,0,0,75,74,1,0,0,0,76,78,1,0,0,0,77,72,1,0,0,0,78,81,1,
0,0,0,79,77,1,0,0,0,79,80,1,0,0,0,80,7,1,0,0,0,81,79,1,0,0,0,82,87,3,16,
8,0,83,84,5,14,0,0,84,86,3,16,8,0,85,83,1,0,0,0,86,89,1,0,0,0,87,85,1,0,
0,0,87,88,1,0,0,0,88,9,1,0,0,0,89,87,1,0,0,0,90,92,7,0,0,0,91,90,1,0,0,0,
91,92,1,0,0,0,92,93,1,0,0,0,93,98,3,12,6,0,94,95,7,0,0,0,95,97,3,12,6,0,
96,94,1,0,0,0,97,100,1,0,0,0,98,96,1,0,0,0,98,99,1,0,0,0,99,11,1,0,0,0,100,
98,1,0,0,0,101,106,3,14,7,0,102,103,7,1,0,0,103,105,3,14,7,0,104,102,1,0,
0,0,105,108,1,0,0,0,106,104,1,0,0,0,106,107,1,0,0,0,107,13,1,0,0,0,108,106,
1,0,0,0,109,112,3,16,8,0,110,112,3,18,9,0,111,109,1,0,0,0,111,110,1,0,0,
0,112,15,1,0,0,0,113,114,7,2,0,0,114,17,1,0,0,0,115,117,5,22,0,0,116,115,
1,0,0,0,117,118,1,0,0,0,118,116,1,0,0,0,118,119,1,0,0,0,119,19,1,0,0,0,120,
122,5,19,0,0,121,123,7,3,0,0,122,121,1,0,0,0,122,123,1,0,0,0,123,130,1,0,
0,0,124,126,5,20,0,0,125,127,7,4,0,0,126,125,1,0,0,0,126,127,1,0,0,0,127,
130,1,0,0,0,128,130,5,7,0,0,129,120,1,0,0,0,129,124,1,0,0,0,129,128,1,0,
0,0,130,21,1,0,0,0,17,25,35,44,53,66,70,75,79,87,91,98,106,111,118,122,126,
129];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class tinybasicParser extends antlr4.Parser {

    static grammarFileName = "tinybasic.g4";
    static literalNames = [ null, "'PRINT'", "'IF'", "'THEN'", "'GOTO'", 
                            "'INPUT'", "'LET'", "'='", "'GOSUB'", "'RETURN'", 
                            "'CLEAR'", "'LIST'", "'RUN'", "'END'", "','", 
                            "'+'", "'-'", "'*'", "'/'", "'<'", "'>'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "STRING", "DIGIT", 
                             "VAR", "CR", "WS" ];
    static ruleNames = [ "program", "line", "statement", "exprlist", "varlist", 
                         "expression", "term", "factor", "vara", "number", 
                         "relop" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = tinybasicParser.ruleNames;
        this.literalNames = tinybasicParser.literalNames;
        this.symbolicNames = tinybasicParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, tinybasicParser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tinybasicParser.T__0) | (1 << tinybasicParser.T__1) | (1 << tinybasicParser.T__3) | (1 << tinybasicParser.T__4) | (1 << tinybasicParser.T__5) | (1 << tinybasicParser.T__7) | (1 << tinybasicParser.T__8) | (1 << tinybasicParser.T__9) | (1 << tinybasicParser.T__10) | (1 << tinybasicParser.T__11) | (1 << tinybasicParser.T__12) | (1 << tinybasicParser.STRING) | (1 << tinybasicParser.DIGIT) | (1 << tinybasicParser.VAR))) !== 0)) {
	            this.state = 22;
	            this.line();
	            this.state = 27;
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
	    this.enterRule(localctx, 2, tinybasicParser.RULE_line);
	    try {
	        this.state = 35;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case tinybasicParser.DIGIT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 28;
	            this.number();
	            this.state = 29;
	            this.statement();
	            this.state = 30;
	            this.match(tinybasicParser.CR);
	            break;
	        case tinybasicParser.T__0:
	        case tinybasicParser.T__1:
	        case tinybasicParser.T__3:
	        case tinybasicParser.T__4:
	        case tinybasicParser.T__5:
	        case tinybasicParser.T__7:
	        case tinybasicParser.T__8:
	        case tinybasicParser.T__9:
	        case tinybasicParser.T__10:
	        case tinybasicParser.T__11:
	        case tinybasicParser.T__12:
	        case tinybasicParser.STRING:
	        case tinybasicParser.VAR:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 32;
	            this.statement();
	            this.state = 33;
	            this.match(tinybasicParser.CR);
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, tinybasicParser.RULE_statement);
	    var _la = 0; // Token type
	    try {
	        this.state = 66;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case tinybasicParser.T__0:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 37;
	            this.match(tinybasicParser.T__0);
	            this.state = 38;
	            this.exprlist();
	            break;
	        case tinybasicParser.T__1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 39;
	            this.match(tinybasicParser.T__1);
	            this.state = 40;
	            this.expression();
	            this.state = 41;
	            this.relop();
	            this.state = 42;
	            this.expression();
	            this.state = 44;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===tinybasicParser.T__2) {
	                this.state = 43;
	                this.match(tinybasicParser.T__2);
	            }

	            this.state = 46;
	            this.statement();
	            break;
	        case tinybasicParser.T__3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 48;
	            this.match(tinybasicParser.T__3);
	            this.state = 49;
	            this.number();
	            break;
	        case tinybasicParser.T__4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 50;
	            this.match(tinybasicParser.T__4);
	            this.state = 51;
	            this.varlist();
	            break;
	        case tinybasicParser.T__5:
	        case tinybasicParser.STRING:
	        case tinybasicParser.VAR:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 53;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===tinybasicParser.T__5) {
	                this.state = 52;
	                this.match(tinybasicParser.T__5);
	            }

	            this.state = 55;
	            this.vara();
	            this.state = 56;
	            this.match(tinybasicParser.T__6);
	            this.state = 57;
	            this.expression();
	            break;
	        case tinybasicParser.T__7:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 59;
	            this.match(tinybasicParser.T__7);
	            this.state = 60;
	            this.expression();
	            break;
	        case tinybasicParser.T__8:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 61;
	            this.match(tinybasicParser.T__8);
	            break;
	        case tinybasicParser.T__9:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 62;
	            this.match(tinybasicParser.T__9);
	            break;
	        case tinybasicParser.T__10:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 63;
	            this.match(tinybasicParser.T__10);
	            break;
	        case tinybasicParser.T__11:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 64;
	            this.match(tinybasicParser.T__11);
	            break;
	        case tinybasicParser.T__12:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 65;
	            this.match(tinybasicParser.T__12);
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



	exprlist() {
	    let localctx = new ExprlistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, tinybasicParser.RULE_exprlist);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 68;
	            this.match(tinybasicParser.STRING);
	            break;

	        case 2:
	            this.state = 69;
	            this.expression();
	            break;

	        }
	        this.state = 79;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===tinybasicParser.T__13) {
	            this.state = 72;
	            this.match(tinybasicParser.T__13);
	            this.state = 75;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 73;
	                this.match(tinybasicParser.STRING);
	                break;

	            case 2:
	                this.state = 74;
	                this.expression();
	                break;

	            }
	            this.state = 81;
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



	varlist() {
	    let localctx = new VarlistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, tinybasicParser.RULE_varlist);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.vara();
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===tinybasicParser.T__13) {
	            this.state = 83;
	            this.match(tinybasicParser.T__13);
	            this.state = 84;
	            this.vara();
	            this.state = 89;
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



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, tinybasicParser.RULE_expression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===tinybasicParser.T__14 || _la===tinybasicParser.T__15) {
	            this.state = 90;
	            _la = this._input.LA(1);
	            if(!(_la===tinybasicParser.T__14 || _la===tinybasicParser.T__15)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 93;
	        this.term();
	        this.state = 98;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===tinybasicParser.T__14 || _la===tinybasicParser.T__15) {
	            this.state = 94;
	            _la = this._input.LA(1);
	            if(!(_la===tinybasicParser.T__14 || _la===tinybasicParser.T__15)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 95;
	            this.term();
	            this.state = 100;
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
	    this.enterRule(localctx, 12, tinybasicParser.RULE_term);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.factor();
	        this.state = 106;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===tinybasicParser.T__16 || _la===tinybasicParser.T__17) {
	            this.state = 102;
	            _la = this._input.LA(1);
	            if(!(_la===tinybasicParser.T__16 || _la===tinybasicParser.T__17)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 103;
	            this.factor();
	            this.state = 108;
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
	    this.enterRule(localctx, 14, tinybasicParser.RULE_factor);
	    try {
	        this.state = 111;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case tinybasicParser.STRING:
	        case tinybasicParser.VAR:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 109;
	            this.vara();
	            break;
	        case tinybasicParser.DIGIT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 110;
	            this.number();
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



	vara() {
	    let localctx = new VaraContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, tinybasicParser.RULE_vara);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        _la = this._input.LA(1);
	        if(!(_la===tinybasicParser.STRING || _la===tinybasicParser.VAR)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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
	    this.enterRule(localctx, 18, tinybasicParser.RULE_number);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 115;
	            this.match(tinybasicParser.DIGIT);
	            this.state = 118; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===tinybasicParser.DIGIT);
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



	relop() {
	    let localctx = new RelopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, tinybasicParser.RULE_relop);
	    var _la = 0; // Token type
	    try {
	        this.state = 129;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case tinybasicParser.T__18:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 120;
	            this.match(tinybasicParser.T__18);
	            this.state = 122;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===tinybasicParser.T__6 || _la===tinybasicParser.T__19) {
	                this.state = 121;
	                _la = this._input.LA(1);
	                if(!(_la===tinybasicParser.T__6 || _la===tinybasicParser.T__19)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	            }

	            break;
	        case tinybasicParser.T__19:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 124;
	            this.match(tinybasicParser.T__19);
	            this.state = 126;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===tinybasicParser.T__6 || _la===tinybasicParser.T__18) {
	                this.state = 125;
	                _la = this._input.LA(1);
	                if(!(_la===tinybasicParser.T__6 || _la===tinybasicParser.T__18)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	            }

	            break;
	        case tinybasicParser.T__6:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 128;
	            this.match(tinybasicParser.T__6);
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


}

tinybasicParser.EOF = antlr4.Token.EOF;
tinybasicParser.T__0 = 1;
tinybasicParser.T__1 = 2;
tinybasicParser.T__2 = 3;
tinybasicParser.T__3 = 4;
tinybasicParser.T__4 = 5;
tinybasicParser.T__5 = 6;
tinybasicParser.T__6 = 7;
tinybasicParser.T__7 = 8;
tinybasicParser.T__8 = 9;
tinybasicParser.T__9 = 10;
tinybasicParser.T__10 = 11;
tinybasicParser.T__11 = 12;
tinybasicParser.T__12 = 13;
tinybasicParser.T__13 = 14;
tinybasicParser.T__14 = 15;
tinybasicParser.T__15 = 16;
tinybasicParser.T__16 = 17;
tinybasicParser.T__17 = 18;
tinybasicParser.T__18 = 19;
tinybasicParser.T__19 = 20;
tinybasicParser.STRING = 21;
tinybasicParser.DIGIT = 22;
tinybasicParser.VAR = 23;
tinybasicParser.CR = 24;
tinybasicParser.WS = 25;

tinybasicParser.RULE_program = 0;
tinybasicParser.RULE_line = 1;
tinybasicParser.RULE_statement = 2;
tinybasicParser.RULE_exprlist = 3;
tinybasicParser.RULE_varlist = 4;
tinybasicParser.RULE_expression = 5;
tinybasicParser.RULE_term = 6;
tinybasicParser.RULE_factor = 7;
tinybasicParser.RULE_vara = 8;
tinybasicParser.RULE_number = 9;
tinybasicParser.RULE_relop = 10;

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
        this.ruleIndex = tinybasicParser.RULE_program;
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
	    if(listener instanceof tinybasicListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinybasicListener ) {
	        listener.exitProgram(this);
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
        this.ruleIndex = tinybasicParser.RULE_line;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	CR() {
	    return this.getToken(tinybasicParser.CR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tinybasicListener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinybasicListener ) {
	        listener.exitLine(this);
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
        this.ruleIndex = tinybasicParser.RULE_statement;
    }

	exprlist() {
	    return this.getTypedRuleContext(ExprlistContext,0);
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

	relop() {
	    return this.getTypedRuleContext(RelopContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	varlist() {
	    return this.getTypedRuleContext(VarlistContext,0);
	};

	vara() {
	    return this.getTypedRuleContext(VaraContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinybasicListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinybasicListener ) {
	        listener.exitStatement(this);
		}
	}


}



class ExprlistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinybasicParser.RULE_exprlist;
    }

	STRING = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tinybasicParser.STRING);
	    } else {
	        return this.getToken(tinybasicParser.STRING, i);
	    }
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
	    if(listener instanceof tinybasicListener ) {
	        listener.enterExprlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinybasicListener ) {
	        listener.exitExprlist(this);
		}
	}


}



class VarlistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinybasicParser.RULE_varlist;
    }

	vara = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VaraContext);
	    } else {
	        return this.getTypedRuleContext(VaraContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof tinybasicListener ) {
	        listener.enterVarlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinybasicListener ) {
	        listener.exitVarlist(this);
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
        this.ruleIndex = tinybasicParser.RULE_expression;
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
	    if(listener instanceof tinybasicListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinybasicListener ) {
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
        this.ruleIndex = tinybasicParser.RULE_term;
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
	    if(listener instanceof tinybasicListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinybasicListener ) {
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
        this.ruleIndex = tinybasicParser.RULE_factor;
    }

	vara() {
	    return this.getTypedRuleContext(VaraContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinybasicListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinybasicListener ) {
	        listener.exitFactor(this);
		}
	}


}



class VaraContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinybasicParser.RULE_vara;
    }

	VAR() {
	    return this.getToken(tinybasicParser.VAR, 0);
	};

	STRING() {
	    return this.getToken(tinybasicParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tinybasicListener ) {
	        listener.enterVara(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinybasicListener ) {
	        listener.exitVara(this);
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
        this.ruleIndex = tinybasicParser.RULE_number;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tinybasicParser.DIGIT);
	    } else {
	        return this.getToken(tinybasicParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof tinybasicListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinybasicListener ) {
	        listener.exitNumber(this);
		}
	}


}



class RelopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinybasicParser.RULE_relop;
    }


	enterRule(listener) {
	    if(listener instanceof tinybasicListener ) {
	        listener.enterRelop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinybasicListener ) {
	        listener.exitRelop(this);
		}
	}


}




tinybasicParser.ProgramContext = ProgramContext; 
tinybasicParser.LineContext = LineContext; 
tinybasicParser.StatementContext = StatementContext; 
tinybasicParser.ExprlistContext = ExprlistContext; 
tinybasicParser.VarlistContext = VarlistContext; 
tinybasicParser.ExpressionContext = ExpressionContext; 
tinybasicParser.TermContext = TermContext; 
tinybasicParser.FactorContext = FactorContext; 
tinybasicParser.VaraContext = VaraContext; 
tinybasicParser.NumberContext = NumberContext; 
tinybasicParser.RelopContext = RelopContext; 
