// Generated from ./quake3/camera/Q3CameraParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import Q3CameraParserListener from './Q3CameraParserListener.js';
const serializedATN = [4,1,12,57,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,5,0,18,8,0,10,0,12,0,21,9,0,1,0,1,0,1,1,1,1,
1,1,1,1,1,1,1,2,5,2,31,8,2,10,2,12,2,34,9,2,1,3,1,3,1,3,3,3,39,8,3,1,4,1,
4,1,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,0,0,8,0,2,
4,6,8,10,12,14,0,2,1,0,1,2,2,0,1,1,3,5,52,0,19,1,0,0,0,2,24,1,0,0,0,4,32,
1,0,0,0,6,38,1,0,0,0,8,40,1,0,0,0,10,43,1,0,0,0,12,48,1,0,0,0,14,54,1,0,
0,0,16,18,3,2,1,0,17,16,1,0,0,0,18,21,1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,
0,20,22,1,0,0,0,21,19,1,0,0,0,22,23,5,0,0,1,23,1,1,0,0,0,24,25,5,1,0,0,25,
26,5,6,0,0,26,27,3,4,2,0,27,28,5,7,0,0,28,3,1,0,0,0,29,31,3,6,3,0,30,29,
1,0,0,0,31,34,1,0,0,0,32,30,1,0,0,0,32,33,1,0,0,0,33,5,1,0,0,0,34,32,1,0,
0,0,35,39,3,8,4,0,36,39,3,10,5,0,37,39,3,12,6,0,38,35,1,0,0,0,38,36,1,0,
0,0,38,37,1,0,0,0,39,7,1,0,0,0,40,41,5,2,0,0,41,42,3,14,7,0,42,9,1,0,0,0,
43,44,7,0,0,0,44,45,5,6,0,0,45,46,3,4,2,0,46,47,5,7,0,0,47,11,1,0,0,0,48,
49,5,8,0,0,49,50,5,3,0,0,50,51,5,3,0,0,51,52,5,3,0,0,52,53,5,9,0,0,53,13,
1,0,0,0,54,55,7,1,0,0,55,15,1,0,0,0,3,19,32,38];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class Q3CameraParser extends antlr4.Parser {

    static grammarFileName = "Q3CameraParser.g4";
    static literalNames = [ null, null, null, null, null, null, "'{'", "'}'", 
                            "'('", "')'" ];
    static symbolicNames = [ null, "BLOCK_TYPE", "PROPERTY_KEYWORD", "NUMBER", 
                             "STRING_LITERAL", "IDENTIFIER", "LBRACE", "RBRACE", 
                             "LPAREN", "RPAREN", "COMMENT", "BLOCK_COMMENT", 
                             "WS" ];
    static ruleNames = [ "cameraFile", "cameraBlock", "blockBody", "elementStatement", 
                         "propertyStatement", "nestedBlock", "vectorGroup", 
                         "value" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = Q3CameraParser.ruleNames;
        this.literalNames = Q3CameraParser.literalNames;
        this.symbolicNames = Q3CameraParser.symbolicNames;
    }



	cameraFile() {
	    let localctx = new CameraFileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, Q3CameraParser.RULE_cameraFile);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 16;
	            this.cameraBlock();
	            this.state = 21;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 22;
	        this.match(Q3CameraParser.EOF);
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



	cameraBlock() {
	    let localctx = new CameraBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, Q3CameraParser.RULE_cameraBlock);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.match(Q3CameraParser.BLOCK_TYPE);
	        this.state = 25;
	        this.match(Q3CameraParser.LBRACE);
	        this.state = 26;
	        this.blockBody();
	        this.state = 27;
	        this.match(Q3CameraParser.RBRACE);
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



	blockBody() {
	    let localctx = new BlockBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, Q3CameraParser.RULE_blockBody);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 262) !== 0)) {
	            this.state = 29;
	            this.elementStatement();
	            this.state = 34;
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



	elementStatement() {
	    let localctx = new ElementStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, Q3CameraParser.RULE_elementStatement);
	    try {
	        this.state = 38;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 35;
	            this.propertyStatement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 36;
	            this.nestedBlock();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 37;
	            this.vectorGroup();
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



	propertyStatement() {
	    let localctx = new PropertyStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, Q3CameraParser.RULE_propertyStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.match(Q3CameraParser.PROPERTY_KEYWORD);
	        this.state = 41;
	        this.value();
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



	nestedBlock() {
	    let localctx = new NestedBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, Q3CameraParser.RULE_nestedBlock);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        _la = this._input.LA(1);
	        if(!(_la===1 || _la===2)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 44;
	        this.match(Q3CameraParser.LBRACE);
	        this.state = 45;
	        this.blockBody();
	        this.state = 46;
	        this.match(Q3CameraParser.RBRACE);
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



	vectorGroup() {
	    let localctx = new VectorGroupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, Q3CameraParser.RULE_vectorGroup);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(Q3CameraParser.LPAREN);
	        this.state = 49;
	        this.match(Q3CameraParser.NUMBER);
	        this.state = 50;
	        this.match(Q3CameraParser.NUMBER);
	        this.state = 51;
	        this.match(Q3CameraParser.NUMBER);
	        this.state = 52;
	        this.match(Q3CameraParser.RPAREN);
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
	    this.enterRule(localctx, 14, Q3CameraParser.RULE_value);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 58) !== 0))) {
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

Q3CameraParser.EOF = antlr4.Token.EOF;
Q3CameraParser.BLOCK_TYPE = 1;
Q3CameraParser.PROPERTY_KEYWORD = 2;
Q3CameraParser.NUMBER = 3;
Q3CameraParser.STRING_LITERAL = 4;
Q3CameraParser.IDENTIFIER = 5;
Q3CameraParser.LBRACE = 6;
Q3CameraParser.RBRACE = 7;
Q3CameraParser.LPAREN = 8;
Q3CameraParser.RPAREN = 9;
Q3CameraParser.COMMENT = 10;
Q3CameraParser.BLOCK_COMMENT = 11;
Q3CameraParser.WS = 12;

Q3CameraParser.RULE_cameraFile = 0;
Q3CameraParser.RULE_cameraBlock = 1;
Q3CameraParser.RULE_blockBody = 2;
Q3CameraParser.RULE_elementStatement = 3;
Q3CameraParser.RULE_propertyStatement = 4;
Q3CameraParser.RULE_nestedBlock = 5;
Q3CameraParser.RULE_vectorGroup = 6;
Q3CameraParser.RULE_value = 7;

class CameraFileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3CameraParser.RULE_cameraFile;
    }

	EOF() {
	    return this.getToken(Q3CameraParser.EOF, 0);
	};

	cameraBlock = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CameraBlockContext);
	    } else {
	        return this.getTypedRuleContext(CameraBlockContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Q3CameraParserListener ) {
	        listener.enterCameraFile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3CameraParserListener ) {
	        listener.exitCameraFile(this);
		}
	}


}



class CameraBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3CameraParser.RULE_cameraBlock;
    }

	BLOCK_TYPE() {
	    return this.getToken(Q3CameraParser.BLOCK_TYPE, 0);
	};

	LBRACE() {
	    return this.getToken(Q3CameraParser.LBRACE, 0);
	};

	blockBody() {
	    return this.getTypedRuleContext(BlockBodyContext,0);
	};

	RBRACE() {
	    return this.getToken(Q3CameraParser.RBRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3CameraParserListener ) {
	        listener.enterCameraBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3CameraParserListener ) {
	        listener.exitCameraBlock(this);
		}
	}


}



class BlockBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3CameraParser.RULE_blockBody;
    }

	elementStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElementStatementContext);
	    } else {
	        return this.getTypedRuleContext(ElementStatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Q3CameraParserListener ) {
	        listener.enterBlockBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3CameraParserListener ) {
	        listener.exitBlockBody(this);
		}
	}


}



class ElementStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3CameraParser.RULE_elementStatement;
    }

	propertyStatement() {
	    return this.getTypedRuleContext(PropertyStatementContext,0);
	};

	nestedBlock() {
	    return this.getTypedRuleContext(NestedBlockContext,0);
	};

	vectorGroup() {
	    return this.getTypedRuleContext(VectorGroupContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3CameraParserListener ) {
	        listener.enterElementStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3CameraParserListener ) {
	        listener.exitElementStatement(this);
		}
	}


}



class PropertyStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3CameraParser.RULE_propertyStatement;
    }

	PROPERTY_KEYWORD() {
	    return this.getToken(Q3CameraParser.PROPERTY_KEYWORD, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3CameraParserListener ) {
	        listener.enterPropertyStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3CameraParserListener ) {
	        listener.exitPropertyStatement(this);
		}
	}


}



class NestedBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3CameraParser.RULE_nestedBlock;
    }

	LBRACE() {
	    return this.getToken(Q3CameraParser.LBRACE, 0);
	};

	blockBody() {
	    return this.getTypedRuleContext(BlockBodyContext,0);
	};

	RBRACE() {
	    return this.getToken(Q3CameraParser.RBRACE, 0);
	};

	BLOCK_TYPE() {
	    return this.getToken(Q3CameraParser.BLOCK_TYPE, 0);
	};

	PROPERTY_KEYWORD() {
	    return this.getToken(Q3CameraParser.PROPERTY_KEYWORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3CameraParserListener ) {
	        listener.enterNestedBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3CameraParserListener ) {
	        listener.exitNestedBlock(this);
		}
	}


}



class VectorGroupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3CameraParser.RULE_vectorGroup;
    }

	LPAREN() {
	    return this.getToken(Q3CameraParser.LPAREN, 0);
	};

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Q3CameraParser.NUMBER);
	    } else {
	        return this.getToken(Q3CameraParser.NUMBER, i);
	    }
	};


	RPAREN() {
	    return this.getToken(Q3CameraParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3CameraParserListener ) {
	        listener.enterVectorGroup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3CameraParserListener ) {
	        listener.exitVectorGroup(this);
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
        this.ruleIndex = Q3CameraParser.RULE_value;
    }

	NUMBER() {
	    return this.getToken(Q3CameraParser.NUMBER, 0);
	};

	STRING_LITERAL() {
	    return this.getToken(Q3CameraParser.STRING_LITERAL, 0);
	};

	IDENTIFIER() {
	    return this.getToken(Q3CameraParser.IDENTIFIER, 0);
	};

	BLOCK_TYPE() {
	    return this.getToken(Q3CameraParser.BLOCK_TYPE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3CameraParserListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3CameraParserListener ) {
	        listener.exitValue(this);
		}
	}


}




Q3CameraParser.CameraFileContext = CameraFileContext; 
Q3CameraParser.CameraBlockContext = CameraBlockContext; 
Q3CameraParser.BlockBodyContext = BlockBodyContext; 
Q3CameraParser.ElementStatementContext = ElementStatementContext; 
Q3CameraParser.PropertyStatementContext = PropertyStatementContext; 
Q3CameraParser.NestedBlockContext = NestedBlockContext; 
Q3CameraParser.VectorGroupContext = VectorGroupContext; 
Q3CameraParser.ValueContext = ValueContext; 
