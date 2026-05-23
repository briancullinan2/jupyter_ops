// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/pest/PestParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import PestParserListener from './PestParserListener.js';
const serializedATN = [4,1,37,189,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,1,0,
4,0,56,8,0,11,0,12,0,57,1,0,1,0,1,1,1,1,1,1,3,1,65,8,1,1,1,1,1,1,1,1,1,1,
2,1,2,1,2,1,2,3,2,75,8,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,7,
5,7,89,8,7,10,7,12,7,92,9,7,1,8,5,8,95,8,8,10,8,12,8,98,9,8,1,8,1,8,5,8,
102,8,8,10,8,12,8,105,9,8,1,9,1,9,1,9,1,9,1,9,3,9,112,8,9,1,10,1,10,1,10,
1,10,1,10,1,10,3,10,120,8,10,1,11,1,11,3,11,124,8,11,1,12,1,12,3,12,128,
8,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,137,8,13,1,14,1,14,1,15,1,15,
1,16,1,16,1,17,1,17,1,18,1,18,1,19,1,19,1,20,1,20,1,21,1,21,1,21,1,21,1,
22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,
1,24,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,3,26,181,8,26,1,26,1,26,3,26,
185,8,26,1,26,1,26,1,26,0,0,27,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,
32,34,36,38,40,42,44,46,48,50,52,0,0,185,0,55,1,0,0,0,2,61,1,0,0,0,4,74,
1,0,0,0,6,76,1,0,0,0,8,78,1,0,0,0,10,80,1,0,0,0,12,82,1,0,0,0,14,84,1,0,
0,0,16,96,1,0,0,0,18,111,1,0,0,0,20,119,1,0,0,0,22,123,1,0,0,0,24,127,1,
0,0,0,26,136,1,0,0,0,28,138,1,0,0,0,30,140,1,0,0,0,32,142,1,0,0,0,34,144,
1,0,0,0,36,146,1,0,0,0,38,148,1,0,0,0,40,150,1,0,0,0,42,152,1,0,0,0,44,156,
1,0,0,0,46,161,1,0,0,0,48,166,1,0,0,0,50,172,1,0,0,0,52,177,1,0,0,0,54,56,
3,2,1,0,55,54,1,0,0,0,56,57,1,0,0,0,57,55,1,0,0,0,57,58,1,0,0,0,58,59,1,
0,0,0,59,60,5,0,0,1,60,1,1,0,0,0,61,62,5,23,0,0,62,64,5,11,0,0,63,65,3,4,
2,0,64,63,1,0,0,0,64,65,1,0,0,0,65,66,1,0,0,0,66,67,5,12,0,0,67,68,3,14,
7,0,68,69,5,13,0,0,69,3,1,0,0,0,70,75,3,6,3,0,71,75,3,8,4,0,72,75,3,10,5,
0,73,75,3,12,6,0,74,70,1,0,0,0,74,71,1,0,0,0,74,72,1,0,0,0,74,73,1,0,0,0,
75,5,1,0,0,0,76,77,5,1,0,0,77,7,1,0,0,0,78,79,5,2,0,0,79,9,1,0,0,0,80,81,
5,3,0,0,81,11,1,0,0,0,82,83,5,4,0,0,83,13,1,0,0,0,84,90,3,16,8,0,85,86,3,
24,12,0,86,87,3,16,8,0,87,89,1,0,0,0,88,85,1,0,0,0,89,92,1,0,0,0,90,88,1,
0,0,0,90,91,1,0,0,0,91,15,1,0,0,0,92,90,1,0,0,0,93,95,3,22,11,0,94,93,1,
0,0,0,95,98,1,0,0,0,96,94,1,0,0,0,96,97,1,0,0,0,97,99,1,0,0,0,98,96,1,0,
0,0,99,103,3,18,9,0,100,102,3,26,13,0,101,100,1,0,0,0,102,105,1,0,0,0,103,
101,1,0,0,0,103,104,1,0,0,0,104,17,1,0,0,0,105,103,1,0,0,0,106,107,5,14,
0,0,107,108,3,14,7,0,108,109,5,15,0,0,109,112,1,0,0,0,110,112,3,20,10,0,
111,106,1,0,0,0,111,110,1,0,0,0,112,19,1,0,0,0,113,120,3,50,25,0,114,120,
3,52,26,0,115,120,5,23,0,0,116,120,5,24,0,0,117,120,5,25,0,0,118,120,5,26,
0,0,119,113,1,0,0,0,119,114,1,0,0,0,119,115,1,0,0,0,119,116,1,0,0,0,119,
117,1,0,0,0,119,118,1,0,0,0,120,21,1,0,0,0,121,124,3,28,14,0,122,124,3,30,
15,0,123,121,1,0,0,0,123,122,1,0,0,0,124,23,1,0,0,0,125,128,3,32,16,0,126,
128,3,34,17,0,127,125,1,0,0,0,127,126,1,0,0,0,128,25,1,0,0,0,129,137,3,36,
18,0,130,137,3,38,19,0,131,137,3,40,20,0,132,137,3,42,21,0,133,137,3,44,
22,0,134,137,3,46,23,0,135,137,3,48,24,0,136,129,1,0,0,0,136,130,1,0,0,0,
136,131,1,0,0,0,136,132,1,0,0,0,136,133,1,0,0,0,136,134,1,0,0,0,136,135,
1,0,0,0,137,27,1,0,0,0,138,139,5,5,0,0,139,29,1,0,0,0,140,141,5,4,0,0,141,
31,1,0,0,0,142,143,5,6,0,0,143,33,1,0,0,0,144,145,5,7,0,0,145,35,1,0,0,0,
146,147,5,8,0,0,147,37,1,0,0,0,148,149,5,9,0,0,149,39,1,0,0,0,150,151,5,
10,0,0,151,41,1,0,0,0,152,153,5,12,0,0,153,154,5,20,0,0,154,155,5,13,0,0,
155,43,1,0,0,0,156,157,5,12,0,0,157,158,5,20,0,0,158,159,5,22,0,0,159,160,
5,13,0,0,160,45,1,0,0,0,161,162,5,12,0,0,162,163,5,22,0,0,163,164,5,20,0,
0,164,165,5,13,0,0,165,47,1,0,0,0,166,167,5,12,0,0,167,168,5,20,0,0,168,
169,5,22,0,0,169,170,5,20,0,0,170,171,5,13,0,0,171,49,1,0,0,0,172,173,5,
18,0,0,173,174,5,14,0,0,174,175,3,14,7,0,175,176,5,15,0,0,176,51,1,0,0,0,
177,178,5,19,0,0,178,180,5,16,0,0,179,181,5,21,0,0,180,179,1,0,0,0,180,181,
1,0,0,0,181,182,1,0,0,0,182,184,5,34,0,0,183,185,5,21,0,0,184,183,1,0,0,
0,184,185,1,0,0,0,185,186,1,0,0,0,186,187,5,17,0,0,187,53,1,0,0,0,13,57,
64,74,90,96,103,111,119,123,127,136,180,184];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class PestParser extends antlr4.Parser {

    static grammarFileName = "PestParser.g4";
    static literalNames = [ null, "'_'", "'@'", "'$'", "'!'", "'&'", "'~'", 
                            "'|'", "'?'", "'*'", "'+'", "'='", "'{'", "'}'", 
                            "'('", "')'", "'['", "']'", "'PUSH'", "'PEEK'", 
                            null, null, "','", null, null, null, null, null, 
                            null, null, null, null, "'\"'", "'''", "'..'" ];
    static symbolicNames = [ null, "UNDERSCORE", "AT", "DOLLAR", "NOT", 
                             "AMP", "TILDE", "VBAR", "QUESTION", "STAR", 
                             "PLUS", "ASSIGNMENT_OPERATOR", "OPENING_BRACE", 
                             "CLOSING_BRACE", "OPENING_PAREN", "CLOSING_PAREN", 
                             "OPENING_BRACK", "CLOSING_BRACK", "PUSH", "PEEK", 
                             "NUMBER", "INTEGER", "COMMA", "IDENTIFIER", 
                             "STRING", "INSENSITIVE_STRING", "RANGE", "CHARACTER", 
                             "ESCAPE", "CODE", "UNICODE", "HEX_DIGIT", "QUOTE", 
                             "SINGLE_QUOTE", "RANGE_OPERATOR", "WHITESPACE", 
                             "BLOCK_COMMENT", "COMMENT" ];
    static ruleNames = [ "grammar_rules", "grammar_rule", "modifier", "silent_modifier", 
                         "atomic_modifier", "compound_atomic_modifier", 
                         "non_atomic_modifier", "expression", "term", "node", 
                         "terminal", "prefix_operator", "infix_operator", 
                         "postfix_operator", "positive_predicate_operator", 
                         "negative_predicate_operator", "sequence_operator", 
                         "choice_operator", "optional_operator", "repeat_operator", 
                         "repeat_once_operator", "repeat_exact", "repeat_min", 
                         "repeat_max", "repeat_min_max", "push", "peek_slice" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = PestParser.ruleNames;
        this.literalNames = PestParser.literalNames;
        this.symbolicNames = PestParser.symbolicNames;
    }



	grammar_rules() {
	    let localctx = new Grammar_rulesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, PestParser.RULE_grammar_rules);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 54;
	            this.grammar_rule();
	            this.state = 57; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===23);
	        this.state = 59;
	        this.match(PestParser.EOF);
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



	grammar_rule() {
	    let localctx = new Grammar_ruleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, PestParser.RULE_grammar_rule);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(PestParser.IDENTIFIER);
	        this.state = 62;
	        this.match(PestParser.ASSIGNMENT_OPERATOR);
	        this.state = 64;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 30) !== 0)) {
	            this.state = 63;
	            this.modifier();
	        }

	        this.state = 66;
	        this.match(PestParser.OPENING_BRACE);
	        this.state = 67;
	        this.expression();
	        this.state = 68;
	        this.match(PestParser.CLOSING_BRACE);
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



	modifier() {
	    let localctx = new ModifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, PestParser.RULE_modifier);
	    try {
	        this.state = 74;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 70;
	            this.silent_modifier();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 71;
	            this.atomic_modifier();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 72;
	            this.compound_atomic_modifier();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 73;
	            this.non_atomic_modifier();
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



	silent_modifier() {
	    let localctx = new Silent_modifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, PestParser.RULE_silent_modifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.match(PestParser.UNDERSCORE);
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



	atomic_modifier() {
	    let localctx = new Atomic_modifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, PestParser.RULE_atomic_modifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.match(PestParser.AT);
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



	compound_atomic_modifier() {
	    let localctx = new Compound_atomic_modifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, PestParser.RULE_compound_atomic_modifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.match(PestParser.DOLLAR);
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



	non_atomic_modifier() {
	    let localctx = new Non_atomic_modifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, PestParser.RULE_non_atomic_modifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.match(PestParser.NOT);
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
	    this.enterRule(localctx, 14, PestParser.RULE_expression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.term();
	        this.state = 90;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6 || _la===7) {
	            this.state = 85;
	            this.infix_operator();
	            this.state = 86;
	            this.term();
	            this.state = 92;
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



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, PestParser.RULE_term);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4 || _la===5) {
	            this.state = 93;
	            this.prefix_operator();
	            this.state = 98;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 99;
	        this.node();
	        this.state = 103;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 5888) !== 0)) {
	            this.state = 100;
	            this.postfix_operator();
	            this.state = 105;
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



	node() {
	    let localctx = new NodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, PestParser.RULE_node);
	    try {
	        this.state = 111;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 106;
	            this.match(PestParser.OPENING_PAREN);
	            this.state = 107;
	            this.expression();
	            this.state = 108;
	            this.match(PestParser.CLOSING_PAREN);
	            break;
	        case 18:
	        case 19:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 110;
	            this.terminal();
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



	terminal() {
	    let localctx = new TerminalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, PestParser.RULE_terminal);
	    try {
	        this.state = 119;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 113;
	            this.push();
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 114;
	            this.peek_slice();
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 115;
	            this.match(PestParser.IDENTIFIER);
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 116;
	            this.match(PestParser.STRING);
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 117;
	            this.match(PestParser.INSENSITIVE_STRING);
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 118;
	            this.match(PestParser.RANGE);
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



	prefix_operator() {
	    let localctx = new Prefix_operatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, PestParser.RULE_prefix_operator);
	    try {
	        this.state = 123;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 121;
	            this.positive_predicate_operator();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 122;
	            this.negative_predicate_operator();
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



	infix_operator() {
	    let localctx = new Infix_operatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, PestParser.RULE_infix_operator);
	    try {
	        this.state = 127;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 125;
	            this.sequence_operator();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 126;
	            this.choice_operator();
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



	postfix_operator() {
	    let localctx = new Postfix_operatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, PestParser.RULE_postfix_operator);
	    try {
	        this.state = 136;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 129;
	            this.optional_operator();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 130;
	            this.repeat_operator();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 131;
	            this.repeat_once_operator();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 132;
	            this.repeat_exact();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 133;
	            this.repeat_min();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 134;
	            this.repeat_max();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 135;
	            this.repeat_min_max();
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



	positive_predicate_operator() {
	    let localctx = new Positive_predicate_operatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, PestParser.RULE_positive_predicate_operator);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        this.match(PestParser.AMP);
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



	negative_predicate_operator() {
	    let localctx = new Negative_predicate_operatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, PestParser.RULE_negative_predicate_operator);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        this.match(PestParser.NOT);
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



	sequence_operator() {
	    let localctx = new Sequence_operatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, PestParser.RULE_sequence_operator);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 142;
	        this.match(PestParser.TILDE);
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



	choice_operator() {
	    let localctx = new Choice_operatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, PestParser.RULE_choice_operator);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        this.match(PestParser.VBAR);
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



	optional_operator() {
	    let localctx = new Optional_operatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, PestParser.RULE_optional_operator);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        this.match(PestParser.QUESTION);
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



	repeat_operator() {
	    let localctx = new Repeat_operatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, PestParser.RULE_repeat_operator);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 148;
	        this.match(PestParser.STAR);
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



	repeat_once_operator() {
	    let localctx = new Repeat_once_operatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, PestParser.RULE_repeat_once_operator);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 150;
	        this.match(PestParser.PLUS);
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



	repeat_exact() {
	    let localctx = new Repeat_exactContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, PestParser.RULE_repeat_exact);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
	        this.match(PestParser.OPENING_BRACE);
	        this.state = 153;
	        this.match(PestParser.NUMBER);
	        this.state = 154;
	        this.match(PestParser.CLOSING_BRACE);
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



	repeat_min() {
	    let localctx = new Repeat_minContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, PestParser.RULE_repeat_min);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
	        this.match(PestParser.OPENING_BRACE);
	        this.state = 157;
	        this.match(PestParser.NUMBER);
	        this.state = 158;
	        this.match(PestParser.COMMA);
	        this.state = 159;
	        this.match(PestParser.CLOSING_BRACE);
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



	repeat_max() {
	    let localctx = new Repeat_maxContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, PestParser.RULE_repeat_max);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 161;
	        this.match(PestParser.OPENING_BRACE);
	        this.state = 162;
	        this.match(PestParser.COMMA);
	        this.state = 163;
	        this.match(PestParser.NUMBER);
	        this.state = 164;
	        this.match(PestParser.CLOSING_BRACE);
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



	repeat_min_max() {
	    let localctx = new Repeat_min_maxContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, PestParser.RULE_repeat_min_max);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 166;
	        this.match(PestParser.OPENING_BRACE);
	        this.state = 167;
	        this.match(PestParser.NUMBER);
	        this.state = 168;
	        this.match(PestParser.COMMA);
	        this.state = 169;
	        this.match(PestParser.NUMBER);
	        this.state = 170;
	        this.match(PestParser.CLOSING_BRACE);
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



	push() {
	    let localctx = new PushContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, PestParser.RULE_push);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 172;
	        this.match(PestParser.PUSH);
	        this.state = 173;
	        this.match(PestParser.OPENING_PAREN);
	        this.state = 174;
	        this.expression();
	        this.state = 175;
	        this.match(PestParser.CLOSING_PAREN);
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



	peek_slice() {
	    let localctx = new Peek_sliceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, PestParser.RULE_peek_slice);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 177;
	        this.match(PestParser.PEEK);
	        this.state = 178;
	        this.match(PestParser.OPENING_BRACK);
	        this.state = 180;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 179;
	            this.match(PestParser.INTEGER);
	        }

	        this.state = 182;
	        this.match(PestParser.RANGE_OPERATOR);
	        this.state = 184;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 183;
	            this.match(PestParser.INTEGER);
	        }

	        this.state = 186;
	        this.match(PestParser.CLOSING_BRACK);
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

PestParser.EOF = antlr4.Token.EOF;
PestParser.UNDERSCORE = 1;
PestParser.AT = 2;
PestParser.DOLLAR = 3;
PestParser.NOT = 4;
PestParser.AMP = 5;
PestParser.TILDE = 6;
PestParser.VBAR = 7;
PestParser.QUESTION = 8;
PestParser.STAR = 9;
PestParser.PLUS = 10;
PestParser.ASSIGNMENT_OPERATOR = 11;
PestParser.OPENING_BRACE = 12;
PestParser.CLOSING_BRACE = 13;
PestParser.OPENING_PAREN = 14;
PestParser.CLOSING_PAREN = 15;
PestParser.OPENING_BRACK = 16;
PestParser.CLOSING_BRACK = 17;
PestParser.PUSH = 18;
PestParser.PEEK = 19;
PestParser.NUMBER = 20;
PestParser.INTEGER = 21;
PestParser.COMMA = 22;
PestParser.IDENTIFIER = 23;
PestParser.STRING = 24;
PestParser.INSENSITIVE_STRING = 25;
PestParser.RANGE = 26;
PestParser.CHARACTER = 27;
PestParser.ESCAPE = 28;
PestParser.CODE = 29;
PestParser.UNICODE = 30;
PestParser.HEX_DIGIT = 31;
PestParser.QUOTE = 32;
PestParser.SINGLE_QUOTE = 33;
PestParser.RANGE_OPERATOR = 34;
PestParser.WHITESPACE = 35;
PestParser.BLOCK_COMMENT = 36;
PestParser.COMMENT = 37;

PestParser.RULE_grammar_rules = 0;
PestParser.RULE_grammar_rule = 1;
PestParser.RULE_modifier = 2;
PestParser.RULE_silent_modifier = 3;
PestParser.RULE_atomic_modifier = 4;
PestParser.RULE_compound_atomic_modifier = 5;
PestParser.RULE_non_atomic_modifier = 6;
PestParser.RULE_expression = 7;
PestParser.RULE_term = 8;
PestParser.RULE_node = 9;
PestParser.RULE_terminal = 10;
PestParser.RULE_prefix_operator = 11;
PestParser.RULE_infix_operator = 12;
PestParser.RULE_postfix_operator = 13;
PestParser.RULE_positive_predicate_operator = 14;
PestParser.RULE_negative_predicate_operator = 15;
PestParser.RULE_sequence_operator = 16;
PestParser.RULE_choice_operator = 17;
PestParser.RULE_optional_operator = 18;
PestParser.RULE_repeat_operator = 19;
PestParser.RULE_repeat_once_operator = 20;
PestParser.RULE_repeat_exact = 21;
PestParser.RULE_repeat_min = 22;
PestParser.RULE_repeat_max = 23;
PestParser.RULE_repeat_min_max = 24;
PestParser.RULE_push = 25;
PestParser.RULE_peek_slice = 26;

class Grammar_rulesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PestParser.RULE_grammar_rules;
    }

	EOF() {
	    return this.getToken(PestParser.EOF, 0);
	};

	grammar_rule = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Grammar_ruleContext);
	    } else {
	        return this.getTypedRuleContext(Grammar_ruleContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.enterGrammar_rules(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.exitGrammar_rules(this);
		}
	}


}



class Grammar_ruleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PestParser.RULE_grammar_rule;
    }

	IDENTIFIER() {
	    return this.getToken(PestParser.IDENTIFIER, 0);
	};

	ASSIGNMENT_OPERATOR() {
	    return this.getToken(PestParser.ASSIGNMENT_OPERATOR, 0);
	};

	OPENING_BRACE() {
	    return this.getToken(PestParser.OPENING_BRACE, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CLOSING_BRACE() {
	    return this.getToken(PestParser.CLOSING_BRACE, 0);
	};

	modifier() {
	    return this.getTypedRuleContext(ModifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.enterGrammar_rule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.exitGrammar_rule(this);
		}
	}


}



class ModifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PestParser.RULE_modifier;
    }

	silent_modifier() {
	    return this.getTypedRuleContext(Silent_modifierContext,0);
	};

	atomic_modifier() {
	    return this.getTypedRuleContext(Atomic_modifierContext,0);
	};

	compound_atomic_modifier() {
	    return this.getTypedRuleContext(Compound_atomic_modifierContext,0);
	};

	non_atomic_modifier() {
	    return this.getTypedRuleContext(Non_atomic_modifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.enterModifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.exitModifier(this);
		}
	}


}



class Silent_modifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PestParser.RULE_silent_modifier;
    }

	UNDERSCORE() {
	    return this.getToken(PestParser.UNDERSCORE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.enterSilent_modifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.exitSilent_modifier(this);
		}
	}


}



class Atomic_modifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PestParser.RULE_atomic_modifier;
    }

	AT() {
	    return this.getToken(PestParser.AT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.enterAtomic_modifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.exitAtomic_modifier(this);
		}
	}


}



class Compound_atomic_modifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PestParser.RULE_compound_atomic_modifier;
    }

	DOLLAR() {
	    return this.getToken(PestParser.DOLLAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.enterCompound_atomic_modifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.exitCompound_atomic_modifier(this);
		}
	}


}



class Non_atomic_modifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PestParser.RULE_non_atomic_modifier;
    }

	NOT() {
	    return this.getToken(PestParser.NOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.enterNon_atomic_modifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.exitNon_atomic_modifier(this);
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
        this.ruleIndex = PestParser.RULE_expression;
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

	infix_operator = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Infix_operatorContext);
	    } else {
	        return this.getTypedRuleContext(Infix_operatorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.exitExpression(this);
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
        this.ruleIndex = PestParser.RULE_term;
    }

	node() {
	    return this.getTypedRuleContext(NodeContext,0);
	};

	prefix_operator = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Prefix_operatorContext);
	    } else {
	        return this.getTypedRuleContext(Prefix_operatorContext,i);
	    }
	};

	postfix_operator = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Postfix_operatorContext);
	    } else {
	        return this.getTypedRuleContext(Postfix_operatorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.exitTerm(this);
		}
	}


}



class NodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PestParser.RULE_node;
    }

	OPENING_PAREN() {
	    return this.getToken(PestParser.OPENING_PAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CLOSING_PAREN() {
	    return this.getToken(PestParser.CLOSING_PAREN, 0);
	};

	terminal() {
	    return this.getTypedRuleContext(TerminalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.enterNode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.exitNode(this);
		}
	}


}



class TerminalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PestParser.RULE_terminal;
    }

	push() {
	    return this.getTypedRuleContext(PushContext,0);
	};

	peek_slice() {
	    return this.getTypedRuleContext(Peek_sliceContext,0);
	};

	IDENTIFIER() {
	    return this.getToken(PestParser.IDENTIFIER, 0);
	};

	STRING() {
	    return this.getToken(PestParser.STRING, 0);
	};

	INSENSITIVE_STRING() {
	    return this.getToken(PestParser.INSENSITIVE_STRING, 0);
	};

	RANGE() {
	    return this.getToken(PestParser.RANGE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.enterTerminal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.exitTerminal(this);
		}
	}


}



class Prefix_operatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PestParser.RULE_prefix_operator;
    }

	positive_predicate_operator() {
	    return this.getTypedRuleContext(Positive_predicate_operatorContext,0);
	};

	negative_predicate_operator() {
	    return this.getTypedRuleContext(Negative_predicate_operatorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.enterPrefix_operator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.exitPrefix_operator(this);
		}
	}


}



class Infix_operatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PestParser.RULE_infix_operator;
    }

	sequence_operator() {
	    return this.getTypedRuleContext(Sequence_operatorContext,0);
	};

	choice_operator() {
	    return this.getTypedRuleContext(Choice_operatorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.enterInfix_operator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.exitInfix_operator(this);
		}
	}


}



class Postfix_operatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PestParser.RULE_postfix_operator;
    }

	optional_operator() {
	    return this.getTypedRuleContext(Optional_operatorContext,0);
	};

	repeat_operator() {
	    return this.getTypedRuleContext(Repeat_operatorContext,0);
	};

	repeat_once_operator() {
	    return this.getTypedRuleContext(Repeat_once_operatorContext,0);
	};

	repeat_exact() {
	    return this.getTypedRuleContext(Repeat_exactContext,0);
	};

	repeat_min() {
	    return this.getTypedRuleContext(Repeat_minContext,0);
	};

	repeat_max() {
	    return this.getTypedRuleContext(Repeat_maxContext,0);
	};

	repeat_min_max() {
	    return this.getTypedRuleContext(Repeat_min_maxContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.enterPostfix_operator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.exitPostfix_operator(this);
		}
	}


}



class Positive_predicate_operatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PestParser.RULE_positive_predicate_operator;
    }

	AMP() {
	    return this.getToken(PestParser.AMP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.enterPositive_predicate_operator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.exitPositive_predicate_operator(this);
		}
	}


}



class Negative_predicate_operatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PestParser.RULE_negative_predicate_operator;
    }

	NOT() {
	    return this.getToken(PestParser.NOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.enterNegative_predicate_operator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.exitNegative_predicate_operator(this);
		}
	}


}



class Sequence_operatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PestParser.RULE_sequence_operator;
    }

	TILDE() {
	    return this.getToken(PestParser.TILDE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.enterSequence_operator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.exitSequence_operator(this);
		}
	}


}



class Choice_operatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PestParser.RULE_choice_operator;
    }

	VBAR() {
	    return this.getToken(PestParser.VBAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.enterChoice_operator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.exitChoice_operator(this);
		}
	}


}



class Optional_operatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PestParser.RULE_optional_operator;
    }

	QUESTION() {
	    return this.getToken(PestParser.QUESTION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.enterOptional_operator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.exitOptional_operator(this);
		}
	}


}



class Repeat_operatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PestParser.RULE_repeat_operator;
    }

	STAR() {
	    return this.getToken(PestParser.STAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.enterRepeat_operator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.exitRepeat_operator(this);
		}
	}


}



class Repeat_once_operatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PestParser.RULE_repeat_once_operator;
    }

	PLUS() {
	    return this.getToken(PestParser.PLUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.enterRepeat_once_operator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.exitRepeat_once_operator(this);
		}
	}


}



class Repeat_exactContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PestParser.RULE_repeat_exact;
    }

	OPENING_BRACE() {
	    return this.getToken(PestParser.OPENING_BRACE, 0);
	};

	NUMBER() {
	    return this.getToken(PestParser.NUMBER, 0);
	};

	CLOSING_BRACE() {
	    return this.getToken(PestParser.CLOSING_BRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.enterRepeat_exact(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.exitRepeat_exact(this);
		}
	}


}



class Repeat_minContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PestParser.RULE_repeat_min;
    }

	OPENING_BRACE() {
	    return this.getToken(PestParser.OPENING_BRACE, 0);
	};

	NUMBER() {
	    return this.getToken(PestParser.NUMBER, 0);
	};

	COMMA() {
	    return this.getToken(PestParser.COMMA, 0);
	};

	CLOSING_BRACE() {
	    return this.getToken(PestParser.CLOSING_BRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.enterRepeat_min(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.exitRepeat_min(this);
		}
	}


}



class Repeat_maxContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PestParser.RULE_repeat_max;
    }

	OPENING_BRACE() {
	    return this.getToken(PestParser.OPENING_BRACE, 0);
	};

	COMMA() {
	    return this.getToken(PestParser.COMMA, 0);
	};

	NUMBER() {
	    return this.getToken(PestParser.NUMBER, 0);
	};

	CLOSING_BRACE() {
	    return this.getToken(PestParser.CLOSING_BRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.enterRepeat_max(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.exitRepeat_max(this);
		}
	}


}



class Repeat_min_maxContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PestParser.RULE_repeat_min_max;
    }

	OPENING_BRACE() {
	    return this.getToken(PestParser.OPENING_BRACE, 0);
	};

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PestParser.NUMBER);
	    } else {
	        return this.getToken(PestParser.NUMBER, i);
	    }
	};


	COMMA() {
	    return this.getToken(PestParser.COMMA, 0);
	};

	CLOSING_BRACE() {
	    return this.getToken(PestParser.CLOSING_BRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.enterRepeat_min_max(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.exitRepeat_min_max(this);
		}
	}


}



class PushContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PestParser.RULE_push;
    }

	PUSH() {
	    return this.getToken(PestParser.PUSH, 0);
	};

	OPENING_PAREN() {
	    return this.getToken(PestParser.OPENING_PAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CLOSING_PAREN() {
	    return this.getToken(PestParser.CLOSING_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.enterPush(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.exitPush(this);
		}
	}


}



class Peek_sliceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PestParser.RULE_peek_slice;
    }

	PEEK() {
	    return this.getToken(PestParser.PEEK, 0);
	};

	OPENING_BRACK() {
	    return this.getToken(PestParser.OPENING_BRACK, 0);
	};

	RANGE_OPERATOR() {
	    return this.getToken(PestParser.RANGE_OPERATOR, 0);
	};

	CLOSING_BRACK() {
	    return this.getToken(PestParser.CLOSING_BRACK, 0);
	};

	INTEGER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PestParser.INTEGER);
	    } else {
	        return this.getToken(PestParser.INTEGER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.enterPeek_slice(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PestParserListener ) {
	        listener.exitPeek_slice(this);
		}
	}


}




PestParser.Grammar_rulesContext = Grammar_rulesContext; 
PestParser.Grammar_ruleContext = Grammar_ruleContext; 
PestParser.ModifierContext = ModifierContext; 
PestParser.Silent_modifierContext = Silent_modifierContext; 
PestParser.Atomic_modifierContext = Atomic_modifierContext; 
PestParser.Compound_atomic_modifierContext = Compound_atomic_modifierContext; 
PestParser.Non_atomic_modifierContext = Non_atomic_modifierContext; 
PestParser.ExpressionContext = ExpressionContext; 
PestParser.TermContext = TermContext; 
PestParser.NodeContext = NodeContext; 
PestParser.TerminalContext = TerminalContext; 
PestParser.Prefix_operatorContext = Prefix_operatorContext; 
PestParser.Infix_operatorContext = Infix_operatorContext; 
PestParser.Postfix_operatorContext = Postfix_operatorContext; 
PestParser.Positive_predicate_operatorContext = Positive_predicate_operatorContext; 
PestParser.Negative_predicate_operatorContext = Negative_predicate_operatorContext; 
PestParser.Sequence_operatorContext = Sequence_operatorContext; 
PestParser.Choice_operatorContext = Choice_operatorContext; 
PestParser.Optional_operatorContext = Optional_operatorContext; 
PestParser.Repeat_operatorContext = Repeat_operatorContext; 
PestParser.Repeat_once_operatorContext = Repeat_once_operatorContext; 
PestParser.Repeat_exactContext = Repeat_exactContext; 
PestParser.Repeat_minContext = Repeat_minContext; 
PestParser.Repeat_maxContext = Repeat_maxContext; 
PestParser.Repeat_min_maxContext = Repeat_min_maxContext; 
PestParser.PushContext = PushContext; 
PestParser.Peek_sliceContext = Peek_sliceContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
