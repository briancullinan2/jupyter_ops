// Generated from ./dif/dif.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import difListener from './difListener.js';
const serializedATN = [4,1,11,73,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,0,1,0,
1,0,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,
1,5,1,5,1,5,1,5,1,6,4,6,51,8,6,11,6,12,6,52,1,7,1,7,1,7,3,7,58,8,7,1,8,1,
8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,0,0,12,0,2,4,6,
8,10,12,14,16,18,20,22,0,1,1,0,5,6,63,0,24,1,0,0,0,2,28,1,0,0,0,4,33,1,0,
0,0,6,37,1,0,0,0,8,41,1,0,0,0,10,45,1,0,0,0,12,50,1,0,0,0,14,57,1,0,0,0,
16,59,1,0,0,0,18,62,1,0,0,0,20,65,1,0,0,0,22,68,1,0,0,0,24,25,3,2,1,0,25,
26,3,12,6,0,26,27,5,0,0,1,27,1,1,0,0,0,28,29,3,4,2,0,29,30,3,6,3,0,30,31,
3,8,4,0,31,32,3,10,5,0,32,3,1,0,0,0,33,34,5,1,0,0,34,35,3,22,11,0,35,36,
5,10,0,0,36,5,1,0,0,0,37,38,5,2,0,0,38,39,3,22,11,0,39,40,5,10,0,0,40,7,
1,0,0,0,41,42,5,3,0,0,42,43,3,22,11,0,43,44,5,10,0,0,44,9,1,0,0,0,45,46,
5,4,0,0,46,47,3,22,11,0,47,48,5,10,0,0,48,11,1,0,0,0,49,51,3,14,7,0,50,49,
1,0,0,0,51,52,1,0,0,0,52,50,1,0,0,0,52,53,1,0,0,0,53,13,1,0,0,0,54,58,3,
16,8,0,55,58,3,18,9,0,56,58,3,20,10,0,57,54,1,0,0,0,57,55,1,0,0,0,57,56,
1,0,0,0,58,15,1,0,0,0,59,60,3,22,11,0,60,61,7,0,0,0,61,17,1,0,0,0,62,63,
3,22,11,0,63,64,5,10,0,0,64,19,1,0,0,0,65,66,3,22,11,0,66,67,5,7,0,0,67,
21,1,0,0,0,68,69,5,9,0,0,69,70,5,8,0,0,70,71,5,9,0,0,71,23,1,0,0,0,2,52,
57];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class difParser extends antlr4.Parser {

    static grammarFileName = "dif.g4";
    static literalNames = [ null, "'TABLE'", "'VECTORS'", "'TUPLES'", "'DATA'", 
                            "'BOT'", "'EOD'", "'V'", "','" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, "NUM", "STRING", "WS" ];
    static ruleNames = [ "dif", "header", "tableheader", "vectorsheader", 
                         "tuplesheader", "dataheader", "data", "datum", 
                         "directive", "string_", "numeric", "pair" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = difParser.ruleNames;
        this.literalNames = difParser.literalNames;
        this.symbolicNames = difParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	dif() {
	    let localctx = new DifContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, difParser.RULE_dif);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.header();
	        this.state = 25;
	        this.data();
	        this.state = 26;
	        this.match(difParser.EOF);
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
	    this.enterRule(localctx, 2, difParser.RULE_header);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.tableheader();
	        this.state = 29;
	        this.vectorsheader();
	        this.state = 30;
	        this.tuplesheader();
	        this.state = 31;
	        this.dataheader();
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



	tableheader() {
	    let localctx = new TableheaderContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, difParser.RULE_tableheader);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(difParser.T__0);
	        this.state = 34;
	        this.pair();
	        this.state = 35;
	        this.match(difParser.STRING);
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



	vectorsheader() {
	    let localctx = new VectorsheaderContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, difParser.RULE_vectorsheader);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(difParser.T__1);
	        this.state = 38;
	        this.pair();
	        this.state = 39;
	        this.match(difParser.STRING);
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



	tuplesheader() {
	    let localctx = new TuplesheaderContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, difParser.RULE_tuplesheader);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this.match(difParser.T__2);
	        this.state = 42;
	        this.pair();
	        this.state = 43;
	        this.match(difParser.STRING);
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



	dataheader() {
	    let localctx = new DataheaderContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, difParser.RULE_dataheader);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(difParser.T__3);
	        this.state = 46;
	        this.pair();
	        this.state = 47;
	        this.match(difParser.STRING);
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



	data() {
	    let localctx = new DataContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, difParser.RULE_data);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 49;
	            this.datum();
	            this.state = 52; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===difParser.NUM);
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



	datum() {
	    let localctx = new DatumContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, difParser.RULE_datum);
	    try {
	        this.state = 57;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 54;
	            this.directive();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 55;
	            this.string_();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 56;
	            this.numeric();
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



	directive() {
	    let localctx = new DirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, difParser.RULE_directive);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.pair();
	        this.state = 60;
	        _la = this._input.LA(1);
	        if(!(_la===difParser.T__4 || _la===difParser.T__5)) {
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



	string_() {
	    let localctx = new String_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, difParser.RULE_string_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.pair();
	        this.state = 63;
	        this.match(difParser.STRING);
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



	numeric() {
	    let localctx = new NumericContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, difParser.RULE_numeric);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.pair();
	        this.state = 66;
	        this.match(difParser.T__6);
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



	pair() {
	    let localctx = new PairContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, difParser.RULE_pair);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.match(difParser.NUM);
	        this.state = 69;
	        this.match(difParser.T__7);
	        this.state = 70;
	        this.match(difParser.NUM);
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

difParser.EOF = antlr4.Token.EOF;
difParser.T__0 = 1;
difParser.T__1 = 2;
difParser.T__2 = 3;
difParser.T__3 = 4;
difParser.T__4 = 5;
difParser.T__5 = 6;
difParser.T__6 = 7;
difParser.T__7 = 8;
difParser.NUM = 9;
difParser.STRING = 10;
difParser.WS = 11;

difParser.RULE_dif = 0;
difParser.RULE_header = 1;
difParser.RULE_tableheader = 2;
difParser.RULE_vectorsheader = 3;
difParser.RULE_tuplesheader = 4;
difParser.RULE_dataheader = 5;
difParser.RULE_data = 6;
difParser.RULE_datum = 7;
difParser.RULE_directive = 8;
difParser.RULE_string_ = 9;
difParser.RULE_numeric = 10;
difParser.RULE_pair = 11;

class DifContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = difParser.RULE_dif;
    }

	header() {
	    return this.getTypedRuleContext(HeaderContext,0);
	};

	data() {
	    return this.getTypedRuleContext(DataContext,0);
	};

	EOF() {
	    return this.getToken(difParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof difListener ) {
	        listener.enterDif(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof difListener ) {
	        listener.exitDif(this);
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
        this.ruleIndex = difParser.RULE_header;
    }

	tableheader() {
	    return this.getTypedRuleContext(TableheaderContext,0);
	};

	vectorsheader() {
	    return this.getTypedRuleContext(VectorsheaderContext,0);
	};

	tuplesheader() {
	    return this.getTypedRuleContext(TuplesheaderContext,0);
	};

	dataheader() {
	    return this.getTypedRuleContext(DataheaderContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof difListener ) {
	        listener.enterHeader(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof difListener ) {
	        listener.exitHeader(this);
		}
	}


}



class TableheaderContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = difParser.RULE_tableheader;
    }

	pair() {
	    return this.getTypedRuleContext(PairContext,0);
	};

	STRING() {
	    return this.getToken(difParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof difListener ) {
	        listener.enterTableheader(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof difListener ) {
	        listener.exitTableheader(this);
		}
	}


}



class VectorsheaderContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = difParser.RULE_vectorsheader;
    }

	pair() {
	    return this.getTypedRuleContext(PairContext,0);
	};

	STRING() {
	    return this.getToken(difParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof difListener ) {
	        listener.enterVectorsheader(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof difListener ) {
	        listener.exitVectorsheader(this);
		}
	}


}



class TuplesheaderContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = difParser.RULE_tuplesheader;
    }

	pair() {
	    return this.getTypedRuleContext(PairContext,0);
	};

	STRING() {
	    return this.getToken(difParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof difListener ) {
	        listener.enterTuplesheader(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof difListener ) {
	        listener.exitTuplesheader(this);
		}
	}


}



class DataheaderContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = difParser.RULE_dataheader;
    }

	pair() {
	    return this.getTypedRuleContext(PairContext,0);
	};

	STRING() {
	    return this.getToken(difParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof difListener ) {
	        listener.enterDataheader(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof difListener ) {
	        listener.exitDataheader(this);
		}
	}


}



class DataContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = difParser.RULE_data;
    }

	datum = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DatumContext);
	    } else {
	        return this.getTypedRuleContext(DatumContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof difListener ) {
	        listener.enterData(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof difListener ) {
	        listener.exitData(this);
		}
	}


}



class DatumContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = difParser.RULE_datum;
    }

	directive() {
	    return this.getTypedRuleContext(DirectiveContext,0);
	};

	string_() {
	    return this.getTypedRuleContext(String_Context,0);
	};

	numeric() {
	    return this.getTypedRuleContext(NumericContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof difListener ) {
	        listener.enterDatum(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof difListener ) {
	        listener.exitDatum(this);
		}
	}


}



class DirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = difParser.RULE_directive;
    }

	pair() {
	    return this.getTypedRuleContext(PairContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof difListener ) {
	        listener.enterDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof difListener ) {
	        listener.exitDirective(this);
		}
	}


}



class String_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = difParser.RULE_string_;
    }

	pair() {
	    return this.getTypedRuleContext(PairContext,0);
	};

	STRING() {
	    return this.getToken(difParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof difListener ) {
	        listener.enterString_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof difListener ) {
	        listener.exitString_(this);
		}
	}


}



class NumericContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = difParser.RULE_numeric;
    }

	pair() {
	    return this.getTypedRuleContext(PairContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof difListener ) {
	        listener.enterNumeric(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof difListener ) {
	        listener.exitNumeric(this);
		}
	}


}



class PairContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = difParser.RULE_pair;
    }

	NUM = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(difParser.NUM);
	    } else {
	        return this.getToken(difParser.NUM, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof difListener ) {
	        listener.enterPair(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof difListener ) {
	        listener.exitPair(this);
		}
	}


}




difParser.DifContext = DifContext; 
difParser.HeaderContext = HeaderContext; 
difParser.TableheaderContext = TableheaderContext; 
difParser.VectorsheaderContext = VectorsheaderContext; 
difParser.TuplesheaderContext = TuplesheaderContext; 
difParser.DataheaderContext = DataheaderContext; 
difParser.DataContext = DataContext; 
difParser.DatumContext = DatumContext; 
difParser.DirectiveContext = DirectiveContext; 
difParser.String_Context = String_Context; 
difParser.NumericContext = NumericContext; 
difParser.PairContext = PairContext; 
