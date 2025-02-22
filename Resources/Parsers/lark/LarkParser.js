// Generated from ./lark/LarkParser.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import LarkParserListener from './LarkParserListener.js';
const serializedATN = [4,1,26,200,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,3,0,36,8,0,1,0,5,0,39,8,0,10,
0,12,0,42,9,0,1,0,3,0,45,8,0,1,1,1,1,1,1,3,1,50,8,1,1,2,1,2,1,2,3,2,55,8,
2,1,2,1,2,1,2,1,3,1,3,1,3,3,3,63,8,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,5,4,72,
8,4,10,4,12,4,75,9,4,1,4,3,4,78,8,4,1,5,1,5,1,5,1,5,5,5,84,8,5,10,5,12,5,
87,9,5,1,5,3,5,90,8,5,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,3,7,101,8,7,1,
7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,4,7,111,8,7,11,7,12,7,112,3,7,115,8,7,1,8,
3,8,118,8,8,1,8,1,8,1,8,5,8,123,8,8,10,8,12,8,126,9,8,1,9,1,9,1,9,1,9,5,
9,132,8,9,10,9,12,9,135,9,9,1,9,1,9,1,10,1,10,1,10,5,10,142,8,10,10,10,12,
10,145,9,10,1,11,1,11,1,11,3,11,150,8,11,1,12,5,12,153,8,12,10,12,12,12,
156,9,12,1,13,1,13,1,13,1,13,1,13,1,13,3,13,164,8,13,3,13,166,8,13,1,14,
1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,3,14,177,8,14,1,15,1,15,1,15,1,15,
1,15,1,15,1,15,1,15,1,15,1,15,5,15,189,8,15,10,15,12,15,192,9,15,1,15,1,
15,3,15,196,8,15,1,16,1,16,1,16,0,0,17,0,2,4,6,8,10,12,14,16,18,20,22,24,
26,28,30,32,0,2,1,0,21,22,1,0,19,20,214,0,40,1,0,0,0,2,49,1,0,0,0,4,51,1,
0,0,0,6,59,1,0,0,0,8,77,1,0,0,0,10,89,1,0,0,0,12,91,1,0,0,0,14,114,1,0,0,
0,16,117,1,0,0,0,18,127,1,0,0,0,20,138,1,0,0,0,22,146,1,0,0,0,24,154,1,0,
0,0,26,157,1,0,0,0,28,176,1,0,0,0,30,195,1,0,0,0,32,197,1,0,0,0,34,36,3,
2,1,0,35,34,1,0,0,0,35,36,1,0,0,0,36,37,1,0,0,0,37,39,5,23,0,0,38,35,1,0,
0,0,39,42,1,0,0,0,40,38,1,0,0,0,40,41,1,0,0,0,41,44,1,0,0,0,42,40,1,0,0,
0,43,45,3,2,1,0,44,43,1,0,0,0,44,45,1,0,0,0,45,1,1,0,0,0,46,50,3,4,2,0,47,
50,3,6,3,0,48,50,3,14,7,0,49,46,1,0,0,0,49,47,1,0,0,0,49,48,1,0,0,0,50,3,
1,0,0,0,51,52,5,19,0,0,52,54,3,8,4,0,53,55,3,12,6,0,54,53,1,0,0,0,54,55,
1,0,0,0,55,56,1,0,0,0,56,57,5,1,0,0,57,58,3,20,10,0,58,5,1,0,0,0,59,60,5,
20,0,0,60,62,3,10,5,0,61,63,3,12,6,0,62,61,1,0,0,0,62,63,1,0,0,0,63,64,1,
0,0,0,64,65,5,1,0,0,65,66,3,20,10,0,66,7,1,0,0,0,67,68,5,2,0,0,68,73,5,19,
0,0,69,70,5,8,0,0,70,72,5,19,0,0,71,69,1,0,0,0,72,75,1,0,0,0,73,71,1,0,0,
0,73,74,1,0,0,0,74,76,1,0,0,0,75,73,1,0,0,0,76,78,5,3,0,0,77,67,1,0,0,0,
77,78,1,0,0,0,78,9,1,0,0,0,79,80,5,2,0,0,80,85,5,20,0,0,81,82,5,8,0,0,82,
84,5,20,0,0,83,81,1,0,0,0,84,87,1,0,0,0,85,83,1,0,0,0,85,86,1,0,0,0,86,88,
1,0,0,0,87,85,1,0,0,0,88,90,5,3,0,0,89,79,1,0,0,0,89,90,1,0,0,0,90,11,1,
0,0,0,91,92,5,9,0,0,92,93,5,24,0,0,93,13,1,0,0,0,94,95,5,11,0,0,95,115,3,
20,10,0,96,97,5,12,0,0,97,100,3,16,8,0,98,99,5,10,0,0,99,101,3,32,16,0,100,
98,1,0,0,0,100,101,1,0,0,0,101,115,1,0,0,0,102,103,5,12,0,0,103,104,3,16,
8,0,104,105,3,18,9,0,105,115,1,0,0,0,106,107,5,13,0,0,107,115,3,4,2,0,108,
110,5,14,0,0,109,111,3,32,16,0,110,109,1,0,0,0,111,112,1,0,0,0,112,110,1,
0,0,0,112,113,1,0,0,0,113,115,1,0,0,0,114,94,1,0,0,0,114,96,1,0,0,0,114,
102,1,0,0,0,114,106,1,0,0,0,114,108,1,0,0,0,115,15,1,0,0,0,116,118,5,9,0,
0,117,116,1,0,0,0,117,118,1,0,0,0,118,119,1,0,0,0,119,124,3,32,16,0,120,
121,5,9,0,0,121,123,3,32,16,0,122,120,1,0,0,0,123,126,1,0,0,0,124,122,1,
0,0,0,124,125,1,0,0,0,125,17,1,0,0,0,126,124,1,0,0,0,127,128,5,4,0,0,128,
133,3,32,16,0,129,130,5,8,0,0,130,132,3,32,16,0,131,129,1,0,0,0,132,135,
1,0,0,0,133,131,1,0,0,0,133,134,1,0,0,0,134,136,1,0,0,0,135,133,1,0,0,0,
136,137,5,5,0,0,137,19,1,0,0,0,138,143,3,22,11,0,139,140,5,17,0,0,140,142,
3,22,11,0,141,139,1,0,0,0,142,145,1,0,0,0,143,141,1,0,0,0,143,144,1,0,0,
0,144,21,1,0,0,0,145,143,1,0,0,0,146,149,3,24,12,0,147,148,5,10,0,0,148,
150,5,19,0,0,149,147,1,0,0,0,149,150,1,0,0,0,150,23,1,0,0,0,151,153,3,26,
13,0,152,151,1,0,0,0,153,156,1,0,0,0,154,152,1,0,0,0,154,155,1,0,0,0,155,
25,1,0,0,0,156,154,1,0,0,0,157,165,3,28,14,0,158,166,5,18,0,0,159,160,5,
16,0,0,160,163,5,24,0,0,161,162,5,15,0,0,162,164,5,24,0,0,163,161,1,0,0,
0,163,164,1,0,0,0,164,166,1,0,0,0,165,158,1,0,0,0,165,159,1,0,0,0,165,166,
1,0,0,0,166,27,1,0,0,0,167,168,5,4,0,0,168,169,3,20,10,0,169,170,5,5,0,0,
170,177,1,0,0,0,171,172,5,6,0,0,172,173,3,20,10,0,173,174,5,7,0,0,174,177,
1,0,0,0,175,177,3,30,15,0,176,167,1,0,0,0,176,171,1,0,0,0,176,175,1,0,0,
0,177,29,1,0,0,0,178,179,5,21,0,0,179,180,5,15,0,0,180,196,5,21,0,0,181,
196,3,32,16,0,182,196,7,0,0,0,183,184,3,32,16,0,184,185,5,2,0,0,185,190,
3,30,15,0,186,187,5,8,0,0,187,189,3,30,15,0,188,186,1,0,0,0,189,192,1,0,
0,0,190,188,1,0,0,0,190,191,1,0,0,0,191,193,1,0,0,0,192,190,1,0,0,0,193,
194,5,3,0,0,194,196,1,0,0,0,195,178,1,0,0,0,195,181,1,0,0,0,195,182,1,0,
0,0,195,183,1,0,0,0,196,31,1,0,0,0,197,198,7,1,0,0,198,33,1,0,0,0,24,35,
40,44,49,54,62,73,77,85,89,100,112,114,117,124,133,143,149,154,163,165,176,
190,195];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LarkParser extends antlr4.Parser {

    static grammarFileName = "LarkParser.g4";
    static literalNames = [ null, "':'", "'{'", "'}'", "'('", "')'", "'['", 
                            "']'", "','", "'.'", "'->'", "'%ignore'", "'%import'", 
                            "'%override'", "'%declare'", "'..'", "'~'", 
                            "'|'" ];
    static symbolicNames = [ null, "COLON", "LC", "RC", "LP", "RP", "LB", 
                             "RB", "COMMA", "DOT", "ARROW", "IGNORE", "IMPORT", 
                             "OVERRIDE", "DECLARE", "DD", "SQ", "VBAR", 
                             "OP", "RULE", "TOKEN", "STRING", "REGEXP", 
                             "NL", "NUMBER", "WS_INLINE", "COMMENT" ];
    static ruleNames = [ "start", "item", "rule_", "token", "rule_params", 
                         "token_params", "priority", "statement", "import_path", 
                         "name_list", "expansions", "alias", "expansion", 
                         "expr", "atom", "value", "name" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LarkParser.ruleNames;
        this.literalNames = LarkParser.literalNames;
        this.symbolicNames = LarkParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LarkParser.RULE_start);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 35;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LarkParser.IGNORE) | (1 << LarkParser.IMPORT) | (1 << LarkParser.OVERRIDE) | (1 << LarkParser.DECLARE) | (1 << LarkParser.RULE) | (1 << LarkParser.TOKEN))) !== 0)) {
	                    this.state = 34;
	                    this.item();
	                }

	                this.state = 37;
	                this.match(LarkParser.NL); 
	            }
	            this.state = 42;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	        }

	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LarkParser.IGNORE) | (1 << LarkParser.IMPORT) | (1 << LarkParser.OVERRIDE) | (1 << LarkParser.DECLARE) | (1 << LarkParser.RULE) | (1 << LarkParser.TOKEN))) !== 0)) {
	            this.state = 43;
	            this.item();
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



	item() {
	    let localctx = new ItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LarkParser.RULE_item);
	    try {
	        this.state = 49;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LarkParser.RULE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 46;
	            this.rule_();
	            break;
	        case LarkParser.TOKEN:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 47;
	            this.token();
	            break;
	        case LarkParser.IGNORE:
	        case LarkParser.IMPORT:
	        case LarkParser.OVERRIDE:
	        case LarkParser.DECLARE:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 48;
	            this.statement();
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



	rule_() {
	    let localctx = new Rule_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LarkParser.RULE_rule_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(LarkParser.RULE);
	        this.state = 52;
	        this.rule_params();
	        this.state = 54;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LarkParser.DOT) {
	            this.state = 53;
	            this.priority();
	        }

	        this.state = 56;
	        this.match(LarkParser.COLON);
	        this.state = 57;
	        this.expansions();
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



	token() {
	    let localctx = new TokenContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LarkParser.RULE_token);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.match(LarkParser.TOKEN);
	        this.state = 60;
	        this.token_params();
	        this.state = 62;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LarkParser.DOT) {
	            this.state = 61;
	            this.priority();
	        }

	        this.state = 64;
	        this.match(LarkParser.COLON);
	        this.state = 65;
	        this.expansions();
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



	rule_params() {
	    let localctx = new Rule_paramsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LarkParser.RULE_rule_params);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LarkParser.LC) {
	            this.state = 67;
	            this.match(LarkParser.LC);
	            this.state = 68;
	            this.match(LarkParser.RULE);
	            this.state = 73;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===LarkParser.COMMA) {
	                this.state = 69;
	                this.match(LarkParser.COMMA);
	                this.state = 70;
	                this.match(LarkParser.RULE);
	                this.state = 75;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 76;
	            this.match(LarkParser.RC);
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



	token_params() {
	    let localctx = new Token_paramsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LarkParser.RULE_token_params);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LarkParser.LC) {
	            this.state = 79;
	            this.match(LarkParser.LC);
	            this.state = 80;
	            this.match(LarkParser.TOKEN);
	            this.state = 85;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===LarkParser.COMMA) {
	                this.state = 81;
	                this.match(LarkParser.COMMA);
	                this.state = 82;
	                this.match(LarkParser.TOKEN);
	                this.state = 87;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 88;
	            this.match(LarkParser.RC);
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



	priority() {
	    let localctx = new PriorityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LarkParser.RULE_priority);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.match(LarkParser.DOT);
	        this.state = 92;
	        this.match(LarkParser.NUMBER);
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, LarkParser.RULE_statement);
	    var _la = 0; // Token type
	    try {
	        this.state = 114;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 94;
	            this.match(LarkParser.IGNORE);
	            this.state = 95;
	            this.expansions();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 96;
	            this.match(LarkParser.IMPORT);
	            this.state = 97;
	            this.import_path();
	            this.state = 100;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===LarkParser.ARROW) {
	                this.state = 98;
	                this.match(LarkParser.ARROW);
	                this.state = 99;
	                this.name();
	            }

	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 102;
	            this.match(LarkParser.IMPORT);
	            this.state = 103;
	            this.import_path();
	            this.state = 104;
	            this.name_list();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 106;
	            this.match(LarkParser.OVERRIDE);
	            this.state = 107;
	            this.rule_();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 108;
	            this.match(LarkParser.DECLARE);
	            this.state = 110; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 109;
	                this.name();
	                this.state = 112; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===LarkParser.RULE || _la===LarkParser.TOKEN);
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



	import_path() {
	    let localctx = new Import_pathContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, LarkParser.RULE_import_path);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LarkParser.DOT) {
	            this.state = 116;
	            this.match(LarkParser.DOT);
	        }

	        this.state = 119;
	        this.name();
	        this.state = 124;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LarkParser.DOT) {
	            this.state = 120;
	            this.match(LarkParser.DOT);
	            this.state = 121;
	            this.name();
	            this.state = 126;
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



	name_list() {
	    let localctx = new Name_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, LarkParser.RULE_name_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        this.match(LarkParser.LP);
	        this.state = 128;
	        this.name();
	        this.state = 133;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LarkParser.COMMA) {
	            this.state = 129;
	            this.match(LarkParser.COMMA);
	            this.state = 130;
	            this.name();
	            this.state = 135;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 136;
	        this.match(LarkParser.RP);
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



	expansions() {
	    let localctx = new ExpansionsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, LarkParser.RULE_expansions);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        this.alias();
	        this.state = 143;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LarkParser.VBAR) {
	            this.state = 139;
	            this.match(LarkParser.VBAR);
	            this.state = 140;
	            this.alias();
	            this.state = 145;
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



	alias() {
	    let localctx = new AliasContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, LarkParser.RULE_alias);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        this.expansion();
	        this.state = 149;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LarkParser.ARROW) {
	            this.state = 147;
	            this.match(LarkParser.ARROW);
	            this.state = 148;
	            this.match(LarkParser.RULE);
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



	expansion() {
	    let localctx = new ExpansionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, LarkParser.RULE_expansion);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LarkParser.LP) | (1 << LarkParser.LB) | (1 << LarkParser.RULE) | (1 << LarkParser.TOKEN) | (1 << LarkParser.STRING) | (1 << LarkParser.REGEXP))) !== 0)) {
	            this.state = 151;
	            this.expr();
	            this.state = 156;
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



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, LarkParser.RULE_expr);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this.atom();
	        this.state = 165;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case LarkParser.OP:
	        	this.state = 158;
	        	this.match(LarkParser.OP);
	        	break;
	        case LarkParser.SQ:
	        	this.state = 159;
	        	this.match(LarkParser.SQ);
	        	this.state = 160;
	        	this.match(LarkParser.NUMBER);
	        	this.state = 163;
	        	this._errHandler.sync(this);
	        	_la = this._input.LA(1);
	        	if(_la===LarkParser.DD) {
	        	    this.state = 161;
	        	    this.match(LarkParser.DD);
	        	    this.state = 162;
	        	    this.match(LarkParser.NUMBER);
	        	}

	        	break;
	        case LarkParser.EOF:
	        case LarkParser.LP:
	        case LarkParser.RP:
	        case LarkParser.LB:
	        case LarkParser.RB:
	        case LarkParser.ARROW:
	        case LarkParser.VBAR:
	        case LarkParser.RULE:
	        case LarkParser.TOKEN:
	        case LarkParser.STRING:
	        case LarkParser.REGEXP:
	        case LarkParser.NL:
	        	break;
	        default:
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



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, LarkParser.RULE_atom);
	    try {
	        this.state = 176;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LarkParser.LP:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 167;
	            this.match(LarkParser.LP);
	            this.state = 168;
	            this.expansions();
	            this.state = 169;
	            this.match(LarkParser.RP);
	            break;
	        case LarkParser.LB:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 171;
	            this.match(LarkParser.LB);
	            this.state = 172;
	            this.expansions();
	            this.state = 173;
	            this.match(LarkParser.RB);
	            break;
	        case LarkParser.RULE:
	        case LarkParser.TOKEN:
	        case LarkParser.STRING:
	        case LarkParser.REGEXP:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 175;
	            this.value();
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
	    this.enterRule(localctx, 30, LarkParser.RULE_value);
	    var _la = 0; // Token type
	    try {
	        this.state = 195;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 178;
	            this.match(LarkParser.STRING);
	            this.state = 179;
	            this.match(LarkParser.DD);
	            this.state = 180;
	            this.match(LarkParser.STRING);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 181;
	            this.name();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 182;
	            _la = this._input.LA(1);
	            if(!(_la===LarkParser.STRING || _la===LarkParser.REGEXP)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 183;
	            this.name();
	            this.state = 184;
	            this.match(LarkParser.LC);
	            this.state = 185;
	            this.value();
	            this.state = 190;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===LarkParser.COMMA) {
	                this.state = 186;
	                this.match(LarkParser.COMMA);
	                this.state = 187;
	                this.value();
	                this.state = 192;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 193;
	            this.match(LarkParser.RC);
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



	name() {
	    let localctx = new NameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, LarkParser.RULE_name);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 197;
	        _la = this._input.LA(1);
	        if(!(_la===LarkParser.RULE || _la===LarkParser.TOKEN)) {
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

LarkParser.EOF = antlr4.Token.EOF;
LarkParser.COLON = 1;
LarkParser.LC = 2;
LarkParser.RC = 3;
LarkParser.LP = 4;
LarkParser.RP = 5;
LarkParser.LB = 6;
LarkParser.RB = 7;
LarkParser.COMMA = 8;
LarkParser.DOT = 9;
LarkParser.ARROW = 10;
LarkParser.IGNORE = 11;
LarkParser.IMPORT = 12;
LarkParser.OVERRIDE = 13;
LarkParser.DECLARE = 14;
LarkParser.DD = 15;
LarkParser.SQ = 16;
LarkParser.VBAR = 17;
LarkParser.OP = 18;
LarkParser.RULE = 19;
LarkParser.TOKEN = 20;
LarkParser.STRING = 21;
LarkParser.REGEXP = 22;
LarkParser.NL = 23;
LarkParser.NUMBER = 24;
LarkParser.WS_INLINE = 25;
LarkParser.COMMENT = 26;

LarkParser.RULE_start = 0;
LarkParser.RULE_item = 1;
LarkParser.RULE_rule_ = 2;
LarkParser.RULE_token = 3;
LarkParser.RULE_rule_params = 4;
LarkParser.RULE_token_params = 5;
LarkParser.RULE_priority = 6;
LarkParser.RULE_statement = 7;
LarkParser.RULE_import_path = 8;
LarkParser.RULE_name_list = 9;
LarkParser.RULE_expansions = 10;
LarkParser.RULE_alias = 11;
LarkParser.RULE_expansion = 12;
LarkParser.RULE_expr = 13;
LarkParser.RULE_atom = 14;
LarkParser.RULE_value = 15;
LarkParser.RULE_name = 16;

class StartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LarkParser.RULE_start;
    }

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LarkParser.NL);
	    } else {
	        return this.getToken(LarkParser.NL, i);
	    }
	};


	item = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ItemContext);
	    } else {
	        return this.getTypedRuleContext(ItemContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LarkParserListener ) {
	        listener.enterStart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LarkParserListener ) {
	        listener.exitStart(this);
		}
	}


}



class ItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LarkParser.RULE_item;
    }

	rule_() {
	    return this.getTypedRuleContext(Rule_Context,0);
	};

	token() {
	    return this.getTypedRuleContext(TokenContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LarkParserListener ) {
	        listener.enterItem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LarkParserListener ) {
	        listener.exitItem(this);
		}
	}


}



class Rule_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LarkParser.RULE_rule_;
    }

	RULE() {
	    return this.getToken(LarkParser.RULE, 0);
	};

	rule_params() {
	    return this.getTypedRuleContext(Rule_paramsContext,0);
	};

	COLON() {
	    return this.getToken(LarkParser.COLON, 0);
	};

	expansions() {
	    return this.getTypedRuleContext(ExpansionsContext,0);
	};

	priority() {
	    return this.getTypedRuleContext(PriorityContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LarkParserListener ) {
	        listener.enterRule_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LarkParserListener ) {
	        listener.exitRule_(this);
		}
	}


}



class TokenContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LarkParser.RULE_token;
    }

	TOKEN() {
	    return this.getToken(LarkParser.TOKEN, 0);
	};

	token_params() {
	    return this.getTypedRuleContext(Token_paramsContext,0);
	};

	COLON() {
	    return this.getToken(LarkParser.COLON, 0);
	};

	expansions() {
	    return this.getTypedRuleContext(ExpansionsContext,0);
	};

	priority() {
	    return this.getTypedRuleContext(PriorityContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LarkParserListener ) {
	        listener.enterToken(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LarkParserListener ) {
	        listener.exitToken(this);
		}
	}


}



class Rule_paramsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LarkParser.RULE_rule_params;
    }

	LC() {
	    return this.getToken(LarkParser.LC, 0);
	};

	RULE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LarkParser.RULE);
	    } else {
	        return this.getToken(LarkParser.RULE, i);
	    }
	};


	RC() {
	    return this.getToken(LarkParser.RC, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LarkParser.COMMA);
	    } else {
	        return this.getToken(LarkParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LarkParserListener ) {
	        listener.enterRule_params(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LarkParserListener ) {
	        listener.exitRule_params(this);
		}
	}


}



class Token_paramsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LarkParser.RULE_token_params;
    }

	LC() {
	    return this.getToken(LarkParser.LC, 0);
	};

	TOKEN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LarkParser.TOKEN);
	    } else {
	        return this.getToken(LarkParser.TOKEN, i);
	    }
	};


	RC() {
	    return this.getToken(LarkParser.RC, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LarkParser.COMMA);
	    } else {
	        return this.getToken(LarkParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LarkParserListener ) {
	        listener.enterToken_params(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LarkParserListener ) {
	        listener.exitToken_params(this);
		}
	}


}



class PriorityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LarkParser.RULE_priority;
    }

	DOT() {
	    return this.getToken(LarkParser.DOT, 0);
	};

	NUMBER() {
	    return this.getToken(LarkParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LarkParserListener ) {
	        listener.enterPriority(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LarkParserListener ) {
	        listener.exitPriority(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LarkParser.RULE_statement;
    }

	IGNORE() {
	    return this.getToken(LarkParser.IGNORE, 0);
	};

	expansions() {
	    return this.getTypedRuleContext(ExpansionsContext,0);
	};

	IMPORT() {
	    return this.getToken(LarkParser.IMPORT, 0);
	};

	import_path() {
	    return this.getTypedRuleContext(Import_pathContext,0);
	};

	ARROW() {
	    return this.getToken(LarkParser.ARROW, 0);
	};

	name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NameContext);
	    } else {
	        return this.getTypedRuleContext(NameContext,i);
	    }
	};

	name_list() {
	    return this.getTypedRuleContext(Name_listContext,0);
	};

	OVERRIDE() {
	    return this.getToken(LarkParser.OVERRIDE, 0);
	};

	rule_() {
	    return this.getTypedRuleContext(Rule_Context,0);
	};

	DECLARE() {
	    return this.getToken(LarkParser.DECLARE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LarkParserListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LarkParserListener ) {
	        listener.exitStatement(this);
		}
	}


}



class Import_pathContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LarkParser.RULE_import_path;
    }

	name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NameContext);
	    } else {
	        return this.getTypedRuleContext(NameContext,i);
	    }
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LarkParser.DOT);
	    } else {
	        return this.getToken(LarkParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LarkParserListener ) {
	        listener.enterImport_path(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LarkParserListener ) {
	        listener.exitImport_path(this);
		}
	}


}



class Name_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LarkParser.RULE_name_list;
    }

	LP() {
	    return this.getToken(LarkParser.LP, 0);
	};

	name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NameContext);
	    } else {
	        return this.getTypedRuleContext(NameContext,i);
	    }
	};

	RP() {
	    return this.getToken(LarkParser.RP, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LarkParser.COMMA);
	    } else {
	        return this.getToken(LarkParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LarkParserListener ) {
	        listener.enterName_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LarkParserListener ) {
	        listener.exitName_list(this);
		}
	}


}



class ExpansionsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LarkParser.RULE_expansions;
    }

	alias = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AliasContext);
	    } else {
	        return this.getTypedRuleContext(AliasContext,i);
	    }
	};

	VBAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LarkParser.VBAR);
	    } else {
	        return this.getToken(LarkParser.VBAR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LarkParserListener ) {
	        listener.enterExpansions(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LarkParserListener ) {
	        listener.exitExpansions(this);
		}
	}


}



class AliasContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LarkParser.RULE_alias;
    }

	expansion() {
	    return this.getTypedRuleContext(ExpansionContext,0);
	};

	ARROW() {
	    return this.getToken(LarkParser.ARROW, 0);
	};

	RULE() {
	    return this.getToken(LarkParser.RULE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LarkParserListener ) {
	        listener.enterAlias(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LarkParserListener ) {
	        listener.exitAlias(this);
		}
	}


}



class ExpansionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LarkParser.RULE_expansion;
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LarkParserListener ) {
	        listener.enterExpansion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LarkParserListener ) {
	        listener.exitExpansion(this);
		}
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LarkParser.RULE_expr;
    }

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	OP() {
	    return this.getToken(LarkParser.OP, 0);
	};

	SQ() {
	    return this.getToken(LarkParser.SQ, 0);
	};

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LarkParser.NUMBER);
	    } else {
	        return this.getToken(LarkParser.NUMBER, i);
	    }
	};


	DD() {
	    return this.getToken(LarkParser.DD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LarkParserListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LarkParserListener ) {
	        listener.exitExpr(this);
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
        this.ruleIndex = LarkParser.RULE_atom;
    }

	LP() {
	    return this.getToken(LarkParser.LP, 0);
	};

	expansions() {
	    return this.getTypedRuleContext(ExpansionsContext,0);
	};

	RP() {
	    return this.getToken(LarkParser.RP, 0);
	};

	LB() {
	    return this.getToken(LarkParser.LB, 0);
	};

	RB() {
	    return this.getToken(LarkParser.RB, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LarkParserListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LarkParserListener ) {
	        listener.exitAtom(this);
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
        this.ruleIndex = LarkParser.RULE_value;
    }

	STRING = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LarkParser.STRING);
	    } else {
	        return this.getToken(LarkParser.STRING, i);
	    }
	};


	DD() {
	    return this.getToken(LarkParser.DD, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	REGEXP() {
	    return this.getToken(LarkParser.REGEXP, 0);
	};

	LC() {
	    return this.getToken(LarkParser.LC, 0);
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

	RC() {
	    return this.getToken(LarkParser.RC, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LarkParser.COMMA);
	    } else {
	        return this.getToken(LarkParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LarkParserListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LarkParserListener ) {
	        listener.exitValue(this);
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
        this.ruleIndex = LarkParser.RULE_name;
    }

	RULE() {
	    return this.getToken(LarkParser.RULE, 0);
	};

	TOKEN() {
	    return this.getToken(LarkParser.TOKEN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LarkParserListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LarkParserListener ) {
	        listener.exitName(this);
		}
	}


}




LarkParser.StartContext = StartContext; 
LarkParser.ItemContext = ItemContext; 
LarkParser.Rule_Context = Rule_Context; 
LarkParser.TokenContext = TokenContext; 
LarkParser.Rule_paramsContext = Rule_paramsContext; 
LarkParser.Token_paramsContext = Token_paramsContext; 
LarkParser.PriorityContext = PriorityContext; 
LarkParser.StatementContext = StatementContext; 
LarkParser.Import_pathContext = Import_pathContext; 
LarkParser.Name_listContext = Name_listContext; 
LarkParser.ExpansionsContext = ExpansionsContext; 
LarkParser.AliasContext = AliasContext; 
LarkParser.ExpansionContext = ExpansionContext; 
LarkParser.ExprContext = ExprContext; 
LarkParser.AtomContext = AtomContext; 
LarkParser.ValueContext = ValueContext; 
LarkParser.NameContext = NameContext; 
