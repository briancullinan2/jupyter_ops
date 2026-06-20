// Generated from ./quake3/spatial/IllustriousSpatial.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import IllustriousSpatialListener from './IllustriousSpatialListener.js';
const serializedATN = [4,1,28,233,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,1,0,3,0,37,8,0,1,0,5,0,40,8,
0,10,0,12,0,43,9,0,1,0,1,0,1,1,1,1,1,2,1,2,4,2,51,8,2,11,2,12,2,52,1,2,5,
2,56,8,2,10,2,12,2,59,9,2,1,3,1,3,3,3,63,8,3,1,3,3,3,66,8,3,1,4,1,4,1,4,
1,4,1,5,1,5,1,5,1,5,1,5,1,5,3,5,78,8,5,1,5,1,5,5,5,82,8,5,10,5,12,5,85,9,
5,1,5,3,5,88,8,5,1,6,1,6,1,6,1,6,3,6,94,8,6,1,6,5,6,97,8,6,10,6,12,6,100,
9,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,111,8,7,1,8,1,8,1,8,1,8,3,8,
117,8,8,1,8,5,8,120,8,8,10,8,12,8,123,9,8,1,8,1,8,1,9,1,9,1,9,3,9,130,8,
9,1,9,1,9,3,9,134,8,9,1,9,1,9,3,9,138,8,9,1,9,1,9,3,9,142,8,9,1,9,1,9,1,
9,1,9,1,9,3,9,149,8,9,1,9,1,9,3,9,153,8,9,1,9,1,9,3,9,157,8,9,1,9,1,9,3,
9,161,8,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,171,8,9,1,10,1,10,1,10,1,10,
5,10,177,8,10,10,10,12,10,180,9,10,1,11,1,11,1,11,1,11,3,11,186,8,11,3,11,
188,8,11,1,11,1,11,3,11,192,8,11,1,11,3,11,195,8,11,1,11,1,11,1,11,3,11,
200,8,11,1,11,1,11,3,11,204,8,11,1,11,1,11,3,11,208,8,11,1,12,1,12,1,12,
1,12,3,12,214,8,12,1,13,1,13,1,14,1,14,1,14,1,14,3,14,222,8,14,1,15,3,15,
225,8,15,1,15,1,15,3,15,229,8,15,1,16,1,16,1,16,0,0,17,0,2,4,6,8,10,12,14,
16,18,20,22,24,26,28,30,32,0,1,2,0,10,10,12,14,261,0,36,1,0,0,0,2,46,1,0,
0,0,4,48,1,0,0,0,6,60,1,0,0,0,8,67,1,0,0,0,10,87,1,0,0,0,12,89,1,0,0,0,14,
110,1,0,0,0,16,112,1,0,0,0,18,170,1,0,0,0,20,172,1,0,0,0,22,207,1,0,0,0,
24,213,1,0,0,0,26,215,1,0,0,0,28,221,1,0,0,0,30,228,1,0,0,0,32,230,1,0,0,
0,34,37,3,4,2,0,35,37,3,2,1,0,36,34,1,0,0,0,36,35,1,0,0,0,36,37,1,0,0,0,
37,41,1,0,0,0,38,40,5,28,0,0,39,38,1,0,0,0,40,43,1,0,0,0,41,39,1,0,0,0,41,
42,1,0,0,0,42,44,1,0,0,0,43,41,1,0,0,0,44,45,5,0,0,1,45,1,1,0,0,0,46,47,
5,1,0,0,47,3,1,0,0,0,48,57,3,6,3,0,49,51,5,28,0,0,50,49,1,0,0,0,51,52,1,
0,0,0,52,50,1,0,0,0,52,53,1,0,0,0,53,54,1,0,0,0,54,56,3,6,3,0,55,50,1,0,
0,0,56,59,1,0,0,0,57,55,1,0,0,0,57,58,1,0,0,0,58,5,1,0,0,0,59,57,1,0,0,0,
60,65,3,8,4,0,61,63,3,10,5,0,62,61,1,0,0,0,62,63,1,0,0,0,63,64,1,0,0,0,64,
66,3,12,6,0,65,62,1,0,0,0,65,66,1,0,0,0,66,7,1,0,0,0,67,68,5,2,0,0,68,69,
5,25,0,0,69,70,5,3,0,0,70,9,1,0,0,0,71,88,5,4,0,0,72,73,5,2,0,0,73,74,5,
20,0,0,74,83,5,26,0,0,75,77,5,5,0,0,76,78,5,27,0,0,77,76,1,0,0,0,77,78,1,
0,0,0,78,79,1,0,0,0,79,80,5,20,0,0,80,82,5,26,0,0,81,75,1,0,0,0,82,85,1,
0,0,0,83,81,1,0,0,0,83,84,1,0,0,0,84,86,1,0,0,0,85,83,1,0,0,0,86,88,5,3,
0,0,87,71,1,0,0,0,87,72,1,0,0,0,88,11,1,0,0,0,89,90,5,2,0,0,90,98,3,14,7,
0,91,93,5,5,0,0,92,94,5,27,0,0,93,92,1,0,0,0,93,94,1,0,0,0,94,95,1,0,0,0,
95,97,3,14,7,0,96,91,1,0,0,0,97,100,1,0,0,0,98,96,1,0,0,0,98,99,1,0,0,0,
99,101,1,0,0,0,100,98,1,0,0,0,101,102,5,3,0,0,102,13,1,0,0,0,103,111,3,16,
8,0,104,111,3,18,9,0,105,111,3,20,10,0,106,111,3,28,14,0,107,111,3,30,15,
0,108,111,3,26,13,0,109,111,3,24,12,0,110,103,1,0,0,0,110,104,1,0,0,0,110,
105,1,0,0,0,110,106,1,0,0,0,110,107,1,0,0,0,110,108,1,0,0,0,110,109,1,0,
0,0,111,15,1,0,0,0,112,113,5,2,0,0,113,121,3,14,7,0,114,116,5,5,0,0,115,
117,5,27,0,0,116,115,1,0,0,0,116,117,1,0,0,0,117,118,1,0,0,0,118,120,3,14,
7,0,119,114,1,0,0,0,120,123,1,0,0,0,121,119,1,0,0,0,121,122,1,0,0,0,122,
124,1,0,0,0,123,121,1,0,0,0,124,125,5,3,0,0,125,17,1,0,0,0,126,127,5,25,
0,0,127,129,5,6,0,0,128,130,5,27,0,0,129,128,1,0,0,0,129,130,1,0,0,0,130,
131,1,0,0,0,131,133,5,19,0,0,132,134,5,27,0,0,133,132,1,0,0,0,133,134,1,
0,0,0,134,135,1,0,0,0,135,137,5,5,0,0,136,138,5,27,0,0,137,136,1,0,0,0,137,
138,1,0,0,0,138,139,1,0,0,0,139,141,3,30,15,0,140,142,5,27,0,0,141,140,1,
0,0,0,141,142,1,0,0,0,142,143,1,0,0,0,143,144,5,7,0,0,144,171,1,0,0,0,145,
146,5,25,0,0,146,148,5,8,0,0,147,149,5,27,0,0,148,147,1,0,0,0,148,149,1,
0,0,0,149,150,1,0,0,0,150,152,5,19,0,0,151,153,5,27,0,0,152,151,1,0,0,0,
152,153,1,0,0,0,153,154,1,0,0,0,154,156,5,5,0,0,155,157,5,27,0,0,156,155,
1,0,0,0,156,157,1,0,0,0,157,158,1,0,0,0,158,160,5,24,0,0,159,161,5,27,0,
0,160,159,1,0,0,0,160,161,1,0,0,0,161,162,1,0,0,0,162,171,5,7,0,0,163,164,
5,25,0,0,164,165,5,8,0,0,165,166,5,24,0,0,166,171,5,7,0,0,167,168,5,25,0,
0,168,169,5,9,0,0,169,171,3,30,15,0,170,126,1,0,0,0,170,145,1,0,0,0,170,
163,1,0,0,0,170,167,1,0,0,0,171,19,1,0,0,0,172,178,3,22,11,0,173,174,3,32,
16,0,174,175,3,22,11,0,175,177,1,0,0,0,176,173,1,0,0,0,177,180,1,0,0,0,178,
176,1,0,0,0,178,179,1,0,0,0,179,21,1,0,0,0,180,178,1,0,0,0,181,187,3,24,
12,0,182,185,5,10,0,0,183,186,3,24,12,0,184,186,3,30,15,0,185,183,1,0,0,
0,185,184,1,0,0,0,186,188,1,0,0,0,187,182,1,0,0,0,187,188,1,0,0,0,188,208,
1,0,0,0,189,191,3,30,15,0,190,192,3,24,12,0,191,190,1,0,0,0,191,192,1,0,
0,0,192,208,1,0,0,0,193,195,5,21,0,0,194,193,1,0,0,0,194,195,1,0,0,0,195,
196,1,0,0,0,196,208,3,24,12,0,197,199,5,11,0,0,198,200,5,27,0,0,199,198,
1,0,0,0,199,200,1,0,0,0,200,201,1,0,0,0,201,203,3,20,10,0,202,204,5,27,0,
0,203,202,1,0,0,0,203,204,1,0,0,0,204,205,1,0,0,0,205,206,5,7,0,0,206,208,
1,0,0,0,207,181,1,0,0,0,207,189,1,0,0,0,207,194,1,0,0,0,207,197,1,0,0,0,
208,23,1,0,0,0,209,214,5,15,0,0,210,214,5,18,0,0,211,212,5,20,0,0,212,214,
5,26,0,0,213,209,1,0,0,0,213,210,1,0,0,0,213,211,1,0,0,0,214,25,1,0,0,0,
215,216,5,16,0,0,216,27,1,0,0,0,217,218,5,25,0,0,218,219,5,9,0,0,219,222,
3,30,15,0,220,222,5,17,0,0,221,217,1,0,0,0,221,220,1,0,0,0,222,29,1,0,0,
0,223,225,5,21,0,0,224,223,1,0,0,0,224,225,1,0,0,0,225,226,1,0,0,0,226,229,
5,22,0,0,227,229,5,23,0,0,228,224,1,0,0,0,228,227,1,0,0,0,229,31,1,0,0,0,
230,231,7,0,0,0,231,33,1,0,0,0,35,36,41,52,57,62,65,77,83,87,93,98,110,116,
121,129,133,137,141,148,152,156,160,170,178,185,187,191,194,199,203,207,
213,221,224,228];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class IllustriousSpatialParser extends antlr4.Parser {

    static grammarFileName = "IllustriousSpatial.g4";
    static literalNames = [ null, "'[]'", "'['", "']'", "'[abs]'", "','", 
                            "'=('", "')'", "'('", "'='", "'*'", "'sym('", 
                            "'+'", "'-'", "'/'", null, null, "'mesh'", "'@idx'", 
                            null, "'@'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "VAR_KW", 
                             "BOOL_KW", "ATTR_KW", "AT_IDX", "AXIS", "AT", 
                             "SIGN", "POSITIVE_NUM", "NEGATIVE_NUM", "NUM", 
                             "ID", "INT", "WS", "WS_OR_NL" ];
    static ruleNames = [ "root", "empty_scene", "block_sequence", "block", 
                         "primitive", "anchor", "vector", "value", "nested_array", 
                         "parameter_assignment", "expression", "term", "variable", 
                         "boolean_flag", "attribute", "signed_num", "op" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = IllustriousSpatialParser.ruleNames;
        this.literalNames = IllustriousSpatialParser.literalNames;
        this.symbolicNames = IllustriousSpatialParser.symbolicNames;
    }



	root() {
	    let localctx = new RootContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, IllustriousSpatialParser.RULE_root);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case 2:
	        	this.state = 34;
	        	this.block_sequence();
	        	break;
	        case 1:
	        	this.state = 35;
	        	this.empty_scene();
	        	break;
	        case -1:
	        case 28:
	        	break;
	        default:
	        	break;
	        }
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 38;
	            this.match(IllustriousSpatialParser.WS_OR_NL);
	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 44;
	        this.match(IllustriousSpatialParser.EOF);
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



	empty_scene() {
	    let localctx = new Empty_sceneContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, IllustriousSpatialParser.RULE_empty_scene);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.match(IllustriousSpatialParser.T__0);
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



	block_sequence() {
	    let localctx = new Block_sequenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, IllustriousSpatialParser.RULE_block_sequence);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.block();
	        this.state = 57;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 50; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                do {
	                    this.state = 49;
	                    this.match(IllustriousSpatialParser.WS_OR_NL);
	                    this.state = 52; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                } while(_la===28);
	                this.state = 54;
	                this.block(); 
	            }
	            this.state = 59;
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



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, IllustriousSpatialParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.primitive();
	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2 || _la===4) {
	            this.state = 62;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	            if(la_===1) {
	                this.state = 61;
	                this.anchor();

	            }
	            this.state = 64;
	            this.vector();
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



	primitive() {
	    let localctx = new PrimitiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, IllustriousSpatialParser.RULE_primitive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(IllustriousSpatialParser.T__1);
	        this.state = 68;
	        this.match(IllustriousSpatialParser.ID);
	        this.state = 69;
	        this.match(IllustriousSpatialParser.T__2);
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



	anchor() {
	    let localctx = new AnchorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, IllustriousSpatialParser.RULE_anchor);
	    var _la = 0;
	    try {
	        this.state = 87;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 71;
	            this.match(IllustriousSpatialParser.T__3);
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 72;
	            this.match(IllustriousSpatialParser.T__1);
	            this.state = 73;
	            this.match(IllustriousSpatialParser.AT);
	            this.state = 74;
	            this.match(IllustriousSpatialParser.INT);
	            this.state = 83;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===5) {
	                this.state = 75;
	                this.match(IllustriousSpatialParser.T__4);
	                this.state = 77;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===27) {
	                    this.state = 76;
	                    this.match(IllustriousSpatialParser.WS);
	                }

	                this.state = 79;
	                this.match(IllustriousSpatialParser.AT);
	                this.state = 80;
	                this.match(IllustriousSpatialParser.INT);
	                this.state = 85;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 86;
	            this.match(IllustriousSpatialParser.T__2);
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



	vector() {
	    let localctx = new VectorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, IllustriousSpatialParser.RULE_vector);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.match(IllustriousSpatialParser.T__1);
	        this.state = 90;
	        this.value();
	        this.state = 98;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5) {
	            this.state = 91;
	            this.match(IllustriousSpatialParser.T__4);
	            this.state = 93;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===27) {
	                this.state = 92;
	                this.match(IllustriousSpatialParser.WS);
	            }

	            this.state = 95;
	            this.value();
	            this.state = 100;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 101;
	        this.match(IllustriousSpatialParser.T__2);
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



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, IllustriousSpatialParser.RULE_value);
	    try {
	        this.state = 110;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 103;
	            this.nested_array();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 104;
	            this.parameter_assignment();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 105;
	            this.expression();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 106;
	            this.attribute();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 107;
	            this.signed_num();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 108;
	            this.boolean_flag();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 109;
	            this.variable();
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



	nested_array() {
	    let localctx = new Nested_arrayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, IllustriousSpatialParser.RULE_nested_array);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        this.match(IllustriousSpatialParser.T__1);
	        this.state = 113;
	        this.value();
	        this.state = 121;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5) {
	            this.state = 114;
	            this.match(IllustriousSpatialParser.T__4);
	            this.state = 116;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===27) {
	                this.state = 115;
	                this.match(IllustriousSpatialParser.WS);
	            }

	            this.state = 118;
	            this.value();
	            this.state = 123;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 124;
	        this.match(IllustriousSpatialParser.T__2);
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



	parameter_assignment() {
	    let localctx = new Parameter_assignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, IllustriousSpatialParser.RULE_parameter_assignment);
	    var _la = 0;
	    try {
	        this.state = 170;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 126;
	            this.match(IllustriousSpatialParser.ID);
	            this.state = 127;
	            this.match(IllustriousSpatialParser.T__5);
	            this.state = 129;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===27) {
	                this.state = 128;
	                this.match(IllustriousSpatialParser.WS);
	            }

	            this.state = 131;
	            this.match(IllustriousSpatialParser.AXIS);
	            this.state = 133;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===27) {
	                this.state = 132;
	                this.match(IllustriousSpatialParser.WS);
	            }

	            this.state = 135;
	            this.match(IllustriousSpatialParser.T__4);
	            this.state = 137;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===27) {
	                this.state = 136;
	                this.match(IllustriousSpatialParser.WS);
	            }

	            this.state = 139;
	            this.signed_num();
	            this.state = 141;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===27) {
	                this.state = 140;
	                this.match(IllustriousSpatialParser.WS);
	            }

	            this.state = 143;
	            this.match(IllustriousSpatialParser.T__6);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 145;
	            this.match(IllustriousSpatialParser.ID);
	            this.state = 146;
	            this.match(IllustriousSpatialParser.T__7);
	            this.state = 148;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===27) {
	                this.state = 147;
	                this.match(IllustriousSpatialParser.WS);
	            }

	            this.state = 150;
	            this.match(IllustriousSpatialParser.AXIS);
	            this.state = 152;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===27) {
	                this.state = 151;
	                this.match(IllustriousSpatialParser.WS);
	            }

	            this.state = 154;
	            this.match(IllustriousSpatialParser.T__4);
	            this.state = 156;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===27) {
	                this.state = 155;
	                this.match(IllustriousSpatialParser.WS);
	            }

	            this.state = 158;
	            this.match(IllustriousSpatialParser.NUM);
	            this.state = 160;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===27) {
	                this.state = 159;
	                this.match(IllustriousSpatialParser.WS);
	            }

	            this.state = 162;
	            this.match(IllustriousSpatialParser.T__6);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 163;
	            this.match(IllustriousSpatialParser.ID);
	            this.state = 164;
	            this.match(IllustriousSpatialParser.T__7);
	            this.state = 165;
	            this.match(IllustriousSpatialParser.NUM);
	            this.state = 166;
	            this.match(IllustriousSpatialParser.T__6);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 167;
	            this.match(IllustriousSpatialParser.ID);
	            this.state = 168;
	            this.match(IllustriousSpatialParser.T__8);
	            this.state = 169;
	            this.signed_num();
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



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, IllustriousSpatialParser.RULE_expression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 172;
	        this.term();
	        this.state = 178;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 29696) !== 0)) {
	            this.state = 173;
	            this.op();
	            this.state = 174;
	            this.term();
	            this.state = 180;
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
	    this.enterRule(localctx, 22, IllustriousSpatialParser.RULE_term);
	    var _la = 0;
	    try {
	        this.state = 207;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 181;
	            this.variable();
	            this.state = 187;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	            if(la_===1) {
	                this.state = 182;
	                this.match(IllustriousSpatialParser.T__9);
	                this.state = 185;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 15:
	                case 18:
	                case 20:
	                    this.state = 183;
	                    this.variable();
	                    break;
	                case 21:
	                case 22:
	                case 23:
	                    this.state = 184;
	                    this.signed_num();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }

	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 189;
	            this.signed_num();
	            this.state = 191;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1343488) !== 0)) {
	                this.state = 190;
	                this.variable();
	            }

	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 194;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===21) {
	                this.state = 193;
	                this.match(IllustriousSpatialParser.SIGN);
	            }

	            this.state = 196;
	            this.variable();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 197;
	            this.match(IllustriousSpatialParser.T__10);
	            this.state = 199;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===27) {
	                this.state = 198;
	                this.match(IllustriousSpatialParser.WS);
	            }

	            this.state = 201;
	            this.expression();
	            this.state = 203;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===27) {
	                this.state = 202;
	                this.match(IllustriousSpatialParser.WS);
	            }

	            this.state = 205;
	            this.match(IllustriousSpatialParser.T__6);
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



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, IllustriousSpatialParser.RULE_variable);
	    try {
	        this.state = 213;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 209;
	            this.match(IllustriousSpatialParser.VAR_KW);
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 210;
	            this.match(IllustriousSpatialParser.AT_IDX);
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 211;
	            this.match(IllustriousSpatialParser.AT);
	            this.state = 212;
	            this.match(IllustriousSpatialParser.INT);
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



	boolean_flag() {
	    let localctx = new Boolean_flagContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, IllustriousSpatialParser.RULE_boolean_flag);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215;
	        this.match(IllustriousSpatialParser.BOOL_KW);
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



	attribute() {
	    let localctx = new AttributeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, IllustriousSpatialParser.RULE_attribute);
	    try {
	        this.state = 221;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 25:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 217;
	            this.match(IllustriousSpatialParser.ID);
	            this.state = 218;
	            this.match(IllustriousSpatialParser.T__8);
	            this.state = 219;
	            this.signed_num();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 220;
	            this.match(IllustriousSpatialParser.ATTR_KW);
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



	signed_num() {
	    let localctx = new Signed_numContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, IllustriousSpatialParser.RULE_signed_num);
	    var _la = 0;
	    try {
	        this.state = 228;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 21:
	        case 22:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 224;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===21) {
	                this.state = 223;
	                this.match(IllustriousSpatialParser.SIGN);
	            }

	            this.state = 226;
	            this.match(IllustriousSpatialParser.POSITIVE_NUM);
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 227;
	            this.match(IllustriousSpatialParser.NEGATIVE_NUM);
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



	op() {
	    let localctx = new OpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, IllustriousSpatialParser.RULE_op);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 230;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 29696) !== 0))) {
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

IllustriousSpatialParser.EOF = antlr4.Token.EOF;
IllustriousSpatialParser.T__0 = 1;
IllustriousSpatialParser.T__1 = 2;
IllustriousSpatialParser.T__2 = 3;
IllustriousSpatialParser.T__3 = 4;
IllustriousSpatialParser.T__4 = 5;
IllustriousSpatialParser.T__5 = 6;
IllustriousSpatialParser.T__6 = 7;
IllustriousSpatialParser.T__7 = 8;
IllustriousSpatialParser.T__8 = 9;
IllustriousSpatialParser.T__9 = 10;
IllustriousSpatialParser.T__10 = 11;
IllustriousSpatialParser.T__11 = 12;
IllustriousSpatialParser.T__12 = 13;
IllustriousSpatialParser.T__13 = 14;
IllustriousSpatialParser.VAR_KW = 15;
IllustriousSpatialParser.BOOL_KW = 16;
IllustriousSpatialParser.ATTR_KW = 17;
IllustriousSpatialParser.AT_IDX = 18;
IllustriousSpatialParser.AXIS = 19;
IllustriousSpatialParser.AT = 20;
IllustriousSpatialParser.SIGN = 21;
IllustriousSpatialParser.POSITIVE_NUM = 22;
IllustriousSpatialParser.NEGATIVE_NUM = 23;
IllustriousSpatialParser.NUM = 24;
IllustriousSpatialParser.ID = 25;
IllustriousSpatialParser.INT = 26;
IllustriousSpatialParser.WS = 27;
IllustriousSpatialParser.WS_OR_NL = 28;

IllustriousSpatialParser.RULE_root = 0;
IllustriousSpatialParser.RULE_empty_scene = 1;
IllustriousSpatialParser.RULE_block_sequence = 2;
IllustriousSpatialParser.RULE_block = 3;
IllustriousSpatialParser.RULE_primitive = 4;
IllustriousSpatialParser.RULE_anchor = 5;
IllustriousSpatialParser.RULE_vector = 6;
IllustriousSpatialParser.RULE_value = 7;
IllustriousSpatialParser.RULE_nested_array = 8;
IllustriousSpatialParser.RULE_parameter_assignment = 9;
IllustriousSpatialParser.RULE_expression = 10;
IllustriousSpatialParser.RULE_term = 11;
IllustriousSpatialParser.RULE_variable = 12;
IllustriousSpatialParser.RULE_boolean_flag = 13;
IllustriousSpatialParser.RULE_attribute = 14;
IllustriousSpatialParser.RULE_signed_num = 15;
IllustriousSpatialParser.RULE_op = 16;

class RootContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IllustriousSpatialParser.RULE_root;
    }

	EOF() {
	    return this.getToken(IllustriousSpatialParser.EOF, 0);
	};

	block_sequence() {
	    return this.getTypedRuleContext(Block_sequenceContext,0);
	};

	empty_scene() {
	    return this.getTypedRuleContext(Empty_sceneContext,0);
	};

	WS_OR_NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(IllustriousSpatialParser.WS_OR_NL);
	    } else {
	        return this.getToken(IllustriousSpatialParser.WS_OR_NL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof IllustriousSpatialListener ) {
	        listener.enterRoot(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IllustriousSpatialListener ) {
	        listener.exitRoot(this);
		}
	}


}



class Empty_sceneContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IllustriousSpatialParser.RULE_empty_scene;
    }


	enterRule(listener) {
	    if(listener instanceof IllustriousSpatialListener ) {
	        listener.enterEmpty_scene(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IllustriousSpatialListener ) {
	        listener.exitEmpty_scene(this);
		}
	}


}



class Block_sequenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IllustriousSpatialParser.RULE_block_sequence;
    }

	block = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BlockContext);
	    } else {
	        return this.getTypedRuleContext(BlockContext,i);
	    }
	};

	WS_OR_NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(IllustriousSpatialParser.WS_OR_NL);
	    } else {
	        return this.getToken(IllustriousSpatialParser.WS_OR_NL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof IllustriousSpatialListener ) {
	        listener.enterBlock_sequence(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IllustriousSpatialListener ) {
	        listener.exitBlock_sequence(this);
		}
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IllustriousSpatialParser.RULE_block;
    }

	primitive() {
	    return this.getTypedRuleContext(PrimitiveContext,0);
	};

	vector() {
	    return this.getTypedRuleContext(VectorContext,0);
	};

	anchor() {
	    return this.getTypedRuleContext(AnchorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof IllustriousSpatialListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IllustriousSpatialListener ) {
	        listener.exitBlock(this);
		}
	}


}



class PrimitiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IllustriousSpatialParser.RULE_primitive;
    }

	ID() {
	    return this.getToken(IllustriousSpatialParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof IllustriousSpatialListener ) {
	        listener.enterPrimitive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IllustriousSpatialListener ) {
	        listener.exitPrimitive(this);
		}
	}


}



class AnchorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IllustriousSpatialParser.RULE_anchor;
    }

	AT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(IllustriousSpatialParser.AT);
	    } else {
	        return this.getToken(IllustriousSpatialParser.AT, i);
	    }
	};


	INT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(IllustriousSpatialParser.INT);
	    } else {
	        return this.getToken(IllustriousSpatialParser.INT, i);
	    }
	};


	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(IllustriousSpatialParser.WS);
	    } else {
	        return this.getToken(IllustriousSpatialParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof IllustriousSpatialListener ) {
	        listener.enterAnchor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IllustriousSpatialListener ) {
	        listener.exitAnchor(this);
		}
	}


}



class VectorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IllustriousSpatialParser.RULE_vector;
    }

	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(IllustriousSpatialParser.WS);
	    } else {
	        return this.getToken(IllustriousSpatialParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof IllustriousSpatialListener ) {
	        listener.enterVector(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IllustriousSpatialListener ) {
	        listener.exitVector(this);
		}
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IllustriousSpatialParser.RULE_value;
    }

	nested_array() {
	    return this.getTypedRuleContext(Nested_arrayContext,0);
	};

	parameter_assignment() {
	    return this.getTypedRuleContext(Parameter_assignmentContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	attribute() {
	    return this.getTypedRuleContext(AttributeContext,0);
	};

	signed_num() {
	    return this.getTypedRuleContext(Signed_numContext,0);
	};

	boolean_flag() {
	    return this.getTypedRuleContext(Boolean_flagContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof IllustriousSpatialListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IllustriousSpatialListener ) {
	        listener.exitValue(this);
		}
	}


}



class Nested_arrayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IllustriousSpatialParser.RULE_nested_array;
    }

	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(IllustriousSpatialParser.WS);
	    } else {
	        return this.getToken(IllustriousSpatialParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof IllustriousSpatialListener ) {
	        listener.enterNested_array(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IllustriousSpatialListener ) {
	        listener.exitNested_array(this);
		}
	}


}



class Parameter_assignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IllustriousSpatialParser.RULE_parameter_assignment;
    }

	ID() {
	    return this.getToken(IllustriousSpatialParser.ID, 0);
	};

	AXIS() {
	    return this.getToken(IllustriousSpatialParser.AXIS, 0);
	};

	signed_num() {
	    return this.getTypedRuleContext(Signed_numContext,0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(IllustriousSpatialParser.WS);
	    } else {
	        return this.getToken(IllustriousSpatialParser.WS, i);
	    }
	};


	NUM() {
	    return this.getToken(IllustriousSpatialParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof IllustriousSpatialListener ) {
	        listener.enterParameter_assignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IllustriousSpatialListener ) {
	        listener.exitParameter_assignment(this);
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
        this.ruleIndex = IllustriousSpatialParser.RULE_expression;
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

	op = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OpContext);
	    } else {
	        return this.getTypedRuleContext(OpContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof IllustriousSpatialListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IllustriousSpatialListener ) {
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
        this.ruleIndex = IllustriousSpatialParser.RULE_term;
    }

	variable = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableContext);
	    } else {
	        return this.getTypedRuleContext(VariableContext,i);
	    }
	};

	signed_num() {
	    return this.getTypedRuleContext(Signed_numContext,0);
	};

	SIGN() {
	    return this.getToken(IllustriousSpatialParser.SIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(IllustriousSpatialParser.WS);
	    } else {
	        return this.getToken(IllustriousSpatialParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof IllustriousSpatialListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IllustriousSpatialListener ) {
	        listener.exitTerm(this);
		}
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IllustriousSpatialParser.RULE_variable;
    }

	VAR_KW() {
	    return this.getToken(IllustriousSpatialParser.VAR_KW, 0);
	};

	AT_IDX() {
	    return this.getToken(IllustriousSpatialParser.AT_IDX, 0);
	};

	AT() {
	    return this.getToken(IllustriousSpatialParser.AT, 0);
	};

	INT() {
	    return this.getToken(IllustriousSpatialParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof IllustriousSpatialListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IllustriousSpatialListener ) {
	        listener.exitVariable(this);
		}
	}


}



class Boolean_flagContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IllustriousSpatialParser.RULE_boolean_flag;
    }

	BOOL_KW() {
	    return this.getToken(IllustriousSpatialParser.BOOL_KW, 0);
	};

	enterRule(listener) {
	    if(listener instanceof IllustriousSpatialListener ) {
	        listener.enterBoolean_flag(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IllustriousSpatialListener ) {
	        listener.exitBoolean_flag(this);
		}
	}


}



class AttributeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IllustriousSpatialParser.RULE_attribute;
    }

	ID() {
	    return this.getToken(IllustriousSpatialParser.ID, 0);
	};

	signed_num() {
	    return this.getTypedRuleContext(Signed_numContext,0);
	};

	ATTR_KW() {
	    return this.getToken(IllustriousSpatialParser.ATTR_KW, 0);
	};

	enterRule(listener) {
	    if(listener instanceof IllustriousSpatialListener ) {
	        listener.enterAttribute(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IllustriousSpatialListener ) {
	        listener.exitAttribute(this);
		}
	}


}



class Signed_numContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IllustriousSpatialParser.RULE_signed_num;
    }

	POSITIVE_NUM() {
	    return this.getToken(IllustriousSpatialParser.POSITIVE_NUM, 0);
	};

	SIGN() {
	    return this.getToken(IllustriousSpatialParser.SIGN, 0);
	};

	NEGATIVE_NUM() {
	    return this.getToken(IllustriousSpatialParser.NEGATIVE_NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof IllustriousSpatialListener ) {
	        listener.enterSigned_num(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IllustriousSpatialListener ) {
	        listener.exitSigned_num(this);
		}
	}


}



class OpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IllustriousSpatialParser.RULE_op;
    }


	enterRule(listener) {
	    if(listener instanceof IllustriousSpatialListener ) {
	        listener.enterOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IllustriousSpatialListener ) {
	        listener.exitOp(this);
		}
	}


}




IllustriousSpatialParser.RootContext = RootContext; 
IllustriousSpatialParser.Empty_sceneContext = Empty_sceneContext; 
IllustriousSpatialParser.Block_sequenceContext = Block_sequenceContext; 
IllustriousSpatialParser.BlockContext = BlockContext; 
IllustriousSpatialParser.PrimitiveContext = PrimitiveContext; 
IllustriousSpatialParser.AnchorContext = AnchorContext; 
IllustriousSpatialParser.VectorContext = VectorContext; 
IllustriousSpatialParser.ValueContext = ValueContext; 
IllustriousSpatialParser.Nested_arrayContext = Nested_arrayContext; 
IllustriousSpatialParser.Parameter_assignmentContext = Parameter_assignmentContext; 
IllustriousSpatialParser.ExpressionContext = ExpressionContext; 
IllustriousSpatialParser.TermContext = TermContext; 
IllustriousSpatialParser.VariableContext = VariableContext; 
IllustriousSpatialParser.Boolean_flagContext = Boolean_flagContext; 
IllustriousSpatialParser.AttributeContext = AttributeContext; 
IllustriousSpatialParser.Signed_numContext = Signed_numContext; 
IllustriousSpatialParser.OpContext = OpContext; 
