// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/pegen/pegen_v3_10Parser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import pegen_v3_10ParserListener from './pegen_v3_10ParserListener.js';
const serializedATN = [4,1,61,245,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,1,0,1,0,1,0,1,
1,3,1,57,8,1,1,1,1,1,1,2,4,2,62,8,2,11,2,12,2,63,1,3,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,80,8,3,1,4,4,4,83,8,4,11,4,12,4,84,1,
5,1,5,3,5,89,8,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,100,8,5,1,5,1,5,
1,5,1,5,1,5,1,5,1,5,1,5,3,5,110,8,5,1,5,1,5,1,5,1,5,3,5,116,8,5,1,6,1,6,
3,6,120,8,6,1,7,1,7,1,7,3,7,125,8,7,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,
5,9,136,8,9,10,9,12,9,139,9,9,1,10,1,10,1,10,1,10,4,10,145,8,10,11,10,12,
10,146,1,11,1,11,1,11,3,11,152,8,11,1,11,1,11,3,11,156,8,11,3,11,158,8,11,
1,12,4,12,161,8,12,11,12,12,12,162,1,13,3,13,166,8,13,1,13,1,13,1,13,3,13,
171,8,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,
1,14,1,14,1,14,3,14,189,8,14,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,
3,16,200,8,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,
1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,221,8,17,1,18,1,18,1,18,1,18,1,18,
1,18,3,18,229,8,18,1,19,1,19,1,20,1,20,1,21,1,21,1,22,1,22,1,23,1,23,1,24,
1,24,1,25,1,25,1,25,0,0,26,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,
34,36,38,40,42,44,46,48,50,0,0,250,0,52,1,0,0,0,2,56,1,0,0,0,4,61,1,0,0,
0,6,79,1,0,0,0,8,82,1,0,0,0,10,115,1,0,0,0,12,117,1,0,0,0,14,121,1,0,0,0,
16,128,1,0,0,0,18,132,1,0,0,0,20,144,1,0,0,0,22,157,1,0,0,0,24,160,1,0,0,
0,26,170,1,0,0,0,28,188,1,0,0,0,30,190,1,0,0,0,32,199,1,0,0,0,34,220,1,0,
0,0,36,228,1,0,0,0,38,230,1,0,0,0,40,232,1,0,0,0,42,234,1,0,0,0,44,236,1,
0,0,0,46,238,1,0,0,0,48,240,1,0,0,0,50,242,1,0,0,0,52,53,3,2,1,0,53,54,5,
0,0,1,54,1,1,0,0,0,55,57,3,4,2,0,56,55,1,0,0,0,56,57,1,0,0,0,57,58,1,0,0,
0,58,59,3,8,4,0,59,3,1,0,0,0,60,62,3,6,3,0,61,60,1,0,0,0,62,63,1,0,0,0,63,
61,1,0,0,0,63,64,1,0,0,0,64,5,1,0,0,0,65,66,5,48,0,0,66,67,3,40,20,0,67,
68,3,44,22,0,68,80,1,0,0,0,69,70,5,48,0,0,70,71,3,40,20,0,71,72,3,40,20,
0,72,73,3,44,22,0,73,80,1,0,0,0,74,75,5,48,0,0,75,76,3,40,20,0,76,77,3,42,
21,0,77,78,3,44,22,0,78,80,1,0,0,0,79,65,1,0,0,0,79,69,1,0,0,0,79,74,1,0,
0,0,80,7,1,0,0,0,81,83,3,10,5,0,82,81,1,0,0,0,83,84,1,0,0,0,84,82,1,0,0,
0,84,85,1,0,0,0,85,9,1,0,0,0,86,88,3,12,6,0,87,89,3,16,8,0,88,87,1,0,0,0,
88,89,1,0,0,0,89,90,1,0,0,0,90,91,5,11,0,0,91,92,3,18,9,0,92,93,3,44,22,
0,93,94,3,46,23,0,94,95,3,20,10,0,95,96,3,48,24,0,96,116,1,0,0,0,97,99,3,
12,6,0,98,100,3,16,8,0,99,98,1,0,0,0,99,100,1,0,0,0,100,101,1,0,0,0,101,
102,5,11,0,0,102,103,3,44,22,0,103,104,3,46,23,0,104,105,3,20,10,0,105,106,
3,48,24,0,106,116,1,0,0,0,107,109,3,12,6,0,108,110,3,16,8,0,109,108,1,0,
0,0,109,110,1,0,0,0,110,111,1,0,0,0,111,112,5,11,0,0,112,113,3,18,9,0,113,
114,3,44,22,0,114,116,1,0,0,0,115,86,1,0,0,0,115,97,1,0,0,0,115,107,1,0,
0,0,116,11,1,0,0,0,117,119,3,40,20,0,118,120,3,14,7,0,119,118,1,0,0,0,119,
120,1,0,0,0,120,13,1,0,0,0,121,122,5,9,0,0,122,124,3,40,20,0,123,125,5,16,
0,0,124,123,1,0,0,0,124,125,1,0,0,0,125,126,1,0,0,0,126,127,5,10,0,0,127,
15,1,0,0,0,128,129,5,7,0,0,129,130,5,2,0,0,130,131,5,8,0,0,131,17,1,0,0,
0,132,137,3,22,11,0,133,134,5,18,0,0,134,136,3,22,11,0,135,133,1,0,0,0,136,
139,1,0,0,0,137,135,1,0,0,0,137,138,1,0,0,0,138,19,1,0,0,0,139,137,1,0,0,
0,140,141,5,18,0,0,141,142,3,18,9,0,142,143,3,44,22,0,143,145,1,0,0,0,144,
140,1,0,0,0,145,146,1,0,0,0,146,144,1,0,0,0,146,147,1,0,0,0,147,21,1,0,0,
0,148,149,3,24,12,0,149,151,5,53,0,0,150,152,3,38,19,0,151,150,1,0,0,0,151,
152,1,0,0,0,152,158,1,0,0,0,153,155,3,24,12,0,154,156,3,38,19,0,155,154,
1,0,0,0,155,156,1,0,0,0,156,158,1,0,0,0,157,148,1,0,0,0,157,153,1,0,0,0,
158,23,1,0,0,0,159,161,3,26,13,0,160,159,1,0,0,0,161,162,1,0,0,0,162,160,
1,0,0,0,162,163,1,0,0,0,163,25,1,0,0,0,164,166,3,28,14,0,165,164,1,0,0,0,
165,166,1,0,0,0,166,167,1,0,0,0,167,171,3,34,17,0,168,171,3,30,15,0,169,
171,3,32,16,0,170,165,1,0,0,0,170,168,1,0,0,0,170,169,1,0,0,0,171,27,1,0,
0,0,172,173,3,40,20,0,173,174,5,9,0,0,174,175,3,40,20,0,175,176,5,16,0,0,
176,177,5,10,0,0,177,178,5,22,0,0,178,189,1,0,0,0,179,180,3,40,20,0,180,
181,5,9,0,0,181,182,3,40,20,0,182,183,5,10,0,0,183,184,5,22,0,0,184,189,
1,0,0,0,185,186,3,40,20,0,186,187,5,22,0,0,187,189,1,0,0,0,188,172,1,0,0,
0,188,179,1,0,0,0,188,185,1,0,0,0,189,29,1,0,0,0,190,191,5,19,0,0,191,192,
5,19,0,0,192,193,3,36,18,0,193,31,1,0,0,0,194,195,5,19,0,0,195,200,3,36,
18,0,196,197,5,54,0,0,197,200,3,36,18,0,198,200,5,30,0,0,199,194,1,0,0,0,
199,196,1,0,0,0,199,198,1,0,0,0,200,33,1,0,0,0,201,202,5,9,0,0,202,203,3,
18,9,0,203,204,5,10,0,0,204,221,1,0,0,0,205,206,3,36,18,0,206,207,5,55,0,
0,207,221,1,0,0,0,208,209,3,36,18,0,209,210,5,16,0,0,210,221,1,0,0,0,211,
212,3,36,18,0,212,213,5,14,0,0,213,221,1,0,0,0,214,215,3,36,18,0,215,216,
5,23,0,0,216,217,3,36,18,0,217,218,5,14,0,0,218,221,1,0,0,0,219,221,3,36,
18,0,220,201,1,0,0,0,220,205,1,0,0,0,220,208,1,0,0,0,220,211,1,0,0,0,220,
214,1,0,0,0,220,219,1,0,0,0,221,35,1,0,0,0,222,223,5,7,0,0,223,224,3,18,
9,0,224,225,5,8,0,0,225,229,1,0,0,0,226,229,3,40,20,0,227,229,3,42,21,0,
228,222,1,0,0,0,228,226,1,0,0,0,228,227,1,0,0,0,229,37,1,0,0,0,230,231,5,
1,0,0,231,39,1,0,0,0,232,233,5,4,0,0,233,41,1,0,0,0,234,235,5,6,0,0,235,
43,1,0,0,0,236,237,1,0,0,0,237,45,1,0,0,0,238,239,1,0,0,0,239,47,1,0,0,0,
240,241,1,0,0,0,241,49,1,0,0,0,242,243,5,5,0,0,243,51,1,0,0,0,22,56,63,79,
84,88,99,109,115,119,124,137,146,151,155,157,162,165,170,188,199,220,228];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class pegen_v3_10Parser extends antlr4.Parser {

    static grammarFileName = "pegen_v3_10Parser.g4";
    static literalNames = [ null, null, "'memo'", "'op'", null, null, null, 
                            "'('", "')'", "'['", "']'", "':'", "','", "';'", 
                            "'+'", "'-'", "'*'", "'/'", "'|'", "'&'", "'<'", 
                            "'>'", "'='", "'.'", "'%'", "'}'", "'=='", "'!='", 
                            "'<='", "'>='", "'~'", "'^'", "'<<'", "'>>'", 
                            "'**'", "'+='", "'-='", "'*='", "'/='", "'%='", 
                            "'&='", "'|='", "'^='", "'<<='", "'>>='", "'**='", 
                            "'//'", "'//='", "'@'", "'@='", "'->'", "'...'", 
                            "':='", "'$'", "'!'", "'?'", null, null, "'\"'", 
                            "'''", "'{'" ];
    static symbolicNames = [ null, "ACTION", "MEMO", "OP", "NAME", "NUMBER", 
                             "STRING", "LPAR", "RPAR", "LSQB", "RSQB", "COLON", 
                             "COMMA", "SEMI", "PLUS", "MINUS", "STAR", "SLASH", 
                             "VBAR", "AMPER", "LESS", "GREATER", "EQUAL", 
                             "DOT", "PERCENT", "RBRACE", "EQEQUAL", "NOTEQUAL", 
                             "LESSEQUAL", "GREATEREQUAL", "TILDE", "CIRCUMFLEX", 
                             "LEFTSHIFT", "RIGHTSHIFT", "DOUBLESTAR", "PLUSEQUAL", 
                             "MINEQUAL", "STAREQUAL", "SLASHEQUAL", "PERCENTEQUAL", 
                             "AMPEREQUAL", "VBAREQUAL", "CIRCUMFLEXEQUAL", 
                             "LEFTSHIFTEQUAL", "RIGHTSHIFTEQUAL", "DOUBLESTAREQUAL", 
                             "DOUBLESLASH", "DOUBLESLASHEQUAL", "AT", "ATEQUAL", 
                             "RARROW", "ELLIPSIS", "COLONEQUAL", "DOLLAR", 
                             "BANG", "QUESTION", "SKIP_", "UNTERMINATED_ACTION", 
                             "STRING2", "CHAR", "LBRACE", "STRINGESC" ];
    static ruleNames = [ "start", "grammar_", "metas", "meta", "rules", 
                         "rule_", "rulename", "attribute", "memoflag", "alts", 
                         "more_alts", "alt", "items", "named_item", "attribute_name", 
                         "forced_atom", "lookahead", "item", "atom", "action", 
                         "name", "string", "newline", "indent", "dedent", 
                         "number" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = pegen_v3_10Parser.ruleNames;
        this.literalNames = pegen_v3_10Parser.literalNames;
        this.symbolicNames = pegen_v3_10Parser.symbolicNames;
    }



	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, pegen_v3_10Parser.RULE_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.grammar_();
	        this.state = 53;
	        this.match(pegen_v3_10Parser.EOF);
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



	grammar_() {
	    let localctx = new Grammar_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, pegen_v3_10Parser.RULE_grammar_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===48) {
	            this.state = 55;
	            this.metas();
	        }

	        this.state = 58;
	        this.rules();
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



	metas() {
	    let localctx = new MetasContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, pegen_v3_10Parser.RULE_metas);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 60;
	            this.meta();
	            this.state = 63; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===48);
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



	meta() {
	    let localctx = new MetaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, pegen_v3_10Parser.RULE_meta);
	    try {
	        this.state = 79;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 65;
	            this.match(pegen_v3_10Parser.AT);
	            this.state = 66;
	            this.name();
	            this.state = 67;
	            this.newline();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 69;
	            this.match(pegen_v3_10Parser.AT);
	            this.state = 70;
	            this.name();
	            this.state = 71;
	            this.name();
	            this.state = 72;
	            this.newline();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 74;
	            this.match(pegen_v3_10Parser.AT);
	            this.state = 75;
	            this.name();
	            this.state = 76;
	            this.string();
	            this.state = 77;
	            this.newline();
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



	rules() {
	    let localctx = new RulesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, pegen_v3_10Parser.RULE_rules);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 81;
	            this.rule_();
	            this.state = 84; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===4);
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
	    this.enterRule(localctx, 10, pegen_v3_10Parser.RULE_rule_);
	    var _la = 0;
	    try {
	        this.state = 115;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 86;
	            this.rulename();
	            this.state = 88;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7) {
	                this.state = 87;
	                this.memoflag();
	            }

	            this.state = 90;
	            this.match(pegen_v3_10Parser.COLON);
	            this.state = 91;
	            this.alts();
	            this.state = 92;
	            this.newline();
	            this.state = 93;
	            this.indent();
	            this.state = 94;
	            this.more_alts();
	            this.state = 95;
	            this.dedent();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 97;
	            this.rulename();
	            this.state = 99;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7) {
	                this.state = 98;
	                this.memoflag();
	            }

	            this.state = 101;
	            this.match(pegen_v3_10Parser.COLON);
	            this.state = 102;
	            this.newline();
	            this.state = 103;
	            this.indent();
	            this.state = 104;
	            this.more_alts();
	            this.state = 105;
	            this.dedent();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 107;
	            this.rulename();
	            this.state = 109;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7) {
	                this.state = 108;
	                this.memoflag();
	            }

	            this.state = 111;
	            this.match(pegen_v3_10Parser.COLON);
	            this.state = 112;
	            this.alts();
	            this.state = 113;
	            this.newline();
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



	rulename() {
	    let localctx = new RulenameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, pegen_v3_10Parser.RULE_rulename);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        this.name();
	        this.state = 119;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 118;
	            this.attribute();
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
	    this.enterRule(localctx, 14, pegen_v3_10Parser.RULE_attribute);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this.match(pegen_v3_10Parser.LSQB);
	        this.state = 122;
	        this.name();
	        this.state = 124;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 123;
	            this.match(pegen_v3_10Parser.STAR);
	        }

	        this.state = 126;
	        this.match(pegen_v3_10Parser.RSQB);
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



	memoflag() {
	    let localctx = new MemoflagContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, pegen_v3_10Parser.RULE_memoflag);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        this.match(pegen_v3_10Parser.LPAR);
	        this.state = 129;
	        this.match(pegen_v3_10Parser.MEMO);
	        this.state = 130;
	        this.match(pegen_v3_10Parser.RPAR);
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



	alts() {
	    let localctx = new AltsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, pegen_v3_10Parser.RULE_alts);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 132;
	        this.alt();
	        this.state = 137;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 133;
	                this.match(pegen_v3_10Parser.VBAR);
	                this.state = 134;
	                this.alt(); 
	            }
	            this.state = 139;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
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



	more_alts() {
	    let localctx = new More_altsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, pegen_v3_10Parser.RULE_more_alts);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 140;
	            this.match(pegen_v3_10Parser.VBAR);
	            this.state = 141;
	            this.alts();
	            this.state = 142;
	            this.newline();
	            this.state = 146; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===18);
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



	alt() {
	    let localctx = new AltContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, pegen_v3_10Parser.RULE_alt);
	    var _la = 0;
	    try {
	        this.state = 157;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 148;
	            this.items();
	            this.state = 149;
	            this.match(pegen_v3_10Parser.DOLLAR);
	            this.state = 151;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===1) {
	                this.state = 150;
	                this.action();
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 153;
	            this.items();
	            this.state = 155;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===1) {
	                this.state = 154;
	                this.action();
	            }

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



	items() {
	    let localctx = new ItemsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, pegen_v3_10Parser.RULE_items);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 159;
	        		this.named_item();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 162; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,15, this._ctx);
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



	named_item() {
	    let localctx = new Named_itemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, pegen_v3_10Parser.RULE_named_item);
	    try {
	        this.state = 170;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 165;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	            if(la_===1) {
	                this.state = 164;
	                this.attribute_name();

	            }
	            this.state = 167;
	            this.item();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 168;
	            this.forced_atom();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 169;
	            this.lookahead();
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



	attribute_name() {
	    let localctx = new Attribute_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, pegen_v3_10Parser.RULE_attribute_name);
	    try {
	        this.state = 188;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 172;
	            this.name();
	            this.state = 173;
	            this.match(pegen_v3_10Parser.LSQB);
	            this.state = 174;
	            this.name();
	            this.state = 175;
	            this.match(pegen_v3_10Parser.STAR);
	            this.state = 176;
	            this.match(pegen_v3_10Parser.RSQB);
	            this.state = 177;
	            this.match(pegen_v3_10Parser.EQUAL);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 179;
	            this.name();
	            this.state = 180;
	            this.match(pegen_v3_10Parser.LSQB);
	            this.state = 181;
	            this.name();
	            this.state = 182;
	            this.match(pegen_v3_10Parser.RSQB);
	            this.state = 183;
	            this.match(pegen_v3_10Parser.EQUAL);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 185;
	            this.name();
	            this.state = 186;
	            this.match(pegen_v3_10Parser.EQUAL);
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



	forced_atom() {
	    let localctx = new Forced_atomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, pegen_v3_10Parser.RULE_forced_atom);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 190;
	        this.match(pegen_v3_10Parser.AMPER);
	        this.state = 191;
	        this.match(pegen_v3_10Parser.AMPER);
	        this.state = 192;
	        this.atom();
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



	lookahead() {
	    let localctx = new LookaheadContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, pegen_v3_10Parser.RULE_lookahead);
	    try {
	        this.state = 199;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 194;
	            this.match(pegen_v3_10Parser.AMPER);
	            this.state = 195;
	            this.atom();
	            break;
	        case 54:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 196;
	            this.match(pegen_v3_10Parser.BANG);
	            this.state = 197;
	            this.atom();
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 198;
	            this.match(pegen_v3_10Parser.TILDE);
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



	item() {
	    let localctx = new ItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, pegen_v3_10Parser.RULE_item);
	    try {
	        this.state = 220;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 201;
	            this.match(pegen_v3_10Parser.LSQB);
	            this.state = 202;
	            this.alts();
	            this.state = 203;
	            this.match(pegen_v3_10Parser.RSQB);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 205;
	            this.atom();
	            this.state = 206;
	            this.match(pegen_v3_10Parser.QUESTION);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 208;
	            this.atom();
	            this.state = 209;
	            this.match(pegen_v3_10Parser.STAR);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 211;
	            this.atom();
	            this.state = 212;
	            this.match(pegen_v3_10Parser.PLUS);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 214;
	            this.atom();
	            this.state = 215;
	            this.match(pegen_v3_10Parser.DOT);
	            this.state = 216;
	            this.atom();
	            this.state = 217;
	            this.match(pegen_v3_10Parser.PLUS);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 219;
	            this.atom();
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
	    this.enterRule(localctx, 36, pegen_v3_10Parser.RULE_atom);
	    try {
	        this.state = 228;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 222;
	            this.match(pegen_v3_10Parser.LPAR);
	            this.state = 223;
	            this.alts();
	            this.state = 224;
	            this.match(pegen_v3_10Parser.RPAR);
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 226;
	            this.name();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 227;
	            this.string();
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



	action() {
	    let localctx = new ActionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, pegen_v3_10Parser.RULE_action);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 230;
	        this.match(pegen_v3_10Parser.ACTION);
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
	    this.enterRule(localctx, 40, pegen_v3_10Parser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 232;
	        this.match(pegen_v3_10Parser.NAME);
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
	    this.enterRule(localctx, 42, pegen_v3_10Parser.RULE_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 234;
	        this.match(pegen_v3_10Parser.STRING);
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



	newline() {
	    let localctx = new NewlineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, pegen_v3_10Parser.RULE_newline);
	    try {
	        this.enterOuterAlt(localctx, 1);

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



	indent() {
	    let localctx = new IndentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, pegen_v3_10Parser.RULE_indent);
	    try {
	        this.enterOuterAlt(localctx, 1);

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



	dedent() {
	    let localctx = new DedentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, pegen_v3_10Parser.RULE_dedent);
	    try {
	        this.enterOuterAlt(localctx, 1);

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
	    this.enterRule(localctx, 50, pegen_v3_10Parser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 242;
	        this.match(pegen_v3_10Parser.NUMBER);
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

pegen_v3_10Parser.EOF = antlr4.Token.EOF;
pegen_v3_10Parser.ACTION = 1;
pegen_v3_10Parser.MEMO = 2;
pegen_v3_10Parser.OP = 3;
pegen_v3_10Parser.NAME = 4;
pegen_v3_10Parser.NUMBER = 5;
pegen_v3_10Parser.STRING = 6;
pegen_v3_10Parser.LPAR = 7;
pegen_v3_10Parser.RPAR = 8;
pegen_v3_10Parser.LSQB = 9;
pegen_v3_10Parser.RSQB = 10;
pegen_v3_10Parser.COLON = 11;
pegen_v3_10Parser.COMMA = 12;
pegen_v3_10Parser.SEMI = 13;
pegen_v3_10Parser.PLUS = 14;
pegen_v3_10Parser.MINUS = 15;
pegen_v3_10Parser.STAR = 16;
pegen_v3_10Parser.SLASH = 17;
pegen_v3_10Parser.VBAR = 18;
pegen_v3_10Parser.AMPER = 19;
pegen_v3_10Parser.LESS = 20;
pegen_v3_10Parser.GREATER = 21;
pegen_v3_10Parser.EQUAL = 22;
pegen_v3_10Parser.DOT = 23;
pegen_v3_10Parser.PERCENT = 24;
pegen_v3_10Parser.RBRACE = 25;
pegen_v3_10Parser.EQEQUAL = 26;
pegen_v3_10Parser.NOTEQUAL = 27;
pegen_v3_10Parser.LESSEQUAL = 28;
pegen_v3_10Parser.GREATEREQUAL = 29;
pegen_v3_10Parser.TILDE = 30;
pegen_v3_10Parser.CIRCUMFLEX = 31;
pegen_v3_10Parser.LEFTSHIFT = 32;
pegen_v3_10Parser.RIGHTSHIFT = 33;
pegen_v3_10Parser.DOUBLESTAR = 34;
pegen_v3_10Parser.PLUSEQUAL = 35;
pegen_v3_10Parser.MINEQUAL = 36;
pegen_v3_10Parser.STAREQUAL = 37;
pegen_v3_10Parser.SLASHEQUAL = 38;
pegen_v3_10Parser.PERCENTEQUAL = 39;
pegen_v3_10Parser.AMPEREQUAL = 40;
pegen_v3_10Parser.VBAREQUAL = 41;
pegen_v3_10Parser.CIRCUMFLEXEQUAL = 42;
pegen_v3_10Parser.LEFTSHIFTEQUAL = 43;
pegen_v3_10Parser.RIGHTSHIFTEQUAL = 44;
pegen_v3_10Parser.DOUBLESTAREQUAL = 45;
pegen_v3_10Parser.DOUBLESLASH = 46;
pegen_v3_10Parser.DOUBLESLASHEQUAL = 47;
pegen_v3_10Parser.AT = 48;
pegen_v3_10Parser.ATEQUAL = 49;
pegen_v3_10Parser.RARROW = 50;
pegen_v3_10Parser.ELLIPSIS = 51;
pegen_v3_10Parser.COLONEQUAL = 52;
pegen_v3_10Parser.DOLLAR = 53;
pegen_v3_10Parser.BANG = 54;
pegen_v3_10Parser.QUESTION = 55;
pegen_v3_10Parser.SKIP_ = 56;
pegen_v3_10Parser.UNTERMINATED_ACTION = 57;
pegen_v3_10Parser.STRING2 = 58;
pegen_v3_10Parser.CHAR = 59;
pegen_v3_10Parser.LBRACE = 60;
pegen_v3_10Parser.STRINGESC = 61;

pegen_v3_10Parser.RULE_start = 0;
pegen_v3_10Parser.RULE_grammar_ = 1;
pegen_v3_10Parser.RULE_metas = 2;
pegen_v3_10Parser.RULE_meta = 3;
pegen_v3_10Parser.RULE_rules = 4;
pegen_v3_10Parser.RULE_rule_ = 5;
pegen_v3_10Parser.RULE_rulename = 6;
pegen_v3_10Parser.RULE_attribute = 7;
pegen_v3_10Parser.RULE_memoflag = 8;
pegen_v3_10Parser.RULE_alts = 9;
pegen_v3_10Parser.RULE_more_alts = 10;
pegen_v3_10Parser.RULE_alt = 11;
pegen_v3_10Parser.RULE_items = 12;
pegen_v3_10Parser.RULE_named_item = 13;
pegen_v3_10Parser.RULE_attribute_name = 14;
pegen_v3_10Parser.RULE_forced_atom = 15;
pegen_v3_10Parser.RULE_lookahead = 16;
pegen_v3_10Parser.RULE_item = 17;
pegen_v3_10Parser.RULE_atom = 18;
pegen_v3_10Parser.RULE_action = 19;
pegen_v3_10Parser.RULE_name = 20;
pegen_v3_10Parser.RULE_string = 21;
pegen_v3_10Parser.RULE_newline = 22;
pegen_v3_10Parser.RULE_indent = 23;
pegen_v3_10Parser.RULE_dedent = 24;
pegen_v3_10Parser.RULE_number = 25;

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
        this.ruleIndex = pegen_v3_10Parser.RULE_start;
    }

	grammar_() {
	    return this.getTypedRuleContext(Grammar_Context,0);
	};

	EOF() {
	    return this.getToken(pegen_v3_10Parser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.enterStart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.exitStart(this);
		}
	}


}



class Grammar_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pegen_v3_10Parser.RULE_grammar_;
    }

	rules() {
	    return this.getTypedRuleContext(RulesContext,0);
	};

	metas() {
	    return this.getTypedRuleContext(MetasContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.enterGrammar_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.exitGrammar_(this);
		}
	}


}



class MetasContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pegen_v3_10Parser.RULE_metas;
    }

	meta = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MetaContext);
	    } else {
	        return this.getTypedRuleContext(MetaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.enterMetas(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.exitMetas(this);
		}
	}


}



class MetaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pegen_v3_10Parser.RULE_meta;
    }

	AT() {
	    return this.getToken(pegen_v3_10Parser.AT, 0);
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

	newline() {
	    return this.getTypedRuleContext(NewlineContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.enterMeta(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.exitMeta(this);
		}
	}


}



class RulesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pegen_v3_10Parser.RULE_rules;
    }

	rule_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Rule_Context);
	    } else {
	        return this.getTypedRuleContext(Rule_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.enterRules(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.exitRules(this);
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
        this.ruleIndex = pegen_v3_10Parser.RULE_rule_;
    }

	rulename() {
	    return this.getTypedRuleContext(RulenameContext,0);
	};

	COLON() {
	    return this.getToken(pegen_v3_10Parser.COLON, 0);
	};

	alts() {
	    return this.getTypedRuleContext(AltsContext,0);
	};

	newline() {
	    return this.getTypedRuleContext(NewlineContext,0);
	};

	indent() {
	    return this.getTypedRuleContext(IndentContext,0);
	};

	more_alts() {
	    return this.getTypedRuleContext(More_altsContext,0);
	};

	dedent() {
	    return this.getTypedRuleContext(DedentContext,0);
	};

	memoflag() {
	    return this.getTypedRuleContext(MemoflagContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.enterRule_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.exitRule_(this);
		}
	}


}



class RulenameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pegen_v3_10Parser.RULE_rulename;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	attribute() {
	    return this.getTypedRuleContext(AttributeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.enterRulename(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.exitRulename(this);
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
        this.ruleIndex = pegen_v3_10Parser.RULE_attribute;
    }

	LSQB() {
	    return this.getToken(pegen_v3_10Parser.LSQB, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	RSQB() {
	    return this.getToken(pegen_v3_10Parser.RSQB, 0);
	};

	STAR() {
	    return this.getToken(pegen_v3_10Parser.STAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.enterAttribute(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.exitAttribute(this);
		}
	}


}



class MemoflagContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pegen_v3_10Parser.RULE_memoflag;
    }

	LPAR() {
	    return this.getToken(pegen_v3_10Parser.LPAR, 0);
	};

	MEMO() {
	    return this.getToken(pegen_v3_10Parser.MEMO, 0);
	};

	RPAR() {
	    return this.getToken(pegen_v3_10Parser.RPAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.enterMemoflag(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.exitMemoflag(this);
		}
	}


}



class AltsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pegen_v3_10Parser.RULE_alts;
    }

	alt = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AltContext);
	    } else {
	        return this.getTypedRuleContext(AltContext,i);
	    }
	};

	VBAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pegen_v3_10Parser.VBAR);
	    } else {
	        return this.getToken(pegen_v3_10Parser.VBAR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.enterAlts(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.exitAlts(this);
		}
	}


}



class More_altsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pegen_v3_10Parser.RULE_more_alts;
    }

	VBAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pegen_v3_10Parser.VBAR);
	    } else {
	        return this.getToken(pegen_v3_10Parser.VBAR, i);
	    }
	};


	alts = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AltsContext);
	    } else {
	        return this.getTypedRuleContext(AltsContext,i);
	    }
	};

	newline = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NewlineContext);
	    } else {
	        return this.getTypedRuleContext(NewlineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.enterMore_alts(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.exitMore_alts(this);
		}
	}


}



class AltContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pegen_v3_10Parser.RULE_alt;
    }

	items() {
	    return this.getTypedRuleContext(ItemsContext,0);
	};

	DOLLAR() {
	    return this.getToken(pegen_v3_10Parser.DOLLAR, 0);
	};

	action() {
	    return this.getTypedRuleContext(ActionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.enterAlt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.exitAlt(this);
		}
	}


}



class ItemsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pegen_v3_10Parser.RULE_items;
    }

	named_item = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Named_itemContext);
	    } else {
	        return this.getTypedRuleContext(Named_itemContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.enterItems(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.exitItems(this);
		}
	}


}



class Named_itemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pegen_v3_10Parser.RULE_named_item;
    }

	item() {
	    return this.getTypedRuleContext(ItemContext,0);
	};

	attribute_name() {
	    return this.getTypedRuleContext(Attribute_nameContext,0);
	};

	forced_atom() {
	    return this.getTypedRuleContext(Forced_atomContext,0);
	};

	lookahead() {
	    return this.getTypedRuleContext(LookaheadContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.enterNamed_item(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.exitNamed_item(this);
		}
	}


}



class Attribute_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pegen_v3_10Parser.RULE_attribute_name;
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

	LSQB() {
	    return this.getToken(pegen_v3_10Parser.LSQB, 0);
	};

	STAR() {
	    return this.getToken(pegen_v3_10Parser.STAR, 0);
	};

	RSQB() {
	    return this.getToken(pegen_v3_10Parser.RSQB, 0);
	};

	EQUAL() {
	    return this.getToken(pegen_v3_10Parser.EQUAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.enterAttribute_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.exitAttribute_name(this);
		}
	}


}



class Forced_atomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pegen_v3_10Parser.RULE_forced_atom;
    }

	AMPER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pegen_v3_10Parser.AMPER);
	    } else {
	        return this.getToken(pegen_v3_10Parser.AMPER, i);
	    }
	};


	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.enterForced_atom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.exitForced_atom(this);
		}
	}


}



class LookaheadContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pegen_v3_10Parser.RULE_lookahead;
    }

	AMPER() {
	    return this.getToken(pegen_v3_10Parser.AMPER, 0);
	};

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	BANG() {
	    return this.getToken(pegen_v3_10Parser.BANG, 0);
	};

	TILDE() {
	    return this.getToken(pegen_v3_10Parser.TILDE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.enterLookahead(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.exitLookahead(this);
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
        this.ruleIndex = pegen_v3_10Parser.RULE_item;
    }

	LSQB() {
	    return this.getToken(pegen_v3_10Parser.LSQB, 0);
	};

	alts() {
	    return this.getTypedRuleContext(AltsContext,0);
	};

	RSQB() {
	    return this.getToken(pegen_v3_10Parser.RSQB, 0);
	};

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

	QUESTION() {
	    return this.getToken(pegen_v3_10Parser.QUESTION, 0);
	};

	STAR() {
	    return this.getToken(pegen_v3_10Parser.STAR, 0);
	};

	PLUS() {
	    return this.getToken(pegen_v3_10Parser.PLUS, 0);
	};

	DOT() {
	    return this.getToken(pegen_v3_10Parser.DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.enterItem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.exitItem(this);
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
        this.ruleIndex = pegen_v3_10Parser.RULE_atom;
    }

	LPAR() {
	    return this.getToken(pegen_v3_10Parser.LPAR, 0);
	};

	alts() {
	    return this.getTypedRuleContext(AltsContext,0);
	};

	RPAR() {
	    return this.getToken(pegen_v3_10Parser.RPAR, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.exitAtom(this);
		}
	}


}



class ActionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pegen_v3_10Parser.RULE_action;
    }

	ACTION() {
	    return this.getToken(pegen_v3_10Parser.ACTION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.enterAction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.exitAction(this);
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
        this.ruleIndex = pegen_v3_10Parser.RULE_name;
    }

	NAME() {
	    return this.getToken(pegen_v3_10Parser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.exitName(this);
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
        this.ruleIndex = pegen_v3_10Parser.RULE_string;
    }

	STRING() {
	    return this.getToken(pegen_v3_10Parser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.exitString(this);
		}
	}


}



class NewlineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pegen_v3_10Parser.RULE_newline;
    }


	enterRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.enterNewline(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.exitNewline(this);
		}
	}


}



class IndentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pegen_v3_10Parser.RULE_indent;
    }


	enterRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.enterIndent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.exitIndent(this);
		}
	}


}



class DedentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pegen_v3_10Parser.RULE_dedent;
    }


	enterRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.enterDedent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.exitDedent(this);
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
        this.ruleIndex = pegen_v3_10Parser.RULE_number;
    }

	NUMBER() {
	    return this.getToken(pegen_v3_10Parser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pegen_v3_10ParserListener ) {
	        listener.exitNumber(this);
		}
	}


}




pegen_v3_10Parser.StartContext = StartContext; 
pegen_v3_10Parser.Grammar_Context = Grammar_Context; 
pegen_v3_10Parser.MetasContext = MetasContext; 
pegen_v3_10Parser.MetaContext = MetaContext; 
pegen_v3_10Parser.RulesContext = RulesContext; 
pegen_v3_10Parser.Rule_Context = Rule_Context; 
pegen_v3_10Parser.RulenameContext = RulenameContext; 
pegen_v3_10Parser.AttributeContext = AttributeContext; 
pegen_v3_10Parser.MemoflagContext = MemoflagContext; 
pegen_v3_10Parser.AltsContext = AltsContext; 
pegen_v3_10Parser.More_altsContext = More_altsContext; 
pegen_v3_10Parser.AltContext = AltContext; 
pegen_v3_10Parser.ItemsContext = ItemsContext; 
pegen_v3_10Parser.Named_itemContext = Named_itemContext; 
pegen_v3_10Parser.Attribute_nameContext = Attribute_nameContext; 
pegen_v3_10Parser.Forced_atomContext = Forced_atomContext; 
pegen_v3_10Parser.LookaheadContext = LookaheadContext; 
pegen_v3_10Parser.ItemContext = ItemContext; 
pegen_v3_10Parser.AtomContext = AtomContext; 
pegen_v3_10Parser.ActionContext = ActionContext; 
pegen_v3_10Parser.NameContext = NameContext; 
pegen_v3_10Parser.StringContext = StringContext; 
pegen_v3_10Parser.NewlineContext = NewlineContext; 
pegen_v3_10Parser.IndentContext = IndentContext; 
pegen_v3_10Parser.DedentContext = DedentContext; 
pegen_v3_10Parser.NumberContext = NumberContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
