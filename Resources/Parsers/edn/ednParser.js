// Generated from ./edn/edn.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ednListener from './ednListener.js';
const serializedATN = [4,1,21,84,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,5,0,18,8,0,10,0,12,0,21,9,0,1,0,1,0,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,38,8,1,1,2,1,2,1,2,1,3,1,
3,1,3,1,4,1,4,5,4,48,8,4,10,4,12,4,51,9,4,1,4,1,4,1,5,1,5,5,5,57,8,5,10,
5,12,5,60,9,5,1,5,1,5,1,6,1,6,1,6,1,6,5,6,68,8,6,10,6,12,6,71,9,6,1,6,1,
6,1,7,1,7,5,7,77,8,7,10,7,12,7,80,9,7,1,7,1,7,1,7,0,0,8,0,2,4,6,8,10,12,
14,0,1,3,0,1,2,4,5,18,18,92,0,19,1,0,0,0,2,37,1,0,0,0,4,39,1,0,0,0,6,42,
1,0,0,0,8,45,1,0,0,0,10,54,1,0,0,0,12,63,1,0,0,0,14,74,1,0,0,0,16,18,3,2,
1,0,17,16,1,0,0,0,18,21,1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,22,1,0,0,
0,21,19,1,0,0,0,22,23,5,0,0,1,23,1,1,0,0,0,24,38,5,1,0,0,25,38,5,2,0,0,26,
38,5,3,0,0,27,38,5,4,0,0,28,38,5,5,0,0,29,38,5,6,0,0,30,38,3,6,3,0,31,38,
5,18,0,0,32,38,3,4,2,0,33,38,3,8,4,0,34,38,3,10,5,0,35,38,3,12,6,0,36,38,
3,14,7,0,37,24,1,0,0,0,37,25,1,0,0,0,37,26,1,0,0,0,37,27,1,0,0,0,37,28,1,
0,0,0,37,29,1,0,0,0,37,30,1,0,0,0,37,31,1,0,0,0,37,32,1,0,0,0,37,33,1,0,
0,0,37,34,1,0,0,0,37,35,1,0,0,0,37,36,1,0,0,0,38,3,1,0,0,0,39,40,5,14,0,
0,40,41,5,18,0,0,41,5,1,0,0,0,42,43,5,15,0,0,43,44,7,0,0,0,44,7,1,0,0,0,
45,49,5,7,0,0,46,48,3,2,1,0,47,46,1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,49,
50,1,0,0,0,50,52,1,0,0,0,51,49,1,0,0,0,52,53,5,8,0,0,53,9,1,0,0,0,54,58,
5,9,0,0,55,57,3,2,1,0,56,55,1,0,0,0,57,60,1,0,0,0,58,56,1,0,0,0,58,59,1,
0,0,0,59,61,1,0,0,0,60,58,1,0,0,0,61,62,5,10,0,0,62,11,1,0,0,0,63,69,5,11,
0,0,64,65,3,2,1,0,65,66,3,2,1,0,66,68,1,0,0,0,67,64,1,0,0,0,68,71,1,0,0,
0,69,67,1,0,0,0,69,70,1,0,0,0,70,72,1,0,0,0,71,69,1,0,0,0,72,73,5,12,0,0,
73,13,1,0,0,0,74,78,5,13,0,0,75,77,3,2,1,0,76,75,1,0,0,0,77,80,1,0,0,0,78,
76,1,0,0,0,78,79,1,0,0,0,79,81,1,0,0,0,80,78,1,0,0,0,81,82,5,12,0,0,82,15,
1,0,0,0,6,19,37,49,58,69,78];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ednParser extends antlr4.Parser {

    static grammarFileName = "edn.g4";
    static literalNames = [ null, "'nil'", null, null, null, null, null, 
                            "'('", "')'", "'['", "']'", "'{'", "'}'", "'#{'", 
                            "'#'", "':'" ];
    static symbolicNames = [ null, "NilLiteral", "BooleanLiteral", "StringLiteral", 
                             "IntegerLiteral", "FloatingPointLiteral", "CharacterLiteral", 
                             "LeftParenthesis", "RightParenthesis", "LeftBracket", 
                             "RightBracket", "LeftBrace", "RightBrace", 
                             "HashedLeftBrace", "Hash", "Colon", "FractionalPart", 
                             "Int", "Symbol", "Name", "Comment", "Whitespace" ];
    static ruleNames = [ "program", "value", "tag", "keyword", "list_", 
                         "vector", "map_", "set_" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ednParser.ruleNames;
        this.literalNames = ednParser.literalNames;
        this.symbolicNames = ednParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ednParser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ednParser.NilLiteral) | (1 << ednParser.BooleanLiteral) | (1 << ednParser.StringLiteral) | (1 << ednParser.IntegerLiteral) | (1 << ednParser.FloatingPointLiteral) | (1 << ednParser.CharacterLiteral) | (1 << ednParser.LeftParenthesis) | (1 << ednParser.LeftBracket) | (1 << ednParser.LeftBrace) | (1 << ednParser.HashedLeftBrace) | (1 << ednParser.Hash) | (1 << ednParser.Colon) | (1 << ednParser.Symbol))) !== 0)) {
	            this.state = 16;
	            this.value();
	            this.state = 21;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 22;
	        this.match(ednParser.EOF);
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
	    this.enterRule(localctx, 2, ednParser.RULE_value);
	    try {
	        this.state = 37;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ednParser.NilLiteral:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 24;
	            this.match(ednParser.NilLiteral);
	            break;
	        case ednParser.BooleanLiteral:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 25;
	            this.match(ednParser.BooleanLiteral);
	            break;
	        case ednParser.StringLiteral:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 26;
	            this.match(ednParser.StringLiteral);
	            break;
	        case ednParser.IntegerLiteral:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 27;
	            this.match(ednParser.IntegerLiteral);
	            break;
	        case ednParser.FloatingPointLiteral:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 28;
	            this.match(ednParser.FloatingPointLiteral);
	            break;
	        case ednParser.CharacterLiteral:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 29;
	            this.match(ednParser.CharacterLiteral);
	            break;
	        case ednParser.Colon:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 30;
	            this.keyword();
	            break;
	        case ednParser.Symbol:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 31;
	            this.match(ednParser.Symbol);
	            break;
	        case ednParser.Hash:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 32;
	            this.tag();
	            break;
	        case ednParser.LeftParenthesis:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 33;
	            this.list_();
	            break;
	        case ednParser.LeftBracket:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 34;
	            this.vector();
	            break;
	        case ednParser.LeftBrace:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 35;
	            this.map_();
	            break;
	        case ednParser.HashedLeftBrace:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 36;
	            this.set_();
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



	tag() {
	    let localctx = new TagContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ednParser.RULE_tag);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.match(ednParser.Hash);
	        this.state = 40;
	        this.match(ednParser.Symbol);
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



	keyword() {
	    let localctx = new KeywordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ednParser.RULE_keyword);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(ednParser.Colon);
	        this.state = 43;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ednParser.NilLiteral) | (1 << ednParser.BooleanLiteral) | (1 << ednParser.IntegerLiteral) | (1 << ednParser.FloatingPointLiteral) | (1 << ednParser.Symbol))) !== 0))) {
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



	list_() {
	    let localctx = new List_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ednParser.RULE_list_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(ednParser.LeftParenthesis);
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ednParser.NilLiteral) | (1 << ednParser.BooleanLiteral) | (1 << ednParser.StringLiteral) | (1 << ednParser.IntegerLiteral) | (1 << ednParser.FloatingPointLiteral) | (1 << ednParser.CharacterLiteral) | (1 << ednParser.LeftParenthesis) | (1 << ednParser.LeftBracket) | (1 << ednParser.LeftBrace) | (1 << ednParser.HashedLeftBrace) | (1 << ednParser.Hash) | (1 << ednParser.Colon) | (1 << ednParser.Symbol))) !== 0)) {
	            this.state = 46;
	            this.value();
	            this.state = 51;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 52;
	        this.match(ednParser.RightParenthesis);
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



	vector() {
	    let localctx = new VectorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ednParser.RULE_vector);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(ednParser.LeftBracket);
	        this.state = 58;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ednParser.NilLiteral) | (1 << ednParser.BooleanLiteral) | (1 << ednParser.StringLiteral) | (1 << ednParser.IntegerLiteral) | (1 << ednParser.FloatingPointLiteral) | (1 << ednParser.CharacterLiteral) | (1 << ednParser.LeftParenthesis) | (1 << ednParser.LeftBracket) | (1 << ednParser.LeftBrace) | (1 << ednParser.HashedLeftBrace) | (1 << ednParser.Hash) | (1 << ednParser.Colon) | (1 << ednParser.Symbol))) !== 0)) {
	            this.state = 55;
	            this.value();
	            this.state = 60;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 61;
	        this.match(ednParser.RightBracket);
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
	    this.enterRule(localctx, 12, ednParser.RULE_map_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.match(ednParser.LeftBrace);
	        this.state = 69;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ednParser.NilLiteral) | (1 << ednParser.BooleanLiteral) | (1 << ednParser.StringLiteral) | (1 << ednParser.IntegerLiteral) | (1 << ednParser.FloatingPointLiteral) | (1 << ednParser.CharacterLiteral) | (1 << ednParser.LeftParenthesis) | (1 << ednParser.LeftBracket) | (1 << ednParser.LeftBrace) | (1 << ednParser.HashedLeftBrace) | (1 << ednParser.Hash) | (1 << ednParser.Colon) | (1 << ednParser.Symbol))) !== 0)) {
	            this.state = 64;
	            this.value();
	            this.state = 65;
	            this.value();
	            this.state = 71;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 72;
	        this.match(ednParser.RightBrace);
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



	set_() {
	    let localctx = new Set_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ednParser.RULE_set_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.match(ednParser.HashedLeftBrace);
	        this.state = 78;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ednParser.NilLiteral) | (1 << ednParser.BooleanLiteral) | (1 << ednParser.StringLiteral) | (1 << ednParser.IntegerLiteral) | (1 << ednParser.FloatingPointLiteral) | (1 << ednParser.CharacterLiteral) | (1 << ednParser.LeftParenthesis) | (1 << ednParser.LeftBracket) | (1 << ednParser.LeftBrace) | (1 << ednParser.HashedLeftBrace) | (1 << ednParser.Hash) | (1 << ednParser.Colon) | (1 << ednParser.Symbol))) !== 0)) {
	            this.state = 75;
	            this.value();
	            this.state = 80;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 81;
	        this.match(ednParser.RightBrace);
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

ednParser.EOF = antlr4.Token.EOF;
ednParser.NilLiteral = 1;
ednParser.BooleanLiteral = 2;
ednParser.StringLiteral = 3;
ednParser.IntegerLiteral = 4;
ednParser.FloatingPointLiteral = 5;
ednParser.CharacterLiteral = 6;
ednParser.LeftParenthesis = 7;
ednParser.RightParenthesis = 8;
ednParser.LeftBracket = 9;
ednParser.RightBracket = 10;
ednParser.LeftBrace = 11;
ednParser.RightBrace = 12;
ednParser.HashedLeftBrace = 13;
ednParser.Hash = 14;
ednParser.Colon = 15;
ednParser.FractionalPart = 16;
ednParser.Int = 17;
ednParser.Symbol = 18;
ednParser.Name = 19;
ednParser.Comment = 20;
ednParser.Whitespace = 21;

ednParser.RULE_program = 0;
ednParser.RULE_value = 1;
ednParser.RULE_tag = 2;
ednParser.RULE_keyword = 3;
ednParser.RULE_list_ = 4;
ednParser.RULE_vector = 5;
ednParser.RULE_map_ = 6;
ednParser.RULE_set_ = 7;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ednParser.RULE_program;
    }

	EOF() {
	    return this.getToken(ednParser.EOF, 0);
	};

	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ednListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ednListener ) {
	        listener.exitProgram(this);
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
        this.ruleIndex = ednParser.RULE_value;
    }

	NilLiteral() {
	    return this.getToken(ednParser.NilLiteral, 0);
	};

	BooleanLiteral() {
	    return this.getToken(ednParser.BooleanLiteral, 0);
	};

	StringLiteral() {
	    return this.getToken(ednParser.StringLiteral, 0);
	};

	IntegerLiteral() {
	    return this.getToken(ednParser.IntegerLiteral, 0);
	};

	FloatingPointLiteral() {
	    return this.getToken(ednParser.FloatingPointLiteral, 0);
	};

	CharacterLiteral() {
	    return this.getToken(ednParser.CharacterLiteral, 0);
	};

	keyword() {
	    return this.getTypedRuleContext(KeywordContext,0);
	};

	Symbol() {
	    return this.getToken(ednParser.Symbol, 0);
	};

	tag() {
	    return this.getTypedRuleContext(TagContext,0);
	};

	list_() {
	    return this.getTypedRuleContext(List_Context,0);
	};

	vector() {
	    return this.getTypedRuleContext(VectorContext,0);
	};

	map_() {
	    return this.getTypedRuleContext(Map_Context,0);
	};

	set_() {
	    return this.getTypedRuleContext(Set_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof ednListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ednListener ) {
	        listener.exitValue(this);
		}
	}


}



class TagContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ednParser.RULE_tag;
    }

	Hash() {
	    return this.getToken(ednParser.Hash, 0);
	};

	Symbol() {
	    return this.getToken(ednParser.Symbol, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ednListener ) {
	        listener.enterTag(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ednListener ) {
	        listener.exitTag(this);
		}
	}


}



class KeywordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ednParser.RULE_keyword;
    }

	Colon() {
	    return this.getToken(ednParser.Colon, 0);
	};

	Symbol() {
	    return this.getToken(ednParser.Symbol, 0);
	};

	IntegerLiteral() {
	    return this.getToken(ednParser.IntegerLiteral, 0);
	};

	FloatingPointLiteral() {
	    return this.getToken(ednParser.FloatingPointLiteral, 0);
	};

	NilLiteral() {
	    return this.getToken(ednParser.NilLiteral, 0);
	};

	BooleanLiteral() {
	    return this.getToken(ednParser.BooleanLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ednListener ) {
	        listener.enterKeyword(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ednListener ) {
	        listener.exitKeyword(this);
		}
	}


}



class List_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ednParser.RULE_list_;
    }

	LeftParenthesis() {
	    return this.getToken(ednParser.LeftParenthesis, 0);
	};

	RightParenthesis() {
	    return this.getToken(ednParser.RightParenthesis, 0);
	};

	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ednListener ) {
	        listener.enterList_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ednListener ) {
	        listener.exitList_(this);
		}
	}


}



class VectorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ednParser.RULE_vector;
    }

	LeftBracket() {
	    return this.getToken(ednParser.LeftBracket, 0);
	};

	RightBracket() {
	    return this.getToken(ednParser.RightBracket, 0);
	};

	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ednListener ) {
	        listener.enterVector(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ednListener ) {
	        listener.exitVector(this);
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
        this.ruleIndex = ednParser.RULE_map_;
    }

	LeftBrace() {
	    return this.getToken(ednParser.LeftBrace, 0);
	};

	RightBrace() {
	    return this.getToken(ednParser.RightBrace, 0);
	};

	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ednListener ) {
	        listener.enterMap_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ednListener ) {
	        listener.exitMap_(this);
		}
	}


}



class Set_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ednParser.RULE_set_;
    }

	HashedLeftBrace() {
	    return this.getToken(ednParser.HashedLeftBrace, 0);
	};

	RightBrace() {
	    return this.getToken(ednParser.RightBrace, 0);
	};

	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ednListener ) {
	        listener.enterSet_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ednListener ) {
	        listener.exitSet_(this);
		}
	}


}




ednParser.ProgramContext = ProgramContext; 
ednParser.ValueContext = ValueContext; 
ednParser.TagContext = TagContext; 
ednParser.KeywordContext = KeywordContext; 
ednParser.List_Context = List_Context; 
ednParser.VectorContext = VectorContext; 
ednParser.Map_Context = Map_Context; 
ednParser.Set_Context = Set_Context; 
