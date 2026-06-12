// Generated from ./quakemap/quakemap.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import quakemapListener from './quakemapListener.js';
const serializedATN = [4,1,8,81,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,5,0,20,8,0,10,0,12,0,23,9,0,1,0,1,0,
1,1,1,1,5,1,29,8,1,10,1,12,1,32,9,1,1,1,5,1,35,8,1,10,1,12,1,38,9,1,1,1,
1,1,1,2,1,2,1,2,1,3,1,3,4,3,47,8,3,11,3,12,3,48,1,3,1,3,1,4,5,4,54,8,4,10,
4,12,4,57,9,4,1,4,1,4,5,4,61,8,4,10,4,12,4,64,9,4,1,5,1,5,5,5,68,8,5,10,
5,12,5,71,9,5,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,8,0,0,9,0,2,4,6,8,10,12,
14,16,0,0,78,0,21,1,0,0,0,2,26,1,0,0,0,4,41,1,0,0,0,6,44,1,0,0,0,8,55,1,
0,0,0,10,65,1,0,0,0,12,74,1,0,0,0,14,76,1,0,0,0,16,78,1,0,0,0,18,20,3,2,
1,0,19,18,1,0,0,0,20,23,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,24,1,0,0,
0,23,21,1,0,0,0,24,25,5,0,0,1,25,1,1,0,0,0,26,30,5,1,0,0,27,29,3,4,2,0,28,
27,1,0,0,0,29,32,1,0,0,0,30,28,1,0,0,0,30,31,1,0,0,0,31,36,1,0,0,0,32,30,
1,0,0,0,33,35,3,6,3,0,34,33,1,0,0,0,35,38,1,0,0,0,36,34,1,0,0,0,36,37,1,
0,0,0,37,39,1,0,0,0,38,36,1,0,0,0,39,40,5,2,0,0,40,3,1,0,0,0,41,42,3,14,
7,0,42,43,3,14,7,0,43,5,1,0,0,0,44,46,5,1,0,0,45,47,3,8,4,0,46,45,1,0,0,
0,47,48,1,0,0,0,48,46,1,0,0,0,48,49,1,0,0,0,49,50,1,0,0,0,50,51,5,2,0,0,
51,7,1,0,0,0,52,54,3,10,5,0,53,52,1,0,0,0,54,57,1,0,0,0,55,53,1,0,0,0,55,
56,1,0,0,0,56,58,1,0,0,0,57,55,1,0,0,0,58,62,3,16,8,0,59,61,3,12,6,0,60,
59,1,0,0,0,61,64,1,0,0,0,62,60,1,0,0,0,62,63,1,0,0,0,63,9,1,0,0,0,64,62,
1,0,0,0,65,69,5,3,0,0,66,68,3,12,6,0,67,66,1,0,0,0,68,71,1,0,0,0,69,67,1,
0,0,0,69,70,1,0,0,0,70,72,1,0,0,0,71,69,1,0,0,0,72,73,5,4,0,0,73,11,1,0,
0,0,74,75,5,6,0,0,75,13,1,0,0,0,76,77,5,7,0,0,77,15,1,0,0,0,78,79,5,5,0,
0,79,17,1,0,0,0,7,21,30,36,48,55,62,69];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class quakemapParser extends antlr4.Parser {

    static grammarFileName = "quakemap.g4";
    static literalNames = [ null, "'{'", "'}'", "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, null, "TEXT", "NUMBER", 
                             "STRING", "WS" ];
    static ruleNames = [ "map_", "entity", "keyvalue", "brush", "brushline", 
                         "coord", "num", "string", "text" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = quakemapParser.ruleNames;
        this.literalNames = quakemapParser.literalNames;
        this.symbolicNames = quakemapParser.symbolicNames;
    }



	map_() {
	    let localctx = new Map_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, quakemapParser.RULE_map_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 18;
	            this.entity();
	            this.state = 23;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 24;
	        this.match(quakemapParser.EOF);
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



	entity() {
	    let localctx = new EntityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, quakemapParser.RULE_entity);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.match(quakemapParser.T__0);
	        this.state = 30;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 27;
	            this.keyvalue();
	            this.state = 32;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 36;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 33;
	            this.brush();
	            this.state = 38;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 39;
	        this.match(quakemapParser.T__1);
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



	keyvalue() {
	    let localctx = new KeyvalueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, quakemapParser.RULE_keyvalue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this.string();
	        this.state = 42;
	        this.string();
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



	brush() {
	    let localctx = new BrushContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, quakemapParser.RULE_brush);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(quakemapParser.T__0);
	        this.state = 46; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 45;
	            this.brushline();
	            this.state = 48; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===3 || _la===5);
	        this.state = 50;
	        this.match(quakemapParser.T__1);
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



	brushline() {
	    let localctx = new BrushlineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, quakemapParser.RULE_brushline);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 52;
	            this.coord();
	            this.state = 57;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 58;
	        this.text();
	        this.state = 62;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 59;
	            this.num();
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



	coord() {
	    let localctx = new CoordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, quakemapParser.RULE_coord);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(quakemapParser.T__2);
	        this.state = 69;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 66;
	            this.num();
	            this.state = 71;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 72;
	        this.match(quakemapParser.T__3);
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



	num() {
	    let localctx = new NumContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, quakemapParser.RULE_num);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.match(quakemapParser.NUMBER);
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



	string() {
	    let localctx = new StringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, quakemapParser.RULE_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.match(quakemapParser.STRING);
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



	text() {
	    let localctx = new TextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, quakemapParser.RULE_text);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.match(quakemapParser.TEXT);
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

quakemapParser.EOF = antlr4.Token.EOF;
quakemapParser.T__0 = 1;
quakemapParser.T__1 = 2;
quakemapParser.T__2 = 3;
quakemapParser.T__3 = 4;
quakemapParser.TEXT = 5;
quakemapParser.NUMBER = 6;
quakemapParser.STRING = 7;
quakemapParser.WS = 8;

quakemapParser.RULE_map_ = 0;
quakemapParser.RULE_entity = 1;
quakemapParser.RULE_keyvalue = 2;
quakemapParser.RULE_brush = 3;
quakemapParser.RULE_brushline = 4;
quakemapParser.RULE_coord = 5;
quakemapParser.RULE_num = 6;
quakemapParser.RULE_string = 7;
quakemapParser.RULE_text = 8;

class Map_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = quakemapParser.RULE_map_;
    }

	EOF() {
	    return this.getToken(quakemapParser.EOF, 0);
	};

	entity = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EntityContext);
	    } else {
	        return this.getTypedRuleContext(EntityContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof quakemapListener ) {
	        listener.enterMap_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof quakemapListener ) {
	        listener.exitMap_(this);
		}
	}


}



class EntityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = quakemapParser.RULE_entity;
    }

	keyvalue = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(KeyvalueContext);
	    } else {
	        return this.getTypedRuleContext(KeyvalueContext,i);
	    }
	};

	brush = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BrushContext);
	    } else {
	        return this.getTypedRuleContext(BrushContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof quakemapListener ) {
	        listener.enterEntity(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof quakemapListener ) {
	        listener.exitEntity(this);
		}
	}


}



class KeyvalueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = quakemapParser.RULE_keyvalue;
    }

	string = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StringContext);
	    } else {
	        return this.getTypedRuleContext(StringContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof quakemapListener ) {
	        listener.enterKeyvalue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof quakemapListener ) {
	        listener.exitKeyvalue(this);
		}
	}


}



class BrushContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = quakemapParser.RULE_brush;
    }

	brushline = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BrushlineContext);
	    } else {
	        return this.getTypedRuleContext(BrushlineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof quakemapListener ) {
	        listener.enterBrush(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof quakemapListener ) {
	        listener.exitBrush(this);
		}
	}


}



class BrushlineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = quakemapParser.RULE_brushline;
    }

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	coord = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CoordContext);
	    } else {
	        return this.getTypedRuleContext(CoordContext,i);
	    }
	};

	num = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumContext);
	    } else {
	        return this.getTypedRuleContext(NumContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof quakemapListener ) {
	        listener.enterBrushline(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof quakemapListener ) {
	        listener.exitBrushline(this);
		}
	}


}



class CoordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = quakemapParser.RULE_coord;
    }

	num = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumContext);
	    } else {
	        return this.getTypedRuleContext(NumContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof quakemapListener ) {
	        listener.enterCoord(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof quakemapListener ) {
	        listener.exitCoord(this);
		}
	}


}



class NumContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = quakemapParser.RULE_num;
    }

	NUMBER() {
	    return this.getToken(quakemapParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof quakemapListener ) {
	        listener.enterNum(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof quakemapListener ) {
	        listener.exitNum(this);
		}
	}


}



class StringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = quakemapParser.RULE_string;
    }

	STRING() {
	    return this.getToken(quakemapParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof quakemapListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof quakemapListener ) {
	        listener.exitString(this);
		}
	}


}



class TextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = quakemapParser.RULE_text;
    }

	TEXT() {
	    return this.getToken(quakemapParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof quakemapListener ) {
	        listener.enterText(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof quakemapListener ) {
	        listener.exitText(this);
		}
	}


}




quakemapParser.Map_Context = Map_Context; 
quakemapParser.EntityContext = EntityContext; 
quakemapParser.KeyvalueContext = KeyvalueContext; 
quakemapParser.BrushContext = BrushContext; 
quakemapParser.BrushlineContext = BrushlineContext; 
quakemapParser.CoordContext = CoordContext; 
quakemapParser.NumContext = NumContext; 
quakemapParser.StringContext = StringContext; 
quakemapParser.TextContext = TextContext; 
