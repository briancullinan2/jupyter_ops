// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/suokif/SUOKIF.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import SUOKIFListener from './SUOKIFListener.js';
const serializedATN = [4,1,17,137,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,5,0,20,8,0,10,0,12,0,23,9,0,1,0,1,
0,1,1,1,1,1,1,1,1,1,1,1,1,3,1,33,8,1,1,2,1,2,3,2,37,8,2,1,3,1,3,1,3,4,3,
42,8,3,11,3,12,3,43,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,3,4,54,8,4,1,5,1,5,1,
5,1,5,1,5,1,5,1,6,1,6,1,6,4,6,65,8,6,11,6,12,6,66,1,6,1,6,1,7,1,7,1,7,1,
7,1,7,1,7,1,7,1,7,4,7,79,8,7,11,7,12,7,80,1,7,1,7,1,7,1,7,1,7,4,7,88,8,7,
11,7,12,7,89,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
1,7,1,7,3,7,109,8,7,1,8,1,8,1,8,1,8,4,8,115,8,8,11,8,12,8,116,1,8,1,8,1,
8,1,8,1,8,1,8,1,8,1,8,4,8,127,8,8,11,8,12,8,128,1,8,1,8,1,8,1,8,3,8,135,
8,8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,1,2,0,6,6,8,8,150,0,21,1,0,0,0,2,32,
1,0,0,0,4,36,1,0,0,0,6,38,1,0,0,0,8,53,1,0,0,0,10,55,1,0,0,0,12,61,1,0,0,
0,14,108,1,0,0,0,16,134,1,0,0,0,18,20,3,8,4,0,19,18,1,0,0,0,20,23,1,0,0,
0,21,19,1,0,0,0,21,22,1,0,0,0,22,24,1,0,0,0,23,21,1,0,0,0,24,25,5,0,0,1,
25,1,1,0,0,0,26,33,5,8,0,0,27,33,5,6,0,0,28,33,5,7,0,0,29,33,3,6,3,0,30,
33,5,9,0,0,31,33,3,8,4,0,32,26,1,0,0,0,32,27,1,0,0,0,32,28,1,0,0,0,32,29,
1,0,0,0,32,30,1,0,0,0,32,31,1,0,0,0,33,3,1,0,0,0,34,37,3,8,4,0,35,37,3,2,
1,0,36,34,1,0,0,0,36,35,1,0,0,0,37,5,1,0,0,0,38,39,5,12,0,0,39,41,5,6,0,
0,40,42,3,4,2,0,41,40,1,0,0,0,42,43,1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,0,
44,45,1,0,0,0,45,46,5,13,0,0,46,7,1,0,0,0,47,54,5,6,0,0,48,54,3,10,5,0,49,
54,3,12,6,0,50,54,3,14,7,0,51,54,3,16,8,0,52,54,5,8,0,0,53,47,1,0,0,0,53,
48,1,0,0,0,53,49,1,0,0,0,53,50,1,0,0,0,53,51,1,0,0,0,53,52,1,0,0,0,54,9,
1,0,0,0,55,56,5,12,0,0,56,57,5,14,0,0,57,58,3,2,1,0,58,59,3,2,1,0,59,60,
5,13,0,0,60,11,1,0,0,0,61,62,5,12,0,0,62,64,7,0,0,0,63,65,3,4,2,0,64,63,
1,0,0,0,65,66,1,0,0,0,66,64,1,0,0,0,66,67,1,0,0,0,67,68,1,0,0,0,68,69,5,
13,0,0,69,13,1,0,0,0,70,71,5,12,0,0,71,72,5,1,0,0,72,73,3,8,4,0,73,74,5,
13,0,0,74,109,1,0,0,0,75,76,5,12,0,0,76,78,5,2,0,0,77,79,3,8,4,0,78,77,1,
0,0,0,79,80,1,0,0,0,80,78,1,0,0,0,80,81,1,0,0,0,81,82,1,0,0,0,82,83,5,13,
0,0,83,109,1,0,0,0,84,85,5,12,0,0,85,87,5,3,0,0,86,88,3,8,4,0,87,86,1,0,
0,0,88,89,1,0,0,0,89,87,1,0,0,0,89,90,1,0,0,0,90,91,1,0,0,0,91,92,5,13,0,
0,92,109,1,0,0,0,93,94,5,12,0,0,94,95,5,14,0,0,95,96,5,15,0,0,96,97,3,8,
4,0,97,98,3,8,4,0,98,99,5,13,0,0,99,109,1,0,0,0,100,101,5,12,0,0,101,102,
5,16,0,0,102,103,5,14,0,0,103,104,5,15,0,0,104,105,3,8,4,0,105,106,3,8,4,
0,106,107,5,13,0,0,107,109,1,0,0,0,108,70,1,0,0,0,108,75,1,0,0,0,108,84,
1,0,0,0,108,93,1,0,0,0,108,100,1,0,0,0,109,15,1,0,0,0,110,111,5,12,0,0,111,
112,5,4,0,0,112,114,5,12,0,0,113,115,5,8,0,0,114,113,1,0,0,0,115,116,1,0,
0,0,116,114,1,0,0,0,116,117,1,0,0,0,117,118,1,0,0,0,118,119,5,13,0,0,119,
120,3,8,4,0,120,121,5,13,0,0,121,135,1,0,0,0,122,123,5,12,0,0,123,124,5,
5,0,0,124,126,5,12,0,0,125,127,5,8,0,0,126,125,1,0,0,0,127,128,1,0,0,0,128,
126,1,0,0,0,128,129,1,0,0,0,129,130,1,0,0,0,130,131,5,13,0,0,131,132,3,8,
4,0,132,133,5,13,0,0,133,135,1,0,0,0,134,110,1,0,0,0,134,122,1,0,0,0,135,
17,1,0,0,0,12,21,32,36,43,53,66,80,89,108,116,128,134];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

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



	top_level() {
	    let localctx = new Top_levelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SUOKIFParser.RULE_top_level);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4416) !== 0)) {
	            this.state = 18;
	            this.sentence();
	            this.state = 23;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 24;
	        this.match(SUOKIFParser.EOF);
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
	        this.state = 32;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 26;
	            this.match(SUOKIFParser.VARIABLE);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 27;
	            this.match(SUOKIFParser.WORD);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 28;
	            this.match(SUOKIFParser.STRING);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 29;
	            this.funterm();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 30;
	            this.match(SUOKIFParser.NUMBER);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 31;
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
	        this.state = 36;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 34;
	            this.sentence();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 35;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.match(SUOKIFParser.LPAREN);
	        this.state = 39;
	        this.match(SUOKIFParser.WORD);
	        this.state = 41; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 40;
	            this.argument();
	            this.state = 43; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 5056) !== 0));
	        this.state = 45;
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
	        this.state = 53;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 47;
	            this.match(SUOKIFParser.WORD);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 48;
	            this.equation();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 49;
	            this.relsent();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 50;
	            this.logsent();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 51;
	            this.quantsent();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 52;
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
	        this.state = 55;
	        this.match(SUOKIFParser.LPAREN);
	        this.state = 56;
	        this.match(SUOKIFParser.ASSIGN);
	        this.state = 57;
	        this.term();
	        this.state = 58;
	        this.term();
	        this.state = 59;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(SUOKIFParser.LPAREN);
	        this.state = 62;
	        _la = this._input.LA(1);
	        if(!(_la===6 || _la===8)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 64; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 63;
	            this.argument();
	            this.state = 66; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 5056) !== 0));
	        this.state = 68;
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
	    var _la = 0;
	    try {
	        this.state = 108;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 70;
	            this.match(SUOKIFParser.LPAREN);
	            this.state = 71;
	            this.match(SUOKIFParser.NOT);
	            this.state = 72;
	            this.sentence();
	            this.state = 73;
	            this.match(SUOKIFParser.RPAREN);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 75;
	            this.match(SUOKIFParser.LPAREN);
	            this.state = 76;
	            this.match(SUOKIFParser.AND);
	            this.state = 78; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 77;
	                this.sentence();
	                this.state = 80; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4416) !== 0));
	            this.state = 82;
	            this.match(SUOKIFParser.RPAREN);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 84;
	            this.match(SUOKIFParser.LPAREN);
	            this.state = 85;
	            this.match(SUOKIFParser.OR);
	            this.state = 87; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 86;
	                this.sentence();
	                this.state = 89; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4416) !== 0));
	            this.state = 91;
	            this.match(SUOKIFParser.RPAREN);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 93;
	            this.match(SUOKIFParser.LPAREN);
	            this.state = 94;
	            this.match(SUOKIFParser.ASSIGN);
	            this.state = 95;
	            this.match(SUOKIFParser.GT);
	            this.state = 96;
	            this.sentence();
	            this.state = 97;
	            this.sentence();
	            this.state = 98;
	            this.match(SUOKIFParser.RPAREN);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 100;
	            this.match(SUOKIFParser.LPAREN);
	            this.state = 101;
	            this.match(SUOKIFParser.LT);
	            this.state = 102;
	            this.match(SUOKIFParser.ASSIGN);
	            this.state = 103;
	            this.match(SUOKIFParser.GT);
	            this.state = 104;
	            this.sentence();
	            this.state = 105;
	            this.sentence();
	            this.state = 106;
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
	    var _la = 0;
	    try {
	        this.state = 134;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 110;
	            this.match(SUOKIFParser.LPAREN);
	            this.state = 111;
	            this.match(SUOKIFParser.FORALL);
	            this.state = 112;
	            this.match(SUOKIFParser.LPAREN);
	            this.state = 114; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 113;
	                this.match(SUOKIFParser.VARIABLE);
	                this.state = 116; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===8);
	            this.state = 118;
	            this.match(SUOKIFParser.RPAREN);
	            this.state = 119;
	            this.sentence();
	            this.state = 120;
	            this.match(SUOKIFParser.RPAREN);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 122;
	            this.match(SUOKIFParser.LPAREN);
	            this.state = 123;
	            this.match(SUOKIFParser.EXISTS);
	            this.state = 124;
	            this.match(SUOKIFParser.LPAREN);
	            this.state = 126; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 125;
	                this.match(SUOKIFParser.VARIABLE);
	                this.state = 128; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===8);
	            this.state = 130;
	            this.match(SUOKIFParser.RPAREN);
	            this.state = 131;
	            this.sentence();
	            this.state = 132;
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

	EOF() {
	    return this.getToken(SUOKIFParser.EOF, 0);
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

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
