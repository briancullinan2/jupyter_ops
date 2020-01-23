// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/creole/creole.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { creoleListener } from "./creoleListener";
import { creoleVisitor } from "./creoleVisitor";


export class creoleParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly HASH = 8;
	public static readonly LBRACKET = 9;
	public static readonly RBRACKET = 10;
	public static readonly LBRACE = 11;
	public static readonly RBRACE = 12;
	public static readonly TEXT = 13;
	public static readonly WS = 14;
	public static readonly CR = 15;
	public static readonly NOWIKI = 16;
	public static readonly RSLASH = 17;
	public static readonly RULE_document = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_markup = 2;
	public static readonly RULE_text = 3;
	public static readonly RULE_bold = 4;
	public static readonly RULE_italics = 5;
	public static readonly RULE_href = 6;
	public static readonly RULE_image = 7;
	public static readonly RULE_hline = 8;
	public static readonly RULE_listitem = 9;
	public static readonly RULE_tableheader = 10;
	public static readonly RULE_tablerow = 11;
	public static readonly RULE_title = 12;
	public static readonly RULE_nowiki = 13;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"document", "line", "markup", "text", "bold", "italics", "href", "image", 
		"hline", "listitem", "tableheader", "tablerow", "title", "nowiki",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'\\''", "'**'", "'|'", "'----'", "'*'", "'|='", "'='", "'#'", 
		"'[['", "']]'", "'{{'", "'}}'", undefined, undefined, undefined, undefined, 
		"'/'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "HASH", "LBRACKET", "RBRACKET", "LBRACE", "RBRACE", "TEXT", 
		"WS", "CR", "NOWIKI", "RSLASH",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(creoleParser._LITERAL_NAMES, creoleParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return creoleParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "creole.g4"; }

	// @Override
	public get ruleNames(): string[] { return creoleParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return creoleParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(creoleParser._ATN, this);
	}
	// @RuleVersion(0)
	public document(): DocumentContext {
		let _localctx: DocumentContext = new DocumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, creoleParser.RULE_document);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 34;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << creoleParser.T__1) | (1 << creoleParser.T__2) | (1 << creoleParser.T__3) | (1 << creoleParser.T__4) | (1 << creoleParser.T__5) | (1 << creoleParser.T__6) | (1 << creoleParser.HASH) | (1 << creoleParser.LBRACKET) | (1 << creoleParser.LBRACE) | (1 << creoleParser.TEXT) | (1 << creoleParser.CR) | (1 << creoleParser.NOWIKI) | (1 << creoleParser.RSLASH))) !== 0)) {
				{
				{
				this.state = 29;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << creoleParser.T__1) | (1 << creoleParser.T__2) | (1 << creoleParser.T__3) | (1 << creoleParser.T__4) | (1 << creoleParser.T__5) | (1 << creoleParser.T__6) | (1 << creoleParser.HASH) | (1 << creoleParser.LBRACKET) | (1 << creoleParser.LBRACE) | (1 << creoleParser.TEXT) | (1 << creoleParser.NOWIKI) | (1 << creoleParser.RSLASH))) !== 0)) {
					{
					this.state = 28;
					this.line();
					}
				}

				this.state = 31;
				this.match(creoleParser.CR);
				}
				}
				this.state = 36;
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
	public line(): LineContext {
		let _localctx: LineContext = new LineContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, creoleParser.RULE_line);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 37;
				this.markup();
				}
				}
				this.state = 40;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << creoleParser.T__1) | (1 << creoleParser.T__2) | (1 << creoleParser.T__3) | (1 << creoleParser.T__4) | (1 << creoleParser.T__5) | (1 << creoleParser.T__6) | (1 << creoleParser.HASH) | (1 << creoleParser.LBRACKET) | (1 << creoleParser.LBRACE) | (1 << creoleParser.TEXT) | (1 << creoleParser.NOWIKI) | (1 << creoleParser.RSLASH))) !== 0));
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
	public markup(): MarkupContext {
		let _localctx: MarkupContext = new MarkupContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, creoleParser.RULE_markup);
		try {
			this.state = 53;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 42;
				this.bold();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 43;
				this.italics();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 44;
				this.href();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 45;
				this.title();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 46;
				this.hline();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 47;
				this.text();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 48;
				this.listitem();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 49;
				this.image();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 50;
				this.tablerow();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 51;
				this.tableheader();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 52;
				this.nowiki();
				}
				break;
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
		this.enterRule(_localctx, 6, creoleParser.RULE_text);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 55;
					_la = this._input.LA(1);
					if (!(_la === creoleParser.TEXT || _la === creoleParser.RSLASH)) {
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
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 58;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 64;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 60;
					this.match(creoleParser.T__0);
					this.state = 61;
					this.text();
					}
					}
				}
				this.state = 66;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
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
	public bold(): BoldContext {
		let _localctx: BoldContext = new BoldContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, creoleParser.RULE_bold);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this.match(creoleParser.T__1);
			this.state = 69;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 68;
					this.markup();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 71;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 74;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 73;
				this.match(creoleParser.T__1);
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
	public italics(): ItalicsContext {
		let _localctx: ItalicsContext = new ItalicsContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, creoleParser.RULE_italics);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 76;
			this.match(creoleParser.RSLASH);
			this.state = 77;
			this.match(creoleParser.RSLASH);
			this.state = 79;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 78;
					this.markup();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 81;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 83;
			this.match(creoleParser.RSLASH);
			this.state = 84;
			this.match(creoleParser.RSLASH);
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
	public href(): HrefContext {
		let _localctx: HrefContext = new HrefContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, creoleParser.RULE_href);
		let _la: number;
		try {
			this.state = 108;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case creoleParser.LBRACKET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 86;
				this.match(creoleParser.LBRACKET);
				this.state = 87;
				this.text();
				this.state = 94;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === creoleParser.T__2) {
					{
					this.state = 88;
					this.match(creoleParser.T__2);
					this.state = 90;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 89;
						this.markup();
						}
						}
						this.state = 92;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << creoleParser.T__1) | (1 << creoleParser.T__2) | (1 << creoleParser.T__3) | (1 << creoleParser.T__4) | (1 << creoleParser.T__5) | (1 << creoleParser.T__6) | (1 << creoleParser.HASH) | (1 << creoleParser.LBRACKET) | (1 << creoleParser.LBRACE) | (1 << creoleParser.TEXT) | (1 << creoleParser.NOWIKI) | (1 << creoleParser.RSLASH))) !== 0));
					}
				}

				this.state = 96;
				this.match(creoleParser.RBRACKET);
				}
				break;
			case creoleParser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 98;
				this.match(creoleParser.LBRACE);
				this.state = 99;
				this.text();
				this.state = 100;
				this.match(creoleParser.T__2);
				this.state = 102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 101;
					this.markup();
					}
					}
					this.state = 104;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << creoleParser.T__1) | (1 << creoleParser.T__2) | (1 << creoleParser.T__3) | (1 << creoleParser.T__4) | (1 << creoleParser.T__5) | (1 << creoleParser.T__6) | (1 << creoleParser.HASH) | (1 << creoleParser.LBRACKET) | (1 << creoleParser.LBRACE) | (1 << creoleParser.TEXT) | (1 << creoleParser.NOWIKI) | (1 << creoleParser.RSLASH))) !== 0));
				this.state = 106;
				this.match(creoleParser.RBRACE);
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
	public image(): ImageContext {
		let _localctx: ImageContext = new ImageContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, creoleParser.RULE_image);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 110;
			this.match(creoleParser.LBRACE);
			this.state = 111;
			this.text();
			this.state = 112;
			this.match(creoleParser.RBRACE);
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
	public hline(): HlineContext {
		let _localctx: HlineContext = new HlineContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, creoleParser.RULE_hline);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 114;
			this.match(creoleParser.T__3);
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
	public listitem(): ListitemContext {
		let _localctx: ListitemContext = new ListitemContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, creoleParser.RULE_listitem);
		try {
			let _alt: number;
			this.state = 128;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case creoleParser.T__4:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 117;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 116;
						this.match(creoleParser.T__4);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 119;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 121;
				this.markup();
				}
				}
				break;
			case creoleParser.HASH:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 123;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 122;
						this.match(creoleParser.HASH);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 125;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 127;
				this.markup();
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
	public tableheader(): TableheaderContext {
		let _localctx: TableheaderContext = new TableheaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, creoleParser.RULE_tableheader);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 136;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 130;
				this.match(creoleParser.T__5);
				this.state = 132;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 131;
						this.markup();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 134;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				}
				this.state = 138;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === creoleParser.T__5);
			this.state = 140;
			this.match(creoleParser.T__2);
			this.state = 144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === creoleParser.WS) {
				{
				{
				this.state = 141;
				this.match(creoleParser.WS);
				}
				}
				this.state = 146;
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
	public tablerow(): TablerowContext {
		let _localctx: TablerowContext = new TablerowContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, creoleParser.RULE_tablerow);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 147;
					this.match(creoleParser.T__2);
					this.state = 149;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 148;
							this.markup();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 151;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 155;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 157;
			this.match(creoleParser.T__2);
			this.state = 161;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === creoleParser.WS) {
				{
				{
				this.state = 158;
				this.match(creoleParser.WS);
				}
				}
				this.state = 163;
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
	public title(): TitleContext {
		let _localctx: TitleContext = new TitleContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, creoleParser.RULE_title);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 165;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 164;
					this.match(creoleParser.T__6);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 167;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 169;
			this.markup();
			this.state = 173;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 170;
					this.match(creoleParser.T__6);
					}
					}
				}
				this.state = 175;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
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
	public nowiki(): NowikiContext {
		let _localctx: NowikiContext = new NowikiContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, creoleParser.RULE_nowiki);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			this.match(creoleParser.NOWIKI);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x13\xB5\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x05\x02 \n\x02\x03\x02\x07\x02#\n\x02" +
		"\f\x02\x0E\x02&\v\x02\x03\x03\x06\x03)\n\x03\r\x03\x0E\x03*\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x05\x048\n\x04\x03\x05\x06\x05;\n\x05\r\x05\x0E\x05<\x03\x05\x03" +
		"\x05\x07\x05A\n\x05\f\x05\x0E\x05D\v\x05\x03\x06\x03\x06\x06\x06H\n\x06" +
		"\r\x06\x0E\x06I\x03\x06\x05\x06M\n\x06\x03\x07\x03\x07\x03\x07\x06\x07" +
		"R\n\x07\r\x07\x0E\x07S\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b" +
		"\x06\b]\n\b\r\b\x0E\b^\x05\ba\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b" +
		"\x06\bi\n\b\r\b\x0E\bj\x03\b\x03\b\x05\bo\n\b\x03\t\x03\t\x03\t\x03\t" +
		"\x03\n\x03\n\x03\v\x06\vx\n\v\r\v\x0E\vy\x03\v\x03\v\x06\v~\n\v\r\v\x0E" +
		"\v\x7F\x03\v\x05\v\x83\n\v\x03\f\x03\f\x06\f\x87\n\f\r\f\x0E\f\x88\x06" +
		"\f\x8B\n\f\r\f\x0E\f\x8C\x03\f\x03\f\x07\f\x91\n\f\f\f\x0E\f\x94\v\f\x03" +
		"\r\x03\r\x06\r\x98\n\r\r\r\x0E\r\x99\x06\r\x9C\n\r\r\r\x0E\r\x9D\x03\r" +
		"\x03\r\x07\r\xA2\n\r\f\r\x0E\r\xA5\v\r\x03\x0E\x06\x0E\xA8\n\x0E\r\x0E" +
		"\x0E\x0E\xA9\x03\x0E\x03\x0E\x07\x0E\xAE\n\x0E\f\x0E\x0E\x0E\xB1\v\x0E" +
		"\x03\x0F\x03\x0F\x03\x0F\x02\x02\x02\x10\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x02\x03\x04\x02\x0F\x0F\x13\x13\x02\xC7\x02$\x03\x02\x02\x02\x04" +
		"(\x03\x02\x02\x02\x067\x03\x02\x02\x02\b:\x03\x02\x02\x02\nE\x03\x02\x02" +
		"\x02\fN\x03\x02\x02\x02\x0En\x03\x02\x02\x02\x10p\x03\x02\x02\x02\x12" +
		"t\x03\x02\x02\x02\x14\x82\x03\x02\x02\x02\x16\x8A\x03\x02\x02\x02\x18" +
		"\x9B\x03\x02\x02\x02\x1A\xA7\x03\x02\x02\x02\x1C\xB2\x03\x02\x02\x02\x1E" +
		" \x05\x04\x03\x02\x1F\x1E\x03\x02\x02\x02\x1F \x03\x02\x02\x02 !\x03\x02" +
		"\x02\x02!#\x07\x11\x02\x02\"\x1F\x03\x02\x02\x02#&\x03\x02\x02\x02$\"" +
		"\x03\x02\x02\x02$%\x03\x02\x02\x02%\x03\x03\x02\x02\x02&$\x03\x02\x02" +
		"\x02\')\x05\x06\x04\x02(\'\x03\x02\x02\x02)*\x03\x02\x02\x02*(\x03\x02" +
		"\x02\x02*+\x03\x02\x02\x02+\x05\x03\x02\x02\x02,8\x05\n\x06\x02-8\x05" +
		"\f\x07\x02.8\x05\x0E\b\x02/8\x05\x1A\x0E\x0208\x05\x12\n\x0218\x05\b\x05" +
		"\x0228\x05\x14\v\x0238\x05\x10\t\x0248\x05\x18\r\x0258\x05\x16\f\x026" +
		"8\x05\x1C\x0F\x027,\x03\x02\x02\x027-\x03\x02\x02\x027.\x03\x02\x02\x02" +
		"7/\x03\x02\x02\x0270\x03\x02\x02\x0271\x03\x02\x02\x0272\x03\x02\x02\x02" +
		"73\x03\x02\x02\x0274\x03\x02\x02\x0275\x03\x02\x02\x0276\x03\x02\x02\x02" +
		"8\x07\x03\x02\x02\x029;\t\x02\x02\x02:9\x03\x02\x02\x02;<\x03\x02\x02" +
		"\x02<:\x03\x02\x02\x02<=\x03\x02\x02\x02=B\x03\x02\x02\x02>?\x07\x03\x02" +
		"\x02?A\x05\b\x05\x02@>\x03\x02\x02\x02AD\x03\x02\x02\x02B@\x03\x02\x02" +
		"\x02BC\x03\x02\x02\x02C\t\x03\x02\x02\x02DB\x03\x02\x02\x02EG\x07\x04" +
		"\x02\x02FH\x05\x06\x04\x02GF\x03\x02\x02\x02HI\x03\x02\x02\x02IG\x03\x02" +
		"\x02\x02IJ\x03\x02\x02\x02JL\x03\x02\x02\x02KM\x07\x04\x02\x02LK\x03\x02" +
		"\x02\x02LM\x03\x02\x02\x02M\v\x03\x02\x02\x02NO\x07\x13\x02\x02OQ\x07" +
		"\x13\x02\x02PR\x05\x06\x04\x02QP\x03\x02\x02\x02RS\x03\x02\x02\x02SQ\x03" +
		"\x02\x02\x02ST\x03\x02\x02\x02TU\x03\x02\x02\x02UV\x07\x13\x02\x02VW\x07" +
		"\x13\x02\x02W\r\x03\x02\x02\x02XY\x07\v\x02\x02Y`\x05\b\x05\x02Z\\\x07" +
		"\x05\x02\x02[]\x05\x06\x04\x02\\[\x03\x02\x02\x02]^\x03\x02\x02\x02^\\" +
		"\x03\x02\x02\x02^_\x03\x02\x02\x02_a\x03\x02\x02\x02`Z\x03\x02\x02\x02" +
		"`a\x03\x02\x02\x02ab\x03\x02\x02\x02bc\x07\f\x02\x02co\x03\x02\x02\x02" +
		"de\x07\r\x02\x02ef\x05\b\x05\x02fh\x07\x05\x02\x02gi\x05\x06\x04\x02h" +
		"g\x03\x02\x02\x02ij\x03\x02\x02\x02jh\x03\x02\x02\x02jk\x03\x02\x02\x02" +
		"kl\x03\x02\x02\x02lm\x07\x0E\x02\x02mo\x03\x02\x02\x02nX\x03\x02\x02\x02" +
		"nd\x03\x02\x02\x02o\x0F\x03\x02\x02\x02pq\x07\r\x02\x02qr\x05\b\x05\x02" +
		"rs\x07\x0E\x02\x02s\x11\x03\x02\x02\x02tu\x07\x06\x02\x02u\x13\x03\x02" +
		"\x02\x02vx\x07\x07\x02\x02wv\x03\x02\x02\x02xy\x03\x02\x02\x02yw\x03\x02" +
		"\x02\x02yz\x03\x02\x02\x02z{\x03\x02\x02\x02{\x83\x05\x06\x04\x02|~\x07" +
		"\n\x02\x02}|\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F}\x03\x02\x02\x02" +
		"\x7F\x80\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x83\x05\x06\x04\x02" +
		"\x82w\x03\x02\x02\x02\x82}\x03\x02\x02\x02\x83\x15\x03\x02\x02\x02\x84" +
		"\x86\x07\b\x02\x02\x85\x87\x05\x06\x04\x02\x86\x85\x03\x02\x02\x02\x87" +
		"\x88\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89" +
		"\x8B\x03\x02\x02\x02\x8A\x84\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C" +
		"\x8A\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E" +
		"\x92\x07\x05\x02\x02\x8F\x91\x07\x10\x02\x02\x90\x8F\x03\x02\x02\x02\x91" +
		"\x94\x03\x02\x02\x02\x92\x90\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93" +
		"\x17\x03\x02\x02\x02\x94\x92\x03\x02\x02\x02\x95\x97\x07\x05\x02\x02\x96" +
		"\x98\x05\x06\x04\x02\x97\x96\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99" +
		"\x97\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x9C\x03\x02\x02\x02\x9B" +
		"\x95\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02\x9D" +
		"\x9E\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\xA3\x07\x05\x02\x02\xA0" +
		"\xA2\x07\x10\x02\x02\xA1\xA0\x03\x02\x02\x02\xA2\xA5\x03\x02\x02\x02\xA3" +
		"\xA1\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\x19\x03\x02\x02\x02\xA5" +
		"\xA3\x03\x02\x02\x02\xA6\xA8\x07\t\x02\x02\xA7\xA6\x03\x02\x02\x02\xA8" +
		"\xA9\x03\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA" +
		"\xAB\x03\x02\x02\x02\xAB\xAF\x05\x06\x04\x02\xAC\xAE\x07\t\x02\x02\xAD" +
		"\xAC\x03\x02\x02\x02\xAE\xB1\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xAF" +
		"\xB0\x03\x02\x02\x02\xB0\x1B\x03\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB2" +
		"\xB3\x07\x12\x02\x02\xB3\x1D\x03\x02\x02\x02\x1A\x1F$*7<BILS^`jny\x7F" +
		"\x82\x88\x8C\x92\x99\x9D\xA3\xA9\xAF";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!creoleParser.__ATN) {
			creoleParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(creoleParser._serializedATN));
		}

		return creoleParser.__ATN;
	}

}

export class DocumentContext extends ParserRuleContext {
	public CR(): TerminalNode[];
	public CR(i: number): TerminalNode;
	public CR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(creoleParser.CR);
		} else {
			return this.getToken(creoleParser.CR, i);
		}
	}
	public line(): LineContext[];
	public line(i: number): LineContext;
	public line(i?: number): LineContext | LineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LineContext);
		} else {
			return this.getRuleContext(i, LineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return creoleParser.RULE_document; }
	// @Override
	public enterRule(listener: creoleListener): void {
		if (listener.enterDocument) {
			listener.enterDocument(this);
		}
	}
	// @Override
	public exitRule(listener: creoleListener): void {
		if (listener.exitDocument) {
			listener.exitDocument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: creoleVisitor<Result>): Result {
		if (visitor.visitDocument) {
			return visitor.visitDocument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LineContext extends ParserRuleContext {
	public markup(): MarkupContext[];
	public markup(i: number): MarkupContext;
	public markup(i?: number): MarkupContext | MarkupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MarkupContext);
		} else {
			return this.getRuleContext(i, MarkupContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return creoleParser.RULE_line; }
	// @Override
	public enterRule(listener: creoleListener): void {
		if (listener.enterLine) {
			listener.enterLine(this);
		}
	}
	// @Override
	public exitRule(listener: creoleListener): void {
		if (listener.exitLine) {
			listener.exitLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: creoleVisitor<Result>): Result {
		if (visitor.visitLine) {
			return visitor.visitLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MarkupContext extends ParserRuleContext {
	public bold(): BoldContext | undefined {
		return this.tryGetRuleContext(0, BoldContext);
	}
	public italics(): ItalicsContext | undefined {
		return this.tryGetRuleContext(0, ItalicsContext);
	}
	public href(): HrefContext | undefined {
		return this.tryGetRuleContext(0, HrefContext);
	}
	public title(): TitleContext | undefined {
		return this.tryGetRuleContext(0, TitleContext);
	}
	public hline(): HlineContext | undefined {
		return this.tryGetRuleContext(0, HlineContext);
	}
	public text(): TextContext | undefined {
		return this.tryGetRuleContext(0, TextContext);
	}
	public listitem(): ListitemContext | undefined {
		return this.tryGetRuleContext(0, ListitemContext);
	}
	public image(): ImageContext | undefined {
		return this.tryGetRuleContext(0, ImageContext);
	}
	public tablerow(): TablerowContext | undefined {
		return this.tryGetRuleContext(0, TablerowContext);
	}
	public tableheader(): TableheaderContext | undefined {
		return this.tryGetRuleContext(0, TableheaderContext);
	}
	public nowiki(): NowikiContext | undefined {
		return this.tryGetRuleContext(0, NowikiContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return creoleParser.RULE_markup; }
	// @Override
	public enterRule(listener: creoleListener): void {
		if (listener.enterMarkup) {
			listener.enterMarkup(this);
		}
	}
	// @Override
	public exitRule(listener: creoleListener): void {
		if (listener.exitMarkup) {
			listener.exitMarkup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: creoleVisitor<Result>): Result {
		if (visitor.visitMarkup) {
			return visitor.visitMarkup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TextContext extends ParserRuleContext {
	public text(): TextContext[];
	public text(i: number): TextContext;
	public text(i?: number): TextContext | TextContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TextContext);
		} else {
			return this.getRuleContext(i, TextContext);
		}
	}
	public TEXT(): TerminalNode[];
	public TEXT(i: number): TerminalNode;
	public TEXT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(creoleParser.TEXT);
		} else {
			return this.getToken(creoleParser.TEXT, i);
		}
	}
	public RSLASH(): TerminalNode[];
	public RSLASH(i: number): TerminalNode;
	public RSLASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(creoleParser.RSLASH);
		} else {
			return this.getToken(creoleParser.RSLASH, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return creoleParser.RULE_text; }
	// @Override
	public enterRule(listener: creoleListener): void {
		if (listener.enterText) {
			listener.enterText(this);
		}
	}
	// @Override
	public exitRule(listener: creoleListener): void {
		if (listener.exitText) {
			listener.exitText(this);
		}
	}
	// @Override
	public accept<Result>(visitor: creoleVisitor<Result>): Result {
		if (visitor.visitText) {
			return visitor.visitText(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BoldContext extends ParserRuleContext {
	public markup(): MarkupContext[];
	public markup(i: number): MarkupContext;
	public markup(i?: number): MarkupContext | MarkupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MarkupContext);
		} else {
			return this.getRuleContext(i, MarkupContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return creoleParser.RULE_bold; }
	// @Override
	public enterRule(listener: creoleListener): void {
		if (listener.enterBold) {
			listener.enterBold(this);
		}
	}
	// @Override
	public exitRule(listener: creoleListener): void {
		if (listener.exitBold) {
			listener.exitBold(this);
		}
	}
	// @Override
	public accept<Result>(visitor: creoleVisitor<Result>): Result {
		if (visitor.visitBold) {
			return visitor.visitBold(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ItalicsContext extends ParserRuleContext {
	public RSLASH(): TerminalNode[];
	public RSLASH(i: number): TerminalNode;
	public RSLASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(creoleParser.RSLASH);
		} else {
			return this.getToken(creoleParser.RSLASH, i);
		}
	}
	public markup(): MarkupContext[];
	public markup(i: number): MarkupContext;
	public markup(i?: number): MarkupContext | MarkupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MarkupContext);
		} else {
			return this.getRuleContext(i, MarkupContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return creoleParser.RULE_italics; }
	// @Override
	public enterRule(listener: creoleListener): void {
		if (listener.enterItalics) {
			listener.enterItalics(this);
		}
	}
	// @Override
	public exitRule(listener: creoleListener): void {
		if (listener.exitItalics) {
			listener.exitItalics(this);
		}
	}
	// @Override
	public accept<Result>(visitor: creoleVisitor<Result>): Result {
		if (visitor.visitItalics) {
			return visitor.visitItalics(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HrefContext extends ParserRuleContext {
	public LBRACKET(): TerminalNode | undefined { return this.tryGetToken(creoleParser.LBRACKET, 0); }
	public text(): TextContext {
		return this.getRuleContext(0, TextContext);
	}
	public RBRACKET(): TerminalNode | undefined { return this.tryGetToken(creoleParser.RBRACKET, 0); }
	public markup(): MarkupContext[];
	public markup(i: number): MarkupContext;
	public markup(i?: number): MarkupContext | MarkupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MarkupContext);
		} else {
			return this.getRuleContext(i, MarkupContext);
		}
	}
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(creoleParser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(creoleParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return creoleParser.RULE_href; }
	// @Override
	public enterRule(listener: creoleListener): void {
		if (listener.enterHref) {
			listener.enterHref(this);
		}
	}
	// @Override
	public exitRule(listener: creoleListener): void {
		if (listener.exitHref) {
			listener.exitHref(this);
		}
	}
	// @Override
	public accept<Result>(visitor: creoleVisitor<Result>): Result {
		if (visitor.visitHref) {
			return visitor.visitHref(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImageContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(creoleParser.LBRACE, 0); }
	public text(): TextContext {
		return this.getRuleContext(0, TextContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(creoleParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return creoleParser.RULE_image; }
	// @Override
	public enterRule(listener: creoleListener): void {
		if (listener.enterImage) {
			listener.enterImage(this);
		}
	}
	// @Override
	public exitRule(listener: creoleListener): void {
		if (listener.exitImage) {
			listener.exitImage(this);
		}
	}
	// @Override
	public accept<Result>(visitor: creoleVisitor<Result>): Result {
		if (visitor.visitImage) {
			return visitor.visitImage(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HlineContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return creoleParser.RULE_hline; }
	// @Override
	public enterRule(listener: creoleListener): void {
		if (listener.enterHline) {
			listener.enterHline(this);
		}
	}
	// @Override
	public exitRule(listener: creoleListener): void {
		if (listener.exitHline) {
			listener.exitHline(this);
		}
	}
	// @Override
	public accept<Result>(visitor: creoleVisitor<Result>): Result {
		if (visitor.visitHline) {
			return visitor.visitHline(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListitemContext extends ParserRuleContext {
	public markup(): MarkupContext | undefined {
		return this.tryGetRuleContext(0, MarkupContext);
	}
	public HASH(): TerminalNode[];
	public HASH(i: number): TerminalNode;
	public HASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(creoleParser.HASH);
		} else {
			return this.getToken(creoleParser.HASH, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return creoleParser.RULE_listitem; }
	// @Override
	public enterRule(listener: creoleListener): void {
		if (listener.enterListitem) {
			listener.enterListitem(this);
		}
	}
	// @Override
	public exitRule(listener: creoleListener): void {
		if (listener.exitListitem) {
			listener.exitListitem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: creoleVisitor<Result>): Result {
		if (visitor.visitListitem) {
			return visitor.visitListitem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableheaderContext extends ParserRuleContext {
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(creoleParser.WS);
		} else {
			return this.getToken(creoleParser.WS, i);
		}
	}
	public markup(): MarkupContext[];
	public markup(i: number): MarkupContext;
	public markup(i?: number): MarkupContext | MarkupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MarkupContext);
		} else {
			return this.getRuleContext(i, MarkupContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return creoleParser.RULE_tableheader; }
	// @Override
	public enterRule(listener: creoleListener): void {
		if (listener.enterTableheader) {
			listener.enterTableheader(this);
		}
	}
	// @Override
	public exitRule(listener: creoleListener): void {
		if (listener.exitTableheader) {
			listener.exitTableheader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: creoleVisitor<Result>): Result {
		if (visitor.visitTableheader) {
			return visitor.visitTableheader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablerowContext extends ParserRuleContext {
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(creoleParser.WS);
		} else {
			return this.getToken(creoleParser.WS, i);
		}
	}
	public markup(): MarkupContext[];
	public markup(i: number): MarkupContext;
	public markup(i?: number): MarkupContext | MarkupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MarkupContext);
		} else {
			return this.getRuleContext(i, MarkupContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return creoleParser.RULE_tablerow; }
	// @Override
	public enterRule(listener: creoleListener): void {
		if (listener.enterTablerow) {
			listener.enterTablerow(this);
		}
	}
	// @Override
	public exitRule(listener: creoleListener): void {
		if (listener.exitTablerow) {
			listener.exitTablerow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: creoleVisitor<Result>): Result {
		if (visitor.visitTablerow) {
			return visitor.visitTablerow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TitleContext extends ParserRuleContext {
	public markup(): MarkupContext {
		return this.getRuleContext(0, MarkupContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return creoleParser.RULE_title; }
	// @Override
	public enterRule(listener: creoleListener): void {
		if (listener.enterTitle) {
			listener.enterTitle(this);
		}
	}
	// @Override
	public exitRule(listener: creoleListener): void {
		if (listener.exitTitle) {
			listener.exitTitle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: creoleVisitor<Result>): Result {
		if (visitor.visitTitle) {
			return visitor.visitTitle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NowikiContext extends ParserRuleContext {
	public NOWIKI(): TerminalNode { return this.getToken(creoleParser.NOWIKI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return creoleParser.RULE_nowiki; }
	// @Override
	public enterRule(listener: creoleListener): void {
		if (listener.enterNowiki) {
			listener.enterNowiki(this);
		}
	}
	// @Override
	public exitRule(listener: creoleListener): void {
		if (listener.exitNowiki) {
			listener.exitNowiki(this);
		}
	}
	// @Override
	public accept<Result>(visitor: creoleVisitor<Result>): Result {
		if (visitor.visitNowiki) {
			return visitor.visitNowiki(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


