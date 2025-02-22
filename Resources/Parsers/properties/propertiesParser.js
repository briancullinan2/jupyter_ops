// Generated from ./properties/properties.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import propertiesListener from './propertiesListener.js';
const serializedATN = [4,1,5,33,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,4,0,14,8,0,11,0,12,0,15,1,1,1,1,3,1,20,8,1,1,2,1,2,1,2,3,2,25,
8,2,1,3,1,3,1,4,1,4,1,5,1,5,1,5,0,0,6,0,2,4,6,8,10,0,1,1,0,2,3,29,0,13,1,
0,0,0,2,19,1,0,0,0,4,21,1,0,0,0,6,26,1,0,0,0,8,28,1,0,0,0,10,30,1,0,0,0,
12,14,3,2,1,0,13,12,1,0,0,0,14,15,1,0,0,0,15,13,1,0,0,0,15,16,1,0,0,0,16,
1,1,0,0,0,17,20,3,10,5,0,18,20,3,4,2,0,19,17,1,0,0,0,19,18,1,0,0,0,20,3,
1,0,0,0,21,22,3,6,3,0,22,24,5,1,0,0,23,25,3,8,4,0,24,23,1,0,0,0,24,25,1,
0,0,0,25,5,1,0,0,0,26,27,5,2,0,0,27,7,1,0,0,0,28,29,7,0,0,0,29,9,1,0,0,0,
30,31,5,4,0,0,31,11,1,0,0,0,3,15,19,24];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class propertiesParser extends antlr4.Parser {

    static grammarFileName = "properties.g4";
    static literalNames = [ null, "'='" ];
    static symbolicNames = [ null, null, "TEXT", "STRING", "COMMENT", "TERMINATOR" ];
    static ruleNames = [ "propertiesFile", "row", "decl", "key", "value", 
                         "comment" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = propertiesParser.ruleNames;
        this.literalNames = propertiesParser.literalNames;
        this.symbolicNames = propertiesParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	propertiesFile() {
	    let localctx = new PropertiesFileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, propertiesParser.RULE_propertiesFile);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 13; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 12;
	            this.row();
	            this.state = 15; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===propertiesParser.TEXT || _la===propertiesParser.COMMENT);
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



	row() {
	    let localctx = new RowContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, propertiesParser.RULE_row);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case propertiesParser.COMMENT:
	            this.state = 17;
	            this.comment();
	            break;
	        case propertiesParser.TEXT:
	            this.state = 18;
	            this.decl();
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



	decl() {
	    let localctx = new DeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, propertiesParser.RULE_decl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this.key();
	        this.state = 22;
	        this.match(propertiesParser.T__0);
	        this.state = 24;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 23;
	            this.value();

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



	key() {
	    let localctx = new KeyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, propertiesParser.RULE_key);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.match(propertiesParser.TEXT);
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
	    this.enterRule(localctx, 8, propertiesParser.RULE_value);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        _la = this._input.LA(1);
	        if(!(_la===propertiesParser.TEXT || _la===propertiesParser.STRING)) {
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



	comment() {
	    let localctx = new CommentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, propertiesParser.RULE_comment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.match(propertiesParser.COMMENT);
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

propertiesParser.EOF = antlr4.Token.EOF;
propertiesParser.T__0 = 1;
propertiesParser.TEXT = 2;
propertiesParser.STRING = 3;
propertiesParser.COMMENT = 4;
propertiesParser.TERMINATOR = 5;

propertiesParser.RULE_propertiesFile = 0;
propertiesParser.RULE_row = 1;
propertiesParser.RULE_decl = 2;
propertiesParser.RULE_key = 3;
propertiesParser.RULE_value = 4;
propertiesParser.RULE_comment = 5;

class PropertiesFileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = propertiesParser.RULE_propertiesFile;
    }

	row = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RowContext);
	    } else {
	        return this.getTypedRuleContext(RowContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof propertiesListener ) {
	        listener.enterPropertiesFile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof propertiesListener ) {
	        listener.exitPropertiesFile(this);
		}
	}


}



class RowContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = propertiesParser.RULE_row;
    }

	comment() {
	    return this.getTypedRuleContext(CommentContext,0);
	};

	decl() {
	    return this.getTypedRuleContext(DeclContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof propertiesListener ) {
	        listener.enterRow(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof propertiesListener ) {
	        listener.exitRow(this);
		}
	}


}



class DeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = propertiesParser.RULE_decl;
    }

	key() {
	    return this.getTypedRuleContext(KeyContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof propertiesListener ) {
	        listener.enterDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof propertiesListener ) {
	        listener.exitDecl(this);
		}
	}


}



class KeyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = propertiesParser.RULE_key;
    }

	TEXT() {
	    return this.getToken(propertiesParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof propertiesListener ) {
	        listener.enterKey(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof propertiesListener ) {
	        listener.exitKey(this);
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
        this.ruleIndex = propertiesParser.RULE_value;
    }

	TEXT() {
	    return this.getToken(propertiesParser.TEXT, 0);
	};

	STRING() {
	    return this.getToken(propertiesParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof propertiesListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof propertiesListener ) {
	        listener.exitValue(this);
		}
	}


}



class CommentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = propertiesParser.RULE_comment;
    }

	COMMENT() {
	    return this.getToken(propertiesParser.COMMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof propertiesListener ) {
	        listener.enterComment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof propertiesListener ) {
	        listener.exitComment(this);
		}
	}


}




propertiesParser.PropertiesFileContext = PropertiesFileContext; 
propertiesParser.RowContext = RowContext; 
propertiesParser.DeclContext = DeclContext; 
propertiesParser.KeyContext = KeyContext; 
propertiesParser.ValueContext = ValueContext; 
propertiesParser.CommentContext = CommentContext; 
