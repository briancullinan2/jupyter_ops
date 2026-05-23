// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/aterm/aterm.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import atermListener from './atermListener.js';
const serializedATN = [4,1,14,72,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,
3,1,29,8,1,1,1,3,1,32,8,1,1,2,1,2,1,3,1,3,1,4,1,4,3,4,40,8,4,1,5,1,5,3,5,
44,8,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,3,7,54,8,7,1,7,1,7,1,8,1,8,1,8,5,
8,61,8,8,10,8,12,8,64,9,8,1,9,1,9,3,9,68,8,9,1,9,1,9,1,9,0,0,10,0,2,4,6,
8,10,12,14,16,18,0,2,1,0,12,13,1,0,10,11,71,0,20,1,0,0,0,2,28,1,0,0,0,4,
33,1,0,0,0,6,35,1,0,0,0,8,37,1,0,0,0,10,41,1,0,0,0,12,47,1,0,0,0,14,51,1,
0,0,0,16,57,1,0,0,0,18,65,1,0,0,0,20,21,3,2,1,0,21,22,5,0,0,1,22,1,1,0,0,
0,23,29,3,4,2,0,24,29,3,6,3,0,25,29,3,8,4,0,26,29,3,12,6,0,27,29,3,14,7,
0,28,23,1,0,0,0,28,24,1,0,0,0,28,25,1,0,0,0,28,26,1,0,0,0,28,27,1,0,0,0,
29,31,1,0,0,0,30,32,3,18,9,0,31,30,1,0,0,0,31,32,1,0,0,0,32,3,1,0,0,0,33,
34,7,0,0,0,34,5,1,0,0,0,35,36,7,1,0,0,36,7,1,0,0,0,37,39,3,4,2,0,38,40,3,
10,5,0,39,38,1,0,0,0,39,40,1,0,0,0,40,9,1,0,0,0,41,43,5,1,0,0,42,44,3,16,
8,0,43,42,1,0,0,0,43,44,1,0,0,0,44,45,1,0,0,0,45,46,5,2,0,0,46,11,1,0,0,
0,47,48,5,3,0,0,48,49,3,2,1,0,49,50,5,4,0,0,50,13,1,0,0,0,51,53,5,5,0,0,
52,54,3,16,8,0,53,52,1,0,0,0,53,54,1,0,0,0,54,55,1,0,0,0,55,56,5,6,0,0,56,
15,1,0,0,0,57,62,3,2,1,0,58,59,5,7,0,0,59,61,3,2,1,0,60,58,1,0,0,0,61,64,
1,0,0,0,62,60,1,0,0,0,62,63,1,0,0,0,63,17,1,0,0,0,64,62,1,0,0,0,65,67,5,
8,0,0,66,68,3,16,8,0,67,66,1,0,0,0,67,68,1,0,0,0,68,69,1,0,0,0,69,70,5,9,
0,0,70,19,1,0,0,0,7,28,31,39,43,53,62,67];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class atermParser extends antlr4.Parser {

    static grammarFileName = "aterm.g4";
    static literalNames = [ null, "'('", "')'", "'<'", "'>'", "'['", "']'", 
                            "','", "'{'", "'}'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, "REAL_", "INT_", "ID_", "STRING_", 
                             "WS" ];
    static ruleNames = [ "aterm_", "term_", "afun", "num_", "function_", 
                         "args_", "placeholder", "list_", "termlist", "annotation" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = atermParser.ruleNames;
        this.literalNames = atermParser.literalNames;
        this.symbolicNames = atermParser.symbolicNames;
    }



	aterm_() {
	    let localctx = new Aterm_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, atermParser.RULE_aterm_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.term_();
	        this.state = 21;
	        this.match(atermParser.EOF);
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



	term_() {
	    let localctx = new Term_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, atermParser.RULE_term_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 23;
	            this.afun();
	            break;

	        case 2:
	            this.state = 24;
	            this.num_();
	            break;

	        case 3:
	            this.state = 25;
	            this.function_();
	            break;

	        case 4:
	            this.state = 26;
	            this.placeholder();
	            break;

	        case 5:
	            this.state = 27;
	            this.list_();
	            break;

	        }
	        this.state = 31;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===8) {
	            this.state = 30;
	            this.annotation();
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



	afun() {
	    let localctx = new AfunContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, atermParser.RULE_afun);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        _la = this._input.LA(1);
	        if(!(_la===12 || _la===13)) {
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



	num_() {
	    let localctx = new Num_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, atermParser.RULE_num_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        _la = this._input.LA(1);
	        if(!(_la===10 || _la===11)) {
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



	function_() {
	    let localctx = new Function_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, atermParser.RULE_function_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.afun();
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 38;
	            this.args_();
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



	args_() {
	    let localctx = new Args_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, atermParser.RULE_args_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this.match(atermParser.T__0);
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 15400) !== 0)) {
	            this.state = 42;
	            this.termlist();
	        }

	        this.state = 45;
	        this.match(atermParser.T__1);
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



	placeholder() {
	    let localctx = new PlaceholderContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, atermParser.RULE_placeholder);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.match(atermParser.T__2);
	        this.state = 48;
	        this.term_();
	        this.state = 49;
	        this.match(atermParser.T__3);
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



	list_() {
	    let localctx = new List_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, atermParser.RULE_list_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(atermParser.T__4);
	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 15400) !== 0)) {
	            this.state = 52;
	            this.termlist();
	        }

	        this.state = 55;
	        this.match(atermParser.T__5);
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



	termlist() {
	    let localctx = new TermlistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, atermParser.RULE_termlist);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.term_();
	        this.state = 62;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 58;
	            this.match(atermParser.T__6);
	            this.state = 59;
	            this.term_();
	            this.state = 64;
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



	annotation() {
	    let localctx = new AnnotationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, atermParser.RULE_annotation);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(atermParser.T__7);
	        this.state = 67;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 15400) !== 0)) {
	            this.state = 66;
	            this.termlist();
	        }

	        this.state = 69;
	        this.match(atermParser.T__8);
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

atermParser.EOF = antlr4.Token.EOF;
atermParser.T__0 = 1;
atermParser.T__1 = 2;
atermParser.T__2 = 3;
atermParser.T__3 = 4;
atermParser.T__4 = 5;
atermParser.T__5 = 6;
atermParser.T__6 = 7;
atermParser.T__7 = 8;
atermParser.T__8 = 9;
atermParser.REAL_ = 10;
atermParser.INT_ = 11;
atermParser.ID_ = 12;
atermParser.STRING_ = 13;
atermParser.WS = 14;

atermParser.RULE_aterm_ = 0;
atermParser.RULE_term_ = 1;
atermParser.RULE_afun = 2;
atermParser.RULE_num_ = 3;
atermParser.RULE_function_ = 4;
atermParser.RULE_args_ = 5;
atermParser.RULE_placeholder = 6;
atermParser.RULE_list_ = 7;
atermParser.RULE_termlist = 8;
atermParser.RULE_annotation = 9;

class Aterm_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = atermParser.RULE_aterm_;
    }

	term_() {
	    return this.getTypedRuleContext(Term_Context,0);
	};

	EOF() {
	    return this.getToken(atermParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof atermListener ) {
	        listener.enterAterm_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof atermListener ) {
	        listener.exitAterm_(this);
		}
	}


}



class Term_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = atermParser.RULE_term_;
    }

	afun() {
	    return this.getTypedRuleContext(AfunContext,0);
	};

	num_() {
	    return this.getTypedRuleContext(Num_Context,0);
	};

	function_() {
	    return this.getTypedRuleContext(Function_Context,0);
	};

	placeholder() {
	    return this.getTypedRuleContext(PlaceholderContext,0);
	};

	list_() {
	    return this.getTypedRuleContext(List_Context,0);
	};

	annotation() {
	    return this.getTypedRuleContext(AnnotationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof atermListener ) {
	        listener.enterTerm_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof atermListener ) {
	        listener.exitTerm_(this);
		}
	}


}



class AfunContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = atermParser.RULE_afun;
    }

	STRING_() {
	    return this.getToken(atermParser.STRING_, 0);
	};

	ID_() {
	    return this.getToken(atermParser.ID_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof atermListener ) {
	        listener.enterAfun(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof atermListener ) {
	        listener.exitAfun(this);
		}
	}


}



class Num_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = atermParser.RULE_num_;
    }

	INT_() {
	    return this.getToken(atermParser.INT_, 0);
	};

	REAL_() {
	    return this.getToken(atermParser.REAL_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof atermListener ) {
	        listener.enterNum_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof atermListener ) {
	        listener.exitNum_(this);
		}
	}


}



class Function_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = atermParser.RULE_function_;
    }

	afun() {
	    return this.getTypedRuleContext(AfunContext,0);
	};

	args_() {
	    return this.getTypedRuleContext(Args_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof atermListener ) {
	        listener.enterFunction_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof atermListener ) {
	        listener.exitFunction_(this);
		}
	}


}



class Args_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = atermParser.RULE_args_;
    }

	termlist() {
	    return this.getTypedRuleContext(TermlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof atermListener ) {
	        listener.enterArgs_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof atermListener ) {
	        listener.exitArgs_(this);
		}
	}


}



class PlaceholderContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = atermParser.RULE_placeholder;
    }

	term_() {
	    return this.getTypedRuleContext(Term_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof atermListener ) {
	        listener.enterPlaceholder(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof atermListener ) {
	        listener.exitPlaceholder(this);
		}
	}


}



class List_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = atermParser.RULE_list_;
    }

	termlist() {
	    return this.getTypedRuleContext(TermlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof atermListener ) {
	        listener.enterList_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof atermListener ) {
	        listener.exitList_(this);
		}
	}


}



class TermlistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = atermParser.RULE_termlist;
    }

	term_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Term_Context);
	    } else {
	        return this.getTypedRuleContext(Term_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof atermListener ) {
	        listener.enterTermlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof atermListener ) {
	        listener.exitTermlist(this);
		}
	}


}



class AnnotationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = atermParser.RULE_annotation;
    }

	termlist() {
	    return this.getTypedRuleContext(TermlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof atermListener ) {
	        listener.enterAnnotation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof atermListener ) {
	        listener.exitAnnotation(this);
		}
	}


}




atermParser.Aterm_Context = Aterm_Context; 
atermParser.Term_Context = Term_Context; 
atermParser.AfunContext = AfunContext; 
atermParser.Num_Context = Num_Context; 
atermParser.Function_Context = Function_Context; 
atermParser.Args_Context = Args_Context; 
atermParser.PlaceholderContext = PlaceholderContext; 
atermParser.List_Context = List_Context; 
atermParser.TermlistContext = TermlistContext; 
atermParser.AnnotationContext = AnnotationContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
