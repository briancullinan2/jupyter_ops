// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/wkt/wkt.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import wktListener from './wktListener.js';
const serializedATN = [4,1,31,375,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,1,0,5,0,58,8,0,10,0,12,0,61,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,81,8,1,1,2,1,2,1,3,1,3,3,3,87,8,
3,1,3,1,3,1,3,1,3,1,3,3,3,94,8,3,1,4,1,4,3,4,98,8,4,1,4,1,4,1,5,1,5,3,5,
104,8,5,1,5,1,5,1,6,1,6,3,6,110,8,6,1,6,1,6,1,7,1,7,3,7,116,8,7,1,7,1,7,
1,8,1,8,3,8,122,8,8,1,8,1,8,1,8,1,8,5,8,128,8,8,10,8,12,8,131,9,8,1,8,1,
8,1,8,3,8,136,8,8,1,9,1,9,3,9,140,8,9,1,9,1,9,1,9,1,9,5,9,146,8,9,10,9,12,
9,149,9,9,1,9,1,9,1,9,3,9,154,8,9,1,10,1,10,3,10,158,8,10,1,10,1,10,1,10,
1,10,5,10,164,8,10,10,10,12,10,167,9,10,1,10,1,10,1,10,3,10,172,8,10,1,11,
1,11,3,11,176,8,11,1,11,1,11,1,11,1,11,5,11,182,8,11,10,11,12,11,185,9,11,
1,11,1,11,1,11,3,11,190,8,11,1,12,1,12,3,12,194,8,12,1,12,1,12,1,13,1,13,
3,13,200,8,13,1,13,1,13,1,13,1,13,5,13,206,8,13,10,13,12,13,209,9,13,1,13,
1,13,1,13,3,13,214,8,13,1,14,1,14,1,14,3,14,219,8,14,1,15,1,15,1,15,1,15,
1,15,1,15,1,15,1,15,1,15,1,16,1,16,3,16,232,8,16,1,16,1,16,1,16,1,16,5,16,
238,8,16,10,16,12,16,241,9,16,1,16,1,16,1,16,3,16,246,8,16,1,17,1,17,3,17,
250,8,17,1,17,1,17,1,17,1,17,5,17,256,8,17,10,17,12,17,259,9,17,1,17,1,17,
1,17,3,17,264,8,17,1,18,1,18,1,18,3,18,269,8,18,1,19,1,19,3,19,273,8,19,
1,19,1,19,1,19,1,19,5,19,279,8,19,10,19,12,19,282,9,19,1,19,1,19,1,19,3,
19,287,8,19,1,20,1,20,3,20,291,8,20,1,21,1,21,3,21,295,8,21,1,21,1,21,1,
21,1,21,5,21,301,8,21,10,21,12,21,304,9,21,1,21,1,21,1,21,3,21,309,8,21,
1,22,1,22,3,22,313,8,22,1,22,1,22,1,22,1,22,5,22,319,8,22,10,22,12,22,322,
9,22,1,22,1,22,1,22,3,22,327,8,22,1,23,1,23,1,23,1,23,5,23,333,8,23,10,23,
12,23,336,9,23,1,23,1,23,1,23,3,23,341,8,23,1,24,1,24,1,24,1,24,5,24,347,
8,24,10,24,12,24,350,9,24,1,24,1,24,1,24,3,24,355,8,24,1,25,1,25,1,25,1,
25,1,25,1,25,3,25,363,8,25,1,26,1,26,1,26,3,26,368,8,26,1,26,3,26,371,8,
26,1,27,1,27,1,27,0,0,28,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,
36,38,40,42,44,46,48,50,52,54,0,2,1,0,25,27,2,0,1,1,28,30,412,0,59,1,0,0,
0,2,80,1,0,0,0,4,82,1,0,0,0,6,84,1,0,0,0,8,95,1,0,0,0,10,101,1,0,0,0,12,
107,1,0,0,0,14,113,1,0,0,0,16,119,1,0,0,0,18,137,1,0,0,0,20,155,1,0,0,0,
22,173,1,0,0,0,24,191,1,0,0,0,26,197,1,0,0,0,28,218,1,0,0,0,30,220,1,0,0,
0,32,229,1,0,0,0,34,247,1,0,0,0,36,268,1,0,0,0,38,270,1,0,0,0,40,290,1,0,
0,0,42,292,1,0,0,0,44,310,1,0,0,0,46,340,1,0,0,0,48,354,1,0,0,0,50,362,1,
0,0,0,52,364,1,0,0,0,54,372,1,0,0,0,56,58,3,2,1,0,57,56,1,0,0,0,58,61,1,
0,0,0,59,57,1,0,0,0,59,60,1,0,0,0,60,62,1,0,0,0,61,59,1,0,0,0,62,63,5,0,
0,1,63,1,1,0,0,0,64,81,3,6,3,0,65,81,3,8,4,0,66,81,3,10,5,0,67,81,3,12,6,
0,68,81,3,14,7,0,69,81,3,16,8,0,70,81,3,18,9,0,71,81,3,20,10,0,72,81,3,22,
11,0,73,81,3,24,12,0,74,81,3,26,13,0,75,81,3,32,16,0,76,81,3,34,17,0,77,
81,3,38,19,0,78,81,3,42,21,0,79,81,3,44,22,0,80,64,1,0,0,0,80,65,1,0,0,0,
80,66,1,0,0,0,80,67,1,0,0,0,80,68,1,0,0,0,80,69,1,0,0,0,80,70,1,0,0,0,80,
71,1,0,0,0,80,72,1,0,0,0,80,73,1,0,0,0,80,74,1,0,0,0,80,75,1,0,0,0,80,76,
1,0,0,0,80,77,1,0,0,0,80,78,1,0,0,0,80,79,1,0,0,0,81,3,1,0,0,0,82,83,7,0,
0,0,83,5,1,0,0,0,84,86,5,7,0,0,85,87,3,4,2,0,86,85,1,0,0,0,86,87,1,0,0,0,
87,93,1,0,0,0,88,89,5,5,0,0,89,90,3,52,26,0,90,91,5,6,0,0,91,94,1,0,0,0,
92,94,5,24,0,0,93,88,1,0,0,0,93,92,1,0,0,0,94,7,1,0,0,0,95,97,5,8,0,0,96,
98,3,4,2,0,97,96,1,0,0,0,97,98,1,0,0,0,98,99,1,0,0,0,99,100,3,48,24,0,100,
9,1,0,0,0,101,103,5,9,0,0,102,104,3,4,2,0,103,102,1,0,0,0,103,104,1,0,0,
0,104,105,1,0,0,0,105,106,3,48,24,0,106,11,1,0,0,0,107,109,5,10,0,0,108,
110,3,4,2,0,109,108,1,0,0,0,109,110,1,0,0,0,110,111,1,0,0,0,111,112,3,46,
23,0,112,13,1,0,0,0,113,115,5,11,0,0,114,116,3,4,2,0,115,114,1,0,0,0,115,
116,1,0,0,0,116,117,1,0,0,0,117,118,3,46,23,0,118,15,1,0,0,0,119,121,5,12,
0,0,120,122,3,4,2,0,121,120,1,0,0,0,121,122,1,0,0,0,122,135,1,0,0,0,123,
124,5,5,0,0,124,129,3,50,25,0,125,126,5,4,0,0,126,128,3,50,25,0,127,125,
1,0,0,0,128,131,1,0,0,0,129,127,1,0,0,0,129,130,1,0,0,0,130,132,1,0,0,0,
131,129,1,0,0,0,132,133,5,6,0,0,133,136,1,0,0,0,134,136,5,24,0,0,135,123,
1,0,0,0,135,134,1,0,0,0,136,17,1,0,0,0,137,139,5,13,0,0,138,140,3,4,2,0,
139,138,1,0,0,0,139,140,1,0,0,0,140,153,1,0,0,0,141,142,5,5,0,0,142,147,
3,48,24,0,143,144,5,4,0,0,144,146,3,48,24,0,145,143,1,0,0,0,146,149,1,0,
0,0,147,145,1,0,0,0,147,148,1,0,0,0,148,150,1,0,0,0,149,147,1,0,0,0,150,
151,5,6,0,0,151,154,1,0,0,0,152,154,5,24,0,0,153,141,1,0,0,0,153,152,1,0,
0,0,154,19,1,0,0,0,155,157,5,14,0,0,156,158,3,4,2,0,157,156,1,0,0,0,157,
158,1,0,0,0,158,171,1,0,0,0,159,160,5,5,0,0,160,165,3,46,23,0,161,162,5,
4,0,0,162,164,3,46,23,0,163,161,1,0,0,0,164,167,1,0,0,0,165,163,1,0,0,0,
165,166,1,0,0,0,166,168,1,0,0,0,167,165,1,0,0,0,168,169,5,6,0,0,169,172,
1,0,0,0,170,172,5,24,0,0,171,159,1,0,0,0,171,170,1,0,0,0,172,21,1,0,0,0,
173,175,5,15,0,0,174,176,3,4,2,0,175,174,1,0,0,0,175,176,1,0,0,0,176,189,
1,0,0,0,177,178,5,5,0,0,178,183,3,2,1,0,179,180,5,4,0,0,180,182,3,2,1,0,
181,179,1,0,0,0,182,185,1,0,0,0,183,181,1,0,0,0,183,184,1,0,0,0,184,186,
1,0,0,0,185,183,1,0,0,0,186,187,5,6,0,0,187,190,1,0,0,0,188,190,5,24,0,0,
189,177,1,0,0,0,189,188,1,0,0,0,190,23,1,0,0,0,191,193,5,16,0,0,192,194,
3,4,2,0,193,192,1,0,0,0,193,194,1,0,0,0,194,195,1,0,0,0,195,196,3,48,24,
0,196,25,1,0,0,0,197,199,5,17,0,0,198,200,3,4,2,0,199,198,1,0,0,0,199,200,
1,0,0,0,200,213,1,0,0,0,201,202,5,5,0,0,202,207,3,28,14,0,203,204,5,4,0,
0,204,206,3,28,14,0,205,203,1,0,0,0,206,209,1,0,0,0,207,205,1,0,0,0,207,
208,1,0,0,0,208,210,1,0,0,0,209,207,1,0,0,0,210,211,5,6,0,0,211,214,1,0,
0,0,212,214,5,24,0,0,213,201,1,0,0,0,213,212,1,0,0,0,214,27,1,0,0,0,215,
219,3,48,24,0,216,219,3,24,12,0,217,219,3,30,15,0,218,215,1,0,0,0,218,216,
1,0,0,0,218,217,1,0,0,0,219,29,1,0,0,0,220,221,5,18,0,0,221,222,5,5,0,0,
222,223,3,54,27,0,223,224,5,4,0,0,224,225,3,54,27,0,225,226,5,4,0,0,226,
227,3,54,27,0,227,228,5,6,0,0,228,31,1,0,0,0,229,231,5,19,0,0,230,232,3,
4,2,0,231,230,1,0,0,0,231,232,1,0,0,0,232,245,1,0,0,0,233,234,5,5,0,0,234,
239,3,36,18,0,235,236,5,4,0,0,236,238,3,36,18,0,237,235,1,0,0,0,238,241,
1,0,0,0,239,237,1,0,0,0,239,240,1,0,0,0,240,242,1,0,0,0,241,239,1,0,0,0,
242,243,5,6,0,0,243,246,1,0,0,0,244,246,5,24,0,0,245,233,1,0,0,0,245,244,
1,0,0,0,246,33,1,0,0,0,247,249,5,20,0,0,248,250,3,4,2,0,249,248,1,0,0,0,
249,250,1,0,0,0,250,263,1,0,0,0,251,252,5,5,0,0,252,257,3,36,18,0,253,254,
5,4,0,0,254,256,3,36,18,0,255,253,1,0,0,0,256,259,1,0,0,0,257,255,1,0,0,
0,257,258,1,0,0,0,258,260,1,0,0,0,259,257,1,0,0,0,260,261,5,6,0,0,261,264,
1,0,0,0,262,264,5,24,0,0,263,251,1,0,0,0,263,262,1,0,0,0,264,35,1,0,0,0,
265,269,3,48,24,0,266,269,3,24,12,0,267,269,3,26,13,0,268,265,1,0,0,0,268,
266,1,0,0,0,268,267,1,0,0,0,269,37,1,0,0,0,270,272,5,21,0,0,271,273,3,4,
2,0,272,271,1,0,0,0,272,273,1,0,0,0,273,286,1,0,0,0,274,275,5,5,0,0,275,
280,3,40,20,0,276,277,5,4,0,0,277,279,3,40,20,0,278,276,1,0,0,0,279,282,
1,0,0,0,280,278,1,0,0,0,280,281,1,0,0,0,281,283,1,0,0,0,282,280,1,0,0,0,
283,284,5,6,0,0,284,287,1,0,0,0,285,287,5,24,0,0,286,274,1,0,0,0,286,285,
1,0,0,0,287,39,1,0,0,0,288,291,3,46,23,0,289,291,3,32,16,0,290,288,1,0,0,
0,290,289,1,0,0,0,291,41,1,0,0,0,292,294,5,22,0,0,293,295,3,4,2,0,294,293,
1,0,0,0,294,295,1,0,0,0,295,308,1,0,0,0,296,297,5,5,0,0,297,302,3,46,23,
0,298,299,5,4,0,0,299,301,3,46,23,0,300,298,1,0,0,0,301,304,1,0,0,0,302,
300,1,0,0,0,302,303,1,0,0,0,303,305,1,0,0,0,304,302,1,0,0,0,305,306,5,6,
0,0,306,309,1,0,0,0,307,309,5,24,0,0,308,296,1,0,0,0,308,307,1,0,0,0,309,
43,1,0,0,0,310,312,5,23,0,0,311,313,3,4,2,0,312,311,1,0,0,0,312,313,1,0,
0,0,313,326,1,0,0,0,314,315,5,5,0,0,315,320,3,46,23,0,316,317,5,4,0,0,317,
319,3,46,23,0,318,316,1,0,0,0,319,322,1,0,0,0,320,318,1,0,0,0,320,321,1,
0,0,0,321,323,1,0,0,0,322,320,1,0,0,0,323,324,5,6,0,0,324,327,1,0,0,0,325,
327,5,24,0,0,326,314,1,0,0,0,326,325,1,0,0,0,327,45,1,0,0,0,328,329,5,5,
0,0,329,334,3,48,24,0,330,331,5,4,0,0,331,333,3,48,24,0,332,330,1,0,0,0,
333,336,1,0,0,0,334,332,1,0,0,0,334,335,1,0,0,0,335,337,1,0,0,0,336,334,
1,0,0,0,337,338,5,6,0,0,338,341,1,0,0,0,339,341,5,24,0,0,340,328,1,0,0,0,
340,339,1,0,0,0,341,47,1,0,0,0,342,343,5,5,0,0,343,348,3,52,26,0,344,345,
5,4,0,0,345,347,3,52,26,0,346,344,1,0,0,0,347,350,1,0,0,0,348,346,1,0,0,
0,348,349,1,0,0,0,349,351,1,0,0,0,350,348,1,0,0,0,351,352,5,6,0,0,352,355,
1,0,0,0,353,355,5,24,0,0,354,342,1,0,0,0,354,353,1,0,0,0,355,49,1,0,0,0,
356,363,3,52,26,0,357,358,5,5,0,0,358,359,3,52,26,0,359,360,5,6,0,0,360,
363,1,0,0,0,361,363,5,24,0,0,362,356,1,0,0,0,362,357,1,0,0,0,362,361,1,0,
0,0,363,51,1,0,0,0,364,365,3,54,27,0,365,367,3,54,27,0,366,368,3,54,27,0,
367,366,1,0,0,0,367,368,1,0,0,0,368,370,1,0,0,0,369,371,3,54,27,0,370,369,
1,0,0,0,370,371,1,0,0,0,371,53,1,0,0,0,372,373,7,1,0,0,373,55,1,0,0,0,49,
59,80,86,93,97,103,109,115,121,129,135,139,147,153,157,165,171,175,183,189,
193,199,207,213,218,231,239,245,249,257,263,268,272,280,286,290,294,302,
308,312,320,326,334,340,348,354,362,367,370];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class wktParser extends antlr4.Parser {

    static grammarFileName = "wkt.g4";
    static literalNames = [ null, null, null, null, "','", "'('", "')'" ];
    static symbolicNames = [ null, "DECIMAL", "INTEGERPART", "DECIMALPART", 
                             "COMMA", "LPAR", "RPAR", "POINT", "LINESTRING", 
                             "LINEARRING", "POLYGON", "TRIANGLE", "MULTIPOINT", 
                             "MULTILINESTRING", "MULTIPOLYGON", "GEOMETRYCOLLECTION", 
                             "CIRCULARSTRING", "COMPOUNDCURVE", "CLOTHOID", 
                             "CURVEPOLYGON", "MULTICURVE", "MULTISURFACE", 
                             "POLYHEDRALSURFACE", "TIN", "EMPTY_", "ZM_", 
                             "Z_", "M_", "NAN_", "NEG_INF_", "INF_", "WS" ];
    static ruleNames = [ "file_", "geometry", "dim", "pointGeometry", "lineStringGeometry", 
                         "linearRingGeometry", "polygonGeometry", "triangleGeometry", 
                         "multiPointGeometry", "multiLineStringGeometry", 
                         "multiPolygonGeometry", "geometryCollection", "circularStringGeometry", 
                         "compoundCurveGeometry", "compoundCurveMember", 
                         "clothoidGeometry", "curvePolygonGeometry", "multiCurveGeometry", 
                         "curveMember", "multiSurfaceGeometry", "surfaceMember", 
                         "polyhedralSurfaceGeometry", "tinGeometry", "polygonText", 
                         "lineStringText", "pointOrClosedPoint", "point", 
                         "ordinate" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = wktParser.ruleNames;
        this.literalNames = wktParser.literalNames;
        this.symbolicNames = wktParser.symbolicNames;
    }



	file_() {
	    let localctx = new File_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, wktParser.RULE_file_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 16514944) !== 0)) {
	            this.state = 56;
	            this.geometry();
	            this.state = 61;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 62;
	        this.match(wktParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	geometry() {
	    let localctx = new GeometryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, wktParser.RULE_geometry);
	    try {
	        this.state = 80;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 64;
	            this.pointGeometry();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 65;
	            this.lineStringGeometry();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 66;
	            this.linearRingGeometry();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 67;
	            this.polygonGeometry();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 68;
	            this.triangleGeometry();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 69;
	            this.multiPointGeometry();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 70;
	            this.multiLineStringGeometry();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 71;
	            this.multiPolygonGeometry();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 72;
	            this.geometryCollection();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 73;
	            this.circularStringGeometry();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 74;
	            this.compoundCurveGeometry();
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 75;
	            this.curvePolygonGeometry();
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 76;
	            this.multiCurveGeometry();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 77;
	            this.multiSurfaceGeometry();
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 78;
	            this.polyhedralSurfaceGeometry();
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 79;
	            this.tinGeometry();
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



	dim() {
	    let localctx = new DimContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, wktParser.RULE_dim);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 234881024) !== 0))) {
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



	pointGeometry() {
	    let localctx = new PointGeometryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, wktParser.RULE_pointGeometry);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.match(wktParser.POINT);
	        this.state = 86;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 234881024) !== 0)) {
	            this.state = 85;
	            this.dim();
	        }

	        this.state = 93;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.state = 88;
	            this.match(wktParser.LPAR);
	            this.state = 89;
	            this.point();
	            this.state = 90;
	            this.match(wktParser.RPAR);
	            break;
	        case 24:
	            this.state = 92;
	            this.match(wktParser.EMPTY_);
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



	lineStringGeometry() {
	    let localctx = new LineStringGeometryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, wktParser.RULE_lineStringGeometry);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this.match(wktParser.LINESTRING);
	        this.state = 97;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 234881024) !== 0)) {
	            this.state = 96;
	            this.dim();
	        }

	        this.state = 99;
	        this.lineStringText();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	linearRingGeometry() {
	    let localctx = new LinearRingGeometryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, wktParser.RULE_linearRingGeometry);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.match(wktParser.LINEARRING);
	        this.state = 103;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 234881024) !== 0)) {
	            this.state = 102;
	            this.dim();
	        }

	        this.state = 105;
	        this.lineStringText();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	polygonGeometry() {
	    let localctx = new PolygonGeometryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, wktParser.RULE_polygonGeometry);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this.match(wktParser.POLYGON);
	        this.state = 109;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 234881024) !== 0)) {
	            this.state = 108;
	            this.dim();
	        }

	        this.state = 111;
	        this.polygonText();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	triangleGeometry() {
	    let localctx = new TriangleGeometryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, wktParser.RULE_triangleGeometry);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        this.match(wktParser.TRIANGLE);
	        this.state = 115;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 234881024) !== 0)) {
	            this.state = 114;
	            this.dim();
	        }

	        this.state = 117;
	        this.polygonText();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	multiPointGeometry() {
	    let localctx = new MultiPointGeometryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, wktParser.RULE_multiPointGeometry);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        this.match(wktParser.MULTIPOINT);
	        this.state = 121;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 234881024) !== 0)) {
	            this.state = 120;
	            this.dim();
	        }

	        this.state = 135;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.state = 123;
	            this.match(wktParser.LPAR);
	            this.state = 124;
	            this.pointOrClosedPoint();
	            this.state = 129;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4) {
	                this.state = 125;
	                this.match(wktParser.COMMA);
	                this.state = 126;
	                this.pointOrClosedPoint();
	                this.state = 131;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 132;
	            this.match(wktParser.RPAR);
	            break;
	        case 24:
	            this.state = 134;
	            this.match(wktParser.EMPTY_);
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



	multiLineStringGeometry() {
	    let localctx = new MultiLineStringGeometryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, wktParser.RULE_multiLineStringGeometry);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this.match(wktParser.MULTILINESTRING);
	        this.state = 139;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 234881024) !== 0)) {
	            this.state = 138;
	            this.dim();
	        }

	        this.state = 153;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.state = 141;
	            this.match(wktParser.LPAR);
	            this.state = 142;
	            this.lineStringText();
	            this.state = 147;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4) {
	                this.state = 143;
	                this.match(wktParser.COMMA);
	                this.state = 144;
	                this.lineStringText();
	                this.state = 149;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 150;
	            this.match(wktParser.RPAR);
	            break;
	        case 24:
	            this.state = 152;
	            this.match(wktParser.EMPTY_);
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



	multiPolygonGeometry() {
	    let localctx = new MultiPolygonGeometryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, wktParser.RULE_multiPolygonGeometry);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        this.match(wktParser.MULTIPOLYGON);
	        this.state = 157;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 234881024) !== 0)) {
	            this.state = 156;
	            this.dim();
	        }

	        this.state = 171;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.state = 159;
	            this.match(wktParser.LPAR);
	            this.state = 160;
	            this.polygonText();
	            this.state = 165;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4) {
	                this.state = 161;
	                this.match(wktParser.COMMA);
	                this.state = 162;
	                this.polygonText();
	                this.state = 167;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 168;
	            this.match(wktParser.RPAR);
	            break;
	        case 24:
	            this.state = 170;
	            this.match(wktParser.EMPTY_);
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



	geometryCollection() {
	    let localctx = new GeometryCollectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, wktParser.RULE_geometryCollection);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 173;
	        this.match(wktParser.GEOMETRYCOLLECTION);
	        this.state = 175;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 234881024) !== 0)) {
	            this.state = 174;
	            this.dim();
	        }

	        this.state = 189;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.state = 177;
	            this.match(wktParser.LPAR);
	            this.state = 178;
	            this.geometry();
	            this.state = 183;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4) {
	                this.state = 179;
	                this.match(wktParser.COMMA);
	                this.state = 180;
	                this.geometry();
	                this.state = 185;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 186;
	            this.match(wktParser.RPAR);
	            break;
	        case 24:
	            this.state = 188;
	            this.match(wktParser.EMPTY_);
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



	circularStringGeometry() {
	    let localctx = new CircularStringGeometryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, wktParser.RULE_circularStringGeometry);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 191;
	        this.match(wktParser.CIRCULARSTRING);
	        this.state = 193;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 234881024) !== 0)) {
	            this.state = 192;
	            this.dim();
	        }

	        this.state = 195;
	        this.lineStringText();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	compoundCurveGeometry() {
	    let localctx = new CompoundCurveGeometryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, wktParser.RULE_compoundCurveGeometry);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 197;
	        this.match(wktParser.COMPOUNDCURVE);
	        this.state = 199;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 234881024) !== 0)) {
	            this.state = 198;
	            this.dim();
	        }

	        this.state = 213;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.state = 201;
	            this.match(wktParser.LPAR);
	            this.state = 202;
	            this.compoundCurveMember();
	            this.state = 207;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4) {
	                this.state = 203;
	                this.match(wktParser.COMMA);
	                this.state = 204;
	                this.compoundCurveMember();
	                this.state = 209;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 210;
	            this.match(wktParser.RPAR);
	            break;
	        case 24:
	            this.state = 212;
	            this.match(wktParser.EMPTY_);
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



	compoundCurveMember() {
	    let localctx = new CompoundCurveMemberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, wktParser.RULE_compoundCurveMember);
	    try {
	        this.state = 218;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	        case 24:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 215;
	            this.lineStringText();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 216;
	            this.circularStringGeometry();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 217;
	            this.clothoidGeometry();
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



	clothoidGeometry() {
	    let localctx = new ClothoidGeometryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, wktParser.RULE_clothoidGeometry);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 220;
	        this.match(wktParser.CLOTHOID);
	        this.state = 221;
	        this.match(wktParser.LPAR);
	        this.state = 222;
	        this.ordinate();
	        this.state = 223;
	        this.match(wktParser.COMMA);
	        this.state = 224;
	        this.ordinate();
	        this.state = 225;
	        this.match(wktParser.COMMA);
	        this.state = 226;
	        this.ordinate();
	        this.state = 227;
	        this.match(wktParser.RPAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	curvePolygonGeometry() {
	    let localctx = new CurvePolygonGeometryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, wktParser.RULE_curvePolygonGeometry);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 229;
	        this.match(wktParser.CURVEPOLYGON);
	        this.state = 231;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 234881024) !== 0)) {
	            this.state = 230;
	            this.dim();
	        }

	        this.state = 245;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.state = 233;
	            this.match(wktParser.LPAR);
	            this.state = 234;
	            this.curveMember();
	            this.state = 239;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4) {
	                this.state = 235;
	                this.match(wktParser.COMMA);
	                this.state = 236;
	                this.curveMember();
	                this.state = 241;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 242;
	            this.match(wktParser.RPAR);
	            break;
	        case 24:
	            this.state = 244;
	            this.match(wktParser.EMPTY_);
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



	multiCurveGeometry() {
	    let localctx = new MultiCurveGeometryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, wktParser.RULE_multiCurveGeometry);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 247;
	        this.match(wktParser.MULTICURVE);
	        this.state = 249;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 234881024) !== 0)) {
	            this.state = 248;
	            this.dim();
	        }

	        this.state = 263;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.state = 251;
	            this.match(wktParser.LPAR);
	            this.state = 252;
	            this.curveMember();
	            this.state = 257;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4) {
	                this.state = 253;
	                this.match(wktParser.COMMA);
	                this.state = 254;
	                this.curveMember();
	                this.state = 259;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 260;
	            this.match(wktParser.RPAR);
	            break;
	        case 24:
	            this.state = 262;
	            this.match(wktParser.EMPTY_);
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



	curveMember() {
	    let localctx = new CurveMemberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, wktParser.RULE_curveMember);
	    try {
	        this.state = 268;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	        case 24:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 265;
	            this.lineStringText();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 266;
	            this.circularStringGeometry();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 267;
	            this.compoundCurveGeometry();
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



	multiSurfaceGeometry() {
	    let localctx = new MultiSurfaceGeometryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, wktParser.RULE_multiSurfaceGeometry);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 270;
	        this.match(wktParser.MULTISURFACE);
	        this.state = 272;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 234881024) !== 0)) {
	            this.state = 271;
	            this.dim();
	        }

	        this.state = 286;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.state = 274;
	            this.match(wktParser.LPAR);
	            this.state = 275;
	            this.surfaceMember();
	            this.state = 280;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4) {
	                this.state = 276;
	                this.match(wktParser.COMMA);
	                this.state = 277;
	                this.surfaceMember();
	                this.state = 282;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 283;
	            this.match(wktParser.RPAR);
	            break;
	        case 24:
	            this.state = 285;
	            this.match(wktParser.EMPTY_);
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



	surfaceMember() {
	    let localctx = new SurfaceMemberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, wktParser.RULE_surfaceMember);
	    try {
	        this.state = 290;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	        case 24:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 288;
	            this.polygonText();
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 289;
	            this.curvePolygonGeometry();
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



	polyhedralSurfaceGeometry() {
	    let localctx = new PolyhedralSurfaceGeometryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, wktParser.RULE_polyhedralSurfaceGeometry);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 292;
	        this.match(wktParser.POLYHEDRALSURFACE);
	        this.state = 294;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 234881024) !== 0)) {
	            this.state = 293;
	            this.dim();
	        }

	        this.state = 308;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.state = 296;
	            this.match(wktParser.LPAR);
	            this.state = 297;
	            this.polygonText();
	            this.state = 302;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4) {
	                this.state = 298;
	                this.match(wktParser.COMMA);
	                this.state = 299;
	                this.polygonText();
	                this.state = 304;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 305;
	            this.match(wktParser.RPAR);
	            break;
	        case 24:
	            this.state = 307;
	            this.match(wktParser.EMPTY_);
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



	tinGeometry() {
	    let localctx = new TinGeometryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, wktParser.RULE_tinGeometry);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 310;
	        this.match(wktParser.TIN);
	        this.state = 312;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 234881024) !== 0)) {
	            this.state = 311;
	            this.dim();
	        }

	        this.state = 326;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.state = 314;
	            this.match(wktParser.LPAR);
	            this.state = 315;
	            this.polygonText();
	            this.state = 320;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4) {
	                this.state = 316;
	                this.match(wktParser.COMMA);
	                this.state = 317;
	                this.polygonText();
	                this.state = 322;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 323;
	            this.match(wktParser.RPAR);
	            break;
	        case 24:
	            this.state = 325;
	            this.match(wktParser.EMPTY_);
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



	polygonText() {
	    let localctx = new PolygonTextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, wktParser.RULE_polygonText);
	    var _la = 0;
	    try {
	        this.state = 340;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 328;
	            this.match(wktParser.LPAR);
	            this.state = 329;
	            this.lineStringText();
	            this.state = 334;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4) {
	                this.state = 330;
	                this.match(wktParser.COMMA);
	                this.state = 331;
	                this.lineStringText();
	                this.state = 336;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 337;
	            this.match(wktParser.RPAR);
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 339;
	            this.match(wktParser.EMPTY_);
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



	lineStringText() {
	    let localctx = new LineStringTextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, wktParser.RULE_lineStringText);
	    var _la = 0;
	    try {
	        this.state = 354;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 342;
	            this.match(wktParser.LPAR);
	            this.state = 343;
	            this.point();
	            this.state = 348;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4) {
	                this.state = 344;
	                this.match(wktParser.COMMA);
	                this.state = 345;
	                this.point();
	                this.state = 350;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 351;
	            this.match(wktParser.RPAR);
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 353;
	            this.match(wktParser.EMPTY_);
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



	pointOrClosedPoint() {
	    let localctx = new PointOrClosedPointContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, wktParser.RULE_pointOrClosedPoint);
	    try {
	        this.state = 362;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 28:
	        case 29:
	        case 30:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 356;
	            this.point();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 357;
	            this.match(wktParser.LPAR);
	            this.state = 358;
	            this.point();
	            this.state = 359;
	            this.match(wktParser.RPAR);
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 361;
	            this.match(wktParser.EMPTY_);
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



	point() {
	    let localctx = new PointContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, wktParser.RULE_point);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 364;
	        this.ordinate();
	        this.state = 365;
	        this.ordinate();
	        this.state = 367;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,47,this._ctx);
	        if(la_===1) {
	            this.state = 366;
	            this.ordinate();

	        }
	        this.state = 370;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1879048194) !== 0)) {
	            this.state = 369;
	            this.ordinate();
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



	ordinate() {
	    let localctx = new OrdinateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, wktParser.RULE_ordinate);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 372;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1879048194) !== 0))) {
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

wktParser.EOF = antlr4.Token.EOF;
wktParser.DECIMAL = 1;
wktParser.INTEGERPART = 2;
wktParser.DECIMALPART = 3;
wktParser.COMMA = 4;
wktParser.LPAR = 5;
wktParser.RPAR = 6;
wktParser.POINT = 7;
wktParser.LINESTRING = 8;
wktParser.LINEARRING = 9;
wktParser.POLYGON = 10;
wktParser.TRIANGLE = 11;
wktParser.MULTIPOINT = 12;
wktParser.MULTILINESTRING = 13;
wktParser.MULTIPOLYGON = 14;
wktParser.GEOMETRYCOLLECTION = 15;
wktParser.CIRCULARSTRING = 16;
wktParser.COMPOUNDCURVE = 17;
wktParser.CLOTHOID = 18;
wktParser.CURVEPOLYGON = 19;
wktParser.MULTICURVE = 20;
wktParser.MULTISURFACE = 21;
wktParser.POLYHEDRALSURFACE = 22;
wktParser.TIN = 23;
wktParser.EMPTY_ = 24;
wktParser.ZM_ = 25;
wktParser.Z_ = 26;
wktParser.M_ = 27;
wktParser.NAN_ = 28;
wktParser.NEG_INF_ = 29;
wktParser.INF_ = 30;
wktParser.WS = 31;

wktParser.RULE_file_ = 0;
wktParser.RULE_geometry = 1;
wktParser.RULE_dim = 2;
wktParser.RULE_pointGeometry = 3;
wktParser.RULE_lineStringGeometry = 4;
wktParser.RULE_linearRingGeometry = 5;
wktParser.RULE_polygonGeometry = 6;
wktParser.RULE_triangleGeometry = 7;
wktParser.RULE_multiPointGeometry = 8;
wktParser.RULE_multiLineStringGeometry = 9;
wktParser.RULE_multiPolygonGeometry = 10;
wktParser.RULE_geometryCollection = 11;
wktParser.RULE_circularStringGeometry = 12;
wktParser.RULE_compoundCurveGeometry = 13;
wktParser.RULE_compoundCurveMember = 14;
wktParser.RULE_clothoidGeometry = 15;
wktParser.RULE_curvePolygonGeometry = 16;
wktParser.RULE_multiCurveGeometry = 17;
wktParser.RULE_curveMember = 18;
wktParser.RULE_multiSurfaceGeometry = 19;
wktParser.RULE_surfaceMember = 20;
wktParser.RULE_polyhedralSurfaceGeometry = 21;
wktParser.RULE_tinGeometry = 22;
wktParser.RULE_polygonText = 23;
wktParser.RULE_lineStringText = 24;
wktParser.RULE_pointOrClosedPoint = 25;
wktParser.RULE_point = 26;
wktParser.RULE_ordinate = 27;

class File_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktParser.RULE_file_;
    }

	EOF() {
	    return this.getToken(wktParser.EOF, 0);
	};

	geometry = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(GeometryContext);
	    } else {
	        return this.getTypedRuleContext(GeometryContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.enterFile_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.exitFile_(this);
		}
	}


}



class GeometryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktParser.RULE_geometry;
    }

	pointGeometry() {
	    return this.getTypedRuleContext(PointGeometryContext,0);
	};

	lineStringGeometry() {
	    return this.getTypedRuleContext(LineStringGeometryContext,0);
	};

	linearRingGeometry() {
	    return this.getTypedRuleContext(LinearRingGeometryContext,0);
	};

	polygonGeometry() {
	    return this.getTypedRuleContext(PolygonGeometryContext,0);
	};

	triangleGeometry() {
	    return this.getTypedRuleContext(TriangleGeometryContext,0);
	};

	multiPointGeometry() {
	    return this.getTypedRuleContext(MultiPointGeometryContext,0);
	};

	multiLineStringGeometry() {
	    return this.getTypedRuleContext(MultiLineStringGeometryContext,0);
	};

	multiPolygonGeometry() {
	    return this.getTypedRuleContext(MultiPolygonGeometryContext,0);
	};

	geometryCollection() {
	    return this.getTypedRuleContext(GeometryCollectionContext,0);
	};

	circularStringGeometry() {
	    return this.getTypedRuleContext(CircularStringGeometryContext,0);
	};

	compoundCurveGeometry() {
	    return this.getTypedRuleContext(CompoundCurveGeometryContext,0);
	};

	curvePolygonGeometry() {
	    return this.getTypedRuleContext(CurvePolygonGeometryContext,0);
	};

	multiCurveGeometry() {
	    return this.getTypedRuleContext(MultiCurveGeometryContext,0);
	};

	multiSurfaceGeometry() {
	    return this.getTypedRuleContext(MultiSurfaceGeometryContext,0);
	};

	polyhedralSurfaceGeometry() {
	    return this.getTypedRuleContext(PolyhedralSurfaceGeometryContext,0);
	};

	tinGeometry() {
	    return this.getTypedRuleContext(TinGeometryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.enterGeometry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.exitGeometry(this);
		}
	}


}



class DimContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktParser.RULE_dim;
    }

	Z_() {
	    return this.getToken(wktParser.Z_, 0);
	};

	M_() {
	    return this.getToken(wktParser.M_, 0);
	};

	ZM_() {
	    return this.getToken(wktParser.ZM_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.enterDim(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.exitDim(this);
		}
	}


}



class PointGeometryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktParser.RULE_pointGeometry;
    }

	POINT() {
	    return this.getToken(wktParser.POINT, 0);
	};

	LPAR() {
	    return this.getToken(wktParser.LPAR, 0);
	};

	point() {
	    return this.getTypedRuleContext(PointContext,0);
	};

	RPAR() {
	    return this.getToken(wktParser.RPAR, 0);
	};

	EMPTY_() {
	    return this.getToken(wktParser.EMPTY_, 0);
	};

	dim() {
	    return this.getTypedRuleContext(DimContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.enterPointGeometry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.exitPointGeometry(this);
		}
	}


}



class LineStringGeometryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktParser.RULE_lineStringGeometry;
    }

	LINESTRING() {
	    return this.getToken(wktParser.LINESTRING, 0);
	};

	lineStringText() {
	    return this.getTypedRuleContext(LineStringTextContext,0);
	};

	dim() {
	    return this.getTypedRuleContext(DimContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.enterLineStringGeometry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.exitLineStringGeometry(this);
		}
	}


}



class LinearRingGeometryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktParser.RULE_linearRingGeometry;
    }

	LINEARRING() {
	    return this.getToken(wktParser.LINEARRING, 0);
	};

	lineStringText() {
	    return this.getTypedRuleContext(LineStringTextContext,0);
	};

	dim() {
	    return this.getTypedRuleContext(DimContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.enterLinearRingGeometry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.exitLinearRingGeometry(this);
		}
	}


}



class PolygonGeometryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktParser.RULE_polygonGeometry;
    }

	POLYGON() {
	    return this.getToken(wktParser.POLYGON, 0);
	};

	polygonText() {
	    return this.getTypedRuleContext(PolygonTextContext,0);
	};

	dim() {
	    return this.getTypedRuleContext(DimContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.enterPolygonGeometry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.exitPolygonGeometry(this);
		}
	}


}



class TriangleGeometryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktParser.RULE_triangleGeometry;
    }

	TRIANGLE() {
	    return this.getToken(wktParser.TRIANGLE, 0);
	};

	polygonText() {
	    return this.getTypedRuleContext(PolygonTextContext,0);
	};

	dim() {
	    return this.getTypedRuleContext(DimContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.enterTriangleGeometry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.exitTriangleGeometry(this);
		}
	}


}



class MultiPointGeometryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktParser.RULE_multiPointGeometry;
    }

	MULTIPOINT() {
	    return this.getToken(wktParser.MULTIPOINT, 0);
	};

	LPAR() {
	    return this.getToken(wktParser.LPAR, 0);
	};

	pointOrClosedPoint = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PointOrClosedPointContext);
	    } else {
	        return this.getTypedRuleContext(PointOrClosedPointContext,i);
	    }
	};

	RPAR() {
	    return this.getToken(wktParser.RPAR, 0);
	};

	EMPTY_() {
	    return this.getToken(wktParser.EMPTY_, 0);
	};

	dim() {
	    return this.getTypedRuleContext(DimContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wktParser.COMMA);
	    } else {
	        return this.getToken(wktParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.enterMultiPointGeometry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.exitMultiPointGeometry(this);
		}
	}


}



class MultiLineStringGeometryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktParser.RULE_multiLineStringGeometry;
    }

	MULTILINESTRING() {
	    return this.getToken(wktParser.MULTILINESTRING, 0);
	};

	LPAR() {
	    return this.getToken(wktParser.LPAR, 0);
	};

	lineStringText = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineStringTextContext);
	    } else {
	        return this.getTypedRuleContext(LineStringTextContext,i);
	    }
	};

	RPAR() {
	    return this.getToken(wktParser.RPAR, 0);
	};

	EMPTY_() {
	    return this.getToken(wktParser.EMPTY_, 0);
	};

	dim() {
	    return this.getTypedRuleContext(DimContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wktParser.COMMA);
	    } else {
	        return this.getToken(wktParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.enterMultiLineStringGeometry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.exitMultiLineStringGeometry(this);
		}
	}


}



class MultiPolygonGeometryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktParser.RULE_multiPolygonGeometry;
    }

	MULTIPOLYGON() {
	    return this.getToken(wktParser.MULTIPOLYGON, 0);
	};

	LPAR() {
	    return this.getToken(wktParser.LPAR, 0);
	};

	polygonText = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PolygonTextContext);
	    } else {
	        return this.getTypedRuleContext(PolygonTextContext,i);
	    }
	};

	RPAR() {
	    return this.getToken(wktParser.RPAR, 0);
	};

	EMPTY_() {
	    return this.getToken(wktParser.EMPTY_, 0);
	};

	dim() {
	    return this.getTypedRuleContext(DimContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wktParser.COMMA);
	    } else {
	        return this.getToken(wktParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.enterMultiPolygonGeometry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.exitMultiPolygonGeometry(this);
		}
	}


}



class GeometryCollectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktParser.RULE_geometryCollection;
    }

	GEOMETRYCOLLECTION() {
	    return this.getToken(wktParser.GEOMETRYCOLLECTION, 0);
	};

	LPAR() {
	    return this.getToken(wktParser.LPAR, 0);
	};

	geometry = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(GeometryContext);
	    } else {
	        return this.getTypedRuleContext(GeometryContext,i);
	    }
	};

	RPAR() {
	    return this.getToken(wktParser.RPAR, 0);
	};

	EMPTY_() {
	    return this.getToken(wktParser.EMPTY_, 0);
	};

	dim() {
	    return this.getTypedRuleContext(DimContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wktParser.COMMA);
	    } else {
	        return this.getToken(wktParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.enterGeometryCollection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.exitGeometryCollection(this);
		}
	}


}



class CircularStringGeometryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktParser.RULE_circularStringGeometry;
    }

	CIRCULARSTRING() {
	    return this.getToken(wktParser.CIRCULARSTRING, 0);
	};

	lineStringText() {
	    return this.getTypedRuleContext(LineStringTextContext,0);
	};

	dim() {
	    return this.getTypedRuleContext(DimContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.enterCircularStringGeometry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.exitCircularStringGeometry(this);
		}
	}


}



class CompoundCurveGeometryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktParser.RULE_compoundCurveGeometry;
    }

	COMPOUNDCURVE() {
	    return this.getToken(wktParser.COMPOUNDCURVE, 0);
	};

	LPAR() {
	    return this.getToken(wktParser.LPAR, 0);
	};

	compoundCurveMember = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CompoundCurveMemberContext);
	    } else {
	        return this.getTypedRuleContext(CompoundCurveMemberContext,i);
	    }
	};

	RPAR() {
	    return this.getToken(wktParser.RPAR, 0);
	};

	EMPTY_() {
	    return this.getToken(wktParser.EMPTY_, 0);
	};

	dim() {
	    return this.getTypedRuleContext(DimContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wktParser.COMMA);
	    } else {
	        return this.getToken(wktParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.enterCompoundCurveGeometry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.exitCompoundCurveGeometry(this);
		}
	}


}



class CompoundCurveMemberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktParser.RULE_compoundCurveMember;
    }

	lineStringText() {
	    return this.getTypedRuleContext(LineStringTextContext,0);
	};

	circularStringGeometry() {
	    return this.getTypedRuleContext(CircularStringGeometryContext,0);
	};

	clothoidGeometry() {
	    return this.getTypedRuleContext(ClothoidGeometryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.enterCompoundCurveMember(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.exitCompoundCurveMember(this);
		}
	}


}



class ClothoidGeometryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktParser.RULE_clothoidGeometry;
    }

	CLOTHOID() {
	    return this.getToken(wktParser.CLOTHOID, 0);
	};

	LPAR() {
	    return this.getToken(wktParser.LPAR, 0);
	};

	ordinate = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OrdinateContext);
	    } else {
	        return this.getTypedRuleContext(OrdinateContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wktParser.COMMA);
	    } else {
	        return this.getToken(wktParser.COMMA, i);
	    }
	};


	RPAR() {
	    return this.getToken(wktParser.RPAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.enterClothoidGeometry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.exitClothoidGeometry(this);
		}
	}


}



class CurvePolygonGeometryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktParser.RULE_curvePolygonGeometry;
    }

	CURVEPOLYGON() {
	    return this.getToken(wktParser.CURVEPOLYGON, 0);
	};

	LPAR() {
	    return this.getToken(wktParser.LPAR, 0);
	};

	curveMember = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CurveMemberContext);
	    } else {
	        return this.getTypedRuleContext(CurveMemberContext,i);
	    }
	};

	RPAR() {
	    return this.getToken(wktParser.RPAR, 0);
	};

	EMPTY_() {
	    return this.getToken(wktParser.EMPTY_, 0);
	};

	dim() {
	    return this.getTypedRuleContext(DimContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wktParser.COMMA);
	    } else {
	        return this.getToken(wktParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.enterCurvePolygonGeometry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.exitCurvePolygonGeometry(this);
		}
	}


}



class MultiCurveGeometryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktParser.RULE_multiCurveGeometry;
    }

	MULTICURVE() {
	    return this.getToken(wktParser.MULTICURVE, 0);
	};

	LPAR() {
	    return this.getToken(wktParser.LPAR, 0);
	};

	curveMember = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CurveMemberContext);
	    } else {
	        return this.getTypedRuleContext(CurveMemberContext,i);
	    }
	};

	RPAR() {
	    return this.getToken(wktParser.RPAR, 0);
	};

	EMPTY_() {
	    return this.getToken(wktParser.EMPTY_, 0);
	};

	dim() {
	    return this.getTypedRuleContext(DimContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wktParser.COMMA);
	    } else {
	        return this.getToken(wktParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.enterMultiCurveGeometry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.exitMultiCurveGeometry(this);
		}
	}


}



class CurveMemberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktParser.RULE_curveMember;
    }

	lineStringText() {
	    return this.getTypedRuleContext(LineStringTextContext,0);
	};

	circularStringGeometry() {
	    return this.getTypedRuleContext(CircularStringGeometryContext,0);
	};

	compoundCurveGeometry() {
	    return this.getTypedRuleContext(CompoundCurveGeometryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.enterCurveMember(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.exitCurveMember(this);
		}
	}


}



class MultiSurfaceGeometryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktParser.RULE_multiSurfaceGeometry;
    }

	MULTISURFACE() {
	    return this.getToken(wktParser.MULTISURFACE, 0);
	};

	LPAR() {
	    return this.getToken(wktParser.LPAR, 0);
	};

	surfaceMember = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SurfaceMemberContext);
	    } else {
	        return this.getTypedRuleContext(SurfaceMemberContext,i);
	    }
	};

	RPAR() {
	    return this.getToken(wktParser.RPAR, 0);
	};

	EMPTY_() {
	    return this.getToken(wktParser.EMPTY_, 0);
	};

	dim() {
	    return this.getTypedRuleContext(DimContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wktParser.COMMA);
	    } else {
	        return this.getToken(wktParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.enterMultiSurfaceGeometry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.exitMultiSurfaceGeometry(this);
		}
	}


}



class SurfaceMemberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktParser.RULE_surfaceMember;
    }

	polygonText() {
	    return this.getTypedRuleContext(PolygonTextContext,0);
	};

	curvePolygonGeometry() {
	    return this.getTypedRuleContext(CurvePolygonGeometryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.enterSurfaceMember(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.exitSurfaceMember(this);
		}
	}


}



class PolyhedralSurfaceGeometryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktParser.RULE_polyhedralSurfaceGeometry;
    }

	POLYHEDRALSURFACE() {
	    return this.getToken(wktParser.POLYHEDRALSURFACE, 0);
	};

	LPAR() {
	    return this.getToken(wktParser.LPAR, 0);
	};

	polygonText = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PolygonTextContext);
	    } else {
	        return this.getTypedRuleContext(PolygonTextContext,i);
	    }
	};

	RPAR() {
	    return this.getToken(wktParser.RPAR, 0);
	};

	EMPTY_() {
	    return this.getToken(wktParser.EMPTY_, 0);
	};

	dim() {
	    return this.getTypedRuleContext(DimContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wktParser.COMMA);
	    } else {
	        return this.getToken(wktParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.enterPolyhedralSurfaceGeometry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.exitPolyhedralSurfaceGeometry(this);
		}
	}


}



class TinGeometryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktParser.RULE_tinGeometry;
    }

	TIN() {
	    return this.getToken(wktParser.TIN, 0);
	};

	LPAR() {
	    return this.getToken(wktParser.LPAR, 0);
	};

	polygonText = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PolygonTextContext);
	    } else {
	        return this.getTypedRuleContext(PolygonTextContext,i);
	    }
	};

	RPAR() {
	    return this.getToken(wktParser.RPAR, 0);
	};

	EMPTY_() {
	    return this.getToken(wktParser.EMPTY_, 0);
	};

	dim() {
	    return this.getTypedRuleContext(DimContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wktParser.COMMA);
	    } else {
	        return this.getToken(wktParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.enterTinGeometry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.exitTinGeometry(this);
		}
	}


}



class PolygonTextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktParser.RULE_polygonText;
    }

	LPAR() {
	    return this.getToken(wktParser.LPAR, 0);
	};

	lineStringText = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineStringTextContext);
	    } else {
	        return this.getTypedRuleContext(LineStringTextContext,i);
	    }
	};

	RPAR() {
	    return this.getToken(wktParser.RPAR, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wktParser.COMMA);
	    } else {
	        return this.getToken(wktParser.COMMA, i);
	    }
	};


	EMPTY_() {
	    return this.getToken(wktParser.EMPTY_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.enterPolygonText(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.exitPolygonText(this);
		}
	}


}



class LineStringTextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktParser.RULE_lineStringText;
    }

	LPAR() {
	    return this.getToken(wktParser.LPAR, 0);
	};

	point = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PointContext);
	    } else {
	        return this.getTypedRuleContext(PointContext,i);
	    }
	};

	RPAR() {
	    return this.getToken(wktParser.RPAR, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wktParser.COMMA);
	    } else {
	        return this.getToken(wktParser.COMMA, i);
	    }
	};


	EMPTY_() {
	    return this.getToken(wktParser.EMPTY_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.enterLineStringText(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.exitLineStringText(this);
		}
	}


}



class PointOrClosedPointContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktParser.RULE_pointOrClosedPoint;
    }

	point() {
	    return this.getTypedRuleContext(PointContext,0);
	};

	LPAR() {
	    return this.getToken(wktParser.LPAR, 0);
	};

	RPAR() {
	    return this.getToken(wktParser.RPAR, 0);
	};

	EMPTY_() {
	    return this.getToken(wktParser.EMPTY_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.enterPointOrClosedPoint(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.exitPointOrClosedPoint(this);
		}
	}


}



class PointContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktParser.RULE_point;
    }

	ordinate = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OrdinateContext);
	    } else {
	        return this.getTypedRuleContext(OrdinateContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.enterPoint(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.exitPoint(this);
		}
	}


}



class OrdinateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktParser.RULE_ordinate;
    }

	DECIMAL() {
	    return this.getToken(wktParser.DECIMAL, 0);
	};

	NAN_() {
	    return this.getToken(wktParser.NAN_, 0);
	};

	INF_() {
	    return this.getToken(wktParser.INF_, 0);
	};

	NEG_INF_() {
	    return this.getToken(wktParser.NEG_INF_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.enterOrdinate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.exitOrdinate(this);
		}
	}


}




wktParser.File_Context = File_Context; 
wktParser.GeometryContext = GeometryContext; 
wktParser.DimContext = DimContext; 
wktParser.PointGeometryContext = PointGeometryContext; 
wktParser.LineStringGeometryContext = LineStringGeometryContext; 
wktParser.LinearRingGeometryContext = LinearRingGeometryContext; 
wktParser.PolygonGeometryContext = PolygonGeometryContext; 
wktParser.TriangleGeometryContext = TriangleGeometryContext; 
wktParser.MultiPointGeometryContext = MultiPointGeometryContext; 
wktParser.MultiLineStringGeometryContext = MultiLineStringGeometryContext; 
wktParser.MultiPolygonGeometryContext = MultiPolygonGeometryContext; 
wktParser.GeometryCollectionContext = GeometryCollectionContext; 
wktParser.CircularStringGeometryContext = CircularStringGeometryContext; 
wktParser.CompoundCurveGeometryContext = CompoundCurveGeometryContext; 
wktParser.CompoundCurveMemberContext = CompoundCurveMemberContext; 
wktParser.ClothoidGeometryContext = ClothoidGeometryContext; 
wktParser.CurvePolygonGeometryContext = CurvePolygonGeometryContext; 
wktParser.MultiCurveGeometryContext = MultiCurveGeometryContext; 
wktParser.CurveMemberContext = CurveMemberContext; 
wktParser.MultiSurfaceGeometryContext = MultiSurfaceGeometryContext; 
wktParser.SurfaceMemberContext = SurfaceMemberContext; 
wktParser.PolyhedralSurfaceGeometryContext = PolyhedralSurfaceGeometryContext; 
wktParser.TinGeometryContext = TinGeometryContext; 
wktParser.PolygonTextContext = PolygonTextContext; 
wktParser.LineStringTextContext = LineStringTextContext; 
wktParser.PointOrClosedPointContext = PointOrClosedPointContext; 
wktParser.PointContext = PointContext; 
wktParser.OrdinateContext = OrdinateContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
