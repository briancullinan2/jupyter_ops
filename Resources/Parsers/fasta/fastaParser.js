// Generated from ./fasta/fasta.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import fastaListener from './fastaListener.js';
const serializedATN = [4,1,5,30,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,4,0,12,8,0,11,0,12,0,13,1,1,1,1,1,1,3,1,19,8,1,1,2,4,2,22,8,2,11,2,12,
2,23,1,3,1,3,1,4,1,4,1,4,0,0,5,0,2,4,6,8,0,0,28,0,11,1,0,0,0,2,18,1,0,0,
0,4,21,1,0,0,0,6,25,1,0,0,0,8,27,1,0,0,0,10,12,3,2,1,0,11,10,1,0,0,0,12,
13,1,0,0,0,13,11,1,0,0,0,13,14,1,0,0,0,14,1,1,0,0,0,15,19,3,6,3,0,16,19,
3,4,2,0,17,19,3,8,4,0,18,15,1,0,0,0,18,16,1,0,0,0,18,17,1,0,0,0,19,3,1,0,
0,0,20,22,5,5,0,0,21,20,1,0,0,0,22,23,1,0,0,0,23,21,1,0,0,0,23,24,1,0,0,
0,24,5,1,0,0,0,25,26,5,2,0,0,26,7,1,0,0,0,27,28,5,1,0,0,28,9,1,0,0,0,3,13,
18,23];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class fastaParser extends antlr4.Parser {

    static grammarFileName = "fasta.g4";
    static literalNames = [  ];
    static symbolicNames = [ null, "COMMENTLINE", "DESCRIPTIONLINE", "TEXT", 
                             "EOL", "SEQUENCELINE" ];
    static ruleNames = [ "sequence", "section", "sequencelines", "descriptionline", 
                         "commentline" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = fastaParser.ruleNames;
        this.literalNames = fastaParser.literalNames;
        this.symbolicNames = fastaParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	sequence() {
	    let localctx = new SequenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, fastaParser.RULE_sequence);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 11; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 10;
	            this.section();
	            this.state = 13; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << fastaParser.COMMENTLINE) | (1 << fastaParser.DESCRIPTIONLINE) | (1 << fastaParser.SEQUENCELINE))) !== 0));
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



	section() {
	    let localctx = new SectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, fastaParser.RULE_section);
	    try {
	        this.state = 18;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case fastaParser.DESCRIPTIONLINE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 15;
	            this.descriptionline();
	            break;
	        case fastaParser.SEQUENCELINE:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 16;
	            this.sequencelines();
	            break;
	        case fastaParser.COMMENTLINE:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 17;
	            this.commentline();
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



	sequencelines() {
	    let localctx = new SequencelinesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, fastaParser.RULE_sequencelines);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 20;
	        		this.match(fastaParser.SEQUENCELINE);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 23; 
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



	descriptionline() {
	    let localctx = new DescriptionlineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, fastaParser.RULE_descriptionline);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.match(fastaParser.DESCRIPTIONLINE);
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
	    this.enterRule(localctx, 8, fastaParser.RULE_commentline);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this.match(fastaParser.COMMENTLINE);
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

fastaParser.EOF = antlr4.Token.EOF;
fastaParser.COMMENTLINE = 1;
fastaParser.DESCRIPTIONLINE = 2;
fastaParser.TEXT = 3;
fastaParser.EOL = 4;
fastaParser.SEQUENCELINE = 5;

fastaParser.RULE_sequence = 0;
fastaParser.RULE_section = 1;
fastaParser.RULE_sequencelines = 2;
fastaParser.RULE_descriptionline = 3;
fastaParser.RULE_commentline = 4;

class SequenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = fastaParser.RULE_sequence;
    }

	section = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SectionContext);
	    } else {
	        return this.getTypedRuleContext(SectionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof fastaListener ) {
	        listener.enterSequence(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof fastaListener ) {
	        listener.exitSequence(this);
		}
	}


}



class SectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = fastaParser.RULE_section;
    }

	descriptionline() {
	    return this.getTypedRuleContext(DescriptionlineContext,0);
	};

	sequencelines() {
	    return this.getTypedRuleContext(SequencelinesContext,0);
	};

	commentline() {
	    return this.getTypedRuleContext(CommentlineContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof fastaListener ) {
	        listener.enterSection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof fastaListener ) {
	        listener.exitSection(this);
		}
	}


}



class SequencelinesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = fastaParser.RULE_sequencelines;
    }

	SEQUENCELINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(fastaParser.SEQUENCELINE);
	    } else {
	        return this.getToken(fastaParser.SEQUENCELINE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof fastaListener ) {
	        listener.enterSequencelines(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof fastaListener ) {
	        listener.exitSequencelines(this);
		}
	}


}



class DescriptionlineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = fastaParser.RULE_descriptionline;
    }

	DESCRIPTIONLINE() {
	    return this.getToken(fastaParser.DESCRIPTIONLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof fastaListener ) {
	        listener.enterDescriptionline(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof fastaListener ) {
	        listener.exitDescriptionline(this);
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
        this.ruleIndex = fastaParser.RULE_commentline;
    }

	COMMENTLINE() {
	    return this.getToken(fastaParser.COMMENTLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof fastaListener ) {
	        listener.enterCommentline(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof fastaListener ) {
	        listener.exitCommentline(this);
		}
	}


}




fastaParser.SequenceContext = SequenceContext; 
fastaParser.SectionContext = SectionContext; 
fastaParser.SequencelinesContext = SequencelinesContext; 
fastaParser.DescriptionlineContext = DescriptionlineContext; 
fastaParser.CommentlineContext = CommentlineContext; 
