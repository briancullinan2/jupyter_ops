// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/xyz/xyz.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import xyzListener from './xyzListener.js';
const serializedATN = [4,1,4,41,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,2,5,2,22,8,2,10,2,12,2,25,9,2,
1,3,4,3,28,8,3,11,3,12,3,29,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,23,
0,6,0,2,4,6,8,10,0,0,36,0,12,1,0,0,0,2,16,1,0,0,0,4,23,1,0,0,0,6,27,1,0,
0,0,8,31,1,0,0,0,10,34,1,0,0,0,12,13,3,2,1,0,13,14,3,6,3,0,14,15,5,0,0,1,
15,1,1,0,0,0,16,17,3,8,4,0,17,18,3,4,2,0,18,19,5,3,0,0,19,3,1,0,0,0,20,22,
9,0,0,0,21,20,1,0,0,0,22,25,1,0,0,0,23,24,1,0,0,0,23,21,1,0,0,0,24,5,1,0,
0,0,25,23,1,0,0,0,26,28,3,10,5,0,27,26,1,0,0,0,28,29,1,0,0,0,29,27,1,0,0,
0,29,30,1,0,0,0,30,7,1,0,0,0,31,32,5,2,0,0,32,33,5,3,0,0,33,9,1,0,0,0,34,
35,5,1,0,0,35,36,5,2,0,0,36,37,5,2,0,0,37,38,5,2,0,0,38,39,5,3,0,0,39,11,
1,0,0,0,2,23,29];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class xyzParser extends antlr4.Parser {

    static grammarFileName = "xyz.g4";
    static literalNames = [  ];
    static symbolicNames = [ null, "ATOMNAME", "NUM", "EOL", "WS" ];
    static ruleNames = [ "file_", "header", "desc", "body", "count", "atom" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = xyzParser.ruleNames;
        this.literalNames = xyzParser.literalNames;
        this.symbolicNames = xyzParser.symbolicNames;
    }



	file_() {
	    let localctx = new File_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, xyzParser.RULE_file_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 12;
	        this.header();
	        this.state = 13;
	        this.body();
	        this.state = 14;
	        this.match(xyzParser.EOF);
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



	header() {
	    let localctx = new HeaderContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, xyzParser.RULE_header);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.count();
	        this.state = 17;
	        this.desc();
	        this.state = 18;
	        this.match(xyzParser.EOL);
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



	desc() {
	    let localctx = new DescContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, xyzParser.RULE_desc);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1+1) {
	                this.state = 20;
	                this.matchWildcard(); 
	            }
	            this.state = 25;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
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



	body() {
	    let localctx = new BodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, xyzParser.RULE_body);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 26;
	            this.atom();
	            this.state = 29; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
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



	count() {
	    let localctx = new CountContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, xyzParser.RULE_count);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.match(xyzParser.NUM);
	        this.state = 32;
	        this.match(xyzParser.EOL);
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
	    this.enterRule(localctx, 10, xyzParser.RULE_atom);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.match(xyzParser.ATOMNAME);
	        this.state = 35;
	        this.match(xyzParser.NUM);
	        this.state = 36;
	        this.match(xyzParser.NUM);
	        this.state = 37;
	        this.match(xyzParser.NUM);
	        this.state = 38;
	        this.match(xyzParser.EOL);
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

xyzParser.EOF = antlr4.Token.EOF;
xyzParser.ATOMNAME = 1;
xyzParser.NUM = 2;
xyzParser.EOL = 3;
xyzParser.WS = 4;

xyzParser.RULE_file_ = 0;
xyzParser.RULE_header = 1;
xyzParser.RULE_desc = 2;
xyzParser.RULE_body = 3;
xyzParser.RULE_count = 4;
xyzParser.RULE_atom = 5;

class File_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xyzParser.RULE_file_;
    }

	header() {
	    return this.getTypedRuleContext(HeaderContext,0);
	};

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
	};

	EOF() {
	    return this.getToken(xyzParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xyzListener ) {
	        listener.enterFile_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xyzListener ) {
	        listener.exitFile_(this);
		}
	}


}



class HeaderContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xyzParser.RULE_header;
    }

	count() {
	    return this.getTypedRuleContext(CountContext,0);
	};

	desc() {
	    return this.getTypedRuleContext(DescContext,0);
	};

	EOL() {
	    return this.getToken(xyzParser.EOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xyzListener ) {
	        listener.enterHeader(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xyzListener ) {
	        listener.exitHeader(this);
		}
	}


}



class DescContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xyzParser.RULE_desc;
    }


	enterRule(listener) {
	    if(listener instanceof xyzListener ) {
	        listener.enterDesc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xyzListener ) {
	        listener.exitDesc(this);
		}
	}


}



class BodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xyzParser.RULE_body;
    }

	atom = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AtomContext);
	    } else {
	        return this.getTypedRuleContext(AtomContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof xyzListener ) {
	        listener.enterBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xyzListener ) {
	        listener.exitBody(this);
		}
	}


}



class CountContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xyzParser.RULE_count;
    }

	NUM() {
	    return this.getToken(xyzParser.NUM, 0);
	};

	EOL() {
	    return this.getToken(xyzParser.EOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xyzListener ) {
	        listener.enterCount(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xyzListener ) {
	        listener.exitCount(this);
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
        this.ruleIndex = xyzParser.RULE_atom;
    }

	ATOMNAME() {
	    return this.getToken(xyzParser.ATOMNAME, 0);
	};

	NUM = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(xyzParser.NUM);
	    } else {
	        return this.getToken(xyzParser.NUM, i);
	    }
	};


	EOL() {
	    return this.getToken(xyzParser.EOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xyzListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xyzListener ) {
	        listener.exitAtom(this);
		}
	}


}




xyzParser.File_Context = File_Context; 
xyzParser.HeaderContext = HeaderContext; 
xyzParser.DescContext = DescContext; 
xyzParser.BodyContext = BodyContext; 
xyzParser.CountContext = CountContext; 
xyzParser.AtomContext = AtomContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
