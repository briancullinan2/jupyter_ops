// Generated from Resources/Parsers/wln/wln.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import wlnListener from './wlnListener.js';
const serializedATN = [4,1,26,24,2,0,7,0,2,1,7,1,2,2,7,2,1,0,1,0,1,0,5,0,
10,8,0,10,0,12,0,13,9,0,1,0,1,0,1,1,4,1,18,8,1,11,1,12,1,19,1,2,1,2,1,2,
0,0,3,0,2,4,0,1,2,0,1,22,24,24,22,0,6,1,0,0,0,2,17,1,0,0,0,4,21,1,0,0,0,
6,11,3,2,1,0,7,8,5,25,0,0,8,10,3,2,1,0,9,7,1,0,0,0,10,13,1,0,0,0,11,9,1,
0,0,0,11,12,1,0,0,0,12,14,1,0,0,0,13,11,1,0,0,0,14,15,5,0,0,1,15,1,1,0,0,
0,16,18,3,4,2,0,17,16,1,0,0,0,18,19,1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,
20,3,1,0,0,0,21,22,7,0,0,0,22,5,1,0,0,0,2,11,19];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class wlnParser extends antlr4.Parser {

    static grammarFileName = "wln.g4";
    static literalNames = [ null, "'E'", "'G'", "'I'", "'R'", "'U'", "'V'", 
                            "'C'", "'K'", "'L'", "'M'", "'N'", "'O'", "'T'", 
                            "'W'", "'X'", "'Y'", "'Z'", "'F'", "'H'", "'Q'", 
                            "'S'", "'UU'", "'&'", null, "' '" ];
    static symbolicNames = [ null, "BROMINE", "CHLORINE", "IODINE", "BENZENE", 
                             "DOUBLEBOND", "CARBONYL", "CARBONNON", "NITROGEN3PLUS", 
                             "CARBOSYCLIC", "IMINO", "NITROGEN4LESS", "OXYGEN", 
                             "HETEROCYCLIC", "DIOXO", "CARBON4", "CARBON3", 
                             "AMINO", "FLOURINE", "HYDROGEN", "HYDROXYL", 
                             "SULFER", "TRIPLE", "AMP", "DIGIT", "SPACE", 
                             "WS" ];
    static ruleNames = [ "wln", "group", "symbol" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = wlnParser.ruleNames;
        this.literalNames = wlnParser.literalNames;
        this.symbolicNames = wlnParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	wln() {
	    let localctx = new WlnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, wlnParser.RULE_wln);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 6;
	        this.group();
	        this.state = 11;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===wlnParser.SPACE) {
	            this.state = 7;
	            this.match(wlnParser.SPACE);
	            this.state = 8;
	            this.group();
	            this.state = 13;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 14;
	        this.match(wlnParser.EOF);
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
	    this.enterRule(localctx, 2, wlnParser.RULE_group);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 16;
	            this.symbol();
	            this.state = 19; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << wlnParser.BROMINE) | (1 << wlnParser.CHLORINE) | (1 << wlnParser.IODINE) | (1 << wlnParser.BENZENE) | (1 << wlnParser.DOUBLEBOND) | (1 << wlnParser.CARBONYL) | (1 << wlnParser.CARBONNON) | (1 << wlnParser.NITROGEN3PLUS) | (1 << wlnParser.CARBOSYCLIC) | (1 << wlnParser.IMINO) | (1 << wlnParser.NITROGEN4LESS) | (1 << wlnParser.OXYGEN) | (1 << wlnParser.HETEROCYCLIC) | (1 << wlnParser.DIOXO) | (1 << wlnParser.CARBON4) | (1 << wlnParser.CARBON3) | (1 << wlnParser.AMINO) | (1 << wlnParser.FLOURINE) | (1 << wlnParser.HYDROGEN) | (1 << wlnParser.HYDROXYL) | (1 << wlnParser.SULFER) | (1 << wlnParser.TRIPLE) | (1 << wlnParser.DIGIT))) !== 0));
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



	symbol() {
	    let localctx = new SymbolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, wlnParser.RULE_symbol);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << wlnParser.BROMINE) | (1 << wlnParser.CHLORINE) | (1 << wlnParser.IODINE) | (1 << wlnParser.BENZENE) | (1 << wlnParser.DOUBLEBOND) | (1 << wlnParser.CARBONYL) | (1 << wlnParser.CARBONNON) | (1 << wlnParser.NITROGEN3PLUS) | (1 << wlnParser.CARBOSYCLIC) | (1 << wlnParser.IMINO) | (1 << wlnParser.NITROGEN4LESS) | (1 << wlnParser.OXYGEN) | (1 << wlnParser.HETEROCYCLIC) | (1 << wlnParser.DIOXO) | (1 << wlnParser.CARBON4) | (1 << wlnParser.CARBON3) | (1 << wlnParser.AMINO) | (1 << wlnParser.FLOURINE) | (1 << wlnParser.HYDROGEN) | (1 << wlnParser.HYDROXYL) | (1 << wlnParser.SULFER) | (1 << wlnParser.TRIPLE) | (1 << wlnParser.DIGIT))) !== 0))) {
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

wlnParser.EOF = antlr4.Token.EOF;
wlnParser.BROMINE = 1;
wlnParser.CHLORINE = 2;
wlnParser.IODINE = 3;
wlnParser.BENZENE = 4;
wlnParser.DOUBLEBOND = 5;
wlnParser.CARBONYL = 6;
wlnParser.CARBONNON = 7;
wlnParser.NITROGEN3PLUS = 8;
wlnParser.CARBOSYCLIC = 9;
wlnParser.IMINO = 10;
wlnParser.NITROGEN4LESS = 11;
wlnParser.OXYGEN = 12;
wlnParser.HETEROCYCLIC = 13;
wlnParser.DIOXO = 14;
wlnParser.CARBON4 = 15;
wlnParser.CARBON3 = 16;
wlnParser.AMINO = 17;
wlnParser.FLOURINE = 18;
wlnParser.HYDROGEN = 19;
wlnParser.HYDROXYL = 20;
wlnParser.SULFER = 21;
wlnParser.TRIPLE = 22;
wlnParser.AMP = 23;
wlnParser.DIGIT = 24;
wlnParser.SPACE = 25;
wlnParser.WS = 26;

wlnParser.RULE_wln = 0;
wlnParser.RULE_group = 1;
wlnParser.RULE_symbol = 2;

class WlnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wlnParser.RULE_wln;
    }

	group = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(GroupContext);
	    } else {
	        return this.getTypedRuleContext(GroupContext,i);
	    }
	};

	EOF() {
	    return this.getToken(wlnParser.EOF, 0);
	};

	SPACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wlnParser.SPACE);
	    } else {
	        return this.getToken(wlnParser.SPACE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof wlnListener ) {
	        listener.enterWln(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wlnListener ) {
	        listener.exitWln(this);
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
        this.ruleIndex = wlnParser.RULE_group;
    }

	symbol = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SymbolContext);
	    } else {
	        return this.getTypedRuleContext(SymbolContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof wlnListener ) {
	        listener.enterGroup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wlnListener ) {
	        listener.exitGroup(this);
		}
	}


}



class SymbolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wlnParser.RULE_symbol;
    }

	BROMINE() {
	    return this.getToken(wlnParser.BROMINE, 0);
	};

	CHLORINE() {
	    return this.getToken(wlnParser.CHLORINE, 0);
	};

	IODINE() {
	    return this.getToken(wlnParser.IODINE, 0);
	};

	BENZENE() {
	    return this.getToken(wlnParser.BENZENE, 0);
	};

	DOUBLEBOND() {
	    return this.getToken(wlnParser.DOUBLEBOND, 0);
	};

	CARBONYL() {
	    return this.getToken(wlnParser.CARBONYL, 0);
	};

	CARBONNON() {
	    return this.getToken(wlnParser.CARBONNON, 0);
	};

	NITROGEN3PLUS() {
	    return this.getToken(wlnParser.NITROGEN3PLUS, 0);
	};

	CARBOSYCLIC() {
	    return this.getToken(wlnParser.CARBOSYCLIC, 0);
	};

	IMINO() {
	    return this.getToken(wlnParser.IMINO, 0);
	};

	NITROGEN4LESS() {
	    return this.getToken(wlnParser.NITROGEN4LESS, 0);
	};

	OXYGEN() {
	    return this.getToken(wlnParser.OXYGEN, 0);
	};

	HETEROCYCLIC() {
	    return this.getToken(wlnParser.HETEROCYCLIC, 0);
	};

	DIOXO() {
	    return this.getToken(wlnParser.DIOXO, 0);
	};

	CARBON4() {
	    return this.getToken(wlnParser.CARBON4, 0);
	};

	CARBON3() {
	    return this.getToken(wlnParser.CARBON3, 0);
	};

	AMINO() {
	    return this.getToken(wlnParser.AMINO, 0);
	};

	FLOURINE() {
	    return this.getToken(wlnParser.FLOURINE, 0);
	};

	HYDROGEN() {
	    return this.getToken(wlnParser.HYDROGEN, 0);
	};

	HYDROXYL() {
	    return this.getToken(wlnParser.HYDROXYL, 0);
	};

	SULFER() {
	    return this.getToken(wlnParser.SULFER, 0);
	};

	TRIPLE() {
	    return this.getToken(wlnParser.TRIPLE, 0);
	};

	DIGIT() {
	    return this.getToken(wlnParser.DIGIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wlnListener ) {
	        listener.enterSymbol(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wlnListener ) {
	        listener.exitSymbol(this);
		}
	}


}




wlnParser.WlnContext = WlnContext; 
wlnParser.GroupContext = GroupContext; 
wlnParser.SymbolContext = SymbolContext; 
