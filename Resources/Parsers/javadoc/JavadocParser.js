// Generated from ./javadoc/JavadocParser.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import JavadocParserListener from './JavadocParserListener.js';
const serializedATN = [4,1,12,240,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,1,0,1,0,1,0,5,0,48,8,0,10,0,12,0,51,9,0,1,0,1,0,1,0,1,
0,1,0,5,0,58,8,0,10,0,12,0,61,9,0,1,0,1,0,1,0,3,0,66,8,0,1,1,1,1,5,1,70,
8,1,10,1,12,1,73,9,1,1,1,5,1,76,8,1,10,1,12,1,79,9,1,1,1,1,1,1,1,4,1,84,
8,1,11,1,12,1,85,1,1,5,1,89,8,1,10,1,12,1,92,9,1,1,1,1,1,3,1,96,8,1,1,2,
1,2,1,3,1,3,4,3,102,8,3,11,3,12,3,103,1,3,1,3,5,3,108,8,3,10,3,12,3,111,
9,3,1,4,1,4,5,4,115,8,4,10,4,12,4,118,9,4,1,4,1,4,5,4,122,8,4,10,4,12,4,
125,9,4,3,4,127,8,4,1,5,3,5,130,8,5,1,5,4,5,133,8,5,11,5,12,5,134,1,5,1,
5,1,5,5,5,140,8,5,10,5,12,5,143,9,5,1,6,1,6,1,7,1,7,3,7,149,8,7,1,8,1,8,
1,8,4,8,154,8,8,11,8,12,8,155,1,9,1,9,1,10,4,10,161,8,10,11,10,12,10,162,
1,11,3,11,166,8,11,1,11,1,11,1,11,3,11,171,8,11,1,11,5,11,174,8,11,10,11,
12,11,177,9,11,1,12,1,12,1,13,1,13,1,13,3,13,184,8,13,1,14,4,14,187,8,14,
11,14,12,14,188,1,15,1,15,1,16,1,16,1,16,5,16,196,8,16,10,16,12,16,199,9,
16,1,16,3,16,202,8,16,1,16,1,16,1,17,1,17,1,18,4,18,209,8,18,11,18,12,18,
210,1,19,1,19,5,19,215,8,19,10,19,12,19,218,9,19,1,19,1,19,1,20,1,20,1,20,
5,20,225,8,20,10,20,12,20,228,9,20,1,20,5,20,231,8,20,10,20,12,20,234,9,
20,3,20,236,8,20,1,21,1,21,1,21,0,0,22,0,2,4,6,8,10,12,14,16,18,20,22,24,
26,28,30,32,34,36,38,40,42,0,4,1,0,2,3,4,0,1,1,4,4,6,7,11,12,4,0,1,1,3,4,
6,7,11,12,2,0,1,4,6,7,255,0,65,1,0,0,0,2,95,1,0,0,0,4,97,1,0,0,0,6,99,1,
0,0,0,8,126,1,0,0,0,10,129,1,0,0,0,12,144,1,0,0,0,14,148,1,0,0,0,16,153,
1,0,0,0,18,157,1,0,0,0,20,160,1,0,0,0,22,165,1,0,0,0,24,178,1,0,0,0,26,183,
1,0,0,0,28,186,1,0,0,0,30,190,1,0,0,0,32,192,1,0,0,0,34,205,1,0,0,0,36,208,
1,0,0,0,38,212,1,0,0,0,40,235,1,0,0,0,42,237,1,0,0,0,44,66,5,0,0,1,45,49,
5,8,0,0,46,48,3,4,2,0,47,46,1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,49,50,1,
0,0,0,50,52,1,0,0,0,51,49,1,0,0,0,52,53,3,2,1,0,53,54,5,9,0,0,54,55,5,0,
0,1,55,66,1,0,0,0,56,58,3,4,2,0,57,56,1,0,0,0,58,61,1,0,0,0,59,57,1,0,0,
0,59,60,1,0,0,0,60,62,1,0,0,0,61,59,1,0,0,0,62,63,3,2,1,0,63,64,5,0,0,1,
64,66,1,0,0,0,65,44,1,0,0,0,65,45,1,0,0,0,65,59,1,0,0,0,66,1,1,0,0,0,67,
71,3,6,3,0,68,70,3,4,2,0,69,68,1,0,0,0,70,73,1,0,0,0,71,69,1,0,0,0,71,72,
1,0,0,0,72,96,1,0,0,0,73,71,1,0,0,0,74,76,3,4,2,0,75,74,1,0,0,0,76,79,1,
0,0,0,77,75,1,0,0,0,77,78,1,0,0,0,78,80,1,0,0,0,79,77,1,0,0,0,80,96,3,20,
10,0,81,83,3,6,3,0,82,84,5,2,0,0,83,82,1,0,0,0,84,85,1,0,0,0,85,83,1,0,0,
0,85,86,1,0,0,0,86,90,1,0,0,0,87,89,3,4,2,0,88,87,1,0,0,0,89,92,1,0,0,0,
90,88,1,0,0,0,90,91,1,0,0,0,91,93,1,0,0,0,92,90,1,0,0,0,93,94,3,20,10,0,
94,96,1,0,0,0,95,67,1,0,0,0,95,77,1,0,0,0,95,81,1,0,0,0,96,3,1,0,0,0,97,
98,7,0,0,0,98,5,1,0,0,0,99,109,3,8,4,0,100,102,3,18,9,0,101,100,1,0,0,0,
102,103,1,0,0,0,103,101,1,0,0,0,103,104,1,0,0,0,104,105,1,0,0,0,105,106,
3,8,4,0,106,108,1,0,0,0,107,101,1,0,0,0,108,111,1,0,0,0,109,107,1,0,0,0,
109,110,1,0,0,0,110,7,1,0,0,0,111,109,1,0,0,0,112,116,3,10,5,0,113,115,3,
14,7,0,114,113,1,0,0,0,115,118,1,0,0,0,116,114,1,0,0,0,116,117,1,0,0,0,117,
127,1,0,0,0,118,116,1,0,0,0,119,123,3,32,16,0,120,122,3,14,7,0,121,120,1,
0,0,0,122,125,1,0,0,0,123,121,1,0,0,0,123,124,1,0,0,0,124,127,1,0,0,0,125,
123,1,0,0,0,126,112,1,0,0,0,126,119,1,0,0,0,127,9,1,0,0,0,128,130,5,3,0,
0,129,128,1,0,0,0,129,130,1,0,0,0,130,132,1,0,0,0,131,133,3,12,6,0,132,131,
1,0,0,0,133,134,1,0,0,0,134,132,1,0,0,0,134,135,1,0,0,0,135,141,1,0,0,0,
136,140,3,12,6,0,137,140,5,3,0,0,138,140,5,5,0,0,139,136,1,0,0,0,139,137,
1,0,0,0,139,138,1,0,0,0,140,143,1,0,0,0,141,139,1,0,0,0,141,142,1,0,0,0,
142,11,1,0,0,0,143,141,1,0,0,0,144,145,7,1,0,0,145,13,1,0,0,0,146,149,3,
32,16,0,147,149,3,16,8,0,148,146,1,0,0,0,148,147,1,0,0,0,149,15,1,0,0,0,
150,154,3,12,6,0,151,154,5,3,0,0,152,154,5,5,0,0,153,150,1,0,0,0,153,151,
1,0,0,0,153,152,1,0,0,0,154,155,1,0,0,0,155,153,1,0,0,0,155,156,1,0,0,0,
156,17,1,0,0,0,157,158,5,2,0,0,158,19,1,0,0,0,159,161,3,22,11,0,160,159,
1,0,0,0,161,162,1,0,0,0,162,160,1,0,0,0,162,163,1,0,0,0,163,21,1,0,0,0,164,
166,5,3,0,0,165,164,1,0,0,0,165,166,1,0,0,0,166,167,1,0,0,0,167,168,5,5,
0,0,168,170,3,24,12,0,169,171,5,3,0,0,170,169,1,0,0,0,170,171,1,0,0,0,171,
175,1,0,0,0,172,174,3,26,13,0,173,172,1,0,0,0,174,177,1,0,0,0,175,173,1,
0,0,0,175,176,1,0,0,0,176,23,1,0,0,0,177,175,1,0,0,0,178,179,5,1,0,0,179,
25,1,0,0,0,180,184,3,28,14,0,181,184,3,32,16,0,182,184,5,2,0,0,183,180,1,
0,0,0,183,181,1,0,0,0,183,182,1,0,0,0,184,27,1,0,0,0,185,187,3,30,15,0,186,
185,1,0,0,0,187,188,1,0,0,0,188,186,1,0,0,0,188,189,1,0,0,0,189,29,1,0,0,
0,190,191,7,2,0,0,191,31,1,0,0,0,192,193,5,10,0,0,193,197,3,34,17,0,194,
196,5,3,0,0,195,194,1,0,0,0,196,199,1,0,0,0,197,195,1,0,0,0,197,198,1,0,
0,0,198,201,1,0,0,0,199,197,1,0,0,0,200,202,3,36,18,0,201,200,1,0,0,0,201,
202,1,0,0,0,202,203,1,0,0,0,203,204,5,12,0,0,204,33,1,0,0,0,205,206,5,1,
0,0,206,35,1,0,0,0,207,209,3,40,20,0,208,207,1,0,0,0,209,210,1,0,0,0,210,
208,1,0,0,0,210,211,1,0,0,0,211,37,1,0,0,0,212,216,5,11,0,0,213,215,3,40,
20,0,214,213,1,0,0,0,215,218,1,0,0,0,216,214,1,0,0,0,216,217,1,0,0,0,217,
219,1,0,0,0,218,216,1,0,0,0,219,220,5,12,0,0,220,39,1,0,0,0,221,236,3,38,
19,0,222,232,3,42,21,0,223,225,5,2,0,0,224,223,1,0,0,0,225,228,1,0,0,0,226,
224,1,0,0,0,226,227,1,0,0,0,227,229,1,0,0,0,228,226,1,0,0,0,229,231,3,42,
21,0,230,226,1,0,0,0,231,234,1,0,0,0,232,230,1,0,0,0,232,233,1,0,0,0,233,
236,1,0,0,0,234,232,1,0,0,0,235,221,1,0,0,0,235,222,1,0,0,0,236,41,1,0,0,
0,237,238,7,3,0,0,238,43,1,0,0,0,33,49,59,65,71,77,85,90,95,103,109,116,
123,126,129,134,139,141,148,153,155,162,165,170,175,183,188,197,201,210,
216,226,232,235];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class JavadocParser extends antlr4.Parser {

    static grammarFileName = "JavadocParser.g4";
    static literalNames = [ null, null, null, null, null, "'@'", "'*'", 
                            "'/'", null, null, "'{@'", "'{'", "'}'" ];
    static symbolicNames = [ null, "NAME", "NEWLINE", "SPACE", "TEXT_CONTENT", 
                             "AT", "STAR", "SLASH", "JAVADOC_START", "JAVADOC_END", 
                             "INLINE_TAG_START", "BRACE_OPEN", "BRACE_CLOSE" ];
    static ruleNames = [ "documentation", "documentationContent", "skipWhitespace", 
                         "description", "descriptionLine", "descriptionLineStart", 
                         "descriptionLineNoSpaceNoAt", "descriptionLineElement", 
                         "descriptionLineText", "descriptionNewline", "tagSection", 
                         "blockTag", "blockTagName", "blockTagContent", 
                         "blockTagText", "blockTagTextElement", "inlineTag", 
                         "inlineTagName", "inlineTagContent", "braceExpression", 
                         "braceContent", "braceText" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = JavadocParser.ruleNames;
        this.literalNames = JavadocParser.literalNames;
        this.symbolicNames = JavadocParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	documentation() {
	    let localctx = new DocumentationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, JavadocParser.RULE_documentation);
	    try {
	        this.state = 65;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JavadocParser.EOF:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 44;
	            this.match(JavadocParser.EOF);
	            break;
	        case JavadocParser.JAVADOC_START:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 45;
	            this.match(JavadocParser.JAVADOC_START);
	            this.state = 49;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 46;
	                    this.skipWhitespace(); 
	                }
	                this.state = 51;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	            }

	            this.state = 52;
	            this.documentationContent();
	            this.state = 53;
	            this.match(JavadocParser.JAVADOC_END);
	            this.state = 54;
	            this.match(JavadocParser.EOF);
	            break;
	        case JavadocParser.NAME:
	        case JavadocParser.NEWLINE:
	        case JavadocParser.SPACE:
	        case JavadocParser.TEXT_CONTENT:
	        case JavadocParser.AT:
	        case JavadocParser.STAR:
	        case JavadocParser.SLASH:
	        case JavadocParser.INLINE_TAG_START:
	        case JavadocParser.BRACE_OPEN:
	        case JavadocParser.BRACE_CLOSE:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 59;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 56;
	                    this.skipWhitespace(); 
	                }
	                this.state = 61;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	            }

	            this.state = 62;
	            this.documentationContent();
	            this.state = 63;
	            this.match(JavadocParser.EOF);
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



	documentationContent() {
	    let localctx = new DocumentationContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, JavadocParser.RULE_documentationContent);
	    var _la = 0; // Token type
	    try {
	        this.state = 95;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 67;
	            this.description();
	            this.state = 71;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===JavadocParser.NEWLINE || _la===JavadocParser.SPACE) {
	                this.state = 68;
	                this.skipWhitespace();
	                this.state = 73;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 77;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 74;
	                    this.skipWhitespace(); 
	                }
	                this.state = 79;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	            }

	            this.state = 80;
	            this.tagSection();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 81;
	            this.description();
	            this.state = 83; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 82;
	            		this.match(JavadocParser.NEWLINE);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 85; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,5, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 90;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 87;
	                    this.skipWhitespace(); 
	                }
	                this.state = 92;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
	            }

	            this.state = 93;
	            this.tagSection();
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



	skipWhitespace() {
	    let localctx = new SkipWhitespaceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, JavadocParser.RULE_skipWhitespace);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        _la = this._input.LA(1);
	        if(!(_la===JavadocParser.NEWLINE || _la===JavadocParser.SPACE)) {
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



	description() {
	    let localctx = new DescriptionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, JavadocParser.RULE_description);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        this.descriptionLine();
	        this.state = 109;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 101; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                do {
	                    this.state = 100;
	                    this.descriptionNewline();
	                    this.state = 103; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                } while(_la===JavadocParser.NEWLINE);
	                this.state = 105;
	                this.descriptionLine(); 
	            }
	            this.state = 111;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
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



	descriptionLine() {
	    let localctx = new DescriptionLineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, JavadocParser.RULE_descriptionLine);
	    try {
	        this.state = 126;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JavadocParser.NAME:
	        case JavadocParser.SPACE:
	        case JavadocParser.TEXT_CONTENT:
	        case JavadocParser.STAR:
	        case JavadocParser.SLASH:
	        case JavadocParser.BRACE_OPEN:
	        case JavadocParser.BRACE_CLOSE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 112;
	            this.descriptionLineStart();
	            this.state = 116;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 113;
	                    this.descriptionLineElement(); 
	                }
	                this.state = 118;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	            }

	            break;
	        case JavadocParser.INLINE_TAG_START:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 119;
	            this.inlineTag();
	            this.state = 123;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 120;
	                    this.descriptionLineElement(); 
	                }
	                this.state = 125;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
	            }

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



	descriptionLineStart() {
	    let localctx = new DescriptionLineStartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, JavadocParser.RULE_descriptionLineStart);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===JavadocParser.SPACE) {
	            this.state = 128;
	            this.match(JavadocParser.SPACE);
	        }

	        this.state = 132; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 131;
	        		this.descriptionLineNoSpaceNoAt();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 134; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,14, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 141;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 139;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case JavadocParser.NAME:
	                case JavadocParser.TEXT_CONTENT:
	                case JavadocParser.STAR:
	                case JavadocParser.SLASH:
	                case JavadocParser.BRACE_OPEN:
	                case JavadocParser.BRACE_CLOSE:
	                    this.state = 136;
	                    this.descriptionLineNoSpaceNoAt();
	                    break;
	                case JavadocParser.SPACE:
	                    this.state = 137;
	                    this.match(JavadocParser.SPACE);
	                    break;
	                case JavadocParser.AT:
	                    this.state = 138;
	                    this.match(JavadocParser.AT);
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                } 
	            }
	            this.state = 143;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
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



	descriptionLineNoSpaceNoAt() {
	    let localctx = new DescriptionLineNoSpaceNoAtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, JavadocParser.RULE_descriptionLineNoSpaceNoAt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JavadocParser.NAME) | (1 << JavadocParser.TEXT_CONTENT) | (1 << JavadocParser.STAR) | (1 << JavadocParser.SLASH) | (1 << JavadocParser.BRACE_OPEN) | (1 << JavadocParser.BRACE_CLOSE))) !== 0))) {
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



	descriptionLineElement() {
	    let localctx = new DescriptionLineElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, JavadocParser.RULE_descriptionLineElement);
	    try {
	        this.state = 148;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JavadocParser.INLINE_TAG_START:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 146;
	            this.inlineTag();
	            break;
	        case JavadocParser.NAME:
	        case JavadocParser.SPACE:
	        case JavadocParser.TEXT_CONTENT:
	        case JavadocParser.AT:
	        case JavadocParser.STAR:
	        case JavadocParser.SLASH:
	        case JavadocParser.BRACE_OPEN:
	        case JavadocParser.BRACE_CLOSE:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 147;
	            this.descriptionLineText();
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



	descriptionLineText() {
	    let localctx = new DescriptionLineTextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, JavadocParser.RULE_descriptionLineText);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 153;
	        		this._errHandler.sync(this);
	        		switch(this._input.LA(1)) {
	        		case JavadocParser.NAME:
	        		case JavadocParser.TEXT_CONTENT:
	        		case JavadocParser.STAR:
	        		case JavadocParser.SLASH:
	        		case JavadocParser.BRACE_OPEN:
	        		case JavadocParser.BRACE_CLOSE:
	        		    this.state = 150;
	        		    this.descriptionLineNoSpaceNoAt();
	        		    break;
	        		case JavadocParser.SPACE:
	        		    this.state = 151;
	        		    this.match(JavadocParser.SPACE);
	        		    break;
	        		case JavadocParser.AT:
	        		    this.state = 152;
	        		    this.match(JavadocParser.AT);
	        		    break;
	        		default:
	        		    throw new antlr4.error.NoViableAltException(this);
	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 155; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,19, this._ctx);
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



	descriptionNewline() {
	    let localctx = new DescriptionNewlineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, JavadocParser.RULE_descriptionNewline);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this.match(JavadocParser.NEWLINE);
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



	tagSection() {
	    let localctx = new TagSectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, JavadocParser.RULE_tagSection);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 159;
	            this.blockTag();
	            this.state = 162; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===JavadocParser.SPACE || _la===JavadocParser.AT);
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



	blockTag() {
	    let localctx = new BlockTagContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, JavadocParser.RULE_blockTag);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 165;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===JavadocParser.SPACE) {
	            this.state = 164;
	            this.match(JavadocParser.SPACE);
	        }

	        this.state = 167;
	        this.match(JavadocParser.AT);
	        this.state = 168;
	        this.blockTagName();
	        this.state = 170;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        if(la_===1) {
	            this.state = 169;
	            this.match(JavadocParser.SPACE);

	        }
	        this.state = 175;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,23,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 172;
	                this.blockTagContent(); 
	            }
	            this.state = 177;
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



	blockTagName() {
	    let localctx = new BlockTagNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, JavadocParser.RULE_blockTagName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        this.match(JavadocParser.NAME);
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



	blockTagContent() {
	    let localctx = new BlockTagContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, JavadocParser.RULE_blockTagContent);
	    try {
	        this.state = 183;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JavadocParser.NAME:
	        case JavadocParser.SPACE:
	        case JavadocParser.TEXT_CONTENT:
	        case JavadocParser.STAR:
	        case JavadocParser.SLASH:
	        case JavadocParser.BRACE_OPEN:
	        case JavadocParser.BRACE_CLOSE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 180;
	            this.blockTagText();
	            break;
	        case JavadocParser.INLINE_TAG_START:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 181;
	            this.inlineTag();
	            break;
	        case JavadocParser.NEWLINE:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 182;
	            this.match(JavadocParser.NEWLINE);
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



	blockTagText() {
	    let localctx = new BlockTagTextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, JavadocParser.RULE_blockTagText);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 186; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 185;
	        		this.blockTagTextElement();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 188; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,25, this._ctx);
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



	blockTagTextElement() {
	    let localctx = new BlockTagTextElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, JavadocParser.RULE_blockTagTextElement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 190;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JavadocParser.NAME) | (1 << JavadocParser.SPACE) | (1 << JavadocParser.TEXT_CONTENT) | (1 << JavadocParser.STAR) | (1 << JavadocParser.SLASH) | (1 << JavadocParser.BRACE_OPEN) | (1 << JavadocParser.BRACE_CLOSE))) !== 0))) {
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



	inlineTag() {
	    let localctx = new InlineTagContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, JavadocParser.RULE_inlineTag);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 192;
	        this.match(JavadocParser.INLINE_TAG_START);
	        this.state = 193;
	        this.inlineTagName();
	        this.state = 197;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 194;
	                this.match(JavadocParser.SPACE); 
	            }
	            this.state = 199;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
	        }

	        this.state = 201;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JavadocParser.NAME) | (1 << JavadocParser.NEWLINE) | (1 << JavadocParser.SPACE) | (1 << JavadocParser.TEXT_CONTENT) | (1 << JavadocParser.STAR) | (1 << JavadocParser.SLASH) | (1 << JavadocParser.BRACE_OPEN))) !== 0)) {
	            this.state = 200;
	            this.inlineTagContent();
	        }

	        this.state = 203;
	        this.match(JavadocParser.BRACE_CLOSE);
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



	inlineTagName() {
	    let localctx = new InlineTagNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, JavadocParser.RULE_inlineTagName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 205;
	        this.match(JavadocParser.NAME);
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



	inlineTagContent() {
	    let localctx = new InlineTagContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, JavadocParser.RULE_inlineTagContent);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 208; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 207;
	            this.braceContent();
	            this.state = 210; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JavadocParser.NAME) | (1 << JavadocParser.NEWLINE) | (1 << JavadocParser.SPACE) | (1 << JavadocParser.TEXT_CONTENT) | (1 << JavadocParser.STAR) | (1 << JavadocParser.SLASH) | (1 << JavadocParser.BRACE_OPEN))) !== 0));
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



	braceExpression() {
	    let localctx = new BraceExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, JavadocParser.RULE_braceExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 212;
	        this.match(JavadocParser.BRACE_OPEN);
	        this.state = 216;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JavadocParser.NAME) | (1 << JavadocParser.NEWLINE) | (1 << JavadocParser.SPACE) | (1 << JavadocParser.TEXT_CONTENT) | (1 << JavadocParser.STAR) | (1 << JavadocParser.SLASH) | (1 << JavadocParser.BRACE_OPEN))) !== 0)) {
	            this.state = 213;
	            this.braceContent();
	            this.state = 218;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 219;
	        this.match(JavadocParser.BRACE_CLOSE);
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



	braceContent() {
	    let localctx = new BraceContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, JavadocParser.RULE_braceContent);
	    try {
	        this.state = 235;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JavadocParser.BRACE_OPEN:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 221;
	            this.braceExpression();
	            break;
	        case JavadocParser.NAME:
	        case JavadocParser.NEWLINE:
	        case JavadocParser.SPACE:
	        case JavadocParser.TEXT_CONTENT:
	        case JavadocParser.STAR:
	        case JavadocParser.SLASH:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 222;
	            this.braceText();
	            this.state = 232;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,31,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 226;
	                    this._errHandler.sync(this);
	                    var _alt = this._interp.adaptivePredict(this._input,30,this._ctx)
	                    while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                        if(_alt===1) {
	                            this.state = 223;
	                            this.match(JavadocParser.NEWLINE); 
	                        }
	                        this.state = 228;
	                        this._errHandler.sync(this);
	                        _alt = this._interp.adaptivePredict(this._input,30,this._ctx);
	                    }

	                    this.state = 229;
	                    this.braceText(); 
	                }
	                this.state = 234;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,31,this._ctx);
	            }

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



	braceText() {
	    let localctx = new BraceTextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, JavadocParser.RULE_braceText);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 237;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JavadocParser.NAME) | (1 << JavadocParser.NEWLINE) | (1 << JavadocParser.SPACE) | (1 << JavadocParser.TEXT_CONTENT) | (1 << JavadocParser.STAR) | (1 << JavadocParser.SLASH))) !== 0))) {
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

JavadocParser.EOF = antlr4.Token.EOF;
JavadocParser.NAME = 1;
JavadocParser.NEWLINE = 2;
JavadocParser.SPACE = 3;
JavadocParser.TEXT_CONTENT = 4;
JavadocParser.AT = 5;
JavadocParser.STAR = 6;
JavadocParser.SLASH = 7;
JavadocParser.JAVADOC_START = 8;
JavadocParser.JAVADOC_END = 9;
JavadocParser.INLINE_TAG_START = 10;
JavadocParser.BRACE_OPEN = 11;
JavadocParser.BRACE_CLOSE = 12;

JavadocParser.RULE_documentation = 0;
JavadocParser.RULE_documentationContent = 1;
JavadocParser.RULE_skipWhitespace = 2;
JavadocParser.RULE_description = 3;
JavadocParser.RULE_descriptionLine = 4;
JavadocParser.RULE_descriptionLineStart = 5;
JavadocParser.RULE_descriptionLineNoSpaceNoAt = 6;
JavadocParser.RULE_descriptionLineElement = 7;
JavadocParser.RULE_descriptionLineText = 8;
JavadocParser.RULE_descriptionNewline = 9;
JavadocParser.RULE_tagSection = 10;
JavadocParser.RULE_blockTag = 11;
JavadocParser.RULE_blockTagName = 12;
JavadocParser.RULE_blockTagContent = 13;
JavadocParser.RULE_blockTagText = 14;
JavadocParser.RULE_blockTagTextElement = 15;
JavadocParser.RULE_inlineTag = 16;
JavadocParser.RULE_inlineTagName = 17;
JavadocParser.RULE_inlineTagContent = 18;
JavadocParser.RULE_braceExpression = 19;
JavadocParser.RULE_braceContent = 20;
JavadocParser.RULE_braceText = 21;

class DocumentationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavadocParser.RULE_documentation;
    }

	EOF() {
	    return this.getToken(JavadocParser.EOF, 0);
	};

	JAVADOC_START() {
	    return this.getToken(JavadocParser.JAVADOC_START, 0);
	};

	documentationContent() {
	    return this.getTypedRuleContext(DocumentationContentContext,0);
	};

	JAVADOC_END() {
	    return this.getToken(JavadocParser.JAVADOC_END, 0);
	};

	skipWhitespace = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SkipWhitespaceContext);
	    } else {
	        return this.getTypedRuleContext(SkipWhitespaceContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.enterDocumentation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.exitDocumentation(this);
		}
	}


}



class DocumentationContentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavadocParser.RULE_documentationContent;
    }

	description() {
	    return this.getTypedRuleContext(DescriptionContext,0);
	};

	skipWhitespace = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SkipWhitespaceContext);
	    } else {
	        return this.getTypedRuleContext(SkipWhitespaceContext,i);
	    }
	};

	tagSection() {
	    return this.getTypedRuleContext(TagSectionContext,0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JavadocParser.NEWLINE);
	    } else {
	        return this.getToken(JavadocParser.NEWLINE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.enterDocumentationContent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.exitDocumentationContent(this);
		}
	}


}



class SkipWhitespaceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavadocParser.RULE_skipWhitespace;
    }

	SPACE() {
	    return this.getToken(JavadocParser.SPACE, 0);
	};

	NEWLINE() {
	    return this.getToken(JavadocParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.enterSkipWhitespace(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.exitSkipWhitespace(this);
		}
	}


}



class DescriptionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavadocParser.RULE_description;
    }

	descriptionLine = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DescriptionLineContext);
	    } else {
	        return this.getTypedRuleContext(DescriptionLineContext,i);
	    }
	};

	descriptionNewline = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DescriptionNewlineContext);
	    } else {
	        return this.getTypedRuleContext(DescriptionNewlineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.enterDescription(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.exitDescription(this);
		}
	}


}



class DescriptionLineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavadocParser.RULE_descriptionLine;
    }

	descriptionLineStart() {
	    return this.getTypedRuleContext(DescriptionLineStartContext,0);
	};

	descriptionLineElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DescriptionLineElementContext);
	    } else {
	        return this.getTypedRuleContext(DescriptionLineElementContext,i);
	    }
	};

	inlineTag() {
	    return this.getTypedRuleContext(InlineTagContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.enterDescriptionLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.exitDescriptionLine(this);
		}
	}


}



class DescriptionLineStartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavadocParser.RULE_descriptionLineStart;
    }

	SPACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JavadocParser.SPACE);
	    } else {
	        return this.getToken(JavadocParser.SPACE, i);
	    }
	};


	descriptionLineNoSpaceNoAt = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DescriptionLineNoSpaceNoAtContext);
	    } else {
	        return this.getTypedRuleContext(DescriptionLineNoSpaceNoAtContext,i);
	    }
	};

	AT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JavadocParser.AT);
	    } else {
	        return this.getToken(JavadocParser.AT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.enterDescriptionLineStart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.exitDescriptionLineStart(this);
		}
	}


}



class DescriptionLineNoSpaceNoAtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavadocParser.RULE_descriptionLineNoSpaceNoAt;
    }

	TEXT_CONTENT() {
	    return this.getToken(JavadocParser.TEXT_CONTENT, 0);
	};

	NAME() {
	    return this.getToken(JavadocParser.NAME, 0);
	};

	STAR() {
	    return this.getToken(JavadocParser.STAR, 0);
	};

	SLASH() {
	    return this.getToken(JavadocParser.SLASH, 0);
	};

	BRACE_OPEN() {
	    return this.getToken(JavadocParser.BRACE_OPEN, 0);
	};

	BRACE_CLOSE() {
	    return this.getToken(JavadocParser.BRACE_CLOSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.enterDescriptionLineNoSpaceNoAt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.exitDescriptionLineNoSpaceNoAt(this);
		}
	}


}



class DescriptionLineElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavadocParser.RULE_descriptionLineElement;
    }

	inlineTag() {
	    return this.getTypedRuleContext(InlineTagContext,0);
	};

	descriptionLineText() {
	    return this.getTypedRuleContext(DescriptionLineTextContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.enterDescriptionLineElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.exitDescriptionLineElement(this);
		}
	}


}



class DescriptionLineTextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavadocParser.RULE_descriptionLineText;
    }

	descriptionLineNoSpaceNoAt = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DescriptionLineNoSpaceNoAtContext);
	    } else {
	        return this.getTypedRuleContext(DescriptionLineNoSpaceNoAtContext,i);
	    }
	};

	SPACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JavadocParser.SPACE);
	    } else {
	        return this.getToken(JavadocParser.SPACE, i);
	    }
	};


	AT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JavadocParser.AT);
	    } else {
	        return this.getToken(JavadocParser.AT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.enterDescriptionLineText(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.exitDescriptionLineText(this);
		}
	}


}



class DescriptionNewlineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavadocParser.RULE_descriptionNewline;
    }

	NEWLINE() {
	    return this.getToken(JavadocParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.enterDescriptionNewline(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.exitDescriptionNewline(this);
		}
	}


}



class TagSectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavadocParser.RULE_tagSection;
    }

	blockTag = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BlockTagContext);
	    } else {
	        return this.getTypedRuleContext(BlockTagContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.enterTagSection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.exitTagSection(this);
		}
	}


}



class BlockTagContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavadocParser.RULE_blockTag;
    }

	AT() {
	    return this.getToken(JavadocParser.AT, 0);
	};

	blockTagName() {
	    return this.getTypedRuleContext(BlockTagNameContext,0);
	};

	SPACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JavadocParser.SPACE);
	    } else {
	        return this.getToken(JavadocParser.SPACE, i);
	    }
	};


	blockTagContent = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BlockTagContentContext);
	    } else {
	        return this.getTypedRuleContext(BlockTagContentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.enterBlockTag(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.exitBlockTag(this);
		}
	}


}



class BlockTagNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavadocParser.RULE_blockTagName;
    }

	NAME() {
	    return this.getToken(JavadocParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.enterBlockTagName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.exitBlockTagName(this);
		}
	}


}



class BlockTagContentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavadocParser.RULE_blockTagContent;
    }

	blockTagText() {
	    return this.getTypedRuleContext(BlockTagTextContext,0);
	};

	inlineTag() {
	    return this.getTypedRuleContext(InlineTagContext,0);
	};

	NEWLINE() {
	    return this.getToken(JavadocParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.enterBlockTagContent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.exitBlockTagContent(this);
		}
	}


}



class BlockTagTextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavadocParser.RULE_blockTagText;
    }

	blockTagTextElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BlockTagTextElementContext);
	    } else {
	        return this.getTypedRuleContext(BlockTagTextElementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.enterBlockTagText(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.exitBlockTagText(this);
		}
	}


}



class BlockTagTextElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavadocParser.RULE_blockTagTextElement;
    }

	TEXT_CONTENT() {
	    return this.getToken(JavadocParser.TEXT_CONTENT, 0);
	};

	NAME() {
	    return this.getToken(JavadocParser.NAME, 0);
	};

	SPACE() {
	    return this.getToken(JavadocParser.SPACE, 0);
	};

	STAR() {
	    return this.getToken(JavadocParser.STAR, 0);
	};

	SLASH() {
	    return this.getToken(JavadocParser.SLASH, 0);
	};

	BRACE_OPEN() {
	    return this.getToken(JavadocParser.BRACE_OPEN, 0);
	};

	BRACE_CLOSE() {
	    return this.getToken(JavadocParser.BRACE_CLOSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.enterBlockTagTextElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.exitBlockTagTextElement(this);
		}
	}


}



class InlineTagContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavadocParser.RULE_inlineTag;
    }

	INLINE_TAG_START() {
	    return this.getToken(JavadocParser.INLINE_TAG_START, 0);
	};

	inlineTagName() {
	    return this.getTypedRuleContext(InlineTagNameContext,0);
	};

	BRACE_CLOSE() {
	    return this.getToken(JavadocParser.BRACE_CLOSE, 0);
	};

	SPACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JavadocParser.SPACE);
	    } else {
	        return this.getToken(JavadocParser.SPACE, i);
	    }
	};


	inlineTagContent() {
	    return this.getTypedRuleContext(InlineTagContentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.enterInlineTag(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.exitInlineTag(this);
		}
	}


}



class InlineTagNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavadocParser.RULE_inlineTagName;
    }

	NAME() {
	    return this.getToken(JavadocParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.enterInlineTagName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.exitInlineTagName(this);
		}
	}


}



class InlineTagContentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavadocParser.RULE_inlineTagContent;
    }

	braceContent = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BraceContentContext);
	    } else {
	        return this.getTypedRuleContext(BraceContentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.enterInlineTagContent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.exitInlineTagContent(this);
		}
	}


}



class BraceExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavadocParser.RULE_braceExpression;
    }

	BRACE_OPEN() {
	    return this.getToken(JavadocParser.BRACE_OPEN, 0);
	};

	BRACE_CLOSE() {
	    return this.getToken(JavadocParser.BRACE_CLOSE, 0);
	};

	braceContent = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BraceContentContext);
	    } else {
	        return this.getTypedRuleContext(BraceContentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.enterBraceExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.exitBraceExpression(this);
		}
	}


}



class BraceContentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavadocParser.RULE_braceContent;
    }

	braceExpression() {
	    return this.getTypedRuleContext(BraceExpressionContext,0);
	};

	braceText = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BraceTextContext);
	    } else {
	        return this.getTypedRuleContext(BraceTextContext,i);
	    }
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JavadocParser.NEWLINE);
	    } else {
	        return this.getToken(JavadocParser.NEWLINE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.enterBraceContent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.exitBraceContent(this);
		}
	}


}



class BraceTextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavadocParser.RULE_braceText;
    }

	TEXT_CONTENT() {
	    return this.getToken(JavadocParser.TEXT_CONTENT, 0);
	};

	NAME() {
	    return this.getToken(JavadocParser.NAME, 0);
	};

	SPACE() {
	    return this.getToken(JavadocParser.SPACE, 0);
	};

	STAR() {
	    return this.getToken(JavadocParser.STAR, 0);
	};

	SLASH() {
	    return this.getToken(JavadocParser.SLASH, 0);
	};

	NEWLINE() {
	    return this.getToken(JavadocParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.enterBraceText(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavadocParserListener ) {
	        listener.exitBraceText(this);
		}
	}


}




JavadocParser.DocumentationContext = DocumentationContext; 
JavadocParser.DocumentationContentContext = DocumentationContentContext; 
JavadocParser.SkipWhitespaceContext = SkipWhitespaceContext; 
JavadocParser.DescriptionContext = DescriptionContext; 
JavadocParser.DescriptionLineContext = DescriptionLineContext; 
JavadocParser.DescriptionLineStartContext = DescriptionLineStartContext; 
JavadocParser.DescriptionLineNoSpaceNoAtContext = DescriptionLineNoSpaceNoAtContext; 
JavadocParser.DescriptionLineElementContext = DescriptionLineElementContext; 
JavadocParser.DescriptionLineTextContext = DescriptionLineTextContext; 
JavadocParser.DescriptionNewlineContext = DescriptionNewlineContext; 
JavadocParser.TagSectionContext = TagSectionContext; 
JavadocParser.BlockTagContext = BlockTagContext; 
JavadocParser.BlockTagNameContext = BlockTagNameContext; 
JavadocParser.BlockTagContentContext = BlockTagContentContext; 
JavadocParser.BlockTagTextContext = BlockTagTextContext; 
JavadocParser.BlockTagTextElementContext = BlockTagTextElementContext; 
JavadocParser.InlineTagContext = InlineTagContext; 
JavadocParser.InlineTagNameContext = InlineTagNameContext; 
JavadocParser.InlineTagContentContext = InlineTagContentContext; 
JavadocParser.BraceExpressionContext = BraceExpressionContext; 
JavadocParser.BraceContentContext = BraceContentContext; 
JavadocParser.BraceTextContext = BraceTextContext; 
