// Generated from ./Resources/Parsers/alpaca/alpaca.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import alpacaListener from './alpacaListener.js';
const serializedATN = [4,1,29,189,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,1,0,1,0,1,0,1,1,1,1,1,1,5,1,53,8,1,10,1,12,1,
56,9,1,1,2,1,2,1,2,3,2,61,8,2,1,3,1,3,1,3,3,3,66,8,3,1,3,5,3,69,8,3,10,3,
12,3,72,9,3,1,3,3,3,75,8,3,1,4,1,4,1,4,5,4,80,8,4,10,4,12,4,83,9,4,1,4,3,
4,86,8,4,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,10,
1,11,1,11,1,11,5,11,106,8,11,10,11,12,11,109,9,11,1,12,1,12,1,12,1,12,3,
12,115,8,12,1,13,1,13,1,13,3,13,120,8,13,1,14,1,14,1,14,5,14,125,8,14,10,
14,12,14,128,9,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,3,15,139,
8,15,1,16,1,16,3,16,143,8,16,1,16,1,16,3,16,147,8,16,1,17,1,17,1,17,1,17,
3,17,153,8,17,3,17,155,8,17,1,17,1,17,3,17,159,8,17,1,18,1,18,1,19,1,19,
5,19,165,8,19,10,19,12,19,168,9,19,1,19,1,19,1,20,1,20,5,20,174,8,20,10,
20,12,20,177,9,20,1,21,4,21,180,8,21,11,21,12,21,181,1,22,4,22,185,8,22,
11,22,12,22,186,1,22,0,0,23,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,
34,36,38,40,42,44,0,4,1,0,1,2,1,0,12,14,1,0,20,22,1,0,25,26,191,0,46,1,0,
0,0,2,49,1,0,0,0,4,60,1,0,0,0,6,62,1,0,0,0,8,76,1,0,0,0,10,87,1,0,0,0,12,
91,1,0,0,0,14,93,1,0,0,0,16,95,1,0,0,0,18,97,1,0,0,0,20,99,1,0,0,0,22,102,
1,0,0,0,24,110,1,0,0,0,26,119,1,0,0,0,28,121,1,0,0,0,30,138,1,0,0,0,32,140,
1,0,0,0,34,148,1,0,0,0,36,160,1,0,0,0,38,162,1,0,0,0,40,171,1,0,0,0,42,179,
1,0,0,0,44,184,1,0,0,0,46,47,3,2,1,0,47,48,7,0,0,0,48,1,1,0,0,0,49,54,3,
4,2,0,50,51,5,3,0,0,51,53,3,4,2,0,52,50,1,0,0,0,53,56,1,0,0,0,54,52,1,0,
0,0,54,55,1,0,0,0,55,3,1,0,0,0,56,54,1,0,0,0,57,61,3,6,3,0,58,61,3,8,4,0,
59,61,3,10,5,0,60,57,1,0,0,0,60,58,1,0,0,0,60,59,1,0,0,0,61,5,1,0,0,0,62,
63,5,4,0,0,63,65,3,14,7,0,64,66,5,23,0,0,65,64,1,0,0,0,65,66,1,0,0,0,66,
70,1,0,0,0,67,69,3,18,9,0,68,67,1,0,0,0,69,72,1,0,0,0,70,68,1,0,0,0,70,71,
1,0,0,0,71,74,1,0,0,0,72,70,1,0,0,0,73,75,3,22,11,0,74,73,1,0,0,0,74,75,
1,0,0,0,75,7,1,0,0,0,76,77,5,5,0,0,77,81,3,12,6,0,78,80,3,18,9,0,79,78,1,
0,0,0,80,83,1,0,0,0,81,79,1,0,0,0,81,82,1,0,0,0,82,85,1,0,0,0,83,81,1,0,
0,0,84,86,3,22,11,0,85,84,1,0,0,0,85,86,1,0,0,0,86,9,1,0,0,0,87,88,5,6,0,
0,88,89,3,16,8,0,89,90,3,38,19,0,90,11,1,0,0,0,91,92,3,40,20,0,92,13,1,0,
0,0,93,94,3,40,20,0,94,15,1,0,0,0,95,96,3,40,20,0,96,17,1,0,0,0,97,98,3,
20,10,0,98,19,1,0,0,0,99,100,5,7,0,0,100,101,3,12,6,0,101,21,1,0,0,0,102,
107,3,24,12,0,103,104,5,8,0,0,104,106,3,24,12,0,105,103,1,0,0,0,106,109,
1,0,0,0,107,105,1,0,0,0,107,108,1,0,0,0,108,23,1,0,0,0,109,107,1,0,0,0,110,
111,5,9,0,0,111,114,3,26,13,0,112,113,5,10,0,0,113,115,3,28,14,0,114,112,
1,0,0,0,114,115,1,0,0,0,115,25,1,0,0,0,116,120,3,14,7,0,117,120,3,44,22,
0,118,120,5,11,0,0,119,116,1,0,0,0,119,117,1,0,0,0,119,118,1,0,0,0,120,27,
1,0,0,0,121,126,3,30,15,0,122,123,7,1,0,0,123,125,3,30,15,0,124,122,1,0,
0,0,125,128,1,0,0,0,126,124,1,0,0,0,126,127,1,0,0,0,127,29,1,0,0,0,128,126,
1,0,0,0,129,139,3,34,17,0,130,131,5,15,0,0,131,132,3,28,14,0,132,133,5,16,
0,0,133,139,1,0,0,0,134,135,5,17,0,0,135,139,3,30,15,0,136,139,3,36,18,0,
137,139,3,32,16,0,138,129,1,0,0,0,138,130,1,0,0,0,138,134,1,0,0,0,138,136,
1,0,0,0,138,137,1,0,0,0,139,31,1,0,0,0,140,146,3,26,13,0,141,143,5,18,0,
0,142,141,1,0,0,0,142,143,1,0,0,0,143,144,1,0,0,0,144,147,3,26,13,0,145,
147,3,20,10,0,146,142,1,0,0,0,146,145,1,0,0,0,147,33,1,0,0,0,148,154,3,42,
21,0,149,152,5,19,0,0,150,153,3,38,19,0,151,153,3,16,8,0,152,150,1,0,0,0,
152,151,1,0,0,0,153,155,1,0,0,0,154,149,1,0,0,0,154,155,1,0,0,0,155,158,
1,0,0,0,156,159,3,26,13,0,157,159,3,20,10,0,158,156,1,0,0,0,158,157,1,0,
0,0,159,35,1,0,0,0,160,161,7,2,0,0,161,37,1,0,0,0,162,166,5,15,0,0,163,165,
3,44,22,0,164,163,1,0,0,0,165,168,1,0,0,0,166,164,1,0,0,0,166,167,1,0,0,
0,167,169,1,0,0,0,168,166,1,0,0,0,169,170,5,16,0,0,170,39,1,0,0,0,171,175,
5,25,0,0,172,174,7,3,0,0,173,172,1,0,0,0,174,177,1,0,0,0,175,173,1,0,0,0,
175,176,1,0,0,0,176,41,1,0,0,0,177,175,1,0,0,0,178,180,5,26,0,0,179,178,
1,0,0,0,180,181,1,0,0,0,181,179,1,0,0,0,181,182,1,0,0,0,182,43,1,0,0,0,183,
185,5,27,0,0,184,183,1,0,0,0,185,186,1,0,0,0,186,184,1,0,0,0,186,187,1,0,
0,0,187,45,1,0,0,0,21,54,60,65,70,74,81,85,107,114,119,126,138,142,146,152,
154,158,166,175,181,186];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class alpacaParser extends antlr4.Parser {

    static grammarFileName = "alpaca.g4";
    static literalNames = [ null, "'.'", "'begin'", "';'", "'state'", "'class'", 
                            "'neighbourhood'", "'is'", "','", "'to'", "'when'", 
                            "'me'", "'and'", "'or'", "'xor'", "'('", "')'", 
                            "'not'", "'='", "'in'", "'true'", "'false'", 
                            "'guess'", null, "'\"'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "QUOTEDCHAR", 
                             "QUOTE", "ALPHA", "DIGIT", "ARROW", "COMMENT", 
                             "WS" ];
    static ruleNames = [ "prog", "defns", "defn", "stateDefn", "classDefn", 
                         "nbhdDefn", "classID", "stateID", "nbhdID", "membershipDecl", 
                         "classRef", "rules", "rule_", "stateRef", "expression", 
                         "term", "relationalPred", "adjacencyPred", "boolPrimitive", 
                         "neigbourhood", "identifier", "naturalnumber", 
                         "arrowchain" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = alpacaParser.ruleNames;
        this.literalNames = alpacaParser.literalNames;
        this.symbolicNames = alpacaParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, alpacaParser.RULE_prog);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.defns();
	        this.state = 47;
	        _la = this._input.LA(1);
	        if(!(_la===alpacaParser.T__0 || _la===alpacaParser.T__1)) {
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



	defns() {
	    let localctx = new DefnsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, alpacaParser.RULE_defns);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.defn();
	        this.state = 54;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===alpacaParser.T__2) {
	            this.state = 50;
	            this.match(alpacaParser.T__2);
	            this.state = 51;
	            this.defn();
	            this.state = 56;
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



	defn() {
	    let localctx = new DefnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, alpacaParser.RULE_defn);
	    try {
	        this.state = 60;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case alpacaParser.T__3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 57;
	            this.stateDefn();
	            break;
	        case alpacaParser.T__4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 58;
	            this.classDefn();
	            break;
	        case alpacaParser.T__5:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 59;
	            this.nbhdDefn();
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



	stateDefn() {
	    let localctx = new StateDefnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, alpacaParser.RULE_stateDefn);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(alpacaParser.T__3);
	        this.state = 63;
	        this.stateID();
	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===alpacaParser.QUOTEDCHAR) {
	            this.state = 64;
	            this.match(alpacaParser.QUOTEDCHAR);
	        }

	        this.state = 70;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===alpacaParser.T__6) {
	            this.state = 67;
	            this.membershipDecl();
	            this.state = 72;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 74;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===alpacaParser.T__8) {
	            this.state = 73;
	            this.rules();
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



	classDefn() {
	    let localctx = new ClassDefnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, alpacaParser.RULE_classDefn);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.match(alpacaParser.T__4);
	        this.state = 77;
	        this.classID();
	        this.state = 81;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===alpacaParser.T__6) {
	            this.state = 78;
	            this.membershipDecl();
	            this.state = 83;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 85;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===alpacaParser.T__8) {
	            this.state = 84;
	            this.rules();
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



	nbhdDefn() {
	    let localctx = new NbhdDefnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, alpacaParser.RULE_nbhdDefn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.match(alpacaParser.T__5);
	        this.state = 88;
	        this.nbhdID();
	        this.state = 89;
	        this.neigbourhood();
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



	classID() {
	    let localctx = new ClassIDContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, alpacaParser.RULE_classID);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
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



	stateID() {
	    let localctx = new StateIDContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, alpacaParser.RULE_stateID);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
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



	nbhdID() {
	    let localctx = new NbhdIDContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, alpacaParser.RULE_nbhdID);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
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



	membershipDecl() {
	    let localctx = new MembershipDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, alpacaParser.RULE_membershipDecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.classRef();
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



	classRef() {
	    let localctx = new ClassRefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, alpacaParser.RULE_classRef);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        this.match(alpacaParser.T__6);
	        this.state = 100;
	        this.classID();
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
	    this.enterRule(localctx, 22, alpacaParser.RULE_rules);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.rule_();
	        this.state = 107;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===alpacaParser.T__7) {
	            this.state = 103;
	            this.match(alpacaParser.T__7);
	            this.state = 104;
	            this.rule_();
	            this.state = 109;
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



	rule_() {
	    let localctx = new Rule_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, alpacaParser.RULE_rule_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this.match(alpacaParser.T__8);
	        this.state = 111;
	        this.stateRef();
	        this.state = 114;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===alpacaParser.T__9) {
	            this.state = 112;
	            this.match(alpacaParser.T__9);
	            this.state = 113;
	            this.expression();
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



	stateRef() {
	    let localctx = new StateRefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, alpacaParser.RULE_stateRef);
	    try {
	        this.state = 119;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case alpacaParser.ALPHA:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 116;
	            this.stateID();
	            break;
	        case alpacaParser.ARROW:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 117;
	            this.arrowchain();
	            break;
	        case alpacaParser.T__10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 118;
	            this.match(alpacaParser.T__10);
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
	    this.enterRule(localctx, 28, alpacaParser.RULE_expression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this.term();
	        this.state = 126;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << alpacaParser.T__11) | (1 << alpacaParser.T__12) | (1 << alpacaParser.T__13))) !== 0)) {
	            this.state = 122;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << alpacaParser.T__11) | (1 << alpacaParser.T__12) | (1 << alpacaParser.T__13))) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 123;
	            this.term();
	            this.state = 128;
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



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, alpacaParser.RULE_term);
	    try {
	        this.state = 138;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case alpacaParser.DIGIT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 129;
	            this.adjacencyPred();
	            break;
	        case alpacaParser.T__14:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 130;
	            this.match(alpacaParser.T__14);
	            this.state = 131;
	            this.expression();
	            this.state = 132;
	            this.match(alpacaParser.T__15);
	            break;
	        case alpacaParser.T__16:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 134;
	            this.match(alpacaParser.T__16);
	            this.state = 135;
	            this.term();
	            break;
	        case alpacaParser.T__19:
	        case alpacaParser.T__20:
	        case alpacaParser.T__21:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 136;
	            this.boolPrimitive();
	            break;
	        case alpacaParser.T__10:
	        case alpacaParser.ALPHA:
	        case alpacaParser.ARROW:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 137;
	            this.relationalPred();
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



	relationalPred() {
	    let localctx = new RelationalPredContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, alpacaParser.RULE_relationalPred);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        this.stateRef();
	        this.state = 146;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case alpacaParser.T__10:
	        case alpacaParser.T__17:
	        case alpacaParser.ALPHA:
	        case alpacaParser.ARROW:
	            this.state = 142;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===alpacaParser.T__17) {
	                this.state = 141;
	                this.match(alpacaParser.T__17);
	            }

	            this.state = 144;
	            this.stateRef();
	            break;
	        case alpacaParser.T__6:
	            this.state = 145;
	            this.classRef();
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



	adjacencyPred() {
	    let localctx = new AdjacencyPredContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, alpacaParser.RULE_adjacencyPred);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 148;
	        this.naturalnumber();
	        this.state = 154;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===alpacaParser.T__18) {
	            this.state = 149;
	            this.match(alpacaParser.T__18);
	            this.state = 152;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case alpacaParser.T__14:
	                this.state = 150;
	                this.neigbourhood();
	                break;
	            case alpacaParser.ALPHA:
	                this.state = 151;
	                this.nbhdID();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	        }

	        this.state = 158;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case alpacaParser.T__10:
	        case alpacaParser.ALPHA:
	        case alpacaParser.ARROW:
	            this.state = 156;
	            this.stateRef();
	            break;
	        case alpacaParser.T__6:
	            this.state = 157;
	            this.classRef();
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



	boolPrimitive() {
	    let localctx = new BoolPrimitiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, alpacaParser.RULE_boolPrimitive);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << alpacaParser.T__19) | (1 << alpacaParser.T__20) | (1 << alpacaParser.T__21))) !== 0))) {
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



	neigbourhood() {
	    let localctx = new NeigbourhoodContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, alpacaParser.RULE_neigbourhood);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        this.match(alpacaParser.T__14);
	        this.state = 166;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===alpacaParser.ARROW) {
	            this.state = 163;
	            this.arrowchain();
	            this.state = 168;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 169;
	        this.match(alpacaParser.T__15);
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
	    this.enterRule(localctx, 40, alpacaParser.RULE_identifier);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 171;
	        this.match(alpacaParser.ALPHA);
	        this.state = 175;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 172;
	                _la = this._input.LA(1);
	                if(!(_la===alpacaParser.ALPHA || _la===alpacaParser.DIGIT)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                } 
	            }
	            this.state = 177;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
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



	naturalnumber() {
	    let localctx = new NaturalnumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, alpacaParser.RULE_naturalnumber);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 179; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 178;
	            this.match(alpacaParser.DIGIT);
	            this.state = 181; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===alpacaParser.DIGIT);
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



	arrowchain() {
	    let localctx = new ArrowchainContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, alpacaParser.RULE_arrowchain);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 183;
	        		this.match(alpacaParser.ARROW);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 186; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,20, this._ctx);
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


}

alpacaParser.EOF = antlr4.Token.EOF;
alpacaParser.T__0 = 1;
alpacaParser.T__1 = 2;
alpacaParser.T__2 = 3;
alpacaParser.T__3 = 4;
alpacaParser.T__4 = 5;
alpacaParser.T__5 = 6;
alpacaParser.T__6 = 7;
alpacaParser.T__7 = 8;
alpacaParser.T__8 = 9;
alpacaParser.T__9 = 10;
alpacaParser.T__10 = 11;
alpacaParser.T__11 = 12;
alpacaParser.T__12 = 13;
alpacaParser.T__13 = 14;
alpacaParser.T__14 = 15;
alpacaParser.T__15 = 16;
alpacaParser.T__16 = 17;
alpacaParser.T__17 = 18;
alpacaParser.T__18 = 19;
alpacaParser.T__19 = 20;
alpacaParser.T__20 = 21;
alpacaParser.T__21 = 22;
alpacaParser.QUOTEDCHAR = 23;
alpacaParser.QUOTE = 24;
alpacaParser.ALPHA = 25;
alpacaParser.DIGIT = 26;
alpacaParser.ARROW = 27;
alpacaParser.COMMENT = 28;
alpacaParser.WS = 29;

alpacaParser.RULE_prog = 0;
alpacaParser.RULE_defns = 1;
alpacaParser.RULE_defn = 2;
alpacaParser.RULE_stateDefn = 3;
alpacaParser.RULE_classDefn = 4;
alpacaParser.RULE_nbhdDefn = 5;
alpacaParser.RULE_classID = 6;
alpacaParser.RULE_stateID = 7;
alpacaParser.RULE_nbhdID = 8;
alpacaParser.RULE_membershipDecl = 9;
alpacaParser.RULE_classRef = 10;
alpacaParser.RULE_rules = 11;
alpacaParser.RULE_rule_ = 12;
alpacaParser.RULE_stateRef = 13;
alpacaParser.RULE_expression = 14;
alpacaParser.RULE_term = 15;
alpacaParser.RULE_relationalPred = 16;
alpacaParser.RULE_adjacencyPred = 17;
alpacaParser.RULE_boolPrimitive = 18;
alpacaParser.RULE_neigbourhood = 19;
alpacaParser.RULE_identifier = 20;
alpacaParser.RULE_naturalnumber = 21;
alpacaParser.RULE_arrowchain = 22;

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
        this.ruleIndex = alpacaParser.RULE_prog;
    }

	defns() {
	    return this.getTypedRuleContext(DefnsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.exitProg(this);
		}
	}


}



class DefnsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alpacaParser.RULE_defns;
    }

	defn = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DefnContext);
	    } else {
	        return this.getTypedRuleContext(DefnContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.enterDefns(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.exitDefns(this);
		}
	}


}



class DefnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alpacaParser.RULE_defn;
    }

	stateDefn() {
	    return this.getTypedRuleContext(StateDefnContext,0);
	};

	classDefn() {
	    return this.getTypedRuleContext(ClassDefnContext,0);
	};

	nbhdDefn() {
	    return this.getTypedRuleContext(NbhdDefnContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.enterDefn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.exitDefn(this);
		}
	}


}



class StateDefnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alpacaParser.RULE_stateDefn;
    }

	stateID() {
	    return this.getTypedRuleContext(StateIDContext,0);
	};

	QUOTEDCHAR() {
	    return this.getToken(alpacaParser.QUOTEDCHAR, 0);
	};

	membershipDecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MembershipDeclContext);
	    } else {
	        return this.getTypedRuleContext(MembershipDeclContext,i);
	    }
	};

	rules() {
	    return this.getTypedRuleContext(RulesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.enterStateDefn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.exitStateDefn(this);
		}
	}


}



class ClassDefnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alpacaParser.RULE_classDefn;
    }

	classID() {
	    return this.getTypedRuleContext(ClassIDContext,0);
	};

	membershipDecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MembershipDeclContext);
	    } else {
	        return this.getTypedRuleContext(MembershipDeclContext,i);
	    }
	};

	rules() {
	    return this.getTypedRuleContext(RulesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.enterClassDefn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.exitClassDefn(this);
		}
	}


}



class NbhdDefnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alpacaParser.RULE_nbhdDefn;
    }

	nbhdID() {
	    return this.getTypedRuleContext(NbhdIDContext,0);
	};

	neigbourhood() {
	    return this.getTypedRuleContext(NeigbourhoodContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.enterNbhdDefn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.exitNbhdDefn(this);
		}
	}


}



class ClassIDContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alpacaParser.RULE_classID;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.enterClassID(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.exitClassID(this);
		}
	}


}



class StateIDContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alpacaParser.RULE_stateID;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.enterStateID(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.exitStateID(this);
		}
	}


}



class NbhdIDContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alpacaParser.RULE_nbhdID;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.enterNbhdID(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.exitNbhdID(this);
		}
	}


}



class MembershipDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alpacaParser.RULE_membershipDecl;
    }

	classRef() {
	    return this.getTypedRuleContext(ClassRefContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.enterMembershipDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.exitMembershipDecl(this);
		}
	}


}



class ClassRefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alpacaParser.RULE_classRef;
    }

	classID() {
	    return this.getTypedRuleContext(ClassIDContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.enterClassRef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.exitClassRef(this);
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
        this.ruleIndex = alpacaParser.RULE_rules;
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
	    if(listener instanceof alpacaListener ) {
	        listener.enterRules(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alpacaListener ) {
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
        this.ruleIndex = alpacaParser.RULE_rule_;
    }

	stateRef() {
	    return this.getTypedRuleContext(StateRefContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.enterRule_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.exitRule_(this);
		}
	}


}



class StateRefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alpacaParser.RULE_stateRef;
    }

	stateID() {
	    return this.getTypedRuleContext(StateIDContext,0);
	};

	arrowchain() {
	    return this.getTypedRuleContext(ArrowchainContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.enterStateRef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.exitStateRef(this);
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
        this.ruleIndex = alpacaParser.RULE_expression;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.exitExpression(this);
		}
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alpacaParser.RULE_term;
    }

	adjacencyPred() {
	    return this.getTypedRuleContext(AdjacencyPredContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	boolPrimitive() {
	    return this.getTypedRuleContext(BoolPrimitiveContext,0);
	};

	relationalPred() {
	    return this.getTypedRuleContext(RelationalPredContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.exitTerm(this);
		}
	}


}



class RelationalPredContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alpacaParser.RULE_relationalPred;
    }

	stateRef = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StateRefContext);
	    } else {
	        return this.getTypedRuleContext(StateRefContext,i);
	    }
	};

	classRef() {
	    return this.getTypedRuleContext(ClassRefContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.enterRelationalPred(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.exitRelationalPred(this);
		}
	}


}



class AdjacencyPredContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alpacaParser.RULE_adjacencyPred;
    }

	naturalnumber() {
	    return this.getTypedRuleContext(NaturalnumberContext,0);
	};

	stateRef() {
	    return this.getTypedRuleContext(StateRefContext,0);
	};

	classRef() {
	    return this.getTypedRuleContext(ClassRefContext,0);
	};

	neigbourhood() {
	    return this.getTypedRuleContext(NeigbourhoodContext,0);
	};

	nbhdID() {
	    return this.getTypedRuleContext(NbhdIDContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.enterAdjacencyPred(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.exitAdjacencyPred(this);
		}
	}


}



class BoolPrimitiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alpacaParser.RULE_boolPrimitive;
    }


	enterRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.enterBoolPrimitive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.exitBoolPrimitive(this);
		}
	}


}



class NeigbourhoodContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alpacaParser.RULE_neigbourhood;
    }

	arrowchain = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArrowchainContext);
	    } else {
	        return this.getTypedRuleContext(ArrowchainContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.enterNeigbourhood(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.exitNeigbourhood(this);
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
        this.ruleIndex = alpacaParser.RULE_identifier;
    }

	ALPHA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(alpacaParser.ALPHA);
	    } else {
	        return this.getToken(alpacaParser.ALPHA, i);
	    }
	};


	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(alpacaParser.DIGIT);
	    } else {
	        return this.getToken(alpacaParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.exitIdentifier(this);
		}
	}


}



class NaturalnumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alpacaParser.RULE_naturalnumber;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(alpacaParser.DIGIT);
	    } else {
	        return this.getToken(alpacaParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.enterNaturalnumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.exitNaturalnumber(this);
		}
	}


}



class ArrowchainContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alpacaParser.RULE_arrowchain;
    }

	ARROW = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(alpacaParser.ARROW);
	    } else {
	        return this.getToken(alpacaParser.ARROW, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.enterArrowchain(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alpacaListener ) {
	        listener.exitArrowchain(this);
		}
	}


}




alpacaParser.ProgContext = ProgContext; 
alpacaParser.DefnsContext = DefnsContext; 
alpacaParser.DefnContext = DefnContext; 
alpacaParser.StateDefnContext = StateDefnContext; 
alpacaParser.ClassDefnContext = ClassDefnContext; 
alpacaParser.NbhdDefnContext = NbhdDefnContext; 
alpacaParser.ClassIDContext = ClassIDContext; 
alpacaParser.StateIDContext = StateIDContext; 
alpacaParser.NbhdIDContext = NbhdIDContext; 
alpacaParser.MembershipDeclContext = MembershipDeclContext; 
alpacaParser.ClassRefContext = ClassRefContext; 
alpacaParser.RulesContext = RulesContext; 
alpacaParser.Rule_Context = Rule_Context; 
alpacaParser.StateRefContext = StateRefContext; 
alpacaParser.ExpressionContext = ExpressionContext; 
alpacaParser.TermContext = TermContext; 
alpacaParser.RelationalPredContext = RelationalPredContext; 
alpacaParser.AdjacencyPredContext = AdjacencyPredContext; 
alpacaParser.BoolPrimitiveContext = BoolPrimitiveContext; 
alpacaParser.NeigbourhoodContext = NeigbourhoodContext; 
alpacaParser.IdentifierContext = IdentifierContext; 
alpacaParser.NaturalnumberContext = NaturalnumberContext; 
alpacaParser.ArrowchainContext = ArrowchainContext; 
