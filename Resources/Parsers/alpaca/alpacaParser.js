// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/alpaca/alpaca.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import alpacaListener from './alpacaListener.js';
const serializedATN = [4,1,29,190,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,1,0,1,0,1,0,1,0,1,1,1,1,1,1,5,1,54,8,1,10,1,
12,1,57,9,1,1,2,1,2,1,2,3,2,62,8,2,1,3,1,3,1,3,3,3,67,8,3,1,3,5,3,70,8,3,
10,3,12,3,73,9,3,1,3,3,3,76,8,3,1,4,1,4,1,4,5,4,81,8,4,10,4,12,4,84,9,4,
1,4,3,4,87,8,4,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,
1,10,1,11,1,11,1,11,5,11,107,8,11,10,11,12,11,110,9,11,1,12,1,12,1,12,1,
12,3,12,116,8,12,1,13,1,13,1,13,3,13,121,8,13,1,14,1,14,1,14,5,14,126,8,
14,10,14,12,14,129,9,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,3,15,
140,8,15,1,16,1,16,3,16,144,8,16,1,16,1,16,3,16,148,8,16,1,17,1,17,1,17,
1,17,3,17,154,8,17,3,17,156,8,17,1,17,1,17,3,17,160,8,17,1,18,1,18,1,19,
1,19,5,19,166,8,19,10,19,12,19,169,9,19,1,19,1,19,1,20,1,20,5,20,175,8,20,
10,20,12,20,178,9,20,1,21,4,21,181,8,21,11,21,12,21,182,1,22,4,22,186,8,
22,11,22,12,22,187,1,22,0,0,23,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,
32,34,36,38,40,42,44,0,4,1,0,1,2,1,0,12,14,1,0,20,22,1,0,25,26,192,0,46,
1,0,0,0,2,50,1,0,0,0,4,61,1,0,0,0,6,63,1,0,0,0,8,77,1,0,0,0,10,88,1,0,0,
0,12,92,1,0,0,0,14,94,1,0,0,0,16,96,1,0,0,0,18,98,1,0,0,0,20,100,1,0,0,0,
22,103,1,0,0,0,24,111,1,0,0,0,26,120,1,0,0,0,28,122,1,0,0,0,30,139,1,0,0,
0,32,141,1,0,0,0,34,149,1,0,0,0,36,161,1,0,0,0,38,163,1,0,0,0,40,172,1,0,
0,0,42,180,1,0,0,0,44,185,1,0,0,0,46,47,3,2,1,0,47,48,7,0,0,0,48,49,5,0,
0,1,49,1,1,0,0,0,50,55,3,4,2,0,51,52,5,3,0,0,52,54,3,4,2,0,53,51,1,0,0,0,
54,57,1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,3,1,0,0,0,57,55,1,0,0,0,58,
62,3,6,3,0,59,62,3,8,4,0,60,62,3,10,5,0,61,58,1,0,0,0,61,59,1,0,0,0,61,60,
1,0,0,0,62,5,1,0,0,0,63,64,5,4,0,0,64,66,3,14,7,0,65,67,5,23,0,0,66,65,1,
0,0,0,66,67,1,0,0,0,67,71,1,0,0,0,68,70,3,18,9,0,69,68,1,0,0,0,70,73,1,0,
0,0,71,69,1,0,0,0,71,72,1,0,0,0,72,75,1,0,0,0,73,71,1,0,0,0,74,76,3,22,11,
0,75,74,1,0,0,0,75,76,1,0,0,0,76,7,1,0,0,0,77,78,5,5,0,0,78,82,3,12,6,0,
79,81,3,18,9,0,80,79,1,0,0,0,81,84,1,0,0,0,82,80,1,0,0,0,82,83,1,0,0,0,83,
86,1,0,0,0,84,82,1,0,0,0,85,87,3,22,11,0,86,85,1,0,0,0,86,87,1,0,0,0,87,
9,1,0,0,0,88,89,5,6,0,0,89,90,3,16,8,0,90,91,3,38,19,0,91,11,1,0,0,0,92,
93,3,40,20,0,93,13,1,0,0,0,94,95,3,40,20,0,95,15,1,0,0,0,96,97,3,40,20,0,
97,17,1,0,0,0,98,99,3,20,10,0,99,19,1,0,0,0,100,101,5,7,0,0,101,102,3,12,
6,0,102,21,1,0,0,0,103,108,3,24,12,0,104,105,5,8,0,0,105,107,3,24,12,0,106,
104,1,0,0,0,107,110,1,0,0,0,108,106,1,0,0,0,108,109,1,0,0,0,109,23,1,0,0,
0,110,108,1,0,0,0,111,112,5,9,0,0,112,115,3,26,13,0,113,114,5,10,0,0,114,
116,3,28,14,0,115,113,1,0,0,0,115,116,1,0,0,0,116,25,1,0,0,0,117,121,3,14,
7,0,118,121,3,44,22,0,119,121,5,11,0,0,120,117,1,0,0,0,120,118,1,0,0,0,120,
119,1,0,0,0,121,27,1,0,0,0,122,127,3,30,15,0,123,124,7,1,0,0,124,126,3,30,
15,0,125,123,1,0,0,0,126,129,1,0,0,0,127,125,1,0,0,0,127,128,1,0,0,0,128,
29,1,0,0,0,129,127,1,0,0,0,130,140,3,34,17,0,131,132,5,15,0,0,132,133,3,
28,14,0,133,134,5,16,0,0,134,140,1,0,0,0,135,136,5,17,0,0,136,140,3,30,15,
0,137,140,3,36,18,0,138,140,3,32,16,0,139,130,1,0,0,0,139,131,1,0,0,0,139,
135,1,0,0,0,139,137,1,0,0,0,139,138,1,0,0,0,140,31,1,0,0,0,141,147,3,26,
13,0,142,144,5,18,0,0,143,142,1,0,0,0,143,144,1,0,0,0,144,145,1,0,0,0,145,
148,3,26,13,0,146,148,3,20,10,0,147,143,1,0,0,0,147,146,1,0,0,0,148,33,1,
0,0,0,149,155,3,42,21,0,150,153,5,19,0,0,151,154,3,38,19,0,152,154,3,16,
8,0,153,151,1,0,0,0,153,152,1,0,0,0,154,156,1,0,0,0,155,150,1,0,0,0,155,
156,1,0,0,0,156,159,1,0,0,0,157,160,3,26,13,0,158,160,3,20,10,0,159,157,
1,0,0,0,159,158,1,0,0,0,160,35,1,0,0,0,161,162,7,2,0,0,162,37,1,0,0,0,163,
167,5,15,0,0,164,166,3,44,22,0,165,164,1,0,0,0,166,169,1,0,0,0,167,165,1,
0,0,0,167,168,1,0,0,0,168,170,1,0,0,0,169,167,1,0,0,0,170,171,5,16,0,0,171,
39,1,0,0,0,172,176,5,25,0,0,173,175,7,3,0,0,174,173,1,0,0,0,175,178,1,0,
0,0,176,174,1,0,0,0,176,177,1,0,0,0,177,41,1,0,0,0,178,176,1,0,0,0,179,181,
5,26,0,0,180,179,1,0,0,0,181,182,1,0,0,0,182,180,1,0,0,0,182,183,1,0,0,0,
183,43,1,0,0,0,184,186,5,27,0,0,185,184,1,0,0,0,186,187,1,0,0,0,187,185,
1,0,0,0,187,188,1,0,0,0,188,45,1,0,0,0,21,55,61,66,71,75,82,86,108,115,120,
127,139,143,147,153,155,159,167,176,182,187];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

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



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, alpacaParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.defns();
	        this.state = 47;
	        _la = this._input.LA(1);
	        if(!(_la===1 || _la===2)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 48;
	        this.match(alpacaParser.EOF);
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.defn();
	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 51;
	            this.match(alpacaParser.T__2);
	            this.state = 52;
	            this.defn();
	            this.state = 57;
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
	        this.state = 61;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 58;
	            this.stateDefn();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 59;
	            this.classDefn();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 60;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.match(alpacaParser.T__3);
	        this.state = 64;
	        this.stateID();
	        this.state = 66;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 65;
	            this.match(alpacaParser.QUOTEDCHAR);
	        }

	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 68;
	            this.membershipDecl();
	            this.state = 73;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 75;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 74;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this.match(alpacaParser.T__4);
	        this.state = 78;
	        this.classID();
	        this.state = 82;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 79;
	            this.membershipDecl();
	            this.state = 84;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 86;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 85;
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
	        this.state = 88;
	        this.match(alpacaParser.T__5);
	        this.state = 89;
	        this.nbhdID();
	        this.state = 90;
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
	        this.state = 92;
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
	        this.state = 94;
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
	        this.state = 96;
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
	        this.state = 98;
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
	        this.state = 100;
	        this.match(alpacaParser.T__6);
	        this.state = 101;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        this.rule_();
	        this.state = 108;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 104;
	            this.match(alpacaParser.T__7);
	            this.state = 105;
	            this.rule_();
	            this.state = 110;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.match(alpacaParser.T__8);
	        this.state = 112;
	        this.stateRef();
	        this.state = 115;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===10) {
	            this.state = 113;
	            this.match(alpacaParser.T__9);
	            this.state = 114;
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
	        this.state = 120;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 25:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 117;
	            this.stateID();
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 118;
	            this.arrowchain();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 119;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.term();
	        this.state = 127;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 28672) !== 0)) {
	            this.state = 123;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 28672) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 124;
	            this.term();
	            this.state = 129;
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
	        this.state = 139;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 26:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 130;
	            this.adjacencyPred();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 131;
	            this.match(alpacaParser.T__14);
	            this.state = 132;
	            this.expression();
	            this.state = 133;
	            this.match(alpacaParser.T__15);
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 135;
	            this.match(alpacaParser.T__16);
	            this.state = 136;
	            this.term();
	            break;
	        case 20:
	        case 21:
	        case 22:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 137;
	            this.boolPrimitive();
	            break;
	        case 11:
	        case 25:
	        case 27:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 138;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141;
	        this.stateRef();
	        this.state = 147;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	        case 18:
	        case 25:
	        case 27:
	            this.state = 143;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 142;
	                this.match(alpacaParser.T__17);
	            }

	            this.state = 145;
	            this.stateRef();
	            break;
	        case 7:
	            this.state = 146;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        this.naturalnumber();
	        this.state = 155;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===19) {
	            this.state = 150;
	            this.match(alpacaParser.T__18);
	            this.state = 153;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 15:
	                this.state = 151;
	                this.neigbourhood();
	                break;
	            case 25:
	                this.state = 152;
	                this.nbhdID();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	        }

	        this.state = 159;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	        case 25:
	        case 27:
	            this.state = 157;
	            this.stateRef();
	            break;
	        case 7:
	            this.state = 158;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 161;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 7340032) !== 0))) {
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 163;
	        this.match(alpacaParser.T__14);
	        this.state = 167;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===27) {
	            this.state = 164;
	            this.arrowchain();
	            this.state = 169;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 170;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 172;
	        this.match(alpacaParser.ALPHA);
	        this.state = 176;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 173;
	                _la = this._input.LA(1);
	                if(!(_la===25 || _la===26)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                } 
	            }
	            this.state = 178;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 180; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 179;
	            this.match(alpacaParser.DIGIT);
	            this.state = 182; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===26);
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
	        this.state = 185; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 184;
	        		this.match(alpacaParser.ARROW);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 187; 
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

	EOF() {
	    return this.getToken(alpacaParser.EOF, 0);
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

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
