// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/golang/GoParser.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { GoParserListener } from "./GoParserListener";

export class GoParser extends GoParserBase {
	public static readonly BREAK = 1;
	public static readonly DEFAULT = 2;
	public static readonly FUNC = 3;
	public static readonly INTERFACE = 4;
	public static readonly SELECT = 5;
	public static readonly CASE = 6;
	public static readonly DEFER = 7;
	public static readonly GO = 8;
	public static readonly MAP = 9;
	public static readonly STRUCT = 10;
	public static readonly CHAN = 11;
	public static readonly ELSE = 12;
	public static readonly GOTO = 13;
	public static readonly PACKAGE = 14;
	public static readonly SWITCH = 15;
	public static readonly CONST = 16;
	public static readonly FALLTHROUGH = 17;
	public static readonly IF = 18;
	public static readonly RANGE = 19;
	public static readonly TYPE = 20;
	public static readonly CONTINUE = 21;
	public static readonly FOR = 22;
	public static readonly IMPORT = 23;
	public static readonly RETURN = 24;
	public static readonly VAR = 25;
	public static readonly NIL_LIT = 26;
	public static readonly IDENTIFIER = 27;
	public static readonly L_PAREN = 28;
	public static readonly R_PAREN = 29;
	public static readonly L_CURLY = 30;
	public static readonly R_CURLY = 31;
	public static readonly L_BRACKET = 32;
	public static readonly R_BRACKET = 33;
	public static readonly ASSIGN = 34;
	public static readonly COMMA = 35;
	public static readonly SEMI = 36;
	public static readonly COLON = 37;
	public static readonly DOT = 38;
	public static readonly PLUS_PLUS = 39;
	public static readonly MINUS_MINUS = 40;
	public static readonly DECLARE_ASSIGN = 41;
	public static readonly ELLIPSIS = 42;
	public static readonly LOGICAL_OR = 43;
	public static readonly LOGICAL_AND = 44;
	public static readonly EQUALS = 45;
	public static readonly NOT_EQUALS = 46;
	public static readonly LESS = 47;
	public static readonly LESS_OR_EQUALS = 48;
	public static readonly GREATER = 49;
	public static readonly GREATER_OR_EQUALS = 50;
	public static readonly OR = 51;
	public static readonly DIV = 52;
	public static readonly MOD = 53;
	public static readonly LSHIFT = 54;
	public static readonly RSHIFT = 55;
	public static readonly BIT_CLEAR = 56;
	public static readonly EXCLAMATION = 57;
	public static readonly PLUS = 58;
	public static readonly MINUS = 59;
	public static readonly CARET = 60;
	public static readonly STAR = 61;
	public static readonly AMPERSAND = 62;
	public static readonly RECEIVE = 63;
	public static readonly DECIMAL_LIT = 64;
	public static readonly OCTAL_LIT = 65;
	public static readonly HEX_LIT = 66;
	public static readonly FLOAT_LIT = 67;
	public static readonly IMAGINARY_LIT = 68;
	public static readonly RUNE_LIT = 69;
	public static readonly RAW_STRING_LIT = 70;
	public static readonly INTERPRETED_STRING_LIT = 71;
	public static readonly WS = 72;
	public static readonly COMMENT = 73;
	public static readonly TERMINATOR = 74;
	public static readonly LINE_COMMENT = 75;
	public static readonly RULE_sourceFile = 0;
	public static readonly RULE_packageClause = 1;
	public static readonly RULE_importDecl = 2;
	public static readonly RULE_importSpec = 3;
	public static readonly RULE_importPath = 4;
	public static readonly RULE_declaration = 5;
	public static readonly RULE_constDecl = 6;
	public static readonly RULE_constSpec = 7;
	public static readonly RULE_identifierList = 8;
	public static readonly RULE_expressionList = 9;
	public static readonly RULE_typeDecl = 10;
	public static readonly RULE_typeSpec = 11;
	public static readonly RULE_functionDecl = 12;
	public static readonly RULE_methodDecl = 13;
	public static readonly RULE_receiver = 14;
	public static readonly RULE_varDecl = 15;
	public static readonly RULE_varSpec = 16;
	public static readonly RULE_block = 17;
	public static readonly RULE_statementList = 18;
	public static readonly RULE_statement = 19;
	public static readonly RULE_simpleStmt = 20;
	public static readonly RULE_expressionStmt = 21;
	public static readonly RULE_sendStmt = 22;
	public static readonly RULE_incDecStmt = 23;
	public static readonly RULE_assignment = 24;
	public static readonly RULE_assign_op = 25;
	public static readonly RULE_shortVarDecl = 26;
	public static readonly RULE_emptyStmt = 27;
	public static readonly RULE_labeledStmt = 28;
	public static readonly RULE_returnStmt = 29;
	public static readonly RULE_breakStmt = 30;
	public static readonly RULE_continueStmt = 31;
	public static readonly RULE_gotoStmt = 32;
	public static readonly RULE_fallthroughStmt = 33;
	public static readonly RULE_deferStmt = 34;
	public static readonly RULE_ifStmt = 35;
	public static readonly RULE_switchStmt = 36;
	public static readonly RULE_exprSwitchStmt = 37;
	public static readonly RULE_exprCaseClause = 38;
	public static readonly RULE_exprSwitchCase = 39;
	public static readonly RULE_typeSwitchStmt = 40;
	public static readonly RULE_typeSwitchGuard = 41;
	public static readonly RULE_typeCaseClause = 42;
	public static readonly RULE_typeSwitchCase = 43;
	public static readonly RULE_typeList = 44;
	public static readonly RULE_selectStmt = 45;
	public static readonly RULE_commClause = 46;
	public static readonly RULE_commCase = 47;
	public static readonly RULE_recvStmt = 48;
	public static readonly RULE_forStmt = 49;
	public static readonly RULE_forClause = 50;
	public static readonly RULE_rangeClause = 51;
	public static readonly RULE_goStmt = 52;
	public static readonly RULE_type_ = 53;
	public static readonly RULE_typeName = 54;
	public static readonly RULE_typeLit = 55;
	public static readonly RULE_arrayType = 56;
	public static readonly RULE_arrayLength = 57;
	public static readonly RULE_elementType = 58;
	public static readonly RULE_pointerType = 59;
	public static readonly RULE_interfaceType = 60;
	public static readonly RULE_sliceType = 61;
	public static readonly RULE_mapType = 62;
	public static readonly RULE_channelType = 63;
	public static readonly RULE_methodSpec = 64;
	public static readonly RULE_functionType = 65;
	public static readonly RULE_signature = 66;
	public static readonly RULE_result = 67;
	public static readonly RULE_parameters = 68;
	public static readonly RULE_parameterDecl = 69;
	public static readonly RULE_expression = 70;
	public static readonly RULE_primaryExpr = 71;
	public static readonly RULE_unaryExpr = 72;
	public static readonly RULE_conversion = 73;
	public static readonly RULE_operand = 74;
	public static readonly RULE_literal = 75;
	public static readonly RULE_basicLit = 76;
	public static readonly RULE_integer = 77;
	public static readonly RULE_operandName = 78;
	public static readonly RULE_qualifiedIdent = 79;
	public static readonly RULE_compositeLit = 80;
	public static readonly RULE_literalType = 81;
	public static readonly RULE_literalValue = 82;
	public static readonly RULE_elementList = 83;
	public static readonly RULE_keyedElement = 84;
	public static readonly RULE_key = 85;
	public static readonly RULE_element = 86;
	public static readonly RULE_structType = 87;
	public static readonly RULE_fieldDecl = 88;
	public static readonly RULE_string_ = 89;
	public static readonly RULE_anonymousField = 90;
	public static readonly RULE_functionLit = 91;
	public static readonly RULE_index = 92;
	public static readonly RULE_slice = 93;
	public static readonly RULE_typeAssertion = 94;
	public static readonly RULE_arguments = 95;
	public static readonly RULE_methodExpr = 96;
	public static readonly RULE_receiverType = 97;
	public static readonly RULE_eos = 98;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sourceFile", "packageClause", "importDecl", "importSpec", "importPath", 
		"declaration", "constDecl", "constSpec", "identifierList", "expressionList", 
		"typeDecl", "typeSpec", "functionDecl", "methodDecl", "receiver", "varDecl", 
		"varSpec", "block", "statementList", "statement", "simpleStmt", "expressionStmt", 
		"sendStmt", "incDecStmt", "assignment", "assign_op", "shortVarDecl", "emptyStmt", 
		"labeledStmt", "returnStmt", "breakStmt", "continueStmt", "gotoStmt", 
		"fallthroughStmt", "deferStmt", "ifStmt", "switchStmt", "exprSwitchStmt", 
		"exprCaseClause", "exprSwitchCase", "typeSwitchStmt", "typeSwitchGuard", 
		"typeCaseClause", "typeSwitchCase", "typeList", "selectStmt", "commClause", 
		"commCase", "recvStmt", "forStmt", "forClause", "rangeClause", "goStmt", 
		"type_", "typeName", "typeLit", "arrayType", "arrayLength", "elementType", 
		"pointerType", "interfaceType", "sliceType", "mapType", "channelType", 
		"methodSpec", "functionType", "signature", "result", "parameters", "parameterDecl", 
		"expression", "primaryExpr", "unaryExpr", "conversion", "operand", "literal", 
		"basicLit", "integer", "operandName", "qualifiedIdent", "compositeLit", 
		"literalType", "literalValue", "elementList", "keyedElement", "key", "element", 
		"structType", "fieldDecl", "string_", "anonymousField", "functionLit", 
		"index", "slice", "typeAssertion", "arguments", "methodExpr", "receiverType", 
		"eos",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'break'", "'default'", "'func'", "'interface'", "'select'", 
		"'case'", "'defer'", "'go'", "'map'", "'struct'", "'chan'", "'else'", 
		"'goto'", "'package'", "'switch'", "'const'", "'fallthrough'", "'if'", 
		"'range'", "'type'", "'continue'", "'for'", "'import'", "'return'", "'var'", 
		"'nil'", undefined, "'('", "')'", "'{'", "'}'", "'['", "']'", "'='", "','", 
		"';'", "':'", "'.'", "'++'", "'--'", "':='", "'...'", "'||'", "'&&'", 
		"'=='", "'!='", "'<'", "'<='", "'>'", "'>='", "'|'", "'/'", "'%'", "'<<'", 
		"'>>'", "'&^'", "'!'", "'+'", "'-'", "'^'", "'*'", "'&'", "'<-'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "BREAK", "DEFAULT", "FUNC", "INTERFACE", "SELECT", "CASE", 
		"DEFER", "GO", "MAP", "STRUCT", "CHAN", "ELSE", "GOTO", "PACKAGE", "SWITCH", 
		"CONST", "FALLTHROUGH", "IF", "RANGE", "TYPE", "CONTINUE", "FOR", "IMPORT", 
		"RETURN", "VAR", "NIL_LIT", "IDENTIFIER", "L_PAREN", "R_PAREN", "L_CURLY", 
		"R_CURLY", "L_BRACKET", "R_BRACKET", "ASSIGN", "COMMA", "SEMI", "COLON", 
		"DOT", "PLUS_PLUS", "MINUS_MINUS", "DECLARE_ASSIGN", "ELLIPSIS", "LOGICAL_OR", 
		"LOGICAL_AND", "EQUALS", "NOT_EQUALS", "LESS", "LESS_OR_EQUALS", "GREATER", 
		"GREATER_OR_EQUALS", "OR", "DIV", "MOD", "LSHIFT", "RSHIFT", "BIT_CLEAR", 
		"EXCLAMATION", "PLUS", "MINUS", "CARET", "STAR", "AMPERSAND", "RECEIVE", 
		"DECIMAL_LIT", "OCTAL_LIT", "HEX_LIT", "FLOAT_LIT", "IMAGINARY_LIT", "RUNE_LIT", 
		"RAW_STRING_LIT", "INTERPRETED_STRING_LIT", "WS", "COMMENT", "TERMINATOR", 
		"LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(GoParser._LITERAL_NAMES, GoParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return GoParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "GoParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return GoParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return GoParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(GoParser._ATN, this);
	}
	// @RuleVersion(0)
	public sourceFile(): SourceFileContext {
		let _localctx: SourceFileContext = new SourceFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, GoParser.RULE_sourceFile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
			this.packageClause();
			this.state = 199;
			this.eos();
			this.state = 205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GoParser.IMPORT) {
				{
				{
				this.state = 200;
				this.importDecl();
				this.state = 201;
				this.eos();
				}
				}
				this.state = 207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GoParser.FUNC) | (1 << GoParser.CONST) | (1 << GoParser.TYPE) | (1 << GoParser.VAR))) !== 0)) {
				{
				{
				this.state = 211;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
				case 1:
					{
					this.state = 208;
					this.functionDecl();
					}
					break;

				case 2:
					{
					this.state = 209;
					this.methodDecl();
					}
					break;

				case 3:
					{
					this.state = 210;
					this.declaration();
					}
					break;
				}
				this.state = 213;
				this.eos();
				}
				}
				this.state = 219;
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
	public packageClause(): PackageClauseContext {
		let _localctx: PackageClauseContext = new PackageClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, GoParser.RULE_packageClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 220;
			this.match(GoParser.PACKAGE);
			this.state = 221;
			this.match(GoParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importDecl(): ImportDeclContext {
		let _localctx: ImportDeclContext = new ImportDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, GoParser.RULE_importDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 223;
			this.match(GoParser.IMPORT);
			this.state = 235;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GoParser.IDENTIFIER:
			case GoParser.DOT:
			case GoParser.RAW_STRING_LIT:
			case GoParser.INTERPRETED_STRING_LIT:
				{
				this.state = 224;
				this.importSpec();
				}
				break;
			case GoParser.L_PAREN:
				{
				this.state = 225;
				this.match(GoParser.L_PAREN);
				this.state = 231;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === GoParser.IDENTIFIER || _la === GoParser.DOT || _la === GoParser.RAW_STRING_LIT || _la === GoParser.INTERPRETED_STRING_LIT) {
					{
					{
					this.state = 226;
					this.importSpec();
					this.state = 227;
					this.eos();
					}
					}
					this.state = 233;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 234;
				this.match(GoParser.R_PAREN);
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
	public importSpec(): ImportSpecContext {
		let _localctx: ImportSpecContext = new ImportSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, GoParser.RULE_importSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GoParser.IDENTIFIER || _la === GoParser.DOT) {
				{
				this.state = 237;
				_la = this._input.LA(1);
				if (!(_la === GoParser.IDENTIFIER || _la === GoParser.DOT)) {
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

			this.state = 240;
			this.importPath();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importPath(): ImportPathContext {
		let _localctx: ImportPathContext = new ImportPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, GoParser.RULE_importPath);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 242;
			this.string_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 10, GoParser.RULE_declaration);
		try {
			this.state = 247;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GoParser.CONST:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 244;
				this.constDecl();
				}
				break;
			case GoParser.TYPE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 245;
				this.typeDecl();
				}
				break;
			case GoParser.VAR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 246;
				this.varDecl();
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
	public constDecl(): ConstDeclContext {
		let _localctx: ConstDeclContext = new ConstDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, GoParser.RULE_constDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 249;
			this.match(GoParser.CONST);
			this.state = 261;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GoParser.IDENTIFIER:
				{
				this.state = 250;
				this.constSpec();
				}
				break;
			case GoParser.L_PAREN:
				{
				this.state = 251;
				this.match(GoParser.L_PAREN);
				this.state = 257;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === GoParser.IDENTIFIER) {
					{
					{
					this.state = 252;
					this.constSpec();
					this.state = 253;
					this.eos();
					}
					}
					this.state = 259;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 260;
				this.match(GoParser.R_PAREN);
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
	public constSpec(): ConstSpecContext {
		let _localctx: ConstSpecContext = new ConstSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, GoParser.RULE_constSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 263;
			this.identifierList();
			this.state = 269;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 265;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GoParser.FUNC) | (1 << GoParser.INTERFACE) | (1 << GoParser.MAP) | (1 << GoParser.STRUCT) | (1 << GoParser.CHAN) | (1 << GoParser.IDENTIFIER) | (1 << GoParser.L_PAREN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (GoParser.L_BRACKET - 32)) | (1 << (GoParser.STAR - 32)) | (1 << (GoParser.RECEIVE - 32)))) !== 0)) {
					{
					this.state = 264;
					this.type_();
					}
				}

				this.state = 267;
				this.match(GoParser.ASSIGN);
				this.state = 268;
				this.expressionList();
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
	public identifierList(): IdentifierListContext {
		let _localctx: IdentifierListContext = new IdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, GoParser.RULE_identifierList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 271;
			this.match(GoParser.IDENTIFIER);
			this.state = 276;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 272;
					this.match(GoParser.COMMA);
					this.state = 273;
					this.match(GoParser.IDENTIFIER);
					}
					}
				}
				this.state = 278;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
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
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, GoParser.RULE_expressionList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 279;
			this.expression(0);
			this.state = 284;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 280;
					this.match(GoParser.COMMA);
					this.state = 281;
					this.expression(0);
					}
					}
				}
				this.state = 286;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
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
	public typeDecl(): TypeDeclContext {
		let _localctx: TypeDeclContext = new TypeDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, GoParser.RULE_typeDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 287;
			this.match(GoParser.TYPE);
			this.state = 299;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GoParser.IDENTIFIER:
				{
				this.state = 288;
				this.typeSpec();
				}
				break;
			case GoParser.L_PAREN:
				{
				this.state = 289;
				this.match(GoParser.L_PAREN);
				this.state = 295;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === GoParser.IDENTIFIER) {
					{
					{
					this.state = 290;
					this.typeSpec();
					this.state = 291;
					this.eos();
					}
					}
					this.state = 297;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 298;
				this.match(GoParser.R_PAREN);
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
	public typeSpec(): TypeSpecContext {
		let _localctx: TypeSpecContext = new TypeSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, GoParser.RULE_typeSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 301;
			this.match(GoParser.IDENTIFIER);
			this.state = 303;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GoParser.ASSIGN) {
				{
				this.state = 302;
				this.match(GoParser.ASSIGN);
				}
			}

			this.state = 305;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDecl(): FunctionDeclContext {
		let _localctx: FunctionDeclContext = new FunctionDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, GoParser.RULE_functionDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 307;
			this.match(GoParser.FUNC);
			this.state = 308;
			this.match(GoParser.IDENTIFIER);
			{
			this.state = 309;
			this.signature();
			this.state = 311;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 310;
				this.block();
				}
				break;
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
	public methodDecl(): MethodDeclContext {
		let _localctx: MethodDeclContext = new MethodDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, GoParser.RULE_methodDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 313;
			this.match(GoParser.FUNC);
			this.state = 314;
			this.receiver();
			this.state = 315;
			this.match(GoParser.IDENTIFIER);
			{
			this.state = 316;
			this.signature();
			this.state = 318;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 317;
				this.block();
				}
				break;
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
	public receiver(): ReceiverContext {
		let _localctx: ReceiverContext = new ReceiverContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, GoParser.RULE_receiver);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 320;
			this.parameters();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varDecl(): VarDeclContext {
		let _localctx: VarDeclContext = new VarDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, GoParser.RULE_varDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 322;
			this.match(GoParser.VAR);
			this.state = 334;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GoParser.IDENTIFIER:
				{
				this.state = 323;
				this.varSpec();
				}
				break;
			case GoParser.L_PAREN:
				{
				this.state = 324;
				this.match(GoParser.L_PAREN);
				this.state = 330;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === GoParser.IDENTIFIER) {
					{
					{
					this.state = 325;
					this.varSpec();
					this.state = 326;
					this.eos();
					}
					}
					this.state = 332;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 333;
				this.match(GoParser.R_PAREN);
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
	public varSpec(): VarSpecContext {
		let _localctx: VarSpecContext = new VarSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, GoParser.RULE_varSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 336;
			this.identifierList();
			this.state = 344;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GoParser.FUNC:
			case GoParser.INTERFACE:
			case GoParser.MAP:
			case GoParser.STRUCT:
			case GoParser.CHAN:
			case GoParser.IDENTIFIER:
			case GoParser.L_PAREN:
			case GoParser.L_BRACKET:
			case GoParser.STAR:
			case GoParser.RECEIVE:
				{
				this.state = 337;
				this.type_();
				this.state = 340;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
				case 1:
					{
					this.state = 338;
					this.match(GoParser.ASSIGN);
					this.state = 339;
					this.expressionList();
					}
					break;
				}
				}
				break;
			case GoParser.ASSIGN:
				{
				this.state = 342;
				this.match(GoParser.ASSIGN);
				this.state = 343;
				this.expressionList();
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
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, GoParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 346;
			this.match(GoParser.L_CURLY);
			this.state = 348;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GoParser.BREAK) | (1 << GoParser.FUNC) | (1 << GoParser.INTERFACE) | (1 << GoParser.SELECT) | (1 << GoParser.DEFER) | (1 << GoParser.GO) | (1 << GoParser.MAP) | (1 << GoParser.STRUCT) | (1 << GoParser.CHAN) | (1 << GoParser.GOTO) | (1 << GoParser.SWITCH) | (1 << GoParser.CONST) | (1 << GoParser.FALLTHROUGH) | (1 << GoParser.IF) | (1 << GoParser.TYPE) | (1 << GoParser.CONTINUE) | (1 << GoParser.FOR) | (1 << GoParser.RETURN) | (1 << GoParser.VAR) | (1 << GoParser.NIL_LIT) | (1 << GoParser.IDENTIFIER) | (1 << GoParser.L_PAREN) | (1 << GoParser.L_CURLY))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (GoParser.L_BRACKET - 32)) | (1 << (GoParser.SEMI - 32)) | (1 << (GoParser.EXCLAMATION - 32)) | (1 << (GoParser.PLUS - 32)) | (1 << (GoParser.MINUS - 32)) | (1 << (GoParser.CARET - 32)) | (1 << (GoParser.STAR - 32)) | (1 << (GoParser.AMPERSAND - 32)) | (1 << (GoParser.RECEIVE - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (GoParser.DECIMAL_LIT - 64)) | (1 << (GoParser.OCTAL_LIT - 64)) | (1 << (GoParser.HEX_LIT - 64)) | (1 << (GoParser.FLOAT_LIT - 64)) | (1 << (GoParser.IMAGINARY_LIT - 64)) | (1 << (GoParser.RUNE_LIT - 64)) | (1 << (GoParser.RAW_STRING_LIT - 64)) | (1 << (GoParser.INTERPRETED_STRING_LIT - 64)))) !== 0)) {
				{
				this.state = 347;
				this.statementList();
				}
			}

			this.state = 350;
			this.match(GoParser.R_CURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementList(): StatementListContext {
		let _localctx: StatementListContext = new StatementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, GoParser.RULE_statementList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 355;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 352;
				this.statement();
				this.state = 353;
				this.eos();
				}
				}
				this.state = 357;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GoParser.BREAK) | (1 << GoParser.FUNC) | (1 << GoParser.INTERFACE) | (1 << GoParser.SELECT) | (1 << GoParser.DEFER) | (1 << GoParser.GO) | (1 << GoParser.MAP) | (1 << GoParser.STRUCT) | (1 << GoParser.CHAN) | (1 << GoParser.GOTO) | (1 << GoParser.SWITCH) | (1 << GoParser.CONST) | (1 << GoParser.FALLTHROUGH) | (1 << GoParser.IF) | (1 << GoParser.TYPE) | (1 << GoParser.CONTINUE) | (1 << GoParser.FOR) | (1 << GoParser.RETURN) | (1 << GoParser.VAR) | (1 << GoParser.NIL_LIT) | (1 << GoParser.IDENTIFIER) | (1 << GoParser.L_PAREN) | (1 << GoParser.L_CURLY))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (GoParser.L_BRACKET - 32)) | (1 << (GoParser.SEMI - 32)) | (1 << (GoParser.EXCLAMATION - 32)) | (1 << (GoParser.PLUS - 32)) | (1 << (GoParser.MINUS - 32)) | (1 << (GoParser.CARET - 32)) | (1 << (GoParser.STAR - 32)) | (1 << (GoParser.AMPERSAND - 32)) | (1 << (GoParser.RECEIVE - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (GoParser.DECIMAL_LIT - 64)) | (1 << (GoParser.OCTAL_LIT - 64)) | (1 << (GoParser.HEX_LIT - 64)) | (1 << (GoParser.FLOAT_LIT - 64)) | (1 << (GoParser.IMAGINARY_LIT - 64)) | (1 << (GoParser.RUNE_LIT - 64)) | (1 << (GoParser.RAW_STRING_LIT - 64)) | (1 << (GoParser.INTERPRETED_STRING_LIT - 64)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 38, GoParser.RULE_statement);
		try {
			this.state = 374;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 359;
				this.declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 360;
				this.labeledStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 361;
				this.simpleStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 362;
				this.goStmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 363;
				this.returnStmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 364;
				this.breakStmt();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 365;
				this.continueStmt();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 366;
				this.gotoStmt();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 367;
				this.fallthroughStmt();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 368;
				this.block();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 369;
				this.ifStmt();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 370;
				this.switchStmt();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 371;
				this.selectStmt();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 372;
				this.forStmt();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 373;
				this.deferStmt();
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
	public simpleStmt(): SimpleStmtContext {
		let _localctx: SimpleStmtContext = new SimpleStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, GoParser.RULE_simpleStmt);
		try {
			this.state = 382;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 376;
				this.sendStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 377;
				this.expressionStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 378;
				this.incDecStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 379;
				this.assignment();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 380;
				this.shortVarDecl();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 381;
				this.emptyStmt();
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
	public expressionStmt(): ExpressionStmtContext {
		let _localctx: ExpressionStmtContext = new ExpressionStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, GoParser.RULE_expressionStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 384;
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
	public sendStmt(): SendStmtContext {
		let _localctx: SendStmtContext = new SendStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, GoParser.RULE_sendStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 386;
			this.expression(0);
			this.state = 387;
			this.match(GoParser.RECEIVE);
			this.state = 388;
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
	public incDecStmt(): IncDecStmtContext {
		let _localctx: IncDecStmtContext = new IncDecStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, GoParser.RULE_incDecStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 390;
			this.expression(0);
			this.state = 391;
			_la = this._input.LA(1);
			if (!(_la === GoParser.PLUS_PLUS || _la === GoParser.MINUS_MINUS)) {
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
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, GoParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 393;
			this.expressionList();
			this.state = 394;
			this.assign_op();
			this.state = 395;
			this.expressionList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assign_op(): Assign_opContext {
		let _localctx: Assign_opContext = new Assign_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, GoParser.RULE_assign_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 398;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (GoParser.OR - 51)) | (1 << (GoParser.DIV - 51)) | (1 << (GoParser.MOD - 51)) | (1 << (GoParser.LSHIFT - 51)) | (1 << (GoParser.RSHIFT - 51)) | (1 << (GoParser.BIT_CLEAR - 51)) | (1 << (GoParser.PLUS - 51)) | (1 << (GoParser.MINUS - 51)) | (1 << (GoParser.CARET - 51)) | (1 << (GoParser.STAR - 51)) | (1 << (GoParser.AMPERSAND - 51)))) !== 0)) {
				{
				this.state = 397;
				_la = this._input.LA(1);
				if (!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (GoParser.OR - 51)) | (1 << (GoParser.DIV - 51)) | (1 << (GoParser.MOD - 51)) | (1 << (GoParser.LSHIFT - 51)) | (1 << (GoParser.RSHIFT - 51)) | (1 << (GoParser.BIT_CLEAR - 51)) | (1 << (GoParser.PLUS - 51)) | (1 << (GoParser.MINUS - 51)) | (1 << (GoParser.CARET - 51)) | (1 << (GoParser.STAR - 51)) | (1 << (GoParser.AMPERSAND - 51)))) !== 0))) {
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

			this.state = 400;
			this.match(GoParser.ASSIGN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shortVarDecl(): ShortVarDeclContext {
		let _localctx: ShortVarDeclContext = new ShortVarDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, GoParser.RULE_shortVarDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 402;
			this.identifierList();
			this.state = 403;
			this.match(GoParser.DECLARE_ASSIGN);
			this.state = 404;
			this.expressionList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emptyStmt(): EmptyStmtContext {
		let _localctx: EmptyStmtContext = new EmptyStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, GoParser.RULE_emptyStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 406;
			this.match(GoParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public labeledStmt(): LabeledStmtContext {
		let _localctx: LabeledStmtContext = new LabeledStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, GoParser.RULE_labeledStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 408;
			this.match(GoParser.IDENTIFIER);
			this.state = 409;
			this.match(GoParser.COLON);
			this.state = 410;
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
	public returnStmt(): ReturnStmtContext {
		let _localctx: ReturnStmtContext = new ReturnStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, GoParser.RULE_returnStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 412;
			this.match(GoParser.RETURN);
			this.state = 414;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 413;
				this.expressionList();
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
	public breakStmt(): BreakStmtContext {
		let _localctx: BreakStmtContext = new BreakStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, GoParser.RULE_breakStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 416;
			this.match(GoParser.BREAK);
			this.state = 418;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				{
				this.state = 417;
				this.match(GoParser.IDENTIFIER);
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
	public continueStmt(): ContinueStmtContext {
		let _localctx: ContinueStmtContext = new ContinueStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, GoParser.RULE_continueStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 420;
			this.match(GoParser.CONTINUE);
			this.state = 422;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				this.state = 421;
				this.match(GoParser.IDENTIFIER);
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
	public gotoStmt(): GotoStmtContext {
		let _localctx: GotoStmtContext = new GotoStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, GoParser.RULE_gotoStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 424;
			this.match(GoParser.GOTO);
			this.state = 425;
			this.match(GoParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fallthroughStmt(): FallthroughStmtContext {
		let _localctx: FallthroughStmtContext = new FallthroughStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, GoParser.RULE_fallthroughStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 427;
			this.match(GoParser.FALLTHROUGH);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public deferStmt(): DeferStmtContext {
		let _localctx: DeferStmtContext = new DeferStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, GoParser.RULE_deferStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 429;
			this.match(GoParser.DEFER);
			this.state = 430;
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
	public ifStmt(): IfStmtContext {
		let _localctx: IfStmtContext = new IfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, GoParser.RULE_ifStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 432;
			this.match(GoParser.IF);
			this.state = 436;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 433;
				this.simpleStmt();
				this.state = 434;
				this.match(GoParser.SEMI);
				}
				break;
			}
			this.state = 438;
			this.expression(0);
			this.state = 439;
			this.block();
			this.state = 445;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				this.state = 440;
				this.match(GoParser.ELSE);
				this.state = 443;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case GoParser.IF:
					{
					this.state = 441;
					this.ifStmt();
					}
					break;
				case GoParser.L_CURLY:
					{
					this.state = 442;
					this.block();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
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
	public switchStmt(): SwitchStmtContext {
		let _localctx: SwitchStmtContext = new SwitchStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, GoParser.RULE_switchStmt);
		try {
			this.state = 449;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 447;
				this.exprSwitchStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 448;
				this.typeSwitchStmt();
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
	public exprSwitchStmt(): ExprSwitchStmtContext {
		let _localctx: ExprSwitchStmtContext = new ExprSwitchStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, GoParser.RULE_exprSwitchStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 451;
			this.match(GoParser.SWITCH);
			this.state = 455;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 452;
				this.simpleStmt();
				this.state = 453;
				this.match(GoParser.SEMI);
				}
				break;
			}
			this.state = 458;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (GoParser.FUNC - 3)) | (1 << (GoParser.INTERFACE - 3)) | (1 << (GoParser.MAP - 3)) | (1 << (GoParser.STRUCT - 3)) | (1 << (GoParser.CHAN - 3)) | (1 << (GoParser.NIL_LIT - 3)) | (1 << (GoParser.IDENTIFIER - 3)) | (1 << (GoParser.L_PAREN - 3)) | (1 << (GoParser.L_BRACKET - 3)))) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (GoParser.EXCLAMATION - 57)) | (1 << (GoParser.PLUS - 57)) | (1 << (GoParser.MINUS - 57)) | (1 << (GoParser.CARET - 57)) | (1 << (GoParser.STAR - 57)) | (1 << (GoParser.AMPERSAND - 57)) | (1 << (GoParser.RECEIVE - 57)) | (1 << (GoParser.DECIMAL_LIT - 57)) | (1 << (GoParser.OCTAL_LIT - 57)) | (1 << (GoParser.HEX_LIT - 57)) | (1 << (GoParser.FLOAT_LIT - 57)) | (1 << (GoParser.IMAGINARY_LIT - 57)) | (1 << (GoParser.RUNE_LIT - 57)) | (1 << (GoParser.RAW_STRING_LIT - 57)) | (1 << (GoParser.INTERPRETED_STRING_LIT - 57)))) !== 0)) {
				{
				this.state = 457;
				this.expression(0);
				}
			}

			this.state = 460;
			this.match(GoParser.L_CURLY);
			this.state = 464;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GoParser.DEFAULT || _la === GoParser.CASE) {
				{
				{
				this.state = 461;
				this.exprCaseClause();
				}
				}
				this.state = 466;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 467;
			this.match(GoParser.R_CURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exprCaseClause(): ExprCaseClauseContext {
		let _localctx: ExprCaseClauseContext = new ExprCaseClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, GoParser.RULE_exprCaseClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 469;
			this.exprSwitchCase();
			this.state = 470;
			this.match(GoParser.COLON);
			this.state = 472;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GoParser.BREAK) | (1 << GoParser.FUNC) | (1 << GoParser.INTERFACE) | (1 << GoParser.SELECT) | (1 << GoParser.DEFER) | (1 << GoParser.GO) | (1 << GoParser.MAP) | (1 << GoParser.STRUCT) | (1 << GoParser.CHAN) | (1 << GoParser.GOTO) | (1 << GoParser.SWITCH) | (1 << GoParser.CONST) | (1 << GoParser.FALLTHROUGH) | (1 << GoParser.IF) | (1 << GoParser.TYPE) | (1 << GoParser.CONTINUE) | (1 << GoParser.FOR) | (1 << GoParser.RETURN) | (1 << GoParser.VAR) | (1 << GoParser.NIL_LIT) | (1 << GoParser.IDENTIFIER) | (1 << GoParser.L_PAREN) | (1 << GoParser.L_CURLY))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (GoParser.L_BRACKET - 32)) | (1 << (GoParser.SEMI - 32)) | (1 << (GoParser.EXCLAMATION - 32)) | (1 << (GoParser.PLUS - 32)) | (1 << (GoParser.MINUS - 32)) | (1 << (GoParser.CARET - 32)) | (1 << (GoParser.STAR - 32)) | (1 << (GoParser.AMPERSAND - 32)) | (1 << (GoParser.RECEIVE - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (GoParser.DECIMAL_LIT - 64)) | (1 << (GoParser.OCTAL_LIT - 64)) | (1 << (GoParser.HEX_LIT - 64)) | (1 << (GoParser.FLOAT_LIT - 64)) | (1 << (GoParser.IMAGINARY_LIT - 64)) | (1 << (GoParser.RUNE_LIT - 64)) | (1 << (GoParser.RAW_STRING_LIT - 64)) | (1 << (GoParser.INTERPRETED_STRING_LIT - 64)))) !== 0)) {
				{
				this.state = 471;
				this.statementList();
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
	public exprSwitchCase(): ExprSwitchCaseContext {
		let _localctx: ExprSwitchCaseContext = new ExprSwitchCaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, GoParser.RULE_exprSwitchCase);
		try {
			this.state = 477;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GoParser.CASE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 474;
				this.match(GoParser.CASE);
				this.state = 475;
				this.expressionList();
				}
				break;
			case GoParser.DEFAULT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 476;
				this.match(GoParser.DEFAULT);
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
	public typeSwitchStmt(): TypeSwitchStmtContext {
		let _localctx: TypeSwitchStmtContext = new TypeSwitchStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, GoParser.RULE_typeSwitchStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 479;
			this.match(GoParser.SWITCH);
			this.state = 483;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				this.state = 480;
				this.simpleStmt();
				this.state = 481;
				this.match(GoParser.SEMI);
				}
				break;
			}
			this.state = 485;
			this.typeSwitchGuard();
			this.state = 486;
			this.match(GoParser.L_CURLY);
			this.state = 490;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GoParser.DEFAULT || _la === GoParser.CASE) {
				{
				{
				this.state = 487;
				this.typeCaseClause();
				}
				}
				this.state = 492;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 493;
			this.match(GoParser.R_CURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeSwitchGuard(): TypeSwitchGuardContext {
		let _localctx: TypeSwitchGuardContext = new TypeSwitchGuardContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, GoParser.RULE_typeSwitchGuard);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 497;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				{
				this.state = 495;
				this.match(GoParser.IDENTIFIER);
				this.state = 496;
				this.match(GoParser.DECLARE_ASSIGN);
				}
				break;
			}
			this.state = 499;
			this.primaryExpr(0);
			this.state = 500;
			this.match(GoParser.DOT);
			this.state = 501;
			this.match(GoParser.L_PAREN);
			this.state = 502;
			this.match(GoParser.TYPE);
			this.state = 503;
			this.match(GoParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeCaseClause(): TypeCaseClauseContext {
		let _localctx: TypeCaseClauseContext = new TypeCaseClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, GoParser.RULE_typeCaseClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 505;
			this.typeSwitchCase();
			this.state = 506;
			this.match(GoParser.COLON);
			this.state = 508;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GoParser.BREAK) | (1 << GoParser.FUNC) | (1 << GoParser.INTERFACE) | (1 << GoParser.SELECT) | (1 << GoParser.DEFER) | (1 << GoParser.GO) | (1 << GoParser.MAP) | (1 << GoParser.STRUCT) | (1 << GoParser.CHAN) | (1 << GoParser.GOTO) | (1 << GoParser.SWITCH) | (1 << GoParser.CONST) | (1 << GoParser.FALLTHROUGH) | (1 << GoParser.IF) | (1 << GoParser.TYPE) | (1 << GoParser.CONTINUE) | (1 << GoParser.FOR) | (1 << GoParser.RETURN) | (1 << GoParser.VAR) | (1 << GoParser.NIL_LIT) | (1 << GoParser.IDENTIFIER) | (1 << GoParser.L_PAREN) | (1 << GoParser.L_CURLY))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (GoParser.L_BRACKET - 32)) | (1 << (GoParser.SEMI - 32)) | (1 << (GoParser.EXCLAMATION - 32)) | (1 << (GoParser.PLUS - 32)) | (1 << (GoParser.MINUS - 32)) | (1 << (GoParser.CARET - 32)) | (1 << (GoParser.STAR - 32)) | (1 << (GoParser.AMPERSAND - 32)) | (1 << (GoParser.RECEIVE - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (GoParser.DECIMAL_LIT - 64)) | (1 << (GoParser.OCTAL_LIT - 64)) | (1 << (GoParser.HEX_LIT - 64)) | (1 << (GoParser.FLOAT_LIT - 64)) | (1 << (GoParser.IMAGINARY_LIT - 64)) | (1 << (GoParser.RUNE_LIT - 64)) | (1 << (GoParser.RAW_STRING_LIT - 64)) | (1 << (GoParser.INTERPRETED_STRING_LIT - 64)))) !== 0)) {
				{
				this.state = 507;
				this.statementList();
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
	public typeSwitchCase(): TypeSwitchCaseContext {
		let _localctx: TypeSwitchCaseContext = new TypeSwitchCaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, GoParser.RULE_typeSwitchCase);
		try {
			this.state = 513;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GoParser.CASE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 510;
				this.match(GoParser.CASE);
				this.state = 511;
				this.typeList();
				}
				break;
			case GoParser.DEFAULT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 512;
				this.match(GoParser.DEFAULT);
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
	public typeList(): TypeListContext {
		let _localctx: TypeListContext = new TypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, GoParser.RULE_typeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 517;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GoParser.FUNC:
			case GoParser.INTERFACE:
			case GoParser.MAP:
			case GoParser.STRUCT:
			case GoParser.CHAN:
			case GoParser.IDENTIFIER:
			case GoParser.L_PAREN:
			case GoParser.L_BRACKET:
			case GoParser.STAR:
			case GoParser.RECEIVE:
				{
				this.state = 515;
				this.type_();
				}
				break;
			case GoParser.NIL_LIT:
				{
				this.state = 516;
				this.match(GoParser.NIL_LIT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 526;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GoParser.COMMA) {
				{
				{
				this.state = 519;
				this.match(GoParser.COMMA);
				this.state = 522;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case GoParser.FUNC:
				case GoParser.INTERFACE:
				case GoParser.MAP:
				case GoParser.STRUCT:
				case GoParser.CHAN:
				case GoParser.IDENTIFIER:
				case GoParser.L_PAREN:
				case GoParser.L_BRACKET:
				case GoParser.STAR:
				case GoParser.RECEIVE:
					{
					this.state = 520;
					this.type_();
					}
					break;
				case GoParser.NIL_LIT:
					{
					this.state = 521;
					this.match(GoParser.NIL_LIT);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 528;
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
	public selectStmt(): SelectStmtContext {
		let _localctx: SelectStmtContext = new SelectStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, GoParser.RULE_selectStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 529;
			this.match(GoParser.SELECT);
			this.state = 530;
			this.match(GoParser.L_CURLY);
			this.state = 534;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GoParser.DEFAULT || _la === GoParser.CASE) {
				{
				{
				this.state = 531;
				this.commClause();
				}
				}
				this.state = 536;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 537;
			this.match(GoParser.R_CURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public commClause(): CommClauseContext {
		let _localctx: CommClauseContext = new CommClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, GoParser.RULE_commClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 539;
			this.commCase();
			this.state = 540;
			this.match(GoParser.COLON);
			this.state = 542;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GoParser.BREAK) | (1 << GoParser.FUNC) | (1 << GoParser.INTERFACE) | (1 << GoParser.SELECT) | (1 << GoParser.DEFER) | (1 << GoParser.GO) | (1 << GoParser.MAP) | (1 << GoParser.STRUCT) | (1 << GoParser.CHAN) | (1 << GoParser.GOTO) | (1 << GoParser.SWITCH) | (1 << GoParser.CONST) | (1 << GoParser.FALLTHROUGH) | (1 << GoParser.IF) | (1 << GoParser.TYPE) | (1 << GoParser.CONTINUE) | (1 << GoParser.FOR) | (1 << GoParser.RETURN) | (1 << GoParser.VAR) | (1 << GoParser.NIL_LIT) | (1 << GoParser.IDENTIFIER) | (1 << GoParser.L_PAREN) | (1 << GoParser.L_CURLY))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (GoParser.L_BRACKET - 32)) | (1 << (GoParser.SEMI - 32)) | (1 << (GoParser.EXCLAMATION - 32)) | (1 << (GoParser.PLUS - 32)) | (1 << (GoParser.MINUS - 32)) | (1 << (GoParser.CARET - 32)) | (1 << (GoParser.STAR - 32)) | (1 << (GoParser.AMPERSAND - 32)) | (1 << (GoParser.RECEIVE - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (GoParser.DECIMAL_LIT - 64)) | (1 << (GoParser.OCTAL_LIT - 64)) | (1 << (GoParser.HEX_LIT - 64)) | (1 << (GoParser.FLOAT_LIT - 64)) | (1 << (GoParser.IMAGINARY_LIT - 64)) | (1 << (GoParser.RUNE_LIT - 64)) | (1 << (GoParser.RAW_STRING_LIT - 64)) | (1 << (GoParser.INTERPRETED_STRING_LIT - 64)))) !== 0)) {
				{
				this.state = 541;
				this.statementList();
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
	public commCase(): CommCaseContext {
		let _localctx: CommCaseContext = new CommCaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, GoParser.RULE_commCase);
		try {
			this.state = 550;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GoParser.CASE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 544;
				this.match(GoParser.CASE);
				this.state = 547;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
				case 1:
					{
					this.state = 545;
					this.sendStmt();
					}
					break;

				case 2:
					{
					this.state = 546;
					this.recvStmt();
					}
					break;
				}
				}
				break;
			case GoParser.DEFAULT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 549;
				this.match(GoParser.DEFAULT);
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
	public recvStmt(): RecvStmtContext {
		let _localctx: RecvStmtContext = new RecvStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, GoParser.RULE_recvStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 558;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				{
				this.state = 552;
				this.expressionList();
				this.state = 553;
				this.match(GoParser.ASSIGN);
				}
				break;

			case 2:
				{
				this.state = 555;
				this.identifierList();
				this.state = 556;
				this.match(GoParser.DECLARE_ASSIGN);
				}
				break;
			}
			this.state = 560;
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
	public forStmt(): ForStmtContext {
		let _localctx: ForStmtContext = new ForStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, GoParser.RULE_forStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 562;
			this.match(GoParser.FOR);
			this.state = 566;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				{
				this.state = 563;
				this.expression(0);
				}
				break;

			case 2:
				{
				this.state = 564;
				this.forClause();
				}
				break;

			case 3:
				{
				this.state = 565;
				this.rangeClause();
				}
				break;
			}
			this.state = 568;
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
	public forClause(): ForClauseContext {
		let _localctx: ForClauseContext = new ForClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, GoParser.RULE_forClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 571;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				{
				this.state = 570;
				this.simpleStmt();
				}
				break;
			}
			this.state = 573;
			this.match(GoParser.SEMI);
			this.state = 575;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (GoParser.FUNC - 3)) | (1 << (GoParser.INTERFACE - 3)) | (1 << (GoParser.MAP - 3)) | (1 << (GoParser.STRUCT - 3)) | (1 << (GoParser.CHAN - 3)) | (1 << (GoParser.NIL_LIT - 3)) | (1 << (GoParser.IDENTIFIER - 3)) | (1 << (GoParser.L_PAREN - 3)) | (1 << (GoParser.L_BRACKET - 3)))) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (GoParser.EXCLAMATION - 57)) | (1 << (GoParser.PLUS - 57)) | (1 << (GoParser.MINUS - 57)) | (1 << (GoParser.CARET - 57)) | (1 << (GoParser.STAR - 57)) | (1 << (GoParser.AMPERSAND - 57)) | (1 << (GoParser.RECEIVE - 57)) | (1 << (GoParser.DECIMAL_LIT - 57)) | (1 << (GoParser.OCTAL_LIT - 57)) | (1 << (GoParser.HEX_LIT - 57)) | (1 << (GoParser.FLOAT_LIT - 57)) | (1 << (GoParser.IMAGINARY_LIT - 57)) | (1 << (GoParser.RUNE_LIT - 57)) | (1 << (GoParser.RAW_STRING_LIT - 57)) | (1 << (GoParser.INTERPRETED_STRING_LIT - 57)))) !== 0)) {
				{
				this.state = 574;
				this.expression(0);
				}
			}

			this.state = 577;
			this.match(GoParser.SEMI);
			this.state = 579;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GoParser.FUNC) | (1 << GoParser.INTERFACE) | (1 << GoParser.MAP) | (1 << GoParser.STRUCT) | (1 << GoParser.CHAN) | (1 << GoParser.NIL_LIT) | (1 << GoParser.IDENTIFIER) | (1 << GoParser.L_PAREN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (GoParser.L_BRACKET - 32)) | (1 << (GoParser.SEMI - 32)) | (1 << (GoParser.EXCLAMATION - 32)) | (1 << (GoParser.PLUS - 32)) | (1 << (GoParser.MINUS - 32)) | (1 << (GoParser.CARET - 32)) | (1 << (GoParser.STAR - 32)) | (1 << (GoParser.AMPERSAND - 32)) | (1 << (GoParser.RECEIVE - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (GoParser.DECIMAL_LIT - 64)) | (1 << (GoParser.OCTAL_LIT - 64)) | (1 << (GoParser.HEX_LIT - 64)) | (1 << (GoParser.FLOAT_LIT - 64)) | (1 << (GoParser.IMAGINARY_LIT - 64)) | (1 << (GoParser.RUNE_LIT - 64)) | (1 << (GoParser.RAW_STRING_LIT - 64)) | (1 << (GoParser.INTERPRETED_STRING_LIT - 64)))) !== 0)) {
				{
				this.state = 578;
				this.simpleStmt();
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
	public rangeClause(): RangeClauseContext {
		let _localctx: RangeClauseContext = new RangeClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, GoParser.RULE_rangeClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 587;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				{
				this.state = 581;
				this.expressionList();
				this.state = 582;
				this.match(GoParser.ASSIGN);
				}
				break;

			case 2:
				{
				this.state = 584;
				this.identifierList();
				this.state = 585;
				this.match(GoParser.DECLARE_ASSIGN);
				}
				break;
			}
			this.state = 589;
			this.match(GoParser.RANGE);
			this.state = 590;
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
	public goStmt(): GoStmtContext {
		let _localctx: GoStmtContext = new GoStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, GoParser.RULE_goStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 592;
			this.match(GoParser.GO);
			this.state = 593;
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
	public type_(): Type_Context {
		let _localctx: Type_Context = new Type_Context(this._ctx, this.state);
		this.enterRule(_localctx, 106, GoParser.RULE_type_);
		try {
			this.state = 601;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GoParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 595;
				this.typeName();
				}
				break;
			case GoParser.FUNC:
			case GoParser.INTERFACE:
			case GoParser.MAP:
			case GoParser.STRUCT:
			case GoParser.CHAN:
			case GoParser.L_BRACKET:
			case GoParser.STAR:
			case GoParser.RECEIVE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 596;
				this.typeLit();
				}
				break;
			case GoParser.L_PAREN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 597;
				this.match(GoParser.L_PAREN);
				this.state = 598;
				this.type_();
				this.state = 599;
				this.match(GoParser.R_PAREN);
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
	public typeName(): TypeNameContext {
		let _localctx: TypeNameContext = new TypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, GoParser.RULE_typeName);
		try {
			this.state = 605;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 603;
				this.match(GoParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 604;
				this.qualifiedIdent();
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
	public typeLit(): TypeLitContext {
		let _localctx: TypeLitContext = new TypeLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, GoParser.RULE_typeLit);
		try {
			this.state = 615;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 607;
				this.arrayType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 608;
				this.structType();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 609;
				this.pointerType();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 610;
				this.functionType();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 611;
				this.interfaceType();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 612;
				this.sliceType();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 613;
				this.mapType();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 614;
				this.channelType();
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
	public arrayType(): ArrayTypeContext {
		let _localctx: ArrayTypeContext = new ArrayTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, GoParser.RULE_arrayType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 617;
			this.match(GoParser.L_BRACKET);
			this.state = 618;
			this.arrayLength();
			this.state = 619;
			this.match(GoParser.R_BRACKET);
			this.state = 620;
			this.elementType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayLength(): ArrayLengthContext {
		let _localctx: ArrayLengthContext = new ArrayLengthContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, GoParser.RULE_arrayLength);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 622;
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
	public elementType(): ElementTypeContext {
		let _localctx: ElementTypeContext = new ElementTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, GoParser.RULE_elementType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 624;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pointerType(): PointerTypeContext {
		let _localctx: PointerTypeContext = new PointerTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, GoParser.RULE_pointerType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 626;
			this.match(GoParser.STAR);
			this.state = 627;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceType(): InterfaceTypeContext {
		let _localctx: InterfaceTypeContext = new InterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, GoParser.RULE_interfaceType);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 629;
			this.match(GoParser.INTERFACE);
			this.state = 630;
			this.match(GoParser.L_CURLY);
			this.state = 636;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 631;
					this.methodSpec();
					this.state = 632;
					this.eos();
					}
					}
				}
				this.state = 638;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			}
			this.state = 639;
			this.match(GoParser.R_CURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sliceType(): SliceTypeContext {
		let _localctx: SliceTypeContext = new SliceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, GoParser.RULE_sliceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 641;
			this.match(GoParser.L_BRACKET);
			this.state = 642;
			this.match(GoParser.R_BRACKET);
			this.state = 643;
			this.elementType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapType(): MapTypeContext {
		let _localctx: MapTypeContext = new MapTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, GoParser.RULE_mapType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 645;
			this.match(GoParser.MAP);
			this.state = 646;
			this.match(GoParser.L_BRACKET);
			this.state = 647;
			this.type_();
			this.state = 648;
			this.match(GoParser.R_BRACKET);
			this.state = 649;
			this.elementType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public channelType(): ChannelTypeContext {
		let _localctx: ChannelTypeContext = new ChannelTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, GoParser.RULE_channelType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 656;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				{
				this.state = 651;
				this.match(GoParser.CHAN);
				}
				break;

			case 2:
				{
				this.state = 652;
				this.match(GoParser.CHAN);
				this.state = 653;
				this.match(GoParser.RECEIVE);
				}
				break;

			case 3:
				{
				this.state = 654;
				this.match(GoParser.RECEIVE);
				this.state = 655;
				this.match(GoParser.CHAN);
				}
				break;
			}
			this.state = 658;
			this.elementType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodSpec(): MethodSpecContext {
		let _localctx: MethodSpecContext = new MethodSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, GoParser.RULE_methodSpec);
		try {
			this.state = 668;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 660;
				if (!(noTerminatorAfterParams(2))) {
					throw new FailedPredicateException(this, "noTerminatorAfterParams(2)");
				}
				this.state = 661;
				this.match(GoParser.IDENTIFIER);
				this.state = 662;
				this.parameters();
				this.state = 663;
				this.result();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 665;
				this.typeName();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 666;
				this.match(GoParser.IDENTIFIER);
				this.state = 667;
				this.parameters();
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
	public functionType(): FunctionTypeContext {
		let _localctx: FunctionTypeContext = new FunctionTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, GoParser.RULE_functionType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 670;
			this.match(GoParser.FUNC);
			this.state = 671;
			this.signature();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public signature(): SignatureContext {
		let _localctx: SignatureContext = new SignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, GoParser.RULE_signature);
		try {
			this.state = 678;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 673;
				if (!(noTerminatorAfterParams(1))) {
					throw new FailedPredicateException(this, "noTerminatorAfterParams(1)");
				}
				this.state = 674;
				this.parameters();
				this.state = 675;
				this.result();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 677;
				this.parameters();
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
	public result(): ResultContext {
		let _localctx: ResultContext = new ResultContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, GoParser.RULE_result);
		try {
			this.state = 682;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 680;
				this.parameters();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 681;
				this.type_();
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
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, GoParser.RULE_parameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 684;
			this.match(GoParser.L_PAREN);
			this.state = 696;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GoParser.FUNC) | (1 << GoParser.INTERFACE) | (1 << GoParser.MAP) | (1 << GoParser.STRUCT) | (1 << GoParser.CHAN) | (1 << GoParser.IDENTIFIER) | (1 << GoParser.L_PAREN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (GoParser.L_BRACKET - 32)) | (1 << (GoParser.ELLIPSIS - 32)) | (1 << (GoParser.STAR - 32)) | (1 << (GoParser.RECEIVE - 32)))) !== 0)) {
				{
				this.state = 685;
				this.parameterDecl();
				this.state = 690;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 686;
						this.match(GoParser.COMMA);
						this.state = 687;
						this.parameterDecl();
						}
						}
					}
					this.state = 692;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
				}
				this.state = 694;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === GoParser.COMMA) {
					{
					this.state = 693;
					this.match(GoParser.COMMA);
					}
				}

				}
			}

			this.state = 698;
			this.match(GoParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterDecl(): ParameterDeclContext {
		let _localctx: ParameterDeclContext = new ParameterDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, GoParser.RULE_parameterDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 701;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				{
				this.state = 700;
				this.identifierList();
				}
				break;
			}
			this.state = 704;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GoParser.ELLIPSIS) {
				{
				this.state = 703;
				this.match(GoParser.ELLIPSIS);
				}
			}

			this.state = 706;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		let _startState: number = 140;
		this.enterRecursionRule(_localctx, 140, GoParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 711;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				{
				this.state = 709;
				this.primaryExpr(0);
				}
				break;

			case 2:
				{
				this.state = 710;
				this.unaryExpr();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 730;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 728;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, GoParser.RULE_expression);
						this.state = 713;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 714;
						_la = this._input.LA(1);
						if (!(((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (GoParser.DIV - 52)) | (1 << (GoParser.MOD - 52)) | (1 << (GoParser.LSHIFT - 52)) | (1 << (GoParser.RSHIFT - 52)) | (1 << (GoParser.BIT_CLEAR - 52)) | (1 << (GoParser.STAR - 52)) | (1 << (GoParser.AMPERSAND - 52)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 715;
						this.expression(6);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, GoParser.RULE_expression);
						this.state = 716;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 717;
						_la = this._input.LA(1);
						if (!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (GoParser.OR - 51)) | (1 << (GoParser.PLUS - 51)) | (1 << (GoParser.MINUS - 51)) | (1 << (GoParser.CARET - 51)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 718;
						this.expression(5);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, GoParser.RULE_expression);
						this.state = 719;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 720;
						_la = this._input.LA(1);
						if (!(((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (GoParser.EQUALS - 45)) | (1 << (GoParser.NOT_EQUALS - 45)) | (1 << (GoParser.LESS - 45)) | (1 << (GoParser.LESS_OR_EQUALS - 45)) | (1 << (GoParser.GREATER - 45)) | (1 << (GoParser.GREATER_OR_EQUALS - 45)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 721;
						this.expression(4);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, GoParser.RULE_expression);
						this.state = 722;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 723;
						this.match(GoParser.LOGICAL_AND);
						this.state = 724;
						this.expression(3);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, GoParser.RULE_expression);
						this.state = 725;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 726;
						this.match(GoParser.LOGICAL_OR);
						this.state = 727;
						this.expression(2);
						}
						break;
					}
					}
				}
				this.state = 732;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
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

	public primaryExpr(): PrimaryExprContext;
	public primaryExpr(_p: number): PrimaryExprContext;
	// @RuleVersion(0)
	public primaryExpr(_p?: number): PrimaryExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PrimaryExprContext = new PrimaryExprContext(this._ctx, _parentState);
		let _prevctx: PrimaryExprContext = _localctx;
		let _startState: number = 142;
		this.enterRecursionRule(_localctx, 142, GoParser.RULE_primaryExpr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 736;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				{
				this.state = 734;
				this.operand();
				}
				break;

			case 2:
				{
				this.state = 735;
				this.conversion();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 749;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new PrimaryExprContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, GoParser.RULE_primaryExpr);
					this.state = 738;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 745;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
					case 1:
						{
						this.state = 739;
						this.match(GoParser.DOT);
						this.state = 740;
						this.match(GoParser.IDENTIFIER);
						}
						break;

					case 2:
						{
						this.state = 741;
						this.index();
						}
						break;

					case 3:
						{
						this.state = 742;
						this.slice();
						}
						break;

					case 4:
						{
						this.state = 743;
						this.typeAssertion();
						}
						break;

					case 5:
						{
						this.state = 744;
						this.arguments();
						}
						break;
					}
					}
					}
				}
				this.state = 751;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
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
	public unaryExpr(): UnaryExprContext {
		let _localctx: UnaryExprContext = new UnaryExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, GoParser.RULE_unaryExpr);
		let _la: number;
		try {
			this.state = 755;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 752;
				this.primaryExpr(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 753;
				_la = this._input.LA(1);
				if (!(((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (GoParser.EXCLAMATION - 57)) | (1 << (GoParser.PLUS - 57)) | (1 << (GoParser.MINUS - 57)) | (1 << (GoParser.CARET - 57)) | (1 << (GoParser.STAR - 57)) | (1 << (GoParser.AMPERSAND - 57)) | (1 << (GoParser.RECEIVE - 57)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 754;
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
	public conversion(): ConversionContext {
		let _localctx: ConversionContext = new ConversionContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, GoParser.RULE_conversion);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 757;
			this.type_();
			this.state = 758;
			this.match(GoParser.L_PAREN);
			this.state = 759;
			this.expression(0);
			this.state = 761;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GoParser.COMMA) {
				{
				this.state = 760;
				this.match(GoParser.COMMA);
				}
			}

			this.state = 763;
			this.match(GoParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operand(): OperandContext {
		let _localctx: OperandContext = new OperandContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, GoParser.RULE_operand);
		try {
			this.state = 772;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 765;
				this.literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 766;
				this.operandName();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 767;
				this.methodExpr();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 768;
				this.match(GoParser.L_PAREN);
				this.state = 769;
				this.expression(0);
				this.state = 770;
				this.match(GoParser.R_PAREN);
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
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, GoParser.RULE_literal);
		try {
			this.state = 777;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GoParser.NIL_LIT:
			case GoParser.DECIMAL_LIT:
			case GoParser.OCTAL_LIT:
			case GoParser.HEX_LIT:
			case GoParser.FLOAT_LIT:
			case GoParser.IMAGINARY_LIT:
			case GoParser.RUNE_LIT:
			case GoParser.RAW_STRING_LIT:
			case GoParser.INTERPRETED_STRING_LIT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 774;
				this.basicLit();
				}
				break;
			case GoParser.MAP:
			case GoParser.STRUCT:
			case GoParser.IDENTIFIER:
			case GoParser.L_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 775;
				this.compositeLit();
				}
				break;
			case GoParser.FUNC:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 776;
				this.functionLit();
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
	public basicLit(): BasicLitContext {
		let _localctx: BasicLitContext = new BasicLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, GoParser.RULE_basicLit);
		try {
			this.state = 785;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 779;
				this.match(GoParser.NIL_LIT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 780;
				this.integer();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 781;
				this.string_();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 782;
				this.match(GoParser.FLOAT_LIT);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 783;
				this.match(GoParser.IMAGINARY_LIT);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 784;
				this.match(GoParser.RUNE_LIT);
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
	public integer(): IntegerContext {
		let _localctx: IntegerContext = new IntegerContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, GoParser.RULE_integer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 787;
			_la = this._input.LA(1);
			if (!(((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (GoParser.DECIMAL_LIT - 64)) | (1 << (GoParser.OCTAL_LIT - 64)) | (1 << (GoParser.HEX_LIT - 64)) | (1 << (GoParser.IMAGINARY_LIT - 64)) | (1 << (GoParser.RUNE_LIT - 64)))) !== 0))) {
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
	public operandName(): OperandNameContext {
		let _localctx: OperandNameContext = new OperandNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, GoParser.RULE_operandName);
		try {
			this.state = 791;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 789;
				this.match(GoParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 790;
				this.qualifiedIdent();
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
	public qualifiedIdent(): QualifiedIdentContext {
		let _localctx: QualifiedIdentContext = new QualifiedIdentContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, GoParser.RULE_qualifiedIdent);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 793;
			this.match(GoParser.IDENTIFIER);
			this.state = 794;
			this.match(GoParser.DOT);
			this.state = 795;
			this.match(GoParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compositeLit(): CompositeLitContext {
		let _localctx: CompositeLitContext = new CompositeLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, GoParser.RULE_compositeLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 797;
			this.literalType();
			this.state = 798;
			this.literalValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literalType(): LiteralTypeContext {
		let _localctx: LiteralTypeContext = new LiteralTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, GoParser.RULE_literalType);
		try {
			this.state = 809;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 800;
				this.structType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 801;
				this.arrayType();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 802;
				this.match(GoParser.L_BRACKET);
				this.state = 803;
				this.match(GoParser.ELLIPSIS);
				this.state = 804;
				this.match(GoParser.R_BRACKET);
				this.state = 805;
				this.elementType();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 806;
				this.sliceType();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 807;
				this.mapType();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 808;
				this.typeName();
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
	public literalValue(): LiteralValueContext {
		let _localctx: LiteralValueContext = new LiteralValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, GoParser.RULE_literalValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 811;
			this.match(GoParser.L_CURLY);
			this.state = 816;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (GoParser.FUNC - 3)) | (1 << (GoParser.INTERFACE - 3)) | (1 << (GoParser.MAP - 3)) | (1 << (GoParser.STRUCT - 3)) | (1 << (GoParser.CHAN - 3)) | (1 << (GoParser.NIL_LIT - 3)) | (1 << (GoParser.IDENTIFIER - 3)) | (1 << (GoParser.L_PAREN - 3)) | (1 << (GoParser.L_CURLY - 3)) | (1 << (GoParser.L_BRACKET - 3)))) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (GoParser.EXCLAMATION - 57)) | (1 << (GoParser.PLUS - 57)) | (1 << (GoParser.MINUS - 57)) | (1 << (GoParser.CARET - 57)) | (1 << (GoParser.STAR - 57)) | (1 << (GoParser.AMPERSAND - 57)) | (1 << (GoParser.RECEIVE - 57)) | (1 << (GoParser.DECIMAL_LIT - 57)) | (1 << (GoParser.OCTAL_LIT - 57)) | (1 << (GoParser.HEX_LIT - 57)) | (1 << (GoParser.FLOAT_LIT - 57)) | (1 << (GoParser.IMAGINARY_LIT - 57)) | (1 << (GoParser.RUNE_LIT - 57)) | (1 << (GoParser.RAW_STRING_LIT - 57)) | (1 << (GoParser.INTERPRETED_STRING_LIT - 57)))) !== 0)) {
				{
				this.state = 812;
				this.elementList();
				this.state = 814;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === GoParser.COMMA) {
					{
					this.state = 813;
					this.match(GoParser.COMMA);
					}
				}

				}
			}

			this.state = 818;
			this.match(GoParser.R_CURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementList(): ElementListContext {
		let _localctx: ElementListContext = new ElementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, GoParser.RULE_elementList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 820;
			this.keyedElement();
			this.state = 825;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 821;
					this.match(GoParser.COMMA);
					this.state = 822;
					this.keyedElement();
					}
					}
				}
				this.state = 827;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
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
	public keyedElement(): KeyedElementContext {
		let _localctx: KeyedElementContext = new KeyedElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, GoParser.RULE_keyedElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 831;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				{
				this.state = 828;
				this.key();
				this.state = 829;
				this.match(GoParser.COLON);
				}
				break;
			}
			this.state = 833;
			this.element();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public key(): KeyContext {
		let _localctx: KeyContext = new KeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, GoParser.RULE_key);
		try {
			this.state = 838;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 835;
				this.match(GoParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 836;
				this.expression(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 837;
				this.literalValue();
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
	public element(): ElementContext {
		let _localctx: ElementContext = new ElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, GoParser.RULE_element);
		try {
			this.state = 842;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GoParser.FUNC:
			case GoParser.INTERFACE:
			case GoParser.MAP:
			case GoParser.STRUCT:
			case GoParser.CHAN:
			case GoParser.NIL_LIT:
			case GoParser.IDENTIFIER:
			case GoParser.L_PAREN:
			case GoParser.L_BRACKET:
			case GoParser.EXCLAMATION:
			case GoParser.PLUS:
			case GoParser.MINUS:
			case GoParser.CARET:
			case GoParser.STAR:
			case GoParser.AMPERSAND:
			case GoParser.RECEIVE:
			case GoParser.DECIMAL_LIT:
			case GoParser.OCTAL_LIT:
			case GoParser.HEX_LIT:
			case GoParser.FLOAT_LIT:
			case GoParser.IMAGINARY_LIT:
			case GoParser.RUNE_LIT:
			case GoParser.RAW_STRING_LIT:
			case GoParser.INTERPRETED_STRING_LIT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 840;
				this.expression(0);
				}
				break;
			case GoParser.L_CURLY:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 841;
				this.literalValue();
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
	public structType(): StructTypeContext {
		let _localctx: StructTypeContext = new StructTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, GoParser.RULE_structType);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 844;
			this.match(GoParser.STRUCT);
			this.state = 845;
			this.match(GoParser.L_CURLY);
			this.state = 851;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 846;
					this.fieldDecl();
					this.state = 847;
					this.eos();
					}
					}
				}
				this.state = 853;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
			}
			this.state = 854;
			this.match(GoParser.R_CURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldDecl(): FieldDeclContext {
		let _localctx: FieldDeclContext = new FieldDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, GoParser.RULE_fieldDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 861;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				{
				this.state = 856;
				if (!(noTerminatorBetween(2))) {
					throw new FailedPredicateException(this, "noTerminatorBetween(2)");
				}
				this.state = 857;
				this.identifierList();
				this.state = 858;
				this.type_();
				}
				break;

			case 2:
				{
				this.state = 860;
				this.anonymousField();
				}
				break;
			}
			this.state = 864;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
			case 1:
				{
				this.state = 863;
				this.string_();
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
	public string_(): String_Context {
		let _localctx: String_Context = new String_Context(this._ctx, this.state);
		this.enterRule(_localctx, 178, GoParser.RULE_string_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 866;
			_la = this._input.LA(1);
			if (!(_la === GoParser.RAW_STRING_LIT || _la === GoParser.INTERPRETED_STRING_LIT)) {
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
	public anonymousField(): AnonymousFieldContext {
		let _localctx: AnonymousFieldContext = new AnonymousFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, GoParser.RULE_anonymousField);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 869;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GoParser.STAR) {
				{
				this.state = 868;
				this.match(GoParser.STAR);
				}
			}

			this.state = 871;
			this.typeName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionLit(): FunctionLitContext {
		let _localctx: FunctionLitContext = new FunctionLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, GoParser.RULE_functionLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 873;
			this.match(GoParser.FUNC);
			this.state = 874;
			this.signature();
			this.state = 875;
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
	public index(): IndexContext {
		let _localctx: IndexContext = new IndexContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, GoParser.RULE_index);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 877;
			this.match(GoParser.L_BRACKET);
			this.state = 878;
			this.expression(0);
			this.state = 879;
			this.match(GoParser.R_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public slice(): SliceContext {
		let _localctx: SliceContext = new SliceContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, GoParser.RULE_slice);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 881;
			this.match(GoParser.L_BRACKET);
			this.state = 897;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				{
				this.state = 883;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (GoParser.FUNC - 3)) | (1 << (GoParser.INTERFACE - 3)) | (1 << (GoParser.MAP - 3)) | (1 << (GoParser.STRUCT - 3)) | (1 << (GoParser.CHAN - 3)) | (1 << (GoParser.NIL_LIT - 3)) | (1 << (GoParser.IDENTIFIER - 3)) | (1 << (GoParser.L_PAREN - 3)) | (1 << (GoParser.L_BRACKET - 3)))) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (GoParser.EXCLAMATION - 57)) | (1 << (GoParser.PLUS - 57)) | (1 << (GoParser.MINUS - 57)) | (1 << (GoParser.CARET - 57)) | (1 << (GoParser.STAR - 57)) | (1 << (GoParser.AMPERSAND - 57)) | (1 << (GoParser.RECEIVE - 57)) | (1 << (GoParser.DECIMAL_LIT - 57)) | (1 << (GoParser.OCTAL_LIT - 57)) | (1 << (GoParser.HEX_LIT - 57)) | (1 << (GoParser.FLOAT_LIT - 57)) | (1 << (GoParser.IMAGINARY_LIT - 57)) | (1 << (GoParser.RUNE_LIT - 57)) | (1 << (GoParser.RAW_STRING_LIT - 57)) | (1 << (GoParser.INTERPRETED_STRING_LIT - 57)))) !== 0)) {
					{
					this.state = 882;
					this.expression(0);
					}
				}

				this.state = 885;
				this.match(GoParser.COLON);
				this.state = 887;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (GoParser.FUNC - 3)) | (1 << (GoParser.INTERFACE - 3)) | (1 << (GoParser.MAP - 3)) | (1 << (GoParser.STRUCT - 3)) | (1 << (GoParser.CHAN - 3)) | (1 << (GoParser.NIL_LIT - 3)) | (1 << (GoParser.IDENTIFIER - 3)) | (1 << (GoParser.L_PAREN - 3)) | (1 << (GoParser.L_BRACKET - 3)))) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (GoParser.EXCLAMATION - 57)) | (1 << (GoParser.PLUS - 57)) | (1 << (GoParser.MINUS - 57)) | (1 << (GoParser.CARET - 57)) | (1 << (GoParser.STAR - 57)) | (1 << (GoParser.AMPERSAND - 57)) | (1 << (GoParser.RECEIVE - 57)) | (1 << (GoParser.DECIMAL_LIT - 57)) | (1 << (GoParser.OCTAL_LIT - 57)) | (1 << (GoParser.HEX_LIT - 57)) | (1 << (GoParser.FLOAT_LIT - 57)) | (1 << (GoParser.IMAGINARY_LIT - 57)) | (1 << (GoParser.RUNE_LIT - 57)) | (1 << (GoParser.RAW_STRING_LIT - 57)) | (1 << (GoParser.INTERPRETED_STRING_LIT - 57)))) !== 0)) {
					{
					this.state = 886;
					this.expression(0);
					}
				}

				}
				break;

			case 2:
				{
				this.state = 890;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (GoParser.FUNC - 3)) | (1 << (GoParser.INTERFACE - 3)) | (1 << (GoParser.MAP - 3)) | (1 << (GoParser.STRUCT - 3)) | (1 << (GoParser.CHAN - 3)) | (1 << (GoParser.NIL_LIT - 3)) | (1 << (GoParser.IDENTIFIER - 3)) | (1 << (GoParser.L_PAREN - 3)) | (1 << (GoParser.L_BRACKET - 3)))) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (GoParser.EXCLAMATION - 57)) | (1 << (GoParser.PLUS - 57)) | (1 << (GoParser.MINUS - 57)) | (1 << (GoParser.CARET - 57)) | (1 << (GoParser.STAR - 57)) | (1 << (GoParser.AMPERSAND - 57)) | (1 << (GoParser.RECEIVE - 57)) | (1 << (GoParser.DECIMAL_LIT - 57)) | (1 << (GoParser.OCTAL_LIT - 57)) | (1 << (GoParser.HEX_LIT - 57)) | (1 << (GoParser.FLOAT_LIT - 57)) | (1 << (GoParser.IMAGINARY_LIT - 57)) | (1 << (GoParser.RUNE_LIT - 57)) | (1 << (GoParser.RAW_STRING_LIT - 57)) | (1 << (GoParser.INTERPRETED_STRING_LIT - 57)))) !== 0)) {
					{
					this.state = 889;
					this.expression(0);
					}
				}

				this.state = 892;
				this.match(GoParser.COLON);
				this.state = 893;
				this.expression(0);
				this.state = 894;
				this.match(GoParser.COLON);
				this.state = 895;
				this.expression(0);
				}
				break;
			}
			this.state = 899;
			this.match(GoParser.R_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeAssertion(): TypeAssertionContext {
		let _localctx: TypeAssertionContext = new TypeAssertionContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, GoParser.RULE_typeAssertion);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 901;
			this.match(GoParser.DOT);
			this.state = 902;
			this.match(GoParser.L_PAREN);
			this.state = 903;
			this.type_();
			this.state = 904;
			this.match(GoParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, GoParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 906;
			this.match(GoParser.L_PAREN);
			this.state = 921;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (GoParser.FUNC - 3)) | (1 << (GoParser.INTERFACE - 3)) | (1 << (GoParser.MAP - 3)) | (1 << (GoParser.STRUCT - 3)) | (1 << (GoParser.CHAN - 3)) | (1 << (GoParser.NIL_LIT - 3)) | (1 << (GoParser.IDENTIFIER - 3)) | (1 << (GoParser.L_PAREN - 3)) | (1 << (GoParser.L_BRACKET - 3)))) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (GoParser.EXCLAMATION - 57)) | (1 << (GoParser.PLUS - 57)) | (1 << (GoParser.MINUS - 57)) | (1 << (GoParser.CARET - 57)) | (1 << (GoParser.STAR - 57)) | (1 << (GoParser.AMPERSAND - 57)) | (1 << (GoParser.RECEIVE - 57)) | (1 << (GoParser.DECIMAL_LIT - 57)) | (1 << (GoParser.OCTAL_LIT - 57)) | (1 << (GoParser.HEX_LIT - 57)) | (1 << (GoParser.FLOAT_LIT - 57)) | (1 << (GoParser.IMAGINARY_LIT - 57)) | (1 << (GoParser.RUNE_LIT - 57)) | (1 << (GoParser.RAW_STRING_LIT - 57)) | (1 << (GoParser.INTERPRETED_STRING_LIT - 57)))) !== 0)) {
				{
				this.state = 913;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
				case 1:
					{
					this.state = 907;
					this.expressionList();
					}
					break;

				case 2:
					{
					this.state = 908;
					this.type_();
					this.state = 911;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
					case 1:
						{
						this.state = 909;
						this.match(GoParser.COMMA);
						this.state = 910;
						this.expressionList();
						}
						break;
					}
					}
					break;
				}
				this.state = 916;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === GoParser.ELLIPSIS) {
					{
					this.state = 915;
					this.match(GoParser.ELLIPSIS);
					}
				}

				this.state = 919;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === GoParser.COMMA) {
					{
					this.state = 918;
					this.match(GoParser.COMMA);
					}
				}

				}
			}

			this.state = 923;
			this.match(GoParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodExpr(): MethodExprContext {
		let _localctx: MethodExprContext = new MethodExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, GoParser.RULE_methodExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 925;
			this.receiverType();
			this.state = 926;
			this.match(GoParser.DOT);
			this.state = 927;
			this.match(GoParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public receiverType(): ReceiverTypeContext {
		let _localctx: ReceiverTypeContext = new ReceiverTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, GoParser.RULE_receiverType);
		try {
			this.state = 938;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GoParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 929;
				this.typeName();
				}
				break;
			case GoParser.L_PAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 930;
				this.match(GoParser.L_PAREN);
				this.state = 934;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case GoParser.STAR:
					{
					this.state = 931;
					this.match(GoParser.STAR);
					this.state = 932;
					this.typeName();
					}
					break;
				case GoParser.IDENTIFIER:
				case GoParser.L_PAREN:
					{
					this.state = 933;
					this.receiverType();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 936;
				this.match(GoParser.R_PAREN);
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
	public eos(): EosContext {
		let _localctx: EosContext = new EosContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, GoParser.RULE_eos);
		try {
			this.state = 944;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 940;
				this.match(GoParser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 941;
				this.match(GoParser.EOF);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 942;
				if (!(lineTerminatorAhead())) {
					throw new FailedPredicateException(this, "lineTerminatorAhead()");
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 943;
				if (!(checkPreviousTokenText("}"))) {
					throw new FailedPredicateException(this, "checkPreviousTokenText(\"}\")");
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 64:
			return this.methodSpec_sempred(_localctx as MethodSpecContext, predIndex);

		case 66:
			return this.signature_sempred(_localctx as SignatureContext, predIndex);

		case 70:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 71:
			return this.primaryExpr_sempred(_localctx as PrimaryExprContext, predIndex);

		case 88:
			return this.fieldDecl_sempred(_localctx as FieldDeclContext, predIndex);

		case 98:
			return this.eos_sempred(_localctx as EosContext, predIndex);
		}
		return true;
	}
	private methodSpec_sempred(_localctx: MethodSpecContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return noTerminatorAfterParams(2);
		}
		return true;
	}
	private signature_sempred(_localctx: SignatureContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return noTerminatorAfterParams(1);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 5);

		case 3:
			return this.precpred(this._ctx, 4);

		case 4:
			return this.precpred(this._ctx, 3);

		case 5:
			return this.precpred(this._ctx, 2);

		case 6:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private primaryExpr_sempred(_localctx: PrimaryExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private fieldDecl_sempred(_localctx: FieldDeclContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return noTerminatorBetween(2);
		}
		return true;
	}
	private eos_sempred(_localctx: EosContext, predIndex: number): boolean {
		switch (predIndex) {
		case 9:
			return lineTerminatorAhead();

		case 10:
			return checkPreviousTokenText("}");
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03M\u03B5\x04\x02" +
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
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x07\x02\xCE\n\x02\f\x02\x0E\x02\xD1\v\x02\x03\x02\x03\x02\x03\x02" +
		"\x05\x02\xD6\n\x02\x03\x02\x03\x02\x07\x02\xDA\n\x02\f\x02\x0E\x02\xDD" +
		"\v\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x07\x04\xE8\n\x04\f\x04\x0E\x04\xEB\v\x04\x03\x04\x05\x04\xEE" +
		"\n\x04\x03\x05\x05\x05\xF1\n\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07" +
		"\x03\x07\x03\x07\x05\x07\xFA\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b" +
		"\x07\b\u0102\n\b\f\b\x0E\b\u0105\v\b\x03\b\x05\b\u0108\n\b\x03\t\x03\t" +
		"\x05\t\u010C\n\t\x03\t\x03\t\x05\t\u0110\n\t\x03\n\x03\n\x03\n\x07\n\u0115" +
		"\n\n\f\n\x0E\n\u0118\v\n\x03\v\x03\v\x03\v\x07\v\u011D\n\v\f\v\x0E\v\u0120" +
		"\v\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\u0128\n\f\f\f\x0E\f\u012B" +
		"\v\f\x03\f\x05\f\u012E\n\f\x03\r\x03\r\x05\r\u0132\n\r\x03\r\x03\r\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u013A\n\x0E\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x05\x0F\u0141\n\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x07\x11\u014B\n\x11\f\x11\x0E\x11\u014E\v" +
		"\x11\x03\x11\x05\x11\u0151\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12" +
		"\u0157\n\x12\x03\x12\x03\x12\x05\x12\u015B\n\x12\x03\x13\x03\x13\x05\x13" +
		"\u015F\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x06\x14\u0166\n\x14" +
		"\r\x14\x0E\x14\u0167\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05" +
		"\x15\u0179\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16" +
		"\u0181\n\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03" +
		"\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x05\x1B\u0191\n\x1B" +
		"\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x05\x1F\u01A1\n\x1F\x03 \x03" +
		" \x05 \u01A5\n \x03!\x03!\x05!\u01A9\n!\x03\"\x03\"\x03\"\x03#\x03#\x03" +
		"$\x03$\x03$\x03%\x03%\x03%\x03%\x05%\u01B7\n%\x03%\x03%\x03%\x03%\x03" +
		"%\x05%\u01BE\n%\x05%\u01C0\n%\x03&\x03&\x05&\u01C4\n&\x03\'\x03\'\x03" +
		"\'\x03\'\x05\'\u01CA\n\'\x03\'\x05\'\u01CD\n\'\x03\'\x03\'\x07\'\u01D1" +
		"\n\'\f\'\x0E\'\u01D4\v\'\x03\'\x03\'\x03(\x03(\x03(\x05(\u01DB\n(\x03" +
		")\x03)\x03)\x05)\u01E0\n)\x03*\x03*\x03*\x03*\x05*\u01E6\n*\x03*\x03*" +
		"\x03*\x07*\u01EB\n*\f*\x0E*\u01EE\v*\x03*\x03*\x03+\x03+\x05+\u01F4\n" +
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x05,\u01FF\n,\x03-\x03" +
		"-\x03-\x05-\u0204\n-\x03.\x03.\x05.\u0208\n.\x03.\x03.\x03.\x05.\u020D" +
		"\n.\x07.\u020F\n.\f.\x0E.\u0212\v.\x03/\x03/\x03/\x07/\u0217\n/\f/\x0E" +
		"/\u021A\v/\x03/\x03/\x030\x030\x030\x050\u0221\n0\x031\x031\x031\x051" +
		"\u0226\n1\x031\x051\u0229\n1\x032\x032\x032\x032\x032\x032\x052\u0231" +
		"\n2\x032\x032\x033\x033\x033\x033\x053\u0239\n3\x033\x033\x034\x054\u023E" +
		"\n4\x034\x034\x054\u0242\n4\x034\x034\x054\u0246\n4\x035\x035\x035\x03" +
		"5\x035\x035\x055\u024E\n5\x035\x035\x035\x036\x036\x036\x037\x037\x03" +
		"7\x037\x037\x037\x057\u025C\n7\x038\x038\x058\u0260\n8\x039\x039\x039" +
		"\x039\x039\x039\x039\x039\x059\u026A\n9\x03:\x03:\x03:\x03:\x03:\x03;" +
		"\x03;\x03<\x03<\x03=\x03=\x03=\x03>\x03>\x03>\x03>\x03>\x07>\u027D\n>" +
		"\f>\x0E>\u0280\v>\x03>\x03>\x03?\x03?\x03?\x03?\x03@\x03@\x03@\x03@\x03" +
		"@\x03@\x03A\x03A\x03A\x03A\x03A\x05A\u0293\nA\x03A\x03A\x03B\x03B\x03" +
		"B\x03B\x03B\x03B\x03B\x03B\x05B\u029F\nB\x03C\x03C\x03C\x03D\x03D\x03" +
		"D\x03D\x03D\x05D\u02A9\nD\x03E\x03E\x05E\u02AD\nE\x03F\x03F\x03F\x03F" +
		"\x07F\u02B3\nF\fF\x0EF\u02B6\vF\x03F\x05F\u02B9\nF\x05F\u02BB\nF\x03F" +
		"\x03F\x03G\x05G\u02C0\nG\x03G\x05G\u02C3\nG\x03G\x03G\x03H\x03H\x03H\x05" +
		"H\u02CA\nH\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03" +
		"H\x03H\x03H\x03H\x07H\u02DB\nH\fH\x0EH\u02DE\vH\x03I\x03I\x03I\x05I\u02E3" +
		"\nI\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x05I\u02EC\nI\x07I\u02EE\nI\fI" +
		"\x0EI\u02F1\vI\x03J\x03J\x03J\x05J\u02F6\nJ\x03K\x03K\x03K\x03K\x05K\u02FC" +
		"\nK\x03K\x03K\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x05L\u0307\nL\x03M\x03" +
		"M\x03M\x05M\u030C\nM\x03N\x03N\x03N\x03N\x03N\x03N\x05N\u0314\nN\x03O" +
		"\x03O\x03P\x03P\x05P\u031A\nP\x03Q\x03Q\x03Q\x03Q\x03R\x03R\x03R\x03S" +
		"\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x05S\u032C\nS\x03T\x03T\x03T" +
		"\x05T\u0331\nT\x05T\u0333\nT\x03T\x03T\x03U\x03U\x03U\x07U\u033A\nU\f" +
		"U\x0EU\u033D\vU\x03V\x03V\x03V\x05V\u0342\nV\x03V\x03V\x03W\x03W\x03W" +
		"\x05W\u0349\nW\x03X\x03X\x05X\u034D\nX\x03Y\x03Y\x03Y\x03Y\x03Y\x07Y\u0354" +
		"\nY\fY\x0EY\u0357\vY\x03Y\x03Y\x03Z\x03Z\x03Z\x03Z\x03Z\x05Z\u0360\nZ" +
		"\x03Z\x05Z\u0363\nZ\x03[\x03[\x03\\\x05\\\u0368\n\\\x03\\\x03\\\x03]\x03" +
		"]\x03]\x03]\x03^\x03^\x03^\x03^\x03_\x03_\x05_\u0376\n_\x03_\x03_\x05" +
		"_\u037A\n_\x03_\x05_\u037D\n_\x03_\x03_\x03_\x03_\x03_\x05_\u0384\n_\x03" +
		"_\x03_\x03`\x03`\x03`\x03`\x03`\x03a\x03a\x03a\x03a\x03a\x05a\u0392\n" +
		"a\x05a\u0394\na\x03a\x05a\u0397\na\x03a\x05a\u039A\na\x05a\u039C\na\x03" +
		"a\x03a\x03b\x03b\x03b\x03b\x03c\x03c\x03c\x03c\x03c\x05c\u03A9\nc\x03" +
		"c\x03c\x05c\u03AD\nc\x03d\x03d\x03d\x03d\x05d\u03B3\nd\x03d\x02\x02\x04" +
		"\x8E\x90e\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
		"^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02" +
		"z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02" +
		"\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02" +
		"\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02" +
		"\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02" +
		"\xC4\x02\xC6\x02\x02\v\x04\x02\x1D\x1D((\x03\x02)*\x04\x025:<@\x04\x02" +
		"6:?@\x04\x0255<>\x03\x02/4\x03\x02;A\x04\x02BDFG\x03\x02HI\x02\u03EE\x02" +
		"\xC8\x03\x02\x02\x02\x04\xDE\x03\x02\x02\x02\x06\xE1\x03\x02\x02\x02\b" +
		"\xF0\x03\x02\x02\x02\n\xF4\x03\x02\x02\x02\f\xF9\x03\x02\x02\x02\x0E\xFB" +
		"\x03\x02\x02\x02\x10\u0109\x03\x02\x02\x02\x12\u0111\x03\x02\x02\x02\x14" +
		"\u0119\x03\x02\x02\x02\x16\u0121\x03\x02\x02\x02\x18\u012F\x03\x02\x02" +
		"\x02\x1A\u0135\x03\x02\x02\x02\x1C\u013B\x03\x02\x02\x02\x1E\u0142\x03" +
		"\x02\x02\x02 \u0144\x03\x02\x02\x02\"\u0152\x03\x02\x02\x02$\u015C\x03" +
		"\x02\x02\x02&\u0165\x03\x02\x02\x02(\u0178\x03\x02\x02\x02*\u0180\x03" +
		"\x02\x02\x02,\u0182\x03\x02\x02\x02.\u0184\x03\x02\x02\x020\u0188\x03" +
		"\x02\x02\x022\u018B\x03\x02\x02\x024\u0190\x03\x02\x02\x026\u0194\x03" +
		"\x02\x02\x028\u0198\x03\x02\x02\x02:\u019A\x03\x02\x02\x02<\u019E\x03" +
		"\x02\x02\x02>\u01A2\x03\x02\x02\x02@\u01A6\x03\x02\x02\x02B\u01AA\x03" +
		"\x02\x02\x02D\u01AD\x03\x02\x02\x02F\u01AF\x03\x02\x02\x02H\u01B2\x03" +
		"\x02\x02\x02J\u01C3\x03\x02\x02\x02L\u01C5\x03\x02\x02\x02N\u01D7\x03" +
		"\x02\x02\x02P\u01DF\x03\x02\x02\x02R\u01E1\x03\x02\x02\x02T\u01F3\x03" +
		"\x02\x02\x02V\u01FB\x03\x02\x02\x02X\u0203\x03\x02\x02\x02Z\u0207\x03" +
		"\x02\x02\x02\\\u0213\x03\x02\x02\x02^\u021D\x03\x02\x02\x02`\u0228\x03" +
		"\x02\x02\x02b\u0230\x03\x02\x02\x02d\u0234\x03\x02\x02\x02f\u023D\x03" +
		"\x02\x02\x02h\u024D\x03\x02\x02\x02j\u0252\x03\x02\x02\x02l\u025B\x03" +
		"\x02\x02\x02n\u025F\x03\x02\x02\x02p\u0269\x03\x02\x02\x02r\u026B\x03" +
		"\x02\x02\x02t\u0270\x03\x02\x02\x02v\u0272\x03\x02\x02\x02x\u0274\x03" +
		"\x02\x02\x02z\u0277\x03\x02\x02\x02|\u0283\x03\x02\x02\x02~\u0287\x03" +
		"\x02\x02\x02\x80\u0292\x03\x02\x02\x02\x82\u029E\x03\x02\x02\x02\x84\u02A0" +
		"\x03\x02\x02\x02\x86\u02A8\x03\x02\x02\x02\x88\u02AC\x03\x02\x02\x02\x8A" +
		"\u02AE\x03\x02\x02\x02\x8C\u02BF\x03\x02\x02\x02\x8E\u02C9\x03\x02\x02" +
		"\x02\x90\u02E2\x03\x02\x02\x02\x92\u02F5\x03\x02\x02\x02\x94\u02F7\x03" +
		"\x02\x02\x02\x96\u0306\x03\x02\x02\x02\x98\u030B\x03\x02\x02\x02\x9A\u0313" +
		"\x03\x02\x02\x02\x9C\u0315\x03\x02\x02\x02\x9E\u0319\x03\x02\x02\x02\xA0" +
		"\u031B\x03\x02\x02\x02\xA2\u031F\x03\x02\x02\x02\xA4\u032B\x03\x02\x02" +
		"\x02\xA6\u032D\x03\x02\x02\x02\xA8\u0336\x03\x02\x02\x02\xAA\u0341\x03" +
		"\x02\x02\x02\xAC\u0348\x03\x02\x02\x02\xAE\u034C\x03\x02\x02\x02\xB0\u034E" +
		"\x03\x02\x02\x02\xB2\u035F\x03\x02\x02\x02\xB4\u0364\x03\x02\x02\x02\xB6" +
		"\u0367\x03\x02\x02\x02\xB8\u036B\x03\x02\x02\x02\xBA\u036F\x03\x02\x02" +
		"\x02\xBC\u0373\x03\x02\x02\x02\xBE\u0387\x03\x02\x02\x02\xC0\u038C\x03" +
		"\x02\x02\x02\xC2\u039F\x03\x02\x02\x02\xC4\u03AC\x03\x02\x02\x02\xC6\u03B2" +
		"\x03\x02\x02\x02\xC8\xC9\x05\x04\x03\x02\xC9\xCF\x05\xC6d\x02\xCA\xCB" +
		"\x05\x06\x04\x02\xCB\xCC\x05\xC6d\x02\xCC\xCE\x03\x02\x02\x02\xCD\xCA" +
		"\x03\x02\x02\x02\xCE\xD1\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF\xD0" +
		"\x03\x02\x02\x02\xD0\xDB\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD2\xD6" +
		"\x05\x1A\x0E\x02\xD3\xD6\x05\x1C\x0F\x02\xD4\xD6\x05\f\x07\x02\xD5\xD2" +
		"\x03\x02\x02\x02\xD5\xD3\x03\x02\x02\x02\xD5\xD4\x03\x02\x02\x02\xD6\xD7" +
		"\x03\x02\x02\x02\xD7\xD8\x05\xC6d\x02\xD8\xDA\x03\x02\x02\x02\xD9\xD5" +
		"\x03\x02\x02\x02\xDA\xDD\x03\x02\x02\x02\xDB\xD9\x03\x02\x02\x02\xDB\xDC" +
		"\x03\x02\x02\x02\xDC\x03\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDE\xDF" +
		"\x07\x10\x02\x02\xDF\xE0\x07\x1D\x02\x02\xE0\x05\x03\x02\x02\x02\xE1\xED" +
		"\x07\x19\x02\x02\xE2\xEE\x05\b\x05\x02\xE3\xE9\x07\x1E\x02\x02\xE4\xE5" +
		"\x05\b\x05\x02\xE5\xE6\x05\xC6d\x02\xE6\xE8\x03\x02\x02\x02\xE7\xE4\x03" +
		"\x02\x02\x02\xE8\xEB\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02\xE9\xEA\x03" +
		"\x02\x02\x02\xEA\xEC\x03\x02\x02\x02\xEB\xE9\x03\x02\x02\x02\xEC\xEE\x07" +
		"\x1F\x02\x02\xED\xE2\x03\x02\x02\x02\xED\xE3\x03\x02\x02\x02\xEE\x07\x03" +
		"\x02\x02\x02\xEF\xF1\t\x02\x02\x02\xF0\xEF\x03\x02\x02\x02\xF0\xF1\x03" +
		"\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2\xF3\x05\n\x06\x02\xF3\t\x03\x02" +
		"\x02\x02\xF4\xF5\x05\xB4[\x02\xF5\v\x03\x02\x02\x02\xF6\xFA\x05\x0E\b" +
		"\x02\xF7\xFA\x05\x16\f\x02\xF8\xFA\x05 \x11\x02\xF9\xF6\x03\x02\x02\x02" +
		"\xF9\xF7\x03\x02\x02\x02\xF9\xF8\x03\x02\x02\x02\xFA\r\x03\x02\x02\x02" +
		"\xFB\u0107\x07\x12\x02\x02\xFC\u0108\x05\x10\t\x02\xFD\u0103\x07\x1E\x02" +
		"\x02\xFE\xFF\x05\x10\t\x02\xFF\u0100\x05\xC6d\x02\u0100\u0102\x03\x02" +
		"\x02\x02\u0101\xFE\x03\x02\x02\x02\u0102\u0105\x03\x02\x02\x02\u0103\u0101" +
		"\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104\u0106\x03\x02\x02\x02" +
		"\u0105\u0103\x03\x02\x02\x02\u0106\u0108\x07\x1F\x02\x02\u0107\xFC\x03" +
		"\x02\x02\x02\u0107\xFD\x03\x02\x02\x02\u0108\x0F\x03\x02\x02\x02\u0109" +
		"\u010F\x05\x12\n\x02\u010A\u010C\x05l7\x02\u010B\u010A\x03\x02\x02\x02" +
		"\u010B\u010C\x03\x02\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D\u010E\x07" +
		"$\x02\x02\u010E\u0110\x05\x14\v\x02\u010F\u010B\x03\x02\x02\x02\u010F" +
		"\u0110\x03\x02\x02\x02\u0110\x11\x03\x02\x02\x02\u0111\u0116\x07\x1D\x02" +
		"\x02\u0112\u0113\x07%\x02\x02\u0113\u0115\x07\x1D\x02\x02\u0114\u0112" +
		"\x03\x02\x02\x02\u0115\u0118\x03\x02\x02\x02\u0116\u0114\x03\x02\x02\x02" +
		"\u0116\u0117\x03\x02\x02\x02\u0117\x13\x03\x02\x02\x02\u0118\u0116\x03" +
		"\x02\x02\x02\u0119\u011E\x05\x8EH\x02\u011A\u011B\x07%\x02\x02\u011B\u011D" +
		"\x05\x8EH\x02\u011C\u011A\x03\x02\x02\x02\u011D\u0120\x03\x02\x02\x02" +
		"\u011E\u011C\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F\x15\x03" +
		"\x02\x02\x02\u0120\u011E\x03\x02\x02\x02\u0121\u012D\x07\x16\x02\x02\u0122" +
		"\u012E\x05\x18\r\x02\u0123\u0129\x07\x1E\x02\x02\u0124\u0125\x05\x18\r" +
		"\x02\u0125\u0126\x05\xC6d\x02\u0126\u0128\x03\x02\x02\x02\u0127\u0124" +
		"\x03\x02\x02\x02\u0128\u012B\x03\x02\x02\x02\u0129\u0127\x03\x02\x02\x02" +
		"\u0129\u012A\x03\x02\x02\x02\u012A\u012C\x03\x02\x02\x02\u012B\u0129\x03" +
		"\x02\x02\x02\u012C\u012E\x07\x1F\x02\x02\u012D\u0122\x03\x02\x02\x02\u012D" +
		"\u0123\x03\x02\x02\x02\u012E\x17\x03\x02\x02\x02\u012F\u0131\x07\x1D\x02" +
		"\x02\u0130\u0132\x07$\x02\x02\u0131\u0130\x03\x02\x02\x02\u0131\u0132" +
		"\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133\u0134\x05l7\x02\u0134" +
		"\x19\x03\x02\x02\x02\u0135\u0136\x07\x05\x02\x02\u0136\u0137\x07\x1D\x02" +
		"\x02\u0137\u0139\x05\x86D\x02\u0138\u013A\x05$\x13\x02\u0139\u0138\x03" +
		"\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\x1B\x03\x02\x02\x02\u013B" +
		"\u013C\x07\x05\x02\x02\u013C\u013D\x05\x1E\x10\x02\u013D\u013E\x07\x1D" +
		"\x02\x02\u013E\u0140\x05\x86D\x02\u013F\u0141\x05$\x13\x02\u0140\u013F" +
		"\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141\x1D\x03\x02\x02\x02" +
		"\u0142\u0143\x05\x8AF\x02\u0143\x1F\x03\x02\x02\x02\u0144\u0150\x07\x1B" +
		"\x02\x02\u0145\u0151\x05\"\x12\x02\u0146\u014C\x07\x1E\x02\x02\u0147\u0148" +
		"\x05\"\x12\x02\u0148\u0149\x05\xC6d\x02\u0149\u014B\x03\x02\x02\x02\u014A" +
		"\u0147\x03\x02\x02\x02\u014B\u014E\x03\x02\x02\x02\u014C\u014A\x03\x02" +
		"\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D\u014F\x03\x02\x02\x02\u014E" +
		"\u014C\x03\x02\x02\x02\u014F\u0151\x07\x1F\x02\x02\u0150\u0145\x03\x02" +
		"\x02\x02\u0150\u0146\x03\x02\x02\x02\u0151!\x03\x02\x02\x02\u0152\u015A" +
		"\x05\x12\n\x02\u0153\u0156\x05l7\x02\u0154\u0155\x07$\x02\x02\u0155\u0157" +
		"\x05\x14\v\x02\u0156\u0154\x03\x02\x02\x02\u0156\u0157\x03\x02\x02\x02" +
		"\u0157\u015B\x03\x02\x02\x02\u0158\u0159\x07$\x02\x02\u0159\u015B\x05" +
		"\x14\v\x02\u015A\u0153\x03\x02\x02\x02\u015A\u0158\x03\x02\x02\x02\u015B" +
		"#\x03\x02\x02\x02\u015C\u015E\x07 \x02\x02\u015D\u015F\x05&\x14\x02\u015E" +
		"\u015D\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F\u0160\x03\x02" +
		"\x02\x02\u0160\u0161\x07!\x02\x02\u0161%\x03\x02\x02\x02\u0162\u0163\x05" +
		"(\x15\x02\u0163\u0164\x05\xC6d\x02\u0164\u0166\x03\x02\x02\x02\u0165\u0162" +
		"\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167\u0165\x03\x02\x02\x02" +
		"\u0167\u0168\x03\x02\x02\x02\u0168\'\x03\x02\x02\x02\u0169\u0179\x05\f" +
		"\x07\x02\u016A\u0179\x05:\x1E\x02\u016B\u0179\x05*\x16\x02\u016C\u0179" +
		"\x05j6\x02\u016D\u0179\x05<\x1F\x02\u016E\u0179\x05> \x02\u016F\u0179" +
		"\x05@!\x02\u0170\u0179\x05B\"\x02\u0171\u0179\x05D#\x02\u0172\u0179\x05" +
		"$\x13\x02\u0173\u0179\x05H%\x02\u0174\u0179\x05J&\x02\u0175\u0179\x05" +
		"\\/\x02\u0176\u0179\x05d3\x02\u0177\u0179\x05F$\x02\u0178\u0169\x03\x02" +
		"\x02\x02\u0178\u016A\x03\x02\x02\x02\u0178\u016B\x03\x02\x02\x02\u0178" +
		"\u016C\x03\x02\x02\x02\u0178\u016D\x03\x02\x02\x02\u0178\u016E\x03\x02" +
		"\x02\x02\u0178\u016F\x03\x02\x02\x02\u0178\u0170\x03\x02\x02\x02\u0178" +
		"\u0171\x03\x02\x02\x02\u0178\u0172\x03\x02\x02\x02\u0178\u0173\x03\x02" +
		"\x02\x02\u0178\u0174\x03\x02\x02\x02\u0178\u0175\x03\x02\x02\x02\u0178" +
		"\u0176\x03\x02\x02\x02\u0178\u0177\x03\x02\x02\x02\u0179)\x03\x02\x02" +
		"\x02\u017A\u0181\x05.\x18\x02\u017B\u0181\x05,\x17\x02\u017C\u0181\x05" +
		"0\x19\x02\u017D\u0181\x052\x1A\x02\u017E\u0181\x056\x1C\x02\u017F\u0181" +
		"\x058\x1D\x02\u0180\u017A\x03\x02\x02\x02\u0180\u017B\x03\x02\x02\x02" +
		"\u0180\u017C\x03\x02\x02\x02\u0180\u017D\x03\x02\x02\x02\u0180\u017E\x03" +
		"\x02\x02\x02\u0180\u017F\x03\x02\x02\x02\u0181+\x03\x02\x02\x02\u0182" +
		"\u0183\x05\x8EH\x02\u0183-\x03\x02\x02\x02\u0184\u0185\x05\x8EH\x02\u0185" +
		"\u0186\x07A\x02\x02\u0186\u0187\x05\x8EH\x02\u0187/\x03\x02\x02\x02\u0188" +
		"\u0189\x05\x8EH\x02\u0189\u018A\t\x03\x02\x02\u018A1\x03\x02\x02\x02\u018B" +
		"\u018C\x05\x14\v\x02\u018C\u018D\x054\x1B\x02\u018D\u018E\x05\x14\v\x02" +
		"\u018E3\x03\x02\x02\x02\u018F\u0191\t\x04\x02\x02\u0190\u018F\x03\x02" +
		"\x02\x02\u0190\u0191\x03\x02\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192" +
		"\u0193\x07$\x02\x02\u01935\x03\x02\x02\x02\u0194\u0195\x05\x12\n\x02\u0195" +
		"\u0196\x07+\x02\x02\u0196\u0197\x05\x14\v\x02\u01977\x03\x02\x02\x02\u0198" +
		"\u0199\x07&\x02\x02\u01999\x03\x02\x02\x02\u019A\u019B\x07\x1D\x02\x02" +
		"\u019B\u019C\x07\'\x02\x02\u019C\u019D\x05(\x15\x02\u019D;\x03\x02\x02" +
		"\x02\u019E\u01A0\x07\x1A\x02\x02\u019F\u01A1\x05\x14\v\x02\u01A0\u019F" +
		"\x03\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02\u01A1=\x03\x02\x02\x02\u01A2" +
		"\u01A4\x07\x03\x02\x02\u01A3\u01A5\x07\x1D\x02\x02\u01A4\u01A3\x03\x02" +
		"\x02\x02\u01A4\u01A5\x03\x02\x02\x02\u01A5?\x03\x02\x02\x02\u01A6\u01A8" +
		"\x07\x17\x02\x02\u01A7\u01A9\x07\x1D\x02\x02\u01A8\u01A7\x03\x02\x02\x02" +
		"\u01A8\u01A9\x03\x02\x02\x02\u01A9A\x03\x02\x02\x02\u01AA\u01AB\x07\x0F" +
		"\x02\x02\u01AB\u01AC\x07\x1D\x02\x02\u01ACC\x03\x02\x02\x02\u01AD\u01AE" +
		"\x07\x13\x02\x02\u01AEE\x03\x02\x02\x02\u01AF\u01B0\x07\t\x02\x02\u01B0" +
		"\u01B1\x05\x8EH\x02\u01B1G\x03\x02\x02\x02\u01B2\u01B6\x07\x14\x02\x02" +
		"\u01B3\u01B4\x05*\x16\x02\u01B4\u01B5\x07&\x02\x02\u01B5\u01B7\x03\x02" +
		"\x02\x02\u01B6\u01B3\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7" +
		"\u01B8\x03\x02\x02\x02\u01B8\u01B9\x05\x8EH\x02\u01B9\u01BF\x05$\x13\x02" +
		"\u01BA\u01BD\x07\x0E\x02\x02\u01BB\u01BE\x05H%\x02\u01BC\u01BE\x05$\x13" +
		"\x02\u01BD\u01BB\x03\x02\x02\x02\u01BD\u01BC\x03\x02\x02\x02\u01BE\u01C0" +
		"\x03\x02\x02\x02\u01BF\u01BA\x03\x02\x02\x02\u01BF\u01C0\x03\x02\x02\x02" +
		"\u01C0I\x03\x02\x02\x02\u01C1\u01C4\x05L\'\x02\u01C2\u01C4\x05R*\x02\u01C3" +
		"\u01C1\x03\x02\x02\x02\u01C3\u01C2\x03\x02\x02\x02\u01C4K\x03\x02\x02" +
		"\x02\u01C5\u01C9\x07\x11\x02\x02\u01C6\u01C7\x05*\x16\x02\u01C7\u01C8" +
		"\x07&\x02\x02\u01C8\u01CA\x03\x02\x02\x02\u01C9\u01C6\x03\x02\x02\x02" +
		"\u01C9\u01CA\x03\x02\x02\x02\u01CA\u01CC\x03\x02\x02\x02\u01CB\u01CD\x05" +
		"\x8EH\x02\u01CC\u01CB\x03\x02\x02\x02\u01CC\u01CD\x03\x02\x02\x02\u01CD" +
		"\u01CE\x03\x02\x02\x02\u01CE\u01D2\x07 \x02\x02\u01CF\u01D1\x05N(\x02" +
		"\u01D0\u01CF\x03\x02\x02\x02\u01D1\u01D4\x03\x02\x02\x02\u01D2\u01D0\x03" +
		"\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3\u01D5\x03\x02\x02\x02\u01D4" +
		"\u01D2\x03\x02\x02\x02\u01D5\u01D6\x07!\x02\x02\u01D6M\x03\x02\x02\x02" +
		"\u01D7\u01D8\x05P)\x02\u01D8\u01DA\x07\'\x02\x02\u01D9\u01DB\x05&\x14" +
		"\x02\u01DA\u01D9\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DBO\x03" +
		"\x02\x02\x02\u01DC\u01DD\x07\b\x02\x02\u01DD\u01E0\x05\x14\v\x02\u01DE" +
		"\u01E0\x07\x04\x02\x02\u01DF\u01DC\x03\x02\x02\x02\u01DF\u01DE\x03\x02" +
		"\x02\x02\u01E0Q\x03\x02\x02\x02\u01E1\u01E5\x07\x11\x02\x02\u01E2\u01E3" +
		"\x05*\x16\x02\u01E3\u01E4\x07&\x02\x02\u01E4\u01E6\x03\x02\x02\x02\u01E5" +
		"\u01E2\x03\x02\x02\x02\u01E5\u01E6\x03\x02\x02\x02\u01E6\u01E7\x03\x02" +
		"\x02\x02\u01E7\u01E8\x05T+\x02\u01E8\u01EC\x07 \x02\x02\u01E9\u01EB\x05" +
		"V,\x02\u01EA\u01E9\x03\x02\x02\x02\u01EB\u01EE\x03\x02\x02\x02\u01EC\u01EA" +
		"\x03\x02\x02\x02\u01EC\u01ED\x03\x02\x02\x02\u01ED\u01EF\x03\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\u01EE\u01EC\x03\x02\x02\x02\u01EF\u01F0\x07!\x02\x02\u01F0S\x03\x02" +
		"\x02\x02\u01F1\u01F2\x07\x1D\x02\x02\u01F2\u01F4\x07+\x02\x02\u01F3\u01F1" +
		"\x03\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4\u01F5\x03\x02\x02\x02" +
		"\u01F5\u01F6\x05\x90I\x02\u01F6\u01F7\x07(\x02\x02\u01F7\u01F8\x07\x1E" +
		"\x02\x02\u01F8\u01F9\x07\x16\x02\x02\u01F9\u01FA\x07\x1F\x02\x02\u01FA" +
		"U\x03\x02\x02\x02\u01FB\u01FC\x05X-\x02\u01FC\u01FE\x07\'\x02\x02\u01FD" +
		"\u01FF\x05&\x14\x02\u01FE\u01FD\x03\x02\x02\x02\u01FE\u01FF\x03\x02\x02" +
		"\x02\u01FFW\x03\x02\x02\x02\u0200\u0201\x07\b\x02\x02\u0201\u0204\x05" +
		"Z.\x02\u0202\u0204\x07\x04\x02\x02\u0203\u0200\x03\x02\x02\x02\u0203\u0202" +
		"\x03\x02\x02\x02\u0204Y\x03\x02\x02\x02\u0205\u0208\x05l7\x02\u0206\u0208" +
		"\x07\x1C\x02\x02\u0207\u0205\x03\x02\x02\x02\u0207\u0206\x03\x02\x02\x02" +
		"\u0208\u0210\x03\x02\x02\x02\u0209\u020C\x07%\x02\x02\u020A\u020D\x05" +
		"l7\x02\u020B\u020D\x07\x1C\x02\x02\u020C\u020A\x03\x02\x02\x02\u020C\u020B" +
		"\x03\x02\x02\x02\u020D\u020F\x03\x02\x02\x02\u020E\u0209\x03\x02\x02\x02" +
		"\u020F\u0212\x03\x02\x02\x02\u0210\u020E\x03\x02\x02\x02\u0210\u0211\x03" +
		"\x02\x02\x02\u0211[\x03\x02\x02\x02\u0212\u0210\x03\x02\x02\x02\u0213" +
		"\u0214\x07\x07\x02\x02\u0214\u0218\x07 \x02\x02\u0215\u0217\x05^0\x02" +
		"\u0216\u0215\x03\x02\x02\x02\u0217\u021A\x03\x02\x02\x02\u0218\u0216\x03" +
		"\x02\x02\x02\u0218\u0219\x03\x02\x02\x02\u0219\u021B\x03\x02\x02\x02\u021A" +
		"\u0218\x03\x02\x02\x02\u021B\u021C\x07!\x02\x02\u021C]\x03\x02\x02\x02" +
		"\u021D\u021E\x05`1\x02\u021E\u0220\x07\'\x02\x02\u021F\u0221\x05&\x14" +
		"\x02\u0220\u021F\x03\x02\x02\x02\u0220\u0221\x03\x02\x02\x02\u0221_\x03" +
		"\x02\x02\x02\u0222\u0225\x07\b\x02\x02\u0223\u0226\x05.\x18\x02\u0224" +
		"\u0226\x05b2\x02\u0225\u0223\x03\x02\x02\x02\u0225\u0224\x03\x02\x02\x02" +
		"\u0226\u0229\x03\x02\x02\x02\u0227\u0229\x07\x04\x02\x02\u0228\u0222\x03" +
		"\x02\x02\x02\u0228\u0227\x03\x02\x02\x02\u0229a\x03\x02\x02\x02\u022A" +
		"\u022B\x05\x14\v\x02\u022B\u022C\x07$\x02\x02\u022C\u0231\x03\x02\x02" +
		"\x02\u022D\u022E\x05\x12\n\x02\u022E\u022F\x07+\x02\x02\u022F\u0231\x03" +
		"\x02\x02\x02\u0230\u022A\x03\x02\x02\x02\u0230\u022D\x03\x02\x02\x02\u0230" +
		"\u0231\x03\x02\x02\x02\u0231\u0232\x03\x02\x02\x02\u0232\u0233\x05\x8E" +
		"H\x02\u0233c\x03\x02\x02\x02\u0234\u0238\x07\x18\x02\x02\u0235\u0239\x05" +
		"\x8EH\x02\u0236\u0239\x05f4\x02\u0237\u0239\x05h5\x02\u0238\u0235\x03" +
		"\x02\x02\x02\u0238\u0236\x03\x02\x02\x02\u0238\u0237\x03\x02\x02\x02\u0238" +
		"\u0239\x03\x02\x02\x02\u0239\u023A\x03\x02\x02\x02\u023A\u023B\x05$\x13" +
		"\x02\u023Be\x03\x02\x02\x02\u023C\u023E\x05*\x16\x02\u023D\u023C\x03\x02" +
		"\x02\x02\u023D\u023E\x03\x02\x02\x02\u023E\u023F\x03\x02\x02\x02\u023F" +
		"\u0241\x07&\x02\x02\u0240\u0242\x05\x8EH\x02\u0241\u0240\x03\x02\x02\x02" +
		"\u0241\u0242\x03\x02\x02\x02\u0242\u0243\x03\x02\x02\x02\u0243\u0245\x07" +
		"&\x02\x02\u0244\u0246\x05*\x16\x02\u0245\u0244\x03\x02\x02\x02\u0245\u0246" +
		"\x03\x02\x02\x02\u0246g\x03\x02\x02\x02\u0247\u0248\x05\x14\v\x02\u0248" +
		"\u0249\x07$\x02\x02\u0249\u024E\x03\x02\x02\x02\u024A\u024B\x05\x12\n" +
		"\x02\u024B\u024C\x07+\x02\x02\u024C\u024E\x03\x02\x02\x02\u024D\u0247" +
		"\x03\x02\x02\x02\u024D\u024A\x03\x02\x02\x02\u024D\u024E\x03\x02\x02\x02" +
		"\u024E\u024F\x03\x02\x02\x02\u024F\u0250\x07\x15\x02\x02\u0250\u0251\x05" +
		"\x8EH\x02\u0251i\x03\x02\x02\x02\u0252\u0253\x07\n\x02\x02\u0253\u0254" +
		"\x05\x8EH\x02\u0254k\x03\x02\x02\x02\u0255\u025C\x05n8\x02\u0256\u025C" +
		"\x05p9\x02\u0257\u0258\x07\x1E\x02\x02\u0258\u0259\x05l7\x02\u0259\u025A" +
		"\x07\x1F\x02\x02\u025A\u025C\x03\x02\x02\x02\u025B\u0255\x03\x02\x02\x02" +
		"\u025B\u0256\x03\x02\x02\x02\u025B\u0257\x03\x02\x02\x02\u025Cm\x03\x02" +
		"\x02\x02\u025D\u0260\x07\x1D\x02\x02\u025E\u0260\x05\xA0Q\x02\u025F\u025D" +
		"\x03\x02\x02\x02\u025F\u025E\x03\x02\x02\x02\u0260o\x03\x02\x02\x02\u0261" +
		"\u026A\x05r:\x02\u0262\u026A\x05\xB0Y\x02\u0263\u026A\x05x=\x02\u0264" +
		"\u026A\x05\x84C\x02\u0265\u026A\x05z>\x02\u0266\u026A\x05|?\x02\u0267" +
		"\u026A\x05~@\x02\u0268\u026A\x05\x80A\x02\u0269\u0261\x03\x02\x02\x02" +
		"\u0269\u0262\x03\x02\x02\x02\u0269\u0263\x03\x02\x02\x02\u0269\u0264\x03" +
		"\x02\x02\x02\u0269\u0265\x03\x02\x02\x02\u0269\u0266\x03\x02\x02\x02\u0269" +
		"\u0267\x03\x02\x02\x02\u0269\u0268\x03\x02\x02\x02\u026Aq\x03\x02\x02" +
		"\x02\u026B\u026C\x07\"\x02\x02\u026C\u026D\x05t;\x02\u026D\u026E\x07#" +
		"\x02\x02\u026E\u026F\x05v<\x02\u026Fs\x03\x02\x02\x02\u0270\u0271\x05" +
		"\x8EH\x02\u0271u\x03\x02\x02\x02\u0272\u0273\x05l7\x02\u0273w\x03\x02" +
		"\x02\x02\u0274\u0275\x07?\x02\x02\u0275\u0276\x05l7\x02\u0276y\x03\x02" +
		"\x02\x02\u0277\u0278\x07\x06\x02\x02\u0278\u027E\x07 \x02\x02\u0279\u027A" +
		"\x05\x82B\x02\u027A\u027B\x05\xC6d\x02\u027B\u027D\x03\x02\x02\x02\u027C" +
		"\u0279\x03\x02\x02\x02\u027D\u0280\x03\x02\x02\x02\u027E\u027C\x03\x02" +
		"\x02\x02\u027E\u027F\x03\x02\x02\x02\u027F\u0281\x03\x02\x02\x02\u0280" +
		"\u027E\x03\x02\x02\x02\u0281\u0282\x07!\x02\x02\u0282{\x03\x02\x02\x02" +
		"\u0283\u0284\x07\"\x02\x02\u0284\u0285\x07#\x02\x02\u0285\u0286\x05v<" +
		"\x02\u0286}\x03\x02\x02\x02\u0287\u0288\x07\v\x02\x02\u0288\u0289\x07" +
		"\"\x02\x02\u0289\u028A\x05l7\x02\u028A\u028B\x07#\x02\x02\u028B\u028C" +
		"\x05v<\x02\u028C\x7F\x03\x02\x02\x02\u028D\u0293\x07\r\x02\x02\u028E\u028F" +
		"\x07\r\x02\x02\u028F\u0293\x07A\x02\x02\u0290\u0291\x07A\x02\x02\u0291" +
		"\u0293\x07\r\x02\x02\u0292\u028D\x03\x02\x02\x02\u0292\u028E\x03\x02\x02" +
		"\x02\u0292\u0290\x03\x02\x02\x02\u0293\u0294\x03\x02\x02\x02\u0294\u0295" +
		"\x05v<\x02\u0295\x81\x03\x02\x02\x02\u0296\u0297\x06B\x02\x02\u0297\u0298" +
		"\x07\x1D\x02\x02\u0298\u0299\x05\x8AF\x02\u0299\u029A\x05\x88E\x02\u029A" +
		"\u029F\x03\x02\x02\x02\u029B\u029F\x05n8\x02\u029C\u029D\x07\x1D\x02\x02" +
		"\u029D\u029F\x05\x8AF\x02\u029E\u0296\x03\x02\x02\x02\u029E\u029B\x03" +
		"\x02\x02\x02\u029E\u029C\x03\x02\x02\x02\u029F\x83\x03\x02\x02\x02\u02A0" +
		"\u02A1\x07\x05\x02\x02\u02A1\u02A2\x05\x86D\x02\u02A2\x85\x03\x02\x02" +
		"\x02\u02A3\u02A4\x06D\x03\x02\u02A4\u02A5\x05\x8AF\x02\u02A5\u02A6\x05" +
		"\x88E\x02\u02A6\u02A9\x03\x02\x02\x02\u02A7\u02A9\x05\x8AF\x02\u02A8\u02A3" +
		"\x03\x02\x02\x02\u02A8\u02A7\x03\x02\x02\x02\u02A9\x87\x03\x02\x02\x02" +
		"\u02AA\u02AD\x05\x8AF\x02\u02AB\u02AD\x05l7\x02\u02AC\u02AA\x03\x02\x02" +
		"\x02\u02AC\u02AB\x03\x02\x02\x02\u02AD\x89\x03\x02\x02\x02\u02AE\u02BA" +
		"\x07\x1E\x02\x02\u02AF\u02B4\x05\x8CG\x02\u02B0\u02B1\x07%\x02\x02\u02B1" +
		"\u02B3\x05\x8CG\x02\u02B2\u02B0\x03\x02\x02\x02\u02B3\u02B6\x03\x02\x02" +
		"\x02\u02B4\u02B2\x03\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5\u02B8" +
		"\x03\x02\x02\x02\u02B6\u02B4\x03\x02\x02\x02\u02B7\u02B9\x07%\x02\x02" +
		"\u02B8\u02B7\x03\x02\x02\x02\u02B8\u02B9\x03\x02\x02\x02\u02B9\u02BB\x03" +
		"\x02\x02\x02\u02BA\u02AF\x03\x02\x02\x02\u02BA\u02BB\x03\x02\x02\x02\u02BB" +
		"\u02BC\x03\x02\x02\x02\u02BC\u02BD\x07\x1F\x02\x02\u02BD\x8B\x03\x02\x02" +
		"\x02\u02BE\u02C0\x05\x12\n\x02\u02BF\u02BE\x03\x02\x02\x02\u02BF\u02C0" +
		"\x03\x02\x02\x02\u02C0\u02C2\x03\x02\x02\x02\u02C1\u02C3\x07,\x02\x02" +
		"\u02C2\u02C1\x03\x02\x02\x02\u02C2\u02C3\x03\x02\x02\x02\u02C3\u02C4\x03" +
		"\x02\x02\x02\u02C4\u02C5\x05l7\x02\u02C5\x8D\x03\x02\x02\x02\u02C6\u02C7" +
		"\bH\x01\x02\u02C7\u02CA\x05\x90I\x02\u02C8\u02CA\x05\x92J\x02\u02C9\u02C6" +
		"\x03\x02\x02\x02\u02C9\u02C8\x03\x02\x02\x02\u02CA\u02DC\x03\x02\x02\x02" +
		"\u02CB\u02CC\f\x07\x02\x02\u02CC\u02CD\t\x05\x02\x02\u02CD\u02DB\x05\x8E" +
		"H\b\u02CE\u02CF\f\x06\x02\x02\u02CF\u02D0\t\x06\x02\x02\u02D0\u02DB\x05" +
		"\x8EH\x07\u02D1\u02D2\f\x05\x02\x02\u02D2\u02D3\t\x07\x02\x02\u02D3\u02DB" +
		"\x05\x8EH\x06\u02D4\u02D5\f\x04\x02\x02\u02D5\u02D6\x07.\x02\x02\u02D6" +
		"\u02DB\x05\x8EH\x05\u02D7\u02D8\f\x03\x02\x02\u02D8\u02D9\x07-\x02\x02" +
		"\u02D9\u02DB\x05\x8EH\x04\u02DA\u02CB\x03\x02\x02\x02\u02DA\u02CE\x03" +
		"\x02\x02\x02\u02DA\u02D1\x03\x02\x02\x02\u02DA\u02D4\x03\x02\x02\x02\u02DA" +
		"\u02D7\x03\x02\x02\x02\u02DB\u02DE\x03\x02\x02\x02\u02DC\u02DA\x03\x02" +
		"\x02\x02\u02DC\u02DD\x03\x02\x02\x02\u02DD\x8F\x03\x02\x02\x02\u02DE\u02DC" +
		"\x03\x02\x02\x02\u02DF\u02E0\bI\x01\x02\u02E0\u02E3\x05\x96L\x02\u02E1" +
		"\u02E3\x05\x94K\x02\u02E2\u02DF\x03\x02\x02\x02\u02E2\u02E1\x03\x02\x02" +
		"\x02\u02E3\u02EF\x03\x02\x02\x02\u02E4\u02EB\f\x03\x02\x02\u02E5\u02E6" +
		"\x07(\x02\x02\u02E6\u02EC\x07\x1D\x02\x02\u02E7\u02EC\x05\xBA^\x02\u02E8" +
		"\u02EC\x05\xBC_\x02\u02E9\u02EC\x05\xBE`\x02\u02EA\u02EC\x05\xC0a\x02" +
		"\u02EB\u02E5\x03\x02\x02\x02\u02EB\u02E7\x03\x02\x02\x02\u02EB\u02E8\x03" +
		"\x02\x02\x02\u02EB\u02E9\x03\x02\x02\x02\u02EB\u02EA\x03\x02\x02\x02\u02EC" +
		"\u02EE\x03\x02\x02\x02\u02ED\u02E4\x03\x02\x02\x02\u02EE\u02F1\x03\x02" +
		"\x02\x02\u02EF\u02ED\x03\x02\x02\x02\u02EF\u02F0\x03\x02\x02\x02\u02F0" +
		"\x91\x03\x02\x02\x02\u02F1\u02EF\x03\x02\x02\x02\u02F2\u02F6\x05\x90I" +
		"\x02\u02F3\u02F4\t\b\x02\x02\u02F4\u02F6\x05\x8EH\x02\u02F5\u02F2\x03" +
		"\x02\x02\x02\u02F5\u02F3\x03\x02\x02\x02\u02F6\x93\x03\x02\x02\x02\u02F7" +
		"\u02F8\x05l7\x02\u02F8\u02F9\x07\x1E\x02\x02\u02F9\u02FB\x05\x8EH\x02" +
		"\u02FA\u02FC\x07%\x02\x02\u02FB\u02FA\x03\x02\x02\x02\u02FB\u02FC\x03" +
		"\x02\x02\x02\u02FC\u02FD\x03\x02\x02\x02\u02FD\u02FE\x07\x1F\x02\x02\u02FE" +
		"\x95\x03\x02\x02\x02\u02FF\u0307\x05\x98M\x02\u0300\u0307\x05\x9EP\x02" +
		"\u0301\u0307\x05\xC2b\x02\u0302\u0303\x07\x1E\x02\x02\u0303\u0304\x05" +
		"\x8EH\x02\u0304\u0305\x07\x1F\x02\x02\u0305\u0307\x03\x02\x02\x02\u0306" +
		"\u02FF\x03\x02\x02\x02\u0306\u0300\x03\x02\x02\x02\u0306\u0301\x03\x02" +
		"\x02\x02\u0306\u0302\x03\x02\x02\x02\u0307\x97\x03\x02\x02\x02\u0308\u030C" +
		"\x05\x9AN\x02\u0309\u030C\x05\xA2R\x02\u030A\u030C\x05\xB8]\x02\u030B" +
		"\u0308\x03\x02\x02\x02\u030B\u0309\x03\x02\x02\x02\u030B\u030A\x03\x02" +
		"\x02\x02\u030C\x99\x03\x02\x02\x02\u030D\u0314\x07\x1C\x02\x02\u030E\u0314" +
		"\x05\x9CO\x02\u030F\u0314\x05\xB4[\x02\u0310\u0314\x07E\x02\x02\u0311" +
		"\u0314\x07F\x02\x02\u0312\u0314\x07G\x02\x02\u0313\u030D\x03\x02\x02\x02" +
		"\u0313\u030E\x03\x02\x02\x02\u0313\u030F\x03\x02\x02\x02\u0313\u0310\x03" +
		"\x02\x02\x02\u0313\u0311\x03\x02\x02\x02\u0313\u0312\x03\x02\x02\x02\u0314" +
		"\x9B\x03\x02\x02\x02\u0315\u0316\t\t\x02\x02\u0316\x9D\x03\x02\x02\x02" +
		"\u0317\u031A\x07\x1D\x02\x02\u0318\u031A\x05\xA0Q\x02\u0319\u0317\x03" +
		"\x02\x02\x02\u0319\u0318\x03\x02\x02\x02\u031A\x9F\x03\x02\x02\x02\u031B" +
		"\u031C\x07\x1D\x02\x02\u031C\u031D\x07(\x02\x02\u031D\u031E\x07\x1D\x02" +
		"\x02\u031E\xA1\x03\x02\x02\x02\u031F\u0320\x05\xA4S\x02\u0320\u0321\x05" +
		"\xA6T\x02\u0321\xA3\x03\x02\x02\x02\u0322\u032C\x05\xB0Y\x02\u0323\u032C" +
		"\x05r:\x02\u0324\u0325\x07\"\x02\x02\u0325\u0326\x07,\x02\x02\u0326\u0327" +
		"\x07#\x02\x02\u0327\u032C\x05v<\x02\u0328\u032C\x05|?\x02\u0329\u032C" +
		"\x05~@\x02\u032A\u032C\x05n8\x02\u032B\u0322\x03\x02\x02\x02\u032B\u0323" +
		"\x03\x02\x02\x02\u032B\u0324\x03\x02\x02\x02\u032B\u0328\x03\x02\x02\x02" +
		"\u032B\u0329\x03\x02\x02\x02\u032B\u032A\x03\x02\x02\x02\u032C\xA5\x03" +
		"\x02\x02\x02\u032D\u0332\x07 \x02\x02\u032E\u0330\x05\xA8U\x02\u032F\u0331" +
		"\x07%\x02\x02\u0330\u032F\x03\x02\x02\x02\u0330\u0331\x03\x02\x02\x02" +
		"\u0331\u0333\x03\x02\x02\x02\u0332\u032E\x03\x02\x02\x02\u0332\u0333\x03" +
		"\x02\x02\x02\u0333\u0334\x03\x02\x02\x02\u0334\u0335\x07!\x02\x02\u0335" +
		"\xA7\x03\x02\x02\x02\u0336\u033B\x05\xAAV\x02\u0337\u0338\x07%\x02\x02" +
		"\u0338\u033A\x05\xAAV\x02\u0339\u0337\x03\x02\x02\x02\u033A\u033D\x03" +
		"\x02\x02\x02\u033B\u0339\x03\x02\x02\x02\u033B\u033C\x03\x02\x02\x02\u033C" +
		"\xA9\x03\x02\x02\x02\u033D\u033B\x03\x02\x02\x02\u033E\u033F\x05\xACW" +
		"\x02\u033F\u0340\x07\'\x02\x02\u0340\u0342\x03\x02\x02\x02\u0341\u033E" +
		"\x03\x02\x02\x02\u0341\u0342\x03\x02\x02\x02\u0342\u0343\x03\x02\x02\x02" +
		"\u0343\u0344\x05\xAEX\x02\u0344\xAB\x03\x02\x02\x02\u0345\u0349\x07\x1D" +
		"\x02\x02\u0346\u0349\x05\x8EH\x02\u0347\u0349\x05\xA6T\x02\u0348\u0345" +
		"\x03\x02\x02\x02\u0348\u0346\x03\x02\x02\x02\u0348\u0347\x03\x02\x02\x02" +
		"\u0349\xAD\x03\x02\x02\x02\u034A\u034D\x05\x8EH\x02\u034B\u034D\x05\xA6" +
		"T\x02\u034C\u034A\x03\x02\x02\x02\u034C\u034B\x03\x02\x02\x02\u034D\xAF" +
		"\x03\x02\x02\x02\u034E\u034F\x07\f\x02\x02\u034F\u0355\x07 \x02\x02\u0350" +
		"\u0351\x05\xB2Z\x02\u0351\u0352\x05\xC6d\x02\u0352\u0354\x03\x02\x02\x02" +
		"\u0353\u0350\x03\x02\x02\x02\u0354\u0357\x03\x02\x02\x02\u0355\u0353\x03" +
		"\x02\x02\x02\u0355\u0356\x03\x02\x02\x02\u0356\u0358\x03\x02\x02\x02\u0357" +
		"\u0355\x03\x02\x02\x02\u0358\u0359\x07!\x02\x02\u0359\xB1\x03\x02\x02" +
		"\x02\u035A\u035B\x06Z\n\x02\u035B\u035C\x05\x12\n\x02\u035C\u035D\x05" +
		"l7\x02\u035D\u0360\x03\x02\x02\x02\u035E\u0360\x05\xB6\\\x02\u035F\u035A" +
		"\x03\x02\x02\x02\u035F\u035E\x03\x02\x02\x02\u0360\u0362\x03\x02\x02\x02" +
		"\u0361\u0363\x05\xB4[\x02\u0362\u0361\x03\x02\x02\x02\u0362\u0363\x03" +
		"\x02\x02\x02\u0363\xB3\x03\x02\x02\x02\u0364\u0365\t\n\x02\x02\u0365\xB5" +
		"\x03\x02\x02\x02\u0366\u0368\x07?\x02\x02\u0367\u0366\x03\x02\x02\x02" +
		"\u0367\u0368\x03\x02\x02\x02\u0368\u0369\x03\x02\x02\x02\u0369\u036A\x05" +
		"n8\x02\u036A\xB7\x03\x02\x02\x02\u036B\u036C\x07\x05\x02\x02\u036C\u036D" +
		"\x05\x86D\x02\u036D\u036E\x05$\x13\x02\u036E\xB9\x03\x02\x02\x02\u036F" +
		"\u0370\x07\"\x02\x02\u0370\u0371\x05\x8EH\x02\u0371\u0372\x07#\x02\x02" +
		"\u0372\xBB\x03\x02\x02\x02\u0373\u0383\x07\"\x02\x02\u0374\u0376\x05\x8E" +
		"H\x02\u0375\u0374\x03\x02\x02\x02\u0375\u0376\x03\x02\x02\x02\u0376\u0377" +
		"\x03\x02\x02\x02\u0377\u0379\x07\'\x02\x02\u0378\u037A\x05\x8EH\x02\u0379" +
		"\u0378\x03\x02\x02\x02\u0379\u037A\x03\x02\x02\x02\u037A\u0384\x03\x02" +
		"\x02\x02\u037B\u037D\x05\x8EH\x02\u037C\u037B\x03\x02\x02\x02\u037C\u037D" +
		"\x03\x02\x02\x02\u037D\u037E\x03\x02\x02\x02\u037E\u037F\x07\'\x02\x02" +
		"\u037F\u0380\x05\x8EH\x02\u0380\u0381\x07\'\x02\x02\u0381\u0382\x05\x8E" +
		"H\x02\u0382\u0384\x03\x02\x02\x02\u0383\u0375\x03\x02\x02\x02\u0383\u037C" +
		"\x03\x02\x02\x02\u0384\u0385\x03\x02\x02\x02\u0385\u0386\x07#\x02\x02" +
		"\u0386\xBD\x03\x02\x02\x02\u0387\u0388\x07(\x02\x02\u0388\u0389\x07\x1E" +
		"\x02\x02\u0389\u038A\x05l7\x02\u038A\u038B\x07\x1F\x02\x02\u038B\xBF\x03" +
		"\x02\x02\x02\u038C\u039B\x07\x1E\x02\x02\u038D\u0394\x05\x14\v\x02\u038E" +
		"\u0391\x05l7\x02\u038F\u0390\x07%\x02\x02\u0390\u0392\x05\x14\v\x02\u0391" +
		"\u038F\x03\x02\x02\x02\u0391\u0392\x03\x02\x02\x02\u0392\u0394\x03\x02" +
		"\x02\x02\u0393\u038D\x03\x02\x02\x02\u0393\u038E\x03\x02\x02\x02\u0394" +
		"\u0396\x03\x02\x02\x02\u0395\u0397\x07,\x02\x02\u0396\u0395\x03\x02\x02" +
		"\x02\u0396\u0397\x03\x02\x02\x02\u0397\u0399\x03\x02\x02\x02\u0398\u039A" +
		"\x07%\x02\x02\u0399\u0398\x03\x02\x02\x02\u0399\u039A\x03\x02\x02\x02" +
		"\u039A\u039C\x03\x02\x02\x02\u039B\u0393\x03\x02\x02\x02\u039B\u039C\x03" +
		"\x02\x02\x02\u039C\u039D\x03\x02\x02\x02\u039D\u039E\x07\x1F\x02\x02\u039E" +
		"\xC1\x03\x02\x02\x02\u039F\u03A0\x05\xC4c\x02\u03A0\u03A1\x07(\x02\x02" +
		"\u03A1\u03A2\x07\x1D\x02\x02\u03A2\xC3\x03\x02\x02\x02\u03A3\u03AD\x05" +
		"n8\x02\u03A4\u03A8\x07\x1E\x02\x02\u03A5\u03A6\x07?\x02\x02\u03A6\u03A9" +
		"\x05n8\x02\u03A7\u03A9\x05\xC4c\x02\u03A8\u03A5\x03\x02\x02\x02\u03A8" +
		"\u03A7\x03\x02\x02\x02\u03A9\u03AA\x03\x02\x02\x02\u03AA\u03AB\x07\x1F" +
		"\x02\x02\u03AB\u03AD\x03\x02\x02\x02\u03AC\u03A3\x03\x02\x02\x02\u03AC" +
		"\u03A4\x03\x02\x02\x02\u03AD\xC5\x03\x02\x02\x02\u03AE\u03B3\x07&\x02" +
		"\x02\u03AF\u03B3\x07\x02\x02\x03\u03B0\u03B3\x06d\v\x02\u03B1\u03B3\x06" +
		"d\f\x02\u03B2\u03AE\x03\x02\x02\x02\u03B2\u03AF\x03\x02\x02\x02\u03B2" +
		"\u03B0\x03\x02\x02\x02\u03B2\u03B1\x03\x02\x02\x02\u03B3\xC7\x03\x02\x02" +
		"\x02k\xCF\xD5\xDB\xE9\xED\xF0\xF9\u0103\u0107\u010B\u010F\u0116\u011E" +
		"\u0129\u012D\u0131\u0139\u0140\u014C\u0150\u0156\u015A\u015E\u0167\u0178" +
		"\u0180\u0190\u01A0\u01A4\u01A8\u01B6\u01BD\u01BF\u01C3\u01C9\u01CC\u01D2" +
		"\u01DA\u01DF\u01E5\u01EC\u01F3\u01FE\u0203\u0207\u020C\u0210\u0218\u0220" +
		"\u0225\u0228\u0230\u0238\u023D\u0241\u0245\u024D\u025B\u025F\u0269\u027E" +
		"\u0292\u029E\u02A8\u02AC\u02B4\u02B8\u02BA\u02BF\u02C2\u02C9\u02DA\u02DC" +
		"\u02E2\u02EB\u02EF\u02F5\u02FB\u0306\u030B\u0313\u0319\u032B\u0330\u0332" +
		"\u033B\u0341\u0348\u034C\u0355\u035F\u0362\u0367\u0375\u0379\u037C\u0383" +
		"\u0391\u0393\u0396\u0399\u039B\u03A8\u03AC\u03B2";
	public static readonly _serializedATN: string = Utils.join(
		[
			GoParser._serializedATNSegment0,
			GoParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!GoParser.__ATN) {
			GoParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(GoParser._serializedATN));
		}

		return GoParser.__ATN;
	}

}

export class SourceFileContext extends ParserRuleContext {
	public packageClause(): PackageClauseContext {
		return this.getRuleContext(0, PackageClauseContext);
	}
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	public importDecl(): ImportDeclContext[];
	public importDecl(i: number): ImportDeclContext;
	public importDecl(i?: number): ImportDeclContext | ImportDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportDeclContext);
		} else {
			return this.getRuleContext(i, ImportDeclContext);
		}
	}
	public functionDecl(): FunctionDeclContext[];
	public functionDecl(i: number): FunctionDeclContext;
	public functionDecl(i?: number): FunctionDeclContext | FunctionDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionDeclContext);
		} else {
			return this.getRuleContext(i, FunctionDeclContext);
		}
	}
	public methodDecl(): MethodDeclContext[];
	public methodDecl(i: number): MethodDeclContext;
	public methodDecl(i?: number): MethodDeclContext | MethodDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MethodDeclContext);
		} else {
			return this.getRuleContext(i, MethodDeclContext);
		}
	}
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
	public get ruleIndex(): number { return GoParser.RULE_sourceFile; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterSourceFile) {
			listener.enterSourceFile(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitSourceFile) {
			listener.exitSourceFile(this);
		}
	}
}


export class PackageClauseContext extends ParserRuleContext {
	public PACKAGE(): TerminalNode { return this.getToken(GoParser.PACKAGE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(GoParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_packageClause; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterPackageClause) {
			listener.enterPackageClause(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitPackageClause) {
			listener.exitPackageClause(this);
		}
	}
}


export class ImportDeclContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(GoParser.IMPORT, 0); }
	public importSpec(): ImportSpecContext[];
	public importSpec(i: number): ImportSpecContext;
	public importSpec(i?: number): ImportSpecContext | ImportSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportSpecContext);
		} else {
			return this.getRuleContext(i, ImportSpecContext);
		}
	}
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(GoParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(GoParser.R_PAREN, 0); }
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_importDecl; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterImportDecl) {
			listener.enterImportDecl(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitImportDecl) {
			listener.exitImportDecl(this);
		}
	}
}


export class ImportSpecContext extends ParserRuleContext {
	public importPath(): ImportPathContext {
		return this.getRuleContext(0, ImportPathContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(GoParser.DOT, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(GoParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_importSpec; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterImportSpec) {
			listener.enterImportSpec(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitImportSpec) {
			listener.exitImportSpec(this);
		}
	}
}


export class ImportPathContext extends ParserRuleContext {
	public string_(): String_Context {
		return this.getRuleContext(0, String_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_importPath; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterImportPath) {
			listener.enterImportPath(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitImportPath) {
			listener.exitImportPath(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public constDecl(): ConstDeclContext | undefined {
		return this.tryGetRuleContext(0, ConstDeclContext);
	}
	public typeDecl(): TypeDeclContext | undefined {
		return this.tryGetRuleContext(0, TypeDeclContext);
	}
	public varDecl(): VarDeclContext | undefined {
		return this.tryGetRuleContext(0, VarDeclContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_declaration; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
}


export class ConstDeclContext extends ParserRuleContext {
	public CONST(): TerminalNode { return this.getToken(GoParser.CONST, 0); }
	public constSpec(): ConstSpecContext[];
	public constSpec(i: number): ConstSpecContext;
	public constSpec(i?: number): ConstSpecContext | ConstSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstSpecContext);
		} else {
			return this.getRuleContext(i, ConstSpecContext);
		}
	}
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(GoParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(GoParser.R_PAREN, 0); }
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_constDecl; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterConstDecl) {
			listener.enterConstDecl(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitConstDecl) {
			listener.exitConstDecl(this);
		}
	}
}


export class ConstSpecContext extends ParserRuleContext {
	public identifierList(): IdentifierListContext {
		return this.getRuleContext(0, IdentifierListContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GoParser.ASSIGN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_constSpec; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterConstSpec) {
			listener.enterConstSpec(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitConstSpec) {
			listener.exitConstSpec(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GoParser.IDENTIFIER);
		} else {
			return this.getToken(GoParser.IDENTIFIER, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GoParser.COMMA);
		} else {
			return this.getToken(GoParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_identifierList; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterIdentifierList) {
			listener.enterIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitIdentifierList) {
			listener.exitIdentifierList(this);
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
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GoParser.COMMA);
		} else {
			return this.getToken(GoParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
}


export class TypeDeclContext extends ParserRuleContext {
	public TYPE(): TerminalNode { return this.getToken(GoParser.TYPE, 0); }
	public typeSpec(): TypeSpecContext[];
	public typeSpec(i: number): TypeSpecContext;
	public typeSpec(i?: number): TypeSpecContext | TypeSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeSpecContext);
		} else {
			return this.getRuleContext(i, TypeSpecContext);
		}
	}
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(GoParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(GoParser.R_PAREN, 0); }
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_typeDecl; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterTypeDecl) {
			listener.enterTypeDecl(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitTypeDecl) {
			listener.exitTypeDecl(this);
		}
	}
}


export class TypeSpecContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(GoParser.IDENTIFIER, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GoParser.ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_typeSpec; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterTypeSpec) {
			listener.enterTypeSpec(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitTypeSpec) {
			listener.exitTypeSpec(this);
		}
	}
}


export class FunctionDeclContext extends ParserRuleContext {
	public FUNC(): TerminalNode { return this.getToken(GoParser.FUNC, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(GoParser.IDENTIFIER, 0); }
	public signature(): SignatureContext | undefined {
		return this.tryGetRuleContext(0, SignatureContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_functionDecl; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterFunctionDecl) {
			listener.enterFunctionDecl(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitFunctionDecl) {
			listener.exitFunctionDecl(this);
		}
	}
}


export class MethodDeclContext extends ParserRuleContext {
	public FUNC(): TerminalNode { return this.getToken(GoParser.FUNC, 0); }
	public receiver(): ReceiverContext {
		return this.getRuleContext(0, ReceiverContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(GoParser.IDENTIFIER, 0); }
	public signature(): SignatureContext | undefined {
		return this.tryGetRuleContext(0, SignatureContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_methodDecl; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterMethodDecl) {
			listener.enterMethodDecl(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitMethodDecl) {
			listener.exitMethodDecl(this);
		}
	}
}


export class ReceiverContext extends ParserRuleContext {
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_receiver; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterReceiver) {
			listener.enterReceiver(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitReceiver) {
			listener.exitReceiver(this);
		}
	}
}


export class VarDeclContext extends ParserRuleContext {
	public VAR(): TerminalNode { return this.getToken(GoParser.VAR, 0); }
	public varSpec(): VarSpecContext[];
	public varSpec(i: number): VarSpecContext;
	public varSpec(i?: number): VarSpecContext | VarSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarSpecContext);
		} else {
			return this.getRuleContext(i, VarSpecContext);
		}
	}
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(GoParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(GoParser.R_PAREN, 0); }
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_varDecl; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterVarDecl) {
			listener.enterVarDecl(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitVarDecl) {
			listener.exitVarDecl(this);
		}
	}
}


export class VarSpecContext extends ParserRuleContext {
	public identifierList(): IdentifierListContext {
		return this.getRuleContext(0, IdentifierListContext);
	}
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GoParser.ASSIGN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_varSpec; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterVarSpec) {
			listener.enterVarSpec(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitVarSpec) {
			listener.exitVarSpec(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public L_CURLY(): TerminalNode { return this.getToken(GoParser.L_CURLY, 0); }
	public R_CURLY(): TerminalNode { return this.getToken(GoParser.R_CURLY, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_block; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
}


export class StatementListContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_statementList; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterStatementList) {
			listener.enterStatementList(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitStatementList) {
			listener.exitStatementList(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public labeledStmt(): LabeledStmtContext | undefined {
		return this.tryGetRuleContext(0, LabeledStmtContext);
	}
	public simpleStmt(): SimpleStmtContext | undefined {
		return this.tryGetRuleContext(0, SimpleStmtContext);
	}
	public goStmt(): GoStmtContext | undefined {
		return this.tryGetRuleContext(0, GoStmtContext);
	}
	public returnStmt(): ReturnStmtContext | undefined {
		return this.tryGetRuleContext(0, ReturnStmtContext);
	}
	public breakStmt(): BreakStmtContext | undefined {
		return this.tryGetRuleContext(0, BreakStmtContext);
	}
	public continueStmt(): ContinueStmtContext | undefined {
		return this.tryGetRuleContext(0, ContinueStmtContext);
	}
	public gotoStmt(): GotoStmtContext | undefined {
		return this.tryGetRuleContext(0, GotoStmtContext);
	}
	public fallthroughStmt(): FallthroughStmtContext | undefined {
		return this.tryGetRuleContext(0, FallthroughStmtContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public ifStmt(): IfStmtContext | undefined {
		return this.tryGetRuleContext(0, IfStmtContext);
	}
	public switchStmt(): SwitchStmtContext | undefined {
		return this.tryGetRuleContext(0, SwitchStmtContext);
	}
	public selectStmt(): SelectStmtContext | undefined {
		return this.tryGetRuleContext(0, SelectStmtContext);
	}
	public forStmt(): ForStmtContext | undefined {
		return this.tryGetRuleContext(0, ForStmtContext);
	}
	public deferStmt(): DeferStmtContext | undefined {
		return this.tryGetRuleContext(0, DeferStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_statement; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class SimpleStmtContext extends ParserRuleContext {
	public sendStmt(): SendStmtContext | undefined {
		return this.tryGetRuleContext(0, SendStmtContext);
	}
	public expressionStmt(): ExpressionStmtContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStmtContext);
	}
	public incDecStmt(): IncDecStmtContext | undefined {
		return this.tryGetRuleContext(0, IncDecStmtContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public shortVarDecl(): ShortVarDeclContext | undefined {
		return this.tryGetRuleContext(0, ShortVarDeclContext);
	}
	public emptyStmt(): EmptyStmtContext | undefined {
		return this.tryGetRuleContext(0, EmptyStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_simpleStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterSimpleStmt) {
			listener.enterSimpleStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitSimpleStmt) {
			listener.exitSimpleStmt(this);
		}
	}
}


export class ExpressionStmtContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_expressionStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterExpressionStmt) {
			listener.enterExpressionStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitExpressionStmt) {
			listener.exitExpressionStmt(this);
		}
	}
}


export class SendStmtContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RECEIVE(): TerminalNode { return this.getToken(GoParser.RECEIVE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_sendStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterSendStmt) {
			listener.enterSendStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitSendStmt) {
			listener.exitSendStmt(this);
		}
	}
}


export class IncDecStmtContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public PLUS_PLUS(): TerminalNode | undefined { return this.tryGetToken(GoParser.PLUS_PLUS, 0); }
	public MINUS_MINUS(): TerminalNode | undefined { return this.tryGetToken(GoParser.MINUS_MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_incDecStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterIncDecStmt) {
			listener.enterIncDecStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitIncDecStmt) {
			listener.exitIncDecStmt(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public expressionList(): ExpressionListContext[];
	public expressionList(i: number): ExpressionListContext;
	public expressionList(i?: number): ExpressionListContext | ExpressionListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionListContext);
		} else {
			return this.getRuleContext(i, ExpressionListContext);
		}
	}
	public assign_op(): Assign_opContext {
		return this.getRuleContext(0, Assign_opContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_assignment; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
}


export class Assign_opContext extends ParserRuleContext {
	public ASSIGN(): TerminalNode { return this.getToken(GoParser.ASSIGN, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(GoParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(GoParser.MINUS, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(GoParser.OR, 0); }
	public CARET(): TerminalNode | undefined { return this.tryGetToken(GoParser.CARET, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(GoParser.STAR, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(GoParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(GoParser.MOD, 0); }
	public LSHIFT(): TerminalNode | undefined { return this.tryGetToken(GoParser.LSHIFT, 0); }
	public RSHIFT(): TerminalNode | undefined { return this.tryGetToken(GoParser.RSHIFT, 0); }
	public AMPERSAND(): TerminalNode | undefined { return this.tryGetToken(GoParser.AMPERSAND, 0); }
	public BIT_CLEAR(): TerminalNode | undefined { return this.tryGetToken(GoParser.BIT_CLEAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_assign_op; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterAssign_op) {
			listener.enterAssign_op(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitAssign_op) {
			listener.exitAssign_op(this);
		}
	}
}


export class ShortVarDeclContext extends ParserRuleContext {
	public identifierList(): IdentifierListContext {
		return this.getRuleContext(0, IdentifierListContext);
	}
	public DECLARE_ASSIGN(): TerminalNode { return this.getToken(GoParser.DECLARE_ASSIGN, 0); }
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_shortVarDecl; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterShortVarDecl) {
			listener.enterShortVarDecl(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitShortVarDecl) {
			listener.exitShortVarDecl(this);
		}
	}
}


export class EmptyStmtContext extends ParserRuleContext {
	public SEMI(): TerminalNode { return this.getToken(GoParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_emptyStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterEmptyStmt) {
			listener.enterEmptyStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitEmptyStmt) {
			listener.exitEmptyStmt(this);
		}
	}
}


export class LabeledStmtContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(GoParser.IDENTIFIER, 0); }
	public COLON(): TerminalNode { return this.getToken(GoParser.COLON, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_labeledStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterLabeledStmt) {
			listener.enterLabeledStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitLabeledStmt) {
			listener.exitLabeledStmt(this);
		}
	}
}


export class ReturnStmtContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(GoParser.RETURN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_returnStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterReturnStmt) {
			listener.enterReturnStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitReturnStmt) {
			listener.exitReturnStmt(this);
		}
	}
}


export class BreakStmtContext extends ParserRuleContext {
	public BREAK(): TerminalNode { return this.getToken(GoParser.BREAK, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(GoParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_breakStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterBreakStmt) {
			listener.enterBreakStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitBreakStmt) {
			listener.exitBreakStmt(this);
		}
	}
}


export class ContinueStmtContext extends ParserRuleContext {
	public CONTINUE(): TerminalNode { return this.getToken(GoParser.CONTINUE, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(GoParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_continueStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterContinueStmt) {
			listener.enterContinueStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitContinueStmt) {
			listener.exitContinueStmt(this);
		}
	}
}


export class GotoStmtContext extends ParserRuleContext {
	public GOTO(): TerminalNode { return this.getToken(GoParser.GOTO, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(GoParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_gotoStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterGotoStmt) {
			listener.enterGotoStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitGotoStmt) {
			listener.exitGotoStmt(this);
		}
	}
}


export class FallthroughStmtContext extends ParserRuleContext {
	public FALLTHROUGH(): TerminalNode { return this.getToken(GoParser.FALLTHROUGH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_fallthroughStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterFallthroughStmt) {
			listener.enterFallthroughStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitFallthroughStmt) {
			listener.exitFallthroughStmt(this);
		}
	}
}


export class DeferStmtContext extends ParserRuleContext {
	public DEFER(): TerminalNode { return this.getToken(GoParser.DEFER, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_deferStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterDeferStmt) {
			listener.enterDeferStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitDeferStmt) {
			listener.exitDeferStmt(this);
		}
	}
}


export class IfStmtContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(GoParser.IF, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	public simpleStmt(): SimpleStmtContext | undefined {
		return this.tryGetRuleContext(0, SimpleStmtContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(GoParser.SEMI, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(GoParser.ELSE, 0); }
	public ifStmt(): IfStmtContext | undefined {
		return this.tryGetRuleContext(0, IfStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_ifStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterIfStmt) {
			listener.enterIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitIfStmt) {
			listener.exitIfStmt(this);
		}
	}
}


export class SwitchStmtContext extends ParserRuleContext {
	public exprSwitchStmt(): ExprSwitchStmtContext | undefined {
		return this.tryGetRuleContext(0, ExprSwitchStmtContext);
	}
	public typeSwitchStmt(): TypeSwitchStmtContext | undefined {
		return this.tryGetRuleContext(0, TypeSwitchStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_switchStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterSwitchStmt) {
			listener.enterSwitchStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitSwitchStmt) {
			listener.exitSwitchStmt(this);
		}
	}
}


export class ExprSwitchStmtContext extends ParserRuleContext {
	public SWITCH(): TerminalNode { return this.getToken(GoParser.SWITCH, 0); }
	public L_CURLY(): TerminalNode { return this.getToken(GoParser.L_CURLY, 0); }
	public R_CURLY(): TerminalNode { return this.getToken(GoParser.R_CURLY, 0); }
	public simpleStmt(): SimpleStmtContext | undefined {
		return this.tryGetRuleContext(0, SimpleStmtContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(GoParser.SEMI, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public exprCaseClause(): ExprCaseClauseContext[];
	public exprCaseClause(i: number): ExprCaseClauseContext;
	public exprCaseClause(i?: number): ExprCaseClauseContext | ExprCaseClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprCaseClauseContext);
		} else {
			return this.getRuleContext(i, ExprCaseClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_exprSwitchStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterExprSwitchStmt) {
			listener.enterExprSwitchStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitExprSwitchStmt) {
			listener.exitExprSwitchStmt(this);
		}
	}
}


export class ExprCaseClauseContext extends ParserRuleContext {
	public exprSwitchCase(): ExprSwitchCaseContext {
		return this.getRuleContext(0, ExprSwitchCaseContext);
	}
	public COLON(): TerminalNode { return this.getToken(GoParser.COLON, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_exprCaseClause; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterExprCaseClause) {
			listener.enterExprCaseClause(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitExprCaseClause) {
			listener.exitExprCaseClause(this);
		}
	}
}


export class ExprSwitchCaseContext extends ParserRuleContext {
	public CASE(): TerminalNode | undefined { return this.tryGetToken(GoParser.CASE, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(GoParser.DEFAULT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_exprSwitchCase; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterExprSwitchCase) {
			listener.enterExprSwitchCase(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitExprSwitchCase) {
			listener.exitExprSwitchCase(this);
		}
	}
}


export class TypeSwitchStmtContext extends ParserRuleContext {
	public SWITCH(): TerminalNode { return this.getToken(GoParser.SWITCH, 0); }
	public typeSwitchGuard(): TypeSwitchGuardContext {
		return this.getRuleContext(0, TypeSwitchGuardContext);
	}
	public L_CURLY(): TerminalNode { return this.getToken(GoParser.L_CURLY, 0); }
	public R_CURLY(): TerminalNode { return this.getToken(GoParser.R_CURLY, 0); }
	public simpleStmt(): SimpleStmtContext | undefined {
		return this.tryGetRuleContext(0, SimpleStmtContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(GoParser.SEMI, 0); }
	public typeCaseClause(): TypeCaseClauseContext[];
	public typeCaseClause(i: number): TypeCaseClauseContext;
	public typeCaseClause(i?: number): TypeCaseClauseContext | TypeCaseClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeCaseClauseContext);
		} else {
			return this.getRuleContext(i, TypeCaseClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_typeSwitchStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterTypeSwitchStmt) {
			listener.enterTypeSwitchStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitTypeSwitchStmt) {
			listener.exitTypeSwitchStmt(this);
		}
	}
}


export class TypeSwitchGuardContext extends ParserRuleContext {
	public primaryExpr(): PrimaryExprContext {
		return this.getRuleContext(0, PrimaryExprContext);
	}
	public DOT(): TerminalNode { return this.getToken(GoParser.DOT, 0); }
	public L_PAREN(): TerminalNode { return this.getToken(GoParser.L_PAREN, 0); }
	public TYPE(): TerminalNode { return this.getToken(GoParser.TYPE, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(GoParser.R_PAREN, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(GoParser.IDENTIFIER, 0); }
	public DECLARE_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GoParser.DECLARE_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_typeSwitchGuard; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterTypeSwitchGuard) {
			listener.enterTypeSwitchGuard(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitTypeSwitchGuard) {
			listener.exitTypeSwitchGuard(this);
		}
	}
}


export class TypeCaseClauseContext extends ParserRuleContext {
	public typeSwitchCase(): TypeSwitchCaseContext {
		return this.getRuleContext(0, TypeSwitchCaseContext);
	}
	public COLON(): TerminalNode { return this.getToken(GoParser.COLON, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_typeCaseClause; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterTypeCaseClause) {
			listener.enterTypeCaseClause(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitTypeCaseClause) {
			listener.exitTypeCaseClause(this);
		}
	}
}


export class TypeSwitchCaseContext extends ParserRuleContext {
	public CASE(): TerminalNode | undefined { return this.tryGetToken(GoParser.CASE, 0); }
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(GoParser.DEFAULT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_typeSwitchCase; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterTypeSwitchCase) {
			listener.enterTypeSwitchCase(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitTypeSwitchCase) {
			listener.exitTypeSwitchCase(this);
		}
	}
}


export class TypeListContext extends ParserRuleContext {
	public type_(): Type_Context[];
	public type_(i: number): Type_Context;
	public type_(i?: number): Type_Context | Type_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Type_Context);
		} else {
			return this.getRuleContext(i, Type_Context);
		}
	}
	public NIL_LIT(): TerminalNode[];
	public NIL_LIT(i: number): TerminalNode;
	public NIL_LIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GoParser.NIL_LIT);
		} else {
			return this.getToken(GoParser.NIL_LIT, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GoParser.COMMA);
		} else {
			return this.getToken(GoParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_typeList; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterTypeList) {
			listener.enterTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitTypeList) {
			listener.exitTypeList(this);
		}
	}
}


export class SelectStmtContext extends ParserRuleContext {
	public SELECT(): TerminalNode { return this.getToken(GoParser.SELECT, 0); }
	public L_CURLY(): TerminalNode { return this.getToken(GoParser.L_CURLY, 0); }
	public R_CURLY(): TerminalNode { return this.getToken(GoParser.R_CURLY, 0); }
	public commClause(): CommClauseContext[];
	public commClause(i: number): CommClauseContext;
	public commClause(i?: number): CommClauseContext | CommClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommClauseContext);
		} else {
			return this.getRuleContext(i, CommClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_selectStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterSelectStmt) {
			listener.enterSelectStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitSelectStmt) {
			listener.exitSelectStmt(this);
		}
	}
}


export class CommClauseContext extends ParserRuleContext {
	public commCase(): CommCaseContext {
		return this.getRuleContext(0, CommCaseContext);
	}
	public COLON(): TerminalNode { return this.getToken(GoParser.COLON, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_commClause; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterCommClause) {
			listener.enterCommClause(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitCommClause) {
			listener.exitCommClause(this);
		}
	}
}


export class CommCaseContext extends ParserRuleContext {
	public CASE(): TerminalNode | undefined { return this.tryGetToken(GoParser.CASE, 0); }
	public sendStmt(): SendStmtContext | undefined {
		return this.tryGetRuleContext(0, SendStmtContext);
	}
	public recvStmt(): RecvStmtContext | undefined {
		return this.tryGetRuleContext(0, RecvStmtContext);
	}
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(GoParser.DEFAULT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_commCase; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterCommCase) {
			listener.enterCommCase(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitCommCase) {
			listener.exitCommCase(this);
		}
	}
}


export class RecvStmtContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GoParser.ASSIGN, 0); }
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	public DECLARE_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GoParser.DECLARE_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_recvStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterRecvStmt) {
			listener.enterRecvStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitRecvStmt) {
			listener.exitRecvStmt(this);
		}
	}
}


export class ForStmtContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(GoParser.FOR, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public forClause(): ForClauseContext | undefined {
		return this.tryGetRuleContext(0, ForClauseContext);
	}
	public rangeClause(): RangeClauseContext | undefined {
		return this.tryGetRuleContext(0, RangeClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_forStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterForStmt) {
			listener.enterForStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitForStmt) {
			listener.exitForStmt(this);
		}
	}
}


export class ForClauseContext extends ParserRuleContext {
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GoParser.SEMI);
		} else {
			return this.getToken(GoParser.SEMI, i);
		}
	}
	public simpleStmt(): SimpleStmtContext[];
	public simpleStmt(i: number): SimpleStmtContext;
	public simpleStmt(i?: number): SimpleStmtContext | SimpleStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SimpleStmtContext);
		} else {
			return this.getRuleContext(i, SimpleStmtContext);
		}
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_forClause; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterForClause) {
			listener.enterForClause(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitForClause) {
			listener.exitForClause(this);
		}
	}
}


export class RangeClauseContext extends ParserRuleContext {
	public RANGE(): TerminalNode { return this.getToken(GoParser.RANGE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GoParser.ASSIGN, 0); }
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	public DECLARE_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(GoParser.DECLARE_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_rangeClause; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterRangeClause) {
			listener.enterRangeClause(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitRangeClause) {
			listener.exitRangeClause(this);
		}
	}
}


export class GoStmtContext extends ParserRuleContext {
	public GO(): TerminalNode { return this.getToken(GoParser.GO, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_goStmt; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterGoStmt) {
			listener.enterGoStmt(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitGoStmt) {
			listener.exitGoStmt(this);
		}
	}
}


export class Type_Context extends ParserRuleContext {
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public typeLit(): TypeLitContext | undefined {
		return this.tryGetRuleContext(0, TypeLitContext);
	}
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(GoParser.L_PAREN, 0); }
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(GoParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_type_; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterType_) {
			listener.enterType_(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitType_) {
			listener.exitType_(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(GoParser.IDENTIFIER, 0); }
	public qualifiedIdent(): QualifiedIdentContext | undefined {
		return this.tryGetRuleContext(0, QualifiedIdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_typeName; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterTypeName) {
			listener.enterTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitTypeName) {
			listener.exitTypeName(this);
		}
	}
}


export class TypeLitContext extends ParserRuleContext {
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	public structType(): StructTypeContext | undefined {
		return this.tryGetRuleContext(0, StructTypeContext);
	}
	public pointerType(): PointerTypeContext | undefined {
		return this.tryGetRuleContext(0, PointerTypeContext);
	}
	public functionType(): FunctionTypeContext | undefined {
		return this.tryGetRuleContext(0, FunctionTypeContext);
	}
	public interfaceType(): InterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, InterfaceTypeContext);
	}
	public sliceType(): SliceTypeContext | undefined {
		return this.tryGetRuleContext(0, SliceTypeContext);
	}
	public mapType(): MapTypeContext | undefined {
		return this.tryGetRuleContext(0, MapTypeContext);
	}
	public channelType(): ChannelTypeContext | undefined {
		return this.tryGetRuleContext(0, ChannelTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_typeLit; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterTypeLit) {
			listener.enterTypeLit(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitTypeLit) {
			listener.exitTypeLit(this);
		}
	}
}


export class ArrayTypeContext extends ParserRuleContext {
	public L_BRACKET(): TerminalNode { return this.getToken(GoParser.L_BRACKET, 0); }
	public arrayLength(): ArrayLengthContext {
		return this.getRuleContext(0, ArrayLengthContext);
	}
	public R_BRACKET(): TerminalNode { return this.getToken(GoParser.R_BRACKET, 0); }
	public elementType(): ElementTypeContext {
		return this.getRuleContext(0, ElementTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_arrayType; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterArrayType) {
			listener.enterArrayType(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitArrayType) {
			listener.exitArrayType(this);
		}
	}
}


export class ArrayLengthContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_arrayLength; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterArrayLength) {
			listener.enterArrayLength(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitArrayLength) {
			listener.exitArrayLength(this);
		}
	}
}


export class ElementTypeContext extends ParserRuleContext {
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_elementType; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterElementType) {
			listener.enterElementType(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitElementType) {
			listener.exitElementType(this);
		}
	}
}


export class PointerTypeContext extends ParserRuleContext {
	public STAR(): TerminalNode { return this.getToken(GoParser.STAR, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_pointerType; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterPointerType) {
			listener.enterPointerType(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitPointerType) {
			listener.exitPointerType(this);
		}
	}
}


export class InterfaceTypeContext extends ParserRuleContext {
	public INTERFACE(): TerminalNode { return this.getToken(GoParser.INTERFACE, 0); }
	public L_CURLY(): TerminalNode { return this.getToken(GoParser.L_CURLY, 0); }
	public R_CURLY(): TerminalNode { return this.getToken(GoParser.R_CURLY, 0); }
	public methodSpec(): MethodSpecContext[];
	public methodSpec(i: number): MethodSpecContext;
	public methodSpec(i?: number): MethodSpecContext | MethodSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MethodSpecContext);
		} else {
			return this.getRuleContext(i, MethodSpecContext);
		}
	}
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_interfaceType; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterInterfaceType) {
			listener.enterInterfaceType(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitInterfaceType) {
			listener.exitInterfaceType(this);
		}
	}
}


export class SliceTypeContext extends ParserRuleContext {
	public L_BRACKET(): TerminalNode { return this.getToken(GoParser.L_BRACKET, 0); }
	public R_BRACKET(): TerminalNode { return this.getToken(GoParser.R_BRACKET, 0); }
	public elementType(): ElementTypeContext {
		return this.getRuleContext(0, ElementTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_sliceType; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterSliceType) {
			listener.enterSliceType(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitSliceType) {
			listener.exitSliceType(this);
		}
	}
}


export class MapTypeContext extends ParserRuleContext {
	public MAP(): TerminalNode { return this.getToken(GoParser.MAP, 0); }
	public L_BRACKET(): TerminalNode { return this.getToken(GoParser.L_BRACKET, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public R_BRACKET(): TerminalNode { return this.getToken(GoParser.R_BRACKET, 0); }
	public elementType(): ElementTypeContext {
		return this.getRuleContext(0, ElementTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_mapType; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterMapType) {
			listener.enterMapType(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitMapType) {
			listener.exitMapType(this);
		}
	}
}


export class ChannelTypeContext extends ParserRuleContext {
	public elementType(): ElementTypeContext {
		return this.getRuleContext(0, ElementTypeContext);
	}
	public CHAN(): TerminalNode | undefined { return this.tryGetToken(GoParser.CHAN, 0); }
	public RECEIVE(): TerminalNode | undefined { return this.tryGetToken(GoParser.RECEIVE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_channelType; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterChannelType) {
			listener.enterChannelType(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitChannelType) {
			listener.exitChannelType(this);
		}
	}
}


export class MethodSpecContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(GoParser.IDENTIFIER, 0); }
	public parameters(): ParametersContext | undefined {
		return this.tryGetRuleContext(0, ParametersContext);
	}
	public result(): ResultContext | undefined {
		return this.tryGetRuleContext(0, ResultContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_methodSpec; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterMethodSpec) {
			listener.enterMethodSpec(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitMethodSpec) {
			listener.exitMethodSpec(this);
		}
	}
}


export class FunctionTypeContext extends ParserRuleContext {
	public FUNC(): TerminalNode { return this.getToken(GoParser.FUNC, 0); }
	public signature(): SignatureContext {
		return this.getRuleContext(0, SignatureContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_functionType; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterFunctionType) {
			listener.enterFunctionType(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitFunctionType) {
			listener.exitFunctionType(this);
		}
	}
}


export class SignatureContext extends ParserRuleContext {
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public result(): ResultContext | undefined {
		return this.tryGetRuleContext(0, ResultContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_signature; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterSignature) {
			listener.enterSignature(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitSignature) {
			listener.exitSignature(this);
		}
	}
}


export class ResultContext extends ParserRuleContext {
	public parameters(): ParametersContext | undefined {
		return this.tryGetRuleContext(0, ParametersContext);
	}
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_result; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterResult) {
			listener.enterResult(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitResult) {
			listener.exitResult(this);
		}
	}
}


export class ParametersContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(GoParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(GoParser.R_PAREN, 0); }
	public parameterDecl(): ParameterDeclContext[];
	public parameterDecl(i: number): ParameterDeclContext;
	public parameterDecl(i?: number): ParameterDeclContext | ParameterDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterDeclContext);
		} else {
			return this.getRuleContext(i, ParameterDeclContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GoParser.COMMA);
		} else {
			return this.getToken(GoParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_parameters; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterParameters) {
			listener.enterParameters(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitParameters) {
			listener.exitParameters(this);
		}
	}
}


export class ParameterDeclContext extends ParserRuleContext {
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(GoParser.ELLIPSIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_parameterDecl; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterParameterDecl) {
			listener.enterParameterDecl(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitParameterDecl) {
			listener.exitParameterDecl(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public primaryExpr(): PrimaryExprContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExprContext);
	}
	public unaryExpr(): UnaryExprContext | undefined {
		return this.tryGetRuleContext(0, UnaryExprContext);
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
	public STAR(): TerminalNode | undefined { return this.tryGetToken(GoParser.STAR, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(GoParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(GoParser.MOD, 0); }
	public LSHIFT(): TerminalNode | undefined { return this.tryGetToken(GoParser.LSHIFT, 0); }
	public RSHIFT(): TerminalNode | undefined { return this.tryGetToken(GoParser.RSHIFT, 0); }
	public AMPERSAND(): TerminalNode | undefined { return this.tryGetToken(GoParser.AMPERSAND, 0); }
	public BIT_CLEAR(): TerminalNode | undefined { return this.tryGetToken(GoParser.BIT_CLEAR, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(GoParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(GoParser.MINUS, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(GoParser.OR, 0); }
	public CARET(): TerminalNode | undefined { return this.tryGetToken(GoParser.CARET, 0); }
	public EQUALS(): TerminalNode | undefined { return this.tryGetToken(GoParser.EQUALS, 0); }
	public NOT_EQUALS(): TerminalNode | undefined { return this.tryGetToken(GoParser.NOT_EQUALS, 0); }
	public LESS(): TerminalNode | undefined { return this.tryGetToken(GoParser.LESS, 0); }
	public LESS_OR_EQUALS(): TerminalNode | undefined { return this.tryGetToken(GoParser.LESS_OR_EQUALS, 0); }
	public GREATER(): TerminalNode | undefined { return this.tryGetToken(GoParser.GREATER, 0); }
	public GREATER_OR_EQUALS(): TerminalNode | undefined { return this.tryGetToken(GoParser.GREATER_OR_EQUALS, 0); }
	public LOGICAL_AND(): TerminalNode | undefined { return this.tryGetToken(GoParser.LOGICAL_AND, 0); }
	public LOGICAL_OR(): TerminalNode | undefined { return this.tryGetToken(GoParser.LOGICAL_OR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_expression; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class PrimaryExprContext extends ParserRuleContext {
	public operand(): OperandContext | undefined {
		return this.tryGetRuleContext(0, OperandContext);
	}
	public conversion(): ConversionContext | undefined {
		return this.tryGetRuleContext(0, ConversionContext);
	}
	public primaryExpr(): PrimaryExprContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExprContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(GoParser.DOT, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(GoParser.IDENTIFIER, 0); }
	public index(): IndexContext | undefined {
		return this.tryGetRuleContext(0, IndexContext);
	}
	public slice(): SliceContext | undefined {
		return this.tryGetRuleContext(0, SliceContext);
	}
	public typeAssertion(): TypeAssertionContext | undefined {
		return this.tryGetRuleContext(0, TypeAssertionContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_primaryExpr; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterPrimaryExpr) {
			listener.enterPrimaryExpr(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitPrimaryExpr) {
			listener.exitPrimaryExpr(this);
		}
	}
}


export class UnaryExprContext extends ParserRuleContext {
	public primaryExpr(): PrimaryExprContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExprContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(GoParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(GoParser.MINUS, 0); }
	public EXCLAMATION(): TerminalNode | undefined { return this.tryGetToken(GoParser.EXCLAMATION, 0); }
	public CARET(): TerminalNode | undefined { return this.tryGetToken(GoParser.CARET, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(GoParser.STAR, 0); }
	public AMPERSAND(): TerminalNode | undefined { return this.tryGetToken(GoParser.AMPERSAND, 0); }
	public RECEIVE(): TerminalNode | undefined { return this.tryGetToken(GoParser.RECEIVE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_unaryExpr; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterUnaryExpr) {
			listener.enterUnaryExpr(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitUnaryExpr) {
			listener.exitUnaryExpr(this);
		}
	}
}


export class ConversionContext extends ParserRuleContext {
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public L_PAREN(): TerminalNode { return this.getToken(GoParser.L_PAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public R_PAREN(): TerminalNode { return this.getToken(GoParser.R_PAREN, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(GoParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_conversion; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterConversion) {
			listener.enterConversion(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitConversion) {
			listener.exitConversion(this);
		}
	}
}


export class OperandContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public operandName(): OperandNameContext | undefined {
		return this.tryGetRuleContext(0, OperandNameContext);
	}
	public methodExpr(): MethodExprContext | undefined {
		return this.tryGetRuleContext(0, MethodExprContext);
	}
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(GoParser.L_PAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(GoParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_operand; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterOperand) {
			listener.enterOperand(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitOperand) {
			listener.exitOperand(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public basicLit(): BasicLitContext | undefined {
		return this.tryGetRuleContext(0, BasicLitContext);
	}
	public compositeLit(): CompositeLitContext | undefined {
		return this.tryGetRuleContext(0, CompositeLitContext);
	}
	public functionLit(): FunctionLitContext | undefined {
		return this.tryGetRuleContext(0, FunctionLitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_literal; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
}


export class BasicLitContext extends ParserRuleContext {
	public NIL_LIT(): TerminalNode | undefined { return this.tryGetToken(GoParser.NIL_LIT, 0); }
	public integer(): IntegerContext | undefined {
		return this.tryGetRuleContext(0, IntegerContext);
	}
	public string_(): String_Context | undefined {
		return this.tryGetRuleContext(0, String_Context);
	}
	public FLOAT_LIT(): TerminalNode | undefined { return this.tryGetToken(GoParser.FLOAT_LIT, 0); }
	public IMAGINARY_LIT(): TerminalNode | undefined { return this.tryGetToken(GoParser.IMAGINARY_LIT, 0); }
	public RUNE_LIT(): TerminalNode | undefined { return this.tryGetToken(GoParser.RUNE_LIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_basicLit; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterBasicLit) {
			listener.enterBasicLit(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitBasicLit) {
			listener.exitBasicLit(this);
		}
	}
}


export class IntegerContext extends ParserRuleContext {
	public DECIMAL_LIT(): TerminalNode | undefined { return this.tryGetToken(GoParser.DECIMAL_LIT, 0); }
	public OCTAL_LIT(): TerminalNode | undefined { return this.tryGetToken(GoParser.OCTAL_LIT, 0); }
	public HEX_LIT(): TerminalNode | undefined { return this.tryGetToken(GoParser.HEX_LIT, 0); }
	public IMAGINARY_LIT(): TerminalNode | undefined { return this.tryGetToken(GoParser.IMAGINARY_LIT, 0); }
	public RUNE_LIT(): TerminalNode | undefined { return this.tryGetToken(GoParser.RUNE_LIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_integer; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterInteger) {
			listener.enterInteger(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitInteger) {
			listener.exitInteger(this);
		}
	}
}


export class OperandNameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(GoParser.IDENTIFIER, 0); }
	public qualifiedIdent(): QualifiedIdentContext | undefined {
		return this.tryGetRuleContext(0, QualifiedIdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_operandName; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterOperandName) {
			listener.enterOperandName(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitOperandName) {
			listener.exitOperandName(this);
		}
	}
}


export class QualifiedIdentContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GoParser.IDENTIFIER);
		} else {
			return this.getToken(GoParser.IDENTIFIER, i);
		}
	}
	public DOT(): TerminalNode { return this.getToken(GoParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_qualifiedIdent; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterQualifiedIdent) {
			listener.enterQualifiedIdent(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitQualifiedIdent) {
			listener.exitQualifiedIdent(this);
		}
	}
}


export class CompositeLitContext extends ParserRuleContext {
	public literalType(): LiteralTypeContext {
		return this.getRuleContext(0, LiteralTypeContext);
	}
	public literalValue(): LiteralValueContext {
		return this.getRuleContext(0, LiteralValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_compositeLit; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterCompositeLit) {
			listener.enterCompositeLit(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitCompositeLit) {
			listener.exitCompositeLit(this);
		}
	}
}


export class LiteralTypeContext extends ParserRuleContext {
	public structType(): StructTypeContext | undefined {
		return this.tryGetRuleContext(0, StructTypeContext);
	}
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	public L_BRACKET(): TerminalNode | undefined { return this.tryGetToken(GoParser.L_BRACKET, 0); }
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(GoParser.ELLIPSIS, 0); }
	public R_BRACKET(): TerminalNode | undefined { return this.tryGetToken(GoParser.R_BRACKET, 0); }
	public elementType(): ElementTypeContext | undefined {
		return this.tryGetRuleContext(0, ElementTypeContext);
	}
	public sliceType(): SliceTypeContext | undefined {
		return this.tryGetRuleContext(0, SliceTypeContext);
	}
	public mapType(): MapTypeContext | undefined {
		return this.tryGetRuleContext(0, MapTypeContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_literalType; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterLiteralType) {
			listener.enterLiteralType(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitLiteralType) {
			listener.exitLiteralType(this);
		}
	}
}


export class LiteralValueContext extends ParserRuleContext {
	public L_CURLY(): TerminalNode { return this.getToken(GoParser.L_CURLY, 0); }
	public R_CURLY(): TerminalNode { return this.getToken(GoParser.R_CURLY, 0); }
	public elementList(): ElementListContext | undefined {
		return this.tryGetRuleContext(0, ElementListContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(GoParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_literalValue; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterLiteralValue) {
			listener.enterLiteralValue(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitLiteralValue) {
			listener.exitLiteralValue(this);
		}
	}
}


export class ElementListContext extends ParserRuleContext {
	public keyedElement(): KeyedElementContext[];
	public keyedElement(i: number): KeyedElementContext;
	public keyedElement(i?: number): KeyedElementContext | KeyedElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyedElementContext);
		} else {
			return this.getRuleContext(i, KeyedElementContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GoParser.COMMA);
		} else {
			return this.getToken(GoParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_elementList; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterElementList) {
			listener.enterElementList(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitElementList) {
			listener.exitElementList(this);
		}
	}
}


export class KeyedElementContext extends ParserRuleContext {
	public element(): ElementContext {
		return this.getRuleContext(0, ElementContext);
	}
	public key(): KeyContext | undefined {
		return this.tryGetRuleContext(0, KeyContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(GoParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_keyedElement; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterKeyedElement) {
			listener.enterKeyedElement(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitKeyedElement) {
			listener.exitKeyedElement(this);
		}
	}
}


export class KeyContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(GoParser.IDENTIFIER, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public literalValue(): LiteralValueContext | undefined {
		return this.tryGetRuleContext(0, LiteralValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_key; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterKey) {
			listener.enterKey(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitKey) {
			listener.exitKey(this);
		}
	}
}


export class ElementContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public literalValue(): LiteralValueContext | undefined {
		return this.tryGetRuleContext(0, LiteralValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_element; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterElement) {
			listener.enterElement(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitElement) {
			listener.exitElement(this);
		}
	}
}


export class StructTypeContext extends ParserRuleContext {
	public STRUCT(): TerminalNode { return this.getToken(GoParser.STRUCT, 0); }
	public L_CURLY(): TerminalNode { return this.getToken(GoParser.L_CURLY, 0); }
	public R_CURLY(): TerminalNode { return this.getToken(GoParser.R_CURLY, 0); }
	public fieldDecl(): FieldDeclContext[];
	public fieldDecl(i: number): FieldDeclContext;
	public fieldDecl(i?: number): FieldDeclContext | FieldDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldDeclContext);
		} else {
			return this.getRuleContext(i, FieldDeclContext);
		}
	}
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_structType; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterStructType) {
			listener.enterStructType(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitStructType) {
			listener.exitStructType(this);
		}
	}
}


export class FieldDeclContext extends ParserRuleContext {
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public anonymousField(): AnonymousFieldContext | undefined {
		return this.tryGetRuleContext(0, AnonymousFieldContext);
	}
	public string_(): String_Context | undefined {
		return this.tryGetRuleContext(0, String_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_fieldDecl; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterFieldDecl) {
			listener.enterFieldDecl(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitFieldDecl) {
			listener.exitFieldDecl(this);
		}
	}
}


export class String_Context extends ParserRuleContext {
	public RAW_STRING_LIT(): TerminalNode | undefined { return this.tryGetToken(GoParser.RAW_STRING_LIT, 0); }
	public INTERPRETED_STRING_LIT(): TerminalNode | undefined { return this.tryGetToken(GoParser.INTERPRETED_STRING_LIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_string_; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterString_) {
			listener.enterString_(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitString_) {
			listener.exitString_(this);
		}
	}
}


export class AnonymousFieldContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public STAR(): TerminalNode | undefined { return this.tryGetToken(GoParser.STAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_anonymousField; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterAnonymousField) {
			listener.enterAnonymousField(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitAnonymousField) {
			listener.exitAnonymousField(this);
		}
	}
}


export class FunctionLitContext extends ParserRuleContext {
	public FUNC(): TerminalNode { return this.getToken(GoParser.FUNC, 0); }
	public signature(): SignatureContext {
		return this.getRuleContext(0, SignatureContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_functionLit; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterFunctionLit) {
			listener.enterFunctionLit(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitFunctionLit) {
			listener.exitFunctionLit(this);
		}
	}
}


export class IndexContext extends ParserRuleContext {
	public L_BRACKET(): TerminalNode { return this.getToken(GoParser.L_BRACKET, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public R_BRACKET(): TerminalNode { return this.getToken(GoParser.R_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_index; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterIndex) {
			listener.enterIndex(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitIndex) {
			listener.exitIndex(this);
		}
	}
}


export class SliceContext extends ParserRuleContext {
	public L_BRACKET(): TerminalNode { return this.getToken(GoParser.L_BRACKET, 0); }
	public R_BRACKET(): TerminalNode { return this.getToken(GoParser.R_BRACKET, 0); }
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GoParser.COLON);
		} else {
			return this.getToken(GoParser.COLON, i);
		}
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
	public get ruleIndex(): number { return GoParser.RULE_slice; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterSlice) {
			listener.enterSlice(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitSlice) {
			listener.exitSlice(this);
		}
	}
}


export class TypeAssertionContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(GoParser.DOT, 0); }
	public L_PAREN(): TerminalNode { return this.getToken(GoParser.L_PAREN, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public R_PAREN(): TerminalNode { return this.getToken(GoParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_typeAssertion; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterTypeAssertion) {
			listener.enterTypeAssertion(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitTypeAssertion) {
			listener.exitTypeAssertion(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(GoParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(GoParser.R_PAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(GoParser.ELLIPSIS, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GoParser.COMMA);
		} else {
			return this.getToken(GoParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_arguments; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
}


export class MethodExprContext extends ParserRuleContext {
	public receiverType(): ReceiverTypeContext {
		return this.getRuleContext(0, ReceiverTypeContext);
	}
	public DOT(): TerminalNode { return this.getToken(GoParser.DOT, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(GoParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_methodExpr; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterMethodExpr) {
			listener.enterMethodExpr(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitMethodExpr) {
			listener.exitMethodExpr(this);
		}
	}
}


export class ReceiverTypeContext extends ParserRuleContext {
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(GoParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(GoParser.R_PAREN, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(GoParser.STAR, 0); }
	public receiverType(): ReceiverTypeContext | undefined {
		return this.tryGetRuleContext(0, ReceiverTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_receiverType; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterReceiverType) {
			listener.enterReceiverType(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitReceiverType) {
			listener.exitReceiverType(this);
		}
	}
}


export class EosContext extends ParserRuleContext {
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(GoParser.SEMI, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(GoParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GoParser.RULE_eos; }
	// @Override
	public enterRule(listener: GoParserListener): void {
		if (listener.enterEos) {
			listener.enterEos(this);
		}
	}
	// @Override
	public exitRule(listener: GoParserListener): void {
		if (listener.exitEos) {
			listener.exitEos(this);
		}
	}
}


