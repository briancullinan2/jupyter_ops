// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/pbm/pbm.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import pbmListener from './pbmListener.js';
const serializedATN = [4,1,6,32,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,4,4,26,8,4,11,
4,12,4,27,1,5,1,5,1,5,0,0,6,0,2,4,6,8,10,0,1,1,0,1,2,26,0,12,1,0,0,0,2,18,
1,0,0,0,4,20,1,0,0,0,6,22,1,0,0,0,8,25,1,0,0,0,10,29,1,0,0,0,12,13,3,2,1,
0,13,14,3,4,2,0,14,15,3,6,3,0,15,16,3,8,4,0,16,17,5,0,0,1,17,1,1,0,0,0,18,
19,5,3,0,0,19,3,1,0,0,0,20,21,3,10,5,0,21,5,1,0,0,0,22,23,3,10,5,0,23,7,
1,0,0,0,24,26,7,0,0,0,25,24,1,0,0,0,26,27,1,0,0,0,27,25,1,0,0,0,27,28,1,
0,0,0,28,9,1,0,0,0,29,30,5,4,0,0,30,11,1,0,0,0,1,27];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class pbmParser extends antlr4.Parser {

    static grammarFileName = "pbm.g4";
    static literalNames = [ null, "'0'", "'1'" ];
    static symbolicNames = [ null, null, null, "MAGIC", "DIGITS", "COMMENT", 
                             "WS" ];
    static ruleNames = [ "file_", "magic", "width", "height", "table", "number" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = pbmParser.ruleNames;
        this.literalNames = pbmParser.literalNames;
        this.symbolicNames = pbmParser.symbolicNames;
    }



	file_() {
	    let localctx = new File_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, pbmParser.RULE_file_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 12;
	        this.magic();
	        this.state = 13;
	        this.width();
	        this.state = 14;
	        this.height();
	        this.state = 15;
	        this.table();
	        this.state = 16;
	        this.match(pbmParser.EOF);
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



	magic() {
	    let localctx = new MagicContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, pbmParser.RULE_magic);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.match(pbmParser.MAGIC);
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



	width() {
	    let localctx = new WidthContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, pbmParser.RULE_width);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.number();
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



	height() {
	    let localctx = new HeightContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, pbmParser.RULE_height);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.number();
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



	table() {
	    let localctx = new TableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, pbmParser.RULE_table);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 24;
	            _la = this._input.LA(1);
	            if(!(_la===1 || _la===2)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 27; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1 || _la===2);
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



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, pbmParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.match(pbmParser.DIGITS);
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

pbmParser.EOF = antlr4.Token.EOF;
pbmParser.T__0 = 1;
pbmParser.T__1 = 2;
pbmParser.MAGIC = 3;
pbmParser.DIGITS = 4;
pbmParser.COMMENT = 5;
pbmParser.WS = 6;

pbmParser.RULE_file_ = 0;
pbmParser.RULE_magic = 1;
pbmParser.RULE_width = 2;
pbmParser.RULE_height = 3;
pbmParser.RULE_table = 4;
pbmParser.RULE_number = 5;

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
        this.ruleIndex = pbmParser.RULE_file_;
    }

	magic() {
	    return this.getTypedRuleContext(MagicContext,0);
	};

	width() {
	    return this.getTypedRuleContext(WidthContext,0);
	};

	height() {
	    return this.getTypedRuleContext(HeightContext,0);
	};

	table() {
	    return this.getTypedRuleContext(TableContext,0);
	};

	EOF() {
	    return this.getToken(pbmParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pbmListener ) {
	        listener.enterFile_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pbmListener ) {
	        listener.exitFile_(this);
		}
	}


}



class MagicContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pbmParser.RULE_magic;
    }

	MAGIC() {
	    return this.getToken(pbmParser.MAGIC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pbmListener ) {
	        listener.enterMagic(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pbmListener ) {
	        listener.exitMagic(this);
		}
	}


}



class WidthContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pbmParser.RULE_width;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pbmListener ) {
	        listener.enterWidth(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pbmListener ) {
	        listener.exitWidth(this);
		}
	}


}



class HeightContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pbmParser.RULE_height;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pbmListener ) {
	        listener.enterHeight(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pbmListener ) {
	        listener.exitHeight(this);
		}
	}


}



class TableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pbmParser.RULE_table;
    }


	enterRule(listener) {
	    if(listener instanceof pbmListener ) {
	        listener.enterTable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pbmListener ) {
	        listener.exitTable(this);
		}
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pbmParser.RULE_number;
    }

	DIGITS() {
	    return this.getToken(pbmParser.DIGITS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pbmListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pbmListener ) {
	        listener.exitNumber(this);
		}
	}


}




pbmParser.File_Context = File_Context; 
pbmParser.MagicContext = MagicContext; 
pbmParser.WidthContext = WidthContext; 
pbmParser.HeightContext = HeightContext; 
pbmParser.TableContext = TableContext; 
pbmParser.NumberContext = NumberContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
