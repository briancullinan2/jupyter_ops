// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/protobuf3/Protobuf3.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { Protobuf3Listener } from "./Protobuf3Listener";

export class Protobuf3Parser extends Parser {
	public static readonly T__0 = 1;
	public static readonly BOOL = 2;
	public static readonly BYTES = 3;
	public static readonly DOUBLE = 4;
	public static readonly ENUM = 5;
	public static readonly FIXED32 = 6;
	public static readonly FIXED64 = 7;
	public static readonly FLOAT = 8;
	public static readonly IMPORT = 9;
	public static readonly INT32 = 10;
	public static readonly INT64 = 11;
	public static readonly MAP = 12;
	public static readonly MESSAGE = 13;
	public static readonly ONEOF = 14;
	public static readonly OPTION = 15;
	public static readonly PACKAGE = 16;
	public static readonly PROTO3_DOUBLE = 17;
	public static readonly PROTO3_SINGLE = 18;
	public static readonly PUBLIC = 19;
	public static readonly REPEATED = 20;
	public static readonly RESERVED = 21;
	public static readonly RETURNS = 22;
	public static readonly RPC = 23;
	public static readonly SERVICE = 24;
	public static readonly SFIXED32 = 25;
	public static readonly SFIXED64 = 26;
	public static readonly SINT32 = 27;
	public static readonly SINT64 = 28;
	public static readonly STREAM = 29;
	public static readonly STRING = 30;
	public static readonly SYNTAX = 31;
	public static readonly TO = 32;
	public static readonly UINT32 = 33;
	public static readonly UINT64 = 34;
	public static readonly WEAK = 35;
	public static readonly Ident = 36;
	public static readonly IntLit = 37;
	public static readonly FloatLit = 38;
	public static readonly BoolLit = 39;
	public static readonly StrLit = 40;
	public static readonly Quote = 41;
	public static readonly LPAREN = 42;
	public static readonly RPAREN = 43;
	public static readonly LBRACE = 44;
	public static readonly RBRACE = 45;
	public static readonly LBRACK = 46;
	public static readonly RBRACK = 47;
	public static readonly LCHEVR = 48;
	public static readonly RCHEVR = 49;
	public static readonly SEMI = 50;
	public static readonly COMMA = 51;
	public static readonly DOT = 52;
	public static readonly MINUS = 53;
	public static readonly PLUS = 54;
	public static readonly ASSIGN = 55;
	public static readonly WS = 56;
	public static readonly COMMENT = 57;
	public static readonly LINE_COMMENT = 58;
	public static readonly RULE_proto = 0;
	public static readonly RULE_syntax = 1;
	public static readonly RULE_importStatement = 2;
	public static readonly RULE_packageStatement = 3;
	public static readonly RULE_option = 4;
	public static readonly RULE_optionName = 5;
	public static readonly RULE_optionBody = 6;
	public static readonly RULE_optionBodyVariable = 7;
	public static readonly RULE_topLevelDef = 8;
	public static readonly RULE_message = 9;
	public static readonly RULE_messageBody = 10;
	public static readonly RULE_enumDefinition = 11;
	public static readonly RULE_enumBody = 12;
	public static readonly RULE_enumField = 13;
	public static readonly RULE_enumValueOption = 14;
	public static readonly RULE_service = 15;
	public static readonly RULE_rpc = 16;
	public static readonly RULE_reserved = 17;
	public static readonly RULE_ranges = 18;
	public static readonly RULE_range = 19;
	public static readonly RULE_fieldNames = 20;
	public static readonly RULE_type = 21;
	public static readonly RULE_fieldNumber = 22;
	public static readonly RULE_field = 23;
	public static readonly RULE_fieldOptions = 24;
	public static readonly RULE_fieldOption = 25;
	public static readonly RULE_oneof = 26;
	public static readonly RULE_oneofField = 27;
	public static readonly RULE_mapField = 28;
	public static readonly RULE_keyType = 29;
	public static readonly RULE_reservedWord = 30;
	public static readonly RULE_fullIdent = 31;
	public static readonly RULE_messageName = 32;
	public static readonly RULE_enumName = 33;
	public static readonly RULE_messageOrEnumName = 34;
	public static readonly RULE_fieldName = 35;
	public static readonly RULE_oneofName = 36;
	public static readonly RULE_mapName = 37;
	public static readonly RULE_serviceName = 38;
	public static readonly RULE_rpcName = 39;
	public static readonly RULE_messageType = 40;
	public static readonly RULE_messageOrEnumType = 41;
	public static readonly RULE_emptyStatement = 42;
	public static readonly RULE_constant = 43;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"proto", "syntax", "importStatement", "packageStatement", "option", "optionName", 
		"optionBody", "optionBodyVariable", "topLevelDef", "message", "messageBody", 
		"enumDefinition", "enumBody", "enumField", "enumValueOption", "service", 
		"rpc", "reserved", "ranges", "range", "fieldNames", "type", "fieldNumber", 
		"field", "fieldOptions", "fieldOption", "oneof", "oneofField", "mapField", 
		"keyType", "reservedWord", "fullIdent", "messageName", "enumName", "messageOrEnumName", 
		"fieldName", "oneofName", "mapName", "serviceName", "rpcName", "messageType", 
		"messageOrEnumType", "emptyStatement", "constant",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "':'", "'bool'", "'bytes'", "'double'", "'enum'", "'fixed32'", 
		"'fixed64'", "'float'", "'import'", "'int32'", "'int64'", "'map'", "'message'", 
		"'oneof'", "'option'", "'package'", "'\"proto3\"'", "''roto3''", "'public'", 
		"'repeated'", "'reserved'", "'returns'", "'rpc'", "'service'", "'sfixed32'", 
		"'sfixed64'", "'sint32'", "'sint64'", "'stream'", "'string'", "'syntax'", 
		"'to'", "'uint32'", "'uint64'", "'weak'", undefined, undefined, undefined, 
		undefined, undefined, undefined, "'('", "')'", "'{'", "'}'", "'['", "']'", 
		"'<'", "'>'", "';'", "','", "'.'", "'-'", "'+'", "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "BOOL", "BYTES", "DOUBLE", "ENUM", "FIXED32", "FIXED64", 
		"FLOAT", "IMPORT", "INT32", "INT64", "MAP", "MESSAGE", "ONEOF", "OPTION", 
		"PACKAGE", "PROTO3_DOUBLE", "PROTO3_SINGLE", "PUBLIC", "REPEATED", "RESERVED", 
		"RETURNS", "RPC", "SERVICE", "SFIXED32", "SFIXED64", "SINT32", "SINT64", 
		"STREAM", "STRING", "SYNTAX", "TO", "UINT32", "UINT64", "WEAK", "Ident", 
		"IntLit", "FloatLit", "BoolLit", "StrLit", "Quote", "LPAREN", "RPAREN", 
		"LBRACE", "RBRACE", "LBRACK", "RBRACK", "LCHEVR", "RCHEVR", "SEMI", "COMMA", 
		"DOT", "MINUS", "PLUS", "ASSIGN", "WS", "COMMENT", "LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(Protobuf3Parser._LITERAL_NAMES, Protobuf3Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return Protobuf3Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Protobuf3.g4"; }

	// @Override
	public get ruleNames(): string[] { return Protobuf3Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return Protobuf3Parser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(Protobuf3Parser._ATN, this);
	}
	// @RuleVersion(0)
	public proto(): ProtoContext {
		let _localctx: ProtoContext = new ProtoContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, Protobuf3Parser.RULE_proto);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 88;
			this.syntax();
			this.state = 96;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Protobuf3Parser.ENUM) | (1 << Protobuf3Parser.IMPORT) | (1 << Protobuf3Parser.MESSAGE) | (1 << Protobuf3Parser.OPTION) | (1 << Protobuf3Parser.PACKAGE) | (1 << Protobuf3Parser.SERVICE))) !== 0) || _la === Protobuf3Parser.SEMI) {
				{
				this.state = 94;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Protobuf3Parser.IMPORT:
					{
					this.state = 89;
					this.importStatement();
					}
					break;
				case Protobuf3Parser.PACKAGE:
					{
					this.state = 90;
					this.packageStatement();
					}
					break;
				case Protobuf3Parser.OPTION:
					{
					this.state = 91;
					this.option();
					}
					break;
				case Protobuf3Parser.ENUM:
				case Protobuf3Parser.MESSAGE:
				case Protobuf3Parser.SERVICE:
					{
					this.state = 92;
					this.topLevelDef();
					}
					break;
				case Protobuf3Parser.SEMI:
					{
					this.state = 93;
					this.emptyStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 98;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 99;
			this.match(Protobuf3Parser.EOF);
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
	public syntax(): SyntaxContext {
		let _localctx: SyntaxContext = new SyntaxContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, Protobuf3Parser.RULE_syntax);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			this.match(Protobuf3Parser.SYNTAX);
			this.state = 102;
			this.match(Protobuf3Parser.ASSIGN);
			this.state = 103;
			_la = this._input.LA(1);
			if (!(_la === Protobuf3Parser.PROTO3_DOUBLE || _la === Protobuf3Parser.PROTO3_SINGLE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 104;
			this.match(Protobuf3Parser.SEMI);
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
	public importStatement(): ImportStatementContext {
		let _localctx: ImportStatementContext = new ImportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, Protobuf3Parser.RULE_importStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 106;
			this.match(Protobuf3Parser.IMPORT);
			this.state = 108;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Protobuf3Parser.PUBLIC || _la === Protobuf3Parser.WEAK) {
				{
				this.state = 107;
				_la = this._input.LA(1);
				if (!(_la === Protobuf3Parser.PUBLIC || _la === Protobuf3Parser.WEAK)) {
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

			this.state = 110;
			this.match(Protobuf3Parser.StrLit);
			this.state = 111;
			this.match(Protobuf3Parser.SEMI);
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
	public packageStatement(): PackageStatementContext {
		let _localctx: PackageStatementContext = new PackageStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, Protobuf3Parser.RULE_packageStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			this.match(Protobuf3Parser.PACKAGE);
			this.state = 114;
			this.fullIdent();
			this.state = 115;
			this.match(Protobuf3Parser.SEMI);
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
	public option(): OptionContext {
		let _localctx: OptionContext = new OptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, Protobuf3Parser.RULE_option);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117;
			this.match(Protobuf3Parser.OPTION);
			this.state = 118;
			this.optionName();
			this.state = 119;
			this.match(Protobuf3Parser.ASSIGN);
			this.state = 122;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Protobuf3Parser.Ident:
			case Protobuf3Parser.IntLit:
			case Protobuf3Parser.FloatLit:
			case Protobuf3Parser.BoolLit:
			case Protobuf3Parser.StrLit:
			case Protobuf3Parser.MINUS:
			case Protobuf3Parser.PLUS:
				{
				this.state = 120;
				this.constant();
				}
				break;
			case Protobuf3Parser.LBRACE:
				{
				this.state = 121;
				this.optionBody();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 124;
			this.match(Protobuf3Parser.SEMI);
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
	public optionName(): OptionNameContext {
		let _localctx: OptionNameContext = new OptionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, Protobuf3Parser.RULE_optionName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 131;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Protobuf3Parser.Ident:
				{
				this.state = 126;
				this.match(Protobuf3Parser.Ident);
				}
				break;
			case Protobuf3Parser.LPAREN:
				{
				this.state = 127;
				this.match(Protobuf3Parser.LPAREN);
				this.state = 128;
				this.fullIdent();
				this.state = 129;
				this.match(Protobuf3Parser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 140;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Protobuf3Parser.DOT) {
				{
				{
				this.state = 133;
				this.match(Protobuf3Parser.DOT);
				this.state = 136;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Protobuf3Parser.Ident:
					{
					this.state = 134;
					this.match(Protobuf3Parser.Ident);
					}
					break;
				case Protobuf3Parser.MESSAGE:
				case Protobuf3Parser.OPTION:
				case Protobuf3Parser.PACKAGE:
				case Protobuf3Parser.RPC:
				case Protobuf3Parser.SERVICE:
				case Protobuf3Parser.STREAM:
				case Protobuf3Parser.STRING:
				case Protobuf3Parser.SYNTAX:
				case Protobuf3Parser.WEAK:
					{
					this.state = 135;
					this.reservedWord();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 142;
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
	public optionBody(): OptionBodyContext {
		let _localctx: OptionBodyContext = new OptionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, Protobuf3Parser.RULE_optionBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
			this.match(Protobuf3Parser.LBRACE);
			this.state = 147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Protobuf3Parser.Ident || _la === Protobuf3Parser.LPAREN) {
				{
				{
				this.state = 144;
				this.optionBodyVariable();
				}
				}
				this.state = 149;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 150;
			this.match(Protobuf3Parser.RBRACE);
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
	public optionBodyVariable(): OptionBodyVariableContext {
		let _localctx: OptionBodyVariableContext = new OptionBodyVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, Protobuf3Parser.RULE_optionBodyVariable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 152;
			this.optionName();
			this.state = 153;
			this.match(Protobuf3Parser.T__0);
			this.state = 154;
			this.constant();
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
	public topLevelDef(): TopLevelDefContext {
		let _localctx: TopLevelDefContext = new TopLevelDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, Protobuf3Parser.RULE_topLevelDef);
		try {
			this.state = 159;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Protobuf3Parser.MESSAGE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 156;
				this.message();
				}
				break;
			case Protobuf3Parser.ENUM:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 157;
				this.enumDefinition();
				}
				break;
			case Protobuf3Parser.SERVICE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 158;
				this.service();
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
	public message(): MessageContext {
		let _localctx: MessageContext = new MessageContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, Protobuf3Parser.RULE_message);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 161;
			this.match(Protobuf3Parser.MESSAGE);
			this.state = 162;
			this.messageName();
			this.state = 163;
			this.messageBody();
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
	public messageBody(): MessageBodyContext {
		let _localctx: MessageBodyContext = new MessageBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, Protobuf3Parser.RULE_messageBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 165;
			this.match(Protobuf3Parser.LBRACE);
			this.state = 176;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Protobuf3Parser.BOOL) | (1 << Protobuf3Parser.BYTES) | (1 << Protobuf3Parser.DOUBLE) | (1 << Protobuf3Parser.ENUM) | (1 << Protobuf3Parser.FIXED32) | (1 << Protobuf3Parser.FIXED64) | (1 << Protobuf3Parser.FLOAT) | (1 << Protobuf3Parser.INT32) | (1 << Protobuf3Parser.INT64) | (1 << Protobuf3Parser.MAP) | (1 << Protobuf3Parser.MESSAGE) | (1 << Protobuf3Parser.ONEOF) | (1 << Protobuf3Parser.OPTION) | (1 << Protobuf3Parser.PACKAGE) | (1 << Protobuf3Parser.REPEATED) | (1 << Protobuf3Parser.RESERVED) | (1 << Protobuf3Parser.RPC) | (1 << Protobuf3Parser.SERVICE) | (1 << Protobuf3Parser.SFIXED32) | (1 << Protobuf3Parser.SFIXED64) | (1 << Protobuf3Parser.SINT32) | (1 << Protobuf3Parser.SINT64) | (1 << Protobuf3Parser.STREAM) | (1 << Protobuf3Parser.STRING) | (1 << Protobuf3Parser.SYNTAX))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Protobuf3Parser.UINT32 - 33)) | (1 << (Protobuf3Parser.UINT64 - 33)) | (1 << (Protobuf3Parser.WEAK - 33)) | (1 << (Protobuf3Parser.Ident - 33)) | (1 << (Protobuf3Parser.SEMI - 33)) | (1 << (Protobuf3Parser.DOT - 33)))) !== 0)) {
				{
				this.state = 174;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 166;
					this.field();
					}
					break;

				case 2:
					{
					this.state = 167;
					this.enumDefinition();
					}
					break;

				case 3:
					{
					this.state = 168;
					this.message();
					}
					break;

				case 4:
					{
					this.state = 169;
					this.option();
					}
					break;

				case 5:
					{
					this.state = 170;
					this.oneof();
					}
					break;

				case 6:
					{
					this.state = 171;
					this.mapField();
					}
					break;

				case 7:
					{
					this.state = 172;
					this.reserved();
					}
					break;

				case 8:
					{
					this.state = 173;
					this.emptyStatement();
					}
					break;
				}
				}
				this.state = 178;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 179;
			this.match(Protobuf3Parser.RBRACE);
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
	public enumDefinition(): EnumDefinitionContext {
		let _localctx: EnumDefinitionContext = new EnumDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, Protobuf3Parser.RULE_enumDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 181;
			this.match(Protobuf3Parser.ENUM);
			this.state = 182;
			this.enumName();
			this.state = 183;
			this.enumBody();
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
	public enumBody(): EnumBodyContext {
		let _localctx: EnumBodyContext = new EnumBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, Protobuf3Parser.RULE_enumBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 185;
			this.match(Protobuf3Parser.LBRACE);
			this.state = 191;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Protobuf3Parser.OPTION || _la === Protobuf3Parser.Ident || _la === Protobuf3Parser.SEMI) {
				{
				this.state = 189;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Protobuf3Parser.OPTION:
					{
					this.state = 186;
					this.option();
					}
					break;
				case Protobuf3Parser.Ident:
					{
					this.state = 187;
					this.enumField();
					}
					break;
				case Protobuf3Parser.SEMI:
					{
					this.state = 188;
					this.emptyStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 193;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 194;
			this.match(Protobuf3Parser.RBRACE);
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
	public enumField(): EnumFieldContext {
		let _localctx: EnumFieldContext = new EnumFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, Protobuf3Parser.RULE_enumField);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			this.match(Protobuf3Parser.Ident);
			this.state = 197;
			this.match(Protobuf3Parser.ASSIGN);
			this.state = 199;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Protobuf3Parser.MINUS) {
				{
				this.state = 198;
				this.match(Protobuf3Parser.MINUS);
				}
			}

			this.state = 201;
			this.match(Protobuf3Parser.IntLit);
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Protobuf3Parser.LBRACK) {
				{
				this.state = 202;
				this.match(Protobuf3Parser.LBRACK);
				this.state = 203;
				this.enumValueOption();
				this.state = 208;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Protobuf3Parser.COMMA) {
					{
					{
					this.state = 204;
					this.match(Protobuf3Parser.COMMA);
					this.state = 205;
					this.enumValueOption();
					}
					}
					this.state = 210;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 211;
				this.match(Protobuf3Parser.RBRACK);
				}
			}

			this.state = 215;
			this.match(Protobuf3Parser.SEMI);
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
	public enumValueOption(): EnumValueOptionContext {
		let _localctx: EnumValueOptionContext = new EnumValueOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, Protobuf3Parser.RULE_enumValueOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 217;
			this.optionName();
			this.state = 218;
			this.match(Protobuf3Parser.ASSIGN);
			this.state = 219;
			this.constant();
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
	public service(): ServiceContext {
		let _localctx: ServiceContext = new ServiceContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, Protobuf3Parser.RULE_service);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 221;
			this.match(Protobuf3Parser.SERVICE);
			this.state = 222;
			this.serviceName();
			this.state = 223;
			this.match(Protobuf3Parser.LBRACE);
			this.state = 229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Protobuf3Parser.OPTION || _la === Protobuf3Parser.RPC || _la === Protobuf3Parser.SEMI) {
				{
				this.state = 227;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Protobuf3Parser.OPTION:
					{
					this.state = 224;
					this.option();
					}
					break;
				case Protobuf3Parser.RPC:
					{
					this.state = 225;
					this.rpc();
					}
					break;
				case Protobuf3Parser.SEMI:
					{
					this.state = 226;
					this.emptyStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 231;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 232;
			this.match(Protobuf3Parser.RBRACE);
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
	public rpc(): RpcContext {
		let _localctx: RpcContext = new RpcContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, Protobuf3Parser.RULE_rpc);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 234;
			this.match(Protobuf3Parser.RPC);
			this.state = 235;
			this.rpcName();
			this.state = 236;
			this.match(Protobuf3Parser.LPAREN);
			this.state = 238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Protobuf3Parser.STREAM) {
				{
				this.state = 237;
				this.match(Protobuf3Parser.STREAM);
				}
			}

			this.state = 240;
			this.messageType();
			this.state = 241;
			this.match(Protobuf3Parser.RPAREN);
			this.state = 242;
			this.match(Protobuf3Parser.RETURNS);
			this.state = 243;
			this.match(Protobuf3Parser.LPAREN);
			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Protobuf3Parser.STREAM) {
				{
				this.state = 244;
				this.match(Protobuf3Parser.STREAM);
				}
			}

			this.state = 247;
			this.messageType();
			this.state = 248;
			this.match(Protobuf3Parser.RPAREN);
			this.state = 259;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Protobuf3Parser.LBRACE:
				{
				{
				this.state = 249;
				this.match(Protobuf3Parser.LBRACE);
				this.state = 254;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Protobuf3Parser.OPTION || _la === Protobuf3Parser.SEMI) {
					{
					this.state = 252;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case Protobuf3Parser.OPTION:
						{
						this.state = 250;
						this.option();
						}
						break;
					case Protobuf3Parser.SEMI:
						{
						this.state = 251;
						this.emptyStatement();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 256;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 257;
				this.match(Protobuf3Parser.RBRACE);
				}
				}
				break;
			case Protobuf3Parser.SEMI:
				{
				this.state = 258;
				this.match(Protobuf3Parser.SEMI);
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
	public reserved(): ReservedContext {
		let _localctx: ReservedContext = new ReservedContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, Protobuf3Parser.RULE_reserved);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 261;
			this.match(Protobuf3Parser.RESERVED);
			this.state = 264;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Protobuf3Parser.IntLit:
				{
				this.state = 262;
				this.ranges();
				}
				break;
			case Protobuf3Parser.StrLit:
				{
				this.state = 263;
				this.fieldNames();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 266;
			this.match(Protobuf3Parser.SEMI);
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
	public ranges(): RangesContext {
		let _localctx: RangesContext = new RangesContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, Protobuf3Parser.RULE_ranges);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 268;
			this.range();
			this.state = 273;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Protobuf3Parser.COMMA) {
				{
				{
				this.state = 269;
				this.match(Protobuf3Parser.COMMA);
				this.state = 270;
				this.range();
				}
				}
				this.state = 275;
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
	public range(): RangeContext {
		let _localctx: RangeContext = new RangeContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, Protobuf3Parser.RULE_range);
		try {
			this.state = 280;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 276;
				this.match(Protobuf3Parser.IntLit);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 277;
				this.match(Protobuf3Parser.IntLit);
				this.state = 278;
				this.match(Protobuf3Parser.TO);
				this.state = 279;
				this.match(Protobuf3Parser.IntLit);
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
	public fieldNames(): FieldNamesContext {
		let _localctx: FieldNamesContext = new FieldNamesContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, Protobuf3Parser.RULE_fieldNames);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 282;
			this.match(Protobuf3Parser.StrLit);
			this.state = 287;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Protobuf3Parser.COMMA) {
				{
				{
				this.state = 283;
				this.match(Protobuf3Parser.COMMA);
				this.state = 284;
				this.match(Protobuf3Parser.StrLit);
				}
				}
				this.state = 289;
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
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, Protobuf3Parser.RULE_type);
		let _la: number;
		try {
			this.state = 292;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 290;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Protobuf3Parser.BOOL) | (1 << Protobuf3Parser.BYTES) | (1 << Protobuf3Parser.DOUBLE) | (1 << Protobuf3Parser.FIXED32) | (1 << Protobuf3Parser.FIXED64) | (1 << Protobuf3Parser.FLOAT) | (1 << Protobuf3Parser.INT32) | (1 << Protobuf3Parser.INT64) | (1 << Protobuf3Parser.SFIXED32) | (1 << Protobuf3Parser.SFIXED64) | (1 << Protobuf3Parser.SINT32) | (1 << Protobuf3Parser.SINT64) | (1 << Protobuf3Parser.STRING))) !== 0) || _la === Protobuf3Parser.UINT32 || _la === Protobuf3Parser.UINT64)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 291;
				this.messageOrEnumType();
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
	public fieldNumber(): FieldNumberContext {
		let _localctx: FieldNumberContext = new FieldNumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, Protobuf3Parser.RULE_fieldNumber);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 294;
			this.match(Protobuf3Parser.IntLit);
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
	public field(): FieldContext {
		let _localctx: FieldContext = new FieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, Protobuf3Parser.RULE_field);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 297;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Protobuf3Parser.REPEATED) {
				{
				this.state = 296;
				this.match(Protobuf3Parser.REPEATED);
				}
			}

			this.state = 299;
			this.type();
			this.state = 300;
			this.fieldName();
			this.state = 301;
			this.match(Protobuf3Parser.ASSIGN);
			this.state = 302;
			this.fieldNumber();
			this.state = 307;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Protobuf3Parser.LBRACK) {
				{
				this.state = 303;
				this.match(Protobuf3Parser.LBRACK);
				this.state = 304;
				this.fieldOptions();
				this.state = 305;
				this.match(Protobuf3Parser.RBRACK);
				}
			}

			this.state = 309;
			this.match(Protobuf3Parser.SEMI);
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
	public fieldOptions(): FieldOptionsContext {
		let _localctx: FieldOptionsContext = new FieldOptionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, Protobuf3Parser.RULE_fieldOptions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 311;
			this.fieldOption();
			this.state = 316;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Protobuf3Parser.COMMA) {
				{
				{
				this.state = 312;
				this.match(Protobuf3Parser.COMMA);
				this.state = 313;
				this.fieldOption();
				}
				}
				this.state = 318;
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
	public fieldOption(): FieldOptionContext {
		let _localctx: FieldOptionContext = new FieldOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, Protobuf3Parser.RULE_fieldOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 319;
			this.optionName();
			this.state = 320;
			this.match(Protobuf3Parser.ASSIGN);
			this.state = 321;
			this.constant();
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
	public oneof(): OneofContext {
		let _localctx: OneofContext = new OneofContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, Protobuf3Parser.RULE_oneof);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 323;
			this.match(Protobuf3Parser.ONEOF);
			this.state = 324;
			this.oneofName();
			this.state = 325;
			this.match(Protobuf3Parser.LBRACE);
			this.state = 330;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Protobuf3Parser.BOOL) | (1 << Protobuf3Parser.BYTES) | (1 << Protobuf3Parser.DOUBLE) | (1 << Protobuf3Parser.FIXED32) | (1 << Protobuf3Parser.FIXED64) | (1 << Protobuf3Parser.FLOAT) | (1 << Protobuf3Parser.INT32) | (1 << Protobuf3Parser.INT64) | (1 << Protobuf3Parser.MESSAGE) | (1 << Protobuf3Parser.OPTION) | (1 << Protobuf3Parser.PACKAGE) | (1 << Protobuf3Parser.RPC) | (1 << Protobuf3Parser.SERVICE) | (1 << Protobuf3Parser.SFIXED32) | (1 << Protobuf3Parser.SFIXED64) | (1 << Protobuf3Parser.SINT32) | (1 << Protobuf3Parser.SINT64) | (1 << Protobuf3Parser.STREAM) | (1 << Protobuf3Parser.STRING) | (1 << Protobuf3Parser.SYNTAX))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Protobuf3Parser.UINT32 - 33)) | (1 << (Protobuf3Parser.UINT64 - 33)) | (1 << (Protobuf3Parser.WEAK - 33)) | (1 << (Protobuf3Parser.Ident - 33)) | (1 << (Protobuf3Parser.SEMI - 33)) | (1 << (Protobuf3Parser.DOT - 33)))) !== 0)) {
				{
				this.state = 328;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Protobuf3Parser.BOOL:
				case Protobuf3Parser.BYTES:
				case Protobuf3Parser.DOUBLE:
				case Protobuf3Parser.FIXED32:
				case Protobuf3Parser.FIXED64:
				case Protobuf3Parser.FLOAT:
				case Protobuf3Parser.INT32:
				case Protobuf3Parser.INT64:
				case Protobuf3Parser.MESSAGE:
				case Protobuf3Parser.OPTION:
				case Protobuf3Parser.PACKAGE:
				case Protobuf3Parser.RPC:
				case Protobuf3Parser.SERVICE:
				case Protobuf3Parser.SFIXED32:
				case Protobuf3Parser.SFIXED64:
				case Protobuf3Parser.SINT32:
				case Protobuf3Parser.SINT64:
				case Protobuf3Parser.STREAM:
				case Protobuf3Parser.STRING:
				case Protobuf3Parser.SYNTAX:
				case Protobuf3Parser.UINT32:
				case Protobuf3Parser.UINT64:
				case Protobuf3Parser.WEAK:
				case Protobuf3Parser.Ident:
				case Protobuf3Parser.DOT:
					{
					this.state = 326;
					this.oneofField();
					}
					break;
				case Protobuf3Parser.SEMI:
					{
					this.state = 327;
					this.emptyStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 332;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 333;
			this.match(Protobuf3Parser.RBRACE);
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
	public oneofField(): OneofFieldContext {
		let _localctx: OneofFieldContext = new OneofFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, Protobuf3Parser.RULE_oneofField);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 335;
			this.type();
			this.state = 336;
			this.fieldName();
			this.state = 337;
			this.match(Protobuf3Parser.ASSIGN);
			this.state = 338;
			this.fieldNumber();
			this.state = 343;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Protobuf3Parser.LBRACK) {
				{
				this.state = 339;
				this.match(Protobuf3Parser.LBRACK);
				this.state = 340;
				this.fieldOptions();
				this.state = 341;
				this.match(Protobuf3Parser.RBRACK);
				}
			}

			this.state = 345;
			this.match(Protobuf3Parser.SEMI);
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
	public mapField(): MapFieldContext {
		let _localctx: MapFieldContext = new MapFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, Protobuf3Parser.RULE_mapField);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 347;
			this.match(Protobuf3Parser.MAP);
			this.state = 348;
			this.match(Protobuf3Parser.LCHEVR);
			this.state = 349;
			this.keyType();
			this.state = 350;
			this.match(Protobuf3Parser.COMMA);
			this.state = 351;
			this.type();
			this.state = 352;
			this.match(Protobuf3Parser.RCHEVR);
			this.state = 353;
			this.mapName();
			this.state = 354;
			this.match(Protobuf3Parser.ASSIGN);
			this.state = 355;
			this.fieldNumber();
			this.state = 360;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Protobuf3Parser.LBRACK) {
				{
				this.state = 356;
				this.match(Protobuf3Parser.LBRACK);
				this.state = 357;
				this.fieldOptions();
				this.state = 358;
				this.match(Protobuf3Parser.RBRACK);
				}
			}

			this.state = 362;
			this.match(Protobuf3Parser.SEMI);
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
	public keyType(): KeyTypeContext {
		let _localctx: KeyTypeContext = new KeyTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, Protobuf3Parser.RULE_keyType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 364;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Protobuf3Parser.BOOL) | (1 << Protobuf3Parser.FIXED32) | (1 << Protobuf3Parser.FIXED64) | (1 << Protobuf3Parser.INT32) | (1 << Protobuf3Parser.INT64) | (1 << Protobuf3Parser.SFIXED32) | (1 << Protobuf3Parser.SFIXED64) | (1 << Protobuf3Parser.SINT32) | (1 << Protobuf3Parser.SINT64) | (1 << Protobuf3Parser.STRING))) !== 0) || _la === Protobuf3Parser.UINT32 || _la === Protobuf3Parser.UINT64)) {
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
	public reservedWord(): ReservedWordContext {
		let _localctx: ReservedWordContext = new ReservedWordContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, Protobuf3Parser.RULE_reservedWord);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 366;
			_la = this._input.LA(1);
			if (!(((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & ((1 << (Protobuf3Parser.MESSAGE - 13)) | (1 << (Protobuf3Parser.OPTION - 13)) | (1 << (Protobuf3Parser.PACKAGE - 13)) | (1 << (Protobuf3Parser.RPC - 13)) | (1 << (Protobuf3Parser.SERVICE - 13)) | (1 << (Protobuf3Parser.STREAM - 13)) | (1 << (Protobuf3Parser.STRING - 13)) | (1 << (Protobuf3Parser.SYNTAX - 13)) | (1 << (Protobuf3Parser.WEAK - 13)))) !== 0))) {
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
	public fullIdent(): FullIdentContext {
		let _localctx: FullIdentContext = new FullIdentContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, Protobuf3Parser.RULE_fullIdent);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 368;
			this.match(Protobuf3Parser.Ident);
			this.state = 373;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Protobuf3Parser.DOT) {
				{
				{
				this.state = 369;
				this.match(Protobuf3Parser.DOT);
				this.state = 370;
				this.match(Protobuf3Parser.Ident);
				}
				}
				this.state = 375;
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
	public messageName(): MessageNameContext {
		let _localctx: MessageNameContext = new MessageNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, Protobuf3Parser.RULE_messageName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 376;
			this.match(Protobuf3Parser.Ident);
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
	public enumName(): EnumNameContext {
		let _localctx: EnumNameContext = new EnumNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, Protobuf3Parser.RULE_enumName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 378;
			this.match(Protobuf3Parser.Ident);
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
	public messageOrEnumName(): MessageOrEnumNameContext {
		let _localctx: MessageOrEnumNameContext = new MessageOrEnumNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, Protobuf3Parser.RULE_messageOrEnumName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 380;
			this.match(Protobuf3Parser.Ident);
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
	public fieldName(): FieldNameContext {
		let _localctx: FieldNameContext = new FieldNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, Protobuf3Parser.RULE_fieldName);
		try {
			this.state = 384;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Protobuf3Parser.Ident:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 382;
				this.match(Protobuf3Parser.Ident);
				}
				break;
			case Protobuf3Parser.MESSAGE:
			case Protobuf3Parser.OPTION:
			case Protobuf3Parser.PACKAGE:
			case Protobuf3Parser.RPC:
			case Protobuf3Parser.SERVICE:
			case Protobuf3Parser.STREAM:
			case Protobuf3Parser.STRING:
			case Protobuf3Parser.SYNTAX:
			case Protobuf3Parser.WEAK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 383;
				this.reservedWord();
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
	public oneofName(): OneofNameContext {
		let _localctx: OneofNameContext = new OneofNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, Protobuf3Parser.RULE_oneofName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 386;
			this.match(Protobuf3Parser.Ident);
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
	public mapName(): MapNameContext {
		let _localctx: MapNameContext = new MapNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, Protobuf3Parser.RULE_mapName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 388;
			this.match(Protobuf3Parser.Ident);
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
	public serviceName(): ServiceNameContext {
		let _localctx: ServiceNameContext = new ServiceNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, Protobuf3Parser.RULE_serviceName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 390;
			this.match(Protobuf3Parser.Ident);
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
	public rpcName(): RpcNameContext {
		let _localctx: RpcNameContext = new RpcNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, Protobuf3Parser.RULE_rpcName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 392;
			this.match(Protobuf3Parser.Ident);
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
	public messageType(): MessageTypeContext {
		let _localctx: MessageTypeContext = new MessageTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, Protobuf3Parser.RULE_messageType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 395;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Protobuf3Parser.DOT) {
				{
				this.state = 394;
				this.match(Protobuf3Parser.DOT);
				}
			}

			this.state = 401;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 397;
					this.match(Protobuf3Parser.Ident);
					this.state = 398;
					this.match(Protobuf3Parser.DOT);
					}
					}
				}
				this.state = 403;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			}
			this.state = 404;
			this.messageName();
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
	public messageOrEnumType(): MessageOrEnumTypeContext {
		let _localctx: MessageOrEnumTypeContext = new MessageOrEnumTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, Protobuf3Parser.RULE_messageOrEnumType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 407;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Protobuf3Parser.DOT) {
				{
				this.state = 406;
				this.match(Protobuf3Parser.DOT);
				}
			}

			this.state = 416;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 411;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case Protobuf3Parser.Ident:
						{
						this.state = 409;
						this.match(Protobuf3Parser.Ident);
						}
						break;
					case Protobuf3Parser.MESSAGE:
					case Protobuf3Parser.OPTION:
					case Protobuf3Parser.PACKAGE:
					case Protobuf3Parser.RPC:
					case Protobuf3Parser.SERVICE:
					case Protobuf3Parser.STREAM:
					case Protobuf3Parser.STRING:
					case Protobuf3Parser.SYNTAX:
					case Protobuf3Parser.WEAK:
						{
						this.state = 410;
						this.reservedWord();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 413;
					this.match(Protobuf3Parser.DOT);
					}
					}
				}
				this.state = 418;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			}
			this.state = 419;
			this.messageOrEnumName();
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
	public emptyStatement(): EmptyStatementContext {
		let _localctx: EmptyStatementContext = new EmptyStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, Protobuf3Parser.RULE_emptyStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 421;
			this.match(Protobuf3Parser.SEMI);
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
	public constant(): ConstantContext {
		let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, Protobuf3Parser.RULE_constant);
		let _la: number;
		try {
			this.state = 433;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 423;
				this.fullIdent();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 425;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Protobuf3Parser.MINUS || _la === Protobuf3Parser.PLUS) {
					{
					this.state = 424;
					_la = this._input.LA(1);
					if (!(_la === Protobuf3Parser.MINUS || _la === Protobuf3Parser.PLUS)) {
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

				this.state = 427;
				this.match(Protobuf3Parser.IntLit);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 429;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Protobuf3Parser.MINUS || _la === Protobuf3Parser.PLUS) {
					{
					this.state = 428;
					_la = this._input.LA(1);
					if (!(_la === Protobuf3Parser.MINUS || _la === Protobuf3Parser.PLUS)) {
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

				this.state = 431;
				this.match(Protobuf3Parser.FloatLit);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 432;
				_la = this._input.LA(1);
				if (!(_la === Protobuf3Parser.BoolLit || _la === Protobuf3Parser.StrLit)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03<\u01B6\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02" +
		"a\n\x02\f\x02\x0E\x02d\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x04\x03\x04\x05\x04o\n\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05" +
		"\x06}\n\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05" +
		"\x07\x86\n\x07\x03\x07\x03\x07\x03\x07\x05\x07\x8B\n\x07\x07\x07\x8D\n" +
		"\x07\f\x07\x0E\x07\x90\v\x07\x03\b\x03\b\x07\b\x94\n\b\f\b\x0E\b\x97\v" +
		"\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x05\n\xA2\n\n" +
		"\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x07\f\xB1\n\f\f\f\x0E\f\xB4\v\f\x03\f\x03\f\x03\r\x03\r\x03\r" +
		"\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xC0\n\x0E\f\x0E\x0E\x0E" +
		"\xC3\v\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xCA\n\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xD1\n\x0F\f\x0F\x0E\x0F\xD4" +
		"\v\x0F\x03\x0F\x03\x0F\x05\x0F\xD8\n\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11" +
		"\xE6\n\x11\f\x11\x0E\x11\xE9\v\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x05\x12\xF1\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x05\x12\xF8\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\xFF" +
		"\n\x12\f\x12\x0E\x12\u0102\v\x12\x03\x12\x03\x12\x05\x12\u0106\n\x12\x03" +
		"\x13\x03\x13\x03\x13\x05\x13\u010B\n\x13\x03\x13\x03\x13\x03\x14\x03\x14" +
		"\x03\x14\x07\x14\u0112\n\x14\f\x14\x0E\x14\u0115\v\x14\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x05\x15\u011B\n\x15\x03\x16\x03\x16\x03\x16\x07\x16\u0120" +
		"\n\x16\f\x16\x0E\x16\u0123\v\x16\x03\x17\x03\x17\x05\x17\u0127\n\x17\x03" +
		"\x18\x03\x18\x03\x19\x05\x19\u012C\n\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0136\n\x19\x03\x19\x03\x19\x03" +
		"\x1A\x03\x1A\x03\x1A\x07\x1A\u013D\n\x1A\f\x1A\x0E\x1A\u0140\v\x1A\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07" +
		"\x1C\u014B\n\x1C\f\x1C\x0E\x1C\u014E\v\x1C\x03\x1C\x03\x1C\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u015A\n\x1D" +
		"\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u016B\n\x1E\x03" +
		"\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03!\x07!\u0176\n!\f" +
		"!\x0E!\u0179\v!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03%\x03%\x05%\u0183\n" +
		"%\x03&\x03&\x03\'\x03\'\x03(\x03(\x03)\x03)\x03*\x05*\u018E\n*\x03*\x03" +
		"*\x07*\u0192\n*\f*\x0E*\u0195\v*\x03*\x03*\x03+\x05+\u019A\n+\x03+\x03" +
		"+\x05+\u019E\n+\x03+\x07+\u01A1\n+\f+\x0E+\u01A4\v+\x03+\x03+\x03,\x03" +
		",\x03-\x03-\x05-\u01AC\n-\x03-\x03-\x05-\u01B0\n-\x03-\x03-\x05-\u01B4" +
		"\n-\x03-\x02\x02\x02.\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02" +
		">\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02" +
		"\x02\t\x03\x02\x13\x14\x04\x02\x15\x15%%\b\x02\x04\x06\b\n\f\r\x1B\x1E" +
		"  #$\b\x02\x04\x04\b\t\f\r\x1B\x1E  #$\x07\x02\x0F\x0F\x11\x12\x19\x1A" +
		"\x1F!%%\x03\x0278\x03\x02)*\x02\u01C4\x02Z\x03\x02\x02\x02\x04g\x03\x02" +
		"\x02\x02\x06l\x03\x02\x02\x02\bs\x03\x02\x02\x02\nw\x03\x02\x02\x02\f" +
		"\x85\x03\x02\x02\x02\x0E\x91\x03\x02\x02\x02\x10\x9A\x03\x02\x02\x02\x12" +
		"\xA1\x03\x02\x02\x02\x14\xA3\x03\x02\x02\x02\x16\xA7\x03\x02\x02\x02\x18" +
		"\xB7\x03\x02\x02\x02\x1A\xBB\x03\x02\x02\x02\x1C\xC6\x03\x02\x02\x02\x1E" +
		"\xDB\x03\x02\x02\x02 \xDF\x03\x02\x02\x02\"\xEC\x03\x02\x02\x02$\u0107" +
		"\x03\x02\x02\x02&\u010E\x03\x02\x02\x02(\u011A\x03\x02\x02\x02*\u011C" +
		"\x03\x02\x02\x02,\u0126\x03\x02\x02\x02.\u0128\x03\x02\x02\x020\u012B" +
		"\x03\x02\x02\x022\u0139\x03\x02\x02\x024\u0141\x03\x02\x02\x026\u0145" +
		"\x03\x02\x02\x028\u0151\x03\x02\x02\x02:\u015D\x03\x02\x02\x02<\u016E" +
		"\x03\x02\x02\x02>\u0170\x03\x02\x02\x02@\u0172\x03\x02\x02\x02B\u017A" +
		"\x03\x02\x02\x02D\u017C\x03\x02\x02\x02F\u017E\x03\x02\x02\x02H\u0182" +
		"\x03\x02\x02\x02J\u0184\x03\x02\x02\x02L\u0186\x03\x02\x02\x02N\u0188" +
		"\x03\x02\x02\x02P\u018A\x03\x02\x02\x02R\u018D\x03\x02\x02\x02T\u0199" +
		"\x03\x02\x02\x02V\u01A7\x03\x02\x02\x02X\u01B3\x03\x02\x02\x02Zb\x05\x04" +
		"\x03\x02[a\x05\x06\x04\x02\\a\x05\b\x05\x02]a\x05\n\x06\x02^a\x05\x12" +
		"\n\x02_a\x05V,\x02`[\x03\x02\x02\x02`\\\x03\x02\x02\x02`]\x03\x02\x02" +
		"\x02`^\x03\x02\x02\x02`_\x03\x02\x02\x02ad\x03\x02\x02\x02b`\x03\x02\x02" +
		"\x02bc\x03\x02\x02\x02ce\x03\x02\x02\x02db\x03\x02\x02\x02ef\x07\x02\x02" +
		"\x03f\x03\x03\x02\x02\x02gh\x07!\x02\x02hi\x079\x02\x02ij\t\x02\x02\x02" +
		"jk\x074\x02\x02k\x05\x03\x02\x02\x02ln\x07\v\x02\x02mo\t\x03\x02\x02n" +
		"m\x03\x02\x02\x02no\x03\x02\x02\x02op\x03\x02\x02\x02pq\x07*\x02\x02q" +
		"r\x074\x02\x02r\x07\x03\x02\x02\x02st\x07\x12\x02\x02tu\x05@!\x02uv\x07" +
		"4\x02\x02v\t\x03\x02\x02\x02wx\x07\x11\x02\x02xy\x05\f\x07\x02y|\x079" +
		"\x02\x02z}\x05X-\x02{}\x05\x0E\b\x02|z\x03\x02\x02\x02|{\x03\x02\x02\x02" +
		"}~\x03\x02\x02\x02~\x7F\x074\x02\x02\x7F\v\x03\x02\x02\x02\x80\x86\x07" +
		"&\x02\x02\x81\x82\x07,\x02\x02\x82\x83\x05@!\x02\x83\x84\x07-\x02\x02" +
		"\x84\x86\x03\x02\x02\x02\x85\x80\x03\x02\x02\x02\x85\x81\x03\x02\x02\x02" +
		"\x86\x8E\x03\x02\x02\x02\x87\x8A\x076\x02\x02\x88\x8B\x07&\x02\x02\x89" +
		"\x8B\x05> \x02\x8A\x88\x03\x02\x02\x02\x8A\x89\x03\x02\x02\x02\x8B\x8D" +
		"\x03\x02\x02\x02\x8C\x87\x03\x02\x02\x02\x8D\x90\x03\x02\x02\x02\x8E\x8C" +
		"\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\r\x03\x02\x02\x02\x90\x8E" +
		"\x03\x02\x02\x02\x91\x95\x07.\x02\x02\x92\x94\x05\x10\t\x02\x93\x92\x03" +
		"\x02\x02\x02\x94\x97\x03\x02\x02\x02\x95\x93\x03\x02\x02\x02\x95\x96\x03" +
		"\x02\x02\x02\x96\x98\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02\x98\x99\x07" +
		"/\x02\x02\x99\x0F\x03\x02\x02\x02\x9A\x9B\x05\f\x07\x02\x9B\x9C\x07\x03" +
		"\x02\x02\x9C\x9D\x05X-\x02\x9D\x11\x03\x02\x02\x02\x9E\xA2\x05\x14\v\x02" +
		"\x9F\xA2\x05\x18\r\x02\xA0\xA2\x05 \x11\x02\xA1\x9E\x03\x02\x02\x02\xA1" +
		"\x9F\x03\x02\x02\x02\xA1\xA0\x03\x02\x02\x02\xA2\x13\x03\x02\x02\x02\xA3" +
		"\xA4\x07\x0F\x02\x02\xA4\xA5\x05B\"\x02\xA5\xA6\x05\x16\f\x02\xA6\x15" +
		"\x03\x02\x02\x02\xA7\xB2\x07.\x02\x02\xA8\xB1\x050\x19\x02\xA9\xB1\x05" +
		"\x18\r\x02\xAA\xB1\x05\x14\v\x02\xAB\xB1\x05\n\x06\x02\xAC\xB1\x056\x1C" +
		"\x02\xAD\xB1\x05:\x1E\x02\xAE\xB1\x05$\x13\x02\xAF\xB1\x05V,\x02\xB0\xA8" +
		"\x03\x02\x02\x02\xB0\xA9\x03\x02\x02\x02\xB0\xAA\x03\x02\x02\x02\xB0\xAB" +
		"\x03\x02\x02\x02\xB0\xAC\x03\x02\x02\x02\xB0\xAD\x03\x02\x02\x02\xB0\xAE" +
		"\x03\x02\x02\x02\xB0\xAF\x03\x02\x02\x02\xB1\xB4\x03\x02\x02\x02\xB2\xB0" +
		"\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB5\x03\x02\x02\x02\xB4\xB2" +
		"\x03\x02\x02\x02\xB5\xB6\x07/\x02\x02\xB6\x17\x03\x02\x02\x02\xB7\xB8" +
		"\x07\x07\x02\x02\xB8\xB9\x05D#\x02\xB9\xBA\x05\x1A\x0E\x02\xBA\x19\x03" +
		"\x02\x02\x02\xBB\xC1\x07.\x02\x02\xBC\xC0\x05\n\x06\x02\xBD\xC0\x05\x1C" +
		"\x0F\x02\xBE\xC0\x05V,\x02\xBF\xBC\x03\x02\x02\x02\xBF\xBD\x03\x02\x02" +
		"\x02\xBF\xBE\x03\x02\x02\x02\xC0\xC3\x03\x02\x02\x02\xC1\xBF\x03\x02\x02" +
		"\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC4\x03\x02\x02\x02\xC3\xC1\x03\x02\x02" +
		"\x02\xC4\xC5\x07/\x02\x02\xC5\x1B\x03\x02\x02\x02\xC6\xC7\x07&\x02\x02" +
		"\xC7\xC9\x079\x02\x02\xC8\xCA\x077\x02\x02\xC9\xC8\x03\x02\x02\x02\xC9" +
		"\xCA\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xD7\x07\'\x02\x02\xCC" +
		"\xCD\x070\x02\x02\xCD\xD2\x05\x1E\x10\x02\xCE\xCF\x075\x02\x02\xCF\xD1" +
		"\x05\x1E\x10\x02\xD0\xCE\x03\x02\x02\x02\xD1\xD4\x03\x02\x02\x02\xD2\xD0" +
		"\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD5\x03\x02\x02\x02\xD4\xD2" +
		"\x03\x02\x02\x02\xD5\xD6\x071\x02\x02\xD6\xD8\x03\x02\x02\x02\xD7\xCC" +
		"\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDA" +
		"\x074\x02\x02\xDA\x1D\x03\x02\x02\x02\xDB\xDC\x05\f\x07\x02\xDC\xDD\x07" +
		"9\x02\x02\xDD\xDE\x05X-\x02\xDE\x1F\x03\x02\x02\x02\xDF\xE0\x07\x1A\x02" +
		"\x02\xE0\xE1\x05N(\x02\xE1\xE7\x07.\x02\x02\xE2\xE6\x05\n\x06\x02\xE3" +
		"\xE6\x05\"\x12\x02\xE4\xE6\x05V,\x02\xE5\xE2\x03\x02\x02\x02\xE5\xE3\x03" +
		"\x02\x02\x02\xE5\xE4\x03\x02\x02\x02\xE6\xE9\x03\x02\x02\x02\xE7\xE5\x03" +
		"\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\xEA\x03\x02\x02\x02\xE9\xE7\x03" +
		"\x02\x02\x02\xEA\xEB\x07/\x02\x02\xEB!\x03\x02\x02\x02\xEC\xED\x07\x19" +
		"\x02\x02\xED\xEE\x05P)\x02\xEE\xF0\x07,\x02\x02\xEF\xF1\x07\x1F\x02\x02" +
		"\xF0\xEF\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02" +
		"\xF2\xF3\x05R*\x02\xF3\xF4\x07-\x02\x02\xF4\xF5\x07\x18\x02\x02\xF5\xF7" +
		"\x07,\x02\x02\xF6\xF8\x07\x1F\x02\x02\xF7\xF6\x03\x02\x02\x02\xF7\xF8" +
		"\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFA\x05R*\x02\xFA\u0105\x07" +
		"-\x02\x02\xFB\u0100\x07.\x02\x02\xFC\xFF\x05\n\x06\x02\xFD\xFF\x05V,\x02" +
		"\xFE\xFC\x03\x02\x02\x02\xFE\xFD\x03\x02\x02\x02\xFF\u0102\x03\x02\x02" +
		"\x02\u0100\xFE\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101\u0103" +
		"\x03\x02\x02\x02\u0102\u0100\x03\x02\x02\x02\u0103\u0106\x07/\x02\x02" +
		"\u0104\u0106\x074\x02\x02\u0105\xFB\x03\x02\x02\x02\u0105\u0104\x03\x02" +
		"\x02\x02\u0106#\x03\x02\x02\x02\u0107\u010A\x07\x17\x02\x02\u0108\u010B" +
		"\x05&\x14\x02\u0109\u010B\x05*\x16\x02\u010A\u0108\x03\x02\x02\x02\u010A" +
		"\u0109\x03\x02\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C\u010D\x074\x02" +
		"\x02\u010D%\x03\x02\x02\x02\u010E\u0113\x05(\x15\x02\u010F\u0110\x075" +
		"\x02\x02\u0110\u0112\x05(\x15\x02\u0111\u010F\x03\x02\x02\x02\u0112\u0115" +
		"\x03\x02\x02\x02\u0113\u0111\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02" +
		"\u0114\'\x03\x02\x02\x02\u0115\u0113\x03\x02\x02\x02\u0116\u011B\x07\'" +
		"\x02\x02\u0117\u0118\x07\'\x02\x02\u0118\u0119\x07\"\x02\x02\u0119\u011B" +
		"\x07\'\x02\x02\u011A\u0116\x03\x02\x02\x02\u011A\u0117\x03\x02\x02\x02" +
		"\u011B)\x03\x02\x02\x02\u011C\u0121\x07*\x02\x02\u011D\u011E\x075\x02" +
		"\x02\u011E\u0120\x07*\x02\x02\u011F\u011D\x03\x02\x02\x02\u0120\u0123" +
		"\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0121\u0122\x03\x02\x02\x02" +
		"\u0122+\x03\x02\x02\x02\u0123\u0121\x03\x02\x02\x02\u0124\u0127\t\x04" +
		"\x02\x02\u0125\u0127\x05T+\x02\u0126\u0124\x03\x02\x02\x02\u0126\u0125" +
		"\x03\x02\x02\x02\u0127-\x03\x02\x02\x02\u0128\u0129\x07\'\x02\x02\u0129" +
		"/\x03\x02\x02\x02\u012A\u012C\x07\x16\x02\x02\u012B\u012A\x03\x02\x02" +
		"\x02\u012B\u012C\x03\x02\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\u012E" +
		"\x05,\x17\x02\u012E\u012F\x05H%\x02\u012F\u0130\x079\x02\x02\u0130\u0135" +
		"\x05.\x18\x02\u0131\u0132\x070\x02\x02\u0132\u0133\x052\x1A\x02\u0133" +
		"\u0134\x071\x02\x02\u0134\u0136\x03\x02\x02\x02\u0135\u0131\x03\x02\x02" +
		"\x02\u0135\u0136\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\u0138" +
		"\x074\x02\x02\u01381\x03\x02\x02\x02\u0139\u013E\x054\x1B\x02\u013A\u013B" +
		"\x075\x02\x02\u013B\u013D\x054\x1B\x02\u013C\u013A\x03\x02\x02\x02\u013D" +
		"\u0140\x03\x02\x02\x02\u013E\u013C\x03\x02\x02\x02\u013E\u013F\x03\x02" +
		"\x02\x02\u013F3\x03\x02\x02\x02\u0140\u013E\x03\x02\x02\x02\u0141\u0142" +
		"\x05\f\x07\x02\u0142\u0143\x079\x02\x02\u0143\u0144\x05X-\x02\u01445\x03" +
		"\x02\x02\x02\u0145\u0146\x07\x10\x02\x02\u0146\u0147\x05J&\x02\u0147\u014C" +
		"\x07.\x02\x02\u0148\u014B\x058\x1D\x02\u0149\u014B\x05V,\x02\u014A\u0148" +
		"\x03\x02\x02\x02\u014A\u0149\x03\x02\x02\x02\u014B\u014E\x03\x02\x02\x02" +
		"\u014C\u014A\x03\x02\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D\u014F\x03" +
		"\x02\x02\x02\u014E\u014C\x03\x02\x02\x02\u014F\u0150\x07/\x02\x02\u0150" +
		"7\x03\x02\x02\x02\u0151\u0152\x05,\x17\x02\u0152\u0153\x05H%\x02\u0153" +
		"\u0154\x079\x02\x02\u0154\u0159\x05.\x18\x02\u0155\u0156\x070\x02\x02" +
		"\u0156\u0157\x052\x1A\x02\u0157\u0158\x071\x02\x02\u0158\u015A\x03\x02" +
		"\x02\x02\u0159\u0155\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A" +
		"\u015B\x03\x02\x02\x02\u015B\u015C\x074\x02\x02\u015C9\x03\x02\x02\x02" +
		"\u015D\u015E\x07\x0E\x02\x02\u015E\u015F\x072\x02\x02\u015F\u0160\x05" +
		"<\x1F\x02\u0160\u0161\x075\x02\x02\u0161\u0162\x05,\x17\x02\u0162\u0163" +
		"\x073\x02\x02\u0163\u0164\x05L\'\x02\u0164\u0165\x079\x02\x02\u0165\u016A" +
		"\x05.\x18\x02\u0166\u0167\x070\x02\x02\u0167\u0168\x052\x1A\x02\u0168" +
		"\u0169\x071\x02\x02\u0169\u016B\x03\x02\x02\x02\u016A\u0166\x03\x02\x02" +
		"\x02\u016A\u016B\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02\u016C\u016D" +
		"\x074\x02\x02\u016D;\x03\x02\x02\x02\u016E\u016F\t\x05\x02\x02\u016F=" +
		"\x03\x02\x02\x02\u0170\u0171\t\x06\x02\x02\u0171?\x03\x02\x02\x02\u0172" +
		"\u0177\x07&\x02\x02\u0173\u0174\x076\x02\x02\u0174\u0176\x07&\x02\x02" +
		"\u0175\u0173\x03\x02\x02\x02\u0176\u0179\x03\x02\x02\x02\u0177\u0175\x03" +
		"\x02\x02\x02\u0177\u0178\x03\x02\x02\x02\u0178A\x03\x02\x02\x02\u0179" +
		"\u0177\x03\x02\x02\x02\u017A\u017B\x07&\x02\x02\u017BC\x03\x02\x02\x02" +
		"\u017C\u017D\x07&\x02\x02\u017DE\x03\x02\x02\x02\u017E\u017F\x07&\x02" +
		"\x02\u017FG\x03\x02\x02\x02\u0180\u0183\x07&\x02\x02\u0181\u0183\x05>" +
		" \x02\u0182\u0180\x03\x02\x02\x02\u0182\u0181\x03\x02\x02\x02\u0183I\x03" +
		"\x02\x02\x02\u0184\u0185\x07&\x02\x02\u0185K\x03\x02\x02\x02\u0186\u0187" +
		"\x07&\x02\x02\u0187M\x03\x02\x02\x02\u0188\u0189\x07&\x02\x02\u0189O\x03" +
		"\x02\x02\x02\u018A\u018B\x07&\x02\x02\u018BQ\x03\x02\x02\x02\u018C\u018E" +
		"\x076\x02\x02\u018D\u018C\x03\x02\x02\x02\u018D\u018E\x03\x02\x02\x02" +
		"\u018E\u0193\x03\x02\x02\x02\u018F\u0190\x07&\x02\x02\u0190\u0192\x07" +
		"6\x02\x02\u0191\u018F\x03\x02\x02\x02\u0192\u0195\x03\x02\x02\x02\u0193" +
		"\u0191\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194\u0196\x03\x02" +
		"\x02\x02\u0195\u0193\x03\x02\x02\x02\u0196\u0197\x05B\"\x02\u0197S\x03" +
		"\x02\x02\x02\u0198\u019A\x076\x02\x02\u0199\u0198\x03\x02\x02\x02\u0199" +
		"\u019A\x03\x02\x02\x02\u019A\u01A2\x03\x02\x02\x02\u019B\u019E\x07&\x02" +
		"\x02\u019C\u019E\x05> \x02\u019D\u019B\x03\x02\x02\x02\u019D\u019C\x03" +
		"\x02\x02\x02\u019E\u019F\x03\x02\x02\x02\u019F\u01A1\x076\x02\x02\u01A0" +
		"\u019D\x03\x02\x02\x02\u01A1\u01A4\x03\x02\x02\x02\u01A2\u01A0\x03\x02" +
		"\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3\u01A5\x03\x02\x02\x02\u01A4" +
		"\u01A2\x03\x02\x02\x02\u01A5\u01A6\x05F$\x02\u01A6U\x03\x02\x02\x02\u01A7" +
		"\u01A8\x074\x02\x02\u01A8W\x03\x02\x02\x02\u01A9\u01B4\x05@!\x02\u01AA" +
		"\u01AC\t\x07\x02\x02\u01AB\u01AA\x03\x02\x02\x02\u01AB\u01AC\x03\x02\x02" +
		"\x02\u01AC\u01AD\x03\x02\x02\x02\u01AD\u01B4\x07\'\x02\x02\u01AE\u01B0" +
		"\t\x07\x02\x02\u01AF\u01AE\x03\x02\x02\x02\u01AF\u01B0\x03\x02\x02\x02" +
		"\u01B0\u01B1\x03\x02\x02\x02\u01B1\u01B4\x07(\x02\x02\u01B2\u01B4\t\b" +
		"\x02\x02\u01B3\u01A9\x03\x02\x02\x02\u01B3\u01AB\x03\x02\x02\x02\u01B3" +
		"\u01AF\x03\x02\x02\x02\u01B3\u01B2\x03\x02\x02\x02\u01B4Y\x03\x02\x02" +
		"\x02/`bn|\x85\x8A\x8E\x95\xA1\xB0\xB2\xBF\xC1\xC9\xD2\xD7\xE5\xE7\xF0" +
		"\xF7\xFE\u0100\u0105\u010A\u0113\u011A\u0121\u0126\u012B\u0135\u013E\u014A" +
		"\u014C\u0159\u016A\u0177\u0182\u018D\u0193\u0199\u019D\u01A2\u01AB\u01AF" +
		"\u01B3";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Protobuf3Parser.__ATN) {
			Protobuf3Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(Protobuf3Parser._serializedATN));
		}

		return Protobuf3Parser.__ATN;
	}

}

export class ProtoContext extends ParserRuleContext {
	public syntax(): SyntaxContext {
		return this.getRuleContext(0, SyntaxContext);
	}
	public EOF(): TerminalNode { return this.getToken(Protobuf3Parser.EOF, 0); }
	public importStatement(): ImportStatementContext[];
	public importStatement(i: number): ImportStatementContext;
	public importStatement(i?: number): ImportStatementContext | ImportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportStatementContext);
		} else {
			return this.getRuleContext(i, ImportStatementContext);
		}
	}
	public packageStatement(): PackageStatementContext[];
	public packageStatement(i: number): PackageStatementContext;
	public packageStatement(i?: number): PackageStatementContext | PackageStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PackageStatementContext);
		} else {
			return this.getRuleContext(i, PackageStatementContext);
		}
	}
	public option(): OptionContext[];
	public option(i: number): OptionContext;
	public option(i?: number): OptionContext | OptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionContext);
		} else {
			return this.getRuleContext(i, OptionContext);
		}
	}
	public topLevelDef(): TopLevelDefContext[];
	public topLevelDef(i: number): TopLevelDefContext;
	public topLevelDef(i?: number): TopLevelDefContext | TopLevelDefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TopLevelDefContext);
		} else {
			return this.getRuleContext(i, TopLevelDefContext);
		}
	}
	public emptyStatement(): EmptyStatementContext[];
	public emptyStatement(i: number): EmptyStatementContext;
	public emptyStatement(i?: number): EmptyStatementContext | EmptyStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EmptyStatementContext);
		} else {
			return this.getRuleContext(i, EmptyStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_proto; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterProto) {
			listener.enterProto(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitProto) {
			listener.exitProto(this);
		}
	}
}


export class SyntaxContext extends ParserRuleContext {
	public SYNTAX(): TerminalNode { return this.getToken(Protobuf3Parser.SYNTAX, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(Protobuf3Parser.ASSIGN, 0); }
	public SEMI(): TerminalNode { return this.getToken(Protobuf3Parser.SEMI, 0); }
	public PROTO3_DOUBLE(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.PROTO3_DOUBLE, 0); }
	public PROTO3_SINGLE(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.PROTO3_SINGLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_syntax; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterSyntax) {
			listener.enterSyntax(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitSyntax) {
			listener.exitSyntax(this);
		}
	}
}


export class ImportStatementContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(Protobuf3Parser.IMPORT, 0); }
	public StrLit(): TerminalNode { return this.getToken(Protobuf3Parser.StrLit, 0); }
	public SEMI(): TerminalNode { return this.getToken(Protobuf3Parser.SEMI, 0); }
	public WEAK(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.WEAK, 0); }
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.PUBLIC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_importStatement; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterImportStatement) {
			listener.enterImportStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitImportStatement) {
			listener.exitImportStatement(this);
		}
	}
}


export class PackageStatementContext extends ParserRuleContext {
	public PACKAGE(): TerminalNode { return this.getToken(Protobuf3Parser.PACKAGE, 0); }
	public fullIdent(): FullIdentContext {
		return this.getRuleContext(0, FullIdentContext);
	}
	public SEMI(): TerminalNode { return this.getToken(Protobuf3Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_packageStatement; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterPackageStatement) {
			listener.enterPackageStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitPackageStatement) {
			listener.exitPackageStatement(this);
		}
	}
}


export class OptionContext extends ParserRuleContext {
	public OPTION(): TerminalNode { return this.getToken(Protobuf3Parser.OPTION, 0); }
	public optionName(): OptionNameContext {
		return this.getRuleContext(0, OptionNameContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(Protobuf3Parser.ASSIGN, 0); }
	public SEMI(): TerminalNode { return this.getToken(Protobuf3Parser.SEMI, 0); }
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	public optionBody(): OptionBodyContext | undefined {
		return this.tryGetRuleContext(0, OptionBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_option; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterOption) {
			listener.enterOption(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitOption) {
			listener.exitOption(this);
		}
	}
}


export class OptionNameContext extends ParserRuleContext {
	public Ident(): TerminalNode[];
	public Ident(i: number): TerminalNode;
	public Ident(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Protobuf3Parser.Ident);
		} else {
			return this.getToken(Protobuf3Parser.Ident, i);
		}
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.LPAREN, 0); }
	public fullIdent(): FullIdentContext | undefined {
		return this.tryGetRuleContext(0, FullIdentContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.RPAREN, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Protobuf3Parser.DOT);
		} else {
			return this.getToken(Protobuf3Parser.DOT, i);
		}
	}
	public reservedWord(): ReservedWordContext[];
	public reservedWord(i: number): ReservedWordContext;
	public reservedWord(i?: number): ReservedWordContext | ReservedWordContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ReservedWordContext);
		} else {
			return this.getRuleContext(i, ReservedWordContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_optionName; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterOptionName) {
			listener.enterOptionName(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitOptionName) {
			listener.exitOptionName(this);
		}
	}
}


export class OptionBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(Protobuf3Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(Protobuf3Parser.RBRACE, 0); }
	public optionBodyVariable(): OptionBodyVariableContext[];
	public optionBodyVariable(i: number): OptionBodyVariableContext;
	public optionBodyVariable(i?: number): OptionBodyVariableContext | OptionBodyVariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionBodyVariableContext);
		} else {
			return this.getRuleContext(i, OptionBodyVariableContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_optionBody; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterOptionBody) {
			listener.enterOptionBody(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitOptionBody) {
			listener.exitOptionBody(this);
		}
	}
}


export class OptionBodyVariableContext extends ParserRuleContext {
	public optionName(): OptionNameContext {
		return this.getRuleContext(0, OptionNameContext);
	}
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_optionBodyVariable; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterOptionBodyVariable) {
			listener.enterOptionBodyVariable(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitOptionBodyVariable) {
			listener.exitOptionBodyVariable(this);
		}
	}
}


export class TopLevelDefContext extends ParserRuleContext {
	public message(): MessageContext | undefined {
		return this.tryGetRuleContext(0, MessageContext);
	}
	public enumDefinition(): EnumDefinitionContext | undefined {
		return this.tryGetRuleContext(0, EnumDefinitionContext);
	}
	public service(): ServiceContext | undefined {
		return this.tryGetRuleContext(0, ServiceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_topLevelDef; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterTopLevelDef) {
			listener.enterTopLevelDef(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitTopLevelDef) {
			listener.exitTopLevelDef(this);
		}
	}
}


export class MessageContext extends ParserRuleContext {
	public MESSAGE(): TerminalNode { return this.getToken(Protobuf3Parser.MESSAGE, 0); }
	public messageName(): MessageNameContext {
		return this.getRuleContext(0, MessageNameContext);
	}
	public messageBody(): MessageBodyContext {
		return this.getRuleContext(0, MessageBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_message; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterMessage) {
			listener.enterMessage(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitMessage) {
			listener.exitMessage(this);
		}
	}
}


export class MessageBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(Protobuf3Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(Protobuf3Parser.RBRACE, 0); }
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	public enumDefinition(): EnumDefinitionContext[];
	public enumDefinition(i: number): EnumDefinitionContext;
	public enumDefinition(i?: number): EnumDefinitionContext | EnumDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumDefinitionContext);
		} else {
			return this.getRuleContext(i, EnumDefinitionContext);
		}
	}
	public message(): MessageContext[];
	public message(i: number): MessageContext;
	public message(i?: number): MessageContext | MessageContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MessageContext);
		} else {
			return this.getRuleContext(i, MessageContext);
		}
	}
	public option(): OptionContext[];
	public option(i: number): OptionContext;
	public option(i?: number): OptionContext | OptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionContext);
		} else {
			return this.getRuleContext(i, OptionContext);
		}
	}
	public oneof(): OneofContext[];
	public oneof(i: number): OneofContext;
	public oneof(i?: number): OneofContext | OneofContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OneofContext);
		} else {
			return this.getRuleContext(i, OneofContext);
		}
	}
	public mapField(): MapFieldContext[];
	public mapField(i: number): MapFieldContext;
	public mapField(i?: number): MapFieldContext | MapFieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MapFieldContext);
		} else {
			return this.getRuleContext(i, MapFieldContext);
		}
	}
	public reserved(): ReservedContext[];
	public reserved(i: number): ReservedContext;
	public reserved(i?: number): ReservedContext | ReservedContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ReservedContext);
		} else {
			return this.getRuleContext(i, ReservedContext);
		}
	}
	public emptyStatement(): EmptyStatementContext[];
	public emptyStatement(i: number): EmptyStatementContext;
	public emptyStatement(i?: number): EmptyStatementContext | EmptyStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EmptyStatementContext);
		} else {
			return this.getRuleContext(i, EmptyStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_messageBody; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterMessageBody) {
			listener.enterMessageBody(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitMessageBody) {
			listener.exitMessageBody(this);
		}
	}
}


export class EnumDefinitionContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(Protobuf3Parser.ENUM, 0); }
	public enumName(): EnumNameContext {
		return this.getRuleContext(0, EnumNameContext);
	}
	public enumBody(): EnumBodyContext {
		return this.getRuleContext(0, EnumBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_enumDefinition; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterEnumDefinition) {
			listener.enterEnumDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitEnumDefinition) {
			listener.exitEnumDefinition(this);
		}
	}
}


export class EnumBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(Protobuf3Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(Protobuf3Parser.RBRACE, 0); }
	public option(): OptionContext[];
	public option(i: number): OptionContext;
	public option(i?: number): OptionContext | OptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionContext);
		} else {
			return this.getRuleContext(i, OptionContext);
		}
	}
	public enumField(): EnumFieldContext[];
	public enumField(i: number): EnumFieldContext;
	public enumField(i?: number): EnumFieldContext | EnumFieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumFieldContext);
		} else {
			return this.getRuleContext(i, EnumFieldContext);
		}
	}
	public emptyStatement(): EmptyStatementContext[];
	public emptyStatement(i: number): EmptyStatementContext;
	public emptyStatement(i?: number): EmptyStatementContext | EmptyStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EmptyStatementContext);
		} else {
			return this.getRuleContext(i, EmptyStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_enumBody; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterEnumBody) {
			listener.enterEnumBody(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitEnumBody) {
			listener.exitEnumBody(this);
		}
	}
}


export class EnumFieldContext extends ParserRuleContext {
	public Ident(): TerminalNode { return this.getToken(Protobuf3Parser.Ident, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(Protobuf3Parser.ASSIGN, 0); }
	public IntLit(): TerminalNode { return this.getToken(Protobuf3Parser.IntLit, 0); }
	public SEMI(): TerminalNode { return this.getToken(Protobuf3Parser.SEMI, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.MINUS, 0); }
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.LBRACK, 0); }
	public enumValueOption(): EnumValueOptionContext[];
	public enumValueOption(i: number): EnumValueOptionContext;
	public enumValueOption(i?: number): EnumValueOptionContext | EnumValueOptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumValueOptionContext);
		} else {
			return this.getRuleContext(i, EnumValueOptionContext);
		}
	}
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.RBRACK, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Protobuf3Parser.COMMA);
		} else {
			return this.getToken(Protobuf3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_enumField; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterEnumField) {
			listener.enterEnumField(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitEnumField) {
			listener.exitEnumField(this);
		}
	}
}


export class EnumValueOptionContext extends ParserRuleContext {
	public optionName(): OptionNameContext {
		return this.getRuleContext(0, OptionNameContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(Protobuf3Parser.ASSIGN, 0); }
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_enumValueOption; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterEnumValueOption) {
			listener.enterEnumValueOption(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitEnumValueOption) {
			listener.exitEnumValueOption(this);
		}
	}
}


export class ServiceContext extends ParserRuleContext {
	public SERVICE(): TerminalNode { return this.getToken(Protobuf3Parser.SERVICE, 0); }
	public serviceName(): ServiceNameContext {
		return this.getRuleContext(0, ServiceNameContext);
	}
	public LBRACE(): TerminalNode { return this.getToken(Protobuf3Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(Protobuf3Parser.RBRACE, 0); }
	public option(): OptionContext[];
	public option(i: number): OptionContext;
	public option(i?: number): OptionContext | OptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionContext);
		} else {
			return this.getRuleContext(i, OptionContext);
		}
	}
	public rpc(): RpcContext[];
	public rpc(i: number): RpcContext;
	public rpc(i?: number): RpcContext | RpcContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RpcContext);
		} else {
			return this.getRuleContext(i, RpcContext);
		}
	}
	public emptyStatement(): EmptyStatementContext[];
	public emptyStatement(i: number): EmptyStatementContext;
	public emptyStatement(i?: number): EmptyStatementContext | EmptyStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EmptyStatementContext);
		} else {
			return this.getRuleContext(i, EmptyStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_service; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterService) {
			listener.enterService(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitService) {
			listener.exitService(this);
		}
	}
}


export class RpcContext extends ParserRuleContext {
	public RPC(): TerminalNode { return this.getToken(Protobuf3Parser.RPC, 0); }
	public rpcName(): RpcNameContext {
		return this.getRuleContext(0, RpcNameContext);
	}
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Protobuf3Parser.LPAREN);
		} else {
			return this.getToken(Protobuf3Parser.LPAREN, i);
		}
	}
	public messageType(): MessageTypeContext[];
	public messageType(i: number): MessageTypeContext;
	public messageType(i?: number): MessageTypeContext | MessageTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MessageTypeContext);
		} else {
			return this.getRuleContext(i, MessageTypeContext);
		}
	}
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Protobuf3Parser.RPAREN);
		} else {
			return this.getToken(Protobuf3Parser.RPAREN, i);
		}
	}
	public RETURNS(): TerminalNode { return this.getToken(Protobuf3Parser.RETURNS, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.SEMI, 0); }
	public STREAM(): TerminalNode[];
	public STREAM(i: number): TerminalNode;
	public STREAM(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Protobuf3Parser.STREAM);
		} else {
			return this.getToken(Protobuf3Parser.STREAM, i);
		}
	}
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.RBRACE, 0); }
	public option(): OptionContext[];
	public option(i: number): OptionContext;
	public option(i?: number): OptionContext | OptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionContext);
		} else {
			return this.getRuleContext(i, OptionContext);
		}
	}
	public emptyStatement(): EmptyStatementContext[];
	public emptyStatement(i: number): EmptyStatementContext;
	public emptyStatement(i?: number): EmptyStatementContext | EmptyStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EmptyStatementContext);
		} else {
			return this.getRuleContext(i, EmptyStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_rpc; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterRpc) {
			listener.enterRpc(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitRpc) {
			listener.exitRpc(this);
		}
	}
}


export class ReservedContext extends ParserRuleContext {
	public RESERVED(): TerminalNode { return this.getToken(Protobuf3Parser.RESERVED, 0); }
	public SEMI(): TerminalNode { return this.getToken(Protobuf3Parser.SEMI, 0); }
	public ranges(): RangesContext | undefined {
		return this.tryGetRuleContext(0, RangesContext);
	}
	public fieldNames(): FieldNamesContext | undefined {
		return this.tryGetRuleContext(0, FieldNamesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_reserved; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterReserved) {
			listener.enterReserved(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitReserved) {
			listener.exitReserved(this);
		}
	}
}


export class RangesContext extends ParserRuleContext {
	public range(): RangeContext[];
	public range(i: number): RangeContext;
	public range(i?: number): RangeContext | RangeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RangeContext);
		} else {
			return this.getRuleContext(i, RangeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Protobuf3Parser.COMMA);
		} else {
			return this.getToken(Protobuf3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_ranges; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterRanges) {
			listener.enterRanges(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitRanges) {
			listener.exitRanges(this);
		}
	}
}


export class RangeContext extends ParserRuleContext {
	public IntLit(): TerminalNode[];
	public IntLit(i: number): TerminalNode;
	public IntLit(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Protobuf3Parser.IntLit);
		} else {
			return this.getToken(Protobuf3Parser.IntLit, i);
		}
	}
	public TO(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.TO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_range; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterRange) {
			listener.enterRange(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitRange) {
			listener.exitRange(this);
		}
	}
}


export class FieldNamesContext extends ParserRuleContext {
	public StrLit(): TerminalNode[];
	public StrLit(i: number): TerminalNode;
	public StrLit(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Protobuf3Parser.StrLit);
		} else {
			return this.getToken(Protobuf3Parser.StrLit, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Protobuf3Parser.COMMA);
		} else {
			return this.getToken(Protobuf3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_fieldNames; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterFieldNames) {
			listener.enterFieldNames(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitFieldNames) {
			listener.exitFieldNames(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.DOUBLE, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.FLOAT, 0); }
	public INT32(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.INT32, 0); }
	public INT64(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.INT64, 0); }
	public UINT32(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.UINT32, 0); }
	public UINT64(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.UINT64, 0); }
	public SINT32(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.SINT32, 0); }
	public SINT64(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.SINT64, 0); }
	public FIXED32(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.FIXED32, 0); }
	public FIXED64(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.FIXED64, 0); }
	public SFIXED32(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.SFIXED32, 0); }
	public SFIXED64(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.SFIXED64, 0); }
	public BOOL(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.BOOL, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.STRING, 0); }
	public BYTES(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.BYTES, 0); }
	public messageOrEnumType(): MessageOrEnumTypeContext | undefined {
		return this.tryGetRuleContext(0, MessageOrEnumTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_type; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
}


export class FieldNumberContext extends ParserRuleContext {
	public IntLit(): TerminalNode { return this.getToken(Protobuf3Parser.IntLit, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_fieldNumber; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterFieldNumber) {
			listener.enterFieldNumber(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitFieldNumber) {
			listener.exitFieldNumber(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public fieldName(): FieldNameContext {
		return this.getRuleContext(0, FieldNameContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(Protobuf3Parser.ASSIGN, 0); }
	public fieldNumber(): FieldNumberContext {
		return this.getRuleContext(0, FieldNumberContext);
	}
	public SEMI(): TerminalNode { return this.getToken(Protobuf3Parser.SEMI, 0); }
	public REPEATED(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.REPEATED, 0); }
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.LBRACK, 0); }
	public fieldOptions(): FieldOptionsContext | undefined {
		return this.tryGetRuleContext(0, FieldOptionsContext);
	}
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.RBRACK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_field; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterField) {
			listener.enterField(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitField) {
			listener.exitField(this);
		}
	}
}


export class FieldOptionsContext extends ParserRuleContext {
	public fieldOption(): FieldOptionContext[];
	public fieldOption(i: number): FieldOptionContext;
	public fieldOption(i?: number): FieldOptionContext | FieldOptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldOptionContext);
		} else {
			return this.getRuleContext(i, FieldOptionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Protobuf3Parser.COMMA);
		} else {
			return this.getToken(Protobuf3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_fieldOptions; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterFieldOptions) {
			listener.enterFieldOptions(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitFieldOptions) {
			listener.exitFieldOptions(this);
		}
	}
}


export class FieldOptionContext extends ParserRuleContext {
	public optionName(): OptionNameContext {
		return this.getRuleContext(0, OptionNameContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(Protobuf3Parser.ASSIGN, 0); }
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_fieldOption; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterFieldOption) {
			listener.enterFieldOption(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitFieldOption) {
			listener.exitFieldOption(this);
		}
	}
}


export class OneofContext extends ParserRuleContext {
	public ONEOF(): TerminalNode { return this.getToken(Protobuf3Parser.ONEOF, 0); }
	public oneofName(): OneofNameContext {
		return this.getRuleContext(0, OneofNameContext);
	}
	public LBRACE(): TerminalNode { return this.getToken(Protobuf3Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(Protobuf3Parser.RBRACE, 0); }
	public oneofField(): OneofFieldContext[];
	public oneofField(i: number): OneofFieldContext;
	public oneofField(i?: number): OneofFieldContext | OneofFieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OneofFieldContext);
		} else {
			return this.getRuleContext(i, OneofFieldContext);
		}
	}
	public emptyStatement(): EmptyStatementContext[];
	public emptyStatement(i: number): EmptyStatementContext;
	public emptyStatement(i?: number): EmptyStatementContext | EmptyStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EmptyStatementContext);
		} else {
			return this.getRuleContext(i, EmptyStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_oneof; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterOneof) {
			listener.enterOneof(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitOneof) {
			listener.exitOneof(this);
		}
	}
}


export class OneofFieldContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public fieldName(): FieldNameContext {
		return this.getRuleContext(0, FieldNameContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(Protobuf3Parser.ASSIGN, 0); }
	public fieldNumber(): FieldNumberContext {
		return this.getRuleContext(0, FieldNumberContext);
	}
	public SEMI(): TerminalNode { return this.getToken(Protobuf3Parser.SEMI, 0); }
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.LBRACK, 0); }
	public fieldOptions(): FieldOptionsContext | undefined {
		return this.tryGetRuleContext(0, FieldOptionsContext);
	}
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.RBRACK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_oneofField; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterOneofField) {
			listener.enterOneofField(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitOneofField) {
			listener.exitOneofField(this);
		}
	}
}


export class MapFieldContext extends ParserRuleContext {
	public MAP(): TerminalNode { return this.getToken(Protobuf3Parser.MAP, 0); }
	public LCHEVR(): TerminalNode { return this.getToken(Protobuf3Parser.LCHEVR, 0); }
	public keyType(): KeyTypeContext {
		return this.getRuleContext(0, KeyTypeContext);
	}
	public COMMA(): TerminalNode { return this.getToken(Protobuf3Parser.COMMA, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public RCHEVR(): TerminalNode { return this.getToken(Protobuf3Parser.RCHEVR, 0); }
	public mapName(): MapNameContext {
		return this.getRuleContext(0, MapNameContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(Protobuf3Parser.ASSIGN, 0); }
	public fieldNumber(): FieldNumberContext {
		return this.getRuleContext(0, FieldNumberContext);
	}
	public SEMI(): TerminalNode { return this.getToken(Protobuf3Parser.SEMI, 0); }
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.LBRACK, 0); }
	public fieldOptions(): FieldOptionsContext | undefined {
		return this.tryGetRuleContext(0, FieldOptionsContext);
	}
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.RBRACK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_mapField; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterMapField) {
			listener.enterMapField(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitMapField) {
			listener.exitMapField(this);
		}
	}
}


export class KeyTypeContext extends ParserRuleContext {
	public INT32(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.INT32, 0); }
	public INT64(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.INT64, 0); }
	public UINT32(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.UINT32, 0); }
	public UINT64(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.UINT64, 0); }
	public SINT32(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.SINT32, 0); }
	public SINT64(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.SINT64, 0); }
	public FIXED32(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.FIXED32, 0); }
	public FIXED64(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.FIXED64, 0); }
	public SFIXED32(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.SFIXED32, 0); }
	public SFIXED64(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.SFIXED64, 0); }
	public BOOL(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.BOOL, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_keyType; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterKeyType) {
			listener.enterKeyType(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitKeyType) {
			listener.exitKeyType(this);
		}
	}
}


export class ReservedWordContext extends ParserRuleContext {
	public MESSAGE(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.MESSAGE, 0); }
	public OPTION(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.OPTION, 0); }
	public PACKAGE(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.PACKAGE, 0); }
	public SERVICE(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.SERVICE, 0); }
	public STREAM(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.STREAM, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.STRING, 0); }
	public SYNTAX(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.SYNTAX, 0); }
	public WEAK(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.WEAK, 0); }
	public RPC(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.RPC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_reservedWord; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterReservedWord) {
			listener.enterReservedWord(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitReservedWord) {
			listener.exitReservedWord(this);
		}
	}
}


export class FullIdentContext extends ParserRuleContext {
	public Ident(): TerminalNode[];
	public Ident(i: number): TerminalNode;
	public Ident(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Protobuf3Parser.Ident);
		} else {
			return this.getToken(Protobuf3Parser.Ident, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Protobuf3Parser.DOT);
		} else {
			return this.getToken(Protobuf3Parser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_fullIdent; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterFullIdent) {
			listener.enterFullIdent(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitFullIdent) {
			listener.exitFullIdent(this);
		}
	}
}


export class MessageNameContext extends ParserRuleContext {
	public Ident(): TerminalNode { return this.getToken(Protobuf3Parser.Ident, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_messageName; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterMessageName) {
			listener.enterMessageName(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitMessageName) {
			listener.exitMessageName(this);
		}
	}
}


export class EnumNameContext extends ParserRuleContext {
	public Ident(): TerminalNode { return this.getToken(Protobuf3Parser.Ident, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_enumName; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterEnumName) {
			listener.enterEnumName(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitEnumName) {
			listener.exitEnumName(this);
		}
	}
}


export class MessageOrEnumNameContext extends ParserRuleContext {
	public Ident(): TerminalNode { return this.getToken(Protobuf3Parser.Ident, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_messageOrEnumName; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterMessageOrEnumName) {
			listener.enterMessageOrEnumName(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitMessageOrEnumName) {
			listener.exitMessageOrEnumName(this);
		}
	}
}


export class FieldNameContext extends ParserRuleContext {
	public Ident(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.Ident, 0); }
	public reservedWord(): ReservedWordContext | undefined {
		return this.tryGetRuleContext(0, ReservedWordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_fieldName; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterFieldName) {
			listener.enterFieldName(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitFieldName) {
			listener.exitFieldName(this);
		}
	}
}


export class OneofNameContext extends ParserRuleContext {
	public Ident(): TerminalNode { return this.getToken(Protobuf3Parser.Ident, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_oneofName; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterOneofName) {
			listener.enterOneofName(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitOneofName) {
			listener.exitOneofName(this);
		}
	}
}


export class MapNameContext extends ParserRuleContext {
	public Ident(): TerminalNode { return this.getToken(Protobuf3Parser.Ident, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_mapName; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterMapName) {
			listener.enterMapName(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitMapName) {
			listener.exitMapName(this);
		}
	}
}


export class ServiceNameContext extends ParserRuleContext {
	public Ident(): TerminalNode { return this.getToken(Protobuf3Parser.Ident, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_serviceName; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterServiceName) {
			listener.enterServiceName(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitServiceName) {
			listener.exitServiceName(this);
		}
	}
}


export class RpcNameContext extends ParserRuleContext {
	public Ident(): TerminalNode { return this.getToken(Protobuf3Parser.Ident, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_rpcName; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterRpcName) {
			listener.enterRpcName(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitRpcName) {
			listener.exitRpcName(this);
		}
	}
}


export class MessageTypeContext extends ParserRuleContext {
	public messageName(): MessageNameContext {
		return this.getRuleContext(0, MessageNameContext);
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Protobuf3Parser.DOT);
		} else {
			return this.getToken(Protobuf3Parser.DOT, i);
		}
	}
	public Ident(): TerminalNode[];
	public Ident(i: number): TerminalNode;
	public Ident(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Protobuf3Parser.Ident);
		} else {
			return this.getToken(Protobuf3Parser.Ident, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_messageType; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterMessageType) {
			listener.enterMessageType(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitMessageType) {
			listener.exitMessageType(this);
		}
	}
}


export class MessageOrEnumTypeContext extends ParserRuleContext {
	public messageOrEnumName(): MessageOrEnumNameContext {
		return this.getRuleContext(0, MessageOrEnumNameContext);
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Protobuf3Parser.DOT);
		} else {
			return this.getToken(Protobuf3Parser.DOT, i);
		}
	}
	public Ident(): TerminalNode[];
	public Ident(i: number): TerminalNode;
	public Ident(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Protobuf3Parser.Ident);
		} else {
			return this.getToken(Protobuf3Parser.Ident, i);
		}
	}
	public reservedWord(): ReservedWordContext[];
	public reservedWord(i: number): ReservedWordContext;
	public reservedWord(i?: number): ReservedWordContext | ReservedWordContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ReservedWordContext);
		} else {
			return this.getRuleContext(i, ReservedWordContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_messageOrEnumType; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterMessageOrEnumType) {
			listener.enterMessageOrEnumType(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitMessageOrEnumType) {
			listener.exitMessageOrEnumType(this);
		}
	}
}


export class EmptyStatementContext extends ParserRuleContext {
	public SEMI(): TerminalNode { return this.getToken(Protobuf3Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_emptyStatement; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterEmptyStatement) {
			listener.enterEmptyStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitEmptyStatement) {
			listener.exitEmptyStatement(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	public fullIdent(): FullIdentContext | undefined {
		return this.tryGetRuleContext(0, FullIdentContext);
	}
	public IntLit(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.IntLit, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.MINUS, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.PLUS, 0); }
	public FloatLit(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.FloatLit, 0); }
	public StrLit(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.StrLit, 0); }
	public BoolLit(): TerminalNode | undefined { return this.tryGetToken(Protobuf3Parser.BoolLit, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Protobuf3Parser.RULE_constant; }
	// @Override
	public enterRule(listener: Protobuf3Listener): void {
		if (listener.enterConstant) {
			listener.enterConstant(this);
		}
	}
	// @Override
	public exitRule(listener: Protobuf3Listener): void {
		if (listener.exitConstant) {
			listener.exitConstant(this);
		}
	}
}


