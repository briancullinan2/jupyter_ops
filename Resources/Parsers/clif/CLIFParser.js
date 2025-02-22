// Generated from ./clif/CLIF.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CLIFListener from './CLIFListener.js';
const serializedATN = [4,1,28,217,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,1,
0,1,0,5,0,43,8,0,10,0,12,0,46,9,0,1,1,1,1,1,2,1,2,1,3,1,3,3,3,54,8,3,1,4,
1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,68,8,4,1,5,1,5,1,6,1,6,1,
6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,3,7,82,8,7,1,8,1,8,3,8,86,8,8,1,9,1,9,1,9,
1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,105,8,9,1,10,
1,10,1,11,1,11,1,11,5,11,112,8,11,10,11,12,11,115,9,11,1,11,1,11,1,11,1,
11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,3,11,129,8,11,1,12,1,12,1,12,
3,12,134,8,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,3,13,146,
8,13,1,13,1,13,1,13,5,13,151,8,13,10,13,12,13,154,9,13,1,13,1,13,1,14,1,
14,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,5,15,170,8,15,10,15,
12,15,173,9,15,1,15,3,15,176,8,15,1,15,3,15,179,8,15,1,15,1,15,1,16,1,16,
1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,194,8,16,1,16,3,16,197,
8,16,1,17,4,17,200,8,17,11,17,12,17,201,1,18,1,18,1,18,3,18,207,8,18,1,19,
1,19,1,19,1,19,3,19,213,8,19,1,19,1,19,1,19,0,0,20,0,2,4,6,8,10,12,14,16,
18,20,22,24,26,28,30,32,34,36,38,0,5,2,0,6,6,8,8,2,0,9,9,25,25,1,0,11,12,
1,0,13,14,1,0,15,16,225,0,44,1,0,0,0,2,47,1,0,0,0,4,49,1,0,0,0,6,53,1,0,
0,0,8,67,1,0,0,0,10,69,1,0,0,0,12,71,1,0,0,0,14,81,1,0,0,0,16,85,1,0,0,0,
18,104,1,0,0,0,20,106,1,0,0,0,22,128,1,0,0,0,24,130,1,0,0,0,26,139,1,0,0,
0,28,157,1,0,0,0,30,163,1,0,0,0,32,196,1,0,0,0,34,199,1,0,0,0,36,206,1,0,
0,0,38,208,1,0,0,0,40,43,3,8,4,0,41,43,5,7,0,0,42,40,1,0,0,0,42,41,1,0,0,
0,43,46,1,0,0,0,44,42,1,0,0,0,44,45,1,0,0,0,45,1,1,0,0,0,46,44,1,0,0,0,47,
48,7,0,0,0,48,3,1,0,0,0,49,50,7,1,0,0,50,5,1,0,0,0,51,54,3,2,1,0,52,54,3,
4,2,0,53,51,1,0,0,0,53,52,1,0,0,0,54,7,1,0,0,0,55,68,3,6,3,0,56,57,5,1,0,
0,57,58,3,10,5,0,58,59,3,0,0,0,59,60,5,2,0,0,60,68,1,0,0,0,61,62,5,1,0,0,
62,63,5,23,0,0,63,64,5,8,0,0,64,65,3,8,4,0,65,66,5,2,0,0,66,68,1,0,0,0,67,
55,1,0,0,0,67,56,1,0,0,0,67,61,1,0,0,0,68,9,1,0,0,0,69,70,3,8,4,0,70,11,
1,0,0,0,71,72,5,1,0,0,72,73,5,10,0,0,73,74,3,8,4,0,74,75,3,8,4,0,75,76,5,
2,0,0,76,13,1,0,0,0,77,82,3,16,8,0,78,82,3,22,11,0,79,82,3,24,12,0,80,82,
3,28,14,0,81,77,1,0,0,0,81,78,1,0,0,0,81,79,1,0,0,0,81,80,1,0,0,0,82,15,
1,0,0,0,83,86,3,12,6,0,84,86,3,18,9,0,85,83,1,0,0,0,85,84,1,0,0,0,86,17,
1,0,0,0,87,88,5,1,0,0,88,89,3,20,10,0,89,90,3,0,0,0,90,91,5,2,0,0,91,105,
1,0,0,0,92,93,5,1,0,0,93,94,3,8,4,0,94,95,5,1,0,0,95,96,5,18,0,0,96,97,5,
1,0,0,97,98,3,6,3,0,98,99,3,8,4,0,99,100,5,2,0,0,100,101,1,0,0,0,101,102,
5,2,0,0,102,103,5,2,0,0,103,105,1,0,0,0,104,87,1,0,0,0,104,92,1,0,0,0,105,
19,1,0,0,0,106,107,3,8,4,0,107,21,1,0,0,0,108,109,5,1,0,0,109,113,7,2,0,
0,110,112,3,14,7,0,111,110,1,0,0,0,112,115,1,0,0,0,113,111,1,0,0,0,113,114,
1,0,0,0,114,116,1,0,0,0,115,113,1,0,0,0,116,129,5,2,0,0,117,118,5,1,0,0,
118,119,7,3,0,0,119,120,3,14,7,0,120,121,3,14,7,0,121,122,5,2,0,0,122,129,
1,0,0,0,123,124,5,1,0,0,124,125,5,17,0,0,125,126,3,14,7,0,126,127,5,2,0,
0,127,129,1,0,0,0,128,108,1,0,0,0,128,117,1,0,0,0,128,123,1,0,0,0,129,23,
1,0,0,0,130,131,5,1,0,0,131,133,7,4,0,0,132,134,3,4,2,0,133,132,1,0,0,0,
133,134,1,0,0,0,134,135,1,0,0,0,135,136,3,26,13,0,136,137,3,14,7,0,137,138,
5,2,0,0,138,25,1,0,0,0,139,152,5,1,0,0,140,151,3,4,2,0,141,151,5,7,0,0,142,
145,5,1,0,0,143,146,3,4,2,0,144,146,5,7,0,0,145,143,1,0,0,0,145,144,1,0,
0,0,146,147,1,0,0,0,147,148,3,8,4,0,148,149,5,2,0,0,149,151,1,0,0,0,150,
140,1,0,0,0,150,141,1,0,0,0,150,142,1,0,0,0,151,154,1,0,0,0,152,150,1,0,
0,0,152,153,1,0,0,0,153,155,1,0,0,0,154,152,1,0,0,0,155,156,5,2,0,0,156,
27,1,0,0,0,157,158,5,1,0,0,158,159,5,23,0,0,159,160,5,9,0,0,160,161,3,14,
7,0,161,162,5,2,0,0,162,29,1,0,0,0,163,164,5,1,0,0,164,165,5,22,0,0,165,
175,3,4,2,0,166,167,5,1,0,0,167,171,5,21,0,0,168,170,3,6,3,0,169,168,1,0,
0,0,170,173,1,0,0,0,171,169,1,0,0,0,171,172,1,0,0,0,172,174,1,0,0,0,173,
171,1,0,0,0,174,176,5,2,0,0,175,166,1,0,0,0,175,176,1,0,0,0,176,178,1,0,
0,0,177,179,3,36,18,0,178,177,1,0,0,0,178,179,1,0,0,0,179,180,1,0,0,0,180,
181,5,2,0,0,181,31,1,0,0,0,182,197,3,14,7,0,183,197,3,30,15,0,184,185,5,
1,0,0,185,186,5,20,0,0,186,187,3,4,2,0,187,188,5,2,0,0,188,197,1,0,0,0,189,
190,5,1,0,0,190,191,5,23,0,0,191,193,5,9,0,0,192,194,3,36,18,0,193,192,1,
0,0,0,193,194,1,0,0,0,194,195,1,0,0,0,195,197,5,2,0,0,196,182,1,0,0,0,196,
183,1,0,0,0,196,184,1,0,0,0,196,189,1,0,0,0,197,33,1,0,0,0,198,200,3,32,
16,0,199,198,1,0,0,0,200,201,1,0,0,0,201,199,1,0,0,0,201,202,1,0,0,0,202,
35,1,0,0,0,203,207,3,30,15,0,204,207,3,38,19,0,205,207,3,34,17,0,206,203,
1,0,0,0,206,204,1,0,0,0,206,205,1,0,0,0,207,37,1,0,0,0,208,209,5,1,0,0,209,
210,5,19,0,0,210,212,3,4,2,0,211,213,3,34,17,0,212,211,1,0,0,0,212,213,1,
0,0,0,213,214,1,0,0,0,214,215,5,2,0,0,215,39,1,0,0,0,21,42,44,53,67,81,85,
104,113,128,133,145,150,152,171,175,178,193,196,201,206,212];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CLIFParser extends antlr4.Parser {

    static grammarFileName = "CLIF.g4";
    static literalNames = [ null, "'('", "')'", "'''", "'\"'", "'\\'", null, 
                            null, null, null, "'='", "'and'", "'or'", "'iff'", 
                            "'if'", "'forall'", "'exists'", "'not'", "'cl-roleset'", 
                            "'cl-text'", "'cl-imports'", "'cl-excludes'", 
                            "'cl-module'", "'cl-comment'", "'cl-prefix'" ];
    static symbolicNames = [ null, "OPEN", "CLOSE", "STRINGQUOTE", "NAMEQUOTE", 
                             "BACKSLASH", "NUMERAL", "SEQMARK", "QUOTEDSTRING", 
                             "ENCLOSEDNAME", "EQUAL", "AND", "OR", "IFF", 
                             "IF", "FORALL", "EXISTS", "NOT", "CL_ROLESET", 
                             "CL_TEXT", "CL_IMPORTS", "CL_EXCLUDES", "CL_MODULE", 
                             "CL_COMMENT", "CL_PREFIX", "NAMECHARSEQUENCE", 
                             "WHITE", "BLOCKCOMMENT", "LineComment" ];
    static ruleNames = [ "termseq", "interpretedname", "interpretablename", 
                         "name", "term", "operator_", "equation", "sentence", 
                         "atomsent", "atom", "predicate", "boolsent", "quantsent", 
                         "boundlist", "commentsent", "module", "phrase", 
                         "text", "cltext", "namedtext" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CLIFParser.ruleNames;
        this.literalNames = CLIFParser.literalNames;
        this.symbolicNames = CLIFParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	termseq() {
	    let localctx = new TermseqContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CLIFParser.RULE_termseq);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CLIFParser.OPEN) | (1 << CLIFParser.NUMERAL) | (1 << CLIFParser.SEQMARK) | (1 << CLIFParser.QUOTEDSTRING) | (1 << CLIFParser.ENCLOSEDNAME) | (1 << CLIFParser.NAMECHARSEQUENCE))) !== 0)) {
	            this.state = 42;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case CLIFParser.OPEN:
	            case CLIFParser.NUMERAL:
	            case CLIFParser.QUOTEDSTRING:
	            case CLIFParser.ENCLOSEDNAME:
	            case CLIFParser.NAMECHARSEQUENCE:
	                this.state = 40;
	                this.term();
	                break;
	            case CLIFParser.SEQMARK:
	                this.state = 41;
	                this.match(CLIFParser.SEQMARK);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 46;
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



	interpretedname() {
	    let localctx = new InterpretednameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CLIFParser.RULE_interpretedname);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        _la = this._input.LA(1);
	        if(!(_la===CLIFParser.NUMERAL || _la===CLIFParser.QUOTEDSTRING)) {
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



	interpretablename() {
	    let localctx = new InterpretablenameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CLIFParser.RULE_interpretablename);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        _la = this._input.LA(1);
	        if(!(_la===CLIFParser.ENCLOSEDNAME || _la===CLIFParser.NAMECHARSEQUENCE)) {
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



	name() {
	    let localctx = new NameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CLIFParser.RULE_name);
	    try {
	        this.state = 53;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case CLIFParser.NUMERAL:
	        case CLIFParser.QUOTEDSTRING:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 51;
	            this.interpretedname();
	            break;
	        case CLIFParser.ENCLOSEDNAME:
	        case CLIFParser.NAMECHARSEQUENCE:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 52;
	            this.interpretablename();
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



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CLIFParser.RULE_term);
	    try {
	        this.state = 67;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 55;
	            this.name();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 56;
	            this.match(CLIFParser.OPEN);
	            this.state = 57;
	            this.operator_();
	            this.state = 58;
	            this.termseq();
	            this.state = 59;
	            this.match(CLIFParser.CLOSE);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 61;
	            this.match(CLIFParser.OPEN);
	            this.state = 62;
	            this.match(CLIFParser.CL_COMMENT);
	            this.state = 63;
	            this.match(CLIFParser.QUOTEDSTRING);
	            this.state = 64;
	            this.term();
	            this.state = 65;
	            this.match(CLIFParser.CLOSE);
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



	operator_() {
	    let localctx = new Operator_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CLIFParser.RULE_operator_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.term();
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
	    this.enterRule(localctx, 12, CLIFParser.RULE_equation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(CLIFParser.OPEN);
	        this.state = 72;
	        this.match(CLIFParser.EQUAL);
	        this.state = 73;
	        this.term();
	        this.state = 74;
	        this.term();
	        this.state = 75;
	        this.match(CLIFParser.CLOSE);
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
	    this.enterRule(localctx, 14, CLIFParser.RULE_sentence);
	    try {
	        this.state = 81;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 77;
	            this.atomsent();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 78;
	            this.boolsent();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 79;
	            this.quantsent();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 80;
	            this.commentsent();
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



	atomsent() {
	    let localctx = new AtomsentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, CLIFParser.RULE_atomsent);
	    try {
	        this.state = 85;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 83;
	            this.equation();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 84;
	            this.atom();
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



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, CLIFParser.RULE_atom);
	    try {
	        this.state = 104;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 87;
	            this.match(CLIFParser.OPEN);
	            this.state = 88;
	            this.predicate();
	            this.state = 89;
	            this.termseq();
	            this.state = 90;
	            this.match(CLIFParser.CLOSE);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 92;
	            this.match(CLIFParser.OPEN);
	            this.state = 93;
	            this.term();
	            this.state = 94;
	            this.match(CLIFParser.OPEN);
	            this.state = 95;
	            this.match(CLIFParser.CL_ROLESET);

	            this.state = 96;
	            this.match(CLIFParser.OPEN);
	            this.state = 97;
	            this.name();
	            this.state = 98;
	            this.term();
	            this.state = 99;
	            this.match(CLIFParser.CLOSE);
	            this.state = 101;
	            this.match(CLIFParser.CLOSE);
	            this.state = 102;
	            this.match(CLIFParser.CLOSE);
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



	predicate() {
	    let localctx = new PredicateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, CLIFParser.RULE_predicate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this.term();
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



	boolsent() {
	    let localctx = new BoolsentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, CLIFParser.RULE_boolsent);
	    var _la = 0; // Token type
	    try {
	        this.state = 128;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 108;
	            this.match(CLIFParser.OPEN);
	            this.state = 109;
	            _la = this._input.LA(1);
	            if(!(_la===CLIFParser.AND || _la===CLIFParser.OR)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 113;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===CLIFParser.OPEN) {
	                this.state = 110;
	                this.sentence();
	                this.state = 115;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 116;
	            this.match(CLIFParser.CLOSE);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 117;
	            this.match(CLIFParser.OPEN);
	            this.state = 118;
	            _la = this._input.LA(1);
	            if(!(_la===CLIFParser.IFF || _la===CLIFParser.IF)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 119;
	            this.sentence();
	            this.state = 120;
	            this.sentence();
	            this.state = 121;
	            this.match(CLIFParser.CLOSE);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 123;
	            this.match(CLIFParser.OPEN);
	            this.state = 124;
	            this.match(CLIFParser.NOT);
	            this.state = 125;
	            this.sentence();
	            this.state = 126;
	            this.match(CLIFParser.CLOSE);
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
	    this.enterRule(localctx, 24, CLIFParser.RULE_quantsent);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130;
	        this.match(CLIFParser.OPEN);
	        this.state = 131;
	        _la = this._input.LA(1);
	        if(!(_la===CLIFParser.FORALL || _la===CLIFParser.EXISTS)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 133;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===CLIFParser.ENCLOSEDNAME || _la===CLIFParser.NAMECHARSEQUENCE) {
	            this.state = 132;
	            this.interpretablename();
	        }

	        this.state = 135;
	        this.boundlist();
	        this.state = 136;
	        this.sentence();
	        this.state = 137;
	        this.match(CLIFParser.CLOSE);
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



	boundlist() {
	    let localctx = new BoundlistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, CLIFParser.RULE_boundlist);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 139;
	        this.match(CLIFParser.OPEN);
	        this.state = 152;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CLIFParser.OPEN) | (1 << CLIFParser.SEQMARK) | (1 << CLIFParser.ENCLOSEDNAME) | (1 << CLIFParser.NAMECHARSEQUENCE))) !== 0)) {
	            this.state = 150;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case CLIFParser.ENCLOSEDNAME:
	            case CLIFParser.NAMECHARSEQUENCE:
	                this.state = 140;
	                this.interpretablename();
	                break;
	            case CLIFParser.SEQMARK:
	                this.state = 141;
	                this.match(CLIFParser.SEQMARK);
	                break;
	            case CLIFParser.OPEN:
	                this.state = 142;
	                this.match(CLIFParser.OPEN);
	                this.state = 145;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case CLIFParser.ENCLOSEDNAME:
	                case CLIFParser.NAMECHARSEQUENCE:
	                    this.state = 143;
	                    this.interpretablename();
	                    break;
	                case CLIFParser.SEQMARK:
	                    this.state = 144;
	                    this.match(CLIFParser.SEQMARK);
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 147;
	                this.term();
	                this.state = 148;
	                this.match(CLIFParser.CLOSE);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 154;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 155;
	        this.match(CLIFParser.CLOSE);
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



	commentsent() {
	    let localctx = new CommentsentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, CLIFParser.RULE_commentsent);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this.match(CLIFParser.OPEN);
	        this.state = 158;
	        this.match(CLIFParser.CL_COMMENT);
	        this.state = 159;
	        this.match(CLIFParser.ENCLOSEDNAME);
	        this.state = 160;
	        this.sentence();
	        this.state = 161;
	        this.match(CLIFParser.CLOSE);
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



	module() {
	    let localctx = new ModuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, CLIFParser.RULE_module);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 163;
	        this.match(CLIFParser.OPEN);
	        this.state = 164;
	        this.match(CLIFParser.CL_MODULE);
	        this.state = 165;
	        this.interpretablename();
	        this.state = 175;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        if(la_===1) {
	            this.state = 166;
	            this.match(CLIFParser.OPEN);
	            this.state = 167;
	            this.match(CLIFParser.CL_EXCLUDES);
	            this.state = 171;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CLIFParser.NUMERAL) | (1 << CLIFParser.QUOTEDSTRING) | (1 << CLIFParser.ENCLOSEDNAME) | (1 << CLIFParser.NAMECHARSEQUENCE))) !== 0)) {
	                this.state = 168;
	                this.name();
	                this.state = 173;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 174;
	            this.match(CLIFParser.CLOSE);

	        }
	        this.state = 178;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===CLIFParser.OPEN) {
	            this.state = 177;
	            this.cltext();
	        }

	        this.state = 180;
	        this.match(CLIFParser.CLOSE);
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



	phrase() {
	    let localctx = new PhraseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, CLIFParser.RULE_phrase);
	    var _la = 0; // Token type
	    try {
	        this.state = 196;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 182;
	            this.sentence();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 183;
	            this.module();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 184;
	            this.match(CLIFParser.OPEN);
	            this.state = 185;
	            this.match(CLIFParser.CL_IMPORTS);
	            this.state = 186;
	            this.interpretablename();
	            this.state = 187;
	            this.match(CLIFParser.CLOSE);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 189;
	            this.match(CLIFParser.OPEN);
	            this.state = 190;
	            this.match(CLIFParser.CL_COMMENT);
	            this.state = 191;
	            this.match(CLIFParser.ENCLOSEDNAME);
	            this.state = 193;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===CLIFParser.OPEN) {
	                this.state = 192;
	                this.cltext();
	            }

	            this.state = 195;
	            this.match(CLIFParser.CLOSE);
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



	text() {
	    let localctx = new TextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, CLIFParser.RULE_text);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 198;
	            this.phrase();
	            this.state = 201; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===CLIFParser.OPEN);
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



	cltext() {
	    let localctx = new CltextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, CLIFParser.RULE_cltext);
	    try {
	        this.state = 206;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 203;
	            this.module();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 204;
	            this.namedtext();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 205;
	            this.text();
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



	namedtext() {
	    let localctx = new NamedtextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, CLIFParser.RULE_namedtext);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 208;
	        this.match(CLIFParser.OPEN);
	        this.state = 209;
	        this.match(CLIFParser.CL_TEXT);
	        this.state = 210;
	        this.interpretablename();
	        this.state = 212;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===CLIFParser.OPEN) {
	            this.state = 211;
	            this.text();
	        }

	        this.state = 214;
	        this.match(CLIFParser.CLOSE);
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

CLIFParser.EOF = antlr4.Token.EOF;
CLIFParser.OPEN = 1;
CLIFParser.CLOSE = 2;
CLIFParser.STRINGQUOTE = 3;
CLIFParser.NAMEQUOTE = 4;
CLIFParser.BACKSLASH = 5;
CLIFParser.NUMERAL = 6;
CLIFParser.SEQMARK = 7;
CLIFParser.QUOTEDSTRING = 8;
CLIFParser.ENCLOSEDNAME = 9;
CLIFParser.EQUAL = 10;
CLIFParser.AND = 11;
CLIFParser.OR = 12;
CLIFParser.IFF = 13;
CLIFParser.IF = 14;
CLIFParser.FORALL = 15;
CLIFParser.EXISTS = 16;
CLIFParser.NOT = 17;
CLIFParser.CL_ROLESET = 18;
CLIFParser.CL_TEXT = 19;
CLIFParser.CL_IMPORTS = 20;
CLIFParser.CL_EXCLUDES = 21;
CLIFParser.CL_MODULE = 22;
CLIFParser.CL_COMMENT = 23;
CLIFParser.CL_PREFIX = 24;
CLIFParser.NAMECHARSEQUENCE = 25;
CLIFParser.WHITE = 26;
CLIFParser.BLOCKCOMMENT = 27;
CLIFParser.LineComment = 28;

CLIFParser.RULE_termseq = 0;
CLIFParser.RULE_interpretedname = 1;
CLIFParser.RULE_interpretablename = 2;
CLIFParser.RULE_name = 3;
CLIFParser.RULE_term = 4;
CLIFParser.RULE_operator_ = 5;
CLIFParser.RULE_equation = 6;
CLIFParser.RULE_sentence = 7;
CLIFParser.RULE_atomsent = 8;
CLIFParser.RULE_atom = 9;
CLIFParser.RULE_predicate = 10;
CLIFParser.RULE_boolsent = 11;
CLIFParser.RULE_quantsent = 12;
CLIFParser.RULE_boundlist = 13;
CLIFParser.RULE_commentsent = 14;
CLIFParser.RULE_module = 15;
CLIFParser.RULE_phrase = 16;
CLIFParser.RULE_text = 17;
CLIFParser.RULE_cltext = 18;
CLIFParser.RULE_namedtext = 19;

class TermseqContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CLIFParser.RULE_termseq;
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

	SEQMARK = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CLIFParser.SEQMARK);
	    } else {
	        return this.getToken(CLIFParser.SEQMARK, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.enterTermseq(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.exitTermseq(this);
		}
	}


}



class InterpretednameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CLIFParser.RULE_interpretedname;
    }

	NUMERAL() {
	    return this.getToken(CLIFParser.NUMERAL, 0);
	};

	QUOTEDSTRING() {
	    return this.getToken(CLIFParser.QUOTEDSTRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.enterInterpretedname(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.exitInterpretedname(this);
		}
	}


}



class InterpretablenameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CLIFParser.RULE_interpretablename;
    }

	NAMECHARSEQUENCE() {
	    return this.getToken(CLIFParser.NAMECHARSEQUENCE, 0);
	};

	ENCLOSEDNAME() {
	    return this.getToken(CLIFParser.ENCLOSEDNAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.enterInterpretablename(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.exitInterpretablename(this);
		}
	}


}



class NameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CLIFParser.RULE_name;
    }

	interpretedname() {
	    return this.getTypedRuleContext(InterpretednameContext,0);
	};

	interpretablename() {
	    return this.getTypedRuleContext(InterpretablenameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.exitName(this);
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
        this.ruleIndex = CLIFParser.RULE_term;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	OPEN() {
	    return this.getToken(CLIFParser.OPEN, 0);
	};

	operator_() {
	    return this.getTypedRuleContext(Operator_Context,0);
	};

	termseq() {
	    return this.getTypedRuleContext(TermseqContext,0);
	};

	CLOSE() {
	    return this.getToken(CLIFParser.CLOSE, 0);
	};

	CL_COMMENT() {
	    return this.getToken(CLIFParser.CL_COMMENT, 0);
	};

	QUOTEDSTRING() {
	    return this.getToken(CLIFParser.QUOTEDSTRING, 0);
	};

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.exitTerm(this);
		}
	}


}



class Operator_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CLIFParser.RULE_operator_;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.enterOperator_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.exitOperator_(this);
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
        this.ruleIndex = CLIFParser.RULE_equation;
    }

	OPEN() {
	    return this.getToken(CLIFParser.OPEN, 0);
	};

	EQUAL() {
	    return this.getToken(CLIFParser.EQUAL, 0);
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

	CLOSE() {
	    return this.getToken(CLIFParser.CLOSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.enterEquation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.exitEquation(this);
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
        this.ruleIndex = CLIFParser.RULE_sentence;
    }

	atomsent() {
	    return this.getTypedRuleContext(AtomsentContext,0);
	};

	boolsent() {
	    return this.getTypedRuleContext(BoolsentContext,0);
	};

	quantsent() {
	    return this.getTypedRuleContext(QuantsentContext,0);
	};

	commentsent() {
	    return this.getTypedRuleContext(CommentsentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.enterSentence(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.exitSentence(this);
		}
	}


}



class AtomsentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CLIFParser.RULE_atomsent;
    }

	equation() {
	    return this.getTypedRuleContext(EquationContext,0);
	};

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.enterAtomsent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.exitAtomsent(this);
		}
	}


}



class AtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CLIFParser.RULE_atom;
    }

	OPEN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CLIFParser.OPEN);
	    } else {
	        return this.getToken(CLIFParser.OPEN, i);
	    }
	};


	predicate() {
	    return this.getTypedRuleContext(PredicateContext,0);
	};

	termseq() {
	    return this.getTypedRuleContext(TermseqContext,0);
	};

	CLOSE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CLIFParser.CLOSE);
	    } else {
	        return this.getToken(CLIFParser.CLOSE, i);
	    }
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

	CL_ROLESET() {
	    return this.getToken(CLIFParser.CL_ROLESET, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.exitAtom(this);
		}
	}


}



class PredicateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CLIFParser.RULE_predicate;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.enterPredicate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.exitPredicate(this);
		}
	}


}



class BoolsentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CLIFParser.RULE_boolsent;
    }

	OPEN() {
	    return this.getToken(CLIFParser.OPEN, 0);
	};

	CLOSE() {
	    return this.getToken(CLIFParser.CLOSE, 0);
	};

	AND() {
	    return this.getToken(CLIFParser.AND, 0);
	};

	OR() {
	    return this.getToken(CLIFParser.OR, 0);
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

	IF() {
	    return this.getToken(CLIFParser.IF, 0);
	};

	IFF() {
	    return this.getToken(CLIFParser.IFF, 0);
	};

	NOT() {
	    return this.getToken(CLIFParser.NOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.enterBoolsent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.exitBoolsent(this);
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
        this.ruleIndex = CLIFParser.RULE_quantsent;
    }

	OPEN() {
	    return this.getToken(CLIFParser.OPEN, 0);
	};

	boundlist() {
	    return this.getTypedRuleContext(BoundlistContext,0);
	};

	sentence() {
	    return this.getTypedRuleContext(SentenceContext,0);
	};

	CLOSE() {
	    return this.getToken(CLIFParser.CLOSE, 0);
	};

	FORALL() {
	    return this.getToken(CLIFParser.FORALL, 0);
	};

	EXISTS() {
	    return this.getToken(CLIFParser.EXISTS, 0);
	};

	interpretablename() {
	    return this.getTypedRuleContext(InterpretablenameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.enterQuantsent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.exitQuantsent(this);
		}
	}


}



class BoundlistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CLIFParser.RULE_boundlist;
    }

	OPEN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CLIFParser.OPEN);
	    } else {
	        return this.getToken(CLIFParser.OPEN, i);
	    }
	};


	CLOSE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CLIFParser.CLOSE);
	    } else {
	        return this.getToken(CLIFParser.CLOSE, i);
	    }
	};


	interpretablename = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InterpretablenameContext);
	    } else {
	        return this.getTypedRuleContext(InterpretablenameContext,i);
	    }
	};

	SEQMARK = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CLIFParser.SEQMARK);
	    } else {
	        return this.getToken(CLIFParser.SEQMARK, i);
	    }
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

	enterRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.enterBoundlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.exitBoundlist(this);
		}
	}


}



class CommentsentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CLIFParser.RULE_commentsent;
    }

	OPEN() {
	    return this.getToken(CLIFParser.OPEN, 0);
	};

	CL_COMMENT() {
	    return this.getToken(CLIFParser.CL_COMMENT, 0);
	};

	ENCLOSEDNAME() {
	    return this.getToken(CLIFParser.ENCLOSEDNAME, 0);
	};

	sentence() {
	    return this.getTypedRuleContext(SentenceContext,0);
	};

	CLOSE() {
	    return this.getToken(CLIFParser.CLOSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.enterCommentsent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.exitCommentsent(this);
		}
	}


}



class ModuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CLIFParser.RULE_module;
    }

	OPEN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CLIFParser.OPEN);
	    } else {
	        return this.getToken(CLIFParser.OPEN, i);
	    }
	};


	CL_MODULE() {
	    return this.getToken(CLIFParser.CL_MODULE, 0);
	};

	interpretablename() {
	    return this.getTypedRuleContext(InterpretablenameContext,0);
	};

	CLOSE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CLIFParser.CLOSE);
	    } else {
	        return this.getToken(CLIFParser.CLOSE, i);
	    }
	};


	CL_EXCLUDES() {
	    return this.getToken(CLIFParser.CL_EXCLUDES, 0);
	};

	cltext() {
	    return this.getTypedRuleContext(CltextContext,0);
	};

	name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NameContext);
	    } else {
	        return this.getTypedRuleContext(NameContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.enterModule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.exitModule(this);
		}
	}


}



class PhraseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CLIFParser.RULE_phrase;
    }

	sentence() {
	    return this.getTypedRuleContext(SentenceContext,0);
	};

	module() {
	    return this.getTypedRuleContext(ModuleContext,0);
	};

	OPEN() {
	    return this.getToken(CLIFParser.OPEN, 0);
	};

	CL_IMPORTS() {
	    return this.getToken(CLIFParser.CL_IMPORTS, 0);
	};

	interpretablename() {
	    return this.getTypedRuleContext(InterpretablenameContext,0);
	};

	CLOSE() {
	    return this.getToken(CLIFParser.CLOSE, 0);
	};

	CL_COMMENT() {
	    return this.getToken(CLIFParser.CL_COMMENT, 0);
	};

	ENCLOSEDNAME() {
	    return this.getToken(CLIFParser.ENCLOSEDNAME, 0);
	};

	cltext() {
	    return this.getTypedRuleContext(CltextContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.enterPhrase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.exitPhrase(this);
		}
	}


}



class TextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CLIFParser.RULE_text;
    }

	phrase = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PhraseContext);
	    } else {
	        return this.getTypedRuleContext(PhraseContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.enterText(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.exitText(this);
		}
	}


}



class CltextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CLIFParser.RULE_cltext;
    }

	module() {
	    return this.getTypedRuleContext(ModuleContext,0);
	};

	namedtext() {
	    return this.getTypedRuleContext(NamedtextContext,0);
	};

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.enterCltext(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.exitCltext(this);
		}
	}


}



class NamedtextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CLIFParser.RULE_namedtext;
    }

	OPEN() {
	    return this.getToken(CLIFParser.OPEN, 0);
	};

	CL_TEXT() {
	    return this.getToken(CLIFParser.CL_TEXT, 0);
	};

	interpretablename() {
	    return this.getTypedRuleContext(InterpretablenameContext,0);
	};

	CLOSE() {
	    return this.getToken(CLIFParser.CLOSE, 0);
	};

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.enterNamedtext(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CLIFListener ) {
	        listener.exitNamedtext(this);
		}
	}


}




CLIFParser.TermseqContext = TermseqContext; 
CLIFParser.InterpretednameContext = InterpretednameContext; 
CLIFParser.InterpretablenameContext = InterpretablenameContext; 
CLIFParser.NameContext = NameContext; 
CLIFParser.TermContext = TermContext; 
CLIFParser.Operator_Context = Operator_Context; 
CLIFParser.EquationContext = EquationContext; 
CLIFParser.SentenceContext = SentenceContext; 
CLIFParser.AtomsentContext = AtomsentContext; 
CLIFParser.AtomContext = AtomContext; 
CLIFParser.PredicateContext = PredicateContext; 
CLIFParser.BoolsentContext = BoolsentContext; 
CLIFParser.QuantsentContext = QuantsentContext; 
CLIFParser.BoundlistContext = BoundlistContext; 
CLIFParser.CommentsentContext = CommentsentContext; 
CLIFParser.ModuleContext = ModuleContext; 
CLIFParser.PhraseContext = PhraseContext; 
CLIFParser.TextContext = TextContext; 
CLIFParser.CltextContext = CltextContext; 
CLIFParser.NamedtextContext = NamedtextContext; 
