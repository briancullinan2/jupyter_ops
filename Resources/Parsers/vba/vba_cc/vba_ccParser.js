// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/vba/vba_cc/vba_cc.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import vba_ccListener from './vba_ccListener.js';
const serializedATN = [4,1,78,240,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,1,0,1,0,3,0,49,8,0,1,0,1,0,5,0,53,8,0,10,0,12,
0,56,9,0,1,0,1,0,1,1,1,1,1,1,1,2,1,2,1,2,3,2,66,8,2,1,3,1,3,3,3,70,8,3,1,
3,1,3,5,3,74,8,3,10,3,12,3,77,9,3,3,3,79,8,3,1,4,1,4,1,5,1,5,1,5,4,5,86,
8,5,11,5,12,5,87,1,6,1,6,1,6,1,6,1,6,1,6,3,6,96,8,6,1,7,1,7,1,8,1,8,3,8,
102,8,8,1,8,5,8,105,8,8,10,8,12,8,108,9,8,1,8,3,8,111,8,8,1,8,1,8,1,9,4,
9,116,8,9,11,9,12,9,117,1,9,1,9,1,9,1,9,3,9,124,8,9,1,10,1,10,3,10,128,8,
10,1,11,4,11,131,8,11,11,11,12,11,132,1,11,1,11,1,11,1,11,3,11,139,8,11,
1,12,1,12,3,12,143,8,12,1,13,4,13,146,8,13,11,13,12,13,147,1,13,1,13,3,13,
152,8,13,1,14,4,14,155,8,14,11,14,12,14,156,1,14,1,14,3,14,161,8,14,1,15,
1,15,3,15,165,8,15,1,16,1,16,1,17,1,17,1,17,1,18,1,18,1,19,1,19,1,19,1,19,
1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,191,
8,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,
19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,
1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,5,19,229,8,19,10,19,12,19,232,9,
19,1,20,1,20,1,21,1,21,1,22,1,22,1,22,0,1,38,23,0,2,4,6,8,10,12,14,16,18,
20,22,24,26,28,30,32,34,36,38,40,42,44,0,10,2,0,43,46,67,67,1,0,67,67,1,
0,75,76,1,0,4,10,1,0,14,15,2,0,13,13,18,18,2,0,49,49,59,64,5,0,48,48,50,
51,65,65,69,69,72,74,1,0,25,42,1,0,53,58,258,0,48,1,0,0,0,2,59,1,0,0,0,4,
62,1,0,0,0,6,67,1,0,0,0,8,80,1,0,0,0,10,85,1,0,0,0,12,89,1,0,0,0,14,97,1,
0,0,0,16,99,1,0,0,0,18,115,1,0,0,0,20,125,1,0,0,0,22,130,1,0,0,0,24,140,
1,0,0,0,26,145,1,0,0,0,28,154,1,0,0,0,30,164,1,0,0,0,32,166,1,0,0,0,34,168,
1,0,0,0,36,171,1,0,0,0,38,190,1,0,0,0,40,233,1,0,0,0,42,235,1,0,0,0,44,237,
1,0,0,0,46,49,3,2,1,0,47,49,3,4,2,0,48,46,1,0,0,0,48,47,1,0,0,0,49,50,1,
0,0,0,50,54,3,8,4,0,51,53,5,67,0,0,52,51,1,0,0,0,53,56,1,0,0,0,54,52,1,0,
0,0,54,55,1,0,0,0,55,57,1,0,0,0,56,54,1,0,0,0,57,58,5,0,0,1,58,1,1,0,0,0,
59,60,5,1,0,0,60,61,5,69,0,0,61,3,1,0,0,0,62,63,5,2,0,0,63,65,5,73,0,0,64,
66,5,3,0,0,65,64,1,0,0,0,65,66,1,0,0,0,66,5,1,0,0,0,67,69,5,67,0,0,68,70,
5,78,0,0,69,68,1,0,0,0,69,70,1,0,0,0,70,78,1,0,0,0,71,75,8,0,0,0,72,74,8,
1,0,0,73,72,1,0,0,0,74,77,1,0,0,0,75,73,1,0,0,0,75,76,1,0,0,0,76,79,1,0,
0,0,77,75,1,0,0,0,78,71,1,0,0,0,78,79,1,0,0,0,79,7,1,0,0,0,80,81,3,10,5,
0,81,9,1,0,0,0,82,86,3,12,6,0,83,86,3,16,8,0,84,86,3,6,3,0,85,82,1,0,0,0,
85,83,1,0,0,0,85,84,1,0,0,0,86,87,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,
11,1,0,0,0,89,90,5,67,0,0,90,91,5,43,0,0,91,92,3,14,7,0,92,93,5,59,0,0,93,
95,3,38,19,0,94,96,5,77,0,0,95,94,1,0,0,0,95,96,1,0,0,0,96,13,1,0,0,0,97,
98,3,30,15,0,98,15,1,0,0,0,99,101,3,18,9,0,100,102,3,10,5,0,101,100,1,0,
0,0,101,102,1,0,0,0,102,106,1,0,0,0,103,105,3,20,10,0,104,103,1,0,0,0,105,
108,1,0,0,0,106,104,1,0,0,0,106,107,1,0,0,0,107,110,1,0,0,0,108,106,1,0,
0,0,109,111,3,24,12,0,110,109,1,0,0,0,110,111,1,0,0,0,111,112,1,0,0,0,112,
113,3,28,14,0,113,17,1,0,0,0,114,116,5,67,0,0,115,114,1,0,0,0,116,117,1,
0,0,0,117,115,1,0,0,0,117,118,1,0,0,0,118,119,1,0,0,0,119,120,5,44,0,0,120,
121,3,38,19,0,121,123,5,52,0,0,122,124,5,77,0,0,123,122,1,0,0,0,123,124,
1,0,0,0,124,19,1,0,0,0,125,127,3,22,11,0,126,128,3,10,5,0,127,126,1,0,0,
0,127,128,1,0,0,0,128,21,1,0,0,0,129,131,5,67,0,0,130,129,1,0,0,0,131,132,
1,0,0,0,132,130,1,0,0,0,132,133,1,0,0,0,133,134,1,0,0,0,134,135,5,45,0,0,
135,136,3,38,19,0,136,138,5,52,0,0,137,139,5,77,0,0,138,137,1,0,0,0,138,
139,1,0,0,0,139,23,1,0,0,0,140,142,3,26,13,0,141,143,3,10,5,0,142,141,1,
0,0,0,142,143,1,0,0,0,143,25,1,0,0,0,144,146,5,67,0,0,145,144,1,0,0,0,146,
147,1,0,0,0,147,145,1,0,0,0,147,148,1,0,0,0,148,149,1,0,0,0,149,151,5,46,
0,0,150,152,5,77,0,0,151,150,1,0,0,0,151,152,1,0,0,0,152,27,1,0,0,0,153,
155,5,67,0,0,154,153,1,0,0,0,155,156,1,0,0,0,156,154,1,0,0,0,156,157,1,0,
0,0,157,158,1,0,0,0,158,160,5,47,0,0,159,161,5,77,0,0,160,159,1,0,0,0,160,
161,1,0,0,0,161,29,1,0,0,0,162,165,3,32,16,0,163,165,3,34,17,0,164,162,1,
0,0,0,164,163,1,0,0,0,165,31,1,0,0,0,166,167,7,2,0,0,167,33,1,0,0,0,168,
169,5,75,0,0,169,170,3,36,18,0,170,35,1,0,0,0,171,172,7,3,0,0,172,37,1,0,
0,0,173,174,6,19,-1,0,174,191,3,40,20,0,175,191,3,44,22,0,176,191,5,75,0,
0,177,178,5,11,0,0,178,179,3,38,19,0,179,180,5,12,0,0,180,191,1,0,0,0,181,
182,5,13,0,0,182,191,3,38,19,14,183,184,3,42,21,0,184,185,5,11,0,0,185,186,
3,38,19,0,186,187,5,12,0,0,187,191,1,0,0,0,188,189,5,19,0,0,189,191,3,38,
19,6,190,173,1,0,0,0,190,175,1,0,0,0,190,176,1,0,0,0,190,177,1,0,0,0,190,
181,1,0,0,0,190,183,1,0,0,0,190,188,1,0,0,0,191,230,1,0,0,0,192,193,10,15,
0,0,193,194,5,10,0,0,194,229,3,38,19,16,195,196,10,13,0,0,196,197,7,4,0,
0,197,229,3,38,19,14,198,199,10,12,0,0,199,200,5,16,0,0,200,229,3,38,19,
13,201,202,10,11,0,0,202,203,5,17,0,0,203,229,3,38,19,12,204,205,10,10,0,
0,205,206,7,5,0,0,206,229,3,38,19,11,207,208,10,9,0,0,208,209,5,4,0,0,209,
229,3,38,19,10,210,211,10,8,0,0,211,212,7,6,0,0,212,229,3,38,19,9,213,214,
10,5,0,0,214,215,5,20,0,0,215,229,3,38,19,6,216,217,10,4,0,0,217,218,5,21,
0,0,218,229,3,38,19,5,219,220,10,3,0,0,220,221,5,22,0,0,221,229,3,38,19,
4,222,223,10,2,0,0,223,224,5,23,0,0,224,229,3,38,19,3,225,226,10,1,0,0,226,
227,5,24,0,0,227,229,3,38,19,2,228,192,1,0,0,0,228,195,1,0,0,0,228,198,1,
0,0,0,228,201,1,0,0,0,228,204,1,0,0,0,228,207,1,0,0,0,228,210,1,0,0,0,228,
213,1,0,0,0,228,216,1,0,0,0,228,219,1,0,0,0,228,222,1,0,0,0,228,225,1,0,
0,0,229,232,1,0,0,0,230,228,1,0,0,0,230,231,1,0,0,0,231,39,1,0,0,0,232,230,
1,0,0,0,233,234,7,7,0,0,234,41,1,0,0,0,235,236,7,8,0,0,236,43,1,0,0,0,237,
238,7,9,0,0,238,45,1,0,0,0,26,48,54,65,69,75,78,85,87,95,101,106,110,117,
123,127,132,138,142,147,151,156,160,164,190,228,230];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class vba_ccParser extends antlr4.Parser {

    static grammarFileName = "vba_cc.g4";
    static literalNames = [ null, "'ATTRIBUTE VB_NAME = '", "'VERSION'", 
                            "'CLASS'", "'&'", "'%'", "'#'", "'!'", "'@'", 
                            "'$'", "'^'", "'('", "')'", "'-'", "'*'", "'/'", 
                            "'\\'", "'MOD'", "'+'", "'NOT'", "'AND'", "'OR'", 
                            "'XOR'", "'EQV'", "'IMP'", "'INT'", "'FIX'", 
                            "'ABS'", "'SGN'", "'LEN'", "'LENB'", "'CBOOL'", 
                            "'CBYTE'", "'CCUR'", "'CDATE'", "'CDBL'", "'CINT'", 
                            "'CLNG'", "'CLNGLNG'", "'CLNGPTR'", "'CSNG'", 
                            "'CSTR'", "'CVAR'", "'#CONST'", "'#IF'", "'#ELSEIF'", 
                            "'#ELSE'", null, "'EMPTY'", "'LIKE'", "'NOTHING'", 
                            "'NULL'", "'THEN'", "'WIN16'", "'WIN32'", "'WIN64'", 
                            "'VBA6'", "'VBA7'", "'MAC'", "'='", null, "'>'", 
                            null, "'<'", null, null, null, null, "'''" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, "CONST", "IF", "ELSEIF", 
                             "ELSE", "ENDIF", "EMPTY_", "LIKE", "NOTHING", 
                             "NULL_", "THEN", "WIN16_", "WIN32_", "WIN64_", 
                             "VBA6", "VBA7", "MAC", "EQ", "GEQ", "GT", "LEQ", 
                             "LT", "NEQ", "BOOLEANLITERAL", "MISC", "NEWLINE", 
                             "SINGLEQUOTE", "STRINGLITERAL", "OCTLITERAL", 
                             "HEXLITERAL", "INTEGERLITERAL", "FLOATLITERAL", 
                             "DATELITERAL", "IDENTIFIER", "FOREIGN_NAME", 
                             "COMMENT", "WS" ];
    static ruleNames = [ "startRule", "proceduralModuleHeader", "classFileHeader", 
                         "logicalLine", "conditionalModuleBody", "ccBlock", 
                         "ccConst", "ccVarLhs", "ccIfBlock", "ccIf", "ccElseifBlock", 
                         "ccElseif", "ccElseBlock", "ccElse", "ccEndif", 
                         "name", "untypedName", "typedName", "typeSuffix", 
                         "ccExpression", "literalExpression", "ccFunc", 
                         "reservedKeywords" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = vba_ccParser.ruleNames;
        this.literalNames = vba_ccParser.literalNames;
        this.symbolicNames = vba_ccParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 19:
    	    		return this.ccExpression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    ccExpression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 15);
    		case 1:
    			return this.precpred(this._ctx, 13);
    		case 2:
    			return this.precpred(this._ctx, 12);
    		case 3:
    			return this.precpred(this._ctx, 11);
    		case 4:
    			return this.precpred(this._ctx, 10);
    		case 5:
    			return this.precpred(this._ctx, 9);
    		case 6:
    			return this.precpred(this._ctx, 8);
    		case 7:
    			return this.precpred(this._ctx, 5);
    		case 8:
    			return this.precpred(this._ctx, 4);
    		case 9:
    			return this.precpred(this._ctx, 3);
    		case 10:
    			return this.precpred(this._ctx, 2);
    		case 11:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	startRule() {
	    let localctx = new StartRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, vba_ccParser.RULE_startRule);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.state = 46;
	            this.proceduralModuleHeader();
	            break;
	        case 2:
	            this.state = 47;
	            this.classFileHeader();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 50;
	        this.conditionalModuleBody();
	        this.state = 54;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===67) {
	            this.state = 51;
	            this.match(vba_ccParser.NEWLINE);
	            this.state = 56;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 57;
	        this.match(vba_ccParser.EOF);
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



	proceduralModuleHeader() {
	    let localctx = new ProceduralModuleHeaderContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, vba_ccParser.RULE_proceduralModuleHeader);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.match(vba_ccParser.T__0);
	        this.state = 60;
	        this.match(vba_ccParser.STRINGLITERAL);
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



	classFileHeader() {
	    let localctx = new ClassFileHeaderContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, vba_ccParser.RULE_classFileHeader);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(vba_ccParser.T__1);
	        this.state = 63;
	        this.match(vba_ccParser.FLOATLITERAL);
	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 64;
	            this.match(vba_ccParser.T__2);
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



	logicalLine() {
	    let localctx = new LogicalLineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, vba_ccParser.RULE_logicalLine);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(vba_ccParser.NEWLINE);
	        this.state = 69;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        if(la_===1) {
	            this.state = 68;
	            this.match(vba_ccParser.WS);

	        }
	        this.state = 78;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4294936575) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 32759) !== 0)) {
	            this.state = 71;
	            _la = this._input.LA(1);
	            if(_la<=0 || ((((_la - 43)) & ~0x1f) === 0 && ((1 << (_la - 43)) & 16777231) !== 0)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 75;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 32759) !== 0)) {
	                this.state = 72;
	                _la = this._input.LA(1);
	                if(_la<=0 || _la===67) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 77;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
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



	conditionalModuleBody() {
	    let localctx = new ConditionalModuleBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, vba_ccParser.RULE_conditionalModuleBody);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.ccBlock();
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



	ccBlock() {
	    let localctx = new CcBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, vba_ccParser.RULE_ccBlock);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 85;
	        		this._errHandler.sync(this);
	        		var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        		switch(la_) {
	        		case 1:
	        		    this.state = 82;
	        		    this.ccConst();
	        		    break;

	        		case 2:
	        		    this.state = 83;
	        		    this.ccIfBlock();
	        		    break;

	        		case 3:
	        		    this.state = 84;
	        		    this.logicalLine();
	        		    break;

	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 87; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,7, this._ctx);
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



	ccConst() {
	    let localctx = new CcConstContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, vba_ccParser.RULE_ccConst);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.match(vba_ccParser.NEWLINE);
	        this.state = 90;
	        this.match(vba_ccParser.CONST);
	        this.state = 91;
	        this.ccVarLhs();
	        this.state = 92;
	        this.match(vba_ccParser.EQ);
	        this.state = 93;
	        this.ccExpression(0);
	        this.state = 95;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===77) {
	            this.state = 94;
	            this.match(vba_ccParser.COMMENT);
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



	ccVarLhs() {
	    let localctx = new CcVarLhsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, vba_ccParser.RULE_ccVarLhs);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
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



	ccIfBlock() {
	    let localctx = new CcIfBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, vba_ccParser.RULE_ccIfBlock);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        this.ccIf();
	        this.state = 101;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        if(la_===1) {
	            this.state = 100;
	            this.ccBlock();

	        }
	        this.state = 106;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 103;
	                this.ccElseifBlock(); 
	            }
	            this.state = 108;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	        }

	        this.state = 110;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        if(la_===1) {
	            this.state = 109;
	            this.ccElseBlock();

	        }
	        this.state = 112;
	        this.ccEndif();
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



	ccIf() {
	    let localctx = new CcIfContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, vba_ccParser.RULE_ccIf);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 114;
	            this.match(vba_ccParser.NEWLINE);
	            this.state = 117; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===67);
	        this.state = 119;
	        this.match(vba_ccParser.IF);
	        this.state = 120;
	        this.ccExpression(0);
	        this.state = 121;
	        this.match(vba_ccParser.THEN);
	        this.state = 123;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===77) {
	            this.state = 122;
	            this.match(vba_ccParser.COMMENT);
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



	ccElseifBlock() {
	    let localctx = new CcElseifBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, vba_ccParser.RULE_ccElseifBlock);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        this.ccElseif();
	        this.state = 127;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        if(la_===1) {
	            this.state = 126;
	            this.ccBlock();

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



	ccElseif() {
	    let localctx = new CcElseifContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, vba_ccParser.RULE_ccElseif);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 129;
	            this.match(vba_ccParser.NEWLINE);
	            this.state = 132; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===67);
	        this.state = 134;
	        this.match(vba_ccParser.ELSEIF);
	        this.state = 135;
	        this.ccExpression(0);
	        this.state = 136;
	        this.match(vba_ccParser.THEN);
	        this.state = 138;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===77) {
	            this.state = 137;
	            this.match(vba_ccParser.COMMENT);
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



	ccElseBlock() {
	    let localctx = new CcElseBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, vba_ccParser.RULE_ccElseBlock);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        this.ccElse();
	        this.state = 142;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        if(la_===1) {
	            this.state = 141;
	            this.ccBlock();

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



	ccElse() {
	    let localctx = new CcElseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, vba_ccParser.RULE_ccElse);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 144;
	            this.match(vba_ccParser.NEWLINE);
	            this.state = 147; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===67);
	        this.state = 149;
	        this.match(vba_ccParser.ELSE);
	        this.state = 151;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===77) {
	            this.state = 150;
	            this.match(vba_ccParser.COMMENT);
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



	ccEndif() {
	    let localctx = new CcEndifContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, vba_ccParser.RULE_ccEndif);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 153;
	            this.match(vba_ccParser.NEWLINE);
	            this.state = 156; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===67);
	        this.state = 158;
	        this.match(vba_ccParser.ENDIF);
	        this.state = 160;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===77) {
	            this.state = 159;
	            this.match(vba_ccParser.COMMENT);
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
	    this.enterRule(localctx, 30, vba_ccParser.RULE_name);
	    try {
	        this.state = 164;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 162;
	            this.untypedName();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 163;
	            this.typedName();
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



	untypedName() {
	    let localctx = new UntypedNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, vba_ccParser.RULE_untypedName);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 166;
	        _la = this._input.LA(1);
	        if(!(_la===75 || _la===76)) {
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



	typedName() {
	    let localctx = new TypedNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, vba_ccParser.RULE_typedName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        this.match(vba_ccParser.IDENTIFIER);
	        this.state = 169;
	        this.typeSuffix();
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



	typeSuffix() {
	    let localctx = new TypeSuffixContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, vba_ccParser.RULE_typeSuffix);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 171;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 2032) !== 0))) {
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


	ccExpression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new CcExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 38;
	    this.enterRecursionRule(localctx, 38, vba_ccParser.RULE_ccExpression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 190;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 48:
	        case 50:
	        case 51:
	        case 65:
	        case 69:
	        case 72:
	        case 73:
	        case 74:
	            localctx = new LiteralExpressContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 174;
	            this.literalExpression();
	            break;
	        case 53:
	        case 54:
	        case 55:
	        case 56:
	        case 57:
	        case 58:
	            localctx = new IdentifierExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 175;
	            this.reservedKeywords();
	            break;
	        case 75:
	            localctx = new IdentifierExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 176;
	            this.match(vba_ccParser.IDENTIFIER);
	            break;
	        case 11:
	            localctx = new ParenthesizedExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 177;
	            this.match(vba_ccParser.T__10);
	            this.state = 178;
	            this.ccExpression(0);
	            this.state = 179;
	            this.match(vba_ccParser.T__11);
	            break;
	        case 13:
	            localctx = new UnaryMinusExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 181;
	            this.match(vba_ccParser.T__12);
	            this.state = 182;
	            this.ccExpression(14);
	            break;
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	        case 41:
	        case 42:
	            localctx = new IndexExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 183;
	            this.ccFunc();
	            this.state = 184;
	            this.match(vba_ccParser.T__10);
	            this.state = 185;
	            this.ccExpression(0);
	            this.state = 186;
	            this.match(vba_ccParser.T__11);
	            break;
	        case 19:
	            localctx = new NotOperatorExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 188;
	            this.match(vba_ccParser.T__18);
	            this.state = 189;
	            this.ccExpression(6);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 230;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,25,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 228;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ArithmeticExpressionContext(this, new CcExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, vba_ccParser.RULE_ccExpression);
	                    this.state = 192;
	                    if (!( this.precpred(this._ctx, 15))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
	                    }

	                    this.state = 193;
	                    this.match(vba_ccParser.T__9);
	                    this.state = 194;
	                    this.ccExpression(16);
	                    break;

	                case 2:
	                    localctx = new ArithmeticExpressionContext(this, new CcExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, vba_ccParser.RULE_ccExpression);
	                    this.state = 195;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 196;
	                    _la = this._input.LA(1);
	                    if(!(_la===14 || _la===15)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 197;
	                    this.ccExpression(14);
	                    break;

	                case 3:
	                    localctx = new ArithmeticExpressionContext(this, new CcExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, vba_ccParser.RULE_ccExpression);
	                    this.state = 198;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 199;
	                    this.match(vba_ccParser.T__15);
	                    this.state = 200;
	                    this.ccExpression(13);
	                    break;

	                case 4:
	                    localctx = new ArithmeticExpressionContext(this, new CcExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, vba_ccParser.RULE_ccExpression);
	                    this.state = 201;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 202;
	                    this.match(vba_ccParser.T__16);
	                    this.state = 203;
	                    this.ccExpression(12);
	                    break;

	                case 5:
	                    localctx = new ArithmeticExpressionContext(this, new CcExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, vba_ccParser.RULE_ccExpression);
	                    this.state = 204;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 205;
	                    _la = this._input.LA(1);
	                    if(!(_la===13 || _la===18)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 206;
	                    this.ccExpression(11);
	                    break;

	                case 6:
	                    localctx = new ConcatExpressionContext(this, new CcExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, vba_ccParser.RULE_ccExpression);
	                    this.state = 207;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 208;
	                    this.match(vba_ccParser.T__3);
	                    this.state = 209;
	                    this.ccExpression(10);
	                    break;

	                case 7:
	                    localctx = new RelationExpressionContext(this, new CcExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, vba_ccParser.RULE_ccExpression);
	                    this.state = 210;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 211;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 49)) & ~0x1f) === 0 && ((1 << (_la - 49)) & 64513) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 212;
	                    this.ccExpression(9);
	                    break;

	                case 8:
	                    localctx = new BooleanExpressionContext(this, new CcExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, vba_ccParser.RULE_ccExpression);
	                    this.state = 213;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 214;
	                    this.match(vba_ccParser.T__19);
	                    this.state = 215;
	                    this.ccExpression(6);
	                    break;

	                case 9:
	                    localctx = new BooleanExpressionContext(this, new CcExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, vba_ccParser.RULE_ccExpression);
	                    this.state = 216;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 217;
	                    this.match(vba_ccParser.T__20);
	                    this.state = 218;
	                    this.ccExpression(5);
	                    break;

	                case 10:
	                    localctx = new BooleanExpressionContext(this, new CcExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, vba_ccParser.RULE_ccExpression);
	                    this.state = 219;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 220;
	                    this.match(vba_ccParser.T__21);
	                    this.state = 221;
	                    this.ccExpression(4);
	                    break;

	                case 11:
	                    localctx = new BooleanExpressionContext(this, new CcExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, vba_ccParser.RULE_ccExpression);
	                    this.state = 222;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 223;
	                    this.match(vba_ccParser.T__22);
	                    this.state = 224;
	                    this.ccExpression(3);
	                    break;

	                case 12:
	                    localctx = new BooleanExpressionContext(this, new CcExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, vba_ccParser.RULE_ccExpression);
	                    this.state = 225;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 226;
	                    this.match(vba_ccParser.T__23);
	                    this.state = 227;
	                    this.ccExpression(2);
	                    break;

	                } 
	            }
	            this.state = 232;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,25,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	literalExpression() {
	    let localctx = new LiteralExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, vba_ccParser.RULE_literalExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 233;
	        _la = this._input.LA(1);
	        if(!(((((_la - 48)) & ~0x1f) === 0 && ((1 << (_la - 48)) & 119668749) !== 0))) {
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



	ccFunc() {
	    let localctx = new CcFuncContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, vba_ccParser.RULE_ccFunc);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 235;
	        _la = this._input.LA(1);
	        if(!(((((_la - 25)) & ~0x1f) === 0 && ((1 << (_la - 25)) & 262143) !== 0))) {
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



	reservedKeywords() {
	    let localctx = new ReservedKeywordsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, vba_ccParser.RULE_reservedKeywords);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 237;
	        _la = this._input.LA(1);
	        if(!(((((_la - 53)) & ~0x1f) === 0 && ((1 << (_la - 53)) & 63) !== 0))) {
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

vba_ccParser.EOF = antlr4.Token.EOF;
vba_ccParser.T__0 = 1;
vba_ccParser.T__1 = 2;
vba_ccParser.T__2 = 3;
vba_ccParser.T__3 = 4;
vba_ccParser.T__4 = 5;
vba_ccParser.T__5 = 6;
vba_ccParser.T__6 = 7;
vba_ccParser.T__7 = 8;
vba_ccParser.T__8 = 9;
vba_ccParser.T__9 = 10;
vba_ccParser.T__10 = 11;
vba_ccParser.T__11 = 12;
vba_ccParser.T__12 = 13;
vba_ccParser.T__13 = 14;
vba_ccParser.T__14 = 15;
vba_ccParser.T__15 = 16;
vba_ccParser.T__16 = 17;
vba_ccParser.T__17 = 18;
vba_ccParser.T__18 = 19;
vba_ccParser.T__19 = 20;
vba_ccParser.T__20 = 21;
vba_ccParser.T__21 = 22;
vba_ccParser.T__22 = 23;
vba_ccParser.T__23 = 24;
vba_ccParser.T__24 = 25;
vba_ccParser.T__25 = 26;
vba_ccParser.T__26 = 27;
vba_ccParser.T__27 = 28;
vba_ccParser.T__28 = 29;
vba_ccParser.T__29 = 30;
vba_ccParser.T__30 = 31;
vba_ccParser.T__31 = 32;
vba_ccParser.T__32 = 33;
vba_ccParser.T__33 = 34;
vba_ccParser.T__34 = 35;
vba_ccParser.T__35 = 36;
vba_ccParser.T__36 = 37;
vba_ccParser.T__37 = 38;
vba_ccParser.T__38 = 39;
vba_ccParser.T__39 = 40;
vba_ccParser.T__40 = 41;
vba_ccParser.T__41 = 42;
vba_ccParser.CONST = 43;
vba_ccParser.IF = 44;
vba_ccParser.ELSEIF = 45;
vba_ccParser.ELSE = 46;
vba_ccParser.ENDIF = 47;
vba_ccParser.EMPTY_ = 48;
vba_ccParser.LIKE = 49;
vba_ccParser.NOTHING = 50;
vba_ccParser.NULL_ = 51;
vba_ccParser.THEN = 52;
vba_ccParser.WIN16_ = 53;
vba_ccParser.WIN32_ = 54;
vba_ccParser.WIN64_ = 55;
vba_ccParser.VBA6 = 56;
vba_ccParser.VBA7 = 57;
vba_ccParser.MAC = 58;
vba_ccParser.EQ = 59;
vba_ccParser.GEQ = 60;
vba_ccParser.GT = 61;
vba_ccParser.LEQ = 62;
vba_ccParser.LT = 63;
vba_ccParser.NEQ = 64;
vba_ccParser.BOOLEANLITERAL = 65;
vba_ccParser.MISC = 66;
vba_ccParser.NEWLINE = 67;
vba_ccParser.SINGLEQUOTE = 68;
vba_ccParser.STRINGLITERAL = 69;
vba_ccParser.OCTLITERAL = 70;
vba_ccParser.HEXLITERAL = 71;
vba_ccParser.INTEGERLITERAL = 72;
vba_ccParser.FLOATLITERAL = 73;
vba_ccParser.DATELITERAL = 74;
vba_ccParser.IDENTIFIER = 75;
vba_ccParser.FOREIGN_NAME = 76;
vba_ccParser.COMMENT = 77;
vba_ccParser.WS = 78;

vba_ccParser.RULE_startRule = 0;
vba_ccParser.RULE_proceduralModuleHeader = 1;
vba_ccParser.RULE_classFileHeader = 2;
vba_ccParser.RULE_logicalLine = 3;
vba_ccParser.RULE_conditionalModuleBody = 4;
vba_ccParser.RULE_ccBlock = 5;
vba_ccParser.RULE_ccConst = 6;
vba_ccParser.RULE_ccVarLhs = 7;
vba_ccParser.RULE_ccIfBlock = 8;
vba_ccParser.RULE_ccIf = 9;
vba_ccParser.RULE_ccElseifBlock = 10;
vba_ccParser.RULE_ccElseif = 11;
vba_ccParser.RULE_ccElseBlock = 12;
vba_ccParser.RULE_ccElse = 13;
vba_ccParser.RULE_ccEndif = 14;
vba_ccParser.RULE_name = 15;
vba_ccParser.RULE_untypedName = 16;
vba_ccParser.RULE_typedName = 17;
vba_ccParser.RULE_typeSuffix = 18;
vba_ccParser.RULE_ccExpression = 19;
vba_ccParser.RULE_literalExpression = 20;
vba_ccParser.RULE_ccFunc = 21;
vba_ccParser.RULE_reservedKeywords = 22;

class StartRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vba_ccParser.RULE_startRule;
    }

	conditionalModuleBody() {
	    return this.getTypedRuleContext(ConditionalModuleBodyContext,0);
	};

	EOF() {
	    return this.getToken(vba_ccParser.EOF, 0);
	};

	proceduralModuleHeader() {
	    return this.getTypedRuleContext(ProceduralModuleHeaderContext,0);
	};

	classFileHeader() {
	    return this.getTypedRuleContext(ClassFileHeaderContext,0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(vba_ccParser.NEWLINE);
	    } else {
	        return this.getToken(vba_ccParser.NEWLINE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.enterStartRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.exitStartRule(this);
		}
	}


}



class ProceduralModuleHeaderContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vba_ccParser.RULE_proceduralModuleHeader;
    }

	STRINGLITERAL() {
	    return this.getToken(vba_ccParser.STRINGLITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.enterProceduralModuleHeader(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.exitProceduralModuleHeader(this);
		}
	}


}



class ClassFileHeaderContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vba_ccParser.RULE_classFileHeader;
    }

	FLOATLITERAL() {
	    return this.getToken(vba_ccParser.FLOATLITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.enterClassFileHeader(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.exitClassFileHeader(this);
		}
	}


}



class LogicalLineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vba_ccParser.RULE_logicalLine;
    }

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(vba_ccParser.NEWLINE);
	    } else {
	        return this.getToken(vba_ccParser.NEWLINE, i);
	    }
	};


	WS() {
	    return this.getToken(vba_ccParser.WS, 0);
	};

	CONST() {
	    return this.getToken(vba_ccParser.CONST, 0);
	};

	IF() {
	    return this.getToken(vba_ccParser.IF, 0);
	};

	ELSEIF() {
	    return this.getToken(vba_ccParser.ELSEIF, 0);
	};

	ELSE() {
	    return this.getToken(vba_ccParser.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.enterLogicalLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.exitLogicalLine(this);
		}
	}


}



class ConditionalModuleBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vba_ccParser.RULE_conditionalModuleBody;
    }

	ccBlock() {
	    return this.getTypedRuleContext(CcBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.enterConditionalModuleBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.exitConditionalModuleBody(this);
		}
	}


}



class CcBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vba_ccParser.RULE_ccBlock;
    }

	ccConst = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CcConstContext);
	    } else {
	        return this.getTypedRuleContext(CcConstContext,i);
	    }
	};

	ccIfBlock = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CcIfBlockContext);
	    } else {
	        return this.getTypedRuleContext(CcIfBlockContext,i);
	    }
	};

	logicalLine = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LogicalLineContext);
	    } else {
	        return this.getTypedRuleContext(LogicalLineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.enterCcBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.exitCcBlock(this);
		}
	}


}



class CcConstContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vba_ccParser.RULE_ccConst;
    }

	NEWLINE() {
	    return this.getToken(vba_ccParser.NEWLINE, 0);
	};

	CONST() {
	    return this.getToken(vba_ccParser.CONST, 0);
	};

	ccVarLhs() {
	    return this.getTypedRuleContext(CcVarLhsContext,0);
	};

	EQ() {
	    return this.getToken(vba_ccParser.EQ, 0);
	};

	ccExpression() {
	    return this.getTypedRuleContext(CcExpressionContext,0);
	};

	COMMENT() {
	    return this.getToken(vba_ccParser.COMMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.enterCcConst(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.exitCcConst(this);
		}
	}


}



class CcVarLhsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vba_ccParser.RULE_ccVarLhs;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.enterCcVarLhs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.exitCcVarLhs(this);
		}
	}


}



class CcIfBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vba_ccParser.RULE_ccIfBlock;
    }

	ccIf() {
	    return this.getTypedRuleContext(CcIfContext,0);
	};

	ccEndif() {
	    return this.getTypedRuleContext(CcEndifContext,0);
	};

	ccBlock() {
	    return this.getTypedRuleContext(CcBlockContext,0);
	};

	ccElseifBlock = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CcElseifBlockContext);
	    } else {
	        return this.getTypedRuleContext(CcElseifBlockContext,i);
	    }
	};

	ccElseBlock() {
	    return this.getTypedRuleContext(CcElseBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.enterCcIfBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.exitCcIfBlock(this);
		}
	}


}



class CcIfContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vba_ccParser.RULE_ccIf;
    }

	IF() {
	    return this.getToken(vba_ccParser.IF, 0);
	};

	ccExpression() {
	    return this.getTypedRuleContext(CcExpressionContext,0);
	};

	THEN() {
	    return this.getToken(vba_ccParser.THEN, 0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(vba_ccParser.NEWLINE);
	    } else {
	        return this.getToken(vba_ccParser.NEWLINE, i);
	    }
	};


	COMMENT() {
	    return this.getToken(vba_ccParser.COMMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.enterCcIf(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.exitCcIf(this);
		}
	}


}



class CcElseifBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vba_ccParser.RULE_ccElseifBlock;
    }

	ccElseif() {
	    return this.getTypedRuleContext(CcElseifContext,0);
	};

	ccBlock() {
	    return this.getTypedRuleContext(CcBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.enterCcElseifBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.exitCcElseifBlock(this);
		}
	}


}



class CcElseifContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vba_ccParser.RULE_ccElseif;
    }

	ELSEIF() {
	    return this.getToken(vba_ccParser.ELSEIF, 0);
	};

	ccExpression() {
	    return this.getTypedRuleContext(CcExpressionContext,0);
	};

	THEN() {
	    return this.getToken(vba_ccParser.THEN, 0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(vba_ccParser.NEWLINE);
	    } else {
	        return this.getToken(vba_ccParser.NEWLINE, i);
	    }
	};


	COMMENT() {
	    return this.getToken(vba_ccParser.COMMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.enterCcElseif(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.exitCcElseif(this);
		}
	}


}



class CcElseBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vba_ccParser.RULE_ccElseBlock;
    }

	ccElse() {
	    return this.getTypedRuleContext(CcElseContext,0);
	};

	ccBlock() {
	    return this.getTypedRuleContext(CcBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.enterCcElseBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.exitCcElseBlock(this);
		}
	}


}



class CcElseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vba_ccParser.RULE_ccElse;
    }

	ELSE() {
	    return this.getToken(vba_ccParser.ELSE, 0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(vba_ccParser.NEWLINE);
	    } else {
	        return this.getToken(vba_ccParser.NEWLINE, i);
	    }
	};


	COMMENT() {
	    return this.getToken(vba_ccParser.COMMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.enterCcElse(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.exitCcElse(this);
		}
	}


}



class CcEndifContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vba_ccParser.RULE_ccEndif;
    }

	ENDIF() {
	    return this.getToken(vba_ccParser.ENDIF, 0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(vba_ccParser.NEWLINE);
	    } else {
	        return this.getToken(vba_ccParser.NEWLINE, i);
	    }
	};


	COMMENT() {
	    return this.getToken(vba_ccParser.COMMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.enterCcEndif(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.exitCcEndif(this);
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
        this.ruleIndex = vba_ccParser.RULE_name;
    }

	untypedName() {
	    return this.getTypedRuleContext(UntypedNameContext,0);
	};

	typedName() {
	    return this.getTypedRuleContext(TypedNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.exitName(this);
		}
	}


}



class UntypedNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vba_ccParser.RULE_untypedName;
    }

	IDENTIFIER() {
	    return this.getToken(vba_ccParser.IDENTIFIER, 0);
	};

	FOREIGN_NAME() {
	    return this.getToken(vba_ccParser.FOREIGN_NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.enterUntypedName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.exitUntypedName(this);
		}
	}


}



class TypedNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vba_ccParser.RULE_typedName;
    }

	IDENTIFIER() {
	    return this.getToken(vba_ccParser.IDENTIFIER, 0);
	};

	typeSuffix() {
	    return this.getTypedRuleContext(TypeSuffixContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.enterTypedName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.exitTypedName(this);
		}
	}


}



class TypeSuffixContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vba_ccParser.RULE_typeSuffix;
    }


	enterRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.enterTypeSuffix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.exitTypeSuffix(this);
		}
	}


}



class CcExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vba_ccParser.RULE_ccExpression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ParenthesizedExpressionContext extends CcExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ccExpression() {
	    return this.getTypedRuleContext(CcExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.enterParenthesizedExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.exitParenthesizedExpression(this);
		}
	}


}

vba_ccParser.ParenthesizedExpressionContext = ParenthesizedExpressionContext;

class LiteralExpressContext extends CcExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	literalExpression() {
	    return this.getTypedRuleContext(LiteralExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.enterLiteralExpress(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.exitLiteralExpress(this);
		}
	}


}

vba_ccParser.LiteralExpressContext = LiteralExpressContext;

class UnaryMinusExpressionContext extends CcExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ccExpression() {
	    return this.getTypedRuleContext(CcExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.enterUnaryMinusExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.exitUnaryMinusExpression(this);
		}
	}


}

vba_ccParser.UnaryMinusExpressionContext = UnaryMinusExpressionContext;

class RelationExpressionContext extends CcExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ccExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CcExpressionContext);
	    } else {
	        return this.getTypedRuleContext(CcExpressionContext,i);
	    }
	};

	EQ() {
	    return this.getToken(vba_ccParser.EQ, 0);
	};

	NEQ() {
	    return this.getToken(vba_ccParser.NEQ, 0);
	};

	GT() {
	    return this.getToken(vba_ccParser.GT, 0);
	};

	GEQ() {
	    return this.getToken(vba_ccParser.GEQ, 0);
	};

	LEQ() {
	    return this.getToken(vba_ccParser.LEQ, 0);
	};

	LT() {
	    return this.getToken(vba_ccParser.LT, 0);
	};

	LIKE() {
	    return this.getToken(vba_ccParser.LIKE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.enterRelationExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.exitRelationExpression(this);
		}
	}


}

vba_ccParser.RelationExpressionContext = RelationExpressionContext;

class IndexExpressionContext extends CcExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ccFunc() {
	    return this.getTypedRuleContext(CcFuncContext,0);
	};

	ccExpression() {
	    return this.getTypedRuleContext(CcExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.enterIndexExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.exitIndexExpression(this);
		}
	}


}

vba_ccParser.IndexExpressionContext = IndexExpressionContext;

class NotOperatorExpressionContext extends CcExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ccExpression() {
	    return this.getTypedRuleContext(CcExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.enterNotOperatorExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.exitNotOperatorExpression(this);
		}
	}


}

vba_ccParser.NotOperatorExpressionContext = NotOperatorExpressionContext;

class ConcatExpressionContext extends CcExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ccExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CcExpressionContext);
	    } else {
	        return this.getTypedRuleContext(CcExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.enterConcatExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.exitConcatExpression(this);
		}
	}


}

vba_ccParser.ConcatExpressionContext = ConcatExpressionContext;

class ArithmeticExpressionContext extends CcExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ccExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CcExpressionContext);
	    } else {
	        return this.getTypedRuleContext(CcExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.enterArithmeticExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.exitArithmeticExpression(this);
		}
	}


}

vba_ccParser.ArithmeticExpressionContext = ArithmeticExpressionContext;

class BooleanExpressionContext extends CcExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ccExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CcExpressionContext);
	    } else {
	        return this.getTypedRuleContext(CcExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.enterBooleanExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.exitBooleanExpression(this);
		}
	}


}

vba_ccParser.BooleanExpressionContext = BooleanExpressionContext;

class IdentifierExpressionContext extends CcExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	reservedKeywords() {
	    return this.getTypedRuleContext(ReservedKeywordsContext,0);
	};

	IDENTIFIER() {
	    return this.getToken(vba_ccParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.enterIdentifierExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.exitIdentifierExpression(this);
		}
	}


}

vba_ccParser.IdentifierExpressionContext = IdentifierExpressionContext;

class LiteralExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vba_ccParser.RULE_literalExpression;
    }

	BOOLEANLITERAL() {
	    return this.getToken(vba_ccParser.BOOLEANLITERAL, 0);
	};

	FLOATLITERAL() {
	    return this.getToken(vba_ccParser.FLOATLITERAL, 0);
	};

	INTEGERLITERAL() {
	    return this.getToken(vba_ccParser.INTEGERLITERAL, 0);
	};

	STRINGLITERAL() {
	    return this.getToken(vba_ccParser.STRINGLITERAL, 0);
	};

	DATELITERAL() {
	    return this.getToken(vba_ccParser.DATELITERAL, 0);
	};

	EMPTY_() {
	    return this.getToken(vba_ccParser.EMPTY_, 0);
	};

	NULL_() {
	    return this.getToken(vba_ccParser.NULL_, 0);
	};

	NOTHING() {
	    return this.getToken(vba_ccParser.NOTHING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.enterLiteralExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.exitLiteralExpression(this);
		}
	}


}



class CcFuncContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vba_ccParser.RULE_ccFunc;
    }


	enterRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.enterCcFunc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.exitCcFunc(this);
		}
	}


}



class ReservedKeywordsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vba_ccParser.RULE_reservedKeywords;
    }

	WIN16_() {
	    return this.getToken(vba_ccParser.WIN16_, 0);
	};

	WIN32_() {
	    return this.getToken(vba_ccParser.WIN32_, 0);
	};

	WIN64_() {
	    return this.getToken(vba_ccParser.WIN64_, 0);
	};

	VBA6() {
	    return this.getToken(vba_ccParser.VBA6, 0);
	};

	VBA7() {
	    return this.getToken(vba_ccParser.VBA7, 0);
	};

	MAC() {
	    return this.getToken(vba_ccParser.MAC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.enterReservedKeywords(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_ccListener ) {
	        listener.exitReservedKeywords(this);
		}
	}


}




vba_ccParser.StartRuleContext = StartRuleContext; 
vba_ccParser.ProceduralModuleHeaderContext = ProceduralModuleHeaderContext; 
vba_ccParser.ClassFileHeaderContext = ClassFileHeaderContext; 
vba_ccParser.LogicalLineContext = LogicalLineContext; 
vba_ccParser.ConditionalModuleBodyContext = ConditionalModuleBodyContext; 
vba_ccParser.CcBlockContext = CcBlockContext; 
vba_ccParser.CcConstContext = CcConstContext; 
vba_ccParser.CcVarLhsContext = CcVarLhsContext; 
vba_ccParser.CcIfBlockContext = CcIfBlockContext; 
vba_ccParser.CcIfContext = CcIfContext; 
vba_ccParser.CcElseifBlockContext = CcElseifBlockContext; 
vba_ccParser.CcElseifContext = CcElseifContext; 
vba_ccParser.CcElseBlockContext = CcElseBlockContext; 
vba_ccParser.CcElseContext = CcElseContext; 
vba_ccParser.CcEndifContext = CcEndifContext; 
vba_ccParser.NameContext = NameContext; 
vba_ccParser.UntypedNameContext = UntypedNameContext; 
vba_ccParser.TypedNameContext = TypedNameContext; 
vba_ccParser.TypeSuffixContext = TypeSuffixContext; 
vba_ccParser.CcExpressionContext = CcExpressionContext; 
vba_ccParser.LiteralExpressionContext = LiteralExpressionContext; 
vba_ccParser.CcFuncContext = CcFuncContext; 
vba_ccParser.ReservedKeywordsContext = ReservedKeywordsContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
