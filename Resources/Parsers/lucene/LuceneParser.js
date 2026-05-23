// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/lucene/LuceneParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LuceneParserListener from './LuceneParserListener.js';
const serializedATN = [4,1,52,139,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,1,0,1,0,1,1,4,1,33,8,1,11,1,12,1,34,1,2,1,2,1,2,5,2,40,8,2,
10,2,12,2,43,9,2,1,3,1,3,1,3,5,3,48,8,3,10,3,12,3,51,9,3,1,4,3,4,54,8,4,
1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,6,3,6,64,8,6,1,6,1,6,3,6,68,8,6,3,6,70,8,6,
1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,3,8,80,8,8,1,8,1,8,1,8,3,8,85,8,8,1,8,1,
8,1,8,3,8,90,8,8,1,8,1,8,1,8,3,8,95,8,8,1,8,1,8,1,8,3,8,100,8,8,3,8,102,
8,8,1,8,1,8,1,8,1,8,3,8,108,8,8,5,8,110,8,8,10,8,12,8,113,9,8,1,9,1,9,1,
9,1,9,1,9,3,9,120,8,9,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,
1,12,3,12,133,8,12,1,13,1,13,3,13,137,8,13,1,13,0,1,16,14,0,2,4,6,8,10,12,
14,16,18,20,22,24,26,0,7,2,0,3,3,5,6,1,0,9,10,1,0,11,14,1,0,17,19,1,0,21,
22,2,0,48,48,51,52,1,0,49,50,145,0,28,1,0,0,0,2,32,1,0,0,0,4,36,1,0,0,0,
6,44,1,0,0,0,8,53,1,0,0,0,10,57,1,0,0,0,12,69,1,0,0,0,14,71,1,0,0,0,16,101,
1,0,0,0,18,114,1,0,0,0,20,121,1,0,0,0,22,123,1,0,0,0,24,129,1,0,0,0,26,134,
1,0,0,0,28,29,3,2,1,0,29,30,5,0,0,1,30,1,1,0,0,0,31,33,3,4,2,0,32,31,1,0,
0,0,33,34,1,0,0,0,34,32,1,0,0,0,34,35,1,0,0,0,35,3,1,0,0,0,36,41,3,6,3,0,
37,38,5,2,0,0,38,40,3,6,3,0,39,37,1,0,0,0,40,43,1,0,0,0,41,39,1,0,0,0,41,
42,1,0,0,0,42,5,1,0,0,0,43,41,1,0,0,0,44,49,3,8,4,0,45,46,5,1,0,0,46,48,
3,8,4,0,47,45,1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,50,7,1,0,
0,0,51,49,1,0,0,0,52,54,3,10,5,0,53,52,1,0,0,0,53,54,1,0,0,0,54,55,1,0,0,
0,55,56,3,12,6,0,56,9,1,0,0,0,57,58,7,0,0,0,58,11,1,0,0,0,59,70,3,14,7,0,
60,61,3,20,10,0,61,62,7,1,0,0,62,64,1,0,0,0,63,60,1,0,0,0,63,64,1,0,0,0,
64,67,1,0,0,0,65,68,3,16,8,0,66,68,3,18,9,0,67,65,1,0,0,0,67,66,1,0,0,0,
68,70,1,0,0,0,69,59,1,0,0,0,69,63,1,0,0,0,70,13,1,0,0,0,71,72,3,20,10,0,
72,73,7,2,0,0,73,74,7,3,0,0,74,15,1,0,0,0,75,76,6,8,-1,0,76,79,5,20,0,0,
77,78,5,15,0,0,78,80,5,18,0,0,79,77,1,0,0,0,79,80,1,0,0,0,80,102,1,0,0,0,
81,84,3,22,11,0,82,83,5,15,0,0,83,85,5,18,0,0,84,82,1,0,0,0,84,85,1,0,0,
0,85,102,1,0,0,0,86,89,3,24,12,0,87,88,5,15,0,0,88,90,5,18,0,0,89,87,1,0,
0,0,89,90,1,0,0,0,90,102,1,0,0,0,91,94,5,18,0,0,92,93,5,15,0,0,93,95,5,18,
0,0,94,92,1,0,0,0,94,95,1,0,0,0,95,102,1,0,0,0,96,99,5,19,0,0,97,98,5,15,
0,0,98,100,5,18,0,0,99,97,1,0,0,0,99,100,1,0,0,0,100,102,1,0,0,0,101,75,
1,0,0,0,101,81,1,0,0,0,101,86,1,0,0,0,101,91,1,0,0,0,101,96,1,0,0,0,102,
111,1,0,0,0,103,104,10,6,0,0,104,107,3,26,13,0,105,106,5,15,0,0,106,108,
5,18,0,0,107,105,1,0,0,0,107,108,1,0,0,0,108,110,1,0,0,0,109,103,1,0,0,0,
110,113,1,0,0,0,111,109,1,0,0,0,111,112,1,0,0,0,112,17,1,0,0,0,113,111,1,
0,0,0,114,115,5,7,0,0,115,116,3,2,1,0,116,119,5,8,0,0,117,118,5,15,0,0,118,
120,5,18,0,0,119,117,1,0,0,0,119,120,1,0,0,0,120,19,1,0,0,0,121,122,5,19,
0,0,122,21,1,0,0,0,123,124,7,4,0,0,124,125,7,5,0,0,125,126,5,48,0,0,126,
127,7,5,0,0,127,128,7,6,0,0,128,23,1,0,0,0,129,132,5,17,0,0,130,131,5,15,
0,0,131,133,5,18,0,0,132,130,1,0,0,0,132,133,1,0,0,0,133,25,1,0,0,0,134,
136,5,16,0,0,135,137,5,18,0,0,136,135,1,0,0,0,136,137,1,0,0,0,137,27,1,0,
0,0,18,34,41,49,53,63,67,69,79,84,89,94,99,101,107,111,119,132,136];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LuceneParser extends antlr4.Parser {

    static grammarFileName = "LuceneParser.g4";
    static literalNames = [ null, null, null, null, "'fn:'", "'+'", "'-'", 
                            "'('", "')'", "':'", "'='", "'<'", "'<='", "'>'", 
                            "'>='", "'^'", "'~'", null, null, null, null, 
                            "'['", "'{'", null, null, null, null, "'after'", 
                            "'before'", null, "'containing'", "'extend'", 
                            "'or'", null, null, null, null, null, null, 
                            null, "'ordered'", "'overlapping'", "'phrase'", 
                            "'unordered'", null, "'wildcard'", "'within'", 
                            null, "'TO'", "']'", "'}'" ];
    static symbolicNames = [ null, "AND", "OR", "NOT", "FN_PREFIX", "PLUS", 
                             "MINUS", "LPAREN", "RPAREN", "OP_COLON", "OP_EQUAL", 
                             "OP_LESSTHAN", "OP_LESSTHANEQ", "OP_MORETHAN", 
                             "OP_MORETHANEQ", "CARAT", "TILDE", "QUOTED", 
                             "NUMBER", "TERM", "REGEXPTERM", "RANGEIN_START", 
                             "RANGEEX_START", "DEFAULT_SKIP", "UNKNOWN", 
                             "F_SKIP", "ATLEAST", "AFTER", "BEFORE", "CONTAINED_BY", 
                             "CONTAINING", "EXTEND", "FN_OR", "FUZZYTERM", 
                             "MAXGAPS", "MAXWIDTH", "NON_OVERLAPPING", "NOT_CONTAINED_BY", 
                             "NOT_CONTAINING", "NOT_WITHIN", "ORDERED", 
                             "OVERLAPPING", "PHRASE", "UNORDERED", "UNORDERED_NO_OVERLAPS", 
                             "WILDCARD", "WITHIN", "R_SKIP", "RANGE_TO", 
                             "RANGEIN_END", "RANGEEX_END", "RANGE_QUOTED", 
                             "RANGE_GOOP" ];
    static ruleNames = [ "topLevelQuery", "query", "disjQuery", "conjQuery", 
                         "modClause", "modifier", "clause", "fieldRangeExpr", 
                         "term", "groupingExpr", "fieldName", "termRangeExpr", 
                         "quotedTerm", "fuzzy" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LuceneParser.ruleNames;
        this.literalNames = LuceneParser.literalNames;
        this.symbolicNames = LuceneParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 8:
    	    		return this.term_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    term_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 6);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	topLevelQuery() {
	    let localctx = new TopLevelQueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LuceneParser.RULE_topLevelQuery);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.query();
	        this.state = 29;
	        this.match(LuceneParser.EOF);
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



	query() {
	    let localctx = new QueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LuceneParser.RULE_query);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 31;
	            this.disjQuery();
	            this.state = 34; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 8257768) !== 0));
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



	disjQuery() {
	    let localctx = new DisjQueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LuceneParser.RULE_disjQuery);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.conjQuery();
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 37;
	            this.match(LuceneParser.OR);
	            this.state = 38;
	            this.conjQuery();
	            this.state = 43;
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



	conjQuery() {
	    let localctx = new ConjQueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LuceneParser.RULE_conjQuery);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.modClause();
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 45;
	            this.match(LuceneParser.AND);
	            this.state = 46;
	            this.modClause();
	            this.state = 51;
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



	modClause() {
	    let localctx = new ModClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LuceneParser.RULE_modClause);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 104) !== 0)) {
	            this.state = 52;
	            this.modifier();
	        }

	        this.state = 55;
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



	modifier() {
	    let localctx = new ModifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LuceneParser.RULE_modifier);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 104) !== 0))) {
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



	clause() {
	    let localctx = new ClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LuceneParser.RULE_clause);
	    var _la = 0;
	    try {
	        this.state = 69;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 59;
	            this.fieldRangeExpr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 63;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	            if(la_===1) {
	                this.state = 60;
	                this.fieldName();
	                this.state = 61;
	                _la = this._input.LA(1);
	                if(!(_la===9 || _la===10)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }

	            }
	            this.state = 67;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 17:
	            case 18:
	            case 19:
	            case 20:
	            case 21:
	            case 22:
	                this.state = 65;
	                this.term(0);
	                break;
	            case 7:
	                this.state = 66;
	                this.groupingExpr();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
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



	fieldRangeExpr() {
	    let localctx = new FieldRangeExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, LuceneParser.RULE_fieldRangeExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.fieldName();
	        this.state = 72;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 30720) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 73;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 917504) !== 0))) {
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


	term(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new TermContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 16;
	    this.enterRecursionRule(localctx, 16, LuceneParser.RULE_term, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 20:
	            this.state = 76;
	            this.match(LuceneParser.REGEXPTERM);
	            this.state = 79;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	            if(la_===1) {
	                this.state = 77;
	                this.match(LuceneParser.CARAT);
	                this.state = 78;
	                this.match(LuceneParser.NUMBER);

	            }
	            break;
	        case 21:
	        case 22:
	            this.state = 81;
	            this.termRangeExpr();
	            this.state = 84;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	            if(la_===1) {
	                this.state = 82;
	                this.match(LuceneParser.CARAT);
	                this.state = 83;
	                this.match(LuceneParser.NUMBER);

	            }
	            break;
	        case 17:
	            this.state = 86;
	            this.quotedTerm();
	            this.state = 89;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	            if(la_===1) {
	                this.state = 87;
	                this.match(LuceneParser.CARAT);
	                this.state = 88;
	                this.match(LuceneParser.NUMBER);

	            }
	            break;
	        case 18:
	            this.state = 91;
	            this.match(LuceneParser.NUMBER);
	            this.state = 94;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	            if(la_===1) {
	                this.state = 92;
	                this.match(LuceneParser.CARAT);
	                this.state = 93;
	                this.match(LuceneParser.NUMBER);

	            }
	            break;
	        case 19:
	            this.state = 96;
	            this.match(LuceneParser.TERM);
	            this.state = 99;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	            if(la_===1) {
	                this.state = 97;
	                this.match(LuceneParser.CARAT);
	                this.state = 98;
	                this.match(LuceneParser.NUMBER);

	            }
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 111;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new TermContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, LuceneParser.RULE_term);
	                this.state = 103;
	                if (!( this.precpred(this._ctx, 6))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                }
	                this.state = 104;
	                this.fuzzy();
	                this.state = 107;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	                if(la_===1) {
	                    this.state = 105;
	                    this.match(LuceneParser.CARAT);
	                    this.state = 106;
	                    this.match(LuceneParser.NUMBER);

	                } 
	            }
	            this.state = 113;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
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



	groupingExpr() {
	    let localctx = new GroupingExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, LuceneParser.RULE_groupingExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.match(LuceneParser.LPAREN);
	        this.state = 115;
	        this.query();
	        this.state = 116;
	        this.match(LuceneParser.RPAREN);
	        this.state = 119;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 117;
	            this.match(LuceneParser.CARAT);
	            this.state = 118;
	            this.match(LuceneParser.NUMBER);
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



	fieldName() {
	    let localctx = new FieldNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, LuceneParser.RULE_fieldName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this.match(LuceneParser.TERM);
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



	termRangeExpr() {
	    let localctx = new TermRangeExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, LuceneParser.RULE_termRangeExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        _la = this._input.LA(1);
	        if(!(_la===21 || _la===22)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 124;
	        localctx.left = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!(((((_la - 48)) & ~0x1f) === 0 && ((1 << (_la - 48)) & 25) !== 0))) {
	            localctx.left = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 125;
	        this.match(LuceneParser.RANGE_TO);
	        this.state = 126;
	        localctx.right = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!(((((_la - 48)) & ~0x1f) === 0 && ((1 << (_la - 48)) & 25) !== 0))) {
	            localctx.right = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 127;
	        _la = this._input.LA(1);
	        if(!(_la===49 || _la===50)) {
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



	quotedTerm() {
	    let localctx = new QuotedTermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, LuceneParser.RULE_quotedTerm);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this.match(LuceneParser.QUOTED);
	        this.state = 132;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        if(la_===1) {
	            this.state = 130;
	            this.match(LuceneParser.CARAT);
	            this.state = 131;
	            this.match(LuceneParser.NUMBER);

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



	fuzzy() {
	    let localctx = new FuzzyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, LuceneParser.RULE_fuzzy);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this.match(LuceneParser.TILDE);
	        this.state = 136;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        if(la_===1) {
	            this.state = 135;
	            this.match(LuceneParser.NUMBER);

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

LuceneParser.EOF = antlr4.Token.EOF;
LuceneParser.AND = 1;
LuceneParser.OR = 2;
LuceneParser.NOT = 3;
LuceneParser.FN_PREFIX = 4;
LuceneParser.PLUS = 5;
LuceneParser.MINUS = 6;
LuceneParser.LPAREN = 7;
LuceneParser.RPAREN = 8;
LuceneParser.OP_COLON = 9;
LuceneParser.OP_EQUAL = 10;
LuceneParser.OP_LESSTHAN = 11;
LuceneParser.OP_LESSTHANEQ = 12;
LuceneParser.OP_MORETHAN = 13;
LuceneParser.OP_MORETHANEQ = 14;
LuceneParser.CARAT = 15;
LuceneParser.TILDE = 16;
LuceneParser.QUOTED = 17;
LuceneParser.NUMBER = 18;
LuceneParser.TERM = 19;
LuceneParser.REGEXPTERM = 20;
LuceneParser.RANGEIN_START = 21;
LuceneParser.RANGEEX_START = 22;
LuceneParser.DEFAULT_SKIP = 23;
LuceneParser.UNKNOWN = 24;
LuceneParser.F_SKIP = 25;
LuceneParser.ATLEAST = 26;
LuceneParser.AFTER = 27;
LuceneParser.BEFORE = 28;
LuceneParser.CONTAINED_BY = 29;
LuceneParser.CONTAINING = 30;
LuceneParser.EXTEND = 31;
LuceneParser.FN_OR = 32;
LuceneParser.FUZZYTERM = 33;
LuceneParser.MAXGAPS = 34;
LuceneParser.MAXWIDTH = 35;
LuceneParser.NON_OVERLAPPING = 36;
LuceneParser.NOT_CONTAINED_BY = 37;
LuceneParser.NOT_CONTAINING = 38;
LuceneParser.NOT_WITHIN = 39;
LuceneParser.ORDERED = 40;
LuceneParser.OVERLAPPING = 41;
LuceneParser.PHRASE = 42;
LuceneParser.UNORDERED = 43;
LuceneParser.UNORDERED_NO_OVERLAPS = 44;
LuceneParser.WILDCARD = 45;
LuceneParser.WITHIN = 46;
LuceneParser.R_SKIP = 47;
LuceneParser.RANGE_TO = 48;
LuceneParser.RANGEIN_END = 49;
LuceneParser.RANGEEX_END = 50;
LuceneParser.RANGE_QUOTED = 51;
LuceneParser.RANGE_GOOP = 52;

LuceneParser.RULE_topLevelQuery = 0;
LuceneParser.RULE_query = 1;
LuceneParser.RULE_disjQuery = 2;
LuceneParser.RULE_conjQuery = 3;
LuceneParser.RULE_modClause = 4;
LuceneParser.RULE_modifier = 5;
LuceneParser.RULE_clause = 6;
LuceneParser.RULE_fieldRangeExpr = 7;
LuceneParser.RULE_term = 8;
LuceneParser.RULE_groupingExpr = 9;
LuceneParser.RULE_fieldName = 10;
LuceneParser.RULE_termRangeExpr = 11;
LuceneParser.RULE_quotedTerm = 12;
LuceneParser.RULE_fuzzy = 13;

class TopLevelQueryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuceneParser.RULE_topLevelQuery;
    }

	query() {
	    return this.getTypedRuleContext(QueryContext,0);
	};

	EOF() {
	    return this.getToken(LuceneParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuceneParserListener ) {
	        listener.enterTopLevelQuery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuceneParserListener ) {
	        listener.exitTopLevelQuery(this);
		}
	}


}



class QueryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuceneParser.RULE_query;
    }

	disjQuery = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DisjQueryContext);
	    } else {
	        return this.getTypedRuleContext(DisjQueryContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LuceneParserListener ) {
	        listener.enterQuery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuceneParserListener ) {
	        listener.exitQuery(this);
		}
	}


}



class DisjQueryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuceneParser.RULE_disjQuery;
    }

	conjQuery = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConjQueryContext);
	    } else {
	        return this.getTypedRuleContext(ConjQueryContext,i);
	    }
	};

	OR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LuceneParser.OR);
	    } else {
	        return this.getToken(LuceneParser.OR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LuceneParserListener ) {
	        listener.enterDisjQuery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuceneParserListener ) {
	        listener.exitDisjQuery(this);
		}
	}


}



class ConjQueryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuceneParser.RULE_conjQuery;
    }

	modClause = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ModClauseContext);
	    } else {
	        return this.getTypedRuleContext(ModClauseContext,i);
	    }
	};

	AND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LuceneParser.AND);
	    } else {
	        return this.getToken(LuceneParser.AND, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LuceneParserListener ) {
	        listener.enterConjQuery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuceneParserListener ) {
	        listener.exitConjQuery(this);
		}
	}


}



class ModClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuceneParser.RULE_modClause;
    }

	clause() {
	    return this.getTypedRuleContext(ClauseContext,0);
	};

	modifier() {
	    return this.getTypedRuleContext(ModifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LuceneParserListener ) {
	        listener.enterModClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuceneParserListener ) {
	        listener.exitModClause(this);
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
        this.ruleIndex = LuceneParser.RULE_modifier;
    }

	PLUS() {
	    return this.getToken(LuceneParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(LuceneParser.MINUS, 0);
	};

	NOT() {
	    return this.getToken(LuceneParser.NOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuceneParserListener ) {
	        listener.enterModifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuceneParserListener ) {
	        listener.exitModifier(this);
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
        this.ruleIndex = LuceneParser.RULE_clause;
    }

	fieldRangeExpr() {
	    return this.getTypedRuleContext(FieldRangeExprContext,0);
	};

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	groupingExpr() {
	    return this.getTypedRuleContext(GroupingExprContext,0);
	};

	fieldName() {
	    return this.getTypedRuleContext(FieldNameContext,0);
	};

	OP_COLON() {
	    return this.getToken(LuceneParser.OP_COLON, 0);
	};

	OP_EQUAL() {
	    return this.getToken(LuceneParser.OP_EQUAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuceneParserListener ) {
	        listener.enterClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuceneParserListener ) {
	        listener.exitClause(this);
		}
	}


}



class FieldRangeExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuceneParser.RULE_fieldRangeExpr;
    }

	fieldName() {
	    return this.getTypedRuleContext(FieldNameContext,0);
	};

	OP_LESSTHAN() {
	    return this.getToken(LuceneParser.OP_LESSTHAN, 0);
	};

	OP_MORETHAN() {
	    return this.getToken(LuceneParser.OP_MORETHAN, 0);
	};

	OP_LESSTHANEQ() {
	    return this.getToken(LuceneParser.OP_LESSTHANEQ, 0);
	};

	OP_MORETHANEQ() {
	    return this.getToken(LuceneParser.OP_MORETHANEQ, 0);
	};

	TERM() {
	    return this.getToken(LuceneParser.TERM, 0);
	};

	QUOTED() {
	    return this.getToken(LuceneParser.QUOTED, 0);
	};

	NUMBER() {
	    return this.getToken(LuceneParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuceneParserListener ) {
	        listener.enterFieldRangeExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuceneParserListener ) {
	        listener.exitFieldRangeExpr(this);
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
        this.ruleIndex = LuceneParser.RULE_term;
    }

	REGEXPTERM() {
	    return this.getToken(LuceneParser.REGEXPTERM, 0);
	};

	CARAT() {
	    return this.getToken(LuceneParser.CARAT, 0);
	};

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LuceneParser.NUMBER);
	    } else {
	        return this.getToken(LuceneParser.NUMBER, i);
	    }
	};


	termRangeExpr() {
	    return this.getTypedRuleContext(TermRangeExprContext,0);
	};

	quotedTerm() {
	    return this.getTypedRuleContext(QuotedTermContext,0);
	};

	TERM() {
	    return this.getToken(LuceneParser.TERM, 0);
	};

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	fuzzy() {
	    return this.getTypedRuleContext(FuzzyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LuceneParserListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuceneParserListener ) {
	        listener.exitTerm(this);
		}
	}


}



class GroupingExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuceneParser.RULE_groupingExpr;
    }

	LPAREN() {
	    return this.getToken(LuceneParser.LPAREN, 0);
	};

	query() {
	    return this.getTypedRuleContext(QueryContext,0);
	};

	RPAREN() {
	    return this.getToken(LuceneParser.RPAREN, 0);
	};

	CARAT() {
	    return this.getToken(LuceneParser.CARAT, 0);
	};

	NUMBER() {
	    return this.getToken(LuceneParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuceneParserListener ) {
	        listener.enterGroupingExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuceneParserListener ) {
	        listener.exitGroupingExpr(this);
		}
	}


}



class FieldNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuceneParser.RULE_fieldName;
    }

	TERM() {
	    return this.getToken(LuceneParser.TERM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuceneParserListener ) {
	        listener.enterFieldName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuceneParserListener ) {
	        listener.exitFieldName(this);
		}
	}


}



class TermRangeExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuceneParser.RULE_termRangeExpr;
        this.left = null;
        this.right = null;
    }

	RANGE_TO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LuceneParser.RANGE_TO);
	    } else {
	        return this.getToken(LuceneParser.RANGE_TO, i);
	    }
	};


	RANGEIN_START() {
	    return this.getToken(LuceneParser.RANGEIN_START, 0);
	};

	RANGEEX_START() {
	    return this.getToken(LuceneParser.RANGEEX_START, 0);
	};

	RANGEIN_END() {
	    return this.getToken(LuceneParser.RANGEIN_END, 0);
	};

	RANGEEX_END() {
	    return this.getToken(LuceneParser.RANGEEX_END, 0);
	};

	RANGE_GOOP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LuceneParser.RANGE_GOOP);
	    } else {
	        return this.getToken(LuceneParser.RANGE_GOOP, i);
	    }
	};


	RANGE_QUOTED = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LuceneParser.RANGE_QUOTED);
	    } else {
	        return this.getToken(LuceneParser.RANGE_QUOTED, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LuceneParserListener ) {
	        listener.enterTermRangeExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuceneParserListener ) {
	        listener.exitTermRangeExpr(this);
		}
	}


}



class QuotedTermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuceneParser.RULE_quotedTerm;
    }

	QUOTED() {
	    return this.getToken(LuceneParser.QUOTED, 0);
	};

	CARAT() {
	    return this.getToken(LuceneParser.CARAT, 0);
	};

	NUMBER() {
	    return this.getToken(LuceneParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuceneParserListener ) {
	        listener.enterQuotedTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuceneParserListener ) {
	        listener.exitQuotedTerm(this);
		}
	}


}



class FuzzyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuceneParser.RULE_fuzzy;
    }

	TILDE() {
	    return this.getToken(LuceneParser.TILDE, 0);
	};

	NUMBER() {
	    return this.getToken(LuceneParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuceneParserListener ) {
	        listener.enterFuzzy(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuceneParserListener ) {
	        listener.exitFuzzy(this);
		}
	}


}




LuceneParser.TopLevelQueryContext = TopLevelQueryContext; 
LuceneParser.QueryContext = QueryContext; 
LuceneParser.DisjQueryContext = DisjQueryContext; 
LuceneParser.ConjQueryContext = ConjQueryContext; 
LuceneParser.ModClauseContext = ModClauseContext; 
LuceneParser.ModifierContext = ModifierContext; 
LuceneParser.ClauseContext = ClauseContext; 
LuceneParser.FieldRangeExprContext = FieldRangeExprContext; 
LuceneParser.TermContext = TermContext; 
LuceneParser.GroupingExprContext = GroupingExprContext; 
LuceneParser.FieldNameContext = FieldNameContext; 
LuceneParser.TermRangeExprContext = TermRangeExprContext; 
LuceneParser.QuotedTermContext = QuotedTermContext; 
LuceneParser.FuzzyContext = FuzzyContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
