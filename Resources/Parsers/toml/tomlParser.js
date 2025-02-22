// Generated from ./toml/toml.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import tomlListener from './tomlListener.js';
const serializedATN = [4,1,27,183,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,1,0,1,0,1,0,5,0,54,8,0,10,
0,12,0,57,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,68,8,1,1,2,3,2,71,
8,2,1,3,1,3,1,3,1,3,1,4,1,4,3,4,79,8,4,1,5,1,5,3,5,83,8,5,1,6,1,6,1,7,1,
7,1,8,1,8,1,8,4,8,92,8,8,11,8,12,8,93,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,103,
8,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,3,15,117,
8,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,
16,3,16,133,8,16,3,16,135,8,16,1,17,3,17,138,8,17,1,17,5,17,141,8,17,10,
17,12,17,144,9,17,1,18,1,18,3,18,148,8,18,5,18,150,8,18,10,18,12,18,153,
9,18,1,19,1,19,3,19,157,8,19,1,20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,22,
3,22,168,8,22,1,23,1,23,1,23,1,23,1,23,3,23,175,8,23,1,24,1,24,1,24,1,24,
1,24,1,24,1,24,0,0,25,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
38,40,42,44,46,48,0,5,2,0,12,12,14,14,1,0,12,15,1,0,19,22,1,0,16,18,1,0,
23,26,180,0,50,1,0,0,0,2,67,1,0,0,0,4,70,1,0,0,0,6,72,1,0,0,0,8,78,1,0,0,
0,10,82,1,0,0,0,12,84,1,0,0,0,14,86,1,0,0,0,16,88,1,0,0,0,18,102,1,0,0,0,
20,104,1,0,0,0,22,106,1,0,0,0,24,108,1,0,0,0,26,110,1,0,0,0,28,112,1,0,0,
0,30,114,1,0,0,0,32,134,1,0,0,0,34,142,1,0,0,0,36,151,1,0,0,0,38,156,1,0,
0,0,40,158,1,0,0,0,42,162,1,0,0,0,44,167,1,0,0,0,46,169,1,0,0,0,48,176,1,
0,0,0,50,55,3,2,1,0,51,52,5,9,0,0,52,54,3,2,1,0,53,51,1,0,0,0,54,57,1,0,
0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,58,1,0,0,0,57,55,1,0,0,0,58,59,5,0,0,
1,59,1,1,0,0,0,60,61,3,6,3,0,61,62,3,4,2,0,62,68,1,0,0,0,63,64,3,38,19,0,
64,65,3,4,2,0,65,68,1,0,0,0,66,68,3,4,2,0,67,60,1,0,0,0,67,63,1,0,0,0,67,
66,1,0,0,0,68,3,1,0,0,0,69,71,5,10,0,0,70,69,1,0,0,0,70,71,1,0,0,0,71,5,
1,0,0,0,72,73,3,8,4,0,73,74,5,1,0,0,74,75,3,18,9,0,75,7,1,0,0,0,76,79,3,
10,5,0,77,79,3,16,8,0,78,76,1,0,0,0,78,77,1,0,0,0,79,9,1,0,0,0,80,83,3,14,
7,0,81,83,3,12,6,0,82,80,1,0,0,0,82,81,1,0,0,0,83,11,1,0,0,0,84,85,5,27,
0,0,85,13,1,0,0,0,86,87,7,0,0,0,87,15,1,0,0,0,88,91,3,10,5,0,89,90,5,2,0,
0,90,92,3,10,5,0,91,89,1,0,0,0,92,93,1,0,0,0,93,91,1,0,0,0,93,94,1,0,0,0,
94,17,1,0,0,0,95,103,3,20,10,0,96,103,3,22,11,0,97,103,3,24,12,0,98,103,
3,26,13,0,99,103,3,28,14,0,100,103,3,30,15,0,101,103,3,42,21,0,102,95,1,
0,0,0,102,96,1,0,0,0,102,97,1,0,0,0,102,98,1,0,0,0,102,99,1,0,0,0,102,100,
1,0,0,0,102,101,1,0,0,0,103,19,1,0,0,0,104,105,7,1,0,0,105,21,1,0,0,0,106,
107,7,2,0,0,107,23,1,0,0,0,108,109,7,3,0,0,109,25,1,0,0,0,110,111,5,11,0,
0,111,27,1,0,0,0,112,113,7,4,0,0,113,29,1,0,0,0,114,116,5,3,0,0,115,117,
3,32,16,0,116,115,1,0,0,0,116,117,1,0,0,0,117,118,1,0,0,0,118,119,3,34,17,
0,119,120,5,4,0,0,120,31,1,0,0,0,121,122,3,34,17,0,122,123,3,18,9,0,123,
124,3,36,18,0,124,125,5,5,0,0,125,126,3,32,16,0,126,127,3,34,17,0,127,135,
1,0,0,0,128,129,3,34,17,0,129,130,3,18,9,0,130,132,3,36,18,0,131,133,5,5,
0,0,132,131,1,0,0,0,132,133,1,0,0,0,133,135,1,0,0,0,134,121,1,0,0,0,134,
128,1,0,0,0,135,33,1,0,0,0,136,138,5,10,0,0,137,136,1,0,0,0,137,138,1,0,
0,0,138,139,1,0,0,0,139,141,5,9,0,0,140,137,1,0,0,0,141,144,1,0,0,0,142,
140,1,0,0,0,142,143,1,0,0,0,143,35,1,0,0,0,144,142,1,0,0,0,145,147,5,9,0,
0,146,148,5,10,0,0,147,146,1,0,0,0,147,148,1,0,0,0,148,150,1,0,0,0,149,145,
1,0,0,0,150,153,1,0,0,0,151,149,1,0,0,0,151,152,1,0,0,0,152,37,1,0,0,0,153,
151,1,0,0,0,154,157,3,40,20,0,155,157,3,48,24,0,156,154,1,0,0,0,156,155,
1,0,0,0,157,39,1,0,0,0,158,159,5,3,0,0,159,160,3,8,4,0,160,161,5,4,0,0,161,
41,1,0,0,0,162,163,5,6,0,0,163,164,3,44,22,0,164,165,5,7,0,0,165,43,1,0,
0,0,166,168,3,46,23,0,167,166,1,0,0,0,167,168,1,0,0,0,168,45,1,0,0,0,169,
170,3,8,4,0,170,171,5,1,0,0,171,174,3,18,9,0,172,173,5,5,0,0,173,175,3,46,
23,0,174,172,1,0,0,0,174,175,1,0,0,0,175,47,1,0,0,0,176,177,5,3,0,0,177,
178,5,3,0,0,178,179,3,8,4,0,179,180,5,4,0,0,180,181,5,4,0,0,181,49,1,0,0,
0,17,55,67,70,78,82,93,102,116,132,134,137,142,147,151,156,167,174];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class tomlParser extends antlr4.Parser {

    static grammarFileName = "toml.g4";
    static literalNames = [ null, "'='", "'.'", "'['", "']'", "','", "'{'", 
                            "'}'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             "WS", "NL", "COMMENT", "BOOLEAN", "BASIC_STRING", 
                             "ML_BASIC_STRING", "LITERAL_STRING", "ML_LITERAL_STRING", 
                             "FLOAT", "INF", "NAN", "DEC_INT", "HEX_INT", 
                             "OCT_INT", "BIN_INT", "OFFSET_DATE_TIME", "LOCAL_DATE_TIME", 
                             "LOCAL_DATE", "LOCAL_TIME", "UNQUOTED_KEY" ];
    static ruleNames = [ "document", "expression", "comment", "key_value", 
                         "key", "simple_key", "unquoted_key", "quoted_key", 
                         "dotted_key", "value", "string", "integer", "floating_point", 
                         "bool_", "date_time", "array_", "array_values", 
                         "comment_or_nl", "nl_or_comment", "table", "standard_table", 
                         "inline_table", "inline_table_keyvals", "inline_table_keyvals_non_empty", 
                         "array_table" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = tomlParser.ruleNames;
        this.literalNames = tomlParser.literalNames;
        this.symbolicNames = tomlParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	document() {
	    let localctx = new DocumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, tomlParser.RULE_document);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.expression();
	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===tomlParser.NL) {
	            this.state = 51;
	            this.match(tomlParser.NL);
	            this.state = 52;
	            this.expression();
	            this.state = 57;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 58;
	        this.match(tomlParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 2, tomlParser.RULE_expression);
	    try {
	        this.state = 67;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case tomlParser.BASIC_STRING:
	        case tomlParser.LITERAL_STRING:
	        case tomlParser.UNQUOTED_KEY:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 60;
	            this.key_value();
	            this.state = 61;
	            this.comment();
	            break;
	        case tomlParser.T__2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 63;
	            this.table();
	            this.state = 64;
	            this.comment();
	            break;
	        case tomlParser.EOF:
	        case tomlParser.NL:
	        case tomlParser.COMMENT:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 66;
	            this.comment();
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



	comment() {
	    let localctx = new CommentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, tomlParser.RULE_comment);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===tomlParser.COMMENT) {
	            this.state = 69;
	            this.match(tomlParser.COMMENT);
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



	key_value() {
	    let localctx = new Key_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, tomlParser.RULE_key_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.key();
	        this.state = 73;
	        this.match(tomlParser.T__0);
	        this.state = 74;
	        this.value();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	key() {
	    let localctx = new KeyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, tomlParser.RULE_key);
	    try {
	        this.state = 78;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 76;
	            this.simple_key();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 77;
	            this.dotted_key();
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



	simple_key() {
	    let localctx = new Simple_keyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, tomlParser.RULE_simple_key);
	    try {
	        this.state = 82;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case tomlParser.BASIC_STRING:
	        case tomlParser.LITERAL_STRING:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 80;
	            this.quoted_key();
	            break;
	        case tomlParser.UNQUOTED_KEY:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 81;
	            this.unquoted_key();
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



	unquoted_key() {
	    let localctx = new Unquoted_keyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, tomlParser.RULE_unquoted_key);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.match(tomlParser.UNQUOTED_KEY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	quoted_key() {
	    let localctx = new Quoted_keyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, tomlParser.RULE_quoted_key);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        _la = this._input.LA(1);
	        if(!(_la===tomlParser.BASIC_STRING || _la===tomlParser.LITERAL_STRING)) {
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



	dotted_key() {
	    let localctx = new Dotted_keyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, tomlParser.RULE_dotted_key);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.simple_key();
	        this.state = 91; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 89;
	            this.match(tomlParser.T__1);
	            this.state = 90;
	            this.simple_key();
	            this.state = 93; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===tomlParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 18, tomlParser.RULE_value);
	    try {
	        this.state = 102;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case tomlParser.BASIC_STRING:
	        case tomlParser.ML_BASIC_STRING:
	        case tomlParser.LITERAL_STRING:
	        case tomlParser.ML_LITERAL_STRING:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 95;
	            this.string();
	            break;
	        case tomlParser.DEC_INT:
	        case tomlParser.HEX_INT:
	        case tomlParser.OCT_INT:
	        case tomlParser.BIN_INT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 96;
	            this.integer();
	            break;
	        case tomlParser.FLOAT:
	        case tomlParser.INF:
	        case tomlParser.NAN:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 97;
	            this.floating_point();
	            break;
	        case tomlParser.BOOLEAN:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 98;
	            this.bool_();
	            break;
	        case tomlParser.OFFSET_DATE_TIME:
	        case tomlParser.LOCAL_DATE_TIME:
	        case tomlParser.LOCAL_DATE:
	        case tomlParser.LOCAL_TIME:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 99;
	            this.date_time();
	            break;
	        case tomlParser.T__2:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 100;
	            this.array_();
	            break;
	        case tomlParser.T__5:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 101;
	            this.inline_table();
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



	string() {
	    let localctx = new StringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, tomlParser.RULE_string);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tomlParser.BASIC_STRING) | (1 << tomlParser.ML_BASIC_STRING) | (1 << tomlParser.LITERAL_STRING) | (1 << tomlParser.ML_LITERAL_STRING))) !== 0))) {
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



	integer() {
	    let localctx = new IntegerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, tomlParser.RULE_integer);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tomlParser.DEC_INT) | (1 << tomlParser.HEX_INT) | (1 << tomlParser.OCT_INT) | (1 << tomlParser.BIN_INT))) !== 0))) {
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



	floating_point() {
	    let localctx = new Floating_pointContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, tomlParser.RULE_floating_point);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tomlParser.FLOAT) | (1 << tomlParser.INF) | (1 << tomlParser.NAN))) !== 0))) {
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



	bool_() {
	    let localctx = new Bool_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, tomlParser.RULE_bool_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this.match(tomlParser.BOOLEAN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	date_time() {
	    let localctx = new Date_timeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, tomlParser.RULE_date_time);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tomlParser.OFFSET_DATE_TIME) | (1 << tomlParser.LOCAL_DATE_TIME) | (1 << tomlParser.LOCAL_DATE) | (1 << tomlParser.LOCAL_TIME))) !== 0))) {
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



	array_() {
	    let localctx = new Array_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, tomlParser.RULE_array_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.match(tomlParser.T__2);
	        this.state = 116;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        if(la_===1) {
	            this.state = 115;
	            this.array_values();

	        }
	        this.state = 118;
	        this.comment_or_nl();
	        this.state = 119;
	        this.match(tomlParser.T__3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	array_values() {
	    let localctx = new Array_valuesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, tomlParser.RULE_array_values);
	    var _la = 0; // Token type
	    try {
	        this.state = 134;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 121;
	            this.comment_or_nl();
	            this.state = 122;
	            this.value();
	            this.state = 123;
	            this.nl_or_comment();
	            this.state = 124;
	            this.match(tomlParser.T__4);
	            this.state = 125;
	            this.array_values();
	            this.state = 126;
	            this.comment_or_nl();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 128;
	            this.comment_or_nl();
	            this.state = 129;
	            this.value();
	            this.state = 130;
	            this.nl_or_comment();
	            this.state = 132;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===tomlParser.T__4) {
	                this.state = 131;
	                this.match(tomlParser.T__4);
	            }

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



	comment_or_nl() {
	    let localctx = new Comment_or_nlContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, tomlParser.RULE_comment_or_nl);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 142;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 137;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===tomlParser.COMMENT) {
	                    this.state = 136;
	                    this.match(tomlParser.COMMENT);
	                }

	                this.state = 139;
	                this.match(tomlParser.NL); 
	            }
	            this.state = 144;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
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



	nl_or_comment() {
	    let localctx = new Nl_or_commentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, tomlParser.RULE_nl_or_comment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 145;
	                this.match(tomlParser.NL);
	                this.state = 147;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	                if(la_===1) {
	                    this.state = 146;
	                    this.match(tomlParser.COMMENT);

	                } 
	            }
	            this.state = 153;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
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



	table() {
	    let localctx = new TableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, tomlParser.RULE_table);
	    try {
	        this.state = 156;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 154;
	            this.standard_table();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 155;
	            this.array_table();
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



	standard_table() {
	    let localctx = new Standard_tableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, tomlParser.RULE_standard_table);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        this.match(tomlParser.T__2);
	        this.state = 159;
	        this.key();
	        this.state = 160;
	        this.match(tomlParser.T__3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	inline_table() {
	    let localctx = new Inline_tableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, tomlParser.RULE_inline_table);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        this.match(tomlParser.T__5);
	        this.state = 163;
	        this.inline_table_keyvals();
	        this.state = 164;
	        this.match(tomlParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	inline_table_keyvals() {
	    let localctx = new Inline_table_keyvalsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, tomlParser.RULE_inline_table_keyvals);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tomlParser.BASIC_STRING) | (1 << tomlParser.LITERAL_STRING) | (1 << tomlParser.UNQUOTED_KEY))) !== 0)) {
	            this.state = 166;
	            this.inline_table_keyvals_non_empty();
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



	inline_table_keyvals_non_empty() {
	    let localctx = new Inline_table_keyvals_non_emptyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, tomlParser.RULE_inline_table_keyvals_non_empty);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 169;
	        this.key();
	        this.state = 170;
	        this.match(tomlParser.T__0);
	        this.state = 171;
	        this.value();
	        this.state = 174;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===tomlParser.T__4) {
	            this.state = 172;
	            this.match(tomlParser.T__4);
	            this.state = 173;
	            this.inline_table_keyvals_non_empty();
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



	array_table() {
	    let localctx = new Array_tableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, tomlParser.RULE_array_table);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 176;
	        this.match(tomlParser.T__2);
	        this.state = 177;
	        this.match(tomlParser.T__2);
	        this.state = 178;
	        this.key();
	        this.state = 179;
	        this.match(tomlParser.T__3);
	        this.state = 180;
	        this.match(tomlParser.T__3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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

tomlParser.EOF = antlr4.Token.EOF;
tomlParser.T__0 = 1;
tomlParser.T__1 = 2;
tomlParser.T__2 = 3;
tomlParser.T__3 = 4;
tomlParser.T__4 = 5;
tomlParser.T__5 = 6;
tomlParser.T__6 = 7;
tomlParser.WS = 8;
tomlParser.NL = 9;
tomlParser.COMMENT = 10;
tomlParser.BOOLEAN = 11;
tomlParser.BASIC_STRING = 12;
tomlParser.ML_BASIC_STRING = 13;
tomlParser.LITERAL_STRING = 14;
tomlParser.ML_LITERAL_STRING = 15;
tomlParser.FLOAT = 16;
tomlParser.INF = 17;
tomlParser.NAN = 18;
tomlParser.DEC_INT = 19;
tomlParser.HEX_INT = 20;
tomlParser.OCT_INT = 21;
tomlParser.BIN_INT = 22;
tomlParser.OFFSET_DATE_TIME = 23;
tomlParser.LOCAL_DATE_TIME = 24;
tomlParser.LOCAL_DATE = 25;
tomlParser.LOCAL_TIME = 26;
tomlParser.UNQUOTED_KEY = 27;

tomlParser.RULE_document = 0;
tomlParser.RULE_expression = 1;
tomlParser.RULE_comment = 2;
tomlParser.RULE_key_value = 3;
tomlParser.RULE_key = 4;
tomlParser.RULE_simple_key = 5;
tomlParser.RULE_unquoted_key = 6;
tomlParser.RULE_quoted_key = 7;
tomlParser.RULE_dotted_key = 8;
tomlParser.RULE_value = 9;
tomlParser.RULE_string = 10;
tomlParser.RULE_integer = 11;
tomlParser.RULE_floating_point = 12;
tomlParser.RULE_bool_ = 13;
tomlParser.RULE_date_time = 14;
tomlParser.RULE_array_ = 15;
tomlParser.RULE_array_values = 16;
tomlParser.RULE_comment_or_nl = 17;
tomlParser.RULE_nl_or_comment = 18;
tomlParser.RULE_table = 19;
tomlParser.RULE_standard_table = 20;
tomlParser.RULE_inline_table = 21;
tomlParser.RULE_inline_table_keyvals = 22;
tomlParser.RULE_inline_table_keyvals_non_empty = 23;
tomlParser.RULE_array_table = 24;

class DocumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tomlParser.RULE_document;
    }

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

	EOF() {
	    return this.getToken(tomlParser.EOF, 0);
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tomlParser.NL);
	    } else {
	        return this.getToken(tomlParser.NL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.enterDocument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.exitDocument(this);
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
        this.ruleIndex = tomlParser.RULE_expression;
    }

	key_value() {
	    return this.getTypedRuleContext(Key_valueContext,0);
	};

	comment() {
	    return this.getTypedRuleContext(CommentContext,0);
	};

	table() {
	    return this.getTypedRuleContext(TableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.exitExpression(this);
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
        this.ruleIndex = tomlParser.RULE_comment;
    }

	COMMENT() {
	    return this.getToken(tomlParser.COMMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.enterComment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.exitComment(this);
		}
	}


}



class Key_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tomlParser.RULE_key_value;
    }

	key() {
	    return this.getTypedRuleContext(KeyContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.enterKey_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.exitKey_value(this);
		}
	}


}



class KeyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tomlParser.RULE_key;
    }

	simple_key() {
	    return this.getTypedRuleContext(Simple_keyContext,0);
	};

	dotted_key() {
	    return this.getTypedRuleContext(Dotted_keyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.enterKey(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.exitKey(this);
		}
	}


}



class Simple_keyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tomlParser.RULE_simple_key;
    }

	quoted_key() {
	    return this.getTypedRuleContext(Quoted_keyContext,0);
	};

	unquoted_key() {
	    return this.getTypedRuleContext(Unquoted_keyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.enterSimple_key(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.exitSimple_key(this);
		}
	}


}



class Unquoted_keyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tomlParser.RULE_unquoted_key;
    }

	UNQUOTED_KEY() {
	    return this.getToken(tomlParser.UNQUOTED_KEY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.enterUnquoted_key(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.exitUnquoted_key(this);
		}
	}


}



class Quoted_keyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tomlParser.RULE_quoted_key;
    }

	BASIC_STRING() {
	    return this.getToken(tomlParser.BASIC_STRING, 0);
	};

	LITERAL_STRING() {
	    return this.getToken(tomlParser.LITERAL_STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.enterQuoted_key(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.exitQuoted_key(this);
		}
	}


}



class Dotted_keyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tomlParser.RULE_dotted_key;
    }

	simple_key = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Simple_keyContext);
	    } else {
	        return this.getTypedRuleContext(Simple_keyContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.enterDotted_key(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.exitDotted_key(this);
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
        this.ruleIndex = tomlParser.RULE_value;
    }

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	integer() {
	    return this.getTypedRuleContext(IntegerContext,0);
	};

	floating_point() {
	    return this.getTypedRuleContext(Floating_pointContext,0);
	};

	bool_() {
	    return this.getTypedRuleContext(Bool_Context,0);
	};

	date_time() {
	    return this.getTypedRuleContext(Date_timeContext,0);
	};

	array_() {
	    return this.getTypedRuleContext(Array_Context,0);
	};

	inline_table() {
	    return this.getTypedRuleContext(Inline_tableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.exitValue(this);
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
        this.ruleIndex = tomlParser.RULE_string;
    }

	BASIC_STRING() {
	    return this.getToken(tomlParser.BASIC_STRING, 0);
	};

	ML_BASIC_STRING() {
	    return this.getToken(tomlParser.ML_BASIC_STRING, 0);
	};

	LITERAL_STRING() {
	    return this.getToken(tomlParser.LITERAL_STRING, 0);
	};

	ML_LITERAL_STRING() {
	    return this.getToken(tomlParser.ML_LITERAL_STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.exitString(this);
		}
	}


}



class IntegerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tomlParser.RULE_integer;
    }

	DEC_INT() {
	    return this.getToken(tomlParser.DEC_INT, 0);
	};

	HEX_INT() {
	    return this.getToken(tomlParser.HEX_INT, 0);
	};

	OCT_INT() {
	    return this.getToken(tomlParser.OCT_INT, 0);
	};

	BIN_INT() {
	    return this.getToken(tomlParser.BIN_INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.enterInteger(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.exitInteger(this);
		}
	}


}



class Floating_pointContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tomlParser.RULE_floating_point;
    }

	FLOAT() {
	    return this.getToken(tomlParser.FLOAT, 0);
	};

	INF() {
	    return this.getToken(tomlParser.INF, 0);
	};

	NAN() {
	    return this.getToken(tomlParser.NAN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.enterFloating_point(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.exitFloating_point(this);
		}
	}


}



class Bool_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tomlParser.RULE_bool_;
    }

	BOOLEAN() {
	    return this.getToken(tomlParser.BOOLEAN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.enterBool_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.exitBool_(this);
		}
	}


}



class Date_timeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tomlParser.RULE_date_time;
    }

	OFFSET_DATE_TIME() {
	    return this.getToken(tomlParser.OFFSET_DATE_TIME, 0);
	};

	LOCAL_DATE_TIME() {
	    return this.getToken(tomlParser.LOCAL_DATE_TIME, 0);
	};

	LOCAL_DATE() {
	    return this.getToken(tomlParser.LOCAL_DATE, 0);
	};

	LOCAL_TIME() {
	    return this.getToken(tomlParser.LOCAL_TIME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.enterDate_time(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.exitDate_time(this);
		}
	}


}



class Array_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tomlParser.RULE_array_;
    }

	comment_or_nl() {
	    return this.getTypedRuleContext(Comment_or_nlContext,0);
	};

	array_values() {
	    return this.getTypedRuleContext(Array_valuesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.enterArray_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.exitArray_(this);
		}
	}


}



class Array_valuesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tomlParser.RULE_array_values;
    }

	comment_or_nl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Comment_or_nlContext);
	    } else {
	        return this.getTypedRuleContext(Comment_or_nlContext,i);
	    }
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	nl_or_comment() {
	    return this.getTypedRuleContext(Nl_or_commentContext,0);
	};

	array_values() {
	    return this.getTypedRuleContext(Array_valuesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.enterArray_values(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.exitArray_values(this);
		}
	}


}



class Comment_or_nlContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tomlParser.RULE_comment_or_nl;
    }

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tomlParser.NL);
	    } else {
	        return this.getToken(tomlParser.NL, i);
	    }
	};


	COMMENT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tomlParser.COMMENT);
	    } else {
	        return this.getToken(tomlParser.COMMENT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.enterComment_or_nl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.exitComment_or_nl(this);
		}
	}


}



class Nl_or_commentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tomlParser.RULE_nl_or_comment;
    }

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tomlParser.NL);
	    } else {
	        return this.getToken(tomlParser.NL, i);
	    }
	};


	COMMENT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tomlParser.COMMENT);
	    } else {
	        return this.getToken(tomlParser.COMMENT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.enterNl_or_comment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.exitNl_or_comment(this);
		}
	}


}



class TableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tomlParser.RULE_table;
    }

	standard_table() {
	    return this.getTypedRuleContext(Standard_tableContext,0);
	};

	array_table() {
	    return this.getTypedRuleContext(Array_tableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.enterTable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.exitTable(this);
		}
	}


}



class Standard_tableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tomlParser.RULE_standard_table;
    }

	key() {
	    return this.getTypedRuleContext(KeyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.enterStandard_table(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.exitStandard_table(this);
		}
	}


}



class Inline_tableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tomlParser.RULE_inline_table;
    }

	inline_table_keyvals() {
	    return this.getTypedRuleContext(Inline_table_keyvalsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.enterInline_table(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.exitInline_table(this);
		}
	}


}



class Inline_table_keyvalsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tomlParser.RULE_inline_table_keyvals;
    }

	inline_table_keyvals_non_empty() {
	    return this.getTypedRuleContext(Inline_table_keyvals_non_emptyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.enterInline_table_keyvals(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.exitInline_table_keyvals(this);
		}
	}


}



class Inline_table_keyvals_non_emptyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tomlParser.RULE_inline_table_keyvals_non_empty;
    }

	key() {
	    return this.getTypedRuleContext(KeyContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	inline_table_keyvals_non_empty() {
	    return this.getTypedRuleContext(Inline_table_keyvals_non_emptyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.enterInline_table_keyvals_non_empty(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.exitInline_table_keyvals_non_empty(this);
		}
	}


}



class Array_tableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tomlParser.RULE_array_table;
    }

	key() {
	    return this.getTypedRuleContext(KeyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.enterArray_table(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tomlListener ) {
	        listener.exitArray_table(this);
		}
	}


}




tomlParser.DocumentContext = DocumentContext; 
tomlParser.ExpressionContext = ExpressionContext; 
tomlParser.CommentContext = CommentContext; 
tomlParser.Key_valueContext = Key_valueContext; 
tomlParser.KeyContext = KeyContext; 
tomlParser.Simple_keyContext = Simple_keyContext; 
tomlParser.Unquoted_keyContext = Unquoted_keyContext; 
tomlParser.Quoted_keyContext = Quoted_keyContext; 
tomlParser.Dotted_keyContext = Dotted_keyContext; 
tomlParser.ValueContext = ValueContext; 
tomlParser.StringContext = StringContext; 
tomlParser.IntegerContext = IntegerContext; 
tomlParser.Floating_pointContext = Floating_pointContext; 
tomlParser.Bool_Context = Bool_Context; 
tomlParser.Date_timeContext = Date_timeContext; 
tomlParser.Array_Context = Array_Context; 
tomlParser.Array_valuesContext = Array_valuesContext; 
tomlParser.Comment_or_nlContext = Comment_or_nlContext; 
tomlParser.Nl_or_commentContext = Nl_or_commentContext; 
tomlParser.TableContext = TableContext; 
tomlParser.Standard_tableContext = Standard_tableContext; 
tomlParser.Inline_tableContext = Inline_tableContext; 
tomlParser.Inline_table_keyvalsContext = Inline_table_keyvalsContext; 
tomlParser.Inline_table_keyvals_non_emptyContext = Inline_table_keyvals_non_emptyContext; 
tomlParser.Array_tableContext = Array_tableContext; 
