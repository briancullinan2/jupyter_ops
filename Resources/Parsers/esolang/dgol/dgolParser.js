// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/esolang/dgol/dgol.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import dgolListener from './dgolListener.js';
const serializedATN = [4,1,23,195,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,5,0,35,8,0,10,0,12,0,38,9,0,1,0,1,
0,5,0,42,8,0,10,0,12,0,45,9,0,1,0,1,0,3,0,49,8,0,1,0,5,0,52,8,0,10,0,12,
0,55,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,5,2,69,8,2,10,2,
12,2,72,9,2,3,2,74,8,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,
3,1,3,1,3,1,4,1,4,1,4,1,4,5,4,95,8,4,10,4,12,4,98,9,4,1,4,1,4,1,4,1,4,1,
5,1,5,1,5,1,5,1,6,3,6,109,8,6,1,6,5,6,112,8,6,10,6,12,6,115,9,6,1,7,1,7,
1,7,1,7,1,7,1,7,3,7,123,8,7,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,
135,8,9,1,10,1,10,1,10,5,10,140,8,10,10,10,12,10,143,9,10,1,10,1,10,1,10,
3,10,148,8,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,
1,12,1,12,3,12,164,8,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,3,13,
175,8,13,1,13,1,13,1,13,1,13,5,13,181,8,13,10,13,12,13,184,9,13,3,13,186,
8,13,1,13,1,13,1,14,1,14,1,15,1,15,1,15,1,15,0,0,16,0,2,4,6,8,10,12,14,16,
18,20,22,24,26,28,30,0,2,2,0,9,9,21,21,2,0,11,11,13,13,203,0,36,1,0,0,0,
2,58,1,0,0,0,4,62,1,0,0,0,6,82,1,0,0,0,8,90,1,0,0,0,10,103,1,0,0,0,12,113,
1,0,0,0,14,122,1,0,0,0,16,124,1,0,0,0,18,126,1,0,0,0,20,136,1,0,0,0,22,152,
1,0,0,0,24,159,1,0,0,0,26,170,1,0,0,0,28,189,1,0,0,0,30,191,1,0,0,0,32,35,
3,2,1,0,33,35,5,22,0,0,34,32,1,0,0,0,34,33,1,0,0,0,35,38,1,0,0,0,36,34,1,
0,0,0,36,37,1,0,0,0,37,43,1,0,0,0,38,36,1,0,0,0,39,42,3,4,2,0,40,42,5,22,
0,0,41,39,1,0,0,0,41,40,1,0,0,0,42,45,1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,
0,44,48,1,0,0,0,45,43,1,0,0,0,46,49,3,6,3,0,47,49,3,8,4,0,48,46,1,0,0,0,
48,47,1,0,0,0,49,53,1,0,0,0,50,52,5,22,0,0,51,50,1,0,0,0,52,55,1,0,0,0,53,
51,1,0,0,0,53,54,1,0,0,0,54,56,1,0,0,0,55,53,1,0,0,0,56,57,5,0,0,1,57,1,
1,0,0,0,58,59,5,1,0,0,59,60,5,21,0,0,60,61,5,22,0,0,61,3,1,0,0,0,62,63,5,
2,0,0,63,64,5,21,0,0,64,73,5,3,0,0,65,70,5,21,0,0,66,67,5,4,0,0,67,69,5,
21,0,0,68,66,1,0,0,0,69,72,1,0,0,0,70,68,1,0,0,0,70,71,1,0,0,0,71,74,1,0,
0,0,72,70,1,0,0,0,73,65,1,0,0,0,73,74,1,0,0,0,74,75,1,0,0,0,75,76,5,5,0,
0,76,77,5,22,0,0,77,78,3,12,6,0,78,79,5,6,0,0,79,80,5,21,0,0,80,81,5,22,
0,0,81,5,1,0,0,0,82,83,5,7,0,0,83,84,5,21,0,0,84,85,5,22,0,0,85,86,3,12,
6,0,86,87,5,6,0,0,87,88,5,21,0,0,88,89,5,22,0,0,89,7,1,0,0,0,90,91,5,8,0,
0,91,96,5,21,0,0,92,95,3,10,5,0,93,95,5,22,0,0,94,92,1,0,0,0,94,93,1,0,0,
0,95,98,1,0,0,0,96,94,1,0,0,0,96,97,1,0,0,0,97,99,1,0,0,0,98,96,1,0,0,0,
99,100,5,6,0,0,100,101,5,21,0,0,101,102,5,22,0,0,102,9,1,0,0,0,103,104,5,
2,0,0,104,105,5,21,0,0,105,106,5,22,0,0,106,11,1,0,0,0,107,109,3,14,7,0,
108,107,1,0,0,0,108,109,1,0,0,0,109,110,1,0,0,0,110,112,5,22,0,0,111,108,
1,0,0,0,112,115,1,0,0,0,113,111,1,0,0,0,113,114,1,0,0,0,114,13,1,0,0,0,115,
113,1,0,0,0,116,123,3,18,9,0,117,123,3,20,10,0,118,123,3,24,12,0,119,123,
3,26,13,0,120,123,3,28,14,0,121,123,3,30,15,0,122,116,1,0,0,0,122,117,1,
0,0,0,122,118,1,0,0,0,122,119,1,0,0,0,122,120,1,0,0,0,122,121,1,0,0,0,123,
15,1,0,0,0,124,125,7,0,0,0,125,17,1,0,0,0,126,127,5,10,0,0,127,134,5,21,
0,0,128,129,5,11,0,0,129,135,3,16,8,0,130,131,5,12,0,0,131,135,5,21,0,0,
132,133,5,13,0,0,133,135,3,16,8,0,134,128,1,0,0,0,134,130,1,0,0,0,134,132,
1,0,0,0,135,19,1,0,0,0,136,141,3,22,11,0,137,138,5,14,0,0,138,140,3,22,11,
0,139,137,1,0,0,0,140,143,1,0,0,0,141,139,1,0,0,0,141,142,1,0,0,0,142,147,
1,0,0,0,143,141,1,0,0,0,144,145,5,14,0,0,145,146,5,22,0,0,146,148,3,12,6,
0,147,144,1,0,0,0,147,148,1,0,0,0,148,149,1,0,0,0,149,150,5,6,0,0,150,151,
5,15,0,0,151,21,1,0,0,0,152,153,5,15,0,0,153,154,5,21,0,0,154,155,7,1,0,
0,155,156,5,21,0,0,156,157,5,22,0,0,157,158,3,12,6,0,158,23,1,0,0,0,159,
160,5,16,0,0,160,163,5,21,0,0,161,162,5,12,0,0,162,164,5,21,0,0,163,161,
1,0,0,0,163,164,1,0,0,0,164,165,1,0,0,0,165,166,5,22,0,0,166,167,3,12,6,
0,167,168,5,6,0,0,168,169,5,16,0,0,169,25,1,0,0,0,170,171,5,17,0,0,171,174,
5,21,0,0,172,173,5,18,0,0,173,175,5,21,0,0,174,172,1,0,0,0,174,175,1,0,0,
0,175,176,1,0,0,0,176,185,5,3,0,0,177,182,3,16,8,0,178,179,5,4,0,0,179,181,
3,16,8,0,180,178,1,0,0,0,181,184,1,0,0,0,182,180,1,0,0,0,182,183,1,0,0,0,
183,186,1,0,0,0,184,182,1,0,0,0,185,177,1,0,0,0,185,186,1,0,0,0,186,187,
1,0,0,0,187,188,5,5,0,0,188,27,1,0,0,0,189,190,5,19,0,0,190,29,1,0,0,0,191,
192,5,20,0,0,192,193,5,21,0,0,193,31,1,0,0,0,20,34,36,41,43,48,53,70,73,
94,96,108,113,122,134,141,147,163,174,182,185];


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



	module() {
	    let localctx = new ModuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, dgolParser.RULE_module);
	    var _la = 0;
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
	                case 1:
	                    this.state = 32;
	                    this.usedeclaration();
	                    break;
	                case 22:
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
	        while(_la===2 || _la===22) {
	            this.state = 41;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 2:
	                this.state = 39;
	                this.subroutinedefinition();
	                break;
	            case 22:
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
	        case 7:
	            this.state = 46;
	            this.programdefinition();
	            break;
	        case 8:
	            this.state = 47;
	            this.librarydefinition();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===22) {
	            this.state = 50;
	            this.match(dgolParser.NL);
	            this.state = 55;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 56;
	        this.match(dgolParser.EOF);
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
	        this.state = 58;
	        this.match(dgolParser.T__0);
	        this.state = 59;
	        this.match(dgolParser.IDENTIFER);
	        this.state = 60;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(dgolParser.T__1);
	        this.state = 63;
	        this.match(dgolParser.IDENTIFER);
	        this.state = 64;
	        this.match(dgolParser.T__2);
	        this.state = 73;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 65;
	            this.match(dgolParser.IDENTIFER);
	            this.state = 70;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4) {
	                this.state = 66;
	                this.match(dgolParser.T__3);
	                this.state = 67;
	                this.match(dgolParser.IDENTIFER);
	                this.state = 72;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 75;
	        this.match(dgolParser.T__4);
	        this.state = 76;
	        this.match(dgolParser.NL);
	        this.state = 77;
	        this.statements();
	        this.state = 78;
	        this.match(dgolParser.T__5);
	        this.state = 79;
	        this.match(dgolParser.IDENTIFER);
	        this.state = 80;
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
	        this.state = 82;
	        this.match(dgolParser.T__6);
	        this.state = 83;
	        this.match(dgolParser.IDENTIFER);
	        this.state = 84;
	        this.match(dgolParser.NL);
	        this.state = 85;
	        this.statements();
	        this.state = 86;
	        this.match(dgolParser.T__5);
	        this.state = 87;
	        this.match(dgolParser.IDENTIFER);
	        this.state = 88;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this.match(dgolParser.T__7);
	        this.state = 91;
	        this.match(dgolParser.IDENTIFER);
	        this.state = 96;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2 || _la===22) {
	            this.state = 94;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 2:
	                this.state = 92;
	                this.subroutinedeclaration();
	                break;
	            case 22:
	                this.state = 93;
	                this.match(dgolParser.NL);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 98;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 99;
	        this.match(dgolParser.T__5);
	        this.state = 100;
	        this.match(dgolParser.IDENTIFER);
	        this.state = 101;
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
	        this.state = 103;
	        this.match(dgolParser.T__1);
	        this.state = 104;
	        this.match(dgolParser.IDENTIFER);
	        this.state = 105;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 5997568) !== 0)) {
	            this.state = 108;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1803264) !== 0)) {
	                this.state = 107;
	                this.statement();
	            }

	            this.state = 110;
	            this.match(dgolParser.NL);
	            this.state = 115;
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
	        this.state = 122;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 116;
	            this.letstatement();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 117;
	            this.ifstatement();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 118;
	            this.dostatement();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 119;
	            this.callstatement();
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 120;
	            this.returnstatement();
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 121;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124;
	        _la = this._input.LA(1);
	        if(!(_la===9 || _la===21)) {
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
	        this.state = 126;
	        this.match(dgolParser.T__9);
	        this.state = 127;
	        this.match(dgolParser.IDENTIFER);
	        this.state = 134;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	            this.state = 128;
	            this.match(dgolParser.T__10);
	            this.state = 129;
	            this.identifierorzero();
	            break;
	        case 12:
	            this.state = 130;
	            this.match(dgolParser.T__11);
	            this.state = 131;
	            this.match(dgolParser.IDENTIFER);
	            break;
	        case 13:
	            this.state = 132;
	            this.match(dgolParser.T__12);
	            this.state = 133;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.ifhead();
	        this.state = 141;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 137;
	                this.match(dgolParser.T__13);
	                this.state = 138;
	                this.ifhead(); 
	            }
	            this.state = 143;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	        }

	        this.state = 147;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14) {
	            this.state = 144;
	            this.match(dgolParser.T__13);
	            this.state = 145;
	            this.match(dgolParser.NL);
	            this.state = 146;
	            this.statements();
	        }

	        this.state = 149;
	        this.match(dgolParser.T__5);
	        this.state = 150;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
	        this.match(dgolParser.T__14);
	        this.state = 153;
	        this.match(dgolParser.IDENTIFER);
	        this.state = 154;
	        _la = this._input.LA(1);
	        if(!(_la===11 || _la===13)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 155;
	        this.match(dgolParser.IDENTIFER);
	        this.state = 156;
	        this.match(dgolParser.NL);
	        this.state = 157;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 159;
	        this.match(dgolParser.T__15);
	        this.state = 160;
	        this.match(dgolParser.IDENTIFER);
	        this.state = 163;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 161;
	            this.match(dgolParser.T__11);
	            this.state = 162;
	            this.match(dgolParser.IDENTIFER);
	        }

	        this.state = 165;
	        this.match(dgolParser.NL);
	        this.state = 166;
	        this.statements();
	        this.state = 167;
	        this.match(dgolParser.T__5);
	        this.state = 168;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 170;
	        this.match(dgolParser.T__16);
	        this.state = 171;
	        this.match(dgolParser.IDENTIFER);
	        this.state = 174;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 172;
	            this.match(dgolParser.T__17);
	            this.state = 173;
	            this.match(dgolParser.IDENTIFER);
	        }

	        this.state = 176;
	        this.match(dgolParser.T__2);
	        this.state = 185;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9 || _la===21) {
	            this.state = 177;
	            this.identifierorzero();
	            this.state = 182;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4) {
	                this.state = 178;
	                this.match(dgolParser.T__3);
	                this.state = 179;
	                this.identifierorzero();
	                this.state = 184;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 187;
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
	        this.state = 189;
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
	        this.state = 191;
	        this.match(dgolParser.T__19);
	        this.state = 192;
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

	EOF() {
	    return this.getToken(dgolParser.EOF, 0);
	};

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

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
