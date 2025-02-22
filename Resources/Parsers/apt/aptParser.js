// Generated from ./apt/apt.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import aptListener from './aptListener.js';
const serializedATN = [4,1,19,176,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,1,0,
3,0,56,8,0,1,0,1,0,1,0,3,0,61,8,0,1,0,1,0,1,0,1,0,1,0,3,0,68,8,0,1,1,1,1,
1,2,4,2,73,8,2,11,2,12,2,74,1,3,1,3,1,3,1,4,4,4,81,8,4,11,4,12,4,82,1,5,
1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,7,5,7,94,8,7,10,7,12,7,97,9,7,1,8,1,8,1,8,
1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,11,1,11,1,11,1,12,5,12,113,8,12,10,12,12,
12,116,9,12,1,13,1,13,1,13,1,13,1,14,1,14,3,14,124,8,14,1,15,1,15,1,15,1,
16,1,16,1,17,4,17,132,8,17,11,17,12,17,133,1,18,1,18,1,18,3,18,139,8,18,
1,19,4,19,142,8,19,11,19,12,19,143,1,20,1,20,3,20,148,8,20,1,21,4,21,151,
8,21,11,21,12,21,152,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,24,1,24,3,
24,165,8,24,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,26,0,0,27,0,2,
4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,
0,2,2,0,4,4,15,15,4,0,1,4,7,7,12,13,15,15,163,0,55,1,0,0,0,2,69,1,0,0,0,
4,72,1,0,0,0,6,76,1,0,0,0,8,80,1,0,0,0,10,84,1,0,0,0,12,89,1,0,0,0,14,95,
1,0,0,0,16,98,1,0,0,0,18,101,1,0,0,0,20,105,1,0,0,0,22,108,1,0,0,0,24,114,
1,0,0,0,26,117,1,0,0,0,28,123,1,0,0,0,30,125,1,0,0,0,32,128,1,0,0,0,34,131,
1,0,0,0,36,138,1,0,0,0,38,141,1,0,0,0,40,147,1,0,0,0,42,150,1,0,0,0,44,154,
1,0,0,0,46,158,1,0,0,0,48,164,1,0,0,0,50,166,1,0,0,0,52,170,1,0,0,0,54,56,
3,30,15,0,55,54,1,0,0,0,55,56,1,0,0,0,56,57,1,0,0,0,57,58,5,1,0,0,58,60,
5,5,0,0,59,61,3,10,5,0,60,59,1,0,0,0,60,61,1,0,0,0,61,62,1,0,0,0,62,63,3,
28,14,0,63,64,5,5,0,0,64,65,3,4,2,0,65,67,3,8,4,0,66,68,5,5,0,0,67,66,1,
0,0,0,67,68,1,0,0,0,68,1,1,0,0,0,69,70,7,0,0,0,70,3,1,0,0,0,71,73,3,2,1,
0,72,71,1,0,0,0,73,74,1,0,0,0,74,72,1,0,0,0,74,75,1,0,0,0,75,5,1,0,0,0,76,
77,5,5,0,0,77,78,3,4,2,0,78,7,1,0,0,0,79,81,3,6,3,0,80,79,1,0,0,0,81,82,
1,0,0,0,82,80,1,0,0,0,82,83,1,0,0,0,83,9,1,0,0,0,84,85,5,8,0,0,85,86,3,12,
6,0,86,87,5,9,0,0,87,88,5,5,0,0,88,11,1,0,0,0,89,90,3,18,9,0,90,91,3,14,
7,0,91,13,1,0,0,0,92,94,3,16,8,0,93,92,1,0,0,0,94,97,1,0,0,0,95,93,1,0,0,
0,95,96,1,0,0,0,96,15,1,0,0,0,97,95,1,0,0,0,98,99,5,14,0,0,99,100,3,18,9,
0,100,17,1,0,0,0,101,102,5,2,0,0,102,103,5,10,0,0,103,104,3,34,17,0,104,
19,1,0,0,0,105,106,5,12,0,0,106,107,5,4,0,0,107,21,1,0,0,0,108,109,5,4,0,
0,109,110,3,24,12,0,110,23,1,0,0,0,111,113,3,20,10,0,112,111,1,0,0,0,113,
116,1,0,0,0,114,112,1,0,0,0,114,115,1,0,0,0,115,25,1,0,0,0,116,114,1,0,0,
0,117,118,3,22,11,0,118,119,5,13,0,0,119,120,3,42,21,0,120,27,1,0,0,0,121,
124,3,52,26,0,122,124,3,26,13,0,123,121,1,0,0,0,123,122,1,0,0,0,124,29,1,
0,0,0,125,126,5,11,0,0,126,127,5,5,0,0,127,31,1,0,0,0,128,129,7,1,0,0,129,
33,1,0,0,0,130,132,3,32,16,0,131,130,1,0,0,0,132,133,1,0,0,0,133,131,1,0,
0,0,133,134,1,0,0,0,134,35,1,0,0,0,135,139,5,19,0,0,136,139,3,32,16,0,137,
139,5,10,0,0,138,135,1,0,0,0,138,136,1,0,0,0,138,137,1,0,0,0,139,37,1,0,
0,0,140,142,3,36,18,0,141,140,1,0,0,0,142,143,1,0,0,0,143,141,1,0,0,0,143,
144,1,0,0,0,144,39,1,0,0,0,145,148,3,36,18,0,146,148,5,9,0,0,147,145,1,0,
0,0,147,146,1,0,0,0,148,41,1,0,0,0,149,151,3,40,20,0,150,149,1,0,0,0,151,
152,1,0,0,0,152,150,1,0,0,0,152,153,1,0,0,0,153,43,1,0,0,0,154,155,5,16,
0,0,155,156,3,38,19,0,156,157,5,16,0,0,157,45,1,0,0,0,158,159,5,17,0,0,159,
160,3,38,19,0,160,161,5,17,0,0,161,47,1,0,0,0,162,165,3,44,22,0,163,165,
3,46,23,0,164,162,1,0,0,0,164,163,1,0,0,0,165,49,1,0,0,0,166,167,5,8,0,0,
167,168,3,48,24,0,168,169,5,9,0,0,169,51,1,0,0,0,170,171,5,3,0,0,171,172,
5,13,0,0,172,173,3,50,25,0,173,174,3,42,21,0,174,53,1,0,0,0,14,55,60,67,
74,82,95,114,123,133,138,143,147,152,164];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class aptParser extends antlr4.Parser {

    static grammarFileName = "apt.g4";
    static literalNames = [ null, null, null, "'cdrom:'", null, null, null, 
                            null, "'['", "']'", "'='", "'#'", "'+'", "':'", 
                            "','", "'-'", "'''", "'\"'" ];
    static symbolicNames = [ null, "TypeR", "OptionName", "CdromSchema", 
                             "Word", "WSS", "WS", "PunctuationAllowedInOptionValue", 
                             "OptionsStart", "OptionsEnd", "OptionNameValueSeparator", 
                             "CommentMarker", "Plus", "Colon", "OptionsSeparator", 
                             "Dash", "SingleTick", "DoubleTick", "WordChar", 
                             "NonWhitespaceNonOptionValueNonSquareRightBracketNonEq" ];
    static ruleNames = [ "record", "wordWithDashSegment", "wordWithDash", 
                         "component", "componentsR", "optionsR", "optionsList", 
                         "additionalOptions", "additionalOption", "optionR", 
                         "wordWithPlus", "uriSchema", "restSchemaWords", 
                         "genericURI", "uriR", "commenterR", "optionValueSegment", 
                         "optionValue", "nonSquareBracketStringSegment", 
                         "nonSquareBracketString", "nonSpaceStringSegment", 
                         "nonSpaceString", "singleTickEnclosedString", "doubleTickEnclosedString", 
                         "tickEnclosedString", "enclosedString", "cdromURI" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = aptParser.ruleNames;
        this.literalNames = aptParser.literalNames;
        this.symbolicNames = aptParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	record() {
	    let localctx = new RecordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, aptParser.RULE_record);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===aptParser.CommentMarker) {
	            this.state = 54;
	            localctx.commented = this.commenterR();
	        }

	        this.state = 57;
	        localctx.rType = this.match(aptParser.TypeR);
	        this.state = 58;
	        this.match(aptParser.WSS);
	        this.state = 60;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===aptParser.OptionsStart) {
	            this.state = 59;
	            localctx.options = this.optionsR();
	        }

	        this.state = 62;
	        localctx.uri = this.uriR();
	        this.state = 63;
	        this.match(aptParser.WSS);
	        this.state = 64;
	        localctx.distribution = this.wordWithDash();
	        this.state = 65;
	        localctx.components = this.componentsR();
	        this.state = 67;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===aptParser.WSS) {
	            this.state = 66;
	            this.match(aptParser.WSS);
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



	wordWithDashSegment() {
	    let localctx = new WordWithDashSegmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, aptParser.RULE_wordWithDashSegment);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        _la = this._input.LA(1);
	        if(!(_la===aptParser.Word || _la===aptParser.Dash)) {
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



	wordWithDash() {
	    let localctx = new WordWithDashContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, aptParser.RULE_wordWithDash);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 71;
	            this.wordWithDashSegment();
	            this.state = 74; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===aptParser.Word || _la===aptParser.Dash);
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



	component() {
	    let localctx = new ComponentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, aptParser.RULE_component);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.match(aptParser.WSS);
	        this.state = 77;
	        localctx.cId = this.wordWithDash();
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



	componentsR() {
	    let localctx = new ComponentsRContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, aptParser.RULE_componentsR);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 79;
	        		this.component();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 82; 
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



	optionsR() {
	    let localctx = new OptionsRContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, aptParser.RULE_optionsR);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        localctx.openingBrace = this.match(aptParser.OptionsStart);
	        this.state = 85;
	        localctx.pairs = this.optionsList();
	        this.state = 86;
	        localctx.closingBrace = this.match(aptParser.OptionsEnd);
	        this.state = 87;
	        this.match(aptParser.WSS);
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



	optionsList() {
	    let localctx = new OptionsListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, aptParser.RULE_optionsList);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        localctx.firstOption = this.optionR();
	        this.state = 90;
	        localctx.restOptions = this.additionalOptions();
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



	additionalOptions() {
	    let localctx = new AdditionalOptionsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, aptParser.RULE_additionalOptions);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===aptParser.OptionsSeparator) {
	            this.state = 92;
	            this.additionalOption();
	            this.state = 97;
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



	additionalOption() {
	    let localctx = new AdditionalOptionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, aptParser.RULE_additionalOption);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        localctx.separator = this.match(aptParser.OptionsSeparator);
	        this.state = 99;
	        localctx.option = this.optionR();
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



	optionR() {
	    let localctx = new OptionRContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, aptParser.RULE_optionR);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        localctx.key = this.match(aptParser.OptionName);
	        this.state = 102;
	        this.match(aptParser.OptionNameValueSeparator);
	        this.state = 103;
	        localctx.value = this.optionValue();
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



	wordWithPlus() {
	    let localctx = new WordWithPlusContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, aptParser.RULE_wordWithPlus);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this.match(aptParser.Plus);
	        this.state = 106;
	        localctx.word = this.match(aptParser.Word);
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



	uriSchema() {
	    let localctx = new UriSchemaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, aptParser.RULE_uriSchema);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        localctx.word = this.match(aptParser.Word);
	        this.state = 109;
	        localctx.restWords = this.restSchemaWords();
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



	restSchemaWords() {
	    let localctx = new RestSchemaWordsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, aptParser.RULE_restSchemaWords);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===aptParser.Plus) {
	            this.state = 111;
	            this.wordWithPlus();
	            this.state = 116;
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



	genericURI() {
	    let localctx = new GenericURIContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, aptParser.RULE_genericURI);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        localctx.schema = this.uriSchema();
	        this.state = 118;
	        this.match(aptParser.Colon);
	        this.state = 119;
	        localctx.restOfURI = this.nonSpaceString();
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



	uriR() {
	    let localctx = new UriRContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, aptParser.RULE_uriR);
	    try {
	        this.state = 123;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case aptParser.CdromSchema:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 121;
	            this.cdromURI();
	            break;
	        case aptParser.Word:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 122;
	            this.genericURI();
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



	commenterR() {
	    let localctx = new CommenterRContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, aptParser.RULE_commenterR);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        this.match(aptParser.CommentMarker);
	        this.state = 126;
	        this.match(aptParser.WSS);
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



	optionValueSegment() {
	    let localctx = new OptionValueSegmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, aptParser.RULE_optionValueSegment);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << aptParser.TypeR) | (1 << aptParser.OptionName) | (1 << aptParser.CdromSchema) | (1 << aptParser.Word) | (1 << aptParser.PunctuationAllowedInOptionValue) | (1 << aptParser.Plus) | (1 << aptParser.Colon) | (1 << aptParser.Dash))) !== 0))) {
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



	optionValue() {
	    let localctx = new OptionValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, aptParser.RULE_optionValue);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 130;
	            this.optionValueSegment();
	            this.state = 133; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << aptParser.TypeR) | (1 << aptParser.OptionName) | (1 << aptParser.CdromSchema) | (1 << aptParser.Word) | (1 << aptParser.PunctuationAllowedInOptionValue) | (1 << aptParser.Plus) | (1 << aptParser.Colon) | (1 << aptParser.Dash))) !== 0));
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



	nonSquareBracketStringSegment() {
	    let localctx = new NonSquareBracketStringSegmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, aptParser.RULE_nonSquareBracketStringSegment);
	    try {
	        this.state = 138;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case aptParser.NonWhitespaceNonOptionValueNonSquareRightBracketNonEq:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 135;
	            this.match(aptParser.NonWhitespaceNonOptionValueNonSquareRightBracketNonEq);
	            break;
	        case aptParser.TypeR:
	        case aptParser.OptionName:
	        case aptParser.CdromSchema:
	        case aptParser.Word:
	        case aptParser.PunctuationAllowedInOptionValue:
	        case aptParser.Plus:
	        case aptParser.Colon:
	        case aptParser.Dash:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 136;
	            this.optionValueSegment();
	            break;
	        case aptParser.OptionNameValueSeparator:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 137;
	            this.match(aptParser.OptionNameValueSeparator);
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



	nonSquareBracketString() {
	    let localctx = new NonSquareBracketStringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, aptParser.RULE_nonSquareBracketString);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 140;
	            this.nonSquareBracketStringSegment();
	            this.state = 143; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << aptParser.TypeR) | (1 << aptParser.OptionName) | (1 << aptParser.CdromSchema) | (1 << aptParser.Word) | (1 << aptParser.PunctuationAllowedInOptionValue) | (1 << aptParser.OptionNameValueSeparator) | (1 << aptParser.Plus) | (1 << aptParser.Colon) | (1 << aptParser.Dash) | (1 << aptParser.NonWhitespaceNonOptionValueNonSquareRightBracketNonEq))) !== 0));
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



	nonSpaceStringSegment() {
	    let localctx = new NonSpaceStringSegmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, aptParser.RULE_nonSpaceStringSegment);
	    try {
	        this.state = 147;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case aptParser.TypeR:
	        case aptParser.OptionName:
	        case aptParser.CdromSchema:
	        case aptParser.Word:
	        case aptParser.PunctuationAllowedInOptionValue:
	        case aptParser.OptionNameValueSeparator:
	        case aptParser.Plus:
	        case aptParser.Colon:
	        case aptParser.Dash:
	        case aptParser.NonWhitespaceNonOptionValueNonSquareRightBracketNonEq:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 145;
	            this.nonSquareBracketStringSegment();
	            break;
	        case aptParser.OptionsEnd:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 146;
	            this.match(aptParser.OptionsEnd);
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



	nonSpaceString() {
	    let localctx = new NonSpaceStringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, aptParser.RULE_nonSpaceString);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 150; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 149;
	            this.nonSpaceStringSegment();
	            this.state = 152; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << aptParser.TypeR) | (1 << aptParser.OptionName) | (1 << aptParser.CdromSchema) | (1 << aptParser.Word) | (1 << aptParser.PunctuationAllowedInOptionValue) | (1 << aptParser.OptionsEnd) | (1 << aptParser.OptionNameValueSeparator) | (1 << aptParser.Plus) | (1 << aptParser.Colon) | (1 << aptParser.Dash) | (1 << aptParser.NonWhitespaceNonOptionValueNonSquareRightBracketNonEq))) !== 0));
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



	singleTickEnclosedString() {
	    let localctx = new SingleTickEnclosedStringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, aptParser.RULE_singleTickEnclosedString);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this.match(aptParser.SingleTick);
	        this.state = 155;
	        this.nonSquareBracketString();
	        this.state = 156;
	        this.match(aptParser.SingleTick);
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



	doubleTickEnclosedString() {
	    let localctx = new DoubleTickEnclosedStringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, aptParser.RULE_doubleTickEnclosedString);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        this.match(aptParser.DoubleTick);
	        this.state = 159;
	        this.nonSquareBracketString();
	        this.state = 160;
	        this.match(aptParser.DoubleTick);
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



	tickEnclosedString() {
	    let localctx = new TickEnclosedStringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, aptParser.RULE_tickEnclosedString);
	    try {
	        this.state = 164;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case aptParser.SingleTick:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 162;
	            this.singleTickEnclosedString();
	            break;
	        case aptParser.DoubleTick:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 163;
	            this.doubleTickEnclosedString();
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



	enclosedString() {
	    let localctx = new EnclosedStringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, aptParser.RULE_enclosedString);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 166;
	        this.match(aptParser.OptionsStart);
	        this.state = 167;
	        this.tickEnclosedString();
	        this.state = 168;
	        this.match(aptParser.OptionsEnd);
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



	cdromURI() {
	    let localctx = new CdromURIContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, aptParser.RULE_cdromURI);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 170;
	        this.match(aptParser.CdromSchema);
	        this.state = 171;
	        this.match(aptParser.Colon);
	        this.state = 172;
	        this.enclosedString();
	        this.state = 173;
	        this.nonSpaceString();
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

aptParser.EOF = antlr4.Token.EOF;
aptParser.TypeR = 1;
aptParser.OptionName = 2;
aptParser.CdromSchema = 3;
aptParser.Word = 4;
aptParser.WSS = 5;
aptParser.WS = 6;
aptParser.PunctuationAllowedInOptionValue = 7;
aptParser.OptionsStart = 8;
aptParser.OptionsEnd = 9;
aptParser.OptionNameValueSeparator = 10;
aptParser.CommentMarker = 11;
aptParser.Plus = 12;
aptParser.Colon = 13;
aptParser.OptionsSeparator = 14;
aptParser.Dash = 15;
aptParser.SingleTick = 16;
aptParser.DoubleTick = 17;
aptParser.WordChar = 18;
aptParser.NonWhitespaceNonOptionValueNonSquareRightBracketNonEq = 19;

aptParser.RULE_record = 0;
aptParser.RULE_wordWithDashSegment = 1;
aptParser.RULE_wordWithDash = 2;
aptParser.RULE_component = 3;
aptParser.RULE_componentsR = 4;
aptParser.RULE_optionsR = 5;
aptParser.RULE_optionsList = 6;
aptParser.RULE_additionalOptions = 7;
aptParser.RULE_additionalOption = 8;
aptParser.RULE_optionR = 9;
aptParser.RULE_wordWithPlus = 10;
aptParser.RULE_uriSchema = 11;
aptParser.RULE_restSchemaWords = 12;
aptParser.RULE_genericURI = 13;
aptParser.RULE_uriR = 14;
aptParser.RULE_commenterR = 15;
aptParser.RULE_optionValueSegment = 16;
aptParser.RULE_optionValue = 17;
aptParser.RULE_nonSquareBracketStringSegment = 18;
aptParser.RULE_nonSquareBracketString = 19;
aptParser.RULE_nonSpaceStringSegment = 20;
aptParser.RULE_nonSpaceString = 21;
aptParser.RULE_singleTickEnclosedString = 22;
aptParser.RULE_doubleTickEnclosedString = 23;
aptParser.RULE_tickEnclosedString = 24;
aptParser.RULE_enclosedString = 25;
aptParser.RULE_cdromURI = 26;

class RecordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aptParser.RULE_record;
        this.commented = null; // CommenterRContext
        this.rType = null; // Token
        this.options = null; // OptionsRContext
        this.uri = null; // UriRContext
        this.distribution = null; // WordWithDashContext
        this.components = null; // ComponentsRContext
    }

	WSS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(aptParser.WSS);
	    } else {
	        return this.getToken(aptParser.WSS, i);
	    }
	};


	TypeR() {
	    return this.getToken(aptParser.TypeR, 0);
	};

	uriR() {
	    return this.getTypedRuleContext(UriRContext,0);
	};

	wordWithDash() {
	    return this.getTypedRuleContext(WordWithDashContext,0);
	};

	componentsR() {
	    return this.getTypedRuleContext(ComponentsRContext,0);
	};

	commenterR() {
	    return this.getTypedRuleContext(CommenterRContext,0);
	};

	optionsR() {
	    return this.getTypedRuleContext(OptionsRContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.enterRecord(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.exitRecord(this);
		}
	}


}



class WordWithDashSegmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aptParser.RULE_wordWithDashSegment;
    }

	Word() {
	    return this.getToken(aptParser.Word, 0);
	};

	Dash() {
	    return this.getToken(aptParser.Dash, 0);
	};

	enterRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.enterWordWithDashSegment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.exitWordWithDashSegment(this);
		}
	}


}



class WordWithDashContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aptParser.RULE_wordWithDash;
    }

	wordWithDashSegment = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WordWithDashSegmentContext);
	    } else {
	        return this.getTypedRuleContext(WordWithDashSegmentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.enterWordWithDash(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.exitWordWithDash(this);
		}
	}


}



class ComponentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aptParser.RULE_component;
        this.cId = null; // WordWithDashContext
    }

	WSS() {
	    return this.getToken(aptParser.WSS, 0);
	};

	wordWithDash() {
	    return this.getTypedRuleContext(WordWithDashContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.enterComponent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.exitComponent(this);
		}
	}


}



class ComponentsRContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aptParser.RULE_componentsR;
    }

	component = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ComponentContext);
	    } else {
	        return this.getTypedRuleContext(ComponentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.enterComponentsR(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.exitComponentsR(this);
		}
	}


}



class OptionsRContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aptParser.RULE_optionsR;
        this.openingBrace = null; // Token
        this.pairs = null; // OptionsListContext
        this.closingBrace = null; // Token
    }

	WSS() {
	    return this.getToken(aptParser.WSS, 0);
	};

	OptionsStart() {
	    return this.getToken(aptParser.OptionsStart, 0);
	};

	optionsList() {
	    return this.getTypedRuleContext(OptionsListContext,0);
	};

	OptionsEnd() {
	    return this.getToken(aptParser.OptionsEnd, 0);
	};

	enterRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.enterOptionsR(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.exitOptionsR(this);
		}
	}


}



class OptionsListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aptParser.RULE_optionsList;
        this.firstOption = null; // OptionRContext
        this.restOptions = null; // AdditionalOptionsContext
    }

	optionR() {
	    return this.getTypedRuleContext(OptionRContext,0);
	};

	additionalOptions() {
	    return this.getTypedRuleContext(AdditionalOptionsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.enterOptionsList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.exitOptionsList(this);
		}
	}


}



class AdditionalOptionsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aptParser.RULE_additionalOptions;
    }

	additionalOption = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AdditionalOptionContext);
	    } else {
	        return this.getTypedRuleContext(AdditionalOptionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.enterAdditionalOptions(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.exitAdditionalOptions(this);
		}
	}


}



class AdditionalOptionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aptParser.RULE_additionalOption;
        this.separator = null; // Token
        this.option = null; // OptionRContext
    }

	OptionsSeparator() {
	    return this.getToken(aptParser.OptionsSeparator, 0);
	};

	optionR() {
	    return this.getTypedRuleContext(OptionRContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.enterAdditionalOption(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.exitAdditionalOption(this);
		}
	}


}



class OptionRContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aptParser.RULE_optionR;
        this.key = null; // Token
        this.value = null; // OptionValueContext
    }

	OptionNameValueSeparator() {
	    return this.getToken(aptParser.OptionNameValueSeparator, 0);
	};

	OptionName() {
	    return this.getToken(aptParser.OptionName, 0);
	};

	optionValue() {
	    return this.getTypedRuleContext(OptionValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.enterOptionR(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.exitOptionR(this);
		}
	}


}



class WordWithPlusContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aptParser.RULE_wordWithPlus;
        this.word = null; // Token
    }

	Plus() {
	    return this.getToken(aptParser.Plus, 0);
	};

	Word() {
	    return this.getToken(aptParser.Word, 0);
	};

	enterRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.enterWordWithPlus(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.exitWordWithPlus(this);
		}
	}


}



class UriSchemaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aptParser.RULE_uriSchema;
        this.word = null; // Token
        this.restWords = null; // RestSchemaWordsContext
    }

	Word() {
	    return this.getToken(aptParser.Word, 0);
	};

	restSchemaWords() {
	    return this.getTypedRuleContext(RestSchemaWordsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.enterUriSchema(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.exitUriSchema(this);
		}
	}


}



class RestSchemaWordsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aptParser.RULE_restSchemaWords;
    }

	wordWithPlus = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WordWithPlusContext);
	    } else {
	        return this.getTypedRuleContext(WordWithPlusContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.enterRestSchemaWords(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.exitRestSchemaWords(this);
		}
	}


}



class GenericURIContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aptParser.RULE_genericURI;
        this.schema = null; // UriSchemaContext
        this.restOfURI = null; // NonSpaceStringContext
    }

	Colon() {
	    return this.getToken(aptParser.Colon, 0);
	};

	uriSchema() {
	    return this.getTypedRuleContext(UriSchemaContext,0);
	};

	nonSpaceString() {
	    return this.getTypedRuleContext(NonSpaceStringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.enterGenericURI(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.exitGenericURI(this);
		}
	}


}



class UriRContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aptParser.RULE_uriR;
    }

	cdromURI() {
	    return this.getTypedRuleContext(CdromURIContext,0);
	};

	genericURI() {
	    return this.getTypedRuleContext(GenericURIContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.enterUriR(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.exitUriR(this);
		}
	}


}



class CommenterRContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aptParser.RULE_commenterR;
    }

	CommentMarker() {
	    return this.getToken(aptParser.CommentMarker, 0);
	};

	WSS() {
	    return this.getToken(aptParser.WSS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.enterCommenterR(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.exitCommenterR(this);
		}
	}


}



class OptionValueSegmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aptParser.RULE_optionValueSegment;
    }

	Word() {
	    return this.getToken(aptParser.Word, 0);
	};

	PunctuationAllowedInOptionValue() {
	    return this.getToken(aptParser.PunctuationAllowedInOptionValue, 0);
	};

	Dash() {
	    return this.getToken(aptParser.Dash, 0);
	};

	OptionName() {
	    return this.getToken(aptParser.OptionName, 0);
	};

	CdromSchema() {
	    return this.getToken(aptParser.CdromSchema, 0);
	};

	TypeR() {
	    return this.getToken(aptParser.TypeR, 0);
	};

	Plus() {
	    return this.getToken(aptParser.Plus, 0);
	};

	Colon() {
	    return this.getToken(aptParser.Colon, 0);
	};

	enterRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.enterOptionValueSegment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.exitOptionValueSegment(this);
		}
	}


}



class OptionValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aptParser.RULE_optionValue;
    }

	optionValueSegment = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OptionValueSegmentContext);
	    } else {
	        return this.getTypedRuleContext(OptionValueSegmentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.enterOptionValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.exitOptionValue(this);
		}
	}


}



class NonSquareBracketStringSegmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aptParser.RULE_nonSquareBracketStringSegment;
    }

	NonWhitespaceNonOptionValueNonSquareRightBracketNonEq() {
	    return this.getToken(aptParser.NonWhitespaceNonOptionValueNonSquareRightBracketNonEq, 0);
	};

	optionValueSegment() {
	    return this.getTypedRuleContext(OptionValueSegmentContext,0);
	};

	OptionNameValueSeparator() {
	    return this.getToken(aptParser.OptionNameValueSeparator, 0);
	};

	enterRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.enterNonSquareBracketStringSegment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.exitNonSquareBracketStringSegment(this);
		}
	}


}



class NonSquareBracketStringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aptParser.RULE_nonSquareBracketString;
    }

	nonSquareBracketStringSegment = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NonSquareBracketStringSegmentContext);
	    } else {
	        return this.getTypedRuleContext(NonSquareBracketStringSegmentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.enterNonSquareBracketString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.exitNonSquareBracketString(this);
		}
	}


}



class NonSpaceStringSegmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aptParser.RULE_nonSpaceStringSegment;
    }

	nonSquareBracketStringSegment() {
	    return this.getTypedRuleContext(NonSquareBracketStringSegmentContext,0);
	};

	OptionsEnd() {
	    return this.getToken(aptParser.OptionsEnd, 0);
	};

	enterRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.enterNonSpaceStringSegment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.exitNonSpaceStringSegment(this);
		}
	}


}



class NonSpaceStringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aptParser.RULE_nonSpaceString;
    }

	nonSpaceStringSegment = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NonSpaceStringSegmentContext);
	    } else {
	        return this.getTypedRuleContext(NonSpaceStringSegmentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.enterNonSpaceString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.exitNonSpaceString(this);
		}
	}


}



class SingleTickEnclosedStringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aptParser.RULE_singleTickEnclosedString;
    }

	SingleTick = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(aptParser.SingleTick);
	    } else {
	        return this.getToken(aptParser.SingleTick, i);
	    }
	};


	nonSquareBracketString() {
	    return this.getTypedRuleContext(NonSquareBracketStringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.enterSingleTickEnclosedString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.exitSingleTickEnclosedString(this);
		}
	}


}



class DoubleTickEnclosedStringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aptParser.RULE_doubleTickEnclosedString;
    }

	DoubleTick = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(aptParser.DoubleTick);
	    } else {
	        return this.getToken(aptParser.DoubleTick, i);
	    }
	};


	nonSquareBracketString() {
	    return this.getTypedRuleContext(NonSquareBracketStringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.enterDoubleTickEnclosedString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.exitDoubleTickEnclosedString(this);
		}
	}


}



class TickEnclosedStringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aptParser.RULE_tickEnclosedString;
    }

	singleTickEnclosedString() {
	    return this.getTypedRuleContext(SingleTickEnclosedStringContext,0);
	};

	doubleTickEnclosedString() {
	    return this.getTypedRuleContext(DoubleTickEnclosedStringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.enterTickEnclosedString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.exitTickEnclosedString(this);
		}
	}


}



class EnclosedStringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aptParser.RULE_enclosedString;
    }

	OptionsStart() {
	    return this.getToken(aptParser.OptionsStart, 0);
	};

	tickEnclosedString() {
	    return this.getTypedRuleContext(TickEnclosedStringContext,0);
	};

	OptionsEnd() {
	    return this.getToken(aptParser.OptionsEnd, 0);
	};

	enterRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.enterEnclosedString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.exitEnclosedString(this);
		}
	}


}



class CdromURIContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = aptParser.RULE_cdromURI;
    }

	CdromSchema() {
	    return this.getToken(aptParser.CdromSchema, 0);
	};

	Colon() {
	    return this.getToken(aptParser.Colon, 0);
	};

	enclosedString() {
	    return this.getTypedRuleContext(EnclosedStringContext,0);
	};

	nonSpaceString() {
	    return this.getTypedRuleContext(NonSpaceStringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.enterCdromURI(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof aptListener ) {
	        listener.exitCdromURI(this);
		}
	}


}




aptParser.RecordContext = RecordContext; 
aptParser.WordWithDashSegmentContext = WordWithDashSegmentContext; 
aptParser.WordWithDashContext = WordWithDashContext; 
aptParser.ComponentContext = ComponentContext; 
aptParser.ComponentsRContext = ComponentsRContext; 
aptParser.OptionsRContext = OptionsRContext; 
aptParser.OptionsListContext = OptionsListContext; 
aptParser.AdditionalOptionsContext = AdditionalOptionsContext; 
aptParser.AdditionalOptionContext = AdditionalOptionContext; 
aptParser.OptionRContext = OptionRContext; 
aptParser.WordWithPlusContext = WordWithPlusContext; 
aptParser.UriSchemaContext = UriSchemaContext; 
aptParser.RestSchemaWordsContext = RestSchemaWordsContext; 
aptParser.GenericURIContext = GenericURIContext; 
aptParser.UriRContext = UriRContext; 
aptParser.CommenterRContext = CommenterRContext; 
aptParser.OptionValueSegmentContext = OptionValueSegmentContext; 
aptParser.OptionValueContext = OptionValueContext; 
aptParser.NonSquareBracketStringSegmentContext = NonSquareBracketStringSegmentContext; 
aptParser.NonSquareBracketStringContext = NonSquareBracketStringContext; 
aptParser.NonSpaceStringSegmentContext = NonSpaceStringSegmentContext; 
aptParser.NonSpaceStringContext = NonSpaceStringContext; 
aptParser.SingleTickEnclosedStringContext = SingleTickEnclosedStringContext; 
aptParser.DoubleTickEnclosedStringContext = DoubleTickEnclosedStringContext; 
aptParser.TickEnclosedStringContext = TickEnclosedStringContext; 
aptParser.EnclosedStringContext = EnclosedStringContext; 
aptParser.CdromURIContext = CdromURIContext; 
