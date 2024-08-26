// Generated from Resources/Parsers/r/RFilter.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import RFilterListener from './RFilterListener.js';
const serializedATN = [4,1,64,147,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,1,0,1,0,1,0,5,0,14,8,0,10,0,12,0,17,9,0,1,0,1,0,1,1,1,1,4,1,23,8,1,11,
1,12,1,24,1,2,1,2,3,2,29,8,2,1,2,1,2,1,2,3,2,34,8,2,1,2,1,2,1,2,1,2,5,2,
40,8,2,10,2,12,2,43,9,2,1,2,1,2,1,2,1,2,1,2,5,2,50,8,2,10,2,12,2,53,9,2,
1,2,1,2,1,2,1,2,5,2,59,8,2,10,2,12,2,62,9,2,1,2,1,2,1,2,1,2,5,2,68,8,2,10,
2,12,2,71,9,2,1,2,1,2,1,2,1,2,3,2,77,8,2,1,2,1,2,1,2,5,2,82,8,2,10,2,12,
2,85,9,2,1,2,1,2,3,2,89,8,2,1,2,1,2,3,2,93,8,2,1,2,1,2,1,2,5,2,98,8,2,10,
2,12,2,101,9,2,1,2,1,2,3,2,105,8,2,1,2,1,2,3,2,109,8,2,1,2,1,2,1,2,5,2,114,
8,2,10,2,12,2,117,9,2,1,2,1,2,3,2,121,8,2,1,2,1,2,3,2,125,8,2,1,2,1,2,1,
2,5,2,130,8,2,10,2,12,2,133,9,2,1,2,1,2,3,2,137,8,2,1,2,1,2,3,2,141,8,2,
1,3,1,3,1,4,1,4,1,4,0,0,5,0,2,4,6,8,0,2,2,0,45,52,56,61,6,0,5,27,29,30,41,
41,43,44,53,54,62,62,182,0,15,1,0,0,0,2,22,1,0,0,0,4,140,1,0,0,0,6,142,1,
0,0,0,8,144,1,0,0,0,10,14,3,4,2,0,11,14,5,63,0,0,12,14,5,1,0,0,13,10,1,0,
0,0,13,11,1,0,0,0,13,12,1,0,0,0,14,17,1,0,0,0,15,13,1,0,0,0,15,16,1,0,0,
0,16,18,1,0,0,0,17,15,1,0,0,0,18,19,5,0,0,1,19,1,1,0,0,0,20,21,5,63,0,0,
21,23,6,1,-1,0,22,20,1,0,0,0,23,24,1,0,0,0,24,22,1,0,0,0,24,25,1,0,0,0,25,
3,1,0,0,0,26,28,3,8,4,0,27,29,3,2,1,0,28,27,1,0,0,0,28,29,1,0,0,0,29,141,
1,0,0,0,30,141,3,6,3,0,31,33,5,36,0,0,32,34,3,2,1,0,33,32,1,0,0,0,33,34,
1,0,0,0,34,35,1,0,0,0,35,41,6,2,-1,0,36,40,3,4,2,0,37,40,5,63,0,0,38,40,
5,1,0,0,39,36,1,0,0,0,39,37,1,0,0,0,39,38,1,0,0,0,40,43,1,0,0,0,41,39,1,
0,0,0,41,42,1,0,0,0,42,44,1,0,0,0,43,41,1,0,0,0,44,45,6,2,-1,0,45,141,5,
37,0,0,46,51,5,34,0,0,47,50,3,4,2,0,48,50,3,2,1,0,49,47,1,0,0,0,49,48,1,
0,0,0,50,53,1,0,0,0,51,49,1,0,0,0,51,52,1,0,0,0,52,54,1,0,0,0,53,51,1,0,
0,0,54,141,5,35,0,0,55,60,5,4,0,0,56,59,3,4,2,0,57,59,3,2,1,0,58,56,1,0,
0,0,58,57,1,0,0,0,59,62,1,0,0,0,60,58,1,0,0,0,60,61,1,0,0,0,61,63,1,0,0,
0,62,60,1,0,0,0,63,141,5,3,0,0,64,69,5,2,0,0,65,68,3,4,2,0,66,68,3,2,1,0,
67,65,1,0,0,0,67,66,1,0,0,0,68,71,1,0,0,0,69,67,1,0,0,0,69,70,1,0,0,0,70,
72,1,0,0,0,71,69,1,0,0,0,72,73,5,3,0,0,73,141,5,3,0,0,74,76,5,33,0,0,75,
77,3,2,1,0,76,75,1,0,0,0,76,77,1,0,0,0,77,78,1,0,0,0,78,83,5,34,0,0,79,82,
3,4,2,0,80,82,3,2,1,0,81,79,1,0,0,0,81,80,1,0,0,0,82,85,1,0,0,0,83,81,1,
0,0,0,83,84,1,0,0,0,84,86,1,0,0,0,85,83,1,0,0,0,86,88,5,35,0,0,87,89,3,2,
1,0,88,87,1,0,0,0,88,89,1,0,0,0,89,141,1,0,0,0,90,92,5,40,0,0,91,93,3,2,
1,0,92,91,1,0,0,0,92,93,1,0,0,0,93,94,1,0,0,0,94,99,5,34,0,0,95,98,3,4,2,
0,96,98,3,2,1,0,97,95,1,0,0,0,97,96,1,0,0,0,98,101,1,0,0,0,99,97,1,0,0,0,
99,100,1,0,0,0,100,102,1,0,0,0,101,99,1,0,0,0,102,104,5,35,0,0,103,105,3,
2,1,0,104,103,1,0,0,0,104,105,1,0,0,0,105,141,1,0,0,0,106,108,5,42,0,0,107,
109,3,2,1,0,108,107,1,0,0,0,108,109,1,0,0,0,109,110,1,0,0,0,110,115,5,34,
0,0,111,114,3,4,2,0,112,114,3,2,1,0,113,111,1,0,0,0,113,112,1,0,0,0,114,
117,1,0,0,0,115,113,1,0,0,0,115,116,1,0,0,0,116,118,1,0,0,0,117,115,1,0,
0,0,118,120,5,35,0,0,119,121,3,2,1,0,120,119,1,0,0,0,120,121,1,0,0,0,121,
141,1,0,0,0,122,124,5,38,0,0,123,125,3,2,1,0,124,123,1,0,0,0,124,125,1,0,
0,0,125,126,1,0,0,0,126,131,5,34,0,0,127,130,3,4,2,0,128,130,3,2,1,0,129,
127,1,0,0,0,129,128,1,0,0,0,130,133,1,0,0,0,131,129,1,0,0,0,131,132,1,0,
0,0,132,134,1,0,0,0,133,131,1,0,0,0,134,136,5,35,0,0,135,137,3,2,1,0,136,
135,1,0,0,0,136,137,1,0,0,0,137,141,1,0,0,0,138,139,5,39,0,0,139,141,6,2,
-1,0,140,26,1,0,0,0,140,30,1,0,0,0,140,31,1,0,0,0,140,46,1,0,0,0,140,55,
1,0,0,0,140,64,1,0,0,0,140,74,1,0,0,0,140,90,1,0,0,0,140,106,1,0,0,0,140,
122,1,0,0,0,140,138,1,0,0,0,141,5,1,0,0,0,142,143,7,0,0,0,143,7,1,0,0,0,
144,145,7,1,0,0,145,9,1,0,0,0,30,13,15,24,28,33,39,41,49,51,58,60,67,69,
76,81,83,88,92,97,99,104,108,113,115,120,124,129,131,136,140];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class RFilter extends antlr4.Parser {

    static grammarFileName = "RFilter.g4";
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
    static ruleNames = [ "stream", "eat", "elem", "atom", "op" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = RFilter.ruleNames;
        this.literalNames = RFilter.literalNames;
        this.symbolicNames = RFilter.symbolicNames;

        protected int curlies = 0;

    }

    get atn() {
        return atn;
    }



	stream() {
	    let localctx = new StreamContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, RFilter.RULE_stream);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RFilter.T__0) | (1 << RFilter.T__1) | (1 << RFilter.T__3) | (1 << RFilter.T__4) | (1 << RFilter.T__5) | (1 << RFilter.T__6) | (1 << RFilter.T__7) | (1 << RFilter.T__8) | (1 << RFilter.T__9) | (1 << RFilter.T__10) | (1 << RFilter.T__11) | (1 << RFilter.T__12) | (1 << RFilter.T__13) | (1 << RFilter.T__14) | (1 << RFilter.T__15) | (1 << RFilter.T__16) | (1 << RFilter.T__17) | (1 << RFilter.T__18) | (1 << RFilter.T__19) | (1 << RFilter.T__20) | (1 << RFilter.T__21) | (1 << RFilter.T__22) | (1 << RFilter.T__23) | (1 << RFilter.T__24) | (1 << RFilter.T__25) | (1 << RFilter.T__26) | (1 << RFilter.T__28) | (1 << RFilter.T__29))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (RFilter.T__32 - 33)) | (1 << (RFilter.T__33 - 33)) | (1 << (RFilter.T__35 - 33)) | (1 << (RFilter.T__37 - 33)) | (1 << (RFilter.T__38 - 33)) | (1 << (RFilter.T__39 - 33)) | (1 << (RFilter.T__40 - 33)) | (1 << (RFilter.T__41 - 33)) | (1 << (RFilter.T__42 - 33)) | (1 << (RFilter.T__43 - 33)) | (1 << (RFilter.T__44 - 33)) | (1 << (RFilter.T__45 - 33)) | (1 << (RFilter.T__46 - 33)) | (1 << (RFilter.T__47 - 33)) | (1 << (RFilter.T__48 - 33)) | (1 << (RFilter.T__49 - 33)) | (1 << (RFilter.T__50 - 33)) | (1 << (RFilter.T__51 - 33)) | (1 << (RFilter.T__52 - 33)) | (1 << (RFilter.T__53 - 33)) | (1 << (RFilter.HEX - 33)) | (1 << (RFilter.INT - 33)) | (1 << (RFilter.FLOAT - 33)) | (1 << (RFilter.COMPLEX - 33)) | (1 << (RFilter.STRING - 33)) | (1 << (RFilter.ID - 33)) | (1 << (RFilter.USER_OP - 33)) | (1 << (RFilter.NL - 33)))) !== 0)) {
	            this.state = 13;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case RFilter.T__1:
	            case RFilter.T__3:
	            case RFilter.T__4:
	            case RFilter.T__5:
	            case RFilter.T__6:
	            case RFilter.T__7:
	            case RFilter.T__8:
	            case RFilter.T__9:
	            case RFilter.T__10:
	            case RFilter.T__11:
	            case RFilter.T__12:
	            case RFilter.T__13:
	            case RFilter.T__14:
	            case RFilter.T__15:
	            case RFilter.T__16:
	            case RFilter.T__17:
	            case RFilter.T__18:
	            case RFilter.T__19:
	            case RFilter.T__20:
	            case RFilter.T__21:
	            case RFilter.T__22:
	            case RFilter.T__23:
	            case RFilter.T__24:
	            case RFilter.T__25:
	            case RFilter.T__26:
	            case RFilter.T__28:
	            case RFilter.T__29:
	            case RFilter.T__32:
	            case RFilter.T__33:
	            case RFilter.T__35:
	            case RFilter.T__37:
	            case RFilter.T__38:
	            case RFilter.T__39:
	            case RFilter.T__40:
	            case RFilter.T__41:
	            case RFilter.T__42:
	            case RFilter.T__43:
	            case RFilter.T__44:
	            case RFilter.T__45:
	            case RFilter.T__46:
	            case RFilter.T__47:
	            case RFilter.T__48:
	            case RFilter.T__49:
	            case RFilter.T__50:
	            case RFilter.T__51:
	            case RFilter.T__52:
	            case RFilter.T__53:
	            case RFilter.HEX:
	            case RFilter.INT:
	            case RFilter.FLOAT:
	            case RFilter.COMPLEX:
	            case RFilter.STRING:
	            case RFilter.ID:
	            case RFilter.USER_OP:
	                this.state = 10;
	                this.elem();
	                break;
	            case RFilter.NL:
	                this.state = 11;
	                this.match(RFilter.NL);
	                break;
	            case RFilter.T__0:
	                this.state = 12;
	                this.match(RFilter.T__0);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 17;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 18;
	        this.match(RFilter.EOF);
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



	eat() {
	    let localctx = new EatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, RFilter.RULE_eat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 20;
	        		localctx._NL = this.match(RFilter.NL);
	        		((WritableToken)localctx._NL).setChannel(Token.HIDDEN_CHANNEL);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 24; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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



	elem() {
	    let localctx = new ElemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, RFilter.RULE_elem);
	    var _la = 0; // Token type
	    try {
	        this.state = 140;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case RFilter.T__4:
	        case RFilter.T__5:
	        case RFilter.T__6:
	        case RFilter.T__7:
	        case RFilter.T__8:
	        case RFilter.T__9:
	        case RFilter.T__10:
	        case RFilter.T__11:
	        case RFilter.T__12:
	        case RFilter.T__13:
	        case RFilter.T__14:
	        case RFilter.T__15:
	        case RFilter.T__16:
	        case RFilter.T__17:
	        case RFilter.T__18:
	        case RFilter.T__19:
	        case RFilter.T__20:
	        case RFilter.T__21:
	        case RFilter.T__22:
	        case RFilter.T__23:
	        case RFilter.T__24:
	        case RFilter.T__25:
	        case RFilter.T__26:
	        case RFilter.T__28:
	        case RFilter.T__29:
	        case RFilter.T__40:
	        case RFilter.T__42:
	        case RFilter.T__43:
	        case RFilter.T__52:
	        case RFilter.T__53:
	        case RFilter.USER_OP:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 26;
	            this.op();
	            this.state = 28;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	            if(la_===1) {
	                this.state = 27;
	                this.eat();

	            }
	            break;
	        case RFilter.T__44:
	        case RFilter.T__45:
	        case RFilter.T__46:
	        case RFilter.T__47:
	        case RFilter.T__48:
	        case RFilter.T__49:
	        case RFilter.T__50:
	        case RFilter.T__51:
	        case RFilter.HEX:
	        case RFilter.INT:
	        case RFilter.FLOAT:
	        case RFilter.COMPLEX:
	        case RFilter.STRING:
	        case RFilter.ID:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 30;
	            this.atom();
	            break;
	        case RFilter.T__35:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 31;
	            this.match(RFilter.T__35);
	            this.state = 33;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	            if(la_===1) {
	                this.state = 32;
	                this.eat();

	            }
	            curlies++;
	            this.state = 41;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RFilter.T__0) | (1 << RFilter.T__1) | (1 << RFilter.T__3) | (1 << RFilter.T__4) | (1 << RFilter.T__5) | (1 << RFilter.T__6) | (1 << RFilter.T__7) | (1 << RFilter.T__8) | (1 << RFilter.T__9) | (1 << RFilter.T__10) | (1 << RFilter.T__11) | (1 << RFilter.T__12) | (1 << RFilter.T__13) | (1 << RFilter.T__14) | (1 << RFilter.T__15) | (1 << RFilter.T__16) | (1 << RFilter.T__17) | (1 << RFilter.T__18) | (1 << RFilter.T__19) | (1 << RFilter.T__20) | (1 << RFilter.T__21) | (1 << RFilter.T__22) | (1 << RFilter.T__23) | (1 << RFilter.T__24) | (1 << RFilter.T__25) | (1 << RFilter.T__26) | (1 << RFilter.T__28) | (1 << RFilter.T__29))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (RFilter.T__32 - 33)) | (1 << (RFilter.T__33 - 33)) | (1 << (RFilter.T__35 - 33)) | (1 << (RFilter.T__37 - 33)) | (1 << (RFilter.T__38 - 33)) | (1 << (RFilter.T__39 - 33)) | (1 << (RFilter.T__40 - 33)) | (1 << (RFilter.T__41 - 33)) | (1 << (RFilter.T__42 - 33)) | (1 << (RFilter.T__43 - 33)) | (1 << (RFilter.T__44 - 33)) | (1 << (RFilter.T__45 - 33)) | (1 << (RFilter.T__46 - 33)) | (1 << (RFilter.T__47 - 33)) | (1 << (RFilter.T__48 - 33)) | (1 << (RFilter.T__49 - 33)) | (1 << (RFilter.T__50 - 33)) | (1 << (RFilter.T__51 - 33)) | (1 << (RFilter.T__52 - 33)) | (1 << (RFilter.T__53 - 33)) | (1 << (RFilter.HEX - 33)) | (1 << (RFilter.INT - 33)) | (1 << (RFilter.FLOAT - 33)) | (1 << (RFilter.COMPLEX - 33)) | (1 << (RFilter.STRING - 33)) | (1 << (RFilter.ID - 33)) | (1 << (RFilter.USER_OP - 33)) | (1 << (RFilter.NL - 33)))) !== 0)) {
	                this.state = 39;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case RFilter.T__1:
	                case RFilter.T__3:
	                case RFilter.T__4:
	                case RFilter.T__5:
	                case RFilter.T__6:
	                case RFilter.T__7:
	                case RFilter.T__8:
	                case RFilter.T__9:
	                case RFilter.T__10:
	                case RFilter.T__11:
	                case RFilter.T__12:
	                case RFilter.T__13:
	                case RFilter.T__14:
	                case RFilter.T__15:
	                case RFilter.T__16:
	                case RFilter.T__17:
	                case RFilter.T__18:
	                case RFilter.T__19:
	                case RFilter.T__20:
	                case RFilter.T__21:
	                case RFilter.T__22:
	                case RFilter.T__23:
	                case RFilter.T__24:
	                case RFilter.T__25:
	                case RFilter.T__26:
	                case RFilter.T__28:
	                case RFilter.T__29:
	                case RFilter.T__32:
	                case RFilter.T__33:
	                case RFilter.T__35:
	                case RFilter.T__37:
	                case RFilter.T__38:
	                case RFilter.T__39:
	                case RFilter.T__40:
	                case RFilter.T__41:
	                case RFilter.T__42:
	                case RFilter.T__43:
	                case RFilter.T__44:
	                case RFilter.T__45:
	                case RFilter.T__46:
	                case RFilter.T__47:
	                case RFilter.T__48:
	                case RFilter.T__49:
	                case RFilter.T__50:
	                case RFilter.T__51:
	                case RFilter.T__52:
	                case RFilter.T__53:
	                case RFilter.HEX:
	                case RFilter.INT:
	                case RFilter.FLOAT:
	                case RFilter.COMPLEX:
	                case RFilter.STRING:
	                case RFilter.ID:
	                case RFilter.USER_OP:
	                    this.state = 36;
	                    this.elem();
	                    break;
	                case RFilter.NL:
	                    this.state = 37;
	                    this.match(RFilter.NL);
	                    break;
	                case RFilter.T__0:
	                    this.state = 38;
	                    this.match(RFilter.T__0);
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 43;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            curlies--;
	            this.state = 45;
	            this.match(RFilter.T__36);
	            break;
	        case RFilter.T__33:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 46;
	            this.match(RFilter.T__33);
	            this.state = 51;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RFilter.T__1) | (1 << RFilter.T__3) | (1 << RFilter.T__4) | (1 << RFilter.T__5) | (1 << RFilter.T__6) | (1 << RFilter.T__7) | (1 << RFilter.T__8) | (1 << RFilter.T__9) | (1 << RFilter.T__10) | (1 << RFilter.T__11) | (1 << RFilter.T__12) | (1 << RFilter.T__13) | (1 << RFilter.T__14) | (1 << RFilter.T__15) | (1 << RFilter.T__16) | (1 << RFilter.T__17) | (1 << RFilter.T__18) | (1 << RFilter.T__19) | (1 << RFilter.T__20) | (1 << RFilter.T__21) | (1 << RFilter.T__22) | (1 << RFilter.T__23) | (1 << RFilter.T__24) | (1 << RFilter.T__25) | (1 << RFilter.T__26) | (1 << RFilter.T__28) | (1 << RFilter.T__29))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (RFilter.T__32 - 33)) | (1 << (RFilter.T__33 - 33)) | (1 << (RFilter.T__35 - 33)) | (1 << (RFilter.T__37 - 33)) | (1 << (RFilter.T__38 - 33)) | (1 << (RFilter.T__39 - 33)) | (1 << (RFilter.T__40 - 33)) | (1 << (RFilter.T__41 - 33)) | (1 << (RFilter.T__42 - 33)) | (1 << (RFilter.T__43 - 33)) | (1 << (RFilter.T__44 - 33)) | (1 << (RFilter.T__45 - 33)) | (1 << (RFilter.T__46 - 33)) | (1 << (RFilter.T__47 - 33)) | (1 << (RFilter.T__48 - 33)) | (1 << (RFilter.T__49 - 33)) | (1 << (RFilter.T__50 - 33)) | (1 << (RFilter.T__51 - 33)) | (1 << (RFilter.T__52 - 33)) | (1 << (RFilter.T__53 - 33)) | (1 << (RFilter.HEX - 33)) | (1 << (RFilter.INT - 33)) | (1 << (RFilter.FLOAT - 33)) | (1 << (RFilter.COMPLEX - 33)) | (1 << (RFilter.STRING - 33)) | (1 << (RFilter.ID - 33)) | (1 << (RFilter.USER_OP - 33)) | (1 << (RFilter.NL - 33)))) !== 0)) {
	                this.state = 49;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case RFilter.T__1:
	                case RFilter.T__3:
	                case RFilter.T__4:
	                case RFilter.T__5:
	                case RFilter.T__6:
	                case RFilter.T__7:
	                case RFilter.T__8:
	                case RFilter.T__9:
	                case RFilter.T__10:
	                case RFilter.T__11:
	                case RFilter.T__12:
	                case RFilter.T__13:
	                case RFilter.T__14:
	                case RFilter.T__15:
	                case RFilter.T__16:
	                case RFilter.T__17:
	                case RFilter.T__18:
	                case RFilter.T__19:
	                case RFilter.T__20:
	                case RFilter.T__21:
	                case RFilter.T__22:
	                case RFilter.T__23:
	                case RFilter.T__24:
	                case RFilter.T__25:
	                case RFilter.T__26:
	                case RFilter.T__28:
	                case RFilter.T__29:
	                case RFilter.T__32:
	                case RFilter.T__33:
	                case RFilter.T__35:
	                case RFilter.T__37:
	                case RFilter.T__38:
	                case RFilter.T__39:
	                case RFilter.T__40:
	                case RFilter.T__41:
	                case RFilter.T__42:
	                case RFilter.T__43:
	                case RFilter.T__44:
	                case RFilter.T__45:
	                case RFilter.T__46:
	                case RFilter.T__47:
	                case RFilter.T__48:
	                case RFilter.T__49:
	                case RFilter.T__50:
	                case RFilter.T__51:
	                case RFilter.T__52:
	                case RFilter.T__53:
	                case RFilter.HEX:
	                case RFilter.INT:
	                case RFilter.FLOAT:
	                case RFilter.COMPLEX:
	                case RFilter.STRING:
	                case RFilter.ID:
	                case RFilter.USER_OP:
	                    this.state = 47;
	                    this.elem();
	                    break;
	                case RFilter.NL:
	                    this.state = 48;
	                    this.eat();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 53;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 54;
	            this.match(RFilter.T__34);
	            break;
	        case RFilter.T__3:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 55;
	            this.match(RFilter.T__3);
	            this.state = 60;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RFilter.T__1) | (1 << RFilter.T__3) | (1 << RFilter.T__4) | (1 << RFilter.T__5) | (1 << RFilter.T__6) | (1 << RFilter.T__7) | (1 << RFilter.T__8) | (1 << RFilter.T__9) | (1 << RFilter.T__10) | (1 << RFilter.T__11) | (1 << RFilter.T__12) | (1 << RFilter.T__13) | (1 << RFilter.T__14) | (1 << RFilter.T__15) | (1 << RFilter.T__16) | (1 << RFilter.T__17) | (1 << RFilter.T__18) | (1 << RFilter.T__19) | (1 << RFilter.T__20) | (1 << RFilter.T__21) | (1 << RFilter.T__22) | (1 << RFilter.T__23) | (1 << RFilter.T__24) | (1 << RFilter.T__25) | (1 << RFilter.T__26) | (1 << RFilter.T__28) | (1 << RFilter.T__29))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (RFilter.T__32 - 33)) | (1 << (RFilter.T__33 - 33)) | (1 << (RFilter.T__35 - 33)) | (1 << (RFilter.T__37 - 33)) | (1 << (RFilter.T__38 - 33)) | (1 << (RFilter.T__39 - 33)) | (1 << (RFilter.T__40 - 33)) | (1 << (RFilter.T__41 - 33)) | (1 << (RFilter.T__42 - 33)) | (1 << (RFilter.T__43 - 33)) | (1 << (RFilter.T__44 - 33)) | (1 << (RFilter.T__45 - 33)) | (1 << (RFilter.T__46 - 33)) | (1 << (RFilter.T__47 - 33)) | (1 << (RFilter.T__48 - 33)) | (1 << (RFilter.T__49 - 33)) | (1 << (RFilter.T__50 - 33)) | (1 << (RFilter.T__51 - 33)) | (1 << (RFilter.T__52 - 33)) | (1 << (RFilter.T__53 - 33)) | (1 << (RFilter.HEX - 33)) | (1 << (RFilter.INT - 33)) | (1 << (RFilter.FLOAT - 33)) | (1 << (RFilter.COMPLEX - 33)) | (1 << (RFilter.STRING - 33)) | (1 << (RFilter.ID - 33)) | (1 << (RFilter.USER_OP - 33)) | (1 << (RFilter.NL - 33)))) !== 0)) {
	                this.state = 58;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case RFilter.T__1:
	                case RFilter.T__3:
	                case RFilter.T__4:
	                case RFilter.T__5:
	                case RFilter.T__6:
	                case RFilter.T__7:
	                case RFilter.T__8:
	                case RFilter.T__9:
	                case RFilter.T__10:
	                case RFilter.T__11:
	                case RFilter.T__12:
	                case RFilter.T__13:
	                case RFilter.T__14:
	                case RFilter.T__15:
	                case RFilter.T__16:
	                case RFilter.T__17:
	                case RFilter.T__18:
	                case RFilter.T__19:
	                case RFilter.T__20:
	                case RFilter.T__21:
	                case RFilter.T__22:
	                case RFilter.T__23:
	                case RFilter.T__24:
	                case RFilter.T__25:
	                case RFilter.T__26:
	                case RFilter.T__28:
	                case RFilter.T__29:
	                case RFilter.T__32:
	                case RFilter.T__33:
	                case RFilter.T__35:
	                case RFilter.T__37:
	                case RFilter.T__38:
	                case RFilter.T__39:
	                case RFilter.T__40:
	                case RFilter.T__41:
	                case RFilter.T__42:
	                case RFilter.T__43:
	                case RFilter.T__44:
	                case RFilter.T__45:
	                case RFilter.T__46:
	                case RFilter.T__47:
	                case RFilter.T__48:
	                case RFilter.T__49:
	                case RFilter.T__50:
	                case RFilter.T__51:
	                case RFilter.T__52:
	                case RFilter.T__53:
	                case RFilter.HEX:
	                case RFilter.INT:
	                case RFilter.FLOAT:
	                case RFilter.COMPLEX:
	                case RFilter.STRING:
	                case RFilter.ID:
	                case RFilter.USER_OP:
	                    this.state = 56;
	                    this.elem();
	                    break;
	                case RFilter.NL:
	                    this.state = 57;
	                    this.eat();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 62;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 63;
	            this.match(RFilter.T__2);
	            break;
	        case RFilter.T__1:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 64;
	            this.match(RFilter.T__1);
	            this.state = 69;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RFilter.T__1) | (1 << RFilter.T__3) | (1 << RFilter.T__4) | (1 << RFilter.T__5) | (1 << RFilter.T__6) | (1 << RFilter.T__7) | (1 << RFilter.T__8) | (1 << RFilter.T__9) | (1 << RFilter.T__10) | (1 << RFilter.T__11) | (1 << RFilter.T__12) | (1 << RFilter.T__13) | (1 << RFilter.T__14) | (1 << RFilter.T__15) | (1 << RFilter.T__16) | (1 << RFilter.T__17) | (1 << RFilter.T__18) | (1 << RFilter.T__19) | (1 << RFilter.T__20) | (1 << RFilter.T__21) | (1 << RFilter.T__22) | (1 << RFilter.T__23) | (1 << RFilter.T__24) | (1 << RFilter.T__25) | (1 << RFilter.T__26) | (1 << RFilter.T__28) | (1 << RFilter.T__29))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (RFilter.T__32 - 33)) | (1 << (RFilter.T__33 - 33)) | (1 << (RFilter.T__35 - 33)) | (1 << (RFilter.T__37 - 33)) | (1 << (RFilter.T__38 - 33)) | (1 << (RFilter.T__39 - 33)) | (1 << (RFilter.T__40 - 33)) | (1 << (RFilter.T__41 - 33)) | (1 << (RFilter.T__42 - 33)) | (1 << (RFilter.T__43 - 33)) | (1 << (RFilter.T__44 - 33)) | (1 << (RFilter.T__45 - 33)) | (1 << (RFilter.T__46 - 33)) | (1 << (RFilter.T__47 - 33)) | (1 << (RFilter.T__48 - 33)) | (1 << (RFilter.T__49 - 33)) | (1 << (RFilter.T__50 - 33)) | (1 << (RFilter.T__51 - 33)) | (1 << (RFilter.T__52 - 33)) | (1 << (RFilter.T__53 - 33)) | (1 << (RFilter.HEX - 33)) | (1 << (RFilter.INT - 33)) | (1 << (RFilter.FLOAT - 33)) | (1 << (RFilter.COMPLEX - 33)) | (1 << (RFilter.STRING - 33)) | (1 << (RFilter.ID - 33)) | (1 << (RFilter.USER_OP - 33)) | (1 << (RFilter.NL - 33)))) !== 0)) {
	                this.state = 67;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case RFilter.T__1:
	                case RFilter.T__3:
	                case RFilter.T__4:
	                case RFilter.T__5:
	                case RFilter.T__6:
	                case RFilter.T__7:
	                case RFilter.T__8:
	                case RFilter.T__9:
	                case RFilter.T__10:
	                case RFilter.T__11:
	                case RFilter.T__12:
	                case RFilter.T__13:
	                case RFilter.T__14:
	                case RFilter.T__15:
	                case RFilter.T__16:
	                case RFilter.T__17:
	                case RFilter.T__18:
	                case RFilter.T__19:
	                case RFilter.T__20:
	                case RFilter.T__21:
	                case RFilter.T__22:
	                case RFilter.T__23:
	                case RFilter.T__24:
	                case RFilter.T__25:
	                case RFilter.T__26:
	                case RFilter.T__28:
	                case RFilter.T__29:
	                case RFilter.T__32:
	                case RFilter.T__33:
	                case RFilter.T__35:
	                case RFilter.T__37:
	                case RFilter.T__38:
	                case RFilter.T__39:
	                case RFilter.T__40:
	                case RFilter.T__41:
	                case RFilter.T__42:
	                case RFilter.T__43:
	                case RFilter.T__44:
	                case RFilter.T__45:
	                case RFilter.T__46:
	                case RFilter.T__47:
	                case RFilter.T__48:
	                case RFilter.T__49:
	                case RFilter.T__50:
	                case RFilter.T__51:
	                case RFilter.T__52:
	                case RFilter.T__53:
	                case RFilter.HEX:
	                case RFilter.INT:
	                case RFilter.FLOAT:
	                case RFilter.COMPLEX:
	                case RFilter.STRING:
	                case RFilter.ID:
	                case RFilter.USER_OP:
	                    this.state = 65;
	                    this.elem();
	                    break;
	                case RFilter.NL:
	                    this.state = 66;
	                    this.eat();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 71;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 72;
	            this.match(RFilter.T__2);
	            this.state = 73;
	            this.match(RFilter.T__2);
	            break;
	        case RFilter.T__32:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 74;
	            this.match(RFilter.T__32);
	            this.state = 76;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===RFilter.NL) {
	                this.state = 75;
	                this.eat();
	            }

	            this.state = 78;
	            this.match(RFilter.T__33);
	            this.state = 83;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RFilter.T__1) | (1 << RFilter.T__3) | (1 << RFilter.T__4) | (1 << RFilter.T__5) | (1 << RFilter.T__6) | (1 << RFilter.T__7) | (1 << RFilter.T__8) | (1 << RFilter.T__9) | (1 << RFilter.T__10) | (1 << RFilter.T__11) | (1 << RFilter.T__12) | (1 << RFilter.T__13) | (1 << RFilter.T__14) | (1 << RFilter.T__15) | (1 << RFilter.T__16) | (1 << RFilter.T__17) | (1 << RFilter.T__18) | (1 << RFilter.T__19) | (1 << RFilter.T__20) | (1 << RFilter.T__21) | (1 << RFilter.T__22) | (1 << RFilter.T__23) | (1 << RFilter.T__24) | (1 << RFilter.T__25) | (1 << RFilter.T__26) | (1 << RFilter.T__28) | (1 << RFilter.T__29))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (RFilter.T__32 - 33)) | (1 << (RFilter.T__33 - 33)) | (1 << (RFilter.T__35 - 33)) | (1 << (RFilter.T__37 - 33)) | (1 << (RFilter.T__38 - 33)) | (1 << (RFilter.T__39 - 33)) | (1 << (RFilter.T__40 - 33)) | (1 << (RFilter.T__41 - 33)) | (1 << (RFilter.T__42 - 33)) | (1 << (RFilter.T__43 - 33)) | (1 << (RFilter.T__44 - 33)) | (1 << (RFilter.T__45 - 33)) | (1 << (RFilter.T__46 - 33)) | (1 << (RFilter.T__47 - 33)) | (1 << (RFilter.T__48 - 33)) | (1 << (RFilter.T__49 - 33)) | (1 << (RFilter.T__50 - 33)) | (1 << (RFilter.T__51 - 33)) | (1 << (RFilter.T__52 - 33)) | (1 << (RFilter.T__53 - 33)) | (1 << (RFilter.HEX - 33)) | (1 << (RFilter.INT - 33)) | (1 << (RFilter.FLOAT - 33)) | (1 << (RFilter.COMPLEX - 33)) | (1 << (RFilter.STRING - 33)) | (1 << (RFilter.ID - 33)) | (1 << (RFilter.USER_OP - 33)) | (1 << (RFilter.NL - 33)))) !== 0)) {
	                this.state = 81;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case RFilter.T__1:
	                case RFilter.T__3:
	                case RFilter.T__4:
	                case RFilter.T__5:
	                case RFilter.T__6:
	                case RFilter.T__7:
	                case RFilter.T__8:
	                case RFilter.T__9:
	                case RFilter.T__10:
	                case RFilter.T__11:
	                case RFilter.T__12:
	                case RFilter.T__13:
	                case RFilter.T__14:
	                case RFilter.T__15:
	                case RFilter.T__16:
	                case RFilter.T__17:
	                case RFilter.T__18:
	                case RFilter.T__19:
	                case RFilter.T__20:
	                case RFilter.T__21:
	                case RFilter.T__22:
	                case RFilter.T__23:
	                case RFilter.T__24:
	                case RFilter.T__25:
	                case RFilter.T__26:
	                case RFilter.T__28:
	                case RFilter.T__29:
	                case RFilter.T__32:
	                case RFilter.T__33:
	                case RFilter.T__35:
	                case RFilter.T__37:
	                case RFilter.T__38:
	                case RFilter.T__39:
	                case RFilter.T__40:
	                case RFilter.T__41:
	                case RFilter.T__42:
	                case RFilter.T__43:
	                case RFilter.T__44:
	                case RFilter.T__45:
	                case RFilter.T__46:
	                case RFilter.T__47:
	                case RFilter.T__48:
	                case RFilter.T__49:
	                case RFilter.T__50:
	                case RFilter.T__51:
	                case RFilter.T__52:
	                case RFilter.T__53:
	                case RFilter.HEX:
	                case RFilter.INT:
	                case RFilter.FLOAT:
	                case RFilter.COMPLEX:
	                case RFilter.STRING:
	                case RFilter.ID:
	                case RFilter.USER_OP:
	                    this.state = 79;
	                    this.elem();
	                    break;
	                case RFilter.NL:
	                    this.state = 80;
	                    this.eat();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 85;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 86;
	            this.match(RFilter.T__34);
	            this.state = 88;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	            if(la_===1) {
	                this.state = 87;
	                this.eat();

	            }
	            break;
	        case RFilter.T__39:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 90;
	            this.match(RFilter.T__39);
	            this.state = 92;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===RFilter.NL) {
	                this.state = 91;
	                this.eat();
	            }

	            this.state = 94;
	            this.match(RFilter.T__33);
	            this.state = 99;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RFilter.T__1) | (1 << RFilter.T__3) | (1 << RFilter.T__4) | (1 << RFilter.T__5) | (1 << RFilter.T__6) | (1 << RFilter.T__7) | (1 << RFilter.T__8) | (1 << RFilter.T__9) | (1 << RFilter.T__10) | (1 << RFilter.T__11) | (1 << RFilter.T__12) | (1 << RFilter.T__13) | (1 << RFilter.T__14) | (1 << RFilter.T__15) | (1 << RFilter.T__16) | (1 << RFilter.T__17) | (1 << RFilter.T__18) | (1 << RFilter.T__19) | (1 << RFilter.T__20) | (1 << RFilter.T__21) | (1 << RFilter.T__22) | (1 << RFilter.T__23) | (1 << RFilter.T__24) | (1 << RFilter.T__25) | (1 << RFilter.T__26) | (1 << RFilter.T__28) | (1 << RFilter.T__29))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (RFilter.T__32 - 33)) | (1 << (RFilter.T__33 - 33)) | (1 << (RFilter.T__35 - 33)) | (1 << (RFilter.T__37 - 33)) | (1 << (RFilter.T__38 - 33)) | (1 << (RFilter.T__39 - 33)) | (1 << (RFilter.T__40 - 33)) | (1 << (RFilter.T__41 - 33)) | (1 << (RFilter.T__42 - 33)) | (1 << (RFilter.T__43 - 33)) | (1 << (RFilter.T__44 - 33)) | (1 << (RFilter.T__45 - 33)) | (1 << (RFilter.T__46 - 33)) | (1 << (RFilter.T__47 - 33)) | (1 << (RFilter.T__48 - 33)) | (1 << (RFilter.T__49 - 33)) | (1 << (RFilter.T__50 - 33)) | (1 << (RFilter.T__51 - 33)) | (1 << (RFilter.T__52 - 33)) | (1 << (RFilter.T__53 - 33)) | (1 << (RFilter.HEX - 33)) | (1 << (RFilter.INT - 33)) | (1 << (RFilter.FLOAT - 33)) | (1 << (RFilter.COMPLEX - 33)) | (1 << (RFilter.STRING - 33)) | (1 << (RFilter.ID - 33)) | (1 << (RFilter.USER_OP - 33)) | (1 << (RFilter.NL - 33)))) !== 0)) {
	                this.state = 97;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case RFilter.T__1:
	                case RFilter.T__3:
	                case RFilter.T__4:
	                case RFilter.T__5:
	                case RFilter.T__6:
	                case RFilter.T__7:
	                case RFilter.T__8:
	                case RFilter.T__9:
	                case RFilter.T__10:
	                case RFilter.T__11:
	                case RFilter.T__12:
	                case RFilter.T__13:
	                case RFilter.T__14:
	                case RFilter.T__15:
	                case RFilter.T__16:
	                case RFilter.T__17:
	                case RFilter.T__18:
	                case RFilter.T__19:
	                case RFilter.T__20:
	                case RFilter.T__21:
	                case RFilter.T__22:
	                case RFilter.T__23:
	                case RFilter.T__24:
	                case RFilter.T__25:
	                case RFilter.T__26:
	                case RFilter.T__28:
	                case RFilter.T__29:
	                case RFilter.T__32:
	                case RFilter.T__33:
	                case RFilter.T__35:
	                case RFilter.T__37:
	                case RFilter.T__38:
	                case RFilter.T__39:
	                case RFilter.T__40:
	                case RFilter.T__41:
	                case RFilter.T__42:
	                case RFilter.T__43:
	                case RFilter.T__44:
	                case RFilter.T__45:
	                case RFilter.T__46:
	                case RFilter.T__47:
	                case RFilter.T__48:
	                case RFilter.T__49:
	                case RFilter.T__50:
	                case RFilter.T__51:
	                case RFilter.T__52:
	                case RFilter.T__53:
	                case RFilter.HEX:
	                case RFilter.INT:
	                case RFilter.FLOAT:
	                case RFilter.COMPLEX:
	                case RFilter.STRING:
	                case RFilter.ID:
	                case RFilter.USER_OP:
	                    this.state = 95;
	                    this.elem();
	                    break;
	                case RFilter.NL:
	                    this.state = 96;
	                    this.eat();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 101;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 102;
	            this.match(RFilter.T__34);
	            this.state = 104;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	            if(la_===1) {
	                this.state = 103;
	                this.eat();

	            }
	            break;
	        case RFilter.T__41:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 106;
	            this.match(RFilter.T__41);
	            this.state = 108;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===RFilter.NL) {
	                this.state = 107;
	                this.eat();
	            }

	            this.state = 110;
	            this.match(RFilter.T__33);
	            this.state = 115;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RFilter.T__1) | (1 << RFilter.T__3) | (1 << RFilter.T__4) | (1 << RFilter.T__5) | (1 << RFilter.T__6) | (1 << RFilter.T__7) | (1 << RFilter.T__8) | (1 << RFilter.T__9) | (1 << RFilter.T__10) | (1 << RFilter.T__11) | (1 << RFilter.T__12) | (1 << RFilter.T__13) | (1 << RFilter.T__14) | (1 << RFilter.T__15) | (1 << RFilter.T__16) | (1 << RFilter.T__17) | (1 << RFilter.T__18) | (1 << RFilter.T__19) | (1 << RFilter.T__20) | (1 << RFilter.T__21) | (1 << RFilter.T__22) | (1 << RFilter.T__23) | (1 << RFilter.T__24) | (1 << RFilter.T__25) | (1 << RFilter.T__26) | (1 << RFilter.T__28) | (1 << RFilter.T__29))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (RFilter.T__32 - 33)) | (1 << (RFilter.T__33 - 33)) | (1 << (RFilter.T__35 - 33)) | (1 << (RFilter.T__37 - 33)) | (1 << (RFilter.T__38 - 33)) | (1 << (RFilter.T__39 - 33)) | (1 << (RFilter.T__40 - 33)) | (1 << (RFilter.T__41 - 33)) | (1 << (RFilter.T__42 - 33)) | (1 << (RFilter.T__43 - 33)) | (1 << (RFilter.T__44 - 33)) | (1 << (RFilter.T__45 - 33)) | (1 << (RFilter.T__46 - 33)) | (1 << (RFilter.T__47 - 33)) | (1 << (RFilter.T__48 - 33)) | (1 << (RFilter.T__49 - 33)) | (1 << (RFilter.T__50 - 33)) | (1 << (RFilter.T__51 - 33)) | (1 << (RFilter.T__52 - 33)) | (1 << (RFilter.T__53 - 33)) | (1 << (RFilter.HEX - 33)) | (1 << (RFilter.INT - 33)) | (1 << (RFilter.FLOAT - 33)) | (1 << (RFilter.COMPLEX - 33)) | (1 << (RFilter.STRING - 33)) | (1 << (RFilter.ID - 33)) | (1 << (RFilter.USER_OP - 33)) | (1 << (RFilter.NL - 33)))) !== 0)) {
	                this.state = 113;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case RFilter.T__1:
	                case RFilter.T__3:
	                case RFilter.T__4:
	                case RFilter.T__5:
	                case RFilter.T__6:
	                case RFilter.T__7:
	                case RFilter.T__8:
	                case RFilter.T__9:
	                case RFilter.T__10:
	                case RFilter.T__11:
	                case RFilter.T__12:
	                case RFilter.T__13:
	                case RFilter.T__14:
	                case RFilter.T__15:
	                case RFilter.T__16:
	                case RFilter.T__17:
	                case RFilter.T__18:
	                case RFilter.T__19:
	                case RFilter.T__20:
	                case RFilter.T__21:
	                case RFilter.T__22:
	                case RFilter.T__23:
	                case RFilter.T__24:
	                case RFilter.T__25:
	                case RFilter.T__26:
	                case RFilter.T__28:
	                case RFilter.T__29:
	                case RFilter.T__32:
	                case RFilter.T__33:
	                case RFilter.T__35:
	                case RFilter.T__37:
	                case RFilter.T__38:
	                case RFilter.T__39:
	                case RFilter.T__40:
	                case RFilter.T__41:
	                case RFilter.T__42:
	                case RFilter.T__43:
	                case RFilter.T__44:
	                case RFilter.T__45:
	                case RFilter.T__46:
	                case RFilter.T__47:
	                case RFilter.T__48:
	                case RFilter.T__49:
	                case RFilter.T__50:
	                case RFilter.T__51:
	                case RFilter.T__52:
	                case RFilter.T__53:
	                case RFilter.HEX:
	                case RFilter.INT:
	                case RFilter.FLOAT:
	                case RFilter.COMPLEX:
	                case RFilter.STRING:
	                case RFilter.ID:
	                case RFilter.USER_OP:
	                    this.state = 111;
	                    this.elem();
	                    break;
	                case RFilter.NL:
	                    this.state = 112;
	                    this.eat();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 117;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 118;
	            this.match(RFilter.T__34);
	            this.state = 120;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	            if(la_===1) {
	                this.state = 119;
	                this.eat();

	            }
	            break;
	        case RFilter.T__37:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 122;
	            this.match(RFilter.T__37);
	            this.state = 124;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===RFilter.NL) {
	                this.state = 123;
	                this.eat();
	            }

	            this.state = 126;
	            this.match(RFilter.T__33);
	            this.state = 131;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RFilter.T__1) | (1 << RFilter.T__3) | (1 << RFilter.T__4) | (1 << RFilter.T__5) | (1 << RFilter.T__6) | (1 << RFilter.T__7) | (1 << RFilter.T__8) | (1 << RFilter.T__9) | (1 << RFilter.T__10) | (1 << RFilter.T__11) | (1 << RFilter.T__12) | (1 << RFilter.T__13) | (1 << RFilter.T__14) | (1 << RFilter.T__15) | (1 << RFilter.T__16) | (1 << RFilter.T__17) | (1 << RFilter.T__18) | (1 << RFilter.T__19) | (1 << RFilter.T__20) | (1 << RFilter.T__21) | (1 << RFilter.T__22) | (1 << RFilter.T__23) | (1 << RFilter.T__24) | (1 << RFilter.T__25) | (1 << RFilter.T__26) | (1 << RFilter.T__28) | (1 << RFilter.T__29))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (RFilter.T__32 - 33)) | (1 << (RFilter.T__33 - 33)) | (1 << (RFilter.T__35 - 33)) | (1 << (RFilter.T__37 - 33)) | (1 << (RFilter.T__38 - 33)) | (1 << (RFilter.T__39 - 33)) | (1 << (RFilter.T__40 - 33)) | (1 << (RFilter.T__41 - 33)) | (1 << (RFilter.T__42 - 33)) | (1 << (RFilter.T__43 - 33)) | (1 << (RFilter.T__44 - 33)) | (1 << (RFilter.T__45 - 33)) | (1 << (RFilter.T__46 - 33)) | (1 << (RFilter.T__47 - 33)) | (1 << (RFilter.T__48 - 33)) | (1 << (RFilter.T__49 - 33)) | (1 << (RFilter.T__50 - 33)) | (1 << (RFilter.T__51 - 33)) | (1 << (RFilter.T__52 - 33)) | (1 << (RFilter.T__53 - 33)) | (1 << (RFilter.HEX - 33)) | (1 << (RFilter.INT - 33)) | (1 << (RFilter.FLOAT - 33)) | (1 << (RFilter.COMPLEX - 33)) | (1 << (RFilter.STRING - 33)) | (1 << (RFilter.ID - 33)) | (1 << (RFilter.USER_OP - 33)) | (1 << (RFilter.NL - 33)))) !== 0)) {
	                this.state = 129;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case RFilter.T__1:
	                case RFilter.T__3:
	                case RFilter.T__4:
	                case RFilter.T__5:
	                case RFilter.T__6:
	                case RFilter.T__7:
	                case RFilter.T__8:
	                case RFilter.T__9:
	                case RFilter.T__10:
	                case RFilter.T__11:
	                case RFilter.T__12:
	                case RFilter.T__13:
	                case RFilter.T__14:
	                case RFilter.T__15:
	                case RFilter.T__16:
	                case RFilter.T__17:
	                case RFilter.T__18:
	                case RFilter.T__19:
	                case RFilter.T__20:
	                case RFilter.T__21:
	                case RFilter.T__22:
	                case RFilter.T__23:
	                case RFilter.T__24:
	                case RFilter.T__25:
	                case RFilter.T__26:
	                case RFilter.T__28:
	                case RFilter.T__29:
	                case RFilter.T__32:
	                case RFilter.T__33:
	                case RFilter.T__35:
	                case RFilter.T__37:
	                case RFilter.T__38:
	                case RFilter.T__39:
	                case RFilter.T__40:
	                case RFilter.T__41:
	                case RFilter.T__42:
	                case RFilter.T__43:
	                case RFilter.T__44:
	                case RFilter.T__45:
	                case RFilter.T__46:
	                case RFilter.T__47:
	                case RFilter.T__48:
	                case RFilter.T__49:
	                case RFilter.T__50:
	                case RFilter.T__51:
	                case RFilter.T__52:
	                case RFilter.T__53:
	                case RFilter.HEX:
	                case RFilter.INT:
	                case RFilter.FLOAT:
	                case RFilter.COMPLEX:
	                case RFilter.STRING:
	                case RFilter.ID:
	                case RFilter.USER_OP:
	                    this.state = 127;
	                    this.elem();
	                    break;
	                case RFilter.NL:
	                    this.state = 128;
	                    this.eat();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 133;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 134;
	            this.match(RFilter.T__34);
	            this.state = 136;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	            if(la_===1) {
	                this.state = 135;
	                this.eat();

	            }
	            break;
	        case RFilter.T__38:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 138;
	            this.match(RFilter.T__38);

	                    // ``inside a compound expression, a newline before else is discarded,
	                    // whereas at the outermost level, the newline terminates the if
	                    // construction and a subsequent else causes a syntax error.''
	                    /*
	                    Works here
	                        if (1==0) { print(1) } else { print(2) }

	                    and correctly gets error here:

	                        if (1==0) { print(1) }
	                        else { print(2) }

	                    this works too:

	                        if (1==0) {
	                          if (2==0) print(1)
	                          else print(2)
	                        }
	                    */
	                    WritableToken tok = (WritableToken)_input.LT(-2);
	                    if (curlies>0&&tok.getType()==NL) tok.setChannel(Token.HIDDEN_CHANNEL);
	                    
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



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, RFilter.RULE_atom);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 142;
	        _la = this._input.LA(1);
	        if(!(((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & ((1 << (RFilter.T__44 - 45)) | (1 << (RFilter.T__45 - 45)) | (1 << (RFilter.T__46 - 45)) | (1 << (RFilter.T__47 - 45)) | (1 << (RFilter.T__48 - 45)) | (1 << (RFilter.T__49 - 45)) | (1 << (RFilter.T__50 - 45)) | (1 << (RFilter.T__51 - 45)) | (1 << (RFilter.HEX - 45)) | (1 << (RFilter.INT - 45)) | (1 << (RFilter.FLOAT - 45)) | (1 << (RFilter.COMPLEX - 45)) | (1 << (RFilter.STRING - 45)) | (1 << (RFilter.ID - 45)))) !== 0))) {
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



	op() {
	    let localctx = new OpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, RFilter.RULE_op);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RFilter.T__4) | (1 << RFilter.T__5) | (1 << RFilter.T__6) | (1 << RFilter.T__7) | (1 << RFilter.T__8) | (1 << RFilter.T__9) | (1 << RFilter.T__10) | (1 << RFilter.T__11) | (1 << RFilter.T__12) | (1 << RFilter.T__13) | (1 << RFilter.T__14) | (1 << RFilter.T__15) | (1 << RFilter.T__16) | (1 << RFilter.T__17) | (1 << RFilter.T__18) | (1 << RFilter.T__19) | (1 << RFilter.T__20) | (1 << RFilter.T__21) | (1 << RFilter.T__22) | (1 << RFilter.T__23) | (1 << RFilter.T__24) | (1 << RFilter.T__25) | (1 << RFilter.T__26) | (1 << RFilter.T__28) | (1 << RFilter.T__29))) !== 0) || ((((_la - 41)) & ~0x1f) == 0 && ((1 << (_la - 41)) & ((1 << (RFilter.T__40 - 41)) | (1 << (RFilter.T__42 - 41)) | (1 << (RFilter.T__43 - 41)) | (1 << (RFilter.T__52 - 41)) | (1 << (RFilter.T__53 - 41)) | (1 << (RFilter.USER_OP - 41)))) !== 0))) {
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

RFilter.EOF = antlr4.Token.EOF;
RFilter.T__0 = 1;
RFilter.T__1 = 2;
RFilter.T__2 = 3;
RFilter.T__3 = 4;
RFilter.T__4 = 5;
RFilter.T__5 = 6;
RFilter.T__6 = 7;
RFilter.T__7 = 8;
RFilter.T__8 = 9;
RFilter.T__9 = 10;
RFilter.T__10 = 11;
RFilter.T__11 = 12;
RFilter.T__12 = 13;
RFilter.T__13 = 14;
RFilter.T__14 = 15;
RFilter.T__15 = 16;
RFilter.T__16 = 17;
RFilter.T__17 = 18;
RFilter.T__18 = 19;
RFilter.T__19 = 20;
RFilter.T__20 = 21;
RFilter.T__21 = 22;
RFilter.T__22 = 23;
RFilter.T__23 = 24;
RFilter.T__24 = 25;
RFilter.T__25 = 26;
RFilter.T__26 = 27;
RFilter.T__27 = 28;
RFilter.T__28 = 29;
RFilter.T__29 = 30;
RFilter.T__30 = 31;
RFilter.T__31 = 32;
RFilter.T__32 = 33;
RFilter.T__33 = 34;
RFilter.T__34 = 35;
RFilter.T__35 = 36;
RFilter.T__36 = 37;
RFilter.T__37 = 38;
RFilter.T__38 = 39;
RFilter.T__39 = 40;
RFilter.T__40 = 41;
RFilter.T__41 = 42;
RFilter.T__42 = 43;
RFilter.T__43 = 44;
RFilter.T__44 = 45;
RFilter.T__45 = 46;
RFilter.T__46 = 47;
RFilter.T__47 = 48;
RFilter.T__48 = 49;
RFilter.T__49 = 50;
RFilter.T__50 = 51;
RFilter.T__51 = 52;
RFilter.T__52 = 53;
RFilter.T__53 = 54;
RFilter.T__54 = 55;
RFilter.HEX = 56;
RFilter.INT = 57;
RFilter.FLOAT = 58;
RFilter.COMPLEX = 59;
RFilter.STRING = 60;
RFilter.ID = 61;
RFilter.USER_OP = 62;
RFilter.NL = 63;
RFilter.WS = 64;

RFilter.RULE_stream = 0;
RFilter.RULE_eat = 1;
RFilter.RULE_elem = 2;
RFilter.RULE_atom = 3;
RFilter.RULE_op = 4;

class StreamContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RFilter.RULE_stream;
    }

	EOF() {
	    return this.getToken(RFilter.EOF, 0);
	};

	elem = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElemContext);
	    } else {
	        return this.getTypedRuleContext(ElemContext,i);
	    }
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RFilter.NL);
	    } else {
	        return this.getToken(RFilter.NL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RFilterListener ) {
	        listener.enterStream(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RFilterListener ) {
	        listener.exitStream(this);
		}
	}


}



class EatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RFilter.RULE_eat;
        this._NL = null; // Token
    }

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RFilter.NL);
	    } else {
	        return this.getToken(RFilter.NL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RFilterListener ) {
	        listener.enterEat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RFilterListener ) {
	        listener.exitEat(this);
		}
	}


}



class ElemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RFilter.RULE_elem;
    }

	op() {
	    return this.getTypedRuleContext(OpContext,0);
	};

	eat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EatContext);
	    } else {
	        return this.getTypedRuleContext(EatContext,i);
	    }
	};

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	elem = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElemContext);
	    } else {
	        return this.getTypedRuleContext(ElemContext,i);
	    }
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RFilter.NL);
	    } else {
	        return this.getToken(RFilter.NL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RFilterListener ) {
	        listener.enterElem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RFilterListener ) {
	        listener.exitElem(this);
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
        this.ruleIndex = RFilter.RULE_atom;
    }

	ID() {
	    return this.getToken(RFilter.ID, 0);
	};

	STRING() {
	    return this.getToken(RFilter.STRING, 0);
	};

	HEX() {
	    return this.getToken(RFilter.HEX, 0);
	};

	INT() {
	    return this.getToken(RFilter.INT, 0);
	};

	FLOAT() {
	    return this.getToken(RFilter.FLOAT, 0);
	};

	COMPLEX() {
	    return this.getToken(RFilter.COMPLEX, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RFilterListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RFilterListener ) {
	        listener.exitAtom(this);
		}
	}


}



class OpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RFilter.RULE_op;
    }

	USER_OP() {
	    return this.getToken(RFilter.USER_OP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RFilterListener ) {
	        listener.enterOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RFilterListener ) {
	        listener.exitOp(this);
		}
	}


}




RFilter.StreamContext = StreamContext; 
RFilter.EatContext = EatContext; 
RFilter.ElemContext = ElemContext; 
RFilter.AtomContext = AtomContext; 
RFilter.OpContext = OpContext; 
