// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/peoplecode/PeopleCode.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { PeopleCodeListener } from "./PeopleCodeListener";
import { PeopleCodeVisitor } from "./PeopleCodeVisitor";


export class PeopleCodeParser extends Parser {
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
	public static readonly DecimalLiteral = 72;
	public static readonly IntegerLiteral = 73;
	public static readonly StringLiteral = 74;
	public static readonly BoolLiteral = 75;
	public static readonly VAR_ID = 76;
	public static readonly SYS_VAR_ID = 77;
	public static readonly GENERIC_ID = 78;
	public static readonly REM = 79;
	public static readonly COMMENT_1 = 80;
	public static readonly COMMENT_2 = 81;
	public static readonly COMMENT_3 = 82;
	public static readonly WS = 83;
	public static readonly RULE_program = 0;
	public static readonly RULE_stmtList = 1;
	public static readonly RULE_stmt = 2;
	public static readonly RULE_expr = 3;
	public static readonly RULE_exprList = 4;
	public static readonly RULE_varDeclaration = 5;
	public static readonly RULE_varDeclarator = 6;
	public static readonly RULE_varType = 7;
	public static readonly RULE_appClassImport = 8;
	public static readonly RULE_appPkgPath = 9;
	public static readonly RULE_appClassPath = 10;
	public static readonly RULE_extFuncImport = 11;
	public static readonly RULE_recDefnPath = 12;
	public static readonly RULE_event = 13;
	public static readonly RULE_classDeclaration = 14;
	public static readonly RULE_classBlock = 15;
	public static readonly RULE_classBlockStmt = 16;
	public static readonly RULE_method = 17;
	public static readonly RULE_constant = 18;
	public static readonly RULE_property = 19;
	public static readonly RULE_instance = 20;
	public static readonly RULE_methodImpl = 21;
	public static readonly RULE_getImpl = 22;
	public static readonly RULE_setImpl = 23;
	public static readonly RULE_funcImpl = 24;
	public static readonly RULE_funcSignature = 25;
	public static readonly RULE_formalParamList = 26;
	public static readonly RULE_param = 27;
	public static readonly RULE_returnType = 28;
	public static readonly RULE_ifStmt = 29;
	public static readonly RULE_forStmt = 30;
	public static readonly RULE_whileStmt = 31;
	public static readonly RULE_evaluateStmt = 32;
	public static readonly RULE_whenBranch = 33;
	public static readonly RULE_whenOtherBranch = 34;
	public static readonly RULE_tryCatchStmt = 35;
	public static readonly RULE_catchSignature = 36;
	public static readonly RULE_createInvocation = 37;
	public static readonly RULE_literal = 38;
	public static readonly RULE_id = 39;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "stmtList", "stmt", "expr", "exprList", "varDeclaration", "varDeclarator", 
		"varType", "appClassImport", "appPkgPath", "appClassPath", "extFuncImport", 
		"recDefnPath", "event", "classDeclaration", "classBlock", "classBlockStmt", 
		"method", "constant", "property", "instance", "methodImpl", "getImpl", 
		"setImpl", "funcImpl", "funcSignature", "formalParamList", "param", "returnType", 
		"ifStmt", "forStmt", "whileStmt", "evaluateStmt", "whenBranch", "whenOtherBranch", 
		"tryCatchStmt", "catchSignature", "createInvocation", "literal", "id",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "'Exit'", "'Break'", "'Error'", "'Warning'", "'Return'", 
		"'throw'", "'='", "'('", "')'", "'@'", "'.'", "'['", "']'", "'-'", "'Not'", 
		"'*'", "'/'", "'+'", "'<='", "'>='", "'<'", "'>'", "'<>'", "'And'", "'Or'", 
		"'|'", "','", "'of'", "'import'", "':'", "'Declare'", "'Function'", "'PeopleCode'", 
		"'FieldFormula'", "'FieldChange'", "'class'", "'end-class'", "'private'", 
		"'method'", "'Constant'", "'property'", "'get'", "'set'", "'readonly'", 
		"'instance'", "'end-method'", "'end-get'", "'end-set'", "'End-Function'", 
		"'As'", "'Returns'", "'If'", "'Then'", "'Else'", "'End-If'", "'For'", 
		"'To'", "'Step'", "'End-For'", "'While'", "'End-While'", "'Evaluate'", 
		"'End-Evaluate'", "'When'", "'When-Other'", "'try'", "'end-try'", "'catch'", 
		"'Exception'", "'create'",
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
		undefined, undefined, "DecimalLiteral", "IntegerLiteral", "StringLiteral", 
		"BoolLiteral", "VAR_ID", "SYS_VAR_ID", "GENERIC_ID", "REM", "COMMENT_1", 
		"COMMENT_2", "COMMENT_3", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(PeopleCodeParser._LITERAL_NAMES, PeopleCodeParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return PeopleCodeParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "PeopleCode.g4"; }

	// @Override
	public get ruleNames(): string[] { return PeopleCodeParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return PeopleCodeParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(PeopleCodeParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, PeopleCodeParser.RULE_program);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			this.stmtList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stmtList(): StmtListContext {
		let _localctx: StmtListContext = new StmtListContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, PeopleCodeParser.RULE_stmtList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 82;
					this.stmt();
					this.state = 84;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 83;
						this.match(PeopleCodeParser.T__0);
						}
						}
						this.state = 86;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === PeopleCodeParser.T__0);
					}
					}
				}
				this.state = 92;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 94;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PeopleCodeParser.T__1) | (1 << PeopleCodeParser.T__2) | (1 << PeopleCodeParser.T__3) | (1 << PeopleCodeParser.T__4) | (1 << PeopleCodeParser.T__5) | (1 << PeopleCodeParser.T__6) | (1 << PeopleCodeParser.T__8) | (1 << PeopleCodeParser.T__10) | (1 << PeopleCodeParser.T__14) | (1 << PeopleCodeParser.T__15) | (1 << PeopleCodeParser.T__29))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (PeopleCodeParser.T__31 - 32)) | (1 << (PeopleCodeParser.T__32 - 32)) | (1 << (PeopleCodeParser.T__36 - 32)) | (1 << (PeopleCodeParser.T__39 - 32)) | (1 << (PeopleCodeParser.T__42 - 32)) | (1 << (PeopleCodeParser.T__43 - 32)) | (1 << (PeopleCodeParser.T__52 - 32)) | (1 << (PeopleCodeParser.T__56 - 32)) | (1 << (PeopleCodeParser.T__60 - 32)) | (1 << (PeopleCodeParser.T__62 - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (PeopleCodeParser.T__66 - 67)) | (1 << (PeopleCodeParser.T__70 - 67)) | (1 << (PeopleCodeParser.DecimalLiteral - 67)) | (1 << (PeopleCodeParser.IntegerLiteral - 67)) | (1 << (PeopleCodeParser.StringLiteral - 67)) | (1 << (PeopleCodeParser.BoolLiteral - 67)) | (1 << (PeopleCodeParser.VAR_ID - 67)) | (1 << (PeopleCodeParser.SYS_VAR_ID - 67)) | (1 << (PeopleCodeParser.GENERIC_ID - 67)))) !== 0)) {
				{
				this.state = 93;
				this.stmt();
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
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, PeopleCodeParser.RULE_stmt);
		let _la: number;
		try {
			this.state = 126;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				_localctx = new StmtAppClassImportContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 96;
				this.appClassImport();
				}
				break;

			case 2:
				_localctx = new StmtExternalFuncImportContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 97;
				this.extFuncImport();
				}
				break;

			case 3:
				_localctx = new StmtClassDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 98;
				this.classDeclaration();
				}
				break;

			case 4:
				_localctx = new StmtMethodImplContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 99;
				this.methodImpl();
				}
				break;

			case 5:
				_localctx = new StmtGetImplContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 100;
				this.getImpl();
				}
				break;

			case 6:
				_localctx = new StmtSetImplContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 101;
				this.setImpl();
				}
				break;

			case 7:
				_localctx = new StmtFuncImplContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 102;
				this.funcImpl();
				}
				break;

			case 8:
				_localctx = new StmtVarDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 103;
				this.varDeclaration();
				}
				break;

			case 9:
				_localctx = new StmtIfContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 104;
				this.ifStmt();
				}
				break;

			case 10:
				_localctx = new StmtForContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 105;
				this.forStmt();
				}
				break;

			case 11:
				_localctx = new StmtWhileContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 106;
				this.whileStmt();
				}
				break;

			case 12:
				_localctx = new StmtEvaluateContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 107;
				this.evaluateStmt();
				}
				break;

			case 13:
				_localctx = new StmtTryCatchContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 108;
				this.tryCatchStmt();
				}
				break;

			case 14:
				_localctx = new StmtExitContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 109;
				this.match(PeopleCodeParser.T__1);
				}
				break;

			case 15:
				_localctx = new StmtBreakContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 110;
				this.match(PeopleCodeParser.T__2);
				}
				break;

			case 16:
				_localctx = new StmtErrorContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 111;
				this.match(PeopleCodeParser.T__3);
				this.state = 112;
				this.expr(0);
				}
				break;

			case 17:
				_localctx = new StmtWarningContext(_localctx);
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 113;
				this.match(PeopleCodeParser.T__4);
				this.state = 114;
				this.expr(0);
				}
				break;

			case 18:
				_localctx = new StmtReturnContext(_localctx);
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 115;
				this.match(PeopleCodeParser.T__5);
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PeopleCodeParser.T__8) | (1 << PeopleCodeParser.T__10) | (1 << PeopleCodeParser.T__14) | (1 << PeopleCodeParser.T__15))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (PeopleCodeParser.T__70 - 71)) | (1 << (PeopleCodeParser.DecimalLiteral - 71)) | (1 << (PeopleCodeParser.IntegerLiteral - 71)) | (1 << (PeopleCodeParser.StringLiteral - 71)) | (1 << (PeopleCodeParser.BoolLiteral - 71)) | (1 << (PeopleCodeParser.VAR_ID - 71)) | (1 << (PeopleCodeParser.SYS_VAR_ID - 71)) | (1 << (PeopleCodeParser.GENERIC_ID - 71)))) !== 0)) {
					{
					this.state = 116;
					this.expr(0);
					}
				}

				}
				break;

			case 19:
				_localctx = new StmtThrowContext(_localctx);
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 119;
				this.match(PeopleCodeParser.T__6);
				this.state = 120;
				this.expr(0);
				}
				break;

			case 20:
				_localctx = new StmtAssignContext(_localctx);
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 121;
				this.expr(0);
				this.state = 122;
				this.match(PeopleCodeParser.T__7);
				this.state = 123;
				this.expr(0);
				}
				break;

			case 21:
				_localctx = new StmtExprContext(_localctx);
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 125;
				this.expr(0);
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

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 6;
		this.enterRecursionRule(_localctx, 6, PeopleCodeParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 142;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PeopleCodeParser.T__8:
				{
				_localctx = new ExprParenthesizedContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 129;
				this.match(PeopleCodeParser.T__8);
				this.state = 130;
				this.expr(0);
				this.state = 131;
				this.match(PeopleCodeParser.T__9);
				}
				break;
			case PeopleCodeParser.T__10:
				{
				_localctx = new ExprDynamicReferenceContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 133;
				this.match(PeopleCodeParser.T__10);
				this.state = 134;
				this.expr(15);
				}
				break;
			case PeopleCodeParser.DecimalLiteral:
			case PeopleCodeParser.IntegerLiteral:
			case PeopleCodeParser.StringLiteral:
			case PeopleCodeParser.BoolLiteral:
				{
				_localctx = new ExprLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 135;
				this.literal();
				}
				break;
			case PeopleCodeParser.VAR_ID:
			case PeopleCodeParser.SYS_VAR_ID:
			case PeopleCodeParser.GENERIC_ID:
				{
				_localctx = new ExprIdContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 136;
				this.id();
				}
				break;
			case PeopleCodeParser.T__70:
				{
				_localctx = new ExprCreateContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 137;
				this.createInvocation();
				}
				break;
			case PeopleCodeParser.T__14:
				{
				_localctx = new ExprNegateContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 138;
				this.match(PeopleCodeParser.T__14);
				this.state = 139;
				this.expr(8);
				}
				break;
			case PeopleCodeParser.T__15:
				{
				_localctx = new ExprNotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 140;
				this.match(PeopleCodeParser.T__15);
				this.state = 141;
				this.expr(7);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 195;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 193;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
					case 1:
						{
						_localctx = new ExprMulDivContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PeopleCodeParser.RULE_expr);
						this.state = 144;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 147;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case PeopleCodeParser.T__16:
							{
							this.state = 145;
							(_localctx as ExprMulDivContext)._m = this.match(PeopleCodeParser.T__16);
							}
							break;
						case PeopleCodeParser.T__17:
							{
							this.state = 146;
							(_localctx as ExprMulDivContext)._d = this.match(PeopleCodeParser.T__17);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 149;
						this.expr(7);
						}
						break;

					case 2:
						{
						_localctx = new ExprAddSubContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PeopleCodeParser.RULE_expr);
						this.state = 150;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 153;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case PeopleCodeParser.T__18:
							{
							this.state = 151;
							(_localctx as ExprAddSubContext)._a = this.match(PeopleCodeParser.T__18);
							}
							break;
						case PeopleCodeParser.T__14:
							{
							this.state = 152;
							(_localctx as ExprAddSubContext)._s = this.match(PeopleCodeParser.T__14);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 155;
						this.expr(6);
						}
						break;

					case 3:
						{
						_localctx = new ExprComparisonContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PeopleCodeParser.RULE_expr);
						this.state = 156;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 161;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case PeopleCodeParser.T__19:
							{
							this.state = 157;
							(_localctx as ExprComparisonContext)._le = this.match(PeopleCodeParser.T__19);
							}
							break;
						case PeopleCodeParser.T__20:
							{
							this.state = 158;
							(_localctx as ExprComparisonContext)._ge = this.match(PeopleCodeParser.T__20);
							}
							break;
						case PeopleCodeParser.T__21:
							{
							this.state = 159;
							(_localctx as ExprComparisonContext)._l = this.match(PeopleCodeParser.T__21);
							}
							break;
						case PeopleCodeParser.T__22:
							{
							this.state = 160;
							(_localctx as ExprComparisonContext)._g = this.match(PeopleCodeParser.T__22);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 163;
						this.expr(5);
						}
						break;

					case 4:
						{
						_localctx = new ExprEqualityContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PeopleCodeParser.RULE_expr);
						this.state = 164;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 167;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case PeopleCodeParser.T__7:
							{
							this.state = 165;
							(_localctx as ExprEqualityContext)._e = this.match(PeopleCodeParser.T__7);
							}
							break;
						case PeopleCodeParser.T__23:
							{
							this.state = 166;
							(_localctx as ExprEqualityContext)._i = this.match(PeopleCodeParser.T__23);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 169;
						this.expr(4);
						}
						break;

					case 5:
						{
						_localctx = new ExprBooleanContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PeopleCodeParser.RULE_expr);
						this.state = 170;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 173;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case PeopleCodeParser.T__24:
							{
							this.state = 171;
							(_localctx as ExprBooleanContext)._op = this.match(PeopleCodeParser.T__24);
							}
							break;
						case PeopleCodeParser.T__25:
							{
							this.state = 172;
							(_localctx as ExprBooleanContext)._op = this.match(PeopleCodeParser.T__25);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 175;
						this.expr(3);
						}
						break;

					case 6:
						{
						_localctx = new ExprConcatContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PeopleCodeParser.RULE_expr);
						this.state = 176;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 177;
						this.match(PeopleCodeParser.T__26);
						this.state = 178;
						this.expr(2);
						}
						break;

					case 7:
						{
						_localctx = new ExprDotAccessContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PeopleCodeParser.RULE_expr);
						this.state = 179;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 180;
						this.match(PeopleCodeParser.T__11);
						this.state = 181;
						this.id();
						}
						break;

					case 8:
						{
						_localctx = new ExprArrayIndexContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PeopleCodeParser.RULE_expr);
						this.state = 182;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 183;
						this.match(PeopleCodeParser.T__12);
						this.state = 184;
						this.exprList();
						this.state = 185;
						this.match(PeopleCodeParser.T__13);
						}
						break;

					case 9:
						{
						_localctx = new ExprFnOrIdxCallContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PeopleCodeParser.RULE_expr);
						this.state = 187;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 188;
						this.match(PeopleCodeParser.T__8);
						this.state = 190;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PeopleCodeParser.T__8) | (1 << PeopleCodeParser.T__10) | (1 << PeopleCodeParser.T__14) | (1 << PeopleCodeParser.T__15))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (PeopleCodeParser.T__70 - 71)) | (1 << (PeopleCodeParser.DecimalLiteral - 71)) | (1 << (PeopleCodeParser.IntegerLiteral - 71)) | (1 << (PeopleCodeParser.StringLiteral - 71)) | (1 << (PeopleCodeParser.BoolLiteral - 71)) | (1 << (PeopleCodeParser.VAR_ID - 71)) | (1 << (PeopleCodeParser.SYS_VAR_ID - 71)) | (1 << (PeopleCodeParser.GENERIC_ID - 71)))) !== 0)) {
							{
							this.state = 189;
							this.exprList();
							}
						}

						this.state = 192;
						this.match(PeopleCodeParser.T__9);
						}
						break;
					}
					}
				}
				this.state = 197;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
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
	public exprList(): ExprListContext {
		let _localctx: ExprListContext = new ExprListContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, PeopleCodeParser.RULE_exprList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
			this.expr(0);
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PeopleCodeParser.T__27) {
				{
				{
				this.state = 199;
				this.match(PeopleCodeParser.T__27);
				this.state = 200;
				this.expr(0);
				}
				}
				this.state = 205;
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
	public varDeclaration(): VarDeclarationContext {
		let _localctx: VarDeclarationContext = new VarDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, PeopleCodeParser.RULE_varDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 206;
			_localctx._varScope = this.match(PeopleCodeParser.GENERIC_ID);
			this.state = 207;
			this.varType();
			this.state = 208;
			this.varDeclarator();
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PeopleCodeParser.T__27) {
				{
				{
				this.state = 209;
				this.match(PeopleCodeParser.T__27);
				this.state = 210;
				this.varDeclarator();
				}
				}
				this.state = 215;
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
	public varDeclarator(): VarDeclaratorContext {
		let _localctx: VarDeclaratorContext = new VarDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, PeopleCodeParser.RULE_varDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 216;
			this.match(PeopleCodeParser.VAR_ID);
			this.state = 219;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PeopleCodeParser.T__7) {
				{
				this.state = 217;
				this.match(PeopleCodeParser.T__7);
				this.state = 218;
				this.expr(0);
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
	public varType(): VarTypeContext {
		let _localctx: VarTypeContext = new VarTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, PeopleCodeParser.RULE_varType);
		let _la: number;
		try {
			this.state = 227;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 221;
				this.match(PeopleCodeParser.GENERIC_ID);
				this.state = 224;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PeopleCodeParser.T__28) {
					{
					this.state = 222;
					this.match(PeopleCodeParser.T__28);
					this.state = 223;
					this.varType();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 226;
				this.appClassPath();
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
	public appClassImport(): AppClassImportContext {
		let _localctx: AppClassImportContext = new AppClassImportContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, PeopleCodeParser.RULE_appClassImport);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 229;
			this.match(PeopleCodeParser.T__29);
			this.state = 232;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 230;
				this.appPkgPath();
				}
				break;

			case 2:
				{
				this.state = 231;
				this.appClassPath();
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
	public appPkgPath(): AppPkgPathContext {
		let _localctx: AppPkgPathContext = new AppPkgPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, PeopleCodeParser.RULE_appPkgPath);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 234;
			this.match(PeopleCodeParser.GENERIC_ID);
			this.state = 239;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 235;
					this.match(PeopleCodeParser.T__30);
					this.state = 236;
					this.match(PeopleCodeParser.GENERIC_ID);
					}
					}
				}
				this.state = 241;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			}
			this.state = 242;
			this.match(PeopleCodeParser.T__30);
			this.state = 243;
			this.match(PeopleCodeParser.T__16);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public appClassPath(): AppClassPathContext {
		let _localctx: AppClassPathContext = new AppClassPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, PeopleCodeParser.RULE_appClassPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 245;
			this.match(PeopleCodeParser.GENERIC_ID);
			this.state = 248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 246;
				this.match(PeopleCodeParser.T__30);
				this.state = 247;
				this.match(PeopleCodeParser.GENERIC_ID);
				}
				}
				this.state = 250;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === PeopleCodeParser.T__30);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extFuncImport(): ExtFuncImportContext {
		let _localctx: ExtFuncImportContext = new ExtFuncImportContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, PeopleCodeParser.RULE_extFuncImport);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 252;
			this.match(PeopleCodeParser.T__31);
			this.state = 253;
			this.match(PeopleCodeParser.T__32);
			this.state = 254;
			this.match(PeopleCodeParser.GENERIC_ID);
			this.state = 255;
			this.match(PeopleCodeParser.T__33);
			this.state = 256;
			this.recDefnPath();
			this.state = 257;
			this.event();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recDefnPath(): RecDefnPathContext {
		let _localctx: RecDefnPathContext = new RecDefnPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, PeopleCodeParser.RULE_recDefnPath);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 259;
			this.match(PeopleCodeParser.GENERIC_ID);
			this.state = 260;
			this.match(PeopleCodeParser.T__11);
			this.state = 261;
			this.match(PeopleCodeParser.GENERIC_ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public event(): EventContext {
		let _localctx: EventContext = new EventContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, PeopleCodeParser.RULE_event);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 263;
			_la = this._input.LA(1);
			if (!(_la === PeopleCodeParser.T__34 || _la === PeopleCodeParser.T__35)) {
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
	public classDeclaration(): ClassDeclarationContext {
		let _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, PeopleCodeParser.RULE_classDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 265;
			this.match(PeopleCodeParser.T__36);
			this.state = 266;
			this.match(PeopleCodeParser.GENERIC_ID);
			this.state = 270;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (PeopleCodeParser.T__38 - 39)) | (1 << (PeopleCodeParser.T__39 - 39)) | (1 << (PeopleCodeParser.T__40 - 39)) | (1 << (PeopleCodeParser.T__41 - 39)) | (1 << (PeopleCodeParser.T__45 - 39)))) !== 0)) {
				{
				{
				this.state = 267;
				this.classBlock();
				}
				}
				this.state = 272;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 273;
			this.match(PeopleCodeParser.T__37);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classBlock(): ClassBlockContext {
		let _localctx: ClassBlockContext = new ClassBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, PeopleCodeParser.RULE_classBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 276;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PeopleCodeParser.T__38) {
				{
				this.state = 275;
				_localctx._aLvl = this.match(PeopleCodeParser.T__38);
				}
			}

			this.state = 285;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 278;
					this.classBlockStmt();
					this.state = 282;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === PeopleCodeParser.T__0) {
						{
						{
						this.state = 279;
						this.match(PeopleCodeParser.T__0);
						}
						}
						this.state = 284;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 287;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
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
	public classBlockStmt(): ClassBlockStmtContext {
		let _localctx: ClassBlockStmtContext = new ClassBlockStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, PeopleCodeParser.RULE_classBlockStmt);
		try {
			this.state = 293;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PeopleCodeParser.T__39:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 289;
				this.method();
				}
				break;
			case PeopleCodeParser.T__40:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 290;
				this.constant();
				}
				break;
			case PeopleCodeParser.T__41:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 291;
				this.property();
				}
				break;
			case PeopleCodeParser.T__45:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 292;
				this.instance();
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
	public method(): MethodContext {
		let _localctx: MethodContext = new MethodContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, PeopleCodeParser.RULE_method);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 295;
			this.match(PeopleCodeParser.T__39);
			this.state = 296;
			this.match(PeopleCodeParser.GENERIC_ID);
			this.state = 297;
			this.formalParamList();
			this.state = 299;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PeopleCodeParser.T__51) {
				{
				this.state = 298;
				this.returnType();
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
	public constant(): ConstantContext {
		let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, PeopleCodeParser.RULE_constant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 301;
			this.match(PeopleCodeParser.T__40);
			this.state = 302;
			this.match(PeopleCodeParser.VAR_ID);
			this.state = 303;
			this.match(PeopleCodeParser.T__7);
			this.state = 304;
			this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public property(): PropertyContext {
		let _localctx: PropertyContext = new PropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, PeopleCodeParser.RULE_property);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 306;
			this.match(PeopleCodeParser.T__41);
			this.state = 307;
			this.varType();
			this.state = 308;
			this.match(PeopleCodeParser.GENERIC_ID);
			this.state = 310;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PeopleCodeParser.T__42) {
				{
				this.state = 309;
				_localctx._g = this.match(PeopleCodeParser.T__42);
				}
			}

			this.state = 313;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PeopleCodeParser.T__43) {
				{
				this.state = 312;
				_localctx._s = this.match(PeopleCodeParser.T__43);
				}
			}

			this.state = 316;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PeopleCodeParser.T__44) {
				{
				this.state = 315;
				_localctx._r = this.match(PeopleCodeParser.T__44);
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
	public instance(): InstanceContext {
		let _localctx: InstanceContext = new InstanceContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, PeopleCodeParser.RULE_instance);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 318;
			this.match(PeopleCodeParser.T__45);
			this.state = 319;
			this.varType();
			this.state = 320;
			this.match(PeopleCodeParser.VAR_ID);
			this.state = 325;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PeopleCodeParser.T__27) {
				{
				{
				this.state = 321;
				this.match(PeopleCodeParser.T__27);
				this.state = 322;
				this.match(PeopleCodeParser.VAR_ID);
				}
				}
				this.state = 327;
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
	public methodImpl(): MethodImplContext {
		let _localctx: MethodImplContext = new MethodImplContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, PeopleCodeParser.RULE_methodImpl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 328;
			this.match(PeopleCodeParser.T__39);
			this.state = 329;
			this.match(PeopleCodeParser.GENERIC_ID);
			this.state = 330;
			this.stmtList();
			this.state = 331;
			_localctx._endmethod = this.match(PeopleCodeParser.T__46);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public getImpl(): GetImplContext {
		let _localctx: GetImplContext = new GetImplContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, PeopleCodeParser.RULE_getImpl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 333;
			this.match(PeopleCodeParser.T__42);
			this.state = 334;
			this.match(PeopleCodeParser.GENERIC_ID);
			this.state = 335;
			this.stmtList();
			this.state = 336;
			_localctx._endget = this.match(PeopleCodeParser.T__47);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setImpl(): SetImplContext {
		let _localctx: SetImplContext = new SetImplContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, PeopleCodeParser.RULE_setImpl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 338;
			this.match(PeopleCodeParser.T__43);
			this.state = 339;
			this.match(PeopleCodeParser.GENERIC_ID);
			this.state = 340;
			this.stmtList();
			this.state = 341;
			_localctx._endset = this.match(PeopleCodeParser.T__48);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcImpl(): FuncImplContext {
		let _localctx: FuncImplContext = new FuncImplContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, PeopleCodeParser.RULE_funcImpl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 343;
			this.funcSignature();
			this.state = 344;
			this.stmtList();
			this.state = 345;
			_localctx._endfunction = this.match(PeopleCodeParser.T__49);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcSignature(): FuncSignatureContext {
		let _localctx: FuncSignatureContext = new FuncSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, PeopleCodeParser.RULE_funcSignature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 347;
			this.match(PeopleCodeParser.T__32);
			this.state = 348;
			this.match(PeopleCodeParser.GENERIC_ID);
			this.state = 350;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				this.state = 349;
				this.formalParamList();
				}
				break;
			}
			this.state = 353;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PeopleCodeParser.T__51) {
				{
				this.state = 352;
				this.returnType();
				}
			}

			this.state = 356;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PeopleCodeParser.T__0) {
				{
				this.state = 355;
				this.match(PeopleCodeParser.T__0);
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
	public formalParamList(): FormalParamListContext {
		let _localctx: FormalParamListContext = new FormalParamListContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, PeopleCodeParser.RULE_formalParamList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 358;
			this.match(PeopleCodeParser.T__8);
			this.state = 367;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PeopleCodeParser.VAR_ID) {
				{
				this.state = 359;
				this.param();
				this.state = 364;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === PeopleCodeParser.T__27) {
					{
					{
					this.state = 360;
					this.match(PeopleCodeParser.T__27);
					this.state = 361;
					this.param();
					}
					}
					this.state = 366;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 369;
			this.match(PeopleCodeParser.T__9);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public param(): ParamContext {
		let _localctx: ParamContext = new ParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, PeopleCodeParser.RULE_param);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 371;
			this.match(PeopleCodeParser.VAR_ID);
			this.state = 374;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PeopleCodeParser.T__50) {
				{
				this.state = 372;
				this.match(PeopleCodeParser.T__50);
				this.state = 373;
				this.varType();
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
	public returnType(): ReturnTypeContext {
		let _localctx: ReturnTypeContext = new ReturnTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, PeopleCodeParser.RULE_returnType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 376;
			this.match(PeopleCodeParser.T__51);
			this.state = 377;
			this.varType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 58, PeopleCodeParser.RULE_ifStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 379;
			this.match(PeopleCodeParser.T__52);
			this.state = 380;
			this.expr(0);
			this.state = 381;
			this.match(PeopleCodeParser.T__53);
			this.state = 383;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PeopleCodeParser.T__0) {
				{
				this.state = 382;
				this.match(PeopleCodeParser.T__0);
				}
			}

			this.state = 385;
			this.stmtList();
			this.state = 391;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PeopleCodeParser.T__54) {
				{
				this.state = 386;
				_localctx._elsetok = this.match(PeopleCodeParser.T__54);
				this.state = 388;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PeopleCodeParser.T__0) {
					{
					this.state = 387;
					this.match(PeopleCodeParser.T__0);
					}
				}

				this.state = 390;
				this.stmtList();
				}
			}

			this.state = 393;
			_localctx._endif = this.match(PeopleCodeParser.T__55);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 60, PeopleCodeParser.RULE_forStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 395;
			this.match(PeopleCodeParser.T__56);
			this.state = 396;
			this.match(PeopleCodeParser.VAR_ID);
			this.state = 397;
			this.match(PeopleCodeParser.T__7);
			this.state = 398;
			this.expr(0);
			this.state = 399;
			this.match(PeopleCodeParser.T__57);
			this.state = 400;
			this.expr(0);
			this.state = 404;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PeopleCodeParser.T__0:
				{
				this.state = 401;
				this.match(PeopleCodeParser.T__0);
				}
				break;
			case PeopleCodeParser.T__58:
				{
				{
				this.state = 402;
				this.match(PeopleCodeParser.T__58);
				this.state = 403;
				this.expr(0);
				}
				}
				break;
			case PeopleCodeParser.EOF:
			case PeopleCodeParser.T__1:
			case PeopleCodeParser.T__2:
			case PeopleCodeParser.T__3:
			case PeopleCodeParser.T__4:
			case PeopleCodeParser.T__5:
			case PeopleCodeParser.T__6:
			case PeopleCodeParser.T__8:
			case PeopleCodeParser.T__10:
			case PeopleCodeParser.T__14:
			case PeopleCodeParser.T__15:
			case PeopleCodeParser.T__29:
			case PeopleCodeParser.T__31:
			case PeopleCodeParser.T__32:
			case PeopleCodeParser.T__36:
			case PeopleCodeParser.T__39:
			case PeopleCodeParser.T__42:
			case PeopleCodeParser.T__43:
			case PeopleCodeParser.T__46:
			case PeopleCodeParser.T__47:
			case PeopleCodeParser.T__48:
			case PeopleCodeParser.T__49:
			case PeopleCodeParser.T__52:
			case PeopleCodeParser.T__54:
			case PeopleCodeParser.T__55:
			case PeopleCodeParser.T__56:
			case PeopleCodeParser.T__59:
			case PeopleCodeParser.T__60:
			case PeopleCodeParser.T__61:
			case PeopleCodeParser.T__62:
			case PeopleCodeParser.T__63:
			case PeopleCodeParser.T__64:
			case PeopleCodeParser.T__65:
			case PeopleCodeParser.T__66:
			case PeopleCodeParser.T__67:
			case PeopleCodeParser.T__68:
			case PeopleCodeParser.T__70:
			case PeopleCodeParser.DecimalLiteral:
			case PeopleCodeParser.IntegerLiteral:
			case PeopleCodeParser.StringLiteral:
			case PeopleCodeParser.BoolLiteral:
			case PeopleCodeParser.VAR_ID:
			case PeopleCodeParser.SYS_VAR_ID:
			case PeopleCodeParser.GENERIC_ID:
				break;
			default:
				break;
			}
			this.state = 406;
			this.stmtList();
			this.state = 407;
			_localctx._endfor = this.match(PeopleCodeParser.T__59);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileStmt(): WhileStmtContext {
		let _localctx: WhileStmtContext = new WhileStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, PeopleCodeParser.RULE_whileStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 409;
			this.match(PeopleCodeParser.T__60);
			this.state = 410;
			this.expr(0);
			this.state = 412;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PeopleCodeParser.T__0) {
				{
				this.state = 411;
				this.match(PeopleCodeParser.T__0);
				}
			}

			this.state = 414;
			this.stmtList();
			this.state = 415;
			this.match(PeopleCodeParser.T__61);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public evaluateStmt(): EvaluateStmtContext {
		let _localctx: EvaluateStmtContext = new EvaluateStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, PeopleCodeParser.RULE_evaluateStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 417;
			this.match(PeopleCodeParser.T__62);
			this.state = 418;
			this.expr(0);
			this.state = 420;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 419;
				this.whenBranch();
				}
				}
				this.state = 422;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === PeopleCodeParser.T__64);
			this.state = 425;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PeopleCodeParser.T__65) {
				{
				this.state = 424;
				this.whenOtherBranch();
				}
			}

			this.state = 427;
			_localctx._endevaluate = this.match(PeopleCodeParser.T__63);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whenBranch(): WhenBranchContext {
		let _localctx: WhenBranchContext = new WhenBranchContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, PeopleCodeParser.RULE_whenBranch);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 429;
			this.match(PeopleCodeParser.T__64);
			this.state = 432;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PeopleCodeParser.T__7:
				{
				this.state = 430;
				_localctx._op = this.match(PeopleCodeParser.T__7);
				}
				break;
			case PeopleCodeParser.T__22:
				{
				this.state = 431;
				_localctx._op = this.match(PeopleCodeParser.T__22);
				}
				break;
			case PeopleCodeParser.T__8:
			case PeopleCodeParser.T__10:
			case PeopleCodeParser.T__14:
			case PeopleCodeParser.T__15:
			case PeopleCodeParser.T__70:
			case PeopleCodeParser.DecimalLiteral:
			case PeopleCodeParser.IntegerLiteral:
			case PeopleCodeParser.StringLiteral:
			case PeopleCodeParser.BoolLiteral:
			case PeopleCodeParser.VAR_ID:
			case PeopleCodeParser.SYS_VAR_ID:
			case PeopleCodeParser.GENERIC_ID:
				break;
			default:
				break;
			}
			this.state = 434;
			this.expr(0);
			this.state = 435;
			this.stmtList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whenOtherBranch(): WhenOtherBranchContext {
		let _localctx: WhenOtherBranchContext = new WhenOtherBranchContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, PeopleCodeParser.RULE_whenOtherBranch);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 437;
			this.match(PeopleCodeParser.T__65);
			this.state = 438;
			this.stmtList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryCatchStmt(): TryCatchStmtContext {
		let _localctx: TryCatchStmtContext = new TryCatchStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, PeopleCodeParser.RULE_tryCatchStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 440;
			_localctx._trytok = this.match(PeopleCodeParser.T__66);
			this.state = 441;
			this.stmtList();
			this.state = 442;
			this.catchSignature();
			this.state = 443;
			this.stmtList();
			this.state = 444;
			_localctx._endtry = this.match(PeopleCodeParser.T__67);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchSignature(): CatchSignatureContext {
		let _localctx: CatchSignatureContext = new CatchSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, PeopleCodeParser.RULE_catchSignature);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 446;
			this.match(PeopleCodeParser.T__68);
			this.state = 447;
			_localctx._exClass = this.match(PeopleCodeParser.T__69);
			this.state = 448;
			this.match(PeopleCodeParser.VAR_ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createInvocation(): CreateInvocationContext {
		let _localctx: CreateInvocationContext = new CreateInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, PeopleCodeParser.RULE_createInvocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 450;
			this.match(PeopleCodeParser.T__70);
			this.state = 453;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				{
				this.state = 451;
				this.appClassPath();
				}
				break;

			case 2:
				{
				this.state = 452;
				this.match(PeopleCodeParser.GENERIC_ID);
				}
				break;
			}
			this.state = 455;
			this.match(PeopleCodeParser.T__8);
			this.state = 457;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PeopleCodeParser.T__8) | (1 << PeopleCodeParser.T__10) | (1 << PeopleCodeParser.T__14) | (1 << PeopleCodeParser.T__15))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (PeopleCodeParser.T__70 - 71)) | (1 << (PeopleCodeParser.DecimalLiteral - 71)) | (1 << (PeopleCodeParser.IntegerLiteral - 71)) | (1 << (PeopleCodeParser.StringLiteral - 71)) | (1 << (PeopleCodeParser.BoolLiteral - 71)) | (1 << (PeopleCodeParser.VAR_ID - 71)) | (1 << (PeopleCodeParser.SYS_VAR_ID - 71)) | (1 << (PeopleCodeParser.GENERIC_ID - 71)))) !== 0)) {
				{
				this.state = 456;
				this.exprList();
				}
			}

			this.state = 459;
			this.match(PeopleCodeParser.T__9);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 76, PeopleCodeParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 461;
			_la = this._input.LA(1);
			if (!(((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (PeopleCodeParser.DecimalLiteral - 72)) | (1 << (PeopleCodeParser.IntegerLiteral - 72)) | (1 << (PeopleCodeParser.StringLiteral - 72)) | (1 << (PeopleCodeParser.BoolLiteral - 72)))) !== 0))) {
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
	public id(): IdContext {
		let _localctx: IdContext = new IdContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, PeopleCodeParser.RULE_id);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 463;
			_la = this._input.LA(1);
			if (!(((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (PeopleCodeParser.VAR_ID - 76)) | (1 << (PeopleCodeParser.SYS_VAR_ID - 76)) | (1 << (PeopleCodeParser.GENERIC_ID - 76)))) !== 0))) {
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
		case 3:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 6);

		case 1:
			return this.precpred(this._ctx, 5);

		case 2:
			return this.precpred(this._ctx, 4);

		case 3:
			return this.precpred(this._ctx, 3);

		case 4:
			return this.precpred(this._ctx, 2);

		case 5:
			return this.precpred(this._ctx, 1);

		case 6:
			return this.precpred(this._ctx, 11);

		case 7:
			return this.precpred(this._ctx, 10);

		case 8:
			return this.precpred(this._ctx, 9);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03U\u01D4\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x06\x03W\n\x03\r\x03\x0E\x03X\x07\x03[\n\x03\f\x03\x0E" +
		"\x03^\v\x03\x03\x03\x05\x03a\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04x" +
		"\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04" +
		"\x81\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\x91\n\x05" +
		"\x03\x05\x03\x05\x03\x05\x05\x05\x96\n\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x05\x05\x9C\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x05\x05\xA4\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\xAA\n\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x05\x05\xB0\n\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x05\x05\xC1\n\x05\x03\x05\x07\x05\xC4\n\x05\f" +
		"\x05\x0E\x05\xC7\v\x05\x03\x06\x03\x06\x03\x06\x07\x06\xCC\n\x06\f\x06" +
		"\x0E\x06\xCF\v\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\xD6" +
		"\n\x07\f\x07\x0E\x07\xD9\v\x07\x03\b\x03\b\x03\b\x05\b\xDE\n\b\x03\t\x03" +
		"\t\x03\t\x05\t\xE3\n\t\x03\t\x05\t\xE6\n\t\x03\n\x03\n\x03\n\x05\n\xEB" +
		"\n\n\x03\v\x03\v\x03\v\x07\v\xF0\n\v\f\v\x0E\v\xF3\v\v\x03\v\x03\v\x03" +
		"\v\x03\f\x03\f\x03\f\x06\f\xFB\n\f\r\f\x0E\f\xFC\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03" +
		"\x10\x03\x10\x03\x10\x07\x10\u010F\n\x10\f\x10\x0E\x10\u0112\v\x10\x03" +
		"\x10\x03\x10\x03\x11\x05\x11\u0117\n\x11\x03\x11\x03\x11\x07\x11\u011B" +
		"\n\x11\f\x11\x0E\x11\u011E\v\x11\x06\x11\u0120\n\x11\r\x11\x0E\x11\u0121" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0128\n\x12\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x05\x13\u012E\n\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0139\n\x15\x03\x15\x05\x15\u013C" +
		"\n\x15\x03\x15\x05\x15\u013F\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x07\x16\u0146\n\x16\f\x16\x0E\x16\u0149\v\x16\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03" +
		"\x1B\x03\x1B\x05\x1B\u0161\n\x1B\x03\x1B\x05\x1B\u0164\n\x1B\x03\x1B\x05" +
		"\x1B\u0167\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u016D\n\x1C\f" +
		"\x1C\x0E\x1C\u0170\v\x1C\x05\x1C\u0172\n\x1C\x03\x1C\x03\x1C\x03\x1D\x03" +
		"\x1D\x03\x1D\x05\x1D\u0179\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x05\x1F\u0182\n\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0187" +
		"\n\x1F\x03\x1F\x05\x1F\u018A\n\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03" +
		" \x03 \x03 \x03 \x03 \x03 \x05 \u0197\n \x03 \x03 \x03 \x03!\x03!\x03" +
		"!\x05!\u019F\n!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x06\"\u01A7\n\"\r\"\x0E" +
		"\"\u01A8\x03\"\x05\"\u01AC\n\"\x03\"\x03\"\x03#\x03#\x03#\x05#\u01B3\n" +
		"#\x03#\x03#\x03#\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x03%\x03&\x03" +
		"&\x03&\x03&\x03\'\x03\'\x03\'\x05\'\u01C8\n\'\x03\'\x03\'\x05\'\u01CC" +
		"\n\'\x03\'\x03\'\x03(\x03(\x03)\x03)\x03)\x02\x02\x03\b*\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
		"\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x02" +
		"0\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02" +
		"L\x02N\x02P\x02\x02\x05\x03\x02%&\x03\x02JM\x03\x02NP\x02\u0200\x02R\x03" +
		"\x02\x02\x02\x04\\\x03\x02\x02\x02\x06\x80\x03\x02\x02\x02\b\x90\x03\x02" +
		"\x02\x02\n\xC8\x03\x02\x02\x02\f\xD0\x03\x02\x02\x02\x0E\xDA\x03\x02\x02" +
		"\x02\x10\xE5\x03\x02\x02\x02\x12\xE7\x03\x02\x02\x02\x14\xEC\x03\x02\x02" +
		"\x02\x16\xF7\x03\x02\x02\x02\x18\xFE\x03\x02\x02\x02\x1A\u0105\x03\x02" +
		"\x02\x02\x1C\u0109\x03\x02\x02\x02\x1E\u010B\x03\x02\x02\x02 \u0116\x03" +
		"\x02\x02\x02\"\u0127\x03\x02\x02\x02$\u0129\x03\x02\x02\x02&\u012F\x03" +
		"\x02\x02\x02(\u0134\x03\x02\x02\x02*\u0140\x03\x02\x02\x02,\u014A\x03" +
		"\x02\x02\x02.\u014F\x03\x02\x02\x020\u0154\x03\x02\x02\x022\u0159\x03" +
		"\x02\x02\x024\u015D\x03\x02\x02\x026\u0168\x03\x02\x02\x028\u0175\x03" +
		"\x02\x02\x02:\u017A\x03\x02\x02\x02<\u017D\x03\x02\x02\x02>\u018D\x03" +
		"\x02\x02\x02@\u019B\x03\x02\x02\x02B\u01A3\x03\x02\x02\x02D\u01AF\x03" +
		"\x02\x02\x02F\u01B7\x03\x02\x02\x02H\u01BA\x03\x02\x02\x02J\u01C0\x03" +
		"\x02\x02\x02L\u01C4\x03\x02\x02\x02N\u01CF\x03\x02\x02\x02P\u01D1\x03" +
		"\x02\x02\x02RS\x05\x04\x03\x02S\x03\x03\x02\x02\x02TV\x05\x06\x04\x02" +
		"UW\x07\x03\x02\x02VU\x03\x02\x02\x02WX\x03\x02\x02\x02XV\x03\x02\x02\x02" +
		"XY\x03\x02\x02\x02Y[\x03\x02\x02\x02ZT\x03\x02\x02\x02[^\x03\x02\x02\x02" +
		"\\Z\x03\x02\x02\x02\\]\x03\x02\x02\x02]`\x03\x02\x02\x02^\\\x03\x02\x02" +
		"\x02_a\x05\x06\x04\x02`_\x03\x02\x02\x02`a\x03\x02\x02\x02a\x05\x03\x02" +
		"\x02\x02b\x81\x05\x12\n\x02c\x81\x05\x18\r\x02d\x81\x05\x1E\x10\x02e\x81" +
		"\x05,\x17\x02f\x81\x05.\x18\x02g\x81\x050\x19\x02h\x81\x052\x1A\x02i\x81" +
		"\x05\f\x07\x02j\x81\x05<\x1F\x02k\x81\x05> \x02l\x81\x05@!\x02m\x81\x05" +
		"B\"\x02n\x81\x05H%\x02o\x81\x07\x04\x02\x02p\x81\x07\x05\x02\x02qr\x07" +
		"\x06\x02\x02r\x81\x05\b\x05\x02st\x07\x07\x02\x02t\x81\x05\b\x05\x02u" +
		"w\x07\b\x02\x02vx\x05\b\x05\x02wv\x03\x02\x02\x02wx\x03\x02\x02\x02x\x81" +
		"\x03\x02\x02\x02yz\x07\t\x02\x02z\x81\x05\b\x05\x02{|\x05\b\x05\x02|}" +
		"\x07\n\x02\x02}~\x05\b\x05\x02~\x81\x03\x02\x02\x02\x7F\x81\x05\b\x05" +
		"\x02\x80b\x03\x02\x02\x02\x80c\x03\x02\x02\x02\x80d\x03\x02\x02\x02\x80" +
		"e\x03\x02\x02\x02\x80f\x03\x02\x02\x02\x80g\x03\x02\x02\x02\x80h\x03\x02" +
		"\x02\x02\x80i\x03\x02\x02\x02\x80j\x03\x02\x02\x02\x80k\x03\x02\x02\x02" +
		"\x80l\x03\x02\x02\x02\x80m\x03\x02\x02\x02\x80n\x03\x02\x02\x02\x80o\x03" +
		"\x02\x02\x02\x80p\x03\x02\x02\x02\x80q\x03\x02\x02\x02\x80s\x03\x02\x02" +
		"\x02\x80u\x03\x02\x02\x02\x80y\x03\x02\x02\x02\x80{\x03\x02\x02\x02\x80" +
		"\x7F\x03\x02\x02\x02\x81\x07\x03\x02\x02\x02\x82\x83\b\x05\x01\x02\x83" +
		"\x84\x07\v\x02\x02\x84\x85\x05\b\x05\x02\x85\x86\x07\f\x02\x02\x86\x91" +
		"\x03\x02\x02\x02\x87\x88\x07\r\x02\x02\x88\x91\x05\b\x05\x11\x89\x91\x05" +
		"N(\x02\x8A\x91\x05P)\x02\x8B\x91\x05L\'\x02\x8C\x8D\x07\x11\x02\x02\x8D" +
		"\x91\x05\b\x05\n\x8E\x8F\x07\x12\x02\x02\x8F\x91\x05\b\x05\t\x90\x82\x03" +
		"\x02\x02\x02\x90\x87\x03\x02\x02\x02\x90\x89\x03\x02\x02\x02\x90\x8A\x03" +
		"\x02\x02\x02\x90\x8B\x03\x02\x02\x02\x90\x8C\x03\x02\x02\x02\x90\x8E\x03" +
		"\x02\x02\x02\x91\xC5\x03\x02\x02\x02\x92\x95\f\b\x02\x02\x93\x96\x07\x13" +
		"\x02\x02\x94\x96\x07\x14\x02\x02\x95\x93\x03\x02\x02\x02\x95\x94\x03\x02" +
		"\x02\x02\x96\x97\x03\x02\x02\x02\x97\xC4\x05\b\x05\t\x98\x9B\f\x07\x02" +
		"\x02\x99\x9C\x07\x15\x02\x02\x9A\x9C\x07\x11\x02\x02\x9B\x99\x03\x02\x02" +
		"\x02\x9B\x9A\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\xC4\x05\b\x05" +
		"\b\x9E\xA3\f\x06\x02\x02\x9F\xA4\x07\x16\x02\x02\xA0\xA4\x07\x17\x02\x02" +
		"\xA1\xA4\x07\x18\x02\x02\xA2\xA4\x07\x19\x02\x02\xA3\x9F\x03\x02\x02\x02" +
		"\xA3\xA0\x03\x02\x02\x02\xA3\xA1\x03\x02\x02\x02\xA3\xA2\x03\x02\x02\x02" +
		"\xA4\xA5\x03\x02\x02\x02\xA5\xC4\x05\b\x05\x07\xA6\xA9\f\x05\x02\x02\xA7" +
		"\xAA\x07\n\x02\x02\xA8\xAA\x07\x1A\x02\x02\xA9\xA7\x03\x02\x02\x02\xA9" +
		"\xA8\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xC4\x05\b\x05\x06\xAC" +
		"\xAF\f\x04\x02\x02\xAD\xB0\x07\x1B\x02\x02\xAE\xB0\x07\x1C\x02\x02\xAF" +
		"\xAD\x03\x02\x02\x02\xAF\xAE\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1" +
		"\xC4\x05\b\x05\x05\xB2\xB3\f\x03\x02\x02\xB3\xB4\x07\x1D\x02\x02\xB4\xC4" +
		"\x05\b\x05\x04\xB5\xB6\f\r\x02\x02\xB6\xB7\x07\x0E\x02\x02\xB7\xC4\x05" +
		"P)\x02\xB8\xB9\f\f\x02\x02\xB9\xBA\x07\x0F\x02\x02\xBA\xBB\x05\n\x06\x02" +
		"\xBB\xBC\x07\x10\x02\x02\xBC\xC4\x03\x02\x02\x02\xBD\xBE\f\v\x02\x02\xBE" +
		"\xC0\x07\v\x02\x02\xBF\xC1\x05\n\x06\x02\xC0\xBF\x03\x02\x02\x02\xC0\xC1" +
		"\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC4\x07\f\x02\x02\xC3\x92" +
		"\x03\x02\x02\x02\xC3\x98\x03\x02\x02\x02\xC3\x9E\x03\x02\x02\x02\xC3\xA6" +
		"\x03\x02\x02\x02\xC3\xAC\x03\x02\x02\x02\xC3\xB2\x03\x02\x02\x02\xC3\xB5" +
		"\x03\x02\x02\x02\xC3\xB8\x03\x02\x02\x02\xC3\xBD\x03\x02\x02\x02\xC4\xC7" +
		"\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\t" +
		"\x03\x02\x02\x02\xC7\xC5\x03\x02\x02\x02\xC8\xCD\x05\b\x05\x02\xC9\xCA" +
		"\x07\x1E\x02\x02\xCA\xCC\x05\b\x05\x02\xCB\xC9\x03\x02\x02\x02\xCC\xCF" +
		"\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\v" +
		"\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xD0\xD1\x07P\x02\x02\xD1\xD2" +
		"\x05\x10\t\x02\xD2\xD7\x05\x0E\b\x02\xD3\xD4\x07\x1E\x02\x02\xD4\xD6\x05" +
		"\x0E\b\x02\xD5\xD3\x03\x02\x02\x02\xD6\xD9\x03\x02\x02\x02\xD7\xD5\x03" +
		"\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\r\x03\x02\x02\x02\xD9\xD7\x03" +
		"\x02\x02\x02\xDA\xDD\x07N\x02\x02\xDB\xDC\x07\n\x02\x02\xDC\xDE\x05\b" +
		"\x05\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\x0F\x03\x02" +
		"\x02\x02\xDF\xE2\x07P\x02\x02\xE0\xE1\x07\x1F\x02\x02\xE1\xE3\x05\x10" +
		"\t\x02\xE2\xE0\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE6\x03\x02" +
		"\x02\x02\xE4\xE6\x05\x16\f\x02\xE5\xDF\x03\x02\x02\x02\xE5\xE4\x03\x02" +
		"\x02\x02\xE6\x11\x03\x02\x02\x02\xE7\xEA\x07 \x02\x02\xE8\xEB\x05\x14" +
		"\v\x02\xE9\xEB\x05\x16\f\x02\xEA\xE8\x03\x02\x02\x02\xEA\xE9\x03\x02\x02" +
		"\x02\xEB\x13\x03\x02\x02\x02\xEC\xF1\x07P\x02\x02\xED\xEE\x07!\x02\x02" +
		"\xEE\xF0\x07P\x02\x02\xEF\xED\x03\x02\x02\x02\xF0\xF3\x03\x02\x02\x02" +
		"\xF1\xEF\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2\xF4\x03\x02\x02\x02" +
		"\xF3\xF1\x03\x02\x02\x02\xF4\xF5\x07!\x02\x02\xF5\xF6\x07\x13\x02\x02" +
		"\xF6\x15\x03\x02\x02\x02\xF7\xFA\x07P\x02\x02\xF8\xF9\x07!\x02\x02\xF9" +
		"\xFB\x07P\x02\x02\xFA\xF8\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC" +
		"\xFA\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\x17\x03\x02\x02\x02\xFE" +
		"\xFF\x07\"\x02\x02\xFF\u0100\x07#\x02\x02\u0100\u0101\x07P\x02\x02\u0101" +
		"\u0102\x07$\x02\x02\u0102\u0103\x05\x1A\x0E\x02\u0103\u0104\x05\x1C\x0F" +
		"\x02\u0104\x19\x03\x02\x02\x02\u0105\u0106\x07P\x02\x02\u0106\u0107\x07" +
		"\x0E\x02\x02\u0107\u0108\x07P\x02\x02\u0108\x1B\x03\x02\x02\x02\u0109" +
		"\u010A\t\x02\x02\x02\u010A\x1D\x03\x02\x02\x02\u010B\u010C\x07\'\x02\x02" +
		"\u010C\u0110\x07P\x02\x02\u010D\u010F\x05 \x11\x02\u010E\u010D\x03\x02" +
		"\x02\x02\u010F\u0112\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0110" +
		"\u0111\x03\x02\x02\x02\u0111\u0113\x03\x02\x02\x02\u0112\u0110\x03\x02" +
		"\x02\x02\u0113\u0114\x07(\x02\x02\u0114\x1F\x03\x02\x02\x02\u0115\u0117" +
		"\x07)\x02\x02\u0116\u0115\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02" +
		"\u0117\u011F\x03\x02\x02\x02\u0118\u011C\x05\"\x12\x02\u0119\u011B\x07" +
		"\x03\x02\x02\u011A\u0119\x03\x02\x02\x02\u011B\u011E\x03\x02\x02\x02\u011C" +
		"\u011A\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\u0120\x03\x02" +
		"\x02\x02\u011E\u011C\x03\x02\x02\x02\u011F\u0118\x03\x02\x02\x02\u0120" +
		"\u0121\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0121\u0122\x03\x02" +
		"\x02\x02\u0122!\x03\x02\x02\x02\u0123\u0128\x05$\x13\x02\u0124\u0128\x05" +
		"&\x14\x02\u0125\u0128\x05(\x15\x02\u0126\u0128\x05*\x16\x02\u0127\u0123" +
		"\x03\x02\x02\x02\u0127\u0124\x03\x02\x02\x02\u0127\u0125\x03\x02\x02\x02" +
		"\u0127\u0126\x03\x02\x02\x02\u0128#\x03\x02\x02\x02\u0129\u012A\x07*\x02" +
		"\x02\u012A\u012B\x07P\x02\x02\u012B\u012D\x056\x1C\x02\u012C\u012E\x05" +
		":\x1E\x02\u012D\u012C\x03\x02\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E" +
		"%\x03\x02\x02\x02\u012F\u0130\x07+\x02\x02\u0130\u0131\x07N\x02\x02\u0131" +
		"\u0132\x07\n\x02\x02\u0132\u0133\x05\b\x05\x02\u0133\'\x03\x02\x02\x02" +
		"\u0134\u0135\x07,\x02\x02\u0135\u0136\x05\x10\t\x02\u0136\u0138\x07P\x02" +
		"\x02\u0137\u0139\x07-\x02\x02\u0138\u0137\x03\x02\x02\x02\u0138\u0139" +
		"\x03\x02\x02\x02\u0139\u013B\x03\x02\x02\x02\u013A\u013C\x07.\x02\x02" +
		"\u013B\u013A\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u013E\x03" +
		"\x02\x02\x02\u013D\u013F\x07/\x02\x02\u013E\u013D\x03\x02\x02\x02\u013E" +
		"\u013F\x03\x02\x02\x02\u013F)\x03\x02\x02\x02\u0140\u0141\x070\x02\x02" +
		"\u0141\u0142\x05\x10\t\x02\u0142\u0147\x07N\x02\x02\u0143\u0144\x07\x1E" +
		"\x02\x02\u0144\u0146\x07N\x02\x02\u0145\u0143\x03\x02\x02\x02\u0146\u0149" +
		"\x03\x02\x02\x02\u0147\u0145\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02" +
		"\u0148+\x03\x02\x02\x02\u0149\u0147\x03\x02\x02\x02\u014A\u014B\x07*\x02" +
		"\x02\u014B\u014C\x07P\x02\x02\u014C\u014D\x05\x04\x03\x02\u014D\u014E" +
		"\x071\x02\x02\u014E-\x03\x02\x02\x02\u014F\u0150\x07-\x02\x02\u0150\u0151" +
		"\x07P\x02\x02\u0151\u0152\x05\x04\x03\x02\u0152\u0153\x072\x02\x02\u0153" +
		"/\x03\x02\x02\x02\u0154\u0155\x07.\x02\x02\u0155\u0156\x07P\x02\x02\u0156" +
		"\u0157\x05\x04\x03\x02\u0157\u0158\x073\x02\x02\u01581\x03\x02\x02\x02" +
		"\u0159\u015A\x054\x1B\x02\u015A\u015B\x05\x04\x03\x02\u015B\u015C\x07" +
		"4\x02\x02\u015C3\x03\x02\x02\x02\u015D\u015E\x07#\x02\x02\u015E\u0160" +
		"\x07P\x02\x02\u015F\u0161\x056\x1C\x02\u0160\u015F\x03\x02\x02\x02\u0160" +
		"\u0161\x03\x02\x02\x02\u0161\u0163\x03\x02\x02\x02\u0162\u0164\x05:\x1E" +
		"\x02\u0163\u0162\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\u0166" +
		"\x03\x02\x02\x02\u0165\u0167\x07\x03\x02\x02\u0166\u0165\x03\x02\x02\x02" +
		"\u0166\u0167\x03\x02\x02\x02\u01675\x03\x02\x02\x02\u0168\u0171\x07\v" +
		"\x02\x02\u0169\u016E\x058\x1D\x02\u016A\u016B\x07\x1E\x02\x02\u016B\u016D" +
		"\x058\x1D\x02\u016C\u016A\x03\x02\x02\x02\u016D\u0170\x03\x02\x02\x02" +
		"\u016E\u016C\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02\u016F\u0172\x03" +
		"\x02\x02\x02\u0170\u016E\x03\x02\x02\x02\u0171\u0169\x03\x02\x02\x02\u0171" +
		"\u0172\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173\u0174\x07\f\x02" +
		"\x02\u01747\x03\x02\x02\x02\u0175\u0178\x07N\x02\x02\u0176\u0177\x075" +
		"\x02\x02\u0177\u0179\x05\x10\t\x02\u0178\u0176\x03\x02\x02\x02\u0178\u0179" +
		"\x03\x02\x02\x02\u01799\x03\x02\x02\x02\u017A\u017B\x076\x02\x02\u017B" +
		"\u017C\x05\x10\t\x02\u017C;\x03\x02\x02\x02\u017D\u017E\x077\x02\x02\u017E" +
		"\u017F\x05\b\x05\x02\u017F\u0181\x078\x02\x02\u0180\u0182\x07\x03\x02" +
		"\x02\u0181\u0180\x03\x02\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182\u0183" +
		"\x03\x02\x02\x02\u0183\u0189\x05\x04\x03\x02\u0184\u0186\x079\x02\x02" +
		"\u0185\u0187\x07\x03\x02\x02\u0186\u0185\x03\x02\x02\x02\u0186\u0187\x03" +
		"\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188\u018A\x05\x04\x03\x02\u0189" +
		"\u0184\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A\u018B\x03\x02" +
		"\x02\x02\u018B\u018C\x07:\x02\x02\u018C=\x03\x02\x02\x02\u018D\u018E\x07" +
		";\x02\x02\u018E\u018F\x07N\x02\x02\u018F\u0190\x07\n\x02\x02\u0190\u0191" +
		"\x05\b\x05\x02\u0191\u0192\x07<\x02\x02\u0192\u0196\x05\b\x05\x02\u0193" +
		"\u0197\x07\x03\x02\x02\u0194\u0195\x07=\x02\x02\u0195\u0197\x05\b\x05" +
		"\x02\u0196\u0193\x03\x02\x02\x02\u0196\u0194\x03\x02\x02\x02\u0196\u0197" +
		"\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u0199\x05\x04\x03\x02" +
		"\u0199\u019A\x07>\x02\x02\u019A?\x03\x02\x02\x02\u019B\u019C\x07?\x02" +
		"\x02\u019C\u019E\x05\b\x05\x02\u019D\u019F\x07\x03\x02\x02\u019E\u019D" +
		"\x03\x02\x02\x02\u019E\u019F\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02" +
		"\u01A0\u01A1\x05\x04\x03\x02\u01A1\u01A2\x07@\x02\x02\u01A2A\x03\x02\x02" +
		"\x02\u01A3\u01A4\x07A\x02\x02\u01A4\u01A6\x05\b\x05\x02\u01A5\u01A7\x05" +
		"D#\x02\u01A6\u01A5\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\u01A6" +
		"\x03\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01AB\x03\x02\x02\x02" +
		"\u01AA\u01AC\x05F$\x02\u01AB\u01AA\x03\x02\x02\x02\u01AB\u01AC\x03\x02" +
		"\x02\x02\u01AC\u01AD\x03\x02\x02\x02\u01AD\u01AE\x07B\x02\x02\u01AEC\x03" +
		"\x02\x02\x02\u01AF\u01B2\x07C\x02\x02\u01B0\u01B3\x07\n\x02\x02\u01B1" +
		"\u01B3\x07\x19\x02\x02\u01B2\u01B0\x03\x02\x02\x02\u01B2\u01B1\x03\x02" +
		"\x02\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3\u01B4\x03\x02\x02\x02\u01B4" +
		"\u01B5\x05\b\x05\x02\u01B5\u01B6\x05\x04\x03\x02\u01B6E\x03\x02\x02\x02" +
		"\u01B7\u01B8\x07D\x02\x02\u01B8\u01B9\x05\x04\x03\x02\u01B9G\x03\x02\x02" +
		"\x02\u01BA\u01BB\x07E\x02\x02\u01BB\u01BC\x05\x04\x03\x02\u01BC\u01BD" +
		"\x05J&\x02\u01BD\u01BE\x05\x04\x03\x02\u01BE\u01BF\x07F\x02\x02\u01BF" +
		"I\x03\x02\x02\x02\u01C0\u01C1\x07G\x02\x02\u01C1\u01C2\x07H\x02\x02\u01C2" +
		"\u01C3\x07N\x02\x02\u01C3K\x03\x02\x02\x02\u01C4\u01C7\x07I\x02\x02\u01C5" +
		"\u01C8\x05\x16\f\x02\u01C6\u01C8\x07P\x02\x02\u01C7\u01C5\x03\x02\x02" +
		"\x02\u01C7\u01C6\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9\u01CB" +
		"\x07\v\x02\x02\u01CA\u01CC\x05\n\x06\x02\u01CB\u01CA\x03\x02\x02\x02\u01CB" +
		"\u01CC\x03\x02\x02\x02\u01CC\u01CD\x03\x02\x02\x02\u01CD\u01CE\x07\f\x02" +
		"\x02\u01CEM\x03\x02\x02\x02\u01CF\u01D0\t\x03\x02\x02\u01D0O\x03\x02\x02" +
		"\x02\u01D1\u01D2\t\x04\x02\x02\u01D2Q\x03\x02\x02\x022X\\`w\x80\x90\x95" +
		"\x9B\xA3\xA9\xAF\xC0\xC3\xC5\xCD\xD7\xDD\xE2\xE5\xEA\xF1\xFC\u0110\u0116" +
		"\u011C\u0121\u0127\u012D\u0138\u013B\u013E\u0147\u0160\u0163\u0166\u016E" +
		"\u0171\u0178\u0181\u0186\u0189\u0196\u019E\u01A8\u01AB\u01B2\u01C7\u01CB";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!PeopleCodeParser.__ATN) {
			PeopleCodeParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(PeopleCodeParser._serializedATN));
		}

		return PeopleCodeParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public stmtList(): StmtListContext {
		return this.getRuleContext(0, StmtListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_program; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StmtListContext extends ParserRuleContext {
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_stmtList; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterStmtList) {
			listener.enterStmtList(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitStmtList) {
			listener.exitStmtList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitStmtList) {
			return visitor.visitStmtList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_stmt; }
	public copyFrom(ctx: StmtContext): void {
		super.copyFrom(ctx);
	}
}
export class StmtAppClassImportContext extends StmtContext {
	public appClassImport(): AppClassImportContext {
		return this.getRuleContext(0, AppClassImportContext);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterStmtAppClassImport) {
			listener.enterStmtAppClassImport(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitStmtAppClassImport) {
			listener.exitStmtAppClassImport(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitStmtAppClassImport) {
			return visitor.visitStmtAppClassImport(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StmtExternalFuncImportContext extends StmtContext {
	public extFuncImport(): ExtFuncImportContext {
		return this.getRuleContext(0, ExtFuncImportContext);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterStmtExternalFuncImport) {
			listener.enterStmtExternalFuncImport(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitStmtExternalFuncImport) {
			listener.exitStmtExternalFuncImport(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitStmtExternalFuncImport) {
			return visitor.visitStmtExternalFuncImport(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StmtClassDeclarationContext extends StmtContext {
	public classDeclaration(): ClassDeclarationContext {
		return this.getRuleContext(0, ClassDeclarationContext);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterStmtClassDeclaration) {
			listener.enterStmtClassDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitStmtClassDeclaration) {
			listener.exitStmtClassDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitStmtClassDeclaration) {
			return visitor.visitStmtClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StmtMethodImplContext extends StmtContext {
	public methodImpl(): MethodImplContext {
		return this.getRuleContext(0, MethodImplContext);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterStmtMethodImpl) {
			listener.enterStmtMethodImpl(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitStmtMethodImpl) {
			listener.exitStmtMethodImpl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitStmtMethodImpl) {
			return visitor.visitStmtMethodImpl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StmtGetImplContext extends StmtContext {
	public getImpl(): GetImplContext {
		return this.getRuleContext(0, GetImplContext);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterStmtGetImpl) {
			listener.enterStmtGetImpl(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitStmtGetImpl) {
			listener.exitStmtGetImpl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitStmtGetImpl) {
			return visitor.visitStmtGetImpl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StmtSetImplContext extends StmtContext {
	public setImpl(): SetImplContext {
		return this.getRuleContext(0, SetImplContext);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterStmtSetImpl) {
			listener.enterStmtSetImpl(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitStmtSetImpl) {
			listener.exitStmtSetImpl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitStmtSetImpl) {
			return visitor.visitStmtSetImpl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StmtFuncImplContext extends StmtContext {
	public funcImpl(): FuncImplContext {
		return this.getRuleContext(0, FuncImplContext);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterStmtFuncImpl) {
			listener.enterStmtFuncImpl(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitStmtFuncImpl) {
			listener.exitStmtFuncImpl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitStmtFuncImpl) {
			return visitor.visitStmtFuncImpl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StmtVarDeclarationContext extends StmtContext {
	public varDeclaration(): VarDeclarationContext {
		return this.getRuleContext(0, VarDeclarationContext);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterStmtVarDeclaration) {
			listener.enterStmtVarDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitStmtVarDeclaration) {
			listener.exitStmtVarDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitStmtVarDeclaration) {
			return visitor.visitStmtVarDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StmtIfContext extends StmtContext {
	public ifStmt(): IfStmtContext {
		return this.getRuleContext(0, IfStmtContext);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterStmtIf) {
			listener.enterStmtIf(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitStmtIf) {
			listener.exitStmtIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitStmtIf) {
			return visitor.visitStmtIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StmtForContext extends StmtContext {
	public forStmt(): ForStmtContext {
		return this.getRuleContext(0, ForStmtContext);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterStmtFor) {
			listener.enterStmtFor(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitStmtFor) {
			listener.exitStmtFor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitStmtFor) {
			return visitor.visitStmtFor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StmtWhileContext extends StmtContext {
	public whileStmt(): WhileStmtContext {
		return this.getRuleContext(0, WhileStmtContext);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterStmtWhile) {
			listener.enterStmtWhile(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitStmtWhile) {
			listener.exitStmtWhile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitStmtWhile) {
			return visitor.visitStmtWhile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StmtEvaluateContext extends StmtContext {
	public evaluateStmt(): EvaluateStmtContext {
		return this.getRuleContext(0, EvaluateStmtContext);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterStmtEvaluate) {
			listener.enterStmtEvaluate(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitStmtEvaluate) {
			listener.exitStmtEvaluate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitStmtEvaluate) {
			return visitor.visitStmtEvaluate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StmtTryCatchContext extends StmtContext {
	public tryCatchStmt(): TryCatchStmtContext {
		return this.getRuleContext(0, TryCatchStmtContext);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterStmtTryCatch) {
			listener.enterStmtTryCatch(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitStmtTryCatch) {
			listener.exitStmtTryCatch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitStmtTryCatch) {
			return visitor.visitStmtTryCatch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StmtExitContext extends StmtContext {
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterStmtExit) {
			listener.enterStmtExit(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitStmtExit) {
			listener.exitStmtExit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitStmtExit) {
			return visitor.visitStmtExit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StmtBreakContext extends StmtContext {
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterStmtBreak) {
			listener.enterStmtBreak(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitStmtBreak) {
			listener.exitStmtBreak(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitStmtBreak) {
			return visitor.visitStmtBreak(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StmtErrorContext extends StmtContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterStmtError) {
			listener.enterStmtError(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitStmtError) {
			listener.exitStmtError(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitStmtError) {
			return visitor.visitStmtError(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StmtWarningContext extends StmtContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterStmtWarning) {
			listener.enterStmtWarning(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitStmtWarning) {
			listener.exitStmtWarning(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitStmtWarning) {
			return visitor.visitStmtWarning(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StmtReturnContext extends StmtContext {
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterStmtReturn) {
			listener.enterStmtReturn(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitStmtReturn) {
			listener.exitStmtReturn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitStmtReturn) {
			return visitor.visitStmtReturn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StmtThrowContext extends StmtContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterStmtThrow) {
			listener.enterStmtThrow(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitStmtThrow) {
			listener.exitStmtThrow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitStmtThrow) {
			return visitor.visitStmtThrow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StmtAssignContext extends StmtContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterStmtAssign) {
			listener.enterStmtAssign(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitStmtAssign) {
			listener.exitStmtAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitStmtAssign) {
			return visitor.visitStmtAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StmtExprContext extends StmtContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterStmtExpr) {
			listener.enterStmtExpr(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitStmtExpr) {
			listener.exitStmtExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitStmtExpr) {
			return visitor.visitStmtExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class ExprParenthesizedContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterExprParenthesized) {
			listener.enterExprParenthesized(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitExprParenthesized) {
			listener.exitExprParenthesized(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitExprParenthesized) {
			return visitor.visitExprParenthesized(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprDynamicReferenceContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterExprDynamicReference) {
			listener.enterExprDynamicReference(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitExprDynamicReference) {
			listener.exitExprDynamicReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitExprDynamicReference) {
			return visitor.visitExprDynamicReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprLiteralContext extends ExprContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterExprLiteral) {
			listener.enterExprLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitExprLiteral) {
			listener.exitExprLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitExprLiteral) {
			return visitor.visitExprLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprIdContext extends ExprContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterExprId) {
			listener.enterExprId(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitExprId) {
			listener.exitExprId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitExprId) {
			return visitor.visitExprId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprCreateContext extends ExprContext {
	public createInvocation(): CreateInvocationContext {
		return this.getRuleContext(0, CreateInvocationContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterExprCreate) {
			listener.enterExprCreate(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitExprCreate) {
			listener.exitExprCreate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitExprCreate) {
			return visitor.visitExprCreate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprDotAccessContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterExprDotAccess) {
			listener.enterExprDotAccess(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitExprDotAccess) {
			listener.exitExprDotAccess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitExprDotAccess) {
			return visitor.visitExprDotAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprArrayIndexContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public exprList(): ExprListContext {
		return this.getRuleContext(0, ExprListContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterExprArrayIndex) {
			listener.enterExprArrayIndex(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitExprArrayIndex) {
			listener.exitExprArrayIndex(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitExprArrayIndex) {
			return visitor.visitExprArrayIndex(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprFnOrIdxCallContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public exprList(): ExprListContext | undefined {
		return this.tryGetRuleContext(0, ExprListContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterExprFnOrIdxCall) {
			listener.enterExprFnOrIdxCall(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitExprFnOrIdxCall) {
			listener.exitExprFnOrIdxCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitExprFnOrIdxCall) {
			return visitor.visitExprFnOrIdxCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprNegateContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterExprNegate) {
			listener.enterExprNegate(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitExprNegate) {
			listener.exitExprNegate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitExprNegate) {
			return visitor.visitExprNegate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprNotContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterExprNot) {
			listener.enterExprNot(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitExprNot) {
			listener.exitExprNot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitExprNot) {
			return visitor.visitExprNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprMulDivContext extends ExprContext {
	public _m: Token;
	public _d: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterExprMulDiv) {
			listener.enterExprMulDiv(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitExprMulDiv) {
			listener.exitExprMulDiv(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitExprMulDiv) {
			return visitor.visitExprMulDiv(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprAddSubContext extends ExprContext {
	public _a: Token;
	public _s: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterExprAddSub) {
			listener.enterExprAddSub(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitExprAddSub) {
			listener.exitExprAddSub(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitExprAddSub) {
			return visitor.visitExprAddSub(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprComparisonContext extends ExprContext {
	public _le: Token;
	public _ge: Token;
	public _l: Token;
	public _g: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterExprComparison) {
			listener.enterExprComparison(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitExprComparison) {
			listener.exitExprComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitExprComparison) {
			return visitor.visitExprComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprEqualityContext extends ExprContext {
	public _e: Token;
	public _i: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterExprEquality) {
			listener.enterExprEquality(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitExprEquality) {
			listener.exitExprEquality(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitExprEquality) {
			return visitor.visitExprEquality(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprBooleanContext extends ExprContext {
	public _op: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterExprBoolean) {
			listener.enterExprBoolean(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitExprBoolean) {
			listener.exitExprBoolean(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitExprBoolean) {
			return visitor.visitExprBoolean(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprConcatContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterExprConcat) {
			listener.enterExprConcat(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitExprConcat) {
			listener.exitExprConcat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitExprConcat) {
			return visitor.visitExprConcat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprListContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_exprList; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterExprList) {
			listener.enterExprList(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitExprList) {
			listener.exitExprList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitExprList) {
			return visitor.visitExprList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarDeclarationContext extends ParserRuleContext {
	public _varScope: Token;
	public varType(): VarTypeContext {
		return this.getRuleContext(0, VarTypeContext);
	}
	public varDeclarator(): VarDeclaratorContext[];
	public varDeclarator(i: number): VarDeclaratorContext;
	public varDeclarator(i?: number): VarDeclaratorContext | VarDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarDeclaratorContext);
		} else {
			return this.getRuleContext(i, VarDeclaratorContext);
		}
	}
	public GENERIC_ID(): TerminalNode { return this.getToken(PeopleCodeParser.GENERIC_ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_varDeclaration; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterVarDeclaration) {
			listener.enterVarDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitVarDeclaration) {
			listener.exitVarDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitVarDeclaration) {
			return visitor.visitVarDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarDeclaratorContext extends ParserRuleContext {
	public VAR_ID(): TerminalNode { return this.getToken(PeopleCodeParser.VAR_ID, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_varDeclarator; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterVarDeclarator) {
			listener.enterVarDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitVarDeclarator) {
			listener.exitVarDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitVarDeclarator) {
			return visitor.visitVarDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarTypeContext extends ParserRuleContext {
	public GENERIC_ID(): TerminalNode | undefined { return this.tryGetToken(PeopleCodeParser.GENERIC_ID, 0); }
	public varType(): VarTypeContext | undefined {
		return this.tryGetRuleContext(0, VarTypeContext);
	}
	public appClassPath(): AppClassPathContext | undefined {
		return this.tryGetRuleContext(0, AppClassPathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_varType; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterVarType) {
			listener.enterVarType(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitVarType) {
			listener.exitVarType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitVarType) {
			return visitor.visitVarType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AppClassImportContext extends ParserRuleContext {
	public appPkgPath(): AppPkgPathContext | undefined {
		return this.tryGetRuleContext(0, AppPkgPathContext);
	}
	public appClassPath(): AppClassPathContext | undefined {
		return this.tryGetRuleContext(0, AppClassPathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_appClassImport; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterAppClassImport) {
			listener.enterAppClassImport(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitAppClassImport) {
			listener.exitAppClassImport(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitAppClassImport) {
			return visitor.visitAppClassImport(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AppPkgPathContext extends ParserRuleContext {
	public GENERIC_ID(): TerminalNode[];
	public GENERIC_ID(i: number): TerminalNode;
	public GENERIC_ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PeopleCodeParser.GENERIC_ID);
		} else {
			return this.getToken(PeopleCodeParser.GENERIC_ID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_appPkgPath; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterAppPkgPath) {
			listener.enterAppPkgPath(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitAppPkgPath) {
			listener.exitAppPkgPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitAppPkgPath) {
			return visitor.visitAppPkgPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AppClassPathContext extends ParserRuleContext {
	public GENERIC_ID(): TerminalNode[];
	public GENERIC_ID(i: number): TerminalNode;
	public GENERIC_ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PeopleCodeParser.GENERIC_ID);
		} else {
			return this.getToken(PeopleCodeParser.GENERIC_ID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_appClassPath; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterAppClassPath) {
			listener.enterAppClassPath(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitAppClassPath) {
			listener.exitAppClassPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitAppClassPath) {
			return visitor.visitAppClassPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtFuncImportContext extends ParserRuleContext {
	public GENERIC_ID(): TerminalNode { return this.getToken(PeopleCodeParser.GENERIC_ID, 0); }
	public recDefnPath(): RecDefnPathContext {
		return this.getRuleContext(0, RecDefnPathContext);
	}
	public event(): EventContext {
		return this.getRuleContext(0, EventContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_extFuncImport; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterExtFuncImport) {
			listener.enterExtFuncImport(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitExtFuncImport) {
			listener.exitExtFuncImport(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitExtFuncImport) {
			return visitor.visitExtFuncImport(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecDefnPathContext extends ParserRuleContext {
	public GENERIC_ID(): TerminalNode[];
	public GENERIC_ID(i: number): TerminalNode;
	public GENERIC_ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PeopleCodeParser.GENERIC_ID);
		} else {
			return this.getToken(PeopleCodeParser.GENERIC_ID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_recDefnPath; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterRecDefnPath) {
			listener.enterRecDefnPath(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitRecDefnPath) {
			listener.exitRecDefnPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitRecDefnPath) {
			return visitor.visitRecDefnPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_event; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterEvent) {
			listener.enterEvent(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitEvent) {
			listener.exitEvent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitEvent) {
			return visitor.visitEvent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	public GENERIC_ID(): TerminalNode { return this.getToken(PeopleCodeParser.GENERIC_ID, 0); }
	public classBlock(): ClassBlockContext[];
	public classBlock(i: number): ClassBlockContext;
	public classBlock(i?: number): ClassBlockContext | ClassBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassBlockContext);
		} else {
			return this.getRuleContext(i, ClassBlockContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_classDeclaration; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterClassDeclaration) {
			listener.enterClassDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitClassDeclaration) {
			listener.exitClassDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitClassDeclaration) {
			return visitor.visitClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBlockContext extends ParserRuleContext {
	public _aLvl: Token;
	public classBlockStmt(): ClassBlockStmtContext[];
	public classBlockStmt(i: number): ClassBlockStmtContext;
	public classBlockStmt(i?: number): ClassBlockStmtContext | ClassBlockStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassBlockStmtContext);
		} else {
			return this.getRuleContext(i, ClassBlockStmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_classBlock; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterClassBlock) {
			listener.enterClassBlock(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitClassBlock) {
			listener.exitClassBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitClassBlock) {
			return visitor.visitClassBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBlockStmtContext extends ParserRuleContext {
	public method(): MethodContext | undefined {
		return this.tryGetRuleContext(0, MethodContext);
	}
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	public property(): PropertyContext | undefined {
		return this.tryGetRuleContext(0, PropertyContext);
	}
	public instance(): InstanceContext | undefined {
		return this.tryGetRuleContext(0, InstanceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_classBlockStmt; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterClassBlockStmt) {
			listener.enterClassBlockStmt(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitClassBlockStmt) {
			listener.exitClassBlockStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitClassBlockStmt) {
			return visitor.visitClassBlockStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodContext extends ParserRuleContext {
	public GENERIC_ID(): TerminalNode { return this.getToken(PeopleCodeParser.GENERIC_ID, 0); }
	public formalParamList(): FormalParamListContext {
		return this.getRuleContext(0, FormalParamListContext);
	}
	public returnType(): ReturnTypeContext | undefined {
		return this.tryGetRuleContext(0, ReturnTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_method; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterMethod) {
			listener.enterMethod(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitMethod) {
			listener.exitMethod(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitMethod) {
			return visitor.visitMethod(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	public VAR_ID(): TerminalNode { return this.getToken(PeopleCodeParser.VAR_ID, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_constant; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterConstant) {
			listener.enterConstant(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitConstant) {
			listener.exitConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitConstant) {
			return visitor.visitConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyContext extends ParserRuleContext {
	public _g: Token;
	public _s: Token;
	public _r: Token;
	public varType(): VarTypeContext {
		return this.getRuleContext(0, VarTypeContext);
	}
	public GENERIC_ID(): TerminalNode { return this.getToken(PeopleCodeParser.GENERIC_ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_property; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterProperty) {
			listener.enterProperty(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitProperty) {
			listener.exitProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitProperty) {
			return visitor.visitProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstanceContext extends ParserRuleContext {
	public varType(): VarTypeContext {
		return this.getRuleContext(0, VarTypeContext);
	}
	public VAR_ID(): TerminalNode[];
	public VAR_ID(i: number): TerminalNode;
	public VAR_ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PeopleCodeParser.VAR_ID);
		} else {
			return this.getToken(PeopleCodeParser.VAR_ID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_instance; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterInstance) {
			listener.enterInstance(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitInstance) {
			listener.exitInstance(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitInstance) {
			return visitor.visitInstance(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodImplContext extends ParserRuleContext {
	public _endmethod: Token;
	public GENERIC_ID(): TerminalNode { return this.getToken(PeopleCodeParser.GENERIC_ID, 0); }
	public stmtList(): StmtListContext {
		return this.getRuleContext(0, StmtListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_methodImpl; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterMethodImpl) {
			listener.enterMethodImpl(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitMethodImpl) {
			listener.exitMethodImpl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitMethodImpl) {
			return visitor.visitMethodImpl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GetImplContext extends ParserRuleContext {
	public _endget: Token;
	public GENERIC_ID(): TerminalNode { return this.getToken(PeopleCodeParser.GENERIC_ID, 0); }
	public stmtList(): StmtListContext {
		return this.getRuleContext(0, StmtListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_getImpl; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterGetImpl) {
			listener.enterGetImpl(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitGetImpl) {
			listener.exitGetImpl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitGetImpl) {
			return visitor.visitGetImpl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetImplContext extends ParserRuleContext {
	public _endset: Token;
	public GENERIC_ID(): TerminalNode { return this.getToken(PeopleCodeParser.GENERIC_ID, 0); }
	public stmtList(): StmtListContext {
		return this.getRuleContext(0, StmtListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_setImpl; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterSetImpl) {
			listener.enterSetImpl(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitSetImpl) {
			listener.exitSetImpl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitSetImpl) {
			return visitor.visitSetImpl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncImplContext extends ParserRuleContext {
	public _endfunction: Token;
	public funcSignature(): FuncSignatureContext {
		return this.getRuleContext(0, FuncSignatureContext);
	}
	public stmtList(): StmtListContext {
		return this.getRuleContext(0, StmtListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_funcImpl; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterFuncImpl) {
			listener.enterFuncImpl(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitFuncImpl) {
			listener.exitFuncImpl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitFuncImpl) {
			return visitor.visitFuncImpl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncSignatureContext extends ParserRuleContext {
	public GENERIC_ID(): TerminalNode { return this.getToken(PeopleCodeParser.GENERIC_ID, 0); }
	public formalParamList(): FormalParamListContext | undefined {
		return this.tryGetRuleContext(0, FormalParamListContext);
	}
	public returnType(): ReturnTypeContext | undefined {
		return this.tryGetRuleContext(0, ReturnTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_funcSignature; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterFuncSignature) {
			listener.enterFuncSignature(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitFuncSignature) {
			listener.exitFuncSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitFuncSignature) {
			return visitor.visitFuncSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParamListContext extends ParserRuleContext {
	public param(): ParamContext[];
	public param(i: number): ParamContext;
	public param(i?: number): ParamContext | ParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParamContext);
		} else {
			return this.getRuleContext(i, ParamContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_formalParamList; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterFormalParamList) {
			listener.enterFormalParamList(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitFormalParamList) {
			listener.exitFormalParamList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitFormalParamList) {
			return visitor.visitFormalParamList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamContext extends ParserRuleContext {
	public VAR_ID(): TerminalNode { return this.getToken(PeopleCodeParser.VAR_ID, 0); }
	public varType(): VarTypeContext | undefined {
		return this.tryGetRuleContext(0, VarTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_param; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterParam) {
			listener.enterParam(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitParam) {
			listener.exitParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitParam) {
			return visitor.visitParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnTypeContext extends ParserRuleContext {
	public varType(): VarTypeContext {
		return this.getRuleContext(0, VarTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_returnType; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterReturnType) {
			listener.enterReturnType(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitReturnType) {
			listener.exitReturnType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitReturnType) {
			return visitor.visitReturnType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStmtContext extends ParserRuleContext {
	public _elsetok: Token;
	public _endif: Token;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public stmtList(): StmtListContext[];
	public stmtList(i: number): StmtListContext;
	public stmtList(i?: number): StmtListContext | StmtListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtListContext);
		} else {
			return this.getRuleContext(i, StmtListContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_ifStmt; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterIfStmt) {
			listener.enterIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitIfStmt) {
			listener.exitIfStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitIfStmt) {
			return visitor.visitIfStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStmtContext extends ParserRuleContext {
	public _endfor: Token;
	public VAR_ID(): TerminalNode { return this.getToken(PeopleCodeParser.VAR_ID, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public stmtList(): StmtListContext {
		return this.getRuleContext(0, StmtListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_forStmt; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterForStmt) {
			listener.enterForStmt(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitForStmt) {
			listener.exitForStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitForStmt) {
			return visitor.visitForStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStmtContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public stmtList(): StmtListContext {
		return this.getRuleContext(0, StmtListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_whileStmt; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterWhileStmt) {
			listener.enterWhileStmt(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitWhileStmt) {
			listener.exitWhileStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitWhileStmt) {
			return visitor.visitWhileStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EvaluateStmtContext extends ParserRuleContext {
	public _endevaluate: Token;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public whenBranch(): WhenBranchContext[];
	public whenBranch(i: number): WhenBranchContext;
	public whenBranch(i?: number): WhenBranchContext | WhenBranchContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WhenBranchContext);
		} else {
			return this.getRuleContext(i, WhenBranchContext);
		}
	}
	public whenOtherBranch(): WhenOtherBranchContext | undefined {
		return this.tryGetRuleContext(0, WhenOtherBranchContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_evaluateStmt; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterEvaluateStmt) {
			listener.enterEvaluateStmt(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitEvaluateStmt) {
			listener.exitEvaluateStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitEvaluateStmt) {
			return visitor.visitEvaluateStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhenBranchContext extends ParserRuleContext {
	public _op: Token;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public stmtList(): StmtListContext {
		return this.getRuleContext(0, StmtListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_whenBranch; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterWhenBranch) {
			listener.enterWhenBranch(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitWhenBranch) {
			listener.exitWhenBranch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitWhenBranch) {
			return visitor.visitWhenBranch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhenOtherBranchContext extends ParserRuleContext {
	public stmtList(): StmtListContext {
		return this.getRuleContext(0, StmtListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_whenOtherBranch; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterWhenOtherBranch) {
			listener.enterWhenOtherBranch(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitWhenOtherBranch) {
			listener.exitWhenOtherBranch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitWhenOtherBranch) {
			return visitor.visitWhenOtherBranch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryCatchStmtContext extends ParserRuleContext {
	public _trytok: Token;
	public _endtry: Token;
	public stmtList(): StmtListContext[];
	public stmtList(i: number): StmtListContext;
	public stmtList(i?: number): StmtListContext | StmtListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtListContext);
		} else {
			return this.getRuleContext(i, StmtListContext);
		}
	}
	public catchSignature(): CatchSignatureContext {
		return this.getRuleContext(0, CatchSignatureContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_tryCatchStmt; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterTryCatchStmt) {
			listener.enterTryCatchStmt(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitTryCatchStmt) {
			listener.exitTryCatchStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitTryCatchStmt) {
			return visitor.visitTryCatchStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchSignatureContext extends ParserRuleContext {
	public _exClass: Token;
	public VAR_ID(): TerminalNode { return this.getToken(PeopleCodeParser.VAR_ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_catchSignature; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterCatchSignature) {
			listener.enterCatchSignature(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitCatchSignature) {
			listener.exitCatchSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitCatchSignature) {
			return visitor.visitCatchSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateInvocationContext extends ParserRuleContext {
	public appClassPath(): AppClassPathContext | undefined {
		return this.tryGetRuleContext(0, AppClassPathContext);
	}
	public GENERIC_ID(): TerminalNode | undefined { return this.tryGetToken(PeopleCodeParser.GENERIC_ID, 0); }
	public exprList(): ExprListContext | undefined {
		return this.tryGetRuleContext(0, ExprListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_createInvocation; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterCreateInvocation) {
			listener.enterCreateInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitCreateInvocation) {
			listener.exitCreateInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitCreateInvocation) {
			return visitor.visitCreateInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public DecimalLiteral(): TerminalNode | undefined { return this.tryGetToken(PeopleCodeParser.DecimalLiteral, 0); }
	public IntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(PeopleCodeParser.IntegerLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(PeopleCodeParser.StringLiteral, 0); }
	public BoolLiteral(): TerminalNode | undefined { return this.tryGetToken(PeopleCodeParser.BoolLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_literal; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdContext extends ParserRuleContext {
	public SYS_VAR_ID(): TerminalNode | undefined { return this.tryGetToken(PeopleCodeParser.SYS_VAR_ID, 0); }
	public VAR_ID(): TerminalNode | undefined { return this.tryGetToken(PeopleCodeParser.VAR_ID, 0); }
	public GENERIC_ID(): TerminalNode | undefined { return this.tryGetToken(PeopleCodeParser.GENERIC_ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PeopleCodeParser.RULE_id; }
	// @Override
	public enterRule(listener: PeopleCodeListener): void {
		if (listener.enterId) {
			listener.enterId(this);
		}
	}
	// @Override
	public exitRule(listener: PeopleCodeListener): void {
		if (listener.exitId) {
			listener.exitId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PeopleCodeVisitor<Result>): Result {
		if (visitor.visitId) {
			return visitor.visitId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


