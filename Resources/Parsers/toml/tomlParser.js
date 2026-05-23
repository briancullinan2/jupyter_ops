// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/toml/TomlParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import TomlParserListener from './TomlParserListener.js';
const serializedATN = [4,1,32,181,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
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
1,24,0,0,25,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,
44,46,48,0,5,1,0,11,12,2,0,11,12,17,18,1,0,22,25,1,0,19,21,1,0,26,29,178,
0,50,1,0,0,0,2,67,1,0,0,0,4,70,1,0,0,0,6,72,1,0,0,0,8,78,1,0,0,0,10,82,1,
0,0,0,12,84,1,0,0,0,14,86,1,0,0,0,16,88,1,0,0,0,18,102,1,0,0,0,20,104,1,
0,0,0,22,106,1,0,0,0,24,108,1,0,0,0,26,110,1,0,0,0,28,112,1,0,0,0,30,114,
1,0,0,0,32,134,1,0,0,0,34,142,1,0,0,0,36,151,1,0,0,0,38,156,1,0,0,0,40,158,
1,0,0,0,42,162,1,0,0,0,44,167,1,0,0,0,46,169,1,0,0,0,48,176,1,0,0,0,50,55,
3,2,1,0,51,52,5,2,0,0,52,54,3,2,1,0,53,51,1,0,0,0,54,57,1,0,0,0,55,53,1,
0,0,0,55,56,1,0,0,0,56,58,1,0,0,0,57,55,1,0,0,0,58,59,5,0,0,1,59,1,1,0,0,
0,60,61,3,6,3,0,61,62,3,4,2,0,62,68,1,0,0,0,63,64,3,38,19,0,64,65,3,4,2,
0,65,68,1,0,0,0,66,68,3,4,2,0,67,60,1,0,0,0,67,63,1,0,0,0,67,66,1,0,0,0,
68,3,1,0,0,0,69,71,5,3,0,0,70,69,1,0,0,0,70,71,1,0,0,0,71,5,1,0,0,0,72,73,
3,8,4,0,73,74,5,8,0,0,74,75,3,18,9,0,75,7,1,0,0,0,76,79,3,10,5,0,77,79,3,
16,8,0,78,76,1,0,0,0,78,77,1,0,0,0,79,9,1,0,0,0,80,83,3,14,7,0,81,83,3,12,
6,0,82,80,1,0,0,0,82,81,1,0,0,0,83,11,1,0,0,0,84,85,5,13,0,0,85,13,1,0,0,
0,86,87,7,0,0,0,87,15,1,0,0,0,88,91,3,10,5,0,89,90,5,9,0,0,90,92,3,10,5,
0,91,89,1,0,0,0,92,93,1,0,0,0,93,91,1,0,0,0,93,94,1,0,0,0,94,17,1,0,0,0,
95,103,3,20,10,0,96,103,3,22,11,0,97,103,3,24,12,0,98,103,3,26,13,0,99,103,
3,28,14,0,100,103,3,30,15,0,101,103,3,42,21,0,102,95,1,0,0,0,102,96,1,0,
0,0,102,97,1,0,0,0,102,98,1,0,0,0,102,99,1,0,0,0,102,100,1,0,0,0,102,101,
1,0,0,0,103,19,1,0,0,0,104,105,7,1,0,0,105,21,1,0,0,0,106,107,7,2,0,0,107,
23,1,0,0,0,108,109,7,3,0,0,109,25,1,0,0,0,110,111,5,16,0,0,111,27,1,0,0,
0,112,113,7,4,0,0,113,29,1,0,0,0,114,116,5,4,0,0,115,117,3,32,16,0,116,115,
1,0,0,0,116,117,1,0,0,0,117,118,1,0,0,0,118,119,3,34,17,0,119,120,5,6,0,
0,120,31,1,0,0,0,121,122,3,34,17,0,122,123,3,18,9,0,123,124,3,36,18,0,124,
125,5,10,0,0,125,126,3,32,16,0,126,127,3,34,17,0,127,135,1,0,0,0,128,129,
3,34,17,0,129,130,3,18,9,0,130,132,3,36,18,0,131,133,5,10,0,0,132,131,1,
0,0,0,132,133,1,0,0,0,133,135,1,0,0,0,134,121,1,0,0,0,134,128,1,0,0,0,135,
33,1,0,0,0,136,138,5,3,0,0,137,136,1,0,0,0,137,138,1,0,0,0,138,139,1,0,0,
0,139,141,5,2,0,0,140,137,1,0,0,0,141,144,1,0,0,0,142,140,1,0,0,0,142,143,
1,0,0,0,143,35,1,0,0,0,144,142,1,0,0,0,145,147,5,2,0,0,146,148,5,3,0,0,147,
146,1,0,0,0,147,148,1,0,0,0,148,150,1,0,0,0,149,145,1,0,0,0,150,153,1,0,
0,0,151,149,1,0,0,0,151,152,1,0,0,0,152,37,1,0,0,0,153,151,1,0,0,0,154,157,
3,40,20,0,155,157,3,48,24,0,156,154,1,0,0,0,156,155,1,0,0,0,157,39,1,0,0,
0,158,159,5,4,0,0,159,160,3,8,4,0,160,161,5,6,0,0,161,41,1,0,0,0,162,163,
5,15,0,0,163,164,3,44,22,0,164,165,5,31,0,0,165,43,1,0,0,0,166,168,3,46,
23,0,167,166,1,0,0,0,167,168,1,0,0,0,168,45,1,0,0,0,169,170,3,8,4,0,170,
171,5,8,0,0,171,174,3,18,9,0,172,173,5,10,0,0,173,175,3,46,23,0,174,172,
1,0,0,0,174,175,1,0,0,0,175,47,1,0,0,0,176,177,5,5,0,0,177,178,3,8,4,0,178,
179,5,7,0,0,179,49,1,0,0,0,17,55,67,70,78,82,93,102,116,132,134,137,142,
147,151,156,167,174];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class TomlParser extends antlr4.Parser {

    static grammarFileName = "TomlParser.g4";
    static literalNames = [ null, null, null, null, "'['", "'[['", "']'", 
                            "']]'", "'='", "'.'", "','", null, null, null, 
                            null, "'{'", null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, "'}'" ];
    static symbolicNames = [ null, "WS", "NL", "COMMENT", "L_BRACKET", "DOUBLE_L_BRACKET", 
                             "R_BRACKET", "DOUBLE_R_BRACKET", "EQUALS", 
                             "DOT", "COMMA", "BASIC_STRING", "LITERAL_STRING", 
                             "UNQUOTED_KEY", "VALUE_WS", "L_BRACE", "BOOLEAN", 
                             "ML_BASIC_STRING", "ML_LITERAL_STRING", "FLOAT", 
                             "INF", "NAN", "DEC_INT", "HEX_INT", "OCT_INT", 
                             "BIN_INT", "OFFSET_DATE_TIME", "LOCAL_DATE_TIME", 
                             "LOCAL_DATE", "LOCAL_TIME", "INLINE_TABLE_WS", 
                             "R_BRACE", "ARRAY_WS" ];
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
        this.ruleNames = TomlParser.ruleNames;
        this.literalNames = TomlParser.literalNames;
        this.symbolicNames = TomlParser.symbolicNames;
    }



	document() {
	    let localctx = new DocumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, TomlParser.RULE_document);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.expression();
	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 51;
	            this.match(TomlParser.NL);
	            this.state = 52;
	            this.expression();
	            this.state = 57;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 58;
	        this.match(TomlParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 2, TomlParser.RULE_expression);
	    try {
	        this.state = 67;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	        case 12:
	        case 13:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 60;
	            this.key_value();
	            this.state = 61;
	            this.comment();
	            break;
	        case 4:
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 63;
	            this.table();
	            this.state = 64;
	            this.comment();
	            break;
	        case -1:
	        case 2:
	        case 3:
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
	    this.enterRule(localctx, 4, TomlParser.RULE_comment);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 69;
	            this.match(TomlParser.COMMENT);
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
	    this.enterRule(localctx, 6, TomlParser.RULE_key_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.key();
	        this.state = 73;
	        this.match(TomlParser.EQUALS);
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
	    this.enterRule(localctx, 8, TomlParser.RULE_key);
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
	    this.enterRule(localctx, 10, TomlParser.RULE_simple_key);
	    try {
	        this.state = 82;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	        case 12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 80;
	            this.quoted_key();
	            break;
	        case 13:
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
	    this.enterRule(localctx, 12, TomlParser.RULE_unquoted_key);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.match(TomlParser.UNQUOTED_KEY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 14, TomlParser.RULE_quoted_key);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        _la = this._input.LA(1);
	        if(!(_la===11 || _la===12)) {
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
	    this.enterRule(localctx, 16, TomlParser.RULE_dotted_key);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.simple_key();
	        this.state = 91; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 89;
	            this.match(TomlParser.DOT);
	            this.state = 90;
	            this.simple_key();
	            this.state = 93; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 18, TomlParser.RULE_value);
	    try {
	        this.state = 102;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	        case 12:
	        case 17:
	        case 18:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 95;
	            this.string();
	            break;
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 96;
	            this.integer();
	            break;
	        case 19:
	        case 20:
	        case 21:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 97;
	            this.floating_point();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 98;
	            this.bool_();
	            break;
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 99;
	            this.date_time();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 100;
	            this.array_();
	            break;
	        case 15:
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
	    this.enterRule(localctx, 20, TomlParser.RULE_string);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 399360) !== 0))) {
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
	    this.enterRule(localctx, 22, TomlParser.RULE_integer);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 62914560) !== 0))) {
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
	    this.enterRule(localctx, 24, TomlParser.RULE_floating_point);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 3670016) !== 0))) {
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
	    this.enterRule(localctx, 26, TomlParser.RULE_bool_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this.match(TomlParser.BOOLEAN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 28, TomlParser.RULE_date_time);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1006632960) !== 0))) {
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
	    this.enterRule(localctx, 30, TomlParser.RULE_array_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.match(TomlParser.L_BRACKET);
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
	        this.match(TomlParser.R_BRACKET);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 32, TomlParser.RULE_array_values);
	    var _la = 0;
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
	            this.match(TomlParser.COMMA);
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
	            if(_la===10) {
	                this.state = 131;
	                this.match(TomlParser.COMMA);
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
	    this.enterRule(localctx, 34, TomlParser.RULE_comment_or_nl);
	    var _la = 0;
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
	                if(_la===3) {
	                    this.state = 136;
	                    this.match(TomlParser.COMMENT);
	                }

	                this.state = 139;
	                this.match(TomlParser.NL); 
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
	    this.enterRule(localctx, 36, TomlParser.RULE_nl_or_comment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 145;
	                this.match(TomlParser.NL);
	                this.state = 147;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	                if(la_===1) {
	                    this.state = 146;
	                    this.match(TomlParser.COMMENT);

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
	    this.enterRule(localctx, 38, TomlParser.RULE_table);
	    try {
	        this.state = 156;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 154;
	            this.standard_table();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 155;
	            this.array_table();
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



	standard_table() {
	    let localctx = new Standard_tableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, TomlParser.RULE_standard_table);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        this.match(TomlParser.L_BRACKET);
	        this.state = 159;
	        this.key();
	        this.state = 160;
	        this.match(TomlParser.R_BRACKET);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 42, TomlParser.RULE_inline_table);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        this.match(TomlParser.L_BRACE);
	        this.state = 163;
	        this.inline_table_keyvals();
	        this.state = 164;
	        this.match(TomlParser.R_BRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 44, TomlParser.RULE_inline_table_keyvals);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 14336) !== 0)) {
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
	    this.enterRule(localctx, 46, TomlParser.RULE_inline_table_keyvals_non_empty);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 169;
	        this.key();
	        this.state = 170;
	        this.match(TomlParser.EQUALS);
	        this.state = 171;
	        this.value();
	        this.state = 174;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===10) {
	            this.state = 172;
	            this.match(TomlParser.COMMA);
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
	    this.enterRule(localctx, 48, TomlParser.RULE_array_table);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 176;
	        this.match(TomlParser.DOUBLE_L_BRACKET);
	        this.state = 177;
	        this.key();
	        this.state = 178;
	        this.match(TomlParser.DOUBLE_R_BRACKET);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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

TomlParser.EOF = antlr4.Token.EOF;
TomlParser.WS = 1;
TomlParser.NL = 2;
TomlParser.COMMENT = 3;
TomlParser.L_BRACKET = 4;
TomlParser.DOUBLE_L_BRACKET = 5;
TomlParser.R_BRACKET = 6;
TomlParser.DOUBLE_R_BRACKET = 7;
TomlParser.EQUALS = 8;
TomlParser.DOT = 9;
TomlParser.COMMA = 10;
TomlParser.BASIC_STRING = 11;
TomlParser.LITERAL_STRING = 12;
TomlParser.UNQUOTED_KEY = 13;
TomlParser.VALUE_WS = 14;
TomlParser.L_BRACE = 15;
TomlParser.BOOLEAN = 16;
TomlParser.ML_BASIC_STRING = 17;
TomlParser.ML_LITERAL_STRING = 18;
TomlParser.FLOAT = 19;
TomlParser.INF = 20;
TomlParser.NAN = 21;
TomlParser.DEC_INT = 22;
TomlParser.HEX_INT = 23;
TomlParser.OCT_INT = 24;
TomlParser.BIN_INT = 25;
TomlParser.OFFSET_DATE_TIME = 26;
TomlParser.LOCAL_DATE_TIME = 27;
TomlParser.LOCAL_DATE = 28;
TomlParser.LOCAL_TIME = 29;
TomlParser.INLINE_TABLE_WS = 30;
TomlParser.R_BRACE = 31;
TomlParser.ARRAY_WS = 32;

TomlParser.RULE_document = 0;
TomlParser.RULE_expression = 1;
TomlParser.RULE_comment = 2;
TomlParser.RULE_key_value = 3;
TomlParser.RULE_key = 4;
TomlParser.RULE_simple_key = 5;
TomlParser.RULE_unquoted_key = 6;
TomlParser.RULE_quoted_key = 7;
TomlParser.RULE_dotted_key = 8;
TomlParser.RULE_value = 9;
TomlParser.RULE_string = 10;
TomlParser.RULE_integer = 11;
TomlParser.RULE_floating_point = 12;
TomlParser.RULE_bool_ = 13;
TomlParser.RULE_date_time = 14;
TomlParser.RULE_array_ = 15;
TomlParser.RULE_array_values = 16;
TomlParser.RULE_comment_or_nl = 17;
TomlParser.RULE_nl_or_comment = 18;
TomlParser.RULE_table = 19;
TomlParser.RULE_standard_table = 20;
TomlParser.RULE_inline_table = 21;
TomlParser.RULE_inline_table_keyvals = 22;
TomlParser.RULE_inline_table_keyvals_non_empty = 23;
TomlParser.RULE_array_table = 24;

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
        this.ruleIndex = TomlParser.RULE_document;
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
	    return this.getToken(TomlParser.EOF, 0);
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TomlParser.NL);
	    } else {
	        return this.getToken(TomlParser.NL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TomlParserListener ) {
	        listener.enterDocument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TomlParserListener ) {
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
        this.ruleIndex = TomlParser.RULE_expression;
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
	    if(listener instanceof TomlParserListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TomlParserListener ) {
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
        this.ruleIndex = TomlParser.RULE_comment;
    }

	COMMENT() {
	    return this.getToken(TomlParser.COMMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TomlParserListener ) {
	        listener.enterComment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TomlParserListener ) {
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
        this.ruleIndex = TomlParser.RULE_key_value;
    }

	key() {
	    return this.getTypedRuleContext(KeyContext,0);
	};

	EQUALS() {
	    return this.getToken(TomlParser.EQUALS, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TomlParserListener ) {
	        listener.enterKey_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TomlParserListener ) {
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
        this.ruleIndex = TomlParser.RULE_key;
    }

	simple_key() {
	    return this.getTypedRuleContext(Simple_keyContext,0);
	};

	dotted_key() {
	    return this.getTypedRuleContext(Dotted_keyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TomlParserListener ) {
	        listener.enterKey(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TomlParserListener ) {
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
        this.ruleIndex = TomlParser.RULE_simple_key;
    }

	quoted_key() {
	    return this.getTypedRuleContext(Quoted_keyContext,0);
	};

	unquoted_key() {
	    return this.getTypedRuleContext(Unquoted_keyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TomlParserListener ) {
	        listener.enterSimple_key(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TomlParserListener ) {
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
        this.ruleIndex = TomlParser.RULE_unquoted_key;
    }

	UNQUOTED_KEY() {
	    return this.getToken(TomlParser.UNQUOTED_KEY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TomlParserListener ) {
	        listener.enterUnquoted_key(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TomlParserListener ) {
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
        this.ruleIndex = TomlParser.RULE_quoted_key;
    }

	BASIC_STRING() {
	    return this.getToken(TomlParser.BASIC_STRING, 0);
	};

	LITERAL_STRING() {
	    return this.getToken(TomlParser.LITERAL_STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TomlParserListener ) {
	        listener.enterQuoted_key(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TomlParserListener ) {
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
        this.ruleIndex = TomlParser.RULE_dotted_key;
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

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TomlParser.DOT);
	    } else {
	        return this.getToken(TomlParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TomlParserListener ) {
	        listener.enterDotted_key(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TomlParserListener ) {
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
        this.ruleIndex = TomlParser.RULE_value;
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
	    if(listener instanceof TomlParserListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TomlParserListener ) {
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
        this.ruleIndex = TomlParser.RULE_string;
    }

	BASIC_STRING() {
	    return this.getToken(TomlParser.BASIC_STRING, 0);
	};

	ML_BASIC_STRING() {
	    return this.getToken(TomlParser.ML_BASIC_STRING, 0);
	};

	LITERAL_STRING() {
	    return this.getToken(TomlParser.LITERAL_STRING, 0);
	};

	ML_LITERAL_STRING() {
	    return this.getToken(TomlParser.ML_LITERAL_STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TomlParserListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TomlParserListener ) {
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
        this.ruleIndex = TomlParser.RULE_integer;
    }

	DEC_INT() {
	    return this.getToken(TomlParser.DEC_INT, 0);
	};

	HEX_INT() {
	    return this.getToken(TomlParser.HEX_INT, 0);
	};

	OCT_INT() {
	    return this.getToken(TomlParser.OCT_INT, 0);
	};

	BIN_INT() {
	    return this.getToken(TomlParser.BIN_INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TomlParserListener ) {
	        listener.enterInteger(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TomlParserListener ) {
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
        this.ruleIndex = TomlParser.RULE_floating_point;
    }

	FLOAT() {
	    return this.getToken(TomlParser.FLOAT, 0);
	};

	INF() {
	    return this.getToken(TomlParser.INF, 0);
	};

	NAN() {
	    return this.getToken(TomlParser.NAN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TomlParserListener ) {
	        listener.enterFloating_point(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TomlParserListener ) {
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
        this.ruleIndex = TomlParser.RULE_bool_;
    }

	BOOLEAN() {
	    return this.getToken(TomlParser.BOOLEAN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TomlParserListener ) {
	        listener.enterBool_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TomlParserListener ) {
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
        this.ruleIndex = TomlParser.RULE_date_time;
    }

	OFFSET_DATE_TIME() {
	    return this.getToken(TomlParser.OFFSET_DATE_TIME, 0);
	};

	LOCAL_DATE_TIME() {
	    return this.getToken(TomlParser.LOCAL_DATE_TIME, 0);
	};

	LOCAL_DATE() {
	    return this.getToken(TomlParser.LOCAL_DATE, 0);
	};

	LOCAL_TIME() {
	    return this.getToken(TomlParser.LOCAL_TIME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TomlParserListener ) {
	        listener.enterDate_time(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TomlParserListener ) {
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
        this.ruleIndex = TomlParser.RULE_array_;
    }

	L_BRACKET() {
	    return this.getToken(TomlParser.L_BRACKET, 0);
	};

	comment_or_nl() {
	    return this.getTypedRuleContext(Comment_or_nlContext,0);
	};

	R_BRACKET() {
	    return this.getToken(TomlParser.R_BRACKET, 0);
	};

	array_values() {
	    return this.getTypedRuleContext(Array_valuesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TomlParserListener ) {
	        listener.enterArray_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TomlParserListener ) {
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
        this.ruleIndex = TomlParser.RULE_array_values;
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

	COMMA() {
	    return this.getToken(TomlParser.COMMA, 0);
	};

	array_values() {
	    return this.getTypedRuleContext(Array_valuesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TomlParserListener ) {
	        listener.enterArray_values(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TomlParserListener ) {
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
        this.ruleIndex = TomlParser.RULE_comment_or_nl;
    }

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TomlParser.NL);
	    } else {
	        return this.getToken(TomlParser.NL, i);
	    }
	};


	COMMENT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TomlParser.COMMENT);
	    } else {
	        return this.getToken(TomlParser.COMMENT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TomlParserListener ) {
	        listener.enterComment_or_nl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TomlParserListener ) {
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
        this.ruleIndex = TomlParser.RULE_nl_or_comment;
    }

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TomlParser.NL);
	    } else {
	        return this.getToken(TomlParser.NL, i);
	    }
	};


	COMMENT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TomlParser.COMMENT);
	    } else {
	        return this.getToken(TomlParser.COMMENT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TomlParserListener ) {
	        listener.enterNl_or_comment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TomlParserListener ) {
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
        this.ruleIndex = TomlParser.RULE_table;
    }

	standard_table() {
	    return this.getTypedRuleContext(Standard_tableContext,0);
	};

	array_table() {
	    return this.getTypedRuleContext(Array_tableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TomlParserListener ) {
	        listener.enterTable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TomlParserListener ) {
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
        this.ruleIndex = TomlParser.RULE_standard_table;
    }

	L_BRACKET() {
	    return this.getToken(TomlParser.L_BRACKET, 0);
	};

	key() {
	    return this.getTypedRuleContext(KeyContext,0);
	};

	R_BRACKET() {
	    return this.getToken(TomlParser.R_BRACKET, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TomlParserListener ) {
	        listener.enterStandard_table(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TomlParserListener ) {
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
        this.ruleIndex = TomlParser.RULE_inline_table;
    }

	L_BRACE() {
	    return this.getToken(TomlParser.L_BRACE, 0);
	};

	inline_table_keyvals() {
	    return this.getTypedRuleContext(Inline_table_keyvalsContext,0);
	};

	R_BRACE() {
	    return this.getToken(TomlParser.R_BRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TomlParserListener ) {
	        listener.enterInline_table(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TomlParserListener ) {
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
        this.ruleIndex = TomlParser.RULE_inline_table_keyvals;
    }

	inline_table_keyvals_non_empty() {
	    return this.getTypedRuleContext(Inline_table_keyvals_non_emptyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TomlParserListener ) {
	        listener.enterInline_table_keyvals(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TomlParserListener ) {
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
        this.ruleIndex = TomlParser.RULE_inline_table_keyvals_non_empty;
    }

	key() {
	    return this.getTypedRuleContext(KeyContext,0);
	};

	EQUALS() {
	    return this.getToken(TomlParser.EQUALS, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	COMMA() {
	    return this.getToken(TomlParser.COMMA, 0);
	};

	inline_table_keyvals_non_empty() {
	    return this.getTypedRuleContext(Inline_table_keyvals_non_emptyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TomlParserListener ) {
	        listener.enterInline_table_keyvals_non_empty(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TomlParserListener ) {
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
        this.ruleIndex = TomlParser.RULE_array_table;
    }

	DOUBLE_L_BRACKET() {
	    return this.getToken(TomlParser.DOUBLE_L_BRACKET, 0);
	};

	key() {
	    return this.getTypedRuleContext(KeyContext,0);
	};

	DOUBLE_R_BRACKET() {
	    return this.getToken(TomlParser.DOUBLE_R_BRACKET, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TomlParserListener ) {
	        listener.enterArray_table(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TomlParserListener ) {
	        listener.exitArray_table(this);
		}
	}


}




TomlParser.DocumentContext = DocumentContext; 
TomlParser.ExpressionContext = ExpressionContext; 
TomlParser.CommentContext = CommentContext; 
TomlParser.Key_valueContext = Key_valueContext; 
TomlParser.KeyContext = KeyContext; 
TomlParser.Simple_keyContext = Simple_keyContext; 
TomlParser.Unquoted_keyContext = Unquoted_keyContext; 
TomlParser.Quoted_keyContext = Quoted_keyContext; 
TomlParser.Dotted_keyContext = Dotted_keyContext; 
TomlParser.ValueContext = ValueContext; 
TomlParser.StringContext = StringContext; 
TomlParser.IntegerContext = IntegerContext; 
TomlParser.Floating_pointContext = Floating_pointContext; 
TomlParser.Bool_Context = Bool_Context; 
TomlParser.Date_timeContext = Date_timeContext; 
TomlParser.Array_Context = Array_Context; 
TomlParser.Array_valuesContext = Array_valuesContext; 
TomlParser.Comment_or_nlContext = Comment_or_nlContext; 
TomlParser.Nl_or_commentContext = Nl_or_commentContext; 
TomlParser.TableContext = TableContext; 
TomlParser.Standard_tableContext = Standard_tableContext; 
TomlParser.Inline_tableContext = Inline_tableContext; 
TomlParser.Inline_table_keyvalsContext = Inline_table_keyvalsContext; 
TomlParser.Inline_table_keyvals_non_emptyContext = Inline_table_keyvals_non_emptyContext; 
TomlParser.Array_tableContext = Array_tableContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
