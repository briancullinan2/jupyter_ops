// Generated from ./parkingsign/parkingsign.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import parkingsignListener from './parkingsignListener.js';
const serializedATN = [4,1,53,295,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,1,0,5,0,
70,8,0,10,0,12,0,73,9,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,83,8,1,1,2,3,
2,86,8,2,1,2,1,2,1,2,1,2,1,3,3,3,93,8,3,1,3,1,3,3,3,97,8,3,1,3,3,3,100,8,
3,1,3,3,3,103,8,3,1,4,3,4,106,8,4,1,4,1,4,3,4,110,8,4,1,4,4,4,113,8,4,11,
4,12,4,114,1,4,3,4,118,8,4,1,4,3,4,121,8,4,1,5,3,5,124,8,5,1,5,1,5,4,5,128,
8,5,11,5,12,5,129,1,5,3,5,133,8,5,1,5,3,5,136,8,5,1,6,1,6,1,6,1,6,1,6,3,
6,143,8,6,1,6,3,6,146,8,6,1,6,3,6,149,8,6,1,7,1,7,1,7,1,7,3,7,155,8,7,1,
7,1,7,1,7,3,7,160,8,7,1,7,3,7,163,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,
8,1,8,1,8,1,8,1,8,3,8,178,8,8,1,9,1,9,3,9,182,8,9,1,9,1,9,1,9,1,9,1,9,1,
9,1,10,1,10,1,10,1,11,1,11,1,11,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,14,
1,14,1,14,1,14,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,
16,218,8,16,1,17,1,17,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,20,1,20,
1,20,1,20,1,20,1,20,1,20,1,20,1,20,3,20,239,8,20,1,21,1,21,1,22,1,22,1,23,
1,23,1,24,1,24,3,24,249,8,24,1,24,1,24,1,25,1,25,1,26,1,26,1,27,1,27,1,27,
3,27,260,8,27,1,28,1,28,1,29,1,29,1,29,3,29,267,8,29,1,29,1,29,3,29,271,
8,29,1,29,1,29,3,29,275,8,29,1,30,1,30,1,30,3,30,280,8,30,1,31,1,31,1,31,
3,31,285,8,31,1,32,1,32,3,32,289,8,32,1,33,1,33,3,33,293,8,33,1,33,0,0,34,
0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,
52,54,56,58,60,62,64,66,0,7,1,0,48,49,1,0,16,17,1,0,9,11,1,0,21,22,1,0,35,
36,1,0,32,33,1,0,40,46,308,0,71,1,0,0,0,2,82,1,0,0,0,4,85,1,0,0,0,6,92,1,
0,0,0,8,105,1,0,0,0,10,123,1,0,0,0,12,137,1,0,0,0,14,154,1,0,0,0,16,164,
1,0,0,0,18,181,1,0,0,0,20,189,1,0,0,0,22,192,1,0,0,0,24,195,1,0,0,0,26,198,
1,0,0,0,28,202,1,0,0,0,30,206,1,0,0,0,32,217,1,0,0,0,34,219,1,0,0,0,36,221,
1,0,0,0,38,225,1,0,0,0,40,238,1,0,0,0,42,240,1,0,0,0,44,242,1,0,0,0,46,244,
1,0,0,0,48,246,1,0,0,0,50,252,1,0,0,0,52,254,1,0,0,0,54,259,1,0,0,0,56,261,
1,0,0,0,58,274,1,0,0,0,60,279,1,0,0,0,62,284,1,0,0,0,64,288,1,0,0,0,66,292,
1,0,0,0,68,70,3,2,1,0,69,68,1,0,0,0,70,73,1,0,0,0,71,69,1,0,0,0,71,72,1,
0,0,0,72,1,1,0,0,0,73,71,1,0,0,0,74,83,3,4,2,0,75,83,3,6,3,0,76,83,3,8,4,
0,77,83,3,10,5,0,78,83,3,14,7,0,79,83,3,16,8,0,80,83,3,12,6,0,81,83,3,18,
9,0,82,74,1,0,0,0,82,75,1,0,0,0,82,76,1,0,0,0,82,77,1,0,0,0,82,78,1,0,0,
0,82,79,1,0,0,0,82,80,1,0,0,0,82,81,1,0,0,0,83,3,1,0,0,0,84,86,3,22,11,0,
85,84,1,0,0,0,85,86,1,0,0,0,86,87,1,0,0,0,87,88,3,32,16,0,88,89,3,56,28,
0,89,90,3,20,10,0,90,5,1,0,0,0,91,93,3,22,11,0,92,91,1,0,0,0,92,93,1,0,0,
0,93,96,1,0,0,0,94,97,3,54,27,0,95,97,3,32,16,0,96,94,1,0,0,0,96,95,1,0,
0,0,97,99,1,0,0,0,98,100,5,15,0,0,99,98,1,0,0,0,99,100,1,0,0,0,100,102,1,
0,0,0,101,103,3,40,20,0,102,101,1,0,0,0,102,103,1,0,0,0,103,7,1,0,0,0,104,
106,3,48,24,0,105,104,1,0,0,0,105,106,1,0,0,0,106,109,1,0,0,0,107,110,3,
24,12,0,108,110,3,26,13,0,109,107,1,0,0,0,109,108,1,0,0,0,110,112,1,0,0,
0,111,113,3,32,16,0,112,111,1,0,0,0,113,114,1,0,0,0,114,112,1,0,0,0,114,
115,1,0,0,0,115,117,1,0,0,0,116,118,5,15,0,0,117,116,1,0,0,0,117,118,1,0,
0,0,118,120,1,0,0,0,119,121,3,40,20,0,120,119,1,0,0,0,120,121,1,0,0,0,121,
9,1,0,0,0,122,124,3,48,24,0,123,122,1,0,0,0,123,124,1,0,0,0,124,125,1,0,
0,0,125,127,3,28,14,0,126,128,3,32,16,0,127,126,1,0,0,0,128,129,1,0,0,0,
129,127,1,0,0,0,129,130,1,0,0,0,130,132,1,0,0,0,131,133,5,15,0,0,132,131,
1,0,0,0,132,133,1,0,0,0,133,135,1,0,0,0,134,136,3,40,20,0,135,134,1,0,0,
0,135,136,1,0,0,0,136,11,1,0,0,0,137,138,3,48,24,0,138,139,5,37,0,0,139,
142,3,22,11,0,140,143,3,54,27,0,141,143,3,32,16,0,142,140,1,0,0,0,142,141,
1,0,0,0,143,145,1,0,0,0,144,146,5,15,0,0,145,144,1,0,0,0,145,146,1,0,0,0,
146,148,1,0,0,0,147,149,3,40,20,0,148,147,1,0,0,0,148,149,1,0,0,0,149,13,
1,0,0,0,150,151,5,52,0,0,151,155,5,34,0,0,152,153,5,52,0,0,153,155,3,50,
25,0,154,150,1,0,0,0,154,152,1,0,0,0,155,156,1,0,0,0,156,157,5,8,0,0,157,
159,3,32,16,0,158,160,5,15,0,0,159,158,1,0,0,0,159,160,1,0,0,0,160,162,1,
0,0,0,161,163,3,40,20,0,162,161,1,0,0,0,162,163,1,0,0,0,163,15,1,0,0,0,164,
165,5,52,0,0,165,166,5,34,0,0,166,167,5,8,0,0,167,168,3,40,20,0,168,169,
3,40,20,0,169,170,3,58,29,0,170,171,3,58,29,0,171,172,5,9,0,0,172,173,5,
9,0,0,173,174,3,58,29,0,174,177,3,58,29,0,175,176,5,15,0,0,176,178,5,20,
0,0,177,175,1,0,0,0,177,178,1,0,0,0,178,17,1,0,0,0,179,180,5,28,0,0,180,
182,5,29,0,0,181,179,1,0,0,0,181,182,1,0,0,0,182,183,1,0,0,0,183,184,5,30,
0,0,184,185,5,7,0,0,185,186,5,52,0,0,186,187,5,31,0,0,187,188,3,52,26,0,
188,19,1,0,0,0,189,190,5,47,0,0,190,191,7,0,0,0,191,21,1,0,0,0,192,193,5,
7,0,0,193,194,5,8,0,0,194,23,1,0,0,0,195,196,5,7,0,0,196,197,5,25,0,0,197,
25,1,0,0,0,198,199,5,26,0,0,199,200,5,8,0,0,200,201,5,27,0,0,201,27,1,0,
0,0,202,203,5,38,0,0,203,204,5,39,0,0,204,205,5,27,0,0,205,29,1,0,0,0,206,
207,5,18,0,0,207,208,5,19,0,0,208,31,1,0,0,0,209,210,3,58,29,0,210,211,3,
44,22,0,211,212,3,58,29,0,212,218,1,0,0,0,213,214,5,52,0,0,214,215,3,44,
22,0,215,216,3,58,29,0,216,218,1,0,0,0,217,209,1,0,0,0,217,213,1,0,0,0,218,
33,1,0,0,0,219,220,7,1,0,0,220,35,1,0,0,0,221,222,3,56,28,0,222,223,3,44,
22,0,223,224,3,56,28,0,224,37,1,0,0,0,225,226,3,56,28,0,226,227,3,46,23,
0,227,228,3,56,28,0,228,39,1,0,0,0,229,239,3,34,17,0,230,239,3,30,15,0,231,
239,5,20,0,0,232,239,3,38,19,0,233,239,3,36,18,0,234,235,3,56,28,0,235,236,
5,27,0,0,236,239,1,0,0,0,237,239,3,56,28,0,238,229,1,0,0,0,238,230,1,0,0,
0,238,231,1,0,0,0,238,232,1,0,0,0,238,233,1,0,0,0,238,234,1,0,0,0,238,237,
1,0,0,0,239,41,1,0,0,0,240,241,3,40,20,0,241,43,1,0,0,0,242,243,7,2,0,0,
243,45,1,0,0,0,244,245,7,3,0,0,245,47,1,0,0,0,246,248,5,23,0,0,247,249,5,
11,0,0,248,247,1,0,0,0,248,249,1,0,0,0,249,250,1,0,0,0,250,251,5,24,0,0,
251,49,1,0,0,0,252,253,7,4,0,0,253,51,1,0,0,0,254,255,7,5,0,0,255,53,1,0,
0,0,256,260,5,12,0,0,257,258,5,13,0,0,258,260,5,14,0,0,259,256,1,0,0,0,259,
257,1,0,0,0,260,55,1,0,0,0,261,262,7,6,0,0,262,57,1,0,0,0,263,266,5,52,0,
0,264,265,5,1,0,0,265,267,5,52,0,0,266,264,1,0,0,0,266,267,1,0,0,0,267,270,
1,0,0,0,268,271,3,64,32,0,269,271,3,66,33,0,270,268,1,0,0,0,270,269,1,0,
0,0,270,271,1,0,0,0,271,275,1,0,0,0,272,275,3,60,30,0,273,275,3,62,31,0,
274,263,1,0,0,0,274,272,1,0,0,0,274,273,1,0,0,0,275,59,1,0,0,0,276,280,5,
50,0,0,277,278,5,2,0,0,278,280,5,50,0,0,279,276,1,0,0,0,279,277,1,0,0,0,
280,61,1,0,0,0,281,285,5,51,0,0,282,283,5,2,0,0,283,285,5,51,0,0,284,281,
1,0,0,0,284,282,1,0,0,0,285,63,1,0,0,0,286,289,5,3,0,0,287,289,5,4,0,0,288,
286,1,0,0,0,288,287,1,0,0,0,289,65,1,0,0,0,290,293,5,5,0,0,291,293,5,6,0,
0,292,290,1,0,0,0,292,291,1,0,0,0,293,67,1,0,0,0,35,71,82,85,92,96,99,102,
105,109,114,117,120,123,129,132,135,142,145,148,154,159,162,177,181,217,
238,248,259,266,270,274,279,284,288,292];


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

    get atn() {
        return atn;
    }



	parkingSigns() {
	    let localctx = new ParkingSignsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, parkingsignParser.RULE_parkingSigns);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << parkingsignParser.T__1) | (1 << parkingsignParser.NO) | (1 << parkingsignParser.ANYTIME) | (1 << parkingsignParser.ANY) | (1 << parkingsignParser.TOW) | (1 << parkingsignParser.VALET) | (1 << parkingsignParser.VEHICLES) | (1 << parkingsignParser.DISTRICT))) !== 0) || ((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (parkingsignParser.PASSENGER - 38)) | (1 << (parkingsignParser.NOON - 38)) | (1 << (parkingsignParser.MIDNIGHT - 38)) | (1 << (parkingsignParser.INT - 38)))) !== 0)) {
	            this.state = 68;
	            this.parkingSign();
	            this.state = 73;
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



	parkingSign() {
	    let localctx = new ParkingSignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, parkingsignParser.RULE_parkingSign);
	    try {
	        this.state = 82;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 74;
	            this.streetSweepingSign();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 75;
	            this.noParkingSign();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 76;
	            this.noStoppingSign();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 77;
	            this.passengerLoadingSign();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 78;
	            this.singleTimeLimitSign();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 79;
	            this.doubleTimeLimitSign();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 80;
	            this.temporaryNoParkingSign();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 81;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===parkingsignParser.NO) {
	            this.state = 84;
	            this.noParking();
	        }

	        this.state = 87;
	        this.timeRange();
	        this.state = 88;
	        this.day();
	        this.state = 89;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===parkingsignParser.NO) {
	            this.state = 91;
	            this.noParking();
	        }

	        this.state = 96;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case parkingsignParser.ANYTIME:
	        case parkingsignParser.ANY:
	            this.state = 94;
	            this.anyTime();
	            break;
	        case parkingsignParser.T__1:
	        case parkingsignParser.NOON:
	        case parkingsignParser.MIDNIGHT:
	        case parkingsignParser.INT:
	            this.state = 95;
	            this.timeRange();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 99;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===parkingsignParser.EXCEPT) {
	            this.state = 98;
	            this.match(parkingsignParser.EXCEPT);
	        }

	        this.state = 102;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 16)) & ~0x1f) == 0 && ((1 << (_la - 16)) & ((1 << (parkingsignParser.DAILY - 16)) | (1 << (parkingsignParser.NIGHTLY - 16)) | (1 << (parkingsignParser.SCHOOL - 16)) | (1 << (parkingsignParser.HOLIDAYS - 16)) | (1 << (parkingsignParser.MON - 16)) | (1 << (parkingsignParser.TUE - 16)) | (1 << (parkingsignParser.WED - 16)) | (1 << (parkingsignParser.THU - 16)) | (1 << (parkingsignParser.FRI - 16)) | (1 << (parkingsignParser.SAT - 16)) | (1 << (parkingsignParser.SUN - 16)))) !== 0)) {
	            this.state = 101;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===parkingsignParser.TOW) {
	            this.state = 104;
	            this.towAway();
	        }

	        this.state = 109;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case parkingsignParser.NO:
	            this.state = 107;
	            this.noStopping();
	            break;
	        case parkingsignParser.VALET:
	            this.state = 108;
	            this.valetOnly();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 112; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 111;
	        		this.timeRange();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 114; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,9, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 117;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===parkingsignParser.EXCEPT) {
	            this.state = 116;
	            this.match(parkingsignParser.EXCEPT);
	        }

	        this.state = 120;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 16)) & ~0x1f) == 0 && ((1 << (_la - 16)) & ((1 << (parkingsignParser.DAILY - 16)) | (1 << (parkingsignParser.NIGHTLY - 16)) | (1 << (parkingsignParser.SCHOOL - 16)) | (1 << (parkingsignParser.HOLIDAYS - 16)) | (1 << (parkingsignParser.MON - 16)) | (1 << (parkingsignParser.TUE - 16)) | (1 << (parkingsignParser.WED - 16)) | (1 << (parkingsignParser.THU - 16)) | (1 << (parkingsignParser.FRI - 16)) | (1 << (parkingsignParser.SAT - 16)) | (1 << (parkingsignParser.SUN - 16)))) !== 0)) {
	            this.state = 119;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===parkingsignParser.TOW) {
	            this.state = 122;
	            this.towAway();
	        }

	        this.state = 125;
	        this.loadingOnly();
	        this.state = 127; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 126;
	        		this.timeRange();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 129; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,13, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 132;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===parkingsignParser.EXCEPT) {
	            this.state = 131;
	            this.match(parkingsignParser.EXCEPT);
	        }

	        this.state = 135;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 16)) & ~0x1f) == 0 && ((1 << (_la - 16)) & ((1 << (parkingsignParser.DAILY - 16)) | (1 << (parkingsignParser.NIGHTLY - 16)) | (1 << (parkingsignParser.SCHOOL - 16)) | (1 << (parkingsignParser.HOLIDAYS - 16)) | (1 << (parkingsignParser.MON - 16)) | (1 << (parkingsignParser.TUE - 16)) | (1 << (parkingsignParser.WED - 16)) | (1 << (parkingsignParser.THU - 16)) | (1 << (parkingsignParser.FRI - 16)) | (1 << (parkingsignParser.SAT - 16)) | (1 << (parkingsignParser.SUN - 16)))) !== 0)) {
	            this.state = 134;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this.towAway();
	        this.state = 138;
	        this.match(parkingsignParser.TEMPORARY);
	        this.state = 139;
	        this.noParking();
	        this.state = 142;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case parkingsignParser.ANYTIME:
	        case parkingsignParser.ANY:
	            this.state = 140;
	            this.anyTime();
	            break;
	        case parkingsignParser.T__1:
	        case parkingsignParser.NOON:
	        case parkingsignParser.MIDNIGHT:
	        case parkingsignParser.INT:
	            this.state = 141;
	            this.timeRange();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 145;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===parkingsignParser.EXCEPT) {
	            this.state = 144;
	            this.match(parkingsignParser.EXCEPT);
	        }

	        this.state = 148;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 16)) & ~0x1f) == 0 && ((1 << (_la - 16)) & ((1 << (parkingsignParser.DAILY - 16)) | (1 << (parkingsignParser.NIGHTLY - 16)) | (1 << (parkingsignParser.SCHOOL - 16)) | (1 << (parkingsignParser.HOLIDAYS - 16)) | (1 << (parkingsignParser.MON - 16)) | (1 << (parkingsignParser.TUE - 16)) | (1 << (parkingsignParser.WED - 16)) | (1 << (parkingsignParser.THU - 16)) | (1 << (parkingsignParser.FRI - 16)) | (1 << (parkingsignParser.SAT - 16)) | (1 << (parkingsignParser.SUN - 16)))) !== 0)) {
	            this.state = 147;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 150;
	            this.match(parkingsignParser.INT);
	            this.state = 151;
	            this.match(parkingsignParser.HOUR);
	            break;

	        case 2:
	            this.state = 152;
	            this.match(parkingsignParser.INT);
	            this.state = 153;
	            this.minute();
	            break;

	        }
	        this.state = 156;
	        this.match(parkingsignParser.PARKING);
	        this.state = 157;
	        this.timeRange();
	        this.state = 159;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===parkingsignParser.EXCEPT) {
	            this.state = 158;
	            this.match(parkingsignParser.EXCEPT);
	        }

	        this.state = 162;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 16)) & ~0x1f) == 0 && ((1 << (_la - 16)) & ((1 << (parkingsignParser.DAILY - 16)) | (1 << (parkingsignParser.NIGHTLY - 16)) | (1 << (parkingsignParser.SCHOOL - 16)) | (1 << (parkingsignParser.HOLIDAYS - 16)) | (1 << (parkingsignParser.MON - 16)) | (1 << (parkingsignParser.TUE - 16)) | (1 << (parkingsignParser.WED - 16)) | (1 << (parkingsignParser.THU - 16)) | (1 << (parkingsignParser.FRI - 16)) | (1 << (parkingsignParser.SAT - 16)) | (1 << (parkingsignParser.SUN - 16)))) !== 0)) {
	            this.state = 161;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
	        this.match(parkingsignParser.INT);
	        this.state = 165;
	        this.match(parkingsignParser.HOUR);
	        this.state = 166;
	        this.match(parkingsignParser.PARKING);
	        this.state = 167;
	        this.dayRange();
	        this.state = 168;
	        this.dayRange();
	        this.state = 169;
	        this.time();
	        this.state = 170;
	        this.time();
	        this.state = 171;
	        this.match(parkingsignParser.TO);
	        this.state = 172;
	        this.match(parkingsignParser.TO);
	        this.state = 173;
	        this.time();
	        this.state = 174;
	        this.time();
	        this.state = 177;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===parkingsignParser.EXCEPT) {
	            this.state = 175;
	            this.match(parkingsignParser.EXCEPT);
	            this.state = 176;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 181;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===parkingsignParser.VEHICLES) {
	            this.state = 179;
	            this.match(parkingsignParser.VEHICLES);
	            this.state = 180;
	            this.match(parkingsignParser.WITH);
	        }

	        this.state = 183;
	        this.match(parkingsignParser.DISTRICT);
	        this.state = 184;
	        this.match(parkingsignParser.NO);
	        this.state = 185;
	        this.match(parkingsignParser.INT);
	        this.state = 186;
	        this.match(parkingsignParser.PERMITS);
	        this.state = 187;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 189;
	        this.match(parkingsignParser.STREET);
	        this.state = 190;
	        _la = this._input.LA(1);
	        if(!(_la===parkingsignParser.SWEEPING || _la===parkingsignParser.CLEANING)) {
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
	        this.state = 192;
	        this.match(parkingsignParser.NO);
	        this.state = 193;
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
	        this.state = 195;
	        this.match(parkingsignParser.NO);
	        this.state = 196;
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
	        this.state = 198;
	        this.match(parkingsignParser.VALET);
	        this.state = 199;
	        this.match(parkingsignParser.PARKING);
	        this.state = 200;
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
	        this.state = 202;
	        this.match(parkingsignParser.PASSENGER);
	        this.state = 203;
	        this.match(parkingsignParser.LOADING);
	        this.state = 204;
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
	        this.state = 206;
	        this.match(parkingsignParser.SCHOOL);
	        this.state = 207;
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
	        this.state = 217;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 209;
	            this.time();
	            this.state = 210;
	            this.to();
	            this.state = 211;
	            this.time();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 213;
	            this.match(parkingsignParser.INT);
	            this.state = 214;
	            this.to();
	            this.state = 215;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 219;
	        _la = this._input.LA(1);
	        if(!(_la===parkingsignParser.DAILY || _la===parkingsignParser.NIGHTLY)) {
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
	        this.state = 221;
	        this.day();
	        this.state = 222;
	        this.to();
	        this.state = 223;
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
	        this.state = 225;
	        this.day();
	        this.state = 226;
	        this.and_();
	        this.state = 227;
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
	        this.state = 238;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 229;
	            this.everyDay();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 230;
	            this.schoolDays();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 231;
	            this.match(parkingsignParser.HOLIDAYS);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 232;
	            this.dayAndDay();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 233;
	            this.dayToDay();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 234;
	            this.day();
	            this.state = 235;
	            this.match(parkingsignParser.ONLY);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 237;
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
	        this.state = 240;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 242;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << parkingsignParser.TO) | (1 << parkingsignParser.THRU) | (1 << parkingsignParser.DASH))) !== 0))) {
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 244;
	        _la = this._input.LA(1);
	        if(!(_la===parkingsignParser.AND || _la===parkingsignParser.AMPERSAND)) {
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 246;
	        this.match(parkingsignParser.TOW);
	        this.state = 248;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===parkingsignParser.DASH) {
	            this.state = 247;
	            this.match(parkingsignParser.DASH);
	        }

	        this.state = 250;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 252;
	        _la = this._input.LA(1);
	        if(!(_la===parkingsignParser.MINUTE || _la===parkingsignParser.MIN)) {
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 254;
	        _la = this._input.LA(1);
	        if(!(_la===parkingsignParser.EXEMPTED || _la===parkingsignParser.EXEMPT)) {
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
	        this.state = 259;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case parkingsignParser.ANYTIME:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 256;
	            this.match(parkingsignParser.ANYTIME);
	            break;
	        case parkingsignParser.ANY:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 257;
	            this.match(parkingsignParser.ANY);
	            this.state = 258;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 261;
	        _la = this._input.LA(1);
	        if(!(((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (parkingsignParser.MON - 40)) | (1 << (parkingsignParser.TUE - 40)) | (1 << (parkingsignParser.WED - 40)) | (1 << (parkingsignParser.THU - 40)) | (1 << (parkingsignParser.FRI - 40)) | (1 << (parkingsignParser.SAT - 40)) | (1 << (parkingsignParser.SUN - 40)))) !== 0))) {
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
	    var _la = 0; // Token type
	    try {
	        this.state = 274;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 263;
	            this.match(parkingsignParser.INT);
	            this.state = 266;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===parkingsignParser.T__0) {
	                this.state = 264;
	                this.match(parkingsignParser.T__0);
	                this.state = 265;
	                this.match(parkingsignParser.INT);
	            }

	            this.state = 270;
	            this._errHandler.sync(this);
	            switch (this._input.LA(1)) {
	            case parkingsignParser.T__2:
	            case parkingsignParser.T__3:
	            	this.state = 268;
	            	this.am();
	            	break;
	            case parkingsignParser.T__4:
	            case parkingsignParser.T__5:
	            	this.state = 269;
	            	this.pm();
	            	break;
	            case parkingsignParser.EOF:
	            case parkingsignParser.T__1:
	            case parkingsignParser.NO:
	            case parkingsignParser.TO:
	            case parkingsignParser.THRU:
	            case parkingsignParser.DASH:
	            case parkingsignParser.ANYTIME:
	            case parkingsignParser.ANY:
	            case parkingsignParser.EXCEPT:
	            case parkingsignParser.DAILY:
	            case parkingsignParser.NIGHTLY:
	            case parkingsignParser.SCHOOL:
	            case parkingsignParser.HOLIDAYS:
	            case parkingsignParser.TOW:
	            case parkingsignParser.VALET:
	            case parkingsignParser.VEHICLES:
	            case parkingsignParser.DISTRICT:
	            case parkingsignParser.PASSENGER:
	            case parkingsignParser.MON:
	            case parkingsignParser.TUE:
	            case parkingsignParser.WED:
	            case parkingsignParser.THU:
	            case parkingsignParser.FRI:
	            case parkingsignParser.SAT:
	            case parkingsignParser.SUN:
	            case parkingsignParser.NOON:
	            case parkingsignParser.MIDNIGHT:
	            case parkingsignParser.INT:
	            	break;
	            default:
	            	break;
	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 272;
	            this.twelveNoon();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 273;
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
	        this.state = 279;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case parkingsignParser.NOON:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 276;
	            this.match(parkingsignParser.NOON);
	            break;
	        case parkingsignParser.T__1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 277;
	            this.match(parkingsignParser.T__1);
	            this.state = 278;
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
	        this.state = 284;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case parkingsignParser.MIDNIGHT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 281;
	            this.match(parkingsignParser.MIDNIGHT);
	            break;
	        case parkingsignParser.T__1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 282;
	            this.match(parkingsignParser.T__1);
	            this.state = 283;
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
	        this.state = 288;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case parkingsignParser.T__2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 286;
	            this.match(parkingsignParser.T__2);
	            break;
	        case parkingsignParser.T__3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 287;
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
	        this.state = 292;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case parkingsignParser.T__4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 290;
	            this.match(parkingsignParser.T__4);
	            break;
	        case parkingsignParser.T__5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 291;
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
