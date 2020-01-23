// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/swift-fin/src/main/antlr4/SwiftFinParser.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { SwiftFinParserListener } from "./SwiftFinParserListener";

export class SwiftFinParser extends Parser {
	public static readonly BLOCK1 = 1;
	public static readonly BLOCK2 = 2;
	public static readonly BLOCK3 = 3;
	public static readonly BLOCK4_A = 4;
	public static readonly BLOCK4_B = 5;
	public static readonly BLOCK5 = 6;
	public static readonly LBRACE = 7;
	public static readonly RBRACE = 8;
	public static readonly COLON = 9;
	public static readonly CRLF = 10;
	public static readonly M_COLON = 11;
	public static readonly M_VALUE = 12;
	public static readonly B4_END = 13;
	public static readonly B4_COLON = 14;
	public static readonly B4_CRLF = 15;
	public static readonly B4_VALUE = 16;
	public static readonly V_END = 17;
	public static readonly V_VALUE = 18;
	public static readonly RULE_messages = 0;
	public static readonly RULE_message = 1;
	public static readonly RULE_block1 = 2;
	public static readonly RULE_block2 = 3;
	public static readonly RULE_block3 = 4;
	public static readonly RULE_block4 = 5;
	public static readonly RULE_block4Item = 6;
	public static readonly RULE_block4Field = 7;
	public static readonly RULE_block4Line = 8;
	public static readonly RULE_block5 = 9;
	public static readonly RULE_value = 10;
	public static readonly RULE_map = 11;
	public static readonly RULE_keyValue = 12;
	public static readonly RULE_mKey = 13;
	public static readonly RULE_mValue = 14;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"messages", "message", "block1", "block2", "block3", "block4", "block4Item", 
		"block4Field", "block4Line", "block5", "value", "map", "keyValue", "mKey", 
		"mValue",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "BLOCK1", "BLOCK2", "BLOCK3", "BLOCK4_A", "BLOCK4_B", "BLOCK5", 
		"LBRACE", "RBRACE", "COLON", "CRLF", "M_COLON", "M_VALUE", "B4_END", "B4_COLON", 
		"B4_CRLF", "B4_VALUE", "V_END", "V_VALUE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SwiftFinParser._LITERAL_NAMES, SwiftFinParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SwiftFinParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "SwiftFinParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return SwiftFinParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SwiftFinParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SwiftFinParser._ATN, this);
	}
	// @RuleVersion(0)
	public messages(): MessagesContext {
		let _localctx: MessagesContext = new MessagesContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SwiftFinParser.RULE_messages);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 31;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 30;
				this.message();
				}
				}
				this.state = 33;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SwiftFinParser.BLOCK1);
			this.state = 35;
			this.match(SwiftFinParser.EOF);
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
	public message(): MessageContext {
		let _localctx: MessageContext = new MessageContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SwiftFinParser.RULE_message);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 37;
			this.block1();
			this.state = 39;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SwiftFinParser.BLOCK2) {
				{
				this.state = 38;
				this.block2();
				}
			}

			this.state = 42;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SwiftFinParser.BLOCK3) {
				{
				this.state = 41;
				this.block3();
				}
			}

			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SwiftFinParser.BLOCK4_A || _la === SwiftFinParser.BLOCK4_B) {
				{
				this.state = 44;
				this.block4();
				}
			}

			this.state = 48;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SwiftFinParser.BLOCK5) {
				{
				this.state = 47;
				this.block5();
				}
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
	public block1(): Block1Context {
		let _localctx: Block1Context = new Block1Context(this._ctx, this.state);
		this.enterRule(_localctx, 4, SwiftFinParser.RULE_block1);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 50;
			this.match(SwiftFinParser.BLOCK1);
			this.state = 51;
			this.value();
			this.state = 52;
			this.match(SwiftFinParser.V_END);
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
	public block2(): Block2Context {
		let _localctx: Block2Context = new Block2Context(this._ctx, this.state);
		this.enterRule(_localctx, 6, SwiftFinParser.RULE_block2);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 54;
			this.match(SwiftFinParser.BLOCK2);
			this.state = 55;
			this.value();
			this.state = 56;
			this.match(SwiftFinParser.V_END);
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
	public block3(): Block3Context {
		let _localctx: Block3Context = new Block3Context(this._ctx, this.state);
		this.enterRule(_localctx, 8, SwiftFinParser.RULE_block3);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 58;
			this.match(SwiftFinParser.BLOCK3);
			this.state = 59;
			this.map();
			this.state = 60;
			this.match(SwiftFinParser.RBRACE);
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
	public block4(): Block4Context {
		let _localctx: Block4Context = new Block4Context(this._ctx, this.state);
		this.enterRule(_localctx, 10, SwiftFinParser.RULE_block4);
		let _la: number;
		try {
			this.state = 74;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftFinParser.BLOCK4_A:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 62;
				this.match(SwiftFinParser.BLOCK4_A);
				this.state = 64;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 63;
					this.block4Item();
					}
					}
					this.state = 66;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === SwiftFinParser.B4_COLON);
				this.state = 68;
				this.match(SwiftFinParser.B4_END);
				}
				break;
			case SwiftFinParser.BLOCK4_B:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 70;
				this.match(SwiftFinParser.BLOCK4_B);
				this.state = 71;
				this.map();
				this.state = 72;
				this.match(SwiftFinParser.RBRACE);
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
	public block4Item(): Block4ItemContext {
		let _localctx: Block4ItemContext = new Block4ItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SwiftFinParser.RULE_block4Item);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 76;
			this.match(SwiftFinParser.B4_COLON);
			this.state = 77;
			this.block4Field();
			this.state = 78;
			this.match(SwiftFinParser.B4_COLON);
			this.state = 80;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 79;
					this.block4Line();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 82;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public block4Field(): Block4FieldContext {
		let _localctx: Block4FieldContext = new Block4FieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SwiftFinParser.RULE_block4Field);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 85;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 84;
				this.match(SwiftFinParser.B4_VALUE);
				}
				}
				this.state = 87;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SwiftFinParser.B4_VALUE);
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
	public block4Line(): Block4LineContext {
		let _localctx: Block4LineContext = new Block4LineContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SwiftFinParser.RULE_block4Line);
		let _la: number;
		try {
			let _alt: number;
			this.state = 138;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 90;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 89;
					this.match(SwiftFinParser.B4_VALUE);
					}
					}
					this.state = 92;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === SwiftFinParser.B4_VALUE);
				this.state = 94;
				this.match(SwiftFinParser.B4_CRLF);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 96;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 95;
					this.match(SwiftFinParser.B4_VALUE);
					}
					}
					this.state = 98;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === SwiftFinParser.B4_VALUE);
				this.state = 100;
				this.match(SwiftFinParser.B4_COLON);
				this.state = 104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SwiftFinParser.B4_COLON || _la === SwiftFinParser.B4_VALUE) {
					{
					{
					this.state = 101;
					_la = this._input.LA(1);
					if (!(_la === SwiftFinParser.B4_COLON || _la === SwiftFinParser.B4_VALUE)) {
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
					this.state = 106;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 107;
				this.match(SwiftFinParser.B4_CRLF);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 108;
				this.match(SwiftFinParser.B4_COLON);
				this.state = 110;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 109;
						this.match(SwiftFinParser.B4_COLON);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 112;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SwiftFinParser.B4_COLON || _la === SwiftFinParser.B4_VALUE) {
					{
					{
					this.state = 114;
					_la = this._input.LA(1);
					if (!(_la === SwiftFinParser.B4_COLON || _la === SwiftFinParser.B4_VALUE)) {
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
					this.state = 119;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 120;
				this.match(SwiftFinParser.B4_CRLF);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 122;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 121;
					this.match(SwiftFinParser.B4_COLON);
					}
					}
					this.state = 124;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === SwiftFinParser.B4_COLON);
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 126;
					this.match(SwiftFinParser.B4_VALUE);
					}
					}
					this.state = 129;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === SwiftFinParser.B4_VALUE);
				this.state = 134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SwiftFinParser.B4_COLON) {
					{
					{
					this.state = 131;
					this.match(SwiftFinParser.B4_COLON);
					}
					}
					this.state = 136;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 137;
				this.match(SwiftFinParser.B4_CRLF);
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
	public block5(): Block5Context {
		let _localctx: Block5Context = new Block5Context(this._ctx, this.state);
		this.enterRule(_localctx, 18, SwiftFinParser.RULE_block5);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this.match(SwiftFinParser.BLOCK5);
			this.state = 141;
			this.map();
			this.state = 142;
			this.match(SwiftFinParser.RBRACE);
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
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SwiftFinParser.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 144;
				this.match(SwiftFinParser.V_VALUE);
				}
				}
				this.state = 147;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SwiftFinParser.V_VALUE);
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
	public map(): MapContext {
		let _localctx: MapContext = new MapContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SwiftFinParser.RULE_map);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 150;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 149;
				this.keyValue();
				}
				}
				this.state = 152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SwiftFinParser.LBRACE);
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
	public keyValue(): KeyValueContext {
		let _localctx: KeyValueContext = new KeyValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SwiftFinParser.RULE_keyValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			this.match(SwiftFinParser.LBRACE);
			this.state = 155;
			this.mKey();
			this.state = 156;
			this.match(SwiftFinParser.M_COLON);
			this.state = 158;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SwiftFinParser.M_COLON || _la === SwiftFinParser.M_VALUE) {
				{
				this.state = 157;
				this.mValue();
				}
			}

			this.state = 160;
			this.match(SwiftFinParser.RBRACE);
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
	public mKey(): MKeyContext {
		let _localctx: MKeyContext = new MKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, SwiftFinParser.RULE_mKey);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 162;
				this.match(SwiftFinParser.M_VALUE);
				}
				}
				this.state = 165;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SwiftFinParser.M_VALUE);
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
	public mValue(): MValueContext {
		let _localctx: MValueContext = new MValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SwiftFinParser.RULE_mValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 168;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 167;
				_la = this._input.LA(1);
				if (!(_la === SwiftFinParser.M_COLON || _la === SwiftFinParser.M_VALUE)) {
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
				this.state = 170;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SwiftFinParser.M_COLON || _la === SwiftFinParser.M_VALUE);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x14\xAF\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x03\x02\x06\x02\"\n\x02\r\x02\x0E" +
		"\x02#\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03*\n\x03\x03\x03\x05\x03-" +
		"\n\x03\x03\x03\x05\x030\n\x03\x03\x03\x05\x033\n\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x06\x07C\n\x07\r\x07\x0E\x07D\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x05\x07M\n\x07\x03\b\x03\b\x03\b\x03\b\x06" +
		"\bS\n\b\r\b\x0E\bT\x03\t\x06\tX\n\t\r\t\x0E\tY\x03\n\x06\n]\n\n\r\n\x0E" +
		"\n^\x03\n\x03\n\x06\nc\n\n\r\n\x0E\nd\x03\n\x03\n\x07\ni\n\n\f\n\x0E\n" +
		"l\v\n\x03\n\x03\n\x03\n\x06\nq\n\n\r\n\x0E\nr\x03\n\x07\nv\n\n\f\n\x0E" +
		"\ny\v\n\x03\n\x03\n\x06\n}\n\n\r\n\x0E\n~\x03\n\x06\n\x82\n\n\r\n\x0E" +
		"\n\x83\x03\n\x07\n\x87\n\n\f\n\x0E\n\x8A\v\n\x03\n\x05\n\x8D\n\n\x03\v" +
		"\x03\v\x03\v\x03\v\x03\f\x06\f\x94\n\f\r\f\x0E\f\x95\x03\r\x06\r\x99\n" +
		"\r\r\r\x0E\r\x9A\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xA1\n\x0E\x03" +
		"\x0E\x03\x0E\x03\x0F\x06\x0F\xA6\n\x0F\r\x0F\x0E\x0F\xA7\x03\x10\x06\x10" +
		"\xAB\n\x10\r\x10\x0E\x10\xAC\x03\x10\x02\x02\x02\x11\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x1C\x02\x1E\x02\x02\x04\x04\x02\x10\x10\x12\x12\x03\x02\r\x0E" +
		"\x02\xB8\x02!\x03\x02\x02\x02\x04\'\x03\x02\x02\x02\x064\x03\x02\x02\x02" +
		"\b8\x03\x02\x02\x02\n<\x03\x02\x02\x02\fL\x03\x02\x02\x02\x0EN\x03\x02" +
		"\x02\x02\x10W\x03\x02\x02\x02\x12\x8C\x03\x02\x02\x02\x14\x8E\x03\x02" +
		"\x02\x02\x16\x93\x03\x02\x02\x02\x18\x98\x03\x02\x02\x02\x1A\x9C\x03\x02" +
		"\x02\x02\x1C\xA5\x03\x02\x02\x02\x1E\xAA\x03\x02\x02\x02 \"\x05\x04\x03" +
		"\x02! \x03\x02\x02\x02\"#\x03\x02\x02\x02#!\x03\x02\x02\x02#$\x03\x02" +
		"\x02\x02$%\x03\x02\x02\x02%&\x07\x02\x02\x03&\x03\x03\x02\x02\x02\')\x05" +
		"\x06\x04\x02(*\x05\b\x05\x02)(\x03\x02\x02\x02)*\x03\x02\x02\x02*,\x03" +
		"\x02\x02\x02+-\x05\n\x06\x02,+\x03\x02\x02\x02,-\x03\x02\x02\x02-/\x03" +
		"\x02\x02\x02.0\x05\f\x07\x02/.\x03\x02\x02\x02/0\x03\x02\x02\x0202\x03" +
		"\x02\x02\x0213\x05\x14\v\x0221\x03\x02\x02\x0223\x03\x02\x02\x023\x05" +
		"\x03\x02\x02\x0245\x07\x03\x02\x0256\x05\x16\f\x0267\x07\x13\x02\x027" +
		"\x07\x03\x02\x02\x0289\x07\x04\x02\x029:\x05\x16\f\x02:;\x07\x13\x02\x02" +
		";\t\x03\x02\x02\x02<=\x07\x05\x02\x02=>\x05\x18\r\x02>?\x07\n\x02\x02" +
		"?\v\x03\x02\x02\x02@B\x07\x06\x02\x02AC\x05\x0E\b\x02BA\x03\x02\x02\x02" +
		"CD\x03\x02\x02\x02DB\x03\x02\x02\x02DE\x03\x02\x02\x02EF\x03\x02\x02\x02" +
		"FG\x07\x0F\x02\x02GM\x03\x02\x02\x02HI\x07\x07\x02\x02IJ\x05\x18\r\x02" +
		"JK\x07\n\x02\x02KM\x03\x02\x02\x02L@\x03\x02\x02\x02LH\x03\x02\x02\x02" +
		"M\r\x03\x02\x02\x02NO\x07\x10\x02\x02OP\x05\x10\t\x02PR\x07\x10\x02\x02" +
		"QS\x05\x12\n\x02RQ\x03\x02\x02\x02ST\x03\x02\x02\x02TR\x03\x02\x02\x02" +
		"TU\x03\x02\x02\x02U\x0F\x03\x02\x02\x02VX\x07\x12\x02\x02WV\x03\x02\x02" +
		"\x02XY\x03\x02\x02\x02YW\x03\x02\x02\x02YZ\x03\x02\x02\x02Z\x11\x03\x02" +
		"\x02\x02[]\x07\x12\x02\x02\\[\x03\x02\x02\x02]^\x03\x02\x02\x02^\\\x03" +
		"\x02\x02\x02^_\x03\x02\x02\x02_`\x03\x02\x02\x02`\x8D\x07\x11\x02\x02" +
		"ac\x07\x12\x02\x02ba\x03\x02\x02\x02cd\x03\x02\x02\x02db\x03\x02\x02\x02" +
		"de\x03\x02\x02\x02ef\x03\x02\x02\x02fj\x07\x10\x02\x02gi\t\x02\x02\x02" +
		"hg\x03\x02\x02\x02il\x03\x02\x02\x02jh\x03\x02\x02\x02jk\x03\x02\x02\x02" +
		"km\x03\x02\x02\x02lj\x03\x02\x02\x02m\x8D\x07\x11\x02\x02np\x07\x10\x02" +
		"\x02oq\x07\x10\x02\x02po\x03\x02\x02\x02qr\x03\x02\x02\x02rp\x03\x02\x02" +
		"\x02rs\x03\x02\x02\x02sw\x03\x02\x02\x02tv\t\x02\x02\x02ut\x03\x02\x02" +
		"\x02vy\x03\x02\x02\x02wu\x03\x02\x02\x02wx\x03\x02\x02\x02xz\x03\x02\x02" +
		"\x02yw\x03\x02\x02\x02z\x8D\x07\x11\x02\x02{}\x07\x10\x02\x02|{\x03\x02" +
		"\x02\x02}~\x03\x02\x02\x02~|\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F" +
		"\x81\x03\x02\x02\x02\x80\x82\x07\x12\x02\x02\x81\x80\x03\x02\x02\x02\x82" +
		"\x83\x03\x02\x02\x02\x83\x81\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84" +
		"\x88\x03\x02\x02\x02\x85\x87\x07\x10\x02\x02\x86\x85\x03\x02\x02\x02\x87" +
		"\x8A\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89" +
		"\x8B\x03\x02\x02\x02\x8A\x88\x03\x02\x02\x02\x8B\x8D\x07\x11\x02\x02\x8C" +
		"\\\x03\x02\x02\x02\x8Cb\x03\x02\x02\x02\x8Cn\x03\x02\x02\x02\x8C|\x03" +
		"\x02\x02\x02\x8D\x13\x03\x02\x02\x02\x8E\x8F\x07\b\x02\x02\x8F\x90\x05" +
		"\x18\r\x02\x90\x91\x07\n\x02\x02\x91\x15\x03\x02\x02\x02\x92\x94\x07\x14" +
		"\x02\x02\x93\x92\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x93\x03\x02" +
		"\x02\x02\x95\x96\x03\x02\x02\x02\x96\x17\x03\x02\x02\x02\x97\x99\x05\x1A" +
		"\x0E\x02\x98\x97\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x98\x03\x02" +
		"\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x19\x03\x02\x02\x02\x9C\x9D\x07\t" +
		"\x02\x02\x9D\x9E\x05\x1C\x0F\x02\x9E\xA0\x07\r\x02\x02\x9F\xA1\x05\x1E" +
		"\x10\x02\xA0\x9F\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA2\x03\x02" +
		"\x02\x02\xA2\xA3\x07\n\x02\x02\xA3\x1B\x03\x02\x02\x02\xA4\xA6\x07\x0E" +
		"\x02\x02\xA5\xA4\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xA5\x03\x02" +
		"\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\x1D\x03\x02\x02\x02\xA9\xAB\t\x03" +
		"\x02\x02\xAA\xA9\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAA\x03\x02" +
		"\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\x1F\x03\x02\x02\x02\x19#),/2DLTY" +
		"^djrw~\x83\x88\x8C\x95\x9A\xA0\xA7\xAC";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SwiftFinParser.__ATN) {
			SwiftFinParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SwiftFinParser._serializedATN));
		}

		return SwiftFinParser.__ATN;
	}

}

export class MessagesContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(SwiftFinParser.EOF, 0); }
	public message(): MessageContext[];
	public message(i: number): MessageContext;
	public message(i?: number): MessageContext | MessageContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MessageContext);
		} else {
			return this.getRuleContext(i, MessageContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SwiftFinParser.RULE_messages; }
	// @Override
	public enterRule(listener: SwiftFinParserListener): void {
		if (listener.enterMessages) {
			listener.enterMessages(this);
		}
	}
	// @Override
	public exitRule(listener: SwiftFinParserListener): void {
		if (listener.exitMessages) {
			listener.exitMessages(this);
		}
	}
}


export class MessageContext extends ParserRuleContext {
	public block1(): Block1Context {
		return this.getRuleContext(0, Block1Context);
	}
	public block2(): Block2Context | undefined {
		return this.tryGetRuleContext(0, Block2Context);
	}
	public block3(): Block3Context | undefined {
		return this.tryGetRuleContext(0, Block3Context);
	}
	public block4(): Block4Context | undefined {
		return this.tryGetRuleContext(0, Block4Context);
	}
	public block5(): Block5Context | undefined {
		return this.tryGetRuleContext(0, Block5Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SwiftFinParser.RULE_message; }
	// @Override
	public enterRule(listener: SwiftFinParserListener): void {
		if (listener.enterMessage) {
			listener.enterMessage(this);
		}
	}
	// @Override
	public exitRule(listener: SwiftFinParserListener): void {
		if (listener.exitMessage) {
			listener.exitMessage(this);
		}
	}
}


export class Block1Context extends ParserRuleContext {
	public BLOCK1(): TerminalNode { return this.getToken(SwiftFinParser.BLOCK1, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	public V_END(): TerminalNode { return this.getToken(SwiftFinParser.V_END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SwiftFinParser.RULE_block1; }
	// @Override
	public enterRule(listener: SwiftFinParserListener): void {
		if (listener.enterBlock1) {
			listener.enterBlock1(this);
		}
	}
	// @Override
	public exitRule(listener: SwiftFinParserListener): void {
		if (listener.exitBlock1) {
			listener.exitBlock1(this);
		}
	}
}


export class Block2Context extends ParserRuleContext {
	public BLOCK2(): TerminalNode { return this.getToken(SwiftFinParser.BLOCK2, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	public V_END(): TerminalNode { return this.getToken(SwiftFinParser.V_END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SwiftFinParser.RULE_block2; }
	// @Override
	public enterRule(listener: SwiftFinParserListener): void {
		if (listener.enterBlock2) {
			listener.enterBlock2(this);
		}
	}
	// @Override
	public exitRule(listener: SwiftFinParserListener): void {
		if (listener.exitBlock2) {
			listener.exitBlock2(this);
		}
	}
}


export class Block3Context extends ParserRuleContext {
	public BLOCK3(): TerminalNode { return this.getToken(SwiftFinParser.BLOCK3, 0); }
	public map(): MapContext {
		return this.getRuleContext(0, MapContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(SwiftFinParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SwiftFinParser.RULE_block3; }
	// @Override
	public enterRule(listener: SwiftFinParserListener): void {
		if (listener.enterBlock3) {
			listener.enterBlock3(this);
		}
	}
	// @Override
	public exitRule(listener: SwiftFinParserListener): void {
		if (listener.exitBlock3) {
			listener.exitBlock3(this);
		}
	}
}


export class Block4Context extends ParserRuleContext {
	public BLOCK4_A(): TerminalNode | undefined { return this.tryGetToken(SwiftFinParser.BLOCK4_A, 0); }
	public B4_END(): TerminalNode | undefined { return this.tryGetToken(SwiftFinParser.B4_END, 0); }
	public block4Item(): Block4ItemContext[];
	public block4Item(i: number): Block4ItemContext;
	public block4Item(i?: number): Block4ItemContext | Block4ItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Block4ItemContext);
		} else {
			return this.getRuleContext(i, Block4ItemContext);
		}
	}
	public BLOCK4_B(): TerminalNode | undefined { return this.tryGetToken(SwiftFinParser.BLOCK4_B, 0); }
	public map(): MapContext | undefined {
		return this.tryGetRuleContext(0, MapContext);
	}
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(SwiftFinParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SwiftFinParser.RULE_block4; }
	// @Override
	public enterRule(listener: SwiftFinParserListener): void {
		if (listener.enterBlock4) {
			listener.enterBlock4(this);
		}
	}
	// @Override
	public exitRule(listener: SwiftFinParserListener): void {
		if (listener.exitBlock4) {
			listener.exitBlock4(this);
		}
	}
}


export class Block4ItemContext extends ParserRuleContext {
	public B4_COLON(): TerminalNode[];
	public B4_COLON(i: number): TerminalNode;
	public B4_COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SwiftFinParser.B4_COLON);
		} else {
			return this.getToken(SwiftFinParser.B4_COLON, i);
		}
	}
	public block4Field(): Block4FieldContext {
		return this.getRuleContext(0, Block4FieldContext);
	}
	public block4Line(): Block4LineContext[];
	public block4Line(i: number): Block4LineContext;
	public block4Line(i?: number): Block4LineContext | Block4LineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Block4LineContext);
		} else {
			return this.getRuleContext(i, Block4LineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SwiftFinParser.RULE_block4Item; }
	// @Override
	public enterRule(listener: SwiftFinParserListener): void {
		if (listener.enterBlock4Item) {
			listener.enterBlock4Item(this);
		}
	}
	// @Override
	public exitRule(listener: SwiftFinParserListener): void {
		if (listener.exitBlock4Item) {
			listener.exitBlock4Item(this);
		}
	}
}


export class Block4FieldContext extends ParserRuleContext {
	public B4_VALUE(): TerminalNode[];
	public B4_VALUE(i: number): TerminalNode;
	public B4_VALUE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SwiftFinParser.B4_VALUE);
		} else {
			return this.getToken(SwiftFinParser.B4_VALUE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SwiftFinParser.RULE_block4Field; }
	// @Override
	public enterRule(listener: SwiftFinParserListener): void {
		if (listener.enterBlock4Field) {
			listener.enterBlock4Field(this);
		}
	}
	// @Override
	public exitRule(listener: SwiftFinParserListener): void {
		if (listener.exitBlock4Field) {
			listener.exitBlock4Field(this);
		}
	}
}


export class Block4LineContext extends ParserRuleContext {
	public B4_CRLF(): TerminalNode { return this.getToken(SwiftFinParser.B4_CRLF, 0); }
	public B4_VALUE(): TerminalNode[];
	public B4_VALUE(i: number): TerminalNode;
	public B4_VALUE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SwiftFinParser.B4_VALUE);
		} else {
			return this.getToken(SwiftFinParser.B4_VALUE, i);
		}
	}
	public B4_COLON(): TerminalNode[];
	public B4_COLON(i: number): TerminalNode;
	public B4_COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SwiftFinParser.B4_COLON);
		} else {
			return this.getToken(SwiftFinParser.B4_COLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SwiftFinParser.RULE_block4Line; }
	// @Override
	public enterRule(listener: SwiftFinParserListener): void {
		if (listener.enterBlock4Line) {
			listener.enterBlock4Line(this);
		}
	}
	// @Override
	public exitRule(listener: SwiftFinParserListener): void {
		if (listener.exitBlock4Line) {
			listener.exitBlock4Line(this);
		}
	}
}


export class Block5Context extends ParserRuleContext {
	public BLOCK5(): TerminalNode { return this.getToken(SwiftFinParser.BLOCK5, 0); }
	public map(): MapContext {
		return this.getRuleContext(0, MapContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(SwiftFinParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SwiftFinParser.RULE_block5; }
	// @Override
	public enterRule(listener: SwiftFinParserListener): void {
		if (listener.enterBlock5) {
			listener.enterBlock5(this);
		}
	}
	// @Override
	public exitRule(listener: SwiftFinParserListener): void {
		if (listener.exitBlock5) {
			listener.exitBlock5(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public V_VALUE(): TerminalNode[];
	public V_VALUE(i: number): TerminalNode;
	public V_VALUE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SwiftFinParser.V_VALUE);
		} else {
			return this.getToken(SwiftFinParser.V_VALUE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SwiftFinParser.RULE_value; }
	// @Override
	public enterRule(listener: SwiftFinParserListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: SwiftFinParserListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
}


export class MapContext extends ParserRuleContext {
	public keyValue(): KeyValueContext[];
	public keyValue(i: number): KeyValueContext;
	public keyValue(i?: number): KeyValueContext | KeyValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyValueContext);
		} else {
			return this.getRuleContext(i, KeyValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SwiftFinParser.RULE_map; }
	// @Override
	public enterRule(listener: SwiftFinParserListener): void {
		if (listener.enterMap) {
			listener.enterMap(this);
		}
	}
	// @Override
	public exitRule(listener: SwiftFinParserListener): void {
		if (listener.exitMap) {
			listener.exitMap(this);
		}
	}
}


export class KeyValueContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(SwiftFinParser.LBRACE, 0); }
	public mKey(): MKeyContext {
		return this.getRuleContext(0, MKeyContext);
	}
	public M_COLON(): TerminalNode { return this.getToken(SwiftFinParser.M_COLON, 0); }
	public RBRACE(): TerminalNode { return this.getToken(SwiftFinParser.RBRACE, 0); }
	public mValue(): MValueContext | undefined {
		return this.tryGetRuleContext(0, MValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SwiftFinParser.RULE_keyValue; }
	// @Override
	public enterRule(listener: SwiftFinParserListener): void {
		if (listener.enterKeyValue) {
			listener.enterKeyValue(this);
		}
	}
	// @Override
	public exitRule(listener: SwiftFinParserListener): void {
		if (listener.exitKeyValue) {
			listener.exitKeyValue(this);
		}
	}
}


export class MKeyContext extends ParserRuleContext {
	public M_VALUE(): TerminalNode[];
	public M_VALUE(i: number): TerminalNode;
	public M_VALUE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SwiftFinParser.M_VALUE);
		} else {
			return this.getToken(SwiftFinParser.M_VALUE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SwiftFinParser.RULE_mKey; }
	// @Override
	public enterRule(listener: SwiftFinParserListener): void {
		if (listener.enterMKey) {
			listener.enterMKey(this);
		}
	}
	// @Override
	public exitRule(listener: SwiftFinParserListener): void {
		if (listener.exitMKey) {
			listener.exitMKey(this);
		}
	}
}


export class MValueContext extends ParserRuleContext {
	public M_VALUE(): TerminalNode[];
	public M_VALUE(i: number): TerminalNode;
	public M_VALUE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SwiftFinParser.M_VALUE);
		} else {
			return this.getToken(SwiftFinParser.M_VALUE, i);
		}
	}
	public M_COLON(): TerminalNode[];
	public M_COLON(i: number): TerminalNode;
	public M_COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SwiftFinParser.M_COLON);
		} else {
			return this.getToken(SwiftFinParser.M_COLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SwiftFinParser.RULE_mValue; }
	// @Override
	public enterRule(listener: SwiftFinParserListener): void {
		if (listener.enterMValue) {
			listener.enterMValue(this);
		}
	}
	// @Override
	public exitRule(listener: SwiftFinParserListener): void {
		if (listener.exitMValue) {
			listener.exitMValue(this);
		}
	}
}


