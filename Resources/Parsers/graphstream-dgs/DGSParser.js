// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/graphstream-dgs/DGSParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import DGSParserListener from './DGSParserListener.js';
const serializedATN = [4,1,31,185,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,1,0,1,0,1,0,1,0,5,0,47,8,0,10,0,12,0,50,9,0,1,0,1,0,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,70,8,2,1,2,1,2,1,
3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,6,1,6,3,6,89,8,6,1,6,
1,6,1,6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,1,11,1,11,
1,12,5,12,110,8,12,10,12,12,12,113,9,12,1,13,3,13,116,8,13,1,13,1,13,1,13,
1,13,1,13,5,13,123,8,13,10,13,12,13,126,9,13,3,13,128,8,13,1,14,1,14,1,14,
1,14,1,14,1,14,1,14,3,14,137,8,14,1,15,1,15,1,15,1,15,5,15,143,8,15,10,15,
12,15,146,9,15,3,15,148,8,15,1,15,1,15,1,16,1,16,1,16,1,16,5,16,156,8,16,
10,16,12,16,159,9,16,3,16,161,8,16,1,16,1,16,1,17,1,17,1,17,1,17,1,18,1,
18,1,19,1,19,1,20,1,20,1,20,1,20,1,20,5,20,178,8,20,10,20,12,20,181,9,20,
3,20,183,8,20,1,20,0,0,21,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,
34,36,38,40,0,4,2,0,25,25,31,31,1,0,13,14,1,0,21,22,1,0,23,24,192,0,42,1,
0,0,0,2,53,1,0,0,0,4,69,1,0,0,0,6,73,1,0,0,0,8,77,1,0,0,0,10,81,1,0,0,0,
12,84,1,0,0,0,14,93,1,0,0,0,16,97,1,0,0,0,18,100,1,0,0,0,20,103,1,0,0,0,
22,106,1,0,0,0,24,111,1,0,0,0,26,115,1,0,0,0,28,136,1,0,0,0,30,138,1,0,0,
0,32,151,1,0,0,0,34,164,1,0,0,0,36,168,1,0,0,0,38,170,1,0,0,0,40,182,1,0,
0,0,42,48,3,2,1,0,43,47,3,4,2,0,44,47,5,31,0,0,45,47,5,25,0,0,46,43,1,0,
0,0,46,44,1,0,0,0,46,45,1,0,0,0,47,50,1,0,0,0,48,46,1,0,0,0,48,49,1,0,0,
0,49,51,1,0,0,0,50,48,1,0,0,0,51,52,5,0,0,1,52,1,1,0,0,0,53,54,5,1,0,0,54,
55,5,25,0,0,55,56,3,40,20,0,56,57,5,11,0,0,57,58,5,11,0,0,58,59,5,25,0,0,
59,3,1,0,0,0,60,70,3,6,3,0,61,70,3,8,4,0,62,70,3,10,5,0,63,70,3,12,6,0,64,
70,3,14,7,0,65,70,3,16,8,0,66,70,3,18,9,0,67,70,3,20,10,0,68,70,3,22,11,
0,69,60,1,0,0,0,69,61,1,0,0,0,69,62,1,0,0,0,69,63,1,0,0,0,69,64,1,0,0,0,
69,65,1,0,0,0,69,66,1,0,0,0,69,67,1,0,0,0,69,68,1,0,0,0,70,71,1,0,0,0,71,
72,7,0,0,0,72,5,1,0,0,0,73,74,5,2,0,0,74,75,3,40,20,0,75,76,3,24,12,0,76,
7,1,0,0,0,77,78,5,3,0,0,78,79,3,40,20,0,79,80,3,24,12,0,80,9,1,0,0,0,81,
82,5,4,0,0,82,83,3,40,20,0,83,11,1,0,0,0,84,85,5,5,0,0,85,86,3,40,20,0,86,
88,3,40,20,0,87,89,3,36,18,0,88,87,1,0,0,0,88,89,1,0,0,0,89,90,1,0,0,0,90,
91,3,40,20,0,91,92,3,24,12,0,92,13,1,0,0,0,93,94,5,6,0,0,94,95,3,40,20,0,
95,96,3,24,12,0,96,15,1,0,0,0,97,98,5,7,0,0,98,99,3,40,20,0,99,17,1,0,0,
0,100,101,5,8,0,0,101,102,3,24,12,0,102,19,1,0,0,0,103,104,5,9,0,0,104,105,
5,12,0,0,105,21,1,0,0,0,106,107,5,10,0,0,107,23,1,0,0,0,108,110,3,26,13,
0,109,108,1,0,0,0,110,113,1,0,0,0,111,109,1,0,0,0,111,112,1,0,0,0,112,25,
1,0,0,0,113,111,1,0,0,0,114,116,7,1,0,0,115,114,1,0,0,0,115,116,1,0,0,0,
116,117,1,0,0,0,117,127,3,40,20,0,118,119,3,38,19,0,119,124,3,28,14,0,120,
121,5,15,0,0,121,123,3,28,14,0,122,120,1,0,0,0,123,126,1,0,0,0,124,122,1,
0,0,0,124,125,1,0,0,0,125,128,1,0,0,0,126,124,1,0,0,0,127,118,1,0,0,0,127,
128,1,0,0,0,128,27,1,0,0,0,129,137,5,27,0,0,130,137,5,11,0,0,131,137,5,12,
0,0,132,137,5,28,0,0,133,137,3,30,15,0,134,137,3,32,16,0,135,137,3,40,20,
0,136,129,1,0,0,0,136,130,1,0,0,0,136,131,1,0,0,0,136,132,1,0,0,0,136,133,
1,0,0,0,136,134,1,0,0,0,136,135,1,0,0,0,137,29,1,0,0,0,138,147,5,16,0,0,
139,144,3,28,14,0,140,141,5,15,0,0,141,143,3,28,14,0,142,140,1,0,0,0,143,
146,1,0,0,0,144,142,1,0,0,0,144,145,1,0,0,0,145,148,1,0,0,0,146,144,1,0,
0,0,147,139,1,0,0,0,147,148,1,0,0,0,148,149,1,0,0,0,149,150,5,17,0,0,150,
31,1,0,0,0,151,160,5,18,0,0,152,157,3,34,17,0,153,154,5,15,0,0,154,156,3,
34,17,0,155,153,1,0,0,0,156,159,1,0,0,0,157,155,1,0,0,0,157,158,1,0,0,0,
158,161,1,0,0,0,159,157,1,0,0,0,160,152,1,0,0,0,160,161,1,0,0,0,161,162,
1,0,0,0,162,163,5,19,0,0,163,33,1,0,0,0,164,165,3,40,20,0,165,166,3,38,19,
0,166,167,3,28,14,0,167,35,1,0,0,0,168,169,7,2,0,0,169,37,1,0,0,0,170,171,
7,3,0,0,171,39,1,0,0,0,172,183,5,27,0,0,173,183,5,11,0,0,174,179,5,26,0,
0,175,176,5,20,0,0,176,178,5,26,0,0,177,175,1,0,0,0,178,181,1,0,0,0,179,
177,1,0,0,0,179,180,1,0,0,0,180,183,1,0,0,0,181,179,1,0,0,0,182,172,1,0,
0,0,182,173,1,0,0,0,182,174,1,0,0,0,183,41,1,0,0,0,15,46,48,69,88,111,115,
124,127,136,144,147,157,160,179,182];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class DGSParser extends antlr4.Parser {

    static grammarFileName = "DGSParser.g4";
    static literalNames = [ null, null, "'an'", "'cn'", "'dn'", "'ae'", 
                            "'ce'", "'de'", "'cg'", "'st'", "'cl'", null, 
                            null, "'+'", "'-'", "','", "'{'", "'}'", "'['", 
                            "']'", "'.'", "'<'", "'>'", "'='", "':'", null, 
                            null, null, null, "'#'" ];
    static symbolicNames = [ null, "MAGIC", "AN", "CN", "DN", "AE", "CE", 
                             "DE", "CG", "ST", "CL", "INT", "REAL", "PLUS", 
                             "MINUS", "COMMA", "LBRACE", "RBRACE", "LBRACK", 
                             "RBRACK", "DOT", "LANGLE", "RANGLE", "EQUALS", 
                             "COLON", "EOL", "WORD", "STRING", "COLOR", 
                             "START_COMMENT", "WS", "COMMENT" ];
    static ruleNames = [ "dgs", "header", "event", "an", "cn", "dn", "ae", 
                         "ce", "de", "cg", "st", "cl", "attributes", "attribute", 
                         "value", "array_", "a_map", "mapping", "direction", 
                         "assign", "identifier" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = DGSParser.ruleNames;
        this.literalNames = DGSParser.literalNames;
        this.symbolicNames = DGSParser.symbolicNames;
    }



	dgs() {
	    let localctx = new DgsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, DGSParser.RULE_dgs);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.header();
	        this.state = 48;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2181040124) !== 0)) {
	            this.state = 46;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 2:
	            case 3:
	            case 4:
	            case 5:
	            case 6:
	            case 7:
	            case 8:
	            case 9:
	            case 10:
	                this.state = 43;
	                this.event();
	                break;
	            case 31:
	                this.state = 44;
	                this.match(DGSParser.COMMENT);
	                break;
	            case 25:
	                this.state = 45;
	                this.match(DGSParser.EOL);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 50;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 51;
	        this.match(DGSParser.EOF);
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



	header() {
	    let localctx = new HeaderContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, DGSParser.RULE_header);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(DGSParser.MAGIC);
	        this.state = 54;
	        this.match(DGSParser.EOL);
	        this.state = 55;
	        this.identifier();
	        this.state = 56;
	        this.match(DGSParser.INT);
	        this.state = 57;
	        this.match(DGSParser.INT);
	        this.state = 58;
	        this.match(DGSParser.EOL);
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



	event() {
	    let localctx = new EventContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, DGSParser.RULE_event);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.state = 60;
	            this.an();
	            break;
	        case 3:
	            this.state = 61;
	            this.cn();
	            break;
	        case 4:
	            this.state = 62;
	            this.dn();
	            break;
	        case 5:
	            this.state = 63;
	            this.ae();
	            break;
	        case 6:
	            this.state = 64;
	            this.ce();
	            break;
	        case 7:
	            this.state = 65;
	            this.de();
	            break;
	        case 8:
	            this.state = 66;
	            this.cg();
	            break;
	        case 9:
	            this.state = 67;
	            this.st();
	            break;
	        case 10:
	            this.state = 68;
	            this.cl();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 71;
	        _la = this._input.LA(1);
	        if(!(_la===25 || _la===31)) {
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



	an() {
	    let localctx = new AnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, DGSParser.RULE_an);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(DGSParser.AN);
	        this.state = 74;
	        this.identifier();
	        this.state = 75;
	        this.attributes();
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



	cn() {
	    let localctx = new CnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, DGSParser.RULE_cn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this.match(DGSParser.CN);
	        this.state = 78;
	        this.identifier();
	        this.state = 79;
	        this.attributes();
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



	dn() {
	    let localctx = new DnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, DGSParser.RULE_dn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.match(DGSParser.DN);
	        this.state = 82;
	        this.identifier();
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



	ae() {
	    let localctx = new AeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, DGSParser.RULE_ae);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.match(DGSParser.AE);
	        this.state = 85;
	        this.identifier();
	        this.state = 86;
	        this.identifier();
	        this.state = 88;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21 || _la===22) {
	            this.state = 87;
	            this.direction();
	        }

	        this.state = 90;
	        this.identifier();
	        this.state = 91;
	        this.attributes();
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



	ce() {
	    let localctx = new CeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, DGSParser.RULE_ce);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this.match(DGSParser.CE);
	        this.state = 94;
	        this.identifier();
	        this.state = 95;
	        this.attributes();
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



	de() {
	    let localctx = new DeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, DGSParser.RULE_de);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.match(DGSParser.DE);
	        this.state = 98;
	        this.identifier();
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



	cg() {
	    let localctx = new CgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, DGSParser.RULE_cg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this.match(DGSParser.CG);
	        this.state = 101;
	        this.attributes();
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



	st() {
	    let localctx = new StContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, DGSParser.RULE_st);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        this.match(DGSParser.ST);
	        this.state = 104;
	        this.match(DGSParser.REAL);
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



	cl() {
	    let localctx = new ClContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, DGSParser.RULE_cl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this.match(DGSParser.CL);
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



	attributes() {
	    let localctx = new AttributesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, DGSParser.RULE_attributes);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 201353216) !== 0)) {
	            this.state = 108;
	            this.attribute();
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



	attribute() {
	    let localctx = new AttributeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, DGSParser.RULE_attribute);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13 || _la===14) {
	            this.state = 114;
	            _la = this._input.LA(1);
	            if(!(_la===13 || _la===14)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 117;
	        this.identifier();
	        this.state = 127;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23 || _la===24) {
	            this.state = 118;
	            this.assign();
	            this.state = 119;
	            this.value();
	            this.state = 124;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===15) {
	                this.state = 120;
	                this.match(DGSParser.COMMA);
	                this.state = 121;
	                this.value();
	                this.state = 126;
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



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, DGSParser.RULE_value);
	    try {
	        this.state = 136;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 129;
	            this.match(DGSParser.STRING);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 130;
	            this.match(DGSParser.INT);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 131;
	            this.match(DGSParser.REAL);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 132;
	            this.match(DGSParser.COLOR);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 133;
	            this.array_();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 134;
	            this.a_map();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 135;
	            this.identifier();
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



	array_() {
	    let localctx = new Array_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, DGSParser.RULE_array_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        this.match(DGSParser.LBRACE);
	        this.state = 147;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 470095872) !== 0)) {
	            this.state = 139;
	            this.value();
	            this.state = 144;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===15) {
	                this.state = 140;
	                this.match(DGSParser.COMMA);
	                this.state = 141;
	                this.value();
	                this.state = 146;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 149;
	        this.match(DGSParser.RBRACE);
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



	a_map() {
	    let localctx = new A_mapContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, DGSParser.RULE_a_map);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        this.match(DGSParser.LBRACK);
	        this.state = 160;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 201328640) !== 0)) {
	            this.state = 152;
	            this.mapping();
	            this.state = 157;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===15) {
	                this.state = 153;
	                this.match(DGSParser.COMMA);
	                this.state = 154;
	                this.mapping();
	                this.state = 159;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 162;
	        this.match(DGSParser.RBRACK);
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



	mapping() {
	    let localctx = new MappingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, DGSParser.RULE_mapping);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
	        this.identifier();
	        this.state = 165;
	        this.assign();
	        this.state = 166;
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



	direction() {
	    let localctx = new DirectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, DGSParser.RULE_direction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        _la = this._input.LA(1);
	        if(!(_la===21 || _la===22)) {
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



	assign() {
	    let localctx = new AssignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, DGSParser.RULE_assign);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 170;
	        _la = this._input.LA(1);
	        if(!(_la===23 || _la===24)) {
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



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, DGSParser.RULE_identifier);
	    var _la = 0;
	    try {
	        this.state = 182;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 27:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 172;
	            this.match(DGSParser.STRING);
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 173;
	            this.match(DGSParser.INT);
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 174;
	            this.match(DGSParser.WORD);
	            this.state = 179;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===20) {
	                this.state = 175;
	                this.match(DGSParser.DOT);
	                this.state = 176;
	                this.match(DGSParser.WORD);
	                this.state = 181;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
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


}

DGSParser.EOF = antlr4.Token.EOF;
DGSParser.MAGIC = 1;
DGSParser.AN = 2;
DGSParser.CN = 3;
DGSParser.DN = 4;
DGSParser.AE = 5;
DGSParser.CE = 6;
DGSParser.DE = 7;
DGSParser.CG = 8;
DGSParser.ST = 9;
DGSParser.CL = 10;
DGSParser.INT = 11;
DGSParser.REAL = 12;
DGSParser.PLUS = 13;
DGSParser.MINUS = 14;
DGSParser.COMMA = 15;
DGSParser.LBRACE = 16;
DGSParser.RBRACE = 17;
DGSParser.LBRACK = 18;
DGSParser.RBRACK = 19;
DGSParser.DOT = 20;
DGSParser.LANGLE = 21;
DGSParser.RANGLE = 22;
DGSParser.EQUALS = 23;
DGSParser.COLON = 24;
DGSParser.EOL = 25;
DGSParser.WORD = 26;
DGSParser.STRING = 27;
DGSParser.COLOR = 28;
DGSParser.START_COMMENT = 29;
DGSParser.WS = 30;
DGSParser.COMMENT = 31;

DGSParser.RULE_dgs = 0;
DGSParser.RULE_header = 1;
DGSParser.RULE_event = 2;
DGSParser.RULE_an = 3;
DGSParser.RULE_cn = 4;
DGSParser.RULE_dn = 5;
DGSParser.RULE_ae = 6;
DGSParser.RULE_ce = 7;
DGSParser.RULE_de = 8;
DGSParser.RULE_cg = 9;
DGSParser.RULE_st = 10;
DGSParser.RULE_cl = 11;
DGSParser.RULE_attributes = 12;
DGSParser.RULE_attribute = 13;
DGSParser.RULE_value = 14;
DGSParser.RULE_array_ = 15;
DGSParser.RULE_a_map = 16;
DGSParser.RULE_mapping = 17;
DGSParser.RULE_direction = 18;
DGSParser.RULE_assign = 19;
DGSParser.RULE_identifier = 20;

class DgsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DGSParser.RULE_dgs;
    }

	header() {
	    return this.getTypedRuleContext(HeaderContext,0);
	};

	EOF() {
	    return this.getToken(DGSParser.EOF, 0);
	};

	event = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EventContext);
	    } else {
	        return this.getTypedRuleContext(EventContext,i);
	    }
	};

	COMMENT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DGSParser.COMMENT);
	    } else {
	        return this.getToken(DGSParser.COMMENT, i);
	    }
	};


	EOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DGSParser.EOL);
	    } else {
	        return this.getToken(DGSParser.EOL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.enterDgs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.exitDgs(this);
		}
	}


}



class HeaderContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DGSParser.RULE_header;
    }

	MAGIC() {
	    return this.getToken(DGSParser.MAGIC, 0);
	};

	EOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DGSParser.EOL);
	    } else {
	        return this.getToken(DGSParser.EOL, i);
	    }
	};


	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	INT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DGSParser.INT);
	    } else {
	        return this.getToken(DGSParser.INT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.enterHeader(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.exitHeader(this);
		}
	}


}



class EventContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DGSParser.RULE_event;
    }

	COMMENT() {
	    return this.getToken(DGSParser.COMMENT, 0);
	};

	EOL() {
	    return this.getToken(DGSParser.EOL, 0);
	};

	an() {
	    return this.getTypedRuleContext(AnContext,0);
	};

	cn() {
	    return this.getTypedRuleContext(CnContext,0);
	};

	dn() {
	    return this.getTypedRuleContext(DnContext,0);
	};

	ae() {
	    return this.getTypedRuleContext(AeContext,0);
	};

	ce() {
	    return this.getTypedRuleContext(CeContext,0);
	};

	de() {
	    return this.getTypedRuleContext(DeContext,0);
	};

	cg() {
	    return this.getTypedRuleContext(CgContext,0);
	};

	st() {
	    return this.getTypedRuleContext(StContext,0);
	};

	cl() {
	    return this.getTypedRuleContext(ClContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.enterEvent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.exitEvent(this);
		}
	}


}



class AnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DGSParser.RULE_an;
    }

	AN() {
	    return this.getToken(DGSParser.AN, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	attributes() {
	    return this.getTypedRuleContext(AttributesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.enterAn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.exitAn(this);
		}
	}


}



class CnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DGSParser.RULE_cn;
    }

	CN() {
	    return this.getToken(DGSParser.CN, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	attributes() {
	    return this.getTypedRuleContext(AttributesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.enterCn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.exitCn(this);
		}
	}


}



class DnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DGSParser.RULE_dn;
    }

	DN() {
	    return this.getToken(DGSParser.DN, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.enterDn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.exitDn(this);
		}
	}


}



class AeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DGSParser.RULE_ae;
    }

	AE() {
	    return this.getToken(DGSParser.AE, 0);
	};

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	attributes() {
	    return this.getTypedRuleContext(AttributesContext,0);
	};

	direction() {
	    return this.getTypedRuleContext(DirectionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.enterAe(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.exitAe(this);
		}
	}


}



class CeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DGSParser.RULE_ce;
    }

	CE() {
	    return this.getToken(DGSParser.CE, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	attributes() {
	    return this.getTypedRuleContext(AttributesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.enterCe(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.exitCe(this);
		}
	}


}



class DeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DGSParser.RULE_de;
    }

	DE() {
	    return this.getToken(DGSParser.DE, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.enterDe(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.exitDe(this);
		}
	}


}



class CgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DGSParser.RULE_cg;
    }

	CG() {
	    return this.getToken(DGSParser.CG, 0);
	};

	attributes() {
	    return this.getTypedRuleContext(AttributesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.enterCg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.exitCg(this);
		}
	}


}



class StContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DGSParser.RULE_st;
    }

	ST() {
	    return this.getToken(DGSParser.ST, 0);
	};

	REAL() {
	    return this.getToken(DGSParser.REAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.enterSt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.exitSt(this);
		}
	}


}



class ClContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DGSParser.RULE_cl;
    }

	CL() {
	    return this.getToken(DGSParser.CL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.enterCl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.exitCl(this);
		}
	}


}



class AttributesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DGSParser.RULE_attributes;
    }

	attribute = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AttributeContext);
	    } else {
	        return this.getTypedRuleContext(AttributeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.enterAttributes(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.exitAttributes(this);
		}
	}


}



class AttributeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DGSParser.RULE_attribute;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
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

	PLUS() {
	    return this.getToken(DGSParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(DGSParser.MINUS, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DGSParser.COMMA);
	    } else {
	        return this.getToken(DGSParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.enterAttribute(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.exitAttribute(this);
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
        this.ruleIndex = DGSParser.RULE_value;
    }

	STRING() {
	    return this.getToken(DGSParser.STRING, 0);
	};

	INT() {
	    return this.getToken(DGSParser.INT, 0);
	};

	REAL() {
	    return this.getToken(DGSParser.REAL, 0);
	};

	COLOR() {
	    return this.getToken(DGSParser.COLOR, 0);
	};

	array_() {
	    return this.getTypedRuleContext(Array_Context,0);
	};

	a_map() {
	    return this.getTypedRuleContext(A_mapContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.exitValue(this);
		}
	}


}



class Array_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DGSParser.RULE_array_;
    }

	LBRACE() {
	    return this.getToken(DGSParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(DGSParser.RBRACE, 0);
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

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DGSParser.COMMA);
	    } else {
	        return this.getToken(DGSParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.enterArray_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.exitArray_(this);
		}
	}


}



class A_mapContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DGSParser.RULE_a_map;
    }

	LBRACK() {
	    return this.getToken(DGSParser.LBRACK, 0);
	};

	RBRACK() {
	    return this.getToken(DGSParser.RBRACK, 0);
	};

	mapping = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MappingContext);
	    } else {
	        return this.getTypedRuleContext(MappingContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DGSParser.COMMA);
	    } else {
	        return this.getToken(DGSParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.enterA_map(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.exitA_map(this);
		}
	}


}



class MappingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DGSParser.RULE_mapping;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.enterMapping(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.exitMapping(this);
		}
	}


}



class DirectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DGSParser.RULE_direction;
    }

	LANGLE() {
	    return this.getToken(DGSParser.LANGLE, 0);
	};

	RANGLE() {
	    return this.getToken(DGSParser.RANGLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.enterDirection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.exitDirection(this);
		}
	}


}



class AssignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DGSParser.RULE_assign;
    }

	EQUALS() {
	    return this.getToken(DGSParser.EQUALS, 0);
	};

	COLON() {
	    return this.getToken(DGSParser.COLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.enterAssign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.exitAssign(this);
		}
	}


}



class IdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DGSParser.RULE_identifier;
    }

	STRING() {
	    return this.getToken(DGSParser.STRING, 0);
	};

	INT() {
	    return this.getToken(DGSParser.INT, 0);
	};

	WORD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DGSParser.WORD);
	    } else {
	        return this.getToken(DGSParser.WORD, i);
	    }
	};


	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DGSParser.DOT);
	    } else {
	        return this.getToken(DGSParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DGSParserListener ) {
	        listener.exitIdentifier(this);
		}
	}


}




DGSParser.DgsContext = DgsContext; 
DGSParser.HeaderContext = HeaderContext; 
DGSParser.EventContext = EventContext; 
DGSParser.AnContext = AnContext; 
DGSParser.CnContext = CnContext; 
DGSParser.DnContext = DnContext; 
DGSParser.AeContext = AeContext; 
DGSParser.CeContext = CeContext; 
DGSParser.DeContext = DeContext; 
DGSParser.CgContext = CgContext; 
DGSParser.StContext = StContext; 
DGSParser.ClContext = ClContext; 
DGSParser.AttributesContext = AttributesContext; 
DGSParser.AttributeContext = AttributeContext; 
DGSParser.ValueContext = ValueContext; 
DGSParser.Array_Context = Array_Context; 
DGSParser.A_mapContext = A_mapContext; 
DGSParser.MappingContext = MappingContext; 
DGSParser.DirectionContext = DirectionContext; 
DGSParser.AssignContext = AssignContext; 
DGSParser.IdentifierContext = IdentifierContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
