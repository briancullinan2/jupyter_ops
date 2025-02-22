// Generated from ./r/R.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import RListener from './RListener.js';
const serializedATN = [4,1,64,215,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,1,0,1,0,5,0,17,8,0,10,0,12,0,20,9,0,1,0,5,0,23,8,0,10,
0,12,0,26,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,40,8,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,3,1,98,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,5,1,152,8,1,10,1,12,1,155,9,1,1,2,1,2,1,2,3,2,160,8,2,5,2,162,
8,2,10,2,12,2,165,9,2,1,2,3,2,168,8,2,1,3,1,3,1,3,5,3,173,8,3,10,3,12,3,
176,9,3,1,4,1,4,1,4,1,4,1,4,1,4,3,4,184,8,4,1,5,1,5,1,5,5,5,189,8,5,10,5,
12,5,192,9,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
1,6,1,6,1,6,1,6,3,6,213,8,6,1,6,0,1,2,7,0,2,4,6,8,10,12,0,9,2,0,1,1,63,63,
1,0,10,11,1,0,5,6,1,0,7,8,1,0,13,14,1,0,15,20,1,0,22,23,1,0,24,25,1,0,27,
32,268,0,24,1,0,0,0,2,97,1,0,0,0,4,167,1,0,0,0,6,169,1,0,0,0,8,183,1,0,0,
0,10,185,1,0,0,0,12,212,1,0,0,0,14,18,3,2,1,0,15,17,7,0,0,0,16,15,1,0,0,
0,17,20,1,0,0,0,18,16,1,0,0,0,18,19,1,0,0,0,19,23,1,0,0,0,20,18,1,0,0,0,
21,23,5,63,0,0,22,14,1,0,0,0,22,21,1,0,0,0,23,26,1,0,0,0,24,22,1,0,0,0,24,
25,1,0,0,0,25,27,1,0,0,0,26,24,1,0,0,0,27,28,5,0,0,1,28,1,1,0,0,0,29,30,
6,1,-1,0,30,31,7,1,0,0,31,98,3,2,1,36,32,33,5,21,0,0,33,98,3,2,1,30,34,35,
5,26,0,0,35,98,3,2,1,27,36,37,5,33,0,0,37,39,5,34,0,0,38,40,3,6,3,0,39,38,
1,0,0,0,39,40,1,0,0,0,40,41,1,0,0,0,41,42,5,35,0,0,42,98,3,2,1,24,43,44,
5,36,0,0,44,45,3,4,2,0,45,46,5,37,0,0,46,98,1,0,0,0,47,48,5,38,0,0,48,49,
5,34,0,0,49,50,3,2,1,0,50,51,5,35,0,0,51,52,3,2,1,21,52,98,1,0,0,0,53,54,
5,38,0,0,54,55,5,34,0,0,55,56,3,2,1,0,56,57,5,35,0,0,57,58,3,2,1,0,58,59,
5,39,0,0,59,60,3,2,1,20,60,98,1,0,0,0,61,62,5,40,0,0,62,63,5,34,0,0,63,64,
5,61,0,0,64,65,5,41,0,0,65,66,3,2,1,0,66,67,5,35,0,0,67,68,3,2,1,19,68,98,
1,0,0,0,69,70,5,42,0,0,70,71,5,34,0,0,71,72,3,2,1,0,72,73,5,35,0,0,73,74,
3,2,1,18,74,98,1,0,0,0,75,76,5,43,0,0,76,98,3,2,1,17,77,78,5,44,0,0,78,98,
3,2,1,16,79,98,5,45,0,0,80,98,5,46,0,0,81,82,5,34,0,0,82,83,3,2,1,0,83,84,
5,35,0,0,84,98,1,0,0,0,85,98,5,61,0,0,86,98,5,60,0,0,87,98,5,56,0,0,88,98,
5,57,0,0,89,98,5,58,0,0,90,98,5,59,0,0,91,98,5,47,0,0,92,98,5,48,0,0,93,
98,5,49,0,0,94,98,5,50,0,0,95,98,5,51,0,0,96,98,5,52,0,0,97,29,1,0,0,0,97,
32,1,0,0,0,97,34,1,0,0,0,97,36,1,0,0,0,97,43,1,0,0,0,97,47,1,0,0,0,97,53,
1,0,0,0,97,61,1,0,0,0,97,69,1,0,0,0,97,75,1,0,0,0,97,77,1,0,0,0,97,79,1,
0,0,0,97,80,1,0,0,0,97,81,1,0,0,0,97,85,1,0,0,0,97,86,1,0,0,0,97,87,1,0,
0,0,97,88,1,0,0,0,97,89,1,0,0,0,97,90,1,0,0,0,97,91,1,0,0,0,97,92,1,0,0,
0,97,93,1,0,0,0,97,94,1,0,0,0,97,95,1,0,0,0,97,96,1,0,0,0,98,153,1,0,0,0,
99,100,10,39,0,0,100,101,7,2,0,0,101,152,3,2,1,40,102,103,10,38,0,0,103,
104,7,3,0,0,104,152,3,2,1,39,105,106,10,37,0,0,106,107,5,9,0,0,107,152,3,
2,1,37,108,109,10,35,0,0,109,110,5,12,0,0,110,152,3,2,1,36,111,112,10,34,
0,0,112,113,5,62,0,0,113,152,3,2,1,35,114,115,10,33,0,0,115,116,7,4,0,0,
116,152,3,2,1,34,117,118,10,32,0,0,118,119,7,1,0,0,119,152,3,2,1,33,120,
121,10,31,0,0,121,122,7,5,0,0,122,152,3,2,1,32,123,124,10,29,0,0,124,125,
7,6,0,0,125,152,3,2,1,30,126,127,10,28,0,0,127,128,7,7,0,0,128,152,3,2,1,
29,129,130,10,26,0,0,130,131,5,26,0,0,131,152,3,2,1,27,132,133,10,25,0,0,
133,134,7,8,0,0,134,152,3,2,1,26,135,136,10,41,0,0,136,137,5,2,0,0,137,138,
3,10,5,0,138,139,5,3,0,0,139,140,5,3,0,0,140,152,1,0,0,0,141,142,10,40,0,
0,142,143,5,4,0,0,143,144,3,10,5,0,144,145,5,3,0,0,145,152,1,0,0,0,146,147,
10,23,0,0,147,148,5,34,0,0,148,149,3,10,5,0,149,150,5,35,0,0,150,152,1,0,
0,0,151,99,1,0,0,0,151,102,1,0,0,0,151,105,1,0,0,0,151,108,1,0,0,0,151,111,
1,0,0,0,151,114,1,0,0,0,151,117,1,0,0,0,151,120,1,0,0,0,151,123,1,0,0,0,
151,126,1,0,0,0,151,129,1,0,0,0,151,132,1,0,0,0,151,135,1,0,0,0,151,141,
1,0,0,0,151,146,1,0,0,0,152,155,1,0,0,0,153,151,1,0,0,0,153,154,1,0,0,0,
154,3,1,0,0,0,155,153,1,0,0,0,156,163,3,2,1,0,157,159,7,0,0,0,158,160,3,
2,1,0,159,158,1,0,0,0,159,160,1,0,0,0,160,162,1,0,0,0,161,157,1,0,0,0,162,
165,1,0,0,0,163,161,1,0,0,0,163,164,1,0,0,0,164,168,1,0,0,0,165,163,1,0,
0,0,166,168,1,0,0,0,167,156,1,0,0,0,167,166,1,0,0,0,168,5,1,0,0,0,169,174,
3,8,4,0,170,171,5,53,0,0,171,173,3,8,4,0,172,170,1,0,0,0,173,176,1,0,0,0,
174,172,1,0,0,0,174,175,1,0,0,0,175,7,1,0,0,0,176,174,1,0,0,0,177,184,5,
61,0,0,178,179,5,61,0,0,179,180,5,29,0,0,180,184,3,2,1,0,181,184,5,54,0,
0,182,184,5,55,0,0,183,177,1,0,0,0,183,178,1,0,0,0,183,181,1,0,0,0,183,182,
1,0,0,0,184,9,1,0,0,0,185,190,3,12,6,0,186,187,5,53,0,0,187,189,3,12,6,0,
188,186,1,0,0,0,189,192,1,0,0,0,190,188,1,0,0,0,190,191,1,0,0,0,191,11,1,
0,0,0,192,190,1,0,0,0,193,213,3,2,1,0,194,195,5,61,0,0,195,213,5,29,0,0,
196,197,5,61,0,0,197,198,5,29,0,0,198,213,3,2,1,0,199,200,5,60,0,0,200,213,
5,29,0,0,201,202,5,60,0,0,202,203,5,29,0,0,203,213,3,2,1,0,204,205,5,47,
0,0,205,213,5,29,0,0,206,207,5,47,0,0,207,208,5,29,0,0,208,213,3,2,1,0,209,
213,5,54,0,0,210,213,5,55,0,0,211,213,1,0,0,0,212,193,1,0,0,0,212,194,1,
0,0,0,212,196,1,0,0,0,212,199,1,0,0,0,212,201,1,0,0,0,212,204,1,0,0,0,212,
206,1,0,0,0,212,209,1,0,0,0,212,210,1,0,0,0,212,211,1,0,0,0,213,13,1,0,0,
0,14,18,22,24,39,97,151,153,159,163,167,174,183,190,212];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class RParser extends antlr4.Parser {

    static grammarFileName = "R.g4";
    static literalNames = [ null, "';'", "'[['", "']'", "'['", "'::'", "':::'", 
                            "'$'", "'@'", "'^'", "'-'", "'+'", "':'", "'*'", 
                            "'/'", "'>'", "'>='", "'<'", "'<='", "'=='", 
                            "'!='", "'!'", "'&'", "'&&'", "'|'", "'||'", 
                            "'~'", "'<-'", "'<<-'", "'='", "'->'", "'->>'", 
                            "':='", "'function'", "'('", "')'", "'{'", "'}'", 
                            "'if'", "'else'", "'for'", "'in'", "'while'", 
                            "'repeat'", "'?'", "'next'", "'break'", "'NULL'", 
                            "'NA'", "'Inf'", "'NaN'", "'TRUE'", "'FALSE'", 
                            "','", "'...'", "'.'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "HEX", "INT", "FLOAT", "COMPLEX", "STRING", 
                             "ID", "USER_OP", "NL", "WS" ];
    static ruleNames = [ "prog", "expr", "exprlist", "formlist", "form", 
                         "sublist", "sub" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = RParser.ruleNames;
        this.literalNames = RParser.literalNames;
        this.symbolicNames = RParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 39);
    		case 1:
    			return this.precpred(this._ctx, 38);
    		case 2:
    			return this.precpred(this._ctx, 37);
    		case 3:
    			return this.precpred(this._ctx, 35);
    		case 4:
    			return this.precpred(this._ctx, 34);
    		case 5:
    			return this.precpred(this._ctx, 33);
    		case 6:
    			return this.precpred(this._ctx, 32);
    		case 7:
    			return this.precpred(this._ctx, 31);
    		case 8:
    			return this.precpred(this._ctx, 29);
    		case 9:
    			return this.precpred(this._ctx, 28);
    		case 10:
    			return this.precpred(this._ctx, 26);
    		case 11:
    			return this.precpred(this._ctx, 25);
    		case 12:
    			return this.precpred(this._ctx, 41);
    		case 13:
    			return this.precpred(this._ctx, 40);
    		case 14:
    			return this.precpred(this._ctx, 23);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, RParser.RULE_prog);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RParser.T__9) | (1 << RParser.T__10) | (1 << RParser.T__20) | (1 << RParser.T__25))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (RParser.T__32 - 33)) | (1 << (RParser.T__33 - 33)) | (1 << (RParser.T__35 - 33)) | (1 << (RParser.T__37 - 33)) | (1 << (RParser.T__39 - 33)) | (1 << (RParser.T__41 - 33)) | (1 << (RParser.T__42 - 33)) | (1 << (RParser.T__43 - 33)) | (1 << (RParser.T__44 - 33)) | (1 << (RParser.T__45 - 33)) | (1 << (RParser.T__46 - 33)) | (1 << (RParser.T__47 - 33)) | (1 << (RParser.T__48 - 33)) | (1 << (RParser.T__49 - 33)) | (1 << (RParser.T__50 - 33)) | (1 << (RParser.T__51 - 33)) | (1 << (RParser.HEX - 33)) | (1 << (RParser.INT - 33)) | (1 << (RParser.FLOAT - 33)) | (1 << (RParser.COMPLEX - 33)) | (1 << (RParser.STRING - 33)) | (1 << (RParser.ID - 33)) | (1 << (RParser.NL - 33)))) !== 0)) {
	            this.state = 22;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case RParser.T__9:
	            case RParser.T__10:
	            case RParser.T__20:
	            case RParser.T__25:
	            case RParser.T__32:
	            case RParser.T__33:
	            case RParser.T__35:
	            case RParser.T__37:
	            case RParser.T__39:
	            case RParser.T__41:
	            case RParser.T__42:
	            case RParser.T__43:
	            case RParser.T__44:
	            case RParser.T__45:
	            case RParser.T__46:
	            case RParser.T__47:
	            case RParser.T__48:
	            case RParser.T__49:
	            case RParser.T__50:
	            case RParser.T__51:
	            case RParser.HEX:
	            case RParser.INT:
	            case RParser.FLOAT:
	            case RParser.COMPLEX:
	            case RParser.STRING:
	            case RParser.ID:
	                this.state = 14;
	                this.expr(0);
	                this.state = 18;
	                this._errHandler.sync(this);
	                var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                    if(_alt===1) {
	                        this.state = 15;
	                        _la = this._input.LA(1);
	                        if(!(_la===RParser.T__0 || _la===RParser.NL)) {
	                        this._errHandler.recoverInline(this);
	                        }
	                        else {
	                        	this._errHandler.reportMatch(this);
	                            this.consume();
	                        } 
	                    }
	                    this.state = 20;
	                    this._errHandler.sync(this);
	                    _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	                }

	                break;
	            case RParser.NL:
	                this.state = 21;
	                this.match(RParser.NL);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 26;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 27;
	        this.match(RParser.EOF);
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
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, RParser.RULE_expr, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 30;
	            _la = this._input.LA(1);
	            if(!(_la===RParser.T__9 || _la===RParser.T__10)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 31;
	            this.expr(36);
	            break;

	        case 2:
	            this.state = 32;
	            this.match(RParser.T__20);
	            this.state = 33;
	            this.expr(30);
	            break;

	        case 3:
	            this.state = 34;
	            this.match(RParser.T__25);
	            this.state = 35;
	            this.expr(27);
	            break;

	        case 4:
	            this.state = 36;
	            this.match(RParser.T__32);
	            this.state = 37;
	            this.match(RParser.T__33);
	            this.state = 39;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 54)) & ~0x1f) == 0 && ((1 << (_la - 54)) & ((1 << (RParser.T__53 - 54)) | (1 << (RParser.T__54 - 54)) | (1 << (RParser.ID - 54)))) !== 0)) {
	                this.state = 38;
	                this.formlist();
	            }

	            this.state = 41;
	            this.match(RParser.T__34);
	            this.state = 42;
	            this.expr(24);
	            break;

	        case 5:
	            this.state = 43;
	            this.match(RParser.T__35);
	            this.state = 44;
	            this.exprlist();
	            this.state = 45;
	            this.match(RParser.T__36);
	            break;

	        case 6:
	            this.state = 47;
	            this.match(RParser.T__37);
	            this.state = 48;
	            this.match(RParser.T__33);
	            this.state = 49;
	            this.expr(0);
	            this.state = 50;
	            this.match(RParser.T__34);
	            this.state = 51;
	            this.expr(21);
	            break;

	        case 7:
	            this.state = 53;
	            this.match(RParser.T__37);
	            this.state = 54;
	            this.match(RParser.T__33);
	            this.state = 55;
	            this.expr(0);
	            this.state = 56;
	            this.match(RParser.T__34);
	            this.state = 57;
	            this.expr(0);
	            this.state = 58;
	            this.match(RParser.T__38);
	            this.state = 59;
	            this.expr(20);
	            break;

	        case 8:
	            this.state = 61;
	            this.match(RParser.T__39);
	            this.state = 62;
	            this.match(RParser.T__33);
	            this.state = 63;
	            this.match(RParser.ID);
	            this.state = 64;
	            this.match(RParser.T__40);
	            this.state = 65;
	            this.expr(0);
	            this.state = 66;
	            this.match(RParser.T__34);
	            this.state = 67;
	            this.expr(19);
	            break;

	        case 9:
	            this.state = 69;
	            this.match(RParser.T__41);
	            this.state = 70;
	            this.match(RParser.T__33);
	            this.state = 71;
	            this.expr(0);
	            this.state = 72;
	            this.match(RParser.T__34);
	            this.state = 73;
	            this.expr(18);
	            break;

	        case 10:
	            this.state = 75;
	            this.match(RParser.T__42);
	            this.state = 76;
	            this.expr(17);
	            break;

	        case 11:
	            this.state = 77;
	            this.match(RParser.T__43);
	            this.state = 78;
	            this.expr(16);
	            break;

	        case 12:
	            this.state = 79;
	            this.match(RParser.T__44);
	            break;

	        case 13:
	            this.state = 80;
	            this.match(RParser.T__45);
	            break;

	        case 14:
	            this.state = 81;
	            this.match(RParser.T__33);
	            this.state = 82;
	            this.expr(0);
	            this.state = 83;
	            this.match(RParser.T__34);
	            break;

	        case 15:
	            this.state = 85;
	            this.match(RParser.ID);
	            break;

	        case 16:
	            this.state = 86;
	            this.match(RParser.STRING);
	            break;

	        case 17:
	            this.state = 87;
	            this.match(RParser.HEX);
	            break;

	        case 18:
	            this.state = 88;
	            this.match(RParser.INT);
	            break;

	        case 19:
	            this.state = 89;
	            this.match(RParser.FLOAT);
	            break;

	        case 20:
	            this.state = 90;
	            this.match(RParser.COMPLEX);
	            break;

	        case 21:
	            this.state = 91;
	            this.match(RParser.T__46);
	            break;

	        case 22:
	            this.state = 92;
	            this.match(RParser.T__47);
	            break;

	        case 23:
	            this.state = 93;
	            this.match(RParser.T__48);
	            break;

	        case 24:
	            this.state = 94;
	            this.match(RParser.T__49);
	            break;

	        case 25:
	            this.state = 95;
	            this.match(RParser.T__50);
	            break;

	        case 26:
	            this.state = 96;
	            this.match(RParser.T__51);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 153;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 151;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
	                    this.state = 99;
	                    if (!( this.precpred(this._ctx, 39))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 39)");
	                    }
	                    this.state = 100;
	                    _la = this._input.LA(1);
	                    if(!(_la===RParser.T__4 || _la===RParser.T__5)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 101;
	                    this.expr(40);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
	                    this.state = 102;
	                    if (!( this.precpred(this._ctx, 38))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 38)");
	                    }
	                    this.state = 103;
	                    _la = this._input.LA(1);
	                    if(!(_la===RParser.T__6 || _la===RParser.T__7)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 104;
	                    this.expr(39);
	                    break;

	                case 3:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
	                    this.state = 105;
	                    if (!( this.precpred(this._ctx, 37))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 37)");
	                    }
	                    this.state = 106;
	                    this.match(RParser.T__8);
	                    this.state = 107;
	                    this.expr(37);
	                    break;

	                case 4:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
	                    this.state = 108;
	                    if (!( this.precpred(this._ctx, 35))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 35)");
	                    }
	                    this.state = 109;
	                    this.match(RParser.T__11);
	                    this.state = 110;
	                    this.expr(36);
	                    break;

	                case 5:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
	                    this.state = 111;
	                    if (!( this.precpred(this._ctx, 34))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 34)");
	                    }
	                    this.state = 112;
	                    this.match(RParser.USER_OP);
	                    this.state = 113;
	                    this.expr(35);
	                    break;

	                case 6:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
	                    this.state = 114;
	                    if (!( this.precpred(this._ctx, 33))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 33)");
	                    }
	                    this.state = 115;
	                    _la = this._input.LA(1);
	                    if(!(_la===RParser.T__12 || _la===RParser.T__13)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 116;
	                    this.expr(34);
	                    break;

	                case 7:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
	                    this.state = 117;
	                    if (!( this.precpred(this._ctx, 32))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 32)");
	                    }
	                    this.state = 118;
	                    _la = this._input.LA(1);
	                    if(!(_la===RParser.T__9 || _la===RParser.T__10)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 119;
	                    this.expr(33);
	                    break;

	                case 8:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
	                    this.state = 120;
	                    if (!( this.precpred(this._ctx, 31))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 31)");
	                    }
	                    this.state = 121;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RParser.T__14) | (1 << RParser.T__15) | (1 << RParser.T__16) | (1 << RParser.T__17) | (1 << RParser.T__18) | (1 << RParser.T__19))) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 122;
	                    this.expr(32);
	                    break;

	                case 9:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
	                    this.state = 123;
	                    if (!( this.precpred(this._ctx, 29))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 29)");
	                    }
	                    this.state = 124;
	                    _la = this._input.LA(1);
	                    if(!(_la===RParser.T__21 || _la===RParser.T__22)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 125;
	                    this.expr(30);
	                    break;

	                case 10:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
	                    this.state = 126;
	                    if (!( this.precpred(this._ctx, 28))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 28)");
	                    }
	                    this.state = 127;
	                    _la = this._input.LA(1);
	                    if(!(_la===RParser.T__23 || _la===RParser.T__24)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 128;
	                    this.expr(29);
	                    break;

	                case 11:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
	                    this.state = 129;
	                    if (!( this.precpred(this._ctx, 26))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 26)");
	                    }
	                    this.state = 130;
	                    this.match(RParser.T__25);
	                    this.state = 131;
	                    this.expr(27);
	                    break;

	                case 12:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
	                    this.state = 132;
	                    if (!( this.precpred(this._ctx, 25))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 25)");
	                    }
	                    this.state = 133;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 27)) & ~0x1f) == 0 && ((1 << (_la - 27)) & ((1 << (RParser.T__26 - 27)) | (1 << (RParser.T__27 - 27)) | (1 << (RParser.T__28 - 27)) | (1 << (RParser.T__29 - 27)) | (1 << (RParser.T__30 - 27)) | (1 << (RParser.T__31 - 27)))) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 134;
	                    this.expr(26);
	                    break;

	                case 13:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
	                    this.state = 135;
	                    if (!( this.precpred(this._ctx, 41))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 41)");
	                    }
	                    this.state = 136;
	                    this.match(RParser.T__1);
	                    this.state = 137;
	                    this.sublist();
	                    this.state = 138;
	                    this.match(RParser.T__2);
	                    this.state = 139;
	                    this.match(RParser.T__2);
	                    break;

	                case 14:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
	                    this.state = 141;
	                    if (!( this.precpred(this._ctx, 40))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 40)");
	                    }
	                    this.state = 142;
	                    this.match(RParser.T__3);
	                    this.state = 143;
	                    this.sublist();
	                    this.state = 144;
	                    this.match(RParser.T__2);
	                    break;

	                case 15:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
	                    this.state = 146;
	                    if (!( this.precpred(this._ctx, 23))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 23)");
	                    }
	                    this.state = 147;
	                    this.match(RParser.T__33);
	                    this.state = 148;
	                    this.sublist();
	                    this.state = 149;
	                    this.match(RParser.T__34);
	                    break;

	                } 
	            }
	            this.state = 155;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
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



	exprlist() {
	    let localctx = new ExprlistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, RParser.RULE_exprlist);
	    var _la = 0; // Token type
	    try {
	        this.state = 167;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case RParser.T__9:
	        case RParser.T__10:
	        case RParser.T__20:
	        case RParser.T__25:
	        case RParser.T__32:
	        case RParser.T__33:
	        case RParser.T__35:
	        case RParser.T__37:
	        case RParser.T__39:
	        case RParser.T__41:
	        case RParser.T__42:
	        case RParser.T__43:
	        case RParser.T__44:
	        case RParser.T__45:
	        case RParser.T__46:
	        case RParser.T__47:
	        case RParser.T__48:
	        case RParser.T__49:
	        case RParser.T__50:
	        case RParser.T__51:
	        case RParser.HEX:
	        case RParser.INT:
	        case RParser.FLOAT:
	        case RParser.COMPLEX:
	        case RParser.STRING:
	        case RParser.ID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 156;
	            this.expr(0);
	            this.state = 163;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===RParser.T__0 || _la===RParser.NL) {
	                this.state = 157;
	                _la = this._input.LA(1);
	                if(!(_la===RParser.T__0 || _la===RParser.NL)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 159;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RParser.T__9) | (1 << RParser.T__10) | (1 << RParser.T__20) | (1 << RParser.T__25))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (RParser.T__32 - 33)) | (1 << (RParser.T__33 - 33)) | (1 << (RParser.T__35 - 33)) | (1 << (RParser.T__37 - 33)) | (1 << (RParser.T__39 - 33)) | (1 << (RParser.T__41 - 33)) | (1 << (RParser.T__42 - 33)) | (1 << (RParser.T__43 - 33)) | (1 << (RParser.T__44 - 33)) | (1 << (RParser.T__45 - 33)) | (1 << (RParser.T__46 - 33)) | (1 << (RParser.T__47 - 33)) | (1 << (RParser.T__48 - 33)) | (1 << (RParser.T__49 - 33)) | (1 << (RParser.T__50 - 33)) | (1 << (RParser.T__51 - 33)) | (1 << (RParser.HEX - 33)) | (1 << (RParser.INT - 33)) | (1 << (RParser.FLOAT - 33)) | (1 << (RParser.COMPLEX - 33)) | (1 << (RParser.STRING - 33)) | (1 << (RParser.ID - 33)))) !== 0)) {
	                    this.state = 158;
	                    this.expr(0);
	                }

	                this.state = 165;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case RParser.T__36:
	            this.enterOuterAlt(localctx, 2);

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



	formlist() {
	    let localctx = new FormlistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, RParser.RULE_formlist);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 169;
	        this.form();
	        this.state = 174;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===RParser.T__52) {
	            this.state = 170;
	            this.match(RParser.T__52);
	            this.state = 171;
	            this.form();
	            this.state = 176;
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



	form() {
	    let localctx = new FormContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, RParser.RULE_form);
	    try {
	        this.state = 183;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 177;
	            this.match(RParser.ID);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 178;
	            this.match(RParser.ID);
	            this.state = 179;
	            this.match(RParser.T__28);
	            this.state = 180;
	            this.expr(0);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 181;
	            this.match(RParser.T__53);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 182;
	            this.match(RParser.T__54);
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



	sublist() {
	    let localctx = new SublistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, RParser.RULE_sublist);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 185;
	        this.sub();
	        this.state = 190;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===RParser.T__52) {
	            this.state = 186;
	            this.match(RParser.T__52);
	            this.state = 187;
	            this.sub();
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



	sub() {
	    let localctx = new SubContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, RParser.RULE_sub);
	    try {
	        this.state = 212;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 193;
	            this.expr(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 194;
	            this.match(RParser.ID);
	            this.state = 195;
	            this.match(RParser.T__28);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 196;
	            this.match(RParser.ID);
	            this.state = 197;
	            this.match(RParser.T__28);
	            this.state = 198;
	            this.expr(0);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 199;
	            this.match(RParser.STRING);
	            this.state = 200;
	            this.match(RParser.T__28);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 201;
	            this.match(RParser.STRING);
	            this.state = 202;
	            this.match(RParser.T__28);
	            this.state = 203;
	            this.expr(0);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 204;
	            this.match(RParser.T__46);
	            this.state = 205;
	            this.match(RParser.T__28);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 206;
	            this.match(RParser.T__46);
	            this.state = 207;
	            this.match(RParser.T__28);
	            this.state = 208;
	            this.expr(0);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 209;
	            this.match(RParser.T__53);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 210;
	            this.match(RParser.T__54);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);

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

RParser.EOF = antlr4.Token.EOF;
RParser.T__0 = 1;
RParser.T__1 = 2;
RParser.T__2 = 3;
RParser.T__3 = 4;
RParser.T__4 = 5;
RParser.T__5 = 6;
RParser.T__6 = 7;
RParser.T__7 = 8;
RParser.T__8 = 9;
RParser.T__9 = 10;
RParser.T__10 = 11;
RParser.T__11 = 12;
RParser.T__12 = 13;
RParser.T__13 = 14;
RParser.T__14 = 15;
RParser.T__15 = 16;
RParser.T__16 = 17;
RParser.T__17 = 18;
RParser.T__18 = 19;
RParser.T__19 = 20;
RParser.T__20 = 21;
RParser.T__21 = 22;
RParser.T__22 = 23;
RParser.T__23 = 24;
RParser.T__24 = 25;
RParser.T__25 = 26;
RParser.T__26 = 27;
RParser.T__27 = 28;
RParser.T__28 = 29;
RParser.T__29 = 30;
RParser.T__30 = 31;
RParser.T__31 = 32;
RParser.T__32 = 33;
RParser.T__33 = 34;
RParser.T__34 = 35;
RParser.T__35 = 36;
RParser.T__36 = 37;
RParser.T__37 = 38;
RParser.T__38 = 39;
RParser.T__39 = 40;
RParser.T__40 = 41;
RParser.T__41 = 42;
RParser.T__42 = 43;
RParser.T__43 = 44;
RParser.T__44 = 45;
RParser.T__45 = 46;
RParser.T__46 = 47;
RParser.T__47 = 48;
RParser.T__48 = 49;
RParser.T__49 = 50;
RParser.T__50 = 51;
RParser.T__51 = 52;
RParser.T__52 = 53;
RParser.T__53 = 54;
RParser.T__54 = 55;
RParser.HEX = 56;
RParser.INT = 57;
RParser.FLOAT = 58;
RParser.COMPLEX = 59;
RParser.STRING = 60;
RParser.ID = 61;
RParser.USER_OP = 62;
RParser.NL = 63;
RParser.WS = 64;

RParser.RULE_prog = 0;
RParser.RULE_expr = 1;
RParser.RULE_exprlist = 2;
RParser.RULE_formlist = 3;
RParser.RULE_form = 4;
RParser.RULE_sublist = 5;
RParser.RULE_sub = 6;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RParser.RULE_prog;
    }

	EOF() {
	    return this.getToken(RParser.EOF, 0);
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

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RParser.NL);
	    } else {
	        return this.getToken(RParser.NL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitProg(this);
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
        this.ruleIndex = RParser.RULE_expr;
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

	formlist() {
	    return this.getTypedRuleContext(FormlistContext,0);
	};

	exprlist() {
	    return this.getTypedRuleContext(ExprlistContext,0);
	};

	ID() {
	    return this.getToken(RParser.ID, 0);
	};

	STRING() {
	    return this.getToken(RParser.STRING, 0);
	};

	HEX() {
	    return this.getToken(RParser.HEX, 0);
	};

	INT() {
	    return this.getToken(RParser.INT, 0);
	};

	FLOAT() {
	    return this.getToken(RParser.FLOAT, 0);
	};

	COMPLEX() {
	    return this.getToken(RParser.COMPLEX, 0);
	};

	USER_OP() {
	    return this.getToken(RParser.USER_OP, 0);
	};

	sublist() {
	    return this.getTypedRuleContext(SublistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitExpr(this);
		}
	}


}



class ExprlistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RParser.RULE_exprlist;
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

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RParser.NL);
	    } else {
	        return this.getToken(RParser.NL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterExprlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitExprlist(this);
		}
	}


}



class FormlistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RParser.RULE_formlist;
    }

	form = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormContext);
	    } else {
	        return this.getTypedRuleContext(FormContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterFormlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitFormlist(this);
		}
	}


}



class FormContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RParser.RULE_form;
    }

	ID() {
	    return this.getToken(RParser.ID, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterForm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitForm(this);
		}
	}


}



class SublistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RParser.RULE_sublist;
    }

	sub = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SubContext);
	    } else {
	        return this.getTypedRuleContext(SubContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterSublist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitSublist(this);
		}
	}


}



class SubContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RParser.RULE_sub;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	ID() {
	    return this.getToken(RParser.ID, 0);
	};

	STRING() {
	    return this.getToken(RParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterSub(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitSub(this);
		}
	}


}




RParser.ProgContext = ProgContext; 
RParser.ExprContext = ExprContext; 
RParser.ExprlistContext = ExprlistContext; 
RParser.FormlistContext = FormlistContext; 
RParser.FormContext = FormContext; 
RParser.SublistContext = SublistContext; 
RParser.SubContext = SubContext; 
