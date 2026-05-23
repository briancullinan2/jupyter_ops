// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/star/star.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import starListener from './starListener.js';
const serializedATN = [4,1,11,91,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,5,0,26,8,
0,10,0,12,0,29,9,0,1,0,1,0,1,1,1,1,4,1,35,8,1,11,1,12,1,36,1,2,1,2,1,2,1,
2,4,2,43,8,2,11,2,12,2,44,1,3,1,3,1,3,1,3,4,3,51,8,3,11,3,12,3,52,1,4,1,
4,4,4,57,8,4,11,4,12,4,58,1,4,4,4,62,8,4,11,4,12,4,63,1,4,3,4,67,8,4,4,4,
69,8,4,11,4,12,4,70,1,5,1,5,1,5,1,6,1,6,1,6,3,6,79,8,6,1,7,1,7,1,8,1,8,1,
9,1,9,1,10,1,10,1,11,1,11,1,11,0,0,12,0,2,4,6,8,10,12,14,16,18,20,22,0,1,
1,0,1,2,93,0,27,1,0,0,0,2,32,1,0,0,0,4,42,1,0,0,0,6,46,1,0,0,0,8,54,1,0,
0,0,10,72,1,0,0,0,12,78,1,0,0,0,14,80,1,0,0,0,16,82,1,0,0,0,18,84,1,0,0,
0,20,86,1,0,0,0,22,88,1,0,0,0,24,26,3,2,1,0,25,24,1,0,0,0,26,29,1,0,0,0,
27,25,1,0,0,0,27,28,1,0,0,0,28,30,1,0,0,0,29,27,1,0,0,0,30,31,5,0,0,1,31,
1,1,0,0,0,32,34,5,8,0,0,33,35,3,4,2,0,34,33,1,0,0,0,35,36,1,0,0,0,36,34,
1,0,0,0,36,37,1,0,0,0,37,3,1,0,0,0,38,43,3,10,5,0,39,43,3,6,3,0,40,43,3,
20,10,0,41,43,3,8,4,0,42,38,1,0,0,0,42,39,1,0,0,0,42,40,1,0,0,0,42,41,1,
0,0,0,43,44,1,0,0,0,44,42,1,0,0,0,44,45,1,0,0,0,45,5,1,0,0,0,46,50,3,18,
9,0,47,51,3,16,8,0,48,51,3,12,6,0,49,51,3,8,4,0,50,47,1,0,0,0,50,48,1,0,
0,0,50,49,1,0,0,0,51,52,1,0,0,0,52,50,1,0,0,0,52,53,1,0,0,0,53,7,1,0,0,0,
54,56,5,4,0,0,55,57,3,16,8,0,56,55,1,0,0,0,57,58,1,0,0,0,58,56,1,0,0,0,58,
59,1,0,0,0,59,68,1,0,0,0,60,62,3,12,6,0,61,60,1,0,0,0,62,63,1,0,0,0,63,61,
1,0,0,0,63,64,1,0,0,0,64,66,1,0,0,0,65,67,5,5,0,0,66,65,1,0,0,0,66,67,1,
0,0,0,67,69,1,0,0,0,68,61,1,0,0,0,69,70,1,0,0,0,70,68,1,0,0,0,70,71,1,0,
0,0,71,9,1,0,0,0,72,73,3,16,8,0,73,74,3,12,6,0,74,11,1,0,0,0,75,79,3,14,
7,0,76,79,3,22,11,0,77,79,3,8,4,0,78,75,1,0,0,0,78,76,1,0,0,0,78,77,1,0,
0,0,79,13,1,0,0,0,80,81,7,0,0,0,81,15,1,0,0,0,82,83,5,9,0,0,83,17,1,0,0,
0,84,85,5,7,0,0,85,19,1,0,0,0,86,87,5,6,0,0,87,21,1,0,0,0,88,89,5,3,0,0,
89,23,1,0,0,0,11,27,36,42,44,50,52,58,63,66,70,78];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class starParser extends antlr4.Parser {

    static grammarFileName = "star.g4";
    static literalNames = [ null, null, null, null, "'loop_'", "'stop_'", 
                            "'global_'" ];
    static symbolicNames = [ null, "STRING1", "STRING2", "LITERAL", "LOOP", 
                             "STOP", "GLOBAL", "SAVE", "DATA", "DATANAME", 
                             "COMMENT", "WS" ];
    static ruleNames = [ "star", "datablock_", "element_", "saveframe_", 
                         "loop_", "keyval_", "dataitem_", "string_", "dataname_", 
                         "save_", "global_", "literal_" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = starParser.ruleNames;
        this.literalNames = starParser.literalNames;
        this.symbolicNames = starParser.symbolicNames;
    }



	star() {
	    let localctx = new StarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, starParser.RULE_star);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 24;
	            this.datablock_();
	            this.state = 29;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 30;
	        this.match(starParser.EOF);
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



	datablock_() {
	    let localctx = new Datablock_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, starParser.RULE_datablock_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.match(starParser.DATA);
	        this.state = 34; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 33;
	            this.element_();
	            this.state = 36; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 720) !== 0));
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



	element_() {
	    let localctx = new Element_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, starParser.RULE_element_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 42;
	        		this._errHandler.sync(this);
	        		switch(this._input.LA(1)) {
	        		case 9:
	        		    this.state = 38;
	        		    this.keyval_();
	        		    break;
	        		case 7:
	        		    this.state = 39;
	        		    this.saveframe_();
	        		    break;
	        		case 6:
	        		    this.state = 40;
	        		    this.global_();
	        		    break;
	        		case 4:
	        		    this.state = 41;
	        		    this.loop_();
	        		    break;
	        		default:
	        		    throw new antlr4.error.NoViableAltException(this);
	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 44; 
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



	saveframe_() {
	    let localctx = new Saveframe_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, starParser.RULE_saveframe_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.save_();
	        this.state = 50; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 50;
	        		this._errHandler.sync(this);
	        		var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        		switch(la_) {
	        		case 1:
	        		    this.state = 47;
	        		    this.dataname_();
	        		    break;

	        		case 2:
	        		    this.state = 48;
	        		    this.dataitem_();
	        		    break;

	        		case 3:
	        		    this.state = 49;
	        		    this.loop_();
	        		    break;

	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 52; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,5, this._ctx);
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



	loop_() {
	    let localctx = new Loop_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, starParser.RULE_loop_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(starParser.LOOP);
	        this.state = 56; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 55;
	            this.dataname_();
	            this.state = 58; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===9);
	        this.state = 68; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 61; 
	        		this._errHandler.sync(this);
	        		var _alt = 1;
	        		do {
	        			switch (_alt) {
	        			case 1:
	        				this.state = 60;
	        				this.dataitem_();
	        				break;
	        			default:
	        				throw new antlr4.error.NoViableAltException(this);
	        			}
	        			this.state = 63; 
	        			this._errHandler.sync(this);
	        			_alt = this._interp.adaptivePredict(this._input,7, this._ctx);
	        		} while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        		this.state = 66;
	        		this._errHandler.sync(this);
	        		var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        		if(la_===1) {
	        		    this.state = 65;
	        		    this.match(starParser.STOP);

	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 70; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,9, this._ctx);
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



	keyval_() {
	    let localctx = new Keyval_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, starParser.RULE_keyval_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.dataname_();
	        this.state = 73;
	        this.dataitem_();
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



	dataitem_() {
	    let localctx = new Dataitem_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, starParser.RULE_dataitem_);
	    try {
	        this.state = 78;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 75;
	            this.string_();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 76;
	            this.literal_();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 77;
	            this.loop_();
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



	string_() {
	    let localctx = new String_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, starParser.RULE_string_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        _la = this._input.LA(1);
	        if(!(_la===1 || _la===2)) {
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



	dataname_() {
	    let localctx = new Dataname_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, starParser.RULE_dataname_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.match(starParser.DATANAME);
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



	save_() {
	    let localctx = new Save_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, starParser.RULE_save_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.match(starParser.SAVE);
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



	global_() {
	    let localctx = new Global_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, starParser.RULE_global_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(starParser.GLOBAL);
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



	literal_() {
	    let localctx = new Literal_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, starParser.RULE_literal_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.match(starParser.LITERAL);
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

starParser.EOF = antlr4.Token.EOF;
starParser.STRING1 = 1;
starParser.STRING2 = 2;
starParser.LITERAL = 3;
starParser.LOOP = 4;
starParser.STOP = 5;
starParser.GLOBAL = 6;
starParser.SAVE = 7;
starParser.DATA = 8;
starParser.DATANAME = 9;
starParser.COMMENT = 10;
starParser.WS = 11;

starParser.RULE_star = 0;
starParser.RULE_datablock_ = 1;
starParser.RULE_element_ = 2;
starParser.RULE_saveframe_ = 3;
starParser.RULE_loop_ = 4;
starParser.RULE_keyval_ = 5;
starParser.RULE_dataitem_ = 6;
starParser.RULE_string_ = 7;
starParser.RULE_dataname_ = 8;
starParser.RULE_save_ = 9;
starParser.RULE_global_ = 10;
starParser.RULE_literal_ = 11;

class StarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = starParser.RULE_star;
    }

	EOF() {
	    return this.getToken(starParser.EOF, 0);
	};

	datablock_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Datablock_Context);
	    } else {
	        return this.getTypedRuleContext(Datablock_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof starListener ) {
	        listener.enterStar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof starListener ) {
	        listener.exitStar(this);
		}
	}


}



class Datablock_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = starParser.RULE_datablock_;
    }

	DATA() {
	    return this.getToken(starParser.DATA, 0);
	};

	element_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Element_Context);
	    } else {
	        return this.getTypedRuleContext(Element_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof starListener ) {
	        listener.enterDatablock_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof starListener ) {
	        listener.exitDatablock_(this);
		}
	}


}



class Element_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = starParser.RULE_element_;
    }

	keyval_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Keyval_Context);
	    } else {
	        return this.getTypedRuleContext(Keyval_Context,i);
	    }
	};

	saveframe_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Saveframe_Context);
	    } else {
	        return this.getTypedRuleContext(Saveframe_Context,i);
	    }
	};

	global_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Global_Context);
	    } else {
	        return this.getTypedRuleContext(Global_Context,i);
	    }
	};

	loop_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Loop_Context);
	    } else {
	        return this.getTypedRuleContext(Loop_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof starListener ) {
	        listener.enterElement_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof starListener ) {
	        listener.exitElement_(this);
		}
	}


}



class Saveframe_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = starParser.RULE_saveframe_;
    }

	save_() {
	    return this.getTypedRuleContext(Save_Context,0);
	};

	dataname_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Dataname_Context);
	    } else {
	        return this.getTypedRuleContext(Dataname_Context,i);
	    }
	};

	dataitem_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Dataitem_Context);
	    } else {
	        return this.getTypedRuleContext(Dataitem_Context,i);
	    }
	};

	loop_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Loop_Context);
	    } else {
	        return this.getTypedRuleContext(Loop_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof starListener ) {
	        listener.enterSaveframe_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof starListener ) {
	        listener.exitSaveframe_(this);
		}
	}


}



class Loop_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = starParser.RULE_loop_;
    }

	LOOP() {
	    return this.getToken(starParser.LOOP, 0);
	};

	dataname_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Dataname_Context);
	    } else {
	        return this.getTypedRuleContext(Dataname_Context,i);
	    }
	};

	dataitem_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Dataitem_Context);
	    } else {
	        return this.getTypedRuleContext(Dataitem_Context,i);
	    }
	};

	STOP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(starParser.STOP);
	    } else {
	        return this.getToken(starParser.STOP, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof starListener ) {
	        listener.enterLoop_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof starListener ) {
	        listener.exitLoop_(this);
		}
	}


}



class Keyval_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = starParser.RULE_keyval_;
    }

	dataname_() {
	    return this.getTypedRuleContext(Dataname_Context,0);
	};

	dataitem_() {
	    return this.getTypedRuleContext(Dataitem_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof starListener ) {
	        listener.enterKeyval_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof starListener ) {
	        listener.exitKeyval_(this);
		}
	}


}



class Dataitem_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = starParser.RULE_dataitem_;
    }

	string_() {
	    return this.getTypedRuleContext(String_Context,0);
	};

	literal_() {
	    return this.getTypedRuleContext(Literal_Context,0);
	};

	loop_() {
	    return this.getTypedRuleContext(Loop_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof starListener ) {
	        listener.enterDataitem_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof starListener ) {
	        listener.exitDataitem_(this);
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
        this.ruleIndex = starParser.RULE_string_;
    }

	STRING1() {
	    return this.getToken(starParser.STRING1, 0);
	};

	STRING2() {
	    return this.getToken(starParser.STRING2, 0);
	};

	enterRule(listener) {
	    if(listener instanceof starListener ) {
	        listener.enterString_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof starListener ) {
	        listener.exitString_(this);
		}
	}


}



class Dataname_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = starParser.RULE_dataname_;
    }

	DATANAME() {
	    return this.getToken(starParser.DATANAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof starListener ) {
	        listener.enterDataname_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof starListener ) {
	        listener.exitDataname_(this);
		}
	}


}



class Save_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = starParser.RULE_save_;
    }

	SAVE() {
	    return this.getToken(starParser.SAVE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof starListener ) {
	        listener.enterSave_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof starListener ) {
	        listener.exitSave_(this);
		}
	}


}



class Global_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = starParser.RULE_global_;
    }

	GLOBAL() {
	    return this.getToken(starParser.GLOBAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof starListener ) {
	        listener.enterGlobal_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof starListener ) {
	        listener.exitGlobal_(this);
		}
	}


}



class Literal_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = starParser.RULE_literal_;
    }

	LITERAL() {
	    return this.getToken(starParser.LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof starListener ) {
	        listener.enterLiteral_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof starListener ) {
	        listener.exitLiteral_(this);
		}
	}


}




starParser.StarContext = StarContext; 
starParser.Datablock_Context = Datablock_Context; 
starParser.Element_Context = Element_Context; 
starParser.Saveframe_Context = Saveframe_Context; 
starParser.Loop_Context = Loop_Context; 
starParser.Keyval_Context = Keyval_Context; 
starParser.Dataitem_Context = Dataitem_Context; 
starParser.String_Context = String_Context; 
starParser.Dataname_Context = Dataname_Context; 
starParser.Save_Context = Save_Context; 
starParser.Global_Context = Global_Context; 
starParser.Literal_Context = Literal_Context; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
