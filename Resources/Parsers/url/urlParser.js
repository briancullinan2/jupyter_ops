// Generated from Resources/Parsers/url/url.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import urlListener from './urlListener.js';
const serializedATN = [4,1,16,150,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,1,0,1,1,1,1,1,1,3,1,39,8,1,1,1,1,1,
1,1,3,1,44,8,1,1,1,1,1,3,1,48,8,1,3,1,50,8,1,1,1,3,1,53,8,1,1,1,3,1,56,8,
1,1,1,3,1,59,8,1,1,2,1,2,1,3,3,3,64,8,3,1,3,1,3,1,4,1,4,1,4,5,4,71,8,4,10,
4,12,4,74,9,4,1,4,1,4,1,4,1,4,3,4,80,8,4,1,5,3,5,83,8,5,1,5,1,5,3,5,87,8,
5,1,5,1,5,1,5,3,5,92,8,5,5,5,94,8,5,10,5,12,5,97,9,5,1,6,1,6,1,7,1,7,1,7,
5,7,104,8,7,10,7,12,7,107,9,7,1,7,3,7,110,8,7,1,8,1,8,1,9,1,9,1,9,3,9,117,
8,9,1,9,1,9,1,10,1,10,1,11,1,11,1,11,3,11,126,8,11,1,12,1,12,1,12,1,13,1,
13,1,13,5,13,134,8,13,10,13,12,13,137,9,13,1,14,1,14,1,14,1,14,1,14,3,14,
144,8,14,3,14,146,8,14,1,15,1,15,1,15,0,0,16,0,2,4,6,8,10,12,14,16,18,20,
22,24,26,28,30,0,2,2,0,2,2,7,7,2,0,13,13,15,15,155,0,32,1,0,0,0,2,35,1,0,
0,0,4,60,1,0,0,0,6,63,1,0,0,0,8,79,1,0,0,0,10,82,1,0,0,0,12,98,1,0,0,0,14,
100,1,0,0,0,16,111,1,0,0,0,18,113,1,0,0,0,20,120,1,0,0,0,22,122,1,0,0,0,
24,127,1,0,0,0,26,130,1,0,0,0,28,138,1,0,0,0,30,147,1,0,0,0,32,33,3,2,1,
0,33,34,5,0,0,1,34,1,1,0,0,0,35,36,3,4,2,0,36,38,5,1,0,0,37,39,3,18,9,0,
38,37,1,0,0,0,38,39,1,0,0,0,39,40,1,0,0,0,40,43,3,6,3,0,41,42,5,2,0,0,42,
44,3,12,6,0,43,41,1,0,0,0,43,44,1,0,0,0,44,49,1,0,0,0,45,47,5,3,0,0,46,48,
3,14,7,0,47,46,1,0,0,0,47,48,1,0,0,0,48,50,1,0,0,0,49,45,1,0,0,0,49,50,1,
0,0,0,50,52,1,0,0,0,51,53,3,24,12,0,52,51,1,0,0,0,52,53,1,0,0,0,53,55,1,
0,0,0,54,56,3,22,11,0,55,54,1,0,0,0,55,56,1,0,0,0,56,58,1,0,0,0,57,59,5,
16,0,0,58,57,1,0,0,0,58,59,1,0,0,0,59,3,1,0,0,0,60,61,3,30,15,0,61,5,1,0,
0,0,62,64,5,3,0,0,63,62,1,0,0,0,63,64,1,0,0,0,64,65,1,0,0,0,65,66,3,8,4,
0,66,7,1,0,0,0,67,72,3,30,15,0,68,69,5,4,0,0,69,71,3,30,15,0,70,68,1,0,0,
0,71,74,1,0,0,0,72,70,1,0,0,0,72,73,1,0,0,0,73,80,1,0,0,0,74,72,1,0,0,0,
75,76,5,5,0,0,76,77,3,10,5,0,77,78,5,6,0,0,78,80,1,0,0,0,79,67,1,0,0,0,79,
75,1,0,0,0,80,9,1,0,0,0,81,83,5,7,0,0,82,81,1,0,0,0,82,83,1,0,0,0,83,86,
1,0,0,0,84,87,3,30,15,0,85,87,5,13,0,0,86,84,1,0,0,0,86,85,1,0,0,0,87,95,
1,0,0,0,88,91,7,0,0,0,89,92,3,30,15,0,90,92,5,13,0,0,91,89,1,0,0,0,91,90,
1,0,0,0,92,94,1,0,0,0,93,88,1,0,0,0,94,97,1,0,0,0,95,93,1,0,0,0,95,96,1,
0,0,0,96,11,1,0,0,0,97,95,1,0,0,0,98,99,5,13,0,0,99,13,1,0,0,0,100,105,3,
30,15,0,101,102,5,3,0,0,102,104,3,30,15,0,103,101,1,0,0,0,104,107,1,0,0,
0,105,103,1,0,0,0,105,106,1,0,0,0,106,109,1,0,0,0,107,105,1,0,0,0,108,110,
5,3,0,0,109,108,1,0,0,0,109,110,1,0,0,0,110,15,1,0,0,0,111,112,3,30,15,0,
112,17,1,0,0,0,113,116,3,16,8,0,114,115,5,2,0,0,115,117,3,20,10,0,116,114,
1,0,0,0,116,117,1,0,0,0,117,118,1,0,0,0,118,119,5,8,0,0,119,19,1,0,0,0,120,
121,3,30,15,0,121,21,1,0,0,0,122,125,5,9,0,0,123,126,3,30,15,0,124,126,5,
13,0,0,125,123,1,0,0,0,125,124,1,0,0,0,126,23,1,0,0,0,127,128,5,10,0,0,128,
129,3,26,13,0,129,25,1,0,0,0,130,135,3,28,14,0,131,132,5,11,0,0,132,134,
3,28,14,0,133,131,1,0,0,0,134,137,1,0,0,0,135,133,1,0,0,0,135,136,1,0,0,
0,136,27,1,0,0,0,137,135,1,0,0,0,138,145,3,30,15,0,139,143,5,12,0,0,140,
144,3,30,15,0,141,144,5,13,0,0,142,144,5,14,0,0,143,140,1,0,0,0,143,141,
1,0,0,0,143,142,1,0,0,0,144,146,1,0,0,0,145,139,1,0,0,0,145,146,1,0,0,0,
146,29,1,0,0,0,147,148,7,1,0,0,148,31,1,0,0,0,21,38,43,47,49,52,55,58,63,
72,79,82,86,91,95,105,109,116,125,135,143,145];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class urlParser extends antlr4.Parser {

    static grammarFileName = "url.g4";
    static literalNames = [ null, "'://'", "':'", "'/'", "'.'", "'['", "']'", 
                            "'::'", "'@'", "'#'", "'?'", "'&'", "'='" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "DIGITS", "HEX", 
                             "STRING", "WS" ];
    static ruleNames = [ "url", "uri", "scheme", "host", "hostname", "v6host", 
                         "port", "path", "user", "login", "password", "frag", 
                         "query", "search", "searchparameter", "string" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = urlParser.ruleNames;
        this.literalNames = urlParser.literalNames;
        this.symbolicNames = urlParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	url() {
	    let localctx = new UrlContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, urlParser.RULE_url);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.uri();
	        this.state = 33;
	        this.match(urlParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	uri() {
	    let localctx = new UriContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, urlParser.RULE_uri);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.scheme();
	        this.state = 36;
	        this.match(urlParser.T__0);
	        this.state = 38;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        if(la_===1) {
	            this.state = 37;
	            this.login();

	        }
	        this.state = 40;
	        this.host();
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===urlParser.T__1) {
	            this.state = 41;
	            this.match(urlParser.T__1);
	            this.state = 42;
	            this.port();
	        }

	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===urlParser.T__2) {
	            this.state = 45;
	            this.match(urlParser.T__2);
	            this.state = 47;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===urlParser.DIGITS || _la===urlParser.STRING) {
	                this.state = 46;
	                this.path();
	            }

	        }

	        this.state = 52;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===urlParser.T__9) {
	            this.state = 51;
	            this.query();
	        }

	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===urlParser.T__8) {
	            this.state = 54;
	            this.frag();
	        }

	        this.state = 58;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===urlParser.WS) {
	            this.state = 57;
	            this.match(urlParser.WS);
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



	scheme() {
	    let localctx = new SchemeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, urlParser.RULE_scheme);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.string();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	host() {
	    let localctx = new HostContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, urlParser.RULE_host);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===urlParser.T__2) {
	            this.state = 62;
	            this.match(urlParser.T__2);
	        }

	        this.state = 65;
	        this.hostname();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	hostname() {
	    let localctx = new HostnameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, urlParser.RULE_hostname);
	    var _la = 0; // Token type
	    try {
	        this.state = 79;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case urlParser.DIGITS:
	        case urlParser.STRING:
	            localctx = new DomainNameOrIPv4HostContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 67;
	            this.string();
	            this.state = 72;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===urlParser.T__3) {
	                this.state = 68;
	                this.match(urlParser.T__3);
	                this.state = 69;
	                this.string();
	                this.state = 74;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case urlParser.T__4:
	            localctx = new IPv6HostContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 75;
	            this.match(urlParser.T__4);
	            this.state = 76;
	            this.v6host();
	            this.state = 77;
	            this.match(urlParser.T__5);
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



	v6host() {
	    let localctx = new V6hostContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, urlParser.RULE_v6host);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===urlParser.T__6) {
	            this.state = 81;
	            this.match(urlParser.T__6);
	        }

	        this.state = 86;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 84;
	            this.string();
	            break;

	        case 2:
	            this.state = 85;
	            this.match(urlParser.DIGITS);
	            break;

	        }
	        this.state = 95;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===urlParser.T__1 || _la===urlParser.T__6) {
	            this.state = 88;
	            _la = this._input.LA(1);
	            if(!(_la===urlParser.T__1 || _la===urlParser.T__6)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 91;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 89;
	                this.string();
	                break;

	            case 2:
	                this.state = 90;
	                this.match(urlParser.DIGITS);
	                break;

	            }
	            this.state = 97;
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



	port() {
	    let localctx = new PortContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, urlParser.RULE_port);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        this.match(urlParser.DIGITS);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	path() {
	    let localctx = new PathContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, urlParser.RULE_path);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this.string();
	        this.state = 105;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 101;
	                this.match(urlParser.T__2);
	                this.state = 102;
	                this.string(); 
	            }
	            this.state = 107;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	        }

	        this.state = 109;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===urlParser.T__2) {
	            this.state = 108;
	            this.match(urlParser.T__2);
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



	user() {
	    let localctx = new UserContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, urlParser.RULE_user);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.string();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	login() {
	    let localctx = new LoginContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, urlParser.RULE_login);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        this.user();
	        this.state = 116;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===urlParser.T__1) {
	            this.state = 114;
	            this.match(urlParser.T__1);
	            this.state = 115;
	            this.password();
	        }

	        this.state = 118;
	        this.match(urlParser.T__7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	password() {
	    let localctx = new PasswordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, urlParser.RULE_password);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.string();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	frag() {
	    let localctx = new FragContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, urlParser.RULE_frag);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(urlParser.T__8);
	        this.state = 125;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 123;
	            this.string();
	            break;

	        case 2:
	            this.state = 124;
	            this.match(urlParser.DIGITS);
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



	query() {
	    let localctx = new QueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, urlParser.RULE_query);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        this.match(urlParser.T__9);
	        this.state = 128;
	        this.search();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	search() {
	    let localctx = new SearchContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, urlParser.RULE_search);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130;
	        this.searchparameter();
	        this.state = 135;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===urlParser.T__10) {
	            this.state = 131;
	            this.match(urlParser.T__10);
	            this.state = 132;
	            this.searchparameter();
	            this.state = 137;
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



	searchparameter() {
	    let localctx = new SearchparameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, urlParser.RULE_searchparameter);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        this.string();
	        this.state = 145;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===urlParser.T__11) {
	            this.state = 139;
	            this.match(urlParser.T__11);
	            this.state = 143;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 140;
	                this.string();
	                break;

	            case 2:
	                this.state = 141;
	                this.match(urlParser.DIGITS);
	                break;

	            case 3:
	                this.state = 142;
	                this.match(urlParser.HEX);
	                break;

	            }
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
	    this.enterRule(localctx, 30, urlParser.RULE_string);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        _la = this._input.LA(1);
	        if(!(_la===urlParser.DIGITS || _la===urlParser.STRING)) {
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

urlParser.EOF = antlr4.Token.EOF;
urlParser.T__0 = 1;
urlParser.T__1 = 2;
urlParser.T__2 = 3;
urlParser.T__3 = 4;
urlParser.T__4 = 5;
urlParser.T__5 = 6;
urlParser.T__6 = 7;
urlParser.T__7 = 8;
urlParser.T__8 = 9;
urlParser.T__9 = 10;
urlParser.T__10 = 11;
urlParser.T__11 = 12;
urlParser.DIGITS = 13;
urlParser.HEX = 14;
urlParser.STRING = 15;
urlParser.WS = 16;

urlParser.RULE_url = 0;
urlParser.RULE_uri = 1;
urlParser.RULE_scheme = 2;
urlParser.RULE_host = 3;
urlParser.RULE_hostname = 4;
urlParser.RULE_v6host = 5;
urlParser.RULE_port = 6;
urlParser.RULE_path = 7;
urlParser.RULE_user = 8;
urlParser.RULE_login = 9;
urlParser.RULE_password = 10;
urlParser.RULE_frag = 11;
urlParser.RULE_query = 12;
urlParser.RULE_search = 13;
urlParser.RULE_searchparameter = 14;
urlParser.RULE_string = 15;

class UrlContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = urlParser.RULE_url;
    }

	uri() {
	    return this.getTypedRuleContext(UriContext,0);
	};

	EOF() {
	    return this.getToken(urlParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof urlListener ) {
	        listener.enterUrl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof urlListener ) {
	        listener.exitUrl(this);
		}
	}


}



class UriContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = urlParser.RULE_uri;
    }

	scheme() {
	    return this.getTypedRuleContext(SchemeContext,0);
	};

	host() {
	    return this.getTypedRuleContext(HostContext,0);
	};

	login() {
	    return this.getTypedRuleContext(LoginContext,0);
	};

	port() {
	    return this.getTypedRuleContext(PortContext,0);
	};

	query() {
	    return this.getTypedRuleContext(QueryContext,0);
	};

	frag() {
	    return this.getTypedRuleContext(FragContext,0);
	};

	WS() {
	    return this.getToken(urlParser.WS, 0);
	};

	path() {
	    return this.getTypedRuleContext(PathContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof urlListener ) {
	        listener.enterUri(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof urlListener ) {
	        listener.exitUri(this);
		}
	}


}



class SchemeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = urlParser.RULE_scheme;
    }

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof urlListener ) {
	        listener.enterScheme(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof urlListener ) {
	        listener.exitScheme(this);
		}
	}


}



class HostContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = urlParser.RULE_host;
    }

	hostname() {
	    return this.getTypedRuleContext(HostnameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof urlListener ) {
	        listener.enterHost(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof urlListener ) {
	        listener.exitHost(this);
		}
	}


}



class HostnameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = urlParser.RULE_hostname;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class IPv6HostContext extends HostnameContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	v6host() {
	    return this.getTypedRuleContext(V6hostContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof urlListener ) {
	        listener.enterIPv6Host(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof urlListener ) {
	        listener.exitIPv6Host(this);
		}
	}


}

urlParser.IPv6HostContext = IPv6HostContext;

class DomainNameOrIPv4HostContext extends HostnameContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	string = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StringContext);
	    } else {
	        return this.getTypedRuleContext(StringContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof urlListener ) {
	        listener.enterDomainNameOrIPv4Host(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof urlListener ) {
	        listener.exitDomainNameOrIPv4Host(this);
		}
	}


}

urlParser.DomainNameOrIPv4HostContext = DomainNameOrIPv4HostContext;

class V6hostContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = urlParser.RULE_v6host;
    }

	string = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StringContext);
	    } else {
	        return this.getTypedRuleContext(StringContext,i);
	    }
	};

	DIGITS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(urlParser.DIGITS);
	    } else {
	        return this.getToken(urlParser.DIGITS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof urlListener ) {
	        listener.enterV6host(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof urlListener ) {
	        listener.exitV6host(this);
		}
	}


}



class PortContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = urlParser.RULE_port;
    }

	DIGITS() {
	    return this.getToken(urlParser.DIGITS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof urlListener ) {
	        listener.enterPort(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof urlListener ) {
	        listener.exitPort(this);
		}
	}


}



class PathContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = urlParser.RULE_path;
    }

	string = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StringContext);
	    } else {
	        return this.getTypedRuleContext(StringContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof urlListener ) {
	        listener.enterPath(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof urlListener ) {
	        listener.exitPath(this);
		}
	}


}



class UserContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = urlParser.RULE_user;
    }

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof urlListener ) {
	        listener.enterUser(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof urlListener ) {
	        listener.exitUser(this);
		}
	}


}



class LoginContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = urlParser.RULE_login;
    }

	user() {
	    return this.getTypedRuleContext(UserContext,0);
	};

	password() {
	    return this.getTypedRuleContext(PasswordContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof urlListener ) {
	        listener.enterLogin(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof urlListener ) {
	        listener.exitLogin(this);
		}
	}


}



class PasswordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = urlParser.RULE_password;
    }

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof urlListener ) {
	        listener.enterPassword(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof urlListener ) {
	        listener.exitPassword(this);
		}
	}


}



class FragContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = urlParser.RULE_frag;
    }

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	DIGITS() {
	    return this.getToken(urlParser.DIGITS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof urlListener ) {
	        listener.enterFrag(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof urlListener ) {
	        listener.exitFrag(this);
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
        this.ruleIndex = urlParser.RULE_query;
    }

	search() {
	    return this.getTypedRuleContext(SearchContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof urlListener ) {
	        listener.enterQuery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof urlListener ) {
	        listener.exitQuery(this);
		}
	}


}



class SearchContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = urlParser.RULE_search;
    }

	searchparameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SearchparameterContext);
	    } else {
	        return this.getTypedRuleContext(SearchparameterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof urlListener ) {
	        listener.enterSearch(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof urlListener ) {
	        listener.exitSearch(this);
		}
	}


}



class SearchparameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = urlParser.RULE_searchparameter;
    }

	string = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StringContext);
	    } else {
	        return this.getTypedRuleContext(StringContext,i);
	    }
	};

	DIGITS() {
	    return this.getToken(urlParser.DIGITS, 0);
	};

	HEX() {
	    return this.getToken(urlParser.HEX, 0);
	};

	enterRule(listener) {
	    if(listener instanceof urlListener ) {
	        listener.enterSearchparameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof urlListener ) {
	        listener.exitSearchparameter(this);
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
        this.ruleIndex = urlParser.RULE_string;
    }

	STRING() {
	    return this.getToken(urlParser.STRING, 0);
	};

	DIGITS() {
	    return this.getToken(urlParser.DIGITS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof urlListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof urlListener ) {
	        listener.exitString(this);
		}
	}


}




urlParser.UrlContext = UrlContext; 
urlParser.UriContext = UriContext; 
urlParser.SchemeContext = SchemeContext; 
urlParser.HostContext = HostContext; 
urlParser.HostnameContext = HostnameContext; 
urlParser.V6hostContext = V6hostContext; 
urlParser.PortContext = PortContext; 
urlParser.PathContext = PathContext; 
urlParser.UserContext = UserContext; 
urlParser.LoginContext = LoginContext; 
urlParser.PasswordContext = PasswordContext; 
urlParser.FragContext = FragContext; 
urlParser.QueryContext = QueryContext; 
urlParser.SearchContext = SearchContext; 
urlParser.SearchparameterContext = SearchparameterContext; 
urlParser.StringContext = StringContext; 
