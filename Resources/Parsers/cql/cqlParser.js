// Generated from Resources/Parsers/cql/cql.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import cqlListener from './cqlListener.js';
const serializedATN = [4,1,18,171,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,
1,3,1,58,8,1,3,1,60,8,1,1,2,1,2,1,2,1,2,1,2,5,2,67,8,2,10,2,12,2,70,9,2,
1,3,1,3,3,3,74,8,3,1,4,1,4,1,4,1,4,3,4,80,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,
5,3,5,89,8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,5,6,98,8,6,10,6,12,6,101,9,6,1,
7,1,7,3,7,105,8,7,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,118,8,
9,1,10,1,10,3,10,122,8,10,1,11,1,11,3,11,126,8,11,1,12,1,12,1,13,1,13,1,
14,1,14,1,14,1,14,1,14,5,14,137,8,14,10,14,12,14,140,9,14,1,15,1,15,1,15,
1,15,1,15,3,15,147,8,15,1,16,1,16,1,17,1,17,1,18,1,18,1,19,1,19,1,20,1,20,
1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,3,22,167,8,22,1,23,1,23,1,23,0,3,
4,12,28,24,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,
44,46,0,3,1,0,11,14,2,0,1,2,5,9,1,0,16,17,165,0,48,1,0,0,0,2,59,1,0,0,0,
4,61,1,0,0,0,6,71,1,0,0,0,8,79,1,0,0,0,10,88,1,0,0,0,12,90,1,0,0,0,14,102,
1,0,0,0,16,106,1,0,0,0,18,117,1,0,0,0,20,119,1,0,0,0,22,125,1,0,0,0,24,127,
1,0,0,0,26,129,1,0,0,0,28,131,1,0,0,0,30,141,1,0,0,0,32,148,1,0,0,0,34,150,
1,0,0,0,36,152,1,0,0,0,38,154,1,0,0,0,40,156,1,0,0,0,42,158,1,0,0,0,44,166,
1,0,0,0,46,168,1,0,0,0,48,49,3,2,1,0,49,50,5,0,0,1,50,1,1,0,0,0,51,52,3,
10,5,0,52,53,3,2,1,0,53,60,1,0,0,0,54,57,3,12,6,0,55,56,5,15,0,0,56,58,3,
4,2,0,57,55,1,0,0,0,57,58,1,0,0,0,58,60,1,0,0,0,59,51,1,0,0,0,59,54,1,0,
0,0,60,3,1,0,0,0,61,62,6,2,-1,0,62,63,3,6,3,0,63,68,1,0,0,0,64,65,10,2,0,
0,65,67,3,6,3,0,66,64,1,0,0,0,67,70,1,0,0,0,68,66,1,0,0,0,68,69,1,0,0,0,
69,5,1,0,0,0,70,68,1,0,0,0,71,73,3,42,21,0,72,74,3,28,14,0,73,72,1,0,0,0,
73,74,1,0,0,0,74,7,1,0,0,0,75,76,3,10,5,0,76,77,3,8,4,0,77,80,1,0,0,0,78,
80,3,12,6,0,79,75,1,0,0,0,79,78,1,0,0,0,80,9,1,0,0,0,81,82,5,1,0,0,82,83,
3,32,16,0,83,84,5,2,0,0,84,85,3,34,17,0,85,89,1,0,0,0,86,87,5,1,0,0,87,89,
3,34,17,0,88,81,1,0,0,0,88,86,1,0,0,0,89,11,1,0,0,0,90,91,6,6,-1,0,91,92,
3,18,9,0,92,99,1,0,0,0,93,94,10,2,0,0,94,95,3,14,7,0,95,96,3,18,9,0,96,98,
1,0,0,0,97,93,1,0,0,0,98,101,1,0,0,0,99,97,1,0,0,0,99,100,1,0,0,0,100,13,
1,0,0,0,101,99,1,0,0,0,102,104,3,16,8,0,103,105,3,28,14,0,104,103,1,0,0,
0,104,105,1,0,0,0,105,15,1,0,0,0,106,107,7,0,0,0,107,17,1,0,0,0,108,109,
5,3,0,0,109,110,3,8,4,0,110,111,5,4,0,0,111,118,1,0,0,0,112,113,3,42,21,
0,113,114,3,20,10,0,114,115,3,40,20,0,115,118,1,0,0,0,116,118,3,40,20,0,
117,108,1,0,0,0,117,112,1,0,0,0,117,116,1,0,0,0,118,19,1,0,0,0,119,121,3,
22,11,0,120,122,3,28,14,0,121,120,1,0,0,0,121,122,1,0,0,0,122,21,1,0,0,0,
123,126,3,24,12,0,124,126,3,26,13,0,125,123,1,0,0,0,125,124,1,0,0,0,126,
23,1,0,0,0,127,128,7,1,0,0,128,25,1,0,0,0,129,130,3,46,23,0,130,27,1,0,0,
0,131,132,6,14,-1,0,132,133,3,30,15,0,133,138,1,0,0,0,134,135,10,2,0,0,135,
137,3,30,15,0,136,134,1,0,0,0,137,140,1,0,0,0,138,136,1,0,0,0,138,139,1,
0,0,0,139,29,1,0,0,0,140,138,1,0,0,0,141,142,5,10,0,0,142,146,3,36,18,0,
143,144,3,24,12,0,144,145,3,38,19,0,145,147,1,0,0,0,146,143,1,0,0,0,146,
147,1,0,0,0,147,31,1,0,0,0,148,149,3,44,22,0,149,33,1,0,0,0,150,151,3,44,
22,0,151,35,1,0,0,0,152,153,3,44,22,0,153,37,1,0,0,0,154,155,3,44,22,0,155,
39,1,0,0,0,156,157,3,44,22,0,157,41,1,0,0,0,158,159,3,44,22,0,159,43,1,0,
0,0,160,167,3,46,23,0,161,167,5,11,0,0,162,167,5,12,0,0,163,167,5,13,0,0,
164,167,5,14,0,0,165,167,5,15,0,0,166,160,1,0,0,0,166,161,1,0,0,0,166,162,
1,0,0,0,166,163,1,0,0,0,166,164,1,0,0,0,166,165,1,0,0,0,167,45,1,0,0,0,168,
169,7,2,0,0,169,47,1,0,0,0,14,57,59,68,73,79,88,99,104,117,121,125,138,146,
166];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class cqlParser extends antlr4.Parser {

    static grammarFileName = "cql.g4";
    static literalNames = [ null, "'>'", "'='", "'('", "')'", "'<'", "'>='", 
                            "'<='", "'<>'", "'=='", "'/'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, "AND", "OR", "NOT", "PROX", 
                             "SORTBY", "CHARSTRING1", "CHARSTRING2", "WS" ];
    static ruleNames = [ "cql", "sortedQuery", "sortSpec", "singleSpec", 
                         "cqlQuery", "prefixAssignment", "scopedClause", 
                         "booleanGroup", "boolean_", "searchClause", "relation", 
                         "comparitor", "comparitorSymbol", "namedComparitor", 
                         "modifierList", "modifier", "prefix_", "uri", "modifierName", 
                         "modifierValue", "searchTerm", "index", "term", 
                         "identifier" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = cqlParser.ruleNames;
        this.literalNames = cqlParser.literalNames;
        this.symbolicNames = cqlParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 2:
    	    		return this.sortSpec_sempred(localctx, predIndex);
    	case 6:
    	    		return this.scopedClause_sempred(localctx, predIndex);
    	case 14:
    	    		return this.modifierList_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    sortSpec_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    scopedClause_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    modifierList_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	cql() {
	    let localctx = new CqlContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, cqlParser.RULE_cql);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.sortedQuery();
	        this.state = 49;
	        this.match(cqlParser.EOF);
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



	sortedQuery() {
	    let localctx = new SortedQueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, cqlParser.RULE_sortedQuery);
	    var _la = 0; // Token type
	    try {
	        this.state = 59;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case cqlParser.T__0:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 51;
	            this.prefixAssignment();
	            this.state = 52;
	            this.sortedQuery();
	            break;
	        case cqlParser.T__2:
	        case cqlParser.AND:
	        case cqlParser.OR:
	        case cqlParser.NOT:
	        case cqlParser.PROX:
	        case cqlParser.SORTBY:
	        case cqlParser.CHARSTRING1:
	        case cqlParser.CHARSTRING2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 54;
	            this.scopedClause(0);
	            this.state = 57;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===cqlParser.SORTBY) {
	                this.state = 55;
	                this.match(cqlParser.SORTBY);
	                this.state = 56;
	                this.sortSpec(0);
	            }

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


	sortSpec(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new SortSpecContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 4;
	    this.enterRecursionRule(localctx, 4, cqlParser.RULE_sortSpec, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.singleSpec();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 68;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new SortSpecContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, cqlParser.RULE_sortSpec);
	                this.state = 64;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 65;
	                this.singleSpec(); 
	            }
	            this.state = 70;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	singleSpec() {
	    let localctx = new SingleSpecContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, cqlParser.RULE_singleSpec);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.index();
	        this.state = 73;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        if(la_===1) {
	            this.state = 72;
	            this.modifierList(0);

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



	cqlQuery() {
	    let localctx = new CqlQueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, cqlParser.RULE_cqlQuery);
	    try {
	        this.state = 79;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case cqlParser.T__0:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 75;
	            this.prefixAssignment();
	            this.state = 76;
	            this.cqlQuery();
	            break;
	        case cqlParser.T__2:
	        case cqlParser.AND:
	        case cqlParser.OR:
	        case cqlParser.NOT:
	        case cqlParser.PROX:
	        case cqlParser.SORTBY:
	        case cqlParser.CHARSTRING1:
	        case cqlParser.CHARSTRING2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 78;
	            this.scopedClause(0);
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



	prefixAssignment() {
	    let localctx = new PrefixAssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, cqlParser.RULE_prefixAssignment);
	    try {
	        this.state = 88;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 81;
	            this.match(cqlParser.T__0);
	            this.state = 82;
	            this.prefix_();
	            this.state = 83;
	            this.match(cqlParser.T__1);
	            this.state = 84;
	            this.uri();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 86;
	            this.match(cqlParser.T__0);
	            this.state = 87;
	            this.uri();
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


	scopedClause(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ScopedClauseContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 12;
	    this.enterRecursionRule(localctx, 12, cqlParser.RULE_scopedClause, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.searchClause();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 99;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ScopedClauseContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, cqlParser.RULE_scopedClause);
	                this.state = 93;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 94;
	                this.booleanGroup();
	                this.state = 95;
	                this.searchClause(); 
	            }
	            this.state = 101;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	booleanGroup() {
	    let localctx = new BooleanGroupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, cqlParser.RULE_booleanGroup);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.boolean_();
	        this.state = 104;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===cqlParser.T__9) {
	            this.state = 103;
	            this.modifierList(0);
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



	boolean_() {
	    let localctx = new Boolean_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, cqlParser.RULE_boolean_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << cqlParser.AND) | (1 << cqlParser.OR) | (1 << cqlParser.NOT) | (1 << cqlParser.PROX))) !== 0))) {
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



	searchClause() {
	    let localctx = new SearchClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, cqlParser.RULE_searchClause);
	    try {
	        this.state = 117;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 108;
	            this.match(cqlParser.T__2);
	            this.state = 109;
	            this.cqlQuery();
	            this.state = 110;
	            this.match(cqlParser.T__3);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 112;
	            this.index();
	            this.state = 113;
	            this.relation();
	            this.state = 114;
	            this.searchTerm();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 116;
	            this.searchTerm();
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



	relation() {
	    let localctx = new RelationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, cqlParser.RULE_relation);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        this.comparitor();
	        this.state = 121;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===cqlParser.T__9) {
	            this.state = 120;
	            this.modifierList(0);
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



	comparitor() {
	    let localctx = new ComparitorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, cqlParser.RULE_comparitor);
	    try {
	        this.state = 125;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case cqlParser.T__0:
	        case cqlParser.T__1:
	        case cqlParser.T__4:
	        case cqlParser.T__5:
	        case cqlParser.T__6:
	        case cqlParser.T__7:
	        case cqlParser.T__8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 123;
	            this.comparitorSymbol();
	            break;
	        case cqlParser.CHARSTRING1:
	        case cqlParser.CHARSTRING2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 124;
	            this.namedComparitor();
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



	comparitorSymbol() {
	    let localctx = new ComparitorSymbolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, cqlParser.RULE_comparitorSymbol);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << cqlParser.T__0) | (1 << cqlParser.T__1) | (1 << cqlParser.T__4) | (1 << cqlParser.T__5) | (1 << cqlParser.T__6) | (1 << cqlParser.T__7) | (1 << cqlParser.T__8))) !== 0))) {
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



	namedComparitor() {
	    let localctx = new NamedComparitorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, cqlParser.RULE_namedComparitor);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
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


	modifierList(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ModifierListContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 28;
	    this.enterRecursionRule(localctx, 28, cqlParser.RULE_modifierList, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 132;
	        this.modifier();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 138;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ModifierListContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, cqlParser.RULE_modifierList);
	                this.state = 134;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 135;
	                this.modifier(); 
	            }
	            this.state = 140;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	modifier() {
	    let localctx = new ModifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, cqlParser.RULE_modifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141;
	        this.match(cqlParser.T__9);
	        this.state = 142;
	        this.modifierName();
	        this.state = 146;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        if(la_===1) {
	            this.state = 143;
	            this.comparitorSymbol();
	            this.state = 144;
	            this.modifierValue();

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



	prefix_() {
	    let localctx = new Prefix_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, cqlParser.RULE_prefix_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 148;
	        this.term();
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



	uri() {
	    let localctx = new UriContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, cqlParser.RULE_uri);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 150;
	        this.term();
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



	modifierName() {
	    let localctx = new ModifierNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, cqlParser.RULE_modifierName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
	        this.term();
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



	modifierValue() {
	    let localctx = new ModifierValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, cqlParser.RULE_modifierValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this.term();
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



	searchTerm() {
	    let localctx = new SearchTermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, cqlParser.RULE_searchTerm);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
	        this.term();
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



	index() {
	    let localctx = new IndexContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, cqlParser.RULE_index);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        this.term();
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
	    this.enterRule(localctx, 44, cqlParser.RULE_term);
	    try {
	        this.state = 166;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case cqlParser.CHARSTRING1:
	        case cqlParser.CHARSTRING2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 160;
	            this.identifier();
	            break;
	        case cqlParser.AND:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 161;
	            this.match(cqlParser.AND);
	            break;
	        case cqlParser.OR:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 162;
	            this.match(cqlParser.OR);
	            break;
	        case cqlParser.NOT:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 163;
	            this.match(cqlParser.NOT);
	            break;
	        case cqlParser.PROX:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 164;
	            this.match(cqlParser.PROX);
	            break;
	        case cqlParser.SORTBY:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 165;
	            this.match(cqlParser.SORTBY);
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



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, cqlParser.RULE_identifier);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        _la = this._input.LA(1);
	        if(!(_la===cqlParser.CHARSTRING1 || _la===cqlParser.CHARSTRING2)) {
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

cqlParser.EOF = antlr4.Token.EOF;
cqlParser.T__0 = 1;
cqlParser.T__1 = 2;
cqlParser.T__2 = 3;
cqlParser.T__3 = 4;
cqlParser.T__4 = 5;
cqlParser.T__5 = 6;
cqlParser.T__6 = 7;
cqlParser.T__7 = 8;
cqlParser.T__8 = 9;
cqlParser.T__9 = 10;
cqlParser.AND = 11;
cqlParser.OR = 12;
cqlParser.NOT = 13;
cqlParser.PROX = 14;
cqlParser.SORTBY = 15;
cqlParser.CHARSTRING1 = 16;
cqlParser.CHARSTRING2 = 17;
cqlParser.WS = 18;

cqlParser.RULE_cql = 0;
cqlParser.RULE_sortedQuery = 1;
cqlParser.RULE_sortSpec = 2;
cqlParser.RULE_singleSpec = 3;
cqlParser.RULE_cqlQuery = 4;
cqlParser.RULE_prefixAssignment = 5;
cqlParser.RULE_scopedClause = 6;
cqlParser.RULE_booleanGroup = 7;
cqlParser.RULE_boolean_ = 8;
cqlParser.RULE_searchClause = 9;
cqlParser.RULE_relation = 10;
cqlParser.RULE_comparitor = 11;
cqlParser.RULE_comparitorSymbol = 12;
cqlParser.RULE_namedComparitor = 13;
cqlParser.RULE_modifierList = 14;
cqlParser.RULE_modifier = 15;
cqlParser.RULE_prefix_ = 16;
cqlParser.RULE_uri = 17;
cqlParser.RULE_modifierName = 18;
cqlParser.RULE_modifierValue = 19;
cqlParser.RULE_searchTerm = 20;
cqlParser.RULE_index = 21;
cqlParser.RULE_term = 22;
cqlParser.RULE_identifier = 23;

class CqlContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cqlParser.RULE_cql;
    }

	sortedQuery() {
	    return this.getTypedRuleContext(SortedQueryContext,0);
	};

	EOF() {
	    return this.getToken(cqlParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.enterCql(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.exitCql(this);
		}
	}


}



class SortedQueryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cqlParser.RULE_sortedQuery;
    }

	prefixAssignment() {
	    return this.getTypedRuleContext(PrefixAssignmentContext,0);
	};

	sortedQuery() {
	    return this.getTypedRuleContext(SortedQueryContext,0);
	};

	scopedClause() {
	    return this.getTypedRuleContext(ScopedClauseContext,0);
	};

	SORTBY() {
	    return this.getToken(cqlParser.SORTBY, 0);
	};

	sortSpec() {
	    return this.getTypedRuleContext(SortSpecContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.enterSortedQuery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.exitSortedQuery(this);
		}
	}


}



class SortSpecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cqlParser.RULE_sortSpec;
    }

	singleSpec() {
	    return this.getTypedRuleContext(SingleSpecContext,0);
	};

	sortSpec() {
	    return this.getTypedRuleContext(SortSpecContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.enterSortSpec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.exitSortSpec(this);
		}
	}


}



class SingleSpecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cqlParser.RULE_singleSpec;
    }

	index() {
	    return this.getTypedRuleContext(IndexContext,0);
	};

	modifierList() {
	    return this.getTypedRuleContext(ModifierListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.enterSingleSpec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.exitSingleSpec(this);
		}
	}


}



class CqlQueryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cqlParser.RULE_cqlQuery;
    }

	prefixAssignment() {
	    return this.getTypedRuleContext(PrefixAssignmentContext,0);
	};

	cqlQuery() {
	    return this.getTypedRuleContext(CqlQueryContext,0);
	};

	scopedClause() {
	    return this.getTypedRuleContext(ScopedClauseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.enterCqlQuery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.exitCqlQuery(this);
		}
	}


}



class PrefixAssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cqlParser.RULE_prefixAssignment;
    }

	prefix_() {
	    return this.getTypedRuleContext(Prefix_Context,0);
	};

	uri() {
	    return this.getTypedRuleContext(UriContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.enterPrefixAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.exitPrefixAssignment(this);
		}
	}


}



class ScopedClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cqlParser.RULE_scopedClause;
    }

	searchClause() {
	    return this.getTypedRuleContext(SearchClauseContext,0);
	};

	scopedClause() {
	    return this.getTypedRuleContext(ScopedClauseContext,0);
	};

	booleanGroup() {
	    return this.getTypedRuleContext(BooleanGroupContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.enterScopedClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.exitScopedClause(this);
		}
	}


}



class BooleanGroupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cqlParser.RULE_booleanGroup;
    }

	boolean_() {
	    return this.getTypedRuleContext(Boolean_Context,0);
	};

	modifierList() {
	    return this.getTypedRuleContext(ModifierListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.enterBooleanGroup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.exitBooleanGroup(this);
		}
	}


}



class Boolean_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cqlParser.RULE_boolean_;
    }

	AND() {
	    return this.getToken(cqlParser.AND, 0);
	};

	OR() {
	    return this.getToken(cqlParser.OR, 0);
	};

	NOT() {
	    return this.getToken(cqlParser.NOT, 0);
	};

	PROX() {
	    return this.getToken(cqlParser.PROX, 0);
	};

	enterRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.enterBoolean_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.exitBoolean_(this);
		}
	}


}



class SearchClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cqlParser.RULE_searchClause;
    }

	cqlQuery() {
	    return this.getTypedRuleContext(CqlQueryContext,0);
	};

	index() {
	    return this.getTypedRuleContext(IndexContext,0);
	};

	relation() {
	    return this.getTypedRuleContext(RelationContext,0);
	};

	searchTerm() {
	    return this.getTypedRuleContext(SearchTermContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.enterSearchClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.exitSearchClause(this);
		}
	}


}



class RelationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cqlParser.RULE_relation;
    }

	comparitor() {
	    return this.getTypedRuleContext(ComparitorContext,0);
	};

	modifierList() {
	    return this.getTypedRuleContext(ModifierListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.enterRelation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.exitRelation(this);
		}
	}


}



class ComparitorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cqlParser.RULE_comparitor;
    }

	comparitorSymbol() {
	    return this.getTypedRuleContext(ComparitorSymbolContext,0);
	};

	namedComparitor() {
	    return this.getTypedRuleContext(NamedComparitorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.enterComparitor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.exitComparitor(this);
		}
	}


}



class ComparitorSymbolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cqlParser.RULE_comparitorSymbol;
    }


	enterRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.enterComparitorSymbol(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.exitComparitorSymbol(this);
		}
	}


}



class NamedComparitorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cqlParser.RULE_namedComparitor;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.enterNamedComparitor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.exitNamedComparitor(this);
		}
	}


}



class ModifierListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cqlParser.RULE_modifierList;
    }

	modifier() {
	    return this.getTypedRuleContext(ModifierContext,0);
	};

	modifierList() {
	    return this.getTypedRuleContext(ModifierListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.enterModifierList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.exitModifierList(this);
		}
	}


}



class ModifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cqlParser.RULE_modifier;
    }

	modifierName() {
	    return this.getTypedRuleContext(ModifierNameContext,0);
	};

	comparitorSymbol() {
	    return this.getTypedRuleContext(ComparitorSymbolContext,0);
	};

	modifierValue() {
	    return this.getTypedRuleContext(ModifierValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.enterModifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.exitModifier(this);
		}
	}


}



class Prefix_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cqlParser.RULE_prefix_;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.enterPrefix_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.exitPrefix_(this);
		}
	}


}



class UriContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cqlParser.RULE_uri;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.enterUri(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.exitUri(this);
		}
	}


}



class ModifierNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cqlParser.RULE_modifierName;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.enterModifierName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.exitModifierName(this);
		}
	}


}



class ModifierValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cqlParser.RULE_modifierValue;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.enterModifierValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.exitModifierValue(this);
		}
	}


}



class SearchTermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cqlParser.RULE_searchTerm;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.enterSearchTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.exitSearchTerm(this);
		}
	}


}



class IndexContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cqlParser.RULE_index;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.enterIndex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.exitIndex(this);
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
        this.ruleIndex = cqlParser.RULE_term;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	AND() {
	    return this.getToken(cqlParser.AND, 0);
	};

	OR() {
	    return this.getToken(cqlParser.OR, 0);
	};

	NOT() {
	    return this.getToken(cqlParser.NOT, 0);
	};

	PROX() {
	    return this.getToken(cqlParser.PROX, 0);
	};

	SORTBY() {
	    return this.getToken(cqlParser.SORTBY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.exitTerm(this);
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
        this.ruleIndex = cqlParser.RULE_identifier;
    }

	CHARSTRING1() {
	    return this.getToken(cqlParser.CHARSTRING1, 0);
	};

	CHARSTRING2() {
	    return this.getToken(cqlParser.CHARSTRING2, 0);
	};

	enterRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cqlListener ) {
	        listener.exitIdentifier(this);
		}
	}


}




cqlParser.CqlContext = CqlContext; 
cqlParser.SortedQueryContext = SortedQueryContext; 
cqlParser.SortSpecContext = SortSpecContext; 
cqlParser.SingleSpecContext = SingleSpecContext; 
cqlParser.CqlQueryContext = CqlQueryContext; 
cqlParser.PrefixAssignmentContext = PrefixAssignmentContext; 
cqlParser.ScopedClauseContext = ScopedClauseContext; 
cqlParser.BooleanGroupContext = BooleanGroupContext; 
cqlParser.Boolean_Context = Boolean_Context; 
cqlParser.SearchClauseContext = SearchClauseContext; 
cqlParser.RelationContext = RelationContext; 
cqlParser.ComparitorContext = ComparitorContext; 
cqlParser.ComparitorSymbolContext = ComparitorSymbolContext; 
cqlParser.NamedComparitorContext = NamedComparitorContext; 
cqlParser.ModifierListContext = ModifierListContext; 
cqlParser.ModifierContext = ModifierContext; 
cqlParser.Prefix_Context = Prefix_Context; 
cqlParser.UriContext = UriContext; 
cqlParser.ModifierNameContext = ModifierNameContext; 
cqlParser.ModifierValueContext = ModifierValueContext; 
cqlParser.SearchTermContext = SearchTermContext; 
cqlParser.IndexContext = IndexContext; 
cqlParser.TermContext = TermContext; 
cqlParser.IdentifierContext = IdentifierContext; 
