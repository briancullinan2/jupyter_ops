// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/szf/szf.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import szfListener from './szfListener.js';
const serializedATN = [4,1,7,44,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,5,0,14,8,0,10,0,12,0,17,9,0,1,0,1,0,1,1,1,1,1,1,5,1,24,8,1,10,
1,12,1,27,9,1,1,2,1,2,5,2,31,8,2,10,2,12,2,34,9,2,1,3,1,3,1,3,1,3,1,4,1,
4,1,5,1,5,1,5,0,0,6,0,2,4,6,8,10,0,1,1,0,4,5,41,0,15,1,0,0,0,2,20,1,0,0,
0,4,28,1,0,0,0,6,35,1,0,0,0,8,39,1,0,0,0,10,41,1,0,0,0,12,14,3,2,1,0,13,
12,1,0,0,0,14,17,1,0,0,0,15,13,1,0,0,0,15,16,1,0,0,0,16,18,1,0,0,0,17,15,
1,0,0,0,18,19,5,0,0,1,19,1,1,0,0,0,20,25,5,2,0,0,21,24,3,6,3,0,22,24,3,4,
2,0,23,21,1,0,0,0,23,22,1,0,0,0,24,27,1,0,0,0,25,23,1,0,0,0,25,26,1,0,0,
0,26,3,1,0,0,0,27,25,1,0,0,0,28,32,5,3,0,0,29,31,3,6,3,0,30,29,1,0,0,0,31,
34,1,0,0,0,32,30,1,0,0,0,32,33,1,0,0,0,33,5,1,0,0,0,34,32,1,0,0,0,35,36,
3,8,4,0,36,37,5,1,0,0,37,38,3,10,5,0,38,7,1,0,0,0,39,40,5,4,0,0,40,9,1,0,
0,0,41,42,7,0,0,0,42,11,1,0,0,0,4,15,23,25,32];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class szfParser extends antlr4.Parser {

    static grammarFileName = "szf.g4";
    static literalNames = [ null, "'='", "'<group>'", "'<region>'" ];
    static symbolicNames = [ null, null, "HEADER_START", "REGION_START", 
                             "ID", "NUM", "COMMENT", "WS" ];
    static ruleNames = [ "file_", "header_", "region_", "keyvalue_", "key_", 
                         "value_" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = szfParser.ruleNames;
        this.literalNames = szfParser.literalNames;
        this.symbolicNames = szfParser.symbolicNames;
    }



	file_() {
	    let localctx = new File_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, szfParser.RULE_file_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 12;
	            this.header_();
	            this.state = 17;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 18;
	        this.match(szfParser.EOF);
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



	header_() {
	    let localctx = new Header_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, szfParser.RULE_header_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.match(szfParser.HEADER_START);
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3 || _la===4) {
	            this.state = 23;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 4:
	                this.state = 21;
	                this.keyvalue_();
	                break;
	            case 3:
	                this.state = 22;
	                this.region_();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 27;
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



	region_() {
	    let localctx = new Region_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, szfParser.RULE_region_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(szfParser.REGION_START);
	        this.state = 32;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 29;
	                this.keyvalue_(); 
	            }
	            this.state = 34;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
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



	keyvalue_() {
	    let localctx = new Keyvalue_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, szfParser.RULE_keyvalue_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.key_();
	        this.state = 36;
	        this.match(szfParser.T__0);
	        this.state = 37;
	        this.value_();
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



	key_() {
	    let localctx = new Key_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, szfParser.RULE_key_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.match(szfParser.ID);
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



	value_() {
	    let localctx = new Value_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, szfParser.RULE_value_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        _la = this._input.LA(1);
	        if(!(_la===4 || _la===5)) {
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

szfParser.EOF = antlr4.Token.EOF;
szfParser.T__0 = 1;
szfParser.HEADER_START = 2;
szfParser.REGION_START = 3;
szfParser.ID = 4;
szfParser.NUM = 5;
szfParser.COMMENT = 6;
szfParser.WS = 7;

szfParser.RULE_file_ = 0;
szfParser.RULE_header_ = 1;
szfParser.RULE_region_ = 2;
szfParser.RULE_keyvalue_ = 3;
szfParser.RULE_key_ = 4;
szfParser.RULE_value_ = 5;

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
        this.ruleIndex = szfParser.RULE_file_;
    }

	EOF() {
	    return this.getToken(szfParser.EOF, 0);
	};

	header_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Header_Context);
	    } else {
	        return this.getTypedRuleContext(Header_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof szfListener ) {
	        listener.enterFile_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof szfListener ) {
	        listener.exitFile_(this);
		}
	}


}



class Header_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = szfParser.RULE_header_;
    }

	HEADER_START() {
	    return this.getToken(szfParser.HEADER_START, 0);
	};

	keyvalue_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Keyvalue_Context);
	    } else {
	        return this.getTypedRuleContext(Keyvalue_Context,i);
	    }
	};

	region_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Region_Context);
	    } else {
	        return this.getTypedRuleContext(Region_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof szfListener ) {
	        listener.enterHeader_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof szfListener ) {
	        listener.exitHeader_(this);
		}
	}


}



class Region_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = szfParser.RULE_region_;
    }

	REGION_START() {
	    return this.getToken(szfParser.REGION_START, 0);
	};

	keyvalue_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Keyvalue_Context);
	    } else {
	        return this.getTypedRuleContext(Keyvalue_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof szfListener ) {
	        listener.enterRegion_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof szfListener ) {
	        listener.exitRegion_(this);
		}
	}


}



class Keyvalue_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = szfParser.RULE_keyvalue_;
    }

	key_() {
	    return this.getTypedRuleContext(Key_Context,0);
	};

	value_() {
	    return this.getTypedRuleContext(Value_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof szfListener ) {
	        listener.enterKeyvalue_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof szfListener ) {
	        listener.exitKeyvalue_(this);
		}
	}


}



class Key_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = szfParser.RULE_key_;
    }

	ID() {
	    return this.getToken(szfParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof szfListener ) {
	        listener.enterKey_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof szfListener ) {
	        listener.exitKey_(this);
		}
	}


}



class Value_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = szfParser.RULE_value_;
    }

	ID() {
	    return this.getToken(szfParser.ID, 0);
	};

	NUM() {
	    return this.getToken(szfParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof szfListener ) {
	        listener.enterValue_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof szfListener ) {
	        listener.exitValue_(this);
		}
	}


}




szfParser.File_Context = File_Context; 
szfParser.Header_Context = Header_Context; 
szfParser.Region_Context = Region_Context; 
szfParser.Keyvalue_Context = Keyvalue_Context; 
szfParser.Key_Context = Key_Context; 
szfParser.Value_Context = Value_Context; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
