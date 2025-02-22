// Generated from ./bdf/bdf.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import bdfListener from './bdfListener.js';
const serializedATN = [4,1,52,312,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,1,0,1,0,1,0,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,4,1,106,8,1,11,1,12,1,107,1,1,1,1,1,2,1,2,1,2,1,3,
1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,5,5,162,8,5,10,5,12,5,165,9,5,1,
5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,1,11,
1,11,1,11,1,12,1,12,1,12,1,13,1,13,1,13,1,14,1,14,1,14,1,15,1,15,1,15,1,
16,1,16,1,16,1,17,1,17,1,17,1,18,1,18,1,18,1,19,1,19,1,19,1,20,1,20,1,20,
1,21,1,21,1,21,1,22,1,22,1,22,1,23,1,23,1,23,1,24,1,24,1,24,1,25,1,25,1,
25,1,26,1,26,1,26,1,27,1,27,1,27,1,28,1,28,1,28,1,29,1,29,1,29,1,30,1,30,
1,30,1,31,1,31,1,31,1,32,1,32,1,32,1,33,1,33,1,33,1,34,1,34,1,34,1,35,1,
35,1,35,1,36,1,36,1,36,1,37,1,37,1,37,1,38,1,38,1,38,1,39,1,39,1,39,1,40,
1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,41,1,41,5,41,281,8,41,10,41,12,41,284,
9,41,1,41,1,41,1,42,1,42,1,42,1,43,1,43,1,43,1,43,1,44,1,44,1,44,1,44,1,
45,1,45,1,45,1,45,1,45,1,45,1,46,1,46,5,46,307,8,46,10,46,12,46,310,9,46,
1,46,0,0,47,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,
44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,
92,0,0,310,0,94,1,0,0,0,2,97,1,0,0,0,4,111,1,0,0,0,6,114,1,0,0,0,8,119,1,
0,0,0,10,125,1,0,0,0,12,168,1,0,0,0,14,171,1,0,0,0,16,174,1,0,0,0,18,177,
1,0,0,0,20,180,1,0,0,0,22,183,1,0,0,0,24,186,1,0,0,0,26,189,1,0,0,0,28,192,
1,0,0,0,30,195,1,0,0,0,32,198,1,0,0,0,34,201,1,0,0,0,36,204,1,0,0,0,38,207,
1,0,0,0,40,210,1,0,0,0,42,213,1,0,0,0,44,216,1,0,0,0,46,219,1,0,0,0,48,222,
1,0,0,0,50,225,1,0,0,0,52,228,1,0,0,0,54,231,1,0,0,0,56,234,1,0,0,0,58,237,
1,0,0,0,60,240,1,0,0,0,62,243,1,0,0,0,64,246,1,0,0,0,66,249,1,0,0,0,68,252,
1,0,0,0,70,255,1,0,0,0,72,258,1,0,0,0,74,261,1,0,0,0,76,264,1,0,0,0,78,267,
1,0,0,0,80,270,1,0,0,0,82,273,1,0,0,0,84,287,1,0,0,0,86,290,1,0,0,0,88,294,
1,0,0,0,90,298,1,0,0,0,92,304,1,0,0,0,94,95,3,2,1,0,95,96,5,0,0,1,96,1,1,
0,0,0,97,98,5,1,0,0,98,105,5,50,0,0,99,106,3,4,2,0,100,106,3,6,3,0,101,106,
3,8,4,0,102,106,3,10,5,0,103,106,3,80,40,0,104,106,3,82,41,0,105,99,1,0,
0,0,105,100,1,0,0,0,105,101,1,0,0,0,105,102,1,0,0,0,105,103,1,0,0,0,105,
104,1,0,0,0,106,107,1,0,0,0,107,105,1,0,0,0,107,108,1,0,0,0,108,109,1,0,
0,0,109,110,5,2,0,0,110,3,1,0,0,0,111,112,5,3,0,0,112,113,5,50,0,0,113,5,
1,0,0,0,114,115,5,4,0,0,115,116,5,50,0,0,116,117,5,50,0,0,117,118,5,50,0,
0,118,7,1,0,0,0,119,120,5,5,0,0,120,121,5,50,0,0,121,122,5,50,0,0,122,123,
5,50,0,0,123,124,5,50,0,0,124,9,1,0,0,0,125,126,5,6,0,0,126,163,5,50,0,0,
127,162,3,42,21,0,128,162,3,52,26,0,129,162,3,12,6,0,130,162,3,14,7,0,131,
162,3,16,8,0,132,162,3,18,9,0,133,162,3,20,10,0,134,162,3,22,11,0,135,162,
3,24,12,0,136,162,3,26,13,0,137,162,3,28,14,0,138,162,3,30,15,0,139,162,
3,32,16,0,140,162,3,34,17,0,141,162,3,36,18,0,142,162,3,38,19,0,143,162,
3,40,20,0,144,162,3,44,22,0,145,162,3,46,23,0,146,162,3,48,24,0,147,162,
3,50,25,0,148,162,3,54,27,0,149,162,3,56,28,0,150,162,3,58,29,0,151,162,
3,60,30,0,152,162,3,62,31,0,153,162,3,64,32,0,154,162,3,66,33,0,155,162,
3,68,34,0,156,162,3,70,35,0,157,162,3,72,36,0,158,162,3,74,37,0,159,162,
3,76,38,0,160,162,3,78,39,0,161,127,1,0,0,0,161,128,1,0,0,0,161,129,1,0,
0,0,161,130,1,0,0,0,161,131,1,0,0,0,161,132,1,0,0,0,161,133,1,0,0,0,161,
134,1,0,0,0,161,135,1,0,0,0,161,136,1,0,0,0,161,137,1,0,0,0,161,138,1,0,
0,0,161,139,1,0,0,0,161,140,1,0,0,0,161,141,1,0,0,0,161,142,1,0,0,0,161,
143,1,0,0,0,161,144,1,0,0,0,161,145,1,0,0,0,161,146,1,0,0,0,161,147,1,0,
0,0,161,148,1,0,0,0,161,149,1,0,0,0,161,150,1,0,0,0,161,151,1,0,0,0,161,
152,1,0,0,0,161,153,1,0,0,0,161,154,1,0,0,0,161,155,1,0,0,0,161,156,1,0,
0,0,161,157,1,0,0,0,161,158,1,0,0,0,161,159,1,0,0,0,161,160,1,0,0,0,162,
165,1,0,0,0,163,161,1,0,0,0,163,164,1,0,0,0,164,166,1,0,0,0,165,163,1,0,
0,0,166,167,5,7,0,0,167,11,1,0,0,0,168,169,5,8,0,0,169,170,5,51,0,0,170,
13,1,0,0,0,171,172,5,9,0,0,172,173,5,51,0,0,173,15,1,0,0,0,174,175,5,10,
0,0,175,176,5,51,0,0,176,17,1,0,0,0,177,178,5,11,0,0,178,179,5,51,0,0,179,
19,1,0,0,0,180,181,5,12,0,0,181,182,5,51,0,0,182,21,1,0,0,0,183,184,5,13,
0,0,184,185,5,51,0,0,185,23,1,0,0,0,186,187,5,14,0,0,187,188,5,50,0,0,188,
25,1,0,0,0,189,190,5,15,0,0,190,191,5,50,0,0,191,27,1,0,0,0,192,193,5,16,
0,0,193,194,5,50,0,0,194,29,1,0,0,0,195,196,5,17,0,0,196,197,5,50,0,0,197,
31,1,0,0,0,198,199,5,18,0,0,199,200,5,51,0,0,200,33,1,0,0,0,201,202,5,19,
0,0,202,203,5,50,0,0,203,35,1,0,0,0,204,205,5,20,0,0,205,206,5,51,0,0,206,
37,1,0,0,0,207,208,5,21,0,0,208,209,5,51,0,0,209,39,1,0,0,0,210,211,5,22,
0,0,211,212,5,51,0,0,212,41,1,0,0,0,213,214,5,23,0,0,214,215,5,50,0,0,215,
43,1,0,0,0,216,217,5,24,0,0,217,218,5,51,0,0,218,45,1,0,0,0,219,220,5,25,
0,0,220,221,5,51,0,0,221,47,1,0,0,0,222,223,5,26,0,0,223,224,5,51,0,0,224,
49,1,0,0,0,225,226,5,27,0,0,226,227,5,51,0,0,227,51,1,0,0,0,228,229,5,28,
0,0,229,230,5,50,0,0,230,53,1,0,0,0,231,232,5,29,0,0,232,233,5,51,0,0,233,
55,1,0,0,0,234,235,5,30,0,0,235,236,5,50,0,0,236,57,1,0,0,0,237,238,5,31,
0,0,238,239,5,50,0,0,239,59,1,0,0,0,240,241,5,32,0,0,241,242,5,50,0,0,242,
61,1,0,0,0,243,244,5,33,0,0,244,245,5,50,0,0,245,63,1,0,0,0,246,247,5,34,
0,0,247,248,5,50,0,0,248,65,1,0,0,0,249,250,5,35,0,0,250,251,5,50,0,0,251,
67,1,0,0,0,252,253,5,36,0,0,253,254,5,50,0,0,254,69,1,0,0,0,255,256,5,37,
0,0,256,257,5,50,0,0,257,71,1,0,0,0,258,259,5,38,0,0,259,260,5,50,0,0,260,
73,1,0,0,0,261,262,5,39,0,0,262,263,5,50,0,0,263,75,1,0,0,0,264,265,5,40,
0,0,265,266,5,50,0,0,266,77,1,0,0,0,267,268,5,41,0,0,268,269,5,50,0,0,269,
79,1,0,0,0,270,271,5,42,0,0,271,272,5,50,0,0,272,81,1,0,0,0,273,274,5,43,
0,0,274,282,5,50,0,0,275,281,3,84,42,0,276,281,3,86,43,0,277,281,3,88,44,
0,278,281,3,90,45,0,279,281,3,92,46,0,280,275,1,0,0,0,280,276,1,0,0,0,280,
277,1,0,0,0,280,278,1,0,0,0,280,279,1,0,0,0,281,284,1,0,0,0,282,280,1,0,
0,0,282,283,1,0,0,0,283,285,1,0,0,0,284,282,1,0,0,0,285,286,5,44,0,0,286,
83,1,0,0,0,287,288,5,45,0,0,288,289,5,50,0,0,289,85,1,0,0,0,290,291,5,46,
0,0,291,292,5,50,0,0,292,293,5,50,0,0,293,87,1,0,0,0,294,295,5,47,0,0,295,
296,5,50,0,0,296,297,5,50,0,0,297,89,1,0,0,0,298,299,5,48,0,0,299,300,5,
50,0,0,300,301,5,50,0,0,301,302,5,50,0,0,302,303,5,50,0,0,303,91,1,0,0,0,
304,308,5,49,0,0,305,307,5,50,0,0,306,305,1,0,0,0,307,310,1,0,0,0,308,306,
1,0,0,0,308,309,1,0,0,0,309,93,1,0,0,0,310,308,1,0,0,0,7,105,107,161,163,
280,282,308];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class bdfParser extends antlr4.Parser {

    static grammarFileName = "bdf.g4";
    static literalNames = [ null, "'STARTFONT'", "'ENDFONT'", "'FONT'", 
                            "'SIZE'", "'FONTBOUNDINGBOX'", "'STARTPROPERTIES'", 
                            "'ENDPROPERTIES'", "'FOUNDRY'", "'FAMILY_NAME'", 
                            "'WEIGHT_NAME'", "'SLANT'", "'SETWIDTH_NAME'", 
                            "'ADD_STYLE_NAME'", "'PIXEL_SIZE'", "'POINT_SIZE'", 
                            "'RESOLUTION_X'", "'RESOLUTION_Y'", "'SPACING'", 
                            "'AVERAGE_WIDTH'", "'CHARSET_REGISTRY'", "'CHARSET_ENCODING'", 
                            "'FONTNAME_REGISTRY'", "'FONT_ASCENT'", "'CHARSET_COLLECTIONS'", 
                            "'FONT_NAME'", "'FACE_NAME'", "'COPYRIGHT'", 
                            "'FONT_DESCENT'", "'FONT_VERSION'", "'UNDERLINE_POSITION'", 
                            "'UNDERLINE_THICKNESS'", "'X_HEIGHT'", "'CAP_HEIGHT'", 
                            "'RAW_ASCENT'", "'RAW_DESCENT'", "'NORM_SPACE'", 
                            "'RELATIVE_WEIGHT'", "'RELATIVE_SETWIDTH'", 
                            "'FIGURE_WIDTH'", "'AVG_LOWERCASE_WIDTH'", "'AVG_UPPERCASE_WIDTH'", 
                            "'CHARS'", "'STARTCHAR'", "'ENDCHAR'", "'ENCODING'", 
                            "'SWIDTH'", "'DWIDTH'", "'BBX'", "'BITMAP'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "ARG", "QUOTEDSTRING", "WS" ];
    static ruleNames = [ "font", "startfont", "fontdecl", "sizedecl", "fontboundingboxdecl", 
                         "propertiesdecl", "foundrydecl", "familynanmedecl", 
                         "weightnamedecl", "slantdecl", "setwidthnamedecl", 
                         "addstylenamedecl", "pixelsizedecl", "pointsizedecl", 
                         "resolutionxdecl", "resolutionydecl", "spacingdecl", 
                         "averagewidthdecl", "charsetregistrydecl", "charsetencoding", 
                         "fontnameregistry", "fontascentdecl", "charsetcollectionsdecl", 
                         "fontnamedecl", "facenamedecl", "copyrightdecl", 
                         "fontdecentdecl", "fontversiondecl", "underlinepositiondecl", 
                         "underlinethicknessdecl", "xheightdecl", "capheighdecl", 
                         "rawascentdecl", "rawdescentdecl", "normspacedecl", 
                         "relativeweightdecl", "relaticesetwidthdecl", "figurewidthdecl", 
                         "avglowercasewidthdecl", "avguppercasewidthdecl", 
                         "charsdecl", "chardecl", "encodingdecl", "swidthdecl", 
                         "dwidthdecl", "bbxdecl", "bitmapdecl" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = bdfParser.ruleNames;
        this.literalNames = bdfParser.literalNames;
        this.symbolicNames = bdfParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	font() {
	    let localctx = new FontContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, bdfParser.RULE_font);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.startfont();
	        this.state = 95;
	        this.match(bdfParser.EOF);
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



	startfont() {
	    let localctx = new StartfontContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, bdfParser.RULE_startfont);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.match(bdfParser.T__0);
	        this.state = 98;
	        this.match(bdfParser.ARG);
	        this.state = 105; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 105;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case bdfParser.T__2:
	                this.state = 99;
	                this.fontdecl();
	                break;
	            case bdfParser.T__3:
	                this.state = 100;
	                this.sizedecl();
	                break;
	            case bdfParser.T__4:
	                this.state = 101;
	                this.fontboundingboxdecl();
	                break;
	            case bdfParser.T__5:
	                this.state = 102;
	                this.propertiesdecl();
	                break;
	            case bdfParser.T__41:
	                this.state = 103;
	                this.charsdecl();
	                break;
	            case bdfParser.T__42:
	                this.state = 104;
	                this.chardecl();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 107; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << bdfParser.T__2) | (1 << bdfParser.T__3) | (1 << bdfParser.T__4) | (1 << bdfParser.T__5))) !== 0) || _la===bdfParser.T__41 || _la===bdfParser.T__42);
	        this.state = 109;
	        this.match(bdfParser.T__1);
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



	fontdecl() {
	    let localctx = new FontdeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, bdfParser.RULE_fontdecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.match(bdfParser.T__2);
	        this.state = 112;
	        this.match(bdfParser.ARG);
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



	sizedecl() {
	    let localctx = new SizedeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, bdfParser.RULE_sizedecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.match(bdfParser.T__3);
	        this.state = 115;
	        this.match(bdfParser.ARG);
	        this.state = 116;
	        this.match(bdfParser.ARG);
	        this.state = 117;
	        this.match(bdfParser.ARG);
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



	fontboundingboxdecl() {
	    let localctx = new FontboundingboxdeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, bdfParser.RULE_fontboundingboxdecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        this.match(bdfParser.T__4);
	        this.state = 120;
	        this.match(bdfParser.ARG);
	        this.state = 121;
	        this.match(bdfParser.ARG);
	        this.state = 122;
	        this.match(bdfParser.ARG);
	        this.state = 123;
	        this.match(bdfParser.ARG);
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



	propertiesdecl() {
	    let localctx = new PropertiesdeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, bdfParser.RULE_propertiesdecl);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        this.match(bdfParser.T__5);
	        this.state = 126;
	        this.match(bdfParser.ARG);
	        this.state = 163;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << bdfParser.T__7) | (1 << bdfParser.T__8) | (1 << bdfParser.T__9) | (1 << bdfParser.T__10) | (1 << bdfParser.T__11) | (1 << bdfParser.T__12) | (1 << bdfParser.T__13) | (1 << bdfParser.T__14) | (1 << bdfParser.T__15) | (1 << bdfParser.T__16) | (1 << bdfParser.T__17) | (1 << bdfParser.T__18) | (1 << bdfParser.T__19) | (1 << bdfParser.T__20) | (1 << bdfParser.T__21) | (1 << bdfParser.T__22) | (1 << bdfParser.T__23) | (1 << bdfParser.T__24) | (1 << bdfParser.T__25) | (1 << bdfParser.T__26) | (1 << bdfParser.T__27) | (1 << bdfParser.T__28) | (1 << bdfParser.T__29) | (1 << bdfParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (bdfParser.T__31 - 32)) | (1 << (bdfParser.T__32 - 32)) | (1 << (bdfParser.T__33 - 32)) | (1 << (bdfParser.T__34 - 32)) | (1 << (bdfParser.T__35 - 32)) | (1 << (bdfParser.T__36 - 32)) | (1 << (bdfParser.T__37 - 32)) | (1 << (bdfParser.T__38 - 32)) | (1 << (bdfParser.T__39 - 32)) | (1 << (bdfParser.T__40 - 32)))) !== 0)) {
	            this.state = 161;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case bdfParser.T__22:
	                this.state = 127;
	                this.fontascentdecl();
	                break;
	            case bdfParser.T__27:
	                this.state = 128;
	                this.fontdecentdecl();
	                break;
	            case bdfParser.T__7:
	                this.state = 129;
	                this.foundrydecl();
	                break;
	            case bdfParser.T__8:
	                this.state = 130;
	                this.familynanmedecl();
	                break;
	            case bdfParser.T__9:
	                this.state = 131;
	                this.weightnamedecl();
	                break;
	            case bdfParser.T__10:
	                this.state = 132;
	                this.slantdecl();
	                break;
	            case bdfParser.T__11:
	                this.state = 133;
	                this.setwidthnamedecl();
	                break;
	            case bdfParser.T__12:
	                this.state = 134;
	                this.addstylenamedecl();
	                break;
	            case bdfParser.T__13:
	                this.state = 135;
	                this.pixelsizedecl();
	                break;
	            case bdfParser.T__14:
	                this.state = 136;
	                this.pointsizedecl();
	                break;
	            case bdfParser.T__15:
	                this.state = 137;
	                this.resolutionxdecl();
	                break;
	            case bdfParser.T__16:
	                this.state = 138;
	                this.resolutionydecl();
	                break;
	            case bdfParser.T__17:
	                this.state = 139;
	                this.spacingdecl();
	                break;
	            case bdfParser.T__18:
	                this.state = 140;
	                this.averagewidthdecl();
	                break;
	            case bdfParser.T__19:
	                this.state = 141;
	                this.charsetregistrydecl();
	                break;
	            case bdfParser.T__20:
	                this.state = 142;
	                this.charsetencoding();
	                break;
	            case bdfParser.T__21:
	                this.state = 143;
	                this.fontnameregistry();
	                break;
	            case bdfParser.T__23:
	                this.state = 144;
	                this.charsetcollectionsdecl();
	                break;
	            case bdfParser.T__24:
	                this.state = 145;
	                this.fontnamedecl();
	                break;
	            case bdfParser.T__25:
	                this.state = 146;
	                this.facenamedecl();
	                break;
	            case bdfParser.T__26:
	                this.state = 147;
	                this.copyrightdecl();
	                break;
	            case bdfParser.T__28:
	                this.state = 148;
	                this.fontversiondecl();
	                break;
	            case bdfParser.T__29:
	                this.state = 149;
	                this.underlinepositiondecl();
	                break;
	            case bdfParser.T__30:
	                this.state = 150;
	                this.underlinethicknessdecl();
	                break;
	            case bdfParser.T__31:
	                this.state = 151;
	                this.xheightdecl();
	                break;
	            case bdfParser.T__32:
	                this.state = 152;
	                this.capheighdecl();
	                break;
	            case bdfParser.T__33:
	                this.state = 153;
	                this.rawascentdecl();
	                break;
	            case bdfParser.T__34:
	                this.state = 154;
	                this.rawdescentdecl();
	                break;
	            case bdfParser.T__35:
	                this.state = 155;
	                this.normspacedecl();
	                break;
	            case bdfParser.T__36:
	                this.state = 156;
	                this.relativeweightdecl();
	                break;
	            case bdfParser.T__37:
	                this.state = 157;
	                this.relaticesetwidthdecl();
	                break;
	            case bdfParser.T__38:
	                this.state = 158;
	                this.figurewidthdecl();
	                break;
	            case bdfParser.T__39:
	                this.state = 159;
	                this.avglowercasewidthdecl();
	                break;
	            case bdfParser.T__40:
	                this.state = 160;
	                this.avguppercasewidthdecl();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 165;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 166;
	        this.match(bdfParser.T__6);
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



	foundrydecl() {
	    let localctx = new FoundrydeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, bdfParser.RULE_foundrydecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        this.match(bdfParser.T__7);
	        this.state = 169;
	        this.match(bdfParser.QUOTEDSTRING);
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



	familynanmedecl() {
	    let localctx = new FamilynanmedeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, bdfParser.RULE_familynanmedecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 171;
	        this.match(bdfParser.T__8);
	        this.state = 172;
	        this.match(bdfParser.QUOTEDSTRING);
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



	weightnamedecl() {
	    let localctx = new WeightnamedeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, bdfParser.RULE_weightnamedecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 174;
	        this.match(bdfParser.T__9);
	        this.state = 175;
	        this.match(bdfParser.QUOTEDSTRING);
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



	slantdecl() {
	    let localctx = new SlantdeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, bdfParser.RULE_slantdecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 177;
	        this.match(bdfParser.T__10);
	        this.state = 178;
	        this.match(bdfParser.QUOTEDSTRING);
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



	setwidthnamedecl() {
	    let localctx = new SetwidthnamedeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, bdfParser.RULE_setwidthnamedecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 180;
	        this.match(bdfParser.T__11);
	        this.state = 181;
	        this.match(bdfParser.QUOTEDSTRING);
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



	addstylenamedecl() {
	    let localctx = new AddstylenamedeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, bdfParser.RULE_addstylenamedecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 183;
	        this.match(bdfParser.T__12);
	        this.state = 184;
	        this.match(bdfParser.QUOTEDSTRING);
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



	pixelsizedecl() {
	    let localctx = new PixelsizedeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, bdfParser.RULE_pixelsizedecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 186;
	        this.match(bdfParser.T__13);
	        this.state = 187;
	        this.match(bdfParser.ARG);
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



	pointsizedecl() {
	    let localctx = new PointsizedeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, bdfParser.RULE_pointsizedecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 189;
	        this.match(bdfParser.T__14);
	        this.state = 190;
	        this.match(bdfParser.ARG);
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



	resolutionxdecl() {
	    let localctx = new ResolutionxdeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, bdfParser.RULE_resolutionxdecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 192;
	        this.match(bdfParser.T__15);
	        this.state = 193;
	        this.match(bdfParser.ARG);
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



	resolutionydecl() {
	    let localctx = new ResolutionydeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, bdfParser.RULE_resolutionydecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 195;
	        this.match(bdfParser.T__16);
	        this.state = 196;
	        this.match(bdfParser.ARG);
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



	spacingdecl() {
	    let localctx = new SpacingdeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, bdfParser.RULE_spacingdecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 198;
	        this.match(bdfParser.T__17);
	        this.state = 199;
	        this.match(bdfParser.QUOTEDSTRING);
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



	averagewidthdecl() {
	    let localctx = new AveragewidthdeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, bdfParser.RULE_averagewidthdecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 201;
	        this.match(bdfParser.T__18);
	        this.state = 202;
	        this.match(bdfParser.ARG);
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



	charsetregistrydecl() {
	    let localctx = new CharsetregistrydeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, bdfParser.RULE_charsetregistrydecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 204;
	        this.match(bdfParser.T__19);
	        this.state = 205;
	        this.match(bdfParser.QUOTEDSTRING);
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



	charsetencoding() {
	    let localctx = new CharsetencodingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, bdfParser.RULE_charsetencoding);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 207;
	        this.match(bdfParser.T__20);
	        this.state = 208;
	        this.match(bdfParser.QUOTEDSTRING);
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



	fontnameregistry() {
	    let localctx = new FontnameregistryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, bdfParser.RULE_fontnameregistry);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 210;
	        this.match(bdfParser.T__21);
	        this.state = 211;
	        this.match(bdfParser.QUOTEDSTRING);
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



	fontascentdecl() {
	    let localctx = new FontascentdeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, bdfParser.RULE_fontascentdecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 213;
	        this.match(bdfParser.T__22);
	        this.state = 214;
	        this.match(bdfParser.ARG);
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



	charsetcollectionsdecl() {
	    let localctx = new CharsetcollectionsdeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, bdfParser.RULE_charsetcollectionsdecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 216;
	        this.match(bdfParser.T__23);
	        this.state = 217;
	        this.match(bdfParser.QUOTEDSTRING);
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



	fontnamedecl() {
	    let localctx = new FontnamedeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, bdfParser.RULE_fontnamedecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 219;
	        this.match(bdfParser.T__24);
	        this.state = 220;
	        this.match(bdfParser.QUOTEDSTRING);
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



	facenamedecl() {
	    let localctx = new FacenamedeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, bdfParser.RULE_facenamedecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 222;
	        this.match(bdfParser.T__25);
	        this.state = 223;
	        this.match(bdfParser.QUOTEDSTRING);
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



	copyrightdecl() {
	    let localctx = new CopyrightdeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, bdfParser.RULE_copyrightdecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 225;
	        this.match(bdfParser.T__26);
	        this.state = 226;
	        this.match(bdfParser.QUOTEDSTRING);
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



	fontdecentdecl() {
	    let localctx = new FontdecentdeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, bdfParser.RULE_fontdecentdecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 228;
	        this.match(bdfParser.T__27);
	        this.state = 229;
	        this.match(bdfParser.ARG);
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



	fontversiondecl() {
	    let localctx = new FontversiondeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, bdfParser.RULE_fontversiondecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 231;
	        this.match(bdfParser.T__28);
	        this.state = 232;
	        this.match(bdfParser.QUOTEDSTRING);
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



	underlinepositiondecl() {
	    let localctx = new UnderlinepositiondeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, bdfParser.RULE_underlinepositiondecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 234;
	        this.match(bdfParser.T__29);
	        this.state = 235;
	        this.match(bdfParser.ARG);
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



	underlinethicknessdecl() {
	    let localctx = new UnderlinethicknessdeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, bdfParser.RULE_underlinethicknessdecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 237;
	        this.match(bdfParser.T__30);
	        this.state = 238;
	        this.match(bdfParser.ARG);
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



	xheightdecl() {
	    let localctx = new XheightdeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, bdfParser.RULE_xheightdecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 240;
	        this.match(bdfParser.T__31);
	        this.state = 241;
	        this.match(bdfParser.ARG);
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



	capheighdecl() {
	    let localctx = new CapheighdeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, bdfParser.RULE_capheighdecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 243;
	        this.match(bdfParser.T__32);
	        this.state = 244;
	        this.match(bdfParser.ARG);
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



	rawascentdecl() {
	    let localctx = new RawascentdeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, bdfParser.RULE_rawascentdecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 246;
	        this.match(bdfParser.T__33);
	        this.state = 247;
	        this.match(bdfParser.ARG);
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



	rawdescentdecl() {
	    let localctx = new RawdescentdeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, bdfParser.RULE_rawdescentdecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 249;
	        this.match(bdfParser.T__34);
	        this.state = 250;
	        this.match(bdfParser.ARG);
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



	normspacedecl() {
	    let localctx = new NormspacedeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, bdfParser.RULE_normspacedecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 252;
	        this.match(bdfParser.T__35);
	        this.state = 253;
	        this.match(bdfParser.ARG);
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



	relativeweightdecl() {
	    let localctx = new RelativeweightdeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, bdfParser.RULE_relativeweightdecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 255;
	        this.match(bdfParser.T__36);
	        this.state = 256;
	        this.match(bdfParser.ARG);
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



	relaticesetwidthdecl() {
	    let localctx = new RelaticesetwidthdeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, bdfParser.RULE_relaticesetwidthdecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
	        this.match(bdfParser.T__37);
	        this.state = 259;
	        this.match(bdfParser.ARG);
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



	figurewidthdecl() {
	    let localctx = new FigurewidthdeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, bdfParser.RULE_figurewidthdecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 261;
	        this.match(bdfParser.T__38);
	        this.state = 262;
	        this.match(bdfParser.ARG);
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



	avglowercasewidthdecl() {
	    let localctx = new AvglowercasewidthdeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, bdfParser.RULE_avglowercasewidthdecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 264;
	        this.match(bdfParser.T__39);
	        this.state = 265;
	        this.match(bdfParser.ARG);
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



	avguppercasewidthdecl() {
	    let localctx = new AvguppercasewidthdeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, bdfParser.RULE_avguppercasewidthdecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 267;
	        this.match(bdfParser.T__40);
	        this.state = 268;
	        this.match(bdfParser.ARG);
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



	charsdecl() {
	    let localctx = new CharsdeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, bdfParser.RULE_charsdecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 270;
	        this.match(bdfParser.T__41);
	        this.state = 271;
	        this.match(bdfParser.ARG);
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



	chardecl() {
	    let localctx = new ChardeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, bdfParser.RULE_chardecl);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 273;
	        this.match(bdfParser.T__42);
	        this.state = 274;
	        this.match(bdfParser.ARG);
	        this.state = 282;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & ((1 << (bdfParser.T__44 - 45)) | (1 << (bdfParser.T__45 - 45)) | (1 << (bdfParser.T__46 - 45)) | (1 << (bdfParser.T__47 - 45)) | (1 << (bdfParser.T__48 - 45)))) !== 0)) {
	            this.state = 280;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case bdfParser.T__44:
	                this.state = 275;
	                this.encodingdecl();
	                break;
	            case bdfParser.T__45:
	                this.state = 276;
	                this.swidthdecl();
	                break;
	            case bdfParser.T__46:
	                this.state = 277;
	                this.dwidthdecl();
	                break;
	            case bdfParser.T__47:
	                this.state = 278;
	                this.bbxdecl();
	                break;
	            case bdfParser.T__48:
	                this.state = 279;
	                this.bitmapdecl();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 284;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 285;
	        this.match(bdfParser.T__43);
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



	encodingdecl() {
	    let localctx = new EncodingdeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, bdfParser.RULE_encodingdecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 287;
	        this.match(bdfParser.T__44);
	        this.state = 288;
	        this.match(bdfParser.ARG);
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



	swidthdecl() {
	    let localctx = new SwidthdeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, bdfParser.RULE_swidthdecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 290;
	        this.match(bdfParser.T__45);
	        this.state = 291;
	        this.match(bdfParser.ARG);
	        this.state = 292;
	        this.match(bdfParser.ARG);
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



	dwidthdecl() {
	    let localctx = new DwidthdeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, bdfParser.RULE_dwidthdecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 294;
	        this.match(bdfParser.T__46);
	        this.state = 295;
	        this.match(bdfParser.ARG);
	        this.state = 296;
	        this.match(bdfParser.ARG);
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



	bbxdecl() {
	    let localctx = new BbxdeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, bdfParser.RULE_bbxdecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 298;
	        this.match(bdfParser.T__47);
	        this.state = 299;
	        this.match(bdfParser.ARG);
	        this.state = 300;
	        this.match(bdfParser.ARG);
	        this.state = 301;
	        this.match(bdfParser.ARG);
	        this.state = 302;
	        this.match(bdfParser.ARG);
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



	bitmapdecl() {
	    let localctx = new BitmapdeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, bdfParser.RULE_bitmapdecl);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 304;
	        this.match(bdfParser.T__48);
	        this.state = 308;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===bdfParser.ARG) {
	            this.state = 305;
	            this.match(bdfParser.ARG);
	            this.state = 310;
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


}

bdfParser.EOF = antlr4.Token.EOF;
bdfParser.T__0 = 1;
bdfParser.T__1 = 2;
bdfParser.T__2 = 3;
bdfParser.T__3 = 4;
bdfParser.T__4 = 5;
bdfParser.T__5 = 6;
bdfParser.T__6 = 7;
bdfParser.T__7 = 8;
bdfParser.T__8 = 9;
bdfParser.T__9 = 10;
bdfParser.T__10 = 11;
bdfParser.T__11 = 12;
bdfParser.T__12 = 13;
bdfParser.T__13 = 14;
bdfParser.T__14 = 15;
bdfParser.T__15 = 16;
bdfParser.T__16 = 17;
bdfParser.T__17 = 18;
bdfParser.T__18 = 19;
bdfParser.T__19 = 20;
bdfParser.T__20 = 21;
bdfParser.T__21 = 22;
bdfParser.T__22 = 23;
bdfParser.T__23 = 24;
bdfParser.T__24 = 25;
bdfParser.T__25 = 26;
bdfParser.T__26 = 27;
bdfParser.T__27 = 28;
bdfParser.T__28 = 29;
bdfParser.T__29 = 30;
bdfParser.T__30 = 31;
bdfParser.T__31 = 32;
bdfParser.T__32 = 33;
bdfParser.T__33 = 34;
bdfParser.T__34 = 35;
bdfParser.T__35 = 36;
bdfParser.T__36 = 37;
bdfParser.T__37 = 38;
bdfParser.T__38 = 39;
bdfParser.T__39 = 40;
bdfParser.T__40 = 41;
bdfParser.T__41 = 42;
bdfParser.T__42 = 43;
bdfParser.T__43 = 44;
bdfParser.T__44 = 45;
bdfParser.T__45 = 46;
bdfParser.T__46 = 47;
bdfParser.T__47 = 48;
bdfParser.T__48 = 49;
bdfParser.ARG = 50;
bdfParser.QUOTEDSTRING = 51;
bdfParser.WS = 52;

bdfParser.RULE_font = 0;
bdfParser.RULE_startfont = 1;
bdfParser.RULE_fontdecl = 2;
bdfParser.RULE_sizedecl = 3;
bdfParser.RULE_fontboundingboxdecl = 4;
bdfParser.RULE_propertiesdecl = 5;
bdfParser.RULE_foundrydecl = 6;
bdfParser.RULE_familynanmedecl = 7;
bdfParser.RULE_weightnamedecl = 8;
bdfParser.RULE_slantdecl = 9;
bdfParser.RULE_setwidthnamedecl = 10;
bdfParser.RULE_addstylenamedecl = 11;
bdfParser.RULE_pixelsizedecl = 12;
bdfParser.RULE_pointsizedecl = 13;
bdfParser.RULE_resolutionxdecl = 14;
bdfParser.RULE_resolutionydecl = 15;
bdfParser.RULE_spacingdecl = 16;
bdfParser.RULE_averagewidthdecl = 17;
bdfParser.RULE_charsetregistrydecl = 18;
bdfParser.RULE_charsetencoding = 19;
bdfParser.RULE_fontnameregistry = 20;
bdfParser.RULE_fontascentdecl = 21;
bdfParser.RULE_charsetcollectionsdecl = 22;
bdfParser.RULE_fontnamedecl = 23;
bdfParser.RULE_facenamedecl = 24;
bdfParser.RULE_copyrightdecl = 25;
bdfParser.RULE_fontdecentdecl = 26;
bdfParser.RULE_fontversiondecl = 27;
bdfParser.RULE_underlinepositiondecl = 28;
bdfParser.RULE_underlinethicknessdecl = 29;
bdfParser.RULE_xheightdecl = 30;
bdfParser.RULE_capheighdecl = 31;
bdfParser.RULE_rawascentdecl = 32;
bdfParser.RULE_rawdescentdecl = 33;
bdfParser.RULE_normspacedecl = 34;
bdfParser.RULE_relativeweightdecl = 35;
bdfParser.RULE_relaticesetwidthdecl = 36;
bdfParser.RULE_figurewidthdecl = 37;
bdfParser.RULE_avglowercasewidthdecl = 38;
bdfParser.RULE_avguppercasewidthdecl = 39;
bdfParser.RULE_charsdecl = 40;
bdfParser.RULE_chardecl = 41;
bdfParser.RULE_encodingdecl = 42;
bdfParser.RULE_swidthdecl = 43;
bdfParser.RULE_dwidthdecl = 44;
bdfParser.RULE_bbxdecl = 45;
bdfParser.RULE_bitmapdecl = 46;

class FontContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_font;
    }

	startfont() {
	    return this.getTypedRuleContext(StartfontContext,0);
	};

	EOF() {
	    return this.getToken(bdfParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterFont(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitFont(this);
		}
	}


}



class StartfontContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_startfont;
    }

	ARG() {
	    return this.getToken(bdfParser.ARG, 0);
	};

	fontdecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FontdeclContext);
	    } else {
	        return this.getTypedRuleContext(FontdeclContext,i);
	    }
	};

	sizedecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SizedeclContext);
	    } else {
	        return this.getTypedRuleContext(SizedeclContext,i);
	    }
	};

	fontboundingboxdecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FontboundingboxdeclContext);
	    } else {
	        return this.getTypedRuleContext(FontboundingboxdeclContext,i);
	    }
	};

	propertiesdecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PropertiesdeclContext);
	    } else {
	        return this.getTypedRuleContext(PropertiesdeclContext,i);
	    }
	};

	charsdecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CharsdeclContext);
	    } else {
	        return this.getTypedRuleContext(CharsdeclContext,i);
	    }
	};

	chardecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ChardeclContext);
	    } else {
	        return this.getTypedRuleContext(ChardeclContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterStartfont(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitStartfont(this);
		}
	}


}



class FontdeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_fontdecl;
    }

	ARG() {
	    return this.getToken(bdfParser.ARG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterFontdecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitFontdecl(this);
		}
	}


}



class SizedeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_sizedecl;
    }

	ARG = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(bdfParser.ARG);
	    } else {
	        return this.getToken(bdfParser.ARG, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterSizedecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitSizedecl(this);
		}
	}


}



class FontboundingboxdeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_fontboundingboxdecl;
    }

	ARG = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(bdfParser.ARG);
	    } else {
	        return this.getToken(bdfParser.ARG, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterFontboundingboxdecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitFontboundingboxdecl(this);
		}
	}


}



class PropertiesdeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_propertiesdecl;
    }

	ARG() {
	    return this.getToken(bdfParser.ARG, 0);
	};

	fontascentdecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FontascentdeclContext);
	    } else {
	        return this.getTypedRuleContext(FontascentdeclContext,i);
	    }
	};

	fontdecentdecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FontdecentdeclContext);
	    } else {
	        return this.getTypedRuleContext(FontdecentdeclContext,i);
	    }
	};

	foundrydecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FoundrydeclContext);
	    } else {
	        return this.getTypedRuleContext(FoundrydeclContext,i);
	    }
	};

	familynanmedecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FamilynanmedeclContext);
	    } else {
	        return this.getTypedRuleContext(FamilynanmedeclContext,i);
	    }
	};

	weightnamedecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WeightnamedeclContext);
	    } else {
	        return this.getTypedRuleContext(WeightnamedeclContext,i);
	    }
	};

	slantdecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SlantdeclContext);
	    } else {
	        return this.getTypedRuleContext(SlantdeclContext,i);
	    }
	};

	setwidthnamedecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SetwidthnamedeclContext);
	    } else {
	        return this.getTypedRuleContext(SetwidthnamedeclContext,i);
	    }
	};

	addstylenamedecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AddstylenamedeclContext);
	    } else {
	        return this.getTypedRuleContext(AddstylenamedeclContext,i);
	    }
	};

	pixelsizedecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PixelsizedeclContext);
	    } else {
	        return this.getTypedRuleContext(PixelsizedeclContext,i);
	    }
	};

	pointsizedecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PointsizedeclContext);
	    } else {
	        return this.getTypedRuleContext(PointsizedeclContext,i);
	    }
	};

	resolutionxdecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ResolutionxdeclContext);
	    } else {
	        return this.getTypedRuleContext(ResolutionxdeclContext,i);
	    }
	};

	resolutionydecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ResolutionydeclContext);
	    } else {
	        return this.getTypedRuleContext(ResolutionydeclContext,i);
	    }
	};

	spacingdecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SpacingdeclContext);
	    } else {
	        return this.getTypedRuleContext(SpacingdeclContext,i);
	    }
	};

	averagewidthdecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AveragewidthdeclContext);
	    } else {
	        return this.getTypedRuleContext(AveragewidthdeclContext,i);
	    }
	};

	charsetregistrydecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CharsetregistrydeclContext);
	    } else {
	        return this.getTypedRuleContext(CharsetregistrydeclContext,i);
	    }
	};

	charsetencoding = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CharsetencodingContext);
	    } else {
	        return this.getTypedRuleContext(CharsetencodingContext,i);
	    }
	};

	fontnameregistry = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FontnameregistryContext);
	    } else {
	        return this.getTypedRuleContext(FontnameregistryContext,i);
	    }
	};

	charsetcollectionsdecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CharsetcollectionsdeclContext);
	    } else {
	        return this.getTypedRuleContext(CharsetcollectionsdeclContext,i);
	    }
	};

	fontnamedecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FontnamedeclContext);
	    } else {
	        return this.getTypedRuleContext(FontnamedeclContext,i);
	    }
	};

	facenamedecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FacenamedeclContext);
	    } else {
	        return this.getTypedRuleContext(FacenamedeclContext,i);
	    }
	};

	copyrightdecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CopyrightdeclContext);
	    } else {
	        return this.getTypedRuleContext(CopyrightdeclContext,i);
	    }
	};

	fontversiondecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FontversiondeclContext);
	    } else {
	        return this.getTypedRuleContext(FontversiondeclContext,i);
	    }
	};

	underlinepositiondecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UnderlinepositiondeclContext);
	    } else {
	        return this.getTypedRuleContext(UnderlinepositiondeclContext,i);
	    }
	};

	underlinethicknessdecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UnderlinethicknessdeclContext);
	    } else {
	        return this.getTypedRuleContext(UnderlinethicknessdeclContext,i);
	    }
	};

	xheightdecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(XheightdeclContext);
	    } else {
	        return this.getTypedRuleContext(XheightdeclContext,i);
	    }
	};

	capheighdecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CapheighdeclContext);
	    } else {
	        return this.getTypedRuleContext(CapheighdeclContext,i);
	    }
	};

	rawascentdecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RawascentdeclContext);
	    } else {
	        return this.getTypedRuleContext(RawascentdeclContext,i);
	    }
	};

	rawdescentdecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RawdescentdeclContext);
	    } else {
	        return this.getTypedRuleContext(RawdescentdeclContext,i);
	    }
	};

	normspacedecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NormspacedeclContext);
	    } else {
	        return this.getTypedRuleContext(NormspacedeclContext,i);
	    }
	};

	relativeweightdecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RelativeweightdeclContext);
	    } else {
	        return this.getTypedRuleContext(RelativeweightdeclContext,i);
	    }
	};

	relaticesetwidthdecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RelaticesetwidthdeclContext);
	    } else {
	        return this.getTypedRuleContext(RelaticesetwidthdeclContext,i);
	    }
	};

	figurewidthdecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FigurewidthdeclContext);
	    } else {
	        return this.getTypedRuleContext(FigurewidthdeclContext,i);
	    }
	};

	avglowercasewidthdecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AvglowercasewidthdeclContext);
	    } else {
	        return this.getTypedRuleContext(AvglowercasewidthdeclContext,i);
	    }
	};

	avguppercasewidthdecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AvguppercasewidthdeclContext);
	    } else {
	        return this.getTypedRuleContext(AvguppercasewidthdeclContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterPropertiesdecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitPropertiesdecl(this);
		}
	}


}



class FoundrydeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_foundrydecl;
    }

	QUOTEDSTRING() {
	    return this.getToken(bdfParser.QUOTEDSTRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterFoundrydecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitFoundrydecl(this);
		}
	}


}



class FamilynanmedeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_familynanmedecl;
    }

	QUOTEDSTRING() {
	    return this.getToken(bdfParser.QUOTEDSTRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterFamilynanmedecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitFamilynanmedecl(this);
		}
	}


}



class WeightnamedeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_weightnamedecl;
    }

	QUOTEDSTRING() {
	    return this.getToken(bdfParser.QUOTEDSTRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterWeightnamedecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitWeightnamedecl(this);
		}
	}


}



class SlantdeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_slantdecl;
    }

	QUOTEDSTRING() {
	    return this.getToken(bdfParser.QUOTEDSTRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterSlantdecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitSlantdecl(this);
		}
	}


}



class SetwidthnamedeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_setwidthnamedecl;
    }

	QUOTEDSTRING() {
	    return this.getToken(bdfParser.QUOTEDSTRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterSetwidthnamedecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitSetwidthnamedecl(this);
		}
	}


}



class AddstylenamedeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_addstylenamedecl;
    }

	QUOTEDSTRING() {
	    return this.getToken(bdfParser.QUOTEDSTRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterAddstylenamedecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitAddstylenamedecl(this);
		}
	}


}



class PixelsizedeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_pixelsizedecl;
    }

	ARG() {
	    return this.getToken(bdfParser.ARG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterPixelsizedecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitPixelsizedecl(this);
		}
	}


}



class PointsizedeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_pointsizedecl;
    }

	ARG() {
	    return this.getToken(bdfParser.ARG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterPointsizedecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitPointsizedecl(this);
		}
	}


}



class ResolutionxdeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_resolutionxdecl;
    }

	ARG() {
	    return this.getToken(bdfParser.ARG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterResolutionxdecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitResolutionxdecl(this);
		}
	}


}



class ResolutionydeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_resolutionydecl;
    }

	ARG() {
	    return this.getToken(bdfParser.ARG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterResolutionydecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitResolutionydecl(this);
		}
	}


}



class SpacingdeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_spacingdecl;
    }

	QUOTEDSTRING() {
	    return this.getToken(bdfParser.QUOTEDSTRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterSpacingdecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitSpacingdecl(this);
		}
	}


}



class AveragewidthdeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_averagewidthdecl;
    }

	ARG() {
	    return this.getToken(bdfParser.ARG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterAveragewidthdecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitAveragewidthdecl(this);
		}
	}


}



class CharsetregistrydeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_charsetregistrydecl;
    }

	QUOTEDSTRING() {
	    return this.getToken(bdfParser.QUOTEDSTRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterCharsetregistrydecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitCharsetregistrydecl(this);
		}
	}


}



class CharsetencodingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_charsetencoding;
    }

	QUOTEDSTRING() {
	    return this.getToken(bdfParser.QUOTEDSTRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterCharsetencoding(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitCharsetencoding(this);
		}
	}


}



class FontnameregistryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_fontnameregistry;
    }

	QUOTEDSTRING() {
	    return this.getToken(bdfParser.QUOTEDSTRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterFontnameregistry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitFontnameregistry(this);
		}
	}


}



class FontascentdeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_fontascentdecl;
    }

	ARG() {
	    return this.getToken(bdfParser.ARG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterFontascentdecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitFontascentdecl(this);
		}
	}


}



class CharsetcollectionsdeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_charsetcollectionsdecl;
    }

	QUOTEDSTRING() {
	    return this.getToken(bdfParser.QUOTEDSTRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterCharsetcollectionsdecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitCharsetcollectionsdecl(this);
		}
	}


}



class FontnamedeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_fontnamedecl;
    }

	QUOTEDSTRING() {
	    return this.getToken(bdfParser.QUOTEDSTRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterFontnamedecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitFontnamedecl(this);
		}
	}


}



class FacenamedeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_facenamedecl;
    }

	QUOTEDSTRING() {
	    return this.getToken(bdfParser.QUOTEDSTRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterFacenamedecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitFacenamedecl(this);
		}
	}


}



class CopyrightdeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_copyrightdecl;
    }

	QUOTEDSTRING() {
	    return this.getToken(bdfParser.QUOTEDSTRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterCopyrightdecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitCopyrightdecl(this);
		}
	}


}



class FontdecentdeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_fontdecentdecl;
    }

	ARG() {
	    return this.getToken(bdfParser.ARG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterFontdecentdecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitFontdecentdecl(this);
		}
	}


}



class FontversiondeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_fontversiondecl;
    }

	QUOTEDSTRING() {
	    return this.getToken(bdfParser.QUOTEDSTRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterFontversiondecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitFontversiondecl(this);
		}
	}


}



class UnderlinepositiondeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_underlinepositiondecl;
    }

	ARG() {
	    return this.getToken(bdfParser.ARG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterUnderlinepositiondecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitUnderlinepositiondecl(this);
		}
	}


}



class UnderlinethicknessdeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_underlinethicknessdecl;
    }

	ARG() {
	    return this.getToken(bdfParser.ARG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterUnderlinethicknessdecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitUnderlinethicknessdecl(this);
		}
	}


}



class XheightdeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_xheightdecl;
    }

	ARG() {
	    return this.getToken(bdfParser.ARG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterXheightdecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitXheightdecl(this);
		}
	}


}



class CapheighdeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_capheighdecl;
    }

	ARG() {
	    return this.getToken(bdfParser.ARG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterCapheighdecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitCapheighdecl(this);
		}
	}


}



class RawascentdeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_rawascentdecl;
    }

	ARG() {
	    return this.getToken(bdfParser.ARG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterRawascentdecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitRawascentdecl(this);
		}
	}


}



class RawdescentdeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_rawdescentdecl;
    }

	ARG() {
	    return this.getToken(bdfParser.ARG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterRawdescentdecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitRawdescentdecl(this);
		}
	}


}



class NormspacedeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_normspacedecl;
    }

	ARG() {
	    return this.getToken(bdfParser.ARG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterNormspacedecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitNormspacedecl(this);
		}
	}


}



class RelativeweightdeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_relativeweightdecl;
    }

	ARG() {
	    return this.getToken(bdfParser.ARG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterRelativeweightdecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitRelativeweightdecl(this);
		}
	}


}



class RelaticesetwidthdeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_relaticesetwidthdecl;
    }

	ARG() {
	    return this.getToken(bdfParser.ARG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterRelaticesetwidthdecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitRelaticesetwidthdecl(this);
		}
	}


}



class FigurewidthdeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_figurewidthdecl;
    }

	ARG() {
	    return this.getToken(bdfParser.ARG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterFigurewidthdecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitFigurewidthdecl(this);
		}
	}


}



class AvglowercasewidthdeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_avglowercasewidthdecl;
    }

	ARG() {
	    return this.getToken(bdfParser.ARG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterAvglowercasewidthdecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitAvglowercasewidthdecl(this);
		}
	}


}



class AvguppercasewidthdeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_avguppercasewidthdecl;
    }

	ARG() {
	    return this.getToken(bdfParser.ARG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterAvguppercasewidthdecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitAvguppercasewidthdecl(this);
		}
	}


}



class CharsdeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_charsdecl;
    }

	ARG() {
	    return this.getToken(bdfParser.ARG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterCharsdecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitCharsdecl(this);
		}
	}


}



class ChardeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_chardecl;
    }

	ARG() {
	    return this.getToken(bdfParser.ARG, 0);
	};

	encodingdecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EncodingdeclContext);
	    } else {
	        return this.getTypedRuleContext(EncodingdeclContext,i);
	    }
	};

	swidthdecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SwidthdeclContext);
	    } else {
	        return this.getTypedRuleContext(SwidthdeclContext,i);
	    }
	};

	dwidthdecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DwidthdeclContext);
	    } else {
	        return this.getTypedRuleContext(DwidthdeclContext,i);
	    }
	};

	bbxdecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BbxdeclContext);
	    } else {
	        return this.getTypedRuleContext(BbxdeclContext,i);
	    }
	};

	bitmapdecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BitmapdeclContext);
	    } else {
	        return this.getTypedRuleContext(BitmapdeclContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterChardecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitChardecl(this);
		}
	}


}



class EncodingdeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_encodingdecl;
    }

	ARG() {
	    return this.getToken(bdfParser.ARG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterEncodingdecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitEncodingdecl(this);
		}
	}


}



class SwidthdeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_swidthdecl;
    }

	ARG = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(bdfParser.ARG);
	    } else {
	        return this.getToken(bdfParser.ARG, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterSwidthdecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitSwidthdecl(this);
		}
	}


}



class DwidthdeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_dwidthdecl;
    }

	ARG = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(bdfParser.ARG);
	    } else {
	        return this.getToken(bdfParser.ARG, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterDwidthdecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitDwidthdecl(this);
		}
	}


}



class BbxdeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_bbxdecl;
    }

	ARG = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(bdfParser.ARG);
	    } else {
	        return this.getToken(bdfParser.ARG, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterBbxdecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitBbxdecl(this);
		}
	}


}



class BitmapdeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bdfParser.RULE_bitmapdecl;
    }

	ARG = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(bdfParser.ARG);
	    } else {
	        return this.getToken(bdfParser.ARG, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.enterBitmapdecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bdfListener ) {
	        listener.exitBitmapdecl(this);
		}
	}


}




bdfParser.FontContext = FontContext; 
bdfParser.StartfontContext = StartfontContext; 
bdfParser.FontdeclContext = FontdeclContext; 
bdfParser.SizedeclContext = SizedeclContext; 
bdfParser.FontboundingboxdeclContext = FontboundingboxdeclContext; 
bdfParser.PropertiesdeclContext = PropertiesdeclContext; 
bdfParser.FoundrydeclContext = FoundrydeclContext; 
bdfParser.FamilynanmedeclContext = FamilynanmedeclContext; 
bdfParser.WeightnamedeclContext = WeightnamedeclContext; 
bdfParser.SlantdeclContext = SlantdeclContext; 
bdfParser.SetwidthnamedeclContext = SetwidthnamedeclContext; 
bdfParser.AddstylenamedeclContext = AddstylenamedeclContext; 
bdfParser.PixelsizedeclContext = PixelsizedeclContext; 
bdfParser.PointsizedeclContext = PointsizedeclContext; 
bdfParser.ResolutionxdeclContext = ResolutionxdeclContext; 
bdfParser.ResolutionydeclContext = ResolutionydeclContext; 
bdfParser.SpacingdeclContext = SpacingdeclContext; 
bdfParser.AveragewidthdeclContext = AveragewidthdeclContext; 
bdfParser.CharsetregistrydeclContext = CharsetregistrydeclContext; 
bdfParser.CharsetencodingContext = CharsetencodingContext; 
bdfParser.FontnameregistryContext = FontnameregistryContext; 
bdfParser.FontascentdeclContext = FontascentdeclContext; 
bdfParser.CharsetcollectionsdeclContext = CharsetcollectionsdeclContext; 
bdfParser.FontnamedeclContext = FontnamedeclContext; 
bdfParser.FacenamedeclContext = FacenamedeclContext; 
bdfParser.CopyrightdeclContext = CopyrightdeclContext; 
bdfParser.FontdecentdeclContext = FontdecentdeclContext; 
bdfParser.FontversiondeclContext = FontversiondeclContext; 
bdfParser.UnderlinepositiondeclContext = UnderlinepositiondeclContext; 
bdfParser.UnderlinethicknessdeclContext = UnderlinethicknessdeclContext; 
bdfParser.XheightdeclContext = XheightdeclContext; 
bdfParser.CapheighdeclContext = CapheighdeclContext; 
bdfParser.RawascentdeclContext = RawascentdeclContext; 
bdfParser.RawdescentdeclContext = RawdescentdeclContext; 
bdfParser.NormspacedeclContext = NormspacedeclContext; 
bdfParser.RelativeweightdeclContext = RelativeweightdeclContext; 
bdfParser.RelaticesetwidthdeclContext = RelaticesetwidthdeclContext; 
bdfParser.FigurewidthdeclContext = FigurewidthdeclContext; 
bdfParser.AvglowercasewidthdeclContext = AvglowercasewidthdeclContext; 
bdfParser.AvguppercasewidthdeclContext = AvguppercasewidthdeclContext; 
bdfParser.CharsdeclContext = CharsdeclContext; 
bdfParser.ChardeclContext = ChardeclContext; 
bdfParser.EncodingdeclContext = EncodingdeclContext; 
bdfParser.SwidthdeclContext = SwidthdeclContext; 
bdfParser.DwidthdeclContext = DwidthdeclContext; 
bdfParser.BbxdeclContext = BbxdeclContext; 
bdfParser.BitmapdeclContext = BitmapdeclContext; 
