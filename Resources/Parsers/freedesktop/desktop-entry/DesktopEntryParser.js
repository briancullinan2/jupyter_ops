// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/freedesktop/desktop-entry/DesktopEntryParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import DesktopEntryParserListener from './DesktopEntryParserListener.js';
const serializedATN = [4,1,24,112,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,1,0,5,0,34,8,0,10,0,12,0,37,9,0,1,0,1,0,1,
1,1,1,5,1,43,8,1,10,1,12,1,46,9,1,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,3,4,56,
8,4,1,4,1,4,3,4,60,8,4,1,4,1,4,5,4,64,8,4,10,4,12,4,67,9,4,1,4,3,4,70,8,
4,1,5,1,5,1,6,1,6,1,6,1,6,3,6,78,8,6,1,6,1,6,3,6,82,8,6,1,6,1,6,3,6,86,8,
6,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,11,1,11,3,11,102,
8,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,15,0,0,16,0,2,4,6,8,10,12,
14,16,18,20,22,24,26,28,30,0,0,107,0,35,1,0,0,0,2,40,1,0,0,0,4,47,1,0,0,
0,6,51,1,0,0,0,8,53,1,0,0,0,10,71,1,0,0,0,12,73,1,0,0,0,14,89,1,0,0,0,16,
91,1,0,0,0,18,93,1,0,0,0,20,95,1,0,0,0,22,101,1,0,0,0,24,103,1,0,0,0,26,
105,1,0,0,0,28,107,1,0,0,0,30,109,1,0,0,0,32,34,3,2,1,0,33,32,1,0,0,0,34,
37,1,0,0,0,35,33,1,0,0,0,35,36,1,0,0,0,36,38,1,0,0,0,37,35,1,0,0,0,38,39,
5,0,0,1,39,1,1,0,0,0,40,44,3,4,2,0,41,43,3,8,4,0,42,41,1,0,0,0,43,46,1,0,
0,0,44,42,1,0,0,0,44,45,1,0,0,0,45,3,1,0,0,0,46,44,1,0,0,0,47,48,5,2,0,0,
48,49,3,6,3,0,49,50,5,7,0,0,50,5,1,0,0,0,51,52,5,6,0,0,52,7,1,0,0,0,53,55,
3,10,5,0,54,56,3,12,6,0,55,54,1,0,0,0,55,56,1,0,0,0,56,57,1,0,0,0,57,59,
5,9,0,0,58,60,3,22,11,0,59,58,1,0,0,0,59,60,1,0,0,0,60,65,1,0,0,0,61,62,
5,13,0,0,62,64,3,22,11,0,63,61,1,0,0,0,64,67,1,0,0,0,65,63,1,0,0,0,65,66,
1,0,0,0,66,69,1,0,0,0,67,65,1,0,0,0,68,70,5,13,0,0,69,68,1,0,0,0,69,70,1,
0,0,0,70,9,1,0,0,0,71,72,5,8,0,0,72,11,1,0,0,0,73,74,5,2,0,0,74,77,3,14,
7,0,75,76,5,18,0,0,76,78,3,16,8,0,77,75,1,0,0,0,77,78,1,0,0,0,78,81,1,0,
0,0,79,80,5,16,0,0,80,82,3,18,9,0,81,79,1,0,0,0,81,82,1,0,0,0,82,85,1,0,
0,0,83,84,5,15,0,0,84,86,3,20,10,0,85,83,1,0,0,0,85,86,1,0,0,0,86,87,1,0,
0,0,87,88,5,7,0,0,88,13,1,0,0,0,89,90,5,17,0,0,90,15,1,0,0,0,91,92,5,20,
0,0,92,17,1,0,0,0,93,94,5,23,0,0,94,19,1,0,0,0,95,96,5,24,0,0,96,21,1,0,
0,0,97,102,3,24,12,0,98,102,3,26,13,0,99,102,3,28,14,0,100,102,3,30,15,0,
101,97,1,0,0,0,101,98,1,0,0,0,101,99,1,0,0,0,101,100,1,0,0,0,102,23,1,0,
0,0,103,104,5,14,0,0,104,25,1,0,0,0,105,106,5,12,0,0,106,27,1,0,0,0,107,
108,5,10,0,0,108,29,1,0,0,0,109,110,5,11,0,0,110,31,1,0,0,0,10,35,44,55,
59,65,69,77,81,85,101];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class DesktopEntryParser extends antlr4.Parser {

    static grammarFileName = "DesktopEntryParser.g4";
    static literalNames = [ null, null, "'['", null, null, null, null, "']'", 
                            null, "'='", "'true'", "'false'", null, "';'", 
                            null, null, null, null, "'_'" ];
    static symbolicNames = [ null, "HASH", "LEFT_BRACKET", "NEWLINE", "SPACE", 
                             "COMMENT_TEXT", "GROUP_NAME", "RIGHT_BRACKET", 
                             "KEY_NAME", "EQUAL", "TRUE", "FALSE", "NUMBER", 
                             "SEMICOLON", "STRING", "AT", "DOT", "LANGUAGE", 
                             "UNDERSCORE", "AT_0", "COUNTRY", "DOT_0", "AT_1", 
                             "ENCODING", "MODIFIER" ];
    static ruleNames = [ "desktop_entry", "group", "group_header", "group_name", 
                         "entry", "key", "locale", "language_", "country", 
                         "encoding", "modifier", "value", "string_", "number", 
                         "true_", "false_" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = DesktopEntryParser.ruleNames;
        this.literalNames = DesktopEntryParser.literalNames;
        this.symbolicNames = DesktopEntryParser.symbolicNames;
    }



	desktop_entry() {
	    let localctx = new Desktop_entryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, DesktopEntryParser.RULE_desktop_entry);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 32;
	            this.group();
	            this.state = 37;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 38;
	        this.match(DesktopEntryParser.EOF);
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



	group() {
	    let localctx = new GroupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, DesktopEntryParser.RULE_group);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.group_header();
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 41;
	            this.entry();
	            this.state = 46;
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



	group_header() {
	    let localctx = new Group_headerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, DesktopEntryParser.RULE_group_header);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.match(DesktopEntryParser.LEFT_BRACKET);
	        this.state = 48;
	        this.group_name();
	        this.state = 49;
	        this.match(DesktopEntryParser.RIGHT_BRACKET);
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



	group_name() {
	    let localctx = new Group_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, DesktopEntryParser.RULE_group_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(DesktopEntryParser.GROUP_NAME);
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



	entry() {
	    let localctx = new EntryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, DesktopEntryParser.RULE_entry);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.key();
	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 54;
	            this.locale();
	        }

	        this.state = 57;
	        this.match(DesktopEntryParser.EQUAL);
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 23552) !== 0)) {
	            this.state = 58;
	            this.value();
	        }

	        this.state = 65;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 61;
	                this.match(DesktopEntryParser.SEMICOLON);
	                this.state = 62;
	                this.value(); 
	            }
	            this.state = 67;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	        }

	        this.state = 69;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 68;
	            this.match(DesktopEntryParser.SEMICOLON);
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
	    this.enterRule(localctx, 10, DesktopEntryParser.RULE_key);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(DesktopEntryParser.KEY_NAME);
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



	locale() {
	    let localctx = new LocaleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, DesktopEntryParser.RULE_locale);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(DesktopEntryParser.LEFT_BRACKET);
	        this.state = 74;
	        this.language_();
	        this.state = 77;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 75;
	            this.match(DesktopEntryParser.UNDERSCORE);
	            this.state = 76;
	            this.country();
	        }

	        this.state = 81;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 79;
	            this.match(DesktopEntryParser.DOT);
	            this.state = 80;
	            this.encoding();
	        }

	        this.state = 85;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 83;
	            this.match(DesktopEntryParser.AT);
	            this.state = 84;
	            this.modifier();
	        }

	        this.state = 87;
	        this.match(DesktopEntryParser.RIGHT_BRACKET);
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



	language_() {
	    let localctx = new Language_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, DesktopEntryParser.RULE_language_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.match(DesktopEntryParser.LANGUAGE);
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



	country() {
	    let localctx = new CountryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, DesktopEntryParser.RULE_country);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.match(DesktopEntryParser.COUNTRY);
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



	encoding() {
	    let localctx = new EncodingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, DesktopEntryParser.RULE_encoding);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this.match(DesktopEntryParser.ENCODING);
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
	    this.enterRule(localctx, 20, DesktopEntryParser.RULE_modifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this.match(DesktopEntryParser.MODIFIER);
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
	    this.enterRule(localctx, 22, DesktopEntryParser.RULE_value);
	    try {
	        this.state = 101;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 97;
	            this.string_();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 98;
	            this.number();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 99;
	            this.true_();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 100;
	            this.false_();
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



	string_() {
	    let localctx = new String_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, DesktopEntryParser.RULE_string_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        this.match(DesktopEntryParser.STRING);
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
	    this.enterRule(localctx, 26, DesktopEntryParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this.match(DesktopEntryParser.NUMBER);
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



	true_() {
	    let localctx = new True_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, DesktopEntryParser.RULE_true_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this.match(DesktopEntryParser.TRUE);
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



	false_() {
	    let localctx = new False_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, DesktopEntryParser.RULE_false_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        this.match(DesktopEntryParser.FALSE);
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

DesktopEntryParser.EOF = antlr4.Token.EOF;
DesktopEntryParser.HASH = 1;
DesktopEntryParser.LEFT_BRACKET = 2;
DesktopEntryParser.NEWLINE = 3;
DesktopEntryParser.SPACE = 4;
DesktopEntryParser.COMMENT_TEXT = 5;
DesktopEntryParser.GROUP_NAME = 6;
DesktopEntryParser.RIGHT_BRACKET = 7;
DesktopEntryParser.KEY_NAME = 8;
DesktopEntryParser.EQUAL = 9;
DesktopEntryParser.TRUE = 10;
DesktopEntryParser.FALSE = 11;
DesktopEntryParser.NUMBER = 12;
DesktopEntryParser.SEMICOLON = 13;
DesktopEntryParser.STRING = 14;
DesktopEntryParser.AT = 15;
DesktopEntryParser.DOT = 16;
DesktopEntryParser.LANGUAGE = 17;
DesktopEntryParser.UNDERSCORE = 18;
DesktopEntryParser.AT_0 = 19;
DesktopEntryParser.COUNTRY = 20;
DesktopEntryParser.DOT_0 = 21;
DesktopEntryParser.AT_1 = 22;
DesktopEntryParser.ENCODING = 23;
DesktopEntryParser.MODIFIER = 24;

DesktopEntryParser.RULE_desktop_entry = 0;
DesktopEntryParser.RULE_group = 1;
DesktopEntryParser.RULE_group_header = 2;
DesktopEntryParser.RULE_group_name = 3;
DesktopEntryParser.RULE_entry = 4;
DesktopEntryParser.RULE_key = 5;
DesktopEntryParser.RULE_locale = 6;
DesktopEntryParser.RULE_language_ = 7;
DesktopEntryParser.RULE_country = 8;
DesktopEntryParser.RULE_encoding = 9;
DesktopEntryParser.RULE_modifier = 10;
DesktopEntryParser.RULE_value = 11;
DesktopEntryParser.RULE_string_ = 12;
DesktopEntryParser.RULE_number = 13;
DesktopEntryParser.RULE_true_ = 14;
DesktopEntryParser.RULE_false_ = 15;

class Desktop_entryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesktopEntryParser.RULE_desktop_entry;
    }

	EOF() {
	    return this.getToken(DesktopEntryParser.EOF, 0);
	};

	group = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(GroupContext);
	    } else {
	        return this.getTypedRuleContext(GroupContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DesktopEntryParserListener ) {
	        listener.enterDesktop_entry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DesktopEntryParserListener ) {
	        listener.exitDesktop_entry(this);
		}
	}


}



class GroupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesktopEntryParser.RULE_group;
    }

	group_header() {
	    return this.getTypedRuleContext(Group_headerContext,0);
	};

	entry = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EntryContext);
	    } else {
	        return this.getTypedRuleContext(EntryContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DesktopEntryParserListener ) {
	        listener.enterGroup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DesktopEntryParserListener ) {
	        listener.exitGroup(this);
		}
	}


}



class Group_headerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesktopEntryParser.RULE_group_header;
    }

	LEFT_BRACKET() {
	    return this.getToken(DesktopEntryParser.LEFT_BRACKET, 0);
	};

	group_name() {
	    return this.getTypedRuleContext(Group_nameContext,0);
	};

	RIGHT_BRACKET() {
	    return this.getToken(DesktopEntryParser.RIGHT_BRACKET, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DesktopEntryParserListener ) {
	        listener.enterGroup_header(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DesktopEntryParserListener ) {
	        listener.exitGroup_header(this);
		}
	}


}



class Group_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesktopEntryParser.RULE_group_name;
    }

	GROUP_NAME() {
	    return this.getToken(DesktopEntryParser.GROUP_NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DesktopEntryParserListener ) {
	        listener.enterGroup_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DesktopEntryParserListener ) {
	        listener.exitGroup_name(this);
		}
	}


}



class EntryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesktopEntryParser.RULE_entry;
    }

	key() {
	    return this.getTypedRuleContext(KeyContext,0);
	};

	EQUAL() {
	    return this.getToken(DesktopEntryParser.EQUAL, 0);
	};

	locale() {
	    return this.getTypedRuleContext(LocaleContext,0);
	};

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

	SEMICOLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DesktopEntryParser.SEMICOLON);
	    } else {
	        return this.getToken(DesktopEntryParser.SEMICOLON, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DesktopEntryParserListener ) {
	        listener.enterEntry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DesktopEntryParserListener ) {
	        listener.exitEntry(this);
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
        this.ruleIndex = DesktopEntryParser.RULE_key;
    }

	KEY_NAME() {
	    return this.getToken(DesktopEntryParser.KEY_NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DesktopEntryParserListener ) {
	        listener.enterKey(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DesktopEntryParserListener ) {
	        listener.exitKey(this);
		}
	}


}



class LocaleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesktopEntryParser.RULE_locale;
    }

	LEFT_BRACKET() {
	    return this.getToken(DesktopEntryParser.LEFT_BRACKET, 0);
	};

	language_() {
	    return this.getTypedRuleContext(Language_Context,0);
	};

	RIGHT_BRACKET() {
	    return this.getToken(DesktopEntryParser.RIGHT_BRACKET, 0);
	};

	UNDERSCORE() {
	    return this.getToken(DesktopEntryParser.UNDERSCORE, 0);
	};

	country() {
	    return this.getTypedRuleContext(CountryContext,0);
	};

	DOT() {
	    return this.getToken(DesktopEntryParser.DOT, 0);
	};

	encoding() {
	    return this.getTypedRuleContext(EncodingContext,0);
	};

	AT() {
	    return this.getToken(DesktopEntryParser.AT, 0);
	};

	modifier() {
	    return this.getTypedRuleContext(ModifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DesktopEntryParserListener ) {
	        listener.enterLocale(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DesktopEntryParserListener ) {
	        listener.exitLocale(this);
		}
	}


}



class Language_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesktopEntryParser.RULE_language_;
    }

	LANGUAGE() {
	    return this.getToken(DesktopEntryParser.LANGUAGE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DesktopEntryParserListener ) {
	        listener.enterLanguage_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DesktopEntryParserListener ) {
	        listener.exitLanguage_(this);
		}
	}


}



class CountryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesktopEntryParser.RULE_country;
    }

	COUNTRY() {
	    return this.getToken(DesktopEntryParser.COUNTRY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DesktopEntryParserListener ) {
	        listener.enterCountry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DesktopEntryParserListener ) {
	        listener.exitCountry(this);
		}
	}


}



class EncodingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesktopEntryParser.RULE_encoding;
    }

	ENCODING() {
	    return this.getToken(DesktopEntryParser.ENCODING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DesktopEntryParserListener ) {
	        listener.enterEncoding(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DesktopEntryParserListener ) {
	        listener.exitEncoding(this);
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
        this.ruleIndex = DesktopEntryParser.RULE_modifier;
    }

	MODIFIER() {
	    return this.getToken(DesktopEntryParser.MODIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DesktopEntryParserListener ) {
	        listener.enterModifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DesktopEntryParserListener ) {
	        listener.exitModifier(this);
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
        this.ruleIndex = DesktopEntryParser.RULE_value;
    }

	string_() {
	    return this.getTypedRuleContext(String_Context,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	true_() {
	    return this.getTypedRuleContext(True_Context,0);
	};

	false_() {
	    return this.getTypedRuleContext(False_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof DesktopEntryParserListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DesktopEntryParserListener ) {
	        listener.exitValue(this);
		}
	}


}



class String_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesktopEntryParser.RULE_string_;
    }

	STRING() {
	    return this.getToken(DesktopEntryParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DesktopEntryParserListener ) {
	        listener.enterString_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DesktopEntryParserListener ) {
	        listener.exitString_(this);
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
        this.ruleIndex = DesktopEntryParser.RULE_number;
    }

	NUMBER() {
	    return this.getToken(DesktopEntryParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DesktopEntryParserListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DesktopEntryParserListener ) {
	        listener.exitNumber(this);
		}
	}


}



class True_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesktopEntryParser.RULE_true_;
    }

	TRUE() {
	    return this.getToken(DesktopEntryParser.TRUE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DesktopEntryParserListener ) {
	        listener.enterTrue_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DesktopEntryParserListener ) {
	        listener.exitTrue_(this);
		}
	}


}



class False_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DesktopEntryParser.RULE_false_;
    }

	FALSE() {
	    return this.getToken(DesktopEntryParser.FALSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DesktopEntryParserListener ) {
	        listener.enterFalse_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DesktopEntryParserListener ) {
	        listener.exitFalse_(this);
		}
	}


}




DesktopEntryParser.Desktop_entryContext = Desktop_entryContext; 
DesktopEntryParser.GroupContext = GroupContext; 
DesktopEntryParser.Group_headerContext = Group_headerContext; 
DesktopEntryParser.Group_nameContext = Group_nameContext; 
DesktopEntryParser.EntryContext = EntryContext; 
DesktopEntryParser.KeyContext = KeyContext; 
DesktopEntryParser.LocaleContext = LocaleContext; 
DesktopEntryParser.Language_Context = Language_Context; 
DesktopEntryParser.CountryContext = CountryContext; 
DesktopEntryParser.EncodingContext = EncodingContext; 
DesktopEntryParser.ModifierContext = ModifierContext; 
DesktopEntryParser.ValueContext = ValueContext; 
DesktopEntryParser.String_Context = String_Context; 
DesktopEntryParser.NumberContext = NumberContext; 
DesktopEntryParser.True_Context = True_Context; 
DesktopEntryParser.False_Context = False_Context; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
