// Generated from ./quake3/shader/Q3ShaderParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import Q3ShaderParserListener from './Q3ShaderParserListener.js';
const serializedATN = [4,1,32,203,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,1,0,4,0,44,8,0,11,0,12,0,45,1,0,1,0,1,0,3,0,51,8,0,1,1,1,1,1,1,1,
1,1,1,1,2,1,2,1,3,1,3,5,3,62,8,3,10,3,12,3,65,9,3,1,4,1,4,1,4,1,4,1,4,1,
4,1,4,1,4,3,4,75,8,4,1,5,1,5,5,5,79,8,5,10,5,12,5,82,9,5,1,6,1,6,1,6,1,6,
3,6,88,8,6,1,7,1,7,1,7,5,7,93,8,7,10,7,12,7,96,9,7,1,8,1,8,1,8,5,8,101,8,
8,10,8,12,8,104,9,8,1,9,1,9,5,9,108,8,9,10,9,12,9,111,9,9,1,10,1,10,3,10,
115,8,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,5,11,126,8,11,10,11,
12,11,129,9,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,5,11,138,8,11,10,11,12,
11,141,9,11,3,11,143,8,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,
12,1,12,1,12,1,12,1,12,3,12,159,8,12,1,13,1,13,1,13,1,13,1,13,1,14,1,14,
1,14,5,14,169,8,14,10,14,12,14,172,9,14,1,15,1,15,1,15,1,15,1,15,3,15,179,
8,15,1,16,1,16,1,16,1,16,1,17,1,17,5,17,187,8,17,10,17,12,17,190,9,17,1,
18,1,18,5,18,194,8,18,10,18,12,18,197,9,18,1,19,1,19,1,20,1,20,1,20,0,0,
21,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,0,6,3,0,1,1,
18,18,21,23,2,0,18,18,23,23,1,0,17,19,2,0,18,18,20,22,3,0,1,1,11,18,21,23,
1,0,30,31,210,0,50,1,0,0,0,2,52,1,0,0,0,4,57,1,0,0,0,6,63,1,0,0,0,8,74,1,
0,0,0,10,76,1,0,0,0,12,87,1,0,0,0,14,89,1,0,0,0,16,97,1,0,0,0,18,105,1,0,
0,0,20,112,1,0,0,0,22,142,1,0,0,0,24,158,1,0,0,0,26,160,1,0,0,0,28,165,1,
0,0,0,30,178,1,0,0,0,32,180,1,0,0,0,34,188,1,0,0,0,36,191,1,0,0,0,38,198,
1,0,0,0,40,200,1,0,0,0,42,44,3,2,1,0,43,42,1,0,0,0,44,45,1,0,0,0,45,43,1,
0,0,0,45,46,1,0,0,0,46,47,1,0,0,0,47,48,5,0,0,1,48,51,1,0,0,0,49,51,5,0,
0,1,50,43,1,0,0,0,50,49,1,0,0,0,51,1,1,0,0,0,52,53,3,4,2,0,53,54,5,26,0,
0,54,55,3,6,3,0,55,56,5,27,0,0,56,3,1,0,0,0,57,58,7,0,0,0,58,5,1,0,0,0,59,
62,3,8,4,0,60,62,3,40,20,0,61,59,1,0,0,0,61,60,1,0,0,0,62,65,1,0,0,0,63,
61,1,0,0,0,63,64,1,0,0,0,64,7,1,0,0,0,65,63,1,0,0,0,66,75,3,10,5,0,67,75,
3,12,6,0,68,75,3,14,7,0,69,75,3,16,8,0,70,75,3,22,11,0,71,75,3,20,10,0,72,
75,3,32,16,0,73,75,3,18,9,0,74,66,1,0,0,0,74,67,1,0,0,0,74,68,1,0,0,0,74,
69,1,0,0,0,74,70,1,0,0,0,74,71,1,0,0,0,74,72,1,0,0,0,74,73,1,0,0,0,75,9,
1,0,0,0,76,80,5,1,0,0,77,79,3,38,19,0,78,77,1,0,0,0,79,82,1,0,0,0,80,78,
1,0,0,0,80,81,1,0,0,0,81,11,1,0,0,0,82,80,1,0,0,0,83,84,5,2,0,0,84,88,5,
11,0,0,85,86,5,2,0,0,86,88,5,18,0,0,87,83,1,0,0,0,87,85,1,0,0,0,88,13,1,
0,0,0,89,90,5,3,0,0,90,94,5,12,0,0,91,93,3,38,19,0,92,91,1,0,0,0,93,96,1,
0,0,0,94,92,1,0,0,0,94,95,1,0,0,0,95,15,1,0,0,0,96,94,1,0,0,0,97,98,5,4,
0,0,98,102,5,13,0,0,99,101,3,38,19,0,100,99,1,0,0,0,101,104,1,0,0,0,102,
100,1,0,0,0,102,103,1,0,0,0,103,17,1,0,0,0,104,102,1,0,0,0,105,109,5,10,
0,0,106,108,3,38,19,0,107,106,1,0,0,0,108,111,1,0,0,0,109,107,1,0,0,0,109,
110,1,0,0,0,110,19,1,0,0,0,111,109,1,0,0,0,112,114,5,5,0,0,113,115,7,1,0,
0,114,113,1,0,0,0,114,115,1,0,0,0,115,21,1,0,0,0,116,117,5,6,0,0,117,118,
5,28,0,0,118,119,3,28,14,0,119,120,5,29,0,0,120,121,5,26,0,0,121,122,3,6,
3,0,122,127,5,27,0,0,123,126,3,24,12,0,124,126,3,26,13,0,125,123,1,0,0,0,
125,124,1,0,0,0,126,129,1,0,0,0,127,125,1,0,0,0,127,128,1,0,0,0,128,143,
1,0,0,0,129,127,1,0,0,0,130,131,5,6,0,0,131,132,3,38,19,0,132,133,5,26,0,
0,133,134,3,6,3,0,134,139,5,27,0,0,135,138,3,24,12,0,136,138,3,26,13,0,137,
135,1,0,0,0,137,136,1,0,0,0,138,141,1,0,0,0,139,137,1,0,0,0,139,140,1,0,
0,0,140,143,1,0,0,0,141,139,1,0,0,0,142,116,1,0,0,0,142,130,1,0,0,0,143,
23,1,0,0,0,144,145,5,7,0,0,145,146,5,28,0,0,146,147,3,28,14,0,147,148,5,
29,0,0,148,149,5,26,0,0,149,150,3,6,3,0,150,151,5,27,0,0,151,159,1,0,0,0,
152,153,5,7,0,0,153,154,3,38,19,0,154,155,5,26,0,0,155,156,3,6,3,0,156,157,
5,27,0,0,157,159,1,0,0,0,158,144,1,0,0,0,158,152,1,0,0,0,159,25,1,0,0,0,
160,161,5,8,0,0,161,162,5,26,0,0,162,163,3,6,3,0,163,164,5,27,0,0,164,27,
1,0,0,0,165,170,3,30,15,0,166,167,5,24,0,0,167,169,3,30,15,0,168,166,1,0,
0,0,169,172,1,0,0,0,170,168,1,0,0,0,170,171,1,0,0,0,171,29,1,0,0,0,172,170,
1,0,0,0,173,174,7,2,0,0,174,175,5,25,0,0,175,179,7,3,0,0,176,179,5,17,0,
0,177,179,5,18,0,0,178,173,1,0,0,0,178,176,1,0,0,0,178,177,1,0,0,0,179,31,
1,0,0,0,180,181,5,26,0,0,181,182,3,34,17,0,182,183,5,27,0,0,183,33,1,0,0,
0,184,187,3,36,18,0,185,187,3,40,20,0,186,184,1,0,0,0,186,185,1,0,0,0,187,
190,1,0,0,0,188,186,1,0,0,0,188,189,1,0,0,0,189,35,1,0,0,0,190,188,1,0,0,
0,191,195,5,9,0,0,192,194,3,38,19,0,193,192,1,0,0,0,194,197,1,0,0,0,195,
193,1,0,0,0,195,196,1,0,0,0,196,37,1,0,0,0,197,195,1,0,0,0,198,199,7,4,0,
0,199,39,1,0,0,0,200,201,7,5,0,0,201,41,1,0,0,0,22,45,50,61,63,74,80,87,
94,102,109,114,125,127,137,139,142,158,170,178,186,188,195];


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
                             "TOOL_EXTENSION", "SURFACE_PARM_VALUE", "DEFORM_MODIFIER", 
                             "TC_MOD_MODIFIER", "WAVE_FUNCTION", "ENUM_MODIFIER", 
                             "GL_CONSTANT", "VARIABLE", "IDENTIFIER", "L_VALUE", 
                             "R_VALUE", "NUMBER", "STRING_LITERAL", "PATH", 
                             "LOGICAL_OP", "COMP_OP", "LBRACE", "RBRACE", 
                             "LPAREN", "RPAREN", "COMMENT", "BLOCK_COMMENT", 
                             "WS" ];
    static ruleNames = [ "shaderFile", "shader", "shaderName", "blockBody", 
                         "blockStatement", "globalDirectiveStatement", "surfaceParmStatement", 
                         "deformStatement", "tcModStatement", "bypassedExtensionStatement", 
                         "implicitMappingStatement", "conditionalBlock", 
                         "conditionalElif", "conditionalElse", "conditionalExpression", 
                         "expressionTerm", "stageBlock", "stageBody", "stageStatement", 
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
	        this.state = 50;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 18:
	        case 21:
	        case 22:
	        case 23:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 43; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 42;
	                this.shader();
	                this.state = 45; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 14942210) !== 0));
	            this.state = 47;
	            this.match(Q3ShaderParser.EOF);
	            break;
	        case -1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 49;
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
	        this.state = 52;
	        this.shaderName();
	        this.state = 53;
	        this.match(Q3ShaderParser.LBRACE);
	        this.state = 54;
	        this.blockBody();
	        this.state = 55;
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
	        this.state = 57;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 14942210) !== 0))) {
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
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3288335486) !== 0)) {
	            this.state = 61;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 1:
	            case 2:
	            case 3:
	            case 4:
	            case 5:
	            case 6:
	            case 10:
	            case 26:
	                this.state = 59;
	                this.blockStatement();
	                break;
	            case 30:
	            case 31:
	                this.state = 60;
	                this.commentLine();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 65;
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
	        this.state = 74;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 66;
	            this.globalDirectiveStatement();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 67;
	            this.surfaceParmStatement();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 68;
	            this.deformStatement();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 69;
	            this.tcModStatement();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 70;
	            this.conditionalBlock();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 71;
	            this.implicitMappingStatement();
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 72;
	            this.stageBlock();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 73;
	            this.bypassedExtensionStatement();
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
	        this.state = 76;
	        this.match(Q3ShaderParser.GLOBAL_DIRECTIVE);
	        this.state = 80;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 77;
	                this.argument(); 
	            }
	            this.state = 82;
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
	        this.state = 87;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 83;
	            this.match(Q3ShaderParser.SURFACE_PARM_KEYWORD);
	            this.state = 84;
	            this.match(Q3ShaderParser.SURFACE_PARM_VALUE);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 85;
	            this.match(Q3ShaderParser.SURFACE_PARM_KEYWORD);
	            this.state = 86;
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
	        this.state = 89;
	        this.match(Q3ShaderParser.DEFORM_VERTEXES_KEYWORD);
	        this.state = 90;
	        this.match(Q3ShaderParser.DEFORM_MODIFIER);
	        this.state = 94;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 91;
	                this.argument(); 
	            }
	            this.state = 96;
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



	tcModStatement() {
	    let localctx = new TcModStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, Q3ShaderParser.RULE_tcModStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.match(Q3ShaderParser.TC_MOD_KEYWORD);
	        this.state = 98;
	        this.match(Q3ShaderParser.TC_MOD_MODIFIER);
	        this.state = 102;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 99;
	                this.argument(); 
	            }
	            this.state = 104;
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
	        this.state = 105;
	        this.match(Q3ShaderParser.TOOL_EXTENSION);
	        this.state = 109;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 106;
	                this.argument(); 
	            }
	            this.state = 111;
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
	        this.state = 112;
	        this.match(Q3ShaderParser.IMPLICIT_MAPPING_KEYWORD);
	        this.state = 114;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18 || _la===23) {
	            this.state = 113;
	            _la = this._input.LA(1);
	            if(!(_la===18 || _la===23)) {
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
	    var _la = 0;
	    try {
	        this.state = 142;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 116;
	            this.match(Q3ShaderParser.CONDITIONAL_IF);
	            this.state = 117;
	            this.match(Q3ShaderParser.LPAREN);
	            this.state = 118;
	            this.conditionalExpression();
	            this.state = 119;
	            this.match(Q3ShaderParser.RPAREN);
	            this.state = 120;
	            this.match(Q3ShaderParser.LBRACE);
	            this.state = 121;
	            this.blockBody();
	            this.state = 122;
	            this.match(Q3ShaderParser.RBRACE);
	            this.state = 127;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7 || _la===8) {
	                this.state = 125;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 7:
	                    this.state = 123;
	                    this.conditionalElif();
	                    break;
	                case 8:
	                    this.state = 124;
	                    this.conditionalElse();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 129;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 130;
	            this.match(Q3ShaderParser.CONDITIONAL_IF);
	            this.state = 131;
	            this.argument();
	            this.state = 132;
	            this.match(Q3ShaderParser.LBRACE);
	            this.state = 133;
	            this.blockBody();
	            this.state = 134;
	            this.match(Q3ShaderParser.RBRACE);
	            this.state = 139;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7 || _la===8) {
	                this.state = 137;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 7:
	                    this.state = 135;
	                    this.conditionalElif();
	                    break;
	                case 8:
	                    this.state = 136;
	                    this.conditionalElse();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 141;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
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



	conditionalElif() {
	    let localctx = new ConditionalElifContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, Q3ShaderParser.RULE_conditionalElif);
	    try {
	        this.state = 158;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 144;
	            this.match(Q3ShaderParser.CONDITIONAL_ELIF);
	            this.state = 145;
	            this.match(Q3ShaderParser.LPAREN);
	            this.state = 146;
	            this.conditionalExpression();
	            this.state = 147;
	            this.match(Q3ShaderParser.RPAREN);
	            this.state = 148;
	            this.match(Q3ShaderParser.LBRACE);
	            this.state = 149;
	            this.blockBody();
	            this.state = 150;
	            this.match(Q3ShaderParser.RBRACE);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 152;
	            this.match(Q3ShaderParser.CONDITIONAL_ELIF);
	            this.state = 153;
	            this.argument();
	            this.state = 154;
	            this.match(Q3ShaderParser.LBRACE);
	            this.state = 155;
	            this.blockBody();
	            this.state = 156;
	            this.match(Q3ShaderParser.RBRACE);
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



	conditionalElse() {
	    let localctx = new ConditionalElseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, Q3ShaderParser.RULE_conditionalElse);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
	        this.match(Q3ShaderParser.CONDITIONAL_ELSE);
	        this.state = 161;
	        this.match(Q3ShaderParser.LBRACE);
	        this.state = 162;
	        this.blockBody();
	        this.state = 163;
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



	conditionalExpression() {
	    let localctx = new ConditionalExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, Q3ShaderParser.RULE_conditionalExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 165;
	        this.expressionTerm();
	        this.state = 170;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===24) {
	            this.state = 166;
	            this.match(Q3ShaderParser.LOGICAL_OP);
	            this.state = 167;
	            this.expressionTerm();
	            this.state = 172;
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
	    this.enterRule(localctx, 30, Q3ShaderParser.RULE_expressionTerm);
	    var _la = 0;
	    try {
	        this.state = 178;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 173;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 917504) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 174;
	            this.match(Q3ShaderParser.COMP_OP);
	            this.state = 175;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 7602176) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 176;
	            this.match(Q3ShaderParser.VARIABLE);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 177;
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



	stageBlock() {
	    let localctx = new StageBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, Q3ShaderParser.RULE_stageBlock);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 180;
	        this.match(Q3ShaderParser.LBRACE);
	        this.state = 181;
	        this.stageBody();
	        this.state = 182;
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
	    this.enterRule(localctx, 34, Q3ShaderParser.RULE_stageBody);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 188;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3221225984) !== 0)) {
	            this.state = 186;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 9:
	                this.state = 184;
	                this.stageStatement();
	                break;
	            case 30:
	            case 31:
	                this.state = 185;
	                this.commentLine();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 190;
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
	    this.enterRule(localctx, 36, Q3ShaderParser.RULE_stageStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 191;
	        this.match(Q3ShaderParser.STAGE_DIRECTIVE);
	        this.state = 195;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 15202306) !== 0)) {
	            this.state = 192;
	            this.argument();
	            this.state = 197;
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
	    this.enterRule(localctx, 38, Q3ShaderParser.RULE_argument);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 198;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 15202306) !== 0))) {
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
	    this.enterRule(localctx, 40, Q3ShaderParser.RULE_commentLine);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 200;
	        _la = this._input.LA(1);
	        if(!(_la===30 || _la===31)) {
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
Q3ShaderParser.TOOL_EXTENSION = 10;
Q3ShaderParser.SURFACE_PARM_VALUE = 11;
Q3ShaderParser.DEFORM_MODIFIER = 12;
Q3ShaderParser.TC_MOD_MODIFIER = 13;
Q3ShaderParser.WAVE_FUNCTION = 14;
Q3ShaderParser.ENUM_MODIFIER = 15;
Q3ShaderParser.GL_CONSTANT = 16;
Q3ShaderParser.VARIABLE = 17;
Q3ShaderParser.IDENTIFIER = 18;
Q3ShaderParser.L_VALUE = 19;
Q3ShaderParser.R_VALUE = 20;
Q3ShaderParser.NUMBER = 21;
Q3ShaderParser.STRING_LITERAL = 22;
Q3ShaderParser.PATH = 23;
Q3ShaderParser.LOGICAL_OP = 24;
Q3ShaderParser.COMP_OP = 25;
Q3ShaderParser.LBRACE = 26;
Q3ShaderParser.RBRACE = 27;
Q3ShaderParser.LPAREN = 28;
Q3ShaderParser.RPAREN = 29;
Q3ShaderParser.COMMENT = 30;
Q3ShaderParser.BLOCK_COMMENT = 31;
Q3ShaderParser.WS = 32;

Q3ShaderParser.RULE_shaderFile = 0;
Q3ShaderParser.RULE_shader = 1;
Q3ShaderParser.RULE_shaderName = 2;
Q3ShaderParser.RULE_blockBody = 3;
Q3ShaderParser.RULE_blockStatement = 4;
Q3ShaderParser.RULE_globalDirectiveStatement = 5;
Q3ShaderParser.RULE_surfaceParmStatement = 6;
Q3ShaderParser.RULE_deformStatement = 7;
Q3ShaderParser.RULE_tcModStatement = 8;
Q3ShaderParser.RULE_bypassedExtensionStatement = 9;
Q3ShaderParser.RULE_implicitMappingStatement = 10;
Q3ShaderParser.RULE_conditionalBlock = 11;
Q3ShaderParser.RULE_conditionalElif = 12;
Q3ShaderParser.RULE_conditionalElse = 13;
Q3ShaderParser.RULE_conditionalExpression = 14;
Q3ShaderParser.RULE_expressionTerm = 15;
Q3ShaderParser.RULE_stageBlock = 16;
Q3ShaderParser.RULE_stageBody = 17;
Q3ShaderParser.RULE_stageStatement = 18;
Q3ShaderParser.RULE_argument = 19;
Q3ShaderParser.RULE_commentLine = 20;

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

	tcModStatement() {
	    return this.getTypedRuleContext(TcModStatementContext,0);
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

	LPAREN() {
	    return this.getToken(Q3ShaderParser.LPAREN, 0);
	};

	conditionalExpression() {
	    return this.getTypedRuleContext(ConditionalExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(Q3ShaderParser.RPAREN, 0);
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

	argument() {
	    return this.getTypedRuleContext(ArgumentContext,0);
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

	LPAREN() {
	    return this.getToken(Q3ShaderParser.LPAREN, 0);
	};

	conditionalExpression() {
	    return this.getTypedRuleContext(ConditionalExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(Q3ShaderParser.RPAREN, 0);
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

	argument() {
	    return this.getTypedRuleContext(ArgumentContext,0);
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
	        listener.enterConditionalElse(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ShaderParserListener ) {
	        listener.exitConditionalElse(this);
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
Q3ShaderParser.TcModStatementContext = TcModStatementContext; 
Q3ShaderParser.BypassedExtensionStatementContext = BypassedExtensionStatementContext; 
Q3ShaderParser.ImplicitMappingStatementContext = ImplicitMappingStatementContext; 
Q3ShaderParser.ConditionalBlockContext = ConditionalBlockContext; 
Q3ShaderParser.ConditionalElifContext = ConditionalElifContext; 
Q3ShaderParser.ConditionalElseContext = ConditionalElseContext; 
Q3ShaderParser.ConditionalExpressionContext = ConditionalExpressionContext; 
Q3ShaderParser.ExpressionTermContext = ExpressionTermContext; 
Q3ShaderParser.StageBlockContext = StageBlockContext; 
Q3ShaderParser.StageBodyContext = StageBodyContext; 
Q3ShaderParser.StageStatementContext = StageStatementContext; 
Q3ShaderParser.ArgumentContext = ArgumentContext; 
Q3ShaderParser.CommentLineContext = CommentLineContext; 
