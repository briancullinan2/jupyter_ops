// Generated from ./lcc/lcc.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import lccListener from './lccListener.js';
const serializedATN = [4,1,5,77,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,3,0,19,8,0,1,0,3,0,22,8,0,1,0,3,0,25,8,0,
1,0,1,0,3,0,29,8,0,1,0,1,0,3,0,33,8,0,1,0,1,0,3,0,37,8,0,1,0,1,0,1,1,1,1,
1,2,1,2,1,3,1,3,1,3,5,3,48,8,3,10,3,12,3,51,9,3,1,4,4,4,54,8,4,11,4,12,4,
55,1,5,1,5,1,5,5,5,61,8,5,10,5,12,5,64,9,5,1,6,1,6,4,6,68,8,6,11,6,12,6,
69,1,7,1,7,1,7,1,7,1,7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,0,78,0,16,1,0,0,0,
2,40,1,0,0,0,4,42,1,0,0,0,6,44,1,0,0,0,8,53,1,0,0,0,10,57,1,0,0,0,12,65,
1,0,0,0,14,71,1,0,0,0,16,18,3,2,1,0,17,19,5,1,0,0,18,17,1,0,0,0,18,19,1,
0,0,0,19,21,1,0,0,0,20,22,3,4,2,0,21,20,1,0,0,0,21,22,1,0,0,0,22,24,1,0,
0,0,23,25,5,1,0,0,24,23,1,0,0,0,24,25,1,0,0,0,25,26,1,0,0,0,26,28,3,6,3,
0,27,29,5,1,0,0,28,27,1,0,0,0,28,29,1,0,0,0,29,32,1,0,0,0,30,31,5,2,0,0,
31,33,3,10,5,0,32,30,1,0,0,0,32,33,1,0,0,0,33,36,1,0,0,0,34,35,5,1,0,0,35,
37,3,14,7,0,36,34,1,0,0,0,36,37,1,0,0,0,37,38,1,0,0,0,38,39,5,0,0,1,39,1,
1,0,0,0,40,41,5,4,0,0,41,3,1,0,0,0,42,43,5,4,0,0,43,5,1,0,0,0,44,49,3,8,
4,0,45,46,5,2,0,0,46,48,3,8,4,0,47,45,1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,
0,49,50,1,0,0,0,50,7,1,0,0,0,51,49,1,0,0,0,52,54,5,3,0,0,53,52,1,0,0,0,54,
55,1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,9,1,0,0,0,57,62,3,12,6,0,58,59,
5,1,0,0,59,61,3,12,6,0,60,58,1,0,0,0,61,64,1,0,0,0,62,60,1,0,0,0,62,63,1,
0,0,0,63,11,1,0,0,0,64,62,1,0,0,0,65,67,5,4,0,0,66,68,5,3,0,0,67,66,1,0,
0,0,68,69,1,0,0,0,69,67,1,0,0,0,69,70,1,0,0,0,70,13,1,0,0,0,71,72,5,3,0,
0,72,73,5,3,0,0,73,74,5,3,0,0,74,75,5,3,0,0,75,15,1,0,0,0,10,18,21,24,28,
32,36,49,55,62,69];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class lccParser extends antlr4.Parser {

    static grammarFileName = "lcc.g4";
    static literalNames = [ null, "' '", "'.'" ];
    static symbolicNames = [ null, null, null, "DIGIT", "LETTER", "WS" ];
    static ruleNames = [ "lcc", "topic", "subtopic", "subclasses", "subclass", 
                         "cutters", "cutter", "date" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = lccParser.ruleNames;
        this.literalNames = lccParser.literalNames;
        this.symbolicNames = lccParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	lcc() {
	    let localctx = new LccContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, lccParser.RULE_lcc);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.topic();
	        this.state = 18;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        if(la_===1) {
	            this.state = 17;
	            this.match(lccParser.T__0);

	        }
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===lccParser.LETTER) {
	            this.state = 20;
	            this.subtopic();
	        }

	        this.state = 24;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===lccParser.T__0) {
	            this.state = 23;
	            this.match(lccParser.T__0);
	        }

	        this.state = 26;
	        this.subclasses();
	        this.state = 28;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        if(la_===1) {
	            this.state = 27;
	            this.match(lccParser.T__0);

	        }
	        this.state = 32;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===lccParser.T__1) {
	            this.state = 30;
	            this.match(lccParser.T__1);
	            this.state = 31;
	            this.cutters();
	        }

	        this.state = 36;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===lccParser.T__0) {
	            this.state = 34;
	            this.match(lccParser.T__0);
	            this.state = 35;
	            this.date();
	        }

	        this.state = 38;
	        this.match(lccParser.EOF);
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



	topic() {
	    let localctx = new TopicContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, lccParser.RULE_topic);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.match(lccParser.LETTER);
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



	subtopic() {
	    let localctx = new SubtopicContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, lccParser.RULE_subtopic);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(lccParser.LETTER);
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



	subclasses() {
	    let localctx = new SubclassesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, lccParser.RULE_subclasses);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.subclass();
	        this.state = 49;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 45;
	                this.match(lccParser.T__1);
	                this.state = 46;
	                this.subclass(); 
	            }
	            this.state = 51;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
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



	subclass() {
	    let localctx = new SubclassContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, lccParser.RULE_subclass);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 52;
	            this.match(lccParser.DIGIT);
	            this.state = 55; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===lccParser.DIGIT);
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



	cutters() {
	    let localctx = new CuttersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, lccParser.RULE_cutters);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.cutter();
	        this.state = 62;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 58;
	                this.match(lccParser.T__0);
	                this.state = 59;
	                this.cutter(); 
	            }
	            this.state = 64;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
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



	cutter() {
	    let localctx = new CutterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, lccParser.RULE_cutter);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(lccParser.LETTER);
	        this.state = 67; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 66;
	            this.match(lccParser.DIGIT);
	            this.state = 69; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===lccParser.DIGIT);
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



	date() {
	    let localctx = new DateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, lccParser.RULE_date);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(lccParser.DIGIT);
	        this.state = 72;
	        this.match(lccParser.DIGIT);
	        this.state = 73;
	        this.match(lccParser.DIGIT);
	        this.state = 74;
	        this.match(lccParser.DIGIT);
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

lccParser.EOF = antlr4.Token.EOF;
lccParser.T__0 = 1;
lccParser.T__1 = 2;
lccParser.DIGIT = 3;
lccParser.LETTER = 4;
lccParser.WS = 5;

lccParser.RULE_lcc = 0;
lccParser.RULE_topic = 1;
lccParser.RULE_subtopic = 2;
lccParser.RULE_subclasses = 3;
lccParser.RULE_subclass = 4;
lccParser.RULE_cutters = 5;
lccParser.RULE_cutter = 6;
lccParser.RULE_date = 7;

class LccContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lccParser.RULE_lcc;
    }

	topic() {
	    return this.getTypedRuleContext(TopicContext,0);
	};

	subclasses() {
	    return this.getTypedRuleContext(SubclassesContext,0);
	};

	EOF() {
	    return this.getToken(lccParser.EOF, 0);
	};

	subtopic() {
	    return this.getTypedRuleContext(SubtopicContext,0);
	};

	cutters() {
	    return this.getTypedRuleContext(CuttersContext,0);
	};

	date() {
	    return this.getTypedRuleContext(DateContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof lccListener ) {
	        listener.enterLcc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lccListener ) {
	        listener.exitLcc(this);
		}
	}


}



class TopicContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lccParser.RULE_topic;
    }

	LETTER() {
	    return this.getToken(lccParser.LETTER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof lccListener ) {
	        listener.enterTopic(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lccListener ) {
	        listener.exitTopic(this);
		}
	}


}



class SubtopicContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lccParser.RULE_subtopic;
    }

	LETTER() {
	    return this.getToken(lccParser.LETTER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof lccListener ) {
	        listener.enterSubtopic(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lccListener ) {
	        listener.exitSubtopic(this);
		}
	}


}



class SubclassesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lccParser.RULE_subclasses;
    }

	subclass = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SubclassContext);
	    } else {
	        return this.getTypedRuleContext(SubclassContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof lccListener ) {
	        listener.enterSubclasses(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lccListener ) {
	        listener.exitSubclasses(this);
		}
	}


}



class SubclassContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lccParser.RULE_subclass;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(lccParser.DIGIT);
	    } else {
	        return this.getToken(lccParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof lccListener ) {
	        listener.enterSubclass(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lccListener ) {
	        listener.exitSubclass(this);
		}
	}


}



class CuttersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lccParser.RULE_cutters;
    }

	cutter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CutterContext);
	    } else {
	        return this.getTypedRuleContext(CutterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof lccListener ) {
	        listener.enterCutters(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lccListener ) {
	        listener.exitCutters(this);
		}
	}


}



class CutterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lccParser.RULE_cutter;
    }

	LETTER() {
	    return this.getToken(lccParser.LETTER, 0);
	};

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(lccParser.DIGIT);
	    } else {
	        return this.getToken(lccParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof lccListener ) {
	        listener.enterCutter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lccListener ) {
	        listener.exitCutter(this);
		}
	}


}



class DateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lccParser.RULE_date;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(lccParser.DIGIT);
	    } else {
	        return this.getToken(lccParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof lccListener ) {
	        listener.enterDate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lccListener ) {
	        listener.exitDate(this);
		}
	}


}




lccParser.LccContext = LccContext; 
lccParser.TopicContext = TopicContext; 
lccParser.SubtopicContext = SubtopicContext; 
lccParser.SubclassesContext = SubclassesContext; 
lccParser.SubclassContext = SubclassContext; 
lccParser.CuttersContext = CuttersContext; 
lccParser.CutterContext = CutterContext; 
lccParser.DateContext = DateContext; 
