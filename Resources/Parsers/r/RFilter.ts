// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/r/RFilter.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { RFilterListener } from "./RFilterListener";
import { RFilterVisitor } from "./RFilterVisitor";


export class RFilter extends Parser {
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
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly HEX = 56;
	public static readonly INT = 57;
	public static readonly FLOAT = 58;
	public static readonly COMPLEX = 59;
	public static readonly STRING = 60;
	public static readonly ID = 61;
	public static readonly USER_OP = 62;
	public static readonly NL = 63;
	public static readonly WS = 64;
	public static readonly RULE_stream = 0;
	public static readonly RULE_eat = 1;
	public static readonly RULE_elem = 2;
	public static readonly RULE_atom = 3;
	public static readonly RULE_op = 4;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"stream", "eat", "elem", "atom", "op",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "'[['", "']'", "'['", "'::'", "':::'", "'$'", "'@'", 
		"'^'", "'-'", "'+'", "':'", "'*'", "'/'", "'>'", "'>='", "'<'", "'<='", 
		"'=='", "'!='", "'!'", "'&'", "'&&'", "'|'", "'||'", "'~'", "'<-'", "'<<-'", 
		"'='", "'->'", "'->>'", "':='", "'function'", "'('", "')'", "'{'", "'}'", 
		"'if'", "'else'", "'for'", "'in'", "'while'", "'repeat'", "'?'", "'next'", 
		"'break'", "'NULL'", "'NA'", "'Inf'", "'NaN'", "'TRUE'", "'FALSE'", "','", 
		"'...'", "'.'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"HEX", "INT", "FLOAT", "COMPLEX", "STRING", "ID", "USER_OP", "NL", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(RFilter._LITERAL_NAMES, RFilter._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return RFilter.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "RFilter.g4"; }

	// @Override
	public get ruleNames(): string[] { return RFilter.ruleNames; }

	// @Override
	public get serializedATN(): string { return RFilter._serializedATN; }


	protected int curlies = 0;

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(RFilter._ATN, this);
	}
	// @RuleVersion(0)
	public stream(): StreamContext {
		let _localctx: StreamContext = new StreamContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, RFilter.RULE_stream);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 15;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RFilter.T__0) | (1 << RFilter.T__1) | (1 << RFilter.T__3) | (1 << RFilter.T__4) | (1 << RFilter.T__5) | (1 << RFilter.T__6) | (1 << RFilter.T__7) | (1 << RFilter.T__8) | (1 << RFilter.T__9) | (1 << RFilter.T__10) | (1 << RFilter.T__11) | (1 << RFilter.T__12) | (1 << RFilter.T__13) | (1 << RFilter.T__14) | (1 << RFilter.T__15) | (1 << RFilter.T__16) | (1 << RFilter.T__17) | (1 << RFilter.T__18) | (1 << RFilter.T__19) | (1 << RFilter.T__20) | (1 << RFilter.T__21) | (1 << RFilter.T__22) | (1 << RFilter.T__23) | (1 << RFilter.T__24) | (1 << RFilter.T__25) | (1 << RFilter.T__26) | (1 << RFilter.T__28) | (1 << RFilter.T__29))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (RFilter.T__32 - 33)) | (1 << (RFilter.T__33 - 33)) | (1 << (RFilter.T__35 - 33)) | (1 << (RFilter.T__37 - 33)) | (1 << (RFilter.T__38 - 33)) | (1 << (RFilter.T__39 - 33)) | (1 << (RFilter.T__40 - 33)) | (1 << (RFilter.T__41 - 33)) | (1 << (RFilter.T__42 - 33)) | (1 << (RFilter.T__43 - 33)) | (1 << (RFilter.T__44 - 33)) | (1 << (RFilter.T__45 - 33)) | (1 << (RFilter.T__46 - 33)) | (1 << (RFilter.T__47 - 33)) | (1 << (RFilter.T__48 - 33)) | (1 << (RFilter.T__49 - 33)) | (1 << (RFilter.T__50 - 33)) | (1 << (RFilter.T__51 - 33)) | (1 << (RFilter.T__52 - 33)) | (1 << (RFilter.T__53 - 33)) | (1 << (RFilter.HEX - 33)) | (1 << (RFilter.INT - 33)) | (1 << (RFilter.FLOAT - 33)) | (1 << (RFilter.COMPLEX - 33)) | (1 << (RFilter.STRING - 33)) | (1 << (RFilter.ID - 33)) | (1 << (RFilter.USER_OP - 33)) | (1 << (RFilter.NL - 33)))) !== 0)) {
				{
				this.state = 13;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RFilter.T__1:
				case RFilter.T__3:
				case RFilter.T__4:
				case RFilter.T__5:
				case RFilter.T__6:
				case RFilter.T__7:
				case RFilter.T__8:
				case RFilter.T__9:
				case RFilter.T__10:
				case RFilter.T__11:
				case RFilter.T__12:
				case RFilter.T__13:
				case RFilter.T__14:
				case RFilter.T__15:
				case RFilter.T__16:
				case RFilter.T__17:
				case RFilter.T__18:
				case RFilter.T__19:
				case RFilter.T__20:
				case RFilter.T__21:
				case RFilter.T__22:
				case RFilter.T__23:
				case RFilter.T__24:
				case RFilter.T__25:
				case RFilter.T__26:
				case RFilter.T__28:
				case RFilter.T__29:
				case RFilter.T__32:
				case RFilter.T__33:
				case RFilter.T__35:
				case RFilter.T__37:
				case RFilter.T__38:
				case RFilter.T__39:
				case RFilter.T__40:
				case RFilter.T__41:
				case RFilter.T__42:
				case RFilter.T__43:
				case RFilter.T__44:
				case RFilter.T__45:
				case RFilter.T__46:
				case RFilter.T__47:
				case RFilter.T__48:
				case RFilter.T__49:
				case RFilter.T__50:
				case RFilter.T__51:
				case RFilter.T__52:
				case RFilter.T__53:
				case RFilter.HEX:
				case RFilter.INT:
				case RFilter.FLOAT:
				case RFilter.COMPLEX:
				case RFilter.STRING:
				case RFilter.ID:
				case RFilter.USER_OP:
					{
					this.state = 10;
					this.elem();
					}
					break;
				case RFilter.NL:
					{
					this.state = 11;
					this.match(RFilter.NL);
					}
					break;
				case RFilter.T__0:
					{
					this.state = 12;
					this.match(RFilter.T__0);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 17;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 18;
			this.match(RFilter.EOF);
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
	public eat(): EatContext {
		let _localctx: EatContext = new EatContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, RFilter.RULE_eat);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 22;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 20;
					_localctx._NL = this.match(RFilter.NL);
					((WritableToken)_localctx._NL).setChannel(Token.HIDDEN_CHANNEL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 24;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
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
	public elem(): ElemContext {
		let _localctx: ElemContext = new ElemContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, RFilter.RULE_elem);
		let _la: number;
		try {
			this.state = 140;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RFilter.T__4:
			case RFilter.T__5:
			case RFilter.T__6:
			case RFilter.T__7:
			case RFilter.T__8:
			case RFilter.T__9:
			case RFilter.T__10:
			case RFilter.T__11:
			case RFilter.T__12:
			case RFilter.T__13:
			case RFilter.T__14:
			case RFilter.T__15:
			case RFilter.T__16:
			case RFilter.T__17:
			case RFilter.T__18:
			case RFilter.T__19:
			case RFilter.T__20:
			case RFilter.T__21:
			case RFilter.T__22:
			case RFilter.T__23:
			case RFilter.T__24:
			case RFilter.T__25:
			case RFilter.T__26:
			case RFilter.T__28:
			case RFilter.T__29:
			case RFilter.T__40:
			case RFilter.T__42:
			case RFilter.T__43:
			case RFilter.T__52:
			case RFilter.T__53:
			case RFilter.USER_OP:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 26;
				this.op();
				this.state = 28;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
				case 1:
					{
					this.state = 27;
					this.eat();
					}
					break;
				}
				}
				break;
			case RFilter.T__44:
			case RFilter.T__45:
			case RFilter.T__46:
			case RFilter.T__47:
			case RFilter.T__48:
			case RFilter.T__49:
			case RFilter.T__50:
			case RFilter.T__51:
			case RFilter.HEX:
			case RFilter.INT:
			case RFilter.FLOAT:
			case RFilter.COMPLEX:
			case RFilter.STRING:
			case RFilter.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 30;
				this.atom();
				}
				break;
			case RFilter.T__35:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 31;
				this.match(RFilter.T__35);
				this.state = 33;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
				case 1:
					{
					this.state = 32;
					this.eat();
					}
					break;
				}
				curlies++;
				this.state = 41;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RFilter.T__0) | (1 << RFilter.T__1) | (1 << RFilter.T__3) | (1 << RFilter.T__4) | (1 << RFilter.T__5) | (1 << RFilter.T__6) | (1 << RFilter.T__7) | (1 << RFilter.T__8) | (1 << RFilter.T__9) | (1 << RFilter.T__10) | (1 << RFilter.T__11) | (1 << RFilter.T__12) | (1 << RFilter.T__13) | (1 << RFilter.T__14) | (1 << RFilter.T__15) | (1 << RFilter.T__16) | (1 << RFilter.T__17) | (1 << RFilter.T__18) | (1 << RFilter.T__19) | (1 << RFilter.T__20) | (1 << RFilter.T__21) | (1 << RFilter.T__22) | (1 << RFilter.T__23) | (1 << RFilter.T__24) | (1 << RFilter.T__25) | (1 << RFilter.T__26) | (1 << RFilter.T__28) | (1 << RFilter.T__29))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (RFilter.T__32 - 33)) | (1 << (RFilter.T__33 - 33)) | (1 << (RFilter.T__35 - 33)) | (1 << (RFilter.T__37 - 33)) | (1 << (RFilter.T__38 - 33)) | (1 << (RFilter.T__39 - 33)) | (1 << (RFilter.T__40 - 33)) | (1 << (RFilter.T__41 - 33)) | (1 << (RFilter.T__42 - 33)) | (1 << (RFilter.T__43 - 33)) | (1 << (RFilter.T__44 - 33)) | (1 << (RFilter.T__45 - 33)) | (1 << (RFilter.T__46 - 33)) | (1 << (RFilter.T__47 - 33)) | (1 << (RFilter.T__48 - 33)) | (1 << (RFilter.T__49 - 33)) | (1 << (RFilter.T__50 - 33)) | (1 << (RFilter.T__51 - 33)) | (1 << (RFilter.T__52 - 33)) | (1 << (RFilter.T__53 - 33)) | (1 << (RFilter.HEX - 33)) | (1 << (RFilter.INT - 33)) | (1 << (RFilter.FLOAT - 33)) | (1 << (RFilter.COMPLEX - 33)) | (1 << (RFilter.STRING - 33)) | (1 << (RFilter.ID - 33)) | (1 << (RFilter.USER_OP - 33)) | (1 << (RFilter.NL - 33)))) !== 0)) {
					{
					this.state = 39;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case RFilter.T__1:
					case RFilter.T__3:
					case RFilter.T__4:
					case RFilter.T__5:
					case RFilter.T__6:
					case RFilter.T__7:
					case RFilter.T__8:
					case RFilter.T__9:
					case RFilter.T__10:
					case RFilter.T__11:
					case RFilter.T__12:
					case RFilter.T__13:
					case RFilter.T__14:
					case RFilter.T__15:
					case RFilter.T__16:
					case RFilter.T__17:
					case RFilter.T__18:
					case RFilter.T__19:
					case RFilter.T__20:
					case RFilter.T__21:
					case RFilter.T__22:
					case RFilter.T__23:
					case RFilter.T__24:
					case RFilter.T__25:
					case RFilter.T__26:
					case RFilter.T__28:
					case RFilter.T__29:
					case RFilter.T__32:
					case RFilter.T__33:
					case RFilter.T__35:
					case RFilter.T__37:
					case RFilter.T__38:
					case RFilter.T__39:
					case RFilter.T__40:
					case RFilter.T__41:
					case RFilter.T__42:
					case RFilter.T__43:
					case RFilter.T__44:
					case RFilter.T__45:
					case RFilter.T__46:
					case RFilter.T__47:
					case RFilter.T__48:
					case RFilter.T__49:
					case RFilter.T__50:
					case RFilter.T__51:
					case RFilter.T__52:
					case RFilter.T__53:
					case RFilter.HEX:
					case RFilter.INT:
					case RFilter.FLOAT:
					case RFilter.COMPLEX:
					case RFilter.STRING:
					case RFilter.ID:
					case RFilter.USER_OP:
						{
						this.state = 36;
						this.elem();
						}
						break;
					case RFilter.NL:
						{
						this.state = 37;
						this.match(RFilter.NL);
						}
						break;
					case RFilter.T__0:
						{
						this.state = 38;
						this.match(RFilter.T__0);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 43;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				curlies--;
				this.state = 45;
				this.match(RFilter.T__36);
				}
				break;
			case RFilter.T__33:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 46;
				this.match(RFilter.T__33);
				this.state = 51;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RFilter.T__1) | (1 << RFilter.T__3) | (1 << RFilter.T__4) | (1 << RFilter.T__5) | (1 << RFilter.T__6) | (1 << RFilter.T__7) | (1 << RFilter.T__8) | (1 << RFilter.T__9) | (1 << RFilter.T__10) | (1 << RFilter.T__11) | (1 << RFilter.T__12) | (1 << RFilter.T__13) | (1 << RFilter.T__14) | (1 << RFilter.T__15) | (1 << RFilter.T__16) | (1 << RFilter.T__17) | (1 << RFilter.T__18) | (1 << RFilter.T__19) | (1 << RFilter.T__20) | (1 << RFilter.T__21) | (1 << RFilter.T__22) | (1 << RFilter.T__23) | (1 << RFilter.T__24) | (1 << RFilter.T__25) | (1 << RFilter.T__26) | (1 << RFilter.T__28) | (1 << RFilter.T__29))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (RFilter.T__32 - 33)) | (1 << (RFilter.T__33 - 33)) | (1 << (RFilter.T__35 - 33)) | (1 << (RFilter.T__37 - 33)) | (1 << (RFilter.T__38 - 33)) | (1 << (RFilter.T__39 - 33)) | (1 << (RFilter.T__40 - 33)) | (1 << (RFilter.T__41 - 33)) | (1 << (RFilter.T__42 - 33)) | (1 << (RFilter.T__43 - 33)) | (1 << (RFilter.T__44 - 33)) | (1 << (RFilter.T__45 - 33)) | (1 << (RFilter.T__46 - 33)) | (1 << (RFilter.T__47 - 33)) | (1 << (RFilter.T__48 - 33)) | (1 << (RFilter.T__49 - 33)) | (1 << (RFilter.T__50 - 33)) | (1 << (RFilter.T__51 - 33)) | (1 << (RFilter.T__52 - 33)) | (1 << (RFilter.T__53 - 33)) | (1 << (RFilter.HEX - 33)) | (1 << (RFilter.INT - 33)) | (1 << (RFilter.FLOAT - 33)) | (1 << (RFilter.COMPLEX - 33)) | (1 << (RFilter.STRING - 33)) | (1 << (RFilter.ID - 33)) | (1 << (RFilter.USER_OP - 33)) | (1 << (RFilter.NL - 33)))) !== 0)) {
					{
					this.state = 49;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case RFilter.T__1:
					case RFilter.T__3:
					case RFilter.T__4:
					case RFilter.T__5:
					case RFilter.T__6:
					case RFilter.T__7:
					case RFilter.T__8:
					case RFilter.T__9:
					case RFilter.T__10:
					case RFilter.T__11:
					case RFilter.T__12:
					case RFilter.T__13:
					case RFilter.T__14:
					case RFilter.T__15:
					case RFilter.T__16:
					case RFilter.T__17:
					case RFilter.T__18:
					case RFilter.T__19:
					case RFilter.T__20:
					case RFilter.T__21:
					case RFilter.T__22:
					case RFilter.T__23:
					case RFilter.T__24:
					case RFilter.T__25:
					case RFilter.T__26:
					case RFilter.T__28:
					case RFilter.T__29:
					case RFilter.T__32:
					case RFilter.T__33:
					case RFilter.T__35:
					case RFilter.T__37:
					case RFilter.T__38:
					case RFilter.T__39:
					case RFilter.T__40:
					case RFilter.T__41:
					case RFilter.T__42:
					case RFilter.T__43:
					case RFilter.T__44:
					case RFilter.T__45:
					case RFilter.T__46:
					case RFilter.T__47:
					case RFilter.T__48:
					case RFilter.T__49:
					case RFilter.T__50:
					case RFilter.T__51:
					case RFilter.T__52:
					case RFilter.T__53:
					case RFilter.HEX:
					case RFilter.INT:
					case RFilter.FLOAT:
					case RFilter.COMPLEX:
					case RFilter.STRING:
					case RFilter.ID:
					case RFilter.USER_OP:
						{
						this.state = 47;
						this.elem();
						}
						break;
					case RFilter.NL:
						{
						this.state = 48;
						this.eat();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 53;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 54;
				this.match(RFilter.T__34);
				}
				break;
			case RFilter.T__3:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 55;
				this.match(RFilter.T__3);
				this.state = 60;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RFilter.T__1) | (1 << RFilter.T__3) | (1 << RFilter.T__4) | (1 << RFilter.T__5) | (1 << RFilter.T__6) | (1 << RFilter.T__7) | (1 << RFilter.T__8) | (1 << RFilter.T__9) | (1 << RFilter.T__10) | (1 << RFilter.T__11) | (1 << RFilter.T__12) | (1 << RFilter.T__13) | (1 << RFilter.T__14) | (1 << RFilter.T__15) | (1 << RFilter.T__16) | (1 << RFilter.T__17) | (1 << RFilter.T__18) | (1 << RFilter.T__19) | (1 << RFilter.T__20) | (1 << RFilter.T__21) | (1 << RFilter.T__22) | (1 << RFilter.T__23) | (1 << RFilter.T__24) | (1 << RFilter.T__25) | (1 << RFilter.T__26) | (1 << RFilter.T__28) | (1 << RFilter.T__29))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (RFilter.T__32 - 33)) | (1 << (RFilter.T__33 - 33)) | (1 << (RFilter.T__35 - 33)) | (1 << (RFilter.T__37 - 33)) | (1 << (RFilter.T__38 - 33)) | (1 << (RFilter.T__39 - 33)) | (1 << (RFilter.T__40 - 33)) | (1 << (RFilter.T__41 - 33)) | (1 << (RFilter.T__42 - 33)) | (1 << (RFilter.T__43 - 33)) | (1 << (RFilter.T__44 - 33)) | (1 << (RFilter.T__45 - 33)) | (1 << (RFilter.T__46 - 33)) | (1 << (RFilter.T__47 - 33)) | (1 << (RFilter.T__48 - 33)) | (1 << (RFilter.T__49 - 33)) | (1 << (RFilter.T__50 - 33)) | (1 << (RFilter.T__51 - 33)) | (1 << (RFilter.T__52 - 33)) | (1 << (RFilter.T__53 - 33)) | (1 << (RFilter.HEX - 33)) | (1 << (RFilter.INT - 33)) | (1 << (RFilter.FLOAT - 33)) | (1 << (RFilter.COMPLEX - 33)) | (1 << (RFilter.STRING - 33)) | (1 << (RFilter.ID - 33)) | (1 << (RFilter.USER_OP - 33)) | (1 << (RFilter.NL - 33)))) !== 0)) {
					{
					this.state = 58;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case RFilter.T__1:
					case RFilter.T__3:
					case RFilter.T__4:
					case RFilter.T__5:
					case RFilter.T__6:
					case RFilter.T__7:
					case RFilter.T__8:
					case RFilter.T__9:
					case RFilter.T__10:
					case RFilter.T__11:
					case RFilter.T__12:
					case RFilter.T__13:
					case RFilter.T__14:
					case RFilter.T__15:
					case RFilter.T__16:
					case RFilter.T__17:
					case RFilter.T__18:
					case RFilter.T__19:
					case RFilter.T__20:
					case RFilter.T__21:
					case RFilter.T__22:
					case RFilter.T__23:
					case RFilter.T__24:
					case RFilter.T__25:
					case RFilter.T__26:
					case RFilter.T__28:
					case RFilter.T__29:
					case RFilter.T__32:
					case RFilter.T__33:
					case RFilter.T__35:
					case RFilter.T__37:
					case RFilter.T__38:
					case RFilter.T__39:
					case RFilter.T__40:
					case RFilter.T__41:
					case RFilter.T__42:
					case RFilter.T__43:
					case RFilter.T__44:
					case RFilter.T__45:
					case RFilter.T__46:
					case RFilter.T__47:
					case RFilter.T__48:
					case RFilter.T__49:
					case RFilter.T__50:
					case RFilter.T__51:
					case RFilter.T__52:
					case RFilter.T__53:
					case RFilter.HEX:
					case RFilter.INT:
					case RFilter.FLOAT:
					case RFilter.COMPLEX:
					case RFilter.STRING:
					case RFilter.ID:
					case RFilter.USER_OP:
						{
						this.state = 56;
						this.elem();
						}
						break;
					case RFilter.NL:
						{
						this.state = 57;
						this.eat();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 62;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 63;
				this.match(RFilter.T__2);
				}
				break;
			case RFilter.T__1:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 64;
				this.match(RFilter.T__1);
				this.state = 69;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RFilter.T__1) | (1 << RFilter.T__3) | (1 << RFilter.T__4) | (1 << RFilter.T__5) | (1 << RFilter.T__6) | (1 << RFilter.T__7) | (1 << RFilter.T__8) | (1 << RFilter.T__9) | (1 << RFilter.T__10) | (1 << RFilter.T__11) | (1 << RFilter.T__12) | (1 << RFilter.T__13) | (1 << RFilter.T__14) | (1 << RFilter.T__15) | (1 << RFilter.T__16) | (1 << RFilter.T__17) | (1 << RFilter.T__18) | (1 << RFilter.T__19) | (1 << RFilter.T__20) | (1 << RFilter.T__21) | (1 << RFilter.T__22) | (1 << RFilter.T__23) | (1 << RFilter.T__24) | (1 << RFilter.T__25) | (1 << RFilter.T__26) | (1 << RFilter.T__28) | (1 << RFilter.T__29))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (RFilter.T__32 - 33)) | (1 << (RFilter.T__33 - 33)) | (1 << (RFilter.T__35 - 33)) | (1 << (RFilter.T__37 - 33)) | (1 << (RFilter.T__38 - 33)) | (1 << (RFilter.T__39 - 33)) | (1 << (RFilter.T__40 - 33)) | (1 << (RFilter.T__41 - 33)) | (1 << (RFilter.T__42 - 33)) | (1 << (RFilter.T__43 - 33)) | (1 << (RFilter.T__44 - 33)) | (1 << (RFilter.T__45 - 33)) | (1 << (RFilter.T__46 - 33)) | (1 << (RFilter.T__47 - 33)) | (1 << (RFilter.T__48 - 33)) | (1 << (RFilter.T__49 - 33)) | (1 << (RFilter.T__50 - 33)) | (1 << (RFilter.T__51 - 33)) | (1 << (RFilter.T__52 - 33)) | (1 << (RFilter.T__53 - 33)) | (1 << (RFilter.HEX - 33)) | (1 << (RFilter.INT - 33)) | (1 << (RFilter.FLOAT - 33)) | (1 << (RFilter.COMPLEX - 33)) | (1 << (RFilter.STRING - 33)) | (1 << (RFilter.ID - 33)) | (1 << (RFilter.USER_OP - 33)) | (1 << (RFilter.NL - 33)))) !== 0)) {
					{
					this.state = 67;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case RFilter.T__1:
					case RFilter.T__3:
					case RFilter.T__4:
					case RFilter.T__5:
					case RFilter.T__6:
					case RFilter.T__7:
					case RFilter.T__8:
					case RFilter.T__9:
					case RFilter.T__10:
					case RFilter.T__11:
					case RFilter.T__12:
					case RFilter.T__13:
					case RFilter.T__14:
					case RFilter.T__15:
					case RFilter.T__16:
					case RFilter.T__17:
					case RFilter.T__18:
					case RFilter.T__19:
					case RFilter.T__20:
					case RFilter.T__21:
					case RFilter.T__22:
					case RFilter.T__23:
					case RFilter.T__24:
					case RFilter.T__25:
					case RFilter.T__26:
					case RFilter.T__28:
					case RFilter.T__29:
					case RFilter.T__32:
					case RFilter.T__33:
					case RFilter.T__35:
					case RFilter.T__37:
					case RFilter.T__38:
					case RFilter.T__39:
					case RFilter.T__40:
					case RFilter.T__41:
					case RFilter.T__42:
					case RFilter.T__43:
					case RFilter.T__44:
					case RFilter.T__45:
					case RFilter.T__46:
					case RFilter.T__47:
					case RFilter.T__48:
					case RFilter.T__49:
					case RFilter.T__50:
					case RFilter.T__51:
					case RFilter.T__52:
					case RFilter.T__53:
					case RFilter.HEX:
					case RFilter.INT:
					case RFilter.FLOAT:
					case RFilter.COMPLEX:
					case RFilter.STRING:
					case RFilter.ID:
					case RFilter.USER_OP:
						{
						this.state = 65;
						this.elem();
						}
						break;
					case RFilter.NL:
						{
						this.state = 66;
						this.eat();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 71;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 72;
				this.match(RFilter.T__2);
				this.state = 73;
				this.match(RFilter.T__2);
				}
				break;
			case RFilter.T__32:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 74;
				this.match(RFilter.T__32);
				this.state = 76;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RFilter.NL) {
					{
					this.state = 75;
					this.eat();
					}
				}

				this.state = 78;
				this.match(RFilter.T__33);
				this.state = 83;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RFilter.T__1) | (1 << RFilter.T__3) | (1 << RFilter.T__4) | (1 << RFilter.T__5) | (1 << RFilter.T__6) | (1 << RFilter.T__7) | (1 << RFilter.T__8) | (1 << RFilter.T__9) | (1 << RFilter.T__10) | (1 << RFilter.T__11) | (1 << RFilter.T__12) | (1 << RFilter.T__13) | (1 << RFilter.T__14) | (1 << RFilter.T__15) | (1 << RFilter.T__16) | (1 << RFilter.T__17) | (1 << RFilter.T__18) | (1 << RFilter.T__19) | (1 << RFilter.T__20) | (1 << RFilter.T__21) | (1 << RFilter.T__22) | (1 << RFilter.T__23) | (1 << RFilter.T__24) | (1 << RFilter.T__25) | (1 << RFilter.T__26) | (1 << RFilter.T__28) | (1 << RFilter.T__29))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (RFilter.T__32 - 33)) | (1 << (RFilter.T__33 - 33)) | (1 << (RFilter.T__35 - 33)) | (1 << (RFilter.T__37 - 33)) | (1 << (RFilter.T__38 - 33)) | (1 << (RFilter.T__39 - 33)) | (1 << (RFilter.T__40 - 33)) | (1 << (RFilter.T__41 - 33)) | (1 << (RFilter.T__42 - 33)) | (1 << (RFilter.T__43 - 33)) | (1 << (RFilter.T__44 - 33)) | (1 << (RFilter.T__45 - 33)) | (1 << (RFilter.T__46 - 33)) | (1 << (RFilter.T__47 - 33)) | (1 << (RFilter.T__48 - 33)) | (1 << (RFilter.T__49 - 33)) | (1 << (RFilter.T__50 - 33)) | (1 << (RFilter.T__51 - 33)) | (1 << (RFilter.T__52 - 33)) | (1 << (RFilter.T__53 - 33)) | (1 << (RFilter.HEX - 33)) | (1 << (RFilter.INT - 33)) | (1 << (RFilter.FLOAT - 33)) | (1 << (RFilter.COMPLEX - 33)) | (1 << (RFilter.STRING - 33)) | (1 << (RFilter.ID - 33)) | (1 << (RFilter.USER_OP - 33)) | (1 << (RFilter.NL - 33)))) !== 0)) {
					{
					this.state = 81;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case RFilter.T__1:
					case RFilter.T__3:
					case RFilter.T__4:
					case RFilter.T__5:
					case RFilter.T__6:
					case RFilter.T__7:
					case RFilter.T__8:
					case RFilter.T__9:
					case RFilter.T__10:
					case RFilter.T__11:
					case RFilter.T__12:
					case RFilter.T__13:
					case RFilter.T__14:
					case RFilter.T__15:
					case RFilter.T__16:
					case RFilter.T__17:
					case RFilter.T__18:
					case RFilter.T__19:
					case RFilter.T__20:
					case RFilter.T__21:
					case RFilter.T__22:
					case RFilter.T__23:
					case RFilter.T__24:
					case RFilter.T__25:
					case RFilter.T__26:
					case RFilter.T__28:
					case RFilter.T__29:
					case RFilter.T__32:
					case RFilter.T__33:
					case RFilter.T__35:
					case RFilter.T__37:
					case RFilter.T__38:
					case RFilter.T__39:
					case RFilter.T__40:
					case RFilter.T__41:
					case RFilter.T__42:
					case RFilter.T__43:
					case RFilter.T__44:
					case RFilter.T__45:
					case RFilter.T__46:
					case RFilter.T__47:
					case RFilter.T__48:
					case RFilter.T__49:
					case RFilter.T__50:
					case RFilter.T__51:
					case RFilter.T__52:
					case RFilter.T__53:
					case RFilter.HEX:
					case RFilter.INT:
					case RFilter.FLOAT:
					case RFilter.COMPLEX:
					case RFilter.STRING:
					case RFilter.ID:
					case RFilter.USER_OP:
						{
						this.state = 79;
						this.elem();
						}
						break;
					case RFilter.NL:
						{
						this.state = 80;
						this.eat();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 85;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 86;
				this.match(RFilter.T__34);
				this.state = 88;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 87;
					this.eat();
					}
					break;
				}
				}
				break;
			case RFilter.T__39:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 90;
				this.match(RFilter.T__39);
				this.state = 92;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RFilter.NL) {
					{
					this.state = 91;
					this.eat();
					}
				}

				this.state = 94;
				this.match(RFilter.T__33);
				this.state = 99;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RFilter.T__1) | (1 << RFilter.T__3) | (1 << RFilter.T__4) | (1 << RFilter.T__5) | (1 << RFilter.T__6) | (1 << RFilter.T__7) | (1 << RFilter.T__8) | (1 << RFilter.T__9) | (1 << RFilter.T__10) | (1 << RFilter.T__11) | (1 << RFilter.T__12) | (1 << RFilter.T__13) | (1 << RFilter.T__14) | (1 << RFilter.T__15) | (1 << RFilter.T__16) | (1 << RFilter.T__17) | (1 << RFilter.T__18) | (1 << RFilter.T__19) | (1 << RFilter.T__20) | (1 << RFilter.T__21) | (1 << RFilter.T__22) | (1 << RFilter.T__23) | (1 << RFilter.T__24) | (1 << RFilter.T__25) | (1 << RFilter.T__26) | (1 << RFilter.T__28) | (1 << RFilter.T__29))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (RFilter.T__32 - 33)) | (1 << (RFilter.T__33 - 33)) | (1 << (RFilter.T__35 - 33)) | (1 << (RFilter.T__37 - 33)) | (1 << (RFilter.T__38 - 33)) | (1 << (RFilter.T__39 - 33)) | (1 << (RFilter.T__40 - 33)) | (1 << (RFilter.T__41 - 33)) | (1 << (RFilter.T__42 - 33)) | (1 << (RFilter.T__43 - 33)) | (1 << (RFilter.T__44 - 33)) | (1 << (RFilter.T__45 - 33)) | (1 << (RFilter.T__46 - 33)) | (1 << (RFilter.T__47 - 33)) | (1 << (RFilter.T__48 - 33)) | (1 << (RFilter.T__49 - 33)) | (1 << (RFilter.T__50 - 33)) | (1 << (RFilter.T__51 - 33)) | (1 << (RFilter.T__52 - 33)) | (1 << (RFilter.T__53 - 33)) | (1 << (RFilter.HEX - 33)) | (1 << (RFilter.INT - 33)) | (1 << (RFilter.FLOAT - 33)) | (1 << (RFilter.COMPLEX - 33)) | (1 << (RFilter.STRING - 33)) | (1 << (RFilter.ID - 33)) | (1 << (RFilter.USER_OP - 33)) | (1 << (RFilter.NL - 33)))) !== 0)) {
					{
					this.state = 97;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case RFilter.T__1:
					case RFilter.T__3:
					case RFilter.T__4:
					case RFilter.T__5:
					case RFilter.T__6:
					case RFilter.T__7:
					case RFilter.T__8:
					case RFilter.T__9:
					case RFilter.T__10:
					case RFilter.T__11:
					case RFilter.T__12:
					case RFilter.T__13:
					case RFilter.T__14:
					case RFilter.T__15:
					case RFilter.T__16:
					case RFilter.T__17:
					case RFilter.T__18:
					case RFilter.T__19:
					case RFilter.T__20:
					case RFilter.T__21:
					case RFilter.T__22:
					case RFilter.T__23:
					case RFilter.T__24:
					case RFilter.T__25:
					case RFilter.T__26:
					case RFilter.T__28:
					case RFilter.T__29:
					case RFilter.T__32:
					case RFilter.T__33:
					case RFilter.T__35:
					case RFilter.T__37:
					case RFilter.T__38:
					case RFilter.T__39:
					case RFilter.T__40:
					case RFilter.T__41:
					case RFilter.T__42:
					case RFilter.T__43:
					case RFilter.T__44:
					case RFilter.T__45:
					case RFilter.T__46:
					case RFilter.T__47:
					case RFilter.T__48:
					case RFilter.T__49:
					case RFilter.T__50:
					case RFilter.T__51:
					case RFilter.T__52:
					case RFilter.T__53:
					case RFilter.HEX:
					case RFilter.INT:
					case RFilter.FLOAT:
					case RFilter.COMPLEX:
					case RFilter.STRING:
					case RFilter.ID:
					case RFilter.USER_OP:
						{
						this.state = 95;
						this.elem();
						}
						break;
					case RFilter.NL:
						{
						this.state = 96;
						this.eat();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 101;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 102;
				this.match(RFilter.T__34);
				this.state = 104;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
				case 1:
					{
					this.state = 103;
					this.eat();
					}
					break;
				}
				}
				break;
			case RFilter.T__41:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 106;
				this.match(RFilter.T__41);
				this.state = 108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RFilter.NL) {
					{
					this.state = 107;
					this.eat();
					}
				}

				this.state = 110;
				this.match(RFilter.T__33);
				this.state = 115;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RFilter.T__1) | (1 << RFilter.T__3) | (1 << RFilter.T__4) | (1 << RFilter.T__5) | (1 << RFilter.T__6) | (1 << RFilter.T__7) | (1 << RFilter.T__8) | (1 << RFilter.T__9) | (1 << RFilter.T__10) | (1 << RFilter.T__11) | (1 << RFilter.T__12) | (1 << RFilter.T__13) | (1 << RFilter.T__14) | (1 << RFilter.T__15) | (1 << RFilter.T__16) | (1 << RFilter.T__17) | (1 << RFilter.T__18) | (1 << RFilter.T__19) | (1 << RFilter.T__20) | (1 << RFilter.T__21) | (1 << RFilter.T__22) | (1 << RFilter.T__23) | (1 << RFilter.T__24) | (1 << RFilter.T__25) | (1 << RFilter.T__26) | (1 << RFilter.T__28) | (1 << RFilter.T__29))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (RFilter.T__32 - 33)) | (1 << (RFilter.T__33 - 33)) | (1 << (RFilter.T__35 - 33)) | (1 << (RFilter.T__37 - 33)) | (1 << (RFilter.T__38 - 33)) | (1 << (RFilter.T__39 - 33)) | (1 << (RFilter.T__40 - 33)) | (1 << (RFilter.T__41 - 33)) | (1 << (RFilter.T__42 - 33)) | (1 << (RFilter.T__43 - 33)) | (1 << (RFilter.T__44 - 33)) | (1 << (RFilter.T__45 - 33)) | (1 << (RFilter.T__46 - 33)) | (1 << (RFilter.T__47 - 33)) | (1 << (RFilter.T__48 - 33)) | (1 << (RFilter.T__49 - 33)) | (1 << (RFilter.T__50 - 33)) | (1 << (RFilter.T__51 - 33)) | (1 << (RFilter.T__52 - 33)) | (1 << (RFilter.T__53 - 33)) | (1 << (RFilter.HEX - 33)) | (1 << (RFilter.INT - 33)) | (1 << (RFilter.FLOAT - 33)) | (1 << (RFilter.COMPLEX - 33)) | (1 << (RFilter.STRING - 33)) | (1 << (RFilter.ID - 33)) | (1 << (RFilter.USER_OP - 33)) | (1 << (RFilter.NL - 33)))) !== 0)) {
					{
					this.state = 113;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case RFilter.T__1:
					case RFilter.T__3:
					case RFilter.T__4:
					case RFilter.T__5:
					case RFilter.T__6:
					case RFilter.T__7:
					case RFilter.T__8:
					case RFilter.T__9:
					case RFilter.T__10:
					case RFilter.T__11:
					case RFilter.T__12:
					case RFilter.T__13:
					case RFilter.T__14:
					case RFilter.T__15:
					case RFilter.T__16:
					case RFilter.T__17:
					case RFilter.T__18:
					case RFilter.T__19:
					case RFilter.T__20:
					case RFilter.T__21:
					case RFilter.T__22:
					case RFilter.T__23:
					case RFilter.T__24:
					case RFilter.T__25:
					case RFilter.T__26:
					case RFilter.T__28:
					case RFilter.T__29:
					case RFilter.T__32:
					case RFilter.T__33:
					case RFilter.T__35:
					case RFilter.T__37:
					case RFilter.T__38:
					case RFilter.T__39:
					case RFilter.T__40:
					case RFilter.T__41:
					case RFilter.T__42:
					case RFilter.T__43:
					case RFilter.T__44:
					case RFilter.T__45:
					case RFilter.T__46:
					case RFilter.T__47:
					case RFilter.T__48:
					case RFilter.T__49:
					case RFilter.T__50:
					case RFilter.T__51:
					case RFilter.T__52:
					case RFilter.T__53:
					case RFilter.HEX:
					case RFilter.INT:
					case RFilter.FLOAT:
					case RFilter.COMPLEX:
					case RFilter.STRING:
					case RFilter.ID:
					case RFilter.USER_OP:
						{
						this.state = 111;
						this.elem();
						}
						break;
					case RFilter.NL:
						{
						this.state = 112;
						this.eat();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 117;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 118;
				this.match(RFilter.T__34);
				this.state = 120;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
				case 1:
					{
					this.state = 119;
					this.eat();
					}
					break;
				}
				}
				break;
			case RFilter.T__37:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 122;
				this.match(RFilter.T__37);
				this.state = 124;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RFilter.NL) {
					{
					this.state = 123;
					this.eat();
					}
				}

				this.state = 126;
				this.match(RFilter.T__33);
				this.state = 131;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RFilter.T__1) | (1 << RFilter.T__3) | (1 << RFilter.T__4) | (1 << RFilter.T__5) | (1 << RFilter.T__6) | (1 << RFilter.T__7) | (1 << RFilter.T__8) | (1 << RFilter.T__9) | (1 << RFilter.T__10) | (1 << RFilter.T__11) | (1 << RFilter.T__12) | (1 << RFilter.T__13) | (1 << RFilter.T__14) | (1 << RFilter.T__15) | (1 << RFilter.T__16) | (1 << RFilter.T__17) | (1 << RFilter.T__18) | (1 << RFilter.T__19) | (1 << RFilter.T__20) | (1 << RFilter.T__21) | (1 << RFilter.T__22) | (1 << RFilter.T__23) | (1 << RFilter.T__24) | (1 << RFilter.T__25) | (1 << RFilter.T__26) | (1 << RFilter.T__28) | (1 << RFilter.T__29))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (RFilter.T__32 - 33)) | (1 << (RFilter.T__33 - 33)) | (1 << (RFilter.T__35 - 33)) | (1 << (RFilter.T__37 - 33)) | (1 << (RFilter.T__38 - 33)) | (1 << (RFilter.T__39 - 33)) | (1 << (RFilter.T__40 - 33)) | (1 << (RFilter.T__41 - 33)) | (1 << (RFilter.T__42 - 33)) | (1 << (RFilter.T__43 - 33)) | (1 << (RFilter.T__44 - 33)) | (1 << (RFilter.T__45 - 33)) | (1 << (RFilter.T__46 - 33)) | (1 << (RFilter.T__47 - 33)) | (1 << (RFilter.T__48 - 33)) | (1 << (RFilter.T__49 - 33)) | (1 << (RFilter.T__50 - 33)) | (1 << (RFilter.T__51 - 33)) | (1 << (RFilter.T__52 - 33)) | (1 << (RFilter.T__53 - 33)) | (1 << (RFilter.HEX - 33)) | (1 << (RFilter.INT - 33)) | (1 << (RFilter.FLOAT - 33)) | (1 << (RFilter.COMPLEX - 33)) | (1 << (RFilter.STRING - 33)) | (1 << (RFilter.ID - 33)) | (1 << (RFilter.USER_OP - 33)) | (1 << (RFilter.NL - 33)))) !== 0)) {
					{
					this.state = 129;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case RFilter.T__1:
					case RFilter.T__3:
					case RFilter.T__4:
					case RFilter.T__5:
					case RFilter.T__6:
					case RFilter.T__7:
					case RFilter.T__8:
					case RFilter.T__9:
					case RFilter.T__10:
					case RFilter.T__11:
					case RFilter.T__12:
					case RFilter.T__13:
					case RFilter.T__14:
					case RFilter.T__15:
					case RFilter.T__16:
					case RFilter.T__17:
					case RFilter.T__18:
					case RFilter.T__19:
					case RFilter.T__20:
					case RFilter.T__21:
					case RFilter.T__22:
					case RFilter.T__23:
					case RFilter.T__24:
					case RFilter.T__25:
					case RFilter.T__26:
					case RFilter.T__28:
					case RFilter.T__29:
					case RFilter.T__32:
					case RFilter.T__33:
					case RFilter.T__35:
					case RFilter.T__37:
					case RFilter.T__38:
					case RFilter.T__39:
					case RFilter.T__40:
					case RFilter.T__41:
					case RFilter.T__42:
					case RFilter.T__43:
					case RFilter.T__44:
					case RFilter.T__45:
					case RFilter.T__46:
					case RFilter.T__47:
					case RFilter.T__48:
					case RFilter.T__49:
					case RFilter.T__50:
					case RFilter.T__51:
					case RFilter.T__52:
					case RFilter.T__53:
					case RFilter.HEX:
					case RFilter.INT:
					case RFilter.FLOAT:
					case RFilter.COMPLEX:
					case RFilter.STRING:
					case RFilter.ID:
					case RFilter.USER_OP:
						{
						this.state = 127;
						this.elem();
						}
						break;
					case RFilter.NL:
						{
						this.state = 128;
						this.eat();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 133;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 134;
				this.match(RFilter.T__34);
				this.state = 136;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
				case 1:
					{
					this.state = 135;
					this.eat();
					}
					break;
				}
				}
				break;
			case RFilter.T__38:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 138;
				this.match(RFilter.T__38);

				        // ``inside a compound expression, a newline before else is discarded,
				        // whereas at the outermost level, the newline terminates the if
				        // construction and a subsequent else causes a syntax error.''
				        /*
				        Works here
				            if (1==0) { print(1) } else { print(2) }

				        and correctly gets error here:

				            if (1==0) { print(1) }
				            else { print(2) }

				        this works too:

				            if (1==0) {
				              if (2==0) print(1)
				              else print(2)
				            }
				        */
				        WritableToken tok = (WritableToken)_input.LT(-2);
				        if (curlies>0&&tok.getType()==NL) tok.setChannel(Token.HIDDEN_CHANNEL);
				        
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
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, RFilter.RULE_atom);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 142;
			_la = this._input.LA(1);
			if (!(((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (RFilter.T__44 - 45)) | (1 << (RFilter.T__45 - 45)) | (1 << (RFilter.T__46 - 45)) | (1 << (RFilter.T__47 - 45)) | (1 << (RFilter.T__48 - 45)) | (1 << (RFilter.T__49 - 45)) | (1 << (RFilter.T__50 - 45)) | (1 << (RFilter.T__51 - 45)) | (1 << (RFilter.HEX - 45)) | (1 << (RFilter.INT - 45)) | (1 << (RFilter.FLOAT - 45)) | (1 << (RFilter.COMPLEX - 45)) | (1 << (RFilter.STRING - 45)) | (1 << (RFilter.ID - 45)))) !== 0))) {
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
	public op(): OpContext {
		let _localctx: OpContext = new OpContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, RFilter.RULE_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RFilter.T__4) | (1 << RFilter.T__5) | (1 << RFilter.T__6) | (1 << RFilter.T__7) | (1 << RFilter.T__8) | (1 << RFilter.T__9) | (1 << RFilter.T__10) | (1 << RFilter.T__11) | (1 << RFilter.T__12) | (1 << RFilter.T__13) | (1 << RFilter.T__14) | (1 << RFilter.T__15) | (1 << RFilter.T__16) | (1 << RFilter.T__17) | (1 << RFilter.T__18) | (1 << RFilter.T__19) | (1 << RFilter.T__20) | (1 << RFilter.T__21) | (1 << RFilter.T__22) | (1 << RFilter.T__23) | (1 << RFilter.T__24) | (1 << RFilter.T__25) | (1 << RFilter.T__26) | (1 << RFilter.T__28) | (1 << RFilter.T__29))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (RFilter.T__40 - 41)) | (1 << (RFilter.T__42 - 41)) | (1 << (RFilter.T__43 - 41)) | (1 << (RFilter.T__52 - 41)) | (1 << (RFilter.T__53 - 41)) | (1 << (RFilter.USER_OP - 41)))) !== 0))) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03B\x95\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02" +
		"\x03\x02\x03\x02\x07\x02\x10\n\x02\f\x02\x0E\x02\x13\v\x02\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x06\x03\x19\n\x03\r\x03\x0E\x03\x1A\x03\x04\x03\x04" +
		"\x05\x04\x1F\n\x04\x03\x04\x03\x04\x03\x04\x05\x04$\n\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x07\x04*\n\x04\f\x04\x0E\x04-\v\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x07\x044\n\x04\f\x04\x0E\x047\v\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x07\x04=\n\x04\f\x04\x0E\x04@\v\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x07\x04F\n\x04\f\x04\x0E\x04I\v\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x05\x04O\n\x04\x03\x04\x03\x04\x03\x04\x07\x04T\n\x04\f\x04" +
		"\x0E\x04W\v\x04\x03\x04\x03\x04\x05\x04[\n\x04\x03\x04\x03\x04\x05\x04" +
		"_\n\x04\x03\x04\x03\x04\x03\x04\x07\x04d\n\x04\f\x04\x0E\x04g\v\x04\x03" +
		"\x04\x03\x04\x05\x04k\n\x04\x03\x04\x03\x04\x05\x04o\n\x04\x03\x04\x03" +
		"\x04\x03\x04\x07\x04t\n\x04\f\x04\x0E\x04w\v\x04\x03\x04\x03\x04\x05\x04" +
		"{\n\x04\x03\x04\x03\x04\x05\x04\x7F\n\x04\x03\x04\x03\x04\x03\x04\x07" +
		"\x04\x84\n\x04\f\x04\x0E\x04\x87\v\x04\x03\x04\x03\x04\x05\x04\x8B\n\x04" +
		"\x03\x04\x03\x04\x05\x04\x8F\n\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
		"\x06\x02\x02\x02\x07\x02\x02\x04\x02\x06\x02\b\x02\n\x02\x02\x04\x04\x02" +
		"/6:?\b\x02\x07\x1D\x1F ++-.78@@\x02\xB8\x02\x11\x03\x02\x02\x02\x04\x18" +
		"\x03\x02\x02\x02\x06\x8E\x03\x02\x02\x02\b\x90\x03\x02\x02\x02\n\x92\x03" +
		"\x02\x02\x02\f\x10\x05\x06\x04\x02\r\x10\x07A\x02\x02\x0E\x10\x07\x03" +
		"\x02\x02\x0F\f\x03\x02\x02\x02\x0F\r\x03\x02\x02\x02\x0F\x0E\x03\x02\x02" +
		"\x02\x10\x13\x03\x02\x02\x02\x11\x0F\x03\x02\x02\x02\x11\x12\x03\x02\x02" +
		"\x02\x12\x14\x03\x02\x02\x02\x13\x11\x03\x02\x02\x02\x14\x15\x07\x02\x02" +
		"\x03\x15\x03\x03\x02\x02\x02\x16\x17\x07A\x02\x02\x17\x19\b\x03\x01\x02" +
		"\x18\x16\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A\x18\x03\x02\x02\x02" +
		"\x1A\x1B\x03\x02\x02\x02\x1B\x05\x03\x02\x02\x02\x1C\x1E\x05\n\x06\x02" +
		"\x1D\x1F\x05\x04\x03\x02\x1E\x1D\x03\x02\x02\x02\x1E\x1F\x03\x02\x02\x02" +
		"\x1F\x8F\x03\x02\x02\x02 \x8F\x05\b\x05\x02!#\x07&\x02\x02\"$\x05\x04" +
		"\x03\x02#\"\x03\x02\x02\x02#$\x03\x02\x02\x02$%\x03\x02\x02\x02%+\b\x04" +
		"\x01\x02&*\x05\x06\x04\x02\'*\x07A\x02\x02(*\x07\x03\x02\x02)&\x03\x02" +
		"\x02\x02)\'\x03\x02\x02\x02)(\x03\x02\x02\x02*-\x03\x02\x02\x02+)\x03" +
		"\x02\x02\x02+,\x03\x02\x02\x02,.\x03\x02\x02\x02-+\x03\x02\x02\x02./\b" +
		"\x04\x01\x02/\x8F\x07\'\x02\x0205\x07$\x02\x0214\x05\x06\x04\x0224\x05" +
		"\x04\x03\x0231\x03\x02\x02\x0232\x03\x02\x02\x0247\x03\x02\x02\x0253\x03" +
		"\x02\x02\x0256\x03\x02\x02\x0268\x03\x02\x02\x0275\x03\x02\x02\x028\x8F" +
		"\x07%\x02\x029>\x07\x06\x02\x02:=\x05\x06\x04\x02;=\x05\x04\x03\x02<:" +
		"\x03\x02\x02\x02<;\x03\x02\x02\x02=@\x03\x02\x02\x02><\x03\x02\x02\x02" +
		">?\x03\x02\x02\x02?A\x03\x02\x02\x02@>\x03\x02\x02\x02A\x8F\x07\x05\x02" +
		"\x02BG\x07\x04\x02\x02CF\x05\x06\x04\x02DF\x05\x04\x03\x02EC\x03\x02\x02" +
		"\x02ED\x03\x02\x02\x02FI\x03\x02\x02\x02GE\x03\x02\x02\x02GH\x03\x02\x02" +
		"\x02HJ\x03\x02\x02\x02IG\x03\x02\x02\x02JK\x07\x05\x02\x02K\x8F\x07\x05" +
		"\x02\x02LN\x07#\x02\x02MO\x05\x04\x03\x02NM\x03\x02\x02\x02NO\x03\x02" +
		"\x02\x02OP\x03\x02\x02\x02PU\x07$\x02\x02QT\x05\x06\x04\x02RT\x05\x04" +
		"\x03\x02SQ\x03\x02\x02\x02SR\x03\x02\x02\x02TW\x03\x02\x02\x02US\x03\x02" +
		"\x02\x02UV\x03\x02\x02\x02VX\x03\x02\x02\x02WU\x03\x02\x02\x02XZ\x07%" +
		"\x02\x02Y[\x05\x04\x03\x02ZY\x03\x02\x02\x02Z[\x03\x02\x02\x02[\x8F\x03" +
		"\x02\x02\x02\\^\x07*\x02\x02]_\x05\x04\x03\x02^]\x03\x02\x02\x02^_\x03" +
		"\x02\x02\x02_`\x03\x02\x02\x02`e\x07$\x02\x02ad\x05\x06\x04\x02bd\x05" +
		"\x04\x03\x02ca\x03\x02\x02\x02cb\x03\x02\x02\x02dg\x03\x02\x02\x02ec\x03" +
		"\x02\x02\x02ef\x03\x02\x02\x02fh\x03\x02\x02\x02ge\x03\x02\x02\x02hj\x07" +
		"%\x02\x02ik\x05\x04\x03\x02ji\x03\x02\x02\x02jk\x03\x02\x02\x02k\x8F\x03" +
		"\x02\x02\x02ln\x07,\x02\x02mo\x05\x04\x03\x02nm\x03\x02\x02\x02no\x03" +
		"\x02\x02\x02op\x03\x02\x02\x02pu\x07$\x02\x02qt\x05\x06\x04\x02rt\x05" +
		"\x04\x03\x02sq\x03\x02\x02\x02sr\x03\x02\x02\x02tw\x03\x02\x02\x02us\x03" +
		"\x02\x02\x02uv\x03\x02\x02\x02vx\x03\x02\x02\x02wu\x03\x02\x02\x02xz\x07" +
		"%\x02\x02y{\x05\x04\x03\x02zy\x03\x02\x02\x02z{\x03\x02\x02\x02{\x8F\x03" +
		"\x02\x02\x02|~\x07(\x02\x02}\x7F\x05\x04\x03\x02~}\x03\x02\x02\x02~\x7F" +
		"\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x85\x07$\x02\x02\x81\x84" +
		"\x05\x06\x04\x02\x82\x84\x05\x04\x03\x02\x83\x81\x03\x02\x02\x02\x83\x82" +
		"\x03\x02\x02\x02\x84\x87\x03\x02\x02\x02\x85\x83\x03\x02\x02\x02\x85\x86" +
		"\x03\x02\x02\x02\x86\x88\x03\x02\x02\x02\x87\x85\x03\x02\x02\x02\x88\x8A" +
		"\x07%\x02\x02\x89\x8B\x05\x04\x03\x02\x8A\x89\x03\x02\x02\x02\x8A\x8B" +
		"\x03\x02\x02\x02\x8B\x8F\x03\x02\x02\x02\x8C\x8D\x07)\x02\x02\x8D\x8F" +
		"\b\x04\x01\x02\x8E\x1C\x03\x02\x02\x02\x8E \x03\x02\x02\x02\x8E!\x03\x02" +
		"\x02\x02\x8E0\x03\x02\x02\x02\x8E9\x03\x02\x02\x02\x8EB\x03\x02\x02\x02" +
		"\x8EL\x03\x02\x02\x02\x8E\\\x03\x02\x02\x02\x8El\x03\x02\x02\x02\x8E|" +
		"\x03\x02\x02\x02\x8E\x8C\x03\x02\x02\x02\x8F\x07\x03\x02\x02\x02\x90\x91" +
		"\t\x02\x02\x02\x91\t\x03\x02\x02\x02\x92\x93\t\x03\x02\x02\x93\v\x03\x02" +
		"\x02\x02 \x0F\x11\x1A\x1E#)+35<>EGNSUZ^cejnsuz~\x83\x85\x8A\x8E";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!RFilter.__ATN) {
			RFilter.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(RFilter._serializedATN));
		}

		return RFilter.__ATN;
	}

}

export class StreamContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(RFilter.EOF, 0); }
	public elem(): ElemContext[];
	public elem(i: number): ElemContext;
	public elem(i?: number): ElemContext | ElemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElemContext);
		} else {
			return this.getRuleContext(i, ElemContext);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RFilter.NL);
		} else {
			return this.getToken(RFilter.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RFilter.RULE_stream; }
	// @Override
	public enterRule(listener: RFilterListener): void {
		if (listener.enterStream) {
			listener.enterStream(this);
		}
	}
	// @Override
	public exitRule(listener: RFilterListener): void {
		if (listener.exitStream) {
			listener.exitStream(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RFilterVisitor<Result>): Result {
		if (visitor.visitStream) {
			return visitor.visitStream(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EatContext extends ParserRuleContext {
	public _NL: Token;
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RFilter.NL);
		} else {
			return this.getToken(RFilter.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RFilter.RULE_eat; }
	// @Override
	public enterRule(listener: RFilterListener): void {
		if (listener.enterEat) {
			listener.enterEat(this);
		}
	}
	// @Override
	public exitRule(listener: RFilterListener): void {
		if (listener.exitEat) {
			listener.exitEat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RFilterVisitor<Result>): Result {
		if (visitor.visitEat) {
			return visitor.visitEat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElemContext extends ParserRuleContext {
	public op(): OpContext | undefined {
		return this.tryGetRuleContext(0, OpContext);
	}
	public eat(): EatContext[];
	public eat(i: number): EatContext;
	public eat(i?: number): EatContext | EatContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EatContext);
		} else {
			return this.getRuleContext(i, EatContext);
		}
	}
	public atom(): AtomContext | undefined {
		return this.tryGetRuleContext(0, AtomContext);
	}
	public elem(): ElemContext[];
	public elem(i: number): ElemContext;
	public elem(i?: number): ElemContext | ElemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElemContext);
		} else {
			return this.getRuleContext(i, ElemContext);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RFilter.NL);
		} else {
			return this.getToken(RFilter.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RFilter.RULE_elem; }
	// @Override
	public enterRule(listener: RFilterListener): void {
		if (listener.enterElem) {
			listener.enterElem(this);
		}
	}
	// @Override
	public exitRule(listener: RFilterListener): void {
		if (listener.exitElem) {
			listener.exitElem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RFilterVisitor<Result>): Result {
		if (visitor.visitElem) {
			return visitor.visitElem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(RFilter.ID, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(RFilter.STRING, 0); }
	public HEX(): TerminalNode | undefined { return this.tryGetToken(RFilter.HEX, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(RFilter.INT, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(RFilter.FLOAT, 0); }
	public COMPLEX(): TerminalNode | undefined { return this.tryGetToken(RFilter.COMPLEX, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RFilter.RULE_atom; }
	// @Override
	public enterRule(listener: RFilterListener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: RFilterListener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RFilterVisitor<Result>): Result {
		if (visitor.visitAtom) {
			return visitor.visitAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OpContext extends ParserRuleContext {
	public USER_OP(): TerminalNode { return this.getToken(RFilter.USER_OP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RFilter.RULE_op; }
	// @Override
	public enterRule(listener: RFilterListener): void {
		if (listener.enterOp) {
			listener.enterOp(this);
		}
	}
	// @Override
	public exitRule(listener: RFilterListener): void {
		if (listener.exitOp) {
			listener.exitOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RFilterVisitor<Result>): Result {
		if (visitor.visitOp) {
			return visitor.visitOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


