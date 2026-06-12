// Generated from ./quake3/map/Q3MapParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import Q3MapParserListener from './Q3MapParserListener.js';
const serializedATN = [4,1,12,83,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,5,0,26,8,
0,10,0,12,0,29,9,0,1,0,1,0,1,1,1,1,5,1,35,8,1,10,1,12,1,38,9,1,1,1,1,1,1,
2,1,2,3,2,44,8,2,1,3,1,3,1,3,1,4,1,4,4,4,51,8,4,11,4,12,4,52,1,4,1,4,1,5,
1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,8,
1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,11,0,0,12,0,2,4,6,8,10,12,14,16,18,20,
22,0,0,74,0,27,1,0,0,0,2,32,1,0,0,0,4,43,1,0,0,0,6,45,1,0,0,0,8,48,1,0,0,
0,10,56,1,0,0,0,12,66,1,0,0,0,14,72,1,0,0,0,16,74,1,0,0,0,18,76,1,0,0,0,
20,78,1,0,0,0,22,80,1,0,0,0,24,26,3,2,1,0,25,24,1,0,0,0,26,29,1,0,0,0,27,
25,1,0,0,0,27,28,1,0,0,0,28,30,1,0,0,0,29,27,1,0,0,0,30,31,5,0,0,1,31,1,
1,0,0,0,32,36,5,5,0,0,33,35,3,4,2,0,34,33,1,0,0,0,35,38,1,0,0,0,36,34,1,
0,0,0,36,37,1,0,0,0,37,39,1,0,0,0,38,36,1,0,0,0,39,40,5,6,0,0,40,3,1,0,0,
0,41,44,3,6,3,0,42,44,3,8,4,0,43,41,1,0,0,0,43,42,1,0,0,0,44,5,1,0,0,0,45,
46,5,2,0,0,46,47,5,2,0,0,47,7,1,0,0,0,48,50,5,5,0,0,49,51,3,10,5,0,50,49,
1,0,0,0,51,52,1,0,0,0,52,50,1,0,0,0,52,53,1,0,0,0,53,54,1,0,0,0,54,55,5,
6,0,0,55,9,1,0,0,0,56,57,3,12,6,0,57,58,3,12,6,0,58,59,3,12,6,0,59,60,5,
3,0,0,60,61,3,14,7,0,61,62,3,16,8,0,62,63,3,18,9,0,63,64,3,20,10,0,64,65,
3,22,11,0,65,11,1,0,0,0,66,67,5,7,0,0,67,68,5,1,0,0,68,69,5,1,0,0,69,70,
5,1,0,0,70,71,5,8,0,0,71,13,1,0,0,0,72,73,5,1,0,0,73,15,1,0,0,0,74,75,5,
1,0,0,75,17,1,0,0,0,76,77,5,1,0,0,77,19,1,0,0,0,78,79,5,1,0,0,79,21,1,0,
0,0,80,81,5,1,0,0,81,23,1,0,0,0,4,27,36,43,52];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class Q3MapParser extends antlr4.Parser {

    static grammarFileName = "Q3MapParser.g4";
    static literalNames = [ null, null, null, null, null, "'{'", "'}'", 
                            "'('", "')'" ];
    static symbolicNames = [ null, "NUMBER", "STRING_LITERAL", "TEXTURE_NAME", 
                             "IDENTIFIER", "LBRACE", "RBRACE", "LPAREN", 
                             "RPAREN", "COMMENT", "LINE_COMMENT_SL", "LINE_COMMENT_BS", 
                             "WS" ];
    static ruleNames = [ "mapFile", "entityBlock", "entityContent", "epair", 
                         "brushBlock", "faceDefinition", "planeDef", "texShiftX", 
                         "texShiftY", "texRot", "texScaleX", "texScaleY" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = Q3MapParser.ruleNames;
        this.literalNames = Q3MapParser.literalNames;
        this.symbolicNames = Q3MapParser.symbolicNames;
    }



	mapFile() {
	    let localctx = new MapFileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, Q3MapParser.RULE_mapFile);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5) {
	            this.state = 24;
	            this.entityBlock();
	            this.state = 29;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 30;
	        this.match(Q3MapParser.EOF);
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



	entityBlock() {
	    let localctx = new EntityBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, Q3MapParser.RULE_entityBlock);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.match(Q3MapParser.LBRACE);
	        this.state = 36;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2 || _la===5) {
	            this.state = 33;
	            this.entityContent();
	            this.state = 38;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 39;
	        this.match(Q3MapParser.RBRACE);
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



	entityContent() {
	    let localctx = new EntityContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, Q3MapParser.RULE_entityContent);
	    try {
	        this.state = 43;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 41;
	            this.epair();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 42;
	            this.brushBlock();
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



	epair() {
	    let localctx = new EpairContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, Q3MapParser.RULE_epair);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        localctx.key = this.match(Q3MapParser.STRING_LITERAL);
	        this.state = 46;
	        localctx.value = this.match(Q3MapParser.STRING_LITERAL);
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



	brushBlock() {
	    let localctx = new BrushBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, Q3MapParser.RULE_brushBlock);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(Q3MapParser.LBRACE);
	        this.state = 50; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 49;
	            this.faceDefinition();
	            this.state = 52; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===7);
	        this.state = 54;
	        this.match(Q3MapParser.RBRACE);
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



	faceDefinition() {
	    let localctx = new FaceDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, Q3MapParser.RULE_faceDefinition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.planeDef();
	        this.state = 57;
	        this.planeDef();
	        this.state = 58;
	        this.planeDef();
	        this.state = 59;
	        this.match(Q3MapParser.TEXTURE_NAME);
	        this.state = 60;
	        this.texShiftX();
	        this.state = 61;
	        this.texShiftY();
	        this.state = 62;
	        this.texRot();
	        this.state = 63;
	        this.texScaleX();
	        this.state = 64;
	        this.texScaleY();
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



	planeDef() {
	    let localctx = new PlaneDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, Q3MapParser.RULE_planeDef);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.match(Q3MapParser.LPAREN);
	        this.state = 67;
	        this.match(Q3MapParser.NUMBER);
	        this.state = 68;
	        this.match(Q3MapParser.NUMBER);
	        this.state = 69;
	        this.match(Q3MapParser.NUMBER);
	        this.state = 70;
	        this.match(Q3MapParser.RPAREN);
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



	texShiftX() {
	    let localctx = new TexShiftXContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, Q3MapParser.RULE_texShiftX);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.match(Q3MapParser.NUMBER);
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



	texShiftY() {
	    let localctx = new TexShiftYContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, Q3MapParser.RULE_texShiftY);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.match(Q3MapParser.NUMBER);
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



	texRot() {
	    let localctx = new TexRotContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, Q3MapParser.RULE_texRot);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.match(Q3MapParser.NUMBER);
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



	texScaleX() {
	    let localctx = new TexScaleXContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, Q3MapParser.RULE_texScaleX);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.match(Q3MapParser.NUMBER);
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



	texScaleY() {
	    let localctx = new TexScaleYContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, Q3MapParser.RULE_texScaleY);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.match(Q3MapParser.NUMBER);
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

Q3MapParser.EOF = antlr4.Token.EOF;
Q3MapParser.NUMBER = 1;
Q3MapParser.STRING_LITERAL = 2;
Q3MapParser.TEXTURE_NAME = 3;
Q3MapParser.IDENTIFIER = 4;
Q3MapParser.LBRACE = 5;
Q3MapParser.RBRACE = 6;
Q3MapParser.LPAREN = 7;
Q3MapParser.RPAREN = 8;
Q3MapParser.COMMENT = 9;
Q3MapParser.LINE_COMMENT_SL = 10;
Q3MapParser.LINE_COMMENT_BS = 11;
Q3MapParser.WS = 12;

Q3MapParser.RULE_mapFile = 0;
Q3MapParser.RULE_entityBlock = 1;
Q3MapParser.RULE_entityContent = 2;
Q3MapParser.RULE_epair = 3;
Q3MapParser.RULE_brushBlock = 4;
Q3MapParser.RULE_faceDefinition = 5;
Q3MapParser.RULE_planeDef = 6;
Q3MapParser.RULE_texShiftX = 7;
Q3MapParser.RULE_texShiftY = 8;
Q3MapParser.RULE_texRot = 9;
Q3MapParser.RULE_texScaleX = 10;
Q3MapParser.RULE_texScaleY = 11;

class MapFileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3MapParser.RULE_mapFile;
    }

	EOF() {
	    return this.getToken(Q3MapParser.EOF, 0);
	};

	entityBlock = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EntityBlockContext);
	    } else {
	        return this.getTypedRuleContext(EntityBlockContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Q3MapParserListener ) {
	        listener.enterMapFile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3MapParserListener ) {
	        listener.exitMapFile(this);
		}
	}


}



class EntityBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3MapParser.RULE_entityBlock;
    }

	LBRACE() {
	    return this.getToken(Q3MapParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(Q3MapParser.RBRACE, 0);
	};

	entityContent = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EntityContentContext);
	    } else {
	        return this.getTypedRuleContext(EntityContentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Q3MapParserListener ) {
	        listener.enterEntityBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3MapParserListener ) {
	        listener.exitEntityBlock(this);
		}
	}


}



class EntityContentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3MapParser.RULE_entityContent;
    }

	epair() {
	    return this.getTypedRuleContext(EpairContext,0);
	};

	brushBlock() {
	    return this.getTypedRuleContext(BrushBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3MapParserListener ) {
	        listener.enterEntityContent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3MapParserListener ) {
	        listener.exitEntityContent(this);
		}
	}


}



class EpairContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3MapParser.RULE_epair;
        this.key = null;
        this.value = null;
    }

	STRING_LITERAL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Q3MapParser.STRING_LITERAL);
	    } else {
	        return this.getToken(Q3MapParser.STRING_LITERAL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof Q3MapParserListener ) {
	        listener.enterEpair(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3MapParserListener ) {
	        listener.exitEpair(this);
		}
	}


}



class BrushBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3MapParser.RULE_brushBlock;
    }

	LBRACE() {
	    return this.getToken(Q3MapParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(Q3MapParser.RBRACE, 0);
	};

	faceDefinition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FaceDefinitionContext);
	    } else {
	        return this.getTypedRuleContext(FaceDefinitionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Q3MapParserListener ) {
	        listener.enterBrushBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3MapParserListener ) {
	        listener.exitBrushBlock(this);
		}
	}


}



class FaceDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3MapParser.RULE_faceDefinition;
    }

	planeDef = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PlaneDefContext);
	    } else {
	        return this.getTypedRuleContext(PlaneDefContext,i);
	    }
	};

	TEXTURE_NAME() {
	    return this.getToken(Q3MapParser.TEXTURE_NAME, 0);
	};

	texShiftX() {
	    return this.getTypedRuleContext(TexShiftXContext,0);
	};

	texShiftY() {
	    return this.getTypedRuleContext(TexShiftYContext,0);
	};

	texRot() {
	    return this.getTypedRuleContext(TexRotContext,0);
	};

	texScaleX() {
	    return this.getTypedRuleContext(TexScaleXContext,0);
	};

	texScaleY() {
	    return this.getTypedRuleContext(TexScaleYContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3MapParserListener ) {
	        listener.enterFaceDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3MapParserListener ) {
	        listener.exitFaceDefinition(this);
		}
	}


}



class PlaneDefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3MapParser.RULE_planeDef;
    }

	LPAREN() {
	    return this.getToken(Q3MapParser.LPAREN, 0);
	};

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Q3MapParser.NUMBER);
	    } else {
	        return this.getToken(Q3MapParser.NUMBER, i);
	    }
	};


	RPAREN() {
	    return this.getToken(Q3MapParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3MapParserListener ) {
	        listener.enterPlaneDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3MapParserListener ) {
	        listener.exitPlaneDef(this);
		}
	}


}



class TexShiftXContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3MapParser.RULE_texShiftX;
    }

	NUMBER() {
	    return this.getToken(Q3MapParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3MapParserListener ) {
	        listener.enterTexShiftX(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3MapParserListener ) {
	        listener.exitTexShiftX(this);
		}
	}


}



class TexShiftYContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3MapParser.RULE_texShiftY;
    }

	NUMBER() {
	    return this.getToken(Q3MapParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3MapParserListener ) {
	        listener.enterTexShiftY(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3MapParserListener ) {
	        listener.exitTexShiftY(this);
		}
	}


}



class TexRotContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3MapParser.RULE_texRot;
    }

	NUMBER() {
	    return this.getToken(Q3MapParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3MapParserListener ) {
	        listener.enterTexRot(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3MapParserListener ) {
	        listener.exitTexRot(this);
		}
	}


}



class TexScaleXContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3MapParser.RULE_texScaleX;
    }

	NUMBER() {
	    return this.getToken(Q3MapParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3MapParserListener ) {
	        listener.enterTexScaleX(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3MapParserListener ) {
	        listener.exitTexScaleX(this);
		}
	}


}



class TexScaleYContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3MapParser.RULE_texScaleY;
    }

	NUMBER() {
	    return this.getToken(Q3MapParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3MapParserListener ) {
	        listener.enterTexScaleY(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3MapParserListener ) {
	        listener.exitTexScaleY(this);
		}
	}


}




Q3MapParser.MapFileContext = MapFileContext; 
Q3MapParser.EntityBlockContext = EntityBlockContext; 
Q3MapParser.EntityContentContext = EntityContentContext; 
Q3MapParser.EpairContext = EpairContext; 
Q3MapParser.BrushBlockContext = BrushBlockContext; 
Q3MapParser.FaceDefinitionContext = FaceDefinitionContext; 
Q3MapParser.PlaneDefContext = PlaneDefContext; 
Q3MapParser.TexShiftXContext = TexShiftXContext; 
Q3MapParser.TexShiftYContext = TexShiftYContext; 
Q3MapParser.TexRotContext = TexRotContext; 
Q3MapParser.TexScaleXContext = TexScaleXContext; 
Q3MapParser.TexScaleYContext = TexScaleYContext; 
