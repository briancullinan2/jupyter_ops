// Generated from ./useragent/useragent.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import useragentListener from './useragentListener.js';
const serializedATN = [4,1,5,35,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,1,0,3,0,13,8,0,4,0,15,8,0,11,0,12,0,16,1,1,1,1,1,1,1,1,1,2,1,2,1,3,1,
3,1,3,5,3,28,8,3,10,3,12,3,31,9,3,1,4,1,4,1,4,0,0,5,0,2,4,6,8,0,0,32,0,14,
1,0,0,0,2,18,1,0,0,0,4,22,1,0,0,0,6,24,1,0,0,0,8,32,1,0,0,0,10,12,3,2,1,
0,11,13,3,8,4,0,12,11,1,0,0,0,12,13,1,0,0,0,13,15,1,0,0,0,14,10,1,0,0,0,
15,16,1,0,0,0,16,14,1,0,0,0,16,17,1,0,0,0,17,1,1,0,0,0,18,19,3,4,2,0,19,
20,5,1,0,0,20,21,3,6,3,0,21,3,1,0,0,0,22,23,5,4,0,0,23,5,1,0,0,0,24,29,5,
4,0,0,25,26,5,2,0,0,26,28,5,4,0,0,27,25,1,0,0,0,28,31,1,0,0,0,29,27,1,0,
0,0,29,30,1,0,0,0,30,7,1,0,0,0,31,29,1,0,0,0,32,33,5,3,0,0,33,9,1,0,0,0,
3,12,16,29];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class useragentParser extends antlr4.Parser {

    static grammarFileName = "useragent.g4";
    static literalNames = [ null, "'/'", "'.'" ];
    static symbolicNames = [ null, null, null, "COMMENT", "STRING", "WS" ];
    static ruleNames = [ "prog", "product", "name", "version", "comment" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = useragentParser.ruleNames;
        this.literalNames = useragentParser.literalNames;
        this.symbolicNames = useragentParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, useragentParser.RULE_prog);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 10;
	            this.product();
	            this.state = 12;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===useragentParser.COMMENT) {
	                this.state = 11;
	                this.comment();
	            }

	            this.state = 16; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===useragentParser.STRING);
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



	product() {
	    let localctx = new ProductContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, useragentParser.RULE_product);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.name();
	        this.state = 19;
	        this.match(useragentParser.T__0);
	        this.state = 20;
	        this.version();
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
	    this.enterRule(localctx, 4, useragentParser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.match(useragentParser.STRING);
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



	version() {
	    let localctx = new VersionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, useragentParser.RULE_version);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.match(useragentParser.STRING);
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===useragentParser.T__1) {
	            this.state = 25;
	            this.match(useragentParser.T__1);
	            this.state = 26;
	            this.match(useragentParser.STRING);
	            this.state = 31;
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



	comment() {
	    let localctx = new CommentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, useragentParser.RULE_comment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.match(useragentParser.COMMENT);
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

useragentParser.EOF = antlr4.Token.EOF;
useragentParser.T__0 = 1;
useragentParser.T__1 = 2;
useragentParser.COMMENT = 3;
useragentParser.STRING = 4;
useragentParser.WS = 5;

useragentParser.RULE_prog = 0;
useragentParser.RULE_product = 1;
useragentParser.RULE_name = 2;
useragentParser.RULE_version = 3;
useragentParser.RULE_comment = 4;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = useragentParser.RULE_prog;
    }

	product = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ProductContext);
	    } else {
	        return this.getTypedRuleContext(ProductContext,i);
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
	    if(listener instanceof useragentListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof useragentListener ) {
	        listener.exitProg(this);
		}
	}


}



class ProductContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = useragentParser.RULE_product;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	version() {
	    return this.getTypedRuleContext(VersionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof useragentListener ) {
	        listener.enterProduct(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof useragentListener ) {
	        listener.exitProduct(this);
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
        this.ruleIndex = useragentParser.RULE_name;
    }

	STRING() {
	    return this.getToken(useragentParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof useragentListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof useragentListener ) {
	        listener.exitName(this);
		}
	}


}



class VersionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = useragentParser.RULE_version;
    }

	STRING = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(useragentParser.STRING);
	    } else {
	        return this.getToken(useragentParser.STRING, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof useragentListener ) {
	        listener.enterVersion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof useragentListener ) {
	        listener.exitVersion(this);
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
        this.ruleIndex = useragentParser.RULE_comment;
    }

	COMMENT() {
	    return this.getToken(useragentParser.COMMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof useragentListener ) {
	        listener.enterComment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof useragentListener ) {
	        listener.exitComment(this);
		}
	}


}




useragentParser.ProgContext = ProgContext; 
useragentParser.ProductContext = ProductContext; 
useragentParser.NameContext = NameContext; 
useragentParser.VersionContext = VersionContext; 
useragentParser.CommentContext = CommentContext; 
