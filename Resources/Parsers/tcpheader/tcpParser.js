// Generated from Resources/Parsers/tcpheader/tcp.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import tcpListener from './tcpListener.js';
const serializedATN = [4,1,2,60,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,0,1,0,
1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,
1,7,1,7,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,11,1,11,1,11,0,0,12,
0,2,4,6,8,10,12,14,16,18,20,22,0,0,47,0,24,1,0,0,0,2,33,1,0,0,0,4,35,1,0,
0,0,6,37,1,0,0,0,8,39,1,0,0,0,10,41,1,0,0,0,12,43,1,0,0,0,14,45,1,0,0,0,
16,47,1,0,0,0,18,49,1,0,0,0,20,54,1,0,0,0,22,57,1,0,0,0,24,25,3,2,1,0,25,
26,3,4,2,0,26,27,3,6,3,0,27,28,3,8,4,0,28,29,3,10,5,0,29,30,3,12,6,0,30,
31,3,14,7,0,31,32,3,16,8,0,32,1,1,0,0,0,33,34,3,20,10,0,34,3,1,0,0,0,35,
36,3,20,10,0,36,5,1,0,0,0,37,38,3,18,9,0,38,7,1,0,0,0,39,40,3,18,9,0,40,
9,1,0,0,0,41,42,3,20,10,0,42,11,1,0,0,0,43,44,3,20,10,0,44,13,1,0,0,0,45,
46,3,20,10,0,46,15,1,0,0,0,47,48,3,20,10,0,48,17,1,0,0,0,49,50,5,1,0,0,50,
51,5,1,0,0,51,52,5,1,0,0,52,53,5,1,0,0,53,19,1,0,0,0,54,55,5,1,0,0,55,56,
5,1,0,0,56,21,1,0,0,0,57,58,5,1,0,0,58,23,1,0,0,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class tcpParser extends antlr4.Parser {

    static grammarFileName = "tcp.g4";
    static literalNames = [  ];
    static symbolicNames = [ null, "BYTE", "WS" ];
    static ruleNames = [ "segmentheader", "sourceport", "destinationport", 
                         "sequencenumber", "acknumber", "flags", "windowsize", 
                         "checksum", "urgent", "dword_", "word_", "byte_" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = tcpParser.ruleNames;
        this.literalNames = tcpParser.literalNames;
        this.symbolicNames = tcpParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	segmentheader() {
	    let localctx = new SegmentheaderContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, tcpParser.RULE_segmentheader);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.sourceport();
	        this.state = 25;
	        this.destinationport();
	        this.state = 26;
	        this.sequencenumber();
	        this.state = 27;
	        this.acknumber();
	        this.state = 28;
	        this.flags();
	        this.state = 29;
	        this.windowsize();
	        this.state = 30;
	        this.checksum();
	        this.state = 31;
	        this.urgent();
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



	sourceport() {
	    let localctx = new SourceportContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, tcpParser.RULE_sourceport);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.word_();
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



	destinationport() {
	    let localctx = new DestinationportContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, tcpParser.RULE_destinationport);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.word_();
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



	sequencenumber() {
	    let localctx = new SequencenumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, tcpParser.RULE_sequencenumber);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.dword_();
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



	acknumber() {
	    let localctx = new AcknumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, tcpParser.RULE_acknumber);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.dword_();
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



	flags() {
	    let localctx = new FlagsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, tcpParser.RULE_flags);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this.word_();
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



	windowsize() {
	    let localctx = new WindowsizeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, tcpParser.RULE_windowsize);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.word_();
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



	checksum() {
	    let localctx = new ChecksumContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, tcpParser.RULE_checksum);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.word_();
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



	urgent() {
	    let localctx = new UrgentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, tcpParser.RULE_urgent);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.word_();
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



	dword_() {
	    let localctx = new Dword_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, tcpParser.RULE_dword_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(tcpParser.BYTE);
	        this.state = 50;
	        this.match(tcpParser.BYTE);
	        this.state = 51;
	        this.match(tcpParser.BYTE);
	        this.state = 52;
	        this.match(tcpParser.BYTE);
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



	word_() {
	    let localctx = new Word_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, tcpParser.RULE_word_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(tcpParser.BYTE);
	        this.state = 55;
	        this.match(tcpParser.BYTE);
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



	byte_() {
	    let localctx = new Byte_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, tcpParser.RULE_byte_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(tcpParser.BYTE);
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

tcpParser.EOF = antlr4.Token.EOF;
tcpParser.BYTE = 1;
tcpParser.WS = 2;

tcpParser.RULE_segmentheader = 0;
tcpParser.RULE_sourceport = 1;
tcpParser.RULE_destinationport = 2;
tcpParser.RULE_sequencenumber = 3;
tcpParser.RULE_acknumber = 4;
tcpParser.RULE_flags = 5;
tcpParser.RULE_windowsize = 6;
tcpParser.RULE_checksum = 7;
tcpParser.RULE_urgent = 8;
tcpParser.RULE_dword_ = 9;
tcpParser.RULE_word_ = 10;
tcpParser.RULE_byte_ = 11;

class SegmentheaderContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tcpParser.RULE_segmentheader;
    }

	sourceport() {
	    return this.getTypedRuleContext(SourceportContext,0);
	};

	destinationport() {
	    return this.getTypedRuleContext(DestinationportContext,0);
	};

	sequencenumber() {
	    return this.getTypedRuleContext(SequencenumberContext,0);
	};

	acknumber() {
	    return this.getTypedRuleContext(AcknumberContext,0);
	};

	flags() {
	    return this.getTypedRuleContext(FlagsContext,0);
	};

	windowsize() {
	    return this.getTypedRuleContext(WindowsizeContext,0);
	};

	checksum() {
	    return this.getTypedRuleContext(ChecksumContext,0);
	};

	urgent() {
	    return this.getTypedRuleContext(UrgentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tcpListener ) {
	        listener.enterSegmentheader(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tcpListener ) {
	        listener.exitSegmentheader(this);
		}
	}


}



class SourceportContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tcpParser.RULE_sourceport;
    }

	word_() {
	    return this.getTypedRuleContext(Word_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof tcpListener ) {
	        listener.enterSourceport(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tcpListener ) {
	        listener.exitSourceport(this);
		}
	}


}



class DestinationportContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tcpParser.RULE_destinationport;
    }

	word_() {
	    return this.getTypedRuleContext(Word_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof tcpListener ) {
	        listener.enterDestinationport(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tcpListener ) {
	        listener.exitDestinationport(this);
		}
	}


}



class SequencenumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tcpParser.RULE_sequencenumber;
    }

	dword_() {
	    return this.getTypedRuleContext(Dword_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof tcpListener ) {
	        listener.enterSequencenumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tcpListener ) {
	        listener.exitSequencenumber(this);
		}
	}


}



class AcknumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tcpParser.RULE_acknumber;
    }

	dword_() {
	    return this.getTypedRuleContext(Dword_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof tcpListener ) {
	        listener.enterAcknumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tcpListener ) {
	        listener.exitAcknumber(this);
		}
	}


}



class FlagsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tcpParser.RULE_flags;
    }

	word_() {
	    return this.getTypedRuleContext(Word_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof tcpListener ) {
	        listener.enterFlags(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tcpListener ) {
	        listener.exitFlags(this);
		}
	}


}



class WindowsizeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tcpParser.RULE_windowsize;
    }

	word_() {
	    return this.getTypedRuleContext(Word_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof tcpListener ) {
	        listener.enterWindowsize(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tcpListener ) {
	        listener.exitWindowsize(this);
		}
	}


}



class ChecksumContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tcpParser.RULE_checksum;
    }

	word_() {
	    return this.getTypedRuleContext(Word_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof tcpListener ) {
	        listener.enterChecksum(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tcpListener ) {
	        listener.exitChecksum(this);
		}
	}


}



class UrgentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tcpParser.RULE_urgent;
    }

	word_() {
	    return this.getTypedRuleContext(Word_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof tcpListener ) {
	        listener.enterUrgent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tcpListener ) {
	        listener.exitUrgent(this);
		}
	}


}



class Dword_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tcpParser.RULE_dword_;
    }

	BYTE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tcpParser.BYTE);
	    } else {
	        return this.getToken(tcpParser.BYTE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof tcpListener ) {
	        listener.enterDword_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tcpListener ) {
	        listener.exitDword_(this);
		}
	}


}



class Word_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tcpParser.RULE_word_;
    }

	BYTE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tcpParser.BYTE);
	    } else {
	        return this.getToken(tcpParser.BYTE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof tcpListener ) {
	        listener.enterWord_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tcpListener ) {
	        listener.exitWord_(this);
		}
	}


}



class Byte_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tcpParser.RULE_byte_;
    }

	BYTE() {
	    return this.getToken(tcpParser.BYTE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tcpListener ) {
	        listener.enterByte_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tcpListener ) {
	        listener.exitByte_(this);
		}
	}


}




tcpParser.SegmentheaderContext = SegmentheaderContext; 
tcpParser.SourceportContext = SourceportContext; 
tcpParser.DestinationportContext = DestinationportContext; 
tcpParser.SequencenumberContext = SequencenumberContext; 
tcpParser.AcknumberContext = AcknumberContext; 
tcpParser.FlagsContext = FlagsContext; 
tcpParser.WindowsizeContext = WindowsizeContext; 
tcpParser.ChecksumContext = ChecksumContext; 
tcpParser.UrgentContext = UrgentContext; 
tcpParser.Dword_Context = Dword_Context; 
tcpParser.Word_Context = Word_Context; 
tcpParser.Byte_Context = Byte_Context; 
