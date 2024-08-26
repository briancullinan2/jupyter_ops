// Generated from Resources/Parsers/bibcode/bibcode.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import bibcodeListener from './bibcodeListener.js';
const serializedATN = [4,1,5,97,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,
1,1,1,1,1,1,1,1,1,2,1,2,1,2,3,2,36,8,2,1,2,1,2,1,2,3,2,41,8,2,1,2,1,2,1,
2,3,2,46,8,2,1,2,1,2,1,2,3,2,51,8,2,1,2,1,2,1,2,3,2,56,8,2,1,3,1,3,1,3,3,
3,61,8,3,1,3,1,3,1,3,3,3,66,8,3,1,3,1,3,1,3,3,3,71,8,3,1,3,1,3,1,3,3,3,76,
8,3,1,4,3,4,79,8,4,1,4,1,4,1,5,1,5,1,6,1,6,4,6,87,8,6,11,6,12,6,88,1,7,1,
7,1,8,1,8,1,9,1,9,1,9,0,0,10,0,2,4,6,8,10,12,14,16,18,0,1,1,0,2,3,107,0,
20,1,0,0,0,2,27,1,0,0,0,4,35,1,0,0,0,6,60,1,0,0,0,8,78,1,0,0,0,10,82,1,0,
0,0,12,86,1,0,0,0,14,90,1,0,0,0,16,92,1,0,0,0,18,94,1,0,0,0,20,21,3,2,1,
0,21,22,3,4,2,0,22,23,3,6,3,0,23,24,3,8,4,0,24,25,3,14,7,0,25,26,5,0,0,1,
26,1,1,0,0,0,27,28,5,4,0,0,28,29,5,4,0,0,29,30,5,4,0,0,30,31,5,4,0,0,31,
3,1,0,0,0,32,36,3,16,8,0,33,36,3,18,9,0,34,36,5,1,0,0,35,32,1,0,0,0,35,33,
1,0,0,0,35,34,1,0,0,0,36,40,1,0,0,0,37,41,3,16,8,0,38,41,3,18,9,0,39,41,
5,1,0,0,40,37,1,0,0,0,40,38,1,0,0,0,40,39,1,0,0,0,41,45,1,0,0,0,42,46,3,
16,8,0,43,46,3,18,9,0,44,46,5,1,0,0,45,42,1,0,0,0,45,43,1,0,0,0,45,44,1,
0,0,0,46,50,1,0,0,0,47,51,3,16,8,0,48,51,3,18,9,0,49,51,5,1,0,0,50,47,1,
0,0,0,50,48,1,0,0,0,50,49,1,0,0,0,51,55,1,0,0,0,52,56,3,16,8,0,53,56,3,18,
9,0,54,56,5,1,0,0,55,52,1,0,0,0,55,53,1,0,0,0,55,54,1,0,0,0,56,5,1,0,0,0,
57,61,3,16,8,0,58,61,3,18,9,0,59,61,5,1,0,0,60,57,1,0,0,0,60,58,1,0,0,0,
60,59,1,0,0,0,61,65,1,0,0,0,62,66,3,16,8,0,63,66,3,18,9,0,64,66,5,1,0,0,
65,62,1,0,0,0,65,63,1,0,0,0,65,64,1,0,0,0,66,70,1,0,0,0,67,71,3,16,8,0,68,
71,3,18,9,0,69,71,5,1,0,0,70,67,1,0,0,0,70,68,1,0,0,0,70,69,1,0,0,0,71,75,
1,0,0,0,72,76,3,16,8,0,73,76,3,18,9,0,74,76,5,1,0,0,75,72,1,0,0,0,75,73,
1,0,0,0,75,74,1,0,0,0,76,7,1,0,0,0,77,79,3,10,5,0,78,77,1,0,0,0,78,79,1,
0,0,0,79,80,1,0,0,0,80,81,3,12,6,0,81,9,1,0,0,0,82,83,3,16,8,0,83,11,1,0,
0,0,84,87,3,18,9,0,85,87,5,1,0,0,86,84,1,0,0,0,86,85,1,0,0,0,87,88,1,0,0,
0,88,86,1,0,0,0,88,89,1,0,0,0,89,13,1,0,0,0,90,91,3,16,8,0,91,15,1,0,0,0,
92,93,7,0,0,0,93,17,1,0,0,0,94,95,5,4,0,0,95,19,1,0,0,0,12,35,40,45,50,55,
60,65,70,75,78,86,88];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class bibcodeParser extends antlr4.Parser {

    static grammarFileName = "bibcode.g4";
    static literalNames = [ null, "'.'" ];
    static symbolicNames = [ null, "DOT", "UPPERLETTER", "LOWERLETTER", 
                             "DIGIT", "WS" ];
    static ruleNames = [ "bibcode", "year", "publish", "volume", "pagesection", 
                         "section", "page", "author", "letter", "digit" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = bibcodeParser.ruleNames;
        this.literalNames = bibcodeParser.literalNames;
        this.symbolicNames = bibcodeParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	bibcode() {
	    let localctx = new BibcodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, bibcodeParser.RULE_bibcode);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.year();
	        this.state = 21;
	        this.publish();
	        this.state = 22;
	        this.volume();
	        this.state = 23;
	        this.pagesection();
	        this.state = 24;
	        this.author();
	        this.state = 25;
	        this.match(bibcodeParser.EOF);
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



	year() {
	    let localctx = new YearContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, bibcodeParser.RULE_year);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this.match(bibcodeParser.DIGIT);
	        this.state = 28;
	        this.match(bibcodeParser.DIGIT);
	        this.state = 29;
	        this.match(bibcodeParser.DIGIT);
	        this.state = 30;
	        this.match(bibcodeParser.DIGIT);
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



	publish() {
	    let localctx = new PublishContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, bibcodeParser.RULE_publish);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case bibcodeParser.UPPERLETTER:
	        case bibcodeParser.LOWERLETTER:
	            this.state = 32;
	            this.letter();
	            break;
	        case bibcodeParser.DIGIT:
	            this.state = 33;
	            this.digit();
	            break;
	        case bibcodeParser.DOT:
	            this.state = 34;
	            this.match(bibcodeParser.DOT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 40;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case bibcodeParser.UPPERLETTER:
	        case bibcodeParser.LOWERLETTER:
	            this.state = 37;
	            this.letter();
	            break;
	        case bibcodeParser.DIGIT:
	            this.state = 38;
	            this.digit();
	            break;
	        case bibcodeParser.DOT:
	            this.state = 39;
	            this.match(bibcodeParser.DOT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 45;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case bibcodeParser.UPPERLETTER:
	        case bibcodeParser.LOWERLETTER:
	            this.state = 42;
	            this.letter();
	            break;
	        case bibcodeParser.DIGIT:
	            this.state = 43;
	            this.digit();
	            break;
	        case bibcodeParser.DOT:
	            this.state = 44;
	            this.match(bibcodeParser.DOT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 50;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case bibcodeParser.UPPERLETTER:
	        case bibcodeParser.LOWERLETTER:
	            this.state = 47;
	            this.letter();
	            break;
	        case bibcodeParser.DIGIT:
	            this.state = 48;
	            this.digit();
	            break;
	        case bibcodeParser.DOT:
	            this.state = 49;
	            this.match(bibcodeParser.DOT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 55;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case bibcodeParser.UPPERLETTER:
	        case bibcodeParser.LOWERLETTER:
	            this.state = 52;
	            this.letter();
	            break;
	        case bibcodeParser.DIGIT:
	            this.state = 53;
	            this.digit();
	            break;
	        case bibcodeParser.DOT:
	            this.state = 54;
	            this.match(bibcodeParser.DOT);
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



	volume() {
	    let localctx = new VolumeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, bibcodeParser.RULE_volume);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case bibcodeParser.UPPERLETTER:
	        case bibcodeParser.LOWERLETTER:
	            this.state = 57;
	            this.letter();
	            break;
	        case bibcodeParser.DIGIT:
	            this.state = 58;
	            this.digit();
	            break;
	        case bibcodeParser.DOT:
	            this.state = 59;
	            this.match(bibcodeParser.DOT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 65;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case bibcodeParser.UPPERLETTER:
	        case bibcodeParser.LOWERLETTER:
	            this.state = 62;
	            this.letter();
	            break;
	        case bibcodeParser.DIGIT:
	            this.state = 63;
	            this.digit();
	            break;
	        case bibcodeParser.DOT:
	            this.state = 64;
	            this.match(bibcodeParser.DOT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 70;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case bibcodeParser.UPPERLETTER:
	        case bibcodeParser.LOWERLETTER:
	            this.state = 67;
	            this.letter();
	            break;
	        case bibcodeParser.DIGIT:
	            this.state = 68;
	            this.digit();
	            break;
	        case bibcodeParser.DOT:
	            this.state = 69;
	            this.match(bibcodeParser.DOT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 75;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case bibcodeParser.UPPERLETTER:
	        case bibcodeParser.LOWERLETTER:
	            this.state = 72;
	            this.letter();
	            break;
	        case bibcodeParser.DIGIT:
	            this.state = 73;
	            this.digit();
	            break;
	        case bibcodeParser.DOT:
	            this.state = 74;
	            this.match(bibcodeParser.DOT);
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



	pagesection() {
	    let localctx = new PagesectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, bibcodeParser.RULE_pagesection);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===bibcodeParser.UPPERLETTER || _la===bibcodeParser.LOWERLETTER) {
	            this.state = 77;
	            this.section();
	        }

	        this.state = 80;
	        this.page();
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



	section() {
	    let localctx = new SectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, bibcodeParser.RULE_section);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.letter();
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



	page() {
	    let localctx = new PageContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, bibcodeParser.RULE_page);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 86;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case bibcodeParser.DIGIT:
	                this.state = 84;
	                this.digit();
	                break;
	            case bibcodeParser.DOT:
	                this.state = 85;
	                this.match(bibcodeParser.DOT);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 88; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===bibcodeParser.DOT || _la===bibcodeParser.DIGIT);
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



	author() {
	    let localctx = new AuthorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, bibcodeParser.RULE_author);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this.letter();
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



	letter() {
	    let localctx = new LetterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, bibcodeParser.RULE_letter);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        _la = this._input.LA(1);
	        if(!(_la===bibcodeParser.UPPERLETTER || _la===bibcodeParser.LOWERLETTER)) {
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



	digit() {
	    let localctx = new DigitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, bibcodeParser.RULE_digit);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.match(bibcodeParser.DIGIT);
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

bibcodeParser.EOF = antlr4.Token.EOF;
bibcodeParser.DOT = 1;
bibcodeParser.UPPERLETTER = 2;
bibcodeParser.LOWERLETTER = 3;
bibcodeParser.DIGIT = 4;
bibcodeParser.WS = 5;

bibcodeParser.RULE_bibcode = 0;
bibcodeParser.RULE_year = 1;
bibcodeParser.RULE_publish = 2;
bibcodeParser.RULE_volume = 3;
bibcodeParser.RULE_pagesection = 4;
bibcodeParser.RULE_section = 5;
bibcodeParser.RULE_page = 6;
bibcodeParser.RULE_author = 7;
bibcodeParser.RULE_letter = 8;
bibcodeParser.RULE_digit = 9;

class BibcodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bibcodeParser.RULE_bibcode;
    }

	year() {
	    return this.getTypedRuleContext(YearContext,0);
	};

	publish() {
	    return this.getTypedRuleContext(PublishContext,0);
	};

	volume() {
	    return this.getTypedRuleContext(VolumeContext,0);
	};

	pagesection() {
	    return this.getTypedRuleContext(PagesectionContext,0);
	};

	author() {
	    return this.getTypedRuleContext(AuthorContext,0);
	};

	EOF() {
	    return this.getToken(bibcodeParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bibcodeListener ) {
	        listener.enterBibcode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bibcodeListener ) {
	        listener.exitBibcode(this);
		}
	}


}



class YearContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bibcodeParser.RULE_year;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(bibcodeParser.DIGIT);
	    } else {
	        return this.getToken(bibcodeParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof bibcodeListener ) {
	        listener.enterYear(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bibcodeListener ) {
	        listener.exitYear(this);
		}
	}


}



class PublishContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bibcodeParser.RULE_publish;
    }

	letter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LetterContext);
	    } else {
	        return this.getTypedRuleContext(LetterContext,i);
	    }
	};

	digit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DigitContext);
	    } else {
	        return this.getTypedRuleContext(DigitContext,i);
	    }
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(bibcodeParser.DOT);
	    } else {
	        return this.getToken(bibcodeParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof bibcodeListener ) {
	        listener.enterPublish(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bibcodeListener ) {
	        listener.exitPublish(this);
		}
	}


}



class VolumeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bibcodeParser.RULE_volume;
    }

	letter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LetterContext);
	    } else {
	        return this.getTypedRuleContext(LetterContext,i);
	    }
	};

	digit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DigitContext);
	    } else {
	        return this.getTypedRuleContext(DigitContext,i);
	    }
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(bibcodeParser.DOT);
	    } else {
	        return this.getToken(bibcodeParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof bibcodeListener ) {
	        listener.enterVolume(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bibcodeListener ) {
	        listener.exitVolume(this);
		}
	}


}



class PagesectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bibcodeParser.RULE_pagesection;
    }

	page() {
	    return this.getTypedRuleContext(PageContext,0);
	};

	section() {
	    return this.getTypedRuleContext(SectionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof bibcodeListener ) {
	        listener.enterPagesection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bibcodeListener ) {
	        listener.exitPagesection(this);
		}
	}


}



class SectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bibcodeParser.RULE_section;
    }

	letter() {
	    return this.getTypedRuleContext(LetterContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof bibcodeListener ) {
	        listener.enterSection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bibcodeListener ) {
	        listener.exitSection(this);
		}
	}


}



class PageContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bibcodeParser.RULE_page;
    }

	digit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DigitContext);
	    } else {
	        return this.getTypedRuleContext(DigitContext,i);
	    }
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(bibcodeParser.DOT);
	    } else {
	        return this.getToken(bibcodeParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof bibcodeListener ) {
	        listener.enterPage(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bibcodeListener ) {
	        listener.exitPage(this);
		}
	}


}



class AuthorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bibcodeParser.RULE_author;
    }

	letter() {
	    return this.getTypedRuleContext(LetterContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof bibcodeListener ) {
	        listener.enterAuthor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bibcodeListener ) {
	        listener.exitAuthor(this);
		}
	}


}



class LetterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bibcodeParser.RULE_letter;
    }

	UPPERLETTER() {
	    return this.getToken(bibcodeParser.UPPERLETTER, 0);
	};

	LOWERLETTER() {
	    return this.getToken(bibcodeParser.LOWERLETTER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bibcodeListener ) {
	        listener.enterLetter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bibcodeListener ) {
	        listener.exitLetter(this);
		}
	}


}



class DigitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bibcodeParser.RULE_digit;
    }

	DIGIT() {
	    return this.getToken(bibcodeParser.DIGIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof bibcodeListener ) {
	        listener.enterDigit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bibcodeListener ) {
	        listener.exitDigit(this);
		}
	}


}




bibcodeParser.BibcodeContext = BibcodeContext; 
bibcodeParser.YearContext = YearContext; 
bibcodeParser.PublishContext = PublishContext; 
bibcodeParser.VolumeContext = VolumeContext; 
bibcodeParser.PagesectionContext = PagesectionContext; 
bibcodeParser.SectionContext = SectionContext; 
bibcodeParser.PageContext = PageContext; 
bibcodeParser.AuthorContext = AuthorContext; 
bibcodeParser.LetterContext = LetterContext; 
bibcodeParser.DigitContext = DigitContext; 
