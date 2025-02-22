// Generated from ./rcs/RCS.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import RCSListener from './RCSListener.js';
const serializedATN = [4,1,27,219,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,1,0,1,0,1,0,1,
0,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,3,1,3,3,3,66,8,3,1,3,1,3,1,3,3,3,71,8,3,
1,3,3,3,74,8,3,1,3,3,3,77,8,3,1,3,3,3,80,8,3,1,3,5,3,83,8,3,10,3,12,3,86,
9,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,5,6,98,8,6,10,6,12,6,101,9,6,
1,6,1,6,1,7,1,7,5,7,107,8,7,10,7,12,7,110,9,7,1,7,1,7,1,8,1,8,1,8,1,8,1,
9,1,9,5,9,120,8,9,10,9,12,9,123,9,9,1,9,1,9,1,10,1,10,1,10,1,11,1,11,3,11,
132,8,11,1,11,1,11,1,12,1,12,3,12,138,8,12,1,12,1,12,1,13,5,13,143,8,13,
10,13,12,13,146,9,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,5,14,155,8,14,10,
14,12,14,158,9,14,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,17,1,17,1,17,
1,17,1,18,1,18,5,18,174,8,18,10,18,12,18,177,9,18,1,18,1,18,1,19,1,19,3,
19,183,8,19,1,19,1,19,1,20,1,20,1,20,1,21,5,21,191,8,21,10,21,12,21,194,
9,21,1,22,1,22,1,22,5,22,199,8,22,10,22,12,22,202,9,22,1,22,1,22,1,23,1,
23,1,23,1,24,1,24,1,24,1,25,4,25,213,8,25,11,25,12,25,214,1,25,1,25,1,25,
0,0,26,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,
48,50,0,0,210,0,52,1,0,0,0,2,58,1,0,0,0,4,60,1,0,0,0,6,63,1,0,0,0,8,87,1,
0,0,0,10,91,1,0,0,0,12,95,1,0,0,0,14,104,1,0,0,0,16,113,1,0,0,0,18,117,1,
0,0,0,20,126,1,0,0,0,22,129,1,0,0,0,24,135,1,0,0,0,26,144,1,0,0,0,28,147,
1,0,0,0,30,159,1,0,0,0,32,163,1,0,0,0,34,167,1,0,0,0,36,171,1,0,0,0,38,180,
1,0,0,0,40,186,1,0,0,0,42,192,1,0,0,0,44,195,1,0,0,0,46,205,1,0,0,0,48,208,
1,0,0,0,50,212,1,0,0,0,52,53,3,6,3,0,53,54,3,26,13,0,54,55,3,40,20,0,55,
56,3,42,21,0,56,57,5,0,0,1,57,1,1,0,0,0,58,59,3,6,3,0,59,3,1,0,0,0,60,61,
3,6,3,0,61,62,3,26,13,0,62,5,1,0,0,0,63,65,3,8,4,0,64,66,3,10,5,0,65,64,
1,0,0,0,65,66,1,0,0,0,66,67,1,0,0,0,67,68,3,12,6,0,68,70,3,14,7,0,69,71,
3,18,9,0,70,69,1,0,0,0,70,71,1,0,0,0,71,73,1,0,0,0,72,74,3,20,10,0,73,72,
1,0,0,0,73,74,1,0,0,0,74,76,1,0,0,0,75,77,3,22,11,0,76,75,1,0,0,0,76,77,
1,0,0,0,77,79,1,0,0,0,78,80,3,24,12,0,79,78,1,0,0,0,79,80,1,0,0,0,80,84,
1,0,0,0,81,83,3,50,25,0,82,81,1,0,0,0,83,86,1,0,0,0,84,82,1,0,0,0,84,85,
1,0,0,0,85,7,1,0,0,0,86,84,1,0,0,0,87,88,5,5,0,0,88,89,5,23,0,0,89,90,5,
25,0,0,90,9,1,0,0,0,91,92,5,6,0,0,92,93,5,23,0,0,93,94,5,25,0,0,94,11,1,
0,0,0,95,99,5,7,0,0,96,98,5,21,0,0,97,96,1,0,0,0,98,101,1,0,0,0,99,97,1,
0,0,0,99,100,1,0,0,0,100,102,1,0,0,0,101,99,1,0,0,0,102,103,5,25,0,0,103,
13,1,0,0,0,104,108,5,8,0,0,105,107,3,16,8,0,106,105,1,0,0,0,107,110,1,0,
0,0,108,106,1,0,0,0,108,109,1,0,0,0,109,111,1,0,0,0,110,108,1,0,0,0,111,
112,5,25,0,0,112,15,1,0,0,0,113,114,5,21,0,0,114,115,5,26,0,0,115,116,5,
23,0,0,116,17,1,0,0,0,117,121,5,9,0,0,118,120,5,21,0,0,119,118,1,0,0,0,120,
123,1,0,0,0,121,119,1,0,0,0,121,122,1,0,0,0,122,124,1,0,0,0,123,121,1,0,
0,0,124,125,5,25,0,0,125,19,1,0,0,0,126,127,5,10,0,0,127,128,5,25,0,0,128,
21,1,0,0,0,129,131,5,11,0,0,130,132,5,24,0,0,131,130,1,0,0,0,131,132,1,0,
0,0,132,133,1,0,0,0,133,134,5,25,0,0,134,23,1,0,0,0,135,137,5,12,0,0,136,
138,5,24,0,0,137,136,1,0,0,0,137,138,1,0,0,0,138,139,1,0,0,0,139,140,5,25,
0,0,140,25,1,0,0,0,141,143,3,28,14,0,142,141,1,0,0,0,143,146,1,0,0,0,144,
142,1,0,0,0,144,145,1,0,0,0,145,27,1,0,0,0,146,144,1,0,0,0,147,148,5,23,
0,0,148,149,3,30,15,0,149,150,3,32,16,0,150,151,3,34,17,0,151,152,3,36,18,
0,152,156,3,38,19,0,153,155,3,50,25,0,154,153,1,0,0,0,155,158,1,0,0,0,156,
154,1,0,0,0,156,157,1,0,0,0,157,29,1,0,0,0,158,156,1,0,0,0,159,160,5,13,
0,0,160,161,5,23,0,0,161,162,5,25,0,0,162,31,1,0,0,0,163,164,5,14,0,0,164,
165,5,21,0,0,165,166,5,25,0,0,166,33,1,0,0,0,167,168,5,15,0,0,168,169,5,
21,0,0,169,170,5,25,0,0,170,35,1,0,0,0,171,175,5,16,0,0,172,174,5,23,0,0,
173,172,1,0,0,0,174,177,1,0,0,0,175,173,1,0,0,0,175,176,1,0,0,0,176,178,
1,0,0,0,177,175,1,0,0,0,178,179,5,25,0,0,179,37,1,0,0,0,180,182,5,17,0,0,
181,183,5,23,0,0,182,181,1,0,0,0,182,183,1,0,0,0,183,184,1,0,0,0,184,185,
5,25,0,0,185,39,1,0,0,0,186,187,5,18,0,0,187,188,5,24,0,0,188,41,1,0,0,0,
189,191,3,44,22,0,190,189,1,0,0,0,191,194,1,0,0,0,192,190,1,0,0,0,192,193,
1,0,0,0,193,43,1,0,0,0,194,192,1,0,0,0,195,196,5,23,0,0,196,200,3,46,23,
0,197,199,3,50,25,0,198,197,1,0,0,0,199,202,1,0,0,0,200,198,1,0,0,0,200,
201,1,0,0,0,201,203,1,0,0,0,202,200,1,0,0,0,203,204,3,48,24,0,204,45,1,0,
0,0,205,206,5,19,0,0,206,207,5,24,0,0,207,47,1,0,0,0,208,209,5,20,0,0,209,
210,5,24,0,0,210,49,1,0,0,0,211,213,5,21,0,0,212,211,1,0,0,0,213,214,1,0,
0,0,214,212,1,0,0,0,214,215,1,0,0,0,215,216,1,0,0,0,216,217,5,25,0,0,217,
51,1,0,0,0,18,65,70,73,76,79,84,99,108,121,131,137,144,156,175,182,192,200,
214];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class RCSParser extends antlr4.Parser {

    static grammarFileName = "RCS.g4";
    static literalNames = [ null, "'COMMA'", "'LOGS'", "'ADMIN'", "'DELTAS'", 
                            "'head'", "'branch'", "'access'", "'symbols'", 
                            "'locks'", "'strict'", "'comment'", "'expand'", 
                            "'date'", "'author'", "'state'", "'branches'", 
                            "'next'", "'desc'", "'log'", "'text'", null, 
                            null, null, null, "';'", "':'" ];
    static symbolicNames = [ null, "COMMA", "LOGS", "ADMIN", "DELTAS", "LITERAL_HEAD", 
                             "LITERAL_BRANCH", "LITERAL_ACCESS", "LITERAL_SYMBOLS", 
                             "LITERAL_LOCKS", "LITERAL_STRICT", "LITERAL_COMMENT", 
                             "LITERAL_EXPAND", "LITERAL_DATE", "LITERAL_AUTHOR", 
                             "LITERAL_STATE", "LITERAL_BRANCHES", "LITERAL_NEXT", 
                             "LITERAL_DESC", "LITERAL_LOG", "LITERAL_TEXT", 
                             "IDENT", "INT", "REVISION", "STRING", "SEMI", 
                             "COLON", "WS" ];
    static ruleNames = [ "rcstext", "rcsheader", "rcsrevisions", "admin", 
                         "head", "branch", "access", "symbols", "tags", 
                         "locks", "strict", "comment", "expand", "deltalist", 
                         "delta", "delta_date", "delta_author", "delta_state", 
                         "delta_branches", "delta_next", "desc", "deltatextlist", 
                         "deltatext", "deltatext_log", "deltatext_text", 
                         "newphrase" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = RCSParser.ruleNames;
        this.literalNames = RCSParser.literalNames;
        this.symbolicNames = RCSParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	rcstext() {
	    let localctx = new RcstextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, RCSParser.RULE_rcstext);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.admin();
	        this.state = 53;
	        this.deltalist();
	        this.state = 54;
	        this.desc();
	        this.state = 55;
	        this.deltatextlist();
	        this.state = 56;
	        this.match(RCSParser.EOF);
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



	rcsheader() {
	    let localctx = new RcsheaderContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, RCSParser.RULE_rcsheader);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.admin();
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



	rcsrevisions() {
	    let localctx = new RcsrevisionsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, RCSParser.RULE_rcsrevisions);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.admin();
	        this.state = 61;
	        this.deltalist();
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



	admin() {
	    let localctx = new AdminContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, RCSParser.RULE_admin);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.head();
	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===RCSParser.LITERAL_BRANCH) {
	            this.state = 64;
	            this.branch();
	        }

	        this.state = 67;
	        this.access();
	        this.state = 68;
	        this.symbols();
	        this.state = 70;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===RCSParser.LITERAL_LOCKS) {
	            this.state = 69;
	            this.locks();
	        }

	        this.state = 73;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===RCSParser.LITERAL_STRICT) {
	            this.state = 72;
	            this.strict();
	        }

	        this.state = 76;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===RCSParser.LITERAL_COMMENT) {
	            this.state = 75;
	            this.comment();
	        }

	        this.state = 79;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===RCSParser.LITERAL_EXPAND) {
	            this.state = 78;
	            this.expand();
	        }

	        this.state = 84;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===RCSParser.IDENT) {
	            this.state = 81;
	            this.newphrase();
	            this.state = 86;
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



	head() {
	    let localctx = new HeadContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, RCSParser.RULE_head);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.match(RCSParser.LITERAL_HEAD);
	        this.state = 88;
	        this.match(RCSParser.REVISION);
	        this.state = 89;
	        this.match(RCSParser.SEMI);
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



	branch() {
	    let localctx = new BranchContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, RCSParser.RULE_branch);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.match(RCSParser.LITERAL_BRANCH);
	        this.state = 92;
	        this.match(RCSParser.REVISION);
	        this.state = 93;
	        this.match(RCSParser.SEMI);
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



	access() {
	    let localctx = new AccessContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, RCSParser.RULE_access);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this.match(RCSParser.LITERAL_ACCESS);
	        this.state = 99;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===RCSParser.IDENT) {
	            this.state = 96;
	            this.match(RCSParser.IDENT);
	            this.state = 101;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 102;
	        this.match(RCSParser.SEMI);
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



	symbols() {
	    let localctx = new SymbolsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, RCSParser.RULE_symbols);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.match(RCSParser.LITERAL_SYMBOLS);
	        this.state = 108;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===RCSParser.IDENT) {
	            this.state = 105;
	            this.tags();
	            this.state = 110;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 111;
	        this.match(RCSParser.SEMI);
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



	tags() {
	    let localctx = new TagsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, RCSParser.RULE_tags);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        this.match(RCSParser.IDENT);
	        this.state = 114;
	        this.match(RCSParser.COLON);
	        this.state = 115;
	        this.match(RCSParser.REVISION);
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



	locks() {
	    let localctx = new LocksContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, RCSParser.RULE_locks);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        this.match(RCSParser.LITERAL_LOCKS);
	        this.state = 121;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===RCSParser.IDENT) {
	            this.state = 118;
	            this.match(RCSParser.IDENT);
	            this.state = 123;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 124;
	        this.match(RCSParser.SEMI);
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



	strict() {
	    let localctx = new StrictContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, RCSParser.RULE_strict);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this.match(RCSParser.LITERAL_STRICT);
	        this.state = 127;
	        this.match(RCSParser.SEMI);
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
	    this.enterRule(localctx, 22, RCSParser.RULE_comment);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this.match(RCSParser.LITERAL_COMMENT);
	        this.state = 131;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===RCSParser.STRING) {
	            this.state = 130;
	            this.match(RCSParser.STRING);
	        }

	        this.state = 133;
	        this.match(RCSParser.SEMI);
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



	expand() {
	    let localctx = new ExpandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, RCSParser.RULE_expand);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        this.match(RCSParser.LITERAL_EXPAND);
	        this.state = 137;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===RCSParser.STRING) {
	            this.state = 136;
	            this.match(RCSParser.STRING);
	        }

	        this.state = 139;
	        this.match(RCSParser.SEMI);
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



	deltalist() {
	    let localctx = new DeltalistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, RCSParser.RULE_deltalist);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===RCSParser.REVISION) {
	            this.state = 141;
	            this.delta();
	            this.state = 146;
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



	delta() {
	    let localctx = new DeltaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, RCSParser.RULE_delta);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        this.match(RCSParser.REVISION);
	        this.state = 148;
	        this.delta_date();
	        this.state = 149;
	        this.delta_author();
	        this.state = 150;
	        this.delta_state();
	        this.state = 151;
	        this.delta_branches();
	        this.state = 152;
	        this.delta_next();
	        this.state = 156;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===RCSParser.IDENT) {
	            this.state = 153;
	            this.newphrase();
	            this.state = 158;
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



	delta_date() {
	    let localctx = new Delta_dateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, RCSParser.RULE_delta_date);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 159;
	        this.match(RCSParser.LITERAL_DATE);
	        this.state = 160;
	        this.match(RCSParser.REVISION);
	        this.state = 161;
	        this.match(RCSParser.SEMI);
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



	delta_author() {
	    let localctx = new Delta_authorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, RCSParser.RULE_delta_author);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 163;
	        this.match(RCSParser.LITERAL_AUTHOR);
	        this.state = 164;
	        this.match(RCSParser.IDENT);
	        this.state = 165;
	        this.match(RCSParser.SEMI);
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



	delta_state() {
	    let localctx = new Delta_stateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, RCSParser.RULE_delta_state);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this.match(RCSParser.LITERAL_STATE);
	        this.state = 168;
	        this.match(RCSParser.IDENT);
	        this.state = 169;
	        this.match(RCSParser.SEMI);
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



	delta_branches() {
	    let localctx = new Delta_branchesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, RCSParser.RULE_delta_branches);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 171;
	        this.match(RCSParser.LITERAL_BRANCHES);
	        this.state = 175;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===RCSParser.REVISION) {
	            this.state = 172;
	            this.match(RCSParser.REVISION);
	            this.state = 177;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 178;
	        this.match(RCSParser.SEMI);
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



	delta_next() {
	    let localctx = new Delta_nextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, RCSParser.RULE_delta_next);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 180;
	        this.match(RCSParser.LITERAL_NEXT);
	        this.state = 182;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===RCSParser.REVISION) {
	            this.state = 181;
	            this.match(RCSParser.REVISION);
	        }

	        this.state = 184;
	        this.match(RCSParser.SEMI);
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



	desc() {
	    let localctx = new DescContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, RCSParser.RULE_desc);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 186;
	        this.match(RCSParser.LITERAL_DESC);
	        this.state = 187;
	        this.match(RCSParser.STRING);
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



	deltatextlist() {
	    let localctx = new DeltatextlistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, RCSParser.RULE_deltatextlist);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 192;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===RCSParser.REVISION) {
	            this.state = 189;
	            this.deltatext();
	            this.state = 194;
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



	deltatext() {
	    let localctx = new DeltatextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, RCSParser.RULE_deltatext);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 195;
	        this.match(RCSParser.REVISION);
	        this.state = 196;
	        this.deltatext_log();
	        this.state = 200;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===RCSParser.IDENT) {
	            this.state = 197;
	            this.newphrase();
	            this.state = 202;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 203;
	        this.deltatext_text();
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



	deltatext_log() {
	    let localctx = new Deltatext_logContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, RCSParser.RULE_deltatext_log);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 205;
	        this.match(RCSParser.LITERAL_LOG);
	        this.state = 206;
	        this.match(RCSParser.STRING);
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



	deltatext_text() {
	    let localctx = new Deltatext_textContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, RCSParser.RULE_deltatext_text);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 208;
	        this.match(RCSParser.LITERAL_TEXT);
	        this.state = 209;
	        this.match(RCSParser.STRING);
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



	newphrase() {
	    let localctx = new NewphraseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, RCSParser.RULE_newphrase);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 212; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 211;
	            this.match(RCSParser.IDENT);
	            this.state = 214; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===RCSParser.IDENT);
	        this.state = 216;
	        this.match(RCSParser.SEMI);
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

RCSParser.EOF = antlr4.Token.EOF;
RCSParser.COMMA = 1;
RCSParser.LOGS = 2;
RCSParser.ADMIN = 3;
RCSParser.DELTAS = 4;
RCSParser.LITERAL_HEAD = 5;
RCSParser.LITERAL_BRANCH = 6;
RCSParser.LITERAL_ACCESS = 7;
RCSParser.LITERAL_SYMBOLS = 8;
RCSParser.LITERAL_LOCKS = 9;
RCSParser.LITERAL_STRICT = 10;
RCSParser.LITERAL_COMMENT = 11;
RCSParser.LITERAL_EXPAND = 12;
RCSParser.LITERAL_DATE = 13;
RCSParser.LITERAL_AUTHOR = 14;
RCSParser.LITERAL_STATE = 15;
RCSParser.LITERAL_BRANCHES = 16;
RCSParser.LITERAL_NEXT = 17;
RCSParser.LITERAL_DESC = 18;
RCSParser.LITERAL_LOG = 19;
RCSParser.LITERAL_TEXT = 20;
RCSParser.IDENT = 21;
RCSParser.INT = 22;
RCSParser.REVISION = 23;
RCSParser.STRING = 24;
RCSParser.SEMI = 25;
RCSParser.COLON = 26;
RCSParser.WS = 27;

RCSParser.RULE_rcstext = 0;
RCSParser.RULE_rcsheader = 1;
RCSParser.RULE_rcsrevisions = 2;
RCSParser.RULE_admin = 3;
RCSParser.RULE_head = 4;
RCSParser.RULE_branch = 5;
RCSParser.RULE_access = 6;
RCSParser.RULE_symbols = 7;
RCSParser.RULE_tags = 8;
RCSParser.RULE_locks = 9;
RCSParser.RULE_strict = 10;
RCSParser.RULE_comment = 11;
RCSParser.RULE_expand = 12;
RCSParser.RULE_deltalist = 13;
RCSParser.RULE_delta = 14;
RCSParser.RULE_delta_date = 15;
RCSParser.RULE_delta_author = 16;
RCSParser.RULE_delta_state = 17;
RCSParser.RULE_delta_branches = 18;
RCSParser.RULE_delta_next = 19;
RCSParser.RULE_desc = 20;
RCSParser.RULE_deltatextlist = 21;
RCSParser.RULE_deltatext = 22;
RCSParser.RULE_deltatext_log = 23;
RCSParser.RULE_deltatext_text = 24;
RCSParser.RULE_newphrase = 25;

class RcstextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RCSParser.RULE_rcstext;
    }

	admin() {
	    return this.getTypedRuleContext(AdminContext,0);
	};

	deltalist() {
	    return this.getTypedRuleContext(DeltalistContext,0);
	};

	desc() {
	    return this.getTypedRuleContext(DescContext,0);
	};

	deltatextlist() {
	    return this.getTypedRuleContext(DeltatextlistContext,0);
	};

	EOF() {
	    return this.getToken(RCSParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.enterRcstext(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.exitRcstext(this);
		}
	}


}



class RcsheaderContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RCSParser.RULE_rcsheader;
    }

	admin() {
	    return this.getTypedRuleContext(AdminContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.enterRcsheader(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.exitRcsheader(this);
		}
	}


}



class RcsrevisionsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RCSParser.RULE_rcsrevisions;
    }

	admin() {
	    return this.getTypedRuleContext(AdminContext,0);
	};

	deltalist() {
	    return this.getTypedRuleContext(DeltalistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.enterRcsrevisions(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.exitRcsrevisions(this);
		}
	}


}



class AdminContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RCSParser.RULE_admin;
    }

	head() {
	    return this.getTypedRuleContext(HeadContext,0);
	};

	access() {
	    return this.getTypedRuleContext(AccessContext,0);
	};

	symbols() {
	    return this.getTypedRuleContext(SymbolsContext,0);
	};

	branch() {
	    return this.getTypedRuleContext(BranchContext,0);
	};

	locks() {
	    return this.getTypedRuleContext(LocksContext,0);
	};

	strict() {
	    return this.getTypedRuleContext(StrictContext,0);
	};

	comment() {
	    return this.getTypedRuleContext(CommentContext,0);
	};

	expand() {
	    return this.getTypedRuleContext(ExpandContext,0);
	};

	newphrase = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NewphraseContext);
	    } else {
	        return this.getTypedRuleContext(NewphraseContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.enterAdmin(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.exitAdmin(this);
		}
	}


}



class HeadContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RCSParser.RULE_head;
    }

	LITERAL_HEAD() {
	    return this.getToken(RCSParser.LITERAL_HEAD, 0);
	};

	REVISION() {
	    return this.getToken(RCSParser.REVISION, 0);
	};

	SEMI() {
	    return this.getToken(RCSParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.enterHead(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.exitHead(this);
		}
	}


}



class BranchContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RCSParser.RULE_branch;
    }

	LITERAL_BRANCH() {
	    return this.getToken(RCSParser.LITERAL_BRANCH, 0);
	};

	REVISION() {
	    return this.getToken(RCSParser.REVISION, 0);
	};

	SEMI() {
	    return this.getToken(RCSParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.enterBranch(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.exitBranch(this);
		}
	}


}



class AccessContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RCSParser.RULE_access;
    }

	LITERAL_ACCESS() {
	    return this.getToken(RCSParser.LITERAL_ACCESS, 0);
	};

	SEMI() {
	    return this.getToken(RCSParser.SEMI, 0);
	};

	IDENT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RCSParser.IDENT);
	    } else {
	        return this.getToken(RCSParser.IDENT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.enterAccess(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.exitAccess(this);
		}
	}


}



class SymbolsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RCSParser.RULE_symbols;
    }

	LITERAL_SYMBOLS() {
	    return this.getToken(RCSParser.LITERAL_SYMBOLS, 0);
	};

	SEMI() {
	    return this.getToken(RCSParser.SEMI, 0);
	};

	tags = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TagsContext);
	    } else {
	        return this.getTypedRuleContext(TagsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.enterSymbols(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.exitSymbols(this);
		}
	}


}



class TagsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RCSParser.RULE_tags;
    }

	IDENT() {
	    return this.getToken(RCSParser.IDENT, 0);
	};

	COLON() {
	    return this.getToken(RCSParser.COLON, 0);
	};

	REVISION() {
	    return this.getToken(RCSParser.REVISION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.enterTags(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.exitTags(this);
		}
	}


}



class LocksContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RCSParser.RULE_locks;
    }

	LITERAL_LOCKS() {
	    return this.getToken(RCSParser.LITERAL_LOCKS, 0);
	};

	SEMI() {
	    return this.getToken(RCSParser.SEMI, 0);
	};

	IDENT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RCSParser.IDENT);
	    } else {
	        return this.getToken(RCSParser.IDENT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.enterLocks(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.exitLocks(this);
		}
	}


}



class StrictContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RCSParser.RULE_strict;
    }

	LITERAL_STRICT() {
	    return this.getToken(RCSParser.LITERAL_STRICT, 0);
	};

	SEMI() {
	    return this.getToken(RCSParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.enterStrict(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.exitStrict(this);
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
        this.ruleIndex = RCSParser.RULE_comment;
    }

	LITERAL_COMMENT() {
	    return this.getToken(RCSParser.LITERAL_COMMENT, 0);
	};

	SEMI() {
	    return this.getToken(RCSParser.SEMI, 0);
	};

	STRING() {
	    return this.getToken(RCSParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.enterComment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.exitComment(this);
		}
	}


}



class ExpandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RCSParser.RULE_expand;
    }

	LITERAL_EXPAND() {
	    return this.getToken(RCSParser.LITERAL_EXPAND, 0);
	};

	SEMI() {
	    return this.getToken(RCSParser.SEMI, 0);
	};

	STRING() {
	    return this.getToken(RCSParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.enterExpand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.exitExpand(this);
		}
	}


}



class DeltalistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RCSParser.RULE_deltalist;
    }

	delta = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeltaContext);
	    } else {
	        return this.getTypedRuleContext(DeltaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.enterDeltalist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.exitDeltalist(this);
		}
	}


}



class DeltaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RCSParser.RULE_delta;
    }

	REVISION() {
	    return this.getToken(RCSParser.REVISION, 0);
	};

	delta_date() {
	    return this.getTypedRuleContext(Delta_dateContext,0);
	};

	delta_author() {
	    return this.getTypedRuleContext(Delta_authorContext,0);
	};

	delta_state() {
	    return this.getTypedRuleContext(Delta_stateContext,0);
	};

	delta_branches() {
	    return this.getTypedRuleContext(Delta_branchesContext,0);
	};

	delta_next() {
	    return this.getTypedRuleContext(Delta_nextContext,0);
	};

	newphrase = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NewphraseContext);
	    } else {
	        return this.getTypedRuleContext(NewphraseContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.enterDelta(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.exitDelta(this);
		}
	}


}



class Delta_dateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RCSParser.RULE_delta_date;
    }

	LITERAL_DATE() {
	    return this.getToken(RCSParser.LITERAL_DATE, 0);
	};

	REVISION() {
	    return this.getToken(RCSParser.REVISION, 0);
	};

	SEMI() {
	    return this.getToken(RCSParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.enterDelta_date(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.exitDelta_date(this);
		}
	}


}



class Delta_authorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RCSParser.RULE_delta_author;
    }

	LITERAL_AUTHOR() {
	    return this.getToken(RCSParser.LITERAL_AUTHOR, 0);
	};

	IDENT() {
	    return this.getToken(RCSParser.IDENT, 0);
	};

	SEMI() {
	    return this.getToken(RCSParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.enterDelta_author(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.exitDelta_author(this);
		}
	}


}



class Delta_stateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RCSParser.RULE_delta_state;
    }

	LITERAL_STATE() {
	    return this.getToken(RCSParser.LITERAL_STATE, 0);
	};

	IDENT() {
	    return this.getToken(RCSParser.IDENT, 0);
	};

	SEMI() {
	    return this.getToken(RCSParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.enterDelta_state(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.exitDelta_state(this);
		}
	}


}



class Delta_branchesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RCSParser.RULE_delta_branches;
    }

	LITERAL_BRANCHES() {
	    return this.getToken(RCSParser.LITERAL_BRANCHES, 0);
	};

	SEMI() {
	    return this.getToken(RCSParser.SEMI, 0);
	};

	REVISION = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RCSParser.REVISION);
	    } else {
	        return this.getToken(RCSParser.REVISION, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.enterDelta_branches(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.exitDelta_branches(this);
		}
	}


}



class Delta_nextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RCSParser.RULE_delta_next;
    }

	LITERAL_NEXT() {
	    return this.getToken(RCSParser.LITERAL_NEXT, 0);
	};

	SEMI() {
	    return this.getToken(RCSParser.SEMI, 0);
	};

	REVISION() {
	    return this.getToken(RCSParser.REVISION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.enterDelta_next(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.exitDelta_next(this);
		}
	}


}



class DescContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RCSParser.RULE_desc;
    }

	LITERAL_DESC() {
	    return this.getToken(RCSParser.LITERAL_DESC, 0);
	};

	STRING() {
	    return this.getToken(RCSParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.enterDesc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.exitDesc(this);
		}
	}


}



class DeltatextlistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RCSParser.RULE_deltatextlist;
    }

	deltatext = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeltatextContext);
	    } else {
	        return this.getTypedRuleContext(DeltatextContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.enterDeltatextlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.exitDeltatextlist(this);
		}
	}


}



class DeltatextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RCSParser.RULE_deltatext;
    }

	REVISION() {
	    return this.getToken(RCSParser.REVISION, 0);
	};

	deltatext_log() {
	    return this.getTypedRuleContext(Deltatext_logContext,0);
	};

	deltatext_text() {
	    return this.getTypedRuleContext(Deltatext_textContext,0);
	};

	newphrase = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NewphraseContext);
	    } else {
	        return this.getTypedRuleContext(NewphraseContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.enterDeltatext(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.exitDeltatext(this);
		}
	}


}



class Deltatext_logContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RCSParser.RULE_deltatext_log;
    }

	LITERAL_LOG() {
	    return this.getToken(RCSParser.LITERAL_LOG, 0);
	};

	STRING() {
	    return this.getToken(RCSParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.enterDeltatext_log(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.exitDeltatext_log(this);
		}
	}


}



class Deltatext_textContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RCSParser.RULE_deltatext_text;
    }

	LITERAL_TEXT() {
	    return this.getToken(RCSParser.LITERAL_TEXT, 0);
	};

	STRING() {
	    return this.getToken(RCSParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.enterDeltatext_text(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.exitDeltatext_text(this);
		}
	}


}



class NewphraseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RCSParser.RULE_newphrase;
    }

	SEMI() {
	    return this.getToken(RCSParser.SEMI, 0);
	};

	IDENT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RCSParser.IDENT);
	    } else {
	        return this.getToken(RCSParser.IDENT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.enterNewphrase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RCSListener ) {
	        listener.exitNewphrase(this);
		}
	}


}




RCSParser.RcstextContext = RcstextContext; 
RCSParser.RcsheaderContext = RcsheaderContext; 
RCSParser.RcsrevisionsContext = RcsrevisionsContext; 
RCSParser.AdminContext = AdminContext; 
RCSParser.HeadContext = HeadContext; 
RCSParser.BranchContext = BranchContext; 
RCSParser.AccessContext = AccessContext; 
RCSParser.SymbolsContext = SymbolsContext; 
RCSParser.TagsContext = TagsContext; 
RCSParser.LocksContext = LocksContext; 
RCSParser.StrictContext = StrictContext; 
RCSParser.CommentContext = CommentContext; 
RCSParser.ExpandContext = ExpandContext; 
RCSParser.DeltalistContext = DeltalistContext; 
RCSParser.DeltaContext = DeltaContext; 
RCSParser.Delta_dateContext = Delta_dateContext; 
RCSParser.Delta_authorContext = Delta_authorContext; 
RCSParser.Delta_stateContext = Delta_stateContext; 
RCSParser.Delta_branchesContext = Delta_branchesContext; 
RCSParser.Delta_nextContext = Delta_nextContext; 
RCSParser.DescContext = DescContext; 
RCSParser.DeltatextlistContext = DeltatextlistContext; 
RCSParser.DeltatextContext = DeltatextContext; 
RCSParser.Deltatext_logContext = Deltatext_logContext; 
RCSParser.Deltatext_textContext = Deltatext_textContext; 
RCSParser.NewphraseContext = NewphraseContext; 
