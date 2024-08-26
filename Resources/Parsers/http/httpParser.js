// Generated from Resources/Parsers/http/http.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import httpListener from './httpListener.js';
const serializedATN = [4,1,43,169,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,1,0,1,0,1,0,1,0,5,0,53,8,0,10,0,12,
0,56,9,0,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,5,
1,5,1,5,3,5,76,8,5,1,6,1,6,4,6,80,8,6,11,6,12,6,81,1,7,5,7,85,8,7,10,7,12,
7,88,9,7,1,8,1,8,1,8,5,8,93,8,8,10,8,12,8,96,9,8,1,9,1,9,1,9,1,9,1,9,1,10,
1,10,1,11,1,11,1,11,5,11,108,8,11,10,11,12,11,111,9,11,1,11,1,11,5,11,115,
8,11,10,11,12,11,118,9,11,1,12,1,12,1,13,4,13,123,8,13,11,13,12,13,124,1,
14,1,14,4,14,129,8,14,11,14,12,14,130,1,15,1,15,4,15,135,8,15,11,15,12,15,
136,1,15,3,15,140,8,15,1,16,1,16,3,16,144,8,16,1,17,1,17,1,18,1,18,4,18,
150,8,18,11,18,12,18,151,1,19,1,19,1,19,1,19,1,19,3,19,159,8,19,1,20,1,20,
1,21,1,21,1,22,1,22,1,23,1,23,1,23,0,0,24,0,2,4,6,8,10,12,14,16,18,20,22,
24,26,28,30,32,34,36,38,40,42,44,46,0,6,1,0,1,8,2,0,10,10,41,41,2,0,11,12,
21,24,5,0,15,19,27,27,30,30,32,32,34,36,4,0,11,12,21,24,27,27,30,39,2,0,
11,12,42,42,164,0,48,1,0,0,0,2,59,1,0,0,0,4,61,1,0,0,0,6,68,1,0,0,0,8,70,
1,0,0,0,10,72,1,0,0,0,12,79,1,0,0,0,14,86,1,0,0,0,16,94,1,0,0,0,18,97,1,
0,0,0,20,102,1,0,0,0,22,104,1,0,0,0,24,119,1,0,0,0,26,122,1,0,0,0,28,128,
1,0,0,0,30,132,1,0,0,0,32,143,1,0,0,0,34,145,1,0,0,0,36,147,1,0,0,0,38,158,
1,0,0,0,40,160,1,0,0,0,42,162,1,0,0,0,44,164,1,0,0,0,46,166,1,0,0,0,48,54,
3,2,1,0,49,50,3,22,11,0,50,51,5,20,0,0,51,53,1,0,0,0,52,49,1,0,0,0,53,56,
1,0,0,0,54,52,1,0,0,0,54,55,1,0,0,0,55,57,1,0,0,0,56,54,1,0,0,0,57,58,5,
20,0,0,58,1,1,0,0,0,59,60,3,4,2,0,60,3,1,0,0,0,61,62,3,6,3,0,62,63,5,10,
0,0,63,64,3,8,4,0,64,65,5,10,0,0,65,66,3,18,9,0,66,67,5,20,0,0,67,5,1,0,
0,0,68,69,7,0,0,0,69,7,1,0,0,0,70,71,3,10,5,0,71,9,1,0,0,0,72,75,3,12,6,
0,73,74,5,25,0,0,74,76,3,16,8,0,75,73,1,0,0,0,75,76,1,0,0,0,76,11,1,0,0,
0,77,78,5,26,0,0,78,80,3,14,7,0,79,77,1,0,0,0,80,81,1,0,0,0,81,79,1,0,0,
0,81,82,1,0,0,0,82,13,1,0,0,0,83,85,3,38,19,0,84,83,1,0,0,0,85,88,1,0,0,
0,86,84,1,0,0,0,86,87,1,0,0,0,87,15,1,0,0,0,88,86,1,0,0,0,89,93,3,38,19,
0,90,93,5,26,0,0,91,93,5,25,0,0,92,89,1,0,0,0,92,90,1,0,0,0,92,91,1,0,0,
0,93,96,1,0,0,0,94,92,1,0,0,0,94,95,1,0,0,0,95,17,1,0,0,0,96,94,1,0,0,0,
97,98,3,20,10,0,98,99,5,12,0,0,99,100,5,22,0,0,100,101,5,12,0,0,101,19,1,
0,0,0,102,103,5,9,0,0,103,21,1,0,0,0,104,105,3,24,12,0,105,109,5,28,0,0,
106,108,5,40,0,0,107,106,1,0,0,0,108,111,1,0,0,0,109,107,1,0,0,0,109,110,
1,0,0,0,110,112,1,0,0,0,111,109,1,0,0,0,112,116,3,28,14,0,113,115,5,40,0,
0,114,113,1,0,0,0,115,118,1,0,0,0,116,114,1,0,0,0,116,117,1,0,0,0,117,23,
1,0,0,0,118,116,1,0,0,0,119,120,3,26,13,0,120,25,1,0,0,0,121,123,3,44,22,
0,122,121,1,0,0,0,123,124,1,0,0,0,124,122,1,0,0,0,124,125,1,0,0,0,125,27,
1,0,0,0,126,129,3,30,15,0,127,129,3,36,18,0,128,126,1,0,0,0,128,127,1,0,
0,0,129,130,1,0,0,0,130,128,1,0,0,0,130,131,1,0,0,0,131,29,1,0,0,0,132,139,
3,32,16,0,133,135,7,1,0,0,134,133,1,0,0,0,135,136,1,0,0,0,136,134,1,0,0,
0,136,137,1,0,0,0,137,138,1,0,0,0,138,140,3,32,16,0,139,134,1,0,0,0,139,
140,1,0,0,0,140,31,1,0,0,0,141,144,3,46,23,0,142,144,3,34,17,0,143,141,1,
0,0,0,143,142,1,0,0,0,144,33,1,0,0,0,145,146,5,43,0,0,146,35,1,0,0,0,147,
149,5,20,0,0,148,150,7,1,0,0,149,148,1,0,0,0,150,151,1,0,0,0,151,149,1,0,
0,0,151,152,1,0,0,0,152,37,1,0,0,0,153,159,3,40,20,0,154,159,5,13,0,0,155,
159,3,42,21,0,156,159,5,28,0,0,157,159,5,29,0,0,158,153,1,0,0,0,158,154,
1,0,0,0,158,155,1,0,0,0,158,156,1,0,0,0,158,157,1,0,0,0,159,39,1,0,0,0,160,
161,7,2,0,0,161,41,1,0,0,0,162,163,7,3,0,0,163,43,1,0,0,0,164,165,7,4,0,
0,165,45,1,0,0,0,166,167,7,5,0,0,167,47,1,0,0,0,16,54,75,81,86,92,94,109,
116,124,128,130,136,139,143,151,158];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class httpParser extends antlr4.Parser {

    static grammarFileName = "http.g4";
    static literalNames = [ null, "'GET'", "'HEAD'", "'POST'", "'PUT'", 
                            "'DELETE'", "'CONNECT'", "'OPTIONS'", "'TRACE'", 
                            "'HTTP/'", "' '", null, null, null, null, "'('", 
                            "')'", "';'", "'='", "','", "'\\n'", "'-'", 
                            "'.'", "'_'", "'~'", "'?'", "'/'", "'!'", "':'", 
                            "'@'", "'$'", "'#'", "'&'", "'%'", "'''", "'*'", 
                            "'+'", "'^'", "'`'", "'|'", null, "'\\t'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, "SP", "ALPHA", "DIGIT", "Pct_encoded", 
                             "HEXDIG", "LColumn", "RColumn", "SemiColon", 
                             "Equals", "Period", "CRLF", "Minus", "Dot", 
                             "Underscore", "Tilde", "QuestionMark", "Slash", 
                             "ExclamationMark", "Colon", "At", "DollarSign", 
                             "Hashtag", "Ampersand", "Percent", "SQuote", 
                             "Star", "Plus", "Caret", "BackQuote", "VBar", 
                             "OWS", "HTAB", "VCHAR", "OBS_TEXT" ];
    static ruleNames = [ "http_message", "start_line", "request_line", "method", 
                         "request_target", "origin_form", "absolute_path", 
                         "segment", "query", "http_version", "http_name", 
                         "header_field", "field_name", "token", "field_value", 
                         "field_content", "field_vchar", "obs_text", "obs_fold", 
                         "pchar", "unreserved", "sub_delims", "tchar", "vCHAR" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = httpParser.ruleNames;
        this.literalNames = httpParser.literalNames;
        this.symbolicNames = httpParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	http_message() {
	    let localctx = new Http_messageContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, httpParser.RULE_http_message);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.start_line();
	        this.state = 54;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 11)) & ~0x1f) == 0 && ((1 << (_la - 11)) & ((1 << (httpParser.ALPHA - 11)) | (1 << (httpParser.DIGIT - 11)) | (1 << (httpParser.Minus - 11)) | (1 << (httpParser.Dot - 11)) | (1 << (httpParser.Underscore - 11)) | (1 << (httpParser.Tilde - 11)) | (1 << (httpParser.ExclamationMark - 11)) | (1 << (httpParser.DollarSign - 11)) | (1 << (httpParser.Hashtag - 11)) | (1 << (httpParser.Ampersand - 11)) | (1 << (httpParser.Percent - 11)) | (1 << (httpParser.SQuote - 11)) | (1 << (httpParser.Star - 11)) | (1 << (httpParser.Plus - 11)) | (1 << (httpParser.Caret - 11)) | (1 << (httpParser.BackQuote - 11)) | (1 << (httpParser.VBar - 11)))) !== 0)) {
	            this.state = 49;
	            this.header_field();
	            this.state = 50;
	            this.match(httpParser.CRLF);
	            this.state = 56;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 57;
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



	start_line() {
	    let localctx = new Start_lineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, httpParser.RULE_start_line);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
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
	        this.state = 61;
	        this.method();
	        this.state = 62;
	        this.match(httpParser.SP);
	        this.state = 63;
	        this.request_target();
	        this.state = 64;
	        this.match(httpParser.SP);
	        this.state = 65;
	        this.http_version();
	        this.state = 66;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << httpParser.T__0) | (1 << httpParser.T__1) | (1 << httpParser.T__2) | (1 << httpParser.T__3) | (1 << httpParser.T__4) | (1 << httpParser.T__5) | (1 << httpParser.T__6) | (1 << httpParser.T__7))) !== 0))) {
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



	request_target() {
	    let localctx = new Request_targetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, httpParser.RULE_request_target);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.absolute_path();
	        this.state = 75;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===httpParser.QuestionMark) {
	            this.state = 73;
	            this.match(httpParser.QuestionMark);
	            this.state = 74;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 77;
	            this.match(httpParser.Slash);
	            this.state = 78;
	            this.segment();
	            this.state = 81; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===httpParser.Slash);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 11)) & ~0x1f) == 0 && ((1 << (_la - 11)) & ((1 << (httpParser.ALPHA - 11)) | (1 << (httpParser.DIGIT - 11)) | (1 << (httpParser.Pct_encoded - 11)) | (1 << (httpParser.LColumn - 11)) | (1 << (httpParser.RColumn - 11)) | (1 << (httpParser.SemiColon - 11)) | (1 << (httpParser.Equals - 11)) | (1 << (httpParser.Period - 11)) | (1 << (httpParser.Minus - 11)) | (1 << (httpParser.Dot - 11)) | (1 << (httpParser.Underscore - 11)) | (1 << (httpParser.Tilde - 11)) | (1 << (httpParser.ExclamationMark - 11)) | (1 << (httpParser.Colon - 11)) | (1 << (httpParser.At - 11)) | (1 << (httpParser.DollarSign - 11)) | (1 << (httpParser.Ampersand - 11)) | (1 << (httpParser.SQuote - 11)) | (1 << (httpParser.Star - 11)) | (1 << (httpParser.Plus - 11)))) !== 0)) {
	            this.state = 83;
	            this.pchar();
	            this.state = 88;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 11)) & ~0x1f) == 0 && ((1 << (_la - 11)) & ((1 << (httpParser.ALPHA - 11)) | (1 << (httpParser.DIGIT - 11)) | (1 << (httpParser.Pct_encoded - 11)) | (1 << (httpParser.LColumn - 11)) | (1 << (httpParser.RColumn - 11)) | (1 << (httpParser.SemiColon - 11)) | (1 << (httpParser.Equals - 11)) | (1 << (httpParser.Period - 11)) | (1 << (httpParser.Minus - 11)) | (1 << (httpParser.Dot - 11)) | (1 << (httpParser.Underscore - 11)) | (1 << (httpParser.Tilde - 11)) | (1 << (httpParser.QuestionMark - 11)) | (1 << (httpParser.Slash - 11)) | (1 << (httpParser.ExclamationMark - 11)) | (1 << (httpParser.Colon - 11)) | (1 << (httpParser.At - 11)) | (1 << (httpParser.DollarSign - 11)) | (1 << (httpParser.Ampersand - 11)) | (1 << (httpParser.SQuote - 11)) | (1 << (httpParser.Star - 11)) | (1 << (httpParser.Plus - 11)))) !== 0)) {
	            this.state = 92;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case httpParser.ALPHA:
	            case httpParser.DIGIT:
	            case httpParser.Pct_encoded:
	            case httpParser.LColumn:
	            case httpParser.RColumn:
	            case httpParser.SemiColon:
	            case httpParser.Equals:
	            case httpParser.Period:
	            case httpParser.Minus:
	            case httpParser.Dot:
	            case httpParser.Underscore:
	            case httpParser.Tilde:
	            case httpParser.ExclamationMark:
	            case httpParser.Colon:
	            case httpParser.At:
	            case httpParser.DollarSign:
	            case httpParser.Ampersand:
	            case httpParser.SQuote:
	            case httpParser.Star:
	            case httpParser.Plus:
	                this.state = 89;
	                this.pchar();
	                break;
	            case httpParser.Slash:
	                this.state = 90;
	                this.match(httpParser.Slash);
	                break;
	            case httpParser.QuestionMark:
	                this.state = 91;
	                this.match(httpParser.QuestionMark);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 96;
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
	        this.state = 97;
	        this.http_name();
	        this.state = 98;
	        this.match(httpParser.DIGIT);
	        this.state = 99;
	        this.match(httpParser.Dot);
	        this.state = 100;
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



	http_name() {
	    let localctx = new Http_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, httpParser.RULE_http_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.match(httpParser.T__8);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 22, httpParser.RULE_header_field);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.field_name();
	        this.state = 105;
	        this.match(httpParser.Colon);
	        this.state = 109;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===httpParser.OWS) {
	            this.state = 106;
	            this.match(httpParser.OWS);
	            this.state = 111;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 112;
	        this.field_value();
	        this.state = 116;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===httpParser.OWS) {
	            this.state = 113;
	            this.match(httpParser.OWS);
	            this.state = 118;
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



	field_name() {
	    let localctx = new Field_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, httpParser.RULE_field_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
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
	    this.enterRule(localctx, 26, httpParser.RULE_token);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 121;
	            this.tchar();
	            this.state = 124; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 11)) & ~0x1f) == 0 && ((1 << (_la - 11)) & ((1 << (httpParser.ALPHA - 11)) | (1 << (httpParser.DIGIT - 11)) | (1 << (httpParser.Minus - 11)) | (1 << (httpParser.Dot - 11)) | (1 << (httpParser.Underscore - 11)) | (1 << (httpParser.Tilde - 11)) | (1 << (httpParser.ExclamationMark - 11)) | (1 << (httpParser.DollarSign - 11)) | (1 << (httpParser.Hashtag - 11)) | (1 << (httpParser.Ampersand - 11)) | (1 << (httpParser.Percent - 11)) | (1 << (httpParser.SQuote - 11)) | (1 << (httpParser.Star - 11)) | (1 << (httpParser.Plus - 11)) | (1 << (httpParser.Caret - 11)) | (1 << (httpParser.BackQuote - 11)) | (1 << (httpParser.VBar - 11)))) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	        this.state = 128; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 128;
	        		this._errHandler.sync(this);
	        		switch(this._input.LA(1)) {
	        		case httpParser.ALPHA:
	        		case httpParser.DIGIT:
	        		case httpParser.VCHAR:
	        		case httpParser.OBS_TEXT:
	        		    this.state = 126;
	        		    this.field_content();
	        		    break;
	        		case httpParser.CRLF:
	        		    this.state = 127;
	        		    this.obs_fold();
	        		    break;
	        		default:
	        		    throw new antlr4.error.NoViableAltException(this);
	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 130; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,10, this._ctx);
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



	field_content() {
	    let localctx = new Field_contentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, httpParser.RULE_field_content);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 132;
	        this.field_vchar();
	        this.state = 139;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===httpParser.SP || _la===httpParser.HTAB) {
	            this.state = 134; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 133;
	                _la = this._input.LA(1);
	                if(!(_la===httpParser.SP || _la===httpParser.HTAB)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 136; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===httpParser.SP || _la===httpParser.HTAB);
	            this.state = 138;
	            this.field_vchar();
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
	    this.enterRule(localctx, 32, httpParser.RULE_field_vchar);
	    try {
	        this.state = 143;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case httpParser.ALPHA:
	        case httpParser.DIGIT:
	        case httpParser.VCHAR:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 141;
	            this.vCHAR();
	            break;
	        case httpParser.OBS_TEXT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 142;
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
	    this.enterRule(localctx, 34, httpParser.RULE_obs_text);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
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
	    this.enterRule(localctx, 36, httpParser.RULE_obs_fold);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        this.match(httpParser.CRLF);
	        this.state = 149; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 148;
	            _la = this._input.LA(1);
	            if(!(_la===httpParser.SP || _la===httpParser.HTAB)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 151; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===httpParser.SP || _la===httpParser.HTAB);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 38, httpParser.RULE_pchar);
	    try {
	        this.state = 158;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case httpParser.ALPHA:
	        case httpParser.DIGIT:
	        case httpParser.Minus:
	        case httpParser.Dot:
	        case httpParser.Underscore:
	        case httpParser.Tilde:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 153;
	            this.unreserved();
	            break;
	        case httpParser.Pct_encoded:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 154;
	            this.match(httpParser.Pct_encoded);
	            break;
	        case httpParser.LColumn:
	        case httpParser.RColumn:
	        case httpParser.SemiColon:
	        case httpParser.Equals:
	        case httpParser.Period:
	        case httpParser.ExclamationMark:
	        case httpParser.DollarSign:
	        case httpParser.Ampersand:
	        case httpParser.SQuote:
	        case httpParser.Star:
	        case httpParser.Plus:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 155;
	            this.sub_delims();
	            break;
	        case httpParser.Colon:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 156;
	            this.match(httpParser.Colon);
	            break;
	        case httpParser.At:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 157;
	            this.match(httpParser.At);
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



	unreserved() {
	    let localctx = new UnreservedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, httpParser.RULE_unreserved);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << httpParser.ALPHA) | (1 << httpParser.DIGIT) | (1 << httpParser.Minus) | (1 << httpParser.Dot) | (1 << httpParser.Underscore) | (1 << httpParser.Tilde))) !== 0))) {
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
	    this.enterRule(localctx, 42, httpParser.RULE_sub_delims);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        _la = this._input.LA(1);
	        if(!(((((_la - 15)) & ~0x1f) == 0 && ((1 << (_la - 15)) & ((1 << (httpParser.LColumn - 15)) | (1 << (httpParser.RColumn - 15)) | (1 << (httpParser.SemiColon - 15)) | (1 << (httpParser.Equals - 15)) | (1 << (httpParser.Period - 15)) | (1 << (httpParser.ExclamationMark - 15)) | (1 << (httpParser.DollarSign - 15)) | (1 << (httpParser.Ampersand - 15)) | (1 << (httpParser.SQuote - 15)) | (1 << (httpParser.Star - 15)) | (1 << (httpParser.Plus - 15)))) !== 0))) {
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



	tchar() {
	    let localctx = new TcharContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, httpParser.RULE_tchar);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
	        _la = this._input.LA(1);
	        if(!(((((_la - 11)) & ~0x1f) == 0 && ((1 << (_la - 11)) & ((1 << (httpParser.ALPHA - 11)) | (1 << (httpParser.DIGIT - 11)) | (1 << (httpParser.Minus - 11)) | (1 << (httpParser.Dot - 11)) | (1 << (httpParser.Underscore - 11)) | (1 << (httpParser.Tilde - 11)) | (1 << (httpParser.ExclamationMark - 11)) | (1 << (httpParser.DollarSign - 11)) | (1 << (httpParser.Hashtag - 11)) | (1 << (httpParser.Ampersand - 11)) | (1 << (httpParser.Percent - 11)) | (1 << (httpParser.SQuote - 11)) | (1 << (httpParser.Star - 11)) | (1 << (httpParser.Plus - 11)) | (1 << (httpParser.Caret - 11)) | (1 << (httpParser.BackQuote - 11)) | (1 << (httpParser.VBar - 11)))) !== 0))) {
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



	vCHAR() {
	    let localctx = new VCHARContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, httpParser.RULE_vCHAR);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 166;
	        _la = this._input.LA(1);
	        if(!(((((_la - 11)) & ~0x1f) == 0 && ((1 << (_la - 11)) & ((1 << (httpParser.ALPHA - 11)) | (1 << (httpParser.DIGIT - 11)) | (1 << (httpParser.VCHAR - 11)))) !== 0))) {
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
httpParser.T__1 = 2;
httpParser.T__2 = 3;
httpParser.T__3 = 4;
httpParser.T__4 = 5;
httpParser.T__5 = 6;
httpParser.T__6 = 7;
httpParser.T__7 = 8;
httpParser.T__8 = 9;
httpParser.SP = 10;
httpParser.ALPHA = 11;
httpParser.DIGIT = 12;
httpParser.Pct_encoded = 13;
httpParser.HEXDIG = 14;
httpParser.LColumn = 15;
httpParser.RColumn = 16;
httpParser.SemiColon = 17;
httpParser.Equals = 18;
httpParser.Period = 19;
httpParser.CRLF = 20;
httpParser.Minus = 21;
httpParser.Dot = 22;
httpParser.Underscore = 23;
httpParser.Tilde = 24;
httpParser.QuestionMark = 25;
httpParser.Slash = 26;
httpParser.ExclamationMark = 27;
httpParser.Colon = 28;
httpParser.At = 29;
httpParser.DollarSign = 30;
httpParser.Hashtag = 31;
httpParser.Ampersand = 32;
httpParser.Percent = 33;
httpParser.SQuote = 34;
httpParser.Star = 35;
httpParser.Plus = 36;
httpParser.Caret = 37;
httpParser.BackQuote = 38;
httpParser.VBar = 39;
httpParser.OWS = 40;
httpParser.HTAB = 41;
httpParser.VCHAR = 42;
httpParser.OBS_TEXT = 43;

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
httpParser.RULE_http_name = 10;
httpParser.RULE_header_field = 11;
httpParser.RULE_field_name = 12;
httpParser.RULE_token = 13;
httpParser.RULE_field_value = 14;
httpParser.RULE_field_content = 15;
httpParser.RULE_field_vchar = 16;
httpParser.RULE_obs_text = 17;
httpParser.RULE_obs_fold = 18;
httpParser.RULE_pchar = 19;
httpParser.RULE_unreserved = 20;
httpParser.RULE_sub_delims = 21;
httpParser.RULE_tchar = 22;
httpParser.RULE_vCHAR = 23;

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

	QuestionMark() {
	    return this.getToken(httpParser.QuestionMark, 0);
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

	Slash = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(httpParser.Slash);
	    } else {
	        return this.getToken(httpParser.Slash, i);
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

	Slash = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(httpParser.Slash);
	    } else {
	        return this.getToken(httpParser.Slash, i);
	    }
	};


	QuestionMark = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(httpParser.QuestionMark);
	    } else {
	        return this.getToken(httpParser.QuestionMark, i);
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

	http_name() {
	    return this.getTypedRuleContext(Http_nameContext,0);
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


	Dot() {
	    return this.getToken(httpParser.Dot, 0);
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



class Http_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = httpParser.RULE_http_name;
    }


	enterRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.enterHttp_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.exitHttp_name(this);
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

	Colon() {
	    return this.getToken(httpParser.Colon, 0);
	};

	field_value() {
	    return this.getTypedRuleContext(Field_valueContext,0);
	};

	OWS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(httpParser.OWS);
	    } else {
	        return this.getToken(httpParser.OWS, i);
	    }
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

	vCHAR() {
	    return this.getTypedRuleContext(VCHARContext,0);
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

	Pct_encoded() {
	    return this.getToken(httpParser.Pct_encoded, 0);
	};

	sub_delims() {
	    return this.getTypedRuleContext(Sub_delimsContext,0);
	};

	Colon() {
	    return this.getToken(httpParser.Colon, 0);
	};

	At() {
	    return this.getToken(httpParser.At, 0);
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

	Minus() {
	    return this.getToken(httpParser.Minus, 0);
	};

	Dot() {
	    return this.getToken(httpParser.Dot, 0);
	};

	Underscore() {
	    return this.getToken(httpParser.Underscore, 0);
	};

	Tilde() {
	    return this.getToken(httpParser.Tilde, 0);
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

	ExclamationMark() {
	    return this.getToken(httpParser.ExclamationMark, 0);
	};

	DollarSign() {
	    return this.getToken(httpParser.DollarSign, 0);
	};

	Ampersand() {
	    return this.getToken(httpParser.Ampersand, 0);
	};

	SQuote() {
	    return this.getToken(httpParser.SQuote, 0);
	};

	LColumn() {
	    return this.getToken(httpParser.LColumn, 0);
	};

	RColumn() {
	    return this.getToken(httpParser.RColumn, 0);
	};

	Star() {
	    return this.getToken(httpParser.Star, 0);
	};

	Plus() {
	    return this.getToken(httpParser.Plus, 0);
	};

	SemiColon() {
	    return this.getToken(httpParser.SemiColon, 0);
	};

	Period() {
	    return this.getToken(httpParser.Period, 0);
	};

	Equals() {
	    return this.getToken(httpParser.Equals, 0);
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

	ExclamationMark() {
	    return this.getToken(httpParser.ExclamationMark, 0);
	};

	DollarSign() {
	    return this.getToken(httpParser.DollarSign, 0);
	};

	Hashtag() {
	    return this.getToken(httpParser.Hashtag, 0);
	};

	Percent() {
	    return this.getToken(httpParser.Percent, 0);
	};

	Ampersand() {
	    return this.getToken(httpParser.Ampersand, 0);
	};

	SQuote() {
	    return this.getToken(httpParser.SQuote, 0);
	};

	Star() {
	    return this.getToken(httpParser.Star, 0);
	};

	Plus() {
	    return this.getToken(httpParser.Plus, 0);
	};

	Minus() {
	    return this.getToken(httpParser.Minus, 0);
	};

	Dot() {
	    return this.getToken(httpParser.Dot, 0);
	};

	Caret() {
	    return this.getToken(httpParser.Caret, 0);
	};

	Underscore() {
	    return this.getToken(httpParser.Underscore, 0);
	};

	BackQuote() {
	    return this.getToken(httpParser.BackQuote, 0);
	};

	VBar() {
	    return this.getToken(httpParser.VBar, 0);
	};

	Tilde() {
	    return this.getToken(httpParser.Tilde, 0);
	};

	DIGIT() {
	    return this.getToken(httpParser.DIGIT, 0);
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



class VCHARContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = httpParser.RULE_vCHAR;
    }

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
	        listener.enterVCHAR(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof httpListener ) {
	        listener.exitVCHAR(this);
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
httpParser.Http_nameContext = Http_nameContext; 
httpParser.Header_fieldContext = Header_fieldContext; 
httpParser.Field_nameContext = Field_nameContext; 
httpParser.TokenContext = TokenContext; 
httpParser.Field_valueContext = Field_valueContext; 
httpParser.Field_contentContext = Field_contentContext; 
httpParser.Field_vcharContext = Field_vcharContext; 
httpParser.Obs_textContext = Obs_textContext; 
httpParser.Obs_foldContext = Obs_foldContext; 
httpParser.PcharContext = PcharContext; 
httpParser.UnreservedContext = UnreservedContext; 
httpParser.Sub_delimsContext = Sub_delimsContext; 
httpParser.TcharContext = TcharContext; 
httpParser.VCHARContext = VCHARContext; 
