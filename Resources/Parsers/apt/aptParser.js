// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/apt/apt.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import aptListener from './aptListener.js';
const serializedATN = [4,1,19,178,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,1,0,
3,0,56,8,0,1,0,1,0,1,0,3,0,61,8,0,1,0,1,0,1,0,1,0,1,0,3,0,68,8,0,1,0,1,0,
1,1,1,1,1,2,4,2,75,8,2,11,2,12,2,76,1,3,1,3,1,3,1,4,4,4,83,8,4,11,4,12,4,
84,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,7,5,7,96,8,7,10,7,12,7,99,9,7,1,8,1,
8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,11,1,11,1,11,1,12,5,12,115,8,12,10,
12,12,12,118,9,12,1,13,1,13,1,13,1,13,1,14,1,14,3,14,126,8,14,1,15,1,15,
1,15,1,16,1,16,1,17,4,17,134,8,17,11,17,12,17,135,1,18,1,18,1,18,3,18,141,
8,18,1,19,4,19,144,8,19,11,19,12,19,145,1,20,1,20,3,20,150,8,20,1,21,4,21,
153,8,21,11,21,12,21,154,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,24,1,
24,3,24,167,8,24,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,26,0,0,27,
0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,
52,0,2,2,0,4,4,15,15,4,0,1,4,7,7,12,13,15,15,165,0,55,1,0,0,0,2,71,1,0,0,
0,4,74,1,0,0,0,6,78,1,0,0,0,8,82,1,0,0,0,10,86,1,0,0,0,12,91,1,0,0,0,14,
97,1,0,0,0,16,100,1,0,0,0,18,103,1,0,0,0,20,107,1,0,0,0,22,110,1,0,0,0,24,
116,1,0,0,0,26,119,1,0,0,0,28,125,1,0,0,0,30,127,1,0,0,0,32,130,1,0,0,0,
34,133,1,0,0,0,36,140,1,0,0,0,38,143,1,0,0,0,40,149,1,0,0,0,42,152,1,0,0,
0,44,156,1,0,0,0,46,160,1,0,0,0,48,166,1,0,0,0,50,168,1,0,0,0,52,172,1,0,
0,0,54,56,3,30,15,0,55,54,1,0,0,0,55,56,1,0,0,0,56,57,1,0,0,0,57,58,5,1,
0,0,58,60,5,5,0,0,59,61,3,10,5,0,60,59,1,0,0,0,60,61,1,0,0,0,61,62,1,0,0,
0,62,63,3,28,14,0,63,64,5,5,0,0,64,65,3,4,2,0,65,67,3,8,4,0,66,68,5,5,0,
0,67,66,1,0,0,0,67,68,1,0,0,0,68,69,1,0,0,0,69,70,5,0,0,1,70,1,1,0,0,0,71,
72,7,0,0,0,72,3,1,0,0,0,73,75,3,2,1,0,74,73,1,0,0,0,75,76,1,0,0,0,76,74,
1,0,0,0,76,77,1,0,0,0,77,5,1,0,0,0,78,79,5,5,0,0,79,80,3,4,2,0,80,7,1,0,
0,0,81,83,3,6,3,0,82,81,1,0,0,0,83,84,1,0,0,0,84,82,1,0,0,0,84,85,1,0,0,
0,85,9,1,0,0,0,86,87,5,8,0,0,87,88,3,12,6,0,88,89,5,9,0,0,89,90,5,5,0,0,
90,11,1,0,0,0,91,92,3,18,9,0,92,93,3,14,7,0,93,13,1,0,0,0,94,96,3,16,8,0,
95,94,1,0,0,0,96,99,1,0,0,0,97,95,1,0,0,0,97,98,1,0,0,0,98,15,1,0,0,0,99,
97,1,0,0,0,100,101,5,14,0,0,101,102,3,18,9,0,102,17,1,0,0,0,103,104,5,2,
0,0,104,105,5,10,0,0,105,106,3,34,17,0,106,19,1,0,0,0,107,108,5,12,0,0,108,
109,5,4,0,0,109,21,1,0,0,0,110,111,5,4,0,0,111,112,3,24,12,0,112,23,1,0,
0,0,113,115,3,20,10,0,114,113,1,0,0,0,115,118,1,0,0,0,116,114,1,0,0,0,116,
117,1,0,0,0,117,25,1,0,0,0,118,116,1,0,0,0,119,120,3,22,11,0,120,121,5,13,
0,0,121,122,3,42,21,0,122,27,1,0,0,0,123,126,3,52,26,0,124,126,3,26,13,0,
125,123,1,0,0,0,125,124,1,0,0,0,126,29,1,0,0,0,127,128,5,11,0,0,128,129,
5,5,0,0,129,31,1,0,0,0,130,131,7,1,0,0,131,33,1,0,0,0,132,134,3,32,16,0,
133,132,1,0,0,0,134,135,1,0,0,0,135,133,1,0,0,0,135,136,1,0,0,0,136,35,1,
0,0,0,137,141,5,19,0,0,138,141,3,32,16,0,139,141,5,10,0,0,140,137,1,0,0,
0,140,138,1,0,0,0,140,139,1,0,0,0,141,37,1,0,0,0,142,144,3,36,18,0,143,142,
1,0,0,0,144,145,1,0,0,0,145,143,1,0,0,0,145,146,1,0,0,0,146,39,1,0,0,0,147,
150,3,36,18,0,148,150,5,9,0,0,149,147,1,0,0,0,149,148,1,0,0,0,150,41,1,0,
0,0,151,153,3,40,20,0,152,151,1,0,0,0,153,154,1,0,0,0,154,152,1,0,0,0,154,
155,1,0,0,0,155,43,1,0,0,0,156,157,5,16,0,0,157,158,3,38,19,0,158,159,5,
16,0,0,159,45,1,0,0,0,160,161,5,17,0,0,161,162,3,38,19,0,162,163,5,17,0,
0,163,47,1,0,0,0,164,167,3,44,22,0,165,167,3,46,23,0,166,164,1,0,0,0,166,
165,1,0,0,0,167,49,1,0,0,0,168,169,5,8,0,0,169,170,3,48,24,0,170,171,5,9,
0,0,171,51,1,0,0,0,172,173,5,3,0,0,173,174,5,13,0,0,174,175,3,50,25,0,175,
176,3,42,21,0,176,53,1,0,0,0,14,55,60,67,76,84,97,116,125,135,140,145,149,
154,166];


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



	record() {
	    let localctx = new RecordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, aptParser.RULE_record);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
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
	        if(_la===8) {
	            this.state = 59;
	            localctx.options_ = this.optionsR();
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
	        if(_la===5) {
	            this.state = 66;
	            this.match(aptParser.WSS);
	        }

	        this.state = 69;
	        this.match(aptParser.EOF);
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        _la = this._input.LA(1);
	        if(!(_la===4 || _la===15)) {
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 73;
	            this.wordWithDashSegment();
	            this.state = 76; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===4 || _la===15);
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
	        this.state = 78;
	        this.match(aptParser.WSS);
	        this.state = 79;
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
	        this.state = 82; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 81;
	        		this.component();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 84; 
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
	        this.state = 86;
	        localctx.openingBrace = this.match(aptParser.OptionsStart);
	        this.state = 87;
	        localctx.pairs = this.optionsList();
	        this.state = 88;
	        localctx.closingBrace = this.match(aptParser.OptionsEnd);
	        this.state = 89;
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
	        this.state = 91;
	        localctx.firstOption = this.optionR();
	        this.state = 92;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===14) {
	            this.state = 94;
	            this.additionalOption();
	            this.state = 99;
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
	        this.state = 100;
	        localctx.separator = this.match(aptParser.OptionsSeparator);
	        this.state = 101;
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
	        this.state = 103;
	        localctx.key = this.match(aptParser.OptionName);
	        this.state = 104;
	        this.match(aptParser.OptionNameValueSeparator);
	        this.state = 105;
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
	        this.state = 107;
	        this.match(aptParser.Plus);
	        this.state = 108;
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
	        this.state = 110;
	        localctx.word = this.match(aptParser.Word);
	        this.state = 111;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===12) {
	            this.state = 113;
	            this.wordWithPlus();
	            this.state = 118;
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
	        this.state = 119;
	        localctx.schema = this.uriSchema();
	        this.state = 120;
	        this.match(aptParser.Colon);
	        this.state = 121;
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
	        this.state = 125;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 123;
	            this.cdromURI();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 124;
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
	        this.state = 127;
	        this.match(aptParser.CommentMarker);
	        this.state = 128;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 45214) !== 0))) {
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 133; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 132;
	            this.optionValueSegment();
	            this.state = 135; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 45214) !== 0));
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
	        this.state = 140;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 137;
	            this.match(aptParser.NonWhitespaceNonOptionValueNonSquareRightBracketNonEq);
	            break;
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 7:
	        case 12:
	        case 13:
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 138;
	            this.optionValueSegment();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 139;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 142;
	            this.nonSquareBracketStringSegment();
	            this.state = 145; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 570526) !== 0));
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
	        this.state = 149;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 7:
	        case 10:
	        case 12:
	        case 13:
	        case 15:
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 147;
	            this.nonSquareBracketStringSegment();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 148;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 151;
	            this.nonSpaceStringSegment();
	            this.state = 154; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 571038) !== 0));
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
	        this.state = 156;
	        this.match(aptParser.SingleTick);
	        this.state = 157;
	        this.nonSquareBracketString();
	        this.state = 158;
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
	        this.state = 160;
	        this.match(aptParser.DoubleTick);
	        this.state = 161;
	        this.nonSquareBracketString();
	        this.state = 162;
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
	        this.state = 166;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 164;
	            this.singleTickEnclosedString();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 165;
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
	        this.state = 168;
	        this.match(aptParser.OptionsStart);
	        this.state = 169;
	        this.tickEnclosedString();
	        this.state = 170;
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
	        this.state = 172;
	        this.match(aptParser.CdromSchema);
	        this.state = 173;
	        this.match(aptParser.Colon);
	        this.state = 174;
	        this.enclosedString();
	        this.state = 175;
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
        this.commented = null;
        this.rType = null;
        this.options_ = null;
        this.uri = null;
        this.distribution = null;
        this.components = null;
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


	EOF() {
	    return this.getToken(aptParser.EOF, 0);
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
        this.cId = null;
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
        this.openingBrace = null;
        this.pairs = null;
        this.closingBrace = null;
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
        this.firstOption = null;
        this.restOptions = null;
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
        this.separator = null;
        this.option = null;
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
        this.key = null;
        this.value = null;
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
        this.word = null;
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
        this.word = null;
        this.restWords = null;
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
        this.schema = null;
        this.restOfURI = null;
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

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
