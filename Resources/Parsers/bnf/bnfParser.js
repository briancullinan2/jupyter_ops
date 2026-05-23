// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/bnf/bnfParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import bnfParserListener from './bnfParserListener.js';
import bnfParserBase from './bnfParserBase.js';

const serializedATN = [4,1,15,116,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,3,0,22,8,0,1,0,3,0,25,8,0,
1,0,1,0,1,1,1,1,3,1,31,8,1,1,1,1,1,5,1,35,8,1,10,1,12,1,38,9,1,1,2,1,2,1,
2,1,2,1,3,3,3,45,8,3,1,3,1,3,1,3,1,3,4,3,51,8,3,11,3,12,3,52,1,3,3,3,56,
8,3,1,4,3,4,59,8,4,1,4,1,4,1,4,5,4,64,8,4,10,4,12,4,67,9,4,1,5,4,5,70,8,
5,11,5,12,5,71,1,6,3,6,75,8,6,1,6,1,6,5,6,79,8,6,10,6,12,6,82,9,6,1,6,1,
6,1,6,5,6,87,8,6,10,6,12,6,90,9,6,1,6,1,6,1,6,5,6,95,8,6,10,6,12,6,98,9,
6,1,6,1,6,3,6,102,8,6,1,7,3,7,105,8,7,1,7,1,7,1,8,3,8,110,8,8,1,8,1,8,1,
9,1,9,1,9,5,52,71,80,88,96,0,10,0,2,4,6,8,10,12,14,16,18,0,3,1,0,5,8,1,0,
9,11,1,0,13,14,124,0,21,1,0,0,0,2,28,1,0,0,0,4,39,1,0,0,0,6,44,1,0,0,0,8,
58,1,0,0,0,10,69,1,0,0,0,12,74,1,0,0,0,14,104,1,0,0,0,16,109,1,0,0,0,18,
113,1,0,0,0,20,22,3,2,1,0,21,20,1,0,0,0,21,22,1,0,0,0,22,24,1,0,0,0,23,25,
3,18,9,0,24,23,1,0,0,0,24,25,1,0,0,0,25,26,1,0,0,0,26,27,5,0,0,1,27,1,1,
0,0,0,28,36,3,4,2,0,29,31,5,13,0,0,30,29,1,0,0,0,30,31,1,0,0,0,31,32,1,0,
0,0,32,33,5,14,0,0,33,35,3,4,2,0,34,30,1,0,0,0,35,38,1,0,0,0,36,34,1,0,0,
0,36,37,1,0,0,0,37,3,1,0,0,0,38,36,1,0,0,0,39,40,3,6,3,0,40,41,3,14,7,0,
41,42,3,8,4,0,42,5,1,0,0,0,43,45,3,18,9,0,44,43,1,0,0,0,44,45,1,0,0,0,45,
55,1,0,0,0,46,56,5,12,0,0,47,50,5,1,0,0,48,49,4,3,0,0,49,51,9,0,0,0,50,48,
1,0,0,0,51,52,1,0,0,0,52,53,1,0,0,0,52,50,1,0,0,0,53,54,1,0,0,0,54,56,5,
2,0,0,55,46,1,0,0,0,55,47,1,0,0,0,56,7,1,0,0,0,57,59,3,10,5,0,58,57,1,0,
0,0,58,59,1,0,0,0,59,65,1,0,0,0,60,61,3,16,8,0,61,62,3,10,5,0,62,64,1,0,
0,0,63,60,1,0,0,0,64,67,1,0,0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,9,1,0,0,0,
67,65,1,0,0,0,68,70,3,12,6,0,69,68,1,0,0,0,70,71,1,0,0,0,71,72,1,0,0,0,71,
69,1,0,0,0,72,11,1,0,0,0,73,75,3,18,9,0,74,73,1,0,0,0,74,75,1,0,0,0,75,101,
1,0,0,0,76,80,5,3,0,0,77,79,9,0,0,0,78,77,1,0,0,0,79,82,1,0,0,0,80,81,1,
0,0,0,80,78,1,0,0,0,81,83,1,0,0,0,82,80,1,0,0,0,83,102,5,3,0,0,84,88,5,4,
0,0,85,87,9,0,0,0,86,85,1,0,0,0,87,90,1,0,0,0,88,89,1,0,0,0,88,86,1,0,0,
0,89,91,1,0,0,0,90,88,1,0,0,0,91,102,5,4,0,0,92,96,5,1,0,0,93,95,9,0,0,0,
94,93,1,0,0,0,95,98,1,0,0,0,96,97,1,0,0,0,96,94,1,0,0,0,97,99,1,0,0,0,98,
96,1,0,0,0,99,102,5,2,0,0,100,102,9,0,0,0,101,76,1,0,0,0,101,84,1,0,0,0,
101,92,1,0,0,0,101,100,1,0,0,0,102,13,1,0,0,0,103,105,3,18,9,0,104,103,1,
0,0,0,104,105,1,0,0,0,105,106,1,0,0,0,106,107,7,0,0,0,107,15,1,0,0,0,108,
110,3,18,9,0,109,108,1,0,0,0,109,110,1,0,0,0,110,111,1,0,0,0,111,112,7,1,
0,0,112,17,1,0,0,0,113,114,7,2,0,0,114,19,1,0,0,0,17,21,24,30,36,44,52,55,
58,65,71,74,80,88,96,101,104,109];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class bnfParser extends bnfParserBase {

    static grammarFileName = "bnfParser.g4";
    static literalNames = [ null, "'<'", "'>'", "'\"'", "'''", "'::='", 
                            null, "'-->'", "'\\u2192'", "'|'", null, "'\\u2223'" ];
    static symbolicNames = [ null, "X1", "X2", "X3", "X4", "ASSIGN1", "ASSIGN2", 
                             "ASSIGN3", "ASSIGN4", "OR1", "OR2", "OR3", 
                             "ID", "WS", "NL", "TEXT" ];
    static ruleNames = [ "start_", "prods", "prod", "xlhs", "xrhs", "xalt", 
                         "xelem", "assign", "or", "ws" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = bnfParser.ruleNames;
        this.literalNames = bnfParser.literalNames;
        this.symbolicNames = bnfParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 3:
    	    		return this.xlhs_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    xlhs_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return  this.NotNL() ;
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	start_() {
	    let localctx = new Start_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, bnfParser.RULE_start_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        if(la_===1) {
	            this.state = 20;
	            this.prods();

	        }
	        this.state = 24;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13 || _la===14) {
	            this.state = 23;
	            this.ws();
	        }

	        this.state = 26;
	        this.match(bnfParser.EOF);
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



	prods() {
	    let localctx = new ProdsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, bnfParser.RULE_prods);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.prod();
	        this.state = 36;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 30;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===13) {
	                    this.state = 29;
	                    this.match(bnfParser.WS);
	                }

	                this.state = 32;
	                this.match(bnfParser.NL);
	                this.state = 33;
	                this.prod(); 
	            }
	            this.state = 38;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
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



	prod() {
	    let localctx = new ProdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, bnfParser.RULE_prod);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.xlhs();
	        this.state = 40;
	        this.assign();
	        this.state = 41;
	        this.xrhs();
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



	xlhs() {
	    let localctx = new XlhsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, bnfParser.RULE_xlhs);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13 || _la===14) {
	            this.state = 43;
	            this.ws();
	        }

	        this.state = 55;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	            this.state = 46;
	            this.match(bnfParser.ID);
	            break;
	        case 1:
	            this.state = 47;
	            this.match(bnfParser.X1);
	            this.state = 50; 
	            this._errHandler.sync(this);
	            var _alt = 1+1;
	            do {
	            	switch (_alt) {
	            	case 1+1:
	            		this.state = 48;
	            		if (!(  this.NotNL() )) {
	            		    throw new antlr4.error.FailedPredicateException(this, " this.NotNL() ");
	            		}
	            		this.state = 49;
	            		this.matchWildcard();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 52; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,5, this._ctx);
	            } while ( _alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 54;
	            this.match(bnfParser.X2);
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



	xrhs() {
	    let localctx = new XrhsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, bnfParser.RULE_xrhs);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        if(la_===1) {
	            this.state = 57;
	            this.xalt();

	        }
	        this.state = 65;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 60;
	                this.or();
	                this.state = 61;
	                this.xalt(); 
	            }
	            this.state = 67;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
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



	xalt() {
	    let localctx = new XaltContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, bnfParser.RULE_xalt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69; 
	        this._errHandler.sync(this);
	        var _alt = 1+1;
	        do {
	        	switch (_alt) {
	        	case 1+1:
	        		this.state = 68;
	        		this.xelem();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 71; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,9, this._ctx);
	        } while ( _alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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



	xelem() {
	    let localctx = new XelemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, bnfParser.RULE_xelem);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 73;
	            this.ws();

	        }
	        this.state = 101;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 76;
	            this.match(bnfParser.X3);
	            this.state = 80;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	            while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1+1) {
	                    this.state = 77;
	                    this.matchWildcard(); 
	                }
	                this.state = 82;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
	            }

	            this.state = 83;
	            this.match(bnfParser.X3);
	            break;

	        case 2:
	            this.state = 84;
	            this.match(bnfParser.X4);
	            this.state = 88;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	            while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1+1) {
	                    this.state = 85;
	                    this.matchWildcard(); 
	                }
	                this.state = 90;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
	            }

	            this.state = 91;
	            this.match(bnfParser.X4);
	            break;

	        case 3:
	            this.state = 92;
	            this.match(bnfParser.X1);
	            this.state = 96;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	            while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1+1) {
	                    this.state = 93;
	                    this.matchWildcard(); 
	                }
	                this.state = 98;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
	            }

	            this.state = 99;
	            this.match(bnfParser.X2);
	            break;

	        case 4:
	            this.state = 100;
	            this.matchWildcard();
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



	assign() {
	    let localctx = new AssignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, bnfParser.RULE_assign);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13 || _la===14) {
	            this.state = 103;
	            this.ws();
	        }

	        this.state = 106;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 480) !== 0))) {
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



	or() {
	    let localctx = new OrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, bnfParser.RULE_or);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13 || _la===14) {
	            this.state = 108;
	            this.ws();
	        }

	        this.state = 111;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 3584) !== 0))) {
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



	ws() {
	    let localctx = new WsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, bnfParser.RULE_ws);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        _la = this._input.LA(1);
	        if(!(_la===13 || _la===14)) {
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

bnfParser.EOF = antlr4.Token.EOF;
bnfParser.X1 = 1;
bnfParser.X2 = 2;
bnfParser.X3 = 3;
bnfParser.X4 = 4;
bnfParser.ASSIGN1 = 5;
bnfParser.ASSIGN2 = 6;
bnfParser.ASSIGN3 = 7;
bnfParser.ASSIGN4 = 8;
bnfParser.OR1 = 9;
bnfParser.OR2 = 10;
bnfParser.OR3 = 11;
bnfParser.ID = 12;
bnfParser.WS = 13;
bnfParser.NL = 14;
bnfParser.TEXT = 15;

bnfParser.RULE_start_ = 0;
bnfParser.RULE_prods = 1;
bnfParser.RULE_prod = 2;
bnfParser.RULE_xlhs = 3;
bnfParser.RULE_xrhs = 4;
bnfParser.RULE_xalt = 5;
bnfParser.RULE_xelem = 6;
bnfParser.RULE_assign = 7;
bnfParser.RULE_or = 8;
bnfParser.RULE_ws = 9;

class Start_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bnfParser.RULE_start_;
    }

	EOF() {
	    return this.getToken(bnfParser.EOF, 0);
	};

	prods() {
	    return this.getTypedRuleContext(ProdsContext,0);
	};

	ws() {
	    return this.getTypedRuleContext(WsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof bnfParserListener ) {
	        listener.enterStart_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bnfParserListener ) {
	        listener.exitStart_(this);
		}
	}


}



class ProdsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bnfParser.RULE_prods;
    }

	prod = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ProdContext);
	    } else {
	        return this.getTypedRuleContext(ProdContext,i);
	    }
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(bnfParser.NL);
	    } else {
	        return this.getToken(bnfParser.NL, i);
	    }
	};


	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(bnfParser.WS);
	    } else {
	        return this.getToken(bnfParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof bnfParserListener ) {
	        listener.enterProds(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bnfParserListener ) {
	        listener.exitProds(this);
		}
	}


}



class ProdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bnfParser.RULE_prod;
    }

	xlhs() {
	    return this.getTypedRuleContext(XlhsContext,0);
	};

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
	};

	xrhs() {
	    return this.getTypedRuleContext(XrhsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof bnfParserListener ) {
	        listener.enterProd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bnfParserListener ) {
	        listener.exitProd(this);
		}
	}


}



class XlhsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bnfParser.RULE_xlhs;
    }

	ID() {
	    return this.getToken(bnfParser.ID, 0);
	};

	X1() {
	    return this.getToken(bnfParser.X1, 0);
	};

	X2() {
	    return this.getToken(bnfParser.X2, 0);
	};

	ws() {
	    return this.getTypedRuleContext(WsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof bnfParserListener ) {
	        listener.enterXlhs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bnfParserListener ) {
	        listener.exitXlhs(this);
		}
	}


}



class XrhsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bnfParser.RULE_xrhs;
    }

	xalt = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(XaltContext);
	    } else {
	        return this.getTypedRuleContext(XaltContext,i);
	    }
	};

	or = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OrContext);
	    } else {
	        return this.getTypedRuleContext(OrContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof bnfParserListener ) {
	        listener.enterXrhs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bnfParserListener ) {
	        listener.exitXrhs(this);
		}
	}


}



class XaltContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bnfParser.RULE_xalt;
    }

	xelem = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(XelemContext);
	    } else {
	        return this.getTypedRuleContext(XelemContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof bnfParserListener ) {
	        listener.enterXalt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bnfParserListener ) {
	        listener.exitXalt(this);
		}
	}


}



class XelemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bnfParser.RULE_xelem;
    }

	X3 = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(bnfParser.X3);
	    } else {
	        return this.getToken(bnfParser.X3, i);
	    }
	};


	X4 = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(bnfParser.X4);
	    } else {
	        return this.getToken(bnfParser.X4, i);
	    }
	};


	X1() {
	    return this.getToken(bnfParser.X1, 0);
	};

	X2() {
	    return this.getToken(bnfParser.X2, 0);
	};

	ws() {
	    return this.getTypedRuleContext(WsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof bnfParserListener ) {
	        listener.enterXelem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bnfParserListener ) {
	        listener.exitXelem(this);
		}
	}


}



class AssignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bnfParser.RULE_assign;
    }

	ASSIGN1() {
	    return this.getToken(bnfParser.ASSIGN1, 0);
	};

	ASSIGN2() {
	    return this.getToken(bnfParser.ASSIGN2, 0);
	};

	ASSIGN3() {
	    return this.getToken(bnfParser.ASSIGN3, 0);
	};

	ASSIGN4() {
	    return this.getToken(bnfParser.ASSIGN4, 0);
	};

	ws() {
	    return this.getTypedRuleContext(WsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof bnfParserListener ) {
	        listener.enterAssign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bnfParserListener ) {
	        listener.exitAssign(this);
		}
	}


}



class OrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bnfParser.RULE_or;
    }

	OR1() {
	    return this.getToken(bnfParser.OR1, 0);
	};

	OR2() {
	    return this.getToken(bnfParser.OR2, 0);
	};

	OR3() {
	    return this.getToken(bnfParser.OR3, 0);
	};

	ws() {
	    return this.getTypedRuleContext(WsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof bnfParserListener ) {
	        listener.enterOr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bnfParserListener ) {
	        listener.exitOr(this);
		}
	}


}



class WsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bnfParser.RULE_ws;
    }

	WS() {
	    return this.getToken(bnfParser.WS, 0);
	};

	NL() {
	    return this.getToken(bnfParser.NL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bnfParserListener ) {
	        listener.enterWs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bnfParserListener ) {
	        listener.exitWs(this);
		}
	}


}




bnfParser.Start_Context = Start_Context; 
bnfParser.ProdsContext = ProdsContext; 
bnfParser.ProdContext = ProdContext; 
bnfParser.XlhsContext = XlhsContext; 
bnfParser.XrhsContext = XrhsContext; 
bnfParser.XaltContext = XaltContext; 
bnfParser.XelemContext = XelemContext; 
bnfParser.AssignContext = AssignContext; 
bnfParser.OrContext = OrContext; 
bnfParser.WsContext = WsContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
