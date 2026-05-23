// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/flatbuffers/FlatBuffers.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import FlatBuffersListener from './FlatBuffersListener.js';
const serializedATN = [4,1,34,309,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,1,0,5,0,66,8,0,10,0,12,0,69,
9,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,5,0,81,8,0,10,0,12,0,84,9,0,
1,0,1,0,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,5,2,96,8,2,10,2,12,2,99,9,2,1,2,
1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,5,4,112,8,4,10,4,12,4,115,9,4,1,
4,1,4,1,5,1,5,1,5,1,5,3,5,123,8,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,
6,1,6,1,6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,3,8,146,8,8,1,8,1,8,1,8,1,
9,1,9,1,9,1,9,4,9,155,8,9,11,9,12,9,156,1,9,1,9,1,10,1,10,1,10,1,10,1,10,
1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,3,11,174,8,11,1,11,1,11,1,11,1,11,
3,11,180,8,11,1,12,1,12,1,12,3,12,185,8,12,1,13,1,13,1,13,5,13,190,8,13,
10,13,12,13,193,9,13,1,13,3,13,196,8,13,1,14,1,14,1,14,3,14,201,8,14,1,14,
1,14,3,14,205,8,14,1,15,1,15,1,15,5,15,210,8,15,10,15,12,15,213,9,15,1,15,
3,15,216,8,15,1,16,1,16,1,16,3,16,221,8,16,1,17,1,17,1,17,5,17,226,8,17,
10,17,12,17,229,9,17,1,18,1,18,1,18,1,18,3,18,235,8,18,1,19,1,19,1,19,1,
19,3,19,241,8,19,1,20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,22,1,22,1,22,
5,22,254,8,22,10,22,12,22,257,9,22,1,22,3,22,260,8,22,1,23,1,23,3,23,264,
8,23,1,24,1,24,1,24,1,24,1,24,1,24,3,24,272,8,24,1,25,1,25,1,25,5,25,277,
8,25,10,25,12,25,280,9,25,1,25,3,25,283,8,25,1,26,1,26,1,26,1,26,1,27,1,
27,1,27,1,27,1,28,1,28,1,28,5,28,296,8,28,10,28,12,28,299,9,28,1,29,1,29,
1,30,1,30,3,30,305,8,30,1,31,1,31,1,31,0,0,32,0,2,4,6,8,10,12,14,16,18,20,
22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,0,4,1,0,5,
6,1,0,10,11,2,0,28,28,30,30,1,0,1,12,317,0,67,1,0,0,0,2,87,1,0,0,0,4,91,
1,0,0,0,6,102,1,0,0,0,8,106,1,0,0,0,10,118,1,0,0,0,12,129,1,0,0,0,14,136,
1,0,0,0,16,140,1,0,0,0,18,150,1,0,0,0,20,160,1,0,0,0,22,179,1,0,0,0,24,181,
1,0,0,0,26,186,1,0,0,0,28,197,1,0,0,0,30,206,1,0,0,0,32,217,1,0,0,0,34,222,
1,0,0,0,36,234,1,0,0,0,38,240,1,0,0,0,40,242,1,0,0,0,42,246,1,0,0,0,44,250,
1,0,0,0,46,263,1,0,0,0,48,271,1,0,0,0,50,273,1,0,0,0,52,284,1,0,0,0,54,288,
1,0,0,0,56,292,1,0,0,0,58,300,1,0,0,0,60,304,1,0,0,0,62,306,1,0,0,0,64,66,
3,2,1,0,65,64,1,0,0,0,66,69,1,0,0,0,67,65,1,0,0,0,67,68,1,0,0,0,68,82,1,
0,0,0,69,67,1,0,0,0,70,81,3,4,2,0,71,81,3,8,4,0,72,81,3,10,5,0,73,81,3,12,
6,0,74,81,3,14,7,0,75,81,3,52,26,0,76,81,3,54,27,0,77,81,3,6,3,0,78,81,3,
18,9,0,79,81,3,40,20,0,80,70,1,0,0,0,80,71,1,0,0,0,80,72,1,0,0,0,80,73,1,
0,0,0,80,74,1,0,0,0,80,75,1,0,0,0,80,76,1,0,0,0,80,77,1,0,0,0,80,78,1,0,
0,0,80,79,1,0,0,0,81,84,1,0,0,0,82,80,1,0,0,0,82,83,1,0,0,0,83,85,1,0,0,
0,84,82,1,0,0,0,85,86,5,0,0,1,86,1,1,0,0,0,87,88,7,0,0,0,88,89,5,26,0,0,
89,90,5,13,0,0,90,3,1,0,0,0,91,92,5,7,0,0,92,97,3,60,30,0,93,94,5,21,0,0,
94,96,3,60,30,0,95,93,1,0,0,0,96,99,1,0,0,0,97,95,1,0,0,0,97,98,1,0,0,0,
98,100,1,0,0,0,99,97,1,0,0,0,100,101,5,13,0,0,101,5,1,0,0,0,102,103,5,1,
0,0,103,104,5,26,0,0,104,105,5,13,0,0,105,7,1,0,0,0,106,107,7,1,0,0,107,
108,3,60,30,0,108,109,3,36,18,0,109,113,5,19,0,0,110,112,3,16,8,0,111,110,
1,0,0,0,112,115,1,0,0,0,113,111,1,0,0,0,113,114,1,0,0,0,114,116,1,0,0,0,
115,113,1,0,0,0,116,117,5,20,0,0,117,9,1,0,0,0,118,119,5,2,0,0,119,122,3,
60,30,0,120,121,5,23,0,0,121,123,3,22,11,0,122,120,1,0,0,0,122,123,1,0,0,
0,123,124,1,0,0,0,124,125,3,36,18,0,125,126,5,19,0,0,126,127,3,26,13,0,127,
128,5,20,0,0,128,11,1,0,0,0,129,130,5,12,0,0,130,131,3,60,30,0,131,132,3,
36,18,0,132,133,5,19,0,0,133,134,3,30,15,0,134,135,5,20,0,0,135,13,1,0,0,
0,136,137,5,8,0,0,137,138,3,60,30,0,138,139,5,13,0,0,139,15,1,0,0,0,140,
141,3,60,30,0,141,142,5,23,0,0,142,145,3,22,11,0,143,144,5,14,0,0,144,146,
3,38,19,0,145,143,1,0,0,0,145,146,1,0,0,0,146,147,1,0,0,0,147,148,3,36,18,
0,148,149,5,13,0,0,149,17,1,0,0,0,150,151,5,9,0,0,151,152,3,60,30,0,152,
154,5,19,0,0,153,155,3,20,10,0,154,153,1,0,0,0,155,156,1,0,0,0,156,154,1,
0,0,0,156,157,1,0,0,0,157,158,1,0,0,0,158,159,5,20,0,0,159,19,1,0,0,0,160,
161,3,60,30,0,161,162,5,15,0,0,162,163,3,60,30,0,163,164,5,16,0,0,164,165,
5,23,0,0,165,166,3,60,30,0,166,167,3,36,18,0,167,168,5,13,0,0,168,21,1,0,
0,0,169,170,5,17,0,0,170,173,3,22,11,0,171,172,5,23,0,0,172,174,3,58,29,
0,173,171,1,0,0,0,173,174,1,0,0,0,174,175,1,0,0,0,175,176,5,18,0,0,176,180,
1,0,0,0,177,180,5,27,0,0,178,180,3,56,28,0,179,169,1,0,0,0,179,177,1,0,0,
0,179,178,1,0,0,0,180,23,1,0,0,0,181,184,3,56,28,0,182,183,5,14,0,0,183,
185,3,58,29,0,184,182,1,0,0,0,184,185,1,0,0,0,185,25,1,0,0,0,186,191,3,24,
12,0,187,188,5,22,0,0,188,190,3,24,12,0,189,187,1,0,0,0,190,193,1,0,0,0,
191,189,1,0,0,0,191,192,1,0,0,0,192,195,1,0,0,0,193,191,1,0,0,0,194,196,
5,22,0,0,195,194,1,0,0,0,195,196,1,0,0,0,196,27,1,0,0,0,197,200,3,56,28,
0,198,199,5,23,0,0,199,201,3,56,28,0,200,198,1,0,0,0,200,201,1,0,0,0,201,
204,1,0,0,0,202,203,5,14,0,0,203,205,3,58,29,0,204,202,1,0,0,0,204,205,1,
0,0,0,205,29,1,0,0,0,206,211,3,28,14,0,207,208,5,22,0,0,208,210,3,28,14,
0,209,207,1,0,0,0,210,213,1,0,0,0,211,209,1,0,0,0,211,212,1,0,0,0,212,215,
1,0,0,0,213,211,1,0,0,0,214,216,5,22,0,0,215,214,1,0,0,0,215,216,1,0,0,0,
216,31,1,0,0,0,217,220,3,60,30,0,218,219,5,23,0,0,219,221,3,46,23,0,220,
218,1,0,0,0,220,221,1,0,0,0,221,33,1,0,0,0,222,227,3,32,16,0,223,224,5,22,
0,0,224,226,3,32,16,0,225,223,1,0,0,0,226,229,1,0,0,0,227,225,1,0,0,0,227,
228,1,0,0,0,228,35,1,0,0,0,229,227,1,0,0,0,230,231,5,15,0,0,231,232,3,34,
17,0,232,233,5,16,0,0,233,235,1,0,0,0,234,230,1,0,0,0,234,235,1,0,0,0,235,
37,1,0,0,0,236,241,5,28,0,0,237,241,5,30,0,0,238,241,5,31,0,0,239,241,3,
60,30,0,240,236,1,0,0,0,240,237,1,0,0,0,240,238,1,0,0,0,240,239,1,0,0,0,
241,39,1,0,0,0,242,243,5,19,0,0,243,244,3,44,22,0,244,245,5,20,0,0,245,41,
1,0,0,0,246,247,3,60,30,0,247,248,5,23,0,0,248,249,3,48,24,0,249,43,1,0,
0,0,250,255,3,42,21,0,251,252,5,22,0,0,252,254,3,42,21,0,253,251,1,0,0,0,
254,257,1,0,0,0,255,253,1,0,0,0,255,256,1,0,0,0,256,259,1,0,0,0,257,255,
1,0,0,0,258,260,5,22,0,0,259,258,1,0,0,0,259,260,1,0,0,0,260,45,1,0,0,0,
261,264,3,38,19,0,262,264,5,26,0,0,263,261,1,0,0,0,263,262,1,0,0,0,264,47,
1,0,0,0,265,272,3,46,23,0,266,272,3,40,20,0,267,268,5,17,0,0,268,269,3,50,
25,0,269,270,5,18,0,0,270,272,1,0,0,0,271,265,1,0,0,0,271,266,1,0,0,0,271,
267,1,0,0,0,272,49,1,0,0,0,273,278,3,48,24,0,274,275,5,22,0,0,275,277,3,
48,24,0,276,274,1,0,0,0,277,280,1,0,0,0,278,276,1,0,0,0,278,279,1,0,0,0,
279,282,1,0,0,0,280,278,1,0,0,0,281,283,5,22,0,0,282,281,1,0,0,0,282,283,
1,0,0,0,283,51,1,0,0,0,284,285,5,3,0,0,285,286,5,26,0,0,286,287,5,13,0,0,
287,53,1,0,0,0,288,289,5,4,0,0,289,290,5,26,0,0,290,291,5,13,0,0,291,55,
1,0,0,0,292,297,3,60,30,0,293,294,5,21,0,0,294,296,3,60,30,0,295,293,1,0,
0,0,296,299,1,0,0,0,297,295,1,0,0,0,297,298,1,0,0,0,298,57,1,0,0,0,299,297,
1,0,0,0,300,301,7,2,0,0,301,59,1,0,0,0,302,305,5,29,0,0,303,305,3,62,31,
0,304,302,1,0,0,0,304,303,1,0,0,0,305,61,1,0,0,0,306,307,7,3,0,0,307,63,
1,0,0,0,29,67,80,82,97,113,122,145,156,173,179,184,191,195,200,204,211,215,
220,227,234,240,255,259,263,271,278,282,297,304];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class FlatBuffersParser extends antlr4.Parser {

    static grammarFileName = "FlatBuffers.g4";
    static literalNames = [ null, "'attribute'", "'enum'", "'file_extension'", 
                            "'file_identifier'", "'include'", "'native_include'", 
                            "'namespace'", "'root_type'", "'rpc_service'", 
                            "'struct'", "'table'", "'union'", "';'", "'='", 
                            "'('", "')'", "'['", "']'", "'{'", "'}'", "'.'", 
                            "','", "':'", "'+'", "'-'" ];
    static symbolicNames = [ null, "ATTRIBUTE", "ENUM", "FILE_EXTENSION", 
                             "FILE_IDENTIFIER", "INCLUDE", "NATIVE_INCLUDE", 
                             "NAMESPACE", "ROOT_TYPE", "RPC_SERVICE", "STRUCT", 
                             "TABLE", "UNION", "SEMI", "EQ", "LP", "RP", 
                             "LB", "RB", "LC", "RC", "DOT", "COMMA", "COLON", 
                             "PLUS", "MINUS", "STRING_CONSTANT", "BASE_TYPE_NAME", 
                             "INTEGER_CONSTANT", "IDENT", "HEX_INTEGER_CONSTANT", 
                             "FLOAT_CONSTANT", "BLOCK_COMMENT", "COMMENT", 
                             "WS" ];
    static ruleNames = [ "schema", "include_", "namespace_decl", "attribute_decl", 
                         "type_decl", "enum_decl", "union_decl", "root_decl", 
                         "field_decl", "rpc_decl", "rpc_method", "type_", 
                         "enumval_decl", "commasep_enumval_decl", "unionval_with_opt_alias", 
                         "commasep_unionval_with_opt_alias", "ident_with_opt_single_value", 
                         "commasep_ident_with_opt_single_value", "metadata", 
                         "scalar", "object_", "ident_with_value", "commasep_ident_with_value", 
                         "single_value", "value", "commasep_value", "file_extension_decl", 
                         "file_identifier_decl", "ns_ident", "integer_const", 
                         "identifier", "keywords" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = FlatBuffersParser.ruleNames;
        this.literalNames = FlatBuffersParser.literalNames;
        this.symbolicNames = FlatBuffersParser.symbolicNames;
    }



	schema() {
	    let localctx = new SchemaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, FlatBuffersParser.RULE_schema);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5 || _la===6) {
	            this.state = 64;
	            this.include_();
	            this.state = 69;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 82;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 532382) !== 0)) {
	            this.state = 80;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 7:
	                this.state = 70;
	                this.namespace_decl();
	                break;
	            case 10:
	            case 11:
	                this.state = 71;
	                this.type_decl();
	                break;
	            case 2:
	                this.state = 72;
	                this.enum_decl();
	                break;
	            case 12:
	                this.state = 73;
	                this.union_decl();
	                break;
	            case 8:
	                this.state = 74;
	                this.root_decl();
	                break;
	            case 3:
	                this.state = 75;
	                this.file_extension_decl();
	                break;
	            case 4:
	                this.state = 76;
	                this.file_identifier_decl();
	                break;
	            case 1:
	                this.state = 77;
	                this.attribute_decl();
	                break;
	            case 9:
	                this.state = 78;
	                this.rpc_decl();
	                break;
	            case 19:
	                this.state = 79;
	                this.object_();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 84;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 85;
	        this.match(FlatBuffersParser.EOF);
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



	include_() {
	    let localctx = new Include_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, FlatBuffersParser.RULE_include_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        _la = this._input.LA(1);
	        if(!(_la===5 || _la===6)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 88;
	        this.match(FlatBuffersParser.STRING_CONSTANT);
	        this.state = 89;
	        this.match(FlatBuffersParser.SEMI);
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



	namespace_decl() {
	    let localctx = new Namespace_declContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, FlatBuffersParser.RULE_namespace_decl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.match(FlatBuffersParser.NAMESPACE);
	        this.state = 92;
	        this.identifier();
	        this.state = 97;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===21) {
	            this.state = 93;
	            this.match(FlatBuffersParser.DOT);
	            this.state = 94;
	            this.identifier();
	            this.state = 99;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 100;
	        this.match(FlatBuffersParser.SEMI);
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



	attribute_decl() {
	    let localctx = new Attribute_declContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, FlatBuffersParser.RULE_attribute_decl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.match(FlatBuffersParser.ATTRIBUTE);
	        this.state = 103;
	        this.match(FlatBuffersParser.STRING_CONSTANT);
	        this.state = 104;
	        this.match(FlatBuffersParser.SEMI);
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



	type_decl() {
	    let localctx = new Type_declContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, FlatBuffersParser.RULE_type_decl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        _la = this._input.LA(1);
	        if(!(_la===10 || _la===11)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 107;
	        this.identifier();
	        this.state = 108;
	        this.metadata();
	        this.state = 109;
	        this.match(FlatBuffersParser.LC);
	        this.state = 113;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 536879102) !== 0)) {
	            this.state = 110;
	            this.field_decl();
	            this.state = 115;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 116;
	        this.match(FlatBuffersParser.RC);
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



	enum_decl() {
	    let localctx = new Enum_declContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, FlatBuffersParser.RULE_enum_decl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        this.match(FlatBuffersParser.ENUM);
	        this.state = 119;
	        this.identifier();
	        this.state = 122;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 120;
	            this.match(FlatBuffersParser.COLON);
	            this.state = 121;
	            this.type_();
	        }

	        this.state = 124;
	        this.metadata();
	        this.state = 125;
	        this.match(FlatBuffersParser.LC);
	        this.state = 126;
	        this.commasep_enumval_decl();
	        this.state = 127;
	        this.match(FlatBuffersParser.RC);
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



	union_decl() {
	    let localctx = new Union_declContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, FlatBuffersParser.RULE_union_decl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this.match(FlatBuffersParser.UNION);
	        this.state = 130;
	        this.identifier();
	        this.state = 131;
	        this.metadata();
	        this.state = 132;
	        this.match(FlatBuffersParser.LC);
	        this.state = 133;
	        this.commasep_unionval_with_opt_alias();
	        this.state = 134;
	        this.match(FlatBuffersParser.RC);
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



	root_decl() {
	    let localctx = new Root_declContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, FlatBuffersParser.RULE_root_decl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.match(FlatBuffersParser.ROOT_TYPE);
	        this.state = 137;
	        this.identifier();
	        this.state = 138;
	        this.match(FlatBuffersParser.SEMI);
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



	field_decl() {
	    let localctx = new Field_declContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, FlatBuffersParser.RULE_field_decl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        this.identifier();
	        this.state = 141;
	        this.match(FlatBuffersParser.COLON);
	        this.state = 142;
	        this.type_();
	        this.state = 145;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14) {
	            this.state = 143;
	            this.match(FlatBuffersParser.EQ);
	            this.state = 144;
	            this.scalar();
	        }

	        this.state = 147;
	        this.metadata();
	        this.state = 148;
	        this.match(FlatBuffersParser.SEMI);
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



	rpc_decl() {
	    let localctx = new Rpc_declContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, FlatBuffersParser.RULE_rpc_decl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 150;
	        this.match(FlatBuffersParser.RPC_SERVICE);
	        this.state = 151;
	        this.identifier();
	        this.state = 152;
	        this.match(FlatBuffersParser.LC);
	        this.state = 154; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 153;
	            this.rpc_method();
	            this.state = 156; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 536879102) !== 0));
	        this.state = 158;
	        this.match(FlatBuffersParser.RC);
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



	rpc_method() {
	    let localctx = new Rpc_methodContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, FlatBuffersParser.RULE_rpc_method);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
	        this.identifier();
	        this.state = 161;
	        this.match(FlatBuffersParser.LP);
	        this.state = 162;
	        this.identifier();
	        this.state = 163;
	        this.match(FlatBuffersParser.RP);
	        this.state = 164;
	        this.match(FlatBuffersParser.COLON);
	        this.state = 165;
	        this.identifier();
	        this.state = 166;
	        this.metadata();
	        this.state = 167;
	        this.match(FlatBuffersParser.SEMI);
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



	type_() {
	    let localctx = new Type_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, FlatBuffersParser.RULE_type_);
	    var _la = 0;
	    try {
	        this.state = 179;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 169;
	            this.match(FlatBuffersParser.LB);
	            this.state = 170;
	            this.type_();
	            this.state = 173;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===23) {
	                this.state = 171;
	                this.match(FlatBuffersParser.COLON);
	                this.state = 172;
	                this.integer_const();
	            }

	            this.state = 175;
	            this.match(FlatBuffersParser.RB);
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 177;
	            this.match(FlatBuffersParser.BASE_TYPE_NAME);
	            break;
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	        case 12:
	        case 29:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 178;
	            this.ns_ident();
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



	enumval_decl() {
	    let localctx = new Enumval_declContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, FlatBuffersParser.RULE_enumval_decl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 181;
	        this.ns_ident();
	        this.state = 184;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14) {
	            this.state = 182;
	            this.match(FlatBuffersParser.EQ);
	            this.state = 183;
	            this.integer_const();
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



	commasep_enumval_decl() {
	    let localctx = new Commasep_enumval_declContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, FlatBuffersParser.RULE_commasep_enumval_decl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 186;
	        this.enumval_decl();
	        this.state = 191;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 187;
	                this.match(FlatBuffersParser.COMMA);
	                this.state = 188;
	                this.enumval_decl(); 
	            }
	            this.state = 193;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
	        }

	        this.state = 195;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===22) {
	            this.state = 194;
	            this.match(FlatBuffersParser.COMMA);
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



	unionval_with_opt_alias() {
	    let localctx = new Unionval_with_opt_aliasContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, FlatBuffersParser.RULE_unionval_with_opt_alias);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 197;
	        this.ns_ident();
	        this.state = 200;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 198;
	            this.match(FlatBuffersParser.COLON);
	            this.state = 199;
	            this.ns_ident();
	        }

	        this.state = 204;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14) {
	            this.state = 202;
	            this.match(FlatBuffersParser.EQ);
	            this.state = 203;
	            this.integer_const();
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



	commasep_unionval_with_opt_alias() {
	    let localctx = new Commasep_unionval_with_opt_aliasContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, FlatBuffersParser.RULE_commasep_unionval_with_opt_alias);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        this.unionval_with_opt_alias();
	        this.state = 211;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 207;
	                this.match(FlatBuffersParser.COMMA);
	                this.state = 208;
	                this.unionval_with_opt_alias(); 
	            }
	            this.state = 213;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
	        }

	        this.state = 215;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===22) {
	            this.state = 214;
	            this.match(FlatBuffersParser.COMMA);
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



	ident_with_opt_single_value() {
	    let localctx = new Ident_with_opt_single_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, FlatBuffersParser.RULE_ident_with_opt_single_value);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
	        this.identifier();
	        this.state = 220;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 218;
	            this.match(FlatBuffersParser.COLON);
	            this.state = 219;
	            this.single_value();
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



	commasep_ident_with_opt_single_value() {
	    let localctx = new Commasep_ident_with_opt_single_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, FlatBuffersParser.RULE_commasep_ident_with_opt_single_value);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 222;
	        this.ident_with_opt_single_value();
	        this.state = 227;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===22) {
	            this.state = 223;
	            this.match(FlatBuffersParser.COMMA);
	            this.state = 224;
	            this.ident_with_opt_single_value();
	            this.state = 229;
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



	metadata() {
	    let localctx = new MetadataContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, FlatBuffersParser.RULE_metadata);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 234;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 230;
	            this.match(FlatBuffersParser.LP);
	            this.state = 231;
	            this.commasep_ident_with_opt_single_value();
	            this.state = 232;
	            this.match(FlatBuffersParser.RP);
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



	scalar() {
	    let localctx = new ScalarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, FlatBuffersParser.RULE_scalar);
	    try {
	        this.state = 240;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 28:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 236;
	            this.match(FlatBuffersParser.INTEGER_CONSTANT);
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 237;
	            this.match(FlatBuffersParser.HEX_INTEGER_CONSTANT);
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 238;
	            this.match(FlatBuffersParser.FLOAT_CONSTANT);
	            break;
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	        case 12:
	        case 29:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 239;
	            this.identifier();
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



	object_() {
	    let localctx = new Object_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, FlatBuffersParser.RULE_object_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 242;
	        this.match(FlatBuffersParser.LC);
	        this.state = 243;
	        this.commasep_ident_with_value();
	        this.state = 244;
	        this.match(FlatBuffersParser.RC);
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



	ident_with_value() {
	    let localctx = new Ident_with_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, FlatBuffersParser.RULE_ident_with_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 246;
	        this.identifier();
	        this.state = 247;
	        this.match(FlatBuffersParser.COLON);
	        this.state = 248;
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



	commasep_ident_with_value() {
	    let localctx = new Commasep_ident_with_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, FlatBuffersParser.RULE_commasep_ident_with_value);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 250;
	        this.ident_with_value();
	        this.state = 255;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 251;
	                this.match(FlatBuffersParser.COMMA);
	                this.state = 252;
	                this.ident_with_value(); 
	            }
	            this.state = 257;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
	        }

	        this.state = 259;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===22) {
	            this.state = 258;
	            this.match(FlatBuffersParser.COMMA);
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



	single_value() {
	    let localctx = new Single_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, FlatBuffersParser.RULE_single_value);
	    try {
	        this.state = 263;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	        case 12:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 261;
	            this.scalar();
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 262;
	            this.match(FlatBuffersParser.STRING_CONSTANT);
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



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, FlatBuffersParser.RULE_value);
	    try {
	        this.state = 271;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	        case 12:
	        case 26:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 265;
	            this.single_value();
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 266;
	            this.object_();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 267;
	            this.match(FlatBuffersParser.LB);
	            this.state = 268;
	            this.commasep_value();
	            this.state = 269;
	            this.match(FlatBuffersParser.RB);
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



	commasep_value() {
	    let localctx = new Commasep_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, FlatBuffersParser.RULE_commasep_value);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 273;
	        this.value();
	        this.state = 278;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,25,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 274;
	                this.match(FlatBuffersParser.COMMA);
	                this.state = 275;
	                this.value(); 
	            }
	            this.state = 280;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,25,this._ctx);
	        }

	        this.state = 282;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===22) {
	            this.state = 281;
	            this.match(FlatBuffersParser.COMMA);
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



	file_extension_decl() {
	    let localctx = new File_extension_declContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, FlatBuffersParser.RULE_file_extension_decl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 284;
	        this.match(FlatBuffersParser.FILE_EXTENSION);
	        this.state = 285;
	        this.match(FlatBuffersParser.STRING_CONSTANT);
	        this.state = 286;
	        this.match(FlatBuffersParser.SEMI);
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



	file_identifier_decl() {
	    let localctx = new File_identifier_declContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, FlatBuffersParser.RULE_file_identifier_decl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 288;
	        this.match(FlatBuffersParser.FILE_IDENTIFIER);
	        this.state = 289;
	        this.match(FlatBuffersParser.STRING_CONSTANT);
	        this.state = 290;
	        this.match(FlatBuffersParser.SEMI);
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



	ns_ident() {
	    let localctx = new Ns_identContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, FlatBuffersParser.RULE_ns_ident);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 292;
	        this.identifier();
	        this.state = 297;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===21) {
	            this.state = 293;
	            this.match(FlatBuffersParser.DOT);
	            this.state = 294;
	            this.identifier();
	            this.state = 299;
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



	integer_const() {
	    let localctx = new Integer_constContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, FlatBuffersParser.RULE_integer_const);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 300;
	        _la = this._input.LA(1);
	        if(!(_la===28 || _la===30)) {
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
	    this.enterRule(localctx, 60, FlatBuffersParser.RULE_identifier);
	    try {
	        this.state = 304;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 29:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 302;
	            this.match(FlatBuffersParser.IDENT);
	            break;
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	        case 12:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 303;
	            this.keywords();
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



	keywords() {
	    let localctx = new KeywordsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, FlatBuffersParser.RULE_keywords);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 306;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 8190) !== 0))) {
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

FlatBuffersParser.EOF = antlr4.Token.EOF;
FlatBuffersParser.ATTRIBUTE = 1;
FlatBuffersParser.ENUM = 2;
FlatBuffersParser.FILE_EXTENSION = 3;
FlatBuffersParser.FILE_IDENTIFIER = 4;
FlatBuffersParser.INCLUDE = 5;
FlatBuffersParser.NATIVE_INCLUDE = 6;
FlatBuffersParser.NAMESPACE = 7;
FlatBuffersParser.ROOT_TYPE = 8;
FlatBuffersParser.RPC_SERVICE = 9;
FlatBuffersParser.STRUCT = 10;
FlatBuffersParser.TABLE = 11;
FlatBuffersParser.UNION = 12;
FlatBuffersParser.SEMI = 13;
FlatBuffersParser.EQ = 14;
FlatBuffersParser.LP = 15;
FlatBuffersParser.RP = 16;
FlatBuffersParser.LB = 17;
FlatBuffersParser.RB = 18;
FlatBuffersParser.LC = 19;
FlatBuffersParser.RC = 20;
FlatBuffersParser.DOT = 21;
FlatBuffersParser.COMMA = 22;
FlatBuffersParser.COLON = 23;
FlatBuffersParser.PLUS = 24;
FlatBuffersParser.MINUS = 25;
FlatBuffersParser.STRING_CONSTANT = 26;
FlatBuffersParser.BASE_TYPE_NAME = 27;
FlatBuffersParser.INTEGER_CONSTANT = 28;
FlatBuffersParser.IDENT = 29;
FlatBuffersParser.HEX_INTEGER_CONSTANT = 30;
FlatBuffersParser.FLOAT_CONSTANT = 31;
FlatBuffersParser.BLOCK_COMMENT = 32;
FlatBuffersParser.COMMENT = 33;
FlatBuffersParser.WS = 34;

FlatBuffersParser.RULE_schema = 0;
FlatBuffersParser.RULE_include_ = 1;
FlatBuffersParser.RULE_namespace_decl = 2;
FlatBuffersParser.RULE_attribute_decl = 3;
FlatBuffersParser.RULE_type_decl = 4;
FlatBuffersParser.RULE_enum_decl = 5;
FlatBuffersParser.RULE_union_decl = 6;
FlatBuffersParser.RULE_root_decl = 7;
FlatBuffersParser.RULE_field_decl = 8;
FlatBuffersParser.RULE_rpc_decl = 9;
FlatBuffersParser.RULE_rpc_method = 10;
FlatBuffersParser.RULE_type_ = 11;
FlatBuffersParser.RULE_enumval_decl = 12;
FlatBuffersParser.RULE_commasep_enumval_decl = 13;
FlatBuffersParser.RULE_unionval_with_opt_alias = 14;
FlatBuffersParser.RULE_commasep_unionval_with_opt_alias = 15;
FlatBuffersParser.RULE_ident_with_opt_single_value = 16;
FlatBuffersParser.RULE_commasep_ident_with_opt_single_value = 17;
FlatBuffersParser.RULE_metadata = 18;
FlatBuffersParser.RULE_scalar = 19;
FlatBuffersParser.RULE_object_ = 20;
FlatBuffersParser.RULE_ident_with_value = 21;
FlatBuffersParser.RULE_commasep_ident_with_value = 22;
FlatBuffersParser.RULE_single_value = 23;
FlatBuffersParser.RULE_value = 24;
FlatBuffersParser.RULE_commasep_value = 25;
FlatBuffersParser.RULE_file_extension_decl = 26;
FlatBuffersParser.RULE_file_identifier_decl = 27;
FlatBuffersParser.RULE_ns_ident = 28;
FlatBuffersParser.RULE_integer_const = 29;
FlatBuffersParser.RULE_identifier = 30;
FlatBuffersParser.RULE_keywords = 31;

class SchemaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlatBuffersParser.RULE_schema;
    }

	EOF() {
	    return this.getToken(FlatBuffersParser.EOF, 0);
	};

	include_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Include_Context);
	    } else {
	        return this.getTypedRuleContext(Include_Context,i);
	    }
	};

	namespace_decl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Namespace_declContext);
	    } else {
	        return this.getTypedRuleContext(Namespace_declContext,i);
	    }
	};

	type_decl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Type_declContext);
	    } else {
	        return this.getTypedRuleContext(Type_declContext,i);
	    }
	};

	enum_decl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Enum_declContext);
	    } else {
	        return this.getTypedRuleContext(Enum_declContext,i);
	    }
	};

	union_decl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Union_declContext);
	    } else {
	        return this.getTypedRuleContext(Union_declContext,i);
	    }
	};

	root_decl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Root_declContext);
	    } else {
	        return this.getTypedRuleContext(Root_declContext,i);
	    }
	};

	file_extension_decl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(File_extension_declContext);
	    } else {
	        return this.getTypedRuleContext(File_extension_declContext,i);
	    }
	};

	file_identifier_decl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(File_identifier_declContext);
	    } else {
	        return this.getTypedRuleContext(File_identifier_declContext,i);
	    }
	};

	attribute_decl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Attribute_declContext);
	    } else {
	        return this.getTypedRuleContext(Attribute_declContext,i);
	    }
	};

	rpc_decl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Rpc_declContext);
	    } else {
	        return this.getTypedRuleContext(Rpc_declContext,i);
	    }
	};

	object_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Object_Context);
	    } else {
	        return this.getTypedRuleContext(Object_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.enterSchema(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.exitSchema(this);
		}
	}


}



class Include_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlatBuffersParser.RULE_include_;
    }

	STRING_CONSTANT() {
	    return this.getToken(FlatBuffersParser.STRING_CONSTANT, 0);
	};

	SEMI() {
	    return this.getToken(FlatBuffersParser.SEMI, 0);
	};

	INCLUDE() {
	    return this.getToken(FlatBuffersParser.INCLUDE, 0);
	};

	NATIVE_INCLUDE() {
	    return this.getToken(FlatBuffersParser.NATIVE_INCLUDE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.enterInclude_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.exitInclude_(this);
		}
	}


}



class Namespace_declContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlatBuffersParser.RULE_namespace_decl;
    }

	NAMESPACE() {
	    return this.getToken(FlatBuffersParser.NAMESPACE, 0);
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

	SEMI() {
	    return this.getToken(FlatBuffersParser.SEMI, 0);
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FlatBuffersParser.DOT);
	    } else {
	        return this.getToken(FlatBuffersParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.enterNamespace_decl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.exitNamespace_decl(this);
		}
	}


}



class Attribute_declContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlatBuffersParser.RULE_attribute_decl;
    }

	ATTRIBUTE() {
	    return this.getToken(FlatBuffersParser.ATTRIBUTE, 0);
	};

	STRING_CONSTANT() {
	    return this.getToken(FlatBuffersParser.STRING_CONSTANT, 0);
	};

	SEMI() {
	    return this.getToken(FlatBuffersParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.enterAttribute_decl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.exitAttribute_decl(this);
		}
	}


}



class Type_declContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlatBuffersParser.RULE_type_decl;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	metadata() {
	    return this.getTypedRuleContext(MetadataContext,0);
	};

	LC() {
	    return this.getToken(FlatBuffersParser.LC, 0);
	};

	RC() {
	    return this.getToken(FlatBuffersParser.RC, 0);
	};

	TABLE() {
	    return this.getToken(FlatBuffersParser.TABLE, 0);
	};

	STRUCT() {
	    return this.getToken(FlatBuffersParser.STRUCT, 0);
	};

	field_decl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Field_declContext);
	    } else {
	        return this.getTypedRuleContext(Field_declContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.enterType_decl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.exitType_decl(this);
		}
	}


}



class Enum_declContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlatBuffersParser.RULE_enum_decl;
    }

	ENUM() {
	    return this.getToken(FlatBuffersParser.ENUM, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	metadata() {
	    return this.getTypedRuleContext(MetadataContext,0);
	};

	LC() {
	    return this.getToken(FlatBuffersParser.LC, 0);
	};

	commasep_enumval_decl() {
	    return this.getTypedRuleContext(Commasep_enumval_declContext,0);
	};

	RC() {
	    return this.getToken(FlatBuffersParser.RC, 0);
	};

	COLON() {
	    return this.getToken(FlatBuffersParser.COLON, 0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.enterEnum_decl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.exitEnum_decl(this);
		}
	}


}



class Union_declContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlatBuffersParser.RULE_union_decl;
    }

	UNION() {
	    return this.getToken(FlatBuffersParser.UNION, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	metadata() {
	    return this.getTypedRuleContext(MetadataContext,0);
	};

	LC() {
	    return this.getToken(FlatBuffersParser.LC, 0);
	};

	commasep_unionval_with_opt_alias() {
	    return this.getTypedRuleContext(Commasep_unionval_with_opt_aliasContext,0);
	};

	RC() {
	    return this.getToken(FlatBuffersParser.RC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.enterUnion_decl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.exitUnion_decl(this);
		}
	}


}



class Root_declContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlatBuffersParser.RULE_root_decl;
    }

	ROOT_TYPE() {
	    return this.getToken(FlatBuffersParser.ROOT_TYPE, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	SEMI() {
	    return this.getToken(FlatBuffersParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.enterRoot_decl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.exitRoot_decl(this);
		}
	}


}



class Field_declContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlatBuffersParser.RULE_field_decl;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	COLON() {
	    return this.getToken(FlatBuffersParser.COLON, 0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	metadata() {
	    return this.getTypedRuleContext(MetadataContext,0);
	};

	SEMI() {
	    return this.getToken(FlatBuffersParser.SEMI, 0);
	};

	EQ() {
	    return this.getToken(FlatBuffersParser.EQ, 0);
	};

	scalar() {
	    return this.getTypedRuleContext(ScalarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.enterField_decl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.exitField_decl(this);
		}
	}


}



class Rpc_declContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlatBuffersParser.RULE_rpc_decl;
    }

	RPC_SERVICE() {
	    return this.getToken(FlatBuffersParser.RPC_SERVICE, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	LC() {
	    return this.getToken(FlatBuffersParser.LC, 0);
	};

	RC() {
	    return this.getToken(FlatBuffersParser.RC, 0);
	};

	rpc_method = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Rpc_methodContext);
	    } else {
	        return this.getTypedRuleContext(Rpc_methodContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.enterRpc_decl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.exitRpc_decl(this);
		}
	}


}



class Rpc_methodContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlatBuffersParser.RULE_rpc_method;
    }

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

	LP() {
	    return this.getToken(FlatBuffersParser.LP, 0);
	};

	RP() {
	    return this.getToken(FlatBuffersParser.RP, 0);
	};

	COLON() {
	    return this.getToken(FlatBuffersParser.COLON, 0);
	};

	metadata() {
	    return this.getTypedRuleContext(MetadataContext,0);
	};

	SEMI() {
	    return this.getToken(FlatBuffersParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.enterRpc_method(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.exitRpc_method(this);
		}
	}


}



class Type_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlatBuffersParser.RULE_type_;
    }

	LB() {
	    return this.getToken(FlatBuffersParser.LB, 0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	RB() {
	    return this.getToken(FlatBuffersParser.RB, 0);
	};

	COLON() {
	    return this.getToken(FlatBuffersParser.COLON, 0);
	};

	integer_const() {
	    return this.getTypedRuleContext(Integer_constContext,0);
	};

	BASE_TYPE_NAME() {
	    return this.getToken(FlatBuffersParser.BASE_TYPE_NAME, 0);
	};

	ns_ident() {
	    return this.getTypedRuleContext(Ns_identContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.enterType_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.exitType_(this);
		}
	}


}



class Enumval_declContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlatBuffersParser.RULE_enumval_decl;
    }

	ns_ident() {
	    return this.getTypedRuleContext(Ns_identContext,0);
	};

	EQ() {
	    return this.getToken(FlatBuffersParser.EQ, 0);
	};

	integer_const() {
	    return this.getTypedRuleContext(Integer_constContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.enterEnumval_decl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.exitEnumval_decl(this);
		}
	}


}



class Commasep_enumval_declContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlatBuffersParser.RULE_commasep_enumval_decl;
    }

	enumval_decl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Enumval_declContext);
	    } else {
	        return this.getTypedRuleContext(Enumval_declContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FlatBuffersParser.COMMA);
	    } else {
	        return this.getToken(FlatBuffersParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.enterCommasep_enumval_decl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.exitCommasep_enumval_decl(this);
		}
	}


}



class Unionval_with_opt_aliasContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlatBuffersParser.RULE_unionval_with_opt_alias;
    }

	ns_ident = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Ns_identContext);
	    } else {
	        return this.getTypedRuleContext(Ns_identContext,i);
	    }
	};

	COLON() {
	    return this.getToken(FlatBuffersParser.COLON, 0);
	};

	EQ() {
	    return this.getToken(FlatBuffersParser.EQ, 0);
	};

	integer_const() {
	    return this.getTypedRuleContext(Integer_constContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.enterUnionval_with_opt_alias(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.exitUnionval_with_opt_alias(this);
		}
	}


}



class Commasep_unionval_with_opt_aliasContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlatBuffersParser.RULE_commasep_unionval_with_opt_alias;
    }

	unionval_with_opt_alias = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Unionval_with_opt_aliasContext);
	    } else {
	        return this.getTypedRuleContext(Unionval_with_opt_aliasContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FlatBuffersParser.COMMA);
	    } else {
	        return this.getToken(FlatBuffersParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.enterCommasep_unionval_with_opt_alias(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.exitCommasep_unionval_with_opt_alias(this);
		}
	}


}



class Ident_with_opt_single_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlatBuffersParser.RULE_ident_with_opt_single_value;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	COLON() {
	    return this.getToken(FlatBuffersParser.COLON, 0);
	};

	single_value() {
	    return this.getTypedRuleContext(Single_valueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.enterIdent_with_opt_single_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.exitIdent_with_opt_single_value(this);
		}
	}


}



class Commasep_ident_with_opt_single_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlatBuffersParser.RULE_commasep_ident_with_opt_single_value;
    }

	ident_with_opt_single_value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Ident_with_opt_single_valueContext);
	    } else {
	        return this.getTypedRuleContext(Ident_with_opt_single_valueContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FlatBuffersParser.COMMA);
	    } else {
	        return this.getToken(FlatBuffersParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.enterCommasep_ident_with_opt_single_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.exitCommasep_ident_with_opt_single_value(this);
		}
	}


}



class MetadataContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlatBuffersParser.RULE_metadata;
    }

	LP() {
	    return this.getToken(FlatBuffersParser.LP, 0);
	};

	commasep_ident_with_opt_single_value() {
	    return this.getTypedRuleContext(Commasep_ident_with_opt_single_valueContext,0);
	};

	RP() {
	    return this.getToken(FlatBuffersParser.RP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.enterMetadata(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.exitMetadata(this);
		}
	}


}



class ScalarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlatBuffersParser.RULE_scalar;
    }

	INTEGER_CONSTANT() {
	    return this.getToken(FlatBuffersParser.INTEGER_CONSTANT, 0);
	};

	HEX_INTEGER_CONSTANT() {
	    return this.getToken(FlatBuffersParser.HEX_INTEGER_CONSTANT, 0);
	};

	FLOAT_CONSTANT() {
	    return this.getToken(FlatBuffersParser.FLOAT_CONSTANT, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.enterScalar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.exitScalar(this);
		}
	}


}



class Object_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlatBuffersParser.RULE_object_;
    }

	LC() {
	    return this.getToken(FlatBuffersParser.LC, 0);
	};

	commasep_ident_with_value() {
	    return this.getTypedRuleContext(Commasep_ident_with_valueContext,0);
	};

	RC() {
	    return this.getToken(FlatBuffersParser.RC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.enterObject_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.exitObject_(this);
		}
	}


}



class Ident_with_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlatBuffersParser.RULE_ident_with_value;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	COLON() {
	    return this.getToken(FlatBuffersParser.COLON, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.enterIdent_with_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.exitIdent_with_value(this);
		}
	}


}



class Commasep_ident_with_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlatBuffersParser.RULE_commasep_ident_with_value;
    }

	ident_with_value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Ident_with_valueContext);
	    } else {
	        return this.getTypedRuleContext(Ident_with_valueContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FlatBuffersParser.COMMA);
	    } else {
	        return this.getToken(FlatBuffersParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.enterCommasep_ident_with_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.exitCommasep_ident_with_value(this);
		}
	}


}



class Single_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlatBuffersParser.RULE_single_value;
    }

	scalar() {
	    return this.getTypedRuleContext(ScalarContext,0);
	};

	STRING_CONSTANT() {
	    return this.getToken(FlatBuffersParser.STRING_CONSTANT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.enterSingle_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.exitSingle_value(this);
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
        this.ruleIndex = FlatBuffersParser.RULE_value;
    }

	single_value() {
	    return this.getTypedRuleContext(Single_valueContext,0);
	};

	object_() {
	    return this.getTypedRuleContext(Object_Context,0);
	};

	LB() {
	    return this.getToken(FlatBuffersParser.LB, 0);
	};

	commasep_value() {
	    return this.getTypedRuleContext(Commasep_valueContext,0);
	};

	RB() {
	    return this.getToken(FlatBuffersParser.RB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.exitValue(this);
		}
	}


}



class Commasep_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlatBuffersParser.RULE_commasep_value;
    }

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
	        return this.getTokens(FlatBuffersParser.COMMA);
	    } else {
	        return this.getToken(FlatBuffersParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.enterCommasep_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.exitCommasep_value(this);
		}
	}


}



class File_extension_declContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlatBuffersParser.RULE_file_extension_decl;
    }

	FILE_EXTENSION() {
	    return this.getToken(FlatBuffersParser.FILE_EXTENSION, 0);
	};

	STRING_CONSTANT() {
	    return this.getToken(FlatBuffersParser.STRING_CONSTANT, 0);
	};

	SEMI() {
	    return this.getToken(FlatBuffersParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.enterFile_extension_decl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.exitFile_extension_decl(this);
		}
	}


}



class File_identifier_declContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlatBuffersParser.RULE_file_identifier_decl;
    }

	FILE_IDENTIFIER() {
	    return this.getToken(FlatBuffersParser.FILE_IDENTIFIER, 0);
	};

	STRING_CONSTANT() {
	    return this.getToken(FlatBuffersParser.STRING_CONSTANT, 0);
	};

	SEMI() {
	    return this.getToken(FlatBuffersParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.enterFile_identifier_decl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.exitFile_identifier_decl(this);
		}
	}


}



class Ns_identContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlatBuffersParser.RULE_ns_ident;
    }

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

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FlatBuffersParser.DOT);
	    } else {
	        return this.getToken(FlatBuffersParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.enterNs_ident(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.exitNs_ident(this);
		}
	}


}



class Integer_constContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlatBuffersParser.RULE_integer_const;
    }

	INTEGER_CONSTANT() {
	    return this.getToken(FlatBuffersParser.INTEGER_CONSTANT, 0);
	};

	HEX_INTEGER_CONSTANT() {
	    return this.getToken(FlatBuffersParser.HEX_INTEGER_CONSTANT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.enterInteger_const(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.exitInteger_const(this);
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
        this.ruleIndex = FlatBuffersParser.RULE_identifier;
    }

	IDENT() {
	    return this.getToken(FlatBuffersParser.IDENT, 0);
	};

	keywords() {
	    return this.getTypedRuleContext(KeywordsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.exitIdentifier(this);
		}
	}


}



class KeywordsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlatBuffersParser.RULE_keywords;
    }

	ATTRIBUTE() {
	    return this.getToken(FlatBuffersParser.ATTRIBUTE, 0);
	};

	ENUM() {
	    return this.getToken(FlatBuffersParser.ENUM, 0);
	};

	FILE_EXTENSION() {
	    return this.getToken(FlatBuffersParser.FILE_EXTENSION, 0);
	};

	FILE_IDENTIFIER() {
	    return this.getToken(FlatBuffersParser.FILE_IDENTIFIER, 0);
	};

	INCLUDE() {
	    return this.getToken(FlatBuffersParser.INCLUDE, 0);
	};

	NATIVE_INCLUDE() {
	    return this.getToken(FlatBuffersParser.NATIVE_INCLUDE, 0);
	};

	NAMESPACE() {
	    return this.getToken(FlatBuffersParser.NAMESPACE, 0);
	};

	ROOT_TYPE() {
	    return this.getToken(FlatBuffersParser.ROOT_TYPE, 0);
	};

	RPC_SERVICE() {
	    return this.getToken(FlatBuffersParser.RPC_SERVICE, 0);
	};

	STRUCT() {
	    return this.getToken(FlatBuffersParser.STRUCT, 0);
	};

	TABLE() {
	    return this.getToken(FlatBuffersParser.TABLE, 0);
	};

	UNION() {
	    return this.getToken(FlatBuffersParser.UNION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.enterKeywords(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlatBuffersListener ) {
	        listener.exitKeywords(this);
		}
	}


}




FlatBuffersParser.SchemaContext = SchemaContext; 
FlatBuffersParser.Include_Context = Include_Context; 
FlatBuffersParser.Namespace_declContext = Namespace_declContext; 
FlatBuffersParser.Attribute_declContext = Attribute_declContext; 
FlatBuffersParser.Type_declContext = Type_declContext; 
FlatBuffersParser.Enum_declContext = Enum_declContext; 
FlatBuffersParser.Union_declContext = Union_declContext; 
FlatBuffersParser.Root_declContext = Root_declContext; 
FlatBuffersParser.Field_declContext = Field_declContext; 
FlatBuffersParser.Rpc_declContext = Rpc_declContext; 
FlatBuffersParser.Rpc_methodContext = Rpc_methodContext; 
FlatBuffersParser.Type_Context = Type_Context; 
FlatBuffersParser.Enumval_declContext = Enumval_declContext; 
FlatBuffersParser.Commasep_enumval_declContext = Commasep_enumval_declContext; 
FlatBuffersParser.Unionval_with_opt_aliasContext = Unionval_with_opt_aliasContext; 
FlatBuffersParser.Commasep_unionval_with_opt_aliasContext = Commasep_unionval_with_opt_aliasContext; 
FlatBuffersParser.Ident_with_opt_single_valueContext = Ident_with_opt_single_valueContext; 
FlatBuffersParser.Commasep_ident_with_opt_single_valueContext = Commasep_ident_with_opt_single_valueContext; 
FlatBuffersParser.MetadataContext = MetadataContext; 
FlatBuffersParser.ScalarContext = ScalarContext; 
FlatBuffersParser.Object_Context = Object_Context; 
FlatBuffersParser.Ident_with_valueContext = Ident_with_valueContext; 
FlatBuffersParser.Commasep_ident_with_valueContext = Commasep_ident_with_valueContext; 
FlatBuffersParser.Single_valueContext = Single_valueContext; 
FlatBuffersParser.ValueContext = ValueContext; 
FlatBuffersParser.Commasep_valueContext = Commasep_valueContext; 
FlatBuffersParser.File_extension_declContext = File_extension_declContext; 
FlatBuffersParser.File_identifier_declContext = File_identifier_declContext; 
FlatBuffersParser.Ns_identContext = Ns_identContext; 
FlatBuffersParser.Integer_constContext = Integer_constContext; 
FlatBuffersParser.IdentifierContext = IdentifierContext; 
FlatBuffersParser.KeywordsContext = KeywordsContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
