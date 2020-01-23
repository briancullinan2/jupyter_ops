// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/unicode/graphemes/Graphemes.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { GraphemesListener } from "./GraphemesListener";

export class GraphemesParser extends Parser {
	public static readonly Extend = 1;
	public static readonly ZWJ = 2;
	public static readonly SpacingMark = 3;
	public static readonly EmojiCoreSequence = 4;
	public static readonly EmojiZWJSequence = 5;
	public static readonly Prepend = 6;
	public static readonly NonControl = 7;
	public static readonly CRLF = 8;
	public static readonly HangulSyllable = 9;
	public static readonly EmojiTagSequence = 10;
	public static readonly RULE_emoji_sequence = 0;
	public static readonly RULE_grapheme_cluster = 1;
	public static readonly RULE_graphemes = 2;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"emoji_sequence", "grapheme_cluster", "graphemes",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'\u200D'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "Extend", "ZWJ", "SpacingMark", "EmojiCoreSequence", "EmojiZWJSequence", 
		"Prepend", "NonControl", "CRLF", "HangulSyllable", "EmojiTagSequence",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(GraphemesParser._LITERAL_NAMES, GraphemesParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return GraphemesParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Graphemes.g4"; }

	// @Override
	public get ruleNames(): string[] { return GraphemesParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return GraphemesParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(GraphemesParser._ATN, this);
	}
	// @RuleVersion(0)
	public emoji_sequence(): Emoji_sequenceContext {
		let _localctx: Emoji_sequenceContext = new Emoji_sequenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, GraphemesParser.RULE_emoji_sequence);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 6;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GraphemesParser.EmojiCoreSequence) | (1 << GraphemesParser.EmojiZWJSequence) | (1 << GraphemesParser.EmojiTagSequence))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 10;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 7;
					_la = this._input.LA(1);
					if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GraphemesParser.Extend) | (1 << GraphemesParser.ZWJ) | (1 << GraphemesParser.SpacingMark))) !== 0))) {
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
				}
				this.state = 12;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
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
	public grapheme_cluster(): Grapheme_clusterContext {
		let _localctx: Grapheme_clusterContext = new Grapheme_clusterContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, GraphemesParser.RULE_grapheme_cluster);
		let _la: number;
		try {
			this.state = 31;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GraphemesParser.CRLF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 13;
				this.match(GraphemesParser.CRLF);
				}
				break;
			case GraphemesParser.EmojiCoreSequence:
			case GraphemesParser.EmojiZWJSequence:
			case GraphemesParser.Prepend:
			case GraphemesParser.NonControl:
			case GraphemesParser.HangulSyllable:
			case GraphemesParser.EmojiTagSequence:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 17;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === GraphemesParser.Prepend) {
					{
					{
					this.state = 14;
					this.match(GraphemesParser.Prepend);
					}
					}
					this.state = 19;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 23;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case GraphemesParser.EmojiCoreSequence:
				case GraphemesParser.EmojiZWJSequence:
				case GraphemesParser.EmojiTagSequence:
					{
					this.state = 20;
					this.emoji_sequence();
					}
					break;
				case GraphemesParser.HangulSyllable:
					{
					this.state = 21;
					this.match(GraphemesParser.HangulSyllable);
					}
					break;
				case GraphemesParser.NonControl:
					{
					this.state = 22;
					this.match(GraphemesParser.NonControl);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 28;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GraphemesParser.Extend) | (1 << GraphemesParser.ZWJ) | (1 << GraphemesParser.SpacingMark))) !== 0)) {
					{
					{
					this.state = 25;
					_la = this._input.LA(1);
					if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GraphemesParser.Extend) | (1 << GraphemesParser.ZWJ) | (1 << GraphemesParser.SpacingMark))) !== 0))) {
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
					this.state = 30;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
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
	public graphemes(): GraphemesContext {
		let _localctx: GraphemesContext = new GraphemesContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, GraphemesParser.RULE_graphemes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 36;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GraphemesParser.EmojiCoreSequence) | (1 << GraphemesParser.EmojiZWJSequence) | (1 << GraphemesParser.Prepend) | (1 << GraphemesParser.NonControl) | (1 << GraphemesParser.CRLF) | (1 << GraphemesParser.HangulSyllable) | (1 << GraphemesParser.EmojiTagSequence))) !== 0)) {
				{
				{
				this.state = 33;
				this.grapheme_cluster();
				}
				}
				this.state = 38;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 39;
			this.match(GraphemesParser.EOF);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\f,\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x03\x02\x07\x02\v\n\x02\f\x02" +
		"\x0E\x02\x0E\v\x02\x03\x03\x03\x03\x07\x03\x12\n\x03\f\x03\x0E\x03\x15" +
		"\v\x03\x03\x03\x03\x03\x03\x03\x05\x03\x1A\n\x03\x03\x03\x07\x03\x1D\n" +
		"\x03\f\x03\x0E\x03 \v\x03\x05\x03\"\n\x03\x03\x04\x07\x04%\n\x04\f\x04" +
		"\x0E\x04(\v\x04\x03\x04\x03\x04\x03\x04\x02\x02\x02\x05\x02\x02\x04\x02" +
		"\x06\x02\x02\x04\x04\x02\x06\x07\f\f\x03\x02\x03\x05\x02/\x02\b\x03\x02" +
		"\x02\x02\x04!\x03\x02\x02\x02\x06&\x03\x02\x02\x02\b\f\t\x02\x02\x02\t" +
		"\v\t\x03\x02\x02\n\t\x03\x02\x02\x02\v\x0E\x03\x02\x02\x02\f\n\x03\x02" +
		"\x02\x02\f\r\x03\x02\x02\x02\r\x03\x03\x02\x02\x02\x0E\f\x03\x02\x02\x02" +
		"\x0F\"\x07\n\x02\x02\x10\x12\x07\b\x02\x02\x11\x10\x03\x02\x02\x02\x12" +
		"\x15\x03\x02\x02\x02\x13\x11\x03\x02\x02\x02\x13\x14\x03\x02\x02\x02\x14" +
		"\x19\x03\x02\x02\x02\x15\x13\x03\x02\x02\x02\x16\x1A\x05\x02\x02\x02\x17" +
		"\x1A\x07\v\x02\x02\x18\x1A\x07\t\x02\x02\x19\x16\x03\x02\x02\x02\x19\x17" +
		"\x03\x02\x02\x02\x19\x18\x03\x02\x02\x02\x1A\x1E\x03\x02\x02\x02\x1B\x1D" +
		"\t\x03\x02\x02\x1C\x1B\x03\x02\x02\x02\x1D \x03\x02\x02\x02\x1E\x1C\x03" +
		"\x02\x02\x02\x1E\x1F\x03\x02\x02\x02\x1F\"\x03\x02\x02\x02 \x1E\x03\x02" +
		"\x02\x02!\x0F\x03\x02\x02\x02!\x13\x03\x02\x02\x02\"\x05\x03\x02\x02\x02" +
		"#%\x05\x04\x03\x02$#\x03\x02\x02\x02%(\x03\x02\x02\x02&$\x03\x02\x02\x02" +
		"&\'\x03\x02\x02\x02\')\x03\x02\x02\x02(&\x03\x02\x02\x02)*\x07\x02\x02" +
		"\x03*\x07\x03\x02\x02\x02\b\f\x13\x19\x1E!&";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!GraphemesParser.__ATN) {
			GraphemesParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(GraphemesParser._serializedATN));
		}

		return GraphemesParser.__ATN;
	}

}

export class Emoji_sequenceContext extends ParserRuleContext {
	public EmojiZWJSequence(): TerminalNode | undefined { return this.tryGetToken(GraphemesParser.EmojiZWJSequence, 0); }
	public EmojiCoreSequence(): TerminalNode | undefined { return this.tryGetToken(GraphemesParser.EmojiCoreSequence, 0); }
	public EmojiTagSequence(): TerminalNode | undefined { return this.tryGetToken(GraphemesParser.EmojiTagSequence, 0); }
	public Extend(): TerminalNode[];
	public Extend(i: number): TerminalNode;
	public Extend(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GraphemesParser.Extend);
		} else {
			return this.getToken(GraphemesParser.Extend, i);
		}
	}
	public ZWJ(): TerminalNode[];
	public ZWJ(i: number): TerminalNode;
	public ZWJ(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GraphemesParser.ZWJ);
		} else {
			return this.getToken(GraphemesParser.ZWJ, i);
		}
	}
	public SpacingMark(): TerminalNode[];
	public SpacingMark(i: number): TerminalNode;
	public SpacingMark(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GraphemesParser.SpacingMark);
		} else {
			return this.getToken(GraphemesParser.SpacingMark, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphemesParser.RULE_emoji_sequence; }
	// @Override
	public enterRule(listener: GraphemesListener): void {
		if (listener.enterEmoji_sequence) {
			listener.enterEmoji_sequence(this);
		}
	}
	// @Override
	public exitRule(listener: GraphemesListener): void {
		if (listener.exitEmoji_sequence) {
			listener.exitEmoji_sequence(this);
		}
	}
}


export class Grapheme_clusterContext extends ParserRuleContext {
	public CRLF(): TerminalNode | undefined { return this.tryGetToken(GraphemesParser.CRLF, 0); }
	public emoji_sequence(): Emoji_sequenceContext | undefined {
		return this.tryGetRuleContext(0, Emoji_sequenceContext);
	}
	public HangulSyllable(): TerminalNode | undefined { return this.tryGetToken(GraphemesParser.HangulSyllable, 0); }
	public NonControl(): TerminalNode | undefined { return this.tryGetToken(GraphemesParser.NonControl, 0); }
	public Prepend(): TerminalNode[];
	public Prepend(i: number): TerminalNode;
	public Prepend(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GraphemesParser.Prepend);
		} else {
			return this.getToken(GraphemesParser.Prepend, i);
		}
	}
	public Extend(): TerminalNode[];
	public Extend(i: number): TerminalNode;
	public Extend(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GraphemesParser.Extend);
		} else {
			return this.getToken(GraphemesParser.Extend, i);
		}
	}
	public ZWJ(): TerminalNode[];
	public ZWJ(i: number): TerminalNode;
	public ZWJ(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GraphemesParser.ZWJ);
		} else {
			return this.getToken(GraphemesParser.ZWJ, i);
		}
	}
	public SpacingMark(): TerminalNode[];
	public SpacingMark(i: number): TerminalNode;
	public SpacingMark(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GraphemesParser.SpacingMark);
		} else {
			return this.getToken(GraphemesParser.SpacingMark, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphemesParser.RULE_grapheme_cluster; }
	// @Override
	public enterRule(listener: GraphemesListener): void {
		if (listener.enterGrapheme_cluster) {
			listener.enterGrapheme_cluster(this);
		}
	}
	// @Override
	public exitRule(listener: GraphemesListener): void {
		if (listener.exitGrapheme_cluster) {
			listener.exitGrapheme_cluster(this);
		}
	}
}


export class GraphemesContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(GraphemesParser.EOF, 0); }
	public grapheme_cluster(): Grapheme_clusterContext[];
	public grapheme_cluster(i: number): Grapheme_clusterContext;
	public grapheme_cluster(i?: number): Grapheme_clusterContext | Grapheme_clusterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Grapheme_clusterContext);
		} else {
			return this.getRuleContext(i, Grapheme_clusterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphemesParser.RULE_graphemes; }
	// @Override
	public enterRule(listener: GraphemesListener): void {
		if (listener.enterGraphemes) {
			listener.enterGraphemes(this);
		}
	}
	// @Override
	public exitRule(listener: GraphemesListener): void {
		if (listener.exitGraphemes) {
			listener.exitGraphemes(this);
		}
	}
}


