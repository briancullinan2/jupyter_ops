// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/lark/LarkParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LarkParserListener from './LarkParserListener.js';
const serializedATN = [4,1,26,196,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,5,0,36,8,0,10,0,12,0,39,9,0,
1,0,1,0,1,1,1,1,1,1,3,1,46,8,1,1,2,1,2,1,2,3,2,51,8,2,1,2,1,2,1,2,1,3,1,
3,1,3,3,3,59,8,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,5,4,68,8,4,10,4,12,4,71,9,4,
1,4,3,4,74,8,4,1,5,1,5,1,5,1,5,5,5,80,8,5,10,5,12,5,83,9,5,1,5,3,5,86,8,
5,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,3,7,97,8,7,1,7,1,7,1,7,1,7,1,7,1,7,
1,7,1,7,4,7,107,8,7,11,7,12,7,108,3,7,111,8,7,1,8,3,8,114,8,8,1,8,1,8,1,
8,5,8,119,8,8,10,8,12,8,122,9,8,1,9,1,9,1,9,1,9,5,9,128,8,9,10,9,12,9,131,
9,9,1,9,1,9,1,10,1,10,1,10,5,10,138,8,10,10,10,12,10,141,9,10,1,11,1,11,
1,11,3,11,146,8,11,1,12,5,12,149,8,12,10,12,12,12,152,9,12,1,13,1,13,1,13,
1,13,1,13,1,13,3,13,160,8,13,3,13,162,8,13,1,14,1,14,1,14,1,14,1,14,1,14,
1,14,1,14,1,14,3,14,173,8,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
1,15,5,15,185,8,15,10,15,12,15,188,9,15,1,15,1,15,3,15,192,8,15,1,16,1,16,
1,16,0,0,17,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,0,2,1,0,21,22,
1,0,19,20,208,0,37,1,0,0,0,2,45,1,0,0,0,4,47,1,0,0,0,6,55,1,0,0,0,8,73,1,
0,0,0,10,85,1,0,0,0,12,87,1,0,0,0,14,110,1,0,0,0,16,113,1,0,0,0,18,123,1,
0,0,0,20,134,1,0,0,0,22,142,1,0,0,0,24,150,1,0,0,0,26,153,1,0,0,0,28,172,
1,0,0,0,30,191,1,0,0,0,32,193,1,0,0,0,34,36,3,2,1,0,35,34,1,0,0,0,36,39,
1,0,0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,40,1,0,0,0,39,37,1,0,0,0,40,41,5,
0,0,1,41,1,1,0,0,0,42,46,3,4,2,0,43,46,3,6,3,0,44,46,3,14,7,0,45,42,1,0,
0,0,45,43,1,0,0,0,45,44,1,0,0,0,46,3,1,0,0,0,47,48,5,19,0,0,48,50,3,8,4,
0,49,51,3,12,6,0,50,49,1,0,0,0,50,51,1,0,0,0,51,52,1,0,0,0,52,53,5,1,0,0,
53,54,3,20,10,0,54,5,1,0,0,0,55,56,5,20,0,0,56,58,3,10,5,0,57,59,3,12,6,
0,58,57,1,0,0,0,58,59,1,0,0,0,59,60,1,0,0,0,60,61,5,1,0,0,61,62,3,20,10,
0,62,7,1,0,0,0,63,64,5,2,0,0,64,69,5,19,0,0,65,66,5,8,0,0,66,68,5,19,0,0,
67,65,1,0,0,0,68,71,1,0,0,0,69,67,1,0,0,0,69,70,1,0,0,0,70,72,1,0,0,0,71,
69,1,0,0,0,72,74,5,3,0,0,73,63,1,0,0,0,73,74,1,0,0,0,74,9,1,0,0,0,75,76,
5,2,0,0,76,81,5,20,0,0,77,78,5,8,0,0,78,80,5,20,0,0,79,77,1,0,0,0,80,83,
1,0,0,0,81,79,1,0,0,0,81,82,1,0,0,0,82,84,1,0,0,0,83,81,1,0,0,0,84,86,5,
3,0,0,85,75,1,0,0,0,85,86,1,0,0,0,86,11,1,0,0,0,87,88,5,9,0,0,88,89,5,24,
0,0,89,13,1,0,0,0,90,91,5,11,0,0,91,111,3,20,10,0,92,93,5,12,0,0,93,96,3,
16,8,0,94,95,5,10,0,0,95,97,3,32,16,0,96,94,1,0,0,0,96,97,1,0,0,0,97,111,
1,0,0,0,98,99,5,12,0,0,99,100,3,16,8,0,100,101,3,18,9,0,101,111,1,0,0,0,
102,103,5,13,0,0,103,111,3,4,2,0,104,106,5,14,0,0,105,107,3,32,16,0,106,
105,1,0,0,0,107,108,1,0,0,0,108,106,1,0,0,0,108,109,1,0,0,0,109,111,1,0,
0,0,110,90,1,0,0,0,110,92,1,0,0,0,110,98,1,0,0,0,110,102,1,0,0,0,110,104,
1,0,0,0,111,15,1,0,0,0,112,114,5,9,0,0,113,112,1,0,0,0,113,114,1,0,0,0,114,
115,1,0,0,0,115,120,3,32,16,0,116,117,5,9,0,0,117,119,3,32,16,0,118,116,
1,0,0,0,119,122,1,0,0,0,120,118,1,0,0,0,120,121,1,0,0,0,121,17,1,0,0,0,122,
120,1,0,0,0,123,124,5,4,0,0,124,129,3,32,16,0,125,126,5,8,0,0,126,128,3,
32,16,0,127,125,1,0,0,0,128,131,1,0,0,0,129,127,1,0,0,0,129,130,1,0,0,0,
130,132,1,0,0,0,131,129,1,0,0,0,132,133,5,5,0,0,133,19,1,0,0,0,134,139,3,
22,11,0,135,136,5,17,0,0,136,138,3,22,11,0,137,135,1,0,0,0,138,141,1,0,0,
0,139,137,1,0,0,0,139,140,1,0,0,0,140,21,1,0,0,0,141,139,1,0,0,0,142,145,
3,24,12,0,143,144,5,10,0,0,144,146,5,19,0,0,145,143,1,0,0,0,145,146,1,0,
0,0,146,23,1,0,0,0,147,149,3,26,13,0,148,147,1,0,0,0,149,152,1,0,0,0,150,
148,1,0,0,0,150,151,1,0,0,0,151,25,1,0,0,0,152,150,1,0,0,0,153,161,3,28,
14,0,154,162,5,18,0,0,155,156,5,16,0,0,156,159,5,24,0,0,157,158,5,15,0,0,
158,160,5,24,0,0,159,157,1,0,0,0,159,160,1,0,0,0,160,162,1,0,0,0,161,154,
1,0,0,0,161,155,1,0,0,0,161,162,1,0,0,0,162,27,1,0,0,0,163,164,5,4,0,0,164,
165,3,20,10,0,165,166,5,5,0,0,166,173,1,0,0,0,167,168,5,6,0,0,168,169,3,
20,10,0,169,170,5,7,0,0,170,173,1,0,0,0,171,173,3,30,15,0,172,163,1,0,0,
0,172,167,1,0,0,0,172,171,1,0,0,0,173,29,1,0,0,0,174,175,5,21,0,0,175,176,
5,15,0,0,176,192,5,21,0,0,177,192,3,32,16,0,178,192,7,0,0,0,179,180,3,32,
16,0,180,181,5,2,0,0,181,186,3,30,15,0,182,183,5,8,0,0,183,185,3,30,15,0,
184,182,1,0,0,0,185,188,1,0,0,0,186,184,1,0,0,0,186,187,1,0,0,0,187,189,
1,0,0,0,188,186,1,0,0,0,189,190,5,3,0,0,190,192,1,0,0,0,191,174,1,0,0,0,
191,177,1,0,0,0,191,178,1,0,0,0,191,179,1,0,0,0,192,31,1,0,0,0,193,194,7,
1,0,0,194,33,1,0,0,0,22,37,45,50,58,69,73,81,85,96,108,110,113,120,129,139,
145,150,159,161,172,186,191];


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
    static ruleNames = [ "start_", "item", "rule_", "token", "rule_params", 
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



	start_() {
	    let localctx = new Start_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LarkParser.RULE_start_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1603584) !== 0)) {
	            this.state = 34;
	            this.item();
	            this.state = 39;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 40;
	        this.match(LarkParser.EOF);
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
	        this.state = 45;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 42;
	            this.rule_();
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 43;
	            this.token();
	            break;
	        case 11:
	        case 12:
	        case 13:
	        case 14:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 44;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.match(LarkParser.RULE);
	        this.state = 48;
	        this.rule_params();
	        this.state = 50;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 49;
	            this.priority();
	        }

	        this.state = 52;
	        this.match(LarkParser.COLON);
	        this.state = 53;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(LarkParser.TOKEN);
	        this.state = 56;
	        this.token_params();
	        this.state = 58;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 57;
	            this.priority();
	        }

	        this.state = 60;
	        this.match(LarkParser.COLON);
	        this.state = 61;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 63;
	            this.match(LarkParser.LC);
	            this.state = 64;
	            this.match(LarkParser.RULE);
	            this.state = 69;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===8) {
	                this.state = 65;
	                this.match(LarkParser.COMMA);
	                this.state = 66;
	                this.match(LarkParser.RULE);
	                this.state = 71;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 72;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 75;
	            this.match(LarkParser.LC);
	            this.state = 76;
	            this.match(LarkParser.TOKEN);
	            this.state = 81;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===8) {
	                this.state = 77;
	                this.match(LarkParser.COMMA);
	                this.state = 78;
	                this.match(LarkParser.TOKEN);
	                this.state = 83;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 84;
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
	        this.state = 87;
	        this.match(LarkParser.DOT);
	        this.state = 88;
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
	    var _la = 0;
	    try {
	        this.state = 110;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 90;
	            this.match(LarkParser.IGNORE);
	            this.state = 91;
	            this.expansions();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 92;
	            this.match(LarkParser.IMPORT);
	            this.state = 93;
	            this.import_path();
	            this.state = 96;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===10) {
	                this.state = 94;
	                this.match(LarkParser.ARROW);
	                this.state = 95;
	                this.name();
	            }

	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 98;
	            this.match(LarkParser.IMPORT);
	            this.state = 99;
	            this.import_path();
	            this.state = 100;
	            this.name_list();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 102;
	            this.match(LarkParser.OVERRIDE);
	            this.state = 103;
	            this.rule_();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 104;
	            this.match(LarkParser.DECLARE);
	            this.state = 106; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 105;
	            		this.name();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 108; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,9, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 112;
	            this.match(LarkParser.DOT);
	        }

	        this.state = 115;
	        this.name();
	        this.state = 120;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9) {
	            this.state = 116;
	            this.match(LarkParser.DOT);
	            this.state = 117;
	            this.name();
	            this.state = 122;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        this.match(LarkParser.LP);
	        this.state = 124;
	        this.name();
	        this.state = 129;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 125;
	            this.match(LarkParser.COMMA);
	            this.state = 126;
	            this.name();
	            this.state = 131;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 132;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this.alias();
	        this.state = 139;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===17) {
	            this.state = 135;
	            this.match(LarkParser.VBAR);
	            this.state = 136;
	            this.alias();
	            this.state = 141;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 142;
	        this.expansion();
	        this.state = 145;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===10) {
	            this.state = 143;
	            this.match(LarkParser.ARROW);
	            this.state = 144;
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 150;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 147;
	                this.expr(); 
	            }
	            this.state = 152;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        this.atom();
	        this.state = 161;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case 18:
	        	this.state = 154;
	        	this.match(LarkParser.OP);
	        	break;
	        case 16:
	        	this.state = 155;
	        	this.match(LarkParser.SQ);
	        	this.state = 156;
	        	this.match(LarkParser.NUMBER);
	        	this.state = 159;
	        	this._errHandler.sync(this);
	        	_la = this._input.LA(1);
	        	if(_la===15) {
	        	    this.state = 157;
	        	    this.match(LarkParser.DD);
	        	    this.state = 158;
	        	    this.match(LarkParser.NUMBER);
	        	}

	        	break;
	        case -1:
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	        case 10:
	        case 11:
	        case 12:
	        case 13:
	        case 14:
	        case 17:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
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
	        this.state = 172;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 163;
	            this.match(LarkParser.LP);
	            this.state = 164;
	            this.expansions();
	            this.state = 165;
	            this.match(LarkParser.RP);
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 167;
	            this.match(LarkParser.LB);
	            this.state = 168;
	            this.expansions();
	            this.state = 169;
	            this.match(LarkParser.RB);
	            break;
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 171;
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
	    var _la = 0;
	    try {
	        this.state = 191;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 174;
	            this.match(LarkParser.STRING);
	            this.state = 175;
	            this.match(LarkParser.DD);
	            this.state = 176;
	            this.match(LarkParser.STRING);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 177;
	            this.name();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 178;
	            _la = this._input.LA(1);
	            if(!(_la===21 || _la===22)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 179;
	            this.name();
	            this.state = 180;
	            this.match(LarkParser.LC);
	            this.state = 181;
	            this.value();
	            this.state = 186;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===8) {
	                this.state = 182;
	                this.match(LarkParser.COMMA);
	                this.state = 183;
	                this.value();
	                this.state = 188;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 189;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 193;
	        _la = this._input.LA(1);
	        if(!(_la===19 || _la===20)) {
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

LarkParser.RULE_start_ = 0;
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

class Start_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LarkParser.RULE_start_;
    }

	EOF() {
	    return this.getToken(LarkParser.EOF, 0);
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
	        listener.enterStart_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LarkParserListener ) {
	        listener.exitStart_(this);
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




LarkParser.Start_Context = Start_Context; 
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

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
