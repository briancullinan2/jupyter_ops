// Generated from ./mckeeman-form/McKeemanForm.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import McKeemanFormListener from './McKeemanFormListener.js';
const serializedATN = [4,1,9,76,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,1,0,1,0,5,0,18,8,0,10,0,12,0,21,9,0,1,0,1,0,1,1,1,1,
1,1,3,1,28,8,1,1,1,4,1,31,8,1,11,1,12,1,32,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,
3,1,3,5,3,44,8,3,10,3,12,3,47,9,3,1,3,1,3,1,4,1,4,1,4,1,4,3,4,55,8,4,1,4,
3,4,58,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,3,6,71,8,6,1,6,3,
6,74,8,6,1,6,0,0,7,0,2,4,6,8,10,12,0,0,78,0,14,1,0,0,0,2,24,1,0,0,0,4,34,
1,0,0,0,6,39,1,0,0,0,8,57,1,0,0,0,10,59,1,0,0,0,12,65,1,0,0,0,14,19,3,2,
1,0,15,16,5,5,0,0,16,18,3,2,1,0,17,15,1,0,0,0,18,21,1,0,0,0,19,17,1,0,0,
0,19,20,1,0,0,0,20,22,1,0,0,0,21,19,1,0,0,0,22,23,5,0,0,1,23,1,1,0,0,0,24,
25,5,6,0,0,25,27,5,5,0,0,26,28,3,4,2,0,27,26,1,0,0,0,27,28,1,0,0,0,28,30,
1,0,0,0,29,31,3,6,3,0,30,29,1,0,0,0,31,32,1,0,0,0,32,30,1,0,0,0,32,33,1,
0,0,0,33,3,1,0,0,0,34,35,5,7,0,0,35,36,5,1,0,0,36,37,5,1,0,0,37,38,5,5,0,
0,38,5,1,0,0,0,39,40,5,7,0,0,40,45,3,8,4,0,41,42,5,4,0,0,42,44,3,8,4,0,43,
41,1,0,0,0,44,47,1,0,0,0,45,43,1,0,0,0,45,46,1,0,0,0,46,48,1,0,0,0,47,45,
1,0,0,0,48,49,5,5,0,0,49,7,1,0,0,0,50,58,5,6,0,0,51,58,5,8,0,0,52,54,3,10,
5,0,53,55,3,12,6,0,54,53,1,0,0,0,54,55,1,0,0,0,55,58,1,0,0,0,56,58,5,9,0,
0,57,50,1,0,0,0,57,51,1,0,0,0,57,52,1,0,0,0,57,56,1,0,0,0,58,9,1,0,0,0,59,
60,5,8,0,0,60,61,5,4,0,0,61,62,5,2,0,0,62,63,5,4,0,0,63,64,5,8,0,0,64,11,
1,0,0,0,65,66,5,4,0,0,66,67,5,3,0,0,67,70,5,4,0,0,68,71,5,8,0,0,69,71,3,
10,5,0,70,68,1,0,0,0,70,69,1,0,0,0,71,73,1,0,0,0,72,74,3,12,6,0,73,72,1,
0,0,0,73,74,1,0,0,0,74,13,1,0,0,0,8,19,27,32,45,54,57,70,73];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class McKeemanFormParser extends antlr4.Parser {

    static grammarFileName = "McKeemanForm.g4";
    static literalNames = [ null, "'\"'", "'.'", "'-'", "' '", null, null, 
                            "'    '" ];
    static symbolicNames = [ null, null, null, null, "Space", "Newline", 
                             "Name", "Indentation", "Singleton", "String" ];
    static ruleNames = [ "grammar_", "rule_", "nothing", "alternative", 
                         "item", "range_", "exclude" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = McKeemanFormParser.ruleNames;
        this.literalNames = McKeemanFormParser.literalNames;
        this.symbolicNames = McKeemanFormParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	grammar_() {
	    let localctx = new Grammar_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, McKeemanFormParser.RULE_grammar_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14;
	        this.rule_();
	        this.state = 19;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===McKeemanFormParser.Newline) {
	            this.state = 15;
	            this.match(McKeemanFormParser.Newline);
	            this.state = 16;
	            this.rule_();
	            this.state = 21;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 22;
	        this.match(McKeemanFormParser.EOF);
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



	rule_() {
	    let localctx = new Rule_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, McKeemanFormParser.RULE_rule_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.match(McKeemanFormParser.Name);
	        this.state = 25;
	        this.match(McKeemanFormParser.Newline);
	        this.state = 27;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        if(la_===1) {
	            this.state = 26;
	            this.nothing();

	        }
	        this.state = 30; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 29;
	            this.alternative();
	            this.state = 32; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===McKeemanFormParser.Indentation);
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



	nothing() {
	    let localctx = new NothingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, McKeemanFormParser.RULE_nothing);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.match(McKeemanFormParser.Indentation);
	        this.state = 35;
	        this.match(McKeemanFormParser.T__0);
	        this.state = 36;
	        this.match(McKeemanFormParser.T__0);
	        this.state = 37;
	        this.match(McKeemanFormParser.Newline);
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



	alternative() {
	    let localctx = new AlternativeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, McKeemanFormParser.RULE_alternative);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.match(McKeemanFormParser.Indentation);
	        this.state = 40;
	        this.item();
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===McKeemanFormParser.Space) {
	            this.state = 41;
	            this.match(McKeemanFormParser.Space);
	            this.state = 42;
	            this.item();
	            this.state = 47;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 48;
	        this.match(McKeemanFormParser.Newline);
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



	item() {
	    let localctx = new ItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, McKeemanFormParser.RULE_item);
	    try {
	        this.state = 57;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 50;
	            this.match(McKeemanFormParser.Name);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 51;
	            this.match(McKeemanFormParser.Singleton);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 52;
	            this.range_();
	            this.state = 54;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	            if(la_===1) {
	                this.state = 53;
	                this.exclude();

	            }
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 56;
	            this.match(McKeemanFormParser.String);
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



	range_() {
	    let localctx = new Range_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, McKeemanFormParser.RULE_range_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.match(McKeemanFormParser.Singleton);
	        this.state = 60;
	        this.match(McKeemanFormParser.Space);
	        this.state = 61;
	        this.match(McKeemanFormParser.T__1);
	        this.state = 62;
	        this.match(McKeemanFormParser.Space);
	        this.state = 63;
	        this.match(McKeemanFormParser.Singleton);
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



	exclude() {
	    let localctx = new ExcludeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, McKeemanFormParser.RULE_exclude);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(McKeemanFormParser.Space);
	        this.state = 66;
	        this.match(McKeemanFormParser.T__2);
	        this.state = 67;
	        this.match(McKeemanFormParser.Space);
	        this.state = 70;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 68;
	            this.match(McKeemanFormParser.Singleton);
	            break;

	        case 2:
	            this.state = 69;
	            this.range_();
	            break;

	        }
	        this.state = 73;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        if(la_===1) {
	            this.state = 72;
	            this.exclude();

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

McKeemanFormParser.EOF = antlr4.Token.EOF;
McKeemanFormParser.T__0 = 1;
McKeemanFormParser.T__1 = 2;
McKeemanFormParser.T__2 = 3;
McKeemanFormParser.Space = 4;
McKeemanFormParser.Newline = 5;
McKeemanFormParser.Name = 6;
McKeemanFormParser.Indentation = 7;
McKeemanFormParser.Singleton = 8;
McKeemanFormParser.String = 9;

McKeemanFormParser.RULE_grammar_ = 0;
McKeemanFormParser.RULE_rule_ = 1;
McKeemanFormParser.RULE_nothing = 2;
McKeemanFormParser.RULE_alternative = 3;
McKeemanFormParser.RULE_item = 4;
McKeemanFormParser.RULE_range_ = 5;
McKeemanFormParser.RULE_exclude = 6;

class Grammar_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = McKeemanFormParser.RULE_grammar_;
    }

	rule_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Rule_Context);
	    } else {
	        return this.getTypedRuleContext(Rule_Context,i);
	    }
	};

	EOF() {
	    return this.getToken(McKeemanFormParser.EOF, 0);
	};

	Newline = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(McKeemanFormParser.Newline);
	    } else {
	        return this.getToken(McKeemanFormParser.Newline, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof McKeemanFormListener ) {
	        listener.enterGrammar_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof McKeemanFormListener ) {
	        listener.exitGrammar_(this);
		}
	}


}



class Rule_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = McKeemanFormParser.RULE_rule_;
    }

	Name() {
	    return this.getToken(McKeemanFormParser.Name, 0);
	};

	Newline() {
	    return this.getToken(McKeemanFormParser.Newline, 0);
	};

	nothing() {
	    return this.getTypedRuleContext(NothingContext,0);
	};

	alternative = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AlternativeContext);
	    } else {
	        return this.getTypedRuleContext(AlternativeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof McKeemanFormListener ) {
	        listener.enterRule_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof McKeemanFormListener ) {
	        listener.exitRule_(this);
		}
	}


}



class NothingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = McKeemanFormParser.RULE_nothing;
    }

	Indentation() {
	    return this.getToken(McKeemanFormParser.Indentation, 0);
	};

	Newline() {
	    return this.getToken(McKeemanFormParser.Newline, 0);
	};

	enterRule(listener) {
	    if(listener instanceof McKeemanFormListener ) {
	        listener.enterNothing(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof McKeemanFormListener ) {
	        listener.exitNothing(this);
		}
	}


}



class AlternativeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = McKeemanFormParser.RULE_alternative;
    }

	Indentation() {
	    return this.getToken(McKeemanFormParser.Indentation, 0);
	};

	item = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ItemContext);
	    } else {
	        return this.getTypedRuleContext(ItemContext,i);
	    }
	};

	Newline() {
	    return this.getToken(McKeemanFormParser.Newline, 0);
	};

	Space = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(McKeemanFormParser.Space);
	    } else {
	        return this.getToken(McKeemanFormParser.Space, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof McKeemanFormListener ) {
	        listener.enterAlternative(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof McKeemanFormListener ) {
	        listener.exitAlternative(this);
		}
	}


}



class ItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = McKeemanFormParser.RULE_item;
    }

	Name() {
	    return this.getToken(McKeemanFormParser.Name, 0);
	};

	Singleton() {
	    return this.getToken(McKeemanFormParser.Singleton, 0);
	};

	range_() {
	    return this.getTypedRuleContext(Range_Context,0);
	};

	exclude() {
	    return this.getTypedRuleContext(ExcludeContext,0);
	};

	String() {
	    return this.getToken(McKeemanFormParser.String, 0);
	};

	enterRule(listener) {
	    if(listener instanceof McKeemanFormListener ) {
	        listener.enterItem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof McKeemanFormListener ) {
	        listener.exitItem(this);
		}
	}


}



class Range_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = McKeemanFormParser.RULE_range_;
    }

	Singleton = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(McKeemanFormParser.Singleton);
	    } else {
	        return this.getToken(McKeemanFormParser.Singleton, i);
	    }
	};


	Space = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(McKeemanFormParser.Space);
	    } else {
	        return this.getToken(McKeemanFormParser.Space, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof McKeemanFormListener ) {
	        listener.enterRange_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof McKeemanFormListener ) {
	        listener.exitRange_(this);
		}
	}


}



class ExcludeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = McKeemanFormParser.RULE_exclude;
    }

	Space = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(McKeemanFormParser.Space);
	    } else {
	        return this.getToken(McKeemanFormParser.Space, i);
	    }
	};


	Singleton() {
	    return this.getToken(McKeemanFormParser.Singleton, 0);
	};

	range_() {
	    return this.getTypedRuleContext(Range_Context,0);
	};

	exclude() {
	    return this.getTypedRuleContext(ExcludeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof McKeemanFormListener ) {
	        listener.enterExclude(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof McKeemanFormListener ) {
	        listener.exitExclude(this);
		}
	}


}




McKeemanFormParser.Grammar_Context = Grammar_Context; 
McKeemanFormParser.Rule_Context = Rule_Context; 
McKeemanFormParser.NothingContext = NothingContext; 
McKeemanFormParser.AlternativeContext = AlternativeContext; 
McKeemanFormParser.ItemContext = ItemContext; 
McKeemanFormParser.Range_Context = Range_Context; 
McKeemanFormParser.ExcludeContext = ExcludeContext; 
