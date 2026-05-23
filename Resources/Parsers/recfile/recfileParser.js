// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/recfile/recfile.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import recfileListener from './recfileListener.js';
const serializedATN = [4,1,7,48,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,5,0,14,8,0,10,0,12,0,17,9,0,1,0,1,0,1,1,1,1,3,1,23,8,1,1,1,1,
1,1,2,1,2,1,2,1,2,1,2,3,2,32,8,2,1,2,1,2,1,3,1,3,1,3,1,3,3,3,40,8,3,1,3,
1,3,1,4,1,4,1,5,1,5,1,5,0,0,6,0,2,4,6,8,10,0,0,46,0,15,1,0,0,0,2,22,1,0,
0,0,4,26,1,0,0,0,6,35,1,0,0,0,8,43,1,0,0,0,10,45,1,0,0,0,12,14,3,2,1,0,13,
12,1,0,0,0,14,17,1,0,0,0,15,13,1,0,0,0,15,16,1,0,0,0,16,18,1,0,0,0,17,15,
1,0,0,0,18,19,5,0,0,1,19,1,1,0,0,0,20,23,3,4,2,0,21,23,3,6,3,0,22,20,1,0,
0,0,22,21,1,0,0,0,22,23,1,0,0,0,23,24,1,0,0,0,24,25,5,5,0,0,25,3,1,0,0,0,
26,27,5,1,0,0,27,28,3,8,4,0,28,31,5,2,0,0,29,30,5,5,0,0,30,32,5,3,0,0,31,
29,1,0,0,0,31,32,1,0,0,0,32,33,1,0,0,0,33,34,3,10,5,0,34,5,1,0,0,0,35,36,
3,8,4,0,36,39,5,2,0,0,37,38,5,5,0,0,38,40,5,3,0,0,39,37,1,0,0,0,39,40,1,
0,0,0,40,41,1,0,0,0,41,42,3,10,5,0,42,7,1,0,0,0,43,44,5,4,0,0,44,9,1,0,0,
0,45,46,5,4,0,0,46,11,1,0,0,0,4,15,22,31,39];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class recfileParser extends antlr4.Parser {

    static grammarFileName = "recfile.g4";
    static literalNames = [ null, "'%'", "':'", "'+'" ];
    static symbolicNames = [ null, null, null, null, "STRING", "EOL", "COMMENT", 
                             "WS" ];
    static ruleNames = [ "file_", "line", "descriptor", "record", "key", 
                         "value" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = recfileParser.ruleNames;
        this.literalNames = recfileParser.literalNames;
        this.symbolicNames = recfileParser.symbolicNames;
    }



	file_() {
	    let localctx = new File_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, recfileParser.RULE_file_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 50) !== 0)) {
	            this.state = 12;
	            this.line();
	            this.state = 17;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 18;
	        this.match(recfileParser.EOF);
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
	    this.enterRule(localctx, 2, recfileParser.RULE_line);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case 1:
	        	this.state = 20;
	        	this.descriptor();
	        	break;
	        case 4:
	        	this.state = 21;
	        	this.record();
	        	break;
	        case 5:
	        	break;
	        default:
	        	break;
	        }
	        this.state = 24;
	        this.match(recfileParser.EOL);
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



	descriptor() {
	    let localctx = new DescriptorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, recfileParser.RULE_descriptor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.match(recfileParser.T__0);
	        this.state = 27;
	        this.key();
	        this.state = 28;
	        this.match(recfileParser.T__1);
	        this.state = 31;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 29;
	            this.match(recfileParser.EOL);
	            this.state = 30;
	            this.match(recfileParser.T__2);
	        }

	        this.state = 33;
	        this.value();
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



	record() {
	    let localctx = new RecordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, recfileParser.RULE_record);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.key();
	        this.state = 36;
	        this.match(recfileParser.T__1);
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 37;
	            this.match(recfileParser.EOL);
	            this.state = 38;
	            this.match(recfileParser.T__2);
	        }

	        this.state = 41;
	        this.value();
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



	key() {
	    let localctx = new KeyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, recfileParser.RULE_key);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(recfileParser.STRING);
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
	    this.enterRule(localctx, 10, recfileParser.RULE_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(recfileParser.STRING);
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

recfileParser.EOF = antlr4.Token.EOF;
recfileParser.T__0 = 1;
recfileParser.T__1 = 2;
recfileParser.T__2 = 3;
recfileParser.STRING = 4;
recfileParser.EOL = 5;
recfileParser.COMMENT = 6;
recfileParser.WS = 7;

recfileParser.RULE_file_ = 0;
recfileParser.RULE_line = 1;
recfileParser.RULE_descriptor = 2;
recfileParser.RULE_record = 3;
recfileParser.RULE_key = 4;
recfileParser.RULE_value = 5;

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
        this.ruleIndex = recfileParser.RULE_file_;
    }

	EOF() {
	    return this.getToken(recfileParser.EOF, 0);
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
	    if(listener instanceof recfileListener ) {
	        listener.enterFile_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof recfileListener ) {
	        listener.exitFile_(this);
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
        this.ruleIndex = recfileParser.RULE_line;
    }

	EOL() {
	    return this.getToken(recfileParser.EOL, 0);
	};

	descriptor() {
	    return this.getTypedRuleContext(DescriptorContext,0);
	};

	record() {
	    return this.getTypedRuleContext(RecordContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof recfileListener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof recfileListener ) {
	        listener.exitLine(this);
		}
	}


}



class DescriptorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = recfileParser.RULE_descriptor;
    }

	key() {
	    return this.getTypedRuleContext(KeyContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	EOL() {
	    return this.getToken(recfileParser.EOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof recfileListener ) {
	        listener.enterDescriptor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof recfileListener ) {
	        listener.exitDescriptor(this);
		}
	}


}



class RecordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = recfileParser.RULE_record;
    }

	key() {
	    return this.getTypedRuleContext(KeyContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	EOL() {
	    return this.getToken(recfileParser.EOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof recfileListener ) {
	        listener.enterRecord(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof recfileListener ) {
	        listener.exitRecord(this);
		}
	}


}



class KeyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = recfileParser.RULE_key;
    }

	STRING() {
	    return this.getToken(recfileParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof recfileListener ) {
	        listener.enterKey(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof recfileListener ) {
	        listener.exitKey(this);
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
        this.ruleIndex = recfileParser.RULE_value;
    }

	STRING() {
	    return this.getToken(recfileParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof recfileListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof recfileListener ) {
	        listener.exitValue(this);
		}
	}


}




recfileParser.File_Context = File_Context; 
recfileParser.LineContext = LineContext; 
recfileParser.DescriptorContext = DescriptorContext; 
recfileParser.RecordContext = RecordContext; 
recfileParser.KeyContext = KeyContext; 
recfileParser.ValueContext = ValueContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
