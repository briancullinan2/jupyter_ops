// Generated from ./xml/XMLParser.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import XMLParserListener from './XMLParserListener.js';
const serializedATN = [4,1,18,96,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,3,0,18,8,0,1,0,5,0,21,8,0,10,0,12,0,24,9,0,1,
0,1,0,5,0,28,8,0,10,0,12,0,31,9,0,1,1,1,1,5,1,35,8,1,10,1,12,1,38,9,1,1,
1,1,1,1,2,3,2,43,8,2,1,2,1,2,1,2,1,2,1,2,3,2,50,8,2,1,2,3,2,53,8,2,5,2,55,
8,2,10,2,12,2,58,9,2,1,3,1,3,1,3,5,3,63,8,3,10,3,12,3,66,9,3,1,3,1,3,1,3,
1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,78,8,3,10,3,12,3,81,9,3,1,3,3,3,84,8,3,1,
4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,3,1,
0,4,5,2,0,6,6,9,9,3,0,1,1,6,6,18,18,101,0,17,1,0,0,0,2,32,1,0,0,0,4,42,1,
0,0,0,6,83,1,0,0,0,8,85,1,0,0,0,10,87,1,0,0,0,12,91,1,0,0,0,14,93,1,0,0,
0,16,18,3,2,1,0,17,16,1,0,0,0,17,18,1,0,0,0,18,22,1,0,0,0,19,21,3,14,7,0,
20,19,1,0,0,0,21,24,1,0,0,0,22,20,1,0,0,0,22,23,1,0,0,0,23,25,1,0,0,0,24,
22,1,0,0,0,25,29,3,6,3,0,26,28,3,14,7,0,27,26,1,0,0,0,28,31,1,0,0,0,29,27,
1,0,0,0,29,30,1,0,0,0,30,1,1,0,0,0,31,29,1,0,0,0,32,36,5,8,0,0,33,35,3,10,
5,0,34,33,1,0,0,0,35,38,1,0,0,0,36,34,1,0,0,0,36,37,1,0,0,0,37,39,1,0,0,
0,38,36,1,0,0,0,39,40,5,11,0,0,40,3,1,0,0,0,41,43,3,12,6,0,42,41,1,0,0,0,
42,43,1,0,0,0,43,56,1,0,0,0,44,50,3,6,3,0,45,50,3,8,4,0,46,50,5,2,0,0,47,
50,5,18,0,0,48,50,5,1,0,0,49,44,1,0,0,0,49,45,1,0,0,0,49,46,1,0,0,0,49,47,
1,0,0,0,49,48,1,0,0,0,50,52,1,0,0,0,51,53,3,12,6,0,52,51,1,0,0,0,52,53,1,
0,0,0,53,55,1,0,0,0,54,49,1,0,0,0,55,58,1,0,0,0,56,54,1,0,0,0,56,57,1,0,
0,0,57,5,1,0,0,0,58,56,1,0,0,0,59,60,5,7,0,0,60,64,5,16,0,0,61,63,3,10,5,
0,62,61,1,0,0,0,63,66,1,0,0,0,64,62,1,0,0,0,64,65,1,0,0,0,65,67,1,0,0,0,
66,64,1,0,0,0,67,68,5,10,0,0,68,69,3,4,2,0,69,70,5,7,0,0,70,71,5,13,0,0,
71,72,5,16,0,0,72,73,5,10,0,0,73,84,1,0,0,0,74,75,5,7,0,0,75,79,5,16,0,0,
76,78,3,10,5,0,77,76,1,0,0,0,78,81,1,0,0,0,79,77,1,0,0,0,79,80,1,0,0,0,80,
82,1,0,0,0,81,79,1,0,0,0,82,84,5,12,0,0,83,59,1,0,0,0,83,74,1,0,0,0,84,7,
1,0,0,0,85,86,7,0,0,0,86,9,1,0,0,0,87,88,5,16,0,0,88,89,5,14,0,0,89,90,5,
15,0,0,90,11,1,0,0,0,91,92,7,1,0,0,92,13,1,0,0,0,93,94,7,2,0,0,94,15,1,0,
0,0,11,17,22,29,36,42,49,52,56,64,79,83];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class XMLParser extends antlr4.Parser {

    static grammarFileName = "XMLParser.g4";
    static literalNames = [ null, null, null, null, null, null, null, "'<'", 
                            null, null, "'>'", null, "'/>'", "'/'", "'='" ];
    static symbolicNames = [ null, "COMMENT", "CDATA", "DTD", "EntityRef", 
                             "CharRef", "SEA_WS", "OPEN", "XMLDeclOpen", 
                             "TEXT", "CLOSE", "SPECIAL_CLOSE", "SLASH_CLOSE", 
                             "SLASH", "EQUALS", "STRING", "Name", "S", "PI" ];
    static ruleNames = [ "document", "prolog", "content", "element", "reference", 
                         "attribute", "chardata", "misc" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = XMLParser.ruleNames;
        this.literalNames = XMLParser.literalNames;
        this.symbolicNames = XMLParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	document() {
	    let localctx = new DocumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, XMLParser.RULE_document);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===XMLParser.XMLDeclOpen) {
	            this.state = 16;
	            this.prolog();
	        }

	        this.state = 22;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << XMLParser.COMMENT) | (1 << XMLParser.SEA_WS) | (1 << XMLParser.PI))) !== 0)) {
	            this.state = 19;
	            this.misc();
	            this.state = 24;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 25;
	        this.element();
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << XMLParser.COMMENT) | (1 << XMLParser.SEA_WS) | (1 << XMLParser.PI))) !== 0)) {
	            this.state = 26;
	            this.misc();
	            this.state = 31;
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



	prolog() {
	    let localctx = new PrologContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, XMLParser.RULE_prolog);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.match(XMLParser.XMLDeclOpen);
	        this.state = 36;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===XMLParser.Name) {
	            this.state = 33;
	            this.attribute();
	            this.state = 38;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 39;
	        this.match(XMLParser.SPECIAL_CLOSE);
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



	content() {
	    let localctx = new ContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, XMLParser.RULE_content);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===XMLParser.SEA_WS || _la===XMLParser.TEXT) {
	            this.state = 41;
	            this.chardata();
	        }

	        this.state = 56;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 49;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case XMLParser.OPEN:
	                    this.state = 44;
	                    this.element();
	                    break;
	                case XMLParser.EntityRef:
	                case XMLParser.CharRef:
	                    this.state = 45;
	                    this.reference();
	                    break;
	                case XMLParser.CDATA:
	                    this.state = 46;
	                    this.match(XMLParser.CDATA);
	                    break;
	                case XMLParser.PI:
	                    this.state = 47;
	                    this.match(XMLParser.PI);
	                    break;
	                case XMLParser.COMMENT:
	                    this.state = 48;
	                    this.match(XMLParser.COMMENT);
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 52;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===XMLParser.SEA_WS || _la===XMLParser.TEXT) {
	                    this.state = 51;
	                    this.chardata();
	                }
	         
	            }
	            this.state = 58;
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



	element() {
	    let localctx = new ElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, XMLParser.RULE_element);
	    var _la = 0; // Token type
	    try {
	        this.state = 83;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 59;
	            this.match(XMLParser.OPEN);
	            this.state = 60;
	            this.match(XMLParser.Name);
	            this.state = 64;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===XMLParser.Name) {
	                this.state = 61;
	                this.attribute();
	                this.state = 66;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 67;
	            this.match(XMLParser.CLOSE);
	            this.state = 68;
	            this.content();
	            this.state = 69;
	            this.match(XMLParser.OPEN);
	            this.state = 70;
	            this.match(XMLParser.SLASH);
	            this.state = 71;
	            this.match(XMLParser.Name);
	            this.state = 72;
	            this.match(XMLParser.CLOSE);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 74;
	            this.match(XMLParser.OPEN);
	            this.state = 75;
	            this.match(XMLParser.Name);
	            this.state = 79;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===XMLParser.Name) {
	                this.state = 76;
	                this.attribute();
	                this.state = 81;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 82;
	            this.match(XMLParser.SLASH_CLOSE);
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



	reference() {
	    let localctx = new ReferenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, XMLParser.RULE_reference);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        _la = this._input.LA(1);
	        if(!(_la===XMLParser.EntityRef || _la===XMLParser.CharRef)) {
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



	attribute() {
	    let localctx = new AttributeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, XMLParser.RULE_attribute);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.match(XMLParser.Name);
	        this.state = 88;
	        this.match(XMLParser.EQUALS);
	        this.state = 89;
	        this.match(XMLParser.STRING);
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



	chardata() {
	    let localctx = new ChardataContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, XMLParser.RULE_chardata);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        _la = this._input.LA(1);
	        if(!(_la===XMLParser.SEA_WS || _la===XMLParser.TEXT)) {
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



	misc() {
	    let localctx = new MiscContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, XMLParser.RULE_misc);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << XMLParser.COMMENT) | (1 << XMLParser.SEA_WS) | (1 << XMLParser.PI))) !== 0))) {
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

XMLParser.EOF = antlr4.Token.EOF;
XMLParser.COMMENT = 1;
XMLParser.CDATA = 2;
XMLParser.DTD = 3;
XMLParser.EntityRef = 4;
XMLParser.CharRef = 5;
XMLParser.SEA_WS = 6;
XMLParser.OPEN = 7;
XMLParser.XMLDeclOpen = 8;
XMLParser.TEXT = 9;
XMLParser.CLOSE = 10;
XMLParser.SPECIAL_CLOSE = 11;
XMLParser.SLASH_CLOSE = 12;
XMLParser.SLASH = 13;
XMLParser.EQUALS = 14;
XMLParser.STRING = 15;
XMLParser.Name = 16;
XMLParser.S = 17;
XMLParser.PI = 18;

XMLParser.RULE_document = 0;
XMLParser.RULE_prolog = 1;
XMLParser.RULE_content = 2;
XMLParser.RULE_element = 3;
XMLParser.RULE_reference = 4;
XMLParser.RULE_attribute = 5;
XMLParser.RULE_chardata = 6;
XMLParser.RULE_misc = 7;

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
        this.ruleIndex = XMLParser.RULE_document;
    }

	element() {
	    return this.getTypedRuleContext(ElementContext,0);
	};

	prolog() {
	    return this.getTypedRuleContext(PrologContext,0);
	};

	misc = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MiscContext);
	    } else {
	        return this.getTypedRuleContext(MiscContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof XMLParserListener ) {
	        listener.enterDocument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XMLParserListener ) {
	        listener.exitDocument(this);
		}
	}


}



class PrologContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XMLParser.RULE_prolog;
    }

	XMLDeclOpen() {
	    return this.getToken(XMLParser.XMLDeclOpen, 0);
	};

	SPECIAL_CLOSE() {
	    return this.getToken(XMLParser.SPECIAL_CLOSE, 0);
	};

	attribute = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AttributeContext);
	    } else {
	        return this.getTypedRuleContext(AttributeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof XMLParserListener ) {
	        listener.enterProlog(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XMLParserListener ) {
	        listener.exitProlog(this);
		}
	}


}



class ContentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XMLParser.RULE_content;
    }

	chardata = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ChardataContext);
	    } else {
	        return this.getTypedRuleContext(ChardataContext,i);
	    }
	};

	element = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElementContext);
	    } else {
	        return this.getTypedRuleContext(ElementContext,i);
	    }
	};

	reference = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ReferenceContext);
	    } else {
	        return this.getTypedRuleContext(ReferenceContext,i);
	    }
	};

	CDATA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XMLParser.CDATA);
	    } else {
	        return this.getToken(XMLParser.CDATA, i);
	    }
	};


	PI = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XMLParser.PI);
	    } else {
	        return this.getToken(XMLParser.PI, i);
	    }
	};


	COMMENT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XMLParser.COMMENT);
	    } else {
	        return this.getToken(XMLParser.COMMENT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof XMLParserListener ) {
	        listener.enterContent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XMLParserListener ) {
	        listener.exitContent(this);
		}
	}


}



class ElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XMLParser.RULE_element;
    }

	OPEN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XMLParser.OPEN);
	    } else {
	        return this.getToken(XMLParser.OPEN, i);
	    }
	};


	Name = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XMLParser.Name);
	    } else {
	        return this.getToken(XMLParser.Name, i);
	    }
	};


	CLOSE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XMLParser.CLOSE);
	    } else {
	        return this.getToken(XMLParser.CLOSE, i);
	    }
	};


	content() {
	    return this.getTypedRuleContext(ContentContext,0);
	};

	SLASH() {
	    return this.getToken(XMLParser.SLASH, 0);
	};

	attribute = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AttributeContext);
	    } else {
	        return this.getTypedRuleContext(AttributeContext,i);
	    }
	};

	SLASH_CLOSE() {
	    return this.getToken(XMLParser.SLASH_CLOSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XMLParserListener ) {
	        listener.enterElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XMLParserListener ) {
	        listener.exitElement(this);
		}
	}


}



class ReferenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XMLParser.RULE_reference;
    }

	EntityRef() {
	    return this.getToken(XMLParser.EntityRef, 0);
	};

	CharRef() {
	    return this.getToken(XMLParser.CharRef, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XMLParserListener ) {
	        listener.enterReference(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XMLParserListener ) {
	        listener.exitReference(this);
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
        this.ruleIndex = XMLParser.RULE_attribute;
    }

	Name() {
	    return this.getToken(XMLParser.Name, 0);
	};

	EQUALS() {
	    return this.getToken(XMLParser.EQUALS, 0);
	};

	STRING() {
	    return this.getToken(XMLParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XMLParserListener ) {
	        listener.enterAttribute(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XMLParserListener ) {
	        listener.exitAttribute(this);
		}
	}


}



class ChardataContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XMLParser.RULE_chardata;
    }

	TEXT() {
	    return this.getToken(XMLParser.TEXT, 0);
	};

	SEA_WS() {
	    return this.getToken(XMLParser.SEA_WS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XMLParserListener ) {
	        listener.enterChardata(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XMLParserListener ) {
	        listener.exitChardata(this);
		}
	}


}



class MiscContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XMLParser.RULE_misc;
    }

	COMMENT() {
	    return this.getToken(XMLParser.COMMENT, 0);
	};

	PI() {
	    return this.getToken(XMLParser.PI, 0);
	};

	SEA_WS() {
	    return this.getToken(XMLParser.SEA_WS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XMLParserListener ) {
	        listener.enterMisc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XMLParserListener ) {
	        listener.exitMisc(this);
		}
	}


}




XMLParser.DocumentContext = DocumentContext; 
XMLParser.PrologContext = PrologContext; 
XMLParser.ContentContext = ContentContext; 
XMLParser.ElementContext = ElementContext; 
XMLParser.ReferenceContext = ReferenceContext; 
XMLParser.AttributeContext = AttributeContext; 
XMLParser.ChardataContext = ChardataContext; 
XMLParser.MiscContext = MiscContext; 
