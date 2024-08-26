// Generated from ./Resources/Parsers/abnf/Abnf.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import AbnfListener from './AbnfListener.js';
const serializedATN = [4,1,14,82,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,5,0,22,8,0,10,0,12,0,25,9,0,
1,0,1,0,1,1,1,1,1,1,3,1,32,8,1,1,1,1,1,1,2,1,2,1,3,1,3,1,3,5,3,41,8,3,10,
3,12,3,44,9,3,1,4,4,4,47,8,4,11,4,12,4,48,1,5,3,5,52,8,5,1,5,1,5,1,6,1,6,
3,6,58,8,6,1,6,1,6,3,6,62,8,6,3,6,64,8,6,1,7,1,7,1,7,1,7,1,7,1,7,3,7,72,
8,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,0,0,10,0,2,4,6,8,10,12,14,16,18,
0,0,84,0,23,1,0,0,0,2,28,1,0,0,0,4,35,1,0,0,0,6,37,1,0,0,0,8,46,1,0,0,0,
10,51,1,0,0,0,12,63,1,0,0,0,14,71,1,0,0,0,16,73,1,0,0,0,18,77,1,0,0,0,20,
22,3,2,1,0,21,20,1,0,0,0,22,25,1,0,0,0,23,21,1,0,0,0,23,24,1,0,0,0,24,26,
1,0,0,0,25,23,1,0,0,0,26,27,5,0,0,1,27,1,1,0,0,0,28,29,5,10,0,0,29,31,5,
1,0,0,30,32,5,2,0,0,31,30,1,0,0,0,31,32,1,0,0,0,32,33,1,0,0,0,33,34,3,4,
2,0,34,3,1,0,0,0,35,36,3,6,3,0,36,5,1,0,0,0,37,42,3,8,4,0,38,39,5,2,0,0,
39,41,3,8,4,0,40,38,1,0,0,0,41,44,1,0,0,0,42,40,1,0,0,0,42,43,1,0,0,0,43,
7,1,0,0,0,44,42,1,0,0,0,45,47,3,10,5,0,46,45,1,0,0,0,47,48,1,0,0,0,48,46,
1,0,0,0,48,49,1,0,0,0,49,9,1,0,0,0,50,52,3,12,6,0,51,50,1,0,0,0,51,52,1,
0,0,0,52,53,1,0,0,0,53,54,3,14,7,0,54,11,1,0,0,0,55,64,5,11,0,0,56,58,5,
11,0,0,57,56,1,0,0,0,57,58,1,0,0,0,58,59,1,0,0,0,59,61,5,3,0,0,60,62,5,11,
0,0,61,60,1,0,0,0,61,62,1,0,0,0,62,64,1,0,0,0,63,55,1,0,0,0,63,57,1,0,0,
0,64,13,1,0,0,0,65,72,5,10,0,0,66,72,3,16,8,0,67,72,3,18,9,0,68,72,5,14,
0,0,69,72,5,8,0,0,70,72,5,9,0,0,71,65,1,0,0,0,71,66,1,0,0,0,71,67,1,0,0,
0,71,68,1,0,0,0,71,69,1,0,0,0,71,70,1,0,0,0,72,15,1,0,0,0,73,74,5,4,0,0,
74,75,3,6,3,0,75,76,5,5,0,0,76,17,1,0,0,0,77,78,5,6,0,0,78,79,3,6,3,0,79,
80,5,7,0,0,80,19,1,0,0,0,9,23,31,42,48,51,57,61,63,71];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class AbnfParser extends antlr4.Parser {

    static grammarFileName = "Abnf.g4";
    static literalNames = [ null, "'='", "'/'", "'*'", "'('", "')'", "'['", 
                            "']'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             "NumberValue", "ProseValue", "ID", "INT", "COMMENT", 
                             "WS", "STRING" ];
    static ruleNames = [ "rulelist", "rule_", "elements", "alternation", 
                         "concatenation", "repetition", "repeat_", "element", 
                         "group", "option" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = AbnfParser.ruleNames;
        this.literalNames = AbnfParser.literalNames;
        this.symbolicNames = AbnfParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	rulelist() {
	    let localctx = new RulelistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, AbnfParser.RULE_rulelist);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===AbnfParser.ID) {
	            this.state = 20;
	            this.rule_();
	            this.state = 25;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 26;
	        this.match(AbnfParser.EOF);
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
	    this.enterRule(localctx, 2, AbnfParser.RULE_rule_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(AbnfParser.ID);
	        this.state = 29;
	        this.match(AbnfParser.T__0);
	        this.state = 31;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===AbnfParser.T__1) {
	            this.state = 30;
	            this.match(AbnfParser.T__1);
	        }

	        this.state = 33;
	        this.elements();
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



	elements() {
	    let localctx = new ElementsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, AbnfParser.RULE_elements);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.alternation();
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



	alternation() {
	    let localctx = new AlternationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, AbnfParser.RULE_alternation);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.concatenation();
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===AbnfParser.T__1) {
	            this.state = 38;
	            this.match(AbnfParser.T__1);
	            this.state = 39;
	            this.concatenation();
	            this.state = 44;
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



	concatenation() {
	    let localctx = new ConcatenationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, AbnfParser.RULE_concatenation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 45;
	        		this.repetition();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 48; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,3, this._ctx);
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



	repetition() {
	    let localctx = new RepetitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, AbnfParser.RULE_repetition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===AbnfParser.T__2 || _la===AbnfParser.INT) {
	            this.state = 50;
	            this.repeat_();
	        }

	        this.state = 53;
	        this.element();
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



	repeat_() {
	    let localctx = new Repeat_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, AbnfParser.RULE_repeat_);
	    var _la = 0; // Token type
	    try {
	        this.state = 63;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 55;
	            this.match(AbnfParser.INT);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 57;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===AbnfParser.INT) {
	                this.state = 56;
	                this.match(AbnfParser.INT);
	            }

	            this.state = 59;
	            this.match(AbnfParser.T__2);
	            this.state = 61;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===AbnfParser.INT) {
	                this.state = 60;
	                this.match(AbnfParser.INT);
	            }

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



	element() {
	    let localctx = new ElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, AbnfParser.RULE_element);
	    try {
	        this.state = 71;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case AbnfParser.ID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 65;
	            this.match(AbnfParser.ID);
	            break;
	        case AbnfParser.T__3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 66;
	            this.group();
	            break;
	        case AbnfParser.T__5:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 67;
	            this.option();
	            break;
	        case AbnfParser.STRING:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 68;
	            this.match(AbnfParser.STRING);
	            break;
	        case AbnfParser.NumberValue:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 69;
	            this.match(AbnfParser.NumberValue);
	            break;
	        case AbnfParser.ProseValue:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 70;
	            this.match(AbnfParser.ProseValue);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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
	    this.enterRule(localctx, 16, AbnfParser.RULE_group);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(AbnfParser.T__3);
	        this.state = 74;
	        this.alternation();
	        this.state = 75;
	        this.match(AbnfParser.T__4);
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



	option() {
	    let localctx = new OptionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, AbnfParser.RULE_option);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this.match(AbnfParser.T__5);
	        this.state = 78;
	        this.alternation();
	        this.state = 79;
	        this.match(AbnfParser.T__6);
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

AbnfParser.EOF = antlr4.Token.EOF;
AbnfParser.T__0 = 1;
AbnfParser.T__1 = 2;
AbnfParser.T__2 = 3;
AbnfParser.T__3 = 4;
AbnfParser.T__4 = 5;
AbnfParser.T__5 = 6;
AbnfParser.T__6 = 7;
AbnfParser.NumberValue = 8;
AbnfParser.ProseValue = 9;
AbnfParser.ID = 10;
AbnfParser.INT = 11;
AbnfParser.COMMENT = 12;
AbnfParser.WS = 13;
AbnfParser.STRING = 14;

AbnfParser.RULE_rulelist = 0;
AbnfParser.RULE_rule_ = 1;
AbnfParser.RULE_elements = 2;
AbnfParser.RULE_alternation = 3;
AbnfParser.RULE_concatenation = 4;
AbnfParser.RULE_repetition = 5;
AbnfParser.RULE_repeat_ = 6;
AbnfParser.RULE_element = 7;
AbnfParser.RULE_group = 8;
AbnfParser.RULE_option = 9;

class RulelistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AbnfParser.RULE_rulelist;
    }

	EOF() {
	    return this.getToken(AbnfParser.EOF, 0);
	};

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

	enterRule(listener) {
	    if(listener instanceof AbnfListener ) {
	        listener.enterRulelist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AbnfListener ) {
	        listener.exitRulelist(this);
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
        this.ruleIndex = AbnfParser.RULE_rule_;
    }

	ID() {
	    return this.getToken(AbnfParser.ID, 0);
	};

	elements() {
	    return this.getTypedRuleContext(ElementsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AbnfListener ) {
	        listener.enterRule_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AbnfListener ) {
	        listener.exitRule_(this);
		}
	}


}



class ElementsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AbnfParser.RULE_elements;
    }

	alternation() {
	    return this.getTypedRuleContext(AlternationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AbnfListener ) {
	        listener.enterElements(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AbnfListener ) {
	        listener.exitElements(this);
		}
	}


}



class AlternationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AbnfParser.RULE_alternation;
    }

	concatenation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConcatenationContext);
	    } else {
	        return this.getTypedRuleContext(ConcatenationContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AbnfListener ) {
	        listener.enterAlternation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AbnfListener ) {
	        listener.exitAlternation(this);
		}
	}


}



class ConcatenationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AbnfParser.RULE_concatenation;
    }

	repetition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RepetitionContext);
	    } else {
	        return this.getTypedRuleContext(RepetitionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AbnfListener ) {
	        listener.enterConcatenation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AbnfListener ) {
	        listener.exitConcatenation(this);
		}
	}


}



class RepetitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AbnfParser.RULE_repetition;
    }

	element() {
	    return this.getTypedRuleContext(ElementContext,0);
	};

	repeat_() {
	    return this.getTypedRuleContext(Repeat_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof AbnfListener ) {
	        listener.enterRepetition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AbnfListener ) {
	        listener.exitRepetition(this);
		}
	}


}



class Repeat_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AbnfParser.RULE_repeat_;
    }

	INT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AbnfParser.INT);
	    } else {
	        return this.getToken(AbnfParser.INT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof AbnfListener ) {
	        listener.enterRepeat_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AbnfListener ) {
	        listener.exitRepeat_(this);
		}
	}


}



class ElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AbnfParser.RULE_element;
    }

	ID() {
	    return this.getToken(AbnfParser.ID, 0);
	};

	group() {
	    return this.getTypedRuleContext(GroupContext,0);
	};

	option() {
	    return this.getTypedRuleContext(OptionContext,0);
	};

	STRING() {
	    return this.getToken(AbnfParser.STRING, 0);
	};

	NumberValue() {
	    return this.getToken(AbnfParser.NumberValue, 0);
	};

	ProseValue() {
	    return this.getToken(AbnfParser.ProseValue, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AbnfListener ) {
	        listener.enterElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AbnfListener ) {
	        listener.exitElement(this);
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
        this.ruleIndex = AbnfParser.RULE_group;
    }

	alternation() {
	    return this.getTypedRuleContext(AlternationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AbnfListener ) {
	        listener.enterGroup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AbnfListener ) {
	        listener.exitGroup(this);
		}
	}


}



class OptionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AbnfParser.RULE_option;
    }

	alternation() {
	    return this.getTypedRuleContext(AlternationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AbnfListener ) {
	        listener.enterOption(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AbnfListener ) {
	        listener.exitOption(this);
		}
	}


}




AbnfParser.RulelistContext = RulelistContext; 
AbnfParser.Rule_Context = Rule_Context; 
AbnfParser.ElementsContext = ElementsContext; 
AbnfParser.AlternationContext = AlternationContext; 
AbnfParser.ConcatenationContext = ConcatenationContext; 
AbnfParser.RepetitionContext = RepetitionContext; 
AbnfParser.Repeat_Context = Repeat_Context; 
AbnfParser.ElementContext = ElementContext; 
AbnfParser.GroupContext = GroupContext; 
AbnfParser.OptionContext = OptionContext; 
