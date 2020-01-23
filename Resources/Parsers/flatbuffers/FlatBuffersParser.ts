// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/flatbuffers/FlatBuffers.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { FlatBuffersListener } from "./FlatBuffersListener";

export class FlatBuffersParser extends Parser {
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
	public static readonly STRING_CONSTANT = 23;
	public static readonly BASE_TYPE_NAME = 24;
	public static readonly IDENT = 25;
	public static readonly HEX_INTEGER_CONSTANT = 26;
	public static readonly INTEGER_CONSTANT = 27;
	public static readonly FLOAT_CONSTANT = 28;
	public static readonly BLOCK_COMMENT = 29;
	public static readonly COMMENT = 30;
	public static readonly WHITESPACE = 31;
	public static readonly RULE_schema = 0;
	public static readonly RULE_include = 1;
	public static readonly RULE_namespace_decl = 2;
	public static readonly RULE_attribute_decl = 3;
	public static readonly RULE_type_decl = 4;
	public static readonly RULE_enum_decl = 5;
	public static readonly RULE_root_decl = 6;
	public static readonly RULE_field_decl = 7;
	public static readonly RULE_rpc_decl = 8;
	public static readonly RULE_rpc_method = 9;
	public static readonly RULE_type = 10;
	public static readonly RULE_enumval_decl = 11;
	public static readonly RULE_commasep_enumval_decl = 12;
	public static readonly RULE_ident_with_opt_single_value = 13;
	public static readonly RULE_commasep_ident_with_opt_single_value = 14;
	public static readonly RULE_metadata = 15;
	public static readonly RULE_scalar = 16;
	public static readonly RULE_object = 17;
	public static readonly RULE_ident_with_value = 18;
	public static readonly RULE_commasep_ident_with_value = 19;
	public static readonly RULE_single_value = 20;
	public static readonly RULE_value = 21;
	public static readonly RULE_commasep_value = 22;
	public static readonly RULE_file_extension_decl = 23;
	public static readonly RULE_file_identifier_decl = 24;
	public static readonly RULE_ns_ident = 25;
	public static readonly RULE_integer_const = 26;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"schema", "include", "namespace_decl", "attribute_decl", "type_decl", 
		"enum_decl", "root_decl", "field_decl", "rpc_decl", "rpc_method", "type", 
		"enumval_decl", "commasep_enumval_decl", "ident_with_opt_single_value", 
		"commasep_ident_with_opt_single_value", "metadata", "scalar", "object", 
		"ident_with_value", "commasep_ident_with_value", "single_value", "value", 
		"commasep_value", "file_extension_decl", "file_identifier_decl", "ns_ident", 
		"integer_const",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'include'", "';'", "'namespace'", "'.'", "'attribute'", "'table'", 
		"'struct'", "'{'", "'}'", "'enum'", "':'", "'union'", "'root_type'", "'='", 
		"'rpc_service'", "'('", "')'", "'['", "']'", "','", "'file_extension'", 
		"'file_identifier'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "STRING_CONSTANT", "BASE_TYPE_NAME", "IDENT", "HEX_INTEGER_CONSTANT", 
		"INTEGER_CONSTANT", "FLOAT_CONSTANT", "BLOCK_COMMENT", "COMMENT", "WHITESPACE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FlatBuffersParser._LITERAL_NAMES, FlatBuffersParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FlatBuffersParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "FlatBuffers.g4"; }

	// @Override
	public get ruleNames(): string[] { return FlatBuffersParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return FlatBuffersParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(FlatBuffersParser._ATN, this);
	}
	// @RuleVersion(0)
	public schema(): SchemaContext {
		let _localctx: SchemaContext = new SchemaContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, FlatBuffersParser.RULE_schema);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 57;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlatBuffersParser.T__0) {
				{
				{
				this.state = 54;
				this.include();
				}
				}
				this.state = 59;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 71;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlatBuffersParser.T__2) | (1 << FlatBuffersParser.T__4) | (1 << FlatBuffersParser.T__5) | (1 << FlatBuffersParser.T__6) | (1 << FlatBuffersParser.T__7) | (1 << FlatBuffersParser.T__9) | (1 << FlatBuffersParser.T__11) | (1 << FlatBuffersParser.T__12) | (1 << FlatBuffersParser.T__14) | (1 << FlatBuffersParser.T__20) | (1 << FlatBuffersParser.T__21))) !== 0)) {
				{
				this.state = 69;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case FlatBuffersParser.T__2:
					{
					this.state = 60;
					this.namespace_decl();
					}
					break;
				case FlatBuffersParser.T__5:
				case FlatBuffersParser.T__6:
					{
					this.state = 61;
					this.type_decl();
					}
					break;
				case FlatBuffersParser.T__9:
				case FlatBuffersParser.T__11:
					{
					this.state = 62;
					this.enum_decl();
					}
					break;
				case FlatBuffersParser.T__12:
					{
					this.state = 63;
					this.root_decl();
					}
					break;
				case FlatBuffersParser.T__20:
					{
					this.state = 64;
					this.file_extension_decl();
					}
					break;
				case FlatBuffersParser.T__21:
					{
					this.state = 65;
					this.file_identifier_decl();
					}
					break;
				case FlatBuffersParser.T__4:
					{
					this.state = 66;
					this.attribute_decl();
					}
					break;
				case FlatBuffersParser.T__14:
					{
					this.state = 67;
					this.rpc_decl();
					}
					break;
				case FlatBuffersParser.T__7:
					{
					this.state = 68;
					this.object();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 73;
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
	public include(): IncludeContext {
		let _localctx: IncludeContext = new IncludeContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, FlatBuffersParser.RULE_include);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this.match(FlatBuffersParser.T__0);
			this.state = 75;
			this.match(FlatBuffersParser.STRING_CONSTANT);
			this.state = 76;
			this.match(FlatBuffersParser.T__1);
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
	public namespace_decl(): Namespace_declContext {
		let _localctx: Namespace_declContext = new Namespace_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, FlatBuffersParser.RULE_namespace_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 78;
			this.match(FlatBuffersParser.T__2);
			this.state = 79;
			this.match(FlatBuffersParser.IDENT);
			this.state = 84;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlatBuffersParser.T__3) {
				{
				{
				this.state = 80;
				this.match(FlatBuffersParser.T__3);
				this.state = 81;
				this.match(FlatBuffersParser.IDENT);
				}
				}
				this.state = 86;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 87;
			this.match(FlatBuffersParser.T__1);
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
	public attribute_decl(): Attribute_declContext {
		let _localctx: Attribute_declContext = new Attribute_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, FlatBuffersParser.RULE_attribute_decl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 89;
			this.match(FlatBuffersParser.T__4);
			this.state = 90;
			this.match(FlatBuffersParser.STRING_CONSTANT);
			this.state = 91;
			this.match(FlatBuffersParser.T__1);
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
	public type_decl(): Type_declContext {
		let _localctx: Type_declContext = new Type_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, FlatBuffersParser.RULE_type_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 93;
			_la = this._input.LA(1);
			if (!(_la === FlatBuffersParser.T__5 || _la === FlatBuffersParser.T__6)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 94;
			this.match(FlatBuffersParser.IDENT);
			this.state = 95;
			this.metadata();
			this.state = 96;
			this.match(FlatBuffersParser.T__7);
			this.state = 100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlatBuffersParser.IDENT) {
				{
				{
				this.state = 97;
				this.field_decl();
				}
				}
				this.state = 102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 103;
			this.match(FlatBuffersParser.T__8);
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
	public enum_decl(): Enum_declContext {
		let _localctx: Enum_declContext = new Enum_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, FlatBuffersParser.RULE_enum_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlatBuffersParser.T__9:
				{
				this.state = 105;
				this.match(FlatBuffersParser.T__9);
				this.state = 106;
				this.match(FlatBuffersParser.IDENT);
				this.state = 109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlatBuffersParser.T__10) {
					{
					this.state = 107;
					this.match(FlatBuffersParser.T__10);
					this.state = 108;
					this.type();
					}
				}

				}
				break;
			case FlatBuffersParser.T__11:
				{
				this.state = 111;
				this.match(FlatBuffersParser.T__11);
				this.state = 112;
				this.match(FlatBuffersParser.IDENT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 115;
			this.metadata();
			this.state = 116;
			this.match(FlatBuffersParser.T__7);
			this.state = 117;
			this.commasep_enumval_decl();
			this.state = 118;
			this.match(FlatBuffersParser.T__8);
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
	public root_decl(): Root_declContext {
		let _localctx: Root_declContext = new Root_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, FlatBuffersParser.RULE_root_decl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			this.match(FlatBuffersParser.T__12);
			this.state = 121;
			this.match(FlatBuffersParser.IDENT);
			this.state = 122;
			this.match(FlatBuffersParser.T__1);
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
	public field_decl(): Field_declContext {
		let _localctx: Field_declContext = new Field_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, FlatBuffersParser.RULE_field_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 124;
			this.match(FlatBuffersParser.IDENT);
			this.state = 125;
			this.match(FlatBuffersParser.T__10);
			this.state = 126;
			this.type();
			this.state = 129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlatBuffersParser.T__13) {
				{
				this.state = 127;
				this.match(FlatBuffersParser.T__13);
				this.state = 128;
				this.scalar();
				}
			}

			this.state = 131;
			this.metadata();
			this.state = 132;
			this.match(FlatBuffersParser.T__1);
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
	public rpc_decl(): Rpc_declContext {
		let _localctx: Rpc_declContext = new Rpc_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, FlatBuffersParser.RULE_rpc_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			this.match(FlatBuffersParser.T__14);
			this.state = 135;
			this.match(FlatBuffersParser.IDENT);
			this.state = 136;
			this.match(FlatBuffersParser.T__7);
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 137;
				this.rpc_method();
				}
				}
				this.state = 140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === FlatBuffersParser.IDENT);
			this.state = 142;
			this.match(FlatBuffersParser.T__8);
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
	public rpc_method(): Rpc_methodContext {
		let _localctx: Rpc_methodContext = new Rpc_methodContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, FlatBuffersParser.RULE_rpc_method);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			this.match(FlatBuffersParser.IDENT);
			this.state = 145;
			this.match(FlatBuffersParser.T__15);
			this.state = 146;
			this.match(FlatBuffersParser.IDENT);
			this.state = 147;
			this.match(FlatBuffersParser.T__16);
			this.state = 148;
			this.match(FlatBuffersParser.T__10);
			this.state = 149;
			this.match(FlatBuffersParser.IDENT);
			this.state = 150;
			this.metadata();
			this.state = 151;
			this.match(FlatBuffersParser.T__1);
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
		this.enterRule(_localctx, 20, FlatBuffersParser.RULE_type);
		try {
			this.state = 159;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlatBuffersParser.T__17:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 153;
				this.match(FlatBuffersParser.T__17);
				this.state = 154;
				this.type();
				this.state = 155;
				this.match(FlatBuffersParser.T__18);
				}
				break;
			case FlatBuffersParser.BASE_TYPE_NAME:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 157;
				this.match(FlatBuffersParser.BASE_TYPE_NAME);
				}
				break;
			case FlatBuffersParser.IDENT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 158;
				this.ns_ident();
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
	public enumval_decl(): Enumval_declContext {
		let _localctx: Enumval_declContext = new Enumval_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, FlatBuffersParser.RULE_enumval_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 161;
			this.ns_ident();
			this.state = 164;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlatBuffersParser.T__13) {
				{
				this.state = 162;
				this.match(FlatBuffersParser.T__13);
				this.state = 163;
				this.integer_const();
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
	public commasep_enumval_decl(): Commasep_enumval_declContext {
		let _localctx: Commasep_enumval_declContext = new Commasep_enumval_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, FlatBuffersParser.RULE_commasep_enumval_decl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			this.enumval_decl();
			this.state = 171;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 167;
					this.match(FlatBuffersParser.T__19);
					this.state = 168;
					this.enumval_decl();
					}
					}
				}
				this.state = 173;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			}
			this.state = 175;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlatBuffersParser.T__19) {
				{
				this.state = 174;
				this.match(FlatBuffersParser.T__19);
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
	public ident_with_opt_single_value(): Ident_with_opt_single_valueContext {
		let _localctx: Ident_with_opt_single_valueContext = new Ident_with_opt_single_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, FlatBuffersParser.RULE_ident_with_opt_single_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 177;
			this.match(FlatBuffersParser.IDENT);
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlatBuffersParser.T__10) {
				{
				this.state = 178;
				this.match(FlatBuffersParser.T__10);
				this.state = 179;
				this.single_value();
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
	public commasep_ident_with_opt_single_value(): Commasep_ident_with_opt_single_valueContext {
		let _localctx: Commasep_ident_with_opt_single_valueContext = new Commasep_ident_with_opt_single_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, FlatBuffersParser.RULE_commasep_ident_with_opt_single_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 182;
			this.ident_with_opt_single_value();
			this.state = 187;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlatBuffersParser.T__19) {
				{
				{
				this.state = 183;
				this.match(FlatBuffersParser.T__19);
				this.state = 184;
				this.ident_with_opt_single_value();
				}
				}
				this.state = 189;
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
	public metadata(): MetadataContext {
		let _localctx: MetadataContext = new MetadataContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, FlatBuffersParser.RULE_metadata);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 194;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlatBuffersParser.T__15) {
				{
				this.state = 190;
				this.match(FlatBuffersParser.T__15);
				this.state = 191;
				this.commasep_ident_with_opt_single_value();
				this.state = 192;
				this.match(FlatBuffersParser.T__16);
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
	public scalar(): ScalarContext {
		let _localctx: ScalarContext = new ScalarContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, FlatBuffersParser.RULE_scalar);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlatBuffersParser.IDENT) | (1 << FlatBuffersParser.HEX_INTEGER_CONSTANT) | (1 << FlatBuffersParser.INTEGER_CONSTANT) | (1 << FlatBuffersParser.FLOAT_CONSTANT))) !== 0))) {
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
	public object(): ObjectContext {
		let _localctx: ObjectContext = new ObjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, FlatBuffersParser.RULE_object);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
			this.match(FlatBuffersParser.T__7);
			this.state = 199;
			this.commasep_ident_with_value();
			this.state = 200;
			this.match(FlatBuffersParser.T__8);
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
	public ident_with_value(): Ident_with_valueContext {
		let _localctx: Ident_with_valueContext = new Ident_with_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, FlatBuffersParser.RULE_ident_with_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 202;
			this.match(FlatBuffersParser.IDENT);
			this.state = 203;
			this.match(FlatBuffersParser.T__10);
			this.state = 204;
			this.value();
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
	public commasep_ident_with_value(): Commasep_ident_with_valueContext {
		let _localctx: Commasep_ident_with_valueContext = new Commasep_ident_with_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, FlatBuffersParser.RULE_commasep_ident_with_value);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 206;
			this.ident_with_value();
			this.state = 211;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 207;
					this.match(FlatBuffersParser.T__19);
					this.state = 208;
					this.ident_with_value();
					}
					}
				}
				this.state = 213;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			}
			this.state = 215;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlatBuffersParser.T__19) {
				{
				this.state = 214;
				this.match(FlatBuffersParser.T__19);
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
	public single_value(): Single_valueContext {
		let _localctx: Single_valueContext = new Single_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, FlatBuffersParser.RULE_single_value);
		try {
			this.state = 219;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlatBuffersParser.IDENT:
			case FlatBuffersParser.HEX_INTEGER_CONSTANT:
			case FlatBuffersParser.INTEGER_CONSTANT:
			case FlatBuffersParser.FLOAT_CONSTANT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 217;
				this.scalar();
				}
				break;
			case FlatBuffersParser.STRING_CONSTANT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 218;
				this.match(FlatBuffersParser.STRING_CONSTANT);
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
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, FlatBuffersParser.RULE_value);
		try {
			this.state = 227;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlatBuffersParser.STRING_CONSTANT:
			case FlatBuffersParser.IDENT:
			case FlatBuffersParser.HEX_INTEGER_CONSTANT:
			case FlatBuffersParser.INTEGER_CONSTANT:
			case FlatBuffersParser.FLOAT_CONSTANT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 221;
				this.single_value();
				}
				break;
			case FlatBuffersParser.T__7:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 222;
				this.object();
				}
				break;
			case FlatBuffersParser.T__17:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 223;
				this.match(FlatBuffersParser.T__17);
				this.state = 224;
				this.commasep_value();
				this.state = 225;
				this.match(FlatBuffersParser.T__18);
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
	public commasep_value(): Commasep_valueContext {
		let _localctx: Commasep_valueContext = new Commasep_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, FlatBuffersParser.RULE_commasep_value);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 229;
			this.value();
			this.state = 234;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 230;
					this.match(FlatBuffersParser.T__19);
					this.state = 231;
					this.value();
					}
					}
				}
				this.state = 236;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			}
			this.state = 238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlatBuffersParser.T__19) {
				{
				this.state = 237;
				this.match(FlatBuffersParser.T__19);
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
	public file_extension_decl(): File_extension_declContext {
		let _localctx: File_extension_declContext = new File_extension_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, FlatBuffersParser.RULE_file_extension_decl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 240;
			this.match(FlatBuffersParser.T__20);
			this.state = 241;
			this.match(FlatBuffersParser.STRING_CONSTANT);
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
	public file_identifier_decl(): File_identifier_declContext {
		let _localctx: File_identifier_declContext = new File_identifier_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, FlatBuffersParser.RULE_file_identifier_decl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 243;
			this.match(FlatBuffersParser.T__21);
			this.state = 244;
			this.match(FlatBuffersParser.STRING_CONSTANT);
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
	public ns_ident(): Ns_identContext {
		let _localctx: Ns_identContext = new Ns_identContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, FlatBuffersParser.RULE_ns_ident);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 246;
			this.match(FlatBuffersParser.IDENT);
			this.state = 251;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlatBuffersParser.T__3) {
				{
				{
				this.state = 247;
				this.match(FlatBuffersParser.T__3);
				this.state = 248;
				this.match(FlatBuffersParser.IDENT);
				}
				}
				this.state = 253;
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
	public integer_const(): Integer_constContext {
		let _localctx: Integer_constContext = new Integer_constContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, FlatBuffersParser.RULE_integer_const);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 254;
			_la = this._input.LA(1);
			if (!(_la === FlatBuffersParser.HEX_INTEGER_CONSTANT || _la === FlatBuffersParser.INTEGER_CONSTANT)) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03!\u0103\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x03" +
		"\x02\x07\x02:\n\x02\f\x02\x0E\x02=\v\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02H\n\x02\f\x02\x0E\x02" +
		"K\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x07\x04U\n\x04\f\x04\x0E\x04X\v\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06e\n\x06\f" +
		"\x06\x0E\x06h\v\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05" +
		"\x07p\n\x07\x03\x07\x03\x07\x05\x07t\n\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x05" +
		"\t\x84\n\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x06\n\x8D\n\n\r\n" +
		"\x0E\n\x8E\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v" +
		"\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\xA2\n\f\x03\r\x03\r\x03" +
		"\r\x05\r\xA7\n\r\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xAC\n\x0E\f\x0E\x0E\x0E" +
		"\xAF\v\x0E\x03\x0E\x05\x0E\xB2\n\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xB7" +
		"\n\x0F\x03\x10\x03\x10\x03\x10\x07\x10\xBC\n\x10\f\x10\x0E\x10\xBF\v\x10" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xC5\n\x11\x03\x12\x03\x12\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03" +
		"\x15\x03\x15\x07\x15\xD4\n\x15\f\x15\x0E\x15\xD7\v\x15\x03\x15\x05\x15" +
		"\xDA\n\x15\x03\x16\x03\x16\x05\x16\xDE\n\x16\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x05\x17\xE6\n\x17\x03\x18\x03\x18\x03\x18\x07\x18" +
		"\xEB\n\x18\f\x18\x0E\x18\xEE\v\x18\x03\x18\x05\x18\xF1\n\x18\x03\x19\x03" +
		"\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x07\x1B\xFC" +
		"\n\x1B\f\x1B\x0E\x1B\xFF\v\x1B\x03\x1C\x03\x1C\x03\x1C\x02\x02\x02\x1D" +
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
		"*\x02,\x02.\x020\x022\x024\x026\x02\x02\x05\x03\x02\b\t\x03\x02\x1B\x1E" +
		"\x03\x02\x1C\x1D\x02\u0107\x02;\x03\x02\x02\x02\x04L\x03\x02\x02\x02\x06" +
		"P\x03\x02\x02\x02\b[\x03\x02\x02\x02\n_\x03\x02\x02\x02\fs\x03\x02\x02" +
		"\x02\x0Ez\x03\x02\x02\x02\x10~\x03\x02\x02\x02\x12\x88\x03\x02\x02\x02" +
		"\x14\x92\x03\x02\x02\x02\x16\xA1\x03\x02\x02\x02\x18\xA3\x03\x02\x02\x02" +
		"\x1A\xA8\x03\x02\x02\x02\x1C\xB3\x03\x02\x02\x02\x1E\xB8\x03\x02\x02\x02" +
		" \xC4\x03\x02\x02\x02\"\xC6\x03\x02\x02\x02$\xC8\x03\x02\x02\x02&\xCC" +
		"\x03\x02\x02\x02(\xD0\x03\x02\x02\x02*\xDD\x03\x02\x02\x02,\xE5\x03\x02" +
		"\x02\x02.\xE7\x03\x02\x02\x020\xF2\x03\x02\x02\x022\xF5\x03\x02\x02\x02" +
		"4\xF8\x03\x02\x02\x026\u0100\x03\x02\x02\x028:\x05\x04\x03\x0298\x03\x02" +
		"\x02\x02:=\x03\x02\x02\x02;9\x03\x02\x02\x02;<\x03\x02\x02\x02<I\x03\x02" +
		"\x02\x02=;\x03\x02\x02\x02>H\x05\x06\x04\x02?H\x05\n\x06\x02@H\x05\f\x07" +
		"\x02AH\x05\x0E\b\x02BH\x050\x19\x02CH\x052\x1A\x02DH\x05\b\x05\x02EH\x05" +
		"\x12\n\x02FH\x05$\x13\x02G>\x03\x02\x02\x02G?\x03\x02\x02\x02G@\x03\x02" +
		"\x02\x02GA\x03\x02\x02\x02GB\x03\x02\x02\x02GC\x03\x02\x02\x02GD\x03\x02" +
		"\x02\x02GE\x03\x02\x02\x02GF\x03\x02\x02\x02HK\x03\x02\x02\x02IG\x03\x02" +
		"\x02\x02IJ\x03\x02\x02\x02J\x03\x03\x02\x02\x02KI\x03\x02\x02\x02LM\x07" +
		"\x03\x02\x02MN\x07\x19\x02\x02NO\x07\x04\x02\x02O\x05\x03\x02\x02\x02" +
		"PQ\x07\x05\x02\x02QV\x07\x1B\x02\x02RS\x07\x06\x02\x02SU\x07\x1B\x02\x02" +
		"TR\x03\x02\x02\x02UX\x03\x02\x02\x02VT\x03\x02\x02\x02VW\x03\x02\x02\x02" +
		"WY\x03\x02\x02\x02XV\x03\x02\x02\x02YZ\x07\x04\x02\x02Z\x07\x03\x02\x02" +
		"\x02[\\\x07\x07\x02\x02\\]\x07\x19\x02\x02]^\x07\x04\x02\x02^\t\x03\x02" +
		"\x02\x02_`\t\x02\x02\x02`a\x07\x1B\x02\x02ab\x05 \x11\x02bf\x07\n\x02" +
		"\x02ce\x05\x10\t\x02dc\x03\x02\x02\x02eh\x03\x02\x02\x02fd\x03\x02\x02" +
		"\x02fg\x03\x02\x02\x02gi\x03\x02\x02\x02hf\x03\x02\x02\x02ij\x07\v\x02" +
		"\x02j\v\x03\x02\x02\x02kl\x07\f\x02\x02lo\x07\x1B\x02\x02mn\x07\r\x02" +
		"\x02np\x05\x16\f\x02om\x03\x02\x02\x02op\x03\x02\x02\x02pt\x03\x02\x02" +
		"\x02qr\x07\x0E\x02\x02rt\x07\x1B\x02\x02sk\x03\x02\x02\x02sq\x03\x02\x02" +
		"\x02tu\x03\x02\x02\x02uv\x05 \x11\x02vw\x07\n\x02\x02wx\x05\x1A\x0E\x02" +
		"xy\x07\v\x02\x02y\r\x03\x02\x02\x02z{\x07\x0F\x02\x02{|\x07\x1B\x02\x02" +
		"|}\x07\x04\x02\x02}\x0F\x03\x02\x02\x02~\x7F\x07\x1B\x02\x02\x7F\x80\x07" +
		"\r\x02\x02\x80\x83\x05\x16\f\x02\x81\x82\x07\x10\x02\x02\x82\x84\x05\"" +
		"\x12\x02\x83\x81\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x85\x03\x02" +
		"\x02\x02\x85\x86\x05 \x11\x02\x86\x87\x07\x04\x02\x02\x87\x11\x03\x02" +
		"\x02\x02\x88\x89\x07\x11\x02\x02\x89\x8A\x07\x1B\x02\x02\x8A\x8C\x07\n" +
		"\x02\x02\x8B\x8D\x05\x14\v\x02\x8C\x8B\x03\x02\x02\x02\x8D\x8E\x03\x02" +
		"\x02\x02\x8E\x8C\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x90\x03\x02" +
		"\x02\x02\x90\x91\x07\v\x02\x02\x91\x13\x03\x02\x02\x02\x92\x93\x07\x1B" +
		"\x02\x02\x93\x94\x07\x12\x02\x02\x94\x95\x07\x1B\x02\x02\x95\x96\x07\x13" +
		"\x02\x02\x96\x97\x07\r\x02\x02\x97\x98\x07\x1B\x02\x02\x98\x99\x05 \x11" +
		"\x02\x99\x9A\x07\x04\x02\x02\x9A\x15\x03\x02\x02\x02\x9B\x9C\x07\x14\x02" +
		"\x02\x9C\x9D\x05\x16\f\x02\x9D\x9E\x07\x15\x02\x02\x9E\xA2\x03\x02\x02" +
		"\x02\x9F\xA2\x07\x1A\x02\x02\xA0\xA2\x054\x1B\x02\xA1\x9B\x03\x02\x02" +
		"\x02\xA1\x9F\x03\x02\x02\x02\xA1\xA0\x03\x02\x02\x02\xA2\x17\x03\x02\x02" +
		"\x02\xA3\xA6\x054\x1B\x02\xA4\xA5\x07\x10\x02\x02\xA5\xA7\x056\x1C\x02" +
		"\xA6\xA4\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\x19\x03\x02\x02\x02" +
		"\xA8\xAD\x05\x18\r\x02\xA9\xAA\x07\x16\x02\x02\xAA\xAC\x05\x18\r\x02\xAB" +
		"\xA9\x03\x02\x02\x02\xAC\xAF\x03\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\xAD" +
		"\xAE\x03\x02\x02\x02\xAE\xB1\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xB0" +
		"\xB2\x07\x16\x02\x02\xB1\xB0\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2" +
		"\x1B\x03\x02\x02\x02\xB3\xB6\x07\x1B\x02\x02\xB4\xB5\x07\r\x02\x02\xB5" +
		"\xB7\x05*\x16\x02\xB6\xB4\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7" +
		"\x1D\x03\x02\x02\x02\xB8\xBD\x05\x1C\x0F\x02\xB9\xBA\x07\x16\x02\x02\xBA" +
		"\xBC\x05\x1C\x0F\x02\xBB\xB9\x03\x02\x02\x02\xBC\xBF\x03\x02\x02\x02\xBD" +
		"\xBB\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\x1F\x03\x02\x02\x02\xBF" +
		"\xBD\x03\x02\x02\x02\xC0\xC1\x07\x12\x02\x02\xC1\xC2\x05\x1E\x10\x02\xC2" +
		"\xC3\x07\x13\x02\x02\xC3\xC5\x03\x02\x02\x02\xC4\xC0\x03\x02\x02\x02\xC4" +
		"\xC5\x03\x02\x02\x02\xC5!\x03\x02\x02\x02\xC6\xC7\t\x03\x02\x02\xC7#\x03" +
		"\x02\x02\x02\xC8\xC9\x07\n\x02\x02\xC9\xCA\x05(\x15\x02\xCA\xCB\x07\v" +
		"\x02\x02\xCB%\x03\x02\x02\x02\xCC\xCD\x07\x1B\x02\x02\xCD\xCE\x07\r\x02" +
		"\x02\xCE\xCF\x05,\x17\x02\xCF\'\x03\x02\x02\x02\xD0\xD5\x05&\x14\x02\xD1" +
		"\xD2\x07\x16\x02\x02\xD2\xD4\x05&\x14\x02\xD3\xD1\x03\x02\x02\x02\xD4" +
		"\xD7\x03\x02\x02\x02\xD5\xD3\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6" +
		"\xD9\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD8\xDA\x07\x16\x02\x02\xD9" +
		"\xD8\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA)\x03\x02\x02\x02\xDB" +
		"\xDE\x05\"\x12\x02\xDC\xDE\x07\x19\x02\x02\xDD\xDB\x03\x02\x02\x02\xDD" +
		"\xDC\x03\x02\x02\x02\xDE+\x03\x02\x02\x02\xDF\xE6\x05*\x16\x02\xE0\xE6" +
		"\x05$\x13\x02\xE1\xE2\x07\x14\x02\x02\xE2\xE3\x05.\x18\x02\xE3\xE4\x07" +
		"\x15\x02\x02\xE4\xE6\x03\x02\x02\x02\xE5\xDF\x03\x02\x02\x02\xE5\xE0\x03" +
		"\x02\x02\x02\xE5\xE1\x03\x02\x02\x02\xE6-\x03\x02\x02\x02\xE7\xEC\x05" +
		",\x17\x02\xE8\xE9\x07\x16\x02\x02\xE9\xEB\x05,\x17\x02\xEA\xE8\x03\x02" +
		"\x02\x02\xEB\xEE\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC\xED\x03\x02" +
		"\x02\x02\xED\xF0\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEF\xF1\x07\x16" +
		"\x02\x02\xF0\xEF\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1/\x03\x02" +
		"\x02\x02\xF2\xF3\x07\x17\x02\x02\xF3\xF4\x07\x19\x02\x02\xF41\x03\x02" +
		"\x02\x02\xF5\xF6\x07\x18\x02\x02\xF6\xF7\x07\x19\x02\x02\xF73\x03\x02" +
		"\x02\x02\xF8\xFD\x07\x1B\x02\x02\xF9\xFA\x07\x06\x02\x02\xFA\xFC\x07\x1B" +
		"\x02\x02\xFB\xF9\x03\x02\x02\x02\xFC\xFF\x03\x02\x02\x02\xFD\xFB\x03\x02" +
		"\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE5\x03\x02\x02\x02\xFF\xFD\x03\x02" +
		"\x02\x02\u0100\u0101\t\x04\x02\x02\u01017\x03\x02\x02\x02\x19;GIVfos\x83" +
		"\x8E\xA1\xA6\xAD\xB1\xB6\xBD\xC4\xD5\xD9\xDD\xE5\xEC\xF0\xFD";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FlatBuffersParser.__ATN) {
			FlatBuffersParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FlatBuffersParser._serializedATN));
		}

		return FlatBuffersParser.__ATN;
	}

}

export class SchemaContext extends ParserRuleContext {
	public include(): IncludeContext[];
	public include(i: number): IncludeContext;
	public include(i?: number): IncludeContext | IncludeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IncludeContext);
		} else {
			return this.getRuleContext(i, IncludeContext);
		}
	}
	public namespace_decl(): Namespace_declContext[];
	public namespace_decl(i: number): Namespace_declContext;
	public namespace_decl(i?: number): Namespace_declContext | Namespace_declContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Namespace_declContext);
		} else {
			return this.getRuleContext(i, Namespace_declContext);
		}
	}
	public type_decl(): Type_declContext[];
	public type_decl(i: number): Type_declContext;
	public type_decl(i?: number): Type_declContext | Type_declContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Type_declContext);
		} else {
			return this.getRuleContext(i, Type_declContext);
		}
	}
	public enum_decl(): Enum_declContext[];
	public enum_decl(i: number): Enum_declContext;
	public enum_decl(i?: number): Enum_declContext | Enum_declContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Enum_declContext);
		} else {
			return this.getRuleContext(i, Enum_declContext);
		}
	}
	public root_decl(): Root_declContext[];
	public root_decl(i: number): Root_declContext;
	public root_decl(i?: number): Root_declContext | Root_declContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Root_declContext);
		} else {
			return this.getRuleContext(i, Root_declContext);
		}
	}
	public file_extension_decl(): File_extension_declContext[];
	public file_extension_decl(i: number): File_extension_declContext;
	public file_extension_decl(i?: number): File_extension_declContext | File_extension_declContext[] {
		if (i === undefined) {
			return this.getRuleContexts(File_extension_declContext);
		} else {
			return this.getRuleContext(i, File_extension_declContext);
		}
	}
	public file_identifier_decl(): File_identifier_declContext[];
	public file_identifier_decl(i: number): File_identifier_declContext;
	public file_identifier_decl(i?: number): File_identifier_declContext | File_identifier_declContext[] {
		if (i === undefined) {
			return this.getRuleContexts(File_identifier_declContext);
		} else {
			return this.getRuleContext(i, File_identifier_declContext);
		}
	}
	public attribute_decl(): Attribute_declContext[];
	public attribute_decl(i: number): Attribute_declContext;
	public attribute_decl(i?: number): Attribute_declContext | Attribute_declContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Attribute_declContext);
		} else {
			return this.getRuleContext(i, Attribute_declContext);
		}
	}
	public rpc_decl(): Rpc_declContext[];
	public rpc_decl(i: number): Rpc_declContext;
	public rpc_decl(i?: number): Rpc_declContext | Rpc_declContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Rpc_declContext);
		} else {
			return this.getRuleContext(i, Rpc_declContext);
		}
	}
	public object(): ObjectContext[];
	public object(i: number): ObjectContext;
	public object(i?: number): ObjectContext | ObjectContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectContext);
		} else {
			return this.getRuleContext(i, ObjectContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlatBuffersParser.RULE_schema; }
	// @Override
	public enterRule(listener: FlatBuffersListener): void {
		if (listener.enterSchema) {
			listener.enterSchema(this);
		}
	}
	// @Override
	public exitRule(listener: FlatBuffersListener): void {
		if (listener.exitSchema) {
			listener.exitSchema(this);
		}
	}
}


export class IncludeContext extends ParserRuleContext {
	public STRING_CONSTANT(): TerminalNode { return this.getToken(FlatBuffersParser.STRING_CONSTANT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlatBuffersParser.RULE_include; }
	// @Override
	public enterRule(listener: FlatBuffersListener): void {
		if (listener.enterInclude) {
			listener.enterInclude(this);
		}
	}
	// @Override
	public exitRule(listener: FlatBuffersListener): void {
		if (listener.exitInclude) {
			listener.exitInclude(this);
		}
	}
}


export class Namespace_declContext extends ParserRuleContext {
	public IDENT(): TerminalNode[];
	public IDENT(i: number): TerminalNode;
	public IDENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlatBuffersParser.IDENT);
		} else {
			return this.getToken(FlatBuffersParser.IDENT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlatBuffersParser.RULE_namespace_decl; }
	// @Override
	public enterRule(listener: FlatBuffersListener): void {
		if (listener.enterNamespace_decl) {
			listener.enterNamespace_decl(this);
		}
	}
	// @Override
	public exitRule(listener: FlatBuffersListener): void {
		if (listener.exitNamespace_decl) {
			listener.exitNamespace_decl(this);
		}
	}
}


export class Attribute_declContext extends ParserRuleContext {
	public STRING_CONSTANT(): TerminalNode { return this.getToken(FlatBuffersParser.STRING_CONSTANT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlatBuffersParser.RULE_attribute_decl; }
	// @Override
	public enterRule(listener: FlatBuffersListener): void {
		if (listener.enterAttribute_decl) {
			listener.enterAttribute_decl(this);
		}
	}
	// @Override
	public exitRule(listener: FlatBuffersListener): void {
		if (listener.exitAttribute_decl) {
			listener.exitAttribute_decl(this);
		}
	}
}


export class Type_declContext extends ParserRuleContext {
	public IDENT(): TerminalNode { return this.getToken(FlatBuffersParser.IDENT, 0); }
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public field_decl(): Field_declContext[];
	public field_decl(i: number): Field_declContext;
	public field_decl(i?: number): Field_declContext | Field_declContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Field_declContext);
		} else {
			return this.getRuleContext(i, Field_declContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlatBuffersParser.RULE_type_decl; }
	// @Override
	public enterRule(listener: FlatBuffersListener): void {
		if (listener.enterType_decl) {
			listener.enterType_decl(this);
		}
	}
	// @Override
	public exitRule(listener: FlatBuffersListener): void {
		if (listener.exitType_decl) {
			listener.exitType_decl(this);
		}
	}
}


export class Enum_declContext extends ParserRuleContext {
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public commasep_enumval_decl(): Commasep_enumval_declContext {
		return this.getRuleContext(0, Commasep_enumval_declContext);
	}
	public IDENT(): TerminalNode | undefined { return this.tryGetToken(FlatBuffersParser.IDENT, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlatBuffersParser.RULE_enum_decl; }
	// @Override
	public enterRule(listener: FlatBuffersListener): void {
		if (listener.enterEnum_decl) {
			listener.enterEnum_decl(this);
		}
	}
	// @Override
	public exitRule(listener: FlatBuffersListener): void {
		if (listener.exitEnum_decl) {
			listener.exitEnum_decl(this);
		}
	}
}


export class Root_declContext extends ParserRuleContext {
	public IDENT(): TerminalNode { return this.getToken(FlatBuffersParser.IDENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlatBuffersParser.RULE_root_decl; }
	// @Override
	public enterRule(listener: FlatBuffersListener): void {
		if (listener.enterRoot_decl) {
			listener.enterRoot_decl(this);
		}
	}
	// @Override
	public exitRule(listener: FlatBuffersListener): void {
		if (listener.exitRoot_decl) {
			listener.exitRoot_decl(this);
		}
	}
}


export class Field_declContext extends ParserRuleContext {
	public IDENT(): TerminalNode { return this.getToken(FlatBuffersParser.IDENT, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	public scalar(): ScalarContext | undefined {
		return this.tryGetRuleContext(0, ScalarContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlatBuffersParser.RULE_field_decl; }
	// @Override
	public enterRule(listener: FlatBuffersListener): void {
		if (listener.enterField_decl) {
			listener.enterField_decl(this);
		}
	}
	// @Override
	public exitRule(listener: FlatBuffersListener): void {
		if (listener.exitField_decl) {
			listener.exitField_decl(this);
		}
	}
}


export class Rpc_declContext extends ParserRuleContext {
	public IDENT(): TerminalNode { return this.getToken(FlatBuffersParser.IDENT, 0); }
	public rpc_method(): Rpc_methodContext[];
	public rpc_method(i: number): Rpc_methodContext;
	public rpc_method(i?: number): Rpc_methodContext | Rpc_methodContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Rpc_methodContext);
		} else {
			return this.getRuleContext(i, Rpc_methodContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlatBuffersParser.RULE_rpc_decl; }
	// @Override
	public enterRule(listener: FlatBuffersListener): void {
		if (listener.enterRpc_decl) {
			listener.enterRpc_decl(this);
		}
	}
	// @Override
	public exitRule(listener: FlatBuffersListener): void {
		if (listener.exitRpc_decl) {
			listener.exitRpc_decl(this);
		}
	}
}


export class Rpc_methodContext extends ParserRuleContext {
	public IDENT(): TerminalNode[];
	public IDENT(i: number): TerminalNode;
	public IDENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlatBuffersParser.IDENT);
		} else {
			return this.getToken(FlatBuffersParser.IDENT, i);
		}
	}
	public metadata(): MetadataContext {
		return this.getRuleContext(0, MetadataContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlatBuffersParser.RULE_rpc_method; }
	// @Override
	public enterRule(listener: FlatBuffersListener): void {
		if (listener.enterRpc_method) {
			listener.enterRpc_method(this);
		}
	}
	// @Override
	public exitRule(listener: FlatBuffersListener): void {
		if (listener.exitRpc_method) {
			listener.exitRpc_method(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public BASE_TYPE_NAME(): TerminalNode | undefined { return this.tryGetToken(FlatBuffersParser.BASE_TYPE_NAME, 0); }
	public ns_ident(): Ns_identContext | undefined {
		return this.tryGetRuleContext(0, Ns_identContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlatBuffersParser.RULE_type; }
	// @Override
	public enterRule(listener: FlatBuffersListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: FlatBuffersListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
}


export class Enumval_declContext extends ParserRuleContext {
	public ns_ident(): Ns_identContext {
		return this.getRuleContext(0, Ns_identContext);
	}
	public integer_const(): Integer_constContext | undefined {
		return this.tryGetRuleContext(0, Integer_constContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlatBuffersParser.RULE_enumval_decl; }
	// @Override
	public enterRule(listener: FlatBuffersListener): void {
		if (listener.enterEnumval_decl) {
			listener.enterEnumval_decl(this);
		}
	}
	// @Override
	public exitRule(listener: FlatBuffersListener): void {
		if (listener.exitEnumval_decl) {
			listener.exitEnumval_decl(this);
		}
	}
}


export class Commasep_enumval_declContext extends ParserRuleContext {
	public enumval_decl(): Enumval_declContext[];
	public enumval_decl(i: number): Enumval_declContext;
	public enumval_decl(i?: number): Enumval_declContext | Enumval_declContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Enumval_declContext);
		} else {
			return this.getRuleContext(i, Enumval_declContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlatBuffersParser.RULE_commasep_enumval_decl; }
	// @Override
	public enterRule(listener: FlatBuffersListener): void {
		if (listener.enterCommasep_enumval_decl) {
			listener.enterCommasep_enumval_decl(this);
		}
	}
	// @Override
	public exitRule(listener: FlatBuffersListener): void {
		if (listener.exitCommasep_enumval_decl) {
			listener.exitCommasep_enumval_decl(this);
		}
	}
}


export class Ident_with_opt_single_valueContext extends ParserRuleContext {
	public IDENT(): TerminalNode { return this.getToken(FlatBuffersParser.IDENT, 0); }
	public single_value(): Single_valueContext | undefined {
		return this.tryGetRuleContext(0, Single_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlatBuffersParser.RULE_ident_with_opt_single_value; }
	// @Override
	public enterRule(listener: FlatBuffersListener): void {
		if (listener.enterIdent_with_opt_single_value) {
			listener.enterIdent_with_opt_single_value(this);
		}
	}
	// @Override
	public exitRule(listener: FlatBuffersListener): void {
		if (listener.exitIdent_with_opt_single_value) {
			listener.exitIdent_with_opt_single_value(this);
		}
	}
}


export class Commasep_ident_with_opt_single_valueContext extends ParserRuleContext {
	public ident_with_opt_single_value(): Ident_with_opt_single_valueContext[];
	public ident_with_opt_single_value(i: number): Ident_with_opt_single_valueContext;
	public ident_with_opt_single_value(i?: number): Ident_with_opt_single_valueContext | Ident_with_opt_single_valueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Ident_with_opt_single_valueContext);
		} else {
			return this.getRuleContext(i, Ident_with_opt_single_valueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlatBuffersParser.RULE_commasep_ident_with_opt_single_value; }
	// @Override
	public enterRule(listener: FlatBuffersListener): void {
		if (listener.enterCommasep_ident_with_opt_single_value) {
			listener.enterCommasep_ident_with_opt_single_value(this);
		}
	}
	// @Override
	public exitRule(listener: FlatBuffersListener): void {
		if (listener.exitCommasep_ident_with_opt_single_value) {
			listener.exitCommasep_ident_with_opt_single_value(this);
		}
	}
}


export class MetadataContext extends ParserRuleContext {
	public commasep_ident_with_opt_single_value(): Commasep_ident_with_opt_single_valueContext | undefined {
		return this.tryGetRuleContext(0, Commasep_ident_with_opt_single_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlatBuffersParser.RULE_metadata; }
	// @Override
	public enterRule(listener: FlatBuffersListener): void {
		if (listener.enterMetadata) {
			listener.enterMetadata(this);
		}
	}
	// @Override
	public exitRule(listener: FlatBuffersListener): void {
		if (listener.exitMetadata) {
			listener.exitMetadata(this);
		}
	}
}


export class ScalarContext extends ParserRuleContext {
	public INTEGER_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(FlatBuffersParser.INTEGER_CONSTANT, 0); }
	public HEX_INTEGER_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(FlatBuffersParser.HEX_INTEGER_CONSTANT, 0); }
	public FLOAT_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(FlatBuffersParser.FLOAT_CONSTANT, 0); }
	public IDENT(): TerminalNode | undefined { return this.tryGetToken(FlatBuffersParser.IDENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlatBuffersParser.RULE_scalar; }
	// @Override
	public enterRule(listener: FlatBuffersListener): void {
		if (listener.enterScalar) {
			listener.enterScalar(this);
		}
	}
	// @Override
	public exitRule(listener: FlatBuffersListener): void {
		if (listener.exitScalar) {
			listener.exitScalar(this);
		}
	}
}


export class ObjectContext extends ParserRuleContext {
	public commasep_ident_with_value(): Commasep_ident_with_valueContext {
		return this.getRuleContext(0, Commasep_ident_with_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlatBuffersParser.RULE_object; }
	// @Override
	public enterRule(listener: FlatBuffersListener): void {
		if (listener.enterObject) {
			listener.enterObject(this);
		}
	}
	// @Override
	public exitRule(listener: FlatBuffersListener): void {
		if (listener.exitObject) {
			listener.exitObject(this);
		}
	}
}


export class Ident_with_valueContext extends ParserRuleContext {
	public IDENT(): TerminalNode { return this.getToken(FlatBuffersParser.IDENT, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlatBuffersParser.RULE_ident_with_value; }
	// @Override
	public enterRule(listener: FlatBuffersListener): void {
		if (listener.enterIdent_with_value) {
			listener.enterIdent_with_value(this);
		}
	}
	// @Override
	public exitRule(listener: FlatBuffersListener): void {
		if (listener.exitIdent_with_value) {
			listener.exitIdent_with_value(this);
		}
	}
}


export class Commasep_ident_with_valueContext extends ParserRuleContext {
	public ident_with_value(): Ident_with_valueContext[];
	public ident_with_value(i: number): Ident_with_valueContext;
	public ident_with_value(i?: number): Ident_with_valueContext | Ident_with_valueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Ident_with_valueContext);
		} else {
			return this.getRuleContext(i, Ident_with_valueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlatBuffersParser.RULE_commasep_ident_with_value; }
	// @Override
	public enterRule(listener: FlatBuffersListener): void {
		if (listener.enterCommasep_ident_with_value) {
			listener.enterCommasep_ident_with_value(this);
		}
	}
	// @Override
	public exitRule(listener: FlatBuffersListener): void {
		if (listener.exitCommasep_ident_with_value) {
			listener.exitCommasep_ident_with_value(this);
		}
	}
}


export class Single_valueContext extends ParserRuleContext {
	public scalar(): ScalarContext | undefined {
		return this.tryGetRuleContext(0, ScalarContext);
	}
	public STRING_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(FlatBuffersParser.STRING_CONSTANT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlatBuffersParser.RULE_single_value; }
	// @Override
	public enterRule(listener: FlatBuffersListener): void {
		if (listener.enterSingle_value) {
			listener.enterSingle_value(this);
		}
	}
	// @Override
	public exitRule(listener: FlatBuffersListener): void {
		if (listener.exitSingle_value) {
			listener.exitSingle_value(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public single_value(): Single_valueContext | undefined {
		return this.tryGetRuleContext(0, Single_valueContext);
	}
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	public commasep_value(): Commasep_valueContext | undefined {
		return this.tryGetRuleContext(0, Commasep_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlatBuffersParser.RULE_value; }
	// @Override
	public enterRule(listener: FlatBuffersListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: FlatBuffersListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
}


export class Commasep_valueContext extends ParserRuleContext {
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlatBuffersParser.RULE_commasep_value; }
	// @Override
	public enterRule(listener: FlatBuffersListener): void {
		if (listener.enterCommasep_value) {
			listener.enterCommasep_value(this);
		}
	}
	// @Override
	public exitRule(listener: FlatBuffersListener): void {
		if (listener.exitCommasep_value) {
			listener.exitCommasep_value(this);
		}
	}
}


export class File_extension_declContext extends ParserRuleContext {
	public STRING_CONSTANT(): TerminalNode { return this.getToken(FlatBuffersParser.STRING_CONSTANT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlatBuffersParser.RULE_file_extension_decl; }
	// @Override
	public enterRule(listener: FlatBuffersListener): void {
		if (listener.enterFile_extension_decl) {
			listener.enterFile_extension_decl(this);
		}
	}
	// @Override
	public exitRule(listener: FlatBuffersListener): void {
		if (listener.exitFile_extension_decl) {
			listener.exitFile_extension_decl(this);
		}
	}
}


export class File_identifier_declContext extends ParserRuleContext {
	public STRING_CONSTANT(): TerminalNode { return this.getToken(FlatBuffersParser.STRING_CONSTANT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlatBuffersParser.RULE_file_identifier_decl; }
	// @Override
	public enterRule(listener: FlatBuffersListener): void {
		if (listener.enterFile_identifier_decl) {
			listener.enterFile_identifier_decl(this);
		}
	}
	// @Override
	public exitRule(listener: FlatBuffersListener): void {
		if (listener.exitFile_identifier_decl) {
			listener.exitFile_identifier_decl(this);
		}
	}
}


export class Ns_identContext extends ParserRuleContext {
	public IDENT(): TerminalNode[];
	public IDENT(i: number): TerminalNode;
	public IDENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlatBuffersParser.IDENT);
		} else {
			return this.getToken(FlatBuffersParser.IDENT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlatBuffersParser.RULE_ns_ident; }
	// @Override
	public enterRule(listener: FlatBuffersListener): void {
		if (listener.enterNs_ident) {
			listener.enterNs_ident(this);
		}
	}
	// @Override
	public exitRule(listener: FlatBuffersListener): void {
		if (listener.exitNs_ident) {
			listener.exitNs_ident(this);
		}
	}
}


export class Integer_constContext extends ParserRuleContext {
	public INTEGER_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(FlatBuffersParser.INTEGER_CONSTANT, 0); }
	public HEX_INTEGER_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(FlatBuffersParser.HEX_INTEGER_CONSTANT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlatBuffersParser.RULE_integer_const; }
	// @Override
	public enterRule(listener: FlatBuffersListener): void {
		if (listener.enterInteger_const) {
			listener.enterInteger_const(this);
		}
	}
	// @Override
	public exitRule(listener: FlatBuffersListener): void {
		if (listener.exitInteger_const) {
			listener.exitInteger_const(this);
		}
	}
}


