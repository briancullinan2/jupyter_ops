// Generated from ./gedcom/gedcom.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import gedcomListener from './gedcomListener.js';
const serializedATN = [4,1,20,114,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,1,0,4,0,34,8,0,11,0,12,0,35,1,1,1,1,3,1,40,
8,1,1,1,1,1,3,1,44,8,1,1,1,1,1,1,2,4,2,49,8,2,11,2,12,2,50,1,3,1,3,1,4,4,
4,56,8,4,11,4,12,4,57,1,5,4,5,61,8,5,11,5,12,5,62,1,6,1,6,1,6,3,6,68,8,6,
1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,3,8,80,8,8,1,9,4,9,83,8,9,11,9,12,
9,84,1,10,1,10,1,10,1,10,1,10,1,11,4,11,93,8,11,11,11,12,11,94,1,12,1,12,
1,12,1,12,3,12,101,8,12,1,13,1,13,1,14,1,14,1,14,1,14,1,14,3,14,110,8,14,
1,15,1,15,1,15,0,0,16,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,0,2,1,0,
17,18,1,0,4,16,117,0,33,1,0,0,0,2,37,1,0,0,0,4,48,1,0,0,0,6,52,1,0,0,0,8,
55,1,0,0,0,10,60,1,0,0,0,12,67,1,0,0,0,14,69,1,0,0,0,16,79,1,0,0,0,18,82,
1,0,0,0,20,86,1,0,0,0,22,92,1,0,0,0,24,100,1,0,0,0,26,102,1,0,0,0,28,109,
1,0,0,0,30,111,1,0,0,0,32,34,3,2,1,0,33,32,1,0,0,0,34,35,1,0,0,0,35,33,1,
0,0,0,35,36,1,0,0,0,36,1,1,0,0,0,37,39,3,4,2,0,38,40,3,6,3,0,39,38,1,0,0,
0,39,40,1,0,0,0,40,41,1,0,0,0,41,43,3,8,4,0,42,44,3,10,5,0,43,42,1,0,0,0,
43,44,1,0,0,0,44,45,1,0,0,0,45,46,5,19,0,0,46,3,1,0,0,0,47,49,5,18,0,0,48,
47,1,0,0,0,49,50,1,0,0,0,50,48,1,0,0,0,50,51,1,0,0,0,51,5,1,0,0,0,52,53,
3,20,10,0,53,7,1,0,0,0,54,56,3,26,13,0,55,54,1,0,0,0,56,57,1,0,0,0,57,55,
1,0,0,0,57,58,1,0,0,0,58,9,1,0,0,0,59,61,3,12,6,0,60,59,1,0,0,0,61,62,1,
0,0,0,62,60,1,0,0,0,62,63,1,0,0,0,63,11,1,0,0,0,64,68,3,20,10,0,65,68,3,
14,7,0,66,68,3,28,14,0,67,64,1,0,0,0,67,65,1,0,0,0,67,66,1,0,0,0,68,13,1,
0,0,0,69,70,5,1,0,0,70,71,5,2,0,0,71,72,3,18,9,0,72,73,5,1,0,0,73,74,3,16,
8,0,74,15,1,0,0,0,75,80,5,17,0,0,76,80,5,18,0,0,77,80,3,30,15,0,78,80,5,
2,0,0,79,75,1,0,0,0,79,76,1,0,0,0,79,77,1,0,0,0,79,78,1,0,0,0,80,17,1,0,
0,0,81,83,3,28,14,0,82,81,1,0,0,0,83,84,1,0,0,0,84,82,1,0,0,0,84,85,1,0,
0,0,85,19,1,0,0,0,86,87,5,1,0,0,87,88,3,26,13,0,88,89,3,22,11,0,89,90,5,
1,0,0,90,21,1,0,0,0,91,93,3,24,12,0,92,91,1,0,0,0,93,94,1,0,0,0,94,92,1,
0,0,0,94,95,1,0,0,0,95,23,1,0,0,0,96,101,5,17,0,0,97,101,5,18,0,0,98,101,
3,30,15,0,99,101,5,2,0,0,100,96,1,0,0,0,100,97,1,0,0,0,100,98,1,0,0,0,100,
99,1,0,0,0,101,25,1,0,0,0,102,103,7,0,0,0,103,27,1,0,0,0,104,110,5,17,0,
0,105,110,5,18,0,0,106,110,3,30,15,0,107,110,5,2,0,0,108,110,5,3,0,0,109,
104,1,0,0,0,109,105,1,0,0,0,109,106,1,0,0,0,109,107,1,0,0,0,109,108,1,0,
0,0,110,29,1,0,0,0,111,112,7,1,0,0,112,31,1,0,0,0,12,35,39,43,50,57,62,67,
79,84,94,100,109];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class gedcomParser extends antlr4.Parser {

    static grammarFileName = "gedcom.g4";
    static literalNames = [ null, "'@'", "'#'", "'@@'", "'!'", "'\"'", "'$'", 
                            "'&'", "'''", "'('", "')'", "'*'", "'+'", "'-'", 
                            "','", "'.'", "'/'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, "ALPHA", "DIGIT", "EOL", "WS" ];
    static ruleNames = [ "gedcom", "line", "level", "opt_xref_id", "tag", 
                         "line_value", "line_item", "escape", "non_at", 
                         "escape_text", "pointer", "pointer_string", "pointer_char", 
                         "alphanum", "anychar", "otherchar" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = gedcomParser.ruleNames;
        this.literalNames = gedcomParser.literalNames;
        this.symbolicNames = gedcomParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	gedcom() {
	    let localctx = new GedcomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, gedcomParser.RULE_gedcom);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 32;
	            this.line();
	            this.state = 35; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===gedcomParser.DIGIT);
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
	    this.enterRule(localctx, 2, gedcomParser.RULE_line);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.level();
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===gedcomParser.T__0) {
	            this.state = 38;
	            this.opt_xref_id();
	        }

	        this.state = 41;
	        this.tag();
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gedcomParser.T__0) | (1 << gedcomParser.T__1) | (1 << gedcomParser.T__2) | (1 << gedcomParser.T__3) | (1 << gedcomParser.T__4) | (1 << gedcomParser.T__5) | (1 << gedcomParser.T__6) | (1 << gedcomParser.T__7) | (1 << gedcomParser.T__8) | (1 << gedcomParser.T__9) | (1 << gedcomParser.T__10) | (1 << gedcomParser.T__11) | (1 << gedcomParser.T__12) | (1 << gedcomParser.T__13) | (1 << gedcomParser.T__14) | (1 << gedcomParser.T__15) | (1 << gedcomParser.ALPHA) | (1 << gedcomParser.DIGIT))) !== 0)) {
	            this.state = 42;
	            this.line_value();
	        }

	        this.state = 45;
	        this.match(gedcomParser.EOL);
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



	level() {
	    let localctx = new LevelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, gedcomParser.RULE_level);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 47;
	        		this.match(gedcomParser.DIGIT);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 50; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,3, this._ctx);
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



	opt_xref_id() {
	    let localctx = new Opt_xref_idContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, gedcomParser.RULE_opt_xref_id);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.pointer();
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
	    this.enterRule(localctx, 8, gedcomParser.RULE_tag);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 54;
	        		this.alphanum();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 57; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,4, this._ctx);
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



	line_value() {
	    let localctx = new Line_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, gedcomParser.RULE_line_value);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 59;
	            this.line_item();
	            this.state = 62; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gedcomParser.T__0) | (1 << gedcomParser.T__1) | (1 << gedcomParser.T__2) | (1 << gedcomParser.T__3) | (1 << gedcomParser.T__4) | (1 << gedcomParser.T__5) | (1 << gedcomParser.T__6) | (1 << gedcomParser.T__7) | (1 << gedcomParser.T__8) | (1 << gedcomParser.T__9) | (1 << gedcomParser.T__10) | (1 << gedcomParser.T__11) | (1 << gedcomParser.T__12) | (1 << gedcomParser.T__13) | (1 << gedcomParser.T__14) | (1 << gedcomParser.T__15) | (1 << gedcomParser.ALPHA) | (1 << gedcomParser.DIGIT))) !== 0));
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



	line_item() {
	    let localctx = new Line_itemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, gedcomParser.RULE_line_item);
	    try {
	        this.state = 67;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 64;
	            this.pointer();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 65;
	            this.escape();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 66;
	            this.anychar();
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



	escape() {
	    let localctx = new EscapeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, gedcomParser.RULE_escape);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.match(gedcomParser.T__0);
	        this.state = 70;
	        this.match(gedcomParser.T__1);
	        this.state = 71;
	        this.escape_text();
	        this.state = 72;
	        this.match(gedcomParser.T__0);
	        this.state = 73;
	        this.non_at();
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



	non_at() {
	    let localctx = new Non_atContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, gedcomParser.RULE_non_at);
	    try {
	        this.state = 79;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case gedcomParser.ALPHA:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 75;
	            this.match(gedcomParser.ALPHA);
	            break;
	        case gedcomParser.DIGIT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 76;
	            this.match(gedcomParser.DIGIT);
	            break;
	        case gedcomParser.T__3:
	        case gedcomParser.T__4:
	        case gedcomParser.T__5:
	        case gedcomParser.T__6:
	        case gedcomParser.T__7:
	        case gedcomParser.T__8:
	        case gedcomParser.T__9:
	        case gedcomParser.T__10:
	        case gedcomParser.T__11:
	        case gedcomParser.T__12:
	        case gedcomParser.T__13:
	        case gedcomParser.T__14:
	        case gedcomParser.T__15:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 77;
	            this.otherchar();
	            break;
	        case gedcomParser.T__1:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 78;
	            this.match(gedcomParser.T__1);
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



	escape_text() {
	    let localctx = new Escape_textContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, gedcomParser.RULE_escape_text);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 81;
	            this.anychar();
	            this.state = 84; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gedcomParser.T__1) | (1 << gedcomParser.T__2) | (1 << gedcomParser.T__3) | (1 << gedcomParser.T__4) | (1 << gedcomParser.T__5) | (1 << gedcomParser.T__6) | (1 << gedcomParser.T__7) | (1 << gedcomParser.T__8) | (1 << gedcomParser.T__9) | (1 << gedcomParser.T__10) | (1 << gedcomParser.T__11) | (1 << gedcomParser.T__12) | (1 << gedcomParser.T__13) | (1 << gedcomParser.T__14) | (1 << gedcomParser.T__15) | (1 << gedcomParser.ALPHA) | (1 << gedcomParser.DIGIT))) !== 0));
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



	pointer() {
	    let localctx = new PointerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, gedcomParser.RULE_pointer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(gedcomParser.T__0);
	        this.state = 87;
	        this.alphanum();
	        this.state = 88;
	        this.pointer_string();
	        this.state = 89;
	        this.match(gedcomParser.T__0);
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



	pointer_string() {
	    let localctx = new Pointer_stringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, gedcomParser.RULE_pointer_string);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 91;
	            this.pointer_char();
	            this.state = 94; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gedcomParser.T__1) | (1 << gedcomParser.T__3) | (1 << gedcomParser.T__4) | (1 << gedcomParser.T__5) | (1 << gedcomParser.T__6) | (1 << gedcomParser.T__7) | (1 << gedcomParser.T__8) | (1 << gedcomParser.T__9) | (1 << gedcomParser.T__10) | (1 << gedcomParser.T__11) | (1 << gedcomParser.T__12) | (1 << gedcomParser.T__13) | (1 << gedcomParser.T__14) | (1 << gedcomParser.T__15) | (1 << gedcomParser.ALPHA) | (1 << gedcomParser.DIGIT))) !== 0));
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



	pointer_char() {
	    let localctx = new Pointer_charContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, gedcomParser.RULE_pointer_char);
	    try {
	        this.state = 100;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case gedcomParser.ALPHA:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 96;
	            this.match(gedcomParser.ALPHA);
	            break;
	        case gedcomParser.DIGIT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 97;
	            this.match(gedcomParser.DIGIT);
	            break;
	        case gedcomParser.T__3:
	        case gedcomParser.T__4:
	        case gedcomParser.T__5:
	        case gedcomParser.T__6:
	        case gedcomParser.T__7:
	        case gedcomParser.T__8:
	        case gedcomParser.T__9:
	        case gedcomParser.T__10:
	        case gedcomParser.T__11:
	        case gedcomParser.T__12:
	        case gedcomParser.T__13:
	        case gedcomParser.T__14:
	        case gedcomParser.T__15:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 98;
	            this.otherchar();
	            break;
	        case gedcomParser.T__1:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 99;
	            this.match(gedcomParser.T__1);
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



	alphanum() {
	    let localctx = new AlphanumContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, gedcomParser.RULE_alphanum);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        _la = this._input.LA(1);
	        if(!(_la===gedcomParser.ALPHA || _la===gedcomParser.DIGIT)) {
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



	anychar() {
	    let localctx = new AnycharContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, gedcomParser.RULE_anychar);
	    try {
	        this.state = 109;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case gedcomParser.ALPHA:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 104;
	            this.match(gedcomParser.ALPHA);
	            break;
	        case gedcomParser.DIGIT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 105;
	            this.match(gedcomParser.DIGIT);
	            break;
	        case gedcomParser.T__3:
	        case gedcomParser.T__4:
	        case gedcomParser.T__5:
	        case gedcomParser.T__6:
	        case gedcomParser.T__7:
	        case gedcomParser.T__8:
	        case gedcomParser.T__9:
	        case gedcomParser.T__10:
	        case gedcomParser.T__11:
	        case gedcomParser.T__12:
	        case gedcomParser.T__13:
	        case gedcomParser.T__14:
	        case gedcomParser.T__15:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 106;
	            this.otherchar();
	            break;
	        case gedcomParser.T__1:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 107;
	            this.match(gedcomParser.T__1);
	            break;
	        case gedcomParser.T__2:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 108;
	            this.match(gedcomParser.T__2);
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



	otherchar() {
	    let localctx = new OthercharContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, gedcomParser.RULE_otherchar);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gedcomParser.T__3) | (1 << gedcomParser.T__4) | (1 << gedcomParser.T__5) | (1 << gedcomParser.T__6) | (1 << gedcomParser.T__7) | (1 << gedcomParser.T__8) | (1 << gedcomParser.T__9) | (1 << gedcomParser.T__10) | (1 << gedcomParser.T__11) | (1 << gedcomParser.T__12) | (1 << gedcomParser.T__13) | (1 << gedcomParser.T__14) | (1 << gedcomParser.T__15))) !== 0))) {
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

gedcomParser.EOF = antlr4.Token.EOF;
gedcomParser.T__0 = 1;
gedcomParser.T__1 = 2;
gedcomParser.T__2 = 3;
gedcomParser.T__3 = 4;
gedcomParser.T__4 = 5;
gedcomParser.T__5 = 6;
gedcomParser.T__6 = 7;
gedcomParser.T__7 = 8;
gedcomParser.T__8 = 9;
gedcomParser.T__9 = 10;
gedcomParser.T__10 = 11;
gedcomParser.T__11 = 12;
gedcomParser.T__12 = 13;
gedcomParser.T__13 = 14;
gedcomParser.T__14 = 15;
gedcomParser.T__15 = 16;
gedcomParser.ALPHA = 17;
gedcomParser.DIGIT = 18;
gedcomParser.EOL = 19;
gedcomParser.WS = 20;

gedcomParser.RULE_gedcom = 0;
gedcomParser.RULE_line = 1;
gedcomParser.RULE_level = 2;
gedcomParser.RULE_opt_xref_id = 3;
gedcomParser.RULE_tag = 4;
gedcomParser.RULE_line_value = 5;
gedcomParser.RULE_line_item = 6;
gedcomParser.RULE_escape = 7;
gedcomParser.RULE_non_at = 8;
gedcomParser.RULE_escape_text = 9;
gedcomParser.RULE_pointer = 10;
gedcomParser.RULE_pointer_string = 11;
gedcomParser.RULE_pointer_char = 12;
gedcomParser.RULE_alphanum = 13;
gedcomParser.RULE_anychar = 14;
gedcomParser.RULE_otherchar = 15;

class GedcomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gedcomParser.RULE_gedcom;
    }

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
	    if(listener instanceof gedcomListener ) {
	        listener.enterGedcom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gedcomListener ) {
	        listener.exitGedcom(this);
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
        this.ruleIndex = gedcomParser.RULE_line;
    }

	level() {
	    return this.getTypedRuleContext(LevelContext,0);
	};

	tag() {
	    return this.getTypedRuleContext(TagContext,0);
	};

	EOL() {
	    return this.getToken(gedcomParser.EOL, 0);
	};

	opt_xref_id() {
	    return this.getTypedRuleContext(Opt_xref_idContext,0);
	};

	line_value() {
	    return this.getTypedRuleContext(Line_valueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gedcomListener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gedcomListener ) {
	        listener.exitLine(this);
		}
	}


}



class LevelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gedcomParser.RULE_level;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(gedcomParser.DIGIT);
	    } else {
	        return this.getToken(gedcomParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof gedcomListener ) {
	        listener.enterLevel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gedcomListener ) {
	        listener.exitLevel(this);
		}
	}


}



class Opt_xref_idContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gedcomParser.RULE_opt_xref_id;
    }

	pointer() {
	    return this.getTypedRuleContext(PointerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gedcomListener ) {
	        listener.enterOpt_xref_id(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gedcomListener ) {
	        listener.exitOpt_xref_id(this);
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
        this.ruleIndex = gedcomParser.RULE_tag;
    }

	alphanum = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AlphanumContext);
	    } else {
	        return this.getTypedRuleContext(AlphanumContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gedcomListener ) {
	        listener.enterTag(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gedcomListener ) {
	        listener.exitTag(this);
		}
	}


}



class Line_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gedcomParser.RULE_line_value;
    }

	line_item = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Line_itemContext);
	    } else {
	        return this.getTypedRuleContext(Line_itemContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gedcomListener ) {
	        listener.enterLine_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gedcomListener ) {
	        listener.exitLine_value(this);
		}
	}


}



class Line_itemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gedcomParser.RULE_line_item;
    }

	pointer() {
	    return this.getTypedRuleContext(PointerContext,0);
	};

	escape() {
	    return this.getTypedRuleContext(EscapeContext,0);
	};

	anychar() {
	    return this.getTypedRuleContext(AnycharContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gedcomListener ) {
	        listener.enterLine_item(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gedcomListener ) {
	        listener.exitLine_item(this);
		}
	}


}



class EscapeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gedcomParser.RULE_escape;
    }

	escape_text() {
	    return this.getTypedRuleContext(Escape_textContext,0);
	};

	non_at() {
	    return this.getTypedRuleContext(Non_atContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gedcomListener ) {
	        listener.enterEscape(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gedcomListener ) {
	        listener.exitEscape(this);
		}
	}


}



class Non_atContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gedcomParser.RULE_non_at;
    }

	ALPHA() {
	    return this.getToken(gedcomParser.ALPHA, 0);
	};

	DIGIT() {
	    return this.getToken(gedcomParser.DIGIT, 0);
	};

	otherchar() {
	    return this.getTypedRuleContext(OthercharContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gedcomListener ) {
	        listener.enterNon_at(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gedcomListener ) {
	        listener.exitNon_at(this);
		}
	}


}



class Escape_textContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gedcomParser.RULE_escape_text;
    }

	anychar = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AnycharContext);
	    } else {
	        return this.getTypedRuleContext(AnycharContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gedcomListener ) {
	        listener.enterEscape_text(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gedcomListener ) {
	        listener.exitEscape_text(this);
		}
	}


}



class PointerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gedcomParser.RULE_pointer;
    }

	alphanum() {
	    return this.getTypedRuleContext(AlphanumContext,0);
	};

	pointer_string() {
	    return this.getTypedRuleContext(Pointer_stringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gedcomListener ) {
	        listener.enterPointer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gedcomListener ) {
	        listener.exitPointer(this);
		}
	}


}



class Pointer_stringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gedcomParser.RULE_pointer_string;
    }

	pointer_char = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Pointer_charContext);
	    } else {
	        return this.getTypedRuleContext(Pointer_charContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gedcomListener ) {
	        listener.enterPointer_string(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gedcomListener ) {
	        listener.exitPointer_string(this);
		}
	}


}



class Pointer_charContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gedcomParser.RULE_pointer_char;
    }

	ALPHA() {
	    return this.getToken(gedcomParser.ALPHA, 0);
	};

	DIGIT() {
	    return this.getToken(gedcomParser.DIGIT, 0);
	};

	otherchar() {
	    return this.getTypedRuleContext(OthercharContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gedcomListener ) {
	        listener.enterPointer_char(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gedcomListener ) {
	        listener.exitPointer_char(this);
		}
	}


}



class AlphanumContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gedcomParser.RULE_alphanum;
    }

	ALPHA() {
	    return this.getToken(gedcomParser.ALPHA, 0);
	};

	DIGIT() {
	    return this.getToken(gedcomParser.DIGIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gedcomListener ) {
	        listener.enterAlphanum(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gedcomListener ) {
	        listener.exitAlphanum(this);
		}
	}


}



class AnycharContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gedcomParser.RULE_anychar;
    }

	ALPHA() {
	    return this.getToken(gedcomParser.ALPHA, 0);
	};

	DIGIT() {
	    return this.getToken(gedcomParser.DIGIT, 0);
	};

	otherchar() {
	    return this.getTypedRuleContext(OthercharContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gedcomListener ) {
	        listener.enterAnychar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gedcomListener ) {
	        listener.exitAnychar(this);
		}
	}


}



class OthercharContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gedcomParser.RULE_otherchar;
    }


	enterRule(listener) {
	    if(listener instanceof gedcomListener ) {
	        listener.enterOtherchar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gedcomListener ) {
	        listener.exitOtherchar(this);
		}
	}


}




gedcomParser.GedcomContext = GedcomContext; 
gedcomParser.LineContext = LineContext; 
gedcomParser.LevelContext = LevelContext; 
gedcomParser.Opt_xref_idContext = Opt_xref_idContext; 
gedcomParser.TagContext = TagContext; 
gedcomParser.Line_valueContext = Line_valueContext; 
gedcomParser.Line_itemContext = Line_itemContext; 
gedcomParser.EscapeContext = EscapeContext; 
gedcomParser.Non_atContext = Non_atContext; 
gedcomParser.Escape_textContext = Escape_textContext; 
gedcomParser.PointerContext = PointerContext; 
gedcomParser.Pointer_stringContext = Pointer_stringContext; 
gedcomParser.Pointer_charContext = Pointer_charContext; 
gedcomParser.AlphanumContext = AlphanumContext; 
gedcomParser.AnycharContext = AnycharContext; 
gedcomParser.OthercharContext = OthercharContext; 
