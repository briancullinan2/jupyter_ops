// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/asm/pdp7/pdp7.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import pdp7Listener from './pdp7Listener.js';
const serializedATN = [4,1,111,158,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,1,0,3,0,38,8,0,1,0,4,0,
41,8,0,11,0,12,0,42,1,0,3,0,46,8,0,1,0,1,0,1,1,1,1,3,1,52,8,1,1,1,3,1,55,
8,1,1,2,1,2,1,2,3,2,60,8,2,5,2,62,8,2,10,2,12,2,65,9,2,1,3,4,3,68,8,3,11,
3,12,3,69,1,3,5,3,73,8,3,10,3,12,3,76,9,3,1,3,4,3,79,8,3,11,3,12,3,80,3,
3,83,8,3,1,4,1,4,1,4,3,4,88,8,4,1,5,1,5,5,5,92,8,5,10,5,12,5,95,9,5,1,6,
1,6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,3,8,107,8,8,1,9,1,9,1,9,5,9,112,8,9,
10,9,12,9,115,9,9,1,10,1,10,1,10,5,10,120,8,10,10,10,12,10,123,9,10,1,11,
1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,3,11,136,8,11,1,12,1,12,
5,12,140,8,12,10,12,12,12,143,9,12,1,12,3,12,146,8,12,1,13,1,13,1,14,1,14,
1,15,1,15,1,16,1,16,1,17,1,17,1,17,0,0,18,0,2,4,6,8,10,12,14,16,18,20,22,
24,26,28,30,32,34,0,3,1,0,97,98,1,0,99,100,1,0,4,94,169,0,40,1,0,0,0,2,54,
1,0,0,0,4,56,1,0,0,0,6,82,1,0,0,0,8,87,1,0,0,0,10,89,1,0,0,0,12,96,1,0,0,
0,14,98,1,0,0,0,16,106,1,0,0,0,18,108,1,0,0,0,20,116,1,0,0,0,22,135,1,0,
0,0,24,137,1,0,0,0,26,147,1,0,0,0,28,149,1,0,0,0,30,151,1,0,0,0,32,153,1,
0,0,0,34,155,1,0,0,0,36,38,3,2,1,0,37,36,1,0,0,0,37,38,1,0,0,0,38,39,1,0,
0,0,39,41,3,26,13,0,40,37,1,0,0,0,41,42,1,0,0,0,42,40,1,0,0,0,42,43,1,0,
0,0,43,45,1,0,0,0,44,46,3,2,1,0,45,44,1,0,0,0,45,46,1,0,0,0,46,47,1,0,0,
0,47,48,5,0,0,1,48,1,1,0,0,0,49,51,3,4,2,0,50,52,3,28,14,0,51,50,1,0,0,0,
51,52,1,0,0,0,52,55,1,0,0,0,53,55,3,28,14,0,54,49,1,0,0,0,54,53,1,0,0,0,
55,3,1,0,0,0,56,63,3,6,3,0,57,59,5,1,0,0,58,60,3,6,3,0,59,58,1,0,0,0,59,
60,1,0,0,0,60,62,1,0,0,0,61,57,1,0,0,0,62,65,1,0,0,0,63,61,1,0,0,0,63,64,
1,0,0,0,64,5,1,0,0,0,65,63,1,0,0,0,66,68,3,30,15,0,67,66,1,0,0,0,68,69,1,
0,0,0,69,67,1,0,0,0,69,70,1,0,0,0,70,74,1,0,0,0,71,73,3,8,4,0,72,71,1,0,
0,0,73,76,1,0,0,0,74,72,1,0,0,0,74,75,1,0,0,0,75,83,1,0,0,0,76,74,1,0,0,
0,77,79,3,8,4,0,78,77,1,0,0,0,79,80,1,0,0,0,80,78,1,0,0,0,80,81,1,0,0,0,
81,83,1,0,0,0,82,67,1,0,0,0,82,78,1,0,0,0,83,7,1,0,0,0,84,88,3,10,5,0,85,
88,3,14,7,0,86,88,3,18,9,0,87,84,1,0,0,0,87,85,1,0,0,0,87,86,1,0,0,0,88,
9,1,0,0,0,89,93,3,34,17,0,90,92,3,12,6,0,91,90,1,0,0,0,92,95,1,0,0,0,93,
91,1,0,0,0,93,94,1,0,0,0,94,11,1,0,0,0,95,93,1,0,0,0,96,97,3,18,9,0,97,13,
1,0,0,0,98,99,3,16,8,0,99,100,5,2,0,0,100,101,3,18,9,0,101,15,1,0,0,0,102,
107,3,34,17,0,103,107,3,32,16,0,104,107,5,95,0,0,105,107,5,96,0,0,106,102,
1,0,0,0,106,103,1,0,0,0,106,104,1,0,0,0,106,105,1,0,0,0,107,17,1,0,0,0,108,
113,3,20,10,0,109,110,7,0,0,0,110,112,3,20,10,0,111,109,1,0,0,0,112,115,
1,0,0,0,113,111,1,0,0,0,113,114,1,0,0,0,114,19,1,0,0,0,115,113,1,0,0,0,116,
121,3,22,11,0,117,118,7,1,0,0,118,120,3,22,11,0,119,117,1,0,0,0,120,123,
1,0,0,0,121,119,1,0,0,0,121,122,1,0,0,0,122,21,1,0,0,0,123,121,1,0,0,0,124,
136,3,32,16,0,125,136,5,95,0,0,126,136,5,108,0,0,127,136,5,96,0,0,128,136,
3,24,12,0,129,136,5,104,0,0,130,136,5,106,0,0,131,136,5,105,0,0,132,136,
5,103,0,0,133,134,5,98,0,0,134,136,3,22,11,0,135,124,1,0,0,0,135,125,1,0,
0,0,135,126,1,0,0,0,135,127,1,0,0,0,135,128,1,0,0,0,135,129,1,0,0,0,135,
130,1,0,0,0,135,131,1,0,0,0,135,132,1,0,0,0,135,133,1,0,0,0,136,23,1,0,0,
0,137,141,5,107,0,0,138,140,5,103,0,0,139,138,1,0,0,0,140,143,1,0,0,0,141,
139,1,0,0,0,141,142,1,0,0,0,142,145,1,0,0,0,143,141,1,0,0,0,144,146,5,3,
0,0,145,144,1,0,0,0,145,146,1,0,0,0,146,25,1,0,0,0,147,148,5,110,0,0,148,
27,1,0,0,0,149,150,5,109,0,0,150,29,1,0,0,0,151,152,5,101,0,0,152,31,1,0,
0,0,153,154,5,102,0,0,154,33,1,0,0,0,155,156,7,2,0,0,156,35,1,0,0,0,19,37,
42,45,51,54,59,63,69,74,80,82,87,93,106,113,121,135,141,145];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class pdp7Parser extends antlr4.Parser {

    static grammarFileName = "pdp7.g4";
    static literalNames = [ null, "';'", "'='", "'>'", "'dac'", "'jms'", 
                            "'dzm'", "'lac'", "'xor'", "'add'", "'tad'", 
                            "'xct'", "'isz'", "'and'", "'sad'", "'jmp'", 
                            "'nop'", "'law'", "'cma'", "'las'", "'ral'", 
                            "'rar'", "'hlt'", "'sma'", "'sza'", "'snl'", 
                            "'skp'", "'sna'", "'szl'", "'rtl'", "'rtr'", 
                            "'cil'", "'rcl'", "'rcr'", "'cia'", "'lrs'", 
                            "'lrss'", "'lls'", "'llss'", "'als'", "'alss'", 
                            "'mul'", "'idiv'", "'lacq'", "'clq'", "'omq'", 
                            "'cmq'", "'lmq'", "'dscs'", "'dslw'", "'dslm'", 
                            "'dsld'", "'dsls'", "'dssf'", "'dsrs'", "'iof'", 
                            "'ion'", "'caf'", "'clon'", "'clsf'", "'clof'", 
                            "'ksf'", "'krb'", "'tsf'", "'tcf'", "'tls'", 
                            "'sck'", "'cck'", "'lck'", "'rsf'", "'rsa'", 
                            "'rrb'", "'psf'", "'pcf'", "'psa'", "'cdf'", 
                            "'rlpd'", "'lda'", "'wcga'", "'raef'", "'beg'", 
                            "'spb'", "'cpb'", "'lpb'", "'wbl'", "'dprs'", 
                            "'dpsf'", "'dpcf'", "'dprc'", "'crsf'", "'crrb'", 
                            "'sys'", "'czm'", "'irss'", "'dsm'", "'.'", 
                            "'..'", "'+'", "'-'", "'*'", "'/'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "LOC", 
                             "RELOC", "PLUS", "MINUS", "TIMES", "DIV", "LABEL", 
                             "IDENTIFIER", "NUMERIC_LITERAL", "DECIMAL", 
                             "OCTAL", "DECIMAL_MINUS", "STRING", "CHAR", 
                             "COMMENT", "EOL", "WS" ];
    static ruleNames = [ "prog", "line", "declarations", "declaration", 
                         "declarationRight", "instruction", "argument", 
                         "assignment", "symbol", "expression", "multiplyingExpression", 
                         "atom", "string", "eol", "comment", "label", "variable", 
                         "opcode" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = pdp7Parser.ruleNames;
        this.literalNames = pdp7Parser.literalNames;
        this.symbolicNames = pdp7Parser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, pdp7Parser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 37;
	        		this._errHandler.sync(this);
	        		_la = this._input.LA(1);
	        		if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967280) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1f) === 0 && ((1 << (_la - 96)) & 16357) !== 0)) {
	        		    this.state = 36;
	        		    this.line();
	        		}

	        		this.state = 39;
	        		this.eol();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 42; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967280) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1f) === 0 && ((1 << (_la - 96)) & 16357) !== 0)) {
	            this.state = 44;
	            this.line();
	        }

	        this.state = 47;
	        this.match(pdp7Parser.EOF);
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



	line() {
	    let localctx = new LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, pdp7Parser.RULE_line);
	    var _la = 0;
	    try {
	        this.state = 54;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	        case 16:
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
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
	        case 43:
	        case 44:
	        case 45:
	        case 46:
	        case 47:
	        case 48:
	        case 49:
	        case 50:
	        case 51:
	        case 52:
	        case 53:
	        case 54:
	        case 55:
	        case 56:
	        case 57:
	        case 58:
	        case 59:
	        case 60:
	        case 61:
	        case 62:
	        case 63:
	        case 64:
	        case 65:
	        case 66:
	        case 67:
	        case 68:
	        case 69:
	        case 70:
	        case 71:
	        case 72:
	        case 73:
	        case 74:
	        case 75:
	        case 76:
	        case 77:
	        case 78:
	        case 79:
	        case 80:
	        case 81:
	        case 82:
	        case 83:
	        case 84:
	        case 85:
	        case 86:
	        case 87:
	        case 88:
	        case 89:
	        case 90:
	        case 91:
	        case 92:
	        case 93:
	        case 94:
	        case 95:
	        case 96:
	        case 98:
	        case 101:
	        case 102:
	        case 103:
	        case 104:
	        case 105:
	        case 106:
	        case 107:
	        case 108:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 49;
	            this.declarations();
	            this.state = 51;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===109) {
	                this.state = 50;
	                this.comment();
	            }

	            break;
	        case 109:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 53;
	            this.comment();
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



	declarations() {
	    let localctx = new DeclarationsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, pdp7Parser.RULE_declarations);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.declaration();
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 57;
	            this.match(pdp7Parser.T__0);
	            this.state = 59;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967280) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1f) === 0 && ((1 << (_la - 96)) & 8165) !== 0)) {
	                this.state = 58;
	                this.declaration();
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



	declaration() {
	    let localctx = new DeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, pdp7Parser.RULE_declaration);
	    var _la = 0;
	    try {
	        this.state = 82;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 101:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 67; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 66;
	                this.label();
	                this.state = 69; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===101);
	            this.state = 74;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967280) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1f) === 0 && ((1 << (_la - 96)) & 8133) !== 0)) {
	                this.state = 71;
	                this.declarationRight();
	                this.state = 76;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	        case 16:
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
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
	        case 43:
	        case 44:
	        case 45:
	        case 46:
	        case 47:
	        case 48:
	        case 49:
	        case 50:
	        case 51:
	        case 52:
	        case 53:
	        case 54:
	        case 55:
	        case 56:
	        case 57:
	        case 58:
	        case 59:
	        case 60:
	        case 61:
	        case 62:
	        case 63:
	        case 64:
	        case 65:
	        case 66:
	        case 67:
	        case 68:
	        case 69:
	        case 70:
	        case 71:
	        case 72:
	        case 73:
	        case 74:
	        case 75:
	        case 76:
	        case 77:
	        case 78:
	        case 79:
	        case 80:
	        case 81:
	        case 82:
	        case 83:
	        case 84:
	        case 85:
	        case 86:
	        case 87:
	        case 88:
	        case 89:
	        case 90:
	        case 91:
	        case 92:
	        case 93:
	        case 94:
	        case 95:
	        case 96:
	        case 98:
	        case 102:
	        case 103:
	        case 104:
	        case 105:
	        case 106:
	        case 107:
	        case 108:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 78; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 77;
	                this.declarationRight();
	                this.state = 80; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967280) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1f) === 0 && ((1 << (_la - 96)) & 8133) !== 0));
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



	declarationRight() {
	    let localctx = new DeclarationRightContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, pdp7Parser.RULE_declarationRight);
	    try {
	        this.state = 87;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 84;
	            this.instruction();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 85;
	            this.assignment();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 86;
	            this.expression();
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



	instruction() {
	    let localctx = new InstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, pdp7Parser.RULE_instruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.opcode();
	        this.state = 93;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 90;
	                this.argument(); 
	            }
	            this.state = 95;
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



	argument() {
	    let localctx = new ArgumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, pdp7Parser.RULE_argument);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
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



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, pdp7Parser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        this.symbol();
	        this.state = 99;
	        this.match(pdp7Parser.T__1);
	        this.state = 100;
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



	symbol() {
	    let localctx = new SymbolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, pdp7Parser.RULE_symbol);
	    try {
	        this.state = 106;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	        case 16:
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
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
	        case 43:
	        case 44:
	        case 45:
	        case 46:
	        case 47:
	        case 48:
	        case 49:
	        case 50:
	        case 51:
	        case 52:
	        case 53:
	        case 54:
	        case 55:
	        case 56:
	        case 57:
	        case 58:
	        case 59:
	        case 60:
	        case 61:
	        case 62:
	        case 63:
	        case 64:
	        case 65:
	        case 66:
	        case 67:
	        case 68:
	        case 69:
	        case 70:
	        case 71:
	        case 72:
	        case 73:
	        case 74:
	        case 75:
	        case 76:
	        case 77:
	        case 78:
	        case 79:
	        case 80:
	        case 81:
	        case 82:
	        case 83:
	        case 84:
	        case 85:
	        case 86:
	        case 87:
	        case 88:
	        case 89:
	        case 90:
	        case 91:
	        case 92:
	        case 93:
	        case 94:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 102;
	            this.opcode();
	            break;
	        case 102:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 103;
	            this.variable();
	            break;
	        case 95:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 104;
	            this.match(pdp7Parser.LOC);
	            break;
	        case 96:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 105;
	            this.match(pdp7Parser.RELOC);
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
	    this.enterRule(localctx, 18, pdp7Parser.RULE_expression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this.multiplyingExpression();
	        this.state = 113;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 109;
	                _la = this._input.LA(1);
	                if(!(_la===97 || _la===98)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 110;
	                this.multiplyingExpression(); 
	            }
	            this.state = 115;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
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



	multiplyingExpression() {
	    let localctx = new MultiplyingExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, pdp7Parser.RULE_multiplyingExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        this.atom();
	        this.state = 121;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===99 || _la===100) {
	            this.state = 117;
	            _la = this._input.LA(1);
	            if(!(_la===99 || _la===100)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 118;
	            this.atom();
	            this.state = 123;
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



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, pdp7Parser.RULE_atom);
	    try {
	        this.state = 135;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 102:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 124;
	            this.variable();
	            break;
	        case 95:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 125;
	            this.match(pdp7Parser.LOC);
	            break;
	        case 108:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 126;
	            this.match(pdp7Parser.CHAR);
	            break;
	        case 96:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 127;
	            this.match(pdp7Parser.RELOC);
	            break;
	        case 107:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 128;
	            this.string();
	            break;
	        case 104:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 129;
	            this.match(pdp7Parser.DECIMAL);
	            break;
	        case 106:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 130;
	            this.match(pdp7Parser.DECIMAL_MINUS);
	            break;
	        case 105:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 131;
	            this.match(pdp7Parser.OCTAL);
	            break;
	        case 103:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 132;
	            this.match(pdp7Parser.NUMERIC_LITERAL);
	            break;
	        case 98:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 133;
	            this.match(pdp7Parser.MINUS);
	            this.state = 134;
	            this.atom();
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



	string() {
	    let localctx = new StringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, pdp7Parser.RULE_string);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this.match(pdp7Parser.STRING);
	        this.state = 141;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 138;
	                this.match(pdp7Parser.NUMERIC_LITERAL); 
	            }
	            this.state = 143;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
	        }

	        this.state = 145;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 144;
	            this.match(pdp7Parser.T__2);
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



	eol() {
	    let localctx = new EolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, pdp7Parser.RULE_eol);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        this.match(pdp7Parser.EOL);
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



	comment() {
	    let localctx = new CommentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, pdp7Parser.RULE_comment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        this.match(pdp7Parser.COMMENT);
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



	label() {
	    let localctx = new LabelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, pdp7Parser.RULE_label);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        this.match(pdp7Parser.LABEL);
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
	    this.enterRule(localctx, 32, pdp7Parser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        this.match(pdp7Parser.IDENTIFIER);
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



	opcode() {
	    let localctx = new OpcodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, pdp7Parser.RULE_opcode);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967280) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 2147483647) !== 0))) {
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

pdp7Parser.EOF = antlr4.Token.EOF;
pdp7Parser.T__0 = 1;
pdp7Parser.T__1 = 2;
pdp7Parser.T__2 = 3;
pdp7Parser.T__3 = 4;
pdp7Parser.T__4 = 5;
pdp7Parser.T__5 = 6;
pdp7Parser.T__6 = 7;
pdp7Parser.T__7 = 8;
pdp7Parser.T__8 = 9;
pdp7Parser.T__9 = 10;
pdp7Parser.T__10 = 11;
pdp7Parser.T__11 = 12;
pdp7Parser.T__12 = 13;
pdp7Parser.T__13 = 14;
pdp7Parser.T__14 = 15;
pdp7Parser.T__15 = 16;
pdp7Parser.T__16 = 17;
pdp7Parser.T__17 = 18;
pdp7Parser.T__18 = 19;
pdp7Parser.T__19 = 20;
pdp7Parser.T__20 = 21;
pdp7Parser.T__21 = 22;
pdp7Parser.T__22 = 23;
pdp7Parser.T__23 = 24;
pdp7Parser.T__24 = 25;
pdp7Parser.T__25 = 26;
pdp7Parser.T__26 = 27;
pdp7Parser.T__27 = 28;
pdp7Parser.T__28 = 29;
pdp7Parser.T__29 = 30;
pdp7Parser.T__30 = 31;
pdp7Parser.T__31 = 32;
pdp7Parser.T__32 = 33;
pdp7Parser.T__33 = 34;
pdp7Parser.T__34 = 35;
pdp7Parser.T__35 = 36;
pdp7Parser.T__36 = 37;
pdp7Parser.T__37 = 38;
pdp7Parser.T__38 = 39;
pdp7Parser.T__39 = 40;
pdp7Parser.T__40 = 41;
pdp7Parser.T__41 = 42;
pdp7Parser.T__42 = 43;
pdp7Parser.T__43 = 44;
pdp7Parser.T__44 = 45;
pdp7Parser.T__45 = 46;
pdp7Parser.T__46 = 47;
pdp7Parser.T__47 = 48;
pdp7Parser.T__48 = 49;
pdp7Parser.T__49 = 50;
pdp7Parser.T__50 = 51;
pdp7Parser.T__51 = 52;
pdp7Parser.T__52 = 53;
pdp7Parser.T__53 = 54;
pdp7Parser.T__54 = 55;
pdp7Parser.T__55 = 56;
pdp7Parser.T__56 = 57;
pdp7Parser.T__57 = 58;
pdp7Parser.T__58 = 59;
pdp7Parser.T__59 = 60;
pdp7Parser.T__60 = 61;
pdp7Parser.T__61 = 62;
pdp7Parser.T__62 = 63;
pdp7Parser.T__63 = 64;
pdp7Parser.T__64 = 65;
pdp7Parser.T__65 = 66;
pdp7Parser.T__66 = 67;
pdp7Parser.T__67 = 68;
pdp7Parser.T__68 = 69;
pdp7Parser.T__69 = 70;
pdp7Parser.T__70 = 71;
pdp7Parser.T__71 = 72;
pdp7Parser.T__72 = 73;
pdp7Parser.T__73 = 74;
pdp7Parser.T__74 = 75;
pdp7Parser.T__75 = 76;
pdp7Parser.T__76 = 77;
pdp7Parser.T__77 = 78;
pdp7Parser.T__78 = 79;
pdp7Parser.T__79 = 80;
pdp7Parser.T__80 = 81;
pdp7Parser.T__81 = 82;
pdp7Parser.T__82 = 83;
pdp7Parser.T__83 = 84;
pdp7Parser.T__84 = 85;
pdp7Parser.T__85 = 86;
pdp7Parser.T__86 = 87;
pdp7Parser.T__87 = 88;
pdp7Parser.T__88 = 89;
pdp7Parser.T__89 = 90;
pdp7Parser.T__90 = 91;
pdp7Parser.T__91 = 92;
pdp7Parser.T__92 = 93;
pdp7Parser.T__93 = 94;
pdp7Parser.LOC = 95;
pdp7Parser.RELOC = 96;
pdp7Parser.PLUS = 97;
pdp7Parser.MINUS = 98;
pdp7Parser.TIMES = 99;
pdp7Parser.DIV = 100;
pdp7Parser.LABEL = 101;
pdp7Parser.IDENTIFIER = 102;
pdp7Parser.NUMERIC_LITERAL = 103;
pdp7Parser.DECIMAL = 104;
pdp7Parser.OCTAL = 105;
pdp7Parser.DECIMAL_MINUS = 106;
pdp7Parser.STRING = 107;
pdp7Parser.CHAR = 108;
pdp7Parser.COMMENT = 109;
pdp7Parser.EOL = 110;
pdp7Parser.WS = 111;

pdp7Parser.RULE_prog = 0;
pdp7Parser.RULE_line = 1;
pdp7Parser.RULE_declarations = 2;
pdp7Parser.RULE_declaration = 3;
pdp7Parser.RULE_declarationRight = 4;
pdp7Parser.RULE_instruction = 5;
pdp7Parser.RULE_argument = 6;
pdp7Parser.RULE_assignment = 7;
pdp7Parser.RULE_symbol = 8;
pdp7Parser.RULE_expression = 9;
pdp7Parser.RULE_multiplyingExpression = 10;
pdp7Parser.RULE_atom = 11;
pdp7Parser.RULE_string = 12;
pdp7Parser.RULE_eol = 13;
pdp7Parser.RULE_comment = 14;
pdp7Parser.RULE_label = 15;
pdp7Parser.RULE_variable = 16;
pdp7Parser.RULE_opcode = 17;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pdp7Parser.RULE_prog;
    }

	EOF() {
	    return this.getToken(pdp7Parser.EOF, 0);
	};

	eol = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EolContext);
	    } else {
	        return this.getTypedRuleContext(EolContext,i);
	    }
	};

	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof pdp7Listener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pdp7Listener ) {
	        listener.exitProg(this);
		}
	}


}



class LineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pdp7Parser.RULE_line;
    }

	declarations() {
	    return this.getTypedRuleContext(DeclarationsContext,0);
	};

	comment() {
	    return this.getTypedRuleContext(CommentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pdp7Listener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pdp7Listener ) {
	        listener.exitLine(this);
		}
	}


}



class DeclarationsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pdp7Parser.RULE_declarations;
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
	    if(listener instanceof pdp7Listener ) {
	        listener.enterDeclarations(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pdp7Listener ) {
	        listener.exitDeclarations(this);
		}
	}


}



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
        this.ruleIndex = pdp7Parser.RULE_declaration;
    }

	label = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LabelContext);
	    } else {
	        return this.getTypedRuleContext(LabelContext,i);
	    }
	};

	declarationRight = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclarationRightContext);
	    } else {
	        return this.getTypedRuleContext(DeclarationRightContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof pdp7Listener ) {
	        listener.enterDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pdp7Listener ) {
	        listener.exitDeclaration(this);
		}
	}


}



class DeclarationRightContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pdp7Parser.RULE_declarationRight;
    }

	instruction() {
	    return this.getTypedRuleContext(InstructionContext,0);
	};

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pdp7Listener ) {
	        listener.enterDeclarationRight(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pdp7Listener ) {
	        listener.exitDeclarationRight(this);
		}
	}


}



class InstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pdp7Parser.RULE_instruction;
    }

	opcode() {
	    return this.getTypedRuleContext(OpcodeContext,0);
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
	    if(listener instanceof pdp7Listener ) {
	        listener.enterInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pdp7Listener ) {
	        listener.exitInstruction(this);
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
        this.ruleIndex = pdp7Parser.RULE_argument;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pdp7Listener ) {
	        listener.enterArgument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pdp7Listener ) {
	        listener.exitArgument(this);
		}
	}


}



class AssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pdp7Parser.RULE_assignment;
    }

	symbol() {
	    return this.getTypedRuleContext(SymbolContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pdp7Listener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pdp7Listener ) {
	        listener.exitAssignment(this);
		}
	}


}



class SymbolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pdp7Parser.RULE_symbol;
    }

	opcode() {
	    return this.getTypedRuleContext(OpcodeContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	LOC() {
	    return this.getToken(pdp7Parser.LOC, 0);
	};

	RELOC() {
	    return this.getToken(pdp7Parser.RELOC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pdp7Listener ) {
	        listener.enterSymbol(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pdp7Listener ) {
	        listener.exitSymbol(this);
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
        this.ruleIndex = pdp7Parser.RULE_expression;
    }

	multiplyingExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MultiplyingExpressionContext);
	    } else {
	        return this.getTypedRuleContext(MultiplyingExpressionContext,i);
	    }
	};

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pdp7Parser.PLUS);
	    } else {
	        return this.getToken(pdp7Parser.PLUS, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pdp7Parser.MINUS);
	    } else {
	        return this.getToken(pdp7Parser.MINUS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof pdp7Listener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pdp7Listener ) {
	        listener.exitExpression(this);
		}
	}


}



class MultiplyingExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pdp7Parser.RULE_multiplyingExpression;
    }

	atom = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AtomContext);
	    } else {
	        return this.getTypedRuleContext(AtomContext,i);
	    }
	};

	TIMES = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pdp7Parser.TIMES);
	    } else {
	        return this.getToken(pdp7Parser.TIMES, i);
	    }
	};


	DIV = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pdp7Parser.DIV);
	    } else {
	        return this.getToken(pdp7Parser.DIV, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof pdp7Listener ) {
	        listener.enterMultiplyingExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pdp7Listener ) {
	        listener.exitMultiplyingExpression(this);
		}
	}


}



class AtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pdp7Parser.RULE_atom;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	LOC() {
	    return this.getToken(pdp7Parser.LOC, 0);
	};

	CHAR() {
	    return this.getToken(pdp7Parser.CHAR, 0);
	};

	RELOC() {
	    return this.getToken(pdp7Parser.RELOC, 0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	DECIMAL() {
	    return this.getToken(pdp7Parser.DECIMAL, 0);
	};

	DECIMAL_MINUS() {
	    return this.getToken(pdp7Parser.DECIMAL_MINUS, 0);
	};

	OCTAL() {
	    return this.getToken(pdp7Parser.OCTAL, 0);
	};

	NUMERIC_LITERAL() {
	    return this.getToken(pdp7Parser.NUMERIC_LITERAL, 0);
	};

	MINUS() {
	    return this.getToken(pdp7Parser.MINUS, 0);
	};

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pdp7Listener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pdp7Listener ) {
	        listener.exitAtom(this);
		}
	}


}



class StringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pdp7Parser.RULE_string;
    }

	STRING() {
	    return this.getToken(pdp7Parser.STRING, 0);
	};

	NUMERIC_LITERAL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pdp7Parser.NUMERIC_LITERAL);
	    } else {
	        return this.getToken(pdp7Parser.NUMERIC_LITERAL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof pdp7Listener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pdp7Listener ) {
	        listener.exitString(this);
		}
	}


}



class EolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pdp7Parser.RULE_eol;
    }

	EOL() {
	    return this.getToken(pdp7Parser.EOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pdp7Listener ) {
	        listener.enterEol(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pdp7Listener ) {
	        listener.exitEol(this);
		}
	}


}



class CommentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pdp7Parser.RULE_comment;
    }

	COMMENT() {
	    return this.getToken(pdp7Parser.COMMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pdp7Listener ) {
	        listener.enterComment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pdp7Listener ) {
	        listener.exitComment(this);
		}
	}


}



class LabelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pdp7Parser.RULE_label;
    }

	LABEL() {
	    return this.getToken(pdp7Parser.LABEL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pdp7Listener ) {
	        listener.enterLabel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pdp7Listener ) {
	        listener.exitLabel(this);
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
        this.ruleIndex = pdp7Parser.RULE_variable;
    }

	IDENTIFIER() {
	    return this.getToken(pdp7Parser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pdp7Listener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pdp7Listener ) {
	        listener.exitVariable(this);
		}
	}


}



class OpcodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pdp7Parser.RULE_opcode;
    }


	enterRule(listener) {
	    if(listener instanceof pdp7Listener ) {
	        listener.enterOpcode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pdp7Listener ) {
	        listener.exitOpcode(this);
		}
	}


}




pdp7Parser.ProgContext = ProgContext; 
pdp7Parser.LineContext = LineContext; 
pdp7Parser.DeclarationsContext = DeclarationsContext; 
pdp7Parser.DeclarationContext = DeclarationContext; 
pdp7Parser.DeclarationRightContext = DeclarationRightContext; 
pdp7Parser.InstructionContext = InstructionContext; 
pdp7Parser.ArgumentContext = ArgumentContext; 
pdp7Parser.AssignmentContext = AssignmentContext; 
pdp7Parser.SymbolContext = SymbolContext; 
pdp7Parser.ExpressionContext = ExpressionContext; 
pdp7Parser.MultiplyingExpressionContext = MultiplyingExpressionContext; 
pdp7Parser.AtomContext = AtomContext; 
pdp7Parser.StringContext = StringContext; 
pdp7Parser.EolContext = EolContext; 
pdp7Parser.CommentContext = CommentContext; 
pdp7Parser.LabelContext = LabelContext; 
pdp7Parser.VariableContext = VariableContext; 
pdp7Parser.OpcodeContext = OpcodeContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
