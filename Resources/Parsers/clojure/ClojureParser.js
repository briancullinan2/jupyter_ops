// Generated from ./clojure/Clojure.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ClojureListener from './ClojureListener.js';
const serializedATN = [4,1,35,256,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,1,0,5,0,82,8,0,10,0,
12,0,85,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,3,1,94,8,1,1,2,5,2,97,8,2,10,2,12,
2,100,9,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,5,5,114,8,5,10,
5,12,5,117,9,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,140,8,7,1,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,
1,10,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,14,1,14,1,14,1,
15,1,15,5,15,166,8,15,10,15,12,15,169,9,15,1,15,1,15,1,16,1,16,1,16,1,16,
1,16,3,16,178,8,16,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,20,
1,20,1,20,1,20,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,3,
22,205,8,22,1,23,1,23,1,24,1,24,1,25,1,25,1,26,1,26,1,27,1,27,1,27,1,27,
1,27,3,27,220,8,27,1,28,1,28,1,28,3,28,225,8,28,1,29,1,29,1,30,1,30,1,31,
1,31,1,32,1,32,1,33,1,33,3,33,237,8,33,1,34,1,34,1,34,1,35,1,35,1,35,1,35,
1,36,1,36,3,36,248,8,36,1,37,1,37,1,38,1,38,1,39,1,39,1,39,0,0,40,0,2,4,
6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,
56,58,60,62,64,66,68,70,72,74,76,78,0,0,253,0,83,1,0,0,0,2,93,1,0,0,0,4,
98,1,0,0,0,6,101,1,0,0,0,8,105,1,0,0,0,10,109,1,0,0,0,12,120,1,0,0,0,14,
139,1,0,0,0,16,141,1,0,0,0,18,144,1,0,0,0,20,147,1,0,0,0,22,150,1,0,0,0,
24,153,1,0,0,0,26,157,1,0,0,0,28,160,1,0,0,0,30,163,1,0,0,0,32,172,1,0,0,
0,34,179,1,0,0,0,36,182,1,0,0,0,38,186,1,0,0,0,40,189,1,0,0,0,42,193,1,0,
0,0,44,204,1,0,0,0,46,206,1,0,0,0,48,208,1,0,0,0,50,210,1,0,0,0,52,212,1,
0,0,0,54,219,1,0,0,0,56,224,1,0,0,0,58,226,1,0,0,0,60,228,1,0,0,0,62,230,
1,0,0,0,64,232,1,0,0,0,66,236,1,0,0,0,68,238,1,0,0,0,70,241,1,0,0,0,72,247,
1,0,0,0,74,249,1,0,0,0,76,251,1,0,0,0,78,253,1,0,0,0,80,82,3,2,1,0,81,80,
1,0,0,0,82,85,1,0,0,0,83,81,1,0,0,0,83,84,1,0,0,0,84,86,1,0,0,0,85,83,1,
0,0,0,86,87,5,0,0,1,87,1,1,0,0,0,88,94,3,44,22,0,89,94,3,6,3,0,90,94,3,8,
4,0,91,94,3,10,5,0,92,94,3,14,7,0,93,88,1,0,0,0,93,89,1,0,0,0,93,90,1,0,
0,0,93,91,1,0,0,0,93,92,1,0,0,0,94,3,1,0,0,0,95,97,3,2,1,0,96,95,1,0,0,0,
97,100,1,0,0,0,98,96,1,0,0,0,98,99,1,0,0,0,99,5,1,0,0,0,100,98,1,0,0,0,101,
102,5,1,0,0,102,103,3,4,2,0,103,104,5,2,0,0,104,7,1,0,0,0,105,106,5,3,0,
0,106,107,3,4,2,0,107,108,5,4,0,0,108,9,1,0,0,0,109,115,5,5,0,0,110,111,
3,2,1,0,111,112,3,2,1,0,112,114,1,0,0,0,113,110,1,0,0,0,114,117,1,0,0,0,
115,113,1,0,0,0,115,116,1,0,0,0,116,118,1,0,0,0,117,115,1,0,0,0,118,119,
5,6,0,0,119,11,1,0,0,0,120,121,5,7,0,0,121,122,3,4,2,0,122,123,5,6,0,0,123,
13,1,0,0,0,124,140,3,30,15,0,125,140,3,32,16,0,126,140,3,42,21,0,127,140,
3,34,17,0,128,140,3,36,18,0,129,140,3,12,6,0,130,140,3,24,12,0,131,140,3,
38,19,0,132,140,3,40,20,0,133,140,3,26,13,0,134,140,3,16,8,0,135,140,3,18,
9,0,136,140,3,20,10,0,137,140,3,22,11,0,138,140,3,28,14,0,139,124,1,0,0,
0,139,125,1,0,0,0,139,126,1,0,0,0,139,127,1,0,0,0,139,128,1,0,0,0,139,129,
1,0,0,0,139,130,1,0,0,0,139,131,1,0,0,0,139,132,1,0,0,0,139,133,1,0,0,0,
139,134,1,0,0,0,139,135,1,0,0,0,139,136,1,0,0,0,139,137,1,0,0,0,139,138,
1,0,0,0,140,15,1,0,0,0,141,142,5,8,0,0,142,143,3,2,1,0,143,17,1,0,0,0,144,
145,5,9,0,0,145,146,3,2,1,0,146,19,1,0,0,0,147,148,5,10,0,0,148,149,3,2,
1,0,149,21,1,0,0,0,150,151,5,11,0,0,151,152,3,2,1,0,152,23,1,0,0,0,153,154,
5,12,0,0,154,155,3,2,1,0,155,156,3,2,1,0,156,25,1,0,0,0,157,158,5,13,0,0,
158,159,3,2,1,0,159,27,1,0,0,0,160,161,5,32,0,0,161,162,5,14,0,0,162,29,
1,0,0,0,163,167,5,15,0,0,164,166,3,2,1,0,165,164,1,0,0,0,166,169,1,0,0,0,
167,165,1,0,0,0,167,168,1,0,0,0,168,170,1,0,0,0,169,167,1,0,0,0,170,171,
5,2,0,0,171,31,1,0,0,0,172,177,5,16,0,0,173,174,3,10,5,0,174,175,3,2,1,0,
175,178,1,0,0,0,176,178,3,2,1,0,177,173,1,0,0,0,177,176,1,0,0,0,178,33,1,
0,0,0,179,180,5,17,0,0,180,181,3,72,36,0,181,35,1,0,0,0,182,183,5,18,0,0,
183,184,3,2,1,0,184,185,3,2,1,0,185,37,1,0,0,0,186,187,5,19,0,0,187,188,
3,2,1,0,188,39,1,0,0,0,189,190,5,14,0,0,190,191,3,72,36,0,191,192,3,2,1,
0,192,41,1,0,0,0,193,194,5,14,0,0,194,195,3,46,23,0,195,43,1,0,0,0,196,205,
3,46,23,0,197,205,3,54,27,0,198,205,3,56,28,0,199,205,3,64,32,0,200,205,
5,31,0,0,201,205,3,66,33,0,202,205,3,72,36,0,203,205,3,78,39,0,204,196,1,
0,0,0,204,197,1,0,0,0,204,198,1,0,0,0,204,199,1,0,0,0,204,200,1,0,0,0,204,
201,1,0,0,0,204,202,1,0,0,0,204,203,1,0,0,0,205,45,1,0,0,0,206,207,5,21,
0,0,207,47,1,0,0,0,208,209,5,23,0,0,209,49,1,0,0,0,210,211,5,24,0,0,211,
51,1,0,0,0,212,213,5,26,0,0,213,53,1,0,0,0,214,220,5,22,0,0,215,220,3,48,
24,0,216,220,3,50,25,0,217,220,3,52,26,0,218,220,5,25,0,0,219,214,1,0,0,
0,219,215,1,0,0,0,219,216,1,0,0,0,219,217,1,0,0,0,219,218,1,0,0,0,220,55,
1,0,0,0,221,225,3,58,29,0,222,225,3,62,31,0,223,225,3,60,30,0,224,221,1,
0,0,0,224,222,1,0,0,0,224,223,1,0,0,0,225,57,1,0,0,0,226,227,5,28,0,0,227,
59,1,0,0,0,228,229,5,29,0,0,229,61,1,0,0,0,230,231,5,27,0,0,231,63,1,0,0,
0,232,233,5,30,0,0,233,65,1,0,0,0,234,237,3,70,35,0,235,237,3,68,34,0,236,
234,1,0,0,0,236,235,1,0,0,0,237,67,1,0,0,0,238,239,5,20,0,0,239,240,3,72,
36,0,240,69,1,0,0,0,241,242,5,20,0,0,242,243,5,20,0,0,243,244,3,72,36,0,
244,71,1,0,0,0,245,248,3,76,38,0,246,248,3,74,37,0,247,245,1,0,0,0,247,246,
1,0,0,0,248,73,1,0,0,0,249,250,5,32,0,0,250,75,1,0,0,0,251,252,5,33,0,0,
252,77,1,0,0,0,253,254,5,34,0,0,254,79,1,0,0,0,12,83,93,98,115,139,167,177,
204,219,224,236,247];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ClojureParser extends antlr4.Parser {

    static grammarFileName = "Clojure.g4";
    static literalNames = [ null, "'('", "')'", "'['", "']'", "'{'", "'}'", 
                            "'#{'", "'''", "'`'", "'~'", "'~@'", "'^'", 
                            "'@'", "'#'", "'#('", "'#^'", "'#''", "'#+'", 
                            "'#_'", "':'", null, null, null, null, null, 
                            null, null, null, null, "'nil'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "STRING", "FLOAT", 
                             "HEX", "BIN", "LONG", "BIGN", "CHAR_U", "CHAR_NAMED", 
                             "CHAR_ANY", "NIL", "BOOLEAN", "SYMBOL", "NS_SYMBOL", 
                             "PARAM_NAME", "TRASH" ];
    static ruleNames = [ "file_", "form", "forms", "list_", "vector", "map_", 
                         "set_", "reader_macro", "quote", "backtick", "unquote", 
                         "unquote_splicing", "tag", "deref", "gensym", "lambda_", 
                         "meta_data", "var_quote", "host_expr", "discard", 
                         "dispatch", "regex", "literal", "string_", "hex_", 
                         "bin_", "bign", "number", "character", "named_char", 
                         "any_char", "u_hex_quad", "nil_", "keyword", "simple_keyword", 
                         "macro_keyword", "symbol", "simple_sym", "ns_symbol", 
                         "param_name" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ClojureParser.ruleNames;
        this.literalNames = ClojureParser.literalNames;
        this.symbolicNames = ClojureParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	file_() {
	    let localctx = new File_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ClojureParser.RULE_file_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ClojureParser.T__0) | (1 << ClojureParser.T__2) | (1 << ClojureParser.T__4) | (1 << ClojureParser.T__6) | (1 << ClojureParser.T__7) | (1 << ClojureParser.T__8) | (1 << ClojureParser.T__9) | (1 << ClojureParser.T__10) | (1 << ClojureParser.T__11) | (1 << ClojureParser.T__12) | (1 << ClojureParser.T__13) | (1 << ClojureParser.T__14) | (1 << ClojureParser.T__15) | (1 << ClojureParser.T__16) | (1 << ClojureParser.T__17) | (1 << ClojureParser.T__18) | (1 << ClojureParser.T__19) | (1 << ClojureParser.STRING) | (1 << ClojureParser.FLOAT) | (1 << ClojureParser.HEX) | (1 << ClojureParser.BIN) | (1 << ClojureParser.LONG) | (1 << ClojureParser.BIGN) | (1 << ClojureParser.CHAR_U) | (1 << ClojureParser.CHAR_NAMED) | (1 << ClojureParser.CHAR_ANY) | (1 << ClojureParser.NIL) | (1 << ClojureParser.BOOLEAN))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (ClojureParser.SYMBOL - 32)) | (1 << (ClojureParser.NS_SYMBOL - 32)) | (1 << (ClojureParser.PARAM_NAME - 32)))) !== 0)) {
	            this.state = 80;
	            this.form();
	            this.state = 85;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 86;
	        this.match(ClojureParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	form() {
	    let localctx = new FormContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ClojureParser.RULE_form);
	    try {
	        this.state = 93;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 88;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 89;
	            this.list_();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 90;
	            this.vector();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 91;
	            this.map_();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 92;
	            this.reader_macro();
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



	forms() {
	    let localctx = new FormsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ClojureParser.RULE_forms);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ClojureParser.T__0) | (1 << ClojureParser.T__2) | (1 << ClojureParser.T__4) | (1 << ClojureParser.T__6) | (1 << ClojureParser.T__7) | (1 << ClojureParser.T__8) | (1 << ClojureParser.T__9) | (1 << ClojureParser.T__10) | (1 << ClojureParser.T__11) | (1 << ClojureParser.T__12) | (1 << ClojureParser.T__13) | (1 << ClojureParser.T__14) | (1 << ClojureParser.T__15) | (1 << ClojureParser.T__16) | (1 << ClojureParser.T__17) | (1 << ClojureParser.T__18) | (1 << ClojureParser.T__19) | (1 << ClojureParser.STRING) | (1 << ClojureParser.FLOAT) | (1 << ClojureParser.HEX) | (1 << ClojureParser.BIN) | (1 << ClojureParser.LONG) | (1 << ClojureParser.BIGN) | (1 << ClojureParser.CHAR_U) | (1 << ClojureParser.CHAR_NAMED) | (1 << ClojureParser.CHAR_ANY) | (1 << ClojureParser.NIL) | (1 << ClojureParser.BOOLEAN))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (ClojureParser.SYMBOL - 32)) | (1 << (ClojureParser.NS_SYMBOL - 32)) | (1 << (ClojureParser.PARAM_NAME - 32)))) !== 0)) {
	            this.state = 95;
	            this.form();
	            this.state = 100;
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



	list_() {
	    let localctx = new List_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ClojureParser.RULE_list_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.match(ClojureParser.T__0);
	        this.state = 102;
	        this.forms();
	        this.state = 103;
	        this.match(ClojureParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	vector() {
	    let localctx = new VectorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ClojureParser.RULE_vector);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this.match(ClojureParser.T__2);
	        this.state = 106;
	        this.forms();
	        this.state = 107;
	        this.match(ClojureParser.T__3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	map_() {
	    let localctx = new Map_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ClojureParser.RULE_map_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        this.match(ClojureParser.T__4);
	        this.state = 115;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ClojureParser.T__0) | (1 << ClojureParser.T__2) | (1 << ClojureParser.T__4) | (1 << ClojureParser.T__6) | (1 << ClojureParser.T__7) | (1 << ClojureParser.T__8) | (1 << ClojureParser.T__9) | (1 << ClojureParser.T__10) | (1 << ClojureParser.T__11) | (1 << ClojureParser.T__12) | (1 << ClojureParser.T__13) | (1 << ClojureParser.T__14) | (1 << ClojureParser.T__15) | (1 << ClojureParser.T__16) | (1 << ClojureParser.T__17) | (1 << ClojureParser.T__18) | (1 << ClojureParser.T__19) | (1 << ClojureParser.STRING) | (1 << ClojureParser.FLOAT) | (1 << ClojureParser.HEX) | (1 << ClojureParser.BIN) | (1 << ClojureParser.LONG) | (1 << ClojureParser.BIGN) | (1 << ClojureParser.CHAR_U) | (1 << ClojureParser.CHAR_NAMED) | (1 << ClojureParser.CHAR_ANY) | (1 << ClojureParser.NIL) | (1 << ClojureParser.BOOLEAN))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (ClojureParser.SYMBOL - 32)) | (1 << (ClojureParser.NS_SYMBOL - 32)) | (1 << (ClojureParser.PARAM_NAME - 32)))) !== 0)) {
	            this.state = 110;
	            this.form();
	            this.state = 111;
	            this.form();
	            this.state = 117;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 118;
	        this.match(ClojureParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	set_() {
	    let localctx = new Set_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ClojureParser.RULE_set_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.match(ClojureParser.T__6);
	        this.state = 121;
	        this.forms();
	        this.state = 122;
	        this.match(ClojureParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	reader_macro() {
	    let localctx = new Reader_macroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ClojureParser.RULE_reader_macro);
	    try {
	        this.state = 139;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 124;
	            this.lambda_();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 125;
	            this.meta_data();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 126;
	            this.regex();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 127;
	            this.var_quote();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 128;
	            this.host_expr();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 129;
	            this.set_();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 130;
	            this.tag();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 131;
	            this.discard();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 132;
	            this.dispatch();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 133;
	            this.deref();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 134;
	            this.quote();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 135;
	            this.backtick();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 136;
	            this.unquote();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 137;
	            this.unquote_splicing();
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 138;
	            this.gensym();
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



	quote() {
	    let localctx = new QuoteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, ClojureParser.RULE_quote);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141;
	        this.match(ClojureParser.T__7);
	        this.state = 142;
	        this.form();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	backtick() {
	    let localctx = new BacktickContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, ClojureParser.RULE_backtick);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        this.match(ClojureParser.T__8);
	        this.state = 145;
	        this.form();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unquote() {
	    let localctx = new UnquoteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, ClojureParser.RULE_unquote);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        this.match(ClojureParser.T__9);
	        this.state = 148;
	        this.form();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unquote_splicing() {
	    let localctx = new Unquote_splicingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, ClojureParser.RULE_unquote_splicing);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 150;
	        this.match(ClojureParser.T__10);
	        this.state = 151;
	        this.form();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tag() {
	    let localctx = new TagContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, ClojureParser.RULE_tag);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        this.match(ClojureParser.T__11);
	        this.state = 154;
	        this.form();
	        this.state = 155;
	        this.form();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	deref() {
	    let localctx = new DerefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, ClojureParser.RULE_deref);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this.match(ClojureParser.T__12);
	        this.state = 158;
	        this.form();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	gensym() {
	    let localctx = new GensymContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, ClojureParser.RULE_gensym);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
	        this.match(ClojureParser.SYMBOL);
	        this.state = 161;
	        this.match(ClojureParser.T__13);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lambda_() {
	    let localctx = new Lambda_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, ClojureParser.RULE_lambda_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 163;
	        this.match(ClojureParser.T__14);
	        this.state = 167;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ClojureParser.T__0) | (1 << ClojureParser.T__2) | (1 << ClojureParser.T__4) | (1 << ClojureParser.T__6) | (1 << ClojureParser.T__7) | (1 << ClojureParser.T__8) | (1 << ClojureParser.T__9) | (1 << ClojureParser.T__10) | (1 << ClojureParser.T__11) | (1 << ClojureParser.T__12) | (1 << ClojureParser.T__13) | (1 << ClojureParser.T__14) | (1 << ClojureParser.T__15) | (1 << ClojureParser.T__16) | (1 << ClojureParser.T__17) | (1 << ClojureParser.T__18) | (1 << ClojureParser.T__19) | (1 << ClojureParser.STRING) | (1 << ClojureParser.FLOAT) | (1 << ClojureParser.HEX) | (1 << ClojureParser.BIN) | (1 << ClojureParser.LONG) | (1 << ClojureParser.BIGN) | (1 << ClojureParser.CHAR_U) | (1 << ClojureParser.CHAR_NAMED) | (1 << ClojureParser.CHAR_ANY) | (1 << ClojureParser.NIL) | (1 << ClojureParser.BOOLEAN))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (ClojureParser.SYMBOL - 32)) | (1 << (ClojureParser.NS_SYMBOL - 32)) | (1 << (ClojureParser.PARAM_NAME - 32)))) !== 0)) {
	            this.state = 164;
	            this.form();
	            this.state = 169;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 170;
	        this.match(ClojureParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	meta_data() {
	    let localctx = new Meta_dataContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, ClojureParser.RULE_meta_data);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 172;
	        this.match(ClojureParser.T__15);
	        this.state = 177;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 173;
	            this.map_();
	            this.state = 174;
	            this.form();
	            break;

	        case 2:
	            this.state = 176;
	            this.form();
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



	var_quote() {
	    let localctx = new Var_quoteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, ClojureParser.RULE_var_quote);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 179;
	        this.match(ClojureParser.T__16);
	        this.state = 180;
	        this.symbol();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	host_expr() {
	    let localctx = new Host_exprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, ClojureParser.RULE_host_expr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 182;
	        this.match(ClojureParser.T__17);
	        this.state = 183;
	        this.form();
	        this.state = 184;
	        this.form();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	discard() {
	    let localctx = new DiscardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, ClojureParser.RULE_discard);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 186;
	        this.match(ClojureParser.T__18);
	        this.state = 187;
	        this.form();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dispatch() {
	    let localctx = new DispatchContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, ClojureParser.RULE_dispatch);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 189;
	        this.match(ClojureParser.T__13);
	        this.state = 190;
	        this.symbol();
	        this.state = 191;
	        this.form();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	regex() {
	    let localctx = new RegexContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, ClojureParser.RULE_regex);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 193;
	        this.match(ClojureParser.T__13);
	        this.state = 194;
	        this.string_();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, ClojureParser.RULE_literal);
	    try {
	        this.state = 204;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ClojureParser.STRING:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 196;
	            this.string_();
	            break;
	        case ClojureParser.FLOAT:
	        case ClojureParser.HEX:
	        case ClojureParser.BIN:
	        case ClojureParser.LONG:
	        case ClojureParser.BIGN:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 197;
	            this.number();
	            break;
	        case ClojureParser.CHAR_U:
	        case ClojureParser.CHAR_NAMED:
	        case ClojureParser.CHAR_ANY:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 198;
	            this.character();
	            break;
	        case ClojureParser.NIL:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 199;
	            this.nil_();
	            break;
	        case ClojureParser.BOOLEAN:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 200;
	            this.match(ClojureParser.BOOLEAN);
	            break;
	        case ClojureParser.T__19:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 201;
	            this.keyword();
	            break;
	        case ClojureParser.SYMBOL:
	        case ClojureParser.NS_SYMBOL:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 202;
	            this.symbol();
	            break;
	        case ClojureParser.PARAM_NAME:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 203;
	            this.param_name();
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



	string_() {
	    let localctx = new String_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, ClojureParser.RULE_string_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        this.match(ClojureParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	hex_() {
	    let localctx = new Hex_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, ClojureParser.RULE_hex_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 208;
	        this.match(ClojureParser.HEX);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bin_() {
	    let localctx = new Bin_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, ClojureParser.RULE_bin_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 210;
	        this.match(ClojureParser.BIN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bign() {
	    let localctx = new BignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, ClojureParser.RULE_bign);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 212;
	        this.match(ClojureParser.BIGN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, ClojureParser.RULE_number);
	    try {
	        this.state = 219;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ClojureParser.FLOAT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 214;
	            this.match(ClojureParser.FLOAT);
	            break;
	        case ClojureParser.HEX:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 215;
	            this.hex_();
	            break;
	        case ClojureParser.BIN:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 216;
	            this.bin_();
	            break;
	        case ClojureParser.BIGN:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 217;
	            this.bign();
	            break;
	        case ClojureParser.LONG:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 218;
	            this.match(ClojureParser.LONG);
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



	character() {
	    let localctx = new CharacterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, ClojureParser.RULE_character);
	    try {
	        this.state = 224;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ClojureParser.CHAR_NAMED:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 221;
	            this.named_char();
	            break;
	        case ClojureParser.CHAR_U:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 222;
	            this.u_hex_quad();
	            break;
	        case ClojureParser.CHAR_ANY:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 223;
	            this.any_char();
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



	named_char() {
	    let localctx = new Named_charContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, ClojureParser.RULE_named_char);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 226;
	        this.match(ClojureParser.CHAR_NAMED);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	any_char() {
	    let localctx = new Any_charContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, ClojureParser.RULE_any_char);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 228;
	        this.match(ClojureParser.CHAR_ANY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	u_hex_quad() {
	    let localctx = new U_hex_quadContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, ClojureParser.RULE_u_hex_quad);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 230;
	        this.match(ClojureParser.CHAR_U);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nil_() {
	    let localctx = new Nil_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, ClojureParser.RULE_nil_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 232;
	        this.match(ClojureParser.NIL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	keyword() {
	    let localctx = new KeywordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, ClojureParser.RULE_keyword);
	    try {
	        this.state = 236;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 234;
	            this.macro_keyword();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 235;
	            this.simple_keyword();
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



	simple_keyword() {
	    let localctx = new Simple_keywordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, ClojureParser.RULE_simple_keyword);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        this.match(ClojureParser.T__19);
	        this.state = 239;
	        this.symbol();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	macro_keyword() {
	    let localctx = new Macro_keywordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, ClojureParser.RULE_macro_keyword);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 241;
	        this.match(ClojureParser.T__19);
	        this.state = 242;
	        this.match(ClojureParser.T__19);
	        this.state = 243;
	        this.symbol();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	symbol() {
	    let localctx = new SymbolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, ClojureParser.RULE_symbol);
	    try {
	        this.state = 247;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ClojureParser.NS_SYMBOL:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 245;
	            this.ns_symbol();
	            break;
	        case ClojureParser.SYMBOL:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 246;
	            this.simple_sym();
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



	simple_sym() {
	    let localctx = new Simple_symContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, ClojureParser.RULE_simple_sym);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 249;
	        this.match(ClojureParser.SYMBOL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ns_symbol() {
	    let localctx = new Ns_symbolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, ClojureParser.RULE_ns_symbol);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 251;
	        this.match(ClojureParser.NS_SYMBOL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	param_name() {
	    let localctx = new Param_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, ClojureParser.RULE_param_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 253;
	        this.match(ClojureParser.PARAM_NAME);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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

ClojureParser.EOF = antlr4.Token.EOF;
ClojureParser.T__0 = 1;
ClojureParser.T__1 = 2;
ClojureParser.T__2 = 3;
ClojureParser.T__3 = 4;
ClojureParser.T__4 = 5;
ClojureParser.T__5 = 6;
ClojureParser.T__6 = 7;
ClojureParser.T__7 = 8;
ClojureParser.T__8 = 9;
ClojureParser.T__9 = 10;
ClojureParser.T__10 = 11;
ClojureParser.T__11 = 12;
ClojureParser.T__12 = 13;
ClojureParser.T__13 = 14;
ClojureParser.T__14 = 15;
ClojureParser.T__15 = 16;
ClojureParser.T__16 = 17;
ClojureParser.T__17 = 18;
ClojureParser.T__18 = 19;
ClojureParser.T__19 = 20;
ClojureParser.STRING = 21;
ClojureParser.FLOAT = 22;
ClojureParser.HEX = 23;
ClojureParser.BIN = 24;
ClojureParser.LONG = 25;
ClojureParser.BIGN = 26;
ClojureParser.CHAR_U = 27;
ClojureParser.CHAR_NAMED = 28;
ClojureParser.CHAR_ANY = 29;
ClojureParser.NIL = 30;
ClojureParser.BOOLEAN = 31;
ClojureParser.SYMBOL = 32;
ClojureParser.NS_SYMBOL = 33;
ClojureParser.PARAM_NAME = 34;
ClojureParser.TRASH = 35;

ClojureParser.RULE_file_ = 0;
ClojureParser.RULE_form = 1;
ClojureParser.RULE_forms = 2;
ClojureParser.RULE_list_ = 3;
ClojureParser.RULE_vector = 4;
ClojureParser.RULE_map_ = 5;
ClojureParser.RULE_set_ = 6;
ClojureParser.RULE_reader_macro = 7;
ClojureParser.RULE_quote = 8;
ClojureParser.RULE_backtick = 9;
ClojureParser.RULE_unquote = 10;
ClojureParser.RULE_unquote_splicing = 11;
ClojureParser.RULE_tag = 12;
ClojureParser.RULE_deref = 13;
ClojureParser.RULE_gensym = 14;
ClojureParser.RULE_lambda_ = 15;
ClojureParser.RULE_meta_data = 16;
ClojureParser.RULE_var_quote = 17;
ClojureParser.RULE_host_expr = 18;
ClojureParser.RULE_discard = 19;
ClojureParser.RULE_dispatch = 20;
ClojureParser.RULE_regex = 21;
ClojureParser.RULE_literal = 22;
ClojureParser.RULE_string_ = 23;
ClojureParser.RULE_hex_ = 24;
ClojureParser.RULE_bin_ = 25;
ClojureParser.RULE_bign = 26;
ClojureParser.RULE_number = 27;
ClojureParser.RULE_character = 28;
ClojureParser.RULE_named_char = 29;
ClojureParser.RULE_any_char = 30;
ClojureParser.RULE_u_hex_quad = 31;
ClojureParser.RULE_nil_ = 32;
ClojureParser.RULE_keyword = 33;
ClojureParser.RULE_simple_keyword = 34;
ClojureParser.RULE_macro_keyword = 35;
ClojureParser.RULE_symbol = 36;
ClojureParser.RULE_simple_sym = 37;
ClojureParser.RULE_ns_symbol = 38;
ClojureParser.RULE_param_name = 39;

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
        this.ruleIndex = ClojureParser.RULE_file_;
    }

	EOF() {
	    return this.getToken(ClojureParser.EOF, 0);
	};

	form = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormContext);
	    } else {
	        return this.getTypedRuleContext(FormContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterFile_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitFile_(this);
		}
	}


}



class FormContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_form;
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	list_() {
	    return this.getTypedRuleContext(List_Context,0);
	};

	vector() {
	    return this.getTypedRuleContext(VectorContext,0);
	};

	map_() {
	    return this.getTypedRuleContext(Map_Context,0);
	};

	reader_macro() {
	    return this.getTypedRuleContext(Reader_macroContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterForm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitForm(this);
		}
	}


}



class FormsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_forms;
    }

	form = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormContext);
	    } else {
	        return this.getTypedRuleContext(FormContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterForms(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitForms(this);
		}
	}


}



class List_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_list_;
    }

	forms() {
	    return this.getTypedRuleContext(FormsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterList_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitList_(this);
		}
	}


}



class VectorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_vector;
    }

	forms() {
	    return this.getTypedRuleContext(FormsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterVector(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitVector(this);
		}
	}


}



class Map_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_map_;
    }

	form = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormContext);
	    } else {
	        return this.getTypedRuleContext(FormContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterMap_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitMap_(this);
		}
	}


}



class Set_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_set_;
    }

	forms() {
	    return this.getTypedRuleContext(FormsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterSet_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitSet_(this);
		}
	}


}



class Reader_macroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_reader_macro;
    }

	lambda_() {
	    return this.getTypedRuleContext(Lambda_Context,0);
	};

	meta_data() {
	    return this.getTypedRuleContext(Meta_dataContext,0);
	};

	regex() {
	    return this.getTypedRuleContext(RegexContext,0);
	};

	var_quote() {
	    return this.getTypedRuleContext(Var_quoteContext,0);
	};

	host_expr() {
	    return this.getTypedRuleContext(Host_exprContext,0);
	};

	set_() {
	    return this.getTypedRuleContext(Set_Context,0);
	};

	tag() {
	    return this.getTypedRuleContext(TagContext,0);
	};

	discard() {
	    return this.getTypedRuleContext(DiscardContext,0);
	};

	dispatch() {
	    return this.getTypedRuleContext(DispatchContext,0);
	};

	deref() {
	    return this.getTypedRuleContext(DerefContext,0);
	};

	quote() {
	    return this.getTypedRuleContext(QuoteContext,0);
	};

	backtick() {
	    return this.getTypedRuleContext(BacktickContext,0);
	};

	unquote() {
	    return this.getTypedRuleContext(UnquoteContext,0);
	};

	unquote_splicing() {
	    return this.getTypedRuleContext(Unquote_splicingContext,0);
	};

	gensym() {
	    return this.getTypedRuleContext(GensymContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterReader_macro(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitReader_macro(this);
		}
	}


}



class QuoteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_quote;
    }

	form() {
	    return this.getTypedRuleContext(FormContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterQuote(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitQuote(this);
		}
	}


}



class BacktickContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_backtick;
    }

	form() {
	    return this.getTypedRuleContext(FormContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterBacktick(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitBacktick(this);
		}
	}


}



class UnquoteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_unquote;
    }

	form() {
	    return this.getTypedRuleContext(FormContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterUnquote(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitUnquote(this);
		}
	}


}



class Unquote_splicingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_unquote_splicing;
    }

	form() {
	    return this.getTypedRuleContext(FormContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterUnquote_splicing(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitUnquote_splicing(this);
		}
	}


}



class TagContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_tag;
    }

	form = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormContext);
	    } else {
	        return this.getTypedRuleContext(FormContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterTag(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitTag(this);
		}
	}


}



class DerefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_deref;
    }

	form() {
	    return this.getTypedRuleContext(FormContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterDeref(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitDeref(this);
		}
	}


}



class GensymContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_gensym;
    }

	SYMBOL() {
	    return this.getToken(ClojureParser.SYMBOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterGensym(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitGensym(this);
		}
	}


}



class Lambda_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_lambda_;
    }

	form = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormContext);
	    } else {
	        return this.getTypedRuleContext(FormContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterLambda_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitLambda_(this);
		}
	}


}



class Meta_dataContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_meta_data;
    }

	map_() {
	    return this.getTypedRuleContext(Map_Context,0);
	};

	form() {
	    return this.getTypedRuleContext(FormContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterMeta_data(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitMeta_data(this);
		}
	}


}



class Var_quoteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_var_quote;
    }

	symbol() {
	    return this.getTypedRuleContext(SymbolContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterVar_quote(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitVar_quote(this);
		}
	}


}



class Host_exprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_host_expr;
    }

	form = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormContext);
	    } else {
	        return this.getTypedRuleContext(FormContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterHost_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitHost_expr(this);
		}
	}


}



class DiscardContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_discard;
    }

	form() {
	    return this.getTypedRuleContext(FormContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterDiscard(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitDiscard(this);
		}
	}


}



class DispatchContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_dispatch;
    }

	symbol() {
	    return this.getTypedRuleContext(SymbolContext,0);
	};

	form() {
	    return this.getTypedRuleContext(FormContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterDispatch(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitDispatch(this);
		}
	}


}



class RegexContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_regex;
    }

	string_() {
	    return this.getTypedRuleContext(String_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterRegex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitRegex(this);
		}
	}


}



class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_literal;
    }

	string_() {
	    return this.getTypedRuleContext(String_Context,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	character() {
	    return this.getTypedRuleContext(CharacterContext,0);
	};

	nil_() {
	    return this.getTypedRuleContext(Nil_Context,0);
	};

	BOOLEAN() {
	    return this.getToken(ClojureParser.BOOLEAN, 0);
	};

	keyword() {
	    return this.getTypedRuleContext(KeywordContext,0);
	};

	symbol() {
	    return this.getTypedRuleContext(SymbolContext,0);
	};

	param_name() {
	    return this.getTypedRuleContext(Param_nameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitLiteral(this);
		}
	}


}



class String_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_string_;
    }

	STRING() {
	    return this.getToken(ClojureParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterString_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitString_(this);
		}
	}


}



class Hex_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_hex_;
    }

	HEX() {
	    return this.getToken(ClojureParser.HEX, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterHex_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitHex_(this);
		}
	}


}



class Bin_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_bin_;
    }

	BIN() {
	    return this.getToken(ClojureParser.BIN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterBin_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitBin_(this);
		}
	}


}



class BignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_bign;
    }

	BIGN() {
	    return this.getToken(ClojureParser.BIGN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterBign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitBign(this);
		}
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_number;
    }

	FLOAT() {
	    return this.getToken(ClojureParser.FLOAT, 0);
	};

	hex_() {
	    return this.getTypedRuleContext(Hex_Context,0);
	};

	bin_() {
	    return this.getTypedRuleContext(Bin_Context,0);
	};

	bign() {
	    return this.getTypedRuleContext(BignContext,0);
	};

	LONG() {
	    return this.getToken(ClojureParser.LONG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitNumber(this);
		}
	}


}



class CharacterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_character;
    }

	named_char() {
	    return this.getTypedRuleContext(Named_charContext,0);
	};

	u_hex_quad() {
	    return this.getTypedRuleContext(U_hex_quadContext,0);
	};

	any_char() {
	    return this.getTypedRuleContext(Any_charContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterCharacter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitCharacter(this);
		}
	}


}



class Named_charContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_named_char;
    }

	CHAR_NAMED() {
	    return this.getToken(ClojureParser.CHAR_NAMED, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterNamed_char(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitNamed_char(this);
		}
	}


}



class Any_charContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_any_char;
    }

	CHAR_ANY() {
	    return this.getToken(ClojureParser.CHAR_ANY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterAny_char(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitAny_char(this);
		}
	}


}



class U_hex_quadContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_u_hex_quad;
    }

	CHAR_U() {
	    return this.getToken(ClojureParser.CHAR_U, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterU_hex_quad(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitU_hex_quad(this);
		}
	}


}



class Nil_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_nil_;
    }

	NIL() {
	    return this.getToken(ClojureParser.NIL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterNil_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitNil_(this);
		}
	}


}



class KeywordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_keyword;
    }

	macro_keyword() {
	    return this.getTypedRuleContext(Macro_keywordContext,0);
	};

	simple_keyword() {
	    return this.getTypedRuleContext(Simple_keywordContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterKeyword(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitKeyword(this);
		}
	}


}



class Simple_keywordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_simple_keyword;
    }

	symbol() {
	    return this.getTypedRuleContext(SymbolContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterSimple_keyword(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitSimple_keyword(this);
		}
	}


}



class Macro_keywordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_macro_keyword;
    }

	symbol() {
	    return this.getTypedRuleContext(SymbolContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterMacro_keyword(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitMacro_keyword(this);
		}
	}


}



class SymbolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_symbol;
    }

	ns_symbol() {
	    return this.getTypedRuleContext(Ns_symbolContext,0);
	};

	simple_sym() {
	    return this.getTypedRuleContext(Simple_symContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterSymbol(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitSymbol(this);
		}
	}


}



class Simple_symContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_simple_sym;
    }

	SYMBOL() {
	    return this.getToken(ClojureParser.SYMBOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterSimple_sym(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitSimple_sym(this);
		}
	}


}



class Ns_symbolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_ns_symbol;
    }

	NS_SYMBOL() {
	    return this.getToken(ClojureParser.NS_SYMBOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterNs_symbol(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitNs_symbol(this);
		}
	}


}



class Param_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClojureParser.RULE_param_name;
    }

	PARAM_NAME() {
	    return this.getToken(ClojureParser.PARAM_NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.enterParam_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClojureListener ) {
	        listener.exitParam_name(this);
		}
	}


}




ClojureParser.File_Context = File_Context; 
ClojureParser.FormContext = FormContext; 
ClojureParser.FormsContext = FormsContext; 
ClojureParser.List_Context = List_Context; 
ClojureParser.VectorContext = VectorContext; 
ClojureParser.Map_Context = Map_Context; 
ClojureParser.Set_Context = Set_Context; 
ClojureParser.Reader_macroContext = Reader_macroContext; 
ClojureParser.QuoteContext = QuoteContext; 
ClojureParser.BacktickContext = BacktickContext; 
ClojureParser.UnquoteContext = UnquoteContext; 
ClojureParser.Unquote_splicingContext = Unquote_splicingContext; 
ClojureParser.TagContext = TagContext; 
ClojureParser.DerefContext = DerefContext; 
ClojureParser.GensymContext = GensymContext; 
ClojureParser.Lambda_Context = Lambda_Context; 
ClojureParser.Meta_dataContext = Meta_dataContext; 
ClojureParser.Var_quoteContext = Var_quoteContext; 
ClojureParser.Host_exprContext = Host_exprContext; 
ClojureParser.DiscardContext = DiscardContext; 
ClojureParser.DispatchContext = DispatchContext; 
ClojureParser.RegexContext = RegexContext; 
ClojureParser.LiteralContext = LiteralContext; 
ClojureParser.String_Context = String_Context; 
ClojureParser.Hex_Context = Hex_Context; 
ClojureParser.Bin_Context = Bin_Context; 
ClojureParser.BignContext = BignContext; 
ClojureParser.NumberContext = NumberContext; 
ClojureParser.CharacterContext = CharacterContext; 
ClojureParser.Named_charContext = Named_charContext; 
ClojureParser.Any_charContext = Any_charContext; 
ClojureParser.U_hex_quadContext = U_hex_quadContext; 
ClojureParser.Nil_Context = Nil_Context; 
ClojureParser.KeywordContext = KeywordContext; 
ClojureParser.Simple_keywordContext = Simple_keywordContext; 
ClojureParser.Macro_keywordContext = Macro_keywordContext; 
ClojureParser.SymbolContext = SymbolContext; 
ClojureParser.Simple_symContext = Simple_symContext; 
ClojureParser.Ns_symbolContext = Ns_symbolContext; 
ClojureParser.Param_nameContext = Param_nameContext; 
