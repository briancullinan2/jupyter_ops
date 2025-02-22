// Generated from ./sici/sici.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import siciListener from './siciListener.js';
const serializedATN = [4,1,12,109,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,1,0,1,0,5,0,32,8,0,10,0,12,0,35,9,0,1,0,1,0,1,1,1,1,1,1,1,
1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,4,3,55,8,3,11,3,12,3,56,
1,3,1,3,1,4,4,4,62,8,4,11,4,12,4,63,1,4,1,4,4,4,68,8,4,11,4,12,4,69,1,5,
1,5,1,5,1,5,1,5,1,5,1,6,4,6,79,8,6,11,6,12,6,80,1,7,4,7,84,8,7,11,7,12,7,
85,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,11,
1,12,1,12,1,12,1,13,1,13,1,13,0,0,14,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
0,2,2,0,3,3,11,11,2,0,1,1,11,11,100,0,28,1,0,0,0,2,38,1,0,0,0,4,42,1,0,0,
0,6,52,1,0,0,0,8,61,1,0,0,0,10,71,1,0,0,0,12,78,1,0,0,0,14,83,1,0,0,0,16,
87,1,0,0,0,18,96,1,0,0,0,20,98,1,0,0,0,22,100,1,0,0,0,24,103,1,0,0,0,26,
106,1,0,0,0,28,29,3,2,1,0,29,33,3,10,5,0,30,32,3,16,8,0,31,30,1,0,0,0,32,
35,1,0,0,0,33,31,1,0,0,0,33,34,1,0,0,0,34,36,1,0,0,0,35,33,1,0,0,0,36,37,
5,0,0,1,37,1,1,0,0,0,38,39,3,4,2,0,39,40,3,6,3,0,40,41,3,8,4,0,41,3,1,0,
0,0,42,43,5,11,0,0,43,44,5,11,0,0,44,45,5,11,0,0,45,46,5,11,0,0,46,47,5,
1,0,0,47,48,5,11,0,0,48,49,5,11,0,0,49,50,5,11,0,0,50,51,5,11,0,0,51,5,1,
0,0,0,52,54,5,2,0,0,53,55,7,0,0,0,54,53,1,0,0,0,55,56,1,0,0,0,56,54,1,0,
0,0,56,57,1,0,0,0,57,58,1,0,0,0,58,59,5,4,0,0,59,7,1,0,0,0,60,62,5,11,0,
0,61,60,1,0,0,0,62,63,1,0,0,0,63,61,1,0,0,0,63,64,1,0,0,0,64,65,1,0,0,0,
65,67,5,5,0,0,66,68,5,11,0,0,67,66,1,0,0,0,68,69,1,0,0,0,69,67,1,0,0,0,69,
70,1,0,0,0,70,9,1,0,0,0,71,72,5,6,0,0,72,73,3,12,6,0,73,74,5,5,0,0,74,75,
3,14,7,0,75,76,5,7,0,0,76,11,1,0,0,0,77,79,5,11,0,0,78,77,1,0,0,0,79,80,
1,0,0,0,80,78,1,0,0,0,80,81,1,0,0,0,81,13,1,0,0,0,82,84,5,10,0,0,83,82,1,
0,0,0,84,85,1,0,0,0,85,83,1,0,0,0,85,86,1,0,0,0,86,15,1,0,0,0,87,88,3,18,
9,0,88,89,5,8,0,0,89,90,3,20,10,0,90,91,5,8,0,0,91,92,3,22,11,0,92,93,5,
9,0,0,93,94,3,24,12,0,94,95,3,26,13,0,95,17,1,0,0,0,96,97,5,11,0,0,97,19,
1,0,0,0,98,99,5,11,0,0,99,21,1,0,0,0,100,101,5,10,0,0,101,102,5,10,0,0,102,
23,1,0,0,0,103,104,5,11,0,0,104,105,7,1,0,0,105,25,1,0,0,0,106,107,5,10,
0,0,107,27,1,0,0,0,6,33,56,63,69,80,85];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class siciParser extends antlr4.Parser {

    static grammarFileName = "sici.g4";
    static literalNames = [ null, "'-'", "'('", "'/'", "')'", "':'", "'<'", 
                            "'>'", "'.'", "';'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, "LETTER", "DIGIT", "WS" ];
    static ruleNames = [ "sici", "item", "issn", "chronology", "enumeration", 
                         "contribution", "location", "title", "control", 
                         "csi", "dpi", "mfi", "version", "check" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = siciParser.ruleNames;
        this.literalNames = siciParser.literalNames;
        this.symbolicNames = siciParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	sici() {
	    let localctx = new SiciContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, siciParser.RULE_sici);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.item();
	        this.state = 29;
	        this.contribution();
	        this.state = 33;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===siciParser.DIGIT) {
	            this.state = 30;
	            this.control();
	            this.state = 35;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 36;
	        this.match(siciParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	item() {
	    let localctx = new ItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, siciParser.RULE_item);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.issn();
	        this.state = 39;
	        this.chronology();
	        this.state = 40;
	        this.enumeration();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	issn() {
	    let localctx = new IssnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, siciParser.RULE_issn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(siciParser.DIGIT);
	        this.state = 43;
	        this.match(siciParser.DIGIT);
	        this.state = 44;
	        this.match(siciParser.DIGIT);
	        this.state = 45;
	        this.match(siciParser.DIGIT);
	        this.state = 46;
	        this.match(siciParser.T__0);
	        this.state = 47;
	        this.match(siciParser.DIGIT);
	        this.state = 48;
	        this.match(siciParser.DIGIT);
	        this.state = 49;
	        this.match(siciParser.DIGIT);
	        this.state = 50;
	        this.match(siciParser.DIGIT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	chronology() {
	    let localctx = new ChronologyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, siciParser.RULE_chronology);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(siciParser.T__1);
	        this.state = 54; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 53;
	            _la = this._input.LA(1);
	            if(!(_la===siciParser.T__2 || _la===siciParser.DIGIT)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 56; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===siciParser.T__2 || _la===siciParser.DIGIT);
	        this.state = 58;
	        this.match(siciParser.T__3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	enumeration() {
	    let localctx = new EnumerationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, siciParser.RULE_enumeration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 60;
	            this.match(siciParser.DIGIT);
	            this.state = 63; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===siciParser.DIGIT);
	        this.state = 65;
	        this.match(siciParser.T__4);
	        this.state = 67; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 66;
	            this.match(siciParser.DIGIT);
	            this.state = 69; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===siciParser.DIGIT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	contribution() {
	    let localctx = new ContributionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, siciParser.RULE_contribution);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(siciParser.T__5);
	        this.state = 72;
	        this.location();
	        this.state = 73;
	        this.match(siciParser.T__4);
	        this.state = 74;
	        this.title();
	        this.state = 75;
	        this.match(siciParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	location() {
	    let localctx = new LocationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, siciParser.RULE_location);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 77;
	            this.match(siciParser.DIGIT);
	            this.state = 80; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===siciParser.DIGIT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	title() {
	    let localctx = new TitleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, siciParser.RULE_title);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 82;
	            this.match(siciParser.LETTER);
	            this.state = 85; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===siciParser.LETTER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	control() {
	    let localctx = new ControlContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, siciParser.RULE_control);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.csi();
	        this.state = 88;
	        this.match(siciParser.T__7);
	        this.state = 89;
	        this.dpi();
	        this.state = 90;
	        this.match(siciParser.T__7);
	        this.state = 91;
	        this.mfi();
	        this.state = 92;
	        this.match(siciParser.T__8);
	        this.state = 93;
	        this.version();
	        this.state = 94;
	        this.check();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	csi() {
	    let localctx = new CsiContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, siciParser.RULE_csi);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.match(siciParser.DIGIT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dpi() {
	    let localctx = new DpiContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, siciParser.RULE_dpi);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        this.match(siciParser.DIGIT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mfi() {
	    let localctx = new MfiContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, siciParser.RULE_mfi);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this.match(siciParser.LETTER);
	        this.state = 101;
	        this.match(siciParser.LETTER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	version() {
	    let localctx = new VersionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, siciParser.RULE_version);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        this.match(siciParser.DIGIT);
	        this.state = 104;
	        _la = this._input.LA(1);
	        if(!(_la===siciParser.T__0 || _la===siciParser.DIGIT)) {
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



	check() {
	    let localctx = new CheckContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, siciParser.RULE_check);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this.match(siciParser.LETTER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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

siciParser.EOF = antlr4.Token.EOF;
siciParser.T__0 = 1;
siciParser.T__1 = 2;
siciParser.T__2 = 3;
siciParser.T__3 = 4;
siciParser.T__4 = 5;
siciParser.T__5 = 6;
siciParser.T__6 = 7;
siciParser.T__7 = 8;
siciParser.T__8 = 9;
siciParser.LETTER = 10;
siciParser.DIGIT = 11;
siciParser.WS = 12;

siciParser.RULE_sici = 0;
siciParser.RULE_item = 1;
siciParser.RULE_issn = 2;
siciParser.RULE_chronology = 3;
siciParser.RULE_enumeration = 4;
siciParser.RULE_contribution = 5;
siciParser.RULE_location = 6;
siciParser.RULE_title = 7;
siciParser.RULE_control = 8;
siciParser.RULE_csi = 9;
siciParser.RULE_dpi = 10;
siciParser.RULE_mfi = 11;
siciParser.RULE_version = 12;
siciParser.RULE_check = 13;

class SiciContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = siciParser.RULE_sici;
    }

	item() {
	    return this.getTypedRuleContext(ItemContext,0);
	};

	contribution() {
	    return this.getTypedRuleContext(ContributionContext,0);
	};

	EOF() {
	    return this.getToken(siciParser.EOF, 0);
	};

	control = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ControlContext);
	    } else {
	        return this.getTypedRuleContext(ControlContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof siciListener ) {
	        listener.enterSici(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof siciListener ) {
	        listener.exitSici(this);
		}
	}


}



class ItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = siciParser.RULE_item;
    }

	issn() {
	    return this.getTypedRuleContext(IssnContext,0);
	};

	chronology() {
	    return this.getTypedRuleContext(ChronologyContext,0);
	};

	enumeration() {
	    return this.getTypedRuleContext(EnumerationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof siciListener ) {
	        listener.enterItem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof siciListener ) {
	        listener.exitItem(this);
		}
	}


}



class IssnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = siciParser.RULE_issn;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(siciParser.DIGIT);
	    } else {
	        return this.getToken(siciParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof siciListener ) {
	        listener.enterIssn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof siciListener ) {
	        listener.exitIssn(this);
		}
	}


}



class ChronologyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = siciParser.RULE_chronology;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(siciParser.DIGIT);
	    } else {
	        return this.getToken(siciParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof siciListener ) {
	        listener.enterChronology(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof siciListener ) {
	        listener.exitChronology(this);
		}
	}


}



class EnumerationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = siciParser.RULE_enumeration;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(siciParser.DIGIT);
	    } else {
	        return this.getToken(siciParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof siciListener ) {
	        listener.enterEnumeration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof siciListener ) {
	        listener.exitEnumeration(this);
		}
	}


}



class ContributionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = siciParser.RULE_contribution;
    }

	location() {
	    return this.getTypedRuleContext(LocationContext,0);
	};

	title() {
	    return this.getTypedRuleContext(TitleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof siciListener ) {
	        listener.enterContribution(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof siciListener ) {
	        listener.exitContribution(this);
		}
	}


}



class LocationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = siciParser.RULE_location;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(siciParser.DIGIT);
	    } else {
	        return this.getToken(siciParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof siciListener ) {
	        listener.enterLocation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof siciListener ) {
	        listener.exitLocation(this);
		}
	}


}



class TitleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = siciParser.RULE_title;
    }

	LETTER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(siciParser.LETTER);
	    } else {
	        return this.getToken(siciParser.LETTER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof siciListener ) {
	        listener.enterTitle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof siciListener ) {
	        listener.exitTitle(this);
		}
	}


}



class ControlContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = siciParser.RULE_control;
    }

	csi() {
	    return this.getTypedRuleContext(CsiContext,0);
	};

	dpi() {
	    return this.getTypedRuleContext(DpiContext,0);
	};

	mfi() {
	    return this.getTypedRuleContext(MfiContext,0);
	};

	version() {
	    return this.getTypedRuleContext(VersionContext,0);
	};

	check() {
	    return this.getTypedRuleContext(CheckContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof siciListener ) {
	        listener.enterControl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof siciListener ) {
	        listener.exitControl(this);
		}
	}


}



class CsiContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = siciParser.RULE_csi;
    }

	DIGIT() {
	    return this.getToken(siciParser.DIGIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof siciListener ) {
	        listener.enterCsi(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof siciListener ) {
	        listener.exitCsi(this);
		}
	}


}



class DpiContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = siciParser.RULE_dpi;
    }

	DIGIT() {
	    return this.getToken(siciParser.DIGIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof siciListener ) {
	        listener.enterDpi(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof siciListener ) {
	        listener.exitDpi(this);
		}
	}


}



class MfiContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = siciParser.RULE_mfi;
    }

	LETTER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(siciParser.LETTER);
	    } else {
	        return this.getToken(siciParser.LETTER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof siciListener ) {
	        listener.enterMfi(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof siciListener ) {
	        listener.exitMfi(this);
		}
	}


}



class VersionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = siciParser.RULE_version;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(siciParser.DIGIT);
	    } else {
	        return this.getToken(siciParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof siciListener ) {
	        listener.enterVersion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof siciListener ) {
	        listener.exitVersion(this);
		}
	}


}



class CheckContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = siciParser.RULE_check;
    }

	LETTER() {
	    return this.getToken(siciParser.LETTER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof siciListener ) {
	        listener.enterCheck(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof siciListener ) {
	        listener.exitCheck(this);
		}
	}


}




siciParser.SiciContext = SiciContext; 
siciParser.ItemContext = ItemContext; 
siciParser.IssnContext = IssnContext; 
siciParser.ChronologyContext = ChronologyContext; 
siciParser.EnumerationContext = EnumerationContext; 
siciParser.ContributionContext = ContributionContext; 
siciParser.LocationContext = LocationContext; 
siciParser.TitleContext = TitleContext; 
siciParser.ControlContext = ControlContext; 
siciParser.CsiContext = CsiContext; 
siciParser.DpiContext = DpiContext; 
siciParser.MfiContext = MfiContext; 
siciParser.VersionContext = VersionContext; 
siciParser.CheckContext = CheckContext; 
