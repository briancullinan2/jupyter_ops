// Generated from Resources/Parsers/kquery/KQuery.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import KQueryListener from './KQueryListener.js';
const serializedATN = [4,1,71,311,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,1,0,1,0,1,0,1,1,5,1,79,8,1,10,1,12,1,82,9,1,1,2,1,
2,3,2,86,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,3,4,97,8,4,3,4,99,8,4,1,
5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,5,7,110,8,7,10,7,12,7,113,9,7,1,8,5,8,
116,8,8,10,8,12,8,119,9,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,
9,1,10,1,10,1,11,1,11,1,11,1,11,1,11,3,11,140,8,11,1,12,1,12,1,12,1,12,1,
12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,
1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,
12,1,12,3,12,177,8,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,186,8,12,1,
12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,
1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,210,8,12,1,12,1,12,1,12,1,12,1,12,
1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,225,8,12,1,12,1,12,1,12,1,12,
1,12,3,12,232,8,12,1,13,1,13,1,14,1,14,1,15,1,15,1,15,3,15,241,8,15,1,15,
1,15,3,15,245,8,15,1,15,1,15,1,15,3,15,250,8,15,1,16,1,16,1,17,1,17,1,18,
1,18,1,19,1,19,1,20,1,20,1,21,1,21,1,22,1,22,1,23,1,23,1,24,1,24,1,24,1,
24,1,24,1,24,1,24,1,24,5,24,276,8,24,10,24,12,24,279,9,24,1,25,1,25,1,26,
1,26,1,27,1,27,1,28,1,28,1,29,1,29,1,30,1,30,1,31,4,31,294,8,31,11,31,12,
31,295,1,32,1,32,1,32,3,32,301,8,32,1,33,1,33,1,34,1,34,1,35,1,35,1,36,1,
36,1,36,0,0,37,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,
42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,0,5,2,0,31,31,34,35,1,0,
29,30,2,0,24,26,39,41,1,0,42,51,1,0,52,58,305,0,74,1,0,0,0,2,80,1,0,0,0,
4,85,1,0,0,0,6,87,1,0,0,0,8,93,1,0,0,0,10,100,1,0,0,0,12,104,1,0,0,0,14,
111,1,0,0,0,16,117,1,0,0,0,18,120,1,0,0,0,20,132,1,0,0,0,22,139,1,0,0,0,
24,231,1,0,0,0,26,233,1,0,0,0,28,235,1,0,0,0,30,249,1,0,0,0,32,251,1,0,0,
0,34,253,1,0,0,0,36,255,1,0,0,0,38,257,1,0,0,0,40,259,1,0,0,0,42,261,1,0,
0,0,44,263,1,0,0,0,46,265,1,0,0,0,48,267,1,0,0,0,50,280,1,0,0,0,52,282,1,
0,0,0,54,284,1,0,0,0,56,286,1,0,0,0,58,288,1,0,0,0,60,290,1,0,0,0,62,293,
1,0,0,0,64,300,1,0,0,0,66,302,1,0,0,0,68,304,1,0,0,0,70,306,1,0,0,0,72,308,
1,0,0,0,74,75,3,2,1,0,75,76,5,0,0,1,76,1,1,0,0,0,77,79,3,4,2,0,78,77,1,0,
0,0,79,82,1,0,0,0,80,78,1,0,0,0,80,81,1,0,0,0,81,3,1,0,0,0,82,80,1,0,0,0,
83,86,3,18,9,0,84,86,3,6,3,0,85,83,1,0,0,0,85,84,1,0,0,0,86,5,1,0,0,0,87,
88,5,66,0,0,88,89,5,16,0,0,89,90,3,10,5,0,90,91,3,8,4,0,91,92,5,67,0,0,92,
7,1,0,0,0,93,98,3,24,12,0,94,96,3,10,5,0,95,97,3,12,6,0,96,95,1,0,0,0,96,
97,1,0,0,0,97,99,1,0,0,0,98,94,1,0,0,0,98,99,1,0,0,0,99,9,1,0,0,0,100,101,
5,68,0,0,101,102,3,14,7,0,102,103,5,69,0,0,103,11,1,0,0,0,104,105,5,68,0,
0,105,106,3,16,8,0,106,107,5,69,0,0,107,13,1,0,0,0,108,110,3,24,12,0,109,
108,1,0,0,0,110,113,1,0,0,0,111,109,1,0,0,0,111,112,1,0,0,0,112,15,1,0,0,
0,113,111,1,0,0,0,114,116,5,59,0,0,115,114,1,0,0,0,116,119,1,0,0,0,117,115,
1,0,0,0,117,118,1,0,0,0,118,17,1,0,0,0,119,117,1,0,0,0,120,121,5,17,0,0,
121,122,3,60,30,0,122,123,5,68,0,0,123,124,3,20,10,0,124,125,5,69,0,0,125,
126,5,19,0,0,126,127,3,56,28,0,127,128,5,20,0,0,128,129,3,58,29,0,129,130,
5,21,0,0,130,131,3,22,11,0,131,19,1,0,0,0,132,133,5,3,0,0,133,21,1,0,0,0,
134,140,5,18,0,0,135,136,5,68,0,0,136,137,3,62,31,0,137,138,5,69,0,0,138,
140,1,0,0,0,139,134,1,0,0,0,139,135,1,0,0,0,140,23,1,0,0,0,141,232,3,42,
21,0,142,143,3,42,21,0,143,144,5,19,0,0,144,145,3,24,12,0,145,232,1,0,0,
0,146,147,5,66,0,0,147,148,3,72,36,0,148,149,3,64,32,0,149,150,5,67,0,0,
150,232,1,0,0,0,151,152,5,66,0,0,152,153,3,54,27,0,153,154,3,72,36,0,154,
155,3,44,22,0,155,156,3,46,23,0,156,157,5,67,0,0,157,232,1,0,0,0,158,159,
5,66,0,0,159,160,3,32,16,0,160,161,5,68,0,0,161,162,3,72,36,0,162,163,5,
69,0,0,163,164,3,24,12,0,164,165,5,67,0,0,165,232,1,0,0,0,166,167,5,66,0,
0,167,168,3,50,25,0,168,169,3,72,36,0,169,170,3,44,22,0,170,171,3,46,23,
0,171,172,5,67,0,0,172,232,1,0,0,0,173,174,5,66,0,0,174,176,3,52,26,0,175,
177,3,72,36,0,176,175,1,0,0,0,176,177,1,0,0,0,177,178,1,0,0,0,178,179,3,
44,22,0,179,180,3,46,23,0,180,181,5,67,0,0,181,232,1,0,0,0,182,183,5,66,
0,0,183,185,3,34,17,0,184,186,3,72,36,0,185,184,1,0,0,0,185,186,1,0,0,0,
186,187,1,0,0,0,187,188,3,44,22,0,188,189,3,46,23,0,189,190,5,67,0,0,190,
232,1,0,0,0,191,192,5,66,0,0,192,193,3,40,20,0,193,194,3,72,36,0,194,195,
3,64,32,0,195,196,3,24,12,0,196,197,5,67,0,0,197,232,1,0,0,0,198,199,5,66,
0,0,199,200,3,28,14,0,200,201,3,72,36,0,201,202,3,24,12,0,202,203,5,67,0,
0,203,232,1,0,0,0,204,205,5,66,0,0,205,206,3,26,13,0,206,207,3,72,36,0,207,
209,3,24,12,0,208,210,3,30,15,0,209,208,1,0,0,0,209,210,1,0,0,0,210,211,
1,0,0,0,211,212,5,67,0,0,212,232,1,0,0,0,213,214,5,66,0,0,214,215,3,38,19,
0,215,216,3,72,36,0,216,217,3,44,22,0,217,218,3,46,23,0,218,219,3,24,12,
0,219,220,5,67,0,0,220,232,1,0,0,0,221,222,5,66,0,0,222,224,3,36,18,0,223,
225,3,72,36,0,224,223,1,0,0,0,224,225,1,0,0,0,225,226,1,0,0,0,226,227,3,
24,12,0,227,228,5,67,0,0,228,232,1,0,0,0,229,232,3,30,15,0,230,232,3,64,
32,0,231,141,1,0,0,0,231,142,1,0,0,0,231,146,1,0,0,0,231,151,1,0,0,0,231,
158,1,0,0,0,231,166,1,0,0,0,231,173,1,0,0,0,231,182,1,0,0,0,231,191,1,0,
0,0,231,198,1,0,0,0,231,204,1,0,0,0,231,213,1,0,0,0,231,221,1,0,0,0,231,
229,1,0,0,0,231,230,1,0,0,0,232,25,1,0,0,0,233,234,7,0,0,0,234,27,1,0,0,
0,235,236,7,1,0,0,236,29,1,0,0,0,237,240,3,42,21,0,238,239,5,19,0,0,239,
241,3,24,12,0,240,238,1,0,0,0,240,241,1,0,0,0,241,250,1,0,0,0,242,244,5,
68,0,0,243,245,3,48,24,0,244,243,1,0,0,0,244,245,1,0,0,0,245,246,1,0,0,0,
246,247,5,69,0,0,247,248,5,38,0,0,248,250,3,30,15,0,249,237,1,0,0,0,249,
242,1,0,0,0,250,31,1,0,0,0,251,252,5,23,0,0,252,33,1,0,0,0,253,254,5,27,
0,0,254,35,1,0,0,0,255,256,5,33,0,0,256,37,1,0,0,0,257,258,5,32,0,0,258,
39,1,0,0,0,259,260,5,28,0,0,260,41,1,0,0,0,261,262,5,59,0,0,262,43,1,0,0,
0,263,264,3,24,12,0,264,45,1,0,0,0,265,266,3,24,12,0,266,47,1,0,0,0,267,
268,3,24,12,0,268,269,5,21,0,0,269,277,3,24,12,0,270,271,5,22,0,0,271,272,
3,24,12,0,272,273,5,21,0,0,273,274,3,24,12,0,274,276,1,0,0,0,275,270,1,0,
0,0,276,279,1,0,0,0,277,275,1,0,0,0,277,278,1,0,0,0,278,49,1,0,0,0,279,277,
1,0,0,0,280,281,7,2,0,0,281,51,1,0,0,0,282,283,7,3,0,0,283,53,1,0,0,0,284,
285,7,4,0,0,285,55,1,0,0,0,286,287,3,72,36,0,287,57,1,0,0,0,288,289,3,72,
36,0,289,59,1,0,0,0,290,291,5,59,0,0,291,61,1,0,0,0,292,294,3,64,32,0,293,
292,1,0,0,0,294,295,1,0,0,0,295,293,1,0,0,0,295,296,1,0,0,0,296,63,1,0,0,
0,297,301,3,68,34,0,298,301,3,70,35,0,299,301,3,66,33,0,300,297,1,0,0,0,
300,298,1,0,0,0,300,299,1,0,0,0,301,65,1,0,0,0,302,303,5,3,0,0,303,67,1,
0,0,0,304,305,5,1,0,0,305,69,1,0,0,0,306,307,5,2,0,0,307,71,1,0,0,0,308,
309,5,9,0,0,309,73,1,0,0,0,18,80,85,96,98,111,117,139,176,185,209,224,231,
240,244,249,277,295,300];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class KQueryParser extends antlr4.Parser {

    static grammarFileName = "KQuery.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, null, "'0b'", "'0o'", "'w'", "'0x'", "'true'", 
                            "'false'", "'query'", "'array'", "'symbolic'", 
                            "':'", "'->'", "'='", "','", "'Not'", "'Shl'", 
                            "'LShr'", "'AShr'", "'Concat'", "'Extract'", 
                            "'ZExt'", "'SExt'", "'Read'", "'Select'", "'Neg'", 
                            "'ReadLSB'", "'ReadMSB'", "'+'", "'-'", "'@'", 
                            "'And'", "'Or'", "'Xor'", "'Eq'", "'Ne'", "'Ult'", 
                            "'Ule'", "'Ugt'", "'Uge'", "'Slt'", "'Sle'", 
                            "'Sgt'", "'Sge'", "'Add'", "'Sub'", "'Mul'", 
                            "'UDiv'", "'URem'", "'SDiv'", "'SRem'", null, 
                            "'i'", "'fp'", null, null, null, null, "'('", 
                            "')'", "'['", "']'", "'{'", "'}'" ];
    static symbolicNames = [ null, "Boolean", "SignedConstant", "Constant", 
                             "BinConstant", "OctConstant", "HexConstant", 
                             "FloatingPointType", "IntegerType", "WidthType", 
                             "BinId", "OctId", "WIDTH", "HexId", "TrueMatch", 
                             "FalseMatch", "Query", "Array", "Symbolic", 
                             "Colon", "Arrow", "Equal", "COMMA", "NOT", 
                             "SHL", "LSHR", "ASHR", "CONCAT", "EXTRACT", 
                             "ZEXT", "SEXT", "READ", "SELECT", "NEGETION", 
                             "READLSB", "READMSB", "PLUS", "MINUS", "ATR", 
                             "BITWISEAND", "BITWISEOR", "BITWISEXOR", "EQ", 
                             "NEQ", "ULT", "ULE", "UGT", "UGE", "SLT", "SLE", 
                             "SGT", "SGE", "ADD", "SUB", "MUL", "UDIV", 
                             "UREM", "SDIV", "SREM", "Identifier", "INT", 
                             "FP", "Whitespace", "Newline", "BlockComment", 
                             "LineComment", "LeftParen", "RightParen", "LeftBracket", 
                             "RightBracket", "LeftBrace", "RightBrace" ];
    static ruleNames = [ "kqueryExpression", "queryStatements", "ktranslationUnit", 
                         "queryCommand", "queryExpr", "evalExprList", "evalArrayList", 
                         "expressionList", "identifierList", "arrayDeclaration", 
                         "numArrayElements", "arrayInitializer", "expression", 
                         "genericBitRead", "bitExtractExpr", "version", 
                         "notExpr", "concatExpr", "exprNegation", "selectExpr", 
                         "arrExtractExpr", "varName", "leftExpr", "rightExpr", 
                         "updateList", "bitwiseExpr", "comparisonExpr", 
                         "arithmeticExpr", "domain", "rangeLimit", "arrName", 
                         "numberList", "number", "constant", "boolnum", 
                         "signedConstant", "widthOrSizeExpr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = KQueryParser.ruleNames;
        this.literalNames = KQueryParser.literalNames;
        this.symbolicNames = KQueryParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	kqueryExpression() {
	    let localctx = new KqueryExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, KQueryParser.RULE_kqueryExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.queryStatements();
	        this.state = 75;
	        this.match(KQueryParser.EOF);
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



	queryStatements() {
	    let localctx = new QueryStatementsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, KQueryParser.RULE_queryStatements);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===KQueryParser.Array || _la===KQueryParser.LeftParen) {
	            this.state = 77;
	            this.ktranslationUnit();
	            this.state = 82;
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



	ktranslationUnit() {
	    let localctx = new KtranslationUnitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, KQueryParser.RULE_ktranslationUnit);
	    try {
	        this.state = 85;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case KQueryParser.Array:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 83;
	            this.arrayDeclaration();
	            break;
	        case KQueryParser.LeftParen:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 84;
	            this.queryCommand();
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



	queryCommand() {
	    let localctx = new QueryCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, KQueryParser.RULE_queryCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.match(KQueryParser.LeftParen);
	        this.state = 88;
	        this.match(KQueryParser.Query);
	        this.state = 89;
	        this.evalExprList();
	        this.state = 90;
	        this.queryExpr();
	        this.state = 91;
	        this.match(KQueryParser.RightParen);
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



	queryExpr() {
	    let localctx = new QueryExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, KQueryParser.RULE_queryExpr);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this.expression();
	        this.state = 98;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===KQueryParser.LeftBracket) {
	            this.state = 94;
	            this.evalExprList();
	            this.state = 96;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===KQueryParser.LeftBracket) {
	                this.state = 95;
	                this.evalArrayList();
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



	evalExprList() {
	    let localctx = new EvalExprListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, KQueryParser.RULE_evalExprList);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this.match(KQueryParser.LeftBracket);
	        this.state = 101;
	        this.expressionList();
	        this.state = 102;
	        this.match(KQueryParser.RightBracket);
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



	evalArrayList() {
	    let localctx = new EvalArrayListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, KQueryParser.RULE_evalArrayList);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.match(KQueryParser.LeftBracket);
	        this.state = 105;
	        this.identifierList();
	        this.state = 106;
	        this.match(KQueryParser.RightBracket);
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



	expressionList() {
	    let localctx = new ExpressionListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, KQueryParser.RULE_expressionList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << KQueryParser.Boolean) | (1 << KQueryParser.SignedConstant) | (1 << KQueryParser.Constant))) !== 0) || ((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (KQueryParser.Identifier - 59)) | (1 << (KQueryParser.LeftParen - 59)) | (1 << (KQueryParser.LeftBracket - 59)))) !== 0)) {
	            this.state = 108;
	            this.expression();
	            this.state = 113;
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



	identifierList() {
	    let localctx = new IdentifierListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, KQueryParser.RULE_identifierList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===KQueryParser.Identifier) {
	            this.state = 114;
	            this.match(KQueryParser.Identifier);
	            this.state = 119;
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



	arrayDeclaration() {
	    let localctx = new ArrayDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, KQueryParser.RULE_arrayDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.match(KQueryParser.Array);
	        this.state = 121;
	        this.arrName();
	        this.state = 122;
	        this.match(KQueryParser.LeftBracket);
	        this.state = 123;
	        this.numArrayElements();
	        this.state = 124;
	        this.match(KQueryParser.RightBracket);
	        this.state = 125;
	        this.match(KQueryParser.Colon);
	        this.state = 126;
	        this.domain();
	        this.state = 127;
	        this.match(KQueryParser.Arrow);
	        this.state = 128;
	        this.rangeLimit();
	        this.state = 129;
	        this.match(KQueryParser.Equal);
	        this.state = 130;
	        this.arrayInitializer();
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



	numArrayElements() {
	    let localctx = new NumArrayElementsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, KQueryParser.RULE_numArrayElements);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 132;
	        this.match(KQueryParser.Constant);
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



	arrayInitializer() {
	    let localctx = new ArrayInitializerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, KQueryParser.RULE_arrayInitializer);
	    try {
	        this.state = 139;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case KQueryParser.Symbolic:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 134;
	            this.match(KQueryParser.Symbolic);
	            break;
	        case KQueryParser.LeftBracket:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 135;
	            this.match(KQueryParser.LeftBracket);
	            this.state = 136;
	            this.numberList();
	            this.state = 137;
	            this.match(KQueryParser.RightBracket);
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



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, KQueryParser.RULE_expression);
	    var _la = 0; // Token type
	    try {
	        this.state = 231;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new VariableNameContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 141;
	            this.varName();
	            break;

	        case 2:
	            localctx = new NamedAbbreviationContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 142;
	            this.varName();
	            this.state = 143;
	            this.match(KQueryParser.Colon);
	            this.state = 144;
	            this.expression();
	            break;

	        case 3:
	            localctx = new SizeQueryContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 146;
	            this.match(KQueryParser.LeftParen);
	            this.state = 147;
	            this.widthOrSizeExpr();
	            this.state = 148;
	            this.number();
	            this.state = 149;
	            this.match(KQueryParser.RightParen);
	            break;

	        case 4:
	            localctx = new ArithExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 151;
	            this.match(KQueryParser.LeftParen);
	            this.state = 152;
	            this.arithmeticExpr();
	            this.state = 153;
	            this.widthOrSizeExpr();
	            this.state = 154;
	            this.leftExpr();
	            this.state = 155;
	            this.rightExpr();
	            this.state = 156;
	            this.match(KQueryParser.RightParen);
	            break;

	        case 5:
	            localctx = new NotExprWidthContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 158;
	            this.match(KQueryParser.LeftParen);
	            this.state = 159;
	            this.notExpr();
	            this.state = 160;
	            this.match(KQueryParser.LeftBracket);
	            this.state = 161;
	            this.widthOrSizeExpr();
	            this.state = 162;
	            this.match(KQueryParser.RightBracket);
	            this.state = 163;
	            this.expression();
	            this.state = 164;
	            this.match(KQueryParser.RightParen);
	            break;

	        case 6:
	            localctx = new BitwExprWidthContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 166;
	            this.match(KQueryParser.LeftParen);
	            this.state = 167;
	            this.bitwiseExpr();
	            this.state = 168;
	            this.widthOrSizeExpr();
	            this.state = 169;
	            this.leftExpr();
	            this.state = 170;
	            this.rightExpr();
	            this.state = 171;
	            this.match(KQueryParser.RightParen);
	            break;

	        case 7:
	            localctx = new CompExprWidthContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 173;
	            this.match(KQueryParser.LeftParen);
	            this.state = 174;
	            this.comparisonExpr();
	            this.state = 176;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===KQueryParser.WidthType) {
	                this.state = 175;
	                this.widthOrSizeExpr();
	            }

	            this.state = 178;
	            this.leftExpr();
	            this.state = 179;
	            this.rightExpr();
	            this.state = 180;
	            this.match(KQueryParser.RightParen);
	            break;

	        case 8:
	            localctx = new ConcatExprWidthContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 182;
	            this.match(KQueryParser.LeftParen);
	            this.state = 183;
	            this.concatExpr();
	            this.state = 185;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===KQueryParser.WidthType) {
	                this.state = 184;
	                this.widthOrSizeExpr();
	            }

	            this.state = 187;
	            this.leftExpr();
	            this.state = 188;
	            this.rightExpr();
	            this.state = 189;
	            this.match(KQueryParser.RightParen);
	            break;

	        case 9:
	            localctx = new ArrExtractExprWidthContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 191;
	            this.match(KQueryParser.LeftParen);
	            this.state = 192;
	            this.arrExtractExpr();
	            this.state = 193;
	            this.widthOrSizeExpr();
	            this.state = 194;
	            this.number();
	            this.state = 195;
	            this.expression();
	            this.state = 196;
	            this.match(KQueryParser.RightParen);
	            break;

	        case 10:
	            localctx = new BitExtractExprWidthContext(this, localctx);
	            this.enterOuterAlt(localctx, 10);
	            this.state = 198;
	            this.match(KQueryParser.LeftParen);
	            this.state = 199;
	            this.bitExtractExpr();
	            this.state = 200;
	            this.widthOrSizeExpr();
	            this.state = 201;
	            this.expression();
	            this.state = 202;
	            this.match(KQueryParser.RightParen);
	            break;

	        case 11:
	            localctx = new ReadExpresssionVersionedContext(this, localctx);
	            this.enterOuterAlt(localctx, 11);
	            this.state = 204;
	            this.match(KQueryParser.LeftParen);
	            this.state = 205;
	            this.genericBitRead();
	            this.state = 206;
	            this.widthOrSizeExpr();
	            this.state = 207;
	            this.expression();
	            this.state = 209;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===KQueryParser.Identifier || _la===KQueryParser.LeftBracket) {
	                this.state = 208;
	                this.version();
	            }

	            this.state = 211;
	            this.match(KQueryParser.RightParen);
	            break;

	        case 12:
	            localctx = new SelectExprWidthContext(this, localctx);
	            this.enterOuterAlt(localctx, 12);
	            this.state = 213;
	            this.match(KQueryParser.LeftParen);
	            this.state = 214;
	            this.selectExpr();
	            this.state = 215;
	            this.widthOrSizeExpr();
	            this.state = 216;
	            this.leftExpr();
	            this.state = 217;
	            this.rightExpr();
	            this.state = 218;
	            this.expression();
	            this.state = 219;
	            this.match(KQueryParser.RightParen);
	            break;

	        case 13:
	            localctx = new NegationExprWidthContext(this, localctx);
	            this.enterOuterAlt(localctx, 13);
	            this.state = 221;
	            this.match(KQueryParser.LeftParen);
	            this.state = 222;
	            this.exprNegation();
	            this.state = 224;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===KQueryParser.WidthType) {
	                this.state = 223;
	                this.widthOrSizeExpr();
	            }

	            this.state = 226;
	            this.expression();
	            this.state = 227;
	            this.match(KQueryParser.RightParen);
	            break;

	        case 14:
	            localctx = new VersionExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 14);
	            this.state = 229;
	            this.version();
	            break;

	        case 15:
	            localctx = new SingletonContext(this, localctx);
	            this.enterOuterAlt(localctx, 15);
	            this.state = 230;
	            this.number();
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



	genericBitRead() {
	    let localctx = new GenericBitReadContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, KQueryParser.RULE_genericBitRead);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 233;
	        _la = this._input.LA(1);
	        if(!(((((_la - 31)) & ~0x1f) == 0 && ((1 << (_la - 31)) & ((1 << (KQueryParser.READ - 31)) | (1 << (KQueryParser.READLSB - 31)) | (1 << (KQueryParser.READMSB - 31)))) !== 0))) {
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



	bitExtractExpr() {
	    let localctx = new BitExtractExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, KQueryParser.RULE_bitExtractExpr);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 235;
	        _la = this._input.LA(1);
	        if(!(_la===KQueryParser.ZEXT || _la===KQueryParser.SEXT)) {
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



	version() {
	    let localctx = new VersionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, KQueryParser.RULE_version);
	    var _la = 0; // Token type
	    try {
	        this.state = 249;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case KQueryParser.Identifier:
	            localctx = new VersionVariableNameContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 237;
	            this.varName();
	            this.state = 240;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===KQueryParser.Colon) {
	                this.state = 238;
	                this.match(KQueryParser.Colon);
	                this.state = 239;
	                this.expression();
	            }

	            break;
	        case KQueryParser.LeftBracket:
	            localctx = new UpdationListContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 242;
	            this.match(KQueryParser.LeftBracket);
	            this.state = 244;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << KQueryParser.Boolean) | (1 << KQueryParser.SignedConstant) | (1 << KQueryParser.Constant))) !== 0) || ((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (KQueryParser.Identifier - 59)) | (1 << (KQueryParser.LeftParen - 59)) | (1 << (KQueryParser.LeftBracket - 59)))) !== 0)) {
	                this.state = 243;
	                this.updateList();
	            }

	            this.state = 246;
	            this.match(KQueryParser.RightBracket);
	            this.state = 247;
	            this.match(KQueryParser.ATR);
	            this.state = 248;
	            this.version();
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



	notExpr() {
	    let localctx = new NotExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, KQueryParser.RULE_notExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 251;
	        this.match(KQueryParser.NOT);
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



	concatExpr() {
	    let localctx = new ConcatExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, KQueryParser.RULE_concatExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 253;
	        this.match(KQueryParser.CONCAT);
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



	exprNegation() {
	    let localctx = new ExprNegationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, KQueryParser.RULE_exprNegation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 255;
	        this.match(KQueryParser.NEGETION);
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



	selectExpr() {
	    let localctx = new SelectExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, KQueryParser.RULE_selectExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 257;
	        this.match(KQueryParser.SELECT);
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



	arrExtractExpr() {
	    let localctx = new ArrExtractExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, KQueryParser.RULE_arrExtractExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 259;
	        this.match(KQueryParser.EXTRACT);
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



	varName() {
	    let localctx = new VarNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, KQueryParser.RULE_varName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 261;
	        this.match(KQueryParser.Identifier);
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



	leftExpr() {
	    let localctx = new LeftExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, KQueryParser.RULE_leftExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 263;
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



	rightExpr() {
	    let localctx = new RightExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, KQueryParser.RULE_rightExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 265;
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



	updateList() {
	    let localctx = new UpdateListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, KQueryParser.RULE_updateList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 267;
	        this.expression();
	        this.state = 268;
	        this.match(KQueryParser.Equal);
	        this.state = 269;
	        this.expression();
	        this.state = 277;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===KQueryParser.COMMA) {
	            this.state = 270;
	            this.match(KQueryParser.COMMA);
	            this.state = 271;
	            this.expression();
	            this.state = 272;
	            this.match(KQueryParser.Equal);
	            this.state = 273;
	            this.expression();
	            this.state = 279;
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



	bitwiseExpr() {
	    let localctx = new BitwiseExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, KQueryParser.RULE_bitwiseExpr);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 280;
	        _la = this._input.LA(1);
	        if(!(((((_la - 24)) & ~0x1f) == 0 && ((1 << (_la - 24)) & ((1 << (KQueryParser.SHL - 24)) | (1 << (KQueryParser.LSHR - 24)) | (1 << (KQueryParser.ASHR - 24)) | (1 << (KQueryParser.BITWISEAND - 24)) | (1 << (KQueryParser.BITWISEOR - 24)) | (1 << (KQueryParser.BITWISEXOR - 24)))) !== 0))) {
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



	comparisonExpr() {
	    let localctx = new ComparisonExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, KQueryParser.RULE_comparisonExpr);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 282;
	        _la = this._input.LA(1);
	        if(!(((((_la - 42)) & ~0x1f) == 0 && ((1 << (_la - 42)) & ((1 << (KQueryParser.EQ - 42)) | (1 << (KQueryParser.NEQ - 42)) | (1 << (KQueryParser.ULT - 42)) | (1 << (KQueryParser.ULE - 42)) | (1 << (KQueryParser.UGT - 42)) | (1 << (KQueryParser.UGE - 42)) | (1 << (KQueryParser.SLT - 42)) | (1 << (KQueryParser.SLE - 42)) | (1 << (KQueryParser.SGT - 42)) | (1 << (KQueryParser.SGE - 42)))) !== 0))) {
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



	arithmeticExpr() {
	    let localctx = new ArithmeticExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, KQueryParser.RULE_arithmeticExpr);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 284;
	        _la = this._input.LA(1);
	        if(!(((((_la - 52)) & ~0x1f) == 0 && ((1 << (_la - 52)) & ((1 << (KQueryParser.ADD - 52)) | (1 << (KQueryParser.SUB - 52)) | (1 << (KQueryParser.MUL - 52)) | (1 << (KQueryParser.UDIV - 52)) | (1 << (KQueryParser.UREM - 52)) | (1 << (KQueryParser.SDIV - 52)) | (1 << (KQueryParser.SREM - 52)))) !== 0))) {
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



	domain() {
	    let localctx = new DomainContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, KQueryParser.RULE_domain);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 286;
	        this.widthOrSizeExpr();
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



	rangeLimit() {
	    let localctx = new RangeLimitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, KQueryParser.RULE_rangeLimit);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 288;
	        this.widthOrSizeExpr();
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



	arrName() {
	    let localctx = new ArrNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, KQueryParser.RULE_arrName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 290;
	        this.match(KQueryParser.Identifier);
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



	numberList() {
	    let localctx = new NumberListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, KQueryParser.RULE_numberList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 293; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 292;
	            this.number();
	            this.state = 295; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << KQueryParser.Boolean) | (1 << KQueryParser.SignedConstant) | (1 << KQueryParser.Constant))) !== 0));
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



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, KQueryParser.RULE_number);
	    try {
	        this.state = 300;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case KQueryParser.Boolean:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 297;
	            this.boolnum();
	            break;
	        case KQueryParser.SignedConstant:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 298;
	            this.signedConstant();
	            break;
	        case KQueryParser.Constant:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 299;
	            this.constant();
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



	constant() {
	    let localctx = new ConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, KQueryParser.RULE_constant);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 302;
	        this.match(KQueryParser.Constant);
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



	boolnum() {
	    let localctx = new BoolnumContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, KQueryParser.RULE_boolnum);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 304;
	        this.match(KQueryParser.Boolean);
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



	signedConstant() {
	    let localctx = new SignedConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, KQueryParser.RULE_signedConstant);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 306;
	        this.match(KQueryParser.SignedConstant);
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



	widthOrSizeExpr() {
	    let localctx = new WidthOrSizeExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, KQueryParser.RULE_widthOrSizeExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 308;
	        this.match(KQueryParser.WidthType);
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

KQueryParser.EOF = antlr4.Token.EOF;
KQueryParser.Boolean = 1;
KQueryParser.SignedConstant = 2;
KQueryParser.Constant = 3;
KQueryParser.BinConstant = 4;
KQueryParser.OctConstant = 5;
KQueryParser.HexConstant = 6;
KQueryParser.FloatingPointType = 7;
KQueryParser.IntegerType = 8;
KQueryParser.WidthType = 9;
KQueryParser.BinId = 10;
KQueryParser.OctId = 11;
KQueryParser.WIDTH = 12;
KQueryParser.HexId = 13;
KQueryParser.TrueMatch = 14;
KQueryParser.FalseMatch = 15;
KQueryParser.Query = 16;
KQueryParser.Array = 17;
KQueryParser.Symbolic = 18;
KQueryParser.Colon = 19;
KQueryParser.Arrow = 20;
KQueryParser.Equal = 21;
KQueryParser.COMMA = 22;
KQueryParser.NOT = 23;
KQueryParser.SHL = 24;
KQueryParser.LSHR = 25;
KQueryParser.ASHR = 26;
KQueryParser.CONCAT = 27;
KQueryParser.EXTRACT = 28;
KQueryParser.ZEXT = 29;
KQueryParser.SEXT = 30;
KQueryParser.READ = 31;
KQueryParser.SELECT = 32;
KQueryParser.NEGETION = 33;
KQueryParser.READLSB = 34;
KQueryParser.READMSB = 35;
KQueryParser.PLUS = 36;
KQueryParser.MINUS = 37;
KQueryParser.ATR = 38;
KQueryParser.BITWISEAND = 39;
KQueryParser.BITWISEOR = 40;
KQueryParser.BITWISEXOR = 41;
KQueryParser.EQ = 42;
KQueryParser.NEQ = 43;
KQueryParser.ULT = 44;
KQueryParser.ULE = 45;
KQueryParser.UGT = 46;
KQueryParser.UGE = 47;
KQueryParser.SLT = 48;
KQueryParser.SLE = 49;
KQueryParser.SGT = 50;
KQueryParser.SGE = 51;
KQueryParser.ADD = 52;
KQueryParser.SUB = 53;
KQueryParser.MUL = 54;
KQueryParser.UDIV = 55;
KQueryParser.UREM = 56;
KQueryParser.SDIV = 57;
KQueryParser.SREM = 58;
KQueryParser.Identifier = 59;
KQueryParser.INT = 60;
KQueryParser.FP = 61;
KQueryParser.Whitespace = 62;
KQueryParser.Newline = 63;
KQueryParser.BlockComment = 64;
KQueryParser.LineComment = 65;
KQueryParser.LeftParen = 66;
KQueryParser.RightParen = 67;
KQueryParser.LeftBracket = 68;
KQueryParser.RightBracket = 69;
KQueryParser.LeftBrace = 70;
KQueryParser.RightBrace = 71;

KQueryParser.RULE_kqueryExpression = 0;
KQueryParser.RULE_queryStatements = 1;
KQueryParser.RULE_ktranslationUnit = 2;
KQueryParser.RULE_queryCommand = 3;
KQueryParser.RULE_queryExpr = 4;
KQueryParser.RULE_evalExprList = 5;
KQueryParser.RULE_evalArrayList = 6;
KQueryParser.RULE_expressionList = 7;
KQueryParser.RULE_identifierList = 8;
KQueryParser.RULE_arrayDeclaration = 9;
KQueryParser.RULE_numArrayElements = 10;
KQueryParser.RULE_arrayInitializer = 11;
KQueryParser.RULE_expression = 12;
KQueryParser.RULE_genericBitRead = 13;
KQueryParser.RULE_bitExtractExpr = 14;
KQueryParser.RULE_version = 15;
KQueryParser.RULE_notExpr = 16;
KQueryParser.RULE_concatExpr = 17;
KQueryParser.RULE_exprNegation = 18;
KQueryParser.RULE_selectExpr = 19;
KQueryParser.RULE_arrExtractExpr = 20;
KQueryParser.RULE_varName = 21;
KQueryParser.RULE_leftExpr = 22;
KQueryParser.RULE_rightExpr = 23;
KQueryParser.RULE_updateList = 24;
KQueryParser.RULE_bitwiseExpr = 25;
KQueryParser.RULE_comparisonExpr = 26;
KQueryParser.RULE_arithmeticExpr = 27;
KQueryParser.RULE_domain = 28;
KQueryParser.RULE_rangeLimit = 29;
KQueryParser.RULE_arrName = 30;
KQueryParser.RULE_numberList = 31;
KQueryParser.RULE_number = 32;
KQueryParser.RULE_constant = 33;
KQueryParser.RULE_boolnum = 34;
KQueryParser.RULE_signedConstant = 35;
KQueryParser.RULE_widthOrSizeExpr = 36;

class KqueryExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KQueryParser.RULE_kqueryExpression;
    }

	queryStatements() {
	    return this.getTypedRuleContext(QueryStatementsContext,0);
	};

	EOF() {
	    return this.getToken(KQueryParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterKqueryExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitKqueryExpression(this);
		}
	}


}



class QueryStatementsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KQueryParser.RULE_queryStatements;
    }

	ktranslationUnit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(KtranslationUnitContext);
	    } else {
	        return this.getTypedRuleContext(KtranslationUnitContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterQueryStatements(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitQueryStatements(this);
		}
	}


}



class KtranslationUnitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KQueryParser.RULE_ktranslationUnit;
    }

	arrayDeclaration() {
	    return this.getTypedRuleContext(ArrayDeclarationContext,0);
	};

	queryCommand() {
	    return this.getTypedRuleContext(QueryCommandContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterKtranslationUnit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitKtranslationUnit(this);
		}
	}


}



class QueryCommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KQueryParser.RULE_queryCommand;
    }

	LeftParen() {
	    return this.getToken(KQueryParser.LeftParen, 0);
	};

	Query() {
	    return this.getToken(KQueryParser.Query, 0);
	};

	evalExprList() {
	    return this.getTypedRuleContext(EvalExprListContext,0);
	};

	queryExpr() {
	    return this.getTypedRuleContext(QueryExprContext,0);
	};

	RightParen() {
	    return this.getToken(KQueryParser.RightParen, 0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterQueryCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitQueryCommand(this);
		}
	}


}



class QueryExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KQueryParser.RULE_queryExpr;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	evalExprList() {
	    return this.getTypedRuleContext(EvalExprListContext,0);
	};

	evalArrayList() {
	    return this.getTypedRuleContext(EvalArrayListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterQueryExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitQueryExpr(this);
		}
	}


}



class EvalExprListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KQueryParser.RULE_evalExprList;
    }

	LeftBracket() {
	    return this.getToken(KQueryParser.LeftBracket, 0);
	};

	expressionList() {
	    return this.getTypedRuleContext(ExpressionListContext,0);
	};

	RightBracket() {
	    return this.getToken(KQueryParser.RightBracket, 0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterEvalExprList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitEvalExprList(this);
		}
	}


}



class EvalArrayListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KQueryParser.RULE_evalArrayList;
    }

	LeftBracket() {
	    return this.getToken(KQueryParser.LeftBracket, 0);
	};

	identifierList() {
	    return this.getTypedRuleContext(IdentifierListContext,0);
	};

	RightBracket() {
	    return this.getToken(KQueryParser.RightBracket, 0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterEvalArrayList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitEvalArrayList(this);
		}
	}


}



class ExpressionListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KQueryParser.RULE_expressionList;
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

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterExpressionList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitExpressionList(this);
		}
	}


}



class IdentifierListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KQueryParser.RULE_identifierList;
    }

	Identifier = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(KQueryParser.Identifier);
	    } else {
	        return this.getToken(KQueryParser.Identifier, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterIdentifierList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitIdentifierList(this);
		}
	}


}



class ArrayDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KQueryParser.RULE_arrayDeclaration;
    }

	Array() {
	    return this.getToken(KQueryParser.Array, 0);
	};

	arrName() {
	    return this.getTypedRuleContext(ArrNameContext,0);
	};

	LeftBracket() {
	    return this.getToken(KQueryParser.LeftBracket, 0);
	};

	numArrayElements() {
	    return this.getTypedRuleContext(NumArrayElementsContext,0);
	};

	RightBracket() {
	    return this.getToken(KQueryParser.RightBracket, 0);
	};

	Colon() {
	    return this.getToken(KQueryParser.Colon, 0);
	};

	domain() {
	    return this.getTypedRuleContext(DomainContext,0);
	};

	Arrow() {
	    return this.getToken(KQueryParser.Arrow, 0);
	};

	rangeLimit() {
	    return this.getTypedRuleContext(RangeLimitContext,0);
	};

	Equal() {
	    return this.getToken(KQueryParser.Equal, 0);
	};

	arrayInitializer() {
	    return this.getTypedRuleContext(ArrayInitializerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterArrayDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitArrayDeclaration(this);
		}
	}


}



class NumArrayElementsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KQueryParser.RULE_numArrayElements;
    }

	Constant() {
	    return this.getToken(KQueryParser.Constant, 0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterNumArrayElements(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitNumArrayElements(this);
		}
	}


}



class ArrayInitializerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KQueryParser.RULE_arrayInitializer;
    }

	Symbolic() {
	    return this.getToken(KQueryParser.Symbolic, 0);
	};

	LeftBracket() {
	    return this.getToken(KQueryParser.LeftBracket, 0);
	};

	numberList() {
	    return this.getTypedRuleContext(NumberListContext,0);
	};

	RightBracket() {
	    return this.getToken(KQueryParser.RightBracket, 0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterArrayInitializer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitArrayInitializer(this);
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
        this.ruleIndex = KQueryParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ArithExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LeftParen() {
	    return this.getToken(KQueryParser.LeftParen, 0);
	};

	arithmeticExpr() {
	    return this.getTypedRuleContext(ArithmeticExprContext,0);
	};

	widthOrSizeExpr() {
	    return this.getTypedRuleContext(WidthOrSizeExprContext,0);
	};

	leftExpr() {
	    return this.getTypedRuleContext(LeftExprContext,0);
	};

	rightExpr() {
	    return this.getTypedRuleContext(RightExprContext,0);
	};

	RightParen() {
	    return this.getToken(KQueryParser.RightParen, 0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterArithExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitArithExpr(this);
		}
	}


}

KQueryParser.ArithExprContext = ArithExprContext;

class SelectExprWidthContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LeftParen() {
	    return this.getToken(KQueryParser.LeftParen, 0);
	};

	selectExpr() {
	    return this.getTypedRuleContext(SelectExprContext,0);
	};

	widthOrSizeExpr() {
	    return this.getTypedRuleContext(WidthOrSizeExprContext,0);
	};

	leftExpr() {
	    return this.getTypedRuleContext(LeftExprContext,0);
	};

	rightExpr() {
	    return this.getTypedRuleContext(RightExprContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RightParen() {
	    return this.getToken(KQueryParser.RightParen, 0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterSelectExprWidth(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitSelectExprWidth(this);
		}
	}


}

KQueryParser.SelectExprWidthContext = SelectExprWidthContext;

class BitwExprWidthContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LeftParen() {
	    return this.getToken(KQueryParser.LeftParen, 0);
	};

	bitwiseExpr() {
	    return this.getTypedRuleContext(BitwiseExprContext,0);
	};

	widthOrSizeExpr() {
	    return this.getTypedRuleContext(WidthOrSizeExprContext,0);
	};

	leftExpr() {
	    return this.getTypedRuleContext(LeftExprContext,0);
	};

	rightExpr() {
	    return this.getTypedRuleContext(RightExprContext,0);
	};

	RightParen() {
	    return this.getToken(KQueryParser.RightParen, 0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterBitwExprWidth(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitBitwExprWidth(this);
		}
	}


}

KQueryParser.BitwExprWidthContext = BitwExprWidthContext;

class NegationExprWidthContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LeftParen() {
	    return this.getToken(KQueryParser.LeftParen, 0);
	};

	exprNegation() {
	    return this.getTypedRuleContext(ExprNegationContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RightParen() {
	    return this.getToken(KQueryParser.RightParen, 0);
	};

	widthOrSizeExpr() {
	    return this.getTypedRuleContext(WidthOrSizeExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterNegationExprWidth(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitNegationExprWidth(this);
		}
	}


}

KQueryParser.NegationExprWidthContext = NegationExprWidthContext;

class VariableNameContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	varName() {
	    return this.getTypedRuleContext(VarNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterVariableName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitVariableName(this);
		}
	}


}

KQueryParser.VariableNameContext = VariableNameContext;

class CompExprWidthContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LeftParen() {
	    return this.getToken(KQueryParser.LeftParen, 0);
	};

	comparisonExpr() {
	    return this.getTypedRuleContext(ComparisonExprContext,0);
	};

	leftExpr() {
	    return this.getTypedRuleContext(LeftExprContext,0);
	};

	rightExpr() {
	    return this.getTypedRuleContext(RightExprContext,0);
	};

	RightParen() {
	    return this.getToken(KQueryParser.RightParen, 0);
	};

	widthOrSizeExpr() {
	    return this.getTypedRuleContext(WidthOrSizeExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterCompExprWidth(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitCompExprWidth(this);
		}
	}


}

KQueryParser.CompExprWidthContext = CompExprWidthContext;

class SizeQueryContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LeftParen() {
	    return this.getToken(KQueryParser.LeftParen, 0);
	};

	widthOrSizeExpr() {
	    return this.getTypedRuleContext(WidthOrSizeExprContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	RightParen() {
	    return this.getToken(KQueryParser.RightParen, 0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterSizeQuery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitSizeQuery(this);
		}
	}


}

KQueryParser.SizeQueryContext = SizeQueryContext;

class NotExprWidthContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LeftParen() {
	    return this.getToken(KQueryParser.LeftParen, 0);
	};

	notExpr() {
	    return this.getTypedRuleContext(NotExprContext,0);
	};

	LeftBracket() {
	    return this.getToken(KQueryParser.LeftBracket, 0);
	};

	widthOrSizeExpr() {
	    return this.getTypedRuleContext(WidthOrSizeExprContext,0);
	};

	RightBracket() {
	    return this.getToken(KQueryParser.RightBracket, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RightParen() {
	    return this.getToken(KQueryParser.RightParen, 0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterNotExprWidth(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitNotExprWidth(this);
		}
	}


}

KQueryParser.NotExprWidthContext = NotExprWidthContext;

class ArrExtractExprWidthContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LeftParen() {
	    return this.getToken(KQueryParser.LeftParen, 0);
	};

	arrExtractExpr() {
	    return this.getTypedRuleContext(ArrExtractExprContext,0);
	};

	widthOrSizeExpr() {
	    return this.getTypedRuleContext(WidthOrSizeExprContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RightParen() {
	    return this.getToken(KQueryParser.RightParen, 0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterArrExtractExprWidth(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitArrExtractExprWidth(this);
		}
	}


}

KQueryParser.ArrExtractExprWidthContext = ArrExtractExprWidthContext;

class SingletonContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterSingleton(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitSingleton(this);
		}
	}


}

KQueryParser.SingletonContext = SingletonContext;

class NamedAbbreviationContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	varName() {
	    return this.getTypedRuleContext(VarNameContext,0);
	};

	Colon() {
	    return this.getToken(KQueryParser.Colon, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterNamedAbbreviation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitNamedAbbreviation(this);
		}
	}


}

KQueryParser.NamedAbbreviationContext = NamedAbbreviationContext;

class VersionExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	version() {
	    return this.getTypedRuleContext(VersionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterVersionExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitVersionExpr(this);
		}
	}


}

KQueryParser.VersionExprContext = VersionExprContext;

class ReadExpresssionVersionedContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LeftParen() {
	    return this.getToken(KQueryParser.LeftParen, 0);
	};

	genericBitRead() {
	    return this.getTypedRuleContext(GenericBitReadContext,0);
	};

	widthOrSizeExpr() {
	    return this.getTypedRuleContext(WidthOrSizeExprContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RightParen() {
	    return this.getToken(KQueryParser.RightParen, 0);
	};

	version() {
	    return this.getTypedRuleContext(VersionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterReadExpresssionVersioned(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitReadExpresssionVersioned(this);
		}
	}


}

KQueryParser.ReadExpresssionVersionedContext = ReadExpresssionVersionedContext;

class BitExtractExprWidthContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LeftParen() {
	    return this.getToken(KQueryParser.LeftParen, 0);
	};

	bitExtractExpr() {
	    return this.getTypedRuleContext(BitExtractExprContext,0);
	};

	widthOrSizeExpr() {
	    return this.getTypedRuleContext(WidthOrSizeExprContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RightParen() {
	    return this.getToken(KQueryParser.RightParen, 0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterBitExtractExprWidth(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitBitExtractExprWidth(this);
		}
	}


}

KQueryParser.BitExtractExprWidthContext = BitExtractExprWidthContext;

class ConcatExprWidthContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LeftParen() {
	    return this.getToken(KQueryParser.LeftParen, 0);
	};

	concatExpr() {
	    return this.getTypedRuleContext(ConcatExprContext,0);
	};

	leftExpr() {
	    return this.getTypedRuleContext(LeftExprContext,0);
	};

	rightExpr() {
	    return this.getTypedRuleContext(RightExprContext,0);
	};

	RightParen() {
	    return this.getToken(KQueryParser.RightParen, 0);
	};

	widthOrSizeExpr() {
	    return this.getTypedRuleContext(WidthOrSizeExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterConcatExprWidth(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitConcatExprWidth(this);
		}
	}


}

KQueryParser.ConcatExprWidthContext = ConcatExprWidthContext;

class GenericBitReadContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KQueryParser.RULE_genericBitRead;
    }

	READ() {
	    return this.getToken(KQueryParser.READ, 0);
	};

	READLSB() {
	    return this.getToken(KQueryParser.READLSB, 0);
	};

	READMSB() {
	    return this.getToken(KQueryParser.READMSB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterGenericBitRead(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitGenericBitRead(this);
		}
	}


}



class BitExtractExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KQueryParser.RULE_bitExtractExpr;
    }

	ZEXT() {
	    return this.getToken(KQueryParser.ZEXT, 0);
	};

	SEXT() {
	    return this.getToken(KQueryParser.SEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterBitExtractExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitBitExtractExpr(this);
		}
	}


}



class VersionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KQueryParser.RULE_version;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class UpdationListContext extends VersionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LeftBracket() {
	    return this.getToken(KQueryParser.LeftBracket, 0);
	};

	RightBracket() {
	    return this.getToken(KQueryParser.RightBracket, 0);
	};

	ATR() {
	    return this.getToken(KQueryParser.ATR, 0);
	};

	version() {
	    return this.getTypedRuleContext(VersionContext,0);
	};

	updateList() {
	    return this.getTypedRuleContext(UpdateListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterUpdationList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitUpdationList(this);
		}
	}


}

KQueryParser.UpdationListContext = UpdationListContext;

class VersionVariableNameContext extends VersionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	varName() {
	    return this.getTypedRuleContext(VarNameContext,0);
	};

	Colon() {
	    return this.getToken(KQueryParser.Colon, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterVersionVariableName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitVersionVariableName(this);
		}
	}


}

KQueryParser.VersionVariableNameContext = VersionVariableNameContext;

class NotExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KQueryParser.RULE_notExpr;
    }

	NOT() {
	    return this.getToken(KQueryParser.NOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterNotExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitNotExpr(this);
		}
	}


}



class ConcatExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KQueryParser.RULE_concatExpr;
    }

	CONCAT() {
	    return this.getToken(KQueryParser.CONCAT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterConcatExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitConcatExpr(this);
		}
	}


}



class ExprNegationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KQueryParser.RULE_exprNegation;
    }

	NEGETION() {
	    return this.getToken(KQueryParser.NEGETION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterExprNegation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitExprNegation(this);
		}
	}


}



class SelectExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KQueryParser.RULE_selectExpr;
    }

	SELECT() {
	    return this.getToken(KQueryParser.SELECT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterSelectExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitSelectExpr(this);
		}
	}


}



class ArrExtractExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KQueryParser.RULE_arrExtractExpr;
    }

	EXTRACT() {
	    return this.getToken(KQueryParser.EXTRACT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterArrExtractExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitArrExtractExpr(this);
		}
	}


}



class VarNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KQueryParser.RULE_varName;
    }

	Identifier() {
	    return this.getToken(KQueryParser.Identifier, 0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterVarName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitVarName(this);
		}
	}


}



class LeftExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KQueryParser.RULE_leftExpr;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterLeftExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitLeftExpr(this);
		}
	}


}



class RightExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KQueryParser.RULE_rightExpr;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterRightExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitRightExpr(this);
		}
	}


}



class UpdateListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KQueryParser.RULE_updateList;
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

	Equal = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(KQueryParser.Equal);
	    } else {
	        return this.getToken(KQueryParser.Equal, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(KQueryParser.COMMA);
	    } else {
	        return this.getToken(KQueryParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterUpdateList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitUpdateList(this);
		}
	}


}



class BitwiseExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KQueryParser.RULE_bitwiseExpr;
    }

	BITWISEAND() {
	    return this.getToken(KQueryParser.BITWISEAND, 0);
	};

	BITWISEOR() {
	    return this.getToken(KQueryParser.BITWISEOR, 0);
	};

	BITWISEXOR() {
	    return this.getToken(KQueryParser.BITWISEXOR, 0);
	};

	SHL() {
	    return this.getToken(KQueryParser.SHL, 0);
	};

	LSHR() {
	    return this.getToken(KQueryParser.LSHR, 0);
	};

	ASHR() {
	    return this.getToken(KQueryParser.ASHR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterBitwiseExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitBitwiseExpr(this);
		}
	}


}



class ComparisonExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KQueryParser.RULE_comparisonExpr;
    }

	EQ() {
	    return this.getToken(KQueryParser.EQ, 0);
	};

	NEQ() {
	    return this.getToken(KQueryParser.NEQ, 0);
	};

	ULT() {
	    return this.getToken(KQueryParser.ULT, 0);
	};

	UGT() {
	    return this.getToken(KQueryParser.UGT, 0);
	};

	ULE() {
	    return this.getToken(KQueryParser.ULE, 0);
	};

	UGE() {
	    return this.getToken(KQueryParser.UGE, 0);
	};

	SLT() {
	    return this.getToken(KQueryParser.SLT, 0);
	};

	SLE() {
	    return this.getToken(KQueryParser.SLE, 0);
	};

	SGT() {
	    return this.getToken(KQueryParser.SGT, 0);
	};

	SGE() {
	    return this.getToken(KQueryParser.SGE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterComparisonExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitComparisonExpr(this);
		}
	}


}



class ArithmeticExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KQueryParser.RULE_arithmeticExpr;
    }

	ADD() {
	    return this.getToken(KQueryParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(KQueryParser.SUB, 0);
	};

	MUL() {
	    return this.getToken(KQueryParser.MUL, 0);
	};

	UDIV() {
	    return this.getToken(KQueryParser.UDIV, 0);
	};

	UREM() {
	    return this.getToken(KQueryParser.UREM, 0);
	};

	SDIV() {
	    return this.getToken(KQueryParser.SDIV, 0);
	};

	SREM() {
	    return this.getToken(KQueryParser.SREM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterArithmeticExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitArithmeticExpr(this);
		}
	}


}



class DomainContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KQueryParser.RULE_domain;
    }

	widthOrSizeExpr() {
	    return this.getTypedRuleContext(WidthOrSizeExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterDomain(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitDomain(this);
		}
	}


}



class RangeLimitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KQueryParser.RULE_rangeLimit;
    }

	widthOrSizeExpr() {
	    return this.getTypedRuleContext(WidthOrSizeExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterRangeLimit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitRangeLimit(this);
		}
	}


}



class ArrNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KQueryParser.RULE_arrName;
    }

	Identifier() {
	    return this.getToken(KQueryParser.Identifier, 0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterArrName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitArrName(this);
		}
	}


}



class NumberListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KQueryParser.RULE_numberList;
    }

	number = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumberContext);
	    } else {
	        return this.getTypedRuleContext(NumberContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterNumberList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitNumberList(this);
		}
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KQueryParser.RULE_number;
    }

	boolnum() {
	    return this.getTypedRuleContext(BoolnumContext,0);
	};

	signedConstant() {
	    return this.getTypedRuleContext(SignedConstantContext,0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitNumber(this);
		}
	}


}



class ConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KQueryParser.RULE_constant;
    }

	Constant() {
	    return this.getToken(KQueryParser.Constant, 0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitConstant(this);
		}
	}


}



class BoolnumContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KQueryParser.RULE_boolnum;
    }

	Boolean() {
	    return this.getToken(KQueryParser.Boolean, 0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterBoolnum(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitBoolnum(this);
		}
	}


}



class SignedConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KQueryParser.RULE_signedConstant;
    }

	SignedConstant() {
	    return this.getToken(KQueryParser.SignedConstant, 0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterSignedConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitSignedConstant(this);
		}
	}


}



class WidthOrSizeExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KQueryParser.RULE_widthOrSizeExpr;
    }

	WidthType() {
	    return this.getToken(KQueryParser.WidthType, 0);
	};

	enterRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.enterWidthOrSizeExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KQueryListener ) {
	        listener.exitWidthOrSizeExpr(this);
		}
	}


}




KQueryParser.KqueryExpressionContext = KqueryExpressionContext; 
KQueryParser.QueryStatementsContext = QueryStatementsContext; 
KQueryParser.KtranslationUnitContext = KtranslationUnitContext; 
KQueryParser.QueryCommandContext = QueryCommandContext; 
KQueryParser.QueryExprContext = QueryExprContext; 
KQueryParser.EvalExprListContext = EvalExprListContext; 
KQueryParser.EvalArrayListContext = EvalArrayListContext; 
KQueryParser.ExpressionListContext = ExpressionListContext; 
KQueryParser.IdentifierListContext = IdentifierListContext; 
KQueryParser.ArrayDeclarationContext = ArrayDeclarationContext; 
KQueryParser.NumArrayElementsContext = NumArrayElementsContext; 
KQueryParser.ArrayInitializerContext = ArrayInitializerContext; 
KQueryParser.ExpressionContext = ExpressionContext; 
KQueryParser.GenericBitReadContext = GenericBitReadContext; 
KQueryParser.BitExtractExprContext = BitExtractExprContext; 
KQueryParser.VersionContext = VersionContext; 
KQueryParser.NotExprContext = NotExprContext; 
KQueryParser.ConcatExprContext = ConcatExprContext; 
KQueryParser.ExprNegationContext = ExprNegationContext; 
KQueryParser.SelectExprContext = SelectExprContext; 
KQueryParser.ArrExtractExprContext = ArrExtractExprContext; 
KQueryParser.VarNameContext = VarNameContext; 
KQueryParser.LeftExprContext = LeftExprContext; 
KQueryParser.RightExprContext = RightExprContext; 
KQueryParser.UpdateListContext = UpdateListContext; 
KQueryParser.BitwiseExprContext = BitwiseExprContext; 
KQueryParser.ComparisonExprContext = ComparisonExprContext; 
KQueryParser.ArithmeticExprContext = ArithmeticExprContext; 
KQueryParser.DomainContext = DomainContext; 
KQueryParser.RangeLimitContext = RangeLimitContext; 
KQueryParser.ArrNameContext = ArrNameContext; 
KQueryParser.NumberListContext = NumberListContext; 
KQueryParser.NumberContext = NumberContext; 
KQueryParser.ConstantContext = ConstantContext; 
KQueryParser.BoolnumContext = BoolnumContext; 
KQueryParser.SignedConstantContext = SignedConstantContext; 
KQueryParser.WidthOrSizeExprContext = WidthOrSizeExprContext; 
