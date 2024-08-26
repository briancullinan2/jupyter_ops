// Generated from Resources/Parsers/mps/mps.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import mpsListener from './mpsListener.js';
const serializedATN = [4,1,17,148,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,1,
0,1,0,1,0,1,0,1,0,3,0,46,8,0,1,0,3,0,49,8,0,1,0,1,0,1,0,1,1,1,1,3,1,56,8,
1,1,1,3,1,59,8,1,1,2,1,2,4,2,63,8,2,11,2,12,2,64,1,3,1,3,1,3,1,4,1,4,1,4,
1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,8,1,9,1,9,4,9,86,8,9,11,9,12,9,
87,1,10,4,10,91,8,10,11,10,12,10,92,1,11,4,11,96,8,11,11,11,12,11,97,1,12,
4,12,101,8,12,11,12,12,12,102,1,13,1,13,1,13,1,13,1,13,3,13,110,8,13,1,14,
1,14,1,14,1,14,1,14,3,14,117,8,14,1,15,1,15,1,15,1,15,1,15,3,15,124,8,15,
1,16,1,16,1,16,1,16,3,16,130,8,16,1,17,1,17,4,17,134,8,17,11,17,12,17,135,
1,17,1,17,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,0,0,20,0,2,4,6,8,
10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,0,3,2,0,4,4,14,14,2,0,5,5,14,
14,2,0,6,6,14,14,142,0,40,1,0,0,0,2,53,1,0,0,0,4,60,1,0,0,0,6,66,1,0,0,0,
8,69,1,0,0,0,10,72,1,0,0,0,12,75,1,0,0,0,14,78,1,0,0,0,16,80,1,0,0,0,18,
85,1,0,0,0,20,90,1,0,0,0,22,95,1,0,0,0,24,100,1,0,0,0,26,104,1,0,0,0,28,
111,1,0,0,0,30,118,1,0,0,0,32,125,1,0,0,0,34,131,1,0,0,0,36,139,1,0,0,0,
38,143,1,0,0,0,40,41,3,2,1,0,41,42,3,4,2,0,42,43,3,6,3,0,43,45,3,8,4,0,44,
46,3,10,5,0,45,44,1,0,0,0,45,46,1,0,0,0,46,48,1,0,0,0,47,49,3,12,6,0,48,
47,1,0,0,0,48,49,1,0,0,0,49,50,1,0,0,0,50,51,3,14,7,0,51,52,5,0,0,1,52,1,
1,0,0,0,53,55,5,1,0,0,54,56,5,14,0,0,55,54,1,0,0,0,55,56,1,0,0,0,56,58,1,
0,0,0,57,59,5,11,0,0,58,57,1,0,0,0,58,59,1,0,0,0,59,3,1,0,0,0,60,62,5,2,
0,0,61,63,3,16,8,0,62,61,1,0,0,0,63,64,1,0,0,0,64,62,1,0,0,0,64,65,1,0,0,
0,65,5,1,0,0,0,66,67,5,3,0,0,67,68,3,18,9,0,68,7,1,0,0,0,69,70,5,4,0,0,70,
71,3,20,10,0,71,9,1,0,0,0,72,73,5,5,0,0,73,74,3,22,11,0,74,11,1,0,0,0,75,
76,5,6,0,0,76,77,3,24,12,0,77,13,1,0,0,0,78,79,5,7,0,0,79,15,1,0,0,0,80,
81,5,13,0,0,81,82,5,14,0,0,82,17,1,0,0,0,83,86,3,26,13,0,84,86,3,34,17,0,
85,83,1,0,0,0,85,84,1,0,0,0,86,87,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,
19,1,0,0,0,89,91,3,28,14,0,90,89,1,0,0,0,91,92,1,0,0,0,92,90,1,0,0,0,92,
93,1,0,0,0,93,21,1,0,0,0,94,96,3,30,15,0,95,94,1,0,0,0,96,97,1,0,0,0,97,
95,1,0,0,0,97,98,1,0,0,0,98,23,1,0,0,0,99,101,3,32,16,0,100,99,1,0,0,0,101,
102,1,0,0,0,102,100,1,0,0,0,102,103,1,0,0,0,103,25,1,0,0,0,104,105,5,14,
0,0,105,106,5,14,0,0,106,109,5,15,0,0,107,108,5,14,0,0,108,110,5,15,0,0,
109,107,1,0,0,0,109,110,1,0,0,0,110,27,1,0,0,0,111,112,7,0,0,0,112,113,5,
14,0,0,113,116,5,15,0,0,114,115,5,14,0,0,115,117,5,15,0,0,116,114,1,0,0,
0,116,117,1,0,0,0,117,29,1,0,0,0,118,119,7,1,0,0,119,120,5,14,0,0,120,123,
5,15,0,0,121,122,5,14,0,0,122,124,5,15,0,0,123,121,1,0,0,0,123,124,1,0,0,
0,124,31,1,0,0,0,125,126,5,12,0,0,126,127,7,2,0,0,127,129,5,14,0,0,128,130,
5,15,0,0,129,128,1,0,0,0,129,130,1,0,0,0,130,33,1,0,0,0,131,133,3,36,18,
0,132,134,3,26,13,0,133,132,1,0,0,0,134,135,1,0,0,0,135,133,1,0,0,0,135,
136,1,0,0,0,136,137,1,0,0,0,137,138,3,38,19,0,138,35,1,0,0,0,139,140,5,14,
0,0,140,141,5,8,0,0,141,142,5,9,0,0,142,37,1,0,0,0,143,144,5,14,0,0,144,
145,5,8,0,0,145,146,5,10,0,0,146,39,1,0,0,0,15,45,48,55,58,64,85,87,92,97,
102,109,116,123,129,135];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class mpsParser extends antlr4.Parser {

    static grammarFileName = "mps.g4";
    static literalNames = [ null, "'NAME'", "'ROWS'", "'COLUMNS'", "'RHS'", 
                            "'RANGES'", "'BOUNDS'", "'ENDATA'", "''MARKER''", 
                            "''INTORG''", "''INTEND''", "'FREE'" ];
    static symbolicNames = [ null, "NAMEINDICATORCARD", "ROWINDICATORCARD", 
                             "COLUMNINDICATORCARD", "RHSINDICATORCARD", 
                             "RANGESINDICATORCARD", "BOUNDSINDICATORCARD", 
                             "ENDATAINDICATORCARD", "KEYWORDMARKER", "STARTMARKER", 
                             "ENDMARKER", "KEYWORDFREE", "BOUNDKEY", "ROWTYPE", 
                             "IDENTIFIER", "NUMERICALVALUE", "WS", "LINE_COMMENT" ];
    static ruleNames = [ "modell", "firstrow", "rows", "columns", "rhs", 
                         "ranges", "bounds", "endata", "rowdatacard", "columndatacards", 
                         "rhsdatacards", "rangesdatacards", "boundsdatacards", 
                         "columndatacard", "rhsdatacard", "rangesdatacard", 
                         "boundsdatacard", "intblock", "startmarker", "endmarker" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = mpsParser.ruleNames;
        this.literalNames = mpsParser.literalNames;
        this.symbolicNames = mpsParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	modell() {
	    let localctx = new ModellContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, mpsParser.RULE_modell);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.firstrow();
	        this.state = 41;
	        this.rows();
	        this.state = 42;
	        this.columns();
	        this.state = 43;
	        this.rhs();
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===mpsParser.RANGESINDICATORCARD) {
	            this.state = 44;
	            this.ranges();
	        }

	        this.state = 48;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===mpsParser.BOUNDSINDICATORCARD) {
	            this.state = 47;
	            this.bounds();
	        }

	        this.state = 50;
	        this.endata();
	        this.state = 51;
	        this.match(mpsParser.EOF);
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



	firstrow() {
	    let localctx = new FirstrowContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, mpsParser.RULE_firstrow);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(mpsParser.NAMEINDICATORCARD);
	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===mpsParser.IDENTIFIER) {
	            this.state = 54;
	            this.match(mpsParser.IDENTIFIER);
	        }

	        this.state = 58;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===mpsParser.KEYWORDFREE) {
	            this.state = 57;
	            this.match(mpsParser.KEYWORDFREE);
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



	rows() {
	    let localctx = new RowsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, mpsParser.RULE_rows);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.match(mpsParser.ROWINDICATORCARD);
	        this.state = 62; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 61;
	            this.rowdatacard();
	            this.state = 64; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===mpsParser.ROWTYPE);
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



	columns() {
	    let localctx = new ColumnsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, mpsParser.RULE_columns);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.match(mpsParser.COLUMNINDICATORCARD);
	        this.state = 67;
	        this.columndatacards();
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



	rhs() {
	    let localctx = new RhsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, mpsParser.RULE_rhs);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.match(mpsParser.RHSINDICATORCARD);
	        this.state = 70;
	        this.rhsdatacards();
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



	ranges() {
	    let localctx = new RangesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, mpsParser.RULE_ranges);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.match(mpsParser.RANGESINDICATORCARD);
	        this.state = 73;
	        this.rangesdatacards();
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



	bounds() {
	    let localctx = new BoundsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, mpsParser.RULE_bounds);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this.match(mpsParser.BOUNDSINDICATORCARD);
	        this.state = 76;
	        this.boundsdatacards();
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



	endata() {
	    let localctx = new EndataContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, mpsParser.RULE_endata);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.match(mpsParser.ENDATAINDICATORCARD);
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



	rowdatacard() {
	    let localctx = new RowdatacardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, mpsParser.RULE_rowdatacard);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.match(mpsParser.ROWTYPE);
	        this.state = 81;
	        this.match(mpsParser.IDENTIFIER);
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



	columndatacards() {
	    let localctx = new ColumndatacardsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, mpsParser.RULE_columndatacards);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 85;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 83;
	                this.columndatacard();
	                break;

	            case 2:
	                this.state = 84;
	                this.intblock();
	                break;

	            }
	            this.state = 87; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===mpsParser.IDENTIFIER);
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



	rhsdatacards() {
	    let localctx = new RhsdatacardsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, mpsParser.RULE_rhsdatacards);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 89;
	            this.rhsdatacard();
	            this.state = 92; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===mpsParser.RHSINDICATORCARD || _la===mpsParser.IDENTIFIER);
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



	rangesdatacards() {
	    let localctx = new RangesdatacardsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, mpsParser.RULE_rangesdatacards);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 94;
	            this.rangesdatacard();
	            this.state = 97; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===mpsParser.RANGESINDICATORCARD || _la===mpsParser.IDENTIFIER);
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



	boundsdatacards() {
	    let localctx = new BoundsdatacardsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, mpsParser.RULE_boundsdatacards);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 99;
	            this.boundsdatacard();
	            this.state = 102; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===mpsParser.BOUNDKEY);
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



	columndatacard() {
	    let localctx = new ColumndatacardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, mpsParser.RULE_columndatacard);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.match(mpsParser.IDENTIFIER);
	        this.state = 105;
	        this.match(mpsParser.IDENTIFIER);
	        this.state = 106;
	        this.match(mpsParser.NUMERICALVALUE);
	        this.state = 109;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 107;
	            this.match(mpsParser.IDENTIFIER);
	            this.state = 108;
	            this.match(mpsParser.NUMERICALVALUE);

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



	rhsdatacard() {
	    let localctx = new RhsdatacardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, mpsParser.RULE_rhsdatacard);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        _la = this._input.LA(1);
	        if(!(_la===mpsParser.RHSINDICATORCARD || _la===mpsParser.IDENTIFIER)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 112;
	        this.match(mpsParser.IDENTIFIER);
	        this.state = 113;
	        this.match(mpsParser.NUMERICALVALUE);
	        this.state = 116;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        if(la_===1) {
	            this.state = 114;
	            this.match(mpsParser.IDENTIFIER);
	            this.state = 115;
	            this.match(mpsParser.NUMERICALVALUE);

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



	rangesdatacard() {
	    let localctx = new RangesdatacardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, mpsParser.RULE_rangesdatacard);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        _la = this._input.LA(1);
	        if(!(_la===mpsParser.RANGESINDICATORCARD || _la===mpsParser.IDENTIFIER)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 119;
	        this.match(mpsParser.IDENTIFIER);
	        this.state = 120;
	        this.match(mpsParser.NUMERICALVALUE);
	        this.state = 123;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        if(la_===1) {
	            this.state = 121;
	            this.match(mpsParser.IDENTIFIER);
	            this.state = 122;
	            this.match(mpsParser.NUMERICALVALUE);

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



	boundsdatacard() {
	    let localctx = new BoundsdatacardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, mpsParser.RULE_boundsdatacard);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        this.match(mpsParser.BOUNDKEY);
	        this.state = 126;
	        _la = this._input.LA(1);
	        if(!(_la===mpsParser.BOUNDSINDICATORCARD || _la===mpsParser.IDENTIFIER)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 127;
	        this.match(mpsParser.IDENTIFIER);
	        this.state = 129;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===mpsParser.NUMERICALVALUE) {
	            this.state = 128;
	            this.match(mpsParser.NUMERICALVALUE);
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



	intblock() {
	    let localctx = new IntblockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, mpsParser.RULE_intblock);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131;
	        this.startmarker();
	        this.state = 133; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 132;
	        		this.columndatacard();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 135; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,14, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 137;
	        this.endmarker();
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



	startmarker() {
	    let localctx = new StartmarkerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, mpsParser.RULE_startmarker);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 139;
	        this.match(mpsParser.IDENTIFIER);
	        this.state = 140;
	        this.match(mpsParser.KEYWORDMARKER);
	        this.state = 141;
	        this.match(mpsParser.STARTMARKER);
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



	endmarker() {
	    let localctx = new EndmarkerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, mpsParser.RULE_endmarker);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        this.match(mpsParser.IDENTIFIER);
	        this.state = 144;
	        this.match(mpsParser.KEYWORDMARKER);
	        this.state = 145;
	        this.match(mpsParser.ENDMARKER);
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

mpsParser.EOF = antlr4.Token.EOF;
mpsParser.NAMEINDICATORCARD = 1;
mpsParser.ROWINDICATORCARD = 2;
mpsParser.COLUMNINDICATORCARD = 3;
mpsParser.RHSINDICATORCARD = 4;
mpsParser.RANGESINDICATORCARD = 5;
mpsParser.BOUNDSINDICATORCARD = 6;
mpsParser.ENDATAINDICATORCARD = 7;
mpsParser.KEYWORDMARKER = 8;
mpsParser.STARTMARKER = 9;
mpsParser.ENDMARKER = 10;
mpsParser.KEYWORDFREE = 11;
mpsParser.BOUNDKEY = 12;
mpsParser.ROWTYPE = 13;
mpsParser.IDENTIFIER = 14;
mpsParser.NUMERICALVALUE = 15;
mpsParser.WS = 16;
mpsParser.LINE_COMMENT = 17;

mpsParser.RULE_modell = 0;
mpsParser.RULE_firstrow = 1;
mpsParser.RULE_rows = 2;
mpsParser.RULE_columns = 3;
mpsParser.RULE_rhs = 4;
mpsParser.RULE_ranges = 5;
mpsParser.RULE_bounds = 6;
mpsParser.RULE_endata = 7;
mpsParser.RULE_rowdatacard = 8;
mpsParser.RULE_columndatacards = 9;
mpsParser.RULE_rhsdatacards = 10;
mpsParser.RULE_rangesdatacards = 11;
mpsParser.RULE_boundsdatacards = 12;
mpsParser.RULE_columndatacard = 13;
mpsParser.RULE_rhsdatacard = 14;
mpsParser.RULE_rangesdatacard = 15;
mpsParser.RULE_boundsdatacard = 16;
mpsParser.RULE_intblock = 17;
mpsParser.RULE_startmarker = 18;
mpsParser.RULE_endmarker = 19;

class ModellContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mpsParser.RULE_modell;
    }

	firstrow() {
	    return this.getTypedRuleContext(FirstrowContext,0);
	};

	rows() {
	    return this.getTypedRuleContext(RowsContext,0);
	};

	columns() {
	    return this.getTypedRuleContext(ColumnsContext,0);
	};

	rhs() {
	    return this.getTypedRuleContext(RhsContext,0);
	};

	endata() {
	    return this.getTypedRuleContext(EndataContext,0);
	};

	EOF() {
	    return this.getToken(mpsParser.EOF, 0);
	};

	ranges() {
	    return this.getTypedRuleContext(RangesContext,0);
	};

	bounds() {
	    return this.getTypedRuleContext(BoundsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.enterModell(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.exitModell(this);
		}
	}


}



class FirstrowContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mpsParser.RULE_firstrow;
    }

	NAMEINDICATORCARD() {
	    return this.getToken(mpsParser.NAMEINDICATORCARD, 0);
	};

	IDENTIFIER() {
	    return this.getToken(mpsParser.IDENTIFIER, 0);
	};

	KEYWORDFREE() {
	    return this.getToken(mpsParser.KEYWORDFREE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.enterFirstrow(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.exitFirstrow(this);
		}
	}


}



class RowsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mpsParser.RULE_rows;
    }

	ROWINDICATORCARD() {
	    return this.getToken(mpsParser.ROWINDICATORCARD, 0);
	};

	rowdatacard = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RowdatacardContext);
	    } else {
	        return this.getTypedRuleContext(RowdatacardContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.enterRows(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.exitRows(this);
		}
	}


}



class ColumnsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mpsParser.RULE_columns;
    }

	COLUMNINDICATORCARD() {
	    return this.getToken(mpsParser.COLUMNINDICATORCARD, 0);
	};

	columndatacards() {
	    return this.getTypedRuleContext(ColumndatacardsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.enterColumns(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.exitColumns(this);
		}
	}


}



class RhsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mpsParser.RULE_rhs;
    }

	RHSINDICATORCARD() {
	    return this.getToken(mpsParser.RHSINDICATORCARD, 0);
	};

	rhsdatacards() {
	    return this.getTypedRuleContext(RhsdatacardsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.enterRhs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.exitRhs(this);
		}
	}


}



class RangesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mpsParser.RULE_ranges;
    }

	RANGESINDICATORCARD() {
	    return this.getToken(mpsParser.RANGESINDICATORCARD, 0);
	};

	rangesdatacards() {
	    return this.getTypedRuleContext(RangesdatacardsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.enterRanges(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.exitRanges(this);
		}
	}


}



class BoundsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mpsParser.RULE_bounds;
    }

	BOUNDSINDICATORCARD() {
	    return this.getToken(mpsParser.BOUNDSINDICATORCARD, 0);
	};

	boundsdatacards() {
	    return this.getTypedRuleContext(BoundsdatacardsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.enterBounds(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.exitBounds(this);
		}
	}


}



class EndataContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mpsParser.RULE_endata;
    }

	ENDATAINDICATORCARD() {
	    return this.getToken(mpsParser.ENDATAINDICATORCARD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.enterEndata(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.exitEndata(this);
		}
	}


}



class RowdatacardContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mpsParser.RULE_rowdatacard;
    }

	ROWTYPE() {
	    return this.getToken(mpsParser.ROWTYPE, 0);
	};

	IDENTIFIER() {
	    return this.getToken(mpsParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.enterRowdatacard(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.exitRowdatacard(this);
		}
	}


}



class ColumndatacardsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mpsParser.RULE_columndatacards;
    }

	columndatacard = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ColumndatacardContext);
	    } else {
	        return this.getTypedRuleContext(ColumndatacardContext,i);
	    }
	};

	intblock = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IntblockContext);
	    } else {
	        return this.getTypedRuleContext(IntblockContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.enterColumndatacards(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.exitColumndatacards(this);
		}
	}


}



class RhsdatacardsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mpsParser.RULE_rhsdatacards;
    }

	rhsdatacard = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RhsdatacardContext);
	    } else {
	        return this.getTypedRuleContext(RhsdatacardContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.enterRhsdatacards(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.exitRhsdatacards(this);
		}
	}


}



class RangesdatacardsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mpsParser.RULE_rangesdatacards;
    }

	rangesdatacard = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RangesdatacardContext);
	    } else {
	        return this.getTypedRuleContext(RangesdatacardContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.enterRangesdatacards(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.exitRangesdatacards(this);
		}
	}


}



class BoundsdatacardsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mpsParser.RULE_boundsdatacards;
    }

	boundsdatacard = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BoundsdatacardContext);
	    } else {
	        return this.getTypedRuleContext(BoundsdatacardContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.enterBoundsdatacards(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.exitBoundsdatacards(this);
		}
	}


}



class ColumndatacardContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mpsParser.RULE_columndatacard;
    }

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mpsParser.IDENTIFIER);
	    } else {
	        return this.getToken(mpsParser.IDENTIFIER, i);
	    }
	};


	NUMERICALVALUE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mpsParser.NUMERICALVALUE);
	    } else {
	        return this.getToken(mpsParser.NUMERICALVALUE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.enterColumndatacard(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.exitColumndatacard(this);
		}
	}


}



class RhsdatacardContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mpsParser.RULE_rhsdatacard;
    }

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mpsParser.IDENTIFIER);
	    } else {
	        return this.getToken(mpsParser.IDENTIFIER, i);
	    }
	};


	NUMERICALVALUE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mpsParser.NUMERICALVALUE);
	    } else {
	        return this.getToken(mpsParser.NUMERICALVALUE, i);
	    }
	};


	RHSINDICATORCARD() {
	    return this.getToken(mpsParser.RHSINDICATORCARD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.enterRhsdatacard(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.exitRhsdatacard(this);
		}
	}


}



class RangesdatacardContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mpsParser.RULE_rangesdatacard;
    }

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mpsParser.IDENTIFIER);
	    } else {
	        return this.getToken(mpsParser.IDENTIFIER, i);
	    }
	};


	NUMERICALVALUE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mpsParser.NUMERICALVALUE);
	    } else {
	        return this.getToken(mpsParser.NUMERICALVALUE, i);
	    }
	};


	RANGESINDICATORCARD() {
	    return this.getToken(mpsParser.RANGESINDICATORCARD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.enterRangesdatacard(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.exitRangesdatacard(this);
		}
	}


}



class BoundsdatacardContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mpsParser.RULE_boundsdatacard;
    }

	BOUNDKEY() {
	    return this.getToken(mpsParser.BOUNDKEY, 0);
	};

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mpsParser.IDENTIFIER);
	    } else {
	        return this.getToken(mpsParser.IDENTIFIER, i);
	    }
	};


	BOUNDSINDICATORCARD() {
	    return this.getToken(mpsParser.BOUNDSINDICATORCARD, 0);
	};

	NUMERICALVALUE() {
	    return this.getToken(mpsParser.NUMERICALVALUE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.enterBoundsdatacard(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.exitBoundsdatacard(this);
		}
	}


}



class IntblockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mpsParser.RULE_intblock;
    }

	startmarker() {
	    return this.getTypedRuleContext(StartmarkerContext,0);
	};

	endmarker() {
	    return this.getTypedRuleContext(EndmarkerContext,0);
	};

	columndatacard = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ColumndatacardContext);
	    } else {
	        return this.getTypedRuleContext(ColumndatacardContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.enterIntblock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.exitIntblock(this);
		}
	}


}



class StartmarkerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mpsParser.RULE_startmarker;
    }

	IDENTIFIER() {
	    return this.getToken(mpsParser.IDENTIFIER, 0);
	};

	KEYWORDMARKER() {
	    return this.getToken(mpsParser.KEYWORDMARKER, 0);
	};

	STARTMARKER() {
	    return this.getToken(mpsParser.STARTMARKER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.enterStartmarker(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.exitStartmarker(this);
		}
	}


}



class EndmarkerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mpsParser.RULE_endmarker;
    }

	IDENTIFIER() {
	    return this.getToken(mpsParser.IDENTIFIER, 0);
	};

	KEYWORDMARKER() {
	    return this.getToken(mpsParser.KEYWORDMARKER, 0);
	};

	ENDMARKER() {
	    return this.getToken(mpsParser.ENDMARKER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.enterEndmarker(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mpsListener ) {
	        listener.exitEndmarker(this);
		}
	}


}




mpsParser.ModellContext = ModellContext; 
mpsParser.FirstrowContext = FirstrowContext; 
mpsParser.RowsContext = RowsContext; 
mpsParser.ColumnsContext = ColumnsContext; 
mpsParser.RhsContext = RhsContext; 
mpsParser.RangesContext = RangesContext; 
mpsParser.BoundsContext = BoundsContext; 
mpsParser.EndataContext = EndataContext; 
mpsParser.RowdatacardContext = RowdatacardContext; 
mpsParser.ColumndatacardsContext = ColumndatacardsContext; 
mpsParser.RhsdatacardsContext = RhsdatacardsContext; 
mpsParser.RangesdatacardsContext = RangesdatacardsContext; 
mpsParser.BoundsdatacardsContext = BoundsdatacardsContext; 
mpsParser.ColumndatacardContext = ColumndatacardContext; 
mpsParser.RhsdatacardContext = RhsdatacardContext; 
mpsParser.RangesdatacardContext = RangesdatacardContext; 
mpsParser.BoundsdatacardContext = BoundsdatacardContext; 
mpsParser.IntblockContext = IntblockContext; 
mpsParser.StartmarkerContext = StartmarkerContext; 
mpsParser.EndmarkerContext = EndmarkerContext; 
