// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/solidity/Solidity.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { SolidityListener } from "./SolidityListener";
import { SolidityVisitor } from "./SolidityVisitor";


export class SolidityParser extends Parser {
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
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly T__58 = 59;
	public static readonly T__59 = 60;
	public static readonly T__60 = 61;
	public static readonly T__61 = 62;
	public static readonly T__62 = 63;
	public static readonly T__63 = 64;
	public static readonly T__64 = 65;
	public static readonly T__65 = 66;
	public static readonly T__66 = 67;
	public static readonly T__67 = 68;
	public static readonly T__68 = 69;
	public static readonly T__69 = 70;
	public static readonly T__70 = 71;
	public static readonly T__71 = 72;
	public static readonly T__72 = 73;
	public static readonly T__73 = 74;
	public static readonly T__74 = 75;
	public static readonly T__75 = 76;
	public static readonly T__76 = 77;
	public static readonly T__77 = 78;
	public static readonly T__78 = 79;
	public static readonly T__79 = 80;
	public static readonly T__80 = 81;
	public static readonly T__81 = 82;
	public static readonly T__82 = 83;
	public static readonly T__83 = 84;
	public static readonly T__84 = 85;
	public static readonly T__85 = 86;
	public static readonly T__86 = 87;
	public static readonly T__87 = 88;
	public static readonly T__88 = 89;
	public static readonly T__89 = 90;
	public static readonly Int = 91;
	public static readonly Uint = 92;
	public static readonly Byte = 93;
	public static readonly Fixed = 94;
	public static readonly Ufixed = 95;
	public static readonly VersionLiteral = 96;
	public static readonly BooleanLiteral = 97;
	public static readonly DecimalNumber = 98;
	public static readonly HexNumber = 99;
	public static readonly NumberUnit = 100;
	public static readonly HexLiteral = 101;
	public static readonly ReservedKeyword = 102;
	public static readonly AnonymousKeyword = 103;
	public static readonly BreakKeyword = 104;
	public static readonly ConstantKeyword = 105;
	public static readonly ContinueKeyword = 106;
	public static readonly ExternalKeyword = 107;
	public static readonly IndexedKeyword = 108;
	public static readonly InternalKeyword = 109;
	public static readonly PayableKeyword = 110;
	public static readonly PrivateKeyword = 111;
	public static readonly PublicKeyword = 112;
	public static readonly PureKeyword = 113;
	public static readonly ViewKeyword = 114;
	public static readonly Identifier = 115;
	public static readonly StringLiteral = 116;
	public static readonly WS = 117;
	public static readonly COMMENT = 118;
	public static readonly LINE_COMMENT = 119;
	public static readonly RULE_sourceUnit = 0;
	public static readonly RULE_pragmaDirective = 1;
	public static readonly RULE_pragmaName = 2;
	public static readonly RULE_pragmaValue = 3;
	public static readonly RULE_version = 4;
	public static readonly RULE_versionOperator = 5;
	public static readonly RULE_versionConstraint = 6;
	public static readonly RULE_importDeclaration = 7;
	public static readonly RULE_importDirective = 8;
	public static readonly RULE_contractDefinition = 9;
	public static readonly RULE_inheritanceSpecifier = 10;
	public static readonly RULE_contractPart = 11;
	public static readonly RULE_stateVariableDeclaration = 12;
	public static readonly RULE_usingForDeclaration = 13;
	public static readonly RULE_structDefinition = 14;
	public static readonly RULE_constructorDefinition = 15;
	public static readonly RULE_modifierDefinition = 16;
	public static readonly RULE_modifierInvocation = 17;
	public static readonly RULE_functionDefinition = 18;
	public static readonly RULE_returnParameters = 19;
	public static readonly RULE_modifierList = 20;
	public static readonly RULE_eventDefinition = 21;
	public static readonly RULE_enumValue = 22;
	public static readonly RULE_enumDefinition = 23;
	public static readonly RULE_parameterList = 24;
	public static readonly RULE_parameter = 25;
	public static readonly RULE_eventParameterList = 26;
	public static readonly RULE_eventParameter = 27;
	public static readonly RULE_functionTypeParameterList = 28;
	public static readonly RULE_functionTypeParameter = 29;
	public static readonly RULE_variableDeclaration = 30;
	public static readonly RULE_typeName = 31;
	public static readonly RULE_userDefinedTypeName = 32;
	public static readonly RULE_mapping = 33;
	public static readonly RULE_functionTypeName = 34;
	public static readonly RULE_storageLocation = 35;
	public static readonly RULE_stateMutability = 36;
	public static readonly RULE_block = 37;
	public static readonly RULE_statement = 38;
	public static readonly RULE_expressionStatement = 39;
	public static readonly RULE_ifStatement = 40;
	public static readonly RULE_whileStatement = 41;
	public static readonly RULE_simpleStatement = 42;
	public static readonly RULE_forStatement = 43;
	public static readonly RULE_inlineAssemblyStatement = 44;
	public static readonly RULE_doWhileStatement = 45;
	public static readonly RULE_continueStatement = 46;
	public static readonly RULE_breakStatement = 47;
	public static readonly RULE_returnStatement = 48;
	public static readonly RULE_throwStatement = 49;
	public static readonly RULE_emitStatement = 50;
	public static readonly RULE_variableDeclarationStatement = 51;
	public static readonly RULE_variableDeclarationList = 52;
	public static readonly RULE_identifierList = 53;
	public static readonly RULE_elementaryTypeName = 54;
	public static readonly RULE_expression = 55;
	public static readonly RULE_primaryExpression = 56;
	public static readonly RULE_expressionList = 57;
	public static readonly RULE_nameValueList = 58;
	public static readonly RULE_nameValue = 59;
	public static readonly RULE_functionCallArguments = 60;
	public static readonly RULE_functionCall = 61;
	public static readonly RULE_assemblyBlock = 62;
	public static readonly RULE_assemblyItem = 63;
	public static readonly RULE_assemblyExpression = 64;
	public static readonly RULE_assemblyCall = 65;
	public static readonly RULE_assemblyLocalDefinition = 66;
	public static readonly RULE_assemblyAssignment = 67;
	public static readonly RULE_assemblyIdentifierOrList = 68;
	public static readonly RULE_assemblyIdentifierList = 69;
	public static readonly RULE_assemblyStackAssignment = 70;
	public static readonly RULE_labelDefinition = 71;
	public static readonly RULE_assemblySwitch = 72;
	public static readonly RULE_assemblyCase = 73;
	public static readonly RULE_assemblyFunctionDefinition = 74;
	public static readonly RULE_assemblyFunctionReturns = 75;
	public static readonly RULE_assemblyFor = 76;
	public static readonly RULE_assemblyIf = 77;
	public static readonly RULE_assemblyLiteral = 78;
	public static readonly RULE_subAssembly = 79;
	public static readonly RULE_tupleExpression = 80;
	public static readonly RULE_elementaryTypeNameExpression = 81;
	public static readonly RULE_numberLiteral = 82;
	public static readonly RULE_identifier = 83;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sourceUnit", "pragmaDirective", "pragmaName", "pragmaValue", "version", 
		"versionOperator", "versionConstraint", "importDeclaration", "importDirective", 
		"contractDefinition", "inheritanceSpecifier", "contractPart", "stateVariableDeclaration", 
		"usingForDeclaration", "structDefinition", "constructorDefinition", "modifierDefinition", 
		"modifierInvocation", "functionDefinition", "returnParameters", "modifierList", 
		"eventDefinition", "enumValue", "enumDefinition", "parameterList", "parameter", 
		"eventParameterList", "eventParameter", "functionTypeParameterList", "functionTypeParameter", 
		"variableDeclaration", "typeName", "userDefinedTypeName", "mapping", "functionTypeName", 
		"storageLocation", "stateMutability", "block", "statement", "expressionStatement", 
		"ifStatement", "whileStatement", "simpleStatement", "forStatement", "inlineAssemblyStatement", 
		"doWhileStatement", "continueStatement", "breakStatement", "returnStatement", 
		"throwStatement", "emitStatement", "variableDeclarationStatement", "variableDeclarationList", 
		"identifierList", "elementaryTypeName", "expression", "primaryExpression", 
		"expressionList", "nameValueList", "nameValue", "functionCallArguments", 
		"functionCall", "assemblyBlock", "assemblyItem", "assemblyExpression", 
		"assemblyCall", "assemblyLocalDefinition", "assemblyAssignment", "assemblyIdentifierOrList", 
		"assemblyIdentifierList", "assemblyStackAssignment", "labelDefinition", 
		"assemblySwitch", "assemblyCase", "assemblyFunctionDefinition", "assemblyFunctionReturns", 
		"assemblyFor", "assemblyIf", "assemblyLiteral", "subAssembly", "tupleExpression", 
		"elementaryTypeNameExpression", "numberLiteral", "identifier",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'pragma'", "';'", "'^'", "'~'", "'>='", "'>'", "'<'", "'<='", 
		"'='", "'as'", "'import'", "'*'", "'from'", "'{'", "','", "'}'", "'contract'", 
		"'interface'", "'library'", "'is'", "'('", "')'", "'using'", "'for'", 
		"'struct'", "'constructor'", "'modifier'", "'function'", "'returns'", 
		"'event'", "'enum'", "'['", "']'", "'.'", "'mapping'", "'=>'", "'memory'", 
		"'storage'", "'calldata'", "'if'", "'else'", "'while'", "'assembly'", 
		"'do'", "'return'", "'throw'", "'emit'", "'var'", "'address'", "'bool'", 
		"'string'", "'byte'", "'++'", "'--'", "'new'", "'+'", "'-'", "'after'", 
		"'delete'", "'!'", "'**'", "'/'", "'%'", "'<<'", "'>>'", "'&'", "'|'", 
		"'=='", "'!='", "'&&'", "'||'", "'?'", "':'", "'|='", "'^='", "'&='", 
		"'<<='", "'>>='", "'+='", "'-='", "'*='", "'/='", "'%='", "'let'", "':='", 
		"'=:'", "'switch'", "'case'", "'default'", "'->'", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "'anonymous'", "'break'", "'constant'", 
		"'continue'", "'external'", "'indexed'", "'internal'", "'payable'", "'private'", 
		"'public'", "'pure'", "'view'",
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
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"Int", "Uint", "Byte", "Fixed", "Ufixed", "VersionLiteral", "BooleanLiteral", 
		"DecimalNumber", "HexNumber", "NumberUnit", "HexLiteral", "ReservedKeyword", 
		"AnonymousKeyword", "BreakKeyword", "ConstantKeyword", "ContinueKeyword", 
		"ExternalKeyword", "IndexedKeyword", "InternalKeyword", "PayableKeyword", 
		"PrivateKeyword", "PublicKeyword", "PureKeyword", "ViewKeyword", "Identifier", 
		"StringLiteral", "WS", "COMMENT", "LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SolidityParser._LITERAL_NAMES, SolidityParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SolidityParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Solidity.g4"; }

	// @Override
	public get ruleNames(): string[] { return SolidityParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SolidityParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SolidityParser._ATN, this);
	}
	// @RuleVersion(0)
	public sourceUnit(): SourceUnitContext {
		let _localctx: SourceUnitContext = new SourceUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SolidityParser.RULE_sourceUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__0) | (1 << SolidityParser.T__10) | (1 << SolidityParser.T__16) | (1 << SolidityParser.T__17) | (1 << SolidityParser.T__18))) !== 0)) {
				{
				this.state = 171;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SolidityParser.T__0:
					{
					this.state = 168;
					this.pragmaDirective();
					}
					break;
				case SolidityParser.T__10:
					{
					this.state = 169;
					this.importDirective();
					}
					break;
				case SolidityParser.T__16:
				case SolidityParser.T__17:
				case SolidityParser.T__18:
					{
					this.state = 170;
					this.contractDefinition();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 176;
			this.match(SolidityParser.EOF);
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
	public pragmaDirective(): PragmaDirectiveContext {
		let _localctx: PragmaDirectiveContext = new PragmaDirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SolidityParser.RULE_pragmaDirective);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 178;
			this.match(SolidityParser.T__0);
			this.state = 179;
			this.pragmaName();
			this.state = 180;
			this.pragmaValue();
			this.state = 181;
			this.match(SolidityParser.T__1);
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
	public pragmaName(): PragmaNameContext {
		let _localctx: PragmaNameContext = new PragmaNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SolidityParser.RULE_pragmaName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 183;
			this.identifier();
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
	public pragmaValue(): PragmaValueContext {
		let _localctx: PragmaValueContext = new PragmaValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SolidityParser.RULE_pragmaValue);
		try {
			this.state = 187;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 185;
				this.version();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 186;
				this.expression(0);
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
	public version(): VersionContext {
		let _localctx: VersionContext = new VersionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SolidityParser.RULE_version);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 189;
			this.versionConstraint();
			this.state = 191;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__2) | (1 << SolidityParser.T__3) | (1 << SolidityParser.T__4) | (1 << SolidityParser.T__5) | (1 << SolidityParser.T__6) | (1 << SolidityParser.T__7) | (1 << SolidityParser.T__8))) !== 0) || _la === SolidityParser.VersionLiteral) {
				{
				this.state = 190;
				this.versionConstraint();
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
	public versionOperator(): VersionOperatorContext {
		let _localctx: VersionOperatorContext = new VersionOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SolidityParser.RULE_versionOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__2) | (1 << SolidityParser.T__3) | (1 << SolidityParser.T__4) | (1 << SolidityParser.T__5) | (1 << SolidityParser.T__6) | (1 << SolidityParser.T__7) | (1 << SolidityParser.T__8))) !== 0))) {
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
	public versionConstraint(): VersionConstraintContext {
		let _localctx: VersionConstraintContext = new VersionConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SolidityParser.RULE_versionConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__2) | (1 << SolidityParser.T__3) | (1 << SolidityParser.T__4) | (1 << SolidityParser.T__5) | (1 << SolidityParser.T__6) | (1 << SolidityParser.T__7) | (1 << SolidityParser.T__8))) !== 0)) {
				{
				this.state = 195;
				this.versionOperator();
				}
			}

			this.state = 198;
			this.match(SolidityParser.VersionLiteral);
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
	public importDeclaration(): ImportDeclarationContext {
		let _localctx: ImportDeclarationContext = new ImportDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SolidityParser.RULE_importDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 200;
			this.identifier();
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__9) {
				{
				this.state = 201;
				this.match(SolidityParser.T__9);
				this.state = 202;
				this.identifier();
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
	public importDirective(): ImportDirectiveContext {
		let _localctx: ImportDirectiveContext = new ImportDirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SolidityParser.RULE_importDirective);
		let _la: number;
		try {
			this.state = 239;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 205;
				this.match(SolidityParser.T__10);
				this.state = 206;
				this.match(SolidityParser.StringLiteral);
				this.state = 209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__9) {
					{
					this.state = 207;
					this.match(SolidityParser.T__9);
					this.state = 208;
					this.identifier();
					}
				}

				this.state = 211;
				this.match(SolidityParser.T__1);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 212;
				this.match(SolidityParser.T__10);
				this.state = 215;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SolidityParser.T__11:
					{
					this.state = 213;
					this.match(SolidityParser.T__11);
					}
					break;
				case SolidityParser.T__12:
				case SolidityParser.Identifier:
					{
					this.state = 214;
					this.identifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 219;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__9) {
					{
					this.state = 217;
					this.match(SolidityParser.T__9);
					this.state = 218;
					this.identifier();
					}
				}

				this.state = 221;
				this.match(SolidityParser.T__12);
				this.state = 222;
				this.match(SolidityParser.StringLiteral);
				this.state = 223;
				this.match(SolidityParser.T__1);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 224;
				this.match(SolidityParser.T__10);
				this.state = 225;
				this.match(SolidityParser.T__13);
				this.state = 226;
				this.importDeclaration();
				this.state = 231;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__14) {
					{
					{
					this.state = 227;
					this.match(SolidityParser.T__14);
					this.state = 228;
					this.importDeclaration();
					}
					}
					this.state = 233;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 234;
				this.match(SolidityParser.T__15);
				this.state = 235;
				this.match(SolidityParser.T__12);
				this.state = 236;
				this.match(SolidityParser.StringLiteral);
				this.state = 237;
				this.match(SolidityParser.T__1);
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
	public contractDefinition(): ContractDefinitionContext {
		let _localctx: ContractDefinitionContext = new ContractDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SolidityParser.RULE_contractDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 241;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__16) | (1 << SolidityParser.T__17) | (1 << SolidityParser.T__18))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 242;
			this.identifier();
			this.state = 252;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__19) {
				{
				this.state = 243;
				this.match(SolidityParser.T__19);
				this.state = 244;
				this.inheritanceSpecifier();
				this.state = 249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__14) {
					{
					{
					this.state = 245;
					this.match(SolidityParser.T__14);
					this.state = 246;
					this.inheritanceSpecifier();
					}
					}
					this.state = 251;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 254;
			this.match(SolidityParser.T__13);
			this.state = 258;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__12) | (1 << SolidityParser.T__22) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__25) | (1 << SolidityParser.T__26) | (1 << SolidityParser.T__27) | (1 << SolidityParser.T__29) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SolidityParser.T__34 - 35)) | (1 << (SolidityParser.T__47 - 35)) | (1 << (SolidityParser.T__48 - 35)) | (1 << (SolidityParser.T__49 - 35)) | (1 << (SolidityParser.T__50 - 35)) | (1 << (SolidityParser.T__51 - 35)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)) | (1 << (SolidityParser.Identifier - 91)))) !== 0)) {
				{
				{
				this.state = 255;
				this.contractPart();
				}
				}
				this.state = 260;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 261;
			this.match(SolidityParser.T__15);
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
	public inheritanceSpecifier(): InheritanceSpecifierContext {
		let _localctx: InheritanceSpecifierContext = new InheritanceSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SolidityParser.RULE_inheritanceSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 263;
			this.userDefinedTypeName();
			this.state = 275;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__20) {
				{
				this.state = 264;
				this.match(SolidityParser.T__20);
				this.state = 265;
				this.expression(0);
				this.state = 270;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__14) {
					{
					{
					this.state = 266;
					this.match(SolidityParser.T__14);
					this.state = 267;
					this.expression(0);
					}
					}
					this.state = 272;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 273;
				this.match(SolidityParser.T__21);
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
	public contractPart(): ContractPartContext {
		let _localctx: ContractPartContext = new ContractPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SolidityParser.RULE_contractPart);
		try {
			this.state = 285;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 277;
				this.stateVariableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 278;
				this.usingForDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 279;
				this.structDefinition();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 280;
				this.constructorDefinition();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 281;
				this.modifierDefinition();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 282;
				this.functionDefinition();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 283;
				this.eventDefinition();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 284;
				this.enumDefinition();
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
	public stateVariableDeclaration(): StateVariableDeclarationContext {
		let _localctx: StateVariableDeclarationContext = new StateVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SolidityParser.RULE_stateVariableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 287;
			this.typeName(0);
			this.state = 291;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (SolidityParser.ConstantKeyword - 105)) | (1 << (SolidityParser.InternalKeyword - 105)) | (1 << (SolidityParser.PrivateKeyword - 105)) | (1 << (SolidityParser.PublicKeyword - 105)))) !== 0)) {
				{
				{
				this.state = 288;
				_la = this._input.LA(1);
				if (!(((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (SolidityParser.ConstantKeyword - 105)) | (1 << (SolidityParser.InternalKeyword - 105)) | (1 << (SolidityParser.PrivateKeyword - 105)) | (1 << (SolidityParser.PublicKeyword - 105)))) !== 0))) {
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
				this.state = 293;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 294;
			this.identifier();
			this.state = 297;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__8) {
				{
				this.state = 295;
				this.match(SolidityParser.T__8);
				this.state = 296;
				this.expression(0);
				}
			}

			this.state = 299;
			this.match(SolidityParser.T__1);
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
	public usingForDeclaration(): UsingForDeclarationContext {
		let _localctx: UsingForDeclarationContext = new UsingForDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, SolidityParser.RULE_usingForDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 301;
			this.match(SolidityParser.T__22);
			this.state = 302;
			this.identifier();
			this.state = 303;
			this.match(SolidityParser.T__23);
			this.state = 306;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__11:
				{
				this.state = 304;
				this.match(SolidityParser.T__11);
				}
				break;
			case SolidityParser.T__12:
			case SolidityParser.T__27:
			case SolidityParser.T__34:
			case SolidityParser.T__47:
			case SolidityParser.T__48:
			case SolidityParser.T__49:
			case SolidityParser.T__50:
			case SolidityParser.T__51:
			case SolidityParser.Int:
			case SolidityParser.Uint:
			case SolidityParser.Byte:
			case SolidityParser.Fixed:
			case SolidityParser.Ufixed:
			case SolidityParser.Identifier:
				{
				this.state = 305;
				this.typeName(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 308;
			this.match(SolidityParser.T__1);
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
	public structDefinition(): StructDefinitionContext {
		let _localctx: StructDefinitionContext = new StructDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SolidityParser.RULE_structDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 310;
			this.match(SolidityParser.T__24);
			this.state = 311;
			this.identifier();
			this.state = 312;
			this.match(SolidityParser.T__13);
			this.state = 323;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__12 || _la === SolidityParser.T__27 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SolidityParser.T__34 - 35)) | (1 << (SolidityParser.T__47 - 35)) | (1 << (SolidityParser.T__48 - 35)) | (1 << (SolidityParser.T__49 - 35)) | (1 << (SolidityParser.T__50 - 35)) | (1 << (SolidityParser.T__51 - 35)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)) | (1 << (SolidityParser.Identifier - 91)))) !== 0)) {
				{
				this.state = 313;
				this.variableDeclaration();
				this.state = 314;
				this.match(SolidityParser.T__1);
				this.state = 320;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__12 || _la === SolidityParser.T__27 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SolidityParser.T__34 - 35)) | (1 << (SolidityParser.T__47 - 35)) | (1 << (SolidityParser.T__48 - 35)) | (1 << (SolidityParser.T__49 - 35)) | (1 << (SolidityParser.T__50 - 35)) | (1 << (SolidityParser.T__51 - 35)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)) | (1 << (SolidityParser.Identifier - 91)))) !== 0)) {
					{
					{
					this.state = 315;
					this.variableDeclaration();
					this.state = 316;
					this.match(SolidityParser.T__1);
					}
					}
					this.state = 322;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 325;
			this.match(SolidityParser.T__15);
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
	public constructorDefinition(): ConstructorDefinitionContext {
		let _localctx: ConstructorDefinitionContext = new ConstructorDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, SolidityParser.RULE_constructorDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 327;
			this.match(SolidityParser.T__25);
			this.state = 328;
			this.parameterList();
			this.state = 329;
			this.modifierList();
			this.state = 330;
			this.block();
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
	public modifierDefinition(): ModifierDefinitionContext {
		let _localctx: ModifierDefinitionContext = new ModifierDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SolidityParser.RULE_modifierDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 332;
			this.match(SolidityParser.T__26);
			this.state = 333;
			this.identifier();
			this.state = 335;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__20) {
				{
				this.state = 334;
				this.parameterList();
				}
			}

			this.state = 337;
			this.block();
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
	public modifierInvocation(): ModifierInvocationContext {
		let _localctx: ModifierInvocationContext = new ModifierInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, SolidityParser.RULE_modifierInvocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 339;
			this.identifier();
			this.state = 345;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__20) {
				{
				this.state = 340;
				this.match(SolidityParser.T__20);
				this.state = 342;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__3) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__20))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__47 - 32)) | (1 << (SolidityParser.T__48 - 32)) | (1 << (SolidityParser.T__49 - 32)) | (1 << (SolidityParser.T__50 - 32)) | (1 << (SolidityParser.T__51 - 32)) | (1 << (SolidityParser.T__52 - 32)) | (1 << (SolidityParser.T__53 - 32)) | (1 << (SolidityParser.T__54 - 32)) | (1 << (SolidityParser.T__55 - 32)) | (1 << (SolidityParser.T__56 - 32)) | (1 << (SolidityParser.T__57 - 32)) | (1 << (SolidityParser.T__58 - 32)) | (1 << (SolidityParser.T__59 - 32)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)) | (1 << (SolidityParser.BooleanLiteral - 91)) | (1 << (SolidityParser.DecimalNumber - 91)) | (1 << (SolidityParser.HexNumber - 91)) | (1 << (SolidityParser.HexLiteral - 91)) | (1 << (SolidityParser.Identifier - 91)) | (1 << (SolidityParser.StringLiteral - 91)))) !== 0)) {
					{
					this.state = 341;
					this.expressionList();
					}
				}

				this.state = 344;
				this.match(SolidityParser.T__21);
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
	public functionDefinition(): FunctionDefinitionContext {
		let _localctx: FunctionDefinitionContext = new FunctionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, SolidityParser.RULE_functionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 347;
			this.match(SolidityParser.T__27);
			this.state = 349;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__12 || _la === SolidityParser.Identifier) {
				{
				this.state = 348;
				this.identifier();
				}
			}

			this.state = 351;
			this.parameterList();
			this.state = 352;
			this.modifierList();
			this.state = 354;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__28) {
				{
				this.state = 353;
				this.returnParameters();
				}
			}

			this.state = 358;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__1:
				{
				this.state = 356;
				this.match(SolidityParser.T__1);
				}
				break;
			case SolidityParser.T__13:
				{
				this.state = 357;
				this.block();
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
	public returnParameters(): ReturnParametersContext {
		let _localctx: ReturnParametersContext = new ReturnParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, SolidityParser.RULE_returnParameters);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 360;
			this.match(SolidityParser.T__28);
			this.state = 361;
			this.parameterList();
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
	public modifierList(): ModifierListContext {
		let _localctx: ModifierListContext = new ModifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, SolidityParser.RULE_modifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 371;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__12 || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (SolidityParser.ConstantKeyword - 105)) | (1 << (SolidityParser.ExternalKeyword - 105)) | (1 << (SolidityParser.InternalKeyword - 105)) | (1 << (SolidityParser.PayableKeyword - 105)) | (1 << (SolidityParser.PrivateKeyword - 105)) | (1 << (SolidityParser.PublicKeyword - 105)) | (1 << (SolidityParser.PureKeyword - 105)) | (1 << (SolidityParser.ViewKeyword - 105)) | (1 << (SolidityParser.Identifier - 105)))) !== 0)) {
				{
				this.state = 369;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SolidityParser.T__12:
				case SolidityParser.Identifier:
					{
					this.state = 363;
					this.modifierInvocation();
					}
					break;
				case SolidityParser.ConstantKeyword:
				case SolidityParser.PayableKeyword:
				case SolidityParser.PureKeyword:
				case SolidityParser.ViewKeyword:
					{
					this.state = 364;
					this.stateMutability();
					}
					break;
				case SolidityParser.ExternalKeyword:
					{
					this.state = 365;
					this.match(SolidityParser.ExternalKeyword);
					}
					break;
				case SolidityParser.PublicKeyword:
					{
					this.state = 366;
					this.match(SolidityParser.PublicKeyword);
					}
					break;
				case SolidityParser.InternalKeyword:
					{
					this.state = 367;
					this.match(SolidityParser.InternalKeyword);
					}
					break;
				case SolidityParser.PrivateKeyword:
					{
					this.state = 368;
					this.match(SolidityParser.PrivateKeyword);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 373;
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
	public eventDefinition(): EventDefinitionContext {
		let _localctx: EventDefinitionContext = new EventDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, SolidityParser.RULE_eventDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 374;
			this.match(SolidityParser.T__29);
			this.state = 375;
			this.identifier();
			this.state = 376;
			this.eventParameterList();
			this.state = 378;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.AnonymousKeyword) {
				{
				this.state = 377;
				this.match(SolidityParser.AnonymousKeyword);
				}
			}

			this.state = 380;
			this.match(SolidityParser.T__1);
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
	public enumValue(): EnumValueContext {
		let _localctx: EnumValueContext = new EnumValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, SolidityParser.RULE_enumValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 382;
			this.identifier();
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
		this.enterRule(_localctx, 46, SolidityParser.RULE_enumDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 384;
			this.match(SolidityParser.T__30);
			this.state = 385;
			this.identifier();
			this.state = 386;
			this.match(SolidityParser.T__13);
			this.state = 388;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__12 || _la === SolidityParser.Identifier) {
				{
				this.state = 387;
				this.enumValue();
				}
			}

			this.state = 394;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__14) {
				{
				{
				this.state = 390;
				this.match(SolidityParser.T__14);
				this.state = 391;
				this.enumValue();
				}
				}
				this.state = 396;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 397;
			this.match(SolidityParser.T__15);
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
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, SolidityParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 399;
			this.match(SolidityParser.T__20);
			this.state = 408;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__12 || _la === SolidityParser.T__27 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SolidityParser.T__34 - 35)) | (1 << (SolidityParser.T__47 - 35)) | (1 << (SolidityParser.T__48 - 35)) | (1 << (SolidityParser.T__49 - 35)) | (1 << (SolidityParser.T__50 - 35)) | (1 << (SolidityParser.T__51 - 35)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)) | (1 << (SolidityParser.Identifier - 91)))) !== 0)) {
				{
				this.state = 400;
				this.parameter();
				this.state = 405;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__14) {
					{
					{
					this.state = 401;
					this.match(SolidityParser.T__14);
					this.state = 402;
					this.parameter();
					}
					}
					this.state = 407;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 410;
			this.match(SolidityParser.T__21);
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
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, SolidityParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 412;
			this.typeName(0);
			this.state = 414;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (SolidityParser.T__36 - 37)) | (1 << (SolidityParser.T__37 - 37)) | (1 << (SolidityParser.T__38 - 37)))) !== 0)) {
				{
				this.state = 413;
				this.storageLocation();
				}
			}

			this.state = 417;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__12 || _la === SolidityParser.Identifier) {
				{
				this.state = 416;
				this.identifier();
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
	public eventParameterList(): EventParameterListContext {
		let _localctx: EventParameterListContext = new EventParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, SolidityParser.RULE_eventParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 419;
			this.match(SolidityParser.T__20);
			this.state = 428;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__12 || _la === SolidityParser.T__27 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SolidityParser.T__34 - 35)) | (1 << (SolidityParser.T__47 - 35)) | (1 << (SolidityParser.T__48 - 35)) | (1 << (SolidityParser.T__49 - 35)) | (1 << (SolidityParser.T__50 - 35)) | (1 << (SolidityParser.T__51 - 35)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)) | (1 << (SolidityParser.Identifier - 91)))) !== 0)) {
				{
				this.state = 420;
				this.eventParameter();
				this.state = 425;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__14) {
					{
					{
					this.state = 421;
					this.match(SolidityParser.T__14);
					this.state = 422;
					this.eventParameter();
					}
					}
					this.state = 427;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 430;
			this.match(SolidityParser.T__21);
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
	public eventParameter(): EventParameterContext {
		let _localctx: EventParameterContext = new EventParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, SolidityParser.RULE_eventParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 432;
			this.typeName(0);
			this.state = 434;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.IndexedKeyword) {
				{
				this.state = 433;
				this.match(SolidityParser.IndexedKeyword);
				}
			}

			this.state = 437;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__12 || _la === SolidityParser.Identifier) {
				{
				this.state = 436;
				this.identifier();
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
	public functionTypeParameterList(): FunctionTypeParameterListContext {
		let _localctx: FunctionTypeParameterListContext = new FunctionTypeParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, SolidityParser.RULE_functionTypeParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 439;
			this.match(SolidityParser.T__20);
			this.state = 448;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__12 || _la === SolidityParser.T__27 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SolidityParser.T__34 - 35)) | (1 << (SolidityParser.T__47 - 35)) | (1 << (SolidityParser.T__48 - 35)) | (1 << (SolidityParser.T__49 - 35)) | (1 << (SolidityParser.T__50 - 35)) | (1 << (SolidityParser.T__51 - 35)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)) | (1 << (SolidityParser.Identifier - 91)))) !== 0)) {
				{
				this.state = 440;
				this.functionTypeParameter();
				this.state = 445;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__14) {
					{
					{
					this.state = 441;
					this.match(SolidityParser.T__14);
					this.state = 442;
					this.functionTypeParameter();
					}
					}
					this.state = 447;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 450;
			this.match(SolidityParser.T__21);
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
	public functionTypeParameter(): FunctionTypeParameterContext {
		let _localctx: FunctionTypeParameterContext = new FunctionTypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, SolidityParser.RULE_functionTypeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 452;
			this.typeName(0);
			this.state = 454;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (SolidityParser.T__36 - 37)) | (1 << (SolidityParser.T__37 - 37)) | (1 << (SolidityParser.T__38 - 37)))) !== 0)) {
				{
				this.state = 453;
				this.storageLocation();
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
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, SolidityParser.RULE_variableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 456;
			this.typeName(0);
			this.state = 458;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (SolidityParser.T__36 - 37)) | (1 << (SolidityParser.T__37 - 37)) | (1 << (SolidityParser.T__38 - 37)))) !== 0)) {
				{
				this.state = 457;
				this.storageLocation();
				}
			}

			this.state = 460;
			this.identifier();
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

	public typeName(): TypeNameContext;
	public typeName(_p: number): TypeNameContext;
	// @RuleVersion(0)
	public typeName(_p?: number): TypeNameContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeNameContext = new TypeNameContext(this._ctx, _parentState);
		let _prevctx: TypeNameContext = _localctx;
		let _startState: number = 62;
		this.enterRecursionRule(_localctx, 62, SolidityParser.RULE_typeName, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 467;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__47:
			case SolidityParser.T__48:
			case SolidityParser.T__49:
			case SolidityParser.T__50:
			case SolidityParser.T__51:
			case SolidityParser.Int:
			case SolidityParser.Uint:
			case SolidityParser.Byte:
			case SolidityParser.Fixed:
			case SolidityParser.Ufixed:
				{
				this.state = 463;
				this.elementaryTypeName();
				}
				break;
			case SolidityParser.T__12:
			case SolidityParser.Identifier:
				{
				this.state = 464;
				this.userDefinedTypeName();
				}
				break;
			case SolidityParser.T__34:
				{
				this.state = 465;
				this.mapping();
				}
				break;
			case SolidityParser.T__27:
				{
				this.state = 466;
				this.functionTypeName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 477;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new TypeNameContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_typeName);
					this.state = 469;
					if (!(this.precpred(this._ctx, 2))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					}
					this.state = 470;
					this.match(SolidityParser.T__31);
					this.state = 472;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__3) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__20))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__47 - 32)) | (1 << (SolidityParser.T__48 - 32)) | (1 << (SolidityParser.T__49 - 32)) | (1 << (SolidityParser.T__50 - 32)) | (1 << (SolidityParser.T__51 - 32)) | (1 << (SolidityParser.T__52 - 32)) | (1 << (SolidityParser.T__53 - 32)) | (1 << (SolidityParser.T__54 - 32)) | (1 << (SolidityParser.T__55 - 32)) | (1 << (SolidityParser.T__56 - 32)) | (1 << (SolidityParser.T__57 - 32)) | (1 << (SolidityParser.T__58 - 32)) | (1 << (SolidityParser.T__59 - 32)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)) | (1 << (SolidityParser.BooleanLiteral - 91)) | (1 << (SolidityParser.DecimalNumber - 91)) | (1 << (SolidityParser.HexNumber - 91)) | (1 << (SolidityParser.HexLiteral - 91)) | (1 << (SolidityParser.Identifier - 91)) | (1 << (SolidityParser.StringLiteral - 91)))) !== 0)) {
						{
						this.state = 471;
						this.expression(0);
						}
					}

					this.state = 474;
					this.match(SolidityParser.T__32);
					}
					}
				}
				this.state = 479;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public userDefinedTypeName(): UserDefinedTypeNameContext {
		let _localctx: UserDefinedTypeNameContext = new UserDefinedTypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, SolidityParser.RULE_userDefinedTypeName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 480;
			this.identifier();
			this.state = 485;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 481;
					this.match(SolidityParser.T__33);
					this.state = 482;
					this.identifier();
					}
					}
				}
				this.state = 487;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
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
	public mapping(): MappingContext {
		let _localctx: MappingContext = new MappingContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, SolidityParser.RULE_mapping);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 488;
			this.match(SolidityParser.T__34);
			this.state = 489;
			this.match(SolidityParser.T__20);
			this.state = 490;
			this.elementaryTypeName();
			this.state = 491;
			this.match(SolidityParser.T__35);
			this.state = 492;
			this.typeName(0);
			this.state = 493;
			this.match(SolidityParser.T__21);
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
	public functionTypeName(): FunctionTypeNameContext {
		let _localctx: FunctionTypeNameContext = new FunctionTypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, SolidityParser.RULE_functionTypeName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 495;
			this.match(SolidityParser.T__27);
			this.state = 496;
			this.functionTypeParameterList();
			this.state = 502;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 500;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case SolidityParser.InternalKeyword:
						{
						this.state = 497;
						this.match(SolidityParser.InternalKeyword);
						}
						break;
					case SolidityParser.ExternalKeyword:
						{
						this.state = 498;
						this.match(SolidityParser.ExternalKeyword);
						}
						break;
					case SolidityParser.ConstantKeyword:
					case SolidityParser.PayableKeyword:
					case SolidityParser.PureKeyword:
					case SolidityParser.ViewKeyword:
						{
						this.state = 499;
						this.stateMutability();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 504;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
			}
			this.state = 507;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				{
				this.state = 505;
				this.match(SolidityParser.T__28);
				this.state = 506;
				this.functionTypeParameterList();
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
	public storageLocation(): StorageLocationContext {
		let _localctx: StorageLocationContext = new StorageLocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, SolidityParser.RULE_storageLocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 509;
			_la = this._input.LA(1);
			if (!(((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (SolidityParser.T__36 - 37)) | (1 << (SolidityParser.T__37 - 37)) | (1 << (SolidityParser.T__38 - 37)))) !== 0))) {
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
	public stateMutability(): StateMutabilityContext {
		let _localctx: StateMutabilityContext = new StateMutabilityContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, SolidityParser.RULE_stateMutability);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 511;
			_la = this._input.LA(1);
			if (!(((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (SolidityParser.ConstantKeyword - 105)) | (1 << (SolidityParser.PayableKeyword - 105)) | (1 << (SolidityParser.PureKeyword - 105)) | (1 << (SolidityParser.ViewKeyword - 105)))) !== 0))) {
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
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, SolidityParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 513;
			this.match(SolidityParser.T__13);
			this.state = 517;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__3) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__20) | (1 << SolidityParser.T__23) | (1 << SolidityParser.T__27))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__34 - 32)) | (1 << (SolidityParser.T__39 - 32)) | (1 << (SolidityParser.T__41 - 32)) | (1 << (SolidityParser.T__42 - 32)) | (1 << (SolidityParser.T__43 - 32)) | (1 << (SolidityParser.T__44 - 32)) | (1 << (SolidityParser.T__45 - 32)) | (1 << (SolidityParser.T__46 - 32)) | (1 << (SolidityParser.T__47 - 32)) | (1 << (SolidityParser.T__48 - 32)) | (1 << (SolidityParser.T__49 - 32)) | (1 << (SolidityParser.T__50 - 32)) | (1 << (SolidityParser.T__51 - 32)) | (1 << (SolidityParser.T__52 - 32)) | (1 << (SolidityParser.T__53 - 32)) | (1 << (SolidityParser.T__54 - 32)) | (1 << (SolidityParser.T__55 - 32)) | (1 << (SolidityParser.T__56 - 32)) | (1 << (SolidityParser.T__57 - 32)) | (1 << (SolidityParser.T__58 - 32)) | (1 << (SolidityParser.T__59 - 32)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)) | (1 << (SolidityParser.BooleanLiteral - 91)) | (1 << (SolidityParser.DecimalNumber - 91)) | (1 << (SolidityParser.HexNumber - 91)) | (1 << (SolidityParser.HexLiteral - 91)) | (1 << (SolidityParser.BreakKeyword - 91)) | (1 << (SolidityParser.ContinueKeyword - 91)) | (1 << (SolidityParser.Identifier - 91)) | (1 << (SolidityParser.StringLiteral - 91)))) !== 0)) {
				{
				{
				this.state = 514;
				this.statement();
				}
				}
				this.state = 519;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 520;
			this.match(SolidityParser.T__15);
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, SolidityParser.RULE_statement);
		try {
			this.state = 534;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__39:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 522;
				this.ifStatement();
				}
				break;
			case SolidityParser.T__41:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 523;
				this.whileStatement();
				}
				break;
			case SolidityParser.T__23:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 524;
				this.forStatement();
				}
				break;
			case SolidityParser.T__13:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 525;
				this.block();
				}
				break;
			case SolidityParser.T__42:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 526;
				this.inlineAssemblyStatement();
				}
				break;
			case SolidityParser.T__43:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 527;
				this.doWhileStatement();
				}
				break;
			case SolidityParser.ContinueKeyword:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 528;
				this.continueStatement();
				}
				break;
			case SolidityParser.BreakKeyword:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 529;
				this.breakStatement();
				}
				break;
			case SolidityParser.T__44:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 530;
				this.returnStatement();
				}
				break;
			case SolidityParser.T__45:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 531;
				this.throwStatement();
				}
				break;
			case SolidityParser.T__46:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 532;
				this.emitStatement();
				}
				break;
			case SolidityParser.T__3:
			case SolidityParser.T__12:
			case SolidityParser.T__20:
			case SolidityParser.T__27:
			case SolidityParser.T__31:
			case SolidityParser.T__34:
			case SolidityParser.T__47:
			case SolidityParser.T__48:
			case SolidityParser.T__49:
			case SolidityParser.T__50:
			case SolidityParser.T__51:
			case SolidityParser.T__52:
			case SolidityParser.T__53:
			case SolidityParser.T__54:
			case SolidityParser.T__55:
			case SolidityParser.T__56:
			case SolidityParser.T__57:
			case SolidityParser.T__58:
			case SolidityParser.T__59:
			case SolidityParser.Int:
			case SolidityParser.Uint:
			case SolidityParser.Byte:
			case SolidityParser.Fixed:
			case SolidityParser.Ufixed:
			case SolidityParser.BooleanLiteral:
			case SolidityParser.DecimalNumber:
			case SolidityParser.HexNumber:
			case SolidityParser.HexLiteral:
			case SolidityParser.Identifier:
			case SolidityParser.StringLiteral:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 533;
				this.simpleStatement();
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
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, SolidityParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 536;
			this.expression(0);
			this.state = 537;
			this.match(SolidityParser.T__1);
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
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, SolidityParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 539;
			this.match(SolidityParser.T__39);
			this.state = 540;
			this.match(SolidityParser.T__20);
			this.state = 541;
			this.expression(0);
			this.state = 542;
			this.match(SolidityParser.T__21);
			this.state = 543;
			this.statement();
			this.state = 546;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				{
				this.state = 544;
				this.match(SolidityParser.T__40);
				this.state = 545;
				this.statement();
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
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, SolidityParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 548;
			this.match(SolidityParser.T__41);
			this.state = 549;
			this.match(SolidityParser.T__20);
			this.state = 550;
			this.expression(0);
			this.state = 551;
			this.match(SolidityParser.T__21);
			this.state = 552;
			this.statement();
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
	public simpleStatement(): SimpleStatementContext {
		let _localctx: SimpleStatementContext = new SimpleStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, SolidityParser.RULE_simpleStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 556;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				{
				this.state = 554;
				this.variableDeclarationStatement();
				}
				break;

			case 2:
				{
				this.state = 555;
				this.expressionStatement();
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
	public forStatement(): ForStatementContext {
		let _localctx: ForStatementContext = new ForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, SolidityParser.RULE_forStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 558;
			this.match(SolidityParser.T__23);
			this.state = 559;
			this.match(SolidityParser.T__20);
			this.state = 562;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__3:
			case SolidityParser.T__12:
			case SolidityParser.T__20:
			case SolidityParser.T__27:
			case SolidityParser.T__31:
			case SolidityParser.T__34:
			case SolidityParser.T__47:
			case SolidityParser.T__48:
			case SolidityParser.T__49:
			case SolidityParser.T__50:
			case SolidityParser.T__51:
			case SolidityParser.T__52:
			case SolidityParser.T__53:
			case SolidityParser.T__54:
			case SolidityParser.T__55:
			case SolidityParser.T__56:
			case SolidityParser.T__57:
			case SolidityParser.T__58:
			case SolidityParser.T__59:
			case SolidityParser.Int:
			case SolidityParser.Uint:
			case SolidityParser.Byte:
			case SolidityParser.Fixed:
			case SolidityParser.Ufixed:
			case SolidityParser.BooleanLiteral:
			case SolidityParser.DecimalNumber:
			case SolidityParser.HexNumber:
			case SolidityParser.HexLiteral:
			case SolidityParser.Identifier:
			case SolidityParser.StringLiteral:
				{
				this.state = 560;
				this.simpleStatement();
				}
				break;
			case SolidityParser.T__1:
				{
				this.state = 561;
				this.match(SolidityParser.T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 565;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__3) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__20))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__47 - 32)) | (1 << (SolidityParser.T__48 - 32)) | (1 << (SolidityParser.T__49 - 32)) | (1 << (SolidityParser.T__50 - 32)) | (1 << (SolidityParser.T__51 - 32)) | (1 << (SolidityParser.T__52 - 32)) | (1 << (SolidityParser.T__53 - 32)) | (1 << (SolidityParser.T__54 - 32)) | (1 << (SolidityParser.T__55 - 32)) | (1 << (SolidityParser.T__56 - 32)) | (1 << (SolidityParser.T__57 - 32)) | (1 << (SolidityParser.T__58 - 32)) | (1 << (SolidityParser.T__59 - 32)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)) | (1 << (SolidityParser.BooleanLiteral - 91)) | (1 << (SolidityParser.DecimalNumber - 91)) | (1 << (SolidityParser.HexNumber - 91)) | (1 << (SolidityParser.HexLiteral - 91)) | (1 << (SolidityParser.Identifier - 91)) | (1 << (SolidityParser.StringLiteral - 91)))) !== 0)) {
				{
				this.state = 564;
				this.expression(0);
				}
			}

			this.state = 567;
			this.match(SolidityParser.T__1);
			this.state = 569;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__3) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__20))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__47 - 32)) | (1 << (SolidityParser.T__48 - 32)) | (1 << (SolidityParser.T__49 - 32)) | (1 << (SolidityParser.T__50 - 32)) | (1 << (SolidityParser.T__51 - 32)) | (1 << (SolidityParser.T__52 - 32)) | (1 << (SolidityParser.T__53 - 32)) | (1 << (SolidityParser.T__54 - 32)) | (1 << (SolidityParser.T__55 - 32)) | (1 << (SolidityParser.T__56 - 32)) | (1 << (SolidityParser.T__57 - 32)) | (1 << (SolidityParser.T__58 - 32)) | (1 << (SolidityParser.T__59 - 32)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)) | (1 << (SolidityParser.BooleanLiteral - 91)) | (1 << (SolidityParser.DecimalNumber - 91)) | (1 << (SolidityParser.HexNumber - 91)) | (1 << (SolidityParser.HexLiteral - 91)) | (1 << (SolidityParser.Identifier - 91)) | (1 << (SolidityParser.StringLiteral - 91)))) !== 0)) {
				{
				this.state = 568;
				this.expression(0);
				}
			}

			this.state = 571;
			this.match(SolidityParser.T__21);
			this.state = 572;
			this.statement();
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
	public inlineAssemblyStatement(): InlineAssemblyStatementContext {
		let _localctx: InlineAssemblyStatementContext = new InlineAssemblyStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, SolidityParser.RULE_inlineAssemblyStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 574;
			this.match(SolidityParser.T__42);
			this.state = 576;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.StringLiteral) {
				{
				this.state = 575;
				this.match(SolidityParser.StringLiteral);
				}
			}

			this.state = 578;
			this.assemblyBlock();
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
	public doWhileStatement(): DoWhileStatementContext {
		let _localctx: DoWhileStatementContext = new DoWhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, SolidityParser.RULE_doWhileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 580;
			this.match(SolidityParser.T__43);
			this.state = 581;
			this.statement();
			this.state = 582;
			this.match(SolidityParser.T__41);
			this.state = 583;
			this.match(SolidityParser.T__20);
			this.state = 584;
			this.expression(0);
			this.state = 585;
			this.match(SolidityParser.T__21);
			this.state = 586;
			this.match(SolidityParser.T__1);
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
	public continueStatement(): ContinueStatementContext {
		let _localctx: ContinueStatementContext = new ContinueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, SolidityParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 588;
			this.match(SolidityParser.ContinueKeyword);
			this.state = 589;
			this.match(SolidityParser.T__1);
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
	public breakStatement(): BreakStatementContext {
		let _localctx: BreakStatementContext = new BreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, SolidityParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 591;
			this.match(SolidityParser.BreakKeyword);
			this.state = 592;
			this.match(SolidityParser.T__1);
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
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, SolidityParser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 594;
			this.match(SolidityParser.T__44);
			this.state = 596;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__3) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__20))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__47 - 32)) | (1 << (SolidityParser.T__48 - 32)) | (1 << (SolidityParser.T__49 - 32)) | (1 << (SolidityParser.T__50 - 32)) | (1 << (SolidityParser.T__51 - 32)) | (1 << (SolidityParser.T__52 - 32)) | (1 << (SolidityParser.T__53 - 32)) | (1 << (SolidityParser.T__54 - 32)) | (1 << (SolidityParser.T__55 - 32)) | (1 << (SolidityParser.T__56 - 32)) | (1 << (SolidityParser.T__57 - 32)) | (1 << (SolidityParser.T__58 - 32)) | (1 << (SolidityParser.T__59 - 32)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)) | (1 << (SolidityParser.BooleanLiteral - 91)) | (1 << (SolidityParser.DecimalNumber - 91)) | (1 << (SolidityParser.HexNumber - 91)) | (1 << (SolidityParser.HexLiteral - 91)) | (1 << (SolidityParser.Identifier - 91)) | (1 << (SolidityParser.StringLiteral - 91)))) !== 0)) {
				{
				this.state = 595;
				this.expression(0);
				}
			}

			this.state = 598;
			this.match(SolidityParser.T__1);
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
	public throwStatement(): ThrowStatementContext {
		let _localctx: ThrowStatementContext = new ThrowStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, SolidityParser.RULE_throwStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 600;
			this.match(SolidityParser.T__45);
			this.state = 601;
			this.match(SolidityParser.T__1);
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
	public emitStatement(): EmitStatementContext {
		let _localctx: EmitStatementContext = new EmitStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, SolidityParser.RULE_emitStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 603;
			this.match(SolidityParser.T__46);
			this.state = 604;
			this.functionCall();
			this.state = 605;
			this.match(SolidityParser.T__1);
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
	public variableDeclarationStatement(): VariableDeclarationStatementContext {
		let _localctx: VariableDeclarationStatementContext = new VariableDeclarationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, SolidityParser.RULE_variableDeclarationStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 614;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				{
				this.state = 607;
				this.match(SolidityParser.T__47);
				this.state = 608;
				this.identifierList();
				}
				break;

			case 2:
				{
				this.state = 609;
				this.variableDeclaration();
				}
				break;

			case 3:
				{
				this.state = 610;
				this.match(SolidityParser.T__20);
				this.state = 611;
				this.variableDeclarationList();
				this.state = 612;
				this.match(SolidityParser.T__21);
				}
				break;
			}
			this.state = 618;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__8) {
				{
				this.state = 616;
				this.match(SolidityParser.T__8);
				this.state = 617;
				this.expression(0);
				}
			}

			this.state = 620;
			this.match(SolidityParser.T__1);
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
	public variableDeclarationList(): VariableDeclarationListContext {
		let _localctx: VariableDeclarationListContext = new VariableDeclarationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, SolidityParser.RULE_variableDeclarationList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 623;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__12 || _la === SolidityParser.T__27 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SolidityParser.T__34 - 35)) | (1 << (SolidityParser.T__47 - 35)) | (1 << (SolidityParser.T__48 - 35)) | (1 << (SolidityParser.T__49 - 35)) | (1 << (SolidityParser.T__50 - 35)) | (1 << (SolidityParser.T__51 - 35)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)) | (1 << (SolidityParser.Identifier - 91)))) !== 0)) {
				{
				this.state = 622;
				this.variableDeclaration();
				}
			}

			this.state = 631;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__14) {
				{
				{
				this.state = 625;
				this.match(SolidityParser.T__14);
				this.state = 627;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__12 || _la === SolidityParser.T__27 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SolidityParser.T__34 - 35)) | (1 << (SolidityParser.T__47 - 35)) | (1 << (SolidityParser.T__48 - 35)) | (1 << (SolidityParser.T__49 - 35)) | (1 << (SolidityParser.T__50 - 35)) | (1 << (SolidityParser.T__51 - 35)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)) | (1 << (SolidityParser.Identifier - 91)))) !== 0)) {
					{
					this.state = 626;
					this.variableDeclaration();
					}
				}

				}
				}
				this.state = 633;
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
	public identifierList(): IdentifierListContext {
		let _localctx: IdentifierListContext = new IdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, SolidityParser.RULE_identifierList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 634;
			this.match(SolidityParser.T__20);
			this.state = 641;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 636;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SolidityParser.T__12 || _la === SolidityParser.Identifier) {
						{
						this.state = 635;
						this.identifier();
						}
					}

					this.state = 638;
					this.match(SolidityParser.T__14);
					}
					}
				}
				this.state = 643;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
			}
			this.state = 645;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__12 || _la === SolidityParser.Identifier) {
				{
				this.state = 644;
				this.identifier();
				}
			}

			this.state = 647;
			this.match(SolidityParser.T__21);
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
	public elementaryTypeName(): ElementaryTypeNameContext {
		let _localctx: ElementaryTypeNameContext = new ElementaryTypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, SolidityParser.RULE_elementaryTypeName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 649;
			_la = this._input.LA(1);
			if (!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (SolidityParser.T__47 - 48)) | (1 << (SolidityParser.T__48 - 48)) | (1 << (SolidityParser.T__49 - 48)) | (1 << (SolidityParser.T__50 - 48)) | (1 << (SolidityParser.T__51 - 48)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)))) !== 0))) {
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

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 110;
		this.enterRecursionRule(_localctx, 110, SolidityParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 669;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				{
				this.state = 652;
				this.match(SolidityParser.T__54);
				this.state = 653;
				this.typeName(0);
				}
				break;

			case 2:
				{
				this.state = 654;
				this.match(SolidityParser.T__20);
				this.state = 655;
				this.expression(0);
				this.state = 656;
				this.match(SolidityParser.T__21);
				}
				break;

			case 3:
				{
				this.state = 658;
				_la = this._input.LA(1);
				if (!(_la === SolidityParser.T__52 || _la === SolidityParser.T__53)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 659;
				this.expression(19);
				}
				break;

			case 4:
				{
				this.state = 660;
				_la = this._input.LA(1);
				if (!(_la === SolidityParser.T__55 || _la === SolidityParser.T__56)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 661;
				this.expression(18);
				}
				break;

			case 5:
				{
				this.state = 662;
				_la = this._input.LA(1);
				if (!(_la === SolidityParser.T__57 || _la === SolidityParser.T__58)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 663;
				this.expression(17);
				}
				break;

			case 6:
				{
				this.state = 664;
				this.match(SolidityParser.T__59);
				this.state = 665;
				this.expression(16);
				}
				break;

			case 7:
				{
				this.state = 666;
				this.match(SolidityParser.T__3);
				this.state = 667;
				this.expression(15);
				}
				break;

			case 8:
				{
				this.state = 668;
				this.primaryExpression();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 730;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 728;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 671;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 672;
						this.match(SolidityParser.T__60);
						this.state = 673;
						this.expression(15);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 674;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 675;
						_la = this._input.LA(1);
						if (!(_la === SolidityParser.T__11 || _la === SolidityParser.T__61 || _la === SolidityParser.T__62)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 676;
						this.expression(14);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 677;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 678;
						_la = this._input.LA(1);
						if (!(_la === SolidityParser.T__55 || _la === SolidityParser.T__56)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 679;
						this.expression(13);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 680;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 681;
						_la = this._input.LA(1);
						if (!(_la === SolidityParser.T__63 || _la === SolidityParser.T__64)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 682;
						this.expression(12);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 683;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 684;
						this.match(SolidityParser.T__65);
						this.state = 685;
						this.expression(11);
						}
						break;

					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 686;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 687;
						this.match(SolidityParser.T__2);
						this.state = 688;
						this.expression(10);
						}
						break;

					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 689;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 690;
						this.match(SolidityParser.T__66);
						this.state = 691;
						this.expression(9);
						}
						break;

					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 692;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 693;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__4) | (1 << SolidityParser.T__5) | (1 << SolidityParser.T__6) | (1 << SolidityParser.T__7))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 694;
						this.expression(8);
						}
						break;

					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 695;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 696;
						_la = this._input.LA(1);
						if (!(_la === SolidityParser.T__67 || _la === SolidityParser.T__68)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 697;
						this.expression(7);
						}
						break;

					case 10:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 698;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 699;
						this.match(SolidityParser.T__69);
						this.state = 700;
						this.expression(6);
						}
						break;

					case 11:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 701;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 702;
						this.match(SolidityParser.T__70);
						this.state = 703;
						this.expression(5);
						}
						break;

					case 12:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 704;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 705;
						this.match(SolidityParser.T__71);
						this.state = 706;
						this.expression(0);
						this.state = 707;
						this.match(SolidityParser.T__72);
						this.state = 708;
						this.expression(4);
						}
						break;

					case 13:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 710;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 711;
						_la = this._input.LA(1);
						if (!(_la === SolidityParser.T__8 || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (SolidityParser.T__73 - 74)) | (1 << (SolidityParser.T__74 - 74)) | (1 << (SolidityParser.T__75 - 74)) | (1 << (SolidityParser.T__76 - 74)) | (1 << (SolidityParser.T__77 - 74)) | (1 << (SolidityParser.T__78 - 74)) | (1 << (SolidityParser.T__79 - 74)) | (1 << (SolidityParser.T__80 - 74)) | (1 << (SolidityParser.T__81 - 74)) | (1 << (SolidityParser.T__82 - 74)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 712;
						this.expression(3);
						}
						break;

					case 14:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 713;
						if (!(this.precpred(this._ctx, 25))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 25)");
						}
						this.state = 714;
						_la = this._input.LA(1);
						if (!(_la === SolidityParser.T__52 || _la === SolidityParser.T__53)) {
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

					case 15:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 715;
						if (!(this.precpred(this._ctx, 23))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 23)");
						}
						this.state = 716;
						this.match(SolidityParser.T__31);
						this.state = 717;
						this.expression(0);
						this.state = 718;
						this.match(SolidityParser.T__32);
						}
						break;

					case 16:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 720;
						if (!(this.precpred(this._ctx, 22))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 22)");
						}
						this.state = 721;
						this.match(SolidityParser.T__20);
						this.state = 722;
						this.functionCallArguments();
						this.state = 723;
						this.match(SolidityParser.T__21);
						}
						break;

					case 17:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 725;
						if (!(this.precpred(this._ctx, 21))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 21)");
						}
						this.state = 726;
						this.match(SolidityParser.T__33);
						this.state = 727;
						this.identifier();
						}
						break;
					}
					}
				}
				this.state = 732;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryExpression(): PrimaryExpressionContext {
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, SolidityParser.RULE_primaryExpression);
		try {
			this.state = 740;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.BooleanLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 733;
				this.match(SolidityParser.BooleanLiteral);
				}
				break;
			case SolidityParser.DecimalNumber:
			case SolidityParser.HexNumber:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 734;
				this.numberLiteral();
				}
				break;
			case SolidityParser.HexLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 735;
				this.match(SolidityParser.HexLiteral);
				}
				break;
			case SolidityParser.StringLiteral:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 736;
				this.match(SolidityParser.StringLiteral);
				}
				break;
			case SolidityParser.T__12:
			case SolidityParser.Identifier:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 737;
				this.identifier();
				}
				break;
			case SolidityParser.T__20:
			case SolidityParser.T__31:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 738;
				this.tupleExpression();
				}
				break;
			case SolidityParser.T__47:
			case SolidityParser.T__48:
			case SolidityParser.T__49:
			case SolidityParser.T__50:
			case SolidityParser.T__51:
			case SolidityParser.Int:
			case SolidityParser.Uint:
			case SolidityParser.Byte:
			case SolidityParser.Fixed:
			case SolidityParser.Ufixed:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 739;
				this.elementaryTypeNameExpression();
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
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, SolidityParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 742;
			this.expression(0);
			this.state = 747;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__14) {
				{
				{
				this.state = 743;
				this.match(SolidityParser.T__14);
				this.state = 744;
				this.expression(0);
				}
				}
				this.state = 749;
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
	public nameValueList(): NameValueListContext {
		let _localctx: NameValueListContext = new NameValueListContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, SolidityParser.RULE_nameValueList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 750;
			this.nameValue();
			this.state = 755;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 751;
					this.match(SolidityParser.T__14);
					this.state = 752;
					this.nameValue();
					}
					}
				}
				this.state = 757;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
			}
			this.state = 759;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__14) {
				{
				this.state = 758;
				this.match(SolidityParser.T__14);
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
	public nameValue(): NameValueContext {
		let _localctx: NameValueContext = new NameValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, SolidityParser.RULE_nameValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 761;
			this.identifier();
			this.state = 762;
			this.match(SolidityParser.T__72);
			this.state = 763;
			this.expression(0);
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
	public functionCallArguments(): FunctionCallArgumentsContext {
		let _localctx: FunctionCallArgumentsContext = new FunctionCallArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, SolidityParser.RULE_functionCallArguments);
		let _la: number;
		try {
			this.state = 773;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__13:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 765;
				this.match(SolidityParser.T__13);
				this.state = 767;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__12 || _la === SolidityParser.Identifier) {
					{
					this.state = 766;
					this.nameValueList();
					}
				}

				this.state = 769;
				this.match(SolidityParser.T__15);
				}
				break;
			case SolidityParser.T__3:
			case SolidityParser.T__12:
			case SolidityParser.T__20:
			case SolidityParser.T__21:
			case SolidityParser.T__31:
			case SolidityParser.T__47:
			case SolidityParser.T__48:
			case SolidityParser.T__49:
			case SolidityParser.T__50:
			case SolidityParser.T__51:
			case SolidityParser.T__52:
			case SolidityParser.T__53:
			case SolidityParser.T__54:
			case SolidityParser.T__55:
			case SolidityParser.T__56:
			case SolidityParser.T__57:
			case SolidityParser.T__58:
			case SolidityParser.T__59:
			case SolidityParser.Int:
			case SolidityParser.Uint:
			case SolidityParser.Byte:
			case SolidityParser.Fixed:
			case SolidityParser.Ufixed:
			case SolidityParser.BooleanLiteral:
			case SolidityParser.DecimalNumber:
			case SolidityParser.HexNumber:
			case SolidityParser.HexLiteral:
			case SolidityParser.Identifier:
			case SolidityParser.StringLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 771;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__3) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__20))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__47 - 32)) | (1 << (SolidityParser.T__48 - 32)) | (1 << (SolidityParser.T__49 - 32)) | (1 << (SolidityParser.T__50 - 32)) | (1 << (SolidityParser.T__51 - 32)) | (1 << (SolidityParser.T__52 - 32)) | (1 << (SolidityParser.T__53 - 32)) | (1 << (SolidityParser.T__54 - 32)) | (1 << (SolidityParser.T__55 - 32)) | (1 << (SolidityParser.T__56 - 32)) | (1 << (SolidityParser.T__57 - 32)) | (1 << (SolidityParser.T__58 - 32)) | (1 << (SolidityParser.T__59 - 32)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)) | (1 << (SolidityParser.BooleanLiteral - 91)) | (1 << (SolidityParser.DecimalNumber - 91)) | (1 << (SolidityParser.HexNumber - 91)) | (1 << (SolidityParser.HexLiteral - 91)) | (1 << (SolidityParser.Identifier - 91)) | (1 << (SolidityParser.StringLiteral - 91)))) !== 0)) {
					{
					this.state = 770;
					this.expressionList();
					}
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
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, SolidityParser.RULE_functionCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 775;
			this.expression(0);
			this.state = 776;
			this.match(SolidityParser.T__20);
			this.state = 777;
			this.functionCallArguments();
			this.state = 778;
			this.match(SolidityParser.T__21);
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
	public assemblyBlock(): AssemblyBlockContext {
		let _localctx: AssemblyBlockContext = new AssemblyBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, SolidityParser.RULE_assemblyBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 780;
			this.match(SolidityParser.T__13);
			this.state = 784;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__12) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__20) | (1 << SolidityParser.T__23) | (1 << SolidityParser.T__27))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (SolidityParser.T__39 - 40)) | (1 << (SolidityParser.T__42 - 40)) | (1 << (SolidityParser.T__44 - 40)) | (1 << (SolidityParser.T__48 - 40)) | (1 << (SolidityParser.T__51 - 40)))) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & ((1 << (SolidityParser.T__83 - 84)) | (1 << (SolidityParser.T__85 - 84)) | (1 << (SolidityParser.T__86 - 84)) | (1 << (SolidityParser.DecimalNumber - 84)) | (1 << (SolidityParser.HexNumber - 84)) | (1 << (SolidityParser.HexLiteral - 84)) | (1 << (SolidityParser.BreakKeyword - 84)) | (1 << (SolidityParser.ContinueKeyword - 84)) | (1 << (SolidityParser.Identifier - 84)))) !== 0) || _la === SolidityParser.StringLiteral) {
				{
				{
				this.state = 781;
				this.assemblyItem();
				}
				}
				this.state = 786;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 787;
			this.match(SolidityParser.T__15);
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
	public assemblyItem(): AssemblyItemContext {
		let _localctx: AssemblyItemContext = new AssemblyItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, SolidityParser.RULE_assemblyItem);
		try {
			this.state = 806;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 789;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 790;
				this.assemblyBlock();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 791;
				this.assemblyExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 792;
				this.assemblyLocalDefinition();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 793;
				this.assemblyAssignment();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 794;
				this.assemblyStackAssignment();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 795;
				this.labelDefinition();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 796;
				this.assemblySwitch();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 797;
				this.assemblyFunctionDefinition();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 798;
				this.assemblyFor();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 799;
				this.assemblyIf();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 800;
				this.match(SolidityParser.BreakKeyword);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 801;
				this.match(SolidityParser.ContinueKeyword);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 802;
				this.subAssembly();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 803;
				this.numberLiteral();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 804;
				this.match(SolidityParser.StringLiteral);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 805;
				this.match(SolidityParser.HexLiteral);
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
	public assemblyExpression(): AssemblyExpressionContext {
		let _localctx: AssemblyExpressionContext = new AssemblyExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, SolidityParser.RULE_assemblyExpression);
		try {
			this.state = 810;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__12:
			case SolidityParser.T__44:
			case SolidityParser.T__48:
			case SolidityParser.T__51:
			case SolidityParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 808;
				this.assemblyCall();
				}
				break;
			case SolidityParser.DecimalNumber:
			case SolidityParser.HexNumber:
			case SolidityParser.HexLiteral:
			case SolidityParser.StringLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 809;
				this.assemblyLiteral();
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
	public assemblyCall(): AssemblyCallContext {
		let _localctx: AssemblyCallContext = new AssemblyCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, SolidityParser.RULE_assemblyCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 816;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__44:
				{
				this.state = 812;
				this.match(SolidityParser.T__44);
				}
				break;
			case SolidityParser.T__48:
				{
				this.state = 813;
				this.match(SolidityParser.T__48);
				}
				break;
			case SolidityParser.T__51:
				{
				this.state = 814;
				this.match(SolidityParser.T__51);
				}
				break;
			case SolidityParser.T__12:
			case SolidityParser.Identifier:
				{
				this.state = 815;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 830;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				{
				this.state = 818;
				this.match(SolidityParser.T__20);
				this.state = 820;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__12 || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (SolidityParser.T__44 - 45)) | (1 << (SolidityParser.T__48 - 45)) | (1 << (SolidityParser.T__51 - 45)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (SolidityParser.DecimalNumber - 98)) | (1 << (SolidityParser.HexNumber - 98)) | (1 << (SolidityParser.HexLiteral - 98)) | (1 << (SolidityParser.Identifier - 98)) | (1 << (SolidityParser.StringLiteral - 98)))) !== 0)) {
					{
					this.state = 819;
					this.assemblyExpression();
					}
				}

				this.state = 826;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__14) {
					{
					{
					this.state = 822;
					this.match(SolidityParser.T__14);
					this.state = 823;
					this.assemblyExpression();
					}
					}
					this.state = 828;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 829;
				this.match(SolidityParser.T__21);
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
	public assemblyLocalDefinition(): AssemblyLocalDefinitionContext {
		let _localctx: AssemblyLocalDefinitionContext = new AssemblyLocalDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, SolidityParser.RULE_assemblyLocalDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 832;
			this.match(SolidityParser.T__83);
			this.state = 833;
			this.assemblyIdentifierOrList();
			this.state = 836;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__84) {
				{
				this.state = 834;
				this.match(SolidityParser.T__84);
				this.state = 835;
				this.assemblyExpression();
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
	public assemblyAssignment(): AssemblyAssignmentContext {
		let _localctx: AssemblyAssignmentContext = new AssemblyAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, SolidityParser.RULE_assemblyAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 838;
			this.assemblyIdentifierOrList();
			this.state = 839;
			this.match(SolidityParser.T__84);
			this.state = 840;
			this.assemblyExpression();
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
	public assemblyIdentifierOrList(): AssemblyIdentifierOrListContext {
		let _localctx: AssemblyIdentifierOrListContext = new AssemblyIdentifierOrListContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, SolidityParser.RULE_assemblyIdentifierOrList);
		try {
			this.state = 847;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__12:
			case SolidityParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 842;
				this.identifier();
				}
				break;
			case SolidityParser.T__20:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 843;
				this.match(SolidityParser.T__20);
				this.state = 844;
				this.assemblyIdentifierList();
				this.state = 845;
				this.match(SolidityParser.T__21);
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
	public assemblyIdentifierList(): AssemblyIdentifierListContext {
		let _localctx: AssemblyIdentifierListContext = new AssemblyIdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, SolidityParser.RULE_assemblyIdentifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 849;
			this.identifier();
			this.state = 854;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__14) {
				{
				{
				this.state = 850;
				this.match(SolidityParser.T__14);
				this.state = 851;
				this.identifier();
				}
				}
				this.state = 856;
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
	public assemblyStackAssignment(): AssemblyStackAssignmentContext {
		let _localctx: AssemblyStackAssignmentContext = new AssemblyStackAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, SolidityParser.RULE_assemblyStackAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 857;
			this.match(SolidityParser.T__85);
			this.state = 858;
			this.identifier();
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
	public labelDefinition(): LabelDefinitionContext {
		let _localctx: LabelDefinitionContext = new LabelDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, SolidityParser.RULE_labelDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 860;
			this.identifier();
			this.state = 861;
			this.match(SolidityParser.T__72);
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
	public assemblySwitch(): AssemblySwitchContext {
		let _localctx: AssemblySwitchContext = new AssemblySwitchContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, SolidityParser.RULE_assemblySwitch);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 863;
			this.match(SolidityParser.T__86);
			this.state = 864;
			this.assemblyExpression();
			this.state = 868;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__87 || _la === SolidityParser.T__88) {
				{
				{
				this.state = 865;
				this.assemblyCase();
				}
				}
				this.state = 870;
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
	public assemblyCase(): AssemblyCaseContext {
		let _localctx: AssemblyCaseContext = new AssemblyCaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, SolidityParser.RULE_assemblyCase);
		try {
			this.state = 877;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__87:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 871;
				this.match(SolidityParser.T__87);
				this.state = 872;
				this.assemblyLiteral();
				this.state = 873;
				this.assemblyBlock();
				}
				break;
			case SolidityParser.T__88:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 875;
				this.match(SolidityParser.T__88);
				this.state = 876;
				this.assemblyBlock();
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
	public assemblyFunctionDefinition(): AssemblyFunctionDefinitionContext {
		let _localctx: AssemblyFunctionDefinitionContext = new AssemblyFunctionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, SolidityParser.RULE_assemblyFunctionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 879;
			this.match(SolidityParser.T__27);
			this.state = 880;
			this.identifier();
			this.state = 881;
			this.match(SolidityParser.T__20);
			this.state = 883;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__12 || _la === SolidityParser.Identifier) {
				{
				this.state = 882;
				this.assemblyIdentifierList();
				}
			}

			this.state = 885;
			this.match(SolidityParser.T__21);
			this.state = 887;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__89) {
				{
				this.state = 886;
				this.assemblyFunctionReturns();
				}
			}

			this.state = 889;
			this.assemblyBlock();
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
	public assemblyFunctionReturns(): AssemblyFunctionReturnsContext {
		let _localctx: AssemblyFunctionReturnsContext = new AssemblyFunctionReturnsContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, SolidityParser.RULE_assemblyFunctionReturns);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 891;
			this.match(SolidityParser.T__89);
			this.state = 892;
			this.assemblyIdentifierList();
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
	public assemblyFor(): AssemblyForContext {
		let _localctx: AssemblyForContext = new AssemblyForContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, SolidityParser.RULE_assemblyFor);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 894;
			this.match(SolidityParser.T__23);
			this.state = 897;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__13:
				{
				this.state = 895;
				this.assemblyBlock();
				}
				break;
			case SolidityParser.T__12:
			case SolidityParser.T__44:
			case SolidityParser.T__48:
			case SolidityParser.T__51:
			case SolidityParser.DecimalNumber:
			case SolidityParser.HexNumber:
			case SolidityParser.HexLiteral:
			case SolidityParser.Identifier:
			case SolidityParser.StringLiteral:
				{
				this.state = 896;
				this.assemblyExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 899;
			this.assemblyExpression();
			this.state = 902;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__13:
				{
				this.state = 900;
				this.assemblyBlock();
				}
				break;
			case SolidityParser.T__12:
			case SolidityParser.T__44:
			case SolidityParser.T__48:
			case SolidityParser.T__51:
			case SolidityParser.DecimalNumber:
			case SolidityParser.HexNumber:
			case SolidityParser.HexLiteral:
			case SolidityParser.Identifier:
			case SolidityParser.StringLiteral:
				{
				this.state = 901;
				this.assemblyExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 904;
			this.assemblyBlock();
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
	public assemblyIf(): AssemblyIfContext {
		let _localctx: AssemblyIfContext = new AssemblyIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, SolidityParser.RULE_assemblyIf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 906;
			this.match(SolidityParser.T__39);
			this.state = 907;
			this.assemblyExpression();
			this.state = 908;
			this.assemblyBlock();
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
	public assemblyLiteral(): AssemblyLiteralContext {
		let _localctx: AssemblyLiteralContext = new AssemblyLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, SolidityParser.RULE_assemblyLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 910;
			_la = this._input.LA(1);
			if (!(((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (SolidityParser.DecimalNumber - 98)) | (1 << (SolidityParser.HexNumber - 98)) | (1 << (SolidityParser.HexLiteral - 98)) | (1 << (SolidityParser.StringLiteral - 98)))) !== 0))) {
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
	public subAssembly(): SubAssemblyContext {
		let _localctx: SubAssemblyContext = new SubAssemblyContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, SolidityParser.RULE_subAssembly);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 912;
			this.match(SolidityParser.T__42);
			this.state = 913;
			this.identifier();
			this.state = 914;
			this.assemblyBlock();
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
	public tupleExpression(): TupleExpressionContext {
		let _localctx: TupleExpressionContext = new TupleExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, SolidityParser.RULE_tupleExpression);
		let _la: number;
		try {
			this.state = 942;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__20:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 916;
				this.match(SolidityParser.T__20);
				{
				this.state = 918;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__3) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__20))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__47 - 32)) | (1 << (SolidityParser.T__48 - 32)) | (1 << (SolidityParser.T__49 - 32)) | (1 << (SolidityParser.T__50 - 32)) | (1 << (SolidityParser.T__51 - 32)) | (1 << (SolidityParser.T__52 - 32)) | (1 << (SolidityParser.T__53 - 32)) | (1 << (SolidityParser.T__54 - 32)) | (1 << (SolidityParser.T__55 - 32)) | (1 << (SolidityParser.T__56 - 32)) | (1 << (SolidityParser.T__57 - 32)) | (1 << (SolidityParser.T__58 - 32)) | (1 << (SolidityParser.T__59 - 32)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)) | (1 << (SolidityParser.BooleanLiteral - 91)) | (1 << (SolidityParser.DecimalNumber - 91)) | (1 << (SolidityParser.HexNumber - 91)) | (1 << (SolidityParser.HexLiteral - 91)) | (1 << (SolidityParser.Identifier - 91)) | (1 << (SolidityParser.StringLiteral - 91)))) !== 0)) {
					{
					this.state = 917;
					this.expression(0);
					}
				}

				this.state = 926;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__14) {
					{
					{
					this.state = 920;
					this.match(SolidityParser.T__14);
					this.state = 922;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__3) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__20))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__47 - 32)) | (1 << (SolidityParser.T__48 - 32)) | (1 << (SolidityParser.T__49 - 32)) | (1 << (SolidityParser.T__50 - 32)) | (1 << (SolidityParser.T__51 - 32)) | (1 << (SolidityParser.T__52 - 32)) | (1 << (SolidityParser.T__53 - 32)) | (1 << (SolidityParser.T__54 - 32)) | (1 << (SolidityParser.T__55 - 32)) | (1 << (SolidityParser.T__56 - 32)) | (1 << (SolidityParser.T__57 - 32)) | (1 << (SolidityParser.T__58 - 32)) | (1 << (SolidityParser.T__59 - 32)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)) | (1 << (SolidityParser.BooleanLiteral - 91)) | (1 << (SolidityParser.DecimalNumber - 91)) | (1 << (SolidityParser.HexNumber - 91)) | (1 << (SolidityParser.HexLiteral - 91)) | (1 << (SolidityParser.Identifier - 91)) | (1 << (SolidityParser.StringLiteral - 91)))) !== 0)) {
						{
						this.state = 921;
						this.expression(0);
						}
					}

					}
					}
					this.state = 928;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				this.state = 929;
				this.match(SolidityParser.T__21);
				}
				break;
			case SolidityParser.T__31:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 930;
				this.match(SolidityParser.T__31);
				this.state = 939;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__3) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__20))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__47 - 32)) | (1 << (SolidityParser.T__48 - 32)) | (1 << (SolidityParser.T__49 - 32)) | (1 << (SolidityParser.T__50 - 32)) | (1 << (SolidityParser.T__51 - 32)) | (1 << (SolidityParser.T__52 - 32)) | (1 << (SolidityParser.T__53 - 32)) | (1 << (SolidityParser.T__54 - 32)) | (1 << (SolidityParser.T__55 - 32)) | (1 << (SolidityParser.T__56 - 32)) | (1 << (SolidityParser.T__57 - 32)) | (1 << (SolidityParser.T__58 - 32)) | (1 << (SolidityParser.T__59 - 32)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (SolidityParser.Int - 91)) | (1 << (SolidityParser.Uint - 91)) | (1 << (SolidityParser.Byte - 91)) | (1 << (SolidityParser.Fixed - 91)) | (1 << (SolidityParser.Ufixed - 91)) | (1 << (SolidityParser.BooleanLiteral - 91)) | (1 << (SolidityParser.DecimalNumber - 91)) | (1 << (SolidityParser.HexNumber - 91)) | (1 << (SolidityParser.HexLiteral - 91)) | (1 << (SolidityParser.Identifier - 91)) | (1 << (SolidityParser.StringLiteral - 91)))) !== 0)) {
					{
					this.state = 931;
					this.expression(0);
					this.state = 936;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SolidityParser.T__14) {
						{
						{
						this.state = 932;
						this.match(SolidityParser.T__14);
						this.state = 933;
						this.expression(0);
						}
						}
						this.state = 938;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 941;
				this.match(SolidityParser.T__32);
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
	public elementaryTypeNameExpression(): ElementaryTypeNameExpressionContext {
		let _localctx: ElementaryTypeNameExpressionContext = new ElementaryTypeNameExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, SolidityParser.RULE_elementaryTypeNameExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 944;
			this.elementaryTypeName();
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
	public numberLiteral(): NumberLiteralContext {
		let _localctx: NumberLiteralContext = new NumberLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, SolidityParser.RULE_numberLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 946;
			_la = this._input.LA(1);
			if (!(_la === SolidityParser.DecimalNumber || _la === SolidityParser.HexNumber)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 948;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 101, this._ctx) ) {
			case 1:
				{
				this.state = 947;
				this.match(SolidityParser.NumberUnit);
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
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, SolidityParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 950;
			_la = this._input.LA(1);
			if (!(_la === SolidityParser.T__12 || _la === SolidityParser.Identifier)) {
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 31:
			return this.typeName_sempred(_localctx as TypeNameContext, predIndex);

		case 55:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private typeName_sempred(_localctx: TypeNameContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 14);

		case 2:
			return this.precpred(this._ctx, 13);

		case 3:
			return this.precpred(this._ctx, 12);

		case 4:
			return this.precpred(this._ctx, 11);

		case 5:
			return this.precpred(this._ctx, 10);

		case 6:
			return this.precpred(this._ctx, 9);

		case 7:
			return this.precpred(this._ctx, 8);

		case 8:
			return this.precpred(this._ctx, 7);

		case 9:
			return this.precpred(this._ctx, 6);

		case 10:
			return this.precpred(this._ctx, 5);

		case 11:
			return this.precpred(this._ctx, 4);

		case 12:
			return this.precpred(this._ctx, 3);

		case 13:
			return this.precpred(this._ctx, 2);

		case 14:
			return this.precpred(this._ctx, 25);

		case 15:
			return this.precpred(this._ctx, 23);

		case 16:
			return this.precpred(this._ctx, 22);

		case 17:
			return this.precpred(this._ctx, 21);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03y\u03BB\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x03\x02\x03\x02\x03" +
		"\x02\x07\x02\xAE\n\x02\f\x02\x0E\x02\xB1\v\x02\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x05\x05" +
		"\xBE\n\x05\x03\x06\x03\x06\x05\x06\xC2\n\x06\x03\x07\x03\x07\x03\b\x05" +
		"\b\xC7\n\b\x03\b\x03\b\x03\t\x03\t\x03\t\x05\t\xCE\n\t\x03\n\x03\n\x03" +
		"\n\x03\n\x05\n\xD4\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\xDA\n\n\x03\n\x03" +
		"\n\x05\n\xDE\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n" +
		"\xE8\n\n\f\n\x0E\n\xEB\v\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xF2\n\n" +
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\xFA\n\v\f\v\x0E\v\xFD\v\v\x05" +
		"\v\xFF\n\v\x03\v\x03\v\x07\v\u0103\n\v\f\v\x0E\v\u0106\v\v\x03\v\x03\v" +
		"\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\u010F\n\f\f\f\x0E\f\u0112\v\f\x03" +
		"\f\x03\f\x05\f\u0116\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x05\r\u0120\n\r\x03\x0E\x03\x0E\x07\x0E\u0124\n\x0E\f\x0E\x0E\x0E\u0127" +
		"\v\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u012C\n\x0E\x03\x0E\x03\x0E\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0135\n\x0F\x03\x0F\x03\x0F" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10" +
		"\u0141\n\x10\f\x10\x0E\x10\u0144\v\x10\x05\x10\u0146\n\x10\x03\x10\x03" +
		"\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x05" +
		"\x12\u0152\n\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x05\x13\u0159" +
		"\n\x13\x03\x13\x05\x13\u015C\n\x13\x03\x14\x03\x14\x05\x14\u0160\n\x14" +
		"\x03\x14\x03\x14\x03\x14\x05\x14\u0165\n\x14\x03\x14\x03\x14\x05\x14\u0169" +
		"\n\x14\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x07\x16\u0174\n\x16\f\x16\x0E\x16\u0177\v\x16\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x05\x17\u017D\n\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0187\n\x19\x03\x19\x03\x19\x07\x19" +
		"\u018B\n\x19\f\x19\x0E\x19\u018E\v\x19\x03\x19\x03\x19\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x07\x1A\u0196\n\x1A\f\x1A\x0E\x1A\u0199\v\x1A\x05\x1A" +
		"\u019B\n\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x05\x1B\u01A1\n\x1B\x03\x1B" +
		"\x05\x1B\u01A4\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u01AA\n\x1C" +
		"\f\x1C\x0E\x1C\u01AD\v\x1C\x05\x1C\u01AF\n\x1C\x03\x1C\x03\x1C\x03\x1D" +
		"\x03\x1D\x05\x1D\u01B5\n\x1D\x03\x1D\x05\x1D\u01B8\n\x1D\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x07\x1E\u01BE\n\x1E\f\x1E\x0E\x1E\u01C1\v\x1E\x05\x1E" +
		"\u01C3\n\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x05\x1F\u01C9\n\x1F\x03 " +
		"\x03 \x05 \u01CD\n \x03 \x03 \x03!\x03!\x03!\x03!\x03!\x05!\u01D6\n!\x03" +
		"!\x03!\x03!\x05!\u01DB\n!\x03!\x07!\u01DE\n!\f!\x0E!\u01E1\v!\x03\"\x03" +
		"\"\x03\"\x07\"\u01E6\n\"\f\"\x0E\"\u01E9\v\"\x03#\x03#\x03#\x03#\x03#" +
		"\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x07$\u01F7\n$\f$\x0E$\u01FA\v$\x03" +
		"$\x03$\x05$\u01FE\n$\x03%\x03%\x03&\x03&\x03\'\x03\'\x07\'\u0206\n\'\f" +
		"\'\x0E\'\u0209\v\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03" +
		"(\x03(\x03(\x03(\x03(\x05(\u0219\n(\x03)\x03)\x03)\x03*\x03*\x03*\x03" +
		"*\x03*\x03*\x03*\x05*\u0225\n*\x03+\x03+\x03+\x03+\x03+\x03+\x03,\x03" +
		",\x05,\u022F\n,\x03-\x03-\x03-\x03-\x05-\u0235\n-\x03-\x05-\u0238\n-\x03" +
		"-\x03-\x05-\u023C\n-\x03-\x03-\x03-\x03.\x03.\x05.\u0243\n.\x03.\x03." +
		"\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x030\x030\x030\x031\x031\x03" +
		"1\x032\x032\x052\u0257\n2\x032\x032\x033\x033\x033\x034\x034\x034\x03" +
		"4\x035\x035\x035\x035\x035\x035\x035\x055\u0269\n5\x035\x035\x055\u026D" +
		"\n5\x035\x035\x036\x056\u0272\n6\x036\x036\x056\u0276\n6\x076\u0278\n" +
		"6\f6\x0E6\u027B\v6\x037\x037\x057\u027F\n7\x037\x077\u0282\n7\f7\x0E7" +
		"\u0285\v7\x037\x057\u0288\n7\x037\x037\x038\x038\x039\x039\x039\x039\x03" +
		"9\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x05" +
		"9\u02A0\n9\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x03" +
		"9\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x03" +
		"9\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x03" +
		"9\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x03" +
		"9\x039\x039\x039\x079\u02DB\n9\f9\x0E9\u02DE\v9\x03:\x03:\x03:\x03:\x03" +
		":\x03:\x03:\x05:\u02E7\n:\x03;\x03;\x03;\x07;\u02EC\n;\f;\x0E;\u02EF\v" +
		";\x03<\x03<\x03<\x07<\u02F4\n<\f<\x0E<\u02F7\v<\x03<\x05<\u02FA\n<\x03" +
		"=\x03=\x03=\x03=\x03>\x03>\x05>\u0302\n>\x03>\x03>\x05>\u0306\n>\x05>" +
		"\u0308\n>\x03?\x03?\x03?\x03?\x03?\x03@\x03@\x07@\u0311\n@\f@\x0E@\u0314" +
		"\v@\x03@\x03@\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03" +
		"A\x03A\x03A\x03A\x03A\x03A\x05A\u0329\nA\x03B\x03B\x05B\u032D\nB\x03C" +
		"\x03C\x03C\x03C\x05C\u0333\nC\x03C\x03C\x05C\u0337\nC\x03C\x03C\x07C\u033B" +
		"\nC\fC\x0EC\u033E\vC\x03C\x05C\u0341\nC\x03D\x03D\x03D\x03D\x05D\u0347" +
		"\nD\x03E\x03E\x03E\x03E\x03F\x03F\x03F\x03F\x03F\x05F\u0352\nF\x03G\x03" +
		"G\x03G\x07G\u0357\nG\fG\x0EG\u035A\vG\x03H\x03H\x03H\x03I\x03I\x03I\x03" +
		"J\x03J\x03J\x07J\u0365\nJ\fJ\x0EJ\u0368\vJ\x03K\x03K\x03K\x03K\x03K\x03" +
		"K\x05K\u0370\nK\x03L\x03L\x03L\x03L\x05L\u0376\nL\x03L\x03L\x05L\u037A" +
		"\nL\x03L\x03L\x03M\x03M\x03M\x03N\x03N\x03N\x05N\u0384\nN\x03N\x03N\x03" +
		"N\x05N\u0389\nN\x03N\x03N\x03O\x03O\x03O\x03O\x03P\x03P\x03Q\x03Q\x03" +
		"Q\x03Q\x03R\x03R\x05R\u0399\nR\x03R\x03R\x05R\u039D\nR\x07R\u039F\nR\f" +
		"R\x0ER\u03A2\vR\x03R\x03R\x03R\x03R\x03R\x07R\u03A9\nR\fR\x0ER\u03AC\v" +
		"R\x05R\u03AE\nR\x03R\x05R\u03B1\nR\x03S\x03S\x03T\x03T\x05T\u03B7\nT\x03" +
		"U\x03U\x03U\x02\x02\x04@pV\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 " +
		"\x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
		"t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02" +
		"\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02" +
		"\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\x02\x13\x03\x02" +
		"\x05\v\x03\x02\x13\x15\x05\x02kkooqr\x03\x02\')\x05\x02kkppst\x04\x02" +
		"26]a\x03\x0278\x03\x02:;\x03\x02<=\x04\x02\x0E\x0E@A\x03\x02BC\x03\x02" +
		"\x07\n\x03\x02FG\x04\x02\v\vLU\x05\x02deggvv\x03\x02de\x04\x02\x0F\x0F" +
		"uu\x02\u0411\x02\xAF\x03\x02\x02\x02\x04\xB4\x03\x02\x02\x02\x06\xB9\x03" +
		"\x02\x02\x02\b\xBD\x03\x02\x02\x02\n\xBF\x03\x02\x02\x02\f\xC3\x03\x02" +
		"\x02\x02\x0E\xC6\x03\x02\x02\x02\x10\xCA\x03\x02\x02\x02\x12\xF1\x03\x02" +
		"\x02\x02\x14\xF3\x03\x02\x02\x02\x16\u0109\x03\x02\x02\x02\x18\u011F\x03" +
		"\x02\x02\x02\x1A\u0121\x03\x02\x02\x02\x1C\u012F\x03\x02\x02\x02\x1E\u0138" +
		"\x03\x02\x02\x02 \u0149\x03\x02\x02\x02\"\u014E\x03\x02\x02\x02$\u0155" +
		"\x03\x02\x02\x02&\u015D\x03\x02\x02\x02(\u016A\x03\x02\x02\x02*\u0175" +
		"\x03\x02\x02\x02,\u0178\x03\x02\x02\x02.\u0180\x03\x02\x02\x020\u0182" +
		"\x03\x02\x02\x022\u0191\x03\x02\x02\x024\u019E\x03\x02\x02\x026\u01A5" +
		"\x03\x02\x02\x028\u01B2\x03\x02\x02\x02:\u01B9\x03\x02\x02\x02<\u01C6" +
		"\x03\x02\x02\x02>\u01CA\x03\x02\x02\x02@\u01D5\x03\x02\x02\x02B\u01E2" +
		"\x03\x02\x02\x02D\u01EA\x03\x02\x02\x02F\u01F1\x03\x02\x02\x02H\u01FF" +
		"\x03\x02\x02\x02J\u0201\x03\x02\x02\x02L\u0203\x03\x02\x02\x02N\u0218" +
		"\x03\x02\x02\x02P\u021A\x03\x02\x02\x02R\u021D\x03\x02\x02\x02T\u0226" +
		"\x03\x02\x02\x02V\u022E\x03\x02\x02\x02X\u0230\x03\x02\x02\x02Z\u0240" +
		"\x03\x02\x02\x02\\\u0246\x03\x02\x02\x02^\u024E\x03\x02\x02\x02`\u0251" +
		"\x03\x02\x02\x02b\u0254\x03\x02\x02\x02d\u025A\x03\x02\x02\x02f\u025D" +
		"\x03\x02\x02\x02h\u0268\x03\x02\x02\x02j\u0271\x03\x02\x02\x02l\u027C" +
		"\x03\x02\x02\x02n\u028B\x03\x02\x02\x02p\u029F\x03\x02\x02\x02r\u02E6" +
		"\x03\x02\x02\x02t\u02E8\x03\x02\x02\x02v\u02F0\x03\x02\x02\x02x\u02FB" +
		"\x03\x02\x02\x02z\u0307\x03\x02\x02\x02|\u0309\x03\x02\x02\x02~\u030E" +
		"\x03\x02\x02\x02\x80\u0328\x03\x02\x02\x02\x82\u032C\x03\x02\x02\x02\x84" +
		"\u0332\x03\x02\x02\x02\x86\u0342\x03\x02\x02\x02\x88\u0348\x03\x02\x02" +
		"\x02\x8A\u0351\x03\x02\x02\x02\x8C\u0353\x03\x02\x02\x02\x8E\u035B\x03" +
		"\x02\x02\x02\x90\u035E\x03\x02\x02\x02\x92\u0361\x03\x02\x02\x02\x94\u036F" +
		"\x03\x02\x02\x02\x96\u0371\x03\x02\x02\x02\x98\u037D\x03\x02\x02\x02\x9A" +
		"\u0380\x03\x02\x02\x02\x9C\u038C\x03\x02\x02\x02\x9E\u0390\x03\x02\x02" +
		"\x02\xA0\u0392\x03\x02\x02\x02\xA2\u03B0\x03\x02\x02\x02\xA4\u03B2\x03" +
		"\x02\x02\x02\xA6\u03B4\x03\x02\x02\x02\xA8\u03B8\x03\x02\x02\x02\xAA\xAE" +
		"\x05\x04\x03\x02\xAB\xAE\x05\x12\n\x02\xAC\xAE\x05\x14\v\x02\xAD\xAA\x03" +
		"\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\xAD\xAC\x03\x02\x02\x02\xAE\xB1\x03" +
		"\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB2\x03" +
		"\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB2\xB3\x07\x02\x02\x03\xB3\x03\x03" +
		"\x02\x02\x02\xB4\xB5\x07\x03\x02\x02\xB5\xB6\x05\x06\x04\x02\xB6\xB7\x05" +
		"\b\x05\x02\xB7\xB8\x07\x04\x02\x02\xB8\x05\x03\x02\x02\x02\xB9\xBA\x05" +
		"\xA8U\x02\xBA\x07\x03\x02\x02\x02\xBB\xBE\x05\n\x06\x02\xBC\xBE\x05p9" +
		"\x02\xBD\xBB\x03\x02\x02\x02\xBD\xBC\x03\x02\x02\x02\xBE\t\x03\x02\x02" +
		"\x02\xBF\xC1\x05\x0E\b\x02\xC0\xC2\x05\x0E\b\x02\xC1\xC0\x03\x02\x02\x02" +
		"\xC1\xC2\x03\x02\x02\x02\xC2\v\x03\x02\x02\x02\xC3\xC4\t\x02\x02\x02\xC4" +
		"\r\x03\x02\x02\x02\xC5\xC7\x05\f\x07\x02\xC6\xC5\x03\x02\x02\x02\xC6\xC7" +
		"\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\xC9\x07b\x02\x02\xC9\x0F" +
		"\x03\x02\x02\x02\xCA\xCD\x05\xA8U\x02\xCB\xCC\x07\f\x02\x02\xCC\xCE\x05" +
		"\xA8U\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\x11\x03" +
		"\x02\x02\x02\xCF\xD0\x07\r\x02\x02\xD0\xD3\x07v\x02\x02\xD1\xD2\x07\f" +
		"\x02\x02\xD2\xD4\x05\xA8U\x02\xD3\xD1\x03\x02\x02\x02\xD3\xD4\x03\x02" +
		"\x02\x02\xD4\xD5\x03\x02\x02\x02\xD5\xF2\x07\x04\x02\x02\xD6\xD9\x07\r" +
		"\x02\x02\xD7\xDA\x07\x0E\x02\x02\xD8\xDA\x05\xA8U\x02\xD9\xD7\x03\x02" +
		"\x02\x02\xD9\xD8\x03\x02\x02\x02\xDA\xDD\x03\x02\x02\x02\xDB\xDC\x07\f" +
		"\x02\x02\xDC\xDE\x05\xA8U\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02" +
		"\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE0\x07\x0F\x02\x02\xE0\xE1\x07v" +
		"\x02\x02\xE1\xF2\x07\x04\x02\x02\xE2\xE3\x07\r\x02\x02\xE3\xE4\x07\x10" +
		"\x02\x02\xE4\xE9\x05\x10\t\x02\xE5\xE6\x07\x11\x02\x02\xE6\xE8\x05\x10" +
		"\t\x02\xE7\xE5\x03\x02\x02\x02\xE8\xEB\x03\x02\x02\x02\xE9\xE7\x03\x02" +
		"\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA\xEC\x03\x02\x02\x02\xEB\xE9\x03\x02" +
		"\x02\x02\xEC\xED\x07\x12\x02\x02\xED\xEE\x07\x0F\x02\x02\xEE\xEF\x07v" +
		"\x02\x02\xEF\xF0\x07\x04\x02\x02\xF0\xF2\x03\x02\x02\x02\xF1\xCF\x03\x02" +
		"\x02\x02\xF1\xD6\x03\x02\x02\x02\xF1\xE2\x03\x02\x02\x02\xF2\x13\x03\x02" +
		"\x02\x02\xF3\xF4\t\x03\x02\x02\xF4\xFE\x05\xA8U\x02\xF5\xF6\x07\x16\x02" +
		"\x02\xF6\xFB\x05\x16\f\x02\xF7\xF8\x07\x11\x02\x02\xF8\xFA\x05\x16\f\x02" +
		"\xF9\xF7\x03\x02\x02\x02\xFA\xFD\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02" +
		"\xFB\xFC\x03\x02\x02\x02\xFC\xFF\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02" +
		"\xFE\xF5\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\u0100\x03\x02\x02" +
		"\x02\u0100\u0104\x07\x10\x02\x02\u0101\u0103\x05\x18\r\x02\u0102\u0101" +
		"\x03\x02\x02\x02\u0103\u0106\x03\x02\x02\x02\u0104\u0102\x03\x02\x02\x02" +
		"\u0104\u0105\x03\x02\x02\x02\u0105\u0107\x03\x02\x02\x02\u0106\u0104\x03" +
		"\x02\x02\x02\u0107\u0108\x07\x12\x02\x02\u0108\x15\x03\x02\x02\x02\u0109" +
		"\u0115\x05B\"\x02\u010A\u010B\x07\x17\x02\x02\u010B\u0110\x05p9\x02\u010C" +
		"\u010D\x07\x11\x02\x02\u010D\u010F\x05p9\x02\u010E\u010C\x03\x02\x02\x02" +
		"\u010F\u0112\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0110\u0111\x03" +
		"\x02\x02\x02\u0111\u0113\x03\x02\x02\x02\u0112\u0110\x03\x02\x02\x02\u0113" +
		"\u0114\x07\x18\x02\x02\u0114\u0116\x03\x02\x02\x02\u0115\u010A\x03\x02" +
		"\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116\x17\x03\x02\x02\x02\u0117\u0120" +
		"\x05\x1A\x0E\x02\u0118\u0120\x05\x1C\x0F\x02\u0119\u0120\x05\x1E\x10\x02" +
		"\u011A\u0120\x05 \x11\x02\u011B\u0120\x05\"\x12\x02\u011C\u0120\x05&\x14" +
		"\x02\u011D\u0120\x05,\x17\x02\u011E\u0120\x050\x19\x02\u011F\u0117\x03" +
		"\x02\x02\x02\u011F\u0118\x03\x02\x02\x02\u011F\u0119\x03\x02\x02\x02\u011F" +
		"\u011A\x03\x02\x02\x02\u011F\u011B\x03\x02\x02\x02\u011F\u011C\x03\x02" +
		"\x02\x02\u011F\u011D\x03\x02\x02\x02\u011F\u011E\x03\x02\x02\x02\u0120" +
		"\x19\x03\x02\x02\x02\u0121\u0125\x05@!\x02\u0122\u0124\t\x04\x02\x02\u0123" +
		"\u0122\x03\x02\x02\x02\u0124\u0127\x03\x02\x02\x02\u0125\u0123\x03\x02" +
		"\x02\x02\u0125\u0126\x03\x02\x02\x02\u0126\u0128\x03\x02\x02\x02\u0127" +
		"\u0125\x03\x02\x02\x02\u0128\u012B\x05\xA8U\x02\u0129\u012A\x07\v\x02" +
		"\x02\u012A\u012C\x05p9\x02\u012B\u0129\x03\x02\x02\x02\u012B\u012C\x03" +
		"\x02\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\u012E\x07\x04\x02\x02\u012E" +
		"\x1B\x03\x02\x02\x02\u012F\u0130\x07\x19\x02\x02\u0130\u0131\x05\xA8U" +
		"\x02\u0131\u0134\x07\x1A\x02\x02\u0132\u0135\x07\x0E\x02\x02\u0133\u0135" +
		"\x05@!\x02\u0134\u0132\x03\x02\x02\x02\u0134\u0133\x03\x02\x02\x02\u0135" +
		"\u0136\x03\x02\x02\x02\u0136\u0137\x07\x04\x02\x02\u0137\x1D\x03\x02\x02" +
		"\x02\u0138\u0139\x07\x1B\x02\x02\u0139\u013A\x05\xA8U\x02\u013A\u0145" +
		"\x07\x10\x02\x02\u013B\u013C\x05> \x02\u013C\u0142\x07\x04\x02\x02\u013D" +
		"\u013E\x05> \x02\u013E\u013F\x07\x04\x02\x02\u013F\u0141\x03\x02\x02\x02" +
		"\u0140\u013D\x03\x02\x02\x02\u0141\u0144\x03\x02\x02\x02\u0142\u0140\x03" +
		"\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u0146\x03\x02\x02\x02\u0144" +
		"\u0142\x03\x02\x02\x02\u0145\u013B\x03\x02\x02\x02\u0145\u0146\x03\x02" +
		"\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147\u0148\x07\x12\x02\x02\u0148" +
		"\x1F\x03\x02\x02\x02\u0149\u014A\x07\x1C\x02\x02\u014A\u014B\x052\x1A" +
		"\x02\u014B\u014C\x05*\x16\x02\u014C\u014D\x05L\'\x02\u014D!\x03\x02\x02" +
		"\x02\u014E\u014F\x07\x1D\x02\x02\u014F\u0151\x05\xA8U\x02\u0150\u0152" +
		"\x052\x1A\x02\u0151\u0150\x03\x02\x02\x02\u0151\u0152\x03\x02\x02\x02" +
		"\u0152\u0153\x03\x02\x02\x02\u0153\u0154\x05L\'\x02\u0154#\x03\x02\x02" +
		"\x02\u0155\u015B\x05\xA8U\x02\u0156\u0158\x07\x17\x02\x02\u0157\u0159" +
		"\x05t;\x02\u0158\u0157\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159" +
		"\u015A\x03\x02\x02\x02\u015A\u015C\x07\x18\x02\x02\u015B\u0156\x03\x02" +
		"\x02\x02\u015B\u015C\x03\x02\x02\x02\u015C%\x03\x02\x02\x02\u015D\u015F" +
		"\x07\x1E\x02\x02\u015E\u0160\x05\xA8U\x02\u015F\u015E\x03\x02\x02\x02" +
		"\u015F\u0160\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161\u0162\x05" +
		"2\x1A\x02\u0162\u0164\x05*\x16\x02\u0163\u0165\x05(\x15\x02\u0164\u0163" +
		"\x03\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165\u0168\x03\x02\x02\x02" +
		"\u0166\u0169\x07\x04\x02\x02\u0167\u0169\x05L\'\x02\u0168\u0166\x03\x02" +
		"\x02\x02\u0168\u0167\x03\x02\x02\x02\u0169\'\x03\x02\x02\x02\u016A\u016B" +
		"\x07\x1F\x02\x02\u016B\u016C\x052\x1A\x02\u016C)\x03\x02\x02\x02\u016D" +
		"\u0174\x05$\x13\x02\u016E\u0174\x05J&\x02\u016F\u0174\x07m\x02\x02\u0170" +
		"\u0174\x07r\x02\x02\u0171\u0174\x07o\x02\x02\u0172\u0174\x07q\x02\x02" +
		"\u0173\u016D\x03\x02\x02\x02\u0173\u016E\x03\x02\x02\x02\u0173\u016F\x03" +
		"\x02\x02\x02\u0173\u0170\x03\x02\x02\x02\u0173\u0171\x03\x02\x02\x02\u0173" +
		"\u0172\x03\x02\x02\x02\u0174\u0177\x03\x02\x02\x02\u0175\u0173\x03\x02" +
		"\x02\x02\u0175\u0176\x03\x02\x02\x02\u0176+\x03\x02\x02\x02\u0177\u0175" +
		"\x03\x02\x02\x02\u0178\u0179\x07 \x02\x02\u0179\u017A\x05\xA8U\x02\u017A" +
		"\u017C\x056\x1C\x02\u017B\u017D\x07i\x02\x02\u017C\u017B\x03\x02\x02\x02" +
		"\u017C\u017D\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02\u017E\u017F\x07" +
		"\x04\x02\x02\u017F-\x03\x02\x02\x02\u0180\u0181\x05\xA8U\x02\u0181/\x03" +
		"\x02\x02\x02\u0182\u0183\x07!\x02\x02\u0183\u0184\x05\xA8U\x02\u0184\u0186" +
		"\x07\x10\x02\x02\u0185\u0187\x05.\x18\x02\u0186\u0185\x03\x02\x02\x02" +
		"\u0186\u0187\x03\x02\x02\x02\u0187\u018C\x03\x02\x02\x02\u0188\u0189\x07" +
		"\x11\x02\x02\u0189\u018B\x05.\x18\x02\u018A\u0188\x03\x02\x02\x02\u018B" +
		"\u018E\x03\x02\x02\x02\u018C\u018A\x03\x02\x02\x02\u018C\u018D\x03\x02" +
		"\x02\x02\u018D\u018F\x03\x02\x02\x02\u018E\u018C\x03\x02\x02\x02\u018F" +
		"\u0190\x07\x12\x02\x02\u01901\x03\x02\x02\x02\u0191\u019A\x07\x17\x02" +
		"\x02\u0192\u0197\x054\x1B\x02\u0193\u0194\x07\x11\x02\x02\u0194\u0196" +
		"\x054\x1B\x02\u0195\u0193\x03\x02\x02\x02\u0196\u0199\x03\x02\x02\x02" +
		"\u0197\u0195\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u019B\x03" +
		"\x02\x02\x02\u0199\u0197\x03\x02\x02\x02\u019A\u0192\x03\x02\x02\x02\u019A" +
		"\u019B\x03\x02\x02\x02\u019B\u019C\x03\x02\x02\x02\u019C\u019D\x07\x18" +
		"\x02\x02\u019D3\x03\x02\x02\x02\u019E\u01A0\x05@!\x02\u019F\u01A1\x05" +
		"H%\x02\u01A0\u019F\x03\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02\u01A1\u01A3" +
		"\x03\x02\x02\x02\u01A2\u01A4\x05\xA8U\x02\u01A3\u01A2\x03\x02\x02\x02" +
		"\u01A3\u01A4\x03\x02\x02\x02\u01A45\x03\x02\x02\x02\u01A5\u01AE\x07\x17" +
		"\x02\x02\u01A6\u01AB\x058\x1D\x02\u01A7\u01A8\x07\x11\x02\x02\u01A8\u01AA" +
		"\x058\x1D\x02\u01A9\u01A7\x03\x02\x02\x02\u01AA\u01AD\x03\x02\x02\x02" +
		"\u01AB\u01A9\x03\x02\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC\u01AF\x03" +
		"\x02\x02\x02\u01AD\u01AB\x03\x02\x02\x02\u01AE\u01A6\x03\x02\x02\x02\u01AE" +
		"\u01AF\x03\x02\x02\x02\u01AF\u01B0\x03\x02\x02\x02\u01B0\u01B1\x07\x18" +
		"\x02\x02\u01B17\x03\x02\x02\x02\u01B2\u01B4\x05@!\x02\u01B3\u01B5\x07" +
		"n\x02\x02\u01B4\u01B3\x03\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5" +
		"\u01B7\x03\x02\x02\x02\u01B6\u01B8\x05\xA8U\x02\u01B7\u01B6\x03\x02\x02" +
		"\x02\u01B7\u01B8\x03\x02\x02\x02\u01B89\x03\x02\x02\x02\u01B9\u01C2\x07" +
		"\x17\x02\x02\u01BA\u01BF\x05<\x1F\x02\u01BB\u01BC\x07\x11\x02\x02\u01BC" +
		"\u01BE\x05<\x1F\x02\u01BD\u01BB\x03\x02\x02\x02\u01BE\u01C1\x03\x02\x02" +
		"\x02\u01BF\u01BD\x03\x02\x02\x02\u01BF\u01C0\x03\x02\x02\x02\u01C0\u01C3" +
		"\x03\x02\x02\x02\u01C1\u01BF\x03\x02\x02\x02\u01C2\u01BA\x03\x02\x02\x02" +
		"\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4\u01C5\x07" +
		"\x18\x02\x02\u01C5;\x03\x02\x02\x02\u01C6\u01C8\x05@!\x02\u01C7\u01C9" +
		"\x05H%\x02\u01C8\u01C7\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9" +
		"=\x03\x02\x02\x02\u01CA\u01CC\x05@!\x02\u01CB\u01CD\x05H%\x02\u01CC\u01CB" +
		"\x03\x02\x02\x02\u01CC\u01CD\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02" +
		"\u01CE\u01CF\x05\xA8U\x02\u01CF?\x03\x02\x02\x02\u01D0\u01D1\b!\x01\x02" +
		"\u01D1\u01D6\x05n8\x02\u01D2\u01D6\x05B\"\x02\u01D3\u01D6\x05D#\x02\u01D4" +
		"\u01D6\x05F$\x02\u01D5\u01D0\x03\x02\x02\x02\u01D5\u01D2\x03\x02\x02\x02" +
		"\u01D5\u01D3\x03\x02\x02\x02\u01D5\u01D4\x03\x02\x02\x02\u01D6\u01DF\x03" +
		"\x02\x02\x02\u01D7\u01D8\f\x04\x02\x02\u01D8\u01DA\x07\"\x02\x02\u01D9" +
		"\u01DB\x05p9\x02\u01DA\u01D9\x03";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DC" +
		"\u01DE\x07#\x02\x02\u01DD\u01D7\x03\x02\x02\x02\u01DE\u01E1\x03\x02\x02" +
		"\x02\u01DF\u01DD\x03\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0A\x03" +
		"\x02\x02\x02\u01E1\u01DF\x03\x02\x02\x02\u01E2\u01E7\x05\xA8U\x02\u01E3" +
		"\u01E4\x07$\x02\x02\u01E4\u01E6\x05\xA8U\x02\u01E5\u01E3\x03\x02\x02\x02" +
		"\u01E6\u01E9\x03\x02\x02\x02\u01E7\u01E5\x03\x02\x02\x02\u01E7\u01E8\x03" +
		"\x02\x02\x02\u01E8C\x03\x02\x02\x02\u01E9\u01E7\x03\x02\x02\x02\u01EA" +
		"\u01EB\x07%\x02\x02\u01EB\u01EC\x07\x17\x02\x02\u01EC\u01ED\x05n8\x02" +
		"\u01ED\u01EE\x07&\x02\x02\u01EE\u01EF\x05@!\x02\u01EF\u01F0\x07\x18\x02" +
		"\x02\u01F0E\x03\x02\x02\x02\u01F1\u01F2\x07\x1E\x02\x02\u01F2\u01F8\x05" +
		":\x1E\x02\u01F3\u01F7\x07o\x02\x02\u01F4\u01F7\x07m\x02\x02\u01F5\u01F7" +
		"\x05J&\x02\u01F6\u01F3\x03\x02\x02\x02\u01F6\u01F4\x03\x02\x02\x02\u01F6" +
		"\u01F5\x03\x02\x02\x02\u01F7\u01FA\x03\x02\x02\x02\u01F8\u01F6\x03\x02" +
		"\x02\x02\u01F8\u01F9\x03\x02\x02\x02\u01F9\u01FD\x03\x02\x02\x02\u01FA" +
		"\u01F8\x03\x02\x02\x02\u01FB\u01FC\x07\x1F\x02\x02\u01FC\u01FE\x05:\x1E" +
		"\x02\u01FD\u01FB\x03\x02\x02\x02\u01FD\u01FE\x03\x02\x02\x02\u01FEG\x03" +
		"\x02\x02\x02\u01FF\u0200\t\x05\x02\x02\u0200I\x03\x02\x02\x02\u0201\u0202" +
		"\t\x06\x02\x02\u0202K\x03\x02\x02\x02\u0203\u0207\x07\x10\x02\x02\u0204" +
		"\u0206\x05N(\x02\u0205\u0204\x03\x02\x02\x02\u0206\u0209\x03\x02\x02\x02" +
		"\u0207\u0205\x03\x02\x02\x02\u0207\u0208\x03\x02\x02\x02\u0208\u020A\x03" +
		"\x02\x02\x02\u0209\u0207\x03\x02\x02\x02\u020A\u020B\x07\x12\x02\x02\u020B" +
		"M\x03\x02\x02\x02\u020C\u0219\x05R*\x02\u020D\u0219\x05T+\x02\u020E\u0219" +
		"\x05X-\x02\u020F\u0219\x05L\'\x02\u0210\u0219\x05Z.\x02\u0211\u0219\x05" +
		"\\/\x02\u0212\u0219\x05^0\x02\u0213\u0219\x05`1\x02\u0214\u0219\x05b2" +
		"\x02\u0215\u0219\x05d3\x02\u0216\u0219\x05f4\x02\u0217\u0219\x05V,\x02" +
		"\u0218\u020C\x03\x02\x02\x02\u0218\u020D\x03\x02\x02\x02\u0218\u020E\x03" +
		"\x02\x02\x02\u0218\u020F\x03\x02\x02\x02\u0218\u0210\x03\x02\x02\x02\u0218" +
		"\u0211\x03\x02\x02\x02\u0218\u0212\x03\x02\x02\x02\u0218\u0213\x03\x02" +
		"\x02\x02\u0218\u0214\x03\x02\x02\x02\u0218\u0215\x03\x02\x02\x02\u0218" +
		"\u0216\x03\x02\x02\x02\u0218\u0217\x03\x02\x02\x02\u0219O\x03\x02\x02" +
		"\x02\u021A\u021B\x05p9\x02\u021B\u021C\x07\x04\x02\x02\u021CQ\x03\x02" +
		"\x02\x02\u021D\u021E\x07*\x02\x02\u021E\u021F\x07\x17\x02\x02\u021F\u0220" +
		"\x05p9\x02\u0220\u0221\x07\x18\x02\x02\u0221\u0224\x05N(\x02\u0222\u0223" +
		"\x07+\x02\x02\u0223\u0225\x05N(\x02\u0224\u0222\x03\x02\x02\x02\u0224" +
		"\u0225\x03\x02\x02\x02\u0225S\x03\x02\x02\x02\u0226\u0227\x07,\x02\x02" +
		"\u0227\u0228\x07\x17\x02\x02\u0228\u0229\x05p9\x02\u0229\u022A\x07\x18" +
		"\x02\x02\u022A\u022B\x05N(\x02\u022BU\x03\x02\x02\x02\u022C\u022F\x05" +
		"h5\x02\u022D\u022F\x05P)\x02\u022E\u022C\x03\x02\x02\x02\u022E\u022D\x03" +
		"\x02\x02\x02\u022FW\x03\x02\x02\x02\u0230\u0231\x07\x1A\x02\x02\u0231" +
		"\u0234\x07\x17\x02\x02\u0232\u0235\x05V,\x02\u0233\u0235\x07\x04\x02\x02" +
		"\u0234\u0232\x03\x02\x02\x02\u0234\u0233\x03\x02\x02\x02\u0235\u0237\x03" +
		"\x02\x02\x02\u0236\u0238\x05p9\x02\u0237\u0236\x03\x02\x02\x02\u0237\u0238" +
		"\x03\x02\x02\x02\u0238\u0239\x03\x02\x02\x02\u0239\u023B\x07\x04\x02\x02" +
		"\u023A\u023C\x05p9\x02\u023B\u023A\x03\x02\x02\x02\u023B\u023C\x03\x02" +
		"\x02\x02\u023C\u023D\x03\x02\x02\x02\u023D\u023E\x07\x18\x02\x02\u023E" +
		"\u023F\x05N(\x02\u023FY\x03\x02\x02\x02\u0240\u0242\x07-\x02\x02\u0241" +
		"\u0243\x07v\x02\x02\u0242\u0241\x03\x02\x02\x02\u0242\u0243\x03\x02\x02" +
		"\x02\u0243\u0244\x03\x02\x02\x02\u0244\u0245\x05~@\x02\u0245[\x03\x02" +
		"\x02\x02\u0246\u0247\x07.\x02\x02\u0247\u0248\x05N(\x02\u0248\u0249\x07" +
		",\x02\x02\u0249\u024A\x07\x17\x02\x02\u024A\u024B\x05p9\x02\u024B\u024C" +
		"\x07\x18\x02\x02\u024C\u024D\x07\x04\x02\x02\u024D]\x03\x02\x02\x02\u024E" +
		"\u024F\x07l\x02\x02\u024F\u0250\x07\x04\x02\x02\u0250_\x03\x02\x02\x02" +
		"\u0251\u0252\x07j\x02\x02\u0252\u0253\x07\x04\x02\x02\u0253a\x03\x02\x02" +
		"\x02\u0254\u0256\x07/\x02\x02\u0255\u0257\x05p9\x02\u0256\u0255\x03\x02" +
		"\x02\x02\u0256\u0257\x03\x02\x02\x02\u0257\u0258\x03\x02\x02\x02\u0258" +
		"\u0259\x07\x04\x02\x02\u0259c\x03\x02\x02\x02\u025A\u025B\x070\x02\x02" +
		"\u025B\u025C\x07\x04\x02\x02\u025Ce\x03\x02\x02\x02\u025D\u025E\x071\x02" +
		"\x02\u025E\u025F\x05|?\x02\u025F\u0260\x07\x04\x02\x02\u0260g\x03\x02" +
		"\x02\x02\u0261\u0262\x072\x02\x02\u0262\u0269\x05l7\x02\u0263\u0269\x05" +
		"> \x02\u0264\u0265\x07\x17\x02\x02\u0265\u0266\x05j6\x02\u0266\u0267\x07" +
		"\x18\x02\x02\u0267\u0269\x03\x02\x02\x02\u0268\u0261\x03\x02\x02\x02\u0268" +
		"\u0263\x03\x02\x02\x02\u0268\u0264\x03\x02\x02\x02\u0269\u026C\x03\x02" +
		"\x02\x02\u026A\u026B\x07\v\x02\x02\u026B\u026D\x05p9\x02\u026C\u026A\x03" +
		"\x02\x02\x02\u026C\u026D\x03\x02\x02\x02\u026D\u026E\x03\x02\x02\x02\u026E" +
		"\u026F\x07\x04\x02\x02\u026Fi\x03\x02\x02\x02\u0270\u0272\x05> \x02\u0271" +
		"\u0270\x03\x02\x02\x02\u0271\u0272\x03\x02\x02\x02\u0272\u0279\x03\x02" +
		"\x02\x02\u0273\u0275\x07\x11\x02\x02\u0274\u0276\x05> \x02\u0275\u0274" +
		"\x03\x02\x02\x02\u0275\u0276\x03\x02\x02\x02\u0276\u0278\x03\x02\x02\x02" +
		"\u0277\u0273\x03\x02\x02\x02\u0278\u027B\x03\x02\x02\x02\u0279\u0277\x03" +
		"\x02\x02\x02\u0279\u027A\x03\x02\x02\x02\u027Ak\x03\x02\x02\x02\u027B" +
		"\u0279\x03\x02\x02\x02\u027C\u0283\x07\x17\x02\x02\u027D\u027F\x05\xA8" +
		"U\x02\u027E\u027D\x03\x02\x02\x02\u027E\u027F\x03\x02\x02\x02\u027F\u0280" +
		"\x03\x02\x02\x02\u0280\u0282\x07\x11\x02\x02\u0281\u027E\x03\x02\x02\x02" +
		"\u0282\u0285\x03\x02\x02\x02\u0283\u0281\x03\x02\x02\x02\u0283\u0284\x03" +
		"\x02\x02\x02\u0284\u0287\x03\x02\x02\x02\u0285\u0283\x03\x02\x02\x02\u0286" +
		"\u0288\x05\xA8U\x02\u0287\u0286\x03\x02\x02\x02\u0287\u0288\x03\x02\x02" +
		"\x02\u0288\u0289\x03\x02\x02\x02\u0289\u028A\x07\x18\x02\x02\u028Am\x03" +
		"\x02\x02\x02\u028B\u028C\t\x07\x02\x02\u028Co\x03\x02\x02\x02\u028D\u028E" +
		"\b9\x01\x02\u028E\u028F\x079\x02\x02\u028F\u02A0\x05@!\x02\u0290\u0291" +
		"\x07\x17\x02\x02\u0291\u0292\x05p9\x02\u0292\u0293\x07\x18\x02\x02\u0293" +
		"\u02A0\x03\x02\x02\x02\u0294\u0295\t\b\x02\x02\u0295\u02A0\x05p9\x15\u0296" +
		"\u0297\t\t\x02\x02\u0297\u02A0\x05p9\x14\u0298\u0299\t\n\x02\x02\u0299" +
		"\u02A0\x05p9\x13\u029A\u029B\x07>\x02\x02\u029B\u02A0\x05p9\x12\u029C" +
		"\u029D\x07\x06\x02\x02\u029D\u02A0\x05p9\x11\u029E\u02A0\x05r:\x02\u029F" +
		"\u028D\x03\x02\x02\x02\u029F\u0290\x03\x02\x02\x02\u029F\u0294\x03\x02" +
		"\x02\x02\u029F\u0296\x03\x02\x02\x02\u029F\u0298\x03\x02\x02\x02\u029F" +
		"\u029A\x03\x02\x02\x02\u029F\u029C\x03\x02\x02\x02\u029F\u029E\x03\x02" +
		"\x02\x02\u02A0\u02DC\x03\x02\x02\x02\u02A1\u02A2\f\x10\x02\x02\u02A2\u02A3" +
		"\x07?\x02\x02\u02A3\u02DB\x05p9\x11\u02A4\u02A5\f\x0F\x02\x02\u02A5\u02A6" +
		"\t\v\x02\x02\u02A6\u02DB\x05p9\x10\u02A7\u02A8\f\x0E\x02\x02\u02A8\u02A9" +
		"\t\t\x02\x02\u02A9\u02DB\x05p9\x0F\u02AA\u02AB\f\r\x02\x02\u02AB\u02AC" +
		"\t\f\x02\x02\u02AC\u02DB\x05p9\x0E\u02AD\u02AE\f\f\x02\x02\u02AE\u02AF" +
		"\x07D\x02\x02\u02AF\u02DB\x05p9\r\u02B0\u02B1\f\v\x02\x02\u02B1\u02B2" +
		"\x07\x05\x02\x02\u02B2\u02DB\x05p9\f\u02B3\u02B4\f\n\x02\x02\u02B4\u02B5" +
		"\x07E\x02\x02\u02B5\u02DB\x05p9\v\u02B6\u02B7\f\t\x02\x02\u02B7\u02B8" +
		"\t\r\x02\x02\u02B8\u02DB\x05p9\n\u02B9\u02BA\f\b\x02\x02\u02BA\u02BB\t" +
		"\x0E\x02\x02\u02BB\u02DB\x05p9\t\u02BC\u02BD\f\x07\x02\x02\u02BD\u02BE" +
		"\x07H\x02\x02\u02BE\u02DB\x05p9\b\u02BF\u02C0\f\x06\x02\x02\u02C0\u02C1" +
		"\x07I\x02\x02\u02C1\u02DB\x05p9\x07\u02C2\u02C3\f\x05\x02\x02\u02C3\u02C4" +
		"\x07J\x02\x02\u02C4\u02C5\x05p9\x02\u02C5\u02C6\x07K\x02\x02\u02C6\u02C7" +
		"\x05p9\x06\u02C7\u02DB\x03\x02\x02\x02\u02C8\u02C9\f\x04\x02\x02\u02C9" +
		"\u02CA\t\x0F\x02\x02\u02CA\u02DB\x05p9\x05\u02CB\u02CC\f\x1B\x02\x02\u02CC" +
		"\u02DB\t\b\x02\x02\u02CD\u02CE\f\x19\x02\x02\u02CE\u02CF\x07\"\x02\x02" +
		"\u02CF\u02D0\x05p9\x02\u02D0\u02D1\x07#\x02\x02\u02D1\u02DB\x03\x02\x02" +
		"\x02\u02D2\u02D3\f\x18\x02\x02\u02D3\u02D4\x07\x17\x02\x02\u02D4\u02D5" +
		"\x05z>\x02\u02D5\u02D6\x07\x18\x02\x02\u02D6\u02DB\x03\x02\x02\x02\u02D7" +
		"\u02D8\f\x17\x02\x02\u02D8\u02D9\x07$\x02\x02\u02D9\u02DB\x05\xA8U\x02" +
		"\u02DA\u02A1\x03\x02\x02\x02\u02DA\u02A4\x03\x02\x02\x02\u02DA\u02A7\x03" +
		"\x02\x02\x02\u02DA\u02AA\x03\x02\x02\x02\u02DA\u02AD\x03\x02\x02\x02\u02DA" +
		"\u02B0\x03\x02\x02\x02\u02DA\u02B3\x03\x02\x02\x02\u02DA\u02B6\x03\x02" +
		"\x02\x02\u02DA\u02B9\x03\x02\x02\x02\u02DA\u02BC\x03\x02\x02\x02\u02DA" +
		"\u02BF\x03\x02\x02\x02\u02DA\u02C2\x03\x02\x02\x02\u02DA\u02C8\x03\x02" +
		"\x02\x02\u02DA\u02CB\x03\x02\x02\x02\u02DA\u02CD\x03\x02\x02\x02\u02DA" +
		"\u02D2\x03\x02\x02\x02\u02DA\u02D7\x03\x02\x02\x02\u02DB\u02DE\x03\x02" +
		"\x02\x02\u02DC\u02DA\x03\x02\x02\x02\u02DC\u02DD\x03\x02\x02\x02\u02DD" +
		"q\x03\x02\x02\x02\u02DE\u02DC\x03\x02\x02\x02\u02DF\u02E7\x07c\x02\x02" +
		"\u02E0\u02E7\x05\xA6T\x02\u02E1\u02E7\x07g\x02\x02\u02E2\u02E7\x07v\x02" +
		"\x02\u02E3\u02E7\x05\xA8U\x02\u02E4\u02E7\x05\xA2R\x02\u02E5\u02E7\x05" +
		"\xA4S\x02\u02E6\u02DF\x03\x02\x02\x02\u02E6\u02E0\x03\x02\x02\x02\u02E6" +
		"\u02E1\x03\x02\x02\x02\u02E6\u02E2\x03\x02\x02\x02\u02E6\u02E3\x03\x02" +
		"\x02\x02\u02E6\u02E4\x03\x02\x02\x02\u02E6\u02E5\x03\x02\x02\x02\u02E7" +
		"s\x03\x02\x02\x02\u02E8\u02ED\x05p9\x02\u02E9\u02EA\x07\x11\x02\x02\u02EA" +
		"\u02EC\x05p9\x02\u02EB\u02E9\x03\x02\x02\x02\u02EC\u02EF\x03\x02\x02\x02" +
		"\u02ED\u02EB\x03\x02\x02\x02\u02ED\u02EE\x03\x02\x02\x02\u02EEu\x03\x02" +
		"\x02\x02\u02EF\u02ED\x03\x02\x02\x02\u02F0\u02F5\x05x=\x02\u02F1\u02F2" +
		"\x07\x11\x02\x02\u02F2\u02F4\x05x=\x02\u02F3\u02F1\x03\x02\x02\x02\u02F4" +
		"\u02F7\x03\x02\x02\x02\u02F5\u02F3\x03\x02\x02\x02\u02F5\u02F6\x03\x02" +
		"\x02\x02\u02F6\u02F9\x03\x02\x02\x02\u02F7\u02F5\x03\x02\x02\x02\u02F8" +
		"\u02FA\x07\x11\x02\x02\u02F9\u02F8\x03\x02\x02\x02\u02F9\u02FA\x03\x02" +
		"\x02\x02\u02FAw\x03\x02\x02\x02\u02FB\u02FC\x05\xA8U\x02\u02FC\u02FD\x07" +
		"K\x02\x02\u02FD\u02FE\x05p9\x02\u02FEy\x03\x02\x02\x02\u02FF\u0301\x07" +
		"\x10\x02\x02\u0300\u0302\x05v<\x02\u0301\u0300\x03\x02\x02\x02\u0301\u0302" +
		"\x03\x02\x02\x02\u0302\u0303\x03\x02\x02\x02\u0303\u0308\x07\x12\x02\x02" +
		"\u0304\u0306\x05t;\x02\u0305\u0304\x03\x02\x02\x02\u0305\u0306\x03\x02" +
		"\x02\x02\u0306\u0308\x03\x02\x02\x02\u0307\u02FF\x03\x02\x02\x02\u0307" +
		"\u0305\x03\x02\x02\x02\u0308{\x03\x02\x02\x02\u0309\u030A\x05p9\x02\u030A" +
		"\u030B\x07\x17\x02\x02\u030B\u030C\x05z>\x02\u030C\u030D\x07\x18\x02\x02" +
		"\u030D}\x03\x02\x02\x02\u030E\u0312\x07\x10\x02\x02\u030F\u0311\x05\x80" +
		"A\x02\u0310\u030F\x03\x02\x02\x02\u0311\u0314\x03\x02\x02\x02\u0312\u0310" +
		"\x03\x02\x02\x02\u0312\u0313\x03\x02\x02\x02\u0313\u0315\x03\x02\x02\x02" +
		"\u0314\u0312\x03\x02\x02\x02\u0315\u0316\x07\x12\x02\x02\u0316\x7F\x03" +
		"\x02\x02\x02\u0317\u0329\x05\xA8U\x02\u0318\u0329\x05~@\x02\u0319\u0329" +
		"\x05\x82B\x02\u031A\u0329\x05\x86D\x02\u031B\u0329\x05\x88E\x02\u031C" +
		"\u0329\x05\x8EH\x02\u031D\u0329\x05\x90I\x02\u031E\u0329\x05\x92J\x02" +
		"\u031F\u0329\x05\x96L\x02\u0320\u0329\x05\x9AN\x02\u0321\u0329\x05\x9C" +
		"O\x02\u0322\u0329\x07j\x02\x02\u0323\u0329\x07l\x02\x02\u0324\u0329\x05" +
		"\xA0Q\x02\u0325\u0329\x05\xA6T\x02\u0326\u0329\x07v\x02\x02\u0327\u0329" +
		"\x07g\x02\x02\u0328\u0317\x03\x02\x02\x02\u0328\u0318\x03\x02\x02\x02" +
		"\u0328\u0319\x03\x02\x02\x02\u0328\u031A\x03\x02\x02\x02\u0328\u031B\x03" +
		"\x02\x02\x02\u0328\u031C\x03\x02\x02\x02\u0328\u031D\x03\x02\x02\x02\u0328" +
		"\u031E\x03\x02\x02\x02\u0328\u031F\x03\x02\x02\x02\u0328\u0320\x03\x02" +
		"\x02\x02\u0328\u0321\x03\x02\x02\x02\u0328\u0322\x03\x02\x02\x02\u0328" +
		"\u0323\x03\x02\x02\x02\u0328\u0324\x03\x02\x02\x02\u0328\u0325\x03\x02" +
		"\x02\x02\u0328\u0326\x03\x02\x02\x02\u0328\u0327\x03\x02\x02\x02\u0329" +
		"\x81\x03\x02\x02\x02\u032A\u032D\x05\x84C\x02\u032B\u032D\x05\x9EP\x02" +
		"\u032C\u032A\x03\x02\x02\x02\u032C\u032B\x03\x02\x02\x02\u032D\x83\x03" +
		"\x02\x02\x02\u032E\u0333\x07/\x02\x02\u032F\u0333\x073\x02\x02\u0330\u0333" +
		"\x076\x02\x02\u0331\u0333\x05\xA8U\x02\u0332\u032E\x03\x02\x02\x02\u0332" +
		"\u032F\x03\x02\x02\x02\u0332\u0330\x03\x02\x02\x02\u0332\u0331\x03\x02" +
		"\x02\x02\u0333\u0340\x03\x02\x02\x02\u0334\u0336\x07\x17\x02\x02\u0335" +
		"\u0337\x05\x82B\x02\u0336\u0335\x03\x02\x02\x02\u0336\u0337\x03\x02\x02" +
		"\x02\u0337\u033C\x03\x02\x02\x02\u0338\u0339\x07\x11\x02\x02\u0339\u033B" +
		"\x05\x82B\x02\u033A\u0338\x03\x02\x02\x02\u033B\u033E\x03\x02\x02\x02" +
		"\u033C\u033A\x03\x02\x02\x02\u033C\u033D\x03\x02\x02\x02\u033D\u033F\x03" +
		"\x02\x02\x02\u033E\u033C\x03\x02\x02\x02\u033F\u0341\x07\x18\x02\x02\u0340" +
		"\u0334\x03\x02\x02\x02\u0340\u0341\x03\x02\x02\x02\u0341\x85\x03\x02\x02" +
		"\x02\u0342\u0343\x07V\x02\x02\u0343\u0346\x05\x8AF\x02\u0344\u0345\x07" +
		"W\x02\x02\u0345\u0347\x05\x82B\x02\u0346\u0344\x03\x02\x02\x02\u0346\u0347" +
		"\x03\x02\x02\x02\u0347\x87\x03\x02\x02\x02\u0348\u0349\x05\x8AF\x02\u0349" +
		"\u034A\x07W\x02\x02\u034A\u034B\x05\x82B\x02\u034B\x89\x03\x02\x02\x02" +
		"\u034C\u0352\x05\xA8U\x02\u034D\u034E\x07\x17\x02\x02\u034E\u034F\x05" +
		"\x8CG\x02\u034F\u0350\x07\x18\x02\x02\u0350\u0352\x03\x02\x02\x02\u0351" +
		"\u034C\x03\x02\x02\x02\u0351\u034D\x03\x02\x02\x02\u0352\x8B\x03\x02\x02" +
		"\x02\u0353\u0358\x05\xA8U\x02\u0354\u0355\x07\x11\x02\x02\u0355\u0357" +
		"\x05\xA8U\x02\u0356\u0354\x03\x02\x02\x02\u0357\u035A\x03\x02\x02\x02" +
		"\u0358\u0356\x03\x02\x02\x02\u0358\u0359\x03\x02\x02\x02\u0359\x8D\x03" +
		"\x02\x02\x02\u035A\u0358\x03\x02\x02\x02\u035B\u035C\x07X\x02\x02\u035C" +
		"\u035D\x05\xA8U\x02\u035D\x8F\x03\x02\x02\x02\u035E\u035F\x05\xA8U\x02" +
		"\u035F\u0360\x07K\x02\x02\u0360\x91\x03\x02\x02\x02\u0361\u0362\x07Y\x02" +
		"\x02\u0362\u0366\x05\x82B\x02\u0363\u0365\x05\x94K\x02\u0364\u0363\x03" +
		"\x02\x02\x02\u0365\u0368\x03\x02\x02\x02\u0366\u0364\x03\x02\x02\x02\u0366" +
		"\u0367\x03\x02\x02\x02\u0367\x93\x03\x02\x02\x02\u0368\u0366\x03\x02\x02" +
		"\x02\u0369\u036A\x07Z\x02\x02\u036A\u036B\x05\x9EP\x02\u036B\u036C\x05" +
		"~@\x02\u036C\u0370\x03\x02\x02\x02\u036D\u036E\x07[\x02\x02\u036E\u0370" +
		"\x05~@\x02\u036F\u0369\x03\x02\x02\x02\u036F\u036D\x03\x02\x02\x02\u0370" +
		"\x95\x03\x02\x02\x02\u0371\u0372\x07\x1E\x02\x02\u0372\u0373\x05\xA8U" +
		"\x02\u0373\u0375\x07\x17\x02\x02\u0374\u0376\x05\x8CG\x02\u0375\u0374" +
		"\x03\x02\x02\x02\u0375\u0376\x03\x02\x02\x02\u0376\u0377\x03\x02\x02\x02" +
		"\u0377\u0379\x07\x18\x02\x02\u0378\u037A\x05\x98M\x02\u0379\u0378\x03" +
		"\x02\x02\x02\u0379\u037A\x03\x02\x02\x02\u037A\u037B\x03\x02\x02\x02\u037B" +
		"\u037C\x05~@\x02\u037C\x97\x03\x02\x02\x02\u037D\u037E\x07\\\x02\x02\u037E" +
		"\u037F\x05\x8CG\x02\u037F\x99\x03\x02\x02\x02\u0380\u0383\x07\x1A\x02" +
		"\x02\u0381\u0384\x05~@\x02\u0382\u0384\x05\x82B\x02\u0383\u0381\x03\x02" +
		"\x02\x02\u0383\u0382\x03\x02\x02\x02\u0384\u0385\x03\x02\x02\x02\u0385" +
		"\u0388\x05\x82B\x02\u0386\u0389\x05~@\x02\u0387\u0389\x05\x82B\x02\u0388" +
		"\u0386\x03\x02\x02\x02\u0388\u0387\x03\x02\x02\x02\u0389\u038A\x03\x02" +
		"\x02\x02\u038A\u038B\x05~@\x02\u038B\x9B\x03\x02\x02\x02\u038C\u038D\x07" +
		"*\x02\x02\u038D\u038E\x05\x82B\x02\u038E\u038F\x05~@\x02\u038F\x9D\x03" +
		"\x02\x02\x02\u0390\u0391\t\x10\x02\x02\u0391\x9F\x03\x02\x02\x02\u0392" +
		"\u0393\x07-\x02\x02\u0393\u0394\x05\xA8U\x02\u0394\u0395\x05~@\x02\u0395" +
		"\xA1\x03\x02\x02\x02\u0396\u0398\x07\x17\x02\x02\u0397\u0399\x05p9\x02" +
		"\u0398\u0397\x03\x02\x02\x02\u0398\u0399\x03\x02\x02\x02\u0399\u03A0\x03" +
		"\x02\x02\x02\u039A\u039C\x07\x11\x02\x02\u039B\u039D\x05p9\x02\u039C\u039B" +
		"\x03\x02\x02\x02\u039C\u039D\x03\x02\x02\x02\u039D\u039F\x03\x02\x02\x02" +
		"\u039E\u039A\x03\x02\x02\x02\u039F\u03A2\x03\x02\x02\x02\u03A0\u039E\x03" +
		"\x02\x02\x02\u03A0\u03A1\x03\x02\x02\x02\u03A1\u03A3\x03\x02\x02\x02\u03A2" +
		"\u03A0\x03\x02\x02\x02\u03A3\u03B1\x07\x18\x02\x02\u03A4\u03AD\x07\"\x02" +
		"\x02\u03A5\u03AA\x05p9\x02\u03A6\u03A7\x07\x11\x02\x02\u03A7\u03A9\x05" +
		"p9\x02\u03A8\u03A6\x03\x02\x02\x02\u03A9\u03AC\x03\x02\x02\x02\u03AA\u03A8" +
		"\x03\x02\x02\x02\u03AA\u03AB\x03\x02\x02\x02\u03AB\u03AE\x03\x02\x02\x02" +
		"\u03AC\u03AA\x03\x02\x02\x02\u03AD\u03A5\x03\x02\x02\x02\u03AD\u03AE\x03" +
		"\x02\x02\x02\u03AE\u03AF\x03\x02\x02\x02\u03AF\u03B1\x07#\x02\x02\u03B0" +
		"\u0396\x03\x02\x02\x02\u03B0\u03A4\x03\x02\x02\x02\u03B1\xA3\x03\x02\x02" +
		"\x02\u03B2\u03B3\x05n8\x02\u03B3\xA5\x03\x02\x02\x02\u03B4\u03B6\t\x11" +
		"\x02\x02\u03B5\u03B7\x07f\x02\x02\u03B6\u03B5\x03\x02\x02\x02\u03B6\u03B7" +
		"\x03\x02\x02\x02\u03B7\xA7\x03\x02\x02\x02\u03B8\u03B9\t\x12\x02\x02\u03B9" +
		"\xA9\x03\x02\x02\x02h\xAD\xAF\xBD\xC1\xC6\xCD\xD3\xD9\xDD\xE9\xF1\xFB" +
		"\xFE\u0104\u0110\u0115\u011F\u0125\u012B\u0134\u0142\u0145\u0151\u0158" +
		"\u015B\u015F\u0164\u0168\u0173\u0175\u017C\u0186\u018C\u0197\u019A\u01A0" +
		"\u01A3\u01AB\u01AE\u01B4\u01B7\u01BF\u01C2\u01C8\u01CC\u01D5\u01DA\u01DF" +
		"\u01E7\u01F6\u01F8\u01FD\u0207\u0218\u0224\u022E\u0234\u0237\u023B\u0242" +
		"\u0256\u0268\u026C\u0271\u0275\u0279\u027E\u0283\u0287\u029F\u02DA\u02DC" +
		"\u02E6\u02ED\u02F5\u02F9\u0301\u0305\u0307\u0312\u0328\u032C\u0332\u0336" +
		"\u033C\u0340\u0346\u0351\u0358\u0366\u036F\u0375\u0379\u0383\u0388\u0398" +
		"\u039C\u03A0\u03AA\u03AD\u03B0\u03B6";
	public static readonly _serializedATN: string = Utils.join(
		[
			SolidityParser._serializedATNSegment0,
			SolidityParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SolidityParser.__ATN) {
			SolidityParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SolidityParser._serializedATN));
		}

		return SolidityParser.__ATN;
	}

}

export class SourceUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(SolidityParser.EOF, 0); }
	public pragmaDirective(): PragmaDirectiveContext[];
	public pragmaDirective(i: number): PragmaDirectiveContext;
	public pragmaDirective(i?: number): PragmaDirectiveContext | PragmaDirectiveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PragmaDirectiveContext);
		} else {
			return this.getRuleContext(i, PragmaDirectiveContext);
		}
	}
	public importDirective(): ImportDirectiveContext[];
	public importDirective(i: number): ImportDirectiveContext;
	public importDirective(i?: number): ImportDirectiveContext | ImportDirectiveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportDirectiveContext);
		} else {
			return this.getRuleContext(i, ImportDirectiveContext);
		}
	}
	public contractDefinition(): ContractDefinitionContext[];
	public contractDefinition(i: number): ContractDefinitionContext;
	public contractDefinition(i?: number): ContractDefinitionContext | ContractDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ContractDefinitionContext);
		} else {
			return this.getRuleContext(i, ContractDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_sourceUnit; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterSourceUnit) {
			listener.enterSourceUnit(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitSourceUnit) {
			listener.exitSourceUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitSourceUnit) {
			return visitor.visitSourceUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PragmaDirectiveContext extends ParserRuleContext {
	public pragmaName(): PragmaNameContext {
		return this.getRuleContext(0, PragmaNameContext);
	}
	public pragmaValue(): PragmaValueContext {
		return this.getRuleContext(0, PragmaValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_pragmaDirective; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterPragmaDirective) {
			listener.enterPragmaDirective(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitPragmaDirective) {
			listener.exitPragmaDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitPragmaDirective) {
			return visitor.visitPragmaDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PragmaNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_pragmaName; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterPragmaName) {
			listener.enterPragmaName(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitPragmaName) {
			listener.exitPragmaName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitPragmaName) {
			return visitor.visitPragmaName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PragmaValueContext extends ParserRuleContext {
	public version(): VersionContext | undefined {
		return this.tryGetRuleContext(0, VersionContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_pragmaValue; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterPragmaValue) {
			listener.enterPragmaValue(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitPragmaValue) {
			listener.exitPragmaValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitPragmaValue) {
			return visitor.visitPragmaValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VersionContext extends ParserRuleContext {
	public versionConstraint(): VersionConstraintContext[];
	public versionConstraint(i: number): VersionConstraintContext;
	public versionConstraint(i?: number): VersionConstraintContext | VersionConstraintContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VersionConstraintContext);
		} else {
			return this.getRuleContext(i, VersionConstraintContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_version; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterVersion) {
			listener.enterVersion(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitVersion) {
			listener.exitVersion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVersion) {
			return visitor.visitVersion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VersionOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_versionOperator; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterVersionOperator) {
			listener.enterVersionOperator(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitVersionOperator) {
			listener.exitVersionOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVersionOperator) {
			return visitor.visitVersionOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VersionConstraintContext extends ParserRuleContext {
	public VersionLiteral(): TerminalNode { return this.getToken(SolidityParser.VersionLiteral, 0); }
	public versionOperator(): VersionOperatorContext | undefined {
		return this.tryGetRuleContext(0, VersionOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_versionConstraint; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterVersionConstraint) {
			listener.enterVersionConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitVersionConstraint) {
			listener.exitVersionConstraint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVersionConstraint) {
			return visitor.visitVersionConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDeclarationContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_importDeclaration; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterImportDeclaration) {
			listener.enterImportDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitImportDeclaration) {
			listener.exitImportDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitImportDeclaration) {
			return visitor.visitImportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDirectiveContext extends ParserRuleContext {
	public StringLiteral(): TerminalNode { return this.getToken(SolidityParser.StringLiteral, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public importDeclaration(): ImportDeclarationContext[];
	public importDeclaration(i: number): ImportDeclarationContext;
	public importDeclaration(i?: number): ImportDeclarationContext | ImportDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportDeclarationContext);
		} else {
			return this.getRuleContext(i, ImportDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_importDirective; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterImportDirective) {
			listener.enterImportDirective(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitImportDirective) {
			listener.exitImportDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitImportDirective) {
			return visitor.visitImportDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContractDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public inheritanceSpecifier(): InheritanceSpecifierContext[];
	public inheritanceSpecifier(i: number): InheritanceSpecifierContext;
	public inheritanceSpecifier(i?: number): InheritanceSpecifierContext | InheritanceSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InheritanceSpecifierContext);
		} else {
			return this.getRuleContext(i, InheritanceSpecifierContext);
		}
	}
	public contractPart(): ContractPartContext[];
	public contractPart(i: number): ContractPartContext;
	public contractPart(i?: number): ContractPartContext | ContractPartContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ContractPartContext);
		} else {
			return this.getRuleContext(i, ContractPartContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_contractDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterContractDefinition) {
			listener.enterContractDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitContractDefinition) {
			listener.exitContractDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitContractDefinition) {
			return visitor.visitContractDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InheritanceSpecifierContext extends ParserRuleContext {
	public userDefinedTypeName(): UserDefinedTypeNameContext {
		return this.getRuleContext(0, UserDefinedTypeNameContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_inheritanceSpecifier; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterInheritanceSpecifier) {
			listener.enterInheritanceSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitInheritanceSpecifier) {
			listener.exitInheritanceSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitInheritanceSpecifier) {
			return visitor.visitInheritanceSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContractPartContext extends ParserRuleContext {
	public stateVariableDeclaration(): StateVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, StateVariableDeclarationContext);
	}
	public usingForDeclaration(): UsingForDeclarationContext | undefined {
		return this.tryGetRuleContext(0, UsingForDeclarationContext);
	}
	public structDefinition(): StructDefinitionContext | undefined {
		return this.tryGetRuleContext(0, StructDefinitionContext);
	}
	public constructorDefinition(): ConstructorDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ConstructorDefinitionContext);
	}
	public modifierDefinition(): ModifierDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ModifierDefinitionContext);
	}
	public functionDefinition(): FunctionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, FunctionDefinitionContext);
	}
	public eventDefinition(): EventDefinitionContext | undefined {
		return this.tryGetRuleContext(0, EventDefinitionContext);
	}
	public enumDefinition(): EnumDefinitionContext | undefined {
		return this.tryGetRuleContext(0, EnumDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_contractPart; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterContractPart) {
			listener.enterContractPart(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitContractPart) {
			listener.exitContractPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitContractPart) {
			return visitor.visitContractPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateVariableDeclarationContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public PublicKeyword(): TerminalNode[];
	public PublicKeyword(i: number): TerminalNode;
	public PublicKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.PublicKeyword);
		} else {
			return this.getToken(SolidityParser.PublicKeyword, i);
		}
	}
	public InternalKeyword(): TerminalNode[];
	public InternalKeyword(i: number): TerminalNode;
	public InternalKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.InternalKeyword);
		} else {
			return this.getToken(SolidityParser.InternalKeyword, i);
		}
	}
	public PrivateKeyword(): TerminalNode[];
	public PrivateKeyword(i: number): TerminalNode;
	public PrivateKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.PrivateKeyword);
		} else {
			return this.getToken(SolidityParser.PrivateKeyword, i);
		}
	}
	public ConstantKeyword(): TerminalNode[];
	public ConstantKeyword(i: number): TerminalNode;
	public ConstantKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.ConstantKeyword);
		} else {
			return this.getToken(SolidityParser.ConstantKeyword, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_stateVariableDeclaration; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterStateVariableDeclaration) {
			listener.enterStateVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitStateVariableDeclaration) {
			listener.exitStateVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStateVariableDeclaration) {
			return visitor.visitStateVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UsingForDeclarationContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_usingForDeclaration; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterUsingForDeclaration) {
			listener.enterUsingForDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitUsingForDeclaration) {
			listener.exitUsingForDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitUsingForDeclaration) {
			return visitor.visitUsingForDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public variableDeclaration(): VariableDeclarationContext[];
	public variableDeclaration(i: number): VariableDeclarationContext;
	public variableDeclaration(i?: number): VariableDeclarationContext | VariableDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclarationContext);
		} else {
			return this.getRuleContext(i, VariableDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_structDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterStructDefinition) {
			listener.enterStructDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitStructDefinition) {
			listener.exitStructDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStructDefinition) {
			return visitor.visitStructDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorDefinitionContext extends ParserRuleContext {
	public parameterList(): ParameterListContext {
		return this.getRuleContext(0, ParameterListContext);
	}
	public modifierList(): ModifierListContext {
		return this.getRuleContext(0, ModifierListContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_constructorDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterConstructorDefinition) {
			listener.enterConstructorDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitConstructorDefinition) {
			listener.exitConstructorDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitConstructorDefinition) {
			return visitor.visitConstructorDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModifierDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_modifierDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterModifierDefinition) {
			listener.enterModifierDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitModifierDefinition) {
			listener.exitModifierDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitModifierDefinition) {
			return visitor.visitModifierDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModifierInvocationContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_modifierInvocation; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterModifierInvocation) {
			listener.enterModifierInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitModifierInvocation) {
			listener.exitModifierInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitModifierInvocation) {
			return visitor.visitModifierInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDefinitionContext extends ParserRuleContext {
	public parameterList(): ParameterListContext {
		return this.getRuleContext(0, ParameterListContext);
	}
	public modifierList(): ModifierListContext {
		return this.getRuleContext(0, ModifierListContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public returnParameters(): ReturnParametersContext | undefined {
		return this.tryGetRuleContext(0, ReturnParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_functionDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterFunctionDefinition) {
			listener.enterFunctionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitFunctionDefinition) {
			listener.exitFunctionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionDefinition) {
			return visitor.visitFunctionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnParametersContext extends ParserRuleContext {
	public parameterList(): ParameterListContext {
		return this.getRuleContext(0, ParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_returnParameters; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterReturnParameters) {
			listener.enterReturnParameters(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitReturnParameters) {
			listener.exitReturnParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitReturnParameters) {
			return visitor.visitReturnParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModifierListContext extends ParserRuleContext {
	public modifierInvocation(): ModifierInvocationContext[];
	public modifierInvocation(i: number): ModifierInvocationContext;
	public modifierInvocation(i?: number): ModifierInvocationContext | ModifierInvocationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierInvocationContext);
		} else {
			return this.getRuleContext(i, ModifierInvocationContext);
		}
	}
	public stateMutability(): StateMutabilityContext[];
	public stateMutability(i: number): StateMutabilityContext;
	public stateMutability(i?: number): StateMutabilityContext | StateMutabilityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StateMutabilityContext);
		} else {
			return this.getRuleContext(i, StateMutabilityContext);
		}
	}
	public ExternalKeyword(): TerminalNode[];
	public ExternalKeyword(i: number): TerminalNode;
	public ExternalKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.ExternalKeyword);
		} else {
			return this.getToken(SolidityParser.ExternalKeyword, i);
		}
	}
	public PublicKeyword(): TerminalNode[];
	public PublicKeyword(i: number): TerminalNode;
	public PublicKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.PublicKeyword);
		} else {
			return this.getToken(SolidityParser.PublicKeyword, i);
		}
	}
	public InternalKeyword(): TerminalNode[];
	public InternalKeyword(i: number): TerminalNode;
	public InternalKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.InternalKeyword);
		} else {
			return this.getToken(SolidityParser.InternalKeyword, i);
		}
	}
	public PrivateKeyword(): TerminalNode[];
	public PrivateKeyword(i: number): TerminalNode;
	public PrivateKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.PrivateKeyword);
		} else {
			return this.getToken(SolidityParser.PrivateKeyword, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_modifierList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterModifierList) {
			listener.enterModifierList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitModifierList) {
			listener.exitModifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitModifierList) {
			return visitor.visitModifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public eventParameterList(): EventParameterListContext {
		return this.getRuleContext(0, EventParameterListContext);
	}
	public AnonymousKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.AnonymousKeyword, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_eventDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterEventDefinition) {
			listener.enterEventDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitEventDefinition) {
			listener.exitEventDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitEventDefinition) {
			return visitor.visitEventDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumValueContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_enumValue; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterEnumValue) {
			listener.enterEnumValue(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitEnumValue) {
			listener.exitEnumValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitEnumValue) {
			return visitor.visitEnumValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public enumValue(): EnumValueContext[];
	public enumValue(i: number): EnumValueContext;
	public enumValue(i?: number): EnumValueContext | EnumValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumValueContext);
		} else {
			return this.getRuleContext(i, EnumValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_enumDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterEnumDefinition) {
			listener.enterEnumDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitEnumDefinition) {
			listener.exitEnumDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitEnumDefinition) {
			return visitor.visitEnumDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_parameterList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterParameterList) {
			listener.enterParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitParameterList) {
			listener.exitParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public storageLocation(): StorageLocationContext | undefined {
		return this.tryGetRuleContext(0, StorageLocationContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_parameter; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterParameter) {
			listener.enterParameter(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitParameter) {
			listener.exitParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventParameterListContext extends ParserRuleContext {
	public eventParameter(): EventParameterContext[];
	public eventParameter(i: number): EventParameterContext;
	public eventParameter(i?: number): EventParameterContext | EventParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EventParameterContext);
		} else {
			return this.getRuleContext(i, EventParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_eventParameterList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterEventParameterList) {
			listener.enterEventParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitEventParameterList) {
			listener.exitEventParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitEventParameterList) {
			return visitor.visitEventParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventParameterContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public IndexedKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.IndexedKeyword, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_eventParameter; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterEventParameter) {
			listener.enterEventParameter(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitEventParameter) {
			listener.exitEventParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitEventParameter) {
			return visitor.visitEventParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTypeParameterListContext extends ParserRuleContext {
	public functionTypeParameter(): FunctionTypeParameterContext[];
	public functionTypeParameter(i: number): FunctionTypeParameterContext;
	public functionTypeParameter(i?: number): FunctionTypeParameterContext | FunctionTypeParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionTypeParameterContext);
		} else {
			return this.getRuleContext(i, FunctionTypeParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_functionTypeParameterList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterFunctionTypeParameterList) {
			listener.enterFunctionTypeParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitFunctionTypeParameterList) {
			listener.exitFunctionTypeParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionTypeParameterList) {
			return visitor.visitFunctionTypeParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTypeParameterContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public storageLocation(): StorageLocationContext | undefined {
		return this.tryGetRuleContext(0, StorageLocationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_functionTypeParameter; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterFunctionTypeParameter) {
			listener.enterFunctionTypeParameter(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitFunctionTypeParameter) {
			listener.exitFunctionTypeParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionTypeParameter) {
			return visitor.visitFunctionTypeParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public storageLocation(): StorageLocationContext | undefined {
		return this.tryGetRuleContext(0, StorageLocationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	public elementaryTypeName(): ElementaryTypeNameContext | undefined {
		return this.tryGetRuleContext(0, ElementaryTypeNameContext);
	}
	public userDefinedTypeName(): UserDefinedTypeNameContext | undefined {
		return this.tryGetRuleContext(0, UserDefinedTypeNameContext);
	}
	public mapping(): MappingContext | undefined {
		return this.tryGetRuleContext(0, MappingContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public functionTypeName(): FunctionTypeNameContext | undefined {
		return this.tryGetRuleContext(0, FunctionTypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_typeName; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterTypeName) {
			listener.enterTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitTypeName) {
			listener.exitTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitTypeName) {
			return visitor.visitTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UserDefinedTypeNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_userDefinedTypeName; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterUserDefinedTypeName) {
			listener.enterUserDefinedTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitUserDefinedTypeName) {
			listener.exitUserDefinedTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitUserDefinedTypeName) {
			return visitor.visitUserDefinedTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MappingContext extends ParserRuleContext {
	public elementaryTypeName(): ElementaryTypeNameContext {
		return this.getRuleContext(0, ElementaryTypeNameContext);
	}
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_mapping; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterMapping) {
			listener.enterMapping(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitMapping) {
			listener.exitMapping(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitMapping) {
			return visitor.visitMapping(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTypeNameContext extends ParserRuleContext {
	public functionTypeParameterList(): FunctionTypeParameterListContext[];
	public functionTypeParameterList(i: number): FunctionTypeParameterListContext;
	public functionTypeParameterList(i?: number): FunctionTypeParameterListContext | FunctionTypeParameterListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionTypeParameterListContext);
		} else {
			return this.getRuleContext(i, FunctionTypeParameterListContext);
		}
	}
	public InternalKeyword(): TerminalNode[];
	public InternalKeyword(i: number): TerminalNode;
	public InternalKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.InternalKeyword);
		} else {
			return this.getToken(SolidityParser.InternalKeyword, i);
		}
	}
	public ExternalKeyword(): TerminalNode[];
	public ExternalKeyword(i: number): TerminalNode;
	public ExternalKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.ExternalKeyword);
		} else {
			return this.getToken(SolidityParser.ExternalKeyword, i);
		}
	}
	public stateMutability(): StateMutabilityContext[];
	public stateMutability(i: number): StateMutabilityContext;
	public stateMutability(i?: number): StateMutabilityContext | StateMutabilityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StateMutabilityContext);
		} else {
			return this.getRuleContext(i, StateMutabilityContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_functionTypeName; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterFunctionTypeName) {
			listener.enterFunctionTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitFunctionTypeName) {
			listener.exitFunctionTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionTypeName) {
			return visitor.visitFunctionTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StorageLocationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_storageLocation; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterStorageLocation) {
			listener.enterStorageLocation(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitStorageLocation) {
			listener.exitStorageLocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStorageLocation) {
			return visitor.visitStorageLocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateMutabilityContext extends ParserRuleContext {
	public PureKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.PureKeyword, 0); }
	public ConstantKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.ConstantKeyword, 0); }
	public ViewKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.ViewKeyword, 0); }
	public PayableKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.PayableKeyword, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_stateMutability; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterStateMutability) {
			listener.enterStateMutability(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitStateMutability) {
			listener.exitStateMutability(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStateMutability) {
			return visitor.visitStateMutability(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_block; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public inlineAssemblyStatement(): InlineAssemblyStatementContext | undefined {
		return this.tryGetRuleContext(0, InlineAssemblyStatementContext);
	}
	public doWhileStatement(): DoWhileStatementContext | undefined {
		return this.tryGetRuleContext(0, DoWhileStatementContext);
	}
	public continueStatement(): ContinueStatementContext | undefined {
		return this.tryGetRuleContext(0, ContinueStatementContext);
	}
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public throwStatement(): ThrowStatementContext | undefined {
		return this.tryGetRuleContext(0, ThrowStatementContext);
	}
	public emitStatement(): EmitStatementContext | undefined {
		return this.tryGetRuleContext(0, EmitStatementContext);
	}
	public simpleStatement(): SimpleStatementContext | undefined {
		return this.tryGetRuleContext(0, SimpleStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_statement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_whileStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleStatementContext extends ParserRuleContext {
	public variableDeclarationStatement(): VariableDeclarationStatementContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_simpleStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterSimpleStatement) {
			listener.enterSimpleStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitSimpleStatement) {
			listener.exitSimpleStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitSimpleStatement) {
			return visitor.visitSimpleStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStatementContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public simpleStatement(): SimpleStatementContext | undefined {
		return this.tryGetRuleContext(0, SimpleStatementContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_forStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InlineAssemblyStatementContext extends ParserRuleContext {
	public assemblyBlock(): AssemblyBlockContext {
		return this.getRuleContext(0, AssemblyBlockContext);
	}
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_inlineAssemblyStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterInlineAssemblyStatement) {
			listener.enterInlineAssemblyStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitInlineAssemblyStatement) {
			listener.exitInlineAssemblyStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitInlineAssemblyStatement) {
			return visitor.visitInlineAssemblyStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DoWhileStatementContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_doWhileStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterDoWhileStatement) {
			listener.enterDoWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitDoWhileStatement) {
			listener.exitDoWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitDoWhileStatement) {
			return visitor.visitDoWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	public ContinueKeyword(): TerminalNode { return this.getToken(SolidityParser.ContinueKeyword, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_continueStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterContinueStatement) {
			listener.enterContinueStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitContinueStatement) {
			listener.exitContinueStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	public BreakKeyword(): TerminalNode { return this.getToken(SolidityParser.BreakKeyword, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_breakStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterBreakStatement) {
			listener.enterBreakStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitBreakStatement) {
			listener.exitBreakStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThrowStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_throwStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterThrowStatement) {
			listener.enterThrowStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitThrowStatement) {
			listener.exitThrowStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitThrowStatement) {
			return visitor.visitThrowStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmitStatementContext extends ParserRuleContext {
	public functionCall(): FunctionCallContext {
		return this.getRuleContext(0, FunctionCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_emitStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterEmitStatement) {
			listener.enterEmitStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitEmitStatement) {
			listener.exitEmitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitEmitStatement) {
			return visitor.visitEmitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationStatementContext extends ParserRuleContext {
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	public variableDeclarationList(): VariableDeclarationListContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationListContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_variableDeclarationStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterVariableDeclarationStatement) {
			listener.enterVariableDeclarationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitVariableDeclarationStatement) {
			listener.exitVariableDeclarationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVariableDeclarationStatement) {
			return visitor.visitVariableDeclarationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationListContext extends ParserRuleContext {
	public variableDeclaration(): VariableDeclarationContext[];
	public variableDeclaration(i: number): VariableDeclarationContext;
	public variableDeclaration(i?: number): VariableDeclarationContext | VariableDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclarationContext);
		} else {
			return this.getRuleContext(i, VariableDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_variableDeclarationList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterVariableDeclarationList) {
			listener.enterVariableDeclarationList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitVariableDeclarationList) {
			listener.exitVariableDeclarationList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVariableDeclarationList) {
			return visitor.visitVariableDeclarationList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_identifierList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterIdentifierList) {
			listener.enterIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitIdentifierList) {
			listener.exitIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitIdentifierList) {
			return visitor.visitIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementaryTypeNameContext extends ParserRuleContext {
	public Int(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Int, 0); }
	public Uint(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Uint, 0); }
	public Byte(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Byte, 0); }
	public Fixed(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Fixed, 0); }
	public Ufixed(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Ufixed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_elementaryTypeName; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterElementaryTypeName) {
			listener.enterElementaryTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitElementaryTypeName) {
			listener.exitElementaryTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitElementaryTypeName) {
			return visitor.visitElementaryTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public functionCallArguments(): FunctionCallArgumentsContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallArgumentsContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public primaryExpression(): PrimaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_expression; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.BooleanLiteral, 0); }
	public numberLiteral(): NumberLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumberLiteralContext);
	}
	public HexLiteral(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.HexLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.StringLiteral, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public tupleExpression(): TupleExpressionContext | undefined {
		return this.tryGetRuleContext(0, TupleExpressionContext);
	}
	public elementaryTypeNameExpression(): ElementaryTypeNameExpressionContext | undefined {
		return this.tryGetRuleContext(0, ElementaryTypeNameExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_primaryExpression; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterPrimaryExpression) {
			listener.enterPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitPrimaryExpression) {
			listener.exitPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitPrimaryExpression) {
			return visitor.visitPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameValueListContext extends ParserRuleContext {
	public nameValue(): NameValueContext[];
	public nameValue(i: number): NameValueContext;
	public nameValue(i?: number): NameValueContext | NameValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameValueContext);
		} else {
			return this.getRuleContext(i, NameValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_nameValueList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterNameValueList) {
			listener.enterNameValueList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitNameValueList) {
			listener.exitNameValueList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitNameValueList) {
			return visitor.visitNameValueList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameValueContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_nameValue; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterNameValue) {
			listener.enterNameValue(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitNameValue) {
			listener.exitNameValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitNameValue) {
			return visitor.visitNameValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallArgumentsContext extends ParserRuleContext {
	public nameValueList(): NameValueListContext | undefined {
		return this.tryGetRuleContext(0, NameValueListContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_functionCallArguments; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterFunctionCallArguments) {
			listener.enterFunctionCallArguments(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitFunctionCallArguments) {
			listener.exitFunctionCallArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionCallArguments) {
			return visitor.visitFunctionCallArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public functionCallArguments(): FunctionCallArgumentsContext {
		return this.getRuleContext(0, FunctionCallArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_functionCall; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyBlockContext extends ParserRuleContext {
	public assemblyItem(): AssemblyItemContext[];
	public assemblyItem(i: number): AssemblyItemContext;
	public assemblyItem(i?: number): AssemblyItemContext | AssemblyItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssemblyItemContext);
		} else {
			return this.getRuleContext(i, AssemblyItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyBlock; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyBlock) {
			listener.enterAssemblyBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyBlock) {
			listener.exitAssemblyBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyBlock) {
			return visitor.visitAssemblyBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyItemContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public assemblyBlock(): AssemblyBlockContext | undefined {
		return this.tryGetRuleContext(0, AssemblyBlockContext);
	}
	public assemblyExpression(): AssemblyExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssemblyExpressionContext);
	}
	public assemblyLocalDefinition(): AssemblyLocalDefinitionContext | undefined {
		return this.tryGetRuleContext(0, AssemblyLocalDefinitionContext);
	}
	public assemblyAssignment(): AssemblyAssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssemblyAssignmentContext);
	}
	public assemblyStackAssignment(): AssemblyStackAssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssemblyStackAssignmentContext);
	}
	public labelDefinition(): LabelDefinitionContext | undefined {
		return this.tryGetRuleContext(0, LabelDefinitionContext);
	}
	public assemblySwitch(): AssemblySwitchContext | undefined {
		return this.tryGetRuleContext(0, AssemblySwitchContext);
	}
	public assemblyFunctionDefinition(): AssemblyFunctionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, AssemblyFunctionDefinitionContext);
	}
	public assemblyFor(): AssemblyForContext | undefined {
		return this.tryGetRuleContext(0, AssemblyForContext);
	}
	public assemblyIf(): AssemblyIfContext | undefined {
		return this.tryGetRuleContext(0, AssemblyIfContext);
	}
	public BreakKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.BreakKeyword, 0); }
	public ContinueKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.ContinueKeyword, 0); }
	public subAssembly(): SubAssemblyContext | undefined {
		return this.tryGetRuleContext(0, SubAssemblyContext);
	}
	public numberLiteral(): NumberLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumberLiteralContext);
	}
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.StringLiteral, 0); }
	public HexLiteral(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.HexLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyItem; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyItem) {
			listener.enterAssemblyItem(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyItem) {
			listener.exitAssemblyItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyItem) {
			return visitor.visitAssemblyItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyExpressionContext extends ParserRuleContext {
	public assemblyCall(): AssemblyCallContext | undefined {
		return this.tryGetRuleContext(0, AssemblyCallContext);
	}
	public assemblyLiteral(): AssemblyLiteralContext | undefined {
		return this.tryGetRuleContext(0, AssemblyLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyExpression; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyExpression) {
			listener.enterAssemblyExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyExpression) {
			listener.exitAssemblyExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyExpression) {
			return visitor.visitAssemblyExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyCallContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public assemblyExpression(): AssemblyExpressionContext[];
	public assemblyExpression(i: number): AssemblyExpressionContext;
	public assemblyExpression(i?: number): AssemblyExpressionContext | AssemblyExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssemblyExpressionContext);
		} else {
			return this.getRuleContext(i, AssemblyExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyCall; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyCall) {
			listener.enterAssemblyCall(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyCall) {
			listener.exitAssemblyCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyCall) {
			return visitor.visitAssemblyCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyLocalDefinitionContext extends ParserRuleContext {
	public assemblyIdentifierOrList(): AssemblyIdentifierOrListContext {
		return this.getRuleContext(0, AssemblyIdentifierOrListContext);
	}
	public assemblyExpression(): AssemblyExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssemblyExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyLocalDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyLocalDefinition) {
			listener.enterAssemblyLocalDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyLocalDefinition) {
			listener.exitAssemblyLocalDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyLocalDefinition) {
			return visitor.visitAssemblyLocalDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyAssignmentContext extends ParserRuleContext {
	public assemblyIdentifierOrList(): AssemblyIdentifierOrListContext {
		return this.getRuleContext(0, AssemblyIdentifierOrListContext);
	}
	public assemblyExpression(): AssemblyExpressionContext {
		return this.getRuleContext(0, AssemblyExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyAssignment; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyAssignment) {
			listener.enterAssemblyAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyAssignment) {
			listener.exitAssemblyAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyAssignment) {
			return visitor.visitAssemblyAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyIdentifierOrListContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public assemblyIdentifierList(): AssemblyIdentifierListContext | undefined {
		return this.tryGetRuleContext(0, AssemblyIdentifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyIdentifierOrList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyIdentifierOrList) {
			listener.enterAssemblyIdentifierOrList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyIdentifierOrList) {
			listener.exitAssemblyIdentifierOrList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyIdentifierOrList) {
			return visitor.visitAssemblyIdentifierOrList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyIdentifierListContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyIdentifierList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyIdentifierList) {
			listener.enterAssemblyIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyIdentifierList) {
			listener.exitAssemblyIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyIdentifierList) {
			return visitor.visitAssemblyIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyStackAssignmentContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyStackAssignment; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyStackAssignment) {
			listener.enterAssemblyStackAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyStackAssignment) {
			listener.exitAssemblyStackAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyStackAssignment) {
			return visitor.visitAssemblyStackAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_labelDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterLabelDefinition) {
			listener.enterLabelDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitLabelDefinition) {
			listener.exitLabelDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitLabelDefinition) {
			return visitor.visitLabelDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblySwitchContext extends ParserRuleContext {
	public assemblyExpression(): AssemblyExpressionContext {
		return this.getRuleContext(0, AssemblyExpressionContext);
	}
	public assemblyCase(): AssemblyCaseContext[];
	public assemblyCase(i: number): AssemblyCaseContext;
	public assemblyCase(i?: number): AssemblyCaseContext | AssemblyCaseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssemblyCaseContext);
		} else {
			return this.getRuleContext(i, AssemblyCaseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblySwitch; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblySwitch) {
			listener.enterAssemblySwitch(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblySwitch) {
			listener.exitAssemblySwitch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblySwitch) {
			return visitor.visitAssemblySwitch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyCaseContext extends ParserRuleContext {
	public assemblyLiteral(): AssemblyLiteralContext | undefined {
		return this.tryGetRuleContext(0, AssemblyLiteralContext);
	}
	public assemblyBlock(): AssemblyBlockContext {
		return this.getRuleContext(0, AssemblyBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyCase; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyCase) {
			listener.enterAssemblyCase(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyCase) {
			listener.exitAssemblyCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyCase) {
			return visitor.visitAssemblyCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyFunctionDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public assemblyBlock(): AssemblyBlockContext {
		return this.getRuleContext(0, AssemblyBlockContext);
	}
	public assemblyIdentifierList(): AssemblyIdentifierListContext | undefined {
		return this.tryGetRuleContext(0, AssemblyIdentifierListContext);
	}
	public assemblyFunctionReturns(): AssemblyFunctionReturnsContext | undefined {
		return this.tryGetRuleContext(0, AssemblyFunctionReturnsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyFunctionDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyFunctionDefinition) {
			listener.enterAssemblyFunctionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyFunctionDefinition) {
			listener.exitAssemblyFunctionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyFunctionDefinition) {
			return visitor.visitAssemblyFunctionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyFunctionReturnsContext extends ParserRuleContext {
	public assemblyIdentifierList(): AssemblyIdentifierListContext | undefined {
		return this.tryGetRuleContext(0, AssemblyIdentifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyFunctionReturns; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyFunctionReturns) {
			listener.enterAssemblyFunctionReturns(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyFunctionReturns) {
			listener.exitAssemblyFunctionReturns(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyFunctionReturns) {
			return visitor.visitAssemblyFunctionReturns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyForContext extends ParserRuleContext {
	public assemblyExpression(): AssemblyExpressionContext[];
	public assemblyExpression(i: number): AssemblyExpressionContext;
	public assemblyExpression(i?: number): AssemblyExpressionContext | AssemblyExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssemblyExpressionContext);
		} else {
			return this.getRuleContext(i, AssemblyExpressionContext);
		}
	}
	public assemblyBlock(): AssemblyBlockContext[];
	public assemblyBlock(i: number): AssemblyBlockContext;
	public assemblyBlock(i?: number): AssemblyBlockContext | AssemblyBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssemblyBlockContext);
		} else {
			return this.getRuleContext(i, AssemblyBlockContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyFor; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyFor) {
			listener.enterAssemblyFor(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyFor) {
			listener.exitAssemblyFor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyFor) {
			return visitor.visitAssemblyFor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyIfContext extends ParserRuleContext {
	public assemblyExpression(): AssemblyExpressionContext {
		return this.getRuleContext(0, AssemblyExpressionContext);
	}
	public assemblyBlock(): AssemblyBlockContext {
		return this.getRuleContext(0, AssemblyBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyIf; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyIf) {
			listener.enterAssemblyIf(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyIf) {
			listener.exitAssemblyIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyIf) {
			return visitor.visitAssemblyIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyLiteralContext extends ParserRuleContext {
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.StringLiteral, 0); }
	public DecimalNumber(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.DecimalNumber, 0); }
	public HexNumber(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.HexNumber, 0); }
	public HexLiteral(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.HexLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyLiteral; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyLiteral) {
			listener.enterAssemblyLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyLiteral) {
			listener.exitAssemblyLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyLiteral) {
			return visitor.visitAssemblyLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubAssemblyContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public assemblyBlock(): AssemblyBlockContext {
		return this.getRuleContext(0, AssemblyBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_subAssembly; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterSubAssembly) {
			listener.enterSubAssembly(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitSubAssembly) {
			listener.exitSubAssembly(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitSubAssembly) {
			return visitor.visitSubAssembly(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_tupleExpression; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterTupleExpression) {
			listener.enterTupleExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitTupleExpression) {
			listener.exitTupleExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitTupleExpression) {
			return visitor.visitTupleExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementaryTypeNameExpressionContext extends ParserRuleContext {
	public elementaryTypeName(): ElementaryTypeNameContext {
		return this.getRuleContext(0, ElementaryTypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_elementaryTypeNameExpression; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterElementaryTypeNameExpression) {
			listener.enterElementaryTypeNameExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitElementaryTypeNameExpression) {
			listener.exitElementaryTypeNameExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitElementaryTypeNameExpression) {
			return visitor.visitElementaryTypeNameExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberLiteralContext extends ParserRuleContext {
	public DecimalNumber(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.DecimalNumber, 0); }
	public HexNumber(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.HexNumber, 0); }
	public NumberUnit(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.NumberUnit, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_numberLiteral; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterNumberLiteral) {
			listener.enterNumberLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitNumberLiteral) {
			listener.exitNumberLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitNumberLiteral) {
			return visitor.visitNumberLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(SolidityParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_identifier; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


