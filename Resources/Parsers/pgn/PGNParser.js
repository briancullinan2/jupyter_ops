// Generated from ./pgn/PGN.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import PGNListener from './PGNListener.js';
const serializedATN = [4,1,21,83,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
13,7,13,1,0,1,0,1,0,1,1,5,1,33,8,1,10,1,12,1,36,9,1,1,2,1,2,1,2,1,3,5,3,
42,8,3,10,3,12,3,45,9,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,7,
1,8,1,8,5,8,61,8,8,10,8,12,8,64,9,8,1,9,1,9,1,9,3,9,69,8,9,1,10,1,10,3,10,
73,8,10,1,11,1,11,1,12,1,12,1,12,1,12,1,13,1,13,1,13,0,0,14,0,2,4,6,8,10,
12,14,16,18,20,22,24,26,0,1,2,0,1,3,11,11,75,0,28,1,0,0,0,2,34,1,0,0,0,4,
37,1,0,0,0,6,43,1,0,0,0,8,46,1,0,0,0,10,51,1,0,0,0,12,53,1,0,0,0,14,55,1,
0,0,0,16,62,1,0,0,0,18,68,1,0,0,0,20,70,1,0,0,0,22,74,1,0,0,0,24,76,1,0,
0,0,26,80,1,0,0,0,28,29,3,2,1,0,29,30,5,0,0,1,30,1,1,0,0,0,31,33,3,4,2,0,
32,31,1,0,0,0,33,36,1,0,0,0,34,32,1,0,0,0,34,35,1,0,0,0,35,3,1,0,0,0,36,
34,1,0,0,0,37,38,3,6,3,0,38,39,3,14,7,0,39,5,1,0,0,0,40,42,3,8,4,0,41,40,
1,0,0,0,42,45,1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,0,44,7,1,0,0,0,45,43,1,0,
0,0,46,47,5,12,0,0,47,48,3,10,5,0,48,49,3,12,6,0,49,50,5,13,0,0,50,9,1,0,
0,0,51,52,5,19,0,0,52,11,1,0,0,0,53,54,5,8,0,0,54,13,1,0,0,0,55,56,3,16,
8,0,56,57,3,26,13,0,57,15,1,0,0,0,58,61,3,18,9,0,59,61,3,24,12,0,60,58,1,
0,0,0,60,59,1,0,0,0,61,64,1,0,0,0,62,60,1,0,0,0,62,63,1,0,0,0,63,17,1,0,
0,0,64,62,1,0,0,0,65,69,3,20,10,0,66,69,3,22,11,0,67,69,5,18,0,0,68,65,1,
0,0,0,68,66,1,0,0,0,68,67,1,0,0,0,69,19,1,0,0,0,70,72,5,9,0,0,71,73,5,10,
0,0,72,71,1,0,0,0,72,73,1,0,0,0,73,21,1,0,0,0,74,75,5,19,0,0,75,23,1,0,0,
0,76,77,5,14,0,0,77,78,3,16,8,0,78,79,5,15,0,0,79,25,1,0,0,0,80,81,7,0,0,
0,81,27,1,0,0,0,6,34,43,60,62,68,72];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class PGNParser extends antlr4.Parser {

    static grammarFileName = "PGN.g4";
    static literalNames = [ null, "'1-0'", "'0-1'", "'1/2-1/2'", null, null, 
                            null, null, null, null, "'.'", "'*'", "'['", 
                            "']'", "'('", "')'", "'<'", "'>'" ];
    static symbolicNames = [ null, "WHITE_WINS", "BLACK_WINS", "DRAWN_GAME", 
                             "REST_OF_LINE_COMMENT", "BRACE_COMMENT", "ESCAPE", 
                             "SPACES", "STRING", "INTEGER", "PERIOD", "ASTERISK", 
                             "LEFT_BRACKET", "RIGHT_BRACKET", "LEFT_PARENTHESIS", 
                             "RIGHT_PARENTHESIS", "LEFT_ANGLE_BRACKET", 
                             "RIGHT_ANGLE_BRACKET", "NUMERIC_ANNOTATION_GLYPH", 
                             "SYMBOL", "SUFFIX_ANNOTATION", "UNEXPECTED_CHAR" ];
    static ruleNames = [ "parse", "pgn_database", "pgn_game", "tag_section", 
                         "tag_pair", "tag_name", "tag_value", "movetext_section", 
                         "element_sequence", "element", "move_number_indication", 
                         "san_move", "recursive_variation", "game_termination" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = PGNParser.ruleNames;
        this.literalNames = PGNParser.literalNames;
        this.symbolicNames = PGNParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	parse() {
	    let localctx = new ParseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, PGNParser.RULE_parse);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.pgn_database();
	        this.state = 29;
	        this.match(PGNParser.EOF);
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



	pgn_database() {
	    let localctx = new Pgn_databaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, PGNParser.RULE_pgn_database);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PGNParser.WHITE_WINS) | (1 << PGNParser.BLACK_WINS) | (1 << PGNParser.DRAWN_GAME) | (1 << PGNParser.INTEGER) | (1 << PGNParser.ASTERISK) | (1 << PGNParser.LEFT_BRACKET) | (1 << PGNParser.LEFT_PARENTHESIS) | (1 << PGNParser.NUMERIC_ANNOTATION_GLYPH) | (1 << PGNParser.SYMBOL))) !== 0)) {
	            this.state = 31;
	            this.pgn_game();
	            this.state = 36;
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



	pgn_game() {
	    let localctx = new Pgn_gameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, PGNParser.RULE_pgn_game);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.tag_section();
	        this.state = 38;
	        this.movetext_section();
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



	tag_section() {
	    let localctx = new Tag_sectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, PGNParser.RULE_tag_section);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===PGNParser.LEFT_BRACKET) {
	            this.state = 40;
	            this.tag_pair();
	            this.state = 45;
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



	tag_pair() {
	    let localctx = new Tag_pairContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, PGNParser.RULE_tag_pair);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.match(PGNParser.LEFT_BRACKET);
	        this.state = 47;
	        this.tag_name();
	        this.state = 48;
	        this.tag_value();
	        this.state = 49;
	        this.match(PGNParser.RIGHT_BRACKET);
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



	tag_name() {
	    let localctx = new Tag_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, PGNParser.RULE_tag_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(PGNParser.SYMBOL);
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



	tag_value() {
	    let localctx = new Tag_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, PGNParser.RULE_tag_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(PGNParser.STRING);
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



	movetext_section() {
	    let localctx = new Movetext_sectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, PGNParser.RULE_movetext_section);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.element_sequence();
	        this.state = 56;
	        this.game_termination();
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



	element_sequence() {
	    let localctx = new Element_sequenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, PGNParser.RULE_element_sequence);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PGNParser.INTEGER) | (1 << PGNParser.LEFT_PARENTHESIS) | (1 << PGNParser.NUMERIC_ANNOTATION_GLYPH) | (1 << PGNParser.SYMBOL))) !== 0)) {
	            this.state = 60;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case PGNParser.INTEGER:
	            case PGNParser.NUMERIC_ANNOTATION_GLYPH:
	            case PGNParser.SYMBOL:
	                this.state = 58;
	                this.element();
	                break;
	            case PGNParser.LEFT_PARENTHESIS:
	                this.state = 59;
	                this.recursive_variation();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 64;
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



	element() {
	    let localctx = new ElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, PGNParser.RULE_element);
	    try {
	        this.state = 68;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PGNParser.INTEGER:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 65;
	            this.move_number_indication();
	            break;
	        case PGNParser.SYMBOL:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 66;
	            this.san_move();
	            break;
	        case PGNParser.NUMERIC_ANNOTATION_GLYPH:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 67;
	            this.match(PGNParser.NUMERIC_ANNOTATION_GLYPH);
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



	move_number_indication() {
	    let localctx = new Move_number_indicationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, PGNParser.RULE_move_number_indication);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this.match(PGNParser.INTEGER);
	        this.state = 72;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PGNParser.PERIOD) {
	            this.state = 71;
	            this.match(PGNParser.PERIOD);
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



	san_move() {
	    let localctx = new San_moveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, PGNParser.RULE_san_move);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.match(PGNParser.SYMBOL);
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



	recursive_variation() {
	    let localctx = new Recursive_variationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, PGNParser.RULE_recursive_variation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.match(PGNParser.LEFT_PARENTHESIS);
	        this.state = 77;
	        this.element_sequence();
	        this.state = 78;
	        this.match(PGNParser.RIGHT_PARENTHESIS);
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



	game_termination() {
	    let localctx = new Game_terminationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, PGNParser.RULE_game_termination);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PGNParser.WHITE_WINS) | (1 << PGNParser.BLACK_WINS) | (1 << PGNParser.DRAWN_GAME) | (1 << PGNParser.ASTERISK))) !== 0))) {
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

PGNParser.EOF = antlr4.Token.EOF;
PGNParser.WHITE_WINS = 1;
PGNParser.BLACK_WINS = 2;
PGNParser.DRAWN_GAME = 3;
PGNParser.REST_OF_LINE_COMMENT = 4;
PGNParser.BRACE_COMMENT = 5;
PGNParser.ESCAPE = 6;
PGNParser.SPACES = 7;
PGNParser.STRING = 8;
PGNParser.INTEGER = 9;
PGNParser.PERIOD = 10;
PGNParser.ASTERISK = 11;
PGNParser.LEFT_BRACKET = 12;
PGNParser.RIGHT_BRACKET = 13;
PGNParser.LEFT_PARENTHESIS = 14;
PGNParser.RIGHT_PARENTHESIS = 15;
PGNParser.LEFT_ANGLE_BRACKET = 16;
PGNParser.RIGHT_ANGLE_BRACKET = 17;
PGNParser.NUMERIC_ANNOTATION_GLYPH = 18;
PGNParser.SYMBOL = 19;
PGNParser.SUFFIX_ANNOTATION = 20;
PGNParser.UNEXPECTED_CHAR = 21;

PGNParser.RULE_parse = 0;
PGNParser.RULE_pgn_database = 1;
PGNParser.RULE_pgn_game = 2;
PGNParser.RULE_tag_section = 3;
PGNParser.RULE_tag_pair = 4;
PGNParser.RULE_tag_name = 5;
PGNParser.RULE_tag_value = 6;
PGNParser.RULE_movetext_section = 7;
PGNParser.RULE_element_sequence = 8;
PGNParser.RULE_element = 9;
PGNParser.RULE_move_number_indication = 10;
PGNParser.RULE_san_move = 11;
PGNParser.RULE_recursive_variation = 12;
PGNParser.RULE_game_termination = 13;

class ParseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PGNParser.RULE_parse;
    }

	pgn_database() {
	    return this.getTypedRuleContext(Pgn_databaseContext,0);
	};

	EOF() {
	    return this.getToken(PGNParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PGNListener ) {
	        listener.enterParse(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PGNListener ) {
	        listener.exitParse(this);
		}
	}


}



class Pgn_databaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PGNParser.RULE_pgn_database;
    }

	pgn_game = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Pgn_gameContext);
	    } else {
	        return this.getTypedRuleContext(Pgn_gameContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PGNListener ) {
	        listener.enterPgn_database(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PGNListener ) {
	        listener.exitPgn_database(this);
		}
	}


}



class Pgn_gameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PGNParser.RULE_pgn_game;
    }

	tag_section() {
	    return this.getTypedRuleContext(Tag_sectionContext,0);
	};

	movetext_section() {
	    return this.getTypedRuleContext(Movetext_sectionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PGNListener ) {
	        listener.enterPgn_game(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PGNListener ) {
	        listener.exitPgn_game(this);
		}
	}


}



class Tag_sectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PGNParser.RULE_tag_section;
    }

	tag_pair = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Tag_pairContext);
	    } else {
	        return this.getTypedRuleContext(Tag_pairContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PGNListener ) {
	        listener.enterTag_section(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PGNListener ) {
	        listener.exitTag_section(this);
		}
	}


}



class Tag_pairContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PGNParser.RULE_tag_pair;
    }

	LEFT_BRACKET() {
	    return this.getToken(PGNParser.LEFT_BRACKET, 0);
	};

	tag_name() {
	    return this.getTypedRuleContext(Tag_nameContext,0);
	};

	tag_value() {
	    return this.getTypedRuleContext(Tag_valueContext,0);
	};

	RIGHT_BRACKET() {
	    return this.getToken(PGNParser.RIGHT_BRACKET, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PGNListener ) {
	        listener.enterTag_pair(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PGNListener ) {
	        listener.exitTag_pair(this);
		}
	}


}



class Tag_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PGNParser.RULE_tag_name;
    }

	SYMBOL() {
	    return this.getToken(PGNParser.SYMBOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PGNListener ) {
	        listener.enterTag_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PGNListener ) {
	        listener.exitTag_name(this);
		}
	}


}



class Tag_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PGNParser.RULE_tag_value;
    }

	STRING() {
	    return this.getToken(PGNParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PGNListener ) {
	        listener.enterTag_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PGNListener ) {
	        listener.exitTag_value(this);
		}
	}


}



class Movetext_sectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PGNParser.RULE_movetext_section;
    }

	element_sequence() {
	    return this.getTypedRuleContext(Element_sequenceContext,0);
	};

	game_termination() {
	    return this.getTypedRuleContext(Game_terminationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PGNListener ) {
	        listener.enterMovetext_section(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PGNListener ) {
	        listener.exitMovetext_section(this);
		}
	}


}



class Element_sequenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PGNParser.RULE_element_sequence;
    }

	element = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElementContext);
	    } else {
	        return this.getTypedRuleContext(ElementContext,i);
	    }
	};

	recursive_variation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Recursive_variationContext);
	    } else {
	        return this.getTypedRuleContext(Recursive_variationContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PGNListener ) {
	        listener.enterElement_sequence(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PGNListener ) {
	        listener.exitElement_sequence(this);
		}
	}


}



class ElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PGNParser.RULE_element;
    }

	move_number_indication() {
	    return this.getTypedRuleContext(Move_number_indicationContext,0);
	};

	san_move() {
	    return this.getTypedRuleContext(San_moveContext,0);
	};

	NUMERIC_ANNOTATION_GLYPH() {
	    return this.getToken(PGNParser.NUMERIC_ANNOTATION_GLYPH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PGNListener ) {
	        listener.enterElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PGNListener ) {
	        listener.exitElement(this);
		}
	}


}



class Move_number_indicationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PGNParser.RULE_move_number_indication;
    }

	INTEGER() {
	    return this.getToken(PGNParser.INTEGER, 0);
	};

	PERIOD() {
	    return this.getToken(PGNParser.PERIOD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PGNListener ) {
	        listener.enterMove_number_indication(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PGNListener ) {
	        listener.exitMove_number_indication(this);
		}
	}


}



class San_moveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PGNParser.RULE_san_move;
    }

	SYMBOL() {
	    return this.getToken(PGNParser.SYMBOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PGNListener ) {
	        listener.enterSan_move(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PGNListener ) {
	        listener.exitSan_move(this);
		}
	}


}



class Recursive_variationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PGNParser.RULE_recursive_variation;
    }

	LEFT_PARENTHESIS() {
	    return this.getToken(PGNParser.LEFT_PARENTHESIS, 0);
	};

	element_sequence() {
	    return this.getTypedRuleContext(Element_sequenceContext,0);
	};

	RIGHT_PARENTHESIS() {
	    return this.getToken(PGNParser.RIGHT_PARENTHESIS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PGNListener ) {
	        listener.enterRecursive_variation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PGNListener ) {
	        listener.exitRecursive_variation(this);
		}
	}


}



class Game_terminationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PGNParser.RULE_game_termination;
    }

	WHITE_WINS() {
	    return this.getToken(PGNParser.WHITE_WINS, 0);
	};

	BLACK_WINS() {
	    return this.getToken(PGNParser.BLACK_WINS, 0);
	};

	DRAWN_GAME() {
	    return this.getToken(PGNParser.DRAWN_GAME, 0);
	};

	ASTERISK() {
	    return this.getToken(PGNParser.ASTERISK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PGNListener ) {
	        listener.enterGame_termination(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PGNListener ) {
	        listener.exitGame_termination(this);
		}
	}


}




PGNParser.ParseContext = ParseContext; 
PGNParser.Pgn_databaseContext = Pgn_databaseContext; 
PGNParser.Pgn_gameContext = Pgn_gameContext; 
PGNParser.Tag_sectionContext = Tag_sectionContext; 
PGNParser.Tag_pairContext = Tag_pairContext; 
PGNParser.Tag_nameContext = Tag_nameContext; 
PGNParser.Tag_valueContext = Tag_valueContext; 
PGNParser.Movetext_sectionContext = Movetext_sectionContext; 
PGNParser.Element_sequenceContext = Element_sequenceContext; 
PGNParser.ElementContext = ElementContext; 
PGNParser.Move_number_indicationContext = Move_number_indicationContext; 
PGNParser.San_moveContext = San_moveContext; 
PGNParser.Recursive_variationContext = Recursive_variationContext; 
PGNParser.Game_terminationContext = Game_terminationContext; 
