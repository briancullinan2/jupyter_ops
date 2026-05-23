// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/rfc3080/beep.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import beepListener from './beepListener.js';
const serializedATN = [4,1,11,94,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,1,0,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,
3,2,44,8,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,
6,1,6,1,6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,
9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,3,15,92,8,
15,1,15,0,0,16,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,0,1,1,0,1,2,82,
0,32,1,0,0,0,2,35,1,0,0,0,4,43,1,0,0,0,6,45,1,0,0,0,8,49,1,0,0,0,10,53,1,
0,0,0,12,59,1,0,0,0,14,63,1,0,0,0,16,67,1,0,0,0,18,77,1,0,0,0,20,79,1,0,
0,0,22,81,1,0,0,0,24,83,1,0,0,0,26,85,1,0,0,0,28,87,1,0,0,0,30,89,1,0,0,
0,32,33,3,2,1,0,33,34,5,0,0,1,34,1,1,0,0,0,35,36,3,4,2,0,36,37,3,30,15,0,
37,3,1,0,0,0,38,44,3,6,3,0,39,44,3,8,4,0,40,44,3,12,6,0,41,44,3,10,5,0,42,
44,3,14,7,0,43,38,1,0,0,0,43,39,1,0,0,0,43,40,1,0,0,0,43,41,1,0,0,0,43,42,
1,0,0,0,44,5,1,0,0,0,45,46,5,7,0,0,46,47,5,9,0,0,47,48,3,16,8,0,48,7,1,0,
0,0,49,50,5,6,0,0,50,51,5,9,0,0,51,52,3,16,8,0,52,9,1,0,0,0,53,54,5,5,0,
0,54,55,5,9,0,0,55,56,3,16,8,0,56,57,5,9,0,0,57,58,3,28,14,0,58,11,1,0,0,
0,59,60,5,4,0,0,60,61,5,9,0,0,61,62,3,16,8,0,62,13,1,0,0,0,63,64,5,3,0,0,
64,65,5,9,0,0,65,66,3,16,8,0,66,15,1,0,0,0,67,68,3,18,9,0,68,69,5,9,0,0,
69,70,3,20,10,0,70,71,5,9,0,0,71,72,3,22,11,0,72,73,5,9,0,0,73,74,3,24,12,
0,74,75,5,9,0,0,75,76,3,26,13,0,76,17,1,0,0,0,77,78,5,8,0,0,78,19,1,0,0,
0,79,80,5,8,0,0,80,21,1,0,0,0,81,82,7,0,0,0,82,23,1,0,0,0,83,84,5,8,0,0,
84,25,1,0,0,0,85,86,5,8,0,0,86,27,1,0,0,0,87,88,5,8,0,0,88,29,1,0,0,0,89,
91,5,11,0,0,90,92,5,10,0,0,91,90,1,0,0,0,91,92,1,0,0,0,92,31,1,0,0,0,2,43,
91];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class beepParser extends antlr4.Parser {

    static grammarFileName = "beep.g4";
    static literalNames = [ null, "'.'", "'*'", "'NUL'", "'ERR'", "'ANS'", 
                            "'RPY'", "'MSG'", null, "' '" ];
    static symbolicNames = [ null, "DOT", "STAR", "NUL", "ERR", "ANS", "RPY", 
                             "MSG", "NUMBER", "SP", "CRLF", "PAYLOAD_TRAILER" ];
    static ruleNames = [ "frame", "data", "header", "msg", "rpy", "ans", 
                         "err", "nul", "common", "channel", "msgno", "more", 
                         "seqno", "size", "ansno", "payload_trailer" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = beepParser.ruleNames;
        this.literalNames = beepParser.literalNames;
        this.symbolicNames = beepParser.symbolicNames;
    }



	frame() {
	    let localctx = new FrameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, beepParser.RULE_frame);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.data();
	        this.state = 33;
	        this.match(beepParser.EOF);
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



	data() {
	    let localctx = new DataContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, beepParser.RULE_data);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.header();
	        this.state = 36;
	        this.payload_trailer();
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



	header() {
	    let localctx = new HeaderContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, beepParser.RULE_header);
	    try {
	        this.state = 43;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 38;
	            this.msg();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 39;
	            this.rpy();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 40;
	            this.err();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 41;
	            this.ans();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 42;
	            this.nul();
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



	msg() {
	    let localctx = new MsgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, beepParser.RULE_msg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(beepParser.MSG);
	        this.state = 46;
	        this.match(beepParser.SP);
	        this.state = 47;
	        this.common();
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



	rpy() {
	    let localctx = new RpyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, beepParser.RULE_rpy);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(beepParser.RPY);
	        this.state = 50;
	        this.match(beepParser.SP);
	        this.state = 51;
	        this.common();
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



	ans() {
	    let localctx = new AnsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, beepParser.RULE_ans);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(beepParser.ANS);
	        this.state = 54;
	        this.match(beepParser.SP);
	        this.state = 55;
	        this.common();
	        this.state = 56;
	        this.match(beepParser.SP);
	        this.state = 57;
	        this.ansno();
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



	err() {
	    let localctx = new ErrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, beepParser.RULE_err);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.match(beepParser.ERR);
	        this.state = 60;
	        this.match(beepParser.SP);
	        this.state = 61;
	        this.common();
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



	nul() {
	    let localctx = new NulContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, beepParser.RULE_nul);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.match(beepParser.NUL);
	        this.state = 64;
	        this.match(beepParser.SP);
	        this.state = 65;
	        this.common();
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



	common() {
	    let localctx = new CommonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, beepParser.RULE_common);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.channel();
	        this.state = 68;
	        this.match(beepParser.SP);
	        this.state = 69;
	        this.msgno();
	        this.state = 70;
	        this.match(beepParser.SP);
	        this.state = 71;
	        this.more();
	        this.state = 72;
	        this.match(beepParser.SP);
	        this.state = 73;
	        this.seqno();
	        this.state = 74;
	        this.match(beepParser.SP);
	        this.state = 75;
	        this.size();
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



	channel() {
	    let localctx = new ChannelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, beepParser.RULE_channel);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this.match(beepParser.NUMBER);
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



	msgno() {
	    let localctx = new MsgnoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, beepParser.RULE_msgno);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.match(beepParser.NUMBER);
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



	more() {
	    let localctx = new MoreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, beepParser.RULE_more);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        _la = this._input.LA(1);
	        if(!(_la===1 || _la===2)) {
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



	seqno() {
	    let localctx = new SeqnoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, beepParser.RULE_seqno);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this.match(beepParser.NUMBER);
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



	size() {
	    let localctx = new SizeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, beepParser.RULE_size);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this.match(beepParser.NUMBER);
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



	ansno() {
	    let localctx = new AnsnoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, beepParser.RULE_ansno);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.match(beepParser.NUMBER);
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



	payload_trailer() {
	    let localctx = new Payload_trailerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, beepParser.RULE_payload_trailer);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.match(beepParser.PAYLOAD_TRAILER);
	        this.state = 91;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===10) {
	            this.state = 90;
	            this.match(beepParser.CRLF);
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

beepParser.EOF = antlr4.Token.EOF;
beepParser.DOT = 1;
beepParser.STAR = 2;
beepParser.NUL = 3;
beepParser.ERR = 4;
beepParser.ANS = 5;
beepParser.RPY = 6;
beepParser.MSG = 7;
beepParser.NUMBER = 8;
beepParser.SP = 9;
beepParser.CRLF = 10;
beepParser.PAYLOAD_TRAILER = 11;

beepParser.RULE_frame = 0;
beepParser.RULE_data = 1;
beepParser.RULE_header = 2;
beepParser.RULE_msg = 3;
beepParser.RULE_rpy = 4;
beepParser.RULE_ans = 5;
beepParser.RULE_err = 6;
beepParser.RULE_nul = 7;
beepParser.RULE_common = 8;
beepParser.RULE_channel = 9;
beepParser.RULE_msgno = 10;
beepParser.RULE_more = 11;
beepParser.RULE_seqno = 12;
beepParser.RULE_size = 13;
beepParser.RULE_ansno = 14;
beepParser.RULE_payload_trailer = 15;

class FrameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = beepParser.RULE_frame;
    }

	data() {
	    return this.getTypedRuleContext(DataContext,0);
	};

	EOF() {
	    return this.getToken(beepParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof beepListener ) {
	        listener.enterFrame(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof beepListener ) {
	        listener.exitFrame(this);
		}
	}


}



class DataContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = beepParser.RULE_data;
    }

	header() {
	    return this.getTypedRuleContext(HeaderContext,0);
	};

	payload_trailer() {
	    return this.getTypedRuleContext(Payload_trailerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof beepListener ) {
	        listener.enterData(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof beepListener ) {
	        listener.exitData(this);
		}
	}


}



class HeaderContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = beepParser.RULE_header;
    }

	msg() {
	    return this.getTypedRuleContext(MsgContext,0);
	};

	rpy() {
	    return this.getTypedRuleContext(RpyContext,0);
	};

	err() {
	    return this.getTypedRuleContext(ErrContext,0);
	};

	ans() {
	    return this.getTypedRuleContext(AnsContext,0);
	};

	nul() {
	    return this.getTypedRuleContext(NulContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof beepListener ) {
	        listener.enterHeader(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof beepListener ) {
	        listener.exitHeader(this);
		}
	}


}



class MsgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = beepParser.RULE_msg;
    }

	MSG() {
	    return this.getToken(beepParser.MSG, 0);
	};

	SP() {
	    return this.getToken(beepParser.SP, 0);
	};

	common() {
	    return this.getTypedRuleContext(CommonContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof beepListener ) {
	        listener.enterMsg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof beepListener ) {
	        listener.exitMsg(this);
		}
	}


}



class RpyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = beepParser.RULE_rpy;
    }

	RPY() {
	    return this.getToken(beepParser.RPY, 0);
	};

	SP() {
	    return this.getToken(beepParser.SP, 0);
	};

	common() {
	    return this.getTypedRuleContext(CommonContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof beepListener ) {
	        listener.enterRpy(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof beepListener ) {
	        listener.exitRpy(this);
		}
	}


}



class AnsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = beepParser.RULE_ans;
    }

	ANS() {
	    return this.getToken(beepParser.ANS, 0);
	};

	SP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(beepParser.SP);
	    } else {
	        return this.getToken(beepParser.SP, i);
	    }
	};


	common() {
	    return this.getTypedRuleContext(CommonContext,0);
	};

	ansno() {
	    return this.getTypedRuleContext(AnsnoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof beepListener ) {
	        listener.enterAns(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof beepListener ) {
	        listener.exitAns(this);
		}
	}


}



class ErrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = beepParser.RULE_err;
    }

	ERR() {
	    return this.getToken(beepParser.ERR, 0);
	};

	SP() {
	    return this.getToken(beepParser.SP, 0);
	};

	common() {
	    return this.getTypedRuleContext(CommonContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof beepListener ) {
	        listener.enterErr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof beepListener ) {
	        listener.exitErr(this);
		}
	}


}



class NulContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = beepParser.RULE_nul;
    }

	NUL() {
	    return this.getToken(beepParser.NUL, 0);
	};

	SP() {
	    return this.getToken(beepParser.SP, 0);
	};

	common() {
	    return this.getTypedRuleContext(CommonContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof beepListener ) {
	        listener.enterNul(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof beepListener ) {
	        listener.exitNul(this);
		}
	}


}



class CommonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = beepParser.RULE_common;
    }

	channel() {
	    return this.getTypedRuleContext(ChannelContext,0);
	};

	SP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(beepParser.SP);
	    } else {
	        return this.getToken(beepParser.SP, i);
	    }
	};


	msgno() {
	    return this.getTypedRuleContext(MsgnoContext,0);
	};

	more() {
	    return this.getTypedRuleContext(MoreContext,0);
	};

	seqno() {
	    return this.getTypedRuleContext(SeqnoContext,0);
	};

	size() {
	    return this.getTypedRuleContext(SizeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof beepListener ) {
	        listener.enterCommon(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof beepListener ) {
	        listener.exitCommon(this);
		}
	}


}



class ChannelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = beepParser.RULE_channel;
    }

	NUMBER() {
	    return this.getToken(beepParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof beepListener ) {
	        listener.enterChannel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof beepListener ) {
	        listener.exitChannel(this);
		}
	}


}



class MsgnoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = beepParser.RULE_msgno;
    }

	NUMBER() {
	    return this.getToken(beepParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof beepListener ) {
	        listener.enterMsgno(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof beepListener ) {
	        listener.exitMsgno(this);
		}
	}


}



class MoreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = beepParser.RULE_more;
    }

	DOT() {
	    return this.getToken(beepParser.DOT, 0);
	};

	STAR() {
	    return this.getToken(beepParser.STAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof beepListener ) {
	        listener.enterMore(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof beepListener ) {
	        listener.exitMore(this);
		}
	}


}



class SeqnoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = beepParser.RULE_seqno;
    }

	NUMBER() {
	    return this.getToken(beepParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof beepListener ) {
	        listener.enterSeqno(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof beepListener ) {
	        listener.exitSeqno(this);
		}
	}


}



class SizeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = beepParser.RULE_size;
    }

	NUMBER() {
	    return this.getToken(beepParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof beepListener ) {
	        listener.enterSize(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof beepListener ) {
	        listener.exitSize(this);
		}
	}


}



class AnsnoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = beepParser.RULE_ansno;
    }

	NUMBER() {
	    return this.getToken(beepParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof beepListener ) {
	        listener.enterAnsno(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof beepListener ) {
	        listener.exitAnsno(this);
		}
	}


}



class Payload_trailerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = beepParser.RULE_payload_trailer;
    }

	PAYLOAD_TRAILER() {
	    return this.getToken(beepParser.PAYLOAD_TRAILER, 0);
	};

	CRLF() {
	    return this.getToken(beepParser.CRLF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof beepListener ) {
	        listener.enterPayload_trailer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof beepListener ) {
	        listener.exitPayload_trailer(this);
		}
	}


}




beepParser.FrameContext = FrameContext; 
beepParser.DataContext = DataContext; 
beepParser.HeaderContext = HeaderContext; 
beepParser.MsgContext = MsgContext; 
beepParser.RpyContext = RpyContext; 
beepParser.AnsContext = AnsContext; 
beepParser.ErrContext = ErrContext; 
beepParser.NulContext = NulContext; 
beepParser.CommonContext = CommonContext; 
beepParser.ChannelContext = ChannelContext; 
beepParser.MsgnoContext = MsgnoContext; 
beepParser.MoreContext = MoreContext; 
beepParser.SeqnoContext = SeqnoContext; 
beepParser.SizeContext = SizeContext; 
beepParser.AnsnoContext = AnsnoContext; 
beepParser.Payload_trailerContext = Payload_trailerContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
