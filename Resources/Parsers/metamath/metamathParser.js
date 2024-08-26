// Generated from Resources/Parsers/metamath/metamath.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import metamathListener from './metamathListener.js';
const serializedATN = [4,1,21,187,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,1,0,5,0,46,8,0,10,0,12,0,49,9,0,1,1,1,1,1,1,3,1,54,8,1,
1,2,1,2,1,2,1,2,1,3,1,3,4,3,62,8,3,11,3,12,3,63,1,3,1,3,1,4,1,4,1,4,1,4,
1,4,3,4,73,8,4,1,5,1,5,5,5,77,8,5,10,5,12,5,80,9,5,1,5,1,5,1,6,1,6,4,6,86,
8,6,11,6,12,6,87,1,6,1,6,1,7,1,7,1,7,1,7,5,7,96,8,7,10,7,12,7,99,9,7,1,7,
1,7,1,8,1,8,3,8,105,8,8,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,5,10,
117,8,10,10,10,12,10,120,9,10,1,10,1,10,1,11,1,11,3,11,126,8,11,1,12,1,12,
1,12,1,12,5,12,132,8,12,10,12,12,12,135,9,12,1,12,1,12,1,13,1,13,1,13,1,
13,5,13,143,8,13,10,13,12,13,146,9,13,1,13,1,13,1,13,1,13,1,14,1,14,3,14,
154,8,14,1,15,4,15,157,8,15,11,15,12,15,158,1,16,1,16,5,16,163,8,16,10,16,
12,16,166,9,16,1,16,1,16,4,16,170,8,16,11,16,12,16,171,1,17,1,17,1,18,4,
18,177,8,18,11,18,12,18,178,1,19,1,19,1,20,1,20,1,21,1,21,1,21,0,0,22,0,
2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,0,2,2,0,14,14,
18,18,1,0,15,17,185,0,47,1,0,0,0,2,53,1,0,0,0,4,55,1,0,0,0,6,59,1,0,0,0,
8,72,1,0,0,0,10,74,1,0,0,0,12,83,1,0,0,0,14,91,1,0,0,0,16,104,1,0,0,0,18,
106,1,0,0,0,20,112,1,0,0,0,22,125,1,0,0,0,24,127,1,0,0,0,26,138,1,0,0,0,
28,153,1,0,0,0,30,156,1,0,0,0,32,160,1,0,0,0,34,173,1,0,0,0,36,176,1,0,0,
0,38,180,1,0,0,0,40,182,1,0,0,0,42,184,1,0,0,0,44,46,3,2,1,0,45,44,1,0,0,
0,46,49,1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,1,1,0,0,0,49,47,1,0,0,0,50,
54,3,4,2,0,51,54,3,6,3,0,52,54,3,8,4,0,53,50,1,0,0,0,53,51,1,0,0,0,53,52,
1,0,0,0,54,3,1,0,0,0,55,56,5,1,0,0,56,57,3,38,19,0,57,58,5,2,0,0,58,5,1,
0,0,0,59,61,5,3,0,0,60,62,3,40,20,0,61,60,1,0,0,0,62,63,1,0,0,0,63,61,1,
0,0,0,63,64,1,0,0,0,64,65,1,0,0,0,65,66,5,4,0,0,66,7,1,0,0,0,67,73,3,10,
5,0,68,73,3,12,6,0,69,73,3,14,7,0,70,73,3,16,8,0,71,73,3,22,11,0,72,67,1,
0,0,0,72,68,1,0,0,0,72,69,1,0,0,0,72,70,1,0,0,0,72,71,1,0,0,0,73,9,1,0,0,
0,74,78,5,5,0,0,75,77,3,8,4,0,76,75,1,0,0,0,77,80,1,0,0,0,78,76,1,0,0,0,
78,79,1,0,0,0,79,81,1,0,0,0,80,78,1,0,0,0,81,82,5,6,0,0,82,11,1,0,0,0,83,
85,5,7,0,0,84,86,3,42,21,0,85,84,1,0,0,0,86,87,1,0,0,0,87,85,1,0,0,0,87,
88,1,0,0,0,88,89,1,0,0,0,89,90,5,4,0,0,90,13,1,0,0,0,91,92,5,8,0,0,92,93,
3,42,21,0,93,97,3,42,21,0,94,96,3,42,21,0,95,94,1,0,0,0,96,99,1,0,0,0,97,
95,1,0,0,0,97,98,1,0,0,0,98,100,1,0,0,0,99,97,1,0,0,0,100,101,5,4,0,0,101,
15,1,0,0,0,102,105,3,18,9,0,103,105,3,20,10,0,104,102,1,0,0,0,104,103,1,
0,0,0,105,17,1,0,0,0,106,107,5,18,0,0,107,108,5,9,0,0,108,109,3,34,17,0,
109,110,3,42,21,0,110,111,5,4,0,0,111,19,1,0,0,0,112,113,5,18,0,0,113,114,
5,10,0,0,114,118,3,34,17,0,115,117,3,36,18,0,116,115,1,0,0,0,117,120,1,0,
0,0,118,116,1,0,0,0,118,119,1,0,0,0,119,121,1,0,0,0,120,118,1,0,0,0,121,
122,5,4,0,0,122,21,1,0,0,0,123,126,3,24,12,0,124,126,3,26,13,0,125,123,1,
0,0,0,125,124,1,0,0,0,126,23,1,0,0,0,127,128,5,18,0,0,128,129,5,11,0,0,129,
133,3,34,17,0,130,132,3,36,18,0,131,130,1,0,0,0,132,135,1,0,0,0,133,131,
1,0,0,0,133,134,1,0,0,0,134,136,1,0,0,0,135,133,1,0,0,0,136,137,5,4,0,0,
137,25,1,0,0,0,138,139,5,18,0,0,139,140,5,12,0,0,140,144,3,34,17,0,141,143,
3,36,18,0,142,141,1,0,0,0,143,146,1,0,0,0,144,142,1,0,0,0,144,145,1,0,0,
0,145,147,1,0,0,0,146,144,1,0,0,0,147,148,5,13,0,0,148,149,3,28,14,0,149,
150,5,4,0,0,150,27,1,0,0,0,151,154,3,30,15,0,152,154,3,32,16,0,153,151,1,
0,0,0,153,152,1,0,0,0,154,29,1,0,0,0,155,157,7,0,0,0,156,155,1,0,0,0,157,
158,1,0,0,0,158,156,1,0,0,0,158,159,1,0,0,0,159,31,1,0,0,0,160,164,5,15,
0,0,161,163,5,18,0,0,162,161,1,0,0,0,163,166,1,0,0,0,164,162,1,0,0,0,164,
165,1,0,0,0,165,167,1,0,0,0,166,164,1,0,0,0,167,169,5,16,0,0,168,170,5,19,
0,0,169,168,1,0,0,0,170,171,1,0,0,0,171,169,1,0,0,0,171,172,1,0,0,0,172,
33,1,0,0,0,173,174,3,40,20,0,174,35,1,0,0,0,175,177,7,1,0,0,176,175,1,0,
0,0,177,178,1,0,0,0,178,176,1,0,0,0,178,179,1,0,0,0,179,37,1,0,0,0,180,181,
3,36,18,0,181,39,1,0,0,0,182,183,3,36,18,0,183,41,1,0,0,0,184,185,3,36,18,
0,185,43,1,0,0,0,17,47,53,63,72,78,87,97,104,118,125,133,144,153,158,164,
171,178];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class metamathParser extends antlr4.Parser {

    static grammarFileName = "metamath.g4";
    static literalNames = [ null, "'$['", "'$]'", "'$c'", "'$.'", "'${'", 
                            "'$}'", "'$v'", "'$d'", "'$f'", "'$e'", "'$a'", 
                            "'$p'", "'$='", "'?'", "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "LPAREN", 
                             "RPAREN", "PRINTABLECHARACTER", "LABEL", "COMPRESSEDPROOFBLOCK", 
                             "BLOCK_COMMENT", "WS" ];
    static ruleNames = [ "database", "outermostscopestmt", "includestmt", 
                         "constantstmt", "stmt", "block", "variablestmt", 
                         "disjointstmt", "hypothesisstmt", "floatingstmt", 
                         "essentialstmt", "assertstmt", "axiomstmt", "provablestmt", 
                         "proof", "uncompressedproof", "compressedproof", 
                         "typecode", "mathsymbol", "filename", "constant", 
                         "variable" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = metamathParser.ruleNames;
        this.literalNames = metamathParser.literalNames;
        this.symbolicNames = metamathParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	database() {
	    let localctx = new DatabaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, metamathParser.RULE_database);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << metamathParser.T__0) | (1 << metamathParser.T__2) | (1 << metamathParser.T__4) | (1 << metamathParser.T__6) | (1 << metamathParser.T__7) | (1 << metamathParser.LABEL))) !== 0)) {
	            this.state = 44;
	            this.outermostscopestmt();
	            this.state = 49;
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



	outermostscopestmt() {
	    let localctx = new OutermostscopestmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, metamathParser.RULE_outermostscopestmt);
	    try {
	        this.state = 53;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case metamathParser.T__0:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 50;
	            this.includestmt();
	            break;
	        case metamathParser.T__2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 51;
	            this.constantstmt();
	            break;
	        case metamathParser.T__4:
	        case metamathParser.T__6:
	        case metamathParser.T__7:
	        case metamathParser.LABEL:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 52;
	            this.stmt();
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



	includestmt() {
	    let localctx = new IncludestmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, metamathParser.RULE_includestmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(metamathParser.T__0);
	        this.state = 56;
	        this.filename();
	        this.state = 57;
	        this.match(metamathParser.T__1);
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



	constantstmt() {
	    let localctx = new ConstantstmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, metamathParser.RULE_constantstmt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.match(metamathParser.T__2);
	        this.state = 61; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 60;
	            this.constant();
	            this.state = 63; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << metamathParser.LPAREN) | (1 << metamathParser.RPAREN) | (1 << metamathParser.PRINTABLECHARACTER))) !== 0));
	        this.state = 65;
	        this.match(metamathParser.T__3);
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



	stmt() {
	    let localctx = new StmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, metamathParser.RULE_stmt);
	    try {
	        this.state = 72;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 67;
	            this.block();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 68;
	            this.variablestmt();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 69;
	            this.disjointstmt();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 70;
	            this.hypothesisstmt();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 71;
	            this.assertstmt();
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



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, metamathParser.RULE_block);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.match(metamathParser.T__4);
	        this.state = 78;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << metamathParser.T__4) | (1 << metamathParser.T__6) | (1 << metamathParser.T__7) | (1 << metamathParser.LABEL))) !== 0)) {
	            this.state = 75;
	            this.stmt();
	            this.state = 80;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 81;
	        this.match(metamathParser.T__5);
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



	variablestmt() {
	    let localctx = new VariablestmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, metamathParser.RULE_variablestmt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this.match(metamathParser.T__6);
	        this.state = 85; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 84;
	            this.variable();
	            this.state = 87; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << metamathParser.LPAREN) | (1 << metamathParser.RPAREN) | (1 << metamathParser.PRINTABLECHARACTER))) !== 0));
	        this.state = 89;
	        this.match(metamathParser.T__3);
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



	disjointstmt() {
	    let localctx = new DisjointstmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, metamathParser.RULE_disjointstmt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.match(metamathParser.T__7);
	        this.state = 92;
	        this.variable();
	        this.state = 93;
	        this.variable();
	        this.state = 97;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << metamathParser.LPAREN) | (1 << metamathParser.RPAREN) | (1 << metamathParser.PRINTABLECHARACTER))) !== 0)) {
	            this.state = 94;
	            this.variable();
	            this.state = 99;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 100;
	        this.match(metamathParser.T__3);
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



	hypothesisstmt() {
	    let localctx = new HypothesisstmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, metamathParser.RULE_hypothesisstmt);
	    try {
	        this.state = 104;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 102;
	            this.floatingstmt();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 103;
	            this.essentialstmt();
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



	floatingstmt() {
	    let localctx = new FloatingstmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, metamathParser.RULE_floatingstmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this.match(metamathParser.LABEL);
	        this.state = 107;
	        this.match(metamathParser.T__8);
	        this.state = 108;
	        this.typecode();
	        this.state = 109;
	        this.variable();
	        this.state = 110;
	        this.match(metamathParser.T__3);
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



	essentialstmt() {
	    let localctx = new EssentialstmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, metamathParser.RULE_essentialstmt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        this.match(metamathParser.LABEL);
	        this.state = 113;
	        this.match(metamathParser.T__9);
	        this.state = 114;
	        this.typecode();
	        this.state = 118;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << metamathParser.LPAREN) | (1 << metamathParser.RPAREN) | (1 << metamathParser.PRINTABLECHARACTER))) !== 0)) {
	            this.state = 115;
	            this.mathsymbol();
	            this.state = 120;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 121;
	        this.match(metamathParser.T__3);
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



	assertstmt() {
	    let localctx = new AssertstmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, metamathParser.RULE_assertstmt);
	    try {
	        this.state = 125;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 123;
	            this.axiomstmt();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 124;
	            this.provablestmt();
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



	axiomstmt() {
	    let localctx = new AxiomstmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, metamathParser.RULE_axiomstmt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        this.match(metamathParser.LABEL);
	        this.state = 128;
	        this.match(metamathParser.T__10);
	        this.state = 129;
	        this.typecode();
	        this.state = 133;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << metamathParser.LPAREN) | (1 << metamathParser.RPAREN) | (1 << metamathParser.PRINTABLECHARACTER))) !== 0)) {
	            this.state = 130;
	            this.mathsymbol();
	            this.state = 135;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 136;
	        this.match(metamathParser.T__3);
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



	provablestmt() {
	    let localctx = new ProvablestmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, metamathParser.RULE_provablestmt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        this.match(metamathParser.LABEL);
	        this.state = 139;
	        this.match(metamathParser.T__11);
	        this.state = 140;
	        this.typecode();
	        this.state = 144;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << metamathParser.LPAREN) | (1 << metamathParser.RPAREN) | (1 << metamathParser.PRINTABLECHARACTER))) !== 0)) {
	            this.state = 141;
	            this.mathsymbol();
	            this.state = 146;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 147;
	        this.match(metamathParser.T__12);
	        this.state = 148;
	        this.proof();
	        this.state = 149;
	        this.match(metamathParser.T__3);
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



	proof() {
	    let localctx = new ProofContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, metamathParser.RULE_proof);
	    try {
	        this.state = 153;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case metamathParser.T__13:
	        case metamathParser.LABEL:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 151;
	            this.uncompressedproof();
	            break;
	        case metamathParser.LPAREN:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 152;
	            this.compressedproof();
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



	uncompressedproof() {
	    let localctx = new UncompressedproofContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, metamathParser.RULE_uncompressedproof);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 155;
	            _la = this._input.LA(1);
	            if(!(_la===metamathParser.T__13 || _la===metamathParser.LABEL)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 158; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===metamathParser.T__13 || _la===metamathParser.LABEL);
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



	compressedproof() {
	    let localctx = new CompressedproofContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, metamathParser.RULE_compressedproof);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
	        this.match(metamathParser.LPAREN);
	        this.state = 164;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===metamathParser.LABEL) {
	            this.state = 161;
	            this.match(metamathParser.LABEL);
	            this.state = 166;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 167;
	        this.match(metamathParser.RPAREN);
	        this.state = 169; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 168;
	            this.match(metamathParser.COMPRESSEDPROOFBLOCK);
	            this.state = 171; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===metamathParser.COMPRESSEDPROOFBLOCK);
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



	typecode() {
	    let localctx = new TypecodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, metamathParser.RULE_typecode);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 173;
	        this.constant();
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



	mathsymbol() {
	    let localctx = new MathsymbolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, metamathParser.RULE_mathsymbol);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 176; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 175;
	        		_la = this._input.LA(1);
	        		if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << metamathParser.LPAREN) | (1 << metamathParser.RPAREN) | (1 << metamathParser.PRINTABLECHARACTER))) !== 0))) {
	        		this._errHandler.recoverInline(this);
	        		}
	        		else {
	        			this._errHandler.reportMatch(this);
	        		    this.consume();
	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 178; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,16, this._ctx);
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



	filename() {
	    let localctx = new FilenameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, metamathParser.RULE_filename);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 180;
	        this.mathsymbol();
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
	    this.enterRule(localctx, 40, metamathParser.RULE_constant);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 182;
	        this.mathsymbol();
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
	    this.enterRule(localctx, 42, metamathParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        this.mathsymbol();
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

metamathParser.EOF = antlr4.Token.EOF;
metamathParser.T__0 = 1;
metamathParser.T__1 = 2;
metamathParser.T__2 = 3;
metamathParser.T__3 = 4;
metamathParser.T__4 = 5;
metamathParser.T__5 = 6;
metamathParser.T__6 = 7;
metamathParser.T__7 = 8;
metamathParser.T__8 = 9;
metamathParser.T__9 = 10;
metamathParser.T__10 = 11;
metamathParser.T__11 = 12;
metamathParser.T__12 = 13;
metamathParser.T__13 = 14;
metamathParser.LPAREN = 15;
metamathParser.RPAREN = 16;
metamathParser.PRINTABLECHARACTER = 17;
metamathParser.LABEL = 18;
metamathParser.COMPRESSEDPROOFBLOCK = 19;
metamathParser.BLOCK_COMMENT = 20;
metamathParser.WS = 21;

metamathParser.RULE_database = 0;
metamathParser.RULE_outermostscopestmt = 1;
metamathParser.RULE_includestmt = 2;
metamathParser.RULE_constantstmt = 3;
metamathParser.RULE_stmt = 4;
metamathParser.RULE_block = 5;
metamathParser.RULE_variablestmt = 6;
metamathParser.RULE_disjointstmt = 7;
metamathParser.RULE_hypothesisstmt = 8;
metamathParser.RULE_floatingstmt = 9;
metamathParser.RULE_essentialstmt = 10;
metamathParser.RULE_assertstmt = 11;
metamathParser.RULE_axiomstmt = 12;
metamathParser.RULE_provablestmt = 13;
metamathParser.RULE_proof = 14;
metamathParser.RULE_uncompressedproof = 15;
metamathParser.RULE_compressedproof = 16;
metamathParser.RULE_typecode = 17;
metamathParser.RULE_mathsymbol = 18;
metamathParser.RULE_filename = 19;
metamathParser.RULE_constant = 20;
metamathParser.RULE_variable = 21;

class DatabaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = metamathParser.RULE_database;
    }

	outermostscopestmt = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OutermostscopestmtContext);
	    } else {
	        return this.getTypedRuleContext(OutermostscopestmtContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.enterDatabase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.exitDatabase(this);
		}
	}


}



class OutermostscopestmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = metamathParser.RULE_outermostscopestmt;
    }

	includestmt() {
	    return this.getTypedRuleContext(IncludestmtContext,0);
	};

	constantstmt() {
	    return this.getTypedRuleContext(ConstantstmtContext,0);
	};

	stmt() {
	    return this.getTypedRuleContext(StmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.enterOutermostscopestmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.exitOutermostscopestmt(this);
		}
	}


}



class IncludestmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = metamathParser.RULE_includestmt;
    }

	filename() {
	    return this.getTypedRuleContext(FilenameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.enterIncludestmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.exitIncludestmt(this);
		}
	}


}



class ConstantstmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = metamathParser.RULE_constantstmt;
    }

	constant = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConstantContext);
	    } else {
	        return this.getTypedRuleContext(ConstantContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.enterConstantstmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.exitConstantstmt(this);
		}
	}


}



class StmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = metamathParser.RULE_stmt;
    }

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	variablestmt() {
	    return this.getTypedRuleContext(VariablestmtContext,0);
	};

	disjointstmt() {
	    return this.getTypedRuleContext(DisjointstmtContext,0);
	};

	hypothesisstmt() {
	    return this.getTypedRuleContext(HypothesisstmtContext,0);
	};

	assertstmt() {
	    return this.getTypedRuleContext(AssertstmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.enterStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.exitStmt(this);
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
        this.ruleIndex = metamathParser.RULE_block;
    }

	stmt = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StmtContext);
	    } else {
	        return this.getTypedRuleContext(StmtContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.exitBlock(this);
		}
	}


}



class VariablestmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = metamathParser.RULE_variablestmt;
    }

	variable = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableContext);
	    } else {
	        return this.getTypedRuleContext(VariableContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.enterVariablestmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.exitVariablestmt(this);
		}
	}


}



class DisjointstmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = metamathParser.RULE_disjointstmt;
    }

	variable = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableContext);
	    } else {
	        return this.getTypedRuleContext(VariableContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.enterDisjointstmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.exitDisjointstmt(this);
		}
	}


}



class HypothesisstmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = metamathParser.RULE_hypothesisstmt;
    }

	floatingstmt() {
	    return this.getTypedRuleContext(FloatingstmtContext,0);
	};

	essentialstmt() {
	    return this.getTypedRuleContext(EssentialstmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.enterHypothesisstmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.exitHypothesisstmt(this);
		}
	}


}



class FloatingstmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = metamathParser.RULE_floatingstmt;
    }

	LABEL() {
	    return this.getToken(metamathParser.LABEL, 0);
	};

	typecode() {
	    return this.getTypedRuleContext(TypecodeContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.enterFloatingstmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.exitFloatingstmt(this);
		}
	}


}



class EssentialstmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = metamathParser.RULE_essentialstmt;
    }

	LABEL() {
	    return this.getToken(metamathParser.LABEL, 0);
	};

	typecode() {
	    return this.getTypedRuleContext(TypecodeContext,0);
	};

	mathsymbol = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MathsymbolContext);
	    } else {
	        return this.getTypedRuleContext(MathsymbolContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.enterEssentialstmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.exitEssentialstmt(this);
		}
	}


}



class AssertstmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = metamathParser.RULE_assertstmt;
    }

	axiomstmt() {
	    return this.getTypedRuleContext(AxiomstmtContext,0);
	};

	provablestmt() {
	    return this.getTypedRuleContext(ProvablestmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.enterAssertstmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.exitAssertstmt(this);
		}
	}


}



class AxiomstmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = metamathParser.RULE_axiomstmt;
    }

	LABEL() {
	    return this.getToken(metamathParser.LABEL, 0);
	};

	typecode() {
	    return this.getTypedRuleContext(TypecodeContext,0);
	};

	mathsymbol = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MathsymbolContext);
	    } else {
	        return this.getTypedRuleContext(MathsymbolContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.enterAxiomstmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.exitAxiomstmt(this);
		}
	}


}



class ProvablestmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = metamathParser.RULE_provablestmt;
    }

	LABEL() {
	    return this.getToken(metamathParser.LABEL, 0);
	};

	typecode() {
	    return this.getTypedRuleContext(TypecodeContext,0);
	};

	proof() {
	    return this.getTypedRuleContext(ProofContext,0);
	};

	mathsymbol = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MathsymbolContext);
	    } else {
	        return this.getTypedRuleContext(MathsymbolContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.enterProvablestmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.exitProvablestmt(this);
		}
	}


}



class ProofContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = metamathParser.RULE_proof;
    }

	uncompressedproof() {
	    return this.getTypedRuleContext(UncompressedproofContext,0);
	};

	compressedproof() {
	    return this.getTypedRuleContext(CompressedproofContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.enterProof(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.exitProof(this);
		}
	}


}



class UncompressedproofContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = metamathParser.RULE_uncompressedproof;
    }

	LABEL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(metamathParser.LABEL);
	    } else {
	        return this.getToken(metamathParser.LABEL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.enterUncompressedproof(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.exitUncompressedproof(this);
		}
	}


}



class CompressedproofContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = metamathParser.RULE_compressedproof;
    }

	LPAREN() {
	    return this.getToken(metamathParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(metamathParser.RPAREN, 0);
	};

	LABEL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(metamathParser.LABEL);
	    } else {
	        return this.getToken(metamathParser.LABEL, i);
	    }
	};


	COMPRESSEDPROOFBLOCK = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(metamathParser.COMPRESSEDPROOFBLOCK);
	    } else {
	        return this.getToken(metamathParser.COMPRESSEDPROOFBLOCK, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.enterCompressedproof(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.exitCompressedproof(this);
		}
	}


}



class TypecodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = metamathParser.RULE_typecode;
    }

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.enterTypecode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.exitTypecode(this);
		}
	}


}



class MathsymbolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = metamathParser.RULE_mathsymbol;
    }

	PRINTABLECHARACTER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(metamathParser.PRINTABLECHARACTER);
	    } else {
	        return this.getToken(metamathParser.PRINTABLECHARACTER, i);
	    }
	};


	LPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(metamathParser.LPAREN);
	    } else {
	        return this.getToken(metamathParser.LPAREN, i);
	    }
	};


	RPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(metamathParser.RPAREN);
	    } else {
	        return this.getToken(metamathParser.RPAREN, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.enterMathsymbol(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.exitMathsymbol(this);
		}
	}


}



class FilenameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = metamathParser.RULE_filename;
    }

	mathsymbol() {
	    return this.getTypedRuleContext(MathsymbolContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.enterFilename(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.exitFilename(this);
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
        this.ruleIndex = metamathParser.RULE_constant;
    }

	mathsymbol() {
	    return this.getTypedRuleContext(MathsymbolContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.enterConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.exitConstant(this);
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
        this.ruleIndex = metamathParser.RULE_variable;
    }

	mathsymbol() {
	    return this.getTypedRuleContext(MathsymbolContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.exitVariable(this);
		}
	}


}




metamathParser.DatabaseContext = DatabaseContext; 
metamathParser.OutermostscopestmtContext = OutermostscopestmtContext; 
metamathParser.IncludestmtContext = IncludestmtContext; 
metamathParser.ConstantstmtContext = ConstantstmtContext; 
metamathParser.StmtContext = StmtContext; 
metamathParser.BlockContext = BlockContext; 
metamathParser.VariablestmtContext = VariablestmtContext; 
metamathParser.DisjointstmtContext = DisjointstmtContext; 
metamathParser.HypothesisstmtContext = HypothesisstmtContext; 
metamathParser.FloatingstmtContext = FloatingstmtContext; 
metamathParser.EssentialstmtContext = EssentialstmtContext; 
metamathParser.AssertstmtContext = AssertstmtContext; 
metamathParser.AxiomstmtContext = AxiomstmtContext; 
metamathParser.ProvablestmtContext = ProvablestmtContext; 
metamathParser.ProofContext = ProofContext; 
metamathParser.UncompressedproofContext = UncompressedproofContext; 
metamathParser.CompressedproofContext = CompressedproofContext; 
metamathParser.TypecodeContext = TypecodeContext; 
metamathParser.MathsymbolContext = MathsymbolContext; 
metamathParser.FilenameContext = FilenameContext; 
metamathParser.ConstantContext = ConstantContext; 
metamathParser.VariableContext = VariableContext; 
