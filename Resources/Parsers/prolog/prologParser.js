// Generated from ./prolog/prolog.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import prologListener from './prologListener.js';
const serializedATN = [4,1,66,104,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,5,0,19,8,0,10,0,12,0,22,9,0,1,0,1,0,1,
1,1,1,1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,3,5,3,36,8,3,10,3,12,3,39,9,3,1,4,1,
4,1,4,1,4,1,4,1,4,1,4,3,4,48,8,4,1,4,1,4,3,4,52,8,4,1,4,1,4,1,4,1,4,1,4,
1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,67,8,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,
4,76,8,4,1,4,1,4,1,4,1,4,5,4,82,8,4,10,4,12,4,85,9,4,1,5,1,5,1,6,1,6,1,6,
1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,100,8,6,1,7,1,7,1,7,0,1,8,8,0,2,4,6,
8,10,12,14,0,2,4,0,1,1,3,3,6,6,12,50,1,0,54,58,118,0,20,1,0,0,0,2,25,1,0,
0,0,4,29,1,0,0,0,6,32,1,0,0,0,8,75,1,0,0,0,10,86,1,0,0,0,12,99,1,0,0,0,14,
101,1,0,0,0,16,19,3,2,1,0,17,19,3,4,2,0,18,16,1,0,0,0,18,17,1,0,0,0,19,22,
1,0,0,0,20,18,1,0,0,0,20,21,1,0,0,0,21,23,1,0,0,0,22,20,1,0,0,0,23,24,5,
0,0,1,24,1,1,0,0,0,25,26,5,1,0,0,26,27,3,8,4,0,27,28,5,2,0,0,28,3,1,0,0,
0,29,30,3,8,4,0,30,31,5,2,0,0,31,5,1,0,0,0,32,37,3,8,4,0,33,34,5,3,0,0,34,
36,3,8,4,0,35,33,1,0,0,0,36,39,1,0,0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,7,
1,0,0,0,39,37,1,0,0,0,40,41,6,4,-1,0,41,76,5,53,0,0,42,43,5,4,0,0,43,44,
3,8,4,0,44,45,5,5,0,0,45,76,1,0,0,0,46,48,5,6,0,0,47,46,1,0,0,0,47,48,1,
0,0,0,48,49,1,0,0,0,49,76,3,14,7,0,50,52,5,6,0,0,51,50,1,0,0,0,51,52,1,0,
0,0,52,53,1,0,0,0,53,76,5,59,0,0,54,55,3,12,6,0,55,56,5,4,0,0,56,57,3,6,
3,0,57,58,5,5,0,0,58,76,1,0,0,0,59,60,3,10,5,0,60,61,3,8,4,4,61,76,1,0,0,
0,62,63,5,7,0,0,63,66,3,6,3,0,64,65,5,8,0,0,65,67,3,8,4,0,66,64,1,0,0,0,
66,67,1,0,0,0,67,68,1,0,0,0,68,69,5,9,0,0,69,76,1,0,0,0,70,71,5,10,0,0,71,
72,3,6,3,0,72,73,5,11,0,0,73,76,1,0,0,0,74,76,3,12,6,0,75,40,1,0,0,0,75,
42,1,0,0,0,75,47,1,0,0,0,75,51,1,0,0,0,75,54,1,0,0,0,75,59,1,0,0,0,75,62,
1,0,0,0,75,70,1,0,0,0,75,74,1,0,0,0,76,83,1,0,0,0,77,78,10,5,0,0,78,79,3,
10,5,0,79,80,3,8,4,5,80,82,1,0,0,0,81,77,1,0,0,0,82,85,1,0,0,0,83,81,1,0,
0,0,83,84,1,0,0,0,84,9,1,0,0,0,85,83,1,0,0,0,86,87,7,0,0,0,87,11,1,0,0,0,
88,89,5,7,0,0,89,100,5,9,0,0,90,91,5,10,0,0,91,100,5,11,0,0,92,100,5,52,
0,0,93,100,5,60,0,0,94,100,5,61,0,0,95,100,5,62,0,0,96,100,5,63,0,0,97,100,
5,18,0,0,98,100,5,51,0,0,99,88,1,0,0,0,99,90,1,0,0,0,99,92,1,0,0,0,99,93,
1,0,0,0,99,94,1,0,0,0,99,95,1,0,0,0,99,96,1,0,0,0,99,97,1,0,0,0,99,98,1,
0,0,0,100,13,1,0,0,0,101,102,7,1,0,0,102,15,1,0,0,0,9,18,20,37,47,51,66,
75,83,99];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class prologParser extends antlr4.Parser {

    static grammarFileName = "prolog.g4";
    static literalNames = [ null, "':-'", "'.'", "','", "'('", "')'", "'-'", 
                            "'['", "'|'", "']'", "'{'", "'}'", "'-->'", 
                            "'?-'", "'dynamic'", "'multifile'", "'discontiguous'", 
                            "'public'", "';'", "'->'", "'\\+'", "'='", "'\\='", 
                            "'=='", "'\\=='", "'@<'", "'@=<'", "'@>'", "'@>='", 
                            "'=..'", "'is'", "'=:='", "'=\\='", "'<'", "'=<'", 
                            "'>'", "'>='", "':'", "'+'", "'/\\'", "'\\/'", 
                            "'*'", "'/'", "'//'", "'rem'", "'mod'", "'<<'", 
                            "'>>'", "'**'", "'^'", "'\\'", "'!'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, "LETTER_DIGIT", "VARIABLE", 
                             "DECIMAL", "BINARY", "OCTAL", "HEX", "CHARACTER_CODE_CONSTANT", 
                             "FLOAT", "GRAPHIC_TOKEN", "QUOTED", "DOUBLE_QUOTED_LIST", 
                             "BACK_QUOTED_STRING", "WS", "COMMENT", "MULTILINE_COMMENT" ];
    static ruleNames = [ "p_text", "directive", "clause", "termlist", "term", 
                         "operator_", "atom", "integer" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = prologParser.ruleNames;
        this.literalNames = prologParser.literalNames;
        this.symbolicNames = prologParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 4:
    	    		return this.term_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    term_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 5);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	p_text() {
	    let localctx = new P_textContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, prologParser.RULE_p_text);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << prologParser.T__0) | (1 << prologParser.T__2) | (1 << prologParser.T__3) | (1 << prologParser.T__5) | (1 << prologParser.T__6) | (1 << prologParser.T__9) | (1 << prologParser.T__11) | (1 << prologParser.T__12) | (1 << prologParser.T__13) | (1 << prologParser.T__14) | (1 << prologParser.T__15) | (1 << prologParser.T__16) | (1 << prologParser.T__17) | (1 << prologParser.T__18) | (1 << prologParser.T__19) | (1 << prologParser.T__20) | (1 << prologParser.T__21) | (1 << prologParser.T__22) | (1 << prologParser.T__23) | (1 << prologParser.T__24) | (1 << prologParser.T__25) | (1 << prologParser.T__26) | (1 << prologParser.T__27) | (1 << prologParser.T__28) | (1 << prologParser.T__29) | (1 << prologParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (prologParser.T__31 - 32)) | (1 << (prologParser.T__32 - 32)) | (1 << (prologParser.T__33 - 32)) | (1 << (prologParser.T__34 - 32)) | (1 << (prologParser.T__35 - 32)) | (1 << (prologParser.T__36 - 32)) | (1 << (prologParser.T__37 - 32)) | (1 << (prologParser.T__38 - 32)) | (1 << (prologParser.T__39 - 32)) | (1 << (prologParser.T__40 - 32)) | (1 << (prologParser.T__41 - 32)) | (1 << (prologParser.T__42 - 32)) | (1 << (prologParser.T__43 - 32)) | (1 << (prologParser.T__44 - 32)) | (1 << (prologParser.T__45 - 32)) | (1 << (prologParser.T__46 - 32)) | (1 << (prologParser.T__47 - 32)) | (1 << (prologParser.T__48 - 32)) | (1 << (prologParser.T__49 - 32)) | (1 << (prologParser.T__50 - 32)) | (1 << (prologParser.LETTER_DIGIT - 32)) | (1 << (prologParser.VARIABLE - 32)) | (1 << (prologParser.DECIMAL - 32)) | (1 << (prologParser.BINARY - 32)) | (1 << (prologParser.OCTAL - 32)) | (1 << (prologParser.HEX - 32)) | (1 << (prologParser.CHARACTER_CODE_CONSTANT - 32)) | (1 << (prologParser.FLOAT - 32)) | (1 << (prologParser.GRAPHIC_TOKEN - 32)) | (1 << (prologParser.QUOTED - 32)) | (1 << (prologParser.DOUBLE_QUOTED_LIST - 32)) | (1 << (prologParser.BACK_QUOTED_STRING - 32)))) !== 0)) {
	            this.state = 18;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 16;
	                this.directive();
	                break;

	            case 2:
	                this.state = 17;
	                this.clause();
	                break;

	            }
	            this.state = 22;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 23;
	        this.match(prologParser.EOF);
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



	directive() {
	    let localctx = new DirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, prologParser.RULE_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.match(prologParser.T__0);
	        this.state = 26;
	        this.term(0);
	        this.state = 27;
	        this.match(prologParser.T__1);
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
	    this.enterRule(localctx, 4, prologParser.RULE_clause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.term(0);
	        this.state = 30;
	        this.match(prologParser.T__1);
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



	termlist() {
	    let localctx = new TermlistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, prologParser.RULE_termlist);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.term(0);
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===prologParser.T__2) {
	            this.state = 33;
	            this.match(prologParser.T__2);
	            this.state = 34;
	            this.term(0);
	            this.state = 39;
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


	term(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new TermContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 8;
	    this.enterRecursionRule(localctx, 8, prologParser.RULE_term, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new VariableContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 41;
	            this.match(prologParser.VARIABLE);
	            break;

	        case 2:
	            localctx = new Braced_termContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 42;
	            this.match(prologParser.T__3);
	            this.state = 43;
	            this.term(0);
	            this.state = 44;
	            this.match(prologParser.T__4);
	            break;

	        case 3:
	            localctx = new Integer_termContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 47;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===prologParser.T__5) {
	                this.state = 46;
	                this.match(prologParser.T__5);
	            }

	            this.state = 49;
	            this.integer();
	            break;

	        case 4:
	            localctx = new FloatContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 51;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===prologParser.T__5) {
	                this.state = 50;
	                this.match(prologParser.T__5);
	            }

	            this.state = 53;
	            this.match(prologParser.FLOAT);
	            break;

	        case 5:
	            localctx = new Compound_termContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 54;
	            this.atom();
	            this.state = 55;
	            this.match(prologParser.T__3);
	            this.state = 56;
	            this.termlist();
	            this.state = 57;
	            this.match(prologParser.T__4);
	            break;

	        case 6:
	            localctx = new Unary_operatorContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 59;
	            this.operator_();
	            this.state = 60;
	            this.term(4);
	            break;

	        case 7:
	            localctx = new List_termContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 62;
	            this.match(prologParser.T__6);
	            this.state = 63;
	            this.termlist();
	            this.state = 66;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===prologParser.T__7) {
	                this.state = 64;
	                this.match(prologParser.T__7);
	                this.state = 65;
	                this.term(0);
	            }

	            this.state = 68;
	            this.match(prologParser.T__8);
	            break;

	        case 8:
	            localctx = new Curly_bracketed_termContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 70;
	            this.match(prologParser.T__9);
	            this.state = 71;
	            this.termlist();
	            this.state = 72;
	            this.match(prologParser.T__10);
	            break;

	        case 9:
	            localctx = new Atom_termContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 74;
	            this.atom();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 83;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Binary_operatorContext(this, new TermContext(this, _parentctx, _parentState));
	                this.pushNewRecursionContext(localctx, _startState, prologParser.RULE_term);
	                this.state = 77;
	                if (!( this.precpred(this._ctx, 5))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                }
	                this.state = 78;
	                this.operator_();
	                this.state = 79;
	                this.term(5); 
	            }
	            this.state = 85;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
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



	operator_() {
	    let localctx = new Operator_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, prologParser.RULE_operator_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << prologParser.T__0) | (1 << prologParser.T__2) | (1 << prologParser.T__5) | (1 << prologParser.T__11) | (1 << prologParser.T__12) | (1 << prologParser.T__13) | (1 << prologParser.T__14) | (1 << prologParser.T__15) | (1 << prologParser.T__16) | (1 << prologParser.T__17) | (1 << prologParser.T__18) | (1 << prologParser.T__19) | (1 << prologParser.T__20) | (1 << prologParser.T__21) | (1 << prologParser.T__22) | (1 << prologParser.T__23) | (1 << prologParser.T__24) | (1 << prologParser.T__25) | (1 << prologParser.T__26) | (1 << prologParser.T__27) | (1 << prologParser.T__28) | (1 << prologParser.T__29) | (1 << prologParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (prologParser.T__31 - 32)) | (1 << (prologParser.T__32 - 32)) | (1 << (prologParser.T__33 - 32)) | (1 << (prologParser.T__34 - 32)) | (1 << (prologParser.T__35 - 32)) | (1 << (prologParser.T__36 - 32)) | (1 << (prologParser.T__37 - 32)) | (1 << (prologParser.T__38 - 32)) | (1 << (prologParser.T__39 - 32)) | (1 << (prologParser.T__40 - 32)) | (1 << (prologParser.T__41 - 32)) | (1 << (prologParser.T__42 - 32)) | (1 << (prologParser.T__43 - 32)) | (1 << (prologParser.T__44 - 32)) | (1 << (prologParser.T__45 - 32)) | (1 << (prologParser.T__46 - 32)) | (1 << (prologParser.T__47 - 32)) | (1 << (prologParser.T__48 - 32)) | (1 << (prologParser.T__49 - 32)))) !== 0))) {
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



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, prologParser.RULE_atom);
	    try {
	        this.state = 99;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case prologParser.T__6:
	            localctx = new Empty_listContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 88;
	            this.match(prologParser.T__6);
	            this.state = 89;
	            this.match(prologParser.T__8);
	            break;
	        case prologParser.T__9:
	            localctx = new Empty_bracesContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 90;
	            this.match(prologParser.T__9);
	            this.state = 91;
	            this.match(prologParser.T__10);
	            break;
	        case prologParser.LETTER_DIGIT:
	            localctx = new NameContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 92;
	            this.match(prologParser.LETTER_DIGIT);
	            break;
	        case prologParser.GRAPHIC_TOKEN:
	            localctx = new GraphicContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 93;
	            this.match(prologParser.GRAPHIC_TOKEN);
	            break;
	        case prologParser.QUOTED:
	            localctx = new Quoted_stringContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 94;
	            this.match(prologParser.QUOTED);
	            break;
	        case prologParser.DOUBLE_QUOTED_LIST:
	            localctx = new Dq_stringContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 95;
	            this.match(prologParser.DOUBLE_QUOTED_LIST);
	            break;
	        case prologParser.BACK_QUOTED_STRING:
	            localctx = new Backq_stringContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 96;
	            this.match(prologParser.BACK_QUOTED_STRING);
	            break;
	        case prologParser.T__17:
	            localctx = new SemicolonContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 97;
	            this.match(prologParser.T__17);
	            break;
	        case prologParser.T__50:
	            localctx = new CutContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 98;
	            this.match(prologParser.T__50);
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



	integer() {
	    let localctx = new IntegerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, prologParser.RULE_integer);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        _la = this._input.LA(1);
	        if(!(((((_la - 54)) & ~0x1f) == 0 && ((1 << (_la - 54)) & ((1 << (prologParser.DECIMAL - 54)) | (1 << (prologParser.BINARY - 54)) | (1 << (prologParser.OCTAL - 54)) | (1 << (prologParser.HEX - 54)) | (1 << (prologParser.CHARACTER_CODE_CONSTANT - 54)))) !== 0))) {
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

prologParser.EOF = antlr4.Token.EOF;
prologParser.T__0 = 1;
prologParser.T__1 = 2;
prologParser.T__2 = 3;
prologParser.T__3 = 4;
prologParser.T__4 = 5;
prologParser.T__5 = 6;
prologParser.T__6 = 7;
prologParser.T__7 = 8;
prologParser.T__8 = 9;
prologParser.T__9 = 10;
prologParser.T__10 = 11;
prologParser.T__11 = 12;
prologParser.T__12 = 13;
prologParser.T__13 = 14;
prologParser.T__14 = 15;
prologParser.T__15 = 16;
prologParser.T__16 = 17;
prologParser.T__17 = 18;
prologParser.T__18 = 19;
prologParser.T__19 = 20;
prologParser.T__20 = 21;
prologParser.T__21 = 22;
prologParser.T__22 = 23;
prologParser.T__23 = 24;
prologParser.T__24 = 25;
prologParser.T__25 = 26;
prologParser.T__26 = 27;
prologParser.T__27 = 28;
prologParser.T__28 = 29;
prologParser.T__29 = 30;
prologParser.T__30 = 31;
prologParser.T__31 = 32;
prologParser.T__32 = 33;
prologParser.T__33 = 34;
prologParser.T__34 = 35;
prologParser.T__35 = 36;
prologParser.T__36 = 37;
prologParser.T__37 = 38;
prologParser.T__38 = 39;
prologParser.T__39 = 40;
prologParser.T__40 = 41;
prologParser.T__41 = 42;
prologParser.T__42 = 43;
prologParser.T__43 = 44;
prologParser.T__44 = 45;
prologParser.T__45 = 46;
prologParser.T__46 = 47;
prologParser.T__47 = 48;
prologParser.T__48 = 49;
prologParser.T__49 = 50;
prologParser.T__50 = 51;
prologParser.LETTER_DIGIT = 52;
prologParser.VARIABLE = 53;
prologParser.DECIMAL = 54;
prologParser.BINARY = 55;
prologParser.OCTAL = 56;
prologParser.HEX = 57;
prologParser.CHARACTER_CODE_CONSTANT = 58;
prologParser.FLOAT = 59;
prologParser.GRAPHIC_TOKEN = 60;
prologParser.QUOTED = 61;
prologParser.DOUBLE_QUOTED_LIST = 62;
prologParser.BACK_QUOTED_STRING = 63;
prologParser.WS = 64;
prologParser.COMMENT = 65;
prologParser.MULTILINE_COMMENT = 66;

prologParser.RULE_p_text = 0;
prologParser.RULE_directive = 1;
prologParser.RULE_clause = 2;
prologParser.RULE_termlist = 3;
prologParser.RULE_term = 4;
prologParser.RULE_operator_ = 5;
prologParser.RULE_atom = 6;
prologParser.RULE_integer = 7;

class P_textContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = prologParser.RULE_p_text;
    }

	EOF() {
	    return this.getToken(prologParser.EOF, 0);
	};

	directive = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DirectiveContext);
	    } else {
	        return this.getTypedRuleContext(DirectiveContext,i);
	    }
	};

	clause = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ClauseContext);
	    } else {
	        return this.getTypedRuleContext(ClauseContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.enterP_text(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.exitP_text(this);
		}
	}


}



class DirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = prologParser.RULE_directive;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.enterDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.exitDirective(this);
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
        this.ruleIndex = prologParser.RULE_clause;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.enterClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.exitClause(this);
		}
	}


}



class TermlistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = prologParser.RULE_termlist;
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
	    if(listener instanceof prologListener ) {
	        listener.enterTermlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.exitTermlist(this);
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
        this.ruleIndex = prologParser.RULE_term;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class Atom_termContext extends TermContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.enterAtom_term(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.exitAtom_term(this);
		}
	}


}

prologParser.Atom_termContext = Atom_termContext;

class Binary_operatorContext extends TermContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
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

	operator_() {
	    return this.getTypedRuleContext(Operator_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.enterBinary_operator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.exitBinary_operator(this);
		}
	}


}

prologParser.Binary_operatorContext = Binary_operatorContext;

class Unary_operatorContext extends TermContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	operator_() {
	    return this.getTypedRuleContext(Operator_Context,0);
	};

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.enterUnary_operator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.exitUnary_operator(this);
		}
	}


}

prologParser.Unary_operatorContext = Unary_operatorContext;

class Braced_termContext extends TermContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.enterBraced_term(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.exitBraced_term(this);
		}
	}


}

prologParser.Braced_termContext = Braced_termContext;

class List_termContext extends TermContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	termlist() {
	    return this.getTypedRuleContext(TermlistContext,0);
	};

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.enterList_term(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.exitList_term(this);
		}
	}


}

prologParser.List_termContext = List_termContext;

class VariableContext extends TermContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	VARIABLE() {
	    return this.getToken(prologParser.VARIABLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.exitVariable(this);
		}
	}


}

prologParser.VariableContext = VariableContext;

class FloatContext extends TermContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FLOAT() {
	    return this.getToken(prologParser.FLOAT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.enterFloat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.exitFloat(this);
		}
	}


}

prologParser.FloatContext = FloatContext;

class Compound_termContext extends TermContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	termlist() {
	    return this.getTypedRuleContext(TermlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.enterCompound_term(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.exitCompound_term(this);
		}
	}


}

prologParser.Compound_termContext = Compound_termContext;

class Integer_termContext extends TermContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	integer() {
	    return this.getTypedRuleContext(IntegerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.enterInteger_term(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.exitInteger_term(this);
		}
	}


}

prologParser.Integer_termContext = Integer_termContext;

class Curly_bracketed_termContext extends TermContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	termlist() {
	    return this.getTypedRuleContext(TermlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.enterCurly_bracketed_term(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.exitCurly_bracketed_term(this);
		}
	}


}

prologParser.Curly_bracketed_termContext = Curly_bracketed_termContext;

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
        this.ruleIndex = prologParser.RULE_operator_;
    }


	enterRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.enterOperator_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.exitOperator_(this);
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
        this.ruleIndex = prologParser.RULE_atom;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class Backq_stringContext extends AtomContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	BACK_QUOTED_STRING() {
	    return this.getToken(prologParser.BACK_QUOTED_STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.enterBackq_string(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.exitBackq_string(this);
		}
	}


}

prologParser.Backq_stringContext = Backq_stringContext;

class CutContext extends AtomContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.enterCut(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.exitCut(this);
		}
	}


}

prologParser.CutContext = CutContext;

class Empty_bracesContext extends AtomContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.enterEmpty_braces(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.exitEmpty_braces(this);
		}
	}


}

prologParser.Empty_bracesContext = Empty_bracesContext;

class Dq_stringContext extends AtomContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DOUBLE_QUOTED_LIST() {
	    return this.getToken(prologParser.DOUBLE_QUOTED_LIST, 0);
	};

	enterRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.enterDq_string(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.exitDq_string(this);
		}
	}


}

prologParser.Dq_stringContext = Dq_stringContext;

class NameContext extends AtomContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LETTER_DIGIT() {
	    return this.getToken(prologParser.LETTER_DIGIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.exitName(this);
		}
	}


}

prologParser.NameContext = NameContext;

class Quoted_stringContext extends AtomContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	QUOTED() {
	    return this.getToken(prologParser.QUOTED, 0);
	};

	enterRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.enterQuoted_string(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.exitQuoted_string(this);
		}
	}


}

prologParser.Quoted_stringContext = Quoted_stringContext;

class Empty_listContext extends AtomContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.enterEmpty_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.exitEmpty_list(this);
		}
	}


}

prologParser.Empty_listContext = Empty_listContext;

class GraphicContext extends AtomContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	GRAPHIC_TOKEN() {
	    return this.getToken(prologParser.GRAPHIC_TOKEN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.enterGraphic(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.exitGraphic(this);
		}
	}


}

prologParser.GraphicContext = GraphicContext;

class SemicolonContext extends AtomContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.enterSemicolon(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.exitSemicolon(this);
		}
	}


}

prologParser.SemicolonContext = SemicolonContext;

class IntegerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = prologParser.RULE_integer;
    }

	DECIMAL() {
	    return this.getToken(prologParser.DECIMAL, 0);
	};

	CHARACTER_CODE_CONSTANT() {
	    return this.getToken(prologParser.CHARACTER_CODE_CONSTANT, 0);
	};

	BINARY() {
	    return this.getToken(prologParser.BINARY, 0);
	};

	OCTAL() {
	    return this.getToken(prologParser.OCTAL, 0);
	};

	HEX() {
	    return this.getToken(prologParser.HEX, 0);
	};

	enterRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.enterInteger(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prologListener ) {
	        listener.exitInteger(this);
		}
	}


}




prologParser.P_textContext = P_textContext; 
prologParser.DirectiveContext = DirectiveContext; 
prologParser.ClauseContext = ClauseContext; 
prologParser.TermlistContext = TermlistContext; 
prologParser.TermContext = TermContext; 
prologParser.Operator_Context = Operator_Context; 
prologParser.AtomContext = AtomContext; 
prologParser.IntegerContext = IntegerContext; 
