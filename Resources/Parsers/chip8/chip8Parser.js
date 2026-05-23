// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/chip8/chip8.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import chip8Listener from './chip8Listener.js';
const serializedATN = [4,1,38,288,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,1,0,5,0,76,8,0,10,0,12,0,79,9,0,1,0,1,0,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,118,8,1,1,
2,1,2,1,3,1,3,1,4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,
8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,11,1,11,
1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,14,1,
14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,17,
1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,
19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,22,1,22,
1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,
25,1,25,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,27,1,27,1,27,1,28,1,28,
1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,31,1,
31,1,31,1,31,1,31,1,32,1,32,1,32,1,32,1,32,1,33,1,33,1,33,1,33,1,33,1,34,
1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,
36,1,36,1,36,1,36,0,0,37,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,
36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,0,0,285,0,77,1,
0,0,0,2,117,1,0,0,0,4,119,1,0,0,0,6,121,1,0,0,0,8,123,1,0,0,0,10,126,1,0,
0,0,12,129,1,0,0,0,14,132,1,0,0,0,16,137,1,0,0,0,18,142,1,0,0,0,20,147,1,
0,0,0,22,152,1,0,0,0,24,157,1,0,0,0,26,162,1,0,0,0,28,167,1,0,0,0,30,172,
1,0,0,0,32,177,1,0,0,0,34,182,1,0,0,0,36,187,1,0,0,0,38,194,1,0,0,0,40,199,
1,0,0,0,42,206,1,0,0,0,44,210,1,0,0,0,46,215,1,0,0,0,48,221,1,0,0,0,50,226,
1,0,0,0,52,233,1,0,0,0,54,236,1,0,0,0,56,239,1,0,0,0,58,244,1,0,0,0,60,249,
1,0,0,0,62,254,1,0,0,0,64,259,1,0,0,0,66,264,1,0,0,0,68,269,1,0,0,0,70,274,
1,0,0,0,72,280,1,0,0,0,74,76,3,2,1,0,75,74,1,0,0,0,76,79,1,0,0,0,77,75,1,
0,0,0,77,78,1,0,0,0,78,80,1,0,0,0,79,77,1,0,0,0,80,81,5,0,0,1,81,1,1,0,0,
0,82,118,3,4,2,0,83,118,3,6,3,0,84,118,3,8,4,0,85,118,3,10,5,0,86,118,3,
12,6,0,87,118,3,14,7,0,88,118,3,16,8,0,89,118,3,18,9,0,90,118,3,20,10,0,
91,118,3,22,11,0,92,118,3,24,12,0,93,118,3,26,13,0,94,118,3,28,14,0,95,118,
3,30,15,0,96,118,3,32,16,0,97,118,3,34,17,0,98,118,3,36,18,0,99,118,3,38,
19,0,100,118,3,40,20,0,101,118,3,42,21,0,102,118,3,44,22,0,103,118,3,46,
23,0,104,118,3,48,24,0,105,118,3,50,25,0,106,118,3,52,26,0,107,118,3,54,
27,0,108,118,3,56,28,0,109,118,3,58,29,0,110,118,3,60,30,0,111,118,3,62,
31,0,112,118,3,64,32,0,113,118,3,66,33,0,114,118,3,68,34,0,115,118,3,70,
35,0,116,118,3,72,36,0,117,82,1,0,0,0,117,83,1,0,0,0,117,84,1,0,0,0,117,
85,1,0,0,0,117,86,1,0,0,0,117,87,1,0,0,0,117,88,1,0,0,0,117,89,1,0,0,0,117,
90,1,0,0,0,117,91,1,0,0,0,117,92,1,0,0,0,117,93,1,0,0,0,117,94,1,0,0,0,117,
95,1,0,0,0,117,96,1,0,0,0,117,97,1,0,0,0,117,98,1,0,0,0,117,99,1,0,0,0,117,
100,1,0,0,0,117,101,1,0,0,0,117,102,1,0,0,0,117,103,1,0,0,0,117,104,1,0,
0,0,117,105,1,0,0,0,117,106,1,0,0,0,117,107,1,0,0,0,117,108,1,0,0,0,117,
109,1,0,0,0,117,110,1,0,0,0,117,111,1,0,0,0,117,112,1,0,0,0,117,113,1,0,
0,0,117,114,1,0,0,0,117,115,1,0,0,0,117,116,1,0,0,0,118,3,1,0,0,0,119,120,
5,1,0,0,120,5,1,0,0,0,121,122,5,2,0,0,122,7,1,0,0,0,123,124,5,3,0,0,124,
125,5,35,0,0,125,9,1,0,0,0,126,127,5,4,0,0,127,128,5,35,0,0,128,11,1,0,0,
0,129,130,5,5,0,0,130,131,5,35,0,0,131,13,1,0,0,0,132,133,5,6,0,0,133,134,
5,34,0,0,134,135,5,7,0,0,135,136,5,36,0,0,136,15,1,0,0,0,137,138,5,8,0,0,
138,139,5,34,0,0,139,140,5,7,0,0,140,141,5,36,0,0,141,17,1,0,0,0,142,143,
5,6,0,0,143,144,5,34,0,0,144,145,5,7,0,0,145,146,5,34,0,0,146,19,1,0,0,0,
147,148,5,9,0,0,148,149,5,34,0,0,149,150,5,7,0,0,150,151,5,36,0,0,151,21,
1,0,0,0,152,153,5,10,0,0,153,154,5,34,0,0,154,155,5,7,0,0,155,156,5,36,0,
0,156,23,1,0,0,0,157,158,5,9,0,0,158,159,5,34,0,0,159,160,5,7,0,0,160,161,
5,34,0,0,161,25,1,0,0,0,162,163,5,11,0,0,163,164,5,34,0,0,164,165,5,7,0,
0,165,166,5,34,0,0,166,27,1,0,0,0,167,168,5,12,0,0,168,169,5,34,0,0,169,
170,5,7,0,0,170,171,5,34,0,0,171,29,1,0,0,0,172,173,5,13,0,0,173,174,5,34,
0,0,174,175,5,7,0,0,175,176,5,34,0,0,176,31,1,0,0,0,177,178,5,10,0,0,178,
179,5,34,0,0,179,180,5,7,0,0,180,181,5,34,0,0,181,33,1,0,0,0,182,183,5,14,
0,0,183,184,5,34,0,0,184,185,5,7,0,0,185,186,5,34,0,0,186,35,1,0,0,0,187,
188,5,15,0,0,188,189,5,34,0,0,189,190,5,16,0,0,190,191,5,7,0,0,191,192,5,
34,0,0,192,193,5,17,0,0,193,37,1,0,0,0,194,195,5,18,0,0,195,196,5,34,0,0,
196,197,5,7,0,0,197,198,5,34,0,0,198,39,1,0,0,0,199,200,5,19,0,0,200,201,
5,34,0,0,201,202,5,16,0,0,202,203,5,7,0,0,203,204,5,34,0,0,204,205,5,17,
0,0,205,41,1,0,0,0,206,207,5,34,0,0,207,208,5,7,0,0,208,209,5,34,0,0,209,
43,1,0,0,0,210,211,5,9,0,0,211,212,5,20,0,0,212,213,5,7,0,0,213,214,5,35,
0,0,214,45,1,0,0,0,215,216,5,4,0,0,216,217,5,21,0,0,217,218,5,22,0,0,218,
219,5,7,0,0,219,220,5,35,0,0,220,47,1,0,0,0,221,222,5,23,0,0,222,223,5,34,
0,0,223,224,5,7,0,0,224,225,5,36,0,0,225,49,1,0,0,0,226,227,5,24,0,0,227,
228,5,34,0,0,228,229,5,7,0,0,229,230,5,34,0,0,230,231,5,7,0,0,231,232,5,
37,0,0,232,51,1,0,0,0,233,234,5,25,0,0,234,235,5,34,0,0,235,53,1,0,0,0,236,
237,5,26,0,0,237,238,5,34,0,0,238,55,1,0,0,0,239,240,5,9,0,0,240,241,5,34,
0,0,241,242,5,7,0,0,242,243,5,27,0,0,243,57,1,0,0,0,244,245,5,9,0,0,245,
246,5,34,0,0,246,247,5,7,0,0,247,248,5,28,0,0,248,59,1,0,0,0,249,250,5,9,
0,0,250,251,5,27,0,0,251,252,5,7,0,0,252,253,5,34,0,0,253,61,1,0,0,0,254,
255,5,9,0,0,255,256,5,29,0,0,256,257,5,7,0,0,257,258,5,34,0,0,258,63,1,0,
0,0,259,260,5,10,0,0,260,261,5,20,0,0,261,262,5,7,0,0,262,263,5,34,0,0,263,
65,1,0,0,0,264,265,5,9,0,0,265,266,5,30,0,0,266,267,5,7,0,0,267,268,5,34,
0,0,268,67,1,0,0,0,269,270,5,9,0,0,270,271,5,31,0,0,271,272,5,7,0,0,272,
273,5,34,0,0,273,69,1,0,0,0,274,275,5,32,0,0,275,276,5,20,0,0,276,277,5,
33,0,0,277,278,5,7,0,0,278,279,5,34,0,0,279,71,1,0,0,0,280,281,5,9,0,0,281,
282,5,34,0,0,282,283,5,7,0,0,283,284,5,32,0,0,284,285,5,20,0,0,285,286,5,
33,0,0,286,73,1,0,0,0,2,77,117];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class chip8Parser extends antlr4.Parser {

    static grammarFileName = "chip8.g4";
    static literalNames = [ null, "'CLS'", "'RET'", "'SYS'", "'JP'", "'CALL'", 
                            "'SE'", "','", "'SNE'", "'LD'", "'ADD'", "'OR'", 
                            "'AND'", "'XOR'", "'SUB'", "'SHR'", "'{'", "'}'", 
                            "'SUBN'", "'SHL'", "'I'", "'V'", "'0'", "'RND'", 
                            "'DRW'", "'SKP'", "'SKNP'", "'DT'", "'K'", "'ST'", 
                            "'F'", "'B'", "'['", "']'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "REGISTER", "ADDR", "BYTE", "DIGIT", 
                             "WS" ];
    static ruleNames = [ "file_", "instruction_", "cls", "ret", "sys", "jp", 
                         "call", "se", "sne", "se1", "ld", "add", "ld2", 
                         "or", "and", "xor", "add2", "sub", "shr", "subn", 
                         "shl", "sne2", "ld3", "jp2", "rnd", "drw", "skp", 
                         "sknp", "ld4", "ld5", "ld6", "ld7", "add3", "ld8", 
                         "ld9", "ld10", "ld11" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = chip8Parser.ruleNames;
        this.literalNames = chip8Parser.literalNames;
        this.symbolicNames = chip8Parser.symbolicNames;
    }



	file_() {
	    let localctx = new File_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, chip8Parser.RULE_file_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 126680958) !== 0) || _la===32 || _la===34) {
	            this.state = 74;
	            this.instruction_();
	            this.state = 79;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 80;
	        this.match(chip8Parser.EOF);
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



	instruction_() {
	    let localctx = new Instruction_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, chip8Parser.RULE_instruction_);
	    try {
	        this.state = 117;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 82;
	            this.cls();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 83;
	            this.ret();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 84;
	            this.sys();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 85;
	            this.jp();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 86;
	            this.call();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 87;
	            this.se();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 88;
	            this.sne();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 89;
	            this.se1();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 90;
	            this.ld();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 91;
	            this.add();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 92;
	            this.ld2();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 93;
	            this.or();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 94;
	            this.and();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 95;
	            this.xor();
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 96;
	            this.add2();
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 97;
	            this.sub();
	            break;

	        case 17:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 98;
	            this.shr();
	            break;

	        case 18:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 99;
	            this.subn();
	            break;

	        case 19:
	            this.enterOuterAlt(localctx, 19);
	            this.state = 100;
	            this.shl();
	            break;

	        case 20:
	            this.enterOuterAlt(localctx, 20);
	            this.state = 101;
	            this.sne2();
	            break;

	        case 21:
	            this.enterOuterAlt(localctx, 21);
	            this.state = 102;
	            this.ld3();
	            break;

	        case 22:
	            this.enterOuterAlt(localctx, 22);
	            this.state = 103;
	            this.jp2();
	            break;

	        case 23:
	            this.enterOuterAlt(localctx, 23);
	            this.state = 104;
	            this.rnd();
	            break;

	        case 24:
	            this.enterOuterAlt(localctx, 24);
	            this.state = 105;
	            this.drw();
	            break;

	        case 25:
	            this.enterOuterAlt(localctx, 25);
	            this.state = 106;
	            this.skp();
	            break;

	        case 26:
	            this.enterOuterAlt(localctx, 26);
	            this.state = 107;
	            this.sknp();
	            break;

	        case 27:
	            this.enterOuterAlt(localctx, 27);
	            this.state = 108;
	            this.ld4();
	            break;

	        case 28:
	            this.enterOuterAlt(localctx, 28);
	            this.state = 109;
	            this.ld5();
	            break;

	        case 29:
	            this.enterOuterAlt(localctx, 29);
	            this.state = 110;
	            this.ld6();
	            break;

	        case 30:
	            this.enterOuterAlt(localctx, 30);
	            this.state = 111;
	            this.ld7();
	            break;

	        case 31:
	            this.enterOuterAlt(localctx, 31);
	            this.state = 112;
	            this.add3();
	            break;

	        case 32:
	            this.enterOuterAlt(localctx, 32);
	            this.state = 113;
	            this.ld8();
	            break;

	        case 33:
	            this.enterOuterAlt(localctx, 33);
	            this.state = 114;
	            this.ld9();
	            break;

	        case 34:
	            this.enterOuterAlt(localctx, 34);
	            this.state = 115;
	            this.ld10();
	            break;

	        case 35:
	            this.enterOuterAlt(localctx, 35);
	            this.state = 116;
	            this.ld11();
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



	cls() {
	    let localctx = new ClsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, chip8Parser.RULE_cls);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        this.match(chip8Parser.T__0);
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



	ret() {
	    let localctx = new RetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, chip8Parser.RULE_ret);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this.match(chip8Parser.T__1);
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



	sys() {
	    let localctx = new SysContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, chip8Parser.RULE_sys);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        this.match(chip8Parser.T__2);
	        this.state = 124;
	        this.match(chip8Parser.ADDR);
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



	jp() {
	    let localctx = new JpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, chip8Parser.RULE_jp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this.match(chip8Parser.T__3);
	        this.state = 127;
	        this.match(chip8Parser.ADDR);
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



	call() {
	    let localctx = new CallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, chip8Parser.RULE_call);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this.match(chip8Parser.T__4);
	        this.state = 130;
	        this.match(chip8Parser.ADDR);
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



	se() {
	    let localctx = new SeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, chip8Parser.RULE_se);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 132;
	        this.match(chip8Parser.T__5);
	        this.state = 133;
	        this.match(chip8Parser.REGISTER);
	        this.state = 134;
	        this.match(chip8Parser.T__6);
	        this.state = 135;
	        this.match(chip8Parser.BYTE);
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



	sne() {
	    let localctx = new SneContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, chip8Parser.RULE_sne);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this.match(chip8Parser.T__7);
	        this.state = 138;
	        this.match(chip8Parser.REGISTER);
	        this.state = 139;
	        this.match(chip8Parser.T__6);
	        this.state = 140;
	        this.match(chip8Parser.BYTE);
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



	se1() {
	    let localctx = new Se1Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, chip8Parser.RULE_se1);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 142;
	        this.match(chip8Parser.T__5);
	        this.state = 143;
	        this.match(chip8Parser.REGISTER);
	        this.state = 144;
	        this.match(chip8Parser.T__6);
	        this.state = 145;
	        this.match(chip8Parser.REGISTER);
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



	ld() {
	    let localctx = new LdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, chip8Parser.RULE_ld);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        this.match(chip8Parser.T__8);
	        this.state = 148;
	        this.match(chip8Parser.REGISTER);
	        this.state = 149;
	        this.match(chip8Parser.T__6);
	        this.state = 150;
	        this.match(chip8Parser.BYTE);
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



	add() {
	    let localctx = new AddContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, chip8Parser.RULE_add);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
	        this.match(chip8Parser.T__9);
	        this.state = 153;
	        this.match(chip8Parser.REGISTER);
	        this.state = 154;
	        this.match(chip8Parser.T__6);
	        this.state = 155;
	        this.match(chip8Parser.BYTE);
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



	ld2() {
	    let localctx = new Ld2Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, chip8Parser.RULE_ld2);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this.match(chip8Parser.T__8);
	        this.state = 158;
	        this.match(chip8Parser.REGISTER);
	        this.state = 159;
	        this.match(chip8Parser.T__6);
	        this.state = 160;
	        this.match(chip8Parser.REGISTER);
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



	or() {
	    let localctx = new OrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, chip8Parser.RULE_or);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        this.match(chip8Parser.T__10);
	        this.state = 163;
	        this.match(chip8Parser.REGISTER);
	        this.state = 164;
	        this.match(chip8Parser.T__6);
	        this.state = 165;
	        this.match(chip8Parser.REGISTER);
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



	and() {
	    let localctx = new AndContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, chip8Parser.RULE_and);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this.match(chip8Parser.T__11);
	        this.state = 168;
	        this.match(chip8Parser.REGISTER);
	        this.state = 169;
	        this.match(chip8Parser.T__6);
	        this.state = 170;
	        this.match(chip8Parser.REGISTER);
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



	xor() {
	    let localctx = new XorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, chip8Parser.RULE_xor);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 172;
	        this.match(chip8Parser.T__12);
	        this.state = 173;
	        this.match(chip8Parser.REGISTER);
	        this.state = 174;
	        this.match(chip8Parser.T__6);
	        this.state = 175;
	        this.match(chip8Parser.REGISTER);
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



	add2() {
	    let localctx = new Add2Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, chip8Parser.RULE_add2);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 177;
	        this.match(chip8Parser.T__9);
	        this.state = 178;
	        this.match(chip8Parser.REGISTER);
	        this.state = 179;
	        this.match(chip8Parser.T__6);
	        this.state = 180;
	        this.match(chip8Parser.REGISTER);
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



	sub() {
	    let localctx = new SubContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, chip8Parser.RULE_sub);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 182;
	        this.match(chip8Parser.T__13);
	        this.state = 183;
	        this.match(chip8Parser.REGISTER);
	        this.state = 184;
	        this.match(chip8Parser.T__6);
	        this.state = 185;
	        this.match(chip8Parser.REGISTER);
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



	shr() {
	    let localctx = new ShrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, chip8Parser.RULE_shr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 187;
	        this.match(chip8Parser.T__14);
	        this.state = 188;
	        this.match(chip8Parser.REGISTER);
	        this.state = 189;
	        this.match(chip8Parser.T__15);
	        this.state = 190;
	        this.match(chip8Parser.T__6);
	        this.state = 191;
	        this.match(chip8Parser.REGISTER);
	        this.state = 192;
	        this.match(chip8Parser.T__16);
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



	subn() {
	    let localctx = new SubnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, chip8Parser.RULE_subn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 194;
	        this.match(chip8Parser.T__17);
	        this.state = 195;
	        this.match(chip8Parser.REGISTER);
	        this.state = 196;
	        this.match(chip8Parser.T__6);
	        this.state = 197;
	        this.match(chip8Parser.REGISTER);
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



	shl() {
	    let localctx = new ShlContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, chip8Parser.RULE_shl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199;
	        this.match(chip8Parser.T__18);
	        this.state = 200;
	        this.match(chip8Parser.REGISTER);
	        this.state = 201;
	        this.match(chip8Parser.T__15);
	        this.state = 202;
	        this.match(chip8Parser.T__6);
	        this.state = 203;
	        this.match(chip8Parser.REGISTER);
	        this.state = 204;
	        this.match(chip8Parser.T__16);
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



	sne2() {
	    let localctx = new Sne2Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, chip8Parser.RULE_sne2);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        this.match(chip8Parser.REGISTER);
	        this.state = 207;
	        this.match(chip8Parser.T__6);
	        this.state = 208;
	        this.match(chip8Parser.REGISTER);
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



	ld3() {
	    let localctx = new Ld3Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, chip8Parser.RULE_ld3);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 210;
	        this.match(chip8Parser.T__8);
	        this.state = 211;
	        this.match(chip8Parser.T__19);
	        this.state = 212;
	        this.match(chip8Parser.T__6);
	        this.state = 213;
	        this.match(chip8Parser.ADDR);
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



	jp2() {
	    let localctx = new Jp2Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, chip8Parser.RULE_jp2);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215;
	        this.match(chip8Parser.T__3);
	        this.state = 216;
	        this.match(chip8Parser.T__20);
	        this.state = 217;
	        this.match(chip8Parser.T__21);
	        this.state = 218;
	        this.match(chip8Parser.T__6);
	        this.state = 219;
	        this.match(chip8Parser.ADDR);
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



	rnd() {
	    let localctx = new RndContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, chip8Parser.RULE_rnd);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 221;
	        this.match(chip8Parser.T__22);
	        this.state = 222;
	        this.match(chip8Parser.REGISTER);
	        this.state = 223;
	        this.match(chip8Parser.T__6);
	        this.state = 224;
	        this.match(chip8Parser.BYTE);
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



	drw() {
	    let localctx = new DrwContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, chip8Parser.RULE_drw);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 226;
	        this.match(chip8Parser.T__23);
	        this.state = 227;
	        this.match(chip8Parser.REGISTER);
	        this.state = 228;
	        this.match(chip8Parser.T__6);
	        this.state = 229;
	        this.match(chip8Parser.REGISTER);
	        this.state = 230;
	        this.match(chip8Parser.T__6);
	        this.state = 231;
	        this.match(chip8Parser.DIGIT);
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



	skp() {
	    let localctx = new SkpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, chip8Parser.RULE_skp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 233;
	        this.match(chip8Parser.T__24);
	        this.state = 234;
	        this.match(chip8Parser.REGISTER);
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



	sknp() {
	    let localctx = new SknpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, chip8Parser.RULE_sknp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 236;
	        this.match(chip8Parser.T__25);
	        this.state = 237;
	        this.match(chip8Parser.REGISTER);
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



	ld4() {
	    let localctx = new Ld4Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, chip8Parser.RULE_ld4);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 239;
	        this.match(chip8Parser.T__8);
	        this.state = 240;
	        this.match(chip8Parser.REGISTER);
	        this.state = 241;
	        this.match(chip8Parser.T__6);
	        this.state = 242;
	        this.match(chip8Parser.T__26);
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



	ld5() {
	    let localctx = new Ld5Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, chip8Parser.RULE_ld5);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 244;
	        this.match(chip8Parser.T__8);
	        this.state = 245;
	        this.match(chip8Parser.REGISTER);
	        this.state = 246;
	        this.match(chip8Parser.T__6);
	        this.state = 247;
	        this.match(chip8Parser.T__27);
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



	ld6() {
	    let localctx = new Ld6Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, chip8Parser.RULE_ld6);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 249;
	        this.match(chip8Parser.T__8);
	        this.state = 250;
	        this.match(chip8Parser.T__26);
	        this.state = 251;
	        this.match(chip8Parser.T__6);
	        this.state = 252;
	        this.match(chip8Parser.REGISTER);
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



	ld7() {
	    let localctx = new Ld7Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, chip8Parser.RULE_ld7);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 254;
	        this.match(chip8Parser.T__8);
	        this.state = 255;
	        this.match(chip8Parser.T__28);
	        this.state = 256;
	        this.match(chip8Parser.T__6);
	        this.state = 257;
	        this.match(chip8Parser.REGISTER);
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



	add3() {
	    let localctx = new Add3Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, chip8Parser.RULE_add3);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 259;
	        this.match(chip8Parser.T__9);
	        this.state = 260;
	        this.match(chip8Parser.T__19);
	        this.state = 261;
	        this.match(chip8Parser.T__6);
	        this.state = 262;
	        this.match(chip8Parser.REGISTER);
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



	ld8() {
	    let localctx = new Ld8Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, chip8Parser.RULE_ld8);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 264;
	        this.match(chip8Parser.T__8);
	        this.state = 265;
	        this.match(chip8Parser.T__29);
	        this.state = 266;
	        this.match(chip8Parser.T__6);
	        this.state = 267;
	        this.match(chip8Parser.REGISTER);
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



	ld9() {
	    let localctx = new Ld9Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, chip8Parser.RULE_ld9);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 269;
	        this.match(chip8Parser.T__8);
	        this.state = 270;
	        this.match(chip8Parser.T__30);
	        this.state = 271;
	        this.match(chip8Parser.T__6);
	        this.state = 272;
	        this.match(chip8Parser.REGISTER);
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



	ld10() {
	    let localctx = new Ld10Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, chip8Parser.RULE_ld10);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 274;
	        this.match(chip8Parser.T__31);
	        this.state = 275;
	        this.match(chip8Parser.T__19);
	        this.state = 276;
	        this.match(chip8Parser.T__32);
	        this.state = 277;
	        this.match(chip8Parser.T__6);
	        this.state = 278;
	        this.match(chip8Parser.REGISTER);
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



	ld11() {
	    let localctx = new Ld11Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, chip8Parser.RULE_ld11);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 280;
	        this.match(chip8Parser.T__8);
	        this.state = 281;
	        this.match(chip8Parser.REGISTER);
	        this.state = 282;
	        this.match(chip8Parser.T__6);
	        this.state = 283;
	        this.match(chip8Parser.T__31);
	        this.state = 284;
	        this.match(chip8Parser.T__19);
	        this.state = 285;
	        this.match(chip8Parser.T__32);
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

chip8Parser.EOF = antlr4.Token.EOF;
chip8Parser.T__0 = 1;
chip8Parser.T__1 = 2;
chip8Parser.T__2 = 3;
chip8Parser.T__3 = 4;
chip8Parser.T__4 = 5;
chip8Parser.T__5 = 6;
chip8Parser.T__6 = 7;
chip8Parser.T__7 = 8;
chip8Parser.T__8 = 9;
chip8Parser.T__9 = 10;
chip8Parser.T__10 = 11;
chip8Parser.T__11 = 12;
chip8Parser.T__12 = 13;
chip8Parser.T__13 = 14;
chip8Parser.T__14 = 15;
chip8Parser.T__15 = 16;
chip8Parser.T__16 = 17;
chip8Parser.T__17 = 18;
chip8Parser.T__18 = 19;
chip8Parser.T__19 = 20;
chip8Parser.T__20 = 21;
chip8Parser.T__21 = 22;
chip8Parser.T__22 = 23;
chip8Parser.T__23 = 24;
chip8Parser.T__24 = 25;
chip8Parser.T__25 = 26;
chip8Parser.T__26 = 27;
chip8Parser.T__27 = 28;
chip8Parser.T__28 = 29;
chip8Parser.T__29 = 30;
chip8Parser.T__30 = 31;
chip8Parser.T__31 = 32;
chip8Parser.T__32 = 33;
chip8Parser.REGISTER = 34;
chip8Parser.ADDR = 35;
chip8Parser.BYTE = 36;
chip8Parser.DIGIT = 37;
chip8Parser.WS = 38;

chip8Parser.RULE_file_ = 0;
chip8Parser.RULE_instruction_ = 1;
chip8Parser.RULE_cls = 2;
chip8Parser.RULE_ret = 3;
chip8Parser.RULE_sys = 4;
chip8Parser.RULE_jp = 5;
chip8Parser.RULE_call = 6;
chip8Parser.RULE_se = 7;
chip8Parser.RULE_sne = 8;
chip8Parser.RULE_se1 = 9;
chip8Parser.RULE_ld = 10;
chip8Parser.RULE_add = 11;
chip8Parser.RULE_ld2 = 12;
chip8Parser.RULE_or = 13;
chip8Parser.RULE_and = 14;
chip8Parser.RULE_xor = 15;
chip8Parser.RULE_add2 = 16;
chip8Parser.RULE_sub = 17;
chip8Parser.RULE_shr = 18;
chip8Parser.RULE_subn = 19;
chip8Parser.RULE_shl = 20;
chip8Parser.RULE_sne2 = 21;
chip8Parser.RULE_ld3 = 22;
chip8Parser.RULE_jp2 = 23;
chip8Parser.RULE_rnd = 24;
chip8Parser.RULE_drw = 25;
chip8Parser.RULE_skp = 26;
chip8Parser.RULE_sknp = 27;
chip8Parser.RULE_ld4 = 28;
chip8Parser.RULE_ld5 = 29;
chip8Parser.RULE_ld6 = 30;
chip8Parser.RULE_ld7 = 31;
chip8Parser.RULE_add3 = 32;
chip8Parser.RULE_ld8 = 33;
chip8Parser.RULE_ld9 = 34;
chip8Parser.RULE_ld10 = 35;
chip8Parser.RULE_ld11 = 36;

class File_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_file_;
    }

	EOF() {
	    return this.getToken(chip8Parser.EOF, 0);
	};

	instruction_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Instruction_Context);
	    } else {
	        return this.getTypedRuleContext(Instruction_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterFile_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitFile_(this);
		}
	}


}



class Instruction_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_instruction_;
    }

	cls() {
	    return this.getTypedRuleContext(ClsContext,0);
	};

	ret() {
	    return this.getTypedRuleContext(RetContext,0);
	};

	sys() {
	    return this.getTypedRuleContext(SysContext,0);
	};

	jp() {
	    return this.getTypedRuleContext(JpContext,0);
	};

	call() {
	    return this.getTypedRuleContext(CallContext,0);
	};

	se() {
	    return this.getTypedRuleContext(SeContext,0);
	};

	sne() {
	    return this.getTypedRuleContext(SneContext,0);
	};

	se1() {
	    return this.getTypedRuleContext(Se1Context,0);
	};

	ld() {
	    return this.getTypedRuleContext(LdContext,0);
	};

	add() {
	    return this.getTypedRuleContext(AddContext,0);
	};

	ld2() {
	    return this.getTypedRuleContext(Ld2Context,0);
	};

	or() {
	    return this.getTypedRuleContext(OrContext,0);
	};

	and() {
	    return this.getTypedRuleContext(AndContext,0);
	};

	xor() {
	    return this.getTypedRuleContext(XorContext,0);
	};

	add2() {
	    return this.getTypedRuleContext(Add2Context,0);
	};

	sub() {
	    return this.getTypedRuleContext(SubContext,0);
	};

	shr() {
	    return this.getTypedRuleContext(ShrContext,0);
	};

	subn() {
	    return this.getTypedRuleContext(SubnContext,0);
	};

	shl() {
	    return this.getTypedRuleContext(ShlContext,0);
	};

	sne2() {
	    return this.getTypedRuleContext(Sne2Context,0);
	};

	ld3() {
	    return this.getTypedRuleContext(Ld3Context,0);
	};

	jp2() {
	    return this.getTypedRuleContext(Jp2Context,0);
	};

	rnd() {
	    return this.getTypedRuleContext(RndContext,0);
	};

	drw() {
	    return this.getTypedRuleContext(DrwContext,0);
	};

	skp() {
	    return this.getTypedRuleContext(SkpContext,0);
	};

	sknp() {
	    return this.getTypedRuleContext(SknpContext,0);
	};

	ld4() {
	    return this.getTypedRuleContext(Ld4Context,0);
	};

	ld5() {
	    return this.getTypedRuleContext(Ld5Context,0);
	};

	ld6() {
	    return this.getTypedRuleContext(Ld6Context,0);
	};

	ld7() {
	    return this.getTypedRuleContext(Ld7Context,0);
	};

	add3() {
	    return this.getTypedRuleContext(Add3Context,0);
	};

	ld8() {
	    return this.getTypedRuleContext(Ld8Context,0);
	};

	ld9() {
	    return this.getTypedRuleContext(Ld9Context,0);
	};

	ld10() {
	    return this.getTypedRuleContext(Ld10Context,0);
	};

	ld11() {
	    return this.getTypedRuleContext(Ld11Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterInstruction_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitInstruction_(this);
		}
	}


}



class ClsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_cls;
    }


	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterCls(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitCls(this);
		}
	}


}



class RetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_ret;
    }


	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterRet(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitRet(this);
		}
	}


}



class SysContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_sys;
    }

	ADDR() {
	    return this.getToken(chip8Parser.ADDR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterSys(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitSys(this);
		}
	}


}



class JpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_jp;
    }

	ADDR() {
	    return this.getToken(chip8Parser.ADDR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterJp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitJp(this);
		}
	}


}



class CallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_call;
    }

	ADDR() {
	    return this.getToken(chip8Parser.ADDR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitCall(this);
		}
	}


}



class SeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_se;
    }

	REGISTER() {
	    return this.getToken(chip8Parser.REGISTER, 0);
	};

	BYTE() {
	    return this.getToken(chip8Parser.BYTE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterSe(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitSe(this);
		}
	}


}



class SneContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_sne;
    }

	REGISTER() {
	    return this.getToken(chip8Parser.REGISTER, 0);
	};

	BYTE() {
	    return this.getToken(chip8Parser.BYTE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterSne(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitSne(this);
		}
	}


}



class Se1Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_se1;
    }

	REGISTER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(chip8Parser.REGISTER);
	    } else {
	        return this.getToken(chip8Parser.REGISTER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterSe1(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitSe1(this);
		}
	}


}



class LdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_ld;
    }

	REGISTER() {
	    return this.getToken(chip8Parser.REGISTER, 0);
	};

	BYTE() {
	    return this.getToken(chip8Parser.BYTE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterLd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitLd(this);
		}
	}


}



class AddContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_add;
    }

	REGISTER() {
	    return this.getToken(chip8Parser.REGISTER, 0);
	};

	BYTE() {
	    return this.getToken(chip8Parser.BYTE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterAdd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitAdd(this);
		}
	}


}



class Ld2Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_ld2;
    }

	REGISTER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(chip8Parser.REGISTER);
	    } else {
	        return this.getToken(chip8Parser.REGISTER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterLd2(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitLd2(this);
		}
	}


}



class OrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_or;
    }

	REGISTER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(chip8Parser.REGISTER);
	    } else {
	        return this.getToken(chip8Parser.REGISTER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterOr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitOr(this);
		}
	}


}



class AndContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_and;
    }

	REGISTER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(chip8Parser.REGISTER);
	    } else {
	        return this.getToken(chip8Parser.REGISTER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterAnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitAnd(this);
		}
	}


}



class XorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_xor;
    }

	REGISTER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(chip8Parser.REGISTER);
	    } else {
	        return this.getToken(chip8Parser.REGISTER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterXor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitXor(this);
		}
	}


}



class Add2Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_add2;
    }

	REGISTER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(chip8Parser.REGISTER);
	    } else {
	        return this.getToken(chip8Parser.REGISTER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterAdd2(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitAdd2(this);
		}
	}


}



class SubContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_sub;
    }

	REGISTER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(chip8Parser.REGISTER);
	    } else {
	        return this.getToken(chip8Parser.REGISTER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterSub(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitSub(this);
		}
	}


}



class ShrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_shr;
    }

	REGISTER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(chip8Parser.REGISTER);
	    } else {
	        return this.getToken(chip8Parser.REGISTER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterShr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitShr(this);
		}
	}


}



class SubnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_subn;
    }

	REGISTER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(chip8Parser.REGISTER);
	    } else {
	        return this.getToken(chip8Parser.REGISTER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterSubn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitSubn(this);
		}
	}


}



class ShlContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_shl;
    }

	REGISTER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(chip8Parser.REGISTER);
	    } else {
	        return this.getToken(chip8Parser.REGISTER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterShl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitShl(this);
		}
	}


}



class Sne2Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_sne2;
    }

	REGISTER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(chip8Parser.REGISTER);
	    } else {
	        return this.getToken(chip8Parser.REGISTER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterSne2(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitSne2(this);
		}
	}


}



class Ld3Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_ld3;
    }

	ADDR() {
	    return this.getToken(chip8Parser.ADDR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterLd3(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitLd3(this);
		}
	}


}



class Jp2Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_jp2;
    }

	ADDR() {
	    return this.getToken(chip8Parser.ADDR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterJp2(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitJp2(this);
		}
	}


}



class RndContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_rnd;
    }

	REGISTER() {
	    return this.getToken(chip8Parser.REGISTER, 0);
	};

	BYTE() {
	    return this.getToken(chip8Parser.BYTE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterRnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitRnd(this);
		}
	}


}



class DrwContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_drw;
    }

	REGISTER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(chip8Parser.REGISTER);
	    } else {
	        return this.getToken(chip8Parser.REGISTER, i);
	    }
	};


	DIGIT() {
	    return this.getToken(chip8Parser.DIGIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterDrw(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitDrw(this);
		}
	}


}



class SkpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_skp;
    }

	REGISTER() {
	    return this.getToken(chip8Parser.REGISTER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterSkp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitSkp(this);
		}
	}


}



class SknpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_sknp;
    }

	REGISTER() {
	    return this.getToken(chip8Parser.REGISTER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterSknp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitSknp(this);
		}
	}


}



class Ld4Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_ld4;
    }

	REGISTER() {
	    return this.getToken(chip8Parser.REGISTER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterLd4(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitLd4(this);
		}
	}


}



class Ld5Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_ld5;
    }

	REGISTER() {
	    return this.getToken(chip8Parser.REGISTER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterLd5(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitLd5(this);
		}
	}


}



class Ld6Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_ld6;
    }

	REGISTER() {
	    return this.getToken(chip8Parser.REGISTER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterLd6(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitLd6(this);
		}
	}


}



class Ld7Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_ld7;
    }

	REGISTER() {
	    return this.getToken(chip8Parser.REGISTER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterLd7(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitLd7(this);
		}
	}


}



class Add3Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_add3;
    }

	REGISTER() {
	    return this.getToken(chip8Parser.REGISTER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterAdd3(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitAdd3(this);
		}
	}


}



class Ld8Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_ld8;
    }

	REGISTER() {
	    return this.getToken(chip8Parser.REGISTER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterLd8(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitLd8(this);
		}
	}


}



class Ld9Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_ld9;
    }

	REGISTER() {
	    return this.getToken(chip8Parser.REGISTER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterLd9(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitLd9(this);
		}
	}


}



class Ld10Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_ld10;
    }

	REGISTER() {
	    return this.getToken(chip8Parser.REGISTER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterLd10(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitLd10(this);
		}
	}


}



class Ld11Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = chip8Parser.RULE_ld11;
    }

	REGISTER() {
	    return this.getToken(chip8Parser.REGISTER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.enterLd11(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof chip8Listener ) {
	        listener.exitLd11(this);
		}
	}


}




chip8Parser.File_Context = File_Context; 
chip8Parser.Instruction_Context = Instruction_Context; 
chip8Parser.ClsContext = ClsContext; 
chip8Parser.RetContext = RetContext; 
chip8Parser.SysContext = SysContext; 
chip8Parser.JpContext = JpContext; 
chip8Parser.CallContext = CallContext; 
chip8Parser.SeContext = SeContext; 
chip8Parser.SneContext = SneContext; 
chip8Parser.Se1Context = Se1Context; 
chip8Parser.LdContext = LdContext; 
chip8Parser.AddContext = AddContext; 
chip8Parser.Ld2Context = Ld2Context; 
chip8Parser.OrContext = OrContext; 
chip8Parser.AndContext = AndContext; 
chip8Parser.XorContext = XorContext; 
chip8Parser.Add2Context = Add2Context; 
chip8Parser.SubContext = SubContext; 
chip8Parser.ShrContext = ShrContext; 
chip8Parser.SubnContext = SubnContext; 
chip8Parser.ShlContext = ShlContext; 
chip8Parser.Sne2Context = Sne2Context; 
chip8Parser.Ld3Context = Ld3Context; 
chip8Parser.Jp2Context = Jp2Context; 
chip8Parser.RndContext = RndContext; 
chip8Parser.DrwContext = DrwContext; 
chip8Parser.SkpContext = SkpContext; 
chip8Parser.SknpContext = SknpContext; 
chip8Parser.Ld4Context = Ld4Context; 
chip8Parser.Ld5Context = Ld5Context; 
chip8Parser.Ld6Context = Ld6Context; 
chip8Parser.Ld7Context = Ld7Context; 
chip8Parser.Add3Context = Add3Context; 
chip8Parser.Ld8Context = Ld8Context; 
chip8Parser.Ld9Context = Ld9Context; 
chip8Parser.Ld10Context = Ld10Context; 
chip8Parser.Ld11Context = Ld11Context; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
