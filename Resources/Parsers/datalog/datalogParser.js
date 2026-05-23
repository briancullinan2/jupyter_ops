// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/datalog/datalog.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import datalogListener from './datalogListener.js';
const serializedATN = [4,1,17,115,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,5,0,30,8,0,10,0,12,0,33,9,0,1,0,1,0,1,1,1,1,1,1,1,1,3,1,41,
8,1,1,2,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,
1,6,1,6,3,6,62,8,6,1,7,1,7,1,7,1,7,1,7,3,7,69,8,7,1,8,1,8,1,8,1,8,1,8,1,
8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,
8,1,8,3,8,96,8,8,1,9,1,9,1,10,1,10,1,10,1,10,1,10,3,10,105,8,10,1,11,1,11,
3,11,109,8,11,1,12,1,12,1,13,1,13,1,13,0,0,14,0,2,4,6,8,10,12,14,16,18,20,
22,24,26,0,2,1,0,13,14,2,0,10,11,13,15,113,0,31,1,0,0,0,2,40,1,0,0,0,4,42,
1,0,0,0,6,45,1,0,0,0,8,48,1,0,0,0,10,51,1,0,0,0,12,61,1,0,0,0,14,68,1,0,
0,0,16,95,1,0,0,0,18,97,1,0,0,0,20,104,1,0,0,0,22,108,1,0,0,0,24,110,1,0,
0,0,26,112,1,0,0,0,28,30,3,2,1,0,29,28,1,0,0,0,30,33,1,0,0,0,31,29,1,0,0,
0,31,32,1,0,0,0,32,34,1,0,0,0,33,31,1,0,0,0,34,35,5,0,0,1,35,1,1,0,0,0,36,
41,3,4,2,0,37,41,3,6,3,0,38,41,3,8,4,0,39,41,3,10,5,0,40,36,1,0,0,0,40,37,
1,0,0,0,40,38,1,0,0,0,40,39,1,0,0,0,41,3,1,0,0,0,42,43,3,12,6,0,43,44,5,
1,0,0,44,5,1,0,0,0,45,46,3,12,6,0,46,47,5,2,0,0,47,7,1,0,0,0,48,49,3,16,
8,0,49,50,5,3,0,0,50,9,1,0,0,0,51,52,5,4,0,0,52,53,5,13,0,0,53,54,5,5,0,
0,54,55,5,1,0,0,55,11,1,0,0,0,56,57,3,16,8,0,57,58,5,6,0,0,58,59,3,14,7,
0,59,62,1,0,0,0,60,62,3,16,8,0,61,56,1,0,0,0,61,60,1,0,0,0,62,13,1,0,0,0,
63,64,3,16,8,0,64,65,5,7,0,0,65,66,3,14,7,0,66,69,1,0,0,0,67,69,3,16,8,0,
68,63,1,0,0,0,68,67,1,0,0,0,69,15,1,0,0,0,70,71,3,18,9,0,71,72,5,4,0,0,72,
73,5,5,0,0,73,96,1,0,0,0,74,75,3,18,9,0,75,76,5,4,0,0,76,77,3,20,10,0,77,
78,5,5,0,0,78,96,1,0,0,0,79,96,3,18,9,0,80,81,3,22,11,0,81,82,5,8,0,0,82,
83,3,22,11,0,83,96,1,0,0,0,84,85,3,22,11,0,85,86,5,9,0,0,86,87,3,22,11,0,
87,96,1,0,0,0,88,89,5,12,0,0,89,90,5,6,0,0,90,91,3,26,13,0,91,92,5,4,0,0,
92,93,3,20,10,0,93,94,5,5,0,0,94,96,1,0,0,0,95,70,1,0,0,0,95,74,1,0,0,0,
95,79,1,0,0,0,95,80,1,0,0,0,95,84,1,0,0,0,95,88,1,0,0,0,96,17,1,0,0,0,97,
98,7,0,0,0,98,19,1,0,0,0,99,105,3,22,11,0,100,101,3,22,11,0,101,102,5,7,
0,0,102,103,3,20,10,0,103,105,1,0,0,0,104,99,1,0,0,0,104,100,1,0,0,0,105,
21,1,0,0,0,106,109,5,12,0,0,107,109,3,24,12,0,108,106,1,0,0,0,108,107,1,
0,0,0,109,23,1,0,0,0,110,111,7,1,0,0,111,25,1,0,0,0,112,113,5,13,0,0,113,
27,1,0,0,0,7,31,40,61,68,95,104,108];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class datalogParser extends antlr4.Parser {

    static grammarFileName = "datalog.g4";
    static literalNames = [ null, "'.'", "'~'", "'?'", "'('", "')'", "':-'", 
                            "','", "'='", "'!='", "'true'", "'false'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, "VARIABLE", "IDENTIFIER", 
                             "STRING", "INTEGER", "COMMENT", "WS" ];
    static ruleNames = [ "program", "statement", "assertion", "retraction", 
                         "query", "requirement", "clause", "body", "literal", 
                         "predicate_sym", "terms_", "term_", "constant", 
                         "external_sym" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = datalogParser.ruleNames;
        this.literalNames = datalogParser.literalNames;
        this.symbolicNames = datalogParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, datalogParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 64528) !== 0)) {
	            this.state = 28;
	            this.statement();
	            this.state = 33;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 34;
	        this.match(datalogParser.EOF);
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, datalogParser.RULE_statement);
	    try {
	        this.state = 40;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 36;
	            this.assertion();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 37;
	            this.retraction();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 38;
	            this.query();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 39;
	            this.requirement();
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



	assertion() {
	    let localctx = new AssertionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, datalogParser.RULE_assertion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.clause();
	        this.state = 43;
	        this.match(datalogParser.T__0);
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



	retraction() {
	    let localctx = new RetractionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, datalogParser.RULE_retraction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.clause();
	        this.state = 46;
	        this.match(datalogParser.T__1);
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



	query() {
	    let localctx = new QueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, datalogParser.RULE_query);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.literal();
	        this.state = 49;
	        this.match(datalogParser.T__2);
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



	requirement() {
	    let localctx = new RequirementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, datalogParser.RULE_requirement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(datalogParser.T__3);
	        this.state = 52;
	        this.match(datalogParser.IDENTIFIER);
	        this.state = 53;
	        this.match(datalogParser.T__4);
	        this.state = 54;
	        this.match(datalogParser.T__0);
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



	clause() {
	    let localctx = new ClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, datalogParser.RULE_clause);
	    try {
	        this.state = 61;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 56;
	            this.literal();
	            this.state = 57;
	            this.match(datalogParser.T__5);
	            this.state = 58;
	            this.body();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 60;
	            this.literal();
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



	body() {
	    let localctx = new BodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, datalogParser.RULE_body);
	    try {
	        this.state = 68;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 63;
	            this.literal();
	            this.state = 64;
	            this.match(datalogParser.T__6);
	            this.state = 65;
	            this.body();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 67;
	            this.literal();
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



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, datalogParser.RULE_literal);
	    try {
	        this.state = 95;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 70;
	            this.predicate_sym();
	            this.state = 71;
	            this.match(datalogParser.T__3);
	            this.state = 72;
	            this.match(datalogParser.T__4);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 74;
	            this.predicate_sym();
	            this.state = 75;
	            this.match(datalogParser.T__3);
	            this.state = 76;
	            this.terms_();
	            this.state = 77;
	            this.match(datalogParser.T__4);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 79;
	            this.predicate_sym();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 80;
	            this.term_();
	            this.state = 81;
	            this.match(datalogParser.T__7);
	            this.state = 82;
	            this.term_();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 84;
	            this.term_();
	            this.state = 85;
	            this.match(datalogParser.T__8);
	            this.state = 86;
	            this.term_();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 88;
	            this.match(datalogParser.VARIABLE);
	            this.state = 89;
	            this.match(datalogParser.T__5);
	            this.state = 90;
	            this.external_sym();
	            this.state = 91;
	            this.match(datalogParser.T__3);
	            this.state = 92;
	            this.terms_();
	            this.state = 93;
	            this.match(datalogParser.T__4);
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



	predicate_sym() {
	    let localctx = new Predicate_symContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, datalogParser.RULE_predicate_sym);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        _la = this._input.LA(1);
	        if(!(_la===13 || _la===14)) {
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



	terms_() {
	    let localctx = new Terms_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, datalogParser.RULE_terms_);
	    try {
	        this.state = 104;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 99;
	            this.term_();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 100;
	            this.term_();
	            this.state = 101;
	            this.match(datalogParser.T__6);
	            this.state = 102;
	            this.terms_();
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



	term_() {
	    let localctx = new Term_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, datalogParser.RULE_term_);
	    try {
	        this.state = 108;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 106;
	            this.match(datalogParser.VARIABLE);
	            break;
	        case 10:
	        case 11:
	        case 13:
	        case 14:
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 107;
	            this.constant();
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



	constant() {
	    let localctx = new ConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, datalogParser.RULE_constant);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 60416) !== 0))) {
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



	external_sym() {
	    let localctx = new External_symContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, datalogParser.RULE_external_sym);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        this.match(datalogParser.IDENTIFIER);
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

datalogParser.EOF = antlr4.Token.EOF;
datalogParser.T__0 = 1;
datalogParser.T__1 = 2;
datalogParser.T__2 = 3;
datalogParser.T__3 = 4;
datalogParser.T__4 = 5;
datalogParser.T__5 = 6;
datalogParser.T__6 = 7;
datalogParser.T__7 = 8;
datalogParser.T__8 = 9;
datalogParser.T__9 = 10;
datalogParser.T__10 = 11;
datalogParser.VARIABLE = 12;
datalogParser.IDENTIFIER = 13;
datalogParser.STRING = 14;
datalogParser.INTEGER = 15;
datalogParser.COMMENT = 16;
datalogParser.WS = 17;

datalogParser.RULE_program = 0;
datalogParser.RULE_statement = 1;
datalogParser.RULE_assertion = 2;
datalogParser.RULE_retraction = 3;
datalogParser.RULE_query = 4;
datalogParser.RULE_requirement = 5;
datalogParser.RULE_clause = 6;
datalogParser.RULE_body = 7;
datalogParser.RULE_literal = 8;
datalogParser.RULE_predicate_sym = 9;
datalogParser.RULE_terms_ = 10;
datalogParser.RULE_term_ = 11;
datalogParser.RULE_constant = 12;
datalogParser.RULE_external_sym = 13;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = datalogParser.RULE_program;
    }

	EOF() {
	    return this.getToken(datalogParser.EOF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof datalogListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof datalogListener ) {
	        listener.exitProgram(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = datalogParser.RULE_statement;
    }

	assertion() {
	    return this.getTypedRuleContext(AssertionContext,0);
	};

	retraction() {
	    return this.getTypedRuleContext(RetractionContext,0);
	};

	query() {
	    return this.getTypedRuleContext(QueryContext,0);
	};

	requirement() {
	    return this.getTypedRuleContext(RequirementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof datalogListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof datalogListener ) {
	        listener.exitStatement(this);
		}
	}


}



class AssertionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = datalogParser.RULE_assertion;
    }

	clause() {
	    return this.getTypedRuleContext(ClauseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof datalogListener ) {
	        listener.enterAssertion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof datalogListener ) {
	        listener.exitAssertion(this);
		}
	}


}



class RetractionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = datalogParser.RULE_retraction;
    }

	clause() {
	    return this.getTypedRuleContext(ClauseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof datalogListener ) {
	        listener.enterRetraction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof datalogListener ) {
	        listener.exitRetraction(this);
		}
	}


}



class QueryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = datalogParser.RULE_query;
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof datalogListener ) {
	        listener.enterQuery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof datalogListener ) {
	        listener.exitQuery(this);
		}
	}


}



class RequirementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = datalogParser.RULE_requirement;
    }

	IDENTIFIER() {
	    return this.getToken(datalogParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof datalogListener ) {
	        listener.enterRequirement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof datalogListener ) {
	        listener.exitRequirement(this);
		}
	}


}



class ClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = datalogParser.RULE_clause;
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof datalogListener ) {
	        listener.enterClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof datalogListener ) {
	        listener.exitClause(this);
		}
	}


}



class BodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = datalogParser.RULE_body;
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof datalogListener ) {
	        listener.enterBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof datalogListener ) {
	        listener.exitBody(this);
		}
	}


}



class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = datalogParser.RULE_literal;
    }

	predicate_sym() {
	    return this.getTypedRuleContext(Predicate_symContext,0);
	};

	terms_() {
	    return this.getTypedRuleContext(Terms_Context,0);
	};

	term_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Term_Context);
	    } else {
	        return this.getTypedRuleContext(Term_Context,i);
	    }
	};

	VARIABLE() {
	    return this.getToken(datalogParser.VARIABLE, 0);
	};

	external_sym() {
	    return this.getTypedRuleContext(External_symContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof datalogListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof datalogListener ) {
	        listener.exitLiteral(this);
		}
	}


}



class Predicate_symContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = datalogParser.RULE_predicate_sym;
    }

	IDENTIFIER() {
	    return this.getToken(datalogParser.IDENTIFIER, 0);
	};

	STRING() {
	    return this.getToken(datalogParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof datalogListener ) {
	        listener.enterPredicate_sym(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof datalogListener ) {
	        listener.exitPredicate_sym(this);
		}
	}


}



class Terms_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = datalogParser.RULE_terms_;
    }

	term_() {
	    return this.getTypedRuleContext(Term_Context,0);
	};

	terms_() {
	    return this.getTypedRuleContext(Terms_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof datalogListener ) {
	        listener.enterTerms_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof datalogListener ) {
	        listener.exitTerms_(this);
		}
	}


}



class Term_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = datalogParser.RULE_term_;
    }

	VARIABLE() {
	    return this.getToken(datalogParser.VARIABLE, 0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof datalogListener ) {
	        listener.enterTerm_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof datalogListener ) {
	        listener.exitTerm_(this);
		}
	}


}



class ConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = datalogParser.RULE_constant;
    }

	IDENTIFIER() {
	    return this.getToken(datalogParser.IDENTIFIER, 0);
	};

	STRING() {
	    return this.getToken(datalogParser.STRING, 0);
	};

	INTEGER() {
	    return this.getToken(datalogParser.INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof datalogListener ) {
	        listener.enterConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof datalogListener ) {
	        listener.exitConstant(this);
		}
	}


}



class External_symContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = datalogParser.RULE_external_sym;
    }

	IDENTIFIER() {
	    return this.getToken(datalogParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof datalogListener ) {
	        listener.enterExternal_sym(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof datalogListener ) {
	        listener.exitExternal_sym(this);
		}
	}


}




datalogParser.ProgramContext = ProgramContext; 
datalogParser.StatementContext = StatementContext; 
datalogParser.AssertionContext = AssertionContext; 
datalogParser.RetractionContext = RetractionContext; 
datalogParser.QueryContext = QueryContext; 
datalogParser.RequirementContext = RequirementContext; 
datalogParser.ClauseContext = ClauseContext; 
datalogParser.BodyContext = BodyContext; 
datalogParser.LiteralContext = LiteralContext; 
datalogParser.Predicate_symContext = Predicate_symContext; 
datalogParser.Terms_Context = Terms_Context; 
datalogParser.Term_Context = Term_Context; 
datalogParser.ConstantContext = ConstantContext; 
datalogParser.External_symContext = External_symContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
