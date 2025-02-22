// Generated from ./stringtemplate/STParser.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import STParserListener from './STParserListener.js';
const serializedATN = [4,1,38,336,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,1,0,1,0,1,0,1,1,5,1,55,8,
1,10,1,12,1,58,9,1,1,2,1,2,3,2,62,8,2,1,3,1,3,4,3,66,8,3,11,3,12,3,67,3,
3,70,8,3,1,4,1,4,3,4,74,8,4,1,5,1,5,1,5,1,5,3,5,80,8,5,1,5,1,5,1,6,1,6,1,
6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,5,7,97,8,7,10,7,12,7,100,9,7,1,
7,3,7,103,8,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,
8,1,8,1,8,1,8,5,8,123,8,8,10,8,12,8,126,9,8,1,8,1,8,1,8,1,8,3,8,132,8,8,
1,8,1,8,1,8,1,8,1,9,1,9,1,9,5,9,141,8,9,10,9,12,9,144,9,9,1,10,1,10,1,10,
5,10,149,8,10,10,10,12,10,152,9,10,1,11,1,11,1,11,3,11,157,8,11,1,12,1,12,
1,12,1,12,1,12,1,12,1,12,1,12,5,12,167,8,12,10,12,12,12,170,9,12,1,13,1,
13,1,13,5,13,175,8,13,10,13,12,13,178,9,13,1,14,1,14,1,14,3,14,183,8,14,
1,15,1,15,1,15,3,15,188,8,15,1,16,1,16,1,16,4,16,193,8,16,11,16,12,16,194,
1,16,1,16,1,16,3,16,200,8,16,1,16,1,16,1,16,1,16,5,16,206,8,16,10,16,12,
16,209,9,16,5,16,211,8,16,10,16,12,16,214,9,16,1,17,1,17,1,17,1,17,1,17,
1,17,1,17,1,17,5,17,224,8,17,10,17,12,17,227,9,17,1,18,1,18,1,18,3,18,232,
8,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,241,8,18,1,18,1,18,3,18,245,
8,18,1,19,1,19,1,19,3,19,250,8,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,258,
8,19,1,19,1,19,1,19,1,19,3,19,264,8,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,
1,19,1,19,1,19,1,19,1,19,3,19,278,8,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,
1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,3,20,295,8,20,1,20,3,20,298,8,20,
3,20,300,8,20,1,21,1,21,3,21,304,8,21,1,21,1,21,1,22,1,22,1,22,1,22,5,22,
312,8,22,10,22,12,22,315,9,22,1,22,1,22,3,22,319,8,22,1,22,3,22,322,8,22,
1,23,1,23,1,23,5,23,327,8,23,10,23,12,23,330,9,23,1,24,1,24,1,24,1,24,1,
24,0,0,25,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,
46,48,0,0,361,0,50,1,0,0,0,2,56,1,0,0,0,4,61,1,0,0,0,6,69,1,0,0,0,8,73,1,
0,0,0,10,75,1,0,0,0,12,83,1,0,0,0,14,92,1,0,0,0,16,107,1,0,0,0,18,137,1,
0,0,0,20,145,1,0,0,0,22,156,1,0,0,0,24,158,1,0,0,0,26,171,1,0,0,0,28,179,
1,0,0,0,30,184,1,0,0,0,32,189,1,0,0,0,34,215,1,0,0,0,36,244,1,0,0,0,38,277,
1,0,0,0,40,299,1,0,0,0,42,301,1,0,0,0,44,321,1,0,0,0,46,323,1,0,0,0,48,331,
1,0,0,0,50,51,3,2,1,0,51,52,5,0,0,1,52,1,1,0,0,0,53,55,3,4,2,0,54,53,1,0,
0,0,55,58,1,0,0,0,56,54,1,0,0,0,56,57,1,0,0,0,57,3,1,0,0,0,58,56,1,0,0,0,
59,62,3,6,3,0,60,62,3,8,4,0,61,59,1,0,0,0,61,60,1,0,0,0,62,5,1,0,0,0,63,
70,3,10,5,0,64,66,5,10,0,0,65,64,1,0,0,0,66,67,1,0,0,0,67,65,1,0,0,0,67,
68,1,0,0,0,68,70,1,0,0,0,69,63,1,0,0,0,69,65,1,0,0,0,70,7,1,0,0,0,71,74,
3,16,8,0,72,74,3,12,6,0,73,71,1,0,0,0,73,72,1,0,0,0,74,9,1,0,0,0,75,76,5,
8,0,0,76,79,3,32,16,0,77,78,5,27,0,0,78,80,3,26,13,0,79,77,1,0,0,0,79,80,
1,0,0,0,80,81,1,0,0,0,81,82,5,12,0,0,82,11,1,0,0,0,83,84,5,8,0,0,84,85,5,
22,0,0,85,86,5,37,0,0,86,87,5,12,0,0,87,88,3,2,1,0,88,89,5,8,0,0,89,90,5,
19,0,0,90,91,5,12,0,0,91,13,1,0,0,0,92,102,5,11,0,0,93,98,5,37,0,0,94,95,
5,25,0,0,95,97,5,37,0,0,96,94,1,0,0,0,97,100,1,0,0,0,98,96,1,0,0,0,98,99,
1,0,0,0,99,101,1,0,0,0,100,98,1,0,0,0,101,103,5,38,0,0,102,93,1,0,0,0,102,
103,1,0,0,0,103,104,1,0,0,0,104,105,3,2,1,0,105,106,5,9,0,0,106,15,1,0,0,
0,107,108,5,8,0,0,108,109,5,14,0,0,109,110,5,30,0,0,110,111,3,18,9,0,111,
112,5,31,0,0,112,113,5,12,0,0,113,124,3,2,1,0,114,115,5,8,0,0,115,116,5,
15,0,0,116,117,5,30,0,0,117,118,3,18,9,0,118,119,5,31,0,0,119,120,5,12,0,
0,120,121,3,2,1,0,121,123,1,0,0,0,122,114,1,0,0,0,123,126,1,0,0,0,124,122,
1,0,0,0,124,125,1,0,0,0,125,131,1,0,0,0,126,124,1,0,0,0,127,128,5,8,0,0,
128,129,5,16,0,0,129,130,5,12,0,0,130,132,3,2,1,0,131,127,1,0,0,0,131,132,
1,0,0,0,132,133,1,0,0,0,133,134,5,8,0,0,134,135,5,17,0,0,135,136,5,12,0,
0,136,17,1,0,0,0,137,142,3,20,10,0,138,139,5,29,0,0,139,141,3,20,10,0,140,
138,1,0,0,0,141,144,1,0,0,0,142,140,1,0,0,0,142,143,1,0,0,0,143,19,1,0,0,
0,144,142,1,0,0,0,145,150,3,22,11,0,146,147,5,28,0,0,147,149,3,22,11,0,148,
146,1,0,0,0,149,152,1,0,0,0,150,148,1,0,0,0,150,151,1,0,0,0,151,21,1,0,0,
0,152,150,1,0,0,0,153,154,5,35,0,0,154,157,3,22,11,0,155,157,3,34,17,0,156,
153,1,0,0,0,156,155,1,0,0,0,157,23,1,0,0,0,158,168,5,37,0,0,159,160,5,24,
0,0,160,167,5,37,0,0,161,162,5,24,0,0,162,163,5,30,0,0,163,164,3,32,16,0,
164,165,5,31,0,0,165,167,1,0,0,0,166,159,1,0,0,0,166,161,1,0,0,0,167,170,
1,0,0,0,168,166,1,0,0,0,168,169,1,0,0,0,169,25,1,0,0,0,170,168,1,0,0,0,171,
176,3,28,14,0,172,173,5,25,0,0,173,175,3,28,14,0,174,172,1,0,0,0,175,178,
1,0,0,0,176,174,1,0,0,0,176,177,1,0,0,0,177,27,1,0,0,0,178,176,1,0,0,0,179,
182,5,37,0,0,180,181,5,34,0,0,181,183,3,30,15,0,182,180,1,0,0,0,182,183,
1,0,0,0,183,29,1,0,0,0,184,187,3,34,17,0,185,186,5,26,0,0,186,188,3,36,18,
0,187,185,1,0,0,0,187,188,1,0,0,0,188,31,1,0,0,0,189,199,3,34,17,0,190,191,
5,25,0,0,191,193,3,34,17,0,192,190,1,0,0,0,193,194,1,0,0,0,194,192,1,0,0,
0,194,195,1,0,0,0,195,196,1,0,0,0,196,197,5,26,0,0,197,198,3,36,18,0,198,
200,1,0,0,0,199,192,1,0,0,0,199,200,1,0,0,0,200,212,1,0,0,0,201,202,5,26,
0,0,202,207,3,36,18,0,203,204,5,25,0,0,204,206,3,36,18,0,205,203,1,0,0,0,
206,209,1,0,0,0,207,205,1,0,0,0,207,208,1,0,0,0,208,211,1,0,0,0,209,207,
1,0,0,0,210,201,1,0,0,0,211,214,1,0,0,0,212,210,1,0,0,0,212,213,1,0,0,0,
213,33,1,0,0,0,214,212,1,0,0,0,215,225,3,38,19,0,216,217,5,24,0,0,217,224,
5,37,0,0,218,219,5,24,0,0,219,220,5,30,0,0,220,221,3,32,16,0,221,222,5,31,
0,0,222,224,1,0,0,0,223,216,1,0,0,0,223,218,1,0,0,0,224,227,1,0,0,0,225,
223,1,0,0,0,225,226,1,0,0,0,226,35,1,0,0,0,227,225,1,0,0,0,228,229,5,37,
0,0,229,231,5,30,0,0,230,232,3,44,22,0,231,230,1,0,0,0,231,232,1,0,0,0,232,
233,1,0,0,0,233,245,5,31,0,0,234,245,3,14,7,0,235,236,5,30,0,0,236,237,3,
32,16,0,237,238,5,31,0,0,238,240,5,30,0,0,239,241,3,46,23,0,240,239,1,0,
0,0,240,241,1,0,0,0,241,242,1,0,0,0,242,243,5,31,0,0,243,245,1,0,0,0,244,
228,1,0,0,0,244,234,1,0,0,0,244,235,1,0,0,0,245,37,1,0,0,0,246,247,5,37,
0,0,247,249,5,30,0,0,248,250,3,32,16,0,249,248,1,0,0,0,249,250,1,0,0,0,250,
251,1,0,0,0,251,278,5,31,0,0,252,253,5,18,0,0,253,254,5,24,0,0,254,255,5,
37,0,0,255,257,5,30,0,0,256,258,3,44,22,0,257,256,1,0,0,0,257,258,1,0,0,
0,258,259,1,0,0,0,259,278,5,31,0,0,260,261,5,37,0,0,261,263,5,30,0,0,262,
264,3,44,22,0,263,262,1,0,0,0,263,264,1,0,0,0,264,265,1,0,0,0,265,278,5,
31,0,0,266,267,5,22,0,0,267,268,5,18,0,0,268,269,5,24,0,0,269,270,5,37,0,
0,270,271,5,30,0,0,271,278,5,31,0,0,272,273,5,22,0,0,273,274,5,37,0,0,274,
275,5,30,0,0,275,278,5,31,0,0,276,278,3,40,20,0,277,246,1,0,0,0,277,252,
1,0,0,0,277,260,1,0,0,0,277,266,1,0,0,0,277,272,1,0,0,0,277,276,1,0,0,0,
278,39,1,0,0,0,279,300,5,37,0,0,280,300,5,13,0,0,281,300,5,20,0,0,282,300,
5,21,0,0,283,300,3,14,7,0,284,300,3,42,21,0,285,286,5,30,0,0,286,287,3,18,
9,0,287,288,5,31,0,0,288,300,1,0,0,0,289,290,5,30,0,0,290,291,3,32,16,0,
291,297,5,31,0,0,292,294,5,30,0,0,293,295,3,46,23,0,294,293,1,0,0,0,294,
295,1,0,0,0,295,296,1,0,0,0,296,298,5,31,0,0,297,292,1,0,0,0,297,298,1,0,
0,0,298,300,1,0,0,0,299,279,1,0,0,0,299,280,1,0,0,0,299,281,1,0,0,0,299,
282,1,0,0,0,299,283,1,0,0,0,299,284,1,0,0,0,299,285,1,0,0,0,299,289,1,0,
0,0,300,41,1,0,0,0,301,303,5,32,0,0,302,304,3,46,23,0,303,302,1,0,0,0,303,
304,1,0,0,0,304,305,1,0,0,0,305,306,5,33,0,0,306,43,1,0,0,0,307,322,3,46,
23,0,308,313,3,48,24,0,309,310,5,25,0,0,310,312,3,48,24,0,311,309,1,0,0,
0,312,315,1,0,0,0,313,311,1,0,0,0,313,314,1,0,0,0,314,318,1,0,0,0,315,313,
1,0,0,0,316,317,5,25,0,0,317,319,5,23,0,0,318,316,1,0,0,0,318,319,1,0,0,
0,319,322,1,0,0,0,320,322,5,23,0,0,321,307,1,0,0,0,321,308,1,0,0,0,321,320,
1,0,0,0,322,45,1,0,0,0,323,328,3,30,15,0,324,325,5,25,0,0,325,327,3,30,15,
0,326,324,1,0,0,0,327,330,1,0,0,0,328,326,1,0,0,0,328,329,1,0,0,0,329,47,
1,0,0,0,330,328,1,0,0,0,331,332,5,37,0,0,332,333,5,34,0,0,333,334,3,30,15,
0,334,49,1,0,0,0,39,56,61,67,69,73,79,98,102,124,131,142,150,156,166,168,
176,182,187,194,199,207,212,223,225,231,240,244,249,257,263,277,294,297,
299,303,313,318,321,328];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class STParser extends antlr4.Parser {

    static grammarFileName = "STParser.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, "'if'", 
                            "'elseif'", "'else'", "'endif'", "'super'", 
                            "'@end'" ];
    static symbolicNames = [ null, "DOC_COMMENT", "BLOCK_COMMENT", "LINE_COMMENT", 
                             "TMPL_COMMENT", "HORZ_WS", "VERT_WS", "ESCAPE", 
                             "LDELIM", "RBRACE", "TEXT", "LBRACE", "RDELIM", 
                             "STRING", "IF", "ELSEIF", "ELSE", "ENDIF", 
                             "SUPER", "END", "TRUE", "FALSE", "AT", "ELLIPSIS", 
                             "DOT", "COMMA", "COLON", "SEMI", "AND", "OR", 
                             "LPAREN", "RPAREN", "LBRACK", "RBRACK", "EQUALS", 
                             "BANG", "ERR_CHAR", "ID", "PIPE" ];
    static ruleNames = [ "template_", "elements", "element", "singleElement", 
                         "compoundElement", "exprTag", "region", "subtemplate", 
                         "ifstat", "conditional", "andConditional", "notConditional", 
                         "notConditionalExpr", "exprOptions", "option", 
                         "expr", "mapExpr", "memberExpr", "mapTemplateRef", 
                         "includeExpr", "primary", "list_", "args", "argExprList", 
                         "namedArg" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = STParser.ruleNames;
        this.literalNames = STParser.literalNames;
        this.symbolicNames = STParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	template_() {
	    let localctx = new Template_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, STParser.RULE_template_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.elements();
	        this.state = 51;
	        this.match(STParser.EOF);
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



	elements() {
	    let localctx = new ElementsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, STParser.RULE_elements);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 53;
	                this.element(); 
	            }
	            this.state = 58;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
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
	    this.enterRule(localctx, 4, STParser.RULE_element);
	    try {
	        this.state = 61;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 59;
	            this.singleElement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 60;
	            this.compoundElement();
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



	singleElement() {
	    let localctx = new SingleElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, STParser.RULE_singleElement);
	    try {
	        this.state = 69;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case STParser.LDELIM:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 63;
	            this.exprTag();
	            break;
	        case STParser.TEXT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 65; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 64;
	            		this.match(STParser.TEXT);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 67; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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



	compoundElement() {
	    let localctx = new CompoundElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, STParser.RULE_compoundElement);
	    try {
	        this.state = 73;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 71;
	            this.ifstat();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 72;
	            this.region();
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



	exprTag() {
	    let localctx = new ExprTagContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, STParser.RULE_exprTag);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this.match(STParser.LDELIM);
	        this.state = 76;
	        this.mapExpr();
	        this.state = 79;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===STParser.SEMI) {
	            this.state = 77;
	            this.match(STParser.SEMI);
	            this.state = 78;
	            this.exprOptions();
	        }

	        this.state = 81;
	        this.match(STParser.RDELIM);
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



	region() {
	    let localctx = new RegionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, STParser.RULE_region);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this.match(STParser.LDELIM);
	        this.state = 84;
	        this.match(STParser.AT);
	        this.state = 85;
	        this.match(STParser.ID);
	        this.state = 86;
	        this.match(STParser.RDELIM);
	        this.state = 87;
	        this.elements();
	        this.state = 88;
	        this.match(STParser.LDELIM);
	        this.state = 89;
	        this.match(STParser.END);
	        this.state = 90;
	        this.match(STParser.RDELIM);
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



	subtemplate() {
	    let localctx = new SubtemplateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, STParser.RULE_subtemplate);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this.match(STParser.LBRACE);
	        this.state = 102;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===STParser.ID) {
	            this.state = 93;
	            this.match(STParser.ID);
	            this.state = 98;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===STParser.COMMA) {
	                this.state = 94;
	                this.match(STParser.COMMA);
	                this.state = 95;
	                this.match(STParser.ID);
	                this.state = 100;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 101;
	            this.match(STParser.PIPE);
	        }

	        this.state = 104;
	        this.elements();
	        this.state = 105;
	        this.match(STParser.RBRACE);
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



	ifstat() {
	    let localctx = new IfstatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, STParser.RULE_ifstat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this.match(STParser.LDELIM);
	        this.state = 108;
	        this.match(STParser.IF);
	        this.state = 109;
	        this.match(STParser.LPAREN);
	        this.state = 110;
	        this.conditional();
	        this.state = 111;
	        this.match(STParser.RPAREN);
	        this.state = 112;
	        this.match(STParser.RDELIM);
	        this.state = 113;
	        this.elements();
	        this.state = 124;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 114;
	                this.match(STParser.LDELIM);
	                this.state = 115;
	                this.match(STParser.ELSEIF);
	                this.state = 116;
	                this.match(STParser.LPAREN);
	                this.state = 117;
	                this.conditional();
	                this.state = 118;
	                this.match(STParser.RPAREN);
	                this.state = 119;
	                this.match(STParser.RDELIM);
	                this.state = 120;
	                this.elements(); 
	            }
	            this.state = 126;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	        }

	        this.state = 131;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        if(la_===1) {
	            this.state = 127;
	            this.match(STParser.LDELIM);
	            this.state = 128;
	            this.match(STParser.ELSE);
	            this.state = 129;
	            this.match(STParser.RDELIM);
	            this.state = 130;
	            this.elements();

	        }
	        this.state = 133;
	        this.match(STParser.LDELIM);
	        this.state = 134;
	        this.match(STParser.ENDIF);
	        this.state = 135;
	        this.match(STParser.RDELIM);
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



	conditional() {
	    let localctx = new ConditionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, STParser.RULE_conditional);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this.andConditional();
	        this.state = 142;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===STParser.OR) {
	            this.state = 138;
	            this.match(STParser.OR);
	            this.state = 139;
	            this.andConditional();
	            this.state = 144;
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



	andConditional() {
	    let localctx = new AndConditionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, STParser.RULE_andConditional);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        this.notConditional();
	        this.state = 150;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===STParser.AND) {
	            this.state = 146;
	            this.match(STParser.AND);
	            this.state = 147;
	            this.notConditional();
	            this.state = 152;
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



	notConditional() {
	    let localctx = new NotConditionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, STParser.RULE_notConditional);
	    try {
	        this.state = 156;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case STParser.BANG:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 153;
	            this.match(STParser.BANG);
	            this.state = 154;
	            this.notConditional();
	            break;
	        case STParser.LBRACE:
	        case STParser.STRING:
	        case STParser.SUPER:
	        case STParser.TRUE:
	        case STParser.FALSE:
	        case STParser.AT:
	        case STParser.LPAREN:
	        case STParser.LBRACK:
	        case STParser.ID:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 155;
	            this.memberExpr();
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



	notConditionalExpr() {
	    let localctx = new NotConditionalExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, STParser.RULE_notConditionalExpr);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        this.match(STParser.ID);
	        this.state = 168;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===STParser.DOT) {
	            this.state = 166;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 159;
	                this.match(STParser.DOT);
	                this.state = 160;
	                this.match(STParser.ID);
	                break;

	            case 2:
	                this.state = 161;
	                this.match(STParser.DOT);
	                this.state = 162;
	                this.match(STParser.LPAREN);
	                this.state = 163;
	                this.mapExpr();
	                this.state = 164;
	                this.match(STParser.RPAREN);
	                break;

	            }
	            this.state = 170;
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



	exprOptions() {
	    let localctx = new ExprOptionsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, STParser.RULE_exprOptions);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 171;
	        this.option();
	        this.state = 176;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===STParser.COMMA) {
	            this.state = 172;
	            this.match(STParser.COMMA);
	            this.state = 173;
	            this.option();
	            this.state = 178;
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



	option() {
	    let localctx = new OptionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, STParser.RULE_option);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 179;
	        this.match(STParser.ID);
	        this.state = 182;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===STParser.EQUALS) {
	            this.state = 180;
	            this.match(STParser.EQUALS);
	            this.state = 181;
	            this.expr();
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



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, STParser.RULE_expr);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        this.memberExpr();
	        this.state = 187;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===STParser.COLON) {
	            this.state = 185;
	            this.match(STParser.COLON);
	            this.state = 186;
	            this.mapTemplateRef();
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



	mapExpr() {
	    let localctx = new MapExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, STParser.RULE_mapExpr);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 189;
	        this.memberExpr();
	        this.state = 199;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===STParser.COMMA) {
	            this.state = 192; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 190;
	                this.match(STParser.COMMA);
	                this.state = 191;
	                this.memberExpr();
	                this.state = 194; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===STParser.COMMA);
	            this.state = 196;
	            this.match(STParser.COLON);
	            this.state = 197;
	            this.mapTemplateRef();
	        }

	        this.state = 212;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===STParser.COLON) {
	            this.state = 201;
	            this.match(STParser.COLON);
	            this.state = 202;
	            this.mapTemplateRef();
	            this.state = 207;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===STParser.COMMA) {
	                this.state = 203;
	                this.match(STParser.COMMA);
	                this.state = 204;
	                this.mapTemplateRef();
	                this.state = 209;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 214;
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



	memberExpr() {
	    let localctx = new MemberExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, STParser.RULE_memberExpr);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215;
	        this.includeExpr();
	        this.state = 225;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===STParser.DOT) {
	            this.state = 223;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 216;
	                this.match(STParser.DOT);
	                this.state = 217;
	                this.match(STParser.ID);
	                break;

	            case 2:
	                this.state = 218;
	                this.match(STParser.DOT);
	                this.state = 219;
	                this.match(STParser.LPAREN);
	                this.state = 220;
	                this.mapExpr();
	                this.state = 221;
	                this.match(STParser.RPAREN);
	                break;

	            }
	            this.state = 227;
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



	mapTemplateRef() {
	    let localctx = new MapTemplateRefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, STParser.RULE_mapTemplateRef);
	    var _la = 0; // Token type
	    try {
	        this.state = 244;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case STParser.ID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 228;
	            this.match(STParser.ID);
	            this.state = 229;
	            this.match(STParser.LPAREN);
	            this.state = 231;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 11)) & ~0x1f) == 0 && ((1 << (_la - 11)) & ((1 << (STParser.LBRACE - 11)) | (1 << (STParser.STRING - 11)) | (1 << (STParser.SUPER - 11)) | (1 << (STParser.TRUE - 11)) | (1 << (STParser.FALSE - 11)) | (1 << (STParser.AT - 11)) | (1 << (STParser.ELLIPSIS - 11)) | (1 << (STParser.LPAREN - 11)) | (1 << (STParser.LBRACK - 11)) | (1 << (STParser.ID - 11)))) !== 0)) {
	                this.state = 230;
	                this.args();
	            }

	            this.state = 233;
	            this.match(STParser.RPAREN);
	            break;
	        case STParser.LBRACE:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 234;
	            this.subtemplate();
	            break;
	        case STParser.LPAREN:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 235;
	            this.match(STParser.LPAREN);
	            this.state = 236;
	            this.mapExpr();
	            this.state = 237;
	            this.match(STParser.RPAREN);
	            this.state = 238;
	            this.match(STParser.LPAREN);
	            this.state = 240;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 11)) & ~0x1f) == 0 && ((1 << (_la - 11)) & ((1 << (STParser.LBRACE - 11)) | (1 << (STParser.STRING - 11)) | (1 << (STParser.SUPER - 11)) | (1 << (STParser.TRUE - 11)) | (1 << (STParser.FALSE - 11)) | (1 << (STParser.AT - 11)) | (1 << (STParser.LPAREN - 11)) | (1 << (STParser.LBRACK - 11)) | (1 << (STParser.ID - 11)))) !== 0)) {
	                this.state = 239;
	                this.argExprList();
	            }

	            this.state = 242;
	            this.match(STParser.RPAREN);
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



	includeExpr() {
	    let localctx = new IncludeExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, STParser.RULE_includeExpr);
	    var _la = 0; // Token type
	    try {
	        this.state = 277;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 246;
	            this.match(STParser.ID);
	            this.state = 247;
	            this.match(STParser.LPAREN);
	            this.state = 249;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 11)) & ~0x1f) == 0 && ((1 << (_la - 11)) & ((1 << (STParser.LBRACE - 11)) | (1 << (STParser.STRING - 11)) | (1 << (STParser.SUPER - 11)) | (1 << (STParser.TRUE - 11)) | (1 << (STParser.FALSE - 11)) | (1 << (STParser.AT - 11)) | (1 << (STParser.LPAREN - 11)) | (1 << (STParser.LBRACK - 11)) | (1 << (STParser.ID - 11)))) !== 0)) {
	                this.state = 248;
	                this.mapExpr();
	            }

	            this.state = 251;
	            this.match(STParser.RPAREN);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 252;
	            this.match(STParser.SUPER);
	            this.state = 253;
	            this.match(STParser.DOT);
	            this.state = 254;
	            this.match(STParser.ID);
	            this.state = 255;
	            this.match(STParser.LPAREN);
	            this.state = 257;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 11)) & ~0x1f) == 0 && ((1 << (_la - 11)) & ((1 << (STParser.LBRACE - 11)) | (1 << (STParser.STRING - 11)) | (1 << (STParser.SUPER - 11)) | (1 << (STParser.TRUE - 11)) | (1 << (STParser.FALSE - 11)) | (1 << (STParser.AT - 11)) | (1 << (STParser.ELLIPSIS - 11)) | (1 << (STParser.LPAREN - 11)) | (1 << (STParser.LBRACK - 11)) | (1 << (STParser.ID - 11)))) !== 0)) {
	                this.state = 256;
	                this.args();
	            }

	            this.state = 259;
	            this.match(STParser.RPAREN);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 260;
	            this.match(STParser.ID);
	            this.state = 261;
	            this.match(STParser.LPAREN);
	            this.state = 263;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 11)) & ~0x1f) == 0 && ((1 << (_la - 11)) & ((1 << (STParser.LBRACE - 11)) | (1 << (STParser.STRING - 11)) | (1 << (STParser.SUPER - 11)) | (1 << (STParser.TRUE - 11)) | (1 << (STParser.FALSE - 11)) | (1 << (STParser.AT - 11)) | (1 << (STParser.ELLIPSIS - 11)) | (1 << (STParser.LPAREN - 11)) | (1 << (STParser.LBRACK - 11)) | (1 << (STParser.ID - 11)))) !== 0)) {
	                this.state = 262;
	                this.args();
	            }

	            this.state = 265;
	            this.match(STParser.RPAREN);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 266;
	            this.match(STParser.AT);
	            this.state = 267;
	            this.match(STParser.SUPER);
	            this.state = 268;
	            this.match(STParser.DOT);
	            this.state = 269;
	            this.match(STParser.ID);
	            this.state = 270;
	            this.match(STParser.LPAREN);
	            this.state = 271;
	            this.match(STParser.RPAREN);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 272;
	            this.match(STParser.AT);
	            this.state = 273;
	            this.match(STParser.ID);
	            this.state = 274;
	            this.match(STParser.LPAREN);
	            this.state = 275;
	            this.match(STParser.RPAREN);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 276;
	            this.primary();
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



	primary() {
	    let localctx = new PrimaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, STParser.RULE_primary);
	    var _la = 0; // Token type
	    try {
	        this.state = 299;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 279;
	            this.match(STParser.ID);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 280;
	            this.match(STParser.STRING);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 281;
	            this.match(STParser.TRUE);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 282;
	            this.match(STParser.FALSE);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 283;
	            this.subtemplate();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 284;
	            this.list_();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 285;
	            this.match(STParser.LPAREN);
	            this.state = 286;
	            this.conditional();
	            this.state = 287;
	            this.match(STParser.RPAREN);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 289;
	            this.match(STParser.LPAREN);
	            this.state = 290;
	            this.mapExpr();
	            this.state = 291;
	            this.match(STParser.RPAREN);
	            this.state = 297;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===STParser.LPAREN) {
	                this.state = 292;
	                this.match(STParser.LPAREN);
	                this.state = 294;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(((((_la - 11)) & ~0x1f) == 0 && ((1 << (_la - 11)) & ((1 << (STParser.LBRACE - 11)) | (1 << (STParser.STRING - 11)) | (1 << (STParser.SUPER - 11)) | (1 << (STParser.TRUE - 11)) | (1 << (STParser.FALSE - 11)) | (1 << (STParser.AT - 11)) | (1 << (STParser.LPAREN - 11)) | (1 << (STParser.LBRACK - 11)) | (1 << (STParser.ID - 11)))) !== 0)) {
	                    this.state = 293;
	                    this.argExprList();
	                }

	                this.state = 296;
	                this.match(STParser.RPAREN);
	            }

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



	list_() {
	    let localctx = new List_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, STParser.RULE_list_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 301;
	        this.match(STParser.LBRACK);
	        this.state = 303;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 11)) & ~0x1f) == 0 && ((1 << (_la - 11)) & ((1 << (STParser.LBRACE - 11)) | (1 << (STParser.STRING - 11)) | (1 << (STParser.SUPER - 11)) | (1 << (STParser.TRUE - 11)) | (1 << (STParser.FALSE - 11)) | (1 << (STParser.AT - 11)) | (1 << (STParser.LPAREN - 11)) | (1 << (STParser.LBRACK - 11)) | (1 << (STParser.ID - 11)))) !== 0)) {
	            this.state = 302;
	            this.argExprList();
	        }

	        this.state = 305;
	        this.match(STParser.RBRACK);
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



	args() {
	    let localctx = new ArgsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, STParser.RULE_args);
	    var _la = 0; // Token type
	    try {
	        this.state = 321;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 307;
	            this.argExprList();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 308;
	            this.namedArg();
	            this.state = 313;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,35,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 309;
	                    this.match(STParser.COMMA);
	                    this.state = 310;
	                    this.namedArg(); 
	                }
	                this.state = 315;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,35,this._ctx);
	            }

	            this.state = 318;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===STParser.COMMA) {
	                this.state = 316;
	                this.match(STParser.COMMA);
	                this.state = 317;
	                this.match(STParser.ELLIPSIS);
	            }

	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 320;
	            this.match(STParser.ELLIPSIS);
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



	argExprList() {
	    let localctx = new ArgExprListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, STParser.RULE_argExprList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 323;
	        this.expr();
	        this.state = 328;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===STParser.COMMA) {
	            this.state = 324;
	            this.match(STParser.COMMA);
	            this.state = 325;
	            this.expr();
	            this.state = 330;
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



	namedArg() {
	    let localctx = new NamedArgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, STParser.RULE_namedArg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 331;
	        this.match(STParser.ID);
	        this.state = 332;
	        this.match(STParser.EQUALS);
	        this.state = 333;
	        this.expr();
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

STParser.EOF = antlr4.Token.EOF;
STParser.DOC_COMMENT = 1;
STParser.BLOCK_COMMENT = 2;
STParser.LINE_COMMENT = 3;
STParser.TMPL_COMMENT = 4;
STParser.HORZ_WS = 5;
STParser.VERT_WS = 6;
STParser.ESCAPE = 7;
STParser.LDELIM = 8;
STParser.RBRACE = 9;
STParser.TEXT = 10;
STParser.LBRACE = 11;
STParser.RDELIM = 12;
STParser.STRING = 13;
STParser.IF = 14;
STParser.ELSEIF = 15;
STParser.ELSE = 16;
STParser.ENDIF = 17;
STParser.SUPER = 18;
STParser.END = 19;
STParser.TRUE = 20;
STParser.FALSE = 21;
STParser.AT = 22;
STParser.ELLIPSIS = 23;
STParser.DOT = 24;
STParser.COMMA = 25;
STParser.COLON = 26;
STParser.SEMI = 27;
STParser.AND = 28;
STParser.OR = 29;
STParser.LPAREN = 30;
STParser.RPAREN = 31;
STParser.LBRACK = 32;
STParser.RBRACK = 33;
STParser.EQUALS = 34;
STParser.BANG = 35;
STParser.ERR_CHAR = 36;
STParser.ID = 37;
STParser.PIPE = 38;

STParser.RULE_template_ = 0;
STParser.RULE_elements = 1;
STParser.RULE_element = 2;
STParser.RULE_singleElement = 3;
STParser.RULE_compoundElement = 4;
STParser.RULE_exprTag = 5;
STParser.RULE_region = 6;
STParser.RULE_subtemplate = 7;
STParser.RULE_ifstat = 8;
STParser.RULE_conditional = 9;
STParser.RULE_andConditional = 10;
STParser.RULE_notConditional = 11;
STParser.RULE_notConditionalExpr = 12;
STParser.RULE_exprOptions = 13;
STParser.RULE_option = 14;
STParser.RULE_expr = 15;
STParser.RULE_mapExpr = 16;
STParser.RULE_memberExpr = 17;
STParser.RULE_mapTemplateRef = 18;
STParser.RULE_includeExpr = 19;
STParser.RULE_primary = 20;
STParser.RULE_list_ = 21;
STParser.RULE_args = 22;
STParser.RULE_argExprList = 23;
STParser.RULE_namedArg = 24;

class Template_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STParser.RULE_template_;
    }

	elements() {
	    return this.getTypedRuleContext(ElementsContext,0);
	};

	EOF() {
	    return this.getToken(STParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.enterTemplate_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.exitTemplate_(this);
		}
	}


}



class ElementsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STParser.RULE_elements;
    }

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

	enterRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.enterElements(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.exitElements(this);
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
        this.ruleIndex = STParser.RULE_element;
    }

	singleElement() {
	    return this.getTypedRuleContext(SingleElementContext,0);
	};

	compoundElement() {
	    return this.getTypedRuleContext(CompoundElementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.enterElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.exitElement(this);
		}
	}


}



class SingleElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STParser.RULE_singleElement;
    }

	exprTag() {
	    return this.getTypedRuleContext(ExprTagContext,0);
	};

	TEXT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(STParser.TEXT);
	    } else {
	        return this.getToken(STParser.TEXT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.enterSingleElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.exitSingleElement(this);
		}
	}


}



class CompoundElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STParser.RULE_compoundElement;
    }

	ifstat() {
	    return this.getTypedRuleContext(IfstatContext,0);
	};

	region() {
	    return this.getTypedRuleContext(RegionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.enterCompoundElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.exitCompoundElement(this);
		}
	}


}



class ExprTagContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STParser.RULE_exprTag;
    }

	LDELIM() {
	    return this.getToken(STParser.LDELIM, 0);
	};

	mapExpr() {
	    return this.getTypedRuleContext(MapExprContext,0);
	};

	RDELIM() {
	    return this.getToken(STParser.RDELIM, 0);
	};

	SEMI() {
	    return this.getToken(STParser.SEMI, 0);
	};

	exprOptions() {
	    return this.getTypedRuleContext(ExprOptionsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.enterExprTag(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.exitExprTag(this);
		}
	}


}



class RegionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STParser.RULE_region;
    }

	LDELIM = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(STParser.LDELIM);
	    } else {
	        return this.getToken(STParser.LDELIM, i);
	    }
	};


	AT() {
	    return this.getToken(STParser.AT, 0);
	};

	ID() {
	    return this.getToken(STParser.ID, 0);
	};

	RDELIM = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(STParser.RDELIM);
	    } else {
	        return this.getToken(STParser.RDELIM, i);
	    }
	};


	elements() {
	    return this.getTypedRuleContext(ElementsContext,0);
	};

	END() {
	    return this.getToken(STParser.END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.enterRegion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.exitRegion(this);
		}
	}


}



class SubtemplateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STParser.RULE_subtemplate;
    }

	LBRACE() {
	    return this.getToken(STParser.LBRACE, 0);
	};

	elements() {
	    return this.getTypedRuleContext(ElementsContext,0);
	};

	RBRACE() {
	    return this.getToken(STParser.RBRACE, 0);
	};

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(STParser.ID);
	    } else {
	        return this.getToken(STParser.ID, i);
	    }
	};


	PIPE() {
	    return this.getToken(STParser.PIPE, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(STParser.COMMA);
	    } else {
	        return this.getToken(STParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.enterSubtemplate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.exitSubtemplate(this);
		}
	}


}



class IfstatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STParser.RULE_ifstat;
    }

	LDELIM = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(STParser.LDELIM);
	    } else {
	        return this.getToken(STParser.LDELIM, i);
	    }
	};


	IF() {
	    return this.getToken(STParser.IF, 0);
	};

	LPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(STParser.LPAREN);
	    } else {
	        return this.getToken(STParser.LPAREN, i);
	    }
	};


	conditional = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConditionalContext);
	    } else {
	        return this.getTypedRuleContext(ConditionalContext,i);
	    }
	};

	RPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(STParser.RPAREN);
	    } else {
	        return this.getToken(STParser.RPAREN, i);
	    }
	};


	RDELIM = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(STParser.RDELIM);
	    } else {
	        return this.getToken(STParser.RDELIM, i);
	    }
	};


	elements = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElementsContext);
	    } else {
	        return this.getTypedRuleContext(ElementsContext,i);
	    }
	};

	ENDIF() {
	    return this.getToken(STParser.ENDIF, 0);
	};

	ELSEIF = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(STParser.ELSEIF);
	    } else {
	        return this.getToken(STParser.ELSEIF, i);
	    }
	};


	ELSE() {
	    return this.getToken(STParser.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.enterIfstat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.exitIfstat(this);
		}
	}


}



class ConditionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STParser.RULE_conditional;
    }

	andConditional = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AndConditionalContext);
	    } else {
	        return this.getTypedRuleContext(AndConditionalContext,i);
	    }
	};

	OR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(STParser.OR);
	    } else {
	        return this.getToken(STParser.OR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.enterConditional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.exitConditional(this);
		}
	}


}



class AndConditionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STParser.RULE_andConditional;
    }

	notConditional = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NotConditionalContext);
	    } else {
	        return this.getTypedRuleContext(NotConditionalContext,i);
	    }
	};

	AND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(STParser.AND);
	    } else {
	        return this.getToken(STParser.AND, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.enterAndConditional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.exitAndConditional(this);
		}
	}


}



class NotConditionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STParser.RULE_notConditional;
    }

	BANG() {
	    return this.getToken(STParser.BANG, 0);
	};

	notConditional() {
	    return this.getTypedRuleContext(NotConditionalContext,0);
	};

	memberExpr() {
	    return this.getTypedRuleContext(MemberExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.enterNotConditional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.exitNotConditional(this);
		}
	}


}



class NotConditionalExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STParser.RULE_notConditionalExpr;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(STParser.ID);
	    } else {
	        return this.getToken(STParser.ID, i);
	    }
	};


	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(STParser.DOT);
	    } else {
	        return this.getToken(STParser.DOT, i);
	    }
	};


	LPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(STParser.LPAREN);
	    } else {
	        return this.getToken(STParser.LPAREN, i);
	    }
	};


	mapExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MapExprContext);
	    } else {
	        return this.getTypedRuleContext(MapExprContext,i);
	    }
	};

	RPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(STParser.RPAREN);
	    } else {
	        return this.getToken(STParser.RPAREN, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.enterNotConditionalExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.exitNotConditionalExpr(this);
		}
	}


}



class ExprOptionsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STParser.RULE_exprOptions;
    }

	option = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OptionContext);
	    } else {
	        return this.getTypedRuleContext(OptionContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(STParser.COMMA);
	    } else {
	        return this.getToken(STParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.enterExprOptions(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.exitExprOptions(this);
		}
	}


}



class OptionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STParser.RULE_option;
    }

	ID() {
	    return this.getToken(STParser.ID, 0);
	};

	EQUALS() {
	    return this.getToken(STParser.EQUALS, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.enterOption(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.exitOption(this);
		}
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STParser.RULE_expr;
    }

	memberExpr() {
	    return this.getTypedRuleContext(MemberExprContext,0);
	};

	COLON() {
	    return this.getToken(STParser.COLON, 0);
	};

	mapTemplateRef() {
	    return this.getTypedRuleContext(MapTemplateRefContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.exitExpr(this);
		}
	}


}



class MapExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STParser.RULE_mapExpr;
    }

	memberExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MemberExprContext);
	    } else {
	        return this.getTypedRuleContext(MemberExprContext,i);
	    }
	};

	COLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(STParser.COLON);
	    } else {
	        return this.getToken(STParser.COLON, i);
	    }
	};


	mapTemplateRef = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MapTemplateRefContext);
	    } else {
	        return this.getTypedRuleContext(MapTemplateRefContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(STParser.COMMA);
	    } else {
	        return this.getToken(STParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.enterMapExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.exitMapExpr(this);
		}
	}


}



class MemberExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STParser.RULE_memberExpr;
    }

	includeExpr() {
	    return this.getTypedRuleContext(IncludeExprContext,0);
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(STParser.DOT);
	    } else {
	        return this.getToken(STParser.DOT, i);
	    }
	};


	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(STParser.ID);
	    } else {
	        return this.getToken(STParser.ID, i);
	    }
	};


	LPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(STParser.LPAREN);
	    } else {
	        return this.getToken(STParser.LPAREN, i);
	    }
	};


	mapExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MapExprContext);
	    } else {
	        return this.getTypedRuleContext(MapExprContext,i);
	    }
	};

	RPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(STParser.RPAREN);
	    } else {
	        return this.getToken(STParser.RPAREN, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.enterMemberExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.exitMemberExpr(this);
		}
	}


}



class MapTemplateRefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STParser.RULE_mapTemplateRef;
    }

	ID() {
	    return this.getToken(STParser.ID, 0);
	};

	LPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(STParser.LPAREN);
	    } else {
	        return this.getToken(STParser.LPAREN, i);
	    }
	};


	RPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(STParser.RPAREN);
	    } else {
	        return this.getToken(STParser.RPAREN, i);
	    }
	};


	args() {
	    return this.getTypedRuleContext(ArgsContext,0);
	};

	subtemplate() {
	    return this.getTypedRuleContext(SubtemplateContext,0);
	};

	mapExpr() {
	    return this.getTypedRuleContext(MapExprContext,0);
	};

	argExprList() {
	    return this.getTypedRuleContext(ArgExprListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.enterMapTemplateRef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.exitMapTemplateRef(this);
		}
	}


}



class IncludeExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STParser.RULE_includeExpr;
    }

	ID() {
	    return this.getToken(STParser.ID, 0);
	};

	LPAREN() {
	    return this.getToken(STParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(STParser.RPAREN, 0);
	};

	mapExpr() {
	    return this.getTypedRuleContext(MapExprContext,0);
	};

	SUPER() {
	    return this.getToken(STParser.SUPER, 0);
	};

	DOT() {
	    return this.getToken(STParser.DOT, 0);
	};

	args() {
	    return this.getTypedRuleContext(ArgsContext,0);
	};

	AT() {
	    return this.getToken(STParser.AT, 0);
	};

	primary() {
	    return this.getTypedRuleContext(PrimaryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.enterIncludeExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.exitIncludeExpr(this);
		}
	}


}



class PrimaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STParser.RULE_primary;
    }

	ID() {
	    return this.getToken(STParser.ID, 0);
	};

	STRING() {
	    return this.getToken(STParser.STRING, 0);
	};

	TRUE() {
	    return this.getToken(STParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(STParser.FALSE, 0);
	};

	subtemplate() {
	    return this.getTypedRuleContext(SubtemplateContext,0);
	};

	list_() {
	    return this.getTypedRuleContext(List_Context,0);
	};

	LPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(STParser.LPAREN);
	    } else {
	        return this.getToken(STParser.LPAREN, i);
	    }
	};


	conditional() {
	    return this.getTypedRuleContext(ConditionalContext,0);
	};

	RPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(STParser.RPAREN);
	    } else {
	        return this.getToken(STParser.RPAREN, i);
	    }
	};


	mapExpr() {
	    return this.getTypedRuleContext(MapExprContext,0);
	};

	argExprList() {
	    return this.getTypedRuleContext(ArgExprListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.enterPrimary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.exitPrimary(this);
		}
	}


}



class List_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STParser.RULE_list_;
    }

	LBRACK() {
	    return this.getToken(STParser.LBRACK, 0);
	};

	RBRACK() {
	    return this.getToken(STParser.RBRACK, 0);
	};

	argExprList() {
	    return this.getTypedRuleContext(ArgExprListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.enterList_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.exitList_(this);
		}
	}


}



class ArgsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STParser.RULE_args;
    }

	argExprList() {
	    return this.getTypedRuleContext(ArgExprListContext,0);
	};

	namedArg = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NamedArgContext);
	    } else {
	        return this.getTypedRuleContext(NamedArgContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(STParser.COMMA);
	    } else {
	        return this.getToken(STParser.COMMA, i);
	    }
	};


	ELLIPSIS() {
	    return this.getToken(STParser.ELLIPSIS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.enterArgs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.exitArgs(this);
		}
	}


}



class ArgExprListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STParser.RULE_argExprList;
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(STParser.COMMA);
	    } else {
	        return this.getToken(STParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.enterArgExprList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.exitArgExprList(this);
		}
	}


}



class NamedArgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STParser.RULE_namedArg;
    }

	ID() {
	    return this.getToken(STParser.ID, 0);
	};

	EQUALS() {
	    return this.getToken(STParser.EQUALS, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.enterNamedArg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STParserListener ) {
	        listener.exitNamedArg(this);
		}
	}


}




STParser.Template_Context = Template_Context; 
STParser.ElementsContext = ElementsContext; 
STParser.ElementContext = ElementContext; 
STParser.SingleElementContext = SingleElementContext; 
STParser.CompoundElementContext = CompoundElementContext; 
STParser.ExprTagContext = ExprTagContext; 
STParser.RegionContext = RegionContext; 
STParser.SubtemplateContext = SubtemplateContext; 
STParser.IfstatContext = IfstatContext; 
STParser.ConditionalContext = ConditionalContext; 
STParser.AndConditionalContext = AndConditionalContext; 
STParser.NotConditionalContext = NotConditionalContext; 
STParser.NotConditionalExprContext = NotConditionalExprContext; 
STParser.ExprOptionsContext = ExprOptionsContext; 
STParser.OptionContext = OptionContext; 
STParser.ExprContext = ExprContext; 
STParser.MapExprContext = MapExprContext; 
STParser.MemberExprContext = MemberExprContext; 
STParser.MapTemplateRefContext = MapTemplateRefContext; 
STParser.IncludeExprContext = IncludeExprContext; 
STParser.PrimaryContext = PrimaryContext; 
STParser.List_Context = List_Context; 
STParser.ArgsContext = ArgsContext; 
STParser.ArgExprListContext = ArgExprListContext; 
STParser.NamedArgContext = NamedArgContext; 
