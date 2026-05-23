// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/http/http.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import httpListener from './httpListener.js';
const serializedATN = [4,1,33,180,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,1,0,1,0,1,0,1,
0,5,0,57,8,0,10,0,12,0,60,9,0,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,
2,1,3,1,3,1,4,1,4,1,5,1,5,1,5,3,5,80,8,5,1,6,1,6,4,6,84,8,6,11,6,12,6,85,
1,7,5,7,89,8,7,10,7,12,7,92,9,7,1,8,1,8,1,8,5,8,97,8,8,10,8,12,8,100,9,8,
1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,12,4,12,
117,8,12,11,12,12,12,118,1,13,1,13,1,14,1,14,5,14,125,8,14,10,14,12,14,128,
9,14,1,15,1,15,4,15,132,8,15,11,15,12,15,133,1,15,5,15,137,8,15,10,15,12,
15,140,9,15,1,16,5,16,143,8,16,10,16,12,16,146,9,16,1,17,1,17,3,17,150,8,
17,1,18,1,18,1,19,1,19,4,19,156,8,19,11,19,12,19,157,1,20,1,20,1,20,1,20,
1,20,1,20,3,20,166,8,20,1,21,1,21,1,21,1,21,1,22,1,22,1,23,1,23,1,24,1,24,
1,25,1,25,1,25,0,0,26,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
38,40,42,44,46,48,50,0,6,3,0,7,10,13,13,16,28,1,0,31,32,1,0,26,27,3,0,7,
10,26,26,28,28,5,0,2,6,13,13,16,16,18,18,20,22,1,0,2,29,173,0,52,1,0,0,0,
2,63,1,0,0,0,4,65,1,0,0,0,6,72,1,0,0,0,8,74,1,0,0,0,10,76,1,0,0,0,12,83,
1,0,0,0,14,90,1,0,0,0,16,98,1,0,0,0,18,101,1,0,0,0,20,107,1,0,0,0,22,113,
1,0,0,0,24,116,1,0,0,0,26,120,1,0,0,0,28,126,1,0,0,0,30,129,1,0,0,0,32,144,
1,0,0,0,34,149,1,0,0,0,36,151,1,0,0,0,38,153,1,0,0,0,40,165,1,0,0,0,42,167,
1,0,0,0,44,171,1,0,0,0,46,173,1,0,0,0,48,175,1,0,0,0,50,177,1,0,0,0,52,58,
3,2,1,0,53,54,3,20,10,0,54,55,5,33,0,0,55,57,1,0,0,0,56,53,1,0,0,0,57,60,
1,0,0,0,58,56,1,0,0,0,58,59,1,0,0,0,59,61,1,0,0,0,60,58,1,0,0,0,61,62,5,
0,0,1,62,1,1,0,0,0,63,64,3,4,2,0,64,3,1,0,0,0,65,66,3,6,3,0,66,67,5,31,0,
0,67,68,3,8,4,0,68,69,5,31,0,0,69,70,3,18,9,0,70,71,5,33,0,0,71,5,1,0,0,
0,72,73,3,24,12,0,73,7,1,0,0,0,74,75,3,10,5,0,75,9,1,0,0,0,76,79,3,12,6,
0,77,78,5,11,0,0,78,80,3,16,8,0,79,77,1,0,0,0,79,80,1,0,0,0,80,11,1,0,0,
0,81,82,5,12,0,0,82,84,3,14,7,0,83,81,1,0,0,0,84,85,1,0,0,0,85,83,1,0,0,
0,85,86,1,0,0,0,86,13,1,0,0,0,87,89,3,40,20,0,88,87,1,0,0,0,89,92,1,0,0,
0,90,88,1,0,0,0,90,91,1,0,0,0,91,15,1,0,0,0,92,90,1,0,0,0,93,97,3,40,20,
0,94,97,5,12,0,0,95,97,5,11,0,0,96,93,1,0,0,0,96,94,1,0,0,0,96,95,1,0,0,
0,97,100,1,0,0,0,98,96,1,0,0,0,98,99,1,0,0,0,99,17,1,0,0,0,100,98,1,0,0,
0,101,102,5,1,0,0,102,103,5,12,0,0,103,104,5,26,0,0,104,105,5,8,0,0,105,
106,5,26,0,0,106,19,1,0,0,0,107,108,3,22,11,0,108,109,5,14,0,0,109,110,3,
32,16,0,110,111,3,28,14,0,111,112,3,32,16,0,112,21,1,0,0,0,113,114,3,24,
12,0,114,23,1,0,0,0,115,117,3,26,13,0,116,115,1,0,0,0,117,118,1,0,0,0,118,
116,1,0,0,0,118,119,1,0,0,0,119,25,1,0,0,0,120,121,7,0,0,0,121,27,1,0,0,
0,122,125,3,30,15,0,123,125,3,38,19,0,124,122,1,0,0,0,124,123,1,0,0,0,125,
128,1,0,0,0,126,124,1,0,0,0,126,127,1,0,0,0,127,29,1,0,0,0,128,126,1,0,0,
0,129,138,3,34,17,0,130,132,7,1,0,0,131,130,1,0,0,0,132,133,1,0,0,0,133,
131,1,0,0,0,133,134,1,0,0,0,134,135,1,0,0,0,135,137,3,34,17,0,136,131,1,
0,0,0,137,140,1,0,0,0,138,136,1,0,0,0,138,139,1,0,0,0,139,31,1,0,0,0,140,
138,1,0,0,0,141,143,7,1,0,0,142,141,1,0,0,0,143,146,1,0,0,0,144,142,1,0,
0,0,144,145,1,0,0,0,145,33,1,0,0,0,146,144,1,0,0,0,147,150,3,50,25,0,148,
150,3,36,18,0,149,147,1,0,0,0,149,148,1,0,0,0,150,35,1,0,0,0,151,152,5,30,
0,0,152,37,1,0,0,0,153,155,5,33,0,0,154,156,7,1,0,0,155,154,1,0,0,0,156,
157,1,0,0,0,157,155,1,0,0,0,157,158,1,0,0,0,158,39,1,0,0,0,159,166,3,46,
23,0,160,166,3,42,21,0,161,166,3,48,24,0,162,166,3,44,22,0,163,166,5,14,
0,0,164,166,5,15,0,0,165,159,1,0,0,0,165,160,1,0,0,0,165,161,1,0,0,0,165,
162,1,0,0,0,165,163,1,0,0,0,165,164,1,0,0,0,166,41,1,0,0,0,167,168,5,19,
0,0,168,169,3,44,22,0,169,170,3,44,22,0,170,43,1,0,0,0,171,172,7,2,0,0,172,
45,1,0,0,0,173,174,7,3,0,0,174,47,1,0,0,0,175,176,7,4,0,0,176,49,1,0,0,0,
177,178,7,5,0,0,178,51,1,0,0,0,15,58,79,85,90,96,98,118,124,126,133,138,
144,149,157,165];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class httpParser extends antlr4.Parser {

    static grammarFileName = "http.g4";
    static literalNames = [ null, "'HTTP'", "'('", "')'", "';'", "'='", 
                            "','", "'-'", "'.'", "'_'", "'~'", "'?'", "'/'", 
                            "'!'", "':'", "'@'", "'$'", "'#'", "'&'", "'%'", 
                            "'''", "'*'", "'+'", "'^'", "'`'", "'|'", null, 
                            null, null, null, null, "' '", "'\\t'" ];
    static symbolicNames = [ null, null, "LCOLUMN", "RCOLUMN", "SEMICOLON", 
                             "EQUALS", "PERIOD", "MINUS", "DOT", "UNDERSCORE", 
                             "TILDE", "QUESTION_MARK", "SLASH", "EXCLAMATION_MARK", 
                             "COLON", "AT", "DOLLAR_SIGN", "HASHTAG", "AMPERSAND", 
                             "PERCENT", "SQUOTE", "STAR", "PLUS", "CARET", 
                             "BACK_QUOTE", "VBAR", "DIGIT", "HEX_LETTER", 
                             "ALPHA", "VCHAR", "OBS_TEXT", "SP", "HTAB", 
                             "CRLF" ];
    static ruleNames = [ "http_message", "start_line", "request_line", "method", 
                         "request_target", "origin_form", "absolute_path", 
                         "segment", "query", "http_version", "header_field", 
                         "field_name", "token", "tchar", "field_value", 
                         "field_content", "ows", "field_vchar", "obs_text", 
                         "obs_fold", "pchar", "pct_encoded", "hexdig", "unreserved", 
                         "sub_delims", "vchar" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = httpParser.ruleNames;
        this.literalNames = httpParser.literalNames;
        this.symbolicNames = httpParser.symbolicNames;
    }



	http_message() {
	    let localctx = new Http_messageContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, httpParser.RULE_http_message);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.start_line();
	        this.state = 58;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 536815488) !== 0)) {
	            this.state = 53;
	            this.header_field();
	            this.state = 54;
	            this.match(httpParser.CRLF);
	            this.state = 60;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 61;
	        this.match(httpParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	start_line() {
	    let localctx = new Start_lineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, httpParser.RULE_start_line);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.request_line();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	request_line() {
	    let localctx = new Request_lineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, httpParser.RULE_request_line);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.method();
	        this.state = 66;
	        this.match(httpParser.SP);
	        this.state = 67;
	        this.request_target();
	        this.state = 68;
	        this.match(httpParser.SP);
	        this.state = 69;
	        this.http_version();
	        this.state = 70;
	        this.match(httpParser.CRLF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	method() {
	    let localctx = new MethodContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, httpParser.RULE_method);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.token();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	request_target() {
	    let localctx = new Request_targetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, httpParser.RULE_request_target);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.origin_form();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	origin_form() {
	    let localctx = new Origin_formContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, httpParser.RULE_origin_form);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.absolute_path();
	        this.state = 79;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 77;
	            this.match(httpParser.QUESTION_MARK);
	            this.state = 78;
	            this.query();
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



	absolute_path() {
	    let localctx = new Absolute_pathContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, httpParser.RULE_absolute_path);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 81;
	            this.match(httpParser.SLASH);
	            this.state = 82;
	            this.segment();
	            this.state = 85; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===12);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	segment() {
	    let localctx = new SegmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, httpParser.RULE_segment);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 478013436) !== 0)) {
	            this.state = 87;
	            this.pchar();
	            this.state = 92;
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



	query() {
	    let localctx = new QueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, httpParser.RULE_query);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 478019580) !== 0)) {
	            this.state = 96;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 2:
	            case 3:
	            case 4:
	            case 5:
	            case 6:
	            case 7:
	            case 8:
	            case 9:
	            case 10:
	            case 13:
	            case 14:
	            case 15:
	            case 16:
	            case 18:
	            case 19:
	            case 20:
	            case 21:
	            case 22:
	            case 26:
	            case 27:
	            case 28:
	                this.state = 93;
	                this.pchar();
	                break;
	            case 12:
	                this.state = 94;
	                this.match(httpParser.SLASH);
	                break;
	            case 11:
	                this.state = 95;
	                this.match(httpParser.QUESTION_MARK);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
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



	http_version() {
	    let localctx = new Http_versionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, httpParser.RULE_http_version);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.match(httpParser.T__0);
	        this.state = 102;
	        this.match(httpParser.SLASH);
	        this.state = 103;
	        this.match(httpParser.DIGIT);
	        this.state = 104;
	        this.match(httpParser.DOT);
	        this.state = 105;
	        this.match(httpParser.DIGIT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	header_field() {
	    let localctx = new Header_fieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, httpParser.RULE_header_field);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this.field_name();
	        this.state = 108;
	        this.match(httpParser.COLON);
	        this.state = 109;
	        this.ows();
	        this.state = 110;
	        this.field_value();
	        this.state = 111;
	        this.ows();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	field_name() {
	    let localctx = new Field_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, httpParser.RULE_field_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        this.token();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	token() {
	    let localctx = new TokenContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, httpParser.RULE_token);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 115;
	            this.tchar();
	            this.state = 118; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 536815488) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tchar() {
	    let localctx = new TcharContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, httpParser.RULE_tchar);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 536815488) !== 0))) {
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



	field_value() {
	    let localctx = new Field_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, httpParser.RULE_field_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 124;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 2:
	                case 3:
	                case 4:
	                case 5:
	                case 6:
	                case 7:
	                case 8:
	                case 9:
	                case 10:
	                case 11:
	                case 12:
	                case 13:
	                case 14:
	                case 15:
	                case 16:
	                case 17:
	                case 18:
	                case 19:
	                case 20:
	                case 21:
	                case 22:
	                case 23:
	                case 24:
	                case 25:
	                case 26:
	                case 27:
	                case 28:
	                case 29:
	                case 30:
	                    this.state = 122;
	                    this.field_content();
	                    break;
	                case 33:
	                    this.state = 123;
	                    this.obs_fold();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                } 
	            }
	            this.state = 128;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
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



	field_content() {
	    let localctx = new Field_contentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, httpParser.RULE_field_content);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this.field_vchar();
	        this.state = 138;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 131; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                do {
	                    this.state = 130;
	                    _la = this._input.LA(1);
	                    if(!(_la===31 || _la===32)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 133; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                } while(_la===31 || _la===32);
	                this.state = 135;
	                this.field_vchar(); 
	            }
	            this.state = 140;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
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



	ows() {
	    let localctx = new OwsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, httpParser.RULE_ows);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 141;
	                _la = this._input.LA(1);
	                if(!(_la===31 || _la===32)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                } 
	            }
	            this.state = 146;
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



	field_vchar() {
	    let localctx = new Field_vcharContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, httpParser.RULE_field_vchar);
	    try {
	        this.state = 149;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	        case 16:
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 147;
	            this.vchar();
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 148;
	            this.obs_text();
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



	obs_text() {
	    let localctx = new Obs_textContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, httpParser.RULE_obs_text);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        this.match(httpParser.OBS_TEXT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	obs_fold() {
	    let localctx = new Obs_foldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, httpParser.RULE_obs_fold);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        this.match(httpParser.CRLF);
	        this.state = 155; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 154;
	        		_la = this._input.LA(1);
	        		if(!(_la===31 || _la===32)) {
	        		this._errHandler.recoverInline(this);
	        		}
	        		else {
	        			this._errHandler.reportMatch(this);
	        		    this.consume();
	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 157; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,13, this._ctx);
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



	pchar() {
	    let localctx = new PcharContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, httpParser.RULE_pchar);
	    try {
	        this.state = 165;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 159;
	            this.unreserved();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 160;
	            this.pct_encoded();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 161;
	            this.sub_delims();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 162;
	            this.hexdig();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 163;
	            this.match(httpParser.COLON);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 164;
	            this.match(httpParser.AT);
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



	pct_encoded() {
	    let localctx = new Pct_encodedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, httpParser.RULE_pct_encoded);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this.match(httpParser.PERCENT);
	        this.state = 168;
	        this.hexdig();
	        this.state = 169;
	        this.hexdig();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	hexdig() {
	    let localctx = new HexdigContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, httpParser.RULE_hexdig);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 171;
	        _la = this._input.LA(1);
	        if(!(_la===26 || _la===27)) {
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



	unreserved() {
	    let localctx = new UnreservedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, httpParser.RULE_unreserved);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 173;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 335546240) !== 0))) {
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



	sub_delims() {
	    let localctx = new Sub_delimsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, httpParser.RULE_sub_delims);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 175;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 7676028) !== 0))) {
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



	vchar() {
	    let localctx = new VcharContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, httpParser.RULE_vchar);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 177;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1073741820) !== 0))) {
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

httpParser.EOF = antlr4.Token.EOF;
httpParser.T__0 = 1;
httpParser.LCOLUMN = 2;
httpParser.RCOLUMN = 3;
httpParser.SEMICOLON = 4;
httpParser.EQUALS = 5;
httpParser.PERIOD = 6;
httpParser.MINUS = 7;
httpParser.DOT = 8;
httpParser.UNDERSCORE = 9;
httpParser.TILDE = 10;
httpParser.QUESTION_MARK = 11;
httpParser.SLASH = 12;
httpParser.EXCLAMATION_MARK = 13;
httpParser.COLON = 14;
httpParser.AT = 15;
httpParser.DOLLAR_SIGN = 16;
httpParser.HASHTAG = 17;
httpParser.AMPERSAND = 18;
httpParser.PERCENT = 19;
httpParser.SQUOTE = 20;
httpParser.STAR = 21;
httpParser.PLUS = 22;
httpParser.CARET = 23;
httpParser.BACK_QUOTE = 24;
httpParser.VBAR = 25;
httpParser.DIGIT = 26;
httpParser.HEX_LETTER = 27;
httpParser.ALPHA = 28;
httpParser.VCHAR = 29;
httpParser.OBS_TEXT = 30;
httpParser.SP = 31;
httpParser.HTAB = 32;
httpParser.CRLF = 33;

httpParser.RULE_http_message = 0;
httpParser.RULE_start_line = 1;
httpParser.RULE_request_line = 2;
httpParser.RULE_method = 3;
httpParser.RULE_request_target = 4;
httpParser.RULE_origin_form = 5;
httpParser.RULE_absolute_path = 6;
httpParser.RULE_segment = 7;
httpParser.RULE_query = 8;
httpParser.RULE_http_version = 9;
httpParser.RULE_header_field = 10;
httpParser.RULE_field_name = 11;
httpParser.RULE_token = 12;
httpParser.RULE_tchar = 13;
httpParser.RULE_field_value = 14;
httpParser.RULE_field_content = 15;
httpParser.RULE_ows = 16;
httpParser.RULE_field_vchar = 17;
httpParser.RULE_obs_text = 18;
httpParser.RULE_obs_fold = 19;
httpParser.RULE_pchar = 20;
httpParser.RULE_pct_encoded = 21;
httpParser.RULE_hexdig = 22;
httpParser.RULE_unreserved = 23;
httpParser.RULE_sub_delims = 24;
httpParser.RULE_vchar = 25;

class Http_messageContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = httpParser.RULE_http_message;
    }

	start_line() {
	    return this.getTypedRuleContext(Start_lineContext,0);
	};

	EOF() {
	    return this.getToken(httpParser.EOF, 0);
	};

	header_field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Header_fieldContext);
	    } else {
	        return this.getTypedRuleContext(Header_fieldContext,i);
	    }
	};

	CRLF = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(httpParser.CRLF);
	    } else {
	        return this.getToken(httpParser.CRLF, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.enterHttp_message(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.exitHttp_message(this);
		}
	}


}



class Start_lineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = httpParser.RULE_start_line;
    }

	request_line() {
	    return this.getTypedRuleContext(Request_lineContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.enterStart_line(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.exitStart_line(this);
		}
	}


}



class Request_lineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = httpParser.RULE_request_line;
    }

	method() {
	    return this.getTypedRuleContext(MethodContext,0);
	};

	SP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(httpParser.SP);
	    } else {
	        return this.getToken(httpParser.SP, i);
	    }
	};


	request_target() {
	    return this.getTypedRuleContext(Request_targetContext,0);
	};

	http_version() {
	    return this.getTypedRuleContext(Http_versionContext,0);
	};

	CRLF() {
	    return this.getToken(httpParser.CRLF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.enterRequest_line(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.exitRequest_line(this);
		}
	}


}



class MethodContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = httpParser.RULE_method;
    }

	token() {
	    return this.getTypedRuleContext(TokenContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.enterMethod(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.exitMethod(this);
		}
	}


}



class Request_targetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = httpParser.RULE_request_target;
    }

	origin_form() {
	    return this.getTypedRuleContext(Origin_formContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.enterRequest_target(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.exitRequest_target(this);
		}
	}


}



class Origin_formContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = httpParser.RULE_origin_form;
    }

	absolute_path() {
	    return this.getTypedRuleContext(Absolute_pathContext,0);
	};

	QUESTION_MARK() {
	    return this.getToken(httpParser.QUESTION_MARK, 0);
	};

	query() {
	    return this.getTypedRuleContext(QueryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.enterOrigin_form(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.exitOrigin_form(this);
		}
	}


}



class Absolute_pathContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = httpParser.RULE_absolute_path;
    }

	SLASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(httpParser.SLASH);
	    } else {
	        return this.getToken(httpParser.SLASH, i);
	    }
	};


	segment = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SegmentContext);
	    } else {
	        return this.getTypedRuleContext(SegmentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.enterAbsolute_path(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.exitAbsolute_path(this);
		}
	}


}



class SegmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = httpParser.RULE_segment;
    }

	pchar = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PcharContext);
	    } else {
	        return this.getTypedRuleContext(PcharContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.enterSegment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.exitSegment(this);
		}
	}


}



class QueryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = httpParser.RULE_query;
    }

	pchar = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PcharContext);
	    } else {
	        return this.getTypedRuleContext(PcharContext,i);
	    }
	};

	SLASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(httpParser.SLASH);
	    } else {
	        return this.getToken(httpParser.SLASH, i);
	    }
	};


	QUESTION_MARK = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(httpParser.QUESTION_MARK);
	    } else {
	        return this.getToken(httpParser.QUESTION_MARK, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.enterQuery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.exitQuery(this);
		}
	}


}



class Http_versionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = httpParser.RULE_http_version;
    }

	SLASH() {
	    return this.getToken(httpParser.SLASH, 0);
	};

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(httpParser.DIGIT);
	    } else {
	        return this.getToken(httpParser.DIGIT, i);
	    }
	};


	DOT() {
	    return this.getToken(httpParser.DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.enterHttp_version(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.exitHttp_version(this);
		}
	}


}



class Header_fieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = httpParser.RULE_header_field;
    }

	field_name() {
	    return this.getTypedRuleContext(Field_nameContext,0);
	};

	COLON() {
	    return this.getToken(httpParser.COLON, 0);
	};

	ows = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OwsContext);
	    } else {
	        return this.getTypedRuleContext(OwsContext,i);
	    }
	};

	field_value() {
	    return this.getTypedRuleContext(Field_valueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.enterHeader_field(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.exitHeader_field(this);
		}
	}


}



class Field_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = httpParser.RULE_field_name;
    }

	token() {
	    return this.getTypedRuleContext(TokenContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.enterField_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.exitField_name(this);
		}
	}


}



class TokenContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = httpParser.RULE_token;
    }

	tchar = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TcharContext);
	    } else {
	        return this.getTypedRuleContext(TcharContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.enterToken(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.exitToken(this);
		}
	}


}



class TcharContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = httpParser.RULE_tchar;
    }

	EXCLAMATION_MARK() {
	    return this.getToken(httpParser.EXCLAMATION_MARK, 0);
	};

	DOLLAR_SIGN() {
	    return this.getToken(httpParser.DOLLAR_SIGN, 0);
	};

	HASHTAG() {
	    return this.getToken(httpParser.HASHTAG, 0);
	};

	PERCENT() {
	    return this.getToken(httpParser.PERCENT, 0);
	};

	AMPERSAND() {
	    return this.getToken(httpParser.AMPERSAND, 0);
	};

	SQUOTE() {
	    return this.getToken(httpParser.SQUOTE, 0);
	};

	STAR() {
	    return this.getToken(httpParser.STAR, 0);
	};

	PLUS() {
	    return this.getToken(httpParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(httpParser.MINUS, 0);
	};

	DOT() {
	    return this.getToken(httpParser.DOT, 0);
	};

	CARET() {
	    return this.getToken(httpParser.CARET, 0);
	};

	UNDERSCORE() {
	    return this.getToken(httpParser.UNDERSCORE, 0);
	};

	BACK_QUOTE() {
	    return this.getToken(httpParser.BACK_QUOTE, 0);
	};

	VBAR() {
	    return this.getToken(httpParser.VBAR, 0);
	};

	TILDE() {
	    return this.getToken(httpParser.TILDE, 0);
	};

	DIGIT() {
	    return this.getToken(httpParser.DIGIT, 0);
	};

	HEX_LETTER() {
	    return this.getToken(httpParser.HEX_LETTER, 0);
	};

	ALPHA() {
	    return this.getToken(httpParser.ALPHA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.enterTchar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.exitTchar(this);
		}
	}


}



class Field_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = httpParser.RULE_field_value;
    }

	field_content = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Field_contentContext);
	    } else {
	        return this.getTypedRuleContext(Field_contentContext,i);
	    }
	};

	obs_fold = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Obs_foldContext);
	    } else {
	        return this.getTypedRuleContext(Obs_foldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.enterField_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.exitField_value(this);
		}
	}


}



class Field_contentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = httpParser.RULE_field_content;
    }

	field_vchar = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Field_vcharContext);
	    } else {
	        return this.getTypedRuleContext(Field_vcharContext,i);
	    }
	};

	SP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(httpParser.SP);
	    } else {
	        return this.getToken(httpParser.SP, i);
	    }
	};


	HTAB = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(httpParser.HTAB);
	    } else {
	        return this.getToken(httpParser.HTAB, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.enterField_content(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.exitField_content(this);
		}
	}


}



class OwsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = httpParser.RULE_ows;
    }

	SP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(httpParser.SP);
	    } else {
	        return this.getToken(httpParser.SP, i);
	    }
	};


	HTAB = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(httpParser.HTAB);
	    } else {
	        return this.getToken(httpParser.HTAB, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.enterOws(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.exitOws(this);
		}
	}


}



class Field_vcharContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = httpParser.RULE_field_vchar;
    }

	vchar() {
	    return this.getTypedRuleContext(VcharContext,0);
	};

	obs_text() {
	    return this.getTypedRuleContext(Obs_textContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.enterField_vchar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.exitField_vchar(this);
		}
	}


}



class Obs_textContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = httpParser.RULE_obs_text;
    }

	OBS_TEXT() {
	    return this.getToken(httpParser.OBS_TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.enterObs_text(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.exitObs_text(this);
		}
	}


}



class Obs_foldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = httpParser.RULE_obs_fold;
    }

	CRLF() {
	    return this.getToken(httpParser.CRLF, 0);
	};

	SP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(httpParser.SP);
	    } else {
	        return this.getToken(httpParser.SP, i);
	    }
	};


	HTAB = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(httpParser.HTAB);
	    } else {
	        return this.getToken(httpParser.HTAB, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.enterObs_fold(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.exitObs_fold(this);
		}
	}


}



class PcharContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = httpParser.RULE_pchar;
    }

	unreserved() {
	    return this.getTypedRuleContext(UnreservedContext,0);
	};

	pct_encoded() {
	    return this.getTypedRuleContext(Pct_encodedContext,0);
	};

	sub_delims() {
	    return this.getTypedRuleContext(Sub_delimsContext,0);
	};

	hexdig() {
	    return this.getTypedRuleContext(HexdigContext,0);
	};

	COLON() {
	    return this.getToken(httpParser.COLON, 0);
	};

	AT() {
	    return this.getToken(httpParser.AT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.enterPchar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.exitPchar(this);
		}
	}


}



class Pct_encodedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = httpParser.RULE_pct_encoded;
    }

	PERCENT() {
	    return this.getToken(httpParser.PERCENT, 0);
	};

	hexdig = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(HexdigContext);
	    } else {
	        return this.getTypedRuleContext(HexdigContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.enterPct_encoded(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.exitPct_encoded(this);
		}
	}


}



class HexdigContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = httpParser.RULE_hexdig;
    }

	DIGIT() {
	    return this.getToken(httpParser.DIGIT, 0);
	};

	HEX_LETTER() {
	    return this.getToken(httpParser.HEX_LETTER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.enterHexdig(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.exitHexdig(this);
		}
	}


}



class UnreservedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = httpParser.RULE_unreserved;
    }

	ALPHA() {
	    return this.getToken(httpParser.ALPHA, 0);
	};

	DIGIT() {
	    return this.getToken(httpParser.DIGIT, 0);
	};

	MINUS() {
	    return this.getToken(httpParser.MINUS, 0);
	};

	DOT() {
	    return this.getToken(httpParser.DOT, 0);
	};

	UNDERSCORE() {
	    return this.getToken(httpParser.UNDERSCORE, 0);
	};

	TILDE() {
	    return this.getToken(httpParser.TILDE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.enterUnreserved(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.exitUnreserved(this);
		}
	}


}



class Sub_delimsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = httpParser.RULE_sub_delims;
    }

	EXCLAMATION_MARK() {
	    return this.getToken(httpParser.EXCLAMATION_MARK, 0);
	};

	DOLLAR_SIGN() {
	    return this.getToken(httpParser.DOLLAR_SIGN, 0);
	};

	AMPERSAND() {
	    return this.getToken(httpParser.AMPERSAND, 0);
	};

	SQUOTE() {
	    return this.getToken(httpParser.SQUOTE, 0);
	};

	LCOLUMN() {
	    return this.getToken(httpParser.LCOLUMN, 0);
	};

	RCOLUMN() {
	    return this.getToken(httpParser.RCOLUMN, 0);
	};

	STAR() {
	    return this.getToken(httpParser.STAR, 0);
	};

	PLUS() {
	    return this.getToken(httpParser.PLUS, 0);
	};

	PERIOD() {
	    return this.getToken(httpParser.PERIOD, 0);
	};

	SEMICOLON() {
	    return this.getToken(httpParser.SEMICOLON, 0);
	};

	EQUALS() {
	    return this.getToken(httpParser.EQUALS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.enterSub_delims(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.exitSub_delims(this);
		}
	}


}



class VcharContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = httpParser.RULE_vchar;
    }

	LCOLUMN() {
	    return this.getToken(httpParser.LCOLUMN, 0);
	};

	RCOLUMN() {
	    return this.getToken(httpParser.RCOLUMN, 0);
	};

	SEMICOLON() {
	    return this.getToken(httpParser.SEMICOLON, 0);
	};

	EQUALS() {
	    return this.getToken(httpParser.EQUALS, 0);
	};

	PERIOD() {
	    return this.getToken(httpParser.PERIOD, 0);
	};

	MINUS() {
	    return this.getToken(httpParser.MINUS, 0);
	};

	DOT() {
	    return this.getToken(httpParser.DOT, 0);
	};

	UNDERSCORE() {
	    return this.getToken(httpParser.UNDERSCORE, 0);
	};

	TILDE() {
	    return this.getToken(httpParser.TILDE, 0);
	};

	QUESTION_MARK() {
	    return this.getToken(httpParser.QUESTION_MARK, 0);
	};

	SLASH() {
	    return this.getToken(httpParser.SLASH, 0);
	};

	EXCLAMATION_MARK() {
	    return this.getToken(httpParser.EXCLAMATION_MARK, 0);
	};

	COLON() {
	    return this.getToken(httpParser.COLON, 0);
	};

	AT() {
	    return this.getToken(httpParser.AT, 0);
	};

	DOLLAR_SIGN() {
	    return this.getToken(httpParser.DOLLAR_SIGN, 0);
	};

	HASHTAG() {
	    return this.getToken(httpParser.HASHTAG, 0);
	};

	AMPERSAND() {
	    return this.getToken(httpParser.AMPERSAND, 0);
	};

	PERCENT() {
	    return this.getToken(httpParser.PERCENT, 0);
	};

	SQUOTE() {
	    return this.getToken(httpParser.SQUOTE, 0);
	};

	STAR() {
	    return this.getToken(httpParser.STAR, 0);
	};

	PLUS() {
	    return this.getToken(httpParser.PLUS, 0);
	};

	CARET() {
	    return this.getToken(httpParser.CARET, 0);
	};

	BACK_QUOTE() {
	    return this.getToken(httpParser.BACK_QUOTE, 0);
	};

	VBAR() {
	    return this.getToken(httpParser.VBAR, 0);
	};

	HEX_LETTER() {
	    return this.getToken(httpParser.HEX_LETTER, 0);
	};

	ALPHA() {
	    return this.getToken(httpParser.ALPHA, 0);
	};

	DIGIT() {
	    return this.getToken(httpParser.DIGIT, 0);
	};

	VCHAR() {
	    return this.getToken(httpParser.VCHAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.enterVchar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.exitVchar(this);
		}
	}


}




httpParser.Http_messageContext = Http_messageContext; 
httpParser.Start_lineContext = Start_lineContext; 
httpParser.Request_lineContext = Request_lineContext; 
httpParser.MethodContext = MethodContext; 
httpParser.Request_targetContext = Request_targetContext; 
httpParser.Origin_formContext = Origin_formContext; 
httpParser.Absolute_pathContext = Absolute_pathContext; 
httpParser.SegmentContext = SegmentContext; 
httpParser.QueryContext = QueryContext; 
httpParser.Http_versionContext = Http_versionContext; 
httpParser.Header_fieldContext = Header_fieldContext; 
httpParser.Field_nameContext = Field_nameContext; 
httpParser.TokenContext = TokenContext; 
httpParser.TcharContext = TcharContext; 
httpParser.Field_valueContext = Field_valueContext; 
httpParser.Field_contentContext = Field_contentContext; 
httpParser.OwsContext = OwsContext; 
httpParser.Field_vcharContext = Field_vcharContext; 
httpParser.Obs_textContext = Obs_textContext; 
httpParser.Obs_foldContext = Obs_foldContext; 
httpParser.PcharContext = PcharContext; 
httpParser.Pct_encodedContext = Pct_encodedContext; 
httpParser.HexdigContext = HexdigContext; 
httpParser.UnreservedContext = UnreservedContext; 
httpParser.Sub_delimsContext = Sub_delimsContext; 
httpParser.VcharContext = VcharContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
