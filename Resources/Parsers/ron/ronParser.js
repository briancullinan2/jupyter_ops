// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/ron/ron.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ronListener from './ronListener.js';
const serializedATN = [4,1,18,113,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,5,0,24,8,0,10,0,
12,0,27,9,0,1,0,1,0,1,1,1,1,1,2,3,2,34,8,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
2,1,2,3,2,45,8,2,1,3,1,3,1,3,5,3,50,8,3,10,3,12,3,53,9,3,1,3,3,3,56,8,3,
1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,5,7,72,8,7,10,7,
12,7,75,9,7,1,7,1,7,3,7,79,8,7,1,8,1,8,1,8,1,8,3,8,85,8,8,1,8,3,8,88,8,8,
1,9,1,9,1,9,1,9,5,9,94,8,9,10,9,12,9,97,9,9,1,9,1,9,3,9,101,8,9,1,10,1,10,
1,10,3,10,106,8,10,1,10,1,10,1,10,3,10,111,8,10,1,10,0,0,11,0,2,4,6,8,10,
12,14,16,18,20,0,1,1,0,9,11,122,0,25,1,0,0,0,2,30,1,0,0,0,4,33,1,0,0,0,6,
46,1,0,0,0,8,57,1,0,0,0,10,59,1,0,0,0,12,63,1,0,0,0,14,67,1,0,0,0,16,80,
1,0,0,0,18,89,1,0,0,0,20,105,1,0,0,0,22,24,3,4,2,0,23,22,1,0,0,0,24,27,1,
0,0,0,25,23,1,0,0,0,25,26,1,0,0,0,26,28,1,0,0,0,27,25,1,0,0,0,28,29,5,0,
0,1,29,1,1,0,0,0,30,31,5,15,0,0,31,3,1,0,0,0,32,34,3,2,1,0,33,32,1,0,0,0,
33,34,1,0,0,0,34,44,1,0,0,0,35,45,3,8,4,0,36,45,5,12,0,0,37,45,5,13,0,0,
38,45,5,14,0,0,39,45,5,15,0,0,40,45,3,10,5,0,41,45,3,12,6,0,42,45,3,14,7,
0,43,45,3,18,9,0,44,35,1,0,0,0,44,36,1,0,0,0,44,37,1,0,0,0,44,38,1,0,0,0,
44,39,1,0,0,0,44,40,1,0,0,0,44,41,1,0,0,0,44,42,1,0,0,0,44,43,1,0,0,0,45,
5,1,0,0,0,46,51,3,4,2,0,47,48,5,1,0,0,48,50,3,4,2,0,49,47,1,0,0,0,50,53,
1,0,0,0,51,49,1,0,0,0,51,52,1,0,0,0,52,55,1,0,0,0,53,51,1,0,0,0,54,56,5,
1,0,0,55,54,1,0,0,0,55,56,1,0,0,0,56,7,1,0,0,0,57,58,7,0,0,0,58,9,1,0,0,
0,59,60,5,2,0,0,60,61,3,6,3,0,61,62,5,3,0,0,62,11,1,0,0,0,63,64,5,4,0,0,
64,65,3,6,3,0,65,66,5,5,0,0,66,13,1,0,0,0,67,68,5,2,0,0,68,73,3,16,8,0,69,
70,5,1,0,0,70,72,3,16,8,0,71,69,1,0,0,0,72,75,1,0,0,0,73,71,1,0,0,0,73,74,
1,0,0,0,74,76,1,0,0,0,75,73,1,0,0,0,76,78,5,3,0,0,77,79,5,1,0,0,78,77,1,
0,0,0,78,79,1,0,0,0,79,15,1,0,0,0,80,81,5,15,0,0,81,84,5,6,0,0,82,85,3,4,
2,0,83,85,3,14,7,0,84,82,1,0,0,0,84,83,1,0,0,0,85,87,1,0,0,0,86,88,5,1,0,
0,87,86,1,0,0,0,87,88,1,0,0,0,88,17,1,0,0,0,89,90,5,7,0,0,90,95,3,20,10,
0,91,92,5,1,0,0,92,94,3,20,10,0,93,91,1,0,0,0,94,97,1,0,0,0,95,93,1,0,0,
0,95,96,1,0,0,0,96,98,1,0,0,0,97,95,1,0,0,0,98,100,5,8,0,0,99,101,5,1,0,
0,100,99,1,0,0,0,100,101,1,0,0,0,101,19,1,0,0,0,102,106,5,15,0,0,103,106,
5,12,0,0,104,106,3,8,4,0,105,102,1,0,0,0,105,103,1,0,0,0,105,104,1,0,0,0,
106,107,1,0,0,0,107,108,5,6,0,0,108,110,3,4,2,0,109,111,5,1,0,0,110,109,
1,0,0,0,110,111,1,0,0,0,111,21,1,0,0,0,13,25,33,44,51,55,73,78,84,87,95,
100,105,110];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ronParser extends antlr4.Parser {

    static grammarFileName = "ron.g4";
    static literalNames = [ null, "','", "'('", "')'", "'['", "']'", "':'", 
                            "'{'", "'}'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, "DECIMAL", "HEX", "BINARY", "STRING", 
                             "BOOLEAN", "CHAR", "ID", "LINE_COMMENT", "MULTILINE_COMMENT", 
                             "WS" ];
    static ruleNames = [ "ron_", "classname", "value", "values", "number", 
                         "tuple", "list", "struct", "structitem", "map", 
                         "mapitem" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ronParser.ruleNames;
        this.literalNames = ronParser.literalNames;
        this.symbolicNames = ronParser.symbolicNames;
    }



	ron_() {
	    let localctx = new Ron_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ronParser.RULE_ron_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 65172) !== 0)) {
	            this.state = 22;
	            this.value();
	            this.state = 27;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 28;
	        this.match(ronParser.EOF);
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



	classname() {
	    let localctx = new ClassnameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ronParser.RULE_classname);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.match(ronParser.ID);
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
	    this.enterRule(localctx, 4, ronParser.RULE_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        if(la_===1) {
	            this.state = 32;
	            this.classname();

	        }
	        this.state = 44;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 35;
	            this.number();
	            break;

	        case 2:
	            this.state = 36;
	            this.match(ronParser.STRING);
	            break;

	        case 3:
	            this.state = 37;
	            this.match(ronParser.BOOLEAN);
	            break;

	        case 4:
	            this.state = 38;
	            this.match(ronParser.CHAR);
	            break;

	        case 5:
	            this.state = 39;
	            this.match(ronParser.ID);
	            break;

	        case 6:
	            this.state = 40;
	            this.tuple();
	            break;

	        case 7:
	            this.state = 41;
	            this.list();
	            break;

	        case 8:
	            this.state = 42;
	            this.struct();
	            break;

	        case 9:
	            this.state = 43;
	            this.map();
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



	values() {
	    let localctx = new ValuesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ronParser.RULE_values);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.value();
	        this.state = 51;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 47;
	                this.match(ronParser.T__0);
	                this.state = 48;
	                this.value(); 
	            }
	            this.state = 53;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 54;
	            this.match(ronParser.T__0);
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



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ronParser.RULE_number);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
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



	tuple() {
	    let localctx = new TupleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ronParser.RULE_tuple);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.match(ronParser.T__1);
	        this.state = 60;
	        this.values();
	        this.state = 61;
	        this.match(ronParser.T__2);
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



	list() {
	    let localctx = new ListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ronParser.RULE_list);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.match(ronParser.T__3);
	        this.state = 64;
	        this.values();
	        this.state = 65;
	        this.match(ronParser.T__4);
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



	struct() {
	    let localctx = new StructContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ronParser.RULE_struct);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(ronParser.T__1);
	        this.state = 68;
	        this.structitem();
	        this.state = 73;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 69;
	            this.match(ronParser.T__0);
	            this.state = 70;
	            this.structitem();
	            this.state = 75;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 76;
	        this.match(ronParser.T__2);
	        this.state = 78;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        if(la_===1) {
	            this.state = 77;
	            this.match(ronParser.T__0);

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



	structitem() {
	    let localctx = new StructitemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, ronParser.RULE_structitem);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.match(ronParser.ID);
	        this.state = 81;
	        this.match(ronParser.T__5);
	        this.state = 84;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 82;
	            this.value();
	            break;

	        case 2:
	            this.state = 83;
	            this.struct();
	            break;

	        }
	        this.state = 87;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        if(la_===1) {
	            this.state = 86;
	            this.match(ronParser.T__0);

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



	map() {
	    let localctx = new MapContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, ronParser.RULE_map);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.match(ronParser.T__6);
	        this.state = 90;
	        this.mapitem();
	        this.state = 95;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 91;
	            this.match(ronParser.T__0);
	            this.state = 92;
	            this.mapitem();
	            this.state = 97;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 98;
	        this.match(ronParser.T__7);
	        this.state = 100;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 99;
	            this.match(ronParser.T__0);

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



	mapitem() {
	    let localctx = new MapitemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, ronParser.RULE_mapitem);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            this.state = 102;
	            this.match(ronParser.ID);
	            break;
	        case 12:
	            this.state = 103;
	            this.match(ronParser.STRING);
	            break;
	        case 9:
	        case 10:
	        case 11:
	            this.state = 104;
	            this.number();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 107;
	        this.match(ronParser.T__5);
	        this.state = 108;
	        this.value();
	        this.state = 110;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        if(la_===1) {
	            this.state = 109;
	            this.match(ronParser.T__0);

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

ronParser.EOF = antlr4.Token.EOF;
ronParser.T__0 = 1;
ronParser.T__1 = 2;
ronParser.T__2 = 3;
ronParser.T__3 = 4;
ronParser.T__4 = 5;
ronParser.T__5 = 6;
ronParser.T__6 = 7;
ronParser.T__7 = 8;
ronParser.DECIMAL = 9;
ronParser.HEX = 10;
ronParser.BINARY = 11;
ronParser.STRING = 12;
ronParser.BOOLEAN = 13;
ronParser.CHAR = 14;
ronParser.ID = 15;
ronParser.LINE_COMMENT = 16;
ronParser.MULTILINE_COMMENT = 17;
ronParser.WS = 18;

ronParser.RULE_ron_ = 0;
ronParser.RULE_classname = 1;
ronParser.RULE_value = 2;
ronParser.RULE_values = 3;
ronParser.RULE_number = 4;
ronParser.RULE_tuple = 5;
ronParser.RULE_list = 6;
ronParser.RULE_struct = 7;
ronParser.RULE_structitem = 8;
ronParser.RULE_map = 9;
ronParser.RULE_mapitem = 10;

class Ron_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ronParser.RULE_ron_;
    }

	EOF() {
	    return this.getToken(ronParser.EOF, 0);
	};

	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ronListener ) {
	        listener.enterRon_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ronListener ) {
	        listener.exitRon_(this);
		}
	}


}



class ClassnameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ronParser.RULE_classname;
    }

	ID() {
	    return this.getToken(ronParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ronListener ) {
	        listener.enterClassname(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ronListener ) {
	        listener.exitClassname(this);
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
        this.ruleIndex = ronParser.RULE_value;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	STRING() {
	    return this.getToken(ronParser.STRING, 0);
	};

	BOOLEAN() {
	    return this.getToken(ronParser.BOOLEAN, 0);
	};

	CHAR() {
	    return this.getToken(ronParser.CHAR, 0);
	};

	ID() {
	    return this.getToken(ronParser.ID, 0);
	};

	tuple() {
	    return this.getTypedRuleContext(TupleContext,0);
	};

	list() {
	    return this.getTypedRuleContext(ListContext,0);
	};

	struct() {
	    return this.getTypedRuleContext(StructContext,0);
	};

	map() {
	    return this.getTypedRuleContext(MapContext,0);
	};

	classname() {
	    return this.getTypedRuleContext(ClassnameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ronListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ronListener ) {
	        listener.exitValue(this);
		}
	}


}



class ValuesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ronParser.RULE_values;
    }

	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ronListener ) {
	        listener.enterValues(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ronListener ) {
	        listener.exitValues(this);
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
        this.ruleIndex = ronParser.RULE_number;
    }

	DECIMAL() {
	    return this.getToken(ronParser.DECIMAL, 0);
	};

	HEX() {
	    return this.getToken(ronParser.HEX, 0);
	};

	BINARY() {
	    return this.getToken(ronParser.BINARY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ronListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ronListener ) {
	        listener.exitNumber(this);
		}
	}


}



class TupleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ronParser.RULE_tuple;
    }

	values() {
	    return this.getTypedRuleContext(ValuesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ronListener ) {
	        listener.enterTuple(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ronListener ) {
	        listener.exitTuple(this);
		}
	}


}



class ListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ronParser.RULE_list;
    }

	values() {
	    return this.getTypedRuleContext(ValuesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ronListener ) {
	        listener.enterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ronListener ) {
	        listener.exitList(this);
		}
	}


}



class StructContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ronParser.RULE_struct;
    }

	structitem = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StructitemContext);
	    } else {
	        return this.getTypedRuleContext(StructitemContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ronListener ) {
	        listener.enterStruct(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ronListener ) {
	        listener.exitStruct(this);
		}
	}


}



class StructitemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ronParser.RULE_structitem;
    }

	ID() {
	    return this.getToken(ronParser.ID, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	struct() {
	    return this.getTypedRuleContext(StructContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ronListener ) {
	        listener.enterStructitem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ronListener ) {
	        listener.exitStructitem(this);
		}
	}


}



class MapContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ronParser.RULE_map;
    }

	mapitem = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MapitemContext);
	    } else {
	        return this.getTypedRuleContext(MapitemContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ronListener ) {
	        listener.enterMap(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ronListener ) {
	        listener.exitMap(this);
		}
	}


}



class MapitemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ronParser.RULE_mapitem;
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	ID() {
	    return this.getToken(ronParser.ID, 0);
	};

	STRING() {
	    return this.getToken(ronParser.STRING, 0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ronListener ) {
	        listener.enterMapitem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ronListener ) {
	        listener.exitMapitem(this);
		}
	}


}




ronParser.Ron_Context = Ron_Context; 
ronParser.ClassnameContext = ClassnameContext; 
ronParser.ValueContext = ValueContext; 
ronParser.ValuesContext = ValuesContext; 
ronParser.NumberContext = NumberContext; 
ronParser.TupleContext = TupleContext; 
ronParser.ListContext = ListContext; 
ronParser.StructContext = StructContext; 
ronParser.StructitemContext = StructitemContext; 
ronParser.MapContext = MapContext; 
ronParser.MapitemContext = MapitemContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
