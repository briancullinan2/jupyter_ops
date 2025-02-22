// Generated from ./agc/agc.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import agcListener from './agcListener.js';
const serializedATN = [4,1,196,214,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,1,0,4,0,50,8,0,11,0,12,0,51,1,1,1,
1,1,1,1,1,1,1,3,1,59,8,1,1,2,3,2,62,8,2,1,2,1,2,1,3,3,3,67,8,3,1,3,1,3,1,
3,1,4,3,4,73,8,4,1,4,1,4,1,4,1,4,1,4,3,4,80,8,4,1,4,1,4,1,4,1,4,5,4,86,8,
4,10,4,12,4,89,9,4,1,4,1,4,1,5,3,5,94,8,5,1,5,1,5,1,5,3,5,99,8,5,1,5,5,5,
102,8,5,10,5,12,5,105,9,5,1,5,1,5,1,5,3,5,110,8,5,1,5,1,5,1,6,1,6,3,6,116,
8,6,1,6,1,6,3,6,120,8,6,1,6,5,6,123,8,6,10,6,12,6,126,9,6,1,6,1,6,1,6,3,
6,131,8,6,1,6,1,6,1,7,1,7,1,7,1,7,3,7,139,8,7,1,8,1,8,1,8,5,8,144,8,8,10,
8,12,8,147,9,8,1,8,1,8,1,8,3,8,152,8,8,1,9,1,9,1,10,3,10,157,8,10,1,10,1,
10,1,11,1,11,1,12,1,12,1,13,1,13,1,13,1,13,3,13,169,8,13,1,14,1,14,1,14,
5,14,174,8,14,10,14,12,14,177,9,14,1,15,1,15,1,15,5,15,182,8,15,10,15,12,
15,185,9,15,1,16,1,16,1,16,1,16,1,16,3,16,192,8,16,1,17,1,17,1,18,3,18,197,
8,18,1,18,1,18,1,19,1,19,1,20,1,20,1,20,3,20,206,8,20,1,21,1,21,1,22,1,22,
1,23,1,23,1,23,0,0,24,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
38,40,42,44,46,0,7,1,0,2,3,1,0,188,189,1,0,190,191,1,0,4,52,1,0,53,54,1,
0,55,82,1,0,83,183,221,0,49,1,0,0,0,2,58,1,0,0,0,4,61,1,0,0,0,6,66,1,0,0,
0,8,72,1,0,0,0,10,93,1,0,0,0,12,113,1,0,0,0,14,134,1,0,0,0,16,145,1,0,0,
0,18,153,1,0,0,0,20,156,1,0,0,0,22,160,1,0,0,0,24,162,1,0,0,0,26,168,1,0,
0,0,28,170,1,0,0,0,30,178,1,0,0,0,32,191,1,0,0,0,34,193,1,0,0,0,36,196,1,
0,0,0,38,200,1,0,0,0,40,205,1,0,0,0,42,207,1,0,0,0,44,209,1,0,0,0,46,211,
1,0,0,0,48,50,3,2,1,0,49,48,1,0,0,0,50,51,1,0,0,0,51,49,1,0,0,0,51,52,1,
0,0,0,52,1,1,0,0,0,53,59,3,6,3,0,54,59,3,4,2,0,55,59,3,8,4,0,56,59,3,10,
5,0,57,59,3,12,6,0,58,53,1,0,0,0,58,54,1,0,0,0,58,55,1,0,0,0,58,56,1,0,0,
0,58,57,1,0,0,0,59,3,1,0,0,0,60,62,3,24,12,0,61,60,1,0,0,0,61,62,1,0,0,0,
62,63,1,0,0,0,63,64,3,20,10,0,64,5,1,0,0,0,65,67,3,18,9,0,66,65,1,0,0,0,
66,67,1,0,0,0,67,68,1,0,0,0,68,69,3,22,11,0,69,70,3,20,10,0,70,7,1,0,0,0,
71,73,3,24,12,0,72,71,1,0,0,0,72,73,1,0,0,0,73,74,1,0,0,0,74,75,3,18,9,0,
75,79,3,14,7,0,76,77,3,20,10,0,77,78,3,6,3,0,78,80,1,0,0,0,79,76,1,0,0,0,
79,80,1,0,0,0,80,81,1,0,0,0,81,87,3,16,8,0,82,83,3,20,10,0,83,84,3,16,8,
0,84,86,1,0,0,0,85,82,1,0,0,0,86,89,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,
88,90,1,0,0,0,89,87,1,0,0,0,90,91,3,20,10,0,91,9,1,0,0,0,92,94,3,26,13,0,
93,92,1,0,0,0,93,94,1,0,0,0,94,95,1,0,0,0,95,96,3,18,9,0,96,103,5,1,0,0,
97,99,3,18,9,0,98,97,1,0,0,0,98,99,1,0,0,0,99,100,1,0,0,0,100,102,3,28,14,
0,101,98,1,0,0,0,102,105,1,0,0,0,103,101,1,0,0,0,103,104,1,0,0,0,104,109,
1,0,0,0,105,103,1,0,0,0,106,107,3,18,9,0,107,108,3,22,11,0,108,110,1,0,0,
0,109,106,1,0,0,0,109,110,1,0,0,0,110,111,1,0,0,0,111,112,3,20,10,0,112,
11,1,0,0,0,113,115,3,26,13,0,114,116,3,18,9,0,115,114,1,0,0,0,115,116,1,
0,0,0,116,117,1,0,0,0,117,124,7,0,0,0,118,120,3,18,9,0,119,118,1,0,0,0,119,
120,1,0,0,0,120,121,1,0,0,0,121,123,3,28,14,0,122,119,1,0,0,0,123,126,1,
0,0,0,124,122,1,0,0,0,124,125,1,0,0,0,125,130,1,0,0,0,126,124,1,0,0,0,127,
128,3,18,9,0,128,129,3,22,11,0,129,131,1,0,0,0,130,127,1,0,0,0,130,131,1,
0,0,0,131,132,1,0,0,0,132,133,3,20,10,0,133,13,1,0,0,0,134,138,3,40,20,0,
135,136,3,18,9,0,136,137,3,40,20,0,137,139,1,0,0,0,138,135,1,0,0,0,138,139,
1,0,0,0,139,15,1,0,0,0,140,141,3,18,9,0,141,142,3,28,14,0,142,144,1,0,0,
0,143,140,1,0,0,0,144,147,1,0,0,0,145,143,1,0,0,0,145,146,1,0,0,0,146,151,
1,0,0,0,147,145,1,0,0,0,148,149,3,18,9,0,149,150,3,22,11,0,150,152,1,0,0,
0,151,148,1,0,0,0,151,152,1,0,0,0,152,17,1,0,0,0,153,154,5,196,0,0,154,19,
1,0,0,0,155,157,5,196,0,0,156,155,1,0,0,0,156,157,1,0,0,0,157,158,1,0,0,
0,158,159,5,195,0,0,159,21,1,0,0,0,160,161,5,187,0,0,161,23,1,0,0,0,162,
163,5,184,0,0,163,25,1,0,0,0,164,169,5,184,0,0,165,166,5,193,0,0,166,167,
5,184,0,0,167,169,5,194,0,0,168,164,1,0,0,0,168,165,1,0,0,0,169,27,1,0,0,
0,170,175,3,30,15,0,171,172,7,1,0,0,172,174,3,30,15,0,173,171,1,0,0,0,174,
177,1,0,0,0,175,173,1,0,0,0,175,176,1,0,0,0,176,29,1,0,0,0,177,175,1,0,0,
0,178,183,3,32,16,0,179,180,7,2,0,0,180,182,3,32,16,0,181,179,1,0,0,0,182,
185,1,0,0,0,183,181,1,0,0,0,183,184,1,0,0,0,184,31,1,0,0,0,185,183,1,0,0,
0,186,192,3,34,17,0,187,192,3,36,18,0,188,192,3,26,13,0,189,192,3,24,12,
0,190,192,3,38,19,0,191,186,1,0,0,0,191,187,1,0,0,0,191,188,1,0,0,0,191,
189,1,0,0,0,191,190,1,0,0,0,192,33,1,0,0,0,193,194,5,185,0,0,194,35,1,0,
0,0,195,197,7,1,0,0,196,195,1,0,0,0,196,197,1,0,0,0,197,198,1,0,0,0,198,
199,5,186,0,0,199,37,1,0,0,0,200,201,7,3,0,0,201,39,1,0,0,0,202,206,3,46,
23,0,203,206,3,44,22,0,204,206,3,42,21,0,205,202,1,0,0,0,205,203,1,0,0,0,
205,204,1,0,0,0,206,41,1,0,0,0,207,208,7,4,0,0,208,43,1,0,0,0,209,210,7,
5,0,0,210,45,1,0,0,0,211,212,7,6,0,0,212,47,1,0,0,0,25,51,58,61,66,72,79,
87,93,98,103,109,115,119,124,130,138,145,151,156,168,175,183,191,196,205];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class agcParser extends antlr4.Parser {

    static grammarFileName = "agc.g4";
    static literalNames = [ null, "'ERASE'", "'='", "'EQUALS'", "'A'", "'L'", 
                            "'Q'", "'EB'", "'FB'", "'Z'", "'BB'", "'ARUPT'", 
                            "'LRUPT'", "'QRUPT'", "'BBRUPT'", "'BRUPT'", 
                            "'CYR'", "'SR'", "'CYL'", "'EDOP'", "'TIME2'", 
                            "'TIME1'", "'TIME3'", "'TIME4'", "'TIME5'", 
                            "'TIME6'", "'CDUX'", "'CDUY'", "'CDUZ'", "'OPTY'", 
                            "'OPTX'", "'PIPAX'", "'PIPAY'", "'PIPAZ'", "'Q-RHCCTR'", 
                            "'RHCP'", "'P-RHCCTR'", "'RHCY'", "'R-RHCCTR'", 
                            "'RHCR'", "'INLINK'", "'RNRAD'", "'GYROCTR'", 
                            "'GYROCMD'", "'CDUXCMD'", "'CDUYCMD'", "'CDUZCMD'", 
                            "'OPTYCMD'", "'OPTXCMD'", "'THRUST'", "'LEMONM'", 
                            "'OUTLINK'", "'ALTM'", "'AXT,1'", "'AXT,2'", 
                            "'1DNADR'", "'2DNADR'", "'3DNADR'", "'4DNADR'", 
                            "'5DNADR'", "'6DNADR'", "'DNCHAN'", "'DNPTR'", 
                            "'-1DNADR'", "'-2DNADR'", "'-3DNADR'", "'-4DNADR'", 
                            "'-5DNADR'", "'-6DNADR'", "'-DNCHAN'", "'-DNPTR'", 
                            "'2DEC'", "'2DEC*'", "'2FCADR'", "'BANK'", "'BLOCK'", 
                            "'BNKSUM'", "'COUNT'", "'COUNT*'", "'DEC'", 
                            "'OCT'", "'SETLOC'", "'SUBRO'", "'TC'", "'TCR'", 
                            "'CCS'", "'TCF'", "'DAS'", "'LXCH'", "'INCR'", 
                            "'AD'", "'ADS'", "'CA'", "'CS'", "'INDEX'", 
                            "'DXCH'", "'TS'", "'XCH'", "'MASK'", "'MSK'", 
                            "'READ'", "'WRITE'", "'RAND'", "'WAND'", "'ROR'", 
                            "'WOR'", "'RXOR'", "'EDRUPT'", "'BZF'", "'MSU'", 
                            "'QXCH'", "'AUG'", "'DIM'", "'DCA'", "'DCS'", 
                            "'SU'", "'BZMF'", "'MP'", "'XXALQ'", "'XLQ'", 
                            "'RETURN'", "'RELINT'", "'INHINT'", "'EXTEND'", 
                            "'NOOP'", "'DDOUBL'", "'DTCF'", "'COM'", "'ZL'", 
                            "'RESUME'", "'DTCB'", "'OVSK'", "'TCAA'", "'DOUBLE'", 
                            "'ZQ'", "'DCOM'", "'SQUARE'", "'PINC'", "'PCDU'", 
                            "'MINC'", "'MCDU'", "'DINC'", "'SHINC'", "'SHANC'", 
                            "'INOTRD'", "'INOTLD'", "'FETCH'", "'STORE'", 
                            "'GOJ'", "'TCSAJ'", "'CAF'", "'CAE'", "'CADR'", 
                            "'DMOVE'", "'VMOVE'", "'SMOVE'", "'DSU'", "'RTB'", 
                            "'ITC'", "'NOLOD'", "'EXIT'", "'BPL'", "'SIN'", 
                            "'COS'", "'CAD'", "'TEST'", "'VXSC'", "'DAD'", 
                            "'VXV'", "'VAD'", "'DMP'", "'BOV'", "'UNIT'", 
                            "'OCTAL'", "'ADRES'", "'ABVAL'", "'COMP'", "'DV'", 
                            "'NDX'", "'POUT'", "'MOUT'", "'ZOUT'", "'LODON'", 
                            "'TSLT'", null, null, null, null, "'+'", "'-'", 
                            "'*'", "'/'", "','", "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "LABEL", "INTE", "DECIMAL", "COMMENT", "PLUS", 
                             "MINUS", "TIMES", "DIV", "COMMA", "LPAREN", 
                             "RPAREN", "EOL", "WS" ];
    static ruleNames = [ "prog", "line", "blank_line", "comment_line", "instruction_line", 
                         "erase_line", "assignment_line", "opcodes", "argument", 
                         "ws", "eol", "comment", "label", "variable", "expression", 
                         "multiplyingExpression", "atom", "inte", "decimal", 
                         "register_", "opcode", "axt_opcode", "pseudo_opcode", 
                         "standard_opcode" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = agcParser.ruleNames;
        this.literalNames = agcParser.literalNames;
        this.symbolicNames = agcParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, agcParser.RULE_prog);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 48;
	            this.line();
	            this.state = 51; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 184)) & ~0x1f) == 0 && ((1 << (_la - 184)) & ((1 << (agcParser.LABEL - 184)) | (1 << (agcParser.COMMENT - 184)) | (1 << (agcParser.LPAREN - 184)) | (1 << (agcParser.EOL - 184)) | (1 << (agcParser.WS - 184)))) !== 0));
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
	    this.enterRule(localctx, 2, agcParser.RULE_line);
	    try {
	        this.state = 58;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 53;
	            this.comment_line();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 54;
	            this.blank_line();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 55;
	            this.instruction_line();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 56;
	            this.erase_line();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 57;
	            this.assignment_line();
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



	blank_line() {
	    let localctx = new Blank_lineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, agcParser.RULE_blank_line);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===agcParser.LABEL) {
	            this.state = 60;
	            this.label();
	        }

	        this.state = 63;
	        this.eol();
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



	comment_line() {
	    let localctx = new Comment_lineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, agcParser.RULE_comment_line);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===agcParser.WS) {
	            this.state = 65;
	            this.ws();
	        }

	        this.state = 68;
	        this.comment();
	        this.state = 69;
	        this.eol();
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



	instruction_line() {
	    let localctx = new Instruction_lineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, agcParser.RULE_instruction_line);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===agcParser.LABEL) {
	            this.state = 71;
	            this.label();
	        }

	        this.state = 74;
	        this.ws();
	        this.state = 75;
	        this.opcodes();
	        this.state = 79;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        if(la_===1) {
	            this.state = 76;
	            this.eol();
	            this.state = 77;
	            this.comment_line();

	        }
	        this.state = 81;
	        this.argument();
	        this.state = 87;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 82;
	                this.eol();
	                this.state = 83;
	                this.argument(); 
	            }
	            this.state = 89;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
	        }

	        this.state = 90;
	        this.eol();
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



	erase_line() {
	    let localctx = new Erase_lineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, agcParser.RULE_erase_line);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===agcParser.LABEL || _la===agcParser.LPAREN) {
	            this.state = 92;
	            this.variable();
	        }

	        this.state = 95;
	        this.ws();
	        this.state = 96;
	        this.match(agcParser.T__0);
	        this.state = 103;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 98;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===agcParser.WS) {
	                    this.state = 97;
	                    this.ws();
	                }

	                this.state = 100;
	                this.expression(); 
	            }
	            this.state = 105;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
	        }

	        this.state = 109;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 106;
	            this.ws();
	            this.state = 107;
	            this.comment();

	        }
	        this.state = 111;
	        this.eol();
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



	assignment_line() {
	    let localctx = new Assignment_lineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, agcParser.RULE_assignment_line);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        this.variable();
	        this.state = 115;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===agcParser.WS) {
	            this.state = 114;
	            this.ws();
	        }

	        this.state = 117;
	        _la = this._input.LA(1);
	        if(!(_la===agcParser.T__1 || _la===agcParser.T__2)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 124;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 119;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===agcParser.WS) {
	                    this.state = 118;
	                    this.ws();
	                }

	                this.state = 121;
	                this.expression(); 
	            }
	            this.state = 126;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
	        }

	        this.state = 130;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        if(la_===1) {
	            this.state = 127;
	            this.ws();
	            this.state = 128;
	            this.comment();

	        }
	        this.state = 132;
	        this.eol();
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



	opcodes() {
	    let localctx = new OpcodesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, agcParser.RULE_opcodes);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this.opcode();
	        this.state = 138;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        if(la_===1) {
	            this.state = 135;
	            this.ws();
	            this.state = 136;
	            this.opcode();

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
	    this.enterRule(localctx, 16, agcParser.RULE_argument);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 140;
	                this.ws();
	                this.state = 141;
	                this.expression(); 
	            }
	            this.state = 147;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
	        }

	        this.state = 151;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        if(la_===1) {
	            this.state = 148;
	            this.ws();
	            this.state = 149;
	            this.comment();

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



	ws() {
	    let localctx = new WsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, agcParser.RULE_ws);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        this.match(agcParser.WS);
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



	eol() {
	    let localctx = new EolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, agcParser.RULE_eol);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===agcParser.WS) {
	            this.state = 155;
	            this.match(agcParser.WS);
	        }

	        this.state = 158;
	        this.match(agcParser.EOL);
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
	    this.enterRule(localctx, 22, agcParser.RULE_comment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
	        this.match(agcParser.COMMENT);
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



	label() {
	    let localctx = new LabelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, agcParser.RULE_label);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        this.match(agcParser.LABEL);
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



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, agcParser.RULE_variable);
	    try {
	        this.state = 168;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case agcParser.LABEL:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 164;
	            this.match(agcParser.LABEL);
	            break;
	        case agcParser.LPAREN:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 165;
	            this.match(agcParser.LPAREN);
	            this.state = 166;
	            this.match(agcParser.LABEL);
	            this.state = 167;
	            this.match(agcParser.RPAREN);
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
	    this.enterRule(localctx, 28, agcParser.RULE_expression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 170;
	        this.multiplyingExpression();
	        this.state = 175;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 171;
	                _la = this._input.LA(1);
	                if(!(_la===agcParser.PLUS || _la===agcParser.MINUS)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 172;
	                this.multiplyingExpression(); 
	            }
	            this.state = 177;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
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



	multiplyingExpression() {
	    let localctx = new MultiplyingExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, agcParser.RULE_multiplyingExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        this.atom();
	        this.state = 183;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===agcParser.TIMES || _la===agcParser.DIV) {
	            this.state = 179;
	            _la = this._input.LA(1);
	            if(!(_la===agcParser.TIMES || _la===agcParser.DIV)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 180;
	            this.atom();
	            this.state = 185;
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



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, agcParser.RULE_atom);
	    try {
	        this.state = 191;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 186;
	            this.inte();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 187;
	            this.decimal();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 188;
	            this.variable();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 189;
	            this.label();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 190;
	            this.register_();
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



	inte() {
	    let localctx = new InteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, agcParser.RULE_inte);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 193;
	        this.match(agcParser.INTE);
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



	decimal() {
	    let localctx = new DecimalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, agcParser.RULE_decimal);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 196;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===agcParser.PLUS || _la===agcParser.MINUS) {
	            this.state = 195;
	            _la = this._input.LA(1);
	            if(!(_la===agcParser.PLUS || _la===agcParser.MINUS)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 198;
	        this.match(agcParser.DECIMAL);
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



	register_() {
	    let localctx = new Register_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, agcParser.RULE_register_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 200;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << agcParser.T__3) | (1 << agcParser.T__4) | (1 << agcParser.T__5) | (1 << agcParser.T__6) | (1 << agcParser.T__7) | (1 << agcParser.T__8) | (1 << agcParser.T__9) | (1 << agcParser.T__10) | (1 << agcParser.T__11) | (1 << agcParser.T__12) | (1 << agcParser.T__13) | (1 << agcParser.T__14) | (1 << agcParser.T__15) | (1 << agcParser.T__16) | (1 << agcParser.T__17) | (1 << agcParser.T__18) | (1 << agcParser.T__19) | (1 << agcParser.T__20) | (1 << agcParser.T__21) | (1 << agcParser.T__22) | (1 << agcParser.T__23) | (1 << agcParser.T__24) | (1 << agcParser.T__25) | (1 << agcParser.T__26) | (1 << agcParser.T__27) | (1 << agcParser.T__28) | (1 << agcParser.T__29) | (1 << agcParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (agcParser.T__31 - 32)) | (1 << (agcParser.T__32 - 32)) | (1 << (agcParser.T__33 - 32)) | (1 << (agcParser.T__34 - 32)) | (1 << (agcParser.T__35 - 32)) | (1 << (agcParser.T__36 - 32)) | (1 << (agcParser.T__37 - 32)) | (1 << (agcParser.T__38 - 32)) | (1 << (agcParser.T__39 - 32)) | (1 << (agcParser.T__40 - 32)) | (1 << (agcParser.T__41 - 32)) | (1 << (agcParser.T__42 - 32)) | (1 << (agcParser.T__43 - 32)) | (1 << (agcParser.T__44 - 32)) | (1 << (agcParser.T__45 - 32)) | (1 << (agcParser.T__46 - 32)) | (1 << (agcParser.T__47 - 32)) | (1 << (agcParser.T__48 - 32)) | (1 << (agcParser.T__49 - 32)) | (1 << (agcParser.T__50 - 32)) | (1 << (agcParser.T__51 - 32)))) !== 0))) {
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



	opcode() {
	    let localctx = new OpcodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, agcParser.RULE_opcode);
	    try {
	        this.state = 205;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case agcParser.T__82:
	        case agcParser.T__83:
	        case agcParser.T__84:
	        case agcParser.T__85:
	        case agcParser.T__86:
	        case agcParser.T__87:
	        case agcParser.T__88:
	        case agcParser.T__89:
	        case agcParser.T__90:
	        case agcParser.T__91:
	        case agcParser.T__92:
	        case agcParser.T__93:
	        case agcParser.T__94:
	        case agcParser.T__95:
	        case agcParser.T__96:
	        case agcParser.T__97:
	        case agcParser.T__98:
	        case agcParser.T__99:
	        case agcParser.T__100:
	        case agcParser.T__101:
	        case agcParser.T__102:
	        case agcParser.T__103:
	        case agcParser.T__104:
	        case agcParser.T__105:
	        case agcParser.T__106:
	        case agcParser.T__107:
	        case agcParser.T__108:
	        case agcParser.T__109:
	        case agcParser.T__110:
	        case agcParser.T__111:
	        case agcParser.T__112:
	        case agcParser.T__113:
	        case agcParser.T__114:
	        case agcParser.T__115:
	        case agcParser.T__116:
	        case agcParser.T__117:
	        case agcParser.T__118:
	        case agcParser.T__119:
	        case agcParser.T__120:
	        case agcParser.T__121:
	        case agcParser.T__122:
	        case agcParser.T__123:
	        case agcParser.T__124:
	        case agcParser.T__125:
	        case agcParser.T__126:
	        case agcParser.T__127:
	        case agcParser.T__128:
	        case agcParser.T__129:
	        case agcParser.T__130:
	        case agcParser.T__131:
	        case agcParser.T__132:
	        case agcParser.T__133:
	        case agcParser.T__134:
	        case agcParser.T__135:
	        case agcParser.T__136:
	        case agcParser.T__137:
	        case agcParser.T__138:
	        case agcParser.T__139:
	        case agcParser.T__140:
	        case agcParser.T__141:
	        case agcParser.T__142:
	        case agcParser.T__143:
	        case agcParser.T__144:
	        case agcParser.T__145:
	        case agcParser.T__146:
	        case agcParser.T__147:
	        case agcParser.T__148:
	        case agcParser.T__149:
	        case agcParser.T__150:
	        case agcParser.T__151:
	        case agcParser.T__152:
	        case agcParser.T__153:
	        case agcParser.T__154:
	        case agcParser.T__155:
	        case agcParser.T__156:
	        case agcParser.T__157:
	        case agcParser.T__158:
	        case agcParser.T__159:
	        case agcParser.T__160:
	        case agcParser.T__161:
	        case agcParser.T__162:
	        case agcParser.T__163:
	        case agcParser.T__164:
	        case agcParser.T__165:
	        case agcParser.T__166:
	        case agcParser.T__167:
	        case agcParser.T__168:
	        case agcParser.T__169:
	        case agcParser.T__170:
	        case agcParser.T__171:
	        case agcParser.T__172:
	        case agcParser.T__173:
	        case agcParser.T__174:
	        case agcParser.T__175:
	        case agcParser.T__176:
	        case agcParser.T__177:
	        case agcParser.T__178:
	        case agcParser.T__179:
	        case agcParser.T__180:
	        case agcParser.T__181:
	        case agcParser.T__182:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 202;
	            this.standard_opcode();
	            break;
	        case agcParser.T__54:
	        case agcParser.T__55:
	        case agcParser.T__56:
	        case agcParser.T__57:
	        case agcParser.T__58:
	        case agcParser.T__59:
	        case agcParser.T__60:
	        case agcParser.T__61:
	        case agcParser.T__62:
	        case agcParser.T__63:
	        case agcParser.T__64:
	        case agcParser.T__65:
	        case agcParser.T__66:
	        case agcParser.T__67:
	        case agcParser.T__68:
	        case agcParser.T__69:
	        case agcParser.T__70:
	        case agcParser.T__71:
	        case agcParser.T__72:
	        case agcParser.T__73:
	        case agcParser.T__74:
	        case agcParser.T__75:
	        case agcParser.T__76:
	        case agcParser.T__77:
	        case agcParser.T__78:
	        case agcParser.T__79:
	        case agcParser.T__80:
	        case agcParser.T__81:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 203;
	            this.pseudo_opcode();
	            break;
	        case agcParser.T__52:
	        case agcParser.T__53:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 204;
	            this.axt_opcode();
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



	axt_opcode() {
	    let localctx = new Axt_opcodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, agcParser.RULE_axt_opcode);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 207;
	        _la = this._input.LA(1);
	        if(!(_la===agcParser.T__52 || _la===agcParser.T__53)) {
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



	pseudo_opcode() {
	    let localctx = new Pseudo_opcodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, agcParser.RULE_pseudo_opcode);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 209;
	        _la = this._input.LA(1);
	        if(!(((((_la - 55)) & ~0x1f) == 0 && ((1 << (_la - 55)) & ((1 << (agcParser.T__54 - 55)) | (1 << (agcParser.T__55 - 55)) | (1 << (agcParser.T__56 - 55)) | (1 << (agcParser.T__57 - 55)) | (1 << (agcParser.T__58 - 55)) | (1 << (agcParser.T__59 - 55)) | (1 << (agcParser.T__60 - 55)) | (1 << (agcParser.T__61 - 55)) | (1 << (agcParser.T__62 - 55)) | (1 << (agcParser.T__63 - 55)) | (1 << (agcParser.T__64 - 55)) | (1 << (agcParser.T__65 - 55)) | (1 << (agcParser.T__66 - 55)) | (1 << (agcParser.T__67 - 55)) | (1 << (agcParser.T__68 - 55)) | (1 << (agcParser.T__69 - 55)) | (1 << (agcParser.T__70 - 55)) | (1 << (agcParser.T__71 - 55)) | (1 << (agcParser.T__72 - 55)) | (1 << (agcParser.T__73 - 55)) | (1 << (agcParser.T__74 - 55)) | (1 << (agcParser.T__75 - 55)) | (1 << (agcParser.T__76 - 55)) | (1 << (agcParser.T__77 - 55)) | (1 << (agcParser.T__78 - 55)) | (1 << (agcParser.T__79 - 55)) | (1 << (agcParser.T__80 - 55)) | (1 << (agcParser.T__81 - 55)))) !== 0))) {
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



	standard_opcode() {
	    let localctx = new Standard_opcodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, agcParser.RULE_standard_opcode);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 211;
	        _la = this._input.LA(1);
	        if(!(((((_la - 83)) & ~0x1f) == 0 && ((1 << (_la - 83)) & ((1 << (agcParser.T__82 - 83)) | (1 << (agcParser.T__83 - 83)) | (1 << (agcParser.T__84 - 83)) | (1 << (agcParser.T__85 - 83)) | (1 << (agcParser.T__86 - 83)) | (1 << (agcParser.T__87 - 83)) | (1 << (agcParser.T__88 - 83)) | (1 << (agcParser.T__89 - 83)) | (1 << (agcParser.T__90 - 83)) | (1 << (agcParser.T__91 - 83)) | (1 << (agcParser.T__92 - 83)) | (1 << (agcParser.T__93 - 83)) | (1 << (agcParser.T__94 - 83)) | (1 << (agcParser.T__95 - 83)) | (1 << (agcParser.T__96 - 83)) | (1 << (agcParser.T__97 - 83)) | (1 << (agcParser.T__98 - 83)) | (1 << (agcParser.T__99 - 83)) | (1 << (agcParser.T__100 - 83)) | (1 << (agcParser.T__101 - 83)) | (1 << (agcParser.T__102 - 83)) | (1 << (agcParser.T__103 - 83)) | (1 << (agcParser.T__104 - 83)) | (1 << (agcParser.T__105 - 83)) | (1 << (agcParser.T__106 - 83)) | (1 << (agcParser.T__107 - 83)) | (1 << (agcParser.T__108 - 83)) | (1 << (agcParser.T__109 - 83)) | (1 << (agcParser.T__110 - 83)) | (1 << (agcParser.T__111 - 83)) | (1 << (agcParser.T__112 - 83)) | (1 << (agcParser.T__113 - 83)))) !== 0) || ((((_la - 115)) & ~0x1f) == 0 && ((1 << (_la - 115)) & ((1 << (agcParser.T__114 - 115)) | (1 << (agcParser.T__115 - 115)) | (1 << (agcParser.T__116 - 115)) | (1 << (agcParser.T__117 - 115)) | (1 << (agcParser.T__118 - 115)) | (1 << (agcParser.T__119 - 115)) | (1 << (agcParser.T__120 - 115)) | (1 << (agcParser.T__121 - 115)) | (1 << (agcParser.T__122 - 115)) | (1 << (agcParser.T__123 - 115)) | (1 << (agcParser.T__124 - 115)) | (1 << (agcParser.T__125 - 115)) | (1 << (agcParser.T__126 - 115)) | (1 << (agcParser.T__127 - 115)) | (1 << (agcParser.T__128 - 115)) | (1 << (agcParser.T__129 - 115)) | (1 << (agcParser.T__130 - 115)) | (1 << (agcParser.T__131 - 115)) | (1 << (agcParser.T__132 - 115)) | (1 << (agcParser.T__133 - 115)) | (1 << (agcParser.T__134 - 115)) | (1 << (agcParser.T__135 - 115)) | (1 << (agcParser.T__136 - 115)) | (1 << (agcParser.T__137 - 115)) | (1 << (agcParser.T__138 - 115)) | (1 << (agcParser.T__139 - 115)) | (1 << (agcParser.T__140 - 115)) | (1 << (agcParser.T__141 - 115)) | (1 << (agcParser.T__142 - 115)) | (1 << (agcParser.T__143 - 115)) | (1 << (agcParser.T__144 - 115)) | (1 << (agcParser.T__145 - 115)))) !== 0) || ((((_la - 147)) & ~0x1f) == 0 && ((1 << (_la - 147)) & ((1 << (agcParser.T__146 - 147)) | (1 << (agcParser.T__147 - 147)) | (1 << (agcParser.T__148 - 147)) | (1 << (agcParser.T__149 - 147)) | (1 << (agcParser.T__150 - 147)) | (1 << (agcParser.T__151 - 147)) | (1 << (agcParser.T__152 - 147)) | (1 << (agcParser.T__153 - 147)) | (1 << (agcParser.T__154 - 147)) | (1 << (agcParser.T__155 - 147)) | (1 << (agcParser.T__156 - 147)) | (1 << (agcParser.T__157 - 147)) | (1 << (agcParser.T__158 - 147)) | (1 << (agcParser.T__159 - 147)) | (1 << (agcParser.T__160 - 147)) | (1 << (agcParser.T__161 - 147)) | (1 << (agcParser.T__162 - 147)) | (1 << (agcParser.T__163 - 147)) | (1 << (agcParser.T__164 - 147)) | (1 << (agcParser.T__165 - 147)) | (1 << (agcParser.T__166 - 147)) | (1 << (agcParser.T__167 - 147)) | (1 << (agcParser.T__168 - 147)) | (1 << (agcParser.T__169 - 147)) | (1 << (agcParser.T__170 - 147)) | (1 << (agcParser.T__171 - 147)) | (1 << (agcParser.T__172 - 147)) | (1 << (agcParser.T__173 - 147)) | (1 << (agcParser.T__174 - 147)) | (1 << (agcParser.T__175 - 147)) | (1 << (agcParser.T__176 - 147)) | (1 << (agcParser.T__177 - 147)))) !== 0) || ((((_la - 179)) & ~0x1f) == 0 && ((1 << (_la - 179)) & ((1 << (agcParser.T__178 - 179)) | (1 << (agcParser.T__179 - 179)) | (1 << (agcParser.T__180 - 179)) | (1 << (agcParser.T__181 - 179)) | (1 << (agcParser.T__182 - 179)))) !== 0))) {
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


}

agcParser.EOF = antlr4.Token.EOF;
agcParser.T__0 = 1;
agcParser.T__1 = 2;
agcParser.T__2 = 3;
agcParser.T__3 = 4;
agcParser.T__4 = 5;
agcParser.T__5 = 6;
agcParser.T__6 = 7;
agcParser.T__7 = 8;
agcParser.T__8 = 9;
agcParser.T__9 = 10;
agcParser.T__10 = 11;
agcParser.T__11 = 12;
agcParser.T__12 = 13;
agcParser.T__13 = 14;
agcParser.T__14 = 15;
agcParser.T__15 = 16;
agcParser.T__16 = 17;
agcParser.T__17 = 18;
agcParser.T__18 = 19;
agcParser.T__19 = 20;
agcParser.T__20 = 21;
agcParser.T__21 = 22;
agcParser.T__22 = 23;
agcParser.T__23 = 24;
agcParser.T__24 = 25;
agcParser.T__25 = 26;
agcParser.T__26 = 27;
agcParser.T__27 = 28;
agcParser.T__28 = 29;
agcParser.T__29 = 30;
agcParser.T__30 = 31;
agcParser.T__31 = 32;
agcParser.T__32 = 33;
agcParser.T__33 = 34;
agcParser.T__34 = 35;
agcParser.T__35 = 36;
agcParser.T__36 = 37;
agcParser.T__37 = 38;
agcParser.T__38 = 39;
agcParser.T__39 = 40;
agcParser.T__40 = 41;
agcParser.T__41 = 42;
agcParser.T__42 = 43;
agcParser.T__43 = 44;
agcParser.T__44 = 45;
agcParser.T__45 = 46;
agcParser.T__46 = 47;
agcParser.T__47 = 48;
agcParser.T__48 = 49;
agcParser.T__49 = 50;
agcParser.T__50 = 51;
agcParser.T__51 = 52;
agcParser.T__52 = 53;
agcParser.T__53 = 54;
agcParser.T__54 = 55;
agcParser.T__55 = 56;
agcParser.T__56 = 57;
agcParser.T__57 = 58;
agcParser.T__58 = 59;
agcParser.T__59 = 60;
agcParser.T__60 = 61;
agcParser.T__61 = 62;
agcParser.T__62 = 63;
agcParser.T__63 = 64;
agcParser.T__64 = 65;
agcParser.T__65 = 66;
agcParser.T__66 = 67;
agcParser.T__67 = 68;
agcParser.T__68 = 69;
agcParser.T__69 = 70;
agcParser.T__70 = 71;
agcParser.T__71 = 72;
agcParser.T__72 = 73;
agcParser.T__73 = 74;
agcParser.T__74 = 75;
agcParser.T__75 = 76;
agcParser.T__76 = 77;
agcParser.T__77 = 78;
agcParser.T__78 = 79;
agcParser.T__79 = 80;
agcParser.T__80 = 81;
agcParser.T__81 = 82;
agcParser.T__82 = 83;
agcParser.T__83 = 84;
agcParser.T__84 = 85;
agcParser.T__85 = 86;
agcParser.T__86 = 87;
agcParser.T__87 = 88;
agcParser.T__88 = 89;
agcParser.T__89 = 90;
agcParser.T__90 = 91;
agcParser.T__91 = 92;
agcParser.T__92 = 93;
agcParser.T__93 = 94;
agcParser.T__94 = 95;
agcParser.T__95 = 96;
agcParser.T__96 = 97;
agcParser.T__97 = 98;
agcParser.T__98 = 99;
agcParser.T__99 = 100;
agcParser.T__100 = 101;
agcParser.T__101 = 102;
agcParser.T__102 = 103;
agcParser.T__103 = 104;
agcParser.T__104 = 105;
agcParser.T__105 = 106;
agcParser.T__106 = 107;
agcParser.T__107 = 108;
agcParser.T__108 = 109;
agcParser.T__109 = 110;
agcParser.T__110 = 111;
agcParser.T__111 = 112;
agcParser.T__112 = 113;
agcParser.T__113 = 114;
agcParser.T__114 = 115;
agcParser.T__115 = 116;
agcParser.T__116 = 117;
agcParser.T__117 = 118;
agcParser.T__118 = 119;
agcParser.T__119 = 120;
agcParser.T__120 = 121;
agcParser.T__121 = 122;
agcParser.T__122 = 123;
agcParser.T__123 = 124;
agcParser.T__124 = 125;
agcParser.T__125 = 126;
agcParser.T__126 = 127;
agcParser.T__127 = 128;
agcParser.T__128 = 129;
agcParser.T__129 = 130;
agcParser.T__130 = 131;
agcParser.T__131 = 132;
agcParser.T__132 = 133;
agcParser.T__133 = 134;
agcParser.T__134 = 135;
agcParser.T__135 = 136;
agcParser.T__136 = 137;
agcParser.T__137 = 138;
agcParser.T__138 = 139;
agcParser.T__139 = 140;
agcParser.T__140 = 141;
agcParser.T__141 = 142;
agcParser.T__142 = 143;
agcParser.T__143 = 144;
agcParser.T__144 = 145;
agcParser.T__145 = 146;
agcParser.T__146 = 147;
agcParser.T__147 = 148;
agcParser.T__148 = 149;
agcParser.T__149 = 150;
agcParser.T__150 = 151;
agcParser.T__151 = 152;
agcParser.T__152 = 153;
agcParser.T__153 = 154;
agcParser.T__154 = 155;
agcParser.T__155 = 156;
agcParser.T__156 = 157;
agcParser.T__157 = 158;
agcParser.T__158 = 159;
agcParser.T__159 = 160;
agcParser.T__160 = 161;
agcParser.T__161 = 162;
agcParser.T__162 = 163;
agcParser.T__163 = 164;
agcParser.T__164 = 165;
agcParser.T__165 = 166;
agcParser.T__166 = 167;
agcParser.T__167 = 168;
agcParser.T__168 = 169;
agcParser.T__169 = 170;
agcParser.T__170 = 171;
agcParser.T__171 = 172;
agcParser.T__172 = 173;
agcParser.T__173 = 174;
agcParser.T__174 = 175;
agcParser.T__175 = 176;
agcParser.T__176 = 177;
agcParser.T__177 = 178;
agcParser.T__178 = 179;
agcParser.T__179 = 180;
agcParser.T__180 = 181;
agcParser.T__181 = 182;
agcParser.T__182 = 183;
agcParser.LABEL = 184;
agcParser.INTE = 185;
agcParser.DECIMAL = 186;
agcParser.COMMENT = 187;
agcParser.PLUS = 188;
agcParser.MINUS = 189;
agcParser.TIMES = 190;
agcParser.DIV = 191;
agcParser.COMMA = 192;
agcParser.LPAREN = 193;
agcParser.RPAREN = 194;
agcParser.EOL = 195;
agcParser.WS = 196;

agcParser.RULE_prog = 0;
agcParser.RULE_line = 1;
agcParser.RULE_blank_line = 2;
agcParser.RULE_comment_line = 3;
agcParser.RULE_instruction_line = 4;
agcParser.RULE_erase_line = 5;
agcParser.RULE_assignment_line = 6;
agcParser.RULE_opcodes = 7;
agcParser.RULE_argument = 8;
agcParser.RULE_ws = 9;
agcParser.RULE_eol = 10;
agcParser.RULE_comment = 11;
agcParser.RULE_label = 12;
agcParser.RULE_variable = 13;
agcParser.RULE_expression = 14;
agcParser.RULE_multiplyingExpression = 15;
agcParser.RULE_atom = 16;
agcParser.RULE_inte = 17;
agcParser.RULE_decimal = 18;
agcParser.RULE_register_ = 19;
agcParser.RULE_opcode = 20;
agcParser.RULE_axt_opcode = 21;
agcParser.RULE_pseudo_opcode = 22;
agcParser.RULE_standard_opcode = 23;

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
        this.ruleIndex = agcParser.RULE_prog;
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
	    if(listener instanceof agcListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitProg(this);
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
        this.ruleIndex = agcParser.RULE_line;
    }

	comment_line() {
	    return this.getTypedRuleContext(Comment_lineContext,0);
	};

	blank_line() {
	    return this.getTypedRuleContext(Blank_lineContext,0);
	};

	instruction_line() {
	    return this.getTypedRuleContext(Instruction_lineContext,0);
	};

	erase_line() {
	    return this.getTypedRuleContext(Erase_lineContext,0);
	};

	assignment_line() {
	    return this.getTypedRuleContext(Assignment_lineContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitLine(this);
		}
	}


}



class Blank_lineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = agcParser.RULE_blank_line;
    }

	eol() {
	    return this.getTypedRuleContext(EolContext,0);
	};

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterBlank_line(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitBlank_line(this);
		}
	}


}



class Comment_lineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = agcParser.RULE_comment_line;
    }

	comment() {
	    return this.getTypedRuleContext(CommentContext,0);
	};

	eol() {
	    return this.getTypedRuleContext(EolContext,0);
	};

	ws() {
	    return this.getTypedRuleContext(WsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterComment_line(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitComment_line(this);
		}
	}


}



class Instruction_lineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = agcParser.RULE_instruction_line;
    }

	ws() {
	    return this.getTypedRuleContext(WsContext,0);
	};

	opcodes() {
	    return this.getTypedRuleContext(OpcodesContext,0);
	};

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

	eol = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EolContext);
	    } else {
	        return this.getTypedRuleContext(EolContext,i);
	    }
	};

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	comment_line() {
	    return this.getTypedRuleContext(Comment_lineContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterInstruction_line(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitInstruction_line(this);
		}
	}


}



class Erase_lineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = agcParser.RULE_erase_line;
    }

	ws = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WsContext);
	    } else {
	        return this.getTypedRuleContext(WsContext,i);
	    }
	};

	eol() {
	    return this.getTypedRuleContext(EolContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
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

	comment() {
	    return this.getTypedRuleContext(CommentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterErase_line(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitErase_line(this);
		}
	}


}



class Assignment_lineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = agcParser.RULE_assignment_line;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	eol() {
	    return this.getTypedRuleContext(EolContext,0);
	};

	ws = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WsContext);
	    } else {
	        return this.getTypedRuleContext(WsContext,i);
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

	comment() {
	    return this.getTypedRuleContext(CommentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterAssignment_line(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitAssignment_line(this);
		}
	}


}



class OpcodesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = agcParser.RULE_opcodes;
    }

	opcode = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OpcodeContext);
	    } else {
	        return this.getTypedRuleContext(OpcodeContext,i);
	    }
	};

	ws() {
	    return this.getTypedRuleContext(WsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterOpcodes(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitOpcodes(this);
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
        this.ruleIndex = agcParser.RULE_argument;
    }

	ws = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WsContext);
	    } else {
	        return this.getTypedRuleContext(WsContext,i);
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

	comment() {
	    return this.getTypedRuleContext(CommentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterArgument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitArgument(this);
		}
	}


}



class WsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = agcParser.RULE_ws;
    }

	WS() {
	    return this.getToken(agcParser.WS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterWs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitWs(this);
		}
	}


}



class EolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = agcParser.RULE_eol;
    }

	EOL() {
	    return this.getToken(agcParser.EOL, 0);
	};

	WS() {
	    return this.getToken(agcParser.WS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterEol(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitEol(this);
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
        this.ruleIndex = agcParser.RULE_comment;
    }

	COMMENT() {
	    return this.getToken(agcParser.COMMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterComment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitComment(this);
		}
	}


}



class LabelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = agcParser.RULE_label;
    }

	LABEL() {
	    return this.getToken(agcParser.LABEL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterLabel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitLabel(this);
		}
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = agcParser.RULE_variable;
    }

	LABEL() {
	    return this.getToken(agcParser.LABEL, 0);
	};

	LPAREN() {
	    return this.getToken(agcParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(agcParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitVariable(this);
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
        this.ruleIndex = agcParser.RULE_expression;
    }

	multiplyingExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MultiplyingExpressionContext);
	    } else {
	        return this.getTypedRuleContext(MultiplyingExpressionContext,i);
	    }
	};

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(agcParser.PLUS);
	    } else {
	        return this.getToken(agcParser.PLUS, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(agcParser.MINUS);
	    } else {
	        return this.getToken(agcParser.MINUS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitExpression(this);
		}
	}


}



class MultiplyingExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = agcParser.RULE_multiplyingExpression;
    }

	atom = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AtomContext);
	    } else {
	        return this.getTypedRuleContext(AtomContext,i);
	    }
	};

	TIMES = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(agcParser.TIMES);
	    } else {
	        return this.getToken(agcParser.TIMES, i);
	    }
	};


	DIV = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(agcParser.DIV);
	    } else {
	        return this.getToken(agcParser.DIV, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterMultiplyingExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitMultiplyingExpression(this);
		}
	}


}



class AtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = agcParser.RULE_atom;
    }

	inte() {
	    return this.getTypedRuleContext(InteContext,0);
	};

	decimal() {
	    return this.getTypedRuleContext(DecimalContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	register_() {
	    return this.getTypedRuleContext(Register_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitAtom(this);
		}
	}


}



class InteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = agcParser.RULE_inte;
    }

	INTE() {
	    return this.getToken(agcParser.INTE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterInte(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitInte(this);
		}
	}


}



class DecimalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = agcParser.RULE_decimal;
    }

	DECIMAL() {
	    return this.getToken(agcParser.DECIMAL, 0);
	};

	PLUS() {
	    return this.getToken(agcParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(agcParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterDecimal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitDecimal(this);
		}
	}


}



class Register_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = agcParser.RULE_register_;
    }


	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterRegister_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitRegister_(this);
		}
	}


}



class OpcodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = agcParser.RULE_opcode;
    }

	standard_opcode() {
	    return this.getTypedRuleContext(Standard_opcodeContext,0);
	};

	pseudo_opcode() {
	    return this.getTypedRuleContext(Pseudo_opcodeContext,0);
	};

	axt_opcode() {
	    return this.getTypedRuleContext(Axt_opcodeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterOpcode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitOpcode(this);
		}
	}


}



class Axt_opcodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = agcParser.RULE_axt_opcode;
    }


	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterAxt_opcode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitAxt_opcode(this);
		}
	}


}



class Pseudo_opcodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = agcParser.RULE_pseudo_opcode;
    }


	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterPseudo_opcode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitPseudo_opcode(this);
		}
	}


}



class Standard_opcodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = agcParser.RULE_standard_opcode;
    }


	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterStandard_opcode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitStandard_opcode(this);
		}
	}


}




agcParser.ProgContext = ProgContext; 
agcParser.LineContext = LineContext; 
agcParser.Blank_lineContext = Blank_lineContext; 
agcParser.Comment_lineContext = Comment_lineContext; 
agcParser.Instruction_lineContext = Instruction_lineContext; 
agcParser.Erase_lineContext = Erase_lineContext; 
agcParser.Assignment_lineContext = Assignment_lineContext; 
agcParser.OpcodesContext = OpcodesContext; 
agcParser.ArgumentContext = ArgumentContext; 
agcParser.WsContext = WsContext; 
agcParser.EolContext = EolContext; 
agcParser.CommentContext = CommentContext; 
agcParser.LabelContext = LabelContext; 
agcParser.VariableContext = VariableContext; 
agcParser.ExpressionContext = ExpressionContext; 
agcParser.MultiplyingExpressionContext = MultiplyingExpressionContext; 
agcParser.AtomContext = AtomContext; 
agcParser.InteContext = InteContext; 
agcParser.DecimalContext = DecimalContext; 
agcParser.Register_Context = Register_Context; 
agcParser.OpcodeContext = OpcodeContext; 
agcParser.Axt_opcodeContext = Axt_opcodeContext; 
agcParser.Pseudo_opcodeContext = Pseudo_opcodeContext; 
agcParser.Standard_opcodeContext = Standard_opcodeContext; 
