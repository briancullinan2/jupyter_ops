// Generated from Resources/Parsers/swift-fin/SwiftFinParser.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import SwiftFinParserListener from './SwiftFinParserListener.js';
const serializedATN = [4,1,18,173,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,1,0,4,0,32,8,0,11,0,12,0,33,1,0,1,0,1,1,1,1,3,1,40,8,
1,1,1,3,1,43,8,1,1,1,3,1,46,8,1,1,1,3,1,49,8,1,1,2,1,2,1,2,1,2,1,3,1,3,1,
3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,4,5,65,8,5,11,5,12,5,66,1,5,1,5,1,5,1,5,1,
5,1,5,3,5,75,8,5,1,6,1,6,1,6,1,6,4,6,81,8,6,11,6,12,6,82,1,7,4,7,86,8,7,
11,7,12,7,87,1,8,4,8,91,8,8,11,8,12,8,92,1,8,1,8,4,8,97,8,8,11,8,12,8,98,
1,8,1,8,5,8,103,8,8,10,8,12,8,106,9,8,1,8,1,8,1,8,4,8,111,8,8,11,8,12,8,
112,1,8,5,8,116,8,8,10,8,12,8,119,9,8,1,8,1,8,4,8,123,8,8,11,8,12,8,124,
1,8,4,8,128,8,8,11,8,12,8,129,1,8,5,8,133,8,8,10,8,12,8,136,9,8,1,8,3,8,
139,8,8,1,9,1,9,1,9,1,9,1,10,4,10,146,8,10,11,10,12,10,147,1,11,4,11,151,
8,11,11,11,12,11,152,1,12,1,12,1,12,1,12,3,12,159,8,12,1,12,1,12,1,13,4,
13,164,8,13,11,13,12,13,165,1,14,4,14,169,8,14,11,14,12,14,170,1,14,0,0,
15,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,0,2,2,0,14,14,16,16,1,0,11,12,
182,0,31,1,0,0,0,2,37,1,0,0,0,4,50,1,0,0,0,6,54,1,0,0,0,8,58,1,0,0,0,10,
74,1,0,0,0,12,76,1,0,0,0,14,85,1,0,0,0,16,138,1,0,0,0,18,140,1,0,0,0,20,
145,1,0,0,0,22,150,1,0,0,0,24,154,1,0,0,0,26,163,1,0,0,0,28,168,1,0,0,0,
30,32,3,2,1,0,31,30,1,0,0,0,32,33,1,0,0,0,33,31,1,0,0,0,33,34,1,0,0,0,34,
35,1,0,0,0,35,36,5,0,0,1,36,1,1,0,0,0,37,39,3,4,2,0,38,40,3,6,3,0,39,38,
1,0,0,0,39,40,1,0,0,0,40,42,1,0,0,0,41,43,3,8,4,0,42,41,1,0,0,0,42,43,1,
0,0,0,43,45,1,0,0,0,44,46,3,10,5,0,45,44,1,0,0,0,45,46,1,0,0,0,46,48,1,0,
0,0,47,49,3,18,9,0,48,47,1,0,0,0,48,49,1,0,0,0,49,3,1,0,0,0,50,51,5,1,0,
0,51,52,3,20,10,0,52,53,5,17,0,0,53,5,1,0,0,0,54,55,5,2,0,0,55,56,3,20,10,
0,56,57,5,17,0,0,57,7,1,0,0,0,58,59,5,3,0,0,59,60,3,22,11,0,60,61,5,8,0,
0,61,9,1,0,0,0,62,64,5,4,0,0,63,65,3,12,6,0,64,63,1,0,0,0,65,66,1,0,0,0,
66,64,1,0,0,0,66,67,1,0,0,0,67,68,1,0,0,0,68,69,5,13,0,0,69,75,1,0,0,0,70,
71,5,5,0,0,71,72,3,22,11,0,72,73,5,8,0,0,73,75,1,0,0,0,74,62,1,0,0,0,74,
70,1,0,0,0,75,11,1,0,0,0,76,77,5,14,0,0,77,78,3,14,7,0,78,80,5,14,0,0,79,
81,3,16,8,0,80,79,1,0,0,0,81,82,1,0,0,0,82,80,1,0,0,0,82,83,1,0,0,0,83,13,
1,0,0,0,84,86,5,16,0,0,85,84,1,0,0,0,86,87,1,0,0,0,87,85,1,0,0,0,87,88,1,
0,0,0,88,15,1,0,0,0,89,91,5,16,0,0,90,89,1,0,0,0,91,92,1,0,0,0,92,90,1,0,
0,0,92,93,1,0,0,0,93,94,1,0,0,0,94,139,5,15,0,0,95,97,5,16,0,0,96,95,1,0,
0,0,97,98,1,0,0,0,98,96,1,0,0,0,98,99,1,0,0,0,99,100,1,0,0,0,100,104,5,14,
0,0,101,103,7,0,0,0,102,101,1,0,0,0,103,106,1,0,0,0,104,102,1,0,0,0,104,
105,1,0,0,0,105,107,1,0,0,0,106,104,1,0,0,0,107,139,5,15,0,0,108,110,5,14,
0,0,109,111,5,14,0,0,110,109,1,0,0,0,111,112,1,0,0,0,112,110,1,0,0,0,112,
113,1,0,0,0,113,117,1,0,0,0,114,116,7,0,0,0,115,114,1,0,0,0,116,119,1,0,
0,0,117,115,1,0,0,0,117,118,1,0,0,0,118,120,1,0,0,0,119,117,1,0,0,0,120,
139,5,15,0,0,121,123,5,14,0,0,122,121,1,0,0,0,123,124,1,0,0,0,124,122,1,
0,0,0,124,125,1,0,0,0,125,127,1,0,0,0,126,128,5,16,0,0,127,126,1,0,0,0,128,
129,1,0,0,0,129,127,1,0,0,0,129,130,1,0,0,0,130,134,1,0,0,0,131,133,5,14,
0,0,132,131,1,0,0,0,133,136,1,0,0,0,134,132,1,0,0,0,134,135,1,0,0,0,135,
137,1,0,0,0,136,134,1,0,0,0,137,139,5,15,0,0,138,90,1,0,0,0,138,96,1,0,0,
0,138,108,1,0,0,0,138,122,1,0,0,0,139,17,1,0,0,0,140,141,5,6,0,0,141,142,
3,22,11,0,142,143,5,8,0,0,143,19,1,0,0,0,144,146,5,18,0,0,145,144,1,0,0,
0,146,147,1,0,0,0,147,145,1,0,0,0,147,148,1,0,0,0,148,21,1,0,0,0,149,151,
3,24,12,0,150,149,1,0,0,0,151,152,1,0,0,0,152,150,1,0,0,0,152,153,1,0,0,
0,153,23,1,0,0,0,154,155,5,7,0,0,155,156,3,26,13,0,156,158,5,11,0,0,157,
159,3,28,14,0,158,157,1,0,0,0,158,159,1,0,0,0,159,160,1,0,0,0,160,161,5,
8,0,0,161,25,1,0,0,0,162,164,5,12,0,0,163,162,1,0,0,0,164,165,1,0,0,0,165,
163,1,0,0,0,165,166,1,0,0,0,166,27,1,0,0,0,167,169,7,1,0,0,168,167,1,0,0,
0,169,170,1,0,0,0,170,168,1,0,0,0,170,171,1,0,0,0,171,29,1,0,0,0,23,33,39,
42,45,48,66,74,82,87,92,98,104,112,117,124,129,134,138,147,152,158,165,170];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class SwiftFinParser extends antlr4.Parser {

    static grammarFileName = "SwiftFinParser.g4";
    static literalNames = [  ];
    static symbolicNames = [ null, "BLOCK1", "BLOCK2", "BLOCK3", "BLOCK4_A", 
                             "BLOCK4_B", "BLOCK5", "LBRACE", "RBRACE", "COLON", 
                             "CRLF", "M_COLON", "M_VALUE", "B4_END", "B4_COLON", 
                             "B4_CRLF", "B4_VALUE", "V_END", "V_VALUE" ];
    static ruleNames = [ "messages", "message", "block1", "block2", "block3", 
                         "block4", "block4Item", "block4Field", "block4Line", 
                         "block5", "value", "map_", "keyValue", "mKey", 
                         "mValue" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SwiftFinParser.ruleNames;
        this.literalNames = SwiftFinParser.literalNames;
        this.symbolicNames = SwiftFinParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	messages() {
	    let localctx = new MessagesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SwiftFinParser.RULE_messages);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 30;
	            this.message();
	            this.state = 33; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===SwiftFinParser.BLOCK1);
	        this.state = 35;
	        this.match(SwiftFinParser.EOF);
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



	message() {
	    let localctx = new MessageContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SwiftFinParser.RULE_message);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.block1();
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SwiftFinParser.BLOCK2) {
	            this.state = 38;
	            this.block2();
	        }

	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SwiftFinParser.BLOCK3) {
	            this.state = 41;
	            this.block3();
	        }

	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SwiftFinParser.BLOCK4_A || _la===SwiftFinParser.BLOCK4_B) {
	            this.state = 44;
	            this.block4();
	        }

	        this.state = 48;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SwiftFinParser.BLOCK5) {
	            this.state = 47;
	            this.block5();
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



	block1() {
	    let localctx = new Block1Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SwiftFinParser.RULE_block1);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(SwiftFinParser.BLOCK1);
	        this.state = 51;
	        this.value();
	        this.state = 52;
	        this.match(SwiftFinParser.V_END);
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



	block2() {
	    let localctx = new Block2Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SwiftFinParser.RULE_block2);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(SwiftFinParser.BLOCK2);
	        this.state = 55;
	        this.value();
	        this.state = 56;
	        this.match(SwiftFinParser.V_END);
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



	block3() {
	    let localctx = new Block3Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SwiftFinParser.RULE_block3);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.match(SwiftFinParser.BLOCK3);
	        this.state = 59;
	        this.map_();
	        this.state = 60;
	        this.match(SwiftFinParser.RBRACE);
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



	block4() {
	    let localctx = new Block4Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SwiftFinParser.RULE_block4);
	    var _la = 0; // Token type
	    try {
	        this.state = 74;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SwiftFinParser.BLOCK4_A:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 62;
	            this.match(SwiftFinParser.BLOCK4_A);
	            this.state = 64; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 63;
	                this.block4Item();
	                this.state = 66; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===SwiftFinParser.B4_COLON);
	            this.state = 68;
	            this.match(SwiftFinParser.B4_END);
	            break;
	        case SwiftFinParser.BLOCK4_B:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 70;
	            this.match(SwiftFinParser.BLOCK4_B);
	            this.state = 71;
	            this.map_();
	            this.state = 72;
	            this.match(SwiftFinParser.RBRACE);
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



	block4Item() {
	    let localctx = new Block4ItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SwiftFinParser.RULE_block4Item);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.match(SwiftFinParser.B4_COLON);
	        this.state = 77;
	        this.block4Field();
	        this.state = 78;
	        this.match(SwiftFinParser.B4_COLON);
	        this.state = 80; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 79;
	        		this.block4Line();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 82; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,7, this._ctx);
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



	block4Field() {
	    let localctx = new Block4FieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SwiftFinParser.RULE_block4Field);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 84;
	            this.match(SwiftFinParser.B4_VALUE);
	            this.state = 87; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===SwiftFinParser.B4_VALUE);
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



	block4Line() {
	    let localctx = new Block4LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, SwiftFinParser.RULE_block4Line);
	    var _la = 0; // Token type
	    try {
	        this.state = 138;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 90; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 89;
	                this.match(SwiftFinParser.B4_VALUE);
	                this.state = 92; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===SwiftFinParser.B4_VALUE);
	            this.state = 94;
	            this.match(SwiftFinParser.B4_CRLF);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 96; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 95;
	                this.match(SwiftFinParser.B4_VALUE);
	                this.state = 98; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===SwiftFinParser.B4_VALUE);
	            this.state = 100;
	            this.match(SwiftFinParser.B4_COLON);
	            this.state = 104;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===SwiftFinParser.B4_COLON || _la===SwiftFinParser.B4_VALUE) {
	                this.state = 101;
	                _la = this._input.LA(1);
	                if(!(_la===SwiftFinParser.B4_COLON || _la===SwiftFinParser.B4_VALUE)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 106;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 107;
	            this.match(SwiftFinParser.B4_CRLF);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 108;
	            this.match(SwiftFinParser.B4_COLON);
	            this.state = 110; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 109;
	            		this.match(SwiftFinParser.B4_COLON);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 112; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,12, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 117;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===SwiftFinParser.B4_COLON || _la===SwiftFinParser.B4_VALUE) {
	                this.state = 114;
	                _la = this._input.LA(1);
	                if(!(_la===SwiftFinParser.B4_COLON || _la===SwiftFinParser.B4_VALUE)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 119;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 120;
	            this.match(SwiftFinParser.B4_CRLF);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 122; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 121;
	                this.match(SwiftFinParser.B4_COLON);
	                this.state = 124; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===SwiftFinParser.B4_COLON);
	            this.state = 127; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 126;
	                this.match(SwiftFinParser.B4_VALUE);
	                this.state = 129; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===SwiftFinParser.B4_VALUE);
	            this.state = 134;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===SwiftFinParser.B4_COLON) {
	                this.state = 131;
	                this.match(SwiftFinParser.B4_COLON);
	                this.state = 136;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 137;
	            this.match(SwiftFinParser.B4_CRLF);
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



	block5() {
	    let localctx = new Block5Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, SwiftFinParser.RULE_block5);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        this.match(SwiftFinParser.BLOCK5);
	        this.state = 141;
	        this.map_();
	        this.state = 142;
	        this.match(SwiftFinParser.RBRACE);
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



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, SwiftFinParser.RULE_value);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 144;
	            this.match(SwiftFinParser.V_VALUE);
	            this.state = 147; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===SwiftFinParser.V_VALUE);
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



	map_() {
	    let localctx = new Map_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, SwiftFinParser.RULE_map_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 150; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 149;
	            this.keyValue();
	            this.state = 152; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===SwiftFinParser.LBRACE);
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



	keyValue() {
	    let localctx = new KeyValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, SwiftFinParser.RULE_keyValue);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this.match(SwiftFinParser.LBRACE);
	        this.state = 155;
	        this.mKey();
	        this.state = 156;
	        this.match(SwiftFinParser.M_COLON);
	        this.state = 158;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SwiftFinParser.M_COLON || _la===SwiftFinParser.M_VALUE) {
	            this.state = 157;
	            this.mValue();
	        }

	        this.state = 160;
	        this.match(SwiftFinParser.RBRACE);
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



	mKey() {
	    let localctx = new MKeyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, SwiftFinParser.RULE_mKey);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 163; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 162;
	            this.match(SwiftFinParser.M_VALUE);
	            this.state = 165; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===SwiftFinParser.M_VALUE);
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



	mValue() {
	    let localctx = new MValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, SwiftFinParser.RULE_mValue);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 167;
	            _la = this._input.LA(1);
	            if(!(_la===SwiftFinParser.M_COLON || _la===SwiftFinParser.M_VALUE)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 170; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===SwiftFinParser.M_COLON || _la===SwiftFinParser.M_VALUE);
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

SwiftFinParser.EOF = antlr4.Token.EOF;
SwiftFinParser.BLOCK1 = 1;
SwiftFinParser.BLOCK2 = 2;
SwiftFinParser.BLOCK3 = 3;
SwiftFinParser.BLOCK4_A = 4;
SwiftFinParser.BLOCK4_B = 5;
SwiftFinParser.BLOCK5 = 6;
SwiftFinParser.LBRACE = 7;
SwiftFinParser.RBRACE = 8;
SwiftFinParser.COLON = 9;
SwiftFinParser.CRLF = 10;
SwiftFinParser.M_COLON = 11;
SwiftFinParser.M_VALUE = 12;
SwiftFinParser.B4_END = 13;
SwiftFinParser.B4_COLON = 14;
SwiftFinParser.B4_CRLF = 15;
SwiftFinParser.B4_VALUE = 16;
SwiftFinParser.V_END = 17;
SwiftFinParser.V_VALUE = 18;

SwiftFinParser.RULE_messages = 0;
SwiftFinParser.RULE_message = 1;
SwiftFinParser.RULE_block1 = 2;
SwiftFinParser.RULE_block2 = 3;
SwiftFinParser.RULE_block3 = 4;
SwiftFinParser.RULE_block4 = 5;
SwiftFinParser.RULE_block4Item = 6;
SwiftFinParser.RULE_block4Field = 7;
SwiftFinParser.RULE_block4Line = 8;
SwiftFinParser.RULE_block5 = 9;
SwiftFinParser.RULE_value = 10;
SwiftFinParser.RULE_map_ = 11;
SwiftFinParser.RULE_keyValue = 12;
SwiftFinParser.RULE_mKey = 13;
SwiftFinParser.RULE_mValue = 14;

class MessagesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SwiftFinParser.RULE_messages;
    }

	EOF() {
	    return this.getToken(SwiftFinParser.EOF, 0);
	};

	message = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MessageContext);
	    } else {
	        return this.getTypedRuleContext(MessageContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SwiftFinParserListener ) {
	        listener.enterMessages(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SwiftFinParserListener ) {
	        listener.exitMessages(this);
		}
	}


}



class MessageContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SwiftFinParser.RULE_message;
    }

	block1() {
	    return this.getTypedRuleContext(Block1Context,0);
	};

	block2() {
	    return this.getTypedRuleContext(Block2Context,0);
	};

	block3() {
	    return this.getTypedRuleContext(Block3Context,0);
	};

	block4() {
	    return this.getTypedRuleContext(Block4Context,0);
	};

	block5() {
	    return this.getTypedRuleContext(Block5Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof SwiftFinParserListener ) {
	        listener.enterMessage(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SwiftFinParserListener ) {
	        listener.exitMessage(this);
		}
	}


}



class Block1Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SwiftFinParser.RULE_block1;
    }

	BLOCK1() {
	    return this.getToken(SwiftFinParser.BLOCK1, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	V_END() {
	    return this.getToken(SwiftFinParser.V_END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SwiftFinParserListener ) {
	        listener.enterBlock1(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SwiftFinParserListener ) {
	        listener.exitBlock1(this);
		}
	}


}



class Block2Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SwiftFinParser.RULE_block2;
    }

	BLOCK2() {
	    return this.getToken(SwiftFinParser.BLOCK2, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	V_END() {
	    return this.getToken(SwiftFinParser.V_END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SwiftFinParserListener ) {
	        listener.enterBlock2(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SwiftFinParserListener ) {
	        listener.exitBlock2(this);
		}
	}


}



class Block3Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SwiftFinParser.RULE_block3;
    }

	BLOCK3() {
	    return this.getToken(SwiftFinParser.BLOCK3, 0);
	};

	map_() {
	    return this.getTypedRuleContext(Map_Context,0);
	};

	RBRACE() {
	    return this.getToken(SwiftFinParser.RBRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SwiftFinParserListener ) {
	        listener.enterBlock3(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SwiftFinParserListener ) {
	        listener.exitBlock3(this);
		}
	}


}



class Block4Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SwiftFinParser.RULE_block4;
    }

	BLOCK4_A() {
	    return this.getToken(SwiftFinParser.BLOCK4_A, 0);
	};

	B4_END() {
	    return this.getToken(SwiftFinParser.B4_END, 0);
	};

	block4Item = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Block4ItemContext);
	    } else {
	        return this.getTypedRuleContext(Block4ItemContext,i);
	    }
	};

	BLOCK4_B() {
	    return this.getToken(SwiftFinParser.BLOCK4_B, 0);
	};

	map_() {
	    return this.getTypedRuleContext(Map_Context,0);
	};

	RBRACE() {
	    return this.getToken(SwiftFinParser.RBRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SwiftFinParserListener ) {
	        listener.enterBlock4(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SwiftFinParserListener ) {
	        listener.exitBlock4(this);
		}
	}


}



class Block4ItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SwiftFinParser.RULE_block4Item;
    }

	B4_COLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SwiftFinParser.B4_COLON);
	    } else {
	        return this.getToken(SwiftFinParser.B4_COLON, i);
	    }
	};


	block4Field() {
	    return this.getTypedRuleContext(Block4FieldContext,0);
	};

	block4Line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Block4LineContext);
	    } else {
	        return this.getTypedRuleContext(Block4LineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SwiftFinParserListener ) {
	        listener.enterBlock4Item(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SwiftFinParserListener ) {
	        listener.exitBlock4Item(this);
		}
	}


}



class Block4FieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SwiftFinParser.RULE_block4Field;
    }

	B4_VALUE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SwiftFinParser.B4_VALUE);
	    } else {
	        return this.getToken(SwiftFinParser.B4_VALUE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SwiftFinParserListener ) {
	        listener.enterBlock4Field(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SwiftFinParserListener ) {
	        listener.exitBlock4Field(this);
		}
	}


}



class Block4LineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SwiftFinParser.RULE_block4Line;
    }

	B4_CRLF() {
	    return this.getToken(SwiftFinParser.B4_CRLF, 0);
	};

	B4_VALUE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SwiftFinParser.B4_VALUE);
	    } else {
	        return this.getToken(SwiftFinParser.B4_VALUE, i);
	    }
	};


	B4_COLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SwiftFinParser.B4_COLON);
	    } else {
	        return this.getToken(SwiftFinParser.B4_COLON, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SwiftFinParserListener ) {
	        listener.enterBlock4Line(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SwiftFinParserListener ) {
	        listener.exitBlock4Line(this);
		}
	}


}



class Block5Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SwiftFinParser.RULE_block5;
    }

	BLOCK5() {
	    return this.getToken(SwiftFinParser.BLOCK5, 0);
	};

	map_() {
	    return this.getTypedRuleContext(Map_Context,0);
	};

	RBRACE() {
	    return this.getToken(SwiftFinParser.RBRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SwiftFinParserListener ) {
	        listener.enterBlock5(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SwiftFinParserListener ) {
	        listener.exitBlock5(this);
		}
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SwiftFinParser.RULE_value;
    }

	V_VALUE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SwiftFinParser.V_VALUE);
	    } else {
	        return this.getToken(SwiftFinParser.V_VALUE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SwiftFinParserListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SwiftFinParserListener ) {
	        listener.exitValue(this);
		}
	}


}



class Map_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SwiftFinParser.RULE_map_;
    }

	keyValue = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(KeyValueContext);
	    } else {
	        return this.getTypedRuleContext(KeyValueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SwiftFinParserListener ) {
	        listener.enterMap_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SwiftFinParserListener ) {
	        listener.exitMap_(this);
		}
	}


}



class KeyValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SwiftFinParser.RULE_keyValue;
    }

	LBRACE() {
	    return this.getToken(SwiftFinParser.LBRACE, 0);
	};

	mKey() {
	    return this.getTypedRuleContext(MKeyContext,0);
	};

	M_COLON() {
	    return this.getToken(SwiftFinParser.M_COLON, 0);
	};

	RBRACE() {
	    return this.getToken(SwiftFinParser.RBRACE, 0);
	};

	mValue() {
	    return this.getTypedRuleContext(MValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SwiftFinParserListener ) {
	        listener.enterKeyValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SwiftFinParserListener ) {
	        listener.exitKeyValue(this);
		}
	}


}



class MKeyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SwiftFinParser.RULE_mKey;
    }

	M_VALUE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SwiftFinParser.M_VALUE);
	    } else {
	        return this.getToken(SwiftFinParser.M_VALUE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SwiftFinParserListener ) {
	        listener.enterMKey(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SwiftFinParserListener ) {
	        listener.exitMKey(this);
		}
	}


}



class MValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SwiftFinParser.RULE_mValue;
    }

	M_VALUE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SwiftFinParser.M_VALUE);
	    } else {
	        return this.getToken(SwiftFinParser.M_VALUE, i);
	    }
	};


	M_COLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SwiftFinParser.M_COLON);
	    } else {
	        return this.getToken(SwiftFinParser.M_COLON, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SwiftFinParserListener ) {
	        listener.enterMValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SwiftFinParserListener ) {
	        listener.exitMValue(this);
		}
	}


}




SwiftFinParser.MessagesContext = MessagesContext; 
SwiftFinParser.MessageContext = MessageContext; 
SwiftFinParser.Block1Context = Block1Context; 
SwiftFinParser.Block2Context = Block2Context; 
SwiftFinParser.Block3Context = Block3Context; 
SwiftFinParser.Block4Context = Block4Context; 
SwiftFinParser.Block4ItemContext = Block4ItemContext; 
SwiftFinParser.Block4FieldContext = Block4FieldContext; 
SwiftFinParser.Block4LineContext = Block4LineContext; 
SwiftFinParser.Block5Context = Block5Context; 
SwiftFinParser.ValueContext = ValueContext; 
SwiftFinParser.Map_Context = Map_Context; 
SwiftFinParser.KeyValueContext = KeyValueContext; 
SwiftFinParser.MKeyContext = MKeyContext; 
SwiftFinParser.MValueContext = MValueContext; 
