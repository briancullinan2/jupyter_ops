// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/pdn/pdn.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { pdnListener } from "./pdnListener";
import { pdnVisitor } from "./pdnVisitor";


export class pdnParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly MOVE1 = 8;
	public static readonly MOVE2 = 9;
	public static readonly NUMBER = 10;
	public static readonly TEXT = 11;
	public static readonly STRING = 12;
	public static readonly COMMENT = 13;
	public static readonly WS = 14;
	public static readonly RULE_game = 0;
	public static readonly RULE_tags = 1;
	public static readonly RULE_tag = 2;
	public static readonly RULE_moves = 3;
	public static readonly RULE_move = 4;
	public static readonly RULE_movespec = 5;
	public static readonly RULE_movenum = 6;
	public static readonly RULE_result = 7;
	public static readonly RULE_text = 8;
	public static readonly RULE_string = 9;
	public static readonly RULE_number = 10;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"game", "tags", "tag", "moves", "move", "movespec", "movenum", "result", 
		"text", "string", "number",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'['", "']'", "'*'", "'.'", "'1/2-1/2'", "'1-0'", "'0-1'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "MOVE1", "MOVE2", "NUMBER", "TEXT", "STRING", "COMMENT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(pdnParser._LITERAL_NAMES, pdnParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return pdnParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "pdn.g4"; }

	// @Override
	public get ruleNames(): string[] { return pdnParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return pdnParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(pdnParser._ATN, this);
	}
	// @RuleVersion(0)
	public game(): GameContext {
		let _localctx: GameContext = new GameContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, pdnParser.RULE_game);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 22;
			this.tags();
			this.state = 23;
			this.moves();
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
	public tags(): TagsContext {
		let _localctx: TagsContext = new TagsContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, pdnParser.RULE_tags);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 28;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pdnParser.T__0) {
				{
				{
				this.state = 25;
				this.tag();
				}
				}
				this.state = 30;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public tag(): TagContext {
		let _localctx: TagContext = new TagContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, pdnParser.RULE_tag);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 31;
			this.match(pdnParser.T__0);
			this.state = 32;
			this.text();
			this.state = 33;
			this.string();
			this.state = 34;
			this.match(pdnParser.T__1);
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
	public moves(): MovesContext {
		let _localctx: MovesContext = new MovesContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, pdnParser.RULE_moves);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 37;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 36;
				this.move();
				}
				}
				this.state = 39;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === pdnParser.NUMBER);
			this.state = 43;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pdnParser.T__4:
			case pdnParser.T__5:
			case pdnParser.T__6:
				{
				this.state = 41;
				this.result();
				}
				break;
			case pdnParser.T__2:
				{
				this.state = 42;
				this.match(pdnParser.T__2);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public move(): MoveContext {
		let _localctx: MoveContext = new MoveContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, pdnParser.RULE_move);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this.movenum();
			this.state = 47;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 46;
				this.movespec();
				}
				}
				this.state = 49;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === pdnParser.MOVE1 || _la === pdnParser.MOVE2);
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
	public movespec(): MovespecContext {
		let _localctx: MovespecContext = new MovespecContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, pdnParser.RULE_movespec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 51;
			_la = this._input.LA(1);
			if (!(_la === pdnParser.MOVE1 || _la === pdnParser.MOVE2)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 54;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 52;
				this.result();
				}
				break;

			case 2:
				{
				this.state = 53;
				this.match(pdnParser.T__2);
				}
				break;
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
	public movenum(): MovenumContext {
		let _localctx: MovenumContext = new MovenumContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, pdnParser.RULE_movenum);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			this.number();
			this.state = 57;
			this.match(pdnParser.T__3);
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
	public result(): ResultContext {
		let _localctx: ResultContext = new ResultContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, pdnParser.RULE_result);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 59;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pdnParser.T__4) | (1 << pdnParser.T__5) | (1 << pdnParser.T__6))) !== 0))) {
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
	public text(): TextContext {
		let _localctx: TextContext = new TextContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, pdnParser.RULE_text);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 61;
			this.match(pdnParser.TEXT);
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
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, pdnParser.RULE_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 63;
			this.match(pdnParser.STRING);
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
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, pdnParser.RULE_number);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 65;
			this.match(pdnParser.NUMBER);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x10F\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03\x02" +
		"\x03\x02\x03\x03\x07\x03\x1D\n\x03\f\x03\x0E\x03 \v\x03\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x05\x06\x05(\n\x05\r\x05\x0E\x05)\x03\x05" +
		"\x03\x05\x05\x05.\n\x05\x03\x06\x03\x06\x06\x062\n\x06\r\x06\x0E\x063" +
		"\x03\x07\x03\x07\x03\x07\x05\x079\n\x07\x03\b\x03\b\x03\b\x03\t\x03\t" +
		"\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f\x02\x02\x02\r\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x02" +
		"\x04\x03\x02\n\v\x03\x02\x07\t\x02@\x02\x18\x03\x02\x02\x02\x04\x1E\x03" +
		"\x02\x02\x02\x06!\x03\x02\x02\x02\b\'\x03\x02\x02\x02\n/\x03\x02\x02\x02" +
		"\f5\x03\x02\x02\x02\x0E:\x03\x02\x02\x02\x10=\x03\x02\x02\x02\x12?\x03" +
		"\x02\x02\x02\x14A\x03\x02\x02\x02\x16C\x03\x02\x02\x02\x18\x19\x05\x04" +
		"\x03\x02\x19\x1A\x05\b\x05\x02\x1A\x03\x03\x02\x02\x02\x1B\x1D\x05\x06" +
		"\x04\x02\x1C\x1B\x03\x02\x02\x02\x1D \x03\x02\x02\x02\x1E\x1C\x03\x02" +
		"\x02\x02\x1E\x1F\x03\x02\x02\x02\x1F\x05\x03\x02\x02\x02 \x1E\x03\x02" +
		"\x02\x02!\"\x07\x03\x02\x02\"#\x05\x12\n\x02#$\x05\x14\v\x02$%\x07\x04" +
		"\x02\x02%\x07\x03\x02\x02\x02&(\x05\n\x06\x02\'&\x03\x02\x02\x02()\x03" +
		"\x02\x02\x02)\'\x03\x02\x02\x02)*\x03\x02\x02\x02*-\x03\x02\x02\x02+." +
		"\x05\x10\t\x02,.\x07\x05\x02\x02-+\x03\x02\x02\x02-,\x03\x02\x02\x02." +
		"\t\x03\x02\x02\x02/1\x05\x0E\b\x0202\x05\f\x07\x0210\x03\x02\x02\x022" +
		"3\x03\x02\x02\x0231\x03\x02\x02\x0234\x03\x02\x02\x024\v\x03\x02\x02\x02" +
		"58\t\x02\x02\x0269\x05\x10\t\x0279\x07\x05\x02\x0286\x03\x02\x02\x028" +
		"7\x03\x02\x02\x0289\x03\x02\x02\x029\r\x03\x02\x02\x02:;\x05\x16\f\x02" +
		";<\x07\x06\x02\x02<\x0F\x03\x02\x02\x02=>\t\x03\x02\x02>\x11\x03\x02\x02" +
		"\x02?@\x07\r\x02\x02@\x13\x03\x02\x02\x02AB\x07\x0E\x02\x02B\x15\x03\x02" +
		"\x02\x02CD\x07\f\x02\x02D\x17\x03\x02\x02\x02\x07\x1E)-38";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!pdnParser.__ATN) {
			pdnParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(pdnParser._serializedATN));
		}

		return pdnParser.__ATN;
	}

}

export class GameContext extends ParserRuleContext {
	public tags(): TagsContext {
		return this.getRuleContext(0, TagsContext);
	}
	public moves(): MovesContext {
		return this.getRuleContext(0, MovesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pdnParser.RULE_game; }
	// @Override
	public enterRule(listener: pdnListener): void {
		if (listener.enterGame) {
			listener.enterGame(this);
		}
	}
	// @Override
	public exitRule(listener: pdnListener): void {
		if (listener.exitGame) {
			listener.exitGame(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pdnVisitor<Result>): Result {
		if (visitor.visitGame) {
			return visitor.visitGame(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagsContext extends ParserRuleContext {
	public tag(): TagContext[];
	public tag(i: number): TagContext;
	public tag(i?: number): TagContext | TagContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TagContext);
		} else {
			return this.getRuleContext(i, TagContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pdnParser.RULE_tags; }
	// @Override
	public enterRule(listener: pdnListener): void {
		if (listener.enterTags) {
			listener.enterTags(this);
		}
	}
	// @Override
	public exitRule(listener: pdnListener): void {
		if (listener.exitTags) {
			listener.exitTags(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pdnVisitor<Result>): Result {
		if (visitor.visitTags) {
			return visitor.visitTags(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagContext extends ParserRuleContext {
	public text(): TextContext {
		return this.getRuleContext(0, TextContext);
	}
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pdnParser.RULE_tag; }
	// @Override
	public enterRule(listener: pdnListener): void {
		if (listener.enterTag) {
			listener.enterTag(this);
		}
	}
	// @Override
	public exitRule(listener: pdnListener): void {
		if (listener.exitTag) {
			listener.exitTag(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pdnVisitor<Result>): Result {
		if (visitor.visitTag) {
			return visitor.visitTag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MovesContext extends ParserRuleContext {
	public result(): ResultContext | undefined {
		return this.tryGetRuleContext(0, ResultContext);
	}
	public move(): MoveContext[];
	public move(i: number): MoveContext;
	public move(i?: number): MoveContext | MoveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoveContext);
		} else {
			return this.getRuleContext(i, MoveContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pdnParser.RULE_moves; }
	// @Override
	public enterRule(listener: pdnListener): void {
		if (listener.enterMoves) {
			listener.enterMoves(this);
		}
	}
	// @Override
	public exitRule(listener: pdnListener): void {
		if (listener.exitMoves) {
			listener.exitMoves(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pdnVisitor<Result>): Result {
		if (visitor.visitMoves) {
			return visitor.visitMoves(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MoveContext extends ParserRuleContext {
	public movenum(): MovenumContext {
		return this.getRuleContext(0, MovenumContext);
	}
	public movespec(): MovespecContext[];
	public movespec(i: number): MovespecContext;
	public movespec(i?: number): MovespecContext | MovespecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MovespecContext);
		} else {
			return this.getRuleContext(i, MovespecContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pdnParser.RULE_move; }
	// @Override
	public enterRule(listener: pdnListener): void {
		if (listener.enterMove) {
			listener.enterMove(this);
		}
	}
	// @Override
	public exitRule(listener: pdnListener): void {
		if (listener.exitMove) {
			listener.exitMove(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pdnVisitor<Result>): Result {
		if (visitor.visitMove) {
			return visitor.visitMove(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MovespecContext extends ParserRuleContext {
	public MOVE1(): TerminalNode | undefined { return this.tryGetToken(pdnParser.MOVE1, 0); }
	public MOVE2(): TerminalNode | undefined { return this.tryGetToken(pdnParser.MOVE2, 0); }
	public result(): ResultContext | undefined {
		return this.tryGetRuleContext(0, ResultContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pdnParser.RULE_movespec; }
	// @Override
	public enterRule(listener: pdnListener): void {
		if (listener.enterMovespec) {
			listener.enterMovespec(this);
		}
	}
	// @Override
	public exitRule(listener: pdnListener): void {
		if (listener.exitMovespec) {
			listener.exitMovespec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pdnVisitor<Result>): Result {
		if (visitor.visitMovespec) {
			return visitor.visitMovespec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MovenumContext extends ParserRuleContext {
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pdnParser.RULE_movenum; }
	// @Override
	public enterRule(listener: pdnListener): void {
		if (listener.enterMovenum) {
			listener.enterMovenum(this);
		}
	}
	// @Override
	public exitRule(listener: pdnListener): void {
		if (listener.exitMovenum) {
			listener.exitMovenum(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pdnVisitor<Result>): Result {
		if (visitor.visitMovenum) {
			return visitor.visitMovenum(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResultContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pdnParser.RULE_result; }
	// @Override
	public enterRule(listener: pdnListener): void {
		if (listener.enterResult) {
			listener.enterResult(this);
		}
	}
	// @Override
	public exitRule(listener: pdnListener): void {
		if (listener.exitResult) {
			listener.exitResult(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pdnVisitor<Result>): Result {
		if (visitor.visitResult) {
			return visitor.visitResult(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TextContext extends ParserRuleContext {
	public TEXT(): TerminalNode { return this.getToken(pdnParser.TEXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pdnParser.RULE_text; }
	// @Override
	public enterRule(listener: pdnListener): void {
		if (listener.enterText) {
			listener.enterText(this);
		}
	}
	// @Override
	public exitRule(listener: pdnListener): void {
		if (listener.exitText) {
			listener.exitText(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pdnVisitor<Result>): Result {
		if (visitor.visitText) {
			return visitor.visitText(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(pdnParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pdnParser.RULE_string; }
	// @Override
	public enterRule(listener: pdnListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: pdnListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pdnVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(pdnParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pdnParser.RULE_number; }
	// @Override
	public enterRule(listener: pdnListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: pdnListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pdnVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


