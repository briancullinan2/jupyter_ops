// Generated from Resources/Parsers/mumath/mumath.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import mumathListener from './mumathListener.js';
const serializedATN = [4,1,38,202,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,1,0,1,0,1,0,
3,0,42,8,0,1,0,1,0,5,0,46,8,0,10,0,12,0,49,9,0,1,0,1,0,1,1,1,1,4,1,55,8,
1,11,1,12,1,56,1,1,1,1,1,2,1,2,1,2,1,2,1,2,5,2,66,8,2,10,2,12,2,69,9,2,1,
2,3,2,72,8,2,1,3,1,3,1,3,1,3,1,3,1,3,3,3,80,8,3,1,3,1,3,1,4,1,4,3,4,86,8,
4,1,5,1,5,1,5,1,5,1,5,1,5,3,5,94,8,5,1,5,1,5,5,5,98,8,5,10,5,12,5,101,9,
5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,3,7,111,8,7,1,7,1,7,1,8,1,8,1,8,3,8,118,
8,8,1,8,1,8,1,8,1,8,3,8,124,8,8,1,8,1,8,1,9,1,9,1,9,1,9,5,9,132,8,9,10,9,
12,9,135,9,9,1,10,1,10,3,10,139,8,10,1,11,3,11,142,8,11,1,11,1,11,1,11,1,
11,5,11,148,8,11,10,11,12,11,151,9,11,1,12,1,12,1,13,1,13,1,13,1,13,5,13,
159,8,13,10,13,12,13,162,9,13,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,1,
15,1,15,1,15,3,15,175,8,15,1,16,1,16,1,16,1,16,1,16,1,16,3,16,183,8,16,1,
17,1,17,1,17,1,17,1,17,5,17,190,8,17,10,17,12,17,193,9,17,1,17,3,17,196,
8,17,1,17,1,17,1,18,1,18,1,18,0,0,19,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
28,30,32,34,36,0,5,1,0,23,24,2,0,16,16,27,31,2,0,10,10,18,19,4,0,11,11,13,
13,20,21,34,34,2,0,5,5,26,26,213,0,47,1,0,0,0,2,54,1,0,0,0,4,60,1,0,0,0,
6,73,1,0,0,0,8,85,1,0,0,0,10,93,1,0,0,0,12,102,1,0,0,0,14,107,1,0,0,0,16,
114,1,0,0,0,18,127,1,0,0,0,20,138,1,0,0,0,22,141,1,0,0,0,24,152,1,0,0,0,
26,154,1,0,0,0,28,163,1,0,0,0,30,174,1,0,0,0,32,182,1,0,0,0,34,184,1,0,0,
0,36,199,1,0,0,0,38,42,3,6,3,0,39,42,3,2,1,0,40,42,3,34,17,0,41,38,1,0,0,
0,41,39,1,0,0,0,41,40,1,0,0,0,42,43,1,0,0,0,43,44,7,0,0,0,44,46,1,0,0,0,
45,41,1,0,0,0,46,49,1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,50,1,0,0,0,49,
47,1,0,0,0,50,51,5,0,0,1,51,1,1,0,0,0,52,53,5,35,0,0,53,55,5,25,0,0,54,52,
1,0,0,0,55,56,1,0,0,0,56,54,1,0,0,0,56,57,1,0,0,0,57,58,1,0,0,0,58,59,3,
18,9,0,59,3,1,0,0,0,60,71,5,32,0,0,61,72,5,33,0,0,62,67,5,35,0,0,63,64,5,
22,0,0,64,66,5,35,0,0,65,63,1,0,0,0,66,69,1,0,0,0,67,65,1,0,0,0,67,68,1,
0,0,0,68,70,1,0,0,0,69,67,1,0,0,0,70,72,5,33,0,0,71,61,1,0,0,0,71,62,1,0,
0,0,72,5,1,0,0,0,73,74,5,3,0,0,74,75,5,35,0,0,75,76,3,4,2,0,76,77,5,22,0,
0,77,79,3,10,5,0,78,80,5,22,0,0,79,78,1,0,0,0,79,80,1,0,0,0,80,81,1,0,0,
0,81,82,5,4,0,0,82,7,1,0,0,0,83,86,3,18,9,0,84,86,3,2,1,0,85,83,1,0,0,0,
85,84,1,0,0,0,86,9,1,0,0,0,87,94,3,14,7,0,88,94,3,16,8,0,89,94,3,12,6,0,
90,94,3,2,1,0,91,94,3,18,9,0,92,94,3,34,17,0,93,87,1,0,0,0,93,88,1,0,0,0,
93,89,1,0,0,0,93,90,1,0,0,0,93,91,1,0,0,0,93,92,1,0,0,0,94,99,1,0,0,0,95,
96,5,22,0,0,96,98,3,10,5,0,97,95,1,0,0,0,98,101,1,0,0,0,99,97,1,0,0,0,99,
100,1,0,0,0,100,11,1,0,0,0,101,99,1,0,0,0,102,103,5,1,0,0,103,104,3,10,5,
0,104,105,5,22,0,0,105,106,5,2,0,0,106,13,1,0,0,0,107,108,5,6,0,0,108,110,
3,10,5,0,109,111,5,22,0,0,110,109,1,0,0,0,110,111,1,0,0,0,111,112,1,0,0,
0,112,113,5,7,0,0,113,15,1,0,0,0,114,115,5,8,0,0,115,117,3,18,9,0,116,118,
5,22,0,0,117,116,1,0,0,0,117,118,1,0,0,0,118,119,1,0,0,0,119,120,5,9,0,0,
120,121,5,22,0,0,121,123,3,10,5,0,122,124,5,22,0,0,123,122,1,0,0,0,123,124,
1,0,0,0,124,125,1,0,0,0,125,126,5,9,0,0,126,17,1,0,0,0,127,133,3,22,11,0,
128,129,3,20,10,0,129,130,3,22,11,0,130,132,1,0,0,0,131,128,1,0,0,0,132,
135,1,0,0,0,133,131,1,0,0,0,133,134,1,0,0,0,134,19,1,0,0,0,135,133,1,0,0,
0,136,139,3,36,18,0,137,139,7,1,0,0,138,136,1,0,0,0,138,137,1,0,0,0,139,
21,1,0,0,0,140,142,5,19,0,0,141,140,1,0,0,0,141,142,1,0,0,0,142,143,1,0,
0,0,143,149,3,26,13,0,144,145,3,24,12,0,145,146,3,26,13,0,146,148,1,0,0,
0,147,144,1,0,0,0,148,151,1,0,0,0,149,147,1,0,0,0,149,150,1,0,0,0,150,23,
1,0,0,0,151,149,1,0,0,0,152,153,7,2,0,0,153,25,1,0,0,0,154,160,3,30,15,0,
155,156,3,28,14,0,156,157,3,30,15,0,157,159,1,0,0,0,158,155,1,0,0,0,159,
162,1,0,0,0,160,158,1,0,0,0,160,161,1,0,0,0,161,27,1,0,0,0,162,160,1,0,0,
0,163,164,7,3,0,0,164,29,1,0,0,0,165,175,5,35,0,0,166,175,3,32,16,0,167,
168,5,32,0,0,168,169,3,18,9,0,169,170,5,33,0,0,170,175,1,0,0,0,171,175,3,
34,17,0,172,173,5,12,0,0,173,175,3,30,15,0,174,165,1,0,0,0,174,166,1,0,0,
0,174,167,1,0,0,0,174,171,1,0,0,0,174,172,1,0,0,0,175,31,1,0,0,0,176,183,
5,38,0,0,177,183,5,37,0,0,178,179,5,17,0,0,179,183,5,35,0,0,180,181,5,17,
0,0,181,183,5,37,0,0,182,176,1,0,0,0,182,177,1,0,0,0,182,178,1,0,0,0,182,
180,1,0,0,0,183,33,1,0,0,0,184,185,5,35,0,0,185,195,5,32,0,0,186,191,3,8,
4,0,187,188,5,22,0,0,188,190,3,8,4,0,189,187,1,0,0,0,190,193,1,0,0,0,191,
189,1,0,0,0,191,192,1,0,0,0,192,196,1,0,0,0,193,191,1,0,0,0,194,196,1,0,
0,0,195,186,1,0,0,0,195,194,1,0,0,0,196,197,1,0,0,0,197,198,5,33,0,0,198,
35,1,0,0,0,199,200,7,4,0,0,200,37,1,0,0,0,21,41,47,56,67,71,79,85,93,99,
110,117,123,133,138,141,149,160,174,182,191,195];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class mumathParser extends antlr4.Parser {

    static grammarFileName = "mumath.g4";
    static literalNames = [ null, "'BLOCK'", "'ENDBLOCK'", "'FUNCTION'", 
                            "'ENDFUN'", "'EQ'", "'LOOP'", "'ENDLOOP'", "'WHEN'", 
                            "'EXIT'", "'OR'", "'AND'", "'NOT'", "'mod'", 
                            null, null, "'=='", "'''", "'+'", "'-'", "'*'", 
                            "'/'", "','", "';'", "'$'", "':'", "'='", "'<>'", 
                            "'<'", "'<='", "'>='", "'>'", "'('", "')'", 
                            "'^'" ];
    static symbolicNames = [ null, "BLOCK", "ENDBLOCK", "FUNCTION", "ENDFUN", 
                             "EQF", "LOOP", "ENDLOOP", "WHEN", "EXIT", "OR", 
                             "AND", "NOT", "MOD", "WS", "COMMENT", "EQUATION", 
                             "QUOTE", "PLUS", "MINUS", "STAR", "SLASH", 
                             "COMMA", "SEMI", "DOLLAR", "COLON", "EQC", 
                             "NOT_EQUAL", "LT", "LE", "GE", "GT", "LPAREN", 
                             "RPAREN", "POWER", "ID", "ARR", "STRING", "NUMBER" ];
    static ruleNames = [ "program", "assignment", "list_", "functionDefinition", 
                         "actualParameter", "statments", "block", "loop", 
                         "when", "expression", "relationalOperator", "simpleExpression", 
                         "addingOperator", "term", "multiplyingOperator", 
                         "factor", "constant", "functionDesignator", "equal" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = mumathParser.ruleNames;
        this.literalNames = mumathParser.literalNames;
        this.symbolicNames = mumathParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, mumathParser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mumathParser.FUNCTION || _la===mumathParser.ID) {
	            this.state = 41;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 38;
	                this.functionDefinition();
	                break;

	            case 2:
	                this.state = 39;
	                this.assignment();
	                break;

	            case 3:
	                this.state = 40;
	                this.functionDesignator();
	                break;

	            }
	            this.state = 43;
	            _la = this._input.LA(1);
	            if(!(_la===mumathParser.SEMI || _la===mumathParser.DOLLAR)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 49;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 50;
	        this.match(mumathParser.EOF);
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



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, mumathParser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 52;
	        		this.match(mumathParser.ID);
	        		this.state = 53;
	        		this.match(mumathParser.COLON);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 56; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 58;
	        this.expression();
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



	list_() {
	    let localctx = new List_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, mumathParser.RULE_list_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.match(mumathParser.LPAREN);
	        this.state = 71;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mumathParser.RPAREN:
	            this.state = 61;
	            this.match(mumathParser.RPAREN);
	            break;
	        case mumathParser.ID:
	            this.state = 62;
	            this.match(mumathParser.ID);
	            this.state = 67;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===mumathParser.COMMA) {
	                this.state = 63;
	                this.match(mumathParser.COMMA);
	                this.state = 64;
	                this.match(mumathParser.ID);
	                this.state = 69;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 70;
	            this.match(mumathParser.RPAREN);
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



	functionDefinition() {
	    let localctx = new FunctionDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, mumathParser.RULE_functionDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(mumathParser.FUNCTION);
	        this.state = 74;
	        this.match(mumathParser.ID);
	        this.state = 75;
	        this.list_();
	        this.state = 76;
	        this.match(mumathParser.COMMA);
	        this.state = 77;
	        this.statments();
	        this.state = 79;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===mumathParser.COMMA) {
	            this.state = 78;
	            this.match(mumathParser.COMMA);
	        }

	        this.state = 81;
	        this.match(mumathParser.ENDFUN);
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



	actualParameter() {
	    let localctx = new ActualParameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, mumathParser.RULE_actualParameter);
	    try {
	        this.state = 85;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 83;
	            this.expression();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 84;
	            this.assignment();
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



	statments() {
	    let localctx = new StatmentsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, mumathParser.RULE_statments);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 87;
	            this.loop();
	            break;

	        case 2:
	            this.state = 88;
	            this.when();
	            break;

	        case 3:
	            this.state = 89;
	            this.block();
	            break;

	        case 4:
	            this.state = 90;
	            this.assignment();
	            break;

	        case 5:
	            this.state = 91;
	            this.expression();
	            break;

	        case 6:
	            this.state = 92;
	            this.functionDesignator();
	            break;

	        }
	        this.state = 99;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 95;
	                this.match(mumathParser.COMMA);
	                this.state = 96;
	                this.statments(); 
	            }
	            this.state = 101;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
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



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, mumathParser.RULE_block);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.match(mumathParser.BLOCK);
	        this.state = 103;
	        this.statments();
	        this.state = 104;
	        this.match(mumathParser.COMMA);
	        this.state = 105;
	        this.match(mumathParser.ENDBLOCK);
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



	loop() {
	    let localctx = new LoopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, mumathParser.RULE_loop);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this.match(mumathParser.LOOP);
	        this.state = 108;
	        this.statments();
	        this.state = 110;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===mumathParser.COMMA) {
	            this.state = 109;
	            this.match(mumathParser.COMMA);
	        }

	        this.state = 112;
	        this.match(mumathParser.ENDLOOP);
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



	when() {
	    let localctx = new WhenContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, mumathParser.RULE_when);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.match(mumathParser.WHEN);
	        this.state = 115;
	        this.expression();

	        this.state = 117;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===mumathParser.COMMA) {
	            this.state = 116;
	            this.match(mumathParser.COMMA);
	        }

	        this.state = 119;
	        this.match(mumathParser.EXIT);
	        this.state = 120;
	        this.match(mumathParser.COMMA);
	        this.state = 121;
	        this.statments();
	        this.state = 123;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===mumathParser.COMMA) {
	            this.state = 122;
	            this.match(mumathParser.COMMA);
	        }

	        this.state = 125;
	        this.match(mumathParser.EXIT);
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



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, mumathParser.RULE_expression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        this.simpleExpression();
	        this.state = 133;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << mumathParser.EQF) | (1 << mumathParser.EQUATION) | (1 << mumathParser.EQC) | (1 << mumathParser.NOT_EQUAL) | (1 << mumathParser.LT) | (1 << mumathParser.LE) | (1 << mumathParser.GE) | (1 << mumathParser.GT))) !== 0)) {
	            this.state = 128;
	            this.relationalOperator();
	            this.state = 129;
	            this.simpleExpression();
	            this.state = 135;
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



	relationalOperator() {
	    let localctx = new RelationalOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, mumathParser.RULE_relationalOperator);
	    var _la = 0; // Token type
	    try {
	        this.state = 138;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mumathParser.EQF:
	        case mumathParser.EQC:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 136;
	            this.equal();
	            break;
	        case mumathParser.EQUATION:
	        case mumathParser.NOT_EQUAL:
	        case mumathParser.LT:
	        case mumathParser.LE:
	        case mumathParser.GE:
	        case mumathParser.GT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 137;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << mumathParser.EQUATION) | (1 << mumathParser.NOT_EQUAL) | (1 << mumathParser.LT) | (1 << mumathParser.LE) | (1 << mumathParser.GE) | (1 << mumathParser.GT))) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
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



	simpleExpression() {
	    let localctx = new SimpleExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, mumathParser.RULE_simpleExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===mumathParser.MINUS) {
	            this.state = 140;
	            this.match(mumathParser.MINUS);
	        }

	        this.state = 143;
	        this.term();
	        this.state = 149;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << mumathParser.OR) | (1 << mumathParser.PLUS) | (1 << mumathParser.MINUS))) !== 0)) {
	            this.state = 144;
	            this.addingOperator();
	            this.state = 145;
	            this.term();
	            this.state = 151;
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



	addingOperator() {
	    let localctx = new AddingOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, mumathParser.RULE_addingOperator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << mumathParser.OR) | (1 << mumathParser.PLUS) | (1 << mumathParser.MINUS))) !== 0))) {
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



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, mumathParser.RULE_term);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this.factor();
	        this.state = 160;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 11)) & ~0x1f) == 0 && ((1 << (_la - 11)) & ((1 << (mumathParser.AND - 11)) | (1 << (mumathParser.MOD - 11)) | (1 << (mumathParser.STAR - 11)) | (1 << (mumathParser.SLASH - 11)) | (1 << (mumathParser.POWER - 11)))) !== 0)) {
	            this.state = 155;
	            this.multiplyingOperator();
	            this.state = 156;
	            this.factor();
	            this.state = 162;
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



	multiplyingOperator() {
	    let localctx = new MultiplyingOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, mumathParser.RULE_multiplyingOperator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 163;
	        _la = this._input.LA(1);
	        if(!(((((_la - 11)) & ~0x1f) == 0 && ((1 << (_la - 11)) & ((1 << (mumathParser.AND - 11)) | (1 << (mumathParser.MOD - 11)) | (1 << (mumathParser.STAR - 11)) | (1 << (mumathParser.SLASH - 11)) | (1 << (mumathParser.POWER - 11)))) !== 0))) {
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



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, mumathParser.RULE_factor);
	    try {
	        this.state = 174;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 165;
	            this.match(mumathParser.ID);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 166;
	            this.constant();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 167;
	            this.match(mumathParser.LPAREN);
	            this.state = 168;
	            this.expression();
	            this.state = 169;
	            this.match(mumathParser.RPAREN);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 171;
	            this.functionDesignator();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 172;
	            this.match(mumathParser.NOT);
	            this.state = 173;
	            this.factor();
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



	constant() {
	    let localctx = new ConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, mumathParser.RULE_constant);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 182;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 176;
	            this.match(mumathParser.NUMBER);
	            break;

	        case 2:
	            this.state = 177;
	            this.match(mumathParser.STRING);
	            break;

	        case 3:
	            this.state = 178;
	            this.match(mumathParser.QUOTE);
	            this.state = 179;
	            this.match(mumathParser.ID);
	            break;

	        case 4:
	            this.state = 180;
	            this.match(mumathParser.QUOTE);
	            this.state = 181;
	            this.match(mumathParser.STRING);
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



	functionDesignator() {
	    let localctx = new FunctionDesignatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, mumathParser.RULE_functionDesignator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        this.match(mumathParser.ID);
	        this.state = 185;
	        this.match(mumathParser.LPAREN);
	        this.state = 195;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mumathParser.NOT:
	        case mumathParser.QUOTE:
	        case mumathParser.MINUS:
	        case mumathParser.LPAREN:
	        case mumathParser.ID:
	        case mumathParser.STRING:
	        case mumathParser.NUMBER:
	            this.state = 186;
	            this.actualParameter();
	            this.state = 191;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===mumathParser.COMMA) {
	                this.state = 187;
	                this.match(mumathParser.COMMA);
	                this.state = 188;
	                this.actualParameter();
	                this.state = 193;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case mumathParser.RPAREN:
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 197;
	        this.match(mumathParser.RPAREN);
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



	equal() {
	    let localctx = new EqualContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, mumathParser.RULE_equal);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199;
	        _la = this._input.LA(1);
	        if(!(_la===mumathParser.EQF || _la===mumathParser.EQC)) {
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

mumathParser.EOF = antlr4.Token.EOF;
mumathParser.BLOCK = 1;
mumathParser.ENDBLOCK = 2;
mumathParser.FUNCTION = 3;
mumathParser.ENDFUN = 4;
mumathParser.EQF = 5;
mumathParser.LOOP = 6;
mumathParser.ENDLOOP = 7;
mumathParser.WHEN = 8;
mumathParser.EXIT = 9;
mumathParser.OR = 10;
mumathParser.AND = 11;
mumathParser.NOT = 12;
mumathParser.MOD = 13;
mumathParser.WS = 14;
mumathParser.COMMENT = 15;
mumathParser.EQUATION = 16;
mumathParser.QUOTE = 17;
mumathParser.PLUS = 18;
mumathParser.MINUS = 19;
mumathParser.STAR = 20;
mumathParser.SLASH = 21;
mumathParser.COMMA = 22;
mumathParser.SEMI = 23;
mumathParser.DOLLAR = 24;
mumathParser.COLON = 25;
mumathParser.EQC = 26;
mumathParser.NOT_EQUAL = 27;
mumathParser.LT = 28;
mumathParser.LE = 29;
mumathParser.GE = 30;
mumathParser.GT = 31;
mumathParser.LPAREN = 32;
mumathParser.RPAREN = 33;
mumathParser.POWER = 34;
mumathParser.ID = 35;
mumathParser.ARR = 36;
mumathParser.STRING = 37;
mumathParser.NUMBER = 38;

mumathParser.RULE_program = 0;
mumathParser.RULE_assignment = 1;
mumathParser.RULE_list_ = 2;
mumathParser.RULE_functionDefinition = 3;
mumathParser.RULE_actualParameter = 4;
mumathParser.RULE_statments = 5;
mumathParser.RULE_block = 6;
mumathParser.RULE_loop = 7;
mumathParser.RULE_when = 8;
mumathParser.RULE_expression = 9;
mumathParser.RULE_relationalOperator = 10;
mumathParser.RULE_simpleExpression = 11;
mumathParser.RULE_addingOperator = 12;
mumathParser.RULE_term = 13;
mumathParser.RULE_multiplyingOperator = 14;
mumathParser.RULE_factor = 15;
mumathParser.RULE_constant = 16;
mumathParser.RULE_functionDesignator = 17;
mumathParser.RULE_equal = 18;

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
        this.ruleIndex = mumathParser.RULE_program;
    }

	EOF() {
	    return this.getToken(mumathParser.EOF, 0);
	};

	SEMI = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mumathParser.SEMI);
	    } else {
	        return this.getToken(mumathParser.SEMI, i);
	    }
	};


	DOLLAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mumathParser.DOLLAR);
	    } else {
	        return this.getToken(mumathParser.DOLLAR, i);
	    }
	};


	functionDefinition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FunctionDefinitionContext);
	    } else {
	        return this.getTypedRuleContext(FunctionDefinitionContext,i);
	    }
	};

	assignment = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AssignmentContext);
	    } else {
	        return this.getTypedRuleContext(AssignmentContext,i);
	    }
	};

	functionDesignator = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FunctionDesignatorContext);
	    } else {
	        return this.getTypedRuleContext(FunctionDesignatorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.exitProgram(this);
		}
	}


}



class AssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mumathParser.RULE_assignment;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mumathParser.ID);
	    } else {
	        return this.getToken(mumathParser.ID, i);
	    }
	};


	COLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mumathParser.COLON);
	    } else {
	        return this.getToken(mumathParser.COLON, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.exitAssignment(this);
		}
	}


}



class List_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mumathParser.RULE_list_;
    }

	LPAREN() {
	    return this.getToken(mumathParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(mumathParser.RPAREN, 0);
	};

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mumathParser.ID);
	    } else {
	        return this.getToken(mumathParser.ID, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mumathParser.COMMA);
	    } else {
	        return this.getToken(mumathParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.enterList_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.exitList_(this);
		}
	}


}



class FunctionDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mumathParser.RULE_functionDefinition;
    }

	FUNCTION() {
	    return this.getToken(mumathParser.FUNCTION, 0);
	};

	ID() {
	    return this.getToken(mumathParser.ID, 0);
	};

	list_() {
	    return this.getTypedRuleContext(List_Context,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mumathParser.COMMA);
	    } else {
	        return this.getToken(mumathParser.COMMA, i);
	    }
	};


	statments() {
	    return this.getTypedRuleContext(StatmentsContext,0);
	};

	ENDFUN() {
	    return this.getToken(mumathParser.ENDFUN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.enterFunctionDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.exitFunctionDefinition(this);
		}
	}


}



class ActualParameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mumathParser.RULE_actualParameter;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.enterActualParameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.exitActualParameter(this);
		}
	}


}



class StatmentsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mumathParser.RULE_statments;
    }

	loop() {
	    return this.getTypedRuleContext(LoopContext,0);
	};

	when() {
	    return this.getTypedRuleContext(WhenContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	functionDesignator() {
	    return this.getTypedRuleContext(FunctionDesignatorContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mumathParser.COMMA);
	    } else {
	        return this.getToken(mumathParser.COMMA, i);
	    }
	};


	statments = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatmentsContext);
	    } else {
	        return this.getTypedRuleContext(StatmentsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.enterStatments(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.exitStatments(this);
		}
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mumathParser.RULE_block;
    }

	BLOCK() {
	    return this.getToken(mumathParser.BLOCK, 0);
	};

	statments() {
	    return this.getTypedRuleContext(StatmentsContext,0);
	};

	COMMA() {
	    return this.getToken(mumathParser.COMMA, 0);
	};

	ENDBLOCK() {
	    return this.getToken(mumathParser.ENDBLOCK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.exitBlock(this);
		}
	}


}



class LoopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mumathParser.RULE_loop;
    }

	LOOP() {
	    return this.getToken(mumathParser.LOOP, 0);
	};

	statments() {
	    return this.getTypedRuleContext(StatmentsContext,0);
	};

	ENDLOOP() {
	    return this.getToken(mumathParser.ENDLOOP, 0);
	};

	COMMA() {
	    return this.getToken(mumathParser.COMMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.enterLoop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.exitLoop(this);
		}
	}


}



class WhenContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mumathParser.RULE_when;
    }

	WHEN() {
	    return this.getToken(mumathParser.WHEN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	EXIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mumathParser.EXIT);
	    } else {
	        return this.getToken(mumathParser.EXIT, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mumathParser.COMMA);
	    } else {
	        return this.getToken(mumathParser.COMMA, i);
	    }
	};


	statments() {
	    return this.getTypedRuleContext(StatmentsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.enterWhen(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.exitWhen(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mumathParser.RULE_expression;
    }

	simpleExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SimpleExpressionContext);
	    } else {
	        return this.getTypedRuleContext(SimpleExpressionContext,i);
	    }
	};

	relationalOperator = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RelationalOperatorContext);
	    } else {
	        return this.getTypedRuleContext(RelationalOperatorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.exitExpression(this);
		}
	}


}



class RelationalOperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mumathParser.RULE_relationalOperator;
    }

	equal() {
	    return this.getTypedRuleContext(EqualContext,0);
	};

	NOT_EQUAL() {
	    return this.getToken(mumathParser.NOT_EQUAL, 0);
	};

	LT() {
	    return this.getToken(mumathParser.LT, 0);
	};

	LE() {
	    return this.getToken(mumathParser.LE, 0);
	};

	GE() {
	    return this.getToken(mumathParser.GE, 0);
	};

	GT() {
	    return this.getToken(mumathParser.GT, 0);
	};

	EQUATION() {
	    return this.getToken(mumathParser.EQUATION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.enterRelationalOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.exitRelationalOperator(this);
		}
	}


}



class SimpleExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mumathParser.RULE_simpleExpression;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	MINUS() {
	    return this.getToken(mumathParser.MINUS, 0);
	};

	addingOperator = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AddingOperatorContext);
	    } else {
	        return this.getTypedRuleContext(AddingOperatorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.enterSimpleExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.exitSimpleExpression(this);
		}
	}


}



class AddingOperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mumathParser.RULE_addingOperator;
    }

	PLUS() {
	    return this.getToken(mumathParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(mumathParser.MINUS, 0);
	};

	OR() {
	    return this.getToken(mumathParser.OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.enterAddingOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.exitAddingOperator(this);
		}
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mumathParser.RULE_term;
    }

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	multiplyingOperator = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MultiplyingOperatorContext);
	    } else {
	        return this.getTypedRuleContext(MultiplyingOperatorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.exitTerm(this);
		}
	}


}



class MultiplyingOperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mumathParser.RULE_multiplyingOperator;
    }

	STAR() {
	    return this.getToken(mumathParser.STAR, 0);
	};

	SLASH() {
	    return this.getToken(mumathParser.SLASH, 0);
	};

	MOD() {
	    return this.getToken(mumathParser.MOD, 0);
	};

	AND() {
	    return this.getToken(mumathParser.AND, 0);
	};

	POWER() {
	    return this.getToken(mumathParser.POWER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.enterMultiplyingOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.exitMultiplyingOperator(this);
		}
	}


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mumathParser.RULE_factor;
    }

	ID() {
	    return this.getToken(mumathParser.ID, 0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	LPAREN() {
	    return this.getToken(mumathParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(mumathParser.RPAREN, 0);
	};

	functionDesignator() {
	    return this.getTypedRuleContext(FunctionDesignatorContext,0);
	};

	NOT() {
	    return this.getToken(mumathParser.NOT, 0);
	};

	factor() {
	    return this.getTypedRuleContext(FactorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.exitFactor(this);
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
        this.ruleIndex = mumathParser.RULE_constant;
    }

	NUMBER() {
	    return this.getToken(mumathParser.NUMBER, 0);
	};

	STRING() {
	    return this.getToken(mumathParser.STRING, 0);
	};

	QUOTE() {
	    return this.getToken(mumathParser.QUOTE, 0);
	};

	ID() {
	    return this.getToken(mumathParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.enterConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.exitConstant(this);
		}
	}


}



class FunctionDesignatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mumathParser.RULE_functionDesignator;
    }

	ID() {
	    return this.getToken(mumathParser.ID, 0);
	};

	LPAREN() {
	    return this.getToken(mumathParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(mumathParser.RPAREN, 0);
	};

	actualParameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ActualParameterContext);
	    } else {
	        return this.getTypedRuleContext(ActualParameterContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mumathParser.COMMA);
	    } else {
	        return this.getToken(mumathParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.enterFunctionDesignator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.exitFunctionDesignator(this);
		}
	}


}



class EqualContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mumathParser.RULE_equal;
    }

	EQF() {
	    return this.getToken(mumathParser.EQF, 0);
	};

	EQC() {
	    return this.getToken(mumathParser.EQC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.enterEqual(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mumathListener ) {
	        listener.exitEqual(this);
		}
	}


}




mumathParser.ProgramContext = ProgramContext; 
mumathParser.AssignmentContext = AssignmentContext; 
mumathParser.List_Context = List_Context; 
mumathParser.FunctionDefinitionContext = FunctionDefinitionContext; 
mumathParser.ActualParameterContext = ActualParameterContext; 
mumathParser.StatmentsContext = StatmentsContext; 
mumathParser.BlockContext = BlockContext; 
mumathParser.LoopContext = LoopContext; 
mumathParser.WhenContext = WhenContext; 
mumathParser.ExpressionContext = ExpressionContext; 
mumathParser.RelationalOperatorContext = RelationalOperatorContext; 
mumathParser.SimpleExpressionContext = SimpleExpressionContext; 
mumathParser.AddingOperatorContext = AddingOperatorContext; 
mumathParser.TermContext = TermContext; 
mumathParser.MultiplyingOperatorContext = MultiplyingOperatorContext; 
mumathParser.FactorContext = FactorContext; 
mumathParser.ConstantContext = ConstantContext; 
mumathParser.FunctionDesignatorContext = FunctionDesignatorContext; 
mumathParser.EqualContext = EqualContext; 
