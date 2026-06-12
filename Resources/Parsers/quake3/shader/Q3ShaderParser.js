// Generated from ./quake3/shader/Q3ShaderParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import Q3ShaderParserListener from './Q3ShaderParserListener.js';
const serializedATN = [4,1,34,201,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,1,0,4,0,50,8,0,11,0,12,0,51,1,0,1,
0,1,0,3,0,57,8,0,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,3,1,3,5,3,68,8,3,10,3,12,
3,71,9,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,81,8,4,1,5,1,5,5,5,85,8,5,10,
5,12,5,88,9,5,1,6,1,6,1,6,1,6,3,6,94,8,6,1,7,1,7,1,7,5,7,99,8,7,10,7,12,
7,102,9,7,1,8,1,8,5,8,106,8,8,10,8,12,8,109,9,8,1,9,1,9,5,9,113,8,9,10,9,
12,9,116,9,9,1,10,1,10,3,10,120,8,10,1,11,1,11,1,11,1,11,1,11,5,11,127,8,
11,10,11,12,11,130,9,11,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,14,1,14,1,14,
1,14,1,14,3,14,144,8,14,1,15,1,15,1,15,5,15,149,8,15,10,15,12,15,152,9,15,
1,16,1,16,1,16,1,16,1,16,3,16,159,8,16,1,17,1,17,1,17,1,17,1,17,3,17,166,
8,17,1,18,1,18,1,18,1,18,1,19,1,19,5,19,174,8,19,10,19,12,19,177,9,19,1,
20,1,20,5,20,181,8,20,10,20,12,20,184,9,20,1,20,3,20,187,8,20,1,21,1,21,
1,21,5,21,192,8,21,10,21,12,21,195,9,21,1,22,1,22,1,23,1,23,1,23,0,0,24,
0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,0,6,3,
0,1,1,18,18,23,25,2,0,18,18,23,24,3,0,17,17,21,21,23,23,1,0,22,25,5,0,1,
1,10,14,16,18,23,25,28,29,2,0,30,30,33,33,205,0,56,1,0,0,0,2,58,1,0,0,0,
4,63,1,0,0,0,6,69,1,0,0,0,8,80,1,0,0,0,10,82,1,0,0,0,12,93,1,0,0,0,14,95,
1,0,0,0,16,103,1,0,0,0,18,110,1,0,0,0,20,117,1,0,0,0,22,121,1,0,0,0,24,131,
1,0,0,0,26,135,1,0,0,0,28,143,1,0,0,0,30,145,1,0,0,0,32,158,1,0,0,0,34,165,
1,0,0,0,36,167,1,0,0,0,38,175,1,0,0,0,40,186,1,0,0,0,42,188,1,0,0,0,44,196,
1,0,0,0,46,198,1,0,0,0,48,50,3,2,1,0,49,48,1,0,0,0,50,51,1,0,0,0,51,49,1,
0,0,0,51,52,1,0,0,0,52,53,1,0,0,0,53,54,5,0,0,1,54,57,1,0,0,0,55,57,5,0,
0,1,56,49,1,0,0,0,56,55,1,0,0,0,57,1,1,0,0,0,58,59,3,4,2,0,59,60,5,26,0,
0,60,61,3,6,3,0,61,62,5,27,0,0,62,3,1,0,0,0,63,64,7,0,0,0,64,5,1,0,0,0,65,
68,3,8,4,0,66,68,3,46,23,0,67,65,1,0,0,0,67,66,1,0,0,0,68,71,1,0,0,0,69,
67,1,0,0,0,69,70,1,0,0,0,70,7,1,0,0,0,71,69,1,0,0,0,72,81,3,10,5,0,73,81,
3,12,6,0,74,81,3,14,7,0,75,81,3,22,11,0,76,81,3,20,10,0,77,81,3,36,18,0,
78,81,3,18,9,0,79,81,3,16,8,0,80,72,1,0,0,0,80,73,1,0,0,0,80,74,1,0,0,0,
80,75,1,0,0,0,80,76,1,0,0,0,80,77,1,0,0,0,80,78,1,0,0,0,80,79,1,0,0,0,81,
9,1,0,0,0,82,86,5,1,0,0,83,85,3,44,22,0,84,83,1,0,0,0,85,88,1,0,0,0,86,84,
1,0,0,0,86,87,1,0,0,0,87,11,1,0,0,0,88,86,1,0,0,0,89,90,5,2,0,0,90,94,5,
16,0,0,91,92,5,2,0,0,92,94,5,23,0,0,93,89,1,0,0,0,93,91,1,0,0,0,94,13,1,
0,0,0,95,96,5,3,0,0,96,100,5,10,0,0,97,99,3,44,22,0,98,97,1,0,0,0,99,102,
1,0,0,0,100,98,1,0,0,0,100,101,1,0,0,0,101,15,1,0,0,0,102,100,1,0,0,0,103,
107,5,23,0,0,104,106,3,44,22,0,105,104,1,0,0,0,106,109,1,0,0,0,107,105,1,
0,0,0,107,108,1,0,0,0,108,17,1,0,0,0,109,107,1,0,0,0,110,114,5,15,0,0,111,
113,3,44,22,0,112,111,1,0,0,0,113,116,1,0,0,0,114,112,1,0,0,0,114,115,1,
0,0,0,115,19,1,0,0,0,116,114,1,0,0,0,117,119,5,5,0,0,118,120,7,1,0,0,119,
118,1,0,0,0,119,120,1,0,0,0,120,21,1,0,0,0,121,122,5,6,0,0,122,123,3,28,
14,0,123,128,3,34,17,0,124,127,3,24,12,0,125,127,3,26,13,0,126,124,1,0,0,
0,126,125,1,0,0,0,127,130,1,0,0,0,128,126,1,0,0,0,128,129,1,0,0,0,129,23,
1,0,0,0,130,128,1,0,0,0,131,132,5,7,0,0,132,133,3,28,14,0,133,134,3,34,17,
0,134,25,1,0,0,0,135,136,5,8,0,0,136,137,3,34,17,0,137,27,1,0,0,0,138,139,
5,28,0,0,139,140,3,30,15,0,140,141,5,29,0,0,141,144,1,0,0,0,142,144,3,44,
22,0,143,138,1,0,0,0,143,142,1,0,0,0,144,29,1,0,0,0,145,150,3,32,16,0,146,
147,5,19,0,0,147,149,3,32,16,0,148,146,1,0,0,0,149,152,1,0,0,0,150,148,1,
0,0,0,150,151,1,0,0,0,151,31,1,0,0,0,152,150,1,0,0,0,153,154,7,2,0,0,154,
155,5,20,0,0,155,159,7,3,0,0,156,159,5,17,0,0,157,159,5,23,0,0,158,153,1,
0,0,0,158,156,1,0,0,0,158,157,1,0,0,0,159,33,1,0,0,0,160,161,5,26,0,0,161,
162,3,6,3,0,162,163,5,27,0,0,163,166,1,0,0,0,164,166,3,8,4,0,165,160,1,0,
0,0,165,164,1,0,0,0,166,35,1,0,0,0,167,168,5,26,0,0,168,169,3,38,19,0,169,
170,5,27,0,0,170,37,1,0,0,0,171,174,3,40,20,0,172,174,3,46,23,0,173,171,
1,0,0,0,173,172,1,0,0,0,174,177,1,0,0,0,175,173,1,0,0,0,175,176,1,0,0,0,
176,39,1,0,0,0,177,175,1,0,0,0,178,182,5,9,0,0,179,181,3,44,22,0,180,179,
1,0,0,0,181,184,1,0,0,0,182,180,1,0,0,0,182,183,1,0,0,0,183,187,1,0,0,0,
184,182,1,0,0,0,185,187,3,42,21,0,186,178,1,0,0,0,186,185,1,0,0,0,187,41,
1,0,0,0,188,189,5,4,0,0,189,193,5,11,0,0,190,192,3,44,22,0,191,190,1,0,0,
0,192,195,1,0,0,0,193,191,1,0,0,0,193,194,1,0,0,0,194,43,1,0,0,0,195,193,
1,0,0,0,196,197,7,4,0,0,197,45,1,0,0,0,198,199,7,5,0,0,199,47,1,0,0,0,22,
51,56,67,69,80,86,93,100,107,114,119,126,128,143,150,158,165,173,175,182,
186,193];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class Q3ShaderParser extends antlr4.Parser {

    static grammarFileName = "Q3ShaderParser.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, "'{'", "'}'", "'('", "')'" ];
    static symbolicNames = [ null, "GLOBAL_DIRECTIVE", "SURFACE_PARM_KEYWORD", 
                             "DEFORM_VERTEXES_KEYWORD", "TC_MOD_KEYWORD", 
                             "IMPLICIT_MAPPING_KEYWORD", "CONDITIONAL_IF", 
                             "CONDITIONAL_ELIF", "CONDITIONAL_ELSE", "STAGE_DIRECTIVE", 
                             "DEFORM_MODIFIER", "TC_MOD_MODIFIER", "WAVE_FUNCTION", 
                             "ENUM_MODIFIER", "GL_CONSTANT", "TOOL_EXTENSION", 
                             "SURFACE_PARM_VALUE", "VARIABLE", "PATH", "LOGICAL_OP", 
                             "COMP_OP", "L_VALUE", "R_VALUE", "IDENTIFIER", 
                             "NUMBER", "STRING_LITERAL", "LBRACE", "RBRACE", 
                             "LPAREN", "RPAREN", "COMMENT", "LINE_COMMENT_SL", 
                             "LINE_COMMENT_BS", "BLOCK_COMMENT", "WS" ];
    static ruleNames = [ "shaderFile", "shader", "shaderName", "blockBody", 
                         "blockStatement", "globalDirectiveStatement", "surfaceParmStatement", 
                         "deformStatement", "generalPaletteStatement", "bypassedExtensionStatement", 
                         "implicitMappingStatement", "conditionalBlock", 
                         "conditionalElif", "conditionalElse", "conditionExpression", 
                         "conditionalExpression", "expressionTerm", "executionBlock", 
                         "stageBlock", "stageBody", "stageStatement", "tcModStatement", 
                         "argument", "commentLine" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = Q3ShaderParser.ruleNames;
        this.literalNames = Q3ShaderParser.literalNames;
        this.symbolicNames = Q3ShaderParser.symbolicNames;
    }



	shaderFile() {
	    let localctx = new ShaderFileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, Q3ShaderParser.RULE_shaderFile);
	    var _la = 0;
	    try {
	        this.state = 56;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 18:
	        case 23:
	        case 24:
	        case 25:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 49; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 48;
	                this.shader();
	                this.state = 51; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 58982402) !== 0));
	            this.state = 53;
	            this.match(Q3ShaderParser.EOF);
	            break;
	        case -1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 55;
	            this.match(Q3ShaderParser.EOF);
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



	shader() {
	    let localctx = new ShaderContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, Q3ShaderParser.RULE_shader);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.shaderName();
	        this.state = 59;
	        this.match(Q3ShaderParser.LBRACE);
	        this.state = 60;
	        this.blockBody();
	        this.state = 61;
	        this.match(Q3ShaderParser.RBRACE);
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



	shaderName() {
	    let localctx = new ShaderNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, Q3ShaderParser.RULE_shaderName);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 58982402) !== 0))) {
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



	blockBody() {
	    let localctx = new BlockBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, Q3ShaderParser.RULE_blockBody);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1149272174) !== 0) || _la===33) {
	            this.state = 67;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 1:
	            case 2:
	            case 3:
	            case 5:
	            case 6:
	            case 15:
	            case 23:
	            case 26:
	                this.state = 65;
	                this.blockStatement();
	                break;
	            case 30:
	            case 33:
	                this.state = 66;
	                this.commentLine();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 71;
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



	blockStatement() {
	    let localctx = new BlockStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, Q3ShaderParser.RULE_blockStatement);
	    try {
	        this.state = 80;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 72;
	            this.globalDirectiveStatement();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 73;
	            this.surfaceParmStatement();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 74;
	            this.deformStatement();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 75;
	            this.conditionalBlock();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 76;
	            this.implicitMappingStatement();
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 77;
	            this.stageBlock();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 78;
	            this.bypassedExtensionStatement();
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 79;
	            this.generalPaletteStatement();
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



	globalDirectiveStatement() {
	    let localctx = new GlobalDirectiveStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, Q3ShaderParser.RULE_globalDirectiveStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.match(Q3ShaderParser.GLOBAL_DIRECTIVE);
	        this.state = 86;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 83;
	                this.argument(); 
	            }
	            this.state = 88;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
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



	surfaceParmStatement() {
	    let localctx = new SurfaceParmStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, Q3ShaderParser.RULE_surfaceParmStatement);
	    try {
	        this.state = 93;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 89;
	            this.match(Q3ShaderParser.SURFACE_PARM_KEYWORD);
	            this.state = 90;
	            this.match(Q3ShaderParser.SURFACE_PARM_VALUE);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 91;
	            this.match(Q3ShaderParser.SURFACE_PARM_KEYWORD);
	            this.state = 92;
	            this.match(Q3ShaderParser.IDENTIFIER);
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



	deformStatement() {
	    let localctx = new DeformStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, Q3ShaderParser.RULE_deformStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this.match(Q3ShaderParser.DEFORM_VERTEXES_KEYWORD);
	        this.state = 96;
	        this.match(Q3ShaderParser.DEFORM_MODIFIER);
	        this.state = 100;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 97;
	                this.argument(); 
	            }
	            this.state = 102;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
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



	generalPaletteStatement() {
	    let localctx = new GeneralPaletteStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, Q3ShaderParser.RULE_generalPaletteStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        this.match(Q3ShaderParser.IDENTIFIER);
	        this.state = 107;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 104;
	                this.argument(); 
	            }
	            this.state = 109;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
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



	bypassedExtensionStatement() {
	    let localctx = new BypassedExtensionStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, Q3ShaderParser.RULE_bypassedExtensionStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this.match(Q3ShaderParser.TOOL_EXTENSION);
	        this.state = 114;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 111;
	                this.argument(); 
	            }
	            this.state = 116;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
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



	implicitMappingStatement() {
	    let localctx = new ImplicitMappingStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, Q3ShaderParser.RULE_implicitMappingStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        this.match(Q3ShaderParser.IMPLICIT_MAPPING_KEYWORD);
	        this.state = 119;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 118;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 25427968) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
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



	conditionalBlock() {
	    let localctx = new ConditionalBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, Q3ShaderParser.RULE_conditionalBlock);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this.match(Q3ShaderParser.CONDITIONAL_IF);
	        this.state = 122;
	        this.conditionExpression();
	        this.state = 123;
	        this.executionBlock();
	        this.state = 128;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 126;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 7:
	                    this.state = 124;
	                    this.conditionalElif();
	                    break;
	                case 8:
	                    this.state = 125;
	                    this.conditionalElse();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                } 
	            }
	            this.state = 130;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
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



	conditionalElif() {
	    let localctx = new ConditionalElifContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, Q3ShaderParser.RULE_conditionalElif);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131;
	        this.match(Q3ShaderParser.CONDITIONAL_ELIF);
	        this.state = 132;
	        this.conditionExpression();
	        this.state = 133;
	        this.executionBlock();
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



	conditionalElse() {
	    let localctx = new ConditionalElseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, Q3ShaderParser.RULE_conditionalElse);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        this.match(Q3ShaderParser.CONDITIONAL_ELSE);
	        this.state = 136;
	        this.executionBlock();
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



	conditionExpression() {
	    let localctx = new ConditionExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, Q3ShaderParser.RULE_conditionExpression);
	    try {
	        this.state = 143;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 138;
	            this.match(Q3ShaderParser.LPAREN);
	            this.state = 139;
	            this.conditionalExpression();
	            this.state = 140;
	            this.match(Q3ShaderParser.RPAREN);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 142;
	            this.argument();
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



	conditionalExpression() {
	    let localctx = new ConditionalExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, Q3ShaderParser.RULE_conditionalExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        this.expressionTerm();
	        this.state = 150;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===19) {
	            this.state = 146;
	            this.match(Q3ShaderParser.LOGICAL_OP);
	            this.state = 147;
	            this.expressionTerm();
	            this.state = 152;
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



	expressionTerm() {
	    let localctx = new ExpressionTermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, Q3ShaderParser.RULE_expressionTerm);
	    var _la = 0;
	    try {
	        this.state = 158;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 153;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 10616832) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 154;
	            this.match(Q3ShaderParser.COMP_OP);
	            this.state = 155;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 62914560) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 156;
	            this.match(Q3ShaderParser.VARIABLE);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 157;
	            this.match(Q3ShaderParser.IDENTIFIER);
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



	executionBlock() {
	    let localctx = new ExecutionBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, Q3ShaderParser.RULE_executionBlock);
	    try {
	        this.state = 165;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 160;
	            this.match(Q3ShaderParser.LBRACE);
	            this.state = 161;
	            this.blockBody();
	            this.state = 162;
	            this.match(Q3ShaderParser.RBRACE);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 164;
	            this.blockStatement();
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



	stageBlock() {
	    let localctx = new StageBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, Q3ShaderParser.RULE_stageBlock);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this.match(Q3ShaderParser.LBRACE);
	        this.state = 168;
	        this.stageBody();
	        this.state = 169;
	        this.match(Q3ShaderParser.RBRACE);
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



	stageBody() {
	    let localctx = new StageBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, Q3ShaderParser.RULE_stageBody);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 175;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 4)) & ~0x1f) === 0 && ((1 << (_la - 4)) & 603979809) !== 0)) {
	            this.state = 173;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 4:
	            case 9:
	                this.state = 171;
	                this.stageStatement();
	                break;
	            case 30:
	            case 33:
	                this.state = 172;
	                this.commentLine();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 177;
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



	stageStatement() {
	    let localctx = new StageStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, Q3ShaderParser.RULE_stageStatement);
	    var _la = 0;
	    try {
	        this.state = 186;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 178;
	            this.match(Q3ShaderParser.STAGE_DIRECTIVE);
	            this.state = 182;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 864517122) !== 0)) {
	                this.state = 179;
	                this.argument();
	                this.state = 184;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 185;
	            this.tcModStatement();
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



	tcModStatement() {
	    let localctx = new TcModStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, Q3ShaderParser.RULE_tcModStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 188;
	        this.match(Q3ShaderParser.TC_MOD_KEYWORD);
	        this.state = 189;
	        this.match(Q3ShaderParser.TC_MOD_MODIFIER);
	        this.state = 193;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 864517122) !== 0)) {
	            this.state = 190;
	            this.argument();
	            this.state = 195;
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



	argument() {
	    let localctx = new ArgumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, Q3ShaderParser.RULE_argument);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 196;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 864517122) !== 0))) {
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



	commentLine() {
	    let localctx = new CommentLineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, Q3ShaderParser.RULE_commentLine);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 198;
	        _la = this._input.LA(1);
	        if(!(_la===30 || _la===33)) {
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

Q3ShaderParser.EOF = antlr4.Token.EOF;
Q3ShaderParser.GLOBAL_DIRECTIVE = 1;
Q3ShaderParser.SURFACE_PARM_KEYWORD = 2;
Q3ShaderParser.DEFORM_VERTEXES_KEYWORD = 3;
Q3ShaderParser.TC_MOD_KEYWORD = 4;
Q3ShaderParser.IMPLICIT_MAPPING_KEYWORD = 5;
Q3ShaderParser.CONDITIONAL_IF = 6;
Q3ShaderParser.CONDITIONAL_ELIF = 7;
Q3ShaderParser.CONDITIONAL_ELSE = 8;
Q3ShaderParser.STAGE_DIRECTIVE = 9;
Q3ShaderParser.DEFORM_MODIFIER = 10;
Q3ShaderParser.TC_MOD_MODIFIER = 11;
Q3ShaderParser.WAVE_FUNCTION = 12;
Q3ShaderParser.ENUM_MODIFIER = 13;
Q3ShaderParser.GL_CONSTANT = 14;
Q3ShaderParser.TOOL_EXTENSION = 15;
Q3ShaderParser.SURFACE_PARM_VALUE = 16;
Q3ShaderParser.VARIABLE = 17;
Q3ShaderParser.PATH = 18;
Q3ShaderParser.LOGICAL_OP = 19;
Q3ShaderParser.COMP_OP = 20;
Q3ShaderParser.L_VALUE = 21;
Q3ShaderParser.R_VALUE = 22;
Q3ShaderParser.IDENTIFIER = 23;
Q3ShaderParser.NUMBER = 24;
Q3ShaderParser.STRING_LITERAL = 25;
Q3ShaderParser.LBRACE = 26;
Q3ShaderParser.RBRACE = 27;
Q3ShaderParser.LPAREN = 28;
Q3ShaderParser.RPAREN = 29;
Q3ShaderParser.COMMENT = 30;
Q3ShaderParser.LINE_COMMENT_SL = 31;
Q3ShaderParser.LINE_COMMENT_BS = 32;
Q3ShaderParser.BLOCK_COMMENT = 33;
Q3ShaderParser.WS = 34;

Q3ShaderParser.RULE_shaderFile = 0;
Q3ShaderParser.RULE_shader = 1;
Q3ShaderParser.RULE_shaderName = 2;
Q3ShaderParser.RULE_blockBody = 3;
Q3ShaderParser.RULE_blockStatement = 4;
Q3ShaderParser.RULE_globalDirectiveStatement = 5;
Q3ShaderParser.RULE_surfaceParmStatement = 6;
Q3ShaderParser.RULE_deformStatement = 7;
Q3ShaderParser.RULE_generalPaletteStatement = 8;
Q3ShaderParser.RULE_bypassedExtensionStatement = 9;
Q3ShaderParser.RULE_implicitMappingStatement = 10;
Q3ShaderParser.RULE_conditionalBlock = 11;
Q3ShaderParser.RULE_conditionalElif = 12;
Q3ShaderParser.RULE_conditionalElse = 13;
Q3ShaderParser.RULE_conditionExpression = 14;
Q3ShaderParser.RULE_conditionalExpression = 15;
Q3ShaderParser.RULE_expressionTerm = 16;
Q3ShaderParser.RULE_executionBlock = 17;
Q3ShaderParser.RULE_stageBlock = 18;
Q3ShaderParser.RULE_stageBody = 19;
Q3ShaderParser.RULE_stageStatement = 20;
Q3ShaderParser.RULE_tcModStatement = 21;
Q3ShaderParser.RULE_argument = 22;
Q3ShaderParser.RULE_commentLine = 23;

class ShaderFileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3ShaderParser.RULE_shaderFile;
    }

	EOF() {
	    return this.getToken(Q3ShaderParser.EOF, 0);
	};

	shader = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ShaderContext);
	    } else {
	        return this.getTypedRuleContext(ShaderContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.enterShaderFile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.exitShaderFile(this);
		}
	}


}



class ShaderContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3ShaderParser.RULE_shader;
    }

	shaderName() {
	    return this.getTypedRuleContext(ShaderNameContext,0);
	};

	LBRACE() {
	    return this.getToken(Q3ShaderParser.LBRACE, 0);
	};

	blockBody() {
	    return this.getTypedRuleContext(BlockBodyContext,0);
	};

	RBRACE() {
	    return this.getToken(Q3ShaderParser.RBRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.enterShader(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.exitShader(this);
		}
	}


}



class ShaderNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3ShaderParser.RULE_shaderName;
    }

	PATH() {
	    return this.getToken(Q3ShaderParser.PATH, 0);
	};

	IDENTIFIER() {
	    return this.getToken(Q3ShaderParser.IDENTIFIER, 0);
	};

	STRING_LITERAL() {
	    return this.getToken(Q3ShaderParser.STRING_LITERAL, 0);
	};

	NUMBER() {
	    return this.getToken(Q3ShaderParser.NUMBER, 0);
	};

	GLOBAL_DIRECTIVE() {
	    return this.getToken(Q3ShaderParser.GLOBAL_DIRECTIVE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.enterShaderName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.exitShaderName(this);
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
        this.ruleIndex = Q3ShaderParser.RULE_blockBody;
    }

	blockStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BlockStatementContext);
	    } else {
	        return this.getTypedRuleContext(BlockStatementContext,i);
	    }
	};

	commentLine = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CommentLineContext);
	    } else {
	        return this.getTypedRuleContext(CommentLineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.enterBlockBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.exitBlockBody(this);
		}
	}


}



class BlockStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3ShaderParser.RULE_blockStatement;
    }

	globalDirectiveStatement() {
	    return this.getTypedRuleContext(GlobalDirectiveStatementContext,0);
	};

	surfaceParmStatement() {
	    return this.getTypedRuleContext(SurfaceParmStatementContext,0);
	};

	deformStatement() {
	    return this.getTypedRuleContext(DeformStatementContext,0);
	};

	conditionalBlock() {
	    return this.getTypedRuleContext(ConditionalBlockContext,0);
	};

	implicitMappingStatement() {
	    return this.getTypedRuleContext(ImplicitMappingStatementContext,0);
	};

	stageBlock() {
	    return this.getTypedRuleContext(StageBlockContext,0);
	};

	bypassedExtensionStatement() {
	    return this.getTypedRuleContext(BypassedExtensionStatementContext,0);
	};

	generalPaletteStatement() {
	    return this.getTypedRuleContext(GeneralPaletteStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.enterBlockStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.exitBlockStatement(this);
		}
	}


}



class GlobalDirectiveStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3ShaderParser.RULE_globalDirectiveStatement;
    }

	GLOBAL_DIRECTIVE() {
	    return this.getToken(Q3ShaderParser.GLOBAL_DIRECTIVE, 0);
	};

	argument = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgumentContext);
	    } else {
	        return this.getTypedRuleContext(ArgumentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.enterGlobalDirectiveStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.exitGlobalDirectiveStatement(this);
		}
	}


}



class SurfaceParmStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3ShaderParser.RULE_surfaceParmStatement;
    }

	SURFACE_PARM_KEYWORD() {
	    return this.getToken(Q3ShaderParser.SURFACE_PARM_KEYWORD, 0);
	};

	SURFACE_PARM_VALUE() {
	    return this.getToken(Q3ShaderParser.SURFACE_PARM_VALUE, 0);
	};

	IDENTIFIER() {
	    return this.getToken(Q3ShaderParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.enterSurfaceParmStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.exitSurfaceParmStatement(this);
		}
	}


}



class DeformStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3ShaderParser.RULE_deformStatement;
    }

	DEFORM_VERTEXES_KEYWORD() {
	    return this.getToken(Q3ShaderParser.DEFORM_VERTEXES_KEYWORD, 0);
	};

	DEFORM_MODIFIER() {
	    return this.getToken(Q3ShaderParser.DEFORM_MODIFIER, 0);
	};

	argument = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgumentContext);
	    } else {
	        return this.getTypedRuleContext(ArgumentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.enterDeformStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.exitDeformStatement(this);
		}
	}


}



class GeneralPaletteStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3ShaderParser.RULE_generalPaletteStatement;
    }

	IDENTIFIER() {
	    return this.getToken(Q3ShaderParser.IDENTIFIER, 0);
	};

	argument = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgumentContext);
	    } else {
	        return this.getTypedRuleContext(ArgumentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.enterGeneralPaletteStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.exitGeneralPaletteStatement(this);
		}
	}


}



class BypassedExtensionStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3ShaderParser.RULE_bypassedExtensionStatement;
    }

	TOOL_EXTENSION() {
	    return this.getToken(Q3ShaderParser.TOOL_EXTENSION, 0);
	};

	argument = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgumentContext);
	    } else {
	        return this.getTypedRuleContext(ArgumentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.enterBypassedExtensionStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.exitBypassedExtensionStatement(this);
		}
	}


}



class ImplicitMappingStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3ShaderParser.RULE_implicitMappingStatement;
    }

	IMPLICIT_MAPPING_KEYWORD() {
	    return this.getToken(Q3ShaderParser.IMPLICIT_MAPPING_KEYWORD, 0);
	};

	PATH() {
	    return this.getToken(Q3ShaderParser.PATH, 0);
	};

	IDENTIFIER() {
	    return this.getToken(Q3ShaderParser.IDENTIFIER, 0);
	};

	NUMBER() {
	    return this.getToken(Q3ShaderParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.enterImplicitMappingStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.exitImplicitMappingStatement(this);
		}
	}


}



class ConditionalBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3ShaderParser.RULE_conditionalBlock;
    }

	CONDITIONAL_IF() {
	    return this.getToken(Q3ShaderParser.CONDITIONAL_IF, 0);
	};

	conditionExpression() {
	    return this.getTypedRuleContext(ConditionExpressionContext,0);
	};

	executionBlock() {
	    return this.getTypedRuleContext(ExecutionBlockContext,0);
	};

	conditionalElif = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConditionalElifContext);
	    } else {
	        return this.getTypedRuleContext(ConditionalElifContext,i);
	    }
	};

	conditionalElse = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConditionalElseContext);
	    } else {
	        return this.getTypedRuleContext(ConditionalElseContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.enterConditionalBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.exitConditionalBlock(this);
		}
	}


}



class ConditionalElifContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3ShaderParser.RULE_conditionalElif;
    }

	CONDITIONAL_ELIF() {
	    return this.getToken(Q3ShaderParser.CONDITIONAL_ELIF, 0);
	};

	conditionExpression() {
	    return this.getTypedRuleContext(ConditionExpressionContext,0);
	};

	executionBlock() {
	    return this.getTypedRuleContext(ExecutionBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.enterConditionalElif(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.exitConditionalElif(this);
		}
	}


}



class ConditionalElseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3ShaderParser.RULE_conditionalElse;
    }

	CONDITIONAL_ELSE() {
	    return this.getToken(Q3ShaderParser.CONDITIONAL_ELSE, 0);
	};

	executionBlock() {
	    return this.getTypedRuleContext(ExecutionBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.enterConditionalElse(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.exitConditionalElse(this);
		}
	}


}



class ConditionExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3ShaderParser.RULE_conditionExpression;
    }

	LPAREN() {
	    return this.getToken(Q3ShaderParser.LPAREN, 0);
	};

	conditionalExpression() {
	    return this.getTypedRuleContext(ConditionalExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(Q3ShaderParser.RPAREN, 0);
	};

	argument() {
	    return this.getTypedRuleContext(ArgumentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.enterConditionExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.exitConditionExpression(this);
		}
	}


}



class ConditionalExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3ShaderParser.RULE_conditionalExpression;
    }

	expressionTerm = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionTermContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionTermContext,i);
	    }
	};

	LOGICAL_OP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Q3ShaderParser.LOGICAL_OP);
	    } else {
	        return this.getToken(Q3ShaderParser.LOGICAL_OP, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.enterConditionalExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.exitConditionalExpression(this);
		}
	}


}



class ExpressionTermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3ShaderParser.RULE_expressionTerm;
    }

	COMP_OP() {
	    return this.getToken(Q3ShaderParser.COMP_OP, 0);
	};

	L_VALUE() {
	    return this.getToken(Q3ShaderParser.L_VALUE, 0);
	};

	VARIABLE() {
	    return this.getToken(Q3ShaderParser.VARIABLE, 0);
	};

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Q3ShaderParser.IDENTIFIER);
	    } else {
	        return this.getToken(Q3ShaderParser.IDENTIFIER, i);
	    }
	};


	R_VALUE() {
	    return this.getToken(Q3ShaderParser.R_VALUE, 0);
	};

	NUMBER() {
	    return this.getToken(Q3ShaderParser.NUMBER, 0);
	};

	STRING_LITERAL() {
	    return this.getToken(Q3ShaderParser.STRING_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.enterExpressionTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.exitExpressionTerm(this);
		}
	}


}



class ExecutionBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3ShaderParser.RULE_executionBlock;
    }

	LBRACE() {
	    return this.getToken(Q3ShaderParser.LBRACE, 0);
	};

	blockBody() {
	    return this.getTypedRuleContext(BlockBodyContext,0);
	};

	RBRACE() {
	    return this.getToken(Q3ShaderParser.RBRACE, 0);
	};

	blockStatement() {
	    return this.getTypedRuleContext(BlockStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.enterExecutionBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.exitExecutionBlock(this);
		}
	}


}



class StageBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3ShaderParser.RULE_stageBlock;
    }

	LBRACE() {
	    return this.getToken(Q3ShaderParser.LBRACE, 0);
	};

	stageBody() {
	    return this.getTypedRuleContext(StageBodyContext,0);
	};

	RBRACE() {
	    return this.getToken(Q3ShaderParser.RBRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.enterStageBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.exitStageBlock(this);
		}
	}


}



class StageBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3ShaderParser.RULE_stageBody;
    }

	stageStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StageStatementContext);
	    } else {
	        return this.getTypedRuleContext(StageStatementContext,i);
	    }
	};

	commentLine = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CommentLineContext);
	    } else {
	        return this.getTypedRuleContext(CommentLineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.enterStageBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.exitStageBody(this);
		}
	}


}



class StageStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3ShaderParser.RULE_stageStatement;
    }

	STAGE_DIRECTIVE() {
	    return this.getToken(Q3ShaderParser.STAGE_DIRECTIVE, 0);
	};

	argument = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgumentContext);
	    } else {
	        return this.getTypedRuleContext(ArgumentContext,i);
	    }
	};

	tcModStatement() {
	    return this.getTypedRuleContext(TcModStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.enterStageStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.exitStageStatement(this);
		}
	}


}



class TcModStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3ShaderParser.RULE_tcModStatement;
    }

	TC_MOD_KEYWORD() {
	    return this.getToken(Q3ShaderParser.TC_MOD_KEYWORD, 0);
	};

	TC_MOD_MODIFIER() {
	    return this.getToken(Q3ShaderParser.TC_MOD_MODIFIER, 0);
	};

	argument = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgumentContext);
	    } else {
	        return this.getTypedRuleContext(ArgumentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.enterTcModStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.exitTcModStatement(this);
		}
	}


}



class ArgumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3ShaderParser.RULE_argument;
    }

	PATH() {
	    return this.getToken(Q3ShaderParser.PATH, 0);
	};

	VARIABLE() {
	    return this.getToken(Q3ShaderParser.VARIABLE, 0);
	};

	IDENTIFIER() {
	    return this.getToken(Q3ShaderParser.IDENTIFIER, 0);
	};

	NUMBER() {
	    return this.getToken(Q3ShaderParser.NUMBER, 0);
	};

	STRING_LITERAL() {
	    return this.getToken(Q3ShaderParser.STRING_LITERAL, 0);
	};

	GL_CONSTANT() {
	    return this.getToken(Q3ShaderParser.GL_CONSTANT, 0);
	};

	WAVE_FUNCTION() {
	    return this.getToken(Q3ShaderParser.WAVE_FUNCTION, 0);
	};

	ENUM_MODIFIER() {
	    return this.getToken(Q3ShaderParser.ENUM_MODIFIER, 0);
	};

	GLOBAL_DIRECTIVE() {
	    return this.getToken(Q3ShaderParser.GLOBAL_DIRECTIVE, 0);
	};

	SURFACE_PARM_VALUE() {
	    return this.getToken(Q3ShaderParser.SURFACE_PARM_VALUE, 0);
	};

	DEFORM_MODIFIER() {
	    return this.getToken(Q3ShaderParser.DEFORM_MODIFIER, 0);
	};

	TC_MOD_MODIFIER() {
	    return this.getToken(Q3ShaderParser.TC_MOD_MODIFIER, 0);
	};

	LPAREN() {
	    return this.getToken(Q3ShaderParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(Q3ShaderParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.enterArgument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.exitArgument(this);
		}
	}


}



class CommentLineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3ShaderParser.RULE_commentLine;
    }

	COMMENT() {
	    return this.getToken(Q3ShaderParser.COMMENT, 0);
	};

	BLOCK_COMMENT() {
	    return this.getToken(Q3ShaderParser.BLOCK_COMMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.enterCommentLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.exitCommentLine(this);
		}
	}


}




Q3ShaderParser.ShaderFileContext = ShaderFileContext; 
Q3ShaderParser.ShaderContext = ShaderContext; 
Q3ShaderParser.ShaderNameContext = ShaderNameContext; 
Q3ShaderParser.BlockBodyContext = BlockBodyContext; 
Q3ShaderParser.BlockStatementContext = BlockStatementContext; 
Q3ShaderParser.GlobalDirectiveStatementContext = GlobalDirectiveStatementContext; 
Q3ShaderParser.SurfaceParmStatementContext = SurfaceParmStatementContext; 
Q3ShaderParser.DeformStatementContext = DeformStatementContext; 
Q3ShaderParser.GeneralPaletteStatementContext = GeneralPaletteStatementContext; 
Q3ShaderParser.BypassedExtensionStatementContext = BypassedExtensionStatementContext; 
Q3ShaderParser.ImplicitMappingStatementContext = ImplicitMappingStatementContext; 
Q3ShaderParser.ConditionalBlockContext = ConditionalBlockContext; 
Q3ShaderParser.ConditionalElifContext = ConditionalElifContext; 
Q3ShaderParser.ConditionalElseContext = ConditionalElseContext; 
Q3ShaderParser.ConditionExpressionContext = ConditionExpressionContext; 
Q3ShaderParser.ConditionalExpressionContext = ConditionalExpressionContext; 
Q3ShaderParser.ExpressionTermContext = ExpressionTermContext; 
Q3ShaderParser.ExecutionBlockContext = ExecutionBlockContext; 
Q3ShaderParser.StageBlockContext = StageBlockContext; 
Q3ShaderParser.StageBodyContext = StageBodyContext; 
Q3ShaderParser.StageStatementContext = StageStatementContext; 
Q3ShaderParser.TcModStatementContext = TcModStatementContext; 
Q3ShaderParser.ArgumentContext = ArgumentContext; 
Q3ShaderParser.CommentLineContext = CommentLineContext; 
