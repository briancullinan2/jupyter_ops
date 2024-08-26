// Generated from Resources/Parsers/cto/CtoParser.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CtoParserListener from './CtoParserListener.js';
const serializedATN = [4,1,49,386,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,1,0,1,0,5,
0,85,8,0,10,0,12,0,88,9,0,1,0,5,0,91,8,0,10,0,12,0,94,9,0,1,0,1,0,1,1,1,
1,1,1,1,2,1,2,1,2,1,2,3,2,105,8,2,1,3,1,3,1,3,1,3,1,3,1,3,3,3,113,8,3,1,
4,1,4,3,4,117,8,4,1,5,5,5,120,8,5,10,5,12,5,123,9,5,1,5,1,5,1,5,1,5,1,5,
1,6,5,6,131,8,6,10,6,12,6,134,9,6,1,6,1,6,1,6,1,6,3,6,140,8,6,1,6,1,6,1,
7,1,7,1,7,1,7,5,7,148,8,7,10,7,12,7,151,9,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,
1,9,1,9,1,10,5,10,163,8,10,10,10,12,10,166,9,10,1,10,1,10,1,10,1,10,1,10,
1,11,5,11,174,8,11,10,11,12,11,177,9,11,1,11,1,11,1,11,1,11,1,12,1,12,1,
12,3,12,186,8,12,1,13,1,13,1,13,1,14,1,14,5,14,193,8,14,10,14,12,14,196,
9,14,1,14,1,14,1,15,1,15,3,15,202,8,15,1,16,1,16,1,16,3,16,207,8,16,1,16,
3,16,210,8,16,1,16,3,16,213,8,16,1,16,1,16,1,16,3,16,218,8,16,1,16,3,16,
221,8,16,1,16,1,16,1,16,3,16,226,8,16,1,16,3,16,229,8,16,1,16,3,16,232,8,
16,1,16,1,16,1,16,3,16,237,8,16,1,16,3,16,240,8,16,1,16,1,16,1,16,1,16,1,
16,1,16,3,16,248,8,16,1,17,1,17,1,17,5,17,253,8,17,10,17,12,17,256,9,17,
1,18,1,18,1,18,5,18,261,8,18,10,18,12,18,264,9,18,1,19,1,19,1,20,1,20,1,
20,5,20,271,8,20,10,20,12,20,274,9,20,1,21,1,21,1,21,5,21,279,8,21,10,21,
12,21,282,9,21,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,24,1,24,1,24,5,
24,295,8,24,10,24,12,24,298,9,24,1,25,1,25,1,25,5,25,303,8,25,10,25,12,25,
306,9,25,1,26,1,26,1,26,5,26,311,8,26,10,26,12,26,314,9,26,1,27,1,27,1,27,
1,27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,
28,1,28,1,28,3,28,336,8,28,1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,31,
1,31,1,31,1,31,1,32,1,32,1,33,1,33,1,33,3,33,355,8,33,1,34,1,34,3,34,359,
8,34,1,35,1,35,1,36,1,36,1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,38,3,38,373,
8,38,1,39,1,39,1,39,5,39,378,8,39,10,39,12,39,381,9,39,1,40,1,40,1,40,1,
40,0,0,41,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,
46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,0,4,1,0,18,20,3,0,
2,2,12,12,47,47,1,0,48,49,1,0,38,39,391,0,82,1,0,0,0,2,97,1,0,0,0,4,100,
1,0,0,0,6,112,1,0,0,0,8,116,1,0,0,0,10,121,1,0,0,0,12,132,1,0,0,0,14,143,
1,0,0,0,16,154,1,0,0,0,18,157,1,0,0,0,20,164,1,0,0,0,22,175,1,0,0,0,24,185,
1,0,0,0,26,187,1,0,0,0,28,190,1,0,0,0,30,201,1,0,0,0,32,247,1,0,0,0,34,249,
1,0,0,0,36,257,1,0,0,0,38,265,1,0,0,0,40,267,1,0,0,0,42,275,1,0,0,0,44,283,
1,0,0,0,46,287,1,0,0,0,48,291,1,0,0,0,50,299,1,0,0,0,52,307,1,0,0,0,54,315,
1,0,0,0,56,335,1,0,0,0,58,337,1,0,0,0,60,341,1,0,0,0,62,345,1,0,0,0,64,349,
1,0,0,0,66,354,1,0,0,0,68,358,1,0,0,0,70,360,1,0,0,0,72,362,1,0,0,0,74,364,
1,0,0,0,76,366,1,0,0,0,78,374,1,0,0,0,80,382,1,0,0,0,82,86,3,2,1,0,83,85,
3,4,2,0,84,83,1,0,0,0,85,88,1,0,0,0,86,84,1,0,0,0,86,87,1,0,0,0,87,92,1,
0,0,0,88,86,1,0,0,0,89,91,3,6,3,0,90,89,1,0,0,0,91,94,1,0,0,0,92,90,1,0,
0,0,92,93,1,0,0,0,93,95,1,0,0,0,94,92,1,0,0,0,95,96,5,0,0,1,96,1,1,0,0,0,
97,98,5,10,0,0,98,99,3,52,26,0,99,3,1,0,0,0,100,101,5,9,0,0,101,104,3,52,
26,0,102,103,5,30,0,0,103,105,5,33,0,0,104,102,1,0,0,0,104,105,1,0,0,0,105,
5,1,0,0,0,106,113,3,10,5,0,107,113,3,12,6,0,108,113,3,14,7,0,109,113,3,20,
10,0,110,113,3,22,11,0,111,113,3,18,9,0,112,106,1,0,0,0,112,107,1,0,0,0,
112,108,1,0,0,0,112,109,1,0,0,0,112,110,1,0,0,0,112,111,1,0,0,0,113,7,1,
0,0,0,114,117,3,76,38,0,115,117,5,1,0,0,116,114,1,0,0,0,116,115,1,0,0,0,
117,9,1,0,0,0,118,120,3,8,4,0,119,118,1,0,0,0,120,123,1,0,0,0,121,119,1,
0,0,0,121,122,1,0,0,0,122,124,1,0,0,0,123,121,1,0,0,0,124,125,5,2,0,0,125,
126,5,47,0,0,126,127,3,24,12,0,127,128,3,28,14,0,128,11,1,0,0,0,129,131,
3,8,4,0,130,129,1,0,0,0,131,134,1,0,0,0,132,130,1,0,0,0,132,133,1,0,0,0,
133,135,1,0,0,0,134,132,1,0,0,0,135,136,5,3,0,0,136,139,5,47,0,0,137,138,
5,7,0,0,138,140,5,47,0,0,139,137,1,0,0,0,139,140,1,0,0,0,140,141,1,0,0,0,
141,142,3,28,14,0,142,13,1,0,0,0,143,144,5,5,0,0,144,145,5,47,0,0,145,149,
5,24,0,0,146,148,3,16,8,0,147,146,1,0,0,0,148,151,1,0,0,0,149,147,1,0,0,
0,149,150,1,0,0,0,150,152,1,0,0,0,151,149,1,0,0,0,152,153,5,25,0,0,153,15,
1,0,0,0,154,155,5,37,0,0,155,156,5,47,0,0,156,17,1,0,0,0,157,158,5,6,0,0,
158,159,5,47,0,0,159,160,3,28,14,0,160,19,1,0,0,0,161,163,3,8,4,0,162,161,
1,0,0,0,163,166,1,0,0,0,164,162,1,0,0,0,164,165,1,0,0,0,165,167,1,0,0,0,
166,164,1,0,0,0,167,168,5,12,0,0,168,169,5,47,0,0,169,170,3,24,12,0,170,
171,3,28,14,0,171,21,1,0,0,0,172,174,3,8,4,0,173,172,1,0,0,0,174,177,1,0,
0,0,175,173,1,0,0,0,175,176,1,0,0,0,176,178,1,0,0,0,177,175,1,0,0,0,178,
179,5,15,0,0,179,180,5,47,0,0,180,181,3,28,14,0,181,23,1,0,0,0,182,183,5,
7,0,0,183,186,5,47,0,0,184,186,3,26,13,0,185,182,1,0,0,0,185,184,1,0,0,0,
186,25,1,0,0,0,187,188,5,8,0,0,188,189,5,47,0,0,189,27,1,0,0,0,190,194,5,
24,0,0,191,193,3,30,15,0,192,191,1,0,0,0,193,196,1,0,0,0,194,192,1,0,0,0,
194,195,1,0,0,0,195,197,1,0,0,0,196,194,1,0,0,0,197,198,5,25,0,0,198,29,
1,0,0,0,199,202,5,28,0,0,200,202,3,32,16,0,201,199,1,0,0,0,201,200,1,0,0,
0,202,31,1,0,0,0,203,204,3,48,24,0,204,206,3,64,32,0,205,207,3,60,30,0,206,
205,1,0,0,0,206,207,1,0,0,0,207,209,1,0,0,0,208,210,3,46,23,0,209,208,1,
0,0,0,209,210,1,0,0,0,210,212,1,0,0,0,211,213,5,11,0,0,212,211,1,0,0,0,212,
213,1,0,0,0,213,248,1,0,0,0,214,215,3,40,20,0,215,217,3,64,32,0,216,218,
3,58,29,0,217,216,1,0,0,0,217,218,1,0,0,0,218,220,1,0,0,0,219,221,5,11,0,
0,220,219,1,0,0,0,220,221,1,0,0,0,221,248,1,0,0,0,222,223,3,36,18,0,223,
225,3,64,32,0,224,226,3,62,31,0,225,224,1,0,0,0,225,226,1,0,0,0,226,228,
1,0,0,0,227,229,3,54,27,0,228,227,1,0,0,0,228,229,1,0,0,0,229,231,1,0,0,
0,230,232,5,11,0,0,231,230,1,0,0,0,231,232,1,0,0,0,232,248,1,0,0,0,233,234,
3,42,21,0,234,236,3,64,32,0,235,237,3,44,22,0,236,235,1,0,0,0,236,237,1,
0,0,0,237,239,1,0,0,0,238,240,5,11,0,0,239,238,1,0,0,0,239,240,1,0,0,0,240,
248,1,0,0,0,241,242,3,34,17,0,242,243,3,64,32,0,243,248,1,0,0,0,244,245,
3,50,25,0,245,246,3,64,32,0,246,248,1,0,0,0,247,203,1,0,0,0,247,214,1,0,
0,0,247,222,1,0,0,0,247,233,1,0,0,0,247,241,1,0,0,0,247,244,1,0,0,0,248,
33,1,0,0,0,249,250,5,37,0,0,250,254,5,47,0,0,251,253,3,80,40,0,252,251,1,
0,0,0,253,256,1,0,0,0,254,252,1,0,0,0,254,255,1,0,0,0,255,35,1,0,0,0,256,
254,1,0,0,0,257,258,5,37,0,0,258,262,3,38,19,0,259,261,3,80,40,0,260,259,
1,0,0,0,261,264,1,0,0,0,262,260,1,0,0,0,262,263,1,0,0,0,263,37,1,0,0,0,264,
262,1,0,0,0,265,266,7,0,0,0,266,39,1,0,0,0,267,268,5,37,0,0,268,272,5,16,
0,0,269,271,3,80,40,0,270,269,1,0,0,0,271,274,1,0,0,0,272,270,1,0,0,0,272,
273,1,0,0,0,273,41,1,0,0,0,274,272,1,0,0,0,275,276,5,37,0,0,276,280,5,17,
0,0,277,279,3,80,40,0,278,277,1,0,0,0,279,282,1,0,0,0,280,278,1,0,0,0,280,
281,1,0,0,0,281,43,1,0,0,0,282,280,1,0,0,0,283,284,5,4,0,0,284,285,5,32,
0,0,285,286,5,42,0,0,286,45,1,0,0,0,287,288,5,14,0,0,288,289,5,32,0,0,289,
290,5,46,0,0,290,47,1,0,0,0,291,292,5,37,0,0,292,296,5,21,0,0,293,295,3,
80,40,0,294,293,1,0,0,0,295,298,1,0,0,0,296,294,1,0,0,0,296,297,1,0,0,0,
297,49,1,0,0,0,298,296,1,0,0,0,299,300,5,36,0,0,300,304,5,47,0,0,301,303,
3,80,40,0,302,301,1,0,0,0,303,306,1,0,0,0,304,302,1,0,0,0,304,305,1,0,0,
0,305,51,1,0,0,0,306,304,1,0,0,0,307,312,5,47,0,0,308,309,5,30,0,0,309,311,
5,47,0,0,310,308,1,0,0,0,311,314,1,0,0,0,312,310,1,0,0,0,312,313,1,0,0,0,
313,53,1,0,0,0,314,312,1,0,0,0,315,316,5,13,0,0,316,317,5,32,0,0,317,318,
3,56,28,0,318,55,1,0,0,0,319,320,5,26,0,0,320,321,3,68,34,0,321,322,5,29,
0,0,322,323,5,27,0,0,323,336,1,0,0,0,324,325,5,26,0,0,325,326,5,29,0,0,326,
327,3,68,34,0,327,328,5,27,0,0,328,336,1,0,0,0,329,330,5,26,0,0,330,331,
3,68,34,0,331,332,5,29,0,0,332,333,3,68,34,0,333,334,5,27,0,0,334,336,1,
0,0,0,335,319,1,0,0,0,335,324,1,0,0,0,335,329,1,0,0,0,336,57,1,0,0,0,337,
338,5,4,0,0,338,339,5,32,0,0,339,340,5,41,0,0,340,59,1,0,0,0,341,342,5,4,
0,0,342,343,5,32,0,0,343,344,3,70,35,0,344,61,1,0,0,0,345,346,5,4,0,0,346,
347,5,32,0,0,347,348,3,68,34,0,348,63,1,0,0,0,349,350,7,1,0,0,350,65,1,0,
0,0,351,355,3,68,34,0,352,355,3,70,35,0,353,355,5,41,0,0,354,351,1,0,0,0,
354,352,1,0,0,0,354,353,1,0,0,0,355,67,1,0,0,0,356,359,3,72,36,0,357,359,
3,74,37,0,358,356,1,0,0,0,358,357,1,0,0,0,359,69,1,0,0,0,360,361,7,2,0,0,
361,71,1,0,0,0,362,363,7,3,0,0,363,73,1,0,0,0,364,365,5,40,0,0,365,75,1,
0,0,0,366,367,5,34,0,0,367,372,3,52,26,0,368,369,5,22,0,0,369,370,3,78,39,
0,370,371,5,23,0,0,371,373,1,0,0,0,372,368,1,0,0,0,372,373,1,0,0,0,373,77,
1,0,0,0,374,379,3,66,33,0,375,376,5,29,0,0,376,378,3,66,33,0,377,375,1,0,
0,0,378,381,1,0,0,0,379,377,1,0,0,0,379,380,1,0,0,0,380,79,1,0,0,0,381,379,
1,0,0,0,382,383,5,26,0,0,383,384,5,27,0,0,384,81,1,0,0,0,37,86,92,104,112,
116,121,132,139,149,164,175,185,194,201,206,209,212,217,220,225,228,231,
236,239,247,254,262,272,280,296,304,312,335,354,358,372,379];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class CtoParser extends antlr4.Parser {

    static grammarFileName = "CtoParser.g4";
    static literalNames = [ null, "'abstract'", "'asset'", "'concept'", 
                            "'default'", "'enum'", "'event'", "'extends'", 
                            "'identified by'", "'import'", "'namespace'", 
                            "'optional'", "'participant'", "'range'", "'regex'", 
                            "'transaction'", "'Boolean'", "'DateTime'", 
                            "'Double'", "'Integer'", "'Long'", "'String'", 
                            "'('", "')'", "'{'", "'}'", "'['", "']'", "';'", 
                            "','", "'.'", "':'", "'='", "'*'", "'@'", "'...'", 
                            "'--> '", "'o '" ];
    static symbolicNames = [ null, "ABSTRACT", "ASSET", "CONCEPT", "DEFAULT", 
                             "ENUM", "EVENT", "EXTENDS", "IDENTIFIED", "IMPORT", 
                             "NAMESPACE", "OPTIONAL", "PARTICIPANT", "RANGE", 
                             "REGEX", "TRANSACTION", "BOOLEAN", "DATE_TIME", 
                             "DOUBLE", "INTEGER", "LONG", "STRING", "LPAREN", 
                             "RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", 
                             "SEMI", "COMMA", "DOT", "COLON", "ASSIGN", 
                             "MUL", "AT", "ELLIPSIS", "REF", "VAR", "DECIMAL_LITERAL", 
                             "OCT_LITERAL", "FLOAT_LITERAL", "BOOL_LITERAL", 
                             "DATE_TIME_LITERAL", "WS", "LINE_COMMENT", 
                             "COMMENT", "REGEX_EXPR", "IDENTIFIER", "CHAR_LITERAL", 
                             "STRING_LITERAL" ];
    static ruleNames = [ "modelUnit", "namespaceDeclaration", "importDeclaration", 
                         "typeDeclaration", "classModifier", "assetDeclaration", 
                         "conceptDeclaration", "enumDeclaration", "enumConstant", 
                         "eventDeclaration", "participantDeclaration", "transactionDeclaration", 
                         "extendsOrIdentified", "identified", "classBody", 
                         "classBodyDeclaration", "fieldDeclaration", "identifierField", 
                         "numericField", "numericPrimitive", "booleanField", 
                         "dateField", "defaultDate", "regexDeclaration", 
                         "stringField", "reference", "qualifiedName", "rangeValidation", 
                         "rangeDeclaration", "defaultBoolean", "defaultString", 
                         "defaultNumber", "identifier", "literal", "numberLiteral", 
                         "stringLiteral", "integerLiteral", "floatLiteral", 
                         "decorator", "elementValuePair", "square" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CtoParser.ruleNames;
        this.literalNames = CtoParser.literalNames;
        this.symbolicNames = CtoParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	modelUnit() {
	    let localctx = new ModelUnitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CtoParser.RULE_modelUnit);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.namespaceDeclaration();
	        this.state = 86;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===CtoParser.IMPORT) {
	            this.state = 83;
	            this.importDeclaration();
	            this.state = 88;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 92;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CtoParser.ABSTRACT) | (1 << CtoParser.ASSET) | (1 << CtoParser.CONCEPT) | (1 << CtoParser.ENUM) | (1 << CtoParser.EVENT) | (1 << CtoParser.PARTICIPANT) | (1 << CtoParser.TRANSACTION))) !== 0) || _la===CtoParser.AT) {
	            this.state = 89;
	            this.typeDeclaration();
	            this.state = 94;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 95;
	        this.match(CtoParser.EOF);
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



	namespaceDeclaration() {
	    let localctx = new NamespaceDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CtoParser.RULE_namespaceDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.match(CtoParser.NAMESPACE);
	        this.state = 98;
	        this.qualifiedName();
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



	importDeclaration() {
	    let localctx = new ImportDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CtoParser.RULE_importDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this.match(CtoParser.IMPORT);
	        this.state = 101;
	        this.qualifiedName();
	        this.state = 104;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===CtoParser.DOT) {
	            this.state = 102;
	            this.match(CtoParser.DOT);
	            this.state = 103;
	            this.match(CtoParser.MUL);
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



	typeDeclaration() {
	    let localctx = new TypeDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CtoParser.RULE_typeDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 106;
	            this.assetDeclaration();
	            break;

	        case 2:
	            this.state = 107;
	            this.conceptDeclaration();
	            break;

	        case 3:
	            this.state = 108;
	            this.enumDeclaration();
	            break;

	        case 4:
	            this.state = 109;
	            this.participantDeclaration();
	            break;

	        case 5:
	            this.state = 110;
	            this.transactionDeclaration();
	            break;

	        case 6:
	            this.state = 111;
	            this.eventDeclaration();
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



	classModifier() {
	    let localctx = new ClassModifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CtoParser.RULE_classModifier);
	    try {
	        this.state = 116;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case CtoParser.AT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 114;
	            this.decorator();
	            break;
	        case CtoParser.ABSTRACT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 115;
	            this.match(CtoParser.ABSTRACT);
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



	assetDeclaration() {
	    let localctx = new AssetDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CtoParser.RULE_assetDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===CtoParser.ABSTRACT || _la===CtoParser.AT) {
	            this.state = 118;
	            this.classModifier();
	            this.state = 123;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 124;
	        this.match(CtoParser.ASSET);
	        this.state = 125;
	        this.match(CtoParser.IDENTIFIER);
	        this.state = 126;
	        this.extendsOrIdentified();
	        this.state = 127;
	        this.classBody();
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



	conceptDeclaration() {
	    let localctx = new ConceptDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CtoParser.RULE_conceptDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 132;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===CtoParser.ABSTRACT || _la===CtoParser.AT) {
	            this.state = 129;
	            this.classModifier();
	            this.state = 134;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 135;
	        this.match(CtoParser.CONCEPT);
	        this.state = 136;
	        this.match(CtoParser.IDENTIFIER);
	        this.state = 139;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===CtoParser.EXTENDS) {
	            this.state = 137;
	            this.match(CtoParser.EXTENDS);
	            this.state = 138;
	            this.match(CtoParser.IDENTIFIER);
	        }

	        this.state = 141;
	        this.classBody();
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



	enumDeclaration() {
	    let localctx = new EnumDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CtoParser.RULE_enumDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        this.match(CtoParser.ENUM);
	        this.state = 144;
	        this.match(CtoParser.IDENTIFIER);
	        this.state = 145;
	        this.match(CtoParser.LBRACE);
	        this.state = 149;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===CtoParser.VAR) {
	            this.state = 146;
	            this.enumConstant();
	            this.state = 151;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 152;
	        this.match(CtoParser.RBRACE);
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



	enumConstant() {
	    let localctx = new EnumConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, CtoParser.RULE_enumConstant);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this.match(CtoParser.VAR);
	        this.state = 155;
	        this.match(CtoParser.IDENTIFIER);
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



	eventDeclaration() {
	    let localctx = new EventDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, CtoParser.RULE_eventDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this.match(CtoParser.EVENT);
	        this.state = 158;
	        this.match(CtoParser.IDENTIFIER);
	        this.state = 159;
	        this.classBody();
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



	participantDeclaration() {
	    let localctx = new ParticipantDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, CtoParser.RULE_participantDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===CtoParser.ABSTRACT || _la===CtoParser.AT) {
	            this.state = 161;
	            this.classModifier();
	            this.state = 166;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 167;
	        this.match(CtoParser.PARTICIPANT);
	        this.state = 168;
	        this.match(CtoParser.IDENTIFIER);
	        this.state = 169;
	        this.extendsOrIdentified();
	        this.state = 170;
	        this.classBody();
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



	transactionDeclaration() {
	    let localctx = new TransactionDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, CtoParser.RULE_transactionDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 175;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===CtoParser.ABSTRACT || _la===CtoParser.AT) {
	            this.state = 172;
	            this.classModifier();
	            this.state = 177;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 178;
	        this.match(CtoParser.TRANSACTION);
	        this.state = 179;
	        this.match(CtoParser.IDENTIFIER);
	        this.state = 180;
	        this.classBody();
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



	extendsOrIdentified() {
	    let localctx = new ExtendsOrIdentifiedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, CtoParser.RULE_extendsOrIdentified);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 185;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case CtoParser.EXTENDS:
	            this.state = 182;
	            this.match(CtoParser.EXTENDS);
	            this.state = 183;
	            this.match(CtoParser.IDENTIFIER);
	            break;
	        case CtoParser.IDENTIFIED:
	            this.state = 184;
	            this.identified();
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



	identified() {
	    let localctx = new IdentifiedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, CtoParser.RULE_identified);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 187;
	        this.match(CtoParser.IDENTIFIED);
	        this.state = 188;
	        this.match(CtoParser.IDENTIFIER);
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



	classBody() {
	    let localctx = new ClassBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, CtoParser.RULE_classBody);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 190;
	        this.match(CtoParser.LBRACE);
	        this.state = 194;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 28)) & ~0x1f) == 0 && ((1 << (_la - 28)) & ((1 << (CtoParser.SEMI - 28)) | (1 << (CtoParser.REF - 28)) | (1 << (CtoParser.VAR - 28)))) !== 0)) {
	            this.state = 191;
	            this.classBodyDeclaration();
	            this.state = 196;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 197;
	        this.match(CtoParser.RBRACE);
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



	classBodyDeclaration() {
	    let localctx = new ClassBodyDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, CtoParser.RULE_classBodyDeclaration);
	    try {
	        this.state = 201;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case CtoParser.SEMI:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 199;
	            this.match(CtoParser.SEMI);
	            break;
	        case CtoParser.REF:
	        case CtoParser.VAR:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 200;
	            this.fieldDeclaration();
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



	fieldDeclaration() {
	    let localctx = new FieldDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, CtoParser.RULE_fieldDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.state = 247;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 203;
	            this.stringField();
	            this.state = 204;
	            this.identifier();
	            this.state = 206;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===CtoParser.DEFAULT) {
	                this.state = 205;
	                this.defaultString();
	            }

	            this.state = 209;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===CtoParser.REGEX) {
	                this.state = 208;
	                this.regexDeclaration();
	            }

	            this.state = 212;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===CtoParser.OPTIONAL) {
	                this.state = 211;
	                this.match(CtoParser.OPTIONAL);
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 214;
	            this.booleanField();
	            this.state = 215;
	            this.identifier();
	            this.state = 217;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===CtoParser.DEFAULT) {
	                this.state = 216;
	                this.defaultBoolean();
	            }

	            this.state = 220;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===CtoParser.OPTIONAL) {
	                this.state = 219;
	                this.match(CtoParser.OPTIONAL);
	            }

	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 222;
	            this.numericField();
	            this.state = 223;
	            this.identifier();
	            this.state = 225;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===CtoParser.DEFAULT) {
	                this.state = 224;
	                this.defaultNumber();
	            }

	            this.state = 228;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===CtoParser.RANGE) {
	                this.state = 227;
	                this.rangeValidation();
	            }

	            this.state = 231;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===CtoParser.OPTIONAL) {
	                this.state = 230;
	                this.match(CtoParser.OPTIONAL);
	            }

	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 233;
	            this.dateField();
	            this.state = 234;
	            this.identifier();
	            this.state = 236;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===CtoParser.DEFAULT) {
	                this.state = 235;
	                this.defaultDate();
	            }

	            this.state = 239;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===CtoParser.OPTIONAL) {
	                this.state = 238;
	                this.match(CtoParser.OPTIONAL);
	            }

	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 241;
	            this.identifierField();
	            this.state = 242;
	            this.identifier();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 244;
	            this.reference();
	            this.state = 245;
	            this.identifier();
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



	identifierField() {
	    let localctx = new IdentifierFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, CtoParser.RULE_identifierField);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 249;
	        this.match(CtoParser.VAR);
	        this.state = 250;
	        this.match(CtoParser.IDENTIFIER);
	        this.state = 254;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===CtoParser.LBRACK) {
	            this.state = 251;
	            this.square();
	            this.state = 256;
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



	numericField() {
	    let localctx = new NumericFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, CtoParser.RULE_numericField);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 257;
	        this.match(CtoParser.VAR);
	        this.state = 258;
	        this.numericPrimitive();
	        this.state = 262;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===CtoParser.LBRACK) {
	            this.state = 259;
	            this.square();
	            this.state = 264;
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



	numericPrimitive() {
	    let localctx = new NumericPrimitiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, CtoParser.RULE_numericPrimitive);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 265;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CtoParser.DOUBLE) | (1 << CtoParser.INTEGER) | (1 << CtoParser.LONG))) !== 0))) {
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



	booleanField() {
	    let localctx = new BooleanFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, CtoParser.RULE_booleanField);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 267;
	        this.match(CtoParser.VAR);
	        this.state = 268;
	        this.match(CtoParser.BOOLEAN);
	        this.state = 272;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===CtoParser.LBRACK) {
	            this.state = 269;
	            this.square();
	            this.state = 274;
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



	dateField() {
	    let localctx = new DateFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, CtoParser.RULE_dateField);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 275;
	        this.match(CtoParser.VAR);
	        this.state = 276;
	        this.match(CtoParser.DATE_TIME);
	        this.state = 280;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===CtoParser.LBRACK) {
	            this.state = 277;
	            this.square();
	            this.state = 282;
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



	defaultDate() {
	    let localctx = new DefaultDateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, CtoParser.RULE_defaultDate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 283;
	        this.match(CtoParser.DEFAULT);
	        this.state = 284;
	        this.match(CtoParser.ASSIGN);
	        this.state = 285;
	        this.match(CtoParser.DATE_TIME_LITERAL);
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



	regexDeclaration() {
	    let localctx = new RegexDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, CtoParser.RULE_regexDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 287;
	        this.match(CtoParser.REGEX);
	        this.state = 288;
	        this.match(CtoParser.ASSIGN);
	        this.state = 289;
	        this.match(CtoParser.REGEX_EXPR);
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



	stringField() {
	    let localctx = new StringFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, CtoParser.RULE_stringField);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 291;
	        this.match(CtoParser.VAR);
	        this.state = 292;
	        this.match(CtoParser.STRING);
	        this.state = 296;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===CtoParser.LBRACK) {
	            this.state = 293;
	            this.square();
	            this.state = 298;
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



	reference() {
	    let localctx = new ReferenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, CtoParser.RULE_reference);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 299;
	        this.match(CtoParser.REF);
	        this.state = 300;
	        this.match(CtoParser.IDENTIFIER);
	        this.state = 304;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===CtoParser.LBRACK) {
	            this.state = 301;
	            this.square();
	            this.state = 306;
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



	qualifiedName() {
	    let localctx = new QualifiedNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, CtoParser.RULE_qualifiedName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 307;
	        this.match(CtoParser.IDENTIFIER);
	        this.state = 312;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,31,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 308;
	                this.match(CtoParser.DOT);
	                this.state = 309;
	                this.match(CtoParser.IDENTIFIER); 
	            }
	            this.state = 314;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,31,this._ctx);
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



	rangeValidation() {
	    let localctx = new RangeValidationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, CtoParser.RULE_rangeValidation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 315;
	        this.match(CtoParser.RANGE);
	        this.state = 316;
	        this.match(CtoParser.ASSIGN);
	        this.state = 317;
	        this.rangeDeclaration();
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



	rangeDeclaration() {
	    let localctx = new RangeDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, CtoParser.RULE_rangeDeclaration);
	    try {
	        this.state = 335;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 319;
	            this.match(CtoParser.LBRACK);
	            this.state = 320;
	            this.numberLiteral();
	            this.state = 321;
	            this.match(CtoParser.COMMA);
	            this.state = 322;
	            this.match(CtoParser.RBRACK);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 324;
	            this.match(CtoParser.LBRACK);
	            this.state = 325;
	            this.match(CtoParser.COMMA);
	            this.state = 326;
	            this.numberLiteral();
	            this.state = 327;
	            this.match(CtoParser.RBRACK);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 329;
	            this.match(CtoParser.LBRACK);
	            this.state = 330;
	            this.numberLiteral();
	            this.state = 331;
	            this.match(CtoParser.COMMA);
	            this.state = 332;
	            this.numberLiteral();
	            this.state = 333;
	            this.match(CtoParser.RBRACK);
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



	defaultBoolean() {
	    let localctx = new DefaultBooleanContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, CtoParser.RULE_defaultBoolean);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 337;
	        this.match(CtoParser.DEFAULT);
	        this.state = 338;
	        this.match(CtoParser.ASSIGN);
	        this.state = 339;
	        this.match(CtoParser.BOOL_LITERAL);
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



	defaultString() {
	    let localctx = new DefaultStringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, CtoParser.RULE_defaultString);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 341;
	        this.match(CtoParser.DEFAULT);
	        this.state = 342;
	        this.match(CtoParser.ASSIGN);
	        this.state = 343;
	        this.stringLiteral();
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



	defaultNumber() {
	    let localctx = new DefaultNumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, CtoParser.RULE_defaultNumber);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 345;
	        this.match(CtoParser.DEFAULT);
	        this.state = 346;
	        this.match(CtoParser.ASSIGN);
	        this.state = 347;
	        this.numberLiteral();
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



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, CtoParser.RULE_identifier);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 349;
	        _la = this._input.LA(1);
	        if(!(_la===CtoParser.ASSET || _la===CtoParser.PARTICIPANT || _la===CtoParser.IDENTIFIER)) {
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



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, CtoParser.RULE_literal);
	    try {
	        this.state = 354;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case CtoParser.DECIMAL_LITERAL:
	        case CtoParser.OCT_LITERAL:
	        case CtoParser.FLOAT_LITERAL:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 351;
	            this.numberLiteral();
	            break;
	        case CtoParser.CHAR_LITERAL:
	        case CtoParser.STRING_LITERAL:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 352;
	            this.stringLiteral();
	            break;
	        case CtoParser.BOOL_LITERAL:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 353;
	            this.match(CtoParser.BOOL_LITERAL);
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



	numberLiteral() {
	    let localctx = new NumberLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, CtoParser.RULE_numberLiteral);
	    try {
	        this.state = 358;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case CtoParser.DECIMAL_LITERAL:
	        case CtoParser.OCT_LITERAL:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 356;
	            this.integerLiteral();
	            break;
	        case CtoParser.FLOAT_LITERAL:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 357;
	            this.floatLiteral();
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



	stringLiteral() {
	    let localctx = new StringLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, CtoParser.RULE_stringLiteral);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 360;
	        _la = this._input.LA(1);
	        if(!(_la===CtoParser.CHAR_LITERAL || _la===CtoParser.STRING_LITERAL)) {
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



	integerLiteral() {
	    let localctx = new IntegerLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, CtoParser.RULE_integerLiteral);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 362;
	        _la = this._input.LA(1);
	        if(!(_la===CtoParser.DECIMAL_LITERAL || _la===CtoParser.OCT_LITERAL)) {
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



	floatLiteral() {
	    let localctx = new FloatLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, CtoParser.RULE_floatLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 364;
	        this.match(CtoParser.FLOAT_LITERAL);
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



	decorator() {
	    let localctx = new DecoratorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, CtoParser.RULE_decorator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 366;
	        this.match(CtoParser.AT);
	        this.state = 367;
	        this.qualifiedName();
	        this.state = 372;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===CtoParser.LPAREN) {
	            this.state = 368;
	            this.match(CtoParser.LPAREN);
	            this.state = 369;
	            this.elementValuePair();
	            this.state = 370;
	            this.match(CtoParser.RPAREN);
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



	elementValuePair() {
	    let localctx = new ElementValuePairContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, CtoParser.RULE_elementValuePair);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 374;
	        this.literal();
	        this.state = 379;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===CtoParser.COMMA) {
	            this.state = 375;
	            this.match(CtoParser.COMMA);
	            this.state = 376;
	            this.literal();
	            this.state = 381;
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



	square() {
	    let localctx = new SquareContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, CtoParser.RULE_square);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 382;
	        this.match(CtoParser.LBRACK);
	        this.state = 383;
	        this.match(CtoParser.RBRACK);
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

CtoParser.EOF = antlr4.Token.EOF;
CtoParser.ABSTRACT = 1;
CtoParser.ASSET = 2;
CtoParser.CONCEPT = 3;
CtoParser.DEFAULT = 4;
CtoParser.ENUM = 5;
CtoParser.EVENT = 6;
CtoParser.EXTENDS = 7;
CtoParser.IDENTIFIED = 8;
CtoParser.IMPORT = 9;
CtoParser.NAMESPACE = 10;
CtoParser.OPTIONAL = 11;
CtoParser.PARTICIPANT = 12;
CtoParser.RANGE = 13;
CtoParser.REGEX = 14;
CtoParser.TRANSACTION = 15;
CtoParser.BOOLEAN = 16;
CtoParser.DATE_TIME = 17;
CtoParser.DOUBLE = 18;
CtoParser.INTEGER = 19;
CtoParser.LONG = 20;
CtoParser.STRING = 21;
CtoParser.LPAREN = 22;
CtoParser.RPAREN = 23;
CtoParser.LBRACE = 24;
CtoParser.RBRACE = 25;
CtoParser.LBRACK = 26;
CtoParser.RBRACK = 27;
CtoParser.SEMI = 28;
CtoParser.COMMA = 29;
CtoParser.DOT = 30;
CtoParser.COLON = 31;
CtoParser.ASSIGN = 32;
CtoParser.MUL = 33;
CtoParser.AT = 34;
CtoParser.ELLIPSIS = 35;
CtoParser.REF = 36;
CtoParser.VAR = 37;
CtoParser.DECIMAL_LITERAL = 38;
CtoParser.OCT_LITERAL = 39;
CtoParser.FLOAT_LITERAL = 40;
CtoParser.BOOL_LITERAL = 41;
CtoParser.DATE_TIME_LITERAL = 42;
CtoParser.WS = 43;
CtoParser.LINE_COMMENT = 44;
CtoParser.COMMENT = 45;
CtoParser.REGEX_EXPR = 46;
CtoParser.IDENTIFIER = 47;
CtoParser.CHAR_LITERAL = 48;
CtoParser.STRING_LITERAL = 49;

CtoParser.RULE_modelUnit = 0;
CtoParser.RULE_namespaceDeclaration = 1;
CtoParser.RULE_importDeclaration = 2;
CtoParser.RULE_typeDeclaration = 3;
CtoParser.RULE_classModifier = 4;
CtoParser.RULE_assetDeclaration = 5;
CtoParser.RULE_conceptDeclaration = 6;
CtoParser.RULE_enumDeclaration = 7;
CtoParser.RULE_enumConstant = 8;
CtoParser.RULE_eventDeclaration = 9;
CtoParser.RULE_participantDeclaration = 10;
CtoParser.RULE_transactionDeclaration = 11;
CtoParser.RULE_extendsOrIdentified = 12;
CtoParser.RULE_identified = 13;
CtoParser.RULE_classBody = 14;
CtoParser.RULE_classBodyDeclaration = 15;
CtoParser.RULE_fieldDeclaration = 16;
CtoParser.RULE_identifierField = 17;
CtoParser.RULE_numericField = 18;
CtoParser.RULE_numericPrimitive = 19;
CtoParser.RULE_booleanField = 20;
CtoParser.RULE_dateField = 21;
CtoParser.RULE_defaultDate = 22;
CtoParser.RULE_regexDeclaration = 23;
CtoParser.RULE_stringField = 24;
CtoParser.RULE_reference = 25;
CtoParser.RULE_qualifiedName = 26;
CtoParser.RULE_rangeValidation = 27;
CtoParser.RULE_rangeDeclaration = 28;
CtoParser.RULE_defaultBoolean = 29;
CtoParser.RULE_defaultString = 30;
CtoParser.RULE_defaultNumber = 31;
CtoParser.RULE_identifier = 32;
CtoParser.RULE_literal = 33;
CtoParser.RULE_numberLiteral = 34;
CtoParser.RULE_stringLiteral = 35;
CtoParser.RULE_integerLiteral = 36;
CtoParser.RULE_floatLiteral = 37;
CtoParser.RULE_decorator = 38;
CtoParser.RULE_elementValuePair = 39;
CtoParser.RULE_square = 40;

class ModelUnitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_modelUnit;
    }

	namespaceDeclaration() {
	    return this.getTypedRuleContext(NamespaceDeclarationContext,0);
	};

	EOF() {
	    return this.getToken(CtoParser.EOF, 0);
	};

	importDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImportDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(ImportDeclarationContext,i);
	    }
	};

	typeDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(TypeDeclarationContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterModelUnit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitModelUnit(this);
		}
	}


}



class NamespaceDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_namespaceDeclaration;
    }

	NAMESPACE() {
	    return this.getToken(CtoParser.NAMESPACE, 0);
	};

	qualifiedName() {
	    return this.getTypedRuleContext(QualifiedNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterNamespaceDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitNamespaceDeclaration(this);
		}
	}


}



class ImportDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_importDeclaration;
    }

	IMPORT() {
	    return this.getToken(CtoParser.IMPORT, 0);
	};

	qualifiedName() {
	    return this.getTypedRuleContext(QualifiedNameContext,0);
	};

	DOT() {
	    return this.getToken(CtoParser.DOT, 0);
	};

	MUL() {
	    return this.getToken(CtoParser.MUL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterImportDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitImportDeclaration(this);
		}
	}


}



class TypeDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_typeDeclaration;
    }

	assetDeclaration() {
	    return this.getTypedRuleContext(AssetDeclarationContext,0);
	};

	conceptDeclaration() {
	    return this.getTypedRuleContext(ConceptDeclarationContext,0);
	};

	enumDeclaration() {
	    return this.getTypedRuleContext(EnumDeclarationContext,0);
	};

	participantDeclaration() {
	    return this.getTypedRuleContext(ParticipantDeclarationContext,0);
	};

	transactionDeclaration() {
	    return this.getTypedRuleContext(TransactionDeclarationContext,0);
	};

	eventDeclaration() {
	    return this.getTypedRuleContext(EventDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterTypeDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitTypeDeclaration(this);
		}
	}


}



class ClassModifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_classModifier;
    }

	decorator() {
	    return this.getTypedRuleContext(DecoratorContext,0);
	};

	ABSTRACT() {
	    return this.getToken(CtoParser.ABSTRACT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterClassModifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitClassModifier(this);
		}
	}


}



class AssetDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_assetDeclaration;
    }

	ASSET() {
	    return this.getToken(CtoParser.ASSET, 0);
	};

	IDENTIFIER() {
	    return this.getToken(CtoParser.IDENTIFIER, 0);
	};

	extendsOrIdentified() {
	    return this.getTypedRuleContext(ExtendsOrIdentifiedContext,0);
	};

	classBody() {
	    return this.getTypedRuleContext(ClassBodyContext,0);
	};

	classModifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ClassModifierContext);
	    } else {
	        return this.getTypedRuleContext(ClassModifierContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterAssetDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitAssetDeclaration(this);
		}
	}


}



class ConceptDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_conceptDeclaration;
    }

	CONCEPT() {
	    return this.getToken(CtoParser.CONCEPT, 0);
	};

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CtoParser.IDENTIFIER);
	    } else {
	        return this.getToken(CtoParser.IDENTIFIER, i);
	    }
	};


	classBody() {
	    return this.getTypedRuleContext(ClassBodyContext,0);
	};

	classModifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ClassModifierContext);
	    } else {
	        return this.getTypedRuleContext(ClassModifierContext,i);
	    }
	};

	EXTENDS() {
	    return this.getToken(CtoParser.EXTENDS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterConceptDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitConceptDeclaration(this);
		}
	}


}



class EnumDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_enumDeclaration;
    }

	ENUM() {
	    return this.getToken(CtoParser.ENUM, 0);
	};

	IDENTIFIER() {
	    return this.getToken(CtoParser.IDENTIFIER, 0);
	};

	LBRACE() {
	    return this.getToken(CtoParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(CtoParser.RBRACE, 0);
	};

	enumConstant = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EnumConstantContext);
	    } else {
	        return this.getTypedRuleContext(EnumConstantContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterEnumDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitEnumDeclaration(this);
		}
	}


}



class EnumConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_enumConstant;
    }

	VAR() {
	    return this.getToken(CtoParser.VAR, 0);
	};

	IDENTIFIER() {
	    return this.getToken(CtoParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterEnumConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitEnumConstant(this);
		}
	}


}



class EventDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_eventDeclaration;
    }

	EVENT() {
	    return this.getToken(CtoParser.EVENT, 0);
	};

	IDENTIFIER() {
	    return this.getToken(CtoParser.IDENTIFIER, 0);
	};

	classBody() {
	    return this.getTypedRuleContext(ClassBodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterEventDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitEventDeclaration(this);
		}
	}


}



class ParticipantDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_participantDeclaration;
    }

	PARTICIPANT() {
	    return this.getToken(CtoParser.PARTICIPANT, 0);
	};

	IDENTIFIER() {
	    return this.getToken(CtoParser.IDENTIFIER, 0);
	};

	extendsOrIdentified() {
	    return this.getTypedRuleContext(ExtendsOrIdentifiedContext,0);
	};

	classBody() {
	    return this.getTypedRuleContext(ClassBodyContext,0);
	};

	classModifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ClassModifierContext);
	    } else {
	        return this.getTypedRuleContext(ClassModifierContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterParticipantDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitParticipantDeclaration(this);
		}
	}


}



class TransactionDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_transactionDeclaration;
    }

	TRANSACTION() {
	    return this.getToken(CtoParser.TRANSACTION, 0);
	};

	IDENTIFIER() {
	    return this.getToken(CtoParser.IDENTIFIER, 0);
	};

	classBody() {
	    return this.getTypedRuleContext(ClassBodyContext,0);
	};

	classModifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ClassModifierContext);
	    } else {
	        return this.getTypedRuleContext(ClassModifierContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterTransactionDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitTransactionDeclaration(this);
		}
	}


}



class ExtendsOrIdentifiedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_extendsOrIdentified;
    }

	identified() {
	    return this.getTypedRuleContext(IdentifiedContext,0);
	};

	EXTENDS() {
	    return this.getToken(CtoParser.EXTENDS, 0);
	};

	IDENTIFIER() {
	    return this.getToken(CtoParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterExtendsOrIdentified(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitExtendsOrIdentified(this);
		}
	}


}



class IdentifiedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_identified;
    }

	IDENTIFIED() {
	    return this.getToken(CtoParser.IDENTIFIED, 0);
	};

	IDENTIFIER() {
	    return this.getToken(CtoParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterIdentified(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitIdentified(this);
		}
	}


}



class ClassBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_classBody;
    }

	LBRACE() {
	    return this.getToken(CtoParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(CtoParser.RBRACE, 0);
	};

	classBodyDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ClassBodyDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(ClassBodyDeclarationContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterClassBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitClassBody(this);
		}
	}


}



class ClassBodyDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_classBodyDeclaration;
    }

	SEMI() {
	    return this.getToken(CtoParser.SEMI, 0);
	};

	fieldDeclaration() {
	    return this.getTypedRuleContext(FieldDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterClassBodyDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitClassBodyDeclaration(this);
		}
	}


}



class FieldDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_fieldDeclaration;
    }

	stringField() {
	    return this.getTypedRuleContext(StringFieldContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	defaultString() {
	    return this.getTypedRuleContext(DefaultStringContext,0);
	};

	regexDeclaration() {
	    return this.getTypedRuleContext(RegexDeclarationContext,0);
	};

	OPTIONAL() {
	    return this.getToken(CtoParser.OPTIONAL, 0);
	};

	booleanField() {
	    return this.getTypedRuleContext(BooleanFieldContext,0);
	};

	defaultBoolean() {
	    return this.getTypedRuleContext(DefaultBooleanContext,0);
	};

	numericField() {
	    return this.getTypedRuleContext(NumericFieldContext,0);
	};

	defaultNumber() {
	    return this.getTypedRuleContext(DefaultNumberContext,0);
	};

	rangeValidation() {
	    return this.getTypedRuleContext(RangeValidationContext,0);
	};

	dateField() {
	    return this.getTypedRuleContext(DateFieldContext,0);
	};

	defaultDate() {
	    return this.getTypedRuleContext(DefaultDateContext,0);
	};

	identifierField() {
	    return this.getTypedRuleContext(IdentifierFieldContext,0);
	};

	reference() {
	    return this.getTypedRuleContext(ReferenceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterFieldDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitFieldDeclaration(this);
		}
	}


}



class IdentifierFieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_identifierField;
    }

	VAR() {
	    return this.getToken(CtoParser.VAR, 0);
	};

	IDENTIFIER() {
	    return this.getToken(CtoParser.IDENTIFIER, 0);
	};

	square = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SquareContext);
	    } else {
	        return this.getTypedRuleContext(SquareContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterIdentifierField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitIdentifierField(this);
		}
	}


}



class NumericFieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_numericField;
    }

	VAR() {
	    return this.getToken(CtoParser.VAR, 0);
	};

	numericPrimitive() {
	    return this.getTypedRuleContext(NumericPrimitiveContext,0);
	};

	square = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SquareContext);
	    } else {
	        return this.getTypedRuleContext(SquareContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterNumericField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitNumericField(this);
		}
	}


}



class NumericPrimitiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_numericPrimitive;
    }

	DOUBLE() {
	    return this.getToken(CtoParser.DOUBLE, 0);
	};

	INTEGER() {
	    return this.getToken(CtoParser.INTEGER, 0);
	};

	LONG() {
	    return this.getToken(CtoParser.LONG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterNumericPrimitive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitNumericPrimitive(this);
		}
	}


}



class BooleanFieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_booleanField;
    }

	VAR() {
	    return this.getToken(CtoParser.VAR, 0);
	};

	BOOLEAN() {
	    return this.getToken(CtoParser.BOOLEAN, 0);
	};

	square = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SquareContext);
	    } else {
	        return this.getTypedRuleContext(SquareContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterBooleanField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitBooleanField(this);
		}
	}


}



class DateFieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_dateField;
    }

	VAR() {
	    return this.getToken(CtoParser.VAR, 0);
	};

	DATE_TIME() {
	    return this.getToken(CtoParser.DATE_TIME, 0);
	};

	square = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SquareContext);
	    } else {
	        return this.getTypedRuleContext(SquareContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterDateField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitDateField(this);
		}
	}


}



class DefaultDateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_defaultDate;
    }

	DEFAULT() {
	    return this.getToken(CtoParser.DEFAULT, 0);
	};

	ASSIGN() {
	    return this.getToken(CtoParser.ASSIGN, 0);
	};

	DATE_TIME_LITERAL() {
	    return this.getToken(CtoParser.DATE_TIME_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterDefaultDate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitDefaultDate(this);
		}
	}


}



class RegexDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_regexDeclaration;
    }

	REGEX() {
	    return this.getToken(CtoParser.REGEX, 0);
	};

	ASSIGN() {
	    return this.getToken(CtoParser.ASSIGN, 0);
	};

	REGEX_EXPR() {
	    return this.getToken(CtoParser.REGEX_EXPR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterRegexDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitRegexDeclaration(this);
		}
	}


}



class StringFieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_stringField;
    }

	VAR() {
	    return this.getToken(CtoParser.VAR, 0);
	};

	STRING() {
	    return this.getToken(CtoParser.STRING, 0);
	};

	square = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SquareContext);
	    } else {
	        return this.getTypedRuleContext(SquareContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterStringField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitStringField(this);
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
        this.ruleIndex = CtoParser.RULE_reference;
    }

	REF() {
	    return this.getToken(CtoParser.REF, 0);
	};

	IDENTIFIER() {
	    return this.getToken(CtoParser.IDENTIFIER, 0);
	};

	square = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SquareContext);
	    } else {
	        return this.getTypedRuleContext(SquareContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterReference(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitReference(this);
		}
	}


}



class QualifiedNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_qualifiedName;
    }

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CtoParser.IDENTIFIER);
	    } else {
	        return this.getToken(CtoParser.IDENTIFIER, i);
	    }
	};


	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CtoParser.DOT);
	    } else {
	        return this.getToken(CtoParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterQualifiedName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitQualifiedName(this);
		}
	}


}



class RangeValidationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_rangeValidation;
    }

	RANGE() {
	    return this.getToken(CtoParser.RANGE, 0);
	};

	ASSIGN() {
	    return this.getToken(CtoParser.ASSIGN, 0);
	};

	rangeDeclaration() {
	    return this.getTypedRuleContext(RangeDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterRangeValidation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitRangeValidation(this);
		}
	}


}



class RangeDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_rangeDeclaration;
    }

	LBRACK() {
	    return this.getToken(CtoParser.LBRACK, 0);
	};

	numberLiteral = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumberLiteralContext);
	    } else {
	        return this.getTypedRuleContext(NumberLiteralContext,i);
	    }
	};

	COMMA() {
	    return this.getToken(CtoParser.COMMA, 0);
	};

	RBRACK() {
	    return this.getToken(CtoParser.RBRACK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterRangeDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitRangeDeclaration(this);
		}
	}


}



class DefaultBooleanContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_defaultBoolean;
    }

	DEFAULT() {
	    return this.getToken(CtoParser.DEFAULT, 0);
	};

	ASSIGN() {
	    return this.getToken(CtoParser.ASSIGN, 0);
	};

	BOOL_LITERAL() {
	    return this.getToken(CtoParser.BOOL_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterDefaultBoolean(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitDefaultBoolean(this);
		}
	}


}



class DefaultStringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_defaultString;
    }

	DEFAULT() {
	    return this.getToken(CtoParser.DEFAULT, 0);
	};

	ASSIGN() {
	    return this.getToken(CtoParser.ASSIGN, 0);
	};

	stringLiteral() {
	    return this.getTypedRuleContext(StringLiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterDefaultString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitDefaultString(this);
		}
	}


}



class DefaultNumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_defaultNumber;
    }

	DEFAULT() {
	    return this.getToken(CtoParser.DEFAULT, 0);
	};

	ASSIGN() {
	    return this.getToken(CtoParser.ASSIGN, 0);
	};

	numberLiteral() {
	    return this.getTypedRuleContext(NumberLiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterDefaultNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitDefaultNumber(this);
		}
	}


}



class IdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_identifier;
    }

	IDENTIFIER() {
	    return this.getToken(CtoParser.IDENTIFIER, 0);
	};

	ASSET() {
	    return this.getToken(CtoParser.ASSET, 0);
	};

	PARTICIPANT() {
	    return this.getToken(CtoParser.PARTICIPANT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitIdentifier(this);
		}
	}


}



class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_literal;
    }

	numberLiteral() {
	    return this.getTypedRuleContext(NumberLiteralContext,0);
	};

	stringLiteral() {
	    return this.getTypedRuleContext(StringLiteralContext,0);
	};

	BOOL_LITERAL() {
	    return this.getToken(CtoParser.BOOL_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitLiteral(this);
		}
	}


}



class NumberLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_numberLiteral;
    }

	integerLiteral() {
	    return this.getTypedRuleContext(IntegerLiteralContext,0);
	};

	floatLiteral() {
	    return this.getTypedRuleContext(FloatLiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterNumberLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitNumberLiteral(this);
		}
	}


}



class StringLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_stringLiteral;
    }

	CHAR_LITERAL() {
	    return this.getToken(CtoParser.CHAR_LITERAL, 0);
	};

	STRING_LITERAL() {
	    return this.getToken(CtoParser.STRING_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterStringLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitStringLiteral(this);
		}
	}


}



class IntegerLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_integerLiteral;
    }

	DECIMAL_LITERAL() {
	    return this.getToken(CtoParser.DECIMAL_LITERAL, 0);
	};

	OCT_LITERAL() {
	    return this.getToken(CtoParser.OCT_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterIntegerLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitIntegerLiteral(this);
		}
	}


}



class FloatLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_floatLiteral;
    }

	FLOAT_LITERAL() {
	    return this.getToken(CtoParser.FLOAT_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterFloatLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitFloatLiteral(this);
		}
	}


}



class DecoratorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_decorator;
    }

	AT() {
	    return this.getToken(CtoParser.AT, 0);
	};

	qualifiedName() {
	    return this.getTypedRuleContext(QualifiedNameContext,0);
	};

	LPAREN() {
	    return this.getToken(CtoParser.LPAREN, 0);
	};

	elementValuePair() {
	    return this.getTypedRuleContext(ElementValuePairContext,0);
	};

	RPAREN() {
	    return this.getToken(CtoParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterDecorator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitDecorator(this);
		}
	}


}



class ElementValuePairContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_elementValuePair;
    }

	literal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LiteralContext);
	    } else {
	        return this.getTypedRuleContext(LiteralContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CtoParser.COMMA);
	    } else {
	        return this.getToken(CtoParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterElementValuePair(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitElementValuePair(this);
		}
	}


}



class SquareContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CtoParser.RULE_square;
    }

	LBRACK() {
	    return this.getToken(CtoParser.LBRACK, 0);
	};

	RBRACK() {
	    return this.getToken(CtoParser.RBRACK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.enterSquare(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CtoParserListener ) {
	        listener.exitSquare(this);
		}
	}


}




CtoParser.ModelUnitContext = ModelUnitContext; 
CtoParser.NamespaceDeclarationContext = NamespaceDeclarationContext; 
CtoParser.ImportDeclarationContext = ImportDeclarationContext; 
CtoParser.TypeDeclarationContext = TypeDeclarationContext; 
CtoParser.ClassModifierContext = ClassModifierContext; 
CtoParser.AssetDeclarationContext = AssetDeclarationContext; 
CtoParser.ConceptDeclarationContext = ConceptDeclarationContext; 
CtoParser.EnumDeclarationContext = EnumDeclarationContext; 
CtoParser.EnumConstantContext = EnumConstantContext; 
CtoParser.EventDeclarationContext = EventDeclarationContext; 
CtoParser.ParticipantDeclarationContext = ParticipantDeclarationContext; 
CtoParser.TransactionDeclarationContext = TransactionDeclarationContext; 
CtoParser.ExtendsOrIdentifiedContext = ExtendsOrIdentifiedContext; 
CtoParser.IdentifiedContext = IdentifiedContext; 
CtoParser.ClassBodyContext = ClassBodyContext; 
CtoParser.ClassBodyDeclarationContext = ClassBodyDeclarationContext; 
CtoParser.FieldDeclarationContext = FieldDeclarationContext; 
CtoParser.IdentifierFieldContext = IdentifierFieldContext; 
CtoParser.NumericFieldContext = NumericFieldContext; 
CtoParser.NumericPrimitiveContext = NumericPrimitiveContext; 
CtoParser.BooleanFieldContext = BooleanFieldContext; 
CtoParser.DateFieldContext = DateFieldContext; 
CtoParser.DefaultDateContext = DefaultDateContext; 
CtoParser.RegexDeclarationContext = RegexDeclarationContext; 
CtoParser.StringFieldContext = StringFieldContext; 
CtoParser.ReferenceContext = ReferenceContext; 
CtoParser.QualifiedNameContext = QualifiedNameContext; 
CtoParser.RangeValidationContext = RangeValidationContext; 
CtoParser.RangeDeclarationContext = RangeDeclarationContext; 
CtoParser.DefaultBooleanContext = DefaultBooleanContext; 
CtoParser.DefaultStringContext = DefaultStringContext; 
CtoParser.DefaultNumberContext = DefaultNumberContext; 
CtoParser.IdentifierContext = IdentifierContext; 
CtoParser.LiteralContext = LiteralContext; 
CtoParser.NumberLiteralContext = NumberLiteralContext; 
CtoParser.StringLiteralContext = StringLiteralContext; 
CtoParser.IntegerLiteralContext = IntegerLiteralContext; 
CtoParser.FloatLiteralContext = FloatLiteralContext; 
CtoParser.DecoratorContext = DecoratorContext; 
CtoParser.ElementValuePairContext = ElementValuePairContext; 
CtoParser.SquareContext = SquareContext; 
