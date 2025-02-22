// Generated from ./creole/creole.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import creoleListener from './creoleListener.js';
const serializedATN = [4,1,17,179,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,3,0,30,8,0,1,0,5,0,33,8,0,10,0,12,0,36,9,0,1,1,4,1,39,8,1,
11,1,12,1,40,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,54,8,2,1,3,
4,3,57,8,3,11,3,12,3,58,1,3,1,3,5,3,63,8,3,10,3,12,3,66,9,3,1,4,1,4,4,4,
70,8,4,11,4,12,4,71,1,4,3,4,75,8,4,1,5,1,5,1,5,4,5,80,8,5,11,5,12,5,81,1,
5,1,5,1,5,1,6,1,6,1,6,1,6,4,6,91,8,6,11,6,12,6,92,3,6,95,8,6,1,6,1,6,1,6,
1,6,1,6,1,6,4,6,103,8,6,11,6,12,6,104,1,6,1,6,3,6,109,8,6,1,7,1,7,1,7,1,
7,1,8,1,8,1,9,4,9,118,8,9,11,9,12,9,119,1,9,1,9,4,9,124,8,9,11,9,12,9,125,
1,9,3,9,129,8,9,1,10,1,10,4,10,133,8,10,11,10,12,10,134,4,10,137,8,10,11,
10,12,10,138,1,10,1,10,5,10,143,8,10,10,10,12,10,146,9,10,1,11,1,11,4,11,
150,8,11,11,11,12,11,151,4,11,154,8,11,11,11,12,11,155,1,11,1,11,5,11,160,
8,11,10,11,12,11,163,9,11,1,12,4,12,166,8,12,11,12,12,12,167,1,12,1,12,5,
12,172,8,12,10,12,12,12,175,9,12,1,13,1,13,1,13,0,0,14,0,2,4,6,8,10,12,14,
16,18,20,22,24,26,0,1,2,0,13,13,17,17,197,0,34,1,0,0,0,2,38,1,0,0,0,4,53,
1,0,0,0,6,56,1,0,0,0,8,67,1,0,0,0,10,76,1,0,0,0,12,108,1,0,0,0,14,110,1,
0,0,0,16,114,1,0,0,0,18,128,1,0,0,0,20,136,1,0,0,0,22,153,1,0,0,0,24,165,
1,0,0,0,26,176,1,0,0,0,28,30,3,2,1,0,29,28,1,0,0,0,29,30,1,0,0,0,30,31,1,
0,0,0,31,33,5,15,0,0,32,29,1,0,0,0,33,36,1,0,0,0,34,32,1,0,0,0,34,35,1,0,
0,0,35,1,1,0,0,0,36,34,1,0,0,0,37,39,3,4,2,0,38,37,1,0,0,0,39,40,1,0,0,0,
40,38,1,0,0,0,40,41,1,0,0,0,41,3,1,0,0,0,42,54,3,8,4,0,43,54,3,10,5,0,44,
54,3,12,6,0,45,54,3,24,12,0,46,54,3,16,8,0,47,54,3,6,3,0,48,54,3,18,9,0,
49,54,3,14,7,0,50,54,3,22,11,0,51,54,3,20,10,0,52,54,3,26,13,0,53,42,1,0,
0,0,53,43,1,0,0,0,53,44,1,0,0,0,53,45,1,0,0,0,53,46,1,0,0,0,53,47,1,0,0,
0,53,48,1,0,0,0,53,49,1,0,0,0,53,50,1,0,0,0,53,51,1,0,0,0,53,52,1,0,0,0,
54,5,1,0,0,0,55,57,7,0,0,0,56,55,1,0,0,0,57,58,1,0,0,0,58,56,1,0,0,0,58,
59,1,0,0,0,59,64,1,0,0,0,60,61,5,1,0,0,61,63,3,6,3,0,62,60,1,0,0,0,63,66,
1,0,0,0,64,62,1,0,0,0,64,65,1,0,0,0,65,7,1,0,0,0,66,64,1,0,0,0,67,69,5,2,
0,0,68,70,3,4,2,0,69,68,1,0,0,0,70,71,1,0,0,0,71,69,1,0,0,0,71,72,1,0,0,
0,72,74,1,0,0,0,73,75,5,2,0,0,74,73,1,0,0,0,74,75,1,0,0,0,75,9,1,0,0,0,76,
77,5,17,0,0,77,79,5,17,0,0,78,80,3,4,2,0,79,78,1,0,0,0,80,81,1,0,0,0,81,
79,1,0,0,0,81,82,1,0,0,0,82,83,1,0,0,0,83,84,5,17,0,0,84,85,5,17,0,0,85,
11,1,0,0,0,86,87,5,9,0,0,87,94,3,6,3,0,88,90,5,3,0,0,89,91,3,4,2,0,90,89,
1,0,0,0,91,92,1,0,0,0,92,90,1,0,0,0,92,93,1,0,0,0,93,95,1,0,0,0,94,88,1,
0,0,0,94,95,1,0,0,0,95,96,1,0,0,0,96,97,5,10,0,0,97,109,1,0,0,0,98,99,5,
11,0,0,99,100,3,6,3,0,100,102,5,3,0,0,101,103,3,4,2,0,102,101,1,0,0,0,103,
104,1,0,0,0,104,102,1,0,0,0,104,105,1,0,0,0,105,106,1,0,0,0,106,107,5,12,
0,0,107,109,1,0,0,0,108,86,1,0,0,0,108,98,1,0,0,0,109,13,1,0,0,0,110,111,
5,11,0,0,111,112,3,6,3,0,112,113,5,12,0,0,113,15,1,0,0,0,114,115,5,4,0,0,
115,17,1,0,0,0,116,118,5,5,0,0,117,116,1,0,0,0,118,119,1,0,0,0,119,117,1,
0,0,0,119,120,1,0,0,0,120,121,1,0,0,0,121,129,3,4,2,0,122,124,5,8,0,0,123,
122,1,0,0,0,124,125,1,0,0,0,125,123,1,0,0,0,125,126,1,0,0,0,126,127,1,0,
0,0,127,129,3,4,2,0,128,117,1,0,0,0,128,123,1,0,0,0,129,19,1,0,0,0,130,132,
5,6,0,0,131,133,3,4,2,0,132,131,1,0,0,0,133,134,1,0,0,0,134,132,1,0,0,0,
134,135,1,0,0,0,135,137,1,0,0,0,136,130,1,0,0,0,137,138,1,0,0,0,138,136,
1,0,0,0,138,139,1,0,0,0,139,140,1,0,0,0,140,144,5,3,0,0,141,143,5,14,0,0,
142,141,1,0,0,0,143,146,1,0,0,0,144,142,1,0,0,0,144,145,1,0,0,0,145,21,1,
0,0,0,146,144,1,0,0,0,147,149,5,3,0,0,148,150,3,4,2,0,149,148,1,0,0,0,150,
151,1,0,0,0,151,149,1,0,0,0,151,152,1,0,0,0,152,154,1,0,0,0,153,147,1,0,
0,0,154,155,1,0,0,0,155,153,1,0,0,0,155,156,1,0,0,0,156,157,1,0,0,0,157,
161,5,3,0,0,158,160,5,14,0,0,159,158,1,0,0,0,160,163,1,0,0,0,161,159,1,0,
0,0,161,162,1,0,0,0,162,23,1,0,0,0,163,161,1,0,0,0,164,166,5,7,0,0,165,164,
1,0,0,0,166,167,1,0,0,0,167,165,1,0,0,0,167,168,1,0,0,0,168,169,1,0,0,0,
169,173,3,4,2,0,170,172,5,7,0,0,171,170,1,0,0,0,172,175,1,0,0,0,173,171,
1,0,0,0,173,174,1,0,0,0,174,25,1,0,0,0,175,173,1,0,0,0,176,177,5,16,0,0,
177,27,1,0,0,0,24,29,34,40,53,58,64,71,74,81,92,94,104,108,119,125,128,134,
138,144,151,155,161,167,173];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class creoleParser extends antlr4.Parser {

    static grammarFileName = "creole.g4";
    static literalNames = [ null, "'\\\\'", "'**'", "'|'", "'----'", "'*'", 
                            "'|='", "'='", "'#'", "'[['", "']]'", "'{{'", 
                            "'}}'", null, null, null, null, "'/'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             "HASH", "LBRACKET", "RBRACKET", "LBRACE", "RBRACE", 
                             "TEXT", "WS", "CR", "NOWIKI", "RSLASH" ];
    static ruleNames = [ "document", "line", "markup", "text_", "bold", 
                         "italics", "href", "image", "hline", "listitem", 
                         "tableheader", "tablerow", "title", "nowiki" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = creoleParser.ruleNames;
        this.literalNames = creoleParser.literalNames;
        this.symbolicNames = creoleParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	document() {
	    let localctx = new DocumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, creoleParser.RULE_document);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << creoleParser.T__1) | (1 << creoleParser.T__2) | (1 << creoleParser.T__3) | (1 << creoleParser.T__4) | (1 << creoleParser.T__5) | (1 << creoleParser.T__6) | (1 << creoleParser.HASH) | (1 << creoleParser.LBRACKET) | (1 << creoleParser.LBRACE) | (1 << creoleParser.TEXT) | (1 << creoleParser.CR) | (1 << creoleParser.NOWIKI) | (1 << creoleParser.RSLASH))) !== 0)) {
	            this.state = 29;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << creoleParser.T__1) | (1 << creoleParser.T__2) | (1 << creoleParser.T__3) | (1 << creoleParser.T__4) | (1 << creoleParser.T__5) | (1 << creoleParser.T__6) | (1 << creoleParser.HASH) | (1 << creoleParser.LBRACKET) | (1 << creoleParser.LBRACE) | (1 << creoleParser.TEXT) | (1 << creoleParser.NOWIKI) | (1 << creoleParser.RSLASH))) !== 0)) {
	                this.state = 28;
	                this.line();
	            }

	            this.state = 31;
	            this.match(creoleParser.CR);
	            this.state = 36;
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



	line() {
	    let localctx = new LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, creoleParser.RULE_line);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 37;
	            this.markup();
	            this.state = 40; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << creoleParser.T__1) | (1 << creoleParser.T__2) | (1 << creoleParser.T__3) | (1 << creoleParser.T__4) | (1 << creoleParser.T__5) | (1 << creoleParser.T__6) | (1 << creoleParser.HASH) | (1 << creoleParser.LBRACKET) | (1 << creoleParser.LBRACE) | (1 << creoleParser.TEXT) | (1 << creoleParser.NOWIKI) | (1 << creoleParser.RSLASH))) !== 0));
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



	markup() {
	    let localctx = new MarkupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, creoleParser.RULE_markup);
	    try {
	        this.state = 53;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 42;
	            this.bold();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 43;
	            this.italics();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 44;
	            this.href();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 45;
	            this.title();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 46;
	            this.hline();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 47;
	            this.text_();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 48;
	            this.listitem();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 49;
	            this.image();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 50;
	            this.tablerow();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 51;
	            this.tableheader();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 52;
	            this.nowiki();
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



	text_() {
	    let localctx = new Text_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, creoleParser.RULE_text_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 55;
	        		_la = this._input.LA(1);
	        		if(!(_la===creoleParser.TEXT || _la===creoleParser.RSLASH)) {
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
	        	this.state = 58; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,4, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 64;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 60;
	                this.match(creoleParser.T__0);
	                this.state = 61;
	                this.text_(); 
	            }
	            this.state = 66;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
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



	bold() {
	    let localctx = new BoldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, creoleParser.RULE_bold);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(creoleParser.T__1);
	        this.state = 69; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 68;
	        		this.markup();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 71; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,6, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 74;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        if(la_===1) {
	            this.state = 73;
	            this.match(creoleParser.T__1);

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



	italics() {
	    let localctx = new ItalicsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, creoleParser.RULE_italics);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.match(creoleParser.RSLASH);
	        this.state = 77;
	        this.match(creoleParser.RSLASH);
	        this.state = 79; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 78;
	        		this.markup();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 81; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,8, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 83;
	        this.match(creoleParser.RSLASH);
	        this.state = 84;
	        this.match(creoleParser.RSLASH);
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



	href() {
	    let localctx = new HrefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, creoleParser.RULE_href);
	    var _la = 0; // Token type
	    try {
	        this.state = 108;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case creoleParser.LBRACKET:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 86;
	            this.match(creoleParser.LBRACKET);
	            this.state = 87;
	            this.text_();
	            this.state = 94;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===creoleParser.T__2) {
	                this.state = 88;
	                this.match(creoleParser.T__2);
	                this.state = 90; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                do {
	                    this.state = 89;
	                    this.markup();
	                    this.state = 92; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << creoleParser.T__1) | (1 << creoleParser.T__2) | (1 << creoleParser.T__3) | (1 << creoleParser.T__4) | (1 << creoleParser.T__5) | (1 << creoleParser.T__6) | (1 << creoleParser.HASH) | (1 << creoleParser.LBRACKET) | (1 << creoleParser.LBRACE) | (1 << creoleParser.TEXT) | (1 << creoleParser.NOWIKI) | (1 << creoleParser.RSLASH))) !== 0));
	            }

	            this.state = 96;
	            this.match(creoleParser.RBRACKET);
	            break;
	        case creoleParser.LBRACE:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 98;
	            this.match(creoleParser.LBRACE);
	            this.state = 99;
	            this.text_();
	            this.state = 100;
	            this.match(creoleParser.T__2);
	            this.state = 102; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 101;
	                this.markup();
	                this.state = 104; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << creoleParser.T__1) | (1 << creoleParser.T__2) | (1 << creoleParser.T__3) | (1 << creoleParser.T__4) | (1 << creoleParser.T__5) | (1 << creoleParser.T__6) | (1 << creoleParser.HASH) | (1 << creoleParser.LBRACKET) | (1 << creoleParser.LBRACE) | (1 << creoleParser.TEXT) | (1 << creoleParser.NOWIKI) | (1 << creoleParser.RSLASH))) !== 0));
	            this.state = 106;
	            this.match(creoleParser.RBRACE);
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



	image() {
	    let localctx = new ImageContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, creoleParser.RULE_image);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this.match(creoleParser.LBRACE);
	        this.state = 111;
	        this.text_();
	        this.state = 112;
	        this.match(creoleParser.RBRACE);
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



	hline() {
	    let localctx = new HlineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, creoleParser.RULE_hline);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.match(creoleParser.T__3);
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



	listitem() {
	    let localctx = new ListitemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, creoleParser.RULE_listitem);
	    try {
	        this.state = 128;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case creoleParser.T__4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 117; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 116;
	            		this.match(creoleParser.T__4);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 119; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,13, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 121;
	            this.markup();
	            break;
	        case creoleParser.HASH:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 123; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 122;
	            		this.match(creoleParser.HASH);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 125; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,14, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 127;
	            this.markup();
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



	tableheader() {
	    let localctx = new TableheaderContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, creoleParser.RULE_tableheader);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 130;
	            this.match(creoleParser.T__5);
	            this.state = 132; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 131;
	            		this.markup();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 134; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,16, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 138; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===creoleParser.T__5);
	        this.state = 140;
	        this.match(creoleParser.T__2);
	        this.state = 144;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===creoleParser.WS) {
	            this.state = 141;
	            this.match(creoleParser.WS);
	            this.state = 146;
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



	tablerow() {
	    let localctx = new TablerowContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, creoleParser.RULE_tablerow);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 147;
	        		this.match(creoleParser.T__2);
	        		this.state = 149; 
	        		this._errHandler.sync(this);
	        		var _alt = 1;
	        		do {
	        			switch (_alt) {
	        			case 1:
	        				this.state = 148;
	        				this.markup();
	        				break;
	        			default:
	        				throw new antlr4.error.NoViableAltException(this);
	        			}
	        			this.state = 151; 
	        			this._errHandler.sync(this);
	        			_alt = this._interp.adaptivePredict(this._input,19, this._ctx);
	        		} while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 155; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,20, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 157;
	        this.match(creoleParser.T__2);
	        this.state = 161;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===creoleParser.WS) {
	            this.state = 158;
	            this.match(creoleParser.WS);
	            this.state = 163;
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



	title() {
	    let localctx = new TitleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, creoleParser.RULE_title);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 165; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 164;
	        		this.match(creoleParser.T__6);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 167; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,22, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 169;
	        this.markup();
	        this.state = 173;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,23,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 170;
	                this.match(creoleParser.T__6); 
	            }
	            this.state = 175;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,23,this._ctx);
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



	nowiki() {
	    let localctx = new NowikiContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, creoleParser.RULE_nowiki);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 176;
	        this.match(creoleParser.NOWIKI);
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

creoleParser.EOF = antlr4.Token.EOF;
creoleParser.T__0 = 1;
creoleParser.T__1 = 2;
creoleParser.T__2 = 3;
creoleParser.T__3 = 4;
creoleParser.T__4 = 5;
creoleParser.T__5 = 6;
creoleParser.T__6 = 7;
creoleParser.HASH = 8;
creoleParser.LBRACKET = 9;
creoleParser.RBRACKET = 10;
creoleParser.LBRACE = 11;
creoleParser.RBRACE = 12;
creoleParser.TEXT = 13;
creoleParser.WS = 14;
creoleParser.CR = 15;
creoleParser.NOWIKI = 16;
creoleParser.RSLASH = 17;

creoleParser.RULE_document = 0;
creoleParser.RULE_line = 1;
creoleParser.RULE_markup = 2;
creoleParser.RULE_text_ = 3;
creoleParser.RULE_bold = 4;
creoleParser.RULE_italics = 5;
creoleParser.RULE_href = 6;
creoleParser.RULE_image = 7;
creoleParser.RULE_hline = 8;
creoleParser.RULE_listitem = 9;
creoleParser.RULE_tableheader = 10;
creoleParser.RULE_tablerow = 11;
creoleParser.RULE_title = 12;
creoleParser.RULE_nowiki = 13;

class DocumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = creoleParser.RULE_document;
    }

	CR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(creoleParser.CR);
	    } else {
	        return this.getToken(creoleParser.CR, i);
	    }
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
	    if(listener instanceof creoleListener ) {
	        listener.enterDocument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.exitDocument(this);
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
        this.ruleIndex = creoleParser.RULE_line;
    }

	markup = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MarkupContext);
	    } else {
	        return this.getTypedRuleContext(MarkupContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.exitLine(this);
		}
	}


}



class MarkupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = creoleParser.RULE_markup;
    }

	bold() {
	    return this.getTypedRuleContext(BoldContext,0);
	};

	italics() {
	    return this.getTypedRuleContext(ItalicsContext,0);
	};

	href() {
	    return this.getTypedRuleContext(HrefContext,0);
	};

	title() {
	    return this.getTypedRuleContext(TitleContext,0);
	};

	hline() {
	    return this.getTypedRuleContext(HlineContext,0);
	};

	text_() {
	    return this.getTypedRuleContext(Text_Context,0);
	};

	listitem() {
	    return this.getTypedRuleContext(ListitemContext,0);
	};

	image() {
	    return this.getTypedRuleContext(ImageContext,0);
	};

	tablerow() {
	    return this.getTypedRuleContext(TablerowContext,0);
	};

	tableheader() {
	    return this.getTypedRuleContext(TableheaderContext,0);
	};

	nowiki() {
	    return this.getTypedRuleContext(NowikiContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.enterMarkup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.exitMarkup(this);
		}
	}


}



class Text_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = creoleParser.RULE_text_;
    }

	text_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Text_Context);
	    } else {
	        return this.getTypedRuleContext(Text_Context,i);
	    }
	};

	TEXT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(creoleParser.TEXT);
	    } else {
	        return this.getToken(creoleParser.TEXT, i);
	    }
	};


	RSLASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(creoleParser.RSLASH);
	    } else {
	        return this.getToken(creoleParser.RSLASH, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.enterText_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.exitText_(this);
		}
	}


}



class BoldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = creoleParser.RULE_bold;
    }

	markup = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MarkupContext);
	    } else {
	        return this.getTypedRuleContext(MarkupContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.enterBold(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.exitBold(this);
		}
	}


}



class ItalicsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = creoleParser.RULE_italics;
    }

	RSLASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(creoleParser.RSLASH);
	    } else {
	        return this.getToken(creoleParser.RSLASH, i);
	    }
	};


	markup = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MarkupContext);
	    } else {
	        return this.getTypedRuleContext(MarkupContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.enterItalics(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.exitItalics(this);
		}
	}


}



class HrefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = creoleParser.RULE_href;
    }

	LBRACKET() {
	    return this.getToken(creoleParser.LBRACKET, 0);
	};

	text_() {
	    return this.getTypedRuleContext(Text_Context,0);
	};

	RBRACKET() {
	    return this.getToken(creoleParser.RBRACKET, 0);
	};

	markup = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MarkupContext);
	    } else {
	        return this.getTypedRuleContext(MarkupContext,i);
	    }
	};

	LBRACE() {
	    return this.getToken(creoleParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(creoleParser.RBRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.enterHref(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.exitHref(this);
		}
	}


}



class ImageContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = creoleParser.RULE_image;
    }

	LBRACE() {
	    return this.getToken(creoleParser.LBRACE, 0);
	};

	text_() {
	    return this.getTypedRuleContext(Text_Context,0);
	};

	RBRACE() {
	    return this.getToken(creoleParser.RBRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.enterImage(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.exitImage(this);
		}
	}


}



class HlineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = creoleParser.RULE_hline;
    }


	enterRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.enterHline(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.exitHline(this);
		}
	}


}



class ListitemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = creoleParser.RULE_listitem;
    }

	markup() {
	    return this.getTypedRuleContext(MarkupContext,0);
	};

	HASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(creoleParser.HASH);
	    } else {
	        return this.getToken(creoleParser.HASH, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.enterListitem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.exitListitem(this);
		}
	}


}



class TableheaderContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = creoleParser.RULE_tableheader;
    }

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(creoleParser.WS);
	    } else {
	        return this.getToken(creoleParser.WS, i);
	    }
	};


	markup = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MarkupContext);
	    } else {
	        return this.getTypedRuleContext(MarkupContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.enterTableheader(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.exitTableheader(this);
		}
	}


}



class TablerowContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = creoleParser.RULE_tablerow;
    }

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(creoleParser.WS);
	    } else {
	        return this.getToken(creoleParser.WS, i);
	    }
	};


	markup = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MarkupContext);
	    } else {
	        return this.getTypedRuleContext(MarkupContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.enterTablerow(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.exitTablerow(this);
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
        this.ruleIndex = creoleParser.RULE_title;
    }

	markup() {
	    return this.getTypedRuleContext(MarkupContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.enterTitle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.exitTitle(this);
		}
	}


}



class NowikiContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = creoleParser.RULE_nowiki;
    }

	NOWIKI() {
	    return this.getToken(creoleParser.NOWIKI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.enterNowiki(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.exitNowiki(this);
		}
	}


}




creoleParser.DocumentContext = DocumentContext; 
creoleParser.LineContext = LineContext; 
creoleParser.MarkupContext = MarkupContext; 
creoleParser.Text_Context = Text_Context; 
creoleParser.BoldContext = BoldContext; 
creoleParser.ItalicsContext = ItalicsContext; 
creoleParser.HrefContext = HrefContext; 
creoleParser.ImageContext = ImageContext; 
creoleParser.HlineContext = HlineContext; 
creoleParser.ListitemContext = ListitemContext; 
creoleParser.TableheaderContext = TableheaderContext; 
creoleParser.TablerowContext = TablerowContext; 
creoleParser.TitleContext = TitleContext; 
creoleParser.NowikiContext = NowikiContext; 
