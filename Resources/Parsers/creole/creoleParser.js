// Generated from ./creole/creole.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import creoleListener from './creoleListener.js';
const serializedATN = [4,1,30,328,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,1,0,3,0,38,8,0,1,0,5,0,
41,8,0,10,0,12,0,44,9,0,1,0,1,0,1,1,4,1,49,8,1,11,1,12,1,50,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,68,8,2,1,3,4,3,71,8,
3,11,3,12,3,72,1,3,1,3,5,3,77,8,3,10,3,12,3,80,9,3,1,4,1,4,4,4,84,8,4,11,
4,12,4,85,1,4,3,4,89,8,4,1,4,1,4,4,4,93,8,4,11,4,12,4,94,1,4,3,4,98,8,4,
3,4,100,8,4,1,5,1,5,1,5,4,5,105,8,5,11,5,12,5,106,1,5,1,5,1,5,1,5,1,5,4,
5,114,8,5,11,5,12,5,115,1,5,3,5,119,8,5,1,5,1,5,4,5,123,8,5,11,5,12,5,124,
1,5,3,5,128,8,5,3,5,130,8,5,1,6,1,6,4,6,134,8,6,11,6,12,6,135,1,6,3,6,139,
8,6,1,7,1,7,1,8,1,8,1,8,1,8,4,8,147,8,8,11,8,12,8,148,3,8,151,8,8,1,8,1,
8,1,8,1,8,1,8,1,8,4,8,159,8,8,11,8,12,8,160,1,8,1,8,3,8,165,8,8,1,9,1,9,
1,10,1,10,1,10,1,10,1,11,1,11,1,12,4,12,176,8,12,11,12,12,12,177,1,12,4,
12,181,8,12,11,12,12,12,182,1,12,3,12,186,8,12,1,12,5,12,189,8,12,10,12,
12,12,192,9,12,1,12,1,12,4,12,196,8,12,11,12,12,12,197,1,12,4,12,201,8,12,
11,12,12,12,202,1,12,4,12,206,8,12,11,12,12,12,207,1,12,3,12,211,8,12,1,
12,5,12,214,8,12,10,12,12,12,217,9,12,1,12,1,12,4,12,221,8,12,11,12,12,12,
222,1,12,4,12,226,8,12,11,12,12,12,227,1,12,4,12,231,8,12,11,12,12,12,232,
1,12,3,12,236,8,12,1,12,5,12,239,8,12,10,12,12,12,242,9,12,1,12,1,12,4,12,
246,8,12,11,12,12,12,247,3,12,250,8,12,1,13,4,13,253,8,13,11,13,12,13,254,
1,13,1,13,4,13,259,8,13,11,13,12,13,260,1,13,1,13,4,13,265,8,13,11,13,12,
13,266,1,13,3,13,270,8,13,1,14,1,14,4,14,274,8,14,11,14,12,14,275,4,14,278,
8,14,11,14,12,14,279,1,14,1,14,5,14,284,8,14,10,14,12,14,287,9,14,1,15,1,
15,4,15,291,8,15,11,15,12,15,292,4,15,295,8,15,11,15,12,15,296,1,15,1,15,
5,15,301,8,15,10,15,12,15,304,9,15,1,16,4,16,307,8,16,11,16,12,16,308,1,
16,1,16,5,16,313,8,16,10,16,12,16,316,9,16,1,16,4,16,319,8,16,11,16,12,16,
320,1,16,3,16,324,8,16,1,17,1,17,1,17,0,0,18,0,2,4,6,8,10,12,14,16,18,20,
22,24,26,28,30,32,34,0,3,3,0,22,22,27,27,30,30,1,0,8,10,2,0,24,24,26,26,
381,0,42,1,0,0,0,2,48,1,0,0,0,4,67,1,0,0,0,6,70,1,0,0,0,8,99,1,0,0,0,10,
129,1,0,0,0,12,131,1,0,0,0,14,140,1,0,0,0,16,164,1,0,0,0,18,166,1,0,0,0,
20,168,1,0,0,0,22,172,1,0,0,0,24,249,1,0,0,0,26,269,1,0,0,0,28,277,1,0,0,
0,30,294,1,0,0,0,32,323,1,0,0,0,34,325,1,0,0,0,36,38,3,2,1,0,37,36,1,0,0,
0,37,38,1,0,0,0,38,39,1,0,0,0,39,41,5,29,0,0,40,37,1,0,0,0,41,44,1,0,0,0,
42,40,1,0,0,0,42,43,1,0,0,0,43,45,1,0,0,0,44,42,1,0,0,0,45,46,5,0,0,1,46,
1,1,0,0,0,47,49,3,4,2,0,48,47,1,0,0,0,49,50,1,0,0,0,50,48,1,0,0,0,50,51,
1,0,0,0,51,3,1,0,0,0,52,68,3,8,4,0,53,68,3,10,5,0,54,68,3,12,6,0,55,68,3,
14,7,0,56,68,3,16,8,0,57,68,3,18,9,0,58,68,3,32,16,0,59,68,3,22,11,0,60,
68,3,24,12,0,61,68,3,26,13,0,62,68,3,20,10,0,63,68,3,30,15,0,64,68,3,28,
14,0,65,68,3,34,17,0,66,68,3,6,3,0,67,52,1,0,0,0,67,53,1,0,0,0,67,54,1,0,
0,0,67,55,1,0,0,0,67,56,1,0,0,0,67,57,1,0,0,0,67,58,1,0,0,0,67,59,1,0,0,
0,67,60,1,0,0,0,67,61,1,0,0,0,67,62,1,0,0,0,67,63,1,0,0,0,67,64,1,0,0,0,
67,65,1,0,0,0,67,66,1,0,0,0,68,5,1,0,0,0,69,71,7,0,0,0,70,69,1,0,0,0,71,
72,1,0,0,0,72,70,1,0,0,0,72,73,1,0,0,0,73,78,1,0,0,0,74,75,5,1,0,0,75,77,
3,6,3,0,76,74,1,0,0,0,77,80,1,0,0,0,78,76,1,0,0,0,78,79,1,0,0,0,79,7,1,0,
0,0,80,78,1,0,0,0,81,83,5,2,0,0,82,84,3,4,2,0,83,82,1,0,0,0,84,85,1,0,0,
0,85,83,1,0,0,0,85,86,1,0,0,0,86,88,1,0,0,0,87,89,5,2,0,0,88,87,1,0,0,0,
88,89,1,0,0,0,89,100,1,0,0,0,90,92,5,3,0,0,91,93,3,4,2,0,92,91,1,0,0,0,93,
94,1,0,0,0,94,92,1,0,0,0,94,95,1,0,0,0,95,97,1,0,0,0,96,98,5,3,0,0,97,96,
1,0,0,0,97,98,1,0,0,0,98,100,1,0,0,0,99,81,1,0,0,0,99,90,1,0,0,0,100,9,1,
0,0,0,101,102,5,30,0,0,102,104,5,30,0,0,103,105,3,4,2,0,104,103,1,0,0,0,
105,106,1,0,0,0,106,104,1,0,0,0,106,107,1,0,0,0,107,108,1,0,0,0,108,109,
5,30,0,0,109,110,5,30,0,0,110,130,1,0,0,0,111,113,5,4,0,0,112,114,3,4,2,
0,113,112,1,0,0,0,114,115,1,0,0,0,115,113,1,0,0,0,115,116,1,0,0,0,116,118,
1,0,0,0,117,119,5,4,0,0,118,117,1,0,0,0,118,119,1,0,0,0,119,130,1,0,0,0,
120,122,5,5,0,0,121,123,3,4,2,0,122,121,1,0,0,0,123,124,1,0,0,0,124,122,
1,0,0,0,124,125,1,0,0,0,125,127,1,0,0,0,126,128,5,5,0,0,127,126,1,0,0,0,
127,128,1,0,0,0,128,130,1,0,0,0,129,101,1,0,0,0,129,111,1,0,0,0,129,120,
1,0,0,0,130,11,1,0,0,0,131,133,5,6,0,0,132,134,3,4,2,0,133,132,1,0,0,0,134,
135,1,0,0,0,135,133,1,0,0,0,135,136,1,0,0,0,136,138,1,0,0,0,137,139,5,6,
0,0,138,137,1,0,0,0,138,139,1,0,0,0,139,13,1,0,0,0,140,141,5,25,0,0,141,
15,1,0,0,0,142,143,5,18,0,0,143,150,3,6,3,0,144,146,5,7,0,0,145,147,3,4,
2,0,146,145,1,0,0,0,147,148,1,0,0,0,148,146,1,0,0,0,148,149,1,0,0,0,149,
151,1,0,0,0,150,144,1,0,0,0,150,151,1,0,0,0,151,152,1,0,0,0,152,153,5,19,
0,0,153,165,1,0,0,0,154,155,5,20,0,0,155,156,3,6,3,0,156,158,5,7,0,0,157,
159,3,4,2,0,158,157,1,0,0,0,159,160,1,0,0,0,160,158,1,0,0,0,160,161,1,0,
0,0,161,162,1,0,0,0,162,163,5,21,0,0,163,165,1,0,0,0,164,142,1,0,0,0,164,
154,1,0,0,0,165,17,1,0,0,0,166,167,5,23,0,0,167,19,1,0,0,0,168,169,5,20,
0,0,169,170,3,6,3,0,170,171,5,21,0,0,171,21,1,0,0,0,172,173,7,1,0,0,173,
23,1,0,0,0,174,176,5,4,0,0,175,174,1,0,0,0,176,177,1,0,0,0,177,175,1,0,0,
0,177,178,1,0,0,0,178,186,1,0,0,0,179,181,5,17,0,0,180,179,1,0,0,0,181,182,
1,0,0,0,182,180,1,0,0,0,182,183,1,0,0,0,183,186,1,0,0,0,184,186,5,11,0,0,
185,175,1,0,0,0,185,180,1,0,0,0,185,184,1,0,0,0,186,190,1,0,0,0,187,189,
5,28,0,0,188,187,1,0,0,0,189,192,1,0,0,0,190,188,1,0,0,0,190,191,1,0,0,0,
191,193,1,0,0,0,192,190,1,0,0,0,193,195,5,12,0,0,194,196,3,4,2,0,195,194,
1,0,0,0,196,197,1,0,0,0,197,195,1,0,0,0,197,198,1,0,0,0,198,250,1,0,0,0,
199,201,5,4,0,0,200,199,1,0,0,0,201,202,1,0,0,0,202,200,1,0,0,0,202,203,
1,0,0,0,203,211,1,0,0,0,204,206,5,17,0,0,205,204,1,0,0,0,206,207,1,0,0,0,
207,205,1,0,0,0,207,208,1,0,0,0,208,211,1,0,0,0,209,211,5,11,0,0,210,200,
1,0,0,0,210,205,1,0,0,0,210,209,1,0,0,0,211,215,1,0,0,0,212,214,5,28,0,0,
213,212,1,0,0,0,214,217,1,0,0,0,215,213,1,0,0,0,215,216,1,0,0,0,216,218,
1,0,0,0,217,215,1,0,0,0,218,220,5,13,0,0,219,221,3,4,2,0,220,219,1,0,0,0,
221,222,1,0,0,0,222,220,1,0,0,0,222,223,1,0,0,0,223,250,1,0,0,0,224,226,
5,4,0,0,225,224,1,0,0,0,226,227,1,0,0,0,227,225,1,0,0,0,227,228,1,0,0,0,
228,236,1,0,0,0,229,231,5,17,0,0,230,229,1,0,0,0,231,232,1,0,0,0,232,230,
1,0,0,0,232,233,1,0,0,0,233,236,1,0,0,0,234,236,5,11,0,0,235,225,1,0,0,0,
235,230,1,0,0,0,235,234,1,0,0,0,236,240,1,0,0,0,237,239,5,28,0,0,238,237,
1,0,0,0,239,242,1,0,0,0,240,238,1,0,0,0,240,241,1,0,0,0,241,243,1,0,0,0,
242,240,1,0,0,0,243,245,5,14,0,0,244,246,3,4,2,0,245,244,1,0,0,0,246,247,
1,0,0,0,247,245,1,0,0,0,247,248,1,0,0,0,248,250,1,0,0,0,249,185,1,0,0,0,
249,210,1,0,0,0,249,235,1,0,0,0,250,25,1,0,0,0,251,253,5,4,0,0,252,251,1,
0,0,0,253,254,1,0,0,0,254,252,1,0,0,0,254,255,1,0,0,0,255,256,1,0,0,0,256,
270,3,4,2,0,257,259,5,17,0,0,258,257,1,0,0,0,259,260,1,0,0,0,260,258,1,0,
0,0,260,261,1,0,0,0,261,262,1,0,0,0,262,270,3,4,2,0,263,265,5,11,0,0,264,
263,1,0,0,0,265,266,1,0,0,0,266,264,1,0,0,0,266,267,1,0,0,0,267,268,1,0,
0,0,268,270,3,4,2,0,269,252,1,0,0,0,269,258,1,0,0,0,269,264,1,0,0,0,270,
27,1,0,0,0,271,273,5,15,0,0,272,274,3,4,2,0,273,272,1,0,0,0,274,275,1,0,
0,0,275,273,1,0,0,0,275,276,1,0,0,0,276,278,1,0,0,0,277,271,1,0,0,0,278,
279,1,0,0,0,279,277,1,0,0,0,279,280,1,0,0,0,280,281,1,0,0,0,281,285,5,7,
0,0,282,284,5,28,0,0,283,282,1,0,0,0,284,287,1,0,0,0,285,283,1,0,0,0,285,
286,1,0,0,0,286,29,1,0,0,0,287,285,1,0,0,0,288,290,5,7,0,0,289,291,3,4,2,
0,290,289,1,0,0,0,291,292,1,0,0,0,292,290,1,0,0,0,292,293,1,0,0,0,293,295,
1,0,0,0,294,288,1,0,0,0,295,296,1,0,0,0,296,294,1,0,0,0,296,297,1,0,0,0,
297,298,1,0,0,0,298,302,5,7,0,0,299,301,5,28,0,0,300,299,1,0,0,0,301,304,
1,0,0,0,302,300,1,0,0,0,302,303,1,0,0,0,303,31,1,0,0,0,304,302,1,0,0,0,305,
307,5,16,0,0,306,305,1,0,0,0,307,308,1,0,0,0,308,306,1,0,0,0,308,309,1,0,
0,0,309,310,1,0,0,0,310,314,3,4,2,0,311,313,5,16,0,0,312,311,1,0,0,0,313,
316,1,0,0,0,314,312,1,0,0,0,314,315,1,0,0,0,315,324,1,0,0,0,316,314,1,0,
0,0,317,319,5,17,0,0,318,317,1,0,0,0,319,320,1,0,0,0,320,318,1,0,0,0,320,
321,1,0,0,0,321,322,1,0,0,0,322,324,3,4,2,0,323,306,1,0,0,0,323,318,1,0,
0,0,324,33,1,0,0,0,325,326,7,2,0,0,326,35,1,0,0,0,53,37,42,50,67,72,78,85,
88,94,97,99,106,115,118,124,127,129,135,138,148,150,160,164,177,182,185,
190,197,202,207,210,215,222,227,232,235,240,247,249,254,260,266,269,275,
279,285,292,296,302,308,314,320,323];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class creoleParser extends antlr4.Parser {

    static grammarFileName = "creole.g4";
    static literalNames = [ null, "'\\\\'", "'**'", "'__'", "'*'", "'_'", 
                            "'~~'", "'|'", "'----'", "'***'", "'___'", "'-'", 
                            "'[ ]'", "'[x]'", "'[X]'", "'|='", "'='", "'#'", 
                            "'[['", "']]'", "'{{'", "'}}'", "':'", null, 
                            null, null, null, null, null, null, "'/'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, "HASH", "LBRACKET", "RBRACKET", "LBRACE", 
                             "RBRACE", "COLON", "URL_LINK", "CODE_BLOCK", 
                             "CODE_INLINE", "NOWIKI_CREOLE", "TEXT", "WS", 
                             "CR", "RSLASH" ];
    static ruleNames = [ "document", "line", "markup", "text_", "bold", 
                         "italics", "strikethrough", "inline_code", "href", 
                         "url_autolink", "image", "hline", "task_listitem", 
                         "listitem", "tableheader", "tablerow", "title", 
                         "nowiki" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = creoleParser.ruleNames;
        this.literalNames = creoleParser.literalNames;
        this.symbolicNames = creoleParser.symbolicNames;
    }



	document() {
	    let localctx = new DocumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, creoleParser.RULE_document);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1876398076) !== 0)) {
	            this.state = 37;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1339527164) !== 0)) {
	                this.state = 36;
	                this.line();
	            }

	            this.state = 39;
	            this.match(creoleParser.CR);
	            this.state = 44;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 45;
	        this.match(creoleParser.EOF);
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 47;
	            this.markup();
	            this.state = 50; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1339527164) !== 0));
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
	        this.state = 67;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 52;
	            this.bold();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 53;
	            this.italics();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 54;
	            this.strikethrough();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 55;
	            this.inline_code();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 56;
	            this.href();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 57;
	            this.url_autolink();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 58;
	            this.title();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 59;
	            this.hline();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 60;
	            this.task_listitem();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 61;
	            this.listitem();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 62;
	            this.image();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 63;
	            this.tablerow();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 64;
	            this.tableheader();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 65;
	            this.nowiki();
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 66;
	            this.text_();
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 69;
	        		_la = this._input.LA(1);
	        		if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1212153856) !== 0))) {
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
	        	this.state = 72; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,4, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 78;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 74;
	                this.match(creoleParser.T__0);
	                this.state = 75;
	                this.text_(); 
	            }
	            this.state = 80;
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
	        this.state = 99;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 81;
	            this.match(creoleParser.T__1);
	            this.state = 83; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 82;
	            		this.markup();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 85; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,6, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 88;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	            if(la_===1) {
	                this.state = 87;
	                this.match(creoleParser.T__1);

	            }
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 90;
	            this.match(creoleParser.T__2);
	            this.state = 92; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 91;
	            		this.markup();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 94; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,8, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 97;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	            if(la_===1) {
	                this.state = 96;
	                this.match(creoleParser.T__2);

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



	italics() {
	    let localctx = new ItalicsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, creoleParser.RULE_italics);
	    try {
	        this.state = 129;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 30:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 101;
	            this.match(creoleParser.RSLASH);
	            this.state = 102;
	            this.match(creoleParser.RSLASH);
	            this.state = 104; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 103;
	            		this.markup();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 106; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,11, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 108;
	            this.match(creoleParser.RSLASH);
	            this.state = 109;
	            this.match(creoleParser.RSLASH);
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 111;
	            this.match(creoleParser.T__3);
	            this.state = 113; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 112;
	            		this.markup();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 115; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,12, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 118;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	            if(la_===1) {
	                this.state = 117;
	                this.match(creoleParser.T__3);

	            }
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 120;
	            this.match(creoleParser.T__4);
	            this.state = 122; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 121;
	            		this.markup();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 124; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,14, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 127;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	            if(la_===1) {
	                this.state = 126;
	                this.match(creoleParser.T__4);

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



	strikethrough() {
	    let localctx = new StrikethroughContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, creoleParser.RULE_strikethrough);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131;
	        this.match(creoleParser.T__5);
	        this.state = 133; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 132;
	        		this.markup();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 135; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,17, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 138;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        if(la_===1) {
	            this.state = 137;
	            this.match(creoleParser.T__5);

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



	inline_code() {
	    let localctx = new Inline_codeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, creoleParser.RULE_inline_code);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        this.match(creoleParser.CODE_INLINE);
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
	    this.enterRule(localctx, 16, creoleParser.RULE_href);
	    var _la = 0;
	    try {
	        this.state = 164;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 142;
	            this.match(creoleParser.LBRACKET);
	            this.state = 143;
	            this.text_();
	            this.state = 150;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7) {
	                this.state = 144;
	                this.match(creoleParser.T__6);
	                this.state = 146; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                do {
	                    this.state = 145;
	                    this.markup();
	                    this.state = 148; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1339527164) !== 0));
	            }

	            this.state = 152;
	            this.match(creoleParser.RBRACKET);
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 154;
	            this.match(creoleParser.LBRACE);
	            this.state = 155;
	            this.text_();
	            this.state = 156;
	            this.match(creoleParser.T__6);
	            this.state = 158; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 157;
	                this.markup();
	                this.state = 160; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1339527164) !== 0));
	            this.state = 162;
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



	url_autolink() {
	    let localctx = new Url_autolinkContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, creoleParser.RULE_url_autolink);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 166;
	        this.match(creoleParser.URL_LINK);
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
	    this.enterRule(localctx, 20, creoleParser.RULE_image);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        this.match(creoleParser.LBRACE);
	        this.state = 169;
	        this.text_();
	        this.state = 170;
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
	    this.enterRule(localctx, 22, creoleParser.RULE_hline);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 172;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1792) !== 0))) {
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



	task_listitem() {
	    let localctx = new Task_listitemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, creoleParser.RULE_task_listitem);
	    var _la = 0;
	    try {
	        this.state = 249;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 185;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 4:
	                this.state = 175; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                do {
	                    this.state = 174;
	                    this.match(creoleParser.T__3);
	                    this.state = 177; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                } while(_la===4);
	                break;
	            case 17:
	                this.state = 180; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                do {
	                    this.state = 179;
	                    this.match(creoleParser.HASH);
	                    this.state = 182; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                } while(_la===17);
	                break;
	            case 11:
	                this.state = 184;
	                this.match(creoleParser.T__10);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 190;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===28) {
	                this.state = 187;
	                this.match(creoleParser.WS);
	                this.state = 192;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 193;
	            this.match(creoleParser.T__11);
	            this.state = 195; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 194;
	            		this.markup();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 197; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,27, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 210;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 4:
	                this.state = 200; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                do {
	                    this.state = 199;
	                    this.match(creoleParser.T__3);
	                    this.state = 202; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                } while(_la===4);
	                break;
	            case 17:
	                this.state = 205; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                do {
	                    this.state = 204;
	                    this.match(creoleParser.HASH);
	                    this.state = 207; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                } while(_la===17);
	                break;
	            case 11:
	                this.state = 209;
	                this.match(creoleParser.T__10);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 215;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===28) {
	                this.state = 212;
	                this.match(creoleParser.WS);
	                this.state = 217;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 218;
	            this.match(creoleParser.T__12);
	            this.state = 220; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 219;
	            		this.markup();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 222; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,32, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 235;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 4:
	                this.state = 225; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                do {
	                    this.state = 224;
	                    this.match(creoleParser.T__3);
	                    this.state = 227; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                } while(_la===4);
	                break;
	            case 17:
	                this.state = 230; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                do {
	                    this.state = 229;
	                    this.match(creoleParser.HASH);
	                    this.state = 232; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                } while(_la===17);
	                break;
	            case 11:
	                this.state = 234;
	                this.match(creoleParser.T__10);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 240;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===28) {
	                this.state = 237;
	                this.match(creoleParser.WS);
	                this.state = 242;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 243;
	            this.match(creoleParser.T__13);
	            this.state = 245; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 244;
	            		this.markup();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 247; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,37, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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



	listitem() {
	    let localctx = new ListitemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, creoleParser.RULE_listitem);
	    try {
	        this.state = 269;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 252; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 251;
	            		this.match(creoleParser.T__3);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 254; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,39, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 256;
	            this.markup();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 258; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 257;
	            		this.match(creoleParser.HASH);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 260; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,40, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 262;
	            this.markup();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 264; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 263;
	            		this.match(creoleParser.T__10);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 266; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,41, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 268;
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
	    this.enterRule(localctx, 28, creoleParser.RULE_tableheader);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 277; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 271;
	            this.match(creoleParser.T__14);
	            this.state = 273; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 272;
	            		this.markup();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 275; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,43, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 279; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===15);
	        this.state = 281;
	        this.match(creoleParser.T__6);
	        this.state = 285;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 282;
	            this.match(creoleParser.WS);
	            this.state = 287;
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
	    this.enterRule(localctx, 30, creoleParser.RULE_tablerow);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 294; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 288;
	        		this.match(creoleParser.T__6);
	        		this.state = 290; 
	        		this._errHandler.sync(this);
	        		var _alt = 1;
	        		do {
	        			switch (_alt) {
	        			case 1:
	        				this.state = 289;
	        				this.markup();
	        				break;
	        			default:
	        				throw new antlr4.error.NoViableAltException(this);
	        			}
	        			this.state = 292; 
	        			this._errHandler.sync(this);
	        			_alt = this._interp.adaptivePredict(this._input,46, this._ctx);
	        		} while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 296; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,47, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 298;
	        this.match(creoleParser.T__6);
	        this.state = 302;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 299;
	            this.match(creoleParser.WS);
	            this.state = 304;
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
	    this.enterRule(localctx, 32, creoleParser.RULE_title);
	    try {
	        this.state = 323;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 306; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 305;
	            		this.match(creoleParser.T__15);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 308; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,49, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 310;
	            this.markup();
	            this.state = 314;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,50,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 311;
	                    this.match(creoleParser.T__15); 
	                }
	                this.state = 316;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,50,this._ctx);
	            }

	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 318; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 317;
	            		this.match(creoleParser.HASH);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 320; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,51, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 322;
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



	nowiki() {
	    let localctx = new NowikiContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, creoleParser.RULE_nowiki);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 325;
	        _la = this._input.LA(1);
	        if(!(_la===24 || _la===26)) {
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

creoleParser.EOF = antlr4.Token.EOF;
creoleParser.T__0 = 1;
creoleParser.T__1 = 2;
creoleParser.T__2 = 3;
creoleParser.T__3 = 4;
creoleParser.T__4 = 5;
creoleParser.T__5 = 6;
creoleParser.T__6 = 7;
creoleParser.T__7 = 8;
creoleParser.T__8 = 9;
creoleParser.T__9 = 10;
creoleParser.T__10 = 11;
creoleParser.T__11 = 12;
creoleParser.T__12 = 13;
creoleParser.T__13 = 14;
creoleParser.T__14 = 15;
creoleParser.T__15 = 16;
creoleParser.HASH = 17;
creoleParser.LBRACKET = 18;
creoleParser.RBRACKET = 19;
creoleParser.LBRACE = 20;
creoleParser.RBRACE = 21;
creoleParser.COLON = 22;
creoleParser.URL_LINK = 23;
creoleParser.CODE_BLOCK = 24;
creoleParser.CODE_INLINE = 25;
creoleParser.NOWIKI_CREOLE = 26;
creoleParser.TEXT = 27;
creoleParser.WS = 28;
creoleParser.CR = 29;
creoleParser.RSLASH = 30;

creoleParser.RULE_document = 0;
creoleParser.RULE_line = 1;
creoleParser.RULE_markup = 2;
creoleParser.RULE_text_ = 3;
creoleParser.RULE_bold = 4;
creoleParser.RULE_italics = 5;
creoleParser.RULE_strikethrough = 6;
creoleParser.RULE_inline_code = 7;
creoleParser.RULE_href = 8;
creoleParser.RULE_url_autolink = 9;
creoleParser.RULE_image = 10;
creoleParser.RULE_hline = 11;
creoleParser.RULE_task_listitem = 12;
creoleParser.RULE_listitem = 13;
creoleParser.RULE_tableheader = 14;
creoleParser.RULE_tablerow = 15;
creoleParser.RULE_title = 16;
creoleParser.RULE_nowiki = 17;

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

	EOF() {
	    return this.getToken(creoleParser.EOF, 0);
	};

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

	strikethrough() {
	    return this.getTypedRuleContext(StrikethroughContext,0);
	};

	inline_code() {
	    return this.getTypedRuleContext(Inline_codeContext,0);
	};

	href() {
	    return this.getTypedRuleContext(HrefContext,0);
	};

	url_autolink() {
	    return this.getTypedRuleContext(Url_autolinkContext,0);
	};

	title() {
	    return this.getTypedRuleContext(TitleContext,0);
	};

	hline() {
	    return this.getTypedRuleContext(HlineContext,0);
	};

	task_listitem() {
	    return this.getTypedRuleContext(Task_listitemContext,0);
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

	text_() {
	    return this.getTypedRuleContext(Text_Context,0);
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


	COLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(creoleParser.COLON);
	    } else {
	        return this.getToken(creoleParser.COLON, i);
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



class StrikethroughContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = creoleParser.RULE_strikethrough;
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
	        listener.enterStrikethrough(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.exitStrikethrough(this);
		}
	}


}



class Inline_codeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = creoleParser.RULE_inline_code;
    }

	CODE_INLINE() {
	    return this.getToken(creoleParser.CODE_INLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.enterInline_code(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.exitInline_code(this);
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



class Url_autolinkContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = creoleParser.RULE_url_autolink;
    }

	URL_LINK() {
	    return this.getToken(creoleParser.URL_LINK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.enterUrl_autolink(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.exitUrl_autolink(this);
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



class Task_listitemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = creoleParser.RULE_task_listitem;
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
	        listener.enterTask_listitem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.exitTask_listitem(this);
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

	NOWIKI_CREOLE() {
	    return this.getToken(creoleParser.NOWIKI_CREOLE, 0);
	};

	CODE_BLOCK() {
	    return this.getToken(creoleParser.CODE_BLOCK, 0);
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
creoleParser.StrikethroughContext = StrikethroughContext; 
creoleParser.Inline_codeContext = Inline_codeContext; 
creoleParser.HrefContext = HrefContext; 
creoleParser.Url_autolinkContext = Url_autolinkContext; 
creoleParser.ImageContext = ImageContext; 
creoleParser.HlineContext = HlineContext; 
creoleParser.Task_listitemContext = Task_listitemContext; 
creoleParser.ListitemContext = ListitemContext; 
creoleParser.TableheaderContext = TableheaderContext; 
creoleParser.TablerowContext = TablerowContext; 
creoleParser.TitleContext = TitleContext; 
creoleParser.NowikiContext = NowikiContext; 
