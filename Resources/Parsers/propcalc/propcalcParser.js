// Generated from ./propcalc/propcalc.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import propcalcListener from './propcalcListener.js';
const serializedATN = [4,1,12,65,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,1,0,1,1,1,1,1,1,5,1,24,8,1,10,1,12,1,
27,9,1,1,2,1,2,1,2,3,2,32,8,2,1,3,1,3,1,3,5,3,37,8,3,10,3,12,3,40,9,3,1,
4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,49,8,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,
5,7,60,8,7,10,7,12,7,63,9,7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,1,1,0,2,3,63,
0,16,1,0,0,0,2,20,1,0,0,0,4,31,1,0,0,0,6,33,1,0,0,0,8,48,1,0,0,0,10,50,1,
0,0,0,12,54,1,0,0,0,14,61,1,0,0,0,16,17,3,2,1,0,17,18,5,7,0,0,18,19,3,2,
1,0,19,1,1,0,0,0,20,25,3,4,2,0,21,22,7,0,0,0,22,24,3,4,2,0,23,21,1,0,0,0,
24,27,1,0,0,0,25,23,1,0,0,0,25,26,1,0,0,0,26,3,1,0,0,0,27,25,1,0,0,0,28,
32,3,8,4,0,29,32,3,10,5,0,30,32,3,12,6,0,31,28,1,0,0,0,31,29,1,0,0,0,31,
30,1,0,0,0,32,5,1,0,0,0,33,38,3,8,4,0,34,35,5,1,0,0,35,37,3,8,4,0,36,34,
1,0,0,0,37,40,1,0,0,0,38,36,1,0,0,0,38,39,1,0,0,0,39,7,1,0,0,0,40,38,1,0,
0,0,41,49,3,14,7,0,42,43,5,4,0,0,43,49,3,8,4,0,44,45,5,9,0,0,45,46,3,2,1,
0,46,47,5,10,0,0,47,49,1,0,0,0,48,41,1,0,0,0,48,42,1,0,0,0,48,44,1,0,0,0,
49,9,1,0,0,0,50,51,3,8,4,0,51,52,5,8,0,0,52,53,3,8,4,0,53,11,1,0,0,0,54,
55,3,8,4,0,55,56,5,6,0,0,56,57,3,8,4,0,57,13,1,0,0,0,58,60,5,11,0,0,59,58,
1,0,0,0,60,63,1,0,0,0,61,59,1,0,0,0,61,62,1,0,0,0,62,15,1,0,0,0,63,61,1,
0,0,0,5,25,31,38,48,61];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class propcalcParser extends antlr4.Parser {

    static grammarFileName = "propcalc.g4";
    static literalNames = [ null, "','", "'^'", "'v'", "'!'", "'='", "'->'", 
                            "'|-'", "'<->'", "'('", "')'" ];
    static symbolicNames = [ null, null, "AND", "OR", "NOT", "EQ", "IMPLIES", 
                             "THEREFORE", "EQUIV", "LPAREN", "RPAREN", "LETTER", 
                             "WS" ];
    static ruleNames = [ "proposition", "expression", "relExpression", "atoms", 
                         "atom", "equiv", "implies", "variable" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = propcalcParser.ruleNames;
        this.literalNames = propcalcParser.literalNames;
        this.symbolicNames = propcalcParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	proposition() {
	    let localctx = new PropositionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, propcalcParser.RULE_proposition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.expression();
	        this.state = 17;
	        this.match(propcalcParser.THEREFORE);
	        this.state = 18;
	        this.expression();
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



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, propcalcParser.RULE_expression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.relExpression();
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===propcalcParser.AND || _la===propcalcParser.OR) {
	            this.state = 21;
	            _la = this._input.LA(1);
	            if(!(_la===propcalcParser.AND || _la===propcalcParser.OR)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 22;
	            this.relExpression();
	            this.state = 27;
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



	relExpression() {
	    let localctx = new RelExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, propcalcParser.RULE_relExpression);
	    try {
	        this.state = 31;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 28;
	            this.atom();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 29;
	            this.equiv();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 30;
	            this.implies();
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



	atoms() {
	    let localctx = new AtomsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, propcalcParser.RULE_atoms);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.atom();
	        this.state = 38;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===propcalcParser.T__0) {
	            this.state = 34;
	            this.match(propcalcParser.T__0);
	            this.state = 35;
	            this.atom();
	            this.state = 40;
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



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, propcalcParser.RULE_atom);
	    try {
	        this.state = 48;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case propcalcParser.EOF:
	        case propcalcParser.T__0:
	        case propcalcParser.AND:
	        case propcalcParser.OR:
	        case propcalcParser.IMPLIES:
	        case propcalcParser.THEREFORE:
	        case propcalcParser.EQUIV:
	        case propcalcParser.RPAREN:
	        case propcalcParser.LETTER:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 41;
	            this.variable();
	            break;
	        case propcalcParser.NOT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 42;
	            this.match(propcalcParser.NOT);
	            this.state = 43;
	            this.atom();
	            break;
	        case propcalcParser.LPAREN:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 44;
	            this.match(propcalcParser.LPAREN);
	            this.state = 45;
	            this.expression();
	            this.state = 46;
	            this.match(propcalcParser.RPAREN);
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



	equiv() {
	    let localctx = new EquivContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, propcalcParser.RULE_equiv);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.atom();
	        this.state = 51;
	        this.match(propcalcParser.EQUIV);
	        this.state = 52;
	        this.atom();
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



	implies() {
	    let localctx = new ImpliesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, propcalcParser.RULE_implies);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.atom();
	        this.state = 55;
	        this.match(propcalcParser.IMPLIES);
	        this.state = 56;
	        this.atom();
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



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, propcalcParser.RULE_variable);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===propcalcParser.LETTER) {
	            this.state = 58;
	            this.match(propcalcParser.LETTER);
	            this.state = 63;
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


}

propcalcParser.EOF = antlr4.Token.EOF;
propcalcParser.T__0 = 1;
propcalcParser.AND = 2;
propcalcParser.OR = 3;
propcalcParser.NOT = 4;
propcalcParser.EQ = 5;
propcalcParser.IMPLIES = 6;
propcalcParser.THEREFORE = 7;
propcalcParser.EQUIV = 8;
propcalcParser.LPAREN = 9;
propcalcParser.RPAREN = 10;
propcalcParser.LETTER = 11;
propcalcParser.WS = 12;

propcalcParser.RULE_proposition = 0;
propcalcParser.RULE_expression = 1;
propcalcParser.RULE_relExpression = 2;
propcalcParser.RULE_atoms = 3;
propcalcParser.RULE_atom = 4;
propcalcParser.RULE_equiv = 5;
propcalcParser.RULE_implies = 6;
propcalcParser.RULE_variable = 7;

class PropositionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = propcalcParser.RULE_proposition;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	THEREFORE() {
	    return this.getToken(propcalcParser.THEREFORE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof propcalcListener ) {
	        listener.enterProposition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof propcalcListener ) {
	        listener.exitProposition(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = propcalcParser.RULE_expression;
    }

	relExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RelExpressionContext);
	    } else {
	        return this.getTypedRuleContext(RelExpressionContext,i);
	    }
	};

	AND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(propcalcParser.AND);
	    } else {
	        return this.getToken(propcalcParser.AND, i);
	    }
	};


	OR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(propcalcParser.OR);
	    } else {
	        return this.getToken(propcalcParser.OR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof propcalcListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof propcalcListener ) {
	        listener.exitExpression(this);
		}
	}


}



class RelExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = propcalcParser.RULE_relExpression;
    }

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	equiv() {
	    return this.getTypedRuleContext(EquivContext,0);
	};

	implies() {
	    return this.getTypedRuleContext(ImpliesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof propcalcListener ) {
	        listener.enterRelExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof propcalcListener ) {
	        listener.exitRelExpression(this);
		}
	}


}



class AtomsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = propcalcParser.RULE_atoms;
    }

	atom = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AtomContext);
	    } else {
	        return this.getTypedRuleContext(AtomContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof propcalcListener ) {
	        listener.enterAtoms(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof propcalcListener ) {
	        listener.exitAtoms(this);
		}
	}


}



class AtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = propcalcParser.RULE_atom;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	NOT() {
	    return this.getToken(propcalcParser.NOT, 0);
	};

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	LPAREN() {
	    return this.getToken(propcalcParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(propcalcParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof propcalcListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof propcalcListener ) {
	        listener.exitAtom(this);
		}
	}


}



class EquivContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = propcalcParser.RULE_equiv;
    }

	atom = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AtomContext);
	    } else {
	        return this.getTypedRuleContext(AtomContext,i);
	    }
	};

	EQUIV() {
	    return this.getToken(propcalcParser.EQUIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof propcalcListener ) {
	        listener.enterEquiv(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof propcalcListener ) {
	        listener.exitEquiv(this);
		}
	}


}



class ImpliesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = propcalcParser.RULE_implies;
    }

	atom = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AtomContext);
	    } else {
	        return this.getTypedRuleContext(AtomContext,i);
	    }
	};

	IMPLIES() {
	    return this.getToken(propcalcParser.IMPLIES, 0);
	};

	enterRule(listener) {
	    if(listener instanceof propcalcListener ) {
	        listener.enterImplies(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof propcalcListener ) {
	        listener.exitImplies(this);
		}
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = propcalcParser.RULE_variable;
    }

	LETTER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(propcalcParser.LETTER);
	    } else {
	        return this.getToken(propcalcParser.LETTER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof propcalcListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof propcalcListener ) {
	        listener.exitVariable(this);
		}
	}


}




propcalcParser.PropositionContext = PropositionContext; 
propcalcParser.ExpressionContext = ExpressionContext; 
propcalcParser.RelExpressionContext = RelExpressionContext; 
propcalcParser.AtomsContext = AtomsContext; 
propcalcParser.AtomContext = AtomContext; 
propcalcParser.EquivContext = EquivContext; 
propcalcParser.ImpliesContext = ImpliesContext; 
propcalcParser.VariableContext = VariableContext; 
