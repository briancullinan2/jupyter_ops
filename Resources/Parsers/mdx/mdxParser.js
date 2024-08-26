// Generated from Resources/Parsers/mdx/mdx.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import mdxListener from './mdxListener.js';
const serializedATN = [4,1,55,391,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,1,0,1,0,1,0,
1,1,1,1,3,1,102,8,1,1,1,1,1,3,1,106,8,1,1,1,1,1,1,1,1,1,3,1,112,8,1,1,1,
3,1,115,8,1,1,2,4,2,118,8,2,11,2,12,2,119,1,3,1,3,3,3,124,8,3,1,4,1,4,1,
4,1,4,1,4,1,4,1,4,1,4,3,4,134,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,144,
8,5,1,5,1,5,3,5,148,8,5,1,6,1,6,1,6,5,6,153,8,6,10,6,12,6,156,9,6,1,7,1,
7,1,7,5,7,161,8,7,10,7,12,7,164,9,7,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,
11,1,11,1,11,5,11,177,8,11,10,11,12,11,180,9,11,1,12,1,12,3,12,184,8,12,
1,12,1,12,3,12,188,8,12,1,12,1,12,1,12,1,13,1,13,1,14,3,14,196,8,14,1,14,
1,14,1,14,1,15,1,15,1,15,5,15,204,8,15,10,15,12,15,207,9,15,1,16,1,16,1,
17,1,17,1,18,1,18,1,19,1,19,1,20,3,20,218,8,20,1,20,1,20,1,20,1,21,1,21,
1,21,5,21,226,8,21,10,21,12,21,229,9,21,1,22,1,22,3,22,233,8,22,1,23,1,23,
1,24,1,24,1,25,1,25,1,25,5,25,242,8,25,10,25,12,25,245,9,25,1,26,1,26,1,
26,5,26,250,8,26,10,26,12,26,253,9,26,1,27,1,27,1,27,1,28,1,28,1,28,1,29,
1,29,1,29,5,29,264,8,29,10,29,12,29,267,9,29,1,30,1,30,1,30,3,30,272,8,30,
1,31,1,31,1,31,1,31,5,31,278,8,31,10,31,12,31,281,9,31,1,32,1,32,1,32,5,
32,286,8,32,10,32,12,32,289,9,32,1,33,1,33,1,33,5,33,294,8,33,10,33,12,33,
297,9,33,1,34,1,34,1,34,1,34,1,34,3,34,304,8,34,1,35,1,35,1,35,3,35,309,
8,35,1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,36,3,36,319,8,36,5,36,321,8,36,
10,36,12,36,324,9,36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,3,37,333,8,37,1,
37,1,37,1,37,1,37,1,37,3,37,340,8,37,1,38,1,38,1,38,5,38,345,8,38,10,38,
12,38,348,9,38,1,39,1,39,3,39,352,8,39,1,39,3,39,355,8,39,1,39,1,39,3,39,
359,8,39,1,39,1,39,1,40,1,40,5,40,365,8,40,10,40,12,40,368,9,40,1,41,1,41,
1,41,1,41,1,41,1,42,1,42,1,43,1,43,3,43,379,8,43,1,44,1,44,3,44,383,8,44,
1,45,1,45,1,46,1,46,1,47,1,47,1,47,0,0,48,0,2,4,6,8,10,12,14,16,18,20,22,
24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,
72,74,76,78,80,82,84,86,88,90,92,94,0,5,3,0,25,25,31,31,44,44,3,0,6,6,15,
15,17,17,2,0,2,2,20,20,4,0,8,10,12,12,14,14,16,16,2,0,27,27,39,39,390,0,
96,1,0,0,0,2,101,1,0,0,0,4,117,1,0,0,0,6,123,1,0,0,0,8,125,1,0,0,0,10,135,
1,0,0,0,12,149,1,0,0,0,14,157,1,0,0,0,16,165,1,0,0,0,18,167,1,0,0,0,20,171,
1,0,0,0,22,173,1,0,0,0,24,183,1,0,0,0,26,192,1,0,0,0,28,195,1,0,0,0,30,200,
1,0,0,0,32,208,1,0,0,0,34,210,1,0,0,0,36,212,1,0,0,0,38,214,1,0,0,0,40,217,
1,0,0,0,42,222,1,0,0,0,44,232,1,0,0,0,46,234,1,0,0,0,48,236,1,0,0,0,50,238,
1,0,0,0,52,246,1,0,0,0,54,254,1,0,0,0,56,257,1,0,0,0,58,260,1,0,0,0,60,271,
1,0,0,0,62,273,1,0,0,0,64,282,1,0,0,0,66,290,1,0,0,0,68,303,1,0,0,0,70,305,
1,0,0,0,72,312,1,0,0,0,74,339,1,0,0,0,76,341,1,0,0,0,78,349,1,0,0,0,80,362,
1,0,0,0,82,369,1,0,0,0,84,374,1,0,0,0,86,378,1,0,0,0,88,382,1,0,0,0,90,384,
1,0,0,0,92,386,1,0,0,0,94,388,1,0,0,0,96,97,3,2,1,0,97,98,5,0,0,1,98,1,1,
0,0,0,99,100,5,48,0,0,100,102,3,4,2,0,101,99,1,0,0,0,101,102,1,0,0,0,102,
103,1,0,0,0,103,105,5,40,0,0,104,106,3,12,6,0,105,104,1,0,0,0,105,106,1,
0,0,0,106,107,1,0,0,0,107,108,5,32,0,0,108,111,3,34,17,0,109,110,5,46,0,
0,110,112,3,38,19,0,111,109,1,0,0,0,111,112,1,0,0,0,112,114,1,0,0,0,113,
115,3,40,20,0,114,113,1,0,0,0,114,115,1,0,0,0,115,3,1,0,0,0,116,118,3,6,
3,0,117,116,1,0,0,0,118,119,1,0,0,0,119,117,1,0,0,0,119,120,1,0,0,0,120,
5,1,0,0,0,121,124,3,10,5,0,122,124,3,8,4,0,123,121,1,0,0,0,123,122,1,0,0,
0,124,7,1,0,0,0,125,126,5,42,0,0,126,127,3,20,10,0,127,133,5,22,0,0,128,
129,5,1,0,0,129,130,3,50,25,0,130,131,5,1,0,0,131,134,1,0,0,0,132,134,3,
50,25,0,133,128,1,0,0,0,133,132,1,0,0,0,134,9,1,0,0,0,135,136,5,34,0,0,136,
137,3,16,8,0,137,143,5,22,0,0,138,139,5,1,0,0,139,140,3,52,26,0,140,141,
5,1,0,0,141,144,1,0,0,0,142,144,3,52,26,0,143,138,1,0,0,0,143,142,1,0,0,
0,144,145,1,0,0,0,145,147,5,5,0,0,146,148,3,14,7,0,147,146,1,0,0,0,147,148,
1,0,0,0,148,11,1,0,0,0,149,154,3,24,12,0,150,151,5,5,0,0,151,153,3,24,12,
0,152,150,1,0,0,0,153,156,1,0,0,0,154,152,1,0,0,0,154,155,1,0,0,0,155,13,
1,0,0,0,156,154,1,0,0,0,157,162,3,18,9,0,158,159,5,5,0,0,159,161,3,18,9,
0,160,158,1,0,0,0,161,164,1,0,0,0,162,160,1,0,0,0,162,163,1,0,0,0,163,15,
1,0,0,0,164,162,1,0,0,0,165,166,3,22,11,0,166,17,1,0,0,0,167,168,3,86,43,
0,168,169,5,8,0,0,169,170,3,52,26,0,170,19,1,0,0,0,171,172,3,22,11,0,172,
21,1,0,0,0,173,178,3,86,43,0,174,175,5,7,0,0,175,177,3,86,43,0,176,174,1,
0,0,0,177,180,1,0,0,0,178,176,1,0,0,0,178,179,1,0,0,0,179,23,1,0,0,0,180,
178,1,0,0,0,181,182,5,35,0,0,182,184,5,29,0,0,183,181,1,0,0,0,183,184,1,
0,0,0,184,185,1,0,0,0,185,187,3,50,25,0,186,188,3,28,14,0,187,186,1,0,0,
0,187,188,1,0,0,0,188,189,1,0,0,0,189,190,5,37,0,0,190,191,3,26,13,0,191,
25,1,0,0,0,192,193,3,86,43,0,193,27,1,0,0,0,194,196,5,27,0,0,195,194,1,0,
0,0,195,196,1,0,0,0,196,197,1,0,0,0,197,198,5,39,0,0,198,199,3,30,15,0,199,
29,1,0,0,0,200,205,3,32,16,0,201,202,5,5,0,0,202,204,3,32,16,0,203,201,1,
0,0,0,204,207,1,0,0,0,205,203,1,0,0,0,205,206,1,0,0,0,206,31,1,0,0,0,207,
205,1,0,0,0,208,209,3,22,11,0,209,33,1,0,0,0,210,211,3,36,18,0,211,35,1,
0,0,0,212,213,3,22,11,0,213,37,1,0,0,0,214,215,3,50,25,0,215,39,1,0,0,0,
216,218,5,24,0,0,217,216,1,0,0,0,217,218,1,0,0,0,218,219,1,0,0,0,219,220,
5,39,0,0,220,221,3,42,21,0,221,41,1,0,0,0,222,227,3,44,22,0,223,224,5,5,
0,0,224,226,3,44,22,0,225,223,1,0,0,0,226,229,1,0,0,0,227,225,1,0,0,0,227,
228,1,0,0,0,228,43,1,0,0,0,229,227,1,0,0,0,230,233,3,46,23,0,231,233,3,48,
24,0,232,230,1,0,0,0,232,231,1,0,0,0,233,45,1,0,0,0,234,235,7,0,0,0,235,
47,1,0,0,0,236,237,3,86,43,0,237,49,1,0,0,0,238,243,3,52,26,0,239,240,5,
3,0,0,240,242,3,52,26,0,241,239,1,0,0,0,242,245,1,0,0,0,243,241,1,0,0,0,
243,244,1,0,0,0,244,51,1,0,0,0,245,243,1,0,0,0,246,251,3,58,29,0,247,250,
3,54,27,0,248,250,3,56,28,0,249,247,1,0,0,0,249,248,1,0,0,0,250,253,1,0,
0,0,251,249,1,0,0,0,251,252,1,0,0,0,252,53,1,0,0,0,253,251,1,0,0,0,254,255,
5,47,0,0,255,256,3,58,29,0,256,55,1,0,0,0,257,258,5,38,0,0,258,259,3,58,
29,0,259,57,1,0,0,0,260,265,3,60,30,0,261,262,5,21,0,0,262,264,3,60,30,0,
263,261,1,0,0,0,264,267,1,0,0,0,265,263,1,0,0,0,265,266,1,0,0,0,266,59,1,
0,0,0,267,265,1,0,0,0,268,269,5,36,0,0,269,272,3,60,30,0,270,272,3,62,31,
0,271,268,1,0,0,0,271,270,1,0,0,0,272,61,1,0,0,0,273,279,3,64,32,0,274,275,
3,84,42,0,275,276,3,64,32,0,276,278,1,0,0,0,277,274,1,0,0,0,278,281,1,0,
0,0,279,277,1,0,0,0,279,280,1,0,0,0,280,63,1,0,0,0,281,279,1,0,0,0,282,287,
3,66,33,0,283,284,7,1,0,0,284,286,3,66,33,0,285,283,1,0,0,0,286,289,1,0,
0,0,287,285,1,0,0,0,287,288,1,0,0,0,288,65,1,0,0,0,289,287,1,0,0,0,290,295,
3,68,34,0,291,292,7,2,0,0,292,294,3,68,34,0,293,291,1,0,0,0,294,297,1,0,
0,0,295,293,1,0,0,0,295,296,1,0,0,0,296,67,1,0,0,0,297,295,1,0,0,0,298,299,
5,15,0,0,299,304,3,72,36,0,300,301,5,17,0,0,301,304,3,72,36,0,302,304,3,
72,36,0,303,298,1,0,0,0,303,300,1,0,0,0,303,302,1,0,0,0,304,69,1,0,0,0,305,
306,3,86,43,0,306,308,5,13,0,0,307,309,3,76,38,0,308,307,1,0,0,0,308,309,
1,0,0,0,309,310,1,0,0,0,310,311,5,19,0,0,311,71,1,0,0,0,312,322,3,74,37,
0,313,318,5,7,0,0,314,319,3,88,44,0,315,319,3,92,46,0,316,319,3,90,45,0,
317,319,3,70,35,0,318,314,1,0,0,0,318,315,1,0,0,0,318,316,1,0,0,0,318,317,
1,0,0,0,319,321,1,0,0,0,320,313,1,0,0,0,321,324,1,0,0,0,322,320,1,0,0,0,
322,323,1,0,0,0,323,73,1,0,0,0,324,322,1,0,0,0,325,340,3,70,35,0,326,327,
5,13,0,0,327,328,3,76,38,0,328,329,5,19,0,0,329,340,1,0,0,0,330,332,5,11,
0,0,331,333,3,76,38,0,332,331,1,0,0,0,332,333,1,0,0,0,333,334,1,0,0,0,334,
340,5,18,0,0,335,340,3,78,39,0,336,340,5,54,0,0,337,340,5,49,0,0,338,340,
3,86,43,0,339,325,1,0,0,0,339,326,1,0,0,0,339,330,1,0,0,0,339,335,1,0,0,
0,339,336,1,0,0,0,339,337,1,0,0,0,339,338,1,0,0,0,340,75,1,0,0,0,341,346,
3,50,25,0,342,343,5,5,0,0,343,345,3,50,25,0,344,342,1,0,0,0,345,348,1,0,
0,0,346,344,1,0,0,0,346,347,1,0,0,0,347,77,1,0,0,0,348,346,1,0,0,0,349,351,
5,23,0,0,350,352,3,52,26,0,351,350,1,0,0,0,351,352,1,0,0,0,352,354,1,0,0,
0,353,355,3,80,40,0,354,353,1,0,0,0,354,355,1,0,0,0,355,358,1,0,0,0,356,
357,5,28,0,0,357,359,3,52,26,0,358,356,1,0,0,0,358,359,1,0,0,0,359,360,1,
0,0,0,360,361,5,30,0,0,361,79,1,0,0,0,362,366,3,82,41,0,363,365,3,82,41,
0,364,363,1,0,0,0,365,368,1,0,0,0,366,364,1,0,0,0,366,367,1,0,0,0,367,81,
1,0,0,0,368,366,1,0,0,0,369,370,5,45,0,0,370,371,3,52,26,0,371,372,5,43,
0,0,372,373,3,52,26,0,373,83,1,0,0,0,374,375,7,3,0,0,375,85,1,0,0,0,376,
379,3,88,44,0,377,379,3,92,46,0,378,376,1,0,0,0,378,377,1,0,0,0,379,87,1,
0,0,0,380,383,3,94,47,0,381,383,5,51,0,0,382,380,1,0,0,0,382,381,1,0,0,0,
383,89,1,0,0,0,384,385,5,52,0,0,385,91,1,0,0,0,386,387,5,53,0,0,387,93,1,
0,0,0,388,389,7,4,0,0,389,95,1,0,0,0,40,101,105,111,114,119,123,133,143,
147,154,162,178,183,187,195,205,217,227,232,243,249,251,265,271,279,287,
295,303,308,318,322,332,339,346,351,354,358,366,378,382];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class mdxParser extends antlr4.Parser {

    static grammarFileName = "mdx.g4";
    static literalNames = [ null, "'''", "'*'", "':'", "';'", "','", "'||'", 
                            "'.'", "'='", "'>='", "'>'", "'{'", "'<='", 
                            "'('", "'<'", "'-'", "'<>'", "'+'", "'}'", "')'", 
                            "'/'", "'AND'", "'AS'", "'CASE'", "'CELL'", 
                            "'CELL_ORDINAL'", "'CREATE'", "'DIMENSION'", 
                            "'ELSE'", "'EMPTY'", "'END'", "'FORMATTED_VALUE'", 
                            "'FROM'", "'GLOBAL'", "'MEMBER'", "'NON'", "'NOT'", 
                            "'ON'", "'OR'", "'PROPERTIES'", "'SELECT'", 
                            "'SESSION'", "'SET'", "'THEN'", "'VALUE'", "'WHEN'", 
                            "'WHERE'", "'XOR'", "'WITH'" ];
    static symbolicNames = [ null, "QUOTE", "ASTERISK", "COLON", "SEMICOLON", 
                             "COMMA", "CONCAT", "DOT", "EQ", "GE", "GT", 
                             "LBRACE", "LE", "LPAREN", "LT", "MINUS", "NE", 
                             "PLUS", "RBRACE", "RPAREN", "SOLIDUS", "AND", 
                             "AS", "CASE", "CELL", "CELL_ORDINAL", "CREATE", 
                             "DIMENSION", "ELSE", "EMPTY", "END", "FORMATTED_VALUE", 
                             "FROM", "GLOBAL", "MEMBER", "NON", "NOT", "ON", 
                             "OR", "PROPERTIES", "SELECT", "SESSION", "SET", 
                             "THEN", "VALUE", "WHEN", "WHERE", "XOR", "WITH", 
                             "NUMBER", "F", "ID", "AMP_QUOTED_ID", "QUOTED_ID", 
                             "STRING", "WS" ];
    static ruleNames = [ "mdx_statement", "select_statement", "formula_specification", 
                         "single_formula_specification", "set_specification", 
                         "member_specification", "axis_specification_list", 
                         "member_property_def_list", "member_name", "member_property_definition", 
                         "set_name", "compound_id", "axis_specification", 
                         "axis_name", "dim_props", "property_list", "property_", 
                         "cube_specification", "cube_name", "slicer_specification", 
                         "cell_props", "cell_property_list", "cell_property", 
                         "mandatory_cell_property", "provider_specific_cell_property", 
                         "expression", "value_expression", "value_xor_expression", 
                         "value_or_expression", "term5", "term4", "term3", 
                         "term2", "term", "factor", "function_", "value_expression_primary", 
                         "value_expression_primary0", "exp_list", "case_expression", 
                         "when_list", "when_clause", "comp_op", "identifier", 
                         "unquoted_identifier", "amp_quoted_identifier", 
                         "quoted_identifier", "keyword" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = mdxParser.ruleNames;
        this.literalNames = mdxParser.literalNames;
        this.symbolicNames = mdxParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	mdx_statement() {
	    let localctx = new Mdx_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, mdxParser.RULE_mdx_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.select_statement();
	        this.state = 97;
	        this.match(mdxParser.EOF);
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



	select_statement() {
	    let localctx = new Select_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, mdxParser.RULE_select_statement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===mdxParser.WITH) {
	            this.state = 99;
	            this.match(mdxParser.WITH);
	            this.state = 100;
	            this.formula_specification();
	        }

	        this.state = 103;
	        this.match(mdxParser.SELECT);
	        this.state = 105;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << mdxParser.LBRACE) | (1 << mdxParser.LPAREN) | (1 << mdxParser.MINUS) | (1 << mdxParser.PLUS) | (1 << mdxParser.CASE) | (1 << mdxParser.DIMENSION))) !== 0) || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (mdxParser.NON - 35)) | (1 << (mdxParser.NOT - 35)) | (1 << (mdxParser.PROPERTIES - 35)) | (1 << (mdxParser.NUMBER - 35)) | (1 << (mdxParser.ID - 35)) | (1 << (mdxParser.QUOTED_ID - 35)) | (1 << (mdxParser.STRING - 35)))) !== 0)) {
	            this.state = 104;
	            this.axis_specification_list();
	        }

	        this.state = 107;
	        this.match(mdxParser.FROM);
	        this.state = 108;
	        this.cube_specification();
	        this.state = 111;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===mdxParser.WHERE) {
	            this.state = 109;
	            this.match(mdxParser.WHERE);
	            this.state = 110;
	            this.slicer_specification();
	        }

	        this.state = 114;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===mdxParser.CELL || _la===mdxParser.PROPERTIES) {
	            this.state = 113;
	            this.cell_props();
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



	formula_specification() {
	    let localctx = new Formula_specificationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, mdxParser.RULE_formula_specification);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 116;
	            this.single_formula_specification();
	            this.state = 119; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===mdxParser.MEMBER || _la===mdxParser.SET);
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



	single_formula_specification() {
	    let localctx = new Single_formula_specificationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, mdxParser.RULE_single_formula_specification);
	    try {
	        this.state = 123;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mdxParser.MEMBER:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 121;
	            this.member_specification();
	            break;
	        case mdxParser.SET:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 122;
	            this.set_specification();
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



	set_specification() {
	    let localctx = new Set_specificationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, mdxParser.RULE_set_specification);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        this.match(mdxParser.SET);
	        this.state = 126;
	        this.set_name();
	        this.state = 127;
	        this.match(mdxParser.AS);
	        this.state = 133;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mdxParser.QUOTE:
	            this.state = 128;
	            this.match(mdxParser.QUOTE);
	            this.state = 129;
	            this.expression();
	            this.state = 130;
	            this.match(mdxParser.QUOTE);
	            break;
	        case mdxParser.LBRACE:
	        case mdxParser.LPAREN:
	        case mdxParser.MINUS:
	        case mdxParser.PLUS:
	        case mdxParser.CASE:
	        case mdxParser.DIMENSION:
	        case mdxParser.NOT:
	        case mdxParser.PROPERTIES:
	        case mdxParser.NUMBER:
	        case mdxParser.ID:
	        case mdxParser.QUOTED_ID:
	        case mdxParser.STRING:
	            this.state = 132;
	            this.expression();
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



	member_specification() {
	    let localctx = new Member_specificationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, mdxParser.RULE_member_specification);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        this.match(mdxParser.MEMBER);
	        this.state = 136;
	        this.member_name();
	        this.state = 137;
	        this.match(mdxParser.AS);

	        this.state = 143;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mdxParser.QUOTE:
	            this.state = 138;
	            this.match(mdxParser.QUOTE);
	            this.state = 139;
	            this.value_expression();
	            this.state = 140;
	            this.match(mdxParser.QUOTE);
	            break;
	        case mdxParser.LBRACE:
	        case mdxParser.LPAREN:
	        case mdxParser.MINUS:
	        case mdxParser.PLUS:
	        case mdxParser.CASE:
	        case mdxParser.DIMENSION:
	        case mdxParser.NOT:
	        case mdxParser.PROPERTIES:
	        case mdxParser.NUMBER:
	        case mdxParser.ID:
	        case mdxParser.QUOTED_ID:
	        case mdxParser.STRING:
	            this.state = 142;
	            this.value_expression();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 145;
	        this.match(mdxParser.COMMA);
	        this.state = 147;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 27)) & ~0x1f) == 0 && ((1 << (_la - 27)) & ((1 << (mdxParser.DIMENSION - 27)) | (1 << (mdxParser.PROPERTIES - 27)) | (1 << (mdxParser.ID - 27)) | (1 << (mdxParser.QUOTED_ID - 27)))) !== 0)) {
	            this.state = 146;
	            this.member_property_def_list();
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



	axis_specification_list() {
	    let localctx = new Axis_specification_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, mdxParser.RULE_axis_specification_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        this.axis_specification();
	        this.state = 154;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mdxParser.COMMA) {
	            this.state = 150;
	            this.match(mdxParser.COMMA);
	            this.state = 151;
	            this.axis_specification();
	            this.state = 156;
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



	member_property_def_list() {
	    let localctx = new Member_property_def_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, mdxParser.RULE_member_property_def_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this.member_property_definition();
	        this.state = 162;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mdxParser.COMMA) {
	            this.state = 158;
	            this.match(mdxParser.COMMA);
	            this.state = 159;
	            this.member_property_definition();
	            this.state = 164;
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



	member_name() {
	    let localctx = new Member_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, mdxParser.RULE_member_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 165;
	        this.compound_id();
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



	member_property_definition() {
	    let localctx = new Member_property_definitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, mdxParser.RULE_member_property_definition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this.identifier();
	        this.state = 168;
	        this.match(mdxParser.EQ);
	        this.state = 169;
	        this.value_expression();
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



	set_name() {
	    let localctx = new Set_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, mdxParser.RULE_set_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 171;
	        this.compound_id();
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



	compound_id() {
	    let localctx = new Compound_idContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, mdxParser.RULE_compound_id);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 173;
	        this.identifier();
	        this.state = 178;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mdxParser.DOT) {
	            this.state = 174;
	            this.match(mdxParser.DOT);
	            this.state = 175;
	            this.identifier();
	            this.state = 180;
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



	axis_specification() {
	    let localctx = new Axis_specificationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, mdxParser.RULE_axis_specification);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 183;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===mdxParser.NON) {
	            this.state = 181;
	            this.match(mdxParser.NON);
	            this.state = 182;
	            this.match(mdxParser.EMPTY);
	        }

	        this.state = 185;
	        this.expression();
	        this.state = 187;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===mdxParser.DIMENSION || _la===mdxParser.PROPERTIES) {
	            this.state = 186;
	            this.dim_props();
	        }

	        this.state = 189;
	        this.match(mdxParser.ON);
	        this.state = 190;
	        this.axis_name();
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



	axis_name() {
	    let localctx = new Axis_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, mdxParser.RULE_axis_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 192;
	        this.identifier();
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



	dim_props() {
	    let localctx = new Dim_propsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, mdxParser.RULE_dim_props);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 195;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===mdxParser.DIMENSION) {
	            this.state = 194;
	            this.match(mdxParser.DIMENSION);
	        }

	        this.state = 197;
	        this.match(mdxParser.PROPERTIES);
	        this.state = 198;
	        this.property_list();
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



	property_list() {
	    let localctx = new Property_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, mdxParser.RULE_property_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 200;
	        this.property_();
	        this.state = 205;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mdxParser.COMMA) {
	            this.state = 201;
	            this.match(mdxParser.COMMA);
	            this.state = 202;
	            this.property_();
	            this.state = 207;
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



	property_() {
	    let localctx = new Property_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, mdxParser.RULE_property_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 208;
	        this.compound_id();
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



	cube_specification() {
	    let localctx = new Cube_specificationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, mdxParser.RULE_cube_specification);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 210;
	        this.cube_name();
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



	cube_name() {
	    let localctx = new Cube_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, mdxParser.RULE_cube_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 212;
	        this.compound_id();
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



	slicer_specification() {
	    let localctx = new Slicer_specificationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, mdxParser.RULE_slicer_specification);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 214;
	        this.expression();
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



	cell_props() {
	    let localctx = new Cell_propsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, mdxParser.RULE_cell_props);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===mdxParser.CELL) {
	            this.state = 216;
	            this.match(mdxParser.CELL);
	        }

	        this.state = 219;
	        this.match(mdxParser.PROPERTIES);
	        this.state = 220;
	        this.cell_property_list();
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



	cell_property_list() {
	    let localctx = new Cell_property_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, mdxParser.RULE_cell_property_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 222;
	        this.cell_property();
	        this.state = 227;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mdxParser.COMMA) {
	            this.state = 223;
	            this.match(mdxParser.COMMA);
	            this.state = 224;
	            this.cell_property();
	            this.state = 229;
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



	cell_property() {
	    let localctx = new Cell_propertyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, mdxParser.RULE_cell_property);
	    try {
	        this.state = 232;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mdxParser.CELL_ORDINAL:
	        case mdxParser.FORMATTED_VALUE:
	        case mdxParser.VALUE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 230;
	            this.mandatory_cell_property();
	            break;
	        case mdxParser.DIMENSION:
	        case mdxParser.PROPERTIES:
	        case mdxParser.ID:
	        case mdxParser.QUOTED_ID:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 231;
	            this.provider_specific_cell_property();
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



	mandatory_cell_property() {
	    let localctx = new Mandatory_cell_propertyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, mdxParser.RULE_mandatory_cell_property);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 234;
	        _la = this._input.LA(1);
	        if(!(((((_la - 25)) & ~0x1f) == 0 && ((1 << (_la - 25)) & ((1 << (mdxParser.CELL_ORDINAL - 25)) | (1 << (mdxParser.FORMATTED_VALUE - 25)) | (1 << (mdxParser.VALUE - 25)))) !== 0))) {
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



	provider_specific_cell_property() {
	    let localctx = new Provider_specific_cell_propertyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, mdxParser.RULE_provider_specific_cell_property);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 236;
	        this.identifier();
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



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, mdxParser.RULE_expression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        this.value_expression();
	        this.state = 243;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mdxParser.COLON) {
	            this.state = 239;
	            this.match(mdxParser.COLON);
	            this.state = 240;
	            this.value_expression();
	            this.state = 245;
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



	value_expression() {
	    let localctx = new Value_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, mdxParser.RULE_value_expression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 246;
	        this.term5();
	        this.state = 251;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mdxParser.OR || _la===mdxParser.XOR) {
	            this.state = 249;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case mdxParser.XOR:
	                this.state = 247;
	                this.value_xor_expression();
	                break;
	            case mdxParser.OR:
	                this.state = 248;
	                this.value_or_expression();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 253;
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



	value_xor_expression() {
	    let localctx = new Value_xor_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, mdxParser.RULE_value_xor_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 254;
	        this.match(mdxParser.XOR);
	        this.state = 255;
	        this.term5();
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



	value_or_expression() {
	    let localctx = new Value_or_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, mdxParser.RULE_value_or_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 257;
	        this.match(mdxParser.OR);
	        this.state = 258;
	        this.term5();
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



	term5() {
	    let localctx = new Term5Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, mdxParser.RULE_term5);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
	        this.term4();
	        this.state = 265;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mdxParser.AND) {
	            this.state = 261;
	            this.match(mdxParser.AND);
	            this.state = 262;
	            this.term4();
	            this.state = 267;
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



	term4() {
	    let localctx = new Term4Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, mdxParser.RULE_term4);
	    try {
	        this.state = 271;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mdxParser.NOT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 268;
	            this.match(mdxParser.NOT);
	            this.state = 269;
	            this.term4();
	            break;
	        case mdxParser.LBRACE:
	        case mdxParser.LPAREN:
	        case mdxParser.MINUS:
	        case mdxParser.PLUS:
	        case mdxParser.CASE:
	        case mdxParser.DIMENSION:
	        case mdxParser.PROPERTIES:
	        case mdxParser.NUMBER:
	        case mdxParser.ID:
	        case mdxParser.QUOTED_ID:
	        case mdxParser.STRING:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 270;
	            this.term3();
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



	term3() {
	    let localctx = new Term3Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, mdxParser.RULE_term3);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 273;
	        this.term2();
	        this.state = 279;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << mdxParser.EQ) | (1 << mdxParser.GE) | (1 << mdxParser.GT) | (1 << mdxParser.LE) | (1 << mdxParser.LT) | (1 << mdxParser.NE))) !== 0)) {
	            this.state = 274;
	            this.comp_op();
	            this.state = 275;
	            this.term2();
	            this.state = 281;
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



	term2() {
	    let localctx = new Term2Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, mdxParser.RULE_term2);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 282;
	        this.term();
	        this.state = 287;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << mdxParser.CONCAT) | (1 << mdxParser.MINUS) | (1 << mdxParser.PLUS))) !== 0)) {
	            this.state = 283;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << mdxParser.CONCAT) | (1 << mdxParser.MINUS) | (1 << mdxParser.PLUS))) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 284;
	            this.term();
	            this.state = 289;
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



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, mdxParser.RULE_term);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 290;
	        this.factor();
	        this.state = 295;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mdxParser.ASTERISK || _la===mdxParser.SOLIDUS) {
	            this.state = 291;
	            _la = this._input.LA(1);
	            if(!(_la===mdxParser.ASTERISK || _la===mdxParser.SOLIDUS)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 292;
	            this.factor();
	            this.state = 297;
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



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, mdxParser.RULE_factor);
	    try {
	        this.state = 303;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mdxParser.MINUS:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 298;
	            this.match(mdxParser.MINUS);
	            this.state = 299;
	            this.value_expression_primary();
	            break;
	        case mdxParser.PLUS:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 300;
	            this.match(mdxParser.PLUS);
	            this.state = 301;
	            this.value_expression_primary();
	            break;
	        case mdxParser.LBRACE:
	        case mdxParser.LPAREN:
	        case mdxParser.CASE:
	        case mdxParser.DIMENSION:
	        case mdxParser.PROPERTIES:
	        case mdxParser.NUMBER:
	        case mdxParser.ID:
	        case mdxParser.QUOTED_ID:
	        case mdxParser.STRING:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 302;
	            this.value_expression_primary();
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



	function_() {
	    let localctx = new Function_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, mdxParser.RULE_function_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 305;
	        this.identifier();
	        this.state = 306;
	        this.match(mdxParser.LPAREN);
	        this.state = 308;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << mdxParser.LBRACE) | (1 << mdxParser.LPAREN) | (1 << mdxParser.MINUS) | (1 << mdxParser.PLUS) | (1 << mdxParser.CASE) | (1 << mdxParser.DIMENSION))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (mdxParser.NOT - 36)) | (1 << (mdxParser.PROPERTIES - 36)) | (1 << (mdxParser.NUMBER - 36)) | (1 << (mdxParser.ID - 36)) | (1 << (mdxParser.QUOTED_ID - 36)) | (1 << (mdxParser.STRING - 36)))) !== 0)) {
	            this.state = 307;
	            this.exp_list();
	        }

	        this.state = 310;
	        this.match(mdxParser.RPAREN);
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



	value_expression_primary() {
	    let localctx = new Value_expression_primaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, mdxParser.RULE_value_expression_primary);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 312;
	        this.value_expression_primary0();
	        this.state = 322;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mdxParser.DOT) {
	            this.state = 313;
	            this.match(mdxParser.DOT);
	            this.state = 318;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 314;
	                this.unquoted_identifier();
	                break;

	            case 2:
	                this.state = 315;
	                this.quoted_identifier();
	                break;

	            case 3:
	                this.state = 316;
	                this.amp_quoted_identifier();
	                break;

	            case 4:
	                this.state = 317;
	                this.function_();
	                break;

	            }
	            this.state = 324;
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



	value_expression_primary0() {
	    let localctx = new Value_expression_primary0Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, mdxParser.RULE_value_expression_primary0);
	    var _la = 0; // Token type
	    try {
	        this.state = 339;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 325;
	            this.function_();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 326;
	            this.match(mdxParser.LPAREN);
	            this.state = 327;
	            this.exp_list();
	            this.state = 328;
	            this.match(mdxParser.RPAREN);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 330;
	            this.match(mdxParser.LBRACE);
	            this.state = 332;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << mdxParser.LBRACE) | (1 << mdxParser.LPAREN) | (1 << mdxParser.MINUS) | (1 << mdxParser.PLUS) | (1 << mdxParser.CASE) | (1 << mdxParser.DIMENSION))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (mdxParser.NOT - 36)) | (1 << (mdxParser.PROPERTIES - 36)) | (1 << (mdxParser.NUMBER - 36)) | (1 << (mdxParser.ID - 36)) | (1 << (mdxParser.QUOTED_ID - 36)) | (1 << (mdxParser.STRING - 36)))) !== 0)) {
	                this.state = 331;
	                this.exp_list();
	            }

	            this.state = 334;
	            this.match(mdxParser.RBRACE);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 335;
	            this.case_expression();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 336;
	            this.match(mdxParser.STRING);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 337;
	            this.match(mdxParser.NUMBER);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 338;
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



	exp_list() {
	    let localctx = new Exp_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, mdxParser.RULE_exp_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 341;
	        this.expression();
	        this.state = 346;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mdxParser.COMMA) {
	            this.state = 342;
	            this.match(mdxParser.COMMA);
	            this.state = 343;
	            this.expression();
	            this.state = 348;
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



	case_expression() {
	    let localctx = new Case_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, mdxParser.RULE_case_expression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 349;
	        this.match(mdxParser.CASE);
	        this.state = 351;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << mdxParser.LBRACE) | (1 << mdxParser.LPAREN) | (1 << mdxParser.MINUS) | (1 << mdxParser.PLUS) | (1 << mdxParser.CASE) | (1 << mdxParser.DIMENSION))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (mdxParser.NOT - 36)) | (1 << (mdxParser.PROPERTIES - 36)) | (1 << (mdxParser.NUMBER - 36)) | (1 << (mdxParser.ID - 36)) | (1 << (mdxParser.QUOTED_ID - 36)) | (1 << (mdxParser.STRING - 36)))) !== 0)) {
	            this.state = 350;
	            this.value_expression();
	        }

	        this.state = 354;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===mdxParser.WHEN) {
	            this.state = 353;
	            this.when_list();
	        }

	        this.state = 358;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===mdxParser.ELSE) {
	            this.state = 356;
	            this.match(mdxParser.ELSE);
	            this.state = 357;
	            this.value_expression();
	        }

	        this.state = 360;
	        this.match(mdxParser.END);
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



	when_list() {
	    let localctx = new When_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, mdxParser.RULE_when_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 362;
	        this.when_clause();
	        this.state = 366;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mdxParser.WHEN) {
	            this.state = 363;
	            this.when_clause();
	            this.state = 368;
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



	when_clause() {
	    let localctx = new When_clauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, mdxParser.RULE_when_clause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 369;
	        this.match(mdxParser.WHEN);
	        this.state = 370;
	        this.value_expression();
	        this.state = 371;
	        this.match(mdxParser.THEN);
	        this.state = 372;
	        this.value_expression();
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



	comp_op() {
	    let localctx = new Comp_opContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, mdxParser.RULE_comp_op);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 374;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << mdxParser.EQ) | (1 << mdxParser.GE) | (1 << mdxParser.GT) | (1 << mdxParser.LE) | (1 << mdxParser.LT) | (1 << mdxParser.NE))) !== 0))) {
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



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, mdxParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 378;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mdxParser.DIMENSION:
	        case mdxParser.PROPERTIES:
	        case mdxParser.ID:
	            this.state = 376;
	            this.unquoted_identifier();
	            break;
	        case mdxParser.QUOTED_ID:
	            this.state = 377;
	            this.quoted_identifier();
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



	unquoted_identifier() {
	    let localctx = new Unquoted_identifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, mdxParser.RULE_unquoted_identifier);
	    try {
	        this.state = 382;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mdxParser.DIMENSION:
	        case mdxParser.PROPERTIES:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 380;
	            this.keyword();
	            break;
	        case mdxParser.ID:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 381;
	            this.match(mdxParser.ID);
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



	amp_quoted_identifier() {
	    let localctx = new Amp_quoted_identifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, mdxParser.RULE_amp_quoted_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 384;
	        this.match(mdxParser.AMP_QUOTED_ID);
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



	quoted_identifier() {
	    let localctx = new Quoted_identifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, mdxParser.RULE_quoted_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 386;
	        this.match(mdxParser.QUOTED_ID);
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



	keyword() {
	    let localctx = new KeywordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, mdxParser.RULE_keyword);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 388;
	        _la = this._input.LA(1);
	        if(!(_la===mdxParser.DIMENSION || _la===mdxParser.PROPERTIES)) {
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

mdxParser.EOF = antlr4.Token.EOF;
mdxParser.QUOTE = 1;
mdxParser.ASTERISK = 2;
mdxParser.COLON = 3;
mdxParser.SEMICOLON = 4;
mdxParser.COMMA = 5;
mdxParser.CONCAT = 6;
mdxParser.DOT = 7;
mdxParser.EQ = 8;
mdxParser.GE = 9;
mdxParser.GT = 10;
mdxParser.LBRACE = 11;
mdxParser.LE = 12;
mdxParser.LPAREN = 13;
mdxParser.LT = 14;
mdxParser.MINUS = 15;
mdxParser.NE = 16;
mdxParser.PLUS = 17;
mdxParser.RBRACE = 18;
mdxParser.RPAREN = 19;
mdxParser.SOLIDUS = 20;
mdxParser.AND = 21;
mdxParser.AS = 22;
mdxParser.CASE = 23;
mdxParser.CELL = 24;
mdxParser.CELL_ORDINAL = 25;
mdxParser.CREATE = 26;
mdxParser.DIMENSION = 27;
mdxParser.ELSE = 28;
mdxParser.EMPTY = 29;
mdxParser.END = 30;
mdxParser.FORMATTED_VALUE = 31;
mdxParser.FROM = 32;
mdxParser.GLOBAL = 33;
mdxParser.MEMBER = 34;
mdxParser.NON = 35;
mdxParser.NOT = 36;
mdxParser.ON = 37;
mdxParser.OR = 38;
mdxParser.PROPERTIES = 39;
mdxParser.SELECT = 40;
mdxParser.SESSION = 41;
mdxParser.SET = 42;
mdxParser.THEN = 43;
mdxParser.VALUE = 44;
mdxParser.WHEN = 45;
mdxParser.WHERE = 46;
mdxParser.XOR = 47;
mdxParser.WITH = 48;
mdxParser.NUMBER = 49;
mdxParser.F = 50;
mdxParser.ID = 51;
mdxParser.AMP_QUOTED_ID = 52;
mdxParser.QUOTED_ID = 53;
mdxParser.STRING = 54;
mdxParser.WS = 55;

mdxParser.RULE_mdx_statement = 0;
mdxParser.RULE_select_statement = 1;
mdxParser.RULE_formula_specification = 2;
mdxParser.RULE_single_formula_specification = 3;
mdxParser.RULE_set_specification = 4;
mdxParser.RULE_member_specification = 5;
mdxParser.RULE_axis_specification_list = 6;
mdxParser.RULE_member_property_def_list = 7;
mdxParser.RULE_member_name = 8;
mdxParser.RULE_member_property_definition = 9;
mdxParser.RULE_set_name = 10;
mdxParser.RULE_compound_id = 11;
mdxParser.RULE_axis_specification = 12;
mdxParser.RULE_axis_name = 13;
mdxParser.RULE_dim_props = 14;
mdxParser.RULE_property_list = 15;
mdxParser.RULE_property_ = 16;
mdxParser.RULE_cube_specification = 17;
mdxParser.RULE_cube_name = 18;
mdxParser.RULE_slicer_specification = 19;
mdxParser.RULE_cell_props = 20;
mdxParser.RULE_cell_property_list = 21;
mdxParser.RULE_cell_property = 22;
mdxParser.RULE_mandatory_cell_property = 23;
mdxParser.RULE_provider_specific_cell_property = 24;
mdxParser.RULE_expression = 25;
mdxParser.RULE_value_expression = 26;
mdxParser.RULE_value_xor_expression = 27;
mdxParser.RULE_value_or_expression = 28;
mdxParser.RULE_term5 = 29;
mdxParser.RULE_term4 = 30;
mdxParser.RULE_term3 = 31;
mdxParser.RULE_term2 = 32;
mdxParser.RULE_term = 33;
mdxParser.RULE_factor = 34;
mdxParser.RULE_function_ = 35;
mdxParser.RULE_value_expression_primary = 36;
mdxParser.RULE_value_expression_primary0 = 37;
mdxParser.RULE_exp_list = 38;
mdxParser.RULE_case_expression = 39;
mdxParser.RULE_when_list = 40;
mdxParser.RULE_when_clause = 41;
mdxParser.RULE_comp_op = 42;
mdxParser.RULE_identifier = 43;
mdxParser.RULE_unquoted_identifier = 44;
mdxParser.RULE_amp_quoted_identifier = 45;
mdxParser.RULE_quoted_identifier = 46;
mdxParser.RULE_keyword = 47;

class Mdx_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_mdx_statement;
    }

	EOF() {
	    return this.getToken(mdxParser.EOF, 0);
	};

	select_statement() {
	    return this.getTypedRuleContext(Select_statementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterMdx_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitMdx_statement(this);
		}
	}


}



class Select_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_select_statement;
    }

	SELECT() {
	    return this.getToken(mdxParser.SELECT, 0);
	};

	FROM() {
	    return this.getToken(mdxParser.FROM, 0);
	};

	cube_specification() {
	    return this.getTypedRuleContext(Cube_specificationContext,0);
	};

	WITH() {
	    return this.getToken(mdxParser.WITH, 0);
	};

	formula_specification() {
	    return this.getTypedRuleContext(Formula_specificationContext,0);
	};

	axis_specification_list() {
	    return this.getTypedRuleContext(Axis_specification_listContext,0);
	};

	WHERE() {
	    return this.getToken(mdxParser.WHERE, 0);
	};

	slicer_specification() {
	    return this.getTypedRuleContext(Slicer_specificationContext,0);
	};

	cell_props() {
	    return this.getTypedRuleContext(Cell_propsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterSelect_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitSelect_statement(this);
		}
	}


}



class Formula_specificationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_formula_specification;
    }

	single_formula_specification = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Single_formula_specificationContext);
	    } else {
	        return this.getTypedRuleContext(Single_formula_specificationContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterFormula_specification(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitFormula_specification(this);
		}
	}


}



class Single_formula_specificationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_single_formula_specification;
    }

	member_specification() {
	    return this.getTypedRuleContext(Member_specificationContext,0);
	};

	set_specification() {
	    return this.getTypedRuleContext(Set_specificationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterSingle_formula_specification(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitSingle_formula_specification(this);
		}
	}


}



class Set_specificationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_set_specification;
    }

	SET() {
	    return this.getToken(mdxParser.SET, 0);
	};

	set_name() {
	    return this.getTypedRuleContext(Set_nameContext,0);
	};

	AS() {
	    return this.getToken(mdxParser.AS, 0);
	};

	QUOTE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mdxParser.QUOTE);
	    } else {
	        return this.getToken(mdxParser.QUOTE, i);
	    }
	};


	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterSet_specification(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitSet_specification(this);
		}
	}


}



class Member_specificationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_member_specification;
    }

	MEMBER() {
	    return this.getToken(mdxParser.MEMBER, 0);
	};

	member_name() {
	    return this.getTypedRuleContext(Member_nameContext,0);
	};

	AS() {
	    return this.getToken(mdxParser.AS, 0);
	};

	COMMA() {
	    return this.getToken(mdxParser.COMMA, 0);
	};

	QUOTE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mdxParser.QUOTE);
	    } else {
	        return this.getToken(mdxParser.QUOTE, i);
	    }
	};


	value_expression() {
	    return this.getTypedRuleContext(Value_expressionContext,0);
	};

	member_property_def_list() {
	    return this.getTypedRuleContext(Member_property_def_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterMember_specification(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitMember_specification(this);
		}
	}


}



class Axis_specification_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_axis_specification_list;
    }

	axis_specification = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Axis_specificationContext);
	    } else {
	        return this.getTypedRuleContext(Axis_specificationContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mdxParser.COMMA);
	    } else {
	        return this.getToken(mdxParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterAxis_specification_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitAxis_specification_list(this);
		}
	}


}



class Member_property_def_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_member_property_def_list;
    }

	member_property_definition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Member_property_definitionContext);
	    } else {
	        return this.getTypedRuleContext(Member_property_definitionContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mdxParser.COMMA);
	    } else {
	        return this.getToken(mdxParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterMember_property_def_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitMember_property_def_list(this);
		}
	}


}



class Member_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_member_name;
    }

	compound_id() {
	    return this.getTypedRuleContext(Compound_idContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterMember_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitMember_name(this);
		}
	}


}



class Member_property_definitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_member_property_definition;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	EQ() {
	    return this.getToken(mdxParser.EQ, 0);
	};

	value_expression() {
	    return this.getTypedRuleContext(Value_expressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterMember_property_definition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitMember_property_definition(this);
		}
	}


}



class Set_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_set_name;
    }

	compound_id() {
	    return this.getTypedRuleContext(Compound_idContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterSet_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitSet_name(this);
		}
	}


}



class Compound_idContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_compound_id;
    }

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mdxParser.DOT);
	    } else {
	        return this.getToken(mdxParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterCompound_id(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitCompound_id(this);
		}
	}


}



class Axis_specificationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_axis_specification;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	ON() {
	    return this.getToken(mdxParser.ON, 0);
	};

	axis_name() {
	    return this.getTypedRuleContext(Axis_nameContext,0);
	};

	NON() {
	    return this.getToken(mdxParser.NON, 0);
	};

	EMPTY() {
	    return this.getToken(mdxParser.EMPTY, 0);
	};

	dim_props() {
	    return this.getTypedRuleContext(Dim_propsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterAxis_specification(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitAxis_specification(this);
		}
	}


}



class Axis_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_axis_name;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterAxis_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitAxis_name(this);
		}
	}


}



class Dim_propsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_dim_props;
    }

	PROPERTIES() {
	    return this.getToken(mdxParser.PROPERTIES, 0);
	};

	property_list() {
	    return this.getTypedRuleContext(Property_listContext,0);
	};

	DIMENSION() {
	    return this.getToken(mdxParser.DIMENSION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterDim_props(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitDim_props(this);
		}
	}


}



class Property_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_property_list;
    }

	property_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Property_Context);
	    } else {
	        return this.getTypedRuleContext(Property_Context,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mdxParser.COMMA);
	    } else {
	        return this.getToken(mdxParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterProperty_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitProperty_list(this);
		}
	}


}



class Property_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_property_;
    }

	compound_id() {
	    return this.getTypedRuleContext(Compound_idContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterProperty_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitProperty_(this);
		}
	}


}



class Cube_specificationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_cube_specification;
    }

	cube_name() {
	    return this.getTypedRuleContext(Cube_nameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterCube_specification(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitCube_specification(this);
		}
	}


}



class Cube_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_cube_name;
    }

	compound_id() {
	    return this.getTypedRuleContext(Compound_idContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterCube_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitCube_name(this);
		}
	}


}



class Slicer_specificationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_slicer_specification;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterSlicer_specification(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitSlicer_specification(this);
		}
	}


}



class Cell_propsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_cell_props;
    }

	PROPERTIES() {
	    return this.getToken(mdxParser.PROPERTIES, 0);
	};

	cell_property_list() {
	    return this.getTypedRuleContext(Cell_property_listContext,0);
	};

	CELL() {
	    return this.getToken(mdxParser.CELL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterCell_props(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitCell_props(this);
		}
	}


}



class Cell_property_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_cell_property_list;
    }

	cell_property = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Cell_propertyContext);
	    } else {
	        return this.getTypedRuleContext(Cell_propertyContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mdxParser.COMMA);
	    } else {
	        return this.getToken(mdxParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterCell_property_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitCell_property_list(this);
		}
	}


}



class Cell_propertyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_cell_property;
    }

	mandatory_cell_property() {
	    return this.getTypedRuleContext(Mandatory_cell_propertyContext,0);
	};

	provider_specific_cell_property() {
	    return this.getTypedRuleContext(Provider_specific_cell_propertyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterCell_property(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitCell_property(this);
		}
	}


}



class Mandatory_cell_propertyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_mandatory_cell_property;
    }

	CELL_ORDINAL() {
	    return this.getToken(mdxParser.CELL_ORDINAL, 0);
	};

	VALUE() {
	    return this.getToken(mdxParser.VALUE, 0);
	};

	FORMATTED_VALUE() {
	    return this.getToken(mdxParser.FORMATTED_VALUE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterMandatory_cell_property(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitMandatory_cell_property(this);
		}
	}


}



class Provider_specific_cell_propertyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_provider_specific_cell_property;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterProvider_specific_cell_property(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitProvider_specific_cell_property(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_expression;
    }

	value_expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Value_expressionContext);
	    } else {
	        return this.getTypedRuleContext(Value_expressionContext,i);
	    }
	};

	COLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mdxParser.COLON);
	    } else {
	        return this.getToken(mdxParser.COLON, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitExpression(this);
		}
	}


}



class Value_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_value_expression;
    }

	term5() {
	    return this.getTypedRuleContext(Term5Context,0);
	};

	value_xor_expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Value_xor_expressionContext);
	    } else {
	        return this.getTypedRuleContext(Value_xor_expressionContext,i);
	    }
	};

	value_or_expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Value_or_expressionContext);
	    } else {
	        return this.getTypedRuleContext(Value_or_expressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterValue_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitValue_expression(this);
		}
	}


}



class Value_xor_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_value_xor_expression;
    }

	XOR() {
	    return this.getToken(mdxParser.XOR, 0);
	};

	term5() {
	    return this.getTypedRuleContext(Term5Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterValue_xor_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitValue_xor_expression(this);
		}
	}


}



class Value_or_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_value_or_expression;
    }

	OR() {
	    return this.getToken(mdxParser.OR, 0);
	};

	term5() {
	    return this.getTypedRuleContext(Term5Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterValue_or_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitValue_or_expression(this);
		}
	}


}



class Term5Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_term5;
    }

	term4 = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Term4Context);
	    } else {
	        return this.getTypedRuleContext(Term4Context,i);
	    }
	};

	AND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mdxParser.AND);
	    } else {
	        return this.getToken(mdxParser.AND, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterTerm5(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitTerm5(this);
		}
	}


}



class Term4Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_term4;
    }

	NOT() {
	    return this.getToken(mdxParser.NOT, 0);
	};

	term4() {
	    return this.getTypedRuleContext(Term4Context,0);
	};

	term3() {
	    return this.getTypedRuleContext(Term3Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterTerm4(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitTerm4(this);
		}
	}


}



class Term3Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_term3;
    }

	term2 = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Term2Context);
	    } else {
	        return this.getTypedRuleContext(Term2Context,i);
	    }
	};

	comp_op = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Comp_opContext);
	    } else {
	        return this.getTypedRuleContext(Comp_opContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterTerm3(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitTerm3(this);
		}
	}


}



class Term2Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_term2;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	CONCAT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mdxParser.CONCAT);
	    } else {
	        return this.getToken(mdxParser.CONCAT, i);
	    }
	};


	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mdxParser.PLUS);
	    } else {
	        return this.getToken(mdxParser.PLUS, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mdxParser.MINUS);
	    } else {
	        return this.getToken(mdxParser.MINUS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterTerm2(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitTerm2(this);
		}
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_term;
    }

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	SOLIDUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mdxParser.SOLIDUS);
	    } else {
	        return this.getToken(mdxParser.SOLIDUS, i);
	    }
	};


	ASTERISK = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mdxParser.ASTERISK);
	    } else {
	        return this.getToken(mdxParser.ASTERISK, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitTerm(this);
		}
	}


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_factor;
    }

	MINUS() {
	    return this.getToken(mdxParser.MINUS, 0);
	};

	value_expression_primary() {
	    return this.getTypedRuleContext(Value_expression_primaryContext,0);
	};

	PLUS() {
	    return this.getToken(mdxParser.PLUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitFactor(this);
		}
	}


}



class Function_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_function_;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	LPAREN() {
	    return this.getToken(mdxParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(mdxParser.RPAREN, 0);
	};

	exp_list() {
	    return this.getTypedRuleContext(Exp_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterFunction_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitFunction_(this);
		}
	}


}



class Value_expression_primaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_value_expression_primary;
    }

	value_expression_primary0() {
	    return this.getTypedRuleContext(Value_expression_primary0Context,0);
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mdxParser.DOT);
	    } else {
	        return this.getToken(mdxParser.DOT, i);
	    }
	};


	unquoted_identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Unquoted_identifierContext);
	    } else {
	        return this.getTypedRuleContext(Unquoted_identifierContext,i);
	    }
	};

	quoted_identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Quoted_identifierContext);
	    } else {
	        return this.getTypedRuleContext(Quoted_identifierContext,i);
	    }
	};

	amp_quoted_identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Amp_quoted_identifierContext);
	    } else {
	        return this.getTypedRuleContext(Amp_quoted_identifierContext,i);
	    }
	};

	function_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Function_Context);
	    } else {
	        return this.getTypedRuleContext(Function_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterValue_expression_primary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitValue_expression_primary(this);
		}
	}


}



class Value_expression_primary0Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_value_expression_primary0;
    }

	function_() {
	    return this.getTypedRuleContext(Function_Context,0);
	};

	LPAREN() {
	    return this.getToken(mdxParser.LPAREN, 0);
	};

	exp_list() {
	    return this.getTypedRuleContext(Exp_listContext,0);
	};

	RPAREN() {
	    return this.getToken(mdxParser.RPAREN, 0);
	};

	LBRACE() {
	    return this.getToken(mdxParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(mdxParser.RBRACE, 0);
	};

	case_expression() {
	    return this.getTypedRuleContext(Case_expressionContext,0);
	};

	STRING() {
	    return this.getToken(mdxParser.STRING, 0);
	};

	NUMBER() {
	    return this.getToken(mdxParser.NUMBER, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterValue_expression_primary0(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitValue_expression_primary0(this);
		}
	}


}



class Exp_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_exp_list;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mdxParser.COMMA);
	    } else {
	        return this.getToken(mdxParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterExp_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitExp_list(this);
		}
	}


}



class Case_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_case_expression;
    }

	CASE() {
	    return this.getToken(mdxParser.CASE, 0);
	};

	END() {
	    return this.getToken(mdxParser.END, 0);
	};

	value_expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Value_expressionContext);
	    } else {
	        return this.getTypedRuleContext(Value_expressionContext,i);
	    }
	};

	when_list() {
	    return this.getTypedRuleContext(When_listContext,0);
	};

	ELSE() {
	    return this.getToken(mdxParser.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterCase_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitCase_expression(this);
		}
	}


}



class When_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_when_list;
    }

	when_clause = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(When_clauseContext);
	    } else {
	        return this.getTypedRuleContext(When_clauseContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterWhen_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitWhen_list(this);
		}
	}


}



class When_clauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_when_clause;
    }

	WHEN() {
	    return this.getToken(mdxParser.WHEN, 0);
	};

	value_expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Value_expressionContext);
	    } else {
	        return this.getTypedRuleContext(Value_expressionContext,i);
	    }
	};

	THEN() {
	    return this.getToken(mdxParser.THEN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterWhen_clause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitWhen_clause(this);
		}
	}


}



class Comp_opContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_comp_op;
    }

	EQ() {
	    return this.getToken(mdxParser.EQ, 0);
	};

	NE() {
	    return this.getToken(mdxParser.NE, 0);
	};

	LT() {
	    return this.getToken(mdxParser.LT, 0);
	};

	GT() {
	    return this.getToken(mdxParser.GT, 0);
	};

	LE() {
	    return this.getToken(mdxParser.LE, 0);
	};

	GE() {
	    return this.getToken(mdxParser.GE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterComp_op(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitComp_op(this);
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
        this.ruleIndex = mdxParser.RULE_identifier;
    }

	unquoted_identifier() {
	    return this.getTypedRuleContext(Unquoted_identifierContext,0);
	};

	quoted_identifier() {
	    return this.getTypedRuleContext(Quoted_identifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitIdentifier(this);
		}
	}


}



class Unquoted_identifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_unquoted_identifier;
    }

	keyword() {
	    return this.getTypedRuleContext(KeywordContext,0);
	};

	ID() {
	    return this.getToken(mdxParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterUnquoted_identifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitUnquoted_identifier(this);
		}
	}


}



class Amp_quoted_identifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_amp_quoted_identifier;
    }

	AMP_QUOTED_ID() {
	    return this.getToken(mdxParser.AMP_QUOTED_ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterAmp_quoted_identifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitAmp_quoted_identifier(this);
		}
	}


}



class Quoted_identifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_quoted_identifier;
    }

	QUOTED_ID() {
	    return this.getToken(mdxParser.QUOTED_ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterQuoted_identifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitQuoted_identifier(this);
		}
	}


}



class KeywordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mdxParser.RULE_keyword;
    }

	DIMENSION() {
	    return this.getToken(mdxParser.DIMENSION, 0);
	};

	PROPERTIES() {
	    return this.getToken(mdxParser.PROPERTIES, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.enterKeyword(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mdxListener ) {
	        listener.exitKeyword(this);
		}
	}


}




mdxParser.Mdx_statementContext = Mdx_statementContext; 
mdxParser.Select_statementContext = Select_statementContext; 
mdxParser.Formula_specificationContext = Formula_specificationContext; 
mdxParser.Single_formula_specificationContext = Single_formula_specificationContext; 
mdxParser.Set_specificationContext = Set_specificationContext; 
mdxParser.Member_specificationContext = Member_specificationContext; 
mdxParser.Axis_specification_listContext = Axis_specification_listContext; 
mdxParser.Member_property_def_listContext = Member_property_def_listContext; 
mdxParser.Member_nameContext = Member_nameContext; 
mdxParser.Member_property_definitionContext = Member_property_definitionContext; 
mdxParser.Set_nameContext = Set_nameContext; 
mdxParser.Compound_idContext = Compound_idContext; 
mdxParser.Axis_specificationContext = Axis_specificationContext; 
mdxParser.Axis_nameContext = Axis_nameContext; 
mdxParser.Dim_propsContext = Dim_propsContext; 
mdxParser.Property_listContext = Property_listContext; 
mdxParser.Property_Context = Property_Context; 
mdxParser.Cube_specificationContext = Cube_specificationContext; 
mdxParser.Cube_nameContext = Cube_nameContext; 
mdxParser.Slicer_specificationContext = Slicer_specificationContext; 
mdxParser.Cell_propsContext = Cell_propsContext; 
mdxParser.Cell_property_listContext = Cell_property_listContext; 
mdxParser.Cell_propertyContext = Cell_propertyContext; 
mdxParser.Mandatory_cell_propertyContext = Mandatory_cell_propertyContext; 
mdxParser.Provider_specific_cell_propertyContext = Provider_specific_cell_propertyContext; 
mdxParser.ExpressionContext = ExpressionContext; 
mdxParser.Value_expressionContext = Value_expressionContext; 
mdxParser.Value_xor_expressionContext = Value_xor_expressionContext; 
mdxParser.Value_or_expressionContext = Value_or_expressionContext; 
mdxParser.Term5Context = Term5Context; 
mdxParser.Term4Context = Term4Context; 
mdxParser.Term3Context = Term3Context; 
mdxParser.Term2Context = Term2Context; 
mdxParser.TermContext = TermContext; 
mdxParser.FactorContext = FactorContext; 
mdxParser.Function_Context = Function_Context; 
mdxParser.Value_expression_primaryContext = Value_expression_primaryContext; 
mdxParser.Value_expression_primary0Context = Value_expression_primary0Context; 
mdxParser.Exp_listContext = Exp_listContext; 
mdxParser.Case_expressionContext = Case_expressionContext; 
mdxParser.When_listContext = When_listContext; 
mdxParser.When_clauseContext = When_clauseContext; 
mdxParser.Comp_opContext = Comp_opContext; 
mdxParser.IdentifierContext = IdentifierContext; 
mdxParser.Unquoted_identifierContext = Unquoted_identifierContext; 
mdxParser.Amp_quoted_identifierContext = Amp_quoted_identifierContext; 
mdxParser.Quoted_identifierContext = Quoted_identifierContext; 
mdxParser.KeywordContext = KeywordContext; 
