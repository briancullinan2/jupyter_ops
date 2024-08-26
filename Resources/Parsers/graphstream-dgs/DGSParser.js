// Generated from Resources/Parsers/graphstream-dgs/DGSParser.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import DGSParserListener from './DGSParserListener.js';
const serializedATN = [4,1,31,183,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,1,0,1,0,1,0,1,0,5,0,47,8,0,10,0,12,0,50,9,0,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,68,8,2,1,2,1,2,1,3,1,3,1,
3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,6,1,6,3,6,87,8,6,1,6,1,6,1,6,
1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,1,11,1,11,1,12,5,
12,108,8,12,10,12,12,12,111,9,12,1,13,3,13,114,8,13,1,13,1,13,1,13,1,13,
1,13,5,13,121,8,13,10,13,12,13,124,9,13,3,13,126,8,13,1,14,1,14,1,14,1,14,
1,14,1,14,1,14,3,14,135,8,14,1,15,1,15,1,15,1,15,5,15,141,8,15,10,15,12,
15,144,9,15,3,15,146,8,15,1,15,1,15,1,16,1,16,1,16,1,16,5,16,154,8,16,10,
16,12,16,157,9,16,3,16,159,8,16,1,16,1,16,1,17,1,17,1,17,1,17,1,18,1,18,
1,19,1,19,1,20,1,20,1,20,1,20,1,20,5,20,176,8,20,10,20,12,20,179,9,20,3,
20,181,8,20,1,20,0,0,21,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,
36,38,40,0,4,2,0,25,25,31,31,1,0,13,14,1,0,21,22,1,0,23,24,190,0,42,1,0,
0,0,2,51,1,0,0,0,4,67,1,0,0,0,6,71,1,0,0,0,8,75,1,0,0,0,10,79,1,0,0,0,12,
82,1,0,0,0,14,91,1,0,0,0,16,95,1,0,0,0,18,98,1,0,0,0,20,101,1,0,0,0,22,104,
1,0,0,0,24,109,1,0,0,0,26,113,1,0,0,0,28,134,1,0,0,0,30,136,1,0,0,0,32,149,
1,0,0,0,34,162,1,0,0,0,36,166,1,0,0,0,38,168,1,0,0,0,40,180,1,0,0,0,42,48,
3,2,1,0,43,47,3,4,2,0,44,47,5,31,0,0,45,47,5,25,0,0,46,43,1,0,0,0,46,44,
1,0,0,0,46,45,1,0,0,0,47,50,1,0,0,0,48,46,1,0,0,0,48,49,1,0,0,0,49,1,1,0,
0,0,50,48,1,0,0,0,51,52,5,1,0,0,52,53,5,25,0,0,53,54,3,40,20,0,54,55,5,11,
0,0,55,56,5,11,0,0,56,57,5,25,0,0,57,3,1,0,0,0,58,68,3,6,3,0,59,68,3,8,4,
0,60,68,3,10,5,0,61,68,3,12,6,0,62,68,3,14,7,0,63,68,3,16,8,0,64,68,3,18,
9,0,65,68,3,20,10,0,66,68,3,22,11,0,67,58,1,0,0,0,67,59,1,0,0,0,67,60,1,
0,0,0,67,61,1,0,0,0,67,62,1,0,0,0,67,63,1,0,0,0,67,64,1,0,0,0,67,65,1,0,
0,0,67,66,1,0,0,0,68,69,1,0,0,0,69,70,7,0,0,0,70,5,1,0,0,0,71,72,5,2,0,0,
72,73,3,40,20,0,73,74,3,24,12,0,74,7,1,0,0,0,75,76,5,3,0,0,76,77,3,40,20,
0,77,78,3,24,12,0,78,9,1,0,0,0,79,80,5,4,0,0,80,81,3,40,20,0,81,11,1,0,0,
0,82,83,5,5,0,0,83,84,3,40,20,0,84,86,3,40,20,0,85,87,3,36,18,0,86,85,1,
0,0,0,86,87,1,0,0,0,87,88,1,0,0,0,88,89,3,40,20,0,89,90,3,24,12,0,90,13,
1,0,0,0,91,92,5,6,0,0,92,93,3,40,20,0,93,94,3,24,12,0,94,15,1,0,0,0,95,96,
5,7,0,0,96,97,3,40,20,0,97,17,1,0,0,0,98,99,5,8,0,0,99,100,3,24,12,0,100,
19,1,0,0,0,101,102,5,9,0,0,102,103,5,12,0,0,103,21,1,0,0,0,104,105,5,10,
0,0,105,23,1,0,0,0,106,108,3,26,13,0,107,106,1,0,0,0,108,111,1,0,0,0,109,
107,1,0,0,0,109,110,1,0,0,0,110,25,1,0,0,0,111,109,1,0,0,0,112,114,7,1,0,
0,113,112,1,0,0,0,113,114,1,0,0,0,114,115,1,0,0,0,115,125,3,40,20,0,116,
117,3,38,19,0,117,122,3,28,14,0,118,119,5,15,0,0,119,121,3,28,14,0,120,118,
1,0,0,0,121,124,1,0,0,0,122,120,1,0,0,0,122,123,1,0,0,0,123,126,1,0,0,0,
124,122,1,0,0,0,125,116,1,0,0,0,125,126,1,0,0,0,126,27,1,0,0,0,127,135,5,
27,0,0,128,135,5,11,0,0,129,135,5,12,0,0,130,135,5,28,0,0,131,135,3,30,15,
0,132,135,3,32,16,0,133,135,3,40,20,0,134,127,1,0,0,0,134,128,1,0,0,0,134,
129,1,0,0,0,134,130,1,0,0,0,134,131,1,0,0,0,134,132,1,0,0,0,134,133,1,0,
0,0,135,29,1,0,0,0,136,145,5,16,0,0,137,142,3,28,14,0,138,139,5,15,0,0,139,
141,3,28,14,0,140,138,1,0,0,0,141,144,1,0,0,0,142,140,1,0,0,0,142,143,1,
0,0,0,143,146,1,0,0,0,144,142,1,0,0,0,145,137,1,0,0,0,145,146,1,0,0,0,146,
147,1,0,0,0,147,148,5,17,0,0,148,31,1,0,0,0,149,158,5,18,0,0,150,155,3,34,
17,0,151,152,5,15,0,0,152,154,3,34,17,0,153,151,1,0,0,0,154,157,1,0,0,0,
155,153,1,0,0,0,155,156,1,0,0,0,156,159,1,0,0,0,157,155,1,0,0,0,158,150,
1,0,0,0,158,159,1,0,0,0,159,160,1,0,0,0,160,161,5,19,0,0,161,33,1,0,0,0,
162,163,3,40,20,0,163,164,3,38,19,0,164,165,3,28,14,0,165,35,1,0,0,0,166,
167,7,2,0,0,167,37,1,0,0,0,168,169,7,3,0,0,169,39,1,0,0,0,170,181,5,27,0,
0,171,181,5,11,0,0,172,177,5,26,0,0,173,174,5,20,0,0,174,176,5,26,0,0,175,
173,1,0,0,0,176,179,1,0,0,0,177,175,1,0,0,0,177,178,1,0,0,0,178,181,1,0,
0,0,179,177,1,0,0,0,180,170,1,0,0,0,180,171,1,0,0,0,180,172,1,0,0,0,181,
41,1,0,0,0,15,46,48,67,86,109,113,122,125,134,142,145,155,158,177,180];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

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

    get atn() {
        return atn;
    }



	dgs() {
	    let localctx = new DgsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, DGSParser.RULE_dgs);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.header();
	        this.state = 48;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DGSParser.AN) | (1 << DGSParser.CN) | (1 << DGSParser.DN) | (1 << DGSParser.AE) | (1 << DGSParser.CE) | (1 << DGSParser.DE) | (1 << DGSParser.CG) | (1 << DGSParser.ST) | (1 << DGSParser.CL) | (1 << DGSParser.EOL) | (1 << DGSParser.COMMENT))) !== 0)) {
	            this.state = 46;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case DGSParser.AN:
	            case DGSParser.CN:
	            case DGSParser.DN:
	            case DGSParser.AE:
	            case DGSParser.CE:
	            case DGSParser.DE:
	            case DGSParser.CG:
	            case DGSParser.ST:
	            case DGSParser.CL:
	                this.state = 43;
	                this.event();
	                break;
	            case DGSParser.COMMENT:
	                this.state = 44;
	                this.match(DGSParser.COMMENT);
	                break;
	            case DGSParser.EOL:
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
	        this.state = 51;
	        this.match(DGSParser.MAGIC);
	        this.state = 52;
	        this.match(DGSParser.EOL);
	        this.state = 53;
	        this.identifier();
	        this.state = 54;
	        this.match(DGSParser.INT);
	        this.state = 55;
	        this.match(DGSParser.INT);
	        this.state = 56;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DGSParser.AN:
	            this.state = 58;
	            this.an();
	            break;
	        case DGSParser.CN:
	            this.state = 59;
	            this.cn();
	            break;
	        case DGSParser.DN:
	            this.state = 60;
	            this.dn();
	            break;
	        case DGSParser.AE:
	            this.state = 61;
	            this.ae();
	            break;
	        case DGSParser.CE:
	            this.state = 62;
	            this.ce();
	            break;
	        case DGSParser.DE:
	            this.state = 63;
	            this.de();
	            break;
	        case DGSParser.CG:
	            this.state = 64;
	            this.cg();
	            break;
	        case DGSParser.ST:
	            this.state = 65;
	            this.st();
	            break;
	        case DGSParser.CL:
	            this.state = 66;
	            this.cl();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 69;
	        _la = this._input.LA(1);
	        if(!(_la===DGSParser.EOL || _la===DGSParser.COMMENT)) {
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
	        this.state = 71;
	        this.match(DGSParser.AN);
	        this.state = 72;
	        this.identifier();
	        this.state = 73;
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
	        this.state = 75;
	        this.match(DGSParser.CN);
	        this.state = 76;
	        this.identifier();
	        this.state = 77;
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
	        this.state = 79;
	        this.match(DGSParser.DN);
	        this.state = 80;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.match(DGSParser.AE);
	        this.state = 83;
	        this.identifier();
	        this.state = 84;
	        this.identifier();
	        this.state = 86;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DGSParser.LANGLE || _la===DGSParser.RANGLE) {
	            this.state = 85;
	            this.direction();
	        }

	        this.state = 88;
	        this.identifier();
	        this.state = 89;
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
	        this.state = 91;
	        this.match(DGSParser.CE);
	        this.state = 92;
	        this.identifier();
	        this.state = 93;
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
	        this.state = 95;
	        this.match(DGSParser.DE);
	        this.state = 96;
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
	        this.state = 98;
	        this.match(DGSParser.CG);
	        this.state = 99;
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
	        this.state = 101;
	        this.match(DGSParser.ST);
	        this.state = 102;
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
	        this.state = 104;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DGSParser.INT) | (1 << DGSParser.PLUS) | (1 << DGSParser.MINUS) | (1 << DGSParser.WORD) | (1 << DGSParser.STRING))) !== 0)) {
	            this.state = 106;
	            this.attribute();
	            this.state = 111;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DGSParser.PLUS || _la===DGSParser.MINUS) {
	            this.state = 112;
	            _la = this._input.LA(1);
	            if(!(_la===DGSParser.PLUS || _la===DGSParser.MINUS)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 115;
	        this.identifier();
	        this.state = 125;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DGSParser.EQUALS || _la===DGSParser.COLON) {
	            this.state = 116;
	            this.assign();
	            this.state = 117;
	            this.value();
	            this.state = 122;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===DGSParser.COMMA) {
	                this.state = 118;
	                this.match(DGSParser.COMMA);
	                this.state = 119;
	                this.value();
	                this.state = 124;
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
	        this.state = 134;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 127;
	            this.match(DGSParser.STRING);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 128;
	            this.match(DGSParser.INT);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 129;
	            this.match(DGSParser.REAL);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 130;
	            this.match(DGSParser.COLOR);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 131;
	            this.array_();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 132;
	            this.a_map();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 133;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.match(DGSParser.LBRACE);
	        this.state = 145;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DGSParser.INT) | (1 << DGSParser.REAL) | (1 << DGSParser.LBRACE) | (1 << DGSParser.LBRACK) | (1 << DGSParser.WORD) | (1 << DGSParser.STRING) | (1 << DGSParser.COLOR))) !== 0)) {
	            this.state = 137;
	            this.value();
	            this.state = 142;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===DGSParser.COMMA) {
	                this.state = 138;
	                this.match(DGSParser.COMMA);
	                this.state = 139;
	                this.value();
	                this.state = 144;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 147;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        this.match(DGSParser.LBRACK);
	        this.state = 158;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DGSParser.INT) | (1 << DGSParser.WORD) | (1 << DGSParser.STRING))) !== 0)) {
	            this.state = 150;
	            this.mapping();
	            this.state = 155;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===DGSParser.COMMA) {
	                this.state = 151;
	                this.match(DGSParser.COMMA);
	                this.state = 152;
	                this.mapping();
	                this.state = 157;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 160;
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
	        this.state = 162;
	        this.identifier();
	        this.state = 163;
	        this.assign();
	        this.state = 164;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 166;
	        _la = this._input.LA(1);
	        if(!(_la===DGSParser.LANGLE || _la===DGSParser.RANGLE)) {
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        _la = this._input.LA(1);
	        if(!(_la===DGSParser.EQUALS || _la===DGSParser.COLON)) {
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
	    var _la = 0; // Token type
	    try {
	        this.state = 180;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DGSParser.STRING:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 170;
	            this.match(DGSParser.STRING);
	            break;
	        case DGSParser.INT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 171;
	            this.match(DGSParser.INT);
	            break;
	        case DGSParser.WORD:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 172;
	            this.match(DGSParser.WORD);
	            this.state = 177;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===DGSParser.DOT) {
	                this.state = 173;
	                this.match(DGSParser.DOT);
	                this.state = 174;
	                this.match(DGSParser.WORD);
	                this.state = 179;
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
