// Generated from ./dgol/dgol.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import dgolListener from './dgolListener.js';
const serializedATN = [4,1,23,193,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,5,0,35,8,0,10,0,12,0,38,9,0,1,0,1,
0,5,0,42,8,0,10,0,12,0,45,9,0,1,0,1,0,3,0,49,8,0,1,0,5,0,52,8,0,10,0,12,
0,55,9,0,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,5,2,67,8,2,10,2,12,2,70,
9,2,3,2,72,8,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
3,1,4,1,4,1,4,1,4,5,4,93,8,4,10,4,12,4,96,9,4,1,4,1,4,1,4,1,4,1,5,1,5,1,
5,1,5,1,6,3,6,107,8,6,1,6,5,6,110,8,6,10,6,12,6,113,9,6,1,7,1,7,1,7,1,7,
1,7,1,7,3,7,121,8,7,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,133,8,9,
1,10,1,10,1,10,5,10,138,8,10,10,10,12,10,141,9,10,1,10,1,10,1,10,3,10,146,
8,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,
12,3,12,162,8,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,3,13,173,8,
13,1,13,1,13,1,13,1,13,5,13,179,8,13,10,13,12,13,182,9,13,3,13,184,8,13,
1,13,1,13,1,14,1,14,1,15,1,15,1,15,1,15,0,0,16,0,2,4,6,8,10,12,14,16,18,
20,22,24,26,28,30,0,2,2,0,9,9,21,21,2,0,11,11,13,13,201,0,36,1,0,0,0,2,56,
1,0,0,0,4,60,1,0,0,0,6,80,1,0,0,0,8,88,1,0,0,0,10,101,1,0,0,0,12,111,1,0,
0,0,14,120,1,0,0,0,16,122,1,0,0,0,18,124,1,0,0,0,20,134,1,0,0,0,22,150,1,
0,0,0,24,157,1,0,0,0,26,168,1,0,0,0,28,187,1,0,0,0,30,189,1,0,0,0,32,35,
3,2,1,0,33,35,5,22,0,0,34,32,1,0,0,0,34,33,1,0,0,0,35,38,1,0,0,0,36,34,1,
0,0,0,36,37,1,0,0,0,37,43,1,0,0,0,38,36,1,0,0,0,39,42,3,4,2,0,40,42,5,22,
0,0,41,39,1,0,0,0,41,40,1,0,0,0,42,45,1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,
0,44,48,1,0,0,0,45,43,1,0,0,0,46,49,3,6,3,0,47,49,3,8,4,0,48,46,1,0,0,0,
48,47,1,0,0,0,49,53,1,0,0,0,50,52,5,22,0,0,51,50,1,0,0,0,52,55,1,0,0,0,53,
51,1,0,0,0,53,54,1,0,0,0,54,1,1,0,0,0,55,53,1,0,0,0,56,57,5,1,0,0,57,58,
5,21,0,0,58,59,5,22,0,0,59,3,1,0,0,0,60,61,5,2,0,0,61,62,5,21,0,0,62,71,
5,3,0,0,63,68,5,21,0,0,64,65,5,4,0,0,65,67,5,21,0,0,66,64,1,0,0,0,67,70,
1,0,0,0,68,66,1,0,0,0,68,69,1,0,0,0,69,72,1,0,0,0,70,68,1,0,0,0,71,63,1,
0,0,0,71,72,1,0,0,0,72,73,1,0,0,0,73,74,5,5,0,0,74,75,5,22,0,0,75,76,3,12,
6,0,76,77,5,6,0,0,77,78,5,21,0,0,78,79,5,22,0,0,79,5,1,0,0,0,80,81,5,7,0,
0,81,82,5,21,0,0,82,83,5,22,0,0,83,84,3,12,6,0,84,85,5,6,0,0,85,86,5,21,
0,0,86,87,5,22,0,0,87,7,1,0,0,0,88,89,5,8,0,0,89,94,5,21,0,0,90,93,3,10,
5,0,91,93,5,22,0,0,92,90,1,0,0,0,92,91,1,0,0,0,93,96,1,0,0,0,94,92,1,0,0,
0,94,95,1,0,0,0,95,97,1,0,0,0,96,94,1,0,0,0,97,98,5,6,0,0,98,99,5,21,0,0,
99,100,5,22,0,0,100,9,1,0,0,0,101,102,5,2,0,0,102,103,5,21,0,0,103,104,5,
22,0,0,104,11,1,0,0,0,105,107,3,14,7,0,106,105,1,0,0,0,106,107,1,0,0,0,107,
108,1,0,0,0,108,110,5,22,0,0,109,106,1,0,0,0,110,113,1,0,0,0,111,109,1,0,
0,0,111,112,1,0,0,0,112,13,1,0,0,0,113,111,1,0,0,0,114,121,3,18,9,0,115,
121,3,20,10,0,116,121,3,24,12,0,117,121,3,26,13,0,118,121,3,28,14,0,119,
121,3,30,15,0,120,114,1,0,0,0,120,115,1,0,0,0,120,116,1,0,0,0,120,117,1,
0,0,0,120,118,1,0,0,0,120,119,1,0,0,0,121,15,1,0,0,0,122,123,7,0,0,0,123,
17,1,0,0,0,124,125,5,10,0,0,125,132,5,21,0,0,126,127,5,11,0,0,127,133,3,
16,8,0,128,129,5,12,0,0,129,133,5,21,0,0,130,131,5,13,0,0,131,133,3,16,8,
0,132,126,1,0,0,0,132,128,1,0,0,0,132,130,1,0,0,0,133,19,1,0,0,0,134,139,
3,22,11,0,135,136,5,14,0,0,136,138,3,22,11,0,137,135,1,0,0,0,138,141,1,0,
0,0,139,137,1,0,0,0,139,140,1,0,0,0,140,145,1,0,0,0,141,139,1,0,0,0,142,
143,5,14,0,0,143,144,5,22,0,0,144,146,3,12,6,0,145,142,1,0,0,0,145,146,1,
0,0,0,146,147,1,0,0,0,147,148,5,6,0,0,148,149,5,15,0,0,149,21,1,0,0,0,150,
151,5,15,0,0,151,152,5,21,0,0,152,153,7,1,0,0,153,154,5,21,0,0,154,155,5,
22,0,0,155,156,3,12,6,0,156,23,1,0,0,0,157,158,5,16,0,0,158,161,5,21,0,0,
159,160,5,12,0,0,160,162,5,21,0,0,161,159,1,0,0,0,161,162,1,0,0,0,162,163,
1,0,0,0,163,164,5,22,0,0,164,165,3,12,6,0,165,166,5,6,0,0,166,167,5,16,0,
0,167,25,1,0,0,0,168,169,5,17,0,0,169,172,5,21,0,0,170,171,5,18,0,0,171,
173,5,21,0,0,172,170,1,0,0,0,172,173,1,0,0,0,173,174,1,0,0,0,174,183,5,3,
0,0,175,180,3,16,8,0,176,177,5,4,0,0,177,179,3,16,8,0,178,176,1,0,0,0,179,
182,1,0,0,0,180,178,1,0,0,0,180,181,1,0,0,0,181,184,1,0,0,0,182,180,1,0,
0,0,183,175,1,0,0,0,183,184,1,0,0,0,184,185,1,0,0,0,185,186,5,5,0,0,186,
27,1,0,0,0,187,188,5,19,0,0,188,29,1,0,0,0,189,190,5,20,0,0,190,191,5,21,
0,0,191,31,1,0,0,0,20,34,36,41,43,48,53,68,71,92,94,106,111,120,132,139,
145,161,172,180,183];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class dgolParser extends antlr4.Parser {

    static grammarFileName = "dgol.g4";
    static literalNames = [ null, "'USE'", "'SUBROUTINE'", "'('", "','", 
                            "')'", "'END'", "'PROGRAM'", "'LIBRARY'", "'0'", 
                            "'LET'", "'='", "'<'", "'>'", "'ELSE'", "'IF'", 
                            "'DO'", "'CALL'", "'.'", "'RETURN'", "'EXIT'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "IDENTIFER", 
                             "NL", "WS" ];
    static ruleNames = [ "module", "usedeclaration", "subroutinedefinition", 
                         "programdefinition", "librarydefinition", "subroutinedeclaration", 
                         "statements", "statement", "identifierorzero", 
                         "letstatement", "ifstatement", "ifhead", "dostatement", 
                         "callstatement", "returnstatement", "exitstatement" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = dgolParser.ruleNames;
        this.literalNames = dgolParser.literalNames;
        this.symbolicNames = dgolParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	module() {
	    let localctx = new ModuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, dgolParser.RULE_module);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 34;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case dgolParser.T__0:
	                    this.state = 32;
	                    this.usedeclaration();
	                    break;
	                case dgolParser.NL:
	                    this.state = 33;
	                    this.match(dgolParser.NL);
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                } 
	            }
	            this.state = 38;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	        }

	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===dgolParser.T__1 || _la===dgolParser.NL) {
	            this.state = 41;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case dgolParser.T__1:
	                this.state = 39;
	                this.subroutinedefinition();
	                break;
	            case dgolParser.NL:
	                this.state = 40;
	                this.match(dgolParser.NL);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 45;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 48;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case dgolParser.T__6:
	            this.state = 46;
	            this.programdefinition();
	            break;
	        case dgolParser.T__7:
	            this.state = 47;
	            this.librarydefinition();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===dgolParser.NL) {
	            this.state = 50;
	            this.match(dgolParser.NL);
	            this.state = 55;
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



	usedeclaration() {
	    let localctx = new UsedeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, dgolParser.RULE_usedeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.match(dgolParser.T__0);
	        this.state = 57;
	        this.match(dgolParser.IDENTIFER);
	        this.state = 58;
	        this.match(dgolParser.NL);
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



	subroutinedefinition() {
	    let localctx = new SubroutinedefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, dgolParser.RULE_subroutinedefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.match(dgolParser.T__1);
	        this.state = 61;
	        this.match(dgolParser.IDENTIFER);
	        this.state = 62;
	        this.match(dgolParser.T__2);
	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===dgolParser.IDENTIFER) {
	            this.state = 63;
	            this.match(dgolParser.IDENTIFER);
	            this.state = 68;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===dgolParser.T__3) {
	                this.state = 64;
	                this.match(dgolParser.T__3);
	                this.state = 65;
	                this.match(dgolParser.IDENTIFER);
	                this.state = 70;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 73;
	        this.match(dgolParser.T__4);
	        this.state = 74;
	        this.match(dgolParser.NL);
	        this.state = 75;
	        this.statements();
	        this.state = 76;
	        this.match(dgolParser.T__5);
	        this.state = 77;
	        this.match(dgolParser.IDENTIFER);
	        this.state = 78;
	        this.match(dgolParser.NL);
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



	programdefinition() {
	    let localctx = new ProgramdefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, dgolParser.RULE_programdefinition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.match(dgolParser.T__6);
	        this.state = 81;
	        this.match(dgolParser.IDENTIFER);
	        this.state = 82;
	        this.match(dgolParser.NL);
	        this.state = 83;
	        this.statements();
	        this.state = 84;
	        this.match(dgolParser.T__5);
	        this.state = 85;
	        this.match(dgolParser.IDENTIFER);
	        this.state = 86;
	        this.match(dgolParser.NL);
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



	librarydefinition() {
	    let localctx = new LibrarydefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, dgolParser.RULE_librarydefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.match(dgolParser.T__7);
	        this.state = 89;
	        this.match(dgolParser.IDENTIFER);
	        this.state = 94;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===dgolParser.T__1 || _la===dgolParser.NL) {
	            this.state = 92;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case dgolParser.T__1:
	                this.state = 90;
	                this.subroutinedeclaration();
	                break;
	            case dgolParser.NL:
	                this.state = 91;
	                this.match(dgolParser.NL);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 96;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 97;
	        this.match(dgolParser.T__5);
	        this.state = 98;
	        this.match(dgolParser.IDENTIFER);
	        this.state = 99;
	        this.match(dgolParser.NL);
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



	subroutinedeclaration() {
	    let localctx = new SubroutinedeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, dgolParser.RULE_subroutinedeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.match(dgolParser.T__1);
	        this.state = 102;
	        this.match(dgolParser.IDENTIFER);
	        this.state = 103;
	        this.match(dgolParser.NL);
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
	    this.enterRule(localctx, 12, dgolParser.RULE_statements);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << dgolParser.T__9) | (1 << dgolParser.T__14) | (1 << dgolParser.T__15) | (1 << dgolParser.T__16) | (1 << dgolParser.T__18) | (1 << dgolParser.T__19) | (1 << dgolParser.NL))) !== 0)) {
	            this.state = 106;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << dgolParser.T__9) | (1 << dgolParser.T__14) | (1 << dgolParser.T__15) | (1 << dgolParser.T__16) | (1 << dgolParser.T__18) | (1 << dgolParser.T__19))) !== 0)) {
	                this.state = 105;
	                this.statement();
	            }

	            this.state = 108;
	            this.match(dgolParser.NL);
	            this.state = 113;
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, dgolParser.RULE_statement);
	    try {
	        this.state = 120;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case dgolParser.T__9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 114;
	            this.letstatement();
	            break;
	        case dgolParser.T__14:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 115;
	            this.ifstatement();
	            break;
	        case dgolParser.T__15:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 116;
	            this.dostatement();
	            break;
	        case dgolParser.T__16:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 117;
	            this.callstatement();
	            break;
	        case dgolParser.T__18:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 118;
	            this.returnstatement();
	            break;
	        case dgolParser.T__19:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 119;
	            this.exitstatement();
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



	identifierorzero() {
	    let localctx = new IdentifierorzeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, dgolParser.RULE_identifierorzero);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        _la = this._input.LA(1);
	        if(!(_la===dgolParser.T__8 || _la===dgolParser.IDENTIFER)) {
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



	letstatement() {
	    let localctx = new LetstatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, dgolParser.RULE_letstatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124;
	        this.match(dgolParser.T__9);
	        this.state = 125;
	        this.match(dgolParser.IDENTIFER);
	        this.state = 132;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case dgolParser.T__10:
	            this.state = 126;
	            this.match(dgolParser.T__10);
	            this.state = 127;
	            this.identifierorzero();
	            break;
	        case dgolParser.T__11:
	            this.state = 128;
	            this.match(dgolParser.T__11);
	            this.state = 129;
	            this.match(dgolParser.IDENTIFER);
	            break;
	        case dgolParser.T__12:
	            this.state = 130;
	            this.match(dgolParser.T__12);
	            this.state = 131;
	            this.identifierorzero();
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



	ifstatement() {
	    let localctx = new IfstatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, dgolParser.RULE_ifstatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this.ifhead();
	        this.state = 139;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 135;
	                this.match(dgolParser.T__13);
	                this.state = 136;
	                this.ifhead(); 
	            }
	            this.state = 141;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	        }

	        this.state = 145;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===dgolParser.T__13) {
	            this.state = 142;
	            this.match(dgolParser.T__13);
	            this.state = 143;
	            this.match(dgolParser.NL);
	            this.state = 144;
	            this.statements();
	        }

	        this.state = 147;
	        this.match(dgolParser.T__5);
	        this.state = 148;
	        this.match(dgolParser.T__14);
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



	ifhead() {
	    let localctx = new IfheadContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, dgolParser.RULE_ifhead);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 150;
	        this.match(dgolParser.T__14);
	        this.state = 151;
	        this.match(dgolParser.IDENTIFER);
	        this.state = 152;
	        _la = this._input.LA(1);
	        if(!(_la===dgolParser.T__10 || _la===dgolParser.T__12)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 153;
	        this.match(dgolParser.IDENTIFER);
	        this.state = 154;
	        this.match(dgolParser.NL);
	        this.state = 155;
	        this.statements();
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



	dostatement() {
	    let localctx = new DostatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, dgolParser.RULE_dostatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this.match(dgolParser.T__15);
	        this.state = 158;
	        this.match(dgolParser.IDENTIFER);
	        this.state = 161;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===dgolParser.T__11) {
	            this.state = 159;
	            this.match(dgolParser.T__11);
	            this.state = 160;
	            this.match(dgolParser.IDENTIFER);
	        }

	        this.state = 163;
	        this.match(dgolParser.NL);
	        this.state = 164;
	        this.statements();
	        this.state = 165;
	        this.match(dgolParser.T__5);
	        this.state = 166;
	        this.match(dgolParser.T__15);
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



	callstatement() {
	    let localctx = new CallstatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, dgolParser.RULE_callstatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        this.match(dgolParser.T__16);
	        this.state = 169;
	        this.match(dgolParser.IDENTIFER);
	        this.state = 172;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===dgolParser.T__17) {
	            this.state = 170;
	            this.match(dgolParser.T__17);
	            this.state = 171;
	            this.match(dgolParser.IDENTIFER);
	        }

	        this.state = 174;
	        this.match(dgolParser.T__2);
	        this.state = 183;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===dgolParser.T__8 || _la===dgolParser.IDENTIFER) {
	            this.state = 175;
	            this.identifierorzero();
	            this.state = 180;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===dgolParser.T__3) {
	                this.state = 176;
	                this.match(dgolParser.T__3);
	                this.state = 177;
	                this.identifierorzero();
	                this.state = 182;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 185;
	        this.match(dgolParser.T__4);
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



	returnstatement() {
	    let localctx = new ReturnstatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, dgolParser.RULE_returnstatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 187;
	        this.match(dgolParser.T__18);
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



	exitstatement() {
	    let localctx = new ExitstatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, dgolParser.RULE_exitstatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 189;
	        this.match(dgolParser.T__19);
	        this.state = 190;
	        this.match(dgolParser.IDENTIFER);
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

dgolParser.EOF = antlr4.Token.EOF;
dgolParser.T__0 = 1;
dgolParser.T__1 = 2;
dgolParser.T__2 = 3;
dgolParser.T__3 = 4;
dgolParser.T__4 = 5;
dgolParser.T__5 = 6;
dgolParser.T__6 = 7;
dgolParser.T__7 = 8;
dgolParser.T__8 = 9;
dgolParser.T__9 = 10;
dgolParser.T__10 = 11;
dgolParser.T__11 = 12;
dgolParser.T__12 = 13;
dgolParser.T__13 = 14;
dgolParser.T__14 = 15;
dgolParser.T__15 = 16;
dgolParser.T__16 = 17;
dgolParser.T__17 = 18;
dgolParser.T__18 = 19;
dgolParser.T__19 = 20;
dgolParser.IDENTIFER = 21;
dgolParser.NL = 22;
dgolParser.WS = 23;

dgolParser.RULE_module = 0;
dgolParser.RULE_usedeclaration = 1;
dgolParser.RULE_subroutinedefinition = 2;
dgolParser.RULE_programdefinition = 3;
dgolParser.RULE_librarydefinition = 4;
dgolParser.RULE_subroutinedeclaration = 5;
dgolParser.RULE_statements = 6;
dgolParser.RULE_statement = 7;
dgolParser.RULE_identifierorzero = 8;
dgolParser.RULE_letstatement = 9;
dgolParser.RULE_ifstatement = 10;
dgolParser.RULE_ifhead = 11;
dgolParser.RULE_dostatement = 12;
dgolParser.RULE_callstatement = 13;
dgolParser.RULE_returnstatement = 14;
dgolParser.RULE_exitstatement = 15;

class ModuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dgolParser.RULE_module;
    }

	programdefinition() {
	    return this.getTypedRuleContext(ProgramdefinitionContext,0);
	};

	librarydefinition() {
	    return this.getTypedRuleContext(LibrarydefinitionContext,0);
	};

	usedeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UsedeclarationContext);
	    } else {
	        return this.getTypedRuleContext(UsedeclarationContext,i);
	    }
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(dgolParser.NL);
	    } else {
	        return this.getToken(dgolParser.NL, i);
	    }
	};


	subroutinedefinition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SubroutinedefinitionContext);
	    } else {
	        return this.getTypedRuleContext(SubroutinedefinitionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof dgolListener ) {
	        listener.enterModule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dgolListener ) {
	        listener.exitModule(this);
		}
	}


}



class UsedeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dgolParser.RULE_usedeclaration;
    }

	IDENTIFER() {
	    return this.getToken(dgolParser.IDENTIFER, 0);
	};

	NL() {
	    return this.getToken(dgolParser.NL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof dgolListener ) {
	        listener.enterUsedeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dgolListener ) {
	        listener.exitUsedeclaration(this);
		}
	}


}



class SubroutinedefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dgolParser.RULE_subroutinedefinition;
    }

	IDENTIFER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(dgolParser.IDENTIFER);
	    } else {
	        return this.getToken(dgolParser.IDENTIFER, i);
	    }
	};


	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(dgolParser.NL);
	    } else {
	        return this.getToken(dgolParser.NL, i);
	    }
	};


	statements() {
	    return this.getTypedRuleContext(StatementsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof dgolListener ) {
	        listener.enterSubroutinedefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dgolListener ) {
	        listener.exitSubroutinedefinition(this);
		}
	}


}



class ProgramdefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dgolParser.RULE_programdefinition;
    }

	IDENTIFER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(dgolParser.IDENTIFER);
	    } else {
	        return this.getToken(dgolParser.IDENTIFER, i);
	    }
	};


	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(dgolParser.NL);
	    } else {
	        return this.getToken(dgolParser.NL, i);
	    }
	};


	statements() {
	    return this.getTypedRuleContext(StatementsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof dgolListener ) {
	        listener.enterProgramdefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dgolListener ) {
	        listener.exitProgramdefinition(this);
		}
	}


}



class LibrarydefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dgolParser.RULE_librarydefinition;
    }

	IDENTIFER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(dgolParser.IDENTIFER);
	    } else {
	        return this.getToken(dgolParser.IDENTIFER, i);
	    }
	};


	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(dgolParser.NL);
	    } else {
	        return this.getToken(dgolParser.NL, i);
	    }
	};


	subroutinedeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SubroutinedeclarationContext);
	    } else {
	        return this.getTypedRuleContext(SubroutinedeclarationContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof dgolListener ) {
	        listener.enterLibrarydefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dgolListener ) {
	        listener.exitLibrarydefinition(this);
		}
	}


}



class SubroutinedeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dgolParser.RULE_subroutinedeclaration;
    }

	IDENTIFER() {
	    return this.getToken(dgolParser.IDENTIFER, 0);
	};

	NL() {
	    return this.getToken(dgolParser.NL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof dgolListener ) {
	        listener.enterSubroutinedeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dgolListener ) {
	        listener.exitSubroutinedeclaration(this);
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
        this.ruleIndex = dgolParser.RULE_statements;
    }

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(dgolParser.NL);
	    } else {
	        return this.getToken(dgolParser.NL, i);
	    }
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
	    if(listener instanceof dgolListener ) {
	        listener.enterStatements(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dgolListener ) {
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
        this.ruleIndex = dgolParser.RULE_statement;
    }

	letstatement() {
	    return this.getTypedRuleContext(LetstatementContext,0);
	};

	ifstatement() {
	    return this.getTypedRuleContext(IfstatementContext,0);
	};

	dostatement() {
	    return this.getTypedRuleContext(DostatementContext,0);
	};

	callstatement() {
	    return this.getTypedRuleContext(CallstatementContext,0);
	};

	returnstatement() {
	    return this.getTypedRuleContext(ReturnstatementContext,0);
	};

	exitstatement() {
	    return this.getTypedRuleContext(ExitstatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof dgolListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dgolListener ) {
	        listener.exitStatement(this);
		}
	}


}



class IdentifierorzeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dgolParser.RULE_identifierorzero;
    }

	IDENTIFER() {
	    return this.getToken(dgolParser.IDENTIFER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof dgolListener ) {
	        listener.enterIdentifierorzero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dgolListener ) {
	        listener.exitIdentifierorzero(this);
		}
	}


}



class LetstatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dgolParser.RULE_letstatement;
    }

	IDENTIFER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(dgolParser.IDENTIFER);
	    } else {
	        return this.getToken(dgolParser.IDENTIFER, i);
	    }
	};


	identifierorzero() {
	    return this.getTypedRuleContext(IdentifierorzeroContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof dgolListener ) {
	        listener.enterLetstatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dgolListener ) {
	        listener.exitLetstatement(this);
		}
	}


}



class IfstatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dgolParser.RULE_ifstatement;
    }

	ifhead = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IfheadContext);
	    } else {
	        return this.getTypedRuleContext(IfheadContext,i);
	    }
	};

	NL() {
	    return this.getToken(dgolParser.NL, 0);
	};

	statements() {
	    return this.getTypedRuleContext(StatementsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof dgolListener ) {
	        listener.enterIfstatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dgolListener ) {
	        listener.exitIfstatement(this);
		}
	}


}



class IfheadContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dgolParser.RULE_ifhead;
    }

	IDENTIFER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(dgolParser.IDENTIFER);
	    } else {
	        return this.getToken(dgolParser.IDENTIFER, i);
	    }
	};


	NL() {
	    return this.getToken(dgolParser.NL, 0);
	};

	statements() {
	    return this.getTypedRuleContext(StatementsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof dgolListener ) {
	        listener.enterIfhead(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dgolListener ) {
	        listener.exitIfhead(this);
		}
	}


}



class DostatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dgolParser.RULE_dostatement;
    }

	IDENTIFER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(dgolParser.IDENTIFER);
	    } else {
	        return this.getToken(dgolParser.IDENTIFER, i);
	    }
	};


	NL() {
	    return this.getToken(dgolParser.NL, 0);
	};

	statements() {
	    return this.getTypedRuleContext(StatementsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof dgolListener ) {
	        listener.enterDostatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dgolListener ) {
	        listener.exitDostatement(this);
		}
	}


}



class CallstatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dgolParser.RULE_callstatement;
    }

	IDENTIFER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(dgolParser.IDENTIFER);
	    } else {
	        return this.getToken(dgolParser.IDENTIFER, i);
	    }
	};


	identifierorzero = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierorzeroContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierorzeroContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof dgolListener ) {
	        listener.enterCallstatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dgolListener ) {
	        listener.exitCallstatement(this);
		}
	}


}



class ReturnstatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dgolParser.RULE_returnstatement;
    }


	enterRule(listener) {
	    if(listener instanceof dgolListener ) {
	        listener.enterReturnstatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dgolListener ) {
	        listener.exitReturnstatement(this);
		}
	}


}



class ExitstatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dgolParser.RULE_exitstatement;
    }

	IDENTIFER() {
	    return this.getToken(dgolParser.IDENTIFER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof dgolListener ) {
	        listener.enterExitstatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dgolListener ) {
	        listener.exitExitstatement(this);
		}
	}


}




dgolParser.ModuleContext = ModuleContext; 
dgolParser.UsedeclarationContext = UsedeclarationContext; 
dgolParser.SubroutinedefinitionContext = SubroutinedefinitionContext; 
dgolParser.ProgramdefinitionContext = ProgramdefinitionContext; 
dgolParser.LibrarydefinitionContext = LibrarydefinitionContext; 
dgolParser.SubroutinedeclarationContext = SubroutinedeclarationContext; 
dgolParser.StatementsContext = StatementsContext; 
dgolParser.StatementContext = StatementContext; 
dgolParser.IdentifierorzeroContext = IdentifierorzeroContext; 
dgolParser.LetstatementContext = LetstatementContext; 
dgolParser.IfstatementContext = IfstatementContext; 
dgolParser.IfheadContext = IfheadContext; 
dgolParser.DostatementContext = DostatementContext; 
dgolParser.CallstatementContext = CallstatementContext; 
dgolParser.ReturnstatementContext = ReturnstatementContext; 
dgolParser.ExitstatementContext = ExitstatementContext; 
