// Generated from ./oncrpc/xdr.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import xdrListener from './xdrListener.js';
const serializedATN = [4,1,37,211,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,
3,0,44,8,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,3,0,58,8,0,1,
0,1,0,1,0,1,0,1,0,3,0,65,8,0,1,0,1,0,1,0,1,0,1,0,1,0,3,0,73,8,0,1,1,1,1,
3,1,77,8,1,1,2,1,2,1,3,3,3,82,8,3,1,3,1,3,3,3,86,8,3,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,1,3,3,3,97,8,3,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,
5,5,5,111,8,5,10,5,12,5,114,9,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,
1,7,1,7,5,7,128,8,7,10,7,12,7,131,9,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,9,1,
9,1,9,1,9,1,9,5,9,145,8,9,10,9,12,9,148,9,9,1,9,1,9,1,9,1,9,1,9,3,9,155,
8,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,5,10,167,8,10,10,10,
12,10,170,9,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,
12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,
1,12,1,12,3,12,200,8,12,1,13,1,13,3,13,204,8,13,1,14,4,14,207,8,14,11,14,
12,14,208,1,14,0,0,15,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,0,1,1,0,33,
35,227,0,72,1,0,0,0,2,76,1,0,0,0,4,78,1,0,0,0,6,96,1,0,0,0,8,98,1,0,0,0,
10,101,1,0,0,0,12,117,1,0,0,0,14,120,1,0,0,0,16,134,1,0,0,0,18,137,1,0,0,
0,20,158,1,0,0,0,22,174,1,0,0,0,24,199,1,0,0,0,26,203,1,0,0,0,28,206,1,0,
0,0,30,31,3,6,3,0,31,32,5,36,0,0,32,73,1,0,0,0,33,34,3,6,3,0,34,35,5,36,
0,0,35,36,5,1,0,0,36,37,3,2,1,0,37,38,5,2,0,0,38,73,1,0,0,0,39,40,3,6,3,
0,40,41,5,36,0,0,41,43,5,3,0,0,42,44,3,2,1,0,43,42,1,0,0,0,43,44,1,0,0,0,
44,45,1,0,0,0,45,46,5,4,0,0,46,73,1,0,0,0,47,48,5,5,0,0,48,49,5,36,0,0,49,
50,5,1,0,0,50,51,3,2,1,0,51,52,5,2,0,0,52,73,1,0,0,0,53,54,5,5,0,0,54,55,
5,36,0,0,55,57,5,3,0,0,56,58,3,2,1,0,57,56,1,0,0,0,57,58,1,0,0,0,58,59,1,
0,0,0,59,73,5,4,0,0,60,61,5,6,0,0,61,62,5,36,0,0,62,64,5,3,0,0,63,65,3,2,
1,0,64,63,1,0,0,0,64,65,1,0,0,0,65,66,1,0,0,0,66,73,5,4,0,0,67,68,3,6,3,
0,68,69,5,7,0,0,69,70,5,36,0,0,70,73,1,0,0,0,71,73,5,8,0,0,72,30,1,0,0,0,
72,33,1,0,0,0,72,39,1,0,0,0,72,47,1,0,0,0,72,53,1,0,0,0,72,60,1,0,0,0,72,
67,1,0,0,0,72,71,1,0,0,0,73,1,1,0,0,0,74,77,3,4,2,0,75,77,5,36,0,0,76,74,
1,0,0,0,76,75,1,0,0,0,77,3,1,0,0,0,78,79,7,0,0,0,79,5,1,0,0,0,80,82,5,9,
0,0,81,80,1,0,0,0,81,82,1,0,0,0,82,83,1,0,0,0,83,97,5,10,0,0,84,86,5,9,0,
0,85,84,1,0,0,0,85,86,1,0,0,0,86,87,1,0,0,0,87,97,5,11,0,0,88,97,5,12,0,
0,89,97,5,13,0,0,90,97,5,14,0,0,91,97,5,15,0,0,92,97,3,8,4,0,93,97,3,12,
6,0,94,97,3,16,8,0,95,97,5,36,0,0,96,81,1,0,0,0,96,85,1,0,0,0,96,88,1,0,
0,0,96,89,1,0,0,0,96,90,1,0,0,0,96,91,1,0,0,0,96,92,1,0,0,0,96,93,1,0,0,
0,96,94,1,0,0,0,96,95,1,0,0,0,97,7,1,0,0,0,98,99,5,16,0,0,99,100,3,10,5,
0,100,9,1,0,0,0,101,102,5,17,0,0,102,103,5,36,0,0,103,104,5,18,0,0,104,105,
3,2,1,0,105,112,1,0,0,0,106,107,5,19,0,0,107,108,5,36,0,0,108,109,5,18,0,
0,109,111,3,2,1,0,110,106,1,0,0,0,111,114,1,0,0,0,112,110,1,0,0,0,112,113,
1,0,0,0,113,115,1,0,0,0,114,112,1,0,0,0,115,116,5,20,0,0,116,11,1,0,0,0,
117,118,5,21,0,0,118,119,3,14,7,0,119,13,1,0,0,0,120,121,5,17,0,0,121,122,
3,0,0,0,122,123,5,22,0,0,123,129,1,0,0,0,124,125,3,0,0,0,125,126,5,22,0,
0,126,128,1,0,0,0,127,124,1,0,0,0,128,131,1,0,0,0,129,127,1,0,0,0,129,130,
1,0,0,0,130,132,1,0,0,0,131,129,1,0,0,0,132,133,5,20,0,0,133,15,1,0,0,0,
134,135,5,23,0,0,135,136,3,18,9,0,136,17,1,0,0,0,137,138,5,24,0,0,138,139,
5,25,0,0,139,140,3,0,0,0,140,141,5,26,0,0,141,142,5,17,0,0,142,146,3,20,
10,0,143,145,3,20,10,0,144,143,1,0,0,0,145,148,1,0,0,0,146,144,1,0,0,0,146,
147,1,0,0,0,147,154,1,0,0,0,148,146,1,0,0,0,149,150,5,27,0,0,150,151,5,28,
0,0,151,152,3,0,0,0,152,153,5,22,0,0,153,155,1,0,0,0,154,149,1,0,0,0,154,
155,1,0,0,0,155,156,1,0,0,0,156,157,5,20,0,0,157,19,1,0,0,0,158,159,5,29,
0,0,159,160,3,2,1,0,160,161,5,28,0,0,161,168,1,0,0,0,162,163,5,29,0,0,163,
164,3,2,1,0,164,165,5,28,0,0,165,167,1,0,0,0,166,162,1,0,0,0,167,170,1,0,
0,0,168,166,1,0,0,0,168,169,1,0,0,0,169,171,1,0,0,0,170,168,1,0,0,0,171,
172,3,0,0,0,172,173,5,22,0,0,173,21,1,0,0,0,174,175,5,30,0,0,175,176,5,36,
0,0,176,177,5,18,0,0,177,178,3,4,2,0,178,179,5,22,0,0,179,23,1,0,0,0,180,
181,5,31,0,0,181,182,3,0,0,0,182,183,5,22,0,0,183,200,1,0,0,0,184,185,5,
16,0,0,185,186,5,36,0,0,186,187,3,10,5,0,187,188,5,22,0,0,188,200,1,0,0,
0,189,190,5,21,0,0,190,191,5,36,0,0,191,192,3,14,7,0,192,193,5,22,0,0,193,
200,1,0,0,0,194,195,5,23,0,0,195,196,5,36,0,0,196,197,3,18,9,0,197,198,5,
22,0,0,198,200,1,0,0,0,199,180,1,0,0,0,199,184,1,0,0,0,199,189,1,0,0,0,199,
194,1,0,0,0,200,25,1,0,0,0,201,204,3,24,12,0,202,204,3,22,11,0,203,201,1,
0,0,0,203,202,1,0,0,0,204,27,1,0,0,0,205,207,3,26,13,0,206,205,1,0,0,0,207,
208,1,0,0,0,208,206,1,0,0,0,208,209,1,0,0,0,209,29,1,0,0,0,16,43,57,64,72,
76,81,85,96,112,129,146,154,168,199,203,208];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class xdrParser extends antlr4.Parser {

    static grammarFileName = "xdr.g4";
    static literalNames = [ null, "'['", "']'", "'<'", "'>'", "'opaque'", 
                            "'string'", "'*'", "'void'", "'unsigned'", "'int'", 
                            "'hyper'", "'float'", "'double'", "'quadruple'", 
                            "'bool'", "'enum'", "'{'", "'='", "','", "'}'", 
                            "'struct'", "';'", "'union'", "'switch'", "'('", 
                            "')'", "'default'", "':'", "'case'", "'const'", 
                            "'typedef'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "COMMENT", "OCTAL", "DECIMAL", "HEXADECIMAL", 
                             "IDENTIFIER", "WS" ];
    static ruleNames = [ "declaration", "value", "constant", "typeSpecifier", 
                         "enumTypeSpec", "enumBody", "structTypeSpec", "structBody", 
                         "unionTypeSpec", "unionBody", "caseSpec", "constantDef", 
                         "typeDef", "definition", "xdrSpecification" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = xdrParser.ruleNames;
        this.literalNames = xdrParser.literalNames;
        this.symbolicNames = xdrParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	declaration() {
	    let localctx = new DeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, xdrParser.RULE_declaration);
	    var _la = 0; // Token type
	    try {
	        this.state = 72;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 30;
	            this.typeSpecifier();
	            this.state = 31;
	            this.match(xdrParser.IDENTIFIER);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 33;
	            this.typeSpecifier();
	            this.state = 34;
	            this.match(xdrParser.IDENTIFIER);
	            this.state = 35;
	            this.match(xdrParser.T__0);
	            this.state = 36;
	            this.value();
	            this.state = 37;
	            this.match(xdrParser.T__1);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 39;
	            this.typeSpecifier();
	            this.state = 40;
	            this.match(xdrParser.IDENTIFIER);
	            this.state = 41;
	            this.match(xdrParser.T__2);
	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (xdrParser.OCTAL - 33)) | (1 << (xdrParser.DECIMAL - 33)) | (1 << (xdrParser.HEXADECIMAL - 33)) | (1 << (xdrParser.IDENTIFIER - 33)))) !== 0)) {
	                this.state = 42;
	                this.value();
	            }

	            this.state = 45;
	            this.match(xdrParser.T__3);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 47;
	            this.match(xdrParser.T__4);
	            this.state = 48;
	            this.match(xdrParser.IDENTIFIER);
	            this.state = 49;
	            this.match(xdrParser.T__0);
	            this.state = 50;
	            this.value();
	            this.state = 51;
	            this.match(xdrParser.T__1);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 53;
	            this.match(xdrParser.T__4);
	            this.state = 54;
	            this.match(xdrParser.IDENTIFIER);
	            this.state = 55;
	            this.match(xdrParser.T__2);
	            this.state = 57;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (xdrParser.OCTAL - 33)) | (1 << (xdrParser.DECIMAL - 33)) | (1 << (xdrParser.HEXADECIMAL - 33)) | (1 << (xdrParser.IDENTIFIER - 33)))) !== 0)) {
	                this.state = 56;
	                this.value();
	            }

	            this.state = 59;
	            this.match(xdrParser.T__3);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 60;
	            this.match(xdrParser.T__5);
	            this.state = 61;
	            this.match(xdrParser.IDENTIFIER);
	            this.state = 62;
	            this.match(xdrParser.T__2);
	            this.state = 64;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (xdrParser.OCTAL - 33)) | (1 << (xdrParser.DECIMAL - 33)) | (1 << (xdrParser.HEXADECIMAL - 33)) | (1 << (xdrParser.IDENTIFIER - 33)))) !== 0)) {
	                this.state = 63;
	                this.value();
	            }

	            this.state = 66;
	            this.match(xdrParser.T__3);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 67;
	            this.typeSpecifier();
	            this.state = 68;
	            this.match(xdrParser.T__6);
	            this.state = 69;
	            this.match(xdrParser.IDENTIFIER);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 71;
	            this.match(xdrParser.T__7);
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



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, xdrParser.RULE_value);
	    try {
	        this.state = 76;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case xdrParser.OCTAL:
	        case xdrParser.DECIMAL:
	        case xdrParser.HEXADECIMAL:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 74;
	            this.constant();
	            break;
	        case xdrParser.IDENTIFIER:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 75;
	            this.match(xdrParser.IDENTIFIER);
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
	    this.enterRule(localctx, 4, xdrParser.RULE_constant);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        _la = this._input.LA(1);
	        if(!(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (xdrParser.OCTAL - 33)) | (1 << (xdrParser.DECIMAL - 33)) | (1 << (xdrParser.HEXADECIMAL - 33)))) !== 0))) {
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



	typeSpecifier() {
	    let localctx = new TypeSpecifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, xdrParser.RULE_typeSpecifier);
	    var _la = 0; // Token type
	    try {
	        this.state = 96;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 81;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===xdrParser.T__8) {
	                this.state = 80;
	                this.match(xdrParser.T__8);
	            }

	            this.state = 83;
	            this.match(xdrParser.T__9);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 85;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===xdrParser.T__8) {
	                this.state = 84;
	                this.match(xdrParser.T__8);
	            }

	            this.state = 87;
	            this.match(xdrParser.T__10);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 88;
	            this.match(xdrParser.T__11);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 89;
	            this.match(xdrParser.T__12);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 90;
	            this.match(xdrParser.T__13);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 91;
	            this.match(xdrParser.T__14);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 92;
	            this.enumTypeSpec();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 93;
	            this.structTypeSpec();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 94;
	            this.unionTypeSpec();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 95;
	            this.match(xdrParser.IDENTIFIER);
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



	enumTypeSpec() {
	    let localctx = new EnumTypeSpecContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, xdrParser.RULE_enumTypeSpec);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        this.match(xdrParser.T__15);
	        this.state = 99;
	        this.enumBody();
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



	enumBody() {
	    let localctx = new EnumBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, xdrParser.RULE_enumBody);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.match(xdrParser.T__16);

	        this.state = 102;
	        this.match(xdrParser.IDENTIFIER);
	        this.state = 103;
	        this.match(xdrParser.T__17);
	        this.state = 104;
	        this.value();
	        this.state = 112;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===xdrParser.T__18) {
	            this.state = 106;
	            this.match(xdrParser.T__18);
	            this.state = 107;
	            this.match(xdrParser.IDENTIFIER);
	            this.state = 108;
	            this.match(xdrParser.T__17);
	            this.state = 109;
	            this.value();
	            this.state = 114;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 115;
	        this.match(xdrParser.T__19);
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



	structTypeSpec() {
	    let localctx = new StructTypeSpecContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, xdrParser.RULE_structTypeSpec);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        this.match(xdrParser.T__20);
	        this.state = 118;
	        this.structBody();
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



	structBody() {
	    let localctx = new StructBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, xdrParser.RULE_structBody);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.match(xdrParser.T__16);

	        this.state = 121;
	        this.declaration();
	        this.state = 122;
	        this.match(xdrParser.T__21);
	        this.state = 129;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 5)) & ~0x1f) == 0 && ((1 << (_la - 5)) & ((1 << (xdrParser.T__4 - 5)) | (1 << (xdrParser.T__5 - 5)) | (1 << (xdrParser.T__7 - 5)) | (1 << (xdrParser.T__8 - 5)) | (1 << (xdrParser.T__9 - 5)) | (1 << (xdrParser.T__10 - 5)) | (1 << (xdrParser.T__11 - 5)) | (1 << (xdrParser.T__12 - 5)) | (1 << (xdrParser.T__13 - 5)) | (1 << (xdrParser.T__14 - 5)) | (1 << (xdrParser.T__15 - 5)) | (1 << (xdrParser.T__20 - 5)) | (1 << (xdrParser.T__22 - 5)) | (1 << (xdrParser.IDENTIFIER - 5)))) !== 0)) {
	            this.state = 124;
	            this.declaration();
	            this.state = 125;
	            this.match(xdrParser.T__21);
	            this.state = 131;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 132;
	        this.match(xdrParser.T__19);
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



	unionTypeSpec() {
	    let localctx = new UnionTypeSpecContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, xdrParser.RULE_unionTypeSpec);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this.match(xdrParser.T__22);
	        this.state = 135;
	        this.unionBody();
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



	unionBody() {
	    let localctx = new UnionBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, xdrParser.RULE_unionBody);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this.match(xdrParser.T__23);
	        this.state = 138;
	        this.match(xdrParser.T__24);
	        this.state = 139;
	        this.declaration();
	        this.state = 140;
	        this.match(xdrParser.T__25);
	        this.state = 141;
	        this.match(xdrParser.T__16);
	        this.state = 142;
	        this.caseSpec();
	        this.state = 146;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===xdrParser.T__28) {
	            this.state = 143;
	            this.caseSpec();
	            this.state = 148;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 154;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===xdrParser.T__26) {
	            this.state = 149;
	            this.match(xdrParser.T__26);
	            this.state = 150;
	            this.match(xdrParser.T__27);
	            this.state = 151;
	            this.declaration();
	            this.state = 152;
	            this.match(xdrParser.T__21);
	        }

	        this.state = 156;
	        this.match(xdrParser.T__19);
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



	caseSpec() {
	    let localctx = new CaseSpecContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, xdrParser.RULE_caseSpec);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        this.match(xdrParser.T__28);
	        this.state = 159;
	        this.value();
	        this.state = 160;
	        this.match(xdrParser.T__27);
	        this.state = 168;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===xdrParser.T__28) {
	            this.state = 162;
	            this.match(xdrParser.T__28);
	            this.state = 163;
	            this.value();
	            this.state = 164;
	            this.match(xdrParser.T__27);
	            this.state = 170;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 171;
	        this.declaration();
	        this.state = 172;
	        this.match(xdrParser.T__21);
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



	constantDef() {
	    let localctx = new ConstantDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, xdrParser.RULE_constantDef);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 174;
	        this.match(xdrParser.T__29);
	        this.state = 175;
	        this.match(xdrParser.IDENTIFIER);
	        this.state = 176;
	        this.match(xdrParser.T__17);
	        this.state = 177;
	        this.constant();
	        this.state = 178;
	        this.match(xdrParser.T__21);
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



	typeDef() {
	    let localctx = new TypeDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, xdrParser.RULE_typeDef);
	    try {
	        this.state = 199;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case xdrParser.T__30:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 180;
	            this.match(xdrParser.T__30);
	            this.state = 181;
	            this.declaration();
	            this.state = 182;
	            this.match(xdrParser.T__21);
	            break;
	        case xdrParser.T__15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 184;
	            this.match(xdrParser.T__15);
	            this.state = 185;
	            this.match(xdrParser.IDENTIFIER);
	            this.state = 186;
	            this.enumBody();
	            this.state = 187;
	            this.match(xdrParser.T__21);
	            break;
	        case xdrParser.T__20:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 189;
	            this.match(xdrParser.T__20);
	            this.state = 190;
	            this.match(xdrParser.IDENTIFIER);
	            this.state = 191;
	            this.structBody();
	            this.state = 192;
	            this.match(xdrParser.T__21);
	            break;
	        case xdrParser.T__22:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 194;
	            this.match(xdrParser.T__22);
	            this.state = 195;
	            this.match(xdrParser.IDENTIFIER);
	            this.state = 196;
	            this.unionBody();
	            this.state = 197;
	            this.match(xdrParser.T__21);
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



	definition() {
	    let localctx = new DefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, xdrParser.RULE_definition);
	    try {
	        this.state = 203;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case xdrParser.T__15:
	        case xdrParser.T__20:
	        case xdrParser.T__22:
	        case xdrParser.T__30:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 201;
	            this.typeDef();
	            break;
	        case xdrParser.T__29:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 202;
	            this.constantDef();
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



	xdrSpecification() {
	    let localctx = new XdrSpecificationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, xdrParser.RULE_xdrSpecification);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 205;
	            this.definition();
	            this.state = 208; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << xdrParser.T__15) | (1 << xdrParser.T__20) | (1 << xdrParser.T__22) | (1 << xdrParser.T__29) | (1 << xdrParser.T__30))) !== 0));
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

xdrParser.EOF = antlr4.Token.EOF;
xdrParser.T__0 = 1;
xdrParser.T__1 = 2;
xdrParser.T__2 = 3;
xdrParser.T__3 = 4;
xdrParser.T__4 = 5;
xdrParser.T__5 = 6;
xdrParser.T__6 = 7;
xdrParser.T__7 = 8;
xdrParser.T__8 = 9;
xdrParser.T__9 = 10;
xdrParser.T__10 = 11;
xdrParser.T__11 = 12;
xdrParser.T__12 = 13;
xdrParser.T__13 = 14;
xdrParser.T__14 = 15;
xdrParser.T__15 = 16;
xdrParser.T__16 = 17;
xdrParser.T__17 = 18;
xdrParser.T__18 = 19;
xdrParser.T__19 = 20;
xdrParser.T__20 = 21;
xdrParser.T__21 = 22;
xdrParser.T__22 = 23;
xdrParser.T__23 = 24;
xdrParser.T__24 = 25;
xdrParser.T__25 = 26;
xdrParser.T__26 = 27;
xdrParser.T__27 = 28;
xdrParser.T__28 = 29;
xdrParser.T__29 = 30;
xdrParser.T__30 = 31;
xdrParser.COMMENT = 32;
xdrParser.OCTAL = 33;
xdrParser.DECIMAL = 34;
xdrParser.HEXADECIMAL = 35;
xdrParser.IDENTIFIER = 36;
xdrParser.WS = 37;

xdrParser.RULE_declaration = 0;
xdrParser.RULE_value = 1;
xdrParser.RULE_constant = 2;
xdrParser.RULE_typeSpecifier = 3;
xdrParser.RULE_enumTypeSpec = 4;
xdrParser.RULE_enumBody = 5;
xdrParser.RULE_structTypeSpec = 6;
xdrParser.RULE_structBody = 7;
xdrParser.RULE_unionTypeSpec = 8;
xdrParser.RULE_unionBody = 9;
xdrParser.RULE_caseSpec = 10;
xdrParser.RULE_constantDef = 11;
xdrParser.RULE_typeDef = 12;
xdrParser.RULE_definition = 13;
xdrParser.RULE_xdrSpecification = 14;

class DeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xdrParser.RULE_declaration;
    }

	typeSpecifier() {
	    return this.getTypedRuleContext(TypeSpecifierContext,0);
	};

	IDENTIFIER() {
	    return this.getToken(xdrParser.IDENTIFIER, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof xdrListener ) {
	        listener.enterDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xdrListener ) {
	        listener.exitDeclaration(this);
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
        this.ruleIndex = xdrParser.RULE_value;
    }

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	IDENTIFIER() {
	    return this.getToken(xdrParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xdrListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xdrListener ) {
	        listener.exitValue(this);
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
        this.ruleIndex = xdrParser.RULE_constant;
    }

	DECIMAL() {
	    return this.getToken(xdrParser.DECIMAL, 0);
	};

	HEXADECIMAL() {
	    return this.getToken(xdrParser.HEXADECIMAL, 0);
	};

	OCTAL() {
	    return this.getToken(xdrParser.OCTAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xdrListener ) {
	        listener.enterConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xdrListener ) {
	        listener.exitConstant(this);
		}
	}


}



class TypeSpecifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xdrParser.RULE_typeSpecifier;
    }

	enumTypeSpec() {
	    return this.getTypedRuleContext(EnumTypeSpecContext,0);
	};

	structTypeSpec() {
	    return this.getTypedRuleContext(StructTypeSpecContext,0);
	};

	unionTypeSpec() {
	    return this.getTypedRuleContext(UnionTypeSpecContext,0);
	};

	IDENTIFIER() {
	    return this.getToken(xdrParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xdrListener ) {
	        listener.enterTypeSpecifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xdrListener ) {
	        listener.exitTypeSpecifier(this);
		}
	}


}



class EnumTypeSpecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xdrParser.RULE_enumTypeSpec;
    }

	enumBody() {
	    return this.getTypedRuleContext(EnumBodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof xdrListener ) {
	        listener.enterEnumTypeSpec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xdrListener ) {
	        listener.exitEnumTypeSpec(this);
		}
	}


}



class EnumBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xdrParser.RULE_enumBody;
    }

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(xdrParser.IDENTIFIER);
	    } else {
	        return this.getToken(xdrParser.IDENTIFIER, i);
	    }
	};


	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof xdrListener ) {
	        listener.enterEnumBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xdrListener ) {
	        listener.exitEnumBody(this);
		}
	}


}



class StructTypeSpecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xdrParser.RULE_structTypeSpec;
    }

	structBody() {
	    return this.getTypedRuleContext(StructBodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof xdrListener ) {
	        listener.enterStructTypeSpec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xdrListener ) {
	        listener.exitStructTypeSpec(this);
		}
	}


}



class StructBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xdrParser.RULE_structBody;
    }

	declaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclarationContext);
	    } else {
	        return this.getTypedRuleContext(DeclarationContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof xdrListener ) {
	        listener.enterStructBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xdrListener ) {
	        listener.exitStructBody(this);
		}
	}


}



class UnionTypeSpecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xdrParser.RULE_unionTypeSpec;
    }

	unionBody() {
	    return this.getTypedRuleContext(UnionBodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof xdrListener ) {
	        listener.enterUnionTypeSpec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xdrListener ) {
	        listener.exitUnionTypeSpec(this);
		}
	}


}



class UnionBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xdrParser.RULE_unionBody;
    }

	declaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclarationContext);
	    } else {
	        return this.getTypedRuleContext(DeclarationContext,i);
	    }
	};

	caseSpec = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaseSpecContext);
	    } else {
	        return this.getTypedRuleContext(CaseSpecContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof xdrListener ) {
	        listener.enterUnionBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xdrListener ) {
	        listener.exitUnionBody(this);
		}
	}


}



class CaseSpecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xdrParser.RULE_caseSpec;
    }

	declaration() {
	    return this.getTypedRuleContext(DeclarationContext,0);
	};

	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof xdrListener ) {
	        listener.enterCaseSpec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xdrListener ) {
	        listener.exitCaseSpec(this);
		}
	}


}



class ConstantDefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xdrParser.RULE_constantDef;
    }

	IDENTIFIER() {
	    return this.getToken(xdrParser.IDENTIFIER, 0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof xdrListener ) {
	        listener.enterConstantDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xdrListener ) {
	        listener.exitConstantDef(this);
		}
	}


}



class TypeDefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xdrParser.RULE_typeDef;
    }

	declaration() {
	    return this.getTypedRuleContext(DeclarationContext,0);
	};

	IDENTIFIER() {
	    return this.getToken(xdrParser.IDENTIFIER, 0);
	};

	enumBody() {
	    return this.getTypedRuleContext(EnumBodyContext,0);
	};

	structBody() {
	    return this.getTypedRuleContext(StructBodyContext,0);
	};

	unionBody() {
	    return this.getTypedRuleContext(UnionBodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof xdrListener ) {
	        listener.enterTypeDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xdrListener ) {
	        listener.exitTypeDef(this);
		}
	}


}



class DefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xdrParser.RULE_definition;
    }

	typeDef() {
	    return this.getTypedRuleContext(TypeDefContext,0);
	};

	constantDef() {
	    return this.getTypedRuleContext(ConstantDefContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof xdrListener ) {
	        listener.enterDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xdrListener ) {
	        listener.exitDefinition(this);
		}
	}


}



class XdrSpecificationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xdrParser.RULE_xdrSpecification;
    }

	definition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DefinitionContext);
	    } else {
	        return this.getTypedRuleContext(DefinitionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof xdrListener ) {
	        listener.enterXdrSpecification(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xdrListener ) {
	        listener.exitXdrSpecification(this);
		}
	}


}




xdrParser.DeclarationContext = DeclarationContext; 
xdrParser.ValueContext = ValueContext; 
xdrParser.ConstantContext = ConstantContext; 
xdrParser.TypeSpecifierContext = TypeSpecifierContext; 
xdrParser.EnumTypeSpecContext = EnumTypeSpecContext; 
xdrParser.EnumBodyContext = EnumBodyContext; 
xdrParser.StructTypeSpecContext = StructTypeSpecContext; 
xdrParser.StructBodyContext = StructBodyContext; 
xdrParser.UnionTypeSpecContext = UnionTypeSpecContext; 
xdrParser.UnionBodyContext = UnionBodyContext; 
xdrParser.CaseSpecContext = CaseSpecContext; 
xdrParser.ConstantDefContext = ConstantDefContext; 
xdrParser.TypeDefContext = TypeDefContext; 
xdrParser.DefinitionContext = DefinitionContext; 
xdrParser.XdrSpecificationContext = XdrSpecificationContext; 
