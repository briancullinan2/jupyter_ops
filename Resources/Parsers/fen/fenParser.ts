// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/fen/fen.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { fenListener } from "./fenListener";
import { fenVisitor } from "./fenVisitor";


export class fenParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly NUMBER = 24;
	public static readonly WS = 25;
	public static readonly RULE_fen = 0;
	public static readonly RULE_color = 1;
	public static readonly RULE_castling = 2;
	public static readonly RULE_enpassant = 3;
	public static readonly RULE_position = 4;
	public static readonly RULE_halfmoveclock = 5;
	public static readonly RULE_fullmoveclock = 6;
	public static readonly RULE_placement = 7;
	public static readonly RULE_rank = 8;
	public static readonly RULE_piece = 9;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"fen", "color", "castling", "enpassant", "position", "halfmoveclock", 
		"fullmoveclock", "placement", "rank", "piece",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "' '", "'w'", "'b'", "'-'", "'Q'", "'K'", "'k'", "'q'", "'a'", 
		"'c'", "'d'", "'e'", "'f'", "'g'", "'h'", "'/'", "'p'", "'r'", "'n'", 
		"'P'", "'R'", "'N'", "'B'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "NUMBER", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(fenParser._LITERAL_NAMES, fenParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return fenParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "fen.g4"; }

	// @Override
	public get ruleNames(): string[] { return fenParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return fenParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(fenParser._ATN, this);
	}
	// @RuleVersion(0)
	public fen(): FenContext {
		let _localctx: FenContext = new FenContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, fenParser.RULE_fen);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
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
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public color(): ColorContext {
		let _localctx: ColorContext = new ColorContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, fenParser.RULE_color);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 32;
			_la = this._input.LA(1);
			if (!(_la === fenParser.T__1 || _la === fenParser.T__2)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public castling(): CastlingContext {
		let _localctx: CastlingContext = new CastlingContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, fenParser.RULE_castling);
		let _la: number;
		try {
			this.state = 40;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case fenParser.T__3:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 34;
				this.match(fenParser.T__3);
				}
				break;
			case fenParser.T__4:
			case fenParser.T__5:
			case fenParser.T__6:
			case fenParser.T__7:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 36;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 35;
					_la = this._input.LA(1);
					if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << fenParser.T__4) | (1 << fenParser.T__5) | (1 << fenParser.T__6) | (1 << fenParser.T__7))) !== 0))) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					}
					this.state = 38;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << fenParser.T__4) | (1 << fenParser.T__5) | (1 << fenParser.T__6) | (1 << fenParser.T__7))) !== 0));
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enpassant(): EnpassantContext {
		let _localctx: EnpassantContext = new EnpassantContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, fenParser.RULE_enpassant);
		try {
			this.state = 44;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case fenParser.T__3:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 42;
				this.match(fenParser.T__3);
				}
				break;
			case fenParser.T__2:
			case fenParser.T__8:
			case fenParser.T__9:
			case fenParser.T__10:
			case fenParser.T__11:
			case fenParser.T__12:
			case fenParser.T__13:
			case fenParser.T__14:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 43;
				this.position();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public position(): PositionContext {
		let _localctx: PositionContext = new PositionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, fenParser.RULE_position);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 46;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << fenParser.T__2) | (1 << fenParser.T__8) | (1 << fenParser.T__9) | (1 << fenParser.T__10) | (1 << fenParser.T__11) | (1 << fenParser.T__12) | (1 << fenParser.T__13) | (1 << fenParser.T__14))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 47;
			this.match(fenParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public halfmoveclock(): HalfmoveclockContext {
		let _localctx: HalfmoveclockContext = new HalfmoveclockContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, fenParser.RULE_halfmoveclock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
			this.match(fenParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fullmoveclock(): FullmoveclockContext {
		let _localctx: FullmoveclockContext = new FullmoveclockContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, fenParser.RULE_fullmoveclock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 51;
			this.match(fenParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public placement(): PlacementContext {
		let _localctx: PlacementContext = new PlacementContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, fenParser.RULE_placement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			this.rank();
			this.state = 56;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 54;
				this.match(fenParser.T__15);
				this.state = 55;
				this.rank();
				}
				}
				this.state = 58;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === fenParser.T__15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rank(): RankContext {
		let _localctx: RankContext = new RankContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, fenParser.RULE_rank);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 62;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case fenParser.T__2:
				case fenParser.T__4:
				case fenParser.T__5:
				case fenParser.T__6:
				case fenParser.T__7:
				case fenParser.T__16:
				case fenParser.T__17:
				case fenParser.T__18:
				case fenParser.T__19:
				case fenParser.T__20:
				case fenParser.T__21:
				case fenParser.T__22:
					{
					this.state = 60;
					this.piece();
					}
					break;
				case fenParser.NUMBER:
					{
					this.state = 61;
					this.match(fenParser.NUMBER);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 64;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << fenParser.T__2) | (1 << fenParser.T__4) | (1 << fenParser.T__5) | (1 << fenParser.T__6) | (1 << fenParser.T__7) | (1 << fenParser.T__16) | (1 << fenParser.T__17) | (1 << fenParser.T__18) | (1 << fenParser.T__19) | (1 << fenParser.T__20) | (1 << fenParser.T__21) | (1 << fenParser.T__22) | (1 << fenParser.NUMBER))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public piece(): PieceContext {
		let _localctx: PieceContext = new PieceContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, fenParser.RULE_piece);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << fenParser.T__2) | (1 << fenParser.T__4) | (1 << fenParser.T__5) | (1 << fenParser.T__6) | (1 << fenParser.T__7) | (1 << fenParser.T__16) | (1 << fenParser.T__17) | (1 << fenParser.T__18) | (1 << fenParser.T__19) | (1 << fenParser.T__20) | (1 << fenParser.T__21) | (1 << fenParser.T__22))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1BG\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x03\x04\x03\x04\x06\x04\'\n\x04\r\x04\x0E\x04(\x05\x04" +
		"+\n\x04\x03\x05\x03\x05\x05\x05/\n\x05\x03\x06\x03\x06\x03\x06\x03\x07" +
		"\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x06\t;\n\t\r\t\x0E\t<\x03\n\x03" +
		"\n\x06\nA\n\n\r\n\x0E\nB\x03\v\x03\v\x03\v\x02\x02\x02\f\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x02\x06\x03" +
		"\x02\x04\x05\x03\x02\x07\n\x04\x02\x05\x05\v\x11\x05\x02\x05\x05\x07\n" +
		"\x13\x19\x02B\x02\x16\x03\x02\x02\x02\x04\"\x03\x02\x02\x02\x06*\x03\x02" +
		"\x02\x02\b.\x03\x02\x02\x02\n0\x03\x02\x02\x02\f3\x03\x02\x02\x02\x0E" +
		"5\x03\x02\x02\x02\x107\x03\x02\x02\x02\x12@\x03\x02\x02\x02\x14D\x03\x02" +
		"\x02\x02\x16\x17\x05\x10\t\x02\x17\x18\x07\x03\x02\x02\x18\x19\x05\x04" +
		"\x03\x02\x19\x1A\x07\x03\x02\x02\x1A\x1B\x05\x06\x04\x02\x1B\x1C\x07\x03" +
		"\x02\x02\x1C\x1D\x05\b\x05\x02\x1D\x1E\x07\x03\x02\x02\x1E\x1F\x05\f\x07" +
		"\x02\x1F \x07\x03\x02\x02 !\x05\x0E\b\x02!\x03\x03\x02\x02\x02\"#\t\x02" +
		"\x02\x02#\x05\x03\x02\x02\x02$+\x07\x06\x02\x02%\'\t\x03\x02\x02&%\x03" +
		"\x02\x02\x02\'(\x03\x02\x02\x02(&\x03\x02\x02\x02()\x03\x02\x02\x02)+" +
		"\x03\x02\x02\x02*$\x03\x02\x02\x02*&\x03\x02\x02\x02+\x07\x03\x02\x02" +
		"\x02,/\x07\x06\x02\x02-/\x05\n\x06\x02.,\x03\x02\x02\x02.-\x03\x02\x02" +
		"\x02/\t\x03\x02\x02\x0201\t\x04\x02\x0212\x07\x1A\x02\x022\v\x03\x02\x02" +
		"\x0234\x07\x1A\x02\x024\r\x03\x02\x02\x0256\x07\x1A\x02\x026\x0F\x03\x02" +
		"\x02\x027:\x05\x12\n\x0289\x07\x12\x02\x029;\x05\x12\n\x02:8\x03\x02\x02" +
		"\x02;<\x03\x02\x02\x02<:\x03\x02\x02\x02<=\x03\x02\x02\x02=\x11\x03\x02" +
		"\x02\x02>A\x05\x14\v\x02?A\x07\x1A\x02\x02@>\x03\x02\x02\x02@?\x03\x02" +
		"\x02\x02AB\x03\x02\x02\x02B@\x03\x02\x02\x02BC\x03\x02\x02\x02C\x13\x03" +
		"\x02\x02\x02DE\t\x05\x02\x02E\x15\x03\x02\x02\x02\b(*.<@B";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!fenParser.__ATN) {
			fenParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(fenParser._serializedATN));
		}

		return fenParser.__ATN;
	}

}

export class FenContext extends ParserRuleContext {
	public placement(): PlacementContext {
		return this.getRuleContext(0, PlacementContext);
	}
	public color(): ColorContext {
		return this.getRuleContext(0, ColorContext);
	}
	public castling(): CastlingContext {
		return this.getRuleContext(0, CastlingContext);
	}
	public enpassant(): EnpassantContext {
		return this.getRuleContext(0, EnpassantContext);
	}
	public halfmoveclock(): HalfmoveclockContext {
		return this.getRuleContext(0, HalfmoveclockContext);
	}
	public fullmoveclock(): FullmoveclockContext {
		return this.getRuleContext(0, FullmoveclockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fenParser.RULE_fen; }
	// @Override
	public enterRule(listener: fenListener): void {
		if (listener.enterFen) {
			listener.enterFen(this);
		}
	}
	// @Override
	public exitRule(listener: fenListener): void {
		if (listener.exitFen) {
			listener.exitFen(this);
		}
	}
	// @Override
	public accept<Result>(visitor: fenVisitor<Result>): Result {
		if (visitor.visitFen) {
			return visitor.visitFen(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fenParser.RULE_color; }
	// @Override
	public enterRule(listener: fenListener): void {
		if (listener.enterColor) {
			listener.enterColor(this);
		}
	}
	// @Override
	public exitRule(listener: fenListener): void {
		if (listener.exitColor) {
			listener.exitColor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: fenVisitor<Result>): Result {
		if (visitor.visitColor) {
			return visitor.visitColor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CastlingContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fenParser.RULE_castling; }
	// @Override
	public enterRule(listener: fenListener): void {
		if (listener.enterCastling) {
			listener.enterCastling(this);
		}
	}
	// @Override
	public exitRule(listener: fenListener): void {
		if (listener.exitCastling) {
			listener.exitCastling(this);
		}
	}
	// @Override
	public accept<Result>(visitor: fenVisitor<Result>): Result {
		if (visitor.visitCastling) {
			return visitor.visitCastling(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnpassantContext extends ParserRuleContext {
	public position(): PositionContext | undefined {
		return this.tryGetRuleContext(0, PositionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fenParser.RULE_enpassant; }
	// @Override
	public enterRule(listener: fenListener): void {
		if (listener.enterEnpassant) {
			listener.enterEnpassant(this);
		}
	}
	// @Override
	public exitRule(listener: fenListener): void {
		if (listener.exitEnpassant) {
			listener.exitEnpassant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: fenVisitor<Result>): Result {
		if (visitor.visitEnpassant) {
			return visitor.visitEnpassant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PositionContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(fenParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fenParser.RULE_position; }
	// @Override
	public enterRule(listener: fenListener): void {
		if (listener.enterPosition) {
			listener.enterPosition(this);
		}
	}
	// @Override
	public exitRule(listener: fenListener): void {
		if (listener.exitPosition) {
			listener.exitPosition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: fenVisitor<Result>): Result {
		if (visitor.visitPosition) {
			return visitor.visitPosition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HalfmoveclockContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(fenParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fenParser.RULE_halfmoveclock; }
	// @Override
	public enterRule(listener: fenListener): void {
		if (listener.enterHalfmoveclock) {
			listener.enterHalfmoveclock(this);
		}
	}
	// @Override
	public exitRule(listener: fenListener): void {
		if (listener.exitHalfmoveclock) {
			listener.exitHalfmoveclock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: fenVisitor<Result>): Result {
		if (visitor.visitHalfmoveclock) {
			return visitor.visitHalfmoveclock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FullmoveclockContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(fenParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fenParser.RULE_fullmoveclock; }
	// @Override
	public enterRule(listener: fenListener): void {
		if (listener.enterFullmoveclock) {
			listener.enterFullmoveclock(this);
		}
	}
	// @Override
	public exitRule(listener: fenListener): void {
		if (listener.exitFullmoveclock) {
			listener.exitFullmoveclock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: fenVisitor<Result>): Result {
		if (visitor.visitFullmoveclock) {
			return visitor.visitFullmoveclock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PlacementContext extends ParserRuleContext {
	public rank(): RankContext[];
	public rank(i: number): RankContext;
	public rank(i?: number): RankContext | RankContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RankContext);
		} else {
			return this.getRuleContext(i, RankContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fenParser.RULE_placement; }
	// @Override
	public enterRule(listener: fenListener): void {
		if (listener.enterPlacement) {
			listener.enterPlacement(this);
		}
	}
	// @Override
	public exitRule(listener: fenListener): void {
		if (listener.exitPlacement) {
			listener.exitPlacement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: fenVisitor<Result>): Result {
		if (visitor.visitPlacement) {
			return visitor.visitPlacement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RankContext extends ParserRuleContext {
	public piece(): PieceContext[];
	public piece(i: number): PieceContext;
	public piece(i?: number): PieceContext | PieceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PieceContext);
		} else {
			return this.getRuleContext(i, PieceContext);
		}
	}
	public NUMBER(): TerminalNode[];
	public NUMBER(i: number): TerminalNode;
	public NUMBER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(fenParser.NUMBER);
		} else {
			return this.getToken(fenParser.NUMBER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fenParser.RULE_rank; }
	// @Override
	public enterRule(listener: fenListener): void {
		if (listener.enterRank) {
			listener.enterRank(this);
		}
	}
	// @Override
	public exitRule(listener: fenListener): void {
		if (listener.exitRank) {
			listener.exitRank(this);
		}
	}
	// @Override
	public accept<Result>(visitor: fenVisitor<Result>): Result {
		if (visitor.visitRank) {
			return visitor.visitRank(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PieceContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fenParser.RULE_piece; }
	// @Override
	public enterRule(listener: fenListener): void {
		if (listener.enterPiece) {
			listener.enterPiece(this);
		}
	}
	// @Override
	public exitRule(listener: fenListener): void {
		if (listener.exitPiece) {
			listener.exitPiece(this);
		}
	}
	// @Override
	public accept<Result>(visitor: fenVisitor<Result>): Result {
		if (visitor.visitPiece) {
			return visitor.visitPiece(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


