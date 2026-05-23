// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/clf/clf.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import clfListener from './clfListener.js';
const serializedATN = [4,1,11,71,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,3,0,24,8,0,1,0,4,0,
27,8,0,11,0,12,0,28,1,0,3,0,32,8,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,3,1,46,8,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,10,0,0,11,0,2,4,6,8,10,12,14,
16,18,20,0,1,1,0,8,9,63,0,26,1,0,0,0,2,35,1,0,0,0,4,47,1,0,0,0,6,49,1,0,
0,0,8,51,1,0,0,0,10,53,1,0,0,0,12,60,1,0,0,0,14,62,1,0,0,0,16,64,1,0,0,0,
18,66,1,0,0,0,20,68,1,0,0,0,22,24,3,2,1,0,23,22,1,0,0,0,23,24,1,0,0,0,24,
25,1,0,0,0,25,27,5,10,0,0,26,23,1,0,0,0,27,28,1,0,0,0,28,26,1,0,0,0,28,29,
1,0,0,0,29,31,1,0,0,0,30,32,3,2,1,0,31,30,1,0,0,0,31,32,1,0,0,0,32,33,1,
0,0,0,33,34,5,0,0,1,34,1,1,0,0,0,35,36,3,4,2,0,36,37,3,6,3,0,37,38,3,8,4,
0,38,39,3,10,5,0,39,40,3,14,7,0,40,41,3,18,9,0,41,45,3,20,10,0,42,43,3,12,
6,0,43,44,3,16,8,0,44,46,1,0,0,0,45,42,1,0,0,0,45,46,1,0,0,0,46,3,1,0,0,
0,47,48,7,0,0,0,48,5,1,0,0,0,49,50,5,9,0,0,50,7,1,0,0,0,51,52,5,9,0,0,52,
9,1,0,0,0,53,54,5,1,0,0,54,55,5,4,0,0,55,56,5,2,0,0,56,57,5,5,0,0,57,58,
5,6,0,0,58,59,5,3,0,0,59,11,1,0,0,0,60,61,5,7,0,0,61,13,1,0,0,0,62,63,5,
7,0,0,63,15,1,0,0,0,64,65,5,7,0,0,65,17,1,0,0,0,66,67,5,9,0,0,67,19,1,0,
0,0,68,69,5,9,0,0,69,21,1,0,0,0,4,23,28,31,45];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class clfParser extends antlr4.Parser {

    static grammarFileName = "clf.g4";
    static literalNames = [ null, "'['", "':'", "']'" ];
    static symbolicNames = [ null, null, null, null, "DATE", "TIME", "TZ", 
                             "LITERAL", "IP", "STRING", "EOL", "WS" ];
    static ruleNames = [ "log", "line", "host", "logname", "username", "datetimetz", 
                         "referer", "request", "useragent", "statuscode", 
                         "bytes" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = clfParser.ruleNames;
        this.literalNames = clfParser.literalNames;
        this.symbolicNames = clfParser.symbolicNames;
    }



	log() {
	    let localctx = new LogContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, clfParser.RULE_log);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 23;
	        		this._errHandler.sync(this);
	        		_la = this._input.LA(1);
	        		if(_la===8 || _la===9) {
	        		    this.state = 22;
	        		    this.line();
	        		}

	        		this.state = 25;
	        		this.match(clfParser.EOL);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 28; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 31;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===8 || _la===9) {
	            this.state = 30;
	            this.line();
	        }

	        this.state = 33;
	        this.match(clfParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	line() {
	    let localctx = new LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, clfParser.RULE_line);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.host();
	        this.state = 36;
	        this.logname();
	        this.state = 37;
	        this.username();
	        this.state = 38;
	        this.datetimetz();
	        this.state = 39;
	        this.request();
	        this.state = 40;
	        this.statuscode();
	        this.state = 41;
	        this.bytes();
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 42;
	            this.referer();
	            this.state = 43;
	            this.useragent();
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



	host() {
	    let localctx = new HostContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, clfParser.RULE_host);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        _la = this._input.LA(1);
	        if(!(_la===8 || _la===9)) {
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



	logname() {
	    let localctx = new LognameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, clfParser.RULE_logname);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(clfParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	username() {
	    let localctx = new UsernameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, clfParser.RULE_username);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(clfParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	datetimetz() {
	    let localctx = new DatetimetzContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, clfParser.RULE_datetimetz);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(clfParser.T__0);
	        this.state = 54;
	        this.match(clfParser.DATE);
	        this.state = 55;
	        this.match(clfParser.T__1);
	        this.state = 56;
	        this.match(clfParser.TIME);
	        this.state = 57;
	        this.match(clfParser.TZ);
	        this.state = 58;
	        this.match(clfParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	referer() {
	    let localctx = new RefererContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, clfParser.RULE_referer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.match(clfParser.LITERAL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	request() {
	    let localctx = new RequestContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, clfParser.RULE_request);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(clfParser.LITERAL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	useragent() {
	    let localctx = new UseragentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, clfParser.RULE_useragent);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(clfParser.LITERAL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statuscode() {
	    let localctx = new StatuscodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, clfParser.RULE_statuscode);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.match(clfParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bytes() {
	    let localctx = new BytesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, clfParser.RULE_bytes);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.match(clfParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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

clfParser.EOF = antlr4.Token.EOF;
clfParser.T__0 = 1;
clfParser.T__1 = 2;
clfParser.T__2 = 3;
clfParser.DATE = 4;
clfParser.TIME = 5;
clfParser.TZ = 6;
clfParser.LITERAL = 7;
clfParser.IP = 8;
clfParser.STRING = 9;
clfParser.EOL = 10;
clfParser.WS = 11;

clfParser.RULE_log = 0;
clfParser.RULE_line = 1;
clfParser.RULE_host = 2;
clfParser.RULE_logname = 3;
clfParser.RULE_username = 4;
clfParser.RULE_datetimetz = 5;
clfParser.RULE_referer = 6;
clfParser.RULE_request = 7;
clfParser.RULE_useragent = 8;
clfParser.RULE_statuscode = 9;
clfParser.RULE_bytes = 10;

class LogContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = clfParser.RULE_log;
    }

	EOF() {
	    return this.getToken(clfParser.EOF, 0);
	};

	EOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(clfParser.EOL);
	    } else {
	        return this.getToken(clfParser.EOL, i);
	    }
	};


	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof clfListener ) {
	        listener.enterLog(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof clfListener ) {
	        listener.exitLog(this);
		}
	}


}



class LineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = clfParser.RULE_line;
    }

	host() {
	    return this.getTypedRuleContext(HostContext,0);
	};

	logname() {
	    return this.getTypedRuleContext(LognameContext,0);
	};

	username() {
	    return this.getTypedRuleContext(UsernameContext,0);
	};

	datetimetz() {
	    return this.getTypedRuleContext(DatetimetzContext,0);
	};

	request() {
	    return this.getTypedRuleContext(RequestContext,0);
	};

	statuscode() {
	    return this.getTypedRuleContext(StatuscodeContext,0);
	};

	bytes() {
	    return this.getTypedRuleContext(BytesContext,0);
	};

	referer() {
	    return this.getTypedRuleContext(RefererContext,0);
	};

	useragent() {
	    return this.getTypedRuleContext(UseragentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof clfListener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof clfListener ) {
	        listener.exitLine(this);
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
        this.ruleIndex = clfParser.RULE_host;
    }

	STRING() {
	    return this.getToken(clfParser.STRING, 0);
	};

	IP() {
	    return this.getToken(clfParser.IP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof clfListener ) {
	        listener.enterHost(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof clfListener ) {
	        listener.exitHost(this);
		}
	}


}



class LognameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = clfParser.RULE_logname;
    }

	STRING() {
	    return this.getToken(clfParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof clfListener ) {
	        listener.enterLogname(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof clfListener ) {
	        listener.exitLogname(this);
		}
	}


}



class UsernameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = clfParser.RULE_username;
    }

	STRING() {
	    return this.getToken(clfParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof clfListener ) {
	        listener.enterUsername(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof clfListener ) {
	        listener.exitUsername(this);
		}
	}


}



class DatetimetzContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = clfParser.RULE_datetimetz;
    }

	DATE() {
	    return this.getToken(clfParser.DATE, 0);
	};

	TIME() {
	    return this.getToken(clfParser.TIME, 0);
	};

	TZ() {
	    return this.getToken(clfParser.TZ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof clfListener ) {
	        listener.enterDatetimetz(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof clfListener ) {
	        listener.exitDatetimetz(this);
		}
	}


}



class RefererContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = clfParser.RULE_referer;
    }

	LITERAL() {
	    return this.getToken(clfParser.LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof clfListener ) {
	        listener.enterReferer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof clfListener ) {
	        listener.exitReferer(this);
		}
	}


}



class RequestContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = clfParser.RULE_request;
    }

	LITERAL() {
	    return this.getToken(clfParser.LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof clfListener ) {
	        listener.enterRequest(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof clfListener ) {
	        listener.exitRequest(this);
		}
	}


}



class UseragentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = clfParser.RULE_useragent;
    }

	LITERAL() {
	    return this.getToken(clfParser.LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof clfListener ) {
	        listener.enterUseragent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof clfListener ) {
	        listener.exitUseragent(this);
		}
	}


}



class StatuscodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = clfParser.RULE_statuscode;
    }

	STRING() {
	    return this.getToken(clfParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof clfListener ) {
	        listener.enterStatuscode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof clfListener ) {
	        listener.exitStatuscode(this);
		}
	}


}



class BytesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = clfParser.RULE_bytes;
    }

	STRING() {
	    return this.getToken(clfParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof clfListener ) {
	        listener.enterBytes(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof clfListener ) {
	        listener.exitBytes(this);
		}
	}


}




clfParser.LogContext = LogContext; 
clfParser.LineContext = LineContext; 
clfParser.HostContext = HostContext; 
clfParser.LognameContext = LognameContext; 
clfParser.UsernameContext = UsernameContext; 
clfParser.DatetimetzContext = DatetimetzContext; 
clfParser.RefererContext = RefererContext; 
clfParser.RequestContext = RequestContext; 
clfParser.UseragentContext = UseragentContext; 
clfParser.StatuscodeContext = StatuscodeContext; 
clfParser.BytesContext = BytesContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
