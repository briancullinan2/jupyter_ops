// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/bibtex/BibTeXParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import BibTeXParserListener from './BibTeXParserListener.js';
const serializedATN = [4,1,26,212,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,1,0,5,0,38,8,0,10,0,12,
0,41,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,
58,8,1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,5,1,5,1,5,4,5,74,8,
5,11,5,12,5,75,1,5,1,5,1,6,1,6,1,6,1,6,1,6,4,6,85,8,6,11,6,12,6,86,1,6,1,
6,1,7,1,7,1,7,1,7,1,7,4,7,96,8,7,11,7,12,7,97,1,7,1,7,1,8,1,8,1,8,1,8,1,
8,4,8,107,8,8,11,8,12,8,108,1,8,1,8,1,9,1,9,1,9,1,9,1,9,4,9,118,8,9,11,9,
12,9,119,1,9,1,9,1,10,1,10,1,10,1,10,1,10,4,10,129,8,10,11,10,12,10,130,
1,10,1,10,1,11,1,11,1,11,1,11,1,11,4,11,140,8,11,11,11,12,11,141,1,11,1,
11,1,12,1,12,1,12,1,12,1,12,4,12,151,8,12,11,12,12,12,152,1,12,1,12,1,13,
1,13,1,13,1,13,1,13,4,13,162,8,13,11,13,12,13,163,1,13,1,13,1,14,1,14,1,
14,1,14,1,14,4,14,173,8,14,11,14,12,14,174,1,14,1,14,1,15,1,15,1,15,1,15,
1,15,4,15,184,8,15,11,15,12,15,185,1,15,1,15,1,16,1,16,1,16,1,16,1,16,4,
16,195,8,16,11,16,12,16,196,1,16,1,16,1,17,1,17,1,17,1,17,1,17,4,17,206,
8,17,11,17,12,17,207,1,17,1,17,1,17,0,0,18,0,2,4,6,8,10,12,14,16,18,20,22,
24,26,28,30,32,34,0,1,1,0,23,24,219,0,39,1,0,0,0,2,57,1,0,0,0,4,59,1,0,0,
0,6,64,1,0,0,0,8,66,1,0,0,0,10,68,1,0,0,0,12,79,1,0,0,0,14,90,1,0,0,0,16,
101,1,0,0,0,18,112,1,0,0,0,20,123,1,0,0,0,22,134,1,0,0,0,24,145,1,0,0,0,
26,156,1,0,0,0,28,167,1,0,0,0,30,178,1,0,0,0,32,189,1,0,0,0,34,200,1,0,0,
0,36,38,3,2,1,0,37,36,1,0,0,0,38,41,1,0,0,0,39,37,1,0,0,0,39,40,1,0,0,0,
40,42,1,0,0,0,41,39,1,0,0,0,42,43,5,0,0,1,43,1,1,0,0,0,44,58,3,10,5,0,45,
58,3,12,6,0,46,58,3,14,7,0,47,58,3,16,8,0,48,58,3,18,9,0,49,58,3,20,10,0,
50,58,3,22,11,0,51,58,3,24,12,0,52,58,3,26,13,0,53,58,3,28,14,0,54,58,3,
30,15,0,55,58,3,32,16,0,56,58,3,34,17,0,57,44,1,0,0,0,57,45,1,0,0,0,57,46,
1,0,0,0,57,47,1,0,0,0,57,48,1,0,0,0,57,49,1,0,0,0,57,50,1,0,0,0,57,51,1,
0,0,0,57,52,1,0,0,0,57,53,1,0,0,0,57,54,1,0,0,0,57,55,1,0,0,0,57,56,1,0,
0,0,58,3,1,0,0,0,59,60,3,6,3,0,60,61,5,15,0,0,61,62,3,8,4,0,62,63,5,16,0,
0,63,5,1,0,0,0,64,65,5,14,0,0,65,7,1,0,0,0,66,67,7,0,0,0,67,9,1,0,0,0,68,
69,5,1,0,0,69,70,5,20,0,0,70,71,5,14,0,0,71,73,5,16,0,0,72,74,3,4,2,0,73,
72,1,0,0,0,74,75,1,0,0,0,75,73,1,0,0,0,75,76,1,0,0,0,76,77,1,0,0,0,77,78,
5,21,0,0,78,11,1,0,0,0,79,80,5,2,0,0,80,81,5,20,0,0,81,82,5,14,0,0,82,84,
5,16,0,0,83,85,3,4,2,0,84,83,1,0,0,0,85,86,1,0,0,0,86,84,1,0,0,0,86,87,1,
0,0,0,87,88,1,0,0,0,88,89,5,21,0,0,89,13,1,0,0,0,90,91,5,3,0,0,91,92,5,20,
0,0,92,93,5,14,0,0,93,95,5,16,0,0,94,96,3,4,2,0,95,94,1,0,0,0,96,97,1,0,
0,0,97,95,1,0,0,0,97,98,1,0,0,0,98,99,1,0,0,0,99,100,5,21,0,0,100,15,1,0,
0,0,101,102,5,4,0,0,102,103,5,20,0,0,103,104,5,14,0,0,104,106,5,16,0,0,105,
107,3,4,2,0,106,105,1,0,0,0,107,108,1,0,0,0,108,106,1,0,0,0,108,109,1,0,
0,0,109,110,1,0,0,0,110,111,5,21,0,0,111,17,1,0,0,0,112,113,5,5,0,0,113,
114,5,20,0,0,114,115,5,14,0,0,115,117,5,16,0,0,116,118,3,4,2,0,117,116,1,
0,0,0,118,119,1,0,0,0,119,117,1,0,0,0,119,120,1,0,0,0,120,121,1,0,0,0,121,
122,5,21,0,0,122,19,1,0,0,0,123,124,5,6,0,0,124,125,5,20,0,0,125,126,5,14,
0,0,126,128,5,16,0,0,127,129,3,4,2,0,128,127,1,0,0,0,129,130,1,0,0,0,130,
128,1,0,0,0,130,131,1,0,0,0,131,132,1,0,0,0,132,133,5,21,0,0,133,21,1,0,
0,0,134,135,5,7,0,0,135,136,5,20,0,0,136,137,5,14,0,0,137,139,5,16,0,0,138,
140,3,4,2,0,139,138,1,0,0,0,140,141,1,0,0,0,141,139,1,0,0,0,141,142,1,0,
0,0,142,143,1,0,0,0,143,144,5,21,0,0,144,23,1,0,0,0,145,146,5,8,0,0,146,
147,5,20,0,0,147,148,5,14,0,0,148,150,5,16,0,0,149,151,3,4,2,0,150,149,1,
0,0,0,151,152,1,0,0,0,152,150,1,0,0,0,152,153,1,0,0,0,153,154,1,0,0,0,154,
155,5,21,0,0,155,25,1,0,0,0,156,157,5,9,0,0,157,158,5,20,0,0,158,159,5,14,
0,0,159,161,5,16,0,0,160,162,3,4,2,0,161,160,1,0,0,0,162,163,1,0,0,0,163,
161,1,0,0,0,163,164,1,0,0,0,164,165,1,0,0,0,165,166,5,21,0,0,166,27,1,0,
0,0,167,168,5,10,0,0,168,169,5,20,0,0,169,170,5,14,0,0,170,172,5,16,0,0,
171,173,3,4,2,0,172,171,1,0,0,0,173,174,1,0,0,0,174,172,1,0,0,0,174,175,
1,0,0,0,175,176,1,0,0,0,176,177,5,21,0,0,177,29,1,0,0,0,178,179,5,11,0,0,
179,180,5,20,0,0,180,181,5,14,0,0,181,183,5,16,0,0,182,184,3,4,2,0,183,182,
1,0,0,0,184,185,1,0,0,0,185,183,1,0,0,0,185,186,1,0,0,0,186,187,1,0,0,0,
187,188,5,21,0,0,188,31,1,0,0,0,189,190,5,12,0,0,190,191,5,20,0,0,191,192,
5,14,0,0,192,194,5,16,0,0,193,195,3,4,2,0,194,193,1,0,0,0,195,196,1,0,0,
0,196,194,1,0,0,0,196,197,1,0,0,0,197,198,1,0,0,0,198,199,5,21,0,0,199,33,
1,0,0,0,200,201,5,13,0,0,201,202,5,20,0,0,202,203,5,14,0,0,203,205,5,16,
0,0,204,206,3,4,2,0,205,204,1,0,0,0,206,207,1,0,0,0,207,205,1,0,0,0,207,
208,1,0,0,0,208,209,1,0,0,0,209,210,5,21,0,0,210,35,1,0,0,0,15,39,57,75,
86,97,108,119,130,141,152,163,174,185,196,207];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class BibTeXParser extends antlr4.Parser {

    static grammarFileName = "BibTeXParser.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, "'='", 
                            "','", "'\"'", "'('", "')'", "'{'", "'}'", "'@'" ];
    static symbolicNames = [ null, "ARTICLE", "BOOK", "BOOKLET", "INBOOK", 
                             "INCOLLECTION", "INPROCEEDINGS", "PROCEEDINGS", 
                             "MANUAL", "MASTERTHESIS", "PHDTHESIS", "MISC", 
                             "TECHREPORT", "UNPUBLISHED", "IDENTIFIER", 
                             "EQ", "COMMA", "DQUOTE", "LPAREN", "RPAREN", 
                             "LBRACE", "RBRACE", "AT", "STRING_LITERAL", 
                             "INTEGER_LITERAL", "WS", "LINE_COMMENT" ];
    static ruleNames = [ "bibTex", "entry", "field", "key", "value", "article", 
                         "book", "booklet", "inbook", "incollection", "inproceedings", 
                         "proceedings", "manual", "mastersthesis", "phdthesis", 
                         "misc", "techreport", "unpublished" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = BibTeXParser.ruleNames;
        this.literalNames = BibTeXParser.literalNames;
        this.symbolicNames = BibTeXParser.symbolicNames;
    }



	bibTex() {
	    let localctx = new BibTexContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, BibTeXParser.RULE_bibTex);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 16382) !== 0)) {
	            this.state = 36;
	            this.entry();
	            this.state = 41;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 42;
	        this.match(BibTeXParser.EOF);
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
	    this.enterRule(localctx, 2, BibTeXParser.RULE_entry);
	    try {
	        this.state = 57;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 44;
	            this.article();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 45;
	            this.book();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 46;
	            this.booklet();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 47;
	            this.inbook();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 48;
	            this.incollection();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 49;
	            this.inproceedings();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 50;
	            this.proceedings();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 51;
	            this.manual();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 52;
	            this.mastersthesis();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 53;
	            this.phdthesis();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 54;
	            this.misc();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 55;
	            this.techreport();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 56;
	            this.unpublished();
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



	field() {
	    let localctx = new FieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, BibTeXParser.RULE_field);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.key();
	        this.state = 60;
	        this.match(BibTeXParser.EQ);
	        this.state = 61;
	        this.value();
	        this.state = 62;
	        this.match(BibTeXParser.COMMA);
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
	    this.enterRule(localctx, 6, BibTeXParser.RULE_key);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(BibTeXParser.IDENTIFIER);
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
	    this.enterRule(localctx, 8, BibTeXParser.RULE_value);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        _la = this._input.LA(1);
	        if(!(_la===23 || _la===24)) {
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



	article() {
	    let localctx = new ArticleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, BibTeXParser.RULE_article);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.match(BibTeXParser.ARTICLE);
	        this.state = 69;
	        this.match(BibTeXParser.LBRACE);
	        this.state = 70;
	        this.match(BibTeXParser.IDENTIFIER);
	        this.state = 71;
	        this.match(BibTeXParser.COMMA);
	        this.state = 73; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 72;
	            this.field();
	            this.state = 75; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===14);
	        this.state = 77;
	        this.match(BibTeXParser.RBRACE);
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



	book() {
	    let localctx = new BookContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, BibTeXParser.RULE_book);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.match(BibTeXParser.BOOK);
	        this.state = 80;
	        this.match(BibTeXParser.LBRACE);
	        this.state = 81;
	        this.match(BibTeXParser.IDENTIFIER);
	        this.state = 82;
	        this.match(BibTeXParser.COMMA);
	        this.state = 84; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 83;
	            this.field();
	            this.state = 86; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===14);
	        this.state = 88;
	        this.match(BibTeXParser.RBRACE);
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



	booklet() {
	    let localctx = new BookletContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, BibTeXParser.RULE_booklet);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this.match(BibTeXParser.BOOKLET);
	        this.state = 91;
	        this.match(BibTeXParser.LBRACE);
	        this.state = 92;
	        this.match(BibTeXParser.IDENTIFIER);
	        this.state = 93;
	        this.match(BibTeXParser.COMMA);
	        this.state = 95; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 94;
	            this.field();
	            this.state = 97; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===14);
	        this.state = 99;
	        this.match(BibTeXParser.RBRACE);
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



	inbook() {
	    let localctx = new InbookContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, BibTeXParser.RULE_inbook);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.match(BibTeXParser.INBOOK);
	        this.state = 102;
	        this.match(BibTeXParser.LBRACE);
	        this.state = 103;
	        this.match(BibTeXParser.IDENTIFIER);
	        this.state = 104;
	        this.match(BibTeXParser.COMMA);
	        this.state = 106; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 105;
	            this.field();
	            this.state = 108; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===14);
	        this.state = 110;
	        this.match(BibTeXParser.RBRACE);
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



	incollection() {
	    let localctx = new IncollectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, BibTeXParser.RULE_incollection);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        this.match(BibTeXParser.INCOLLECTION);
	        this.state = 113;
	        this.match(BibTeXParser.LBRACE);
	        this.state = 114;
	        this.match(BibTeXParser.IDENTIFIER);
	        this.state = 115;
	        this.match(BibTeXParser.COMMA);
	        this.state = 117; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 116;
	            this.field();
	            this.state = 119; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===14);
	        this.state = 121;
	        this.match(BibTeXParser.RBRACE);
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



	inproceedings() {
	    let localctx = new InproceedingsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, BibTeXParser.RULE_inproceedings);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        this.match(BibTeXParser.INPROCEEDINGS);
	        this.state = 124;
	        this.match(BibTeXParser.LBRACE);
	        this.state = 125;
	        this.match(BibTeXParser.IDENTIFIER);
	        this.state = 126;
	        this.match(BibTeXParser.COMMA);
	        this.state = 128; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 127;
	            this.field();
	            this.state = 130; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===14);
	        this.state = 132;
	        this.match(BibTeXParser.RBRACE);
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



	proceedings() {
	    let localctx = new ProceedingsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, BibTeXParser.RULE_proceedings);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this.match(BibTeXParser.PROCEEDINGS);
	        this.state = 135;
	        this.match(BibTeXParser.LBRACE);
	        this.state = 136;
	        this.match(BibTeXParser.IDENTIFIER);
	        this.state = 137;
	        this.match(BibTeXParser.COMMA);
	        this.state = 139; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 138;
	            this.field();
	            this.state = 141; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===14);
	        this.state = 143;
	        this.match(BibTeXParser.RBRACE);
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



	manual() {
	    let localctx = new ManualContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, BibTeXParser.RULE_manual);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        this.match(BibTeXParser.MANUAL);
	        this.state = 146;
	        this.match(BibTeXParser.LBRACE);
	        this.state = 147;
	        this.match(BibTeXParser.IDENTIFIER);
	        this.state = 148;
	        this.match(BibTeXParser.COMMA);
	        this.state = 150; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 149;
	            this.field();
	            this.state = 152; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===14);
	        this.state = 154;
	        this.match(BibTeXParser.RBRACE);
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



	mastersthesis() {
	    let localctx = new MastersthesisContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, BibTeXParser.RULE_mastersthesis);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
	        this.match(BibTeXParser.MASTERTHESIS);
	        this.state = 157;
	        this.match(BibTeXParser.LBRACE);
	        this.state = 158;
	        this.match(BibTeXParser.IDENTIFIER);
	        this.state = 159;
	        this.match(BibTeXParser.COMMA);
	        this.state = 161; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 160;
	            this.field();
	            this.state = 163; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===14);
	        this.state = 165;
	        this.match(BibTeXParser.RBRACE);
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



	phdthesis() {
	    let localctx = new PhdthesisContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, BibTeXParser.RULE_phdthesis);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this.match(BibTeXParser.PHDTHESIS);
	        this.state = 168;
	        this.match(BibTeXParser.LBRACE);
	        this.state = 169;
	        this.match(BibTeXParser.IDENTIFIER);
	        this.state = 170;
	        this.match(BibTeXParser.COMMA);
	        this.state = 172; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 171;
	            this.field();
	            this.state = 174; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===14);
	        this.state = 176;
	        this.match(BibTeXParser.RBRACE);
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
	    this.enterRule(localctx, 30, BibTeXParser.RULE_misc);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        this.match(BibTeXParser.MISC);
	        this.state = 179;
	        this.match(BibTeXParser.LBRACE);
	        this.state = 180;
	        this.match(BibTeXParser.IDENTIFIER);
	        this.state = 181;
	        this.match(BibTeXParser.COMMA);
	        this.state = 183; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 182;
	            this.field();
	            this.state = 185; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===14);
	        this.state = 187;
	        this.match(BibTeXParser.RBRACE);
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



	techreport() {
	    let localctx = new TechreportContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, BibTeXParser.RULE_techreport);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 189;
	        this.match(BibTeXParser.TECHREPORT);
	        this.state = 190;
	        this.match(BibTeXParser.LBRACE);
	        this.state = 191;
	        this.match(BibTeXParser.IDENTIFIER);
	        this.state = 192;
	        this.match(BibTeXParser.COMMA);
	        this.state = 194; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 193;
	            this.field();
	            this.state = 196; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===14);
	        this.state = 198;
	        this.match(BibTeXParser.RBRACE);
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



	unpublished() {
	    let localctx = new UnpublishedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, BibTeXParser.RULE_unpublished);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 200;
	        this.match(BibTeXParser.UNPUBLISHED);
	        this.state = 201;
	        this.match(BibTeXParser.LBRACE);
	        this.state = 202;
	        this.match(BibTeXParser.IDENTIFIER);
	        this.state = 203;
	        this.match(BibTeXParser.COMMA);
	        this.state = 205; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 204;
	            this.field();
	            this.state = 207; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===14);
	        this.state = 209;
	        this.match(BibTeXParser.RBRACE);
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

BibTeXParser.EOF = antlr4.Token.EOF;
BibTeXParser.ARTICLE = 1;
BibTeXParser.BOOK = 2;
BibTeXParser.BOOKLET = 3;
BibTeXParser.INBOOK = 4;
BibTeXParser.INCOLLECTION = 5;
BibTeXParser.INPROCEEDINGS = 6;
BibTeXParser.PROCEEDINGS = 7;
BibTeXParser.MANUAL = 8;
BibTeXParser.MASTERTHESIS = 9;
BibTeXParser.PHDTHESIS = 10;
BibTeXParser.MISC = 11;
BibTeXParser.TECHREPORT = 12;
BibTeXParser.UNPUBLISHED = 13;
BibTeXParser.IDENTIFIER = 14;
BibTeXParser.EQ = 15;
BibTeXParser.COMMA = 16;
BibTeXParser.DQUOTE = 17;
BibTeXParser.LPAREN = 18;
BibTeXParser.RPAREN = 19;
BibTeXParser.LBRACE = 20;
BibTeXParser.RBRACE = 21;
BibTeXParser.AT = 22;
BibTeXParser.STRING_LITERAL = 23;
BibTeXParser.INTEGER_LITERAL = 24;
BibTeXParser.WS = 25;
BibTeXParser.LINE_COMMENT = 26;

BibTeXParser.RULE_bibTex = 0;
BibTeXParser.RULE_entry = 1;
BibTeXParser.RULE_field = 2;
BibTeXParser.RULE_key = 3;
BibTeXParser.RULE_value = 4;
BibTeXParser.RULE_article = 5;
BibTeXParser.RULE_book = 6;
BibTeXParser.RULE_booklet = 7;
BibTeXParser.RULE_inbook = 8;
BibTeXParser.RULE_incollection = 9;
BibTeXParser.RULE_inproceedings = 10;
BibTeXParser.RULE_proceedings = 11;
BibTeXParser.RULE_manual = 12;
BibTeXParser.RULE_mastersthesis = 13;
BibTeXParser.RULE_phdthesis = 14;
BibTeXParser.RULE_misc = 15;
BibTeXParser.RULE_techreport = 16;
BibTeXParser.RULE_unpublished = 17;

class BibTexContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BibTeXParser.RULE_bibTex;
    }

	EOF() {
	    return this.getToken(BibTeXParser.EOF, 0);
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
	    if(listener instanceof BibTeXParserListener ) {
	        listener.enterBibTex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BibTeXParserListener ) {
	        listener.exitBibTex(this);
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
        this.ruleIndex = BibTeXParser.RULE_entry;
    }

	article() {
	    return this.getTypedRuleContext(ArticleContext,0);
	};

	book() {
	    return this.getTypedRuleContext(BookContext,0);
	};

	booklet() {
	    return this.getTypedRuleContext(BookletContext,0);
	};

	inbook() {
	    return this.getTypedRuleContext(InbookContext,0);
	};

	incollection() {
	    return this.getTypedRuleContext(IncollectionContext,0);
	};

	inproceedings() {
	    return this.getTypedRuleContext(InproceedingsContext,0);
	};

	proceedings() {
	    return this.getTypedRuleContext(ProceedingsContext,0);
	};

	manual() {
	    return this.getTypedRuleContext(ManualContext,0);
	};

	mastersthesis() {
	    return this.getTypedRuleContext(MastersthesisContext,0);
	};

	phdthesis() {
	    return this.getTypedRuleContext(PhdthesisContext,0);
	};

	misc() {
	    return this.getTypedRuleContext(MiscContext,0);
	};

	techreport() {
	    return this.getTypedRuleContext(TechreportContext,0);
	};

	unpublished() {
	    return this.getTypedRuleContext(UnpublishedContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BibTeXParserListener ) {
	        listener.enterEntry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BibTeXParserListener ) {
	        listener.exitEntry(this);
		}
	}


}



class FieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BibTeXParser.RULE_field;
    }

	key() {
	    return this.getTypedRuleContext(KeyContext,0);
	};

	EQ() {
	    return this.getToken(BibTeXParser.EQ, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	COMMA() {
	    return this.getToken(BibTeXParser.COMMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BibTeXParserListener ) {
	        listener.enterField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BibTeXParserListener ) {
	        listener.exitField(this);
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
        this.ruleIndex = BibTeXParser.RULE_key;
    }

	IDENTIFIER() {
	    return this.getToken(BibTeXParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BibTeXParserListener ) {
	        listener.enterKey(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BibTeXParserListener ) {
	        listener.exitKey(this);
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
        this.ruleIndex = BibTeXParser.RULE_value;
    }

	INTEGER_LITERAL() {
	    return this.getToken(BibTeXParser.INTEGER_LITERAL, 0);
	};

	STRING_LITERAL() {
	    return this.getToken(BibTeXParser.STRING_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BibTeXParserListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BibTeXParserListener ) {
	        listener.exitValue(this);
		}
	}


}



class ArticleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BibTeXParser.RULE_article;
    }

	ARTICLE() {
	    return this.getToken(BibTeXParser.ARTICLE, 0);
	};

	LBRACE() {
	    return this.getToken(BibTeXParser.LBRACE, 0);
	};

	IDENTIFIER() {
	    return this.getToken(BibTeXParser.IDENTIFIER, 0);
	};

	COMMA() {
	    return this.getToken(BibTeXParser.COMMA, 0);
	};

	RBRACE() {
	    return this.getToken(BibTeXParser.RBRACE, 0);
	};

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BibTeXParserListener ) {
	        listener.enterArticle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BibTeXParserListener ) {
	        listener.exitArticle(this);
		}
	}


}



class BookContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BibTeXParser.RULE_book;
    }

	BOOK() {
	    return this.getToken(BibTeXParser.BOOK, 0);
	};

	LBRACE() {
	    return this.getToken(BibTeXParser.LBRACE, 0);
	};

	IDENTIFIER() {
	    return this.getToken(BibTeXParser.IDENTIFIER, 0);
	};

	COMMA() {
	    return this.getToken(BibTeXParser.COMMA, 0);
	};

	RBRACE() {
	    return this.getToken(BibTeXParser.RBRACE, 0);
	};

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BibTeXParserListener ) {
	        listener.enterBook(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BibTeXParserListener ) {
	        listener.exitBook(this);
		}
	}


}



class BookletContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BibTeXParser.RULE_booklet;
    }

	BOOKLET() {
	    return this.getToken(BibTeXParser.BOOKLET, 0);
	};

	LBRACE() {
	    return this.getToken(BibTeXParser.LBRACE, 0);
	};

	IDENTIFIER() {
	    return this.getToken(BibTeXParser.IDENTIFIER, 0);
	};

	COMMA() {
	    return this.getToken(BibTeXParser.COMMA, 0);
	};

	RBRACE() {
	    return this.getToken(BibTeXParser.RBRACE, 0);
	};

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BibTeXParserListener ) {
	        listener.enterBooklet(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BibTeXParserListener ) {
	        listener.exitBooklet(this);
		}
	}


}



class InbookContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BibTeXParser.RULE_inbook;
    }

	INBOOK() {
	    return this.getToken(BibTeXParser.INBOOK, 0);
	};

	LBRACE() {
	    return this.getToken(BibTeXParser.LBRACE, 0);
	};

	IDENTIFIER() {
	    return this.getToken(BibTeXParser.IDENTIFIER, 0);
	};

	COMMA() {
	    return this.getToken(BibTeXParser.COMMA, 0);
	};

	RBRACE() {
	    return this.getToken(BibTeXParser.RBRACE, 0);
	};

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BibTeXParserListener ) {
	        listener.enterInbook(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BibTeXParserListener ) {
	        listener.exitInbook(this);
		}
	}


}



class IncollectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BibTeXParser.RULE_incollection;
    }

	INCOLLECTION() {
	    return this.getToken(BibTeXParser.INCOLLECTION, 0);
	};

	LBRACE() {
	    return this.getToken(BibTeXParser.LBRACE, 0);
	};

	IDENTIFIER() {
	    return this.getToken(BibTeXParser.IDENTIFIER, 0);
	};

	COMMA() {
	    return this.getToken(BibTeXParser.COMMA, 0);
	};

	RBRACE() {
	    return this.getToken(BibTeXParser.RBRACE, 0);
	};

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BibTeXParserListener ) {
	        listener.enterIncollection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BibTeXParserListener ) {
	        listener.exitIncollection(this);
		}
	}


}



class InproceedingsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BibTeXParser.RULE_inproceedings;
    }

	INPROCEEDINGS() {
	    return this.getToken(BibTeXParser.INPROCEEDINGS, 0);
	};

	LBRACE() {
	    return this.getToken(BibTeXParser.LBRACE, 0);
	};

	IDENTIFIER() {
	    return this.getToken(BibTeXParser.IDENTIFIER, 0);
	};

	COMMA() {
	    return this.getToken(BibTeXParser.COMMA, 0);
	};

	RBRACE() {
	    return this.getToken(BibTeXParser.RBRACE, 0);
	};

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BibTeXParserListener ) {
	        listener.enterInproceedings(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BibTeXParserListener ) {
	        listener.exitInproceedings(this);
		}
	}


}



class ProceedingsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BibTeXParser.RULE_proceedings;
    }

	PROCEEDINGS() {
	    return this.getToken(BibTeXParser.PROCEEDINGS, 0);
	};

	LBRACE() {
	    return this.getToken(BibTeXParser.LBRACE, 0);
	};

	IDENTIFIER() {
	    return this.getToken(BibTeXParser.IDENTIFIER, 0);
	};

	COMMA() {
	    return this.getToken(BibTeXParser.COMMA, 0);
	};

	RBRACE() {
	    return this.getToken(BibTeXParser.RBRACE, 0);
	};

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BibTeXParserListener ) {
	        listener.enterProceedings(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BibTeXParserListener ) {
	        listener.exitProceedings(this);
		}
	}


}



class ManualContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BibTeXParser.RULE_manual;
    }

	MANUAL() {
	    return this.getToken(BibTeXParser.MANUAL, 0);
	};

	LBRACE() {
	    return this.getToken(BibTeXParser.LBRACE, 0);
	};

	IDENTIFIER() {
	    return this.getToken(BibTeXParser.IDENTIFIER, 0);
	};

	COMMA() {
	    return this.getToken(BibTeXParser.COMMA, 0);
	};

	RBRACE() {
	    return this.getToken(BibTeXParser.RBRACE, 0);
	};

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BibTeXParserListener ) {
	        listener.enterManual(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BibTeXParserListener ) {
	        listener.exitManual(this);
		}
	}


}



class MastersthesisContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BibTeXParser.RULE_mastersthesis;
    }

	MASTERTHESIS() {
	    return this.getToken(BibTeXParser.MASTERTHESIS, 0);
	};

	LBRACE() {
	    return this.getToken(BibTeXParser.LBRACE, 0);
	};

	IDENTIFIER() {
	    return this.getToken(BibTeXParser.IDENTIFIER, 0);
	};

	COMMA() {
	    return this.getToken(BibTeXParser.COMMA, 0);
	};

	RBRACE() {
	    return this.getToken(BibTeXParser.RBRACE, 0);
	};

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BibTeXParserListener ) {
	        listener.enterMastersthesis(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BibTeXParserListener ) {
	        listener.exitMastersthesis(this);
		}
	}


}



class PhdthesisContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BibTeXParser.RULE_phdthesis;
    }

	PHDTHESIS() {
	    return this.getToken(BibTeXParser.PHDTHESIS, 0);
	};

	LBRACE() {
	    return this.getToken(BibTeXParser.LBRACE, 0);
	};

	IDENTIFIER() {
	    return this.getToken(BibTeXParser.IDENTIFIER, 0);
	};

	COMMA() {
	    return this.getToken(BibTeXParser.COMMA, 0);
	};

	RBRACE() {
	    return this.getToken(BibTeXParser.RBRACE, 0);
	};

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BibTeXParserListener ) {
	        listener.enterPhdthesis(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BibTeXParserListener ) {
	        listener.exitPhdthesis(this);
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
        this.ruleIndex = BibTeXParser.RULE_misc;
    }

	MISC() {
	    return this.getToken(BibTeXParser.MISC, 0);
	};

	LBRACE() {
	    return this.getToken(BibTeXParser.LBRACE, 0);
	};

	IDENTIFIER() {
	    return this.getToken(BibTeXParser.IDENTIFIER, 0);
	};

	COMMA() {
	    return this.getToken(BibTeXParser.COMMA, 0);
	};

	RBRACE() {
	    return this.getToken(BibTeXParser.RBRACE, 0);
	};

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BibTeXParserListener ) {
	        listener.enterMisc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BibTeXParserListener ) {
	        listener.exitMisc(this);
		}
	}


}



class TechreportContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BibTeXParser.RULE_techreport;
    }

	TECHREPORT() {
	    return this.getToken(BibTeXParser.TECHREPORT, 0);
	};

	LBRACE() {
	    return this.getToken(BibTeXParser.LBRACE, 0);
	};

	IDENTIFIER() {
	    return this.getToken(BibTeXParser.IDENTIFIER, 0);
	};

	COMMA() {
	    return this.getToken(BibTeXParser.COMMA, 0);
	};

	RBRACE() {
	    return this.getToken(BibTeXParser.RBRACE, 0);
	};

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BibTeXParserListener ) {
	        listener.enterTechreport(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BibTeXParserListener ) {
	        listener.exitTechreport(this);
		}
	}


}



class UnpublishedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BibTeXParser.RULE_unpublished;
    }

	UNPUBLISHED() {
	    return this.getToken(BibTeXParser.UNPUBLISHED, 0);
	};

	LBRACE() {
	    return this.getToken(BibTeXParser.LBRACE, 0);
	};

	IDENTIFIER() {
	    return this.getToken(BibTeXParser.IDENTIFIER, 0);
	};

	COMMA() {
	    return this.getToken(BibTeXParser.COMMA, 0);
	};

	RBRACE() {
	    return this.getToken(BibTeXParser.RBRACE, 0);
	};

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BibTeXParserListener ) {
	        listener.enterUnpublished(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BibTeXParserListener ) {
	        listener.exitUnpublished(this);
		}
	}


}




BibTeXParser.BibTexContext = BibTexContext; 
BibTeXParser.EntryContext = EntryContext; 
BibTeXParser.FieldContext = FieldContext; 
BibTeXParser.KeyContext = KeyContext; 
BibTeXParser.ValueContext = ValueContext; 
BibTeXParser.ArticleContext = ArticleContext; 
BibTeXParser.BookContext = BookContext; 
BibTeXParser.BookletContext = BookletContext; 
BibTeXParser.InbookContext = InbookContext; 
BibTeXParser.IncollectionContext = IncollectionContext; 
BibTeXParser.InproceedingsContext = InproceedingsContext; 
BibTeXParser.ProceedingsContext = ProceedingsContext; 
BibTeXParser.ManualContext = ManualContext; 
BibTeXParser.MastersthesisContext = MastersthesisContext; 
BibTeXParser.PhdthesisContext = PhdthesisContext; 
BibTeXParser.MiscContext = MiscContext; 
BibTeXParser.TechreportContext = TechreportContext; 
BibTeXParser.UnpublishedContext = UnpublishedContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
