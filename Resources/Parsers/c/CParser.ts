// Generated from Resources/Parsers/c/C.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { CListener } from "./CListener";
import { CVisitor } from "./CVisitor";


export class CParser extends Parser {
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
	public static readonly Auto = 15;
	public static readonly Break = 16;
	public static readonly Case = 17;
	public static readonly Char = 18;
	public static readonly Const = 19;
	public static readonly Continue = 20;
	public static readonly Default = 21;
	public static readonly Do = 22;
	public static readonly Double = 23;
	public static readonly Else = 24;
	public static readonly Enum = 25;
	public static readonly Extern = 26;
	public static readonly Float = 27;
	public static readonly For = 28;
	public static readonly Goto = 29;
	public static readonly If = 30;
	public static readonly Inline = 31;
	public static readonly Int = 32;
	public static readonly Long = 33;
	public static readonly Register = 34;
	public static readonly Restrict = 35;
	public static readonly Return = 36;
	public static readonly Short = 37;
	public static readonly Signed = 38;
	public static readonly Sizeof = 39;
	public static readonly Static = 40;
	public static readonly Struct = 41;
	public static readonly Switch = 42;
	public static readonly Typedef = 43;
	public static readonly Union = 44;
	public static readonly Unsigned = 45;
	public static readonly Void = 46;
	public static readonly Volatile = 47;
	public static readonly While = 48;
	public static readonly Alignas = 49;
	public static readonly Alignof = 50;
	public static readonly Atomic = 51;
	public static readonly Bool = 52;
	public static readonly Complex = 53;
	public static readonly Generic = 54;
	public static readonly Imaginary = 55;
	public static readonly Noreturn = 56;
	public static readonly StaticAssert = 57;
	public static readonly ThreadLocal = 58;
	public static readonly LeftParen = 59;
	public static readonly RightParen = 60;
	public static readonly LeftBracket = 61;
	public static readonly RightBracket = 62;
	public static readonly LeftBrace = 63;
	public static readonly RightBrace = 64;
	public static readonly Less = 65;
	public static readonly LessEqual = 66;
	public static readonly Greater = 67;
	public static readonly GreaterEqual = 68;
	public static readonly LeftShift = 69;
	public static readonly RightShift = 70;
	public static readonly Plus = 71;
	public static readonly PlusPlus = 72;
	public static readonly Minus = 73;
	public static readonly MinusMinus = 74;
	public static readonly Star = 75;
	public static readonly Div = 76;
	public static readonly Mod = 77;
	public static readonly And = 78;
	public static readonly Or = 79;
	public static readonly AndAnd = 80;
	public static readonly OrOr = 81;
	public static readonly Caret = 82;
	public static readonly Not = 83;
	public static readonly Tilde = 84;
	public static readonly Question = 85;
	public static readonly Colon = 86;
	public static readonly Semi = 87;
	public static readonly Comma = 88;
	public static readonly Assign = 89;
	public static readonly StarAssign = 90;
	public static readonly DivAssign = 91;
	public static readonly ModAssign = 92;
	public static readonly PlusAssign = 93;
	public static readonly MinusAssign = 94;
	public static readonly LeftShiftAssign = 95;
	public static readonly RightShiftAssign = 96;
	public static readonly AndAssign = 97;
	public static readonly XorAssign = 98;
	public static readonly OrAssign = 99;
	public static readonly Equal = 100;
	public static readonly NotEqual = 101;
	public static readonly Arrow = 102;
	public static readonly Dot = 103;
	public static readonly Ellipsis = 104;
	public static readonly Identifier = 105;
	public static readonly Constant = 106;
	public static readonly DigitSequence = 107;
	public static readonly StringLiteral = 108;
	public static readonly ComplexDefine = 109;
	public static readonly IncludeDirective = 110;
	public static readonly AsmBlock = 111;
	public static readonly LineAfterPreprocessing = 112;
	public static readonly LineDirective = 113;
	public static readonly PragmaDirective = 114;
	public static readonly Whitespace = 115;
	public static readonly Newline = 116;
	public static readonly BlockComment = 117;
	public static readonly LineComment = 118;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_primaryExpression = 1;
	public static readonly RULE_genericSelection = 2;
	public static readonly RULE_genericAssocList = 3;
	public static readonly RULE_genericAssociation = 4;
	public static readonly RULE_postfixExpression = 5;
	public static readonly RULE_argumentExpressionList = 6;
	public static readonly RULE_unaryExpression = 7;
	public static readonly RULE_unaryOperator = 8;
	public static readonly RULE_castExpression = 9;
	public static readonly RULE_multiplicativeExpression = 10;
	public static readonly RULE_additiveExpression = 11;
	public static readonly RULE_shiftExpression = 12;
	public static readonly RULE_relationalExpression = 13;
	public static readonly RULE_equalityExpression = 14;
	public static readonly RULE_andExpression = 15;
	public static readonly RULE_exclusiveOrExpression = 16;
	public static readonly RULE_inclusiveOrExpression = 17;
	public static readonly RULE_logicalAndExpression = 18;
	public static readonly RULE_logicalOrExpression = 19;
	public static readonly RULE_conditionalExpression = 20;
	public static readonly RULE_assignmentExpression = 21;
	public static readonly RULE_assignmentOperator = 22;
	public static readonly RULE_expression = 23;
	public static readonly RULE_constantExpression = 24;
	public static readonly RULE_declaration = 25;
	public static readonly RULE_declarationSpecifiers = 26;
	public static readonly RULE_declarationSpecifiers2 = 27;
	public static readonly RULE_declarationSpecifier = 28;
	public static readonly RULE_initDeclaratorList = 29;
	public static readonly RULE_initDeclarator = 30;
	public static readonly RULE_storageClassSpecifier = 31;
	public static readonly RULE_typeSpecifier = 32;
	public static readonly RULE_structOrUnionSpecifier = 33;
	public static readonly RULE_structOrUnion = 34;
	public static readonly RULE_structDeclarationList = 35;
	public static readonly RULE_structDeclaration = 36;
	public static readonly RULE_specifierQualifierList = 37;
	public static readonly RULE_structDeclaratorList = 38;
	public static readonly RULE_structDeclarator = 39;
	public static readonly RULE_enumSpecifier = 40;
	public static readonly RULE_enumeratorList = 41;
	public static readonly RULE_enumerator = 42;
	public static readonly RULE_enumerationConstant = 43;
	public static readonly RULE_atomicTypeSpecifier = 44;
	public static readonly RULE_typeQualifier = 45;
	public static readonly RULE_functionSpecifier = 46;
	public static readonly RULE_alignmentSpecifier = 47;
	public static readonly RULE_declarator = 48;
	public static readonly RULE_directDeclarator = 49;
	public static readonly RULE_gccDeclaratorExtension = 50;
	public static readonly RULE_gccAttributeSpecifier = 51;
	public static readonly RULE_gccAttributeList = 52;
	public static readonly RULE_gccAttribute = 53;
	public static readonly RULE_nestedParenthesesBlock = 54;
	public static readonly RULE_pointer = 55;
	public static readonly RULE_typeQualifierList = 56;
	public static readonly RULE_parameterTypeList = 57;
	public static readonly RULE_parameterList = 58;
	public static readonly RULE_parameterDeclaration = 59;
	public static readonly RULE_identifierList = 60;
	public static readonly RULE_typeName = 61;
	public static readonly RULE_abstractDeclarator = 62;
	public static readonly RULE_directAbstractDeclarator = 63;
	public static readonly RULE_typedefName = 64;
	public static readonly RULE_initializer = 65;
	public static readonly RULE_initializerList = 66;
	public static readonly RULE_designation = 67;
	public static readonly RULE_designatorList = 68;
	public static readonly RULE_designator = 69;
	public static readonly RULE_staticAssertDeclaration = 70;
	public static readonly RULE_statement = 71;
	public static readonly RULE_labeledStatement = 72;
	public static readonly RULE_compoundStatement = 73;
	public static readonly RULE_blockItemList = 74;
	public static readonly RULE_blockItem = 75;
	public static readonly RULE_expressionStatement = 76;
	public static readonly RULE_selectionStatement = 77;
	public static readonly RULE_iterationStatement = 78;
	public static readonly RULE_forCondition = 79;
	public static readonly RULE_forDeclaration = 80;
	public static readonly RULE_forExpression = 81;
	public static readonly RULE_jumpStatement = 82;
	public static readonly RULE_translationUnit = 83;
	public static readonly RULE_externalDeclaration = 84;
	public static readonly RULE_functionDefinition = 85;
	public static readonly RULE_declarationList = 86;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "primaryExpression", "genericSelection", "genericAssocList", 
		"genericAssociation", "postfixExpression", "argumentExpressionList", "unaryExpression", 
		"unaryOperator", "castExpression", "multiplicativeExpression", "additiveExpression", 
		"shiftExpression", "relationalExpression", "equalityExpression", "andExpression", 
		"exclusiveOrExpression", "inclusiveOrExpression", "logicalAndExpression", 
		"logicalOrExpression", "conditionalExpression", "assignmentExpression", 
		"assignmentOperator", "expression", "constantExpression", "declaration", 
		"declarationSpecifiers", "declarationSpecifiers2", "declarationSpecifier", 
		"initDeclaratorList", "initDeclarator", "storageClassSpecifier", "typeSpecifier", 
		"structOrUnionSpecifier", "structOrUnion", "structDeclarationList", "structDeclaration", 
		"specifierQualifierList", "structDeclaratorList", "structDeclarator", 
		"enumSpecifier", "enumeratorList", "enumerator", "enumerationConstant", 
		"atomicTypeSpecifier", "typeQualifier", "functionSpecifier", "alignmentSpecifier", 
		"declarator", "directDeclarator", "gccDeclaratorExtension", "gccAttributeSpecifier", 
		"gccAttributeList", "gccAttribute", "nestedParenthesesBlock", "pointer", 
		"typeQualifierList", "parameterTypeList", "parameterList", "parameterDeclaration", 
		"identifierList", "typeName", "abstractDeclarator", "directAbstractDeclarator", 
		"typedefName", "initializer", "initializerList", "designation", "designatorList", 
		"designator", "staticAssertDeclaration", "statement", "labeledStatement", 
		"compoundStatement", "blockItemList", "blockItem", "expressionStatement", 
		"selectionStatement", "iterationStatement", "forCondition", "forDeclaration", 
		"forExpression", "jumpStatement", "translationUnit", "externalDeclaration", 
		"functionDefinition", "declarationList",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'__extension__'", "'__builtin_va_arg'", "'__builtin_offsetof'", 
		"'__m128'", "'__m128d'", "'__m128i'", "'__typeof__'", "'__inline__'", 
		"'__stdcall'", "'__declspec'", "'__asm'", "'__attribute__'", "'__asm__'", 
		"'__volatile__'", "'auto'", "'break'", "'case'", "'char'", "'const'", 
		"'continue'", "'default'", "'do'", "'double'", "'else'", "'enum'", "'extern'", 
		"'float'", "'for'", "'goto'", "'if'", "'inline'", "'int'", "'long'", "'register'", 
		"'restrict'", "'return'", "'short'", "'signed'", "'sizeof'", "'static'", 
		"'struct'", "'switch'", "'typedef'", "'union'", "'unsigned'", "'void'", 
		"'volatile'", "'while'", "'_Alignas'", "'_Alignof'", "'_Atomic'", "'_Bool'", 
		"'_Complex'", "'_Generic'", "'_Imaginary'", "'_Noreturn'", "'_Static_assert'", 
		"'_Thread_local'", "'('", "')'", "'['", "']'", "'{'", "'}'", "'<'", "'<='", 
		"'>'", "'>='", "'<<'", "'>>'", "'+'", "'++'", "'-'", "'--'", "'*'", "'/'", 
		"'%'", "'&'", "'|'", "'&&'", "'||'", "'^'", "'!'", "'~'", "'?'", "':'", 
		"';'", "','", "'='", "'*='", "'/='", "'%='", "'+='", "'-='", "'<<='", 
		"'>>='", "'&='", "'^='", "'|='", "'=='", "'!='", "'->'", "'.'", "'...'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "Auto", "Break", "Case", "Char", "Const", "Continue", "Default", 
		"Do", "Double", "Else", "Enum", "Extern", "Float", "For", "Goto", "If", 
		"Inline", "Int", "Long", "Register", "Restrict", "Return", "Short", "Signed", 
		"Sizeof", "Static", "Struct", "Switch", "Typedef", "Union", "Unsigned", 
		"Void", "Volatile", "While", "Alignas", "Alignof", "Atomic", "Bool", "Complex", 
		"Generic", "Imaginary", "Noreturn", "StaticAssert", "ThreadLocal", "LeftParen", 
		"RightParen", "LeftBracket", "RightBracket", "LeftBrace", "RightBrace", 
		"Less", "LessEqual", "Greater", "GreaterEqual", "LeftShift", "RightShift", 
		"Plus", "PlusPlus", "Minus", "MinusMinus", "Star", "Div", "Mod", "And", 
		"Or", "AndAnd", "OrOr", "Caret", "Not", "Tilde", "Question", "Colon", 
		"Semi", "Comma", "Assign", "StarAssign", "DivAssign", "ModAssign", "PlusAssign", 
		"MinusAssign", "LeftShiftAssign", "RightShiftAssign", "AndAssign", "XorAssign", 
		"OrAssign", "Equal", "NotEqual", "Arrow", "Dot", "Ellipsis", "Identifier", 
		"Constant", "DigitSequence", "StringLiteral", "ComplexDefine", "IncludeDirective", 
		"AsmBlock", "LineAfterPreprocessing", "LineDirective", "PragmaDirective", 
		"Whitespace", "Newline", "BlockComment", "LineComment",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CParser._LITERAL_NAMES, CParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "C.g4"; }

	// @Override
	public get ruleNames(): string[] { return CParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CParser._ATN, this);
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CParser.RULE_compilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 175;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.T__9) | (1 << CParser.T__11) | (1 << CParser.Auto) | (1 << CParser.Char) | (1 << CParser.Const) | (1 << CParser.Double) | (1 << CParser.Enum) | (1 << CParser.Extern) | (1 << CParser.Float) | (1 << CParser.Inline))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Int - 32)) | (1 << (CParser.Long - 32)) | (1 << (CParser.Register - 32)) | (1 << (CParser.Restrict - 32)) | (1 << (CParser.Short - 32)) | (1 << (CParser.Signed - 32)) | (1 << (CParser.Static - 32)) | (1 << (CParser.Struct - 32)) | (1 << (CParser.Typedef - 32)) | (1 << (CParser.Union - 32)) | (1 << (CParser.Unsigned - 32)) | (1 << (CParser.Void - 32)) | (1 << (CParser.Volatile - 32)) | (1 << (CParser.Alignas - 32)) | (1 << (CParser.Atomic - 32)) | (1 << (CParser.Bool - 32)) | (1 << (CParser.Complex - 32)) | (1 << (CParser.Noreturn - 32)) | (1 << (CParser.StaticAssert - 32)) | (1 << (CParser.ThreadLocal - 32)) | (1 << (CParser.LeftParen - 32)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CParser.Star - 75)) | (1 << (CParser.Caret - 75)) | (1 << (CParser.Identifier - 75)))) !== 0)) {
				{
				this.state = 174;
				this.translationUnit(0);
				}
			}

			this.state = 177;
			this.match(CParser.EOF);
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
	public primaryExpression(): PrimaryExpressionContext {
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CParser.RULE_primaryExpression);
		let _la: number;
		try {
			let _alt: number;
			this.state = 212;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 179;
				this.match(CParser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 180;
				this.match(CParser.Constant);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 182;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 181;
						this.match(CParser.StringLiteral);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 184;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 186;
				this.match(CParser.LeftParen);
				this.state = 187;
				this.expression(0);
				this.state = 188;
				this.match(CParser.RightParen);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 190;
				this.genericSelection();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 192;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CParser.T__0) {
					{
					this.state = 191;
					this.match(CParser.T__0);
					}
				}

				this.state = 194;
				this.match(CParser.LeftParen);
				this.state = 195;
				this.compoundStatement();
				this.state = 196;
				this.match(CParser.RightParen);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 198;
				this.match(CParser.T__1);
				this.state = 199;
				this.match(CParser.LeftParen);
				this.state = 200;
				this.unaryExpression();
				this.state = 201;
				this.match(CParser.Comma);
				this.state = 202;
				this.typeName();
				this.state = 203;
				this.match(CParser.RightParen);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 205;
				this.match(CParser.T__2);
				this.state = 206;
				this.match(CParser.LeftParen);
				this.state = 207;
				this.typeName();
				this.state = 208;
				this.match(CParser.Comma);
				this.state = 209;
				this.unaryExpression();
				this.state = 210;
				this.match(CParser.RightParen);
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
	public genericSelection(): GenericSelectionContext {
		let _localctx: GenericSelectionContext = new GenericSelectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CParser.RULE_genericSelection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 214;
			this.match(CParser.Generic);
			this.state = 215;
			this.match(CParser.LeftParen);
			this.state = 216;
			this.assignmentExpression();
			this.state = 217;
			this.match(CParser.Comma);
			this.state = 218;
			this.genericAssocList(0);
			this.state = 219;
			this.match(CParser.RightParen);
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

	public genericAssocList(): GenericAssocListContext;
	public genericAssocList(_p: number): GenericAssocListContext;
	// @RuleVersion(0)
	public genericAssocList(_p?: number): GenericAssocListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: GenericAssocListContext = new GenericAssocListContext(this._ctx, _parentState);
		let _prevctx: GenericAssocListContext = _localctx;
		let _startState: number = 6;
		this.enterRecursionRule(_localctx, 6, CParser.RULE_genericAssocList, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 222;
			this.genericAssociation();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 229;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new GenericAssocListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_genericAssocList);
					this.state = 224;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 225;
					this.match(CParser.Comma);
					this.state = 226;
					this.genericAssociation();
					}
					}
				}
				this.state = 231;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
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
	public genericAssociation(): GenericAssociationContext {
		let _localctx: GenericAssociationContext = new GenericAssociationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CParser.RULE_genericAssociation);
		try {
			this.state = 239;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.T__0:
			case CParser.T__3:
			case CParser.T__4:
			case CParser.T__5:
			case CParser.T__6:
			case CParser.Char:
			case CParser.Const:
			case CParser.Double:
			case CParser.Enum:
			case CParser.Float:
			case CParser.Int:
			case CParser.Long:
			case CParser.Restrict:
			case CParser.Short:
			case CParser.Signed:
			case CParser.Struct:
			case CParser.Union:
			case CParser.Unsigned:
			case CParser.Void:
			case CParser.Volatile:
			case CParser.Atomic:
			case CParser.Bool:
			case CParser.Complex:
			case CParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 232;
				this.typeName();
				this.state = 233;
				this.match(CParser.Colon);
				this.state = 234;
				this.assignmentExpression();
				}
				break;
			case CParser.Default:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 236;
				this.match(CParser.Default);
				this.state = 237;
				this.match(CParser.Colon);
				this.state = 238;
				this.assignmentExpression();
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

	public postfixExpression(): PostfixExpressionContext;
	public postfixExpression(_p: number): PostfixExpressionContext;
	// @RuleVersion(0)
	public postfixExpression(_p?: number): PostfixExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PostfixExpressionContext = new PostfixExpressionContext(this._ctx, _parentState);
		let _prevctx: PostfixExpressionContext = _localctx;
		let _startState: number = 10;
		this.enterRecursionRule(_localctx, 10, CParser.RULE_postfixExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 275;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 242;
				this.primaryExpression();
				}
				break;

			case 2:
				{
				this.state = 243;
				this.match(CParser.LeftParen);
				this.state = 244;
				this.typeName();
				this.state = 245;
				this.match(CParser.RightParen);
				this.state = 246;
				this.match(CParser.LeftBrace);
				this.state = 247;
				this.initializerList(0);
				this.state = 248;
				this.match(CParser.RightBrace);
				}
				break;

			case 3:
				{
				this.state = 250;
				this.match(CParser.LeftParen);
				this.state = 251;
				this.typeName();
				this.state = 252;
				this.match(CParser.RightParen);
				this.state = 253;
				this.match(CParser.LeftBrace);
				this.state = 254;
				this.initializerList(0);
				this.state = 255;
				this.match(CParser.Comma);
				this.state = 256;
				this.match(CParser.RightBrace);
				}
				break;

			case 4:
				{
				this.state = 258;
				this.match(CParser.T__0);
				this.state = 259;
				this.match(CParser.LeftParen);
				this.state = 260;
				this.typeName();
				this.state = 261;
				this.match(CParser.RightParen);
				this.state = 262;
				this.match(CParser.LeftBrace);
				this.state = 263;
				this.initializerList(0);
				this.state = 264;
				this.match(CParser.RightBrace);
				}
				break;

			case 5:
				{
				this.state = 266;
				this.match(CParser.T__0);
				this.state = 267;
				this.match(CParser.LeftParen);
				this.state = 268;
				this.typeName();
				this.state = 269;
				this.match(CParser.RightParen);
				this.state = 270;
				this.match(CParser.LeftBrace);
				this.state = 271;
				this.initializerList(0);
				this.state = 272;
				this.match(CParser.Comma);
				this.state = 273;
				this.match(CParser.RightBrace);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 300;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 298;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
					case 1:
						{
						_localctx = new PostfixExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_postfixExpression);
						this.state = 277;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 278;
						this.match(CParser.LeftBracket);
						this.state = 279;
						this.expression(0);
						this.state = 280;
						this.match(CParser.RightBracket);
						}
						break;

					case 2:
						{
						_localctx = new PostfixExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_postfixExpression);
						this.state = 282;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 283;
						this.match(CParser.LeftParen);
						this.state = 285;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CParser.Sizeof - 39)) | (1 << (CParser.Alignof - 39)) | (1 << (CParser.Generic - 39)) | (1 << (CParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CParser.Plus - 71)) | (1 << (CParser.PlusPlus - 71)) | (1 << (CParser.Minus - 71)) | (1 << (CParser.MinusMinus - 71)) | (1 << (CParser.Star - 71)) | (1 << (CParser.And - 71)) | (1 << (CParser.AndAnd - 71)) | (1 << (CParser.Not - 71)) | (1 << (CParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CParser.Identifier - 105)) | (1 << (CParser.Constant - 105)) | (1 << (CParser.DigitSequence - 105)) | (1 << (CParser.StringLiteral - 105)))) !== 0)) {
							{
							this.state = 284;
							this.argumentExpressionList(0);
							}
						}

						this.state = 287;
						this.match(CParser.RightParen);
						}
						break;

					case 3:
						{
						_localctx = new PostfixExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_postfixExpression);
						this.state = 288;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 289;
						this.match(CParser.Dot);
						this.state = 290;
						this.match(CParser.Identifier);
						}
						break;

					case 4:
						{
						_localctx = new PostfixExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_postfixExpression);
						this.state = 291;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 292;
						this.match(CParser.Arrow);
						this.state = 293;
						this.match(CParser.Identifier);
						}
						break;

					case 5:
						{
						_localctx = new PostfixExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_postfixExpression);
						this.state = 294;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 295;
						this.match(CParser.PlusPlus);
						}
						break;

					case 6:
						{
						_localctx = new PostfixExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_postfixExpression);
						this.state = 296;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 297;
						this.match(CParser.MinusMinus);
						}
						break;
					}
					}
				}
				this.state = 302;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
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

	public argumentExpressionList(): ArgumentExpressionListContext;
	public argumentExpressionList(_p: number): ArgumentExpressionListContext;
	// @RuleVersion(0)
	public argumentExpressionList(_p?: number): ArgumentExpressionListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ArgumentExpressionListContext = new ArgumentExpressionListContext(this._ctx, _parentState);
		let _prevctx: ArgumentExpressionListContext = _localctx;
		let _startState: number = 12;
		this.enterRecursionRule(_localctx, 12, CParser.RULE_argumentExpressionList, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 304;
			this.assignmentExpression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 311;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ArgumentExpressionListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_argumentExpressionList);
					this.state = 306;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 307;
					this.match(CParser.Comma);
					this.state = 308;
					this.assignmentExpression();
					}
					}
				}
				this.state = 313;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
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
	public unaryExpression(): UnaryExpressionContext {
		let _localctx: UnaryExpressionContext = new UnaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CParser.RULE_unaryExpression);
		try {
			this.state = 336;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 314;
				this.postfixExpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 315;
				this.match(CParser.PlusPlus);
				this.state = 316;
				this.unaryExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 317;
				this.match(CParser.MinusMinus);
				this.state = 318;
				this.unaryExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 319;
				this.unaryOperator();
				this.state = 320;
				this.castExpression();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 322;
				this.match(CParser.Sizeof);
				this.state = 323;
				this.unaryExpression();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 324;
				this.match(CParser.Sizeof);
				this.state = 325;
				this.match(CParser.LeftParen);
				this.state = 326;
				this.typeName();
				this.state = 327;
				this.match(CParser.RightParen);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 329;
				this.match(CParser.Alignof);
				this.state = 330;
				this.match(CParser.LeftParen);
				this.state = 331;
				this.typeName();
				this.state = 332;
				this.match(CParser.RightParen);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 334;
				this.match(CParser.AndAnd);
				this.state = 335;
				this.match(CParser.Identifier);
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
	public unaryOperator(): UnaryOperatorContext {
		let _localctx: UnaryOperatorContext = new UnaryOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 338;
			_la = this._input.LA(1);
			if (!(((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CParser.Plus - 71)) | (1 << (CParser.Minus - 71)) | (1 << (CParser.Star - 71)) | (1 << (CParser.And - 71)) | (1 << (CParser.Not - 71)) | (1 << (CParser.Tilde - 71)))) !== 0))) {
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
	public castExpression(): CastExpressionContext {
		let _localctx: CastExpressionContext = new CastExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CParser.RULE_castExpression);
		try {
			this.state = 353;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 340;
				this.match(CParser.LeftParen);
				this.state = 341;
				this.typeName();
				this.state = 342;
				this.match(CParser.RightParen);
				this.state = 343;
				this.castExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 345;
				this.match(CParser.T__0);
				this.state = 346;
				this.match(CParser.LeftParen);
				this.state = 347;
				this.typeName();
				this.state = 348;
				this.match(CParser.RightParen);
				this.state = 349;
				this.castExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 351;
				this.unaryExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 352;
				this.match(CParser.DigitSequence);
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

	public multiplicativeExpression(): MultiplicativeExpressionContext;
	public multiplicativeExpression(_p: number): MultiplicativeExpressionContext;
	// @RuleVersion(0)
	public multiplicativeExpression(_p?: number): MultiplicativeExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this._ctx, _parentState);
		let _prevctx: MultiplicativeExpressionContext = _localctx;
		let _startState: number = 20;
		this.enterRecursionRule(_localctx, 20, CParser.RULE_multiplicativeExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 356;
			this.castExpression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 369;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 367;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
					case 1:
						{
						_localctx = new MultiplicativeExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_multiplicativeExpression);
						this.state = 358;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 359;
						this.match(CParser.Star);
						this.state = 360;
						this.castExpression();
						}
						break;

					case 2:
						{
						_localctx = new MultiplicativeExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_multiplicativeExpression);
						this.state = 361;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 362;
						this.match(CParser.Div);
						this.state = 363;
						this.castExpression();
						}
						break;

					case 3:
						{
						_localctx = new MultiplicativeExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_multiplicativeExpression);
						this.state = 364;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 365;
						this.match(CParser.Mod);
						this.state = 366;
						this.castExpression();
						}
						break;
					}
					}
				}
				this.state = 371;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
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

	public additiveExpression(): AdditiveExpressionContext;
	public additiveExpression(_p: number): AdditiveExpressionContext;
	// @RuleVersion(0)
	public additiveExpression(_p?: number): AdditiveExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this._ctx, _parentState);
		let _prevctx: AdditiveExpressionContext = _localctx;
		let _startState: number = 22;
		this.enterRecursionRule(_localctx, 22, CParser.RULE_additiveExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 373;
			this.multiplicativeExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 383;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 381;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
					case 1:
						{
						_localctx = new AdditiveExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_additiveExpression);
						this.state = 375;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 376;
						this.match(CParser.Plus);
						this.state = 377;
						this.multiplicativeExpression(0);
						}
						break;

					case 2:
						{
						_localctx = new AdditiveExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_additiveExpression);
						this.state = 378;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 379;
						this.match(CParser.Minus);
						this.state = 380;
						this.multiplicativeExpression(0);
						}
						break;
					}
					}
				}
				this.state = 385;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
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

	public shiftExpression(): ShiftExpressionContext;
	public shiftExpression(_p: number): ShiftExpressionContext;
	// @RuleVersion(0)
	public shiftExpression(_p?: number): ShiftExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ShiftExpressionContext = new ShiftExpressionContext(this._ctx, _parentState);
		let _prevctx: ShiftExpressionContext = _localctx;
		let _startState: number = 24;
		this.enterRecursionRule(_localctx, 24, CParser.RULE_shiftExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 387;
			this.additiveExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 397;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 395;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
					case 1:
						{
						_localctx = new ShiftExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_shiftExpression);
						this.state = 389;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 390;
						this.match(CParser.LeftShift);
						this.state = 391;
						this.additiveExpression(0);
						}
						break;

					case 2:
						{
						_localctx = new ShiftExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_shiftExpression);
						this.state = 392;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 393;
						this.match(CParser.RightShift);
						this.state = 394;
						this.additiveExpression(0);
						}
						break;
					}
					}
				}
				this.state = 399;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
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

	public relationalExpression(): RelationalExpressionContext;
	public relationalExpression(_p: number): RelationalExpressionContext;
	// @RuleVersion(0)
	public relationalExpression(_p?: number): RelationalExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: RelationalExpressionContext = new RelationalExpressionContext(this._ctx, _parentState);
		let _prevctx: RelationalExpressionContext = _localctx;
		let _startState: number = 26;
		this.enterRecursionRule(_localctx, 26, CParser.RULE_relationalExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 401;
			this.shiftExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 417;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 415;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
					case 1:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_relationalExpression);
						this.state = 403;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 404;
						this.match(CParser.Less);
						this.state = 405;
						this.shiftExpression(0);
						}
						break;

					case 2:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_relationalExpression);
						this.state = 406;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 407;
						this.match(CParser.Greater);
						this.state = 408;
						this.shiftExpression(0);
						}
						break;

					case 3:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_relationalExpression);
						this.state = 409;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 410;
						this.match(CParser.LessEqual);
						this.state = 411;
						this.shiftExpression(0);
						}
						break;

					case 4:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_relationalExpression);
						this.state = 412;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 413;
						this.match(CParser.GreaterEqual);
						this.state = 414;
						this.shiftExpression(0);
						}
						break;
					}
					}
				}
				this.state = 419;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
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

	public equalityExpression(): EqualityExpressionContext;
	public equalityExpression(_p: number): EqualityExpressionContext;
	// @RuleVersion(0)
	public equalityExpression(_p?: number): EqualityExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: EqualityExpressionContext = new EqualityExpressionContext(this._ctx, _parentState);
		let _prevctx: EqualityExpressionContext = _localctx;
		let _startState: number = 28;
		this.enterRecursionRule(_localctx, 28, CParser.RULE_equalityExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 421;
			this.relationalExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 431;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 429;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
					case 1:
						{
						_localctx = new EqualityExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_equalityExpression);
						this.state = 423;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 424;
						this.match(CParser.Equal);
						this.state = 425;
						this.relationalExpression(0);
						}
						break;

					case 2:
						{
						_localctx = new EqualityExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_equalityExpression);
						this.state = 426;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 427;
						this.match(CParser.NotEqual);
						this.state = 428;
						this.relationalExpression(0);
						}
						break;
					}
					}
				}
				this.state = 433;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
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

	public andExpression(): AndExpressionContext;
	public andExpression(_p: number): AndExpressionContext;
	// @RuleVersion(0)
	public andExpression(_p?: number): AndExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AndExpressionContext = new AndExpressionContext(this._ctx, _parentState);
		let _prevctx: AndExpressionContext = _localctx;
		let _startState: number = 30;
		this.enterRecursionRule(_localctx, 30, CParser.RULE_andExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 435;
			this.equalityExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 442;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new AndExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_andExpression);
					this.state = 437;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 438;
					this.match(CParser.And);
					this.state = 439;
					this.equalityExpression(0);
					}
					}
				}
				this.state = 444;
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public exclusiveOrExpression(): ExclusiveOrExpressionContext;
	public exclusiveOrExpression(_p: number): ExclusiveOrExpressionContext;
	// @RuleVersion(0)
	public exclusiveOrExpression(_p?: number): ExclusiveOrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExclusiveOrExpressionContext = new ExclusiveOrExpressionContext(this._ctx, _parentState);
		let _prevctx: ExclusiveOrExpressionContext = _localctx;
		let _startState: number = 32;
		this.enterRecursionRule(_localctx, 32, CParser.RULE_exclusiveOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 446;
			this.andExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 453;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ExclusiveOrExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_exclusiveOrExpression);
					this.state = 448;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 449;
					this.match(CParser.Caret);
					this.state = 450;
					this.andExpression(0);
					}
					}
				}
				this.state = 455;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
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

	public inclusiveOrExpression(): InclusiveOrExpressionContext;
	public inclusiveOrExpression(_p: number): InclusiveOrExpressionContext;
	// @RuleVersion(0)
	public inclusiveOrExpression(_p?: number): InclusiveOrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: InclusiveOrExpressionContext = new InclusiveOrExpressionContext(this._ctx, _parentState);
		let _prevctx: InclusiveOrExpressionContext = _localctx;
		let _startState: number = 34;
		this.enterRecursionRule(_localctx, 34, CParser.RULE_inclusiveOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 457;
			this.exclusiveOrExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 464;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new InclusiveOrExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_inclusiveOrExpression);
					this.state = 459;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 460;
					this.match(CParser.Or);
					this.state = 461;
					this.exclusiveOrExpression(0);
					}
					}
				}
				this.state = 466;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
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

	public logicalAndExpression(): LogicalAndExpressionContext;
	public logicalAndExpression(_p: number): LogicalAndExpressionContext;
	// @RuleVersion(0)
	public logicalAndExpression(_p?: number): LogicalAndExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: LogicalAndExpressionContext = new LogicalAndExpressionContext(this._ctx, _parentState);
		let _prevctx: LogicalAndExpressionContext = _localctx;
		let _startState: number = 36;
		this.enterRecursionRule(_localctx, 36, CParser.RULE_logicalAndExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 468;
			this.inclusiveOrExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 475;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new LogicalAndExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_logicalAndExpression);
					this.state = 470;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 471;
					this.match(CParser.AndAnd);
					this.state = 472;
					this.inclusiveOrExpression(0);
					}
					}
				}
				this.state = 477;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
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

	public logicalOrExpression(): LogicalOrExpressionContext;
	public logicalOrExpression(_p: number): LogicalOrExpressionContext;
	// @RuleVersion(0)
	public logicalOrExpression(_p?: number): LogicalOrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: LogicalOrExpressionContext = new LogicalOrExpressionContext(this._ctx, _parentState);
		let _prevctx: LogicalOrExpressionContext = _localctx;
		let _startState: number = 38;
		this.enterRecursionRule(_localctx, 38, CParser.RULE_logicalOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 479;
			this.logicalAndExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 486;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new LogicalOrExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_logicalOrExpression);
					this.state = 481;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 482;
					this.match(CParser.OrOr);
					this.state = 483;
					this.logicalAndExpression(0);
					}
					}
				}
				this.state = 488;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
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
	public conditionalExpression(): ConditionalExpressionContext {
		let _localctx: ConditionalExpressionContext = new ConditionalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, CParser.RULE_conditionalExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 489;
			this.logicalOrExpression(0);
			this.state = 495;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				{
				this.state = 490;
				this.match(CParser.Question);
				this.state = 491;
				this.expression(0);
				this.state = 492;
				this.match(CParser.Colon);
				this.state = 493;
				this.conditionalExpression();
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
	public assignmentExpression(): AssignmentExpressionContext {
		let _localctx: AssignmentExpressionContext = new AssignmentExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, CParser.RULE_assignmentExpression);
		try {
			this.state = 503;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 497;
				this.conditionalExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 498;
				this.unaryExpression();
				this.state = 499;
				this.assignmentOperator();
				this.state = 500;
				this.assignmentExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 502;
				this.match(CParser.DigitSequence);
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
	public assignmentOperator(): AssignmentOperatorContext {
		let _localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, CParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 505;
			_la = this._input.LA(1);
			if (!(((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (CParser.Assign - 89)) | (1 << (CParser.StarAssign - 89)) | (1 << (CParser.DivAssign - 89)) | (1 << (CParser.ModAssign - 89)) | (1 << (CParser.PlusAssign - 89)) | (1 << (CParser.MinusAssign - 89)) | (1 << (CParser.LeftShiftAssign - 89)) | (1 << (CParser.RightShiftAssign - 89)) | (1 << (CParser.AndAssign - 89)) | (1 << (CParser.XorAssign - 89)) | (1 << (CParser.OrAssign - 89)))) !== 0))) {
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
		let _startState: number = 46;
		this.enterRecursionRule(_localctx, 46, CParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 508;
			this.assignmentExpression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 515;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
					this.state = 510;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 511;
					this.match(CParser.Comma);
					this.state = 512;
					this.assignmentExpression();
					}
					}
				}
				this.state = 517;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
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
	public constantExpression(): ConstantExpressionContext {
		let _localctx: ConstantExpressionContext = new ConstantExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, CParser.RULE_constantExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 518;
			this.conditionalExpression();
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
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, CParser.RULE_declaration);
		try {
			this.state = 528;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 520;
				this.declarationSpecifiers();
				this.state = 521;
				this.initDeclaratorList(0);
				this.state = 522;
				this.match(CParser.Semi);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 524;
				this.declarationSpecifiers();
				this.state = 525;
				this.match(CParser.Semi);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 527;
				this.staticAssertDeclaration();
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
	public declarationSpecifiers(): DeclarationSpecifiersContext {
		let _localctx: DeclarationSpecifiersContext = new DeclarationSpecifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, CParser.RULE_declarationSpecifiers);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 531;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 530;
					this.declarationSpecifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 533;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
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
	public declarationSpecifiers2(): DeclarationSpecifiers2Context {
		let _localctx: DeclarationSpecifiers2Context = new DeclarationSpecifiers2Context(this._ctx, this.state);
		this.enterRule(_localctx, 54, CParser.RULE_declarationSpecifiers2);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 536;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 535;
					this.declarationSpecifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 538;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
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
	public declarationSpecifier(): DeclarationSpecifierContext {
		let _localctx: DeclarationSpecifierContext = new DeclarationSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, CParser.RULE_declarationSpecifier);
		try {
			this.state = 545;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 540;
				this.storageClassSpecifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 541;
				this.typeSpecifier(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 542;
				this.typeQualifier();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 543;
				this.functionSpecifier();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 544;
				this.alignmentSpecifier();
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

	public initDeclaratorList(): InitDeclaratorListContext;
	public initDeclaratorList(_p: number): InitDeclaratorListContext;
	// @RuleVersion(0)
	public initDeclaratorList(_p?: number): InitDeclaratorListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: InitDeclaratorListContext = new InitDeclaratorListContext(this._ctx, _parentState);
		let _prevctx: InitDeclaratorListContext = _localctx;
		let _startState: number = 58;
		this.enterRecursionRule(_localctx, 58, CParser.RULE_initDeclaratorList, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 548;
			this.initDeclarator();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 555;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new InitDeclaratorListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_initDeclaratorList);
					this.state = 550;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 551;
					this.match(CParser.Comma);
					this.state = 552;
					this.initDeclarator();
					}
					}
				}
				this.state = 557;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
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
	public initDeclarator(): InitDeclaratorContext {
		let _localctx: InitDeclaratorContext = new InitDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, CParser.RULE_initDeclarator);
		try {
			this.state = 563;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 558;
				this.declarator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 559;
				this.declarator();
				this.state = 560;
				this.match(CParser.Assign);
				this.state = 561;
				this.initializer();
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
	public storageClassSpecifier(): StorageClassSpecifierContext {
		let _localctx: StorageClassSpecifierContext = new StorageClassSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, CParser.RULE_storageClassSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 565;
			_la = this._input.LA(1);
			if (!(_la === CParser.Auto || _la === CParser.Extern || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (CParser.Register - 34)) | (1 << (CParser.Static - 34)) | (1 << (CParser.Typedef - 34)) | (1 << (CParser.ThreadLocal - 34)))) !== 0))) {
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

	public typeSpecifier(): TypeSpecifierContext;
	public typeSpecifier(_p: number): TypeSpecifierContext;
	// @RuleVersion(0)
	public typeSpecifier(_p?: number): TypeSpecifierContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeSpecifierContext = new TypeSpecifierContext(this._ctx, _parentState);
		let _prevctx: TypeSpecifierContext = _localctx;
		let _startState: number = 64;
		this.enterRecursionRule(_localctx, 64, CParser.RULE_typeSpecifier, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 582;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.T__3:
			case CParser.T__4:
			case CParser.T__5:
			case CParser.Char:
			case CParser.Double:
			case CParser.Float:
			case CParser.Int:
			case CParser.Long:
			case CParser.Short:
			case CParser.Signed:
			case CParser.Unsigned:
			case CParser.Void:
			case CParser.Bool:
			case CParser.Complex:
				{
				this.state = 568;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.Char) | (1 << CParser.Double) | (1 << CParser.Float))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Int - 32)) | (1 << (CParser.Long - 32)) | (1 << (CParser.Short - 32)) | (1 << (CParser.Signed - 32)) | (1 << (CParser.Unsigned - 32)) | (1 << (CParser.Void - 32)) | (1 << (CParser.Bool - 32)) | (1 << (CParser.Complex - 32)))) !== 0))) {
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
			case CParser.T__0:
				{
				this.state = 569;
				this.match(CParser.T__0);
				this.state = 570;
				this.match(CParser.LeftParen);
				this.state = 571;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 572;
				this.match(CParser.RightParen);
				}
				break;
			case CParser.Atomic:
				{
				this.state = 573;
				this.atomicTypeSpecifier();
				}
				break;
			case CParser.Struct:
			case CParser.Union:
				{
				this.state = 574;
				this.structOrUnionSpecifier();
				}
				break;
			case CParser.Enum:
				{
				this.state = 575;
				this.enumSpecifier();
				}
				break;
			case CParser.Identifier:
				{
				this.state = 576;
				this.typedefName();
				}
				break;
			case CParser.T__6:
				{
				this.state = 577;
				this.match(CParser.T__6);
				this.state = 578;
				this.match(CParser.LeftParen);
				this.state = 579;
				this.constantExpression();
				this.state = 580;
				this.match(CParser.RightParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 588;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new TypeSpecifierContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_typeSpecifier);
					this.state = 584;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 585;
					this.pointer();
					}
					}
				}
				this.state = 590;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
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
	public structOrUnionSpecifier(): StructOrUnionSpecifierContext {
		let _localctx: StructOrUnionSpecifierContext = new StructOrUnionSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, CParser.RULE_structOrUnionSpecifier);
		let _la: number;
		try {
			this.state = 602;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 591;
				this.structOrUnion();
				this.state = 593;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CParser.Identifier) {
					{
					this.state = 592;
					this.match(CParser.Identifier);
					}
				}

				this.state = 595;
				this.match(CParser.LeftBrace);
				this.state = 596;
				this.structDeclarationList(0);
				this.state = 597;
				this.match(CParser.RightBrace);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 599;
				this.structOrUnion();
				this.state = 600;
				this.match(CParser.Identifier);
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
	public structOrUnion(): StructOrUnionContext {
		let _localctx: StructOrUnionContext = new StructOrUnionContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, CParser.RULE_structOrUnion);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 604;
			_la = this._input.LA(1);
			if (!(_la === CParser.Struct || _la === CParser.Union)) {
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

	public structDeclarationList(): StructDeclarationListContext;
	public structDeclarationList(_p: number): StructDeclarationListContext;
	// @RuleVersion(0)
	public structDeclarationList(_p?: number): StructDeclarationListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: StructDeclarationListContext = new StructDeclarationListContext(this._ctx, _parentState);
		let _prevctx: StructDeclarationListContext = _localctx;
		let _startState: number = 70;
		this.enterRecursionRule(_localctx, 70, CParser.RULE_structDeclarationList, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 607;
			this.structDeclaration();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 613;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new StructDeclarationListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_structDeclarationList);
					this.state = 609;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 610;
					this.structDeclaration();
					}
					}
				}
				this.state = 615;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
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
	public structDeclaration(): StructDeclarationContext {
		let _localctx: StructDeclarationContext = new StructDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, CParser.RULE_structDeclaration);
		let _la: number;
		try {
			this.state = 623;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.T__0:
			case CParser.T__3:
			case CParser.T__4:
			case CParser.T__5:
			case CParser.T__6:
			case CParser.Char:
			case CParser.Const:
			case CParser.Double:
			case CParser.Enum:
			case CParser.Float:
			case CParser.Int:
			case CParser.Long:
			case CParser.Restrict:
			case CParser.Short:
			case CParser.Signed:
			case CParser.Struct:
			case CParser.Union:
			case CParser.Unsigned:
			case CParser.Void:
			case CParser.Volatile:
			case CParser.Atomic:
			case CParser.Bool:
			case CParser.Complex:
			case CParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 616;
				this.specifierQualifierList();
				this.state = 618;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (CParser.LeftParen - 59)) | (1 << (CParser.Star - 59)) | (1 << (CParser.Caret - 59)) | (1 << (CParser.Colon - 59)))) !== 0) || _la === CParser.Identifier) {
					{
					this.state = 617;
					this.structDeclaratorList(0);
					}
				}

				this.state = 620;
				this.match(CParser.Semi);
				}
				break;
			case CParser.StaticAssert:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 622;
				this.staticAssertDeclaration();
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
	public specifierQualifierList(): SpecifierQualifierListContext {
		let _localctx: SpecifierQualifierListContext = new SpecifierQualifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, CParser.RULE_specifierQualifierList);
		try {
			this.state = 633;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 625;
				this.typeSpecifier(0);
				this.state = 627;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
				case 1:
					{
					this.state = 626;
					this.specifierQualifierList();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 629;
				this.typeQualifier();
				this.state = 631;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
				case 1:
					{
					this.state = 630;
					this.specifierQualifierList();
					}
					break;
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

	public structDeclaratorList(): StructDeclaratorListContext;
	public structDeclaratorList(_p: number): StructDeclaratorListContext;
	// @RuleVersion(0)
	public structDeclaratorList(_p?: number): StructDeclaratorListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: StructDeclaratorListContext = new StructDeclaratorListContext(this._ctx, _parentState);
		let _prevctx: StructDeclaratorListContext = _localctx;
		let _startState: number = 76;
		this.enterRecursionRule(_localctx, 76, CParser.RULE_structDeclaratorList, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 636;
			this.structDeclarator();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 643;
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
					_localctx = new StructDeclaratorListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_structDeclaratorList);
					this.state = 638;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 639;
					this.match(CParser.Comma);
					this.state = 640;
					this.structDeclarator();
					}
					}
				}
				this.state = 645;
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
	public structDeclarator(): StructDeclaratorContext {
		let _localctx: StructDeclaratorContext = new StructDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, CParser.RULE_structDeclarator);
		let _la: number;
		try {
			this.state = 652;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 646;
				this.declarator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 648;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (CParser.LeftParen - 59)) | (1 << (CParser.Star - 59)) | (1 << (CParser.Caret - 59)))) !== 0) || _la === CParser.Identifier) {
					{
					this.state = 647;
					this.declarator();
					}
				}

				this.state = 650;
				this.match(CParser.Colon);
				this.state = 651;
				this.constantExpression();
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
	public enumSpecifier(): EnumSpecifierContext {
		let _localctx: EnumSpecifierContext = new EnumSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, CParser.RULE_enumSpecifier);
		let _la: number;
		try {
			this.state = 673;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 654;
				this.match(CParser.Enum);
				this.state = 656;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CParser.Identifier) {
					{
					this.state = 655;
					this.match(CParser.Identifier);
					}
				}

				this.state = 658;
				this.match(CParser.LeftBrace);
				this.state = 659;
				this.enumeratorList(0);
				this.state = 660;
				this.match(CParser.RightBrace);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 662;
				this.match(CParser.Enum);
				this.state = 664;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CParser.Identifier) {
					{
					this.state = 663;
					this.match(CParser.Identifier);
					}
				}

				this.state = 666;
				this.match(CParser.LeftBrace);
				this.state = 667;
				this.enumeratorList(0);
				this.state = 668;
				this.match(CParser.Comma);
				this.state = 669;
				this.match(CParser.RightBrace);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 671;
				this.match(CParser.Enum);
				this.state = 672;
				this.match(CParser.Identifier);
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

	public enumeratorList(): EnumeratorListContext;
	public enumeratorList(_p: number): EnumeratorListContext;
	// @RuleVersion(0)
	public enumeratorList(_p?: number): EnumeratorListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: EnumeratorListContext = new EnumeratorListContext(this._ctx, _parentState);
		let _prevctx: EnumeratorListContext = _localctx;
		let _startState: number = 82;
		this.enterRecursionRule(_localctx, 82, CParser.RULE_enumeratorList, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 676;
			this.enumerator();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 683;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new EnumeratorListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_enumeratorList);
					this.state = 678;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 679;
					this.match(CParser.Comma);
					this.state = 680;
					this.enumerator();
					}
					}
				}
				this.state = 685;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
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
	public enumerator(): EnumeratorContext {
		let _localctx: EnumeratorContext = new EnumeratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, CParser.RULE_enumerator);
		try {
			this.state = 691;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 686;
				this.enumerationConstant();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 687;
				this.enumerationConstant();
				this.state = 688;
				this.match(CParser.Assign);
				this.state = 689;
				this.constantExpression();
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
	public enumerationConstant(): EnumerationConstantContext {
		let _localctx: EnumerationConstantContext = new EnumerationConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, CParser.RULE_enumerationConstant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 693;
			this.match(CParser.Identifier);
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
	public atomicTypeSpecifier(): AtomicTypeSpecifierContext {
		let _localctx: AtomicTypeSpecifierContext = new AtomicTypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, CParser.RULE_atomicTypeSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 695;
			this.match(CParser.Atomic);
			this.state = 696;
			this.match(CParser.LeftParen);
			this.state = 697;
			this.typeName();
			this.state = 698;
			this.match(CParser.RightParen);
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
	public typeQualifier(): TypeQualifierContext {
		let _localctx: TypeQualifierContext = new TypeQualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, CParser.RULE_typeQualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 700;
			_la = this._input.LA(1);
			if (!(_la === CParser.Const || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (CParser.Restrict - 35)) | (1 << (CParser.Volatile - 35)) | (1 << (CParser.Atomic - 35)))) !== 0))) {
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
	public functionSpecifier(): FunctionSpecifierContext {
		let _localctx: FunctionSpecifierContext = new FunctionSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, CParser.RULE_functionSpecifier);
		let _la: number;
		try {
			this.state = 708;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.T__7:
			case CParser.T__8:
			case CParser.Inline:
			case CParser.Noreturn:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 702;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.Inline))) !== 0) || _la === CParser.Noreturn)) {
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
			case CParser.T__11:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 703;
				this.gccAttributeSpecifier();
				}
				break;
			case CParser.T__9:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 704;
				this.match(CParser.T__9);
				this.state = 705;
				this.match(CParser.LeftParen);
				this.state = 706;
				this.match(CParser.Identifier);
				this.state = 707;
				this.match(CParser.RightParen);
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
	public alignmentSpecifier(): AlignmentSpecifierContext {
		let _localctx: AlignmentSpecifierContext = new AlignmentSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, CParser.RULE_alignmentSpecifier);
		try {
			this.state = 720;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 710;
				this.match(CParser.Alignas);
				this.state = 711;
				this.match(CParser.LeftParen);
				this.state = 712;
				this.typeName();
				this.state = 713;
				this.match(CParser.RightParen);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 715;
				this.match(CParser.Alignas);
				this.state = 716;
				this.match(CParser.LeftParen);
				this.state = 717;
				this.constantExpression();
				this.state = 718;
				this.match(CParser.RightParen);
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
	public declarator(): DeclaratorContext {
		let _localctx: DeclaratorContext = new DeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, CParser.RULE_declarator);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 723;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CParser.Star || _la === CParser.Caret) {
				{
				this.state = 722;
				this.pointer();
				}
			}

			this.state = 725;
			this.directDeclarator(0);
			this.state = 729;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 726;
					this.gccDeclaratorExtension();
					}
					}
				}
				this.state = 731;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
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

	public directDeclarator(): DirectDeclaratorContext;
	public directDeclarator(_p: number): DirectDeclaratorContext;
	// @RuleVersion(0)
	public directDeclarator(_p?: number): DirectDeclaratorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: DirectDeclaratorContext = new DirectDeclaratorContext(this._ctx, _parentState);
		let _prevctx: DirectDeclaratorContext = _localctx;
		let _startState: number = 98;
		this.enterRecursionRule(_localctx, 98, CParser.RULE_directDeclarator, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 749;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
			case 1:
				{
				this.state = 733;
				this.match(CParser.Identifier);
				}
				break;

			case 2:
				{
				this.state = 734;
				this.match(CParser.LeftParen);
				this.state = 735;
				this.declarator();
				this.state = 736;
				this.match(CParser.RightParen);
				}
				break;

			case 3:
				{
				this.state = 738;
				this.match(CParser.Identifier);
				this.state = 739;
				this.match(CParser.Colon);
				this.state = 740;
				this.match(CParser.DigitSequence);
				}
				break;

			case 4:
				{
				this.state = 741;
				this.match(CParser.LeftParen);
				this.state = 743;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.Char) | (1 << CParser.Double) | (1 << CParser.Enum) | (1 << CParser.Float))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Int - 32)) | (1 << (CParser.Long - 32)) | (1 << (CParser.Short - 32)) | (1 << (CParser.Signed - 32)) | (1 << (CParser.Struct - 32)) | (1 << (CParser.Union - 32)) | (1 << (CParser.Unsigned - 32)) | (1 << (CParser.Void - 32)) | (1 << (CParser.Atomic - 32)) | (1 << (CParser.Bool - 32)) | (1 << (CParser.Complex - 32)))) !== 0) || _la === CParser.Identifier) {
					{
					this.state = 742;
					this.typeSpecifier(0);
					}
				}

				this.state = 745;
				this.pointer();
				this.state = 746;
				this.directDeclarator(0);
				this.state = 747;
				this.match(CParser.RightParen);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 796;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 794;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
					case 1:
						{
						_localctx = new DirectDeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directDeclarator);
						this.state = 751;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 752;
						this.match(CParser.LeftBracket);
						this.state = 754;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CParser.Const || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (CParser.Restrict - 35)) | (1 << (CParser.Volatile - 35)) | (1 << (CParser.Atomic - 35)))) !== 0)) {
							{
							this.state = 753;
							this.typeQualifierList(0);
							}
						}

						this.state = 757;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CParser.Sizeof - 39)) | (1 << (CParser.Alignof - 39)) | (1 << (CParser.Generic - 39)) | (1 << (CParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CParser.Plus - 71)) | (1 << (CParser.PlusPlus - 71)) | (1 << (CParser.Minus - 71)) | (1 << (CParser.MinusMinus - 71)) | (1 << (CParser.Star - 71)) | (1 << (CParser.And - 71)) | (1 << (CParser.AndAnd - 71)) | (1 << (CParser.Not - 71)) | (1 << (CParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CParser.Identifier - 105)) | (1 << (CParser.Constant - 105)) | (1 << (CParser.DigitSequence - 105)) | (1 << (CParser.StringLiteral - 105)))) !== 0)) {
							{
							this.state = 756;
							this.assignmentExpression();
							}
						}

						this.state = 759;
						this.match(CParser.RightBracket);
						}
						break;

					case 2:
						{
						_localctx = new DirectDeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directDeclarator);
						this.state = 760;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 761;
						this.match(CParser.LeftBracket);
						this.state = 762;
						this.match(CParser.Static);
						this.state = 764;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CParser.Const || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (CParser.Restrict - 35)) | (1 << (CParser.Volatile - 35)) | (1 << (CParser.Atomic - 35)))) !== 0)) {
							{
							this.state = 763;
							this.typeQualifierList(0);
							}
						}

						this.state = 766;
						this.assignmentExpression();
						this.state = 767;
						this.match(CParser.RightBracket);
						}
						break;

					case 3:
						{
						_localctx = new DirectDeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directDeclarator);
						this.state = 769;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 770;
						this.match(CParser.LeftBracket);
						this.state = 771;
						this.typeQualifierList(0);
						this.state = 772;
						this.match(CParser.Static);
						this.state = 773;
						this.assignmentExpression();
						this.state = 774;
						this.match(CParser.RightBracket);
						}
						break;

					case 4:
						{
						_localctx = new DirectDeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directDeclarator);
						this.state = 776;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 777;
						this.match(CParser.LeftBracket);
						this.state = 779;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CParser.Const || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (CParser.Restrict - 35)) | (1 << (CParser.Volatile - 35)) | (1 << (CParser.Atomic - 35)))) !== 0)) {
							{
							this.state = 778;
							this.typeQualifierList(0);
							}
						}

						this.state = 781;
						this.match(CParser.Star);
						this.state = 782;
						this.match(CParser.RightBracket);
						}
						break;

					case 5:
						{
						_localctx = new DirectDeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directDeclarator);
						this.state = 783;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 784;
						this.match(CParser.LeftParen);
						this.state = 785;
						this.parameterTypeList();
						this.state = 786;
						this.match(CParser.RightParen);
						}
						break;

					case 6:
						{
						_localctx = new DirectDeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directDeclarator);
						this.state = 788;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 789;
						this.match(CParser.LeftParen);
						this.state = 791;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CParser.Identifier) {
							{
							this.state = 790;
							this.identifierList(0);
							}
						}

						this.state = 793;
						this.match(CParser.RightParen);
						}
						break;
					}
					}
				}
				this.state = 798;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
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
	public gccDeclaratorExtension(): GccDeclaratorExtensionContext {
		let _localctx: GccDeclaratorExtensionContext = new GccDeclaratorExtensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, CParser.RULE_gccDeclaratorExtension);
		let _la: number;
		try {
			this.state = 808;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.T__10:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 799;
				this.match(CParser.T__10);
				this.state = 800;
				this.match(CParser.LeftParen);
				this.state = 802;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 801;
					this.match(CParser.StringLiteral);
					}
					}
					this.state = 804;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === CParser.StringLiteral);
				this.state = 806;
				this.match(CParser.RightParen);
				}
				break;
			case CParser.T__11:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 807;
				this.gccAttributeSpecifier();
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
	public gccAttributeSpecifier(): GccAttributeSpecifierContext {
		let _localctx: GccAttributeSpecifierContext = new GccAttributeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, CParser.RULE_gccAttributeSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 810;
			this.match(CParser.T__11);
			this.state = 811;
			this.match(CParser.LeftParen);
			this.state = 812;
			this.match(CParser.LeftParen);
			this.state = 813;
			this.gccAttributeList();
			this.state = 814;
			this.match(CParser.RightParen);
			this.state = 815;
			this.match(CParser.RightParen);
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
	public gccAttributeList(): GccAttributeListContext {
		let _localctx: GccAttributeListContext = new GccAttributeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, CParser.RULE_gccAttributeList);
		let _la: number;
		try {
			this.state = 826;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 817;
				this.gccAttribute();
				this.state = 822;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CParser.Comma) {
					{
					{
					this.state = 818;
					this.match(CParser.Comma);
					this.state = 819;
					this.gccAttribute();
					}
					}
					this.state = 824;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				// tslint:disable-next-line:no-empty
				{
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
	public gccAttribute(): GccAttributeContext {
		let _localctx: GccAttributeContext = new GccAttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, CParser.RULE_gccAttribute);
		let _la: number;
		try {
			this.state = 837;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.T__0:
			case CParser.T__1:
			case CParser.T__2:
			case CParser.T__3:
			case CParser.T__4:
			case CParser.T__5:
			case CParser.T__6:
			case CParser.T__7:
			case CParser.T__8:
			case CParser.T__9:
			case CParser.T__10:
			case CParser.T__11:
			case CParser.T__12:
			case CParser.T__13:
			case CParser.Auto:
			case CParser.Break:
			case CParser.Case:
			case CParser.Char:
			case CParser.Const:
			case CParser.Continue:
			case CParser.Default:
			case CParser.Do:
			case CParser.Double:
			case CParser.Else:
			case CParser.Enum:
			case CParser.Extern:
			case CParser.Float:
			case CParser.For:
			case CParser.Goto:
			case CParser.If:
			case CParser.Inline:
			case CParser.Int:
			case CParser.Long:
			case CParser.Register:
			case CParser.Restrict:
			case CParser.Return:
			case CParser.Short:
			case CParser.Signed:
			case CParser.Sizeof:
			case CParser.Static:
			case CParser.Struct:
			case CParser.Switch:
			case CParser.Typedef:
			case CParser.Union:
			case CParser.Unsigned:
			case CParser.Void:
			case CParser.Volatile:
			case CParser.While:
			case CParser.Alignas:
			case CParser.Alignof:
			case CParser.Atomic:
			case CParser.Bool:
			case CParser.Complex:
			case CParser.Generic:
			case CParser.Imaginary:
			case CParser.Noreturn:
			case CParser.StaticAssert:
			case CParser.ThreadLocal:
			case CParser.LeftBracket:
			case CParser.RightBracket:
			case CParser.LeftBrace:
			case CParser.RightBrace:
			case CParser.Less:
			case CParser.LessEqual:
			case CParser.Greater:
			case CParser.GreaterEqual:
			case CParser.LeftShift:
			case CParser.RightShift:
			case CParser.Plus:
			case CParser.PlusPlus:
			case CParser.Minus:
			case CParser.MinusMinus:
			case CParser.Star:
			case CParser.Div:
			case CParser.Mod:
			case CParser.And:
			case CParser.Or:
			case CParser.AndAnd:
			case CParser.OrOr:
			case CParser.Caret:
			case CParser.Not:
			case CParser.Tilde:
			case CParser.Question:
			case CParser.Colon:
			case CParser.Semi:
			case CParser.Assign:
			case CParser.StarAssign:
			case CParser.DivAssign:
			case CParser.ModAssign:
			case CParser.PlusAssign:
			case CParser.MinusAssign:
			case CParser.LeftShiftAssign:
			case CParser.RightShiftAssign:
			case CParser.AndAssign:
			case CParser.XorAssign:
			case CParser.OrAssign:
			case CParser.Equal:
			case CParser.NotEqual:
			case CParser.Arrow:
			case CParser.Dot:
			case CParser.Ellipsis:
			case CParser.Identifier:
			case CParser.Constant:
			case CParser.DigitSequence:
			case CParser.StringLiteral:
			case CParser.ComplexDefine:
			case CParser.IncludeDirective:
			case CParser.AsmBlock:
			case CParser.LineAfterPreprocessing:
			case CParser.LineDirective:
			case CParser.PragmaDirective:
			case CParser.Whitespace:
			case CParser.Newline:
			case CParser.BlockComment:
			case CParser.LineComment:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 828;
				_la = this._input.LA(1);
				if (_la <= 0 || (((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (CParser.LeftParen - 59)) | (1 << (CParser.RightParen - 59)) | (1 << (CParser.Comma - 59)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 834;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CParser.LeftParen) {
					{
					this.state = 829;
					this.match(CParser.LeftParen);
					this.state = 831;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CParser.Sizeof - 39)) | (1 << (CParser.Alignof - 39)) | (1 << (CParser.Generic - 39)) | (1 << (CParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CParser.Plus - 71)) | (1 << (CParser.PlusPlus - 71)) | (1 << (CParser.Minus - 71)) | (1 << (CParser.MinusMinus - 71)) | (1 << (CParser.Star - 71)) | (1 << (CParser.And - 71)) | (1 << (CParser.AndAnd - 71)) | (1 << (CParser.Not - 71)) | (1 << (CParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CParser.Identifier - 105)) | (1 << (CParser.Constant - 105)) | (1 << (CParser.DigitSequence - 105)) | (1 << (CParser.StringLiteral - 105)))) !== 0)) {
						{
						this.state = 830;
						this.argumentExpressionList(0);
						}
					}

					this.state = 833;
					this.match(CParser.RightParen);
					}
				}

				}
				break;
			case CParser.RightParen:
			case CParser.Comma:
				this.enterOuterAlt(_localctx, 2);
				// tslint:disable-next-line:no-empty
				{
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
	public nestedParenthesesBlock(): NestedParenthesesBlockContext {
		let _localctx: NestedParenthesesBlockContext = new NestedParenthesesBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, CParser.RULE_nestedParenthesesBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 846;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.T__9) | (1 << CParser.T__10) | (1 << CParser.T__11) | (1 << CParser.T__12) | (1 << CParser.T__13) | (1 << CParser.Auto) | (1 << CParser.Break) | (1 << CParser.Case) | (1 << CParser.Char) | (1 << CParser.Const) | (1 << CParser.Continue) | (1 << CParser.Default) | (1 << CParser.Do) | (1 << CParser.Double) | (1 << CParser.Else) | (1 << CParser.Enum) | (1 << CParser.Extern) | (1 << CParser.Float) | (1 << CParser.For) | (1 << CParser.Goto) | (1 << CParser.If) | (1 << CParser.Inline))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Int - 32)) | (1 << (CParser.Long - 32)) | (1 << (CParser.Register - 32)) | (1 << (CParser.Restrict - 32)) | (1 << (CParser.Return - 32)) | (1 << (CParser.Short - 32)) | (1 << (CParser.Signed - 32)) | (1 << (CParser.Sizeof - 32)) | (1 << (CParser.Static - 32)) | (1 << (CParser.Struct - 32)) | (1 << (CParser.Switch - 32)) | (1 << (CParser.Typedef - 32)) | (1 << (CParser.Union - 32)) | (1 << (CParser.Unsigned - 32)) | (1 << (CParser.Void - 32)) | (1 << (CParser.Volatile - 32)) | (1 << (CParser.While - 32)) | (1 << (CParser.Alignas - 32)) | (1 << (CParser.Alignof - 32)) | (1 << (CParser.Atomic - 32)) | (1 << (CParser.Bool - 32)) | (1 << (CParser.Complex - 32)) | (1 << (CParser.Generic - 32)) | (1 << (CParser.Imaginary - 32)) | (1 << (CParser.Noreturn - 32)) | (1 << (CParser.StaticAssert - 32)) | (1 << (CParser.ThreadLocal - 32)) | (1 << (CParser.LeftParen - 32)) | (1 << (CParser.LeftBracket - 32)) | (1 << (CParser.RightBracket - 32)) | (1 << (CParser.LeftBrace - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CParser.RightBrace - 64)) | (1 << (CParser.Less - 64)) | (1 << (CParser.LessEqual - 64)) | (1 << (CParser.Greater - 64)) | (1 << (CParser.GreaterEqual - 64)) | (1 << (CParser.LeftShift - 64)) | (1 << (CParser.RightShift - 64)) | (1 << (CParser.Plus - 64)) | (1 << (CParser.PlusPlus - 64)) | (1 << (CParser.Minus - 64)) | (1 << (CParser.MinusMinus - 64)) | (1 << (CParser.Star - 64)) | (1 << (CParser.Div - 64)) | (1 << (CParser.Mod - 64)) | (1 << (CParser.And - 64)) | (1 << (CParser.Or - 64)) | (1 << (CParser.AndAnd - 64)) | (1 << (CParser.OrOr - 64)) | (1 << (CParser.Caret - 64)) | (1 << (CParser.Not - 64)) | (1 << (CParser.Tilde - 64)) | (1 << (CParser.Question - 64)) | (1 << (CParser.Colon - 64)) | (1 << (CParser.Semi - 64)) | (1 << (CParser.Comma - 64)) | (1 << (CParser.Assign - 64)) | (1 << (CParser.StarAssign - 64)) | (1 << (CParser.DivAssign - 64)) | (1 << (CParser.ModAssign - 64)) | (1 << (CParser.PlusAssign - 64)) | (1 << (CParser.MinusAssign - 64)) | (1 << (CParser.LeftShiftAssign - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (CParser.RightShiftAssign - 96)) | (1 << (CParser.AndAssign - 96)) | (1 << (CParser.XorAssign - 96)) | (1 << (CParser.OrAssign - 96)) | (1 << (CParser.Equal - 96)) | (1 << (CParser.NotEqual - 96)) | (1 << (CParser.Arrow - 96)) | (1 << (CParser.Dot - 96)) | (1 << (CParser.Ellipsis - 96)) | (1 << (CParser.Identifier - 96)) | (1 << (CParser.Constant - 96)) | (1 << (CParser.DigitSequence - 96)) | (1 << (CParser.StringLiteral - 96)) | (1 << (CParser.ComplexDefine - 96)) | (1 << (CParser.IncludeDirective - 96)) | (1 << (CParser.AsmBlock - 96)) | (1 << (CParser.LineAfterPreprocessing - 96)) | (1 << (CParser.LineDirective - 96)) | (1 << (CParser.PragmaDirective - 96)) | (1 << (CParser.Whitespace - 96)) | (1 << (CParser.Newline - 96)) | (1 << (CParser.BlockComment - 96)) | (1 << (CParser.LineComment - 96)))) !== 0)) {
				{
				this.state = 844;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CParser.T__0:
				case CParser.T__1:
				case CParser.T__2:
				case CParser.T__3:
				case CParser.T__4:
				case CParser.T__5:
				case CParser.T__6:
				case CParser.T__7:
				case CParser.T__8:
				case CParser.T__9:
				case CParser.T__10:
				case CParser.T__11:
				case CParser.T__12:
				case CParser.T__13:
				case CParser.Auto:
				case CParser.Break:
				case CParser.Case:
				case CParser.Char:
				case CParser.Const:
				case CParser.Continue:
				case CParser.Default:
				case CParser.Do:
				case CParser.Double:
				case CParser.Else:
				case CParser.Enum:
				case CParser.Extern:
				case CParser.Float:
				case CParser.For:
				case CParser.Goto:
				case CParser.If:
				case CParser.Inline:
				case CParser.Int:
				case CParser.Long:
				case CParser.Register:
				case CParser.Restrict:
				case CParser.Return:
				case CParser.Short:
				case CParser.Signed:
				case CParser.Sizeof:
				case CParser.Static:
				case CParser.Struct:
				case CParser.Switch:
				case CParser.Typedef:
				case CParser.Union:
				case CParser.Unsigned:
				case CParser.Void:
				case CParser.Volatile:
				case CParser.While:
				case CParser.Alignas:
				case CParser.Alignof:
				case CParser.Atomic:
				case CParser.Bool:
				case CParser.Complex:
				case CParser.Generic:
				case CParser.Imaginary:
				case CParser.Noreturn:
				case CParser.StaticAssert:
				case CParser.ThreadLocal:
				case CParser.LeftBracket:
				case CParser.RightBracket:
				case CParser.LeftBrace:
				case CParser.RightBrace:
				case CParser.Less:
				case CParser.LessEqual:
				case CParser.Greater:
				case CParser.GreaterEqual:
				case CParser.LeftShift:
				case CParser.RightShift:
				case CParser.Plus:
				case CParser.PlusPlus:
				case CParser.Minus:
				case CParser.MinusMinus:
				case CParser.Star:
				case CParser.Div:
				case CParser.Mod:
				case CParser.And:
				case CParser.Or:
				case CParser.AndAnd:
				case CParser.OrOr:
				case CParser.Caret:
				case CParser.Not:
				case CParser.Tilde:
				case CParser.Question:
				case CParser.Colon:
				case CParser.Semi:
				case CParser.Comma:
				case CParser.Assign:
				case CParser.StarAssign:
				case CParser.DivAssign:
				case CParser.ModAssign:
				case CParser.PlusAssign:
				case CParser.MinusAssign:
				case CParser.LeftShiftAssign:
				case CParser.RightShiftAssign:
				case CParser.AndAssign:
				case CParser.XorAssign:
				case CParser.OrAssign:
				case CParser.Equal:
				case CParser.NotEqual:
				case CParser.Arrow:
				case CParser.Dot:
				case CParser.Ellipsis:
				case CParser.Identifier:
				case CParser.Constant:
				case CParser.DigitSequence:
				case CParser.StringLiteral:
				case CParser.ComplexDefine:
				case CParser.IncludeDirective:
				case CParser.AsmBlock:
				case CParser.LineAfterPreprocessing:
				case CParser.LineDirective:
				case CParser.PragmaDirective:
				case CParser.Whitespace:
				case CParser.Newline:
				case CParser.BlockComment:
				case CParser.LineComment:
					{
					this.state = 839;
					_la = this._input.LA(1);
					if (_la <= 0 || (_la === CParser.LeftParen || _la === CParser.RightParen)) {
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
				case CParser.LeftParen:
					{
					this.state = 840;
					this.match(CParser.LeftParen);
					this.state = 841;
					this.nestedParenthesesBlock();
					this.state = 842;
					this.match(CParser.RightParen);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 848;
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
	public pointer(): PointerContext {
		let _localctx: PointerContext = new PointerContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, CParser.RULE_pointer);
		let _la: number;
		try {
			this.state = 867;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 849;
				this.match(CParser.Star);
				this.state = 851;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
				case 1:
					{
					this.state = 850;
					this.typeQualifierList(0);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 853;
				this.match(CParser.Star);
				this.state = 855;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CParser.Const || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (CParser.Restrict - 35)) | (1 << (CParser.Volatile - 35)) | (1 << (CParser.Atomic - 35)))) !== 0)) {
					{
					this.state = 854;
					this.typeQualifierList(0);
					}
				}

				this.state = 857;
				this.pointer();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 858;
				this.match(CParser.Caret);
				this.state = 860;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
				case 1:
					{
					this.state = 859;
					this.typeQualifierList(0);
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 862;
				this.match(CParser.Caret);
				this.state = 864;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CParser.Const || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (CParser.Restrict - 35)) | (1 << (CParser.Volatile - 35)) | (1 << (CParser.Atomic - 35)))) !== 0)) {
					{
					this.state = 863;
					this.typeQualifierList(0);
					}
				}

				this.state = 866;
				this.pointer();
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

	public typeQualifierList(): TypeQualifierListContext;
	public typeQualifierList(_p: number): TypeQualifierListContext;
	// @RuleVersion(0)
	public typeQualifierList(_p?: number): TypeQualifierListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeQualifierListContext = new TypeQualifierListContext(this._ctx, _parentState);
		let _prevctx: TypeQualifierListContext = _localctx;
		let _startState: number = 112;
		this.enterRecursionRule(_localctx, 112, CParser.RULE_typeQualifierList, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 870;
			this.typeQualifier();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 876;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new TypeQualifierListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_typeQualifierList);
					this.state = 872;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 873;
					this.typeQualifier();
					}
					}
				}
				this.state = 878;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
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
	public parameterTypeList(): ParameterTypeListContext {
		let _localctx: ParameterTypeListContext = new ParameterTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, CParser.RULE_parameterTypeList);
		try {
			this.state = 884;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 879;
				this.parameterList(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 880;
				this.parameterList(0);
				this.state = 881;
				this.match(CParser.Comma);
				this.state = 882;
				this.match(CParser.Ellipsis);
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

	public parameterList(): ParameterListContext;
	public parameterList(_p: number): ParameterListContext;
	// @RuleVersion(0)
	public parameterList(_p?: number): ParameterListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, _parentState);
		let _prevctx: ParameterListContext = _localctx;
		let _startState: number = 116;
		this.enterRecursionRule(_localctx, 116, CParser.RULE_parameterList, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 887;
			this.parameterDeclaration();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 894;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ParameterListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_parameterList);
					this.state = 889;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 890;
					this.match(CParser.Comma);
					this.state = 891;
					this.parameterDeclaration();
					}
					}
				}
				this.state = 896;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
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
	public parameterDeclaration(): ParameterDeclarationContext {
		let _localctx: ParameterDeclarationContext = new ParameterDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, CParser.RULE_parameterDeclaration);
		try {
			this.state = 904;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 897;
				this.declarationSpecifiers();
				this.state = 898;
				this.declarator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 900;
				this.declarationSpecifiers2();
				this.state = 902;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
				case 1:
					{
					this.state = 901;
					this.abstractDeclarator();
					}
					break;
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

	public identifierList(): IdentifierListContext;
	public identifierList(_p: number): IdentifierListContext;
	// @RuleVersion(0)
	public identifierList(_p?: number): IdentifierListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: IdentifierListContext = new IdentifierListContext(this._ctx, _parentState);
		let _prevctx: IdentifierListContext = _localctx;
		let _startState: number = 120;
		this.enterRecursionRule(_localctx, 120, CParser.RULE_identifierList, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 907;
			this.match(CParser.Identifier);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 914;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new IdentifierListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_identifierList);
					this.state = 909;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 910;
					this.match(CParser.Comma);
					this.state = 911;
					this.match(CParser.Identifier);
					}
					}
				}
				this.state = 916;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
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
	public typeName(): TypeNameContext {
		let _localctx: TypeNameContext = new TypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, CParser.RULE_typeName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 917;
			this.specifierQualifierList();
			this.state = 919;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (CParser.LeftParen - 59)) | (1 << (CParser.LeftBracket - 59)) | (1 << (CParser.Star - 59)) | (1 << (CParser.Caret - 59)))) !== 0)) {
				{
				this.state = 918;
				this.abstractDeclarator();
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
	public abstractDeclarator(): AbstractDeclaratorContext {
		let _localctx: AbstractDeclaratorContext = new AbstractDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, CParser.RULE_abstractDeclarator);
		let _la: number;
		try {
			let _alt: number;
			this.state = 932;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 921;
				this.pointer();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 923;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CParser.Star || _la === CParser.Caret) {
					{
					this.state = 922;
					this.pointer();
					}
				}

				this.state = 925;
				this.directAbstractDeclarator(0);
				this.state = 929;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 926;
						this.gccDeclaratorExtension();
						}
						}
					}
					this.state = 931;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
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

	public directAbstractDeclarator(): DirectAbstractDeclaratorContext;
	public directAbstractDeclarator(_p: number): DirectAbstractDeclaratorContext;
	// @RuleVersion(0)
	public directAbstractDeclarator(_p?: number): DirectAbstractDeclaratorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: DirectAbstractDeclaratorContext = new DirectAbstractDeclaratorContext(this._ctx, _parentState);
		let _prevctx: DirectAbstractDeclaratorContext = _localctx;
		let _startState: number = 126;
		this.enterRecursionRule(_localctx, 126, CParser.RULE_directAbstractDeclarator, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 980;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
			case 1:
				{
				this.state = 935;
				this.match(CParser.LeftParen);
				this.state = 936;
				this.abstractDeclarator();
				this.state = 937;
				this.match(CParser.RightParen);
				this.state = 941;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 938;
						this.gccDeclaratorExtension();
						}
						}
					}
					this.state = 943;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
				}
				}
				break;

			case 2:
				{
				this.state = 944;
				this.match(CParser.LeftBracket);
				this.state = 946;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CParser.Const || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (CParser.Restrict - 35)) | (1 << (CParser.Volatile - 35)) | (1 << (CParser.Atomic - 35)))) !== 0)) {
					{
					this.state = 945;
					this.typeQualifierList(0);
					}
				}

				this.state = 949;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CParser.Sizeof - 39)) | (1 << (CParser.Alignof - 39)) | (1 << (CParser.Generic - 39)) | (1 << (CParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CParser.Plus - 71)) | (1 << (CParser.PlusPlus - 71)) | (1 << (CParser.Minus - 71)) | (1 << (CParser.MinusMinus - 71)) | (1 << (CParser.Star - 71)) | (1 << (CParser.And - 71)) | (1 << (CParser.AndAnd - 71)) | (1 << (CParser.Not - 71)) | (1 << (CParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CParser.Identifier - 105)) | (1 << (CParser.Constant - 105)) | (1 << (CParser.DigitSequence - 105)) | (1 << (CParser.StringLiteral - 105)))) !== 0)) {
					{
					this.state = 948;
					this.assignmentExpression();
					}
				}

				this.state = 951;
				this.match(CParser.RightBracket);
				}
				break;

			case 3:
				{
				this.state = 952;
				this.match(CParser.LeftBracket);
				this.state = 953;
				this.match(CParser.Static);
				this.state = 955;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CParser.Const || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (CParser.Restrict - 35)) | (1 << (CParser.Volatile - 35)) | (1 << (CParser.Atomic - 35)))) !== 0)) {
					{
					this.state = 954;
					this.typeQualifierList(0);
					}
				}

				this.state = 957;
				this.assignmentExpression();
				this.state = 958;
				this.match(CParser.RightBracket);
				}
				break;

			case 4:
				{
				this.state = 960;
				this.match(CParser.LeftBracket);
				this.state = 961;
				this.typeQualifierList(0);
				this.state = 962;
				this.match(CParser.Static);
				this.state = 963;
				this.assignmentExpression();
				this.state = 964;
				this.match(CParser.RightBracket);
				}
				break;

			case 5:
				{
				this.state = 966;
				this.match(CParser.LeftBracket);
				this.state = 967;
				this.match(CParser.Star);
				this.state = 968;
				this.match(CParser.RightBracket);
				}
				break;

			case 6:
				{
				this.state = 969;
				this.match(CParser.LeftParen);
				this.state = 971;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.T__9) | (1 << CParser.T__11) | (1 << CParser.Auto) | (1 << CParser.Char) | (1 << CParser.Const) | (1 << CParser.Double) | (1 << CParser.Enum) | (1 << CParser.Extern) | (1 << CParser.Float) | (1 << CParser.Inline))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Int - 32)) | (1 << (CParser.Long - 32)) | (1 << (CParser.Register - 32)) | (1 << (CParser.Restrict - 32)) | (1 << (CParser.Short - 32)) | (1 << (CParser.Signed - 32)) | (1 << (CParser.Static - 32)) | (1 << (CParser.Struct - 32)) | (1 << (CParser.Typedef - 32)) | (1 << (CParser.Union - 32)) | (1 << (CParser.Unsigned - 32)) | (1 << (CParser.Void - 32)) | (1 << (CParser.Volatile - 32)) | (1 << (CParser.Alignas - 32)) | (1 << (CParser.Atomic - 32)) | (1 << (CParser.Bool - 32)) | (1 << (CParser.Complex - 32)) | (1 << (CParser.Noreturn - 32)) | (1 << (CParser.ThreadLocal - 32)))) !== 0) || _la === CParser.Identifier) {
					{
					this.state = 970;
					this.parameterTypeList();
					}
				}

				this.state = 973;
				this.match(CParser.RightParen);
				this.state = 977;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 974;
						this.gccDeclaratorExtension();
						}
						}
					}
					this.state = 979;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1025;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1023;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
					case 1:
						{
						_localctx = new DirectAbstractDeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directAbstractDeclarator);
						this.state = 982;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 983;
						this.match(CParser.LeftBracket);
						this.state = 985;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CParser.Const || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (CParser.Restrict - 35)) | (1 << (CParser.Volatile - 35)) | (1 << (CParser.Atomic - 35)))) !== 0)) {
							{
							this.state = 984;
							this.typeQualifierList(0);
							}
						}

						this.state = 988;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CParser.Sizeof - 39)) | (1 << (CParser.Alignof - 39)) | (1 << (CParser.Generic - 39)) | (1 << (CParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CParser.Plus - 71)) | (1 << (CParser.PlusPlus - 71)) | (1 << (CParser.Minus - 71)) | (1 << (CParser.MinusMinus - 71)) | (1 << (CParser.Star - 71)) | (1 << (CParser.And - 71)) | (1 << (CParser.AndAnd - 71)) | (1 << (CParser.Not - 71)) | (1 << (CParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CParser.Identifier - 105)) | (1 << (CParser.Constant - 105)) | (1 << (CParser.DigitSequence - 105)) | (1 << (CParser.StringLiteral - 105)))) !== 0)) {
							{
							this.state = 987;
							this.assignmentExpression();
							}
						}

						this.state = 990;
						this.match(CParser.RightBracket);
						}
						break;

					case 2:
						{
						_localctx = new DirectAbstractDeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directAbstractDeclarator);
						this.state = 991;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 992;
						this.match(CParser.LeftBracket);
						this.state = 993;
						this.match(CParser.Static);
						this.state = 995;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CParser.Const || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (CParser.Restrict - 35)) | (1 << (CParser.Volatile - 35)) | (1 << (CParser.Atomic - 35)))) !== 0)) {
							{
							this.state = 994;
							this.typeQualifierList(0);
							}
						}

						this.state = 997;
						this.assignmentExpression();
						this.state = 998;
						this.match(CParser.RightBracket);
						}
						break;

					case 3:
						{
						_localctx = new DirectAbstractDeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directAbstractDeclarator);
						this.state = 1000;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 1001;
						this.match(CParser.LeftBracket);
						this.state = 1002;
						this.typeQualifierList(0);
						this.state = 1003;
						this.match(CParser.Static);
						this.state = 1004;
						this.assignmentExpression();
						this.state = 1005;
						this.match(CParser.RightBracket);
						}
						break;

					case 4:
						{
						_localctx = new DirectAbstractDeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directAbstractDeclarator);
						this.state = 1007;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 1008;
						this.match(CParser.LeftBracket);
						this.state = 1009;
						this.match(CParser.Star);
						this.state = 1010;
						this.match(CParser.RightBracket);
						}
						break;

					case 5:
						{
						_localctx = new DirectAbstractDeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directAbstractDeclarator);
						this.state = 1011;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 1012;
						this.match(CParser.LeftParen);
						this.state = 1014;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.T__9) | (1 << CParser.T__11) | (1 << CParser.Auto) | (1 << CParser.Char) | (1 << CParser.Const) | (1 << CParser.Double) | (1 << CParser.Enum) | (1 << CParser.Extern) | (1 << CParser.Float) | (1 << CParser.Inline))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Int - 32)) | (1 << (CParser.Long - 32)) | (1 << (CParser.Register - 32)) | (1 << (CParser.Restrict - 32)) | (1 << (CParser.Short - 32)) | (1 << (CParser.Signed - 32)) | (1 << (CParser.Static - 32)) | (1 << (CParser.Struct - 32)) | (1 << (CParser.Typedef - 32)) | (1 << (CParser.Union - 32)) | (1 << (CParser.Unsigned - 32)) | (1 << (CParser.Void - 32)) | (1 << (CParser.Volatile - 32)) | (1 << (CParser.Alignas - 32)) | (1 << (CParser.Atomic - 32)) | (1 << (CParser.Bool - 32)) | (1 << (CParser.Complex - 32)) | (1 << (CParser.Noreturn - 32)) | (1 << (CParser.ThreadLocal - 32)))) !== 0) || _la === CParser.Identifier) {
							{
							this.state = 1013;
							this.parameterTypeList();
							}
						}

						this.state = 1016;
						this.match(CParser.RightParen);
						this.state = 1020;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 1017;
								this.gccDeclaratorExtension();
								}
								}
							}
							this.state = 1022;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
						}
						}
						break;
					}
					}
				}
				this.state = 1027;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
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
	public typedefName(): TypedefNameContext {
		let _localctx: TypedefNameContext = new TypedefNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, CParser.RULE_typedefName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1028;
			this.match(CParser.Identifier);
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
	public initializer(): InitializerContext {
		let _localctx: InitializerContext = new InitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, CParser.RULE_initializer);
		try {
			this.state = 1040;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1030;
				this.assignmentExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1031;
				this.match(CParser.LeftBrace);
				this.state = 1032;
				this.initializerList(0);
				this.state = 1033;
				this.match(CParser.RightBrace);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1035;
				this.match(CParser.LeftBrace);
				this.state = 1036;
				this.initializerList(0);
				this.state = 1037;
				this.match(CParser.Comma);
				this.state = 1038;
				this.match(CParser.RightBrace);
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

	public initializerList(): InitializerListContext;
	public initializerList(_p: number): InitializerListContext;
	// @RuleVersion(0)
	public initializerList(_p?: number): InitializerListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: InitializerListContext = new InitializerListContext(this._ctx, _parentState);
		let _prevctx: InitializerListContext = _localctx;
		let _startState: number = 132;
		this.enterRecursionRule(_localctx, 132, CParser.RULE_initializerList, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1044;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CParser.LeftBracket || _la === CParser.Dot) {
				{
				this.state = 1043;
				this.designation();
				}
			}

			this.state = 1046;
			this.initializer();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1056;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new InitializerListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_initializerList);
					this.state = 1048;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 1049;
					this.match(CParser.Comma);
					this.state = 1051;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CParser.LeftBracket || _la === CParser.Dot) {
						{
						this.state = 1050;
						this.designation();
						}
					}

					this.state = 1053;
					this.initializer();
					}
					}
				}
				this.state = 1058;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
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
	public designation(): DesignationContext {
		let _localctx: DesignationContext = new DesignationContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, CParser.RULE_designation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1059;
			this.designatorList(0);
			this.state = 1060;
			this.match(CParser.Assign);
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

	public designatorList(): DesignatorListContext;
	public designatorList(_p: number): DesignatorListContext;
	// @RuleVersion(0)
	public designatorList(_p?: number): DesignatorListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: DesignatorListContext = new DesignatorListContext(this._ctx, _parentState);
		let _prevctx: DesignatorListContext = _localctx;
		let _startState: number = 136;
		this.enterRecursionRule(_localctx, 136, CParser.RULE_designatorList, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1063;
			this.designator();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1069;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new DesignatorListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_designatorList);
					this.state = 1065;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 1066;
					this.designator();
					}
					}
				}
				this.state = 1071;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
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
	public designator(): DesignatorContext {
		let _localctx: DesignatorContext = new DesignatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, CParser.RULE_designator);
		try {
			this.state = 1078;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.LeftBracket:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1072;
				this.match(CParser.LeftBracket);
				this.state = 1073;
				this.constantExpression();
				this.state = 1074;
				this.match(CParser.RightBracket);
				}
				break;
			case CParser.Dot:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1076;
				this.match(CParser.Dot);
				this.state = 1077;
				this.match(CParser.Identifier);
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
	public staticAssertDeclaration(): StaticAssertDeclarationContext {
		let _localctx: StaticAssertDeclarationContext = new StaticAssertDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, CParser.RULE_staticAssertDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1080;
			this.match(CParser.StaticAssert);
			this.state = 1081;
			this.match(CParser.LeftParen);
			this.state = 1082;
			this.constantExpression();
			this.state = 1083;
			this.match(CParser.Comma);
			this.state = 1085;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1084;
				this.match(CParser.StringLiteral);
				}
				}
				this.state = 1087;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === CParser.StringLiteral);
			this.state = 1089;
			this.match(CParser.RightParen);
			this.state = 1090;
			this.match(CParser.Semi);
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
		this.enterRule(_localctx, 142, CParser.RULE_statement);
		let _la: number;
		try {
			this.state = 1129;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 118, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1092;
				this.labeledStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1093;
				this.compoundStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1094;
				this.expressionStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1095;
				this.selectionStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1096;
				this.iterationStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1097;
				this.jumpStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1098;
				_la = this._input.LA(1);
				if (!(_la === CParser.T__10 || _la === CParser.T__12)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1099;
				_la = this._input.LA(1);
				if (!(_la === CParser.T__13 || _la === CParser.Volatile)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1100;
				this.match(CParser.LeftParen);
				this.state = 1109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CParser.Sizeof - 39)) | (1 << (CParser.Alignof - 39)) | (1 << (CParser.Generic - 39)) | (1 << (CParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CParser.Plus - 71)) | (1 << (CParser.PlusPlus - 71)) | (1 << (CParser.Minus - 71)) | (1 << (CParser.MinusMinus - 71)) | (1 << (CParser.Star - 71)) | (1 << (CParser.And - 71)) | (1 << (CParser.AndAnd - 71)) | (1 << (CParser.Not - 71)) | (1 << (CParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CParser.Identifier - 105)) | (1 << (CParser.Constant - 105)) | (1 << (CParser.DigitSequence - 105)) | (1 << (CParser.StringLiteral - 105)))) !== 0)) {
					{
					this.state = 1101;
					this.logicalOrExpression(0);
					this.state = 1106;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CParser.Comma) {
						{
						{
						this.state = 1102;
						this.match(CParser.Comma);
						this.state = 1103;
						this.logicalOrExpression(0);
						}
						}
						this.state = 1108;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1124;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CParser.Colon) {
					{
					{
					this.state = 1111;
					this.match(CParser.Colon);
					this.state = 1120;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CParser.Sizeof - 39)) | (1 << (CParser.Alignof - 39)) | (1 << (CParser.Generic - 39)) | (1 << (CParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CParser.Plus - 71)) | (1 << (CParser.PlusPlus - 71)) | (1 << (CParser.Minus - 71)) | (1 << (CParser.MinusMinus - 71)) | (1 << (CParser.Star - 71)) | (1 << (CParser.And - 71)) | (1 << (CParser.AndAnd - 71)) | (1 << (CParser.Not - 71)) | (1 << (CParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CParser.Identifier - 105)) | (1 << (CParser.Constant - 105)) | (1 << (CParser.DigitSequence - 105)) | (1 << (CParser.StringLiteral - 105)))) !== 0)) {
						{
						this.state = 1112;
						this.logicalOrExpression(0);
						this.state = 1117;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === CParser.Comma) {
							{
							{
							this.state = 1113;
							this.match(CParser.Comma);
							this.state = 1114;
							this.logicalOrExpression(0);
							}
							}
							this.state = 1119;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
					}

					}
					}
					this.state = 1126;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1127;
				this.match(CParser.RightParen);
				this.state = 1128;
				this.match(CParser.Semi);
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
	public labeledStatement(): LabeledStatementContext {
		let _localctx: LabeledStatementContext = new LabeledStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, CParser.RULE_labeledStatement);
		try {
			this.state = 1142;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1131;
				this.match(CParser.Identifier);
				this.state = 1132;
				this.match(CParser.Colon);
				this.state = 1133;
				this.statement();
				}
				break;
			case CParser.Case:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1134;
				this.match(CParser.Case);
				this.state = 1135;
				this.constantExpression();
				this.state = 1136;
				this.match(CParser.Colon);
				this.state = 1137;
				this.statement();
				}
				break;
			case CParser.Default:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1139;
				this.match(CParser.Default);
				this.state = 1140;
				this.match(CParser.Colon);
				this.state = 1141;
				this.statement();
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
	public compoundStatement(): CompoundStatementContext {
		let _localctx: CompoundStatementContext = new CompoundStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, CParser.RULE_compoundStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1144;
			this.match(CParser.LeftBrace);
			this.state = 1146;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.T__9) | (1 << CParser.T__10) | (1 << CParser.T__11) | (1 << CParser.T__12) | (1 << CParser.Auto) | (1 << CParser.Break) | (1 << CParser.Case) | (1 << CParser.Char) | (1 << CParser.Const) | (1 << CParser.Continue) | (1 << CParser.Default) | (1 << CParser.Do) | (1 << CParser.Double) | (1 << CParser.Enum) | (1 << CParser.Extern) | (1 << CParser.Float) | (1 << CParser.For) | (1 << CParser.Goto) | (1 << CParser.If) | (1 << CParser.Inline))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Int - 32)) | (1 << (CParser.Long - 32)) | (1 << (CParser.Register - 32)) | (1 << (CParser.Restrict - 32)) | (1 << (CParser.Return - 32)) | (1 << (CParser.Short - 32)) | (1 << (CParser.Signed - 32)) | (1 << (CParser.Sizeof - 32)) | (1 << (CParser.Static - 32)) | (1 << (CParser.Struct - 32)) | (1 << (CParser.Switch - 32)) | (1 << (CParser.Typedef - 32)) | (1 << (CParser.Union - 32)) | (1 << (CParser.Unsigned - 32)) | (1 << (CParser.Void - 32)) | (1 << (CParser.Volatile - 32)) | (1 << (CParser.While - 32)) | (1 << (CParser.Alignas - 32)) | (1 << (CParser.Alignof - 32)) | (1 << (CParser.Atomic - 32)) | (1 << (CParser.Bool - 32)) | (1 << (CParser.Complex - 32)) | (1 << (CParser.Generic - 32)) | (1 << (CParser.Noreturn - 32)) | (1 << (CParser.StaticAssert - 32)) | (1 << (CParser.ThreadLocal - 32)) | (1 << (CParser.LeftParen - 32)) | (1 << (CParser.LeftBrace - 32)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CParser.Plus - 71)) | (1 << (CParser.PlusPlus - 71)) | (1 << (CParser.Minus - 71)) | (1 << (CParser.MinusMinus - 71)) | (1 << (CParser.Star - 71)) | (1 << (CParser.And - 71)) | (1 << (CParser.AndAnd - 71)) | (1 << (CParser.Not - 71)) | (1 << (CParser.Tilde - 71)) | (1 << (CParser.Semi - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CParser.Identifier - 105)) | (1 << (CParser.Constant - 105)) | (1 << (CParser.DigitSequence - 105)) | (1 << (CParser.StringLiteral - 105)))) !== 0)) {
				{
				this.state = 1145;
				this.blockItemList(0);
				}
			}

			this.state = 1148;
			this.match(CParser.RightBrace);
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

	public blockItemList(): BlockItemListContext;
	public blockItemList(_p: number): BlockItemListContext;
	// @RuleVersion(0)
	public blockItemList(_p?: number): BlockItemListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: BlockItemListContext = new BlockItemListContext(this._ctx, _parentState);
		let _prevctx: BlockItemListContext = _localctx;
		let _startState: number = 148;
		this.enterRecursionRule(_localctx, 148, CParser.RULE_blockItemList, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1151;
			this.blockItem();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1157;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 121, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new BlockItemListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_blockItemList);
					this.state = 1153;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 1154;
					this.blockItem();
					}
					}
				}
				this.state = 1159;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 121, this._ctx);
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
	public blockItem(): BlockItemContext {
		let _localctx: BlockItemContext = new BlockItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, CParser.RULE_blockItem);
		try {
			this.state = 1162;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 122, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1160;
				this.statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1161;
				this.declaration();
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
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, CParser.RULE_expressionStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CParser.Sizeof - 39)) | (1 << (CParser.Alignof - 39)) | (1 << (CParser.Generic - 39)) | (1 << (CParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CParser.Plus - 71)) | (1 << (CParser.PlusPlus - 71)) | (1 << (CParser.Minus - 71)) | (1 << (CParser.MinusMinus - 71)) | (1 << (CParser.Star - 71)) | (1 << (CParser.And - 71)) | (1 << (CParser.AndAnd - 71)) | (1 << (CParser.Not - 71)) | (1 << (CParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CParser.Identifier - 105)) | (1 << (CParser.Constant - 105)) | (1 << (CParser.DigitSequence - 105)) | (1 << (CParser.StringLiteral - 105)))) !== 0)) {
				{
				this.state = 1164;
				this.expression(0);
				}
			}

			this.state = 1167;
			this.match(CParser.Semi);
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
	public selectionStatement(): SelectionStatementContext {
		let _localctx: SelectionStatementContext = new SelectionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, CParser.RULE_selectionStatement);
		try {
			this.state = 1184;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.If:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1169;
				this.match(CParser.If);
				this.state = 1170;
				this.match(CParser.LeftParen);
				this.state = 1171;
				this.expression(0);
				this.state = 1172;
				this.match(CParser.RightParen);
				this.state = 1173;
				this.statement();
				this.state = 1176;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
				case 1:
					{
					this.state = 1174;
					this.match(CParser.Else);
					this.state = 1175;
					this.statement();
					}
					break;
				}
				}
				break;
			case CParser.Switch:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1178;
				this.match(CParser.Switch);
				this.state = 1179;
				this.match(CParser.LeftParen);
				this.state = 1180;
				this.expression(0);
				this.state = 1181;
				this.match(CParser.RightParen);
				this.state = 1182;
				this.statement();
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
	public iterationStatement(): IterationStatementContext {
		let _localctx: IterationStatementContext = new IterationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, CParser.RULE_iterationStatement);
		try {
			this.state = 1206;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.While:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1186;
				this.match(CParser.While);
				this.state = 1187;
				this.match(CParser.LeftParen);
				this.state = 1188;
				this.expression(0);
				this.state = 1189;
				this.match(CParser.RightParen);
				this.state = 1190;
				this.statement();
				}
				break;
			case CParser.Do:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1192;
				this.match(CParser.Do);
				this.state = 1193;
				this.statement();
				this.state = 1194;
				this.match(CParser.While);
				this.state = 1195;
				this.match(CParser.LeftParen);
				this.state = 1196;
				this.expression(0);
				this.state = 1197;
				this.match(CParser.RightParen);
				this.state = 1198;
				this.match(CParser.Semi);
				}
				break;
			case CParser.For:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1200;
				this.match(CParser.For);
				this.state = 1201;
				this.match(CParser.LeftParen);
				this.state = 1202;
				this.forCondition();
				this.state = 1203;
				this.match(CParser.RightParen);
				this.state = 1204;
				this.statement();
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
	public forCondition(): ForConditionContext {
		let _localctx: ForConditionContext = new ForConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, CParser.RULE_forCondition);
		let _la: number;
		try {
			this.state = 1228;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 132, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1208;
				this.forDeclaration();
				this.state = 1209;
				this.match(CParser.Semi);
				this.state = 1211;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CParser.Sizeof - 39)) | (1 << (CParser.Alignof - 39)) | (1 << (CParser.Generic - 39)) | (1 << (CParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CParser.Plus - 71)) | (1 << (CParser.PlusPlus - 71)) | (1 << (CParser.Minus - 71)) | (1 << (CParser.MinusMinus - 71)) | (1 << (CParser.Star - 71)) | (1 << (CParser.And - 71)) | (1 << (CParser.AndAnd - 71)) | (1 << (CParser.Not - 71)) | (1 << (CParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CParser.Identifier - 105)) | (1 << (CParser.Constant - 105)) | (1 << (CParser.DigitSequence - 105)) | (1 << (CParser.StringLiteral - 105)))) !== 0)) {
					{
					this.state = 1210;
					this.forExpression(0);
					}
				}

				this.state = 1213;
				this.match(CParser.Semi);
				this.state = 1215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CParser.Sizeof - 39)) | (1 << (CParser.Alignof - 39)) | (1 << (CParser.Generic - 39)) | (1 << (CParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CParser.Plus - 71)) | (1 << (CParser.PlusPlus - 71)) | (1 << (CParser.Minus - 71)) | (1 << (CParser.MinusMinus - 71)) | (1 << (CParser.Star - 71)) | (1 << (CParser.And - 71)) | (1 << (CParser.AndAnd - 71)) | (1 << (CParser.Not - 71)) | (1 << (CParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CParser.Identifier - 105)) | (1 << (CParser.Constant - 105)) | (1 << (CParser.DigitSequence - 105)) | (1 << (CParser.StringLiteral - 105)))) !== 0)) {
					{
					this.state = 1214;
					this.forExpression(0);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1218;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CParser.Sizeof - 39)) | (1 << (CParser.Alignof - 39)) | (1 << (CParser.Generic - 39)) | (1 << (CParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CParser.Plus - 71)) | (1 << (CParser.PlusPlus - 71)) | (1 << (CParser.Minus - 71)) | (1 << (CParser.MinusMinus - 71)) | (1 << (CParser.Star - 71)) | (1 << (CParser.And - 71)) | (1 << (CParser.AndAnd - 71)) | (1 << (CParser.Not - 71)) | (1 << (CParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CParser.Identifier - 105)) | (1 << (CParser.Constant - 105)) | (1 << (CParser.DigitSequence - 105)) | (1 << (CParser.StringLiteral - 105)))) !== 0)) {
					{
					this.state = 1217;
					this.expression(0);
					}
				}

				this.state = 1220;
				this.match(CParser.Semi);
				this.state = 1222;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CParser.Sizeof - 39)) | (1 << (CParser.Alignof - 39)) | (1 << (CParser.Generic - 39)) | (1 << (CParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CParser.Plus - 71)) | (1 << (CParser.PlusPlus - 71)) | (1 << (CParser.Minus - 71)) | (1 << (CParser.MinusMinus - 71)) | (1 << (CParser.Star - 71)) | (1 << (CParser.And - 71)) | (1 << (CParser.AndAnd - 71)) | (1 << (CParser.Not - 71)) | (1 << (CParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CParser.Identifier - 105)) | (1 << (CParser.Constant - 105)) | (1 << (CParser.DigitSequence - 105)) | (1 << (CParser.StringLiteral - 105)))) !== 0)) {
					{
					this.state = 1221;
					this.forExpression(0);
					}
				}

				this.state = 1224;
				this.match(CParser.Semi);
				this.state = 1226;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CParser.Sizeof - 39)) | (1 << (CParser.Alignof - 39)) | (1 << (CParser.Generic - 39)) | (1 << (CParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CParser.Plus - 71)) | (1 << (CParser.PlusPlus - 71)) | (1 << (CParser.Minus - 71)) | (1 << (CParser.MinusMinus - 71)) | (1 << (CParser.Star - 71)) | (1 << (CParser.And - 71)) | (1 << (CParser.AndAnd - 71)) | (1 << (CParser.Not - 71)) | (1 << (CParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CParser.Identifier - 105)) | (1 << (CParser.Constant - 105)) | (1 << (CParser.DigitSequence - 105)) | (1 << (CParser.StringLiteral - 105)))) !== 0)) {
					{
					this.state = 1225;
					this.forExpression(0);
					}
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
	// @RuleVersion(0)
	public forDeclaration(): ForDeclarationContext {
		let _localctx: ForDeclarationContext = new ForDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, CParser.RULE_forDeclaration);
		try {
			this.state = 1234;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 133, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1230;
				this.declarationSpecifiers();
				this.state = 1231;
				this.initDeclaratorList(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1233;
				this.declarationSpecifiers();
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

	public forExpression(): ForExpressionContext;
	public forExpression(_p: number): ForExpressionContext;
	// @RuleVersion(0)
	public forExpression(_p?: number): ForExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ForExpressionContext = new ForExpressionContext(this._ctx, _parentState);
		let _prevctx: ForExpressionContext = _localctx;
		let _startState: number = 162;
		this.enterRecursionRule(_localctx, 162, CParser.RULE_forExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1237;
			this.assignmentExpression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1244;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ForExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_forExpression);
					this.state = 1239;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 1240;
					this.match(CParser.Comma);
					this.state = 1241;
					this.assignmentExpression();
					}
					}
				}
				this.state = 1246;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
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
	public jumpStatement(): JumpStatementContext {
		let _localctx: JumpStatementContext = new JumpStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, CParser.RULE_jumpStatement);
		let _la: number;
		try {
			this.state = 1263;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 136, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1247;
				this.match(CParser.Goto);
				this.state = 1248;
				this.match(CParser.Identifier);
				this.state = 1249;
				this.match(CParser.Semi);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1250;
				this.match(CParser.Continue);
				this.state = 1251;
				this.match(CParser.Semi);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1252;
				this.match(CParser.Break);
				this.state = 1253;
				this.match(CParser.Semi);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1254;
				this.match(CParser.Return);
				this.state = 1256;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CParser.Sizeof - 39)) | (1 << (CParser.Alignof - 39)) | (1 << (CParser.Generic - 39)) | (1 << (CParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CParser.Plus - 71)) | (1 << (CParser.PlusPlus - 71)) | (1 << (CParser.Minus - 71)) | (1 << (CParser.MinusMinus - 71)) | (1 << (CParser.Star - 71)) | (1 << (CParser.And - 71)) | (1 << (CParser.AndAnd - 71)) | (1 << (CParser.Not - 71)) | (1 << (CParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CParser.Identifier - 105)) | (1 << (CParser.Constant - 105)) | (1 << (CParser.DigitSequence - 105)) | (1 << (CParser.StringLiteral - 105)))) !== 0)) {
					{
					this.state = 1255;
					this.expression(0);
					}
				}

				this.state = 1258;
				this.match(CParser.Semi);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1259;
				this.match(CParser.Goto);
				this.state = 1260;
				this.unaryExpression();
				this.state = 1261;
				this.match(CParser.Semi);
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

	public translationUnit(): TranslationUnitContext;
	public translationUnit(_p: number): TranslationUnitContext;
	// @RuleVersion(0)
	public translationUnit(_p?: number): TranslationUnitContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TranslationUnitContext = new TranslationUnitContext(this._ctx, _parentState);
		let _prevctx: TranslationUnitContext = _localctx;
		let _startState: number = 166;
		this.enterRecursionRule(_localctx, 166, CParser.RULE_translationUnit, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1266;
			this.externalDeclaration();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1272;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new TranslationUnitContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_translationUnit);
					this.state = 1268;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 1269;
					this.externalDeclaration();
					}
					}
				}
				this.state = 1274;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
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
	public externalDeclaration(): ExternalDeclarationContext {
		let _localctx: ExternalDeclarationContext = new ExternalDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, CParser.RULE_externalDeclaration);
		try {
			this.state = 1277;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 138, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1275;
				this.functionDefinition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1276;
				this.declaration();
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
	public functionDefinition(): FunctionDefinitionContext {
		let _localctx: FunctionDefinitionContext = new FunctionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, CParser.RULE_functionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1280;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 139, this._ctx) ) {
			case 1:
				{
				this.state = 1279;
				this.declarationSpecifiers();
				}
				break;
			}
			this.state = 1282;
			this.declarator();
			this.state = 1284;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.T__9) | (1 << CParser.T__11) | (1 << CParser.Auto) | (1 << CParser.Char) | (1 << CParser.Const) | (1 << CParser.Double) | (1 << CParser.Enum) | (1 << CParser.Extern) | (1 << CParser.Float) | (1 << CParser.Inline))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Int - 32)) | (1 << (CParser.Long - 32)) | (1 << (CParser.Register - 32)) | (1 << (CParser.Restrict - 32)) | (1 << (CParser.Short - 32)) | (1 << (CParser.Signed - 32)) | (1 << (CParser.Static - 32)) | (1 << (CParser.Struct - 32)) | (1 << (CParser.Typedef - 32)) | (1 << (CParser.Union - 32)) | (1 << (CParser.Unsigned - 32)) | (1 << (CParser.Void - 32)) | (1 << (CParser.Volatile - 32)) | (1 << (CParser.Alignas - 32)) | (1 << (CParser.Atomic - 32)) | (1 << (CParser.Bool - 32)) | (1 << (CParser.Complex - 32)) | (1 << (CParser.Noreturn - 32)) | (1 << (CParser.StaticAssert - 32)) | (1 << (CParser.ThreadLocal - 32)))) !== 0) || _la === CParser.Identifier) {
				{
				this.state = 1283;
				this.declarationList(0);
				}
			}

			this.state = 1286;
			this.compoundStatement();
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

	public declarationList(): DeclarationListContext;
	public declarationList(_p: number): DeclarationListContext;
	// @RuleVersion(0)
	public declarationList(_p?: number): DeclarationListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: DeclarationListContext = new DeclarationListContext(this._ctx, _parentState);
		let _prevctx: DeclarationListContext = _localctx;
		let _startState: number = 172;
		this.enterRecursionRule(_localctx, 172, CParser.RULE_declarationList, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1289;
			this.declaration();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1295;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new DeclarationListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_declarationList);
					this.state = 1291;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 1292;
					this.declaration();
					}
					}
				}
				this.state = 1297;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 3:
			return this.genericAssocList_sempred(_localctx as GenericAssocListContext, predIndex);

		case 5:
			return this.postfixExpression_sempred(_localctx as PostfixExpressionContext, predIndex);

		case 6:
			return this.argumentExpressionList_sempred(_localctx as ArgumentExpressionListContext, predIndex);

		case 10:
			return this.multiplicativeExpression_sempred(_localctx as MultiplicativeExpressionContext, predIndex);

		case 11:
			return this.additiveExpression_sempred(_localctx as AdditiveExpressionContext, predIndex);

		case 12:
			return this.shiftExpression_sempred(_localctx as ShiftExpressionContext, predIndex);

		case 13:
			return this.relationalExpression_sempred(_localctx as RelationalExpressionContext, predIndex);

		case 14:
			return this.equalityExpression_sempred(_localctx as EqualityExpressionContext, predIndex);

		case 15:
			return this.andExpression_sempred(_localctx as AndExpressionContext, predIndex);

		case 16:
			return this.exclusiveOrExpression_sempred(_localctx as ExclusiveOrExpressionContext, predIndex);

		case 17:
			return this.inclusiveOrExpression_sempred(_localctx as InclusiveOrExpressionContext, predIndex);

		case 18:
			return this.logicalAndExpression_sempred(_localctx as LogicalAndExpressionContext, predIndex);

		case 19:
			return this.logicalOrExpression_sempred(_localctx as LogicalOrExpressionContext, predIndex);

		case 23:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 29:
			return this.initDeclaratorList_sempred(_localctx as InitDeclaratorListContext, predIndex);

		case 32:
			return this.typeSpecifier_sempred(_localctx as TypeSpecifierContext, predIndex);

		case 35:
			return this.structDeclarationList_sempred(_localctx as StructDeclarationListContext, predIndex);

		case 38:
			return this.structDeclaratorList_sempred(_localctx as StructDeclaratorListContext, predIndex);

		case 41:
			return this.enumeratorList_sempred(_localctx as EnumeratorListContext, predIndex);

		case 49:
			return this.directDeclarator_sempred(_localctx as DirectDeclaratorContext, predIndex);

		case 56:
			return this.typeQualifierList_sempred(_localctx as TypeQualifierListContext, predIndex);

		case 58:
			return this.parameterList_sempred(_localctx as ParameterListContext, predIndex);

		case 60:
			return this.identifierList_sempred(_localctx as IdentifierListContext, predIndex);

		case 63:
			return this.directAbstractDeclarator_sempred(_localctx as DirectAbstractDeclaratorContext, predIndex);

		case 66:
			return this.initializerList_sempred(_localctx as InitializerListContext, predIndex);

		case 68:
			return this.designatorList_sempred(_localctx as DesignatorListContext, predIndex);

		case 74:
			return this.blockItemList_sempred(_localctx as BlockItemListContext, predIndex);

		case 81:
			return this.forExpression_sempred(_localctx as ForExpressionContext, predIndex);

		case 83:
			return this.translationUnit_sempred(_localctx as TranslationUnitContext, predIndex);

		case 86:
			return this.declarationList_sempred(_localctx as DeclarationListContext, predIndex);
		}
		return true;
	}
	private genericAssocList_sempred(_localctx: GenericAssocListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private postfixExpression_sempred(_localctx: PostfixExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 10);

		case 2:
			return this.precpred(this._ctx, 9);

		case 3:
			return this.precpred(this._ctx, 8);

		case 4:
			return this.precpred(this._ctx, 7);

		case 5:
			return this.precpred(this._ctx, 6);

		case 6:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}
	private argumentExpressionList_sempred(_localctx: ArgumentExpressionListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private multiplicativeExpression_sempred(_localctx: MultiplicativeExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 3);

		case 9:
			return this.precpred(this._ctx, 2);

		case 10:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private additiveExpression_sempred(_localctx: AdditiveExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 11:
			return this.precpred(this._ctx, 2);

		case 12:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private shiftExpression_sempred(_localctx: ShiftExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 13:
			return this.precpred(this._ctx, 2);

		case 14:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private relationalExpression_sempred(_localctx: RelationalExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 15:
			return this.precpred(this._ctx, 4);

		case 16:
			return this.precpred(this._ctx, 3);

		case 17:
			return this.precpred(this._ctx, 2);

		case 18:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private equalityExpression_sempred(_localctx: EqualityExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 19:
			return this.precpred(this._ctx, 2);

		case 20:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private andExpression_sempred(_localctx: AndExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 21:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private exclusiveOrExpression_sempred(_localctx: ExclusiveOrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 22:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private inclusiveOrExpression_sempred(_localctx: InclusiveOrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 23:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private logicalAndExpression_sempred(_localctx: LogicalAndExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 24:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private logicalOrExpression_sempred(_localctx: LogicalOrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 25:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 26:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private initDeclaratorList_sempred(_localctx: InitDeclaratorListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 27:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private typeSpecifier_sempred(_localctx: TypeSpecifierContext, predIndex: number): boolean {
		switch (predIndex) {
		case 28:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private structDeclarationList_sempred(_localctx: StructDeclarationListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 29:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private structDeclaratorList_sempred(_localctx: StructDeclaratorListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 30:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private enumeratorList_sempred(_localctx: EnumeratorListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 31:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private directDeclarator_sempred(_localctx: DirectDeclaratorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 32:
			return this.precpred(this._ctx, 8);

		case 33:
			return this.precpred(this._ctx, 7);

		case 34:
			return this.precpred(this._ctx, 6);

		case 35:
			return this.precpred(this._ctx, 5);

		case 36:
			return this.precpred(this._ctx, 4);

		case 37:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}
	private typeQualifierList_sempred(_localctx: TypeQualifierListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 38:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private parameterList_sempred(_localctx: ParameterListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 39:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private identifierList_sempred(_localctx: IdentifierListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 40:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private directAbstractDeclarator_sempred(_localctx: DirectAbstractDeclaratorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 41:
			return this.precpred(this._ctx, 5);

		case 42:
			return this.precpred(this._ctx, 4);

		case 43:
			return this.precpred(this._ctx, 3);

		case 44:
			return this.precpred(this._ctx, 2);

		case 45:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private initializerList_sempred(_localctx: InitializerListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 46:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private designatorList_sempred(_localctx: DesignatorListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 47:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private blockItemList_sempred(_localctx: BlockItemListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 48:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private forExpression_sempred(_localctx: ForExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 49:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private translationUnit_sempred(_localctx: TranslationUnitContext, predIndex: number): boolean {
		switch (predIndex) {
		case 50:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private declarationList_sempred(_localctx: DeclarationListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 51:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03x\u0515\x04\x02" +
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
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x03\x02\x05\x02\xB2\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03" +
		"\x06\x03\xB9\n\x03\r\x03\x0E\x03\xBA\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x05\x03\xC3\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\xD7\n\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x07\x05\xE6\n\x05\f\x05\x0E\x05\xE9\v\x05\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xF2\n\x06\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u0116\n\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u0120" +
		"\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x07\x07\u012D\n\x07\f\x07\x0E\x07\u0130\v\x07" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b\u0138\n\b\f\b\x0E\b\u013B\v" +
		"\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u0153" +
		"\n\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v" +
		"\x03\v\x03\v\x03\v\x03\v\x05\v\u0164\n\v\x03\f\x03\f\x03\f\x03\f\x03\f" +
		"\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\u0172\n\f\f\f\x0E\f\u0175" +
		"\v\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\u0180" +
		"\n\r\f\r\x0E\r\u0183\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u018E\n\x0E\f\x0E\x0E\x0E\u0191\v\x0E" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u01A2\n\x0F\f" +
		"\x0F\x0E\x0F\u01A5\v\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x07\x10\u01B0\n\x10\f\x10\x0E\x10\u01B3\v\x10" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\u01BB\n\x11\f" +
		"\x11\x0E\x11\u01BE\v\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x07\x12\u01C6\n\x12\f\x12\x0E\x12\u01C9\v\x12\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x07\x13\u01D1\n\x13\f\x13\x0E\x13\u01D4\v\x13" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\u01DC\n\x14\f" +
		"\x14\x0E\x14\u01DF\v\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x07\x15\u01E7\n\x15\f\x15\x0E\x15\u01EA\v\x15\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x05\x16\u01F2\n\x16\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x05\x17\u01FA\n\x17\x03\x18\x03\x18\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u0204\n\x19\f\x19\x0E\x19\u0207" +
		"\v\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x05\x1B\u0213\n\x1B\x03\x1C\x06\x1C\u0216\n\x1C\r\x1C" +
		"\x0E\x1C\u0217\x03\x1D\x06\x1D\u021B\n\x1D\r\x1D\x0E\x1D\u021C\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0224\n\x1E\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u022C\n\x1F\f\x1F\x0E\x1F\u022F\v" +
		"\x1F\x03 \x03 \x03 \x03 \x03 \x05 \u0236\n \x03!\x03!\x03\"\x03\"\x03" +
		"\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
		"\"\x05\"\u0249\n\"\x03\"\x03\"\x07\"\u024D\n\"\f\"\x0E\"\u0250\v\"\x03" +
		"#\x03#\x05#\u0254\n#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x05#\u025D\n#" +
		"\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x07%\u0266\n%\f%\x0E%\u0269\v%\x03" +
		"&\x03&\x05&\u026D\n&\x03&\x03&\x03&\x05&\u0272\n&\x03\'\x03\'\x05\'\u0276" +
		"\n\'\x03\'\x03\'\x05\'\u027A\n\'\x05\'\u027C\n\'\x03(\x03(\x03(\x03(\x03" +
		"(\x03(\x07(\u0284\n(\f(\x0E(\u0287\v(\x03)\x03)\x05)\u028B\n)\x03)\x03" +
		")\x05)\u028F\n)\x03*\x03*\x05*\u0293\n*\x03*\x03*\x03*\x03*\x03*\x03*" +
		"\x05*\u029B\n*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u02A4\n*\x03+\x03" +
		"+\x03+\x03+\x03+\x03+\x07+\u02AC\n+\f+\x0E+\u02AF\v+\x03,\x03,\x03,\x03" +
		",\x03,\x05,\u02B6\n,\x03-\x03-\x03.\x03.\x03.\x03.\x03.\x03/\x03/\x03" +
		"0\x030\x030\x030\x030\x030\x050\u02C7\n0\x031\x031\x031\x031\x031\x03" +
		"1\x031\x031\x031\x031\x051\u02D3\n1\x032\x052\u02D6\n2\x032\x032\x072" +
		"\u02DA\n2\f2\x0E2\u02DD\v2\x033\x033\x033\x033\x033\x033\x033\x033\x03" +
		"3\x033\x033\x053\u02EA\n3\x033\x033\x033\x033\x053\u02F0\n3\x033\x033" +
		"\x033\x053\u02F5\n3\x033\x053\u02F8\n3\x033\x033\x033\x033\x033\x053\u02FF" +
		"\n3\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x05" +
		"3\u030E\n3\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x053\u031A" +
		"\n3\x033\x073\u031D\n3\f3\x0E3\u0320\v3\x034\x034\x034\x064\u0325\n4\r" +
		"4\x0E4\u0326\x034\x034\x054\u032B\n4\x035\x035\x035\x035\x035\x035\x03" +
		"5\x036\x036\x036\x076\u0337\n6\f6\x0E6\u033A\v6\x036\x056\u033D\n6\x03" +
		"7\x037\x037\x057\u0342\n7\x037\x057\u0345\n7\x037\x057\u0348\n7\x038\x03" +
		"8\x038\x038\x038\x078\u034F\n8\f8\x0E8\u0352\v8\x039\x039\x059\u0356\n" +
		"9\x039\x039\x059\u035A\n9\x039\x039\x039\x059\u035F\n9\x039\x039\x059" +
		"\u0363\n9\x039\x059\u0366\n9\x03:\x03:\x03:\x03:\x03:\x07:\u036D\n:\f" +
		":\x0E:\u0370\v:\x03;\x03;\x03;\x03;\x03;\x05;\u0377\n;\x03<\x03<\x03<" +
		"\x03<\x03<\x03<\x07<\u037F\n<\f<\x0E<\u0382\v<\x03=\x03=\x03=\x03=\x03" +
		"=\x05=\u0389\n=\x05=\u038B\n=\x03>\x03>\x03>\x03>\x03>\x03>\x07>\u0393" +
		"\n>\f>\x0E>\u0396\v>\x03?\x03?\x05?\u039A\n?\x03@\x03@\x05@\u039E\n@\x03" +
		"@\x03@\x07@\u03A2\n@\f@\x0E@\u03A5\v@\x05@\u03A7\n@\x03A\x03A\x03A\x03" +
		"A\x03A\x07A\u03AE\nA\fA\x0EA\u03B1\vA\x03A\x03A\x05A\u03B5\nA\x03A\x05" +
		"A\u03B8\nA\x03A\x03A\x03A\x03A\x05A\u03BE\nA\x03A\x03A\x03A\x03A\x03A" +
		"\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x05A\u03CE\nA\x03A\x03A" +
		"\x07A\u03D2\nA\fA\x0EA\u03D5\vA\x05A\u03D7\nA\x03A\x03A\x03A\x05A\u03DC" +
		"\nA\x03A\x05A\u03DF\nA\x03A\x03A\x03A\x03A\x03A\x05A\u03E6\nA\x03A\x03" +
		"A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03" +
		"A\x03A\x05A\u03F9\nA\x03A\x03A\x07A\u03FD\nA\fA\x0EA\u0400\vA\x07A\u0402" +
		"\nA\fA\x0EA\u0405\vA\x03B\x03B\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03" +
		"C\x03C\x03C\x05C\u0413\nC\x03D\x03D\x05D\u0417\nD\x03D\x03D\x03D\x03D" +
		"\x03D\x05D\u041E\nD\x03D\x07D\u0421\nD\fD\x0ED\u0424\vD\x03E\x03E\x03" +
		"E\x03F\x03F\x03F\x03F\x03F\x07F\u042E\nF\fF\x0EF\u0431\vF\x03G\x03G\x03" +
		"G\x03G\x03G\x03G\x05G\u0439\nG\x03H\x03H\x03H\x03H\x03H\x06H\u0440\nH" +
		"\rH\x0EH\u0441\x03H\x03H\x03H\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I" +
		"\x03I\x03I\x03I\x03I\x07I\u0453\nI\fI\x0EI\u0456\vI\x05I\u0458\nI\x03" +
		"I\x03I\x03I\x03I\x07I\u045E\nI\fI\x0EI\u0461\vI\x05I\u0463\nI\x07I\u0465" +
		"\nI\fI\x0EI\u0468\vI\x03I\x03I\x05I\u046C\nI\x03J\x03J\x03J\x03J\x03J" +
		"\x03J\x03J\x03J\x03J\x03J\x03J\x05J\u0479\nJ\x03K\x03K\x05K\u047D\nK\x03" +
		"K\x03K\x03L\x03L\x03L\x03L\x03L\x07L\u0486\nL\fL\x0EL\u0489\vL\x03M\x03" +
		"M\x05M\u048D\nM\x03N\x05N\u0490\nN\x03N\x03N\x03O\x03O\x03O\x03O\x03O" +
		"\x03O\x03O\x05O\u049B\nO\x03O\x03O\x03O\x03O\x03O\x03O\x05O\u04A3\nO\x03" +
		"P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03" +
		"P\x03P\x03P\x03P\x03P\x03P\x05P\u04B9\nP\x03Q\x03Q\x03Q\x05Q\u04BE\nQ" +
		"\x03Q\x03Q\x05Q\u04C2\nQ\x03Q\x05Q\u04C5\nQ\x03Q\x03Q\x05Q\u04C9\nQ\x03" +
		"Q\x03Q\x05Q\u04CD\nQ\x05Q\u04CF\nQ\x03R\x03R\x03R\x03R\x05R\u04D5\nR\x03" +
		"S\x03S\x03S\x03S\x03S\x03S\x07S\u04DD\nS\fS\x0ES\u04E0\vS\x03T\x03T\x03" +
		"T\x03T\x03T\x03T\x03T\x03T\x03T\x05T\u04EB\nT\x03T\x03T\x03T\x03T\x03" +
		"T\x05T\u04F2\nT\x03U\x03U\x03U\x03U\x03U\x07U\u04F9\nU\fU\x0EU\u04FC\v" +
		"U\x03V\x03V\x05V\u0500\nV\x03W\x05W\u0503\nW\x03W\x03W\x05W\u0507\nW\x03" +
		"W\x03W\x03X\x03X\x03X\x03X\x03X\x07X\u0510\nX\fX\x0EX\u0513\vX\x03X\x02" +
		"\x02 \b\f\x0E\x16\x18\x1A\x1C\x1E \"$&(0<BHNTdrvz\x80\x86\x8A\x96\xA4" +
		"\xA8\xAEY\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
		"^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02" +
		"z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02" +
		"\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02" +
		"\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\x02\x0E" +
		"\x07\x02IIKKMMPPUV\x03\x02[e\b\x02\x11\x11\x1C\x1C$$**--<<\n\x02\x06\b" +
		"\x14\x14\x19\x19\x1D\x1D\"#\'(/067\x03\x02\x06\b\x04\x02++..\x06\x02\x15" +
		"\x15%%1155\x05\x02\n\v!!::\x04\x02=>ZZ\x03\x02=>\x04\x02\r\r\x0F\x0F\x04" +
		"\x02\x10\x1011\x02\u0589\x02\xB1\x03\x02\x02\x02\x04\xD6\x03\x02\x02\x02" +
		"\x06\xD8\x03\x02\x02\x02\b\xDF\x03\x02\x02\x02\n\xF1\x03\x02\x02\x02\f" +
		"\u0115\x03\x02\x02\x02\x0E\u0131\x03\x02\x02\x02\x10\u0152\x03\x02\x02" +
		"\x02\x12\u0154\x03\x02\x02\x02\x14\u0163\x03\x02\x02\x02\x16\u0165\x03" +
		"\x02\x02\x02\x18\u0176\x03\x02\x02\x02\x1A\u0184\x03\x02\x02\x02\x1C\u0192" +
		"\x03\x02\x02\x02\x1E\u01A6\x03\x02\x02\x02 \u01B4\x03\x02\x02\x02\"\u01BF" +
		"\x03\x02\x02\x02$\u01CA\x03\x02\x02\x02&\u01D5\x03\x02\x02\x02(\u01E0" +
		"\x03\x02\x02\x02*\u01EB\x03\x02\x02\x02,\u01F9\x03\x02\x02\x02.\u01FB" +
		"\x03\x02\x02\x020\u01FD\x03\x02\x02\x022\u0208\x03\x02\x02\x024\u0212" +
		"\x03\x02\x02\x026\u0215\x03\x02\x02\x028\u021A\x03\x02\x02\x02:\u0223" +
		"\x03\x02\x02\x02<\u0225\x03\x02\x02\x02>\u0235\x03\x02\x02\x02@\u0237" +
		"\x03\x02\x02\x02B\u0248\x03\x02\x02\x02D\u025C\x03\x02\x02\x02F\u025E" +
		"\x03\x02\x02\x02H\u0260\x03\x02\x02\x02J\u0271\x03\x02\x02\x02L\u027B" +
		"\x03\x02\x02\x02N\u027D\x03\x02\x02\x02P\u028E\x03\x02\x02\x02R\u02A3" +
		"\x03\x02\x02\x02T\u02A5\x03\x02\x02\x02V\u02B5\x03\x02\x02\x02X\u02B7" +
		"\x03\x02\x02\x02Z\u02B9\x03\x02\x02\x02\\\u02BE\x03\x02\x02\x02^\u02C6" +
		"\x03\x02\x02\x02`\u02D2\x03\x02\x02\x02b\u02D5\x03\x02\x02\x02d\u02EF" +
		"\x03\x02\x02\x02f\u032A\x03\x02\x02\x02h\u032C\x03\x02\x02\x02j\u033C" +
		"\x03\x02\x02\x02l\u0347\x03\x02\x02\x02n\u0350\x03\x02\x02\x02p\u0365" +
		"\x03\x02\x02\x02r\u0367\x03\x02\x02\x02t\u0376\x03\x02\x02\x02v\u0378" +
		"\x03\x02\x02\x02x\u038A\x03\x02\x02\x02z\u038C\x03\x02\x02\x02|\u0397" +
		"\x03\x02\x02\x02~\u03A6\x03\x02\x02\x02\x80\u03D6\x03\x02\x02\x02\x82" +
		"\u0406\x03\x02\x02\x02\x84\u0412\x03\x02\x02\x02\x86\u0414\x03\x02\x02" +
		"\x02\x88\u0425\x03\x02\x02\x02\x8A\u0428\x03\x02\x02\x02\x8C\u0438\x03" +
		"\x02\x02\x02\x8E\u043A\x03\x02\x02\x02\x90\u046B\x03\x02\x02\x02\x92\u0478" +
		"\x03\x02\x02\x02\x94\u047A\x03\x02\x02\x02\x96\u0480\x03\x02\x02\x02\x98" +
		"\u048C\x03\x02\x02\x02\x9A\u048F\x03\x02\x02\x02\x9C\u04A2\x03\x02\x02" +
		"\x02\x9E\u04B8\x03\x02\x02\x02\xA0\u04CE\x03\x02\x02\x02\xA2\u04D4\x03" +
		"\x02\x02\x02\xA4\u04D6\x03\x02\x02\x02\xA6\u04F1\x03\x02\x02\x02\xA8\u04F3" +
		"\x03\x02\x02\x02\xAA\u04FF\x03\x02\x02\x02\xAC\u0502\x03\x02\x02\x02\xAE" +
		"\u050A\x03\x02\x02\x02\xB0\xB2\x05\xA8U\x02\xB1\xB0\x03\x02\x02\x02\xB1" +
		"\xB2\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB4\x07\x02\x02\x03\xB4" +
		"\x03\x03\x02\x02\x02\xB5\xD7\x07k\x02\x02\xB6\xD7\x07l\x02\x02\xB7\xB9" +
		"\x07n\x02\x02\xB8\xB7\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xB8" +
		"\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB\xD7\x03\x02\x02\x02\xBC\xBD" +
		"\x07=\x02\x02\xBD\xBE\x050\x19\x02\xBE\xBF\x07>\x02\x02\xBF\xD7\x03\x02" +
		"\x02\x02\xC0\xD7\x05\x06\x04\x02\xC1\xC3\x07\x03\x02\x02\xC2\xC1\x03\x02" +
		"\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC5\x07=" +
		"\x02\x02\xC5\xC6\x05\x94K\x02\xC6\xC7\x07>\x02\x02\xC7\xD7\x03\x02\x02" +
		"\x02\xC8\xC9\x07\x04\x02\x02\xC9\xCA\x07=\x02\x02\xCA\xCB\x05\x10\t\x02" +
		"\xCB\xCC\x07Z\x02\x02\xCC\xCD\x05|?\x02\xCD\xCE\x07>\x02\x02\xCE\xD7\x03" +
		"\x02\x02\x02\xCF\xD0\x07\x05\x02\x02\xD0\xD1\x07=\x02\x02\xD1\xD2\x05" +
		"|?\x02\xD2\xD3\x07Z\x02\x02\xD3\xD4\x05\x10\t\x02\xD4\xD5\x07>\x02\x02" +
		"\xD5\xD7\x03\x02\x02\x02\xD6\xB5\x03\x02\x02\x02\xD6\xB6\x03\x02\x02\x02" +
		"\xD6\xB8\x03\x02\x02\x02\xD6\xBC\x03\x02\x02\x02\xD6\xC0\x03\x02\x02\x02" +
		"\xD6\xC2\x03\x02\x02\x02\xD6\xC8\x03\x02\x02\x02\xD6\xCF\x03\x02\x02\x02" +
		"\xD7\x05\x03\x02\x02\x02\xD8\xD9\x078\x02\x02\xD9\xDA\x07=\x02\x02\xDA" +
		"\xDB\x05,\x17\x02\xDB\xDC\x07Z\x02\x02\xDC\xDD\x05\b\x05\x02\xDD\xDE\x07" +
		">\x02\x02\xDE\x07\x03\x02\x02\x02\xDF\xE0\b\x05\x01\x02\xE0\xE1\x05\n" +
		"\x06\x02\xE1\xE7\x03\x02\x02\x02\xE2\xE3\f\x03\x02\x02\xE3\xE4\x07Z\x02" +
		"\x02\xE4\xE6\x05\n\x06\x02\xE5\xE2\x03\x02\x02\x02\xE6\xE9\x03\x02\x02" +
		"\x02\xE7\xE5\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\t\x03\x02\x02" +
		"\x02\xE9\xE7\x03\x02\x02\x02\xEA\xEB\x05|?\x02\xEB\xEC\x07X\x02\x02\xEC" +
		"\xED\x05,\x17\x02\xED\xF2\x03\x02\x02\x02\xEE\xEF\x07\x17\x02\x02\xEF" +
		"\xF0\x07X\x02\x02\xF0\xF2\x05,\x17\x02\xF1\xEA\x03\x02\x02\x02\xF1\xEE" +
		"\x03\x02\x02\x02\xF2\v\x03\x02\x02\x02\xF3\xF4\b\x07\x01\x02\xF4\u0116" +
		"\x05\x04\x03\x02\xF5\xF6\x07=\x02\x02\xF6\xF7\x05|?\x02\xF7\xF8\x07>\x02" +
		"\x02\xF8\xF9\x07A\x02\x02\xF9\xFA\x05\x86D\x02\xFA\xFB\x07B\x02\x02\xFB" +
		"\u0116\x03\x02\x02\x02\xFC\xFD\x07=\x02\x02\xFD\xFE\x05|?\x02\xFE\xFF" +
		"\x07>\x02\x02\xFF\u0100\x07A\x02\x02\u0100\u0101\x05\x86D\x02\u0101\u0102" +
		"\x07Z\x02\x02\u0102\u0103\x07B\x02\x02\u0103\u0116\x03\x02\x02\x02\u0104" +
		"\u0105\x07\x03\x02\x02\u0105\u0106\x07=\x02\x02\u0106\u0107\x05|?\x02" +
		"\u0107\u0108\x07>\x02\x02\u0108\u0109\x07A\x02\x02\u0109\u010A\x05\x86" +
		"D\x02\u010A\u010B\x07B\x02\x02\u010B\u0116\x03\x02\x02\x02\u010C\u010D" +
		"\x07\x03\x02\x02\u010D\u010E\x07=\x02\x02\u010E\u010F\x05|?\x02\u010F" +
		"\u0110\x07>\x02\x02\u0110\u0111\x07A\x02\x02\u0111\u0112\x05\x86D\x02" +
		"\u0112\u0113\x07Z\x02\x02\u0113\u0114\x07B\x02\x02\u0114\u0116\x03\x02" +
		"\x02\x02\u0115\xF3\x03\x02\x02\x02\u0115\xF5\x03\x02\x02\x02\u0115\xFC" +
		"\x03\x02\x02\x02\u0115\u0104\x03\x02\x02\x02\u0115\u010C\x03\x02\x02\x02" +
		"\u0116\u012E\x03\x02\x02\x02\u0117\u0118\f\f\x02\x02\u0118\u0119\x07?" +
		"\x02\x02\u0119\u011A\x050\x19\x02\u011A\u011B\x07@\x02\x02\u011B\u012D" +
		"\x03\x02\x02\x02\u011C\u011D\f\v\x02\x02\u011D\u011F\x07=\x02\x02\u011E" +
		"\u0120\x05\x0E\b\x02\u011F\u011E\x03\x02\x02\x02\u011F\u0120\x03\x02\x02" +
		"\x02\u0120\u0121\x03\x02\x02\x02\u0121\u012D\x07>\x02\x02\u0122\u0123" +
		"\f\n\x02\x02\u0123\u0124\x07i\x02\x02\u0124\u012D\x07k\x02\x02\u0125\u0126" +
		"\f\t\x02\x02\u0126\u0127\x07h\x02\x02\u0127\u012D\x07k\x02\x02\u0128\u0129" +
		"\f\b\x02\x02\u0129\u012D\x07J\x02\x02\u012A\u012B\f\x07\x02\x02\u012B" +
		"\u012D\x07L\x02\x02\u012C\u0117\x03\x02\x02\x02\u012C\u011C\x03\x02\x02" +
		"\x02\u012C\u0122\x03\x02\x02\x02\u012C\u0125\x03\x02\x02\x02\u012C\u0128" +
		"\x03\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012D\u0130\x03\x02\x02\x02" +
		"\u012E\u012C\x03\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F\r\x03\x02" +
		"\x02\x02\u0130\u012E\x03\x02\x02\x02\u0131\u0132\b\b\x01\x02\u0132\u0133" +
		"\x05,\x17\x02\u0133\u0139\x03\x02\x02\x02\u0134\u0135\f\x03\x02\x02\u0135" +
		"\u0136\x07Z\x02\x02\u0136\u0138\x05,\x17\x02\u0137\u0134\x03\x02\x02\x02" +
		"\u0138\u013B\x03\x02\x02\x02\u0139\u0137\x03\x02\x02\x02\u0139\u013A\x03" +
		"\x02\x02\x02\u013A\x0F\x03\x02\x02\x02\u013B\u0139\x03\x02\x02\x02\u013C" +
		"\u0153\x05\f\x07\x02\u013D\u013E\x07J\x02\x02\u013E\u0153\x05\x10\t\x02" +
		"\u013F\u0140\x07L\x02\x02\u0140\u0153\x05\x10\t\x02\u0141\u0142\x05\x12" +
		"\n\x02\u0142\u0143\x05\x14\v\x02\u0143\u0153\x03\x02\x02\x02\u0144\u0145" +
		"\x07)\x02\x02\u0145\u0153\x05\x10\t\x02\u0146\u0147\x07)\x02\x02\u0147" +
		"\u0148\x07=\x02\x02\u0148\u0149\x05|?\x02\u0149\u014A\x07>\x02\x02\u014A" +
		"\u0153\x03\x02\x02\x02\u014B\u014C\x074\x02\x02\u014C\u014D\x07=\x02\x02" +
		"\u014D\u014E\x05|?\x02\u014E\u014F\x07>\x02\x02\u014F\u0153\x03\x02\x02" +
		"\x02\u0150\u0151\x07R\x02\x02\u0151\u0153\x07k\x02\x02\u0152\u013C\x03" +
		"\x02\x02\x02\u0152\u013D\x03\x02\x02\x02\u0152\u013F\x03\x02\x02\x02\u0152" +
		"\u0141\x03\x02\x02\x02\u0152\u0144\x03\x02\x02\x02\u0152\u0146\x03\x02" +
		"\x02\x02\u0152\u014B\x03\x02\x02\x02\u0152\u0150\x03\x02\x02\x02\u0153" +
		"\x11\x03\x02\x02\x02\u0154\u0155\t\x02\x02\x02\u0155\x13\x03\x02\x02\x02" +
		"\u0156\u0157\x07=\x02\x02\u0157\u0158\x05|?\x02\u0158\u0159\x07>\x02\x02" +
		"\u0159\u015A\x05\x14\v\x02\u015A\u0164\x03\x02\x02\x02\u015B\u015C\x07" +
		"\x03\x02\x02\u015C\u015D\x07=\x02\x02\u015D\u015E\x05|?\x02\u015E\u015F" +
		"\x07>\x02\x02\u015F\u0160\x05\x14\v\x02\u0160\u0164\x03\x02\x02\x02\u0161" +
		"\u0164\x05\x10\t\x02\u0162\u0164\x07m\x02\x02\u0163\u0156\x03\x02\x02" +
		"\x02\u0163\u015B\x03\x02\x02\x02\u0163\u0161\x03\x02\x02\x02\u0163\u0162" +
		"\x03\x02\x02\x02\u0164\x15\x03\x02\x02\x02\u0165\u0166\b\f\x01\x02\u0166" +
		"\u0167\x05\x14\v\x02\u0167\u0173\x03\x02\x02\x02\u0168\u0169\f\x05\x02" +
		"\x02\u0169\u016A\x07M\x02\x02\u016A\u0172\x05\x14\v\x02\u016B\u016C\f" +
		"\x04\x02\x02\u016C\u016D\x07N\x02\x02\u016D\u0172\x05\x14\v\x02\u016E" +
		"\u016F\f\x03\x02\x02\u016F\u0170\x07O\x02\x02\u0170\u0172\x05\x14\v\x02" +
		"\u0171\u0168\x03\x02\x02\x02\u0171\u016B\x03\x02\x02\x02\u0171\u016E\x03" +
		"\x02\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\u0172\u0175\x03\x02\x02\x02\u0173\u0171\x03\x02\x02\x02\u0173\u0174\x03" +
		"\x02\x02\x02\u0174\x17\x03\x02\x02\x02\u0175\u0173\x03\x02\x02\x02\u0176" +
		"\u0177\b\r\x01\x02\u0177\u0178\x05\x16\f\x02\u0178\u0181\x03\x02\x02\x02" +
		"\u0179\u017A\f\x04\x02\x02\u017A\u017B\x07I\x02\x02\u017B\u0180\x05\x16" +
		"\f\x02\u017C\u017D\f\x03\x02\x02\u017D\u017E\x07K\x02\x02\u017E\u0180" +
		"\x05\x16\f\x02\u017F\u0179\x03\x02\x02\x02\u017F\u017C\x03\x02\x02\x02" +
		"\u0180\u0183\x03\x02\x02\x02\u0181\u017F\x03\x02\x02\x02\u0181\u0182\x03" +
		"\x02\x02\x02\u0182\x19\x03\x02\x02\x02\u0183\u0181\x03\x02\x02\x02\u0184" +
		"\u0185\b\x0E\x01\x02\u0185\u0186\x05\x18\r\x02\u0186\u018F\x03\x02\x02" +
		"\x02\u0187\u0188\f\x04\x02\x02\u0188\u0189\x07G\x02\x02\u0189\u018E\x05" +
		"\x18\r\x02\u018A\u018B\f\x03\x02\x02\u018B\u018C\x07H\x02\x02\u018C\u018E" +
		"\x05\x18\r\x02\u018D\u0187\x03\x02\x02\x02\u018D\u018A\x03\x02\x02\x02" +
		"\u018E\u0191\x03\x02\x02\x02\u018F\u018D\x03\x02\x02\x02\u018F\u0190\x03" +
		"\x02\x02\x02\u0190\x1B\x03\x02\x02\x02\u0191\u018F\x03\x02\x02\x02\u0192" +
		"\u0193\b\x0F\x01\x02\u0193\u0194\x05\x1A\x0E\x02\u0194\u01A3\x03\x02\x02" +
		"\x02\u0195\u0196\f\x06\x02\x02\u0196\u0197\x07C\x02\x02\u0197\u01A2\x05" +
		"\x1A\x0E\x02\u0198\u0199\f\x05\x02\x02\u0199\u019A\x07E\x02\x02\u019A" +
		"\u01A2\x05\x1A\x0E\x02\u019B\u019C\f\x04\x02\x02\u019C\u019D\x07D\x02" +
		"\x02\u019D\u01A2\x05\x1A\x0E\x02\u019E\u019F\f\x03\x02\x02\u019F\u01A0" +
		"\x07F\x02\x02\u01A0\u01A2\x05\x1A\x0E\x02\u01A1\u0195\x03\x02\x02\x02" +
		"\u01A1\u0198\x03\x02\x02\x02\u01A1\u019B\x03\x02\x02\x02\u01A1\u019E\x03" +
		"\x02\x02\x02\u01A2\u01A5\x03\x02\x02\x02\u01A3\u01A1\x03\x02\x02\x02\u01A3" +
		"\u01A4\x03\x02\x02\x02\u01A4\x1D\x03\x02\x02\x02\u01A5\u01A3\x03\x02\x02" +
		"\x02\u01A6\u01A7\b\x10\x01\x02\u01A7\u01A8\x05\x1C\x0F\x02\u01A8\u01B1" +
		"\x03\x02\x02\x02\u01A9\u01AA\f\x04\x02\x02\u01AA\u01AB\x07f\x02\x02\u01AB" +
		"\u01B0\x05\x1C\x0F\x02\u01AC\u01AD\f\x03\x02\x02\u01AD\u01AE\x07g\x02" +
		"\x02\u01AE\u01B0\x05\x1C\x0F\x02\u01AF\u01A9\x03\x02\x02\x02\u01AF\u01AC" +
		"\x03\x02\x02\x02\u01B0\u01B3\x03\x02\x02\x02\u01B1\u01AF\x03\x02\x02\x02" +
		"\u01B1\u01B2\x03\x02\x02\x02\u01B2\x1F\x03\x02\x02\x02\u01B3\u01B1\x03" +
		"\x02\x02\x02\u01B4\u01B5\b\x11\x01\x02\u01B5\u01B6\x05\x1E\x10\x02\u01B6" +
		"\u01BC\x03\x02\x02\x02\u01B7\u01B8\f\x03\x02\x02\u01B8\u01B9\x07P\x02" +
		"\x02\u01B9\u01BB\x05\x1E\x10\x02\u01BA\u01B7\x03\x02\x02\x02\u01BB\u01BE" +
		"\x03\x02\x02\x02\u01BC\u01BA\x03\x02\x02\x02\u01BC\u01BD\x03\x02\x02\x02" +
		"\u01BD!\x03\x02\x02\x02\u01BE\u01BC\x03\x02\x02\x02\u01BF\u01C0\b\x12" +
		"\x01\x02\u01C0\u01C1\x05 \x11\x02\u01C1\u01C7\x03\x02\x02\x02\u01C2\u01C3" +
		"\f\x03\x02\x02\u01C3\u01C4\x07T\x02\x02\u01C4\u01C6\x05 \x11\x02\u01C5" +
		"\u01C2\x03\x02\x02\x02\u01C6\u01C9\x03\x02\x02\x02\u01C7\u01C5\x03\x02" +
		"\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8#\x03\x02\x02\x02\u01C9\u01C7" +
		"\x03\x02\x02\x02\u01CA\u01CB\b\x13\x01\x02\u01CB\u01CC\x05\"\x12\x02\u01CC" +
		"\u01D2\x03\x02\x02\x02\u01CD\u01CE\f\x03\x02\x02\u01CE\u01CF\x07Q\x02" +
		"\x02\u01CF\u01D1\x05\"\x12\x02\u01D0\u01CD\x03\x02\x02\x02\u01D1\u01D4" +
		"\x03\x02\x02\x02\u01D2\u01D0\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02" +
		"\u01D3%\x03\x02\x02\x02\u01D4\u01D2\x03\x02\x02\x02\u01D5\u01D6\b\x14" +
		"\x01\x02\u01D6\u01D7\x05$\x13\x02\u01D7\u01DD\x03\x02\x02\x02\u01D8\u01D9" +
		"\f\x03\x02\x02\u01D9\u01DA\x07R\x02\x02\u01DA\u01DC\x05$\x13\x02\u01DB" +
		"\u01D8\x03\x02\x02\x02\u01DC\u01DF\x03\x02\x02\x02\u01DD\u01DB\x03\x02" +
		"\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE\'\x03\x02\x02\x02\u01DF\u01DD" +
		"\x03\x02\x02\x02\u01E0\u01E1\b\x15\x01\x02\u01E1\u01E2\x05&\x14\x02\u01E2" +
		"\u01E8\x03\x02\x02\x02\u01E3\u01E4\f\x03\x02\x02\u01E4\u01E5\x07S\x02" +
		"\x02\u01E5\u01E7\x05&\x14\x02\u01E6\u01E3\x03\x02\x02\x02\u01E7\u01EA" +
		"\x03\x02\x02\x02\u01E8\u01E6\x03\x02\x02\x02\u01E8\u01E9\x03\x02\x02\x02" +
		"\u01E9)\x03\x02\x02\x02\u01EA\u01E8\x03\x02\x02\x02\u01EB\u01F1\x05(\x15" +
		"\x02\u01EC\u01ED\x07W\x02\x02\u01ED\u01EE\x050\x19\x02\u01EE\u01EF\x07" +
		"X\x02\x02\u01EF\u01F0\x05*\x16\x02\u01F0\u01F2\x03\x02\x02\x02\u01F1\u01EC" +
		"\x03\x02\x02\x02\u01F1\u01F2\x03\x02\x02\x02\u01F2+\x03\x02\x02\x02\u01F3" +
		"\u01FA\x05*\x16\x02\u01F4\u01F5\x05\x10\t\x02\u01F5\u01F6\x05.\x18\x02" +
		"\u01F6\u01F7\x05,\x17\x02\u01F7\u01FA\x03\x02\x02\x02\u01F8\u01FA\x07" +
		"m\x02\x02\u01F9\u01F3\x03\x02\x02\x02\u01F9\u01F4\x03\x02\x02\x02\u01F9" +
		"\u01F8\x03\x02\x02\x02\u01FA-\x03\x02\x02\x02\u01FB\u01FC\t\x03\x02\x02" +
		"\u01FC/\x03\x02\x02\x02\u01FD\u01FE\b\x19\x01\x02\u01FE\u01FF\x05,\x17" +
		"\x02\u01FF\u0205\x03\x02\x02\x02\u0200\u0201\f\x03\x02\x02\u0201\u0202" +
		"\x07Z\x02\x02\u0202\u0204\x05,\x17\x02\u0203\u0200\x03\x02\x02\x02\u0204" +
		"\u0207\x03\x02\x02\x02\u0205\u0203\x03\x02\x02\x02\u0205\u0206\x03\x02" +
		"\x02\x02\u02061\x03\x02\x02\x02\u0207\u0205\x03\x02\x02\x02\u0208\u0209" +
		"\x05*\x16\x02\u02093\x03\x02\x02\x02\u020A\u020B\x056\x1C\x02\u020B\u020C" +
		"\x05<\x1F\x02\u020C\u020D\x07Y\x02\x02\u020D\u0213\x03\x02\x02\x02\u020E" +
		"\u020F\x056\x1C\x02\u020F\u0210\x07Y\x02\x02\u0210\u0213\x03\x02\x02\x02" +
		"\u0211\u0213\x05\x8EH\x02\u0212\u020A\x03\x02\x02\x02\u0212\u020E\x03" +
		"\x02\x02\x02\u0212\u0211\x03\x02\x02\x02\u02135\x03\x02\x02\x02\u0214" +
		"\u0216\x05:\x1E\x02\u0215\u0214\x03\x02\x02\x02\u0216\u0217\x03\x02\x02" +
		"\x02\u0217\u0215\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02\u02187\x03" +
		"\x02\x02\x02\u0219\u021B\x05:\x1E\x02\u021A\u0219\x03\x02\x02\x02\u021B" +
		"\u021C\x03\x02\x02\x02\u021C\u021A\x03\x02\x02\x02\u021C\u021D\x03\x02" +
		"\x02\x02\u021D9\x03\x02\x02\x02\u021E\u0224\x05@!\x02\u021F\u0224\x05" +
		"B\"\x02\u0220\u0224\x05\\/\x02\u0221\u0224\x05^0\x02\u0222\u0224\x05`" +
		"1\x02\u0223\u021E\x03\x02\x02\x02\u0223\u021F\x03\x02\x02\x02\u0223\u0220" +
		"\x03\x02\x02\x02\u0223\u0221\x03\x02\x02\x02\u0223\u0222\x03\x02\x02\x02" +
		"\u0224;\x03\x02\x02\x02\u0225\u0226\b\x1F\x01\x02\u0226\u0227\x05> \x02" +
		"\u0227\u022D\x03\x02\x02\x02\u0228\u0229\f\x03\x02\x02\u0229\u022A\x07" +
		"Z\x02\x02\u022A\u022C\x05> \x02\u022B\u0228\x03\x02\x02\x02\u022C\u022F" +
		"\x03\x02\x02\x02\u022D\u022B\x03\x02\x02\x02\u022D\u022E\x03\x02\x02\x02" +
		"\u022E=\x03\x02\x02\x02\u022F\u022D\x03\x02\x02\x02\u0230\u0236\x05b2" +
		"\x02\u0231\u0232\x05b2\x02\u0232\u0233\x07[\x02\x02\u0233\u0234\x05\x84" +
		"C\x02\u0234\u0236\x03\x02\x02\x02\u0235\u0230\x03\x02\x02\x02\u0235\u0231" +
		"\x03\x02\x02\x02\u0236?\x03\x02\x02\x02\u0237\u0238\t\x04\x02\x02\u0238" +
		"A\x03\x02\x02\x02\u0239\u023A\b\"\x01\x02\u023A\u0249\t\x05\x02\x02\u023B" +
		"\u023C\x07\x03\x02\x02\u023C\u023D\x07=\x02\x02\u023D\u023E\t\x06\x02" +
		"\x02\u023E\u0249\x07>\x02\x02\u023F\u0249\x05Z.\x02\u0240\u0249\x05D#" +
		"\x02\u0241\u0249\x05R*\x02\u0242\u0249\x05\x82B\x02\u0243\u0244\x07\t" +
		"\x02\x02\u0244\u0245\x07=\x02\x02\u0245\u0246\x052\x1A\x02\u0246\u0247" +
		"\x07>\x02\x02\u0247\u0249\x03\x02\x02\x02\u0248\u0239\x03\x02\x02\x02" +
		"\u0248\u023B\x03\x02\x02\x02\u0248\u023F\x03\x02\x02\x02\u0248\u0240\x03" +
		"\x02\x02\x02\u0248\u0241\x03\x02\x02\x02\u0248\u0242\x03\x02\x02\x02\u0248" +
		"\u0243\x03\x02\x02\x02\u0249\u024E\x03\x02\x02\x02\u024A\u024B\f\x03\x02" +
		"\x02\u024B\u024D\x05p9\x02\u024C\u024A\x03\x02\x02\x02\u024D\u0250\x03" +
		"\x02\x02\x02\u024E\u024C\x03\x02\x02\x02\u024E\u024F\x03\x02\x02\x02\u024F" +
		"C\x03\x02\x02\x02\u0250\u024E\x03\x02\x02\x02\u0251\u0253\x05F$\x02\u0252" +
		"\u0254\x07k\x02\x02\u0253\u0252\x03\x02\x02\x02\u0253\u0254\x03\x02\x02" +
		"\x02\u0254\u0255\x03\x02\x02\x02\u0255\u0256\x07A\x02\x02\u0256\u0257" +
		"\x05H%\x02\u0257\u0258\x07B\x02\x02\u0258\u025D\x03\x02\x02\x02\u0259" +
		"\u025A\x05F$\x02\u025A\u025B\x07k\x02\x02\u025B\u025D\x03\x02\x02\x02" +
		"\u025C\u0251\x03\x02\x02\x02\u025C\u0259\x03\x02\x02\x02\u025DE\x03\x02" +
		"\x02\x02\u025E\u025F\t\x07\x02\x02\u025FG\x03\x02\x02\x02\u0260\u0261" +
		"\b%\x01\x02\u0261\u0262\x05J&\x02\u0262\u0267\x03\x02\x02\x02\u0263\u0264" +
		"\f\x03\x02\x02\u0264\u0266\x05J&\x02\u0265\u0263\x03\x02\x02\x02\u0266" +
		"\u0269\x03\x02\x02\x02\u0267\u0265\x03\x02\x02\x02\u0267\u0268\x03\x02" +
		"\x02\x02\u0268I\x03\x02\x02\x02\u0269\u0267\x03\x02\x02\x02\u026A\u026C" +
		"\x05L\'\x02\u026B\u026D\x05N(\x02\u026C\u026B\x03\x02\x02\x02\u026C\u026D" +
		"\x03\x02\x02\x02\u026D\u026E\x03\x02\x02\x02\u026E\u026F\x07Y\x02\x02" +
		"\u026F\u0272\x03\x02\x02\x02\u0270\u0272\x05\x8EH\x02\u0271\u026A\x03" +
		"\x02\x02\x02\u0271\u0270\x03\x02\x02\x02\u0272K\x03\x02\x02\x02\u0273" +
		"\u0275\x05B\"\x02\u0274\u0276\x05L\'\x02\u0275\u0274\x03\x02\x02\x02\u0275" +
		"\u0276\x03\x02\x02\x02\u0276\u027C\x03\x02\x02\x02\u0277\u0279\x05\\/" +
		"\x02\u0278\u027A\x05L\'\x02\u0279\u0278\x03\x02\x02\x02\u0279\u027A\x03" +
		"\x02\x02\x02\u027A\u027C\x03\x02\x02\x02\u027B\u0273\x03\x02\x02\x02\u027B" +
		"\u0277\x03\x02\x02\x02\u027CM\x03\x02\x02\x02\u027D\u027E\b(\x01\x02\u027E" +
		"\u027F\x05P)\x02\u027F\u0285\x03\x02\x02\x02\u0280\u0281\f\x03\x02\x02" +
		"\u0281\u0282\x07Z\x02\x02\u0282\u0284\x05P)\x02\u0283\u0280\x03\x02\x02" +
		"\x02\u0284\u0287\x03\x02\x02\x02\u0285\u0283\x03\x02\x02\x02\u0285\u0286" +
		"\x03\x02\x02\x02\u0286O\x03\x02\x02\x02\u0287\u0285\x03\x02\x02\x02\u0288" +
		"\u028F\x05b2\x02\u0289\u028B\x05b2\x02\u028A\u0289\x03\x02\x02\x02\u028A" +
		"\u028B\x03\x02\x02\x02\u028B\u028C\x03\x02\x02\x02\u028C\u028D\x07X\x02" +
		"\x02\u028D\u028F\x052\x1A\x02\u028E\u0288\x03\x02\x02\x02\u028E\u028A" +
		"\x03\x02\x02\x02\u028FQ\x03\x02\x02\x02\u0290\u0292\x07\x1B\x02\x02\u0291" +
		"\u0293\x07k\x02\x02\u0292\u0291\x03\x02\x02\x02\u0292\u0293\x03\x02\x02" +
		"\x02\u0293\u0294\x03\x02\x02\x02\u0294\u0295\x07A\x02\x02\u0295\u0296" +
		"\x05T+\x02\u0296\u0297\x07B\x02\x02\u0297\u02A4\x03\x02\x02\x02\u0298" +
		"\u029A\x07\x1B\x02\x02\u0299\u029B\x07k\x02\x02\u029A\u0299\x03\x02\x02" +
		"\x02\u029A\u029B\x03\x02\x02\x02\u029B\u029C\x03\x02\x02\x02\u029C\u029D" +
		"\x07A\x02\x02\u029D\u029E\x05T+\x02\u029E\u029F\x07Z\x02\x02\u029F\u02A0" +
		"\x07B\x02\x02\u02A0\u02A4\x03\x02\x02\x02\u02A1\u02A2\x07\x1B\x02\x02" +
		"\u02A2\u02A4\x07k\x02\x02\u02A3\u0290\x03\x02\x02\x02\u02A3\u0298\x03" +
		"\x02\x02\x02\u02A3\u02A1\x03\x02\x02\x02\u02A4S\x03\x02\x02\x02\u02A5" +
		"\u02A6\b+\x01\x02\u02A6\u02A7\x05V,\x02\u02A7\u02AD\x03\x02\x02\x02\u02A8" +
		"\u02A9\f\x03\x02\x02\u02A9\u02AA\x07Z\x02\x02\u02AA\u02AC\x05V,\x02\u02AB" +
		"\u02A8\x03\x02\x02\x02\u02AC\u02AF\x03\x02\x02\x02\u02AD\u02AB\x03\x02" +
		"\x02\x02\u02AD\u02AE\x03\x02\x02\x02\u02AEU\x03\x02\x02\x02\u02AF\u02AD" +
		"\x03\x02\x02\x02\u02B0\u02B6\x05X-\x02\u02B1\u02B2\x05X-\x02\u02B2\u02B3" +
		"\x07[\x02\x02\u02B3\u02B4\x052\x1A\x02\u02B4\u02B6\x03\x02\x02\x02\u02B5" +
		"\u02B0\x03\x02\x02\x02\u02B5\u02B1\x03\x02\x02\x02\u02B6W\x03\x02\x02" +
		"\x02\u02B7\u02B8\x07k\x02\x02\u02B8Y\x03\x02\x02\x02\u02B9\u02BA\x075" +
		"\x02\x02\u02BA\u02BB\x07=\x02\x02\u02BB\u02BC\x05|?\x02\u02BC\u02BD\x07" +
		">\x02\x02\u02BD[\x03\x02\x02\x02\u02BE\u02BF\t\b\x02\x02\u02BF]\x03\x02" +
		"\x02\x02\u02C0\u02C7\t\t\x02\x02\u02C1\u02C7\x05h5\x02\u02C2\u02C3\x07" +
		"\f\x02\x02\u02C3\u02C4\x07=\x02\x02\u02C4\u02C5\x07k\x02\x02\u02C5\u02C7" +
		"\x07>\x02\x02\u02C6\u02C0\x03\x02\x02\x02\u02C6\u02C1\x03\x02\x02\x02" +
		"\u02C6\u02C2\x03\x02\x02\x02\u02C7_\x03\x02\x02\x02\u02C8\u02C9\x073\x02" +
		"\x02\u02C9\u02CA\x07=\x02\x02\u02CA\u02CB\x05|?\x02\u02CB\u02CC\x07>\x02" +
		"\x02\u02CC\u02D3\x03\x02\x02\x02\u02CD\u02CE\x073\x02\x02\u02CE\u02CF" +
		"\x07=\x02\x02\u02CF\u02D0\x052\x1A\x02\u02D0\u02D1\x07>\x02\x02\u02D1" +
		"\u02D3\x03\x02\x02\x02\u02D2\u02C8\x03\x02\x02\x02\u02D2\u02CD\x03\x02" +
		"\x02\x02\u02D3a\x03\x02\x02\x02\u02D4\u02D6\x05p9\x02\u02D5\u02D4\x03" +
		"\x02\x02\x02\u02D5\u02D6\x03\x02\x02\x02\u02D6\u02D7\x03\x02\x02\x02\u02D7" +
		"\u02DB\x05d3\x02\u02D8\u02DA\x05f4\x02\u02D9\u02D8\x03\x02\x02\x02\u02DA" +
		"\u02DD\x03\x02\x02\x02\u02DB\u02D9\x03\x02\x02\x02\u02DB\u02DC\x03\x02" +
		"\x02\x02\u02DCc\x03\x02\x02\x02\u02DD\u02DB\x03\x02\x02\x02\u02DE\u02DF" +
		"\b3\x01\x02\u02DF\u02F0\x07k\x02\x02\u02E0\u02E1\x07=\x02\x02\u02E1\u02E2" +
		"\x05b2\x02\u02E2\u02E3\x07>\x02\x02\u02E3\u02F0\x03\x02\x02\x02\u02E4" +
		"\u02E5\x07k\x02\x02\u02E5\u02E6\x07X\x02\x02\u02E6\u02F0\x07m\x02\x02" +
		"\u02E7\u02E9\x07=\x02\x02\u02E8\u02EA\x05B\"\x02\u02E9\u02E8\x03\x02\x02" +
		"\x02\u02E9\u02EA\x03\x02\x02\x02\u02EA\u02EB\x03\x02\x02\x02\u02EB\u02EC" +
		"\x05p9\x02\u02EC\u02ED\x05d3\x02\u02ED\u02EE\x07>\x02\x02\u02EE\u02F0" +
		"\x03\x02\x02\x02\u02EF\u02DE\x03\x02\x02\x02\u02EF\u02E0\x03\x02\x02\x02" +
		"\u02EF\u02E4\x03\x02\x02\x02\u02EF\u02E7\x03\x02\x02\x02\u02F0\u031E\x03" +
		"\x02\x02\x02\u02F1\u02F2\f\n\x02\x02\u02F2\u02F4\x07?\x02\x02\u02F3\u02F5" +
		"\x05r:\x02\u02F4\u02F3\x03\x02\x02\x02\u02F4\u02F5\x03\x02\x02\x02\u02F5" +
		"\u02F7\x03\x02\x02\x02\u02F6\u02F8\x05,\x17\x02\u02F7\u02F6\x03\x02\x02" +
		"\x02\u02F7\u02F8\x03\x02\x02\x02\u02F8\u02F9\x03\x02\x02\x02\u02F9\u031D" +
		"\x07@\x02\x02\u02FA\u02FB\f\t\x02\x02\u02FB\u02FC\x07?\x02\x02\u02FC\u02FE" +
		"\x07*\x02\x02\u02FD\u02FF\x05r:\x02\u02FE\u02FD\x03\x02\x02\x02\u02FE" +
		"\u02FF\x03\x02\x02\x02\u02FF\u0300\x03\x02\x02\x02\u0300\u0301\x05,\x17" +
		"\x02\u0301\u0302\x07@\x02\x02\u0302\u031D\x03\x02\x02\x02\u0303\u0304" +
		"\f\b\x02\x02\u0304\u0305\x07?\x02\x02\u0305\u0306\x05r:\x02\u0306\u0307" +
		"\x07*\x02\x02\u0307\u0308\x05,\x17\x02\u0308\u0309\x07@\x02\x02\u0309" +
		"\u031D\x03\x02\x02\x02\u030A\u030B\f\x07\x02\x02\u030B\u030D\x07?\x02" +
		"\x02\u030C\u030E\x05r:\x02\u030D\u030C\x03\x02\x02\x02\u030D\u030E\x03" +
		"\x02\x02\x02\u030E\u030F\x03\x02\x02\x02\u030F\u0310\x07M\x02\x02\u0310" +
		"\u031D\x07@\x02\x02\u0311\u0312\f\x06\x02\x02\u0312\u0313\x07=\x02\x02" +
		"\u0313\u0314\x05t;\x02\u0314\u0315\x07>\x02\x02\u0315\u031D\x03\x02\x02" +
		"\x02\u0316\u0317\f\x05\x02\x02\u0317\u0319\x07=\x02\x02\u0318\u031A\x05" +
		"z>\x02\u0319\u0318\x03\x02\x02\x02\u0319\u031A\x03\x02\x02\x02\u031A\u031B" +
		"\x03\x02\x02\x02\u031B\u031D\x07>\x02\x02\u031C\u02F1\x03\x02\x02\x02" +
		"\u031C\u02FA\x03\x02\x02\x02\u031C\u0303\x03\x02\x02\x02\u031C\u030A\x03" +
		"\x02\x02\x02\u031C\u0311\x03\x02\x02\x02\u031C\u0316\x03\x02\x02\x02\u031D" +
		"\u0320\x03\x02\x02\x02\u031E\u031C\x03\x02\x02\x02\u031E\u031F\x03\x02" +
		"\x02\x02\u031Fe\x03\x02\x02\x02\u0320\u031E\x03\x02\x02\x02\u0321\u0322" +
		"\x07\r\x02\x02\u0322\u0324\x07=\x02\x02\u0323\u0325\x07n\x02\x02\u0324" +
		"\u0323\x03\x02\x02\x02\u0325\u0326\x03\x02\x02\x02\u0326\u0324\x03\x02" +
		"\x02\x02\u0326\u0327\x03\x02\x02\x02\u0327\u0328\x03\x02\x02\x02\u0328" +
		"\u032B\x07>\x02\x02\u0329\u032B\x05h5\x02\u032A\u0321\x03\x02\x02\x02" +
		"\u032A\u0329\x03\x02\x02\x02\u032Bg\x03\x02\x02\x02\u032C\u032D\x07\x0E" +
		"\x02\x02\u032D\u032E\x07=\x02\x02\u032E\u032F\x07=\x02\x02\u032F\u0330" +
		"\x05j6\x02\u0330\u0331\x07>\x02\x02\u0331\u0332\x07>\x02\x02\u0332i\x03" +
		"\x02\x02\x02\u0333\u0338\x05l7\x02\u0334\u0335\x07Z\x02\x02\u0335\u0337" +
		"\x05l7\x02\u0336\u0334\x03\x02\x02\x02\u0337\u033A\x03\x02\x02\x02\u0338" +
		"\u0336\x03\x02\x02\x02\u0338\u0339\x03\x02\x02\x02\u0339\u033D\x03\x02" +
		"\x02\x02\u033A\u0338\x03\x02\x02\x02\u033B\u033D\x03\x02\x02\x02\u033C" +
		"\u0333\x03\x02\x02\x02\u033C\u033B\x03\x02\x02\x02\u033Dk\x03\x02\x02" +
		"\x02\u033E\u0344\n\n\x02\x02\u033F\u0341\x07=\x02\x02\u0340\u0342\x05" +
		"\x0E\b\x02\u0341\u0340\x03\x02\x02\x02\u0341\u0342\x03\x02\x02\x02\u0342" +
		"\u0343\x03\x02\x02\x02\u0343\u0345\x07>\x02\x02\u0344\u033F\x03\x02\x02" +
		"\x02\u0344\u0345\x03\x02\x02\x02\u0345\u0348\x03\x02\x02\x02\u0346\u0348" +
		"\x03\x02\x02\x02\u0347\u033E\x03\x02\x02\x02\u0347\u0346\x03\x02\x02\x02" +
		"\u0348m\x03\x02\x02\x02\u0349\u034F\n\v\x02\x02\u034A\u034B\x07=\x02\x02" +
		"\u034B\u034C\x05n8\x02\u034C\u034D\x07>\x02\x02\u034D\u034F\x03\x02\x02" +
		"\x02\u034E\u0349\x03\x02\x02\x02\u034E\u034A\x03\x02\x02\x02\u034F\u0352" +
		"\x03\x02\x02\x02\u0350\u034E\x03\x02\x02\x02\u0350\u0351\x03\x02\x02\x02" +
		"\u0351o\x03\x02\x02\x02\u0352\u0350\x03\x02\x02\x02\u0353\u0355\x07M\x02" +
		"\x02\u0354\u0356\x05r:\x02\u0355\u0354\x03\x02\x02\x02\u0355\u0356\x03" +
		"\x02\x02\x02\u0356\u0366\x03\x02\x02\x02\u0357\u0359\x07M\x02\x02\u0358" +
		"\u035A\x05r:\x02\u0359\u0358\x03\x02\x02\x02\u0359\u035A\x03\x02\x02\x02" +
		"\u035A\u035B\x03\x02\x02\x02\u035B\u0366\x05p9\x02\u035C\u035E\x07T\x02" +
		"\x02\u035D\u035F\x05r:\x02\u035E\u035D\x03\x02\x02\x02\u035E\u035F\x03" +
		"\x02\x02\x02\u035F\u0366\x03\x02\x02\x02\u0360\u0362\x07T\x02\x02\u0361" +
		"\u0363\x05r:\x02\u0362\u0361\x03\x02\x02\x02\u0362\u0363\x03\x02\x02\x02" +
		"\u0363\u0364\x03\x02\x02\x02\u0364\u0366\x05p9\x02\u0365\u0353\x03\x02" +
		"\x02\x02\u0365\u0357\x03\x02\x02\x02\u0365\u035C\x03\x02\x02\x02\u0365" +
		"\u0360\x03\x02\x02\x02\u0366q\x03\x02\x02\x02\u0367\u0368\b:\x01\x02\u0368" +
		"\u0369\x05\\/\x02\u0369\u036E\x03\x02\x02\x02\u036A\u036B\f\x03\x02\x02" +
		"\u036B\u036D\x05\\/\x02\u036C\u036A\x03\x02\x02\x02\u036D\u0370\x03\x02" +
		"\x02\x02\u036E\u036C\x03\x02\x02\x02\u036E\u036F\x03\x02\x02\x02\u036F" +
		"s\x03\x02\x02\x02\u0370\u036E\x03\x02\x02\x02\u0371\u0377\x05v<\x02\u0372" +
		"\u0373\x05v<\x02\u0373\u0374\x07Z\x02\x02\u0374\u0375\x07j\x02\x02\u0375" +
		"\u0377\x03\x02\x02\x02\u0376\u0371\x03\x02\x02\x02\u0376\u0372\x03\x02" +
		"\x02\x02\u0377u\x03\x02\x02\x02\u0378\u0379\b<\x01\x02\u0379\u037A\x05" +
		"x=\x02\u037A\u0380\x03\x02\x02\x02\u037B\u037C\f\x03\x02\x02\u037C\u037D" +
		"\x07Z\x02\x02\u037D\u037F\x05x=\x02\u037E\u037B\x03\x02\x02\x02\u037F" +
		"\u0382\x03\x02\x02\x02\u0380\u037E\x03\x02\x02\x02\u0380\u0381\x03\x02" +
		"\x02\x02\u0381w\x03\x02\x02\x02\u0382\u0380\x03\x02\x02\x02\u0383\u0384" +
		"\x056\x1C\x02\u0384\u0385\x05b2\x02\u0385\u038B\x03\x02\x02\x02\u0386" +
		"\u0388\x058\x1D\x02\u0387\u0389\x05~@\x02\u0388\u0387\x03\x02\x02\x02" +
		"\u0388\u0389\x03\x02\x02\x02\u0389\u038B\x03\x02\x02\x02\u038A\u0383\x03" +
		"\x02\x02\x02\u038A\u0386\x03\x02\x02\x02\u038By\x03\x02\x02\x02\u038C" +
		"\u038D\b>\x01\x02\u038D\u038E\x07k\x02\x02\u038E\u0394\x03\x02\x02\x02" +
		"\u038F\u0390\f\x03\x02\x02\u0390\u0391\x07Z\x02\x02\u0391\u0393\x07k\x02" +
		"\x02\u0392\u038F\x03\x02\x02\x02\u0393\u0396\x03\x02\x02\x02\u0394\u0392" +
		"\x03\x02\x02\x02\u0394\u0395\x03\x02\x02\x02\u0395{\x03\x02\x02\x02\u0396" +
		"\u0394\x03\x02\x02\x02\u0397\u0399\x05L\'\x02\u0398\u039A\x05~@\x02\u0399" +
		"\u0398\x03\x02\x02\x02\u0399\u039A\x03\x02\x02\x02\u039A}\x03\x02\x02" +
		"\x02\u039B\u03A7\x05p9\x02\u039C\u039E\x05p9\x02\u039D\u039C\x03\x02\x02" +
		"\x02\u039D\u039E\x03\x02\x02\x02\u039E\u039F\x03\x02\x02\x02\u039F\u03A3" +
		"\x05\x80A\x02\u03A0\u03A2\x05f4\x02\u03A1\u03A0\x03\x02\x02\x02\u03A2" +
		"\u03A5\x03\x02\x02\x02\u03A3\u03A1\x03\x02\x02\x02\u03A3\u03A4\x03\x02" +
		"\x02\x02\u03A4\u03A7\x03\x02\x02\x02\u03A5\u03A3\x03\x02\x02\x02\u03A6" +
		"\u039B\x03\x02\x02\x02\u03A6\u039D\x03\x02\x02\x02\u03A7\x7F\x03\x02\x02" +
		"\x02\u03A8\u03A9\bA\x01\x02\u03A9\u03AA\x07=\x02\x02\u03AA\u03AB\x05~" +
		"@\x02\u03AB\u03AF\x07>\x02\x02\u03AC\u03AE\x05f4\x02\u03AD\u03AC\x03\x02" +
		"\x02\x02\u03AE\u03B1\x03\x02\x02\x02\u03AF\u03AD\x03\x02\x02\x02\u03AF" +
		"\u03B0\x03\x02\x02\x02\u03B0\u03D7\x03\x02\x02\x02\u03B1\u03AF\x03\x02" +
		"\x02\x02\u03B2\u03B4\x07?\x02\x02\u03B3\u03B5\x05r:\x02\u03B4\u03B3\x03" +
		"\x02\x02\x02\u03B4\u03B5\x03\x02\x02\x02\u03B5\u03B7\x03\x02\x02\x02\u03B6" +
		"\u03B8\x05,\x17\x02\u03B7\u03B6\x03\x02\x02\x02\u03B7\u03B8\x03\x02\x02" +
		"\x02\u03B8\u03B9\x03\x02\x02\x02\u03B9\u03D7\x07@\x02\x02\u03BA\u03BB" +
		"\x07?\x02\x02\u03BB\u03BD\x07*\x02\x02\u03BC\u03BE\x05r:\x02\u03BD\u03BC" +
		"\x03\x02\x02\x02\u03BD\u03BE\x03\x02\x02\x02\u03BE\u03BF\x03\x02\x02\x02" +
		"\u03BF\u03C0\x05,\x17\x02\u03C0\u03C1\x07@\x02\x02\u03C1\u03D7\x03\x02" +
		"\x02\x02\u03C2\u03C3\x07?\x02\x02\u03C3\u03C4\x05r:\x02\u03C4\u03C5\x07" +
		"*\x02\x02\u03C5\u03C6\x05,\x17\x02\u03C6\u03C7\x07@\x02\x02\u03C7\u03D7" +
		"\x03\x02\x02\x02\u03C8\u03C9\x07?\x02\x02\u03C9\u03CA\x07M\x02\x02\u03CA" +
		"\u03D7\x07@\x02\x02\u03CB\u03CD\x07=\x02\x02\u03CC\u03CE\x05t;\x02\u03CD" +
		"\u03CC\x03\x02\x02\x02\u03CD\u03CE\x03\x02\x02\x02\u03CE\u03CF\x03\x02" +
		"\x02\x02\u03CF\u03D3\x07>\x02\x02\u03D0\u03D2\x05f4\x02\u03D1\u03D0\x03" +
		"\x02\x02\x02\u03D2\u03D5\x03\x02\x02\x02\u03D3\u03D1\x03\x02\x02\x02\u03D3" +
		"\u03D4\x03\x02\x02\x02\u03D4\u03D7\x03\x02\x02\x02\u03D5\u03D3\x03\x02" +
		"\x02\x02\u03D6\u03A8\x03\x02\x02\x02\u03D6\u03B2\x03\x02\x02\x02\u03D6" +
		"\u03BA\x03\x02\x02\x02\u03D6\u03C2\x03\x02\x02\x02\u03D6\u03C8\x03\x02" +
		"\x02\x02\u03D6\u03CB\x03\x02\x02\x02\u03D7\u0403\x03\x02\x02\x02\u03D8" +
		"\u03D9\f\x07\x02\x02\u03D9\u03DB\x07?\x02\x02\u03DA\u03DC\x05r:\x02\u03DB" +
		"\u03DA\x03\x02\x02\x02\u03DB\u03DC\x03\x02\x02\x02\u03DC\u03DE\x03\x02" +
		"\x02\x02\u03DD\u03DF\x05,\x17\x02\u03DE\u03DD\x03\x02\x02\x02\u03DE\u03DF" +
		"\x03\x02\x02\x02\u03DF\u03E0\x03\x02\x02\x02\u03E0\u0402\x07@\x02\x02" +
		"\u03E1\u03E2\f\x06\x02\x02\u03E2\u03E3\x07?\x02\x02\u03E3\u03E5\x07*\x02" +
		"\x02\u03E4\u03E6\x05r:\x02\u03E5\u03E4\x03\x02\x02\x02\u03E5\u03E6\x03" +
		"\x02\x02\x02\u03E6\u03E7\x03\x02\x02\x02\u03E7\u03E8\x05,\x17\x02\u03E8" +
		"\u03E9\x07@\x02\x02\u03E9\u0402\x03\x02\x02\x02\u03EA\u03EB\f\x05\x02" +
		"\x02\u03EB\u03EC\x07?\x02\x02\u03EC\u03ED\x05r:\x02\u03ED\u03EE\x07*\x02" +
		"\x02\u03EE\u03EF\x05,\x17\x02\u03EF\u03F0\x07@\x02\x02\u03F0\u0402\x03" +
		"\x02\x02\x02\u03F1\u03F2\f\x04\x02\x02\u03F2\u03F3\x07?\x02\x02\u03F3" +
		"\u03F4\x07M\x02\x02\u03F4\u0402\x07@\x02\x02\u03F5\u03F6\f\x03\x02\x02" +
		"\u03F6\u03F8\x07=\x02\x02\u03F7\u03F9\x05t;\x02\u03F8\u03F7\x03\x02\x02" +
		"\x02\u03F8\u03F9\x03\x02\x02\x02\u03F9\u03FA\x03\x02\x02\x02\u03FA\u03FE" +
		"\x07>\x02\x02\u03FB\u03FD\x05f4\x02\u03FC\u03FB\x03\x02\x02\x02\u03FD" +
		"\u0400\x03\x02\x02\x02\u03FE\u03FC\x03\x02\x02\x02\u03FE\u03FF\x03\x02" +
		"\x02\x02\u03FF\u0402\x03\x02\x02\x02\u0400\u03FE\x03\x02\x02\x02\u0401" +
		"\u03D8\x03\x02\x02\x02\u0401\u03E1\x03\x02\x02\x02\u0401\u03EA\x03\x02" +
		"\x02\x02\u0401\u03F1\x03\x02\x02\x02\u0401\u03F5\x03\x02\x02\x02\u0402" +
		"\u0405\x03\x02\x02\x02\u0403\u0401\x03\x02\x02\x02\u0403\u0404\x03\x02" +
		"\x02\x02\u0404\x81\x03\x02\x02\x02\u0405\u0403\x03\x02\x02\x02\u0406\u0407" +
		"\x07k\x02\x02\u0407\x83\x03\x02\x02\x02\u0408\u0413\x05,\x17\x02\u0409" +
		"\u040A\x07A\x02\x02\u040A\u040B\x05\x86D\x02\u040B\u040C\x07B\x02\x02" +
		"\u040C\u0413\x03\x02\x02\x02\u040D\u040E\x07A\x02\x02\u040E\u040F\x05" +
		"\x86D\x02\u040F\u0410\x07Z\x02\x02\u0410\u0411\x07B\x02\x02\u0411\u0413" +
		"\x03\x02\x02\x02\u0412\u0408\x03\x02\x02\x02\u0412\u0409\x03\x02\x02\x02" +
		"\u0412\u040D\x03\x02\x02\x02\u0413\x85\x03\x02\x02\x02\u0414\u0416\bD" +
		"\x01\x02\u0415\u0417\x05\x88E\x02\u0416\u0415\x03\x02\x02\x02\u0416\u0417" +
		"\x03\x02\x02\x02\u0417\u0418\x03\x02\x02\x02\u0418\u0419\x05\x84C\x02" +
		"\u0419\u0422\x03\x02\x02\x02\u041A\u041B\f\x03\x02\x02\u041B\u041D\x07" +
		"Z\x02\x02\u041C\u041E\x05\x88E\x02\u041D\u041C\x03\x02\x02\x02\u041D\u041E" +
		"\x03\x02\x02\x02\u041E\u041F\x03\x02\x02\x02\u041F\u0421\x05\x84C\x02" +
		"\u0420\u041A\x03\x02\x02\x02\u0421\u0424\x03\x02\x02\x02\u0422\u0420\x03" +
		"\x02\x02\x02\u0422\u0423\x03\x02\x02\x02\u0423\x87\x03\x02\x02\x02\u0424" +
		"\u0422\x03\x02\x02\x02\u0425\u0426\x05\x8AF\x02\u0426\u0427\x07[\x02\x02" +
		"\u0427\x89\x03\x02\x02\x02\u0428\u0429\bF\x01\x02\u0429\u042A\x05\x8C" +
		"G\x02\u042A\u042F\x03\x02\x02\x02\u042B\u042C\f\x03\x02\x02\u042C\u042E" +
		"\x05\x8CG\x02\u042D\u042B\x03\x02\x02\x02\u042E\u0431\x03\x02\x02\x02" +
		"\u042F\u042D\x03\x02\x02\x02\u042F\u0430\x03\x02\x02\x02\u0430\x8B\x03" +
		"\x02\x02\x02\u0431\u042F\x03\x02\x02\x02\u0432\u0433\x07?\x02\x02\u0433" +
		"\u0434\x052\x1A\x02\u0434\u0435";
	private static readonly _serializedATNSegment2: string =
		"\x07@\x02\x02\u0435\u0439\x03\x02\x02\x02\u0436\u0437\x07i\x02\x02\u0437" +
		"\u0439\x07k\x02\x02\u0438\u0432\x03\x02\x02\x02\u0438\u0436\x03\x02\x02" +
		"\x02\u0439\x8D\x03\x02\x02\x02\u043A\u043B\x07;\x02\x02\u043B\u043C\x07" +
		"=\x02\x02\u043C\u043D\x052\x1A\x02\u043D\u043F\x07Z\x02\x02\u043E\u0440" +
		"\x07n\x02\x02\u043F\u043E\x03\x02\x02\x02\u0440\u0441\x03\x02\x02\x02" +
		"\u0441\u043F\x03\x02\x02\x02\u0441\u0442\x03\x02\x02\x02\u0442\u0443\x03" +
		"\x02\x02\x02\u0443\u0444\x07>\x02\x02\u0444\u0445\x07Y\x02\x02\u0445\x8F" +
		"\x03\x02\x02\x02\u0446\u046C\x05\x92J\x02\u0447\u046C\x05\x94K\x02\u0448" +
		"\u046C\x05\x9AN\x02\u0449\u046C\x05\x9CO\x02\u044A\u046C\x05\x9EP\x02" +
		"\u044B\u046C\x05\xA6T\x02\u044C\u044D\t\f\x02\x02\u044D\u044E\t\r\x02" +
		"\x02\u044E\u0457\x07=\x02\x02\u044F\u0454\x05(\x15\x02\u0450\u0451\x07" +
		"Z\x02\x02\u0451\u0453\x05(\x15\x02\u0452\u0450\x03\x02\x02\x02\u0453\u0456" +
		"\x03\x02\x02\x02\u0454\u0452\x03\x02\x02\x02\u0454\u0455\x03\x02\x02\x02" +
		"\u0455\u0458\x03\x02\x02\x02\u0456\u0454\x03\x02\x02\x02\u0457\u044F\x03" +
		"\x02\x02\x02\u0457\u0458\x03\x02\x02\x02\u0458\u0466\x03\x02\x02\x02\u0459" +
		"\u0462\x07X\x02\x02\u045A\u045F\x05(\x15\x02\u045B\u045C\x07Z\x02\x02" +
		"\u045C\u045E\x05(\x15\x02\u045D\u045B\x03\x02\x02\x02\u045E\u0461\x03" +
		"\x02\x02\x02\u045F\u045D\x03\x02\x02\x02\u045F\u0460\x03\x02\x02\x02\u0460" +
		"\u0463\x03\x02\x02\x02\u0461\u045F\x03\x02\x02\x02\u0462\u045A\x03\x02" +
		"\x02\x02\u0462\u0463\x03\x02\x02\x02\u0463\u0465\x03\x02\x02\x02\u0464" +
		"\u0459\x03\x02\x02\x02\u0465\u0468\x03\x02\x02\x02\u0466\u0464\x03\x02" +
		"\x02\x02\u0466\u0467\x03\x02\x02\x02\u0467\u0469\x03\x02\x02\x02\u0468" +
		"\u0466\x03\x02\x02\x02\u0469\u046A\x07>\x02\x02\u046A\u046C\x07Y\x02\x02" +
		"\u046B\u0446\x03\x02\x02\x02\u046B\u0447\x03\x02\x02\x02\u046B\u0448\x03" +
		"\x02\x02\x02\u046B\u0449\x03\x02\x02\x02\u046B\u044A\x03\x02\x02\x02\u046B" +
		"\u044B\x03\x02\x02\x02\u046B\u044C\x03\x02\x02\x02\u046C\x91\x03\x02\x02" +
		"\x02\u046D\u046E\x07k\x02\x02\u046E\u046F\x07X\x02\x02\u046F\u0479\x05" +
		"\x90I\x02\u0470\u0471\x07\x13\x02\x02\u0471\u0472\x052\x1A\x02\u0472\u0473" +
		"\x07X\x02\x02\u0473\u0474\x05\x90I\x02\u0474\u0479\x03\x02\x02\x02\u0475" +
		"\u0476\x07\x17\x02\x02\u0476\u0477\x07X\x02\x02\u0477\u0479\x05\x90I\x02" +
		"\u0478\u046D\x03\x02\x02\x02\u0478\u0470\x03\x02\x02\x02\u0478\u0475\x03" +
		"\x02\x02\x02\u0479\x93\x03\x02\x02\x02\u047A\u047C\x07A\x02\x02\u047B" +
		"\u047D\x05\x96L\x02\u047C\u047B\x03\x02\x02\x02\u047C\u047D\x03\x02\x02" +
		"\x02\u047D\u047E\x03\x02\x02\x02\u047E\u047F\x07B\x02\x02\u047F\x95\x03" +
		"\x02\x02\x02\u0480\u0481\bL\x01\x02\u0481\u0482\x05\x98M\x02\u0482\u0487" +
		"\x03\x02\x02\x02\u0483\u0484\f\x03\x02\x02\u0484\u0486\x05\x98M\x02\u0485" +
		"\u0483\x03\x02\x02\x02\u0486\u0489\x03\x02\x02\x02\u0487\u0485\x03\x02" +
		"\x02\x02\u0487\u0488\x03\x02\x02\x02\u0488\x97\x03\x02\x02\x02\u0489\u0487" +
		"\x03\x02\x02\x02\u048A\u048D\x05\x90I\x02\u048B\u048D\x054\x1B\x02\u048C" +
		"\u048A\x03\x02\x02\x02\u048C\u048B\x03\x02\x02\x02\u048D\x99\x03\x02\x02" +
		"\x02\u048E\u0490\x050\x19\x02\u048F\u048E\x03\x02\x02\x02\u048F\u0490" +
		"\x03\x02\x02\x02\u0490\u0491\x03\x02\x02\x02\u0491\u0492\x07Y\x02\x02" +
		"\u0492\x9B\x03\x02\x02\x02\u0493\u0494\x07 \x02\x02\u0494\u0495\x07=\x02" +
		"\x02\u0495\u0496\x050\x19\x02\u0496\u0497\x07>\x02\x02\u0497\u049A\x05" +
		"\x90I\x02\u0498\u0499\x07\x1A\x02\x02\u0499\u049B\x05\x90I\x02\u049A\u0498" +
		"\x03\x02\x02\x02\u049A\u049B\x03\x02\x02\x02\u049B\u04A3\x03\x02\x02\x02" +
		"\u049C\u049D\x07,\x02\x02\u049D\u049E\x07=\x02\x02\u049E\u049F\x050\x19" +
		"\x02\u049F\u04A0\x07>\x02\x02\u04A0\u04A1\x05\x90I\x02\u04A1\u04A3\x03" +
		"\x02\x02\x02\u04A2\u0493\x03\x02\x02\x02\u04A2\u049C\x03\x02\x02\x02\u04A3" +
		"\x9D\x03\x02\x02\x02\u04A4\u04A5\x072\x02\x02\u04A5\u04A6\x07=\x02\x02" +
		"\u04A6\u04A7\x050\x19\x02\u04A7\u04A8\x07>\x02\x02\u04A8\u04A9\x05\x90" +
		"I\x02\u04A9\u04B9\x03\x02\x02\x02\u04AA\u04AB\x07\x18\x02\x02\u04AB\u04AC" +
		"\x05\x90I\x02\u04AC\u04AD\x072\x02\x02\u04AD\u04AE\x07=\x02\x02\u04AE" +
		"\u04AF\x050\x19\x02\u04AF\u04B0\x07>\x02\x02\u04B0\u04B1\x07Y\x02\x02" +
		"\u04B1\u04B9\x03\x02\x02\x02\u04B2\u04B3\x07\x1E\x02\x02\u04B3\u04B4\x07" +
		"=\x02\x02\u04B4\u04B5\x05\xA0Q\x02\u04B5\u04B6\x07>\x02\x02\u04B6\u04B7" +
		"\x05\x90I\x02\u04B7\u04B9\x03\x02\x02\x02\u04B8\u04A4\x03\x02\x02\x02" +
		"\u04B8\u04AA\x03\x02\x02\x02\u04B8\u04B2\x03\x02\x02\x02\u04B9\x9F\x03" +
		"\x02\x02\x02\u04BA\u04BB\x05\xA2R\x02\u04BB\u04BD\x07Y\x02\x02\u04BC\u04BE" +
		"\x05\xA4S\x02\u04BD\u04BC\x03\x02\x02\x02\u04BD\u04BE\x03\x02\x02\x02" +
		"\u04BE\u04BF\x03\x02\x02\x02\u04BF\u04C1\x07Y\x02\x02\u04C0\u04C2\x05" +
		"\xA4S\x02\u04C1\u04C0\x03\x02\x02\x02\u04C1\u04C2\x03\x02\x02\x02\u04C2" +
		"\u04CF\x03\x02\x02\x02\u04C3\u04C5\x050\x19\x02\u04C4\u04C3\x03\x02\x02" +
		"\x02\u04C4\u04C5\x03\x02\x02\x02\u04C5\u04C6\x03\x02\x02\x02\u04C6\u04C8" +
		"\x07Y\x02\x02\u04C7\u04C9\x05\xA4S\x02\u04C8\u04C7\x03\x02\x02\x02\u04C8" +
		"\u04C9\x03\x02\x02\x02\u04C9\u04CA\x03\x02\x02\x02\u04CA\u04CC\x07Y\x02" +
		"\x02\u04CB\u04CD\x05\xA4S\x02\u04CC\u04CB\x03\x02\x02\x02\u04CC\u04CD" +
		"\x03\x02\x02\x02\u04CD\u04CF\x03\x02\x02\x02\u04CE\u04BA\x03\x02\x02\x02" +
		"\u04CE\u04C4\x03\x02\x02\x02\u04CF\xA1\x03\x02\x02\x02\u04D0\u04D1\x05" +
		"6\x1C\x02\u04D1\u04D2\x05<\x1F\x02\u04D2\u04D5\x03\x02\x02\x02\u04D3\u04D5" +
		"\x056\x1C\x02\u04D4\u04D0\x03\x02\x02\x02\u04D4\u04D3\x03\x02\x02\x02" +
		"\u04D5\xA3\x03\x02\x02\x02\u04D6\u04D7\bS\x01\x02\u04D7\u04D8\x05,\x17" +
		"\x02\u04D8\u04DE\x03\x02\x02\x02\u04D9\u04DA\f\x03\x02\x02\u04DA\u04DB" +
		"\x07Z\x02\x02\u04DB\u04DD\x05,\x17\x02\u04DC\u04D9\x03\x02\x02\x02\u04DD" +
		"\u04E0\x03\x02\x02\x02\u04DE\u04DC\x03\x02\x02\x02\u04DE\u04DF\x03\x02" +
		"\x02\x02\u04DF\xA5\x03\x02\x02\x02\u04E0\u04DE\x03\x02\x02\x02\u04E1\u04E2" +
		"\x07\x1F\x02\x02\u04E2\u04E3\x07k\x02\x02\u04E3\u04F2\x07Y\x02\x02\u04E4" +
		"\u04E5\x07\x16\x02\x02\u04E5\u04F2\x07Y\x02\x02\u04E6\u04E7\x07\x12\x02" +
		"\x02\u04E7\u04F2\x07Y\x02\x02\u04E8\u04EA\x07&\x02\x02\u04E9\u04EB\x05" +
		"0\x19\x02\u04EA\u04E9\x03\x02\x02\x02\u04EA\u04EB\x03\x02\x02\x02\u04EB" +
		"\u04EC\x03\x02\x02\x02\u04EC\u04F2\x07Y\x02\x02\u04ED\u04EE\x07\x1F\x02" +
		"\x02\u04EE\u04EF\x05\x10\t\x02\u04EF\u04F0\x07Y\x02\x02\u04F0\u04F2\x03" +
		"\x02\x02\x02\u04F1\u04E1\x03\x02\x02\x02\u04F1\u04E4\x03\x02\x02\x02\u04F1" +
		"\u04E6\x03\x02\x02\x02\u04F1\u04E8\x03\x02\x02\x02\u04F1\u04ED\x03\x02" +
		"\x02\x02\u04F2\xA7\x03\x02\x02\x02\u04F3\u04F4\bU\x01\x02\u04F4\u04F5" +
		"\x05\xAAV\x02\u04F5\u04FA\x03\x02\x02\x02\u04F6\u04F7\f\x03\x02\x02\u04F7" +
		"\u04F9\x05\xAAV\x02\u04F8\u04F6\x03\x02\x02\x02\u04F9\u04FC\x03\x02\x02" +
		"\x02\u04FA\u04F8\x03\x02\x02\x02\u04FA\u04FB\x03\x02\x02\x02\u04FB\xA9" +
		"\x03\x02\x02\x02\u04FC\u04FA\x03\x02\x02\x02\u04FD\u0500\x05\xACW\x02" +
		"\u04FE\u0500\x054\x1B\x02\u04FF\u04FD\x03\x02\x02\x02\u04FF\u04FE\x03" +
		"\x02\x02\x02\u0500\xAB\x03\x02\x02\x02\u0501\u0503\x056\x1C\x02\u0502" +
		"\u0501\x03\x02\x02\x02\u0502\u0503\x03\x02\x02\x02\u0503\u0504\x03\x02" +
		"\x02\x02\u0504\u0506\x05b2\x02\u0505\u0507\x05\xAEX\x02\u0506\u0505\x03" +
		"\x02\x02\x02\u0506\u0507\x03\x02\x02\x02\u0507\u0508\x03\x02\x02\x02\u0508" +
		"\u0509\x05\x94K\x02\u0509\xAD\x03\x02\x02\x02\u050A\u050B\bX\x01\x02\u050B" +
		"\u050C\x054\x1B\x02\u050C\u0511\x03\x02\x02\x02\u050D\u050E\f\x03\x02" +
		"\x02\u050E\u0510\x054\x1B\x02\u050F\u050D\x03\x02\x02\x02\u0510\u0513" +
		"\x03\x02\x02\x02\u0511\u050F\x03\x02\x02\x02\u0511\u0512\x03\x02\x02\x02" +
		"\u0512\xAF\x03\x02\x02\x02\u0513\u0511\x03\x02\x02\x02\x90\xB1\xBA\xC2" +
		"\xD6\xE7\xF1\u0115\u011F\u012C\u012E\u0139\u0152\u0163\u0171\u0173\u017F" +
		"\u0181\u018D\u018F\u01A1\u01A3\u01AF\u01B1\u01BC\u01C7\u01D2\u01DD\u01E8" +
		"\u01F1\u01F9\u0205\u0212\u0217\u021C\u0223\u022D\u0235\u0248\u024E\u0253" +
		"\u025C\u0267\u026C\u0271\u0275\u0279\u027B\u0285\u028A\u028E\u0292\u029A" +
		"\u02A3\u02AD\u02B5\u02C6\u02D2\u02D5\u02DB\u02E9\u02EF\u02F4\u02F7\u02FE" +
		"\u030D\u0319\u031C\u031E\u0326\u032A\u0338\u033C\u0341\u0344\u0347\u034E" +
		"\u0350\u0355\u0359\u035E\u0362\u0365\u036E\u0376\u0380\u0388\u038A\u0394" +
		"\u0399\u039D\u03A3\u03A6\u03AF\u03B4\u03B7\u03BD\u03CD\u03D3\u03D6\u03DB" +
		"\u03DE\u03E5\u03F8\u03FE\u0401\u0403\u0412\u0416\u041D\u0422\u042F\u0438" +
		"\u0441\u0454\u0457\u045F\u0462\u0466\u046B\u0478\u047C\u0487\u048C\u048F" +
		"\u049A\u04A2\u04B8\u04BD\u04C1\u04C4\u04C8\u04CC\u04CE\u04D4\u04DE\u04EA" +
		"\u04F1\u04FA\u04FF\u0502\u0506\u0511";
	public static readonly _serializedATN: string = Utils.join(
		[
			CParser._serializedATNSegment0,
			CParser._serializedATNSegment1,
			CParser._serializedATNSegment2,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CParser.__ATN) {
			CParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CParser._serializedATN));
		}

		return CParser.__ATN;
	}

}

export class CompilationUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(CParser.EOF, 0); }
	public translationUnit(): TranslationUnitContext | undefined {
		return this.tryGetRuleContext(0, TranslationUnitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_compilationUnit; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterCompilationUnit) {
			listener.enterCompilationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitCompilationUnit) {
			listener.exitCompilationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitCompilationUnit) {
			return visitor.visitCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CParser.Identifier, 0); }
	public Constant(): TerminalNode | undefined { return this.tryGetToken(CParser.Constant, 0); }
	public StringLiteral(): TerminalNode[];
	public StringLiteral(i: number): TerminalNode;
	public StringLiteral(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.StringLiteral);
		} else {
			return this.getToken(CParser.StringLiteral, i);
		}
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftParen, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CParser.RightParen, 0); }
	public genericSelection(): GenericSelectionContext | undefined {
		return this.tryGetRuleContext(0, GenericSelectionContext);
	}
	public compoundStatement(): CompoundStatementContext | undefined {
		return this.tryGetRuleContext(0, CompoundStatementContext);
	}
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CParser.Comma, 0); }
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_primaryExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterPrimaryExpression) {
			listener.enterPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitPrimaryExpression) {
			listener.exitPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitPrimaryExpression) {
			return visitor.visitPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericSelectionContext extends ParserRuleContext {
	public Generic(): TerminalNode { return this.getToken(CParser.Generic, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CParser.LeftParen, 0); }
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getRuleContext(0, AssignmentExpressionContext);
	}
	public Comma(): TerminalNode { return this.getToken(CParser.Comma, 0); }
	public genericAssocList(): GenericAssocListContext {
		return this.getRuleContext(0, GenericAssocListContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CParser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_genericSelection; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterGenericSelection) {
			listener.enterGenericSelection(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitGenericSelection) {
			listener.exitGenericSelection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitGenericSelection) {
			return visitor.visitGenericSelection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericAssocListContext extends ParserRuleContext {
	public genericAssociation(): GenericAssociationContext {
		return this.getRuleContext(0, GenericAssociationContext);
	}
	public genericAssocList(): GenericAssocListContext | undefined {
		return this.tryGetRuleContext(0, GenericAssocListContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_genericAssocList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterGenericAssocList) {
			listener.enterGenericAssocList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitGenericAssocList) {
			listener.exitGenericAssocList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitGenericAssocList) {
			return visitor.visitGenericAssocList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericAssociationContext extends ParserRuleContext {
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public Colon(): TerminalNode { return this.getToken(CParser.Colon, 0); }
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getRuleContext(0, AssignmentExpressionContext);
	}
	public Default(): TerminalNode | undefined { return this.tryGetToken(CParser.Default, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_genericAssociation; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterGenericAssociation) {
			listener.enterGenericAssociation(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitGenericAssociation) {
			listener.exitGenericAssociation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitGenericAssociation) {
			return visitor.visitGenericAssociation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostfixExpressionContext extends ParserRuleContext {
	public primaryExpression(): PrimaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExpressionContext);
	}
	public postfixExpression(): PostfixExpressionContext | undefined {
		return this.tryGetRuleContext(0, PostfixExpressionContext);
	}
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftBracket, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CParser.RightBracket, 0); }
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftParen, 0); }
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CParser.RightParen, 0); }
	public argumentExpressionList(): ArgumentExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentExpressionListContext);
	}
	public Dot(): TerminalNode | undefined { return this.tryGetToken(CParser.Dot, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CParser.Identifier, 0); }
	public Arrow(): TerminalNode | undefined { return this.tryGetToken(CParser.Arrow, 0); }
	public PlusPlus(): TerminalNode | undefined { return this.tryGetToken(CParser.PlusPlus, 0); }
	public MinusMinus(): TerminalNode | undefined { return this.tryGetToken(CParser.MinusMinus, 0); }
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public LeftBrace(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftBrace, 0); }
	public initializerList(): InitializerListContext | undefined {
		return this.tryGetRuleContext(0, InitializerListContext);
	}
	public RightBrace(): TerminalNode | undefined { return this.tryGetToken(CParser.RightBrace, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_postfixExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterPostfixExpression) {
			listener.enterPostfixExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitPostfixExpression) {
			listener.exitPostfixExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitPostfixExpression) {
			return visitor.visitPostfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentExpressionListContext extends ParserRuleContext {
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getRuleContext(0, AssignmentExpressionContext);
	}
	public argumentExpressionList(): ArgumentExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentExpressionListContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_argumentExpressionList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterArgumentExpressionList) {
			listener.enterArgumentExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitArgumentExpressionList) {
			listener.exitArgumentExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitArgumentExpressionList) {
			return visitor.visitArgumentExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryExpressionContext extends ParserRuleContext {
	public postfixExpression(): PostfixExpressionContext | undefined {
		return this.tryGetRuleContext(0, PostfixExpressionContext);
	}
	public PlusPlus(): TerminalNode | undefined { return this.tryGetToken(CParser.PlusPlus, 0); }
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public MinusMinus(): TerminalNode | undefined { return this.tryGetToken(CParser.MinusMinus, 0); }
	public unaryOperator(): UnaryOperatorContext | undefined {
		return this.tryGetRuleContext(0, UnaryOperatorContext);
	}
	public castExpression(): CastExpressionContext | undefined {
		return this.tryGetRuleContext(0, CastExpressionContext);
	}
	public Sizeof(): TerminalNode | undefined { return this.tryGetToken(CParser.Sizeof, 0); }
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftParen, 0); }
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CParser.RightParen, 0); }
	public Alignof(): TerminalNode | undefined { return this.tryGetToken(CParser.Alignof, 0); }
	public AndAnd(): TerminalNode | undefined { return this.tryGetToken(CParser.AndAnd, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_unaryExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterUnaryExpression) {
			listener.enterUnaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitUnaryExpression) {
			listener.exitUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitUnaryExpression) {
			return visitor.visitUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryOperatorContext extends ParserRuleContext {
	public And(): TerminalNode | undefined { return this.tryGetToken(CParser.And, 0); }
	public Star(): TerminalNode | undefined { return this.tryGetToken(CParser.Star, 0); }
	public Plus(): TerminalNode | undefined { return this.tryGetToken(CParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(CParser.Minus, 0); }
	public Tilde(): TerminalNode | undefined { return this.tryGetToken(CParser.Tilde, 0); }
	public Not(): TerminalNode | undefined { return this.tryGetToken(CParser.Not, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_unaryOperator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterUnaryOperator) {
			listener.enterUnaryOperator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitUnaryOperator) {
			listener.exitUnaryOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitUnaryOperator) {
			return visitor.visitUnaryOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CastExpressionContext extends ParserRuleContext {
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftParen, 0); }
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CParser.RightParen, 0); }
	public castExpression(): CastExpressionContext | undefined {
		return this.tryGetRuleContext(0, CastExpressionContext);
	}
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public DigitSequence(): TerminalNode | undefined { return this.tryGetToken(CParser.DigitSequence, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_castExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterCastExpression) {
			listener.enterCastExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitCastExpression) {
			listener.exitCastExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitCastExpression) {
			return visitor.visitCastExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeExpressionContext extends ParserRuleContext {
	public castExpression(): CastExpressionContext {
		return this.getRuleContext(0, CastExpressionContext);
	}
	public multiplicativeExpression(): MultiplicativeExpressionContext | undefined {
		return this.tryGetRuleContext(0, MultiplicativeExpressionContext);
	}
	public Star(): TerminalNode | undefined { return this.tryGetToken(CParser.Star, 0); }
	public Div(): TerminalNode | undefined { return this.tryGetToken(CParser.Div, 0); }
	public Mod(): TerminalNode | undefined { return this.tryGetToken(CParser.Mod, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_multiplicativeExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterMultiplicativeExpression) {
			listener.enterMultiplicativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitMultiplicativeExpression) {
			listener.exitMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveExpressionContext extends ParserRuleContext {
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		return this.getRuleContext(0, MultiplicativeExpressionContext);
	}
	public additiveExpression(): AdditiveExpressionContext | undefined {
		return this.tryGetRuleContext(0, AdditiveExpressionContext);
	}
	public Plus(): TerminalNode | undefined { return this.tryGetToken(CParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(CParser.Minus, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_additiveExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterAdditiveExpression) {
			listener.enterAdditiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitAdditiveExpression) {
			listener.exitAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShiftExpressionContext extends ParserRuleContext {
	public additiveExpression(): AdditiveExpressionContext {
		return this.getRuleContext(0, AdditiveExpressionContext);
	}
	public shiftExpression(): ShiftExpressionContext | undefined {
		return this.tryGetRuleContext(0, ShiftExpressionContext);
	}
	public LeftShift(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftShift, 0); }
	public RightShift(): TerminalNode | undefined { return this.tryGetToken(CParser.RightShift, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_shiftExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterShiftExpression) {
			listener.enterShiftExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitShiftExpression) {
			listener.exitShiftExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitShiftExpression) {
			return visitor.visitShiftExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationalExpressionContext extends ParserRuleContext {
	public shiftExpression(): ShiftExpressionContext {
		return this.getRuleContext(0, ShiftExpressionContext);
	}
	public relationalExpression(): RelationalExpressionContext | undefined {
		return this.tryGetRuleContext(0, RelationalExpressionContext);
	}
	public Less(): TerminalNode | undefined { return this.tryGetToken(CParser.Less, 0); }
	public Greater(): TerminalNode | undefined { return this.tryGetToken(CParser.Greater, 0); }
	public LessEqual(): TerminalNode | undefined { return this.tryGetToken(CParser.LessEqual, 0); }
	public GreaterEqual(): TerminalNode | undefined { return this.tryGetToken(CParser.GreaterEqual, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_relationalExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterRelationalExpression) {
			listener.enterRelationalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitRelationalExpression) {
			listener.exitRelationalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitRelationalExpression) {
			return visitor.visitRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EqualityExpressionContext extends ParserRuleContext {
	public relationalExpression(): RelationalExpressionContext {
		return this.getRuleContext(0, RelationalExpressionContext);
	}
	public equalityExpression(): EqualityExpressionContext | undefined {
		return this.tryGetRuleContext(0, EqualityExpressionContext);
	}
	public Equal(): TerminalNode | undefined { return this.tryGetToken(CParser.Equal, 0); }
	public NotEqual(): TerminalNode | undefined { return this.tryGetToken(CParser.NotEqual, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_equalityExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterEqualityExpression) {
			listener.enterEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitEqualityExpression) {
			listener.exitEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AndExpressionContext extends ParserRuleContext {
	public equalityExpression(): EqualityExpressionContext {
		return this.getRuleContext(0, EqualityExpressionContext);
	}
	public andExpression(): AndExpressionContext | undefined {
		return this.tryGetRuleContext(0, AndExpressionContext);
	}
	public And(): TerminalNode | undefined { return this.tryGetToken(CParser.And, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_andExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterAndExpression) {
			listener.enterAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitAndExpression) {
			listener.exitAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitAndExpression) {
			return visitor.visitAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExclusiveOrExpressionContext extends ParserRuleContext {
	public andExpression(): AndExpressionContext {
		return this.getRuleContext(0, AndExpressionContext);
	}
	public exclusiveOrExpression(): ExclusiveOrExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExclusiveOrExpressionContext);
	}
	public Caret(): TerminalNode | undefined { return this.tryGetToken(CParser.Caret, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_exclusiveOrExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterExclusiveOrExpression) {
			listener.enterExclusiveOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitExclusiveOrExpression) {
			listener.exitExclusiveOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitExclusiveOrExpression) {
			return visitor.visitExclusiveOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InclusiveOrExpressionContext extends ParserRuleContext {
	public exclusiveOrExpression(): ExclusiveOrExpressionContext {
		return this.getRuleContext(0, ExclusiveOrExpressionContext);
	}
	public inclusiveOrExpression(): InclusiveOrExpressionContext | undefined {
		return this.tryGetRuleContext(0, InclusiveOrExpressionContext);
	}
	public Or(): TerminalNode | undefined { return this.tryGetToken(CParser.Or, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_inclusiveOrExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterInclusiveOrExpression) {
			listener.enterInclusiveOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitInclusiveOrExpression) {
			listener.exitInclusiveOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitInclusiveOrExpression) {
			return visitor.visitInclusiveOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalAndExpressionContext extends ParserRuleContext {
	public inclusiveOrExpression(): InclusiveOrExpressionContext {
		return this.getRuleContext(0, InclusiveOrExpressionContext);
	}
	public logicalAndExpression(): LogicalAndExpressionContext | undefined {
		return this.tryGetRuleContext(0, LogicalAndExpressionContext);
	}
	public AndAnd(): TerminalNode | undefined { return this.tryGetToken(CParser.AndAnd, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_logicalAndExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterLogicalAndExpression) {
			listener.enterLogicalAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitLogicalAndExpression) {
			listener.exitLogicalAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitLogicalAndExpression) {
			return visitor.visitLogicalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalOrExpressionContext extends ParserRuleContext {
	public logicalAndExpression(): LogicalAndExpressionContext {
		return this.getRuleContext(0, LogicalAndExpressionContext);
	}
	public logicalOrExpression(): LogicalOrExpressionContext | undefined {
		return this.tryGetRuleContext(0, LogicalOrExpressionContext);
	}
	public OrOr(): TerminalNode | undefined { return this.tryGetToken(CParser.OrOr, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_logicalOrExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterLogicalOrExpression) {
			listener.enterLogicalOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitLogicalOrExpression) {
			listener.exitLogicalOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitLogicalOrExpression) {
			return visitor.visitLogicalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalExpressionContext extends ParserRuleContext {
	public logicalOrExpression(): LogicalOrExpressionContext {
		return this.getRuleContext(0, LogicalOrExpressionContext);
	}
	public Question(): TerminalNode | undefined { return this.tryGetToken(CParser.Question, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(CParser.Colon, 0); }
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_conditionalExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterConditionalExpression) {
			listener.enterConditionalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitConditionalExpression) {
			listener.exitConditionalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitConditionalExpression) {
			return visitor.visitConditionalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentExpressionContext extends ParserRuleContext {
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public assignmentOperator(): AssignmentOperatorContext | undefined {
		return this.tryGetRuleContext(0, AssignmentOperatorContext);
	}
	public assignmentExpression(): AssignmentExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentExpressionContext);
	}
	public DigitSequence(): TerminalNode | undefined { return this.tryGetToken(CParser.DigitSequence, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_assignmentExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterAssignmentExpression) {
			listener.enterAssignmentExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitAssignmentExpression) {
			listener.exitAssignmentExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitAssignmentExpression) {
			return visitor.visitAssignmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CParser.Assign, 0); }
	public StarAssign(): TerminalNode | undefined { return this.tryGetToken(CParser.StarAssign, 0); }
	public DivAssign(): TerminalNode | undefined { return this.tryGetToken(CParser.DivAssign, 0); }
	public ModAssign(): TerminalNode | undefined { return this.tryGetToken(CParser.ModAssign, 0); }
	public PlusAssign(): TerminalNode | undefined { return this.tryGetToken(CParser.PlusAssign, 0); }
	public MinusAssign(): TerminalNode | undefined { return this.tryGetToken(CParser.MinusAssign, 0); }
	public LeftShiftAssign(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftShiftAssign, 0); }
	public RightShiftAssign(): TerminalNode | undefined { return this.tryGetToken(CParser.RightShiftAssign, 0); }
	public AndAssign(): TerminalNode | undefined { return this.tryGetToken(CParser.AndAssign, 0); }
	public XorAssign(): TerminalNode | undefined { return this.tryGetToken(CParser.XorAssign, 0); }
	public OrAssign(): TerminalNode | undefined { return this.tryGetToken(CParser.OrAssign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_assignmentOperator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterAssignmentOperator) {
			listener.enterAssignmentOperator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitAssignmentOperator) {
			listener.exitAssignmentOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitAssignmentOperator) {
			return visitor.visitAssignmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getRuleContext(0, AssignmentExpressionContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_expression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantExpressionContext extends ParserRuleContext {
	public conditionalExpression(): ConditionalExpressionContext {
		return this.getRuleContext(0, ConditionalExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_constantExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterConstantExpression) {
			listener.enterConstantExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitConstantExpression) {
			listener.exitConstantExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitConstantExpression) {
			return visitor.visitConstantExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public declarationSpecifiers(): DeclarationSpecifiersContext | undefined {
		return this.tryGetRuleContext(0, DeclarationSpecifiersContext);
	}
	public initDeclaratorList(): InitDeclaratorListContext | undefined {
		return this.tryGetRuleContext(0, InitDeclaratorListContext);
	}
	public Semi(): TerminalNode | undefined { return this.tryGetToken(CParser.Semi, 0); }
	public staticAssertDeclaration(): StaticAssertDeclarationContext | undefined {
		return this.tryGetRuleContext(0, StaticAssertDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_declaration; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationSpecifiersContext extends ParserRuleContext {
	public declarationSpecifier(): DeclarationSpecifierContext[];
	public declarationSpecifier(i: number): DeclarationSpecifierContext;
	public declarationSpecifier(i?: number): DeclarationSpecifierContext | DeclarationSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationSpecifierContext);
		} else {
			return this.getRuleContext(i, DeclarationSpecifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_declarationSpecifiers; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterDeclarationSpecifiers) {
			listener.enterDeclarationSpecifiers(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitDeclarationSpecifiers) {
			listener.exitDeclarationSpecifiers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDeclarationSpecifiers) {
			return visitor.visitDeclarationSpecifiers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationSpecifiers2Context extends ParserRuleContext {
	public declarationSpecifier(): DeclarationSpecifierContext[];
	public declarationSpecifier(i: number): DeclarationSpecifierContext;
	public declarationSpecifier(i?: number): DeclarationSpecifierContext | DeclarationSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationSpecifierContext);
		} else {
			return this.getRuleContext(i, DeclarationSpecifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_declarationSpecifiers2; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterDeclarationSpecifiers2) {
			listener.enterDeclarationSpecifiers2(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitDeclarationSpecifiers2) {
			listener.exitDeclarationSpecifiers2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDeclarationSpecifiers2) {
			return visitor.visitDeclarationSpecifiers2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationSpecifierContext extends ParserRuleContext {
	public storageClassSpecifier(): StorageClassSpecifierContext | undefined {
		return this.tryGetRuleContext(0, StorageClassSpecifierContext);
	}
	public typeSpecifier(): TypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, TypeSpecifierContext);
	}
	public typeQualifier(): TypeQualifierContext | undefined {
		return this.tryGetRuleContext(0, TypeQualifierContext);
	}
	public functionSpecifier(): FunctionSpecifierContext | undefined {
		return this.tryGetRuleContext(0, FunctionSpecifierContext);
	}
	public alignmentSpecifier(): AlignmentSpecifierContext | undefined {
		return this.tryGetRuleContext(0, AlignmentSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_declarationSpecifier; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterDeclarationSpecifier) {
			listener.enterDeclarationSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitDeclarationSpecifier) {
			listener.exitDeclarationSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDeclarationSpecifier) {
			return visitor.visitDeclarationSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitDeclaratorListContext extends ParserRuleContext {
	public initDeclarator(): InitDeclaratorContext {
		return this.getRuleContext(0, InitDeclaratorContext);
	}
	public initDeclaratorList(): InitDeclaratorListContext | undefined {
		return this.tryGetRuleContext(0, InitDeclaratorListContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_initDeclaratorList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterInitDeclaratorList) {
			listener.enterInitDeclaratorList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitInitDeclaratorList) {
			listener.exitInitDeclaratorList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitInitDeclaratorList) {
			return visitor.visitInitDeclaratorList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitDeclaratorContext extends ParserRuleContext {
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CParser.Assign, 0); }
	public initializer(): InitializerContext | undefined {
		return this.tryGetRuleContext(0, InitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_initDeclarator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterInitDeclarator) {
			listener.enterInitDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitInitDeclarator) {
			listener.exitInitDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitInitDeclarator) {
			return visitor.visitInitDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StorageClassSpecifierContext extends ParserRuleContext {
	public Typedef(): TerminalNode | undefined { return this.tryGetToken(CParser.Typedef, 0); }
	public Extern(): TerminalNode | undefined { return this.tryGetToken(CParser.Extern, 0); }
	public Static(): TerminalNode | undefined { return this.tryGetToken(CParser.Static, 0); }
	public ThreadLocal(): TerminalNode | undefined { return this.tryGetToken(CParser.ThreadLocal, 0); }
	public Auto(): TerminalNode | undefined { return this.tryGetToken(CParser.Auto, 0); }
	public Register(): TerminalNode | undefined { return this.tryGetToken(CParser.Register, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_storageClassSpecifier; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterStorageClassSpecifier) {
			listener.enterStorageClassSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitStorageClassSpecifier) {
			listener.exitStorageClassSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitStorageClassSpecifier) {
			return visitor.visitStorageClassSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeSpecifierContext extends ParserRuleContext {
	public Void(): TerminalNode | undefined { return this.tryGetToken(CParser.Void, 0); }
	public Char(): TerminalNode | undefined { return this.tryGetToken(CParser.Char, 0); }
	public Short(): TerminalNode | undefined { return this.tryGetToken(CParser.Short, 0); }
	public Int(): TerminalNode | undefined { return this.tryGetToken(CParser.Int, 0); }
	public Long(): TerminalNode | undefined { return this.tryGetToken(CParser.Long, 0); }
	public Float(): TerminalNode | undefined { return this.tryGetToken(CParser.Float, 0); }
	public Double(): TerminalNode | undefined { return this.tryGetToken(CParser.Double, 0); }
	public Signed(): TerminalNode | undefined { return this.tryGetToken(CParser.Signed, 0); }
	public Unsigned(): TerminalNode | undefined { return this.tryGetToken(CParser.Unsigned, 0); }
	public Bool(): TerminalNode | undefined { return this.tryGetToken(CParser.Bool, 0); }
	public Complex(): TerminalNode | undefined { return this.tryGetToken(CParser.Complex, 0); }
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftParen, 0); }
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CParser.RightParen, 0); }
	public atomicTypeSpecifier(): AtomicTypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, AtomicTypeSpecifierContext);
	}
	public structOrUnionSpecifier(): StructOrUnionSpecifierContext | undefined {
		return this.tryGetRuleContext(0, StructOrUnionSpecifierContext);
	}
	public enumSpecifier(): EnumSpecifierContext | undefined {
		return this.tryGetRuleContext(0, EnumSpecifierContext);
	}
	public typedefName(): TypedefNameContext | undefined {
		return this.tryGetRuleContext(0, TypedefNameContext);
	}
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	public typeSpecifier(): TypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, TypeSpecifierContext);
	}
	public pointer(): PointerContext | undefined {
		return this.tryGetRuleContext(0, PointerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_typeSpecifier; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterTypeSpecifier) {
			listener.enterTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitTypeSpecifier) {
			listener.exitTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitTypeSpecifier) {
			return visitor.visitTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructOrUnionSpecifierContext extends ParserRuleContext {
	public structOrUnion(): StructOrUnionContext {
		return this.getRuleContext(0, StructOrUnionContext);
	}
	public LeftBrace(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftBrace, 0); }
	public structDeclarationList(): StructDeclarationListContext | undefined {
		return this.tryGetRuleContext(0, StructDeclarationListContext);
	}
	public RightBrace(): TerminalNode | undefined { return this.tryGetToken(CParser.RightBrace, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_structOrUnionSpecifier; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterStructOrUnionSpecifier) {
			listener.enterStructOrUnionSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitStructOrUnionSpecifier) {
			listener.exitStructOrUnionSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitStructOrUnionSpecifier) {
			return visitor.visitStructOrUnionSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructOrUnionContext extends ParserRuleContext {
	public Struct(): TerminalNode | undefined { return this.tryGetToken(CParser.Struct, 0); }
	public Union(): TerminalNode | undefined { return this.tryGetToken(CParser.Union, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_structOrUnion; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterStructOrUnion) {
			listener.enterStructOrUnion(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitStructOrUnion) {
			listener.exitStructOrUnion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitStructOrUnion) {
			return visitor.visitStructOrUnion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructDeclarationListContext extends ParserRuleContext {
	public structDeclaration(): StructDeclarationContext {
		return this.getRuleContext(0, StructDeclarationContext);
	}
	public structDeclarationList(): StructDeclarationListContext | undefined {
		return this.tryGetRuleContext(0, StructDeclarationListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_structDeclarationList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterStructDeclarationList) {
			listener.enterStructDeclarationList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitStructDeclarationList) {
			listener.exitStructDeclarationList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitStructDeclarationList) {
			return visitor.visitStructDeclarationList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructDeclarationContext extends ParserRuleContext {
	public specifierQualifierList(): SpecifierQualifierListContext | undefined {
		return this.tryGetRuleContext(0, SpecifierQualifierListContext);
	}
	public Semi(): TerminalNode | undefined { return this.tryGetToken(CParser.Semi, 0); }
	public structDeclaratorList(): StructDeclaratorListContext | undefined {
		return this.tryGetRuleContext(0, StructDeclaratorListContext);
	}
	public staticAssertDeclaration(): StaticAssertDeclarationContext | undefined {
		return this.tryGetRuleContext(0, StaticAssertDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_structDeclaration; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterStructDeclaration) {
			listener.enterStructDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitStructDeclaration) {
			listener.exitStructDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitStructDeclaration) {
			return visitor.visitStructDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecifierQualifierListContext extends ParserRuleContext {
	public typeSpecifier(): TypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, TypeSpecifierContext);
	}
	public specifierQualifierList(): SpecifierQualifierListContext | undefined {
		return this.tryGetRuleContext(0, SpecifierQualifierListContext);
	}
	public typeQualifier(): TypeQualifierContext | undefined {
		return this.tryGetRuleContext(0, TypeQualifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_specifierQualifierList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterSpecifierQualifierList) {
			listener.enterSpecifierQualifierList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitSpecifierQualifierList) {
			listener.exitSpecifierQualifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitSpecifierQualifierList) {
			return visitor.visitSpecifierQualifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructDeclaratorListContext extends ParserRuleContext {
	public structDeclarator(): StructDeclaratorContext {
		return this.getRuleContext(0, StructDeclaratorContext);
	}
	public structDeclaratorList(): StructDeclaratorListContext | undefined {
		return this.tryGetRuleContext(0, StructDeclaratorListContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_structDeclaratorList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterStructDeclaratorList) {
			listener.enterStructDeclaratorList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitStructDeclaratorList) {
			listener.exitStructDeclaratorList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitStructDeclaratorList) {
			return visitor.visitStructDeclaratorList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructDeclaratorContext extends ParserRuleContext {
	public declarator(): DeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DeclaratorContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(CParser.Colon, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_structDeclarator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterStructDeclarator) {
			listener.enterStructDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitStructDeclarator) {
			listener.exitStructDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitStructDeclarator) {
			return visitor.visitStructDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumSpecifierContext extends ParserRuleContext {
	public Enum(): TerminalNode { return this.getToken(CParser.Enum, 0); }
	public LeftBrace(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftBrace, 0); }
	public enumeratorList(): EnumeratorListContext | undefined {
		return this.tryGetRuleContext(0, EnumeratorListContext);
	}
	public RightBrace(): TerminalNode | undefined { return this.tryGetToken(CParser.RightBrace, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CParser.Identifier, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_enumSpecifier; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterEnumSpecifier) {
			listener.enterEnumSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitEnumSpecifier) {
			listener.exitEnumSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitEnumSpecifier) {
			return visitor.visitEnumSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumeratorListContext extends ParserRuleContext {
	public enumerator(): EnumeratorContext {
		return this.getRuleContext(0, EnumeratorContext);
	}
	public enumeratorList(): EnumeratorListContext | undefined {
		return this.tryGetRuleContext(0, EnumeratorListContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_enumeratorList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterEnumeratorList) {
			listener.enterEnumeratorList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitEnumeratorList) {
			listener.exitEnumeratorList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitEnumeratorList) {
			return visitor.visitEnumeratorList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumeratorContext extends ParserRuleContext {
	public enumerationConstant(): EnumerationConstantContext {
		return this.getRuleContext(0, EnumerationConstantContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CParser.Assign, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_enumerator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterEnumerator) {
			listener.enterEnumerator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitEnumerator) {
			listener.exitEnumerator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitEnumerator) {
			return visitor.visitEnumerator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumerationConstantContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_enumerationConstant; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterEnumerationConstant) {
			listener.enterEnumerationConstant(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitEnumerationConstant) {
			listener.exitEnumerationConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitEnumerationConstant) {
			return visitor.visitEnumerationConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomicTypeSpecifierContext extends ParserRuleContext {
	public Atomic(): TerminalNode { return this.getToken(CParser.Atomic, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CParser.LeftParen, 0); }
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CParser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_atomicTypeSpecifier; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterAtomicTypeSpecifier) {
			listener.enterAtomicTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitAtomicTypeSpecifier) {
			listener.exitAtomicTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitAtomicTypeSpecifier) {
			return visitor.visitAtomicTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeQualifierContext extends ParserRuleContext {
	public Const(): TerminalNode | undefined { return this.tryGetToken(CParser.Const, 0); }
	public Restrict(): TerminalNode | undefined { return this.tryGetToken(CParser.Restrict, 0); }
	public Volatile(): TerminalNode | undefined { return this.tryGetToken(CParser.Volatile, 0); }
	public Atomic(): TerminalNode | undefined { return this.tryGetToken(CParser.Atomic, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_typeQualifier; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterTypeQualifier) {
			listener.enterTypeQualifier(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitTypeQualifier) {
			listener.exitTypeQualifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitTypeQualifier) {
			return visitor.visitTypeQualifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionSpecifierContext extends ParserRuleContext {
	public Inline(): TerminalNode | undefined { return this.tryGetToken(CParser.Inline, 0); }
	public Noreturn(): TerminalNode | undefined { return this.tryGetToken(CParser.Noreturn, 0); }
	public gccAttributeSpecifier(): GccAttributeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, GccAttributeSpecifierContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftParen, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CParser.Identifier, 0); }
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CParser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_functionSpecifier; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterFunctionSpecifier) {
			listener.enterFunctionSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitFunctionSpecifier) {
			listener.exitFunctionSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitFunctionSpecifier) {
			return visitor.visitFunctionSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlignmentSpecifierContext extends ParserRuleContext {
	public Alignas(): TerminalNode { return this.getToken(CParser.Alignas, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CParser.LeftParen, 0); }
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CParser.RightParen, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_alignmentSpecifier; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterAlignmentSpecifier) {
			listener.enterAlignmentSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitAlignmentSpecifier) {
			listener.exitAlignmentSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitAlignmentSpecifier) {
			return visitor.visitAlignmentSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclaratorContext extends ParserRuleContext {
	public directDeclarator(): DirectDeclaratorContext {
		return this.getRuleContext(0, DirectDeclaratorContext);
	}
	public pointer(): PointerContext | undefined {
		return this.tryGetRuleContext(0, PointerContext);
	}
	public gccDeclaratorExtension(): GccDeclaratorExtensionContext[];
	public gccDeclaratorExtension(i: number): GccDeclaratorExtensionContext;
	public gccDeclaratorExtension(i?: number): GccDeclaratorExtensionContext | GccDeclaratorExtensionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GccDeclaratorExtensionContext);
		} else {
			return this.getRuleContext(i, GccDeclaratorExtensionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_declarator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterDeclarator) {
			listener.enterDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitDeclarator) {
			listener.exitDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDeclarator) {
			return visitor.visitDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DirectDeclaratorContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CParser.Identifier, 0); }
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftParen, 0); }
	public declarator(): DeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DeclaratorContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CParser.RightParen, 0); }
	public directDeclarator(): DirectDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DirectDeclaratorContext);
	}
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftBracket, 0); }
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CParser.RightBracket, 0); }
	public typeQualifierList(): TypeQualifierListContext | undefined {
		return this.tryGetRuleContext(0, TypeQualifierListContext);
	}
	public assignmentExpression(): AssignmentExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentExpressionContext);
	}
	public Static(): TerminalNode | undefined { return this.tryGetToken(CParser.Static, 0); }
	public Star(): TerminalNode | undefined { return this.tryGetToken(CParser.Star, 0); }
	public parameterTypeList(): ParameterTypeListContext | undefined {
		return this.tryGetRuleContext(0, ParameterTypeListContext);
	}
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(CParser.Colon, 0); }
	public DigitSequence(): TerminalNode | undefined { return this.tryGetToken(CParser.DigitSequence, 0); }
	public pointer(): PointerContext | undefined {
		return this.tryGetRuleContext(0, PointerContext);
	}
	public typeSpecifier(): TypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, TypeSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_directDeclarator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterDirectDeclarator) {
			listener.enterDirectDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitDirectDeclarator) {
			listener.exitDirectDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDirectDeclarator) {
			return visitor.visitDirectDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GccDeclaratorExtensionContext extends ParserRuleContext {
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftParen, 0); }
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CParser.RightParen, 0); }
	public StringLiteral(): TerminalNode[];
	public StringLiteral(i: number): TerminalNode;
	public StringLiteral(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.StringLiteral);
		} else {
			return this.getToken(CParser.StringLiteral, i);
		}
	}
	public gccAttributeSpecifier(): GccAttributeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, GccAttributeSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_gccDeclaratorExtension; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterGccDeclaratorExtension) {
			listener.enterGccDeclaratorExtension(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitGccDeclaratorExtension) {
			listener.exitGccDeclaratorExtension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitGccDeclaratorExtension) {
			return visitor.visitGccDeclaratorExtension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GccAttributeSpecifierContext extends ParserRuleContext {
	public LeftParen(): TerminalNode[];
	public LeftParen(i: number): TerminalNode;
	public LeftParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.LeftParen);
		} else {
			return this.getToken(CParser.LeftParen, i);
		}
	}
	public gccAttributeList(): GccAttributeListContext {
		return this.getRuleContext(0, GccAttributeListContext);
	}
	public RightParen(): TerminalNode[];
	public RightParen(i: number): TerminalNode;
	public RightParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.RightParen);
		} else {
			return this.getToken(CParser.RightParen, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_gccAttributeSpecifier; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterGccAttributeSpecifier) {
			listener.enterGccAttributeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitGccAttributeSpecifier) {
			listener.exitGccAttributeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitGccAttributeSpecifier) {
			return visitor.visitGccAttributeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GccAttributeListContext extends ParserRuleContext {
	public gccAttribute(): GccAttributeContext[];
	public gccAttribute(i: number): GccAttributeContext;
	public gccAttribute(i?: number): GccAttributeContext | GccAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GccAttributeContext);
		} else {
			return this.getRuleContext(i, GccAttributeContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Comma);
		} else {
			return this.getToken(CParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_gccAttributeList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterGccAttributeList) {
			listener.enterGccAttributeList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitGccAttributeList) {
			listener.exitGccAttributeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitGccAttributeList) {
			return visitor.visitGccAttributeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GccAttributeContext extends ParserRuleContext {
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CParser.Comma, 0); }
	public LeftParen(): TerminalNode[];
	public LeftParen(i: number): TerminalNode;
	public LeftParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.LeftParen);
		} else {
			return this.getToken(CParser.LeftParen, i);
		}
	}
	public RightParen(): TerminalNode[];
	public RightParen(i: number): TerminalNode;
	public RightParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.RightParen);
		} else {
			return this.getToken(CParser.RightParen, i);
		}
	}
	public argumentExpressionList(): ArgumentExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_gccAttribute; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterGccAttribute) {
			listener.enterGccAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitGccAttribute) {
			listener.exitGccAttribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitGccAttribute) {
			return visitor.visitGccAttribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NestedParenthesesBlockContext extends ParserRuleContext {
	public LeftParen(): TerminalNode[];
	public LeftParen(i: number): TerminalNode;
	public LeftParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.LeftParen);
		} else {
			return this.getToken(CParser.LeftParen, i);
		}
	}
	public nestedParenthesesBlock(): NestedParenthesesBlockContext[];
	public nestedParenthesesBlock(i: number): NestedParenthesesBlockContext;
	public nestedParenthesesBlock(i?: number): NestedParenthesesBlockContext | NestedParenthesesBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NestedParenthesesBlockContext);
		} else {
			return this.getRuleContext(i, NestedParenthesesBlockContext);
		}
	}
	public RightParen(): TerminalNode[];
	public RightParen(i: number): TerminalNode;
	public RightParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.RightParen);
		} else {
			return this.getToken(CParser.RightParen, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_nestedParenthesesBlock; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterNestedParenthesesBlock) {
			listener.enterNestedParenthesesBlock(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitNestedParenthesesBlock) {
			listener.exitNestedParenthesesBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitNestedParenthesesBlock) {
			return visitor.visitNestedParenthesesBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PointerContext extends ParserRuleContext {
	public Star(): TerminalNode | undefined { return this.tryGetToken(CParser.Star, 0); }
	public typeQualifierList(): TypeQualifierListContext | undefined {
		return this.tryGetRuleContext(0, TypeQualifierListContext);
	}
	public pointer(): PointerContext | undefined {
		return this.tryGetRuleContext(0, PointerContext);
	}
	public Caret(): TerminalNode | undefined { return this.tryGetToken(CParser.Caret, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_pointer; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterPointer) {
			listener.enterPointer(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitPointer) {
			listener.exitPointer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitPointer) {
			return visitor.visitPointer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeQualifierListContext extends ParserRuleContext {
	public typeQualifier(): TypeQualifierContext {
		return this.getRuleContext(0, TypeQualifierContext);
	}
	public typeQualifierList(): TypeQualifierListContext | undefined {
		return this.tryGetRuleContext(0, TypeQualifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_typeQualifierList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterTypeQualifierList) {
			listener.enterTypeQualifierList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitTypeQualifierList) {
			listener.exitTypeQualifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitTypeQualifierList) {
			return visitor.visitTypeQualifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterTypeListContext extends ParserRuleContext {
	public parameterList(): ParameterListContext {
		return this.getRuleContext(0, ParameterListContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CParser.Comma, 0); }
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CParser.Ellipsis, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_parameterTypeList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterParameterTypeList) {
			listener.enterParameterTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitParameterTypeList) {
			listener.exitParameterTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitParameterTypeList) {
			return visitor.visitParameterTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	public parameterDeclaration(): ParameterDeclarationContext {
		return this.getRuleContext(0, ParameterDeclarationContext);
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_parameterList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterParameterList) {
			listener.enterParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitParameterList) {
			listener.exitParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterDeclarationContext extends ParserRuleContext {
	public declarationSpecifiers(): DeclarationSpecifiersContext | undefined {
		return this.tryGetRuleContext(0, DeclarationSpecifiersContext);
	}
	public declarator(): DeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DeclaratorContext);
	}
	public declarationSpecifiers2(): DeclarationSpecifiers2Context | undefined {
		return this.tryGetRuleContext(0, DeclarationSpecifiers2Context);
	}
	public abstractDeclarator(): AbstractDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractDeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_parameterDeclaration; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterParameterDeclaration) {
			listener.enterParameterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitParameterDeclaration) {
			listener.exitParameterDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitParameterDeclaration) {
			return visitor.visitParameterDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CParser.Identifier, 0); }
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_identifierList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterIdentifierList) {
			listener.enterIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitIdentifierList) {
			listener.exitIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitIdentifierList) {
			return visitor.visitIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	public specifierQualifierList(): SpecifierQualifierListContext {
		return this.getRuleContext(0, SpecifierQualifierListContext);
	}
	public abstractDeclarator(): AbstractDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractDeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_typeName; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterTypeName) {
			listener.enterTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitTypeName) {
			listener.exitTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitTypeName) {
			return visitor.visitTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AbstractDeclaratorContext extends ParserRuleContext {
	public pointer(): PointerContext | undefined {
		return this.tryGetRuleContext(0, PointerContext);
	}
	public directAbstractDeclarator(): DirectAbstractDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DirectAbstractDeclaratorContext);
	}
	public gccDeclaratorExtension(): GccDeclaratorExtensionContext[];
	public gccDeclaratorExtension(i: number): GccDeclaratorExtensionContext;
	public gccDeclaratorExtension(i?: number): GccDeclaratorExtensionContext | GccDeclaratorExtensionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GccDeclaratorExtensionContext);
		} else {
			return this.getRuleContext(i, GccDeclaratorExtensionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_abstractDeclarator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterAbstractDeclarator) {
			listener.enterAbstractDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitAbstractDeclarator) {
			listener.exitAbstractDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitAbstractDeclarator) {
			return visitor.visitAbstractDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DirectAbstractDeclaratorContext extends ParserRuleContext {
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftParen, 0); }
	public abstractDeclarator(): AbstractDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractDeclaratorContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CParser.RightParen, 0); }
	public gccDeclaratorExtension(): GccDeclaratorExtensionContext[];
	public gccDeclaratorExtension(i: number): GccDeclaratorExtensionContext;
	public gccDeclaratorExtension(i?: number): GccDeclaratorExtensionContext | GccDeclaratorExtensionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GccDeclaratorExtensionContext);
		} else {
			return this.getRuleContext(i, GccDeclaratorExtensionContext);
		}
	}
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftBracket, 0); }
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CParser.RightBracket, 0); }
	public typeQualifierList(): TypeQualifierListContext | undefined {
		return this.tryGetRuleContext(0, TypeQualifierListContext);
	}
	public assignmentExpression(): AssignmentExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentExpressionContext);
	}
	public Static(): TerminalNode | undefined { return this.tryGetToken(CParser.Static, 0); }
	public Star(): TerminalNode | undefined { return this.tryGetToken(CParser.Star, 0); }
	public parameterTypeList(): ParameterTypeListContext | undefined {
		return this.tryGetRuleContext(0, ParameterTypeListContext);
	}
	public directAbstractDeclarator(): DirectAbstractDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DirectAbstractDeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_directAbstractDeclarator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterDirectAbstractDeclarator) {
			listener.enterDirectAbstractDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitDirectAbstractDeclarator) {
			listener.exitDirectAbstractDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDirectAbstractDeclarator) {
			return visitor.visitDirectAbstractDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypedefNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_typedefName; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterTypedefName) {
			listener.enterTypedefName(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitTypedefName) {
			listener.exitTypedefName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitTypedefName) {
			return visitor.visitTypedefName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializerContext extends ParserRuleContext {
	public assignmentExpression(): AssignmentExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentExpressionContext);
	}
	public LeftBrace(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftBrace, 0); }
	public initializerList(): InitializerListContext | undefined {
		return this.tryGetRuleContext(0, InitializerListContext);
	}
	public RightBrace(): TerminalNode | undefined { return this.tryGetToken(CParser.RightBrace, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_initializer; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterInitializer) {
			listener.enterInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitInitializer) {
			listener.exitInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitInitializer) {
			return visitor.visitInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializerListContext extends ParserRuleContext {
	public initializer(): InitializerContext {
		return this.getRuleContext(0, InitializerContext);
	}
	public designation(): DesignationContext | undefined {
		return this.tryGetRuleContext(0, DesignationContext);
	}
	public initializerList(): InitializerListContext | undefined {
		return this.tryGetRuleContext(0, InitializerListContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_initializerList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterInitializerList) {
			listener.enterInitializerList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitInitializerList) {
			listener.exitInitializerList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitInitializerList) {
			return visitor.visitInitializerList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DesignationContext extends ParserRuleContext {
	public designatorList(): DesignatorListContext {
		return this.getRuleContext(0, DesignatorListContext);
	}
	public Assign(): TerminalNode { return this.getToken(CParser.Assign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_designation; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterDesignation) {
			listener.enterDesignation(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitDesignation) {
			listener.exitDesignation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDesignation) {
			return visitor.visitDesignation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DesignatorListContext extends ParserRuleContext {
	public designator(): DesignatorContext {
		return this.getRuleContext(0, DesignatorContext);
	}
	public designatorList(): DesignatorListContext | undefined {
		return this.tryGetRuleContext(0, DesignatorListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_designatorList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterDesignatorList) {
			listener.enterDesignatorList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitDesignatorList) {
			listener.exitDesignatorList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDesignatorList) {
			return visitor.visitDesignatorList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DesignatorContext extends ParserRuleContext {
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftBracket, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CParser.RightBracket, 0); }
	public Dot(): TerminalNode | undefined { return this.tryGetToken(CParser.Dot, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_designator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterDesignator) {
			listener.enterDesignator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitDesignator) {
			listener.exitDesignator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDesignator) {
			return visitor.visitDesignator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StaticAssertDeclarationContext extends ParserRuleContext {
	public StaticAssert(): TerminalNode { return this.getToken(CParser.StaticAssert, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CParser.LeftParen, 0); }
	public constantExpression(): ConstantExpressionContext {
		return this.getRuleContext(0, ConstantExpressionContext);
	}
	public Comma(): TerminalNode { return this.getToken(CParser.Comma, 0); }
	public RightParen(): TerminalNode { return this.getToken(CParser.RightParen, 0); }
	public Semi(): TerminalNode { return this.getToken(CParser.Semi, 0); }
	public StringLiteral(): TerminalNode[];
	public StringLiteral(i: number): TerminalNode;
	public StringLiteral(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.StringLiteral);
		} else {
			return this.getToken(CParser.StringLiteral, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_staticAssertDeclaration; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterStaticAssertDeclaration) {
			listener.enterStaticAssertDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitStaticAssertDeclaration) {
			listener.exitStaticAssertDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitStaticAssertDeclaration) {
			return visitor.visitStaticAssertDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public labeledStatement(): LabeledStatementContext | undefined {
		return this.tryGetRuleContext(0, LabeledStatementContext);
	}
	public compoundStatement(): CompoundStatementContext | undefined {
		return this.tryGetRuleContext(0, CompoundStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public selectionStatement(): SelectionStatementContext | undefined {
		return this.tryGetRuleContext(0, SelectionStatementContext);
	}
	public iterationStatement(): IterationStatementContext | undefined {
		return this.tryGetRuleContext(0, IterationStatementContext);
	}
	public jumpStatement(): JumpStatementContext | undefined {
		return this.tryGetRuleContext(0, JumpStatementContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftParen, 0); }
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CParser.RightParen, 0); }
	public Semi(): TerminalNode | undefined { return this.tryGetToken(CParser.Semi, 0); }
	public Volatile(): TerminalNode | undefined { return this.tryGetToken(CParser.Volatile, 0); }
	public logicalOrExpression(): LogicalOrExpressionContext[];
	public logicalOrExpression(i: number): LogicalOrExpressionContext;
	public logicalOrExpression(i?: number): LogicalOrExpressionContext | LogicalOrExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LogicalOrExpressionContext);
		} else {
			return this.getRuleContext(i, LogicalOrExpressionContext);
		}
	}
	public Colon(): TerminalNode[];
	public Colon(i: number): TerminalNode;
	public Colon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Colon);
		} else {
			return this.getToken(CParser.Colon, i);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Comma);
		} else {
			return this.getToken(CParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_statement; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabeledStatementContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CParser.Identifier, 0); }
	public Colon(): TerminalNode { return this.getToken(CParser.Colon, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public Case(): TerminalNode | undefined { return this.tryGetToken(CParser.Case, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	public Default(): TerminalNode | undefined { return this.tryGetToken(CParser.Default, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_labeledStatement; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterLabeledStatement) {
			listener.enterLabeledStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitLabeledStatement) {
			listener.exitLabeledStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitLabeledStatement) {
			return visitor.visitLabeledStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompoundStatementContext extends ParserRuleContext {
	public LeftBrace(): TerminalNode { return this.getToken(CParser.LeftBrace, 0); }
	public RightBrace(): TerminalNode { return this.getToken(CParser.RightBrace, 0); }
	public blockItemList(): BlockItemListContext | undefined {
		return this.tryGetRuleContext(0, BlockItemListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_compoundStatement; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterCompoundStatement) {
			listener.enterCompoundStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitCompoundStatement) {
			listener.exitCompoundStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitCompoundStatement) {
			return visitor.visitCompoundStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockItemListContext extends ParserRuleContext {
	public blockItem(): BlockItemContext {
		return this.getRuleContext(0, BlockItemContext);
	}
	public blockItemList(): BlockItemListContext | undefined {
		return this.tryGetRuleContext(0, BlockItemListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_blockItemList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterBlockItemList) {
			listener.enterBlockItemList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitBlockItemList) {
			listener.exitBlockItemList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitBlockItemList) {
			return visitor.visitBlockItemList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockItemContext extends ParserRuleContext {
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_blockItem; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterBlockItem) {
			listener.enterBlockItem(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitBlockItem) {
			listener.exitBlockItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitBlockItem) {
			return visitor.visitBlockItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public Semi(): TerminalNode { return this.getToken(CParser.Semi, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectionStatementContext extends ParserRuleContext {
	public If(): TerminalNode | undefined { return this.tryGetToken(CParser.If, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CParser.LeftParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CParser.RightParen, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public Else(): TerminalNode | undefined { return this.tryGetToken(CParser.Else, 0); }
	public Switch(): TerminalNode | undefined { return this.tryGetToken(CParser.Switch, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_selectionStatement; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterSelectionStatement) {
			listener.enterSelectionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitSelectionStatement) {
			listener.exitSelectionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitSelectionStatement) {
			return visitor.visitSelectionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IterationStatementContext extends ParserRuleContext {
	public While(): TerminalNode | undefined { return this.tryGetToken(CParser.While, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CParser.LeftParen, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CParser.RightParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public Do(): TerminalNode | undefined { return this.tryGetToken(CParser.Do, 0); }
	public Semi(): TerminalNode | undefined { return this.tryGetToken(CParser.Semi, 0); }
	public For(): TerminalNode | undefined { return this.tryGetToken(CParser.For, 0); }
	public forCondition(): ForConditionContext | undefined {
		return this.tryGetRuleContext(0, ForConditionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_iterationStatement; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterIterationStatement) {
			listener.enterIterationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitIterationStatement) {
			listener.exitIterationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitIterationStatement) {
			return visitor.visitIterationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForConditionContext extends ParserRuleContext {
	public forDeclaration(): ForDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ForDeclarationContext);
	}
	public Semi(): TerminalNode[];
	public Semi(i: number): TerminalNode;
	public Semi(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Semi);
		} else {
			return this.getToken(CParser.Semi, i);
		}
	}
	public forExpression(): ForExpressionContext[];
	public forExpression(i: number): ForExpressionContext;
	public forExpression(i?: number): ForExpressionContext | ForExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ForExpressionContext);
		} else {
			return this.getRuleContext(i, ForExpressionContext);
		}
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_forCondition; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterForCondition) {
			listener.enterForCondition(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitForCondition) {
			listener.exitForCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitForCondition) {
			return visitor.visitForCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForDeclarationContext extends ParserRuleContext {
	public declarationSpecifiers(): DeclarationSpecifiersContext {
		return this.getRuleContext(0, DeclarationSpecifiersContext);
	}
	public initDeclaratorList(): InitDeclaratorListContext | undefined {
		return this.tryGetRuleContext(0, InitDeclaratorListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_forDeclaration; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterForDeclaration) {
			listener.enterForDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitForDeclaration) {
			listener.exitForDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitForDeclaration) {
			return visitor.visitForDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForExpressionContext extends ParserRuleContext {
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getRuleContext(0, AssignmentExpressionContext);
	}
	public forExpression(): ForExpressionContext | undefined {
		return this.tryGetRuleContext(0, ForExpressionContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_forExpression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterForExpression) {
			listener.enterForExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitForExpression) {
			listener.exitForExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitForExpression) {
			return visitor.visitForExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JumpStatementContext extends ParserRuleContext {
	public Goto(): TerminalNode | undefined { return this.tryGetToken(CParser.Goto, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CParser.Identifier, 0); }
	public Semi(): TerminalNode { return this.getToken(CParser.Semi, 0); }
	public Continue(): TerminalNode | undefined { return this.tryGetToken(CParser.Continue, 0); }
	public Break(): TerminalNode | undefined { return this.tryGetToken(CParser.Break, 0); }
	public Return(): TerminalNode | undefined { return this.tryGetToken(CParser.Return, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_jumpStatement; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterJumpStatement) {
			listener.enterJumpStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitJumpStatement) {
			listener.exitJumpStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitJumpStatement) {
			return visitor.visitJumpStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TranslationUnitContext extends ParserRuleContext {
	public externalDeclaration(): ExternalDeclarationContext {
		return this.getRuleContext(0, ExternalDeclarationContext);
	}
	public translationUnit(): TranslationUnitContext | undefined {
		return this.tryGetRuleContext(0, TranslationUnitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_translationUnit; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterTranslationUnit) {
			listener.enterTranslationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitTranslationUnit) {
			listener.exitTranslationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitTranslationUnit) {
			return visitor.visitTranslationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExternalDeclarationContext extends ParserRuleContext {
	public functionDefinition(): FunctionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, FunctionDefinitionContext);
	}
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_externalDeclaration; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterExternalDeclaration) {
			listener.enterExternalDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitExternalDeclaration) {
			listener.exitExternalDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitExternalDeclaration) {
			return visitor.visitExternalDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDefinitionContext extends ParserRuleContext {
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public compoundStatement(): CompoundStatementContext {
		return this.getRuleContext(0, CompoundStatementContext);
	}
	public declarationSpecifiers(): DeclarationSpecifiersContext | undefined {
		return this.tryGetRuleContext(0, DeclarationSpecifiersContext);
	}
	public declarationList(): DeclarationListContext | undefined {
		return this.tryGetRuleContext(0, DeclarationListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_functionDefinition; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterFunctionDefinition) {
			listener.enterFunctionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitFunctionDefinition) {
			listener.exitFunctionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitFunctionDefinition) {
			return visitor.visitFunctionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationListContext extends ParserRuleContext {
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	public declarationList(): DeclarationListContext | undefined {
		return this.tryGetRuleContext(0, DeclarationListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_declarationList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterDeclarationList) {
			listener.enterDeclarationList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitDeclarationList) {
			listener.exitDeclarationList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDeclarationList) {
			return visitor.visitDeclarationList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


