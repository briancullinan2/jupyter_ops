// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/stellaris/stellaris.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import stellarisListener from './stellarisListener.js';
const serializedATN = [4,1,14,70,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,4,0,20,8,0,11,0,12,0,21,1,0,1,0,1,1,
4,1,27,8,1,11,1,12,1,28,1,2,1,2,4,2,33,8,2,11,2,12,2,34,1,2,1,2,1,3,1,3,
3,3,41,8,3,1,4,1,4,1,4,3,4,46,8,4,1,5,1,5,1,5,1,5,3,5,52,8,5,1,6,1,6,1,7,
1,7,5,7,58,8,7,10,7,12,7,61,9,7,1,7,3,7,64,8,7,1,7,1,7,1,8,1,8,1,8,0,0,9,
0,2,4,6,8,10,12,14,16,0,3,1,0,1,3,1,0,4,6,1,0,9,11,69,0,19,1,0,0,0,2,26,
1,0,0,0,4,30,1,0,0,0,6,40,1,0,0,0,8,45,1,0,0,0,10,47,1,0,0,0,12,53,1,0,0,
0,14,55,1,0,0,0,16,67,1,0,0,0,18,20,3,2,1,0,19,18,1,0,0,0,20,21,1,0,0,0,
21,19,1,0,0,0,21,22,1,0,0,0,22,23,1,0,0,0,23,24,5,0,0,1,24,1,1,0,0,0,25,
27,3,4,2,0,26,25,1,0,0,0,27,28,1,0,0,0,28,26,1,0,0,0,28,29,1,0,0,0,29,3,
1,0,0,0,30,32,3,6,3,0,31,33,7,0,0,0,32,31,1,0,0,0,33,34,1,0,0,0,34,32,1,
0,0,0,34,35,1,0,0,0,35,36,1,0,0,0,36,37,3,8,4,0,37,5,1,0,0,0,38,41,3,16,
8,0,39,41,3,10,5,0,40,38,1,0,0,0,40,39,1,0,0,0,41,7,1,0,0,0,42,46,3,16,8,
0,43,46,3,10,5,0,44,46,3,14,7,0,45,42,1,0,0,0,45,43,1,0,0,0,45,44,1,0,0,
0,46,9,1,0,0,0,47,48,3,16,8,0,48,51,3,12,6,0,49,52,3,10,5,0,50,52,3,16,8,
0,51,49,1,0,0,0,51,50,1,0,0,0,52,11,1,0,0,0,53,54,7,1,0,0,54,13,1,0,0,0,
55,63,5,7,0,0,56,58,3,2,1,0,57,56,1,0,0,0,58,61,1,0,0,0,59,57,1,0,0,0,59,
60,1,0,0,0,60,64,1,0,0,0,61,59,1,0,0,0,62,64,3,16,8,0,63,59,1,0,0,0,63,62,
1,0,0,0,64,65,1,0,0,0,65,66,5,8,0,0,66,15,1,0,0,0,67,68,7,2,0,0,68,17,1,
0,0,0,8,21,28,34,40,45,51,59,63];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class stellarisParser extends antlr4.Parser {

    static grammarFileName = "stellaris.g4";
    static literalNames = [ null, "'='", "'>'", "'<'", "'.'", "'@'", "':'", 
                            "'{'", "'}'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, "IDENTIFIER", "INTEGER", "STRING", "COMMENT", 
                             "SPACE", "NL" ];
    static ruleNames = [ "content", "expr", "keyval", "key", "val", "attrib", 
                         "accessor", "group", "id_" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = stellarisParser.ruleNames;
        this.literalNames = stellarisParser.literalNames;
        this.symbolicNames = stellarisParser.symbolicNames;
    }



	content() {
	    let localctx = new ContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, stellarisParser.RULE_content);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 18;
	            this.expr();
	            this.state = 21; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3584) !== 0));
	        this.state = 23;
	        this.match(stellarisParser.EOF);
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



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, stellarisParser.RULE_expr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 25;
	        		this.keyval();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 28; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
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



	keyval() {
	    let localctx = new KeyvalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, stellarisParser.RULE_keyval);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.key();
	        this.state = 32; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 31;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 14) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 34; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 14) !== 0));
	        this.state = 36;
	        this.val();
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
	    this.enterRule(localctx, 6, stellarisParser.RULE_key);
	    try {
	        this.state = 40;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 38;
	            this.id_();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 39;
	            this.attrib();
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



	val() {
	    let localctx = new ValContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, stellarisParser.RULE_val);
	    try {
	        this.state = 45;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 42;
	            this.id_();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 43;
	            this.attrib();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 44;
	            this.group();
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



	attrib() {
	    let localctx = new AttribContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, stellarisParser.RULE_attrib);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.id_();
	        this.state = 48;
	        this.accessor();
	        this.state = 51;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 49;
	            this.attrib();
	            break;

	        case 2:
	            this.state = 50;
	            this.id_();
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



	accessor() {
	    let localctx = new AccessorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, stellarisParser.RULE_accessor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 112) !== 0))) {
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



	group() {
	    let localctx = new GroupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, stellarisParser.RULE_group);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(stellarisParser.T__6);
	        this.state = 63;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 59;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3584) !== 0)) {
	                this.state = 56;
	                this.expr();
	                this.state = 61;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 2:
	            this.state = 62;
	            this.id_();
	            break;

	        }
	        this.state = 65;
	        this.match(stellarisParser.T__7);
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



	id_() {
	    let localctx = new Id_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, stellarisParser.RULE_id_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 3584) !== 0))) {
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

stellarisParser.EOF = antlr4.Token.EOF;
stellarisParser.T__0 = 1;
stellarisParser.T__1 = 2;
stellarisParser.T__2 = 3;
stellarisParser.T__3 = 4;
stellarisParser.T__4 = 5;
stellarisParser.T__5 = 6;
stellarisParser.T__6 = 7;
stellarisParser.T__7 = 8;
stellarisParser.IDENTIFIER = 9;
stellarisParser.INTEGER = 10;
stellarisParser.STRING = 11;
stellarisParser.COMMENT = 12;
stellarisParser.SPACE = 13;
stellarisParser.NL = 14;

stellarisParser.RULE_content = 0;
stellarisParser.RULE_expr = 1;
stellarisParser.RULE_keyval = 2;
stellarisParser.RULE_key = 3;
stellarisParser.RULE_val = 4;
stellarisParser.RULE_attrib = 5;
stellarisParser.RULE_accessor = 6;
stellarisParser.RULE_group = 7;
stellarisParser.RULE_id_ = 8;

class ContentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = stellarisParser.RULE_content;
    }

	EOF() {
	    return this.getToken(stellarisParser.EOF, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof stellarisListener ) {
	        listener.enterContent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof stellarisListener ) {
	        listener.exitContent(this);
		}
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = stellarisParser.RULE_expr;
    }

	keyval = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(KeyvalContext);
	    } else {
	        return this.getTypedRuleContext(KeyvalContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof stellarisListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof stellarisListener ) {
	        listener.exitExpr(this);
		}
	}


}



class KeyvalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = stellarisParser.RULE_keyval;
    }

	key() {
	    return this.getTypedRuleContext(KeyContext,0);
	};

	val() {
	    return this.getTypedRuleContext(ValContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof stellarisListener ) {
	        listener.enterKeyval(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof stellarisListener ) {
	        listener.exitKeyval(this);
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
        this.ruleIndex = stellarisParser.RULE_key;
    }

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	attrib() {
	    return this.getTypedRuleContext(AttribContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof stellarisListener ) {
	        listener.enterKey(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof stellarisListener ) {
	        listener.exitKey(this);
		}
	}


}



class ValContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = stellarisParser.RULE_val;
    }

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	attrib() {
	    return this.getTypedRuleContext(AttribContext,0);
	};

	group() {
	    return this.getTypedRuleContext(GroupContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof stellarisListener ) {
	        listener.enterVal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof stellarisListener ) {
	        listener.exitVal(this);
		}
	}


}



class AttribContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = stellarisParser.RULE_attrib;
    }

	id_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Id_Context);
	    } else {
	        return this.getTypedRuleContext(Id_Context,i);
	    }
	};

	accessor() {
	    return this.getTypedRuleContext(AccessorContext,0);
	};

	attrib() {
	    return this.getTypedRuleContext(AttribContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof stellarisListener ) {
	        listener.enterAttrib(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof stellarisListener ) {
	        listener.exitAttrib(this);
		}
	}


}



class AccessorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = stellarisParser.RULE_accessor;
    }


	enterRule(listener) {
	    if(listener instanceof stellarisListener ) {
	        listener.enterAccessor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof stellarisListener ) {
	        listener.exitAccessor(this);
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
        this.ruleIndex = stellarisParser.RULE_group;
    }

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof stellarisListener ) {
	        listener.enterGroup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof stellarisListener ) {
	        listener.exitGroup(this);
		}
	}


}



class Id_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = stellarisParser.RULE_id_;
    }

	IDENTIFIER() {
	    return this.getToken(stellarisParser.IDENTIFIER, 0);
	};

	STRING() {
	    return this.getToken(stellarisParser.STRING, 0);
	};

	INTEGER() {
	    return this.getToken(stellarisParser.INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof stellarisListener ) {
	        listener.enterId_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof stellarisListener ) {
	        listener.exitId_(this);
		}
	}


}




stellarisParser.ContentContext = ContentContext; 
stellarisParser.ExprContext = ExprContext; 
stellarisParser.KeyvalContext = KeyvalContext; 
stellarisParser.KeyContext = KeyContext; 
stellarisParser.ValContext = ValContext; 
stellarisParser.AttribContext = AttribContext; 
stellarisParser.AccessorContext = AccessorContext; 
stellarisParser.GroupContext = GroupContext; 
stellarisParser.Id_Context = Id_Context; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
