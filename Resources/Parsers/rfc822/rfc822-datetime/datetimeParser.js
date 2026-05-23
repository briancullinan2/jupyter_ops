// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/rfc822/rfc822-datetime/datetime.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import datetimeListener from './datetimeListener.js';
const serializedATN = [4,1,36,77,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,1,0,3,0,24,8,0,1,0,1,0,1,
0,1,0,1,1,1,1,1,2,4,2,33,8,2,11,2,12,2,34,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,
4,1,5,1,5,1,5,1,5,1,5,3,5,50,8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
1,6,1,6,1,6,3,6,65,8,6,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,0,0,10,
0,2,4,6,8,10,12,14,16,18,0,4,1,0,2,8,1,0,9,20,1,0,32,33,1,0,34,35,80,0,23,
1,0,0,0,2,29,1,0,0,0,4,32,1,0,0,0,6,39,1,0,0,0,8,41,1,0,0,0,10,44,1,0,0,
0,12,64,1,0,0,0,14,66,1,0,0,0,16,69,1,0,0,0,18,74,1,0,0,0,20,21,3,2,1,0,
21,22,5,1,0,0,22,24,1,0,0,0,23,20,1,0,0,0,23,24,1,0,0,0,24,25,1,0,0,0,25,
26,3,4,2,0,26,27,3,8,4,0,27,28,5,0,0,1,28,1,1,0,0,0,29,30,7,0,0,0,30,3,1,
0,0,0,31,33,3,14,7,0,32,31,1,0,0,0,33,34,1,0,0,0,34,32,1,0,0,0,34,35,1,0,
0,0,35,36,1,0,0,0,36,37,3,6,3,0,37,38,3,14,7,0,38,5,1,0,0,0,39,40,7,1,0,
0,40,7,1,0,0,0,41,42,3,10,5,0,42,43,3,12,6,0,43,9,1,0,0,0,44,45,3,14,7,0,
45,46,5,21,0,0,46,49,3,14,7,0,47,48,5,21,0,0,48,50,3,14,7,0,49,47,1,0,0,
0,49,50,1,0,0,0,50,11,1,0,0,0,51,65,5,22,0,0,52,65,5,23,0,0,53,65,5,24,0,
0,54,65,5,25,0,0,55,65,5,26,0,0,56,65,5,27,0,0,57,65,5,28,0,0,58,65,5,29,
0,0,59,65,5,30,0,0,60,65,5,31,0,0,61,65,5,34,0,0,62,63,7,2,0,0,63,65,3,16,
8,0,64,51,1,0,0,0,64,52,1,0,0,0,64,53,1,0,0,0,64,54,1,0,0,0,64,55,1,0,0,
0,64,56,1,0,0,0,64,57,1,0,0,0,64,58,1,0,0,0,64,59,1,0,0,0,64,60,1,0,0,0,
64,61,1,0,0,0,64,62,1,0,0,0,65,13,1,0,0,0,66,67,3,18,9,0,67,68,3,18,9,0,
68,15,1,0,0,0,69,70,3,18,9,0,70,71,3,18,9,0,71,72,3,18,9,0,72,73,3,18,9,
0,73,17,1,0,0,0,74,75,7,3,0,0,75,19,1,0,0,0,4,23,34,49,64];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class datetimeParser extends antlr4.Parser {

    static grammarFileName = "datetime.g4";
    static literalNames = [ null, "','", "'Mon'", "'Tue'", "'Wed'", "'Thu'", 
                            "'Fri'", "'Sat'", "'Sun'", "'Jan'", "'Feb'", 
                            "'Mar'", "'Apr'", "'May'", "'Jun'", "'Jul'", 
                            "'Aug'", "'Sep'", "'Oct'", "'Nov'", "'Dec'", 
                            "':'", "'UT'", "'GMT'", "'EST'", "'EDT'", "'CST'", 
                            "'CDT'", "'MST'", "'MDT'", "'PST'", "'PDT'", 
                            "'+'", "'-'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "ALPHA", "DIGIT", "WS" ];
    static ruleNames = [ "date_time", "day", "date", "month", "time", "hour", 
                         "zone", "two_digit", "four_digit", "alphanumeric" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = datetimeParser.ruleNames;
        this.literalNames = datetimeParser.literalNames;
        this.symbolicNames = datetimeParser.symbolicNames;
    }



	date_time() {
	    let localctx = new Date_timeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, datetimeParser.RULE_date_time);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 508) !== 0)) {
	            this.state = 20;
	            this.day();
	            this.state = 21;
	            this.match(datetimeParser.T__0);
	        }

	        this.state = 25;
	        this.date();
	        this.state = 26;
	        this.time();
	        this.state = 27;
	        this.match(datetimeParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 2, datetimeParser.RULE_day);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 508) !== 0))) {
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



	date() {
	    let localctx = new DateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, datetimeParser.RULE_date);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 31;
	            this.two_digit();
	            this.state = 34; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===34 || _la===35);
	        this.state = 36;
	        this.month();
	        this.state = 37;
	        this.two_digit();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	month() {
	    let localctx = new MonthContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, datetimeParser.RULE_month);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 2096640) !== 0))) {
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
	    this.enterRule(localctx, 8, datetimeParser.RULE_time);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this.hour();
	        this.state = 42;
	        this.zone();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	hour() {
	    let localctx = new HourContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, datetimeParser.RULE_hour);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.two_digit();
	        this.state = 45;
	        this.match(datetimeParser.T__20);
	        this.state = 46;
	        this.two_digit();
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 47;
	            this.match(datetimeParser.T__20);
	            this.state = 48;
	            this.two_digit();
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



	zone() {
	    let localctx = new ZoneContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, datetimeParser.RULE_zone);
	    var _la = 0;
	    try {
	        this.state = 64;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 22:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 51;
	            this.match(datetimeParser.T__21);
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 52;
	            this.match(datetimeParser.T__22);
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 53;
	            this.match(datetimeParser.T__23);
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 54;
	            this.match(datetimeParser.T__24);
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 55;
	            this.match(datetimeParser.T__25);
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 56;
	            this.match(datetimeParser.T__26);
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 57;
	            this.match(datetimeParser.T__27);
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 58;
	            this.match(datetimeParser.T__28);
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 59;
	            this.match(datetimeParser.T__29);
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 60;
	            this.match(datetimeParser.T__30);
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 61;
	            this.match(datetimeParser.ALPHA);
	            break;
	        case 32:
	        case 33:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 62;
	            _la = this._input.LA(1);
	            if(!(_la===32 || _la===33)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 63;
	            this.four_digit();
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



	two_digit() {
	    let localctx = new Two_digitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, datetimeParser.RULE_two_digit);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.alphanumeric();
	        this.state = 67;
	        this.alphanumeric();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	four_digit() {
	    let localctx = new Four_digitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, datetimeParser.RULE_four_digit);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.alphanumeric();
	        this.state = 70;
	        this.alphanumeric();
	        this.state = 71;
	        this.alphanumeric();
	        this.state = 72;
	        this.alphanumeric();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	alphanumeric() {
	    let localctx = new AlphanumericContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, datetimeParser.RULE_alphanumeric);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        _la = this._input.LA(1);
	        if(!(_la===34 || _la===35)) {
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

datetimeParser.EOF = antlr4.Token.EOF;
datetimeParser.T__0 = 1;
datetimeParser.T__1 = 2;
datetimeParser.T__2 = 3;
datetimeParser.T__3 = 4;
datetimeParser.T__4 = 5;
datetimeParser.T__5 = 6;
datetimeParser.T__6 = 7;
datetimeParser.T__7 = 8;
datetimeParser.T__8 = 9;
datetimeParser.T__9 = 10;
datetimeParser.T__10 = 11;
datetimeParser.T__11 = 12;
datetimeParser.T__12 = 13;
datetimeParser.T__13 = 14;
datetimeParser.T__14 = 15;
datetimeParser.T__15 = 16;
datetimeParser.T__16 = 17;
datetimeParser.T__17 = 18;
datetimeParser.T__18 = 19;
datetimeParser.T__19 = 20;
datetimeParser.T__20 = 21;
datetimeParser.T__21 = 22;
datetimeParser.T__22 = 23;
datetimeParser.T__23 = 24;
datetimeParser.T__24 = 25;
datetimeParser.T__25 = 26;
datetimeParser.T__26 = 27;
datetimeParser.T__27 = 28;
datetimeParser.T__28 = 29;
datetimeParser.T__29 = 30;
datetimeParser.T__30 = 31;
datetimeParser.T__31 = 32;
datetimeParser.T__32 = 33;
datetimeParser.ALPHA = 34;
datetimeParser.DIGIT = 35;
datetimeParser.WS = 36;

datetimeParser.RULE_date_time = 0;
datetimeParser.RULE_day = 1;
datetimeParser.RULE_date = 2;
datetimeParser.RULE_month = 3;
datetimeParser.RULE_time = 4;
datetimeParser.RULE_hour = 5;
datetimeParser.RULE_zone = 6;
datetimeParser.RULE_two_digit = 7;
datetimeParser.RULE_four_digit = 8;
datetimeParser.RULE_alphanumeric = 9;

class Date_timeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = datetimeParser.RULE_date_time;
    }

	date() {
	    return this.getTypedRuleContext(DateContext,0);
	};

	time() {
	    return this.getTypedRuleContext(TimeContext,0);
	};

	EOF() {
	    return this.getToken(datetimeParser.EOF, 0);
	};

	day() {
	    return this.getTypedRuleContext(DayContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof datetimeListener ) {
	        listener.enterDate_time(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof datetimeListener ) {
	        listener.exitDate_time(this);
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
        this.ruleIndex = datetimeParser.RULE_day;
    }


	enterRule(listener) {
	    if(listener instanceof datetimeListener ) {
	        listener.enterDay(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof datetimeListener ) {
	        listener.exitDay(this);
		}
	}


}



class DateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = datetimeParser.RULE_date;
    }

	month() {
	    return this.getTypedRuleContext(MonthContext,0);
	};

	two_digit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Two_digitContext);
	    } else {
	        return this.getTypedRuleContext(Two_digitContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof datetimeListener ) {
	        listener.enterDate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof datetimeListener ) {
	        listener.exitDate(this);
		}
	}


}



class MonthContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = datetimeParser.RULE_month;
    }


	enterRule(listener) {
	    if(listener instanceof datetimeListener ) {
	        listener.enterMonth(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof datetimeListener ) {
	        listener.exitMonth(this);
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
        this.ruleIndex = datetimeParser.RULE_time;
    }

	hour() {
	    return this.getTypedRuleContext(HourContext,0);
	};

	zone() {
	    return this.getTypedRuleContext(ZoneContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof datetimeListener ) {
	        listener.enterTime(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof datetimeListener ) {
	        listener.exitTime(this);
		}
	}


}



class HourContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = datetimeParser.RULE_hour;
    }

	two_digit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Two_digitContext);
	    } else {
	        return this.getTypedRuleContext(Two_digitContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof datetimeListener ) {
	        listener.enterHour(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof datetimeListener ) {
	        listener.exitHour(this);
		}
	}


}



class ZoneContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = datetimeParser.RULE_zone;
    }

	ALPHA() {
	    return this.getToken(datetimeParser.ALPHA, 0);
	};

	four_digit() {
	    return this.getTypedRuleContext(Four_digitContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof datetimeListener ) {
	        listener.enterZone(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof datetimeListener ) {
	        listener.exitZone(this);
		}
	}


}



class Two_digitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = datetimeParser.RULE_two_digit;
    }

	alphanumeric = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AlphanumericContext);
	    } else {
	        return this.getTypedRuleContext(AlphanumericContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof datetimeListener ) {
	        listener.enterTwo_digit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof datetimeListener ) {
	        listener.exitTwo_digit(this);
		}
	}


}



class Four_digitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = datetimeParser.RULE_four_digit;
    }

	alphanumeric = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AlphanumericContext);
	    } else {
	        return this.getTypedRuleContext(AlphanumericContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof datetimeListener ) {
	        listener.enterFour_digit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof datetimeListener ) {
	        listener.exitFour_digit(this);
		}
	}


}



class AlphanumericContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = datetimeParser.RULE_alphanumeric;
    }

	ALPHA() {
	    return this.getToken(datetimeParser.ALPHA, 0);
	};

	DIGIT() {
	    return this.getToken(datetimeParser.DIGIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof datetimeListener ) {
	        listener.enterAlphanumeric(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof datetimeListener ) {
	        listener.exitAlphanumeric(this);
		}
	}


}




datetimeParser.Date_timeContext = Date_timeContext; 
datetimeParser.DayContext = DayContext; 
datetimeParser.DateContext = DateContext; 
datetimeParser.MonthContext = MonthContext; 
datetimeParser.TimeContext = TimeContext; 
datetimeParser.HourContext = HourContext; 
datetimeParser.ZoneContext = ZoneContext; 
datetimeParser.Two_digitContext = Two_digitContext; 
datetimeParser.Four_digitContext = Four_digitContext; 
datetimeParser.AlphanumericContext = AlphanumericContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
