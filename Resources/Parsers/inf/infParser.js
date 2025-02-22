// Generated from ./inf/inf.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import infListener from './infListener.js';
const serializedATN = [4,1,9,51,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,1,0,5,0,15,8,0,10,0,12,0,18,9,0,1,1,1,1,5,1,22,8,1,10,1,12,1,
25,9,1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,4,3,4,37,8,4,1,4,1,4,1,5,1,
5,1,5,3,5,44,8,5,5,5,46,8,5,10,5,12,5,49,9,5,1,5,0,0,6,0,2,4,6,8,10,0,1,
1,0,5,6,50,0,16,1,0,0,0,2,19,1,0,0,0,4,26,1,0,0,0,6,31,1,0,0,0,8,33,1,0,
0,0,10,40,1,0,0,0,12,15,3,2,1,0,13,15,5,8,0,0,14,12,1,0,0,0,14,13,1,0,0,
0,15,18,1,0,0,0,16,14,1,0,0,0,16,17,1,0,0,0,17,1,1,0,0,0,18,16,1,0,0,0,19,
23,3,4,2,0,20,22,3,8,4,0,21,20,1,0,0,0,22,25,1,0,0,0,23,21,1,0,0,0,23,24,
1,0,0,0,24,3,1,0,0,0,25,23,1,0,0,0,26,27,5,1,0,0,27,28,3,6,3,0,28,29,5,2,
0,0,29,30,5,8,0,0,30,5,1,0,0,0,31,32,7,0,0,0,32,7,1,0,0,0,33,36,3,10,5,0,
34,35,5,3,0,0,35,37,3,10,5,0,36,34,1,0,0,0,36,37,1,0,0,0,37,38,1,0,0,0,38,
39,5,8,0,0,39,9,1,0,0,0,40,47,3,6,3,0,41,43,5,4,0,0,42,44,3,6,3,0,43,42,
1,0,0,0,43,44,1,0,0,0,44,46,1,0,0,0,45,41,1,0,0,0,46,49,1,0,0,0,47,45,1,
0,0,0,47,48,1,0,0,0,48,11,1,0,0,0,49,47,1,0,0,0,6,14,16,23,36,43,47];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class infParser extends antlr4.Parser {

    static grammarFileName = "inf.g4";
    static literalNames = [ null, "'['", "']'", "'='", "','" ];
    static symbolicNames = [ null, null, null, null, null, "CHARS", "STRING", 
                             "COMMENT", "EOL", "WS" ];
    static ruleNames = [ "inf", "section", "sectionheader", "string", "line", 
                         "stringlist" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = infParser.ruleNames;
        this.literalNames = infParser.literalNames;
        this.symbolicNames = infParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	inf() {
	    let localctx = new InfContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, infParser.RULE_inf);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===infParser.T__0 || _la===infParser.EOL) {
	            this.state = 14;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case infParser.T__0:
	                this.state = 12;
	                this.section();
	                break;
	            case infParser.EOL:
	                this.state = 13;
	                this.match(infParser.EOL);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 18;
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



	section() {
	    let localctx = new SectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, infParser.RULE_section);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this.sectionheader();
	        this.state = 23;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===infParser.CHARS || _la===infParser.STRING) {
	            this.state = 20;
	            this.line();
	            this.state = 25;
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



	sectionheader() {
	    let localctx = new SectionheaderContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, infParser.RULE_sectionheader);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.match(infParser.T__0);
	        this.state = 27;
	        this.string();
	        this.state = 28;
	        this.match(infParser.T__1);
	        this.state = 29;
	        this.match(infParser.EOL);
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
	    this.enterRule(localctx, 6, infParser.RULE_string);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        _la = this._input.LA(1);
	        if(!(_la===infParser.CHARS || _la===infParser.STRING)) {
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



	line() {
	    let localctx = new LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, infParser.RULE_line);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.stringlist();
	        this.state = 36;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===infParser.T__2) {
	            this.state = 34;
	            this.match(infParser.T__2);
	            this.state = 35;
	            this.stringlist();
	        }

	        this.state = 38;
	        this.match(infParser.EOL);
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



	stringlist() {
	    let localctx = new StringlistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, infParser.RULE_stringlist);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.string();
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===infParser.T__3) {
	            this.state = 41;
	            this.match(infParser.T__3);
	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===infParser.CHARS || _la===infParser.STRING) {
	                this.state = 42;
	                this.string();
	            }

	            this.state = 49;
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

infParser.EOF = antlr4.Token.EOF;
infParser.T__0 = 1;
infParser.T__1 = 2;
infParser.T__2 = 3;
infParser.T__3 = 4;
infParser.CHARS = 5;
infParser.STRING = 6;
infParser.COMMENT = 7;
infParser.EOL = 8;
infParser.WS = 9;

infParser.RULE_inf = 0;
infParser.RULE_section = 1;
infParser.RULE_sectionheader = 2;
infParser.RULE_string = 3;
infParser.RULE_line = 4;
infParser.RULE_stringlist = 5;

class InfContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = infParser.RULE_inf;
    }

	section = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SectionContext);
	    } else {
	        return this.getTypedRuleContext(SectionContext,i);
	    }
	};

	EOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(infParser.EOL);
	    } else {
	        return this.getToken(infParser.EOL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof infListener ) {
	        listener.enterInf(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof infListener ) {
	        listener.exitInf(this);
		}
	}


}



class SectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = infParser.RULE_section;
    }

	sectionheader() {
	    return this.getTypedRuleContext(SectionheaderContext,0);
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
	    if(listener instanceof infListener ) {
	        listener.enterSection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof infListener ) {
	        listener.exitSection(this);
		}
	}


}



class SectionheaderContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = infParser.RULE_sectionheader;
    }

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	EOL() {
	    return this.getToken(infParser.EOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof infListener ) {
	        listener.enterSectionheader(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof infListener ) {
	        listener.exitSectionheader(this);
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
        this.ruleIndex = infParser.RULE_string;
    }

	CHARS() {
	    return this.getToken(infParser.CHARS, 0);
	};

	STRING() {
	    return this.getToken(infParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof infListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof infListener ) {
	        listener.exitString(this);
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
        this.ruleIndex = infParser.RULE_line;
    }

	stringlist = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StringlistContext);
	    } else {
	        return this.getTypedRuleContext(StringlistContext,i);
	    }
	};

	EOL() {
	    return this.getToken(infParser.EOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof infListener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof infListener ) {
	        listener.exitLine(this);
		}
	}


}



class StringlistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = infParser.RULE_stringlist;
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
	    if(listener instanceof infListener ) {
	        listener.enterStringlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof infListener ) {
	        listener.exitStringlist(this);
		}
	}


}




infParser.InfContext = InfContext; 
infParser.SectionContext = SectionContext; 
infParser.SectionheaderContext = SectionheaderContext; 
infParser.StringContext = StringContext; 
infParser.LineContext = LineContext; 
infParser.StringlistContext = StringlistContext; 
