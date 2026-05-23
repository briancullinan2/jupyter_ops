// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/fen/fen.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import fenListener from './fenListener.js';
const serializedATN = [4,1,25,70,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,
1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,2,1,2,4,2,38,8,2,11,2,12,2,39,3,2,42,8,2,1,
3,1,3,3,3,46,8,3,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,7,4,7,58,8,7,11,7,
12,7,59,1,8,1,8,4,8,64,8,8,11,8,12,8,65,1,9,1,9,1,9,0,0,10,0,2,4,6,8,10,
12,14,16,18,0,4,1,0,2,3,1,0,5,8,2,0,3,3,9,15,3,0,3,3,5,8,17,23,65,0,20,1,
0,0,0,2,33,1,0,0,0,4,41,1,0,0,0,6,45,1,0,0,0,8,47,1,0,0,0,10,50,1,0,0,0,
12,52,1,0,0,0,14,54,1,0,0,0,16,63,1,0,0,0,18,67,1,0,0,0,20,21,3,14,7,0,21,
22,5,1,0,0,22,23,3,2,1,0,23,24,5,1,0,0,24,25,3,4,2,0,25,26,5,1,0,0,26,27,
3,6,3,0,27,28,5,1,0,0,28,29,3,10,5,0,29,30,5,1,0,0,30,31,3,12,6,0,31,32,
5,0,0,1,32,1,1,0,0,0,33,34,7,0,0,0,34,3,1,0,0,0,35,42,5,4,0,0,36,38,7,1,
0,0,37,36,1,0,0,0,38,39,1,0,0,0,39,37,1,0,0,0,39,40,1,0,0,0,40,42,1,0,0,
0,41,35,1,0,0,0,41,37,1,0,0,0,42,5,1,0,0,0,43,46,5,4,0,0,44,46,3,8,4,0,45,
43,1,0,0,0,45,44,1,0,0,0,46,7,1,0,0,0,47,48,7,2,0,0,48,49,5,24,0,0,49,9,
1,0,0,0,50,51,5,24,0,0,51,11,1,0,0,0,52,53,5,24,0,0,53,13,1,0,0,0,54,57,
3,16,8,0,55,56,5,16,0,0,56,58,3,16,8,0,57,55,1,0,0,0,58,59,1,0,0,0,59,57,
1,0,0,0,59,60,1,0,0,0,60,15,1,0,0,0,61,64,3,18,9,0,62,64,5,24,0,0,63,61,
1,0,0,0,63,62,1,0,0,0,64,65,1,0,0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,17,1,
0,0,0,67,68,7,3,0,0,68,19,1,0,0,0,6,39,41,45,59,63,65];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class fenParser extends antlr4.Parser {

    static grammarFileName = "fen.g4";
    static literalNames = [ null, "' '", "'w'", "'b'", "'-'", "'Q'", "'K'", 
                            "'k'", "'q'", "'a'", "'c'", "'d'", "'e'", "'f'", 
                            "'g'", "'h'", "'/'", "'p'", "'r'", "'n'", "'P'", 
                            "'R'", "'N'", "'B'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "NUMBER", "WS" ];
    static ruleNames = [ "fen", "color", "castling", "enpassant", "position", 
                         "halfmoveclock", "fullmoveclock", "placement", 
                         "rank", "piece" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = fenParser.ruleNames;
        this.literalNames = fenParser.literalNames;
        this.symbolicNames = fenParser.symbolicNames;
    }



	fen() {
	    let localctx = new FenContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, fenParser.RULE_fen);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.placement();
	        this.state = 21;
	        this.match(fenParser.T__0);
	        this.state = 22;
	        this.color();
	        this.state = 23;
	        this.match(fenParser.T__0);
	        this.state = 24;
	        this.castling();
	        this.state = 25;
	        this.match(fenParser.T__0);
	        this.state = 26;
	        this.enpassant();
	        this.state = 27;
	        this.match(fenParser.T__0);
	        this.state = 28;
	        this.halfmoveclock();
	        this.state = 29;
	        this.match(fenParser.T__0);
	        this.state = 30;
	        this.fullmoveclock();
	        this.state = 31;
	        this.match(fenParser.EOF);
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



	color() {
	    let localctx = new ColorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, fenParser.RULE_color);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        _la = this._input.LA(1);
	        if(!(_la===2 || _la===3)) {
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



	castling() {
	    let localctx = new CastlingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, fenParser.RULE_castling);
	    var _la = 0;
	    try {
	        this.state = 41;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 35;
	            this.match(fenParser.T__3);
	            break;
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 37; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 36;
	                _la = this._input.LA(1);
	                if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 480) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 39; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 480) !== 0));
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



	enpassant() {
	    let localctx = new EnpassantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, fenParser.RULE_enpassant);
	    try {
	        this.state = 45;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 43;
	            this.match(fenParser.T__3);
	            break;
	        case 3:
	        case 9:
	        case 10:
	        case 11:
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 44;
	            this.position();
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



	position() {
	    let localctx = new PositionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, fenParser.RULE_position);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 65032) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 48;
	        this.match(fenParser.NUMBER);
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



	halfmoveclock() {
	    let localctx = new HalfmoveclockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, fenParser.RULE_halfmoveclock);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(fenParser.NUMBER);
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



	fullmoveclock() {
	    let localctx = new FullmoveclockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, fenParser.RULE_fullmoveclock);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(fenParser.NUMBER);
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



	placement() {
	    let localctx = new PlacementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, fenParser.RULE_placement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.rank();
	        this.state = 57; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 55;
	            this.match(fenParser.T__15);
	            this.state = 56;
	            this.rank();
	            this.state = 59; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===16);
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



	rank() {
	    let localctx = new RankContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, fenParser.RULE_rank);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 63;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 3:
	            case 5:
	            case 6:
	            case 7:
	            case 8:
	            case 17:
	            case 18:
	            case 19:
	            case 20:
	            case 21:
	            case 22:
	            case 23:
	                this.state = 61;
	                this.piece();
	                break;
	            case 24:
	                this.state = 62;
	                this.match(fenParser.NUMBER);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 65; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 33423848) !== 0));
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



	piece() {
	    let localctx = new PieceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, fenParser.RULE_piece);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 16646632) !== 0))) {
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

fenParser.EOF = antlr4.Token.EOF;
fenParser.T__0 = 1;
fenParser.T__1 = 2;
fenParser.T__2 = 3;
fenParser.T__3 = 4;
fenParser.T__4 = 5;
fenParser.T__5 = 6;
fenParser.T__6 = 7;
fenParser.T__7 = 8;
fenParser.T__8 = 9;
fenParser.T__9 = 10;
fenParser.T__10 = 11;
fenParser.T__11 = 12;
fenParser.T__12 = 13;
fenParser.T__13 = 14;
fenParser.T__14 = 15;
fenParser.T__15 = 16;
fenParser.T__16 = 17;
fenParser.T__17 = 18;
fenParser.T__18 = 19;
fenParser.T__19 = 20;
fenParser.T__20 = 21;
fenParser.T__21 = 22;
fenParser.T__22 = 23;
fenParser.NUMBER = 24;
fenParser.WS = 25;

fenParser.RULE_fen = 0;
fenParser.RULE_color = 1;
fenParser.RULE_castling = 2;
fenParser.RULE_enpassant = 3;
fenParser.RULE_position = 4;
fenParser.RULE_halfmoveclock = 5;
fenParser.RULE_fullmoveclock = 6;
fenParser.RULE_placement = 7;
fenParser.RULE_rank = 8;
fenParser.RULE_piece = 9;

class FenContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = fenParser.RULE_fen;
    }

	placement() {
	    return this.getTypedRuleContext(PlacementContext,0);
	};

	color() {
	    return this.getTypedRuleContext(ColorContext,0);
	};

	castling() {
	    return this.getTypedRuleContext(CastlingContext,0);
	};

	enpassant() {
	    return this.getTypedRuleContext(EnpassantContext,0);
	};

	halfmoveclock() {
	    return this.getTypedRuleContext(HalfmoveclockContext,0);
	};

	fullmoveclock() {
	    return this.getTypedRuleContext(FullmoveclockContext,0);
	};

	EOF() {
	    return this.getToken(fenParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof fenListener ) {
	        listener.enterFen(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof fenListener ) {
	        listener.exitFen(this);
		}
	}


}



class ColorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = fenParser.RULE_color;
    }


	enterRule(listener) {
	    if(listener instanceof fenListener ) {
	        listener.enterColor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof fenListener ) {
	        listener.exitColor(this);
		}
	}


}



class CastlingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = fenParser.RULE_castling;
    }


	enterRule(listener) {
	    if(listener instanceof fenListener ) {
	        listener.enterCastling(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof fenListener ) {
	        listener.exitCastling(this);
		}
	}


}



class EnpassantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = fenParser.RULE_enpassant;
    }

	position() {
	    return this.getTypedRuleContext(PositionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof fenListener ) {
	        listener.enterEnpassant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof fenListener ) {
	        listener.exitEnpassant(this);
		}
	}


}



class PositionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = fenParser.RULE_position;
    }

	NUMBER() {
	    return this.getToken(fenParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof fenListener ) {
	        listener.enterPosition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof fenListener ) {
	        listener.exitPosition(this);
		}
	}


}



class HalfmoveclockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = fenParser.RULE_halfmoveclock;
    }

	NUMBER() {
	    return this.getToken(fenParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof fenListener ) {
	        listener.enterHalfmoveclock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof fenListener ) {
	        listener.exitHalfmoveclock(this);
		}
	}


}



class FullmoveclockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = fenParser.RULE_fullmoveclock;
    }

	NUMBER() {
	    return this.getToken(fenParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof fenListener ) {
	        listener.enterFullmoveclock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof fenListener ) {
	        listener.exitFullmoveclock(this);
		}
	}


}



class PlacementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = fenParser.RULE_placement;
    }

	rank = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RankContext);
	    } else {
	        return this.getTypedRuleContext(RankContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof fenListener ) {
	        listener.enterPlacement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof fenListener ) {
	        listener.exitPlacement(this);
		}
	}


}



class RankContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = fenParser.RULE_rank;
    }

	piece = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PieceContext);
	    } else {
	        return this.getTypedRuleContext(PieceContext,i);
	    }
	};

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(fenParser.NUMBER);
	    } else {
	        return this.getToken(fenParser.NUMBER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof fenListener ) {
	        listener.enterRank(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof fenListener ) {
	        listener.exitRank(this);
		}
	}


}



class PieceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = fenParser.RULE_piece;
    }


	enterRule(listener) {
	    if(listener instanceof fenListener ) {
	        listener.enterPiece(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof fenListener ) {
	        listener.exitPiece(this);
		}
	}


}




fenParser.FenContext = FenContext; 
fenParser.ColorContext = ColorContext; 
fenParser.CastlingContext = CastlingContext; 
fenParser.EnpassantContext = EnpassantContext; 
fenParser.PositionContext = PositionContext; 
fenParser.HalfmoveclockContext = HalfmoveclockContext; 
fenParser.FullmoveclockContext = FullmoveclockContext; 
fenParser.PlacementContext = PlacementContext; 
fenParser.RankContext = RankContext; 
fenParser.PieceContext = PieceContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
