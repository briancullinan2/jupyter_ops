// Generated from Resources/Parsers/suokif/SUOKIF.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import SUOKIFListener from './SUOKIFListener.js';
const serializedATN = [4,1,17,135,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,5,0,20,8,0,10,0,12,0,23,9,0,1,1,1,
1,1,1,1,1,1,1,1,1,3,1,31,8,1,1,2,1,2,3,2,35,8,2,1,3,1,3,1,3,4,3,40,8,3,11,
3,12,3,41,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,3,4,52,8,4,1,5,1,5,1,5,1,5,1,5,
1,5,1,6,1,6,1,6,4,6,63,8,6,11,6,12,6,64,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,
1,7,1,7,4,7,77,8,7,11,7,12,7,78,1,7,1,7,1,7,1,7,1,7,4,7,86,8,7,11,7,12,7,
87,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,
7,107,8,7,1,8,1,8,1,8,1,8,4,8,113,8,8,11,8,12,8,114,1,8,1,8,1,8,1,8,1,8,
1,8,1,8,1,8,4,8,125,8,8,11,8,12,8,126,1,8,1,8,1,8,1,8,3,8,133,8,8,1,8,0,
0,9,0,2,4,6,8,10,12,14,16,0,1,2,0,6,6,8,8,148,0,21,1,0,0,0,2,30,1,0,0,0,
4,34,1,0,0,0,6,36,1,0,0,0,8,51,1,0,0,0,10,53,1,0,0,0,12,59,1,0,0,0,14,106,
1,0,0,0,16,132,1,0,0,0,18,20,3,8,4,0,19,18,1,0,0,0,20,23,1,0,0,0,21,19,1,
0,0,0,21,22,1,0,0,0,22,1,1,0,0,0,23,21,1,0,0,0,24,31,5,8,0,0,25,31,5,6,0,
0,26,31,5,7,0,0,27,31,3,6,3,0,28,31,5,9,0,0,29,31,3,8,4,0,30,24,1,0,0,0,
30,25,1,0,0,0,30,26,1,0,0,0,30,27,1,0,0,0,30,28,1,0,0,0,30,29,1,0,0,0,31,
3,1,0,0,0,32,35,3,8,4,0,33,35,3,2,1,0,34,32,1,0,0,0,34,33,1,0,0,0,35,5,1,
0,0,0,36,37,5,12,0,0,37,39,5,6,0,0,38,40,3,4,2,0,39,38,1,0,0,0,40,41,1,0,
0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,43,1,0,0,0,43,44,5,13,0,0,44,7,1,0,0,
0,45,52,5,6,0,0,46,52,3,10,5,0,47,52,3,12,6,0,48,52,3,14,7,0,49,52,3,16,
8,0,50,52,5,8,0,0,51,45,1,0,0,0,51,46,1,0,0,0,51,47,1,0,0,0,51,48,1,0,0,
0,51,49,1,0,0,0,51,50,1,0,0,0,52,9,1,0,0,0,53,54,5,12,0,0,54,55,5,14,0,0,
55,56,3,2,1,0,56,57,3,2,1,0,57,58,5,13,0,0,58,11,1,0,0,0,59,60,5,12,0,0,
60,62,7,0,0,0,61,63,3,4,2,0,62,61,1,0,0,0,63,64,1,0,0,0,64,62,1,0,0,0,64,
65,1,0,0,0,65,66,1,0,0,0,66,67,5,13,0,0,67,13,1,0,0,0,68,69,5,12,0,0,69,
70,5,1,0,0,70,71,3,8,4,0,71,72,5,13,0,0,72,107,1,0,0,0,73,74,5,12,0,0,74,
76,5,2,0,0,75,77,3,8,4,0,76,75,1,0,0,0,77,78,1,0,0,0,78,76,1,0,0,0,78,79,
1,0,0,0,79,80,1,0,0,0,80,81,5,13,0,0,81,107,1,0,0,0,82,83,5,12,0,0,83,85,
5,3,0,0,84,86,3,8,4,0,85,84,1,0,0,0,86,87,1,0,0,0,87,85,1,0,0,0,87,88,1,
0,0,0,88,89,1,0,0,0,89,90,5,13,0,0,90,107,1,0,0,0,91,92,5,12,0,0,92,93,5,
14,0,0,93,94,5,15,0,0,94,95,3,8,4,0,95,96,3,8,4,0,96,97,5,13,0,0,97,107,
1,0,0,0,98,99,5,12,0,0,99,100,5,16,0,0,100,101,5,14,0,0,101,102,5,15,0,0,
102,103,3,8,4,0,103,104,3,8,4,0,104,105,5,13,0,0,105,107,1,0,0,0,106,68,
1,0,0,0,106,73,1,0,0,0,106,82,1,0,0,0,106,91,1,0,0,0,106,98,1,0,0,0,107,
15,1,0,0,0,108,109,5,12,0,0,109,110,5,4,0,0,110,112,5,12,0,0,111,113,5,8,
0,0,112,111,1,0,0,0,113,114,1,0,0,0,114,112,1,0,0,0,114,115,1,0,0,0,115,
116,1,0,0,0,116,117,5,13,0,0,117,118,3,8,4,0,118,119,5,13,0,0,119,133,1,
0,0,0,120,121,5,12,0,0,121,122,5,5,0,0,122,124,5,12,0,0,123,125,5,8,0,0,
124,123,1,0,0,0,125,126,1,0,0,0,126,124,1,0,0,0,126,127,1,0,0,0,127,128,
1,0,0,0,128,129,5,13,0,0,129,130,3,8,4,0,130,131,5,13,0,0,131,133,1,0,0,
0,132,108,1,0,0,0,132,120,1,0,0,0,133,17,1,0,0,0,12,21,30,34,41,51,64,78,
87,106,114,126,132];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class SUOKIFParser extends antlr4.Parser {

    static grammarFileName = "SUOKIF.g4";
    static literalNames = [ null, "'not'", "'and'", "'or'", "'forall'", 
                            "'exists'", null, null, null, null, null, null, 
                            "'('", "')'", "'='", "'>'", "'<'", "'?'" ];
    static symbolicNames = [ null, "NOT", "AND", "OR", "FORALL", "EXISTS", 
                             "WORD", "STRING", "VARIABLE", "NUMBER", "WHITE", 
                             "COMMENT", "LPAREN", "RPAREN", "ASSIGN", "GT", 
                             "LT", "QUESTION" ];
    static ruleNames = [ "top_level", "term", "argument", "funterm", "sentence", 
                         "equation", "relsent", "logsent", "quantsent" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SUOKIFParser.ruleNames;
        this.literalNames = SUOKIFParser.literalNames;
        this.symbolicNames = SUOKIFParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	top_level() {
	    let localctx = new Top_levelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SUOKIFParser.RULE_top_level);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SUOKIFParser.WORD) | (1 << SUOKIFParser.VARIABLE) | (1 << SUOKIFParser.LPAREN))) !== 0)) {
	            this.state = 18;
	            this.sentence();
	            this.state = 23;
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
	    this.enterRule(localctx, 2, SUOKIFParser.RULE_term);
	    try {
	        this.state = 30;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 24;
	            this.match(SUOKIFParser.VARIABLE);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 25;
	            this.match(SUOKIFParser.WORD);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 26;
	            this.match(SUOKIFParser.STRING);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 27;
	            this.funterm();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 28;
	            this.match(SUOKIFParser.NUMBER);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 29;
	            this.sentence();
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



	argument() {
	    let localctx = new ArgumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SUOKIFParser.RULE_argument);
	    try {
	        this.state = 34;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 32;
	            this.sentence();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 33;
	            this.term();
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



	funterm() {
	    let localctx = new FuntermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SUOKIFParser.RULE_funterm);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.match(SUOKIFParser.LPAREN);
	        this.state = 37;
	        this.match(SUOKIFParser.WORD);
	        this.state = 39; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 38;
	            this.argument();
	            this.state = 41; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SUOKIFParser.WORD) | (1 << SUOKIFParser.STRING) | (1 << SUOKIFParser.VARIABLE) | (1 << SUOKIFParser.NUMBER) | (1 << SUOKIFParser.LPAREN))) !== 0));
	        this.state = 43;
	        this.match(SUOKIFParser.RPAREN);
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



	sentence() {
	    let localctx = new SentenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SUOKIFParser.RULE_sentence);
	    try {
	        this.state = 51;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 45;
	            this.match(SUOKIFParser.WORD);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 46;
	            this.equation();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 47;
	            this.relsent();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 48;
	            this.logsent();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 49;
	            this.quantsent();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 50;
	            this.match(SUOKIFParser.VARIABLE);
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



	equation() {
	    let localctx = new EquationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SUOKIFParser.RULE_equation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(SUOKIFParser.LPAREN);
	        this.state = 54;
	        this.match(SUOKIFParser.ASSIGN);
	        this.state = 55;
	        this.term();
	        this.state = 56;
	        this.term();
	        this.state = 57;
	        this.match(SUOKIFParser.RPAREN);
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



	relsent() {
	    let localctx = new RelsentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SUOKIFParser.RULE_relsent);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.match(SUOKIFParser.LPAREN);
	        this.state = 60;
	        _la = this._input.LA(1);
	        if(!(_la===SUOKIFParser.WORD || _la===SUOKIFParser.VARIABLE)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 62; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 61;
	            this.argument();
	            this.state = 64; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SUOKIFParser.WORD) | (1 << SUOKIFParser.STRING) | (1 << SUOKIFParser.VARIABLE) | (1 << SUOKIFParser.NUMBER) | (1 << SUOKIFParser.LPAREN))) !== 0));
	        this.state = 66;
	        this.match(SUOKIFParser.RPAREN);
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



	logsent() {
	    let localctx = new LogsentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SUOKIFParser.RULE_logsent);
	    var _la = 0; // Token type
	    try {
	        this.state = 106;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 68;
	            this.match(SUOKIFParser.LPAREN);
	            this.state = 69;
	            this.match(SUOKIFParser.NOT);
	            this.state = 70;
	            this.sentence();
	            this.state = 71;
	            this.match(SUOKIFParser.RPAREN);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 73;
	            this.match(SUOKIFParser.LPAREN);
	            this.state = 74;
	            this.match(SUOKIFParser.AND);
	            this.state = 76; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 75;
	                this.sentence();
	                this.state = 78; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SUOKIFParser.WORD) | (1 << SUOKIFParser.VARIABLE) | (1 << SUOKIFParser.LPAREN))) !== 0));
	            this.state = 80;
	            this.match(SUOKIFParser.RPAREN);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 82;
	            this.match(SUOKIFParser.LPAREN);
	            this.state = 83;
	            this.match(SUOKIFParser.OR);
	            this.state = 85; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 84;
	                this.sentence();
	                this.state = 87; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SUOKIFParser.WORD) | (1 << SUOKIFParser.VARIABLE) | (1 << SUOKIFParser.LPAREN))) !== 0));
	            this.state = 89;
	            this.match(SUOKIFParser.RPAREN);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 91;
	            this.match(SUOKIFParser.LPAREN);
	            this.state = 92;
	            this.match(SUOKIFParser.ASSIGN);
	            this.state = 93;
	            this.match(SUOKIFParser.GT);
	            this.state = 94;
	            this.sentence();
	            this.state = 95;
	            this.sentence();
	            this.state = 96;
	            this.match(SUOKIFParser.RPAREN);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 98;
	            this.match(SUOKIFParser.LPAREN);
	            this.state = 99;
	            this.match(SUOKIFParser.LT);
	            this.state = 100;
	            this.match(SUOKIFParser.ASSIGN);
	            this.state = 101;
	            this.match(SUOKIFParser.GT);
	            this.state = 102;
	            this.sentence();
	            this.state = 103;
	            this.sentence();
	            this.state = 104;
	            this.match(SUOKIFParser.RPAREN);
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



	quantsent() {
	    let localctx = new QuantsentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, SUOKIFParser.RULE_quantsent);
	    var _la = 0; // Token type
	    try {
	        this.state = 132;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 108;
	            this.match(SUOKIFParser.LPAREN);
	            this.state = 109;
	            this.match(SUOKIFParser.FORALL);
	            this.state = 110;
	            this.match(SUOKIFParser.LPAREN);
	            this.state = 112; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 111;
	                this.match(SUOKIFParser.VARIABLE);
	                this.state = 114; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===SUOKIFParser.VARIABLE);
	            this.state = 116;
	            this.match(SUOKIFParser.RPAREN);
	            this.state = 117;
	            this.sentence();
	            this.state = 118;
	            this.match(SUOKIFParser.RPAREN);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 120;
	            this.match(SUOKIFParser.LPAREN);
	            this.state = 121;
	            this.match(SUOKIFParser.EXISTS);
	            this.state = 122;
	            this.match(SUOKIFParser.LPAREN);
	            this.state = 124; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 123;
	                this.match(SUOKIFParser.VARIABLE);
	                this.state = 126; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===SUOKIFParser.VARIABLE);
	            this.state = 128;
	            this.match(SUOKIFParser.RPAREN);
	            this.state = 129;
	            this.sentence();
	            this.state = 130;
	            this.match(SUOKIFParser.RPAREN);
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


}

SUOKIFParser.EOF = antlr4.Token.EOF;
SUOKIFParser.NOT = 1;
SUOKIFParser.AND = 2;
SUOKIFParser.OR = 3;
SUOKIFParser.FORALL = 4;
SUOKIFParser.EXISTS = 5;
SUOKIFParser.WORD = 6;
SUOKIFParser.STRING = 7;
SUOKIFParser.VARIABLE = 8;
SUOKIFParser.NUMBER = 9;
SUOKIFParser.WHITE = 10;
SUOKIFParser.COMMENT = 11;
SUOKIFParser.LPAREN = 12;
SUOKIFParser.RPAREN = 13;
SUOKIFParser.ASSIGN = 14;
SUOKIFParser.GT = 15;
SUOKIFParser.LT = 16;
SUOKIFParser.QUESTION = 17;

SUOKIFParser.RULE_top_level = 0;
SUOKIFParser.RULE_term = 1;
SUOKIFParser.RULE_argument = 2;
SUOKIFParser.RULE_funterm = 3;
SUOKIFParser.RULE_sentence = 4;
SUOKIFParser.RULE_equation = 5;
SUOKIFParser.RULE_relsent = 6;
SUOKIFParser.RULE_logsent = 7;
SUOKIFParser.RULE_quantsent = 8;

class Top_levelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SUOKIFParser.RULE_top_level;
    }

	sentence = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenceContext);
	    } else {
	        return this.getTypedRuleContext(SentenceContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SUOKIFListener ) {
	        listener.enterTop_level(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SUOKIFListener ) {
	        listener.exitTop_level(this);
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
        this.ruleIndex = SUOKIFParser.RULE_term;
    }

	VARIABLE() {
	    return this.getToken(SUOKIFParser.VARIABLE, 0);
	};

	WORD() {
	    return this.getToken(SUOKIFParser.WORD, 0);
	};

	STRING() {
	    return this.getToken(SUOKIFParser.STRING, 0);
	};

	funterm() {
	    return this.getTypedRuleContext(FuntermContext,0);
	};

	NUMBER() {
	    return this.getToken(SUOKIFParser.NUMBER, 0);
	};

	sentence() {
	    return this.getTypedRuleContext(SentenceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SUOKIFListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SUOKIFListener ) {
	        listener.exitTerm(this);
		}
	}


}



class ArgumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SUOKIFParser.RULE_argument;
    }

	sentence() {
	    return this.getTypedRuleContext(SentenceContext,0);
	};

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SUOKIFListener ) {
	        listener.enterArgument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SUOKIFListener ) {
	        listener.exitArgument(this);
		}
	}


}



class FuntermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SUOKIFParser.RULE_funterm;
    }

	LPAREN() {
	    return this.getToken(SUOKIFParser.LPAREN, 0);
	};

	WORD() {
	    return this.getToken(SUOKIFParser.WORD, 0);
	};

	RPAREN() {
	    return this.getToken(SUOKIFParser.RPAREN, 0);
	};

	argument = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgumentContext);
	    } else {
	        return this.getTypedRuleContext(ArgumentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SUOKIFListener ) {
	        listener.enterFunterm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SUOKIFListener ) {
	        listener.exitFunterm(this);
		}
	}


}



class SentenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SUOKIFParser.RULE_sentence;
    }

	WORD() {
	    return this.getToken(SUOKIFParser.WORD, 0);
	};

	equation() {
	    return this.getTypedRuleContext(EquationContext,0);
	};

	relsent() {
	    return this.getTypedRuleContext(RelsentContext,0);
	};

	logsent() {
	    return this.getTypedRuleContext(LogsentContext,0);
	};

	quantsent() {
	    return this.getTypedRuleContext(QuantsentContext,0);
	};

	VARIABLE() {
	    return this.getToken(SUOKIFParser.VARIABLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SUOKIFListener ) {
	        listener.enterSentence(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SUOKIFListener ) {
	        listener.exitSentence(this);
		}
	}


}



class EquationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SUOKIFParser.RULE_equation;
    }

	LPAREN() {
	    return this.getToken(SUOKIFParser.LPAREN, 0);
	};

	ASSIGN() {
	    return this.getToken(SUOKIFParser.ASSIGN, 0);
	};

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

	RPAREN() {
	    return this.getToken(SUOKIFParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SUOKIFListener ) {
	        listener.enterEquation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SUOKIFListener ) {
	        listener.exitEquation(this);
		}
	}


}



class RelsentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SUOKIFParser.RULE_relsent;
    }

	LPAREN() {
	    return this.getToken(SUOKIFParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(SUOKIFParser.RPAREN, 0);
	};

	WORD() {
	    return this.getToken(SUOKIFParser.WORD, 0);
	};

	VARIABLE() {
	    return this.getToken(SUOKIFParser.VARIABLE, 0);
	};

	argument = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgumentContext);
	    } else {
	        return this.getTypedRuleContext(ArgumentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SUOKIFListener ) {
	        listener.enterRelsent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SUOKIFListener ) {
	        listener.exitRelsent(this);
		}
	}


}



class LogsentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SUOKIFParser.RULE_logsent;
    }

	LPAREN() {
	    return this.getToken(SUOKIFParser.LPAREN, 0);
	};

	NOT() {
	    return this.getToken(SUOKIFParser.NOT, 0);
	};

	sentence = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenceContext);
	    } else {
	        return this.getTypedRuleContext(SentenceContext,i);
	    }
	};

	RPAREN() {
	    return this.getToken(SUOKIFParser.RPAREN, 0);
	};

	AND() {
	    return this.getToken(SUOKIFParser.AND, 0);
	};

	OR() {
	    return this.getToken(SUOKIFParser.OR, 0);
	};

	ASSIGN() {
	    return this.getToken(SUOKIFParser.ASSIGN, 0);
	};

	GT() {
	    return this.getToken(SUOKIFParser.GT, 0);
	};

	LT() {
	    return this.getToken(SUOKIFParser.LT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SUOKIFListener ) {
	        listener.enterLogsent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SUOKIFListener ) {
	        listener.exitLogsent(this);
		}
	}


}



class QuantsentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SUOKIFParser.RULE_quantsent;
    }

	LPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SUOKIFParser.LPAREN);
	    } else {
	        return this.getToken(SUOKIFParser.LPAREN, i);
	    }
	};


	FORALL() {
	    return this.getToken(SUOKIFParser.FORALL, 0);
	};

	RPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SUOKIFParser.RPAREN);
	    } else {
	        return this.getToken(SUOKIFParser.RPAREN, i);
	    }
	};


	sentence() {
	    return this.getTypedRuleContext(SentenceContext,0);
	};

	VARIABLE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SUOKIFParser.VARIABLE);
	    } else {
	        return this.getToken(SUOKIFParser.VARIABLE, i);
	    }
	};


	EXISTS() {
	    return this.getToken(SUOKIFParser.EXISTS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SUOKIFListener ) {
	        listener.enterQuantsent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SUOKIFListener ) {
	        listener.exitQuantsent(this);
		}
	}


}




SUOKIFParser.Top_levelContext = Top_levelContext; 
SUOKIFParser.TermContext = TermContext; 
SUOKIFParser.ArgumentContext = ArgumentContext; 
SUOKIFParser.FuntermContext = FuntermContext; 
SUOKIFParser.SentenceContext = SentenceContext; 
SUOKIFParser.EquationContext = EquationContext; 
SUOKIFParser.RelsentContext = RelsentContext; 
SUOKIFParser.LogsentContext = LogsentContext; 
SUOKIFParser.QuantsentContext = QuantsentContext; 
