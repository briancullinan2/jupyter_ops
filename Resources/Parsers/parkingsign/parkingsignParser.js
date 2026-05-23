// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/parkingsign/parkingsign.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import parkingsignListener from './parkingsignListener.js';
const serializedATN = [4,1,53,297,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,1,0,5,0,
70,8,0,10,0,12,0,73,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,85,8,
1,1,2,3,2,88,8,2,1,2,1,2,1,2,1,2,1,3,3,3,95,8,3,1,3,1,3,3,3,99,8,3,1,3,3,
3,102,8,3,1,3,3,3,105,8,3,1,4,3,4,108,8,4,1,4,1,4,3,4,112,8,4,1,4,4,4,115,
8,4,11,4,12,4,116,1,4,3,4,120,8,4,1,4,3,4,123,8,4,1,5,3,5,126,8,5,1,5,1,
5,4,5,130,8,5,11,5,12,5,131,1,5,3,5,135,8,5,1,5,3,5,138,8,5,1,6,1,6,1,6,
1,6,1,6,3,6,145,8,6,1,6,3,6,148,8,6,1,6,3,6,151,8,6,1,7,1,7,1,7,1,7,3,7,
157,8,7,1,7,1,7,1,7,3,7,162,8,7,1,7,3,7,165,8,7,1,8,1,8,1,8,1,8,1,8,1,8,
1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,180,8,8,1,9,1,9,3,9,184,8,9,1,9,1,9,1,9,
1,9,1,9,1,9,1,10,1,10,1,10,1,11,1,11,1,11,1,12,1,12,1,12,1,13,1,13,1,13,
1,13,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,
16,1,16,3,16,220,8,16,1,17,1,17,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,
1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,3,20,241,8,20,1,21,1,21,1,22,
1,22,1,23,1,23,1,24,1,24,3,24,251,8,24,1,24,1,24,1,25,1,25,1,26,1,26,1,27,
1,27,1,27,3,27,262,8,27,1,28,1,28,1,29,1,29,1,29,3,29,269,8,29,1,29,1,29,
3,29,273,8,29,1,29,1,29,3,29,277,8,29,1,30,1,30,1,30,3,30,282,8,30,1,31,
1,31,1,31,3,31,287,8,31,1,32,1,32,3,32,291,8,32,1,33,1,33,3,33,295,8,33,
1,33,0,0,34,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,
44,46,48,50,52,54,56,58,60,62,64,66,0,7,1,0,48,49,1,0,16,17,1,0,9,11,1,0,
21,22,1,0,35,36,1,0,32,33,1,0,40,46,310,0,71,1,0,0,0,2,84,1,0,0,0,4,87,1,
0,0,0,6,94,1,0,0,0,8,107,1,0,0,0,10,125,1,0,0,0,12,139,1,0,0,0,14,156,1,
0,0,0,16,166,1,0,0,0,18,183,1,0,0,0,20,191,1,0,0,0,22,194,1,0,0,0,24,197,
1,0,0,0,26,200,1,0,0,0,28,204,1,0,0,0,30,208,1,0,0,0,32,219,1,0,0,0,34,221,
1,0,0,0,36,223,1,0,0,0,38,227,1,0,0,0,40,240,1,0,0,0,42,242,1,0,0,0,44,244,
1,0,0,0,46,246,1,0,0,0,48,248,1,0,0,0,50,254,1,0,0,0,52,256,1,0,0,0,54,261,
1,0,0,0,56,263,1,0,0,0,58,276,1,0,0,0,60,281,1,0,0,0,62,286,1,0,0,0,64,290,
1,0,0,0,66,294,1,0,0,0,68,70,3,2,1,0,69,68,1,0,0,0,70,73,1,0,0,0,71,69,1,
0,0,0,71,72,1,0,0,0,72,74,1,0,0,0,73,71,1,0,0,0,74,75,5,0,0,1,75,1,1,0,0,
0,76,85,3,4,2,0,77,85,3,6,3,0,78,85,3,8,4,0,79,85,3,10,5,0,80,85,3,14,7,
0,81,85,3,16,8,0,82,85,3,12,6,0,83,85,3,18,9,0,84,76,1,0,0,0,84,77,1,0,0,
0,84,78,1,0,0,0,84,79,1,0,0,0,84,80,1,0,0,0,84,81,1,0,0,0,84,82,1,0,0,0,
84,83,1,0,0,0,85,3,1,0,0,0,86,88,3,22,11,0,87,86,1,0,0,0,87,88,1,0,0,0,88,
89,1,0,0,0,89,90,3,32,16,0,90,91,3,56,28,0,91,92,3,20,10,0,92,5,1,0,0,0,
93,95,3,22,11,0,94,93,1,0,0,0,94,95,1,0,0,0,95,98,1,0,0,0,96,99,3,54,27,
0,97,99,3,32,16,0,98,96,1,0,0,0,98,97,1,0,0,0,99,101,1,0,0,0,100,102,5,15,
0,0,101,100,1,0,0,0,101,102,1,0,0,0,102,104,1,0,0,0,103,105,3,40,20,0,104,
103,1,0,0,0,104,105,1,0,0,0,105,7,1,0,0,0,106,108,3,48,24,0,107,106,1,0,
0,0,107,108,1,0,0,0,108,111,1,0,0,0,109,112,3,24,12,0,110,112,3,26,13,0,
111,109,1,0,0,0,111,110,1,0,0,0,112,114,1,0,0,0,113,115,3,32,16,0,114,113,
1,0,0,0,115,116,1,0,0,0,116,114,1,0,0,0,116,117,1,0,0,0,117,119,1,0,0,0,
118,120,5,15,0,0,119,118,1,0,0,0,119,120,1,0,0,0,120,122,1,0,0,0,121,123,
3,40,20,0,122,121,1,0,0,0,122,123,1,0,0,0,123,9,1,0,0,0,124,126,3,48,24,
0,125,124,1,0,0,0,125,126,1,0,0,0,126,127,1,0,0,0,127,129,3,28,14,0,128,
130,3,32,16,0,129,128,1,0,0,0,130,131,1,0,0,0,131,129,1,0,0,0,131,132,1,
0,0,0,132,134,1,0,0,0,133,135,5,15,0,0,134,133,1,0,0,0,134,135,1,0,0,0,135,
137,1,0,0,0,136,138,3,40,20,0,137,136,1,0,0,0,137,138,1,0,0,0,138,11,1,0,
0,0,139,140,3,48,24,0,140,141,5,37,0,0,141,144,3,22,11,0,142,145,3,54,27,
0,143,145,3,32,16,0,144,142,1,0,0,0,144,143,1,0,0,0,145,147,1,0,0,0,146,
148,5,15,0,0,147,146,1,0,0,0,147,148,1,0,0,0,148,150,1,0,0,0,149,151,3,40,
20,0,150,149,1,0,0,0,150,151,1,0,0,0,151,13,1,0,0,0,152,153,5,52,0,0,153,
157,5,34,0,0,154,155,5,52,0,0,155,157,3,50,25,0,156,152,1,0,0,0,156,154,
1,0,0,0,157,158,1,0,0,0,158,159,5,8,0,0,159,161,3,32,16,0,160,162,5,15,0,
0,161,160,1,0,0,0,161,162,1,0,0,0,162,164,1,0,0,0,163,165,3,40,20,0,164,
163,1,0,0,0,164,165,1,0,0,0,165,15,1,0,0,0,166,167,5,52,0,0,167,168,5,34,
0,0,168,169,5,8,0,0,169,170,3,40,20,0,170,171,3,40,20,0,171,172,3,58,29,
0,172,173,3,58,29,0,173,174,5,9,0,0,174,175,5,9,0,0,175,176,3,58,29,0,176,
179,3,58,29,0,177,178,5,15,0,0,178,180,5,20,0,0,179,177,1,0,0,0,179,180,
1,0,0,0,180,17,1,0,0,0,181,182,5,28,0,0,182,184,5,29,0,0,183,181,1,0,0,0,
183,184,1,0,0,0,184,185,1,0,0,0,185,186,5,30,0,0,186,187,5,7,0,0,187,188,
5,52,0,0,188,189,5,31,0,0,189,190,3,52,26,0,190,19,1,0,0,0,191,192,5,47,
0,0,192,193,7,0,0,0,193,21,1,0,0,0,194,195,5,7,0,0,195,196,5,8,0,0,196,23,
1,0,0,0,197,198,5,7,0,0,198,199,5,25,0,0,199,25,1,0,0,0,200,201,5,26,0,0,
201,202,5,8,0,0,202,203,5,27,0,0,203,27,1,0,0,0,204,205,5,38,0,0,205,206,
5,39,0,0,206,207,5,27,0,0,207,29,1,0,0,0,208,209,5,18,0,0,209,210,5,19,0,
0,210,31,1,0,0,0,211,212,3,58,29,0,212,213,3,44,22,0,213,214,3,58,29,0,214,
220,1,0,0,0,215,216,5,52,0,0,216,217,3,44,22,0,217,218,3,58,29,0,218,220,
1,0,0,0,219,211,1,0,0,0,219,215,1,0,0,0,220,33,1,0,0,0,221,222,7,1,0,0,222,
35,1,0,0,0,223,224,3,56,28,0,224,225,3,44,22,0,225,226,3,56,28,0,226,37,
1,0,0,0,227,228,3,56,28,0,228,229,3,46,23,0,229,230,3,56,28,0,230,39,1,0,
0,0,231,241,3,34,17,0,232,241,3,30,15,0,233,241,5,20,0,0,234,241,3,38,19,
0,235,241,3,36,18,0,236,237,3,56,28,0,237,238,5,27,0,0,238,241,1,0,0,0,239,
241,3,56,28,0,240,231,1,0,0,0,240,232,1,0,0,0,240,233,1,0,0,0,240,234,1,
0,0,0,240,235,1,0,0,0,240,236,1,0,0,0,240,239,1,0,0,0,241,41,1,0,0,0,242,
243,3,40,20,0,243,43,1,0,0,0,244,245,7,2,0,0,245,45,1,0,0,0,246,247,7,3,
0,0,247,47,1,0,0,0,248,250,5,23,0,0,249,251,5,11,0,0,250,249,1,0,0,0,250,
251,1,0,0,0,251,252,1,0,0,0,252,253,5,24,0,0,253,49,1,0,0,0,254,255,7,4,
0,0,255,51,1,0,0,0,256,257,7,5,0,0,257,53,1,0,0,0,258,262,5,12,0,0,259,260,
5,13,0,0,260,262,5,14,0,0,261,258,1,0,0,0,261,259,1,0,0,0,262,55,1,0,0,0,
263,264,7,6,0,0,264,57,1,0,0,0,265,268,5,52,0,0,266,267,5,1,0,0,267,269,
5,52,0,0,268,266,1,0,0,0,268,269,1,0,0,0,269,272,1,0,0,0,270,273,3,64,32,
0,271,273,3,66,33,0,272,270,1,0,0,0,272,271,1,0,0,0,272,273,1,0,0,0,273,
277,1,0,0,0,274,277,3,60,30,0,275,277,3,62,31,0,276,265,1,0,0,0,276,274,
1,0,0,0,276,275,1,0,0,0,277,59,1,0,0,0,278,282,5,50,0,0,279,280,5,2,0,0,
280,282,5,50,0,0,281,278,1,0,0,0,281,279,1,0,0,0,282,61,1,0,0,0,283,287,
5,51,0,0,284,285,5,2,0,0,285,287,5,51,0,0,286,283,1,0,0,0,286,284,1,0,0,
0,287,63,1,0,0,0,288,291,5,3,0,0,289,291,5,4,0,0,290,288,1,0,0,0,290,289,
1,0,0,0,291,65,1,0,0,0,292,295,5,5,0,0,293,295,5,6,0,0,294,292,1,0,0,0,294,
293,1,0,0,0,295,67,1,0,0,0,35,71,84,87,94,98,101,104,107,111,116,119,122,
125,131,134,137,144,147,150,156,161,164,179,183,219,240,250,261,268,272,
276,281,286,290,294];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class parkingsignParser extends antlr4.Parser {

    static grammarFileName = "parkingsign.g4";
    static literalNames = [ null, "':'", "'12'", "'AM'", "'A.M.'", "'PM'", 
                            "'P.M.'", "'NO'", "'PARKING'", "'TO'", "'THRU'", 
                            "'-'", "'ANYTIME'", "'ANY'", "'TIME'", "'EXCEPT'", 
                            "'DAILY'", "'NIGHTLY'", "'SCHOOL'", "'DAYS'", 
                            "'HOLIDAYS'", "'AND'", "'&'", "'TOW'", "'AWAY'", 
                            "'STOPPING'", "'VALET'", "'ONLY'", "'VEHICLES'", 
                            "'WITH'", "'DISTRICT'", "'PERMITS'", "'EXEMPTED'", 
                            "'EXEMPT'", "'HOUR'", "'MINUTE'", "'MIN'", "'TEMPORARY'", 
                            "'PASSENGER'", "'LOADING'", null, null, null, 
                            null, null, null, null, "'STREET'", "'SWEEPING'", 
                            "'CLEANING'", "'NOON'", "'MIDNIGHT'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, "NO", 
                             "PARKING", "TO", "THRU", "DASH", "ANYTIME", 
                             "ANY", "TIME", "EXCEPT", "DAILY", "NIGHTLY", 
                             "SCHOOL", "DAYS", "HOLIDAYS", "AND", "AMPERSAND", 
                             "TOW", "AWAY", "STOPPING", "VALET", "ONLY", 
                             "VEHICLES", "WITH", "DISTRICT", "PERMITS", 
                             "EXEMPTED", "EXEMPT", "HOUR", "MINUTE", "MIN", 
                             "TEMPORARY", "PASSENGER", "LOADING", "MON", 
                             "TUE", "WED", "THU", "FRI", "SAT", "SUN", "STREET", 
                             "SWEEPING", "CLEANING", "NOON", "MIDNIGHT", 
                             "INT", "WS" ];
    static ruleNames = [ "parkingSigns", "parkingSign", "streetSweepingSign", 
                         "noParkingSign", "noStoppingSign", "passengerLoadingSign", 
                         "temporaryNoParkingSign", "singleTimeLimitSign", 
                         "doubleTimeLimitSign", "permitSign", "streetSweeping", 
                         "noParking", "noStopping", "valetOnly", "loadingOnly", 
                         "schoolDays", "timeRange", "everyDay", "dayToDay", 
                         "dayAndDay", "dayRange", "dayRangePlus", "to", 
                         "and_", "towAway", "minute", "exempt", "anyTime", 
                         "day", "time", "twelveNoon", "twelveMidnight", 
                         "am", "pm" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = parkingsignParser.ruleNames;
        this.literalNames = parkingsignParser.literalNames;
        this.symbolicNames = parkingsignParser.symbolicNames;
    }



	parkingSigns() {
	    let localctx = new ParkingSignsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, parkingsignParser.RULE_parkingSigns);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1417687172) !== 0) || ((((_la - 38)) & ~0x1f) === 0 && ((1 << (_la - 38)) & 28673) !== 0)) {
	            this.state = 68;
	            this.parkingSign();
	            this.state = 73;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 74;
	        this.match(parkingsignParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parkingSign() {
	    let localctx = new ParkingSignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, parkingsignParser.RULE_parkingSign);
	    try {
	        this.state = 84;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 76;
	            this.streetSweepingSign();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 77;
	            this.noParkingSign();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 78;
	            this.noStoppingSign();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 79;
	            this.passengerLoadingSign();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 80;
	            this.singleTimeLimitSign();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 81;
	            this.doubleTimeLimitSign();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 82;
	            this.temporaryNoParkingSign();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 83;
	            this.permitSign();
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



	streetSweepingSign() {
	    let localctx = new StreetSweepingSignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, parkingsignParser.RULE_streetSweepingSign);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 86;
	            this.noParking();
	        }

	        this.state = 89;
	        this.timeRange();
	        this.state = 90;
	        this.day();
	        this.state = 91;
	        this.streetSweeping();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	noParkingSign() {
	    let localctx = new NoParkingSignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, parkingsignParser.RULE_noParkingSign);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 93;
	            this.noParking();
	        }

	        this.state = 98;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	        case 13:
	            this.state = 96;
	            this.anyTime();
	            break;
	        case 2:
	        case 50:
	        case 51:
	        case 52:
	            this.state = 97;
	            this.timeRange();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 101;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 100;
	            this.match(parkingsignParser.EXCEPT);
	        }

	        this.state = 104;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 16)) & ~0x1f) === 0 && ((1 << (_la - 16)) & 2130706455) !== 0)) {
	            this.state = 103;
	            this.dayRange();
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



	noStoppingSign() {
	    let localctx = new NoStoppingSignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, parkingsignParser.RULE_noStoppingSign);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 106;
	            this.towAway();
	        }

	        this.state = 111;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.state = 109;
	            this.noStopping();
	            break;
	        case 26:
	            this.state = 110;
	            this.valetOnly();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 114; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 113;
	        		this.timeRange();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 116; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,9, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 119;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 118;
	            this.match(parkingsignParser.EXCEPT);
	        }

	        this.state = 122;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 16)) & ~0x1f) === 0 && ((1 << (_la - 16)) & 2130706455) !== 0)) {
	            this.state = 121;
	            this.dayRange();
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



	passengerLoadingSign() {
	    let localctx = new PassengerLoadingSignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, parkingsignParser.RULE_passengerLoadingSign);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 124;
	            this.towAway();
	        }

	        this.state = 127;
	        this.loadingOnly();
	        this.state = 129; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 128;
	        		this.timeRange();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 131; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,13, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 134;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 133;
	            this.match(parkingsignParser.EXCEPT);
	        }

	        this.state = 137;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 16)) & ~0x1f) === 0 && ((1 << (_la - 16)) & 2130706455) !== 0)) {
	            this.state = 136;
	            this.dayRange();
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



	temporaryNoParkingSign() {
	    let localctx = new TemporaryNoParkingSignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, parkingsignParser.RULE_temporaryNoParkingSign);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 139;
	        this.towAway();
	        this.state = 140;
	        this.match(parkingsignParser.TEMPORARY);
	        this.state = 141;
	        this.noParking();
	        this.state = 144;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	        case 13:
	            this.state = 142;
	            this.anyTime();
	            break;
	        case 2:
	        case 50:
	        case 51:
	        case 52:
	            this.state = 143;
	            this.timeRange();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 147;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 146;
	            this.match(parkingsignParser.EXCEPT);
	        }

	        this.state = 150;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 16)) & ~0x1f) === 0 && ((1 << (_la - 16)) & 2130706455) !== 0)) {
	            this.state = 149;
	            this.dayRange();
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



	singleTimeLimitSign() {
	    let localctx = new SingleTimeLimitSignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, parkingsignParser.RULE_singleTimeLimitSign);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 152;
	            this.match(parkingsignParser.INT);
	            this.state = 153;
	            this.match(parkingsignParser.HOUR);
	            break;

	        case 2:
	            this.state = 154;
	            this.match(parkingsignParser.INT);
	            this.state = 155;
	            this.minute();
	            break;

	        }
	        this.state = 158;
	        this.match(parkingsignParser.PARKING);
	        this.state = 159;
	        this.timeRange();
	        this.state = 161;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 160;
	            this.match(parkingsignParser.EXCEPT);
	        }

	        this.state = 164;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 16)) & ~0x1f) === 0 && ((1 << (_la - 16)) & 2130706455) !== 0)) {
	            this.state = 163;
	            this.dayRange();
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



	doubleTimeLimitSign() {
	    let localctx = new DoubleTimeLimitSignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, parkingsignParser.RULE_doubleTimeLimitSign);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 166;
	        this.match(parkingsignParser.INT);
	        this.state = 167;
	        this.match(parkingsignParser.HOUR);
	        this.state = 168;
	        this.match(parkingsignParser.PARKING);
	        this.state = 169;
	        this.dayRange();
	        this.state = 170;
	        this.dayRange();
	        this.state = 171;
	        this.time();
	        this.state = 172;
	        this.time();
	        this.state = 173;
	        this.match(parkingsignParser.TO);
	        this.state = 174;
	        this.match(parkingsignParser.TO);
	        this.state = 175;
	        this.time();
	        this.state = 176;
	        this.time();
	        this.state = 179;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 177;
	            this.match(parkingsignParser.EXCEPT);
	            this.state = 178;
	            this.match(parkingsignParser.HOLIDAYS);
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



	permitSign() {
	    let localctx = new PermitSignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, parkingsignParser.RULE_permitSign);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 183;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===28) {
	            this.state = 181;
	            this.match(parkingsignParser.VEHICLES);
	            this.state = 182;
	            this.match(parkingsignParser.WITH);
	        }

	        this.state = 185;
	        this.match(parkingsignParser.DISTRICT);
	        this.state = 186;
	        this.match(parkingsignParser.NO);
	        this.state = 187;
	        this.match(parkingsignParser.INT);
	        this.state = 188;
	        this.match(parkingsignParser.PERMITS);
	        this.state = 189;
	        this.exempt();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	streetSweeping() {
	    let localctx = new StreetSweepingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, parkingsignParser.RULE_streetSweeping);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 191;
	        this.match(parkingsignParser.STREET);
	        this.state = 192;
	        _la = this._input.LA(1);
	        if(!(_la===48 || _la===49)) {
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



	noParking() {
	    let localctx = new NoParkingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, parkingsignParser.RULE_noParking);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 194;
	        this.match(parkingsignParser.NO);
	        this.state = 195;
	        this.match(parkingsignParser.PARKING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	noStopping() {
	    let localctx = new NoStoppingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, parkingsignParser.RULE_noStopping);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 197;
	        this.match(parkingsignParser.NO);
	        this.state = 198;
	        this.match(parkingsignParser.STOPPING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valetOnly() {
	    let localctx = new ValetOnlyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, parkingsignParser.RULE_valetOnly);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 200;
	        this.match(parkingsignParser.VALET);
	        this.state = 201;
	        this.match(parkingsignParser.PARKING);
	        this.state = 202;
	        this.match(parkingsignParser.ONLY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	loadingOnly() {
	    let localctx = new LoadingOnlyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, parkingsignParser.RULE_loadingOnly);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 204;
	        this.match(parkingsignParser.PASSENGER);
	        this.state = 205;
	        this.match(parkingsignParser.LOADING);
	        this.state = 206;
	        this.match(parkingsignParser.ONLY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	schoolDays() {
	    let localctx = new SchoolDaysContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, parkingsignParser.RULE_schoolDays);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 208;
	        this.match(parkingsignParser.SCHOOL);
	        this.state = 209;
	        this.match(parkingsignParser.DAYS);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	timeRange() {
	    let localctx = new TimeRangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, parkingsignParser.RULE_timeRange);
	    try {
	        this.state = 219;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 211;
	            this.time();
	            this.state = 212;
	            this.to();
	            this.state = 213;
	            this.time();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 215;
	            this.match(parkingsignParser.INT);
	            this.state = 216;
	            this.to();
	            this.state = 217;
	            this.time();
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



	everyDay() {
	    let localctx = new EveryDayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, parkingsignParser.RULE_everyDay);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 221;
	        _la = this._input.LA(1);
	        if(!(_la===16 || _la===17)) {
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



	dayToDay() {
	    let localctx = new DayToDayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, parkingsignParser.RULE_dayToDay);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 223;
	        this.day();
	        this.state = 224;
	        this.to();
	        this.state = 225;
	        this.day();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dayAndDay() {
	    let localctx = new DayAndDayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, parkingsignParser.RULE_dayAndDay);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 227;
	        this.day();
	        this.state = 228;
	        this.and_();
	        this.state = 229;
	        this.day();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dayRange() {
	    let localctx = new DayRangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, parkingsignParser.RULE_dayRange);
	    try {
	        this.state = 240;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 231;
	            this.everyDay();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 232;
	            this.schoolDays();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 233;
	            this.match(parkingsignParser.HOLIDAYS);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 234;
	            this.dayAndDay();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 235;
	            this.dayToDay();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 236;
	            this.day();
	            this.state = 237;
	            this.match(parkingsignParser.ONLY);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 239;
	            this.day();
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



	dayRangePlus() {
	    let localctx = new DayRangePlusContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, parkingsignParser.RULE_dayRangePlus);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 242;
	        this.dayRange();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	to() {
	    let localctx = new ToContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, parkingsignParser.RULE_to);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 244;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 3584) !== 0))) {
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



	and_() {
	    let localctx = new And_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, parkingsignParser.RULE_and_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 246;
	        _la = this._input.LA(1);
	        if(!(_la===21 || _la===22)) {
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



	towAway() {
	    let localctx = new TowAwayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, parkingsignParser.RULE_towAway);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 248;
	        this.match(parkingsignParser.TOW);
	        this.state = 250;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 249;
	            this.match(parkingsignParser.DASH);
	        }

	        this.state = 252;
	        this.match(parkingsignParser.AWAY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	minute() {
	    let localctx = new MinuteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, parkingsignParser.RULE_minute);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 254;
	        _la = this._input.LA(1);
	        if(!(_la===35 || _la===36)) {
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



	exempt() {
	    let localctx = new ExemptContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, parkingsignParser.RULE_exempt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 256;
	        _la = this._input.LA(1);
	        if(!(_la===32 || _la===33)) {
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



	anyTime() {
	    let localctx = new AnyTimeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, parkingsignParser.RULE_anyTime);
	    try {
	        this.state = 261;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 258;
	            this.match(parkingsignParser.ANYTIME);
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 259;
	            this.match(parkingsignParser.ANY);
	            this.state = 260;
	            this.match(parkingsignParser.TIME);
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



	day() {
	    let localctx = new DayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, parkingsignParser.RULE_day);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 263;
	        _la = this._input.LA(1);
	        if(!(((((_la - 40)) & ~0x1f) === 0 && ((1 << (_la - 40)) & 127) !== 0))) {
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



	time() {
	    let localctx = new TimeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, parkingsignParser.RULE_time);
	    var _la = 0;
	    try {
	        this.state = 276;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 265;
	            this.match(parkingsignParser.INT);
	            this.state = 268;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===1) {
	                this.state = 266;
	                this.match(parkingsignParser.T__0);
	                this.state = 267;
	                this.match(parkingsignParser.INT);
	            }

	            this.state = 272;
	            this._errHandler.sync(this);
	            switch (this._input.LA(1)) {
	            case 3:
	            case 4:
	            	this.state = 270;
	            	this.am();
	            	break;
	            case 5:
	            case 6:
	            	this.state = 271;
	            	this.pm();
	            	break;
	            case -1:
	            case 2:
	            case 7:
	            case 9:
	            case 10:
	            case 11:
	            case 12:
	            case 13:
	            case 15:
	            case 16:
	            case 17:
	            case 18:
	            case 20:
	            case 23:
	            case 26:
	            case 28:
	            case 30:
	            case 38:
	            case 40:
	            case 41:
	            case 42:
	            case 43:
	            case 44:
	            case 45:
	            case 46:
	            case 50:
	            case 51:
	            case 52:
	            	break;
	            default:
	            	break;
	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 274;
	            this.twelveNoon();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 275;
	            this.twelveMidnight();
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



	twelveNoon() {
	    let localctx = new TwelveNoonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, parkingsignParser.RULE_twelveNoon);
	    try {
	        this.state = 281;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 50:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 278;
	            this.match(parkingsignParser.NOON);
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 279;
	            this.match(parkingsignParser.T__1);
	            this.state = 280;
	            this.match(parkingsignParser.NOON);
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



	twelveMidnight() {
	    let localctx = new TwelveMidnightContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, parkingsignParser.RULE_twelveMidnight);
	    try {
	        this.state = 286;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 51:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 283;
	            this.match(parkingsignParser.MIDNIGHT);
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 284;
	            this.match(parkingsignParser.T__1);
	            this.state = 285;
	            this.match(parkingsignParser.MIDNIGHT);
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



	am() {
	    let localctx = new AmContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, parkingsignParser.RULE_am);
	    try {
	        this.state = 290;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 288;
	            this.match(parkingsignParser.T__2);
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 289;
	            this.match(parkingsignParser.T__3);
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



	pm() {
	    let localctx = new PmContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, parkingsignParser.RULE_pm);
	    try {
	        this.state = 294;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 292;
	            this.match(parkingsignParser.T__4);
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 293;
	            this.match(parkingsignParser.T__5);
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

parkingsignParser.EOF = antlr4.Token.EOF;
parkingsignParser.T__0 = 1;
parkingsignParser.T__1 = 2;
parkingsignParser.T__2 = 3;
parkingsignParser.T__3 = 4;
parkingsignParser.T__4 = 5;
parkingsignParser.T__5 = 6;
parkingsignParser.NO = 7;
parkingsignParser.PARKING = 8;
parkingsignParser.TO = 9;
parkingsignParser.THRU = 10;
parkingsignParser.DASH = 11;
parkingsignParser.ANYTIME = 12;
parkingsignParser.ANY = 13;
parkingsignParser.TIME = 14;
parkingsignParser.EXCEPT = 15;
parkingsignParser.DAILY = 16;
parkingsignParser.NIGHTLY = 17;
parkingsignParser.SCHOOL = 18;
parkingsignParser.DAYS = 19;
parkingsignParser.HOLIDAYS = 20;
parkingsignParser.AND = 21;
parkingsignParser.AMPERSAND = 22;
parkingsignParser.TOW = 23;
parkingsignParser.AWAY = 24;
parkingsignParser.STOPPING = 25;
parkingsignParser.VALET = 26;
parkingsignParser.ONLY = 27;
parkingsignParser.VEHICLES = 28;
parkingsignParser.WITH = 29;
parkingsignParser.DISTRICT = 30;
parkingsignParser.PERMITS = 31;
parkingsignParser.EXEMPTED = 32;
parkingsignParser.EXEMPT = 33;
parkingsignParser.HOUR = 34;
parkingsignParser.MINUTE = 35;
parkingsignParser.MIN = 36;
parkingsignParser.TEMPORARY = 37;
parkingsignParser.PASSENGER = 38;
parkingsignParser.LOADING = 39;
parkingsignParser.MON = 40;
parkingsignParser.TUE = 41;
parkingsignParser.WED = 42;
parkingsignParser.THU = 43;
parkingsignParser.FRI = 44;
parkingsignParser.SAT = 45;
parkingsignParser.SUN = 46;
parkingsignParser.STREET = 47;
parkingsignParser.SWEEPING = 48;
parkingsignParser.CLEANING = 49;
parkingsignParser.NOON = 50;
parkingsignParser.MIDNIGHT = 51;
parkingsignParser.INT = 52;
parkingsignParser.WS = 53;

parkingsignParser.RULE_parkingSigns = 0;
parkingsignParser.RULE_parkingSign = 1;
parkingsignParser.RULE_streetSweepingSign = 2;
parkingsignParser.RULE_noParkingSign = 3;
parkingsignParser.RULE_noStoppingSign = 4;
parkingsignParser.RULE_passengerLoadingSign = 5;
parkingsignParser.RULE_temporaryNoParkingSign = 6;
parkingsignParser.RULE_singleTimeLimitSign = 7;
parkingsignParser.RULE_doubleTimeLimitSign = 8;
parkingsignParser.RULE_permitSign = 9;
parkingsignParser.RULE_streetSweeping = 10;
parkingsignParser.RULE_noParking = 11;
parkingsignParser.RULE_noStopping = 12;
parkingsignParser.RULE_valetOnly = 13;
parkingsignParser.RULE_loadingOnly = 14;
parkingsignParser.RULE_schoolDays = 15;
parkingsignParser.RULE_timeRange = 16;
parkingsignParser.RULE_everyDay = 17;
parkingsignParser.RULE_dayToDay = 18;
parkingsignParser.RULE_dayAndDay = 19;
parkingsignParser.RULE_dayRange = 20;
parkingsignParser.RULE_dayRangePlus = 21;
parkingsignParser.RULE_to = 22;
parkingsignParser.RULE_and_ = 23;
parkingsignParser.RULE_towAway = 24;
parkingsignParser.RULE_minute = 25;
parkingsignParser.RULE_exempt = 26;
parkingsignParser.RULE_anyTime = 27;
parkingsignParser.RULE_day = 28;
parkingsignParser.RULE_time = 29;
parkingsignParser.RULE_twelveNoon = 30;
parkingsignParser.RULE_twelveMidnight = 31;
parkingsignParser.RULE_am = 32;
parkingsignParser.RULE_pm = 33;

class ParkingSignsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = parkingsignParser.RULE_parkingSigns;
    }

	EOF() {
	    return this.getToken(parkingsignParser.EOF, 0);
	};

	parkingSign = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParkingSignContext);
	    } else {
	        return this.getTypedRuleContext(ParkingSignContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.enterParkingSigns(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.exitParkingSigns(this);
		}
	}


}



class ParkingSignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = parkingsignParser.RULE_parkingSign;
    }

	streetSweepingSign() {
	    return this.getTypedRuleContext(StreetSweepingSignContext,0);
	};

	noParkingSign() {
	    return this.getTypedRuleContext(NoParkingSignContext,0);
	};

	noStoppingSign() {
	    return this.getTypedRuleContext(NoStoppingSignContext,0);
	};

	passengerLoadingSign() {
	    return this.getTypedRuleContext(PassengerLoadingSignContext,0);
	};

	singleTimeLimitSign() {
	    return this.getTypedRuleContext(SingleTimeLimitSignContext,0);
	};

	doubleTimeLimitSign() {
	    return this.getTypedRuleContext(DoubleTimeLimitSignContext,0);
	};

	temporaryNoParkingSign() {
	    return this.getTypedRuleContext(TemporaryNoParkingSignContext,0);
	};

	permitSign() {
	    return this.getTypedRuleContext(PermitSignContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.enterParkingSign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.exitParkingSign(this);
		}
	}


}



class StreetSweepingSignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = parkingsignParser.RULE_streetSweepingSign;
    }

	timeRange() {
	    return this.getTypedRuleContext(TimeRangeContext,0);
	};

	day() {
	    return this.getTypedRuleContext(DayContext,0);
	};

	streetSweeping() {
	    return this.getTypedRuleContext(StreetSweepingContext,0);
	};

	noParking() {
	    return this.getTypedRuleContext(NoParkingContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.enterStreetSweepingSign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.exitStreetSweepingSign(this);
		}
	}


}



class NoParkingSignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = parkingsignParser.RULE_noParkingSign;
    }

	anyTime() {
	    return this.getTypedRuleContext(AnyTimeContext,0);
	};

	timeRange() {
	    return this.getTypedRuleContext(TimeRangeContext,0);
	};

	noParking() {
	    return this.getTypedRuleContext(NoParkingContext,0);
	};

	EXCEPT() {
	    return this.getToken(parkingsignParser.EXCEPT, 0);
	};

	dayRange() {
	    return this.getTypedRuleContext(DayRangeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.enterNoParkingSign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.exitNoParkingSign(this);
		}
	}


}



class NoStoppingSignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = parkingsignParser.RULE_noStoppingSign;
    }

	noStopping() {
	    return this.getTypedRuleContext(NoStoppingContext,0);
	};

	valetOnly() {
	    return this.getTypedRuleContext(ValetOnlyContext,0);
	};

	towAway() {
	    return this.getTypedRuleContext(TowAwayContext,0);
	};

	timeRange = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TimeRangeContext);
	    } else {
	        return this.getTypedRuleContext(TimeRangeContext,i);
	    }
	};

	EXCEPT() {
	    return this.getToken(parkingsignParser.EXCEPT, 0);
	};

	dayRange() {
	    return this.getTypedRuleContext(DayRangeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.enterNoStoppingSign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.exitNoStoppingSign(this);
		}
	}


}



class PassengerLoadingSignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = parkingsignParser.RULE_passengerLoadingSign;
    }

	loadingOnly() {
	    return this.getTypedRuleContext(LoadingOnlyContext,0);
	};

	towAway() {
	    return this.getTypedRuleContext(TowAwayContext,0);
	};

	timeRange = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TimeRangeContext);
	    } else {
	        return this.getTypedRuleContext(TimeRangeContext,i);
	    }
	};

	EXCEPT() {
	    return this.getToken(parkingsignParser.EXCEPT, 0);
	};

	dayRange() {
	    return this.getTypedRuleContext(DayRangeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.enterPassengerLoadingSign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.exitPassengerLoadingSign(this);
		}
	}


}



class TemporaryNoParkingSignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = parkingsignParser.RULE_temporaryNoParkingSign;
    }

	towAway() {
	    return this.getTypedRuleContext(TowAwayContext,0);
	};

	TEMPORARY() {
	    return this.getToken(parkingsignParser.TEMPORARY, 0);
	};

	noParking() {
	    return this.getTypedRuleContext(NoParkingContext,0);
	};

	anyTime() {
	    return this.getTypedRuleContext(AnyTimeContext,0);
	};

	timeRange() {
	    return this.getTypedRuleContext(TimeRangeContext,0);
	};

	EXCEPT() {
	    return this.getToken(parkingsignParser.EXCEPT, 0);
	};

	dayRange() {
	    return this.getTypedRuleContext(DayRangeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.enterTemporaryNoParkingSign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.exitTemporaryNoParkingSign(this);
		}
	}


}



class SingleTimeLimitSignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = parkingsignParser.RULE_singleTimeLimitSign;
    }

	PARKING() {
	    return this.getToken(parkingsignParser.PARKING, 0);
	};

	timeRange() {
	    return this.getTypedRuleContext(TimeRangeContext,0);
	};

	EXCEPT() {
	    return this.getToken(parkingsignParser.EXCEPT, 0);
	};

	dayRange() {
	    return this.getTypedRuleContext(DayRangeContext,0);
	};

	INT() {
	    return this.getToken(parkingsignParser.INT, 0);
	};

	HOUR() {
	    return this.getToken(parkingsignParser.HOUR, 0);
	};

	minute() {
	    return this.getTypedRuleContext(MinuteContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.enterSingleTimeLimitSign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.exitSingleTimeLimitSign(this);
		}
	}


}



class DoubleTimeLimitSignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = parkingsignParser.RULE_doubleTimeLimitSign;
    }

	INT() {
	    return this.getToken(parkingsignParser.INT, 0);
	};

	HOUR() {
	    return this.getToken(parkingsignParser.HOUR, 0);
	};

	PARKING() {
	    return this.getToken(parkingsignParser.PARKING, 0);
	};

	dayRange = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DayRangeContext);
	    } else {
	        return this.getTypedRuleContext(DayRangeContext,i);
	    }
	};

	time = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TimeContext);
	    } else {
	        return this.getTypedRuleContext(TimeContext,i);
	    }
	};

	TO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(parkingsignParser.TO);
	    } else {
	        return this.getToken(parkingsignParser.TO, i);
	    }
	};


	EXCEPT() {
	    return this.getToken(parkingsignParser.EXCEPT, 0);
	};

	HOLIDAYS() {
	    return this.getToken(parkingsignParser.HOLIDAYS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.enterDoubleTimeLimitSign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.exitDoubleTimeLimitSign(this);
		}
	}


}



class PermitSignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = parkingsignParser.RULE_permitSign;
    }

	DISTRICT() {
	    return this.getToken(parkingsignParser.DISTRICT, 0);
	};

	NO() {
	    return this.getToken(parkingsignParser.NO, 0);
	};

	INT() {
	    return this.getToken(parkingsignParser.INT, 0);
	};

	PERMITS() {
	    return this.getToken(parkingsignParser.PERMITS, 0);
	};

	exempt() {
	    return this.getTypedRuleContext(ExemptContext,0);
	};

	VEHICLES() {
	    return this.getToken(parkingsignParser.VEHICLES, 0);
	};

	WITH() {
	    return this.getToken(parkingsignParser.WITH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.enterPermitSign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.exitPermitSign(this);
		}
	}


}



class StreetSweepingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = parkingsignParser.RULE_streetSweeping;
    }

	STREET() {
	    return this.getToken(parkingsignParser.STREET, 0);
	};

	SWEEPING() {
	    return this.getToken(parkingsignParser.SWEEPING, 0);
	};

	CLEANING() {
	    return this.getToken(parkingsignParser.CLEANING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.enterStreetSweeping(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.exitStreetSweeping(this);
		}
	}


}



class NoParkingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = parkingsignParser.RULE_noParking;
    }

	NO() {
	    return this.getToken(parkingsignParser.NO, 0);
	};

	PARKING() {
	    return this.getToken(parkingsignParser.PARKING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.enterNoParking(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.exitNoParking(this);
		}
	}


}



class NoStoppingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = parkingsignParser.RULE_noStopping;
    }

	NO() {
	    return this.getToken(parkingsignParser.NO, 0);
	};

	STOPPING() {
	    return this.getToken(parkingsignParser.STOPPING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.enterNoStopping(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.exitNoStopping(this);
		}
	}


}



class ValetOnlyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = parkingsignParser.RULE_valetOnly;
    }

	VALET() {
	    return this.getToken(parkingsignParser.VALET, 0);
	};

	PARKING() {
	    return this.getToken(parkingsignParser.PARKING, 0);
	};

	ONLY() {
	    return this.getToken(parkingsignParser.ONLY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.enterValetOnly(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.exitValetOnly(this);
		}
	}


}



class LoadingOnlyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = parkingsignParser.RULE_loadingOnly;
    }

	PASSENGER() {
	    return this.getToken(parkingsignParser.PASSENGER, 0);
	};

	LOADING() {
	    return this.getToken(parkingsignParser.LOADING, 0);
	};

	ONLY() {
	    return this.getToken(parkingsignParser.ONLY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.enterLoadingOnly(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.exitLoadingOnly(this);
		}
	}


}



class SchoolDaysContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = parkingsignParser.RULE_schoolDays;
    }

	SCHOOL() {
	    return this.getToken(parkingsignParser.SCHOOL, 0);
	};

	DAYS() {
	    return this.getToken(parkingsignParser.DAYS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.enterSchoolDays(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.exitSchoolDays(this);
		}
	}


}



class TimeRangeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = parkingsignParser.RULE_timeRange;
    }

	time = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TimeContext);
	    } else {
	        return this.getTypedRuleContext(TimeContext,i);
	    }
	};

	to() {
	    return this.getTypedRuleContext(ToContext,0);
	};

	INT() {
	    return this.getToken(parkingsignParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.enterTimeRange(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.exitTimeRange(this);
		}
	}


}



class EveryDayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = parkingsignParser.RULE_everyDay;
    }

	DAILY() {
	    return this.getToken(parkingsignParser.DAILY, 0);
	};

	NIGHTLY() {
	    return this.getToken(parkingsignParser.NIGHTLY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.enterEveryDay(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.exitEveryDay(this);
		}
	}


}



class DayToDayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = parkingsignParser.RULE_dayToDay;
    }

	day = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DayContext);
	    } else {
	        return this.getTypedRuleContext(DayContext,i);
	    }
	};

	to() {
	    return this.getTypedRuleContext(ToContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.enterDayToDay(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.exitDayToDay(this);
		}
	}


}



class DayAndDayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = parkingsignParser.RULE_dayAndDay;
    }

	day = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DayContext);
	    } else {
	        return this.getTypedRuleContext(DayContext,i);
	    }
	};

	and_() {
	    return this.getTypedRuleContext(And_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.enterDayAndDay(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.exitDayAndDay(this);
		}
	}


}



class DayRangeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = parkingsignParser.RULE_dayRange;
    }

	everyDay() {
	    return this.getTypedRuleContext(EveryDayContext,0);
	};

	schoolDays() {
	    return this.getTypedRuleContext(SchoolDaysContext,0);
	};

	HOLIDAYS() {
	    return this.getToken(parkingsignParser.HOLIDAYS, 0);
	};

	dayAndDay() {
	    return this.getTypedRuleContext(DayAndDayContext,0);
	};

	dayToDay() {
	    return this.getTypedRuleContext(DayToDayContext,0);
	};

	day() {
	    return this.getTypedRuleContext(DayContext,0);
	};

	ONLY() {
	    return this.getToken(parkingsignParser.ONLY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.enterDayRange(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.exitDayRange(this);
		}
	}


}



class DayRangePlusContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = parkingsignParser.RULE_dayRangePlus;
    }

	dayRange() {
	    return this.getTypedRuleContext(DayRangeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.enterDayRangePlus(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.exitDayRangePlus(this);
		}
	}


}



class ToContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = parkingsignParser.RULE_to;
    }

	TO() {
	    return this.getToken(parkingsignParser.TO, 0);
	};

	DASH() {
	    return this.getToken(parkingsignParser.DASH, 0);
	};

	THRU() {
	    return this.getToken(parkingsignParser.THRU, 0);
	};

	enterRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.enterTo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.exitTo(this);
		}
	}


}



class And_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = parkingsignParser.RULE_and_;
    }

	AND() {
	    return this.getToken(parkingsignParser.AND, 0);
	};

	AMPERSAND() {
	    return this.getToken(parkingsignParser.AMPERSAND, 0);
	};

	enterRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.enterAnd_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.exitAnd_(this);
		}
	}


}



class TowAwayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = parkingsignParser.RULE_towAway;
    }

	TOW() {
	    return this.getToken(parkingsignParser.TOW, 0);
	};

	AWAY() {
	    return this.getToken(parkingsignParser.AWAY, 0);
	};

	DASH() {
	    return this.getToken(parkingsignParser.DASH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.enterTowAway(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.exitTowAway(this);
		}
	}


}



class MinuteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = parkingsignParser.RULE_minute;
    }

	MIN() {
	    return this.getToken(parkingsignParser.MIN, 0);
	};

	MINUTE() {
	    return this.getToken(parkingsignParser.MINUTE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.enterMinute(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.exitMinute(this);
		}
	}


}



class ExemptContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = parkingsignParser.RULE_exempt;
    }

	EXEMPT() {
	    return this.getToken(parkingsignParser.EXEMPT, 0);
	};

	EXEMPTED() {
	    return this.getToken(parkingsignParser.EXEMPTED, 0);
	};

	enterRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.enterExempt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.exitExempt(this);
		}
	}


}



class AnyTimeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = parkingsignParser.RULE_anyTime;
    }

	ANYTIME() {
	    return this.getToken(parkingsignParser.ANYTIME, 0);
	};

	ANY() {
	    return this.getToken(parkingsignParser.ANY, 0);
	};

	TIME() {
	    return this.getToken(parkingsignParser.TIME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.enterAnyTime(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.exitAnyTime(this);
		}
	}


}



class DayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = parkingsignParser.RULE_day;
    }

	MON() {
	    return this.getToken(parkingsignParser.MON, 0);
	};

	TUE() {
	    return this.getToken(parkingsignParser.TUE, 0);
	};

	WED() {
	    return this.getToken(parkingsignParser.WED, 0);
	};

	THU() {
	    return this.getToken(parkingsignParser.THU, 0);
	};

	FRI() {
	    return this.getToken(parkingsignParser.FRI, 0);
	};

	SAT() {
	    return this.getToken(parkingsignParser.SAT, 0);
	};

	SUN() {
	    return this.getToken(parkingsignParser.SUN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.enterDay(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.exitDay(this);
		}
	}


}



class TimeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = parkingsignParser.RULE_time;
    }

	INT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(parkingsignParser.INT);
	    } else {
	        return this.getToken(parkingsignParser.INT, i);
	    }
	};


	am() {
	    return this.getTypedRuleContext(AmContext,0);
	};

	pm() {
	    return this.getTypedRuleContext(PmContext,0);
	};

	twelveNoon() {
	    return this.getTypedRuleContext(TwelveNoonContext,0);
	};

	twelveMidnight() {
	    return this.getTypedRuleContext(TwelveMidnightContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.enterTime(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.exitTime(this);
		}
	}


}



class TwelveNoonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = parkingsignParser.RULE_twelveNoon;
    }

	NOON() {
	    return this.getToken(parkingsignParser.NOON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.enterTwelveNoon(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.exitTwelveNoon(this);
		}
	}


}



class TwelveMidnightContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = parkingsignParser.RULE_twelveMidnight;
    }

	MIDNIGHT() {
	    return this.getToken(parkingsignParser.MIDNIGHT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.enterTwelveMidnight(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.exitTwelveMidnight(this);
		}
	}


}



class AmContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = parkingsignParser.RULE_am;
    }


	enterRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.enterAm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.exitAm(this);
		}
	}


}



class PmContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = parkingsignParser.RULE_pm;
    }


	enterRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.enterPm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof parkingsignListener ) {
	        listener.exitPm(this);
		}
	}


}




parkingsignParser.ParkingSignsContext = ParkingSignsContext; 
parkingsignParser.ParkingSignContext = ParkingSignContext; 
parkingsignParser.StreetSweepingSignContext = StreetSweepingSignContext; 
parkingsignParser.NoParkingSignContext = NoParkingSignContext; 
parkingsignParser.NoStoppingSignContext = NoStoppingSignContext; 
parkingsignParser.PassengerLoadingSignContext = PassengerLoadingSignContext; 
parkingsignParser.TemporaryNoParkingSignContext = TemporaryNoParkingSignContext; 
parkingsignParser.SingleTimeLimitSignContext = SingleTimeLimitSignContext; 
parkingsignParser.DoubleTimeLimitSignContext = DoubleTimeLimitSignContext; 
parkingsignParser.PermitSignContext = PermitSignContext; 
parkingsignParser.StreetSweepingContext = StreetSweepingContext; 
parkingsignParser.NoParkingContext = NoParkingContext; 
parkingsignParser.NoStoppingContext = NoStoppingContext; 
parkingsignParser.ValetOnlyContext = ValetOnlyContext; 
parkingsignParser.LoadingOnlyContext = LoadingOnlyContext; 
parkingsignParser.SchoolDaysContext = SchoolDaysContext; 
parkingsignParser.TimeRangeContext = TimeRangeContext; 
parkingsignParser.EveryDayContext = EveryDayContext; 
parkingsignParser.DayToDayContext = DayToDayContext; 
parkingsignParser.DayAndDayContext = DayAndDayContext; 
parkingsignParser.DayRangeContext = DayRangeContext; 
parkingsignParser.DayRangePlusContext = DayRangePlusContext; 
parkingsignParser.ToContext = ToContext; 
parkingsignParser.And_Context = And_Context; 
parkingsignParser.TowAwayContext = TowAwayContext; 
parkingsignParser.MinuteContext = MinuteContext; 
parkingsignParser.ExemptContext = ExemptContext; 
parkingsignParser.AnyTimeContext = AnyTimeContext; 
parkingsignParser.DayContext = DayContext; 
parkingsignParser.TimeContext = TimeContext; 
parkingsignParser.TwelveNoonContext = TwelveNoonContext; 
parkingsignParser.TwelveMidnightContext = TwelveMidnightContext; 
parkingsignParser.AmContext = AmContext; 
parkingsignParser.PmContext = PmContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
