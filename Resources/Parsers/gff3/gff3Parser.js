// Generated from Resources/Parsers/gff3/gff3.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import gff3Listener from './gff3Listener.js';
const serializedATN = [4,1,7,90,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
13,7,13,1,0,1,0,4,0,31,8,0,11,0,12,0,32,1,1,1,1,3,1,37,8,1,1,2,1,2,1,2,1,
2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,56,8,2,1,2,1,2,
1,3,1,3,1,3,5,3,63,8,3,10,3,12,3,66,9,3,1,4,1,4,1,4,1,4,1,5,1,5,1,6,1,6,
1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,13,0,0,
14,0,2,4,6,8,10,12,14,16,18,20,22,24,26,0,0,79,0,28,1,0,0,0,2,36,1,0,0,0,
4,38,1,0,0,0,6,59,1,0,0,0,8,67,1,0,0,0,10,71,1,0,0,0,12,73,1,0,0,0,14,75,
1,0,0,0,16,77,1,0,0,0,18,79,1,0,0,0,20,81,1,0,0,0,22,83,1,0,0,0,24,85,1,
0,0,0,26,87,1,0,0,0,28,30,5,4,0,0,29,31,3,2,1,0,30,29,1,0,0,0,31,32,1,0,
0,0,32,30,1,0,0,0,32,33,1,0,0,0,33,1,1,0,0,0,34,37,3,26,13,0,35,37,3,4,2,
0,36,34,1,0,0,0,36,35,1,0,0,0,37,3,1,0,0,0,38,39,3,10,5,0,39,40,5,1,0,0,
40,41,3,12,6,0,41,42,5,1,0,0,42,43,3,14,7,0,43,44,5,1,0,0,44,45,3,16,8,0,
45,46,5,1,0,0,46,47,3,18,9,0,47,48,5,1,0,0,48,49,3,22,11,0,49,50,5,1,0,0,
50,51,3,20,10,0,51,52,5,1,0,0,52,53,3,24,12,0,53,55,5,1,0,0,54,56,3,6,3,
0,55,54,1,0,0,0,55,56,1,0,0,0,56,57,1,0,0,0,57,58,5,6,0,0,58,5,1,0,0,0,59,
64,3,8,4,0,60,61,5,2,0,0,61,63,3,8,4,0,62,60,1,0,0,0,63,66,1,0,0,0,64,62,
1,0,0,0,64,65,1,0,0,0,65,7,1,0,0,0,66,64,1,0,0,0,67,68,5,7,0,0,68,69,5,3,
0,0,69,70,5,7,0,0,70,9,1,0,0,0,71,72,5,7,0,0,72,11,1,0,0,0,73,74,5,7,0,0,
74,13,1,0,0,0,75,76,5,7,0,0,76,15,1,0,0,0,77,78,5,7,0,0,78,17,1,0,0,0,79,
80,5,7,0,0,80,19,1,0,0,0,81,82,5,7,0,0,82,21,1,0,0,0,83,84,5,7,0,0,84,23,
1,0,0,0,85,86,5,7,0,0,86,25,1,0,0,0,87,88,5,5,0,0,88,27,1,0,0,0,4,32,36,
55,64];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class gff3Parser extends antlr4.Parser {

    static grammarFileName = "gff3.g4";
    static literalNames = [ null, "'\\t'", "';'", "'='" ];
    static symbolicNames = [ null, null, null, null, "HEADER", "COMMENTLINE", 
                             "EOL", "TEXT" ];
    static ruleNames = [ "document", "line", "dataline", "attributes", "attribute", 
                         "seqid", "source", "type_", "start", "end", "strand", 
                         "score", "phase", "commentline" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = gff3Parser.ruleNames;
        this.literalNames = gff3Parser.literalNames;
        this.symbolicNames = gff3Parser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	document() {
	    let localctx = new DocumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, gff3Parser.RULE_document);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(gff3Parser.HEADER);
	        this.state = 30; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 29;
	            this.line();
	            this.state = 32; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===gff3Parser.COMMENTLINE || _la===gff3Parser.TEXT);
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



	line() {
	    let localctx = new LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, gff3Parser.RULE_line);
	    try {
	        this.state = 36;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case gff3Parser.COMMENTLINE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 34;
	            this.commentline();
	            break;
	        case gff3Parser.TEXT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 35;
	            this.dataline();
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



	dataline() {
	    let localctx = new DatalineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, gff3Parser.RULE_dataline);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.seqid();
	        this.state = 39;
	        this.match(gff3Parser.T__0);
	        this.state = 40;
	        this.source();
	        this.state = 41;
	        this.match(gff3Parser.T__0);
	        this.state = 42;
	        this.type_();
	        this.state = 43;
	        this.match(gff3Parser.T__0);
	        this.state = 44;
	        this.start();
	        this.state = 45;
	        this.match(gff3Parser.T__0);
	        this.state = 46;
	        this.end();
	        this.state = 47;
	        this.match(gff3Parser.T__0);
	        this.state = 48;
	        this.score();
	        this.state = 49;
	        this.match(gff3Parser.T__0);
	        this.state = 50;
	        this.strand();
	        this.state = 51;
	        this.match(gff3Parser.T__0);
	        this.state = 52;
	        this.phase();
	        this.state = 53;
	        this.match(gff3Parser.T__0);
	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===gff3Parser.TEXT) {
	            this.state = 54;
	            this.attributes();
	        }

	        this.state = 57;
	        this.match(gff3Parser.EOL);
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



	attributes() {
	    let localctx = new AttributesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, gff3Parser.RULE_attributes);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.attribute();
	        this.state = 64;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===gff3Parser.T__1) {
	            this.state = 60;
	            this.match(gff3Parser.T__1);
	            this.state = 61;
	            this.attribute();
	            this.state = 66;
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



	attribute() {
	    let localctx = new AttributeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, gff3Parser.RULE_attribute);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(gff3Parser.TEXT);
	        this.state = 68;
	        this.match(gff3Parser.T__2);
	        this.state = 69;
	        this.match(gff3Parser.TEXT);
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



	seqid() {
	    let localctx = new SeqidContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, gff3Parser.RULE_seqid);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(gff3Parser.TEXT);
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



	source() {
	    let localctx = new SourceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, gff3Parser.RULE_source);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(gff3Parser.TEXT);
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
	    this.enterRule(localctx, 14, gff3Parser.RULE_type_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this.match(gff3Parser.TEXT);
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



	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, gff3Parser.RULE_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this.match(gff3Parser.TEXT);
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



	end() {
	    let localctx = new EndContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, gff3Parser.RULE_end);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.match(gff3Parser.TEXT);
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



	strand() {
	    let localctx = new StrandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, gff3Parser.RULE_strand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.match(gff3Parser.TEXT);
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



	score() {
	    let localctx = new ScoreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, gff3Parser.RULE_score);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this.match(gff3Parser.TEXT);
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



	phase() {
	    let localctx = new PhaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, gff3Parser.RULE_phase);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this.match(gff3Parser.TEXT);
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



	commentline() {
	    let localctx = new CommentlineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, gff3Parser.RULE_commentline);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.match(gff3Parser.COMMENTLINE);
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

gff3Parser.EOF = antlr4.Token.EOF;
gff3Parser.T__0 = 1;
gff3Parser.T__1 = 2;
gff3Parser.T__2 = 3;
gff3Parser.HEADER = 4;
gff3Parser.COMMENTLINE = 5;
gff3Parser.EOL = 6;
gff3Parser.TEXT = 7;

gff3Parser.RULE_document = 0;
gff3Parser.RULE_line = 1;
gff3Parser.RULE_dataline = 2;
gff3Parser.RULE_attributes = 3;
gff3Parser.RULE_attribute = 4;
gff3Parser.RULE_seqid = 5;
gff3Parser.RULE_source = 6;
gff3Parser.RULE_type_ = 7;
gff3Parser.RULE_start = 8;
gff3Parser.RULE_end = 9;
gff3Parser.RULE_strand = 10;
gff3Parser.RULE_score = 11;
gff3Parser.RULE_phase = 12;
gff3Parser.RULE_commentline = 13;

class DocumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gff3Parser.RULE_document;
    }

	HEADER() {
	    return this.getToken(gff3Parser.HEADER, 0);
	};

	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gff3Listener ) {
	        listener.enterDocument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gff3Listener ) {
	        listener.exitDocument(this);
		}
	}


}



class LineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gff3Parser.RULE_line;
    }

	commentline() {
	    return this.getTypedRuleContext(CommentlineContext,0);
	};

	dataline() {
	    return this.getTypedRuleContext(DatalineContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gff3Listener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gff3Listener ) {
	        listener.exitLine(this);
		}
	}


}



class DatalineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gff3Parser.RULE_dataline;
    }

	seqid() {
	    return this.getTypedRuleContext(SeqidContext,0);
	};

	source() {
	    return this.getTypedRuleContext(SourceContext,0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	start() {
	    return this.getTypedRuleContext(StartContext,0);
	};

	end() {
	    return this.getTypedRuleContext(EndContext,0);
	};

	score() {
	    return this.getTypedRuleContext(ScoreContext,0);
	};

	strand() {
	    return this.getTypedRuleContext(StrandContext,0);
	};

	phase() {
	    return this.getTypedRuleContext(PhaseContext,0);
	};

	EOL() {
	    return this.getToken(gff3Parser.EOL, 0);
	};

	attributes() {
	    return this.getTypedRuleContext(AttributesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gff3Listener ) {
	        listener.enterDataline(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gff3Listener ) {
	        listener.exitDataline(this);
		}
	}


}



class AttributesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gff3Parser.RULE_attributes;
    }

	attribute = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AttributeContext);
	    } else {
	        return this.getTypedRuleContext(AttributeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gff3Listener ) {
	        listener.enterAttributes(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gff3Listener ) {
	        listener.exitAttributes(this);
		}
	}


}



class AttributeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gff3Parser.RULE_attribute;
    }

	TEXT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(gff3Parser.TEXT);
	    } else {
	        return this.getToken(gff3Parser.TEXT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof gff3Listener ) {
	        listener.enterAttribute(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gff3Listener ) {
	        listener.exitAttribute(this);
		}
	}


}



class SeqidContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gff3Parser.RULE_seqid;
    }

	TEXT() {
	    return this.getToken(gff3Parser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gff3Listener ) {
	        listener.enterSeqid(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gff3Listener ) {
	        listener.exitSeqid(this);
		}
	}


}



class SourceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gff3Parser.RULE_source;
    }

	TEXT() {
	    return this.getToken(gff3Parser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gff3Listener ) {
	        listener.enterSource(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gff3Listener ) {
	        listener.exitSource(this);
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
        this.ruleIndex = gff3Parser.RULE_type_;
    }

	TEXT() {
	    return this.getToken(gff3Parser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gff3Listener ) {
	        listener.enterType_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gff3Listener ) {
	        listener.exitType_(this);
		}
	}


}



class StartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gff3Parser.RULE_start;
    }

	TEXT() {
	    return this.getToken(gff3Parser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gff3Listener ) {
	        listener.enterStart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gff3Listener ) {
	        listener.exitStart(this);
		}
	}


}



class EndContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gff3Parser.RULE_end;
    }

	TEXT() {
	    return this.getToken(gff3Parser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gff3Listener ) {
	        listener.enterEnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gff3Listener ) {
	        listener.exitEnd(this);
		}
	}


}



class StrandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gff3Parser.RULE_strand;
    }

	TEXT() {
	    return this.getToken(gff3Parser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gff3Listener ) {
	        listener.enterStrand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gff3Listener ) {
	        listener.exitStrand(this);
		}
	}


}



class ScoreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gff3Parser.RULE_score;
    }

	TEXT() {
	    return this.getToken(gff3Parser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gff3Listener ) {
	        listener.enterScore(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gff3Listener ) {
	        listener.exitScore(this);
		}
	}


}



class PhaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gff3Parser.RULE_phase;
    }

	TEXT() {
	    return this.getToken(gff3Parser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gff3Listener ) {
	        listener.enterPhase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gff3Listener ) {
	        listener.exitPhase(this);
		}
	}


}



class CommentlineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gff3Parser.RULE_commentline;
    }

	COMMENTLINE() {
	    return this.getToken(gff3Parser.COMMENTLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gff3Listener ) {
	        listener.enterCommentline(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gff3Listener ) {
	        listener.exitCommentline(this);
		}
	}


}




gff3Parser.DocumentContext = DocumentContext; 
gff3Parser.LineContext = LineContext; 
gff3Parser.DatalineContext = DatalineContext; 
gff3Parser.AttributesContext = AttributesContext; 
gff3Parser.AttributeContext = AttributeContext; 
gff3Parser.SeqidContext = SeqidContext; 
gff3Parser.SourceContext = SourceContext; 
gff3Parser.Type_Context = Type_Context; 
gff3Parser.StartContext = StartContext; 
gff3Parser.EndContext = EndContext; 
gff3Parser.StrandContext = StrandContext; 
gff3Parser.ScoreContext = ScoreContext; 
gff3Parser.PhaseContext = PhaseContext; 
gff3Parser.CommentlineContext = CommentlineContext; 
