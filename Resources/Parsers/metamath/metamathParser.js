// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/metamath/metamath.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import metamathListener from './metamathListener.js';
const serializedATN = [4,1,21,195,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,1,0,5,0,48,8,0,10,0,12,0,51,9,0,1,0,1,0,1,1,
1,1,1,1,3,1,58,8,1,1,2,1,2,1,2,1,2,1,3,1,3,4,3,66,8,3,11,3,12,3,67,1,3,1,
3,1,4,1,4,1,4,1,4,1,4,3,4,77,8,4,1,5,1,5,5,5,81,8,5,10,5,12,5,84,9,5,1,5,
1,5,1,6,1,6,4,6,90,8,6,11,6,12,6,91,1,6,1,6,1,7,1,7,1,7,1,7,5,7,100,8,7,
10,7,12,7,103,9,7,1,7,1,7,1,8,1,8,3,8,109,8,8,1,9,1,9,1,9,1,9,1,9,1,9,1,
10,1,10,1,10,1,10,5,10,121,8,10,10,10,12,10,124,9,10,1,10,1,10,1,11,1,11,
3,11,130,8,11,1,12,1,12,1,12,1,12,5,12,136,8,12,10,12,12,12,139,9,12,1,12,
1,12,1,13,1,13,1,13,1,13,5,13,147,8,13,10,13,12,13,150,9,13,1,13,1,13,1,
13,1,13,1,14,1,14,3,14,158,8,14,1,15,4,15,161,8,15,11,15,12,15,162,1,16,
1,16,5,16,167,8,16,10,16,12,16,170,9,16,1,16,1,16,4,16,174,8,16,11,16,12,
16,175,1,17,1,17,1,18,1,18,1,18,4,18,183,8,18,11,18,12,18,184,1,19,1,19,
1,20,1,20,1,21,1,21,1,22,1,22,1,22,0,0,23,0,2,4,6,8,10,12,14,16,18,20,22,
24,26,28,30,32,34,36,38,40,42,44,0,2,2,0,14,14,17,17,1,0,17,18,194,0,49,
1,0,0,0,2,57,1,0,0,0,4,59,1,0,0,0,6,63,1,0,0,0,8,76,1,0,0,0,10,78,1,0,0,
0,12,87,1,0,0,0,14,95,1,0,0,0,16,108,1,0,0,0,18,110,1,0,0,0,20,116,1,0,0,
0,22,129,1,0,0,0,24,131,1,0,0,0,26,142,1,0,0,0,28,157,1,0,0,0,30,160,1,0,
0,0,32,164,1,0,0,0,34,177,1,0,0,0,36,182,1,0,0,0,38,186,1,0,0,0,40,188,1,
0,0,0,42,190,1,0,0,0,44,192,1,0,0,0,46,48,3,2,1,0,47,46,1,0,0,0,48,51,1,
0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,50,52,1,0,0,0,51,49,1,0,0,0,52,53,5,0,
0,1,53,1,1,0,0,0,54,58,3,4,2,0,55,58,3,6,3,0,56,58,3,8,4,0,57,54,1,0,0,0,
57,55,1,0,0,0,57,56,1,0,0,0,58,3,1,0,0,0,59,60,5,1,0,0,60,61,3,40,20,0,61,
62,5,2,0,0,62,5,1,0,0,0,63,65,5,3,0,0,64,66,3,42,21,0,65,64,1,0,0,0,66,67,
1,0,0,0,67,65,1,0,0,0,67,68,1,0,0,0,68,69,1,0,0,0,69,70,5,4,0,0,70,7,1,0,
0,0,71,77,3,10,5,0,72,77,3,12,6,0,73,77,3,14,7,0,74,77,3,16,8,0,75,77,3,
22,11,0,76,71,1,0,0,0,76,72,1,0,0,0,76,73,1,0,0,0,76,74,1,0,0,0,76,75,1,
0,0,0,77,9,1,0,0,0,78,82,5,5,0,0,79,81,3,8,4,0,80,79,1,0,0,0,81,84,1,0,0,
0,82,80,1,0,0,0,82,83,1,0,0,0,83,85,1,0,0,0,84,82,1,0,0,0,85,86,5,6,0,0,
86,11,1,0,0,0,87,89,5,7,0,0,88,90,3,44,22,0,89,88,1,0,0,0,90,91,1,0,0,0,
91,89,1,0,0,0,91,92,1,0,0,0,92,93,1,0,0,0,93,94,5,4,0,0,94,13,1,0,0,0,95,
96,5,8,0,0,96,97,3,44,22,0,97,101,3,44,22,0,98,100,3,44,22,0,99,98,1,0,0,
0,100,103,1,0,0,0,101,99,1,0,0,0,101,102,1,0,0,0,102,104,1,0,0,0,103,101,
1,0,0,0,104,105,5,4,0,0,105,15,1,0,0,0,106,109,3,18,9,0,107,109,3,20,10,
0,108,106,1,0,0,0,108,107,1,0,0,0,109,17,1,0,0,0,110,111,5,17,0,0,111,112,
5,9,0,0,112,113,3,34,17,0,113,114,3,44,22,0,114,115,5,4,0,0,115,19,1,0,0,
0,116,117,5,17,0,0,117,118,5,10,0,0,118,122,3,34,17,0,119,121,3,36,18,0,
120,119,1,0,0,0,121,124,1,0,0,0,122,120,1,0,0,0,122,123,1,0,0,0,123,125,
1,0,0,0,124,122,1,0,0,0,125,126,5,4,0,0,126,21,1,0,0,0,127,130,3,24,12,0,
128,130,3,26,13,0,129,127,1,0,0,0,129,128,1,0,0,0,130,23,1,0,0,0,131,132,
5,17,0,0,132,133,5,11,0,0,133,137,3,34,17,0,134,136,3,36,18,0,135,134,1,
0,0,0,136,139,1,0,0,0,137,135,1,0,0,0,137,138,1,0,0,0,138,140,1,0,0,0,139,
137,1,0,0,0,140,141,5,4,0,0,141,25,1,0,0,0,142,143,5,17,0,0,143,144,5,12,
0,0,144,148,3,34,17,0,145,147,3,36,18,0,146,145,1,0,0,0,147,150,1,0,0,0,
148,146,1,0,0,0,148,149,1,0,0,0,149,151,1,0,0,0,150,148,1,0,0,0,151,152,
5,13,0,0,152,153,3,28,14,0,153,154,5,4,0,0,154,27,1,0,0,0,155,158,3,30,15,
0,156,158,3,32,16,0,157,155,1,0,0,0,157,156,1,0,0,0,158,29,1,0,0,0,159,161,
7,0,0,0,160,159,1,0,0,0,161,162,1,0,0,0,162,160,1,0,0,0,162,163,1,0,0,0,
163,31,1,0,0,0,164,168,5,15,0,0,165,167,5,17,0,0,166,165,1,0,0,0,167,170,
1,0,0,0,168,166,1,0,0,0,168,169,1,0,0,0,169,171,1,0,0,0,170,168,1,0,0,0,
171,173,5,16,0,0,172,174,5,19,0,0,173,172,1,0,0,0,174,175,1,0,0,0,175,173,
1,0,0,0,175,176,1,0,0,0,176,33,1,0,0,0,177,178,3,42,21,0,178,35,1,0,0,0,
179,183,3,38,19,0,180,183,5,15,0,0,181,183,5,16,0,0,182,179,1,0,0,0,182,
180,1,0,0,0,182,181,1,0,0,0,183,184,1,0,0,0,184,182,1,0,0,0,184,185,1,0,
0,0,185,37,1,0,0,0,186,187,7,1,0,0,187,39,1,0,0,0,188,189,3,36,18,0,189,
41,1,0,0,0,190,191,3,36,18,0,191,43,1,0,0,0,192,193,3,36,18,0,193,45,1,0,
0,0,18,49,57,67,76,82,91,101,108,122,129,137,148,157,162,168,175,182,184];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class metamathParser extends antlr4.Parser {

    static grammarFileName = "metamath.g4";
    static literalNames = [ null, "'$['", "'$]'", "'$c'", "'$.'", "'${'", 
                            "'$}'", "'$v'", "'$d'", "'$f'", "'$e'", "'$a'", 
                            "'$p'", "'$='", "'?'", "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "LPAREN", 
                             "RPAREN", "LABEL", "PRINTABLECHARACTER", "COMPRESSEDPROOFBLOCK", 
                             "BLOCK_COMMENT", "WS" ];
    static ruleNames = [ "database", "outermostscopestmt", "includestmt", 
                         "constantstmt", "stmt", "block", "variablestmt", 
                         "disjointstmt", "hypothesisstmt", "floatingstmt", 
                         "essentialstmt", "assertstmt", "axiomstmt", "provablestmt", 
                         "proof", "uncompressedproof", "compressedproof", 
                         "typecode", "mathsymbol", "printablecharacter", 
                         "filename", "constant", "variable" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = metamathParser.ruleNames;
        this.literalNames = metamathParser.literalNames;
        this.symbolicNames = metamathParser.symbolicNames;
    }



	database() {
	    let localctx = new DatabaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, metamathParser.RULE_database);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 131498) !== 0)) {
	            this.state = 46;
	            this.outermostscopestmt();
	            this.state = 51;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 52;
	        this.match(metamathParser.EOF);
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
	        this.state = 57;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 54;
	            this.includestmt();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 55;
	            this.constantstmt();
	            break;
	        case 5:
	        case 7:
	        case 8:
	        case 17:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 56;
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
	        this.state = 59;
	        this.match(metamathParser.T__0);
	        this.state = 60;
	        this.filename();
	        this.state = 61;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.match(metamathParser.T__2);
	        this.state = 65; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 64;
	            this.constant();
	            this.state = 67; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 491520) !== 0));
	        this.state = 69;
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
	        this.state = 76;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 71;
	            this.block();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 72;
	            this.variablestmt();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 73;
	            this.disjointstmt();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 74;
	            this.hypothesisstmt();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 75;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.match(metamathParser.T__4);
	        this.state = 82;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 131488) !== 0)) {
	            this.state = 79;
	            this.stmt();
	            this.state = 84;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 85;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.match(metamathParser.T__6);
	        this.state = 89; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 88;
	            this.variable();
	            this.state = 91; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 491520) !== 0));
	        this.state = 93;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this.match(metamathParser.T__7);
	        this.state = 96;
	        this.variable();
	        this.state = 97;
	        this.variable();
	        this.state = 101;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 491520) !== 0)) {
	            this.state = 98;
	            this.variable();
	            this.state = 103;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 104;
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
	        this.state = 108;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 106;
	            this.floatingstmt();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 107;
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
	        this.state = 110;
	        this.match(metamathParser.LABEL);
	        this.state = 111;
	        this.match(metamathParser.T__8);
	        this.state = 112;
	        this.typecode();
	        this.state = 113;
	        this.variable();
	        this.state = 114;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        this.match(metamathParser.LABEL);
	        this.state = 117;
	        this.match(metamathParser.T__9);
	        this.state = 118;
	        this.typecode();
	        this.state = 122;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 491520) !== 0)) {
	            this.state = 119;
	            this.mathsymbol();
	            this.state = 124;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 125;
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
	        this.state = 129;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 127;
	            this.axiomstmt();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 128;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131;
	        this.match(metamathParser.LABEL);
	        this.state = 132;
	        this.match(metamathParser.T__10);
	        this.state = 133;
	        this.typecode();
	        this.state = 137;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 491520) !== 0)) {
	            this.state = 134;
	            this.mathsymbol();
	            this.state = 139;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 140;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 142;
	        this.match(metamathParser.LABEL);
	        this.state = 143;
	        this.match(metamathParser.T__11);
	        this.state = 144;
	        this.typecode();
	        this.state = 148;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 491520) !== 0)) {
	            this.state = 145;
	            this.mathsymbol();
	            this.state = 150;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 151;
	        this.match(metamathParser.T__12);
	        this.state = 152;
	        this.proof();
	        this.state = 153;
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
	        this.state = 157;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	        case 17:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 155;
	            this.uncompressedproof();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 156;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 159;
	            _la = this._input.LA(1);
	            if(!(_la===14 || _la===17)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 162; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===14 || _la===17);
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
	        this.match(metamathParser.LPAREN);
	        this.state = 168;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===17) {
	            this.state = 165;
	            this.match(metamathParser.LABEL);
	            this.state = 170;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 171;
	        this.match(metamathParser.RPAREN);
	        this.state = 173; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 172;
	            this.match(metamathParser.COMPRESSEDPROOFBLOCK);
	            this.state = 175; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===19);
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
	        this.state = 177;
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 182; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 182;
	        		this._errHandler.sync(this);
	        		switch(this._input.LA(1)) {
	        		case 17:
	        		case 18:
	        		    this.state = 179;
	        		    this.printablecharacter();
	        		    break;
	        		case 15:
	        		    this.state = 180;
	        		    this.match(metamathParser.LPAREN);
	        		    break;
	        		case 16:
	        		    this.state = 181;
	        		    this.match(metamathParser.RPAREN);
	        		    break;
	        		default:
	        		    throw new antlr4.error.NoViableAltException(this);
	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 184; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,17, this._ctx);
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



	printablecharacter() {
	    let localctx = new PrintablecharacterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, metamathParser.RULE_printablecharacter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 186;
	        _la = this._input.LA(1);
	        if(!(_la===17 || _la===18)) {
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



	filename() {
	    let localctx = new FilenameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, metamathParser.RULE_filename);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 188;
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
	    this.enterRule(localctx, 42, metamathParser.RULE_constant);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 190;
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
	    this.enterRule(localctx, 44, metamathParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 192;
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
metamathParser.LABEL = 17;
metamathParser.PRINTABLECHARACTER = 18;
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
metamathParser.RULE_printablecharacter = 19;
metamathParser.RULE_filename = 20;
metamathParser.RULE_constant = 21;
metamathParser.RULE_variable = 22;

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

	EOF() {
	    return this.getToken(metamathParser.EOF, 0);
	};

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

	printablecharacter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PrintablecharacterContext);
	    } else {
	        return this.getTypedRuleContext(PrintablecharacterContext,i);
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



class PrintablecharacterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = metamathParser.RULE_printablecharacter;
    }

	PRINTABLECHARACTER() {
	    return this.getToken(metamathParser.PRINTABLECHARACTER, 0);
	};

	LABEL() {
	    return this.getToken(metamathParser.LABEL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.enterPrintablecharacter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metamathListener ) {
	        listener.exitPrintablecharacter(this);
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
metamathParser.PrintablecharacterContext = PrintablecharacterContext; 
metamathParser.FilenameContext = FilenameContext; 
metamathParser.ConstantContext = ConstantContext; 
metamathParser.VariableContext = VariableContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
