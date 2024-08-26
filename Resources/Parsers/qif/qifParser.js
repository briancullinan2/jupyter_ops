// Generated from Resources/Parsers/qif/qifParser.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import qifParserListener from './qifParserListener.js';
const serializedATN = [4,1,19,84,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,1,
0,5,0,28,8,0,10,0,12,0,31,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,
1,43,8,1,10,1,12,1,46,9,1,1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,4,1,
5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,9,3,9,74,8,9,1,10,
1,10,1,10,1,10,1,11,1,11,1,12,1,12,1,12,0,0,13,0,2,4,6,8,10,12,14,16,18,
20,22,24,0,0,80,0,29,1,0,0,0,2,44,1,0,0,0,4,49,1,0,0,0,6,52,1,0,0,0,8,55,
1,0,0,0,10,58,1,0,0,0,12,61,1,0,0,0,14,64,1,0,0,0,16,67,1,0,0,0,18,70,1,
0,0,0,20,75,1,0,0,0,22,79,1,0,0,0,24,81,1,0,0,0,26,28,3,2,1,0,27,26,1,0,
0,0,28,31,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,32,1,0,0,0,31,29,1,0,0,
0,32,33,5,0,0,1,33,1,1,0,0,0,34,43,3,4,2,0,35,43,3,6,3,0,36,43,3,8,4,0,37,
43,3,10,5,0,38,43,3,12,6,0,39,43,3,14,7,0,40,43,3,16,8,0,41,43,3,18,9,0,
42,34,1,0,0,0,42,35,1,0,0,0,42,36,1,0,0,0,42,37,1,0,0,0,42,38,1,0,0,0,42,
39,1,0,0,0,42,40,1,0,0,0,42,41,1,0,0,0,43,46,1,0,0,0,44,42,1,0,0,0,44,45,
1,0,0,0,45,47,1,0,0,0,46,44,1,0,0,0,47,48,3,24,12,0,48,3,1,0,0,0,49,50,5,
1,0,0,50,51,5,14,0,0,51,5,1,0,0,0,52,53,5,8,0,0,53,54,5,12,0,0,54,7,1,0,
0,0,55,56,5,2,0,0,56,57,5,13,0,0,57,9,1,0,0,0,58,59,5,4,0,0,59,60,5,13,0,
0,60,11,1,0,0,0,61,62,5,3,0,0,62,63,5,9,0,0,63,13,1,0,0,0,64,65,5,5,0,0,
65,66,5,14,0,0,66,15,1,0,0,0,67,68,5,6,0,0,68,69,5,14,0,0,69,17,1,0,0,0,
70,73,5,7,0,0,71,74,3,20,10,0,72,74,3,22,11,0,73,71,1,0,0,0,73,72,1,0,0,
0,74,19,1,0,0,0,75,76,5,16,0,0,76,77,5,17,0,0,77,78,5,18,0,0,78,21,1,0,0,
0,79,80,5,17,0,0,80,23,1,0,0,0,81,82,5,10,0,0,82,25,1,0,0,0,4,29,42,44,73];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class qifParser extends antlr4.Parser {

    static grammarFileName = "qifParser.g4";
    static literalNames = [ null, "'!Type:'", "'T'", "'C'", "'N'", "'M'", 
                            "'P'", "'L'", "'D'", null, "'^'", null, null, 
                            null, null, null, "'['", null, "']'" ];
    static symbolicNames = [ null, "TYPE", "T", "C", "N", "M", "P", "L", 
                             "D", "STATE", "EOR", "WS", "DATE", "NUM", "TEXT", 
                             "EOL", "LB", "ACCNTCATNAME", "RB", "EOL2" ];
    static ruleNames = [ "qif", "record", "recordtype", "date", "total", 
                         "check", "state_", "memo", "payee", "accountorcategory", 
                         "account", "category", "eor" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = qifParser.ruleNames;
        this.literalNames = qifParser.literalNames;
        this.symbolicNames = qifParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	qif() {
	    let localctx = new QifContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, qifParser.RULE_qif);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << qifParser.TYPE) | (1 << qifParser.T) | (1 << qifParser.C) | (1 << qifParser.N) | (1 << qifParser.M) | (1 << qifParser.P) | (1 << qifParser.L) | (1 << qifParser.D) | (1 << qifParser.EOR))) !== 0)) {
	            this.state = 26;
	            this.record();
	            this.state = 31;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 32;
	        this.match(qifParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	record() {
	    let localctx = new RecordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, qifParser.RULE_record);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << qifParser.TYPE) | (1 << qifParser.T) | (1 << qifParser.C) | (1 << qifParser.N) | (1 << qifParser.M) | (1 << qifParser.P) | (1 << qifParser.L) | (1 << qifParser.D))) !== 0)) {
	            this.state = 42;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case qifParser.TYPE:
	                this.state = 34;
	                this.recordtype();
	                break;
	            case qifParser.D:
	                this.state = 35;
	                this.date();
	                break;
	            case qifParser.T:
	                this.state = 36;
	                this.total();
	                break;
	            case qifParser.N:
	                this.state = 37;
	                this.check();
	                break;
	            case qifParser.C:
	                this.state = 38;
	                this.state_();
	                break;
	            case qifParser.M:
	                this.state = 39;
	                this.memo();
	                break;
	            case qifParser.P:
	                this.state = 40;
	                this.payee();
	                break;
	            case qifParser.L:
	                this.state = 41;
	                this.accountorcategory();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 46;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 47;
	        this.eor();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	recordtype() {
	    let localctx = new RecordtypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, qifParser.RULE_recordtype);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(qifParser.TYPE);
	        this.state = 50;
	        this.match(qifParser.TEXT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 6, qifParser.RULE_date);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(qifParser.D);
	        this.state = 53;
	        this.match(qifParser.DATE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	total() {
	    let localctx = new TotalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, qifParser.RULE_total);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(qifParser.T);
	        this.state = 56;
	        this.match(qifParser.NUM);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 10, qifParser.RULE_check);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.match(qifParser.N);
	        this.state = 59;
	        this.match(qifParser.NUM);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	state_() {
	    let localctx = new State_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, qifParser.RULE_state_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(qifParser.C);
	        this.state = 62;
	        this.match(qifParser.STATE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	memo() {
	    let localctx = new MemoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, qifParser.RULE_memo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(qifParser.M);
	        this.state = 65;
	        this.match(qifParser.TEXT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	payee() {
	    let localctx = new PayeeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, qifParser.RULE_payee);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(qifParser.P);
	        this.state = 68;
	        this.match(qifParser.TEXT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	accountorcategory() {
	    let localctx = new AccountorcategoryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, qifParser.RULE_accountorcategory);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this.match(qifParser.L);
	        this.state = 73;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case qifParser.LB:
	            this.state = 71;
	            this.account();
	            break;
	        case qifParser.ACCNTCATNAME:
	            this.state = 72;
	            this.category();
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



	account() {
	    let localctx = new AccountContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, qifParser.RULE_account);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this.match(qifParser.LB);
	        this.state = 76;
	        this.match(qifParser.ACCNTCATNAME);
	        this.state = 77;
	        this.match(qifParser.RB);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	category() {
	    let localctx = new CategoryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, qifParser.RULE_category);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.match(qifParser.ACCNTCATNAME);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	eor() {
	    let localctx = new EorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, qifParser.RULE_eor);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.match(qifParser.EOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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

qifParser.EOF = antlr4.Token.EOF;
qifParser.TYPE = 1;
qifParser.T = 2;
qifParser.C = 3;
qifParser.N = 4;
qifParser.M = 5;
qifParser.P = 6;
qifParser.L = 7;
qifParser.D = 8;
qifParser.STATE = 9;
qifParser.EOR = 10;
qifParser.WS = 11;
qifParser.DATE = 12;
qifParser.NUM = 13;
qifParser.TEXT = 14;
qifParser.EOL = 15;
qifParser.LB = 16;
qifParser.ACCNTCATNAME = 17;
qifParser.RB = 18;
qifParser.EOL2 = 19;

qifParser.RULE_qif = 0;
qifParser.RULE_record = 1;
qifParser.RULE_recordtype = 2;
qifParser.RULE_date = 3;
qifParser.RULE_total = 4;
qifParser.RULE_check = 5;
qifParser.RULE_state_ = 6;
qifParser.RULE_memo = 7;
qifParser.RULE_payee = 8;
qifParser.RULE_accountorcategory = 9;
qifParser.RULE_account = 10;
qifParser.RULE_category = 11;
qifParser.RULE_eor = 12;

class QifContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qifParser.RULE_qif;
    }

	EOF() {
	    return this.getToken(qifParser.EOF, 0);
	};

	record = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RecordContext);
	    } else {
	        return this.getTypedRuleContext(RecordContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof qifParserListener ) {
	        listener.enterQif(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qifParserListener ) {
	        listener.exitQif(this);
		}
	}


}



class RecordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qifParser.RULE_record;
    }

	eor() {
	    return this.getTypedRuleContext(EorContext,0);
	};

	recordtype = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RecordtypeContext);
	    } else {
	        return this.getTypedRuleContext(RecordtypeContext,i);
	    }
	};

	date = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DateContext);
	    } else {
	        return this.getTypedRuleContext(DateContext,i);
	    }
	};

	total = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TotalContext);
	    } else {
	        return this.getTypedRuleContext(TotalContext,i);
	    }
	};

	check = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CheckContext);
	    } else {
	        return this.getTypedRuleContext(CheckContext,i);
	    }
	};

	state_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(State_Context);
	    } else {
	        return this.getTypedRuleContext(State_Context,i);
	    }
	};

	memo = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MemoContext);
	    } else {
	        return this.getTypedRuleContext(MemoContext,i);
	    }
	};

	payee = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PayeeContext);
	    } else {
	        return this.getTypedRuleContext(PayeeContext,i);
	    }
	};

	accountorcategory = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AccountorcategoryContext);
	    } else {
	        return this.getTypedRuleContext(AccountorcategoryContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof qifParserListener ) {
	        listener.enterRecord(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qifParserListener ) {
	        listener.exitRecord(this);
		}
	}


}



class RecordtypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qifParser.RULE_recordtype;
    }

	TYPE() {
	    return this.getToken(qifParser.TYPE, 0);
	};

	TEXT() {
	    return this.getToken(qifParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof qifParserListener ) {
	        listener.enterRecordtype(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qifParserListener ) {
	        listener.exitRecordtype(this);
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
        this.ruleIndex = qifParser.RULE_date;
    }

	D() {
	    return this.getToken(qifParser.D, 0);
	};

	DATE() {
	    return this.getToken(qifParser.DATE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof qifParserListener ) {
	        listener.enterDate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qifParserListener ) {
	        listener.exitDate(this);
		}
	}


}



class TotalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qifParser.RULE_total;
    }

	T() {
	    return this.getToken(qifParser.T, 0);
	};

	NUM() {
	    return this.getToken(qifParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof qifParserListener ) {
	        listener.enterTotal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qifParserListener ) {
	        listener.exitTotal(this);
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
        this.ruleIndex = qifParser.RULE_check;
    }

	N() {
	    return this.getToken(qifParser.N, 0);
	};

	NUM() {
	    return this.getToken(qifParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof qifParserListener ) {
	        listener.enterCheck(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qifParserListener ) {
	        listener.exitCheck(this);
		}
	}


}



class State_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qifParser.RULE_state_;
    }

	C() {
	    return this.getToken(qifParser.C, 0);
	};

	STATE() {
	    return this.getToken(qifParser.STATE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof qifParserListener ) {
	        listener.enterState_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qifParserListener ) {
	        listener.exitState_(this);
		}
	}


}



class MemoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qifParser.RULE_memo;
    }

	M() {
	    return this.getToken(qifParser.M, 0);
	};

	TEXT() {
	    return this.getToken(qifParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof qifParserListener ) {
	        listener.enterMemo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qifParserListener ) {
	        listener.exitMemo(this);
		}
	}


}



class PayeeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qifParser.RULE_payee;
    }

	P() {
	    return this.getToken(qifParser.P, 0);
	};

	TEXT() {
	    return this.getToken(qifParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof qifParserListener ) {
	        listener.enterPayee(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qifParserListener ) {
	        listener.exitPayee(this);
		}
	}


}



class AccountorcategoryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qifParser.RULE_accountorcategory;
    }

	L() {
	    return this.getToken(qifParser.L, 0);
	};

	account() {
	    return this.getTypedRuleContext(AccountContext,0);
	};

	category() {
	    return this.getTypedRuleContext(CategoryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qifParserListener ) {
	        listener.enterAccountorcategory(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qifParserListener ) {
	        listener.exitAccountorcategory(this);
		}
	}


}



class AccountContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qifParser.RULE_account;
    }

	LB() {
	    return this.getToken(qifParser.LB, 0);
	};

	ACCNTCATNAME() {
	    return this.getToken(qifParser.ACCNTCATNAME, 0);
	};

	RB() {
	    return this.getToken(qifParser.RB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof qifParserListener ) {
	        listener.enterAccount(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qifParserListener ) {
	        listener.exitAccount(this);
		}
	}


}



class CategoryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qifParser.RULE_category;
    }

	ACCNTCATNAME() {
	    return this.getToken(qifParser.ACCNTCATNAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof qifParserListener ) {
	        listener.enterCategory(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qifParserListener ) {
	        listener.exitCategory(this);
		}
	}


}



class EorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qifParser.RULE_eor;
    }

	EOR() {
	    return this.getToken(qifParser.EOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof qifParserListener ) {
	        listener.enterEor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qifParserListener ) {
	        listener.exitEor(this);
		}
	}


}




qifParser.QifContext = QifContext; 
qifParser.RecordContext = RecordContext; 
qifParser.RecordtypeContext = RecordtypeContext; 
qifParser.DateContext = DateContext; 
qifParser.TotalContext = TotalContext; 
qifParser.CheckContext = CheckContext; 
qifParser.State_Context = State_Context; 
qifParser.MemoContext = MemoContext; 
qifParser.PayeeContext = PayeeContext; 
qifParser.AccountorcategoryContext = AccountorcategoryContext; 
qifParser.AccountContext = AccountContext; 
qifParser.CategoryContext = CategoryContext; 
qifParser.EorContext = EorContext; 
