// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/lisa/lisa.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import lisaListener from './lisaListener.js';
const serializedATN = [4,1,48,234,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,2,4,2,71,
8,2,11,2,12,2,72,1,3,1,3,1,3,1,3,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,6,4,6,87,
8,6,11,6,12,6,88,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,99,8,7,1,8,1,8,1,8,
1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,
11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,5,13,132,8,13,
10,13,12,13,135,9,13,1,13,3,13,138,8,13,1,14,1,14,1,15,1,15,1,15,5,15,145,
8,15,10,15,12,15,148,9,15,1,16,1,16,1,16,5,16,153,8,16,10,16,12,16,156,9,
16,1,17,3,17,159,8,17,1,17,1,17,1,18,1,18,1,18,1,18,5,18,167,8,18,10,18,
12,18,170,9,18,1,19,1,19,1,20,1,20,1,20,1,20,5,20,178,8,20,10,20,12,20,181,
9,20,1,21,1,21,1,22,1,22,1,22,1,22,5,22,189,8,22,10,22,12,22,192,9,22,1,
23,1,23,1,24,1,24,1,24,1,24,1,24,3,24,201,8,24,1,25,1,25,1,25,1,25,1,25,
1,25,1,25,1,25,1,25,3,25,212,8,25,1,26,3,26,215,8,26,1,26,1,26,1,27,1,27,
1,27,1,27,1,27,1,28,1,28,1,28,5,28,227,8,28,10,28,12,28,230,9,28,1,29,1,
29,1,29,0,0,30,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,
42,44,46,48,50,52,54,56,58,0,6,1,0,5,10,1,0,18,19,1,0,21,25,1,0,29,33,1,
0,34,35,1,0,36,38,229,0,60,1,0,0,0,2,64,1,0,0,0,4,70,1,0,0,0,6,74,1,0,0,
0,8,78,1,0,0,0,10,80,1,0,0,0,12,86,1,0,0,0,14,98,1,0,0,0,16,100,1,0,0,0,
18,110,1,0,0,0,20,112,1,0,0,0,22,115,1,0,0,0,24,121,1,0,0,0,26,137,1,0,0,
0,28,139,1,0,0,0,30,141,1,0,0,0,32,149,1,0,0,0,34,158,1,0,0,0,36,162,1,0,
0,0,38,171,1,0,0,0,40,173,1,0,0,0,42,182,1,0,0,0,44,184,1,0,0,0,46,193,1,
0,0,0,48,200,1,0,0,0,50,211,1,0,0,0,52,214,1,0,0,0,54,218,1,0,0,0,56,223,
1,0,0,0,58,231,1,0,0,0,60,61,3,2,1,0,61,62,3,10,5,0,62,63,5,0,0,1,63,1,1,
0,0,0,64,65,5,1,0,0,65,66,5,2,0,0,66,67,3,4,2,0,67,68,5,3,0,0,68,3,1,0,0,
0,69,71,3,6,3,0,70,69,1,0,0,0,71,72,1,0,0,0,72,70,1,0,0,0,72,73,1,0,0,0,
73,5,1,0,0,0,74,75,3,8,4,0,75,76,5,45,0,0,76,77,5,4,0,0,77,7,1,0,0,0,78,
79,7,0,0,0,79,9,1,0,0,0,80,81,5,11,0,0,81,82,5,2,0,0,82,83,3,12,6,0,83,84,
5,3,0,0,84,11,1,0,0,0,85,87,3,14,7,0,86,85,1,0,0,0,87,88,1,0,0,0,88,86,1,
0,0,0,88,89,1,0,0,0,89,13,1,0,0,0,90,99,3,20,10,0,91,99,3,22,11,0,92,99,
3,24,12,0,93,99,3,16,8,0,94,95,5,12,0,0,95,99,5,4,0,0,96,97,5,13,0,0,97,
99,5,4,0,0,98,90,1,0,0,0,98,91,1,0,0,0,98,92,1,0,0,0,98,93,1,0,0,0,98,94,
1,0,0,0,98,96,1,0,0,0,99,15,1,0,0,0,100,101,5,14,0,0,101,102,5,15,0,0,102,
103,3,18,9,0,103,104,5,16,0,0,104,105,5,5,0,0,105,106,5,16,0,0,106,107,5,
5,0,0,107,108,5,17,0,0,108,109,3,14,7,0,109,17,1,0,0,0,110,111,7,1,0,0,111,
19,1,0,0,0,112,113,3,26,13,0,113,114,5,4,0,0,114,21,1,0,0,0,115,116,5,20,
0,0,116,117,5,15,0,0,117,118,3,26,13,0,118,119,5,17,0,0,119,120,3,14,7,0,
120,23,1,0,0,0,121,122,5,43,0,0,122,123,5,15,0,0,123,124,3,26,13,0,124,125,
5,17,0,0,125,126,3,14,7,0,126,25,1,0,0,0,127,133,3,58,29,0,128,129,3,28,
14,0,129,130,3,26,13,0,130,132,1,0,0,0,131,128,1,0,0,0,132,135,1,0,0,0,133,
131,1,0,0,0,133,134,1,0,0,0,134,138,1,0,0,0,135,133,1,0,0,0,136,138,3,30,
15,0,137,127,1,0,0,0,137,136,1,0,0,0,138,27,1,0,0,0,139,140,7,2,0,0,140,
29,1,0,0,0,141,146,3,32,16,0,142,143,5,26,0,0,143,145,3,32,16,0,144,142,
1,0,0,0,145,148,1,0,0,0,146,144,1,0,0,0,146,147,1,0,0,0,147,31,1,0,0,0,148,
146,1,0,0,0,149,154,3,34,17,0,150,151,5,27,0,0,151,153,3,34,17,0,152,150,
1,0,0,0,153,156,1,0,0,0,154,152,1,0,0,0,154,155,1,0,0,0,155,33,1,0,0,0,156,
154,1,0,0,0,157,159,5,28,0,0,158,157,1,0,0,0,158,159,1,0,0,0,159,160,1,0,
0,0,160,161,3,36,18,0,161,35,1,0,0,0,162,168,3,40,20,0,163,164,3,38,19,0,
164,165,3,40,20,0,165,167,1,0,0,0,166,163,1,0,0,0,167,170,1,0,0,0,168,166,
1,0,0,0,168,169,1,0,0,0,169,37,1,0,0,0,170,168,1,0,0,0,171,172,7,3,0,0,172,
39,1,0,0,0,173,179,3,44,22,0,174,175,3,42,21,0,175,176,3,44,22,0,176,178,
1,0,0,0,177,174,1,0,0,0,178,181,1,0,0,0,179,177,1,0,0,0,179,180,1,0,0,0,
180,41,1,0,0,0,181,179,1,0,0,0,182,183,7,4,0,0,183,43,1,0,0,0,184,190,3,
48,24,0,185,186,3,46,23,0,186,187,3,48,24,0,187,189,1,0,0,0,188,185,1,0,
0,0,189,192,1,0,0,0,190,188,1,0,0,0,190,191,1,0,0,0,191,45,1,0,0,0,192,190,
1,0,0,0,193,194,7,5,0,0,194,47,1,0,0,0,195,196,5,15,0,0,196,197,3,30,15,
0,197,198,5,17,0,0,198,201,1,0,0,0,199,201,3,50,25,0,200,195,1,0,0,0,200,
199,1,0,0,0,201,49,1,0,0,0,202,212,3,52,26,0,203,212,5,41,0,0,204,212,5,
42,0,0,205,212,5,39,0,0,206,212,5,40,0,0,207,212,3,58,29,0,208,212,5,46,
0,0,209,212,3,54,27,0,210,212,3,8,4,0,211,202,1,0,0,0,211,203,1,0,0,0,211,
204,1,0,0,0,211,205,1,0,0,0,211,206,1,0,0,0,211,207,1,0,0,0,211,208,1,0,
0,0,211,209,1,0,0,0,211,210,1,0,0,0,212,51,1,0,0,0,213,215,7,4,0,0,214,213,
1,0,0,0,214,215,1,0,0,0,215,216,1,0,0,0,216,217,5,44,0,0,217,53,1,0,0,0,
218,219,5,45,0,0,219,220,5,15,0,0,220,221,3,56,28,0,221,222,5,17,0,0,222,
55,1,0,0,0,223,228,3,30,15,0,224,225,5,16,0,0,225,227,3,30,15,0,226,224,
1,0,0,0,227,230,1,0,0,0,228,226,1,0,0,0,228,229,1,0,0,0,229,57,1,0,0,0,230,
228,1,0,0,0,231,232,5,45,0,0,232,59,1,0,0,0,15,72,88,98,133,137,146,154,
158,168,179,190,200,211,214,228];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class lisaParser extends antlr4.Parser {

    static grammarFileName = "lisa.g4";
    static literalNames = [ null, "'declare'", "'{'", "'}'", "';'", "'int'", 
                            "'dfa'", "'nfa'", "'regex'", "'bool'", "'string'", 
                            "'program'", "'break'", "'continue'", "'generate'", 
                            "'('", "','", "')'", "'random'", "'enumerate'", 
                            "'if'", "'='", "'-+'", "'*='", "'/='", "'+='", 
                            "'||'", "'&&'", "'!'", "'<='", "'>='", "'=='", 
                            "'!='", "'>'", "'-'", "'+'", "'*'", "'/'", "'%'", 
                            "'next'", "'hasnext'", "'TRUE'", "'FALSE'", 
                            "'WHILE'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, "TRUE", "FALSE", "WHILE", "INTEGER", 
                             "ID", "STRINGLITERAL", "COMMENT", "WS" ];
    static ruleNames = [ "program", "declaration_block", "declaration_statements", 
                         "declaration_statement", "type_", "program_block", 
                         "statements", "statement", "generating_statement", 
                         "generator_type", "expression_statement", "if_statement", 
                         "while_statement", "expression", "exprop", "simple_expression", 
                         "or_expression", "unary_relationexpression", "relation_expression", 
                         "relop", "add_expression", "addop", "term", "multop", 
                         "factor", "constant", "integer", "function_", "parameter_list", 
                         "variable" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = lisaParser.ruleNames;
        this.literalNames = lisaParser.literalNames;
        this.symbolicNames = lisaParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, lisaParser.RULE_program);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.declaration_block();
	        this.state = 61;
	        this.program_block();
	        this.state = 62;
	        this.match(lisaParser.EOF);
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



	declaration_block() {
	    let localctx = new Declaration_blockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, lisaParser.RULE_declaration_block);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(lisaParser.T__0);
	        this.state = 65;
	        this.match(lisaParser.T__1);
	        this.state = 66;
	        this.declaration_statements();
	        this.state = 67;
	        this.match(lisaParser.T__2);
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



	declaration_statements() {
	    let localctx = new Declaration_statementsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, lisaParser.RULE_declaration_statements);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 69;
	            this.declaration_statement();
	            this.state = 72; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2016) !== 0));
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



	declaration_statement() {
	    let localctx = new Declaration_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, lisaParser.RULE_declaration_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.type_();
	        this.state = 75;
	        this.match(lisaParser.ID);
	        this.state = 76;
	        this.match(lisaParser.T__3);
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



	type_() {
	    let localctx = new Type_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, lisaParser.RULE_type_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 2016) !== 0))) {
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



	program_block() {
	    let localctx = new Program_blockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, lisaParser.RULE_program_block);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.match(lisaParser.T__10);
	        this.state = 81;
	        this.match(lisaParser.T__1);
	        this.state = 82;
	        this.statements();
	        this.state = 83;
	        this.match(lisaParser.T__2);
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



	statements() {
	    let localctx = new StatementsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, lisaParser.RULE_statements);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 85;
	            this.statement();
	            this.state = 88; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 269547488) !== 0) || ((((_la - 34)) & ~0x1f) === 0 && ((1 << (_la - 34)) & 8163) !== 0));
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
	    this.enterRule(localctx, 14, lisaParser.RULE_statement);
	    try {
	        this.state = 98;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 15:
	        case 28:
	        case 34:
	        case 35:
	        case 39:
	        case 40:
	        case 41:
	        case 42:
	        case 44:
	        case 45:
	        case 46:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 90;
	            this.expression_statement();
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 91;
	            this.if_statement();
	            break;
	        case 43:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 92;
	            this.while_statement();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 93;
	            this.generating_statement();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 94;
	            this.match(lisaParser.T__11);
	            this.state = 95;
	            this.match(lisaParser.T__3);
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 96;
	            this.match(lisaParser.T__12);
	            this.state = 97;
	            this.match(lisaParser.T__3);
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



	generating_statement() {
	    let localctx = new Generating_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, lisaParser.RULE_generating_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this.match(lisaParser.T__13);
	        this.state = 101;
	        this.match(lisaParser.T__14);
	        this.state = 102;
	        this.generator_type();
	        this.state = 103;
	        this.match(lisaParser.T__15);
	        this.state = 104;
	        this.match(lisaParser.T__4);
	        this.state = 105;
	        this.match(lisaParser.T__15);
	        this.state = 106;
	        this.match(lisaParser.T__4);
	        this.state = 107;
	        this.match(lisaParser.T__16);
	        this.state = 108;
	        this.statement();
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



	generator_type() {
	    let localctx = new Generator_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, lisaParser.RULE_generator_type);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        _la = this._input.LA(1);
	        if(!(_la===18 || _la===19)) {
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



	expression_statement() {
	    let localctx = new Expression_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, lisaParser.RULE_expression_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        this.expression();
	        this.state = 113;
	        this.match(lisaParser.T__3);
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



	if_statement() {
	    let localctx = new If_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, lisaParser.RULE_if_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        this.match(lisaParser.T__19);
	        this.state = 116;
	        this.match(lisaParser.T__14);
	        this.state = 117;
	        this.expression();
	        this.state = 118;
	        this.match(lisaParser.T__16);
	        this.state = 119;
	        this.statement();
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



	while_statement() {
	    let localctx = new While_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, lisaParser.RULE_while_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this.match(lisaParser.WHILE);
	        this.state = 122;
	        this.match(lisaParser.T__14);
	        this.state = 123;
	        this.expression();
	        this.state = 124;
	        this.match(lisaParser.T__16);
	        this.state = 125;
	        this.statement();
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
	    this.enterRule(localctx, 26, lisaParser.RULE_expression);
	    try {
	        this.state = 137;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 127;
	            this.variable();
	            this.state = 133;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 128;
	                    this.exprop();
	                    this.state = 129;
	                    this.expression(); 
	                }
	                this.state = 135;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 136;
	            this.simple_expression();
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



	exprop() {
	    let localctx = new ExpropContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, lisaParser.RULE_exprop);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 139;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 65011712) !== 0))) {
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



	simple_expression() {
	    let localctx = new Simple_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, lisaParser.RULE_simple_expression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141;
	        this.or_expression();
	        this.state = 146;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===26) {
	            this.state = 142;
	            this.match(lisaParser.T__25);
	            this.state = 143;
	            this.or_expression();
	            this.state = 148;
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



	or_expression() {
	    let localctx = new Or_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, lisaParser.RULE_or_expression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        this.unary_relationexpression();
	        this.state = 154;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===27) {
	            this.state = 150;
	            this.match(lisaParser.T__26);
	            this.state = 151;
	            this.unary_relationexpression();
	            this.state = 156;
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



	unary_relationexpression() {
	    let localctx = new Unary_relationexpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, lisaParser.RULE_unary_relationexpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===28) {
	            this.state = 157;
	            this.match(lisaParser.T__27);
	        }

	        this.state = 160;
	        this.relation_expression();
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



	relation_expression() {
	    let localctx = new Relation_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, lisaParser.RULE_relation_expression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        this.add_expression();
	        this.state = 168;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 29)) & ~0x1f) === 0 && ((1 << (_la - 29)) & 31) !== 0)) {
	            this.state = 163;
	            this.relop();
	            this.state = 164;
	            this.add_expression();
	            this.state = 170;
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



	relop() {
	    let localctx = new RelopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, lisaParser.RULE_relop);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 171;
	        _la = this._input.LA(1);
	        if(!(((((_la - 29)) & ~0x1f) === 0 && ((1 << (_la - 29)) & 31) !== 0))) {
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



	add_expression() {
	    let localctx = new Add_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, lisaParser.RULE_add_expression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 173;
	        this.term();
	        this.state = 179;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===34 || _la===35) {
	            this.state = 174;
	            this.addop();
	            this.state = 175;
	            this.term();
	            this.state = 181;
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



	addop() {
	    let localctx = new AddopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, lisaParser.RULE_addop);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 182;
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



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, lisaParser.RULE_term);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        this.factor();
	        this.state = 190;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 36)) & ~0x1f) === 0 && ((1 << (_la - 36)) & 7) !== 0)) {
	            this.state = 185;
	            this.multop();
	            this.state = 186;
	            this.factor();
	            this.state = 192;
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



	multop() {
	    let localctx = new MultopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, lisaParser.RULE_multop);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 193;
	        _la = this._input.LA(1);
	        if(!(((((_la - 36)) & ~0x1f) === 0 && ((1 << (_la - 36)) & 7) !== 0))) {
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
	    this.enterRule(localctx, 48, lisaParser.RULE_factor);
	    try {
	        this.state = 200;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 195;
	            this.match(lisaParser.T__14);
	            this.state = 196;
	            this.simple_expression();
	            this.state = 197;
	            this.match(lisaParser.T__16);
	            break;
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 34:
	        case 35:
	        case 39:
	        case 40:
	        case 41:
	        case 42:
	        case 44:
	        case 45:
	        case 46:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 199;
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
	    this.enterRule(localctx, 50, lisaParser.RULE_constant);
	    try {
	        this.state = 211;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 202;
	            this.integer();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 203;
	            this.match(lisaParser.TRUE);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 204;
	            this.match(lisaParser.FALSE);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 205;
	            this.match(lisaParser.T__38);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 206;
	            this.match(lisaParser.T__39);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 207;
	            this.variable();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 208;
	            this.match(lisaParser.STRINGLITERAL);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 209;
	            this.function_();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 210;
	            this.type_();
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



	integer() {
	    let localctx = new IntegerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, lisaParser.RULE_integer);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 214;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===34 || _la===35) {
	            this.state = 213;
	            _la = this._input.LA(1);
	            if(!(_la===34 || _la===35)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 216;
	        this.match(lisaParser.INTEGER);
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



	function_() {
	    let localctx = new Function_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, lisaParser.RULE_function_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 218;
	        this.match(lisaParser.ID);
	        this.state = 219;
	        this.match(lisaParser.T__14);
	        this.state = 220;
	        this.parameter_list();
	        this.state = 221;
	        this.match(lisaParser.T__16);
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



	parameter_list() {
	    let localctx = new Parameter_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, lisaParser.RULE_parameter_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 223;
	        this.simple_expression();
	        this.state = 228;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===16) {
	            this.state = 224;
	            this.match(lisaParser.T__15);
	            this.state = 225;
	            this.simple_expression();
	            this.state = 230;
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



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, lisaParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 231;
	        this.match(lisaParser.ID);
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

lisaParser.EOF = antlr4.Token.EOF;
lisaParser.T__0 = 1;
lisaParser.T__1 = 2;
lisaParser.T__2 = 3;
lisaParser.T__3 = 4;
lisaParser.T__4 = 5;
lisaParser.T__5 = 6;
lisaParser.T__6 = 7;
lisaParser.T__7 = 8;
lisaParser.T__8 = 9;
lisaParser.T__9 = 10;
lisaParser.T__10 = 11;
lisaParser.T__11 = 12;
lisaParser.T__12 = 13;
lisaParser.T__13 = 14;
lisaParser.T__14 = 15;
lisaParser.T__15 = 16;
lisaParser.T__16 = 17;
lisaParser.T__17 = 18;
lisaParser.T__18 = 19;
lisaParser.T__19 = 20;
lisaParser.T__20 = 21;
lisaParser.T__21 = 22;
lisaParser.T__22 = 23;
lisaParser.T__23 = 24;
lisaParser.T__24 = 25;
lisaParser.T__25 = 26;
lisaParser.T__26 = 27;
lisaParser.T__27 = 28;
lisaParser.T__28 = 29;
lisaParser.T__29 = 30;
lisaParser.T__30 = 31;
lisaParser.T__31 = 32;
lisaParser.T__32 = 33;
lisaParser.T__33 = 34;
lisaParser.T__34 = 35;
lisaParser.T__35 = 36;
lisaParser.T__36 = 37;
lisaParser.T__37 = 38;
lisaParser.T__38 = 39;
lisaParser.T__39 = 40;
lisaParser.TRUE = 41;
lisaParser.FALSE = 42;
lisaParser.WHILE = 43;
lisaParser.INTEGER = 44;
lisaParser.ID = 45;
lisaParser.STRINGLITERAL = 46;
lisaParser.COMMENT = 47;
lisaParser.WS = 48;

lisaParser.RULE_program = 0;
lisaParser.RULE_declaration_block = 1;
lisaParser.RULE_declaration_statements = 2;
lisaParser.RULE_declaration_statement = 3;
lisaParser.RULE_type_ = 4;
lisaParser.RULE_program_block = 5;
lisaParser.RULE_statements = 6;
lisaParser.RULE_statement = 7;
lisaParser.RULE_generating_statement = 8;
lisaParser.RULE_generator_type = 9;
lisaParser.RULE_expression_statement = 10;
lisaParser.RULE_if_statement = 11;
lisaParser.RULE_while_statement = 12;
lisaParser.RULE_expression = 13;
lisaParser.RULE_exprop = 14;
lisaParser.RULE_simple_expression = 15;
lisaParser.RULE_or_expression = 16;
lisaParser.RULE_unary_relationexpression = 17;
lisaParser.RULE_relation_expression = 18;
lisaParser.RULE_relop = 19;
lisaParser.RULE_add_expression = 20;
lisaParser.RULE_addop = 21;
lisaParser.RULE_term = 22;
lisaParser.RULE_multop = 23;
lisaParser.RULE_factor = 24;
lisaParser.RULE_constant = 25;
lisaParser.RULE_integer = 26;
lisaParser.RULE_function_ = 27;
lisaParser.RULE_parameter_list = 28;
lisaParser.RULE_variable = 29;

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
        this.ruleIndex = lisaParser.RULE_program;
    }

	declaration_block() {
	    return this.getTypedRuleContext(Declaration_blockContext,0);
	};

	program_block() {
	    return this.getTypedRuleContext(Program_blockContext,0);
	};

	EOF() {
	    return this.getToken(lisaParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.exitProgram(this);
		}
	}


}



class Declaration_blockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lisaParser.RULE_declaration_block;
    }

	declaration_statements() {
	    return this.getTypedRuleContext(Declaration_statementsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.enterDeclaration_block(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.exitDeclaration_block(this);
		}
	}


}



class Declaration_statementsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lisaParser.RULE_declaration_statements;
    }

	declaration_statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Declaration_statementContext);
	    } else {
	        return this.getTypedRuleContext(Declaration_statementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.enterDeclaration_statements(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.exitDeclaration_statements(this);
		}
	}


}



class Declaration_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lisaParser.RULE_declaration_statement;
    }

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	ID() {
	    return this.getToken(lisaParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.enterDeclaration_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.exitDeclaration_statement(this);
		}
	}


}



class Type_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lisaParser.RULE_type_;
    }


	enterRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.enterType_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.exitType_(this);
		}
	}


}



class Program_blockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lisaParser.RULE_program_block;
    }

	statements() {
	    return this.getTypedRuleContext(StatementsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.enterProgram_block(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.exitProgram_block(this);
		}
	}


}



class StatementsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lisaParser.RULE_statements;
    }

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
	    if(listener instanceof lisaListener ) {
	        listener.enterStatements(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.exitStatements(this);
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
        this.ruleIndex = lisaParser.RULE_statement;
    }

	expression_statement() {
	    return this.getTypedRuleContext(Expression_statementContext,0);
	};

	if_statement() {
	    return this.getTypedRuleContext(If_statementContext,0);
	};

	while_statement() {
	    return this.getTypedRuleContext(While_statementContext,0);
	};

	generating_statement() {
	    return this.getTypedRuleContext(Generating_statementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.exitStatement(this);
		}
	}


}



class Generating_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lisaParser.RULE_generating_statement;
    }

	generator_type() {
	    return this.getTypedRuleContext(Generator_typeContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.enterGenerating_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.exitGenerating_statement(this);
		}
	}


}



class Generator_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lisaParser.RULE_generator_type;
    }


	enterRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.enterGenerator_type(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.exitGenerator_type(this);
		}
	}


}



class Expression_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lisaParser.RULE_expression_statement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.enterExpression_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.exitExpression_statement(this);
		}
	}


}



class If_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lisaParser.RULE_if_statement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.enterIf_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.exitIf_statement(this);
		}
	}


}



class While_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lisaParser.RULE_while_statement;
    }

	WHILE() {
	    return this.getToken(lisaParser.WHILE, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.enterWhile_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.exitWhile_statement(this);
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
        this.ruleIndex = lisaParser.RULE_expression;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	exprop = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpropContext);
	    } else {
	        return this.getTypedRuleContext(ExpropContext,i);
	    }
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	simple_expression() {
	    return this.getTypedRuleContext(Simple_expressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.exitExpression(this);
		}
	}


}



class ExpropContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lisaParser.RULE_exprop;
    }


	enterRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.enterExprop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.exitExprop(this);
		}
	}


}



class Simple_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lisaParser.RULE_simple_expression;
    }

	or_expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Or_expressionContext);
	    } else {
	        return this.getTypedRuleContext(Or_expressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.enterSimple_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.exitSimple_expression(this);
		}
	}


}



class Or_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lisaParser.RULE_or_expression;
    }

	unary_relationexpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Unary_relationexpressionContext);
	    } else {
	        return this.getTypedRuleContext(Unary_relationexpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.enterOr_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.exitOr_expression(this);
		}
	}


}



class Unary_relationexpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lisaParser.RULE_unary_relationexpression;
    }

	relation_expression() {
	    return this.getTypedRuleContext(Relation_expressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.enterUnary_relationexpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.exitUnary_relationexpression(this);
		}
	}


}



class Relation_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lisaParser.RULE_relation_expression;
    }

	add_expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Add_expressionContext);
	    } else {
	        return this.getTypedRuleContext(Add_expressionContext,i);
	    }
	};

	relop = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RelopContext);
	    } else {
	        return this.getTypedRuleContext(RelopContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.enterRelation_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.exitRelation_expression(this);
		}
	}


}



class RelopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lisaParser.RULE_relop;
    }


	enterRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.enterRelop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.exitRelop(this);
		}
	}


}



class Add_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lisaParser.RULE_add_expression;
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

	addop = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AddopContext);
	    } else {
	        return this.getTypedRuleContext(AddopContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.enterAdd_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.exitAdd_expression(this);
		}
	}


}



class AddopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lisaParser.RULE_addop;
    }


	enterRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.enterAddop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.exitAddop(this);
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
        this.ruleIndex = lisaParser.RULE_term;
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

	multop = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MultopContext);
	    } else {
	        return this.getTypedRuleContext(MultopContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.exitTerm(this);
		}
	}


}



class MultopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lisaParser.RULE_multop;
    }


	enterRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.enterMultop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.exitMultop(this);
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
        this.ruleIndex = lisaParser.RULE_factor;
    }

	simple_expression() {
	    return this.getTypedRuleContext(Simple_expressionContext,0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lisaListener ) {
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
        this.ruleIndex = lisaParser.RULE_constant;
    }

	integer() {
	    return this.getTypedRuleContext(IntegerContext,0);
	};

	TRUE() {
	    return this.getToken(lisaParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(lisaParser.FALSE, 0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	STRINGLITERAL() {
	    return this.getToken(lisaParser.STRINGLITERAL, 0);
	};

	function_() {
	    return this.getTypedRuleContext(Function_Context,0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.enterConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.exitConstant(this);
		}
	}


}



class IntegerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lisaParser.RULE_integer;
    }

	INTEGER() {
	    return this.getToken(lisaParser.INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.enterInteger(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.exitInteger(this);
		}
	}


}



class Function_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lisaParser.RULE_function_;
    }

	ID() {
	    return this.getToken(lisaParser.ID, 0);
	};

	parameter_list() {
	    return this.getTypedRuleContext(Parameter_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.enterFunction_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.exitFunction_(this);
		}
	}


}



class Parameter_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lisaParser.RULE_parameter_list;
    }

	simple_expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Simple_expressionContext);
	    } else {
	        return this.getTypedRuleContext(Simple_expressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.enterParameter_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.exitParameter_list(this);
		}
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lisaParser.RULE_variable;
    }

	ID() {
	    return this.getToken(lisaParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lisaListener ) {
	        listener.exitVariable(this);
		}
	}


}




lisaParser.ProgramContext = ProgramContext; 
lisaParser.Declaration_blockContext = Declaration_blockContext; 
lisaParser.Declaration_statementsContext = Declaration_statementsContext; 
lisaParser.Declaration_statementContext = Declaration_statementContext; 
lisaParser.Type_Context = Type_Context; 
lisaParser.Program_blockContext = Program_blockContext; 
lisaParser.StatementsContext = StatementsContext; 
lisaParser.StatementContext = StatementContext; 
lisaParser.Generating_statementContext = Generating_statementContext; 
lisaParser.Generator_typeContext = Generator_typeContext; 
lisaParser.Expression_statementContext = Expression_statementContext; 
lisaParser.If_statementContext = If_statementContext; 
lisaParser.While_statementContext = While_statementContext; 
lisaParser.ExpressionContext = ExpressionContext; 
lisaParser.ExpropContext = ExpropContext; 
lisaParser.Simple_expressionContext = Simple_expressionContext; 
lisaParser.Or_expressionContext = Or_expressionContext; 
lisaParser.Unary_relationexpressionContext = Unary_relationexpressionContext; 
lisaParser.Relation_expressionContext = Relation_expressionContext; 
lisaParser.RelopContext = RelopContext; 
lisaParser.Add_expressionContext = Add_expressionContext; 
lisaParser.AddopContext = AddopContext; 
lisaParser.TermContext = TermContext; 
lisaParser.MultopContext = MultopContext; 
lisaParser.FactorContext = FactorContext; 
lisaParser.ConstantContext = ConstantContext; 
lisaParser.IntegerContext = IntegerContext; 
lisaParser.Function_Context = Function_Context; 
lisaParser.Parameter_listContext = Parameter_listContext; 
lisaParser.VariableContext = VariableContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
