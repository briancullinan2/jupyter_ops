// Generated from Resources/Parsers/gtin/gtin.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import gtinListener from './gtinListener.js';
const serializedATN = [4,1,12,256,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,1,0,1,0,1,0,1,0,1,0,3,0,80,8,0,1,0,1,0,1,1,1,1,1,
2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,3,6,103,
8,6,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,
11,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,3,14,133,
8,14,1,15,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,17,1,17,1,17,1,17,3,
17,148,8,17,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,20,1,20,1,20,
1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,23,1,23,3,
23,176,8,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,
1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,
28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,30,
1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,32,1,
32,1,32,1,32,1,33,1,33,1,33,1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,
1,35,1,35,1,35,1,35,1,35,1,35,1,36,1,36,1,36,0,0,37,0,2,4,6,8,10,12,14,16,
18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,
66,68,70,72,0,3,1,0,2,10,1,0,1,9,1,0,1,10,228,0,79,1,0,0,0,2,83,1,0,0,0,
4,85,1,0,0,0,6,94,1,0,0,0,8,96,1,0,0,0,10,98,1,0,0,0,12,102,1,0,0,0,14,104,
1,0,0,0,16,109,1,0,0,0,18,111,1,0,0,0,20,113,1,0,0,0,22,119,1,0,0,0,24,126,
1,0,0,0,26,128,1,0,0,0,28,132,1,0,0,0,30,134,1,0,0,0,32,140,1,0,0,0,34,147,
1,0,0,0,36,149,1,0,0,0,38,153,1,0,0,0,40,158,1,0,0,0,42,163,1,0,0,0,44,168,
1,0,0,0,46,175,1,0,0,0,48,179,1,0,0,0,50,189,1,0,0,0,52,194,1,0,0,0,54,199,
1,0,0,0,56,203,1,0,0,0,58,207,1,0,0,0,60,217,1,0,0,0,62,227,1,0,0,0,64,231,
1,0,0,0,66,235,1,0,0,0,68,238,1,0,0,0,70,240,1,0,0,0,72,253,1,0,0,0,74,80,
3,2,1,0,75,80,3,6,3,0,76,80,3,8,4,0,77,80,3,10,5,0,78,80,3,28,14,0,79,74,
1,0,0,0,79,75,1,0,0,0,79,76,1,0,0,0,79,77,1,0,0,0,79,78,1,0,0,0,80,81,1,
0,0,0,81,82,5,0,0,1,82,1,1,0,0,0,83,84,3,4,2,0,84,3,1,0,0,0,85,86,3,72,36,
0,86,87,3,72,36,0,87,88,3,72,36,0,88,89,3,72,36,0,89,90,3,72,36,0,90,91,
3,72,36,0,91,92,3,72,36,0,92,93,3,72,36,0,93,5,1,0,0,0,94,95,3,12,6,0,95,
7,1,0,0,0,96,97,3,34,17,0,97,9,1,0,0,0,98,99,3,64,32,0,99,11,1,0,0,0,100,
103,3,14,7,0,101,103,3,22,11,0,102,100,1,0,0,0,102,101,1,0,0,0,103,13,1,
0,0,0,104,105,3,24,12,0,105,106,3,16,8,0,106,107,3,18,9,0,107,108,3,26,13,
0,108,15,1,0,0,0,109,110,3,20,10,0,110,17,1,0,0,0,111,112,3,20,10,0,112,
19,1,0,0,0,113,114,3,72,36,0,114,115,3,72,36,0,115,116,3,72,36,0,116,117,
3,72,36,0,117,118,3,72,36,0,118,21,1,0,0,0,119,120,3,72,36,0,120,121,3,72,
36,0,121,122,3,72,36,0,122,123,3,72,36,0,123,124,3,72,36,0,124,125,3,72,
36,0,125,23,1,0,0,0,126,127,3,72,36,0,127,25,1,0,0,0,128,129,3,72,36,0,129,
27,1,0,0,0,130,133,3,30,15,0,131,133,3,32,16,0,132,130,1,0,0,0,132,131,1,
0,0,0,133,29,1,0,0,0,134,135,3,72,36,0,135,136,3,72,36,0,136,137,3,72,36,
0,137,138,3,72,36,0,138,139,3,72,36,0,139,31,1,0,0,0,140,141,3,72,36,0,141,
142,3,72,36,0,142,33,1,0,0,0,143,148,3,38,19,0,144,148,3,56,28,0,145,148,
3,46,23,0,146,148,3,36,18,0,147,143,1,0,0,0,147,144,1,0,0,0,147,145,1,0,
0,0,147,146,1,0,0,0,148,35,1,0,0,0,149,150,3,62,31,0,150,151,3,60,30,0,151,
152,3,26,13,0,152,37,1,0,0,0,153,154,3,40,20,0,154,155,3,42,21,0,155,156,
3,44,22,0,156,157,3,26,13,0,157,39,1,0,0,0,158,159,5,10,0,0,159,160,5,8,
0,0,160,161,5,10,0,0,161,162,5,1,0,0,162,41,1,0,0,0,163,164,3,72,36,0,164,
165,3,72,36,0,165,166,3,72,36,0,166,167,3,72,36,0,167,43,1,0,0,0,168,169,
3,72,36,0,169,170,3,72,36,0,170,171,3,72,36,0,171,172,3,72,36,0,172,45,1,
0,0,0,173,176,3,50,25,0,174,176,3,52,26,0,175,173,1,0,0,0,175,174,1,0,0,
0,176,177,1,0,0,0,177,178,3,48,24,0,178,47,1,0,0,0,179,180,3,72,36,0,180,
181,3,72,36,0,181,182,3,72,36,0,182,183,3,72,36,0,183,184,3,72,36,0,184,
185,3,72,36,0,185,186,3,72,36,0,186,187,3,72,36,0,187,188,3,72,36,0,188,
49,1,0,0,0,189,190,5,10,0,0,190,191,5,8,0,0,191,192,5,10,0,0,192,193,7,0,
0,0,193,51,1,0,0,0,194,195,5,10,0,0,195,196,5,8,0,0,196,197,5,9,0,0,197,
198,3,72,36,0,198,53,1,0,0,0,199,200,5,10,0,0,200,201,5,8,0,0,201,202,5,
8,0,0,202,55,1,0,0,0,203,204,3,54,27,0,204,205,3,58,29,0,205,206,3,26,13,
0,206,57,1,0,0,0,207,208,3,72,36,0,208,209,3,72,36,0,209,210,3,72,36,0,210,
211,3,72,36,0,211,212,3,72,36,0,212,213,3,72,36,0,213,214,3,72,36,0,214,
215,3,72,36,0,215,216,3,72,36,0,216,59,1,0,0,0,217,218,3,72,36,0,218,219,
3,72,36,0,219,220,3,72,36,0,220,221,3,72,36,0,221,222,3,72,36,0,222,223,
3,72,36,0,223,224,3,72,36,0,224,225,3,72,36,0,225,226,3,72,36,0,226,61,1,
0,0,0,227,228,3,72,36,0,228,229,3,72,36,0,229,230,3,72,36,0,230,63,1,0,0,
0,231,232,3,68,34,0,232,233,3,70,35,0,233,234,3,26,13,0,234,65,1,0,0,0,235,
236,3,72,36,0,236,237,3,72,36,0,237,67,1,0,0,0,238,239,7,1,0,0,239,69,1,
0,0,0,240,241,3,72,36,0,241,242,3,72,36,0,242,243,3,72,36,0,243,244,3,72,
36,0,244,245,3,72,36,0,245,246,3,72,36,0,246,247,3,72,36,0,247,248,3,72,
36,0,248,249,3,72,36,0,249,250,3,72,36,0,250,251,3,72,36,0,251,252,3,72,
36,0,252,71,1,0,0,0,253,254,7,2,0,0,254,73,1,0,0,0,5,79,102,132,147,175];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class gtinParser extends antlr4.Parser {

    static grammarFileName = "gtin.g4";
    static literalNames = [ null, "'0'", "'1'", "'2'", "'3'", "'4'", "'5'", 
                            "'6'", "'7'", "'8'", "'9'", "'-'" ];
    static symbolicNames = [ null, "DIGIT_0", "DIGIT_1", "DIGIT_2", "DIGIT_3", 
                             "DIGIT_4", "DIGIT_5", "DIGIT_6", "DIGIT_7", 
                             "DIGIT_8", "DIGIT_9", "HYPHEN", "WS" ];
    static ruleNames = [ "gtin", "gtin8", "ean8", "gtin12", "gtin13", "gtin14", 
                         "upc", "upc_a", "upc_a_manufacturer", "upc_a_product", 
                         "upc_a_5", "upc_e", "num_system", "check_code", 
                         "supplemental_code", "supplemental_code_5", "supplemental_code_2", 
                         "ean13", "ean13_generic", "ean13_ismn", "gs1_prefix_ismn", 
                         "ismn_publisher_number", "ismn_item_number", "ean13_bookland", 
                         "bookland_isbn", "gs1_prefix_bookland_1", "gs1_prefix_bookland_2", 
                         "gs1_prefix_issn", "ean13_issn", "issn", "ean_13_manprod", 
                         "gs1_prefix", "ean14", "ean14_appid", "ean14_packaging", 
                         "ean14_product", "any_digit" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = gtinParser.ruleNames;
        this.literalNames = gtinParser.literalNames;
        this.symbolicNames = gtinParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	gtin() {
	    let localctx = new GtinContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, gtinParser.RULE_gtin);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 74;
	            this.gtin8();
	            break;

	        case 2:
	            this.state = 75;
	            this.gtin12();
	            break;

	        case 3:
	            this.state = 76;
	            this.gtin13();
	            break;

	        case 4:
	            this.state = 77;
	            this.gtin14();
	            break;

	        case 5:
	            this.state = 78;
	            this.supplemental_code();
	            break;

	        }
	        this.state = 81;
	        this.match(gtinParser.EOF);
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



	gtin8() {
	    let localctx = new Gtin8Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, gtinParser.RULE_gtin8);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this.ean8();
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



	ean8() {
	    let localctx = new Ean8Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, gtinParser.RULE_ean8);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this.any_digit();
	        this.state = 86;
	        this.any_digit();
	        this.state = 87;
	        this.any_digit();
	        this.state = 88;
	        this.any_digit();
	        this.state = 89;
	        this.any_digit();
	        this.state = 90;
	        this.any_digit();
	        this.state = 91;
	        this.any_digit();
	        this.state = 92;
	        this.any_digit();
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



	gtin12() {
	    let localctx = new Gtin12Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, gtinParser.RULE_gtin12);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.upc();
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



	gtin13() {
	    let localctx = new Gtin13Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, gtinParser.RULE_gtin13);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.ean13();
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



	gtin14() {
	    let localctx = new Gtin14Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, gtinParser.RULE_gtin14);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        this.ean14();
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



	upc() {
	    let localctx = new UpcContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, gtinParser.RULE_upc);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 100;
	            this.upc_a();
	            break;

	        case 2:
	            this.state = 101;
	            this.upc_e();
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



	upc_a() {
	    let localctx = new Upc_aContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, gtinParser.RULE_upc_a);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.num_system();
	        this.state = 105;
	        this.upc_a_manufacturer();
	        this.state = 106;
	        this.upc_a_product();
	        this.state = 107;
	        this.check_code();
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



	upc_a_manufacturer() {
	    let localctx = new Upc_a_manufacturerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, gtinParser.RULE_upc_a_manufacturer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        this.upc_a_5();
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



	upc_a_product() {
	    let localctx = new Upc_a_productContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, gtinParser.RULE_upc_a_product);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.upc_a_5();
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



	upc_a_5() {
	    let localctx = new Upc_a_5Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, gtinParser.RULE_upc_a_5);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        this.any_digit();
	        this.state = 114;
	        this.any_digit();
	        this.state = 115;
	        this.any_digit();
	        this.state = 116;
	        this.any_digit();
	        this.state = 117;
	        this.any_digit();
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



	upc_e() {
	    let localctx = new Upc_eContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, gtinParser.RULE_upc_e);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        this.any_digit();
	        this.state = 120;
	        this.any_digit();
	        this.state = 121;
	        this.any_digit();
	        this.state = 122;
	        this.any_digit();
	        this.state = 123;
	        this.any_digit();
	        this.state = 124;
	        this.any_digit();
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



	num_system() {
	    let localctx = new Num_systemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, gtinParser.RULE_num_system);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this.any_digit();
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



	check_code() {
	    let localctx = new Check_codeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, gtinParser.RULE_check_code);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        this.any_digit();
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



	supplemental_code() {
	    let localctx = new Supplemental_codeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, gtinParser.RULE_supplemental_code);
	    try {
	        this.state = 132;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 130;
	            this.supplemental_code_5();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 131;
	            this.supplemental_code_2();
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



	supplemental_code_5() {
	    let localctx = new Supplemental_code_5Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, gtinParser.RULE_supplemental_code_5);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this.any_digit();
	        this.state = 135;
	        this.any_digit();
	        this.state = 136;
	        this.any_digit();
	        this.state = 137;
	        this.any_digit();
	        this.state = 138;
	        this.any_digit();
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



	supplemental_code_2() {
	    let localctx = new Supplemental_code_2Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, gtinParser.RULE_supplemental_code_2);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        this.any_digit();
	        this.state = 141;
	        this.any_digit();
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



	ean13() {
	    let localctx = new Ean13Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, gtinParser.RULE_ean13);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 143;
	            this.ean13_ismn();
	            break;

	        case 2:
	            this.state = 144;
	            this.ean13_issn();
	            break;

	        case 3:
	            this.state = 145;
	            this.ean13_bookland();
	            break;

	        case 4:
	            this.state = 146;
	            this.ean13_generic();
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



	ean13_generic() {
	    let localctx = new Ean13_genericContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, gtinParser.RULE_ean13_generic);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        this.gs1_prefix();
	        this.state = 150;
	        this.ean_13_manprod();
	        this.state = 151;
	        this.check_code();
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



	ean13_ismn() {
	    let localctx = new Ean13_ismnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, gtinParser.RULE_ean13_ismn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        this.gs1_prefix_ismn();
	        this.state = 154;
	        this.ismn_publisher_number();
	        this.state = 155;
	        this.ismn_item_number();
	        this.state = 156;
	        this.check_code();
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



	gs1_prefix_ismn() {
	    let localctx = new Gs1_prefix_ismnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, gtinParser.RULE_gs1_prefix_ismn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        this.match(gtinParser.DIGIT_9);
	        this.state = 159;
	        this.match(gtinParser.DIGIT_7);
	        this.state = 160;
	        this.match(gtinParser.DIGIT_9);
	        this.state = 161;
	        this.match(gtinParser.DIGIT_0);
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



	ismn_publisher_number() {
	    let localctx = new Ismn_publisher_numberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, gtinParser.RULE_ismn_publisher_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 163;
	        this.any_digit();
	        this.state = 164;
	        this.any_digit();
	        this.state = 165;
	        this.any_digit();
	        this.state = 166;
	        this.any_digit();
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



	ismn_item_number() {
	    let localctx = new Ismn_item_numberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, gtinParser.RULE_ismn_item_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        this.any_digit();
	        this.state = 169;
	        this.any_digit();
	        this.state = 170;
	        this.any_digit();
	        this.state = 171;
	        this.any_digit();
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



	ean13_bookland() {
	    let localctx = new Ean13_booklandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, gtinParser.RULE_ean13_bookland);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 175;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 173;
	            this.gs1_prefix_bookland_1();
	            break;

	        case 2:
	            this.state = 174;
	            this.gs1_prefix_bookland_2();
	            break;

	        }
	        this.state = 177;
	        this.bookland_isbn();
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



	bookland_isbn() {
	    let localctx = new Bookland_isbnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, gtinParser.RULE_bookland_isbn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 179;
	        this.any_digit();
	        this.state = 180;
	        this.any_digit();
	        this.state = 181;
	        this.any_digit();
	        this.state = 182;
	        this.any_digit();
	        this.state = 183;
	        this.any_digit();
	        this.state = 184;
	        this.any_digit();
	        this.state = 185;
	        this.any_digit();
	        this.state = 186;
	        this.any_digit();
	        this.state = 187;
	        this.any_digit();
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



	gs1_prefix_bookland_1() {
	    let localctx = new Gs1_prefix_bookland_1Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, gtinParser.RULE_gs1_prefix_bookland_1);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 189;
	        this.match(gtinParser.DIGIT_9);
	        this.state = 190;
	        this.match(gtinParser.DIGIT_7);
	        this.state = 191;
	        this.match(gtinParser.DIGIT_9);
	        this.state = 192;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gtinParser.DIGIT_1) | (1 << gtinParser.DIGIT_2) | (1 << gtinParser.DIGIT_3) | (1 << gtinParser.DIGIT_4) | (1 << gtinParser.DIGIT_5) | (1 << gtinParser.DIGIT_6) | (1 << gtinParser.DIGIT_7) | (1 << gtinParser.DIGIT_8) | (1 << gtinParser.DIGIT_9))) !== 0))) {
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



	gs1_prefix_bookland_2() {
	    let localctx = new Gs1_prefix_bookland_2Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, gtinParser.RULE_gs1_prefix_bookland_2);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 194;
	        this.match(gtinParser.DIGIT_9);
	        this.state = 195;
	        this.match(gtinParser.DIGIT_7);
	        this.state = 196;
	        this.match(gtinParser.DIGIT_8);
	        this.state = 197;
	        this.any_digit();
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



	gs1_prefix_issn() {
	    let localctx = new Gs1_prefix_issnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, gtinParser.RULE_gs1_prefix_issn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199;
	        this.match(gtinParser.DIGIT_9);
	        this.state = 200;
	        this.match(gtinParser.DIGIT_7);
	        this.state = 201;
	        this.match(gtinParser.DIGIT_7);
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



	ean13_issn() {
	    let localctx = new Ean13_issnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, gtinParser.RULE_ean13_issn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 203;
	        this.gs1_prefix_issn();
	        this.state = 204;
	        this.issn();
	        this.state = 205;
	        this.check_code();
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



	issn() {
	    let localctx = new IssnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, gtinParser.RULE_issn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 207;
	        this.any_digit();
	        this.state = 208;
	        this.any_digit();
	        this.state = 209;
	        this.any_digit();
	        this.state = 210;
	        this.any_digit();
	        this.state = 211;
	        this.any_digit();
	        this.state = 212;
	        this.any_digit();
	        this.state = 213;
	        this.any_digit();
	        this.state = 214;
	        this.any_digit();
	        this.state = 215;
	        this.any_digit();
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



	ean_13_manprod() {
	    let localctx = new Ean_13_manprodContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, gtinParser.RULE_ean_13_manprod);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
	        this.any_digit();
	        this.state = 218;
	        this.any_digit();
	        this.state = 219;
	        this.any_digit();
	        this.state = 220;
	        this.any_digit();
	        this.state = 221;
	        this.any_digit();
	        this.state = 222;
	        this.any_digit();
	        this.state = 223;
	        this.any_digit();
	        this.state = 224;
	        this.any_digit();
	        this.state = 225;
	        this.any_digit();
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



	gs1_prefix() {
	    let localctx = new Gs1_prefixContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, gtinParser.RULE_gs1_prefix);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 227;
	        this.any_digit();
	        this.state = 228;
	        this.any_digit();
	        this.state = 229;
	        this.any_digit();
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



	ean14() {
	    let localctx = new Ean14Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, gtinParser.RULE_ean14);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 231;
	        this.ean14_packaging();
	        this.state = 232;
	        this.ean14_product();
	        this.state = 233;
	        this.check_code();
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



	ean14_appid() {
	    let localctx = new Ean14_appidContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, gtinParser.RULE_ean14_appid);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 235;
	        this.any_digit();
	        this.state = 236;
	        this.any_digit();
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



	ean14_packaging() {
	    let localctx = new Ean14_packagingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, gtinParser.RULE_ean14_packaging);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gtinParser.DIGIT_0) | (1 << gtinParser.DIGIT_1) | (1 << gtinParser.DIGIT_2) | (1 << gtinParser.DIGIT_3) | (1 << gtinParser.DIGIT_4) | (1 << gtinParser.DIGIT_5) | (1 << gtinParser.DIGIT_6) | (1 << gtinParser.DIGIT_7) | (1 << gtinParser.DIGIT_8))) !== 0))) {
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



	ean14_product() {
	    let localctx = new Ean14_productContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, gtinParser.RULE_ean14_product);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 240;
	        this.any_digit();
	        this.state = 241;
	        this.any_digit();
	        this.state = 242;
	        this.any_digit();
	        this.state = 243;
	        this.any_digit();
	        this.state = 244;
	        this.any_digit();
	        this.state = 245;
	        this.any_digit();
	        this.state = 246;
	        this.any_digit();
	        this.state = 247;
	        this.any_digit();
	        this.state = 248;
	        this.any_digit();
	        this.state = 249;
	        this.any_digit();
	        this.state = 250;
	        this.any_digit();
	        this.state = 251;
	        this.any_digit();
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



	any_digit() {
	    let localctx = new Any_digitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, gtinParser.RULE_any_digit);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 253;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gtinParser.DIGIT_0) | (1 << gtinParser.DIGIT_1) | (1 << gtinParser.DIGIT_2) | (1 << gtinParser.DIGIT_3) | (1 << gtinParser.DIGIT_4) | (1 << gtinParser.DIGIT_5) | (1 << gtinParser.DIGIT_6) | (1 << gtinParser.DIGIT_7) | (1 << gtinParser.DIGIT_8) | (1 << gtinParser.DIGIT_9))) !== 0))) {
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

gtinParser.EOF = antlr4.Token.EOF;
gtinParser.DIGIT_0 = 1;
gtinParser.DIGIT_1 = 2;
gtinParser.DIGIT_2 = 3;
gtinParser.DIGIT_3 = 4;
gtinParser.DIGIT_4 = 5;
gtinParser.DIGIT_5 = 6;
gtinParser.DIGIT_6 = 7;
gtinParser.DIGIT_7 = 8;
gtinParser.DIGIT_8 = 9;
gtinParser.DIGIT_9 = 10;
gtinParser.HYPHEN = 11;
gtinParser.WS = 12;

gtinParser.RULE_gtin = 0;
gtinParser.RULE_gtin8 = 1;
gtinParser.RULE_ean8 = 2;
gtinParser.RULE_gtin12 = 3;
gtinParser.RULE_gtin13 = 4;
gtinParser.RULE_gtin14 = 5;
gtinParser.RULE_upc = 6;
gtinParser.RULE_upc_a = 7;
gtinParser.RULE_upc_a_manufacturer = 8;
gtinParser.RULE_upc_a_product = 9;
gtinParser.RULE_upc_a_5 = 10;
gtinParser.RULE_upc_e = 11;
gtinParser.RULE_num_system = 12;
gtinParser.RULE_check_code = 13;
gtinParser.RULE_supplemental_code = 14;
gtinParser.RULE_supplemental_code_5 = 15;
gtinParser.RULE_supplemental_code_2 = 16;
gtinParser.RULE_ean13 = 17;
gtinParser.RULE_ean13_generic = 18;
gtinParser.RULE_ean13_ismn = 19;
gtinParser.RULE_gs1_prefix_ismn = 20;
gtinParser.RULE_ismn_publisher_number = 21;
gtinParser.RULE_ismn_item_number = 22;
gtinParser.RULE_ean13_bookland = 23;
gtinParser.RULE_bookland_isbn = 24;
gtinParser.RULE_gs1_prefix_bookland_1 = 25;
gtinParser.RULE_gs1_prefix_bookland_2 = 26;
gtinParser.RULE_gs1_prefix_issn = 27;
gtinParser.RULE_ean13_issn = 28;
gtinParser.RULE_issn = 29;
gtinParser.RULE_ean_13_manprod = 30;
gtinParser.RULE_gs1_prefix = 31;
gtinParser.RULE_ean14 = 32;
gtinParser.RULE_ean14_appid = 33;
gtinParser.RULE_ean14_packaging = 34;
gtinParser.RULE_ean14_product = 35;
gtinParser.RULE_any_digit = 36;

class GtinContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_gtin;
    }

	EOF() {
	    return this.getToken(gtinParser.EOF, 0);
	};

	gtin8() {
	    return this.getTypedRuleContext(Gtin8Context,0);
	};

	gtin12() {
	    return this.getTypedRuleContext(Gtin12Context,0);
	};

	gtin13() {
	    return this.getTypedRuleContext(Gtin13Context,0);
	};

	gtin14() {
	    return this.getTypedRuleContext(Gtin14Context,0);
	};

	supplemental_code() {
	    return this.getTypedRuleContext(Supplemental_codeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterGtin(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitGtin(this);
		}
	}


}



class Gtin8Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_gtin8;
    }

	ean8() {
	    return this.getTypedRuleContext(Ean8Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterGtin8(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitGtin8(this);
		}
	}


}



class Ean8Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_ean8;
    }

	any_digit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Any_digitContext);
	    } else {
	        return this.getTypedRuleContext(Any_digitContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterEan8(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitEan8(this);
		}
	}


}



class Gtin12Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_gtin12;
    }

	upc() {
	    return this.getTypedRuleContext(UpcContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterGtin12(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitGtin12(this);
		}
	}


}



class Gtin13Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_gtin13;
    }

	ean13() {
	    return this.getTypedRuleContext(Ean13Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterGtin13(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitGtin13(this);
		}
	}


}



class Gtin14Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_gtin14;
    }

	ean14() {
	    return this.getTypedRuleContext(Ean14Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterGtin14(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitGtin14(this);
		}
	}


}



class UpcContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_upc;
    }

	upc_a() {
	    return this.getTypedRuleContext(Upc_aContext,0);
	};

	upc_e() {
	    return this.getTypedRuleContext(Upc_eContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterUpc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitUpc(this);
		}
	}


}



class Upc_aContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_upc_a;
    }

	num_system() {
	    return this.getTypedRuleContext(Num_systemContext,0);
	};

	upc_a_manufacturer() {
	    return this.getTypedRuleContext(Upc_a_manufacturerContext,0);
	};

	upc_a_product() {
	    return this.getTypedRuleContext(Upc_a_productContext,0);
	};

	check_code() {
	    return this.getTypedRuleContext(Check_codeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterUpc_a(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitUpc_a(this);
		}
	}


}



class Upc_a_manufacturerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_upc_a_manufacturer;
    }

	upc_a_5() {
	    return this.getTypedRuleContext(Upc_a_5Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterUpc_a_manufacturer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitUpc_a_manufacturer(this);
		}
	}


}



class Upc_a_productContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_upc_a_product;
    }

	upc_a_5() {
	    return this.getTypedRuleContext(Upc_a_5Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterUpc_a_product(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitUpc_a_product(this);
		}
	}


}



class Upc_a_5Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_upc_a_5;
    }

	any_digit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Any_digitContext);
	    } else {
	        return this.getTypedRuleContext(Any_digitContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterUpc_a_5(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitUpc_a_5(this);
		}
	}


}



class Upc_eContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_upc_e;
    }

	any_digit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Any_digitContext);
	    } else {
	        return this.getTypedRuleContext(Any_digitContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterUpc_e(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitUpc_e(this);
		}
	}


}



class Num_systemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_num_system;
    }

	any_digit() {
	    return this.getTypedRuleContext(Any_digitContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterNum_system(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitNum_system(this);
		}
	}


}



class Check_codeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_check_code;
    }

	any_digit() {
	    return this.getTypedRuleContext(Any_digitContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterCheck_code(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitCheck_code(this);
		}
	}


}



class Supplemental_codeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_supplemental_code;
    }

	supplemental_code_5() {
	    return this.getTypedRuleContext(Supplemental_code_5Context,0);
	};

	supplemental_code_2() {
	    return this.getTypedRuleContext(Supplemental_code_2Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterSupplemental_code(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitSupplemental_code(this);
		}
	}


}



class Supplemental_code_5Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_supplemental_code_5;
    }

	any_digit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Any_digitContext);
	    } else {
	        return this.getTypedRuleContext(Any_digitContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterSupplemental_code_5(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitSupplemental_code_5(this);
		}
	}


}



class Supplemental_code_2Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_supplemental_code_2;
    }

	any_digit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Any_digitContext);
	    } else {
	        return this.getTypedRuleContext(Any_digitContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterSupplemental_code_2(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitSupplemental_code_2(this);
		}
	}


}



class Ean13Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_ean13;
    }

	ean13_ismn() {
	    return this.getTypedRuleContext(Ean13_ismnContext,0);
	};

	ean13_issn() {
	    return this.getTypedRuleContext(Ean13_issnContext,0);
	};

	ean13_bookland() {
	    return this.getTypedRuleContext(Ean13_booklandContext,0);
	};

	ean13_generic() {
	    return this.getTypedRuleContext(Ean13_genericContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterEan13(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitEan13(this);
		}
	}


}



class Ean13_genericContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_ean13_generic;
    }

	gs1_prefix() {
	    return this.getTypedRuleContext(Gs1_prefixContext,0);
	};

	ean_13_manprod() {
	    return this.getTypedRuleContext(Ean_13_manprodContext,0);
	};

	check_code() {
	    return this.getTypedRuleContext(Check_codeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterEan13_generic(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitEan13_generic(this);
		}
	}


}



class Ean13_ismnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_ean13_ismn;
    }

	gs1_prefix_ismn() {
	    return this.getTypedRuleContext(Gs1_prefix_ismnContext,0);
	};

	ismn_publisher_number() {
	    return this.getTypedRuleContext(Ismn_publisher_numberContext,0);
	};

	ismn_item_number() {
	    return this.getTypedRuleContext(Ismn_item_numberContext,0);
	};

	check_code() {
	    return this.getTypedRuleContext(Check_codeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterEan13_ismn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitEan13_ismn(this);
		}
	}


}



class Gs1_prefix_ismnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_gs1_prefix_ismn;
    }

	DIGIT_9 = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(gtinParser.DIGIT_9);
	    } else {
	        return this.getToken(gtinParser.DIGIT_9, i);
	    }
	};


	DIGIT_7() {
	    return this.getToken(gtinParser.DIGIT_7, 0);
	};

	DIGIT_0() {
	    return this.getToken(gtinParser.DIGIT_0, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterGs1_prefix_ismn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitGs1_prefix_ismn(this);
		}
	}


}



class Ismn_publisher_numberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_ismn_publisher_number;
    }

	any_digit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Any_digitContext);
	    } else {
	        return this.getTypedRuleContext(Any_digitContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterIsmn_publisher_number(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitIsmn_publisher_number(this);
		}
	}


}



class Ismn_item_numberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_ismn_item_number;
    }

	any_digit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Any_digitContext);
	    } else {
	        return this.getTypedRuleContext(Any_digitContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterIsmn_item_number(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitIsmn_item_number(this);
		}
	}


}



class Ean13_booklandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_ean13_bookland;
    }

	bookland_isbn() {
	    return this.getTypedRuleContext(Bookland_isbnContext,0);
	};

	gs1_prefix_bookland_1() {
	    return this.getTypedRuleContext(Gs1_prefix_bookland_1Context,0);
	};

	gs1_prefix_bookland_2() {
	    return this.getTypedRuleContext(Gs1_prefix_bookland_2Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterEan13_bookland(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitEan13_bookland(this);
		}
	}


}



class Bookland_isbnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_bookland_isbn;
    }

	any_digit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Any_digitContext);
	    } else {
	        return this.getTypedRuleContext(Any_digitContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterBookland_isbn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitBookland_isbn(this);
		}
	}


}



class Gs1_prefix_bookland_1Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_gs1_prefix_bookland_1;
    }

	DIGIT_9 = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(gtinParser.DIGIT_9);
	    } else {
	        return this.getToken(gtinParser.DIGIT_9, i);
	    }
	};


	DIGIT_7 = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(gtinParser.DIGIT_7);
	    } else {
	        return this.getToken(gtinParser.DIGIT_7, i);
	    }
	};


	DIGIT_1() {
	    return this.getToken(gtinParser.DIGIT_1, 0);
	};

	DIGIT_2() {
	    return this.getToken(gtinParser.DIGIT_2, 0);
	};

	DIGIT_3() {
	    return this.getToken(gtinParser.DIGIT_3, 0);
	};

	DIGIT_4() {
	    return this.getToken(gtinParser.DIGIT_4, 0);
	};

	DIGIT_5() {
	    return this.getToken(gtinParser.DIGIT_5, 0);
	};

	DIGIT_6() {
	    return this.getToken(gtinParser.DIGIT_6, 0);
	};

	DIGIT_8() {
	    return this.getToken(gtinParser.DIGIT_8, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterGs1_prefix_bookland_1(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitGs1_prefix_bookland_1(this);
		}
	}


}



class Gs1_prefix_bookland_2Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_gs1_prefix_bookland_2;
    }

	DIGIT_9() {
	    return this.getToken(gtinParser.DIGIT_9, 0);
	};

	DIGIT_7() {
	    return this.getToken(gtinParser.DIGIT_7, 0);
	};

	DIGIT_8() {
	    return this.getToken(gtinParser.DIGIT_8, 0);
	};

	any_digit() {
	    return this.getTypedRuleContext(Any_digitContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterGs1_prefix_bookland_2(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitGs1_prefix_bookland_2(this);
		}
	}


}



class Gs1_prefix_issnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_gs1_prefix_issn;
    }

	DIGIT_9() {
	    return this.getToken(gtinParser.DIGIT_9, 0);
	};

	DIGIT_7 = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(gtinParser.DIGIT_7);
	    } else {
	        return this.getToken(gtinParser.DIGIT_7, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterGs1_prefix_issn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitGs1_prefix_issn(this);
		}
	}


}



class Ean13_issnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_ean13_issn;
    }

	gs1_prefix_issn() {
	    return this.getTypedRuleContext(Gs1_prefix_issnContext,0);
	};

	issn() {
	    return this.getTypedRuleContext(IssnContext,0);
	};

	check_code() {
	    return this.getTypedRuleContext(Check_codeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterEan13_issn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitEan13_issn(this);
		}
	}


}



class IssnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_issn;
    }

	any_digit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Any_digitContext);
	    } else {
	        return this.getTypedRuleContext(Any_digitContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterIssn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitIssn(this);
		}
	}


}



class Ean_13_manprodContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_ean_13_manprod;
    }

	any_digit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Any_digitContext);
	    } else {
	        return this.getTypedRuleContext(Any_digitContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterEan_13_manprod(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitEan_13_manprod(this);
		}
	}


}



class Gs1_prefixContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_gs1_prefix;
    }

	any_digit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Any_digitContext);
	    } else {
	        return this.getTypedRuleContext(Any_digitContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterGs1_prefix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitGs1_prefix(this);
		}
	}


}



class Ean14Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_ean14;
    }

	ean14_packaging() {
	    return this.getTypedRuleContext(Ean14_packagingContext,0);
	};

	ean14_product() {
	    return this.getTypedRuleContext(Ean14_productContext,0);
	};

	check_code() {
	    return this.getTypedRuleContext(Check_codeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterEan14(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitEan14(this);
		}
	}


}



class Ean14_appidContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_ean14_appid;
    }

	any_digit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Any_digitContext);
	    } else {
	        return this.getTypedRuleContext(Any_digitContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterEan14_appid(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitEan14_appid(this);
		}
	}


}



class Ean14_packagingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_ean14_packaging;
    }

	DIGIT_0() {
	    return this.getToken(gtinParser.DIGIT_0, 0);
	};

	DIGIT_1() {
	    return this.getToken(gtinParser.DIGIT_1, 0);
	};

	DIGIT_2() {
	    return this.getToken(gtinParser.DIGIT_2, 0);
	};

	DIGIT_3() {
	    return this.getToken(gtinParser.DIGIT_3, 0);
	};

	DIGIT_4() {
	    return this.getToken(gtinParser.DIGIT_4, 0);
	};

	DIGIT_5() {
	    return this.getToken(gtinParser.DIGIT_5, 0);
	};

	DIGIT_6() {
	    return this.getToken(gtinParser.DIGIT_6, 0);
	};

	DIGIT_7() {
	    return this.getToken(gtinParser.DIGIT_7, 0);
	};

	DIGIT_8() {
	    return this.getToken(gtinParser.DIGIT_8, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterEan14_packaging(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitEan14_packaging(this);
		}
	}


}



class Ean14_productContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_ean14_product;
    }

	any_digit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Any_digitContext);
	    } else {
	        return this.getTypedRuleContext(Any_digitContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterEan14_product(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitEan14_product(this);
		}
	}


}



class Any_digitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gtinParser.RULE_any_digit;
    }

	DIGIT_0() {
	    return this.getToken(gtinParser.DIGIT_0, 0);
	};

	DIGIT_1() {
	    return this.getToken(gtinParser.DIGIT_1, 0);
	};

	DIGIT_2() {
	    return this.getToken(gtinParser.DIGIT_2, 0);
	};

	DIGIT_3() {
	    return this.getToken(gtinParser.DIGIT_3, 0);
	};

	DIGIT_4() {
	    return this.getToken(gtinParser.DIGIT_4, 0);
	};

	DIGIT_5() {
	    return this.getToken(gtinParser.DIGIT_5, 0);
	};

	DIGIT_6() {
	    return this.getToken(gtinParser.DIGIT_6, 0);
	};

	DIGIT_7() {
	    return this.getToken(gtinParser.DIGIT_7, 0);
	};

	DIGIT_8() {
	    return this.getToken(gtinParser.DIGIT_8, 0);
	};

	DIGIT_9() {
	    return this.getToken(gtinParser.DIGIT_9, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.enterAny_digit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gtinListener ) {
	        listener.exitAny_digit(this);
		}
	}


}




gtinParser.GtinContext = GtinContext; 
gtinParser.Gtin8Context = Gtin8Context; 
gtinParser.Ean8Context = Ean8Context; 
gtinParser.Gtin12Context = Gtin12Context; 
gtinParser.Gtin13Context = Gtin13Context; 
gtinParser.Gtin14Context = Gtin14Context; 
gtinParser.UpcContext = UpcContext; 
gtinParser.Upc_aContext = Upc_aContext; 
gtinParser.Upc_a_manufacturerContext = Upc_a_manufacturerContext; 
gtinParser.Upc_a_productContext = Upc_a_productContext; 
gtinParser.Upc_a_5Context = Upc_a_5Context; 
gtinParser.Upc_eContext = Upc_eContext; 
gtinParser.Num_systemContext = Num_systemContext; 
gtinParser.Check_codeContext = Check_codeContext; 
gtinParser.Supplemental_codeContext = Supplemental_codeContext; 
gtinParser.Supplemental_code_5Context = Supplemental_code_5Context; 
gtinParser.Supplemental_code_2Context = Supplemental_code_2Context; 
gtinParser.Ean13Context = Ean13Context; 
gtinParser.Ean13_genericContext = Ean13_genericContext; 
gtinParser.Ean13_ismnContext = Ean13_ismnContext; 
gtinParser.Gs1_prefix_ismnContext = Gs1_prefix_ismnContext; 
gtinParser.Ismn_publisher_numberContext = Ismn_publisher_numberContext; 
gtinParser.Ismn_item_numberContext = Ismn_item_numberContext; 
gtinParser.Ean13_booklandContext = Ean13_booklandContext; 
gtinParser.Bookland_isbnContext = Bookland_isbnContext; 
gtinParser.Gs1_prefix_bookland_1Context = Gs1_prefix_bookland_1Context; 
gtinParser.Gs1_prefix_bookland_2Context = Gs1_prefix_bookland_2Context; 
gtinParser.Gs1_prefix_issnContext = Gs1_prefix_issnContext; 
gtinParser.Ean13_issnContext = Ean13_issnContext; 
gtinParser.IssnContext = IssnContext; 
gtinParser.Ean_13_manprodContext = Ean_13_manprodContext; 
gtinParser.Gs1_prefixContext = Gs1_prefixContext; 
gtinParser.Ean14Context = Ean14Context; 
gtinParser.Ean14_appidContext = Ean14_appidContext; 
gtinParser.Ean14_packagingContext = Ean14_packagingContext; 
gtinParser.Ean14_productContext = Ean14_productContext; 
gtinParser.Any_digitContext = Any_digitContext; 
