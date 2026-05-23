// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/rfc822/rfc822-emailaddress/emailaddress.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import emailaddressListener from './emailaddressListener.js';
const serializedATN = [4,1,26,166,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,1,
0,1,0,3,0,43,8,0,1,0,1,0,1,1,1,1,1,1,5,1,50,8,1,10,1,12,1,53,9,1,1,1,1,1,
1,2,1,2,1,2,1,2,3,2,61,8,2,1,3,1,3,5,3,65,8,3,10,3,12,3,68,9,3,1,3,1,3,1,
3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,5,6,84,8,6,10,6,12,6,87,9,
6,1,7,1,7,1,7,5,7,92,8,7,10,7,12,7,95,9,7,1,8,1,8,3,8,99,8,8,1,9,1,9,1,10,
4,10,104,8,10,11,10,12,10,105,1,11,1,11,3,11,110,8,11,1,12,1,12,1,13,3,13,
115,8,13,1,13,4,13,118,8,13,11,13,12,13,119,1,14,1,14,1,14,3,14,125,8,14,
1,15,4,15,128,8,15,11,15,12,15,129,1,16,1,16,1,16,1,17,1,17,1,17,5,17,138,
8,17,10,17,12,17,141,9,17,1,17,1,17,1,18,1,18,1,18,5,18,148,8,18,10,18,12,
18,151,9,18,1,18,1,18,1,19,1,19,1,19,1,19,5,19,159,8,19,10,19,12,19,162,
9,19,1,19,1,19,1,19,0,0,20,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,
34,36,38,0,1,1,0,19,20,166,0,42,1,0,0,0,2,46,1,0,0,0,4,60,1,0,0,0,6,62,1,
0,0,0,8,72,1,0,0,0,10,76,1,0,0,0,12,80,1,0,0,0,14,88,1,0,0,0,16,98,1,0,0,
0,18,100,1,0,0,0,20,103,1,0,0,0,22,109,1,0,0,0,24,111,1,0,0,0,26,117,1,0,
0,0,28,124,1,0,0,0,30,127,1,0,0,0,32,131,1,0,0,0,34,134,1,0,0,0,36,144,1,
0,0,0,38,154,1,0,0,0,40,43,3,4,2,0,41,43,3,2,1,0,42,40,1,0,0,0,42,41,1,0,
0,0,43,44,1,0,0,0,44,45,5,0,0,1,45,1,1,0,0,0,46,47,3,20,10,0,47,51,5,1,0,
0,48,50,3,4,2,0,49,48,1,0,0,0,50,53,1,0,0,0,51,49,1,0,0,0,51,52,1,0,0,0,
52,54,1,0,0,0,53,51,1,0,0,0,54,55,5,2,0,0,55,3,1,0,0,0,56,61,3,10,5,0,57,
58,3,20,10,0,58,59,3,6,3,0,59,61,1,0,0,0,60,56,1,0,0,0,60,57,1,0,0,0,61,
5,1,0,0,0,62,66,5,3,0,0,63,65,3,8,4,0,64,63,1,0,0,0,65,68,1,0,0,0,66,64,
1,0,0,0,66,67,1,0,0,0,67,69,1,0,0,0,68,66,1,0,0,0,69,70,3,10,5,0,70,71,5,
4,0,0,71,7,1,0,0,0,72,73,5,5,0,0,73,74,3,14,7,0,74,75,5,1,0,0,75,9,1,0,0,
0,76,77,3,12,6,0,77,78,5,5,0,0,78,79,3,14,7,0,79,11,1,0,0,0,80,85,3,22,11,
0,81,82,5,6,0,0,82,84,3,22,11,0,83,81,1,0,0,0,84,87,1,0,0,0,85,83,1,0,0,
0,85,86,1,0,0,0,86,13,1,0,0,0,87,85,1,0,0,0,88,93,3,16,8,0,89,90,5,6,0,0,
90,92,3,16,8,0,91,89,1,0,0,0,92,95,1,0,0,0,93,91,1,0,0,0,93,94,1,0,0,0,94,
15,1,0,0,0,95,93,1,0,0,0,96,99,3,18,9,0,97,99,3,34,17,0,98,96,1,0,0,0,98,
97,1,0,0,0,99,17,1,0,0,0,100,101,3,30,15,0,101,19,1,0,0,0,102,104,3,22,11,
0,103,102,1,0,0,0,104,105,1,0,0,0,105,103,1,0,0,0,105,106,1,0,0,0,106,21,
1,0,0,0,107,110,3,30,15,0,108,110,3,36,18,0,109,107,1,0,0,0,109,108,1,0,
0,0,110,23,1,0,0,0,111,112,7,0,0,0,112,25,1,0,0,0,113,115,5,21,0,0,114,113,
1,0,0,0,114,115,1,0,0,0,115,116,1,0,0,0,116,118,3,24,12,0,117,114,1,0,0,
0,118,119,1,0,0,0,119,117,1,0,0,0,119,120,1,0,0,0,120,27,1,0,0,0,121,125,
5,22,0,0,122,125,3,26,13,0,123,125,3,38,19,0,124,121,1,0,0,0,124,122,1,0,
0,0,124,123,1,0,0,0,125,29,1,0,0,0,126,128,5,13,0,0,127,126,1,0,0,0,128,
129,1,0,0,0,129,127,1,0,0,0,129,130,1,0,0,0,130,31,1,0,0,0,131,132,5,7,0,
0,132,133,5,13,0,0,133,33,1,0,0,0,134,139,5,8,0,0,135,138,5,25,0,0,136,138,
3,32,16,0,137,135,1,0,0,0,137,136,1,0,0,0,138,141,1,0,0,0,139,137,1,0,0,
0,139,140,1,0,0,0,140,142,1,0,0,0,141,139,1,0,0,0,142,143,5,9,0,0,143,35,
1,0,0,0,144,149,5,10,0,0,145,148,5,24,0,0,146,148,3,32,16,0,147,145,1,0,
0,0,147,146,1,0,0,0,148,151,1,0,0,0,149,147,1,0,0,0,149,150,1,0,0,0,150,
152,1,0,0,0,151,149,1,0,0,0,152,153,5,10,0,0,153,37,1,0,0,0,154,160,5,11,
0,0,155,159,5,26,0,0,156,159,3,32,16,0,157,159,3,38,19,0,158,155,1,0,0,0,
158,156,1,0,0,0,158,157,1,0,0,0,159,162,1,0,0,0,160,158,1,0,0,0,160,161,
1,0,0,0,161,163,1,0,0,0,162,160,1,0,0,0,163,164,5,12,0,0,164,39,1,0,0,0,
19,42,51,60,66,85,93,98,105,109,114,119,124,129,137,139,147,149,158,160];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class emailaddressParser extends antlr4.Parser {

    static grammarFileName = "emailaddress.g4";
    static literalNames = [ null, "':'", "';'", "'<'", "'>'", "'@'", "'.'", 
                            "'\\'", "'['", "']'", "'''", "'('", "')'", null, 
                            null, null, null, "'\\n'", "'\\r'", "' '", "'\\t'", 
                            "'\\r\\n'", null, "'\"'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "CHAR", "ALPHA", 
                             "DIGIT", "CTL", "CR", "LF", "SPACE", "HTAB", 
                             "CRLF", "SPECIALS", "QUOTE", "QTEXT", "DTEXT", 
                             "CTEXT" ];
    static ruleNames = [ "emailaddress", "group", "mailbox", "routeaddr", 
                         "route", "addrspec", "localpart", "domain", "subdomain", 
                         "domainref", "phrase", "word", "lwspchar", "lwsp", 
                         "delimeters", "atom", "quotedpair", "domainliteral", 
                         "quotedstring", "comment" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = emailaddressParser.ruleNames;
        this.literalNames = emailaddressParser.literalNames;
        this.symbolicNames = emailaddressParser.symbolicNames;
    }



	emailaddress() {
	    let localctx = new EmailaddressContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, emailaddressParser.RULE_emailaddress);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 40;
	            this.mailbox();
	            break;

	        case 2:
	            this.state = 41;
	            this.group();
	            break;

	        }
	        this.state = 44;
	        this.match(emailaddressParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	group() {
	    let localctx = new GroupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, emailaddressParser.RULE_group);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.phrase();
	        this.state = 47;
	        this.match(emailaddressParser.T__0);
	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===10 || _la===13) {
	            this.state = 48;
	            this.mailbox();
	            this.state = 53;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 54;
	        this.match(emailaddressParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mailbox() {
	    let localctx = new MailboxContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, emailaddressParser.RULE_mailbox);
	    try {
	        this.state = 60;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 56;
	            this.addrspec();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 57;
	            this.phrase();
	            this.state = 58;
	            this.routeaddr();
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



	routeaddr() {
	    let localctx = new RouteaddrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, emailaddressParser.RULE_routeaddr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(emailaddressParser.T__2);
	        this.state = 66;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5) {
	            this.state = 63;
	            this.route();
	            this.state = 68;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 69;
	        this.addrspec();
	        this.state = 70;
	        this.match(emailaddressParser.T__3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	route() {
	    let localctx = new RouteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, emailaddressParser.RULE_route);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.match(emailaddressParser.T__4);
	        this.state = 73;
	        this.domain();
	        this.state = 74;
	        this.match(emailaddressParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	addrspec() {
	    let localctx = new AddrspecContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, emailaddressParser.RULE_addrspec);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.localpart();
	        this.state = 77;
	        this.match(emailaddressParser.T__4);
	        this.state = 78;
	        this.domain();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	localpart() {
	    let localctx = new LocalpartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, emailaddressParser.RULE_localpart);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.word();
	        this.state = 85;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 81;
	            this.match(emailaddressParser.T__5);
	            this.state = 82;
	            this.word();
	            this.state = 87;
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



	domain() {
	    let localctx = new DomainContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, emailaddressParser.RULE_domain);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.subdomain();
	        this.state = 93;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 89;
	            this.match(emailaddressParser.T__5);
	            this.state = 90;
	            this.subdomain();
	            this.state = 95;
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



	subdomain() {
	    let localctx = new SubdomainContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, emailaddressParser.RULE_subdomain);
	    try {
	        this.state = 98;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 96;
	            this.domainref();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 97;
	            this.domainliteral();
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



	domainref() {
	    let localctx = new DomainrefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, emailaddressParser.RULE_domainref);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this.atom();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	phrase() {
	    let localctx = new PhraseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, emailaddressParser.RULE_phrase);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 102;
	            this.word();
	            this.state = 105; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===10 || _la===13);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	word() {
	    let localctx = new WordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, emailaddressParser.RULE_word);
	    try {
	        this.state = 109;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 107;
	            this.atom();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 108;
	            this.quotedstring();
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



	lwspchar() {
	    let localctx = new LwspcharContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, emailaddressParser.RULE_lwspchar);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        _la = this._input.LA(1);
	        if(!(_la===19 || _la===20)) {
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



	lwsp() {
	    let localctx = new LwspContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, emailaddressParser.RULE_lwsp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 114;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===21) {
	                this.state = 113;
	                this.match(emailaddressParser.CRLF);
	            }

	            this.state = 116;
	            this.lwspchar();
	            this.state = 119; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3670016) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	delimeters() {
	    let localctx = new DelimetersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, emailaddressParser.RULE_delimeters);
	    try {
	        this.state = 124;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 22:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 121;
	            this.match(emailaddressParser.SPECIALS);
	            break;
	        case 19:
	        case 20:
	        case 21:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 122;
	            this.lwsp();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 123;
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



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, emailaddressParser.RULE_atom);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 126;
	        		this.match(emailaddressParser.CHAR);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 129; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,12, this._ctx);
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



	quotedpair() {
	    let localctx = new QuotedpairContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, emailaddressParser.RULE_quotedpair);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131;
	        this.match(emailaddressParser.T__6);
	        this.state = 132;
	        this.match(emailaddressParser.CHAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	domainliteral() {
	    let localctx = new DomainliteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, emailaddressParser.RULE_domainliteral);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this.match(emailaddressParser.T__7);
	        this.state = 139;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7 || _la===25) {
	            this.state = 137;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 25:
	                this.state = 135;
	                this.match(emailaddressParser.DTEXT);
	                break;
	            case 7:
	                this.state = 136;
	                this.quotedpair();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 141;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 142;
	        this.match(emailaddressParser.T__8);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	quotedstring() {
	    let localctx = new QuotedstringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, emailaddressParser.RULE_quotedstring);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        this.match(emailaddressParser.T__9);
	        this.state = 149;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7 || _la===24) {
	            this.state = 147;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 24:
	                this.state = 145;
	                this.match(emailaddressParser.QTEXT);
	                break;
	            case 7:
	                this.state = 146;
	                this.quotedpair();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 151;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 152;
	        this.match(emailaddressParser.T__9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 38, emailaddressParser.RULE_comment);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this.match(emailaddressParser.T__10);
	        this.state = 160;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 67111040) !== 0)) {
	            this.state = 158;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 26:
	                this.state = 155;
	                this.match(emailaddressParser.CTEXT);
	                break;
	            case 7:
	                this.state = 156;
	                this.quotedpair();
	                break;
	            case 11:
	                this.state = 157;
	                this.comment();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 162;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 163;
	        this.match(emailaddressParser.T__11);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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

emailaddressParser.EOF = antlr4.Token.EOF;
emailaddressParser.T__0 = 1;
emailaddressParser.T__1 = 2;
emailaddressParser.T__2 = 3;
emailaddressParser.T__3 = 4;
emailaddressParser.T__4 = 5;
emailaddressParser.T__5 = 6;
emailaddressParser.T__6 = 7;
emailaddressParser.T__7 = 8;
emailaddressParser.T__8 = 9;
emailaddressParser.T__9 = 10;
emailaddressParser.T__10 = 11;
emailaddressParser.T__11 = 12;
emailaddressParser.CHAR = 13;
emailaddressParser.ALPHA = 14;
emailaddressParser.DIGIT = 15;
emailaddressParser.CTL = 16;
emailaddressParser.CR = 17;
emailaddressParser.LF = 18;
emailaddressParser.SPACE = 19;
emailaddressParser.HTAB = 20;
emailaddressParser.CRLF = 21;
emailaddressParser.SPECIALS = 22;
emailaddressParser.QUOTE = 23;
emailaddressParser.QTEXT = 24;
emailaddressParser.DTEXT = 25;
emailaddressParser.CTEXT = 26;

emailaddressParser.RULE_emailaddress = 0;
emailaddressParser.RULE_group = 1;
emailaddressParser.RULE_mailbox = 2;
emailaddressParser.RULE_routeaddr = 3;
emailaddressParser.RULE_route = 4;
emailaddressParser.RULE_addrspec = 5;
emailaddressParser.RULE_localpart = 6;
emailaddressParser.RULE_domain = 7;
emailaddressParser.RULE_subdomain = 8;
emailaddressParser.RULE_domainref = 9;
emailaddressParser.RULE_phrase = 10;
emailaddressParser.RULE_word = 11;
emailaddressParser.RULE_lwspchar = 12;
emailaddressParser.RULE_lwsp = 13;
emailaddressParser.RULE_delimeters = 14;
emailaddressParser.RULE_atom = 15;
emailaddressParser.RULE_quotedpair = 16;
emailaddressParser.RULE_domainliteral = 17;
emailaddressParser.RULE_quotedstring = 18;
emailaddressParser.RULE_comment = 19;

class EmailaddressContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = emailaddressParser.RULE_emailaddress;
    }

	EOF() {
	    return this.getToken(emailaddressParser.EOF, 0);
	};

	mailbox() {
	    return this.getTypedRuleContext(MailboxContext,0);
	};

	group() {
	    return this.getTypedRuleContext(GroupContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.enterEmailaddress(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.exitEmailaddress(this);
		}
	}


}



class GroupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = emailaddressParser.RULE_group;
    }

	phrase() {
	    return this.getTypedRuleContext(PhraseContext,0);
	};

	mailbox = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MailboxContext);
	    } else {
	        return this.getTypedRuleContext(MailboxContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.enterGroup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.exitGroup(this);
		}
	}


}



class MailboxContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = emailaddressParser.RULE_mailbox;
    }

	addrspec() {
	    return this.getTypedRuleContext(AddrspecContext,0);
	};

	phrase() {
	    return this.getTypedRuleContext(PhraseContext,0);
	};

	routeaddr() {
	    return this.getTypedRuleContext(RouteaddrContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.enterMailbox(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.exitMailbox(this);
		}
	}


}



class RouteaddrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = emailaddressParser.RULE_routeaddr;
    }

	addrspec() {
	    return this.getTypedRuleContext(AddrspecContext,0);
	};

	route = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RouteContext);
	    } else {
	        return this.getTypedRuleContext(RouteContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.enterRouteaddr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.exitRouteaddr(this);
		}
	}


}



class RouteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = emailaddressParser.RULE_route;
    }

	domain() {
	    return this.getTypedRuleContext(DomainContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.enterRoute(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.exitRoute(this);
		}
	}


}



class AddrspecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = emailaddressParser.RULE_addrspec;
    }

	localpart() {
	    return this.getTypedRuleContext(LocalpartContext,0);
	};

	domain() {
	    return this.getTypedRuleContext(DomainContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.enterAddrspec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.exitAddrspec(this);
		}
	}


}



class LocalpartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = emailaddressParser.RULE_localpart;
    }

	word = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WordContext);
	    } else {
	        return this.getTypedRuleContext(WordContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.enterLocalpart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.exitLocalpart(this);
		}
	}


}



class DomainContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = emailaddressParser.RULE_domain;
    }

	subdomain = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SubdomainContext);
	    } else {
	        return this.getTypedRuleContext(SubdomainContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.enterDomain(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.exitDomain(this);
		}
	}


}



class SubdomainContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = emailaddressParser.RULE_subdomain;
    }

	domainref() {
	    return this.getTypedRuleContext(DomainrefContext,0);
	};

	domainliteral() {
	    return this.getTypedRuleContext(DomainliteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.enterSubdomain(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.exitSubdomain(this);
		}
	}


}



class DomainrefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = emailaddressParser.RULE_domainref;
    }

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.enterDomainref(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.exitDomainref(this);
		}
	}


}



class PhraseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = emailaddressParser.RULE_phrase;
    }

	word = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WordContext);
	    } else {
	        return this.getTypedRuleContext(WordContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.enterPhrase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.exitPhrase(this);
		}
	}


}



class WordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = emailaddressParser.RULE_word;
    }

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	quotedstring() {
	    return this.getTypedRuleContext(QuotedstringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.enterWord(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.exitWord(this);
		}
	}


}



class LwspcharContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = emailaddressParser.RULE_lwspchar;
    }

	SPACE() {
	    return this.getToken(emailaddressParser.SPACE, 0);
	};

	HTAB() {
	    return this.getToken(emailaddressParser.HTAB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.enterLwspchar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.exitLwspchar(this);
		}
	}


}



class LwspContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = emailaddressParser.RULE_lwsp;
    }

	lwspchar = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LwspcharContext);
	    } else {
	        return this.getTypedRuleContext(LwspcharContext,i);
	    }
	};

	CRLF = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(emailaddressParser.CRLF);
	    } else {
	        return this.getToken(emailaddressParser.CRLF, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.enterLwsp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.exitLwsp(this);
		}
	}


}



class DelimetersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = emailaddressParser.RULE_delimeters;
    }

	SPECIALS() {
	    return this.getToken(emailaddressParser.SPECIALS, 0);
	};

	lwsp() {
	    return this.getTypedRuleContext(LwspContext,0);
	};

	comment() {
	    return this.getTypedRuleContext(CommentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.enterDelimeters(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.exitDelimeters(this);
		}
	}


}



class AtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = emailaddressParser.RULE_atom;
    }

	CHAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(emailaddressParser.CHAR);
	    } else {
	        return this.getToken(emailaddressParser.CHAR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.exitAtom(this);
		}
	}


}



class QuotedpairContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = emailaddressParser.RULE_quotedpair;
    }

	CHAR() {
	    return this.getToken(emailaddressParser.CHAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.enterQuotedpair(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.exitQuotedpair(this);
		}
	}


}



class DomainliteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = emailaddressParser.RULE_domainliteral;
    }

	DTEXT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(emailaddressParser.DTEXT);
	    } else {
	        return this.getToken(emailaddressParser.DTEXT, i);
	    }
	};


	quotedpair = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(QuotedpairContext);
	    } else {
	        return this.getTypedRuleContext(QuotedpairContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.enterDomainliteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.exitDomainliteral(this);
		}
	}


}



class QuotedstringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = emailaddressParser.RULE_quotedstring;
    }

	QTEXT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(emailaddressParser.QTEXT);
	    } else {
	        return this.getToken(emailaddressParser.QTEXT, i);
	    }
	};


	quotedpair = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(QuotedpairContext);
	    } else {
	        return this.getTypedRuleContext(QuotedpairContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.enterQuotedstring(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.exitQuotedstring(this);
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
        this.ruleIndex = emailaddressParser.RULE_comment;
    }

	CTEXT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(emailaddressParser.CTEXT);
	    } else {
	        return this.getToken(emailaddressParser.CTEXT, i);
	    }
	};


	quotedpair = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(QuotedpairContext);
	    } else {
	        return this.getTypedRuleContext(QuotedpairContext,i);
	    }
	};

	comment = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CommentContext);
	    } else {
	        return this.getTypedRuleContext(CommentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.enterComment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof emailaddressListener ) {
	        listener.exitComment(this);
		}
	}


}




emailaddressParser.EmailaddressContext = EmailaddressContext; 
emailaddressParser.GroupContext = GroupContext; 
emailaddressParser.MailboxContext = MailboxContext; 
emailaddressParser.RouteaddrContext = RouteaddrContext; 
emailaddressParser.RouteContext = RouteContext; 
emailaddressParser.AddrspecContext = AddrspecContext; 
emailaddressParser.LocalpartContext = LocalpartContext; 
emailaddressParser.DomainContext = DomainContext; 
emailaddressParser.SubdomainContext = SubdomainContext; 
emailaddressParser.DomainrefContext = DomainrefContext; 
emailaddressParser.PhraseContext = PhraseContext; 
emailaddressParser.WordContext = WordContext; 
emailaddressParser.LwspcharContext = LwspcharContext; 
emailaddressParser.LwspContext = LwspContext; 
emailaddressParser.DelimetersContext = DelimetersContext; 
emailaddressParser.AtomContext = AtomContext; 
emailaddressParser.QuotedpairContext = QuotedpairContext; 
emailaddressParser.DomainliteralContext = DomainliteralContext; 
emailaddressParser.QuotedstringContext = QuotedstringContext; 
emailaddressParser.CommentContext = CommentContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
