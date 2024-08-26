// Generated from Resources/Parsers/infosapient/infosapient.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import infosapientListener from './infosapientListener.js';
const serializedATN = [4,1,50,118,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,0,1,
0,1,0,1,0,1,1,1,1,1,1,1,2,1,2,1,2,1,2,3,2,37,8,2,1,3,1,3,1,3,1,3,1,3,1,3,
3,3,45,8,3,1,3,1,3,1,3,3,3,50,8,3,1,3,1,3,1,3,3,3,55,8,3,5,3,57,8,3,10,3,
12,3,60,9,3,3,3,62,8,3,1,4,1,4,1,4,1,4,1,4,3,4,69,8,4,1,5,1,5,1,5,3,5,74,
8,5,1,5,1,5,1,5,3,5,79,8,5,1,6,4,6,82,8,6,11,6,12,6,83,1,7,1,7,1,8,1,8,1,
8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,
8,1,8,3,8,110,8,8,1,9,1,9,1,10,1,10,1,11,1,11,1,11,0,0,12,0,2,4,6,8,10,12,
14,16,18,20,22,0,5,1,0,4,5,1,0,6,7,1,0,21,22,1,0,24,25,1,0,32,44,137,0,24,
1,0,0,0,2,29,1,0,0,0,4,32,1,0,0,0,6,61,1,0,0,0,8,68,1,0,0,0,10,70,1,0,0,
0,12,81,1,0,0,0,14,85,1,0,0,0,16,109,1,0,0,0,18,111,1,0,0,0,20,113,1,0,0,
0,22,115,1,0,0,0,24,25,5,45,0,0,25,26,3,2,1,0,26,27,3,4,2,0,27,28,5,1,0,
0,28,1,1,0,0,0,29,30,5,47,0,0,30,31,3,6,3,0,31,3,1,0,0,0,32,33,5,48,0,0,
33,36,3,10,5,0,34,35,5,49,0,0,35,37,3,10,5,0,36,34,1,0,0,0,36,37,1,0,0,0,
37,5,1,0,0,0,38,39,5,2,0,0,39,40,3,6,3,0,40,41,5,3,0,0,41,62,1,0,0,0,42,
45,3,8,4,0,43,45,3,10,5,0,44,42,1,0,0,0,44,43,1,0,0,0,45,46,1,0,0,0,46,49,
3,18,9,0,47,50,3,8,4,0,48,50,3,10,5,0,49,47,1,0,0,0,49,48,1,0,0,0,50,58,
1,0,0,0,51,54,3,18,9,0,52,55,3,8,4,0,53,55,3,10,5,0,54,52,1,0,0,0,54,53,
1,0,0,0,55,57,1,0,0,0,56,51,1,0,0,0,57,60,1,0,0,0,58,56,1,0,0,0,58,59,1,
0,0,0,59,62,1,0,0,0,60,58,1,0,0,0,61,38,1,0,0,0,61,44,1,0,0,0,62,7,1,0,0,
0,63,64,5,2,0,0,64,65,3,8,4,0,65,66,5,3,0,0,66,69,1,0,0,0,67,69,3,10,5,0,
68,63,1,0,0,0,68,67,1,0,0,0,69,9,1,0,0,0,70,71,3,22,11,0,71,73,7,0,0,0,72,
74,3,12,6,0,73,72,1,0,0,0,73,74,1,0,0,0,74,78,1,0,0,0,75,79,3,20,10,0,76,
79,3,22,11,0,77,79,3,14,7,0,78,75,1,0,0,0,78,76,1,0,0,0,78,77,1,0,0,0,79,
11,1,0,0,0,80,82,3,16,8,0,81,80,1,0,0,0,82,83,1,0,0,0,83,81,1,0,0,0,83,84,
1,0,0,0,84,13,1,0,0,0,85,86,7,1,0,0,86,15,1,0,0,0,87,110,5,8,0,0,88,110,
5,9,0,0,89,110,5,10,0,0,90,110,5,11,0,0,91,110,5,12,0,0,92,110,5,13,0,0,
93,110,5,14,0,0,94,110,5,15,0,0,95,110,5,16,0,0,96,110,5,17,0,0,97,110,5,
18,0,0,98,110,5,19,0,0,99,110,5,20,0,0,100,110,7,2,0,0,101,110,5,23,0,0,
102,110,7,3,0,0,103,110,5,26,0,0,104,110,5,27,0,0,105,110,5,28,0,0,106,110,
5,29,0,0,107,110,5,30,0,0,108,110,5,31,0,0,109,87,1,0,0,0,109,88,1,0,0,0,
109,89,1,0,0,0,109,90,1,0,0,0,109,91,1,0,0,0,109,92,1,0,0,0,109,93,1,0,0,
0,109,94,1,0,0,0,109,95,1,0,0,0,109,96,1,0,0,0,109,97,1,0,0,0,109,98,1,0,
0,0,109,99,1,0,0,0,109,100,1,0,0,0,109,101,1,0,0,0,109,102,1,0,0,0,109,103,
1,0,0,0,109,104,1,0,0,0,109,105,1,0,0,0,109,106,1,0,0,0,109,107,1,0,0,0,
109,108,1,0,0,0,110,17,1,0,0,0,111,112,7,4,0,0,112,19,1,0,0,0,113,114,5,
46,0,0,114,21,1,0,0,0,115,116,5,45,0,0,116,23,1,0,0,0,11,36,44,49,54,58,
61,68,73,78,83,109];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class infosapientParser extends antlr4.Parser {

    static grammarFileName = "infosapient.g4";
    static literalNames = [ null, "';'", "'('", "')'", "'s'", "'are'", "'increased'", 
                            "'decreased'", "'about'", "'above'", "'after'", 
                            "'around'", "'before'", "'below'", "'closeTo'", 
                            "'definitely'", "'extremely'", "'generally'", 
                            "'mostly'", "'must'", "'near'", "'negative'", 
                            "'negatively'", "'not'", "'positive'", "'positively'", 
                            "'roughly'", "'should'", "'slightly'", "'somewhat'", 
                            "'very'", "'inVicinityOf'", "'and'", "'boundedAnd'", 
                            "'cosineNot'", "'meanAnd'", "'meanOr'", "'or'", 
                            "'productAnd'", "'productOr'", "'sugenoNot'", 
                            "'thresholdNot'", "'yagerAnd'", "'yagerNot'", 
                            "'yagerOr'", null, null, "'if'", "'then'", "'else'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "IDENTIFIER", 
                             "FP_LITERAL", "IF", "THEN", "ELSE", "WS" ];
    static ruleNames = [ "conditionalRule", "premise", "consequent", "clause", 
                         "expr", "attribClause", "hedgeCollection", "restrictionHedge", 
                         "hedge", "operator_", "nLiteral", "id_" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = infosapientParser.ruleNames;
        this.literalNames = infosapientParser.literalNames;
        this.symbolicNames = infosapientParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	conditionalRule() {
	    let localctx = new ConditionalRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, infosapientParser.RULE_conditionalRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.match(infosapientParser.IDENTIFIER);
	        this.state = 25;
	        this.premise();
	        this.state = 26;
	        this.consequent();
	        this.state = 27;
	        this.match(infosapientParser.T__0);
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



	premise() {
	    let localctx = new PremiseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, infosapientParser.RULE_premise);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.match(infosapientParser.IF);
	        this.state = 30;
	        this.clause();
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



	consequent() {
	    let localctx = new ConsequentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, infosapientParser.RULE_consequent);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.match(infosapientParser.THEN);
	        this.state = 33;
	        this.attribClause();
	        this.state = 36;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===infosapientParser.ELSE) {
	            this.state = 34;
	            this.match(infosapientParser.ELSE);
	            this.state = 35;
	            this.attribClause();
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



	clause() {
	    let localctx = new ClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, infosapientParser.RULE_clause);
	    var _la = 0; // Token type
	    try {
	        this.state = 61;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 38;
	            this.match(infosapientParser.T__1);
	            this.state = 39;
	            this.clause();
	            this.state = 40;
	            this.match(infosapientParser.T__2);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 44;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 42;
	                this.expr();
	                break;

	            case 2:
	                this.state = 43;
	                this.attribClause();
	                break;

	            }
	            this.state = 46;
	            this.operator_();
	            this.state = 49;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 47;
	                this.expr();
	                break;

	            case 2:
	                this.state = 48;
	                this.attribClause();
	                break;

	            }
	            this.state = 58;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (infosapientParser.T__31 - 32)) | (1 << (infosapientParser.T__32 - 32)) | (1 << (infosapientParser.T__33 - 32)) | (1 << (infosapientParser.T__34 - 32)) | (1 << (infosapientParser.T__35 - 32)) | (1 << (infosapientParser.T__36 - 32)) | (1 << (infosapientParser.T__37 - 32)) | (1 << (infosapientParser.T__38 - 32)) | (1 << (infosapientParser.T__39 - 32)) | (1 << (infosapientParser.T__40 - 32)) | (1 << (infosapientParser.T__41 - 32)) | (1 << (infosapientParser.T__42 - 32)) | (1 << (infosapientParser.T__43 - 32)))) !== 0)) {
	                this.state = 51;
	                this.operator_();
	                this.state = 54;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 52;
	                    this.expr();
	                    break;

	                case 2:
	                    this.state = 53;
	                    this.attribClause();
	                    break;

	                }
	                this.state = 60;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
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



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, infosapientParser.RULE_expr);
	    try {
	        this.state = 68;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case infosapientParser.T__1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 63;
	            this.match(infosapientParser.T__1);
	            this.state = 64;
	            this.expr();
	            this.state = 65;
	            this.match(infosapientParser.T__2);
	            break;
	        case infosapientParser.IDENTIFIER:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 67;
	            this.attribClause();
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



	attribClause() {
	    let localctx = new AttribClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, infosapientParser.RULE_attribClause);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this.id_();
	        this.state = 71;
	        _la = this._input.LA(1);
	        if(!(_la===infosapientParser.T__3 || _la===infosapientParser.T__4)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 73;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << infosapientParser.T__7) | (1 << infosapientParser.T__8) | (1 << infosapientParser.T__9) | (1 << infosapientParser.T__10) | (1 << infosapientParser.T__11) | (1 << infosapientParser.T__12) | (1 << infosapientParser.T__13) | (1 << infosapientParser.T__14) | (1 << infosapientParser.T__15) | (1 << infosapientParser.T__16) | (1 << infosapientParser.T__17) | (1 << infosapientParser.T__18) | (1 << infosapientParser.T__19) | (1 << infosapientParser.T__20) | (1 << infosapientParser.T__21) | (1 << infosapientParser.T__22) | (1 << infosapientParser.T__23) | (1 << infosapientParser.T__24) | (1 << infosapientParser.T__25) | (1 << infosapientParser.T__26) | (1 << infosapientParser.T__27) | (1 << infosapientParser.T__28) | (1 << infosapientParser.T__29) | (1 << infosapientParser.T__30))) !== 0)) {
	            this.state = 72;
	            this.hedgeCollection();
	        }

	        this.state = 78;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case infosapientParser.FP_LITERAL:
	            this.state = 75;
	            this.nLiteral();
	            break;
	        case infosapientParser.IDENTIFIER:
	            this.state = 76;
	            this.id_();
	            break;
	        case infosapientParser.T__5:
	        case infosapientParser.T__6:
	            this.state = 77;
	            this.restrictionHedge();
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



	hedgeCollection() {
	    let localctx = new HedgeCollectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, infosapientParser.RULE_hedgeCollection);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 80;
	            this.hedge();
	            this.state = 83; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << infosapientParser.T__7) | (1 << infosapientParser.T__8) | (1 << infosapientParser.T__9) | (1 << infosapientParser.T__10) | (1 << infosapientParser.T__11) | (1 << infosapientParser.T__12) | (1 << infosapientParser.T__13) | (1 << infosapientParser.T__14) | (1 << infosapientParser.T__15) | (1 << infosapientParser.T__16) | (1 << infosapientParser.T__17) | (1 << infosapientParser.T__18) | (1 << infosapientParser.T__19) | (1 << infosapientParser.T__20) | (1 << infosapientParser.T__21) | (1 << infosapientParser.T__22) | (1 << infosapientParser.T__23) | (1 << infosapientParser.T__24) | (1 << infosapientParser.T__25) | (1 << infosapientParser.T__26) | (1 << infosapientParser.T__27) | (1 << infosapientParser.T__28) | (1 << infosapientParser.T__29) | (1 << infosapientParser.T__30))) !== 0));
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



	restrictionHedge() {
	    let localctx = new RestrictionHedgeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, infosapientParser.RULE_restrictionHedge);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        _la = this._input.LA(1);
	        if(!(_la===infosapientParser.T__5 || _la===infosapientParser.T__6)) {
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



	hedge() {
	    let localctx = new HedgeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, infosapientParser.RULE_hedge);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case infosapientParser.T__7:
	            this.state = 87;
	            this.match(infosapientParser.T__7);
	            break;
	        case infosapientParser.T__8:
	            this.state = 88;
	            this.match(infosapientParser.T__8);
	            break;
	        case infosapientParser.T__9:
	            this.state = 89;
	            this.match(infosapientParser.T__9);
	            break;
	        case infosapientParser.T__10:
	            this.state = 90;
	            this.match(infosapientParser.T__10);
	            break;
	        case infosapientParser.T__11:
	            this.state = 91;
	            this.match(infosapientParser.T__11);
	            break;
	        case infosapientParser.T__12:
	            this.state = 92;
	            this.match(infosapientParser.T__12);
	            break;
	        case infosapientParser.T__13:
	            this.state = 93;
	            this.match(infosapientParser.T__13);
	            break;
	        case infosapientParser.T__14:
	            this.state = 94;
	            this.match(infosapientParser.T__14);
	            break;
	        case infosapientParser.T__15:
	            this.state = 95;
	            this.match(infosapientParser.T__15);
	            break;
	        case infosapientParser.T__16:
	            this.state = 96;
	            this.match(infosapientParser.T__16);
	            break;
	        case infosapientParser.T__17:
	            this.state = 97;
	            this.match(infosapientParser.T__17);
	            break;
	        case infosapientParser.T__18:
	            this.state = 98;
	            this.match(infosapientParser.T__18);
	            break;
	        case infosapientParser.T__19:
	            this.state = 99;
	            this.match(infosapientParser.T__19);
	            break;
	        case infosapientParser.T__20:
	        case infosapientParser.T__21:
	            this.state = 100;
	            _la = this._input.LA(1);
	            if(!(_la===infosapientParser.T__20 || _la===infosapientParser.T__21)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case infosapientParser.T__22:
	            this.state = 101;
	            this.match(infosapientParser.T__22);
	            break;
	        case infosapientParser.T__23:
	        case infosapientParser.T__24:
	            this.state = 102;
	            _la = this._input.LA(1);
	            if(!(_la===infosapientParser.T__23 || _la===infosapientParser.T__24)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case infosapientParser.T__25:
	            this.state = 103;
	            this.match(infosapientParser.T__25);
	            break;
	        case infosapientParser.T__26:
	            this.state = 104;
	            this.match(infosapientParser.T__26);
	            break;
	        case infosapientParser.T__27:
	            this.state = 105;
	            this.match(infosapientParser.T__27);
	            break;
	        case infosapientParser.T__28:
	            this.state = 106;
	            this.match(infosapientParser.T__28);
	            break;
	        case infosapientParser.T__29:
	            this.state = 107;
	            this.match(infosapientParser.T__29);
	            break;
	        case infosapientParser.T__30:
	            this.state = 108;
	            this.match(infosapientParser.T__30);
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



	operator_() {
	    let localctx = new Operator_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, infosapientParser.RULE_operator_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        _la = this._input.LA(1);
	        if(!(((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (infosapientParser.T__31 - 32)) | (1 << (infosapientParser.T__32 - 32)) | (1 << (infosapientParser.T__33 - 32)) | (1 << (infosapientParser.T__34 - 32)) | (1 << (infosapientParser.T__35 - 32)) | (1 << (infosapientParser.T__36 - 32)) | (1 << (infosapientParser.T__37 - 32)) | (1 << (infosapientParser.T__38 - 32)) | (1 << (infosapientParser.T__39 - 32)) | (1 << (infosapientParser.T__40 - 32)) | (1 << (infosapientParser.T__41 - 32)) | (1 << (infosapientParser.T__42 - 32)) | (1 << (infosapientParser.T__43 - 32)))) !== 0))) {
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



	nLiteral() {
	    let localctx = new NLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, infosapientParser.RULE_nLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        this.match(infosapientParser.FP_LITERAL);
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



	id_() {
	    let localctx = new Id_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, infosapientParser.RULE_id_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        this.match(infosapientParser.IDENTIFIER);
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

infosapientParser.EOF = antlr4.Token.EOF;
infosapientParser.T__0 = 1;
infosapientParser.T__1 = 2;
infosapientParser.T__2 = 3;
infosapientParser.T__3 = 4;
infosapientParser.T__4 = 5;
infosapientParser.T__5 = 6;
infosapientParser.T__6 = 7;
infosapientParser.T__7 = 8;
infosapientParser.T__8 = 9;
infosapientParser.T__9 = 10;
infosapientParser.T__10 = 11;
infosapientParser.T__11 = 12;
infosapientParser.T__12 = 13;
infosapientParser.T__13 = 14;
infosapientParser.T__14 = 15;
infosapientParser.T__15 = 16;
infosapientParser.T__16 = 17;
infosapientParser.T__17 = 18;
infosapientParser.T__18 = 19;
infosapientParser.T__19 = 20;
infosapientParser.T__20 = 21;
infosapientParser.T__21 = 22;
infosapientParser.T__22 = 23;
infosapientParser.T__23 = 24;
infosapientParser.T__24 = 25;
infosapientParser.T__25 = 26;
infosapientParser.T__26 = 27;
infosapientParser.T__27 = 28;
infosapientParser.T__28 = 29;
infosapientParser.T__29 = 30;
infosapientParser.T__30 = 31;
infosapientParser.T__31 = 32;
infosapientParser.T__32 = 33;
infosapientParser.T__33 = 34;
infosapientParser.T__34 = 35;
infosapientParser.T__35 = 36;
infosapientParser.T__36 = 37;
infosapientParser.T__37 = 38;
infosapientParser.T__38 = 39;
infosapientParser.T__39 = 40;
infosapientParser.T__40 = 41;
infosapientParser.T__41 = 42;
infosapientParser.T__42 = 43;
infosapientParser.T__43 = 44;
infosapientParser.IDENTIFIER = 45;
infosapientParser.FP_LITERAL = 46;
infosapientParser.IF = 47;
infosapientParser.THEN = 48;
infosapientParser.ELSE = 49;
infosapientParser.WS = 50;

infosapientParser.RULE_conditionalRule = 0;
infosapientParser.RULE_premise = 1;
infosapientParser.RULE_consequent = 2;
infosapientParser.RULE_clause = 3;
infosapientParser.RULE_expr = 4;
infosapientParser.RULE_attribClause = 5;
infosapientParser.RULE_hedgeCollection = 6;
infosapientParser.RULE_restrictionHedge = 7;
infosapientParser.RULE_hedge = 8;
infosapientParser.RULE_operator_ = 9;
infosapientParser.RULE_nLiteral = 10;
infosapientParser.RULE_id_ = 11;

class ConditionalRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = infosapientParser.RULE_conditionalRule;
    }

	IDENTIFIER() {
	    return this.getToken(infosapientParser.IDENTIFIER, 0);
	};

	premise() {
	    return this.getTypedRuleContext(PremiseContext,0);
	};

	consequent() {
	    return this.getTypedRuleContext(ConsequentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof infosapientListener ) {
	        listener.enterConditionalRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof infosapientListener ) {
	        listener.exitConditionalRule(this);
		}
	}


}



class PremiseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = infosapientParser.RULE_premise;
    }

	IF() {
	    return this.getToken(infosapientParser.IF, 0);
	};

	clause() {
	    return this.getTypedRuleContext(ClauseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof infosapientListener ) {
	        listener.enterPremise(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof infosapientListener ) {
	        listener.exitPremise(this);
		}
	}


}



class ConsequentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = infosapientParser.RULE_consequent;
    }

	THEN() {
	    return this.getToken(infosapientParser.THEN, 0);
	};

	attribClause = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AttribClauseContext);
	    } else {
	        return this.getTypedRuleContext(AttribClauseContext,i);
	    }
	};

	ELSE() {
	    return this.getToken(infosapientParser.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof infosapientListener ) {
	        listener.enterConsequent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof infosapientListener ) {
	        listener.exitConsequent(this);
		}
	}


}



class ClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = infosapientParser.RULE_clause;
    }

	clause() {
	    return this.getTypedRuleContext(ClauseContext,0);
	};

	operator_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Operator_Context);
	    } else {
	        return this.getTypedRuleContext(Operator_Context,i);
	    }
	};

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

	attribClause = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AttribClauseContext);
	    } else {
	        return this.getTypedRuleContext(AttribClauseContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof infosapientListener ) {
	        listener.enterClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof infosapientListener ) {
	        listener.exitClause(this);
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
        this.ruleIndex = infosapientParser.RULE_expr;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	attribClause() {
	    return this.getTypedRuleContext(AttribClauseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof infosapientListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof infosapientListener ) {
	        listener.exitExpr(this);
		}
	}


}



class AttribClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = infosapientParser.RULE_attribClause;
    }

	id_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Id_Context);
	    } else {
	        return this.getTypedRuleContext(Id_Context,i);
	    }
	};

	nLiteral() {
	    return this.getTypedRuleContext(NLiteralContext,0);
	};

	restrictionHedge() {
	    return this.getTypedRuleContext(RestrictionHedgeContext,0);
	};

	hedgeCollection() {
	    return this.getTypedRuleContext(HedgeCollectionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof infosapientListener ) {
	        listener.enterAttribClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof infosapientListener ) {
	        listener.exitAttribClause(this);
		}
	}


}



class HedgeCollectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = infosapientParser.RULE_hedgeCollection;
    }

	hedge = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(HedgeContext);
	    } else {
	        return this.getTypedRuleContext(HedgeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof infosapientListener ) {
	        listener.enterHedgeCollection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof infosapientListener ) {
	        listener.exitHedgeCollection(this);
		}
	}


}



class RestrictionHedgeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = infosapientParser.RULE_restrictionHedge;
    }


	enterRule(listener) {
	    if(listener instanceof infosapientListener ) {
	        listener.enterRestrictionHedge(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof infosapientListener ) {
	        listener.exitRestrictionHedge(this);
		}
	}


}



class HedgeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = infosapientParser.RULE_hedge;
    }


	enterRule(listener) {
	    if(listener instanceof infosapientListener ) {
	        listener.enterHedge(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof infosapientListener ) {
	        listener.exitHedge(this);
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
        this.ruleIndex = infosapientParser.RULE_operator_;
    }


	enterRule(listener) {
	    if(listener instanceof infosapientListener ) {
	        listener.enterOperator_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof infosapientListener ) {
	        listener.exitOperator_(this);
		}
	}


}



class NLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = infosapientParser.RULE_nLiteral;
    }

	FP_LITERAL() {
	    return this.getToken(infosapientParser.FP_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof infosapientListener ) {
	        listener.enterNLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof infosapientListener ) {
	        listener.exitNLiteral(this);
		}
	}


}



class Id_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = infosapientParser.RULE_id_;
    }

	IDENTIFIER() {
	    return this.getToken(infosapientParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof infosapientListener ) {
	        listener.enterId_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof infosapientListener ) {
	        listener.exitId_(this);
		}
	}


}




infosapientParser.ConditionalRuleContext = ConditionalRuleContext; 
infosapientParser.PremiseContext = PremiseContext; 
infosapientParser.ConsequentContext = ConsequentContext; 
infosapientParser.ClauseContext = ClauseContext; 
infosapientParser.ExprContext = ExprContext; 
infosapientParser.AttribClauseContext = AttribClauseContext; 
infosapientParser.HedgeCollectionContext = HedgeCollectionContext; 
infosapientParser.RestrictionHedgeContext = RestrictionHedgeContext; 
infosapientParser.HedgeContext = HedgeContext; 
infosapientParser.Operator_Context = Operator_Context; 
infosapientParser.NLiteralContext = NLiteralContext; 
infosapientParser.Id_Context = Id_Context; 
