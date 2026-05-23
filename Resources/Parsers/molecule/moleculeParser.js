// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/molecule/molecule.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import moleculeListener from './moleculeListener.js';
const serializedATN = [4,1,8,64,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,5,0,20,8,0,10,0,12,0,23,9,0,1,0,1,0,
1,1,3,1,28,8,1,1,1,4,1,31,8,1,11,1,12,1,32,1,2,1,2,3,2,37,8,2,1,3,1,3,1,
3,3,3,42,8,3,1,4,1,4,4,4,46,8,4,11,4,12,4,47,1,4,1,4,1,5,1,5,4,5,54,8,5,
11,5,12,5,55,1,5,1,5,1,6,1,6,1,7,1,7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,0,63,
0,16,1,0,0,0,2,30,1,0,0,0,4,34,1,0,0,0,6,41,1,0,0,0,8,43,1,0,0,0,10,51,1,
0,0,0,12,59,1,0,0,0,14,61,1,0,0,0,16,21,3,2,1,0,17,18,5,1,0,0,18,20,3,2,
1,0,19,17,1,0,0,0,20,23,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,24,1,0,0,
0,23,21,1,0,0,0,24,25,5,0,0,1,25,1,1,0,0,0,26,28,3,14,7,0,27,26,1,0,0,0,
27,28,1,0,0,0,28,29,1,0,0,0,29,31,3,4,2,0,30,27,1,0,0,0,31,32,1,0,0,0,32,
30,1,0,0,0,32,33,1,0,0,0,33,3,1,0,0,0,34,36,3,6,3,0,35,37,3,14,7,0,36,35,
1,0,0,0,36,37,1,0,0,0,37,5,1,0,0,0,38,42,3,12,6,0,39,42,3,8,4,0,40,42,3,
10,5,0,41,38,1,0,0,0,41,39,1,0,0,0,41,40,1,0,0,0,42,7,1,0,0,0,43,45,5,2,
0,0,44,46,3,4,2,0,45,44,1,0,0,0,46,47,1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,
0,48,49,1,0,0,0,49,50,5,3,0,0,50,9,1,0,0,0,51,53,5,4,0,0,52,54,3,4,2,0,53,
52,1,0,0,0,54,55,1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,57,1,0,0,0,57,58,
5,5,0,0,58,11,1,0,0,0,59,60,5,6,0,0,60,13,1,0,0,0,61,62,5,7,0,0,62,15,1,
0,0,0,7,21,27,32,36,41,47,55];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class moleculeParser extends antlr4.Parser {

    static grammarFileName = "molecule.g4";
    static literalNames = [ null, "'\\u00B7'", "'('", "')'", "'['", "']'" ];
    static symbolicNames = [ null, null, null, null, null, null, "ELEMENT", 
                             "NUMBER", "WS" ];
    static ruleNames = [ "molecule", "part_", "structure", "symbol", "group", 
                         "ion", "element", "count" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = moleculeParser.ruleNames;
        this.literalNames = moleculeParser.literalNames;
        this.symbolicNames = moleculeParser.symbolicNames;
    }



	molecule() {
	    let localctx = new MoleculeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, moleculeParser.RULE_molecule);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.part_();
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 17;
	            this.match(moleculeParser.T__0);
	            this.state = 18;
	            this.part_();
	            this.state = 23;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 24;
	        this.match(moleculeParser.EOF);
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



	part_() {
	    let localctx = new Part_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, moleculeParser.RULE_part_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 27;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7) {
	                this.state = 26;
	                this.count();
	            }

	            this.state = 29;
	            this.structure();
	            this.state = 32; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 212) !== 0));
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



	structure() {
	    let localctx = new StructureContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, moleculeParser.RULE_structure);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.symbol();
	        this.state = 36;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        if(la_===1) {
	            this.state = 35;
	            this.count();

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



	symbol() {
	    let localctx = new SymbolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, moleculeParser.RULE_symbol);
	    try {
	        this.state = 41;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 38;
	            this.element();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 39;
	            this.group();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 40;
	            this.ion();
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
	    this.enterRule(localctx, 8, moleculeParser.RULE_group);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(moleculeParser.T__1);
	        this.state = 45; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 44;
	            this.structure();
	            this.state = 47; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 84) !== 0));
	        this.state = 49;
	        this.match(moleculeParser.T__2);
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



	ion() {
	    let localctx = new IonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, moleculeParser.RULE_ion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(moleculeParser.T__3);
	        this.state = 53; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 52;
	            this.structure();
	            this.state = 55; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 84) !== 0));
	        this.state = 57;
	        this.match(moleculeParser.T__4);
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
	    this.enterRule(localctx, 12, moleculeParser.RULE_element);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.match(moleculeParser.ELEMENT);
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



	count() {
	    let localctx = new CountContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, moleculeParser.RULE_count);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(moleculeParser.NUMBER);
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

moleculeParser.EOF = antlr4.Token.EOF;
moleculeParser.T__0 = 1;
moleculeParser.T__1 = 2;
moleculeParser.T__2 = 3;
moleculeParser.T__3 = 4;
moleculeParser.T__4 = 5;
moleculeParser.ELEMENT = 6;
moleculeParser.NUMBER = 7;
moleculeParser.WS = 8;

moleculeParser.RULE_molecule = 0;
moleculeParser.RULE_part_ = 1;
moleculeParser.RULE_structure = 2;
moleculeParser.RULE_symbol = 3;
moleculeParser.RULE_group = 4;
moleculeParser.RULE_ion = 5;
moleculeParser.RULE_element = 6;
moleculeParser.RULE_count = 7;

class MoleculeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = moleculeParser.RULE_molecule;
    }

	part_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Part_Context);
	    } else {
	        return this.getTypedRuleContext(Part_Context,i);
	    }
	};

	EOF() {
	    return this.getToken(moleculeParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof moleculeListener ) {
	        listener.enterMolecule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof moleculeListener ) {
	        listener.exitMolecule(this);
		}
	}


}



class Part_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = moleculeParser.RULE_part_;
    }

	structure = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StructureContext);
	    } else {
	        return this.getTypedRuleContext(StructureContext,i);
	    }
	};

	count = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CountContext);
	    } else {
	        return this.getTypedRuleContext(CountContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof moleculeListener ) {
	        listener.enterPart_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof moleculeListener ) {
	        listener.exitPart_(this);
		}
	}


}



class StructureContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = moleculeParser.RULE_structure;
    }

	symbol() {
	    return this.getTypedRuleContext(SymbolContext,0);
	};

	count() {
	    return this.getTypedRuleContext(CountContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof moleculeListener ) {
	        listener.enterStructure(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof moleculeListener ) {
	        listener.exitStructure(this);
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
        this.ruleIndex = moleculeParser.RULE_symbol;
    }

	element() {
	    return this.getTypedRuleContext(ElementContext,0);
	};

	group() {
	    return this.getTypedRuleContext(GroupContext,0);
	};

	ion() {
	    return this.getTypedRuleContext(IonContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof moleculeListener ) {
	        listener.enterSymbol(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof moleculeListener ) {
	        listener.exitSymbol(this);
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
        this.ruleIndex = moleculeParser.RULE_group;
    }

	structure = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StructureContext);
	    } else {
	        return this.getTypedRuleContext(StructureContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof moleculeListener ) {
	        listener.enterGroup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof moleculeListener ) {
	        listener.exitGroup(this);
		}
	}


}



class IonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = moleculeParser.RULE_ion;
    }

	structure = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StructureContext);
	    } else {
	        return this.getTypedRuleContext(StructureContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof moleculeListener ) {
	        listener.enterIon(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof moleculeListener ) {
	        listener.exitIon(this);
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
        this.ruleIndex = moleculeParser.RULE_element;
    }

	ELEMENT() {
	    return this.getToken(moleculeParser.ELEMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof moleculeListener ) {
	        listener.enterElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof moleculeListener ) {
	        listener.exitElement(this);
		}
	}


}



class CountContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = moleculeParser.RULE_count;
    }

	NUMBER() {
	    return this.getToken(moleculeParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof moleculeListener ) {
	        listener.enterCount(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof moleculeListener ) {
	        listener.exitCount(this);
		}
	}


}




moleculeParser.MoleculeContext = MoleculeContext; 
moleculeParser.Part_Context = Part_Context; 
moleculeParser.StructureContext = StructureContext; 
moleculeParser.SymbolContext = SymbolContext; 
moleculeParser.GroupContext = GroupContext; 
moleculeParser.IonContext = IonContext; 
moleculeParser.ElementContext = ElementContext; 
moleculeParser.CountContext = CountContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
