// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/caql/Metrics.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MetricsListener from './MetricsListener.js';
const serializedATN = [4,1,9,28,2,0,7,0,2,1,7,1,2,2,7,2,1,0,1,0,1,0,1,1,
1,1,1,1,1,1,1,1,1,1,5,1,16,8,1,10,1,12,1,19,9,1,1,1,1,1,1,2,1,2,1,2,1,2,
1,2,1,2,0,0,3,0,2,4,0,1,1,0,3,4,25,0,6,1,0,0,0,2,9,1,0,0,0,4,22,1,0,0,0,
6,7,3,2,1,0,7,8,5,0,0,1,8,1,1,0,0,0,9,10,7,0,0,0,10,11,5,1,0,0,11,12,5,6,
0,0,12,13,5,7,0,0,13,17,5,6,0,0,14,16,3,4,2,0,15,14,1,0,0,0,16,19,1,0,0,
0,17,15,1,0,0,0,17,18,1,0,0,0,18,20,1,0,0,0,19,17,1,0,0,0,20,21,5,2,0,0,
21,3,1,0,0,0,22,23,5,5,0,0,23,24,5,6,0,0,24,25,5,7,0,0,25,26,5,6,0,0,26,
5,1,0,0,0,1,17];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MetricsParser extends antlr4.Parser {

    static grammarFileName = "Metrics.g4";
    static literalNames = [ null, "'('", "')'", "'and'", "'or'", "','", 
                            null, "':'" ];
    static symbolicNames = [ null, "LEFT_PAREN", "RIGHT_PAREN", "AND", "OR", 
                             "COMMA", "STRING", "COLON", "WS", "SHEBANG" ];
    static ruleNames = [ "start", "expr", "metricsMult" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MetricsParser.ruleNames;
        this.literalNames = MetricsParser.literalNames;
        this.symbolicNames = MetricsParser.symbolicNames;
    }



	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MetricsParser.RULE_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 6;
	        this.expr();
	        this.state = 7;
	        this.match(MetricsParser.EOF);
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



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MetricsParser.RULE_expr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 9;
	        localctx.op = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!(_la===3 || _la===4)) {
	            localctx.op = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 10;
	        this.match(MetricsParser.LEFT_PAREN);
	        this.state = 11;
	        localctx.metricsName = this.match(MetricsParser.STRING);
	        this.state = 12;
	        this.match(MetricsParser.COLON);
	        this.state = 13;
	        localctx.metricsValue = this.match(MetricsParser.STRING);
	        this.state = 17;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5) {
	            this.state = 14;
	            this.metricsMult();
	            this.state = 19;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 20;
	        this.match(MetricsParser.RIGHT_PAREN);
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



	metricsMult() {
	    let localctx = new MetricsMultContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MetricsParser.RULE_metricsMult);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.match(MetricsParser.COMMA);
	        this.state = 23;
	        localctx.metricsName = this.match(MetricsParser.STRING);
	        this.state = 24;
	        this.match(MetricsParser.COLON);
	        this.state = 25;
	        localctx.metricsValue = this.match(MetricsParser.STRING);
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

MetricsParser.EOF = antlr4.Token.EOF;
MetricsParser.LEFT_PAREN = 1;
MetricsParser.RIGHT_PAREN = 2;
MetricsParser.AND = 3;
MetricsParser.OR = 4;
MetricsParser.COMMA = 5;
MetricsParser.STRING = 6;
MetricsParser.COLON = 7;
MetricsParser.WS = 8;
MetricsParser.SHEBANG = 9;

MetricsParser.RULE_start = 0;
MetricsParser.RULE_expr = 1;
MetricsParser.RULE_metricsMult = 2;

class StartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MetricsParser.RULE_start;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	EOF() {
	    return this.getToken(MetricsParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MetricsListener ) {
	        listener.enterStart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MetricsListener ) {
	        listener.exitStart(this);
		}
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MetricsParser.RULE_expr;
        this.op = null;
        this.metricsName = null;
        this.metricsValue = null;
    }

	LEFT_PAREN() {
	    return this.getToken(MetricsParser.LEFT_PAREN, 0);
	};

	COLON() {
	    return this.getToken(MetricsParser.COLON, 0);
	};

	RIGHT_PAREN() {
	    return this.getToken(MetricsParser.RIGHT_PAREN, 0);
	};

	STRING = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MetricsParser.STRING);
	    } else {
	        return this.getToken(MetricsParser.STRING, i);
	    }
	};


	AND() {
	    return this.getToken(MetricsParser.AND, 0);
	};

	OR() {
	    return this.getToken(MetricsParser.OR, 0);
	};

	metricsMult = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MetricsMultContext);
	    } else {
	        return this.getTypedRuleContext(MetricsMultContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MetricsListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MetricsListener ) {
	        listener.exitExpr(this);
		}
	}


}



class MetricsMultContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MetricsParser.RULE_metricsMult;
        this.metricsName = null;
        this.metricsValue = null;
    }

	COMMA() {
	    return this.getToken(MetricsParser.COMMA, 0);
	};

	COLON() {
	    return this.getToken(MetricsParser.COLON, 0);
	};

	STRING = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MetricsParser.STRING);
	    } else {
	        return this.getToken(MetricsParser.STRING, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MetricsListener ) {
	        listener.enterMetricsMult(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MetricsListener ) {
	        listener.exitMetricsMult(this);
		}
	}


}




MetricsParser.StartContext = StartContext; 
MetricsParser.ExprContext = ExprContext; 
MetricsParser.MetricsMultContext = MetricsMultContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
