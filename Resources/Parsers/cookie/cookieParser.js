// Generated from Resources/Parsers/cookie/cookie.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import cookieListener from './cookieListener.js';
const serializedATN = [4,1,6,52,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,5,0,20,8,0,10,0,12,0,23,9,0,1,1,1,1,
1,2,1,2,1,2,5,2,30,8,2,10,2,12,2,33,9,2,1,3,1,3,1,3,3,3,38,8,3,1,4,1,4,1,
5,1,5,1,6,1,6,3,6,46,8,6,1,7,1,7,1,8,1,8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,
0,0,46,0,21,1,0,0,0,2,24,1,0,0,0,4,26,1,0,0,0,6,34,1,0,0,0,8,39,1,0,0,0,
10,41,1,0,0,0,12,45,1,0,0,0,14,47,1,0,0,0,16,49,1,0,0,0,18,20,3,4,2,0,19,
18,1,0,0,0,20,23,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,1,1,0,0,0,23,21,
1,0,0,0,24,25,3,8,4,0,25,3,1,0,0,0,26,31,3,6,3,0,27,28,5,1,0,0,28,30,3,6,
3,0,29,27,1,0,0,0,30,33,1,0,0,0,31,29,1,0,0,0,31,32,1,0,0,0,32,5,1,0,0,0,
33,31,1,0,0,0,34,37,3,8,4,0,35,36,5,2,0,0,36,38,3,10,5,0,37,35,1,0,0,0,37,
38,1,0,0,0,38,7,1,0,0,0,39,40,3,14,7,0,40,9,1,0,0,0,41,42,3,12,6,0,42,11,
1,0,0,0,43,46,3,14,7,0,44,46,3,16,8,0,45,43,1,0,0,0,45,44,1,0,0,0,46,13,
1,0,0,0,47,48,5,4,0,0,48,15,1,0,0,0,49,50,5,3,0,0,50,17,1,0,0,0,4,21,31,
37,45];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class cookieParser extends antlr4.Parser {

    static grammarFileName = "cookie.g4";
    static literalNames = [ null, "';'", "'='" ];
    static symbolicNames = [ null, null, null, "STRING", "TOKEN", "DIGIT", 
                             "WS" ];
    static ruleNames = [ "cookie", "name", "av_pairs", "av_pair", "attr", 
                         "value", "word", "token", "quoted_string" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = cookieParser.ruleNames;
        this.literalNames = cookieParser.literalNames;
        this.symbolicNames = cookieParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	cookie() {
	    let localctx = new CookieContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, cookieParser.RULE_cookie);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===cookieParser.TOKEN) {
	            this.state = 18;
	            this.av_pairs();
	            this.state = 23;
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



	name() {
	    let localctx = new NameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, cookieParser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.attr();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	av_pairs() {
	    let localctx = new Av_pairsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, cookieParser.RULE_av_pairs);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.av_pair();
	        this.state = 31;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===cookieParser.T__0) {
	            this.state = 27;
	            this.match(cookieParser.T__0);
	            this.state = 28;
	            this.av_pair();
	            this.state = 33;
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



	av_pair() {
	    let localctx = new Av_pairContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, cookieParser.RULE_av_pair);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.attr();
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===cookieParser.T__1) {
	            this.state = 35;
	            this.match(cookieParser.T__1);
	            this.state = 36;
	            this.value();
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



	attr() {
	    let localctx = new AttrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, cookieParser.RULE_attr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
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



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, cookieParser.RULE_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this.word();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 12, cookieParser.RULE_word);
	    try {
	        this.state = 45;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case cookieParser.TOKEN:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 43;
	            this.token();
	            break;
	        case cookieParser.STRING:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 44;
	            this.quoted_string();
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



	token() {
	    let localctx = new TokenContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, cookieParser.RULE_token);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.match(cookieParser.TOKEN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	quoted_string() {
	    let localctx = new Quoted_stringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, cookieParser.RULE_quoted_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(cookieParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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

cookieParser.EOF = antlr4.Token.EOF;
cookieParser.T__0 = 1;
cookieParser.T__1 = 2;
cookieParser.STRING = 3;
cookieParser.TOKEN = 4;
cookieParser.DIGIT = 5;
cookieParser.WS = 6;

cookieParser.RULE_cookie = 0;
cookieParser.RULE_name = 1;
cookieParser.RULE_av_pairs = 2;
cookieParser.RULE_av_pair = 3;
cookieParser.RULE_attr = 4;
cookieParser.RULE_value = 5;
cookieParser.RULE_word = 6;
cookieParser.RULE_token = 7;
cookieParser.RULE_quoted_string = 8;

class CookieContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cookieParser.RULE_cookie;
    }

	av_pairs = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Av_pairsContext);
	    } else {
	        return this.getTypedRuleContext(Av_pairsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof cookieListener ) {
	        listener.enterCookie(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cookieListener ) {
	        listener.exitCookie(this);
		}
	}


}



class NameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cookieParser.RULE_name;
    }

	attr() {
	    return this.getTypedRuleContext(AttrContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof cookieListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cookieListener ) {
	        listener.exitName(this);
		}
	}


}



class Av_pairsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cookieParser.RULE_av_pairs;
    }

	av_pair = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Av_pairContext);
	    } else {
	        return this.getTypedRuleContext(Av_pairContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof cookieListener ) {
	        listener.enterAv_pairs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cookieListener ) {
	        listener.exitAv_pairs(this);
		}
	}


}



class Av_pairContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cookieParser.RULE_av_pair;
    }

	attr() {
	    return this.getTypedRuleContext(AttrContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof cookieListener ) {
	        listener.enterAv_pair(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cookieListener ) {
	        listener.exitAv_pair(this);
		}
	}


}



class AttrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cookieParser.RULE_attr;
    }

	token() {
	    return this.getTypedRuleContext(TokenContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof cookieListener ) {
	        listener.enterAttr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cookieListener ) {
	        listener.exitAttr(this);
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
        this.ruleIndex = cookieParser.RULE_value;
    }

	word() {
	    return this.getTypedRuleContext(WordContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof cookieListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cookieListener ) {
	        listener.exitValue(this);
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
        this.ruleIndex = cookieParser.RULE_word;
    }

	token() {
	    return this.getTypedRuleContext(TokenContext,0);
	};

	quoted_string() {
	    return this.getTypedRuleContext(Quoted_stringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof cookieListener ) {
	        listener.enterWord(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cookieListener ) {
	        listener.exitWord(this);
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
        this.ruleIndex = cookieParser.RULE_token;
    }

	TOKEN() {
	    return this.getToken(cookieParser.TOKEN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof cookieListener ) {
	        listener.enterToken(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cookieListener ) {
	        listener.exitToken(this);
		}
	}


}



class Quoted_stringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cookieParser.RULE_quoted_string;
    }

	STRING() {
	    return this.getToken(cookieParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof cookieListener ) {
	        listener.enterQuoted_string(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cookieListener ) {
	        listener.exitQuoted_string(this);
		}
	}


}




cookieParser.CookieContext = CookieContext; 
cookieParser.NameContext = NameContext; 
cookieParser.Av_pairsContext = Av_pairsContext; 
cookieParser.Av_pairContext = Av_pairContext; 
cookieParser.AttrContext = AttrContext; 
cookieParser.ValueContext = ValueContext; 
cookieParser.WordContext = WordContext; 
cookieParser.TokenContext = TokenContext; 
cookieParser.Quoted_stringContext = Quoted_stringContext; 
