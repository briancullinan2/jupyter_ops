// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/sapf/sapf.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import sapfListener from './sapfListener.js';
const serializedATN = [4,1,32,156,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,5,0,30,8,0,10,0,12,0,33,9,0,1,0,1,0,1,1,4,1,38,8,1,11,1,12,
1,39,1,2,1,2,1,2,4,2,45,8,2,11,2,12,2,46,1,2,1,2,1,2,5,2,52,8,2,10,2,12,
2,55,9,2,1,2,3,2,58,8,2,1,2,1,2,1,2,4,2,63,8,2,11,2,12,2,64,5,2,67,8,2,10,
2,12,2,70,9,2,1,3,3,3,73,8,3,1,3,1,3,4,3,77,8,3,11,3,12,3,78,1,3,1,3,1,4,
1,4,1,4,4,4,86,8,4,11,4,12,4,87,1,4,1,4,1,4,3,4,93,8,4,1,5,1,5,1,5,1,6,1,
6,5,6,100,8,6,10,6,12,6,103,9,6,1,6,3,6,106,8,6,1,6,1,6,1,6,3,6,111,8,6,
1,7,1,7,1,7,1,7,1,7,3,7,118,8,7,1,8,3,8,121,8,8,1,8,1,8,1,8,1,8,1,8,1,8,
1,8,1,8,3,8,131,8,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,11,1,11,1,12,1,
12,1,12,3,12,146,8,12,1,12,3,12,149,8,12,1,13,3,13,152,8,13,1,13,1,13,1,
13,0,1,4,14,0,2,4,6,8,10,12,14,16,18,20,22,24,26,0,4,1,0,27,28,1,0,27,30,
1,0,7,13,2,0,5,5,14,16,168,0,31,1,0,0,0,2,37,1,0,0,0,4,57,1,0,0,0,6,72,1,
0,0,0,8,82,1,0,0,0,10,94,1,0,0,0,12,97,1,0,0,0,14,117,1,0,0,0,16,120,1,0,
0,0,18,132,1,0,0,0,20,136,1,0,0,0,22,140,1,0,0,0,24,145,1,0,0,0,26,151,1,
0,0,0,28,30,3,2,1,0,29,28,1,0,0,0,30,33,1,0,0,0,31,29,1,0,0,0,31,32,1,0,
0,0,32,34,1,0,0,0,33,31,1,0,0,0,34,35,5,0,0,1,35,1,1,0,0,0,36,38,3,4,2,0,
37,36,1,0,0,0,38,39,1,0,0,0,39,37,1,0,0,0,39,40,1,0,0,0,40,3,1,0,0,0,41,
42,6,2,-1,0,42,44,5,25,0,0,43,45,3,4,2,0,44,43,1,0,0,0,45,46,1,0,0,0,46,
44,1,0,0,0,46,47,1,0,0,0,47,48,1,0,0,0,48,49,5,26,0,0,49,58,1,0,0,0,50,52,
7,0,0,0,51,50,1,0,0,0,52,55,1,0,0,0,53,51,1,0,0,0,53,54,1,0,0,0,54,56,1,
0,0,0,55,53,1,0,0,0,56,58,3,14,7,0,57,41,1,0,0,0,57,53,1,0,0,0,58,68,1,0,
0,0,59,60,10,3,0,0,60,62,3,4,2,0,61,63,7,1,0,0,62,61,1,0,0,0,63,64,1,0,0,
0,64,62,1,0,0,0,64,65,1,0,0,0,65,67,1,0,0,0,66,59,1,0,0,0,67,70,1,0,0,0,
68,66,1,0,0,0,68,69,1,0,0,0,69,5,1,0,0,0,70,68,1,0,0,0,71,73,5,1,0,0,72,
71,1,0,0,0,72,73,1,0,0,0,73,74,1,0,0,0,74,76,5,23,0,0,75,77,3,4,2,0,76,75,
1,0,0,0,77,78,1,0,0,0,78,76,1,0,0,0,78,79,1,0,0,0,79,80,1,0,0,0,80,81,5,
24,0,0,81,7,1,0,0,0,82,85,5,21,0,0,83,86,3,10,5,0,84,86,3,4,2,0,85,83,1,
0,0,0,85,84,1,0,0,0,86,87,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,89,1,0,
0,0,89,92,5,22,0,0,90,91,5,2,0,0,91,93,3,26,13,0,92,90,1,0,0,0,92,93,1,0,
0,0,93,9,1,0,0,0,94,95,5,3,0,0,95,96,5,18,0,0,96,11,1,0,0,0,97,101,5,4,0,
0,98,100,5,18,0,0,99,98,1,0,0,0,100,103,1,0,0,0,101,99,1,0,0,0,101,102,1,
0,0,0,102,105,1,0,0,0,103,101,1,0,0,0,104,106,5,19,0,0,105,104,1,0,0,0,105,
106,1,0,0,0,106,107,1,0,0,0,107,110,3,6,3,0,108,109,5,2,0,0,109,111,3,26,
13,0,110,108,1,0,0,0,110,111,1,0,0,0,111,13,1,0,0,0,112,118,3,24,12,0,113,
118,3,6,3,0,114,118,3,26,13,0,115,118,3,8,4,0,116,118,3,12,6,0,117,112,1,
0,0,0,117,113,1,0,0,0,117,114,1,0,0,0,117,115,1,0,0,0,117,116,1,0,0,0,118,
15,1,0,0,0,119,121,5,28,0,0,120,119,1,0,0,0,120,121,1,0,0,0,121,130,1,0,
0,0,122,123,5,17,0,0,123,124,5,5,0,0,124,131,5,17,0,0,125,126,5,17,0,0,126,
131,5,5,0,0,127,128,5,5,0,0,128,131,5,17,0,0,129,131,5,17,0,0,130,122,1,
0,0,0,130,125,1,0,0,0,130,127,1,0,0,0,130,129,1,0,0,0,131,17,1,0,0,0,132,
133,3,16,8,0,133,134,5,6,0,0,134,135,3,16,8,0,135,19,1,0,0,0,136,137,3,16,
8,0,137,138,5,30,0,0,138,139,3,16,8,0,139,21,1,0,0,0,140,141,7,2,0,0,141,
23,1,0,0,0,142,146,3,18,9,0,143,146,3,16,8,0,144,146,3,20,10,0,145,142,1,
0,0,0,145,143,1,0,0,0,145,144,1,0,0,0,146,148,1,0,0,0,147,149,3,22,11,0,
148,147,1,0,0,0,148,149,1,0,0,0,149,25,1,0,0,0,150,152,7,3,0,0,151,150,1,
0,0,0,151,152,1,0,0,0,152,153,1,0,0,0,153,154,5,18,0,0,154,27,1,0,0,0,21,
31,39,46,53,57,64,68,72,78,85,87,92,101,105,110,117,120,130,145,148,151];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class sapfParser extends antlr4.Parser {

    static grammarFileName = "sapf.g4";
    static literalNames = [ null, "'#'", "'='", "':'", "'\\'", "'.'", "'e'", 
                            "'pi'", "'M'", "'k'", "'h'", "'c'", "'m'", "'u'", 
                            "'`'", "'''", "','", null, null, null, "'@'", 
                            "'{'", "'}'", "'['", "']'", "'('", "')'", "'+'", 
                            "'-'", "'*'", "'/'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, "DIGITS", "LITERAL", "STRING", "EACH", 
                             "LCURL", "RCURL", "LBRACK", "RBRACK", "LPAREN", 
                             "RPAREN", "PLUS", "MINUS", "TIMES", "DIV", 
                             "COMMENT", "WS" ];
    static ruleNames = [ "file_", "line", "expression", "list", "form", 
                         "key", "function", "atom", "decimal", "scientific", 
                         "fraction", "suffix", "number", "word" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = sapfParser.ruleNames;
        this.literalNames = sapfParser.literalNames;
        this.symbolicNames = sapfParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 2:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 3);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	file_() {
	    let localctx = new File_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, sapfParser.RULE_file_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 447201330) !== 0)) {
	            this.state = 28;
	            this.line();
	            this.state = 33;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 34;
	        this.match(sapfParser.EOF);
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



	line() {
	    let localctx = new LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, sapfParser.RULE_line);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 36;
	        		this.expression(0);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 39; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
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


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 4;
	    this.enterRecursionRule(localctx, 4, sapfParser.RULE_expression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 25:
	            this.state = 42;
	            this.match(sapfParser.LPAREN);
	            this.state = 44; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 43;
	                this.expression(0);
	                this.state = 46; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 447201330) !== 0));
	            this.state = 48;
	            this.match(sapfParser.RPAREN);
	            break;
	        case 1:
	        case 4:
	        case 5:
	        case 14:
	        case 15:
	        case 16:
	        case 17:
	        case 18:
	        case 21:
	        case 23:
	        case 27:
	        case 28:
	            this.state = 53;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 50;
	                    _la = this._input.LA(1);
	                    if(!(_la===27 || _la===28)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    } 
	                }
	                this.state = 55;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	            }

	            this.state = 56;
	            this.atom();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 68;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ExpressionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, sapfParser.RULE_expression);
	                this.state = 59;
	                if (!( this.precpred(this._ctx, 3))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                }
	                this.state = 60;
	                this.expression(0);
	                this.state = 62; 
	                this._errHandler.sync(this);
	                var _alt = 1;
	                do {
	                	switch (_alt) {
	                	case 1:
	                		this.state = 61;
	                		_la = this._input.LA(1);
	                		if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 2013265920) !== 0))) {
	                		this._errHandler.recoverInline(this);
	                		}
	                		else {
	                			this._errHandler.reportMatch(this);
	                		    this.consume();
	                		}
	                		break;
	                	default:
	                		throw new antlr4.error.NoViableAltException(this);
	                	}
	                	this.state = 64; 
	                	this._errHandler.sync(this);
	                	_alt = this._interp.adaptivePredict(this._input,5, this._ctx);
	                } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER ); 
	            }
	            this.state = 70;
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



	list() {
	    let localctx = new ListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, sapfParser.RULE_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 71;
	            this.match(sapfParser.T__0);
	        }

	        this.state = 74;
	        this.match(sapfParser.LBRACK);
	        this.state = 76; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 75;
	            this.expression(0);
	            this.state = 78; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 447201330) !== 0));
	        this.state = 80;
	        this.match(sapfParser.RBRACK);
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



	form() {
	    let localctx = new FormContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, sapfParser.RULE_form);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.match(sapfParser.LCURL);
	        this.state = 85; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 85;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 3:
	                this.state = 83;
	                this.key();
	                break;
	            case 1:
	            case 4:
	            case 5:
	            case 14:
	            case 15:
	            case 16:
	            case 17:
	            case 18:
	            case 21:
	            case 23:
	            case 25:
	            case 27:
	            case 28:
	                this.state = 84;
	                this.expression(0);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 87; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 447201338) !== 0));
	        this.state = 89;
	        this.match(sapfParser.RCURL);
	        this.state = 92;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        if(la_===1) {
	            this.state = 90;
	            this.match(sapfParser.T__1);
	            this.state = 91;
	            this.word();

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



	key() {
	    let localctx = new KeyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, sapfParser.RULE_key);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.match(sapfParser.T__2);
	        this.state = 95;
	        this.match(sapfParser.LITERAL);
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



	function_() {
	    let localctx = new FunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, sapfParser.RULE_function);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.match(sapfParser.T__3);
	        this.state = 101;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===18) {
	            this.state = 98;
	            this.match(sapfParser.LITERAL);
	            this.state = 103;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 105;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===19) {
	            this.state = 104;
	            this.match(sapfParser.STRING);
	        }

	        this.state = 107;
	        this.list();
	        this.state = 110;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        if(la_===1) {
	            this.state = 108;
	            this.match(sapfParser.T__1);
	            this.state = 109;
	            this.word();

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
	    this.enterRule(localctx, 14, sapfParser.RULE_atom);
	    try {
	        this.state = 117;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 112;
	            this.number();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 113;
	            this.list();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 114;
	            this.word();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 115;
	            this.form();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 116;
	            this.function_();
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



	decimal() {
	    let localctx = new DecimalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, sapfParser.RULE_decimal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===28) {
	            this.state = 119;
	            this.match(sapfParser.MINUS);
	        }

	        this.state = 130;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 122;
	            this.match(sapfParser.DIGITS);
	            this.state = 123;
	            this.match(sapfParser.T__4);
	            this.state = 124;
	            this.match(sapfParser.DIGITS);
	            break;

	        case 2:
	            this.state = 125;
	            this.match(sapfParser.DIGITS);
	            this.state = 126;
	            this.match(sapfParser.T__4);
	            break;

	        case 3:
	            this.state = 127;
	            this.match(sapfParser.T__4);
	            this.state = 128;
	            this.match(sapfParser.DIGITS);
	            break;

	        case 4:
	            this.state = 129;
	            this.match(sapfParser.DIGITS);
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



	scientific() {
	    let localctx = new ScientificContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, sapfParser.RULE_scientific);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 132;
	        this.decimal();
	        this.state = 133;
	        this.match(sapfParser.T__5);
	        this.state = 134;
	        this.decimal();
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



	fraction() {
	    let localctx = new FractionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, sapfParser.RULE_fraction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.decimal();
	        this.state = 137;
	        this.match(sapfParser.DIV);
	        this.state = 138;
	        this.decimal();
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



	suffix() {
	    let localctx = new SuffixContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, sapfParser.RULE_suffix);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 16256) !== 0))) {
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



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, sapfParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 142;
	            this.scientific();
	            break;

	        case 2:
	            this.state = 143;
	            this.decimal();
	            break;

	        case 3:
	            this.state = 144;
	            this.fraction();
	            break;

	        }
	        this.state = 148;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        if(la_===1) {
	            this.state = 147;
	            this.suffix();

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



	word() {
	    let localctx = new WordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, sapfParser.RULE_word);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 114720) !== 0)) {
	            this.state = 150;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 114720) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 153;
	        this.match(sapfParser.LITERAL);
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

sapfParser.EOF = antlr4.Token.EOF;
sapfParser.T__0 = 1;
sapfParser.T__1 = 2;
sapfParser.T__2 = 3;
sapfParser.T__3 = 4;
sapfParser.T__4 = 5;
sapfParser.T__5 = 6;
sapfParser.T__6 = 7;
sapfParser.T__7 = 8;
sapfParser.T__8 = 9;
sapfParser.T__9 = 10;
sapfParser.T__10 = 11;
sapfParser.T__11 = 12;
sapfParser.T__12 = 13;
sapfParser.T__13 = 14;
sapfParser.T__14 = 15;
sapfParser.T__15 = 16;
sapfParser.DIGITS = 17;
sapfParser.LITERAL = 18;
sapfParser.STRING = 19;
sapfParser.EACH = 20;
sapfParser.LCURL = 21;
sapfParser.RCURL = 22;
sapfParser.LBRACK = 23;
sapfParser.RBRACK = 24;
sapfParser.LPAREN = 25;
sapfParser.RPAREN = 26;
sapfParser.PLUS = 27;
sapfParser.MINUS = 28;
sapfParser.TIMES = 29;
sapfParser.DIV = 30;
sapfParser.COMMENT = 31;
sapfParser.WS = 32;

sapfParser.RULE_file_ = 0;
sapfParser.RULE_line = 1;
sapfParser.RULE_expression = 2;
sapfParser.RULE_list = 3;
sapfParser.RULE_form = 4;
sapfParser.RULE_key = 5;
sapfParser.RULE_function = 6;
sapfParser.RULE_atom = 7;
sapfParser.RULE_decimal = 8;
sapfParser.RULE_scientific = 9;
sapfParser.RULE_fraction = 10;
sapfParser.RULE_suffix = 11;
sapfParser.RULE_number = 12;
sapfParser.RULE_word = 13;

class File_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sapfParser.RULE_file_;
    }

	EOF() {
	    return this.getToken(sapfParser.EOF, 0);
	};

	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof sapfListener ) {
	        listener.enterFile_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sapfListener ) {
	        listener.exitFile_(this);
		}
	}


}



class LineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sapfParser.RULE_line;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof sapfListener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sapfListener ) {
	        listener.exitLine(this);
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
        this.ruleIndex = sapfParser.RULE_expression;
    }

	LPAREN() {
	    return this.getToken(sapfParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(sapfParser.RPAREN, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(sapfParser.PLUS);
	    } else {
	        return this.getToken(sapfParser.PLUS, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(sapfParser.MINUS);
	    } else {
	        return this.getToken(sapfParser.MINUS, i);
	    }
	};


	TIMES = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(sapfParser.TIMES);
	    } else {
	        return this.getToken(sapfParser.TIMES, i);
	    }
	};


	DIV = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(sapfParser.DIV);
	    } else {
	        return this.getToken(sapfParser.DIV, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof sapfListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sapfListener ) {
	        listener.exitExpression(this);
		}
	}


}



class ListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sapfParser.RULE_list;
    }

	LBRACK() {
	    return this.getToken(sapfParser.LBRACK, 0);
	};

	RBRACK() {
	    return this.getToken(sapfParser.RBRACK, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof sapfListener ) {
	        listener.enterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sapfListener ) {
	        listener.exitList(this);
		}
	}


}



class FormContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sapfParser.RULE_form;
    }

	LCURL() {
	    return this.getToken(sapfParser.LCURL, 0);
	};

	RCURL() {
	    return this.getToken(sapfParser.RCURL, 0);
	};

	key = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(KeyContext);
	    } else {
	        return this.getTypedRuleContext(KeyContext,i);
	    }
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	word() {
	    return this.getTypedRuleContext(WordContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof sapfListener ) {
	        listener.enterForm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sapfListener ) {
	        listener.exitForm(this);
		}
	}


}



class KeyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sapfParser.RULE_key;
    }

	LITERAL() {
	    return this.getToken(sapfParser.LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof sapfListener ) {
	        listener.enterKey(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sapfListener ) {
	        listener.exitKey(this);
		}
	}


}



class FunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sapfParser.RULE_function;
    }

	list() {
	    return this.getTypedRuleContext(ListContext,0);
	};

	LITERAL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(sapfParser.LITERAL);
	    } else {
	        return this.getToken(sapfParser.LITERAL, i);
	    }
	};


	STRING() {
	    return this.getToken(sapfParser.STRING, 0);
	};

	word() {
	    return this.getTypedRuleContext(WordContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof sapfListener ) {
	        listener.enterFunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sapfListener ) {
	        listener.exitFunction(this);
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
        this.ruleIndex = sapfParser.RULE_atom;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	list() {
	    return this.getTypedRuleContext(ListContext,0);
	};

	word() {
	    return this.getTypedRuleContext(WordContext,0);
	};

	form() {
	    return this.getTypedRuleContext(FormContext,0);
	};

	function_() {
	    return this.getTypedRuleContext(FunctionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof sapfListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sapfListener ) {
	        listener.exitAtom(this);
		}
	}


}



class DecimalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sapfParser.RULE_decimal;
    }

	DIGITS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(sapfParser.DIGITS);
	    } else {
	        return this.getToken(sapfParser.DIGITS, i);
	    }
	};


	MINUS() {
	    return this.getToken(sapfParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof sapfListener ) {
	        listener.enterDecimal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sapfListener ) {
	        listener.exitDecimal(this);
		}
	}


}



class ScientificContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sapfParser.RULE_scientific;
    }

	decimal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DecimalContext);
	    } else {
	        return this.getTypedRuleContext(DecimalContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof sapfListener ) {
	        listener.enterScientific(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sapfListener ) {
	        listener.exitScientific(this);
		}
	}


}



class FractionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sapfParser.RULE_fraction;
    }

	decimal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DecimalContext);
	    } else {
	        return this.getTypedRuleContext(DecimalContext,i);
	    }
	};

	DIV() {
	    return this.getToken(sapfParser.DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof sapfListener ) {
	        listener.enterFraction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sapfListener ) {
	        listener.exitFraction(this);
		}
	}


}



class SuffixContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sapfParser.RULE_suffix;
    }


	enterRule(listener) {
	    if(listener instanceof sapfListener ) {
	        listener.enterSuffix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sapfListener ) {
	        listener.exitSuffix(this);
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
        this.ruleIndex = sapfParser.RULE_number;
    }

	scientific() {
	    return this.getTypedRuleContext(ScientificContext,0);
	};

	decimal() {
	    return this.getTypedRuleContext(DecimalContext,0);
	};

	fraction() {
	    return this.getTypedRuleContext(FractionContext,0);
	};

	suffix() {
	    return this.getTypedRuleContext(SuffixContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof sapfListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sapfListener ) {
	        listener.exitNumber(this);
		}
	}


}



class WordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = sapfParser.RULE_word;
    }

	LITERAL() {
	    return this.getToken(sapfParser.LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof sapfListener ) {
	        listener.enterWord(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof sapfListener ) {
	        listener.exitWord(this);
		}
	}


}




sapfParser.File_Context = File_Context; 
sapfParser.LineContext = LineContext; 
sapfParser.ExpressionContext = ExpressionContext; 
sapfParser.ListContext = ListContext; 
sapfParser.FormContext = FormContext; 
sapfParser.KeyContext = KeyContext; 
sapfParser.FunctionContext = FunctionContext; 
sapfParser.AtomContext = AtomContext; 
sapfParser.DecimalContext = DecimalContext; 
sapfParser.ScientificContext = ScientificContext; 
sapfParser.FractionContext = FractionContext; 
sapfParser.SuffixContext = SuffixContext; 
sapfParser.NumberContext = NumberContext; 
sapfParser.WordContext = WordContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
