// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/infosapient/infosapient.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import infosapientListener from './infosapientListener.js';
const serializedATN = [4,1,50,119,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,0,1,
0,1,0,1,0,1,0,1,1,1,1,1,1,1,2,1,2,1,2,1,2,3,2,38,8,2,1,3,1,3,1,3,1,3,1,3,
1,3,3,3,46,8,3,1,3,1,3,1,3,3,3,51,8,3,1,3,1,3,1,3,3,3,56,8,3,5,3,58,8,3,
10,3,12,3,61,9,3,3,3,63,8,3,1,4,1,4,1,4,1,4,1,4,3,4,70,8,4,1,5,1,5,1,5,3,
5,75,8,5,1,5,1,5,1,5,3,5,80,8,5,1,6,4,6,83,8,6,11,6,12,6,84,1,7,1,7,1,8,
1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,
1,8,1,8,1,8,3,8,111,8,8,1,9,1,9,1,10,1,10,1,11,1,11,1,11,0,0,12,0,2,4,6,
8,10,12,14,16,18,20,22,0,5,1,0,4,5,1,0,6,7,1,0,21,22,1,0,24,25,1,0,32,44,
138,0,24,1,0,0,0,2,30,1,0,0,0,4,33,1,0,0,0,6,62,1,0,0,0,8,69,1,0,0,0,10,
71,1,0,0,0,12,82,1,0,0,0,14,86,1,0,0,0,16,110,1,0,0,0,18,112,1,0,0,0,20,
114,1,0,0,0,22,116,1,0,0,0,24,25,5,45,0,0,25,26,3,2,1,0,26,27,3,4,2,0,27,
28,5,1,0,0,28,29,5,0,0,1,29,1,1,0,0,0,30,31,5,47,0,0,31,32,3,6,3,0,32,3,
1,0,0,0,33,34,5,48,0,0,34,37,3,10,5,0,35,36,5,49,0,0,36,38,3,10,5,0,37,35,
1,0,0,0,37,38,1,0,0,0,38,5,1,0,0,0,39,40,5,2,0,0,40,41,3,6,3,0,41,42,5,3,
0,0,42,63,1,0,0,0,43,46,3,8,4,0,44,46,3,10,5,0,45,43,1,0,0,0,45,44,1,0,0,
0,46,47,1,0,0,0,47,50,3,18,9,0,48,51,3,8,4,0,49,51,3,10,5,0,50,48,1,0,0,
0,50,49,1,0,0,0,51,59,1,0,0,0,52,55,3,18,9,0,53,56,3,8,4,0,54,56,3,10,5,
0,55,53,1,0,0,0,55,54,1,0,0,0,56,58,1,0,0,0,57,52,1,0,0,0,58,61,1,0,0,0,
59,57,1,0,0,0,59,60,1,0,0,0,60,63,1,0,0,0,61,59,1,0,0,0,62,39,1,0,0,0,62,
45,1,0,0,0,63,7,1,0,0,0,64,65,5,2,0,0,65,66,3,8,4,0,66,67,5,3,0,0,67,70,
1,0,0,0,68,70,3,10,5,0,69,64,1,0,0,0,69,68,1,0,0,0,70,9,1,0,0,0,71,72,3,
22,11,0,72,74,7,0,0,0,73,75,3,12,6,0,74,73,1,0,0,0,74,75,1,0,0,0,75,79,1,
0,0,0,76,80,3,20,10,0,77,80,3,22,11,0,78,80,3,14,7,0,79,76,1,0,0,0,79,77,
1,0,0,0,79,78,1,0,0,0,80,11,1,0,0,0,81,83,3,16,8,0,82,81,1,0,0,0,83,84,1,
0,0,0,84,82,1,0,0,0,84,85,1,0,0,0,85,13,1,0,0,0,86,87,7,1,0,0,87,15,1,0,
0,0,88,111,5,8,0,0,89,111,5,9,0,0,90,111,5,10,0,0,91,111,5,11,0,0,92,111,
5,12,0,0,93,111,5,13,0,0,94,111,5,14,0,0,95,111,5,15,0,0,96,111,5,16,0,0,
97,111,5,17,0,0,98,111,5,18,0,0,99,111,5,19,0,0,100,111,5,20,0,0,101,111,
7,2,0,0,102,111,5,23,0,0,103,111,7,3,0,0,104,111,5,26,0,0,105,111,5,27,0,
0,106,111,5,28,0,0,107,111,5,29,0,0,108,111,5,30,0,0,109,111,5,31,0,0,110,
88,1,0,0,0,110,89,1,0,0,0,110,90,1,0,0,0,110,91,1,0,0,0,110,92,1,0,0,0,110,
93,1,0,0,0,110,94,1,0,0,0,110,95,1,0,0,0,110,96,1,0,0,0,110,97,1,0,0,0,110,
98,1,0,0,0,110,99,1,0,0,0,110,100,1,0,0,0,110,101,1,0,0,0,110,102,1,0,0,
0,110,103,1,0,0,0,110,104,1,0,0,0,110,105,1,0,0,0,110,106,1,0,0,0,110,107,
1,0,0,0,110,108,1,0,0,0,110,109,1,0,0,0,111,17,1,0,0,0,112,113,7,4,0,0,113,
19,1,0,0,0,114,115,5,46,0,0,115,21,1,0,0,0,116,117,5,45,0,0,117,23,1,0,0,
0,11,37,45,50,55,59,62,69,74,79,84,110];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

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
	        this.state = 28;
	        this.match(infosapientParser.EOF);
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
	        this.state = 30;
	        this.match(infosapientParser.IF);
	        this.state = 31;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(infosapientParser.THEN);
	        this.state = 34;
	        this.attribClause();
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===49) {
	            this.state = 35;
	            this.match(infosapientParser.ELSE);
	            this.state = 36;
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
	    var _la = 0;
	    try {
	        this.state = 62;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 39;
	            this.match(infosapientParser.T__1);
	            this.state = 40;
	            this.clause();
	            this.state = 41;
	            this.match(infosapientParser.T__2);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 45;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 43;
	                this.expr();
	                break;

	            case 2:
	                this.state = 44;
	                this.attribClause();
	                break;

	            }
	            this.state = 47;
	            this.operator_();
	            this.state = 50;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 48;
	                this.expr();
	                break;

	            case 2:
	                this.state = 49;
	                this.attribClause();
	                break;

	            }
	            this.state = 59;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 8191) !== 0)) {
	                this.state = 52;
	                this.operator_();
	                this.state = 55;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 53;
	                    this.expr();
	                    break;

	                case 2:
	                    this.state = 54;
	                    this.attribClause();
	                    break;

	                }
	                this.state = 61;
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
	        this.state = 69;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 64;
	            this.match(infosapientParser.T__1);
	            this.state = 65;
	            this.expr();
	            this.state = 66;
	            this.match(infosapientParser.T__2);
	            break;
	        case 45:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 68;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.id_();
	        this.state = 72;
	        _la = this._input.LA(1);
	        if(!(_la===4 || _la===5)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 74;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967040) !== 0)) {
	            this.state = 73;
	            this.hedgeCollection();
	        }

	        this.state = 79;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 46:
	            this.state = 76;
	            this.nLiteral();
	            break;
	        case 45:
	            this.state = 77;
	            this.id_();
	            break;
	        case 6:
	        case 7:
	            this.state = 78;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 81;
	            this.hedge();
	            this.state = 84; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967040) !== 0));
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        _la = this._input.LA(1);
	        if(!(_la===6 || _la===7)) {
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.state = 88;
	            this.match(infosapientParser.T__7);
	            break;
	        case 9:
	            this.state = 89;
	            this.match(infosapientParser.T__8);
	            break;
	        case 10:
	            this.state = 90;
	            this.match(infosapientParser.T__9);
	            break;
	        case 11:
	            this.state = 91;
	            this.match(infosapientParser.T__10);
	            break;
	        case 12:
	            this.state = 92;
	            this.match(infosapientParser.T__11);
	            break;
	        case 13:
	            this.state = 93;
	            this.match(infosapientParser.T__12);
	            break;
	        case 14:
	            this.state = 94;
	            this.match(infosapientParser.T__13);
	            break;
	        case 15:
	            this.state = 95;
	            this.match(infosapientParser.T__14);
	            break;
	        case 16:
	            this.state = 96;
	            this.match(infosapientParser.T__15);
	            break;
	        case 17:
	            this.state = 97;
	            this.match(infosapientParser.T__16);
	            break;
	        case 18:
	            this.state = 98;
	            this.match(infosapientParser.T__17);
	            break;
	        case 19:
	            this.state = 99;
	            this.match(infosapientParser.T__18);
	            break;
	        case 20:
	            this.state = 100;
	            this.match(infosapientParser.T__19);
	            break;
	        case 21:
	        case 22:
	            this.state = 101;
	            _la = this._input.LA(1);
	            if(!(_la===21 || _la===22)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case 23:
	            this.state = 102;
	            this.match(infosapientParser.T__22);
	            break;
	        case 24:
	        case 25:
	            this.state = 103;
	            _la = this._input.LA(1);
	            if(!(_la===24 || _la===25)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case 26:
	            this.state = 104;
	            this.match(infosapientParser.T__25);
	            break;
	        case 27:
	            this.state = 105;
	            this.match(infosapientParser.T__26);
	            break;
	        case 28:
	            this.state = 106;
	            this.match(infosapientParser.T__27);
	            break;
	        case 29:
	            this.state = 107;
	            this.match(infosapientParser.T__28);
	            break;
	        case 30:
	            this.state = 108;
	            this.match(infosapientParser.T__29);
	            break;
	        case 31:
	            this.state = 109;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        _la = this._input.LA(1);
	        if(!(((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 8191) !== 0))) {
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
	        this.state = 114;
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
	        this.state = 116;
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

	EOF() {
	    return this.getToken(infosapientParser.EOF, 0);
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

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
