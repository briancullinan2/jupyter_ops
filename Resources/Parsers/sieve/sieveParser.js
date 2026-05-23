// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/sieve/sieve.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import sieveListener from './sieveListener.js';
const serializedATN = [4,1,27,118,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,1,0,1,0,1,1,4,1,33,8,1,11,1,12,1,34,1,2,1,2,1,2,1,2,3,2,41,
8,2,1,3,5,3,44,8,3,10,3,12,3,47,9,3,1,3,1,3,3,3,51,8,3,1,4,1,4,1,4,1,4,3,
4,57,8,4,1,5,1,5,1,5,1,5,5,5,63,8,5,10,5,12,5,66,9,5,1,5,1,5,1,6,1,6,1,6,
1,7,1,7,1,7,1,7,5,7,77,8,7,10,7,12,7,80,9,7,1,7,1,7,1,8,1,8,3,8,86,8,8,1,
9,1,9,1,9,1,9,1,10,1,10,1,10,5,10,95,8,10,10,10,12,10,98,9,10,1,10,1,10,
1,11,1,11,1,11,1,12,1,12,5,12,107,8,12,10,12,12,12,110,9,12,1,13,1,13,4,
13,114,8,13,11,13,12,13,115,1,13,0,0,14,0,2,4,6,8,10,12,14,16,18,20,22,24,
26,0,0,118,0,28,1,0,0,0,2,32,1,0,0,0,4,36,1,0,0,0,6,45,1,0,0,0,8,56,1,0,
0,0,10,58,1,0,0,0,12,69,1,0,0,0,14,72,1,0,0,0,16,85,1,0,0,0,18,87,1,0,0,
0,20,91,1,0,0,0,22,101,1,0,0,0,24,104,1,0,0,0,26,111,1,0,0,0,28,29,3,2,1,
0,29,30,5,0,0,1,30,1,1,0,0,0,31,33,3,4,2,0,32,31,1,0,0,0,33,34,1,0,0,0,34,
32,1,0,0,0,34,35,1,0,0,0,35,3,1,0,0,0,36,37,5,17,0,0,37,40,3,6,3,0,38,41,
5,1,0,0,39,41,3,18,9,0,40,38,1,0,0,0,40,39,1,0,0,0,41,5,1,0,0,0,42,44,3,
8,4,0,43,42,1,0,0,0,44,47,1,0,0,0,45,43,1,0,0,0,45,46,1,0,0,0,46,50,1,0,
0,0,47,45,1,0,0,0,48,51,3,12,6,0,49,51,3,10,5,0,50,48,1,0,0,0,50,49,1,0,
0,0,50,51,1,0,0,0,51,7,1,0,0,0,52,57,3,14,7,0,53,57,3,16,8,0,54,57,5,25,
0,0,55,57,5,18,0,0,56,52,1,0,0,0,56,53,1,0,0,0,56,54,1,0,0,0,56,55,1,0,0,
0,57,9,1,0,0,0,58,59,5,2,0,0,59,64,3,12,6,0,60,61,5,3,0,0,61,63,3,12,6,0,
62,60,1,0,0,0,63,66,1,0,0,0,64,62,1,0,0,0,64,65,1,0,0,0,65,67,1,0,0,0,66,
64,1,0,0,0,67,68,5,4,0,0,68,11,1,0,0,0,69,70,5,17,0,0,70,71,3,6,3,0,71,13,
1,0,0,0,72,73,5,5,0,0,73,78,3,16,8,0,74,75,5,3,0,0,75,77,3,16,8,0,76,74,
1,0,0,0,77,80,1,0,0,0,78,76,1,0,0,0,78,79,1,0,0,0,79,81,1,0,0,0,80,78,1,
0,0,0,81,82,5,6,0,0,82,15,1,0,0,0,83,86,5,14,0,0,84,86,3,20,10,0,85,83,1,
0,0,0,85,84,1,0,0,0,86,17,1,0,0,0,87,88,5,7,0,0,88,89,3,2,1,0,89,90,5,8,
0,0,90,19,1,0,0,0,91,96,5,9,0,0,92,95,3,24,12,0,93,95,3,26,13,0,94,92,1,
0,0,0,94,93,1,0,0,0,95,98,1,0,0,0,96,94,1,0,0,0,96,97,1,0,0,0,97,99,1,0,
0,0,98,96,1,0,0,0,99,100,5,10,0,0,100,21,1,0,0,0,101,102,5,11,0,0,102,103,
3,16,8,0,103,23,1,0,0,0,104,108,5,20,0,0,105,107,5,19,0,0,106,105,1,0,0,
0,107,110,1,0,0,0,108,106,1,0,0,0,108,109,1,0,0,0,109,25,1,0,0,0,110,108,
1,0,0,0,111,113,5,10,0,0,112,114,5,19,0,0,113,112,1,0,0,0,114,115,1,0,0,
0,115,113,1,0,0,0,115,116,1,0,0,0,116,27,1,0,0,0,12,34,40,45,50,56,64,78,
85,94,96,108,115];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

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
    static ruleNames = [ "start_", "commands", "command", "arguments", "argument", 
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



	start_() {
	    let localctx = new Start_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, sieveParser.RULE_start_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.commands();
	        this.state = 29;
	        this.match(sieveParser.EOF);
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 31;
	            this.command();
	            this.state = 34; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===17);
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
	        this.state = 36;
	        this.match(sieveParser.IDENTIFIER);
	        this.state = 37;
	        this.arguments();
	        this.state = 40;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.state = 38;
	            this.match(sieveParser.T__0);
	            break;
	        case 7:
	            this.state = 39;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 33833504) !== 0)) {
	            this.state = 42;
	            this.argument();
	            this.state = 47;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 50;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case 17:
	        	this.state = 48;
	        	this.test();
	        	break;
	        case 2:
	        	this.state = 49;
	        	this.testlist();
	        	break;
	        case 1:
	        case 3:
	        case 4:
	        case 7:
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
	        this.state = 56;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 52;
	            this.stringlist();
	            break;
	        case 9:
	        case 14:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 53;
	            this.string();
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 54;
	            this.match(sieveParser.NUMBER);
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 55;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.match(sieveParser.T__1);
	        this.state = 59;
	        this.test();
	        this.state = 64;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 60;
	            this.match(sieveParser.T__2);
	            this.state = 61;
	            this.test();
	            this.state = 66;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 67;
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
	        this.state = 69;
	        this.match(sieveParser.IDENTIFIER);
	        this.state = 70;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.match(sieveParser.T__4);
	        this.state = 73;
	        this.string();
	        this.state = 78;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 74;
	            this.match(sieveParser.T__2);
	            this.state = 75;
	            this.string();
	            this.state = 80;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 81;
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
	        this.state = 85;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 83;
	            this.match(sieveParser.QUOTEDSTRING);
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 84;
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
	        this.state = 87;
	        this.match(sieveParser.T__6);
	        this.state = 88;
	        this.commands();
	        this.state = 89;
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
	        this.state = 91;
	        this.match(sieveParser.T__8);
	        this.state = 96;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 94;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 20:
	                    this.state = 92;
	                    this.multilineliteral();
	                    break;
	                case 10:
	                    this.state = 93;
	                    this.multilinedotstart();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                } 
	            }
	            this.state = 98;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
	        }

	        this.state = 99;
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
	        this.state = 101;
	        this.match(sieveParser.T__10);
	        this.state = 102;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.match(sieveParser.OCTETNOTPERIOD);
	        this.state = 108;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===19) {
	            this.state = 105;
	            this.match(sieveParser.OCTETNOTCRLF);
	            this.state = 110;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.match(sieveParser.T__9);
	        this.state = 113; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 112;
	            this.match(sieveParser.OCTETNOTCRLF);
	            this.state = 115; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===19);
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

sieveParser.RULE_start_ = 0;
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

class Start_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sieveParser.RULE_start_;
    }

	commands() {
	    return this.getTypedRuleContext(CommandsContext,0);
	};

	EOF() {
	    return this.getToken(sieveParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof sieveListener ) {
	        listener.enterStart_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sieveListener ) {
	        listener.exitStart_(this);
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




sieveParser.Start_Context = Start_Context; 
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

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
