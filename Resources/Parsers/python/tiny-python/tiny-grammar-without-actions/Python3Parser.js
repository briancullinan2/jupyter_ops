// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/python/tiny-python/tiny-grammar-without-actions/Python3.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import Python3Listener from './Python3Listener.js';
const serializedATN = [4,1,34,152,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,1,0,1,0,1,0,1,0,3,0,40,8,0,1,
1,1,1,5,1,44,8,1,10,1,12,1,47,9,1,1,1,1,1,1,2,1,2,3,2,53,8,2,1,3,1,3,1,3,
1,4,1,4,1,4,3,4,61,8,4,1,5,1,5,1,5,1,5,1,6,1,6,3,6,69,8,6,1,7,1,7,1,8,1,
8,1,9,1,9,3,9,77,8,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,5,10,88,
8,10,10,10,12,10,91,9,10,1,10,1,10,1,10,3,10,96,8,10,1,11,1,11,1,11,1,11,
1,11,1,12,1,12,1,12,1,12,4,12,107,8,12,11,12,12,12,108,1,12,1,12,3,12,113,
8,12,1,13,1,13,1,13,1,13,5,13,119,8,13,10,13,12,13,122,9,13,1,14,1,14,1,
14,3,14,127,8,14,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,138,8,
16,1,16,1,16,1,16,4,16,143,8,16,11,16,12,16,144,5,16,147,8,16,10,16,12,16,
150,9,16,1,16,0,1,32,17,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,0,
2,1,0,10,15,1,0,16,17,153,0,39,1,0,0,0,2,45,1,0,0,0,4,52,1,0,0,0,6,54,1,
0,0,0,8,60,1,0,0,0,10,62,1,0,0,0,12,68,1,0,0,0,14,70,1,0,0,0,16,72,1,0,0,
0,18,76,1,0,0,0,20,78,1,0,0,0,22,97,1,0,0,0,24,112,1,0,0,0,26,114,1,0,0,
0,28,126,1,0,0,0,30,128,1,0,0,0,32,137,1,0,0,0,34,40,5,21,0,0,35,40,3,6,
3,0,36,37,3,18,9,0,37,38,5,21,0,0,38,40,1,0,0,0,39,34,1,0,0,0,39,35,1,0,
0,0,39,36,1,0,0,0,40,1,1,0,0,0,41,44,5,21,0,0,42,44,3,4,2,0,43,41,1,0,0,
0,43,42,1,0,0,0,44,47,1,0,0,0,45,43,1,0,0,0,45,46,1,0,0,0,46,48,1,0,0,0,
47,45,1,0,0,0,48,49,5,0,0,1,49,3,1,0,0,0,50,53,3,6,3,0,51,53,3,18,9,0,52,
50,1,0,0,0,52,51,1,0,0,0,53,5,1,0,0,0,54,55,3,8,4,0,55,56,5,21,0,0,56,7,
1,0,0,0,57,61,3,10,5,0,58,61,3,12,6,0,59,61,3,28,14,0,60,57,1,0,0,0,60,58,
1,0,0,0,60,59,1,0,0,0,61,9,1,0,0,0,62,63,5,22,0,0,63,64,5,1,0,0,64,65,3,
32,16,0,65,11,1,0,0,0,66,69,3,14,7,0,67,69,3,16,8,0,68,66,1,0,0,0,68,67,
1,0,0,0,69,13,1,0,0,0,70,71,5,2,0,0,71,15,1,0,0,0,72,73,5,3,0,0,73,17,1,
0,0,0,74,77,3,20,10,0,75,77,3,22,11,0,76,74,1,0,0,0,76,75,1,0,0,0,77,19,
1,0,0,0,78,79,5,4,0,0,79,80,3,26,13,0,80,81,5,5,0,0,81,89,3,24,12,0,82,83,
5,6,0,0,83,84,3,26,13,0,84,85,5,5,0,0,85,86,3,24,12,0,86,88,1,0,0,0,87,82,
1,0,0,0,88,91,1,0,0,0,89,87,1,0,0,0,89,90,1,0,0,0,90,95,1,0,0,0,91,89,1,
0,0,0,92,93,5,7,0,0,93,94,5,5,0,0,94,96,3,24,12,0,95,92,1,0,0,0,95,96,1,
0,0,0,96,21,1,0,0,0,97,98,5,8,0,0,98,99,3,26,13,0,99,100,5,5,0,0,100,101,
3,24,12,0,101,23,1,0,0,0,102,113,3,6,3,0,103,104,5,21,0,0,104,106,5,33,0,
0,105,107,3,4,2,0,106,105,1,0,0,0,107,108,1,0,0,0,108,106,1,0,0,0,108,109,
1,0,0,0,109,110,1,0,0,0,110,111,5,34,0,0,111,113,1,0,0,0,112,102,1,0,0,0,
112,103,1,0,0,0,113,25,1,0,0,0,114,120,3,32,16,0,115,116,3,30,15,0,116,117,
3,32,16,0,117,119,1,0,0,0,118,115,1,0,0,0,119,122,1,0,0,0,120,118,1,0,0,
0,120,121,1,0,0,0,121,27,1,0,0,0,122,120,1,0,0,0,123,124,5,9,0,0,124,127,
5,18,0,0,125,127,3,32,16,0,126,123,1,0,0,0,126,125,1,0,0,0,127,29,1,0,0,
0,128,129,7,0,0,0,129,31,1,0,0,0,130,131,6,16,-1,0,131,138,5,22,0,0,132,
138,5,19,0,0,133,134,5,25,0,0,134,135,3,32,16,0,135,136,5,26,0,0,136,138,
1,0,0,0,137,130,1,0,0,0,137,132,1,0,0,0,137,133,1,0,0,0,138,148,1,0,0,0,
139,142,10,4,0,0,140,141,7,1,0,0,141,143,3,32,16,0,142,140,1,0,0,0,143,144,
1,0,0,0,144,142,1,0,0,0,144,145,1,0,0,0,145,147,1,0,0,0,146,139,1,0,0,0,
147,150,1,0,0,0,148,146,1,0,0,0,148,149,1,0,0,0,149,33,1,0,0,0,150,148,1,
0,0,0,16,39,43,45,52,60,68,76,89,95,108,112,120,126,137,144,148];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class Python3Parser extends antlr4.Parser {

    static grammarFileName = "Python3.g4";
    static literalNames = [ null, "'='", "'break'", "'continue'", "'if'", 
                            "':'", "'elif'", "'else'", "'while'", "'print'", 
                            "'<'", "'>'", "'=='", "'>='", "'<='", "'!='", 
                            "'+'", "'-'", null, null, null, null, null, 
                            null, null, "'('", "')'", "'['", "']'", "'{'", 
                            "'}'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "STRING", "NUMBER", "INTEGER", 
                             "NEWLINE", "NAME", "STRING_LITERAL", "DECIMAL_INTEGER", 
                             "OPEN_PAREN", "CLOSE_PAREN", "OPEN_BRACK", 
                             "CLOSE_BRACK", "OPEN_BRACE", "CLOSE_BRACE", 
                             "SKIP_", "UNKNOWN_CHAR", "INDENT", "DEDENT" ];
    static ruleNames = [ "single_input", "file_input", "stmt", "simple_stmt", 
                         "small_stmt", "assignment_stmt", "flow_stmt", "break_stmt", 
                         "continue_stmt", "compound_stmt", "if_stmt", "while_stmt", 
                         "suite", "test", "print_stmt", "comp_op", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = Python3Parser.ruleNames;
        this.literalNames = Python3Parser.literalNames;
        this.symbolicNames = Python3Parser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 16:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	single_input() {
	    let localctx = new Single_inputContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, Python3Parser.RULE_single_input);
	    try {
	        this.state = 39;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 21:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 34;
	            this.match(Python3Parser.NEWLINE);
	            break;
	        case 2:
	        case 3:
	        case 9:
	        case 19:
	        case 22:
	        case 25:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 35;
	            this.simple_stmt();
	            break;
	        case 4:
	        case 8:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 36;
	            this.compound_stmt();
	            this.state = 37;
	            this.match(Python3Parser.NEWLINE);
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



	file_input() {
	    let localctx = new File_inputContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, Python3Parser.RULE_file_input);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 40370972) !== 0)) {
	            this.state = 43;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 21:
	                this.state = 41;
	                this.match(Python3Parser.NEWLINE);
	                break;
	            case 2:
	            case 3:
	            case 4:
	            case 8:
	            case 9:
	            case 19:
	            case 22:
	            case 25:
	                this.state = 42;
	                this.stmt();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 47;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 48;
	        this.match(Python3Parser.EOF);
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



	stmt() {
	    let localctx = new StmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, Python3Parser.RULE_stmt);
	    try {
	        this.state = 52;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 3:
	        case 9:
	        case 19:
	        case 22:
	        case 25:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 50;
	            this.simple_stmt();
	            break;
	        case 4:
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 51;
	            this.compound_stmt();
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



	simple_stmt() {
	    let localctx = new Simple_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, Python3Parser.RULE_simple_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.small_stmt();
	        this.state = 55;
	        this.match(Python3Parser.NEWLINE);
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



	small_stmt() {
	    let localctx = new Small_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, Python3Parser.RULE_small_stmt);
	    try {
	        this.state = 60;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 57;
	            this.assignment_stmt();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 58;
	            this.flow_stmt();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 59;
	            this.print_stmt();
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



	assignment_stmt() {
	    let localctx = new Assignment_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, Python3Parser.RULE_assignment_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(Python3Parser.NAME);
	        this.state = 63;
	        this.match(Python3Parser.T__0);
	        this.state = 64;
	        this.expr(0);
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



	flow_stmt() {
	    let localctx = new Flow_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, Python3Parser.RULE_flow_stmt);
	    try {
	        this.state = 68;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 66;
	            this.break_stmt();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 67;
	            this.continue_stmt();
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



	break_stmt() {
	    let localctx = new Break_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, Python3Parser.RULE_break_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this.match(Python3Parser.T__1);
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



	continue_stmt() {
	    let localctx = new Continue_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, Python3Parser.RULE_continue_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.match(Python3Parser.T__2);
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



	compound_stmt() {
	    let localctx = new Compound_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, Python3Parser.RULE_compound_stmt);
	    try {
	        this.state = 76;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 74;
	            this.if_stmt();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 75;
	            this.while_stmt();
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



	if_stmt() {
	    let localctx = new If_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, Python3Parser.RULE_if_stmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.match(Python3Parser.T__3);
	        this.state = 79;
	        this.test();
	        this.state = 80;
	        this.match(Python3Parser.T__4);
	        this.state = 81;
	        this.suite();
	        this.state = 89;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 82;
	            this.match(Python3Parser.T__5);
	            this.state = 83;
	            this.test();
	            this.state = 84;
	            this.match(Python3Parser.T__4);
	            this.state = 85;
	            this.suite();
	            this.state = 91;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 95;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 92;
	            this.match(Python3Parser.T__6);
	            this.state = 93;
	            this.match(Python3Parser.T__4);
	            this.state = 94;
	            this.suite();
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



	while_stmt() {
	    let localctx = new While_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, Python3Parser.RULE_while_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.match(Python3Parser.T__7);
	        this.state = 98;
	        this.test();
	        this.state = 99;
	        this.match(Python3Parser.T__4);
	        this.state = 100;
	        this.suite();
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



	suite() {
	    let localctx = new SuiteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, Python3Parser.RULE_suite);
	    var _la = 0;
	    try {
	        this.state = 112;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 3:
	        case 9:
	        case 19:
	        case 22:
	        case 25:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 102;
	            this.simple_stmt();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 103;
	            this.match(Python3Parser.NEWLINE);
	            this.state = 104;
	            this.match(Python3Parser.INDENT);
	            this.state = 106; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 105;
	                this.stmt();
	                this.state = 108; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 38273820) !== 0));
	            this.state = 110;
	            this.match(Python3Parser.DEDENT);
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



	test() {
	    let localctx = new TestContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, Python3Parser.RULE_test);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.expr(0);
	        this.state = 120;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 64512) !== 0)) {
	            this.state = 115;
	            this.comp_op();
	            this.state = 116;
	            this.expr(0);
	            this.state = 122;
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



	print_stmt() {
	    let localctx = new Print_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, Python3Parser.RULE_print_stmt);
	    try {
	        this.state = 126;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 123;
	            this.match(Python3Parser.T__8);
	            this.state = 124;
	            this.match(Python3Parser.STRING);
	            break;
	        case 19:
	        case 22:
	        case 25:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 125;
	            this.expr(0);
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



	comp_op() {
	    let localctx = new Comp_opContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, Python3Parser.RULE_comp_op);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 64512) !== 0))) {
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


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 32;
	    this.enterRecursionRule(localctx, 32, Python3Parser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 22:
	            this.state = 131;
	            this.match(Python3Parser.NAME);
	            break;
	        case 19:
	            this.state = 132;
	            this.match(Python3Parser.NUMBER);
	            break;
	        case 25:
	            this.state = 133;
	            this.match(Python3Parser.OPEN_PAREN);
	            this.state = 134;
	            this.expr(0);
	            this.state = 135;
	            this.match(Python3Parser.CLOSE_PAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 148;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ExprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, Python3Parser.RULE_expr);
	                this.state = 139;
	                if (!( this.precpred(this._ctx, 4))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                }
	                this.state = 142; 
	                this._errHandler.sync(this);
	                var _alt = 1;
	                do {
	                	switch (_alt) {
	                	case 1:
	                		this.state = 140;
	                		_la = this._input.LA(1);
	                		if(!(_la===16 || _la===17)) {
	                		this._errHandler.recoverInline(this);
	                		}
	                		else {
	                			this._errHandler.reportMatch(this);
	                		    this.consume();
	                		}
	                		this.state = 141;
	                		this.expr(0);
	                		break;
	                	default:
	                		throw new antlr4.error.NoViableAltException(this);
	                	}
	                	this.state = 144; 
	                	this._errHandler.sync(this);
	                	_alt = this._interp.adaptivePredict(this._input,14, this._ctx);
	                } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER ); 
	            }
	            this.state = 150;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

Python3Parser.EOF = antlr4.Token.EOF;
Python3Parser.T__0 = 1;
Python3Parser.T__1 = 2;
Python3Parser.T__2 = 3;
Python3Parser.T__3 = 4;
Python3Parser.T__4 = 5;
Python3Parser.T__5 = 6;
Python3Parser.T__6 = 7;
Python3Parser.T__7 = 8;
Python3Parser.T__8 = 9;
Python3Parser.T__9 = 10;
Python3Parser.T__10 = 11;
Python3Parser.T__11 = 12;
Python3Parser.T__12 = 13;
Python3Parser.T__13 = 14;
Python3Parser.T__14 = 15;
Python3Parser.T__15 = 16;
Python3Parser.T__16 = 17;
Python3Parser.STRING = 18;
Python3Parser.NUMBER = 19;
Python3Parser.INTEGER = 20;
Python3Parser.NEWLINE = 21;
Python3Parser.NAME = 22;
Python3Parser.STRING_LITERAL = 23;
Python3Parser.DECIMAL_INTEGER = 24;
Python3Parser.OPEN_PAREN = 25;
Python3Parser.CLOSE_PAREN = 26;
Python3Parser.OPEN_BRACK = 27;
Python3Parser.CLOSE_BRACK = 28;
Python3Parser.OPEN_BRACE = 29;
Python3Parser.CLOSE_BRACE = 30;
Python3Parser.SKIP_ = 31;
Python3Parser.UNKNOWN_CHAR = 32;
Python3Parser.INDENT = 33;
Python3Parser.DEDENT = 34;

Python3Parser.RULE_single_input = 0;
Python3Parser.RULE_file_input = 1;
Python3Parser.RULE_stmt = 2;
Python3Parser.RULE_simple_stmt = 3;
Python3Parser.RULE_small_stmt = 4;
Python3Parser.RULE_assignment_stmt = 5;
Python3Parser.RULE_flow_stmt = 6;
Python3Parser.RULE_break_stmt = 7;
Python3Parser.RULE_continue_stmt = 8;
Python3Parser.RULE_compound_stmt = 9;
Python3Parser.RULE_if_stmt = 10;
Python3Parser.RULE_while_stmt = 11;
Python3Parser.RULE_suite = 12;
Python3Parser.RULE_test = 13;
Python3Parser.RULE_print_stmt = 14;
Python3Parser.RULE_comp_op = 15;
Python3Parser.RULE_expr = 16;

class Single_inputContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Python3Parser.RULE_single_input;
    }

	NEWLINE() {
	    return this.getToken(Python3Parser.NEWLINE, 0);
	};

	simple_stmt() {
	    return this.getTypedRuleContext(Simple_stmtContext,0);
	};

	compound_stmt() {
	    return this.getTypedRuleContext(Compound_stmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Python3Listener ) {
	        listener.enterSingle_input(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Python3Listener ) {
	        listener.exitSingle_input(this);
		}
	}


}



class File_inputContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Python3Parser.RULE_file_input;
    }

	EOF() {
	    return this.getToken(Python3Parser.EOF, 0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Python3Parser.NEWLINE);
	    } else {
	        return this.getToken(Python3Parser.NEWLINE, i);
	    }
	};


	stmt = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StmtContext);
	    } else {
	        return this.getTypedRuleContext(StmtContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Python3Listener ) {
	        listener.enterFile_input(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Python3Listener ) {
	        listener.exitFile_input(this);
		}
	}


}



class StmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Python3Parser.RULE_stmt;
    }

	simple_stmt() {
	    return this.getTypedRuleContext(Simple_stmtContext,0);
	};

	compound_stmt() {
	    return this.getTypedRuleContext(Compound_stmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Python3Listener ) {
	        listener.enterStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Python3Listener ) {
	        listener.exitStmt(this);
		}
	}


}



class Simple_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Python3Parser.RULE_simple_stmt;
    }

	small_stmt() {
	    return this.getTypedRuleContext(Small_stmtContext,0);
	};

	NEWLINE() {
	    return this.getToken(Python3Parser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Python3Listener ) {
	        listener.enterSimple_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Python3Listener ) {
	        listener.exitSimple_stmt(this);
		}
	}


}



class Small_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Python3Parser.RULE_small_stmt;
    }

	assignment_stmt() {
	    return this.getTypedRuleContext(Assignment_stmtContext,0);
	};

	flow_stmt() {
	    return this.getTypedRuleContext(Flow_stmtContext,0);
	};

	print_stmt() {
	    return this.getTypedRuleContext(Print_stmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Python3Listener ) {
	        listener.enterSmall_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Python3Listener ) {
	        listener.exitSmall_stmt(this);
		}
	}


}



class Assignment_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Python3Parser.RULE_assignment_stmt;
    }

	NAME() {
	    return this.getToken(Python3Parser.NAME, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Python3Listener ) {
	        listener.enterAssignment_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Python3Listener ) {
	        listener.exitAssignment_stmt(this);
		}
	}


}



class Flow_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Python3Parser.RULE_flow_stmt;
    }

	break_stmt() {
	    return this.getTypedRuleContext(Break_stmtContext,0);
	};

	continue_stmt() {
	    return this.getTypedRuleContext(Continue_stmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Python3Listener ) {
	        listener.enterFlow_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Python3Listener ) {
	        listener.exitFlow_stmt(this);
		}
	}


}



class Break_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Python3Parser.RULE_break_stmt;
    }


	enterRule(listener) {
	    if(listener instanceof Python3Listener ) {
	        listener.enterBreak_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Python3Listener ) {
	        listener.exitBreak_stmt(this);
		}
	}


}



class Continue_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Python3Parser.RULE_continue_stmt;
    }


	enterRule(listener) {
	    if(listener instanceof Python3Listener ) {
	        listener.enterContinue_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Python3Listener ) {
	        listener.exitContinue_stmt(this);
		}
	}


}



class Compound_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Python3Parser.RULE_compound_stmt;
    }

	if_stmt() {
	    return this.getTypedRuleContext(If_stmtContext,0);
	};

	while_stmt() {
	    return this.getTypedRuleContext(While_stmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Python3Listener ) {
	        listener.enterCompound_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Python3Listener ) {
	        listener.exitCompound_stmt(this);
		}
	}


}



class If_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Python3Parser.RULE_if_stmt;
    }

	test = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TestContext);
	    } else {
	        return this.getTypedRuleContext(TestContext,i);
	    }
	};

	suite = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SuiteContext);
	    } else {
	        return this.getTypedRuleContext(SuiteContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Python3Listener ) {
	        listener.enterIf_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Python3Listener ) {
	        listener.exitIf_stmt(this);
		}
	}


}



class While_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Python3Parser.RULE_while_stmt;
    }

	test() {
	    return this.getTypedRuleContext(TestContext,0);
	};

	suite() {
	    return this.getTypedRuleContext(SuiteContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Python3Listener ) {
	        listener.enterWhile_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Python3Listener ) {
	        listener.exitWhile_stmt(this);
		}
	}


}



class SuiteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Python3Parser.RULE_suite;
    }

	simple_stmt() {
	    return this.getTypedRuleContext(Simple_stmtContext,0);
	};

	NEWLINE() {
	    return this.getToken(Python3Parser.NEWLINE, 0);
	};

	INDENT() {
	    return this.getToken(Python3Parser.INDENT, 0);
	};

	DEDENT() {
	    return this.getToken(Python3Parser.DEDENT, 0);
	};

	stmt = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StmtContext);
	    } else {
	        return this.getTypedRuleContext(StmtContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Python3Listener ) {
	        listener.enterSuite(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Python3Listener ) {
	        listener.exitSuite(this);
		}
	}


}



class TestContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Python3Parser.RULE_test;
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	comp_op = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Comp_opContext);
	    } else {
	        return this.getTypedRuleContext(Comp_opContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Python3Listener ) {
	        listener.enterTest(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Python3Listener ) {
	        listener.exitTest(this);
		}
	}


}



class Print_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Python3Parser.RULE_print_stmt;
    }

	STRING() {
	    return this.getToken(Python3Parser.STRING, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Python3Listener ) {
	        listener.enterPrint_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Python3Listener ) {
	        listener.exitPrint_stmt(this);
		}
	}


}



class Comp_opContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Python3Parser.RULE_comp_op;
    }


	enterRule(listener) {
	    if(listener instanceof Python3Listener ) {
	        listener.enterComp_op(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Python3Listener ) {
	        listener.exitComp_op(this);
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
        this.ruleIndex = Python3Parser.RULE_expr;
    }

	NAME() {
	    return this.getToken(Python3Parser.NAME, 0);
	};

	NUMBER() {
	    return this.getToken(Python3Parser.NUMBER, 0);
	};

	OPEN_PAREN() {
	    return this.getToken(Python3Parser.OPEN_PAREN, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	CLOSE_PAREN() {
	    return this.getToken(Python3Parser.CLOSE_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Python3Listener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Python3Listener ) {
	        listener.exitExpr(this);
		}
	}


}




Python3Parser.Single_inputContext = Single_inputContext; 
Python3Parser.File_inputContext = File_inputContext; 
Python3Parser.StmtContext = StmtContext; 
Python3Parser.Simple_stmtContext = Simple_stmtContext; 
Python3Parser.Small_stmtContext = Small_stmtContext; 
Python3Parser.Assignment_stmtContext = Assignment_stmtContext; 
Python3Parser.Flow_stmtContext = Flow_stmtContext; 
Python3Parser.Break_stmtContext = Break_stmtContext; 
Python3Parser.Continue_stmtContext = Continue_stmtContext; 
Python3Parser.Compound_stmtContext = Compound_stmtContext; 
Python3Parser.If_stmtContext = If_stmtContext; 
Python3Parser.While_stmtContext = While_stmtContext; 
Python3Parser.SuiteContext = SuiteContext; 
Python3Parser.TestContext = TestContext; 
Python3Parser.Print_stmtContext = Print_stmtContext; 
Python3Parser.Comp_opContext = Comp_opContext; 
Python3Parser.ExprContext = ExprContext; 
