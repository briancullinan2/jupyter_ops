// Generated from ./properties/PropertiesParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import PropertiesParserListener from './PropertiesParserListener.js';
const serializedATN = [4,1,5,48,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,5,0,14,8,0,10,0,12,0,17,9,0,1,1,1,1,3,1,21,8,1,1,2,1,2,1,2,3,
2,26,8,2,3,2,28,8,2,1,2,1,2,1,3,4,3,33,8,3,11,3,12,3,34,1,4,4,4,38,8,4,11,
4,12,4,39,1,4,3,4,43,8,4,1,5,1,5,1,5,1,5,0,0,6,0,2,4,6,8,10,0,0,48,0,15,
1,0,0,0,2,20,1,0,0,0,4,22,1,0,0,0,6,32,1,0,0,0,8,42,1,0,0,0,10,44,1,0,0,
0,12,14,3,2,1,0,13,12,1,0,0,0,14,17,1,0,0,0,15,13,1,0,0,0,15,16,1,0,0,0,
16,1,1,0,0,0,17,15,1,0,0,0,18,21,3,10,5,0,19,21,3,4,2,0,20,18,1,0,0,0,20,
19,1,0,0,0,21,3,1,0,0,0,22,27,3,6,3,0,23,25,5,3,0,0,24,26,3,6,3,0,25,24,
1,0,0,0,25,26,1,0,0,0,26,28,1,0,0,0,27,23,1,0,0,0,27,28,1,0,0,0,28,29,1,
0,0,0,29,30,3,8,4,0,30,5,1,0,0,0,31,33,5,4,0,0,32,31,1,0,0,0,33,34,1,0,0,
0,34,32,1,0,0,0,34,35,1,0,0,0,35,7,1,0,0,0,36,38,5,2,0,0,37,36,1,0,0,0,38,
39,1,0,0,0,39,37,1,0,0,0,39,40,1,0,0,0,40,43,1,0,0,0,41,43,5,0,0,1,42,37,
1,0,0,0,42,41,1,0,0,0,43,9,1,0,0,0,44,45,5,1,0,0,45,46,3,8,4,0,46,11,1,0,
0,0,7,15,20,25,27,34,39,42];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class PropertiesParser extends antlr4.Parser {

    static grammarFileName = "PropertiesParser.g4";
    static literalNames = [  ];
    static symbolicNames = [ null, "COMMENT", "NEWLINE", "DELIMITER", "CHARACTER", 
                             "SLASH" ];
    static ruleNames = [ "propertiesFile", "row", "line", "key", "eol", 
                         "comment" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = PropertiesParser.ruleNames;
        this.literalNames = PropertiesParser.literalNames;
        this.symbolicNames = PropertiesParser.symbolicNames;
    }



	propertiesFile() {
	    let localctx = new PropertiesFileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, PropertiesParser.RULE_propertiesFile);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===4) {
	            this.state = 12;
	            this.row();
	            this.state = 17;
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



	row() {
	    let localctx = new RowContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, PropertiesParser.RULE_row);
	    try {
	        this.state = 20;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 18;
	            this.comment();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 19;
	            this.line();
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



	line() {
	    let localctx = new LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, PropertiesParser.RULE_line);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.key();
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 23;
	            this.match(PropertiesParser.DELIMITER);
	            this.state = 25;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4) {
	                this.state = 24;
	                localctx.value = this.key();
	            }

	        }

	        this.state = 29;
	        this.eol();
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
	    this.enterRule(localctx, 6, PropertiesParser.RULE_key);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 31;
	            this.match(PropertiesParser.CHARACTER);
	            this.state = 34; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===4);
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



	eol() {
	    let localctx = new EolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, PropertiesParser.RULE_eol);
	    var _la = 0;
	    try {
	        this.state = 42;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 37; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 36;
	                this.match(PropertiesParser.NEWLINE);
	                this.state = 39; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===2);
	            break;
	        case -1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 41;
	            this.match(PropertiesParser.EOF);
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



	comment() {
	    let localctx = new CommentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, PropertiesParser.RULE_comment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(PropertiesParser.COMMENT);
	        this.state = 45;
	        this.eol();
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

PropertiesParser.EOF = antlr4.Token.EOF;
PropertiesParser.COMMENT = 1;
PropertiesParser.NEWLINE = 2;
PropertiesParser.DELIMITER = 3;
PropertiesParser.CHARACTER = 4;
PropertiesParser.SLASH = 5;

PropertiesParser.RULE_propertiesFile = 0;
PropertiesParser.RULE_row = 1;
PropertiesParser.RULE_line = 2;
PropertiesParser.RULE_key = 3;
PropertiesParser.RULE_eol = 4;
PropertiesParser.RULE_comment = 5;

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
        this.ruleIndex = PropertiesParser.RULE_propertiesFile;
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
	    if(listener instanceof PropertiesParserListener ) {
	        listener.enterPropertiesFile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PropertiesParserListener ) {
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
        this.ruleIndex = PropertiesParser.RULE_row;
    }

	comment() {
	    return this.getTypedRuleContext(CommentContext,0);
	};

	line() {
	    return this.getTypedRuleContext(LineContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PropertiesParserListener ) {
	        listener.enterRow(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PropertiesParserListener ) {
	        listener.exitRow(this);
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
        this.ruleIndex = PropertiesParser.RULE_line;
        this.value = null;
    }

	key = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(KeyContext);
	    } else {
	        return this.getTypedRuleContext(KeyContext,i);
	    }
	};

	eol() {
	    return this.getTypedRuleContext(EolContext,0);
	};

	DELIMITER() {
	    return this.getToken(PropertiesParser.DELIMITER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PropertiesParserListener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PropertiesParserListener ) {
	        listener.exitLine(this);
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
        this.ruleIndex = PropertiesParser.RULE_key;
    }

	CHARACTER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PropertiesParser.CHARACTER);
	    } else {
	        return this.getToken(PropertiesParser.CHARACTER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof PropertiesParserListener ) {
	        listener.enterKey(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PropertiesParserListener ) {
	        listener.exitKey(this);
		}
	}


}



class EolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PropertiesParser.RULE_eol;
    }

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PropertiesParser.NEWLINE);
	    } else {
	        return this.getToken(PropertiesParser.NEWLINE, i);
	    }
	};


	EOF() {
	    return this.getToken(PropertiesParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PropertiesParserListener ) {
	        listener.enterEol(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PropertiesParserListener ) {
	        listener.exitEol(this);
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
        this.ruleIndex = PropertiesParser.RULE_comment;
    }

	COMMENT() {
	    return this.getToken(PropertiesParser.COMMENT, 0);
	};

	eol() {
	    return this.getTypedRuleContext(EolContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PropertiesParserListener ) {
	        listener.enterComment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PropertiesParserListener ) {
	        listener.exitComment(this);
		}
	}


}




PropertiesParser.PropertiesFileContext = PropertiesFileContext; 
PropertiesParser.RowContext = RowContext; 
PropertiesParser.LineContext = LineContext; 
PropertiesParser.KeyContext = KeyContext; 
PropertiesParser.EolContext = EolContext; 
PropertiesParser.CommentContext = CommentContext; 
