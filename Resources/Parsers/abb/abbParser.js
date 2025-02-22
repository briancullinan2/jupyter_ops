// Generated from ./abb/abbParser.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import abbParserListener from './abbParserListener.js';
const serializedATN = [4,1,49,152,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,5,1,41,8,1,
10,1,12,1,44,9,1,1,1,1,1,1,2,1,2,3,2,50,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
5,3,59,8,3,10,3,12,3,62,9,3,1,4,1,4,1,4,1,4,1,4,1,4,5,4,70,8,4,10,4,12,4,
73,9,4,1,4,1,4,1,5,1,5,3,5,79,8,5,1,6,1,6,1,7,1,7,3,7,85,8,7,1,7,1,7,1,8,
1,8,1,8,1,8,5,8,93,8,8,10,8,12,8,96,9,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,3,9,
105,8,9,1,10,1,10,1,10,1,10,1,10,3,10,112,8,10,1,10,1,10,1,11,1,11,1,12,
3,12,119,8,12,1,12,1,12,1,13,1,13,3,13,125,8,13,1,14,1,14,1,14,1,14,5,14,
131,8,14,10,14,12,14,134,9,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,3,15,143,
8,15,1,15,1,15,3,15,147,8,15,1,15,3,15,150,8,15,1,15,0,0,16,0,2,4,6,8,10,
12,14,16,18,20,22,24,26,28,30,0,3,1,0,9,14,1,0,6,8,1,0,36,37,157,0,32,1,
0,0,0,2,35,1,0,0,0,4,49,1,0,0,0,6,60,1,0,0,0,8,63,1,0,0,0,10,76,1,0,0,0,
12,80,1,0,0,0,14,82,1,0,0,0,16,88,1,0,0,0,18,104,1,0,0,0,20,106,1,0,0,0,
22,115,1,0,0,0,24,118,1,0,0,0,26,124,1,0,0,0,28,126,1,0,0,0,30,149,1,0,0,
0,32,33,3,2,1,0,33,34,5,0,0,1,34,1,1,0,0,0,35,36,5,1,0,0,36,37,3,4,2,0,37,
38,5,42,0,0,38,42,3,6,3,0,39,41,5,42,0,0,40,39,1,0,0,0,41,44,1,0,0,0,42,
40,1,0,0,0,42,43,1,0,0,0,43,45,1,0,0,0,44,42,1,0,0,0,45,46,5,2,0,0,46,3,
1,0,0,0,47,50,5,49,0,0,48,50,3,10,5,0,49,47,1,0,0,0,49,48,1,0,0,0,50,5,1,
0,0,0,51,59,5,42,0,0,52,53,3,20,10,0,53,54,5,42,0,0,54,59,1,0,0,0,55,56,
3,8,4,0,56,57,5,42,0,0,57,59,1,0,0,0,58,51,1,0,0,0,58,52,1,0,0,0,58,55,1,
0,0,0,59,62,1,0,0,0,60,58,1,0,0,0,60,61,1,0,0,0,61,7,1,0,0,0,62,60,1,0,0,
0,63,64,5,3,0,0,64,65,3,10,5,0,65,71,5,42,0,0,66,67,3,16,8,0,67,68,5,42,
0,0,68,70,1,0,0,0,69,66,1,0,0,0,70,73,1,0,0,0,71,69,1,0,0,0,71,72,1,0,0,
0,72,74,1,0,0,0,73,71,1,0,0,0,74,75,5,4,0,0,75,9,1,0,0,0,76,78,3,12,6,0,
77,79,3,14,7,0,78,77,1,0,0,0,78,79,1,0,0,0,79,11,1,0,0,0,80,81,5,49,0,0,
81,13,1,0,0,0,82,84,5,24,0,0,83,85,5,49,0,0,84,83,1,0,0,0,84,85,1,0,0,0,
85,86,1,0,0,0,86,87,5,25,0,0,87,15,1,0,0,0,88,94,5,49,0,0,89,90,3,18,9,0,
90,91,5,19,0,0,91,93,1,0,0,0,92,89,1,0,0,0,93,96,1,0,0,0,94,92,1,0,0,0,94,
95,1,0,0,0,95,97,1,0,0,0,96,94,1,0,0,0,97,98,3,18,9,0,98,99,5,23,0,0,99,
17,1,0,0,0,100,105,5,15,0,0,101,105,5,16,0,0,102,105,3,30,15,0,103,105,5,
49,0,0,104,100,1,0,0,0,104,101,1,0,0,0,104,102,1,0,0,0,104,103,1,0,0,0,105,
19,1,0,0,0,106,107,3,24,12,0,107,108,3,22,11,0,108,111,5,49,0,0,109,110,
5,18,0,0,110,112,3,26,13,0,111,109,1,0,0,0,111,112,1,0,0,0,112,113,1,0,0,
0,113,114,5,23,0,0,114,21,1,0,0,0,115,116,7,0,0,0,116,23,1,0,0,0,117,119,
5,5,0,0,118,117,1,0,0,0,118,119,1,0,0,0,119,120,1,0,0,0,120,121,7,1,0,0,
121,25,1,0,0,0,122,125,3,28,14,0,123,125,3,30,15,0,124,122,1,0,0,0,124,123,
1,0,0,0,125,27,1,0,0,0,126,132,5,26,0,0,127,128,3,26,13,0,128,129,5,19,0,
0,129,131,1,0,0,0,130,127,1,0,0,0,131,134,1,0,0,0,132,130,1,0,0,0,132,133,
1,0,0,0,133,135,1,0,0,0,134,132,1,0,0,0,135,136,3,26,13,0,136,137,5,27,0,
0,137,29,1,0,0,0,138,150,5,44,0,0,139,150,5,45,0,0,140,150,5,46,0,0,141,
143,7,2,0,0,142,141,1,0,0,0,142,143,1,0,0,0,143,144,1,0,0,0,144,150,5,47,
0,0,145,147,7,2,0,0,146,145,1,0,0,0,146,147,1,0,0,0,147,148,1,0,0,0,148,
150,5,48,0,0,149,138,1,0,0,0,149,139,1,0,0,0,149,140,1,0,0,0,149,142,1,0,
0,0,149,146,1,0,0,0,150,31,1,0,0,0,16,42,49,58,60,71,78,84,94,104,111,118,
124,132,142,146,149];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class abbParser extends antlr4.Parser {

    static grammarFileName = "abbParser.g4";
    static literalNames = [ null, "'module'", "'endmodule'", null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, "'/'", "':='", "','", 
                            "'{'", "'}'", "':'", "';'", "'('", "')'", "'['", 
                            "']'", "'.'", "'..'", "'>'", "'>='", "'<'", 
                            "'<='", "'=='", "'<>'", "'+'", "'-'", "'*'", 
                            "'%'", "'#'" ];
    static symbolicNames = [ null, "MODULE", "ENDMODULE", "PROC", "ENDPROC", 
                             "LOCAL", "CONST", "PERS", "VAR", "TOOLDATA", 
                             "WOBJDATA", "SPEEDDATA", "ZONEDATA", "CLOCK", 
                             "BOOL", "ON_CALL", "OFF_CALL", "SLASH", "EQUALS", 
                             "COMMA", "CURLY_OPEN", "CURLY_CLOSE", "COLON", 
                             "SEMICOLON", "BRACKET_OPEN", "BRACKET_CLOSE", 
                             "SQUARE_OPEN", "SQUARE_CLOSE", "DOT", "DOUBLEDOT", 
                             "REL_BIGGER", "REL_BIGGER_OR_EQUAL", "REL_SMALLER", 
                             "REL_SMALLER_OR_EQUAL", "REL_EQUAL", "REL_NOTEQUAL", 
                             "PLUS", "MINUS", "MULTIPLY", "PERCENT", "HASH", 
                             "WS", "NEWLINE", "LINE_COMMENT", "BOOLLITERAL", 
                             "CHARLITERAL", "STRINGLITERAL", "FLOATLITERAL", 
                             "INTLITERAL", "IDENTIFIER" ];
    static ruleNames = [ "module", "moduleData", "moduleName", "dataList", 
                         "procedure", "procCall", "procName", "procParameter", 
                         "functionCall", "functionParameter", "declaration", 
                         "type_", "init_", "expression", "array_", "primitive" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = abbParser.ruleNames;
        this.literalNames = abbParser.literalNames;
        this.symbolicNames = abbParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	module() {
	    let localctx = new ModuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, abbParser.RULE_module);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.moduleData();
	        this.state = 33;
	        this.match(abbParser.EOF);
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



	moduleData() {
	    let localctx = new ModuleDataContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, abbParser.RULE_moduleData);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.match(abbParser.MODULE);
	        this.state = 36;
	        this.moduleName();
	        this.state = 37;
	        this.match(abbParser.NEWLINE);
	        this.state = 38;
	        this.dataList();
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===abbParser.NEWLINE) {
	            this.state = 39;
	            this.match(abbParser.NEWLINE);
	            this.state = 44;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 45;
	        this.match(abbParser.ENDMODULE);
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



	moduleName() {
	    let localctx = new ModuleNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, abbParser.RULE_moduleName);
	    try {
	        this.state = 49;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 47;
	            this.match(abbParser.IDENTIFIER);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 48;
	            this.procCall();
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



	dataList() {
	    let localctx = new DataListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, abbParser.RULE_dataList);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 58;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case abbParser.NEWLINE:
	                    this.state = 51;
	                    this.match(abbParser.NEWLINE);
	                    break;
	                case abbParser.LOCAL:
	                case abbParser.CONST:
	                case abbParser.PERS:
	                case abbParser.VAR:
	                    this.state = 52;
	                    this.declaration();
	                    this.state = 53;
	                    this.match(abbParser.NEWLINE);
	                    break;
	                case abbParser.PROC:
	                    this.state = 55;
	                    this.procedure();
	                    this.state = 56;
	                    this.match(abbParser.NEWLINE);
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                } 
	            }
	            this.state = 62;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
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



	procedure() {
	    let localctx = new ProcedureContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, abbParser.RULE_procedure);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.match(abbParser.PROC);
	        this.state = 64;
	        this.procCall();
	        this.state = 65;
	        this.match(abbParser.NEWLINE);
	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===abbParser.IDENTIFIER) {
	            this.state = 66;
	            this.functionCall();
	            this.state = 67;
	            this.match(abbParser.NEWLINE);
	            this.state = 73;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 74;
	        this.match(abbParser.ENDPROC);
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



	procCall() {
	    let localctx = new ProcCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, abbParser.RULE_procCall);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.procName();
	        this.state = 78;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===abbParser.BRACKET_OPEN) {
	            this.state = 77;
	            this.procParameter();
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



	procName() {
	    let localctx = new ProcNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, abbParser.RULE_procName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.match(abbParser.IDENTIFIER);
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



	procParameter() {
	    let localctx = new ProcParameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, abbParser.RULE_procParameter);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.match(abbParser.BRACKET_OPEN);
	        this.state = 84;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===abbParser.IDENTIFIER) {
	            this.state = 83;
	            this.match(abbParser.IDENTIFIER);
	        }

	        this.state = 86;
	        this.match(abbParser.BRACKET_CLOSE);
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



	functionCall() {
	    let localctx = new FunctionCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, abbParser.RULE_functionCall);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.match(abbParser.IDENTIFIER);
	        this.state = 94;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 89;
	                this.functionParameter();
	                this.state = 90;
	                this.match(abbParser.COMMA); 
	            }
	            this.state = 96;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	        this.state = 97;
	        this.functionParameter();
	        this.state = 98;
	        this.match(abbParser.SEMICOLON);
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



	functionParameter() {
	    let localctx = new FunctionParameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, abbParser.RULE_functionParameter);
	    try {
	        this.state = 104;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case abbParser.ON_CALL:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 100;
	            this.match(abbParser.ON_CALL);
	            break;
	        case abbParser.OFF_CALL:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 101;
	            this.match(abbParser.OFF_CALL);
	            break;
	        case abbParser.PLUS:
	        case abbParser.MINUS:
	        case abbParser.BOOLLITERAL:
	        case abbParser.CHARLITERAL:
	        case abbParser.STRINGLITERAL:
	        case abbParser.FLOATLITERAL:
	        case abbParser.INTLITERAL:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 102;
	            this.primitive();
	            break;
	        case abbParser.IDENTIFIER:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 103;
	            this.match(abbParser.IDENTIFIER);
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



	declaration() {
	    let localctx = new DeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, abbParser.RULE_declaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this.init_();
	        this.state = 107;
	        this.type_();
	        this.state = 108;
	        this.match(abbParser.IDENTIFIER);
	        this.state = 111;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===abbParser.EQUALS) {
	            this.state = 109;
	            this.match(abbParser.EQUALS);
	            this.state = 110;
	            this.expression();
	        }

	        this.state = 113;
	        this.match(abbParser.SEMICOLON);
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
	    this.enterRule(localctx, 22, abbParser.RULE_type_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << abbParser.TOOLDATA) | (1 << abbParser.WOBJDATA) | (1 << abbParser.SPEEDDATA) | (1 << abbParser.ZONEDATA) | (1 << abbParser.CLOCK) | (1 << abbParser.BOOL))) !== 0))) {
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



	init_() {
	    let localctx = new Init_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, abbParser.RULE_init_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===abbParser.LOCAL) {
	            this.state = 117;
	            this.match(abbParser.LOCAL);
	        }

	        this.state = 120;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << abbParser.CONST) | (1 << abbParser.PERS) | (1 << abbParser.VAR))) !== 0))) {
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



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, abbParser.RULE_expression);
	    try {
	        this.state = 124;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case abbParser.SQUARE_OPEN:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 122;
	            this.array_();
	            break;
	        case abbParser.PLUS:
	        case abbParser.MINUS:
	        case abbParser.BOOLLITERAL:
	        case abbParser.CHARLITERAL:
	        case abbParser.STRINGLITERAL:
	        case abbParser.FLOATLITERAL:
	        case abbParser.INTLITERAL:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 123;
	            this.primitive();
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



	array_() {
	    let localctx = new Array_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, abbParser.RULE_array_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this.match(abbParser.SQUARE_OPEN);
	        this.state = 132;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 127;
	                this.expression();
	                this.state = 128;
	                this.match(abbParser.COMMA); 
	            }
	            this.state = 134;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
	        }

	        this.state = 135;
	        this.expression();
	        this.state = 136;
	        this.match(abbParser.SQUARE_CLOSE);
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



	primitive() {
	    let localctx = new PrimitiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, abbParser.RULE_primitive);
	    var _la = 0; // Token type
	    try {
	        this.state = 149;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 138;
	            this.match(abbParser.BOOLLITERAL);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 139;
	            this.match(abbParser.CHARLITERAL);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 140;
	            this.match(abbParser.STRINGLITERAL);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 142;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===abbParser.PLUS || _la===abbParser.MINUS) {
	                this.state = 141;
	                _la = this._input.LA(1);
	                if(!(_la===abbParser.PLUS || _la===abbParser.MINUS)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	            }

	            this.state = 144;
	            this.match(abbParser.FLOATLITERAL);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 146;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===abbParser.PLUS || _la===abbParser.MINUS) {
	                this.state = 145;
	                _la = this._input.LA(1);
	                if(!(_la===abbParser.PLUS || _la===abbParser.MINUS)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	            }

	            this.state = 148;
	            this.match(abbParser.INTLITERAL);
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


}

abbParser.EOF = antlr4.Token.EOF;
abbParser.MODULE = 1;
abbParser.ENDMODULE = 2;
abbParser.PROC = 3;
abbParser.ENDPROC = 4;
abbParser.LOCAL = 5;
abbParser.CONST = 6;
abbParser.PERS = 7;
abbParser.VAR = 8;
abbParser.TOOLDATA = 9;
abbParser.WOBJDATA = 10;
abbParser.SPEEDDATA = 11;
abbParser.ZONEDATA = 12;
abbParser.CLOCK = 13;
abbParser.BOOL = 14;
abbParser.ON_CALL = 15;
abbParser.OFF_CALL = 16;
abbParser.SLASH = 17;
abbParser.EQUALS = 18;
abbParser.COMMA = 19;
abbParser.CURLY_OPEN = 20;
abbParser.CURLY_CLOSE = 21;
abbParser.COLON = 22;
abbParser.SEMICOLON = 23;
abbParser.BRACKET_OPEN = 24;
abbParser.BRACKET_CLOSE = 25;
abbParser.SQUARE_OPEN = 26;
abbParser.SQUARE_CLOSE = 27;
abbParser.DOT = 28;
abbParser.DOUBLEDOT = 29;
abbParser.REL_BIGGER = 30;
abbParser.REL_BIGGER_OR_EQUAL = 31;
abbParser.REL_SMALLER = 32;
abbParser.REL_SMALLER_OR_EQUAL = 33;
abbParser.REL_EQUAL = 34;
abbParser.REL_NOTEQUAL = 35;
abbParser.PLUS = 36;
abbParser.MINUS = 37;
abbParser.MULTIPLY = 38;
abbParser.PERCENT = 39;
abbParser.HASH = 40;
abbParser.WS = 41;
abbParser.NEWLINE = 42;
abbParser.LINE_COMMENT = 43;
abbParser.BOOLLITERAL = 44;
abbParser.CHARLITERAL = 45;
abbParser.STRINGLITERAL = 46;
abbParser.FLOATLITERAL = 47;
abbParser.INTLITERAL = 48;
abbParser.IDENTIFIER = 49;

abbParser.RULE_module = 0;
abbParser.RULE_moduleData = 1;
abbParser.RULE_moduleName = 2;
abbParser.RULE_dataList = 3;
abbParser.RULE_procedure = 4;
abbParser.RULE_procCall = 5;
abbParser.RULE_procName = 6;
abbParser.RULE_procParameter = 7;
abbParser.RULE_functionCall = 8;
abbParser.RULE_functionParameter = 9;
abbParser.RULE_declaration = 10;
abbParser.RULE_type_ = 11;
abbParser.RULE_init_ = 12;
abbParser.RULE_expression = 13;
abbParser.RULE_array_ = 14;
abbParser.RULE_primitive = 15;

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
        this.ruleIndex = abbParser.RULE_module;
    }

	moduleData() {
	    return this.getTypedRuleContext(ModuleDataContext,0);
	};

	EOF() {
	    return this.getToken(abbParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof abbParserListener ) {
	        listener.enterModule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof abbParserListener ) {
	        listener.exitModule(this);
		}
	}


}



class ModuleDataContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = abbParser.RULE_moduleData;
    }

	MODULE() {
	    return this.getToken(abbParser.MODULE, 0);
	};

	moduleName() {
	    return this.getTypedRuleContext(ModuleNameContext,0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(abbParser.NEWLINE);
	    } else {
	        return this.getToken(abbParser.NEWLINE, i);
	    }
	};


	dataList() {
	    return this.getTypedRuleContext(DataListContext,0);
	};

	ENDMODULE() {
	    return this.getToken(abbParser.ENDMODULE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof abbParserListener ) {
	        listener.enterModuleData(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof abbParserListener ) {
	        listener.exitModuleData(this);
		}
	}


}



class ModuleNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = abbParser.RULE_moduleName;
    }

	IDENTIFIER() {
	    return this.getToken(abbParser.IDENTIFIER, 0);
	};

	procCall() {
	    return this.getTypedRuleContext(ProcCallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof abbParserListener ) {
	        listener.enterModuleName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof abbParserListener ) {
	        listener.exitModuleName(this);
		}
	}


}



class DataListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = abbParser.RULE_dataList;
    }

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(abbParser.NEWLINE);
	    } else {
	        return this.getToken(abbParser.NEWLINE, i);
	    }
	};


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

	procedure = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ProcedureContext);
	    } else {
	        return this.getTypedRuleContext(ProcedureContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof abbParserListener ) {
	        listener.enterDataList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof abbParserListener ) {
	        listener.exitDataList(this);
		}
	}


}



class ProcedureContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = abbParser.RULE_procedure;
    }

	PROC() {
	    return this.getToken(abbParser.PROC, 0);
	};

	procCall() {
	    return this.getTypedRuleContext(ProcCallContext,0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(abbParser.NEWLINE);
	    } else {
	        return this.getToken(abbParser.NEWLINE, i);
	    }
	};


	ENDPROC() {
	    return this.getToken(abbParser.ENDPROC, 0);
	};

	functionCall = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FunctionCallContext);
	    } else {
	        return this.getTypedRuleContext(FunctionCallContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof abbParserListener ) {
	        listener.enterProcedure(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof abbParserListener ) {
	        listener.exitProcedure(this);
		}
	}


}



class ProcCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = abbParser.RULE_procCall;
    }

	procName() {
	    return this.getTypedRuleContext(ProcNameContext,0);
	};

	procParameter() {
	    return this.getTypedRuleContext(ProcParameterContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof abbParserListener ) {
	        listener.enterProcCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof abbParserListener ) {
	        listener.exitProcCall(this);
		}
	}


}



class ProcNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = abbParser.RULE_procName;
    }

	IDENTIFIER() {
	    return this.getToken(abbParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof abbParserListener ) {
	        listener.enterProcName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof abbParserListener ) {
	        listener.exitProcName(this);
		}
	}


}



class ProcParameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = abbParser.RULE_procParameter;
    }

	BRACKET_OPEN() {
	    return this.getToken(abbParser.BRACKET_OPEN, 0);
	};

	BRACKET_CLOSE() {
	    return this.getToken(abbParser.BRACKET_CLOSE, 0);
	};

	IDENTIFIER() {
	    return this.getToken(abbParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof abbParserListener ) {
	        listener.enterProcParameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof abbParserListener ) {
	        listener.exitProcParameter(this);
		}
	}


}



class FunctionCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = abbParser.RULE_functionCall;
    }

	IDENTIFIER() {
	    return this.getToken(abbParser.IDENTIFIER, 0);
	};

	functionParameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FunctionParameterContext);
	    } else {
	        return this.getTypedRuleContext(FunctionParameterContext,i);
	    }
	};

	SEMICOLON() {
	    return this.getToken(abbParser.SEMICOLON, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(abbParser.COMMA);
	    } else {
	        return this.getToken(abbParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof abbParserListener ) {
	        listener.enterFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof abbParserListener ) {
	        listener.exitFunctionCall(this);
		}
	}


}



class FunctionParameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = abbParser.RULE_functionParameter;
    }

	ON_CALL() {
	    return this.getToken(abbParser.ON_CALL, 0);
	};

	OFF_CALL() {
	    return this.getToken(abbParser.OFF_CALL, 0);
	};

	primitive() {
	    return this.getTypedRuleContext(PrimitiveContext,0);
	};

	IDENTIFIER() {
	    return this.getToken(abbParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof abbParserListener ) {
	        listener.enterFunctionParameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof abbParserListener ) {
	        listener.exitFunctionParameter(this);
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
        this.ruleIndex = abbParser.RULE_declaration;
    }

	init_() {
	    return this.getTypedRuleContext(Init_Context,0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	IDENTIFIER() {
	    return this.getToken(abbParser.IDENTIFIER, 0);
	};

	SEMICOLON() {
	    return this.getToken(abbParser.SEMICOLON, 0);
	};

	EQUALS() {
	    return this.getToken(abbParser.EQUALS, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof abbParserListener ) {
	        listener.enterDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof abbParserListener ) {
	        listener.exitDeclaration(this);
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
        this.ruleIndex = abbParser.RULE_type_;
    }

	TOOLDATA() {
	    return this.getToken(abbParser.TOOLDATA, 0);
	};

	WOBJDATA() {
	    return this.getToken(abbParser.WOBJDATA, 0);
	};

	SPEEDDATA() {
	    return this.getToken(abbParser.SPEEDDATA, 0);
	};

	ZONEDATA() {
	    return this.getToken(abbParser.ZONEDATA, 0);
	};

	CLOCK() {
	    return this.getToken(abbParser.CLOCK, 0);
	};

	BOOL() {
	    return this.getToken(abbParser.BOOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof abbParserListener ) {
	        listener.enterType_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof abbParserListener ) {
	        listener.exitType_(this);
		}
	}


}



class Init_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = abbParser.RULE_init_;
    }

	CONST() {
	    return this.getToken(abbParser.CONST, 0);
	};

	PERS() {
	    return this.getToken(abbParser.PERS, 0);
	};

	VAR() {
	    return this.getToken(abbParser.VAR, 0);
	};

	LOCAL() {
	    return this.getToken(abbParser.LOCAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof abbParserListener ) {
	        listener.enterInit_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof abbParserListener ) {
	        listener.exitInit_(this);
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
        this.ruleIndex = abbParser.RULE_expression;
    }

	array_() {
	    return this.getTypedRuleContext(Array_Context,0);
	};

	primitive() {
	    return this.getTypedRuleContext(PrimitiveContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof abbParserListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof abbParserListener ) {
	        listener.exitExpression(this);
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
        this.ruleIndex = abbParser.RULE_array_;
    }

	SQUARE_OPEN() {
	    return this.getToken(abbParser.SQUARE_OPEN, 0);
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

	SQUARE_CLOSE() {
	    return this.getToken(abbParser.SQUARE_CLOSE, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(abbParser.COMMA);
	    } else {
	        return this.getToken(abbParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof abbParserListener ) {
	        listener.enterArray_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof abbParserListener ) {
	        listener.exitArray_(this);
		}
	}


}



class PrimitiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = abbParser.RULE_primitive;
    }

	BOOLLITERAL() {
	    return this.getToken(abbParser.BOOLLITERAL, 0);
	};

	CHARLITERAL() {
	    return this.getToken(abbParser.CHARLITERAL, 0);
	};

	STRINGLITERAL() {
	    return this.getToken(abbParser.STRINGLITERAL, 0);
	};

	FLOATLITERAL() {
	    return this.getToken(abbParser.FLOATLITERAL, 0);
	};

	PLUS() {
	    return this.getToken(abbParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(abbParser.MINUS, 0);
	};

	INTLITERAL() {
	    return this.getToken(abbParser.INTLITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof abbParserListener ) {
	        listener.enterPrimitive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof abbParserListener ) {
	        listener.exitPrimitive(this);
		}
	}


}




abbParser.ModuleContext = ModuleContext; 
abbParser.ModuleDataContext = ModuleDataContext; 
abbParser.ModuleNameContext = ModuleNameContext; 
abbParser.DataListContext = DataListContext; 
abbParser.ProcedureContext = ProcedureContext; 
abbParser.ProcCallContext = ProcCallContext; 
abbParser.ProcNameContext = ProcNameContext; 
abbParser.ProcParameterContext = ProcParameterContext; 
abbParser.FunctionCallContext = FunctionCallContext; 
abbParser.FunctionParameterContext = FunctionParameterContext; 
abbParser.DeclarationContext = DeclarationContext; 
abbParser.Type_Context = Type_Context; 
abbParser.Init_Context = Init_Context; 
abbParser.ExpressionContext = ExpressionContext; 
abbParser.Array_Context = Array_Context; 
abbParser.PrimitiveContext = PrimitiveContext; 
