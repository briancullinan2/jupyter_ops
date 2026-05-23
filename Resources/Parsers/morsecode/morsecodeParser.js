// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/morsecode/morsecode.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import morsecodeListener from './morsecodeListener.js';
const serializedATN = [4,1,4,292,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,
27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,34,
2,35,7,35,2,36,7,36,2,37,7,37,1,0,1,0,1,0,4,0,80,8,0,11,0,12,0,81,1,0,1,
0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,3,1,122,8,1,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,5,1,
5,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,
9,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,13,1,13,
1,13,1,13,1,13,1,14,1,14,1,14,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,17,1,
17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,20,1,20,
1,20,1,20,1,21,1,21,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,24,1,
24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,27,1,27,
1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,
29,1,30,1,30,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,31,1,32,1,32,
1,32,1,32,1,32,1,32,1,33,1,33,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,34,1,
34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,36,1,37,
1,37,1,37,1,37,1,37,1,37,1,37,0,0,38,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,
0,0,289,0,76,1,0,0,0,2,121,1,0,0,0,4,123,1,0,0,0,6,126,1,0,0,0,8,131,1,0,
0,0,10,136,1,0,0,0,12,140,1,0,0,0,14,142,1,0,0,0,16,147,1,0,0,0,18,151,1,
0,0,0,20,156,1,0,0,0,22,159,1,0,0,0,24,164,1,0,0,0,26,168,1,0,0,0,28,173,
1,0,0,0,30,176,1,0,0,0,32,179,1,0,0,0,34,183,1,0,0,0,36,188,1,0,0,0,38,193,
1,0,0,0,40,197,1,0,0,0,42,201,1,0,0,0,44,203,1,0,0,0,46,207,1,0,0,0,48,212,
1,0,0,0,50,216,1,0,0,0,52,221,1,0,0,0,54,226,1,0,0,0,56,231,1,0,0,0,58,237,
1,0,0,0,60,243,1,0,0,0,62,249,1,0,0,0,64,255,1,0,0,0,66,261,1,0,0,0,68,267,
1,0,0,0,70,273,1,0,0,0,72,279,1,0,0,0,74,285,1,0,0,0,76,79,3,2,1,0,77,78,
5,3,0,0,78,80,3,2,1,0,79,77,1,0,0,0,80,81,1,0,0,0,81,79,1,0,0,0,81,82,1,
0,0,0,82,83,1,0,0,0,83,84,5,0,0,1,84,1,1,0,0,0,85,122,3,4,2,0,86,122,3,6,
3,0,87,122,3,8,4,0,88,122,3,10,5,0,89,122,3,12,6,0,90,122,3,14,7,0,91,122,
3,16,8,0,92,122,3,18,9,0,93,122,3,20,10,0,94,122,3,22,11,0,95,122,3,24,12,
0,96,122,3,26,13,0,97,122,3,28,14,0,98,122,3,30,15,0,99,122,3,32,16,0,100,
122,3,34,17,0,101,122,3,36,18,0,102,122,3,38,19,0,103,122,3,40,20,0,104,
122,3,42,21,0,105,122,3,44,22,0,106,122,3,46,23,0,107,122,3,48,24,0,108,
122,3,50,25,0,109,122,3,52,26,0,110,122,3,54,27,0,111,122,3,56,28,0,112,
122,3,58,29,0,113,122,3,60,30,0,114,122,3,62,31,0,115,122,3,64,32,0,116,
122,3,66,33,0,117,122,3,68,34,0,118,122,3,70,35,0,119,122,3,72,36,0,120,
122,3,74,37,0,121,85,1,0,0,0,121,86,1,0,0,0,121,87,1,0,0,0,121,88,1,0,0,
0,121,89,1,0,0,0,121,90,1,0,0,0,121,91,1,0,0,0,121,92,1,0,0,0,121,93,1,0,
0,0,121,94,1,0,0,0,121,95,1,0,0,0,121,96,1,0,0,0,121,97,1,0,0,0,121,98,1,
0,0,0,121,99,1,0,0,0,121,100,1,0,0,0,121,101,1,0,0,0,121,102,1,0,0,0,121,
103,1,0,0,0,121,104,1,0,0,0,121,105,1,0,0,0,121,106,1,0,0,0,121,107,1,0,
0,0,121,108,1,0,0,0,121,109,1,0,0,0,121,110,1,0,0,0,121,111,1,0,0,0,121,
112,1,0,0,0,121,113,1,0,0,0,121,114,1,0,0,0,121,115,1,0,0,0,121,116,1,0,
0,0,121,117,1,0,0,0,121,118,1,0,0,0,121,119,1,0,0,0,121,120,1,0,0,0,122,
3,1,0,0,0,123,124,5,1,0,0,124,125,5,2,0,0,125,5,1,0,0,0,126,127,5,2,0,0,
127,128,5,1,0,0,128,129,5,1,0,0,129,130,5,1,0,0,130,7,1,0,0,0,131,132,5,
2,0,0,132,133,5,1,0,0,133,134,5,2,0,0,134,135,5,1,0,0,135,9,1,0,0,0,136,
137,5,2,0,0,137,138,5,1,0,0,138,139,5,1,0,0,139,11,1,0,0,0,140,141,5,1,0,
0,141,13,1,0,0,0,142,143,5,1,0,0,143,144,5,1,0,0,144,145,5,2,0,0,145,146,
5,1,0,0,146,15,1,0,0,0,147,148,5,2,0,0,148,149,5,2,0,0,149,150,5,1,0,0,150,
17,1,0,0,0,151,152,5,1,0,0,152,153,5,1,0,0,153,154,5,1,0,0,154,155,5,1,0,
0,155,19,1,0,0,0,156,157,5,1,0,0,157,158,5,1,0,0,158,21,1,0,0,0,159,160,
5,1,0,0,160,161,5,2,0,0,161,162,5,2,0,0,162,163,5,2,0,0,163,23,1,0,0,0,164,
165,5,2,0,0,165,166,5,1,0,0,166,167,5,2,0,0,167,25,1,0,0,0,168,169,5,1,0,
0,169,170,5,2,0,0,170,171,5,1,0,0,171,172,5,1,0,0,172,27,1,0,0,0,173,174,
5,2,0,0,174,175,5,2,0,0,175,29,1,0,0,0,176,177,5,2,0,0,177,178,5,1,0,0,178,
31,1,0,0,0,179,180,5,2,0,0,180,181,5,2,0,0,181,182,5,2,0,0,182,33,1,0,0,
0,183,184,5,1,0,0,184,185,5,2,0,0,185,186,5,2,0,0,186,187,5,1,0,0,187,35,
1,0,0,0,188,189,5,2,0,0,189,190,5,2,0,0,190,191,5,1,0,0,191,192,5,2,0,0,
192,37,1,0,0,0,193,194,5,1,0,0,194,195,5,2,0,0,195,196,5,1,0,0,196,39,1,
0,0,0,197,198,5,1,0,0,198,199,5,1,0,0,199,200,5,1,0,0,200,41,1,0,0,0,201,
202,5,2,0,0,202,43,1,0,0,0,203,204,5,1,0,0,204,205,5,1,0,0,205,206,5,2,0,
0,206,45,1,0,0,0,207,208,5,1,0,0,208,209,5,1,0,0,209,210,5,1,0,0,210,211,
5,2,0,0,211,47,1,0,0,0,212,213,5,1,0,0,213,214,5,2,0,0,214,215,5,2,0,0,215,
49,1,0,0,0,216,217,5,2,0,0,217,218,5,1,0,0,218,219,5,1,0,0,219,220,5,2,0,
0,220,51,1,0,0,0,221,222,5,2,0,0,222,223,5,1,0,0,223,224,5,2,0,0,224,225,
5,2,0,0,225,53,1,0,0,0,226,227,5,2,0,0,227,228,5,2,0,0,228,229,5,1,0,0,229,
230,5,1,0,0,230,55,1,0,0,0,231,232,5,1,0,0,232,233,5,2,0,0,233,234,5,2,0,
0,234,235,5,2,0,0,235,236,5,2,0,0,236,57,1,0,0,0,237,238,5,1,0,0,238,239,
5,1,0,0,239,240,5,2,0,0,240,241,5,2,0,0,241,242,5,2,0,0,242,59,1,0,0,0,243,
244,5,1,0,0,244,245,5,1,0,0,245,246,5,1,0,0,246,247,5,2,0,0,247,248,5,2,
0,0,248,61,1,0,0,0,249,250,5,1,0,0,250,251,5,1,0,0,251,252,5,1,0,0,252,253,
5,1,0,0,253,254,5,2,0,0,254,63,1,0,0,0,255,256,5,1,0,0,256,257,5,1,0,0,257,
258,5,1,0,0,258,259,5,1,0,0,259,260,5,1,0,0,260,65,1,0,0,0,261,262,5,2,0,
0,262,263,5,1,0,0,263,264,5,1,0,0,264,265,5,1,0,0,265,266,5,1,0,0,266,67,
1,0,0,0,267,268,5,2,0,0,268,269,5,2,0,0,269,270,5,1,0,0,270,271,5,1,0,0,
271,272,5,1,0,0,272,69,1,0,0,0,273,274,5,2,0,0,274,275,5,2,0,0,275,276,5,
2,0,0,276,277,5,1,0,0,277,278,5,1,0,0,278,71,1,0,0,0,279,280,5,2,0,0,280,
281,5,2,0,0,281,282,5,2,0,0,282,283,5,2,0,0,283,284,5,1,0,0,284,73,1,0,0,
0,285,286,5,2,0,0,286,287,5,2,0,0,287,288,5,2,0,0,288,289,5,2,0,0,289,290,
5,2,0,0,290,75,1,0,0,0,2,81,121];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class morsecodeParser extends antlr4.Parser {

    static grammarFileName = "morsecode.g4";
    static literalNames = [ null, "'.'", "'-'", "' '" ];
    static symbolicNames = [ null, "DOT", "DASH", "SPACE", "WS" ];
    static ruleNames = [ "morsecode", "letter", "a", "b", "c", "d", "e", 
                         "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
                         "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", 
                         "z", "one", "two", "three", "four", "five", "six", 
                         "seven", "eight", "nine", "zero" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = morsecodeParser.ruleNames;
        this.literalNames = morsecodeParser.literalNames;
        this.symbolicNames = morsecodeParser.symbolicNames;
    }



	morsecode() {
	    let localctx = new MorsecodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, morsecodeParser.RULE_morsecode);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.letter();
	        this.state = 79; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 77;
	            this.match(morsecodeParser.SPACE);
	            this.state = 78;
	            this.letter();
	            this.state = 81; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===3);
	        this.state = 83;
	        this.match(morsecodeParser.EOF);
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



	letter() {
	    let localctx = new LetterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, morsecodeParser.RULE_letter);
	    try {
	        this.state = 121;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 85;
	            this.a();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 86;
	            this.b();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 87;
	            this.c();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 88;
	            this.d();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 89;
	            this.e();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 90;
	            this.f();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 91;
	            this.g();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 92;
	            this.h();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 93;
	            this.i();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 94;
	            this.j();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 95;
	            this.k();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 96;
	            this.l();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 97;
	            this.m();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 98;
	            this.n();
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 99;
	            this.o();
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 100;
	            this.p();
	            break;

	        case 17:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 101;
	            this.q();
	            break;

	        case 18:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 102;
	            this.r();
	            break;

	        case 19:
	            this.enterOuterAlt(localctx, 19);
	            this.state = 103;
	            this.s();
	            break;

	        case 20:
	            this.enterOuterAlt(localctx, 20);
	            this.state = 104;
	            this.t();
	            break;

	        case 21:
	            this.enterOuterAlt(localctx, 21);
	            this.state = 105;
	            this.u();
	            break;

	        case 22:
	            this.enterOuterAlt(localctx, 22);
	            this.state = 106;
	            this.v();
	            break;

	        case 23:
	            this.enterOuterAlt(localctx, 23);
	            this.state = 107;
	            this.w();
	            break;

	        case 24:
	            this.enterOuterAlt(localctx, 24);
	            this.state = 108;
	            this.x();
	            break;

	        case 25:
	            this.enterOuterAlt(localctx, 25);
	            this.state = 109;
	            this.y();
	            break;

	        case 26:
	            this.enterOuterAlt(localctx, 26);
	            this.state = 110;
	            this.z();
	            break;

	        case 27:
	            this.enterOuterAlt(localctx, 27);
	            this.state = 111;
	            this.one();
	            break;

	        case 28:
	            this.enterOuterAlt(localctx, 28);
	            this.state = 112;
	            this.two();
	            break;

	        case 29:
	            this.enterOuterAlt(localctx, 29);
	            this.state = 113;
	            this.three();
	            break;

	        case 30:
	            this.enterOuterAlt(localctx, 30);
	            this.state = 114;
	            this.four();
	            break;

	        case 31:
	            this.enterOuterAlt(localctx, 31);
	            this.state = 115;
	            this.five();
	            break;

	        case 32:
	            this.enterOuterAlt(localctx, 32);
	            this.state = 116;
	            this.six();
	            break;

	        case 33:
	            this.enterOuterAlt(localctx, 33);
	            this.state = 117;
	            this.seven();
	            break;

	        case 34:
	            this.enterOuterAlt(localctx, 34);
	            this.state = 118;
	            this.eight();
	            break;

	        case 35:
	            this.enterOuterAlt(localctx, 35);
	            this.state = 119;
	            this.nine();
	            break;

	        case 36:
	            this.enterOuterAlt(localctx, 36);
	            this.state = 120;
	            this.zero();
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



	a() {
	    let localctx = new AContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, morsecodeParser.RULE_a);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        this.match(morsecodeParser.DOT);
	        this.state = 124;
	        this.match(morsecodeParser.DASH);
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



	b() {
	    let localctx = new BContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, morsecodeParser.RULE_b);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this.match(morsecodeParser.DASH);
	        this.state = 127;
	        this.match(morsecodeParser.DOT);
	        this.state = 128;
	        this.match(morsecodeParser.DOT);
	        this.state = 129;
	        this.match(morsecodeParser.DOT);
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



	c() {
	    let localctx = new CContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, morsecodeParser.RULE_c);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131;
	        this.match(morsecodeParser.DASH);
	        this.state = 132;
	        this.match(morsecodeParser.DOT);
	        this.state = 133;
	        this.match(morsecodeParser.DASH);
	        this.state = 134;
	        this.match(morsecodeParser.DOT);
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



	d() {
	    let localctx = new DContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, morsecodeParser.RULE_d);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.match(morsecodeParser.DASH);
	        this.state = 137;
	        this.match(morsecodeParser.DOT);
	        this.state = 138;
	        this.match(morsecodeParser.DOT);
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



	e() {
	    let localctx = new EContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, morsecodeParser.RULE_e);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        this.match(morsecodeParser.DOT);
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



	f() {
	    let localctx = new FContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, morsecodeParser.RULE_f);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 142;
	        this.match(morsecodeParser.DOT);
	        this.state = 143;
	        this.match(morsecodeParser.DOT);
	        this.state = 144;
	        this.match(morsecodeParser.DASH);
	        this.state = 145;
	        this.match(morsecodeParser.DOT);
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



	g() {
	    let localctx = new GContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, morsecodeParser.RULE_g);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        this.match(morsecodeParser.DASH);
	        this.state = 148;
	        this.match(morsecodeParser.DASH);
	        this.state = 149;
	        this.match(morsecodeParser.DOT);
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



	h() {
	    let localctx = new HContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, morsecodeParser.RULE_h);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        this.match(morsecodeParser.DOT);
	        this.state = 152;
	        this.match(morsecodeParser.DOT);
	        this.state = 153;
	        this.match(morsecodeParser.DOT);
	        this.state = 154;
	        this.match(morsecodeParser.DOT);
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



	i() {
	    let localctx = new IContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, morsecodeParser.RULE_i);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
	        this.match(morsecodeParser.DOT);
	        this.state = 157;
	        this.match(morsecodeParser.DOT);
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



	j() {
	    let localctx = new JContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, morsecodeParser.RULE_j);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 159;
	        this.match(morsecodeParser.DOT);
	        this.state = 160;
	        this.match(morsecodeParser.DASH);
	        this.state = 161;
	        this.match(morsecodeParser.DASH);
	        this.state = 162;
	        this.match(morsecodeParser.DASH);
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



	k() {
	    let localctx = new KContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, morsecodeParser.RULE_k);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
	        this.match(morsecodeParser.DASH);
	        this.state = 165;
	        this.match(morsecodeParser.DOT);
	        this.state = 166;
	        this.match(morsecodeParser.DASH);
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



	l() {
	    let localctx = new LContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, morsecodeParser.RULE_l);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        this.match(morsecodeParser.DOT);
	        this.state = 169;
	        this.match(morsecodeParser.DASH);
	        this.state = 170;
	        this.match(morsecodeParser.DOT);
	        this.state = 171;
	        this.match(morsecodeParser.DOT);
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



	m() {
	    let localctx = new MContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, morsecodeParser.RULE_m);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 173;
	        this.match(morsecodeParser.DASH);
	        this.state = 174;
	        this.match(morsecodeParser.DASH);
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



	n() {
	    let localctx = new NContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, morsecodeParser.RULE_n);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 176;
	        this.match(morsecodeParser.DASH);
	        this.state = 177;
	        this.match(morsecodeParser.DOT);
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



	o() {
	    let localctx = new OContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, morsecodeParser.RULE_o);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 179;
	        this.match(morsecodeParser.DASH);
	        this.state = 180;
	        this.match(morsecodeParser.DASH);
	        this.state = 181;
	        this.match(morsecodeParser.DASH);
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



	p() {
	    let localctx = new PContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, morsecodeParser.RULE_p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 183;
	        this.match(morsecodeParser.DOT);
	        this.state = 184;
	        this.match(morsecodeParser.DASH);
	        this.state = 185;
	        this.match(morsecodeParser.DASH);
	        this.state = 186;
	        this.match(morsecodeParser.DOT);
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



	q() {
	    let localctx = new QContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, morsecodeParser.RULE_q);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 188;
	        this.match(morsecodeParser.DASH);
	        this.state = 189;
	        this.match(morsecodeParser.DASH);
	        this.state = 190;
	        this.match(morsecodeParser.DOT);
	        this.state = 191;
	        this.match(morsecodeParser.DASH);
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



	r() {
	    let localctx = new RContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, morsecodeParser.RULE_r);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 193;
	        this.match(morsecodeParser.DOT);
	        this.state = 194;
	        this.match(morsecodeParser.DASH);
	        this.state = 195;
	        this.match(morsecodeParser.DOT);
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



	s() {
	    let localctx = new SContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, morsecodeParser.RULE_s);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 197;
	        this.match(morsecodeParser.DOT);
	        this.state = 198;
	        this.match(morsecodeParser.DOT);
	        this.state = 199;
	        this.match(morsecodeParser.DOT);
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



	t() {
	    let localctx = new TContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, morsecodeParser.RULE_t);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 201;
	        this.match(morsecodeParser.DASH);
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



	u() {
	    let localctx = new UContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, morsecodeParser.RULE_u);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 203;
	        this.match(morsecodeParser.DOT);
	        this.state = 204;
	        this.match(morsecodeParser.DOT);
	        this.state = 205;
	        this.match(morsecodeParser.DASH);
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



	v() {
	    let localctx = new VContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, morsecodeParser.RULE_v);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 207;
	        this.match(morsecodeParser.DOT);
	        this.state = 208;
	        this.match(morsecodeParser.DOT);
	        this.state = 209;
	        this.match(morsecodeParser.DOT);
	        this.state = 210;
	        this.match(morsecodeParser.DASH);
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



	w() {
	    let localctx = new WContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, morsecodeParser.RULE_w);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 212;
	        this.match(morsecodeParser.DOT);
	        this.state = 213;
	        this.match(morsecodeParser.DASH);
	        this.state = 214;
	        this.match(morsecodeParser.DASH);
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



	x() {
	    let localctx = new XContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, morsecodeParser.RULE_x);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 216;
	        this.match(morsecodeParser.DASH);
	        this.state = 217;
	        this.match(morsecodeParser.DOT);
	        this.state = 218;
	        this.match(morsecodeParser.DOT);
	        this.state = 219;
	        this.match(morsecodeParser.DASH);
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



	y() {
	    let localctx = new YContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, morsecodeParser.RULE_y);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 221;
	        this.match(morsecodeParser.DASH);
	        this.state = 222;
	        this.match(morsecodeParser.DOT);
	        this.state = 223;
	        this.match(morsecodeParser.DASH);
	        this.state = 224;
	        this.match(morsecodeParser.DASH);
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



	z() {
	    let localctx = new ZContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, morsecodeParser.RULE_z);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 226;
	        this.match(morsecodeParser.DASH);
	        this.state = 227;
	        this.match(morsecodeParser.DASH);
	        this.state = 228;
	        this.match(morsecodeParser.DOT);
	        this.state = 229;
	        this.match(morsecodeParser.DOT);
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



	one() {
	    let localctx = new OneContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, morsecodeParser.RULE_one);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 231;
	        this.match(morsecodeParser.DOT);
	        this.state = 232;
	        this.match(morsecodeParser.DASH);
	        this.state = 233;
	        this.match(morsecodeParser.DASH);
	        this.state = 234;
	        this.match(morsecodeParser.DASH);
	        this.state = 235;
	        this.match(morsecodeParser.DASH);
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



	two() {
	    let localctx = new TwoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, morsecodeParser.RULE_two);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 237;
	        this.match(morsecodeParser.DOT);
	        this.state = 238;
	        this.match(morsecodeParser.DOT);
	        this.state = 239;
	        this.match(morsecodeParser.DASH);
	        this.state = 240;
	        this.match(morsecodeParser.DASH);
	        this.state = 241;
	        this.match(morsecodeParser.DASH);
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



	three() {
	    let localctx = new ThreeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, morsecodeParser.RULE_three);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 243;
	        this.match(morsecodeParser.DOT);
	        this.state = 244;
	        this.match(morsecodeParser.DOT);
	        this.state = 245;
	        this.match(morsecodeParser.DOT);
	        this.state = 246;
	        this.match(morsecodeParser.DASH);
	        this.state = 247;
	        this.match(morsecodeParser.DASH);
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



	four() {
	    let localctx = new FourContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, morsecodeParser.RULE_four);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 249;
	        this.match(morsecodeParser.DOT);
	        this.state = 250;
	        this.match(morsecodeParser.DOT);
	        this.state = 251;
	        this.match(morsecodeParser.DOT);
	        this.state = 252;
	        this.match(morsecodeParser.DOT);
	        this.state = 253;
	        this.match(morsecodeParser.DASH);
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



	five() {
	    let localctx = new FiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, morsecodeParser.RULE_five);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 255;
	        this.match(morsecodeParser.DOT);
	        this.state = 256;
	        this.match(morsecodeParser.DOT);
	        this.state = 257;
	        this.match(morsecodeParser.DOT);
	        this.state = 258;
	        this.match(morsecodeParser.DOT);
	        this.state = 259;
	        this.match(morsecodeParser.DOT);
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



	six() {
	    let localctx = new SixContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, morsecodeParser.RULE_six);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 261;
	        this.match(morsecodeParser.DASH);
	        this.state = 262;
	        this.match(morsecodeParser.DOT);
	        this.state = 263;
	        this.match(morsecodeParser.DOT);
	        this.state = 264;
	        this.match(morsecodeParser.DOT);
	        this.state = 265;
	        this.match(morsecodeParser.DOT);
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



	seven() {
	    let localctx = new SevenContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, morsecodeParser.RULE_seven);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 267;
	        this.match(morsecodeParser.DASH);
	        this.state = 268;
	        this.match(morsecodeParser.DASH);
	        this.state = 269;
	        this.match(morsecodeParser.DOT);
	        this.state = 270;
	        this.match(morsecodeParser.DOT);
	        this.state = 271;
	        this.match(morsecodeParser.DOT);
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



	eight() {
	    let localctx = new EightContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, morsecodeParser.RULE_eight);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 273;
	        this.match(morsecodeParser.DASH);
	        this.state = 274;
	        this.match(morsecodeParser.DASH);
	        this.state = 275;
	        this.match(morsecodeParser.DASH);
	        this.state = 276;
	        this.match(morsecodeParser.DOT);
	        this.state = 277;
	        this.match(morsecodeParser.DOT);
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



	nine() {
	    let localctx = new NineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, morsecodeParser.RULE_nine);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 279;
	        this.match(morsecodeParser.DASH);
	        this.state = 280;
	        this.match(morsecodeParser.DASH);
	        this.state = 281;
	        this.match(morsecodeParser.DASH);
	        this.state = 282;
	        this.match(morsecodeParser.DASH);
	        this.state = 283;
	        this.match(morsecodeParser.DOT);
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



	zero() {
	    let localctx = new ZeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, morsecodeParser.RULE_zero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 285;
	        this.match(morsecodeParser.DASH);
	        this.state = 286;
	        this.match(morsecodeParser.DASH);
	        this.state = 287;
	        this.match(morsecodeParser.DASH);
	        this.state = 288;
	        this.match(morsecodeParser.DASH);
	        this.state = 289;
	        this.match(morsecodeParser.DASH);
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

morsecodeParser.EOF = antlr4.Token.EOF;
morsecodeParser.DOT = 1;
morsecodeParser.DASH = 2;
morsecodeParser.SPACE = 3;
morsecodeParser.WS = 4;

morsecodeParser.RULE_morsecode = 0;
morsecodeParser.RULE_letter = 1;
morsecodeParser.RULE_a = 2;
morsecodeParser.RULE_b = 3;
morsecodeParser.RULE_c = 4;
morsecodeParser.RULE_d = 5;
morsecodeParser.RULE_e = 6;
morsecodeParser.RULE_f = 7;
morsecodeParser.RULE_g = 8;
morsecodeParser.RULE_h = 9;
morsecodeParser.RULE_i = 10;
morsecodeParser.RULE_j = 11;
morsecodeParser.RULE_k = 12;
morsecodeParser.RULE_l = 13;
morsecodeParser.RULE_m = 14;
morsecodeParser.RULE_n = 15;
morsecodeParser.RULE_o = 16;
morsecodeParser.RULE_p = 17;
morsecodeParser.RULE_q = 18;
morsecodeParser.RULE_r = 19;
morsecodeParser.RULE_s = 20;
morsecodeParser.RULE_t = 21;
morsecodeParser.RULE_u = 22;
morsecodeParser.RULE_v = 23;
morsecodeParser.RULE_w = 24;
morsecodeParser.RULE_x = 25;
morsecodeParser.RULE_y = 26;
morsecodeParser.RULE_z = 27;
morsecodeParser.RULE_one = 28;
morsecodeParser.RULE_two = 29;
morsecodeParser.RULE_three = 30;
morsecodeParser.RULE_four = 31;
morsecodeParser.RULE_five = 32;
morsecodeParser.RULE_six = 33;
morsecodeParser.RULE_seven = 34;
morsecodeParser.RULE_eight = 35;
morsecodeParser.RULE_nine = 36;
morsecodeParser.RULE_zero = 37;

class MorsecodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_morsecode;
    }

	letter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LetterContext);
	    } else {
	        return this.getTypedRuleContext(LetterContext,i);
	    }
	};

	EOF() {
	    return this.getToken(morsecodeParser.EOF, 0);
	};

	SPACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.SPACE);
	    } else {
	        return this.getToken(morsecodeParser.SPACE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterMorsecode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitMorsecode(this);
		}
	}


}



class LetterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_letter;
    }

	a() {
	    return this.getTypedRuleContext(AContext,0);
	};

	b() {
	    return this.getTypedRuleContext(BContext,0);
	};

	c() {
	    return this.getTypedRuleContext(CContext,0);
	};

	d() {
	    return this.getTypedRuleContext(DContext,0);
	};

	e() {
	    return this.getTypedRuleContext(EContext,0);
	};

	f() {
	    return this.getTypedRuleContext(FContext,0);
	};

	g() {
	    return this.getTypedRuleContext(GContext,0);
	};

	h() {
	    return this.getTypedRuleContext(HContext,0);
	};

	i() {
	    return this.getTypedRuleContext(IContext,0);
	};

	j() {
	    return this.getTypedRuleContext(JContext,0);
	};

	k() {
	    return this.getTypedRuleContext(KContext,0);
	};

	l() {
	    return this.getTypedRuleContext(LContext,0);
	};

	m() {
	    return this.getTypedRuleContext(MContext,0);
	};

	n() {
	    return this.getTypedRuleContext(NContext,0);
	};

	o() {
	    return this.getTypedRuleContext(OContext,0);
	};

	p() {
	    return this.getTypedRuleContext(PContext,0);
	};

	q() {
	    return this.getTypedRuleContext(QContext,0);
	};

	r() {
	    return this.getTypedRuleContext(RContext,0);
	};

	s() {
	    return this.getTypedRuleContext(SContext,0);
	};

	t() {
	    return this.getTypedRuleContext(TContext,0);
	};

	u() {
	    return this.getTypedRuleContext(UContext,0);
	};

	v() {
	    return this.getTypedRuleContext(VContext,0);
	};

	w() {
	    return this.getTypedRuleContext(WContext,0);
	};

	x() {
	    return this.getTypedRuleContext(XContext,0);
	};

	y() {
	    return this.getTypedRuleContext(YContext,0);
	};

	z() {
	    return this.getTypedRuleContext(ZContext,0);
	};

	one() {
	    return this.getTypedRuleContext(OneContext,0);
	};

	two() {
	    return this.getTypedRuleContext(TwoContext,0);
	};

	three() {
	    return this.getTypedRuleContext(ThreeContext,0);
	};

	four() {
	    return this.getTypedRuleContext(FourContext,0);
	};

	five() {
	    return this.getTypedRuleContext(FiveContext,0);
	};

	six() {
	    return this.getTypedRuleContext(SixContext,0);
	};

	seven() {
	    return this.getTypedRuleContext(SevenContext,0);
	};

	eight() {
	    return this.getTypedRuleContext(EightContext,0);
	};

	nine() {
	    return this.getTypedRuleContext(NineContext,0);
	};

	zero() {
	    return this.getTypedRuleContext(ZeroContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterLetter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitLetter(this);
		}
	}


}



class AContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_a;
    }

	DOT() {
	    return this.getToken(morsecodeParser.DOT, 0);
	};

	DASH() {
	    return this.getToken(morsecodeParser.DASH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterA(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitA(this);
		}
	}


}



class BContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_b;
    }

	DASH() {
	    return this.getToken(morsecodeParser.DASH, 0);
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DOT);
	    } else {
	        return this.getToken(morsecodeParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterB(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitB(this);
		}
	}


}



class CContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_c;
    }

	DASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DASH);
	    } else {
	        return this.getToken(morsecodeParser.DASH, i);
	    }
	};


	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DOT);
	    } else {
	        return this.getToken(morsecodeParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterC(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitC(this);
		}
	}


}



class DContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_d;
    }

	DASH() {
	    return this.getToken(morsecodeParser.DASH, 0);
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DOT);
	    } else {
	        return this.getToken(morsecodeParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterD(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitD(this);
		}
	}


}



class EContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_e;
    }

	DOT() {
	    return this.getToken(morsecodeParser.DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterE(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitE(this);
		}
	}


}



class FContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_f;
    }

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DOT);
	    } else {
	        return this.getToken(morsecodeParser.DOT, i);
	    }
	};


	DASH() {
	    return this.getToken(morsecodeParser.DASH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterF(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitF(this);
		}
	}


}



class GContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_g;
    }

	DASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DASH);
	    } else {
	        return this.getToken(morsecodeParser.DASH, i);
	    }
	};


	DOT() {
	    return this.getToken(morsecodeParser.DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterG(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitG(this);
		}
	}


}



class HContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_h;
    }

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DOT);
	    } else {
	        return this.getToken(morsecodeParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterH(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitH(this);
		}
	}


}



class IContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_i;
    }

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DOT);
	    } else {
	        return this.getToken(morsecodeParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterI(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitI(this);
		}
	}


}



class JContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_j;
    }

	DOT() {
	    return this.getToken(morsecodeParser.DOT, 0);
	};

	DASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DASH);
	    } else {
	        return this.getToken(morsecodeParser.DASH, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterJ(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitJ(this);
		}
	}


}



class KContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_k;
    }

	DASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DASH);
	    } else {
	        return this.getToken(morsecodeParser.DASH, i);
	    }
	};


	DOT() {
	    return this.getToken(morsecodeParser.DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterK(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitK(this);
		}
	}


}



class LContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_l;
    }

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DOT);
	    } else {
	        return this.getToken(morsecodeParser.DOT, i);
	    }
	};


	DASH() {
	    return this.getToken(morsecodeParser.DASH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterL(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitL(this);
		}
	}


}



class MContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_m;
    }

	DASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DASH);
	    } else {
	        return this.getToken(morsecodeParser.DASH, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterM(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitM(this);
		}
	}


}



class NContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_n;
    }

	DASH() {
	    return this.getToken(morsecodeParser.DASH, 0);
	};

	DOT() {
	    return this.getToken(morsecodeParser.DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterN(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitN(this);
		}
	}


}



class OContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_o;
    }

	DASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DASH);
	    } else {
	        return this.getToken(morsecodeParser.DASH, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterO(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitO(this);
		}
	}


}



class PContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_p;
    }

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DOT);
	    } else {
	        return this.getToken(morsecodeParser.DOT, i);
	    }
	};


	DASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DASH);
	    } else {
	        return this.getToken(morsecodeParser.DASH, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterP(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitP(this);
		}
	}


}



class QContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_q;
    }

	DASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DASH);
	    } else {
	        return this.getToken(morsecodeParser.DASH, i);
	    }
	};


	DOT() {
	    return this.getToken(morsecodeParser.DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterQ(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitQ(this);
		}
	}


}



class RContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_r;
    }

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DOT);
	    } else {
	        return this.getToken(morsecodeParser.DOT, i);
	    }
	};


	DASH() {
	    return this.getToken(morsecodeParser.DASH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterR(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitR(this);
		}
	}


}



class SContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_s;
    }

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DOT);
	    } else {
	        return this.getToken(morsecodeParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterS(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitS(this);
		}
	}


}



class TContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_t;
    }

	DASH() {
	    return this.getToken(morsecodeParser.DASH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterT(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitT(this);
		}
	}


}



class UContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_u;
    }

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DOT);
	    } else {
	        return this.getToken(morsecodeParser.DOT, i);
	    }
	};


	DASH() {
	    return this.getToken(morsecodeParser.DASH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterU(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitU(this);
		}
	}


}



class VContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_v;
    }

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DOT);
	    } else {
	        return this.getToken(morsecodeParser.DOT, i);
	    }
	};


	DASH() {
	    return this.getToken(morsecodeParser.DASH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterV(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitV(this);
		}
	}


}



class WContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_w;
    }

	DOT() {
	    return this.getToken(morsecodeParser.DOT, 0);
	};

	DASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DASH);
	    } else {
	        return this.getToken(morsecodeParser.DASH, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterW(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitW(this);
		}
	}


}



class XContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_x;
    }

	DASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DASH);
	    } else {
	        return this.getToken(morsecodeParser.DASH, i);
	    }
	};


	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DOT);
	    } else {
	        return this.getToken(morsecodeParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterX(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitX(this);
		}
	}


}



class YContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_y;
    }

	DASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DASH);
	    } else {
	        return this.getToken(morsecodeParser.DASH, i);
	    }
	};


	DOT() {
	    return this.getToken(morsecodeParser.DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterY(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitY(this);
		}
	}


}



class ZContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_z;
    }

	DASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DASH);
	    } else {
	        return this.getToken(morsecodeParser.DASH, i);
	    }
	};


	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DOT);
	    } else {
	        return this.getToken(morsecodeParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterZ(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitZ(this);
		}
	}


}



class OneContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_one;
    }

	DOT() {
	    return this.getToken(morsecodeParser.DOT, 0);
	};

	DASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DASH);
	    } else {
	        return this.getToken(morsecodeParser.DASH, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterOne(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitOne(this);
		}
	}


}



class TwoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_two;
    }

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DOT);
	    } else {
	        return this.getToken(morsecodeParser.DOT, i);
	    }
	};


	DASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DASH);
	    } else {
	        return this.getToken(morsecodeParser.DASH, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterTwo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitTwo(this);
		}
	}


}



class ThreeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_three;
    }

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DOT);
	    } else {
	        return this.getToken(morsecodeParser.DOT, i);
	    }
	};


	DASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DASH);
	    } else {
	        return this.getToken(morsecodeParser.DASH, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterThree(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitThree(this);
		}
	}


}



class FourContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_four;
    }

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DOT);
	    } else {
	        return this.getToken(morsecodeParser.DOT, i);
	    }
	};


	DASH() {
	    return this.getToken(morsecodeParser.DASH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterFour(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitFour(this);
		}
	}


}



class FiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_five;
    }

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DOT);
	    } else {
	        return this.getToken(morsecodeParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterFive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitFive(this);
		}
	}


}



class SixContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_six;
    }

	DASH() {
	    return this.getToken(morsecodeParser.DASH, 0);
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DOT);
	    } else {
	        return this.getToken(morsecodeParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterSix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitSix(this);
		}
	}


}



class SevenContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_seven;
    }

	DASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DASH);
	    } else {
	        return this.getToken(morsecodeParser.DASH, i);
	    }
	};


	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DOT);
	    } else {
	        return this.getToken(morsecodeParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterSeven(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitSeven(this);
		}
	}


}



class EightContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_eight;
    }

	DASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DASH);
	    } else {
	        return this.getToken(morsecodeParser.DASH, i);
	    }
	};


	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DOT);
	    } else {
	        return this.getToken(morsecodeParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterEight(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitEight(this);
		}
	}


}



class NineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_nine;
    }

	DASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DASH);
	    } else {
	        return this.getToken(morsecodeParser.DASH, i);
	    }
	};


	DOT() {
	    return this.getToken(morsecodeParser.DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterNine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitNine(this);
		}
	}


}



class ZeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = morsecodeParser.RULE_zero;
    }

	DASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(morsecodeParser.DASH);
	    } else {
	        return this.getToken(morsecodeParser.DASH, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.enterZero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof morsecodeListener ) {
	        listener.exitZero(this);
		}
	}


}




morsecodeParser.MorsecodeContext = MorsecodeContext; 
morsecodeParser.LetterContext = LetterContext; 
morsecodeParser.AContext = AContext; 
morsecodeParser.BContext = BContext; 
morsecodeParser.CContext = CContext; 
morsecodeParser.DContext = DContext; 
morsecodeParser.EContext = EContext; 
morsecodeParser.FContext = FContext; 
morsecodeParser.GContext = GContext; 
morsecodeParser.HContext = HContext; 
morsecodeParser.IContext = IContext; 
morsecodeParser.JContext = JContext; 
morsecodeParser.KContext = KContext; 
morsecodeParser.LContext = LContext; 
morsecodeParser.MContext = MContext; 
morsecodeParser.NContext = NContext; 
morsecodeParser.OContext = OContext; 
morsecodeParser.PContext = PContext; 
morsecodeParser.QContext = QContext; 
morsecodeParser.RContext = RContext; 
morsecodeParser.SContext = SContext; 
morsecodeParser.TContext = TContext; 
morsecodeParser.UContext = UContext; 
morsecodeParser.VContext = VContext; 
morsecodeParser.WContext = WContext; 
morsecodeParser.XContext = XContext; 
morsecodeParser.YContext = YContext; 
morsecodeParser.ZContext = ZContext; 
morsecodeParser.OneContext = OneContext; 
morsecodeParser.TwoContext = TwoContext; 
morsecodeParser.ThreeContext = ThreeContext; 
morsecodeParser.FourContext = FourContext; 
morsecodeParser.FiveContext = FiveContext; 
morsecodeParser.SixContext = SixContext; 
morsecodeParser.SevenContext = SevenContext; 
morsecodeParser.EightContext = EightContext; 
morsecodeParser.NineContext = NineContext; 
morsecodeParser.ZeroContext = ZeroContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
