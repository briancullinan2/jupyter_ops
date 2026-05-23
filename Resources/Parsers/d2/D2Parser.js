// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/d2/D2.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import D2Listener from './D2Listener.js';
const serializedATN = [4,1,16,105,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,5,0,24,8,0,10,0,
12,0,27,9,0,1,0,1,0,1,1,1,1,1,1,1,1,3,1,35,8,1,1,2,1,2,1,2,3,2,40,8,2,1,
2,3,2,43,8,2,1,2,3,2,46,8,2,3,2,48,8,2,1,3,1,3,1,3,1,3,4,3,54,8,3,11,3,12,
3,55,1,3,1,3,3,3,60,8,3,1,3,3,3,63,8,3,1,4,1,4,5,4,67,8,4,10,4,12,4,70,9,
4,1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,6,5,6,80,8,6,10,6,12,6,83,9,6,1,6,3,6,86,
8,6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,10,5,10,100,8,10,10,
10,12,10,103,9,10,1,10,0,0,11,0,2,4,6,8,10,12,14,16,18,20,0,2,1,0,1,3,1,
0,13,15,108,0,25,1,0,0,0,2,34,1,0,0,0,4,36,1,0,0,0,6,49,1,0,0,0,8,64,1,0,
0,0,10,73,1,0,0,0,12,75,1,0,0,0,14,89,1,0,0,0,16,92,1,0,0,0,18,94,1,0,0,
0,20,96,1,0,0,0,22,24,3,2,1,0,23,22,1,0,0,0,24,27,1,0,0,0,25,23,1,0,0,0,
25,26,1,0,0,0,26,28,1,0,0,0,27,25,1,0,0,0,28,29,5,0,0,1,29,1,1,0,0,0,30,
35,3,4,2,0,31,35,3,6,3,0,32,35,3,12,6,0,33,35,5,5,0,0,34,30,1,0,0,0,34,31,
1,0,0,0,34,32,1,0,0,0,34,33,1,0,0,0,35,3,1,0,0,0,36,47,3,20,10,0,37,39,5,
10,0,0,38,40,3,10,5,0,39,38,1,0,0,0,39,40,1,0,0,0,40,42,1,0,0,0,41,43,3,
12,6,0,42,41,1,0,0,0,42,43,1,0,0,0,43,45,1,0,0,0,44,46,3,8,4,0,45,44,1,0,
0,0,45,46,1,0,0,0,46,48,1,0,0,0,47,37,1,0,0,0,47,48,1,0,0,0,48,5,1,0,0,0,
49,53,3,20,10,0,50,51,3,18,9,0,51,52,3,20,10,0,52,54,1,0,0,0,53,50,1,0,0,
0,54,55,1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,59,1,0,0,0,57,58,5,10,0,0,
58,60,3,10,5,0,59,57,1,0,0,0,59,60,1,0,0,0,60,62,1,0,0,0,61,63,3,12,6,0,
62,61,1,0,0,0,62,63,1,0,0,0,63,7,1,0,0,0,64,68,5,8,0,0,65,67,3,2,1,0,66,
65,1,0,0,0,67,70,1,0,0,0,68,66,1,0,0,0,68,69,1,0,0,0,69,71,1,0,0,0,70,68,
1,0,0,0,71,72,5,9,0,0,72,9,1,0,0,0,73,74,3,20,10,0,74,11,1,0,0,0,75,76,5,
6,0,0,76,81,3,14,7,0,77,78,5,11,0,0,78,80,3,14,7,0,79,77,1,0,0,0,80,83,1,
0,0,0,81,79,1,0,0,0,81,82,1,0,0,0,82,85,1,0,0,0,83,81,1,0,0,0,84,86,5,11,
0,0,85,84,1,0,0,0,85,86,1,0,0,0,86,87,1,0,0,0,87,88,5,7,0,0,88,13,1,0,0,
0,89,90,5,10,0,0,90,91,3,16,8,0,91,15,1,0,0,0,92,93,7,0,0,0,93,17,1,0,0,
0,94,95,7,1,0,0,95,19,1,0,0,0,96,101,5,4,0,0,97,98,5,12,0,0,98,100,5,4,0,
0,99,97,1,0,0,0,100,103,1,0,0,0,101,99,1,0,0,0,101,102,1,0,0,0,102,21,1,
0,0,0,103,101,1,0,0,0,13,25,34,39,42,45,47,55,59,62,68,81,85,101];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class D2Parser extends antlr4.Parser {

    static grammarFileName = "D2.g4";
    static literalNames = [ null, null, null, null, null, null, "'['", "']'", 
                            "'{'", "'}'", "':'", "','", "'.'", "'->'", "'<-'", 
                            "'--'" ];
    static symbolicNames = [ null, "BOOLEAN", "NUMBER", "STRING", "IDENTIFIER", 
                             "COMMENT", "LBRACK", "RBRACK", "LBRACE", "RBRACE", 
                             "COLON", "COMMA", "DOT", "ARROW", "LARROW", 
                             "DASH", "WS" ];
    static ruleNames = [ "diagram", "statement", "nodeDeclaration", "edgeDeclaration", 
                         "block", "label", "attributeBlock", "attributeEntry", 
                         "expression", "edgeOp", "name" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = D2Parser.ruleNames;
        this.literalNames = D2Parser.literalNames;
        this.symbolicNames = D2Parser.symbolicNames;
    }



	diagram() {
	    let localctx = new DiagramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, D2Parser.RULE_diagram);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 112) !== 0)) {
	            this.state = 22;
	            this.statement();
	            this.state = 27;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 28;
	        this.match(D2Parser.EOF);
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, D2Parser.RULE_statement);
	    try {
	        this.state = 34;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 30;
	            this.nodeDeclaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 31;
	            this.edgeDeclaration();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 32;
	            this.attributeBlock();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 33;
	            this.match(D2Parser.COMMENT);
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



	nodeDeclaration() {
	    let localctx = new NodeDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, D2Parser.RULE_nodeDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.name();
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===10) {
	            this.state = 37;
	            this.match(D2Parser.COLON);
	            this.state = 39;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	            if(la_===1) {
	                this.state = 38;
	                this.label();

	            }
	            this.state = 42;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	            if(la_===1) {
	                this.state = 41;
	                this.attributeBlock();

	            }
	            this.state = 45;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===8) {
	                this.state = 44;
	                this.block();
	            }

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



	edgeDeclaration() {
	    let localctx = new EdgeDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, D2Parser.RULE_edgeDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.name();
	        this.state = 53; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 50;
	            this.edgeOp();
	            this.state = 51;
	            this.name();
	            this.state = 55; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 57344) !== 0));
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===10) {
	            this.state = 57;
	            this.match(D2Parser.COLON);
	            this.state = 58;
	            this.label();
	        }

	        this.state = 62;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        if(la_===1) {
	            this.state = 61;
	            this.attributeBlock();

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



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, D2Parser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(D2Parser.LBRACE);
	        this.state = 68;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 112) !== 0)) {
	            this.state = 65;
	            this.statement();
	            this.state = 70;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 71;
	        this.match(D2Parser.RBRACE);
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



	label() {
	    let localctx = new LabelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, D2Parser.RULE_label);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.name();
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



	attributeBlock() {
	    let localctx = new AttributeBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, D2Parser.RULE_attributeBlock);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this.match(D2Parser.LBRACK);
	        this.state = 76;
	        this.attributeEntry();
	        this.state = 81;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 77;
	                this.match(D2Parser.COMMA);
	                this.state = 78;
	                this.attributeEntry(); 
	            }
	            this.state = 83;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	        }

	        this.state = 85;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 84;
	            this.match(D2Parser.COMMA);
	        }

	        this.state = 87;
	        this.match(D2Parser.RBRACK);
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



	attributeEntry() {
	    let localctx = new AttributeEntryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, D2Parser.RULE_attributeEntry);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.match(D2Parser.COLON);
	        this.state = 90;
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
	    this.enterRule(localctx, 16, D2Parser.RULE_expression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 14) !== 0))) {
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



	edgeOp() {
	    let localctx = new EdgeOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, D2Parser.RULE_edgeOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 57344) !== 0))) {
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



	name() {
	    let localctx = new NameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, D2Parser.RULE_name);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.match(D2Parser.IDENTIFIER);
	        this.state = 101;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===12) {
	            this.state = 97;
	            this.match(D2Parser.DOT);
	            this.state = 98;
	            this.match(D2Parser.IDENTIFIER);
	            this.state = 103;
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

D2Parser.EOF = antlr4.Token.EOF;
D2Parser.BOOLEAN = 1;
D2Parser.NUMBER = 2;
D2Parser.STRING = 3;
D2Parser.IDENTIFIER = 4;
D2Parser.COMMENT = 5;
D2Parser.LBRACK = 6;
D2Parser.RBRACK = 7;
D2Parser.LBRACE = 8;
D2Parser.RBRACE = 9;
D2Parser.COLON = 10;
D2Parser.COMMA = 11;
D2Parser.DOT = 12;
D2Parser.ARROW = 13;
D2Parser.LARROW = 14;
D2Parser.DASH = 15;
D2Parser.WS = 16;

D2Parser.RULE_diagram = 0;
D2Parser.RULE_statement = 1;
D2Parser.RULE_nodeDeclaration = 2;
D2Parser.RULE_edgeDeclaration = 3;
D2Parser.RULE_block = 4;
D2Parser.RULE_label = 5;
D2Parser.RULE_attributeBlock = 6;
D2Parser.RULE_attributeEntry = 7;
D2Parser.RULE_expression = 8;
D2Parser.RULE_edgeOp = 9;
D2Parser.RULE_name = 10;

class DiagramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = D2Parser.RULE_diagram;
    }

	EOF() {
	    return this.getToken(D2Parser.EOF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof D2Listener ) {
	        listener.enterDiagram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof D2Listener ) {
	        listener.exitDiagram(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = D2Parser.RULE_statement;
    }

	nodeDeclaration() {
	    return this.getTypedRuleContext(NodeDeclarationContext,0);
	};

	edgeDeclaration() {
	    return this.getTypedRuleContext(EdgeDeclarationContext,0);
	};

	attributeBlock() {
	    return this.getTypedRuleContext(AttributeBlockContext,0);
	};

	COMMENT() {
	    return this.getToken(D2Parser.COMMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof D2Listener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof D2Listener ) {
	        listener.exitStatement(this);
		}
	}


}



class NodeDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = D2Parser.RULE_nodeDeclaration;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	COLON() {
	    return this.getToken(D2Parser.COLON, 0);
	};

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	attributeBlock() {
	    return this.getTypedRuleContext(AttributeBlockContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof D2Listener ) {
	        listener.enterNodeDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof D2Listener ) {
	        listener.exitNodeDeclaration(this);
		}
	}


}



class EdgeDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = D2Parser.RULE_edgeDeclaration;
    }

	name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NameContext);
	    } else {
	        return this.getTypedRuleContext(NameContext,i);
	    }
	};

	edgeOp = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EdgeOpContext);
	    } else {
	        return this.getTypedRuleContext(EdgeOpContext,i);
	    }
	};

	COLON() {
	    return this.getToken(D2Parser.COLON, 0);
	};

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	attributeBlock() {
	    return this.getTypedRuleContext(AttributeBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof D2Listener ) {
	        listener.enterEdgeDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof D2Listener ) {
	        listener.exitEdgeDeclaration(this);
		}
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = D2Parser.RULE_block;
    }

	LBRACE() {
	    return this.getToken(D2Parser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(D2Parser.RBRACE, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof D2Listener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof D2Listener ) {
	        listener.exitBlock(this);
		}
	}


}



class LabelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = D2Parser.RULE_label;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof D2Listener ) {
	        listener.enterLabel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof D2Listener ) {
	        listener.exitLabel(this);
		}
	}


}



class AttributeBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = D2Parser.RULE_attributeBlock;
    }

	LBRACK() {
	    return this.getToken(D2Parser.LBRACK, 0);
	};

	attributeEntry = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AttributeEntryContext);
	    } else {
	        return this.getTypedRuleContext(AttributeEntryContext,i);
	    }
	};

	RBRACK() {
	    return this.getToken(D2Parser.RBRACK, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(D2Parser.COMMA);
	    } else {
	        return this.getToken(D2Parser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof D2Listener ) {
	        listener.enterAttributeBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof D2Listener ) {
	        listener.exitAttributeBlock(this);
		}
	}


}



class AttributeEntryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = D2Parser.RULE_attributeEntry;
    }

	COLON() {
	    return this.getToken(D2Parser.COLON, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof D2Listener ) {
	        listener.enterAttributeEntry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof D2Listener ) {
	        listener.exitAttributeEntry(this);
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
        this.ruleIndex = D2Parser.RULE_expression;
    }

	STRING() {
	    return this.getToken(D2Parser.STRING, 0);
	};

	NUMBER() {
	    return this.getToken(D2Parser.NUMBER, 0);
	};

	BOOLEAN() {
	    return this.getToken(D2Parser.BOOLEAN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof D2Listener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof D2Listener ) {
	        listener.exitExpression(this);
		}
	}


}



class EdgeOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = D2Parser.RULE_edgeOp;
    }

	ARROW() {
	    return this.getToken(D2Parser.ARROW, 0);
	};

	DASH() {
	    return this.getToken(D2Parser.DASH, 0);
	};

	LARROW() {
	    return this.getToken(D2Parser.LARROW, 0);
	};

	enterRule(listener) {
	    if(listener instanceof D2Listener ) {
	        listener.enterEdgeOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof D2Listener ) {
	        listener.exitEdgeOp(this);
		}
	}


}



class NameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = D2Parser.RULE_name;
    }

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(D2Parser.IDENTIFIER);
	    } else {
	        return this.getToken(D2Parser.IDENTIFIER, i);
	    }
	};


	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(D2Parser.DOT);
	    } else {
	        return this.getToken(D2Parser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof D2Listener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof D2Listener ) {
	        listener.exitName(this);
		}
	}


}




D2Parser.DiagramContext = DiagramContext; 
D2Parser.StatementContext = StatementContext; 
D2Parser.NodeDeclarationContext = NodeDeclarationContext; 
D2Parser.EdgeDeclarationContext = EdgeDeclarationContext; 
D2Parser.BlockContext = BlockContext; 
D2Parser.LabelContext = LabelContext; 
D2Parser.AttributeBlockContext = AttributeBlockContext; 
D2Parser.AttributeEntryContext = AttributeEntryContext; 
D2Parser.ExpressionContext = ExpressionContext; 
D2Parser.EdgeOpContext = EdgeOpContext; 
D2Parser.NameContext = NameContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
