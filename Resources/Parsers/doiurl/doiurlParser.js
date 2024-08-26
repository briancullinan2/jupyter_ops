// Generated from Resources/Parsers/doiurl/doiurl.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import doiurlListener from './doiurlListener.js';
const serializedATN = [4,1,7,64,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,1,0,1,0,3,0,22,8,0,1,0,1,0,3,0,26,8,
0,1,0,3,0,29,8,0,1,1,1,1,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,4,5,4,42,8,4,
10,4,12,4,45,9,4,1,5,4,5,48,8,5,11,5,12,5,49,1,6,5,6,53,8,6,10,6,12,6,56,
9,6,1,7,5,7,59,8,7,10,7,12,7,62,9,7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,1,2,0,
2,2,5,6,62,0,16,1,0,0,0,2,30,1,0,0,0,4,32,1,0,0,0,6,36,1,0,0,0,8,38,1,0,
0,0,10,47,1,0,0,0,12,54,1,0,0,0,14,60,1,0,0,0,16,17,3,2,1,0,17,18,5,1,0,
0,18,21,3,4,2,0,19,20,5,2,0,0,20,22,3,12,6,0,21,19,1,0,0,0,21,22,1,0,0,0,
22,25,1,0,0,0,23,24,5,3,0,0,24,26,3,14,7,0,25,23,1,0,0,0,25,26,1,0,0,0,26,
28,1,0,0,0,27,29,5,0,0,1,28,27,1,0,0,0,28,29,1,0,0,0,29,1,1,0,0,0,30,31,
5,4,0,0,31,3,1,0,0,0,32,33,3,6,3,0,33,34,5,5,0,0,34,35,3,8,4,0,35,5,1,0,
0,0,36,37,3,10,5,0,37,7,1,0,0,0,38,43,3,10,5,0,39,40,5,5,0,0,40,42,3,10,
5,0,41,39,1,0,0,0,42,45,1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,0,44,9,1,0,0,0,
45,43,1,0,0,0,46,48,5,6,0,0,47,46,1,0,0,0,48,49,1,0,0,0,49,47,1,0,0,0,49,
50,1,0,0,0,50,11,1,0,0,0,51,53,7,0,0,0,52,51,1,0,0,0,53,56,1,0,0,0,54,52,
1,0,0,0,54,55,1,0,0,0,55,13,1,0,0,0,56,54,1,0,0,0,57,59,7,0,0,0,58,57,1,
0,0,0,59,62,1,0,0,0,60,58,1,0,0,0,60,61,1,0,0,0,61,15,1,0,0,0,62,60,1,0,
0,0,7,21,25,28,43,49,54,60];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class doiurlParser extends antlr4.Parser {

    static grammarFileName = "doiurl.g4";
    static literalNames = [ null, "':'", "'?'", "'#'", "'doi'", "'/'" ];
    static symbolicNames = [ null, null, null, null, null, null, "PCHAR", 
                             "WS" ];
    static ruleNames = [ "doiuri", "scheme", "encodeddoi", "prefix_", "suffix", 
                         "segment", "query", "fragment_" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = doiurlParser.ruleNames;
        this.literalNames = doiurlParser.literalNames;
        this.symbolicNames = doiurlParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	doiuri() {
	    let localctx = new DoiuriContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, doiurlParser.RULE_doiuri);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.scheme();
	        this.state = 17;
	        this.match(doiurlParser.T__0);
	        this.state = 18;
	        this.encodeddoi();
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===doiurlParser.T__1) {
	            this.state = 19;
	            this.match(doiurlParser.T__1);
	            this.state = 20;
	            this.query();
	        }

	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===doiurlParser.T__2) {
	            this.state = 23;
	            this.match(doiurlParser.T__2);
	            this.state = 24;
	            this.fragment_();
	        }

	        this.state = 28;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 27;
	            this.match(doiurlParser.EOF);

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
	    this.enterRule(localctx, 2, doiurlParser.RULE_scheme);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.match(doiurlParser.T__3);
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



	encodeddoi() {
	    let localctx = new EncodeddoiContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, doiurlParser.RULE_encodeddoi);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.prefix_();
	        this.state = 33;
	        this.match(doiurlParser.T__4);
	        this.state = 34;
	        this.suffix();
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



	prefix_() {
	    let localctx = new Prefix_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, doiurlParser.RULE_prefix_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.segment();
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



	suffix() {
	    let localctx = new SuffixContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, doiurlParser.RULE_suffix);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.segment();
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===doiurlParser.T__4) {
	            this.state = 39;
	            this.match(doiurlParser.T__4);
	            this.state = 40;
	            this.segment();
	            this.state = 45;
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



	segment() {
	    let localctx = new SegmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, doiurlParser.RULE_segment);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 46;
	            this.match(doiurlParser.PCHAR);
	            this.state = 49; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===doiurlParser.PCHAR);
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
	    this.enterRule(localctx, 12, doiurlParser.RULE_query);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << doiurlParser.T__1) | (1 << doiurlParser.T__4) | (1 << doiurlParser.PCHAR))) !== 0)) {
	            this.state = 51;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << doiurlParser.T__1) | (1 << doiurlParser.T__4) | (1 << doiurlParser.PCHAR))) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 56;
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



	fragment_() {
	    let localctx = new Fragment_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, doiurlParser.RULE_fragment_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << doiurlParser.T__1) | (1 << doiurlParser.T__4) | (1 << doiurlParser.PCHAR))) !== 0)) {
	            this.state = 57;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << doiurlParser.T__1) | (1 << doiurlParser.T__4) | (1 << doiurlParser.PCHAR))) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 62;
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


}

doiurlParser.EOF = antlr4.Token.EOF;
doiurlParser.T__0 = 1;
doiurlParser.T__1 = 2;
doiurlParser.T__2 = 3;
doiurlParser.T__3 = 4;
doiurlParser.T__4 = 5;
doiurlParser.PCHAR = 6;
doiurlParser.WS = 7;

doiurlParser.RULE_doiuri = 0;
doiurlParser.RULE_scheme = 1;
doiurlParser.RULE_encodeddoi = 2;
doiurlParser.RULE_prefix_ = 3;
doiurlParser.RULE_suffix = 4;
doiurlParser.RULE_segment = 5;
doiurlParser.RULE_query = 6;
doiurlParser.RULE_fragment_ = 7;

class DoiuriContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = doiurlParser.RULE_doiuri;
    }

	scheme() {
	    return this.getTypedRuleContext(SchemeContext,0);
	};

	encodeddoi() {
	    return this.getTypedRuleContext(EncodeddoiContext,0);
	};

	query() {
	    return this.getTypedRuleContext(QueryContext,0);
	};

	fragment_() {
	    return this.getTypedRuleContext(Fragment_Context,0);
	};

	EOF() {
	    return this.getToken(doiurlParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof doiurlListener ) {
	        listener.enterDoiuri(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof doiurlListener ) {
	        listener.exitDoiuri(this);
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
        this.ruleIndex = doiurlParser.RULE_scheme;
    }


	enterRule(listener) {
	    if(listener instanceof doiurlListener ) {
	        listener.enterScheme(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof doiurlListener ) {
	        listener.exitScheme(this);
		}
	}


}



class EncodeddoiContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = doiurlParser.RULE_encodeddoi;
    }

	prefix_() {
	    return this.getTypedRuleContext(Prefix_Context,0);
	};

	suffix() {
	    return this.getTypedRuleContext(SuffixContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof doiurlListener ) {
	        listener.enterEncodeddoi(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof doiurlListener ) {
	        listener.exitEncodeddoi(this);
		}
	}


}



class Prefix_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = doiurlParser.RULE_prefix_;
    }

	segment() {
	    return this.getTypedRuleContext(SegmentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof doiurlListener ) {
	        listener.enterPrefix_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof doiurlListener ) {
	        listener.exitPrefix_(this);
		}
	}


}



class SuffixContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = doiurlParser.RULE_suffix;
    }

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
	    if(listener instanceof doiurlListener ) {
	        listener.enterSuffix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof doiurlListener ) {
	        listener.exitSuffix(this);
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
        this.ruleIndex = doiurlParser.RULE_segment;
    }

	PCHAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(doiurlParser.PCHAR);
	    } else {
	        return this.getToken(doiurlParser.PCHAR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof doiurlListener ) {
	        listener.enterSegment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof doiurlListener ) {
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
        this.ruleIndex = doiurlParser.RULE_query;
    }

	PCHAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(doiurlParser.PCHAR);
	    } else {
	        return this.getToken(doiurlParser.PCHAR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof doiurlListener ) {
	        listener.enterQuery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof doiurlListener ) {
	        listener.exitQuery(this);
		}
	}


}



class Fragment_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = doiurlParser.RULE_fragment_;
    }

	PCHAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(doiurlParser.PCHAR);
	    } else {
	        return this.getToken(doiurlParser.PCHAR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof doiurlListener ) {
	        listener.enterFragment_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof doiurlListener ) {
	        listener.exitFragment_(this);
		}
	}


}




doiurlParser.DoiuriContext = DoiuriContext; 
doiurlParser.SchemeContext = SchemeContext; 
doiurlParser.EncodeddoiContext = EncodeddoiContext; 
doiurlParser.Prefix_Context = Prefix_Context; 
doiurlParser.SuffixContext = SuffixContext; 
doiurlParser.SegmentContext = SegmentContext; 
doiurlParser.QueryContext = QueryContext; 
doiurlParser.Fragment_Context = Fragment_Context; 
