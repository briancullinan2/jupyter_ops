// Generated from Resources/Parsers/sieve/sieve.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import sieveListener from './sieveListener.js';
const serializedATN = [4,1,27,117,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,1,0,1,1,4,1,32,8,1,11,1,12,1,33,1,2,1,2,1,2,1,2,3,2,40,8,2,
1,3,5,3,43,8,3,10,3,12,3,46,9,3,1,3,1,3,3,3,50,8,3,1,4,1,4,1,4,1,4,3,4,56,
8,4,1,5,1,5,1,5,1,5,5,5,62,8,5,10,5,12,5,65,9,5,1,5,1,5,1,6,1,6,1,6,1,7,
1,7,1,7,1,7,5,7,76,8,7,10,7,12,7,79,9,7,1,7,1,7,1,8,1,8,3,8,85,8,8,1,9,1,
9,1,9,1,9,1,10,1,10,1,10,5,10,94,8,10,10,10,12,10,97,9,10,1,10,1,10,1,11,
1,11,1,11,1,12,1,12,5,12,106,8,12,10,12,12,12,109,9,12,1,13,1,13,4,13,113,
8,13,11,13,12,13,114,1,13,0,0,14,0,2,4,6,8,10,12,14,16,18,20,22,24,26,0,
0,117,0,28,1,0,0,0,2,31,1,0,0,0,4,35,1,0,0,0,6,44,1,0,0,0,8,55,1,0,0,0,10,
57,1,0,0,0,12,68,1,0,0,0,14,71,1,0,0,0,16,84,1,0,0,0,18,86,1,0,0,0,20,90,
1,0,0,0,22,100,1,0,0,0,24,103,1,0,0,0,26,110,1,0,0,0,28,29,3,2,1,0,29,1,
1,0,0,0,30,32,3,4,2,0,31,30,1,0,0,0,32,33,1,0,0,0,33,31,1,0,0,0,33,34,1,
0,0,0,34,3,1,0,0,0,35,36,5,17,0,0,36,39,3,6,3,0,37,40,5,1,0,0,38,40,3,18,
9,0,39,37,1,0,0,0,39,38,1,0,0,0,40,5,1,0,0,0,41,43,3,8,4,0,42,41,1,0,0,0,
43,46,1,0,0,0,44,42,1,0,0,0,44,45,1,0,0,0,45,49,1,0,0,0,46,44,1,0,0,0,47,
50,3,12,6,0,48,50,3,10,5,0,49,47,1,0,0,0,49,48,1,0,0,0,49,50,1,0,0,0,50,
7,1,0,0,0,51,56,3,14,7,0,52,56,3,16,8,0,53,56,5,25,0,0,54,56,5,18,0,0,55,
51,1,0,0,0,55,52,1,0,0,0,55,53,1,0,0,0,55,54,1,0,0,0,56,9,1,0,0,0,57,58,
5,2,0,0,58,63,3,12,6,0,59,60,5,3,0,0,60,62,3,12,6,0,61,59,1,0,0,0,62,65,
1,0,0,0,63,61,1,0,0,0,63,64,1,0,0,0,64,66,1,0,0,0,65,63,1,0,0,0,66,67,5,
4,0,0,67,11,1,0,0,0,68,69,5,17,0,0,69,70,3,6,3,0,70,13,1,0,0,0,71,72,5,5,
0,0,72,77,3,16,8,0,73,74,5,3,0,0,74,76,3,16,8,0,75,73,1,0,0,0,76,79,1,0,
0,0,77,75,1,0,0,0,77,78,1,0,0,0,78,80,1,0,0,0,79,77,1,0,0,0,80,81,5,6,0,
0,81,15,1,0,0,0,82,85,5,14,0,0,83,85,3,20,10,0,84,82,1,0,0,0,84,83,1,0,0,
0,85,17,1,0,0,0,86,87,5,7,0,0,87,88,3,2,1,0,88,89,5,8,0,0,89,19,1,0,0,0,
90,95,5,9,0,0,91,94,3,24,12,0,92,94,3,26,13,0,93,91,1,0,0,0,93,92,1,0,0,
0,94,97,1,0,0,0,95,93,1,0,0,0,95,96,1,0,0,0,96,98,1,0,0,0,97,95,1,0,0,0,
98,99,5,10,0,0,99,21,1,0,0,0,100,101,5,11,0,0,101,102,3,16,8,0,102,23,1,
0,0,0,103,107,5,20,0,0,104,106,5,19,0,0,105,104,1,0,0,0,106,109,1,0,0,0,
107,105,1,0,0,0,107,108,1,0,0,0,108,25,1,0,0,0,109,107,1,0,0,0,110,112,5,
10,0,0,111,113,5,19,0,0,112,111,1,0,0,0,113,114,1,0,0,0,114,112,1,0,0,0,
114,115,1,0,0,0,115,27,1,0,0,0,12,33,39,44,49,55,63,77,84,93,95,107,114];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class sieveParser extends antlr4.Parser {

    static grammarFileName = "sieve.g4";
    static literalNames = [ null, "';'", "'('", "','", "')'", "'['", "']'", 
                            "'{'", "'}'", "'text:'", "'.'", "':comparator'", 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, "'*'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, "LINECOMMENT", "WS", 
                             "QUOTEDSTRING", "DIGIT", "ALPHA", "IDENTIFIER", 
                             "TAG", "OCTETNOTCRLF", "OCTETNOTPERIOD", "OCTETNOTQSPECIAL", 
                             "NOTSTAR", "ADDRESSPART", "MATCHTYPE", "NUMBER", 
                             "STAR", "QUANTIFIER" ];
    static ruleNames = [ "start", "commands", "command", "arguments", "argument", 
                         "testlist", "test", "stringlist", "string", "block", 
                         "multiline", "comparator", "multilineliteral", 
                         "multilinedotstart" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = sieveParser.ruleNames;
        this.literalNames = sieveParser.literalNames;
        this.symbolicNames = sieveParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, sieveParser.RULE_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.commands();
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



	commands() {
	    let localctx = new CommandsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, sieveParser.RULE_commands);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 30;
	            this.command();
	            this.state = 33; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===sieveParser.IDENTIFIER);
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
	    this.enterRule(localctx, 4, sieveParser.RULE_command);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.match(sieveParser.IDENTIFIER);
	        this.state = 36;
	        this.arguments();
	        this.state = 39;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case sieveParser.T__0:
	            this.state = 37;
	            this.match(sieveParser.T__0);
	            break;
	        case sieveParser.T__6:
	            this.state = 38;
	            this.block();
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



	arguments() {
	    let localctx = new ArgumentsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, sieveParser.RULE_arguments);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << sieveParser.T__4) | (1 << sieveParser.T__8) | (1 << sieveParser.QUOTEDSTRING) | (1 << sieveParser.TAG) | (1 << sieveParser.NUMBER))) !== 0)) {
	            this.state = 41;
	            this.argument();
	            this.state = 46;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 49;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case sieveParser.IDENTIFIER:
	        	this.state = 47;
	        	this.test();
	        	break;
	        case sieveParser.T__1:
	        	this.state = 48;
	        	this.testlist();
	        	break;
	        case sieveParser.T__0:
	        case sieveParser.T__2:
	        case sieveParser.T__3:
	        case sieveParser.T__6:
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



	argument() {
	    let localctx = new ArgumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, sieveParser.RULE_argument);
	    try {
	        this.state = 55;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case sieveParser.T__4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 51;
	            this.stringlist();
	            break;
	        case sieveParser.T__8:
	        case sieveParser.QUOTEDSTRING:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 52;
	            this.string();
	            break;
	        case sieveParser.NUMBER:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 53;
	            this.match(sieveParser.NUMBER);
	            break;
	        case sieveParser.TAG:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 54;
	            this.match(sieveParser.TAG);
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



	testlist() {
	    let localctx = new TestlistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, sieveParser.RULE_testlist);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(sieveParser.T__1);
	        this.state = 58;
	        this.test();
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===sieveParser.T__2) {
	            this.state = 59;
	            this.match(sieveParser.T__2);
	            this.state = 60;
	            this.test();
	            this.state = 65;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 66;
	        this.match(sieveParser.T__3);
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



	test() {
	    let localctx = new TestContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, sieveParser.RULE_test);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.match(sieveParser.IDENTIFIER);
	        this.state = 69;
	        this.arguments();
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



	stringlist() {
	    let localctx = new StringlistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, sieveParser.RULE_stringlist);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(sieveParser.T__4);
	        this.state = 72;
	        this.string();
	        this.state = 77;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===sieveParser.T__2) {
	            this.state = 73;
	            this.match(sieveParser.T__2);
	            this.state = 74;
	            this.string();
	            this.state = 79;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 80;
	        this.match(sieveParser.T__5);
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



	string() {
	    let localctx = new StringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, sieveParser.RULE_string);
	    try {
	        this.state = 84;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case sieveParser.QUOTEDSTRING:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 82;
	            this.match(sieveParser.QUOTEDSTRING);
	            break;
	        case sieveParser.T__8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 83;
	            this.multiline();
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



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, sieveParser.RULE_block);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(sieveParser.T__6);
	        this.state = 87;
	        this.commands();
	        this.state = 88;
	        this.match(sieveParser.T__7);
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



	multiline() {
	    let localctx = new MultilineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, sieveParser.RULE_multiline);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this.match(sieveParser.T__8);
	        this.state = 95;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 93;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case sieveParser.OCTETNOTPERIOD:
	                    this.state = 91;
	                    this.multilineliteral();
	                    break;
	                case sieveParser.T__9:
	                    this.state = 92;
	                    this.multilinedotstart();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                } 
	            }
	            this.state = 97;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
	        }

	        this.state = 98;
	        this.match(sieveParser.T__9);
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



	comparator() {
	    let localctx = new ComparatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, sieveParser.RULE_comparator);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this.match(sieveParser.T__10);
	        this.state = 101;
	        this.string();
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



	multilineliteral() {
	    let localctx = new MultilineliteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, sieveParser.RULE_multilineliteral);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        this.match(sieveParser.OCTETNOTPERIOD);
	        this.state = 107;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===sieveParser.OCTETNOTCRLF) {
	            this.state = 104;
	            this.match(sieveParser.OCTETNOTCRLF);
	            this.state = 109;
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



	multilinedotstart() {
	    let localctx = new MultilinedotstartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, sieveParser.RULE_multilinedotstart);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this.match(sieveParser.T__9);
	        this.state = 112; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 111;
	            this.match(sieveParser.OCTETNOTCRLF);
	            this.state = 114; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===sieveParser.OCTETNOTCRLF);
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

sieveParser.EOF = antlr4.Token.EOF;
sieveParser.T__0 = 1;
sieveParser.T__1 = 2;
sieveParser.T__2 = 3;
sieveParser.T__3 = 4;
sieveParser.T__4 = 5;
sieveParser.T__5 = 6;
sieveParser.T__6 = 7;
sieveParser.T__7 = 8;
sieveParser.T__8 = 9;
sieveParser.T__9 = 10;
sieveParser.T__10 = 11;
sieveParser.LINECOMMENT = 12;
sieveParser.WS = 13;
sieveParser.QUOTEDSTRING = 14;
sieveParser.DIGIT = 15;
sieveParser.ALPHA = 16;
sieveParser.IDENTIFIER = 17;
sieveParser.TAG = 18;
sieveParser.OCTETNOTCRLF = 19;
sieveParser.OCTETNOTPERIOD = 20;
sieveParser.OCTETNOTQSPECIAL = 21;
sieveParser.NOTSTAR = 22;
sieveParser.ADDRESSPART = 23;
sieveParser.MATCHTYPE = 24;
sieveParser.NUMBER = 25;
sieveParser.STAR = 26;
sieveParser.QUANTIFIER = 27;

sieveParser.RULE_start = 0;
sieveParser.RULE_commands = 1;
sieveParser.RULE_command = 2;
sieveParser.RULE_arguments = 3;
sieveParser.RULE_argument = 4;
sieveParser.RULE_testlist = 5;
sieveParser.RULE_test = 6;
sieveParser.RULE_stringlist = 7;
sieveParser.RULE_string = 8;
sieveParser.RULE_block = 9;
sieveParser.RULE_multiline = 10;
sieveParser.RULE_comparator = 11;
sieveParser.RULE_multilineliteral = 12;
sieveParser.RULE_multilinedotstart = 13;

class StartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sieveParser.RULE_start;
    }

	commands() {
	    return this.getTypedRuleContext(CommandsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof sieveListener ) {
	        listener.enterStart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sieveListener ) {
	        listener.exitStart(this);
		}
	}


}



class CommandsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sieveParser.RULE_commands;
    }

	command = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CommandContext);
	    } else {
	        return this.getTypedRuleContext(CommandContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof sieveListener ) {
	        listener.enterCommands(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sieveListener ) {
	        listener.exitCommands(this);
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
        this.ruleIndex = sieveParser.RULE_command;
    }

	IDENTIFIER() {
	    return this.getToken(sieveParser.IDENTIFIER, 0);
	};

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof sieveListener ) {
	        listener.enterCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sieveListener ) {
	        listener.exitCommand(this);
		}
	}


}



class ArgumentsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sieveParser.RULE_arguments;
    }

	argument = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgumentContext);
	    } else {
	        return this.getTypedRuleContext(ArgumentContext,i);
	    }
	};

	test() {
	    return this.getTypedRuleContext(TestContext,0);
	};

	testlist() {
	    return this.getTypedRuleContext(TestlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof sieveListener ) {
	        listener.enterArguments(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sieveListener ) {
	        listener.exitArguments(this);
		}
	}


}



class ArgumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sieveParser.RULE_argument;
    }

	stringlist() {
	    return this.getTypedRuleContext(StringlistContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	NUMBER() {
	    return this.getToken(sieveParser.NUMBER, 0);
	};

	TAG() {
	    return this.getToken(sieveParser.TAG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof sieveListener ) {
	        listener.enterArgument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sieveListener ) {
	        listener.exitArgument(this);
		}
	}


}



class TestlistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sieveParser.RULE_testlist;
    }

	test = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TestContext);
	    } else {
	        return this.getTypedRuleContext(TestContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof sieveListener ) {
	        listener.enterTestlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sieveListener ) {
	        listener.exitTestlist(this);
		}
	}


}



class TestContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sieveParser.RULE_test;
    }

	IDENTIFIER() {
	    return this.getToken(sieveParser.IDENTIFIER, 0);
	};

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof sieveListener ) {
	        listener.enterTest(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sieveListener ) {
	        listener.exitTest(this);
		}
	}


}



class StringlistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sieveParser.RULE_stringlist;
    }

	string = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StringContext);
	    } else {
	        return this.getTypedRuleContext(StringContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof sieveListener ) {
	        listener.enterStringlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sieveListener ) {
	        listener.exitStringlist(this);
		}
	}


}



class StringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sieveParser.RULE_string;
    }

	QUOTEDSTRING() {
	    return this.getToken(sieveParser.QUOTEDSTRING, 0);
	};

	multiline() {
	    return this.getTypedRuleContext(MultilineContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof sieveListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sieveListener ) {
	        listener.exitString(this);
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
        this.ruleIndex = sieveParser.RULE_block;
    }

	commands() {
	    return this.getTypedRuleContext(CommandsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof sieveListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sieveListener ) {
	        listener.exitBlock(this);
		}
	}


}



class MultilineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sieveParser.RULE_multiline;
    }

	multilineliteral = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MultilineliteralContext);
	    } else {
	        return this.getTypedRuleContext(MultilineliteralContext,i);
	    }
	};

	multilinedotstart = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MultilinedotstartContext);
	    } else {
	        return this.getTypedRuleContext(MultilinedotstartContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof sieveListener ) {
	        listener.enterMultiline(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sieveListener ) {
	        listener.exitMultiline(this);
		}
	}


}



class ComparatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sieveParser.RULE_comparator;
    }

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof sieveListener ) {
	        listener.enterComparator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sieveListener ) {
	        listener.exitComparator(this);
		}
	}


}



class MultilineliteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sieveParser.RULE_multilineliteral;
    }

	OCTETNOTPERIOD() {
	    return this.getToken(sieveParser.OCTETNOTPERIOD, 0);
	};

	OCTETNOTCRLF = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(sieveParser.OCTETNOTCRLF);
	    } else {
	        return this.getToken(sieveParser.OCTETNOTCRLF, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof sieveListener ) {
	        listener.enterMultilineliteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sieveListener ) {
	        listener.exitMultilineliteral(this);
		}
	}


}



class MultilinedotstartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sieveParser.RULE_multilinedotstart;
    }

	OCTETNOTCRLF = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(sieveParser.OCTETNOTCRLF);
	    } else {
	        return this.getToken(sieveParser.OCTETNOTCRLF, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof sieveListener ) {
	        listener.enterMultilinedotstart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sieveListener ) {
	        listener.exitMultilinedotstart(this);
		}
	}


}




sieveParser.StartContext = StartContext; 
sieveParser.CommandsContext = CommandsContext; 
sieveParser.CommandContext = CommandContext; 
sieveParser.ArgumentsContext = ArgumentsContext; 
sieveParser.ArgumentContext = ArgumentContext; 
sieveParser.TestlistContext = TestlistContext; 
sieveParser.TestContext = TestContext; 
sieveParser.StringlistContext = StringlistContext; 
sieveParser.StringContext = StringContext; 
sieveParser.BlockContext = BlockContext; 
sieveParser.MultilineContext = MultilineContext; 
sieveParser.ComparatorContext = ComparatorContext; 
sieveParser.MultilineliteralContext = MultilineliteralContext; 
sieveParser.MultilinedotstartContext = MultilinedotstartContext; 
