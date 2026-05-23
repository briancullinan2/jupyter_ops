// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/guido/guido.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import guidoListener from './guidoListener.js';
const serializedATN = [4,1,34,219,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,1,0,4,0,60,8,0,11,0,12,0,61,1,0,3,0,65,8,0,1,0,1,0,1,1,1,
1,4,1,71,8,1,11,1,12,1,72,1,1,1,1,1,2,1,2,1,2,5,2,80,8,2,10,2,12,2,83,9,
2,1,3,1,3,1,3,1,3,4,3,89,8,3,11,3,12,3,90,1,3,1,3,1,4,1,4,1,4,3,4,98,8,4,
1,4,3,4,101,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,113,8,5,1,6,
1,6,1,6,1,6,5,6,119,8,6,10,6,12,6,122,9,6,1,6,1,6,1,7,1,7,1,7,3,7,129,8,
7,1,8,1,8,1,8,4,8,134,8,8,11,8,12,8,135,1,9,1,9,1,9,4,9,141,8,9,11,9,12,
9,142,1,9,1,9,1,10,1,10,3,10,149,8,10,1,10,3,10,152,8,10,1,10,3,10,155,8,
10,1,10,3,10,158,8,10,1,11,1,11,1,11,1,11,5,11,164,8,11,10,11,12,11,167,
9,11,1,11,1,11,1,12,1,12,1,13,1,13,1,14,3,14,176,8,14,1,14,1,14,1,15,1,15,
1,16,3,16,183,8,16,1,16,1,16,3,16,187,8,16,1,17,3,17,190,8,17,1,17,1,17,
1,18,4,18,195,8,18,11,18,12,18,196,1,19,1,19,1,20,1,20,1,21,1,21,1,22,1,
22,1,23,1,23,1,24,1,24,1,25,1,25,1,26,1,26,1,27,1,27,1,28,1,28,1,28,0,0,
29,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,
50,52,54,56,0,4,1,0,30,31,2,0,29,29,31,31,1,0,11,12,1,0,13,14,223,0,64,1,
0,0,0,2,68,1,0,0,0,4,76,1,0,0,0,6,84,1,0,0,0,8,94,1,0,0,0,10,112,1,0,0,0,
12,114,1,0,0,0,14,128,1,0,0,0,16,130,1,0,0,0,18,137,1,0,0,0,20,146,1,0,0,
0,22,159,1,0,0,0,24,170,1,0,0,0,26,172,1,0,0,0,28,175,1,0,0,0,30,179,1,0,
0,0,32,182,1,0,0,0,34,189,1,0,0,0,36,194,1,0,0,0,38,198,1,0,0,0,40,200,1,
0,0,0,42,202,1,0,0,0,44,204,1,0,0,0,46,206,1,0,0,0,48,208,1,0,0,0,50,210,
1,0,0,0,52,212,1,0,0,0,54,214,1,0,0,0,56,216,1,0,0,0,58,60,3,2,1,0,59,58,
1,0,0,0,60,61,1,0,0,0,61,59,1,0,0,0,61,62,1,0,0,0,62,65,1,0,0,0,63,65,3,
4,2,0,64,59,1,0,0,0,64,63,1,0,0,0,65,66,1,0,0,0,66,67,5,0,0,1,67,1,1,0,0,
0,68,70,5,1,0,0,69,71,3,4,2,0,70,69,1,0,0,0,71,72,1,0,0,0,72,70,1,0,0,0,
72,73,1,0,0,0,73,74,1,0,0,0,74,75,5,2,0,0,75,3,1,0,0,0,76,81,3,6,3,0,77,
78,5,3,0,0,78,80,3,6,3,0,79,77,1,0,0,0,80,83,1,0,0,0,81,79,1,0,0,0,81,82,
1,0,0,0,82,5,1,0,0,0,83,81,1,0,0,0,84,88,5,4,0,0,85,89,3,8,4,0,86,89,3,20,
10,0,87,89,3,22,11,0,88,85,1,0,0,0,88,86,1,0,0,0,88,87,1,0,0,0,89,90,1,0,
0,0,90,88,1,0,0,0,90,91,1,0,0,0,91,92,1,0,0,0,92,93,5,5,0,0,93,7,1,0,0,0,
94,95,5,28,0,0,95,97,3,10,5,0,96,98,3,12,6,0,97,96,1,0,0,0,97,98,1,0,0,0,
98,100,1,0,0,0,99,101,3,18,9,0,100,99,1,0,0,0,100,101,1,0,0,0,101,9,1,0,
0,0,102,113,3,38,19,0,103,113,3,40,20,0,104,113,3,42,21,0,105,113,3,44,22,
0,106,113,3,46,23,0,107,113,3,48,24,0,108,113,3,50,25,0,109,113,3,52,26,
0,110,113,3,56,28,0,111,113,3,54,27,0,112,102,1,0,0,0,112,103,1,0,0,0,112,
104,1,0,0,0,112,105,1,0,0,0,112,106,1,0,0,0,112,107,1,0,0,0,112,108,1,0,
0,0,112,109,1,0,0,0,112,110,1,0,0,0,112,111,1,0,0,0,113,11,1,0,0,0,114,115,
5,6,0,0,115,120,3,14,7,0,116,117,5,3,0,0,117,119,3,14,7,0,118,116,1,0,0,
0,119,122,1,0,0,0,120,118,1,0,0,0,120,121,1,0,0,0,121,123,1,0,0,0,122,120,
1,0,0,0,123,124,5,7,0,0,124,13,1,0,0,0,125,129,5,32,0,0,126,129,3,28,14,
0,127,129,3,16,8,0,128,125,1,0,0,0,128,126,1,0,0,0,128,127,1,0,0,0,129,15,
1,0,0,0,130,131,5,31,0,0,131,133,5,8,0,0,132,134,7,0,0,0,133,132,1,0,0,0,
134,135,1,0,0,0,135,133,1,0,0,0,135,136,1,0,0,0,136,17,1,0,0,0,137,140,5,
9,0,0,138,141,3,20,10,0,139,141,3,22,11,0,140,138,1,0,0,0,140,139,1,0,0,
0,141,142,1,0,0,0,142,140,1,0,0,0,142,143,1,0,0,0,143,144,1,0,0,0,144,145,
5,10,0,0,145,19,1,0,0,0,146,148,3,24,12,0,147,149,3,26,13,0,148,147,1,0,
0,0,148,149,1,0,0,0,149,151,1,0,0,0,150,152,3,30,15,0,151,150,1,0,0,0,151,
152,1,0,0,0,152,154,1,0,0,0,153,155,3,34,17,0,154,153,1,0,0,0,154,155,1,
0,0,0,155,157,1,0,0,0,156,158,3,36,18,0,157,156,1,0,0,0,157,158,1,0,0,0,
158,21,1,0,0,0,159,160,5,1,0,0,160,165,3,20,10,0,161,162,5,3,0,0,162,164,
3,20,10,0,163,161,1,0,0,0,164,167,1,0,0,0,165,163,1,0,0,0,165,166,1,0,0,
0,166,168,1,0,0,0,167,165,1,0,0,0,168,169,5,2,0,0,169,23,1,0,0,0,170,171,
7,1,0,0,171,25,1,0,0,0,172,173,7,2,0,0,173,27,1,0,0,0,174,176,7,3,0,0,175,
174,1,0,0,0,175,176,1,0,0,0,176,177,1,0,0,0,177,178,5,30,0,0,178,29,1,0,
0,0,179,180,3,28,14,0,180,31,1,0,0,0,181,183,3,28,14,0,182,181,1,0,0,0,182,
183,1,0,0,0,183,186,1,0,0,0,184,185,5,15,0,0,185,187,3,28,14,0,186,184,1,
0,0,0,186,187,1,0,0,0,187,33,1,0,0,0,188,190,5,16,0,0,189,188,1,0,0,0,189,
190,1,0,0,0,190,191,1,0,0,0,191,192,3,32,16,0,192,35,1,0,0,0,193,195,5,17,
0,0,194,193,1,0,0,0,195,196,1,0,0,0,196,194,1,0,0,0,196,197,1,0,0,0,197,
37,1,0,0,0,198,199,5,18,0,0,199,39,1,0,0,0,200,201,5,19,0,0,201,41,1,0,0,
0,202,203,5,20,0,0,203,43,1,0,0,0,204,205,5,21,0,0,205,45,1,0,0,0,206,207,
5,22,0,0,207,47,1,0,0,0,208,209,5,23,0,0,209,49,1,0,0,0,210,211,5,24,0,0,
211,51,1,0,0,0,212,213,5,25,0,0,213,53,1,0,0,0,214,215,5,26,0,0,215,55,1,
0,0,0,216,217,5,27,0,0,217,57,1,0,0,0,24,61,64,72,81,88,90,97,100,112,120,
128,135,140,142,148,151,154,157,165,175,182,186,189,196];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class guidoParser extends antlr4.Parser {

    static grammarFileName = "guido.g4";
    static literalNames = [ null, "'{'", "'}'", "','", "'['", "']'", "'<'", 
                            "'>'", "'='", "'('", "')'", "'#'", "'&'", "'-'", 
                            "'+'", "'/'", "'*'", "'.'", "'title'", "'tempo'", 
                            "'clef'", "'meter'", "'slur'", "'key'", "'barFormat'", 
                            "'staff'", "'repeatEnd'", "'t'", "'\\'", "'_'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, "TAGSTART", "REST", 
                             "NUMBER", "STRING", "STRINGLITERAL", "COMMENT", 
                             "WS" ];
    static ruleNames = [ "prog", "segment", "sequencelist", "sequence", 
                         "tag", "tagname", "parameters", "parameter", "kvpair", 
                         "notes", "note", "chord", "notename", "accidental", 
                         "number", "octave", "fraction", "duration", "dotting", 
                         "title", "tempo", "clef", "meter", "slur", "key", 
                         "barformat", "staff", "repeatEnd", "t" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = guidoParser.ruleNames;
        this.literalNames = guidoParser.literalNames;
        this.symbolicNames = guidoParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, guidoParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.state = 59; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 58;
	                this.segment();
	                this.state = 61; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===1);
	            break;
	        case 4:
	            this.state = 63;
	            this.sequencelist();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 66;
	        this.match(guidoParser.EOF);
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



	segment() {
	    let localctx = new SegmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, guidoParser.RULE_segment);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.match(guidoParser.T__0);
	        this.state = 70; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 69;
	            this.sequencelist();
	            this.state = 72; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===4);
	        this.state = 74;
	        this.match(guidoParser.T__1);
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



	sequencelist() {
	    let localctx = new SequencelistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, guidoParser.RULE_sequencelist);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.sequence();
	        this.state = 81;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 77;
	            this.match(guidoParser.T__2);
	            this.state = 78;
	            this.sequence();
	            this.state = 83;
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



	sequence() {
	    let localctx = new SequenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, guidoParser.RULE_sequence);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.match(guidoParser.T__3);
	        this.state = 88; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 88;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 28:
	                this.state = 85;
	                this.tag();
	                break;
	            case 29:
	            case 31:
	                this.state = 86;
	                this.note();
	                break;
	            case 1:
	                this.state = 87;
	                this.chord();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 90; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2952790018) !== 0));
	        this.state = 92;
	        this.match(guidoParser.T__4);
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



	tag() {
	    let localctx = new TagContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, guidoParser.RULE_tag);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.match(guidoParser.TAGSTART);
	        this.state = 95;
	        this.tagname();
	        this.state = 97;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 96;
	            this.parameters();
	        }

	        this.state = 100;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 99;
	            this.notes();
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



	tagname() {
	    let localctx = new TagnameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, guidoParser.RULE_tagname);
	    try {
	        this.state = 112;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 102;
	            this.title();
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 103;
	            this.tempo();
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 104;
	            this.clef();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 105;
	            this.meter();
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 106;
	            this.slur();
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 107;
	            this.key();
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 108;
	            this.barformat();
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 109;
	            this.staff();
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 110;
	            this.t();
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 111;
	            this.repeatEnd();
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



	parameters() {
	    let localctx = new ParametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, guidoParser.RULE_parameters);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.match(guidoParser.T__5);
	        this.state = 115;
	        this.parameter();
	        this.state = 120;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 116;
	            this.match(guidoParser.T__2);
	            this.state = 117;
	            this.parameter();
	            this.state = 122;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 123;
	        this.match(guidoParser.T__6);
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



	parameter() {
	    let localctx = new ParameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, guidoParser.RULE_parameter);
	    try {
	        this.state = 128;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 32:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 125;
	            this.match(guidoParser.STRINGLITERAL);
	            break;
	        case 13:
	        case 14:
	        case 30:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 126;
	            this.number();
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 127;
	            this.kvpair();
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



	kvpair() {
	    let localctx = new KvpairContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, guidoParser.RULE_kvpair);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130;
	        this.match(guidoParser.STRING);
	        this.state = 131;
	        this.match(guidoParser.T__7);
	        this.state = 133; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 132;
	            _la = this._input.LA(1);
	            if(!(_la===30 || _la===31)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 135; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===30 || _la===31);
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



	notes() {
	    let localctx = new NotesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, guidoParser.RULE_notes);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this.match(guidoParser.T__8);
	        this.state = 140; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 140;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 29:
	            case 31:
	                this.state = 138;
	                this.note();
	                break;
	            case 1:
	                this.state = 139;
	                this.chord();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 142; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2684354562) !== 0));
	        this.state = 144;
	        this.match(guidoParser.T__9);
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



	note() {
	    let localctx = new NoteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, guidoParser.RULE_note);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        this.notename();
	        this.state = 148;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11 || _la===12) {
	            this.state = 147;
	            this.accidental();
	        }

	        this.state = 151;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        if(la_===1) {
	            this.state = 150;
	            this.octave();

	        }
	        this.state = 154;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        if(la_===1) {
	            this.state = 153;
	            this.duration();

	        }
	        this.state = 157;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 156;
	            this.dotting();
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



	chord() {
	    let localctx = new ChordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, guidoParser.RULE_chord);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 159;
	        this.match(guidoParser.T__0);
	        this.state = 160;
	        this.note();
	        this.state = 165;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 161;
	            this.match(guidoParser.T__2);
	            this.state = 162;
	            this.note();
	            this.state = 167;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 168;
	        this.match(guidoParser.T__1);
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



	notename() {
	    let localctx = new NotenameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, guidoParser.RULE_notename);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 170;
	        _la = this._input.LA(1);
	        if(!(_la===29 || _la===31)) {
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



	accidental() {
	    let localctx = new AccidentalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, guidoParser.RULE_accidental);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 172;
	        _la = this._input.LA(1);
	        if(!(_la===11 || _la===12)) {
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
	    this.enterRule(localctx, 28, guidoParser.RULE_number);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 175;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13 || _la===14) {
	            this.state = 174;
	            _la = this._input.LA(1);
	            if(!(_la===13 || _la===14)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 177;
	        this.match(guidoParser.NUMBER);
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



	octave() {
	    let localctx = new OctaveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, guidoParser.RULE_octave);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 179;
	        this.number();
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
	    this.enterRule(localctx, 32, guidoParser.RULE_fraction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 182;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1073766400) !== 0)) {
	            this.state = 181;
	            this.number();
	        }

	        this.state = 186;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 184;
	            this.match(guidoParser.T__14);
	            this.state = 185;
	            this.number();
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



	duration() {
	    let localctx = new DurationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, guidoParser.RULE_duration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 189;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 188;
	            this.match(guidoParser.T__15);
	        }

	        this.state = 191;
	        this.fraction();
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



	dotting() {
	    let localctx = new DottingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, guidoParser.RULE_dotting);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 194; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 193;
	            this.match(guidoParser.T__16);
	            this.state = 196; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===17);
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



	title() {
	    let localctx = new TitleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, guidoParser.RULE_title);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 198;
	        this.match(guidoParser.T__17);
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



	tempo() {
	    let localctx = new TempoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, guidoParser.RULE_tempo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 200;
	        this.match(guidoParser.T__18);
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



	clef() {
	    let localctx = new ClefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, guidoParser.RULE_clef);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 202;
	        this.match(guidoParser.T__19);
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



	meter() {
	    let localctx = new MeterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, guidoParser.RULE_meter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 204;
	        this.match(guidoParser.T__20);
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



	slur() {
	    let localctx = new SlurContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, guidoParser.RULE_slur);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        this.match(guidoParser.T__21);
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
	    this.enterRule(localctx, 48, guidoParser.RULE_key);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 208;
	        this.match(guidoParser.T__22);
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



	barformat() {
	    let localctx = new BarformatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, guidoParser.RULE_barformat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 210;
	        this.match(guidoParser.T__23);
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



	staff() {
	    let localctx = new StaffContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, guidoParser.RULE_staff);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 212;
	        this.match(guidoParser.T__24);
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



	repeatEnd() {
	    let localctx = new RepeatEndContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, guidoParser.RULE_repeatEnd);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 214;
	        this.match(guidoParser.T__25);
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



	t() {
	    let localctx = new TContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, guidoParser.RULE_t);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 216;
	        this.match(guidoParser.T__26);
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

guidoParser.EOF = antlr4.Token.EOF;
guidoParser.T__0 = 1;
guidoParser.T__1 = 2;
guidoParser.T__2 = 3;
guidoParser.T__3 = 4;
guidoParser.T__4 = 5;
guidoParser.T__5 = 6;
guidoParser.T__6 = 7;
guidoParser.T__7 = 8;
guidoParser.T__8 = 9;
guidoParser.T__9 = 10;
guidoParser.T__10 = 11;
guidoParser.T__11 = 12;
guidoParser.T__12 = 13;
guidoParser.T__13 = 14;
guidoParser.T__14 = 15;
guidoParser.T__15 = 16;
guidoParser.T__16 = 17;
guidoParser.T__17 = 18;
guidoParser.T__18 = 19;
guidoParser.T__19 = 20;
guidoParser.T__20 = 21;
guidoParser.T__21 = 22;
guidoParser.T__22 = 23;
guidoParser.T__23 = 24;
guidoParser.T__24 = 25;
guidoParser.T__25 = 26;
guidoParser.T__26 = 27;
guidoParser.TAGSTART = 28;
guidoParser.REST = 29;
guidoParser.NUMBER = 30;
guidoParser.STRING = 31;
guidoParser.STRINGLITERAL = 32;
guidoParser.COMMENT = 33;
guidoParser.WS = 34;

guidoParser.RULE_prog = 0;
guidoParser.RULE_segment = 1;
guidoParser.RULE_sequencelist = 2;
guidoParser.RULE_sequence = 3;
guidoParser.RULE_tag = 4;
guidoParser.RULE_tagname = 5;
guidoParser.RULE_parameters = 6;
guidoParser.RULE_parameter = 7;
guidoParser.RULE_kvpair = 8;
guidoParser.RULE_notes = 9;
guidoParser.RULE_note = 10;
guidoParser.RULE_chord = 11;
guidoParser.RULE_notename = 12;
guidoParser.RULE_accidental = 13;
guidoParser.RULE_number = 14;
guidoParser.RULE_octave = 15;
guidoParser.RULE_fraction = 16;
guidoParser.RULE_duration = 17;
guidoParser.RULE_dotting = 18;
guidoParser.RULE_title = 19;
guidoParser.RULE_tempo = 20;
guidoParser.RULE_clef = 21;
guidoParser.RULE_meter = 22;
guidoParser.RULE_slur = 23;
guidoParser.RULE_key = 24;
guidoParser.RULE_barformat = 25;
guidoParser.RULE_staff = 26;
guidoParser.RULE_repeatEnd = 27;
guidoParser.RULE_t = 28;

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
        this.ruleIndex = guidoParser.RULE_prog;
    }

	EOF() {
	    return this.getToken(guidoParser.EOF, 0);
	};

	sequencelist() {
	    return this.getTypedRuleContext(SequencelistContext,0);
	};

	segment = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SegmentContext);
	    } else {
	        return this.getTypedRuleContext(SegmentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.exitProg(this);
		}
	}


}



class SegmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = guidoParser.RULE_segment;
    }

	sequencelist = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SequencelistContext);
	    } else {
	        return this.getTypedRuleContext(SequencelistContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.enterSegment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.exitSegment(this);
		}
	}


}



class SequencelistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = guidoParser.RULE_sequencelist;
    }

	sequence = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SequenceContext);
	    } else {
	        return this.getTypedRuleContext(SequenceContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.enterSequencelist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.exitSequencelist(this);
		}
	}


}



class SequenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = guidoParser.RULE_sequence;
    }

	tag = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TagContext);
	    } else {
	        return this.getTypedRuleContext(TagContext,i);
	    }
	};

	note = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NoteContext);
	    } else {
	        return this.getTypedRuleContext(NoteContext,i);
	    }
	};

	chord = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ChordContext);
	    } else {
	        return this.getTypedRuleContext(ChordContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.enterSequence(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.exitSequence(this);
		}
	}


}



class TagContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = guidoParser.RULE_tag;
    }

	TAGSTART() {
	    return this.getToken(guidoParser.TAGSTART, 0);
	};

	tagname() {
	    return this.getTypedRuleContext(TagnameContext,0);
	};

	parameters() {
	    return this.getTypedRuleContext(ParametersContext,0);
	};

	notes() {
	    return this.getTypedRuleContext(NotesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.enterTag(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.exitTag(this);
		}
	}


}



class TagnameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = guidoParser.RULE_tagname;
    }

	title() {
	    return this.getTypedRuleContext(TitleContext,0);
	};

	tempo() {
	    return this.getTypedRuleContext(TempoContext,0);
	};

	clef() {
	    return this.getTypedRuleContext(ClefContext,0);
	};

	meter() {
	    return this.getTypedRuleContext(MeterContext,0);
	};

	slur() {
	    return this.getTypedRuleContext(SlurContext,0);
	};

	key() {
	    return this.getTypedRuleContext(KeyContext,0);
	};

	barformat() {
	    return this.getTypedRuleContext(BarformatContext,0);
	};

	staff() {
	    return this.getTypedRuleContext(StaffContext,0);
	};

	t() {
	    return this.getTypedRuleContext(TContext,0);
	};

	repeatEnd() {
	    return this.getTypedRuleContext(RepeatEndContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.enterTagname(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.exitTagname(this);
		}
	}


}



class ParametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = guidoParser.RULE_parameters;
    }

	parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParameterContext);
	    } else {
	        return this.getTypedRuleContext(ParameterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.enterParameters(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.exitParameters(this);
		}
	}


}



class ParameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = guidoParser.RULE_parameter;
    }

	STRINGLITERAL() {
	    return this.getToken(guidoParser.STRINGLITERAL, 0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	kvpair() {
	    return this.getTypedRuleContext(KvpairContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.enterParameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.exitParameter(this);
		}
	}


}



class KvpairContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = guidoParser.RULE_kvpair;
    }

	STRING = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(guidoParser.STRING);
	    } else {
	        return this.getToken(guidoParser.STRING, i);
	    }
	};


	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(guidoParser.NUMBER);
	    } else {
	        return this.getToken(guidoParser.NUMBER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.enterKvpair(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.exitKvpair(this);
		}
	}


}



class NotesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = guidoParser.RULE_notes;
    }

	note = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NoteContext);
	    } else {
	        return this.getTypedRuleContext(NoteContext,i);
	    }
	};

	chord = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ChordContext);
	    } else {
	        return this.getTypedRuleContext(ChordContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.enterNotes(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.exitNotes(this);
		}
	}


}



class NoteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = guidoParser.RULE_note;
    }

	notename() {
	    return this.getTypedRuleContext(NotenameContext,0);
	};

	accidental() {
	    return this.getTypedRuleContext(AccidentalContext,0);
	};

	octave() {
	    return this.getTypedRuleContext(OctaveContext,0);
	};

	duration() {
	    return this.getTypedRuleContext(DurationContext,0);
	};

	dotting() {
	    return this.getTypedRuleContext(DottingContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.enterNote(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.exitNote(this);
		}
	}


}



class ChordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = guidoParser.RULE_chord;
    }

	note = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NoteContext);
	    } else {
	        return this.getTypedRuleContext(NoteContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.enterChord(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.exitChord(this);
		}
	}


}



class NotenameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = guidoParser.RULE_notename;
    }

	STRING() {
	    return this.getToken(guidoParser.STRING, 0);
	};

	REST() {
	    return this.getToken(guidoParser.REST, 0);
	};

	enterRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.enterNotename(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.exitNotename(this);
		}
	}


}



class AccidentalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = guidoParser.RULE_accidental;
    }


	enterRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.enterAccidental(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.exitAccidental(this);
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
        this.ruleIndex = guidoParser.RULE_number;
    }

	NUMBER() {
	    return this.getToken(guidoParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.exitNumber(this);
		}
	}


}



class OctaveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = guidoParser.RULE_octave;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.enterOctave(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.exitOctave(this);
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
        this.ruleIndex = guidoParser.RULE_fraction;
    }

	number = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumberContext);
	    } else {
	        return this.getTypedRuleContext(NumberContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.enterFraction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.exitFraction(this);
		}
	}


}



class DurationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = guidoParser.RULE_duration;
    }

	fraction() {
	    return this.getTypedRuleContext(FractionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.enterDuration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.exitDuration(this);
		}
	}


}



class DottingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = guidoParser.RULE_dotting;
    }


	enterRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.enterDotting(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.exitDotting(this);
		}
	}


}



class TitleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = guidoParser.RULE_title;
    }


	enterRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.enterTitle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.exitTitle(this);
		}
	}


}



class TempoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = guidoParser.RULE_tempo;
    }


	enterRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.enterTempo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.exitTempo(this);
		}
	}


}



class ClefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = guidoParser.RULE_clef;
    }


	enterRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.enterClef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.exitClef(this);
		}
	}


}



class MeterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = guidoParser.RULE_meter;
    }


	enterRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.enterMeter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.exitMeter(this);
		}
	}


}



class SlurContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = guidoParser.RULE_slur;
    }


	enterRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.enterSlur(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.exitSlur(this);
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
        this.ruleIndex = guidoParser.RULE_key;
    }


	enterRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.enterKey(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.exitKey(this);
		}
	}


}



class BarformatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = guidoParser.RULE_barformat;
    }


	enterRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.enterBarformat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.exitBarformat(this);
		}
	}


}



class StaffContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = guidoParser.RULE_staff;
    }


	enterRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.enterStaff(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.exitStaff(this);
		}
	}


}



class RepeatEndContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = guidoParser.RULE_repeatEnd;
    }


	enterRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.enterRepeatEnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.exitRepeatEnd(this);
		}
	}


}



class TContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = guidoParser.RULE_t;
    }


	enterRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.enterT(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof guidoListener ) {
	        listener.exitT(this);
		}
	}


}




guidoParser.ProgContext = ProgContext; 
guidoParser.SegmentContext = SegmentContext; 
guidoParser.SequencelistContext = SequencelistContext; 
guidoParser.SequenceContext = SequenceContext; 
guidoParser.TagContext = TagContext; 
guidoParser.TagnameContext = TagnameContext; 
guidoParser.ParametersContext = ParametersContext; 
guidoParser.ParameterContext = ParameterContext; 
guidoParser.KvpairContext = KvpairContext; 
guidoParser.NotesContext = NotesContext; 
guidoParser.NoteContext = NoteContext; 
guidoParser.ChordContext = ChordContext; 
guidoParser.NotenameContext = NotenameContext; 
guidoParser.AccidentalContext = AccidentalContext; 
guidoParser.NumberContext = NumberContext; 
guidoParser.OctaveContext = OctaveContext; 
guidoParser.FractionContext = FractionContext; 
guidoParser.DurationContext = DurationContext; 
guidoParser.DottingContext = DottingContext; 
guidoParser.TitleContext = TitleContext; 
guidoParser.TempoContext = TempoContext; 
guidoParser.ClefContext = ClefContext; 
guidoParser.MeterContext = MeterContext; 
guidoParser.SlurContext = SlurContext; 
guidoParser.KeyContext = KeyContext; 
guidoParser.BarformatContext = BarformatContext; 
guidoParser.StaffContext = StaffContext; 
guidoParser.RepeatEndContext = RepeatEndContext; 
guidoParser.TContext = TContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
