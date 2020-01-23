// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/oncrpc/xdr.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { xdrListener } from "./xdrListener";
import { xdrVisitor } from "./xdrVisitor";


export class xdrParser extends Parser {
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
	public static readonly COMMENT = 32;
	public static readonly OCTAL = 33;
	public static readonly DECIMAL = 34;
	public static readonly HEXADECIMAL = 35;
	public static readonly IDENTIFIER = 36;
	public static readonly WS = 37;
	public static readonly RULE_declaration = 0;
	public static readonly RULE_value = 1;
	public static readonly RULE_constant = 2;
	public static readonly RULE_typeSpecifier = 3;
	public static readonly RULE_enumTypeSpec = 4;
	public static readonly RULE_enumBody = 5;
	public static readonly RULE_structTypeSpec = 6;
	public static readonly RULE_structBody = 7;
	public static readonly RULE_unionTypeSpec = 8;
	public static readonly RULE_unionBody = 9;
	public static readonly RULE_caseSpec = 10;
	public static readonly RULE_constantDef = 11;
	public static readonly RULE_typeDef = 12;
	public static readonly RULE_definition = 13;
	public static readonly RULE_xdrSpecification = 14;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"declaration", "value", "constant", "typeSpecifier", "enumTypeSpec", "enumBody", 
		"structTypeSpec", "structBody", "unionTypeSpec", "unionBody", "caseSpec", 
		"constantDef", "typeDef", "definition", "xdrSpecification",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'['", "']'", "'<'", "'>'", "'opaque'", "'string'", "'*'", 
		"'void'", "'unsigned'", "'int'", "'hyper'", "'float'", "'double'", "'quadruple'", 
		"'bool'", "'enum'", "'{'", "'='", "','", "'}'", "'struct'", "';'", "'union'", 
		"'switch'", "'('", "')'", "'default'", "':'", "'case'", "'const'", "'typedef'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "COMMENT", "OCTAL", "DECIMAL", 
		"HEXADECIMAL", "IDENTIFIER", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(xdrParser._LITERAL_NAMES, xdrParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return xdrParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "xdr.g4"; }

	// @Override
	public get ruleNames(): string[] { return xdrParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return xdrParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(xdrParser._ATN, this);
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, xdrParser.RULE_declaration);
		let _la: number;
		try {
			this.state = 72;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 30;
				this.typeSpecifier();
				this.state = 31;
				this.match(xdrParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 33;
				this.typeSpecifier();
				this.state = 34;
				this.match(xdrParser.IDENTIFIER);
				this.state = 35;
				this.match(xdrParser.T__0);
				this.state = 36;
				this.value();
				this.state = 37;
				this.match(xdrParser.T__1);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 39;
				this.typeSpecifier();
				this.state = 40;
				this.match(xdrParser.IDENTIFIER);
				this.state = 41;
				this.match(xdrParser.T__2);
				this.state = 43;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (xdrParser.OCTAL - 33)) | (1 << (xdrParser.DECIMAL - 33)) | (1 << (xdrParser.HEXADECIMAL - 33)) | (1 << (xdrParser.IDENTIFIER - 33)))) !== 0)) {
					{
					this.state = 42;
					this.value();
					}
				}

				this.state = 45;
				this.match(xdrParser.T__3);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 47;
				this.match(xdrParser.T__4);
				this.state = 48;
				this.match(xdrParser.IDENTIFIER);
				this.state = 49;
				this.match(xdrParser.T__0);
				this.state = 50;
				this.value();
				this.state = 51;
				this.match(xdrParser.T__1);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 53;
				this.match(xdrParser.T__4);
				this.state = 54;
				this.match(xdrParser.IDENTIFIER);
				this.state = 55;
				this.match(xdrParser.T__2);
				this.state = 57;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (xdrParser.OCTAL - 33)) | (1 << (xdrParser.DECIMAL - 33)) | (1 << (xdrParser.HEXADECIMAL - 33)) | (1 << (xdrParser.IDENTIFIER - 33)))) !== 0)) {
					{
					this.state = 56;
					this.value();
					}
				}

				this.state = 59;
				this.match(xdrParser.T__3);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 60;
				this.match(xdrParser.T__5);
				this.state = 61;
				this.match(xdrParser.IDENTIFIER);
				this.state = 62;
				this.match(xdrParser.T__2);
				this.state = 64;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (xdrParser.OCTAL - 33)) | (1 << (xdrParser.DECIMAL - 33)) | (1 << (xdrParser.HEXADECIMAL - 33)) | (1 << (xdrParser.IDENTIFIER - 33)))) !== 0)) {
					{
					this.state = 63;
					this.value();
					}
				}

				this.state = 66;
				this.match(xdrParser.T__3);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 67;
				this.typeSpecifier();
				this.state = 68;
				this.match(xdrParser.T__6);
				this.state = 69;
				this.match(xdrParser.IDENTIFIER);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 71;
				this.match(xdrParser.T__7);
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
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, xdrParser.RULE_value);
		try {
			this.state = 76;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case xdrParser.OCTAL:
			case xdrParser.DECIMAL:
			case xdrParser.HEXADECIMAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 74;
				this.constant();
				}
				break;
			case xdrParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 75;
				this.match(xdrParser.IDENTIFIER);
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
	public constant(): ConstantContext {
		let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, xdrParser.RULE_constant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 78;
			_la = this._input.LA(1);
			if (!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (xdrParser.OCTAL - 33)) | (1 << (xdrParser.DECIMAL - 33)) | (1 << (xdrParser.HEXADECIMAL - 33)))) !== 0))) {
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
	public typeSpecifier(): TypeSpecifierContext {
		let _localctx: TypeSpecifierContext = new TypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, xdrParser.RULE_typeSpecifier);
		let _la: number;
		try {
			this.state = 96;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 81;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === xdrParser.T__8) {
					{
					this.state = 80;
					this.match(xdrParser.T__8);
					}
				}

				this.state = 83;
				this.match(xdrParser.T__9);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 85;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === xdrParser.T__8) {
					{
					this.state = 84;
					this.match(xdrParser.T__8);
					}
				}

				this.state = 87;
				this.match(xdrParser.T__10);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 88;
				this.match(xdrParser.T__11);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 89;
				this.match(xdrParser.T__12);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 90;
				this.match(xdrParser.T__13);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 91;
				this.match(xdrParser.T__14);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 92;
				this.enumTypeSpec();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 93;
				this.structTypeSpec();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 94;
				this.unionTypeSpec();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 95;
				this.match(xdrParser.IDENTIFIER);
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
	public enumTypeSpec(): EnumTypeSpecContext {
		let _localctx: EnumTypeSpecContext = new EnumTypeSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, xdrParser.RULE_enumTypeSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this.match(xdrParser.T__15);
			this.state = 99;
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
		this.enterRule(_localctx, 10, xdrParser.RULE_enumBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			this.match(xdrParser.T__16);
			{
			this.state = 102;
			this.match(xdrParser.IDENTIFIER);
			this.state = 103;
			this.match(xdrParser.T__17);
			this.state = 104;
			this.value();
			}
			this.state = 112;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === xdrParser.T__18) {
				{
				{
				this.state = 106;
				this.match(xdrParser.T__18);
				this.state = 107;
				this.match(xdrParser.IDENTIFIER);
				this.state = 108;
				this.match(xdrParser.T__17);
				this.state = 109;
				this.value();
				}
				}
				this.state = 114;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 115;
			this.match(xdrParser.T__19);
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
	public structTypeSpec(): StructTypeSpecContext {
		let _localctx: StructTypeSpecContext = new StructTypeSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, xdrParser.RULE_structTypeSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117;
			this.match(xdrParser.T__20);
			this.state = 118;
			this.structBody();
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
	public structBody(): StructBodyContext {
		let _localctx: StructBodyContext = new StructBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, xdrParser.RULE_structBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			this.match(xdrParser.T__16);
			{
			this.state = 121;
			this.declaration();
			this.state = 122;
			this.match(xdrParser.T__21);
			}
			this.state = 129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & ((1 << (xdrParser.T__4 - 5)) | (1 << (xdrParser.T__5 - 5)) | (1 << (xdrParser.T__7 - 5)) | (1 << (xdrParser.T__8 - 5)) | (1 << (xdrParser.T__9 - 5)) | (1 << (xdrParser.T__10 - 5)) | (1 << (xdrParser.T__11 - 5)) | (1 << (xdrParser.T__12 - 5)) | (1 << (xdrParser.T__13 - 5)) | (1 << (xdrParser.T__14 - 5)) | (1 << (xdrParser.T__15 - 5)) | (1 << (xdrParser.T__20 - 5)) | (1 << (xdrParser.T__22 - 5)) | (1 << (xdrParser.IDENTIFIER - 5)))) !== 0)) {
				{
				{
				this.state = 124;
				this.declaration();
				this.state = 125;
				this.match(xdrParser.T__21);
				}
				}
				this.state = 131;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 132;
			this.match(xdrParser.T__19);
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
	public unionTypeSpec(): UnionTypeSpecContext {
		let _localctx: UnionTypeSpecContext = new UnionTypeSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, xdrParser.RULE_unionTypeSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			this.match(xdrParser.T__22);
			this.state = 135;
			this.unionBody();
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
	public unionBody(): UnionBodyContext {
		let _localctx: UnionBodyContext = new UnionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, xdrParser.RULE_unionBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 137;
			this.match(xdrParser.T__23);
			this.state = 138;
			this.match(xdrParser.T__24);
			this.state = 139;
			this.declaration();
			this.state = 140;
			this.match(xdrParser.T__25);
			this.state = 141;
			this.match(xdrParser.T__16);
			this.state = 142;
			this.caseSpec();
			this.state = 146;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === xdrParser.T__28) {
				{
				{
				this.state = 143;
				this.caseSpec();
				}
				}
				this.state = 148;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 154;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === xdrParser.T__26) {
				{
				this.state = 149;
				this.match(xdrParser.T__26);
				this.state = 150;
				this.match(xdrParser.T__27);
				this.state = 151;
				this.declaration();
				this.state = 152;
				this.match(xdrParser.T__21);
				}
			}

			this.state = 156;
			this.match(xdrParser.T__19);
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
	public caseSpec(): CaseSpecContext {
		let _localctx: CaseSpecContext = new CaseSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, xdrParser.RULE_caseSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 158;
			this.match(xdrParser.T__28);
			this.state = 159;
			this.value();
			this.state = 160;
			this.match(xdrParser.T__27);
			}
			this.state = 168;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === xdrParser.T__28) {
				{
				{
				this.state = 162;
				this.match(xdrParser.T__28);
				this.state = 163;
				this.value();
				this.state = 164;
				this.match(xdrParser.T__27);
				}
				}
				this.state = 170;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 171;
			this.declaration();
			this.state = 172;
			this.match(xdrParser.T__21);
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
	public constantDef(): ConstantDefContext {
		let _localctx: ConstantDefContext = new ConstantDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, xdrParser.RULE_constantDef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
			this.match(xdrParser.T__29);
			this.state = 175;
			this.match(xdrParser.IDENTIFIER);
			this.state = 176;
			this.match(xdrParser.T__17);
			this.state = 177;
			this.constant();
			this.state = 178;
			this.match(xdrParser.T__21);
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
	public typeDef(): TypeDefContext {
		let _localctx: TypeDefContext = new TypeDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, xdrParser.RULE_typeDef);
		try {
			this.state = 199;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case xdrParser.T__30:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 180;
				this.match(xdrParser.T__30);
				this.state = 181;
				this.declaration();
				this.state = 182;
				this.match(xdrParser.T__21);
				}
				break;
			case xdrParser.T__15:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 184;
				this.match(xdrParser.T__15);
				this.state = 185;
				this.match(xdrParser.IDENTIFIER);
				this.state = 186;
				this.enumBody();
				this.state = 187;
				this.match(xdrParser.T__21);
				}
				break;
			case xdrParser.T__20:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 189;
				this.match(xdrParser.T__20);
				this.state = 190;
				this.match(xdrParser.IDENTIFIER);
				this.state = 191;
				this.structBody();
				this.state = 192;
				this.match(xdrParser.T__21);
				}
				break;
			case xdrParser.T__22:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 194;
				this.match(xdrParser.T__22);
				this.state = 195;
				this.match(xdrParser.IDENTIFIER);
				this.state = 196;
				this.unionBody();
				this.state = 197;
				this.match(xdrParser.T__21);
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
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, xdrParser.RULE_definition);
		try {
			this.state = 203;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case xdrParser.T__15:
			case xdrParser.T__20:
			case xdrParser.T__22:
			case xdrParser.T__30:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 201;
				this.typeDef();
				}
				break;
			case xdrParser.T__29:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 202;
				this.constantDef();
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
	public xdrSpecification(): XdrSpecificationContext {
		let _localctx: XdrSpecificationContext = new XdrSpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, xdrParser.RULE_xdrSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 205;
				this.definition();
				}
				}
				this.state = 208;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << xdrParser.T__15) | (1 << xdrParser.T__20) | (1 << xdrParser.T__22) | (1 << xdrParser.T__29) | (1 << xdrParser.T__30))) !== 0));
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\'\xD5\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x05\x02.\n\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02<\n\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x05\x02C\n\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x05\x02K\n\x02\x03\x03\x03\x03\x05\x03O\n\x03\x03\x04" +
		"\x03\x04\x03\x05\x05\x05T\n\x05\x03\x05\x03\x05\x05\x05X\n\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05" +
		"c\n\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07q\n\x07\f\x07\x0E\x07t\v\x07\x03" +
		"\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x07\t\x82\n\t\f\t\x0E\t\x85\v\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v" +
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\x93\n\v\f\v\x0E\v\x96\v\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x05\v\x9D\n\v\x03\v\x03\v\x03\f\x03\f\x03\f" +
		"\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\xA9\n\f\f\f\x0E\f\xAC\v\f\x03\f\x03" +
		"\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xCA\n\x0E" +
		"\x03\x0F\x03\x0F\x05\x0F\xCE\n\x0F\x03\x10\x06\x10\xD1\n\x10\r\x10\x0E" +
		"\x10\xD2\x03\x10\x02\x02\x02\x11\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
		"\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E" +
		"\x02\x02\x03\x03\x02#%\x02\xE5\x02J\x03\x02\x02\x02\x04N\x03\x02\x02\x02" +
		"\x06P\x03\x02\x02\x02\bb\x03\x02\x02\x02\nd\x03\x02\x02\x02\fg\x03\x02" +
		"\x02\x02\x0Ew\x03\x02\x02\x02\x10z\x03\x02\x02\x02\x12\x88\x03\x02\x02" +
		"\x02\x14\x8B\x03\x02\x02\x02\x16\xA0\x03\x02\x02\x02\x18\xB0\x03\x02\x02" +
		"\x02\x1A\xC9\x03\x02\x02\x02\x1C\xCD\x03\x02\x02\x02\x1E\xD0\x03\x02\x02" +
		"\x02 !\x05\b\x05\x02!\"\x07&\x02\x02\"K\x03\x02\x02\x02#$\x05\b\x05\x02" +
		"$%\x07&\x02\x02%&\x07\x03\x02\x02&\'\x05\x04\x03\x02\'(\x07\x04\x02\x02" +
		"(K\x03\x02\x02\x02)*\x05\b\x05\x02*+\x07&\x02\x02+-\x07\x05\x02\x02,." +
		"\x05\x04\x03\x02-,\x03\x02\x02\x02-.\x03\x02\x02\x02./\x03\x02\x02\x02" +
		"/0\x07\x06\x02\x020K\x03\x02\x02\x0212\x07\x07\x02\x0223\x07&\x02\x02" +
		"34\x07\x03\x02\x0245\x05\x04\x03\x0256\x07\x04\x02\x026K\x03\x02\x02\x02" +
		"78\x07\x07\x02\x0289\x07&\x02\x029;\x07\x05\x02\x02:<\x05\x04\x03\x02" +
		";:\x03\x02\x02\x02;<\x03\x02\x02\x02<=\x03\x02\x02\x02=K\x07\x06\x02\x02" +
		">?\x07\b\x02\x02?@\x07&\x02\x02@B\x07\x05\x02\x02AC\x05\x04\x03\x02BA" +
		"\x03\x02\x02\x02BC\x03\x02\x02\x02CD\x03\x02\x02\x02DK\x07\x06\x02\x02" +
		"EF\x05\b\x05\x02FG\x07\t\x02\x02GH\x07&\x02\x02HK\x03\x02\x02\x02IK\x07" +
		"\n\x02\x02J \x03\x02\x02\x02J#\x03\x02\x02\x02J)\x03\x02\x02\x02J1\x03" +
		"\x02\x02\x02J7\x03\x02\x02\x02J>\x03\x02\x02\x02JE\x03\x02\x02\x02JI\x03" +
		"\x02\x02\x02K\x03\x03\x02\x02\x02LO\x05\x06\x04\x02MO\x07&\x02\x02NL\x03" +
		"\x02\x02\x02NM\x03\x02\x02\x02O\x05\x03\x02\x02\x02PQ\t\x02\x02\x02Q\x07" +
		"\x03\x02\x02\x02RT\x07\v\x02\x02SR\x03\x02\x02\x02ST\x03\x02\x02\x02T" +
		"U\x03\x02\x02\x02Uc\x07\f\x02\x02VX\x07\v\x02\x02WV\x03\x02\x02\x02WX" +
		"\x03\x02\x02\x02XY\x03\x02\x02\x02Yc\x07\r\x02\x02Zc\x07\x0E\x02\x02[" +
		"c\x07\x0F\x02\x02\\c\x07\x10\x02\x02]c\x07\x11\x02\x02^c\x05\n\x06\x02" +
		"_c\x05\x0E\b\x02`c\x05\x12\n\x02ac\x07&\x02\x02bS\x03\x02\x02\x02bW\x03" +
		"\x02\x02\x02bZ\x03\x02\x02\x02b[\x03\x02\x02\x02b\\\x03\x02\x02\x02b]" +
		"\x03\x02\x02\x02b^\x03\x02\x02\x02b_\x03\x02\x02\x02b`\x03\x02\x02\x02" +
		"ba\x03\x02\x02\x02c\t\x03\x02\x02\x02de\x07\x12\x02\x02ef\x05\f\x07\x02" +
		"f\v\x03\x02\x02\x02gh\x07\x13\x02\x02hi\x07&\x02\x02ij\x07\x14\x02\x02" +
		"jk\x05\x04\x03\x02kr\x03\x02\x02\x02lm\x07\x15\x02\x02mn\x07&\x02\x02" +
		"no\x07\x14\x02\x02oq\x05\x04\x03\x02pl\x03\x02\x02\x02qt\x03\x02\x02\x02" +
		"rp\x03\x02\x02\x02rs\x03\x02\x02\x02su\x03\x02\x02\x02tr\x03\x02\x02\x02" +
		"uv\x07\x16\x02\x02v\r\x03\x02\x02\x02wx\x07\x17\x02\x02xy\x05\x10\t\x02" +
		"y\x0F\x03\x02\x02\x02z{\x07\x13\x02\x02{|\x05\x02\x02\x02|}\x07\x18\x02" +
		"\x02}\x83\x03\x02\x02\x02~\x7F\x05\x02\x02\x02\x7F\x80\x07\x18\x02\x02" +
		"\x80\x82\x03\x02\x02\x02\x81~\x03\x02\x02\x02\x82\x85\x03\x02\x02\x02" +
		"\x83\x81\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x86\x03\x02\x02\x02" +
		"\x85\x83\x03\x02\x02\x02\x86\x87\x07\x16\x02\x02\x87\x11\x03\x02\x02\x02" +
		"\x88\x89\x07\x19\x02\x02\x89\x8A\x05\x14\v\x02\x8A\x13\x03\x02\x02\x02" +
		"\x8B\x8C\x07\x1A\x02\x02\x8C\x8D\x07\x1B\x02\x02\x8D\x8E\x05\x02\x02\x02" +
		"\x8E\x8F\x07\x1C\x02\x02\x8F\x90\x07\x13\x02\x02\x90\x94\x05\x16\f\x02" +
		"\x91\x93\x05\x16\f\x02\x92\x91\x03\x02\x02\x02\x93\x96\x03\x02\x02\x02" +
		"\x94\x92\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x9C\x03\x02\x02\x02" +
		"\x96\x94\x03\x02\x02\x02\x97\x98\x07\x1D\x02\x02\x98\x99\x07\x1E\x02\x02" +
		"\x99\x9A\x05\x02\x02\x02\x9A\x9B\x07\x18\x02\x02\x9B\x9D\x03\x02\x02\x02" +
		"\x9C\x97\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02" +
		"\x9E\x9F\x07\x16\x02\x02\x9F\x15\x03\x02\x02\x02\xA0\xA1\x07\x1F\x02\x02" +
		"\xA1\xA2\x05\x04\x03\x02\xA2\xA3\x07\x1E\x02\x02\xA3\xAA\x03\x02\x02\x02" +
		"\xA4\xA5\x07\x1F\x02\x02\xA5\xA6\x05\x04\x03\x02\xA6\xA7\x07\x1E\x02\x02" +
		"\xA7\xA9\x03\x02\x02\x02\xA8\xA4\x03\x02\x02\x02\xA9\xAC\x03\x02\x02\x02" +
		"\xAA\xA8\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAD\x03\x02\x02\x02" +
		"\xAC\xAA\x03\x02\x02\x02\xAD\xAE\x05\x02\x02\x02\xAE\xAF\x07\x18\x02\x02" +
		"\xAF\x17\x03\x02\x02\x02\xB0\xB1\x07 \x02\x02\xB1\xB2\x07&\x02\x02\xB2" +
		"\xB3\x07\x14\x02\x02\xB3\xB4\x05\x06\x04\x02\xB4\xB5\x07\x18\x02\x02\xB5" +
		"\x19\x03\x02\x02\x02\xB6\xB7\x07!\x02\x02\xB7\xB8\x05\x02\x02\x02\xB8" +
		"\xB9\x07\x18\x02\x02\xB9\xCA\x03\x02\x02\x02\xBA\xBB\x07\x12\x02\x02\xBB" +
		"\xBC\x07&\x02\x02\xBC\xBD\x05\f\x07\x02\xBD\xBE\x07\x18\x02\x02\xBE\xCA" +
		"\x03\x02\x02\x02\xBF\xC0\x07\x17\x02\x02\xC0\xC1\x07&\x02\x02\xC1\xC2" +
		"\x05\x10\t\x02\xC2\xC3\x07\x18\x02\x02\xC3\xCA\x03\x02\x02\x02\xC4\xC5" +
		"\x07\x19\x02\x02\xC5\xC6\x07&\x02\x02\xC6\xC7\x05\x14\v\x02\xC7\xC8\x07" +
		"\x18\x02\x02\xC8\xCA\x03\x02\x02\x02\xC9\xB6\x03\x02\x02\x02\xC9\xBA\x03" +
		"\x02\x02\x02\xC9\xBF\x03\x02\x02\x02\xC9\xC4\x03\x02\x02\x02\xCA\x1B\x03" +
		"\x02\x02\x02\xCB\xCE\x05\x1A\x0E\x02\xCC\xCE\x05\x18\r\x02\xCD\xCB\x03" +
		"\x02\x02\x02\xCD\xCC\x03\x02\x02\x02\xCE\x1D\x03\x02\x02\x02\xCF\xD1\x05" +
		"\x1C\x0F\x02\xD0\xCF\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD0\x03" +
		"\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\x1F\x03\x02\x02\x02\x12-;BJN" +
		"SWbr\x83\x94\x9C\xAA\xC9\xCD\xD2";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!xdrParser.__ATN) {
			xdrParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(xdrParser._serializedATN));
		}

		return xdrParser.__ATN;
	}

}

export class DeclarationContext extends ParserRuleContext {
	public typeSpecifier(): TypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, TypeSpecifierContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(xdrParser.IDENTIFIER, 0); }
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return xdrParser.RULE_declaration; }
	// @Override
	public enterRule(listener: xdrListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: xdrListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: xdrVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(xdrParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return xdrParser.RULE_value; }
	// @Override
	public enterRule(listener: xdrListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: xdrListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: xdrVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	public DECIMAL(): TerminalNode | undefined { return this.tryGetToken(xdrParser.DECIMAL, 0); }
	public HEXADECIMAL(): TerminalNode | undefined { return this.tryGetToken(xdrParser.HEXADECIMAL, 0); }
	public OCTAL(): TerminalNode | undefined { return this.tryGetToken(xdrParser.OCTAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return xdrParser.RULE_constant; }
	// @Override
	public enterRule(listener: xdrListener): void {
		if (listener.enterConstant) {
			listener.enterConstant(this);
		}
	}
	// @Override
	public exitRule(listener: xdrListener): void {
		if (listener.exitConstant) {
			listener.exitConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: xdrVisitor<Result>): Result {
		if (visitor.visitConstant) {
			return visitor.visitConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeSpecifierContext extends ParserRuleContext {
	public enumTypeSpec(): EnumTypeSpecContext | undefined {
		return this.tryGetRuleContext(0, EnumTypeSpecContext);
	}
	public structTypeSpec(): StructTypeSpecContext | undefined {
		return this.tryGetRuleContext(0, StructTypeSpecContext);
	}
	public unionTypeSpec(): UnionTypeSpecContext | undefined {
		return this.tryGetRuleContext(0, UnionTypeSpecContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(xdrParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return xdrParser.RULE_typeSpecifier; }
	// @Override
	public enterRule(listener: xdrListener): void {
		if (listener.enterTypeSpecifier) {
			listener.enterTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: xdrListener): void {
		if (listener.exitTypeSpecifier) {
			listener.exitTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: xdrVisitor<Result>): Result {
		if (visitor.visitTypeSpecifier) {
			return visitor.visitTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumTypeSpecContext extends ParserRuleContext {
	public enumBody(): EnumBodyContext {
		return this.getRuleContext(0, EnumBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return xdrParser.RULE_enumTypeSpec; }
	// @Override
	public enterRule(listener: xdrListener): void {
		if (listener.enterEnumTypeSpec) {
			listener.enterEnumTypeSpec(this);
		}
	}
	// @Override
	public exitRule(listener: xdrListener): void {
		if (listener.exitEnumTypeSpec) {
			listener.exitEnumTypeSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: xdrVisitor<Result>): Result {
		if (visitor.visitEnumTypeSpec) {
			return visitor.visitEnumTypeSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumBodyContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(xdrParser.IDENTIFIER);
		} else {
			return this.getToken(xdrParser.IDENTIFIER, i);
		}
	}
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
	public get ruleIndex(): number { return xdrParser.RULE_enumBody; }
	// @Override
	public enterRule(listener: xdrListener): void {
		if (listener.enterEnumBody) {
			listener.enterEnumBody(this);
		}
	}
	// @Override
	public exitRule(listener: xdrListener): void {
		if (listener.exitEnumBody) {
			listener.exitEnumBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: xdrVisitor<Result>): Result {
		if (visitor.visitEnumBody) {
			return visitor.visitEnumBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructTypeSpecContext extends ParserRuleContext {
	public structBody(): StructBodyContext {
		return this.getRuleContext(0, StructBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return xdrParser.RULE_structTypeSpec; }
	// @Override
	public enterRule(listener: xdrListener): void {
		if (listener.enterStructTypeSpec) {
			listener.enterStructTypeSpec(this);
		}
	}
	// @Override
	public exitRule(listener: xdrListener): void {
		if (listener.exitStructTypeSpec) {
			listener.exitStructTypeSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: xdrVisitor<Result>): Result {
		if (visitor.visitStructTypeSpec) {
			return visitor.visitStructTypeSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructBodyContext extends ParserRuleContext {
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return xdrParser.RULE_structBody; }
	// @Override
	public enterRule(listener: xdrListener): void {
		if (listener.enterStructBody) {
			listener.enterStructBody(this);
		}
	}
	// @Override
	public exitRule(listener: xdrListener): void {
		if (listener.exitStructBody) {
			listener.exitStructBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: xdrVisitor<Result>): Result {
		if (visitor.visitStructBody) {
			return visitor.visitStructBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnionTypeSpecContext extends ParserRuleContext {
	public unionBody(): UnionBodyContext {
		return this.getRuleContext(0, UnionBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return xdrParser.RULE_unionTypeSpec; }
	// @Override
	public enterRule(listener: xdrListener): void {
		if (listener.enterUnionTypeSpec) {
			listener.enterUnionTypeSpec(this);
		}
	}
	// @Override
	public exitRule(listener: xdrListener): void {
		if (listener.exitUnionTypeSpec) {
			listener.exitUnionTypeSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: xdrVisitor<Result>): Result {
		if (visitor.visitUnionTypeSpec) {
			return visitor.visitUnionTypeSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnionBodyContext extends ParserRuleContext {
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	public caseSpec(): CaseSpecContext[];
	public caseSpec(i: number): CaseSpecContext;
	public caseSpec(i?: number): CaseSpecContext | CaseSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CaseSpecContext);
		} else {
			return this.getRuleContext(i, CaseSpecContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return xdrParser.RULE_unionBody; }
	// @Override
	public enterRule(listener: xdrListener): void {
		if (listener.enterUnionBody) {
			listener.enterUnionBody(this);
		}
	}
	// @Override
	public exitRule(listener: xdrListener): void {
		if (listener.exitUnionBody) {
			listener.exitUnionBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: xdrVisitor<Result>): Result {
		if (visitor.visitUnionBody) {
			return visitor.visitUnionBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseSpecContext extends ParserRuleContext {
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
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
	public get ruleIndex(): number { return xdrParser.RULE_caseSpec; }
	// @Override
	public enterRule(listener: xdrListener): void {
		if (listener.enterCaseSpec) {
			listener.enterCaseSpec(this);
		}
	}
	// @Override
	public exitRule(listener: xdrListener): void {
		if (listener.exitCaseSpec) {
			listener.exitCaseSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: xdrVisitor<Result>): Result {
		if (visitor.visitCaseSpec) {
			return visitor.visitCaseSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantDefContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(xdrParser.IDENTIFIER, 0); }
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return xdrParser.RULE_constantDef; }
	// @Override
	public enterRule(listener: xdrListener): void {
		if (listener.enterConstantDef) {
			listener.enterConstantDef(this);
		}
	}
	// @Override
	public exitRule(listener: xdrListener): void {
		if (listener.exitConstantDef) {
			listener.exitConstantDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: xdrVisitor<Result>): Result {
		if (visitor.visitConstantDef) {
			return visitor.visitConstantDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDefContext extends ParserRuleContext {
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(xdrParser.IDENTIFIER, 0); }
	public enumBody(): EnumBodyContext | undefined {
		return this.tryGetRuleContext(0, EnumBodyContext);
	}
	public structBody(): StructBodyContext | undefined {
		return this.tryGetRuleContext(0, StructBodyContext);
	}
	public unionBody(): UnionBodyContext | undefined {
		return this.tryGetRuleContext(0, UnionBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return xdrParser.RULE_typeDef; }
	// @Override
	public enterRule(listener: xdrListener): void {
		if (listener.enterTypeDef) {
			listener.enterTypeDef(this);
		}
	}
	// @Override
	public exitRule(listener: xdrListener): void {
		if (listener.exitTypeDef) {
			listener.exitTypeDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: xdrVisitor<Result>): Result {
		if (visitor.visitTypeDef) {
			return visitor.visitTypeDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefinitionContext extends ParserRuleContext {
	public typeDef(): TypeDefContext | undefined {
		return this.tryGetRuleContext(0, TypeDefContext);
	}
	public constantDef(): ConstantDefContext | undefined {
		return this.tryGetRuleContext(0, ConstantDefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return xdrParser.RULE_definition; }
	// @Override
	public enterRule(listener: xdrListener): void {
		if (listener.enterDefinition) {
			listener.enterDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: xdrListener): void {
		if (listener.exitDefinition) {
			listener.exitDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: xdrVisitor<Result>): Result {
		if (visitor.visitDefinition) {
			return visitor.visitDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class XdrSpecificationContext extends ParserRuleContext {
	public definition(): DefinitionContext[];
	public definition(i: number): DefinitionContext;
	public definition(i?: number): DefinitionContext | DefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefinitionContext);
		} else {
			return this.getRuleContext(i, DefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return xdrParser.RULE_xdrSpecification; }
	// @Override
	public enterRule(listener: xdrListener): void {
		if (listener.enterXdrSpecification) {
			listener.enterXdrSpecification(this);
		}
	}
	// @Override
	public exitRule(listener: xdrListener): void {
		if (listener.exitXdrSpecification) {
			listener.exitXdrSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: xdrVisitor<Result>): Result {
		if (visitor.visitXdrSpecification) {
			return visitor.visitXdrSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


