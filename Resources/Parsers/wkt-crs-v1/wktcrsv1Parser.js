// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/wkt-crs-v1/wktcrsv1.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import wktcrsv1Listener from './wktcrsv1Listener.js';
const serializedATN = [4,1,39,395,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,1,0,5,0,84,
8,0,10,0,12,0,87,9,0,1,0,1,0,1,1,1,1,3,1,93,8,1,1,2,1,2,1,3,1,3,1,3,1,3,
1,4,1,4,1,4,1,4,1,4,1,4,3,4,107,8,4,1,5,1,5,1,5,1,5,1,5,1,5,3,5,115,8,5,
1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,4,6,
134,8,6,11,6,12,6,135,1,6,1,6,1,6,1,6,1,6,5,6,143,8,6,10,6,12,6,146,9,6,
1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,4,7,164,
8,7,11,7,12,7,165,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,
8,5,8,182,8,8,10,8,12,8,185,9,8,1,8,1,8,3,8,189,8,8,1,8,1,8,1,9,1,9,1,9,
1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,
10,1,10,1,10,1,10,1,10,4,10,217,8,10,11,10,12,10,218,1,10,1,10,1,10,1,11,
1,11,1,11,1,11,1,11,1,11,1,11,3,11,231,8,11,1,11,1,11,3,11,235,8,11,1,11,
1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,
13,1,13,1,13,3,13,255,8,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,
1,14,1,14,3,14,268,8,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
1,15,1,15,1,15,1,15,1,15,1,15,1,15,3,15,287,8,15,3,15,289,8,15,1,15,1,15,
1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,
17,307,8,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,318,8,18,1,
18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,3,20,
334,8,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,23,1,23,
1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,3,23,359,8,23,1,24,1,24,
1,25,1,25,1,26,1,26,1,27,1,27,1,28,1,28,1,29,1,29,1,30,1,30,1,31,1,31,1,
32,1,32,1,33,1,33,1,34,1,34,1,35,1,35,1,36,1,36,1,37,1,37,1,38,1,38,1,39,
1,39,1,40,1,40,1,40,0,0,41,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,
34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,
0,2,1,0,18,19,2,0,31,31,33,33,387,0,85,1,0,0,0,2,92,1,0,0,0,4,94,1,0,0,0,
6,96,1,0,0,0,8,106,1,0,0,0,10,108,1,0,0,0,12,122,1,0,0,0,14,150,1,0,0,0,
16,170,1,0,0,0,18,192,1,0,0,0,20,205,1,0,0,0,22,223,1,0,0,0,24,238,1,0,0,
0,26,247,1,0,0,0,28,258,1,0,0,0,30,271,1,0,0,0,32,292,1,0,0,0,34,299,1,0,
0,0,36,310,1,0,0,0,38,321,1,0,0,0,40,328,1,0,0,0,42,337,1,0,0,0,44,344,1,
0,0,0,46,358,1,0,0,0,48,360,1,0,0,0,50,362,1,0,0,0,52,364,1,0,0,0,54,366,
1,0,0,0,56,368,1,0,0,0,58,370,1,0,0,0,60,372,1,0,0,0,62,374,1,0,0,0,64,376,
1,0,0,0,66,378,1,0,0,0,68,380,1,0,0,0,70,382,1,0,0,0,72,384,1,0,0,0,74,386,
1,0,0,0,76,388,1,0,0,0,78,390,1,0,0,0,80,392,1,0,0,0,82,84,3,2,1,0,83,82,
1,0,0,0,84,87,1,0,0,0,85,83,1,0,0,0,85,86,1,0,0,0,86,88,1,0,0,0,87,85,1,
0,0,0,88,89,5,0,0,1,89,1,1,0,0,0,90,93,3,4,2,0,91,93,3,6,3,0,92,90,1,0,0,
0,92,91,1,0,0,0,93,3,1,0,0,0,94,95,5,34,0,0,95,5,1,0,0,0,96,97,3,48,24,0,
97,98,5,39,0,0,98,99,3,8,4,0,99,7,1,0,0,0,100,107,3,10,5,0,101,107,3,12,
6,0,102,107,3,16,8,0,103,107,3,18,9,0,104,107,3,14,7,0,105,107,3,20,10,0,
106,100,1,0,0,0,106,101,1,0,0,0,106,102,1,0,0,0,106,103,1,0,0,0,106,104,
1,0,0,0,106,105,1,0,0,0,107,9,1,0,0,0,108,109,5,1,0,0,109,110,5,37,0,0,110,
111,3,50,25,0,111,114,5,36,0,0,112,115,3,12,6,0,113,115,3,16,8,0,114,112,
1,0,0,0,114,113,1,0,0,0,115,116,1,0,0,0,116,117,5,36,0,0,117,118,3,18,9,
0,118,119,5,36,0,0,119,120,3,32,16,0,120,121,5,38,0,0,121,11,1,0,0,0,122,
123,5,2,0,0,123,124,5,37,0,0,124,125,3,50,25,0,125,126,5,36,0,0,126,127,
3,16,8,0,127,128,5,36,0,0,128,129,3,40,20,0,129,133,5,36,0,0,130,131,3,42,
21,0,131,132,5,36,0,0,132,134,1,0,0,0,133,130,1,0,0,0,134,135,1,0,0,0,135,
133,1,0,0,0,135,136,1,0,0,0,136,137,1,0,0,0,137,138,3,36,18,0,138,144,5,
36,0,0,139,140,3,38,19,0,140,141,5,36,0,0,141,143,1,0,0,0,142,139,1,0,0,
0,143,146,1,0,0,0,144,142,1,0,0,0,144,145,1,0,0,0,145,147,1,0,0,0,146,144,
1,0,0,0,147,148,3,32,16,0,148,149,5,38,0,0,149,13,1,0,0,0,150,151,5,3,0,
0,151,152,5,37,0,0,152,153,3,50,25,0,153,154,5,36,0,0,154,155,3,22,11,0,
155,156,5,36,0,0,156,157,3,34,17,0,157,158,5,36,0,0,158,159,3,36,18,0,159,
163,5,36,0,0,160,161,3,38,19,0,161,162,5,36,0,0,162,164,1,0,0,0,163,160,
1,0,0,0,164,165,1,0,0,0,165,163,1,0,0,0,165,166,1,0,0,0,166,167,1,0,0,0,
167,168,3,32,16,0,168,169,5,38,0,0,169,15,1,0,0,0,170,171,5,4,0,0,171,172,
5,37,0,0,172,173,3,50,25,0,173,174,5,36,0,0,174,175,3,22,11,0,175,176,5,
36,0,0,176,177,3,34,17,0,177,178,5,36,0,0,178,183,3,36,18,0,179,180,5,36,
0,0,180,182,3,38,19,0,181,179,1,0,0,0,182,185,1,0,0,0,183,181,1,0,0,0,183,
184,1,0,0,0,184,188,1,0,0,0,185,183,1,0,0,0,186,187,5,36,0,0,187,189,3,32,
16,0,188,186,1,0,0,0,188,189,1,0,0,0,189,190,1,0,0,0,190,191,5,38,0,0,191,
17,1,0,0,0,192,193,5,5,0,0,193,194,5,37,0,0,194,195,3,50,25,0,195,196,5,
36,0,0,196,197,3,24,12,0,197,198,5,36,0,0,198,199,3,36,18,0,199,200,5,36,
0,0,200,201,3,38,19,0,201,202,5,36,0,0,202,203,3,32,16,0,203,204,5,38,0,
0,204,19,1,0,0,0,205,206,5,6,0,0,206,207,5,37,0,0,207,208,3,50,25,0,208,
209,5,36,0,0,209,210,3,26,13,0,210,211,5,36,0,0,211,212,3,36,18,0,212,216,
5,36,0,0,213,214,3,38,19,0,214,215,5,36,0,0,215,217,1,0,0,0,216,213,1,0,
0,0,217,218,1,0,0,0,218,216,1,0,0,0,218,219,1,0,0,0,219,220,1,0,0,0,220,
221,3,32,16,0,221,222,5,38,0,0,222,21,1,0,0,0,223,224,5,7,0,0,224,225,5,
37,0,0,225,226,3,50,25,0,226,227,5,36,0,0,227,230,3,28,14,0,228,229,5,36,
0,0,229,231,3,30,15,0,230,228,1,0,0,0,230,231,1,0,0,0,231,234,1,0,0,0,232,
233,5,36,0,0,233,235,3,32,16,0,234,232,1,0,0,0,234,235,1,0,0,0,235,236,1,
0,0,0,236,237,5,38,0,0,237,23,1,0,0,0,238,239,5,8,0,0,239,240,5,37,0,0,240,
241,3,50,25,0,241,242,5,36,0,0,242,243,3,54,27,0,243,244,5,36,0,0,244,245,
3,32,16,0,245,246,5,38,0,0,246,25,1,0,0,0,247,248,5,9,0,0,248,249,5,37,0,
0,249,250,3,50,25,0,250,251,5,36,0,0,251,254,3,54,27,0,252,253,5,36,0,0,
253,255,3,32,16,0,254,252,1,0,0,0,254,255,1,0,0,0,255,256,1,0,0,0,256,257,
5,38,0,0,257,27,1,0,0,0,258,259,5,10,0,0,259,260,5,37,0,0,260,261,3,50,25,
0,261,262,5,36,0,0,262,263,3,56,28,0,263,264,5,36,0,0,264,267,3,58,29,0,
265,266,5,36,0,0,266,268,3,32,16,0,267,265,1,0,0,0,267,268,1,0,0,0,268,269,
1,0,0,0,269,270,5,38,0,0,270,29,1,0,0,0,271,272,5,11,0,0,272,273,5,37,0,
0,273,274,3,60,30,0,274,275,5,36,0,0,275,276,3,62,31,0,276,277,5,36,0,0,
277,288,3,64,32,0,278,279,5,36,0,0,279,280,3,66,33,0,280,281,5,36,0,0,281,
282,3,68,34,0,282,283,5,36,0,0,283,286,3,70,35,0,284,285,5,36,0,0,285,287,
3,72,36,0,286,284,1,0,0,0,286,287,1,0,0,0,287,289,1,0,0,0,288,278,1,0,0,
0,288,289,1,0,0,0,289,290,1,0,0,0,290,291,5,38,0,0,291,31,1,0,0,0,292,293,
5,12,0,0,293,294,5,37,0,0,294,295,3,44,22,0,295,296,5,36,0,0,296,297,3,74,
37,0,297,298,5,38,0,0,298,33,1,0,0,0,299,300,5,13,0,0,300,301,5,37,0,0,301,
302,3,50,25,0,302,303,5,36,0,0,303,306,3,76,38,0,304,305,5,36,0,0,305,307,
3,32,16,0,306,304,1,0,0,0,306,307,1,0,0,0,307,308,1,0,0,0,308,309,5,38,0,
0,309,35,1,0,0,0,310,311,5,14,0,0,311,312,5,37,0,0,312,313,3,50,25,0,313,
314,5,36,0,0,314,317,3,78,39,0,315,316,5,36,0,0,316,318,3,32,16,0,317,315,
1,0,0,0,317,318,1,0,0,0,318,319,1,0,0,0,319,320,5,38,0,0,320,37,1,0,0,0,
321,322,5,15,0,0,322,323,5,37,0,0,323,324,3,50,25,0,324,325,5,36,0,0,325,
326,3,46,23,0,326,327,5,38,0,0,327,39,1,0,0,0,328,329,5,16,0,0,329,330,5,
37,0,0,330,333,3,50,25,0,331,332,5,36,0,0,332,334,3,32,16,0,333,331,1,0,
0,0,333,334,1,0,0,0,334,335,1,0,0,0,335,336,5,38,0,0,336,41,1,0,0,0,337,
338,5,17,0,0,338,339,5,37,0,0,339,340,3,50,25,0,340,341,5,36,0,0,341,342,
3,80,40,0,342,343,5,38,0,0,343,43,1,0,0,0,344,345,7,0,0,0,345,45,1,0,0,0,
346,359,5,20,0,0,347,359,5,21,0,0,348,359,5,22,0,0,349,359,5,23,0,0,350,
359,5,24,0,0,351,359,5,25,0,0,352,359,5,26,0,0,353,359,5,27,0,0,354,359,
5,28,0,0,355,359,5,29,0,0,356,359,5,30,0,0,357,359,3,50,25,0,358,346,1,0,
0,0,358,347,1,0,0,0,358,348,1,0,0,0,358,349,1,0,0,0,358,350,1,0,0,0,358,
351,1,0,0,0,358,352,1,0,0,0,358,353,1,0,0,0,358,354,1,0,0,0,358,355,1,0,
0,0,358,356,1,0,0,0,358,357,1,0,0,0,359,47,1,0,0,0,360,361,7,1,0,0,361,49,
1,0,0,0,362,363,5,32,0,0,363,51,1,0,0,0,364,365,5,31,0,0,365,53,1,0,0,0,
366,367,5,31,0,0,367,55,1,0,0,0,368,369,5,31,0,0,369,57,1,0,0,0,370,371,
5,31,0,0,371,59,1,0,0,0,372,373,5,31,0,0,373,61,1,0,0,0,374,375,5,31,0,0,
375,63,1,0,0,0,376,377,5,31,0,0,377,65,1,0,0,0,378,379,5,31,0,0,379,67,1,
0,0,0,380,381,5,31,0,0,381,69,1,0,0,0,382,383,5,31,0,0,383,71,1,0,0,0,384,
385,5,31,0,0,385,73,1,0,0,0,386,387,5,32,0,0,387,75,1,0,0,0,388,389,5,31,
0,0,389,77,1,0,0,0,390,391,5,31,0,0,391,79,1,0,0,0,392,393,5,31,0,0,393,
81,1,0,0,0,20,85,92,106,114,135,144,165,183,188,218,230,234,254,267,286,
288,306,317,333,358];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class wktcrsv1Parser extends antlr4.Parser {

    static grammarFileName = "wktcrsv1.g4";
    static literalNames = [ null, "'COMPD_CS'", "'PROJCS'", "'GEOCCS'", 
                            "'GEOGCS'", "'VERT_CS'", "'LOCAL_CS'", "'DATUM'", 
                            "'VERT_DATUM'", "'LOCAL_DATUM'", "'SPHEROID'", 
                            "'TOWGS84'", "'AUTHORITY'", "'PRIMEM'", "'UNIT'", 
                            "'AXIS'", "'PROJECTION'", "'PARAMETER'", "'\"EPSG\"'", 
                            "'\"ESRI\"'", "'EAST'", "'WEST'", "'NORTH'", 
                            "'SOUTH'", "'NORTH_EAST'", "'NORTH_WEST'", "'UP'", 
                            "'DOWN'", "'GEOCENTRIC_X'", "'GEOCENTRIC_Y'", 
                            "'GEOCENTRIC_Z'", null, null, null, null, null, 
                            "','", null, null, "'='" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "NUMBER", 
                             "TEXT", "PKEY", "COMMENT_LINE", "WS", "COMMA", 
                             "LPAR", "RPAR", "EQ" ];
    static ruleNames = [ "propsFile", "propRow", "commentLine", "epsgDefLine", 
                         "wkt", "compdcs", "projcs", "geoccs", "geogcs", 
                         "vertcs", "localcs", "datum", "vertdatum", "localdatum", 
                         "spheroid", "towgs84", "authority", "primem", "unit", 
                         "axis", "projection", "parameter", "authorityName", 
                         "axisOrient", "epsgCode", "name", "number", "type", 
                         "semiMajorAxis", "inverseFlattening", "dx", "dy", 
                         "dz", "ex", "ey", "ez", "ppm", "code", "longitude", 
                         "conversionFactor", "value" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = wktcrsv1Parser.ruleNames;
        this.literalNames = wktcrsv1Parser.literalNames;
        this.symbolicNames = wktcrsv1Parser.symbolicNames;
    }



	propsFile() {
	    let localctx = new PropsFileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, wktcrsv1Parser.RULE_propsFile);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 13) !== 0)) {
	            this.state = 82;
	            this.propRow();
	            this.state = 87;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 88;
	        this.match(wktcrsv1Parser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	propRow() {
	    let localctx = new PropRowContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, wktcrsv1Parser.RULE_propRow);
	    try {
	        this.state = 92;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 34:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 90;
	            this.commentLine();
	            break;
	        case 31:
	        case 33:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 91;
	            this.epsgDefLine();
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



	commentLine() {
	    let localctx = new CommentLineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, wktcrsv1Parser.RULE_commentLine);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.match(wktcrsv1Parser.COMMENT_LINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	epsgDefLine() {
	    let localctx = new EpsgDefLineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, wktcrsv1Parser.RULE_epsgDefLine);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.epsgCode();
	        this.state = 97;
	        this.match(wktcrsv1Parser.EQ);
	        this.state = 98;
	        this.wkt();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wkt() {
	    let localctx = new WktContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, wktcrsv1Parser.RULE_wkt);
	    try {
	        this.state = 106;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 100;
	            this.compdcs();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 101;
	            this.projcs();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 102;
	            this.geogcs();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 103;
	            this.vertcs();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 104;
	            this.geoccs();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 105;
	            this.localcs();
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



	compdcs() {
	    let localctx = new CompdcsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, wktcrsv1Parser.RULE_compdcs);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this.match(wktcrsv1Parser.T__0);
	        this.state = 109;
	        this.match(wktcrsv1Parser.LPAR);
	        this.state = 110;
	        this.name();
	        this.state = 111;
	        this.match(wktcrsv1Parser.COMMA);
	        this.state = 114;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.state = 112;
	            this.projcs();
	            break;
	        case 4:
	            this.state = 113;
	            this.geogcs();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 116;
	        this.match(wktcrsv1Parser.COMMA);
	        this.state = 117;
	        this.vertcs();
	        this.state = 118;
	        this.match(wktcrsv1Parser.COMMA);
	        this.state = 119;
	        this.authority();
	        this.state = 120;
	        this.match(wktcrsv1Parser.RPAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	projcs() {
	    let localctx = new ProjcsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, wktcrsv1Parser.RULE_projcs);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(wktcrsv1Parser.T__1);
	        this.state = 123;
	        this.match(wktcrsv1Parser.LPAR);
	        this.state = 124;
	        this.name();
	        this.state = 125;
	        this.match(wktcrsv1Parser.COMMA);
	        this.state = 126;
	        this.geogcs();
	        this.state = 127;
	        this.match(wktcrsv1Parser.COMMA);
	        this.state = 128;
	        this.projection();
	        this.state = 129;
	        this.match(wktcrsv1Parser.COMMA);
	        this.state = 133; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 130;
	            this.parameter();
	            this.state = 131;
	            this.match(wktcrsv1Parser.COMMA);
	            this.state = 135; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===17);
	        this.state = 137;
	        this.unit();
	        this.state = 138;
	        this.match(wktcrsv1Parser.COMMA);
	        this.state = 144;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===15) {
	            this.state = 139;
	            this.axis();
	            this.state = 140;
	            this.match(wktcrsv1Parser.COMMA);
	            this.state = 146;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 147;
	        this.authority();
	        this.state = 148;
	        this.match(wktcrsv1Parser.RPAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	geoccs() {
	    let localctx = new GeoccsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, wktcrsv1Parser.RULE_geoccs);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 150;
	        this.match(wktcrsv1Parser.T__2);
	        this.state = 151;
	        this.match(wktcrsv1Parser.LPAR);
	        this.state = 152;
	        this.name();
	        this.state = 153;
	        this.match(wktcrsv1Parser.COMMA);
	        this.state = 154;
	        this.datum();
	        this.state = 155;
	        this.match(wktcrsv1Parser.COMMA);
	        this.state = 156;
	        this.primem();
	        this.state = 157;
	        this.match(wktcrsv1Parser.COMMA);
	        this.state = 158;
	        this.unit();
	        this.state = 159;
	        this.match(wktcrsv1Parser.COMMA);
	        this.state = 163; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 160;
	            this.axis();
	            this.state = 161;
	            this.match(wktcrsv1Parser.COMMA);
	            this.state = 165; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===15);
	        this.state = 167;
	        this.authority();
	        this.state = 168;
	        this.match(wktcrsv1Parser.RPAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	geogcs() {
	    let localctx = new GeogcsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, wktcrsv1Parser.RULE_geogcs);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 170;
	        this.match(wktcrsv1Parser.T__3);
	        this.state = 171;
	        this.match(wktcrsv1Parser.LPAR);
	        this.state = 172;
	        this.name();
	        this.state = 173;
	        this.match(wktcrsv1Parser.COMMA);
	        this.state = 174;
	        this.datum();
	        this.state = 175;
	        this.match(wktcrsv1Parser.COMMA);
	        this.state = 176;
	        this.primem();
	        this.state = 177;
	        this.match(wktcrsv1Parser.COMMA);
	        this.state = 178;
	        this.unit();
	        this.state = 183;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 179;
	                this.match(wktcrsv1Parser.COMMA);
	                this.state = 180;
	                this.axis(); 
	            }
	            this.state = 185;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	        this.state = 188;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===36) {
	            this.state = 186;
	            this.match(wktcrsv1Parser.COMMA);
	            this.state = 187;
	            this.authority();
	        }

	        this.state = 190;
	        this.match(wktcrsv1Parser.RPAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	vertcs() {
	    let localctx = new VertcsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, wktcrsv1Parser.RULE_vertcs);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 192;
	        this.match(wktcrsv1Parser.T__4);
	        this.state = 193;
	        this.match(wktcrsv1Parser.LPAR);
	        this.state = 194;
	        this.name();
	        this.state = 195;
	        this.match(wktcrsv1Parser.COMMA);
	        this.state = 196;
	        this.vertdatum();
	        this.state = 197;
	        this.match(wktcrsv1Parser.COMMA);
	        this.state = 198;
	        this.unit();
	        this.state = 199;
	        this.match(wktcrsv1Parser.COMMA);
	        this.state = 200;
	        this.axis();
	        this.state = 201;
	        this.match(wktcrsv1Parser.COMMA);
	        this.state = 202;
	        this.authority();
	        this.state = 203;
	        this.match(wktcrsv1Parser.RPAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	localcs() {
	    let localctx = new LocalcsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, wktcrsv1Parser.RULE_localcs);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 205;
	        this.match(wktcrsv1Parser.T__5);
	        this.state = 206;
	        this.match(wktcrsv1Parser.LPAR);
	        this.state = 207;
	        this.name();
	        this.state = 208;
	        this.match(wktcrsv1Parser.COMMA);
	        this.state = 209;
	        this.localdatum();
	        this.state = 210;
	        this.match(wktcrsv1Parser.COMMA);
	        this.state = 211;
	        this.unit();
	        this.state = 212;
	        this.match(wktcrsv1Parser.COMMA);
	        this.state = 216; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 213;
	            this.axis();
	            this.state = 214;
	            this.match(wktcrsv1Parser.COMMA);
	            this.state = 218; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===15);
	        this.state = 220;
	        this.authority();
	        this.state = 221;
	        this.match(wktcrsv1Parser.RPAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	datum() {
	    let localctx = new DatumContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, wktcrsv1Parser.RULE_datum);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 223;
	        this.match(wktcrsv1Parser.T__6);
	        this.state = 224;
	        this.match(wktcrsv1Parser.LPAR);
	        this.state = 225;
	        this.name();
	        this.state = 226;
	        this.match(wktcrsv1Parser.COMMA);
	        this.state = 227;
	        this.spheroid();
	        this.state = 230;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 228;
	            this.match(wktcrsv1Parser.COMMA);
	            this.state = 229;
	            this.towgs84();

	        }
	        this.state = 234;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===36) {
	            this.state = 232;
	            this.match(wktcrsv1Parser.COMMA);
	            this.state = 233;
	            this.authority();
	        }

	        this.state = 236;
	        this.match(wktcrsv1Parser.RPAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	vertdatum() {
	    let localctx = new VertdatumContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, wktcrsv1Parser.RULE_vertdatum);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        this.match(wktcrsv1Parser.T__7);
	        this.state = 239;
	        this.match(wktcrsv1Parser.LPAR);
	        this.state = 240;
	        this.name();
	        this.state = 241;
	        this.match(wktcrsv1Parser.COMMA);
	        this.state = 242;
	        this.type();
	        this.state = 243;
	        this.match(wktcrsv1Parser.COMMA);
	        this.state = 244;
	        this.authority();
	        this.state = 245;
	        this.match(wktcrsv1Parser.RPAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	localdatum() {
	    let localctx = new LocaldatumContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, wktcrsv1Parser.RULE_localdatum);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 247;
	        this.match(wktcrsv1Parser.T__8);
	        this.state = 248;
	        this.match(wktcrsv1Parser.LPAR);
	        this.state = 249;
	        this.name();
	        this.state = 250;
	        this.match(wktcrsv1Parser.COMMA);
	        this.state = 251;
	        this.type();
	        this.state = 254;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===36) {
	            this.state = 252;
	            this.match(wktcrsv1Parser.COMMA);
	            this.state = 253;
	            this.authority();
	        }

	        this.state = 256;
	        this.match(wktcrsv1Parser.RPAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	spheroid() {
	    let localctx = new SpheroidContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, wktcrsv1Parser.RULE_spheroid);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
	        this.match(wktcrsv1Parser.T__9);
	        this.state = 259;
	        this.match(wktcrsv1Parser.LPAR);
	        this.state = 260;
	        this.name();
	        this.state = 261;
	        this.match(wktcrsv1Parser.COMMA);
	        this.state = 262;
	        this.semiMajorAxis();
	        this.state = 263;
	        this.match(wktcrsv1Parser.COMMA);
	        this.state = 264;
	        this.inverseFlattening();
	        this.state = 267;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===36) {
	            this.state = 265;
	            this.match(wktcrsv1Parser.COMMA);
	            this.state = 266;
	            this.authority();
	        }

	        this.state = 269;
	        this.match(wktcrsv1Parser.RPAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	towgs84() {
	    let localctx = new Towgs84Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, wktcrsv1Parser.RULE_towgs84);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 271;
	        this.match(wktcrsv1Parser.T__10);
	        this.state = 272;
	        this.match(wktcrsv1Parser.LPAR);
	        this.state = 273;
	        this.dx();
	        this.state = 274;
	        this.match(wktcrsv1Parser.COMMA);
	        this.state = 275;
	        this.dy();
	        this.state = 276;
	        this.match(wktcrsv1Parser.COMMA);
	        this.state = 277;
	        this.dz();
	        this.state = 288;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===36) {
	            this.state = 278;
	            this.match(wktcrsv1Parser.COMMA);
	            this.state = 279;
	            this.ex();
	            this.state = 280;
	            this.match(wktcrsv1Parser.COMMA);
	            this.state = 281;
	            this.ey();
	            this.state = 282;
	            this.match(wktcrsv1Parser.COMMA);
	            this.state = 283;
	            this.ez();
	            this.state = 286;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 284;
	                this.match(wktcrsv1Parser.COMMA);
	                this.state = 285;
	                this.ppm();
	            }

	        }

	        this.state = 290;
	        this.match(wktcrsv1Parser.RPAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	authority() {
	    let localctx = new AuthorityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, wktcrsv1Parser.RULE_authority);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 292;
	        this.match(wktcrsv1Parser.T__11);
	        this.state = 293;
	        this.match(wktcrsv1Parser.LPAR);
	        this.state = 294;
	        this.authorityName();
	        this.state = 295;
	        this.match(wktcrsv1Parser.COMMA);
	        this.state = 296;
	        this.code();
	        this.state = 297;
	        this.match(wktcrsv1Parser.RPAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	primem() {
	    let localctx = new PrimemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, wktcrsv1Parser.RULE_primem);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 299;
	        this.match(wktcrsv1Parser.T__12);
	        this.state = 300;
	        this.match(wktcrsv1Parser.LPAR);
	        this.state = 301;
	        this.name();
	        this.state = 302;
	        this.match(wktcrsv1Parser.COMMA);
	        this.state = 303;
	        this.longitude();
	        this.state = 306;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===36) {
	            this.state = 304;
	            this.match(wktcrsv1Parser.COMMA);
	            this.state = 305;
	            this.authority();
	        }

	        this.state = 308;
	        this.match(wktcrsv1Parser.RPAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unit() {
	    let localctx = new UnitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, wktcrsv1Parser.RULE_unit);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 310;
	        this.match(wktcrsv1Parser.T__13);
	        this.state = 311;
	        this.match(wktcrsv1Parser.LPAR);
	        this.state = 312;
	        this.name();
	        this.state = 313;
	        this.match(wktcrsv1Parser.COMMA);
	        this.state = 314;
	        this.conversionFactor();
	        this.state = 317;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===36) {
	            this.state = 315;
	            this.match(wktcrsv1Parser.COMMA);
	            this.state = 316;
	            this.authority();
	        }

	        this.state = 319;
	        this.match(wktcrsv1Parser.RPAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	axis() {
	    let localctx = new AxisContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, wktcrsv1Parser.RULE_axis);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 321;
	        this.match(wktcrsv1Parser.T__14);
	        this.state = 322;
	        this.match(wktcrsv1Parser.LPAR);
	        this.state = 323;
	        this.name();
	        this.state = 324;
	        this.match(wktcrsv1Parser.COMMA);
	        this.state = 325;
	        this.axisOrient();
	        this.state = 326;
	        this.match(wktcrsv1Parser.RPAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	projection() {
	    let localctx = new ProjectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, wktcrsv1Parser.RULE_projection);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 328;
	        this.match(wktcrsv1Parser.T__15);
	        this.state = 329;
	        this.match(wktcrsv1Parser.LPAR);
	        this.state = 330;
	        this.name();
	        this.state = 333;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===36) {
	            this.state = 331;
	            this.match(wktcrsv1Parser.COMMA);
	            this.state = 332;
	            this.authority();
	        }

	        this.state = 335;
	        this.match(wktcrsv1Parser.RPAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameter() {
	    let localctx = new ParameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, wktcrsv1Parser.RULE_parameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 337;
	        this.match(wktcrsv1Parser.T__16);
	        this.state = 338;
	        this.match(wktcrsv1Parser.LPAR);
	        this.state = 339;
	        this.name();
	        this.state = 340;
	        this.match(wktcrsv1Parser.COMMA);
	        this.state = 341;
	        this.value();
	        this.state = 342;
	        this.match(wktcrsv1Parser.RPAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	authorityName() {
	    let localctx = new AuthorityNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, wktcrsv1Parser.RULE_authorityName);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 344;
	        _la = this._input.LA(1);
	        if(!(_la===18 || _la===19)) {
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



	axisOrient() {
	    let localctx = new AxisOrientContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, wktcrsv1Parser.RULE_axisOrient);
	    try {
	        this.state = 358;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 20:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 346;
	            this.match(wktcrsv1Parser.T__19);
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 347;
	            this.match(wktcrsv1Parser.T__20);
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 348;
	            this.match(wktcrsv1Parser.T__21);
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 349;
	            this.match(wktcrsv1Parser.T__22);
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 350;
	            this.match(wktcrsv1Parser.T__23);
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 351;
	            this.match(wktcrsv1Parser.T__24);
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 352;
	            this.match(wktcrsv1Parser.T__25);
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 353;
	            this.match(wktcrsv1Parser.T__26);
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 354;
	            this.match(wktcrsv1Parser.T__27);
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 355;
	            this.match(wktcrsv1Parser.T__28);
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 356;
	            this.match(wktcrsv1Parser.T__29);
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 357;
	            this.name();
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



	epsgCode() {
	    let localctx = new EpsgCodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, wktcrsv1Parser.RULE_epsgCode);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 360;
	        _la = this._input.LA(1);
	        if(!(_la===31 || _la===33)) {
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



	name() {
	    let localctx = new NameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, wktcrsv1Parser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 362;
	        this.match(wktcrsv1Parser.TEXT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, wktcrsv1Parser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 364;
	        this.match(wktcrsv1Parser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	type() {
	    let localctx = new TypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, wktcrsv1Parser.RULE_type);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 366;
	        this.match(wktcrsv1Parser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	semiMajorAxis() {
	    let localctx = new SemiMajorAxisContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, wktcrsv1Parser.RULE_semiMajorAxis);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 368;
	        this.match(wktcrsv1Parser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	inverseFlattening() {
	    let localctx = new InverseFlatteningContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, wktcrsv1Parser.RULE_inverseFlattening);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 370;
	        this.match(wktcrsv1Parser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dx() {
	    let localctx = new DxContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, wktcrsv1Parser.RULE_dx);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 372;
	        this.match(wktcrsv1Parser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dy() {
	    let localctx = new DyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, wktcrsv1Parser.RULE_dy);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 374;
	        this.match(wktcrsv1Parser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dz() {
	    let localctx = new DzContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, wktcrsv1Parser.RULE_dz);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 376;
	        this.match(wktcrsv1Parser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ex() {
	    let localctx = new ExContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, wktcrsv1Parser.RULE_ex);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 378;
	        this.match(wktcrsv1Parser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ey() {
	    let localctx = new EyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, wktcrsv1Parser.RULE_ey);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 380;
	        this.match(wktcrsv1Parser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ez() {
	    let localctx = new EzContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, wktcrsv1Parser.RULE_ez);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 382;
	        this.match(wktcrsv1Parser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ppm() {
	    let localctx = new PpmContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, wktcrsv1Parser.RULE_ppm);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 384;
	        this.match(wktcrsv1Parser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	code() {
	    let localctx = new CodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, wktcrsv1Parser.RULE_code);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 386;
	        this.match(wktcrsv1Parser.TEXT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	longitude() {
	    let localctx = new LongitudeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, wktcrsv1Parser.RULE_longitude);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 388;
	        this.match(wktcrsv1Parser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conversionFactor() {
	    let localctx = new ConversionFactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, wktcrsv1Parser.RULE_conversionFactor);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 390;
	        this.match(wktcrsv1Parser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 80, wktcrsv1Parser.RULE_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 392;
	        this.match(wktcrsv1Parser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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

wktcrsv1Parser.EOF = antlr4.Token.EOF;
wktcrsv1Parser.T__0 = 1;
wktcrsv1Parser.T__1 = 2;
wktcrsv1Parser.T__2 = 3;
wktcrsv1Parser.T__3 = 4;
wktcrsv1Parser.T__4 = 5;
wktcrsv1Parser.T__5 = 6;
wktcrsv1Parser.T__6 = 7;
wktcrsv1Parser.T__7 = 8;
wktcrsv1Parser.T__8 = 9;
wktcrsv1Parser.T__9 = 10;
wktcrsv1Parser.T__10 = 11;
wktcrsv1Parser.T__11 = 12;
wktcrsv1Parser.T__12 = 13;
wktcrsv1Parser.T__13 = 14;
wktcrsv1Parser.T__14 = 15;
wktcrsv1Parser.T__15 = 16;
wktcrsv1Parser.T__16 = 17;
wktcrsv1Parser.T__17 = 18;
wktcrsv1Parser.T__18 = 19;
wktcrsv1Parser.T__19 = 20;
wktcrsv1Parser.T__20 = 21;
wktcrsv1Parser.T__21 = 22;
wktcrsv1Parser.T__22 = 23;
wktcrsv1Parser.T__23 = 24;
wktcrsv1Parser.T__24 = 25;
wktcrsv1Parser.T__25 = 26;
wktcrsv1Parser.T__26 = 27;
wktcrsv1Parser.T__27 = 28;
wktcrsv1Parser.T__28 = 29;
wktcrsv1Parser.T__29 = 30;
wktcrsv1Parser.NUMBER = 31;
wktcrsv1Parser.TEXT = 32;
wktcrsv1Parser.PKEY = 33;
wktcrsv1Parser.COMMENT_LINE = 34;
wktcrsv1Parser.WS = 35;
wktcrsv1Parser.COMMA = 36;
wktcrsv1Parser.LPAR = 37;
wktcrsv1Parser.RPAR = 38;
wktcrsv1Parser.EQ = 39;

wktcrsv1Parser.RULE_propsFile = 0;
wktcrsv1Parser.RULE_propRow = 1;
wktcrsv1Parser.RULE_commentLine = 2;
wktcrsv1Parser.RULE_epsgDefLine = 3;
wktcrsv1Parser.RULE_wkt = 4;
wktcrsv1Parser.RULE_compdcs = 5;
wktcrsv1Parser.RULE_projcs = 6;
wktcrsv1Parser.RULE_geoccs = 7;
wktcrsv1Parser.RULE_geogcs = 8;
wktcrsv1Parser.RULE_vertcs = 9;
wktcrsv1Parser.RULE_localcs = 10;
wktcrsv1Parser.RULE_datum = 11;
wktcrsv1Parser.RULE_vertdatum = 12;
wktcrsv1Parser.RULE_localdatum = 13;
wktcrsv1Parser.RULE_spheroid = 14;
wktcrsv1Parser.RULE_towgs84 = 15;
wktcrsv1Parser.RULE_authority = 16;
wktcrsv1Parser.RULE_primem = 17;
wktcrsv1Parser.RULE_unit = 18;
wktcrsv1Parser.RULE_axis = 19;
wktcrsv1Parser.RULE_projection = 20;
wktcrsv1Parser.RULE_parameter = 21;
wktcrsv1Parser.RULE_authorityName = 22;
wktcrsv1Parser.RULE_axisOrient = 23;
wktcrsv1Parser.RULE_epsgCode = 24;
wktcrsv1Parser.RULE_name = 25;
wktcrsv1Parser.RULE_number = 26;
wktcrsv1Parser.RULE_type = 27;
wktcrsv1Parser.RULE_semiMajorAxis = 28;
wktcrsv1Parser.RULE_inverseFlattening = 29;
wktcrsv1Parser.RULE_dx = 30;
wktcrsv1Parser.RULE_dy = 31;
wktcrsv1Parser.RULE_dz = 32;
wktcrsv1Parser.RULE_ex = 33;
wktcrsv1Parser.RULE_ey = 34;
wktcrsv1Parser.RULE_ez = 35;
wktcrsv1Parser.RULE_ppm = 36;
wktcrsv1Parser.RULE_code = 37;
wktcrsv1Parser.RULE_longitude = 38;
wktcrsv1Parser.RULE_conversionFactor = 39;
wktcrsv1Parser.RULE_value = 40;

class PropsFileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_propsFile;
    }

	EOF() {
	    return this.getToken(wktcrsv1Parser.EOF, 0);
	};

	propRow = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PropRowContext);
	    } else {
	        return this.getTypedRuleContext(PropRowContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterPropsFile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitPropsFile(this);
		}
	}


}



class PropRowContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_propRow;
    }

	commentLine() {
	    return this.getTypedRuleContext(CommentLineContext,0);
	};

	epsgDefLine() {
	    return this.getTypedRuleContext(EpsgDefLineContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterPropRow(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitPropRow(this);
		}
	}


}



class CommentLineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_commentLine;
    }

	COMMENT_LINE() {
	    return this.getToken(wktcrsv1Parser.COMMENT_LINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterCommentLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitCommentLine(this);
		}
	}


}



class EpsgDefLineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_epsgDefLine;
    }

	epsgCode() {
	    return this.getTypedRuleContext(EpsgCodeContext,0);
	};

	EQ() {
	    return this.getToken(wktcrsv1Parser.EQ, 0);
	};

	wkt() {
	    return this.getTypedRuleContext(WktContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterEpsgDefLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitEpsgDefLine(this);
		}
	}


}



class WktContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_wkt;
    }

	compdcs() {
	    return this.getTypedRuleContext(CompdcsContext,0);
	};

	projcs() {
	    return this.getTypedRuleContext(ProjcsContext,0);
	};

	geogcs() {
	    return this.getTypedRuleContext(GeogcsContext,0);
	};

	vertcs() {
	    return this.getTypedRuleContext(VertcsContext,0);
	};

	geoccs() {
	    return this.getTypedRuleContext(GeoccsContext,0);
	};

	localcs() {
	    return this.getTypedRuleContext(LocalcsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterWkt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitWkt(this);
		}
	}


}



class CompdcsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_compdcs;
    }

	LPAR() {
	    return this.getToken(wktcrsv1Parser.LPAR, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wktcrsv1Parser.COMMA);
	    } else {
	        return this.getToken(wktcrsv1Parser.COMMA, i);
	    }
	};


	vertcs() {
	    return this.getTypedRuleContext(VertcsContext,0);
	};

	authority() {
	    return this.getTypedRuleContext(AuthorityContext,0);
	};

	RPAR() {
	    return this.getToken(wktcrsv1Parser.RPAR, 0);
	};

	projcs() {
	    return this.getTypedRuleContext(ProjcsContext,0);
	};

	geogcs() {
	    return this.getTypedRuleContext(GeogcsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterCompdcs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitCompdcs(this);
		}
	}


}



class ProjcsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_projcs;
    }

	LPAR() {
	    return this.getToken(wktcrsv1Parser.LPAR, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wktcrsv1Parser.COMMA);
	    } else {
	        return this.getToken(wktcrsv1Parser.COMMA, i);
	    }
	};


	geogcs() {
	    return this.getTypedRuleContext(GeogcsContext,0);
	};

	projection() {
	    return this.getTypedRuleContext(ProjectionContext,0);
	};

	unit() {
	    return this.getTypedRuleContext(UnitContext,0);
	};

	authority() {
	    return this.getTypedRuleContext(AuthorityContext,0);
	};

	RPAR() {
	    return this.getToken(wktcrsv1Parser.RPAR, 0);
	};

	parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParameterContext);
	    } else {
	        return this.getTypedRuleContext(ParameterContext,i);
	    }
	};

	axis = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AxisContext);
	    } else {
	        return this.getTypedRuleContext(AxisContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterProjcs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitProjcs(this);
		}
	}


}



class GeoccsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_geoccs;
    }

	LPAR() {
	    return this.getToken(wktcrsv1Parser.LPAR, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wktcrsv1Parser.COMMA);
	    } else {
	        return this.getToken(wktcrsv1Parser.COMMA, i);
	    }
	};


	datum() {
	    return this.getTypedRuleContext(DatumContext,0);
	};

	primem() {
	    return this.getTypedRuleContext(PrimemContext,0);
	};

	unit() {
	    return this.getTypedRuleContext(UnitContext,0);
	};

	authority() {
	    return this.getTypedRuleContext(AuthorityContext,0);
	};

	RPAR() {
	    return this.getToken(wktcrsv1Parser.RPAR, 0);
	};

	axis = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AxisContext);
	    } else {
	        return this.getTypedRuleContext(AxisContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterGeoccs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitGeoccs(this);
		}
	}


}



class GeogcsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_geogcs;
    }

	LPAR() {
	    return this.getToken(wktcrsv1Parser.LPAR, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wktcrsv1Parser.COMMA);
	    } else {
	        return this.getToken(wktcrsv1Parser.COMMA, i);
	    }
	};


	datum() {
	    return this.getTypedRuleContext(DatumContext,0);
	};

	primem() {
	    return this.getTypedRuleContext(PrimemContext,0);
	};

	unit() {
	    return this.getTypedRuleContext(UnitContext,0);
	};

	RPAR() {
	    return this.getToken(wktcrsv1Parser.RPAR, 0);
	};

	axis = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AxisContext);
	    } else {
	        return this.getTypedRuleContext(AxisContext,i);
	    }
	};

	authority() {
	    return this.getTypedRuleContext(AuthorityContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterGeogcs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitGeogcs(this);
		}
	}


}



class VertcsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_vertcs;
    }

	LPAR() {
	    return this.getToken(wktcrsv1Parser.LPAR, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wktcrsv1Parser.COMMA);
	    } else {
	        return this.getToken(wktcrsv1Parser.COMMA, i);
	    }
	};


	vertdatum() {
	    return this.getTypedRuleContext(VertdatumContext,0);
	};

	unit() {
	    return this.getTypedRuleContext(UnitContext,0);
	};

	axis() {
	    return this.getTypedRuleContext(AxisContext,0);
	};

	authority() {
	    return this.getTypedRuleContext(AuthorityContext,0);
	};

	RPAR() {
	    return this.getToken(wktcrsv1Parser.RPAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterVertcs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitVertcs(this);
		}
	}


}



class LocalcsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_localcs;
    }

	LPAR() {
	    return this.getToken(wktcrsv1Parser.LPAR, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wktcrsv1Parser.COMMA);
	    } else {
	        return this.getToken(wktcrsv1Parser.COMMA, i);
	    }
	};


	localdatum() {
	    return this.getTypedRuleContext(LocaldatumContext,0);
	};

	unit() {
	    return this.getTypedRuleContext(UnitContext,0);
	};

	authority() {
	    return this.getTypedRuleContext(AuthorityContext,0);
	};

	RPAR() {
	    return this.getToken(wktcrsv1Parser.RPAR, 0);
	};

	axis = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AxisContext);
	    } else {
	        return this.getTypedRuleContext(AxisContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterLocalcs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitLocalcs(this);
		}
	}


}



class DatumContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_datum;
    }

	LPAR() {
	    return this.getToken(wktcrsv1Parser.LPAR, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wktcrsv1Parser.COMMA);
	    } else {
	        return this.getToken(wktcrsv1Parser.COMMA, i);
	    }
	};


	spheroid() {
	    return this.getTypedRuleContext(SpheroidContext,0);
	};

	RPAR() {
	    return this.getToken(wktcrsv1Parser.RPAR, 0);
	};

	towgs84() {
	    return this.getTypedRuleContext(Towgs84Context,0);
	};

	authority() {
	    return this.getTypedRuleContext(AuthorityContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterDatum(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitDatum(this);
		}
	}


}



class VertdatumContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_vertdatum;
    }

	LPAR() {
	    return this.getToken(wktcrsv1Parser.LPAR, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wktcrsv1Parser.COMMA);
	    } else {
	        return this.getToken(wktcrsv1Parser.COMMA, i);
	    }
	};


	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	authority() {
	    return this.getTypedRuleContext(AuthorityContext,0);
	};

	RPAR() {
	    return this.getToken(wktcrsv1Parser.RPAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterVertdatum(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitVertdatum(this);
		}
	}


}



class LocaldatumContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_localdatum;
    }

	LPAR() {
	    return this.getToken(wktcrsv1Parser.LPAR, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wktcrsv1Parser.COMMA);
	    } else {
	        return this.getToken(wktcrsv1Parser.COMMA, i);
	    }
	};


	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	RPAR() {
	    return this.getToken(wktcrsv1Parser.RPAR, 0);
	};

	authority() {
	    return this.getTypedRuleContext(AuthorityContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterLocaldatum(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitLocaldatum(this);
		}
	}


}



class SpheroidContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_spheroid;
    }

	LPAR() {
	    return this.getToken(wktcrsv1Parser.LPAR, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wktcrsv1Parser.COMMA);
	    } else {
	        return this.getToken(wktcrsv1Parser.COMMA, i);
	    }
	};


	semiMajorAxis() {
	    return this.getTypedRuleContext(SemiMajorAxisContext,0);
	};

	inverseFlattening() {
	    return this.getTypedRuleContext(InverseFlatteningContext,0);
	};

	RPAR() {
	    return this.getToken(wktcrsv1Parser.RPAR, 0);
	};

	authority() {
	    return this.getTypedRuleContext(AuthorityContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterSpheroid(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitSpheroid(this);
		}
	}


}



class Towgs84Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_towgs84;
    }

	LPAR() {
	    return this.getToken(wktcrsv1Parser.LPAR, 0);
	};

	dx() {
	    return this.getTypedRuleContext(DxContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wktcrsv1Parser.COMMA);
	    } else {
	        return this.getToken(wktcrsv1Parser.COMMA, i);
	    }
	};


	dy() {
	    return this.getTypedRuleContext(DyContext,0);
	};

	dz() {
	    return this.getTypedRuleContext(DzContext,0);
	};

	RPAR() {
	    return this.getToken(wktcrsv1Parser.RPAR, 0);
	};

	ex() {
	    return this.getTypedRuleContext(ExContext,0);
	};

	ey() {
	    return this.getTypedRuleContext(EyContext,0);
	};

	ez() {
	    return this.getTypedRuleContext(EzContext,0);
	};

	ppm() {
	    return this.getTypedRuleContext(PpmContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterTowgs84(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitTowgs84(this);
		}
	}


}



class AuthorityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_authority;
    }

	LPAR() {
	    return this.getToken(wktcrsv1Parser.LPAR, 0);
	};

	authorityName() {
	    return this.getTypedRuleContext(AuthorityNameContext,0);
	};

	COMMA() {
	    return this.getToken(wktcrsv1Parser.COMMA, 0);
	};

	code() {
	    return this.getTypedRuleContext(CodeContext,0);
	};

	RPAR() {
	    return this.getToken(wktcrsv1Parser.RPAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterAuthority(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitAuthority(this);
		}
	}


}



class PrimemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_primem;
    }

	LPAR() {
	    return this.getToken(wktcrsv1Parser.LPAR, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wktcrsv1Parser.COMMA);
	    } else {
	        return this.getToken(wktcrsv1Parser.COMMA, i);
	    }
	};


	longitude() {
	    return this.getTypedRuleContext(LongitudeContext,0);
	};

	RPAR() {
	    return this.getToken(wktcrsv1Parser.RPAR, 0);
	};

	authority() {
	    return this.getTypedRuleContext(AuthorityContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterPrimem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitPrimem(this);
		}
	}


}



class UnitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_unit;
    }

	LPAR() {
	    return this.getToken(wktcrsv1Parser.LPAR, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wktcrsv1Parser.COMMA);
	    } else {
	        return this.getToken(wktcrsv1Parser.COMMA, i);
	    }
	};


	conversionFactor() {
	    return this.getTypedRuleContext(ConversionFactorContext,0);
	};

	RPAR() {
	    return this.getToken(wktcrsv1Parser.RPAR, 0);
	};

	authority() {
	    return this.getTypedRuleContext(AuthorityContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterUnit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitUnit(this);
		}
	}


}



class AxisContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_axis;
    }

	LPAR() {
	    return this.getToken(wktcrsv1Parser.LPAR, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	COMMA() {
	    return this.getToken(wktcrsv1Parser.COMMA, 0);
	};

	axisOrient() {
	    return this.getTypedRuleContext(AxisOrientContext,0);
	};

	RPAR() {
	    return this.getToken(wktcrsv1Parser.RPAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterAxis(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitAxis(this);
		}
	}


}



class ProjectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_projection;
    }

	LPAR() {
	    return this.getToken(wktcrsv1Parser.LPAR, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	RPAR() {
	    return this.getToken(wktcrsv1Parser.RPAR, 0);
	};

	COMMA() {
	    return this.getToken(wktcrsv1Parser.COMMA, 0);
	};

	authority() {
	    return this.getTypedRuleContext(AuthorityContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterProjection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitProjection(this);
		}
	}


}



class ParameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_parameter;
    }

	LPAR() {
	    return this.getToken(wktcrsv1Parser.LPAR, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	COMMA() {
	    return this.getToken(wktcrsv1Parser.COMMA, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	RPAR() {
	    return this.getToken(wktcrsv1Parser.RPAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterParameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitParameter(this);
		}
	}


}



class AuthorityNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_authorityName;
    }


	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterAuthorityName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitAuthorityName(this);
		}
	}


}



class AxisOrientContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_axisOrient;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterAxisOrient(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitAxisOrient(this);
		}
	}


}



class EpsgCodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_epsgCode;
    }

	PKEY() {
	    return this.getToken(wktcrsv1Parser.PKEY, 0);
	};

	NUMBER() {
	    return this.getToken(wktcrsv1Parser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterEpsgCode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitEpsgCode(this);
		}
	}


}



class NameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_name;
    }

	TEXT() {
	    return this.getToken(wktcrsv1Parser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitName(this);
		}
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_number;
    }

	NUMBER() {
	    return this.getToken(wktcrsv1Parser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitNumber(this);
		}
	}


}



class TypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_type;
    }

	NUMBER() {
	    return this.getToken(wktcrsv1Parser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitType(this);
		}
	}


}



class SemiMajorAxisContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_semiMajorAxis;
    }

	NUMBER() {
	    return this.getToken(wktcrsv1Parser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterSemiMajorAxis(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitSemiMajorAxis(this);
		}
	}


}



class InverseFlatteningContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_inverseFlattening;
    }

	NUMBER() {
	    return this.getToken(wktcrsv1Parser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterInverseFlattening(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitInverseFlattening(this);
		}
	}


}



class DxContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_dx;
    }

	NUMBER() {
	    return this.getToken(wktcrsv1Parser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterDx(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitDx(this);
		}
	}


}



class DyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_dy;
    }

	NUMBER() {
	    return this.getToken(wktcrsv1Parser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterDy(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitDy(this);
		}
	}


}



class DzContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_dz;
    }

	NUMBER() {
	    return this.getToken(wktcrsv1Parser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterDz(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitDz(this);
		}
	}


}



class ExContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_ex;
    }

	NUMBER() {
	    return this.getToken(wktcrsv1Parser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterEx(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitEx(this);
		}
	}


}



class EyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_ey;
    }

	NUMBER() {
	    return this.getToken(wktcrsv1Parser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterEy(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitEy(this);
		}
	}


}



class EzContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_ez;
    }

	NUMBER() {
	    return this.getToken(wktcrsv1Parser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterEz(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitEz(this);
		}
	}


}



class PpmContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_ppm;
    }

	NUMBER() {
	    return this.getToken(wktcrsv1Parser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterPpm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitPpm(this);
		}
	}


}



class CodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_code;
    }

	TEXT() {
	    return this.getToken(wktcrsv1Parser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterCode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitCode(this);
		}
	}


}



class LongitudeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_longitude;
    }

	NUMBER() {
	    return this.getToken(wktcrsv1Parser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterLongitude(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitLongitude(this);
		}
	}


}



class ConversionFactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktcrsv1Parser.RULE_conversionFactor;
    }

	NUMBER() {
	    return this.getToken(wktcrsv1Parser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterConversionFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitConversionFactor(this);
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
        this.ruleIndex = wktcrsv1Parser.RULE_value;
    }

	NUMBER() {
	    return this.getToken(wktcrsv1Parser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktcrsv1Listener ) {
	        listener.exitValue(this);
		}
	}


}




wktcrsv1Parser.PropsFileContext = PropsFileContext; 
wktcrsv1Parser.PropRowContext = PropRowContext; 
wktcrsv1Parser.CommentLineContext = CommentLineContext; 
wktcrsv1Parser.EpsgDefLineContext = EpsgDefLineContext; 
wktcrsv1Parser.WktContext = WktContext; 
wktcrsv1Parser.CompdcsContext = CompdcsContext; 
wktcrsv1Parser.ProjcsContext = ProjcsContext; 
wktcrsv1Parser.GeoccsContext = GeoccsContext; 
wktcrsv1Parser.GeogcsContext = GeogcsContext; 
wktcrsv1Parser.VertcsContext = VertcsContext; 
wktcrsv1Parser.LocalcsContext = LocalcsContext; 
wktcrsv1Parser.DatumContext = DatumContext; 
wktcrsv1Parser.VertdatumContext = VertdatumContext; 
wktcrsv1Parser.LocaldatumContext = LocaldatumContext; 
wktcrsv1Parser.SpheroidContext = SpheroidContext; 
wktcrsv1Parser.Towgs84Context = Towgs84Context; 
wktcrsv1Parser.AuthorityContext = AuthorityContext; 
wktcrsv1Parser.PrimemContext = PrimemContext; 
wktcrsv1Parser.UnitContext = UnitContext; 
wktcrsv1Parser.AxisContext = AxisContext; 
wktcrsv1Parser.ProjectionContext = ProjectionContext; 
wktcrsv1Parser.ParameterContext = ParameterContext; 
wktcrsv1Parser.AuthorityNameContext = AuthorityNameContext; 
wktcrsv1Parser.AxisOrientContext = AxisOrientContext; 
wktcrsv1Parser.EpsgCodeContext = EpsgCodeContext; 
wktcrsv1Parser.NameContext = NameContext; 
wktcrsv1Parser.NumberContext = NumberContext; 
wktcrsv1Parser.TypeContext = TypeContext; 
wktcrsv1Parser.SemiMajorAxisContext = SemiMajorAxisContext; 
wktcrsv1Parser.InverseFlatteningContext = InverseFlatteningContext; 
wktcrsv1Parser.DxContext = DxContext; 
wktcrsv1Parser.DyContext = DyContext; 
wktcrsv1Parser.DzContext = DzContext; 
wktcrsv1Parser.ExContext = ExContext; 
wktcrsv1Parser.EyContext = EyContext; 
wktcrsv1Parser.EzContext = EzContext; 
wktcrsv1Parser.PpmContext = PpmContext; 
wktcrsv1Parser.CodeContext = CodeContext; 
wktcrsv1Parser.LongitudeContext = LongitudeContext; 
wktcrsv1Parser.ConversionFactorContext = ConversionFactorContext; 
wktcrsv1Parser.ValueContext = ValueContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
