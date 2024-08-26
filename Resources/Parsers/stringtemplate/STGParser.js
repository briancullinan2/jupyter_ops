// Generated from Resources/Parsers/stringtemplate/STGParser.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import STGParserListener from './STGParserListener.js';
const serializedATN = [4,1,42,131,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,3,0,24,8,0,1,0,3,
0,27,8,0,1,0,1,0,4,0,31,8,0,11,0,12,0,32,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,2,
1,2,4,2,44,8,2,11,2,12,2,45,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,57,8,
3,1,3,3,3,60,8,3,1,3,1,3,1,3,1,3,1,3,3,3,67,8,3,1,4,1,4,1,4,5,4,72,8,4,10,
4,12,4,75,9,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,89,8,5,
1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,5,7,100,8,7,10,7,12,7,103,9,7,1,7,1,
7,3,7,107,8,7,1,7,3,7,110,8,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,
1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,129,8,10,1,10,0,0,11,0,2,4,6,8,10,
12,14,16,18,20,0,1,1,0,8,10,143,0,23,1,0,0,0,2,36,1,0,0,0,4,43,1,0,0,0,6,
66,1,0,0,0,8,68,1,0,0,0,10,76,1,0,0,0,12,90,1,0,0,0,14,109,1,0,0,0,16,111,
1,0,0,0,18,115,1,0,0,0,20,128,1,0,0,0,22,24,3,2,1,0,23,22,1,0,0,0,23,24,
1,0,0,0,24,26,1,0,0,0,25,27,3,4,2,0,26,25,1,0,0,0,26,27,1,0,0,0,27,30,1,
0,0,0,28,31,3,6,3,0,29,31,3,12,6,0,30,28,1,0,0,0,30,29,1,0,0,0,31,32,1,0,
0,0,32,30,1,0,0,0,32,33,1,0,0,0,33,34,1,0,0,0,34,35,5,0,0,1,35,1,1,0,0,0,
36,37,5,25,0,0,37,38,5,8,0,0,38,39,5,15,0,0,39,40,5,8,0,0,40,3,1,0,0,0,41,
42,5,26,0,0,42,44,5,8,0,0,43,41,1,0,0,0,44,45,1,0,0,0,45,43,1,0,0,0,45,46,
1,0,0,0,46,5,1,0,0,0,47,48,5,21,0,0,48,49,5,7,0,0,49,50,5,14,0,0,50,51,5,
7,0,0,51,52,5,17,0,0,52,60,5,18,0,0,53,54,5,7,0,0,54,56,5,17,0,0,55,57,3,
8,4,0,56,55,1,0,0,0,56,57,1,0,0,0,57,58,1,0,0,0,58,60,5,18,0,0,59,47,1,0,
0,0,59,53,1,0,0,0,60,61,1,0,0,0,61,62,5,12,0,0,62,67,7,0,0,0,63,64,5,7,0,
0,64,65,5,12,0,0,65,67,5,7,0,0,66,59,1,0,0,0,66,63,1,0,0,0,67,7,1,0,0,0,
68,73,3,10,5,0,69,70,5,15,0,0,70,72,3,10,5,0,71,69,1,0,0,0,72,75,1,0,0,0,
73,71,1,0,0,0,73,74,1,0,0,0,74,9,1,0,0,0,75,73,1,0,0,0,76,88,5,7,0,0,77,
78,5,13,0,0,78,89,5,8,0,0,79,80,5,13,0,0,80,89,5,11,0,0,81,82,5,13,0,0,82,
89,5,22,0,0,83,84,5,13,0,0,84,89,5,23,0,0,85,86,5,13,0,0,86,87,5,19,0,0,
87,89,5,20,0,0,88,77,1,0,0,0,88,79,1,0,0,0,88,81,1,0,0,0,88,83,1,0,0,0,88,
85,1,0,0,0,88,89,1,0,0,0,89,11,1,0,0,0,90,91,5,7,0,0,91,92,5,12,0,0,92,93,
5,19,0,0,93,94,3,14,7,0,94,95,5,20,0,0,95,13,1,0,0,0,96,101,3,16,8,0,97,
98,5,15,0,0,98,100,3,16,8,0,99,97,1,0,0,0,100,103,1,0,0,0,101,99,1,0,0,0,
101,102,1,0,0,0,102,106,1,0,0,0,103,101,1,0,0,0,104,105,5,15,0,0,105,107,
3,18,9,0,106,104,1,0,0,0,106,107,1,0,0,0,107,110,1,0,0,0,108,110,3,18,9,
0,109,96,1,0,0,0,109,108,1,0,0,0,110,15,1,0,0,0,111,112,5,8,0,0,112,113,
5,16,0,0,113,114,3,20,10,0,114,17,1,0,0,0,115,116,5,27,0,0,116,117,5,16,
0,0,117,118,3,20,10,0,118,19,1,0,0,0,119,129,5,9,0,0,120,129,5,10,0,0,121,
129,5,11,0,0,122,129,5,8,0,0,123,129,5,22,0,0,124,129,5,23,0,0,125,126,5,
19,0,0,126,129,5,20,0,0,127,129,5,28,0,0,128,119,1,0,0,0,128,120,1,0,0,0,
128,121,1,0,0,0,128,122,1,0,0,0,128,123,1,0,0,0,128,124,1,0,0,0,128,125,
1,0,0,0,128,127,1,0,0,0,129,21,1,0,0,0,14,23,26,30,32,45,56,59,66,73,88,
101,106,109,128];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class STGParser extends antlr4.Parser {

    static grammarFileName = "STGParser.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, "'delimiters'", "'import'", "'default'", 
                            "'key'", "'value'", "'first'", "'last'", "'rest'", 
                            "'trunc'", "'strip'", "'trim'", "'length'", 
                            "'strlen'", "'reverse'", "'group'", "'wrap'", 
                            "'anchor'", "'separator'" ];
    static symbolicNames = [ null, "DOC_COMMENT", "BLOCK_COMMENT", "LINE_COMMENT", 
                             "TMPL_COMMENT", "HORZ_WS", "VERT_WS", "ID", 
                             "STRING", "BIGSTRING", "BIGSTRING_NO_NL", "ANON_TEMPLATE", 
                             "TMPL_ASSIGN", "ASSIGN", "DOT", "COMMA", "COLON", 
                             "LPAREN", "RPAREN", "LBRACK", "RBRACK", "AT", 
                             "TRUE", "FALSE", "ELLIPSIS", "DELIMITERS", 
                             "IMPORT", "DEFAULT", "KEY", "VALUE", "FIRST", 
                             "LAST", "REST", "TRUNC", "STRIP", "TRIM", "LENGTH", 
                             "STRLEN", "REVERSE", "GROUP", "WRAP", "ANCHOR", 
                             "SEPARATOR" ];
    static ruleNames = [ "group", "delimiters", "imports", "template_", 
                         "formalArgs", "formalArg", "dict_", "dictPairs", 
                         "keyValuePair", "defaultValuePair", "keyValue" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = STGParser.ruleNames;
        this.literalNames = STGParser.literalNames;
        this.symbolicNames = STGParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	group() {
	    let localctx = new GroupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, STGParser.RULE_group);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===STGParser.DELIMITERS) {
	            this.state = 22;
	            this.delimiters();
	        }

	        this.state = 26;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===STGParser.IMPORT) {
	            this.state = 25;
	            this.imports();
	        }

	        this.state = 30; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 30;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 28;
	                this.template_();
	                break;

	            case 2:
	                this.state = 29;
	                this.dict_();
	                break;

	            }
	            this.state = 32; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===STGParser.ID || _la===STGParser.AT);
	        this.state = 34;
	        this.match(STGParser.EOF);
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



	delimiters() {
	    let localctx = new DelimitersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, STGParser.RULE_delimiters);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.match(STGParser.DELIMITERS);
	        this.state = 37;
	        this.match(STGParser.STRING);
	        this.state = 38;
	        this.match(STGParser.COMMA);
	        this.state = 39;
	        this.match(STGParser.STRING);
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



	imports() {
	    let localctx = new ImportsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, STGParser.RULE_imports);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 41;
	            this.match(STGParser.IMPORT);
	            this.state = 42;
	            this.match(STGParser.STRING);
	            this.state = 45; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===STGParser.IMPORT);
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



	template_() {
	    let localctx = new Template_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, STGParser.RULE_template_);
	    var _la = 0; // Token type
	    try {
	        this.state = 66;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 59;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case STGParser.AT:
	                this.state = 47;
	                this.match(STGParser.AT);
	                this.state = 48;
	                this.match(STGParser.ID);
	                this.state = 49;
	                this.match(STGParser.DOT);
	                this.state = 50;
	                this.match(STGParser.ID);
	                this.state = 51;
	                this.match(STGParser.LPAREN);
	                this.state = 52;
	                this.match(STGParser.RPAREN);
	                break;
	            case STGParser.ID:
	                this.state = 53;
	                this.match(STGParser.ID);
	                this.state = 54;
	                this.match(STGParser.LPAREN);
	                this.state = 56;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===STGParser.ID) {
	                    this.state = 55;
	                    this.formalArgs();
	                }

	                this.state = 58;
	                this.match(STGParser.RPAREN);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 61;
	            this.match(STGParser.TMPL_ASSIGN);
	            this.state = 62;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << STGParser.STRING) | (1 << STGParser.BIGSTRING) | (1 << STGParser.BIGSTRING_NO_NL))) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 63;
	            this.match(STGParser.ID);
	            this.state = 64;
	            this.match(STGParser.TMPL_ASSIGN);
	            this.state = 65;
	            this.match(STGParser.ID);
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



	formalArgs() {
	    let localctx = new FormalArgsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, STGParser.RULE_formalArgs);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.formalArg();
	        this.state = 73;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===STGParser.COMMA) {
	            this.state = 69;
	            this.match(STGParser.COMMA);
	            this.state = 70;
	            this.formalArg();
	            this.state = 75;
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



	formalArg() {
	    let localctx = new FormalArgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, STGParser.RULE_formalArg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.match(STGParser.ID);
	        this.state = 88;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        if(la_===1) {
	            this.state = 77;
	            this.match(STGParser.ASSIGN);
	            this.state = 78;
	            this.match(STGParser.STRING);

	        } else if(la_===2) {
	            this.state = 79;
	            this.match(STGParser.ASSIGN);
	            this.state = 80;
	            this.match(STGParser.ANON_TEMPLATE);

	        } else if(la_===3) {
	            this.state = 81;
	            this.match(STGParser.ASSIGN);
	            this.state = 82;
	            this.match(STGParser.TRUE);

	        } else if(la_===4) {
	            this.state = 83;
	            this.match(STGParser.ASSIGN);
	            this.state = 84;
	            this.match(STGParser.FALSE);

	        } else if(la_===5) {
	            this.state = 85;
	            this.match(STGParser.ASSIGN);
	            this.state = 86;
	            this.match(STGParser.LBRACK);
	            this.state = 87;
	            this.match(STGParser.RBRACK);

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



	dict_() {
	    let localctx = new Dict_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, STGParser.RULE_dict_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this.match(STGParser.ID);
	        this.state = 91;
	        this.match(STGParser.TMPL_ASSIGN);
	        this.state = 92;
	        this.match(STGParser.LBRACK);
	        this.state = 93;
	        this.dictPairs();
	        this.state = 94;
	        this.match(STGParser.RBRACK);
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



	dictPairs() {
	    let localctx = new DictPairsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, STGParser.RULE_dictPairs);
	    var _la = 0; // Token type
	    try {
	        this.state = 109;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case STGParser.STRING:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 96;
	            this.keyValuePair();
	            this.state = 101;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 97;
	                    this.match(STGParser.COMMA);
	                    this.state = 98;
	                    this.keyValuePair(); 
	                }
	                this.state = 103;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	            }

	            this.state = 106;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===STGParser.COMMA) {
	                this.state = 104;
	                this.match(STGParser.COMMA);
	                this.state = 105;
	                this.defaultValuePair();
	            }

	            break;
	        case STGParser.DEFAULT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 108;
	            this.defaultValuePair();
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



	keyValuePair() {
	    let localctx = new KeyValuePairContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, STGParser.RULE_keyValuePair);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.match(STGParser.STRING);
	        this.state = 112;
	        this.match(STGParser.COLON);
	        this.state = 113;
	        this.keyValue();
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



	defaultValuePair() {
	    let localctx = new DefaultValuePairContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, STGParser.RULE_defaultValuePair);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        this.match(STGParser.DEFAULT);
	        this.state = 116;
	        this.match(STGParser.COLON);
	        this.state = 117;
	        this.keyValue();
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



	keyValue() {
	    let localctx = new KeyValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, STGParser.RULE_keyValue);
	    try {
	        this.state = 128;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case STGParser.BIGSTRING:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 119;
	            this.match(STGParser.BIGSTRING);
	            break;
	        case STGParser.BIGSTRING_NO_NL:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 120;
	            this.match(STGParser.BIGSTRING_NO_NL);
	            break;
	        case STGParser.ANON_TEMPLATE:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 121;
	            this.match(STGParser.ANON_TEMPLATE);
	            break;
	        case STGParser.STRING:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 122;
	            this.match(STGParser.STRING);
	            break;
	        case STGParser.TRUE:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 123;
	            this.match(STGParser.TRUE);
	            break;
	        case STGParser.FALSE:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 124;
	            this.match(STGParser.FALSE);
	            break;
	        case STGParser.LBRACK:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 125;
	            this.match(STGParser.LBRACK);
	            this.state = 126;
	            this.match(STGParser.RBRACK);
	            break;
	        case STGParser.KEY:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 127;
	            this.match(STGParser.KEY);
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

STGParser.EOF = antlr4.Token.EOF;
STGParser.DOC_COMMENT = 1;
STGParser.BLOCK_COMMENT = 2;
STGParser.LINE_COMMENT = 3;
STGParser.TMPL_COMMENT = 4;
STGParser.HORZ_WS = 5;
STGParser.VERT_WS = 6;
STGParser.ID = 7;
STGParser.STRING = 8;
STGParser.BIGSTRING = 9;
STGParser.BIGSTRING_NO_NL = 10;
STGParser.ANON_TEMPLATE = 11;
STGParser.TMPL_ASSIGN = 12;
STGParser.ASSIGN = 13;
STGParser.DOT = 14;
STGParser.COMMA = 15;
STGParser.COLON = 16;
STGParser.LPAREN = 17;
STGParser.RPAREN = 18;
STGParser.LBRACK = 19;
STGParser.RBRACK = 20;
STGParser.AT = 21;
STGParser.TRUE = 22;
STGParser.FALSE = 23;
STGParser.ELLIPSIS = 24;
STGParser.DELIMITERS = 25;
STGParser.IMPORT = 26;
STGParser.DEFAULT = 27;
STGParser.KEY = 28;
STGParser.VALUE = 29;
STGParser.FIRST = 30;
STGParser.LAST = 31;
STGParser.REST = 32;
STGParser.TRUNC = 33;
STGParser.STRIP = 34;
STGParser.TRIM = 35;
STGParser.LENGTH = 36;
STGParser.STRLEN = 37;
STGParser.REVERSE = 38;
STGParser.GROUP = 39;
STGParser.WRAP = 40;
STGParser.ANCHOR = 41;
STGParser.SEPARATOR = 42;

STGParser.RULE_group = 0;
STGParser.RULE_delimiters = 1;
STGParser.RULE_imports = 2;
STGParser.RULE_template_ = 3;
STGParser.RULE_formalArgs = 4;
STGParser.RULE_formalArg = 5;
STGParser.RULE_dict_ = 6;
STGParser.RULE_dictPairs = 7;
STGParser.RULE_keyValuePair = 8;
STGParser.RULE_defaultValuePair = 9;
STGParser.RULE_keyValue = 10;

class GroupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STGParser.RULE_group;
    }

	EOF() {
	    return this.getToken(STGParser.EOF, 0);
	};

	delimiters() {
	    return this.getTypedRuleContext(DelimitersContext,0);
	};

	imports() {
	    return this.getTypedRuleContext(ImportsContext,0);
	};

	template_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Template_Context);
	    } else {
	        return this.getTypedRuleContext(Template_Context,i);
	    }
	};

	dict_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Dict_Context);
	    } else {
	        return this.getTypedRuleContext(Dict_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof STGParserListener ) {
	        listener.enterGroup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STGParserListener ) {
	        listener.exitGroup(this);
		}
	}


}



class DelimitersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STGParser.RULE_delimiters;
    }

	DELIMITERS() {
	    return this.getToken(STGParser.DELIMITERS, 0);
	};

	STRING = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(STGParser.STRING);
	    } else {
	        return this.getToken(STGParser.STRING, i);
	    }
	};


	COMMA() {
	    return this.getToken(STGParser.COMMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof STGParserListener ) {
	        listener.enterDelimiters(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STGParserListener ) {
	        listener.exitDelimiters(this);
		}
	}


}



class ImportsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STGParser.RULE_imports;
    }

	IMPORT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(STGParser.IMPORT);
	    } else {
	        return this.getToken(STGParser.IMPORT, i);
	    }
	};


	STRING = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(STGParser.STRING);
	    } else {
	        return this.getToken(STGParser.STRING, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof STGParserListener ) {
	        listener.enterImports(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STGParserListener ) {
	        listener.exitImports(this);
		}
	}


}



class Template_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STGParser.RULE_template_;
    }

	TMPL_ASSIGN() {
	    return this.getToken(STGParser.TMPL_ASSIGN, 0);
	};

	STRING() {
	    return this.getToken(STGParser.STRING, 0);
	};

	BIGSTRING() {
	    return this.getToken(STGParser.BIGSTRING, 0);
	};

	BIGSTRING_NO_NL() {
	    return this.getToken(STGParser.BIGSTRING_NO_NL, 0);
	};

	AT() {
	    return this.getToken(STGParser.AT, 0);
	};

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(STGParser.ID);
	    } else {
	        return this.getToken(STGParser.ID, i);
	    }
	};


	DOT() {
	    return this.getToken(STGParser.DOT, 0);
	};

	LPAREN() {
	    return this.getToken(STGParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(STGParser.RPAREN, 0);
	};

	formalArgs() {
	    return this.getTypedRuleContext(FormalArgsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof STGParserListener ) {
	        listener.enterTemplate_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STGParserListener ) {
	        listener.exitTemplate_(this);
		}
	}


}



class FormalArgsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STGParser.RULE_formalArgs;
    }

	formalArg = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormalArgContext);
	    } else {
	        return this.getTypedRuleContext(FormalArgContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(STGParser.COMMA);
	    } else {
	        return this.getToken(STGParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof STGParserListener ) {
	        listener.enterFormalArgs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STGParserListener ) {
	        listener.exitFormalArgs(this);
		}
	}


}



class FormalArgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STGParser.RULE_formalArg;
    }

	ID() {
	    return this.getToken(STGParser.ID, 0);
	};

	ASSIGN() {
	    return this.getToken(STGParser.ASSIGN, 0);
	};

	STRING() {
	    return this.getToken(STGParser.STRING, 0);
	};

	ANON_TEMPLATE() {
	    return this.getToken(STGParser.ANON_TEMPLATE, 0);
	};

	TRUE() {
	    return this.getToken(STGParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(STGParser.FALSE, 0);
	};

	LBRACK() {
	    return this.getToken(STGParser.LBRACK, 0);
	};

	RBRACK() {
	    return this.getToken(STGParser.RBRACK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof STGParserListener ) {
	        listener.enterFormalArg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STGParserListener ) {
	        listener.exitFormalArg(this);
		}
	}


}



class Dict_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STGParser.RULE_dict_;
    }

	ID() {
	    return this.getToken(STGParser.ID, 0);
	};

	TMPL_ASSIGN() {
	    return this.getToken(STGParser.TMPL_ASSIGN, 0);
	};

	LBRACK() {
	    return this.getToken(STGParser.LBRACK, 0);
	};

	dictPairs() {
	    return this.getTypedRuleContext(DictPairsContext,0);
	};

	RBRACK() {
	    return this.getToken(STGParser.RBRACK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof STGParserListener ) {
	        listener.enterDict_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STGParserListener ) {
	        listener.exitDict_(this);
		}
	}


}



class DictPairsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STGParser.RULE_dictPairs;
    }

	keyValuePair = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(KeyValuePairContext);
	    } else {
	        return this.getTypedRuleContext(KeyValuePairContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(STGParser.COMMA);
	    } else {
	        return this.getToken(STGParser.COMMA, i);
	    }
	};


	defaultValuePair() {
	    return this.getTypedRuleContext(DefaultValuePairContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof STGParserListener ) {
	        listener.enterDictPairs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STGParserListener ) {
	        listener.exitDictPairs(this);
		}
	}


}



class KeyValuePairContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STGParser.RULE_keyValuePair;
    }

	STRING() {
	    return this.getToken(STGParser.STRING, 0);
	};

	COLON() {
	    return this.getToken(STGParser.COLON, 0);
	};

	keyValue() {
	    return this.getTypedRuleContext(KeyValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof STGParserListener ) {
	        listener.enterKeyValuePair(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STGParserListener ) {
	        listener.exitKeyValuePair(this);
		}
	}


}



class DefaultValuePairContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STGParser.RULE_defaultValuePair;
    }

	DEFAULT() {
	    return this.getToken(STGParser.DEFAULT, 0);
	};

	COLON() {
	    return this.getToken(STGParser.COLON, 0);
	};

	keyValue() {
	    return this.getTypedRuleContext(KeyValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof STGParserListener ) {
	        listener.enterDefaultValuePair(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STGParserListener ) {
	        listener.exitDefaultValuePair(this);
		}
	}


}



class KeyValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STGParser.RULE_keyValue;
    }

	BIGSTRING() {
	    return this.getToken(STGParser.BIGSTRING, 0);
	};

	BIGSTRING_NO_NL() {
	    return this.getToken(STGParser.BIGSTRING_NO_NL, 0);
	};

	ANON_TEMPLATE() {
	    return this.getToken(STGParser.ANON_TEMPLATE, 0);
	};

	STRING() {
	    return this.getToken(STGParser.STRING, 0);
	};

	TRUE() {
	    return this.getToken(STGParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(STGParser.FALSE, 0);
	};

	LBRACK() {
	    return this.getToken(STGParser.LBRACK, 0);
	};

	RBRACK() {
	    return this.getToken(STGParser.RBRACK, 0);
	};

	KEY() {
	    return this.getToken(STGParser.KEY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof STGParserListener ) {
	        listener.enterKeyValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STGParserListener ) {
	        listener.exitKeyValue(this);
		}
	}


}




STGParser.GroupContext = GroupContext; 
STGParser.DelimitersContext = DelimitersContext; 
STGParser.ImportsContext = ImportsContext; 
STGParser.Template_Context = Template_Context; 
STGParser.FormalArgsContext = FormalArgsContext; 
STGParser.FormalArgContext = FormalArgContext; 
STGParser.Dict_Context = Dict_Context; 
STGParser.DictPairsContext = DictPairsContext; 
STGParser.KeyValuePairContext = KeyValuePairContext; 
STGParser.DefaultValuePairContext = DefaultValuePairContext; 
STGParser.KeyValueContext = KeyValueContext; 
