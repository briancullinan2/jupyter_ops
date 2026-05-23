// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/xpath/xpath1/xpath.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import xpathListener from './xpathListener.js';
const serializedATN = [4,1,36,251,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,1,0,
1,0,1,0,1,1,1,1,3,1,60,8,1,1,2,1,2,1,2,1,2,3,2,66,8,2,1,3,1,3,1,3,5,3,71,
8,3,10,3,12,3,74,9,3,1,4,1,4,1,4,5,4,79,8,4,10,4,12,4,82,9,4,1,4,3,4,85,
8,4,1,5,1,5,1,5,3,5,90,8,5,3,5,92,8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,
6,102,8,6,1,7,1,7,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,
1,10,1,10,3,10,120,8,10,1,11,1,11,1,11,1,11,1,11,5,11,127,8,11,10,11,12,
11,130,9,11,3,11,132,8,11,1,11,1,11,1,12,1,12,1,12,3,12,139,8,12,1,12,1,
12,1,12,3,12,144,8,12,1,13,1,13,1,13,1,13,3,13,150,8,13,3,13,152,8,13,1,
14,1,14,5,14,156,8,14,10,14,12,14,159,9,14,1,15,1,15,1,15,5,15,164,8,15,
10,15,12,15,167,9,15,1,16,1,16,1,16,5,16,172,8,16,10,16,12,16,175,9,16,1,
17,1,17,1,17,5,17,180,8,17,10,17,12,17,183,9,17,1,18,1,18,1,18,5,18,188,
8,18,10,18,12,18,191,9,18,1,19,1,19,1,19,5,19,196,8,19,10,19,12,19,199,9,
19,1,20,1,20,1,20,3,20,204,8,20,1,20,1,20,1,20,3,20,209,8,20,3,20,211,8,
20,1,21,5,21,214,8,21,10,21,12,21,217,9,21,1,21,1,21,1,22,1,22,1,22,3,22,
224,8,22,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,3,23,236,8,23,
1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,3,25,247,8,25,1,26,1,26,1,26,
0,0,27,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,
48,50,52,0,8,1,0,8,9,2,0,16,16,18,18,1,0,2,3,1,0,22,25,1,0,14,15,2,0,17,
17,32,33,1,0,32,33,4,0,5,5,7,7,30,33,36,36,261,0,54,1,0,0,0,2,59,1,0,0,0,
4,65,1,0,0,0,6,67,1,0,0,0,8,84,1,0,0,0,10,91,1,0,0,0,12,101,1,0,0,0,14,103,
1,0,0,0,16,107,1,0,0,0,18,109,1,0,0,0,20,119,1,0,0,0,22,121,1,0,0,0,24,143,
1,0,0,0,26,151,1,0,0,0,28,153,1,0,0,0,30,160,1,0,0,0,32,168,1,0,0,0,34,176,
1,0,0,0,36,184,1,0,0,0,38,192,1,0,0,0,40,210,1,0,0,0,42,215,1,0,0,0,44,220,
1,0,0,0,46,235,1,0,0,0,48,237,1,0,0,0,50,246,1,0,0,0,52,248,1,0,0,0,54,55,
3,18,9,0,55,56,5,0,0,1,56,1,1,0,0,0,57,60,3,6,3,0,58,60,3,4,2,0,59,57,1,
0,0,0,59,58,1,0,0,0,60,3,1,0,0,0,61,62,5,8,0,0,62,66,3,6,3,0,63,64,5,9,0,
0,64,66,3,6,3,0,65,61,1,0,0,0,65,63,1,0,0,0,66,5,1,0,0,0,67,72,3,8,4,0,68,
69,7,0,0,0,69,71,3,8,4,0,70,68,1,0,0,0,71,74,1,0,0,0,72,70,1,0,0,0,72,73,
1,0,0,0,73,7,1,0,0,0,74,72,1,0,0,0,75,76,3,10,5,0,76,80,3,12,6,0,77,79,3,
14,7,0,78,77,1,0,0,0,79,82,1,0,0,0,80,78,1,0,0,0,80,81,1,0,0,0,81,85,1,0,
0,0,82,80,1,0,0,0,83,85,3,16,8,0,84,75,1,0,0,0,84,83,1,0,0,0,85,9,1,0,0,
0,86,87,5,7,0,0,87,92,5,27,0,0,88,90,5,19,0,0,89,88,1,0,0,0,89,90,1,0,0,
0,90,92,1,0,0,0,91,86,1,0,0,0,91,89,1,0,0,0,92,11,1,0,0,0,93,102,3,50,25,
0,94,95,5,5,0,0,95,96,5,10,0,0,96,102,5,11,0,0,97,98,5,1,0,0,98,99,5,10,
0,0,99,100,5,34,0,0,100,102,5,11,0,0,101,93,1,0,0,0,101,94,1,0,0,0,101,97,
1,0,0,0,102,13,1,0,0,0,103,104,5,12,0,0,104,105,3,18,9,0,105,106,5,13,0,
0,106,15,1,0,0,0,107,108,7,1,0,0,108,17,1,0,0,0,109,110,3,30,15,0,110,19,
1,0,0,0,111,120,3,48,24,0,112,113,5,10,0,0,113,114,3,18,9,0,114,115,5,11,
0,0,115,120,1,0,0,0,116,120,5,34,0,0,117,120,5,6,0,0,118,120,3,22,11,0,119,
111,1,0,0,0,119,112,1,0,0,0,119,116,1,0,0,0,119,117,1,0,0,0,119,118,1,0,
0,0,120,21,1,0,0,0,121,122,3,46,23,0,122,131,5,10,0,0,123,128,3,18,9,0,124,
125,5,20,0,0,125,127,3,18,9,0,126,124,1,0,0,0,127,130,1,0,0,0,128,126,1,
0,0,0,128,129,1,0,0,0,129,132,1,0,0,0,130,128,1,0,0,0,131,123,1,0,0,0,131,
132,1,0,0,0,132,133,1,0,0,0,133,134,5,11,0,0,134,23,1,0,0,0,135,138,3,26,
13,0,136,137,5,21,0,0,137,139,3,24,12,0,138,136,1,0,0,0,138,139,1,0,0,0,
139,144,1,0,0,0,140,141,5,8,0,0,141,142,5,21,0,0,142,144,3,24,12,0,143,135,
1,0,0,0,143,140,1,0,0,0,144,25,1,0,0,0,145,152,3,2,1,0,146,149,3,28,14,0,
147,148,7,0,0,0,148,150,3,6,3,0,149,147,1,0,0,0,149,150,1,0,0,0,150,152,
1,0,0,0,151,145,1,0,0,0,151,146,1,0,0,0,152,27,1,0,0,0,153,157,3,20,10,0,
154,156,3,14,7,0,155,154,1,0,0,0,156,159,1,0,0,0,157,155,1,0,0,0,157,158,
1,0,0,0,158,29,1,0,0,0,159,157,1,0,0,0,160,165,3,32,16,0,161,162,5,31,0,
0,162,164,3,32,16,0,163,161,1,0,0,0,164,167,1,0,0,0,165,163,1,0,0,0,165,
166,1,0,0,0,166,31,1,0,0,0,167,165,1,0,0,0,168,173,3,34,17,0,169,170,5,30,
0,0,170,172,3,34,17,0,171,169,1,0,0,0,172,175,1,0,0,0,173,171,1,0,0,0,173,
174,1,0,0,0,174,33,1,0,0,0,175,173,1,0,0,0,176,181,3,36,18,0,177,178,7,2,
0,0,178,180,3,36,18,0,179,177,1,0,0,0,180,183,1,0,0,0,181,179,1,0,0,0,181,
182,1,0,0,0,182,35,1,0,0,0,183,181,1,0,0,0,184,189,3,38,19,0,185,186,7,3,
0,0,186,188,3,38,19,0,187,185,1,0,0,0,188,191,1,0,0,0,189,187,1,0,0,0,189,
190,1,0,0,0,190,37,1,0,0,0,191,189,1,0,0,0,192,197,3,40,20,0,193,194,7,4,
0,0,194,196,3,40,20,0,195,193,1,0,0,0,196,199,1,0,0,0,197,195,1,0,0,0,197,
198,1,0,0,0,198,39,1,0,0,0,199,197,1,0,0,0,200,203,3,42,21,0,201,202,7,5,
0,0,202,204,3,40,20,0,203,201,1,0,0,0,203,204,1,0,0,0,204,211,1,0,0,0,205,
208,5,8,0,0,206,207,7,6,0,0,207,209,3,40,20,0,208,206,1,0,0,0,208,209,1,
0,0,0,209,211,1,0,0,0,210,200,1,0,0,0,210,205,1,0,0,0,211,41,1,0,0,0,212,
214,5,14,0,0,213,212,1,0,0,0,214,217,1,0,0,0,215,213,1,0,0,0,215,216,1,0,
0,0,216,218,1,0,0,0,217,215,1,0,0,0,218,219,3,24,12,0,219,43,1,0,0,0,220,
223,3,52,26,0,221,222,5,26,0,0,222,224,3,52,26,0,223,221,1,0,0,0,223,224,
1,0,0,0,224,45,1,0,0,0,225,226,3,52,26,0,226,227,5,26,0,0,227,228,3,52,26,
0,228,236,1,0,0,0,229,236,5,36,0,0,230,236,5,7,0,0,231,236,5,30,0,0,232,
236,5,31,0,0,233,236,5,32,0,0,234,236,5,33,0,0,235,225,1,0,0,0,235,229,1,
0,0,0,235,230,1,0,0,0,235,231,1,0,0,0,235,232,1,0,0,0,235,233,1,0,0,0,235,
234,1,0,0,0,236,47,1,0,0,0,237,238,5,4,0,0,238,239,3,44,22,0,239,49,1,0,
0,0,240,247,5,17,0,0,241,242,3,52,26,0,242,243,5,26,0,0,243,244,5,17,0,0,
244,247,1,0,0,0,245,247,3,44,22,0,246,240,1,0,0,0,246,241,1,0,0,0,246,245,
1,0,0,0,247,51,1,0,0,0,248,249,7,7,0,0,249,53,1,0,0,0,28,59,65,72,80,84,
89,91,101,119,128,131,138,143,149,151,157,165,173,181,189,197,203,208,210,
215,223,235,246];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class xpathParser extends antlr4.Parser {

    static grammarFileName = "xpath.g4";
    static literalNames = [ null, "'processing-instruction'", "'='", "'!='", 
                            "'$'", null, null, null, "'/'", "'//'", "'('", 
                            "')'", "'['", "']'", "'-'", "'+'", "'.'", "'*'", 
                            "'..'", "'@'", "','", "'|'", "'<'", "'>'", "'<='", 
                            "'>='", "':'", "'::'", "'''", "'\"'", "'and'", 
                            "'or'", "'div'", "'mod'" ];
    static symbolicNames = [ null, null, null, null, null, "NodeType", "Number", 
                             "AxisName", "PATHSEP", "ABRPATH", "LPAR", "RPAR", 
                             "LBRAC", "RBRAC", "MINUS", "PLUS", "DOT", "MUL", 
                             "DOTDOT", "AT", "COMMA", "PIPE", "LESS", "MORE_", 
                             "LE", "GE", "COLON", "CC", "APOS", "QUOT", 
                             "AND", "OR", "DIV", "MOD", "Literal", "Whitespace", 
                             "NCName" ];
    static ruleNames = [ "main", "locationPath", "absoluteLocationPathNoroot", 
                         "relativeLocationPath", "step", "axisSpecifier", 
                         "nodeTest", "predicate", "abbreviatedStep", "expr", 
                         "primaryExpr", "functionCall", "unionExprNoRoot", 
                         "pathExprNoRoot", "filterExpr", "orExpr", "andExpr", 
                         "equalityExpr", "relationalExpr", "additiveExpr", 
                         "multiplicativeExpr", "unaryExprNoRoot", "qName", 
                         "functionName", "variableReference", "nameTest", 
                         "nCName" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = xpathParser.ruleNames;
        this.literalNames = xpathParser.literalNames;
        this.symbolicNames = xpathParser.symbolicNames;
    }



	main() {
	    let localctx = new MainContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, xpathParser.RULE_main);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.expr();
	        this.state = 55;
	        this.match(xpathParser.EOF);
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



	locationPath() {
	    let localctx = new LocationPathContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, xpathParser.RULE_locationPath);
	    try {
	        this.state = 59;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 5:
	        case 7:
	        case 16:
	        case 17:
	        case 18:
	        case 19:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 36:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 57;
	            this.relativeLocationPath();
	            break;
	        case 8:
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 58;
	            this.absoluteLocationPathNoroot();
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



	absoluteLocationPathNoroot() {
	    let localctx = new AbsoluteLocationPathNorootContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, xpathParser.RULE_absoluteLocationPathNoroot);
	    try {
	        this.state = 65;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 61;
	            this.match(xpathParser.PATHSEP);
	            this.state = 62;
	            this.relativeLocationPath();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 63;
	            this.match(xpathParser.ABRPATH);
	            this.state = 64;
	            this.relativeLocationPath();
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



	relativeLocationPath() {
	    let localctx = new RelativeLocationPathContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, xpathParser.RULE_relativeLocationPath);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.step();
	        this.state = 72;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8 || _la===9) {
	            this.state = 68;
	            _la = this._input.LA(1);
	            if(!(_la===8 || _la===9)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 69;
	            this.step();
	            this.state = 74;
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



	step() {
	    let localctx = new StepContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, xpathParser.RULE_step);
	    var _la = 0;
	    try {
	        this.state = 84;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 5:
	        case 7:
	        case 17:
	        case 19:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 36:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 75;
	            this.axisSpecifier();
	            this.state = 76;
	            this.nodeTest();
	            this.state = 80;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===12) {
	                this.state = 77;
	                this.predicate();
	                this.state = 82;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case 16:
	        case 18:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 83;
	            this.abbreviatedStep();
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



	axisSpecifier() {
	    let localctx = new AxisSpecifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, xpathParser.RULE_axisSpecifier);
	    var _la = 0;
	    try {
	        this.state = 91;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 86;
	            this.match(xpathParser.AxisName);
	            this.state = 87;
	            this.match(xpathParser.CC);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 89;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===19) {
	                this.state = 88;
	                this.match(xpathParser.AT);
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



	nodeTest() {
	    let localctx = new NodeTestContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, xpathParser.RULE_nodeTest);
	    try {
	        this.state = 101;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 93;
	            this.nameTest();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 94;
	            this.match(xpathParser.NodeType);
	            this.state = 95;
	            this.match(xpathParser.LPAR);
	            this.state = 96;
	            this.match(xpathParser.RPAR);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 97;
	            this.match(xpathParser.T__0);
	            this.state = 98;
	            this.match(xpathParser.LPAR);
	            this.state = 99;
	            this.match(xpathParser.Literal);
	            this.state = 100;
	            this.match(xpathParser.RPAR);
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



	predicate() {
	    let localctx = new PredicateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, xpathParser.RULE_predicate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        this.match(xpathParser.LBRAC);
	        this.state = 104;
	        this.expr();
	        this.state = 105;
	        this.match(xpathParser.RBRAC);
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



	abbreviatedStep() {
	    let localctx = new AbbreviatedStepContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, xpathParser.RULE_abbreviatedStep);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        _la = this._input.LA(1);
	        if(!(_la===16 || _la===18)) {
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



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, xpathParser.RULE_expr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        this.orExpr();
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



	primaryExpr() {
	    let localctx = new PrimaryExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, xpathParser.RULE_primaryExpr);
	    try {
	        this.state = 119;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 111;
	            this.variableReference();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 112;
	            this.match(xpathParser.LPAR);
	            this.state = 113;
	            this.expr();
	            this.state = 114;
	            this.match(xpathParser.RPAR);
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 116;
	            this.match(xpathParser.Literal);
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 117;
	            this.match(xpathParser.Number);
	            break;
	        case 5:
	        case 7:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 36:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 118;
	            this.functionCall();
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



	functionCall() {
	    let localctx = new FunctionCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, xpathParser.RULE_functionCall);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this.functionName();
	        this.state = 122;
	        this.match(xpathParser.LPAR);
	        this.state = 131;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 3222226930) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 23) !== 0)) {
	            this.state = 123;
	            this.expr();
	            this.state = 128;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===20) {
	                this.state = 124;
	                this.match(xpathParser.COMMA);
	                this.state = 125;
	                this.expr();
	                this.state = 130;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 133;
	        this.match(xpathParser.RPAR);
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



	unionExprNoRoot() {
	    let localctx = new UnionExprNoRootContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, xpathParser.RULE_unionExprNoRoot);
	    var _la = 0;
	    try {
	        this.state = 143;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 135;
	            this.pathExprNoRoot();
	            this.state = 138;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===21) {
	                this.state = 136;
	                this.match(xpathParser.PIPE);
	                this.state = 137;
	                this.unionExprNoRoot();
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 140;
	            this.match(xpathParser.PATHSEP);
	            this.state = 141;
	            this.match(xpathParser.PIPE);
	            this.state = 142;
	            this.unionExprNoRoot();
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



	pathExprNoRoot() {
	    let localctx = new PathExprNoRootContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, xpathParser.RULE_pathExprNoRoot);
	    var _la = 0;
	    try {
	        this.state = 151;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 145;
	            this.locationPath();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 146;
	            this.filterExpr();
	            this.state = 149;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===8 || _la===9) {
	                this.state = 147;
	                _la = this._input.LA(1);
	                if(!(_la===8 || _la===9)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 148;
	                this.relativeLocationPath();
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



	filterExpr() {
	    let localctx = new FilterExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, xpathParser.RULE_filterExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        this.primaryExpr();
	        this.state = 157;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===12) {
	            this.state = 154;
	            this.predicate();
	            this.state = 159;
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



	orExpr() {
	    let localctx = new OrExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, xpathParser.RULE_orExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
	        this.andExpr();
	        this.state = 165;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===31) {
	            this.state = 161;
	            this.match(xpathParser.OR);
	            this.state = 162;
	            this.andExpr();
	            this.state = 167;
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



	andExpr() {
	    let localctx = new AndExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, xpathParser.RULE_andExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        this.equalityExpr();
	        this.state = 173;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===30) {
	            this.state = 169;
	            this.match(xpathParser.AND);
	            this.state = 170;
	            this.equalityExpr();
	            this.state = 175;
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



	equalityExpr() {
	    let localctx = new EqualityExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, xpathParser.RULE_equalityExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 176;
	        this.relationalExpr();
	        this.state = 181;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2 || _la===3) {
	            this.state = 177;
	            _la = this._input.LA(1);
	            if(!(_la===2 || _la===3)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 178;
	            this.relationalExpr();
	            this.state = 183;
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



	relationalExpr() {
	    let localctx = new RelationalExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, xpathParser.RULE_relationalExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        this.additiveExpr();
	        this.state = 189;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 62914560) !== 0)) {
	            this.state = 185;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 62914560) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 186;
	            this.additiveExpr();
	            this.state = 191;
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



	additiveExpr() {
	    let localctx = new AdditiveExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, xpathParser.RULE_additiveExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 192;
	        this.multiplicativeExpr();
	        this.state = 197;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===14 || _la===15) {
	            this.state = 193;
	            _la = this._input.LA(1);
	            if(!(_la===14 || _la===15)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 194;
	            this.multiplicativeExpr();
	            this.state = 199;
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



	multiplicativeExpr() {
	    let localctx = new MultiplicativeExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, xpathParser.RULE_multiplicativeExpr);
	    var _la = 0;
	    try {
	        this.state = 210;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 200;
	            this.unaryExprNoRoot();
	            this.state = 203;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 17)) & ~0x1f) === 0 && ((1 << (_la - 17)) & 98305) !== 0)) {
	                this.state = 201;
	                _la = this._input.LA(1);
	                if(!(((((_la - 17)) & ~0x1f) === 0 && ((1 << (_la - 17)) & 98305) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 202;
	                this.multiplicativeExpr();
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 205;
	            this.match(xpathParser.PATHSEP);
	            this.state = 208;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===32 || _la===33) {
	                this.state = 206;
	                _la = this._input.LA(1);
	                if(!(_la===32 || _la===33)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 207;
	                this.multiplicativeExpr();
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



	unaryExprNoRoot() {
	    let localctx = new UnaryExprNoRootContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, xpathParser.RULE_unaryExprNoRoot);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===14) {
	            this.state = 212;
	            this.match(xpathParser.MINUS);
	            this.state = 217;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 218;
	        this.unionExprNoRoot();
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



	qName() {
	    let localctx = new QNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, xpathParser.RULE_qName);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 220;
	        this.nCName();
	        this.state = 223;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===26) {
	            this.state = 221;
	            this.match(xpathParser.COLON);
	            this.state = 222;
	            this.nCName();
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



	functionName() {
	    let localctx = new FunctionNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, xpathParser.RULE_functionName);
	    try {
	        this.state = 235;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 225;
	            this.nCName();
	            this.state = 226;
	            this.match(xpathParser.COLON);
	            this.state = 227;
	            this.nCName();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 229;
	            this.match(xpathParser.NCName);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 230;
	            this.match(xpathParser.AxisName);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 231;
	            this.match(xpathParser.AND);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 232;
	            this.match(xpathParser.OR);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 233;
	            this.match(xpathParser.DIV);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 234;
	            this.match(xpathParser.MOD);
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



	variableReference() {
	    let localctx = new VariableReferenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, xpathParser.RULE_variableReference);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 237;
	        this.match(xpathParser.T__3);
	        this.state = 238;
	        this.qName();
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



	nameTest() {
	    let localctx = new NameTestContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, xpathParser.RULE_nameTest);
	    try {
	        this.state = 246;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 240;
	            this.match(xpathParser.MUL);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 241;
	            this.nCName();
	            this.state = 242;
	            this.match(xpathParser.COLON);
	            this.state = 243;
	            this.match(xpathParser.MUL);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 245;
	            this.qName();
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



	nCName() {
	    let localctx = new NCNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, xpathParser.RULE_nCName);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 248;
	        _la = this._input.LA(1);
	        if(!(((((_la - 5)) & ~0x1f) === 0 && ((1 << (_la - 5)) & 2650800133) !== 0))) {
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

xpathParser.EOF = antlr4.Token.EOF;
xpathParser.T__0 = 1;
xpathParser.T__1 = 2;
xpathParser.T__2 = 3;
xpathParser.T__3 = 4;
xpathParser.NodeType = 5;
xpathParser.Number = 6;
xpathParser.AxisName = 7;
xpathParser.PATHSEP = 8;
xpathParser.ABRPATH = 9;
xpathParser.LPAR = 10;
xpathParser.RPAR = 11;
xpathParser.LBRAC = 12;
xpathParser.RBRAC = 13;
xpathParser.MINUS = 14;
xpathParser.PLUS = 15;
xpathParser.DOT = 16;
xpathParser.MUL = 17;
xpathParser.DOTDOT = 18;
xpathParser.AT = 19;
xpathParser.COMMA = 20;
xpathParser.PIPE = 21;
xpathParser.LESS = 22;
xpathParser.MORE_ = 23;
xpathParser.LE = 24;
xpathParser.GE = 25;
xpathParser.COLON = 26;
xpathParser.CC = 27;
xpathParser.APOS = 28;
xpathParser.QUOT = 29;
xpathParser.AND = 30;
xpathParser.OR = 31;
xpathParser.DIV = 32;
xpathParser.MOD = 33;
xpathParser.Literal = 34;
xpathParser.Whitespace = 35;
xpathParser.NCName = 36;

xpathParser.RULE_main = 0;
xpathParser.RULE_locationPath = 1;
xpathParser.RULE_absoluteLocationPathNoroot = 2;
xpathParser.RULE_relativeLocationPath = 3;
xpathParser.RULE_step = 4;
xpathParser.RULE_axisSpecifier = 5;
xpathParser.RULE_nodeTest = 6;
xpathParser.RULE_predicate = 7;
xpathParser.RULE_abbreviatedStep = 8;
xpathParser.RULE_expr = 9;
xpathParser.RULE_primaryExpr = 10;
xpathParser.RULE_functionCall = 11;
xpathParser.RULE_unionExprNoRoot = 12;
xpathParser.RULE_pathExprNoRoot = 13;
xpathParser.RULE_filterExpr = 14;
xpathParser.RULE_orExpr = 15;
xpathParser.RULE_andExpr = 16;
xpathParser.RULE_equalityExpr = 17;
xpathParser.RULE_relationalExpr = 18;
xpathParser.RULE_additiveExpr = 19;
xpathParser.RULE_multiplicativeExpr = 20;
xpathParser.RULE_unaryExprNoRoot = 21;
xpathParser.RULE_qName = 22;
xpathParser.RULE_functionName = 23;
xpathParser.RULE_variableReference = 24;
xpathParser.RULE_nameTest = 25;
xpathParser.RULE_nCName = 26;

class MainContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xpathParser.RULE_main;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	EOF() {
	    return this.getToken(xpathParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.enterMain(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.exitMain(this);
		}
	}


}



class LocationPathContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xpathParser.RULE_locationPath;
    }

	relativeLocationPath() {
	    return this.getTypedRuleContext(RelativeLocationPathContext,0);
	};

	absoluteLocationPathNoroot() {
	    return this.getTypedRuleContext(AbsoluteLocationPathNorootContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.enterLocationPath(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.exitLocationPath(this);
		}
	}


}



class AbsoluteLocationPathNorootContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xpathParser.RULE_absoluteLocationPathNoroot;
    }

	PATHSEP() {
	    return this.getToken(xpathParser.PATHSEP, 0);
	};

	relativeLocationPath() {
	    return this.getTypedRuleContext(RelativeLocationPathContext,0);
	};

	ABRPATH() {
	    return this.getToken(xpathParser.ABRPATH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.enterAbsoluteLocationPathNoroot(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.exitAbsoluteLocationPathNoroot(this);
		}
	}


}



class RelativeLocationPathContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xpathParser.RULE_relativeLocationPath;
    }

	step = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StepContext);
	    } else {
	        return this.getTypedRuleContext(StepContext,i);
	    }
	};

	PATHSEP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(xpathParser.PATHSEP);
	    } else {
	        return this.getToken(xpathParser.PATHSEP, i);
	    }
	};


	ABRPATH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(xpathParser.ABRPATH);
	    } else {
	        return this.getToken(xpathParser.ABRPATH, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.enterRelativeLocationPath(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.exitRelativeLocationPath(this);
		}
	}


}



class StepContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xpathParser.RULE_step;
    }

	axisSpecifier() {
	    return this.getTypedRuleContext(AxisSpecifierContext,0);
	};

	nodeTest() {
	    return this.getTypedRuleContext(NodeTestContext,0);
	};

	predicate = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PredicateContext);
	    } else {
	        return this.getTypedRuleContext(PredicateContext,i);
	    }
	};

	abbreviatedStep() {
	    return this.getTypedRuleContext(AbbreviatedStepContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.enterStep(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.exitStep(this);
		}
	}


}



class AxisSpecifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xpathParser.RULE_axisSpecifier;
    }

	AxisName() {
	    return this.getToken(xpathParser.AxisName, 0);
	};

	CC() {
	    return this.getToken(xpathParser.CC, 0);
	};

	AT() {
	    return this.getToken(xpathParser.AT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.enterAxisSpecifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.exitAxisSpecifier(this);
		}
	}


}



class NodeTestContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xpathParser.RULE_nodeTest;
    }

	nameTest() {
	    return this.getTypedRuleContext(NameTestContext,0);
	};

	NodeType() {
	    return this.getToken(xpathParser.NodeType, 0);
	};

	LPAR() {
	    return this.getToken(xpathParser.LPAR, 0);
	};

	RPAR() {
	    return this.getToken(xpathParser.RPAR, 0);
	};

	Literal() {
	    return this.getToken(xpathParser.Literal, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.enterNodeTest(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.exitNodeTest(this);
		}
	}


}



class PredicateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xpathParser.RULE_predicate;
    }

	LBRAC() {
	    return this.getToken(xpathParser.LBRAC, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	RBRAC() {
	    return this.getToken(xpathParser.RBRAC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.enterPredicate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.exitPredicate(this);
		}
	}


}



class AbbreviatedStepContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xpathParser.RULE_abbreviatedStep;
    }

	DOT() {
	    return this.getToken(xpathParser.DOT, 0);
	};

	DOTDOT() {
	    return this.getToken(xpathParser.DOTDOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.enterAbbreviatedStep(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.exitAbbreviatedStep(this);
		}
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xpathParser.RULE_expr;
    }

	orExpr() {
	    return this.getTypedRuleContext(OrExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.exitExpr(this);
		}
	}


}



class PrimaryExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xpathParser.RULE_primaryExpr;
    }

	variableReference() {
	    return this.getTypedRuleContext(VariableReferenceContext,0);
	};

	LPAR() {
	    return this.getToken(xpathParser.LPAR, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	RPAR() {
	    return this.getToken(xpathParser.RPAR, 0);
	};

	Literal() {
	    return this.getToken(xpathParser.Literal, 0);
	};

	Number() {
	    return this.getToken(xpathParser.Number, 0);
	};

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.enterPrimaryExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.exitPrimaryExpr(this);
		}
	}


}



class FunctionCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xpathParser.RULE_functionCall;
    }

	functionName() {
	    return this.getTypedRuleContext(FunctionNameContext,0);
	};

	LPAR() {
	    return this.getToken(xpathParser.LPAR, 0);
	};

	RPAR() {
	    return this.getToken(xpathParser.RPAR, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(xpathParser.COMMA);
	    } else {
	        return this.getToken(xpathParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.enterFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.exitFunctionCall(this);
		}
	}


}



class UnionExprNoRootContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xpathParser.RULE_unionExprNoRoot;
    }

	pathExprNoRoot() {
	    return this.getTypedRuleContext(PathExprNoRootContext,0);
	};

	PIPE() {
	    return this.getToken(xpathParser.PIPE, 0);
	};

	unionExprNoRoot() {
	    return this.getTypedRuleContext(UnionExprNoRootContext,0);
	};

	PATHSEP() {
	    return this.getToken(xpathParser.PATHSEP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.enterUnionExprNoRoot(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.exitUnionExprNoRoot(this);
		}
	}


}



class PathExprNoRootContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xpathParser.RULE_pathExprNoRoot;
    }

	locationPath() {
	    return this.getTypedRuleContext(LocationPathContext,0);
	};

	filterExpr() {
	    return this.getTypedRuleContext(FilterExprContext,0);
	};

	relativeLocationPath() {
	    return this.getTypedRuleContext(RelativeLocationPathContext,0);
	};

	PATHSEP() {
	    return this.getToken(xpathParser.PATHSEP, 0);
	};

	ABRPATH() {
	    return this.getToken(xpathParser.ABRPATH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.enterPathExprNoRoot(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.exitPathExprNoRoot(this);
		}
	}


}



class FilterExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xpathParser.RULE_filterExpr;
    }

	primaryExpr() {
	    return this.getTypedRuleContext(PrimaryExprContext,0);
	};

	predicate = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PredicateContext);
	    } else {
	        return this.getTypedRuleContext(PredicateContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.enterFilterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.exitFilterExpr(this);
		}
	}


}



class OrExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xpathParser.RULE_orExpr;
    }

	andExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AndExprContext);
	    } else {
	        return this.getTypedRuleContext(AndExprContext,i);
	    }
	};

	OR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(xpathParser.OR);
	    } else {
	        return this.getToken(xpathParser.OR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.enterOrExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.exitOrExpr(this);
		}
	}


}



class AndExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xpathParser.RULE_andExpr;
    }

	equalityExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EqualityExprContext);
	    } else {
	        return this.getTypedRuleContext(EqualityExprContext,i);
	    }
	};

	AND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(xpathParser.AND);
	    } else {
	        return this.getToken(xpathParser.AND, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.enterAndExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.exitAndExpr(this);
		}
	}


}



class EqualityExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xpathParser.RULE_equalityExpr;
    }

	relationalExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RelationalExprContext);
	    } else {
	        return this.getTypedRuleContext(RelationalExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.enterEqualityExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.exitEqualityExpr(this);
		}
	}


}



class RelationalExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xpathParser.RULE_relationalExpr;
    }

	additiveExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AdditiveExprContext);
	    } else {
	        return this.getTypedRuleContext(AdditiveExprContext,i);
	    }
	};

	LESS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(xpathParser.LESS);
	    } else {
	        return this.getToken(xpathParser.LESS, i);
	    }
	};


	MORE_ = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(xpathParser.MORE_);
	    } else {
	        return this.getToken(xpathParser.MORE_, i);
	    }
	};


	LE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(xpathParser.LE);
	    } else {
	        return this.getToken(xpathParser.LE, i);
	    }
	};


	GE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(xpathParser.GE);
	    } else {
	        return this.getToken(xpathParser.GE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.enterRelationalExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.exitRelationalExpr(this);
		}
	}


}



class AdditiveExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xpathParser.RULE_additiveExpr;
    }

	multiplicativeExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MultiplicativeExprContext);
	    } else {
	        return this.getTypedRuleContext(MultiplicativeExprContext,i);
	    }
	};

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(xpathParser.PLUS);
	    } else {
	        return this.getToken(xpathParser.PLUS, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(xpathParser.MINUS);
	    } else {
	        return this.getToken(xpathParser.MINUS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.enterAdditiveExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.exitAdditiveExpr(this);
		}
	}


}



class MultiplicativeExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xpathParser.RULE_multiplicativeExpr;
    }

	unaryExprNoRoot() {
	    return this.getTypedRuleContext(UnaryExprNoRootContext,0);
	};

	multiplicativeExpr() {
	    return this.getTypedRuleContext(MultiplicativeExprContext,0);
	};

	MUL() {
	    return this.getToken(xpathParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(xpathParser.DIV, 0);
	};

	MOD() {
	    return this.getToken(xpathParser.MOD, 0);
	};

	PATHSEP() {
	    return this.getToken(xpathParser.PATHSEP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.enterMultiplicativeExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.exitMultiplicativeExpr(this);
		}
	}


}



class UnaryExprNoRootContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xpathParser.RULE_unaryExprNoRoot;
    }

	unionExprNoRoot() {
	    return this.getTypedRuleContext(UnionExprNoRootContext,0);
	};

	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(xpathParser.MINUS);
	    } else {
	        return this.getToken(xpathParser.MINUS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.enterUnaryExprNoRoot(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.exitUnaryExprNoRoot(this);
		}
	}


}



class QNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xpathParser.RULE_qName;
    }

	nCName = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NCNameContext);
	    } else {
	        return this.getTypedRuleContext(NCNameContext,i);
	    }
	};

	COLON() {
	    return this.getToken(xpathParser.COLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.enterQName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.exitQName(this);
		}
	}


}



class FunctionNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xpathParser.RULE_functionName;
    }

	nCName = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NCNameContext);
	    } else {
	        return this.getTypedRuleContext(NCNameContext,i);
	    }
	};

	COLON() {
	    return this.getToken(xpathParser.COLON, 0);
	};

	NCName() {
	    return this.getToken(xpathParser.NCName, 0);
	};

	AxisName() {
	    return this.getToken(xpathParser.AxisName, 0);
	};

	AND() {
	    return this.getToken(xpathParser.AND, 0);
	};

	OR() {
	    return this.getToken(xpathParser.OR, 0);
	};

	DIV() {
	    return this.getToken(xpathParser.DIV, 0);
	};

	MOD() {
	    return this.getToken(xpathParser.MOD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.enterFunctionName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.exitFunctionName(this);
		}
	}


}



class VariableReferenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xpathParser.RULE_variableReference;
    }

	qName() {
	    return this.getTypedRuleContext(QNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.enterVariableReference(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.exitVariableReference(this);
		}
	}


}



class NameTestContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xpathParser.RULE_nameTest;
    }

	MUL() {
	    return this.getToken(xpathParser.MUL, 0);
	};

	nCName() {
	    return this.getTypedRuleContext(NCNameContext,0);
	};

	COLON() {
	    return this.getToken(xpathParser.COLON, 0);
	};

	qName() {
	    return this.getTypedRuleContext(QNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.enterNameTest(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.exitNameTest(this);
		}
	}


}



class NCNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xpathParser.RULE_nCName;
    }

	NCName() {
	    return this.getToken(xpathParser.NCName, 0);
	};

	AxisName() {
	    return this.getToken(xpathParser.AxisName, 0);
	};

	NodeType() {
	    return this.getToken(xpathParser.NodeType, 0);
	};

	AND() {
	    return this.getToken(xpathParser.AND, 0);
	};

	OR() {
	    return this.getToken(xpathParser.OR, 0);
	};

	DIV() {
	    return this.getToken(xpathParser.DIV, 0);
	};

	MOD() {
	    return this.getToken(xpathParser.MOD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.enterNCName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xpathListener ) {
	        listener.exitNCName(this);
		}
	}


}




xpathParser.MainContext = MainContext; 
xpathParser.LocationPathContext = LocationPathContext; 
xpathParser.AbsoluteLocationPathNorootContext = AbsoluteLocationPathNorootContext; 
xpathParser.RelativeLocationPathContext = RelativeLocationPathContext; 
xpathParser.StepContext = StepContext; 
xpathParser.AxisSpecifierContext = AxisSpecifierContext; 
xpathParser.NodeTestContext = NodeTestContext; 
xpathParser.PredicateContext = PredicateContext; 
xpathParser.AbbreviatedStepContext = AbbreviatedStepContext; 
xpathParser.ExprContext = ExprContext; 
xpathParser.PrimaryExprContext = PrimaryExprContext; 
xpathParser.FunctionCallContext = FunctionCallContext; 
xpathParser.UnionExprNoRootContext = UnionExprNoRootContext; 
xpathParser.PathExprNoRootContext = PathExprNoRootContext; 
xpathParser.FilterExprContext = FilterExprContext; 
xpathParser.OrExprContext = OrExprContext; 
xpathParser.AndExprContext = AndExprContext; 
xpathParser.EqualityExprContext = EqualityExprContext; 
xpathParser.RelationalExprContext = RelationalExprContext; 
xpathParser.AdditiveExprContext = AdditiveExprContext; 
xpathParser.MultiplicativeExprContext = MultiplicativeExprContext; 
xpathParser.UnaryExprNoRootContext = UnaryExprNoRootContext; 
xpathParser.QNameContext = QNameContext; 
xpathParser.FunctionNameContext = FunctionNameContext; 
xpathParser.VariableReferenceContext = VariableReferenceContext; 
xpathParser.NameTestContext = NameTestContext; 
xpathParser.NCNameContext = NCNameContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
