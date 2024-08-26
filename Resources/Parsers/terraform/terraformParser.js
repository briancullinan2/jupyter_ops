// Generated from Resources/Parsers/terraform/terraform.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import terraformListener from './terraformListener.js';
const serializedATN = [4,1,49,308,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,1,0,1,0,
1,0,1,0,1,0,1,0,1,0,1,0,4,0,77,8,0,11,0,12,0,78,1,1,1,1,1,1,1,2,1,2,1,2,
1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,
1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,5,9,115,8,9,10,9,12,9,118,9,9,1,
9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,14,5,14,133,8,
14,10,14,12,14,136,9,14,1,14,1,14,1,15,1,15,1,15,1,15,1,16,1,16,3,16,146,
8,16,1,16,1,16,1,17,1,17,3,17,152,8,17,1,17,1,17,5,17,156,8,17,10,17,12,
17,159,9,17,1,17,1,17,1,17,5,17,164,8,17,10,17,12,17,167,9,17,1,17,1,17,
1,17,5,17,172,8,17,10,17,12,17,175,9,17,3,17,177,8,17,1,18,1,18,1,19,1,19,
1,19,1,19,1,19,1,19,1,19,3,19,188,8,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,
1,19,1,19,1,19,5,19,200,8,19,10,19,12,19,203,9,19,1,20,1,20,1,20,1,20,1,
20,1,20,1,20,1,21,1,21,1,21,3,21,215,8,21,1,22,1,22,1,22,1,22,1,22,1,22,
1,22,1,22,1,22,3,22,226,8,22,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,5,23,
236,8,23,10,23,12,23,239,9,23,1,23,3,23,242,8,23,1,24,1,24,1,25,1,25,1,25,
1,25,5,25,250,8,25,10,25,12,25,253,9,25,3,25,255,8,25,1,26,1,26,1,26,1,26,
1,27,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,5,28,270,8,28,10,28,12,28,273,
9,28,1,28,3,28,276,8,28,3,28,278,8,28,1,28,1,28,1,29,1,29,1,29,3,29,285,
8,29,5,29,287,8,29,10,29,12,29,290,9,29,1,29,1,29,1,30,1,30,1,31,3,31,297,
8,31,1,31,1,31,1,32,1,32,1,33,1,33,1,33,3,33,306,8,33,1,33,1,237,1,38,34,
0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,
52,54,56,58,60,62,64,66,0,5,3,0,3,3,6,6,8,9,2,0,30,32,46,46,1,0,44,45,1,
0,18,19,2,0,18,29,33,33,316,0,76,1,0,0,0,2,80,1,0,0,0,4,83,1,0,0,0,6,88,
1,0,0,0,8,93,1,0,0,0,10,97,1,0,0,0,12,101,1,0,0,0,14,104,1,0,0,0,16,108,
1,0,0,0,18,112,1,0,0,0,20,121,1,0,0,0,22,123,1,0,0,0,24,125,1,0,0,0,26,127,
1,0,0,0,28,129,1,0,0,0,30,139,1,0,0,0,32,145,1,0,0,0,34,176,1,0,0,0,36,178,
1,0,0,0,38,187,1,0,0,0,40,204,1,0,0,0,42,214,1,0,0,0,44,225,1,0,0,0,46,241,
1,0,0,0,48,243,1,0,0,0,50,254,1,0,0,0,52,256,1,0,0,0,54,260,1,0,0,0,56,265,
1,0,0,0,58,281,1,0,0,0,60,293,1,0,0,0,62,296,1,0,0,0,64,300,1,0,0,0,66,302,
1,0,0,0,68,77,3,12,6,0,69,77,3,14,7,0,70,77,3,10,5,0,71,77,3,8,4,0,72,77,
3,16,8,0,73,77,3,6,3,0,74,77,3,4,2,0,75,77,3,2,1,0,76,68,1,0,0,0,76,69,1,
0,0,0,76,70,1,0,0,0,76,71,1,0,0,0,76,72,1,0,0,0,76,73,1,0,0,0,76,74,1,0,
0,0,76,75,1,0,0,0,77,78,1,0,0,0,78,76,1,0,0,0,78,79,1,0,0,0,79,1,1,0,0,0,
80,81,5,1,0,0,81,82,3,28,14,0,82,3,1,0,0,0,83,84,5,2,0,0,84,85,3,22,11,0,
85,86,3,24,12,0,86,87,3,28,14,0,87,5,1,0,0,0,88,89,5,3,0,0,89,90,3,22,11,
0,90,91,3,24,12,0,91,92,3,28,14,0,92,7,1,0,0,0,93,94,5,31,0,0,94,95,3,22,
11,0,95,96,3,28,14,0,96,9,1,0,0,0,97,98,5,4,0,0,98,99,3,24,12,0,99,100,3,
28,14,0,100,11,1,0,0,0,101,102,5,5,0,0,102,103,3,28,14,0,103,13,1,0,0,0,
104,105,5,6,0,0,105,106,3,24,12,0,106,107,3,28,14,0,107,15,1,0,0,0,108,109,
5,30,0,0,109,110,3,24,12,0,110,111,3,28,14,0,111,17,1,0,0,0,112,116,3,20,
10,0,113,115,3,26,13,0,114,113,1,0,0,0,115,118,1,0,0,0,116,114,1,0,0,0,116,
117,1,0,0,0,117,119,1,0,0,0,118,116,1,0,0,0,119,120,3,28,14,0,120,19,1,0,
0,0,121,122,5,46,0,0,122,21,1,0,0,0,123,124,5,45,0,0,124,23,1,0,0,0,125,
126,5,45,0,0,126,25,1,0,0,0,127,128,5,45,0,0,128,27,1,0,0,0,129,134,5,35,
0,0,130,133,3,30,15,0,131,133,3,18,9,0,132,130,1,0,0,0,132,131,1,0,0,0,133,
136,1,0,0,0,134,132,1,0,0,0,134,135,1,0,0,0,135,137,1,0,0,0,136,134,1,0,
0,0,137,138,5,36,0,0,138,29,1,0,0,0,139,140,3,32,16,0,140,141,5,7,0,0,141,
142,3,38,19,0,142,31,1,0,0,0,143,144,7,0,0,0,144,146,5,34,0,0,145,143,1,
0,0,0,145,146,1,0,0,0,146,147,1,0,0,0,147,148,3,34,17,0,148,33,1,0,0,0,149,
151,7,1,0,0,150,152,3,52,26,0,151,150,1,0,0,0,151,152,1,0,0,0,152,157,1,
0,0,0,153,154,5,34,0,0,154,156,3,34,17,0,155,153,1,0,0,0,156,159,1,0,0,0,
157,155,1,0,0,0,157,158,1,0,0,0,158,177,1,0,0,0,159,157,1,0,0,0,160,165,
5,33,0,0,161,162,5,34,0,0,162,164,3,34,17,0,163,161,1,0,0,0,164,167,1,0,
0,0,165,163,1,0,0,0,165,166,1,0,0,0,166,177,1,0,0,0,167,165,1,0,0,0,168,
173,3,36,18,0,169,170,5,34,0,0,170,172,3,34,17,0,171,169,1,0,0,0,172,175,
1,0,0,0,173,171,1,0,0,0,173,174,1,0,0,0,174,177,1,0,0,0,175,173,1,0,0,0,
176,149,1,0,0,0,176,160,1,0,0,0,176,168,1,0,0,0,177,35,1,0,0,0,178,179,5,
41,0,0,179,37,1,0,0,0,180,181,6,19,-1,0,181,188,3,42,21,0,182,183,5,37,0,
0,183,184,3,38,19,0,184,185,5,38,0,0,185,188,1,0,0,0,186,188,3,40,20,0,187,
180,1,0,0,0,187,182,1,0,0,0,187,186,1,0,0,0,188,201,1,0,0,0,189,190,10,4,
0,0,190,191,3,64,32,0,191,192,3,38,19,5,192,200,1,0,0,0,193,194,10,2,0,0,
194,195,5,10,0,0,195,196,3,38,19,0,196,197,5,11,0,0,197,198,3,38,19,3,198,
200,1,0,0,0,199,189,1,0,0,0,199,193,1,0,0,0,200,203,1,0,0,0,201,199,1,0,
0,0,201,202,1,0,0,0,202,39,1,0,0,0,203,201,1,0,0,0,204,205,5,12,0,0,205,
206,3,32,16,0,206,207,5,32,0,0,207,208,3,38,19,0,208,209,5,11,0,0,209,210,
3,38,19,0,210,41,1,0,0,0,211,215,3,56,28,0,212,215,3,58,29,0,213,215,3,44,
22,0,214,211,1,0,0,0,214,212,1,0,0,0,214,213,1,0,0,0,215,43,1,0,0,0,216,
226,5,40,0,0,217,226,3,62,31,0,218,226,3,60,30,0,219,226,3,32,16,0,220,226,
5,42,0,0,221,226,5,43,0,0,222,226,3,54,27,0,223,226,3,46,23,0,224,226,5,
39,0,0,225,216,1,0,0,0,225,217,1,0,0,0,225,218,1,0,0,0,225,219,1,0,0,0,225,
220,1,0,0,0,225,221,1,0,0,0,225,222,1,0,0,0,225,223,1,0,0,0,225,224,1,0,
0,0,226,45,1,0,0,0,227,228,3,48,24,0,228,229,5,37,0,0,229,230,3,50,25,0,
230,231,5,38,0,0,231,242,1,0,0,0,232,233,5,13,0,0,233,237,5,37,0,0,234,236,
9,0,0,0,235,234,1,0,0,0,236,239,1,0,0,0,237,238,1,0,0,0,237,235,1,0,0,0,
238,240,1,0,0,0,239,237,1,0,0,0,240,242,5,38,0,0,241,227,1,0,0,0,241,232,
1,0,0,0,242,47,1,0,0,0,243,244,5,46,0,0,244,49,1,0,0,0,245,255,1,0,0,0,246,
251,3,38,19,0,247,248,5,14,0,0,248,250,3,38,19,0,249,247,1,0,0,0,250,253,
1,0,0,0,251,249,1,0,0,0,251,252,1,0,0,0,252,255,1,0,0,0,253,251,1,0,0,0,
254,245,1,0,0,0,254,246,1,0,0,0,255,51,1,0,0,0,256,257,5,15,0,0,257,258,
3,38,19,0,258,259,5,16,0,0,259,53,1,0,0,0,260,261,5,17,0,0,261,262,5,37,
0,0,262,263,3,38,19,0,263,264,5,38,0,0,264,55,1,0,0,0,265,277,5,15,0,0,266,
271,3,38,19,0,267,268,5,14,0,0,268,270,3,38,19,0,269,267,1,0,0,0,270,273,
1,0,0,0,271,269,1,0,0,0,271,272,1,0,0,0,272,275,1,0,0,0,273,271,1,0,0,0,
274,276,5,14,0,0,275,274,1,0,0,0,275,276,1,0,0,0,276,278,1,0,0,0,277,266,
1,0,0,0,277,278,1,0,0,0,278,279,1,0,0,0,279,280,5,16,0,0,280,57,1,0,0,0,
281,288,5,35,0,0,282,284,3,30,15,0,283,285,5,14,0,0,284,283,1,0,0,0,284,
285,1,0,0,0,285,287,1,0,0,0,286,282,1,0,0,0,287,290,1,0,0,0,288,286,1,0,
0,0,288,289,1,0,0,0,289,291,1,0,0,0,290,288,1,0,0,0,291,292,5,36,0,0,292,
59,1,0,0,0,293,294,7,2,0,0,294,61,1,0,0,0,295,297,7,3,0,0,296,295,1,0,0,
0,296,297,1,0,0,0,297,298,1,0,0,0,298,299,3,66,33,0,299,63,1,0,0,0,300,301,
7,4,0,0,301,65,1,0,0,0,302,305,5,41,0,0,303,304,5,34,0,0,304,306,5,41,0,
0,305,303,1,0,0,0,305,306,1,0,0,0,306,67,1,0,0,0,27,76,78,116,132,134,145,
151,157,165,173,176,187,199,201,214,225,237,241,251,254,271,275,277,284,
288,296,305];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class terraformParser extends antlr4.Parser {

    static grammarFileName = "terraform.g4";
    static literalNames = [ null, "'terraform'", "'resource'", "'data'", 
                            "'output'", "'locals'", "'module'", "'='", "'local'", 
                            "'var'", "'?'", "':'", "'for'", "'jsonencode'", 
                            "','", "'['", "']'", "'file'", "'+'", "'-'", 
                            "'/'", "'%'", "'>'", "'>='", "'<'", "'<='", 
                            "'=='", "'!='", "'&&'", "'||'", "'variable'", 
                            "'provider'", "'in'", "'*'", "'.'", "'{'", "'}'", 
                            "'('", "')'", null, "'nul'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "VARIABLE", 
                             "PROVIDER", "IN", "STAR", "DOT", "LCURL", "RCURL", 
                             "LPAREN", "RPAREN", "EOF_", "NULL_", "NATURAL_NUMBER", 
                             "BOOL", "DESCRIPTION", "MULTILINESTRING", "STRING", 
                             "IDENTIFIER", "COMMENT", "BLOCKCOMMENT", "WS" ];
    static ruleNames = [ "file_", "terraform", "resource", "data", "provider", 
                         "output", "local", "module", "variable", "block", 
                         "blocktype", "resourcetype", "name", "label", "blockbody", 
                         "argument", "identifier", "identifierchain", "inline_index", 
                         "expression", "forloop", "section", "val", "functioncall", 
                         "functionname", "functionarguments", "index", "filedecl", 
                         "list_", "map_", "string", "signed_number", "operator_", 
                         "number" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = terraformParser.ruleNames;
        this.literalNames = terraformParser.literalNames;
        this.symbolicNames = terraformParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 19:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 4);
    		case 1:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	file_() {
	    let localctx = new File_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, terraformParser.RULE_file_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 76;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case terraformParser.T__4:
	                this.state = 68;
	                this.local();
	                break;
	            case terraformParser.T__5:
	                this.state = 69;
	                this.module();
	                break;
	            case terraformParser.T__3:
	                this.state = 70;
	                this.output();
	                break;
	            case terraformParser.PROVIDER:
	                this.state = 71;
	                this.provider();
	                break;
	            case terraformParser.VARIABLE:
	                this.state = 72;
	                this.variable();
	                break;
	            case terraformParser.T__2:
	                this.state = 73;
	                this.data();
	                break;
	            case terraformParser.T__1:
	                this.state = 74;
	                this.resource();
	                break;
	            case terraformParser.T__0:
	                this.state = 75;
	                this.terraform();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 78; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << terraformParser.T__0) | (1 << terraformParser.T__1) | (1 << terraformParser.T__2) | (1 << terraformParser.T__3) | (1 << terraformParser.T__4) | (1 << terraformParser.T__5) | (1 << terraformParser.VARIABLE) | (1 << terraformParser.PROVIDER))) !== 0));
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



	terraform() {
	    let localctx = new TerraformContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, terraformParser.RULE_terraform);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.match(terraformParser.T__0);
	        this.state = 81;
	        this.blockbody();
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



	resource() {
	    let localctx = new ResourceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, terraformParser.RULE_resource);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this.match(terraformParser.T__1);
	        this.state = 84;
	        this.resourcetype();
	        this.state = 85;
	        this.name();
	        this.state = 86;
	        this.blockbody();
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



	data() {
	    let localctx = new DataContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, terraformParser.RULE_data);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.match(terraformParser.T__2);
	        this.state = 89;
	        this.resourcetype();
	        this.state = 90;
	        this.name();
	        this.state = 91;
	        this.blockbody();
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



	provider() {
	    let localctx = new ProviderContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, terraformParser.RULE_provider);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this.match(terraformParser.PROVIDER);
	        this.state = 94;
	        this.resourcetype();
	        this.state = 95;
	        this.blockbody();
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



	output() {
	    let localctx = new OutputContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, terraformParser.RULE_output);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.match(terraformParser.T__3);
	        this.state = 98;
	        this.name();
	        this.state = 99;
	        this.blockbody();
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



	local() {
	    let localctx = new LocalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, terraformParser.RULE_local);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.match(terraformParser.T__4);
	        this.state = 102;
	        this.blockbody();
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



	module() {
	    let localctx = new ModuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, terraformParser.RULE_module);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.match(terraformParser.T__5);
	        this.state = 105;
	        this.name();
	        this.state = 106;
	        this.blockbody();
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
	    this.enterRule(localctx, 16, terraformParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this.match(terraformParser.VARIABLE);
	        this.state = 109;
	        this.name();
	        this.state = 110;
	        this.blockbody();
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
	    this.enterRule(localctx, 18, terraformParser.RULE_block);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        this.blocktype();
	        this.state = 116;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===terraformParser.STRING) {
	            this.state = 113;
	            this.label();
	            this.state = 118;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 119;
	        this.blockbody();
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



	blocktype() {
	    let localctx = new BlocktypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, terraformParser.RULE_blocktype);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this.match(terraformParser.IDENTIFIER);
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



	resourcetype() {
	    let localctx = new ResourcetypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, terraformParser.RULE_resourcetype);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        this.match(terraformParser.STRING);
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
	    this.enterRule(localctx, 24, terraformParser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        this.match(terraformParser.STRING);
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
	    this.enterRule(localctx, 26, terraformParser.RULE_label);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        this.match(terraformParser.STRING);
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



	blockbody() {
	    let localctx = new BlockbodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, terraformParser.RULE_blockbody);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this.match(terraformParser.LCURL);
	        this.state = 134;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << terraformParser.T__2) | (1 << terraformParser.T__5) | (1 << terraformParser.T__7) | (1 << terraformParser.T__8) | (1 << terraformParser.VARIABLE) | (1 << terraformParser.PROVIDER))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (terraformParser.IN - 32)) | (1 << (terraformParser.STAR - 32)) | (1 << (terraformParser.NATURAL_NUMBER - 32)) | (1 << (terraformParser.IDENTIFIER - 32)))) !== 0)) {
	            this.state = 132;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 130;
	                this.argument();
	                break;

	            case 2:
	                this.state = 131;
	                this.block();
	                break;

	            }
	            this.state = 136;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 137;
	        this.match(terraformParser.RCURL);
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
	    this.enterRule(localctx, 30, terraformParser.RULE_argument);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 139;
	        this.identifier();
	        this.state = 140;
	        this.match(terraformParser.T__6);
	        this.state = 141;
	        this.expression(0);
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
	    this.enterRule(localctx, 32, terraformParser.RULE_identifier);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << terraformParser.T__2) | (1 << terraformParser.T__5) | (1 << terraformParser.T__7) | (1 << terraformParser.T__8))) !== 0)) {
	            this.state = 143;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << terraformParser.T__2) | (1 << terraformParser.T__5) | (1 << terraformParser.T__7) | (1 << terraformParser.T__8))) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 144;
	            this.match(terraformParser.DOT);
	        }

	        this.state = 147;
	        this.identifierchain();
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



	identifierchain() {
	    let localctx = new IdentifierchainContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, terraformParser.RULE_identifierchain);
	    var _la = 0; // Token type
	    try {
	        this.state = 176;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case terraformParser.VARIABLE:
	        case terraformParser.PROVIDER:
	        case terraformParser.IN:
	        case terraformParser.IDENTIFIER:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 149;
	            _la = this._input.LA(1);
	            if(!(((((_la - 30)) & ~0x1f) == 0 && ((1 << (_la - 30)) & ((1 << (terraformParser.VARIABLE - 30)) | (1 << (terraformParser.PROVIDER - 30)) | (1 << (terraformParser.IN - 30)) | (1 << (terraformParser.IDENTIFIER - 30)))) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 151;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	            if(la_===1) {
	                this.state = 150;
	                this.index();

	            }
	            this.state = 157;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 153;
	                    this.match(terraformParser.DOT);
	                    this.state = 154;
	                    this.identifierchain(); 
	                }
	                this.state = 159;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	            }

	            break;
	        case terraformParser.STAR:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 160;
	            this.match(terraformParser.STAR);
	            this.state = 165;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 161;
	                    this.match(terraformParser.DOT);
	                    this.state = 162;
	                    this.identifierchain(); 
	                }
	                this.state = 167;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	            }

	            break;
	        case terraformParser.NATURAL_NUMBER:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 168;
	            this.inline_index();
	            this.state = 173;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 169;
	                    this.match(terraformParser.DOT);
	                    this.state = 170;
	                    this.identifierchain(); 
	                }
	                this.state = 175;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
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



	inline_index() {
	    let localctx = new Inline_indexContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, terraformParser.RULE_inline_index);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        this.match(terraformParser.NATURAL_NUMBER);
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


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 38;
	    this.enterRecursionRule(localctx, 38, terraformParser.RULE_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 187;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case terraformParser.T__2:
	        case terraformParser.T__5:
	        case terraformParser.T__7:
	        case terraformParser.T__8:
	        case terraformParser.T__12:
	        case terraformParser.T__14:
	        case terraformParser.T__16:
	        case terraformParser.T__17:
	        case terraformParser.T__18:
	        case terraformParser.VARIABLE:
	        case terraformParser.PROVIDER:
	        case terraformParser.IN:
	        case terraformParser.STAR:
	        case terraformParser.LCURL:
	        case terraformParser.EOF_:
	        case terraformParser.NULL_:
	        case terraformParser.NATURAL_NUMBER:
	        case terraformParser.BOOL:
	        case terraformParser.DESCRIPTION:
	        case terraformParser.MULTILINESTRING:
	        case terraformParser.STRING:
	        case terraformParser.IDENTIFIER:
	            this.state = 181;
	            this.section();
	            break;
	        case terraformParser.LPAREN:
	            this.state = 182;
	            this.match(terraformParser.LPAREN);
	            this.state = 183;
	            this.expression(0);
	            this.state = 184;
	            this.match(terraformParser.RPAREN);
	            break;
	        case terraformParser.T__11:
	            this.state = 186;
	            this.forloop();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 201;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 199;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, terraformParser.RULE_expression);
	                    this.state = 189;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 190;
	                    this.operator_();
	                    this.state = 191;
	                    this.expression(5);
	                    break;

	                case 2:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, terraformParser.RULE_expression);
	                    this.state = 193;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 194;
	                    this.match(terraformParser.T__9);
	                    this.state = 195;
	                    this.expression(0);
	                    this.state = 196;
	                    this.match(terraformParser.T__10);
	                    this.state = 197;
	                    this.expression(3);
	                    break;

	                } 
	            }
	            this.state = 203;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
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



	forloop() {
	    let localctx = new ForloopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, terraformParser.RULE_forloop);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 204;
	        this.match(terraformParser.T__11);
	        this.state = 205;
	        this.identifier();
	        this.state = 206;
	        this.match(terraformParser.IN);
	        this.state = 207;
	        this.expression(0);
	        this.state = 208;
	        this.match(terraformParser.T__10);
	        this.state = 209;
	        this.expression(0);
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



	section() {
	    let localctx = new SectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, terraformParser.RULE_section);
	    try {
	        this.state = 214;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case terraformParser.T__14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 211;
	            this.list_();
	            break;
	        case terraformParser.LCURL:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 212;
	            this.map_();
	            break;
	        case terraformParser.T__2:
	        case terraformParser.T__5:
	        case terraformParser.T__7:
	        case terraformParser.T__8:
	        case terraformParser.T__12:
	        case terraformParser.T__16:
	        case terraformParser.T__17:
	        case terraformParser.T__18:
	        case terraformParser.VARIABLE:
	        case terraformParser.PROVIDER:
	        case terraformParser.IN:
	        case terraformParser.STAR:
	        case terraformParser.EOF_:
	        case terraformParser.NULL_:
	        case terraformParser.NATURAL_NUMBER:
	        case terraformParser.BOOL:
	        case terraformParser.DESCRIPTION:
	        case terraformParser.MULTILINESTRING:
	        case terraformParser.STRING:
	        case terraformParser.IDENTIFIER:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 213;
	            this.val();
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



	val() {
	    let localctx = new ValContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, terraformParser.RULE_val);
	    try {
	        this.state = 225;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 216;
	            this.match(terraformParser.NULL_);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 217;
	            this.signed_number();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 218;
	            this.string();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 219;
	            this.identifier();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 220;
	            this.match(terraformParser.BOOL);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 221;
	            this.match(terraformParser.DESCRIPTION);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 222;
	            this.filedecl();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 223;
	            this.functioncall();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 224;
	            this.match(terraformParser.EOF_);
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



	functioncall() {
	    let localctx = new FunctioncallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, terraformParser.RULE_functioncall);
	    try {
	        this.state = 241;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case terraformParser.IDENTIFIER:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 227;
	            this.functionname();
	            this.state = 228;
	            this.match(terraformParser.LPAREN);
	            this.state = 229;
	            this.functionarguments();
	            this.state = 230;
	            this.match(terraformParser.RPAREN);
	            break;
	        case terraformParser.T__12:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 232;
	            this.match(terraformParser.T__12);
	            this.state = 233;
	            this.match(terraformParser.LPAREN);
	            this.state = 237;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	            while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1+1) {
	                    this.state = 234;
	                    this.matchWildcard(); 
	                }
	                this.state = 239;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
	            }

	            this.state = 240;
	            this.match(terraformParser.RPAREN);
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



	functionname() {
	    let localctx = new FunctionnameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, terraformParser.RULE_functionname);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 243;
	        this.match(terraformParser.IDENTIFIER);
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



	functionarguments() {
	    let localctx = new FunctionargumentsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, terraformParser.RULE_functionarguments);
	    var _la = 0; // Token type
	    try {
	        this.state = 254;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case terraformParser.RPAREN:
	            this.enterOuterAlt(localctx, 1);

	            break;
	        case terraformParser.T__2:
	        case terraformParser.T__5:
	        case terraformParser.T__7:
	        case terraformParser.T__8:
	        case terraformParser.T__11:
	        case terraformParser.T__12:
	        case terraformParser.T__14:
	        case terraformParser.T__16:
	        case terraformParser.T__17:
	        case terraformParser.T__18:
	        case terraformParser.VARIABLE:
	        case terraformParser.PROVIDER:
	        case terraformParser.IN:
	        case terraformParser.STAR:
	        case terraformParser.LCURL:
	        case terraformParser.LPAREN:
	        case terraformParser.EOF_:
	        case terraformParser.NULL_:
	        case terraformParser.NATURAL_NUMBER:
	        case terraformParser.BOOL:
	        case terraformParser.DESCRIPTION:
	        case terraformParser.MULTILINESTRING:
	        case terraformParser.STRING:
	        case terraformParser.IDENTIFIER:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 246;
	            this.expression(0);
	            this.state = 251;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===terraformParser.T__13) {
	                this.state = 247;
	                this.match(terraformParser.T__13);
	                this.state = 248;
	                this.expression(0);
	                this.state = 253;
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



	index() {
	    let localctx = new IndexContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, terraformParser.RULE_index);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 256;
	        this.match(terraformParser.T__14);
	        this.state = 257;
	        this.expression(0);
	        this.state = 258;
	        this.match(terraformParser.T__15);
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



	filedecl() {
	    let localctx = new FiledeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, terraformParser.RULE_filedecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
	        this.match(terraformParser.T__16);
	        this.state = 261;
	        this.match(terraformParser.LPAREN);
	        this.state = 262;
	        this.expression(0);
	        this.state = 263;
	        this.match(terraformParser.RPAREN);
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



	list_() {
	    let localctx = new List_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, terraformParser.RULE_list_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 265;
	        this.match(terraformParser.T__14);
	        this.state = 277;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << terraformParser.T__2) | (1 << terraformParser.T__5) | (1 << terraformParser.T__7) | (1 << terraformParser.T__8) | (1 << terraformParser.T__11) | (1 << terraformParser.T__12) | (1 << terraformParser.T__14) | (1 << terraformParser.T__16) | (1 << terraformParser.T__17) | (1 << terraformParser.T__18) | (1 << terraformParser.VARIABLE) | (1 << terraformParser.PROVIDER))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (terraformParser.IN - 32)) | (1 << (terraformParser.STAR - 32)) | (1 << (terraformParser.LCURL - 32)) | (1 << (terraformParser.LPAREN - 32)) | (1 << (terraformParser.EOF_ - 32)) | (1 << (terraformParser.NULL_ - 32)) | (1 << (terraformParser.NATURAL_NUMBER - 32)) | (1 << (terraformParser.BOOL - 32)) | (1 << (terraformParser.DESCRIPTION - 32)) | (1 << (terraformParser.MULTILINESTRING - 32)) | (1 << (terraformParser.STRING - 32)) | (1 << (terraformParser.IDENTIFIER - 32)))) !== 0)) {
	            this.state = 266;
	            this.expression(0);
	            this.state = 271;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 267;
	                    this.match(terraformParser.T__13);
	                    this.state = 268;
	                    this.expression(0); 
	                }
	                this.state = 273;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
	            }

	            this.state = 275;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===terraformParser.T__13) {
	                this.state = 274;
	                this.match(terraformParser.T__13);
	            }

	        }

	        this.state = 279;
	        this.match(terraformParser.T__15);
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



	map_() {
	    let localctx = new Map_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, terraformParser.RULE_map_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 281;
	        this.match(terraformParser.LCURL);
	        this.state = 288;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << terraformParser.T__2) | (1 << terraformParser.T__5) | (1 << terraformParser.T__7) | (1 << terraformParser.T__8) | (1 << terraformParser.VARIABLE) | (1 << terraformParser.PROVIDER))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (terraformParser.IN - 32)) | (1 << (terraformParser.STAR - 32)) | (1 << (terraformParser.NATURAL_NUMBER - 32)) | (1 << (terraformParser.IDENTIFIER - 32)))) !== 0)) {
	            this.state = 282;
	            this.argument();
	            this.state = 284;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===terraformParser.T__13) {
	                this.state = 283;
	                this.match(terraformParser.T__13);
	            }

	            this.state = 290;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 291;
	        this.match(terraformParser.RCURL);
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
	    this.enterRule(localctx, 60, terraformParser.RULE_string);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 293;
	        _la = this._input.LA(1);
	        if(!(_la===terraformParser.MULTILINESTRING || _la===terraformParser.STRING)) {
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



	signed_number() {
	    let localctx = new Signed_numberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, terraformParser.RULE_signed_number);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 296;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===terraformParser.T__17 || _la===terraformParser.T__18) {
	            this.state = 295;
	            _la = this._input.LA(1);
	            if(!(_la===terraformParser.T__17 || _la===terraformParser.T__18)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 298;
	        this.number();
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



	operator_() {
	    let localctx = new Operator_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, terraformParser.RULE_operator_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 300;
	        _la = this._input.LA(1);
	        if(!(((((_la - 18)) & ~0x1f) == 0 && ((1 << (_la - 18)) & ((1 << (terraformParser.T__17 - 18)) | (1 << (terraformParser.T__18 - 18)) | (1 << (terraformParser.T__19 - 18)) | (1 << (terraformParser.T__20 - 18)) | (1 << (terraformParser.T__21 - 18)) | (1 << (terraformParser.T__22 - 18)) | (1 << (terraformParser.T__23 - 18)) | (1 << (terraformParser.T__24 - 18)) | (1 << (terraformParser.T__25 - 18)) | (1 << (terraformParser.T__26 - 18)) | (1 << (terraformParser.T__27 - 18)) | (1 << (terraformParser.T__28 - 18)) | (1 << (terraformParser.STAR - 18)))) !== 0))) {
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



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, terraformParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 302;
	        this.match(terraformParser.NATURAL_NUMBER);
	        this.state = 305;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        if(la_===1) {
	            this.state = 303;
	            this.match(terraformParser.DOT);
	            this.state = 304;
	            this.match(terraformParser.NATURAL_NUMBER);

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

terraformParser.EOF = antlr4.Token.EOF;
terraformParser.T__0 = 1;
terraformParser.T__1 = 2;
terraformParser.T__2 = 3;
terraformParser.T__3 = 4;
terraformParser.T__4 = 5;
terraformParser.T__5 = 6;
terraformParser.T__6 = 7;
terraformParser.T__7 = 8;
terraformParser.T__8 = 9;
terraformParser.T__9 = 10;
terraformParser.T__10 = 11;
terraformParser.T__11 = 12;
terraformParser.T__12 = 13;
terraformParser.T__13 = 14;
terraformParser.T__14 = 15;
terraformParser.T__15 = 16;
terraformParser.T__16 = 17;
terraformParser.T__17 = 18;
terraformParser.T__18 = 19;
terraformParser.T__19 = 20;
terraformParser.T__20 = 21;
terraformParser.T__21 = 22;
terraformParser.T__22 = 23;
terraformParser.T__23 = 24;
terraformParser.T__24 = 25;
terraformParser.T__25 = 26;
terraformParser.T__26 = 27;
terraformParser.T__27 = 28;
terraformParser.T__28 = 29;
terraformParser.VARIABLE = 30;
terraformParser.PROVIDER = 31;
terraformParser.IN = 32;
terraformParser.STAR = 33;
terraformParser.DOT = 34;
terraformParser.LCURL = 35;
terraformParser.RCURL = 36;
terraformParser.LPAREN = 37;
terraformParser.RPAREN = 38;
terraformParser.EOF_ = 39;
terraformParser.NULL_ = 40;
terraformParser.NATURAL_NUMBER = 41;
terraformParser.BOOL = 42;
terraformParser.DESCRIPTION = 43;
terraformParser.MULTILINESTRING = 44;
terraformParser.STRING = 45;
terraformParser.IDENTIFIER = 46;
terraformParser.COMMENT = 47;
terraformParser.BLOCKCOMMENT = 48;
terraformParser.WS = 49;

terraformParser.RULE_file_ = 0;
terraformParser.RULE_terraform = 1;
terraformParser.RULE_resource = 2;
terraformParser.RULE_data = 3;
terraformParser.RULE_provider = 4;
terraformParser.RULE_output = 5;
terraformParser.RULE_local = 6;
terraformParser.RULE_module = 7;
terraformParser.RULE_variable = 8;
terraformParser.RULE_block = 9;
terraformParser.RULE_blocktype = 10;
terraformParser.RULE_resourcetype = 11;
terraformParser.RULE_name = 12;
terraformParser.RULE_label = 13;
terraformParser.RULE_blockbody = 14;
terraformParser.RULE_argument = 15;
terraformParser.RULE_identifier = 16;
terraformParser.RULE_identifierchain = 17;
terraformParser.RULE_inline_index = 18;
terraformParser.RULE_expression = 19;
terraformParser.RULE_forloop = 20;
terraformParser.RULE_section = 21;
terraformParser.RULE_val = 22;
terraformParser.RULE_functioncall = 23;
terraformParser.RULE_functionname = 24;
terraformParser.RULE_functionarguments = 25;
terraformParser.RULE_index = 26;
terraformParser.RULE_filedecl = 27;
terraformParser.RULE_list_ = 28;
terraformParser.RULE_map_ = 29;
terraformParser.RULE_string = 30;
terraformParser.RULE_signed_number = 31;
terraformParser.RULE_operator_ = 32;
terraformParser.RULE_number = 33;

class File_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = terraformParser.RULE_file_;
    }

	local = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LocalContext);
	    } else {
	        return this.getTypedRuleContext(LocalContext,i);
	    }
	};

	module = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ModuleContext);
	    } else {
	        return this.getTypedRuleContext(ModuleContext,i);
	    }
	};

	output = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OutputContext);
	    } else {
	        return this.getTypedRuleContext(OutputContext,i);
	    }
	};

	provider = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ProviderContext);
	    } else {
	        return this.getTypedRuleContext(ProviderContext,i);
	    }
	};

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

	data = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DataContext);
	    } else {
	        return this.getTypedRuleContext(DataContext,i);
	    }
	};

	resource = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ResourceContext);
	    } else {
	        return this.getTypedRuleContext(ResourceContext,i);
	    }
	};

	terraform = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TerraformContext);
	    } else {
	        return this.getTypedRuleContext(TerraformContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.enterFile_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.exitFile_(this);
		}
	}


}



class TerraformContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = terraformParser.RULE_terraform;
    }

	blockbody() {
	    return this.getTypedRuleContext(BlockbodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.enterTerraform(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.exitTerraform(this);
		}
	}


}



class ResourceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = terraformParser.RULE_resource;
    }

	resourcetype() {
	    return this.getTypedRuleContext(ResourcetypeContext,0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	blockbody() {
	    return this.getTypedRuleContext(BlockbodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.enterResource(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.exitResource(this);
		}
	}


}



class DataContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = terraformParser.RULE_data;
    }

	resourcetype() {
	    return this.getTypedRuleContext(ResourcetypeContext,0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	blockbody() {
	    return this.getTypedRuleContext(BlockbodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.enterData(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.exitData(this);
		}
	}


}



class ProviderContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = terraformParser.RULE_provider;
    }

	PROVIDER() {
	    return this.getToken(terraformParser.PROVIDER, 0);
	};

	resourcetype() {
	    return this.getTypedRuleContext(ResourcetypeContext,0);
	};

	blockbody() {
	    return this.getTypedRuleContext(BlockbodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.enterProvider(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.exitProvider(this);
		}
	}


}



class OutputContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = terraformParser.RULE_output;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	blockbody() {
	    return this.getTypedRuleContext(BlockbodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.enterOutput(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.exitOutput(this);
		}
	}


}



class LocalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = terraformParser.RULE_local;
    }

	blockbody() {
	    return this.getTypedRuleContext(BlockbodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.enterLocal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.exitLocal(this);
		}
	}


}



class ModuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = terraformParser.RULE_module;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	blockbody() {
	    return this.getTypedRuleContext(BlockbodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.enterModule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.exitModule(this);
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
        this.ruleIndex = terraformParser.RULE_variable;
    }

	VARIABLE() {
	    return this.getToken(terraformParser.VARIABLE, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	blockbody() {
	    return this.getTypedRuleContext(BlockbodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.exitVariable(this);
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
        this.ruleIndex = terraformParser.RULE_block;
    }

	blocktype() {
	    return this.getTypedRuleContext(BlocktypeContext,0);
	};

	blockbody() {
	    return this.getTypedRuleContext(BlockbodyContext,0);
	};

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

	enterRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.exitBlock(this);
		}
	}


}



class BlocktypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = terraformParser.RULE_blocktype;
    }

	IDENTIFIER() {
	    return this.getToken(terraformParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.enterBlocktype(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.exitBlocktype(this);
		}
	}


}



class ResourcetypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = terraformParser.RULE_resourcetype;
    }

	STRING() {
	    return this.getToken(terraformParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.enterResourcetype(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.exitResourcetype(this);
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
        this.ruleIndex = terraformParser.RULE_name;
    }

	STRING() {
	    return this.getToken(terraformParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.exitName(this);
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
        this.ruleIndex = terraformParser.RULE_label;
    }

	STRING() {
	    return this.getToken(terraformParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.enterLabel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.exitLabel(this);
		}
	}


}



class BlockbodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = terraformParser.RULE_blockbody;
    }

	LCURL() {
	    return this.getToken(terraformParser.LCURL, 0);
	};

	RCURL() {
	    return this.getToken(terraformParser.RCURL, 0);
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

	block = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BlockContext);
	    } else {
	        return this.getTypedRuleContext(BlockContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.enterBlockbody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.exitBlockbody(this);
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
        this.ruleIndex = terraformParser.RULE_argument;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.enterArgument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.exitArgument(this);
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
        this.ruleIndex = terraformParser.RULE_identifier;
    }

	identifierchain() {
	    return this.getTypedRuleContext(IdentifierchainContext,0);
	};

	DOT() {
	    return this.getToken(terraformParser.DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.exitIdentifier(this);
		}
	}


}



class IdentifierchainContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = terraformParser.RULE_identifierchain;
    }

	IDENTIFIER() {
	    return this.getToken(terraformParser.IDENTIFIER, 0);
	};

	IN() {
	    return this.getToken(terraformParser.IN, 0);
	};

	VARIABLE() {
	    return this.getToken(terraformParser.VARIABLE, 0);
	};

	PROVIDER() {
	    return this.getToken(terraformParser.PROVIDER, 0);
	};

	index() {
	    return this.getTypedRuleContext(IndexContext,0);
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(terraformParser.DOT);
	    } else {
	        return this.getToken(terraformParser.DOT, i);
	    }
	};


	identifierchain = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierchainContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierchainContext,i);
	    }
	};

	STAR() {
	    return this.getToken(terraformParser.STAR, 0);
	};

	inline_index() {
	    return this.getTypedRuleContext(Inline_indexContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.enterIdentifierchain(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.exitIdentifierchain(this);
		}
	}


}



class Inline_indexContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = terraformParser.RULE_inline_index;
    }

	NATURAL_NUMBER() {
	    return this.getToken(terraformParser.NATURAL_NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.enterInline_index(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.exitInline_index(this);
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
        this.ruleIndex = terraformParser.RULE_expression;
    }

	section() {
	    return this.getTypedRuleContext(SectionContext,0);
	};

	LPAREN() {
	    return this.getToken(terraformParser.LPAREN, 0);
	};

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

	RPAREN() {
	    return this.getToken(terraformParser.RPAREN, 0);
	};

	forloop() {
	    return this.getTypedRuleContext(ForloopContext,0);
	};

	operator_() {
	    return this.getTypedRuleContext(Operator_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.exitExpression(this);
		}
	}


}



class ForloopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = terraformParser.RULE_forloop;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	IN() {
	    return this.getToken(terraformParser.IN, 0);
	};

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
	    if(listener instanceof terraformListener ) {
	        listener.enterForloop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.exitForloop(this);
		}
	}


}



class SectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = terraformParser.RULE_section;
    }

	list_() {
	    return this.getTypedRuleContext(List_Context,0);
	};

	map_() {
	    return this.getTypedRuleContext(Map_Context,0);
	};

	val() {
	    return this.getTypedRuleContext(ValContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.enterSection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.exitSection(this);
		}
	}


}



class ValContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = terraformParser.RULE_val;
    }

	NULL_() {
	    return this.getToken(terraformParser.NULL_, 0);
	};

	signed_number() {
	    return this.getTypedRuleContext(Signed_numberContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	BOOL() {
	    return this.getToken(terraformParser.BOOL, 0);
	};

	DESCRIPTION() {
	    return this.getToken(terraformParser.DESCRIPTION, 0);
	};

	filedecl() {
	    return this.getTypedRuleContext(FiledeclContext,0);
	};

	functioncall() {
	    return this.getTypedRuleContext(FunctioncallContext,0);
	};

	EOF_() {
	    return this.getToken(terraformParser.EOF_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.enterVal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.exitVal(this);
		}
	}


}



class FunctioncallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = terraformParser.RULE_functioncall;
    }

	functionname() {
	    return this.getTypedRuleContext(FunctionnameContext,0);
	};

	LPAREN() {
	    return this.getToken(terraformParser.LPAREN, 0);
	};

	functionarguments() {
	    return this.getTypedRuleContext(FunctionargumentsContext,0);
	};

	RPAREN() {
	    return this.getToken(terraformParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.enterFunctioncall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.exitFunctioncall(this);
		}
	}


}



class FunctionnameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = terraformParser.RULE_functionname;
    }

	IDENTIFIER() {
	    return this.getToken(terraformParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.enterFunctionname(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.exitFunctionname(this);
		}
	}


}



class FunctionargumentsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = terraformParser.RULE_functionarguments;
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
	    if(listener instanceof terraformListener ) {
	        listener.enterFunctionarguments(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.exitFunctionarguments(this);
		}
	}


}



class IndexContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = terraformParser.RULE_index;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.enterIndex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.exitIndex(this);
		}
	}


}



class FiledeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = terraformParser.RULE_filedecl;
    }

	LPAREN() {
	    return this.getToken(terraformParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(terraformParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.enterFiledecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.exitFiledecl(this);
		}
	}


}



class List_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = terraformParser.RULE_list_;
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
	    if(listener instanceof terraformListener ) {
	        listener.enterList_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.exitList_(this);
		}
	}


}



class Map_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = terraformParser.RULE_map_;
    }

	LCURL() {
	    return this.getToken(terraformParser.LCURL, 0);
	};

	RCURL() {
	    return this.getToken(terraformParser.RCURL, 0);
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
	    if(listener instanceof terraformListener ) {
	        listener.enterMap_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.exitMap_(this);
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
        this.ruleIndex = terraformParser.RULE_string;
    }

	STRING() {
	    return this.getToken(terraformParser.STRING, 0);
	};

	MULTILINESTRING() {
	    return this.getToken(terraformParser.MULTILINESTRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.exitString(this);
		}
	}


}



class Signed_numberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = terraformParser.RULE_signed_number;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.enterSigned_number(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.exitSigned_number(this);
		}
	}


}



class Operator_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = terraformParser.RULE_operator_;
    }

	STAR() {
	    return this.getToken(terraformParser.STAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.enterOperator_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.exitOperator_(this);
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
        this.ruleIndex = terraformParser.RULE_number;
    }

	NATURAL_NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(terraformParser.NATURAL_NUMBER);
	    } else {
	        return this.getToken(terraformParser.NATURAL_NUMBER, i);
	    }
	};


	DOT() {
	    return this.getToken(terraformParser.DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof terraformListener ) {
	        listener.exitNumber(this);
		}
	}


}




terraformParser.File_Context = File_Context; 
terraformParser.TerraformContext = TerraformContext; 
terraformParser.ResourceContext = ResourceContext; 
terraformParser.DataContext = DataContext; 
terraformParser.ProviderContext = ProviderContext; 
terraformParser.OutputContext = OutputContext; 
terraformParser.LocalContext = LocalContext; 
terraformParser.ModuleContext = ModuleContext; 
terraformParser.VariableContext = VariableContext; 
terraformParser.BlockContext = BlockContext; 
terraformParser.BlocktypeContext = BlocktypeContext; 
terraformParser.ResourcetypeContext = ResourcetypeContext; 
terraformParser.NameContext = NameContext; 
terraformParser.LabelContext = LabelContext; 
terraformParser.BlockbodyContext = BlockbodyContext; 
terraformParser.ArgumentContext = ArgumentContext; 
terraformParser.IdentifierContext = IdentifierContext; 
terraformParser.IdentifierchainContext = IdentifierchainContext; 
terraformParser.Inline_indexContext = Inline_indexContext; 
terraformParser.ExpressionContext = ExpressionContext; 
terraformParser.ForloopContext = ForloopContext; 
terraformParser.SectionContext = SectionContext; 
terraformParser.ValContext = ValContext; 
terraformParser.FunctioncallContext = FunctioncallContext; 
terraformParser.FunctionnameContext = FunctionnameContext; 
terraformParser.FunctionargumentsContext = FunctionargumentsContext; 
terraformParser.IndexContext = IndexContext; 
terraformParser.FiledeclContext = FiledeclContext; 
terraformParser.List_Context = List_Context; 
terraformParser.Map_Context = Map_Context; 
terraformParser.StringContext = StringContext; 
terraformParser.Signed_numberContext = Signed_numberContext; 
terraformParser.Operator_Context = Operator_Context; 
terraformParser.NumberContext = NumberContext; 
