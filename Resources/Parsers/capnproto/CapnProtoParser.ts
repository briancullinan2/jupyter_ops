// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/capnproto/CapnProto.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { CapnProtoListener } from "./CapnProtoListener";
import { CapnProtoVisitor } from "./CapnProtoVisitor";


export class CapnProtoParser extends Parser {
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
	public static readonly LOCATOR = 29;
	public static readonly TEXT = 30;
	public static readonly INTEGER = 31;
	public static readonly FLOAT = 32;
	public static readonly HEXADECIMAL = 33;
	public static readonly FILE_ID = 34;
	public static readonly BOOLEAN = 35;
	public static readonly VOID = 36;
	public static readonly NAME = 37;
	public static readonly COMMENT = 38;
	public static readonly WHITESPACE = 39;
	public static readonly RULE_document = 0;
	public static readonly RULE_file_identifier = 1;
	public static readonly RULE_using_import = 2;
	public static readonly RULE_namespace = 3;
	public static readonly RULE_document_content = 4;
	public static readonly RULE_struct_def = 5;
	public static readonly RULE_struct_content = 6;
	public static readonly RULE_interface_def = 7;
	public static readonly RULE_interface_content = 8;
	public static readonly RULE_field_def = 9;
	public static readonly RULE_type = 10;
	public static readonly RULE_inner_type = 11;
	public static readonly RULE_enum_def = 12;
	public static readonly RULE_annotation_reference = 13;
	public static readonly RULE_enum_content = 14;
	public static readonly RULE_named_union_def = 15;
	public static readonly RULE_unnamed_union_def = 16;
	public static readonly RULE_union_content = 17;
	public static readonly RULE_group_def = 18;
	public static readonly RULE_group_content = 19;
	public static readonly RULE_function_def = 20;
	public static readonly RULE_generic_type_parameters = 21;
	public static readonly RULE_function_parameters = 22;
	public static readonly RULE_annotation_def = 23;
	public static readonly RULE_annotation_parameters = 24;
	public static readonly RULE_const_def = 25;
	public static readonly RULE_const_value = 26;
	public static readonly RULE_literal_union = 27;
	public static readonly RULE_literal_list = 28;
	public static readonly RULE_literal_bytes = 29;
	public static readonly RULE_union_mapping = 30;
	public static readonly RULE_inner_using = 31;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"document", "file_identifier", "using_import", "namespace", "document_content", 
		"struct_def", "struct_content", "interface_def", "interface_content", 
		"field_def", "type", "inner_type", "enum_def", "annotation_reference", 
		"enum_content", "named_union_def", "unnamed_union_def", "union_content", 
		"group_def", "group_content", "function_def", "generic_type_parameters", 
		"function_parameters", "annotation_def", "annotation_parameters", "const_def", 
		"const_value", "literal_union", "literal_list", "literal_bytes", "union_mapping", 
		"inner_using",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "'using'", "'='", "'import'", "'.'", "'$'", "'.namespace'", 
		"'('", "')'", "'struct'", "'{'", "'}'", "'interface'", "'extends'", "':'", 
		"','", "'enum'", "'.ann'", "':union'", "'union'", "':group'", "'->'", 
		"'['", "']'", "'annotation'", "'const'", "'-'", "'0x'", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'void'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "LOCATOR", "TEXT", "INTEGER", "FLOAT", "HEXADECIMAL", "FILE_ID", 
		"BOOLEAN", "VOID", "NAME", "COMMENT", "WHITESPACE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CapnProtoParser._LITERAL_NAMES, CapnProtoParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CapnProtoParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "CapnProto.g4"; }

	// @Override
	public get ruleNames(): string[] { return CapnProtoParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CapnProtoParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CapnProtoParser._ATN, this);
	}
	// @RuleVersion(0)
	public document(): DocumentContext {
		let _localctx: DocumentContext = new DocumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CapnProtoParser.RULE_document);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 64;
			this.file_identifier();
			this.state = 68;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CapnProtoParser.T__1) {
				{
				{
				this.state = 65;
				this.using_import();
				}
				}
				this.state = 70;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 72;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CapnProtoParser.T__5) {
				{
				this.state = 71;
				this.namespace();
				}
			}

			this.state = 77;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (CapnProtoParser.T__9 - 10)) | (1 << (CapnProtoParser.T__12 - 10)) | (1 << (CapnProtoParser.T__16 - 10)) | (1 << (CapnProtoParser.T__24 - 10)) | (1 << (CapnProtoParser.T__25 - 10)) | (1 << (CapnProtoParser.NAME - 10)))) !== 0)) {
				{
				{
				this.state = 74;
				this.document_content();
				}
				}
				this.state = 79;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 80;
			this.match(CapnProtoParser.EOF);
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
	public file_identifier(): File_identifierContext {
		let _localctx: File_identifierContext = new File_identifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CapnProtoParser.RULE_file_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 82;
			this.match(CapnProtoParser.FILE_ID);
			this.state = 83;
			this.match(CapnProtoParser.T__0);
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
	public using_import(): Using_importContext {
		let _localctx: Using_importContext = new Using_importContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CapnProtoParser.RULE_using_import);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 85;
			this.match(CapnProtoParser.T__1);
			this.state = 88;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CapnProtoParser.NAME) {
				{
				this.state = 86;
				this.match(CapnProtoParser.NAME);
				this.state = 87;
				this.match(CapnProtoParser.T__2);
				}
			}

			this.state = 90;
			this.match(CapnProtoParser.T__3);
			this.state = 91;
			this.match(CapnProtoParser.TEXT);
			this.state = 94;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CapnProtoParser.T__4) {
				{
				this.state = 92;
				this.match(CapnProtoParser.T__4);
				this.state = 93;
				this.match(CapnProtoParser.NAME);
				}
			}

			this.state = 96;
			this.match(CapnProtoParser.T__0);
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
	public namespace(): NamespaceContext {
		let _localctx: NamespaceContext = new NamespaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CapnProtoParser.RULE_namespace);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this.match(CapnProtoParser.T__5);
			this.state = 99;
			this.match(CapnProtoParser.NAME);
			this.state = 100;
			this.match(CapnProtoParser.T__6);
			this.state = 101;
			this.match(CapnProtoParser.T__7);
			this.state = 102;
			this.match(CapnProtoParser.TEXT);
			this.state = 103;
			this.match(CapnProtoParser.T__8);
			this.state = 104;
			this.match(CapnProtoParser.T__0);
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
	public document_content(): Document_contentContext {
		let _localctx: Document_contentContext = new Document_contentContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CapnProtoParser.RULE_document_content);
		try {
			this.state = 112;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CapnProtoParser.T__9:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 106;
				this.struct_def();
				}
				break;
			case CapnProtoParser.T__12:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 107;
				this.interface_def();
				}
				break;
			case CapnProtoParser.NAME:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 108;
				this.function_def();
				}
				break;
			case CapnProtoParser.T__24:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 109;
				this.annotation_def();
				}
				break;
			case CapnProtoParser.T__25:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 110;
				this.const_def();
				}
				break;
			case CapnProtoParser.T__16:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 111;
				this.enum_def();
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
	public struct_def(): Struct_defContext {
		let _localctx: Struct_defContext = new Struct_defContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CapnProtoParser.RULE_struct_def);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 114;
			this.match(CapnProtoParser.T__9);
			this.state = 115;
			this.type();
			this.state = 117;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CapnProtoParser.T__5) {
				{
				this.state = 116;
				this.annotation_reference();
				}
			}

			this.state = 119;
			this.match(CapnProtoParser.T__10);
			this.state = 123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CapnProtoParser.T__1) | (1 << CapnProtoParser.T__9) | (1 << CapnProtoParser.T__12) | (1 << CapnProtoParser.T__16) | (1 << CapnProtoParser.T__19) | (1 << CapnProtoParser.T__24) | (1 << CapnProtoParser.T__25))) !== 0) || _la === CapnProtoParser.NAME) {
				{
				{
				this.state = 120;
				this.struct_content();
				}
				}
				this.state = 125;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 126;
			this.match(CapnProtoParser.T__11);
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
	public struct_content(): Struct_contentContext {
		let _localctx: Struct_contentContext = new Struct_contentContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CapnProtoParser.RULE_struct_content);
		try {
			this.state = 138;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 128;
				this.field_def();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 129;
				this.enum_def();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 130;
				this.named_union_def();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 131;
				this.unnamed_union_def();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 132;
				this.interface_def();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 133;
				this.annotation_def();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 134;
				this.struct_def();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 135;
				this.group_def();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 136;
				this.const_def();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 137;
				this.inner_using();
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
	public interface_def(): Interface_defContext {
		let _localctx: Interface_defContext = new Interface_defContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CapnProtoParser.RULE_interface_def);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this.match(CapnProtoParser.T__12);
			this.state = 141;
			this.type();
			this.state = 147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CapnProtoParser.T__13) {
				{
				this.state = 142;
				this.match(CapnProtoParser.T__13);
				this.state = 143;
				this.match(CapnProtoParser.T__7);
				this.state = 144;
				this.type();
				this.state = 145;
				this.match(CapnProtoParser.T__8);
				}
			}

			this.state = 149;
			this.match(CapnProtoParser.T__10);
			this.state = 153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (CapnProtoParser.T__9 - 10)) | (1 << (CapnProtoParser.T__12 - 10)) | (1 << (CapnProtoParser.T__16 - 10)) | (1 << (CapnProtoParser.T__19 - 10)) | (1 << (CapnProtoParser.NAME - 10)))) !== 0)) {
				{
				{
				this.state = 150;
				this.interface_content();
				}
				}
				this.state = 155;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 156;
			this.match(CapnProtoParser.T__11);
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
	public interface_content(): Interface_contentContext {
		let _localctx: Interface_contentContext = new Interface_contentContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CapnProtoParser.RULE_interface_content);
		try {
			this.state = 165;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 158;
				this.field_def();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 159;
				this.enum_def();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 160;
				this.named_union_def();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 161;
				this.unnamed_union_def();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 162;
				this.interface_def();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 163;
				this.struct_def();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 164;
				this.function_def();
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
	public field_def(): Field_defContext {
		let _localctx: Field_defContext = new Field_defContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CapnProtoParser.RULE_field_def);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 167;
			this.match(CapnProtoParser.NAME);
			this.state = 168;
			this.match(CapnProtoParser.LOCATOR);
			this.state = 169;
			this.match(CapnProtoParser.T__14);
			this.state = 170;
			this.type();
			this.state = 173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CapnProtoParser.T__2) {
				{
				this.state = 171;
				this.match(CapnProtoParser.T__2);
				this.state = 172;
				this.const_value();
				}
			}

			this.state = 175;
			this.match(CapnProtoParser.T__0);
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
		this.enterRule(_localctx, 20, CapnProtoParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 177;
			this.match(CapnProtoParser.NAME);
			this.state = 179;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 178;
				this.inner_type();
				}
				break;
			}
			this.state = 183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CapnProtoParser.T__4) {
				{
				this.state = 181;
				this.match(CapnProtoParser.T__4);
				this.state = 182;
				this.type();
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
	public inner_type(): Inner_typeContext {
		let _localctx: Inner_typeContext = new Inner_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CapnProtoParser.RULE_inner_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 185;
			this.match(CapnProtoParser.T__7);
			this.state = 186;
			this.type();
			this.state = 188;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CapnProtoParser.T__7) {
				{
				this.state = 187;
				this.inner_type();
				}
			}

			this.state = 197;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CapnProtoParser.T__15) {
				{
				{
				this.state = 190;
				this.match(CapnProtoParser.T__15);
				this.state = 191;
				this.type();
				this.state = 193;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CapnProtoParser.T__7) {
					{
					this.state = 192;
					this.inner_type();
					}
				}

				}
				}
				this.state = 199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 200;
			this.match(CapnProtoParser.T__8);
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
	public enum_def(): Enum_defContext {
		let _localctx: Enum_defContext = new Enum_defContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CapnProtoParser.RULE_enum_def);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 202;
			this.match(CapnProtoParser.T__16);
			this.state = 203;
			this.match(CapnProtoParser.NAME);
			this.state = 205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CapnProtoParser.T__5) {
				{
				this.state = 204;
				this.annotation_reference();
				}
			}

			this.state = 207;
			this.match(CapnProtoParser.T__10);
			this.state = 211;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CapnProtoParser.NAME) {
				{
				{
				this.state = 208;
				this.enum_content();
				}
				}
				this.state = 213;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 214;
			this.match(CapnProtoParser.T__11);
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
	public annotation_reference(): Annotation_referenceContext {
		let _localctx: Annotation_referenceContext = new Annotation_referenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CapnProtoParser.RULE_annotation_reference);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 216;
			this.match(CapnProtoParser.T__5);
			this.state = 217;
			this.type();
			this.state = 219;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CapnProtoParser.T__17) {
				{
				this.state = 218;
				this.match(CapnProtoParser.T__17);
				}
			}

			this.state = 221;
			this.match(CapnProtoParser.T__7);
			this.state = 222;
			this.match(CapnProtoParser.TEXT);
			this.state = 223;
			this.match(CapnProtoParser.T__8);
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
	public enum_content(): Enum_contentContext {
		let _localctx: Enum_contentContext = new Enum_contentContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CapnProtoParser.RULE_enum_content);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 225;
			this.match(CapnProtoParser.NAME);
			this.state = 226;
			this.match(CapnProtoParser.LOCATOR);
			this.state = 228;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CapnProtoParser.T__5) {
				{
				this.state = 227;
				this.annotation_reference();
				}
			}

			this.state = 230;
			this.match(CapnProtoParser.T__0);
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
	public named_union_def(): Named_union_defContext {
		let _localctx: Named_union_defContext = new Named_union_defContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, CapnProtoParser.RULE_named_union_def);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 232;
			this.match(CapnProtoParser.NAME);
			this.state = 234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CapnProtoParser.LOCATOR) {
				{
				this.state = 233;
				this.match(CapnProtoParser.LOCATOR);
				}
			}

			this.state = 236;
			this.match(CapnProtoParser.T__18);
			this.state = 237;
			this.match(CapnProtoParser.T__10);
			this.state = 241;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CapnProtoParser.T__19 || _la === CapnProtoParser.NAME) {
				{
				{
				this.state = 238;
				this.union_content();
				}
				}
				this.state = 243;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 244;
			this.match(CapnProtoParser.T__11);
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
	public unnamed_union_def(): Unnamed_union_defContext {
		let _localctx: Unnamed_union_defContext = new Unnamed_union_defContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CapnProtoParser.RULE_unnamed_union_def);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 246;
			this.match(CapnProtoParser.T__19);
			this.state = 247;
			this.match(CapnProtoParser.T__10);
			this.state = 251;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CapnProtoParser.T__19 || _la === CapnProtoParser.NAME) {
				{
				{
				this.state = 248;
				this.union_content();
				}
				}
				this.state = 253;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 254;
			this.match(CapnProtoParser.T__11);
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
	public union_content(): Union_contentContext {
		let _localctx: Union_contentContext = new Union_contentContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CapnProtoParser.RULE_union_content);
		try {
			this.state = 260;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 256;
				this.field_def();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 257;
				this.group_def();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 258;
				this.unnamed_union_def();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 259;
				this.named_union_def();
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
	public group_def(): Group_defContext {
		let _localctx: Group_defContext = new Group_defContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, CapnProtoParser.RULE_group_def);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 262;
			this.match(CapnProtoParser.NAME);
			this.state = 263;
			this.match(CapnProtoParser.T__20);
			this.state = 264;
			this.match(CapnProtoParser.T__10);
			this.state = 268;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CapnProtoParser.T__19 || _la === CapnProtoParser.NAME) {
				{
				{
				this.state = 265;
				this.group_content();
				}
				}
				this.state = 270;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 271;
			this.match(CapnProtoParser.T__11);
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
	public group_content(): Group_contentContext {
		let _localctx: Group_contentContext = new Group_contentContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CapnProtoParser.RULE_group_content);
		try {
			this.state = 276;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 273;
				this.field_def();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 274;
				this.unnamed_union_def();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 275;
				this.named_union_def();
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
	public function_def(): Function_defContext {
		let _localctx: Function_defContext = new Function_defContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, CapnProtoParser.RULE_function_def);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 278;
			this.match(CapnProtoParser.NAME);
			this.state = 280;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CapnProtoParser.LOCATOR) {
				{
				this.state = 279;
				this.match(CapnProtoParser.LOCATOR);
				}
			}

			this.state = 283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CapnProtoParser.T__22) {
				{
				this.state = 282;
				this.generic_type_parameters();
				}
			}

			this.state = 287;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CapnProtoParser.T__7:
				{
				this.state = 285;
				this.function_parameters();
				}
				break;
			case CapnProtoParser.NAME:
				{
				this.state = 286;
				this.type();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 294;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CapnProtoParser.T__21) {
				{
				this.state = 289;
				this.match(CapnProtoParser.T__21);
				this.state = 292;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CapnProtoParser.T__7:
					{
					this.state = 290;
					this.function_parameters();
					}
					break;
				case CapnProtoParser.NAME:
					{
					this.state = 291;
					this.type();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
			}

			this.state = 296;
			this.match(CapnProtoParser.T__0);
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
	public generic_type_parameters(): Generic_type_parametersContext {
		let _localctx: Generic_type_parametersContext = new Generic_type_parametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, CapnProtoParser.RULE_generic_type_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 298;
			this.match(CapnProtoParser.T__22);
			this.state = 299;
			this.match(CapnProtoParser.NAME);
			this.state = 304;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CapnProtoParser.T__15) {
				{
				{
				this.state = 300;
				this.match(CapnProtoParser.T__15);
				this.state = 301;
				this.match(CapnProtoParser.NAME);
				}
				}
				this.state = 306;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 307;
			this.match(CapnProtoParser.T__23);
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
	public function_parameters(): Function_parametersContext {
		let _localctx: Function_parametersContext = new Function_parametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, CapnProtoParser.RULE_function_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 309;
			this.match(CapnProtoParser.T__7);
			this.state = 330;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CapnProtoParser.NAME) {
				{
				this.state = 310;
				this.match(CapnProtoParser.NAME);
				this.state = 311;
				this.match(CapnProtoParser.T__14);
				this.state = 312;
				this.type();
				this.state = 315;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CapnProtoParser.T__2) {
					{
					this.state = 313;
					this.match(CapnProtoParser.T__2);
					this.state = 314;
					this.const_value();
					}
				}

				this.state = 327;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CapnProtoParser.T__15) {
					{
					{
					this.state = 317;
					this.match(CapnProtoParser.T__15);
					this.state = 318;
					this.match(CapnProtoParser.NAME);
					this.state = 319;
					this.match(CapnProtoParser.T__14);
					this.state = 320;
					this.type();
					this.state = 323;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CapnProtoParser.T__2) {
						{
						this.state = 321;
						this.match(CapnProtoParser.T__2);
						this.state = 322;
						this.const_value();
						}
					}

					}
					}
					this.state = 329;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 332;
			this.match(CapnProtoParser.T__8);
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
	public annotation_def(): Annotation_defContext {
		let _localctx: Annotation_defContext = new Annotation_defContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, CapnProtoParser.RULE_annotation_def);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 334;
			this.match(CapnProtoParser.T__24);
			this.state = 335;
			this.type();
			this.state = 337;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CapnProtoParser.T__7) {
				{
				this.state = 336;
				this.annotation_parameters();
				}
			}

			this.state = 339;
			this.match(CapnProtoParser.T__14);
			this.state = 340;
			this.type();
			this.state = 341;
			this.match(CapnProtoParser.T__0);
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
	public annotation_parameters(): Annotation_parametersContext {
		let _localctx: Annotation_parametersContext = new Annotation_parametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, CapnProtoParser.RULE_annotation_parameters);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 343;
			this.match(CapnProtoParser.T__7);
			this.state = 344;
			this.match(CapnProtoParser.T__9);
			this.state = 345;
			this.match(CapnProtoParser.T__8);
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
	public const_def(): Const_defContext {
		let _localctx: Const_defContext = new Const_defContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, CapnProtoParser.RULE_const_def);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 347;
			this.match(CapnProtoParser.T__25);
			this.state = 348;
			this.match(CapnProtoParser.NAME);
			this.state = 349;
			this.match(CapnProtoParser.T__14);
			this.state = 350;
			this.type();
			this.state = 351;
			this.match(CapnProtoParser.T__2);
			this.state = 352;
			this.const_value();
			this.state = 353;
			this.match(CapnProtoParser.T__0);
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
	public const_value(): Const_valueContext {
		let _localctx: Const_valueContext = new Const_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, CapnProtoParser.RULE_const_value);
		let _la: number;
		try {
			this.state = 375;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CapnProtoParser.T__4:
			case CapnProtoParser.T__26:
			case CapnProtoParser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 356;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CapnProtoParser.T__26) {
					{
					this.state = 355;
					this.match(CapnProtoParser.T__26);
					}
				}

				this.state = 359;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CapnProtoParser.T__4) {
					{
					this.state = 358;
					this.match(CapnProtoParser.T__4);
					}
				}

				this.state = 361;
				this.match(CapnProtoParser.NAME);
				this.state = 364;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CapnProtoParser.T__4) {
					{
					this.state = 362;
					this.match(CapnProtoParser.T__4);
					this.state = 363;
					this.match(CapnProtoParser.NAME);
					}
				}

				}
				break;
			case CapnProtoParser.INTEGER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 366;
				this.match(CapnProtoParser.INTEGER);
				}
				break;
			case CapnProtoParser.FLOAT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 367;
				this.match(CapnProtoParser.FLOAT);
				}
				break;
			case CapnProtoParser.TEXT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 368;
				this.match(CapnProtoParser.TEXT);
				}
				break;
			case CapnProtoParser.BOOLEAN:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 369;
				this.match(CapnProtoParser.BOOLEAN);
				}
				break;
			case CapnProtoParser.HEXADECIMAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 370;
				this.match(CapnProtoParser.HEXADECIMAL);
				}
				break;
			case CapnProtoParser.VOID:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 371;
				this.match(CapnProtoParser.VOID);
				}
				break;
			case CapnProtoParser.T__22:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 372;
				this.literal_list();
				}
				break;
			case CapnProtoParser.T__7:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 373;
				this.literal_union();
				}
				break;
			case CapnProtoParser.T__27:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 374;
				this.literal_bytes();
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
	public literal_union(): Literal_unionContext {
		let _localctx: Literal_unionContext = new Literal_unionContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, CapnProtoParser.RULE_literal_union);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 377;
			this.match(CapnProtoParser.T__7);
			this.state = 378;
			this.match(CapnProtoParser.NAME);
			this.state = 379;
			this.match(CapnProtoParser.T__2);
			this.state = 380;
			this.union_mapping();
			this.state = 387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CapnProtoParser.T__15) {
				{
				{
				this.state = 381;
				this.match(CapnProtoParser.T__15);
				this.state = 382;
				this.match(CapnProtoParser.NAME);
				this.state = 383;
				this.match(CapnProtoParser.T__2);
				this.state = 384;
				this.union_mapping();
				}
				}
				this.state = 389;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 390;
			this.match(CapnProtoParser.T__8);
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
	public literal_list(): Literal_listContext {
		let _localctx: Literal_listContext = new Literal_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, CapnProtoParser.RULE_literal_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 392;
			this.match(CapnProtoParser.T__22);
			this.state = 393;
			this.const_value();
			this.state = 398;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CapnProtoParser.T__15) {
				{
				{
				this.state = 394;
				this.match(CapnProtoParser.T__15);
				this.state = 395;
				this.const_value();
				}
				}
				this.state = 400;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 401;
			this.match(CapnProtoParser.T__23);
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
	public literal_bytes(): Literal_bytesContext {
		let _localctx: Literal_bytesContext = new Literal_bytesContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, CapnProtoParser.RULE_literal_bytes);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 403;
			this.match(CapnProtoParser.T__27);
			this.state = 404;
			this.match(CapnProtoParser.TEXT);
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
	public union_mapping(): Union_mappingContext {
		let _localctx: Union_mappingContext = new Union_mappingContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, CapnProtoParser.RULE_union_mapping);
		try {
			this.state = 413;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 406;
				this.match(CapnProtoParser.T__7);
				this.state = 407;
				this.match(CapnProtoParser.NAME);
				this.state = 408;
				this.match(CapnProtoParser.T__2);
				this.state = 409;
				this.const_value();
				this.state = 410;
				this.match(CapnProtoParser.T__8);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 412;
				this.const_value();
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
	public inner_using(): Inner_usingContext {
		let _localctx: Inner_usingContext = new Inner_usingContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, CapnProtoParser.RULE_inner_using);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 415;
			this.match(CapnProtoParser.T__1);
			this.state = 416;
			this.match(CapnProtoParser.NAME);
			this.state = 421;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CapnProtoParser.T__4) {
				{
				{
				this.state = 417;
				this.match(CapnProtoParser.T__4);
				this.state = 418;
				this.match(CapnProtoParser.NAME);
				}
				}
				this.state = 423;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 426;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CapnProtoParser.T__2) {
				{
				this.state = 424;
				this.match(CapnProtoParser.T__2);
				this.state = 425;
				this.type();
				}
			}

			this.state = 428;
			this.match(CapnProtoParser.T__0);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03)\u01B1\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x03\x02\x03\x02" +
		"\x07\x02E\n\x02\f\x02\x0E\x02H\v\x02\x03\x02\x05\x02K\n\x02\x03\x02\x07" +
		"\x02N\n\x02\f\x02\x0E\x02Q\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03" +
		"\x03\x04\x03\x04\x03\x04\x05\x04[\n\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x05\x04a\n\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x05\x06s\n\x06\x03\x07\x03\x07\x03\x07\x05\x07x\n\x07\x03\x07\x03\x07" +
		"\x07\x07|\n\x07\f\x07\x0E\x07\x7F\v\x07\x03\x07\x03\x07\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\x8D\n\b\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\x96\n\t\x03\t\x03\t\x07\t\x9A\n\t" +
		"\f\t\x0E\t\x9D\v\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x05\n\xA8\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\xB0\n\v\x03" +
		"\v\x03\v\x03\f\x03\f\x05\f\xB6\n\f\x03\f\x03\f\x05\f\xBA\n\f\x03\r\x03" +
		"\r\x03\r\x05\r\xBF\n\r\x03\r\x03\r\x03\r\x05\r\xC4\n\r\x07\r\xC6\n\r\f" +
		"\r\x0E\r\xC9\v\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xD0\n\x0E" +
		"\x03\x0E\x03\x0E\x07\x0E\xD4\n\x0E\f\x0E\x0E\x0E\xD7\v\x0E\x03\x0E\x03" +
		"\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xDE\n\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x10\x03\x10\x03\x10\x05\x10\xE7\n\x10\x03\x10\x03\x10\x03" +
		"\x11\x03\x11\x05\x11\xED\n\x11\x03\x11\x03\x11\x03\x11\x07\x11\xF2\n\x11" +
		"\f\x11\x0E\x11\xF5\v\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x07\x12" +
		"\xFC\n\x12\f\x12\x0E\x12\xFF\v\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x05\x13\u0107\n\x13\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14" +
		"\u010D\n\x14\f\x14\x0E\x14\u0110\v\x14\x03\x14\x03\x14\x03\x15\x03\x15" +
		"\x03\x15\x05\x15\u0117\n\x15\x03\x16\x03\x16\x05\x16\u011B\n\x16\x03\x16" +
		"\x05\x16\u011E\n\x16\x03\x16\x03\x16\x05\x16\u0122\n\x16\x03\x16\x03\x16" +
		"\x03\x16\x05\x16\u0127\n\x16\x05\x16\u0129\n\x16\x03\x16\x03\x16\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x07\x17\u0131\n\x17\f\x17\x0E\x17\u0134\v\x17" +
		"\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18" +
		"\u013E\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u0146" +
		"\n\x18\x07\x18\u0148\n\x18\f\x18\x0E\x18\u014B\v\x18\x05\x18\u014D\n\x18" +
		"\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x05\x19\u0154\n\x19\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x05\x1C\u0167\n\x1C" +
		"\x03\x1C\x05\x1C\u016A\n\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u016F\n\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x05\x1C\u017A\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x07\x1D\u0184\n\x1D\f\x1D\x0E\x1D\u0187\v\x1D\x03\x1D\x03" +
		"\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u018F\n\x1E\f\x1E\x0E\x1E" +
		"\u0192\v\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03" +
		" \x03 \x03 \x03 \x05 \u01A0\n \x03!\x03!\x03!\x03!\x07!\u01A6\n!\f!\x0E" +
		"!\u01A9\v!\x03!\x03!\x05!\u01AD\n!\x03!\x03!\x03!\x02\x02\x02\"\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02" +
		".\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02\x02\x02\x02\u01DC\x02" +
		"B\x03\x02\x02\x02\x04T\x03\x02\x02\x02\x06W\x03\x02\x02\x02\bd\x03\x02" +
		"\x02\x02\nr\x03\x02\x02\x02\ft\x03\x02\x02\x02\x0E\x8C\x03\x02\x02\x02" +
		"\x10\x8E\x03\x02\x02\x02\x12\xA7\x03\x02\x02\x02\x14\xA9\x03\x02\x02\x02" +
		"\x16\xB3\x03\x02\x02\x02\x18\xBB\x03\x02\x02\x02\x1A\xCC\x03\x02\x02\x02" +
		"\x1C\xDA\x03\x02\x02\x02\x1E\xE3\x03\x02\x02\x02 \xEA\x03\x02\x02\x02" +
		"\"\xF8\x03\x02\x02\x02$\u0106\x03\x02\x02\x02&\u0108\x03\x02\x02\x02(" +
		"\u0116\x03\x02\x02\x02*\u0118\x03\x02\x02\x02,\u012C\x03\x02\x02\x02." +
		"\u0137\x03\x02\x02\x020\u0150\x03\x02\x02\x022\u0159\x03\x02\x02\x024" +
		"\u015D\x03\x02\x02\x026\u0179\x03\x02\x02\x028\u017B\x03\x02\x02\x02:" +
		"\u018A\x03\x02\x02\x02<\u0195\x03\x02\x02\x02>\u019F\x03\x02\x02\x02@" +
		"\u01A1\x03\x02\x02\x02BF\x05\x04\x03\x02CE\x05\x06\x04\x02DC\x03\x02\x02" +
		"\x02EH\x03\x02\x02\x02FD\x03\x02\x02\x02FG\x03\x02\x02\x02GJ\x03\x02\x02" +
		"\x02HF\x03\x02\x02\x02IK\x05\b\x05\x02JI\x03\x02\x02\x02JK\x03\x02\x02" +
		"\x02KO\x03\x02\x02\x02LN\x05\n\x06\x02ML\x03\x02\x02\x02NQ\x03\x02\x02" +
		"\x02OM\x03\x02\x02\x02OP\x03\x02\x02\x02PR\x03\x02\x02\x02QO\x03\x02\x02" +
		"\x02RS\x07\x02\x02\x03S\x03\x03\x02\x02\x02TU\x07$\x02\x02UV\x07\x03\x02" +
		"\x02V\x05\x03\x02\x02\x02WZ\x07\x04\x02\x02XY\x07\'\x02\x02Y[\x07\x05" +
		"\x02\x02ZX\x03\x02\x02\x02Z[\x03\x02\x02\x02[\\\x03\x02\x02\x02\\]\x07" +
		"\x06\x02\x02]`\x07 \x02\x02^_\x07\x07\x02\x02_a\x07\'\x02\x02`^\x03\x02" +
		"\x02\x02`a\x03\x02\x02\x02ab\x03\x02\x02\x02bc\x07\x03\x02\x02c\x07\x03" +
		"\x02\x02\x02de\x07\b\x02\x02ef\x07\'\x02\x02fg\x07\t\x02\x02gh\x07\n\x02" +
		"\x02hi\x07 \x02\x02ij\x07\v\x02\x02jk\x07\x03\x02\x02k\t\x03\x02\x02\x02" +
		"ls\x05\f\x07\x02ms\x05\x10\t\x02ns\x05*\x16\x02os\x050\x19\x02ps\x054" +
		"\x1B\x02qs\x05\x1A\x0E\x02rl\x03\x02\x02\x02rm\x03\x02\x02\x02rn\x03\x02" +
		"\x02\x02ro\x03\x02\x02\x02rp\x03\x02\x02\x02rq\x03\x02\x02\x02s\v\x03" +
		"\x02\x02\x02tu\x07\f\x02\x02uw\x05\x16\f\x02vx\x05\x1C\x0F\x02wv\x03\x02" +
		"\x02\x02wx\x03\x02\x02\x02xy\x03\x02\x02\x02y}\x07\r\x02\x02z|\x05\x0E" +
		"\b\x02{z\x03\x02\x02\x02|\x7F\x03\x02\x02\x02}{\x03\x02\x02\x02}~\x03" +
		"\x02\x02\x02~\x80\x03\x02\x02\x02\x7F}\x03\x02\x02\x02\x80\x81\x07\x0E" +
		"\x02\x02\x81\r\x03\x02\x02\x02\x82\x8D\x05\x14\v\x02\x83\x8D\x05\x1A\x0E" +
		"\x02\x84\x8D\x05 \x11\x02\x85\x8D\x05\"\x12\x02\x86\x8D\x05\x10\t\x02" +
		"\x87\x8D\x050\x19\x02\x88\x8D\x05\f\x07\x02\x89\x8D\x05&\x14\x02\x8A\x8D" +
		"\x054\x1B\x02\x8B\x8D\x05@!\x02\x8C\x82\x03\x02\x02\x02\x8C\x83\x03\x02" +
		"\x02\x02\x8C\x84\x03\x02\x02\x02\x8C\x85\x03\x02\x02\x02\x8C\x86\x03\x02" +
		"\x02\x02\x8C\x87\x03\x02\x02\x02\x8C\x88\x03\x02\x02\x02\x8C\x89\x03\x02" +
		"\x02\x02\x8C\x8A\x03\x02\x02\x02\x8C\x8B\x03\x02\x02\x02\x8D\x0F\x03\x02" +
		"\x02\x02\x8E\x8F\x07\x0F\x02\x02\x8F\x95\x05\x16\f\x02\x90\x91\x07\x10" +
		"\x02\x02\x91\x92\x07\n\x02\x02\x92\x93\x05\x16\f\x02\x93\x94\x07\v\x02" +
		"\x02\x94\x96\x03\x02\x02\x02\x95\x90\x03\x02\x02\x02\x95\x96\x03\x02\x02" +
		"\x02\x96\x97\x03\x02\x02\x02\x97\x9B\x07\r\x02\x02\x98\x9A\x05\x12\n\x02" +
		"\x99\x98\x03\x02\x02\x02\x9A\x9D\x03\x02\x02\x02\x9B\x99\x03\x02\x02\x02" +
		"\x9B\x9C\x03\x02\x02\x02\x9C\x9E\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02" +
		"\x9E\x9F\x07\x0E\x02\x02\x9F\x11\x03\x02\x02\x02\xA0\xA8\x05\x14\v\x02" +
		"\xA1\xA8\x05\x1A\x0E\x02\xA2\xA8\x05 \x11\x02\xA3\xA8\x05\"\x12\x02\xA4" +
		"\xA8\x05\x10\t\x02\xA5\xA8\x05\f\x07\x02\xA6\xA8\x05*\x16\x02\xA7\xA0" +
		"\x03\x02\x02\x02\xA7\xA1\x03\x02\x02\x02\xA7\xA2\x03\x02\x02\x02\xA7\xA3" +
		"\x03\x02\x02\x02\xA7\xA4\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA6" +
		"\x03\x02\x02\x02\xA8\x13\x03\x02\x02\x02\xA9\xAA\x07\'\x02\x02\xAA\xAB" +
		"\x07\x1F\x02\x02\xAB\xAC\x07\x11\x02\x02\xAC\xAF\x05\x16\f\x02\xAD\xAE" +
		"\x07\x05\x02\x02\xAE\xB0\x056\x1C\x02\xAF\xAD\x03\x02\x02\x02\xAF\xB0" +
		"\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\xB2\x07\x03\x02\x02\xB2\x15" +
		"\x03\x02\x02\x02\xB3\xB5\x07\'\x02\x02\xB4\xB6\x05\x18\r\x02\xB5\xB4\x03" +
		"\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB9\x03\x02\x02\x02\xB7\xB8\x07" +
		"\x07\x02\x02\xB8\xBA\x05\x16\f\x02\xB9\xB7\x03\x02\x02\x02\xB9\xBA\x03" +
		"\x02\x02\x02\xBA\x17\x03\x02\x02\x02\xBB\xBC\x07\n\x02\x02\xBC\xBE\x05" +
		"\x16\f\x02\xBD\xBF\x05\x18\r\x02\xBE\xBD\x03\x02\x02\x02\xBE\xBF\x03\x02" +
		"\x02\x02\xBF\xC7\x03\x02\x02\x02\xC0\xC1\x07\x12\x02\x02\xC1\xC3\x05\x16" +
		"\f\x02\xC2\xC4\x05\x18\r\x02\xC3\xC2\x03\x02\x02\x02\xC3\xC4\x03\x02\x02" +
		"\x02\xC4\xC6\x03\x02\x02\x02\xC5\xC0\x03\x02\x02\x02\xC6\xC9\x03\x02\x02" +
		"\x02\xC7\xC5\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\xCA\x03\x02\x02" +
		"\x02\xC9\xC7\x03\x02\x02\x02\xCA\xCB\x07\v\x02\x02\xCB\x19\x03\x02\x02" +
		"\x02\xCC\xCD\x07\x13\x02\x02\xCD\xCF\x07\'\x02\x02\xCE\xD0\x05\x1C\x0F" +
		"\x02\xCF\xCE\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD1\x03\x02\x02" +
		"\x02\xD1\xD5\x07\r\x02\x02\xD2\xD4\x05\x1E\x10\x02\xD3\xD2\x03\x02\x02" +
		"\x02\xD4\xD7\x03\x02\x02\x02\xD5\xD3\x03\x02\x02\x02\xD5\xD6\x03\x02\x02" +
		"\x02\xD6\xD8\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD8\xD9\x07\x0E\x02" +
		"\x02\xD9\x1B\x03\x02\x02\x02\xDA\xDB\x07\b\x02\x02\xDB\xDD\x05\x16\f\x02" +
		"\xDC\xDE\x07\x14\x02\x02\xDD\xDC\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02" +
		"\xDE\xDF\x03\x02\x02\x02\xDF\xE0\x07\n\x02\x02\xE0\xE1\x07 \x02\x02\xE1" +
		"\xE2\x07\v\x02\x02\xE2\x1D\x03\x02\x02\x02\xE3\xE4\x07\'\x02\x02\xE4\xE6" +
		"\x07\x1F\x02\x02\xE5\xE7\x05\x1C\x0F\x02\xE6\xE5\x03\x02\x02\x02\xE6\xE7" +
		"\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\xE9\x07\x03\x02\x02\xE9\x1F" +
		"\x03\x02\x02\x02\xEA\xEC\x07\'\x02\x02\xEB\xED\x07\x1F\x02\x02\xEC\xEB" +
		"\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\xEF" +
		"\x07\x15\x02\x02\xEF\xF3\x07\r\x02\x02\xF0\xF2\x05$\x13\x02\xF1\xF0\x03" +
		"\x02\x02\x02\xF2\xF5\x03\x02\x02\x02\xF3\xF1\x03\x02\x02\x02\xF3\xF4\x03" +
		"\x02\x02\x02\xF4\xF6\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF6\xF7\x07" +
		"\x0E\x02\x02\xF7!\x03\x02\x02\x02\xF8\xF9\x07\x16\x02\x02\xF9\xFD\x07" +
		"\r\x02\x02\xFA\xFC\x05$\x13\x02\xFB\xFA\x03\x02\x02\x02\xFC\xFF\x03\x02" +
		"\x02\x02\xFD\xFB\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\u0100\x03" +
		"\x02\x02\x02\xFF\xFD\x03\x02\x02\x02\u0100\u0101\x07\x0E\x02\x02\u0101" +
		"#\x03\x02\x02\x02\u0102\u0107\x05\x14\v\x02\u0103\u0107\x05&\x14\x02\u0104" +
		"\u0107\x05\"\x12\x02\u0105\u0107\x05 \x11\x02\u0106\u0102\x03\x02\x02" +
		"\x02\u0106\u0103\x03\x02\x02\x02\u0106\u0104\x03\x02\x02\x02\u0106\u0105" +
		"\x03\x02\x02\x02\u0107%\x03\x02\x02\x02\u0108\u0109\x07\'\x02\x02\u0109" +
		"\u010A\x07\x17\x02\x02\u010A\u010E\x07\r\x02\x02\u010B\u010D\x05(\x15" +
		"\x02\u010C\u010B\x03\x02\x02\x02\u010D\u0110\x03\x02\x02\x02\u010E\u010C" +
		"\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\u0111\x03\x02\x02\x02" +
		"\u0110\u010E\x03\x02\x02\x02\u0111\u0112\x07\x0E\x02\x02\u0112\'\x03\x02" +
		"\x02\x02\u0113\u0117\x05\x14\v\x02\u0114\u0117\x05\"\x12\x02\u0115\u0117" +
		"\x05 \x11\x02\u0116\u0113\x03\x02\x02\x02\u0116\u0114\x03\x02\x02\x02" +
		"\u0116\u0115\x03\x02\x02\x02\u0117)\x03\x02\x02\x02\u0118\u011A\x07\'" +
		"\x02\x02\u0119\u011B\x07\x1F\x02\x02\u011A\u0119\x03\x02\x02\x02\u011A" +
		"\u011B\x03\x02\x02\x02\u011B\u011D\x03\x02\x02\x02\u011C\u011E\x05,\x17" +
		"\x02\u011D\u011C\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E\u0121" +
		"\x03\x02\x02\x02\u011F\u0122\x05.\x18\x02\u0120\u0122\x05\x16\f\x02\u0121" +
		"\u011F\x03\x02\x02\x02\u0121\u0120\x03\x02\x02\x02\u0122\u0128\x03\x02" +
		"\x02\x02\u0123\u0126\x07\x18\x02\x02\u0124\u0127\x05.\x18\x02\u0125\u0127" +
		"\x05\x16\f\x02\u0126\u0124\x03\x02\x02\x02\u0126\u0125\x03\x02\x02\x02" +
		"\u0127\u0129\x03\x02\x02\x02\u0128\u0123\x03\x02\x02\x02\u0128\u0129\x03" +
		"\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A\u012B\x07\x03\x02\x02\u012B" +
		"+\x03\x02\x02\x02\u012C\u012D\x07\x19\x02\x02\u012D\u0132\x07\'\x02\x02" +
		"\u012E\u012F\x07\x12\x02\x02\u012F\u0131\x07\'\x02\x02\u0130\u012E\x03" +
		"\x02\x02\x02\u0131\u0134\x03\x02\x02\x02\u0132\u0130\x03\x02\x02\x02\u0132" +
		"\u0133\x03\x02\x02\x02\u0133\u0135\x03\x02\x02\x02\u0134\u0132\x03\x02" +
		"\x02\x02\u0135\u0136\x07\x1A\x02\x02\u0136-\x03\x02\x02\x02\u0137\u014C" +
		"\x07\n\x02\x02\u0138\u0139\x07\'\x02\x02\u0139\u013A\x07\x11\x02\x02\u013A" +
		"\u013D\x05\x16\f\x02\u013B\u013C\x07\x05\x02\x02\u013C\u013E\x056\x1C" +
		"\x02\u013D\u013B\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u0149" +
		"\x03\x02\x02\x02\u013F\u0140\x07\x12\x02\x02\u0140\u0141\x07\'\x02\x02" +
		"\u0141\u0142\x07\x11\x02\x02\u0142\u0145\x05\x16\f\x02\u0143\u0144\x07" +
		"\x05\x02\x02\u0144\u0146\x056\x1C\x02\u0145\u0143\x03\x02\x02\x02\u0145" +
		"\u0146\x03\x02\x02\x02\u0146\u0148\x03\x02\x02\x02\u0147\u013F\x03\x02" +
		"\x02\x02\u0148\u014B\x03\x02\x02\x02\u0149\u0147\x03\x02\x02\x02\u0149" +
		"\u014A\x03\x02\x02\x02\u014A\u014D\x03\x02\x02\x02\u014B\u0149\x03\x02" +
		"\x02\x02\u014C\u0138\x03\x02\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D" +
		"\u014E\x03\x02\x02\x02\u014E\u014F\x07\v\x02\x02\u014F/\x03\x02\x02\x02" +
		"\u0150\u0151\x07\x1B\x02\x02\u0151\u0153\x05\x16\f\x02\u0152\u0154\x05" +
		"2\x1A\x02\u0153\u0152\x03\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154" +
		"\u0155\x03\x02\x02\x02\u0155\u0156\x07\x11\x02\x02\u0156\u0157\x05\x16" +
		"\f\x02\u0157\u0158\x07\x03\x02\x02\u01581\x03\x02\x02\x02\u0159\u015A" +
		"\x07\n\x02\x02\u015A\u015B\x07\f\x02\x02\u015B\u015C\x07\v\x02\x02\u015C" +
		"3\x03\x02\x02\x02\u015D\u015E\x07\x1C\x02\x02\u015E\u015F\x07\'\x02\x02" +
		"\u015F\u0160\x07\x11\x02\x02\u0160\u0161\x05\x16\f\x02\u0161\u0162\x07" +
		"\x05\x02\x02\u0162\u0163\x056\x1C\x02\u0163\u0164\x07\x03\x02\x02\u0164" +
		"5\x03\x02\x02\x02\u0165\u0167\x07\x1D\x02\x02\u0166\u0165\x03\x02\x02" +
		"\x02\u0166\u0167\x03\x02\x02\x02\u0167\u0169\x03\x02\x02\x02\u0168\u016A" +
		"\x07\x07\x02\x02\u0169\u0168\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02" +
		"\u016A\u016B\x03\x02\x02\x02\u016B\u016E\x07\'\x02\x02\u016C\u016D\x07" +
		"\x07\x02\x02\u016D\u016F\x07\'\x02\x02\u016E\u016C\x03\x02\x02\x02\u016E" +
		"\u016F\x03\x02\x02\x02\u016F\u017A\x03\x02\x02\x02\u0170\u017A\x07!\x02" +
		"\x02\u0171\u017A\x07\"\x02\x02\u0172\u017A\x07 \x02\x02\u0173\u017A\x07" +
		"%\x02\x02\u0174\u017A\x07#\x02\x02\u0175\u017A\x07&\x02\x02\u0176\u017A" +
		"\x05:\x1E\x02\u0177\u017A\x058\x1D\x02\u0178\u017A\x05<\x1F\x02\u0179" +
		"\u0166\x03\x02\x02\x02\u0179\u0170\x03\x02\x02\x02\u0179\u0171\x03\x02" +
		"\x02\x02\u0179\u0172\x03\x02\x02\x02\u0179\u0173\x03\x02\x02\x02\u0179" +
		"\u0174\x03\x02\x02\x02\u0179\u0175\x03\x02\x02\x02\u0179\u0176\x03\x02" +
		"\x02\x02\u0179\u0177\x03\x02\x02\x02\u0179\u0178\x03\x02\x02\x02\u017A" +
		"7\x03\x02\x02\x02\u017B\u017C\x07\n\x02\x02\u017C\u017D\x07\'\x02\x02" +
		"\u017D\u017E\x07\x05\x02\x02\u017E\u0185\x05> \x02\u017F\u0180\x07\x12" +
		"\x02\x02\u0180\u0181\x07\'\x02\x02\u0181\u0182\x07\x05\x02\x02\u0182\u0184" +
		"\x05> \x02\u0183\u017F\x03\x02\x02\x02\u0184\u0187\x03\x02\x02\x02\u0185" +
		"\u0183\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\u0188\x03\x02" +
		"\x02\x02\u0187\u0185\x03\x02\x02\x02\u0188\u0189\x07\v\x02\x02\u01899" +
		"\x03\x02\x02\x02\u018A\u018B\x07\x19\x02\x02\u018B\u0190\x056\x1C\x02" +
		"\u018C\u018D\x07\x12\x02\x02\u018D\u018F\x056\x1C\x02\u018E\u018C\x03" +
		"\x02\x02\x02\u018F\u0192\x03\x02\x02\x02\u0190\u018E\x03\x02\x02\x02\u0190" +
		"\u0191\x03\x02\x02\x02\u0191\u0193\x03\x02\x02\x02\u0192\u0190\x03\x02" +
		"\x02\x02\u0193\u0194\x07\x1A\x02\x02\u0194;\x03\x02\x02\x02\u0195\u0196" +
		"\x07\x1E\x02\x02\u0196\u0197\x07 \x02\x02\u0197=\x03\x02\x02\x02\u0198" +
		"\u0199\x07\n\x02\x02\u0199\u019A\x07\'\x02\x02\u019A\u019B\x07\x05\x02" +
		"\x02\u019B\u019C\x056\x1C\x02\u019C\u019D\x07\v\x02\x02\u019D\u01A0\x03" +
		"\x02\x02\x02\u019E\u01A0\x056\x1C\x02\u019F\u0198\x03\x02\x02\x02\u019F" +
		"\u019E\x03\x02\x02\x02\u01A0?\x03\x02\x02\x02\u01A1\u01A2\x07\x04\x02" +
		"\x02\u01A2\u01A7\x07\'\x02\x02\u01A3\u01A4\x07\x07\x02\x02\u01A4\u01A6" +
		"\x07\'\x02\x02\u01A5\u01A3\x03\x02\x02\x02\u01A6\u01A9\x03\x02\x02\x02" +
		"\u01A7\u01A5\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\u01AC\x03" +
		"\x02\x02\x02\u01A9\u01A7\x03\x02\x02\x02\u01AA\u01AB\x07\x05\x02\x02\u01AB" +
		"\u01AD\x05\x16\f\x02\u01AC\u01AA\x03\x02\x02\x02\u01AC\u01AD\x03\x02\x02" +
		"\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE\u01AF\x07\x03\x02\x02\u01AFA\x03" +
		"\x02\x02\x022FJOZ`rw}\x8C\x95\x9B\xA7\xAF\xB5\xB9\xBE\xC3\xC7\xCF\xD5" +
		"\xDD\xE6\xEC\xF3\xFD\u0106\u010E\u0116\u011A\u011D\u0121\u0126\u0128\u0132" +
		"\u013D\u0145\u0149\u014C\u0153\u0166\u0169\u016E\u0179\u0185\u0190\u019F" +
		"\u01A7\u01AC";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CapnProtoParser.__ATN) {
			CapnProtoParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CapnProtoParser._serializedATN));
		}

		return CapnProtoParser.__ATN;
	}

}

export class DocumentContext extends ParserRuleContext {
	public file_identifier(): File_identifierContext {
		return this.getRuleContext(0, File_identifierContext);
	}
	public EOF(): TerminalNode { return this.getToken(CapnProtoParser.EOF, 0); }
	public using_import(): Using_importContext[];
	public using_import(i: number): Using_importContext;
	public using_import(i?: number): Using_importContext | Using_importContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Using_importContext);
		} else {
			return this.getRuleContext(i, Using_importContext);
		}
	}
	public namespace(): NamespaceContext | undefined {
		return this.tryGetRuleContext(0, NamespaceContext);
	}
	public document_content(): Document_contentContext[];
	public document_content(i: number): Document_contentContext;
	public document_content(i?: number): Document_contentContext | Document_contentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Document_contentContext);
		} else {
			return this.getRuleContext(i, Document_contentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CapnProtoParser.RULE_document; }
	// @Override
	public enterRule(listener: CapnProtoListener): void {
		if (listener.enterDocument) {
			listener.enterDocument(this);
		}
	}
	// @Override
	public exitRule(listener: CapnProtoListener): void {
		if (listener.exitDocument) {
			listener.exitDocument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CapnProtoVisitor<Result>): Result {
		if (visitor.visitDocument) {
			return visitor.visitDocument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class File_identifierContext extends ParserRuleContext {
	public FILE_ID(): TerminalNode { return this.getToken(CapnProtoParser.FILE_ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CapnProtoParser.RULE_file_identifier; }
	// @Override
	public enterRule(listener: CapnProtoListener): void {
		if (listener.enterFile_identifier) {
			listener.enterFile_identifier(this);
		}
	}
	// @Override
	public exitRule(listener: CapnProtoListener): void {
		if (listener.exitFile_identifier) {
			listener.exitFile_identifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CapnProtoVisitor<Result>): Result {
		if (visitor.visitFile_identifier) {
			return visitor.visitFile_identifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Using_importContext extends ParserRuleContext {
	public TEXT(): TerminalNode { return this.getToken(CapnProtoParser.TEXT, 0); }
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CapnProtoParser.NAME);
		} else {
			return this.getToken(CapnProtoParser.NAME, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CapnProtoParser.RULE_using_import; }
	// @Override
	public enterRule(listener: CapnProtoListener): void {
		if (listener.enterUsing_import) {
			listener.enterUsing_import(this);
		}
	}
	// @Override
	public exitRule(listener: CapnProtoListener): void {
		if (listener.exitUsing_import) {
			listener.exitUsing_import(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CapnProtoVisitor<Result>): Result {
		if (visitor.visitUsing_import) {
			return visitor.visitUsing_import(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamespaceContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(CapnProtoParser.NAME, 0); }
	public TEXT(): TerminalNode { return this.getToken(CapnProtoParser.TEXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CapnProtoParser.RULE_namespace; }
	// @Override
	public enterRule(listener: CapnProtoListener): void {
		if (listener.enterNamespace) {
			listener.enterNamespace(this);
		}
	}
	// @Override
	public exitRule(listener: CapnProtoListener): void {
		if (listener.exitNamespace) {
			listener.exitNamespace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CapnProtoVisitor<Result>): Result {
		if (visitor.visitNamespace) {
			return visitor.visitNamespace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Document_contentContext extends ParserRuleContext {
	public struct_def(): Struct_defContext | undefined {
		return this.tryGetRuleContext(0, Struct_defContext);
	}
	public interface_def(): Interface_defContext | undefined {
		return this.tryGetRuleContext(0, Interface_defContext);
	}
	public function_def(): Function_defContext | undefined {
		return this.tryGetRuleContext(0, Function_defContext);
	}
	public annotation_def(): Annotation_defContext | undefined {
		return this.tryGetRuleContext(0, Annotation_defContext);
	}
	public const_def(): Const_defContext | undefined {
		return this.tryGetRuleContext(0, Const_defContext);
	}
	public enum_def(): Enum_defContext | undefined {
		return this.tryGetRuleContext(0, Enum_defContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CapnProtoParser.RULE_document_content; }
	// @Override
	public enterRule(listener: CapnProtoListener): void {
		if (listener.enterDocument_content) {
			listener.enterDocument_content(this);
		}
	}
	// @Override
	public exitRule(listener: CapnProtoListener): void {
		if (listener.exitDocument_content) {
			listener.exitDocument_content(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CapnProtoVisitor<Result>): Result {
		if (visitor.visitDocument_content) {
			return visitor.visitDocument_content(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Struct_defContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public annotation_reference(): Annotation_referenceContext | undefined {
		return this.tryGetRuleContext(0, Annotation_referenceContext);
	}
	public struct_content(): Struct_contentContext[];
	public struct_content(i: number): Struct_contentContext;
	public struct_content(i?: number): Struct_contentContext | Struct_contentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Struct_contentContext);
		} else {
			return this.getRuleContext(i, Struct_contentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CapnProtoParser.RULE_struct_def; }
	// @Override
	public enterRule(listener: CapnProtoListener): void {
		if (listener.enterStruct_def) {
			listener.enterStruct_def(this);
		}
	}
	// @Override
	public exitRule(listener: CapnProtoListener): void {
		if (listener.exitStruct_def) {
			listener.exitStruct_def(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CapnProtoVisitor<Result>): Result {
		if (visitor.visitStruct_def) {
			return visitor.visitStruct_def(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Struct_contentContext extends ParserRuleContext {
	public field_def(): Field_defContext | undefined {
		return this.tryGetRuleContext(0, Field_defContext);
	}
	public enum_def(): Enum_defContext | undefined {
		return this.tryGetRuleContext(0, Enum_defContext);
	}
	public named_union_def(): Named_union_defContext | undefined {
		return this.tryGetRuleContext(0, Named_union_defContext);
	}
	public unnamed_union_def(): Unnamed_union_defContext | undefined {
		return this.tryGetRuleContext(0, Unnamed_union_defContext);
	}
	public interface_def(): Interface_defContext | undefined {
		return this.tryGetRuleContext(0, Interface_defContext);
	}
	public annotation_def(): Annotation_defContext | undefined {
		return this.tryGetRuleContext(0, Annotation_defContext);
	}
	public struct_def(): Struct_defContext | undefined {
		return this.tryGetRuleContext(0, Struct_defContext);
	}
	public group_def(): Group_defContext | undefined {
		return this.tryGetRuleContext(0, Group_defContext);
	}
	public const_def(): Const_defContext | undefined {
		return this.tryGetRuleContext(0, Const_defContext);
	}
	public inner_using(): Inner_usingContext | undefined {
		return this.tryGetRuleContext(0, Inner_usingContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CapnProtoParser.RULE_struct_content; }
	// @Override
	public enterRule(listener: CapnProtoListener): void {
		if (listener.enterStruct_content) {
			listener.enterStruct_content(this);
		}
	}
	// @Override
	public exitRule(listener: CapnProtoListener): void {
		if (listener.exitStruct_content) {
			listener.exitStruct_content(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CapnProtoVisitor<Result>): Result {
		if (visitor.visitStruct_content) {
			return visitor.visitStruct_content(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Interface_defContext extends ParserRuleContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public interface_content(): Interface_contentContext[];
	public interface_content(i: number): Interface_contentContext;
	public interface_content(i?: number): Interface_contentContext | Interface_contentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Interface_contentContext);
		} else {
			return this.getRuleContext(i, Interface_contentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CapnProtoParser.RULE_interface_def; }
	// @Override
	public enterRule(listener: CapnProtoListener): void {
		if (listener.enterInterface_def) {
			listener.enterInterface_def(this);
		}
	}
	// @Override
	public exitRule(listener: CapnProtoListener): void {
		if (listener.exitInterface_def) {
			listener.exitInterface_def(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CapnProtoVisitor<Result>): Result {
		if (visitor.visitInterface_def) {
			return visitor.visitInterface_def(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Interface_contentContext extends ParserRuleContext {
	public field_def(): Field_defContext | undefined {
		return this.tryGetRuleContext(0, Field_defContext);
	}
	public enum_def(): Enum_defContext | undefined {
		return this.tryGetRuleContext(0, Enum_defContext);
	}
	public named_union_def(): Named_union_defContext | undefined {
		return this.tryGetRuleContext(0, Named_union_defContext);
	}
	public unnamed_union_def(): Unnamed_union_defContext | undefined {
		return this.tryGetRuleContext(0, Unnamed_union_defContext);
	}
	public interface_def(): Interface_defContext | undefined {
		return this.tryGetRuleContext(0, Interface_defContext);
	}
	public struct_def(): Struct_defContext | undefined {
		return this.tryGetRuleContext(0, Struct_defContext);
	}
	public function_def(): Function_defContext | undefined {
		return this.tryGetRuleContext(0, Function_defContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CapnProtoParser.RULE_interface_content; }
	// @Override
	public enterRule(listener: CapnProtoListener): void {
		if (listener.enterInterface_content) {
			listener.enterInterface_content(this);
		}
	}
	// @Override
	public exitRule(listener: CapnProtoListener): void {
		if (listener.exitInterface_content) {
			listener.exitInterface_content(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CapnProtoVisitor<Result>): Result {
		if (visitor.visitInterface_content) {
			return visitor.visitInterface_content(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Field_defContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(CapnProtoParser.NAME, 0); }
	public LOCATOR(): TerminalNode { return this.getToken(CapnProtoParser.LOCATOR, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public const_value(): Const_valueContext | undefined {
		return this.tryGetRuleContext(0, Const_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CapnProtoParser.RULE_field_def; }
	// @Override
	public enterRule(listener: CapnProtoListener): void {
		if (listener.enterField_def) {
			listener.enterField_def(this);
		}
	}
	// @Override
	public exitRule(listener: CapnProtoListener): void {
		if (listener.exitField_def) {
			listener.exitField_def(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CapnProtoVisitor<Result>): Result {
		if (visitor.visitField_def) {
			return visitor.visitField_def(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(CapnProtoParser.NAME, 0); }
	public inner_type(): Inner_typeContext | undefined {
		return this.tryGetRuleContext(0, Inner_typeContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CapnProtoParser.RULE_type; }
	// @Override
	public enterRule(listener: CapnProtoListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: CapnProtoListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CapnProtoVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Inner_typeContext extends ParserRuleContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public inner_type(): Inner_typeContext[];
	public inner_type(i: number): Inner_typeContext;
	public inner_type(i?: number): Inner_typeContext | Inner_typeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Inner_typeContext);
		} else {
			return this.getRuleContext(i, Inner_typeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CapnProtoParser.RULE_inner_type; }
	// @Override
	public enterRule(listener: CapnProtoListener): void {
		if (listener.enterInner_type) {
			listener.enterInner_type(this);
		}
	}
	// @Override
	public exitRule(listener: CapnProtoListener): void {
		if (listener.exitInner_type) {
			listener.exitInner_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CapnProtoVisitor<Result>): Result {
		if (visitor.visitInner_type) {
			return visitor.visitInner_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Enum_defContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(CapnProtoParser.NAME, 0); }
	public annotation_reference(): Annotation_referenceContext | undefined {
		return this.tryGetRuleContext(0, Annotation_referenceContext);
	}
	public enum_content(): Enum_contentContext[];
	public enum_content(i: number): Enum_contentContext;
	public enum_content(i?: number): Enum_contentContext | Enum_contentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Enum_contentContext);
		} else {
			return this.getRuleContext(i, Enum_contentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CapnProtoParser.RULE_enum_def; }
	// @Override
	public enterRule(listener: CapnProtoListener): void {
		if (listener.enterEnum_def) {
			listener.enterEnum_def(this);
		}
	}
	// @Override
	public exitRule(listener: CapnProtoListener): void {
		if (listener.exitEnum_def) {
			listener.exitEnum_def(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CapnProtoVisitor<Result>): Result {
		if (visitor.visitEnum_def) {
			return visitor.visitEnum_def(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Annotation_referenceContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public TEXT(): TerminalNode { return this.getToken(CapnProtoParser.TEXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CapnProtoParser.RULE_annotation_reference; }
	// @Override
	public enterRule(listener: CapnProtoListener): void {
		if (listener.enterAnnotation_reference) {
			listener.enterAnnotation_reference(this);
		}
	}
	// @Override
	public exitRule(listener: CapnProtoListener): void {
		if (listener.exitAnnotation_reference) {
			listener.exitAnnotation_reference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CapnProtoVisitor<Result>): Result {
		if (visitor.visitAnnotation_reference) {
			return visitor.visitAnnotation_reference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Enum_contentContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(CapnProtoParser.NAME, 0); }
	public LOCATOR(): TerminalNode { return this.getToken(CapnProtoParser.LOCATOR, 0); }
	public annotation_reference(): Annotation_referenceContext | undefined {
		return this.tryGetRuleContext(0, Annotation_referenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CapnProtoParser.RULE_enum_content; }
	// @Override
	public enterRule(listener: CapnProtoListener): void {
		if (listener.enterEnum_content) {
			listener.enterEnum_content(this);
		}
	}
	// @Override
	public exitRule(listener: CapnProtoListener): void {
		if (listener.exitEnum_content) {
			listener.exitEnum_content(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CapnProtoVisitor<Result>): Result {
		if (visitor.visitEnum_content) {
			return visitor.visitEnum_content(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Named_union_defContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(CapnProtoParser.NAME, 0); }
	public LOCATOR(): TerminalNode | undefined { return this.tryGetToken(CapnProtoParser.LOCATOR, 0); }
	public union_content(): Union_contentContext[];
	public union_content(i: number): Union_contentContext;
	public union_content(i?: number): Union_contentContext | Union_contentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Union_contentContext);
		} else {
			return this.getRuleContext(i, Union_contentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CapnProtoParser.RULE_named_union_def; }
	// @Override
	public enterRule(listener: CapnProtoListener): void {
		if (listener.enterNamed_union_def) {
			listener.enterNamed_union_def(this);
		}
	}
	// @Override
	public exitRule(listener: CapnProtoListener): void {
		if (listener.exitNamed_union_def) {
			listener.exitNamed_union_def(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CapnProtoVisitor<Result>): Result {
		if (visitor.visitNamed_union_def) {
			return visitor.visitNamed_union_def(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Unnamed_union_defContext extends ParserRuleContext {
	public union_content(): Union_contentContext[];
	public union_content(i: number): Union_contentContext;
	public union_content(i?: number): Union_contentContext | Union_contentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Union_contentContext);
		} else {
			return this.getRuleContext(i, Union_contentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CapnProtoParser.RULE_unnamed_union_def; }
	// @Override
	public enterRule(listener: CapnProtoListener): void {
		if (listener.enterUnnamed_union_def) {
			listener.enterUnnamed_union_def(this);
		}
	}
	// @Override
	public exitRule(listener: CapnProtoListener): void {
		if (listener.exitUnnamed_union_def) {
			listener.exitUnnamed_union_def(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CapnProtoVisitor<Result>): Result {
		if (visitor.visitUnnamed_union_def) {
			return visitor.visitUnnamed_union_def(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Union_contentContext extends ParserRuleContext {
	public field_def(): Field_defContext | undefined {
		return this.tryGetRuleContext(0, Field_defContext);
	}
	public group_def(): Group_defContext | undefined {
		return this.tryGetRuleContext(0, Group_defContext);
	}
	public unnamed_union_def(): Unnamed_union_defContext | undefined {
		return this.tryGetRuleContext(0, Unnamed_union_defContext);
	}
	public named_union_def(): Named_union_defContext | undefined {
		return this.tryGetRuleContext(0, Named_union_defContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CapnProtoParser.RULE_union_content; }
	// @Override
	public enterRule(listener: CapnProtoListener): void {
		if (listener.enterUnion_content) {
			listener.enterUnion_content(this);
		}
	}
	// @Override
	public exitRule(listener: CapnProtoListener): void {
		if (listener.exitUnion_content) {
			listener.exitUnion_content(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CapnProtoVisitor<Result>): Result {
		if (visitor.visitUnion_content) {
			return visitor.visitUnion_content(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Group_defContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(CapnProtoParser.NAME, 0); }
	public group_content(): Group_contentContext[];
	public group_content(i: number): Group_contentContext;
	public group_content(i?: number): Group_contentContext | Group_contentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Group_contentContext);
		} else {
			return this.getRuleContext(i, Group_contentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CapnProtoParser.RULE_group_def; }
	// @Override
	public enterRule(listener: CapnProtoListener): void {
		if (listener.enterGroup_def) {
			listener.enterGroup_def(this);
		}
	}
	// @Override
	public exitRule(listener: CapnProtoListener): void {
		if (listener.exitGroup_def) {
			listener.exitGroup_def(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CapnProtoVisitor<Result>): Result {
		if (visitor.visitGroup_def) {
			return visitor.visitGroup_def(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Group_contentContext extends ParserRuleContext {
	public field_def(): Field_defContext | undefined {
		return this.tryGetRuleContext(0, Field_defContext);
	}
	public unnamed_union_def(): Unnamed_union_defContext | undefined {
		return this.tryGetRuleContext(0, Unnamed_union_defContext);
	}
	public named_union_def(): Named_union_defContext | undefined {
		return this.tryGetRuleContext(0, Named_union_defContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CapnProtoParser.RULE_group_content; }
	// @Override
	public enterRule(listener: CapnProtoListener): void {
		if (listener.enterGroup_content) {
			listener.enterGroup_content(this);
		}
	}
	// @Override
	public exitRule(listener: CapnProtoListener): void {
		if (listener.exitGroup_content) {
			listener.exitGroup_content(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CapnProtoVisitor<Result>): Result {
		if (visitor.visitGroup_content) {
			return visitor.visitGroup_content(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_defContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(CapnProtoParser.NAME, 0); }
	public function_parameters(): Function_parametersContext[];
	public function_parameters(i: number): Function_parametersContext;
	public function_parameters(i?: number): Function_parametersContext | Function_parametersContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Function_parametersContext);
		} else {
			return this.getRuleContext(i, Function_parametersContext);
		}
	}
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public LOCATOR(): TerminalNode | undefined { return this.tryGetToken(CapnProtoParser.LOCATOR, 0); }
	public generic_type_parameters(): Generic_type_parametersContext | undefined {
		return this.tryGetRuleContext(0, Generic_type_parametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CapnProtoParser.RULE_function_def; }
	// @Override
	public enterRule(listener: CapnProtoListener): void {
		if (listener.enterFunction_def) {
			listener.enterFunction_def(this);
		}
	}
	// @Override
	public exitRule(listener: CapnProtoListener): void {
		if (listener.exitFunction_def) {
			listener.exitFunction_def(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CapnProtoVisitor<Result>): Result {
		if (visitor.visitFunction_def) {
			return visitor.visitFunction_def(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Generic_type_parametersContext extends ParserRuleContext {
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CapnProtoParser.NAME);
		} else {
			return this.getToken(CapnProtoParser.NAME, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CapnProtoParser.RULE_generic_type_parameters; }
	// @Override
	public enterRule(listener: CapnProtoListener): void {
		if (listener.enterGeneric_type_parameters) {
			listener.enterGeneric_type_parameters(this);
		}
	}
	// @Override
	public exitRule(listener: CapnProtoListener): void {
		if (listener.exitGeneric_type_parameters) {
			listener.exitGeneric_type_parameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CapnProtoVisitor<Result>): Result {
		if (visitor.visitGeneric_type_parameters) {
			return visitor.visitGeneric_type_parameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_parametersContext extends ParserRuleContext {
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CapnProtoParser.NAME);
		} else {
			return this.getToken(CapnProtoParser.NAME, i);
		}
	}
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public const_value(): Const_valueContext[];
	public const_value(i: number): Const_valueContext;
	public const_value(i?: number): Const_valueContext | Const_valueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Const_valueContext);
		} else {
			return this.getRuleContext(i, Const_valueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CapnProtoParser.RULE_function_parameters; }
	// @Override
	public enterRule(listener: CapnProtoListener): void {
		if (listener.enterFunction_parameters) {
			listener.enterFunction_parameters(this);
		}
	}
	// @Override
	public exitRule(listener: CapnProtoListener): void {
		if (listener.exitFunction_parameters) {
			listener.exitFunction_parameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CapnProtoVisitor<Result>): Result {
		if (visitor.visitFunction_parameters) {
			return visitor.visitFunction_parameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Annotation_defContext extends ParserRuleContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public annotation_parameters(): Annotation_parametersContext | undefined {
		return this.tryGetRuleContext(0, Annotation_parametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CapnProtoParser.RULE_annotation_def; }
	// @Override
	public enterRule(listener: CapnProtoListener): void {
		if (listener.enterAnnotation_def) {
			listener.enterAnnotation_def(this);
		}
	}
	// @Override
	public exitRule(listener: CapnProtoListener): void {
		if (listener.exitAnnotation_def) {
			listener.exitAnnotation_def(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CapnProtoVisitor<Result>): Result {
		if (visitor.visitAnnotation_def) {
			return visitor.visitAnnotation_def(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Annotation_parametersContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CapnProtoParser.RULE_annotation_parameters; }
	// @Override
	public enterRule(listener: CapnProtoListener): void {
		if (listener.enterAnnotation_parameters) {
			listener.enterAnnotation_parameters(this);
		}
	}
	// @Override
	public exitRule(listener: CapnProtoListener): void {
		if (listener.exitAnnotation_parameters) {
			listener.exitAnnotation_parameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CapnProtoVisitor<Result>): Result {
		if (visitor.visitAnnotation_parameters) {
			return visitor.visitAnnotation_parameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Const_defContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(CapnProtoParser.NAME, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public const_value(): Const_valueContext {
		return this.getRuleContext(0, Const_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CapnProtoParser.RULE_const_def; }
	// @Override
	public enterRule(listener: CapnProtoListener): void {
		if (listener.enterConst_def) {
			listener.enterConst_def(this);
		}
	}
	// @Override
	public exitRule(listener: CapnProtoListener): void {
		if (listener.exitConst_def) {
			listener.exitConst_def(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CapnProtoVisitor<Result>): Result {
		if (visitor.visitConst_def) {
			return visitor.visitConst_def(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Const_valueContext extends ParserRuleContext {
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CapnProtoParser.NAME);
		} else {
			return this.getToken(CapnProtoParser.NAME, i);
		}
	}
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(CapnProtoParser.INTEGER, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(CapnProtoParser.FLOAT, 0); }
	public TEXT(): TerminalNode | undefined { return this.tryGetToken(CapnProtoParser.TEXT, 0); }
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(CapnProtoParser.BOOLEAN, 0); }
	public HEXADECIMAL(): TerminalNode | undefined { return this.tryGetToken(CapnProtoParser.HEXADECIMAL, 0); }
	public VOID(): TerminalNode | undefined { return this.tryGetToken(CapnProtoParser.VOID, 0); }
	public literal_list(): Literal_listContext | undefined {
		return this.tryGetRuleContext(0, Literal_listContext);
	}
	public literal_union(): Literal_unionContext | undefined {
		return this.tryGetRuleContext(0, Literal_unionContext);
	}
	public literal_bytes(): Literal_bytesContext | undefined {
		return this.tryGetRuleContext(0, Literal_bytesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CapnProtoParser.RULE_const_value; }
	// @Override
	public enterRule(listener: CapnProtoListener): void {
		if (listener.enterConst_value) {
			listener.enterConst_value(this);
		}
	}
	// @Override
	public exitRule(listener: CapnProtoListener): void {
		if (listener.exitConst_value) {
			listener.exitConst_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CapnProtoVisitor<Result>): Result {
		if (visitor.visitConst_value) {
			return visitor.visitConst_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Literal_unionContext extends ParserRuleContext {
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CapnProtoParser.NAME);
		} else {
			return this.getToken(CapnProtoParser.NAME, i);
		}
	}
	public union_mapping(): Union_mappingContext[];
	public union_mapping(i: number): Union_mappingContext;
	public union_mapping(i?: number): Union_mappingContext | Union_mappingContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Union_mappingContext);
		} else {
			return this.getRuleContext(i, Union_mappingContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CapnProtoParser.RULE_literal_union; }
	// @Override
	public enterRule(listener: CapnProtoListener): void {
		if (listener.enterLiteral_union) {
			listener.enterLiteral_union(this);
		}
	}
	// @Override
	public exitRule(listener: CapnProtoListener): void {
		if (listener.exitLiteral_union) {
			listener.exitLiteral_union(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CapnProtoVisitor<Result>): Result {
		if (visitor.visitLiteral_union) {
			return visitor.visitLiteral_union(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Literal_listContext extends ParserRuleContext {
	public const_value(): Const_valueContext[];
	public const_value(i: number): Const_valueContext;
	public const_value(i?: number): Const_valueContext | Const_valueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Const_valueContext);
		} else {
			return this.getRuleContext(i, Const_valueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CapnProtoParser.RULE_literal_list; }
	// @Override
	public enterRule(listener: CapnProtoListener): void {
		if (listener.enterLiteral_list) {
			listener.enterLiteral_list(this);
		}
	}
	// @Override
	public exitRule(listener: CapnProtoListener): void {
		if (listener.exitLiteral_list) {
			listener.exitLiteral_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CapnProtoVisitor<Result>): Result {
		if (visitor.visitLiteral_list) {
			return visitor.visitLiteral_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Literal_bytesContext extends ParserRuleContext {
	public TEXT(): TerminalNode { return this.getToken(CapnProtoParser.TEXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CapnProtoParser.RULE_literal_bytes; }
	// @Override
	public enterRule(listener: CapnProtoListener): void {
		if (listener.enterLiteral_bytes) {
			listener.enterLiteral_bytes(this);
		}
	}
	// @Override
	public exitRule(listener: CapnProtoListener): void {
		if (listener.exitLiteral_bytes) {
			listener.exitLiteral_bytes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CapnProtoVisitor<Result>): Result {
		if (visitor.visitLiteral_bytes) {
			return visitor.visitLiteral_bytes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Union_mappingContext extends ParserRuleContext {
	public NAME(): TerminalNode | undefined { return this.tryGetToken(CapnProtoParser.NAME, 0); }
	public const_value(): Const_valueContext {
		return this.getRuleContext(0, Const_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CapnProtoParser.RULE_union_mapping; }
	// @Override
	public enterRule(listener: CapnProtoListener): void {
		if (listener.enterUnion_mapping) {
			listener.enterUnion_mapping(this);
		}
	}
	// @Override
	public exitRule(listener: CapnProtoListener): void {
		if (listener.exitUnion_mapping) {
			listener.exitUnion_mapping(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CapnProtoVisitor<Result>): Result {
		if (visitor.visitUnion_mapping) {
			return visitor.visitUnion_mapping(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Inner_usingContext extends ParserRuleContext {
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CapnProtoParser.NAME);
		} else {
			return this.getToken(CapnProtoParser.NAME, i);
		}
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CapnProtoParser.RULE_inner_using; }
	// @Override
	public enterRule(listener: CapnProtoListener): void {
		if (listener.enterInner_using) {
			listener.enterInner_using(this);
		}
	}
	// @Override
	public exitRule(listener: CapnProtoListener): void {
		if (listener.exitInner_using) {
			listener.exitInner_using(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CapnProtoVisitor<Result>): Result {
		if (visitor.visitInner_using) {
			return visitor.visitInner_using(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


