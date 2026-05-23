// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/jam/jam.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import jamListener from './jamListener.js';
const serializedATN = [4,1,22,89,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,5,0,26,8,
0,10,0,12,0,29,9,0,1,0,1,0,1,1,1,1,1,1,5,1,36,8,1,10,1,12,1,39,9,1,1,2,3,
2,42,8,2,1,2,1,2,1,2,1,2,1,2,4,2,49,8,2,11,2,12,2,50,1,3,1,3,1,3,3,3,56,
8,3,1,4,3,4,59,8,4,1,4,3,4,62,8,4,1,4,1,4,3,4,66,8,4,1,5,1,5,1,6,1,6,1,7,
1,7,1,8,1,8,1,9,1,9,1,9,1,10,1,10,3,10,81,8,10,1,11,1,11,1,11,1,11,1,11,
1,11,1,11,0,0,12,0,2,4,6,8,10,12,14,16,18,20,22,0,3,1,0,2,9,2,0,10,10,16,
16,1,0,11,12,89,0,27,1,0,0,0,2,32,1,0,0,0,4,41,1,0,0,0,6,52,1,0,0,0,8,58,
1,0,0,0,10,67,1,0,0,0,12,69,1,0,0,0,14,71,1,0,0,0,16,73,1,0,0,0,18,75,1,
0,0,0,20,78,1,0,0,0,22,82,1,0,0,0,24,26,3,2,1,0,25,24,1,0,0,0,26,29,1,0,
0,0,27,25,1,0,0,0,27,28,1,0,0,0,28,30,1,0,0,0,29,27,1,0,0,0,30,31,5,0,0,
1,31,1,1,0,0,0,32,37,3,4,2,0,33,34,5,1,0,0,34,36,3,4,2,0,35,33,1,0,0,0,36,
39,1,0,0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,3,1,0,0,0,39,37,1,0,0,0,40,42,
3,22,11,0,41,40,1,0,0,0,41,42,1,0,0,0,42,48,1,0,0,0,43,49,3,6,3,0,44,49,
3,10,5,0,45,49,3,16,8,0,46,49,3,12,6,0,47,49,3,14,7,0,48,43,1,0,0,0,48,44,
1,0,0,0,48,45,1,0,0,0,48,46,1,0,0,0,48,47,1,0,0,0,49,50,1,0,0,0,50,48,1,
0,0,0,50,51,1,0,0,0,51,5,1,0,0,0,52,53,3,20,10,0,53,55,3,8,4,0,54,56,3,18,
9,0,55,54,1,0,0,0,55,56,1,0,0,0,56,7,1,0,0,0,57,59,7,0,0,0,58,57,1,0,0,0,
58,59,1,0,0,0,59,61,1,0,0,0,60,62,5,20,0,0,61,60,1,0,0,0,61,62,1,0,0,0,62,
65,1,0,0,0,63,64,7,1,0,0,64,66,5,20,0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,9,
1,0,0,0,67,68,5,17,0,0,68,11,1,0,0,0,69,70,5,18,0,0,70,13,1,0,0,0,71,72,
5,19,0,0,72,15,1,0,0,0,73,74,5,16,0,0,74,17,1,0,0,0,75,76,5,17,0,0,76,77,
5,15,0,0,77,19,1,0,0,0,78,80,5,15,0,0,79,81,7,2,0,0,80,79,1,0,0,0,80,81,
1,0,0,0,81,21,1,0,0,0,82,83,5,13,0,0,83,84,5,20,0,0,84,85,5,17,0,0,85,86,
5,20,0,0,86,87,5,14,0,0,87,23,1,0,0,0,10,27,37,41,48,50,55,58,61,65,80];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class jamParser extends antlr4.Parser {

    static grammarFileName = "jam.g4";
    static literalNames = [ null, "'|'", "'m'", "'M'", "'P'", "'d'", "'maj'", 
                            "'min'", "'dim'", "'aug'", "'+'", "'b'", "'#'", 
                            "'['", "']'", null, "'-'", "'/'", "'='", "'%'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "KEY", 
                             "REST", "SLASH", "EQ", "PCT", "NUM", "COMMENT", 
                             "WS" ];
    static ruleNames = [ "jam", "section", "measure", "chord", "chordquality", 
                         "repeatchord", "extendchord", "repeatmeasure", 
                         "rest", "bass", "note", "meter" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = jamParser.ruleNames;
        this.literalNames = jamParser.literalNames;
        this.symbolicNames = jamParser.symbolicNames;
    }



	jam() {
	    let localctx = new JamContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, jamParser.RULE_jam);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1024000) !== 0)) {
	            this.state = 24;
	            this.section();
	            this.state = 29;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 30;
	        this.match(jamParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 2, jamParser.RULE_section);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.measure();
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 33;
	            this.match(jamParser.T__0);
	            this.state = 34;
	            this.measure();
	            this.state = 39;
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



	measure() {
	    let localctx = new MeasureContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, jamParser.RULE_measure);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 40;
	            this.meter();
	        }

	        this.state = 48; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 48;
	        		this._errHandler.sync(this);
	        		switch(this._input.LA(1)) {
	        		case 15:
	        		    this.state = 43;
	        		    this.chord();
	        		    break;
	        		case 17:
	        		    this.state = 44;
	        		    this.repeatchord();
	        		    break;
	        		case 16:
	        		    this.state = 45;
	        		    this.rest();
	        		    break;
	        		case 18:
	        		    this.state = 46;
	        		    this.extendchord();
	        		    break;
	        		case 19:
	        		    this.state = 47;
	        		    this.repeatmeasure();
	        		    break;
	        		default:
	        		    throw new antlr4.error.NoViableAltException(this);
	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 50; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,4, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	chord() {
	    let localctx = new ChordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, jamParser.RULE_chord);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.note();

	        this.state = 53;
	        this.chordquality();
	        this.state = 55;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        if(la_===1) {
	            this.state = 54;
	            this.bass();

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



	chordquality() {
	    let localctx = new ChordqualityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, jamParser.RULE_chordquality);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1020) !== 0)) {
	            this.state = 57;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1020) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 61;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 60;
	            this.match(jamParser.NUM);
	        }

	        this.state = 65;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        if(la_===1) {
	            this.state = 63;
	            _la = this._input.LA(1);
	            if(!(_la===10 || _la===16)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 64;
	            this.match(jamParser.NUM);

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



	repeatchord() {
	    let localctx = new RepeatchordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, jamParser.RULE_repeatchord);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(jamParser.SLASH);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	extendchord() {
	    let localctx = new ExtendchordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, jamParser.RULE_extendchord);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.match(jamParser.EQ);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	repeatmeasure() {
	    let localctx = new RepeatmeasureContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, jamParser.RULE_repeatmeasure);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(jamParser.PCT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rest() {
	    let localctx = new RestContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, jamParser.RULE_rest);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(jamParser.REST);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bass() {
	    let localctx = new BassContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, jamParser.RULE_bass);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this.match(jamParser.SLASH);
	        this.state = 76;
	        this.match(jamParser.KEY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	note() {
	    let localctx = new NoteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, jamParser.RULE_note);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.match(jamParser.KEY);
	        this.state = 80;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11 || _la===12) {
	            this.state = 79;
	            _la = this._input.LA(1);
	            if(!(_la===11 || _la===12)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
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



	meter() {
	    let localctx = new MeterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, jamParser.RULE_meter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.match(jamParser.T__12);
	        this.state = 83;
	        this.match(jamParser.NUM);
	        this.state = 84;
	        this.match(jamParser.SLASH);
	        this.state = 85;
	        this.match(jamParser.NUM);
	        this.state = 86;
	        this.match(jamParser.T__13);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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

jamParser.EOF = antlr4.Token.EOF;
jamParser.T__0 = 1;
jamParser.T__1 = 2;
jamParser.T__2 = 3;
jamParser.T__3 = 4;
jamParser.T__4 = 5;
jamParser.T__5 = 6;
jamParser.T__6 = 7;
jamParser.T__7 = 8;
jamParser.T__8 = 9;
jamParser.T__9 = 10;
jamParser.T__10 = 11;
jamParser.T__11 = 12;
jamParser.T__12 = 13;
jamParser.T__13 = 14;
jamParser.KEY = 15;
jamParser.REST = 16;
jamParser.SLASH = 17;
jamParser.EQ = 18;
jamParser.PCT = 19;
jamParser.NUM = 20;
jamParser.COMMENT = 21;
jamParser.WS = 22;

jamParser.RULE_jam = 0;
jamParser.RULE_section = 1;
jamParser.RULE_measure = 2;
jamParser.RULE_chord = 3;
jamParser.RULE_chordquality = 4;
jamParser.RULE_repeatchord = 5;
jamParser.RULE_extendchord = 6;
jamParser.RULE_repeatmeasure = 7;
jamParser.RULE_rest = 8;
jamParser.RULE_bass = 9;
jamParser.RULE_note = 10;
jamParser.RULE_meter = 11;

class JamContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jamParser.RULE_jam;
    }

	EOF() {
	    return this.getToken(jamParser.EOF, 0);
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

	enterRule(listener) {
	    if(listener instanceof jamListener ) {
	        listener.enterJam(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jamListener ) {
	        listener.exitJam(this);
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
        this.ruleIndex = jamParser.RULE_section;
    }

	measure = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MeasureContext);
	    } else {
	        return this.getTypedRuleContext(MeasureContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof jamListener ) {
	        listener.enterSection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jamListener ) {
	        listener.exitSection(this);
		}
	}


}



class MeasureContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jamParser.RULE_measure;
    }

	meter() {
	    return this.getTypedRuleContext(MeterContext,0);
	};

	chord = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ChordContext);
	    } else {
	        return this.getTypedRuleContext(ChordContext,i);
	    }
	};

	repeatchord = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RepeatchordContext);
	    } else {
	        return this.getTypedRuleContext(RepeatchordContext,i);
	    }
	};

	rest = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RestContext);
	    } else {
	        return this.getTypedRuleContext(RestContext,i);
	    }
	};

	extendchord = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExtendchordContext);
	    } else {
	        return this.getTypedRuleContext(ExtendchordContext,i);
	    }
	};

	repeatmeasure = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RepeatmeasureContext);
	    } else {
	        return this.getTypedRuleContext(RepeatmeasureContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof jamListener ) {
	        listener.enterMeasure(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jamListener ) {
	        listener.exitMeasure(this);
		}
	}


}



class ChordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jamParser.RULE_chord;
    }

	note() {
	    return this.getTypedRuleContext(NoteContext,0);
	};

	chordquality() {
	    return this.getTypedRuleContext(ChordqualityContext,0);
	};

	bass() {
	    return this.getTypedRuleContext(BassContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jamListener ) {
	        listener.enterChord(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jamListener ) {
	        listener.exitChord(this);
		}
	}


}



class ChordqualityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jamParser.RULE_chordquality;
    }

	NUM = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(jamParser.NUM);
	    } else {
	        return this.getToken(jamParser.NUM, i);
	    }
	};


	REST() {
	    return this.getToken(jamParser.REST, 0);
	};

	enterRule(listener) {
	    if(listener instanceof jamListener ) {
	        listener.enterChordquality(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jamListener ) {
	        listener.exitChordquality(this);
		}
	}


}



class RepeatchordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jamParser.RULE_repeatchord;
    }

	SLASH() {
	    return this.getToken(jamParser.SLASH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof jamListener ) {
	        listener.enterRepeatchord(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jamListener ) {
	        listener.exitRepeatchord(this);
		}
	}


}



class ExtendchordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jamParser.RULE_extendchord;
    }

	EQ() {
	    return this.getToken(jamParser.EQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof jamListener ) {
	        listener.enterExtendchord(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jamListener ) {
	        listener.exitExtendchord(this);
		}
	}


}



class RepeatmeasureContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jamParser.RULE_repeatmeasure;
    }

	PCT() {
	    return this.getToken(jamParser.PCT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof jamListener ) {
	        listener.enterRepeatmeasure(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jamListener ) {
	        listener.exitRepeatmeasure(this);
		}
	}


}



class RestContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jamParser.RULE_rest;
    }

	REST() {
	    return this.getToken(jamParser.REST, 0);
	};

	enterRule(listener) {
	    if(listener instanceof jamListener ) {
	        listener.enterRest(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jamListener ) {
	        listener.exitRest(this);
		}
	}


}



class BassContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jamParser.RULE_bass;
    }

	SLASH() {
	    return this.getToken(jamParser.SLASH, 0);
	};

	KEY() {
	    return this.getToken(jamParser.KEY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof jamListener ) {
	        listener.enterBass(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jamListener ) {
	        listener.exitBass(this);
		}
	}


}



class NoteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jamParser.RULE_note;
    }

	KEY() {
	    return this.getToken(jamParser.KEY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof jamListener ) {
	        listener.enterNote(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jamListener ) {
	        listener.exitNote(this);
		}
	}


}



class MeterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jamParser.RULE_meter;
    }

	NUM = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(jamParser.NUM);
	    } else {
	        return this.getToken(jamParser.NUM, i);
	    }
	};


	SLASH() {
	    return this.getToken(jamParser.SLASH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof jamListener ) {
	        listener.enterMeter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jamListener ) {
	        listener.exitMeter(this);
		}
	}


}




jamParser.JamContext = JamContext; 
jamParser.SectionContext = SectionContext; 
jamParser.MeasureContext = MeasureContext; 
jamParser.ChordContext = ChordContext; 
jamParser.ChordqualityContext = ChordqualityContext; 
jamParser.RepeatchordContext = RepeatchordContext; 
jamParser.ExtendchordContext = ExtendchordContext; 
jamParser.RepeatmeasureContext = RepeatmeasureContext; 
jamParser.RestContext = RestContext; 
jamParser.BassContext = BassContext; 
jamParser.NoteContext = NoteContext; 
jamParser.MeterContext = MeterContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
