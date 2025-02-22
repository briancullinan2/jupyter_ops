// Generated from ./html/HTMLParser.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import HTMLParserListener from './HTMLParserListener.js';
const serializedATN = [4,1,23,128,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,5,0,24,8,0,10,0,
12,0,27,9,0,1,0,3,0,30,8,0,1,0,5,0,33,8,0,10,0,12,0,36,9,0,1,0,3,0,39,8,
0,1,0,5,0,42,8,0,10,0,12,0,45,9,0,1,0,5,0,48,8,0,10,0,12,0,51,9,0,1,1,1,
1,1,2,5,2,56,8,2,10,2,12,2,59,9,2,1,2,1,2,5,2,63,8,2,10,2,12,2,66,9,2,1,
3,1,3,1,3,5,3,71,8,3,10,3,12,3,74,9,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,83,
8,3,1,3,3,3,86,8,3,1,3,1,3,1,3,3,3,91,8,3,1,4,3,4,94,8,4,1,4,1,4,1,4,3,4,
99,8,4,1,4,3,4,102,8,4,5,4,104,8,4,10,4,12,4,107,9,4,1,5,1,5,1,5,3,5,112,
8,5,1,6,1,6,1,7,1,7,3,7,118,8,7,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,1,10,
0,0,11,0,2,4,6,8,10,12,14,16,18,20,0,5,1,0,6,7,2,0,7,7,11,11,1,0,1,2,1,0,
18,19,1,0,20,21,137,0,25,1,0,0,0,2,52,1,0,0,0,4,57,1,0,0,0,6,90,1,0,0,0,
8,93,1,0,0,0,10,108,1,0,0,0,12,113,1,0,0,0,14,117,1,0,0,0,16,119,1,0,0,0,
18,121,1,0,0,0,20,124,1,0,0,0,22,24,3,2,1,0,23,22,1,0,0,0,24,27,1,0,0,0,
25,23,1,0,0,0,25,26,1,0,0,0,26,29,1,0,0,0,27,25,1,0,0,0,28,30,5,3,0,0,29,
28,1,0,0,0,29,30,1,0,0,0,30,34,1,0,0,0,31,33,3,2,1,0,32,31,1,0,0,0,33,36,
1,0,0,0,34,32,1,0,0,0,34,35,1,0,0,0,35,38,1,0,0,0,36,34,1,0,0,0,37,39,5,
5,0,0,38,37,1,0,0,0,38,39,1,0,0,0,39,43,1,0,0,0,40,42,3,2,1,0,41,40,1,0,
0,0,42,45,1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,0,44,49,1,0,0,0,45,43,1,0,0,
0,46,48,3,4,2,0,47,46,1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,
50,1,1,0,0,0,51,49,1,0,0,0,52,53,7,0,0,0,53,3,1,0,0,0,54,56,3,14,7,0,55,
54,1,0,0,0,56,59,1,0,0,0,57,55,1,0,0,0,57,58,1,0,0,0,58,60,1,0,0,0,59,57,
1,0,0,0,60,64,3,6,3,0,61,63,3,14,7,0,62,61,1,0,0,0,63,66,1,0,0,0,64,62,1,
0,0,0,64,65,1,0,0,0,65,5,1,0,0,0,66,64,1,0,0,0,67,68,5,10,0,0,68,72,5,16,
0,0,69,71,3,10,5,0,70,69,1,0,0,0,71,74,1,0,0,0,72,70,1,0,0,0,72,73,1,0,0,
0,73,85,1,0,0,0,74,72,1,0,0,0,75,82,5,12,0,0,76,77,3,8,4,0,77,78,5,10,0,
0,78,79,5,14,0,0,79,80,5,16,0,0,80,81,5,12,0,0,81,83,1,0,0,0,82,76,1,0,0,
0,82,83,1,0,0,0,83,86,1,0,0,0,84,86,5,13,0,0,85,75,1,0,0,0,85,84,1,0,0,0,
86,91,1,0,0,0,87,91,5,6,0,0,88,91,3,18,9,0,89,91,3,20,10,0,90,67,1,0,0,0,
90,87,1,0,0,0,90,88,1,0,0,0,90,89,1,0,0,0,91,7,1,0,0,0,92,94,3,12,6,0,93,
92,1,0,0,0,93,94,1,0,0,0,94,105,1,0,0,0,95,99,3,6,3,0,96,99,5,4,0,0,97,99,
3,16,8,0,98,95,1,0,0,0,98,96,1,0,0,0,98,97,1,0,0,0,99,101,1,0,0,0,100,102,
3,12,6,0,101,100,1,0,0,0,101,102,1,0,0,0,102,104,1,0,0,0,103,98,1,0,0,0,
104,107,1,0,0,0,105,103,1,0,0,0,105,106,1,0,0,0,106,9,1,0,0,0,107,105,1,
0,0,0,108,111,5,16,0,0,109,110,5,15,0,0,110,112,5,22,0,0,111,109,1,0,0,0,
111,112,1,0,0,0,112,11,1,0,0,0,113,114,7,1,0,0,114,13,1,0,0,0,115,118,3,
16,8,0,116,118,5,7,0,0,117,115,1,0,0,0,117,116,1,0,0,0,118,15,1,0,0,0,119,
120,7,2,0,0,120,17,1,0,0,0,121,122,5,8,0,0,122,123,7,3,0,0,123,19,1,0,0,
0,124,125,5,9,0,0,125,126,7,4,0,0,126,21,1,0,0,0,18,25,29,34,38,43,49,57,
64,72,82,85,90,93,98,101,105,111,117];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class HTMLParser extends antlr4.Parser {

    static grammarFileName = "HTMLParser.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, null, "'<'", null, "'>'", "'/>'", "'/'", 
                            "'='" ];
    static symbolicNames = [ null, "HTML_COMMENT", "HTML_CONDITIONAL_COMMENT", 
                             "XML", "CDATA", "DTD", "SCRIPTLET", "SEA_WS", 
                             "SCRIPT_OPEN", "STYLE_OPEN", "TAG_OPEN", "HTML_TEXT", 
                             "TAG_CLOSE", "TAG_SLASH_CLOSE", "TAG_SLASH", 
                             "TAG_EQUALS", "TAG_NAME", "TAG_WHITESPACE", 
                             "SCRIPT_BODY", "SCRIPT_SHORT_BODY", "STYLE_BODY", 
                             "STYLE_SHORT_BODY", "ATTVALUE_VALUE", "ATTRIBUTE" ];
    static ruleNames = [ "htmlDocument", "scriptletOrSeaWs", "htmlElements", 
                         "htmlElement", "htmlContent", "htmlAttribute", 
                         "htmlChardata", "htmlMisc", "htmlComment", "script", 
                         "style" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = HTMLParser.ruleNames;
        this.literalNames = HTMLParser.literalNames;
        this.symbolicNames = HTMLParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	htmlDocument() {
	    let localctx = new HtmlDocumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, HTMLParser.RULE_htmlDocument);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 22;
	                this.scriptletOrSeaWs(); 
	            }
	            this.state = 27;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===HTMLParser.XML) {
	            this.state = 28;
	            this.match(HTMLParser.XML);
	        }

	        this.state = 34;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 31;
	                this.scriptletOrSeaWs(); 
	            }
	            this.state = 36;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	        }

	        this.state = 38;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===HTMLParser.DTD) {
	            this.state = 37;
	            this.match(HTMLParser.DTD);
	        }

	        this.state = 43;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 40;
	                this.scriptletOrSeaWs(); 
	            }
	            this.state = 45;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	        }

	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << HTMLParser.HTML_COMMENT) | (1 << HTMLParser.HTML_CONDITIONAL_COMMENT) | (1 << HTMLParser.SCRIPTLET) | (1 << HTMLParser.SEA_WS) | (1 << HTMLParser.SCRIPT_OPEN) | (1 << HTMLParser.STYLE_OPEN) | (1 << HTMLParser.TAG_OPEN))) !== 0)) {
	            this.state = 46;
	            this.htmlElements();
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



	scriptletOrSeaWs() {
	    let localctx = new ScriptletOrSeaWsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, HTMLParser.RULE_scriptletOrSeaWs);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        _la = this._input.LA(1);
	        if(!(_la===HTMLParser.SCRIPTLET || _la===HTMLParser.SEA_WS)) {
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



	htmlElements() {
	    let localctx = new HtmlElementsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, HTMLParser.RULE_htmlElements);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << HTMLParser.HTML_COMMENT) | (1 << HTMLParser.HTML_CONDITIONAL_COMMENT) | (1 << HTMLParser.SEA_WS))) !== 0)) {
	            this.state = 54;
	            this.htmlMisc();
	            this.state = 59;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 60;
	        this.htmlElement();
	        this.state = 64;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 61;
	                this.htmlMisc(); 
	            }
	            this.state = 66;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
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



	htmlElement() {
	    let localctx = new HtmlElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, HTMLParser.RULE_htmlElement);
	    var _la = 0; // Token type
	    try {
	        this.state = 90;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case HTMLParser.TAG_OPEN:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 67;
	            this.match(HTMLParser.TAG_OPEN);
	            this.state = 68;
	            this.match(HTMLParser.TAG_NAME);
	            this.state = 72;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===HTMLParser.TAG_NAME) {
	                this.state = 69;
	                this.htmlAttribute();
	                this.state = 74;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 85;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case HTMLParser.TAG_CLOSE:
	                this.state = 75;
	                this.match(HTMLParser.TAG_CLOSE);
	                this.state = 82;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	                if(la_===1) {
	                    this.state = 76;
	                    this.htmlContent();
	                    this.state = 77;
	                    this.match(HTMLParser.TAG_OPEN);
	                    this.state = 78;
	                    this.match(HTMLParser.TAG_SLASH);
	                    this.state = 79;
	                    this.match(HTMLParser.TAG_NAME);
	                    this.state = 80;
	                    this.match(HTMLParser.TAG_CLOSE);

	                }
	                break;
	            case HTMLParser.TAG_SLASH_CLOSE:
	                this.state = 84;
	                this.match(HTMLParser.TAG_SLASH_CLOSE);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;
	        case HTMLParser.SCRIPTLET:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 87;
	            this.match(HTMLParser.SCRIPTLET);
	            break;
	        case HTMLParser.SCRIPT_OPEN:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 88;
	            this.script();
	            break;
	        case HTMLParser.STYLE_OPEN:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 89;
	            this.style();
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



	htmlContent() {
	    let localctx = new HtmlContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, HTMLParser.RULE_htmlContent);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===HTMLParser.SEA_WS || _la===HTMLParser.HTML_TEXT) {
	            this.state = 92;
	            this.htmlChardata();
	        }

	        this.state = 105;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 98;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case HTMLParser.SCRIPTLET:
	                case HTMLParser.SCRIPT_OPEN:
	                case HTMLParser.STYLE_OPEN:
	                case HTMLParser.TAG_OPEN:
	                    this.state = 95;
	                    this.htmlElement();
	                    break;
	                case HTMLParser.CDATA:
	                    this.state = 96;
	                    this.match(HTMLParser.CDATA);
	                    break;
	                case HTMLParser.HTML_COMMENT:
	                case HTMLParser.HTML_CONDITIONAL_COMMENT:
	                    this.state = 97;
	                    this.htmlComment();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 101;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===HTMLParser.SEA_WS || _la===HTMLParser.HTML_TEXT) {
	                    this.state = 100;
	                    this.htmlChardata();
	                }
	         
	            }
	            this.state = 107;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
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



	htmlAttribute() {
	    let localctx = new HtmlAttributeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, HTMLParser.RULE_htmlAttribute);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this.match(HTMLParser.TAG_NAME);
	        this.state = 111;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===HTMLParser.TAG_EQUALS) {
	            this.state = 109;
	            this.match(HTMLParser.TAG_EQUALS);
	            this.state = 110;
	            this.match(HTMLParser.ATTVALUE_VALUE);
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



	htmlChardata() {
	    let localctx = new HtmlChardataContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, HTMLParser.RULE_htmlChardata);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        _la = this._input.LA(1);
	        if(!(_la===HTMLParser.SEA_WS || _la===HTMLParser.HTML_TEXT)) {
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



	htmlMisc() {
	    let localctx = new HtmlMiscContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, HTMLParser.RULE_htmlMisc);
	    try {
	        this.state = 117;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case HTMLParser.HTML_COMMENT:
	        case HTMLParser.HTML_CONDITIONAL_COMMENT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 115;
	            this.htmlComment();
	            break;
	        case HTMLParser.SEA_WS:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 116;
	            this.match(HTMLParser.SEA_WS);
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



	htmlComment() {
	    let localctx = new HtmlCommentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, HTMLParser.RULE_htmlComment);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        _la = this._input.LA(1);
	        if(!(_la===HTMLParser.HTML_COMMENT || _la===HTMLParser.HTML_CONDITIONAL_COMMENT)) {
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



	script() {
	    let localctx = new ScriptContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, HTMLParser.RULE_script);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this.match(HTMLParser.SCRIPT_OPEN);
	        this.state = 122;
	        _la = this._input.LA(1);
	        if(!(_la===HTMLParser.SCRIPT_BODY || _la===HTMLParser.SCRIPT_SHORT_BODY)) {
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



	style() {
	    let localctx = new StyleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, HTMLParser.RULE_style);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124;
	        this.match(HTMLParser.STYLE_OPEN);
	        this.state = 125;
	        _la = this._input.LA(1);
	        if(!(_la===HTMLParser.STYLE_BODY || _la===HTMLParser.STYLE_SHORT_BODY)) {
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

HTMLParser.EOF = antlr4.Token.EOF;
HTMLParser.HTML_COMMENT = 1;
HTMLParser.HTML_CONDITIONAL_COMMENT = 2;
HTMLParser.XML = 3;
HTMLParser.CDATA = 4;
HTMLParser.DTD = 5;
HTMLParser.SCRIPTLET = 6;
HTMLParser.SEA_WS = 7;
HTMLParser.SCRIPT_OPEN = 8;
HTMLParser.STYLE_OPEN = 9;
HTMLParser.TAG_OPEN = 10;
HTMLParser.HTML_TEXT = 11;
HTMLParser.TAG_CLOSE = 12;
HTMLParser.TAG_SLASH_CLOSE = 13;
HTMLParser.TAG_SLASH = 14;
HTMLParser.TAG_EQUALS = 15;
HTMLParser.TAG_NAME = 16;
HTMLParser.TAG_WHITESPACE = 17;
HTMLParser.SCRIPT_BODY = 18;
HTMLParser.SCRIPT_SHORT_BODY = 19;
HTMLParser.STYLE_BODY = 20;
HTMLParser.STYLE_SHORT_BODY = 21;
HTMLParser.ATTVALUE_VALUE = 22;
HTMLParser.ATTRIBUTE = 23;

HTMLParser.RULE_htmlDocument = 0;
HTMLParser.RULE_scriptletOrSeaWs = 1;
HTMLParser.RULE_htmlElements = 2;
HTMLParser.RULE_htmlElement = 3;
HTMLParser.RULE_htmlContent = 4;
HTMLParser.RULE_htmlAttribute = 5;
HTMLParser.RULE_htmlChardata = 6;
HTMLParser.RULE_htmlMisc = 7;
HTMLParser.RULE_htmlComment = 8;
HTMLParser.RULE_script = 9;
HTMLParser.RULE_style = 10;

class HtmlDocumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HTMLParser.RULE_htmlDocument;
    }

	scriptletOrSeaWs = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ScriptletOrSeaWsContext);
	    } else {
	        return this.getTypedRuleContext(ScriptletOrSeaWsContext,i);
	    }
	};

	XML() {
	    return this.getToken(HTMLParser.XML, 0);
	};

	DTD() {
	    return this.getToken(HTMLParser.DTD, 0);
	};

	htmlElements = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(HtmlElementsContext);
	    } else {
	        return this.getTypedRuleContext(HtmlElementsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HTMLParserListener ) {
	        listener.enterHtmlDocument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HTMLParserListener ) {
	        listener.exitHtmlDocument(this);
		}
	}


}



class ScriptletOrSeaWsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HTMLParser.RULE_scriptletOrSeaWs;
    }

	SCRIPTLET() {
	    return this.getToken(HTMLParser.SCRIPTLET, 0);
	};

	SEA_WS() {
	    return this.getToken(HTMLParser.SEA_WS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HTMLParserListener ) {
	        listener.enterScriptletOrSeaWs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HTMLParserListener ) {
	        listener.exitScriptletOrSeaWs(this);
		}
	}


}



class HtmlElementsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HTMLParser.RULE_htmlElements;
    }

	htmlElement() {
	    return this.getTypedRuleContext(HtmlElementContext,0);
	};

	htmlMisc = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(HtmlMiscContext);
	    } else {
	        return this.getTypedRuleContext(HtmlMiscContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HTMLParserListener ) {
	        listener.enterHtmlElements(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HTMLParserListener ) {
	        listener.exitHtmlElements(this);
		}
	}


}



class HtmlElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HTMLParser.RULE_htmlElement;
    }

	TAG_OPEN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(HTMLParser.TAG_OPEN);
	    } else {
	        return this.getToken(HTMLParser.TAG_OPEN, i);
	    }
	};


	TAG_NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(HTMLParser.TAG_NAME);
	    } else {
	        return this.getToken(HTMLParser.TAG_NAME, i);
	    }
	};


	TAG_CLOSE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(HTMLParser.TAG_CLOSE);
	    } else {
	        return this.getToken(HTMLParser.TAG_CLOSE, i);
	    }
	};


	TAG_SLASH_CLOSE() {
	    return this.getToken(HTMLParser.TAG_SLASH_CLOSE, 0);
	};

	htmlAttribute = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(HtmlAttributeContext);
	    } else {
	        return this.getTypedRuleContext(HtmlAttributeContext,i);
	    }
	};

	htmlContent() {
	    return this.getTypedRuleContext(HtmlContentContext,0);
	};

	TAG_SLASH() {
	    return this.getToken(HTMLParser.TAG_SLASH, 0);
	};

	SCRIPTLET() {
	    return this.getToken(HTMLParser.SCRIPTLET, 0);
	};

	script() {
	    return this.getTypedRuleContext(ScriptContext,0);
	};

	style() {
	    return this.getTypedRuleContext(StyleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HTMLParserListener ) {
	        listener.enterHtmlElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HTMLParserListener ) {
	        listener.exitHtmlElement(this);
		}
	}


}



class HtmlContentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HTMLParser.RULE_htmlContent;
    }

	htmlChardata = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(HtmlChardataContext);
	    } else {
	        return this.getTypedRuleContext(HtmlChardataContext,i);
	    }
	};

	htmlElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(HtmlElementContext);
	    } else {
	        return this.getTypedRuleContext(HtmlElementContext,i);
	    }
	};

	CDATA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(HTMLParser.CDATA);
	    } else {
	        return this.getToken(HTMLParser.CDATA, i);
	    }
	};


	htmlComment = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(HtmlCommentContext);
	    } else {
	        return this.getTypedRuleContext(HtmlCommentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HTMLParserListener ) {
	        listener.enterHtmlContent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HTMLParserListener ) {
	        listener.exitHtmlContent(this);
		}
	}


}



class HtmlAttributeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HTMLParser.RULE_htmlAttribute;
    }

	TAG_NAME() {
	    return this.getToken(HTMLParser.TAG_NAME, 0);
	};

	TAG_EQUALS() {
	    return this.getToken(HTMLParser.TAG_EQUALS, 0);
	};

	ATTVALUE_VALUE() {
	    return this.getToken(HTMLParser.ATTVALUE_VALUE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HTMLParserListener ) {
	        listener.enterHtmlAttribute(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HTMLParserListener ) {
	        listener.exitHtmlAttribute(this);
		}
	}


}



class HtmlChardataContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HTMLParser.RULE_htmlChardata;
    }

	HTML_TEXT() {
	    return this.getToken(HTMLParser.HTML_TEXT, 0);
	};

	SEA_WS() {
	    return this.getToken(HTMLParser.SEA_WS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HTMLParserListener ) {
	        listener.enterHtmlChardata(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HTMLParserListener ) {
	        listener.exitHtmlChardata(this);
		}
	}


}



class HtmlMiscContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HTMLParser.RULE_htmlMisc;
    }

	htmlComment() {
	    return this.getTypedRuleContext(HtmlCommentContext,0);
	};

	SEA_WS() {
	    return this.getToken(HTMLParser.SEA_WS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HTMLParserListener ) {
	        listener.enterHtmlMisc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HTMLParserListener ) {
	        listener.exitHtmlMisc(this);
		}
	}


}



class HtmlCommentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HTMLParser.RULE_htmlComment;
    }

	HTML_COMMENT() {
	    return this.getToken(HTMLParser.HTML_COMMENT, 0);
	};

	HTML_CONDITIONAL_COMMENT() {
	    return this.getToken(HTMLParser.HTML_CONDITIONAL_COMMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HTMLParserListener ) {
	        listener.enterHtmlComment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HTMLParserListener ) {
	        listener.exitHtmlComment(this);
		}
	}


}



class ScriptContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HTMLParser.RULE_script;
    }

	SCRIPT_OPEN() {
	    return this.getToken(HTMLParser.SCRIPT_OPEN, 0);
	};

	SCRIPT_BODY() {
	    return this.getToken(HTMLParser.SCRIPT_BODY, 0);
	};

	SCRIPT_SHORT_BODY() {
	    return this.getToken(HTMLParser.SCRIPT_SHORT_BODY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HTMLParserListener ) {
	        listener.enterScript(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HTMLParserListener ) {
	        listener.exitScript(this);
		}
	}


}



class StyleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HTMLParser.RULE_style;
    }

	STYLE_OPEN() {
	    return this.getToken(HTMLParser.STYLE_OPEN, 0);
	};

	STYLE_BODY() {
	    return this.getToken(HTMLParser.STYLE_BODY, 0);
	};

	STYLE_SHORT_BODY() {
	    return this.getToken(HTMLParser.STYLE_SHORT_BODY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HTMLParserListener ) {
	        listener.enterStyle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HTMLParserListener ) {
	        listener.exitStyle(this);
		}
	}


}




HTMLParser.HtmlDocumentContext = HtmlDocumentContext; 
HTMLParser.ScriptletOrSeaWsContext = ScriptletOrSeaWsContext; 
HTMLParser.HtmlElementsContext = HtmlElementsContext; 
HTMLParser.HtmlElementContext = HtmlElementContext; 
HTMLParser.HtmlContentContext = HtmlContentContext; 
HTMLParser.HtmlAttributeContext = HtmlAttributeContext; 
HTMLParser.HtmlChardataContext = HtmlChardataContext; 
HTMLParser.HtmlMiscContext = HtmlMiscContext; 
HTMLParser.HtmlCommentContext = HtmlCommentContext; 
HTMLParser.ScriptContext = ScriptContext; 
HTMLParser.StyleContext = StyleContext; 
