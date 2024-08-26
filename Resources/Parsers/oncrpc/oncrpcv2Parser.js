// Generated from Resources/Parsers/oncrpc/oncrpcv2.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import oncrpcv2Listener from './oncrpcv2Listener.js';
const serializedATN = [4,1,39,284,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,1,0,1,0,1,0,1,0,1,0,5,0,48,8,0,10,0,12,0,51,9,0,1,0,1,0,1,0,1,0,
1,0,1,1,1,1,1,1,1,1,1,1,5,1,63,8,1,10,1,12,1,66,9,1,1,1,1,1,1,1,1,1,1,1,
1,2,1,2,1,2,1,2,1,2,1,2,5,2,79,8,2,10,2,12,2,82,9,2,1,2,1,2,1,2,1,2,1,2,
1,3,1,3,3,3,91,8,3,1,4,1,4,3,4,95,8,4,1,5,1,5,5,5,99,8,5,10,5,12,5,102,9,
5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,117,8,6,1,6,1,
6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,131,8,6,1,6,1,6,1,6,1,6,1,
6,3,6,138,8,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,146,8,6,1,7,1,7,3,7,150,8,7,1,
8,1,8,1,9,3,9,155,8,9,1,9,1,9,3,9,159,8,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,
9,1,9,3,9,170,8,9,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
1,11,5,11,184,8,11,10,11,12,11,187,9,11,1,11,1,11,1,12,1,12,1,12,1,13,1,
13,1,13,1,13,1,13,1,13,1,13,5,13,201,8,13,10,13,12,13,204,9,13,1,13,1,13,
1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,5,15,218,8,15,10,15,12,
15,221,9,15,1,15,1,15,1,15,1,15,1,15,3,15,228,8,15,1,15,1,15,1,16,1,16,1,
16,1,16,1,16,1,16,1,16,1,16,5,16,240,8,16,10,16,12,16,243,9,16,1,16,1,16,
1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,
18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,273,8,18,
1,19,1,19,3,19,277,8,19,1,20,4,20,280,8,20,11,20,12,20,281,1,20,0,0,21,0,
2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,0,1,1,0,35,37,301,
0,42,1,0,0,0,2,57,1,0,0,0,4,72,1,0,0,0,6,90,1,0,0,0,8,94,1,0,0,0,10,100,
1,0,0,0,12,145,1,0,0,0,14,149,1,0,0,0,16,151,1,0,0,0,18,169,1,0,0,0,20,171,
1,0,0,0,22,174,1,0,0,0,24,190,1,0,0,0,26,193,1,0,0,0,28,207,1,0,0,0,30,210,
1,0,0,0,32,231,1,0,0,0,34,247,1,0,0,0,36,272,1,0,0,0,38,276,1,0,0,0,40,279,
1,0,0,0,42,43,5,1,0,0,43,44,5,38,0,0,44,45,5,2,0,0,45,49,3,2,1,0,46,48,3,
2,1,0,47,46,1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,50,52,1,0,
0,0,51,49,1,0,0,0,52,53,5,3,0,0,53,54,5,4,0,0,54,55,3,16,8,0,55,56,5,5,0,
0,56,1,1,0,0,0,57,58,5,6,0,0,58,59,5,38,0,0,59,60,5,2,0,0,60,64,3,4,2,0,
61,63,3,4,2,0,62,61,1,0,0,0,63,66,1,0,0,0,64,62,1,0,0,0,64,65,1,0,0,0,65,
67,1,0,0,0,66,64,1,0,0,0,67,68,5,3,0,0,68,69,5,4,0,0,69,70,3,16,8,0,70,71,
5,5,0,0,71,3,1,0,0,0,72,73,3,6,3,0,73,74,5,38,0,0,74,75,5,7,0,0,75,80,3,
8,4,0,76,77,5,8,0,0,77,79,3,18,9,0,78,76,1,0,0,0,79,82,1,0,0,0,80,78,1,0,
0,0,80,81,1,0,0,0,81,83,1,0,0,0,82,80,1,0,0,0,83,84,5,9,0,0,84,85,5,4,0,
0,85,86,3,16,8,0,86,87,5,5,0,0,87,5,1,0,0,0,88,91,5,10,0,0,89,91,3,18,9,
0,90,88,1,0,0,0,90,89,1,0,0,0,91,7,1,0,0,0,92,95,5,10,0,0,93,95,3,18,9,0,
94,92,1,0,0,0,94,93,1,0,0,0,95,9,1,0,0,0,96,99,3,40,20,0,97,99,3,0,0,0,98,
96,1,0,0,0,98,97,1,0,0,0,99,102,1,0,0,0,100,98,1,0,0,0,100,101,1,0,0,0,101,
11,1,0,0,0,102,100,1,0,0,0,103,104,3,18,9,0,104,105,5,38,0,0,105,146,1,0,
0,0,106,107,3,18,9,0,107,108,5,38,0,0,108,109,5,11,0,0,109,110,3,14,7,0,
110,111,5,12,0,0,111,146,1,0,0,0,112,113,3,18,9,0,113,114,5,38,0,0,114,116,
5,13,0,0,115,117,3,14,7,0,116,115,1,0,0,0,116,117,1,0,0,0,117,118,1,0,0,
0,118,119,5,14,0,0,119,146,1,0,0,0,120,121,5,15,0,0,121,122,5,38,0,0,122,
123,5,11,0,0,123,124,3,14,7,0,124,125,5,12,0,0,125,146,1,0,0,0,126,127,5,
15,0,0,127,128,5,38,0,0,128,130,5,13,0,0,129,131,3,14,7,0,130,129,1,0,0,
0,130,131,1,0,0,0,131,132,1,0,0,0,132,146,5,14,0,0,133,134,5,16,0,0,134,
135,5,38,0,0,135,137,5,13,0,0,136,138,3,14,7,0,137,136,1,0,0,0,137,138,1,
0,0,0,138,139,1,0,0,0,139,146,5,14,0,0,140,141,3,18,9,0,141,142,5,17,0,0,
142,143,5,38,0,0,143,146,1,0,0,0,144,146,5,10,0,0,145,103,1,0,0,0,145,106,
1,0,0,0,145,112,1,0,0,0,145,120,1,0,0,0,145,126,1,0,0,0,145,133,1,0,0,0,
145,140,1,0,0,0,145,144,1,0,0,0,146,13,1,0,0,0,147,150,3,16,8,0,148,150,
5,38,0,0,149,147,1,0,0,0,149,148,1,0,0,0,150,15,1,0,0,0,151,152,7,0,0,0,
152,17,1,0,0,0,153,155,5,18,0,0,154,153,1,0,0,0,154,155,1,0,0,0,155,156,
1,0,0,0,156,170,5,19,0,0,157,159,5,18,0,0,158,157,1,0,0,0,158,159,1,0,0,
0,159,160,1,0,0,0,160,170,5,20,0,0,161,170,5,21,0,0,162,170,5,22,0,0,163,
170,5,23,0,0,164,170,5,24,0,0,165,170,3,20,10,0,166,170,3,24,12,0,167,170,
3,28,14,0,168,170,5,38,0,0,169,154,1,0,0,0,169,158,1,0,0,0,169,161,1,0,0,
0,169,162,1,0,0,0,169,163,1,0,0,0,169,164,1,0,0,0,169,165,1,0,0,0,169,166,
1,0,0,0,169,167,1,0,0,0,169,168,1,0,0,0,170,19,1,0,0,0,171,172,5,25,0,0,
172,173,3,22,11,0,173,21,1,0,0,0,174,175,5,2,0,0,175,176,5,38,0,0,176,177,
5,4,0,0,177,178,3,14,7,0,178,185,1,0,0,0,179,180,5,8,0,0,180,181,5,38,0,
0,181,182,5,4,0,0,182,184,3,14,7,0,183,179,1,0,0,0,184,187,1,0,0,0,185,183,
1,0,0,0,185,186,1,0,0,0,186,188,1,0,0,0,187,185,1,0,0,0,188,189,5,3,0,0,
189,23,1,0,0,0,190,191,5,26,0,0,191,192,3,26,13,0,192,25,1,0,0,0,193,194,
5,2,0,0,194,195,3,12,6,0,195,196,5,5,0,0,196,202,1,0,0,0,197,198,3,12,6,
0,198,199,5,5,0,0,199,201,1,0,0,0,200,197,1,0,0,0,201,204,1,0,0,0,202,200,
1,0,0,0,202,203,1,0,0,0,203,205,1,0,0,0,204,202,1,0,0,0,205,206,5,3,0,0,
206,27,1,0,0,0,207,208,5,27,0,0,208,209,3,30,15,0,209,29,1,0,0,0,210,211,
5,28,0,0,211,212,5,7,0,0,212,213,3,12,6,0,213,214,5,9,0,0,214,215,5,2,0,
0,215,219,3,32,16,0,216,218,3,32,16,0,217,216,1,0,0,0,218,221,1,0,0,0,219,
217,1,0,0,0,219,220,1,0,0,0,220,227,1,0,0,0,221,219,1,0,0,0,222,223,5,29,
0,0,223,224,5,30,0,0,224,225,3,12,6,0,225,226,5,5,0,0,226,228,1,0,0,0,227,
222,1,0,0,0,227,228,1,0,0,0,228,229,1,0,0,0,229,230,5,3,0,0,230,31,1,0,0,
0,231,232,5,31,0,0,232,233,3,14,7,0,233,234,5,30,0,0,234,241,1,0,0,0,235,
236,5,31,0,0,236,237,3,14,7,0,237,238,5,30,0,0,238,240,1,0,0,0,239,235,1,
0,0,0,240,243,1,0,0,0,241,239,1,0,0,0,241,242,1,0,0,0,242,244,1,0,0,0,243,
241,1,0,0,0,244,245,3,12,6,0,245,246,5,5,0,0,246,33,1,0,0,0,247,248,5,32,
0,0,248,249,5,38,0,0,249,250,5,4,0,0,250,251,3,16,8,0,251,252,5,5,0,0,252,
35,1,0,0,0,253,254,5,33,0,0,254,255,3,12,6,0,255,256,5,5,0,0,256,273,1,0,
0,0,257,258,5,25,0,0,258,259,5,38,0,0,259,260,3,22,11,0,260,261,5,5,0,0,
261,273,1,0,0,0,262,263,5,26,0,0,263,264,5,38,0,0,264,265,3,26,13,0,265,
266,5,5,0,0,266,273,1,0,0,0,267,268,5,27,0,0,268,269,5,38,0,0,269,270,3,
30,15,0,270,271,5,5,0,0,271,273,1,0,0,0,272,253,1,0,0,0,272,257,1,0,0,0,
272,262,1,0,0,0,272,267,1,0,0,0,273,37,1,0,0,0,274,277,3,36,18,0,275,277,
3,34,17,0,276,274,1,0,0,0,276,275,1,0,0,0,277,39,1,0,0,0,278,280,3,38,19,
0,279,278,1,0,0,0,280,281,1,0,0,0,281,279,1,0,0,0,281,282,1,0,0,0,282,41,
1,0,0,0,23,49,64,80,90,94,98,100,116,130,137,145,149,154,158,169,185,202,
219,227,241,272,276,281];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class oncrpcv2Parser extends antlr4.Parser {

    static grammarFileName = "oncrpcv2.g4";
    static literalNames = [ null, "'program'", "'{'", "'}'", "'='", "';'", 
                            "'version'", "'('", "','", "')'", "'void'", 
                            "'['", "']'", "'<'", "'>'", "'opaque'", "'string'", 
                            "'*'", "'unsigned'", "'int'", "'hyper'", "'float'", 
                            "'double'", "'quadruple'", "'bool'", "'enum'", 
                            "'struct'", "'union'", "'switch'", "'default'", 
                            "':'", "'case'", "'const'", "'typedef'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "COMMENT", "OCTAL", "DECIMAL", 
                             "HEXADECIMAL", "IDENTIFIER", "WS" ];
    static ruleNames = [ "programDef", "versionDef", "procedureDef", "procReturn", 
                         "procFirstArg", "oncrpcv2Specification", "declaration", 
                         "value", "constant", "typeSpecifier", "enumTypeSpec", 
                         "enumBody", "structTypeSpec", "structBody", "unionTypeSpec", 
                         "unionBody", "caseSpec", "constantDef", "typeDef", 
                         "definition", "xdrSpecification" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = oncrpcv2Parser.ruleNames;
        this.literalNames = oncrpcv2Parser.literalNames;
        this.symbolicNames = oncrpcv2Parser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	programDef() {
	    let localctx = new ProgramDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, oncrpcv2Parser.RULE_programDef);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(oncrpcv2Parser.T__0);
	        this.state = 43;
	        this.match(oncrpcv2Parser.IDENTIFIER);
	        this.state = 44;
	        this.match(oncrpcv2Parser.T__1);
	        this.state = 45;
	        this.versionDef();
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===oncrpcv2Parser.T__5) {
	            this.state = 46;
	            this.versionDef();
	            this.state = 51;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 52;
	        this.match(oncrpcv2Parser.T__2);
	        this.state = 53;
	        this.match(oncrpcv2Parser.T__3);
	        this.state = 54;
	        this.constant();
	        this.state = 55;
	        this.match(oncrpcv2Parser.T__4);
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



	versionDef() {
	    let localctx = new VersionDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, oncrpcv2Parser.RULE_versionDef);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(oncrpcv2Parser.T__5);
	        this.state = 58;
	        this.match(oncrpcv2Parser.IDENTIFIER);
	        this.state = 59;
	        this.match(oncrpcv2Parser.T__1);
	        this.state = 60;
	        this.procedureDef();
	        this.state = 64;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 10)) & ~0x1f) == 0 && ((1 << (_la - 10)) & ((1 << (oncrpcv2Parser.T__9 - 10)) | (1 << (oncrpcv2Parser.T__17 - 10)) | (1 << (oncrpcv2Parser.T__18 - 10)) | (1 << (oncrpcv2Parser.T__19 - 10)) | (1 << (oncrpcv2Parser.T__20 - 10)) | (1 << (oncrpcv2Parser.T__21 - 10)) | (1 << (oncrpcv2Parser.T__22 - 10)) | (1 << (oncrpcv2Parser.T__23 - 10)) | (1 << (oncrpcv2Parser.T__24 - 10)) | (1 << (oncrpcv2Parser.T__25 - 10)) | (1 << (oncrpcv2Parser.T__26 - 10)) | (1 << (oncrpcv2Parser.IDENTIFIER - 10)))) !== 0)) {
	            this.state = 61;
	            this.procedureDef();
	            this.state = 66;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 67;
	        this.match(oncrpcv2Parser.T__2);
	        this.state = 68;
	        this.match(oncrpcv2Parser.T__3);
	        this.state = 69;
	        this.constant();
	        this.state = 70;
	        this.match(oncrpcv2Parser.T__4);
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



	procedureDef() {
	    let localctx = new ProcedureDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, oncrpcv2Parser.RULE_procedureDef);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.procReturn();
	        this.state = 73;
	        this.match(oncrpcv2Parser.IDENTIFIER);
	        this.state = 74;
	        this.match(oncrpcv2Parser.T__6);
	        this.state = 75;
	        this.procFirstArg();
	        this.state = 80;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===oncrpcv2Parser.T__7) {
	            this.state = 76;
	            this.match(oncrpcv2Parser.T__7);
	            this.state = 77;
	            this.typeSpecifier();
	            this.state = 82;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 83;
	        this.match(oncrpcv2Parser.T__8);
	        this.state = 84;
	        this.match(oncrpcv2Parser.T__3);
	        this.state = 85;
	        this.constant();
	        this.state = 86;
	        this.match(oncrpcv2Parser.T__4);
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



	procReturn() {
	    let localctx = new ProcReturnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, oncrpcv2Parser.RULE_procReturn);
	    try {
	        this.state = 90;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case oncrpcv2Parser.T__9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 88;
	            this.match(oncrpcv2Parser.T__9);
	            break;
	        case oncrpcv2Parser.T__17:
	        case oncrpcv2Parser.T__18:
	        case oncrpcv2Parser.T__19:
	        case oncrpcv2Parser.T__20:
	        case oncrpcv2Parser.T__21:
	        case oncrpcv2Parser.T__22:
	        case oncrpcv2Parser.T__23:
	        case oncrpcv2Parser.T__24:
	        case oncrpcv2Parser.T__25:
	        case oncrpcv2Parser.T__26:
	        case oncrpcv2Parser.IDENTIFIER:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 89;
	            this.typeSpecifier();
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



	procFirstArg() {
	    let localctx = new ProcFirstArgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, oncrpcv2Parser.RULE_procFirstArg);
	    try {
	        this.state = 94;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case oncrpcv2Parser.T__9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 92;
	            this.match(oncrpcv2Parser.T__9);
	            break;
	        case oncrpcv2Parser.T__17:
	        case oncrpcv2Parser.T__18:
	        case oncrpcv2Parser.T__19:
	        case oncrpcv2Parser.T__20:
	        case oncrpcv2Parser.T__21:
	        case oncrpcv2Parser.T__22:
	        case oncrpcv2Parser.T__23:
	        case oncrpcv2Parser.T__24:
	        case oncrpcv2Parser.T__25:
	        case oncrpcv2Parser.T__26:
	        case oncrpcv2Parser.IDENTIFIER:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 93;
	            this.typeSpecifier();
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



	oncrpcv2Specification() {
	    let localctx = new Oncrpcv2SpecificationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, oncrpcv2Parser.RULE_oncrpcv2Specification);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << oncrpcv2Parser.T__0) | (1 << oncrpcv2Parser.T__24) | (1 << oncrpcv2Parser.T__25) | (1 << oncrpcv2Parser.T__26))) !== 0) || _la===oncrpcv2Parser.T__31 || _la===oncrpcv2Parser.T__32) {
	            this.state = 98;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case oncrpcv2Parser.T__24:
	            case oncrpcv2Parser.T__25:
	            case oncrpcv2Parser.T__26:
	            case oncrpcv2Parser.T__31:
	            case oncrpcv2Parser.T__32:
	                this.state = 96;
	                this.xdrSpecification();
	                break;
	            case oncrpcv2Parser.T__0:
	                this.state = 97;
	                this.programDef();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 102;
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



	declaration() {
	    let localctx = new DeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, oncrpcv2Parser.RULE_declaration);
	    var _la = 0; // Token type
	    try {
	        this.state = 145;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 103;
	            this.typeSpecifier();
	            this.state = 104;
	            this.match(oncrpcv2Parser.IDENTIFIER);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 106;
	            this.typeSpecifier();
	            this.state = 107;
	            this.match(oncrpcv2Parser.IDENTIFIER);
	            this.state = 108;
	            this.match(oncrpcv2Parser.T__10);
	            this.state = 109;
	            this.value();
	            this.state = 110;
	            this.match(oncrpcv2Parser.T__11);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 112;
	            this.typeSpecifier();
	            this.state = 113;
	            this.match(oncrpcv2Parser.IDENTIFIER);
	            this.state = 114;
	            this.match(oncrpcv2Parser.T__12);
	            this.state = 116;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (oncrpcv2Parser.OCTAL - 35)) | (1 << (oncrpcv2Parser.DECIMAL - 35)) | (1 << (oncrpcv2Parser.HEXADECIMAL - 35)) | (1 << (oncrpcv2Parser.IDENTIFIER - 35)))) !== 0)) {
	                this.state = 115;
	                this.value();
	            }

	            this.state = 118;
	            this.match(oncrpcv2Parser.T__13);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 120;
	            this.match(oncrpcv2Parser.T__14);
	            this.state = 121;
	            this.match(oncrpcv2Parser.IDENTIFIER);
	            this.state = 122;
	            this.match(oncrpcv2Parser.T__10);
	            this.state = 123;
	            this.value();
	            this.state = 124;
	            this.match(oncrpcv2Parser.T__11);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 126;
	            this.match(oncrpcv2Parser.T__14);
	            this.state = 127;
	            this.match(oncrpcv2Parser.IDENTIFIER);
	            this.state = 128;
	            this.match(oncrpcv2Parser.T__12);
	            this.state = 130;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (oncrpcv2Parser.OCTAL - 35)) | (1 << (oncrpcv2Parser.DECIMAL - 35)) | (1 << (oncrpcv2Parser.HEXADECIMAL - 35)) | (1 << (oncrpcv2Parser.IDENTIFIER - 35)))) !== 0)) {
	                this.state = 129;
	                this.value();
	            }

	            this.state = 132;
	            this.match(oncrpcv2Parser.T__13);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 133;
	            this.match(oncrpcv2Parser.T__15);
	            this.state = 134;
	            this.match(oncrpcv2Parser.IDENTIFIER);
	            this.state = 135;
	            this.match(oncrpcv2Parser.T__12);
	            this.state = 137;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (oncrpcv2Parser.OCTAL - 35)) | (1 << (oncrpcv2Parser.DECIMAL - 35)) | (1 << (oncrpcv2Parser.HEXADECIMAL - 35)) | (1 << (oncrpcv2Parser.IDENTIFIER - 35)))) !== 0)) {
	                this.state = 136;
	                this.value();
	            }

	            this.state = 139;
	            this.match(oncrpcv2Parser.T__13);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 140;
	            this.typeSpecifier();
	            this.state = 141;
	            this.match(oncrpcv2Parser.T__16);
	            this.state = 142;
	            this.match(oncrpcv2Parser.IDENTIFIER);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 144;
	            this.match(oncrpcv2Parser.T__9);
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



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, oncrpcv2Parser.RULE_value);
	    try {
	        this.state = 149;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case oncrpcv2Parser.OCTAL:
	        case oncrpcv2Parser.DECIMAL:
	        case oncrpcv2Parser.HEXADECIMAL:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 147;
	            this.constant();
	            break;
	        case oncrpcv2Parser.IDENTIFIER:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 148;
	            this.match(oncrpcv2Parser.IDENTIFIER);
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



	constant() {
	    let localctx = new ConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, oncrpcv2Parser.RULE_constant);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        _la = this._input.LA(1);
	        if(!(((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (oncrpcv2Parser.OCTAL - 35)) | (1 << (oncrpcv2Parser.DECIMAL - 35)) | (1 << (oncrpcv2Parser.HEXADECIMAL - 35)))) !== 0))) {
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



	typeSpecifier() {
	    let localctx = new TypeSpecifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, oncrpcv2Parser.RULE_typeSpecifier);
	    var _la = 0; // Token type
	    try {
	        this.state = 169;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 154;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===oncrpcv2Parser.T__17) {
	                this.state = 153;
	                this.match(oncrpcv2Parser.T__17);
	            }

	            this.state = 156;
	            this.match(oncrpcv2Parser.T__18);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 158;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===oncrpcv2Parser.T__17) {
	                this.state = 157;
	                this.match(oncrpcv2Parser.T__17);
	            }

	            this.state = 160;
	            this.match(oncrpcv2Parser.T__19);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 161;
	            this.match(oncrpcv2Parser.T__20);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 162;
	            this.match(oncrpcv2Parser.T__21);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 163;
	            this.match(oncrpcv2Parser.T__22);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 164;
	            this.match(oncrpcv2Parser.T__23);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 165;
	            this.enumTypeSpec();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 166;
	            this.structTypeSpec();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 167;
	            this.unionTypeSpec();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 168;
	            this.match(oncrpcv2Parser.IDENTIFIER);
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



	enumTypeSpec() {
	    let localctx = new EnumTypeSpecContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, oncrpcv2Parser.RULE_enumTypeSpec);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 171;
	        this.match(oncrpcv2Parser.T__24);
	        this.state = 172;
	        this.enumBody();
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



	enumBody() {
	    let localctx = new EnumBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, oncrpcv2Parser.RULE_enumBody);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 174;
	        this.match(oncrpcv2Parser.T__1);

	        this.state = 175;
	        this.match(oncrpcv2Parser.IDENTIFIER);
	        this.state = 176;
	        this.match(oncrpcv2Parser.T__3);
	        this.state = 177;
	        this.value();
	        this.state = 185;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===oncrpcv2Parser.T__7) {
	            this.state = 179;
	            this.match(oncrpcv2Parser.T__7);
	            this.state = 180;
	            this.match(oncrpcv2Parser.IDENTIFIER);
	            this.state = 181;
	            this.match(oncrpcv2Parser.T__3);
	            this.state = 182;
	            this.value();
	            this.state = 187;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 188;
	        this.match(oncrpcv2Parser.T__2);
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



	structTypeSpec() {
	    let localctx = new StructTypeSpecContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, oncrpcv2Parser.RULE_structTypeSpec);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 190;
	        this.match(oncrpcv2Parser.T__25);
	        this.state = 191;
	        this.structBody();
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



	structBody() {
	    let localctx = new StructBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, oncrpcv2Parser.RULE_structBody);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 193;
	        this.match(oncrpcv2Parser.T__1);

	        this.state = 194;
	        this.declaration();
	        this.state = 195;
	        this.match(oncrpcv2Parser.T__4);
	        this.state = 202;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 10)) & ~0x1f) == 0 && ((1 << (_la - 10)) & ((1 << (oncrpcv2Parser.T__9 - 10)) | (1 << (oncrpcv2Parser.T__14 - 10)) | (1 << (oncrpcv2Parser.T__15 - 10)) | (1 << (oncrpcv2Parser.T__17 - 10)) | (1 << (oncrpcv2Parser.T__18 - 10)) | (1 << (oncrpcv2Parser.T__19 - 10)) | (1 << (oncrpcv2Parser.T__20 - 10)) | (1 << (oncrpcv2Parser.T__21 - 10)) | (1 << (oncrpcv2Parser.T__22 - 10)) | (1 << (oncrpcv2Parser.T__23 - 10)) | (1 << (oncrpcv2Parser.T__24 - 10)) | (1 << (oncrpcv2Parser.T__25 - 10)) | (1 << (oncrpcv2Parser.T__26 - 10)) | (1 << (oncrpcv2Parser.IDENTIFIER - 10)))) !== 0)) {
	            this.state = 197;
	            this.declaration();
	            this.state = 198;
	            this.match(oncrpcv2Parser.T__4);
	            this.state = 204;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 205;
	        this.match(oncrpcv2Parser.T__2);
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



	unionTypeSpec() {
	    let localctx = new UnionTypeSpecContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, oncrpcv2Parser.RULE_unionTypeSpec);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 207;
	        this.match(oncrpcv2Parser.T__26);
	        this.state = 208;
	        this.unionBody();
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



	unionBody() {
	    let localctx = new UnionBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, oncrpcv2Parser.RULE_unionBody);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 210;
	        this.match(oncrpcv2Parser.T__27);
	        this.state = 211;
	        this.match(oncrpcv2Parser.T__6);
	        this.state = 212;
	        this.declaration();
	        this.state = 213;
	        this.match(oncrpcv2Parser.T__8);
	        this.state = 214;
	        this.match(oncrpcv2Parser.T__1);
	        this.state = 215;
	        this.caseSpec();
	        this.state = 219;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===oncrpcv2Parser.T__30) {
	            this.state = 216;
	            this.caseSpec();
	            this.state = 221;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 227;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===oncrpcv2Parser.T__28) {
	            this.state = 222;
	            this.match(oncrpcv2Parser.T__28);
	            this.state = 223;
	            this.match(oncrpcv2Parser.T__29);
	            this.state = 224;
	            this.declaration();
	            this.state = 225;
	            this.match(oncrpcv2Parser.T__4);
	        }

	        this.state = 229;
	        this.match(oncrpcv2Parser.T__2);
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



	caseSpec() {
	    let localctx = new CaseSpecContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, oncrpcv2Parser.RULE_caseSpec);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 231;
	        this.match(oncrpcv2Parser.T__30);
	        this.state = 232;
	        this.value();
	        this.state = 233;
	        this.match(oncrpcv2Parser.T__29);
	        this.state = 241;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===oncrpcv2Parser.T__30) {
	            this.state = 235;
	            this.match(oncrpcv2Parser.T__30);
	            this.state = 236;
	            this.value();
	            this.state = 237;
	            this.match(oncrpcv2Parser.T__29);
	            this.state = 243;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 244;
	        this.declaration();
	        this.state = 245;
	        this.match(oncrpcv2Parser.T__4);
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



	constantDef() {
	    let localctx = new ConstantDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, oncrpcv2Parser.RULE_constantDef);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 247;
	        this.match(oncrpcv2Parser.T__31);
	        this.state = 248;
	        this.match(oncrpcv2Parser.IDENTIFIER);
	        this.state = 249;
	        this.match(oncrpcv2Parser.T__3);
	        this.state = 250;
	        this.constant();
	        this.state = 251;
	        this.match(oncrpcv2Parser.T__4);
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



	typeDef() {
	    let localctx = new TypeDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, oncrpcv2Parser.RULE_typeDef);
	    try {
	        this.state = 272;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case oncrpcv2Parser.T__32:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 253;
	            this.match(oncrpcv2Parser.T__32);
	            this.state = 254;
	            this.declaration();
	            this.state = 255;
	            this.match(oncrpcv2Parser.T__4);
	            break;
	        case oncrpcv2Parser.T__24:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 257;
	            this.match(oncrpcv2Parser.T__24);
	            this.state = 258;
	            this.match(oncrpcv2Parser.IDENTIFIER);
	            this.state = 259;
	            this.enumBody();
	            this.state = 260;
	            this.match(oncrpcv2Parser.T__4);
	            break;
	        case oncrpcv2Parser.T__25:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 262;
	            this.match(oncrpcv2Parser.T__25);
	            this.state = 263;
	            this.match(oncrpcv2Parser.IDENTIFIER);
	            this.state = 264;
	            this.structBody();
	            this.state = 265;
	            this.match(oncrpcv2Parser.T__4);
	            break;
	        case oncrpcv2Parser.T__26:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 267;
	            this.match(oncrpcv2Parser.T__26);
	            this.state = 268;
	            this.match(oncrpcv2Parser.IDENTIFIER);
	            this.state = 269;
	            this.unionBody();
	            this.state = 270;
	            this.match(oncrpcv2Parser.T__4);
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



	definition() {
	    let localctx = new DefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, oncrpcv2Parser.RULE_definition);
	    try {
	        this.state = 276;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case oncrpcv2Parser.T__24:
	        case oncrpcv2Parser.T__25:
	        case oncrpcv2Parser.T__26:
	        case oncrpcv2Parser.T__32:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 274;
	            this.typeDef();
	            break;
	        case oncrpcv2Parser.T__31:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 275;
	            this.constantDef();
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



	xdrSpecification() {
	    let localctx = new XdrSpecificationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, oncrpcv2Parser.RULE_xdrSpecification);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 279; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 278;
	        		this.definition();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 281; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,22, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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

oncrpcv2Parser.EOF = antlr4.Token.EOF;
oncrpcv2Parser.T__0 = 1;
oncrpcv2Parser.T__1 = 2;
oncrpcv2Parser.T__2 = 3;
oncrpcv2Parser.T__3 = 4;
oncrpcv2Parser.T__4 = 5;
oncrpcv2Parser.T__5 = 6;
oncrpcv2Parser.T__6 = 7;
oncrpcv2Parser.T__7 = 8;
oncrpcv2Parser.T__8 = 9;
oncrpcv2Parser.T__9 = 10;
oncrpcv2Parser.T__10 = 11;
oncrpcv2Parser.T__11 = 12;
oncrpcv2Parser.T__12 = 13;
oncrpcv2Parser.T__13 = 14;
oncrpcv2Parser.T__14 = 15;
oncrpcv2Parser.T__15 = 16;
oncrpcv2Parser.T__16 = 17;
oncrpcv2Parser.T__17 = 18;
oncrpcv2Parser.T__18 = 19;
oncrpcv2Parser.T__19 = 20;
oncrpcv2Parser.T__20 = 21;
oncrpcv2Parser.T__21 = 22;
oncrpcv2Parser.T__22 = 23;
oncrpcv2Parser.T__23 = 24;
oncrpcv2Parser.T__24 = 25;
oncrpcv2Parser.T__25 = 26;
oncrpcv2Parser.T__26 = 27;
oncrpcv2Parser.T__27 = 28;
oncrpcv2Parser.T__28 = 29;
oncrpcv2Parser.T__29 = 30;
oncrpcv2Parser.T__30 = 31;
oncrpcv2Parser.T__31 = 32;
oncrpcv2Parser.T__32 = 33;
oncrpcv2Parser.COMMENT = 34;
oncrpcv2Parser.OCTAL = 35;
oncrpcv2Parser.DECIMAL = 36;
oncrpcv2Parser.HEXADECIMAL = 37;
oncrpcv2Parser.IDENTIFIER = 38;
oncrpcv2Parser.WS = 39;

oncrpcv2Parser.RULE_programDef = 0;
oncrpcv2Parser.RULE_versionDef = 1;
oncrpcv2Parser.RULE_procedureDef = 2;
oncrpcv2Parser.RULE_procReturn = 3;
oncrpcv2Parser.RULE_procFirstArg = 4;
oncrpcv2Parser.RULE_oncrpcv2Specification = 5;
oncrpcv2Parser.RULE_declaration = 6;
oncrpcv2Parser.RULE_value = 7;
oncrpcv2Parser.RULE_constant = 8;
oncrpcv2Parser.RULE_typeSpecifier = 9;
oncrpcv2Parser.RULE_enumTypeSpec = 10;
oncrpcv2Parser.RULE_enumBody = 11;
oncrpcv2Parser.RULE_structTypeSpec = 12;
oncrpcv2Parser.RULE_structBody = 13;
oncrpcv2Parser.RULE_unionTypeSpec = 14;
oncrpcv2Parser.RULE_unionBody = 15;
oncrpcv2Parser.RULE_caseSpec = 16;
oncrpcv2Parser.RULE_constantDef = 17;
oncrpcv2Parser.RULE_typeDef = 18;
oncrpcv2Parser.RULE_definition = 19;
oncrpcv2Parser.RULE_xdrSpecification = 20;

class ProgramDefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oncrpcv2Parser.RULE_programDef;
    }

	IDENTIFIER() {
	    return this.getToken(oncrpcv2Parser.IDENTIFIER, 0);
	};

	versionDef = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VersionDefContext);
	    } else {
	        return this.getTypedRuleContext(VersionDefContext,i);
	    }
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.enterProgramDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.exitProgramDef(this);
		}
	}


}



class VersionDefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oncrpcv2Parser.RULE_versionDef;
    }

	IDENTIFIER() {
	    return this.getToken(oncrpcv2Parser.IDENTIFIER, 0);
	};

	procedureDef = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ProcedureDefContext);
	    } else {
	        return this.getTypedRuleContext(ProcedureDefContext,i);
	    }
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.enterVersionDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.exitVersionDef(this);
		}
	}


}



class ProcedureDefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oncrpcv2Parser.RULE_procedureDef;
    }

	procReturn() {
	    return this.getTypedRuleContext(ProcReturnContext,0);
	};

	IDENTIFIER() {
	    return this.getToken(oncrpcv2Parser.IDENTIFIER, 0);
	};

	procFirstArg() {
	    return this.getTypedRuleContext(ProcFirstArgContext,0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	typeSpecifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeSpecifierContext);
	    } else {
	        return this.getTypedRuleContext(TypeSpecifierContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.enterProcedureDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.exitProcedureDef(this);
		}
	}


}



class ProcReturnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oncrpcv2Parser.RULE_procReturn;
    }

	typeSpecifier() {
	    return this.getTypedRuleContext(TypeSpecifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.enterProcReturn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.exitProcReturn(this);
		}
	}


}



class ProcFirstArgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oncrpcv2Parser.RULE_procFirstArg;
    }

	typeSpecifier() {
	    return this.getTypedRuleContext(TypeSpecifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.enterProcFirstArg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.exitProcFirstArg(this);
		}
	}


}



class Oncrpcv2SpecificationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oncrpcv2Parser.RULE_oncrpcv2Specification;
    }

	xdrSpecification = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(XdrSpecificationContext);
	    } else {
	        return this.getTypedRuleContext(XdrSpecificationContext,i);
	    }
	};

	programDef = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ProgramDefContext);
	    } else {
	        return this.getTypedRuleContext(ProgramDefContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.enterOncrpcv2Specification(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.exitOncrpcv2Specification(this);
		}
	}


}



class DeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oncrpcv2Parser.RULE_declaration;
    }

	typeSpecifier() {
	    return this.getTypedRuleContext(TypeSpecifierContext,0);
	};

	IDENTIFIER() {
	    return this.getToken(oncrpcv2Parser.IDENTIFIER, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.enterDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.exitDeclaration(this);
		}
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oncrpcv2Parser.RULE_value;
    }

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	IDENTIFIER() {
	    return this.getToken(oncrpcv2Parser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.exitValue(this);
		}
	}


}



class ConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oncrpcv2Parser.RULE_constant;
    }

	DECIMAL() {
	    return this.getToken(oncrpcv2Parser.DECIMAL, 0);
	};

	HEXADECIMAL() {
	    return this.getToken(oncrpcv2Parser.HEXADECIMAL, 0);
	};

	OCTAL() {
	    return this.getToken(oncrpcv2Parser.OCTAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.enterConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.exitConstant(this);
		}
	}


}



class TypeSpecifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oncrpcv2Parser.RULE_typeSpecifier;
    }

	enumTypeSpec() {
	    return this.getTypedRuleContext(EnumTypeSpecContext,0);
	};

	structTypeSpec() {
	    return this.getTypedRuleContext(StructTypeSpecContext,0);
	};

	unionTypeSpec() {
	    return this.getTypedRuleContext(UnionTypeSpecContext,0);
	};

	IDENTIFIER() {
	    return this.getToken(oncrpcv2Parser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.enterTypeSpecifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.exitTypeSpecifier(this);
		}
	}


}



class EnumTypeSpecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oncrpcv2Parser.RULE_enumTypeSpec;
    }

	enumBody() {
	    return this.getTypedRuleContext(EnumBodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.enterEnumTypeSpec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.exitEnumTypeSpec(this);
		}
	}


}



class EnumBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oncrpcv2Parser.RULE_enumBody;
    }

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(oncrpcv2Parser.IDENTIFIER);
	    } else {
	        return this.getToken(oncrpcv2Parser.IDENTIFIER, i);
	    }
	};


	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.enterEnumBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.exitEnumBody(this);
		}
	}


}



class StructTypeSpecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oncrpcv2Parser.RULE_structTypeSpec;
    }

	structBody() {
	    return this.getTypedRuleContext(StructBodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.enterStructTypeSpec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.exitStructTypeSpec(this);
		}
	}


}



class StructBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oncrpcv2Parser.RULE_structBody;
    }

	declaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclarationContext);
	    } else {
	        return this.getTypedRuleContext(DeclarationContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.enterStructBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.exitStructBody(this);
		}
	}


}



class UnionTypeSpecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oncrpcv2Parser.RULE_unionTypeSpec;
    }

	unionBody() {
	    return this.getTypedRuleContext(UnionBodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.enterUnionTypeSpec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.exitUnionTypeSpec(this);
		}
	}


}



class UnionBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oncrpcv2Parser.RULE_unionBody;
    }

	declaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclarationContext);
	    } else {
	        return this.getTypedRuleContext(DeclarationContext,i);
	    }
	};

	caseSpec = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaseSpecContext);
	    } else {
	        return this.getTypedRuleContext(CaseSpecContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.enterUnionBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.exitUnionBody(this);
		}
	}


}



class CaseSpecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oncrpcv2Parser.RULE_caseSpec;
    }

	declaration() {
	    return this.getTypedRuleContext(DeclarationContext,0);
	};

	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.enterCaseSpec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.exitCaseSpec(this);
		}
	}


}



class ConstantDefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oncrpcv2Parser.RULE_constantDef;
    }

	IDENTIFIER() {
	    return this.getToken(oncrpcv2Parser.IDENTIFIER, 0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.enterConstantDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.exitConstantDef(this);
		}
	}


}



class TypeDefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oncrpcv2Parser.RULE_typeDef;
    }

	declaration() {
	    return this.getTypedRuleContext(DeclarationContext,0);
	};

	IDENTIFIER() {
	    return this.getToken(oncrpcv2Parser.IDENTIFIER, 0);
	};

	enumBody() {
	    return this.getTypedRuleContext(EnumBodyContext,0);
	};

	structBody() {
	    return this.getTypedRuleContext(StructBodyContext,0);
	};

	unionBody() {
	    return this.getTypedRuleContext(UnionBodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.enterTypeDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.exitTypeDef(this);
		}
	}


}



class DefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oncrpcv2Parser.RULE_definition;
    }

	typeDef() {
	    return this.getTypedRuleContext(TypeDefContext,0);
	};

	constantDef() {
	    return this.getTypedRuleContext(ConstantDefContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.enterDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.exitDefinition(this);
		}
	}


}



class XdrSpecificationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oncrpcv2Parser.RULE_xdrSpecification;
    }

	definition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DefinitionContext);
	    } else {
	        return this.getTypedRuleContext(DefinitionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.enterXdrSpecification(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oncrpcv2Listener ) {
	        listener.exitXdrSpecification(this);
		}
	}


}




oncrpcv2Parser.ProgramDefContext = ProgramDefContext; 
oncrpcv2Parser.VersionDefContext = VersionDefContext; 
oncrpcv2Parser.ProcedureDefContext = ProcedureDefContext; 
oncrpcv2Parser.ProcReturnContext = ProcReturnContext; 
oncrpcv2Parser.ProcFirstArgContext = ProcFirstArgContext; 
oncrpcv2Parser.Oncrpcv2SpecificationContext = Oncrpcv2SpecificationContext; 
oncrpcv2Parser.DeclarationContext = DeclarationContext; 
oncrpcv2Parser.ValueContext = ValueContext; 
oncrpcv2Parser.ConstantContext = ConstantContext; 
oncrpcv2Parser.TypeSpecifierContext = TypeSpecifierContext; 
oncrpcv2Parser.EnumTypeSpecContext = EnumTypeSpecContext; 
oncrpcv2Parser.EnumBodyContext = EnumBodyContext; 
oncrpcv2Parser.StructTypeSpecContext = StructTypeSpecContext; 
oncrpcv2Parser.StructBodyContext = StructBodyContext; 
oncrpcv2Parser.UnionTypeSpecContext = UnionTypeSpecContext; 
oncrpcv2Parser.UnionBodyContext = UnionBodyContext; 
oncrpcv2Parser.CaseSpecContext = CaseSpecContext; 
oncrpcv2Parser.ConstantDefContext = ConstantDefContext; 
oncrpcv2Parser.TypeDefContext = TypeDefContext; 
oncrpcv2Parser.DefinitionContext = DefinitionContext; 
oncrpcv2Parser.XdrSpecificationContext = XdrSpecificationContext; 
