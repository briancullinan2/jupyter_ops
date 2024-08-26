// Generated from Resources/Parsers/wkt/wkt.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import wktListener from './wktListener.js';
const serializedATN = [4,1,24,306,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,1,
0,1,0,1,0,1,0,1,0,5,0,46,8,0,10,0,12,0,49,9,0,1,0,1,0,1,0,3,0,54,8,0,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,70,8,1,1,2,1,2,3,
2,74,8,2,1,2,1,2,1,2,1,2,1,2,3,2,81,8,2,1,3,1,3,1,3,1,4,1,4,1,4,1,5,1,5,
1,5,1,5,1,5,3,5,94,8,5,1,5,1,5,1,5,1,5,3,5,100,8,5,5,5,102,8,5,10,5,12,5,
105,9,5,1,5,1,5,1,5,3,5,110,8,5,1,6,1,6,1,6,1,6,3,6,116,8,6,1,6,1,6,1,6,
3,6,121,8,6,5,6,123,8,6,10,6,12,6,126,9,6,1,6,1,6,1,6,3,6,131,8,6,1,7,1,
7,1,7,1,7,1,7,3,7,138,8,7,1,7,1,7,1,7,1,7,3,7,144,8,7,5,7,146,8,7,10,7,12,
7,149,9,7,1,7,1,7,1,7,3,7,154,8,7,1,8,1,8,1,8,1,8,3,8,160,8,8,1,8,1,8,1,
8,3,8,165,8,8,5,8,167,8,8,10,8,12,8,170,9,8,1,8,1,8,1,8,3,8,175,8,8,1,9,
1,9,1,9,1,9,1,9,5,9,182,8,9,10,9,12,9,185,9,9,1,9,1,9,1,9,3,9,190,8,9,1,
10,1,10,1,10,1,10,1,10,5,10,197,8,10,10,10,12,10,200,9,10,1,10,1,10,1,10,
3,10,205,8,10,1,11,1,11,1,11,1,11,1,11,5,11,212,8,11,10,11,12,11,215,9,11,
1,11,1,11,1,11,3,11,220,8,11,1,12,1,12,1,12,1,12,1,12,5,12,227,8,12,10,12,
12,12,230,9,12,1,12,1,12,1,12,3,12,235,8,12,1,13,1,13,1,13,1,13,1,13,5,13,
242,8,13,10,13,12,13,245,9,13,1,13,1,13,1,13,3,13,250,8,13,1,14,1,14,1,14,
1,14,1,14,5,14,257,8,14,10,14,12,14,260,9,14,1,14,1,14,1,15,1,15,1,15,1,
15,1,15,3,15,269,8,15,1,16,1,16,1,16,1,16,5,16,275,8,16,10,16,12,16,278,
9,16,1,16,1,16,1,16,3,16,283,8,16,1,17,1,17,1,17,1,17,5,17,289,8,17,10,17,
12,17,292,9,17,1,17,1,17,1,17,3,17,297,8,17,1,18,4,18,300,8,18,11,18,12,
18,301,1,19,1,19,1,19,0,0,20,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,
32,34,36,38,0,0,339,0,40,1,0,0,0,2,69,1,0,0,0,4,71,1,0,0,0,6,82,1,0,0,0,
8,85,1,0,0,0,10,88,1,0,0,0,12,111,1,0,0,0,14,132,1,0,0,0,16,155,1,0,0,0,
18,176,1,0,0,0,20,191,1,0,0,0,22,206,1,0,0,0,24,221,1,0,0,0,26,236,1,0,0,
0,28,251,1,0,0,0,30,268,1,0,0,0,32,282,1,0,0,0,34,296,1,0,0,0,36,299,1,0,
0,0,38,303,1,0,0,0,40,53,5,13,0,0,41,42,5,5,0,0,42,47,3,2,1,0,43,44,5,4,
0,0,44,46,3,2,1,0,45,43,1,0,0,0,46,49,1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,
0,48,50,1,0,0,0,49,47,1,0,0,0,50,51,5,6,0,0,51,54,1,0,0,0,52,54,5,14,0,0,
53,41,1,0,0,0,53,52,1,0,0,0,54,1,1,0,0,0,55,70,3,8,4,0,56,70,3,6,3,0,57,
70,3,4,2,0,58,70,3,16,8,0,59,70,3,14,7,0,60,70,3,12,6,0,61,70,3,10,5,0,62,
70,3,18,9,0,63,70,3,20,10,0,64,70,3,22,11,0,65,70,3,28,14,0,66,70,3,24,12,
0,67,70,3,26,13,0,68,70,3,0,0,0,69,55,1,0,0,0,69,56,1,0,0,0,69,57,1,0,0,
0,69,58,1,0,0,0,69,59,1,0,0,0,69,60,1,0,0,0,69,61,1,0,0,0,69,62,1,0,0,0,
69,63,1,0,0,0,69,64,1,0,0,0,69,65,1,0,0,0,69,66,1,0,0,0,69,67,1,0,0,0,69,
68,1,0,0,0,70,3,1,0,0,0,71,80,5,7,0,0,72,74,3,38,19,0,73,72,1,0,0,0,73,74,
1,0,0,0,74,75,1,0,0,0,75,76,5,5,0,0,76,77,3,36,18,0,77,78,5,6,0,0,78,81,
1,0,0,0,79,81,5,14,0,0,80,73,1,0,0,0,80,79,1,0,0,0,81,5,1,0,0,0,82,83,5,
8,0,0,83,84,3,34,17,0,84,7,1,0,0,0,85,86,5,9,0,0,86,87,3,32,16,0,87,9,1,
0,0,0,88,109,5,19,0,0,89,93,5,5,0,0,90,94,3,34,17,0,91,94,3,28,14,0,92,94,
3,16,8,0,93,90,1,0,0,0,93,91,1,0,0,0,93,92,1,0,0,0,94,103,1,0,0,0,95,99,
5,4,0,0,96,100,3,28,14,0,97,100,3,34,17,0,98,100,3,16,8,0,99,96,1,0,0,0,
99,97,1,0,0,0,99,98,1,0,0,0,100,102,1,0,0,0,101,95,1,0,0,0,102,105,1,0,0,
0,103,101,1,0,0,0,103,104,1,0,0,0,104,106,1,0,0,0,105,103,1,0,0,0,106,107,
5,6,0,0,107,110,1,0,0,0,108,110,5,14,0,0,109,89,1,0,0,0,109,108,1,0,0,0,
110,11,1,0,0,0,111,130,5,17,0,0,112,115,5,5,0,0,113,116,3,32,16,0,114,116,
3,14,7,0,115,113,1,0,0,0,115,114,1,0,0,0,116,124,1,0,0,0,117,120,5,4,0,0,
118,121,3,32,16,0,119,121,3,14,7,0,120,118,1,0,0,0,120,119,1,0,0,0,121,123,
1,0,0,0,122,117,1,0,0,0,123,126,1,0,0,0,124,122,1,0,0,0,124,125,1,0,0,0,
125,127,1,0,0,0,126,124,1,0,0,0,127,128,5,6,0,0,128,131,1,0,0,0,129,131,
5,14,0,0,130,112,1,0,0,0,130,129,1,0,0,0,131,13,1,0,0,0,132,153,5,18,0,0,
133,137,5,5,0,0,134,138,3,34,17,0,135,138,3,28,14,0,136,138,3,16,8,0,137,
134,1,0,0,0,137,135,1,0,0,0,137,136,1,0,0,0,138,147,1,0,0,0,139,143,5,4,
0,0,140,144,3,28,14,0,141,144,3,34,17,0,142,144,3,16,8,0,143,140,1,0,0,0,
143,141,1,0,0,0,143,142,1,0,0,0,144,146,1,0,0,0,145,139,1,0,0,0,146,149,
1,0,0,0,147,145,1,0,0,0,147,148,1,0,0,0,148,150,1,0,0,0,149,147,1,0,0,0,
150,151,5,6,0,0,151,154,1,0,0,0,152,154,5,14,0,0,153,133,1,0,0,0,153,152,
1,0,0,0,154,15,1,0,0,0,155,174,5,16,0,0,156,159,5,5,0,0,157,160,3,34,17,
0,158,160,3,28,14,0,159,157,1,0,0,0,159,158,1,0,0,0,160,168,1,0,0,0,161,
164,5,4,0,0,162,165,3,28,14,0,163,165,3,34,17,0,164,162,1,0,0,0,164,163,
1,0,0,0,165,167,1,0,0,0,166,161,1,0,0,0,167,170,1,0,0,0,168,166,1,0,0,0,
168,169,1,0,0,0,169,171,1,0,0,0,170,168,1,0,0,0,171,172,5,6,0,0,172,175,
1,0,0,0,173,175,5,14,0,0,174,156,1,0,0,0,174,173,1,0,0,0,175,17,1,0,0,0,
176,189,5,10,0,0,177,178,5,5,0,0,178,183,3,30,15,0,179,180,5,4,0,0,180,182,
3,30,15,0,181,179,1,0,0,0,182,185,1,0,0,0,183,181,1,0,0,0,183,184,1,0,0,
0,184,186,1,0,0,0,185,183,1,0,0,0,186,187,5,6,0,0,187,190,1,0,0,0,188,190,
5,14,0,0,189,177,1,0,0,0,189,188,1,0,0,0,190,19,1,0,0,0,191,204,5,11,0,0,
192,193,5,5,0,0,193,198,3,34,17,0,194,195,5,4,0,0,195,197,3,34,17,0,196,
194,1,0,0,0,197,200,1,0,0,0,198,196,1,0,0,0,198,199,1,0,0,0,199,201,1,0,
0,0,200,198,1,0,0,0,201,202,5,6,0,0,202,205,1,0,0,0,203,205,5,14,0,0,204,
192,1,0,0,0,204,203,1,0,0,0,205,21,1,0,0,0,206,219,5,12,0,0,207,208,5,5,
0,0,208,213,3,32,16,0,209,210,5,4,0,0,210,212,3,32,16,0,211,209,1,0,0,0,
212,215,1,0,0,0,213,211,1,0,0,0,213,214,1,0,0,0,214,216,1,0,0,0,215,213,
1,0,0,0,216,217,5,6,0,0,217,220,1,0,0,0,218,220,5,14,0,0,219,207,1,0,0,0,
219,218,1,0,0,0,220,23,1,0,0,0,221,234,5,22,0,0,222,223,5,5,0,0,223,228,
3,32,16,0,224,225,5,4,0,0,225,227,3,32,16,0,226,224,1,0,0,0,227,230,1,0,
0,0,228,226,1,0,0,0,228,229,1,0,0,0,229,231,1,0,0,0,230,228,1,0,0,0,231,
232,5,6,0,0,232,235,1,0,0,0,233,235,5,14,0,0,234,222,1,0,0,0,234,233,1,0,
0,0,235,25,1,0,0,0,236,249,5,21,0,0,237,238,5,5,0,0,238,243,3,32,16,0,239,
240,5,4,0,0,240,242,3,32,16,0,241,239,1,0,0,0,242,245,1,0,0,0,243,241,1,
0,0,0,243,244,1,0,0,0,244,246,1,0,0,0,245,243,1,0,0,0,246,247,5,6,0,0,247,
250,1,0,0,0,248,250,5,14,0,0,249,237,1,0,0,0,249,248,1,0,0,0,250,27,1,0,
0,0,251,252,5,15,0,0,252,253,5,5,0,0,253,258,3,36,18,0,254,255,5,4,0,0,255,
257,3,36,18,0,256,254,1,0,0,0,257,260,1,0,0,0,258,256,1,0,0,0,258,259,1,
0,0,0,259,261,1,0,0,0,260,258,1,0,0,0,261,262,5,6,0,0,262,29,1,0,0,0,263,
269,3,36,18,0,264,265,5,5,0,0,265,266,3,36,18,0,266,267,5,6,0,0,267,269,
1,0,0,0,268,263,1,0,0,0,268,264,1,0,0,0,269,31,1,0,0,0,270,271,5,5,0,0,271,
276,3,34,17,0,272,273,5,4,0,0,273,275,3,34,17,0,274,272,1,0,0,0,275,278,
1,0,0,0,276,274,1,0,0,0,276,277,1,0,0,0,277,279,1,0,0,0,278,276,1,0,0,0,
279,280,5,6,0,0,280,283,1,0,0,0,281,283,5,14,0,0,282,270,1,0,0,0,282,281,
1,0,0,0,283,33,1,0,0,0,284,285,5,5,0,0,285,290,3,36,18,0,286,287,5,4,0,0,
287,289,3,36,18,0,288,286,1,0,0,0,289,292,1,0,0,0,290,288,1,0,0,0,290,291,
1,0,0,0,291,293,1,0,0,0,292,290,1,0,0,0,293,294,5,6,0,0,294,297,1,0,0,0,
295,297,5,14,0,0,296,284,1,0,0,0,296,295,1,0,0,0,297,35,1,0,0,0,298,300,
5,1,0,0,299,298,1,0,0,0,300,301,1,0,0,0,301,299,1,0,0,0,301,302,1,0,0,0,
302,37,1,0,0,0,303,304,5,23,0,0,304,39,1,0,0,0,38,47,53,69,73,80,93,99,103,
109,115,120,124,130,137,143,147,153,159,164,168,174,183,189,198,204,213,
219,228,234,243,249,258,268,276,282,290,296,301];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class wktParser extends antlr4.Parser {

    static grammarFileName = "wkt.g4";
    static literalNames = [ null, null, null, null, "','", "'('", "')'" ];
    static symbolicNames = [ null, "DECIMAL", "INTEGERPART", "DECIMALPART", 
                             "COMMA", "LPAR", "RPAR", "POINT", "LINESTRING", 
                             "POLYGON", "MULTIPOINT", "MULTILINESTRING", 
                             "MULTIPOLYGON", "GEOMETRYCOLLECTION", "EMPTY", 
                             "CIRCULARSTRING", "COMPOUNDCURVE", "MULTISURFACE", 
                             "CURVEPOLYGON", "MULTICURVE", "TRIANGLE", "TIN", 
                             "POLYHEDRALSURFACE", "STRING", "WS" ];
    static ruleNames = [ "geometryCollection", "geometry", "pointGeometry", 
                         "lineStringGeometry", "polygonGeometry", "multiCurveGeometry", 
                         "multiSurfaceGeometry", "curvePolygonGeometry", 
                         "compoundCurveGeometry", "multiPointGeometry", 
                         "multiLineStringGeometry", "multiPolygonGeometry", 
                         "multiPolyhedralSurfaceGeometry", "multiTinGeometry", 
                         "circularStringGeometry", "pointOrClosedPoint", 
                         "polygon", "lineString", "point", "name" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = wktParser.ruleNames;
        this.literalNames = wktParser.literalNames;
        this.symbolicNames = wktParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	geometryCollection() {
	    let localctx = new GeometryCollectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, wktParser.RULE_geometryCollection);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.match(wktParser.GEOMETRYCOLLECTION);
	        this.state = 53;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case wktParser.LPAR:
	            this.state = 41;
	            this.match(wktParser.LPAR);
	            this.state = 42;
	            this.geometry();
	            this.state = 47;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===wktParser.COMMA) {
	                this.state = 43;
	                this.match(wktParser.COMMA);
	                this.state = 44;
	                this.geometry();
	                this.state = 49;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 50;
	            this.match(wktParser.RPAR);
	            break;
	        case wktParser.EMPTY:
	            this.state = 52;
	            this.match(wktParser.EMPTY);
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



	geometry() {
	    let localctx = new GeometryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, wktParser.RULE_geometry);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case wktParser.POLYGON:
	            this.state = 55;
	            this.polygonGeometry();
	            break;
	        case wktParser.LINESTRING:
	            this.state = 56;
	            this.lineStringGeometry();
	            break;
	        case wktParser.POINT:
	            this.state = 57;
	            this.pointGeometry();
	            break;
	        case wktParser.COMPOUNDCURVE:
	            this.state = 58;
	            this.compoundCurveGeometry();
	            break;
	        case wktParser.CURVEPOLYGON:
	            this.state = 59;
	            this.curvePolygonGeometry();
	            break;
	        case wktParser.MULTISURFACE:
	            this.state = 60;
	            this.multiSurfaceGeometry();
	            break;
	        case wktParser.MULTICURVE:
	            this.state = 61;
	            this.multiCurveGeometry();
	            break;
	        case wktParser.MULTIPOINT:
	            this.state = 62;
	            this.multiPointGeometry();
	            break;
	        case wktParser.MULTILINESTRING:
	            this.state = 63;
	            this.multiLineStringGeometry();
	            break;
	        case wktParser.MULTIPOLYGON:
	            this.state = 64;
	            this.multiPolygonGeometry();
	            break;
	        case wktParser.CIRCULARSTRING:
	            this.state = 65;
	            this.circularStringGeometry();
	            break;
	        case wktParser.POLYHEDRALSURFACE:
	            this.state = 66;
	            this.multiPolyhedralSurfaceGeometry();
	            break;
	        case wktParser.TIN:
	            this.state = 67;
	            this.multiTinGeometry();
	            break;
	        case wktParser.GEOMETRYCOLLECTION:
	            this.state = 68;
	            this.geometryCollection();
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



	pointGeometry() {
	    let localctx = new PointGeometryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, wktParser.RULE_pointGeometry);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(wktParser.POINT);
	        this.state = 80;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case wktParser.LPAR:
	        case wktParser.STRING:
	            this.state = 73;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===wktParser.STRING) {
	                this.state = 72;
	                this.name();
	            }

	            this.state = 75;
	            this.match(wktParser.LPAR);
	            this.state = 76;
	            this.point();
	            this.state = 77;
	            this.match(wktParser.RPAR);
	            break;
	        case wktParser.EMPTY:
	            this.state = 79;
	            this.match(wktParser.EMPTY);
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
	    this.enterRule(localctx, 6, wktParser.RULE_lineStringGeometry);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.match(wktParser.LINESTRING);
	        this.state = 83;
	        this.lineString();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 8, wktParser.RULE_polygonGeometry);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this.match(wktParser.POLYGON);
	        this.state = 86;
	        this.polygon();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 10, wktParser.RULE_multiCurveGeometry);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.match(wktParser.MULTICURVE);
	        this.state = 109;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case wktParser.LPAR:
	            this.state = 89;
	            this.match(wktParser.LPAR);
	            this.state = 93;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case wktParser.LPAR:
	            case wktParser.EMPTY:
	                this.state = 90;
	                this.lineString();
	                break;
	            case wktParser.CIRCULARSTRING:
	                this.state = 91;
	                this.circularStringGeometry();
	                break;
	            case wktParser.COMPOUNDCURVE:
	                this.state = 92;
	                this.compoundCurveGeometry();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 103;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===wktParser.COMMA) {
	                this.state = 95;
	                this.match(wktParser.COMMA);
	                this.state = 99;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case wktParser.CIRCULARSTRING:
	                    this.state = 96;
	                    this.circularStringGeometry();
	                    break;
	                case wktParser.LPAR:
	                case wktParser.EMPTY:
	                    this.state = 97;
	                    this.lineString();
	                    break;
	                case wktParser.COMPOUNDCURVE:
	                    this.state = 98;
	                    this.compoundCurveGeometry();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 105;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 106;
	            this.match(wktParser.RPAR);
	            break;
	        case wktParser.EMPTY:
	            this.state = 108;
	            this.match(wktParser.EMPTY);
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
	    this.enterRule(localctx, 12, wktParser.RULE_multiSurfaceGeometry);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.match(wktParser.MULTISURFACE);
	        this.state = 130;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case wktParser.LPAR:
	            this.state = 112;
	            this.match(wktParser.LPAR);
	            this.state = 115;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case wktParser.LPAR:
	            case wktParser.EMPTY:
	                this.state = 113;
	                this.polygon();
	                break;
	            case wktParser.CURVEPOLYGON:
	                this.state = 114;
	                this.curvePolygonGeometry();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 124;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===wktParser.COMMA) {
	                this.state = 117;
	                this.match(wktParser.COMMA);
	                this.state = 120;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case wktParser.LPAR:
	                case wktParser.EMPTY:
	                    this.state = 118;
	                    this.polygon();
	                    break;
	                case wktParser.CURVEPOLYGON:
	                    this.state = 119;
	                    this.curvePolygonGeometry();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 126;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 127;
	            this.match(wktParser.RPAR);
	            break;
	        case wktParser.EMPTY:
	            this.state = 129;
	            this.match(wktParser.EMPTY);
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



	curvePolygonGeometry() {
	    let localctx = new CurvePolygonGeometryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, wktParser.RULE_curvePolygonGeometry);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 132;
	        this.match(wktParser.CURVEPOLYGON);
	        this.state = 153;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case wktParser.LPAR:
	            this.state = 133;
	            this.match(wktParser.LPAR);
	            this.state = 137;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case wktParser.LPAR:
	            case wktParser.EMPTY:
	                this.state = 134;
	                this.lineString();
	                break;
	            case wktParser.CIRCULARSTRING:
	                this.state = 135;
	                this.circularStringGeometry();
	                break;
	            case wktParser.COMPOUNDCURVE:
	                this.state = 136;
	                this.compoundCurveGeometry();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 147;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===wktParser.COMMA) {
	                this.state = 139;
	                this.match(wktParser.COMMA);
	                this.state = 143;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case wktParser.CIRCULARSTRING:
	                    this.state = 140;
	                    this.circularStringGeometry();
	                    break;
	                case wktParser.LPAR:
	                case wktParser.EMPTY:
	                    this.state = 141;
	                    this.lineString();
	                    break;
	                case wktParser.COMPOUNDCURVE:
	                    this.state = 142;
	                    this.compoundCurveGeometry();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 149;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 150;
	            this.match(wktParser.RPAR);
	            break;
	        case wktParser.EMPTY:
	            this.state = 152;
	            this.match(wktParser.EMPTY);
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



	compoundCurveGeometry() {
	    let localctx = new CompoundCurveGeometryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, wktParser.RULE_compoundCurveGeometry);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        this.match(wktParser.COMPOUNDCURVE);
	        this.state = 174;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case wktParser.LPAR:
	            this.state = 156;
	            this.match(wktParser.LPAR);
	            this.state = 159;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case wktParser.LPAR:
	            case wktParser.EMPTY:
	                this.state = 157;
	                this.lineString();
	                break;
	            case wktParser.CIRCULARSTRING:
	                this.state = 158;
	                this.circularStringGeometry();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 168;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===wktParser.COMMA) {
	                this.state = 161;
	                this.match(wktParser.COMMA);
	                this.state = 164;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case wktParser.CIRCULARSTRING:
	                    this.state = 162;
	                    this.circularStringGeometry();
	                    break;
	                case wktParser.LPAR:
	                case wktParser.EMPTY:
	                    this.state = 163;
	                    this.lineString();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 170;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 171;
	            this.match(wktParser.RPAR);
	            break;
	        case wktParser.EMPTY:
	            this.state = 173;
	            this.match(wktParser.EMPTY);
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



	multiPointGeometry() {
	    let localctx = new MultiPointGeometryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, wktParser.RULE_multiPointGeometry);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 176;
	        this.match(wktParser.MULTIPOINT);
	        this.state = 189;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case wktParser.LPAR:
	            this.state = 177;
	            this.match(wktParser.LPAR);
	            this.state = 178;
	            this.pointOrClosedPoint();
	            this.state = 183;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===wktParser.COMMA) {
	                this.state = 179;
	                this.match(wktParser.COMMA);
	                this.state = 180;
	                this.pointOrClosedPoint();
	                this.state = 185;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 186;
	            this.match(wktParser.RPAR);
	            break;
	        case wktParser.EMPTY:
	            this.state = 188;
	            this.match(wktParser.EMPTY);
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
	    this.enterRule(localctx, 20, wktParser.RULE_multiLineStringGeometry);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 191;
	        this.match(wktParser.MULTILINESTRING);
	        this.state = 204;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case wktParser.LPAR:
	            this.state = 192;
	            this.match(wktParser.LPAR);
	            this.state = 193;
	            this.lineString();
	            this.state = 198;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===wktParser.COMMA) {
	                this.state = 194;
	                this.match(wktParser.COMMA);
	                this.state = 195;
	                this.lineString();
	                this.state = 200;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 201;
	            this.match(wktParser.RPAR);
	            break;
	        case wktParser.EMPTY:
	            this.state = 203;
	            this.match(wktParser.EMPTY);
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
	    this.enterRule(localctx, 22, wktParser.RULE_multiPolygonGeometry);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        this.match(wktParser.MULTIPOLYGON);
	        this.state = 219;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case wktParser.LPAR:
	            this.state = 207;
	            this.match(wktParser.LPAR);
	            this.state = 208;
	            this.polygon();
	            this.state = 213;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===wktParser.COMMA) {
	                this.state = 209;
	                this.match(wktParser.COMMA);
	                this.state = 210;
	                this.polygon();
	                this.state = 215;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 216;
	            this.match(wktParser.RPAR);
	            break;
	        case wktParser.EMPTY:
	            this.state = 218;
	            this.match(wktParser.EMPTY);
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



	multiPolyhedralSurfaceGeometry() {
	    let localctx = new MultiPolyhedralSurfaceGeometryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, wktParser.RULE_multiPolyhedralSurfaceGeometry);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 221;
	        this.match(wktParser.POLYHEDRALSURFACE);
	        this.state = 234;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case wktParser.LPAR:
	            this.state = 222;
	            this.match(wktParser.LPAR);
	            this.state = 223;
	            this.polygon();
	            this.state = 228;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===wktParser.COMMA) {
	                this.state = 224;
	                this.match(wktParser.COMMA);
	                this.state = 225;
	                this.polygon();
	                this.state = 230;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 231;
	            this.match(wktParser.RPAR);
	            break;
	        case wktParser.EMPTY:
	            this.state = 233;
	            this.match(wktParser.EMPTY);
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



	multiTinGeometry() {
	    let localctx = new MultiTinGeometryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, wktParser.RULE_multiTinGeometry);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 236;
	        this.match(wktParser.TIN);
	        this.state = 249;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case wktParser.LPAR:
	            this.state = 237;
	            this.match(wktParser.LPAR);
	            this.state = 238;
	            this.polygon();
	            this.state = 243;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===wktParser.COMMA) {
	                this.state = 239;
	                this.match(wktParser.COMMA);
	                this.state = 240;
	                this.polygon();
	                this.state = 245;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 246;
	            this.match(wktParser.RPAR);
	            break;
	        case wktParser.EMPTY:
	            this.state = 248;
	            this.match(wktParser.EMPTY);
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
	    this.enterRule(localctx, 28, wktParser.RULE_circularStringGeometry);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 251;
	        this.match(wktParser.CIRCULARSTRING);
	        this.state = 252;
	        this.match(wktParser.LPAR);
	        this.state = 253;
	        this.point();
	        this.state = 258;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===wktParser.COMMA) {
	            this.state = 254;
	            this.match(wktParser.COMMA);
	            this.state = 255;
	            this.point();
	            this.state = 260;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 261;
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



	pointOrClosedPoint() {
	    let localctx = new PointOrClosedPointContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, wktParser.RULE_pointOrClosedPoint);
	    try {
	        this.state = 268;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case wktParser.DECIMAL:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 263;
	            this.point();
	            break;
	        case wktParser.LPAR:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 264;
	            this.match(wktParser.LPAR);
	            this.state = 265;
	            this.point();
	            this.state = 266;
	            this.match(wktParser.RPAR);
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



	polygon() {
	    let localctx = new PolygonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, wktParser.RULE_polygon);
	    var _la = 0; // Token type
	    try {
	        this.state = 282;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case wktParser.LPAR:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 270;
	            this.match(wktParser.LPAR);
	            this.state = 271;
	            this.lineString();
	            this.state = 276;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===wktParser.COMMA) {
	                this.state = 272;
	                this.match(wktParser.COMMA);
	                this.state = 273;
	                this.lineString();
	                this.state = 278;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 279;
	            this.match(wktParser.RPAR);
	            break;
	        case wktParser.EMPTY:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 281;
	            this.match(wktParser.EMPTY);
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



	lineString() {
	    let localctx = new LineStringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, wktParser.RULE_lineString);
	    var _la = 0; // Token type
	    try {
	        this.state = 296;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case wktParser.LPAR:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 284;
	            this.match(wktParser.LPAR);
	            this.state = 285;
	            this.point();
	            this.state = 290;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===wktParser.COMMA) {
	                this.state = 286;
	                this.match(wktParser.COMMA);
	                this.state = 287;
	                this.point();
	                this.state = 292;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 293;
	            this.match(wktParser.RPAR);
	            break;
	        case wktParser.EMPTY:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 295;
	            this.match(wktParser.EMPTY);
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
	    this.enterRule(localctx, 36, wktParser.RULE_point);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 299; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 298;
	            this.match(wktParser.DECIMAL);
	            this.state = 301; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===wktParser.DECIMAL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 38, wktParser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 303;
	        this.match(wktParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
wktParser.POLYGON = 9;
wktParser.MULTIPOINT = 10;
wktParser.MULTILINESTRING = 11;
wktParser.MULTIPOLYGON = 12;
wktParser.GEOMETRYCOLLECTION = 13;
wktParser.EMPTY = 14;
wktParser.CIRCULARSTRING = 15;
wktParser.COMPOUNDCURVE = 16;
wktParser.MULTISURFACE = 17;
wktParser.CURVEPOLYGON = 18;
wktParser.MULTICURVE = 19;
wktParser.TRIANGLE = 20;
wktParser.TIN = 21;
wktParser.POLYHEDRALSURFACE = 22;
wktParser.STRING = 23;
wktParser.WS = 24;

wktParser.RULE_geometryCollection = 0;
wktParser.RULE_geometry = 1;
wktParser.RULE_pointGeometry = 2;
wktParser.RULE_lineStringGeometry = 3;
wktParser.RULE_polygonGeometry = 4;
wktParser.RULE_multiCurveGeometry = 5;
wktParser.RULE_multiSurfaceGeometry = 6;
wktParser.RULE_curvePolygonGeometry = 7;
wktParser.RULE_compoundCurveGeometry = 8;
wktParser.RULE_multiPointGeometry = 9;
wktParser.RULE_multiLineStringGeometry = 10;
wktParser.RULE_multiPolygonGeometry = 11;
wktParser.RULE_multiPolyhedralSurfaceGeometry = 12;
wktParser.RULE_multiTinGeometry = 13;
wktParser.RULE_circularStringGeometry = 14;
wktParser.RULE_pointOrClosedPoint = 15;
wktParser.RULE_polygon = 16;
wktParser.RULE_lineString = 17;
wktParser.RULE_point = 18;
wktParser.RULE_name = 19;

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

	EMPTY() {
	    return this.getToken(wktParser.EMPTY, 0);
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

	polygonGeometry() {
	    return this.getTypedRuleContext(PolygonGeometryContext,0);
	};

	lineStringGeometry() {
	    return this.getTypedRuleContext(LineStringGeometryContext,0);
	};

	pointGeometry() {
	    return this.getTypedRuleContext(PointGeometryContext,0);
	};

	compoundCurveGeometry() {
	    return this.getTypedRuleContext(CompoundCurveGeometryContext,0);
	};

	curvePolygonGeometry() {
	    return this.getTypedRuleContext(CurvePolygonGeometryContext,0);
	};

	multiSurfaceGeometry() {
	    return this.getTypedRuleContext(MultiSurfaceGeometryContext,0);
	};

	multiCurveGeometry() {
	    return this.getTypedRuleContext(MultiCurveGeometryContext,0);
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

	circularStringGeometry() {
	    return this.getTypedRuleContext(CircularStringGeometryContext,0);
	};

	multiPolyhedralSurfaceGeometry() {
	    return this.getTypedRuleContext(MultiPolyhedralSurfaceGeometryContext,0);
	};

	multiTinGeometry() {
	    return this.getTypedRuleContext(MultiTinGeometryContext,0);
	};

	geometryCollection() {
	    return this.getTypedRuleContext(GeometryCollectionContext,0);
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

	EMPTY() {
	    return this.getToken(wktParser.EMPTY, 0);
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

	name() {
	    return this.getTypedRuleContext(NameContext,0);
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

	lineString() {
	    return this.getTypedRuleContext(LineStringContext,0);
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

	polygon() {
	    return this.getTypedRuleContext(PolygonContext,0);
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

	EMPTY() {
	    return this.getToken(wktParser.EMPTY, 0);
	};

	LPAR() {
	    return this.getToken(wktParser.LPAR, 0);
	};

	RPAR() {
	    return this.getToken(wktParser.RPAR, 0);
	};

	lineString = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineStringContext);
	    } else {
	        return this.getTypedRuleContext(LineStringContext,i);
	    }
	};

	circularStringGeometry = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CircularStringGeometryContext);
	    } else {
	        return this.getTypedRuleContext(CircularStringGeometryContext,i);
	    }
	};

	compoundCurveGeometry = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CompoundCurveGeometryContext);
	    } else {
	        return this.getTypedRuleContext(CompoundCurveGeometryContext,i);
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

	EMPTY() {
	    return this.getToken(wktParser.EMPTY, 0);
	};

	LPAR() {
	    return this.getToken(wktParser.LPAR, 0);
	};

	RPAR() {
	    return this.getToken(wktParser.RPAR, 0);
	};

	polygon = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PolygonContext);
	    } else {
	        return this.getTypedRuleContext(PolygonContext,i);
	    }
	};

	curvePolygonGeometry = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CurvePolygonGeometryContext);
	    } else {
	        return this.getTypedRuleContext(CurvePolygonGeometryContext,i);
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

	EMPTY() {
	    return this.getToken(wktParser.EMPTY, 0);
	};

	LPAR() {
	    return this.getToken(wktParser.LPAR, 0);
	};

	RPAR() {
	    return this.getToken(wktParser.RPAR, 0);
	};

	lineString = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineStringContext);
	    } else {
	        return this.getTypedRuleContext(LineStringContext,i);
	    }
	};

	circularStringGeometry = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CircularStringGeometryContext);
	    } else {
	        return this.getTypedRuleContext(CircularStringGeometryContext,i);
	    }
	};

	compoundCurveGeometry = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CompoundCurveGeometryContext);
	    } else {
	        return this.getTypedRuleContext(CompoundCurveGeometryContext,i);
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

	EMPTY() {
	    return this.getToken(wktParser.EMPTY, 0);
	};

	LPAR() {
	    return this.getToken(wktParser.LPAR, 0);
	};

	RPAR() {
	    return this.getToken(wktParser.RPAR, 0);
	};

	lineString = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineStringContext);
	    } else {
	        return this.getTypedRuleContext(LineStringContext,i);
	    }
	};

	circularStringGeometry = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CircularStringGeometryContext);
	    } else {
	        return this.getTypedRuleContext(CircularStringGeometryContext,i);
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

	EMPTY() {
	    return this.getToken(wktParser.EMPTY, 0);
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

	EMPTY() {
	    return this.getToken(wktParser.EMPTY, 0);
	};

	LPAR() {
	    return this.getToken(wktParser.LPAR, 0);
	};

	lineString = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineStringContext);
	    } else {
	        return this.getTypedRuleContext(LineStringContext,i);
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

	EMPTY() {
	    return this.getToken(wktParser.EMPTY, 0);
	};

	LPAR() {
	    return this.getToken(wktParser.LPAR, 0);
	};

	polygon = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PolygonContext);
	    } else {
	        return this.getTypedRuleContext(PolygonContext,i);
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



class MultiPolyhedralSurfaceGeometryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktParser.RULE_multiPolyhedralSurfaceGeometry;
    }

	POLYHEDRALSURFACE() {
	    return this.getToken(wktParser.POLYHEDRALSURFACE, 0);
	};

	EMPTY() {
	    return this.getToken(wktParser.EMPTY, 0);
	};

	LPAR() {
	    return this.getToken(wktParser.LPAR, 0);
	};

	polygon = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PolygonContext);
	    } else {
	        return this.getTypedRuleContext(PolygonContext,i);
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


	enterRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.enterMultiPolyhedralSurfaceGeometry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.exitMultiPolyhedralSurfaceGeometry(this);
		}
	}


}



class MultiTinGeometryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktParser.RULE_multiTinGeometry;
    }

	TIN() {
	    return this.getToken(wktParser.TIN, 0);
	};

	EMPTY() {
	    return this.getToken(wktParser.EMPTY, 0);
	};

	LPAR() {
	    return this.getToken(wktParser.LPAR, 0);
	};

	polygon = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PolygonContext);
	    } else {
	        return this.getTypedRuleContext(PolygonContext,i);
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


	enterRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.enterMultiTinGeometry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.exitMultiTinGeometry(this);
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



class PolygonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktParser.RULE_polygon;
    }

	LPAR() {
	    return this.getToken(wktParser.LPAR, 0);
	};

	lineString = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineStringContext);
	    } else {
	        return this.getTypedRuleContext(LineStringContext,i);
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


	EMPTY() {
	    return this.getToken(wktParser.EMPTY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.enterPolygon(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.exitPolygon(this);
		}
	}


}



class LineStringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wktParser.RULE_lineString;
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


	EMPTY() {
	    return this.getToken(wktParser.EMPTY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.enterLineString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.exitLineString(this);
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

	DECIMAL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wktParser.DECIMAL);
	    } else {
	        return this.getToken(wktParser.DECIMAL, i);
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
        this.ruleIndex = wktParser.RULE_name;
    }

	STRING() {
	    return this.getToken(wktParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wktListener ) {
	        listener.exitName(this);
		}
	}


}




wktParser.GeometryCollectionContext = GeometryCollectionContext; 
wktParser.GeometryContext = GeometryContext; 
wktParser.PointGeometryContext = PointGeometryContext; 
wktParser.LineStringGeometryContext = LineStringGeometryContext; 
wktParser.PolygonGeometryContext = PolygonGeometryContext; 
wktParser.MultiCurveGeometryContext = MultiCurveGeometryContext; 
wktParser.MultiSurfaceGeometryContext = MultiSurfaceGeometryContext; 
wktParser.CurvePolygonGeometryContext = CurvePolygonGeometryContext; 
wktParser.CompoundCurveGeometryContext = CompoundCurveGeometryContext; 
wktParser.MultiPointGeometryContext = MultiPointGeometryContext; 
wktParser.MultiLineStringGeometryContext = MultiLineStringGeometryContext; 
wktParser.MultiPolygonGeometryContext = MultiPolygonGeometryContext; 
wktParser.MultiPolyhedralSurfaceGeometryContext = MultiPolyhedralSurfaceGeometryContext; 
wktParser.MultiTinGeometryContext = MultiTinGeometryContext; 
wktParser.CircularStringGeometryContext = CircularStringGeometryContext; 
wktParser.PointOrClosedPointContext = PointOrClosedPointContext; 
wktParser.PolygonContext = PolygonContext; 
wktParser.LineStringContext = LineStringContext; 
wktParser.PointContext = PointContext; 
wktParser.NameContext = NameContext; 
