// Generated from ./z/ZOperatorParser.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ZOperatorParserListener from './ZOperatorParserListener.js';
const serializedATN = [4,1,154,243,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,1,0,1,0,1,0,5,0,46,8,0,10,0,12,0,49,9,0,1,0,1,0,1,1,1,1,1,1,1,1,
1,1,3,1,58,8,1,1,1,1,1,5,1,62,8,1,10,1,12,1,65,9,1,1,1,1,1,1,1,1,1,1,1,5,
1,72,8,1,10,1,12,1,75,9,1,3,1,77,8,1,1,2,1,2,1,2,1,2,1,2,1,2,5,2,85,8,2,
10,2,12,2,88,9,2,1,2,1,2,1,2,5,2,93,8,2,10,2,12,2,96,9,2,1,2,1,2,1,2,5,2,
101,8,2,10,2,12,2,104,9,2,1,2,3,2,107,8,2,1,3,1,3,1,3,5,3,112,8,3,10,3,12,
3,115,9,3,1,4,1,4,1,4,1,4,1,4,1,4,3,4,123,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,
5,3,5,132,8,5,1,6,1,6,1,7,1,7,1,8,1,8,1,8,1,8,3,8,142,8,8,1,9,1,9,1,9,1,
9,3,9,148,8,9,1,9,1,9,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,12,1,12,
1,12,1,12,1,13,1,13,1,13,1,14,1,14,1,14,1,15,1,15,1,15,1,16,1,16,1,16,1,
17,1,17,1,17,1,17,1,17,5,17,181,8,17,10,17,12,17,184,9,17,1,17,1,17,3,17,
188,8,17,1,17,1,17,3,17,192,8,17,1,18,1,18,1,18,1,18,1,18,1,18,5,18,200,
8,18,10,18,12,18,203,9,18,1,18,1,18,3,18,207,8,18,3,18,209,8,18,1,19,1,19,
1,19,1,19,1,19,1,19,1,19,5,19,218,8,19,10,19,12,19,221,9,19,1,19,1,19,3,
19,225,8,19,1,19,1,19,3,19,229,8,19,1,20,1,20,1,20,5,20,234,8,20,10,20,12,
20,237,9,20,1,20,1,20,3,20,241,8,20,1,20,3,86,94,102,0,21,0,2,4,6,8,10,12,
14,16,18,20,22,24,26,28,30,32,34,36,38,40,0,1,2,0,27,27,33,33,259,0,47,1,
0,0,0,2,76,1,0,0,0,4,106,1,0,0,0,6,108,1,0,0,0,8,122,1,0,0,0,10,131,1,0,
0,0,12,133,1,0,0,0,14,135,1,0,0,0,16,141,1,0,0,0,18,143,1,0,0,0,20,151,1,
0,0,0,22,155,1,0,0,0,24,159,1,0,0,0,26,163,1,0,0,0,28,166,1,0,0,0,30,169,
1,0,0,0,32,172,1,0,0,0,34,191,1,0,0,0,36,208,1,0,0,0,38,228,1,0,0,0,40,230,
1,0,0,0,42,46,5,4,0,0,43,46,3,2,1,0,44,46,3,4,2,0,45,42,1,0,0,0,45,43,1,
0,0,0,45,44,1,0,0,0,46,49,1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,50,1,0,
0,0,49,47,1,0,0,0,50,51,5,0,0,1,51,1,1,0,0,0,52,53,5,1,0,0,53,54,5,34,0,
0,54,55,5,68,0,0,55,57,5,30,0,0,56,58,3,6,3,0,57,56,1,0,0,0,57,58,1,0,0,
0,58,59,1,0,0,0,59,63,5,18,0,0,60,62,3,4,2,0,61,60,1,0,0,0,62,65,1,0,0,0,
63,61,1,0,0,0,63,64,1,0,0,0,64,77,1,0,0,0,65,63,1,0,0,0,66,67,5,1,0,0,67,
68,5,34,0,0,68,69,5,68,0,0,69,73,5,18,0,0,70,72,3,4,2,0,71,70,1,0,0,0,72,
75,1,0,0,0,73,71,1,0,0,0,73,74,1,0,0,0,74,77,1,0,0,0,75,73,1,0,0,0,76,52,
1,0,0,0,76,66,1,0,0,0,77,3,1,0,0,0,78,79,5,1,0,0,79,80,3,8,4,0,80,81,5,18,
0,0,81,107,1,0,0,0,82,86,5,3,0,0,83,85,9,0,0,0,84,83,1,0,0,0,85,88,1,0,0,
0,86,87,1,0,0,0,86,84,1,0,0,0,87,89,1,0,0,0,88,86,1,0,0,0,89,107,5,18,0,
0,90,94,5,2,0,0,91,93,9,0,0,0,92,91,1,0,0,0,93,96,1,0,0,0,94,95,1,0,0,0,
94,92,1,0,0,0,95,97,1,0,0,0,96,94,1,0,0,0,97,107,5,18,0,0,98,102,5,1,0,0,
99,101,9,0,0,0,100,99,1,0,0,0,101,104,1,0,0,0,102,103,1,0,0,0,102,100,1,
0,0,0,103,105,1,0,0,0,104,102,1,0,0,0,105,107,5,18,0,0,106,78,1,0,0,0,106,
82,1,0,0,0,106,90,1,0,0,0,106,98,1,0,0,0,107,5,1,0,0,0,108,113,5,68,0,0,
109,110,5,39,0,0,110,112,5,68,0,0,111,109,1,0,0,0,112,115,1,0,0,0,113,111,
1,0,0,0,113,114,1,0,0,0,114,7,1,0,0,0,115,113,1,0,0,0,116,117,5,32,0,0,117,
123,3,16,8,0,118,119,5,24,0,0,119,123,3,10,5,0,120,121,5,25,0,0,121,123,
3,10,5,0,122,116,1,0,0,0,122,118,1,0,0,0,122,120,1,0,0,0,123,9,1,0,0,0,124,
132,3,18,9,0,125,132,3,20,10,0,126,127,3,12,6,0,127,128,3,14,7,0,128,129,
3,22,11,0,129,132,1,0,0,0,130,132,3,24,12,0,131,124,1,0,0,0,131,125,1,0,
0,0,131,126,1,0,0,0,131,130,1,0,0,0,132,11,1,0,0,0,133,134,5,5,0,0,134,13,
1,0,0,0,135,136,7,0,0,0,136,15,1,0,0,0,137,142,3,18,9,0,138,142,3,20,10,
0,139,142,3,22,11,0,140,142,3,24,12,0,141,137,1,0,0,0,141,138,1,0,0,0,141,
139,1,0,0,0,141,140,1,0,0,0,142,17,1,0,0,0,143,147,5,7,0,0,144,148,3,34,
17,0,145,146,5,29,0,0,146,148,5,47,0,0,147,144,1,0,0,0,147,145,1,0,0,0,148,
149,1,0,0,0,149,150,5,8,0,0,150,19,1,0,0,0,151,152,5,7,0,0,152,153,3,36,
18,0,153,154,5,8,0,0,154,21,1,0,0,0,155,156,5,7,0,0,156,157,3,38,19,0,157,
158,5,8,0,0,158,23,1,0,0,0,159,160,5,7,0,0,160,161,3,40,20,0,161,162,5,8,
0,0,162,25,1,0,0,0,163,164,5,47,0,0,164,165,5,68,0,0,165,27,1,0,0,0,166,
167,5,48,0,0,167,168,5,68,0,0,168,29,1,0,0,0,169,170,5,47,0,0,170,171,5,
68,0,0,171,31,1,0,0,0,172,173,5,48,0,0,173,174,5,68,0,0,174,33,1,0,0,0,175,
176,5,68,0,0,176,192,5,47,0,0,177,182,5,68,0,0,178,181,3,26,13,0,179,181,
3,28,14,0,180,178,1,0,0,0,180,179,1,0,0,0,181,184,1,0,0,0,182,180,1,0,0,
0,182,183,1,0,0,0,183,187,1,0,0,0,184,182,1,0,0,0,185,188,3,30,15,0,186,
188,3,32,16,0,187,185,1,0,0,0,187,186,1,0,0,0,188,189,1,0,0,0,189,190,5,
47,0,0,190,192,1,0,0,0,191,175,1,0,0,0,191,177,1,0,0,0,192,35,1,0,0,0,193,
194,5,47,0,0,194,209,5,68,0,0,195,196,5,47,0,0,196,201,5,68,0,0,197,200,
3,26,13,0,198,200,3,28,14,0,199,197,1,0,0,0,199,198,1,0,0,0,200,203,1,0,
0,0,201,199,1,0,0,0,201,202,1,0,0,0,202,206,1,0,0,0,203,201,1,0,0,0,204,
207,3,30,15,0,205,207,3,32,16,0,206,204,1,0,0,0,206,205,1,0,0,0,207,209,
1,0,0,0,208,193,1,0,0,0,208,195,1,0,0,0,209,37,1,0,0,0,210,211,5,47,0,0,
211,212,5,68,0,0,212,229,5,47,0,0,213,214,5,47,0,0,214,219,5,68,0,0,215,
218,3,26,13,0,216,218,3,28,14,0,217,215,1,0,0,0,217,216,1,0,0,0,218,221,
1,0,0,0,219,217,1,0,0,0,219,220,1,0,0,0,220,224,1,0,0,0,221,219,1,0,0,0,
222,225,3,30,15,0,223,225,3,32,16,0,224,222,1,0,0,0,224,223,1,0,0,0,225,
226,1,0,0,0,226,227,5,47,0,0,227,229,1,0,0,0,228,210,1,0,0,0,228,213,1,0,
0,0,229,39,1,0,0,0,230,235,5,68,0,0,231,234,3,26,13,0,232,234,3,28,14,0,
233,231,1,0,0,0,233,232,1,0,0,0,234,237,1,0,0,0,235,233,1,0,0,0,235,236,
1,0,0,0,236,240,1,0,0,0,237,235,1,0,0,0,238,241,3,30,15,0,239,241,3,32,16,
0,240,238,1,0,0,0,240,239,1,0,0,0,241,41,1,0,0,0,30,45,47,57,63,73,76,86,
94,102,106,113,122,131,141,147,180,182,187,191,199,201,206,208,217,219,224,
228,233,235,240];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ZOperatorParser extends antlr4.Parser {

    static grammarFileName = "ZOperatorParser.g4";
    static literalNames = [ null, "'\\u2500'", "'\\u250C'", "'\\u2577'", 
                            null, null, null, "'\\u0028'", "'\\u0029'", 
                            "'\\u005B'", "'\\u005D'", "'\\u007B'", "'\\u007D'", 
                            "'\\u2989'", "'\\u298A'", "'\\u27EA'", "'\\u27EB'", 
                            "'\\u2550'", "'\\u2514'", null, null, null, 
                            "'else'", "'false'", "'function'", "'generic'", 
                            "'if'", "'leftassoc'", "'let'", "'\\u2119'", 
                            "'parents'", "'pre'", "'relation'", "'rightassoc'", 
                            "'section'", "'then'", "'true'", "':'", "'=='", 
                            "','", "'::='", "'|'", "'\\u0026'", "'\\u005C'", 
                            "'/'", "'.'", "';'", "'_'", "',,'", "'='", null, 
                            "'\\u2200'", "'\\u2981'", "'\\u2203'", null, 
                            "'\\u21D4'", "'\\u21D2'", "'\\u2228'", "'\\u2227'", 
                            "'\\u00AC'", "'\\u2208'", "'\\u2A21'", "'\\u00D7'", 
                            "'\\u03B8'", "'\\u03BB'", "'\\u03BC'", "'\\u2A1F'", 
                            "'\\u2A20'", null, null, "'\\u0394'", "'\\u039E'", 
                            "'\\uD835\\uDD38'", "'\\u2115'", "'\\u2032'", 
                            "'\\u0021'", "'\\u003F'", "'\\u2197'", "'\\u2199'", 
                            "'\\u2198'", "'\\u2196'", "'\\u22A2'", "'\\u29F9'", 
                            "'\\u002B'", null, "'\\u2194'", "'\\u2192'", 
                            "'\\u2260'", "'\\u2209'", "'\\u2205'", "'\\u2286'", 
                            "'\\u2282'", "'\\u222A'", "'\\u2229'", "'\\u2216'", 
                            "'\\u2296'", "'\\u22C3'", "'\\u22C2'", "'\\uD835\\uDD3D'", 
                            "'\\u21A6'", "'\\u2A3E'", "'\\u2218'", "'\\u25C1'", 
                            "'\\u25B7'", "'\\u2A64'", "'\\u2A65'", "'\\u223C'", 
                            "'\\u2987'", "'\\u2988'", "'\\u2295'", "'\\u21F8'", 
                            "'\\u2914'", "'\\u21A3'", "'\\u2900'", "'\\u21A0'", 
                            "'\\u2916'", "'\\u21FB'", "'\\u2915'", "'\\u2124'", 
                            "'\\u002D'", "'\\u2212'", "'\\u2264'", "'\\u003C'", 
                            "'\\u2265'", "'\\u003E'", "'\\u002A'", "'\\u0023'", 
                            "'\\u2040'", "'\\u21BF'", "'\\u21BE'", "'\\u27E8'", 
                            "'\\u27E9'", null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            "'\\u2028'" ];
    static symbolicNames = [ null, "ZED", "SCH", "AX", "TEXT", "NUMERAL", 
                             "STROKE", "LEFT_PARENTHESIS", "RIGHT_PARENTHESIS", 
                             "LEFT_SQUARE_BRACKET", "RIGHT_SQUARE_BRACKET", 
                             "LEFT_CURLY_BRACKET", "RIGHT_CURLY_BRACKET", 
                             "LEFT_BINDING_BRACKET", "RIGHT_BINDING_BRACKET", 
                             "LEFT_DOUBLE_ANGLE_BRACKET", "RIGHT_DOUBLE_ANGLE_BRACKET", 
                             "GEN", "END", "WS", "NL", "IGNORE_NL", "ELSE", 
                             "FALSE", "FUNCTION", "GENERIC", "IF", "LEFTASSOC", 
                             "LET", "POWERSET", "PARENTS", "PRE_KEY", "RELATION", 
                             "RIGHTASSOC", "SECTION", "THEN", "TRUE", "COLON", 
                             "DEFINE_EQUAL", "COMMA", "FREE_EQUALS", "VERTICAL_LINE", 
                             "AMPERSAND", "REVERSE_SOLIDUS", "SOLIDUS", 
                             "FULL_STOP", "SEMICOLON", "ARGUMENT", "LIST", 
                             "EQUALS_SIGN", "CONJECTURE", "FOR_ALL", "SPOT", 
                             "THERE_EXISTS", "UNIQUE_EXISTS", "LEFT_RIGHT_DOUBLE_ARROW", 
                             "RIGHTWARDS_DOUBLE_ARROW", "LOGICAL_OR", "LOGICAL_AND", 
                             "NOT_SIGN", "ELEMENT_OF", "SCHEMA_PROJECTION", 
                             "MULTIPLICATION_SIGN", "GREEK_SMALL_LETTER_THETA", 
                             "GREEK_SMALL_LETTER_LAMBDA", "GREEK_SMALL_LETTER_MU", 
                             "SCHEMA_COMPOSITION", "SCHEMA_PIPING", "NAME", 
                             "WORDPART", "GREEK_CAPITAL_LETTER_DELTA", "GREEK_CAPITAL_LETTER_XI", 
                             "MATHEMATICAL_DOUBLE_STRUCK_CAPITAL_A", "DOUBLE_STRUCK_CAPITAL_N", 
                             "MODIFIER_LETTER_PRIME", "EXCLAMATION_MARK", 
                             "QUESTION_MARK", "NORTH_EAST_ARROW", "SOUTH_WEST_ARROW", 
                             "SOUTH_EAST_ARROW", "NORTH_WEST_ARROW", "RIGHT_TACK", 
                             "BIG_REVERSE_SOLIDUS", "PLUS_SIGN", "MATHEMATICAL_TOOLKIT_SYMBOLS", 
                             "LEFT_RIGHT_ARROW", "RIGHTWARDS_ARROW", "NOT_EQUAL_TO", 
                             "NOT_AN_ELEMENT_OF", "EMPTY_SET", "SUBSET_OF_OR_EQUAL_TO", 
                             "SUBSET_OF", "UNION", "INTERSECTION", "SET_MINUS", 
                             "CIRCLED_MINUS", "N_ARY_UNION", "N_ARY_INTERSECTION", 
                             "MATHEMATICAL_DOUBLE_STRUCK_CAPITAL_F", "RIGHTWARDS_ARROW_FROM_BAR", 
                             "RELATIONAL_COMPOSITION", "RING_OPERATOR", 
                             "WHITE_LEFT_POINTING_TRIANGLE", "WHITE_RIGHT_POINTING_TRIANGLE", 
                             "DOMAIN_ANTIRESTRICTION", "RANGE_ANTIRESTRICTION", 
                             "TILDE_OPERATOR", "LEFT_IMAGE_BRACKET", "RIGHT_IMAGE_BRACKET", 
                             "CIRCLED_PLUS", "RIGHTWARDS_ARROW_WITH_VERTICAL_STROKE", 
                             "RIGHTWARDS_ARROW_WITH_TAIL_WITH_VERTICAL_STROKE", 
                             "RIGHTWARDS_ARROW_WITH_TAIL", "RIGHTWARDS_TWO_HEADED_ARROW_WITH_VERTICAL_STROKE", 
                             "RIGHTWARDS_TWO_HEADED_ARROW", "RIGHTWARDS_TWO_HEADED_ARROW_WITH_TAIL", 
                             "RIGHTWARDS_ARROW_WITH_DOUBLE_VERTICAL_STROKE", 
                             "RIGHTWARDS_ARROW_WITH_TAIL_WITH_DOUBLE_VERTICAL_STROKE", 
                             "DOUBLE_STRUCK_CAPITAL_Z", "HYPHEN_MINUS", 
                             "MINUS_SIGN", "LESS_THAN_OR_EQUAL_TO", "LESS_THAN_SIGN", 
                             "GREATER_THAN_OR_EQUAL_TO", "GREATER_THAN_SIGN", 
                             "ASTERISK", "NUMBER_SIGN", "CHARACTER_TIE", 
                             "UPWARDS_HARPOON_WITH_BARB_LEFTWARDS", "UPWARDS_HARPOON_WITH_BARB_RIGHTWARDS", 
                             "LEFT_ANGLE_BRACKET", "RIGHT_ANGLE_BRACKET", 
                             "ID", "PREP", "PRE", "POSTP", "POST", "IP", 
                             "I", "LP", "L", "ELP", "EL", "ERP", "ER", "SRP", 
                             "SR", "EREP", "ERE", "SREP", "SRE", "ES", "SS", 
                             "UNKNOWN", "NLCHAR" ];
    static ruleNames = [ "specification", "section", "paragraph", "formals", 
                         "operatorTemplate", "categoryTemplate", "prec", 
                         "assoc", "template_", "prefixTemplate", "postfixTemplate", 
                         "infixTemplate", "nofixTemplate", "optArgName", 
                         "optListName", "argName", "listName", "prefixName", 
                         "postfixName", "infixName", "nofixName" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ZOperatorParser.ruleNames;
        this.literalNames = ZOperatorParser.literalNames;
        this.symbolicNames = ZOperatorParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	specification() {
	    let localctx = new SpecificationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ZOperatorParser.RULE_specification);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ZOperatorParser.ZED) | (1 << ZOperatorParser.SCH) | (1 << ZOperatorParser.AX) | (1 << ZOperatorParser.TEXT))) !== 0)) {
	            this.state = 45;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 42;
	                this.match(ZOperatorParser.TEXT);
	                break;

	            case 2:
	                this.state = 43;
	                this.section();
	                break;

	            case 3:
	                this.state = 44;
	                this.paragraph();
	                break;

	            }
	            this.state = 49;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 50;
	        this.match(ZOperatorParser.EOF);
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
	    this.enterRule(localctx, 2, ZOperatorParser.RULE_section);
	    var _la = 0; // Token type
	    try {
	        this.state = 76;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new InheritingSectionContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 52;
	            this.match(ZOperatorParser.ZED);
	            this.state = 53;
	            this.match(ZOperatorParser.SECTION);
	            this.state = 54;
	            this.match(ZOperatorParser.NAME);
	            this.state = 55;
	            this.match(ZOperatorParser.PARENTS);
	            this.state = 57;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===ZOperatorParser.NAME) {
	                this.state = 56;
	                this.formals();
	            }

	            this.state = 59;
	            this.match(ZOperatorParser.END);
	            this.state = 63;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 60;
	                    this.paragraph(); 
	                }
	                this.state = 65;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	            }

	            break;

	        case 2:
	            localctx = new BaseSectionContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 66;
	            this.match(ZOperatorParser.ZED);
	            this.state = 67;
	            this.match(ZOperatorParser.SECTION);
	            this.state = 68;
	            this.match(ZOperatorParser.NAME);
	            this.state = 69;
	            this.match(ZOperatorParser.END);
	            this.state = 73;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 70;
	                    this.paragraph(); 
	                }
	                this.state = 75;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
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



	paragraph() {
	    let localctx = new ParagraphContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ZOperatorParser.RULE_paragraph);
	    try {
	        this.state = 106;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new OperatorTemplateParagraphContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 78;
	            this.match(ZOperatorParser.ZED);
	            this.state = 79;
	            this.operatorTemplate();
	            this.state = 80;
	            this.match(ZOperatorParser.END);
	            break;

	        case 2:
	            localctx = new AxiomaticDescriptionParagraphContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 82;
	            this.match(ZOperatorParser.AX);
	            this.state = 86;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	            while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1+1) {
	                    this.state = 83;
	                    this.matchWildcard(); 
	                }
	                this.state = 88;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
	            }

	            this.state = 89;
	            this.match(ZOperatorParser.END);
	            break;

	        case 3:
	            localctx = new SchemaDefinitionParagraphContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 90;
	            this.match(ZOperatorParser.SCH);
	            this.state = 94;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	            while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1+1) {
	                    this.state = 91;
	                    this.matchWildcard(); 
	                }
	                this.state = 96;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	            }

	            this.state = 97;
	            this.match(ZOperatorParser.END);
	            break;

	        case 4:
	            localctx = new NONOperatorTemplateParagraphContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 98;
	            this.match(ZOperatorParser.ZED);
	            this.state = 102;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	            while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1+1) {
	                    this.state = 99;
	                    this.matchWildcard(); 
	                }
	                this.state = 104;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	            }

	            this.state = 105;
	            this.match(ZOperatorParser.END);
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



	formals() {
	    let localctx = new FormalsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ZOperatorParser.RULE_formals);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this.match(ZOperatorParser.NAME);
	        this.state = 113;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ZOperatorParser.COMMA) {
	            this.state = 109;
	            this.match(ZOperatorParser.COMMA);
	            this.state = 110;
	            this.match(ZOperatorParser.NAME);
	            this.state = 115;
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



	operatorTemplate() {
	    let localctx = new OperatorTemplateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ZOperatorParser.RULE_operatorTemplate);
	    try {
	        this.state = 122;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ZOperatorParser.RELATION:
	            localctx = new RelationOperatorTemplateContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 116;
	            this.match(ZOperatorParser.RELATION);
	            this.state = 117;
	            this.template_();
	            break;
	        case ZOperatorParser.FUNCTION:
	            localctx = new FunctionOperatorTemplateContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 118;
	            this.match(ZOperatorParser.FUNCTION);
	            this.state = 119;
	            this.categoryTemplate();
	            break;
	        case ZOperatorParser.GENERIC:
	            localctx = new GenericOperatorTemplateContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 120;
	            this.match(ZOperatorParser.GENERIC);
	            this.state = 121;
	            this.categoryTemplate();
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



	categoryTemplate() {
	    let localctx = new CategoryTemplateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ZOperatorParser.RULE_categoryTemplate);
	    try {
	        this.state = 131;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 124;
	            this.prefixTemplate();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 125;
	            this.postfixTemplate();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 126;
	            this.prec();
	            this.state = 127;
	            this.assoc();
	            this.state = 128;
	            this.infixTemplate();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 130;
	            this.nofixTemplate();
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



	prec() {
	    let localctx = new PrecContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ZOperatorParser.RULE_prec);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 133;
	        this.match(ZOperatorParser.NUMERAL);
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



	assoc() {
	    let localctx = new AssocContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ZOperatorParser.RULE_assoc);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        _la = this._input.LA(1);
	        if(!(_la===ZOperatorParser.LEFTASSOC || _la===ZOperatorParser.RIGHTASSOC)) {
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



	template_() {
	    let localctx = new Template_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, ZOperatorParser.RULE_template_);
	    try {
	        this.state = 141;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 137;
	            this.prefixTemplate();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 138;
	            this.postfixTemplate();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 139;
	            this.infixTemplate();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 140;
	            this.nofixTemplate();
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



	prefixTemplate() {
	    let localctx = new PrefixTemplateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, ZOperatorParser.RULE_prefixTemplate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        this.match(ZOperatorParser.LEFT_PARENTHESIS);
	        this.state = 147;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ZOperatorParser.NAME:
	            this.state = 144;
	            this.prefixName();
	            break;
	        case ZOperatorParser.POWERSET:
	            this.state = 145;
	            this.match(ZOperatorParser.POWERSET);
	            this.state = 146;
	            this.match(ZOperatorParser.ARGUMENT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 149;
	        this.match(ZOperatorParser.RIGHT_PARENTHESIS);
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



	postfixTemplate() {
	    let localctx = new PostfixTemplateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, ZOperatorParser.RULE_postfixTemplate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        this.match(ZOperatorParser.LEFT_PARENTHESIS);
	        this.state = 152;
	        this.postfixName();
	        this.state = 153;
	        this.match(ZOperatorParser.RIGHT_PARENTHESIS);
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



	infixTemplate() {
	    let localctx = new InfixTemplateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, ZOperatorParser.RULE_infixTemplate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        this.match(ZOperatorParser.LEFT_PARENTHESIS);
	        this.state = 156;
	        this.infixName();
	        this.state = 157;
	        this.match(ZOperatorParser.RIGHT_PARENTHESIS);
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



	nofixTemplate() {
	    let localctx = new NofixTemplateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, ZOperatorParser.RULE_nofixTemplate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 159;
	        this.match(ZOperatorParser.LEFT_PARENTHESIS);
	        this.state = 160;
	        this.nofixName();
	        this.state = 161;
	        this.match(ZOperatorParser.RIGHT_PARENTHESIS);
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



	optArgName() {
	    let localctx = new OptArgNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, ZOperatorParser.RULE_optArgName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 163;
	        this.match(ZOperatorParser.ARGUMENT);
	        this.state = 164;
	        this.match(ZOperatorParser.NAME);
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



	optListName() {
	    let localctx = new OptListNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, ZOperatorParser.RULE_optListName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 166;
	        this.match(ZOperatorParser.LIST);
	        this.state = 167;
	        this.match(ZOperatorParser.NAME);
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



	argName() {
	    let localctx = new ArgNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, ZOperatorParser.RULE_argName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 169;
	        this.match(ZOperatorParser.ARGUMENT);
	        this.state = 170;
	        this.match(ZOperatorParser.NAME);
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



	listName() {
	    let localctx = new ListNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, ZOperatorParser.RULE_listName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 172;
	        this.match(ZOperatorParser.LIST);
	        this.state = 173;
	        this.match(ZOperatorParser.NAME);
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



	prefixName() {
	    let localctx = new PrefixNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, ZOperatorParser.RULE_prefixName);
	    try {
	        this.state = 191;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 175;
	            this.match(ZOperatorParser.NAME);
	            this.state = 176;
	            this.match(ZOperatorParser.ARGUMENT);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 177;
	            this.match(ZOperatorParser.NAME);
	            this.state = 182;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 180;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case ZOperatorParser.ARGUMENT:
	                        this.state = 178;
	                        this.optArgName();
	                        break;
	                    case ZOperatorParser.LIST:
	                        this.state = 179;
	                        this.optListName();
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    } 
	                }
	                this.state = 184;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
	            }

	            this.state = 187;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case ZOperatorParser.ARGUMENT:
	                this.state = 185;
	                this.argName();
	                break;
	            case ZOperatorParser.LIST:
	                this.state = 186;
	                this.listName();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 189;
	            this.match(ZOperatorParser.ARGUMENT);
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



	postfixName() {
	    let localctx = new PostfixNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, ZOperatorParser.RULE_postfixName);
	    try {
	        this.state = 208;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 193;
	            this.match(ZOperatorParser.ARGUMENT);
	            this.state = 194;
	            this.match(ZOperatorParser.NAME);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 195;
	            this.match(ZOperatorParser.ARGUMENT);
	            this.state = 196;
	            this.match(ZOperatorParser.NAME);
	            this.state = 201;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 199;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case ZOperatorParser.ARGUMENT:
	                        this.state = 197;
	                        this.optArgName();
	                        break;
	                    case ZOperatorParser.LIST:
	                        this.state = 198;
	                        this.optListName();
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    } 
	                }
	                this.state = 203;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
	            }

	            this.state = 206;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case ZOperatorParser.ARGUMENT:
	                this.state = 204;
	                this.argName();
	                break;
	            case ZOperatorParser.LIST:
	                this.state = 205;
	                this.listName();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
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



	infixName() {
	    let localctx = new InfixNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, ZOperatorParser.RULE_infixName);
	    try {
	        this.state = 228;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 210;
	            this.match(ZOperatorParser.ARGUMENT);
	            this.state = 211;
	            this.match(ZOperatorParser.NAME);
	            this.state = 212;
	            this.match(ZOperatorParser.ARGUMENT);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 213;
	            this.match(ZOperatorParser.ARGUMENT);
	            this.state = 214;
	            this.match(ZOperatorParser.NAME);
	            this.state = 219;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 217;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case ZOperatorParser.ARGUMENT:
	                        this.state = 215;
	                        this.optArgName();
	                        break;
	                    case ZOperatorParser.LIST:
	                        this.state = 216;
	                        this.optListName();
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    } 
	                }
	                this.state = 221;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
	            }

	            this.state = 224;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case ZOperatorParser.ARGUMENT:
	                this.state = 222;
	                this.argName();
	                break;
	            case ZOperatorParser.LIST:
	                this.state = 223;
	                this.listName();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 226;
	            this.match(ZOperatorParser.ARGUMENT);
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



	nofixName() {
	    let localctx = new NofixNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, ZOperatorParser.RULE_nofixName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 230;
	        this.match(ZOperatorParser.NAME);
	        this.state = 235;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,28,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 233;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case ZOperatorParser.ARGUMENT:
	                    this.state = 231;
	                    this.optArgName();
	                    break;
	                case ZOperatorParser.LIST:
	                    this.state = 232;
	                    this.optListName();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                } 
	            }
	            this.state = 237;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,28,this._ctx);
	        }

	        this.state = 240;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ZOperatorParser.ARGUMENT:
	            this.state = 238;
	            this.argName();
	            break;
	        case ZOperatorParser.LIST:
	            this.state = 239;
	            this.listName();
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


}

ZOperatorParser.EOF = antlr4.Token.EOF;
ZOperatorParser.ZED = 1;
ZOperatorParser.SCH = 2;
ZOperatorParser.AX = 3;
ZOperatorParser.TEXT = 4;
ZOperatorParser.NUMERAL = 5;
ZOperatorParser.STROKE = 6;
ZOperatorParser.LEFT_PARENTHESIS = 7;
ZOperatorParser.RIGHT_PARENTHESIS = 8;
ZOperatorParser.LEFT_SQUARE_BRACKET = 9;
ZOperatorParser.RIGHT_SQUARE_BRACKET = 10;
ZOperatorParser.LEFT_CURLY_BRACKET = 11;
ZOperatorParser.RIGHT_CURLY_BRACKET = 12;
ZOperatorParser.LEFT_BINDING_BRACKET = 13;
ZOperatorParser.RIGHT_BINDING_BRACKET = 14;
ZOperatorParser.LEFT_DOUBLE_ANGLE_BRACKET = 15;
ZOperatorParser.RIGHT_DOUBLE_ANGLE_BRACKET = 16;
ZOperatorParser.GEN = 17;
ZOperatorParser.END = 18;
ZOperatorParser.WS = 19;
ZOperatorParser.NL = 20;
ZOperatorParser.IGNORE_NL = 21;
ZOperatorParser.ELSE = 22;
ZOperatorParser.FALSE = 23;
ZOperatorParser.FUNCTION = 24;
ZOperatorParser.GENERIC = 25;
ZOperatorParser.IF = 26;
ZOperatorParser.LEFTASSOC = 27;
ZOperatorParser.LET = 28;
ZOperatorParser.POWERSET = 29;
ZOperatorParser.PARENTS = 30;
ZOperatorParser.PRE_KEY = 31;
ZOperatorParser.RELATION = 32;
ZOperatorParser.RIGHTASSOC = 33;
ZOperatorParser.SECTION = 34;
ZOperatorParser.THEN = 35;
ZOperatorParser.TRUE = 36;
ZOperatorParser.COLON = 37;
ZOperatorParser.DEFINE_EQUAL = 38;
ZOperatorParser.COMMA = 39;
ZOperatorParser.FREE_EQUALS = 40;
ZOperatorParser.VERTICAL_LINE = 41;
ZOperatorParser.AMPERSAND = 42;
ZOperatorParser.REVERSE_SOLIDUS = 43;
ZOperatorParser.SOLIDUS = 44;
ZOperatorParser.FULL_STOP = 45;
ZOperatorParser.SEMICOLON = 46;
ZOperatorParser.ARGUMENT = 47;
ZOperatorParser.LIST = 48;
ZOperatorParser.EQUALS_SIGN = 49;
ZOperatorParser.CONJECTURE = 50;
ZOperatorParser.FOR_ALL = 51;
ZOperatorParser.SPOT = 52;
ZOperatorParser.THERE_EXISTS = 53;
ZOperatorParser.UNIQUE_EXISTS = 54;
ZOperatorParser.LEFT_RIGHT_DOUBLE_ARROW = 55;
ZOperatorParser.RIGHTWARDS_DOUBLE_ARROW = 56;
ZOperatorParser.LOGICAL_OR = 57;
ZOperatorParser.LOGICAL_AND = 58;
ZOperatorParser.NOT_SIGN = 59;
ZOperatorParser.ELEMENT_OF = 60;
ZOperatorParser.SCHEMA_PROJECTION = 61;
ZOperatorParser.MULTIPLICATION_SIGN = 62;
ZOperatorParser.GREEK_SMALL_LETTER_THETA = 63;
ZOperatorParser.GREEK_SMALL_LETTER_LAMBDA = 64;
ZOperatorParser.GREEK_SMALL_LETTER_MU = 65;
ZOperatorParser.SCHEMA_COMPOSITION = 66;
ZOperatorParser.SCHEMA_PIPING = 67;
ZOperatorParser.NAME = 68;
ZOperatorParser.WORDPART = 69;
ZOperatorParser.GREEK_CAPITAL_LETTER_DELTA = 70;
ZOperatorParser.GREEK_CAPITAL_LETTER_XI = 71;
ZOperatorParser.MATHEMATICAL_DOUBLE_STRUCK_CAPITAL_A = 72;
ZOperatorParser.DOUBLE_STRUCK_CAPITAL_N = 73;
ZOperatorParser.MODIFIER_LETTER_PRIME = 74;
ZOperatorParser.EXCLAMATION_MARK = 75;
ZOperatorParser.QUESTION_MARK = 76;
ZOperatorParser.NORTH_EAST_ARROW = 77;
ZOperatorParser.SOUTH_WEST_ARROW = 78;
ZOperatorParser.SOUTH_EAST_ARROW = 79;
ZOperatorParser.NORTH_WEST_ARROW = 80;
ZOperatorParser.RIGHT_TACK = 81;
ZOperatorParser.BIG_REVERSE_SOLIDUS = 82;
ZOperatorParser.PLUS_SIGN = 83;
ZOperatorParser.MATHEMATICAL_TOOLKIT_SYMBOLS = 84;
ZOperatorParser.LEFT_RIGHT_ARROW = 85;
ZOperatorParser.RIGHTWARDS_ARROW = 86;
ZOperatorParser.NOT_EQUAL_TO = 87;
ZOperatorParser.NOT_AN_ELEMENT_OF = 88;
ZOperatorParser.EMPTY_SET = 89;
ZOperatorParser.SUBSET_OF_OR_EQUAL_TO = 90;
ZOperatorParser.SUBSET_OF = 91;
ZOperatorParser.UNION = 92;
ZOperatorParser.INTERSECTION = 93;
ZOperatorParser.SET_MINUS = 94;
ZOperatorParser.CIRCLED_MINUS = 95;
ZOperatorParser.N_ARY_UNION = 96;
ZOperatorParser.N_ARY_INTERSECTION = 97;
ZOperatorParser.MATHEMATICAL_DOUBLE_STRUCK_CAPITAL_F = 98;
ZOperatorParser.RIGHTWARDS_ARROW_FROM_BAR = 99;
ZOperatorParser.RELATIONAL_COMPOSITION = 100;
ZOperatorParser.RING_OPERATOR = 101;
ZOperatorParser.WHITE_LEFT_POINTING_TRIANGLE = 102;
ZOperatorParser.WHITE_RIGHT_POINTING_TRIANGLE = 103;
ZOperatorParser.DOMAIN_ANTIRESTRICTION = 104;
ZOperatorParser.RANGE_ANTIRESTRICTION = 105;
ZOperatorParser.TILDE_OPERATOR = 106;
ZOperatorParser.LEFT_IMAGE_BRACKET = 107;
ZOperatorParser.RIGHT_IMAGE_BRACKET = 108;
ZOperatorParser.CIRCLED_PLUS = 109;
ZOperatorParser.RIGHTWARDS_ARROW_WITH_VERTICAL_STROKE = 110;
ZOperatorParser.RIGHTWARDS_ARROW_WITH_TAIL_WITH_VERTICAL_STROKE = 111;
ZOperatorParser.RIGHTWARDS_ARROW_WITH_TAIL = 112;
ZOperatorParser.RIGHTWARDS_TWO_HEADED_ARROW_WITH_VERTICAL_STROKE = 113;
ZOperatorParser.RIGHTWARDS_TWO_HEADED_ARROW = 114;
ZOperatorParser.RIGHTWARDS_TWO_HEADED_ARROW_WITH_TAIL = 115;
ZOperatorParser.RIGHTWARDS_ARROW_WITH_DOUBLE_VERTICAL_STROKE = 116;
ZOperatorParser.RIGHTWARDS_ARROW_WITH_TAIL_WITH_DOUBLE_VERTICAL_STROKE = 117;
ZOperatorParser.DOUBLE_STRUCK_CAPITAL_Z = 118;
ZOperatorParser.HYPHEN_MINUS = 119;
ZOperatorParser.MINUS_SIGN = 120;
ZOperatorParser.LESS_THAN_OR_EQUAL_TO = 121;
ZOperatorParser.LESS_THAN_SIGN = 122;
ZOperatorParser.GREATER_THAN_OR_EQUAL_TO = 123;
ZOperatorParser.GREATER_THAN_SIGN = 124;
ZOperatorParser.ASTERISK = 125;
ZOperatorParser.NUMBER_SIGN = 126;
ZOperatorParser.CHARACTER_TIE = 127;
ZOperatorParser.UPWARDS_HARPOON_WITH_BARB_LEFTWARDS = 128;
ZOperatorParser.UPWARDS_HARPOON_WITH_BARB_RIGHTWARDS = 129;
ZOperatorParser.LEFT_ANGLE_BRACKET = 130;
ZOperatorParser.RIGHT_ANGLE_BRACKET = 131;
ZOperatorParser.ID = 132;
ZOperatorParser.PREP = 133;
ZOperatorParser.PRE = 134;
ZOperatorParser.POSTP = 135;
ZOperatorParser.POST = 136;
ZOperatorParser.IP = 137;
ZOperatorParser.I = 138;
ZOperatorParser.LP = 139;
ZOperatorParser.L = 140;
ZOperatorParser.ELP = 141;
ZOperatorParser.EL = 142;
ZOperatorParser.ERP = 143;
ZOperatorParser.ER = 144;
ZOperatorParser.SRP = 145;
ZOperatorParser.SR = 146;
ZOperatorParser.EREP = 147;
ZOperatorParser.ERE = 148;
ZOperatorParser.SREP = 149;
ZOperatorParser.SRE = 150;
ZOperatorParser.ES = 151;
ZOperatorParser.SS = 152;
ZOperatorParser.UNKNOWN = 153;
ZOperatorParser.NLCHAR = 154;

ZOperatorParser.RULE_specification = 0;
ZOperatorParser.RULE_section = 1;
ZOperatorParser.RULE_paragraph = 2;
ZOperatorParser.RULE_formals = 3;
ZOperatorParser.RULE_operatorTemplate = 4;
ZOperatorParser.RULE_categoryTemplate = 5;
ZOperatorParser.RULE_prec = 6;
ZOperatorParser.RULE_assoc = 7;
ZOperatorParser.RULE_template_ = 8;
ZOperatorParser.RULE_prefixTemplate = 9;
ZOperatorParser.RULE_postfixTemplate = 10;
ZOperatorParser.RULE_infixTemplate = 11;
ZOperatorParser.RULE_nofixTemplate = 12;
ZOperatorParser.RULE_optArgName = 13;
ZOperatorParser.RULE_optListName = 14;
ZOperatorParser.RULE_argName = 15;
ZOperatorParser.RULE_listName = 16;
ZOperatorParser.RULE_prefixName = 17;
ZOperatorParser.RULE_postfixName = 18;
ZOperatorParser.RULE_infixName = 19;
ZOperatorParser.RULE_nofixName = 20;

class SpecificationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZOperatorParser.RULE_specification;
    }

	EOF() {
	    return this.getToken(ZOperatorParser.EOF, 0);
	};

	TEXT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ZOperatorParser.TEXT);
	    } else {
	        return this.getToken(ZOperatorParser.TEXT, i);
	    }
	};


	section = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SectionContext);
	    } else {
	        return this.getTypedRuleContext(SectionContext,i);
	    }
	};

	paragraph = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParagraphContext);
	    } else {
	        return this.getTypedRuleContext(ParagraphContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.enterSpecification(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.exitSpecification(this);
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
        this.ruleIndex = ZOperatorParser.RULE_section;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class BaseSectionContext extends SectionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ZED() {
	    return this.getToken(ZOperatorParser.ZED, 0);
	};

	SECTION() {
	    return this.getToken(ZOperatorParser.SECTION, 0);
	};

	NAME() {
	    return this.getToken(ZOperatorParser.NAME, 0);
	};

	END() {
	    return this.getToken(ZOperatorParser.END, 0);
	};

	paragraph = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParagraphContext);
	    } else {
	        return this.getTypedRuleContext(ParagraphContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.enterBaseSection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.exitBaseSection(this);
		}
	}


}

ZOperatorParser.BaseSectionContext = BaseSectionContext;

class InheritingSectionContext extends SectionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ZED() {
	    return this.getToken(ZOperatorParser.ZED, 0);
	};

	SECTION() {
	    return this.getToken(ZOperatorParser.SECTION, 0);
	};

	NAME() {
	    return this.getToken(ZOperatorParser.NAME, 0);
	};

	PARENTS() {
	    return this.getToken(ZOperatorParser.PARENTS, 0);
	};

	END() {
	    return this.getToken(ZOperatorParser.END, 0);
	};

	formals() {
	    return this.getTypedRuleContext(FormalsContext,0);
	};

	paragraph = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParagraphContext);
	    } else {
	        return this.getTypedRuleContext(ParagraphContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.enterInheritingSection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.exitInheritingSection(this);
		}
	}


}

ZOperatorParser.InheritingSectionContext = InheritingSectionContext;

class ParagraphContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZOperatorParser.RULE_paragraph;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class NONOperatorTemplateParagraphContext extends ParagraphContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ZED() {
	    return this.getToken(ZOperatorParser.ZED, 0);
	};

	END() {
	    return this.getToken(ZOperatorParser.END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.enterNONOperatorTemplateParagraph(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.exitNONOperatorTemplateParagraph(this);
		}
	}


}

ZOperatorParser.NONOperatorTemplateParagraphContext = NONOperatorTemplateParagraphContext;

class OperatorTemplateParagraphContext extends ParagraphContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ZED() {
	    return this.getToken(ZOperatorParser.ZED, 0);
	};

	operatorTemplate() {
	    return this.getTypedRuleContext(OperatorTemplateContext,0);
	};

	END() {
	    return this.getToken(ZOperatorParser.END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.enterOperatorTemplateParagraph(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.exitOperatorTemplateParagraph(this);
		}
	}


}

ZOperatorParser.OperatorTemplateParagraphContext = OperatorTemplateParagraphContext;

class SchemaDefinitionParagraphContext extends ParagraphContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SCH() {
	    return this.getToken(ZOperatorParser.SCH, 0);
	};

	END() {
	    return this.getToken(ZOperatorParser.END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.enterSchemaDefinitionParagraph(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.exitSchemaDefinitionParagraph(this);
		}
	}


}

ZOperatorParser.SchemaDefinitionParagraphContext = SchemaDefinitionParagraphContext;

class AxiomaticDescriptionParagraphContext extends ParagraphContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	AX() {
	    return this.getToken(ZOperatorParser.AX, 0);
	};

	END() {
	    return this.getToken(ZOperatorParser.END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.enterAxiomaticDescriptionParagraph(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.exitAxiomaticDescriptionParagraph(this);
		}
	}


}

ZOperatorParser.AxiomaticDescriptionParagraphContext = AxiomaticDescriptionParagraphContext;

class FormalsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZOperatorParser.RULE_formals;
    }

	NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ZOperatorParser.NAME);
	    } else {
	        return this.getToken(ZOperatorParser.NAME, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ZOperatorParser.COMMA);
	    } else {
	        return this.getToken(ZOperatorParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.enterFormals(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.exitFormals(this);
		}
	}


}



class OperatorTemplateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZOperatorParser.RULE_operatorTemplate;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class RelationOperatorTemplateContext extends OperatorTemplateContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	RELATION() {
	    return this.getToken(ZOperatorParser.RELATION, 0);
	};

	template_() {
	    return this.getTypedRuleContext(Template_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.enterRelationOperatorTemplate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.exitRelationOperatorTemplate(this);
		}
	}


}

ZOperatorParser.RelationOperatorTemplateContext = RelationOperatorTemplateContext;

class GenericOperatorTemplateContext extends OperatorTemplateContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	GENERIC() {
	    return this.getToken(ZOperatorParser.GENERIC, 0);
	};

	categoryTemplate() {
	    return this.getTypedRuleContext(CategoryTemplateContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.enterGenericOperatorTemplate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.exitGenericOperatorTemplate(this);
		}
	}


}

ZOperatorParser.GenericOperatorTemplateContext = GenericOperatorTemplateContext;

class FunctionOperatorTemplateContext extends OperatorTemplateContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FUNCTION() {
	    return this.getToken(ZOperatorParser.FUNCTION, 0);
	};

	categoryTemplate() {
	    return this.getTypedRuleContext(CategoryTemplateContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.enterFunctionOperatorTemplate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.exitFunctionOperatorTemplate(this);
		}
	}


}

ZOperatorParser.FunctionOperatorTemplateContext = FunctionOperatorTemplateContext;

class CategoryTemplateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZOperatorParser.RULE_categoryTemplate;
    }

	prefixTemplate() {
	    return this.getTypedRuleContext(PrefixTemplateContext,0);
	};

	postfixTemplate() {
	    return this.getTypedRuleContext(PostfixTemplateContext,0);
	};

	prec() {
	    return this.getTypedRuleContext(PrecContext,0);
	};

	assoc() {
	    return this.getTypedRuleContext(AssocContext,0);
	};

	infixTemplate() {
	    return this.getTypedRuleContext(InfixTemplateContext,0);
	};

	nofixTemplate() {
	    return this.getTypedRuleContext(NofixTemplateContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.enterCategoryTemplate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.exitCategoryTemplate(this);
		}
	}


}



class PrecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZOperatorParser.RULE_prec;
    }

	NUMERAL() {
	    return this.getToken(ZOperatorParser.NUMERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.enterPrec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.exitPrec(this);
		}
	}


}



class AssocContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZOperatorParser.RULE_assoc;
    }

	LEFTASSOC() {
	    return this.getToken(ZOperatorParser.LEFTASSOC, 0);
	};

	RIGHTASSOC() {
	    return this.getToken(ZOperatorParser.RIGHTASSOC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.enterAssoc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.exitAssoc(this);
		}
	}


}



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
        this.ruleIndex = ZOperatorParser.RULE_template_;
    }

	prefixTemplate() {
	    return this.getTypedRuleContext(PrefixTemplateContext,0);
	};

	postfixTemplate() {
	    return this.getTypedRuleContext(PostfixTemplateContext,0);
	};

	infixTemplate() {
	    return this.getTypedRuleContext(InfixTemplateContext,0);
	};

	nofixTemplate() {
	    return this.getTypedRuleContext(NofixTemplateContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.enterTemplate_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.exitTemplate_(this);
		}
	}


}



class PrefixTemplateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZOperatorParser.RULE_prefixTemplate;
    }

	LEFT_PARENTHESIS() {
	    return this.getToken(ZOperatorParser.LEFT_PARENTHESIS, 0);
	};

	RIGHT_PARENTHESIS() {
	    return this.getToken(ZOperatorParser.RIGHT_PARENTHESIS, 0);
	};

	prefixName() {
	    return this.getTypedRuleContext(PrefixNameContext,0);
	};

	POWERSET() {
	    return this.getToken(ZOperatorParser.POWERSET, 0);
	};

	ARGUMENT() {
	    return this.getToken(ZOperatorParser.ARGUMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.enterPrefixTemplate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.exitPrefixTemplate(this);
		}
	}


}



class PostfixTemplateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZOperatorParser.RULE_postfixTemplate;
    }

	LEFT_PARENTHESIS() {
	    return this.getToken(ZOperatorParser.LEFT_PARENTHESIS, 0);
	};

	postfixName() {
	    return this.getTypedRuleContext(PostfixNameContext,0);
	};

	RIGHT_PARENTHESIS() {
	    return this.getToken(ZOperatorParser.RIGHT_PARENTHESIS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.enterPostfixTemplate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.exitPostfixTemplate(this);
		}
	}


}



class InfixTemplateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZOperatorParser.RULE_infixTemplate;
    }

	LEFT_PARENTHESIS() {
	    return this.getToken(ZOperatorParser.LEFT_PARENTHESIS, 0);
	};

	infixName() {
	    return this.getTypedRuleContext(InfixNameContext,0);
	};

	RIGHT_PARENTHESIS() {
	    return this.getToken(ZOperatorParser.RIGHT_PARENTHESIS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.enterInfixTemplate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.exitInfixTemplate(this);
		}
	}


}



class NofixTemplateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZOperatorParser.RULE_nofixTemplate;
    }

	LEFT_PARENTHESIS() {
	    return this.getToken(ZOperatorParser.LEFT_PARENTHESIS, 0);
	};

	nofixName() {
	    return this.getTypedRuleContext(NofixNameContext,0);
	};

	RIGHT_PARENTHESIS() {
	    return this.getToken(ZOperatorParser.RIGHT_PARENTHESIS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.enterNofixTemplate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.exitNofixTemplate(this);
		}
	}


}



class OptArgNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZOperatorParser.RULE_optArgName;
    }

	ARGUMENT() {
	    return this.getToken(ZOperatorParser.ARGUMENT, 0);
	};

	NAME() {
	    return this.getToken(ZOperatorParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.enterOptArgName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.exitOptArgName(this);
		}
	}


}



class OptListNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZOperatorParser.RULE_optListName;
    }

	LIST() {
	    return this.getToken(ZOperatorParser.LIST, 0);
	};

	NAME() {
	    return this.getToken(ZOperatorParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.enterOptListName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.exitOptListName(this);
		}
	}


}



class ArgNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZOperatorParser.RULE_argName;
    }

	ARGUMENT() {
	    return this.getToken(ZOperatorParser.ARGUMENT, 0);
	};

	NAME() {
	    return this.getToken(ZOperatorParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.enterArgName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.exitArgName(this);
		}
	}


}



class ListNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZOperatorParser.RULE_listName;
    }

	LIST() {
	    return this.getToken(ZOperatorParser.LIST, 0);
	};

	NAME() {
	    return this.getToken(ZOperatorParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.enterListName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.exitListName(this);
		}
	}


}



class PrefixNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZOperatorParser.RULE_prefixName;
    }

	NAME() {
	    return this.getToken(ZOperatorParser.NAME, 0);
	};

	ARGUMENT() {
	    return this.getToken(ZOperatorParser.ARGUMENT, 0);
	};

	argName() {
	    return this.getTypedRuleContext(ArgNameContext,0);
	};

	listName() {
	    return this.getTypedRuleContext(ListNameContext,0);
	};

	optArgName = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OptArgNameContext);
	    } else {
	        return this.getTypedRuleContext(OptArgNameContext,i);
	    }
	};

	optListName = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OptListNameContext);
	    } else {
	        return this.getTypedRuleContext(OptListNameContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.enterPrefixName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.exitPrefixName(this);
		}
	}


}



class PostfixNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZOperatorParser.RULE_postfixName;
    }

	ARGUMENT() {
	    return this.getToken(ZOperatorParser.ARGUMENT, 0);
	};

	NAME() {
	    return this.getToken(ZOperatorParser.NAME, 0);
	};

	argName() {
	    return this.getTypedRuleContext(ArgNameContext,0);
	};

	listName() {
	    return this.getTypedRuleContext(ListNameContext,0);
	};

	optArgName = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OptArgNameContext);
	    } else {
	        return this.getTypedRuleContext(OptArgNameContext,i);
	    }
	};

	optListName = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OptListNameContext);
	    } else {
	        return this.getTypedRuleContext(OptListNameContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.enterPostfixName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.exitPostfixName(this);
		}
	}


}



class InfixNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZOperatorParser.RULE_infixName;
    }

	ARGUMENT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ZOperatorParser.ARGUMENT);
	    } else {
	        return this.getToken(ZOperatorParser.ARGUMENT, i);
	    }
	};


	NAME() {
	    return this.getToken(ZOperatorParser.NAME, 0);
	};

	argName() {
	    return this.getTypedRuleContext(ArgNameContext,0);
	};

	listName() {
	    return this.getTypedRuleContext(ListNameContext,0);
	};

	optArgName = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OptArgNameContext);
	    } else {
	        return this.getTypedRuleContext(OptArgNameContext,i);
	    }
	};

	optListName = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OptListNameContext);
	    } else {
	        return this.getTypedRuleContext(OptListNameContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.enterInfixName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.exitInfixName(this);
		}
	}


}



class NofixNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZOperatorParser.RULE_nofixName;
    }

	NAME() {
	    return this.getToken(ZOperatorParser.NAME, 0);
	};

	argName() {
	    return this.getTypedRuleContext(ArgNameContext,0);
	};

	listName() {
	    return this.getTypedRuleContext(ListNameContext,0);
	};

	optArgName = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OptArgNameContext);
	    } else {
	        return this.getTypedRuleContext(OptArgNameContext,i);
	    }
	};

	optListName = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OptListNameContext);
	    } else {
	        return this.getTypedRuleContext(OptListNameContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.enterNofixName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZOperatorParserListener ) {
	        listener.exitNofixName(this);
		}
	}


}




ZOperatorParser.SpecificationContext = SpecificationContext; 
ZOperatorParser.SectionContext = SectionContext; 
ZOperatorParser.ParagraphContext = ParagraphContext; 
ZOperatorParser.FormalsContext = FormalsContext; 
ZOperatorParser.OperatorTemplateContext = OperatorTemplateContext; 
ZOperatorParser.CategoryTemplateContext = CategoryTemplateContext; 
ZOperatorParser.PrecContext = PrecContext; 
ZOperatorParser.AssocContext = AssocContext; 
ZOperatorParser.Template_Context = Template_Context; 
ZOperatorParser.PrefixTemplateContext = PrefixTemplateContext; 
ZOperatorParser.PostfixTemplateContext = PostfixTemplateContext; 
ZOperatorParser.InfixTemplateContext = InfixTemplateContext; 
ZOperatorParser.NofixTemplateContext = NofixTemplateContext; 
ZOperatorParser.OptArgNameContext = OptArgNameContext; 
ZOperatorParser.OptListNameContext = OptListNameContext; 
ZOperatorParser.ArgNameContext = ArgNameContext; 
ZOperatorParser.ListNameContext = ListNameContext; 
ZOperatorParser.PrefixNameContext = PrefixNameContext; 
ZOperatorParser.PostfixNameContext = PostfixNameContext; 
ZOperatorParser.InfixNameContext = InfixNameContext; 
ZOperatorParser.NofixNameContext = NofixNameContext; 
